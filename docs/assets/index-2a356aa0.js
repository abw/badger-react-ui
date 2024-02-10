var r5=Object.defineProperty;var o5=(e,t,n)=>t in e?r5(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var xe=(e,t,n)=>(o5(e,typeof t!="symbol"?t+"":t,n),n);function $1(e,t){for(var n=0;n<t.length;n++){const o=t[n];if(typeof o!="string"&&!Array.isArray(o)){for(const a in o)if(a!=="default"&&!(a in e)){const s=Object.getOwnPropertyDescriptor(o,a);s&&Object.defineProperty(e,a,s.get?s:{enumerable:!0,get:()=>o[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}})();var Hl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Vn(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var B1={exports:{}},_i={},I1={exports:{}},fe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var js=Symbol.for("react.element"),a5=Symbol.for("react.portal"),s5=Symbol.for("react.fragment"),l5=Symbol.for("react.strict_mode"),i5=Symbol.for("react.profiler"),c5=Symbol.for("react.provider"),d5=Symbol.for("react.context"),u5=Symbol.for("react.forward_ref"),p5=Symbol.for("react.suspense"),f5=Symbol.for("react.memo"),h5=Symbol.for("react.lazy"),af=Symbol.iterator;function m5(e){return e===null||typeof e!="object"?null:(e=af&&e[af]||e["@@iterator"],typeof e=="function"?e:null)}var z1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F1=Object.assign,H1={};function Yo(e,t,n){this.props=e,this.context=t,this.refs=H1,this.updater=n||z1}Yo.prototype.isReactComponent={};Yo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Yo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function U1(){}U1.prototype=Yo.prototype;function pu(e,t,n){this.props=e,this.context=t,this.refs=H1,this.updater=n||z1}var fu=pu.prototype=new U1;fu.constructor=pu;F1(fu,Yo.prototype);fu.isPureReactComponent=!0;var sf=Array.isArray,V1=Object.prototype.hasOwnProperty,hu={current:null},W1={key:!0,ref:!0,__self:!0,__source:!0};function Z1(e,t,n){var o,a={},s=null,l=null;if(t!=null)for(o in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(s=""+t.key),t)V1.call(t,o)&&!W1.hasOwnProperty(o)&&(a[o]=t[o]);var i=arguments.length-2;if(i===1)a.children=n;else if(1<i){for(var c=Array(i),d=0;d<i;d++)c[d]=arguments[d+2];a.children=c}if(e&&e.defaultProps)for(o in i=e.defaultProps,i)a[o]===void 0&&(a[o]=i[o]);return{$$typeof:js,type:e,key:s,ref:l,props:a,_owner:hu.current}}function x5(e,t){return{$$typeof:js,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function mu(e){return typeof e=="object"&&e!==null&&e.$$typeof===js}function g5(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var lf=/\/+/g;function uc(e,t){return typeof e=="object"&&e!==null&&e.key!=null?g5(""+e.key):t.toString(36)}function kl(e,t,n,o,a){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case js:case a5:l=!0}}if(l)return l=e,a=a(l),e=o===""?"."+uc(l,0):o,sf(a)?(n="",e!=null&&(n=e.replace(lf,"$&/")+"/"),kl(a,t,n,"",function(d){return d})):a!=null&&(mu(a)&&(a=x5(a,n+(!a.key||l&&l.key===a.key?"":(""+a.key).replace(lf,"$&/")+"/")+e)),t.push(a)),1;if(l=0,o=o===""?".":o+":",sf(e))for(var i=0;i<e.length;i++){s=e[i];var c=o+uc(s,i);l+=kl(s,t,n,c,a)}else if(c=m5(e),typeof c=="function")for(e=c.call(e),i=0;!(s=e.next()).done;)s=s.value,c=o+uc(s,i++),l+=kl(s,t,n,c,a);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Js(e,t,n){if(e==null)return e;var o=[],a=0;return kl(e,o,"","",function(s){return t.call(n,s,a++)}),o}function v5(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var vt={current:null},Tl={transition:null},y5={ReactCurrentDispatcher:vt,ReactCurrentBatchConfig:Tl,ReactCurrentOwner:hu};fe.Children={map:Js,forEach:function(e,t,n){Js(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Js(e,function(){t++}),t},toArray:function(e){return Js(e,function(t){return t})||[]},only:function(e){if(!mu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};fe.Component=Yo;fe.Fragment=s5;fe.Profiler=i5;fe.PureComponent=pu;fe.StrictMode=l5;fe.Suspense=p5;fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=y5;fe.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=F1({},e.props),a=e.key,s=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,l=hu.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(c in t)V1.call(t,c)&&!W1.hasOwnProperty(c)&&(o[c]=t[c]===void 0&&i!==void 0?i[c]:t[c])}var c=arguments.length-2;if(c===1)o.children=n;else if(1<c){i=Array(c);for(var d=0;d<c;d++)i[d]=arguments[d+2];o.children=i}return{$$typeof:js,type:e.type,key:a,ref:s,props:o,_owner:l}};fe.createContext=function(e){return e={$$typeof:d5,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:c5,_context:e},e.Consumer=e};fe.createElement=Z1;fe.createFactory=function(e){var t=Z1.bind(null,e);return t.type=e,t};fe.createRef=function(){return{current:null}};fe.forwardRef=function(e){return{$$typeof:u5,render:e}};fe.isValidElement=mu;fe.lazy=function(e){return{$$typeof:h5,_payload:{_status:-1,_result:e},_init:v5}};fe.memo=function(e,t){return{$$typeof:f5,type:e,compare:t===void 0?null:t}};fe.startTransition=function(e){var t=Tl.transition;Tl.transition={};try{e()}finally{Tl.transition=t}};fe.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};fe.useCallback=function(e,t){return vt.current.useCallback(e,t)};fe.useContext=function(e){return vt.current.useContext(e)};fe.useDebugValue=function(){};fe.useDeferredValue=function(e){return vt.current.useDeferredValue(e)};fe.useEffect=function(e,t){return vt.current.useEffect(e,t)};fe.useId=function(){return vt.current.useId()};fe.useImperativeHandle=function(e,t,n){return vt.current.useImperativeHandle(e,t,n)};fe.useInsertionEffect=function(e,t){return vt.current.useInsertionEffect(e,t)};fe.useLayoutEffect=function(e,t){return vt.current.useLayoutEffect(e,t)};fe.useMemo=function(e,t){return vt.current.useMemo(e,t)};fe.useReducer=function(e,t,n){return vt.current.useReducer(e,t,n)};fe.useRef=function(e){return vt.current.useRef(e)};fe.useState=function(e){return vt.current.useState(e)};fe.useSyncExternalStore=function(e,t,n){return vt.current.useSyncExternalStore(e,t,n)};fe.useTransition=function(){return vt.current.useTransition()};fe.version="18.2.0";I1.exports=fe;var v=I1.exports;const te=Vn(v),j5=$1({__proto__:null,default:te},[v]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b5=v,C5=Symbol.for("react.element"),S5=Symbol.for("react.fragment"),w5=Object.prototype.hasOwnProperty,_5=b5.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,k5={key:!0,ref:!0,__self:!0,__source:!0};function K1(e,t,n){var o,a={},s=null,l=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(l=t.ref);for(o in t)w5.call(t,o)&&!k5.hasOwnProperty(o)&&(a[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps,t)a[o]===void 0&&(a[o]=t[o]);return{$$typeof:C5,type:e,key:s,ref:l,props:a,_owner:_5.current}}_i.Fragment=S5;_i.jsx=K1;_i.jsxs=K1;B1.exports=_i;var r=B1.exports,td={},Y1={exports:{}},$t={},G1={exports:{}},X1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(O,B){var I=O.length;O.push(B);e:for(;0<I;){var H=I-1>>>1,W=O[H];if(0<a(W,B))O[H]=B,O[I]=W,I=H;else break e}}function n(O){return O.length===0?null:O[0]}function o(O){if(O.length===0)return null;var B=O[0],I=O.pop();if(I!==B){O[0]=I;e:for(var H=0,W=O.length,we=W>>>1;H<we;){var le=2*(H+1)-1,be=O[le],se=le+1,Re=O[se];if(0>a(be,I))se<W&&0>a(Re,be)?(O[H]=Re,O[se]=I,H=se):(O[H]=be,O[le]=I,H=le);else if(se<W&&0>a(Re,I))O[H]=Re,O[se]=I,H=se;else break e}}return B}function a(O,B){var I=O.sortIndex-B.sortIndex;return I!==0?I:O.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var l=Date,i=l.now();e.unstable_now=function(){return l.now()-i}}var c=[],d=[],u=1,p=null,m=3,y=!1,C=!1,b=!1,_=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(O){for(var B=n(d);B!==null;){if(B.callback===null)o(d);else if(B.startTime<=O)o(d),B.sortIndex=B.expirationTime,t(c,B);else break;B=n(d)}}function j(O){if(b=!1,h(O),!C)if(n(c)!==null)C=!0,ae(S);else{var B=n(d);B!==null&&V(j,B.startTime-O)}}function S(O,B){C=!1,b&&(b=!1,g(T),T=-1),y=!0;var I=m;try{for(h(B),p=n(c);p!==null&&(!(p.expirationTime>B)||O&&!M());){var H=p.callback;if(typeof H=="function"){p.callback=null,m=p.priorityLevel;var W=H(p.expirationTime<=B);B=e.unstable_now(),typeof W=="function"?p.callback=W:p===n(c)&&o(c),h(B)}else o(c);p=n(c)}if(p!==null)var we=!0;else{var le=n(d);le!==null&&V(j,le.startTime-B),we=!1}return we}finally{p=null,m=I,y=!1}}var x=!1,w=null,T=-1,E=5,D=-1;function M(){return!(e.unstable_now()-D<E)}function K(){if(w!==null){var O=e.unstable_now();D=O;var B=!0;try{B=w(!0,O)}finally{B?X():(x=!1,w=null)}}else x=!1}var X;if(typeof f=="function")X=function(){f(K)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,re=Q.port2;Q.port1.onmessage=K,X=function(){re.postMessage(null)}}else X=function(){_(K,0)};function ae(O){w=O,x||(x=!0,X())}function V(O,B){T=_(function(){O(e.unstable_now())},B)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(O){O.callback=null},e.unstable_continueExecution=function(){C||y||(C=!0,ae(S))},e.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<O?Math.floor(1e3/O):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(O){switch(m){case 1:case 2:case 3:var B=3;break;default:B=m}var I=m;m=B;try{return O()}finally{m=I}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(O,B){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var I=m;m=O;try{return B()}finally{m=I}},e.unstable_scheduleCallback=function(O,B,I){var H=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?H+I:H):I=H,O){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=I+W,O={id:u++,callback:B,priorityLevel:O,startTime:I,expirationTime:W,sortIndex:-1},I>H?(O.sortIndex=I,t(d,O),n(c)===null&&O===n(d)&&(b?(g(T),T=-1):b=!0,V(j,I-H))):(O.sortIndex=W,t(c,O),C||y||(C=!0,ae(S))),O},e.unstable_shouldYield=M,e.unstable_wrapCallback=function(O){var B=m;return function(){var I=m;m=B;try{return O.apply(this,arguments)}finally{m=I}}}})(X1);G1.exports=X1;var T5=G1.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q1=v,Pt=T5;function P(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var q1=new Set,Xa={};function no(e,t){zo(e,t),zo(e+"Capture",t)}function zo(e,t){for(Xa[e]=t,e=0;e<t.length;e++)q1.add(t[e])}var In=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),nd=Object.prototype.hasOwnProperty,E5=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,cf={},df={};function N5(e){return nd.call(df,e)?!0:nd.call(cf,e)?!1:E5.test(e)?df[e]=!0:(cf[e]=!0,!1)}function R5(e,t,n,o){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return o?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function L5(e,t,n,o){if(t===null||typeof t>"u"||R5(e,t,n,o))return!0;if(o)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function yt(e,t,n,o,a,s,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=o,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=l}var st={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){st[e]=new yt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];st[t]=new yt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){st[e]=new yt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){st[e]=new yt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){st[e]=new yt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){st[e]=new yt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){st[e]=new yt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){st[e]=new yt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){st[e]=new yt(e,5,!1,e.toLowerCase(),null,!1,!1)});var xu=/[\-:]([a-z])/g;function gu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(xu,gu);st[t]=new yt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(xu,gu);st[t]=new yt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(xu,gu);st[t]=new yt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){st[e]=new yt(e,1,!1,e.toLowerCase(),null,!1,!1)});st.xlinkHref=new yt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){st[e]=new yt(e,1,!1,e.toLowerCase(),null,!0,!0)});function vu(e,t,n,o){var a=st.hasOwnProperty(t)?st[t]:null;(a!==null?a.type!==0:o||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(L5(t,n,a,o)&&(n=null),o||a===null?N5(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,o=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,o?e.setAttributeNS(o,t,n):e.setAttribute(t,n))))}var Wn=Q1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,el=Symbol.for("react.element"),vo=Symbol.for("react.portal"),yo=Symbol.for("react.fragment"),yu=Symbol.for("react.strict_mode"),rd=Symbol.for("react.profiler"),J1=Symbol.for("react.provider"),em=Symbol.for("react.context"),ju=Symbol.for("react.forward_ref"),od=Symbol.for("react.suspense"),ad=Symbol.for("react.suspense_list"),bu=Symbol.for("react.memo"),nr=Symbol.for("react.lazy"),tm=Symbol.for("react.offscreen"),uf=Symbol.iterator;function ca(e){return e===null||typeof e!="object"?null:(e=uf&&e[uf]||e["@@iterator"],typeof e=="function"?e:null)}var Ie=Object.assign,pc;function wa(e){if(pc===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);pc=t&&t[1]||""}return`
`+pc+e}var fc=!1;function hc(e,t){if(!e||fc)return"";fc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var o=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){o=d}e.call(t.prototype)}else{try{throw Error()}catch(d){o=d}e()}}catch(d){if(d&&o&&typeof d.stack=="string"){for(var a=d.stack.split(`
`),s=o.stack.split(`
`),l=a.length-1,i=s.length-1;1<=l&&0<=i&&a[l]!==s[i];)i--;for(;1<=l&&0<=i;l--,i--)if(a[l]!==s[i]){if(l!==1||i!==1)do if(l--,i--,0>i||a[l]!==s[i]){var c=`
`+a[l].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=l&&0<=i);break}}}finally{fc=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?wa(e):""}function D5(e){switch(e.tag){case 5:return wa(e.type);case 16:return wa("Lazy");case 13:return wa("Suspense");case 19:return wa("SuspenseList");case 0:case 2:case 15:return e=hc(e.type,!1),e;case 11:return e=hc(e.type.render,!1),e;case 1:return e=hc(e.type,!0),e;default:return""}}function sd(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case yo:return"Fragment";case vo:return"Portal";case rd:return"Profiler";case yu:return"StrictMode";case od:return"Suspense";case ad:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case em:return(e.displayName||"Context")+".Consumer";case J1:return(e._context.displayName||"Context")+".Provider";case ju:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case bu:return t=e.displayName||null,t!==null?t:sd(e.type)||"Memo";case nr:t=e._payload,e=e._init;try{return sd(e(t))}catch{}}return null}function O5(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return sd(t);case 8:return t===yu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function gr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function nm(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function A5(e){var t=nm(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(l){o=""+l,s.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return o},setValue:function(l){o=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function tl(e){e._valueTracker||(e._valueTracker=A5(e))}function rm(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),o="";return e&&(o=nm(e)?e.checked?"true":"false":e.value),e=o,e!==n?(t.setValue(e),!0):!1}function Ul(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ld(e,t){var n=t.checked;return Ie({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function pf(e,t){var n=t.defaultValue==null?"":t.defaultValue,o=t.checked!=null?t.checked:t.defaultChecked;n=gr(t.value!=null?t.value:n),e._wrapperState={initialChecked:o,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function om(e,t){t=t.checked,t!=null&&vu(e,"checked",t,!1)}function id(e,t){om(e,t);var n=gr(t.value),o=t.type;if(n!=null)o==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?cd(e,t.type,n):t.hasOwnProperty("defaultValue")&&cd(e,t.type,gr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ff(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!(o!=="submit"&&o!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function cd(e,t,n){(t!=="number"||Ul(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var _a=Array.isArray;function Oo(e,t,n,o){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&o&&(e[n].defaultSelected=!0)}else{for(n=""+gr(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,o&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function dd(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(P(91));return Ie({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function hf(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(P(92));if(_a(n)){if(1<n.length)throw Error(P(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:gr(n)}}function am(e,t){var n=gr(t.value),o=gr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),o!=null&&(e.defaultValue=""+o)}function mf(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function sm(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ud(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?sm(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var nl,lm=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,o,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,o,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(nl=nl||document.createElement("div"),nl.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=nl.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Qa(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Pa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},M5=["Webkit","ms","Moz","O"];Object.keys(Pa).forEach(function(e){M5.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Pa[t]=Pa[e]})});function im(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Pa.hasOwnProperty(e)&&Pa[e]?(""+t).trim():t+"px"}function cm(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var o=n.indexOf("--")===0,a=im(n,t[n],o);n==="float"&&(n="cssFloat"),o?e.setProperty(n,a):e[n]=a}}var P5=Ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pd(e,t){if(t){if(P5[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(P(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(P(61))}if(t.style!=null&&typeof t.style!="object")throw Error(P(62))}}function fd(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hd=null;function Cu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var md=null,Ao=null,Mo=null;function xf(e){if(e=Ss(e)){if(typeof md!="function")throw Error(P(280));var t=e.stateNode;t&&(t=Ri(t),md(e.stateNode,e.type,t))}}function dm(e){Ao?Mo?Mo.push(e):Mo=[e]:Ao=e}function um(){if(Ao){var e=Ao,t=Mo;if(Mo=Ao=null,xf(e),t)for(e=0;e<t.length;e++)xf(t[e])}}function pm(e,t){return e(t)}function fm(){}var mc=!1;function hm(e,t,n){if(mc)return e(t,n);mc=!0;try{return pm(e,t,n)}finally{mc=!1,(Ao!==null||Mo!==null)&&(fm(),um())}}function qa(e,t){var n=e.stateNode;if(n===null)return null;var o=Ri(n);if(o===null)return null;n=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(P(231,t,typeof n));return n}var xd=!1;if(In)try{var da={};Object.defineProperty(da,"passive",{get:function(){xd=!0}}),window.addEventListener("test",da,da),window.removeEventListener("test",da,da)}catch{xd=!1}function $5(e,t,n,o,a,s,l,i,c){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(u){this.onError(u)}}var $a=!1,Vl=null,Wl=!1,gd=null,B5={onError:function(e){$a=!0,Vl=e}};function I5(e,t,n,o,a,s,l,i,c){$a=!1,Vl=null,$5.apply(B5,arguments)}function z5(e,t,n,o,a,s,l,i,c){if(I5.apply(this,arguments),$a){if($a){var d=Vl;$a=!1,Vl=null}else throw Error(P(198));Wl||(Wl=!0,gd=d)}}function ro(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function mm(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function gf(e){if(ro(e)!==e)throw Error(P(188))}function F5(e){var t=e.alternate;if(!t){if(t=ro(e),t===null)throw Error(P(188));return t!==e?null:e}for(var n=e,o=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(o=a.return,o!==null){n=o;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return gf(a),e;if(s===o)return gf(a),t;s=s.sibling}throw Error(P(188))}if(n.return!==o.return)n=a,o=s;else{for(var l=!1,i=a.child;i;){if(i===n){l=!0,n=a,o=s;break}if(i===o){l=!0,o=a,n=s;break}i=i.sibling}if(!l){for(i=s.child;i;){if(i===n){l=!0,n=s,o=a;break}if(i===o){l=!0,o=s,n=a;break}i=i.sibling}if(!l)throw Error(P(189))}}if(n.alternate!==o)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?e:t}function xm(e){return e=F5(e),e!==null?gm(e):null}function gm(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=gm(e);if(t!==null)return t;e=e.sibling}return null}var vm=Pt.unstable_scheduleCallback,vf=Pt.unstable_cancelCallback,H5=Pt.unstable_shouldYield,U5=Pt.unstable_requestPaint,Ve=Pt.unstable_now,V5=Pt.unstable_getCurrentPriorityLevel,Su=Pt.unstable_ImmediatePriority,ym=Pt.unstable_UserBlockingPriority,Zl=Pt.unstable_NormalPriority,W5=Pt.unstable_LowPriority,jm=Pt.unstable_IdlePriority,ki=null,bn=null;function Z5(e){if(bn&&typeof bn.onCommitFiberRoot=="function")try{bn.onCommitFiberRoot(ki,e,void 0,(e.current.flags&128)===128)}catch{}}var ln=Math.clz32?Math.clz32:G5,K5=Math.log,Y5=Math.LN2;function G5(e){return e>>>=0,e===0?32:31-(K5(e)/Y5|0)|0}var rl=64,ol=4194304;function ka(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Kl(e,t){var n=e.pendingLanes;if(n===0)return 0;var o=0,a=e.suspendedLanes,s=e.pingedLanes,l=n&268435455;if(l!==0){var i=l&~a;i!==0?o=ka(i):(s&=l,s!==0&&(o=ka(s)))}else l=n&~a,l!==0?o=ka(l):s!==0&&(o=ka(s));if(o===0)return 0;if(t!==0&&t!==o&&!(t&a)&&(a=o&-o,s=t&-t,a>=s||a===16&&(s&4194240)!==0))return t;if(o&4&&(o|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=o;0<t;)n=31-ln(t),a=1<<n,o|=e[n],t&=~a;return o}function X5(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Q5(e,t){for(var n=e.suspendedLanes,o=e.pingedLanes,a=e.expirationTimes,s=e.pendingLanes;0<s;){var l=31-ln(s),i=1<<l,c=a[l];c===-1?(!(i&n)||i&o)&&(a[l]=X5(i,t)):c<=t&&(e.expiredLanes|=i),s&=~i}}function vd(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function bm(){var e=rl;return rl<<=1,!(rl&4194240)&&(rl=64),e}function xc(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function bs(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ln(t),e[t]=n}function q5(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-ln(n),s=1<<a;t[a]=0,o[a]=-1,e[a]=-1,n&=~s}}function wu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var o=31-ln(n),a=1<<o;a&t|e[o]&t&&(e[o]|=t),n&=~a}}var Ce=0;function Cm(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Sm,_u,wm,_m,km,yd=!1,al=[],cr=null,dr=null,ur=null,Ja=new Map,es=new Map,ar=[],J5="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yf(e,t){switch(e){case"focusin":case"focusout":cr=null;break;case"dragenter":case"dragleave":dr=null;break;case"mouseover":case"mouseout":ur=null;break;case"pointerover":case"pointerout":Ja.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":es.delete(t.pointerId)}}function ua(e,t,n,o,a,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:o,nativeEvent:s,targetContainers:[a]},t!==null&&(t=Ss(t),t!==null&&_u(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function e6(e,t,n,o,a){switch(t){case"focusin":return cr=ua(cr,e,t,n,o,a),!0;case"dragenter":return dr=ua(dr,e,t,n,o,a),!0;case"mouseover":return ur=ua(ur,e,t,n,o,a),!0;case"pointerover":var s=a.pointerId;return Ja.set(s,ua(Ja.get(s)||null,e,t,n,o,a)),!0;case"gotpointercapture":return s=a.pointerId,es.set(s,ua(es.get(s)||null,e,t,n,o,a)),!0}return!1}function Tm(e){var t=Fr(e.target);if(t!==null){var n=ro(t);if(n!==null){if(t=n.tag,t===13){if(t=mm(n),t!==null){e.blockedOn=t,km(e.priority,function(){wm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function El(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=jd(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var o=new n.constructor(n.type,n);hd=o,n.target.dispatchEvent(o),hd=null}else return t=Ss(n),t!==null&&_u(t),e.blockedOn=n,!1;t.shift()}return!0}function jf(e,t,n){El(e)&&n.delete(t)}function t6(){yd=!1,cr!==null&&El(cr)&&(cr=null),dr!==null&&El(dr)&&(dr=null),ur!==null&&El(ur)&&(ur=null),Ja.forEach(jf),es.forEach(jf)}function pa(e,t){e.blockedOn===t&&(e.blockedOn=null,yd||(yd=!0,Pt.unstable_scheduleCallback(Pt.unstable_NormalPriority,t6)))}function ts(e){function t(a){return pa(a,e)}if(0<al.length){pa(al[0],e);for(var n=1;n<al.length;n++){var o=al[n];o.blockedOn===e&&(o.blockedOn=null)}}for(cr!==null&&pa(cr,e),dr!==null&&pa(dr,e),ur!==null&&pa(ur,e),Ja.forEach(t),es.forEach(t),n=0;n<ar.length;n++)o=ar[n],o.blockedOn===e&&(o.blockedOn=null);for(;0<ar.length&&(n=ar[0],n.blockedOn===null);)Tm(n),n.blockedOn===null&&ar.shift()}var Po=Wn.ReactCurrentBatchConfig,Yl=!0;function n6(e,t,n,o){var a=Ce,s=Po.transition;Po.transition=null;try{Ce=1,ku(e,t,n,o)}finally{Ce=a,Po.transition=s}}function r6(e,t,n,o){var a=Ce,s=Po.transition;Po.transition=null;try{Ce=4,ku(e,t,n,o)}finally{Ce=a,Po.transition=s}}function ku(e,t,n,o){if(Yl){var a=jd(e,t,n,o);if(a===null)kc(e,t,o,Gl,n),yf(e,o);else if(e6(a,e,t,n,o))o.stopPropagation();else if(yf(e,o),t&4&&-1<J5.indexOf(e)){for(;a!==null;){var s=Ss(a);if(s!==null&&Sm(s),s=jd(e,t,n,o),s===null&&kc(e,t,o,Gl,n),s===a)break;a=s}a!==null&&o.stopPropagation()}else kc(e,t,o,null,n)}}var Gl=null;function jd(e,t,n,o){if(Gl=null,e=Cu(o),e=Fr(e),e!==null)if(t=ro(e),t===null)e=null;else if(n=t.tag,n===13){if(e=mm(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Gl=e,null}function Em(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(V5()){case Su:return 1;case ym:return 4;case Zl:case W5:return 16;case jm:return 536870912;default:return 16}default:return 16}}var lr=null,Tu=null,Nl=null;function Nm(){if(Nl)return Nl;var e,t=Tu,n=t.length,o,a="value"in lr?lr.value:lr.textContent,s=a.length;for(e=0;e<n&&t[e]===a[e];e++);var l=n-e;for(o=1;o<=l&&t[n-o]===a[s-o];o++);return Nl=a.slice(e,1<o?1-o:void 0)}function Rl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function sl(){return!0}function bf(){return!1}function Bt(e){function t(n,o,a,s,l){this._reactName=n,this._targetInst=a,this.type=o,this.nativeEvent=s,this.target=l,this.currentTarget=null;for(var i in e)e.hasOwnProperty(i)&&(n=e[i],this[i]=n?n(s):s[i]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?sl:bf,this.isPropagationStopped=bf,this}return Ie(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=sl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=sl)},persist:function(){},isPersistent:sl}),t}var Go={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Eu=Bt(Go),Cs=Ie({},Go,{view:0,detail:0}),o6=Bt(Cs),gc,vc,fa,Ti=Ie({},Cs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Nu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==fa&&(fa&&e.type==="mousemove"?(gc=e.screenX-fa.screenX,vc=e.screenY-fa.screenY):vc=gc=0,fa=e),gc)},movementY:function(e){return"movementY"in e?e.movementY:vc}}),Cf=Bt(Ti),a6=Ie({},Ti,{dataTransfer:0}),s6=Bt(a6),l6=Ie({},Cs,{relatedTarget:0}),yc=Bt(l6),i6=Ie({},Go,{animationName:0,elapsedTime:0,pseudoElement:0}),c6=Bt(i6),d6=Ie({},Go,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),u6=Bt(d6),p6=Ie({},Go,{data:0}),Sf=Bt(p6),f6={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},h6={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},m6={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function x6(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=m6[e])?!!t[e]:!1}function Nu(){return x6}var g6=Ie({},Cs,{key:function(e){if(e.key){var t=f6[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Rl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?h6[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Nu,charCode:function(e){return e.type==="keypress"?Rl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Rl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),v6=Bt(g6),y6=Ie({},Ti,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wf=Bt(y6),j6=Ie({},Cs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Nu}),b6=Bt(j6),C6=Ie({},Go,{propertyName:0,elapsedTime:0,pseudoElement:0}),S6=Bt(C6),w6=Ie({},Ti,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),_6=Bt(w6),k6=[9,13,27,32],Ru=In&&"CompositionEvent"in window,Ba=null;In&&"documentMode"in document&&(Ba=document.documentMode);var T6=In&&"TextEvent"in window&&!Ba,Rm=In&&(!Ru||Ba&&8<Ba&&11>=Ba),_f=String.fromCharCode(32),kf=!1;function Lm(e,t){switch(e){case"keyup":return k6.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var jo=!1;function E6(e,t){switch(e){case"compositionend":return Dm(t);case"keypress":return t.which!==32?null:(kf=!0,_f);case"textInput":return e=t.data,e===_f&&kf?null:e;default:return null}}function N6(e,t){if(jo)return e==="compositionend"||!Ru&&Lm(e,t)?(e=Nm(),Nl=Tu=lr=null,jo=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Rm&&t.locale!=="ko"?null:t.data;default:return null}}var R6={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Tf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!R6[e.type]:t==="textarea"}function Om(e,t,n,o){dm(o),t=Xl(t,"onChange"),0<t.length&&(n=new Eu("onChange","change",null,n,o),e.push({event:n,listeners:t}))}var Ia=null,ns=null;function L6(e){Vm(e,0)}function Ei(e){var t=So(e);if(rm(t))return e}function D6(e,t){if(e==="change")return t}var Am=!1;if(In){var jc;if(In){var bc="oninput"in document;if(!bc){var Ef=document.createElement("div");Ef.setAttribute("oninput","return;"),bc=typeof Ef.oninput=="function"}jc=bc}else jc=!1;Am=jc&&(!document.documentMode||9<document.documentMode)}function Nf(){Ia&&(Ia.detachEvent("onpropertychange",Mm),ns=Ia=null)}function Mm(e){if(e.propertyName==="value"&&Ei(ns)){var t=[];Om(t,ns,e,Cu(e)),hm(L6,t)}}function O6(e,t,n){e==="focusin"?(Nf(),Ia=t,ns=n,Ia.attachEvent("onpropertychange",Mm)):e==="focusout"&&Nf()}function A6(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ei(ns)}function M6(e,t){if(e==="click")return Ei(t)}function P6(e,t){if(e==="input"||e==="change")return Ei(t)}function $6(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var dn=typeof Object.is=="function"?Object.is:$6;function rs(e,t){if(dn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var a=n[o];if(!nd.call(t,a)||!dn(e[a],t[a]))return!1}return!0}function Rf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Lf(e,t){var n=Rf(e);e=0;for(var o;n;){if(n.nodeType===3){if(o=e+n.textContent.length,e<=t&&o>=t)return{node:n,offset:t-e};e=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Rf(n)}}function Pm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Pm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function $m(){for(var e=window,t=Ul();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ul(e.document)}return t}function Lu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function B6(e){var t=$m(),n=e.focusedElem,o=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Pm(n.ownerDocument.documentElement,n)){if(o!==null&&Lu(n)){if(t=o.start,e=o.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,s=Math.min(o.start,a);o=o.end===void 0?s:Math.min(o.end,a),!e.extend&&s>o&&(a=o,o=s,s=a),a=Lf(n,s);var l=Lf(n,o);a&&l&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),s>o?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var I6=In&&"documentMode"in document&&11>=document.documentMode,bo=null,bd=null,za=null,Cd=!1;function Df(e,t,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Cd||bo==null||bo!==Ul(o)||(o=bo,"selectionStart"in o&&Lu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),za&&rs(za,o)||(za=o,o=Xl(bd,"onSelect"),0<o.length&&(t=new Eu("onSelect","select",null,t,n),e.push({event:t,listeners:o}),t.target=bo)))}function ll(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Co={animationend:ll("Animation","AnimationEnd"),animationiteration:ll("Animation","AnimationIteration"),animationstart:ll("Animation","AnimationStart"),transitionend:ll("Transition","TransitionEnd")},Cc={},Bm={};In&&(Bm=document.createElement("div").style,"AnimationEvent"in window||(delete Co.animationend.animation,delete Co.animationiteration.animation,delete Co.animationstart.animation),"TransitionEvent"in window||delete Co.transitionend.transition);function Ni(e){if(Cc[e])return Cc[e];if(!Co[e])return e;var t=Co[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Bm)return Cc[e]=t[n];return e}var Im=Ni("animationend"),zm=Ni("animationiteration"),Fm=Ni("animationstart"),Hm=Ni("transitionend"),Um=new Map,Of="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Cr(e,t){Um.set(e,t),no(t,[e])}for(var Sc=0;Sc<Of.length;Sc++){var wc=Of[Sc],z6=wc.toLowerCase(),F6=wc[0].toUpperCase()+wc.slice(1);Cr(z6,"on"+F6)}Cr(Im,"onAnimationEnd");Cr(zm,"onAnimationIteration");Cr(Fm,"onAnimationStart");Cr("dblclick","onDoubleClick");Cr("focusin","onFocus");Cr("focusout","onBlur");Cr(Hm,"onTransitionEnd");zo("onMouseEnter",["mouseout","mouseover"]);zo("onMouseLeave",["mouseout","mouseover"]);zo("onPointerEnter",["pointerout","pointerover"]);zo("onPointerLeave",["pointerout","pointerover"]);no("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));no("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));no("onBeforeInput",["compositionend","keypress","textInput","paste"]);no("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));no("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));no("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ta="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),H6=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ta));function Af(e,t,n){var o=e.type||"unknown-event";e.currentTarget=n,z5(o,t,void 0,e),e.currentTarget=null}function Vm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var o=e[n],a=o.event;o=o.listeners;e:{var s=void 0;if(t)for(var l=o.length-1;0<=l;l--){var i=o[l],c=i.instance,d=i.currentTarget;if(i=i.listener,c!==s&&a.isPropagationStopped())break e;Af(a,i,d),s=c}else for(l=0;l<o.length;l++){if(i=o[l],c=i.instance,d=i.currentTarget,i=i.listener,c!==s&&a.isPropagationStopped())break e;Af(a,i,d),s=c}}}if(Wl)throw e=gd,Wl=!1,gd=null,e}function Ee(e,t){var n=t[Td];n===void 0&&(n=t[Td]=new Set);var o=e+"__bubble";n.has(o)||(Wm(t,e,2,!1),n.add(o))}function _c(e,t,n){var o=0;t&&(o|=4),Wm(n,e,o,t)}var il="_reactListening"+Math.random().toString(36).slice(2);function os(e){if(!e[il]){e[il]=!0,q1.forEach(function(n){n!=="selectionchange"&&(H6.has(n)||_c(n,!1,e),_c(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[il]||(t[il]=!0,_c("selectionchange",!1,t))}}function Wm(e,t,n,o){switch(Em(t)){case 1:var a=n6;break;case 4:a=r6;break;default:a=ku}n=a.bind(null,t,n,e),a=void 0,!xd||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),o?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function kc(e,t,n,o,a){var s=o;if(!(t&1)&&!(t&2)&&o!==null)e:for(;;){if(o===null)return;var l=o.tag;if(l===3||l===4){var i=o.stateNode.containerInfo;if(i===a||i.nodeType===8&&i.parentNode===a)break;if(l===4)for(l=o.return;l!==null;){var c=l.tag;if((c===3||c===4)&&(c=l.stateNode.containerInfo,c===a||c.nodeType===8&&c.parentNode===a))return;l=l.return}for(;i!==null;){if(l=Fr(i),l===null)return;if(c=l.tag,c===5||c===6){o=s=l;continue e}i=i.parentNode}}o=o.return}hm(function(){var d=s,u=Cu(n),p=[];e:{var m=Um.get(e);if(m!==void 0){var y=Eu,C=e;switch(e){case"keypress":if(Rl(n)===0)break e;case"keydown":case"keyup":y=v6;break;case"focusin":C="focus",y=yc;break;case"focusout":C="blur",y=yc;break;case"beforeblur":case"afterblur":y=yc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Cf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=s6;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=b6;break;case Im:case zm:case Fm:y=c6;break;case Hm:y=S6;break;case"scroll":y=o6;break;case"wheel":y=_6;break;case"copy":case"cut":case"paste":y=u6;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=wf}var b=(t&4)!==0,_=!b&&e==="scroll",g=b?m!==null?m+"Capture":null:m;b=[];for(var f=d,h;f!==null;){h=f;var j=h.stateNode;if(h.tag===5&&j!==null&&(h=j,g!==null&&(j=qa(f,g),j!=null&&b.push(as(f,j,h)))),_)break;f=f.return}0<b.length&&(m=new y(m,C,null,n,u),p.push({event:m,listeners:b}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",m&&n!==hd&&(C=n.relatedTarget||n.fromElement)&&(Fr(C)||C[zn]))break e;if((y||m)&&(m=u.window===u?u:(m=u.ownerDocument)?m.defaultView||m.parentWindow:window,y?(C=n.relatedTarget||n.toElement,y=d,C=C?Fr(C):null,C!==null&&(_=ro(C),C!==_||C.tag!==5&&C.tag!==6)&&(C=null)):(y=null,C=d),y!==C)){if(b=Cf,j="onMouseLeave",g="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(b=wf,j="onPointerLeave",g="onPointerEnter",f="pointer"),_=y==null?m:So(y),h=C==null?m:So(C),m=new b(j,f+"leave",y,n,u),m.target=_,m.relatedTarget=h,j=null,Fr(u)===d&&(b=new b(g,f+"enter",C,n,u),b.target=h,b.relatedTarget=_,j=b),_=j,y&&C)t:{for(b=y,g=C,f=0,h=b;h;h=mo(h))f++;for(h=0,j=g;j;j=mo(j))h++;for(;0<f-h;)b=mo(b),f--;for(;0<h-f;)g=mo(g),h--;for(;f--;){if(b===g||g!==null&&b===g.alternate)break t;b=mo(b),g=mo(g)}b=null}else b=null;y!==null&&Mf(p,m,y,b,!1),C!==null&&_!==null&&Mf(p,_,C,b,!0)}}e:{if(m=d?So(d):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var S=D6;else if(Tf(m))if(Am)S=P6;else{S=A6;var x=O6}else(y=m.nodeName)&&y.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(S=M6);if(S&&(S=S(e,d))){Om(p,S,n,u);break e}x&&x(e,m,d),e==="focusout"&&(x=m._wrapperState)&&x.controlled&&m.type==="number"&&cd(m,"number",m.value)}switch(x=d?So(d):window,e){case"focusin":(Tf(x)||x.contentEditable==="true")&&(bo=x,bd=d,za=null);break;case"focusout":za=bd=bo=null;break;case"mousedown":Cd=!0;break;case"contextmenu":case"mouseup":case"dragend":Cd=!1,Df(p,n,u);break;case"selectionchange":if(I6)break;case"keydown":case"keyup":Df(p,n,u)}var w;if(Ru)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else jo?Lm(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(Rm&&n.locale!=="ko"&&(jo||T!=="onCompositionStart"?T==="onCompositionEnd"&&jo&&(w=Nm()):(lr=u,Tu="value"in lr?lr.value:lr.textContent,jo=!0)),x=Xl(d,T),0<x.length&&(T=new Sf(T,e,null,n,u),p.push({event:T,listeners:x}),w?T.data=w:(w=Dm(n),w!==null&&(T.data=w)))),(w=T6?E6(e,n):N6(e,n))&&(d=Xl(d,"onBeforeInput"),0<d.length&&(u=new Sf("onBeforeInput","beforeinput",null,n,u),p.push({event:u,listeners:d}),u.data=w))}Vm(p,t)})}function as(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Xl(e,t){for(var n=t+"Capture",o=[];e!==null;){var a=e,s=a.stateNode;a.tag===5&&s!==null&&(a=s,s=qa(e,n),s!=null&&o.unshift(as(e,s,a)),s=qa(e,t),s!=null&&o.push(as(e,s,a))),e=e.return}return o}function mo(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Mf(e,t,n,o,a){for(var s=t._reactName,l=[];n!==null&&n!==o;){var i=n,c=i.alternate,d=i.stateNode;if(c!==null&&c===o)break;i.tag===5&&d!==null&&(i=d,a?(c=qa(n,s),c!=null&&l.unshift(as(n,c,i))):a||(c=qa(n,s),c!=null&&l.push(as(n,c,i)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var U6=/\r\n?/g,V6=/\u0000|\uFFFD/g;function Pf(e){return(typeof e=="string"?e:""+e).replace(U6,`
`).replace(V6,"")}function cl(e,t,n){if(t=Pf(t),Pf(e)!==t&&n)throw Error(P(425))}function Ql(){}var Sd=null,wd=null;function _d(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var kd=typeof setTimeout=="function"?setTimeout:void 0,W6=typeof clearTimeout=="function"?clearTimeout:void 0,$f=typeof Promise=="function"?Promise:void 0,Z6=typeof queueMicrotask=="function"?queueMicrotask:typeof $f<"u"?function(e){return $f.resolve(null).then(e).catch(K6)}:kd;function K6(e){setTimeout(function(){throw e})}function Tc(e,t){var n=t,o=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(o===0){e.removeChild(a),ts(t);return}o--}else n!=="$"&&n!=="$?"&&n!=="$!"||o++;n=a}while(n);ts(t)}function pr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Bf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Xo=Math.random().toString(36).slice(2),jn="__reactFiber$"+Xo,ss="__reactProps$"+Xo,zn="__reactContainer$"+Xo,Td="__reactEvents$"+Xo,Y6="__reactListeners$"+Xo,G6="__reactHandles$"+Xo;function Fr(e){var t=e[jn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[zn]||n[jn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Bf(e);e!==null;){if(n=e[jn])return n;e=Bf(e)}return t}e=n,n=e.parentNode}return null}function Ss(e){return e=e[jn]||e[zn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function So(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function Ri(e){return e[ss]||null}var Ed=[],wo=-1;function Sr(e){return{current:e}}function Ne(e){0>wo||(e.current=Ed[wo],Ed[wo]=null,wo--)}function ke(e,t){wo++,Ed[wo]=e.current,e.current=t}var vr={},pt=Sr(vr),Et=Sr(!1),Yr=vr;function Fo(e,t){var n=e.type.contextTypes;if(!n)return vr;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var a={},s;for(s in n)a[s]=t[s];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Nt(e){return e=e.childContextTypes,e!=null}function ql(){Ne(Et),Ne(pt)}function If(e,t,n){if(pt.current!==vr)throw Error(P(168));ke(pt,t),ke(Et,n)}function Zm(e,t,n){var o=e.stateNode;if(t=t.childContextTypes,typeof o.getChildContext!="function")return n;o=o.getChildContext();for(var a in o)if(!(a in t))throw Error(P(108,O5(e)||"Unknown",a));return Ie({},n,o)}function Jl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||vr,Yr=pt.current,ke(pt,e),ke(Et,Et.current),!0}function zf(e,t,n){var o=e.stateNode;if(!o)throw Error(P(169));n?(e=Zm(e,t,Yr),o.__reactInternalMemoizedMergedChildContext=e,Ne(Et),Ne(pt),ke(pt,e)):Ne(Et),ke(Et,n)}var Ln=null,Li=!1,Ec=!1;function Km(e){Ln===null?Ln=[e]:Ln.push(e)}function X6(e){Li=!0,Km(e)}function wr(){if(!Ec&&Ln!==null){Ec=!0;var e=0,t=Ce;try{var n=Ln;for(Ce=1;e<n.length;e++){var o=n[e];do o=o(!0);while(o!==null)}Ln=null,Li=!1}catch(a){throw Ln!==null&&(Ln=Ln.slice(e+1)),vm(Su,wr),a}finally{Ce=t,Ec=!1}}return null}var _o=[],ko=0,ei=null,ti=0,Ht=[],Ut=0,Gr=null,Mn=1,Pn="";function Br(e,t){_o[ko++]=ti,_o[ko++]=ei,ei=e,ti=t}function Ym(e,t,n){Ht[Ut++]=Mn,Ht[Ut++]=Pn,Ht[Ut++]=Gr,Gr=e;var o=Mn;e=Pn;var a=32-ln(o)-1;o&=~(1<<a),n+=1;var s=32-ln(t)+a;if(30<s){var l=a-a%5;s=(o&(1<<l)-1).toString(32),o>>=l,a-=l,Mn=1<<32-ln(t)+a|n<<a|o,Pn=s+e}else Mn=1<<s|n<<a|o,Pn=e}function Du(e){e.return!==null&&(Br(e,1),Ym(e,1,0))}function Ou(e){for(;e===ei;)ei=_o[--ko],_o[ko]=null,ti=_o[--ko],_o[ko]=null;for(;e===Gr;)Gr=Ht[--Ut],Ht[Ut]=null,Pn=Ht[--Ut],Ht[Ut]=null,Mn=Ht[--Ut],Ht[Ut]=null}var At=null,Ot=null,Oe=!1,sn=null;function Gm(e,t){var n=Vt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ff(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,At=e,Ot=pr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,At=e,Ot=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Gr!==null?{id:Mn,overflow:Pn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Vt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,At=e,Ot=null,!0):!1;default:return!1}}function Nd(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Rd(e){if(Oe){var t=Ot;if(t){var n=t;if(!Ff(e,t)){if(Nd(e))throw Error(P(418));t=pr(n.nextSibling);var o=At;t&&Ff(e,t)?Gm(o,n):(e.flags=e.flags&-4097|2,Oe=!1,At=e)}}else{if(Nd(e))throw Error(P(418));e.flags=e.flags&-4097|2,Oe=!1,At=e}}}function Hf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;At=e}function dl(e){if(e!==At)return!1;if(!Oe)return Hf(e),Oe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!_d(e.type,e.memoizedProps)),t&&(t=Ot)){if(Nd(e))throw Xm(),Error(P(418));for(;t;)Gm(e,t),t=pr(t.nextSibling)}if(Hf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ot=pr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ot=null}}else Ot=At?pr(e.stateNode.nextSibling):null;return!0}function Xm(){for(var e=Ot;e;)e=pr(e.nextSibling)}function Ho(){Ot=At=null,Oe=!1}function Au(e){sn===null?sn=[e]:sn.push(e)}var Q6=Wn.ReactCurrentBatchConfig;function rn(e,t){if(e&&e.defaultProps){t=Ie({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var ni=Sr(null),ri=null,To=null,Mu=null;function Pu(){Mu=To=ri=null}function $u(e){var t=ni.current;Ne(ni),e._currentValue=t}function Ld(e,t,n){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===n)break;e=e.return}}function $o(e,t){ri=e,Mu=To=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Tt=!0),e.firstContext=null)}function Kt(e){var t=e._currentValue;if(Mu!==e)if(e={context:e,memoizedValue:t,next:null},To===null){if(ri===null)throw Error(P(308));To=e,ri.dependencies={lanes:0,firstContext:e}}else To=To.next=e;return t}var Hr=null;function Bu(e){Hr===null?Hr=[e]:Hr.push(e)}function Qm(e,t,n,o){var a=t.interleaved;return a===null?(n.next=n,Bu(t)):(n.next=a.next,a.next=n),t.interleaved=n,Fn(e,o)}function Fn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var rr=!1;function Iu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function qm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function $n(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function fr(e,t,n){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,ge&2){var a=o.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),o.pending=t,Fn(e,n)}return a=o.interleaved,a===null?(t.next=t,Bu(o)):(t.next=a.next,a.next=t),o.interleaved=t,Fn(e,n)}function Ll(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,wu(e,n)}}function Uf(e,t){var n=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var a=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?a=s=l:s=s.next=l,n=n.next}while(n!==null);s===null?a=s=t:s=s.next=t}else a=s=t;n={baseState:o.baseState,firstBaseUpdate:a,lastBaseUpdate:s,shared:o.shared,effects:o.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function oi(e,t,n,o){var a=e.updateQueue;rr=!1;var s=a.firstBaseUpdate,l=a.lastBaseUpdate,i=a.shared.pending;if(i!==null){a.shared.pending=null;var c=i,d=c.next;c.next=null,l===null?s=d:l.next=d,l=c;var u=e.alternate;u!==null&&(u=u.updateQueue,i=u.lastBaseUpdate,i!==l&&(i===null?u.firstBaseUpdate=d:i.next=d,u.lastBaseUpdate=c))}if(s!==null){var p=a.baseState;l=0,u=d=c=null,i=s;do{var m=i.lane,y=i.eventTime;if((o&m)===m){u!==null&&(u=u.next={eventTime:y,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null});e:{var C=e,b=i;switch(m=t,y=n,b.tag){case 1:if(C=b.payload,typeof C=="function"){p=C.call(y,p,m);break e}p=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=b.payload,m=typeof C=="function"?C.call(y,p,m):C,m==null)break e;p=Ie({},p,m);break e;case 2:rr=!0}}i.callback!==null&&i.lane!==0&&(e.flags|=64,m=a.effects,m===null?a.effects=[i]:m.push(i))}else y={eventTime:y,lane:m,tag:i.tag,payload:i.payload,callback:i.callback,next:null},u===null?(d=u=y,c=p):u=u.next=y,l|=m;if(i=i.next,i===null){if(i=a.shared.pending,i===null)break;m=i,i=m.next,m.next=null,a.lastBaseUpdate=m,a.shared.pending=null}}while(1);if(u===null&&(c=p),a.baseState=c,a.firstBaseUpdate=d,a.lastBaseUpdate=u,t=a.shared.interleaved,t!==null){a=t;do l|=a.lane,a=a.next;while(a!==t)}else s===null&&(a.shared.lanes=0);Qr|=l,e.lanes=l,e.memoizedState=p}}function Vf(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var o=e[t],a=o.callback;if(a!==null){if(o.callback=null,o=n,typeof a!="function")throw Error(P(191,a));a.call(o)}}}var Jm=new Q1.Component().refs;function Dd(e,t,n,o){t=e.memoizedState,n=n(o,t),n=n==null?t:Ie({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Di={isMounted:function(e){return(e=e._reactInternals)?ro(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var o=gt(),a=mr(e),s=$n(o,a);s.payload=t,n!=null&&(s.callback=n),t=fr(e,s,a),t!==null&&(cn(t,e,a,o),Ll(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var o=gt(),a=mr(e),s=$n(o,a);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=fr(e,s,a),t!==null&&(cn(t,e,a,o),Ll(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=gt(),o=mr(e),a=$n(n,o);a.tag=2,t!=null&&(a.callback=t),t=fr(e,a,o),t!==null&&(cn(t,e,o,n),Ll(t,e,o))}};function Wf(e,t,n,o,a,s,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,s,l):t.prototype&&t.prototype.isPureReactComponent?!rs(n,o)||!rs(a,s):!0}function e2(e,t,n){var o=!1,a=vr,s=t.contextType;return typeof s=="object"&&s!==null?s=Kt(s):(a=Nt(t)?Yr:pt.current,o=t.contextTypes,s=(o=o!=null)?Fo(e,a):vr),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Di,e.stateNode=t,t._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=s),t}function Zf(e,t,n,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,o),t.state!==e&&Di.enqueueReplaceState(t,t.state,null)}function Od(e,t,n,o){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs=Jm,Iu(e);var s=t.contextType;typeof s=="object"&&s!==null?a.context=Kt(s):(s=Nt(t)?Yr:pt.current,a.context=Fo(e,s)),a.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Dd(e,t,s,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&Di.enqueueReplaceState(a,a.state,null),oi(e,n,a,o),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function ha(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var o=n.stateNode}if(!o)throw Error(P(147,e));var a=o,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(l){var i=a.refs;i===Jm&&(i=a.refs={}),l===null?delete i[s]:i[s]=l},t._stringRef=s,t)}if(typeof e!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,e))}return e}function ul(e,t){throw e=Object.prototype.toString.call(t),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Kf(e){var t=e._init;return t(e._payload)}function t2(e){function t(g,f){if(e){var h=g.deletions;h===null?(g.deletions=[f],g.flags|=16):h.push(f)}}function n(g,f){if(!e)return null;for(;f!==null;)t(g,f),f=f.sibling;return null}function o(g,f){for(g=new Map;f!==null;)f.key!==null?g.set(f.key,f):g.set(f.index,f),f=f.sibling;return g}function a(g,f){return g=xr(g,f),g.index=0,g.sibling=null,g}function s(g,f,h){return g.index=h,e?(h=g.alternate,h!==null?(h=h.index,h<f?(g.flags|=2,f):h):(g.flags|=2,f)):(g.flags|=1048576,f)}function l(g){return e&&g.alternate===null&&(g.flags|=2),g}function i(g,f,h,j){return f===null||f.tag!==6?(f=Mc(h,g.mode,j),f.return=g,f):(f=a(f,h),f.return=g,f)}function c(g,f,h,j){var S=h.type;return S===yo?u(g,f,h.props.children,j,h.key):f!==null&&(f.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===nr&&Kf(S)===f.type)?(j=a(f,h.props),j.ref=ha(g,f,h),j.return=g,j):(j=$l(h.type,h.key,h.props,null,g.mode,j),j.ref=ha(g,f,h),j.return=g,j)}function d(g,f,h,j){return f===null||f.tag!==4||f.stateNode.containerInfo!==h.containerInfo||f.stateNode.implementation!==h.implementation?(f=Pc(h,g.mode,j),f.return=g,f):(f=a(f,h.children||[]),f.return=g,f)}function u(g,f,h,j,S){return f===null||f.tag!==7?(f=Kr(h,g.mode,j,S),f.return=g,f):(f=a(f,h),f.return=g,f)}function p(g,f,h){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Mc(""+f,g.mode,h),f.return=g,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case el:return h=$l(f.type,f.key,f.props,null,g.mode,h),h.ref=ha(g,null,f),h.return=g,h;case vo:return f=Pc(f,g.mode,h),f.return=g,f;case nr:var j=f._init;return p(g,j(f._payload),h)}if(_a(f)||ca(f))return f=Kr(f,g.mode,h,null),f.return=g,f;ul(g,f)}return null}function m(g,f,h,j){var S=f!==null?f.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return S!==null?null:i(g,f,""+h,j);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case el:return h.key===S?c(g,f,h,j):null;case vo:return h.key===S?d(g,f,h,j):null;case nr:return S=h._init,m(g,f,S(h._payload),j)}if(_a(h)||ca(h))return S!==null?null:u(g,f,h,j,null);ul(g,h)}return null}function y(g,f,h,j,S){if(typeof j=="string"&&j!==""||typeof j=="number")return g=g.get(h)||null,i(f,g,""+j,S);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case el:return g=g.get(j.key===null?h:j.key)||null,c(f,g,j,S);case vo:return g=g.get(j.key===null?h:j.key)||null,d(f,g,j,S);case nr:var x=j._init;return y(g,f,h,x(j._payload),S)}if(_a(j)||ca(j))return g=g.get(h)||null,u(f,g,j,S,null);ul(f,j)}return null}function C(g,f,h,j){for(var S=null,x=null,w=f,T=f=0,E=null;w!==null&&T<h.length;T++){w.index>T?(E=w,w=null):E=w.sibling;var D=m(g,w,h[T],j);if(D===null){w===null&&(w=E);break}e&&w&&D.alternate===null&&t(g,w),f=s(D,f,T),x===null?S=D:x.sibling=D,x=D,w=E}if(T===h.length)return n(g,w),Oe&&Br(g,T),S;if(w===null){for(;T<h.length;T++)w=p(g,h[T],j),w!==null&&(f=s(w,f,T),x===null?S=w:x.sibling=w,x=w);return Oe&&Br(g,T),S}for(w=o(g,w);T<h.length;T++)E=y(w,g,T,h[T],j),E!==null&&(e&&E.alternate!==null&&w.delete(E.key===null?T:E.key),f=s(E,f,T),x===null?S=E:x.sibling=E,x=E);return e&&w.forEach(function(M){return t(g,M)}),Oe&&Br(g,T),S}function b(g,f,h,j){var S=ca(h);if(typeof S!="function")throw Error(P(150));if(h=S.call(h),h==null)throw Error(P(151));for(var x=S=null,w=f,T=f=0,E=null,D=h.next();w!==null&&!D.done;T++,D=h.next()){w.index>T?(E=w,w=null):E=w.sibling;var M=m(g,w,D.value,j);if(M===null){w===null&&(w=E);break}e&&w&&M.alternate===null&&t(g,w),f=s(M,f,T),x===null?S=M:x.sibling=M,x=M,w=E}if(D.done)return n(g,w),Oe&&Br(g,T),S;if(w===null){for(;!D.done;T++,D=h.next())D=p(g,D.value,j),D!==null&&(f=s(D,f,T),x===null?S=D:x.sibling=D,x=D);return Oe&&Br(g,T),S}for(w=o(g,w);!D.done;T++,D=h.next())D=y(w,g,T,D.value,j),D!==null&&(e&&D.alternate!==null&&w.delete(D.key===null?T:D.key),f=s(D,f,T),x===null?S=D:x.sibling=D,x=D);return e&&w.forEach(function(K){return t(g,K)}),Oe&&Br(g,T),S}function _(g,f,h,j){if(typeof h=="object"&&h!==null&&h.type===yo&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case el:e:{for(var S=h.key,x=f;x!==null;){if(x.key===S){if(S=h.type,S===yo){if(x.tag===7){n(g,x.sibling),f=a(x,h.props.children),f.return=g,g=f;break e}}else if(x.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===nr&&Kf(S)===x.type){n(g,x.sibling),f=a(x,h.props),f.ref=ha(g,x,h),f.return=g,g=f;break e}n(g,x);break}else t(g,x);x=x.sibling}h.type===yo?(f=Kr(h.props.children,g.mode,j,h.key),f.return=g,g=f):(j=$l(h.type,h.key,h.props,null,g.mode,j),j.ref=ha(g,f,h),j.return=g,g=j)}return l(g);case vo:e:{for(x=h.key;f!==null;){if(f.key===x)if(f.tag===4&&f.stateNode.containerInfo===h.containerInfo&&f.stateNode.implementation===h.implementation){n(g,f.sibling),f=a(f,h.children||[]),f.return=g,g=f;break e}else{n(g,f);break}else t(g,f);f=f.sibling}f=Pc(h,g.mode,j),f.return=g,g=f}return l(g);case nr:return x=h._init,_(g,f,x(h._payload),j)}if(_a(h))return C(g,f,h,j);if(ca(h))return b(g,f,h,j);ul(g,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,f!==null&&f.tag===6?(n(g,f.sibling),f=a(f,h),f.return=g,g=f):(n(g,f),f=Mc(h,g.mode,j),f.return=g,g=f),l(g)):n(g,f)}return _}var Uo=t2(!0),n2=t2(!1),ws={},Cn=Sr(ws),ls=Sr(ws),is=Sr(ws);function Ur(e){if(e===ws)throw Error(P(174));return e}function zu(e,t){switch(ke(is,t),ke(ls,e),ke(Cn,ws),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ud(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ud(t,e)}Ne(Cn),ke(Cn,t)}function Vo(){Ne(Cn),Ne(ls),Ne(is)}function r2(e){Ur(is.current);var t=Ur(Cn.current),n=ud(t,e.type);t!==n&&(ke(ls,e),ke(Cn,n))}function Fu(e){ls.current===e&&(Ne(Cn),Ne(ls))}var Pe=Sr(0);function ai(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Nc=[];function Hu(){for(var e=0;e<Nc.length;e++)Nc[e]._workInProgressVersionPrimary=null;Nc.length=0}var Dl=Wn.ReactCurrentDispatcher,Rc=Wn.ReactCurrentBatchConfig,Xr=0,Be=null,Ye=null,et=null,si=!1,Fa=!1,cs=0,q6=0;function ct(){throw Error(P(321))}function Uu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!dn(e[n],t[n]))return!1;return!0}function Vu(e,t,n,o,a,s){if(Xr=s,Be=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Dl.current=e===null||e.memoizedState===null?n8:r8,e=n(o,a),Fa){s=0;do{if(Fa=!1,cs=0,25<=s)throw Error(P(301));s+=1,et=Ye=null,t.updateQueue=null,Dl.current=o8,e=n(o,a)}while(Fa)}if(Dl.current=li,t=Ye!==null&&Ye.next!==null,Xr=0,et=Ye=Be=null,si=!1,t)throw Error(P(300));return e}function Wu(){var e=cs!==0;return cs=0,e}function gn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return et===null?Be.memoizedState=et=e:et=et.next=e,et}function Yt(){if(Ye===null){var e=Be.alternate;e=e!==null?e.memoizedState:null}else e=Ye.next;var t=et===null?Be.memoizedState:et.next;if(t!==null)et=t,Ye=e;else{if(e===null)throw Error(P(310));Ye=e,e={memoizedState:Ye.memoizedState,baseState:Ye.baseState,baseQueue:Ye.baseQueue,queue:Ye.queue,next:null},et===null?Be.memoizedState=et=e:et=et.next=e}return et}function ds(e,t){return typeof t=="function"?t(e):t}function Lc(e){var t=Yt(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var o=Ye,a=o.baseQueue,s=n.pending;if(s!==null){if(a!==null){var l=a.next;a.next=s.next,s.next=l}o.baseQueue=a=s,n.pending=null}if(a!==null){s=a.next,o=o.baseState;var i=l=null,c=null,d=s;do{var u=d.lane;if((Xr&u)===u)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),o=d.hasEagerState?d.eagerState:e(o,d.action);else{var p={lane:u,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(i=c=p,l=o):c=c.next=p,Be.lanes|=u,Qr|=u}d=d.next}while(d!==null&&d!==s);c===null?l=o:c.next=i,dn(o,t.memoizedState)||(Tt=!0),t.memoizedState=o,t.baseState=l,t.baseQueue=c,n.lastRenderedState=o}if(e=n.interleaved,e!==null){a=e;do s=a.lane,Be.lanes|=s,Qr|=s,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Dc(e){var t=Yt(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var o=n.dispatch,a=n.pending,s=t.memoizedState;if(a!==null){n.pending=null;var l=a=a.next;do s=e(s,l.action),l=l.next;while(l!==a);dn(s,t.memoizedState)||(Tt=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,o]}function o2(){}function a2(e,t){var n=Be,o=Yt(),a=t(),s=!dn(o.memoizedState,a);if(s&&(o.memoizedState=a,Tt=!0),o=o.queue,Zu(i2.bind(null,n,o,e),[e]),o.getSnapshot!==t||s||et!==null&&et.memoizedState.tag&1){if(n.flags|=2048,us(9,l2.bind(null,n,o,a,t),void 0,null),nt===null)throw Error(P(349));Xr&30||s2(n,t,a)}return a}function s2(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Be.updateQueue,t===null?(t={lastEffect:null,stores:null},Be.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function l2(e,t,n,o){t.value=n,t.getSnapshot=o,c2(t)&&d2(e)}function i2(e,t,n){return n(function(){c2(t)&&d2(e)})}function c2(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!dn(e,n)}catch{return!0}}function d2(e){var t=Fn(e,1);t!==null&&cn(t,e,1,-1)}function Yf(e){var t=gn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ds,lastRenderedState:e},t.queue=e,e=e.dispatch=t8.bind(null,Be,e),[t.memoizedState,e]}function us(e,t,n,o){return e={tag:e,create:t,destroy:n,deps:o,next:null},t=Be.updateQueue,t===null?(t={lastEffect:null,stores:null},Be.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(o=n.next,n.next=e,e.next=o,t.lastEffect=e)),e}function u2(){return Yt().memoizedState}function Ol(e,t,n,o){var a=gn();Be.flags|=e,a.memoizedState=us(1|t,n,void 0,o===void 0?null:o)}function Oi(e,t,n,o){var a=Yt();o=o===void 0?null:o;var s=void 0;if(Ye!==null){var l=Ye.memoizedState;if(s=l.destroy,o!==null&&Uu(o,l.deps)){a.memoizedState=us(t,n,s,o);return}}Be.flags|=e,a.memoizedState=us(1|t,n,s,o)}function Gf(e,t){return Ol(8390656,8,e,t)}function Zu(e,t){return Oi(2048,8,e,t)}function p2(e,t){return Oi(4,2,e,t)}function f2(e,t){return Oi(4,4,e,t)}function h2(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function m2(e,t,n){return n=n!=null?n.concat([e]):null,Oi(4,4,h2.bind(null,t,e),n)}function Ku(){}function x2(e,t){var n=Yt();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&Uu(t,o[1])?o[0]:(n.memoizedState=[e,t],e)}function g2(e,t){var n=Yt();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&Uu(t,o[1])?o[0]:(e=e(),n.memoizedState=[e,t],e)}function v2(e,t,n){return Xr&21?(dn(n,t)||(n=bm(),Be.lanes|=n,Qr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Tt=!0),e.memoizedState=n)}function J6(e,t){var n=Ce;Ce=n!==0&&4>n?n:4,e(!0);var o=Rc.transition;Rc.transition={};try{e(!1),t()}finally{Ce=n,Rc.transition=o}}function y2(){return Yt().memoizedState}function e8(e,t,n){var o=mr(e);if(n={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null},j2(e))b2(t,n);else if(n=Qm(e,t,n,o),n!==null){var a=gt();cn(n,e,o,a),C2(n,t,o)}}function t8(e,t,n){var o=mr(e),a={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null};if(j2(e))b2(t,a);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var l=t.lastRenderedState,i=s(l,n);if(a.hasEagerState=!0,a.eagerState=i,dn(i,l)){var c=t.interleaved;c===null?(a.next=a,Bu(t)):(a.next=c.next,c.next=a),t.interleaved=a;return}}catch{}finally{}n=Qm(e,t,a,o),n!==null&&(a=gt(),cn(n,e,o,a),C2(n,t,o))}}function j2(e){var t=e.alternate;return e===Be||t!==null&&t===Be}function b2(e,t){Fa=si=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function C2(e,t,n){if(n&4194240){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,wu(e,n)}}var li={readContext:Kt,useCallback:ct,useContext:ct,useEffect:ct,useImperativeHandle:ct,useInsertionEffect:ct,useLayoutEffect:ct,useMemo:ct,useReducer:ct,useRef:ct,useState:ct,useDebugValue:ct,useDeferredValue:ct,useTransition:ct,useMutableSource:ct,useSyncExternalStore:ct,useId:ct,unstable_isNewReconciler:!1},n8={readContext:Kt,useCallback:function(e,t){return gn().memoizedState=[e,t===void 0?null:t],e},useContext:Kt,useEffect:Gf,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ol(4194308,4,h2.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ol(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ol(4,2,e,t)},useMemo:function(e,t){var n=gn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var o=gn();return t=n!==void 0?n(t):t,o.memoizedState=o.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},o.queue=e,e=e.dispatch=e8.bind(null,Be,e),[o.memoizedState,e]},useRef:function(e){var t=gn();return e={current:e},t.memoizedState=e},useState:Yf,useDebugValue:Ku,useDeferredValue:function(e){return gn().memoizedState=e},useTransition:function(){var e=Yf(!1),t=e[0];return e=J6.bind(null,e[1]),gn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var o=Be,a=gn();if(Oe){if(n===void 0)throw Error(P(407));n=n()}else{if(n=t(),nt===null)throw Error(P(349));Xr&30||s2(o,t,n)}a.memoizedState=n;var s={value:n,getSnapshot:t};return a.queue=s,Gf(i2.bind(null,o,s,e),[e]),o.flags|=2048,us(9,l2.bind(null,o,s,n,t),void 0,null),n},useId:function(){var e=gn(),t=nt.identifierPrefix;if(Oe){var n=Pn,o=Mn;n=(o&~(1<<32-ln(o)-1)).toString(32)+n,t=":"+t+"R"+n,n=cs++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=q6++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},r8={readContext:Kt,useCallback:x2,useContext:Kt,useEffect:Zu,useImperativeHandle:m2,useInsertionEffect:p2,useLayoutEffect:f2,useMemo:g2,useReducer:Lc,useRef:u2,useState:function(){return Lc(ds)},useDebugValue:Ku,useDeferredValue:function(e){var t=Yt();return v2(t,Ye.memoizedState,e)},useTransition:function(){var e=Lc(ds)[0],t=Yt().memoizedState;return[e,t]},useMutableSource:o2,useSyncExternalStore:a2,useId:y2,unstable_isNewReconciler:!1},o8={readContext:Kt,useCallback:x2,useContext:Kt,useEffect:Zu,useImperativeHandle:m2,useInsertionEffect:p2,useLayoutEffect:f2,useMemo:g2,useReducer:Dc,useRef:u2,useState:function(){return Dc(ds)},useDebugValue:Ku,useDeferredValue:function(e){var t=Yt();return Ye===null?t.memoizedState=e:v2(t,Ye.memoizedState,e)},useTransition:function(){var e=Dc(ds)[0],t=Yt().memoizedState;return[e,t]},useMutableSource:o2,useSyncExternalStore:a2,useId:y2,unstable_isNewReconciler:!1};function Wo(e,t){try{var n="",o=t;do n+=D5(o),o=o.return;while(o);var a=n}catch(s){a=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:a,digest:null}}function Oc(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ad(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var a8=typeof WeakMap=="function"?WeakMap:Map;function S2(e,t,n){n=$n(-1,n),n.tag=3,n.payload={element:null};var o=t.value;return n.callback=function(){ci||(ci=!0,Vd=o),Ad(e,t)},n}function w2(e,t,n){n=$n(-1,n),n.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var a=t.value;n.payload=function(){return o(a)},n.callback=function(){Ad(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ad(e,t),typeof o!="function"&&(hr===null?hr=new Set([this]):hr.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Xf(e,t,n){var o=e.pingCache;if(o===null){o=e.pingCache=new a8;var a=new Set;o.set(t,a)}else a=o.get(t),a===void 0&&(a=new Set,o.set(t,a));a.has(n)||(a.add(n),e=y8.bind(null,e,t,n),t.then(e,e))}function Qf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function qf(e,t,n,o,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=$n(-1,1),t.tag=2,fr(n,t,1))),n.lanes|=1),e)}var s8=Wn.ReactCurrentOwner,Tt=!1;function xt(e,t,n,o){t.child=e===null?n2(t,null,n,o):Uo(t,e.child,n,o)}function Jf(e,t,n,o,a){n=n.render;var s=t.ref;return $o(t,a),o=Vu(e,t,n,o,s,a),n=Wu(),e!==null&&!Tt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Hn(e,t,a)):(Oe&&n&&Du(t),t.flags|=1,xt(e,t,o,a),t.child)}function eh(e,t,n,o,a){if(e===null){var s=n.type;return typeof s=="function"&&!tp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,_2(e,t,s,o,a)):(e=$l(n.type,null,o,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&a)){var l=s.memoizedProps;if(n=n.compare,n=n!==null?n:rs,n(l,o)&&e.ref===t.ref)return Hn(e,t,a)}return t.flags|=1,e=xr(s,o),e.ref=t.ref,e.return=t,t.child=e}function _2(e,t,n,o,a){if(e!==null){var s=e.memoizedProps;if(rs(s,o)&&e.ref===t.ref)if(Tt=!1,t.pendingProps=o=s,(e.lanes&a)!==0)e.flags&131072&&(Tt=!0);else return t.lanes=e.lanes,Hn(e,t,a)}return Md(e,t,n,o,a)}function k2(e,t,n){var o=t.pendingProps,a=o.children,s=e!==null?e.memoizedState:null;if(o.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ke(No,Dt),Dt|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ke(No,Dt),Dt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=s!==null?s.baseLanes:n,ke(No,Dt),Dt|=o}else s!==null?(o=s.baseLanes|n,t.memoizedState=null):o=n,ke(No,Dt),Dt|=o;return xt(e,t,a,n),t.child}function T2(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Md(e,t,n,o,a){var s=Nt(n)?Yr:pt.current;return s=Fo(t,s),$o(t,a),n=Vu(e,t,n,o,s,a),o=Wu(),e!==null&&!Tt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Hn(e,t,a)):(Oe&&o&&Du(t),t.flags|=1,xt(e,t,n,a),t.child)}function th(e,t,n,o,a){if(Nt(n)){var s=!0;Jl(t)}else s=!1;if($o(t,a),t.stateNode===null)Al(e,t),e2(t,n,o),Od(t,n,o,a),o=!0;else if(e===null){var l=t.stateNode,i=t.memoizedProps;l.props=i;var c=l.context,d=n.contextType;typeof d=="object"&&d!==null?d=Kt(d):(d=Nt(n)?Yr:pt.current,d=Fo(t,d));var u=n.getDerivedStateFromProps,p=typeof u=="function"||typeof l.getSnapshotBeforeUpdate=="function";p||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(i!==o||c!==d)&&Zf(t,l,o,d),rr=!1;var m=t.memoizedState;l.state=m,oi(t,o,l,a),c=t.memoizedState,i!==o||m!==c||Et.current||rr?(typeof u=="function"&&(Dd(t,n,u,o),c=t.memoizedState),(i=rr||Wf(t,n,i,o,m,c,d))?(p||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=c),l.props=o,l.state=c,l.context=d,o=i):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{l=t.stateNode,qm(e,t),i=t.memoizedProps,d=t.type===t.elementType?i:rn(t.type,i),l.props=d,p=t.pendingProps,m=l.context,c=n.contextType,typeof c=="object"&&c!==null?c=Kt(c):(c=Nt(n)?Yr:pt.current,c=Fo(t,c));var y=n.getDerivedStateFromProps;(u=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(i!==p||m!==c)&&Zf(t,l,o,c),rr=!1,m=t.memoizedState,l.state=m,oi(t,o,l,a);var C=t.memoizedState;i!==p||m!==C||Et.current||rr?(typeof y=="function"&&(Dd(t,n,y,o),C=t.memoizedState),(d=rr||Wf(t,n,d,o,m,C,c)||!1)?(u||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(o,C,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(o,C,c)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||i===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=C),l.props=o,l.state=C,l.context=c,o=d):(typeof l.componentDidUpdate!="function"||i===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),o=!1)}return Pd(e,t,n,o,s,a)}function Pd(e,t,n,o,a,s){T2(e,t);var l=(t.flags&128)!==0;if(!o&&!l)return a&&zf(t,n,!1),Hn(e,t,s);o=t.stateNode,s8.current=t;var i=l&&typeof n.getDerivedStateFromError!="function"?null:o.render();return t.flags|=1,e!==null&&l?(t.child=Uo(t,e.child,null,s),t.child=Uo(t,null,i,s)):xt(e,t,i,s),t.memoizedState=o.state,a&&zf(t,n,!0),t.child}function E2(e){var t=e.stateNode;t.pendingContext?If(e,t.pendingContext,t.pendingContext!==t.context):t.context&&If(e,t.context,!1),zu(e,t.containerInfo)}function nh(e,t,n,o,a){return Ho(),Au(a),t.flags|=256,xt(e,t,n,o),t.child}var $d={dehydrated:null,treeContext:null,retryLane:0};function Bd(e){return{baseLanes:e,cachePool:null,transitions:null}}function N2(e,t,n){var o=t.pendingProps,a=Pe.current,s=!1,l=(t.flags&128)!==0,i;if((i=l)||(i=e!==null&&e.memoizedState===null?!1:(a&2)!==0),i?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),ke(Pe,a&1),e===null)return Rd(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=o.children,e=o.fallback,s?(o=t.mode,s=t.child,l={mode:"hidden",children:l},!(o&1)&&s!==null?(s.childLanes=0,s.pendingProps=l):s=Pi(l,o,0,null),e=Kr(e,o,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Bd(n),t.memoizedState=$d,e):Yu(t,l));if(a=e.memoizedState,a!==null&&(i=a.dehydrated,i!==null))return l8(e,t,l,o,i,a,n);if(s){s=o.fallback,l=t.mode,a=e.child,i=a.sibling;var c={mode:"hidden",children:o.children};return!(l&1)&&t.child!==a?(o=t.child,o.childLanes=0,o.pendingProps=c,t.deletions=null):(o=xr(a,c),o.subtreeFlags=a.subtreeFlags&14680064),i!==null?s=xr(i,s):(s=Kr(s,l,n,null),s.flags|=2),s.return=t,o.return=t,o.sibling=s,t.child=o,o=s,s=t.child,l=e.child.memoizedState,l=l===null?Bd(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=e.childLanes&~n,t.memoizedState=$d,o}return s=e.child,e=s.sibling,o=xr(s,{mode:"visible",children:o.children}),!(t.mode&1)&&(o.lanes=n),o.return=t,o.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=o,t.memoizedState=null,o}function Yu(e,t){return t=Pi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function pl(e,t,n,o){return o!==null&&Au(o),Uo(t,e.child,null,n),e=Yu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function l8(e,t,n,o,a,s,l){if(n)return t.flags&256?(t.flags&=-257,o=Oc(Error(P(422))),pl(e,t,l,o)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=o.fallback,a=t.mode,o=Pi({mode:"visible",children:o.children},a,0,null),s=Kr(s,a,l,null),s.flags|=2,o.return=t,s.return=t,o.sibling=s,t.child=o,t.mode&1&&Uo(t,e.child,null,l),t.child.memoizedState=Bd(l),t.memoizedState=$d,s);if(!(t.mode&1))return pl(e,t,l,null);if(a.data==="$!"){if(o=a.nextSibling&&a.nextSibling.dataset,o)var i=o.dgst;return o=i,s=Error(P(419)),o=Oc(s,o,void 0),pl(e,t,l,o)}if(i=(l&e.childLanes)!==0,Tt||i){if(o=nt,o!==null){switch(l&-l){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(o.suspendedLanes|l)?0:a,a!==0&&a!==s.retryLane&&(s.retryLane=a,Fn(e,a),cn(o,e,a,-1))}return ep(),o=Oc(Error(P(421))),pl(e,t,l,o)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=j8.bind(null,e),a._reactRetry=t,null):(e=s.treeContext,Ot=pr(a.nextSibling),At=t,Oe=!0,sn=null,e!==null&&(Ht[Ut++]=Mn,Ht[Ut++]=Pn,Ht[Ut++]=Gr,Mn=e.id,Pn=e.overflow,Gr=t),t=Yu(t,o.children),t.flags|=4096,t)}function rh(e,t,n){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),Ld(e.return,t,n)}function Ac(e,t,n,o,a){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:a}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=o,s.tail=n,s.tailMode=a)}function R2(e,t,n){var o=t.pendingProps,a=o.revealOrder,s=o.tail;if(xt(e,t,o.children,n),o=Pe.current,o&2)o=o&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&rh(e,n,t);else if(e.tag===19)rh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(ke(Pe,o),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&ai(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Ac(t,!1,a,n,s);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&ai(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Ac(t,!0,n,null,s);break;case"together":Ac(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Al(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Hn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Qr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(P(153));if(t.child!==null){for(e=t.child,n=xr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=xr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function i8(e,t,n){switch(t.tag){case 3:E2(t),Ho();break;case 5:r2(t);break;case 1:Nt(t.type)&&Jl(t);break;case 4:zu(t,t.stateNode.containerInfo);break;case 10:var o=t.type._context,a=t.memoizedProps.value;ke(ni,o._currentValue),o._currentValue=a;break;case 13:if(o=t.memoizedState,o!==null)return o.dehydrated!==null?(ke(Pe,Pe.current&1),t.flags|=128,null):n&t.child.childLanes?N2(e,t,n):(ke(Pe,Pe.current&1),e=Hn(e,t,n),e!==null?e.sibling:null);ke(Pe,Pe.current&1);break;case 19:if(o=(n&t.childLanes)!==0,e.flags&128){if(o)return R2(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),ke(Pe,Pe.current),o)break;return null;case 22:case 23:return t.lanes=0,k2(e,t,n)}return Hn(e,t,n)}var L2,Id,D2,O2;L2=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Id=function(){};D2=function(e,t,n,o){var a=e.memoizedProps;if(a!==o){e=t.stateNode,Ur(Cn.current);var s=null;switch(n){case"input":a=ld(e,a),o=ld(e,o),s=[];break;case"select":a=Ie({},a,{value:void 0}),o=Ie({},o,{value:void 0}),s=[];break;case"textarea":a=dd(e,a),o=dd(e,o),s=[];break;default:typeof a.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=Ql)}pd(n,o);var l;n=null;for(d in a)if(!o.hasOwnProperty(d)&&a.hasOwnProperty(d)&&a[d]!=null)if(d==="style"){var i=a[d];for(l in i)i.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Xa.hasOwnProperty(d)?s||(s=[]):(s=s||[]).push(d,null));for(d in o){var c=o[d];if(i=a!=null?a[d]:void 0,o.hasOwnProperty(d)&&c!==i&&(c!=null||i!=null))if(d==="style")if(i){for(l in i)!i.hasOwnProperty(l)||c&&c.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in c)c.hasOwnProperty(l)&&i[l]!==c[l]&&(n||(n={}),n[l]=c[l])}else n||(s||(s=[]),s.push(d,n)),n=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,i=i?i.__html:void 0,c!=null&&i!==c&&(s=s||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Xa.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&Ee("scroll",e),s||i===c||(s=[])):(s=s||[]).push(d,c))}n&&(s=s||[]).push("style",n);var d=s;(t.updateQueue=d)&&(t.flags|=4)}};O2=function(e,t,n,o){n!==o&&(t.flags|=4)};function ma(e,t){if(!Oe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function dt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,o=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,o|=a.subtreeFlags&14680064,o|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,o|=a.subtreeFlags,o|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=o,e.childLanes=n,t}function c8(e,t,n){var o=t.pendingProps;switch(Ou(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dt(t),null;case 1:return Nt(t.type)&&ql(),dt(t),null;case 3:return o=t.stateNode,Vo(),Ne(Et),Ne(pt),Hu(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(dl(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,sn!==null&&(Kd(sn),sn=null))),Id(e,t),dt(t),null;case 5:Fu(t);var a=Ur(is.current);if(n=t.type,e!==null&&t.stateNode!=null)D2(e,t,n,o,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!o){if(t.stateNode===null)throw Error(P(166));return dt(t),null}if(e=Ur(Cn.current),dl(t)){o=t.stateNode,n=t.type;var s=t.memoizedProps;switch(o[jn]=t,o[ss]=s,e=(t.mode&1)!==0,n){case"dialog":Ee("cancel",o),Ee("close",o);break;case"iframe":case"object":case"embed":Ee("load",o);break;case"video":case"audio":for(a=0;a<Ta.length;a++)Ee(Ta[a],o);break;case"source":Ee("error",o);break;case"img":case"image":case"link":Ee("error",o),Ee("load",o);break;case"details":Ee("toggle",o);break;case"input":pf(o,s),Ee("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!s.multiple},Ee("invalid",o);break;case"textarea":hf(o,s),Ee("invalid",o)}pd(n,s),a=null;for(var l in s)if(s.hasOwnProperty(l)){var i=s[l];l==="children"?typeof i=="string"?o.textContent!==i&&(s.suppressHydrationWarning!==!0&&cl(o.textContent,i,e),a=["children",i]):typeof i=="number"&&o.textContent!==""+i&&(s.suppressHydrationWarning!==!0&&cl(o.textContent,i,e),a=["children",""+i]):Xa.hasOwnProperty(l)&&i!=null&&l==="onScroll"&&Ee("scroll",o)}switch(n){case"input":tl(o),ff(o,s,!0);break;case"textarea":tl(o),mf(o);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(o.onclick=Ql)}o=a,t.updateQueue=o,o!==null&&(t.flags|=4)}else{l=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=sm(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=l.createElement(n,{is:o.is}):(e=l.createElement(n),n==="select"&&(l=e,o.multiple?l.multiple=!0:o.size&&(l.size=o.size))):e=l.createElementNS(e,n),e[jn]=t,e[ss]=o,L2(e,t,!1,!1),t.stateNode=e;e:{switch(l=fd(n,o),n){case"dialog":Ee("cancel",e),Ee("close",e),a=o;break;case"iframe":case"object":case"embed":Ee("load",e),a=o;break;case"video":case"audio":for(a=0;a<Ta.length;a++)Ee(Ta[a],e);a=o;break;case"source":Ee("error",e),a=o;break;case"img":case"image":case"link":Ee("error",e),Ee("load",e),a=o;break;case"details":Ee("toggle",e),a=o;break;case"input":pf(e,o),a=ld(e,o),Ee("invalid",e);break;case"option":a=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},a=Ie({},o,{value:void 0}),Ee("invalid",e);break;case"textarea":hf(e,o),a=dd(e,o),Ee("invalid",e);break;default:a=o}pd(n,a),i=a;for(s in i)if(i.hasOwnProperty(s)){var c=i[s];s==="style"?cm(e,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&lm(e,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Qa(e,c):typeof c=="number"&&Qa(e,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Xa.hasOwnProperty(s)?c!=null&&s==="onScroll"&&Ee("scroll",e):c!=null&&vu(e,s,c,l))}switch(n){case"input":tl(e),ff(e,o,!1);break;case"textarea":tl(e),mf(e);break;case"option":o.value!=null&&e.setAttribute("value",""+gr(o.value));break;case"select":e.multiple=!!o.multiple,s=o.value,s!=null?Oo(e,!!o.multiple,s,!1):o.defaultValue!=null&&Oo(e,!!o.multiple,o.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Ql)}switch(n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return dt(t),null;case 6:if(e&&t.stateNode!=null)O2(e,t,e.memoizedProps,o);else{if(typeof o!="string"&&t.stateNode===null)throw Error(P(166));if(n=Ur(is.current),Ur(Cn.current),dl(t)){if(o=t.stateNode,n=t.memoizedProps,o[jn]=t,(s=o.nodeValue!==n)&&(e=At,e!==null))switch(e.tag){case 3:cl(o.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&cl(o.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else o=(n.nodeType===9?n:n.ownerDocument).createTextNode(o),o[jn]=t,t.stateNode=o}return dt(t),null;case 13:if(Ne(Pe),o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Oe&&Ot!==null&&t.mode&1&&!(t.flags&128))Xm(),Ho(),t.flags|=98560,s=!1;else if(s=dl(t),o!==null&&o.dehydrated!==null){if(e===null){if(!s)throw Error(P(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(P(317));s[jn]=t}else Ho(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;dt(t),s=!1}else sn!==null&&(Kd(sn),sn=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(t.child.flags|=8192,t.mode&1&&(e===null||Pe.current&1?Xe===0&&(Xe=3):ep())),t.updateQueue!==null&&(t.flags|=4),dt(t),null);case 4:return Vo(),Id(e,t),e===null&&os(t.stateNode.containerInfo),dt(t),null;case 10:return $u(t.type._context),dt(t),null;case 17:return Nt(t.type)&&ql(),dt(t),null;case 19:if(Ne(Pe),s=t.memoizedState,s===null)return dt(t),null;if(o=(t.flags&128)!==0,l=s.rendering,l===null)if(o)ma(s,!1);else{if(Xe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=ai(e),l!==null){for(t.flags|=128,ma(s,!1),o=l.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),t.subtreeFlags=0,o=n,n=t.child;n!==null;)s=n,e=o,s.flags&=14680066,l=s.alternate,l===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=l.childLanes,s.lanes=l.lanes,s.child=l.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=l.memoizedProps,s.memoizedState=l.memoizedState,s.updateQueue=l.updateQueue,s.type=l.type,e=l.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ke(Pe,Pe.current&1|2),t.child}e=e.sibling}s.tail!==null&&Ve()>Zo&&(t.flags|=128,o=!0,ma(s,!1),t.lanes=4194304)}else{if(!o)if(e=ai(l),e!==null){if(t.flags|=128,o=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ma(s,!0),s.tail===null&&s.tailMode==="hidden"&&!l.alternate&&!Oe)return dt(t),null}else 2*Ve()-s.renderingStartTime>Zo&&n!==1073741824&&(t.flags|=128,o=!0,ma(s,!1),t.lanes=4194304);s.isBackwards?(l.sibling=t.child,t.child=l):(n=s.last,n!==null?n.sibling=l:t.child=l,s.last=l)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Ve(),t.sibling=null,n=Pe.current,ke(Pe,o?n&1|2:n&1),t):(dt(t),null);case 22:case 23:return Ju(),o=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(t.flags|=8192),o&&t.mode&1?Dt&1073741824&&(dt(t),t.subtreeFlags&6&&(t.flags|=8192)):dt(t),null;case 24:return null;case 25:return null}throw Error(P(156,t.tag))}function d8(e,t){switch(Ou(t),t.tag){case 1:return Nt(t.type)&&ql(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Vo(),Ne(Et),Ne(pt),Hu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Fu(t),null;case 13:if(Ne(Pe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(P(340));Ho()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ne(Pe),null;case 4:return Vo(),null;case 10:return $u(t.type._context),null;case 22:case 23:return Ju(),null;case 24:return null;default:return null}}var fl=!1,ut=!1,u8=typeof WeakSet=="function"?WeakSet:Set,F=null;function Eo(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(o){Fe(e,t,o)}else n.current=null}function zd(e,t,n){try{n()}catch(o){Fe(e,t,o)}}var oh=!1;function p8(e,t){if(Sd=Yl,e=$m(),Lu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var a=o.anchorOffset,s=o.focusNode;o=o.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var l=0,i=-1,c=-1,d=0,u=0,p=e,m=null;t:for(;;){for(var y;p!==n||a!==0&&p.nodeType!==3||(i=l+a),p!==s||o!==0&&p.nodeType!==3||(c=l+o),p.nodeType===3&&(l+=p.nodeValue.length),(y=p.firstChild)!==null;)m=p,p=y;for(;;){if(p===e)break t;if(m===n&&++d===a&&(i=l),m===s&&++u===o&&(c=l),(y=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=y}n=i===-1||c===-1?null:{start:i,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(wd={focusedElem:e,selectionRange:n},Yl=!1,F=t;F!==null;)if(t=F,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,F=e;else for(;F!==null;){t=F;try{var C=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var b=C.memoizedProps,_=C.memoizedState,g=t.stateNode,f=g.getSnapshotBeforeUpdate(t.elementType===t.type?b:rn(t.type,b),_);g.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(j){Fe(t,t.return,j)}if(e=t.sibling,e!==null){e.return=t.return,F=e;break}F=t.return}return C=oh,oh=!1,C}function Ha(e,t,n){var o=t.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var a=o=o.next;do{if((a.tag&e)===e){var s=a.destroy;a.destroy=void 0,s!==void 0&&zd(t,n,s)}a=a.next}while(a!==o)}}function Ai(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var o=n.create;n.destroy=o()}n=n.next}while(n!==t)}}function Fd(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function A2(e){var t=e.alternate;t!==null&&(e.alternate=null,A2(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[jn],delete t[ss],delete t[Td],delete t[Y6],delete t[G6])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function M2(e){return e.tag===5||e.tag===3||e.tag===4}function ah(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||M2(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Hd(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ql));else if(o!==4&&(e=e.child,e!==null))for(Hd(e,t,n),e=e.sibling;e!==null;)Hd(e,t,n),e=e.sibling}function Ud(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(Ud(e,t,n),e=e.sibling;e!==null;)Ud(e,t,n),e=e.sibling}var ot=null,on=!1;function Jn(e,t,n){for(n=n.child;n!==null;)P2(e,t,n),n=n.sibling}function P2(e,t,n){if(bn&&typeof bn.onCommitFiberUnmount=="function")try{bn.onCommitFiberUnmount(ki,n)}catch{}switch(n.tag){case 5:ut||Eo(n,t);case 6:var o=ot,a=on;ot=null,Jn(e,t,n),ot=o,on=a,ot!==null&&(on?(e=ot,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ot.removeChild(n.stateNode));break;case 18:ot!==null&&(on?(e=ot,n=n.stateNode,e.nodeType===8?Tc(e.parentNode,n):e.nodeType===1&&Tc(e,n),ts(e)):Tc(ot,n.stateNode));break;case 4:o=ot,a=on,ot=n.stateNode.containerInfo,on=!0,Jn(e,t,n),ot=o,on=a;break;case 0:case 11:case 14:case 15:if(!ut&&(o=n.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){a=o=o.next;do{var s=a,l=s.destroy;s=s.tag,l!==void 0&&(s&2||s&4)&&zd(n,t,l),a=a.next}while(a!==o)}Jn(e,t,n);break;case 1:if(!ut&&(Eo(n,t),o=n.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=n.memoizedProps,o.state=n.memoizedState,o.componentWillUnmount()}catch(i){Fe(n,t,i)}Jn(e,t,n);break;case 21:Jn(e,t,n);break;case 22:n.mode&1?(ut=(o=ut)||n.memoizedState!==null,Jn(e,t,n),ut=o):Jn(e,t,n);break;default:Jn(e,t,n)}}function sh(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new u8),t.forEach(function(o){var a=b8.bind(null,e,o);n.has(o)||(n.add(o),o.then(a,a))})}}function nn(e,t){var n=t.deletions;if(n!==null)for(var o=0;o<n.length;o++){var a=n[o];try{var s=e,l=t,i=l;e:for(;i!==null;){switch(i.tag){case 5:ot=i.stateNode,on=!1;break e;case 3:ot=i.stateNode.containerInfo,on=!0;break e;case 4:ot=i.stateNode.containerInfo,on=!0;break e}i=i.return}if(ot===null)throw Error(P(160));P2(s,l,a),ot=null,on=!1;var c=a.alternate;c!==null&&(c.return=null),a.return=null}catch(d){Fe(a,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)$2(t,e),t=t.sibling}function $2(e,t){var n=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(nn(t,e),xn(e),o&4){try{Ha(3,e,e.return),Ai(3,e)}catch(b){Fe(e,e.return,b)}try{Ha(5,e,e.return)}catch(b){Fe(e,e.return,b)}}break;case 1:nn(t,e),xn(e),o&512&&n!==null&&Eo(n,n.return);break;case 5:if(nn(t,e),xn(e),o&512&&n!==null&&Eo(n,n.return),e.flags&32){var a=e.stateNode;try{Qa(a,"")}catch(b){Fe(e,e.return,b)}}if(o&4&&(a=e.stateNode,a!=null)){var s=e.memoizedProps,l=n!==null?n.memoizedProps:s,i=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{i==="input"&&s.type==="radio"&&s.name!=null&&om(a,s),fd(i,l);var d=fd(i,s);for(l=0;l<c.length;l+=2){var u=c[l],p=c[l+1];u==="style"?cm(a,p):u==="dangerouslySetInnerHTML"?lm(a,p):u==="children"?Qa(a,p):vu(a,u,p,d)}switch(i){case"input":id(a,s);break;case"textarea":am(a,s);break;case"select":var m=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?Oo(a,!!s.multiple,y,!1):m!==!!s.multiple&&(s.defaultValue!=null?Oo(a,!!s.multiple,s.defaultValue,!0):Oo(a,!!s.multiple,s.multiple?[]:"",!1))}a[ss]=s}catch(b){Fe(e,e.return,b)}}break;case 6:if(nn(t,e),xn(e),o&4){if(e.stateNode===null)throw Error(P(162));a=e.stateNode,s=e.memoizedProps;try{a.nodeValue=s}catch(b){Fe(e,e.return,b)}}break;case 3:if(nn(t,e),xn(e),o&4&&n!==null&&n.memoizedState.isDehydrated)try{ts(t.containerInfo)}catch(b){Fe(e,e.return,b)}break;case 4:nn(t,e),xn(e);break;case 13:nn(t,e),xn(e),a=e.child,a.flags&8192&&(s=a.memoizedState!==null,a.stateNode.isHidden=s,!s||a.alternate!==null&&a.alternate.memoizedState!==null||(Qu=Ve())),o&4&&sh(e);break;case 22:if(u=n!==null&&n.memoizedState!==null,e.mode&1?(ut=(d=ut)||u,nn(t,e),ut=d):nn(t,e),xn(e),o&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!u&&e.mode&1)for(F=e,u=e.child;u!==null;){for(p=F=u;F!==null;){switch(m=F,y=m.child,m.tag){case 0:case 11:case 14:case 15:Ha(4,m,m.return);break;case 1:Eo(m,m.return);var C=m.stateNode;if(typeof C.componentWillUnmount=="function"){o=m,n=m.return;try{t=o,C.props=t.memoizedProps,C.state=t.memoizedState,C.componentWillUnmount()}catch(b){Fe(o,n,b)}}break;case 5:Eo(m,m.return);break;case 22:if(m.memoizedState!==null){ih(p);continue}}y!==null?(y.return=m,F=y):ih(p)}u=u.sibling}e:for(u=null,p=e;;){if(p.tag===5){if(u===null){u=p;try{a=p.stateNode,d?(s=a.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(i=p.stateNode,c=p.memoizedProps.style,l=c!=null&&c.hasOwnProperty("display")?c.display:null,i.style.display=im("display",l))}catch(b){Fe(e,e.return,b)}}}else if(p.tag===6){if(u===null)try{p.stateNode.nodeValue=d?"":p.memoizedProps}catch(b){Fe(e,e.return,b)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;u===p&&(u=null),p=p.return}u===p&&(u=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:nn(t,e),xn(e),o&4&&sh(e);break;case 21:break;default:nn(t,e),xn(e)}}function xn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(M2(n)){var o=n;break e}n=n.return}throw Error(P(160))}switch(o.tag){case 5:var a=o.stateNode;o.flags&32&&(Qa(a,""),o.flags&=-33);var s=ah(e);Ud(e,s,a);break;case 3:case 4:var l=o.stateNode.containerInfo,i=ah(e);Hd(e,i,l);break;default:throw Error(P(161))}}catch(c){Fe(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function f8(e,t,n){F=e,B2(e)}function B2(e,t,n){for(var o=(e.mode&1)!==0;F!==null;){var a=F,s=a.child;if(a.tag===22&&o){var l=a.memoizedState!==null||fl;if(!l){var i=a.alternate,c=i!==null&&i.memoizedState!==null||ut;i=fl;var d=ut;if(fl=l,(ut=c)&&!d)for(F=a;F!==null;)l=F,c=l.child,l.tag===22&&l.memoizedState!==null?ch(a):c!==null?(c.return=l,F=c):ch(a);for(;s!==null;)F=s,B2(s),s=s.sibling;F=a,fl=i,ut=d}lh(e)}else a.subtreeFlags&8772&&s!==null?(s.return=a,F=s):lh(e)}}function lh(e){for(;F!==null;){var t=F;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ut||Ai(5,t);break;case 1:var o=t.stateNode;if(t.flags&4&&!ut)if(n===null)o.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:rn(t.type,n.memoizedProps);o.componentDidUpdate(a,n.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Vf(t,s,o);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Vf(t,l,n)}break;case 5:var i=t.stateNode;if(n===null&&t.flags&4){n=i;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var u=d.memoizedState;if(u!==null){var p=u.dehydrated;p!==null&&ts(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}ut||t.flags&512&&Fd(t)}catch(m){Fe(t,t.return,m)}}if(t===e){F=null;break}if(n=t.sibling,n!==null){n.return=t.return,F=n;break}F=t.return}}function ih(e){for(;F!==null;){var t=F;if(t===e){F=null;break}var n=t.sibling;if(n!==null){n.return=t.return,F=n;break}F=t.return}}function ch(e){for(;F!==null;){var t=F;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ai(4,t)}catch(c){Fe(t,n,c)}break;case 1:var o=t.stateNode;if(typeof o.componentDidMount=="function"){var a=t.return;try{o.componentDidMount()}catch(c){Fe(t,a,c)}}var s=t.return;try{Fd(t)}catch(c){Fe(t,s,c)}break;case 5:var l=t.return;try{Fd(t)}catch(c){Fe(t,l,c)}}}catch(c){Fe(t,t.return,c)}if(t===e){F=null;break}var i=t.sibling;if(i!==null){i.return=t.return,F=i;break}F=t.return}}var h8=Math.ceil,ii=Wn.ReactCurrentDispatcher,Gu=Wn.ReactCurrentOwner,Wt=Wn.ReactCurrentBatchConfig,ge=0,nt=null,Ze=null,at=0,Dt=0,No=Sr(0),Xe=0,ps=null,Qr=0,Mi=0,Xu=0,Ua=null,kt=null,Qu=0,Zo=1/0,Rn=null,ci=!1,Vd=null,hr=null,hl=!1,ir=null,di=0,Va=0,Wd=null,Ml=-1,Pl=0;function gt(){return ge&6?Ve():Ml!==-1?Ml:Ml=Ve()}function mr(e){return e.mode&1?ge&2&&at!==0?at&-at:Q6.transition!==null?(Pl===0&&(Pl=bm()),Pl):(e=Ce,e!==0||(e=window.event,e=e===void 0?16:Em(e.type)),e):1}function cn(e,t,n,o){if(50<Va)throw Va=0,Wd=null,Error(P(185));bs(e,n,o),(!(ge&2)||e!==nt)&&(e===nt&&(!(ge&2)&&(Mi|=n),Xe===4&&sr(e,at)),Rt(e,o),n===1&&ge===0&&!(t.mode&1)&&(Zo=Ve()+500,Li&&wr()))}function Rt(e,t){var n=e.callbackNode;Q5(e,t);var o=Kl(e,e===nt?at:0);if(o===0)n!==null&&vf(n),e.callbackNode=null,e.callbackPriority=0;else if(t=o&-o,e.callbackPriority!==t){if(n!=null&&vf(n),t===1)e.tag===0?X6(dh.bind(null,e)):Km(dh.bind(null,e)),Z6(function(){!(ge&6)&&wr()}),n=null;else{switch(Cm(o)){case 1:n=Su;break;case 4:n=ym;break;case 16:n=Zl;break;case 536870912:n=jm;break;default:n=Zl}n=Z2(n,I2.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function I2(e,t){if(Ml=-1,Pl=0,ge&6)throw Error(P(327));var n=e.callbackNode;if(Bo()&&e.callbackNode!==n)return null;var o=Kl(e,e===nt?at:0);if(o===0)return null;if(o&30||o&e.expiredLanes||t)t=ui(e,o);else{t=o;var a=ge;ge|=2;var s=F2();(nt!==e||at!==t)&&(Rn=null,Zo=Ve()+500,Zr(e,t));do try{g8();break}catch(i){z2(e,i)}while(1);Pu(),ii.current=s,ge=a,Ze!==null?t=0:(nt=null,at=0,t=Xe)}if(t!==0){if(t===2&&(a=vd(e),a!==0&&(o=a,t=Zd(e,a))),t===1)throw n=ps,Zr(e,0),sr(e,o),Rt(e,Ve()),n;if(t===6)sr(e,o);else{if(a=e.current.alternate,!(o&30)&&!m8(a)&&(t=ui(e,o),t===2&&(s=vd(e),s!==0&&(o=s,t=Zd(e,s))),t===1))throw n=ps,Zr(e,0),sr(e,o),Rt(e,Ve()),n;switch(e.finishedWork=a,e.finishedLanes=o,t){case 0:case 1:throw Error(P(345));case 2:Ir(e,kt,Rn);break;case 3:if(sr(e,o),(o&130023424)===o&&(t=Qu+500-Ve(),10<t)){if(Kl(e,0)!==0)break;if(a=e.suspendedLanes,(a&o)!==o){gt(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=kd(Ir.bind(null,e,kt,Rn),t);break}Ir(e,kt,Rn);break;case 4:if(sr(e,o),(o&4194240)===o)break;for(t=e.eventTimes,a=-1;0<o;){var l=31-ln(o);s=1<<l,l=t[l],l>a&&(a=l),o&=~s}if(o=a,o=Ve()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*h8(o/1960))-o,10<o){e.timeoutHandle=kd(Ir.bind(null,e,kt,Rn),o);break}Ir(e,kt,Rn);break;case 5:Ir(e,kt,Rn);break;default:throw Error(P(329))}}}return Rt(e,Ve()),e.callbackNode===n?I2.bind(null,e):null}function Zd(e,t){var n=Ua;return e.current.memoizedState.isDehydrated&&(Zr(e,t).flags|=256),e=ui(e,t),e!==2&&(t=kt,kt=n,t!==null&&Kd(t)),e}function Kd(e){kt===null?kt=e:kt.push.apply(kt,e)}function m8(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var o=0;o<n.length;o++){var a=n[o],s=a.getSnapshot;a=a.value;try{if(!dn(s(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function sr(e,t){for(t&=~Xu,t&=~Mi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ln(t),o=1<<n;e[n]=-1,t&=~o}}function dh(e){if(ge&6)throw Error(P(327));Bo();var t=Kl(e,0);if(!(t&1))return Rt(e,Ve()),null;var n=ui(e,t);if(e.tag!==0&&n===2){var o=vd(e);o!==0&&(t=o,n=Zd(e,o))}if(n===1)throw n=ps,Zr(e,0),sr(e,t),Rt(e,Ve()),n;if(n===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ir(e,kt,Rn),Rt(e,Ve()),null}function qu(e,t){var n=ge;ge|=1;try{return e(t)}finally{ge=n,ge===0&&(Zo=Ve()+500,Li&&wr())}}function qr(e){ir!==null&&ir.tag===0&&!(ge&6)&&Bo();var t=ge;ge|=1;var n=Wt.transition,o=Ce;try{if(Wt.transition=null,Ce=1,e)return e()}finally{Ce=o,Wt.transition=n,ge=t,!(ge&6)&&wr()}}function Ju(){Dt=No.current,Ne(No)}function Zr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,W6(n)),Ze!==null)for(n=Ze.return;n!==null;){var o=n;switch(Ou(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&ql();break;case 3:Vo(),Ne(Et),Ne(pt),Hu();break;case 5:Fu(o);break;case 4:Vo();break;case 13:Ne(Pe);break;case 19:Ne(Pe);break;case 10:$u(o.type._context);break;case 22:case 23:Ju()}n=n.return}if(nt=e,Ze=e=xr(e.current,null),at=Dt=t,Xe=0,ps=null,Xu=Mi=Qr=0,kt=Ua=null,Hr!==null){for(t=0;t<Hr.length;t++)if(n=Hr[t],o=n.interleaved,o!==null){n.interleaved=null;var a=o.next,s=n.pending;if(s!==null){var l=s.next;s.next=a,o.next=l}n.pending=o}Hr=null}return e}function z2(e,t){do{var n=Ze;try{if(Pu(),Dl.current=li,si){for(var o=Be.memoizedState;o!==null;){var a=o.queue;a!==null&&(a.pending=null),o=o.next}si=!1}if(Xr=0,et=Ye=Be=null,Fa=!1,cs=0,Gu.current=null,n===null||n.return===null){Xe=1,ps=t,Ze=null;break}e:{var s=e,l=n.return,i=n,c=t;if(t=at,i.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,u=i,p=u.tag;if(!(u.mode&1)&&(p===0||p===11||p===15)){var m=u.alternate;m?(u.updateQueue=m.updateQueue,u.memoizedState=m.memoizedState,u.lanes=m.lanes):(u.updateQueue=null,u.memoizedState=null)}var y=Qf(l);if(y!==null){y.flags&=-257,qf(y,l,i,s,t),y.mode&1&&Xf(s,d,t),t=y,c=d;var C=t.updateQueue;if(C===null){var b=new Set;b.add(c),t.updateQueue=b}else C.add(c);break e}else{if(!(t&1)){Xf(s,d,t),ep();break e}c=Error(P(426))}}else if(Oe&&i.mode&1){var _=Qf(l);if(_!==null){!(_.flags&65536)&&(_.flags|=256),qf(_,l,i,s,t),Au(Wo(c,i));break e}}s=c=Wo(c,i),Xe!==4&&(Xe=2),Ua===null?Ua=[s]:Ua.push(s),s=l;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var g=S2(s,c,t);Uf(s,g);break e;case 1:i=c;var f=s.type,h=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(hr===null||!hr.has(h)))){s.flags|=65536,t&=-t,s.lanes|=t;var j=w2(s,i,t);Uf(s,j);break e}}s=s.return}while(s!==null)}U2(n)}catch(S){t=S,Ze===n&&n!==null&&(Ze=n=n.return);continue}break}while(1)}function F2(){var e=ii.current;return ii.current=li,e===null?li:e}function ep(){(Xe===0||Xe===3||Xe===2)&&(Xe=4),nt===null||!(Qr&268435455)&&!(Mi&268435455)||sr(nt,at)}function ui(e,t){var n=ge;ge|=2;var o=F2();(nt!==e||at!==t)&&(Rn=null,Zr(e,t));do try{x8();break}catch(a){z2(e,a)}while(1);if(Pu(),ge=n,ii.current=o,Ze!==null)throw Error(P(261));return nt=null,at=0,Xe}function x8(){for(;Ze!==null;)H2(Ze)}function g8(){for(;Ze!==null&&!H5();)H2(Ze)}function H2(e){var t=W2(e.alternate,e,Dt);e.memoizedProps=e.pendingProps,t===null?U2(e):Ze=t,Gu.current=null}function U2(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=d8(n,t),n!==null){n.flags&=32767,Ze=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Xe=6,Ze=null;return}}else if(n=c8(n,t,Dt),n!==null){Ze=n;return}if(t=t.sibling,t!==null){Ze=t;return}Ze=t=e}while(t!==null);Xe===0&&(Xe=5)}function Ir(e,t,n){var o=Ce,a=Wt.transition;try{Wt.transition=null,Ce=1,v8(e,t,n,o)}finally{Wt.transition=a,Ce=o}return null}function v8(e,t,n,o){do Bo();while(ir!==null);if(ge&6)throw Error(P(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(q5(e,s),e===nt&&(Ze=nt=null,at=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||hl||(hl=!0,Z2(Zl,function(){return Bo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Wt.transition,Wt.transition=null;var l=Ce;Ce=1;var i=ge;ge|=4,Gu.current=null,p8(e,n),$2(n,e),B6(wd),Yl=!!Sd,wd=Sd=null,e.current=n,f8(n),U5(),ge=i,Ce=l,Wt.transition=s}else e.current=n;if(hl&&(hl=!1,ir=e,di=a),s=e.pendingLanes,s===0&&(hr=null),Z5(n.stateNode),Rt(e,Ve()),t!==null)for(o=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],o(a.value,{componentStack:a.stack,digest:a.digest});if(ci)throw ci=!1,e=Vd,Vd=null,e;return di&1&&e.tag!==0&&Bo(),s=e.pendingLanes,s&1?e===Wd?Va++:(Va=0,Wd=e):Va=0,wr(),null}function Bo(){if(ir!==null){var e=Cm(di),t=Wt.transition,n=Ce;try{if(Wt.transition=null,Ce=16>e?16:e,ir===null)var o=!1;else{if(e=ir,ir=null,di=0,ge&6)throw Error(P(331));var a=ge;for(ge|=4,F=e.current;F!==null;){var s=F,l=s.child;if(F.flags&16){var i=s.deletions;if(i!==null){for(var c=0;c<i.length;c++){var d=i[c];for(F=d;F!==null;){var u=F;switch(u.tag){case 0:case 11:case 15:Ha(8,u,s)}var p=u.child;if(p!==null)p.return=u,F=p;else for(;F!==null;){u=F;var m=u.sibling,y=u.return;if(A2(u),u===d){F=null;break}if(m!==null){m.return=y,F=m;break}F=y}}}var C=s.alternate;if(C!==null){var b=C.child;if(b!==null){C.child=null;do{var _=b.sibling;b.sibling=null,b=_}while(b!==null)}}F=s}}if(s.subtreeFlags&2064&&l!==null)l.return=s,F=l;else e:for(;F!==null;){if(s=F,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ha(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,F=g;break e}F=s.return}}var f=e.current;for(F=f;F!==null;){l=F;var h=l.child;if(l.subtreeFlags&2064&&h!==null)h.return=l,F=h;else e:for(l=f;F!==null;){if(i=F,i.flags&2048)try{switch(i.tag){case 0:case 11:case 15:Ai(9,i)}}catch(S){Fe(i,i.return,S)}if(i===l){F=null;break e}var j=i.sibling;if(j!==null){j.return=i.return,F=j;break e}F=i.return}}if(ge=a,wr(),bn&&typeof bn.onPostCommitFiberRoot=="function")try{bn.onPostCommitFiberRoot(ki,e)}catch{}o=!0}return o}finally{Ce=n,Wt.transition=t}}return!1}function uh(e,t,n){t=Wo(n,t),t=S2(e,t,1),e=fr(e,t,1),t=gt(),e!==null&&(bs(e,1,t),Rt(e,t))}function Fe(e,t,n){if(e.tag===3)uh(e,e,n);else for(;t!==null;){if(t.tag===3){uh(t,e,n);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(hr===null||!hr.has(o))){e=Wo(n,e),e=w2(t,e,1),t=fr(t,e,1),e=gt(),t!==null&&(bs(t,1,e),Rt(t,e));break}}t=t.return}}function y8(e,t,n){var o=e.pingCache;o!==null&&o.delete(t),t=gt(),e.pingedLanes|=e.suspendedLanes&n,nt===e&&(at&n)===n&&(Xe===4||Xe===3&&(at&130023424)===at&&500>Ve()-Qu?Zr(e,0):Xu|=n),Rt(e,t)}function V2(e,t){t===0&&(e.mode&1?(t=ol,ol<<=1,!(ol&130023424)&&(ol=4194304)):t=1);var n=gt();e=Fn(e,t),e!==null&&(bs(e,t,n),Rt(e,n))}function j8(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),V2(e,n)}function b8(e,t){var n=0;switch(e.tag){case 13:var o=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(P(314))}o!==null&&o.delete(t),V2(e,n)}var W2;W2=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Et.current)Tt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Tt=!1,i8(e,t,n);Tt=!!(e.flags&131072)}else Tt=!1,Oe&&t.flags&1048576&&Ym(t,ti,t.index);switch(t.lanes=0,t.tag){case 2:var o=t.type;Al(e,t),e=t.pendingProps;var a=Fo(t,pt.current);$o(t,n),a=Vu(null,t,o,e,a,n);var s=Wu();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Nt(o)?(s=!0,Jl(t)):s=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Iu(t),a.updater=Di,t.stateNode=a,a._reactInternals=t,Od(t,o,e,n),t=Pd(null,t,o,!0,s,n)):(t.tag=0,Oe&&s&&Du(t),xt(null,t,a,n),t=t.child),t;case 16:o=t.elementType;e:{switch(Al(e,t),e=t.pendingProps,a=o._init,o=a(o._payload),t.type=o,a=t.tag=S8(o),e=rn(o,e),a){case 0:t=Md(null,t,o,e,n);break e;case 1:t=th(null,t,o,e,n);break e;case 11:t=Jf(null,t,o,e,n);break e;case 14:t=eh(null,t,o,rn(o.type,e),n);break e}throw Error(P(306,o,""))}return t;case 0:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:rn(o,a),Md(e,t,o,a,n);case 1:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:rn(o,a),th(e,t,o,a,n);case 3:e:{if(E2(t),e===null)throw Error(P(387));o=t.pendingProps,s=t.memoizedState,a=s.element,qm(e,t),oi(t,o,null,n);var l=t.memoizedState;if(o=l.element,s.isDehydrated)if(s={element:o,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){a=Wo(Error(P(423)),t),t=nh(e,t,o,n,a);break e}else if(o!==a){a=Wo(Error(P(424)),t),t=nh(e,t,o,n,a);break e}else for(Ot=pr(t.stateNode.containerInfo.firstChild),At=t,Oe=!0,sn=null,n=n2(t,null,o,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ho(),o===a){t=Hn(e,t,n);break e}xt(e,t,o,n)}t=t.child}return t;case 5:return r2(t),e===null&&Rd(t),o=t.type,a=t.pendingProps,s=e!==null?e.memoizedProps:null,l=a.children,_d(o,a)?l=null:s!==null&&_d(o,s)&&(t.flags|=32),T2(e,t),xt(e,t,l,n),t.child;case 6:return e===null&&Rd(t),null;case 13:return N2(e,t,n);case 4:return zu(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=Uo(t,null,o,n):xt(e,t,o,n),t.child;case 11:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:rn(o,a),Jf(e,t,o,a,n);case 7:return xt(e,t,t.pendingProps,n),t.child;case 8:return xt(e,t,t.pendingProps.children,n),t.child;case 12:return xt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(o=t.type._context,a=t.pendingProps,s=t.memoizedProps,l=a.value,ke(ni,o._currentValue),o._currentValue=l,s!==null)if(dn(s.value,l)){if(s.children===a.children&&!Et.current){t=Hn(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var i=s.dependencies;if(i!==null){l=s.child;for(var c=i.firstContext;c!==null;){if(c.context===o){if(s.tag===1){c=$n(-1,n&-n),c.tag=2;var d=s.updateQueue;if(d!==null){d=d.shared;var u=d.pending;u===null?c.next=c:(c.next=u.next,u.next=c),d.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),Ld(s.return,n,t),i.lanes|=n;break}c=c.next}}else if(s.tag===10)l=s.type===t.type?null:s.child;else if(s.tag===18){if(l=s.return,l===null)throw Error(P(341));l.lanes|=n,i=l.alternate,i!==null&&(i.lanes|=n),Ld(l,n,t),l=s.sibling}else l=s.child;if(l!==null)l.return=s;else for(l=s;l!==null;){if(l===t){l=null;break}if(s=l.sibling,s!==null){s.return=l.return,l=s;break}l=l.return}s=l}xt(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,o=t.pendingProps.children,$o(t,n),a=Kt(a),o=o(a),t.flags|=1,xt(e,t,o,n),t.child;case 14:return o=t.type,a=rn(o,t.pendingProps),a=rn(o.type,a),eh(e,t,o,a,n);case 15:return _2(e,t,t.type,t.pendingProps,n);case 17:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:rn(o,a),Al(e,t),t.tag=1,Nt(o)?(e=!0,Jl(t)):e=!1,$o(t,n),e2(t,o,a),Od(t,o,a,n),Pd(null,t,o,!0,e,n);case 19:return R2(e,t,n);case 22:return k2(e,t,n)}throw Error(P(156,t.tag))};function Z2(e,t){return vm(e,t)}function C8(e,t,n,o){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vt(e,t,n,o){return new C8(e,t,n,o)}function tp(e){return e=e.prototype,!(!e||!e.isReactComponent)}function S8(e){if(typeof e=="function")return tp(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ju)return 11;if(e===bu)return 14}return 2}function xr(e,t){var n=e.alternate;return n===null?(n=Vt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function $l(e,t,n,o,a,s){var l=2;if(o=e,typeof e=="function")tp(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case yo:return Kr(n.children,a,s,t);case yu:l=8,a|=8;break;case rd:return e=Vt(12,n,t,a|2),e.elementType=rd,e.lanes=s,e;case od:return e=Vt(13,n,t,a),e.elementType=od,e.lanes=s,e;case ad:return e=Vt(19,n,t,a),e.elementType=ad,e.lanes=s,e;case tm:return Pi(n,a,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case J1:l=10;break e;case em:l=9;break e;case ju:l=11;break e;case bu:l=14;break e;case nr:l=16,o=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return t=Vt(l,n,t,a),t.elementType=e,t.type=o,t.lanes=s,t}function Kr(e,t,n,o){return e=Vt(7,e,o,t),e.lanes=n,e}function Pi(e,t,n,o){return e=Vt(22,e,o,t),e.elementType=tm,e.lanes=n,e.stateNode={isHidden:!1},e}function Mc(e,t,n){return e=Vt(6,e,null,t),e.lanes=n,e}function Pc(e,t,n){return t=Vt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function w8(e,t,n,o,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xc(0),this.expirationTimes=xc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xc(0),this.identifierPrefix=o,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function np(e,t,n,o,a,s,l,i,c){return e=new w8(e,t,n,i,c),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Vt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:o,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Iu(s),e}function _8(e,t,n){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:vo,key:o==null?null:""+o,children:e,containerInfo:t,implementation:n}}function K2(e){if(!e)return vr;e=e._reactInternals;e:{if(ro(e)!==e||e.tag!==1)throw Error(P(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Nt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(P(171))}if(e.tag===1){var n=e.type;if(Nt(n))return Zm(e,n,t)}return t}function Y2(e,t,n,o,a,s,l,i,c){return e=np(n,o,!0,e,a,s,l,i,c),e.context=K2(null),n=e.current,o=gt(),a=mr(n),s=$n(o,a),s.callback=t??null,fr(n,s,a),e.current.lanes=a,bs(e,a,o),Rt(e,o),e}function $i(e,t,n,o){var a=t.current,s=gt(),l=mr(a);return n=K2(n),t.context===null?t.context=n:t.pendingContext=n,t=$n(s,l),t.payload={element:e},o=o===void 0?null:o,o!==null&&(t.callback=o),e=fr(a,t,l),e!==null&&(cn(e,a,l,s),Ll(e,a,l)),l}function pi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ph(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function rp(e,t){ph(e,t),(e=e.alternate)&&ph(e,t)}function k8(){return null}var G2=typeof reportError=="function"?reportError:function(e){console.error(e)};function op(e){this._internalRoot=e}Bi.prototype.render=op.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(P(409));$i(e,t,null,null)};Bi.prototype.unmount=op.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;qr(function(){$i(null,e,null,null)}),t[zn]=null}};function Bi(e){this._internalRoot=e}Bi.prototype.unstable_scheduleHydration=function(e){if(e){var t=_m();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ar.length&&t!==0&&t<ar[n].priority;n++);ar.splice(n,0,e),n===0&&Tm(e)}};function ap(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ii(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function fh(){}function T8(e,t,n,o,a){if(a){if(typeof o=="function"){var s=o;o=function(){var d=pi(l);s.call(d)}}var l=Y2(t,o,e,0,null,!1,!1,"",fh);return e._reactRootContainer=l,e[zn]=l.current,os(e.nodeType===8?e.parentNode:e),qr(),l}for(;a=e.lastChild;)e.removeChild(a);if(typeof o=="function"){var i=o;o=function(){var d=pi(c);i.call(d)}}var c=np(e,0,!1,null,null,!1,!1,"",fh);return e._reactRootContainer=c,e[zn]=c.current,os(e.nodeType===8?e.parentNode:e),qr(function(){$i(t,c,n,o)}),c}function zi(e,t,n,o,a){var s=n._reactRootContainer;if(s){var l=s;if(typeof a=="function"){var i=a;a=function(){var c=pi(l);i.call(c)}}$i(t,l,e,a)}else l=T8(n,t,e,a,o);return pi(l)}Sm=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ka(t.pendingLanes);n!==0&&(wu(t,n|1),Rt(t,Ve()),!(ge&6)&&(Zo=Ve()+500,wr()))}break;case 13:qr(function(){var o=Fn(e,1);if(o!==null){var a=gt();cn(o,e,1,a)}}),rp(e,1)}};_u=function(e){if(e.tag===13){var t=Fn(e,134217728);if(t!==null){var n=gt();cn(t,e,134217728,n)}rp(e,134217728)}};wm=function(e){if(e.tag===13){var t=mr(e),n=Fn(e,t);if(n!==null){var o=gt();cn(n,e,t,o)}rp(e,t)}};_m=function(){return Ce};km=function(e,t){var n=Ce;try{return Ce=e,t()}finally{Ce=n}};md=function(e,t,n){switch(t){case"input":if(id(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var o=n[t];if(o!==e&&o.form===e.form){var a=Ri(o);if(!a)throw Error(P(90));rm(o),id(o,a)}}}break;case"textarea":am(e,n);break;case"select":t=n.value,t!=null&&Oo(e,!!n.multiple,t,!1)}};pm=qu;fm=qr;var E8={usingClientEntryPoint:!1,Events:[Ss,So,Ri,dm,um,qu]},xa={findFiberByHostInstance:Fr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},N8={bundleType:xa.bundleType,version:xa.version,rendererPackageName:xa.rendererPackageName,rendererConfig:xa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=xm(e),e===null?null:e.stateNode},findFiberByHostInstance:xa.findFiberByHostInstance||k8,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ml=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ml.isDisabled&&ml.supportsFiber)try{ki=ml.inject(N8),bn=ml}catch{}}$t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=E8;$t.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ap(t))throw Error(P(200));return _8(e,t,null,n)};$t.createRoot=function(e,t){if(!ap(e))throw Error(P(299));var n=!1,o="",a=G2;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=np(e,1,!1,null,null,n,!1,o,a),e[zn]=t.current,os(e.nodeType===8?e.parentNode:e),new op(t)};$t.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=xm(t),e=e===null?null:e.stateNode,e};$t.flushSync=function(e){return qr(e)};$t.hydrate=function(e,t,n){if(!Ii(t))throw Error(P(200));return zi(null,e,t,!0,n)};$t.hydrateRoot=function(e,t,n){if(!ap(e))throw Error(P(405));var o=n!=null&&n.hydratedSources||null,a=!1,s="",l=G2;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Y2(t,null,e,1,n??null,a,!1,s,l),e[zn]=t.current,os(e),o)for(e=0;e<o.length;e++)n=o[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new Bi(t)};$t.render=function(e,t,n){if(!Ii(t))throw Error(P(200));return zi(null,e,t,!1,n)};$t.unmountComponentAtNode=function(e){if(!Ii(e))throw Error(P(40));return e._reactRootContainer?(qr(function(){zi(null,null,e,!1,function(){e._reactRootContainer=null,e[zn]=null})}),!0):!1};$t.unstable_batchedUpdates=qu;$t.unstable_renderSubtreeIntoContainer=function(e,t,n,o){if(!Ii(n))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return zi(e,t,n,!1,o)};$t.version="18.2.0-next-9e3b772b8-20220608";function X2(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(X2)}catch(e){console.error(e)}}X2(),Y1.exports=$t;var On=Y1.exports;const R8=Vn(On),L8=$1({__proto__:null,default:R8},[On]);var hh=On;td.createRoot=hh.createRoot,td.hydrateRoot=hh.hydrateRoot;function D8(e,t){if(e==null)return{};var n={},o=Object.keys(e),a,s;for(s=0;s<o.length;s++)a=o[s],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function O8(e,t){if(e==null)return{};var n=D8(e,t),o,a;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)o=s[a],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}function Yd(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function A8(e){if(Array.isArray(e))return Yd(e)}function M8(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function P8(e,t){if(e){if(typeof e=="string")return Yd(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Yd(e,t)}}function $8(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function B8(e){return A8(e)||M8(e)||P8(e)||$8()}function fs(e){"@babel/helpers - typeof";return fs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},fs(e)}function I8(e,t){if(fs(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t||"default");if(fs(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function z8(e){var t=I8(e,"string");return fs(t)=="symbol"?t:String(t)}function Q2(e,t,n){return t=z8(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Gd(){return Gd=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Gd.apply(this,arguments)}function mh(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,o)}return n}function Ro(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?mh(Object(n),!0).forEach(function(o){Q2(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):mh(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function F8(e){var t=e.length;if(t===0||t===1)return e;if(t===2)return[e[0],e[1],"".concat(e[0],".").concat(e[1]),"".concat(e[1],".").concat(e[0])];if(t===3)return[e[0],e[1],e[2],"".concat(e[0],".").concat(e[1]),"".concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[0]),"".concat(e[1],".").concat(e[2]),"".concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[1],".").concat(e[0])];if(t>=4)return[e[0],e[1],e[2],e[3],"".concat(e[0],".").concat(e[1]),"".concat(e[0],".").concat(e[2]),"".concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[0]),"".concat(e[1],".").concat(e[2]),"".concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[1]),"".concat(e[2],".").concat(e[3]),"".concat(e[3],".").concat(e[0]),"".concat(e[3],".").concat(e[1]),"".concat(e[3],".").concat(e[2]),"".concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[1],".").concat(e[3]),"".concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[2],".").concat(e[3]),"".concat(e[0],".").concat(e[3],".").concat(e[1]),"".concat(e[0],".").concat(e[3],".").concat(e[2]),"".concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[1],".").concat(e[2],".").concat(e[3]),"".concat(e[1],".").concat(e[3],".").concat(e[0]),"".concat(e[1],".").concat(e[3],".").concat(e[2]),"".concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[0],".").concat(e[3]),"".concat(e[2],".").concat(e[1],".").concat(e[0]),"".concat(e[2],".").concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[3],".").concat(e[0]),"".concat(e[2],".").concat(e[3],".").concat(e[1]),"".concat(e[3],".").concat(e[0],".").concat(e[1]),"".concat(e[3],".").concat(e[0],".").concat(e[2]),"".concat(e[3],".").concat(e[1],".").concat(e[0]),"".concat(e[3],".").concat(e[1],".").concat(e[2]),"".concat(e[3],".").concat(e[2],".").concat(e[0]),"".concat(e[3],".").concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[1],".").concat(e[2],".").concat(e[3]),"".concat(e[0],".").concat(e[1],".").concat(e[3],".").concat(e[2]),"".concat(e[0],".").concat(e[2],".").concat(e[1],".").concat(e[3]),"".concat(e[0],".").concat(e[2],".").concat(e[3],".").concat(e[1]),"".concat(e[0],".").concat(e[3],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[3],".").concat(e[2],".").concat(e[1]),"".concat(e[1],".").concat(e[0],".").concat(e[2],".").concat(e[3]),"".concat(e[1],".").concat(e[0],".").concat(e[3],".").concat(e[2]),"".concat(e[1],".").concat(e[2],".").concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[2],".").concat(e[3],".").concat(e[0]),"".concat(e[1],".").concat(e[3],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[3],".").concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[0],".").concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[0],".").concat(e[3],".").concat(e[1]),"".concat(e[2],".").concat(e[1],".").concat(e[0],".").concat(e[3]),"".concat(e[2],".").concat(e[1],".").concat(e[3],".").concat(e[0]),"".concat(e[2],".").concat(e[3],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[3],".").concat(e[1],".").concat(e[0]),"".concat(e[3],".").concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[3],".").concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[3],".").concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[3],".").concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[3],".").concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[3],".").concat(e[2],".").concat(e[1],".").concat(e[0])]}var $c={};function H8(e){if(e.length===0||e.length===1)return e;var t=e.join(".");return $c[t]||($c[t]=F8(e)),$c[t]}function U8(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,o=e.filter(function(s){return s!=="token"}),a=H8(o);return a.reduce(function(s,l){return Ro(Ro({},s),n[l])},t)}function xh(e){return e.join(" ")}function V8(e,t){var n=0;return function(o){return n+=1,o.map(function(a,s){return q2({node:a,stylesheet:e,useInlineStyles:t,key:"code-segment-".concat(n,"-").concat(s)})})}}function q2(e){var t=e.node,n=e.stylesheet,o=e.style,a=o===void 0?{}:o,s=e.useInlineStyles,l=e.key,i=t.properties,c=t.type,d=t.tagName,u=t.value;if(c==="text")return u;if(d){var p=V8(n,s),m;if(!s)m=Ro(Ro({},i),{},{className:xh(i.className)});else{var y=Object.keys(n).reduce(function(g,f){return f.split(".").forEach(function(h){g.includes(h)||g.push(h)}),g},[]),C=i.className&&i.className.includes("token")?["token"]:[],b=i.className&&C.concat(i.className.filter(function(g){return!y.includes(g)}));m=Ro(Ro({},i),{},{className:xh(b)||void 0,style:U8(i.className,Object.assign({},i.style,a),n)})}var _=p(t.children);return te.createElement(d,Gd({key:l},m),_)}}const W8=function(e,t){var n=e.listLanguages();return n.indexOf(t)!==-1};var Z8=["language","children","style","customStyle","codeTagProps","useInlineStyles","showLineNumbers","showInlineLineNumbers","startingLineNumber","lineNumberContainerStyle","lineNumberStyle","wrapLines","wrapLongLines","lineProps","renderer","PreTag","CodeTag","code","astGenerator"];function gh(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,o)}return n}function yn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?gh(Object(n),!0).forEach(function(o){Q2(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):gh(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}var K8=/\n/g;function Y8(e){return e.match(K8)}function G8(e){var t=e.lines,n=e.startingLineNumber,o=e.style;return t.map(function(a,s){var l=s+n;return te.createElement("span",{key:"line-".concat(s),className:"react-syntax-highlighter-line-number",style:typeof o=="function"?o(l):o},"".concat(l,`
`))})}function X8(e){var t=e.codeString,n=e.codeStyle,o=e.containerStyle,a=o===void 0?{float:"left",paddingRight:"10px"}:o,s=e.numberStyle,l=s===void 0?{}:s,i=e.startingLineNumber;return te.createElement("code",{style:Object.assign({},n,a)},G8({lines:t.replace(/\n$/,"").split(`
`),style:l,startingLineNumber:i}))}function Q8(e){return"".concat(e.toString().length,".25em")}function J2(e,t){return{type:"element",tagName:"span",properties:{key:"line-number--".concat(e),className:["comment","linenumber","react-syntax-highlighter-line-number"],style:t},children:[{type:"text",value:e}]}}function e3(e,t,n){var o={display:"inline-block",minWidth:Q8(n),paddingRight:"1em",textAlign:"right",userSelect:"none"},a=typeof e=="function"?e(t):e,s=yn(yn({},o),a);return s}function Bl(e){var t=e.children,n=e.lineNumber,o=e.lineNumberStyle,a=e.largestLineNumber,s=e.showInlineLineNumbers,l=e.lineProps,i=l===void 0?{}:l,c=e.className,d=c===void 0?[]:c,u=e.showLineNumbers,p=e.wrapLongLines,m=typeof i=="function"?i(n):i;if(m.className=d,n&&s){var y=e3(o,n,a);t.unshift(J2(n,y))}return p&u&&(m.style=yn(yn({},m.style),{},{display:"flex"})),{type:"element",tagName:"span",properties:m,children:t}}function t3(e){for(var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],o=0;o<e.length;o++){var a=e[o];if(a.type==="text")n.push(Bl({children:[a],className:B8(new Set(t))}));else if(a.children){var s=t.concat(a.properties.className);t3(a.children,s).forEach(function(l){return n.push(l)})}}return n}function q8(e,t,n,o,a,s,l,i,c){var d,u=t3(e.value),p=[],m=-1,y=0;function C(S,x){var w=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return Bl({children:S,lineNumber:x,lineNumberStyle:i,largestLineNumber:l,showInlineLineNumbers:a,lineProps:n,className:w,showLineNumbers:o,wrapLongLines:c})}function b(S,x){if(o&&x&&a){var w=e3(i,x,l);S.unshift(J2(x,w))}return S}function _(S,x){var w=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return t||w.length>0?C(S,x,w):b(S,x)}for(var g=function(){var x=u[y],w=x.children[0].value,T=Y8(w);if(T){var E=w.split(`
`);E.forEach(function(D,M){var K=o&&p.length+s,X={type:"text",value:"".concat(D,`
`)};if(M===0){var Q=u.slice(m+1,y).concat(Bl({children:[X],className:x.properties.className})),re=_(Q,K);p.push(re)}else if(M===E.length-1){var ae=u[y+1]&&u[y+1].children&&u[y+1].children[0],V={type:"text",value:"".concat(D)};if(ae){var O=Bl({children:[V],className:x.properties.className});u.splice(y+1,0,O)}else{var B=[V],I=_(B,K,x.properties.className);p.push(I)}}else{var H=[X],W=_(H,K,x.properties.className);p.push(W)}}),m=y}y++};y<u.length;)g();if(m!==u.length-1){var f=u.slice(m+1,u.length);if(f&&f.length){var h=o&&p.length+s,j=_(f,h);p.push(j)}}return t?p:(d=[]).concat.apply(d,p)}function J8(e){var t=e.rows,n=e.stylesheet,o=e.useInlineStyles;return t.map(function(a,s){return q2({node:a,stylesheet:n,useInlineStyles:o,key:"code-segement".concat(s)})})}function n3(e){return e&&typeof e.highlightAuto<"u"}function ev(e){var t=e.astGenerator,n=e.language,o=e.code,a=e.defaultCodeValue;if(n3(t)){var s=W8(t,n);return n==="text"?{value:a,language:"text"}:s?t.highlight(n,o):t.highlightAuto(o)}try{return n&&n!=="text"?{value:t.highlight(o,n)}:{value:a}}catch{return{value:a}}}function tv(e,t){return function(o){var a=o.language,s=o.children,l=o.style,i=l===void 0?t:l,c=o.customStyle,d=c===void 0?{}:c,u=o.codeTagProps,p=u===void 0?{className:a?"language-".concat(a):void 0,style:yn(yn({},i['code[class*="language-"]']),i['code[class*="language-'.concat(a,'"]')])}:u,m=o.useInlineStyles,y=m===void 0?!0:m,C=o.showLineNumbers,b=C===void 0?!1:C,_=o.showInlineLineNumbers,g=_===void 0?!0:_,f=o.startingLineNumber,h=f===void 0?1:f,j=o.lineNumberContainerStyle,S=o.lineNumberStyle,x=S===void 0?{}:S,w=o.wrapLines,T=o.wrapLongLines,E=T===void 0?!1:T,D=o.lineProps,M=D===void 0?{}:D,K=o.renderer,X=o.PreTag,Q=X===void 0?"pre":X,re=o.CodeTag,ae=re===void 0?"code":re,V=o.code,O=V===void 0?(Array.isArray(s)?s[0]:s)||"":V,B=o.astGenerator,I=O8(o,Z8);B=B||e;var H=b?te.createElement(X8,{containerStyle:j,codeStyle:p.style||{},numberStyle:x,startingLineNumber:h,codeString:O}):null,W=i.hljs||i['pre[class*="language-"]']||{backgroundColor:"#fff"},we=n3(B)?"hljs":"prismjs",le=y?Object.assign({},I,{style:Object.assign({},W,d)}):Object.assign({},I,{className:I.className?"".concat(we," ").concat(I.className):we,style:Object.assign({},d)});if(E?p.style=yn(yn({},p.style),{},{whiteSpace:"pre-wrap"}):p.style=yn(yn({},p.style),{},{whiteSpace:"pre"}),!B)return te.createElement(Q,le,H,te.createElement(ae,p,O));(w===void 0&&K||E)&&(w=!0),K=K||J8;var be=[{type:"text",value:O}],se=ev({astGenerator:B,language:a,code:O,defaultCodeValue:be});se.language===null&&(se.value=be);var Re=se.value.length+h,lt=q8(se,w,M,b,g,h,Re,x,E);return te.createElement(Q,le,te.createElement(ae,p,!g&&H,K({rows:lt,stylesheet:i,useInlineStyles:y})))}}var nv=ov,rv=Object.prototype.hasOwnProperty;function ov(){for(var e={},t=0;t<arguments.length;t++){var n=arguments[t];for(var o in n)rv.call(n,o)&&(e[o]=n[o])}return e}var r3=o3,sp=o3.prototype;sp.space=null;sp.normal={};sp.property={};function o3(e,t,n){this.property=e,this.normal=t,n&&(this.space=n)}var vh=nv,av=r3,sv=lv;function lv(e){for(var t=e.length,n=[],o=[],a=-1,s,l;++a<t;)s=e[a],n.push(s.property),o.push(s.normal),l=s.space;return new av(vh.apply(null,n),vh.apply(null,o),l)}var lp=iv;function iv(e){return e.toLowerCase()}var a3=s3,Xt=s3.prototype;Xt.space=null;Xt.attribute=null;Xt.property=null;Xt.boolean=!1;Xt.booleanish=!1;Xt.overloadedBoolean=!1;Xt.number=!1;Xt.commaSeparated=!1;Xt.spaceSeparated=!1;Xt.commaOrSpaceSeparated=!1;Xt.mustUseProperty=!1;Xt.defined=!1;function s3(e,t){this.property=e,this.attribute=t}var wn={},cv=0;wn.boolean=oo();wn.booleanish=oo();wn.overloadedBoolean=oo();wn.number=oo();wn.spaceSeparated=oo();wn.commaSeparated=oo();wn.commaOrSpaceSeparated=oo();function oo(){return Math.pow(2,++cv)}var l3=a3,yh=wn,i3=ip;ip.prototype=new l3;ip.prototype.defined=!0;var c3=["boolean","booleanish","overloadedBoolean","number","commaSeparated","spaceSeparated","commaOrSpaceSeparated"],dv=c3.length;function ip(e,t,n,o){var a=-1,s;for(jh(this,"space",o),l3.call(this,e,t);++a<dv;)s=c3[a],jh(this,s,(n&yh[s])===yh[s])}function jh(e,t,n){n&&(e[t]=n)}var bh=lp,uv=r3,pv=i3,_s=fv;function fv(e){var t=e.space,n=e.mustUseProperty||[],o=e.attributes||{},a=e.properties,s=e.transform,l={},i={},c,d;for(c in a)d=new pv(c,s(o,c),a[c],t),n.indexOf(c)!==-1&&(d.mustUseProperty=!0),l[c]=d,i[bh(c)]=c,i[bh(d.attribute)]=c;return new uv(l,i,t)}var hv=_s,mv=hv({space:"xlink",transform:xv,properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}});function xv(e,t){return"xlink:"+t.slice(5).toLowerCase()}var gv=_s,vv=gv({space:"xml",transform:yv,properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function yv(e,t){return"xml:"+t.slice(3).toLowerCase()}var jv=bv;function bv(e,t){return t in e?e[t]:t}var Cv=jv,d3=Sv;function Sv(e,t){return Cv(e,t.toLowerCase())}var wv=_s,_v=d3,kv=wv({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:_v,properties:{xmlns:null,xmlnsXLink:null}}),cp=wn,Tv=_s,wt=cp.booleanish,It=cp.number,$r=cp.spaceSeparated,Ev=Tv({transform:Nv,properties:{ariaActiveDescendant:null,ariaAtomic:wt,ariaAutoComplete:null,ariaBusy:wt,ariaChecked:wt,ariaColCount:It,ariaColIndex:It,ariaColSpan:It,ariaControls:$r,ariaCurrent:null,ariaDescribedBy:$r,ariaDetails:null,ariaDisabled:wt,ariaDropEffect:$r,ariaErrorMessage:null,ariaExpanded:wt,ariaFlowTo:$r,ariaGrabbed:wt,ariaHasPopup:null,ariaHidden:wt,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:$r,ariaLevel:It,ariaLive:null,ariaModal:wt,ariaMultiLine:wt,ariaMultiSelectable:wt,ariaOrientation:null,ariaOwns:$r,ariaPlaceholder:null,ariaPosInSet:It,ariaPressed:wt,ariaReadOnly:wt,ariaRelevant:null,ariaRequired:wt,ariaRoleDescription:$r,ariaRowCount:It,ariaRowIndex:It,ariaRowSpan:It,ariaSelected:wt,ariaSetSize:It,ariaSort:null,ariaValueMax:It,ariaValueMin:It,ariaValueNow:It,ariaValueText:null,role:null}});function Nv(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}var Qo=wn,Rv=_s,Lv=d3,ue=Qo.boolean,Dv=Qo.overloadedBoolean,ga=Qo.booleanish,Te=Qo.number,mt=Qo.spaceSeparated,xl=Qo.commaSeparated,Ov=Rv({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:Lv,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:xl,acceptCharset:mt,accessKey:mt,action:null,allow:null,allowFullScreen:ue,allowPaymentRequest:ue,allowUserMedia:ue,alt:null,as:null,async:ue,autoCapitalize:null,autoComplete:mt,autoFocus:ue,autoPlay:ue,capture:ue,charSet:null,checked:ue,cite:null,className:mt,cols:Te,colSpan:null,content:null,contentEditable:ga,controls:ue,controlsList:mt,coords:Te|xl,crossOrigin:null,data:null,dateTime:null,decoding:null,default:ue,defer:ue,dir:null,dirName:null,disabled:ue,download:Dv,draggable:ga,encType:null,enterKeyHint:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:ue,formTarget:null,headers:mt,height:Te,hidden:ue,high:Te,href:null,hrefLang:null,htmlFor:mt,httpEquiv:mt,id:null,imageSizes:null,imageSrcSet:xl,inputMode:null,integrity:null,is:null,isMap:ue,itemId:null,itemProp:mt,itemRef:mt,itemScope:ue,itemType:mt,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:ue,low:Te,manifest:null,max:null,maxLength:Te,media:null,method:null,min:null,minLength:Te,multiple:ue,muted:ue,name:null,nonce:null,noModule:ue,noValidate:ue,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforePrint:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextMenu:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:ue,optimum:Te,pattern:null,ping:mt,placeholder:null,playsInline:ue,poster:null,preload:null,readOnly:ue,referrerPolicy:null,rel:mt,required:ue,reversed:ue,rows:Te,rowSpan:Te,sandbox:mt,scope:null,scoped:ue,seamless:ue,selected:ue,shape:null,size:Te,sizes:null,slot:null,span:Te,spellCheck:ga,src:null,srcDoc:null,srcLang:null,srcSet:xl,start:Te,step:null,style:null,tabIndex:Te,target:null,title:null,translate:null,type:null,typeMustMatch:ue,useMap:null,value:ga,width:Te,wrap:null,align:null,aLink:null,archive:mt,axis:null,background:null,bgColor:null,border:Te,borderColor:null,bottomMargin:Te,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:ue,declare:ue,event:null,face:null,frame:null,frameBorder:null,hSpace:Te,leftMargin:Te,link:null,longDesc:null,lowSrc:null,marginHeight:Te,marginWidth:Te,noResize:ue,noHref:ue,noShade:ue,noWrap:ue,object:null,profile:null,prompt:null,rev:null,rightMargin:Te,rules:null,scheme:null,scrolling:ga,standby:null,summary:null,text:null,topMargin:Te,valueType:null,version:null,vAlign:null,vLink:null,vSpace:Te,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:ue,disableRemotePlayback:ue,prefix:null,property:null,results:Te,security:null,unselectable:null}}),Av=sv,Mv=mv,Pv=vv,$v=kv,Bv=Ev,Iv=Ov,zv=Av([Pv,Mv,$v,Bv,Iv]),Fv=lp,Hv=i3,Uv=a3,dp="data",Vv=Kv,Wv=/^data[-\w.:]+$/i,u3=/-[a-z]/g,Zv=/[A-Z]/g;function Kv(e,t){var n=Fv(t),o=t,a=Uv;return n in e.normal?e.property[e.normal[n]]:(n.length>4&&n.slice(0,4)===dp&&Wv.test(t)&&(t.charAt(4)==="-"?o=Yv(t):t=Gv(t),a=Hv),new a(o,t))}function Yv(e){var t=e.slice(5).replace(u3,Qv);return dp+t.charAt(0).toUpperCase()+t.slice(1)}function Gv(e){var t=e.slice(4);return u3.test(t)?e:(t=t.replace(Zv,Xv),t.charAt(0)!=="-"&&(t="-"+t),dp+t)}function Xv(e){return"-"+e.toLowerCase()}function Qv(e){return e.charAt(1).toUpperCase()}var qv=Jv,Ch=/[#.]/g;function Jv(e,t){for(var n=e||"",o=t||"div",a={},s=0,l,i,c;s<n.length;)Ch.lastIndex=s,c=Ch.exec(n),l=n.slice(s,c?c.index:n.length),l&&(i?i==="#"?a.id=l:a.className?a.className.push(l):a.className=[l]:o=l,s+=l.length),c&&(i=c[0],s++);return{type:"element",tagName:o,properties:a,children:[]}}var up={};up.parse=n7;up.stringify=r7;var Sh="",e7=" ",t7=/[ \t\n\r\f]+/g;function n7(e){var t=String(e||Sh).trim();return t===Sh?[]:t.split(t7)}function r7(e){return e.join(e7).trim()}var pp={};pp.parse=o7;pp.stringify=a7;var Xd=",",wh=" ",Ea="";function o7(e){for(var t=[],n=String(e||Ea),o=n.indexOf(Xd),a=0,s=!1,l;!s;)o===-1&&(o=n.length,s=!0),l=n.slice(a,o).trim(),(l||!s)&&t.push(l),a=o+1,o=n.indexOf(Xd,a);return t}function a7(e,t){var n=t||{},o=n.padLeft===!1?Ea:wh,a=n.padRight?wh:Ea;return e[e.length-1]===Ea&&(e=e.concat(Ea)),e.join(a+Xd+o).trim()}var s7=Vv,_h=lp,l7=qv,kh=up.parse,Th=pp.parse,i7=d7,c7={}.hasOwnProperty;function d7(e,t,n){var o=n?m7(n):null;return a;function a(l,i){var c=l7(l,t),d=Array.prototype.slice.call(arguments,2),u=c.tagName.toLowerCase(),p;if(c.tagName=o&&c7.call(o,u)?o[u]:u,i&&u7(i,c)&&(d.unshift(i),i=null),i)for(p in i)s(c.properties,p,i[p]);return p3(c.children,d),c.tagName==="template"&&(c.content={type:"root",children:c.children},c.children=[]),c}function s(l,i,c){var d,u,p;c==null||c!==c||(d=s7(e,i),u=d.property,p=c,typeof p=="string"&&(d.spaceSeparated?p=kh(p):d.commaSeparated?p=Th(p):d.commaOrSpaceSeparated&&(p=kh(Th(p).join(" ")))),u==="style"&&typeof c!="string"&&(p=h7(p)),u==="className"&&l.className&&(p=l.className.concat(p)),l[u]=f7(d,u,p))}}function u7(e,t){return typeof e=="string"||"length"in e||p7(t.tagName,e)}function p7(e,t){var n=t.type;return e==="input"||!n||typeof n!="string"?!1:typeof t.children=="object"&&"length"in t.children?!0:(n=n.toLowerCase(),e==="button"?n!=="menu"&&n!=="submit"&&n!=="reset"&&n!=="button":"value"in t)}function p3(e,t){var n,o;if(typeof t=="string"||typeof t=="number"){e.push({type:"text",value:String(t)});return}if(typeof t=="object"&&"length"in t){for(n=-1,o=t.length;++n<o;)p3(e,t[n]);return}if(typeof t!="object"||!("type"in t))throw new Error("Expected node, nodes, or string, got `"+t+"`");e.push(t)}function f7(e,t,n){var o,a,s;if(typeof n!="object"||!("length"in n))return Eh(e,t,n);for(a=n.length,o=-1,s=[];++o<a;)s[o]=Eh(e,t,n[o]);return s}function Eh(e,t,n){var o=n;return e.number||e.positiveNumber?!isNaN(o)&&o!==""&&(o=Number(o)):(e.boolean||e.overloadedBoolean)&&typeof o=="string"&&(o===""||_h(n)===_h(t))&&(o=!0),o}function h7(e){var t=[],n;for(n in e)t.push([n,e[n]].join(": "));return t.join("; ")}function m7(e){for(var t=e.length,n=-1,o={},a;++n<t;)a=e[n],o[a.toLowerCase()]=a;return o}var x7=zv,g7=i7,f3=g7(x7,"div");f3.displayName="html";var v7=f3,y7=v7;const j7="Æ",b7="&",C7="Á",S7="Â",w7="À",_7="Å",k7="Ã",T7="Ä",E7="©",N7="Ç",R7="Ð",L7="É",D7="Ê",O7="È",A7="Ë",M7=">",P7="Í",$7="Î",B7="Ì",I7="Ï",z7="<",F7="Ñ",H7="Ó",U7="Ô",V7="Ò",W7="Ø",Z7="Õ",K7="Ö",Y7='"',G7="®",X7="Þ",Q7="Ú",q7="Û",J7="Ù",e9="Ü",t9="Ý",n9="á",r9="â",o9="´",a9="æ",s9="à",l9="&",i9="å",c9="ã",d9="ä",u9="¦",p9="ç",f9="¸",h9="¢",m9="©",x9="¤",g9="°",v9="÷",y9="é",j9="ê",b9="è",C9="ð",S9="ë",w9="½",_9="¼",k9="¾",T9=">",E9="í",N9="î",R9="¡",L9="ì",D9="¿",O9="ï",A9="«",M9="<",P9="¯",$9="µ",B9="·",I9=" ",z9="¬",F9="ñ",H9="ó",U9="ô",V9="ò",W9="ª",Z9="º",K9="ø",Y9="õ",G9="ö",X9="¶",Q9="±",q9="£",J9='"',ey="»",ty="®",ny="§",ry="­",oy="¹",ay="²",sy="³",ly="ß",iy="þ",cy="×",dy="ú",uy="û",py="ù",fy="¨",hy="ü",my="ý",xy="¥",gy="ÿ",vy={AElig:j7,AMP:b7,Aacute:C7,Acirc:S7,Agrave:w7,Aring:_7,Atilde:k7,Auml:T7,COPY:E7,Ccedil:N7,ETH:R7,Eacute:L7,Ecirc:D7,Egrave:O7,Euml:A7,GT:M7,Iacute:P7,Icirc:$7,Igrave:B7,Iuml:I7,LT:z7,Ntilde:F7,Oacute:H7,Ocirc:U7,Ograve:V7,Oslash:W7,Otilde:Z7,Ouml:K7,QUOT:Y7,REG:G7,THORN:X7,Uacute:Q7,Ucirc:q7,Ugrave:J7,Uuml:e9,Yacute:t9,aacute:n9,acirc:r9,acute:o9,aelig:a9,agrave:s9,amp:l9,aring:i9,atilde:c9,auml:d9,brvbar:u9,ccedil:p9,cedil:f9,cent:h9,copy:m9,curren:x9,deg:g9,divide:v9,eacute:y9,ecirc:j9,egrave:b9,eth:C9,euml:S9,frac12:w9,frac14:_9,frac34:k9,gt:T9,iacute:E9,icirc:N9,iexcl:R9,igrave:L9,iquest:D9,iuml:O9,laquo:A9,lt:M9,macr:P9,micro:$9,middot:B9,nbsp:I9,not:z9,ntilde:F9,oacute:H9,ocirc:U9,ograve:V9,ordf:W9,ordm:Z9,oslash:K9,otilde:Y9,ouml:G9,para:X9,plusmn:Q9,pound:q9,quot:J9,raquo:ey,reg:ty,sect:ny,shy:ry,sup1:oy,sup2:ay,sup3:sy,szlig:ly,thorn:iy,times:cy,uacute:dy,ucirc:uy,ugrave:py,uml:fy,uuml:hy,yacute:my,yen:xy,yuml:gy},yy={0:"�",128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"};var h3=jy;function jy(e){var t=typeof e=="string"?e.charCodeAt(0):e;return t>=48&&t<=57}var by=Cy;function Cy(e){var t=typeof e=="string"?e.charCodeAt(0):e;return t>=97&&t<=102||t>=65&&t<=70||t>=48&&t<=57}var Sy=wy;function wy(e){var t=typeof e=="string"?e.charCodeAt(0):e;return t>=97&&t<=122||t>=65&&t<=90}var _y=Sy,ky=h3,Ty=Ey;function Ey(e){return _y(e)||ky(e)}var gl,Ny=59,Ry=Ly;function Ly(e){var t="&"+e+";",n;return gl=gl||document.createElement("i"),gl.innerHTML=t,n=gl.textContent,n.charCodeAt(n.length-1)===Ny&&e!=="semi"||n===t?!1:n}var Nh=vy,Rh=yy,Dy=h3,Oy=by,m3=Ty,Ay=Ry,My=Yy,Py={}.hasOwnProperty,xo=String.fromCharCode,$y=Function.prototype,Lh={warning:null,reference:null,text:null,warningContext:null,referenceContext:null,textContext:null,position:{},additional:null,attribute:!1,nonTerminated:!0},By=9,Dh=10,Iy=12,zy=32,Oh=38,Fy=59,Hy=60,Uy=61,Vy=35,Wy=88,Zy=120,Ky=65533,go="named",fp="hexadecimal",hp="decimal",mp={};mp[fp]=16;mp[hp]=10;var Fi={};Fi[go]=m3;Fi[hp]=Dy;Fi[fp]=Oy;var x3=1,g3=2,v3=3,y3=4,j3=5,Qd=6,b3=7,_r={};_r[x3]="Named character references must be terminated by a semicolon";_r[g3]="Numeric character references must be terminated by a semicolon";_r[v3]="Named character references cannot be empty";_r[y3]="Numeric character references cannot be empty";_r[j3]="Named character references must be known";_r[Qd]="Numeric character references cannot be disallowed";_r[b3]="Numeric character references cannot be outside the permissible Unicode range";function Yy(e,t){var n={},o,a;t||(t={});for(a in Lh)o=t[a],n[a]=o??Lh[a];return(n.position.indent||n.position.start)&&(n.indent=n.position.indent||[],n.position=n.position.start),Gy(e,n)}function Gy(e,t){var n=t.additional,o=t.nonTerminated,a=t.text,s=t.reference,l=t.warning,i=t.textContext,c=t.referenceContext,d=t.warningContext,u=t.position,p=t.indent||[],m=e.length,y=0,C=-1,b=u.column||1,_=u.line||1,g="",f=[],h,j,S,x,w,T,E,D,M,K,X,Q,re,ae,V,O,B,I,H;for(typeof n=="string"&&(n=n.charCodeAt(0)),O=W(),D=l?we:$y,y--,m++;++y<m;)if(w===Dh&&(b=p[C]||1),w=e.charCodeAt(y),w===Oh){if(E=e.charCodeAt(y+1),E===By||E===Dh||E===Iy||E===zy||E===Oh||E===Hy||E!==E||n&&E===n){g+=xo(w),b++;continue}for(re=y+1,Q=re,H=re,E===Vy?(H=++Q,E=e.charCodeAt(H),E===Wy||E===Zy?(ae=fp,H=++Q):ae=hp):ae=go,h="",X="",x="",V=Fi[ae],H--;++H<m&&(E=e.charCodeAt(H),!!V(E));)x+=xo(E),ae===go&&Py.call(Nh,x)&&(h=x,X=Nh[x]);S=e.charCodeAt(H)===Fy,S&&(H++,j=ae===go?Ay(x):!1,j&&(h=x,X=j)),I=1+H-re,!S&&!o||(x?ae===go?(S&&!X?D(j3,1):(h!==x&&(H=Q+h.length,I=1+H-Q,S=!1),S||(M=h?x3:v3,t.attribute?(E=e.charCodeAt(H),E===Uy?(D(M,I),X=null):m3(E)?X=null:D(M,I)):D(M,I))),T=X):(S||D(g3,I),T=parseInt(x,mp[ae]),Xy(T)?(D(b3,I),T=xo(Ky)):T in Rh?(D(Qd,I),T=Rh[T]):(K="",Qy(T)&&D(Qd,I),T>65535&&(T-=65536,K+=xo(T>>>10|55296),T=56320|T&1023),T=K+xo(T))):ae!==go&&D(y3,I)),T?(le(),O=W(),y=H-1,b+=H-re+1,f.push(T),B=W(),B.offset++,s&&s.call(c,T,{start:O,end:B},e.slice(re-1,H)),O=B):(x=e.slice(re-1,H),g+=x,b+=x.length,y=H-1)}else w===10&&(_++,C++,b=0),w===w?(g+=xo(w),b++):le();return f.join("");function W(){return{line:_,column:b,offset:y+(u.offset||0)}}function we(be,se){var Re=W();Re.column+=se,Re.offset+=se,l.call(d,_r[be],Re,be)}function le(){g&&(f.push(g),a&&a.call(i,g,{start:O,end:W()}),g="")}}function Xy(e){return e>=55296&&e<=57343||e>1114111}function Qy(e){return e>=1&&e<=8||e===11||e>=13&&e<=31||e>=127&&e<=159||e>=64976&&e<=65007||(e&65535)===65535||(e&65535)===65534}var C3={exports:{}};(function(e){var t=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=function(o){var a=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,s=0,l={},i={manual:o.Prism&&o.Prism.manual,disableWorkerMessageHandler:o.Prism&&o.Prism.disableWorkerMessageHandler,util:{encode:function f(h){return h instanceof c?new c(h.type,f(h.content),h.alias):Array.isArray(h)?h.map(f):h.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(f){return Object.prototype.toString.call(f).slice(8,-1)},objId:function(f){return f.__id||Object.defineProperty(f,"__id",{value:++s}),f.__id},clone:function f(h,j){j=j||{};var S,x;switch(i.util.type(h)){case"Object":if(x=i.util.objId(h),j[x])return j[x];S={},j[x]=S;for(var w in h)h.hasOwnProperty(w)&&(S[w]=f(h[w],j));return S;case"Array":return x=i.util.objId(h),j[x]?j[x]:(S=[],j[x]=S,h.forEach(function(T,E){S[E]=f(T,j)}),S);default:return h}},getLanguage:function(f){for(;f;){var h=a.exec(f.className);if(h)return h[1].toLowerCase();f=f.parentElement}return"none"},setLanguage:function(f,h){f.className=f.className.replace(RegExp(a,"gi"),""),f.classList.add("language-"+h)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(S){var f=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(S.stack)||[])[1];if(f){var h=document.getElementsByTagName("script");for(var j in h)if(h[j].src==f)return h[j]}return null}},isActive:function(f,h,j){for(var S="no-"+h;f;){var x=f.classList;if(x.contains(h))return!0;if(x.contains(S))return!1;f=f.parentElement}return!!j}},languages:{plain:l,plaintext:l,text:l,txt:l,extend:function(f,h){var j=i.util.clone(i.languages[f]);for(var S in h)j[S]=h[S];return j},insertBefore:function(f,h,j,S){S=S||i.languages;var x=S[f],w={};for(var T in x)if(x.hasOwnProperty(T)){if(T==h)for(var E in j)j.hasOwnProperty(E)&&(w[E]=j[E]);j.hasOwnProperty(T)||(w[T]=x[T])}var D=S[f];return S[f]=w,i.languages.DFS(i.languages,function(M,K){K===D&&M!=f&&(this[M]=w)}),w},DFS:function f(h,j,S,x){x=x||{};var w=i.util.objId;for(var T in h)if(h.hasOwnProperty(T)){j.call(h,T,h[T],S||T);var E=h[T],D=i.util.type(E);D==="Object"&&!x[w(E)]?(x[w(E)]=!0,f(E,j,null,x)):D==="Array"&&!x[w(E)]&&(x[w(E)]=!0,f(E,j,T,x))}}},plugins:{},highlightAll:function(f,h){i.highlightAllUnder(document,f,h)},highlightAllUnder:function(f,h,j){var S={callback:j,container:f,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};i.hooks.run("before-highlightall",S),S.elements=Array.prototype.slice.apply(S.container.querySelectorAll(S.selector)),i.hooks.run("before-all-elements-highlight",S);for(var x=0,w;w=S.elements[x++];)i.highlightElement(w,h===!0,S.callback)},highlightElement:function(f,h,j){var S=i.util.getLanguage(f),x=i.languages[S];i.util.setLanguage(f,S);var w=f.parentElement;w&&w.nodeName.toLowerCase()==="pre"&&i.util.setLanguage(w,S);var T=f.textContent,E={element:f,language:S,grammar:x,code:T};function D(K){E.highlightedCode=K,i.hooks.run("before-insert",E),E.element.innerHTML=E.highlightedCode,i.hooks.run("after-highlight",E),i.hooks.run("complete",E),j&&j.call(E.element)}if(i.hooks.run("before-sanity-check",E),w=E.element.parentElement,w&&w.nodeName.toLowerCase()==="pre"&&!w.hasAttribute("tabindex")&&w.setAttribute("tabindex","0"),!E.code){i.hooks.run("complete",E),j&&j.call(E.element);return}if(i.hooks.run("before-highlight",E),!E.grammar){D(i.util.encode(E.code));return}if(h&&o.Worker){var M=new Worker(i.filename);M.onmessage=function(K){D(K.data)},M.postMessage(JSON.stringify({language:E.language,code:E.code,immediateClose:!0}))}else D(i.highlight(E.code,E.grammar,E.language))},highlight:function(f,h,j){var S={code:f,grammar:h,language:j};if(i.hooks.run("before-tokenize",S),!S.grammar)throw new Error('The language "'+S.language+'" has no grammar.');return S.tokens=i.tokenize(S.code,S.grammar),i.hooks.run("after-tokenize",S),c.stringify(i.util.encode(S.tokens),S.language)},tokenize:function(f,h){var j=h.rest;if(j){for(var S in j)h[S]=j[S];delete h.rest}var x=new p;return m(x,x.head,f),u(f,x,h,x.head,0),C(x)},hooks:{all:{},add:function(f,h){var j=i.hooks.all;j[f]=j[f]||[],j[f].push(h)},run:function(f,h){var j=i.hooks.all[f];if(!(!j||!j.length))for(var S=0,x;x=j[S++];)x(h)}},Token:c};o.Prism=i;function c(f,h,j,S){this.type=f,this.content=h,this.alias=j,this.length=(S||"").length|0}c.stringify=function f(h,j){if(typeof h=="string")return h;if(Array.isArray(h)){var S="";return h.forEach(function(D){S+=f(D,j)}),S}var x={type:h.type,content:f(h.content,j),tag:"span",classes:["token",h.type],attributes:{},language:j},w=h.alias;w&&(Array.isArray(w)?Array.prototype.push.apply(x.classes,w):x.classes.push(w)),i.hooks.run("wrap",x);var T="";for(var E in x.attributes)T+=" "+E+'="'+(x.attributes[E]||"").replace(/"/g,"&quot;")+'"';return"<"+x.tag+' class="'+x.classes.join(" ")+'"'+T+">"+x.content+"</"+x.tag+">"};function d(f,h,j,S){f.lastIndex=h;var x=f.exec(j);if(x&&S&&x[1]){var w=x[1].length;x.index+=w,x[0]=x[0].slice(w)}return x}function u(f,h,j,S,x,w){for(var T in j)if(!(!j.hasOwnProperty(T)||!j[T])){var E=j[T];E=Array.isArray(E)?E:[E];for(var D=0;D<E.length;++D){if(w&&w.cause==T+","+D)return;var M=E[D],K=M.inside,X=!!M.lookbehind,Q=!!M.greedy,re=M.alias;if(Q&&!M.pattern.global){var ae=M.pattern.toString().match(/[imsuy]*$/)[0];M.pattern=RegExp(M.pattern.source,ae+"g")}for(var V=M.pattern||M,O=S.next,B=x;O!==h.tail&&!(w&&B>=w.reach);B+=O.value.length,O=O.next){var I=O.value;if(h.length>f.length)return;if(!(I instanceof c)){var H=1,W;if(Q){if(W=d(V,B,f,X),!W||W.index>=f.length)break;var se=W.index,we=W.index+W[0].length,le=B;for(le+=O.value.length;se>=le;)O=O.next,le+=O.value.length;if(le-=O.value.length,B=le,O.value instanceof c)continue;for(var be=O;be!==h.tail&&(le<we||typeof be.value=="string");be=be.next)H++,le+=be.value.length;H--,I=f.slice(B,le),W.index-=B}else if(W=d(V,0,I,X),!W)continue;var se=W.index,Re=W[0],lt=I.slice(0,se),bt=I.slice(se+Re.length),he=B+I.length;w&&he>w.reach&&(w.reach=he);var Le=O.prev;lt&&(Le=m(h,Le,lt),B+=lt.length),y(h,Le,H);var qe=new c(T,K?i.tokenize(Re,K):Re,re,Re);if(O=m(h,Le,qe),bt&&m(h,O,bt),H>1){var Lt={cause:T+","+D,reach:he};u(f,h,j,O.prev,B,Lt),w&&Lt.reach>w.reach&&(w.reach=Lt.reach)}}}}}}function p(){var f={value:null,prev:null,next:null},h={value:null,prev:f,next:null};f.next=h,this.head=f,this.tail=h,this.length=0}function m(f,h,j){var S=h.next,x={value:j,prev:h,next:S};return h.next=x,S.prev=x,f.length++,x}function y(f,h,j){for(var S=h.next,x=0;x<j&&S!==f.tail;x++)S=S.next;h.next=S,S.prev=h,f.length-=x}function C(f){for(var h=[],j=f.head.next;j!==f.tail;)h.push(j.value),j=j.next;return h}if(!o.document)return o.addEventListener&&(i.disableWorkerMessageHandler||o.addEventListener("message",function(f){var h=JSON.parse(f.data),j=h.language,S=h.code,x=h.immediateClose;o.postMessage(i.highlight(S,i.languages[j],j)),x&&o.close()},!1)),i;var b=i.util.currentScript();b&&(i.filename=b.src,b.hasAttribute("data-manual")&&(i.manual=!0));function _(){i.manual||i.highlightAll()}if(!i.manual){var g=document.readyState;g==="loading"||g==="interactive"&&b&&b.defer?document.addEventListener("DOMContentLoaded",_):window.requestAnimationFrame?window.requestAnimationFrame(_):window.setTimeout(_,16)}return i}(t);e.exports&&(e.exports=n),typeof Hl<"u"&&(Hl.Prism=n)})(C3);var qy=C3.exports,Jy=xp;xp.displayName="markup";xp.aliases=["html","mathml","svg","xml","ssml","atom","rss"];function xp(e){e.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},e.languages.markup.tag.inside["attr-value"].inside.entity=e.languages.markup.entity,e.languages.markup.doctype.inside["internal-subset"].inside=e.languages.markup,e.hooks.add("wrap",function(t){t.type==="entity"&&(t.attributes.title=t.content.value.replace(/&amp;/,"&"))}),Object.defineProperty(e.languages.markup.tag,"addInlined",{value:function(n,o){var a={};a["language-"+o]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:e.languages[o]},a.cdata=/^<!\[CDATA\[|\]\]>$/i;var s={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};s["language-"+o]={pattern:/[\s\S]+/,inside:e.languages[o]};var l={};l[n]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return n}),"i"),lookbehind:!0,greedy:!0,inside:s},e.languages.insertBefore("markup","cdata",l)}}),Object.defineProperty(e.languages.markup.tag,"addAttribute",{value:function(t,n){e.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+t+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[n,"language-"+n],inside:e.languages[n]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),e.languages.html=e.languages.markup,e.languages.mathml=e.languages.markup,e.languages.svg=e.languages.markup,e.languages.xml=e.languages.extend("markup",{}),e.languages.ssml=e.languages.xml,e.languages.atom=e.languages.xml,e.languages.rss=e.languages.xml}var S3=gp;gp.displayName="css";gp.aliases=[];function gp(e){(function(t){var n=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;t.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+n.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+n.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+n.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:n,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},t.languages.css.atrule.inside.rest=t.languages.css;var o=t.languages.markup;o&&(o.tag.addInlined("style","css"),o.tag.addAttribute("style","css"))})(e)}const ej=Vn(S3);var tj=vp;vp.displayName="clike";vp.aliases=[];function vp(e){e.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/}}var nj=yp;yp.displayName="javascript";yp.aliases=["js"];function yp(e){e.languages.javascript=e.languages.extend("clike",{"class-name":[e.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),e.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,e.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:e.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:e.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:e.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:e.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:e.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),e.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:e.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),e.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),e.languages.markup&&(e.languages.markup.tag.addInlined("script","javascript"),e.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),e.languages.js=e.languages.javascript}var Na=typeof globalThis=="object"?globalThis:typeof self=="object"?self:typeof window=="object"?window:typeof Hl=="object"?Hl:{},rj=yj();Na.Prism={manual:!0,disableWorkerMessageHandler:!0};var oj=y7,aj=My,w3=qy,sj=Jy,lj=S3,ij=tj,cj=nj;rj();var jp={}.hasOwnProperty;function _3(){}_3.prototype=w3;var Ke=new _3,dj=Ke;Ke.highlight=pj;Ke.register=ks;Ke.alias=uj;Ke.registered=fj;Ke.listLanguages=hj;ks(sj);ks(lj);ks(ij);ks(cj);Ke.util.encode=gj;Ke.Token.stringify=mj;function ks(e){if(typeof e!="function"||!e.displayName)throw new Error("Expected `function` for `grammar`, got `"+e+"`");Ke.languages[e.displayName]===void 0&&e(Ke)}function uj(e,t){var n=Ke.languages,o=e,a,s,l,i;t&&(o={},o[e]=t);for(a in o)for(s=o[a],s=typeof s=="string"?[s]:s,l=s.length,i=-1;++i<l;)n[s[i]]=n[a]}function pj(e,t){var n=w3.highlight,o;if(typeof e!="string")throw new Error("Expected `string` for `value`, got `"+e+"`");if(Ke.util.type(t)==="Object")o=t,t=null;else{if(typeof t!="string")throw new Error("Expected `string` for `name`, got `"+t+"`");if(jp.call(Ke.languages,t))o=Ke.languages[t];else throw new Error("Unknown language: `"+t+"` is not registered")}return n.call(this,e,o,t)}function fj(e){if(typeof e!="string")throw new Error("Expected `string` for `language`, got `"+e+"`");return jp.call(Ke.languages,e)}function hj(){var e=Ke.languages,t=[],n;for(n in e)jp.call(e,n)&&typeof e[n]=="object"&&t.push(n);return t}function mj(e,t,n){var o;return typeof e=="string"?{type:"text",value:e}:Ke.util.type(e)==="Array"?xj(e,t):(o={type:e.type,content:Ke.Token.stringify(e.content,t,n),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:n},e.alias&&(o.classes=o.classes.concat(e.alias)),Ke.hooks.run("wrap",o),oj(o.tag+"."+o.classes.join("."),vj(o.attributes),o.content))}function xj(e,t){for(var n=[],o=e.length,a=-1,s;++a<o;)s=e[a],s!==""&&s!==null&&s!==void 0&&n.push(s);for(a=-1,o=n.length;++a<o;)s=n[a],n[a]=Ke.Token.stringify(s,t,n);return n}function gj(e){return e}function vj(e){var t;for(t in e)e[t]=aj(e[t]);return e}function yj(){var e="Prism"in Na,t=e?Na.Prism:void 0;return n;function n(){e?Na.Prism=t:delete Na.Prism,e=void 0,t=void 0}}const bp=Vn(dj);var Cp=tv(bp,{});Cp.registerLanguage=function(e,t){return bp.register(t)};Cp.alias=function(e,t){return bp.alias(e,t)};const ao=Cp;var jj=Sp;Sp.displayName="bash";Sp.aliases=["shell"];function Sp(e){(function(t){var n="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",o={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},a={bash:o,environment:{pattern:RegExp("\\$"+n),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+n),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};t.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+n),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:a},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:o}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:a},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:a.entity}}],environment:{pattern:RegExp("\\$?"+n),alias:"constant"},variable:a.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},o.inside=t.languages.bash;for(var s=["comment","function-name","for-or-select","assign-left","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],l=a.variable[1].inside,i=0;i<s.length;i++)l[s[i]]=t.languages.bash[s[i]];t.languages.shell=t.languages.bash})(e)}const bj=Vn(jj);var Cj=wp;wp.displayName="json";wp.aliases=["webmanifest"];function wp(e){e.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},e.languages.webmanifest=e.languages.json}const Sj=Vn(Cj);var wj=_p;_p.displayName="jsx";_p.aliases=[];function _p(e){(function(t){var n=t.util.clone(t.languages.javascript),o=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,a=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,s=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function l(d,u){return d=d.replace(/<S>/g,function(){return o}).replace(/<BRACES>/g,function(){return a}).replace(/<SPREAD>/g,function(){return s}),RegExp(d,u)}s=l(s).source,t.languages.jsx=t.languages.extend("markup",n),t.languages.jsx.tag.pattern=l(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),t.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,t.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,t.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,t.languages.jsx.tag.inside.comment=n.comment,t.languages.insertBefore("inside","attr-name",{spread:{pattern:l(/<SPREAD>/.source),inside:t.languages.jsx}},t.languages.jsx.tag),t.languages.insertBefore("inside","special-attr",{script:{pattern:l(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:t.languages.jsx}}},t.languages.jsx.tag);var i=function(d){return d?typeof d=="string"?d:typeof d.content=="string"?d.content:d.content.map(i).join(""):""},c=function(d){for(var u=[],p=0;p<d.length;p++){var m=d[p],y=!1;if(typeof m!="string"&&(m.type==="tag"&&m.content[0]&&m.content[0].type==="tag"?m.content[0].content[0].content==="</"?u.length>0&&u[u.length-1].tagName===i(m.content[0].content[1])&&u.pop():m.content[m.content.length-1].content==="/>"||u.push({tagName:i(m.content[0].content[1]),openedBraces:0}):u.length>0&&m.type==="punctuation"&&m.content==="{"?u[u.length-1].openedBraces++:u.length>0&&u[u.length-1].openedBraces>0&&m.type==="punctuation"&&m.content==="}"?u[u.length-1].openedBraces--:y=!0),(y||typeof m=="string")&&u.length>0&&u[u.length-1].openedBraces===0){var C=i(m);p<d.length-1&&(typeof d[p+1]=="string"||d[p+1].type==="plain-text")&&(C+=i(d[p+1]),d.splice(p+1,1)),p>0&&(typeof d[p-1]=="string"||d[p-1].type==="plain-text")&&(C=i(d[p-1])+C,d.splice(p-1,1),p--),d[p]=new t.Token("plain-text",C,null,C)}m.content&&typeof m.content!="string"&&c(m.content)}};t.hooks.add("after-tokenize",function(d){d.language!=="jsx"&&d.language!=="tsx"||c(d.tokens)})})(e)}const _j=Vn(wj);var kj=kp;kp.displayName="scss";kp.aliases=[];function kp(e){e.languages.scss=e.languages.extend("css",{comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0},atrule:{pattern:/@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,inside:{rule:/@[\w-]+/}},url:/(?:[-a-z]+-)?url(?=\()/i,selector:{pattern:/(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,inside:{parent:{pattern:/&/,alias:"important"},placeholder:/%[-\w]+/,variable:/\$[-\w]+|#\{\$[-\w]+\}/}},property:{pattern:/(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,inside:{variable:/\$[-\w]+|#\{\$[-\w]+\}/}}}),e.languages.insertBefore("scss","atrule",{keyword:[/@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i,{pattern:/( )(?:from|through)(?= )/,lookbehind:!0}]}),e.languages.insertBefore("scss","important",{variable:/\$[-\w]+|#\{\$[-\w]+\}/}),e.languages.insertBefore("scss","function",{"module-modifier":{pattern:/\b(?:as|hide|show|with)\b/i,alias:"keyword"},placeholder:{pattern:/%[-\w]+/,alias:"selector"},statement:{pattern:/\B!(?:default|optional)\b/i,alias:"keyword"},boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"},operator:{pattern:/(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,lookbehind:!0}}),e.languages.scss.atrule.inside.rest=e.languages.scss}const Tj=Vn(kj);var Ej=Tp;Tp.displayName="yaml";Tp.aliases=["yml"];function Tp(e){(function(t){var n=/[*&][^\s[\]{},]+/,o=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,a="(?:"+o.source+"(?:[ 	]+"+n.source+")?|"+n.source+"(?:[ 	]+"+o.source+")?)",s=/(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g,function(){return/[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source}),l=/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;function i(c,d){d=(d||"").replace(/m/g,"")+"m";var u=/([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g,function(){return a}).replace(/<<value>>/g,function(){return c});return RegExp(u,d)}t.languages.yaml={scalar:{pattern:RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g,function(){return a})),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g,function(){return a}).replace(/<<key>>/g,function(){return"(?:"+s+"|"+l+")"})),lookbehind:!0,greedy:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:i(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),lookbehind:!0,alias:"number"},boolean:{pattern:i(/false|true/.source,"i"),lookbehind:!0,alias:"important"},null:{pattern:i(/null|~/.source,"i"),lookbehind:!0,alias:"important"},string:{pattern:i(l),lookbehind:!0,greedy:!0},number:{pattern:i(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source,"i"),lookbehind:!0},tag:o,important:n,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},t.languages.yml=t.languages.yaml})(e)}const Nj=Vn(Ej);function k3(e){return typeof e=="boolean"}function so(e){return typeof e=="string"}function Ep(e){return typeof e=="number"}function T3(e){return Number.isInteger(e)}function qo(e){return Array.isArray(e)}function Hi(e){return typeof e=="function"}function Rj(e){return e instanceof RegExp}function Jo(e){return typeof e=="object"&&!qo(e)&&!E3(e)}function Lj(e){return e===void 0}function E3(e){return e===null}function je(e){return!(Lj(e)||E3(e))}function Ui(e){return!je(e)}function N3(...e){throw new Error(e.join(""))}const R3=(e,...t)=>Hi(e)?e(...t):e;function $e(){}function Dj(){return Intl.DateTimeFormat().resolvedOptions().locale}let Np={locale:Dj(),currency:"GBP",currencySign:"£",thousands:","};const Oj=(e,t,n=1)=>{const o=t<e?-Math.abs(n):n;return Array(1+Math.floor(Math.abs((t-e)/n))).fill(e).map((a,s)=>a+s*o)};function Aj(e,t={}){return new Intl.NumberFormat(t.locale||Np.locale,t).format(e)}function Mj(e,t={}){return Aj(e,{style:"currency",currency:Np.currency,...t})}function Ra(e,t=Np.thousands){if(Ui(e))return"";for(var n=e.toString().split("."),o=/(\d+)(\d{3})/;o.test(n[0]);)n[0]=n[0].replace(o,`$1${t}$2`);return n.join(".")}function Pj(e,t=/,\s*|\s+/){return Ui(e)?[]:so(e)?e.length?e.split(t):[]:qo(e)?e:[e]}function hs(e,t=!0,n={}){return Jo(e)?e:Pj(e).reduce((o,a)=>(o[a]=Hi(t)?t(a):t,o),n)}function L3(e){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()}const $j=L3;function Bj(e){if(Hi(e))return e;if(Rj(e))return t=>e.test(t);if(Jo(e))return t=>!!e[t];if(qo(e)||so(e)){const t=hs(e);return n=>!!t[n]}N3("Invalid selector() specification: "+e)}const Rp=(e,t,n={})=>{let o={},a={delete:!1,...n};const s=Bj(t);return Object.keys(e).map(l=>{if(s(l)){let i=e[l];a.delete&&delete e[l],a.key&&(l=a.key(l)),a.value&&(i=a.value(i)),o[l]=i}}),o},Ah=(e,t)=>parseInt(e[t]||0),Mh=(e,t)=>parseFloat(e[t]||0),Ph=(e,t)=>(e[t]||"").toString(),$h=e=>(t,n)=>Ah(t,e)-Ah(n,e),Bc=e=>(t,n)=>Mh(t,e)-Mh(n,e),Bh=e=>(t,n)=>{let o=Ph(t,e).toLowerCase(),a=Ph(n,e).toLowerCase();return o>a?1:a>o?-1:0},Ij=e=>(t,n)=>e(n,t);function zj(e,t=300){let n;return(...o)=>{clearTimeout(n),n=setTimeout(()=>e.apply(this,o),t)}}function Vi(e){return new Promise(t=>setTimeout(t,e))}ao.registerLanguage("jsx",_j);ao.registerLanguage("json",Sj);ao.registerLanguage("css",ej);ao.registerLanguage("scss",Tj);ao.registerLanguage("bash",bj);ao.registerLanguage("yaml",Nj);const An=({code:e,language:t="jsx",caption:n,expand:o=!1,fixed:a=o,className:s="",highlightLines:l,lineProps:i,undent:c=!1})=>{const[d,u]=v.useState(!1),[p,m]=v.useState(o),y=()=>{navigator.clipboard.writeText(e),u(!0),Vi(2e3).then(()=>u(!1))};return r.jsxs("div",{className:`codeblock ${s} ${p?"expanded":""} ${a?"fixed-open":"expandable"}`,children:[!!n&&r.jsx("h4",{className:"caption",children:n}),r.jsxs("div",{className:"controls",children:[r.jsx("div",{className:"expand",onClick:()=>m(!p),children:p?"Compress":"Expand"}),r.jsx("div",{className:`clipboard ${d?"copied":""}`,onClick:y,children:d?"Copied":"Copy"})]}),r.jsx(ao,{language:t,showLineNumbers:!0,useInlineStyles:!1,wrapLines:!0,customStyle:{},children:Fj(e,{undent:c})})]})},Fj=(e,t={})=>{if(e=e.replace(/^[^]*?{?\/\*\s*START\s*\*\/}?\n/,"").replace(/[\n\s]*{?\/\*\s*END\s*\*\/}?[^]*/,"").replaceAll(/\/\/\s*PRETEND:\s/g,"").replaceAll(/{?\/\*\s*PRETEND:\s(.*?)\s+\*\/}?/g,"$1").replace(/\n+$/,""),t.undent){const n=new RegExp("^"+" ".repeat(t.undent),"gm");e=e.replaceAll(n,"")}return e},pe=({Component:e,code:t,html:n,children:o,className:a="",language:s,...l})=>r.jsxs("div",{className:`example grid-2 gap-8 stack-desktop ${a}`,children:[r.jsx("div",{className:"source",children:r.jsx(An,{code:t||n,language:n?"html":s,...l})}),!!o&&r.jsx("div",{className:"interim",children:o}),e?r.jsxs("div",{className:"output",children:[r.jsx("h4",{className:"caption",children:"Output"}),r.jsx(e,{})]}):null,n?r.jsxs("div",{className:"output",children:[r.jsx("h4",{className:"caption",children:"Output"}),r.jsx("div",{dangerouslySetInnerHTML:{__html:n}})]}):null]}),vl=v.createContext();function Ih(e){return typeof e=="function"}function zh(e){return typeof e=="object"&&!D3(e)&&!Hj(e)}function D3(e){return Array.isArray(e)}function Hj(e){return e===null}function Uj({context:e={},Implementation:t,spec:n=!1,props:o={},ref:a}){if(!n)return r.jsx(t,{...o,ref:a});let s={},l=Ih(n)?n(e):e[n];if(D3(l)&&(t=l[0],l=l[1]),Ih(l)){const i=l(o,a,e);if(te.isValidElement(i))return i;zh(i)&&Object.assign(s,o,i)}else zh(l)?Object.assign(s,l,o):Object.assign(s,o);return r.jsx(t,{...s,ref:a})}const Vj=e=>({Context:vl,Provider:({children:t,...n})=>r.jsx(vl.Provider,{value:{...e,...n},children:t}),Consumer:t=>n=>r.jsx(vl.Consumer,{children:o=>r.jsx(t,{...o,...n,context:o})}),Component:(t,n=t.displayName||t.name)=>te.forwardRef((o,a)=>r.jsx(vl.Consumer,{children:s=>r.jsx(Uj,{Implementation:t,context:s,spec:n,props:o,ref:a})}))}),Wj=Vj(),ve=Wj.Component,Zj="svg",qd="-",O3="fill",Kj="path",Yj="line",Gj="rect",Xj="array",Qj="circle",qj="ellipse",Jj="polygon",eb="polyline",Lp=/-(?!\d)/,Fh="currentColor",Dp=512,Op=512,Ts={defaults:{width:512,height:512,type:"line"},icons:{alpha:"M102,448L256,64L410,448 M152,333L360,333",angle:"M448,336L256,144L64,336",angles:"M448,448L256,256L64,448M448,256L256,64L64,256",arrow:"M96,224L256,64L416,224M256,86L256,448",arrows:"M144,144L256,32L368,144M368,368L256,480L144,368M256,56L256,456",asterisk:"M76,152L436,360M76,360L436,152M256,48L256,464",at:"M256,160C309,160 352,203 352,256C352,309 309,352 256,352C203,352 160,309 160,256C160,203 203,160 256,160M256,480C132,480 32,380 32,256C32,132 132,32 256,32C380,32 480,132 480,256L480,288C480,323 451,352 416,352C381,352 352,323 352,288L352,176",ban:"M100,412L412,100 M256,32C380,32 480,132 480,255C480,379 380,480 256,480C132,480 32,379 32,255C32,132 132,32 256,32Z",bars:"M64,96L448,96M64,256L448,256M64,416L448,416",caret:"M448,336L256,144L64,336L448,336Z",check:"M48,248L192,392L464,120",circle:"circle:256 256 224",clipboard:"M192,80L80,80L80,496L432,496L432,80L320,80L320,112L192,112L192,80ZM256,16C282,16 304,38 304,64C304,90 282,112 256,112C230,112 208,90 208,64C208,38 230,16 256,16Z",cloud:"M480,293C480,234 437,177 362,196C346,161 319,116 240,120C180,124 139,165 125,224C121,223 116,223 111,223C68,223 32,260 32,307C32,354 68,392 111,392C120,392 366,392 380,392C462,392 480,335 480,293Z",cog:"M306,21L206,21L187,91L147,114L78,95L28,182L78,233L78,279L28,330L78,417L147,398L187,421L206,491L306,491L325,421L365,398L434,417L484,330L434,279L434,233L484,182L434,95L365,114L325,91L306,21Z M256,176C300,176 336,212 336,256C336,300 300,336 256,336C212,336 176,300 176,256C176,212 212,176 256,176Z",cross:"M112,112L400,400M400,112L112,400",drag:"M64,96L256,32L448,96M64,416L256,480L448,416M128,256L384,256",envelope:"M32,104L480,104L480,408L32,408L32,104M48,120L256,288L464,120M48,392L200,252M464,392L312,252",equals:"M96,320L416,320 M96,192L416,192",exclamation:"M256,96L256,310M254,416L258,416",eye:["M48,256C146,48 367,49 466,256M48,256C145,464 368,464 466,256","circle:256 256 64"],filter:"M64,32L448,32L448,128L305,271L304,432L208,496L208,272L64,128L64,32Z",folder:"M480,128L480,448L32,448L32,64L176,64L240,128L480,128Z",heart:"M256,128C298,48 382,48 424,88C466,128 466,208 424,288C394,348 319,408 256,448C193,408 118,348 88,288C46,208 46,128 88,88C130,48 214,48 256,128Z",hourglass:"M80,32L432,32M80,480L432,480M128,32C128,256 384,256 384,480M384,32C384,256 128,256 128,480",info:"M212,202L256,202L256,416M182,416L330,416M252,96L256,96",key:["M189,246C183,229 180,212 180,194C180,118 242,56 318,56C394,56 456,118 456,194C456,270 394,332 318,332C300,332 283,329 266,323L232,360L184,360L184,408L136,408L136,456L56,456L56,379L189,246Z","circle:344 168 8"],list:"M176,96L448,96M176,256L448,256M176,416L448,416M64,96L80,96M64,256L80,256M64,416L80,416",locked:["M144,224L144,166C144,105 195,54 256,54C317,54 368,105 368,166L368,224M256,320L256,368","rect:80 224 352 240 32 32"],login:"M192,128L320,256L192,384M304,256L64,256M320,64L448,64L448,448L320,448",logout:"M320,128L448,256L320,384M432,256L192,256M192,448L64,448L64,64L192,64",minus:"M96,256L416,256",mobile:["rect:128 48 256 416 32 32","M128,120L384,120M128,392L384,392"],number:"M256,448L256,64L176,128 M160,448L336,449",page:"M416,170L416,480L96,480L96,32L288,32L416,170M288,32L288,176L416,176",pen:"M482,143C491,134 491,120 482,112L401,30C392,21 378,21 369,30L72,326L22,489L186,439L482,143M305,93L418,206",phone:"M51,59C40,62 32,72 32,84C41,321 192,472 428,480C440,480 451,471 453,459C459,435 469,395 475,371C478,360 472,348 462,343C438,331 395,309 370,297C360,292 347,295 339,304C325,323 303,352 304,352C255,352 160,257 160,208C160,207 188,186 207,172C217,165 220,152 215,141C202,117 181,74 169,50C164,39 152,34 141,37C116,43 75,53 51,59Z",plus:"M256,96L256,416M96,256L416,256",point:"M464,192L256,16L48,192L128,192L128,480L384,480L384,192L464,192Z",prime:"M256,128L256,256",question:"M160,160C160,126 197,80 255,80C314,80 336,128 336,160C336,236 255,235 255,320 M255,416L256,416",rotate:"M392,120C356,84 307,64 256,64C150,64 64,150 64,256C64,362 150,448 256,448C303,448 349,430 384,399C349,430 303,448 256,448C150,448 64,362 64,256C64,150 150,64 256,64C307,64 356,84 392,120Z M352,208L480,208L480,80",search:"M204,32C300,32 384,111 384,208C384,305 305,384 208,384C111,384 32,305 32,208C32,111 107,32 204,32M480,480L332,332",slash:"M64,448L448,64",square:"rect:32 32 448 448",square10:"rect:32 32 448 448 45 45",square20:"rect:32 32 448 448 90 90",square30:"rect:32 32 448 448 135 135",square40:"rect:32 32 448 448 180 180",star:"M256,32L324,183L489,202L367,313L400,476L256,394L112,476L145,313L23,202L188,183L256,32Z",thumb:"M149,174L32,174L32,448L149,448L149,184 M149,217C277,160 246,36 282,38C372,44 324,192 324,192L440,192C462,192 480,210 480,232C480,254 462,272 440,272L368,272M424,272C446,272 464,290 464,312C464,334 446,352 424,352L352,352M392,352C414,352 432,370 432,392C432,414 414,432 392,432L256,432C220,432 149,409 149,409",time:"M256,128L256,256L336,336",trash:"M32,80L480,80 M80,80C80,80 100,344 109,452C111,477 131,496 156,496C211,496 301,496 356,496C381,496 401,477 403,452C412,344 432,80 432,80 M160,80L208,16L304,16L352,74",triangle:"M256,64L32,448L480,448L256,64Z",unlocked:["M144,224L144,166C144,105 195,54 256,54C304,54 346,85 361,128M256,320L256,368","rect:80 224 352 240 32 32"],user:"M256,32C302,32 340,70 340,116C340,162 302,208 256,208C210,208 172,162 172,116C172,70 210,32 256,32ZM448,412C448,361 410,320 363,320L148,320C102,320 64,361 64,412L64,480L448,480L448,412Z",vertical:"line:256,48 256,464",wrench:"M486,108C493,124 496,142 496,160C496,239 431,304 352,304C330,304 309,299 290,290L98,482C79,501 49,501 30,482C11,463 11,433 30,414L222,222C213,203 208,182 208,160C208,81 273,16 352,16C370,16 388,19 404,26L326,103L409,186L486,108Z"}};function tb(e,t,n=Ts){n.icons[e]=t}function nb(e,t=Ts){Object.entries(e).forEach(([n,o])=>tb(n,o,t))}const yl=v.createContext();function Hh(e){return typeof e=="function"}function Uh(e){return typeof e=="object"&&!A3(e)&&!rb(e)}function A3(e){return Array.isArray(e)}function rb(e){return e===null}function ob({context:e={},Implementation:t,spec:n=!1,props:o={},ref:a}){if(!n)return r.jsx(t,{...o,ref:a});let s={},l=Hh(n)?n(e):e[n];if(A3(l)&&(t=l[0],l=l[1]),Hh(l)){const i=l(o,a,e);if(te.isValidElement(i))return i;Uh(i)&&Object.assign(s,o,i)}else Uh(l)?Object.assign(s,l,o):Object.assign(s,o);return r.jsx(t,{...s,ref:a})}const ab=e=>({Context:yl,Provider:({children:t,...n})=>r.jsx(yl.Provider,{value:{...e,...n},children:t}),Consumer:t=>n=>r.jsx(yl.Consumer,{children:o=>r.jsx(t,{...o,...n,context:o})}),Component:(t,n=t.displayName||t.name)=>te.forwardRef((o,a)=>r.jsx(yl.Consumer,{children:s=>r.jsx(ob,{Implementation:t,context:s,spec:n,props:o,ref:a})}))}),sb=ab(),lb=sb.Component;function Zn(e){return typeof e=="string"}function Es(e){return Array.isArray(e)}function Wi(e){return typeof e=="object"&&!Es(e)&&!P3(e)}function M3(e){return e===void 0}function P3(e){return e===null}function Zi(e){return!(M3(e)||P3(e))}function $3(e){return!Zi(e)}function Un(...e){throw new Error(e.join(""))}function ib(){return Intl.DateTimeFormat().resolvedOptions().locale}ib();function Jd(e,t=/,\s*|\s+/){return $3(e)?[]:Zn(e)?e.length?e.split(t):[]:Es(e)?e:[e]}const cb=(e,t)=>{const n=e[t];return delete e[t],n};function Ns(e){return e.split(/\s*[;&]\s*/).filter(t=>t.length>0).reduce((t,n)=>{const[o,a]=n.split(/\s*[:=]\s*/);return t[o]=M3(a)?!0:a,t},{})}const Ap=e=>e.filter(Zi).join(" "),db=e=>Object.entries(e).filter(([,t])=>t).map(([t])=>t),ub=(...e)=>Ap(e.flatMap(t=>Wi(t)?db(t):t)),pb=e=>Jd(e,/\s+/),B3={x:0,y:0,size:16,flipX:!1,flipY:!1,rotate:0},yr={flip:(e,t)=>{Zn(t)&&t.match(/^y$/i)?e.flipY=!e.flipY:e.flipX=!e.flipX},flipx:e=>e.flipX=!e.flipX,flipy:e=>e.flipY=!e.flipY,grow:(e,t)=>e.size+=parseFloat(t),shrink:(e,t)=>e.size-=parseFloat(t),left:(e,t)=>t===!0?e.rotate-=90:e.x-=parseFloat(t),right:(e,t)=>t===!0?e.rotate+=90:e.x+=parseFloat(t),up:(e,t)=>t===!0?e.rotate+=0:e.y-=parseFloat(t),down:(e,t)=>t===!0?e.rotate+=180:e.y+=parseFloat(t),rotate:(e,t)=>e.rotate+=parseInt(t)};yr.flop=yr.flipy;yr["flip-x"]=yr.flipx;yr["flip-y"]=yr.flipy;function I3(e,t={...B3}){const n=Zn(e)?Ns(e):e||{};return Object.entries(n).reduce((o,[a,s])=>{const l=a.toLowerCase();return(yr[l]||Un(`Invalid transform: ${l}`))(o,s),o},t)}const fb=4.42,Nn=e=>`${fb*e}%`,hb={},eu={outline:{fill:"none",stroke:"currentColor",strokeWidth:Nn(2),strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"1.5"},solid:{fill:"currentColor",stroke:"none"},round:{strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"1.5"},square:{strokeLinecap:"square",strokeLinejoin:"miter",strokeMiterlimit:"1.5"},butt:{strokeLinecap:"butt"},bevel:{strokeLinejoin:"bevel"},thinnest:{strokeWidth:Nn(.5)},thinner:{strokeWidth:Nn(1)},thin:{strokeWidth:Nn(1.5)},medium:{strokeWidth:Nn(2)},thick:{strokeWidth:Nn(2.5)},thicker:{strokeWidth:Nn(3)},thickest:{strokeWidth:Nn(3.5)}};eu.line=eu.outline;const mb={...Object.entries(eu).reduce((e,[t,n])=>(e[t]=o=>Object.assign(o,n),e),{}),fill:(e,t)=>e.fill=t===!0?Fh:t,stroke:(e,t)=>e.stroke=t===!0?Fh:t,nofill:e=>delete e.fill,nostroke:e=>delete e.stroke,strokewidth:(e,t)=>e.strokeWidth=t.match(/^[\d.]+$/)?Nn(parseFloat(t)):t,opacity:(e,t)=>e.opacity=t,fillopacity:(e,t)=>e.fillOpacity=t,strokeopacity:(e,t)=>e.strokeOpacity=t,dasharray:(e,t)=>e.strokeDasharray=t,drawlength:(e,t)=>e["--draw-length"]=t,drawtime:(e,t)=>e["--draw-time"]=t,filltime:(e,t)=>e["--fill-time"]=t};function fi(e,t){return(Zn(t)?t.split(Lp):t).forEach(n=>{const[o,a=!0]=n.split(/[:=]/),s=o.toLowerCase(),l=mb[s];if(l){l(e.style||(e.style={...hb}),a);return}(yr[s]||Un(`Invalid style or transform: ${s}`))(e.transform||(e.transform={...B3}),a)})}const xb={width:Dp,height:Op,type:O3},z3={svg:e=>({element:Zj,svg:e}),array:e=>({element:Xj,items:e}),path:e=>({element:Kj,d:e}),polygon:e=>({element:Jj,points:e}),polyline:e=>({element:eb,points:e}),circle:e=>({element:Qj,...jl(e,"cx cy r")}),ellipse:e=>({element:qj,...jl(e,"cx cy rx ry")}),line:e=>({element:Yj,...jl(e,"x1 y1 x2 y2")}),rect:e=>({element:Gj,...jl(e,"x y width height rx ry")})};function jl(e,t){const n=Es(t)?[...t]:Jd(t);return Jd(e).reduce((o,a)=>{if(n.length){const s=n.shift();o[s]=a}return o},{})}const F3=e=>{const[t,n=""]=e.split("?"),[o,...a]=t.split(/\.(?!\d)/),s=o.split(Lp).filter(i=>i.length),l=Ns(n);return{dashes:s,classes:a,style:l}},gb=(e,t)=>{const n=F3(e),{dashes:o}=n;for(let a=o.length;a>0;a--){const s=o.slice(0,a).join(qd);if(t[s]){n.name=o.splice(0,a).join(qd);break}}return n},Vh=(e,t,n={})=>{const{icons:o}=t,a=gb(e,o),{name:s,classes:l,style:i,dashes:c}=a;$3(s)&&Un(`No icon found matching any leading subset of ${a.dashes.join(qd)}`);const d=t.icons[s]||Un(`Icon not found in data: ${s}`),u=H3(d,t,{...n,name:s});if((l.length||n.className)&&(u.className=Ap([...l||[],n.className])),u.transform&&(u.transform=I3(u.transform)),u.style&&(u.style=Zn(u.style)?Ns(u.style):{...u.style}),u.type){const p=u.style&&{...u.style};fi(u,u.type),delete u.type,p&&Object.assign(u.style,p)}return c.length&&fi(u,c),Object.keys(i).length&&(u.style=Object.assign(u.style||{},i)),u};function vb(e){const t=e.match(/^(.*?):(.*)/);return t?{path:t[2],type:t[1]}:{path:e}}const H3=(e,t,n={})=>{const{defaults:o={}}=t,a={...xb,...o,...n};return U3(a,e,t)},U3=(e,t,n)=>{if(Zn(t))return yb(e,t);if(Wi(t))return jb(e,t,n);if(Es(t))return bb(e,t,n);Un(`Cannot parse icon data: ${t}`)};function yb(e,t){if(t.match(/^\w*</))return e.body={element:"svg",svg:t},e;const n=t.match(/^(.*?):(.*)/);if(n){const[,o,a]=n,{dashes:s,classes:l}=F3(o),i=s.shift(),c=z3[i]||Un(`Invalid icon data element: ${i}`);return e.body=c(a),l.length&&(e.body.className=Ap(l)),s.length&&fi(e.body,s),e}return e.body={element:"path",d:t},e}function jb(e,t,n){const o={...t};if(o.element)return e.body=o,e;if(o.data){const a=cb(o,"data");return U3(e,a,n),Object.assign(e,o),e}for(let a of Object.entries(z3)){const[s,l]=a,i=o[s];if(Zi(i))return e.body=l(i),delete o[s],Object.assign(e,o),e}Un(`Cannot parse icon data: ${JSON.stringify(t)}`)}function bb(e,t,n){return e.body={element:"array",items:t.map(o=>H3(o,n).body)},e}const Cb=({size:e,...t})=>{t.width??(t.width=e||Dp),t.height??(t.height=e||Op),t.path&&Object.assign(t,vb(t.path));let n;return t.style&&(Zn(t.style)?(n=Ns(t.style),t.style={}):n={...t.style}),fi(t,t.type?t.type.split(Lp).filter(o=>o.length):O3),delete t.type,t.style&&n&&Object.assign(t.style,n),t.transform&&(t.transform=I3(t.transform)),t},Mp=e=>Wi(e)?Object.entries(e).reduce((t,[n,o])=>(t[n.replace(/(?!-)-./g,a=>a[1].toUpperCase())]=o,t),{}):e,Sb=e=>Zi(e)?Mp(Ns(e)):null,Kn=({style:e,class:t,...n})=>({style:Zn(e)?Sb(e):Mp(e),className:t,...n}),wb=e=>r.jsx("circle",{...Kn(e)}),_b=e=>r.jsx("ellipse",{...Kn(e)}),kb=e=>r.jsx("line",{...Kn(e)}),V3=e=>r.jsx("path",{...Kn(e)}),Tb=e=>r.jsx("polygon",{...Kn(e)}),Eb=e=>r.jsx("polyline",{...Kn(e)}),Nb=e=>r.jsx("rect",{...Kn(e)}),Rb=({svg:e,...t})=>r.jsx("g",{dangerouslySetInnerHTML:{__html:e},...Kn(t)}),Lb=({items:e,...t})=>r.jsx("g",{...Kn(t),children:e.map((n,o)=>r.jsx(hi,{body:n},o))}),Db={array:Lb,circle:wb,ellipse:_b,line:kb,path:V3,polygon:Tb,polyline:Eb,rect:Nb,svg:Rb},hi=({path:e,body:t,...n})=>{if(e)return r.jsx(V3,{d:e,...n});if(Zn(t))return r.jsx("g",{dangerouslySetInnerHTML:{__html:t}});if(Wi(t)){const{element:o,...a}=t,s=Db[o]||Un(`Invalid element type: ${o} => `,JSON.stringify(t));return r.jsx(s,{...a})}if(Es(t))return t.map((o,a)=>r.jsx(hi,{body:o},a));Un(`Don't know how to handle body: ${t}`)};function Ob({width:e,height:t,transform:n,children:o}){const a=e/2,s=t/2,l=n.x*e/16,i=n.y*t/16,c=n.size/16*(n.flipX?-1:1),d=n.size/16*(n.flipY?-1:1),u=n.rotate;return r.jsx("g",{transform:`translate(${a} ${s})`,children:r.jsx("g",{transform:`translate(${l}, ${i}) scale(${c}, ${d}) rotate(${u} 0 0)`,children:r.jsx("g",{transform:`translate(-${a} -${s})`,children:o})})})}const Ic=({onClick:e,minx:t=0,miny:n=0,width:o=Dp,height:a=Op,style:s,transform:l,className:i="",debug:c,...d})=>r.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",role:"img","aria-hidden":"true",focusable:"false",viewBox:`${t} ${n} ${o} ${a}`,className:`${i} icon`,style:Mp(s),onClick:e,children:[!!c&&console.log("style: ",s),l?r.jsx(Ob,{width:o,height:a,transform:l,children:r.jsx(hi,{...d})}):r.jsx(hi,{...d})]}),Ab=({name:e,iconsClass:t="icons",library:n=Ts,...o})=>{if(!e)return r.jsx(Ic,{...Cb(o)});const a=pb(e);return a.length===1?r.jsx(Ic,{...o,...Vh(e,n,o)}):r.jsx("div",{className:ub(t,o.className),children:a.map(s=>r.jsx(Ic,{...o,...Vh(s,n,o)},s))})},Il=lb(Ab,"Icon"),Mb=e=>e.filter(je).join(" "),Pb=e=>Object.entries(e).filter(([,t])=>t).map(([t])=>t),Se=(...e)=>Mb(e.flatMap(t=>Jo(t)?Pb(t):t)),$b=e=>{if(!e)return null;const[t,n,o,a,s]=e.split("-");return Se(t,Ib(n),zb(o),Fb(a),Hb(s))},Bb=({className:e,size:t,color:n,...o})=>({...o,className:Se(e,t,$b(n))}),Ki=e=>W3(e,"border",t=>`border bdw-${t}`),Pp=e=>W3(e,"shadow-1",t=>`shadow-${t}`),$p=e=>Rs(e,t=>`bdr-${t}`),Ib=e=>Rs(e,t=>`fgc-${t}`),zb=e=>Rs(e,t=>`bgc-${t}`),Fb=e=>Rs(e,t=>`fgd-${t}`),Hb=e=>Rs(e,t=>`bgd-${t}`),Rs=(e,t)=>T3(parseInt(e))?R3(t,e):null,W3=(e,t,n)=>e===!0?t:parseInt(e)?R3(n,e):null,ee=e=>r.jsx(Il,{...Bb(e)});function Wh(e,t,n={}){return je(t)&&(n[e]=T3(t)?`${t}deg`:t),Object.keys(n).length?n:null}const Ub=({icon:e,iconClass:t,iconLeft:n,iconLeftClass:o="on-left",iconLeftRotate:a,iconRight:s,iconRightClass:l="on-right",iconRightRotate:i,text:c,children:d})=>r.jsxs(r.Fragment,{children:[!!e&&r.jsx(Il,{name:e,className:t,fixedWidth:!0}),!!n&&r.jsx(Il,{name:n,className:o,style:Wh("--icon-rotate",a),fixedWidth:!0}),c||d,!!s&&r.jsx(Il,{name:s,className:l,style:Wh("--icon-rotate",i),fixedWidth:!0})]}),Ls=ve(Ub,"WithIcons");nb({github:"path-fill-stroke=none:M256,0C115,0 0,115 0,256C0,369 73,465 175,499C188,501 193,493 193,487C193,481 192,460 192,439C128,451 111,423 106,409C103,402 91,379 80,373C71,368 58,356 80,356C100,356 114,374 119,382C142,421 179,410 194,403C196,387 203,375 210,369C153,363 93,340 93,243C93,215 103,192 120,174C117,167 108,141 122,106C122,106 144,99 193,132C213,126 235,124 257,124C278,124 300,126 321,132C370,99 391,106 391,106C405,141 396,167 394,174C410,192 420,214 420,243C420,341 360,363 303,369C312,377 320,392 320,416C320,451 320,478 320,487C320,493 325,501 338,499C439,465 512,369 512,256C512,115 397,0 256,0Z"});const Vb=({dismissable:e,dismiss:t,revealable:n,isRevealed:o,openIcon:a="angle-down",closedIcon:s="angle-left",dismissIcon:l="cross"})=>r.jsxs("div",{className:"on-right",children:[!!e&&r.jsx(ee,{name:l,fixedWidth:!0,className:"dismiss",onClick:()=>t(!0)}),!!n&&r.jsx(ee,{name:o?a:s,fixedWidth:!0,className:"reveal"})]}),Z3=ve(Vb,"AlertControls"),Wb=({headline:e,headIcon:t,toggle:n,revealable:o=!1,controlProps:a,Controls:s=Z3})=>r.jsxs("div",{className:"headline flex space",onClick:o?n:null,children:[r.jsxs("div",{children:[!!t&&r.jsx(ee,{name:t,fixedWidth:!0,className:"on-left"}),e]}),r.jsx(s,{...a})]}),Zb=ve(Wb,"AlertHeadline"),Kb=({title:e,text:t,children:n})=>r.jsxs(r.Fragment,{children:[e&&r.jsx("h3",{children:e}),t?r.jsx("p",{children:t}):n]}),K3=ve(Kb,"AlertContent"),Yb=({icon:e,Content:t=K3,...n})=>r.jsxs("div",{className:"side-icon",children:[r.jsx(ee,{name:e}),r.jsx("div",{className:"wide",children:r.jsx(t,{...n})})]}),Gb=ve(Yb,"AlertIcon"),Y3=e=>so(e)||Ep(e)||k3(e),Ds=e=>Y3(e)||!e.separator&&!e.heading&&!e.disabled,Xb=e=>Y3(e)?e:e.value??e.id,Qb=(e,t,n=Xb)=>{if(Ui(t))return[];const o=e.findIndex(a=>t===n(a));return o>=0?[e[o],o]:[]},qb=(e,t)=>{const n=e.toLowerCase().split(/\s+/);return t.filter(o=>{if(o.fixed)return!0;const a=o.search??o.text??o.label??o.name??o.value;if(je(a)){const s=a.toString().toLowerCase();return n.every(l=>s.indexOf(l)>=0)}return!1})};function Jb(e,t=Ds){const n=e.findIndex(t);return n<0?null:n}function eC(e,t=Ds){for(let n=e.length-1;n>=0;n--)if(t(e[n]))return n;return null}function tC(e,t,n=Ds){for(let o=1;o<=e.length;o++){const a=(t+o)%e.length;if(n(e[a]))return a}return null}function nC(e,t,n=Ds){for(let o=1;o<=e.length;o++){const a=(t+e.length-o)%e.length;if(n(e[a]))return a}return null}const zl="",Bp="ArrowDown",Ip="ArrowUp",rC="Tab",Yi="Enter",zp=" ",Gi="Escape",oC="Backspace",mi=e=>{const t=`HINT: define ${e}() to render this value`;return n=>so(n)||Ep(n)?n:Jo(n)?n.text??n.label??n.name??t:t},aC=e=>so(e)||Ep(e)?e:r.jsx(Ls,{...e}),G3=(e,t)=>{if(!e||!t)return;const n=t.offsetTop,o=n+t.offsetHeight,a=e.scrollTop,s=a+e.offsetHeight;n<a?e.scrollTo({top:n}):o>s&&e.scrollTo({top:a+(o-s)})},Yn=({title:e,headline:t,headIcon:n,type:o,size:a,color:s,stripe:l,border:i,radius:c,shadow:d,className:u,text:p,children:m,onDismiss:y,icon:C,dismissable:b=!1,revealable:_=!1,revealed:g=!1,openIcon:f,closedIcon:h,dismissIcon:j,Headline:S=Zb,Controls:x=Z3,Content:w=K3,Icon:T=Gb})=>{const[E,D]=v.useState(_?g:!0),[M,K]=v.useState(!1),X=Se("alert",o,a,s,u,{revealable:_,dismissable:b,stripe:l},E?"revealed":null,Pp(d),Ki(i),$p(c)),Q=()=>D(I=>!I),ae={dismissable:b,revealable:_,isRevealed:E,dismiss:()=>{K(!0),y&&y()},openIcon:f,closedIcon:h,dismissIcon:j},V={title:e,text:p,children:m},O={...V,icon:C,Content:w},B={headline:t,headIcon:n,toggle:Q,revealable:_,controlProps:ae,Controls:x};return M?null:r.jsxs("div",{className:X,children:[!!t&&r.jsx(S,{...B}),E&&(C?r.jsx(T,{...O}):r.jsx(w,{...V}))]})},La=ve(e=>r.jsx(Yn,{...e,type:"info"}),"Info"),Da=ve(e=>r.jsx(Yn,{...e,type:"success"}),"Success"),Oa=ve(e=>r.jsx(Yn,{...e,type:"warning"}),"Warning"),Aa=ve(e=>r.jsx(Yn,{...e,type:"error"}),"Error");Yn.Info=La;Yn.Success=Da;Yn.Warning=Oa;Yn.Error=Aa;const J=ve(Yn,"Alert"),sC=({type:e="button",size:t,color:n,className:o,disabled:a,bright:s,dark:l,outline:i,bare:c,shaded:d,shadow:u,border:p,radius:m,label:y,tooltip:C,tabIndex:b=0,icon:_,iconClass:g,iconLeft:f,iconLeftClass:h,iconRight:j,iconRightClass:S,text:x,children:w,Content:T=Ls,...E})=>{const D=Se(t,n,o,{bright:s,dark:l,outline:i,bare:c,shaded:d,icon:_},Pp(u),Ki(p),$p(m)),M={icon:_,iconClass:g,iconLeft:f,iconLeftClass:h,iconRight:j,iconRightClass:S,text:x,children:w};return r.jsx("button",{className:D,"aria-label":y,tabIndex:b,type:e,disabled:a,"aria-disabled":a,"data-tooltip":C,...E,children:r.jsx(T,{...M})})},A=ve(sC,"Button"),lC=({buttons:e,children:t,className:n="buttons",buttonClass:o,Button:a=A,...s})=>r.jsx("div",{className:n,children:e?e.map((l,i)=>r.jsx(a,{className:o,...s,...l},i)):t}),lo=ve(lC,"Buttons"),iC=({className:e,disabled:t,children:n,ref:o})=>r.jsx("label",{className:Se(e,{disabled:t}),ref:o,children:n}),cC=ve(iC,"CheckboxLabel"),dC=({disabled:e=!1,tabIndex:t=0,onChange:n=$e,ref:o,...a})=>r.jsx("input",{type:"checkbox",ref:o,"aria-disabled":e,tabIndex:e?-1:t,onChange:s=>n(s.target.checked),...a}),uC=ve(dC,"CheckboxInput"),pC=({size:e,color:t,border:n,inline:o,className:a="checkbox",text:s,ref:l,inputRef:i,checked:c,checkedText:d=s,uncheckedText:u=s,inputClass:p,Label:m=cC,Input:y=uC,...C})=>r.jsxs(m,{className:Se(e,t,a,Ki(n),{inline:o}),ref:l,checked:c,...C,children:[r.jsx(y,{className:p,ref:i,checked:c,...C}),c?d:u]}),_n=ve(pC,"Checkbox"),fC=({checked:e=!1}={})=>{const[t,n]=v.useState(e);return{isChecked:t,setChecked:n,check:()=>n(!0),uncheck:()=>n(!1)}},hC=({checked:e=!1,onChange:t,...n})=>{const{isChecked:o,setChecked:a}=fC({checked:e}),s=l=>{a(l),t&&t(l)};return r.jsx(_n,{checked:o,onChange:s,...n})},kr=({visible:e=!1}={})=>{const[t,n]=v.useState(e);return{isVisible:t,setVisible:n,show:()=>n(!0),hide:()=>n(!1)}},mC=({initiallyRevealed:e=!1,open:t=e,confirmIcon:n="check",confirmText:o="Confirm",confirmColor:a="red",confirmClass:s,cancelIcon:l="cross",cancelText:i="Cancel",cancelColor:c="grey",cancelClass:d,confirm:u={iconRight:n,text:o,color:a,className:s},cancel:p={iconLeft:l,text:i,color:c,className:d},buttonsClass:m,className:y=m,buttonClass:C,onClick:b=()=>window.alert("No confirm action defined"),..._})=>{const{isVisible:g,hide:f,show:h}=kr({visible:t}),S={iconRight:n,text:o,color:a,className:s,...u,onClick:w=>{w.preventDefault(),f(),b()}},x={iconLeft:l,text:i,color:c,className:d,outline:!0,...p,onClick:f};return r.jsx(lo,{className:y,buttonClass:C,buttons:g?[x,S]:[{..._,onClick:h}]})},kn=ve(mC,"Confirm");var xC=Object.defineProperty,gC=(e,t,n)=>t in e?xC(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,zc=(e,t,n)=>(gC(e,typeof t!="symbol"?t+"":t,n),n);const Tr=(e,t={})=>{const n=te.createContext(t);return{Context:n,Provider:o=>r.jsx(e,{...o,render:a=>r.jsx(n.Provider,{value:a,children:o.children})}),Consumer:o=>a=>r.jsx(n.Consumer,{children:s=>r.jsx(o,{...s,...a})}),Use:()=>te.useContext(n)}};function vC(e={},t={},n={}){return Object.entries(t).reduce((o,[a,s])=>{const l=n[s];return l!==null&&typeof l<"u"&&(o[a]=l),o},{...e})}function yC(e,t=[]){return(typeof t=="string"?t.split(/,\s*|\s+/):t).reduce((n,o)=>{const a=e[o]||bC(`Cannot expose non-existent action method: ${o}`);return n[o]=a.bind(e),n},{})}function jC(e,t){const n=e.debug??t.debug,o=Zh(e.debugPrefix??t.debugPrefix,e),a=Zh(e.debugColor??t.debugColor,e);return n?o?(s,...l)=>console.log(`%c${o}%c${s}`,`color: ${a}`,"color:black",...l):console.log.bind(console):()=>{}}function Zh(e,t){return typeof e=="function"?e(t):e}function bC(...e){throw new Error(e.join(""))}class Wa extends te.Component{constructor(t){super(t);const n=this.constructor;this.debug=jC(t,n),this.state=vC(n.initialState,n.initialProps,t),this.actions=yC(this,n.actions)}getContext(){return{...this.props,...this.state,...this.actions}}getRenderProps(){return this.getContext()}render(){return this.props.render(this.getRenderProps())}}zc(Wa,"initialState",{}),zc(Wa,"initialProps",{}),zc(Wa,"actions",[]);const Fc=e=>{so(e)&&(e={field:e});const{field:t}=e;return e.type||(e.type="text"),e.label||(e.label=L3(t)),e.id||(e.id=t),e},CC=e=>{if(so(e))return hs(e,Fc);if(qo(e))return e.reduce((t,n)=>{const o=Fc(n);return t[o.field]=o,t},{});if(Jo(e))return Object.entries(e).reduce((t,[n,o])=>{const a=Fc({...o,field:n});return t[a.field]=a,t},{});N3("Invalid columns definition")},SC=e=>Object.keys(e).filter(t=>!e[t].hidden),wC=({value:e,search:t})=>je(e)?e.toString()===t.toString():!1,va=({value:e,search:t})=>{const n=t.toLowerCase().split(/\s+/);if(je(e)){const o=e.toString().toLowerCase();return n.every(a=>o.indexOf(a)>-1)}else return!1},_C=({value:e,search:t})=>je(e)?parseInt(e)===parseInt(t):!1,kC=({value:e,search:t})=>je(e)?parseFloat(e)===parseFloat(t):!1,TC=({value:e=!1,search:t})=>{const n=parseInt(t)!==0;return e===n},Kh={string:va,text:va,number:va,price:va,pounds:va,select:wC,boolean:TC,integer:_C,float:kC},EC=(e,t,n)=>{const o=Object.keys(n);return o.length===0?e:e.filter(a=>o.every(s=>{const l=n[s],i=t[s],c=i.field||s,d=a[c],u=i.filterType||i.type,p=i.filter||Kh[u]||Kh.text;return je(l)&&l.length?p({row:a,field:c,value:d,search:l}):!0}))},NC=(e,t=1,n=e.length)=>{const o=e.length,a=Math.ceil(o/n);t=Math.min(t,a);const s=t-1,l=n*s,i=Math.min(l+n-1,o-1),c=e.slice(l,i+1);return{pageSize:n,pages:a,page:s,pageNo:t,total:o,firstIndex:l,lastIndex:i,firstPage:1,lastPage:a,thisSize:c.length,from:l+1,to:i+1,all:l===i,one:o===1,none:o===0,rows:c}},Yh={string:Bh,text:Bh,number:Bc,price:Bc,currency:Bc,integer:$h,id:$h},RC=(e,t,n,o)=>{if(!n)return e;const a=t[n],s=a.sort,l=a.type||"text",i=Hi(s)?s:(Yh[l]||Yh.text)(n);return e.sort(o?Ij(i):i)},LC=({render:e,rows:t=[],...n})=>{const o=v.useMemo(()=>CC(n.columns),[n.columns]),[a,s]=v.useState(n.pageNo??1),[l,i]=v.useState(n.pageSize??10),[c,d]=v.useState(!1),[u,p]=v.useState({}),[m,y]=v.useState(n.sortColumn),[C,b]=v.useState(n.sortReverse??!1),[_,g]=v.useState(Object.keys(o)),[f,h]=v.useState(SC(o)),[j,S]=v.useState(!1),x=()=>S(!0),w=()=>S(!1),T=Q=>{m===Q?b(re=>!re):(y(Q),b(!1))},E=Q=>{Q.preventDefault(),Q.stopPropagation(),d(re=>!re)},D=(Q,re)=>{p(ae=>{const V={...ae};return je(re)&&re.length?V[Q]=re:delete V[Q],V}),s(1)},M=Q=>h(re=>{const ae=hs(re);return console.log("visible: ",re),console.log("isVisible: ",ae),ae[Q]?re.filter(V=>V!==Q):Object.keys(o).filter(V=>V===Q||ae[V])}),K=Q=>{let re=[],ae=[];const V=hs(f);Q.forEach(O=>{re.push(O),V[O]&&ae.push(O)}),h(ae),g(re)},X=v.useMemo(()=>NC(RC(EC(t,o,u),o,m,C),a,l),[t,o,u,m,C,a,l]);return e({...n,rows:t,columns:o,page:X,pageNo:a,setPageNo:s,pageSize:l,setPageSize:i,showFilters:c,toggleFilters:E,filters:u,setFilter:D,sortColumn:m,setSortColumn:y,sortReverse:C,setSortReverse:b,toggleSortColumn:T,visibleColumns:f,setVisibleColumns:h,toggleVisibleColumn:M,columnOrder:_,setColumnOrder:g,changeColumnOrder:K,controlsVisible:j,showControls:x,hideControls:w})},ft=Tr(LC),DC=({page:e,summaryClass:t="small flex middle gap-2",setPageNo:n})=>r.jsxs("div",{className:t,children:[r.jsx(A,{icon:"arrow-left",size:"smaller",disabled:e.pageNo<=e.firstPage,outline:!0,onClick:()=>n(e.pageNo-1)}),r.jsx(A,{icon:"arrow-right",size:"smaller",disabled:e.pageNo>=e.lastPage,outline:!0,onClick:()=>n(e.pageNo+1)}),r.jsxs("div",{style:{textWrap:"balance"},children:["Page ",e.pageNo,"/",e.lastPage," ",e.none?"no rows":e.one?"one row":e.all?`all ${Ra(e.total)} rows`:`rows ${Ra(e.from)}-${Ra(e.to)} of ${Ra(e.total)}`," "]})]}),OC=ft.Consumer(DC);var Dn;let X3=(Dn=class extends Wa{componentDidMount(){this.mounted=!0,this.props.onLoad(this)}componentWillUnmount(){this.mounted=!1,this.props.onUnload(this)}onMouseEnter(){this.debug("onMouseEnter()"),this.setState({hasHover:!0},this.props.openOnHover?()=>{this.open(),this.focusTrigger()}:null)}onMouseLeave(){this.debug("onMouseLeave()"),this.setState({hasHover:!1},this.props.openOnHover?()=>this.closeSoon():null)}onFocus(){this.debug("onFocus()"),this.setState({hasFocus:!0},this.props.onFocus)}onBlur(){this.debug("onBlur()"),this.setState({hasFocus:!1},this.props.onBlur),this.props.closeOnBlur&&this.closeSoon()}onClick(){this.debug("onClick()"),this.state.isOpen?this.close():this.open()}open(){this.debug("open()"),this.setState({isOpen:!0},this.props.onOpen)}close(){this.debug("close()"),this.setState(this.closeState(),this.props.onClose)}closeState(){return this.constructor.inactiveState}closeSoon(t=!1){this.debug(`closeSoon()  force:${t}`),Vi(this.props.closeDelay).then(()=>{this.closeable(t)?this.close():console.log(`NOT closing force:${t} hasHover:${this.state.hasHover}`)})}closeable(t){return t||!this.state.hasHover}onKeyDown(t){switch(this.debug(`onKeyDown(${t.key})`),t.key){case Yi:case zp:this.state.isOpen?this.close():this.open();break;case Gi:this.close();break;default:console.log(`ignored key ${t.key}`);return}t.preventDefault()}triggerRef(t){this._triggerRef=t}focusTrigger(){this._triggerRef?(this.debug("focussing trigger"),this._triggerRef.focus()):this.debug("no trigger to focus")}},xe(Dn,"debug",!1),xe(Dn,"defaultProps",{options:[],openOnHover:!1,closeOnBlur:!0,closeDelay:300,onLoad:$e,onUnload:$e,onFocus:$e,onBlur:$e,onClick:$e,onOpen:$e,onClose:$e}),xe(Dn,"inactiveState",{isOpen:!1}),xe(Dn,"initialState",{...Dn.inactiveState}),Dn);const zr=class zr extends X3{open(t=this.initialCursor()??this.cursorFirstIndex()){this.debug(`open(${t})`),this.setState({isOpen:!0,cursor:t},this.props.onOpen)}onKeyDown(t){switch(this.debug(`onKeyDown(${t.key})`),this.debug("alt: ",t.altKey),this.debug("ctrl: ",t.ctrlKey),this.debug("meta: ",t.metaKey),t.key){case Bp:this.state.isOpen?this.setCursor(this.cursorNextIndex()):this.open(this.initialCursor()??this.cursorFirstIndex());break;case Ip:this.state.isOpen?this.setCursor(this.cursorPrevIndex()):this.open(this.initialCursor()??this.cursorLastIndex());break;case Yi:case zp:this.state.isOpen?this.selectCursor():this.open(this.initialCursor()??this.cursorFirstIndex());break;case Gi:this.close();break;default:console.log(`ignored key ${t.key}`);return}t.preventDefault()}menuOptions(){return this.props.options}initialCursor(){return null}cursorFirstIndex(){return Jb(this.menuOptions(),this.props.validOption)}cursorLastIndex(){return eC(this.menuOptions(),this.props.validOption)}cursorNextIndex(){return tC(this.menuOptions(),this.state.cursor,this.props.validOption)}cursorPrevIndex(){return nC(this.menuOptions(),this.state.cursor,this.props.validOption)}setCursor(t){this.debug(`setCursor(${t})`),this.setState({cursor:t})}selectCursor(){this.debug("selectCursor()");const{cursor:t}=this.state,n=this.menuOptions();if(n&&n.length&&je(t)){const o=n[t];this.debug(`selectCursor() ${t} =>`,o),this.selectOption(o)}else this.debug("Not selecting: cursor out of range")}selectOption(t){this.debug("selectOption()",t),this.setState(this.selectState(t),()=>this.props.onSelect(t)),this.props.closeOnSelect?(this.debug("closeOnSelect is set, closing"),this.closeSoon(!0)):this.debug("closeOnSelect is not set, NOT closing")}selectState(t){return{selected:t}}menuRef(t){this._menuRef=t}activeRef(t){G3(this._menuRef,t)}};xe(zr,"debug",!0),xe(zr,"defaultProps",{options:[],openOnHover:!1,closeOnBlur:!0,closeDelay:300,onLoad:$e,onUnload:$e,onFocus:$e,onBlur:$e,onClick:$e,onOpen:$e,onClose:$e,onSelect:$e,closeOnSelect:!0}),xe(zr,"inactiveState",{isOpen:!1,cursor:void 0,selected:void 0}),xe(zr,"initialState",{...zr.inactiveState});let xi=zr;var vn;let AC=(vn=class extends xi{},xe(vn,"debug",!1),xe(vn,"debugPrefix","Dropdown > "),xe(vn,"debugColor","MediumVioletRed"),xe(vn,"defaultProps",{...vn.defaultProps,options:[],displayOption:aC}),xe(vn,"actions",["onMouseEnter","onMouseLeave","onFocus","onBlur","onClick","onKeyDown","open","close","setCursor","selectCursor","selectOption","triggerRef","menuRef","activeRef"]),vn);const Os=Tr(AC),MC=({triggerClass:e="trigger",triggerRef:t,safeAreaClass:n="safe-area",onMouseEnter:o,onMouseLeave:a,onKeyDown:s,onFocus:l,onBlur:i,onClick:c,...d})=>r.jsxs("div",{className:e,onClick:c,onMouseEnter:o,onMouseLeave:a,onKeyDown:s,onFocus:l,onBlur:i,tabIndex:0,ref:t,children:[r.jsx(Ls,{...Rp(d,/^(icon|text)/)}),r.jsx("div",{className:n})]}),PC=Os.Consumer(MC),$C=({option:e,active:t,activeRef:n,selected:o,onClick:a,onMouseEnter:s,optionClass:l="item no-hover",activeClass:i="active",selectedClass:c="selected",disabledClass:d="disabled",displayOption:u})=>r.jsx("div",{className:Se(l,e.className,t?i:null,o?c:null,e.disabled?d:null),onMouseEnter:s,onClick:a,ref:t?n:null,"aria-disabled":e.disabled,children:u(e)}),BC=Os.Consumer($C),IC=({option:e,separatorClass:t="separator"})=>r.jsx("div",{className:Se(t,e.className)}),zC=({option:e,optionClass:t="item no-hover",headingClass:n="heading"})=>r.jsx("h4",{className:Se(n,t,e.className),children:e.heading}),FC=({options:e=[],menuRef:t,menuClass:n="menu border bdr-1",cursor:o,selected:a,selectOption:s,setCursor:l,onMouseEnter:i,onMouseLeave:c,Option:d=BC,Separator:u=IC,Heading:p=zC})=>r.jsx("div",{className:n,ref:t,onMouseEnter:i,onMouseLeave:c,children:e.map((m,y)=>m.separator?r.jsx(u,{option:m},y):m.heading?r.jsx(p,{option:m},y):r.jsx(d,{option:m,active:je(o)&&e[o]===m,selected:a===m,onClick:()=>s(m),onMouseEnter:()=>l(y)},m.id??m.value??y))}),HC=Os.Consumer(FC),UC=({className:e="dropdown",openClass:t="open",closedClass:n="closed",isOpen:o,right:a,size:s,wide:l,Trigger:i=PC,Options:c=HC})=>r.jsxs("div",{className:Se(e,s,o?t:n,{right:a,wide:l}),children:[r.jsx(i,{}),o&&r.jsx(c,{})]}),VC=Os.Consumer(UC),WC=({Content:e=VC,...t})=>r.jsx(Os.Provider,{...t,children:r.jsx(e,{})}),Er=ve(WC,"DropdownMenu"),ZC=({setPageSize:e,pageSizes:t=[10,25,50,100,250,500,1e3]})=>r.jsx("div",{className:"pagesize",children:r.jsx(Er,{right:!0,iconRight:"page",text:"Page Size",size:"small",options:t.map(n=>({n,text:`${n} per page`})),onSelect:n=>e(n.n)})}),KC=ft.Consumer(ZC);class Ma extends X3{}xe(Ma,"debug",!1),xe(Ma,"debugPrefix","Dropdown > "),xe(Ma,"debugColor","MediumVioletRed"),xe(Ma,"actions",["onMouseEnter","onMouseLeave","onFocus","onBlur","onClick","onKeyDown","open","close","triggerRef"]);const As=Tr(Ma),YC=({triggerClass:e="trigger",triggerRef:t,safeAreaClass:n="safe-area",onMouseEnter:o,onMouseLeave:a,onKeyDown:s,onFocus:l,onBlur:i,onClick:c,...d})=>r.jsxs("div",{className:e,onClick:c,onMouseEnter:o,onMouseLeave:a,onKeyDown:s,onFocus:l,onBlur:i,tabIndex:0,ref:t,children:[r.jsx(Ls,{...Rp(d,/^(icon|text)/)}),r.jsx("div",{className:n})]}),GC=As.Consumer(YC),XC=({bodyClass:e="body border bdr-1",onMouseEnter:t,onMouseLeave:n,content:o})=>r.jsx("div",{className:e,onMouseEnter:t,onMouseLeave:n,children:o||"No content defined"}),QC=As.Consumer(XC),qC=({className:e="dropdown",openClass:t="open",closedClass:n="closed",isOpen:o,right:a,size:s,wide:l,Trigger:i=GC,Body:c=QC})=>r.jsxs("div",{className:Se(e,s,o?t:n,{right:a,wide:l}),children:[r.jsx(i,{}),o&&r.jsx(c,{})]}),JC=As.Consumer(qC),eS=({Content:e=JC,content:t,children:n,...o})=>r.jsx(As.Provider,{content:t||n,...o,children:r.jsx(e,{})}),pn=ve(eS,"Dropdown"),tS=({item:e,setNodeRef:t,style:n,listeners:o,toggleVisibleColumn:a,isVisible:s,...l})=>r.jsxs("div",{ref:t,style:n,className:`sortable item flex middle border mar-b-2 ${e.moved?"moved":""}`,...l,children:[r.jsx(_n,{className:"fluid flex middle",checked:s[e.id]||!1,onChange:()=>a(e.id),text:e.label},e.id),r.jsx("div",{...o,className:"pad-h-2",children:r.jsx(ee,{name:"drag",className:"drag-handle"})})]}),nS=({close:e})=>r.jsx(A,{className:"wide",size:"smaller",color:"green",text:"OK",onClick:e}),rS=As.Consumer(nS);function oS(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return v.useMemo(()=>o=>{t.forEach(a=>a(o))},t)}const Xi=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function ea(e){const t=Object.prototype.toString.call(e);return t==="[object Window]"||t==="[object global]"}function Fp(e){return"nodeType"in e}function jt(e){var t,n;return e?ea(e)?e:Fp(e)&&(t=(n=e.ownerDocument)==null?void 0:n.defaultView)!=null?t:window:window}function Hp(e){const{Document:t}=jt(e);return e instanceof t}function Ms(e){return ea(e)?!1:e instanceof jt(e).HTMLElement}function Q3(e){return e instanceof jt(e).SVGElement}function ta(e){return e?ea(e)?e.document:Fp(e)?Hp(e)?e:Ms(e)||Q3(e)?e.ownerDocument:document:document:document}const Gt=Xi?v.useLayoutEffect:v.useEffect;function Qi(e){const t=v.useRef(e);return Gt(()=>{t.current=e}),v.useCallback(function(){for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return t.current==null?void 0:t.current(...o)},[])}function aS(){const e=v.useRef(null),t=v.useCallback((o,a)=>{e.current=setInterval(o,a)},[]),n=v.useCallback(()=>{e.current!==null&&(clearInterval(e.current),e.current=null)},[]);return[t,n]}function ms(e,t){t===void 0&&(t=[e]);const n=v.useRef(e);return Gt(()=>{n.current!==e&&(n.current=e)},t),n}function Ps(e,t){const n=v.useRef();return v.useMemo(()=>{const o=e(n.current);return n.current=o,o},[...t])}function gi(e){const t=Qi(e),n=v.useRef(null),o=v.useCallback(a=>{a!==n.current&&(t==null||t(a,n.current)),n.current=a},[]);return[n,o]}function vi(e){const t=v.useRef();return v.useEffect(()=>{t.current=e},[e]),t.current}let Hc={};function $s(e,t){return v.useMemo(()=>{if(t)return t;const n=Hc[e]==null?0:Hc[e]+1;return Hc[e]=n,e+"-"+n},[e,t])}function q3(e){return function(t){for(var n=arguments.length,o=new Array(n>1?n-1:0),a=1;a<n;a++)o[a-1]=arguments[a];return o.reduce((s,l)=>{const i=Object.entries(l);for(const[c,d]of i){const u=s[c];u!=null&&(s[c]=u+e*d)}return s},{...t})}}const Io=q3(1),xs=q3(-1);function sS(e){return"clientX"in e&&"clientY"in e}function qi(e){if(!e)return!1;const{KeyboardEvent:t}=jt(e.target);return t&&e instanceof t}function lS(e){if(!e)return!1;const{TouchEvent:t}=jt(e.target);return t&&e instanceof t}function yi(e){if(lS(e)){if(e.touches&&e.touches.length){const{clientX:t,clientY:n}=e.touches[0];return{x:t,y:n}}else if(e.changedTouches&&e.changedTouches.length){const{clientX:t,clientY:n}=e.changedTouches[0];return{x:t,y:n}}}return sS(e)?{x:e.clientX,y:e.clientY}:null}const jr=Object.freeze({Translate:{toString(e){if(!e)return;const{x:t,y:n}=e;return"translate3d("+(t?Math.round(t):0)+"px, "+(n?Math.round(n):0)+"px, 0)"}},Scale:{toString(e){if(!e)return;const{scaleX:t,scaleY:n}=e;return"scaleX("+t+") scaleY("+n+")"}},Transform:{toString(e){if(e)return[jr.Translate.toString(e),jr.Scale.toString(e)].join(" ")}},Transition:{toString(e){let{property:t,duration:n,easing:o}=e;return t+" "+n+"ms "+o}}}),Gh="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function iS(e){return e.matches(Gh)?e:e.querySelector(Gh)}const cS={display:"none"};function dS(e){let{id:t,value:n}=e;return te.createElement("div",{id:t,style:cS},n)}function uS(e){let{id:t,announcement:n,ariaLiveType:o="assertive"}=e;const a={position:"fixed",width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"};return te.createElement("div",{id:t,style:a,role:"status","aria-live":o,"aria-atomic":!0},n)}function pS(){const[e,t]=v.useState("");return{announce:v.useCallback(o=>{o!=null&&t(o)},[]),announcement:e}}const J3=v.createContext(null);function fS(e){const t=v.useContext(J3);v.useEffect(()=>{if(!t)throw new Error("useDndMonitor must be used within a children of <DndContext>");return t(e)},[e,t])}function hS(){const[e]=v.useState(()=>new Set),t=v.useCallback(o=>(e.add(o),()=>e.delete(o)),[e]);return[v.useCallback(o=>{let{type:a,event:s}=o;e.forEach(l=>{var i;return(i=l[a])==null?void 0:i.call(l,s)})},[e]),t]}const mS={draggable:`
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `},xS={onDragStart(e){let{active:t}=e;return"Picked up draggable item "+t.id+"."},onDragOver(e){let{active:t,over:n}=e;return n?"Draggable item "+t.id+" was moved over droppable area "+n.id+".":"Draggable item "+t.id+" is no longer over a droppable area."},onDragEnd(e){let{active:t,over:n}=e;return n?"Draggable item "+t.id+" was dropped over droppable area "+n.id:"Draggable item "+t.id+" was dropped."},onDragCancel(e){let{active:t}=e;return"Dragging was cancelled. Draggable item "+t.id+" was dropped."}};function gS(e){let{announcements:t=xS,container:n,hiddenTextDescribedById:o,screenReaderInstructions:a=mS}=e;const{announce:s,announcement:l}=pS(),i=$s("DndLiveRegion"),[c,d]=v.useState(!1);if(v.useEffect(()=>{d(!0)},[]),fS(v.useMemo(()=>({onDragStart(p){let{active:m}=p;s(t.onDragStart({active:m}))},onDragMove(p){let{active:m,over:y}=p;t.onDragMove&&s(t.onDragMove({active:m,over:y}))},onDragOver(p){let{active:m,over:y}=p;s(t.onDragOver({active:m,over:y}))},onDragEnd(p){let{active:m,over:y}=p;s(t.onDragEnd({active:m,over:y}))},onDragCancel(p){let{active:m,over:y}=p;s(t.onDragCancel({active:m,over:y}))}}),[s,t])),!c)return null;const u=te.createElement(te.Fragment,null,te.createElement(dS,{id:o,value:a.draggable}),te.createElement(uS,{id:i,announcement:l}));return n?On.createPortal(u,n):u}var Ge;(function(e){e.DragStart="dragStart",e.DragMove="dragMove",e.DragEnd="dragEnd",e.DragCancel="dragCancel",e.DragOver="dragOver",e.RegisterDroppable="registerDroppable",e.SetDroppableDisabled="setDroppableDisabled",e.UnregisterDroppable="unregisterDroppable"})(Ge||(Ge={}));function ji(){}function Xh(e,t){return v.useMemo(()=>({sensor:e,options:t??{}}),[e,t])}function vS(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return v.useMemo(()=>[...t].filter(o=>o!=null),[...t])}const un=Object.freeze({x:0,y:0});function ex(e,t){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function yS(e,t){const n=yi(e);if(!n)return"0 0";const o={x:(n.x-t.left)/t.width*100,y:(n.y-t.top)/t.height*100};return o.x+"% "+o.y+"%"}function tx(e,t){let{data:{value:n}}=e,{data:{value:o}}=t;return n-o}function jS(e,t){let{data:{value:n}}=e,{data:{value:o}}=t;return o-n}function Qh(e){let{left:t,top:n,height:o,width:a}=e;return[{x:t,y:n},{x:t+a,y:n},{x:t,y:n+o},{x:t+a,y:n+o}]}function nx(e,t){if(!e||e.length===0)return null;const[n]=e;return t?n[t]:n}function qh(e,t,n){return t===void 0&&(t=e.left),n===void 0&&(n=e.top),{x:t+e.width*.5,y:n+e.height*.5}}const bS=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:o}=e;const a=qh(t,t.left,t.top),s=[];for(const l of o){const{id:i}=l,c=n.get(i);if(c){const d=ex(qh(c),a);s.push({id:i,data:{droppableContainer:l,value:d}})}}return s.sort(tx)},CS=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:o}=e;const a=Qh(t),s=[];for(const l of o){const{id:i}=l,c=n.get(i);if(c){const d=Qh(c),u=a.reduce((m,y,C)=>m+ex(d[C],y),0),p=Number((u/4).toFixed(4));s.push({id:i,data:{droppableContainer:l,value:p}})}}return s.sort(tx)};function SS(e,t){const n=Math.max(t.top,e.top),o=Math.max(t.left,e.left),a=Math.min(t.left+t.width,e.left+e.width),s=Math.min(t.top+t.height,e.top+e.height),l=a-o,i=s-n;if(o<a&&n<s){const c=t.width*t.height,d=e.width*e.height,u=l*i,p=u/(c+d-u);return Number(p.toFixed(4))}return 0}const wS=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:o}=e;const a=[];for(const s of o){const{id:l}=s,i=n.get(l);if(i){const c=SS(i,t);c>0&&a.push({id:l,data:{droppableContainer:s,value:c}})}}return a.sort(jS)};function _S(e,t,n){return{...e,scaleX:t&&n?t.width/n.width:1,scaleY:t&&n?t.height/n.height:1}}function rx(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:un}function kS(e){return function(n){for(var o=arguments.length,a=new Array(o>1?o-1:0),s=1;s<o;s++)a[s-1]=arguments[s];return a.reduce((l,i)=>({...l,top:l.top+e*i.y,bottom:l.bottom+e*i.y,left:l.left+e*i.x,right:l.right+e*i.x}),{...n})}}const TS=kS(1);function ox(e){if(e.startsWith("matrix3d(")){const t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}else if(e.startsWith("matrix(")){const t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}function ES(e,t,n){const o=ox(t);if(!o)return e;const{scaleX:a,scaleY:s,x:l,y:i}=o,c=e.left-l-(1-a)*parseFloat(n),d=e.top-i-(1-s)*parseFloat(n.slice(n.indexOf(" ")+1)),u=a?e.width/a:e.width,p=s?e.height/s:e.height;return{width:u,height:p,top:d,right:c+u,bottom:d+p,left:c}}const NS={ignoreTransform:!1};function na(e,t){t===void 0&&(t=NS);let n=e.getBoundingClientRect();if(t.ignoreTransform){const{transform:d,transformOrigin:u}=jt(e).getComputedStyle(e);d&&(n=ES(n,d,u))}const{top:o,left:a,width:s,height:l,bottom:i,right:c}=n;return{top:o,left:a,width:s,height:l,bottom:i,right:c}}function Jh(e){return na(e,{ignoreTransform:!0})}function RS(e){const t=e.innerWidth,n=e.innerHeight;return{top:0,left:0,right:t,bottom:n,width:t,height:n}}function LS(e,t){return t===void 0&&(t=jt(e).getComputedStyle(e)),t.position==="fixed"}function DS(e,t){t===void 0&&(t=jt(e).getComputedStyle(e));const n=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some(a=>{const s=t[a];return typeof s=="string"?n.test(s):!1})}function Ji(e,t){const n=[];function o(a){if(t!=null&&n.length>=t||!a)return n;if(Hp(a)&&a.scrollingElement!=null&&!n.includes(a.scrollingElement))return n.push(a.scrollingElement),n;if(!Ms(a)||Q3(a)||n.includes(a))return n;const s=jt(e).getComputedStyle(a);return a!==e&&DS(a,s)&&n.push(a),LS(a,s)?n:o(a.parentNode)}return e?o(e):n}function ax(e){const[t]=Ji(e,1);return t??null}function Uc(e){return!Xi||!e?null:ea(e)?e:Fp(e)?Hp(e)||e===ta(e).scrollingElement?window:Ms(e)?e:null:null}function sx(e){return ea(e)?e.scrollX:e.scrollLeft}function lx(e){return ea(e)?e.scrollY:e.scrollTop}function tu(e){return{x:sx(e),y:lx(e)}}var tt;(function(e){e[e.Forward=1]="Forward",e[e.Backward=-1]="Backward"})(tt||(tt={}));function ix(e){return!Xi||!e?!1:e===document.scrollingElement}function cx(e){const t={x:0,y:0},n=ix(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth},o={x:e.scrollWidth-n.width,y:e.scrollHeight-n.height},a=e.scrollTop<=t.y,s=e.scrollLeft<=t.x,l=e.scrollTop>=o.y,i=e.scrollLeft>=o.x;return{isTop:a,isLeft:s,isBottom:l,isRight:i,maxScroll:o,minScroll:t}}const OS={x:.2,y:.2};function AS(e,t,n,o,a){let{top:s,left:l,right:i,bottom:c}=n;o===void 0&&(o=10),a===void 0&&(a=OS);const{isTop:d,isBottom:u,isLeft:p,isRight:m}=cx(e),y={x:0,y:0},C={x:0,y:0},b={height:t.height*a.y,width:t.width*a.x};return!d&&s<=t.top+b.height?(y.y=tt.Backward,C.y=o*Math.abs((t.top+b.height-s)/b.height)):!u&&c>=t.bottom-b.height&&(y.y=tt.Forward,C.y=o*Math.abs((t.bottom-b.height-c)/b.height)),!m&&i>=t.right-b.width?(y.x=tt.Forward,C.x=o*Math.abs((t.right-b.width-i)/b.width)):!p&&l<=t.left+b.width&&(y.x=tt.Backward,C.x=o*Math.abs((t.left+b.width-l)/b.width)),{direction:y,speed:C}}function MS(e){if(e===document.scrollingElement){const{innerWidth:s,innerHeight:l}=window;return{top:0,left:0,right:s,bottom:l,width:s,height:l}}const{top:t,left:n,right:o,bottom:a}=e.getBoundingClientRect();return{top:t,left:n,right:o,bottom:a,width:e.clientWidth,height:e.clientHeight}}function dx(e){return e.reduce((t,n)=>Io(t,tu(n)),un)}function PS(e){return e.reduce((t,n)=>t+sx(n),0)}function $S(e){return e.reduce((t,n)=>t+lx(n),0)}function ux(e,t){if(t===void 0&&(t=na),!e)return;const{top:n,left:o,bottom:a,right:s}=t(e);ax(e)&&(a<=0||s<=0||n>=window.innerHeight||o>=window.innerWidth)&&e.scrollIntoView({block:"center",inline:"center"})}const BS=[["x",["left","right"],PS],["y",["top","bottom"],$S]];class Up{constructor(t,n){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;const o=Ji(n),a=dx(o);this.rect={...t},this.width=t.width,this.height=t.height;for(const[s,l,i]of BS)for(const c of l)Object.defineProperty(this,c,{get:()=>{const d=i(o),u=a[s]-d;return this.rect[c]+u},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}}class Za{constructor(t){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach(n=>{var o;return(o=this.target)==null?void 0:o.removeEventListener(...n)})},this.target=t}add(t,n,o){var a;(a=this.target)==null||a.addEventListener(t,n,o),this.listeners.push([t,n,o])}}function IS(e){const{EventTarget:t}=jt(e);return e instanceof t?e:ta(e)}function Vc(e,t){const n=Math.abs(e.x),o=Math.abs(e.y);return typeof t=="number"?Math.sqrt(n**2+o**2)>t:"x"in t&&"y"in t?n>t.x&&o>t.y:"x"in t?n>t.x:"y"in t?o>t.y:!1}var Ft;(function(e){e.Click="click",e.DragStart="dragstart",e.Keydown="keydown",e.ContextMenu="contextmenu",e.Resize="resize",e.SelectionChange="selectionchange",e.VisibilityChange="visibilitychange"})(Ft||(Ft={}));function e1(e){e.preventDefault()}function zS(e){e.stopPropagation()}var me;(function(e){e.Space="Space",e.Down="ArrowDown",e.Right="ArrowRight",e.Left="ArrowLeft",e.Up="ArrowUp",e.Esc="Escape",e.Enter="Enter"})(me||(me={}));const px={start:[me.Space,me.Enter],cancel:[me.Esc],end:[me.Space,me.Enter]},FS=(e,t)=>{let{currentCoordinates:n}=t;switch(e.code){case me.Right:return{...n,x:n.x+25};case me.Left:return{...n,x:n.x-25};case me.Down:return{...n,y:n.y+25};case me.Up:return{...n,y:n.y-25}}};class Vp{constructor(t){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=t;const{event:{target:n}}=t;this.props=t,this.listeners=new Za(ta(n)),this.windowListeners=new Za(jt(n)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(Ft.Resize,this.handleCancel),this.windowListeners.add(Ft.VisibilityChange,this.handleCancel),setTimeout(()=>this.listeners.add(Ft.Keydown,this.handleKeyDown))}handleStart(){const{activeNode:t,onStart:n}=this.props,o=t.node.current;o&&ux(o),n(un)}handleKeyDown(t){if(qi(t)){const{active:n,context:o,options:a}=this.props,{keyboardCodes:s=px,coordinateGetter:l=FS,scrollBehavior:i="smooth"}=a,{code:c}=t;if(s.end.includes(c)){this.handleEnd(t);return}if(s.cancel.includes(c)){this.handleCancel(t);return}const{collisionRect:d}=o.current,u=d?{x:d.left,y:d.top}:un;this.referenceCoordinates||(this.referenceCoordinates=u);const p=l(t,{active:n,context:o.current,currentCoordinates:u});if(p){const m=xs(p,u),y={x:0,y:0},{scrollableAncestors:C}=o.current;for(const b of C){const _=t.code,{isTop:g,isRight:f,isLeft:h,isBottom:j,maxScroll:S,minScroll:x}=cx(b),w=MS(b),T={x:Math.min(_===me.Right?w.right-w.width/2:w.right,Math.max(_===me.Right?w.left:w.left+w.width/2,p.x)),y:Math.min(_===me.Down?w.bottom-w.height/2:w.bottom,Math.max(_===me.Down?w.top:w.top+w.height/2,p.y))},E=_===me.Right&&!f||_===me.Left&&!h,D=_===me.Down&&!j||_===me.Up&&!g;if(E&&T.x!==p.x){const M=b.scrollLeft+m.x,K=_===me.Right&&M<=S.x||_===me.Left&&M>=x.x;if(K&&!m.y){b.scrollTo({left:M,behavior:i});return}K?y.x=b.scrollLeft-M:y.x=_===me.Right?b.scrollLeft-S.x:b.scrollLeft-x.x,y.x&&b.scrollBy({left:-y.x,behavior:i});break}else if(D&&T.y!==p.y){const M=b.scrollTop+m.y,K=_===me.Down&&M<=S.y||_===me.Up&&M>=x.y;if(K&&!m.x){b.scrollTo({top:M,behavior:i});return}K?y.y=b.scrollTop-M:y.y=_===me.Down?b.scrollTop-S.y:b.scrollTop-x.y,y.y&&b.scrollBy({top:-y.y,behavior:i});break}}this.handleMove(t,Io(xs(p,this.referenceCoordinates),y))}}}handleMove(t,n){const{onMove:o}=this.props;t.preventDefault(),o(n)}handleEnd(t){const{onEnd:n}=this.props;t.preventDefault(),this.detach(),n()}handleCancel(t){const{onCancel:n}=this.props;t.preventDefault(),this.detach(),n()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}}Vp.activators=[{eventName:"onKeyDown",handler:(e,t,n)=>{let{keyboardCodes:o=px,onActivation:a}=t,{active:s}=n;const{code:l}=e.nativeEvent;if(o.start.includes(l)){const i=s.activatorNode.current;return i&&e.target!==i?!1:(e.preventDefault(),a==null||a({event:e.nativeEvent}),!0)}return!1}}];function t1(e){return!!(e&&"distance"in e)}function n1(e){return!!(e&&"delay"in e)}class Wp{constructor(t,n,o){var a;o===void 0&&(o=IS(t.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=t,this.events=n;const{event:s}=t,{target:l}=s;this.props=t,this.events=n,this.document=ta(l),this.documentListeners=new Za(this.document),this.listeners=new Za(o),this.windowListeners=new Za(jt(l)),this.initialCoordinates=(a=yi(s))!=null?a:un,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){const{events:t,props:{options:{activationConstraint:n,bypassActivationConstraint:o}}}=this;if(this.listeners.add(t.move.name,this.handleMove,{passive:!1}),this.listeners.add(t.end.name,this.handleEnd),this.windowListeners.add(Ft.Resize,this.handleCancel),this.windowListeners.add(Ft.DragStart,e1),this.windowListeners.add(Ft.VisibilityChange,this.handleCancel),this.windowListeners.add(Ft.ContextMenu,e1),this.documentListeners.add(Ft.Keydown,this.handleKeydown),n){if(o!=null&&o({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(n1(n)){this.timeoutId=setTimeout(this.handleStart,n.delay);return}if(t1(n))return}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),this.timeoutId!==null&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handleStart(){const{initialCoordinates:t}=this,{onStart:n}=this.props;t&&(this.activated=!0,this.documentListeners.add(Ft.Click,zS,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(Ft.SelectionChange,this.removeTextSelection),n(t))}handleMove(t){var n;const{activated:o,initialCoordinates:a,props:s}=this,{onMove:l,options:{activationConstraint:i}}=s;if(!a)return;const c=(n=yi(t))!=null?n:un,d=xs(a,c);if(!o&&i){if(t1(i)){if(i.tolerance!=null&&Vc(d,i.tolerance))return this.handleCancel();if(Vc(d,i.distance))return this.handleStart()}return n1(i)&&Vc(d,i.tolerance)?this.handleCancel():void 0}t.cancelable&&t.preventDefault(),l(c)}handleEnd(){const{onEnd:t}=this.props;this.detach(),t()}handleCancel(){const{onCancel:t}=this.props;this.detach(),t()}handleKeydown(t){t.code===me.Esc&&this.handleCancel()}removeTextSelection(){var t;(t=this.document.getSelection())==null||t.removeAllRanges()}}const HS={move:{name:"pointermove"},end:{name:"pointerup"}};class Zp extends Wp{constructor(t){const{event:n}=t,o=ta(n.target);super(t,HS,o)}}Zp.activators=[{eventName:"onPointerDown",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:o}=t;return!n.isPrimary||n.button!==0?!1:(o==null||o({event:n}),!0)}}];const US={move:{name:"mousemove"},end:{name:"mouseup"}};var nu;(function(e){e[e.RightClick=2]="RightClick"})(nu||(nu={}));class VS extends Wp{constructor(t){super(t,US,ta(t.event.target))}}VS.activators=[{eventName:"onMouseDown",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:o}=t;return n.button===nu.RightClick?!1:(o==null||o({event:n}),!0)}}];const Wc={move:{name:"touchmove"},end:{name:"touchend"}};class WS extends Wp{constructor(t){super(t,Wc)}static setup(){return window.addEventListener(Wc.move.name,t,{capture:!1,passive:!1}),function(){window.removeEventListener(Wc.move.name,t)};function t(){}}}WS.activators=[{eventName:"onTouchStart",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:o}=t;const{touches:a}=n;return a.length>1?!1:(o==null||o({event:n}),!0)}}];var Ka;(function(e){e[e.Pointer=0]="Pointer",e[e.DraggableRect=1]="DraggableRect"})(Ka||(Ka={}));var bi;(function(e){e[e.TreeOrder=0]="TreeOrder",e[e.ReversedTreeOrder=1]="ReversedTreeOrder"})(bi||(bi={}));function ZS(e){let{acceleration:t,activator:n=Ka.Pointer,canScroll:o,draggingRect:a,enabled:s,interval:l=5,order:i=bi.TreeOrder,pointerCoordinates:c,scrollableAncestors:d,scrollableAncestorRects:u,delta:p,threshold:m}=e;const y=YS({delta:p,disabled:!s}),[C,b]=aS(),_=v.useRef({x:0,y:0}),g=v.useRef({x:0,y:0}),f=v.useMemo(()=>{switch(n){case Ka.Pointer:return c?{top:c.y,bottom:c.y,left:c.x,right:c.x}:null;case Ka.DraggableRect:return a}},[n,a,c]),h=v.useRef(null),j=v.useCallback(()=>{const x=h.current;if(!x)return;const w=_.current.x*g.current.x,T=_.current.y*g.current.y;x.scrollBy(w,T)},[]),S=v.useMemo(()=>i===bi.TreeOrder?[...d].reverse():d,[i,d]);v.useEffect(()=>{if(!s||!d.length||!f){b();return}for(const x of S){if((o==null?void 0:o(x))===!1)continue;const w=d.indexOf(x),T=u[w];if(!T)continue;const{direction:E,speed:D}=AS(x,T,f,t,m);for(const M of["x","y"])y[M][E[M]]||(D[M]=0,E[M]=0);if(D.x>0||D.y>0){b(),h.current=x,C(j,l),_.current=D,g.current=E;return}}_.current={x:0,y:0},g.current={x:0,y:0},b()},[t,j,o,b,s,l,JSON.stringify(f),JSON.stringify(y),C,d,S,u,JSON.stringify(m)])}const KS={x:{[tt.Backward]:!1,[tt.Forward]:!1},y:{[tt.Backward]:!1,[tt.Forward]:!1}};function YS(e){let{delta:t,disabled:n}=e;const o=vi(t);return Ps(a=>{if(n||!o||!a)return KS;const s={x:Math.sign(t.x-o.x),y:Math.sign(t.y-o.y)};return{x:{[tt.Backward]:a.x[tt.Backward]||s.x===-1,[tt.Forward]:a.x[tt.Forward]||s.x===1},y:{[tt.Backward]:a.y[tt.Backward]||s.y===-1,[tt.Forward]:a.y[tt.Forward]||s.y===1}}},[n,t,o])}function GS(e,t){const n=t!==null?e.get(t):void 0,o=n?n.node.current:null;return Ps(a=>{var s;return t===null?null:(s=o??a)!=null?s:null},[o,t])}function XS(e,t){return v.useMemo(()=>e.reduce((n,o)=>{const{sensor:a}=o,s=a.activators.map(l=>({eventName:l.eventName,handler:t(l.handler,o)}));return[...n,...s]},[]),[e,t])}var gs;(function(e){e[e.Always=0]="Always",e[e.BeforeDragging=1]="BeforeDragging",e[e.WhileDragging=2]="WhileDragging"})(gs||(gs={}));var ru;(function(e){e.Optimized="optimized"})(ru||(ru={}));const r1=new Map;function QS(e,t){let{dragging:n,dependencies:o,config:a}=t;const[s,l]=v.useState(null),{frequency:i,measure:c,strategy:d}=a,u=v.useRef(e),p=_(),m=ms(p),y=v.useCallback(function(g){g===void 0&&(g=[]),!m.current&&l(f=>f===null?g:f.concat(g.filter(h=>!f.includes(h))))},[m]),C=v.useRef(null),b=Ps(g=>{if(p&&!n)return r1;if(!g||g===r1||u.current!==e||s!=null){const f=new Map;for(let h of e){if(!h)continue;if(s&&s.length>0&&!s.includes(h.id)&&h.rect.current){f.set(h.id,h.rect.current);continue}const j=h.node.current,S=j?new Up(c(j),j):null;h.rect.current=S,S&&f.set(h.id,S)}return f}return g},[e,s,n,p,c]);return v.useEffect(()=>{u.current=e},[e]),v.useEffect(()=>{p||y()},[n,p]),v.useEffect(()=>{s&&s.length>0&&l(null)},[JSON.stringify(s)]),v.useEffect(()=>{p||typeof i!="number"||C.current!==null||(C.current=setTimeout(()=>{y(),C.current=null},i))},[i,p,y,...o]),{droppableRects:b,measureDroppableContainers:y,measuringScheduled:s!=null};function _(){switch(d){case gs.Always:return!1;case gs.BeforeDragging:return n;default:return!n}}}function Kp(e,t){return Ps(n=>e?n||(typeof t=="function"?t(e):e):null,[t,e])}function qS(e,t){return Kp(e,t)}function JS(e){let{callback:t,disabled:n}=e;const o=Qi(t),a=v.useMemo(()=>{if(n||typeof window>"u"||typeof window.MutationObserver>"u")return;const{MutationObserver:s}=window;return new s(o)},[o,n]);return v.useEffect(()=>()=>a==null?void 0:a.disconnect(),[a]),a}function ec(e){let{callback:t,disabled:n}=e;const o=Qi(t),a=v.useMemo(()=>{if(n||typeof window>"u"||typeof window.ResizeObserver>"u")return;const{ResizeObserver:s}=window;return new s(o)},[n]);return v.useEffect(()=>()=>a==null?void 0:a.disconnect(),[a]),a}function ew(e){return new Up(na(e),e)}function o1(e,t,n){t===void 0&&(t=ew);const[o,a]=v.useReducer(i,null),s=JS({callback(c){if(e)for(const d of c){const{type:u,target:p}=d;if(u==="childList"&&p instanceof HTMLElement&&p.contains(e)){a();break}}}}),l=ec({callback:a});return Gt(()=>{a(),e?(l==null||l.observe(e),s==null||s.observe(document.body,{childList:!0,subtree:!0})):(l==null||l.disconnect(),s==null||s.disconnect())},[e]),o;function i(c){if(!e)return null;if(e.isConnected===!1){var d;return(d=c??n)!=null?d:null}const u=t(e);return JSON.stringify(c)===JSON.stringify(u)?c:u}}function tw(e){const t=Kp(e);return rx(e,t)}const a1=[];function nw(e){const t=v.useRef(e),n=Ps(o=>e?o&&o!==a1&&e&&t.current&&e.parentNode===t.current.parentNode?o:Ji(e):a1,[e]);return v.useEffect(()=>{t.current=e},[e]),n}function rw(e){const[t,n]=v.useState(null),o=v.useRef(e),a=v.useCallback(s=>{const l=Uc(s.target);l&&n(i=>i?(i.set(l,tu(l)),new Map(i)):null)},[]);return v.useEffect(()=>{const s=o.current;if(e!==s){l(s);const i=e.map(c=>{const d=Uc(c);return d?(d.addEventListener("scroll",a,{passive:!0}),[d,tu(d)]):null}).filter(c=>c!=null);n(i.length?new Map(i):null),o.current=e}return()=>{l(e),l(s)};function l(i){i.forEach(c=>{const d=Uc(c);d==null||d.removeEventListener("scroll",a)})}},[a,e]),v.useMemo(()=>e.length?t?Array.from(t.values()).reduce((s,l)=>Io(s,l),un):dx(e):un,[e,t])}function s1(e,t){t===void 0&&(t=[]);const n=v.useRef(null);return v.useEffect(()=>{n.current=null},t),v.useEffect(()=>{const o=e!==un;o&&!n.current&&(n.current=e),!o&&n.current&&(n.current=null)},[e]),n.current?xs(e,n.current):un}function ow(e){v.useEffect(()=>{if(!Xi)return;const t=e.map(n=>{let{sensor:o}=n;return o.setup==null?void 0:o.setup()});return()=>{for(const n of t)n==null||n()}},e.map(t=>{let{sensor:n}=t;return n}))}function aw(e,t){return v.useMemo(()=>e.reduce((n,o)=>{let{eventName:a,handler:s}=o;return n[a]=l=>{s(l,t)},n},{}),[e,t])}function fx(e){return v.useMemo(()=>e?RS(e):null,[e])}const Zc=[];function sw(e,t){t===void 0&&(t=na);const[n]=e,o=fx(n?jt(n):null),[a,s]=v.useReducer(i,Zc),l=ec({callback:s});return e.length>0&&a===Zc&&s(),Gt(()=>{e.length?e.forEach(c=>l==null?void 0:l.observe(c)):(l==null||l.disconnect(),s())},[e]),a;function i(){return e.length?e.map(c=>ix(c)?o:new Up(t(c),c)):Zc}}function hx(e){if(!e)return null;if(e.children.length>1)return e;const t=e.children[0];return Ms(t)?t:e}function lw(e){let{measure:t}=e;const[n,o]=v.useState(null),a=v.useCallback(d=>{for(const{target:u}of d)if(Ms(u)){o(p=>{const m=t(u);return p?{...p,width:m.width,height:m.height}:m});break}},[t]),s=ec({callback:a}),l=v.useCallback(d=>{const u=hx(d);s==null||s.disconnect(),u&&(s==null||s.observe(u)),o(u?t(u):null)},[t,s]),[i,c]=gi(l);return v.useMemo(()=>({nodeRef:i,rect:n,setRef:c}),[n,i,c])}const iw=[{sensor:Zp,options:{}},{sensor:Vp,options:{}}],cw={current:{}},Fl={draggable:{measure:Jh},droppable:{measure:Jh,strategy:gs.WhileDragging,frequency:ru.Optimized},dragOverlay:{measure:na}};class Ya extends Map{get(t){var n;return t!=null&&(n=super.get(t))!=null?n:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter(t=>{let{disabled:n}=t;return!n})}getNodeFor(t){var n,o;return(n=(o=this.get(t))==null?void 0:o.node.current)!=null?n:void 0}}const dw={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new Ya,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:ji},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:Fl,measureDroppableContainers:ji,windowRect:null,measuringScheduled:!1},mx={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:ji,draggableNodes:new Map,over:null,measureDroppableContainers:ji},Bs=v.createContext(mx),xx=v.createContext(dw);function uw(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new Ya}}}function pw(e,t){switch(t.type){case Ge.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case Ge.DragMove:return e.draggable.active?{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}}:e;case Ge.DragEnd:case Ge.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case Ge.RegisterDroppable:{const{element:n}=t,{id:o}=n,a=new Ya(e.droppable.containers);return a.set(o,n),{...e,droppable:{...e.droppable,containers:a}}}case Ge.SetDroppableDisabled:{const{id:n,key:o,disabled:a}=t,s=e.droppable.containers.get(n);if(!s||o!==s.key)return e;const l=new Ya(e.droppable.containers);return l.set(n,{...s,disabled:a}),{...e,droppable:{...e.droppable,containers:l}}}case Ge.UnregisterDroppable:{const{id:n,key:o}=t,a=e.droppable.containers.get(n);if(!a||o!==a.key)return e;const s=new Ya(e.droppable.containers);return s.delete(n),{...e,droppable:{...e.droppable,containers:s}}}default:return e}}function fw(e){let{disabled:t}=e;const{active:n,activatorEvent:o,draggableNodes:a}=v.useContext(Bs),s=vi(o),l=vi(n==null?void 0:n.id);return v.useEffect(()=>{if(!t&&!o&&s&&l!=null){if(!qi(s)||document.activeElement===s.target)return;const i=a.get(l);if(!i)return;const{activatorNode:c,node:d}=i;if(!c.current&&!d.current)return;requestAnimationFrame(()=>{for(const u of[c.current,d.current]){if(!u)continue;const p=iS(u);if(p){p.focus();break}}})}},[o,t,a,l,s]),null}function gx(e,t){let{transform:n,...o}=t;return e!=null&&e.length?e.reduce((a,s)=>s({transform:a,...o}),n):n}function hw(e){return v.useMemo(()=>({draggable:{...Fl.draggable,...e==null?void 0:e.draggable},droppable:{...Fl.droppable,...e==null?void 0:e.droppable},dragOverlay:{...Fl.dragOverlay,...e==null?void 0:e.dragOverlay}}),[e==null?void 0:e.draggable,e==null?void 0:e.droppable,e==null?void 0:e.dragOverlay])}function mw(e){let{activeNode:t,measure:n,initialRect:o,config:a=!0}=e;const s=v.useRef(!1),{x:l,y:i}=typeof a=="boolean"?{x:a,y:a}:a;Gt(()=>{if(!l&&!i||!t){s.current=!1;return}if(s.current||!o)return;const d=t==null?void 0:t.node.current;if(!d||d.isConnected===!1)return;const u=n(d),p=rx(u,o);if(l||(p.x=0),i||(p.y=0),s.current=!0,Math.abs(p.x)>0||Math.abs(p.y)>0){const m=ax(d);m&&m.scrollBy({top:p.y,left:p.x})}},[t,l,i,o,n])}const tc=v.createContext({...un,scaleX:1,scaleY:1});var or;(function(e){e[e.Uninitialized=0]="Uninitialized",e[e.Initializing=1]="Initializing",e[e.Initialized=2]="Initialized"})(or||(or={}));const xw=v.memo(function(t){var n,o,a,s;let{id:l,accessibility:i,autoScroll:c=!0,children:d,sensors:u=iw,collisionDetection:p=wS,measuring:m,modifiers:y,...C}=t;const b=v.useReducer(pw,void 0,uw),[_,g]=b,[f,h]=hS(),[j,S]=v.useState(or.Uninitialized),x=j===or.Initialized,{draggable:{active:w,nodes:T,translate:E},droppable:{containers:D}}=_,M=w?T.get(w):null,K=v.useRef({initial:null,translated:null}),X=v.useMemo(()=>{var We;return w!=null?{id:w,data:(We=M==null?void 0:M.data)!=null?We:cw,rect:K}:null},[w,M]),Q=v.useRef(null),[re,ae]=v.useState(null),[V,O]=v.useState(null),B=ms(C,Object.values(C)),I=$s("DndDescribedBy",l),H=v.useMemo(()=>D.getEnabled(),[D]),W=hw(m),{droppableRects:we,measureDroppableContainers:le,measuringScheduled:be}=QS(H,{dragging:x,dependencies:[E.x,E.y],config:W.droppable}),se=GS(T,w),Re=v.useMemo(()=>V?yi(V):null,[V]),lt=sc(),bt=qS(se,W.draggable.measure);mw({activeNode:w?T.get(w):null,config:lt.layoutShiftCompensation,initialRect:bt,measure:W.draggable.measure});const he=o1(se,W.draggable.measure,bt),Le=o1(se?se.parentElement:null),qe=v.useRef({activatorEvent:null,active:null,activeNode:se,collisionRect:null,collisions:null,droppableRects:we,draggableNodes:T,draggingNode:null,draggingNodeRect:null,droppableContainers:D,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),Lt=D.getNodeFor((n=qe.current.over)==null?void 0:n.id),qt=lw({measure:W.dragOverlay.measure}),Ct=(o=qt.nodeRef.current)!=null?o:se,Xn=x?(a=qt.rect)!=null?a:he:null,Ws=!!(qt.nodeRef.current&&qt.rect),Zs=tw(Ws?null:he),sa=fx(Ct?jt(Ct):null),fn=nw(x?Lt??se:null),hn=sw(fn),Or=gx(y,{transform:{x:E.x-Zs.x,y:E.y-Zs.y,scaleX:1,scaleY:1},activatorEvent:V,active:X,activeNodeRect:he,containerNodeRect:Le,draggingNodeRect:Xn,over:qe.current.over,overlayNodeRect:qt.rect,scrollableAncestors:fn,scrollableAncestorRects:hn,windowRect:sa}),co=Re?Io(Re,E):null,Jt=rw(fn),Ar=s1(Jt),Ks=s1(Jt,[he]),en=Io(Or,Ar),Qn=Xn?TS(Xn,Or):null,St=X&&Qn?p({active:X,collisionRect:Qn,droppableRects:we,droppableContainers:H,pointerCoordinates:co}):null,la=nx(St,"id"),[tn,ia]=v.useState(null),oc=Ws?Or:Io(Or,Ks),Ys=_S(oc,(s=tn==null?void 0:tn.rect)!=null?s:null,he),Mr=v.useCallback((We,ht)=>{let{sensor:k,options:N}=ht;if(Q.current==null)return;const L=T.get(Q.current);if(!L)return;const $=We.nativeEvent,z=new k({active:Q.current,activeNode:L,event:$,options:N,context:qe,onStart(G){const q=Q.current;if(q==null)return;const Y=T.get(q);if(!Y)return;const{onDragStart:ie}=B.current,Ae={active:{id:q,data:Y.data,rect:K}};On.unstable_batchedUpdates(()=>{ie==null||ie(Ae),S(or.Initializing),g({type:Ge.DragStart,initialCoordinates:G,active:q}),f({type:"onDragStart",event:Ae})})},onMove(G){g({type:Ge.DragMove,coordinates:G})},onEnd:ne(Ge.DragEnd),onCancel:ne(Ge.DragCancel)});On.unstable_batchedUpdates(()=>{ae(z),O(We.nativeEvent)});function ne(G){return async function(){const{active:Y,collisions:ie,over:Ae,scrollAdjustedTranslate:oe}=qe.current;let ye=null;if(Y&&oe){const{cancelDrop:Me}=B.current;ye={activatorEvent:$,active:Y,collisions:ie,delta:oe,over:Ae},G===Ge.DragEnd&&typeof Me=="function"&&await Promise.resolve(Me(ye))&&(G=Ge.DragCancel)}Q.current=null,On.unstable_batchedUpdates(()=>{g({type:G}),S(or.Uninitialized),ia(null),ae(null),O(null);const Me=G===Ge.DragEnd?"onDragEnd":"onDragCancel";if(ye){const it=B.current[Me];it==null||it(ye),f({type:Me,event:ye})}})}}},[T]),Gs=v.useCallback((We,ht)=>(k,N)=>{const L=k.nativeEvent,$=T.get(N);if(Q.current!==null||!$||L.dndKit||L.defaultPrevented)return;const z={active:$};We(k,ht.options,z)===!0&&(L.dndKit={capturedBy:ht.sensor},Q.current=N,Mr(k,ht))},[T,Mr]),uo=XS(u,Gs);ow(u),Gt(()=>{he&&j===or.Initializing&&S(or.Initialized)},[he,j]),v.useEffect(()=>{const{onDragMove:We}=B.current,{active:ht,activatorEvent:k,collisions:N,over:L}=qe.current;if(!ht||!k)return;const $={active:ht,activatorEvent:k,collisions:N,delta:{x:en.x,y:en.y},over:L};On.unstable_batchedUpdates(()=>{We==null||We($),f({type:"onDragMove",event:$})})},[en.x,en.y]),v.useEffect(()=>{const{active:We,activatorEvent:ht,collisions:k,droppableContainers:N,scrollAdjustedTranslate:L}=qe.current;if(!We||Q.current==null||!ht||!L)return;const{onDragOver:$}=B.current,z=N.get(la),ne=z&&z.rect.current?{id:z.id,rect:z.rect.current,data:z.data,disabled:z.disabled}:null,G={active:We,activatorEvent:ht,collisions:k,delta:{x:L.x,y:L.y},over:ne};On.unstable_batchedUpdates(()=>{ia(ne),$==null||$(G),f({type:"onDragOver",event:G})})},[la]),Gt(()=>{qe.current={activatorEvent:V,active:X,activeNode:se,collisionRect:Qn,collisions:St,droppableRects:we,draggableNodes:T,draggingNode:Ct,draggingNodeRect:Xn,droppableContainers:D,over:tn,scrollableAncestors:fn,scrollAdjustedTranslate:en},K.current={initial:Xn,translated:Qn}},[X,se,St,Qn,T,Ct,Xn,we,D,tn,fn,en]),ZS({...lt,delta:E,draggingRect:Qn,pointerCoordinates:co,scrollableAncestors:fn,scrollableAncestorRects:hn});const ac=v.useMemo(()=>({active:X,activeNode:se,activeNodeRect:he,activatorEvent:V,collisions:St,containerNodeRect:Le,dragOverlay:qt,draggableNodes:T,droppableContainers:D,droppableRects:we,over:tn,measureDroppableContainers:le,scrollableAncestors:fn,scrollableAncestorRects:hn,measuringConfiguration:W,measuringScheduled:be,windowRect:sa}),[X,se,he,V,St,Le,qt,T,D,we,tn,le,fn,hn,W,be,sa]),Xs=v.useMemo(()=>({activatorEvent:V,activators:uo,active:X,activeNodeRect:he,ariaDescribedById:{draggable:I},dispatch:g,draggableNodes:T,over:tn,measureDroppableContainers:le}),[V,uo,X,he,g,I,T,tn,le]);return te.createElement(J3.Provider,{value:h},te.createElement(Bs.Provider,{value:Xs},te.createElement(xx.Provider,{value:ac},te.createElement(tc.Provider,{value:Ys},d)),te.createElement(fw,{disabled:(i==null?void 0:i.restoreFocus)===!1})),te.createElement(gS,{...i,hiddenTextDescribedById:I}));function sc(){const We=(re==null?void 0:re.autoScrollEnabled)===!1,ht=typeof c=="object"?c.enabled===!1:c===!1,k=x&&!We&&!ht;return typeof c=="object"?{...c,enabled:k}:{enabled:k}}}),gw=v.createContext(null),l1="button",vw="Droppable";function yw(e){let{id:t,data:n,disabled:o=!1,attributes:a}=e;const s=$s(vw),{activators:l,activatorEvent:i,active:c,activeNodeRect:d,ariaDescribedById:u,draggableNodes:p,over:m}=v.useContext(Bs),{role:y=l1,roleDescription:C="draggable",tabIndex:b=0}=a??{},_=(c==null?void 0:c.id)===t,g=v.useContext(_?tc:gw),[f,h]=gi(),[j,S]=gi(),x=aw(l,t),w=ms(n);Gt(()=>(p.set(t,{id:t,key:s,node:f,activatorNode:j,data:w}),()=>{const E=p.get(t);E&&E.key===s&&p.delete(t)}),[p,t]);const T=v.useMemo(()=>({role:y,tabIndex:b,"aria-disabled":o,"aria-pressed":_&&y===l1?!0:void 0,"aria-roledescription":C,"aria-describedby":u.draggable}),[o,y,b,_,C,u.draggable]);return{active:c,activatorEvent:i,activeNodeRect:d,attributes:T,isDragging:_,listeners:o?void 0:x,node:f,over:m,setNodeRef:h,setActivatorNodeRef:S,transform:g}}function vx(){return v.useContext(xx)}const jw="Droppable",bw={timeout:25};function Cw(e){let{data:t,disabled:n=!1,id:o,resizeObserverConfig:a}=e;const s=$s(jw),{active:l,dispatch:i,over:c,measureDroppableContainers:d}=v.useContext(Bs),u=v.useRef({disabled:n}),p=v.useRef(!1),m=v.useRef(null),y=v.useRef(null),{disabled:C,updateMeasurementsFor:b,timeout:_}={...bw,...a},g=ms(b??o),f=v.useCallback(()=>{if(!p.current){p.current=!0;return}y.current!=null&&clearTimeout(y.current),y.current=setTimeout(()=>{d(Array.isArray(g.current)?g.current:[g.current]),y.current=null},_)},[_]),h=ec({callback:f,disabled:C||!l}),j=v.useCallback((T,E)=>{h&&(E&&(h.unobserve(E),p.current=!1),T&&h.observe(T))},[h]),[S,x]=gi(j),w=ms(t);return v.useEffect(()=>{!h||!S.current||(h.disconnect(),p.current=!1,h.observe(S.current))},[S,h]),Gt(()=>(i({type:Ge.RegisterDroppable,element:{id:o,key:s,disabled:n,node:S,rect:m,data:w}}),()=>i({type:Ge.UnregisterDroppable,key:s,id:o})),[o]),v.useEffect(()=>{n!==u.current.disabled&&(i({type:Ge.SetDroppableDisabled,id:o,key:s,disabled:n}),u.current.disabled=n)},[o,s,n,i]),{active:l,rect:m,isOver:(c==null?void 0:c.id)===o,node:S,over:c,setNodeRef:x}}function Sw(e){let{animation:t,children:n}=e;const[o,a]=v.useState(null),[s,l]=v.useState(null),i=vi(n);return!n&&!o&&i&&a(i),Gt(()=>{if(!s)return;const c=o==null?void 0:o.key,d=o==null?void 0:o.props.id;if(c==null||d==null){a(null);return}Promise.resolve(t(d,s)).then(()=>{a(null)})},[t,o,s]),te.createElement(te.Fragment,null,n,o?v.cloneElement(o,{ref:l}):null)}const ww={x:0,y:0,scaleX:1,scaleY:1};function _w(e){let{children:t}=e;return te.createElement(Bs.Provider,{value:mx},te.createElement(tc.Provider,{value:ww},t))}const kw={position:"fixed",touchAction:"none"},Tw=e=>qi(e)?"transform 250ms ease":void 0,Ew=v.forwardRef((e,t)=>{let{as:n,activatorEvent:o,adjustScale:a,children:s,className:l,rect:i,style:c,transform:d,transition:u=Tw}=e;if(!i)return null;const p=a?d:{...d,scaleX:1,scaleY:1},m={...kw,width:i.width,height:i.height,top:i.top,left:i.left,transform:jr.Transform.toString(p),transformOrigin:a&&o?yS(o,i):void 0,transition:typeof u=="function"?u(o):u,...c};return te.createElement(n,{className:l,style:m,ref:t},s)}),Nw=e=>t=>{let{active:n,dragOverlay:o}=t;const a={},{styles:s,className:l}=e;if(s!=null&&s.active)for(const[i,c]of Object.entries(s.active))c!==void 0&&(a[i]=n.node.style.getPropertyValue(i),n.node.style.setProperty(i,c));if(s!=null&&s.dragOverlay)for(const[i,c]of Object.entries(s.dragOverlay))c!==void 0&&o.node.style.setProperty(i,c);return l!=null&&l.active&&n.node.classList.add(l.active),l!=null&&l.dragOverlay&&o.node.classList.add(l.dragOverlay),function(){for(const[c,d]of Object.entries(a))n.node.style.setProperty(c,d);l!=null&&l.active&&n.node.classList.remove(l.active)}},Rw=e=>{let{transform:{initial:t,final:n}}=e;return[{transform:jr.Transform.toString(t)},{transform:jr.Transform.toString(n)}]},Lw={duration:250,easing:"ease",keyframes:Rw,sideEffects:Nw({styles:{active:{opacity:"0"}}})};function Dw(e){let{config:t,draggableNodes:n,droppableContainers:o,measuringConfiguration:a}=e;return Qi((s,l)=>{if(t===null)return;const i=n.get(s);if(!i)return;const c=i.node.current;if(!c)return;const d=hx(l);if(!d)return;const{transform:u}=jt(l).getComputedStyle(l),p=ox(u);if(!p)return;const m=typeof t=="function"?t:Ow(t);return ux(c,a.draggable.measure),m({active:{id:s,data:i.data,node:c,rect:a.draggable.measure(c)},draggableNodes:n,dragOverlay:{node:l,rect:a.dragOverlay.measure(d)},droppableContainers:o,measuringConfiguration:a,transform:p})})}function Ow(e){const{duration:t,easing:n,sideEffects:o,keyframes:a}={...Lw,...e};return s=>{let{active:l,dragOverlay:i,transform:c,...d}=s;if(!t)return;const u={x:i.rect.left-l.rect.left,y:i.rect.top-l.rect.top},p={scaleX:c.scaleX!==1?l.rect.width*c.scaleX/i.rect.width:1,scaleY:c.scaleY!==1?l.rect.height*c.scaleY/i.rect.height:1},m={x:c.x-u.x,y:c.y-u.y,...p},y=a({...d,active:l,dragOverlay:i,transform:{initial:c,final:m}}),[C]=y,b=y[y.length-1];if(JSON.stringify(C)===JSON.stringify(b))return;const _=o==null?void 0:o({active:l,dragOverlay:i,...d}),g=i.node.animate(y,{duration:t,easing:n,fill:"forwards"});return new Promise(f=>{g.onfinish=()=>{_==null||_(),f()}})}}let i1=0;function Aw(e){return v.useMemo(()=>{if(e!=null)return i1++,i1},[e])}const Mw=te.memo(e=>{let{adjustScale:t=!1,children:n,dropAnimation:o,style:a,transition:s,modifiers:l,wrapperElement:i="div",className:c,zIndex:d=999}=e;const{activatorEvent:u,active:p,activeNodeRect:m,containerNodeRect:y,draggableNodes:C,droppableContainers:b,dragOverlay:_,over:g,measuringConfiguration:f,scrollableAncestors:h,scrollableAncestorRects:j,windowRect:S}=vx(),x=v.useContext(tc),w=Aw(p==null?void 0:p.id),T=gx(l,{activatorEvent:u,active:p,activeNodeRect:m,containerNodeRect:y,draggingNodeRect:_.rect,over:g,overlayNodeRect:_.rect,scrollableAncestors:h,scrollableAncestorRects:j,transform:x,windowRect:S}),E=Kp(m),D=Dw({config:o,draggableNodes:C,droppableContainers:b,measuringConfiguration:f}),M=E?_.setRef:void 0;return te.createElement(_w,null,te.createElement(Sw,{animation:D},p&&w?te.createElement(Ew,{key:w,id:p.id,ref:M,as:i,activatorEvent:u,adjustScale:t,className:c,transition:s,rect:E,style:{zIndex:d,...a},transform:T},n):null))});function Yp(e,t,n){const o=e.slice();return o.splice(n<0?o.length+n:n,0,o.splice(t,1)[0]),o}function Pw(e,t){return e.reduce((n,o,a)=>{const s=t.get(o);return s&&(n[a]=s),n},Array(e.length))}function bl(e){return e!==null&&e>=0}function $w(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function Bw(e){return typeof e=="boolean"?{draggable:e,droppable:e}:e}const Cl={scaleX:1,scaleY:1},Iw=e=>{var t;let{rects:n,activeNodeRect:o,activeIndex:a,overIndex:s,index:l}=e;const i=(t=n[a])!=null?t:o;if(!i)return null;const c=zw(n,l,a);if(l===a){const d=n[s];return d?{x:a<s?d.left+d.width-(i.left+i.width):d.left-i.left,y:0,...Cl}:null}return l>a&&l<=s?{x:-i.width-c,y:0,...Cl}:l<a&&l>=s?{x:i.width+c,y:0,...Cl}:{x:0,y:0,...Cl}};function zw(e,t,n){const o=e[t],a=e[t-1],s=e[t+1];return!o||!a&&!s?0:n<t?a?o.left-(a.left+a.width):s.left-(o.left+o.width):s?s.left-(o.left+o.width):o.left-(a.left+a.width)}const Gp=e=>{let{rects:t,activeIndex:n,overIndex:o,index:a}=e;const s=Yp(t,o,n),l=t[a],i=s[a];return!i||!l?null:{x:i.left-l.left,y:i.top-l.top,scaleX:i.width/l.width,scaleY:i.height/l.height}},Sl={scaleX:1,scaleY:1},Fw=e=>{var t;let{activeIndex:n,activeNodeRect:o,index:a,rects:s,overIndex:l}=e;const i=(t=s[n])!=null?t:o;if(!i)return null;if(a===n){const d=s[l];return d?{x:0,y:n<l?d.top+d.height-(i.top+i.height):d.top-i.top,...Sl}:null}const c=Hw(s,a,n);return a>n&&a<=l?{x:0,y:-i.height-c,...Sl}:a<n&&a>=l?{x:0,y:i.height+c,...Sl}:{x:0,y:0,...Sl}};function Hw(e,t,n){const o=e[t],a=e[t-1],s=e[t+1];return o?n<t?a?o.top-(a.top+a.height):s?s.top-(o.top+o.height):0:s?s.top-(o.top+o.height):a?o.top-(a.top+a.height):0:0}const yx="Sortable",jx=te.createContext({activeIndex:-1,containerId:yx,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:Gp,disabled:{draggable:!1,droppable:!1}});function Uw(e){let{children:t,id:n,items:o,strategy:a=Gp,disabled:s=!1}=e;const{active:l,dragOverlay:i,droppableRects:c,over:d,measureDroppableContainers:u}=vx(),p=$s(yx,n),m=i.rect!==null,y=v.useMemo(()=>o.map(x=>typeof x=="object"&&"id"in x?x.id:x),[o]),C=l!=null,b=l?y.indexOf(l.id):-1,_=d?y.indexOf(d.id):-1,g=v.useRef(y),f=!$w(y,g.current),h=_!==-1&&b===-1||f,j=Bw(s);Gt(()=>{f&&C&&u(y)},[f,y,C,u]),v.useEffect(()=>{g.current=y},[y]);const S=v.useMemo(()=>({activeIndex:b,containerId:p,disabled:j,disableTransforms:h,items:y,overIndex:_,useDragOverlay:m,sortedRects:Pw(y,c),strategy:a}),[b,p,j.draggable,j.droppable,h,y,_,c,m,a]);return te.createElement(jx.Provider,{value:S},t)}const Vw=e=>{let{id:t,items:n,activeIndex:o,overIndex:a}=e;return Yp(n,o,a).indexOf(t)},Ww=e=>{let{containerId:t,isSorting:n,wasDragging:o,index:a,items:s,newIndex:l,previousItems:i,previousContainerId:c,transition:d}=e;return!d||!o||i!==s&&a===l?!1:n?!0:l!==a&&t===c},Zw={duration:200,easing:"ease"},bx="transform",Kw=jr.Transition.toString({property:bx,duration:0,easing:"linear"}),Yw={roleDescription:"sortable"};function Gw(e){let{disabled:t,index:n,node:o,rect:a}=e;const[s,l]=v.useState(null),i=v.useRef(n);return Gt(()=>{if(!t&&n!==i.current&&o.current){const c=a.current;if(c){const d=na(o.current,{ignoreTransform:!0}),u={x:c.left-d.left,y:c.top-d.top,scaleX:c.width/d.width,scaleY:c.height/d.height};(u.x||u.y)&&l(u)}}n!==i.current&&(i.current=n)},[t,n,o,a]),v.useEffect(()=>{s&&l(null)},[s]),s}function Xw(e){let{animateLayoutChanges:t=Ww,attributes:n,disabled:o,data:a,getNewIndex:s=Vw,id:l,strategy:i,resizeObserverConfig:c,transition:d=Zw}=e;const{items:u,containerId:p,activeIndex:m,disabled:y,disableTransforms:C,sortedRects:b,overIndex:_,useDragOverlay:g,strategy:f}=v.useContext(jx),h=Qw(o,y),j=u.indexOf(l),S=v.useMemo(()=>({sortable:{containerId:p,index:j,items:u},...a}),[p,a,j,u]),x=v.useMemo(()=>u.slice(u.indexOf(l)),[u,l]),{rect:w,node:T,isOver:E,setNodeRef:D}=Cw({id:l,data:S,disabled:h.droppable,resizeObserverConfig:{updateMeasurementsFor:x,...c}}),{active:M,activatorEvent:K,activeNodeRect:X,attributes:Q,setNodeRef:re,listeners:ae,isDragging:V,over:O,setActivatorNodeRef:B,transform:I}=yw({id:l,data:S,attributes:{...Yw,...n},disabled:h.draggable}),H=oS(D,re),W=!!M,we=W&&!C&&bl(m)&&bl(_),le=!g&&V,be=le&&we?I:null,Re=we?be??(i??f)({rects:b,activeNodeRect:X,activeIndex:m,overIndex:_,index:j}):null,lt=bl(m)&&bl(_)?s({id:l,items:u,activeIndex:m,overIndex:_}):j,bt=M==null?void 0:M.id,he=v.useRef({activeId:bt,items:u,newIndex:lt,containerId:p}),Le=u!==he.current.items,qe=t({active:M,containerId:p,isDragging:V,isSorting:W,id:l,index:j,items:u,newIndex:he.current.newIndex,previousItems:he.current.items,previousContainerId:he.current.containerId,transition:d,wasDragging:he.current.activeId!=null}),Lt=Gw({disabled:!qe,index:j,node:T,rect:w});return v.useEffect(()=>{W&&he.current.newIndex!==lt&&(he.current.newIndex=lt),p!==he.current.containerId&&(he.current.containerId=p),u!==he.current.items&&(he.current.items=u)},[W,lt,p,u]),v.useEffect(()=>{if(bt===he.current.activeId)return;if(bt&&!he.current.activeId){he.current.activeId=bt;return}const Ct=setTimeout(()=>{he.current.activeId=bt},50);return()=>clearTimeout(Ct)},[bt]),{active:M,activeIndex:m,attributes:Q,data:S,rect:w,index:j,newIndex:lt,items:u,isOver:E,isSorting:W,isDragging:V,listeners:ae,node:T,overIndex:_,over:O,setNodeRef:H,setActivatorNodeRef:B,setDroppableNodeRef:D,setDraggableNodeRef:re,transform:Lt??Re,transition:qt()};function qt(){if(Lt||Le&&he.current.newIndex===j)return Kw;if(!(le&&!qi(K)||!d)&&(W||qe))return jr.Transition.toString({...d,property:bx})}}function Qw(e,t){var n,o;return typeof e=="boolean"?{draggable:e,droppable:!1}:{draggable:(n=e==null?void 0:e.draggable)!=null?n:t.draggable,droppable:(o=e==null?void 0:e.droppable)!=null?o:t.droppable}}function Ci(e){if(!e)return!1;const t=e.data.current;return!!(t&&"sortable"in t&&typeof t.sortable=="object"&&"containerId"in t.sortable&&"items"in t.sortable&&"index"in t.sortable)}const qw=[me.Down,me.Right,me.Up,me.Left],Jw=(e,t)=>{let{context:{active:n,collisionRect:o,droppableRects:a,droppableContainers:s,over:l,scrollableAncestors:i}}=t;if(qw.includes(e.code)){if(e.preventDefault(),!n||!o)return;const c=[];s.getEnabled().forEach(p=>{if(!p||p!=null&&p.disabled)return;const m=a.get(p.id);if(m)switch(e.code){case me.Down:o.top<m.top&&c.push(p);break;case me.Up:o.top>m.top&&c.push(p);break;case me.Left:o.left>m.left&&c.push(p);break;case me.Right:o.left<m.left&&c.push(p);break}});const d=CS({active:n,collisionRect:o,droppableRects:a,droppableContainers:c,pointerCoordinates:null});let u=nx(d,"id");if(u===(l==null?void 0:l.id)&&d.length>1&&(u=d[1].id),u!=null){const p=s.get(n.id),m=s.get(u),y=m?a.get(m.id):null,C=m==null?void 0:m.node.current;if(C&&y&&p&&m){const _=Ji(C).some((x,w)=>i[w]!==x),g=Cx(p,m),f=e_(p,m),h=_||!g?{x:0,y:0}:{x:f?o.width-y.width:0,y:f?o.height-y.height:0},j={x:y.left,y:y.top};return h.x&&h.y?j:xs(j,h)}}}};function Cx(e,t){return!Ci(e)||!Ci(t)?!1:e.data.current.sortable.containerId===t.data.current.sortable.containerId}function e_(e,t){return!Ci(e)||!Ci(t)||!Cx(e,t)?!1:e.data.current.sortable.index<t.data.current.sortable.index}const t_=e=>{let{transform:t}=e;return{...t,y:0}};function Sx(e,t,n){const o={...e};return t.top+e.y<=n.top?o.y=n.top-t.top:t.bottom+e.y>=n.top+n.height&&(o.y=n.top+n.height-t.bottom),t.left+e.x<=n.left?o.x=n.left-t.left:t.right+e.x>=n.left+n.width&&(o.x=n.left+n.width-t.right),o}const Xp=e=>{let{containerNodeRect:t,draggingNodeRect:n,transform:o}=e;return!n||!t?o:Sx(o,n,t)},n_=e=>{let{transform:t}=e;return{...t,x:0}},wx=e=>{let{transform:t,draggingNodeRect:n,windowRect:o}=e;return!n||!o?t:Sx(t,n,o)},Qp=({items:e,setOrder:t,List:n=({children:c})=>c,Item:o,modifiers:a=[Xp],strategy:s=Gp,Overlay:l,...i})=>{const[c,d]=v.useState(null),u=vS(Xh(Zp),Xh(Vp,{coordinateGetter:Jw}));function p(C){const b=e.findIndex(_=>_.id===C.active.id);d(b)}function m(){d(null)}function y(C){const{active:b,over:_}=C;if(b.id!==_.id){const g=e.findIndex(h=>h.id===b.id),f=e.findIndex(h=>h.id===_.id);e[g].moved=!0,t(Yp(e,g,f))}d(null)}return r.jsxs(xw,{sensors:u,collisionDetection:bS,onDragStart:p,onDragCancel:m,onDragEnd:y,modifiers:a,children:[r.jsx(Uw,{items:e,strategy:s,children:r.jsx(n,{...i,children:e.map(C=>r.jsx(r_,{id:C.id,item:C,Item:o,...i},C.id))})}),l&&c&&r.jsx(Mw,{children:r.jsx(l,{item:c,...i})})]})},r_=({id:e,item:t,Item:n,...o})=>{const{attributes:a,listeners:s,setNodeRef:l,transform:i,transition:c}=Xw({id:e}),d={transform:jr.Translate.toString(i),transition:c};return r.jsx(n,{item:t,setNodeRef:l,style:d,listeners:s,...a,...o})},_x=({...e})=>r.jsx(Qp,{modifiers:[n_,wx,Xp],strategy:Fw,...e}),o_=({columns:e,visibleColumns:t,toggleVisibleColumn:n,columnOrder:o,changeColumnOrder:a})=>{const s=hs(t),l=o.map(c=>Rp(e[c],"id label")),i=c=>{a(c.map(d=>d.id))};return r.jsxs(pn,{right:!0,iconRight:"square vertical-left=2.5 vertical-right=2.5",text:"Columns",size:"small",closeOnBlur:!1,children:[r.jsx("div",{className:"sortable list vertical",children:r.jsx(_x,{items:l,Item:tS,setOrder:i,isVisible:s,toggleVisibleColumn:n})}),r.jsxs("div",{className:"smaller mar-b-2",children:["Click checkbox to show/hide.",r.jsx("br",{}),"Drag handle to order."]}),r.jsx(rS,{})]})},a_=ft.Consumer(o_),s_=({headerClass:e,Summary:t=OC,PageSize:n=KC,Columns:o=a_})=>r.jsx("header",{className:e,children:r.jsxs("div",{className:"flex space middle",children:[r.jsx("div",{children:r.jsx(t,{})}),r.jsxs("div",{className:"flex gap-2",children:[r.jsx(o,{}),r.jsx(n,{})]})]})}),l_=ft.Consumer(s_),c1=({value:e})=>je(e)?e:"",i_=({value:e})=>je(e)?Ra(e):"",d1=({value:e})=>je(e)?Mj(e):"",c_=({value:e})=>je(e)?$j(e):"",d_=({value:e})=>je(e)?e?"true":"false":"",u_={default:c1,text:c1,number:i_,price:d1,currency:d1,boolean:d_,title:c_},p_=({row:e,column:t,name:n,value:o,cellClass:a,sortColumn:s,sortingClass:l="sorting",displayTypes:i=u_})=>{const c=t.type||"text",d=t.display||i[c]||i.default,u=s===n,p=Se(a,t.className,u?l:null,t.right?"text-right":null);return r.jsx("td",{className:p,children:r.jsx(d,{row:e,column:t,value:o,name:n,field:n})})},f_=ft.Consumer(p_),h_=({row:e,columns:t,visibleColumns:n,Cell:o=f_})=>r.jsx("tr",{children:n.map(a=>{const s=t[a],l=s.field??a,i=e[l];return r.jsx(o,{row:e,name:a,field:l,column:s,value:i},a)})}),m_=ft.Consumer(h_),x_=({page:e,Row:t=m_})=>r.jsx("tbody",{children:e.rows.map((n,o)=>r.jsx(t,{row:n},n.id??o))}),g_=ft.Consumer(x_),v_=({name:e,column:t,sortColumn:n,sortReverse:o,toggleSortColumn:a,sortUpIcon:s="arrow-up",sortDownIcon:l="arrow-down",unsortedIcon:i="arrows",sortIconClass:c="sort-icon",sortingClass:d="sorting",showFilters:u,toggleFilters:p,filters:m,filteringClass:y="filtering",filterIcon:C="filter",filteringIcon:b="filter-solid",filterIconClass:_="filter-icon",headingClass:g="heading",rightClass:f="right"})=>{const h=e===n,j=h&&o,S=je(m[e]);return r.jsx("th",{className:Se(g,t.right?f:null,u?y:null,S?y:null,h?d:null),onClick:()=>a(e),children:r.jsxs("div",{className:"flex space middle",children:[r.jsx("span",{className:"label",children:t.label}),r.jsxs("div",{className:"flex gap-1",children:[r.jsx(ee,{className:_,name:S?b:C,onClick:p}),r.jsx(ee,{className:c,name:h?j?s:l:i})]})]})})},y_=ft.Consumer(v_),j_=({columns:e,headingsClass:t="headings",visibleColumns:n,Heading:o=y_})=>r.jsx("thead",{children:r.jsx("tr",{className:t,children:n.map(a=>r.jsx(o,{name:a,column:e[a]},a))})}),b_=ft.Consumer(j_),C_=({name:e,filters:t,setFilter:n,filterClass:o="filter",filteringClass:a="filtering",clearFilterIcon:s="cross"})=>r.jsx("th",{className:Se(o,je(t[e])?a:null),children:r.jsxs("div",{className:"flex space middle gap-1",children:[r.jsx("input",{type:"text",value:t[e]??"",onChange:l=>n(e,l.target.value)}),r.jsx(ee,{name:s,onClick:()=>n(e,null)})]})}),S_=ft.Consumer(C_),w_=({columns:e,filtersClass:t="filters",visibleColumns:n,Filter:o=S_})=>r.jsx("thead",{children:r.jsx("tr",{className:t,children:n.map(a=>r.jsx(o,{name:a,column:e[a]},a))})}),__=ft.Consumer(w_),k_=({tableClass:e="celled striped table",selectableClass:t="selectable",scrollX:n,rowClick:o,showFilters:a,Headings:s=b_,Filters:l=__,Rows:i=g_})=>r.jsxs("table",{className:Se(e,n?"nowrap":"wide",{[t]:o}),children:[r.jsx(s,{}),a&&r.jsx(l,{}),r.jsx(i,{})]}),T_=ft.Consumer(k_),E_=({scrollX:e,Table:t=T_})=>r.jsx("div",{className:e?"scroll-x":"",children:r.jsx(t,{})}),N_=ft.Consumer(E_),R_=({page:e=0,pages:t,buttonClass:n="outline",pageClass:o=n,currentPageClass:a="solid",render:s,...l})=>{const d=t-1,u=t,p=e+1,m=e>0?e-1:null,y=je(m)?m+1:null,C=e<d?e+1:null,b=je(C)?C+1:null;return s({page:e,pageNo:p,firstPage:0,firstPageNo:1,lastPage:d,lastPageNo:u,pages:t,prevPage:m,prevPageNo:y,nextPage:C,nextPageNo:b,buttonClass:n,pageClass:o,currentPageClass:a,...l})},Nr=Tr(R_),L_=Nr.Use,D_=({prevPage:e,setPage:t,buttonClass:n,prevClass:o=n,prevIcon:a="arrow-left"})=>r.jsx(A,{className:o,icon:a,onClick:()=>t(e),disabled:Ui(e)}),O_=Nr.Consumer(D_),A_=({nextPage:e,setPage:t,buttonClass:n,nextClass:o=n,nextIcon:a="arrow-right"})=>r.jsx(A,{className:o,icon:a,onClick:()=>t(e),disabled:!e}),M_=Nr.Consumer(A_),P_=({pageNo:e,text:t=e,buttonClass:n,className:o=n,onClick:a})=>r.jsx(A,{text:t,className:o,onClick:a}),$_=Nr.Consumer(P_),B_=r.jsx(r.Fragment,{children:"…"}),I_=({pageSeparatorClass:e="separator",pageSeparator:t=B_})=>r.jsx("div",{className:e,children:t}),z_=Nr.Consumer(I_),F_=({page:e,pageNo:t,firstPage:n,firstPageNo:o,prevPage:a,prevPageNo:s,nextPage:l,nextPageNo:i,lastPage:c,lastPageNo:d,setPage:u,pagesClass:p="pages",buttonClass:m,pageClass:y=m,currentPageClass:C="brand",showFirstLast:b=!0,Separator:_=z_,Page:g=$_})=>r.jsxs("div",{className:p,children:[b&&a>n&&r.jsxs(r.Fragment,{children:[r.jsx(g,{page:n,pageNo:o,className:y,onClick:()=>u(n)}),a>n+1&&r.jsx(_,{})]}),je(a)&&r.jsx(g,{page:a,pageNo:s,className:y,onClick:()=>u(a)}),r.jsx(g,{page:e,pageNo:t,className:C,current:!0,disabled:!0}),je(l)&&r.jsx(g,{page:l,pageNo:i,className:y,onClick:()=>u(l)}),b&&l&&l<c&&r.jsxs(r.Fragment,{children:[l<c-1&&r.jsx(_,{}),r.jsx(g,{page:c,pageNo:d,className:y,onClick:()=>u(c)})]})]}),H_=Nr.Consumer(F_),U_=({className:e="pager",size:t,color:n,Previous:o=O_,Next:a=M_,Pages:s=H_})=>r.jsxs("div",{className:Se(e,t,n),children:[r.jsx(o,{}),r.jsx(s,{}),r.jsx(a,{})]}),V_=Nr.Consumer(U_),W_=({Content:e=V_,...t})=>r.jsx(Nr.Provider,{...t,children:r.jsx(e,{})}),Zt=ve(W_,"Pager"),Z_=({footerClass:e,pager:t={},page:n,setPageNo:o})=>r.jsx("footer",{className:e,children:r.jsx(Zt,{page:n.page,pages:n.pages,setPage:a=>o(a+1),...t})}),K_=ft.Consumer(Z_),Y_=({color:e,className:t="datatable",Header:n=l_,Body:o=N_,Footer:a=K_})=>r.jsxs("section",{className:Se(t,e),children:[r.jsx(n,{}),r.jsx(o,{}),r.jsx(a,{})]}),G_=ft.Consumer(Y_),X_=({Content:e=G_,...t})=>r.jsx(ft.Provider,{...t,children:r.jsx(e,{})}),Qt=ve(X_,"Datatable"),Q_=({summary:e,summaryClass:t})=>r.jsx("summary",{className:t,children:e}),q_=({content:e,children:t,contentClass:n})=>r.jsx("div",{className:n,children:e||t}),J_=({className:e,size:t,color:n,lined:o,border:a,radius:s,shaded:l,shadow:i,open:c,Summary:d=Q_,Content:u=q_,...p})=>r.jsxs("details",{className:Se(e,n,Ki(a),$p(s),Pp(i),{size:t,color:n,lined:o,shaded:l}),open:c,children:[r.jsx(d,{...p}),r.jsx(u,{...p})]}),Qe=ve(J_,"Details"),ek=({close:e,icon:t="cross",className:n="close"})=>r.jsx("div",{className:n,onClick:e,children:r.jsx(ee,{name:t})}),tk=ve(ek,"ModalClose"),nk=({title:e,header:t})=>e||t?r.jsxs("header",{children:[!!e&&r.jsx("h3",{children:e}),t]}):null,rk=ve(nk,"ModalHeader"),ok=({footer:e})=>!!e&&r.jsx("footer",{children:e}),ak=ve(ok,"ModalFooter"),sk=({text:e,children:t,Header:n=rk,Footer:o=ak,...a})=>r.jsxs("article",{children:[r.jsx(n,{...a}),e||t,r.jsx(o,{...a})]}),lk=ve(sk,"ModalContent"),ik=({ref:e,open:t,close:n,className:o,closeClass:a="close",closeIcon:s="cross",Close:l=tk,Content:i=lk,...c})=>(e||(e=v.useRef(null)),v.useEffect(()=>{const{current:d}=e;t?d.showModal():d.close()},[t]),r.jsxs("dialog",{ref:e,className:o,children:[!!n&&r.jsx(l,{close:n,icon:s,className:a}),r.jsx(i,{...c})]})),Tn=ve(ik,"Modal"),ck=({open:e=!1}={})=>{const{isVisible:t,show:n,hide:o}=kr({visible:e});return{show:n,hide:o,Modal:a=>r.jsx(Tn,{open:t,...a})}},dk=({color:e,className:t,style:n,fixed:o,light:a,dark:s,children:l})=>r.jsx("div",{className:Se("overlay",t,e,{fixed:o,light:a,dark:s}),style:n,children:l}),ra=ve(dk,"Overlay"),uk=({open:e=!1}={})=>{const{isVisible:t,show:n,hide:o}=kr({visible:e});return{show:n,hide:o,Overlay:a=>t&&r.jsx(ra,{...a})}},pk=({className:e,disabled:t,children:n})=>r.jsx("label",{className:Se(e,{disabled:t}),children:n}),fk=ve(pk,"RadioLabel"),hk=({name:e,option:t,tabIndex:n=0,onChange:o=$e,checked:a})=>r.jsx("input",{type:"radio",name:e,disabled:t.disabled,"aria-disabled":t.disabled,tabIndex:t.disabled?-1:n,onChange:s=>o(s.target.checked),checked:a}),mk=ve(hk,"RadioInput"),xk=({name:e,option:t,checked:n,inline:o,border:a,labelClass:s="radio",inputClass:l,Label:i=fk,Input:c=mk,onChange:d})=>r.jsxs(i,{className:Se(s,t.labelClass,{inline:o,border:a}),disabled:t.disabled,option:t,children:[r.jsx(c,{name:e,option:t,checked:n,className:Se(l,t.inputClass),onChange:()=>d(t.value)}),t.text??t.label??t.name]}),gk=ve(xk,"RadioOption"),vk=({name:e=v.useId(),value:t,options:n,className:o="radioset",disabled:a,Option:s=gk,...l})=>r.jsx("div",{className:Se(o,{disabled:a}),children:n.map(i=>{const c=Jo(i)?i:{value:i,label:i};return r.jsx(s,{name:e,option:c,checked:c.value===t,value:t,...l},c.value)})}),Sn=ve(vk,"Radio"),Kc={searching:!1,search:void 0,results:void 0,result:void 0,cursor:void 0};class er extends Wa{constructor(t){super(t);const n=this.inputValue();this.state={...this.state,input:n,searching:!1},this.startSearch=t.debounceTime?zj(this.search.bind(this),t.debounceTime):this.search.bind(this)}componentDidMount(){this.mounted=!0,this.props.onLoad(this)}componentWillUnmount(){this.setState({results:null}),this.mounted=!1,this.props.onUnload(this)}inputValue(t=this.props.initialValue){return je(t)?this.props.displayValue(t):zl}onFocus(){this.debug("onFocus()"),this.setState({hasFocus:!0},this.props.onFocus)}onBlur(){this.debug("onBlur()"),this.setState({hasFocus:!1},this.props.onBlur),Vi(500).then(()=>this.clearResults())}onChange(t){const n=t.target.value;this.debug(`input: ${n}`),n.length>=this.props.minLength?this.setState({input:n},this.startSearch):this.setState({input:n,...Kc})}onKeyDown(t){this.debug(`onKeyDown(${t.key})`);const n=this.state.cursor;switch(t.key){case Bp:this.setCursor(n+1);break;case Ip:this.setCursor(n-1);break;case Yi:this.selectCursor();break;case Gi:this.reset();break;default:return}t.preventDefault()}reset(){this.debug("reset()");const t=this.props.initialValue,n=this.inputValue(t);this.debug(`reset() [input:${n}] from value: `,t),this.setState({value:t,input:n,...Kc},this.props.onReset)}search(){const{input:t}=this.state,{minLength:n,onSearch:o}=this.props;if(t.length<n){this.debug(`search() cancelled - input is shorter than ${n}`);return}if(!o){this.debug("search() cancelled - no onSearch() handler defined");return}this.debug("onSearch: ",o),this.setState({search:t,searching:!0},async()=>this.searchResults(await o(t,this)))}searchResults(t){this.debug("searchResults()",t),this.setState({results:t,searching:!1,cursor:0})}selectResult(t){this.debug("selectResult()",t);const n=this.inputValue(t);this.setState({value:t,input:n,...Kc},()=>this.props.onSelect(t))}setCursor(t){this.debug(`setCursor(${t})`);const{results:n}=this.state;this.setState({cursor:n&&n.length?(t+n.length)%n.length:void 0})}selectCursor(){const{cursor:t,results:n}=this.state;n&&n.length&&je(t)&&this.selectResult(n[t])}clearResults(){this.mounted&&this.setState({results:null})}resultsRef(t){this._resultsRef=t}activeRef(t){G3(this._resultsRef,t)}}xe(er,"debug",!1),xe(er,"debugPrefix","Search > "),xe(er,"debugColor","MediumVioletRed"),xe(er,"defaultProps",{minLength:2,debounceTime:500,onLoad:$e,onUnload:$e,onFocus:$e,onBlur:$e,onReset:$e,onSelect:$e,displayValue:mi("displayValue"),displayResult:mi("displayResult")}),xe(er,"initialState",{value:"",searching:!1}),xe(er,"initialProps",{value:"initialValue"}),xe(er,"actions",["onFocus","onBlur","onChange","onKeyDown","reset","selectResult","setCursor","selectCursor","resultsRef","activeRef"]);const oa=Tr(er),yk=({input:e,onFocus:t,onBlur:n,onChange:o,reset:a,placeholder:s="Search",clearIcon:l="cross",searchIcon:i="search",searchingIcon:c="cog.spin",inputsClass:d="inputs round",prefixClass:u="prefix",suffixClass:p="suffix",inputType:m="text",inputClass:y="",disabled:C,searching:b})=>r.jsxs("div",{className:d,children:[r.jsx("div",{className:u,children:r.jsx(ee,{name:i})}),r.jsx("input",{type:m,placeholder:s,value:e,onFocus:t,onBlur:n,onChange:o,disabled:C,className:y}),r.jsx("div",{className:p,onClick:a,children:r.jsx(ee,{name:b?c:l})})]}),jk=oa.Consumer(yk),bk=({result:e,active:t,activeRef:n,onClick:o,onMouseEnter:a,displayResult:s,resultClass:l="item",activeClass:i="active"})=>r.jsx("div",{className:Se(l,{[i]:t}),onClick:o,onMouseEnter:a,ref:t?n:null,children:s(e)}),Ck=oa.Consumer(bk),Sk=({noResultsClass:e="none",noResults:t="No results"})=>r.jsx("div",{className:e,children:t}),wk=oa.Consumer(Sk),_k=({results:e,resultsRef:t,cursor:n,selectResult:o,setCursor:a,resultsClass:s="menu border bdr-1",Result:l=Ck,NoResults:i=wk})=>r.jsx("div",{className:s,ref:t,children:qo(e)&&e.length?e.map((c,d)=>r.jsx(l,{result:c,active:je(n)&&e[n]===c,onClick:()=>o(c),onMouseEnter:()=>a(d)},c.id??c.value??d)):r.jsx(i,{})}),kk=oa.Consumer(_k),Tk=({results:e,onKeyDown:t,Input:n=jk,Results:o=kk})=>r.jsxs("div",{className:"search",onKeyDown:t,children:[r.jsx(n,{}),!!e&&r.jsx(o,{})]}),Ek=oa.Consumer(Tk),Nk=({Content:e=Ek,...t})=>r.jsx(oa.Provider,{...t,children:r.jsx(e,{})}),nc=ve(Nk,"Search");var _t;let Rk=(_t=class extends xi{constructor(t){super(t),this.state={...this.state,...this.valueState(),closeOnBlur:!this.props.search},this.debug(`search: ${this.props.search}  closeOnBlur: ${this.state.closeOnBlur}`)}componentDidUpdate(t){this.props.value!==t.value&&(this.debug(`value has changed from ${t.value} to ${this.props.value}`),this.setState(this.valueState()))}initialCursor(){return this.state.cursor}valueState(t=this.props.value){const n=this.props.options,[o,a]=this.props.findOption(n,t),s=this.inputValue(o);return{value:o,cursor:a,input:s,options:n}}inputValue(t=this.props.value){return je(t)?this.props.displayValue(t):null}selectState(t){const n=this.inputValue(t);return{value:t,input:n,selected:t}}closeState(){return{...this.constructor.inactiveState,options:this.props.options}}onKeyDown(t){switch(this.debug(`onKeyDown(${t.key})`),t.key){case Bp:this.state.isOpen?this.setCursor(this.cursorNextIndex()):this.open(this.initialCursor()??this.cursorFirstIndex());break;case Ip:this.state.isOpen?this.setCursor(this.cursorPrevIndex()):this.open(this.initialCursor()??this.cursorLastIndex());break;case Yi:this.state.isOpen?this.selectCursor():this.open(this.initialCursor()??this.cursorFirstIndex());break;case Gi:this.close();break;case oC:this.debug("backspace"),this.searchBackspace();break;case rC:return;case zp:if(this.state.isOpen){if(!(this.state.searchInput??zl).length)break}else{this.debug("space to open"),this.open(this.cursorFirstIndex());break}default:if(this.debug("default keypress"),t.altKey||t.ctrlKey||t.metaKey)return;if(t.key.length===1){console.log(`typed key ${t.key}`),this.searchKey(t.key),this.state.open||this.open(),this._searchRef&&this._searchRef.focus();break}console.log(`ignored key ${t.key}`);return}t.preventDefault()}searchRef(t){this.debug("searchRef()"),this._searchRef=t}focusSearch(t){this.debug("focusSearch()"),t==null||t.stopPropagation(),this.setState({searchFocus:!0})}blurSearch(){this.debug("blurSearch()"),this.setState({searchFocus:!1}),this.closeSoon()}setSearch(t){this.setState({searchInput:t},()=>this.searchOptions())}searchKey(t){this.setSearch((this.state.searchInput??zl)+t)}searchBackspace(){this.setSearch(je(this.state.searchInput)&&this.state.searchInput.length>1?this.state.searchInput.slice(0,-1):void 0)}clearSearch(t){t==null||t.preventDefault(),t==null||t.stopPropagation(),this._searchRef&&(this.debug("re-focussing search input"),this._searchRef.focus()),this.setSearch(void 0)}searchOptions(){this.debug("searchOptions()");const{options:t,searchOptions:n}=this.props;this.setState(o=>({options:je(o.searchInput)?n(o.searchInput,this.props.options.filter(this.props.validOption)):t,cursor:0}))}closeable(t){return this.debug(`closeable()  force:${t}  hasHover:${this.state.hasHover}  searchFocus:${this.state.searchFocus}`),t||!(this.state.hasHover||this.state.searchFocus)}menuOptions(){return this.state.options}},xe(_t,"debug",!1),xe(_t,"debugPrefix","Select > "),xe(_t,"debugColor","MediumVioletRed"),xe(_t,"defaultProps",{..._t.defaultProps,options:[],search:!1,findOption:Qb,validOption:Ds,searchOptions:qb,displayValue:mi("displayValue"),displayOption:mi("displayOption")}),xe(_t,"inactiveState",{isOpen:!1,selected:void 0,searchInput:void 0}),xe(_t,"initialState",{value:zl,cursor:void 0,..._t.inactiveState}),xe(_t,"initialProps",{}),xe(_t,"actions",["onFocus","onBlur","onClick","onKeyDown","open","close","setCursor","selectCursor","selectOption","menuRef","activeRef","searchRef","focusSearch","blurSearch","setSearch","clearSearch"]),_t);const io=Tr(Rk),Lk=({input:e,onFocus:t,onBlur:n,onClick:o,placeholder:a="Select",placeholderClass:s="placeholder",inputsClass:l="inputs",inputClass:i="input",suffixClass:c="suffix",disabled:d})=>r.jsxs("div",{className:l,onClick:o,children:[r.jsx("div",{onFocus:t,onBlur:n,disabled:d,className:i,tabIndex:0,children:je(e)?r.jsx(r.Fragment,{children:e}):r.jsx("span",{className:s,children:a})}),r.jsx("div",{className:c,children:r.jsx(ee,{name:"angle-down"})})]}),Dk=io.Consumer(Lk),Ok=({option:e,active:t,activeRef:n,selected:o,onClick:a,onMouseEnter:s,validOption:l,displayOption:i,optionClass:c="item no-hover",activeClass:d="active",selectedClass:u="selected",disabledClass:p="disabled"})=>r.jsx("div",{className:Se(c,e.className,t?d:null,o?u:null,l(e)?null:p),onMouseEnter:s,onClick:a,ref:t?n:null,"aria-disabled":e.disabled,children:i(e)}),Ak=io.Consumer(Ok),Mk=({noOptionsClass:e="none",noOptions:t="No options"})=>r.jsx("div",{className:e,children:t}),Pk=io.Consumer(Mk),$k=({options:e,menuRef:t,menuClass:n="menu border bdr-1",cursor:o,selected:a,selectOption:s,setCursor:l,Option:i=Ak,NoOptions:c=Pk})=>r.jsx("div",{className:n,ref:t,children:qo(e)&&e.length?e.map((d,u)=>r.jsx(i,{option:d,active:je(o)&&e[o]===d,selected:a===d,onClick:()=>s(d),onMouseEnter:()=>l(u)},d.id??d.value??u)):r.jsx(c,{})}),Bk=io.Consumer($k),Ik=({searchInput:e,focusSearch:t,blurSearch:n,searchRef:o,setSearch:a,clearSearch:s,searchPlaceholder:l="Search",searchFieldClass:i="search field",searchInputsClass:c="inputs",searchPrefixClass:d="shaded lined prefix",searchSuffixClass:u="shaded lined suffix",searchClearClass:p="clear",inputClass:m,searchIcon:y="search",clearSearchIcon:C="cross"})=>r.jsx("div",{className:i,children:r.jsxs("div",{className:c,children:[r.jsx("div",{className:d,children:r.jsx(ee,{name:y})}),r.jsx("input",{ref:o,className:m,type:"text",placeholder:l,value:e??"",onClick:b=>b.stopPropagation(),onChange:b=>a(b.target.value),onFocus:t,onBlur:n,autoComplete:"chrome-is-broken",tabIndex:"0"}),r.jsx("div",{className:Se(u,e?p:null),onClick:s,children:r.jsx(ee,{name:C})})]})}),zk=io.Consumer(Ik),Fk=({onKeyDown:e,isOpen:t,search:n,selectClass:o="select",openClass:a="open",closedClass:s="closed",Input:l=Dk,Search:i=zk,Menu:c=Bk})=>r.jsxs("div",{className:Se(o,t?a:s),onKeyDown:e,children:[r.jsx(l,{}),!!t&&!!n&&r.jsx(i,{}),!!t&&r.jsx(c,{})]}),Hk=io.Consumer(Fk),Uk=({Content:e=Hk,...t})=>r.jsx(io.Provider,{...t,children:r.jsx(e,{})}),Rr=ve(Uk,"Select"),Vk=({...e})=>r.jsx(Qp,{modifiers:[t_,wx,Xp],strategy:Iw,...e}),u1=(e,t)=>[e.length?"-"+e.join("-"):"",t.length?"."+t.join("."):""].join(""),p1=(e,t,n,o,a,s)=>{n?(t.push(`stc-${a}`,`std-${s}`),k3(n)?o&&e.push(`strokeWidth=${o}`):e.push(n)):e.push("stroke=none")},f1=(e,t,n,o,a)=>{n?t.push(`flc-${o}`,`fld-${a}`):e.push("fill=none")},Z=({size:e,className:t,icon:n="cog",color:o="brand",stroke:a=!0,strokeWidth:s,strokeStop:l=40,strokeStopDark:i=50,fill:c=!1,fillStop:d=50,fillStopDark:u=20,bgIcon:p=!1,bgColor:m=o,bgStroke:y=!1,bgStrokeWidth:C,bgStrokeStop:b=60,bgStrokeStopDark:_=70,bgFill:g=!0,bgFillStop:f=70,bgFillStopDark:h=30,shrink:j=p?5:0,reverse:S=!1,animation:x=S?"spin.reverse":"spin"})=>{const w=Se(e,t),T=[],E=[m],D=[],M=[o,x];p1(T,E,y,C,b,_),p1(D,M,a,s,l,i),f1(T,E,g,f,h),f1(D,M,c,d,u),j&&D.push(`shrink=${j}`);const K=p?`${p}${u1(T,E)}`:"",X=`${n}${u1(D,M)}`,Q=p?`${K} ${X}`:X;return r.jsx(ee,{name:Q,className:w})},Wk=()=>r.jsxs(J,{children:[r.jsx("h3",{children:"Hello World!"}),"This is an alert."]}),Zk=`import React from 'react'
import { Alert } from '@/src/index.jsx'

{/* START */}
// PRETEND: import { Alert } from '@abw/badger-react-ui'

const AlertExample = () =>
  <Alert>
    <h3>Hello World!</h3>
    This is an alert.
  </Alert>

export default AlertExample
`,Kk=["red","brown","orange","yellow","olive","green","teal","blue","indigo","violet","purple","pink","maroon"],kx=({color:e,setColor:t,disabled:n=!1})=>r.jsxs("select",{name:"color",required:!0,value:e,onChange:o=>t(o.target.value),disabled:n,children:[r.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Select Range"}),r.jsx("option",{value:"",children:"Default"}),Kk.map(o=>r.jsx("option",{value:o,children:o},o))]}),Yk=["smallest","smaller","small","medium","large","larger","largest","x2","x3","x4","x5","x6","x7","x8","x9","x10"],Tx=({size:e,setSize:t})=>r.jsxs("select",{name:"size",required:!0,value:e,onChange:n=>t(n.target.value),children:[r.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Size"}),r.jsx("option",{value:"",children:"Default"}),Yk.map(n=>r.jsx("option",{value:n,children:n},n))]}),Gk=[0,1,2,3,4,5,6,8,10],Xk=({radius:e,setRadius:t})=>r.jsxs("select",{name:"radius",required:!0,value:e,onChange:n=>t(n.target.value),children:[r.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Radius"}),r.jsx("option",{value:"",children:"Default"}),Gk.map(n=>r.jsx("option",{value:n,children:n},n))]}),Qk=[1,2,3,4,5],qk=({shadow:e,setShadow:t})=>r.jsxs("select",{name:"shadow",required:!0,value:e,onChange:n=>t(n.target.value),children:[r.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Shadow"}),r.jsx("option",{value:"",children:"Default"}),Qk.map(n=>r.jsx("option",{value:n,children:n},n))]}),h1=({checked:e,toggle:t,label:n,disabled:o=!1})=>r.jsxs("label",{className:"checkbox border no-focus",children:[r.jsx("input",{type:"checkbox",checked:e,onChange:t,disabled:o}),n]}),Jk=[0,1,2,3,4,5,6,8,10],eT=({border:e,setBorder:t,disabled:n=!1})=>r.jsxs("select",{name:"border",required:!0,value:e,onChange:o=>t(o.target.value),disabled:n,children:[r.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Border"}),r.jsx("option",{value:"",children:"Default"}),Jk.map(o=>r.jsx("option",{value:o,children:o},o))]}),tT=Object.keys(Ts.icons),ou=({icon:e,setIcon:t,disabled:n=!1})=>r.jsxs("select",{name:"icon",required:!0,value:e,onChange:o=>t(o.target.value),disabled:n,children:[r.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Icon"}),r.jsx("option",{value:"",children:"None"}),tT.map(o=>r.jsx("option",{value:o,children:o},o))]}),nT=()=>{const[e,t]=v.useState(0),[n,o]=v.useState({headline:"",title:"",text:"Hello World!",revealable:!1,stripe:!1}),a=c=>()=>{o(d=>({...d,[c]:!d[c]})),t(d=>d+1)},s=c=>d=>{o(u=>({...u,[c]:d})),t(u=>u+1)},i=`<Alert
  ${oT(n)}
/>`;return r.jsxs("div",{className:"example grid-2 gap-h-8 stack-desktop",children:[r.jsxs("div",{children:[r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Output"}),r.jsx("div",{className:"output mar-b-8",children:r.jsx(aT,{options:n},e)})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Markup"}),r.jsx(An,{code:i,language:"html",expand:!0})]})]}),r.jsx(rT,{options:n,setOption:s,toggleOption:a})]})},rT=({options:e,toggleOption:t,setOption:n})=>{const o=n("headline"),a=n("title"),s=n("text"),l=n("type"),i=n("size"),c=n("color"),d=n("border"),u=n("radius"),p=n("shadow"),m=n("icon"),y=n("headicon"),C=t("stripe"),b=t("revealable");return r.jsxs("div",{children:[r.jsx(Yc,{label:"Headline",value:e.headline,setValue:o}),r.jsx(Yc,{label:"Title",value:e.title,setValue:a}),r.jsx(Yc,{label:"Text",value:e.text,setValue:s}),r.jsxs("div",{className:"grid-2 gap-h-4 stack-mobile top",children:[r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Type"}),r.jsx(sT,{type:e.type,setType:l})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Color"}),r.jsx(kx,{color:e.color,setColor:c,disabled:e.type})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Size"}),r.jsx(Tx,{size:e.size,setSize:i})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Shadow"}),r.jsx(qk,{shadow:e.shadow,setShadow:p})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Border Width"}),r.jsx(eT,{border:e.border,setBorder:d,disabled:e.stripe})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Border Radius"}),r.jsx(Xk,{radius:e.radius,setRadius:u})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Headline Icon"}),r.jsx(ou,{icon:e.headicon,setIcon:y,disabled:!e.headline})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Body Icon"}),r.jsx(ou,{icons:e.icon,setIcon:m})]})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Options"}),r.jsxs("div",{className:"grid-2 gap-h-4 stack-mobile top",children:[r.jsx(h1,{checked:e.stripe,toggle:C,label:"Stripe"}),r.jsx(h1,{checked:e.revealable,toggle:b,label:"Revealable",disabled:!e.headline})]})]})]})},oT=e=>{const t=["headline","title","text","type","color","size","headicon","icon"].filter(a=>e[a]).map(a=>`${a}="${e[a]}"`),n=["shadow","border","radius"].filter(a=>e[a]).map(a=>`${a}={${e[a]}}`),o=["stripe","revealable","dismissable"].filter(a=>e[a]);return[...t,...n,...o].join(`
  `)},aT=({options:e})=>r.jsx(J,{...e}),sT=({type:e,setType:t})=>r.jsxs("select",{name:"type",required:!0,value:e,onChange:n=>t(n.target.value),children:[r.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Type"}),r.jsx("option",{value:"",children:"Default"}),["info","warning","success","error"].map(n=>r.jsx("option",{value:n,children:n},n))]}),Yc=({label:e,value:t,setValue:n})=>r.jsxs("div",{className:"field",children:[r.jsx("label",{children:e}),r.jsxs("div",{className:"inputs",children:[r.jsx("input",{type:"text",name:"headline",value:t,onChange:o=>n(o.target.value)}),r.jsx("div",{className:"suffix",children:r.jsx(ee,{name:"cross",className:"hover",onClick:()=>n("")})})]})]}),Ex=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["Use the ",r.jsx("code",{children:"Alert"})," component to render an alert. Any child elements will be rendered inside the alert body."]}),r.jsx(pe,{Component:Wk,code:Zk,expand:!0}),r.jsx("h2",{children:"Demo"}),r.jsx(nT,{})]}),lT=Object.freeze(Object.defineProperty({__proto__:null,default:Ex},Symbol.toStringTag,{value:"Module"})),qp=e=>e.replaceAll(/\W+/g,"-").replace(/^-+/,"").replace(/-+$/,"").toLowerCase(),iT=({render:e})=>{const[t,n]=v.useState({}),o=v.useRef();return e({tocs:t,addToc:(l,i,c,d)=>{const u=t[l]||(t[l]={});u[i]={text:c,ref:d},n({...t})},addTocHeading:(l,i,c,d)=>{const u=t[l]||(t[l]={});u[i]={heading:c,ref:d},n({...t})},contentRef:o})},Is=Tr(iT),cT=({addToc:e,addTocHeading:t,tocName:n,render:o})=>o({addPageToc:(l,i,c)=>{e(n,l,i,c)},addPageTocHeading:(l,i,c)=>{t(n,l,i,c)}}),Jp=Tr(Is.Consumer(cT)),dT=({id:e,code:t,title:n=t,children:o,addPageToc:a,split:s})=>{const l=qp(e||t||n),i=v.useRef(),c=t?`code:${t}`:n;return v.useEffect(()=>{a&&a(l,c,i)},[e,t,n]),r.jsxs("section",{id:l,ref:i,children:[r.jsx("h3",{className:t?"font-mono page-section":"page-section",children:n}),r.jsx("div",{className:s?"cols-2 stack-desktop":"",children:o})]})},U=Jp.Consumer(dT),R=({Component:e,Source:t,children:n,code:o,title:a,caption:s=o?r.jsx("code",{children:o}):a,expand:l,undent:i,lineProps:c,highlightLines:d,...u})=>r.jsxs(U,{code:o,title:a,...u,children:[r.jsx("div",{className:"cols-2 stack-desktop mar-b-4",children:n}),r.jsx(pe,{Component:e,code:t,caption:s,expand:l,undent:i,highlightLines:d,lineProps:c})]}),uT=()=>r.jsxs("div",{children:[r.jsx(Aa,{text:"Error alert"}),r.jsx(Aa,{text:"Error alert with border",border:!0}),r.jsx(Aa,{headline:"Error Alert",text:"Error alert with headline",border:!0,shadow:!0}),r.jsx(Aa,{title:"Stonehenge",text:"Crushed by a dwarf",icon:"exclamation-thick",stripe:!0,shadow:3})]}),pT=`import React from 'react'
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
`,Nx=()=>r.jsx(R,{code:"Error",Component:uT,Source:pT,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"Error"})," component is a short-cut to generate an error alert."]})}),fT=Object.freeze(Object.defineProperty({__proto__:null,default:Nx},Symbol.toStringTag,{value:"Module"})),hT=()=>r.jsxs("div",{children:[r.jsx(La,{text:"Info alert"}),r.jsx(La,{text:"Info alert with border",border:!0}),r.jsx(La,{headline:"Info Alert",text:"Info alert with headline",border:!0,shadow:!0}),r.jsx(La,{title:"Stonehenge",text:"Where the demons dwell",icon:"info",stripe:!0,shadow:3})]}),mT=`import React from 'react'
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
`,Rx=()=>r.jsx(R,{code:"Info",Component:hT,Source:mT,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"Info"})," component is a short-cut to generate an info alert."]})}),xT=Object.freeze(Object.defineProperty({__proto__:null,default:Rx},Symbol.toStringTag,{value:"Module"})),gT=()=>r.jsxs("div",{children:[r.jsx(Da,{text:"Success alert"}),r.jsx(Da,{text:"Success alert with border",border:!0}),r.jsx(Da,{headline:"Success Alert",text:"Success alert with headline",border:!0,shadow:!0}),r.jsx(Da,{title:"Stonehenge",text:"Where the banshees live...",icon:"check-thicker-shrink=4",stripe:!0,shadow:3})]}),vT=`import React from 'react'
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
`,Lx=()=>r.jsx(R,{code:"Success",Component:gT,Source:vT,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"Success"})," component is a short-cut to generate a success alert."]})}),yT=Object.freeze(Object.defineProperty({__proto__:null,default:Lx},Symbol.toStringTag,{value:"Module"})),jT=()=>r.jsxs("div",{children:[r.jsx(Oa,{text:"Warning alert"}),r.jsx(Oa,{text:"Warning alert with border",border:!0}),r.jsx(Oa,{headline:"Warning Alert",text:"Warning alert with headline",border:!0,shadow:!0}),r.jsx(Oa,{title:"Stonehenge",text:"...and they do live well",icon:"exclamation-thick",stripe:!0,shadow:3})]}),bT=`import React from 'react'
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
`,Dx=()=>r.jsx(R,{code:"Warning",Component:jT,Source:bT,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"Warning"})," component is a short-cut to generate a warning alert."]})}),CT=Object.freeze(Object.defineProperty({__proto__:null,default:Dx},Symbol.toStringTag,{value:"Module"})),ST=()=>r.jsxs("div",{children:[r.jsx(J,{text:"Border Alert",border:!0}),r.jsx(J,{text:"Border Width 2",border:2})]}),wT=`import React from 'react'
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
`,Ox=()=>r.jsx(R,{code:"border",Component:ST,Source:wT,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"border"})," property can be used to add a border.  This can be a number to indicate the border width."]})}),_T=Object.freeze(Object.defineProperty({__proto__:null,default:Ox},Symbol.toStringTag,{value:"Module"})),kT=()=>r.jsx(J,{text:"Hello World!",className:"border shadow-2"}),TT=`import React from 'react'
import { Alert } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Alert
    text="Hello World!"
    className="border shadow-2"
  />
/* END */

export default Component
`,Ax=()=>r.jsx(R,{code:"className",Component:kT,Source:TT,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"className"})," property can be used to set a CSS class."]})}),ET=Object.freeze(Object.defineProperty({__proto__:null,default:Ax},Symbol.toStringTag,{value:"Module"})),NT=()=>r.jsxs("div",{children:[r.jsx(J,{text:"Red Alert",color:"red"}),r.jsx(J,{text:"Brown Alert",color:"brown"}),r.jsx(J,{text:"Orange Alert",color:"orange"}),r.jsx(J,{text:"Yellow Alert",color:"yellow"}),r.jsx(J,{text:"Green Alert",color:"green"}),r.jsx(J,{text:"Teal Alert",color:"teal"}),r.jsx(J,{text:"Blue Alert",color:"blue"}),r.jsx(J,{text:"Indigo Alert",color:"indigo"}),r.jsx(J,{text:"Violet Alert",color:"violet"}),r.jsx(J,{text:"Purple Alert",color:"purple"}),r.jsx(J,{text:"Pink Alert",color:"pink"}),r.jsx(J,{text:"Maroon Alert",color:"maroon"})]}),RT=`import React from 'react'
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
`,Mx=()=>r.jsx(R,{code:"color",Component:NT,Source:RT,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"color"})," property can be used to set the color range used for the alert."]})}),LT=Object.freeze(Object.defineProperty({__proto__:null,default:Mx},Symbol.toStringTag,{value:"Module"})),DT=()=>r.jsx(J,{headline:"Dismissable Alert",text:"A dismissable alert",dismissable:!0}),OT=`import React from 'react'
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
`,Px=()=>r.jsx(R,{code:"dismissable",Component:DT,Source:OT,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"dismissable"})," property can be used to make an alert dismissable."]})}),AT=Object.freeze(Object.defineProperty({__proto__:null,default:Px},Symbol.toStringTag,{value:"Module"})),MT=()=>r.jsx(J,{headline:"Headline Icon Alert",headIcon:"bars",text:"An alert with a headline icon"}),PT=`import React from 'react'
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
`,$x=()=>r.jsx(R,{code:"headicon",Component:MT,Source:PT,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"headIcon"})," property can be used to add an icon to the headline."]})}),$T=Object.freeze(Object.defineProperty({__proto__:null,default:$x},Symbol.toStringTag,{value:"Module"})),BT=()=>r.jsx(J,{headline:"Headline Alert",text:"An alert with a headline"}),IT=`import React from 'react'
import { Alert } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Alert
    headline="Headline Alert"
    text="An alert with a headline"
  />
/* END */

export default Component
`,Bx=()=>r.jsx(R,{code:"headline",Component:BT,Source:IT,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"headline"})," property can be used to set a headline."]})}),zT=Object.freeze(Object.defineProperty({__proto__:null,default:Bx},Symbol.toStringTag,{value:"Module"})),FT=()=>r.jsxs("div",{children:[r.jsx(J,{icon:"info",type:"info",title:"Eleven",text:"It's one louder"}),r.jsx(J,{icon:"check",type:"success",title:"Eleven",text:"It's one louder"}),r.jsx(J,{icon:"exclamation",type:"error",title:"Eleven",text:"It's one louder"})]}),HT=`import React from 'react'
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
`,Ix=()=>r.jsx(R,{code:"icon",Component:FT,Source:HT,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"icon"})," property can be used to add an icon to the body."]})}),UT=Object.freeze(Object.defineProperty({__proto__:null,default:Ix},Symbol.toStringTag,{value:"Module"})),VT=()=>r.jsx(J,{headline:"Dismissable Alert",text:"A dismissable alert",onDismiss:()=>window.alert("Bye!"),dismissable:!0}),WT=`import React from 'react'
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
`,zx=()=>r.jsx(R,{code:"onDismiss",Component:VT,Source:WT,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"onDismiss"})," property can be used to register a function which will be called when the alert is dismissed."]})}),ZT=Object.freeze(Object.defineProperty({__proto__:null,default:zx},Symbol.toStringTag,{value:"Module"})),KT=()=>r.jsx(J,{text:"Radius Alert",radius:4}),YT=`import React from 'react'
import { Alert } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Alert
    text="Radius Alert"
    radius={4}
  />
/* END */

export default Component
`,Fx=()=>r.jsx(R,{code:"radius",Component:KT,Source:YT,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"radius"})," property can be used to set the border radius."]})}),GT=Object.freeze(Object.defineProperty({__proto__:null,default:Fx},Symbol.toStringTag,{value:"Module"})),XT=()=>r.jsx(J,{headline:"Revealable Alert",text:"A revealable alert",revealable:!0}),QT=`import React from 'react'
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
`,Hx=()=>r.jsx(R,{code:"revealable",Component:XT,Source:QT,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"revealable"})," property can be used to make the alert revealable."]})}),qT=Object.freeze(Object.defineProperty({__proto__:null,default:Hx},Symbol.toStringTag,{value:"Module"})),JT=()=>r.jsx(J,{headline:"Revealed Alert",text:"A revealed alert",revealable:!0,revealed:!0}),eE=`import React from 'react'
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
`,Ux=()=>r.jsx(R,{code:"revealed",Component:JT,Source:eE,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"revealed"})," property can be set to make it a revealable alert initially revealed."]})}),tE=Object.freeze(Object.defineProperty({__proto__:null,default:Ux},Symbol.toStringTag,{value:"Module"})),nE=()=>r.jsxs("div",{children:[r.jsx(J,{text:"Alert With Default Shadow (1)",shadow:!0}),r.jsx(J,{text:"Alert With Shadow 2",shadow:2}),r.jsx(J,{text:"Alert With Shadow 3",shadow:3}),r.jsx(J,{text:"Alert With Shadow 4",shadow:4}),r.jsx(J,{text:"Alert With Shadow 5",shadow:5})]}),rE=`import React from 'react'
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
`,Vx=()=>r.jsx(R,{code:"shadow",Component:nE,Source:rE,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"shadow"})," property can be used to add a shadow.  The default value is 1 or you can set it to any number from"," ","1 to 5."]})}),oE=Object.freeze(Object.defineProperty({__proto__:null,default:Vx},Symbol.toStringTag,{value:"Module"})),aE=()=>r.jsxs("div",{children:[r.jsx(J,{text:"Smallest Alert",size:"smallest"}),r.jsx(J,{text:"Smaller Alert",size:"smaller"}),r.jsx(J,{text:"Small Alert",size:"small"}),r.jsx(J,{text:"Medium Alert",size:"medium"}),r.jsx(J,{text:"Large Alert",size:"large"}),r.jsx(J,{text:"Larger Alert",size:"larger"}),r.jsx(J,{text:"Largest Alert",size:"largest"})]}),sE=`import React from 'react'
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
`,Wx=()=>r.jsx(R,{code:"size",Component:aE,Source:sE,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"size"})," property can be used to set the text size."]})}),lE=Object.freeze(Object.defineProperty({__proto__:null,default:Wx},Symbol.toStringTag,{value:"Module"})),iE=()=>r.jsxs("div",{children:[r.jsx(J,{text:"Stripe Alert",stripe:!0,shadow:4}),r.jsx(J,{text:"Info Stripe Alert",type:"info",stripe:!0,shadow:4}),r.jsx(J,{text:"Success Stripe Alert",type:"success",stripe:!0,shadow:4}),r.jsx(J,{text:"Warning Stripe Alert",type:"warning",stripe:!0,shadow:4}),r.jsx(J,{text:"Error Stripe Alert",type:"error",stripe:!0,shadow:4})]}),cE=`import React from 'react'
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
`,Zx=()=>r.jsx(R,{code:"stripe",Component:iE,Source:cE,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"stripe"})," property can be set as a short-cut to add the"," ",r.jsx("code",{children:"stripe"})," CSS class for a more minimal look."]})}),dE=Object.freeze(Object.defineProperty({__proto__:null,default:Zx},Symbol.toStringTag,{value:"Module"})),uE=()=>r.jsx(J,{text:"Hello World!"}),pE=`import React from 'react'
import { Alert } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Alert text="Hello World!"/>
/* END */

export default Component`,Kx=()=>r.jsx(R,{code:"text",Component:uE,Source:pE,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"text"})," property can be used to set the body text."]})}),fE=Object.freeze(Object.defineProperty({__proto__:null,default:Kx},Symbol.toStringTag,{value:"Module"})),hE=()=>r.jsx(J,{title:"Hello World!",children:"This is an alert"}),mE=`import React from 'react'
import { Alert } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Alert title="Hello World!">
    This is an alert
  </Alert>
/* END */

export default Component`,Yx=()=>r.jsx(R,{code:"title",Component:hE,Source:mE,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"title"})," property can be used to set a title."]})}),xE=Object.freeze(Object.defineProperty({__proto__:null,default:Yx},Symbol.toStringTag,{value:"Module"})),gE=()=>r.jsxs("div",{children:[r.jsx(J,{text:"Info Alert",type:"info"}),r.jsx(J,{text:"Success Alert",type:"success"}),r.jsx(J,{text:"Warning Alert",type:"warning"}),r.jsx(J,{text:"Error Alert",type:"error"})]}),vE=`import React from 'react'
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
`,Gx=()=>r.jsx(R,{code:"type",Component:gE,Source:vE,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"type"})," property can be used to set it to one of the pre-defined types: ",r.jsx("code",{children:"info"}),", ",r.jsx("code",{children:"success"}),","," ",r.jsx("code",{children:"warning"})," or ",r.jsx("code",{children:"error"}),"."]})}),yE=Object.freeze(Object.defineProperty({__proto__:null,default:Gx},Symbol.toStringTag,{value:"Module"})),rt=({tocName:e,children:t})=>r.jsx(Jp.Provider,{tocName:e,children:t}),jE=({id:e,title:t,addPageTocHeading:n})=>{const o=qp(e||t),a=v.useRef();return v.useEffect(()=>{n&&n(o,t,a)},[e,t]),r.jsx("h2",{id:o,ref:a,className:"section-heading",children:t})},ce=Jp.Consumer(jE),bE=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Alert"}),r.jsx(Ex,{}),r.jsxs(rt,{tocName:"alert",children:[r.jsx(ce,{title:"Properties"}),r.jsx(Yx,{}),r.jsx(Kx,{}),r.jsx(Bx,{}),r.jsx($x,{}),r.jsx(Hx,{}),r.jsx(Ux,{}),r.jsx(Px,{}),r.jsx(zx,{}),r.jsx(Ax,{}),r.jsx(Ox,{}),r.jsx(Fx,{}),r.jsx(Vx,{}),r.jsx(Wx,{}),r.jsx(Mx,{}),r.jsx(Gx,{}),r.jsx(Zx,{}),r.jsx(Ix,{}),r.jsx(ce,{title:"Components"}),r.jsx(Rx,{}),r.jsx(Lx,{}),r.jsx(Dx,{}),r.jsx(Nx,{})]})]}),CE=Object.freeze(Object.defineProperty({__proto__:null,default:bE},Symbol.toStringTag,{value:"Module"})),SE=()=>r.jsx(A,{children:"This is a button"}),wE=`import React from 'react'
import { Button } from '@/src/index.jsx'

{/* START */}
// PRETEND: import { Button } from '@abw/badger-react-ui'

const ButtonExample = () =>
  <Button>
    This is a button
  </Button>

export default ButtonExample
`,Xx=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Button"})," component can be used to render a button. Any child elements will be included as content."]}),r.jsxs("p",{className:"cols-2 stack-desktop",children:["There are numerous properties listed below that are typically used as shortcuts to set particular CSS styles.  Any other properties not listed here are forwarded to the ",r.jsx("code",{children:"button"})," component."]}),r.jsx(pe,{Component:SE,code:wE,expand:!0})]}),_E=Object.freeze(Object.defineProperty({__proto__:null,default:Xx},Symbol.toStringTag,{value:"Module"})),kE=()=>r.jsx(A,{text:"Custom Button Content",Content:({text:e})=>r.jsxs("span",{className:"pad-4",children:["😀 ",e]})}),TE=`import React from 'react'
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
`,Qx=()=>r.jsxs(R,{code:"Content",Component:kE,Source:TE,undent:2,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"Content"})," property (note the capital C) can be used to provide an alternate component to render the button content. By default it uses ",r.jsx("code",{children:"WithIcons"})," to render the button text with optional icons."]}),r.jsxs("p",{children:["If you want to change the way that button content is generated on a global level then you can use the theming engine to define a different ",r.jsx("code",{children:"Content"})," component for all buttons."]})]}),EE=Object.freeze(Object.defineProperty({__proto__:null,default:Qx},Symbol.toStringTag,{value:"Module"})),NE=()=>r.jsxs("div",{className:"flex wrap gap-4",children:[r.jsx(A,{text:"Red Bare",color:"red",bare:!0}),r.jsx(A,{text:"Green Bare",color:"green",bare:!0}),r.jsx(A,{text:"Blue Bare",color:"blue",bare:!0})]}),RE=`import React from 'react'
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
`,qx=()=>r.jsx(R,{code:"bare",Component:NE,Source:RE,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"bare"})," property can be added for bare naked buttons."]})}),LE=Object.freeze(Object.defineProperty({__proto__:null,default:qx},Symbol.toStringTag,{value:"Module"})),DE=()=>r.jsxs("div",{className:"flex middle wrap gap-4",children:[r.jsx(A,{text:"Border 2",color:"red",outline:!0,border:2}),r.jsx(A,{text:"Border 3",color:"brown",outline:!0,border:3}),r.jsx(A,{text:"Border 4",color:"orange",outline:!0,border:4}),r.jsx(A,{text:"Border 5",color:"yellow",outline:!0,border:5})]}),OE=`import React from 'react'
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
`,Jx=()=>r.jsx(R,{code:"border",Component:DE,Source:OE,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"border"})," property can be used to set the border width. This is only really noticeable on outline buttons.  There is a border around solid buttons (mainly to help in matching the height of other form inputs), although it's the same color as the background."]})}),AE=Object.freeze(Object.defineProperty({__proto__:null,default:Jx},Symbol.toStringTag,{value:"Module"})),ME=()=>r.jsxs("div",{className:"flex wrap gap-4",children:[r.jsx(A,{text:"Yellow Button",color:"yellow"}),r.jsx(A,{text:"Bright Yellow Button",color:"yellow",bright:!0})]}),PE=`import React from 'react'
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
`,eg=()=>r.jsx(R,{code:"bright",Component:ME,Source:PE,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"bright"})," property can be added to make the buttons brighter than normal."]})}),$E=Object.freeze(Object.defineProperty({__proto__:null,default:eg},Symbol.toStringTag,{value:"Module"})),BE=()=>r.jsx(A,{text:"Custom Button",className:"red bdw-2 bdr-4 bgc-80 fgc-20 bgd-20 fgd-80"}),IE=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    text="Custom Button"
    className="red bdw-2 bdr-4 bgc-80 fgc-20 bgd-20 fgd-80"
  />
/* END */

export default Component
`,tg=()=>r.jsx(R,{code:"className",Component:BE,Source:IE,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"className"})," property can be added to add a CSS class to the button."]})}),zE=Object.freeze(Object.defineProperty({__proto__:null,default:tg},Symbol.toStringTag,{value:"Module"})),FE=()=>r.jsxs("div",{className:"grid-2 gap-4 stack-tablet",children:[r.jsx(A,{text:"Red Button",color:"red"}),r.jsx(A,{text:"Brown Button",color:"brown"}),r.jsx(A,{text:"Orange Button",color:"orange"}),r.jsx(A,{text:"Yellow Button",color:"yellow"}),r.jsx(A,{text:"Green Button",color:"green"}),r.jsx(A,{text:"Teal Button",color:"teal"}),r.jsx(A,{text:"Blue Button",color:"blue"}),r.jsx(A,{text:"Indigo Button",color:"indigo"}),r.jsx(A,{text:"Violet Button",color:"violet"}),r.jsx(A,{text:"Purple Button",color:"purple"}),r.jsx(A,{text:"Pink Button",color:"pink"}),r.jsx(A,{text:"Maroon Button",color:"maroon"})]}),HE=`import React from 'react'
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
`,ng=()=>r.jsx(R,{code:"color",Component:FE,Source:HE,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"color"})," property can be used to set the color range used for the button."]})}),UE=Object.freeze(Object.defineProperty({__proto__:null,default:ng},Symbol.toStringTag,{value:"Module"})),VE=()=>r.jsxs("div",{className:"flex wrap gap-4",children:[r.jsx(A,{text:"Red Button",color:"red"}),r.jsx(A,{text:"Dark Red Button",color:"red",dark:!0})]}),WE=`import React from 'react'
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
`,rg=()=>r.jsx(R,{code:"dark",Component:VE,Source:WE,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"dark"})," property can be added to make the buttons darker than normal."]})}),ZE=Object.freeze(Object.defineProperty({__proto__:null,default:rg},Symbol.toStringTag,{value:"Module"})),KE=()=>r.jsx(A,{text:"Disabled Button",disabled:!0}),YE=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    text="Disabled Button"
    disabled
  />
/* END */

export default Component
`,og=()=>r.jsx(R,{code:"disabled",Component:KE,Source:YE,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"disabled"})," property can be set to disable a button."]})}),GE=Object.freeze(Object.defineProperty({__proto__:null,default:og},Symbol.toStringTag,{value:"Module"})),XE=()=>r.jsx(A,{color:"green",icon:"bars"}),QE=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    color="green"
    icon="bars"
  />
/* END */

export default Component
`,ag=()=>r.jsx(R,{code:"icon",Component:XE,Source:QE,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"icon"})," property can be used to add an icon to a button."]})}),qE=Object.freeze(Object.defineProperty({__proto__:null,default:ag},Symbol.toStringTag,{value:"Module"})),JE=()=>r.jsx(A,{color:"green",text:"Back",iconLeft:"angle-left"}),eN=`import React from 'react'
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
`,sg=()=>r.jsx(R,{code:"iconLeft",Component:JE,Source:eN,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"iconLeft"})," property can be used to add an icon to the left side of a button."]})}),tN=Object.freeze(Object.defineProperty({__proto__:null,default:sg},Symbol.toStringTag,{value:"Module"})),nN=()=>r.jsx(A,{color:"green",text:"Next",iconRight:"angle-right"}),rN=`import React from 'react'
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
`,lg=()=>r.jsx(R,{code:"iconRight",Component:nN,Source:rN,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"iconRight"})," property can be used to add an icon to the right side of a button."]})}),oN=Object.freeze(Object.defineProperty({__proto__:null,default:lg},Symbol.toStringTag,{value:"Module"})),aN=()=>r.jsx(A,{text:"I am labelled!",label:"This is a label"}),sN=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    text="I am labelled!"
    label="This is a label"
  />
/* END */

export default Component
`,ig=()=>r.jsx(R,{code:"label",Component:aN,Source:sN,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"label"})," property can be used to set the",r.jsx("code",{children:"aria-label"})," property on the button.  This typically doesn't have any visual effect on the button, but is used by screen readers to provide more detail about the functionality of the button."]})}),lN=Object.freeze(Object.defineProperty({__proto__:null,default:ig},Symbol.toStringTag,{value:"Module"})),iN=()=>r.jsx(A,{text:"Click Me!",onClick:()=>window.alert("Click!")}),cN=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    text="Click Me!"
    onClick={() => window.alert('Click!')}
  />
/* END */

export default Component
`,cg=()=>r.jsx(R,{code:"onClick",Component:iN,Source:cN,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"onClick"})," property can be used to register a function which will be called when the button is clicked."]})}),dN=Object.freeze(Object.defineProperty({__proto__:null,default:cg},Symbol.toStringTag,{value:"Module"})),uN=()=>r.jsxs("div",{className:"flex wrap gap-4",children:[r.jsx(A,{text:"Red Outline",color:"red",outline:!0}),r.jsx(A,{text:"Green Outline",color:"green",outline:!0}),r.jsx(A,{text:"Blue Outline",color:"blue",outline:!0})]}),pN=`import React from 'react'
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
`,dg=()=>r.jsx(R,{code:"outline",Component:uN,Source:pN,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"outline"})," property can be added for outline buttons."]})}),fN=Object.freeze(Object.defineProperty({__proto__:null,default:dg},Symbol.toStringTag,{value:"Module"})),hN=()=>r.jsxs("div",{className:"flex middle wrap gap-4",children:[r.jsx(A,{text:"Radius 0",color:"olive",radius:0}),r.jsx(A,{text:"Radius 2",color:"green",radius:2}),r.jsx(A,{text:"Radius 4",color:"teal",radius:3}),r.jsx(A,{text:"Radius 6",color:"blue",radius:4})]}),mN=`import React from 'react'
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
`,ug=()=>r.jsx(R,{code:"radius",Component:hN,Source:mN,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"radius"})," property can be used to set the border radius in multiples of the base unit: 0.25rem."]})}),xN=Object.freeze(Object.defineProperty({__proto__:null,default:ug},Symbol.toStringTag,{value:"Module"})),gN=()=>r.jsxs("div",{className:"flex wrap gap-4",children:[r.jsx(A,{text:"Red Shaded",color:"red",shaded:!0}),r.jsx(A,{text:"Green Shaded",color:"green",shaded:!0}),r.jsx(A,{text:"Blue Shaded",color:"blue",shaded:!0})]}),vN=`import React from 'react'
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
`,pg=()=>r.jsx(R,{code:"shaded",Component:gN,Source:vN,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"shaded"})," property can be added for shaded buttons."]})}),yN=Object.freeze(Object.defineProperty({__proto__:null,default:pg},Symbol.toStringTag,{value:"Module"})),jN=()=>r.jsxs("div",{className:"flex middle wrap gap-4",children:[r.jsx(A,{text:"Shadow 1",color:"indigo",outline:!0,shadow:!0}),r.jsx(A,{text:"Shadow 2",color:"violet",outline:!0,shadow:2}),r.jsx(A,{text:"Shadow 3",color:"purple",outline:!0,shadow:3}),r.jsx(A,{text:"Shadow 4",color:"pink",outline:!0,shadow:4}),r.jsx(A,{text:"Shadow 5",color:"maroon",outline:!0,shadow:5})]}),bN=`import React from 'react'
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
`,fg=()=>r.jsx(R,{code:"shadow",Component:jN,Source:bN,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"shadow"})," property can be used to add a shadow to the button ranging from 1 to 5."]})}),CN=Object.freeze(Object.defineProperty({__proto__:null,default:fg},Symbol.toStringTag,{value:"Module"})),SN=()=>r.jsxs("div",{className:"flex middle wrap gap-4",children:[r.jsx(A,{text:"Smallest",size:"smallest"}),r.jsx(A,{text:"Smaller",size:"smaller"}),r.jsx(A,{text:"Small",size:"small"}),r.jsx(A,{text:"Medium",size:"medium"}),r.jsx(A,{text:"Large",size:"large"}),r.jsx(A,{text:"Larger",size:"larger"}),r.jsx(A,{text:"Largest",size:"largest"}),r.jsx(A,{text:"x3",size:"x3"}),r.jsx(A,{text:"x5",size:"x5"}),r.jsx(A,{text:"x7",size:"x7"})]}),wN=`import React from 'react'
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
`,hg=()=>r.jsx(R,{code:"size",Component:SN,Source:wN,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"size"})," property can be used to set the button size. This can be one of: ",r.jsx("code",{children:"smallest"}),", ",r.jsx("code",{children:"smaller"}),", ",r.jsx("code",{children:"small"})," ",",",r.jsx("code",{children:"medium"})," (default - same as no explicit size), ",r.jsx("code",{children:"large"})," ",",",r.jsx("code",{children:"larger"}),", ",r.jsx("code",{children:"largest"}),"; or any of the size multipliers:"," ",r.jsx("code",{children:"x2"}),", ",r.jsx("code",{children:"x3"}),", etc., up to ",r.jsx("code",{children:"x10"}),"."]})}),_N=Object.freeze(Object.defineProperty({__proto__:null,default:hg},Symbol.toStringTag,{value:"Module"})),kN=()=>r.jsx(A,{text:"Grey Button"}),TN=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button text="Grey Button"/>
/* END */

export default Component
`,mg=()=>r.jsx(R,{code:"text",Component:kN,Source:TN,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"text"})," property can be used to set the text for the button."]})}),EN=Object.freeze(Object.defineProperty({__proto__:null,default:mg},Symbol.toStringTag,{value:"Module"})),NN=()=>r.jsx(A,{text:"Tooltip",label:"This is a tooltip",tooltip:"top left"}),RN=`import React from 'react'
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
`,xg=()=>r.jsx(R,{code:"tooltip",Component:NN,Source:RN,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"tooltip"})," property can be used to set the",r.jsx("code",{children:"data-tooltip"})," property on the button.  This can be used to indicate the direction of the tooltip, e.g. ",r.jsx("code",{children:"top"}),","," ",r.jsx("code",{children:"right"}),", ",r.jsx("code",{children:"top right"}),", etc. The tooltip content should be defined using the ",r.jsx("code",{children:"label"})," property."]})}),LN=Object.freeze(Object.defineProperty({__proto__:null,default:xg},Symbol.toStringTag,{value:"Module"})),DN=()=>r.jsx(A,{text:"Grey Button",type:"submit"}),ON=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    text="Grey Button"
    type="submit"
  />
/* END */

export default Component
`,gg=()=>r.jsxs(R,{code:"type",Component:DN,Source:ON,undent:2,expand:!0,children:[r.jsxs("p",{children:["The default ",r.jsx("code",{children:"type"})," for a button is set to ",r.jsx("code",{children:"button"}),". In most cases this has no effect.  However, inside the scope of a ",r.jsx("code",{children:"form"})," element, the ",r.jsx("code",{children:"type"})," for a button would usually default to being ",r.jsx("code",{children:"submit"}),".  When clicked, the button would submit the form."]}),r.jsxs("p",{children:["This behaviour usually surprises people (it certainly catches me out from time to time).  Having an explicit default button type prevents this from happening.  When you really do want to add a button to submit a form, you should explicitly set the ",r.jsx("code",{children:"type"})," to"," ",r.jsx("code",{children:"submit"}),".  You can also set it to ",r.jsx("code",{children:"reset"})," to make a reset button for a form."]})]}),AN=Object.freeze(Object.defineProperty({__proto__:null,default:gg},Symbol.toStringTag,{value:"Module"})),MN=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Button"}),r.jsx(Xx,{}),r.jsxs(rt,{tocName:"button",children:[r.jsx(ce,{title:"Properties"}),r.jsx(mg,{}),r.jsx(cg,{}),r.jsx(og,{}),r.jsx(ng,{}),r.jsx(eg,{}),r.jsx(rg,{}),r.jsx(pg,{}),r.jsx(dg,{}),r.jsx(qx,{}),r.jsx(tg,{}),r.jsx(Jx,{}),r.jsx(ug,{}),r.jsx(fg,{}),r.jsx(hg,{}),r.jsx(ag,{}),r.jsx(sg,{}),r.jsx(lg,{}),r.jsx(ig,{}),r.jsx(xg,{}),r.jsx(gg,{}),r.jsx(ce,{title:"Components"}),r.jsx(Qx,{})]})]}),PN=Object.freeze(Object.defineProperty({__proto__:null,default:MN},Symbol.toStringTag,{value:"Module"})),$N=({text:e})=>r.jsx("span",{className:"border pad pad-h-4 mar",children:e}),BN=()=>r.jsx(lo,{buttons:[{text:"One"},{text:"Two"}],Button:$N}),IN=`import { Buttons } from '@/src/index.jsx'

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
`,vg=()=>r.jsx(R,{code:"Button",Component:BN,Source:IN,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"Button"})," property (note the capital B) can be used to define a different component for rendering each button."]})}),zN=Object.freeze(Object.defineProperty({__proto__:null,default:vg},Symbol.toStringTag,{value:"Module"})),FN=()=>r.jsxs(lo,{children:[r.jsx(A,{text:"One",outline:!0}),r.jsx(A,{text:"Two",outline:!0})]}),HN=`import { Buttons, Button } from '@/src/index.jsx'

{/* START */}
import React from 'react'
// PRETEND: import { Buttons, Button } from '@abw/badger-react-ui'

const ButtonsExample = () =>
  <Buttons>
    <Button text="One" outline/>
    <Button text="Two" outline/>
  </Buttons>

export default ButtonsExample
`,yg=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Buttons"})," component can be used to render a connected set of buttons."]}),r.jsx(pe,{Component:FN,code:HN,expand:!0})]}),UN=Object.freeze(Object.defineProperty({__proto__:null,default:yg},Symbol.toStringTag,{value:"Module"})),VN=()=>r.jsx(r.Fragment,{children:r.jsx(lo,{outline:!0,buttonClass:"blue shadow-1",buttons:[{text:"One"},{text:"Two"}]})}),WN=`import React from 'react'
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
`,jg=()=>r.jsx(R,{code:"buttonClass",Component:VN,Source:WN,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"buttonClass"})," property can be used to add a CSS class to each button. Badger CSS targets the ",r.jsx("code",{children:"button"})," element for styling so you don't need to add any special classes to get the default styling."]})}),ZN=Object.freeze(Object.defineProperty({__proto__:null,default:jg},Symbol.toStringTag,{value:"Module"})),KN=()=>r.jsx(r.Fragment,{children:r.jsx(lo,{buttons:[{text:"One",outline:!0},{text:"Two",outline:!0}]})}),YN=`import React from 'react'
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
`,bg=()=>r.jsx(R,{code:"buttons",Component:KN,Source:YN,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"buttons"})," property can be used to define properties for a set of buttons."]})}),GN=Object.freeze(Object.defineProperty({__proto__:null,default:bg},Symbol.toStringTag,{value:"Module"})),XN=()=>r.jsx(r.Fragment,{children:r.jsx(lo,{outline:!0,className:"buttons border pad-2 bgc-90 bgd-10 bdr-2",buttons:[{text:"One"},{text:"Two"}]})}),QN=`import React from 'react'
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
`,Cg=()=>r.jsx(R,{code:"className",Component:XN,Source:QN,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"className"})," property can be used to set the CSS class for the buttons container element.  The default value is"," ",r.jsx("code",{children:"buttons"}),".  If you want to use the default styles provided by Badger CSS then you should include ",r.jsx("code",{children:"buttons"})," in the value you provide for ",r.jsx("code",{children:"className"})]})}),qN=Object.freeze(Object.defineProperty({__proto__:null,default:Cg},Symbol.toStringTag,{value:"Module"})),JN=()=>r.jsx(r.Fragment,{children:r.jsx(lo,{outline:!0,buttons:[{text:"One"},{text:"Two"},{text:"Three",outline:!1,color:"orange"}]})}),eR=`import React from 'react'
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
`,Sg=()=>r.jsx(R,{code:"outline",Component:JN,Source:eR,undent:4,expand:!0,children:r.jsxs("p",{children:["Additional properties passed to the ",r.jsx("code",{children:"Buttons"})," component will be forwarded to each ",r.jsx("code",{children:"Button"})," component.  For example, you can set the ",r.jsx("code",{children:"outline"})," property on the parent",r.jsx("code",{children:"Buttons"})," component so that you don't have to repeat it for each button.  However, individual buttons can override any of these properties."]})}),tR=Object.freeze(Object.defineProperty({__proto__:null,default:Sg},Symbol.toStringTag,{value:"Module"})),nR=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Buttons"}),r.jsx(yg,{}),r.jsxs(rt,{tocName:"buttons",children:[r.jsx(ce,{title:"Properties"}),r.jsx(bg,{}),r.jsx(Sg,{}),r.jsx(Cg,{}),r.jsx(jg,{}),r.jsx(ce,{title:"Components"}),r.jsx(vg,{})]})]}),rR=Object.freeze(Object.defineProperty({__proto__:null,default:nR},Symbol.toStringTag,{value:"Module"})),oR=()=>r.jsx(hC,{text:"I like badgers",onChange:e=>console.log(`Checked: ${e}`)}),aR=`import { CheckboxState } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { CheckboxState } from '@abw/badger-react-ui

const CheckboxStateExample = () =>
  <CheckboxState
    text="I like badgers"
    onChange={checked => console.log(\`Checked: \${checked}\`)}
  />

export default CheckboxStateExample`,wg=()=>r.jsx(R,{code:"CheckboxState",Component:oR,Source:aR,expand:!0,children:r.jsx("div",{children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"CheckboxState"})," function can be used to generate a Checkbox with internal state."]})})}),sR=Object.freeze(Object.defineProperty({__proto__:null,default:wg},Symbol.toStringTag,{value:"Module"})),lR=()=>{const[e,t]=v.useState(!1);return r.jsx(_n,{text:"I like badgers",checked:e,onChange:t})},iR=`import { Checkbox } from '@/src/index.jsx'

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

export default CheckboxExample`,_g=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Checkbox"})," component renders a checkbox with a label."]}),r.jsx(pe,{Component:lR,code:iR,expand:!0})]}),cR=Object.freeze(Object.defineProperty({__proto__:null,default:_g},Symbol.toStringTag,{value:"Module"})),dR=()=>{const[e,t]=v.useState(!1);return r.jsx(_n,{border:!0,text:"I like badgers",checked:e,onChange:t})},uR=`import { Checkbox } from '@/src/index.jsx'
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

export default ClassName`,kg=()=>r.jsx(R,{code:"border",Component:dR,Source:uR,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"border"})," property can be used as a short-cut to add the ",r.jsx("code",{children:"border"})," class."]})}),pR=Object.freeze(Object.defineProperty({__proto__:null,default:kg},Symbol.toStringTag,{value:"Module"})),fR=()=>{const[e,t]=v.useState(!1);return r.jsx(_n,{text:"I like badgers",checked:e,onChange:t})},hR=`import { Checkbox } from '@/src/index.jsx'
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

export default CheckedExample`,Tg=()=>r.jsx(R,{code:"checked",Component:fR,Source:hR,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"checked"})," property should be passed to indicate if the checkbox is checked (",r.jsx("code",{children:"true"}),") or not (",r.jsx("code",{children:"false"}),")."]})}),mR=Object.freeze(Object.defineProperty({__proto__:null,default:Tg},Symbol.toStringTag,{value:"Module"})),xR=()=>{const[e,t]=v.useState(!1);return r.jsx(_n,{checkedText:"I like badgers (well done!)",uncheckedText:"I like badgers (you really should!)",checked:e,onChange:t})},gR=`import { Checkbox } from '@/src/index.jsx'
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

export default CheckedTextExample`,Eg=()=>r.jsx(R,{code:"checkedText / uncheckedText",Component:xR,Source:gR,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"checkedText"})," and ",r.jsx("code",{children:"uncheckedText"})," properties can be used to provide different text for the checked and unchecked states."]})}),vR=Object.freeze(Object.defineProperty({__proto__:null,default:Eg},Symbol.toStringTag,{value:"Module"})),yR=()=>{const[e,t]=v.useState(!1);return r.jsx(_n,{text:"I like badgers",className:"large border",checked:e,onChange:t})},jR=`import { Checkbox } from '@/src/index.jsx'
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

export default ClassName`,Ng=()=>r.jsx(R,{code:"className",Component:yR,Source:jR,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"className"})," property can be used to add a CSS class to the checkbox ",r.jsx("code",{children:"label"})," element."]})}),bR=Object.freeze(Object.defineProperty({__proto__:null,default:Ng},Symbol.toStringTag,{value:"Module"})),CR=()=>{const[e,t]=v.useState(!1);return r.jsx(_n,{disabled:!0,text:"I like badgers",checked:e,onChange:t})},SR=`import { Checkbox } from '@/src/index.jsx'
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

export default DisabledExample`,Rg=()=>r.jsx(R,{code:"disabled",Component:CR,Source:SR,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"disabled"})," property can be set to disable a checkbox."]})}),wR=Object.freeze(Object.defineProperty({__proto__:null,default:Rg},Symbol.toStringTag,{value:"Module"})),_R=()=>{const[e,t]=v.useState(!1);return r.jsx(_n,{text:"I like badgers",checked:e,onChange:t})},kR=`import { Checkbox } from '@/src/index.jsx'
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

export default OnChangeExample`,Lg=()=>r.jsx(R,{code:"onChange",Component:_R,Source:kR,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"onChange"})," property should be used to define a function to handle changes in the state."]})}),TR=Object.freeze(Object.defineProperty({__proto__:null,default:Lg},Symbol.toStringTag,{value:"Module"})),ER=()=>{const[e,t]=v.useState(!1);return r.jsx(_n,{text:"Badger are the best!",checked:e,onChange:t})},NR=`import { Checkbox } from '@/src/index.jsx'
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

export default TextExample`,Dg=()=>r.jsx(R,{code:"text",Component:ER,Source:NR,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"text"})," property should be used to set the text for the checkbox."]})}),RR=Object.freeze(Object.defineProperty({__proto__:null,default:Dg},Symbol.toStringTag,{value:"Module"})),LR=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Checkbox"}),r.jsx(_g,{}),r.jsxs(rt,{tocName:"checkbox",children:[r.jsx(ce,{title:"Properties"}),r.jsx(Dg,{}),r.jsx(Tg,{}),r.jsx(Eg,{}),r.jsx(Lg,{}),r.jsx(Ng,{}),r.jsx(kg,{}),r.jsx(Rg,{}),r.jsx(ce,{title:"Components"}),r.jsx(wg,{})]})]}),DR=Object.freeze(Object.defineProperty({__proto__:null,default:LR},Symbol.toStringTag,{value:"Module"})),OR=()=>r.jsx(r.Fragment,{children:r.jsx(kn,{text:"Delete",color:"red",iconRight:"trash",onClick:()=>window.alert("Confirmed!")})}),AR=`import { Confirm } from '@/src/index.jsx'

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

export default ConfirmExample`,Og=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Confirm"})," component provides an extra safety net for potentially dangerous operations.  When the user click on the button it then prompts them to confirm or cancel the action."]}),r.jsxs("p",{className:"cols-2 stack-desktop",children:["Additional properties not listed below are forwarded onto the initial button.  For example, you can set the ",r.jsx("code",{children:"text"}),","," ",r.jsx("code",{children:"color"}),", add icons, and so on, just like you would for any other button."]}),r.jsx(pe,{Component:OR,code:AR,expand:!0})]}),MR=Object.freeze(Object.defineProperty({__proto__:null,default:Og},Symbol.toStringTag,{value:"Module"})),PR=()=>r.jsx(kn,{text:"Delete",color:"red",cancel:{text:"Go Back",color:"yellow",outline:!1,iconLeft:"angle-left"}}),$R=`import React from 'react'
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

export default CancelExample`,Ag=()=>r.jsx(R,{code:"cancel",Component:PR,Source:$R,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"cancel"})," property can be used to set properties for the cancel button."]})}),BR=Object.freeze(Object.defineProperty({__proto__:null,default:Ag},Symbol.toStringTag,{value:"Module"})),IR=()=>r.jsx(kn,{text:"Delete",color:"red",cancelText:"Nah",cancelColor:"blue",cancelIcon:"angle-left"}),zR=`import React from 'react'
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

export default CancelExample`,Mg=()=>r.jsx(R,{id:"cancelProps",code:"cancelXXX",Component:IR,Source:zR,undent:2,expand:!0,children:r.jsxs("p",{children:["You can also set individual properties for the cancel button",r.jsx("code",{children:"cancelIcon"}),","," ",r.jsx("code",{children:"cancelText"}),","," ",r.jsx("code",{children:"cancelColor"})," and"," ",r.jsx("code",{children:"cancelClass"}),"."]})}),FR=Object.freeze(Object.defineProperty({__proto__:null,default:Mg},Symbol.toStringTag,{value:"Module"})),HR=()=>r.jsx(r.Fragment,{children:r.jsx(kn,{className:"buttons border pad-2 bgc-90 bgd-10 bdr-2",icon:"trash",color:"red"})}),UR=`import React from 'react'
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
`,Pg=()=>r.jsx(R,{code:"className",Component:HR,Source:UR,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"className"})," property can be used to set the CSS class for the buttons container element.  The default value is"," ",r.jsx("code",{children:"buttons"}),".  If you want to use the default styles provided by Badger CSS then you should include ",r.jsx("code",{children:"buttons"})," in the value you provide for ",r.jsx("code",{children:"className"})]})}),VR=Object.freeze(Object.defineProperty({__proto__:null,default:Pg},Symbol.toStringTag,{value:"Module"})),WR=()=>r.jsx(kn,{text:"Click to Delete",color:"red"}),ZR=`import React from 'react'
import { Confirm } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Confirm
    text="Click to Delete"
    color="red"
  />
/* END */

export default Component
`,$g=()=>r.jsx(R,{code:"color",Component:WR,Source:ZR,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"color"})," property can be used to set the color for the initial button."]})}),KR=Object.freeze(Object.defineProperty({__proto__:null,default:$g},Symbol.toStringTag,{value:"Module"})),YR=()=>r.jsx(kn,{text:"Delete",color:"red",confirm:{text:"Yep, do it!",color:"green",iconRight:"angle-right"}}),GR=`import React from 'react'
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

export default ConfirmExample`,Bg=()=>r.jsx(R,{code:"confirm",Component:YR,Source:GR,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"confirm"})," property can be used to set properties for the confirmation button."]})}),XR=Object.freeze(Object.defineProperty({__proto__:null,default:Bg},Symbol.toStringTag,{value:"Module"})),QR=()=>r.jsx(kn,{text:"Delete",color:"red",confirmText:"Yep",confirmColor:"green",confirmIcon:"trash"}),qR=`import React from 'react'
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

export default ConfirmProps`,Ig=()=>r.jsx(R,{id:"confirmProps",code:"confirmXXX",Component:QR,Source:qR,undent:2,expand:!0,children:r.jsxs("p",{children:["You can also set individual properties for the confirm button",r.jsx("code",{children:"confirmIcon"}),","," ",r.jsx("code",{children:"confirmText"}),","," ",r.jsx("code",{children:"confirmColor"})," and"," ",r.jsx("code",{children:"confirmClass"}),"."]})}),JR=Object.freeze(Object.defineProperty({__proto__:null,default:Ig},Symbol.toStringTag,{value:"Module"})),eL=()=>r.jsx(kn,{text:"Click to Delete",color:"red",iconRight:"trash"}),tL=`import React from 'react'
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
`,zg=()=>r.jsx(R,{code:"iconRight",Component:eL,Source:tL,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"iconRight"})," property can be used to add an icon to the right.  Or ",r.jsx("code",{children:"iconLeft"})," can be used to add an icon to the left. Or just an ",r.jsx("code",{children:"icon"})," if you want an icon without any text."]})}),nL=Object.freeze(Object.defineProperty({__proto__:null,default:zg},Symbol.toStringTag,{value:"Module"})),rL=()=>r.jsx(kn,{text:"Delete",color:"red",onClick:()=>window.alert("Deleted!")}),oL=`import React from 'react'
import { Confirm } from '@/src/index.jsx'

const OnClickExample = () =>
  /* START */
  <Confirm
    text="Delete"
    color="red"
    onClick={() => window.alert('Deleted!')}
  />
  /* END */

export default OnClickExample`,Fg=()=>r.jsx(R,{code:"onClick",Component:rL,Source:oL,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"onClick"})," property should be used to define the handler which will be called when the user confirms the action."]})}),aL=Object.freeze(Object.defineProperty({__proto__:null,default:Fg},Symbol.toStringTag,{value:"Module"})),sL=()=>r.jsx(kn,{text:"Click to Delete"}),lL=`import React from 'react'
import { Confirm } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Confirm
    text="Click to Delete"
  />
/* END */

export default Component
`,Hg=()=>r.jsx(R,{code:"text",Component:sL,Source:lL,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"text"})," property can be used to set the text for the initial button."]})}),iL=Object.freeze(Object.defineProperty({__proto__:null,default:Hg},Symbol.toStringTag,{value:"Module"})),cL=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Confirm"}),r.jsx(Og,{}),r.jsxs(rt,{tocName:"confirm",children:[r.jsx(ce,{title:"Properties"}),r.jsx(Hg,{}),r.jsx($g,{}),r.jsx(zg,{}),r.jsx(Pg,{}),r.jsx(Ag,{}),r.jsx(Mg,{}),r.jsx(Bg,{}),r.jsx(Ig,{}),r.jsx(ce,{title:"Event Handlers"}),r.jsx(Fg,{})]})]}),dL=Object.freeze(Object.defineProperty({__proto__:null,default:cL},Symbol.toStringTag,{value:"Module"})),En=[{name:"Alan",animal:"Anteater",id:10,role:"admin"},{name:"Bobby",animal:"Badger",id:20,role:"admin"},{name:"Brenda",animal:"Badger",id:30,role:"admin"},{name:"Christina",animal:"Cat",id:40,role:"user"},{name:"Derek",animal:"Dog",id:50,role:"user"},{name:"Delia",animal:"Donkey",id:60,role:"admin"},{name:"Edwin",animal:"Elephant",id:70,role:"admin"},{name:"Frank",animal:"Ferret",id:80,role:"user"},{name:"Felicity",animal:"Fox",id:90,role:"admin"},{name:"Gertrude",animal:"Goat",id:11,role:"admin"},{name:"Hector",animal:"Hamster",id:12,role:"admin"},{name:"Ian",animal:"Iguana",id:13,role:"user"},{name:"Julie",animal:"Jellyfish",id:14,role:"user"},{name:"Kevin",animal:"Koala",id:21,role:"user"},{name:"Lionel",animal:"Llama",id:22,role:"user"},{name:"Mary",animal:"Magpie",id:23,role:"user"},{name:"Nerys",animal:"Narwhal",id:24,role:"user"},{name:"Oliver",animal:"Octopus",id:31,role:"user"},{name:"Penny",animal:"Panda",id:32,role:"admin"},{name:"Quentin",animal:"Quail",id:33,role:"admin"},{name:"Roger",animal:"Raccoon",id:41,role:"user"},{name:"Simon",animal:"Stoat",id:42,role:"user"},{name:"Terry",animal:"Tiger",id:43,role:"user"},{name:"Ursula",animal:"Unicorn",id:101,role:"user"},{name:"Violet",animal:"Vole",id:102,role:"user"},{name:"Willy",animal:"Wombat",id:103,role:"user"},{name:"Xerces",animal:"Xenus",id:201,role:"user"},{name:"Yvonne",animal:"Yaz",id:202,role:"user"},{name:"Zebedee",animal:"Zebra",id:203,role:"user"},{name:"Al",animal:"Zebra",id:301,role:"guest"},{name:"Bob",animal:"Wombat",id:302,role:"guest"},{name:"Chris",animal:"Panda",id:303,role:"guest"},{name:"Kevin",animal:"Gerbil",id:304,role:"guest"},{name:"Roland",animal:"Rat",id:1234,role:"superstar"}],uL=()=>r.jsx(Qt,{rows:En,columns:"id name animal role"}),pL=`import { Datatable } from '@/src/index.jsx'

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

export default DatatableExample`,Ug=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Datatable"})," component can be used to display, sort, filter and page sets of data."]}),r.jsxs("div",{className:"cols-2 stack-desktop",children:[r.jsxs("p",{children:["The two mandatory properties are ",r.jsx("code",{children:"rows"})," and ",r.jsx("code",{children:"columns"}),". The ",r.jsx("code",{children:"rows"})," should be an array of objects containing the data that you want to display.  The ",r.jsx("code",{children:"columns"})," defines which properties in those objects you want to display.  In the simple case this can be a string of whitespace delimited identifiers. These should correspond to properties in the objects in the"," ",r.jsx("code",{children:"rows"})," array."]}),r.jsx("p",{children:"Click on the column headings to set the sort order.  Clicking again on the same column heading will toggle the order between ascending and descending.  Click on the small filter icon in each heading to show/hide the filters.  You can then type into the filter value for each column to filter the rows."}),r.jsx("p",{children:'The "Page Size" dropdown menu in the top right corner allows you to specify how many rows appear on each page.  The "Columns" item next to it allows you to specify which columns should be displayed.  You can drag them to change the order of columns.'})]}),r.jsx(pe,{Component:uL,code:pL})]}),fL=Object.freeze(Object.defineProperty({__proto__:null,default:Ug},Symbol.toStringTag,{value:"Module"})),hL=()=>r.jsx(Qt,{color:"brand",rows:En,columns:"id name animal role"}),mL=`import React from 'react'
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

export default DatatableExample`,Vg=()=>r.jsx(R,{code:"color",Component:hL,Source:mL,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"color"})," property can be used to define the color range used for the data table."]})}),xL=Object.freeze(Object.defineProperty({__proto__:null,default:Vg},Symbol.toStringTag,{value:"Module"})),gL=()=>r.jsx(Qt,{rows:[{id:10101,name:"Alan",salary:123456,admin:!0},{id:1010,name:"Brian",salary:45678,admin:!1},{id:101,name:"Charlie",salary:56789,admin:!1}],columns:{id:{type:"number",className:"text-right"},name:{},salary:{type:"currency",className:"text-right"},admin:{type:"boolean",className:"text-right"}}}),vL=`import React from 'react'
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

export default DatatableExample`,yL=()=>r.jsxs(R,{code:"type",Component:gL,Source:vL,undent:4,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"type"})," property can be used to specify what kind of data type is used in the corresponding field in each row."]}),r.jsxs("p",{children:["The default value is ",r.jsx("code",{children:"string"})," which will display (and sort) values as strings.  You can also set it to ",r.jsx("code",{children:"number"}),","," ",r.jsx("code",{children:"currency"}),", ",r.jsx("code",{children:"boolean"}),", and others... (TODO)"]})]}),jL=Object.freeze(Object.defineProperty({__proto__:null,default:yL},Symbol.toStringTag,{value:"Module"})),bL=()=>r.jsx(Qt,{rows:En,columns:{id:{},name:{display:({row:e})=>`${e.name} ${e.animal}`}}}),CL=`import React from 'react'
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

export default DatatableExample`,Wg=()=>r.jsx(R,{code:"display",Component:bL,Source:CL,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"display"})," property can be used to define a custom function to display the column value."]})}),SL=Object.freeze(Object.defineProperty({__proto__:null,default:Wg},Symbol.toStringTag,{value:"Module"})),wL=()=>r.jsx(Qt,{color:"brand",rows:En,columns:"id name animal role"}),_L=`import React from 'react'
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
`,kL=()=>r.jsx(Qt,{color:"brand",rows:En,columns:["id","name","animal","role"]}),TL=`import React from 'react'
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
`,EL=()=>r.jsx(Qt,{color:"brand",rows:En,columns:[{field:"id"},{field:"name"},{field:"animal"},{field:"role"}]}),NL=`import React from 'react'
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
`,RL=()=>r.jsx(Qt,{color:"brand",rows:En,columns:[{field:"id",label:"Ref.",type:"number"},{field:"name",label:"Username"},{field:"animal"},{field:"role"}]}),LL=`import React from 'react'
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
`,DL=()=>r.jsx(Qt,{color:"brand",rows:En,columns:{id:{label:"Ref.",type:"number"},name:{label:"Username",type:"string"},animal:{},role:{}}}),OL=`import React from 'react'
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
`,Zg=()=>r.jsxs(U,{code:"columns",children:[r.jsxs("div",{className:"cols-2 stack-desktop mar-b-4",children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"columns"})," property is used to define which properties in the ",r.jsx("code",{children:"rows"})," you want to display."]}),r.jsx("p",{children:"For simple cases this can be a string containing a whitespace delimited list of properties."})]}),r.jsx(pe,{Component:wL,code:_L,caption:"columns",expand:!1,undent:2}),r.jsx("div",{className:"cols-2 stack-desktop mar-b-4",children:r.jsx("p",{children:"The string format is short-hand for specifying an array of strings."})}),r.jsx(pe,{Component:kL,code:TL,caption:"columns",expand:!1,undent:2}),r.jsx("div",{className:"cols-2 stack-desktop mar-b-4",children:r.jsxs("p",{children:['When a column is defined as a string it is "upgraded" to an object in which the string is the ',r.jsx("code",{children:"field"})," property. This should (usually) correspond to a property in each row that you want to display in the column."]})}),r.jsx(pe,{Component:EL,code:NL,caption:"columns",expand:!1,undent:2}),r.jsxs("div",{className:"cols-2 stack-desktop mar-b-4",children:[r.jsxs("p",{children:["The column object will be augmented with some additional properties:"," ",r.jsx("code",{children:"id"})," (the same value as the field, for sorting purposes),"," ",r.jsx("code",{children:"label"})," used as the label heading and defaulting to a capitalised version of the ",r.jsx("code",{children:"field"}),", and ",r.jsx("code",{children:"type"})," defaulting to ",r.jsx("code",{children:"string"}),"."]}),r.jsxs("p",{children:["You can define different values for ",r.jsx("code",{children:"label"})," and",r.jsx("code",{children:"type"})," (along with other properties"," ",r.jsx("a",{href:"#column-properties",children:"detailed below"}),")."]}),r.jsxs("p",{children:["In this example we set the ",r.jsx("code",{children:"type"})," of the first column to be ",r.jsx("code",{children:"number"}),".  If you click on the"," ",r.jsx("code",{children:"Id"})," column heading in one of the previous example, you can see that it's sorting the rows alphabetically, e.g."," ","10, 101, 102, 103, 11, 12, etc.  Setting the column type to"," ",r.jsx("code",{children:"number"}),", as shown in the next example, fixes this problem and the rows will be sorted numerically, e.g. 10, 11, 12, 13, 14, 20, etc."]})]}),r.jsx(pe,{Component:RL,code:LL,caption:"columns",expand:!1,undent:2}),r.jsx("div",{className:"cols-2 stack-desktop mar-b-4",children:r.jsxs("p",{children:["The final option is to define the columns as an object in which the keys are the field names and the values contain additional configuration options for the column.  These can be left empty if you're happy with the default values for ",r.jsx("code",{children:"label"})," and ",r.jsx("code",{children:"type"}),"."]})}),r.jsx(pe,{Component:DL,code:OL,caption:"columns",expand:!1,undent:2}),r.jsxs("p",{children:["See the ",r.jsx("a",{href:"#column-properties",children:"Column Properties"})," section below for further information about the properties that can be added to the ",r.jsx("code",{children:"columns"}),"."]})]}),AL=Object.freeze(Object.defineProperty({__proto__:null,default:Zg},Symbol.toStringTag,{value:"Module"})),ML=()=>r.jsx(Qt,{rows:En,columns:{id:{label:"User ID"},name:{label:"User Name"}}}),PL=`import React from 'react'
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

export default DatatableExample`,Kg=()=>r.jsx(R,{code:"label",Component:ML,Source:PL,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"label"})," property can be used to define the label that appears in the column heading."]})}),$L=Object.freeze(Object.defineProperty({__proto__:null,default:Kg},Symbol.toStringTag,{value:"Module"})),BL=()=>r.jsx(Qt,{rows:[{id:10101,name:"Alan",salary:123456,admin:!0},{id:1010,name:"Brian",salary:45678,admin:!1},{id:101,name:"Charlie",salary:56789,admin:!1}],columns:{id:{type:"number"},name:{},salary:{type:"currency"},admin:{type:"boolean"}}}),IL=`import React from 'react'
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

export default DatatableExample`,Yg=()=>r.jsxs(R,{code:"type",Component:BL,Source:IL,undent:4,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"type"})," property can be used to specify what kind of data type is used in the corresponding field in each row."]}),r.jsxs("p",{children:["The default value is ",r.jsx("code",{children:"string"})," which will display (and sort) values as strings.  You can also set it to ",r.jsx("code",{children:"number"}),","," ",r.jsx("code",{children:"currency"}),", ",r.jsx("code",{children:"boolean"}),", and others... (TODO)"]})]}),zL=Object.freeze(Object.defineProperty({__proto__:null,default:Yg},Symbol.toStringTag,{value:"Module"})),FL=()=>r.jsx(Qt,{rows:En,columns:"id name animal role",pager:{size:"small",color:"blue"}}),HL=`import React from 'react'
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
 */function He(){return He=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},He.apply(this,arguments)}var Ue;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Ue||(Ue={}));const m1="popstate";function UL(e){e===void 0&&(e={});function t(o,a){let{pathname:s,search:l,hash:i}=o.location;return vs("",{pathname:s,search:l,hash:i},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(o,a){return typeof a=="string"?a:eo(a)}return WL(t,n,null,e)}function de(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Jr(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function VL(){return Math.random().toString(36).substr(2,8)}function x1(e,t){return{usr:e.state,key:e.key,idx:t}}function vs(e,t,n,o){return n===void 0&&(n=null),He({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Gn(t):t,{state:n,key:t&&t.key||o||VL()})}function eo(e){let{pathname:t="/",search:n="",hash:o=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),o&&o!=="#"&&(t+=o.charAt(0)==="#"?o:"#"+o),t}function Gn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let o=e.indexOf("?");o>=0&&(t.search=e.substr(o),e=e.substr(0,o)),e&&(t.pathname=e)}return t}function WL(e,t,n,o){o===void 0&&(o={});let{window:a=document.defaultView,v5Compat:s=!1}=o,l=a.history,i=Ue.Pop,c=null,d=u();d==null&&(d=0,l.replaceState(He({},l.state,{idx:d}),""));function u(){return(l.state||{idx:null}).idx}function p(){i=Ue.Pop;let _=u(),g=_==null?null:_-d;d=_,c&&c({action:i,location:b.location,delta:g})}function m(_,g){i=Ue.Push;let f=vs(b.location,_,g);n&&n(f,_),d=u()+1;let h=x1(f,d),j=b.createHref(f);try{l.pushState(h,"",j)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;a.location.assign(j)}s&&c&&c({action:i,location:b.location,delta:1})}function y(_,g){i=Ue.Replace;let f=vs(b.location,_,g);n&&n(f,_),d=u();let h=x1(f,d),j=b.createHref(f);l.replaceState(h,"",j),s&&c&&c({action:i,location:b.location,delta:0})}function C(_){let g=a.location.origin!=="null"?a.location.origin:a.location.href,f=typeof _=="string"?_:eo(_);return de(g,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,g)}let b={get action(){return i},get location(){return e(a,l)},listen(_){if(c)throw new Error("A history only accepts one active listener");return a.addEventListener(m1,p),c=_,()=>{a.removeEventListener(m1,p),c=null}},createHref(_){return t(a,_)},createURL:C,encodeLocation(_){let g=C(_);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:m,replace:y,go(_){return l.go(_)}};return b}var ze;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ze||(ze={}));const ZL=new Set(["lazy","caseSensitive","path","id","index","children"]);function KL(e){return e.index===!0}function au(e,t,n,o){return n===void 0&&(n=[]),o===void 0&&(o={}),e.map((a,s)=>{let l=[...n,s],i=typeof a.id=="string"?a.id:l.join("-");if(de(a.index!==!0||!a.children,"Cannot specify children on an index route"),de(!o[i],'Found a route id collision on id "'+i+`".  Route id's must be globally unique within Data Router usages`),KL(a)){let c=He({},a,t(a),{id:i});return o[i]=c,c}else{let c=He({},a,t(a),{id:i,children:void 0});return o[i]=c,a.children&&(c.children=au(a.children,t,l,o)),c}})}function Lo(e,t,n){n===void 0&&(n="/");let o=typeof t=="string"?Gn(t):t,a=br(o.pathname||"/",n);if(a==null)return null;let s=Gg(e);GL(s);let l=null;for(let i=0;l==null&&i<s.length;++i)l=oD(s[i],sD(a));return l}function YL(e,t){let{route:n,pathname:o,params:a}=e;return{id:n.id,pathname:o,params:a,data:t[n.id],handle:n.handle}}function Gg(e,t,n,o){t===void 0&&(t=[]),n===void 0&&(n=[]),o===void 0&&(o="");let a=(s,l,i)=>{let c={relativePath:i===void 0?s.path||"":i,caseSensitive:s.caseSensitive===!0,childrenIndex:l,route:s};c.relativePath.startsWith("/")&&(de(c.relativePath.startsWith(o),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+o+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(o.length));let d=Bn([o,c.relativePath]),u=n.concat(c);s.children&&s.children.length>0&&(de(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),Gg(s.children,t,u,d)),!(s.path==null&&!s.index)&&t.push({path:d,score:nD(d,s.index),routesMeta:u})};return e.forEach((s,l)=>{var i;if(s.path===""||!((i=s.path)!=null&&i.includes("?")))a(s,l);else for(let c of Xg(s.path))a(s,l,c)}),t}function Xg(e){let t=e.split("/");if(t.length===0)return[];let[n,...o]=t,a=n.endsWith("?"),s=n.replace(/\?$/,"");if(o.length===0)return a?[s,""]:[s];let l=Xg(o.join("/")),i=[];return i.push(...l.map(c=>c===""?s:[s,c].join("/"))),a&&i.push(...l),i.map(c=>e.startsWith("/")&&c===""?"/":c)}function GL(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:rD(t.routesMeta.map(o=>o.childrenIndex),n.routesMeta.map(o=>o.childrenIndex)))}const XL=/^:\w+$/,QL=3,qL=2,JL=1,eD=10,tD=-2,g1=e=>e==="*";function nD(e,t){let n=e.split("/"),o=n.length;return n.some(g1)&&(o+=tD),t&&(o+=qL),n.filter(a=>!g1(a)).reduce((a,s)=>a+(XL.test(s)?QL:s===""?JL:eD),o)}function rD(e,t){return e.length===t.length&&e.slice(0,-1).every((o,a)=>o===t[a])?e[e.length-1]-t[t.length-1]:0}function oD(e,t){let{routesMeta:n}=e,o={},a="/",s=[];for(let l=0;l<n.length;++l){let i=n[l],c=l===n.length-1,d=a==="/"?t:t.slice(a.length)||"/",u=su({path:i.relativePath,caseSensitive:i.caseSensitive,end:c},d);if(!u)return null;Object.assign(o,u.params);let p=i.route;s.push({params:o,pathname:Bn([a,u.pathname]),pathnameBase:dD(Bn([a,u.pathnameBase])),route:p}),u.pathnameBase!=="/"&&(a=Bn([a,u.pathnameBase]))}return s}function su(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,o]=aD(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let s=a[0],l=s.replace(/(.)\/+$/,"$1"),i=a.slice(1);return{params:o.reduce((d,u,p)=>{let{paramName:m,isOptional:y}=u;if(m==="*"){let b=i[p]||"";l=s.slice(0,s.length-b.length).replace(/(.)\/+$/,"$1")}const C=i[p];return y&&!C?d[m]=void 0:d[m]=lD(C||"",m),d},{}),pathname:s,pathnameBase:l,pattern:e}}function aD(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Jr(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let o=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(l,i,c)=>(o.push({paramName:i,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(o.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),o]}function sD(e){try{return decodeURI(e)}catch(t){return Jr(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function lD(e,t){try{return decodeURIComponent(e)}catch(n){return Jr(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function br(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,o=e.charAt(n);return o&&o!=="/"?null:e.slice(n)||"/"}function iD(e,t){t===void 0&&(t="/");let{pathname:n,search:o="",hash:a=""}=typeof e=="string"?Gn(e):e;return{pathname:n?n.startsWith("/")?n:cD(n,t):t,search:uD(o),hash:pD(a)}}function cD(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function Gc(e,t,n,o){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(o)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Qg(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function ef(e,t){let n=Qg(e);return t?n.map((o,a)=>a===e.length-1?o.pathname:o.pathnameBase):n.map(o=>o.pathnameBase)}function tf(e,t,n,o){o===void 0&&(o=!1);let a;typeof e=="string"?a=Gn(e):(a=He({},e),de(!a.pathname||!a.pathname.includes("?"),Gc("?","pathname","search",a)),de(!a.pathname||!a.pathname.includes("#"),Gc("#","pathname","hash",a)),de(!a.search||!a.search.includes("#"),Gc("#","search","hash",a)));let s=e===""||a.pathname==="",l=s?"/":a.pathname,i;if(l==null)i=n;else{let p=t.length-1;if(!o&&l.startsWith("..")){let m=l.split("/");for(;m[0]==="..";)m.shift(),p-=1;a.pathname=m.join("/")}i=p>=0?t[p]:"/"}let c=iD(a,i),d=l&&l!=="/"&&l.endsWith("/"),u=(s||l===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(d||u)&&(c.pathname+="/"),c}const Bn=e=>e.join("/").replace(/\/\/+/g,"/"),dD=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),uD=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,pD=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class nf{constructor(t,n,o,a){a===void 0&&(a=!1),this.status=t,this.statusText=n||"",this.internal=a,o instanceof Error?(this.data=o.toString(),this.error=o):this.data=o}}function qg(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Jg=["post","put","patch","delete"],fD=new Set(Jg),hD=["get",...Jg],mD=new Set(hD),xD=new Set([301,302,303,307,308]),gD=new Set([307,308]),Xc={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},vD={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},ya={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},e0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,yD=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),t0="remix-router-transitions";function jD(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",o=!n;de(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let a;if(e.mapRouteProperties)a=e.mapRouteProperties;else if(e.detectErrorBoundary){let k=e.detectErrorBoundary;a=N=>({hasErrorBoundary:k(N)})}else a=yD;let s={},l=au(e.routes,a,void 0,s),i,c=e.basename||"/",d=He({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1},e.future),u=null,p=new Set,m=null,y=null,C=null,b=e.hydrationData!=null,_=Lo(l,e.history.location,c),g=null;if(_==null){let k=zt(404,{pathname:e.history.location.pathname}),{matches:N,route:L}=_1(l);_=N,g={[L.id]:k}}let f,h=_.some(k=>k.route.lazy),j=_.some(k=>k.route.loader);if(h)f=!1;else if(!j)f=!0;else if(d.v7_partialHydration){let k=e.hydrationData?e.hydrationData.loaderData:null,N=e.hydrationData?e.hydrationData.errors:null;f=_.every(L=>L.route.loader&&L.route.loader.hydrate!==!0&&(k&&k[L.route.id]!==void 0||N&&N[L.route.id]!==void 0))}else f=e.hydrationData!=null;let S,x={historyAction:e.history.action,location:e.history.location,matches:_,initialized:f,navigation:Xc,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||g,fetchers:new Map,blockers:new Map},w=Ue.Pop,T=!1,E,D=!1,M=new Map,K=null,X=!1,Q=!1,re=[],ae=[],V=new Map,O=0,B=-1,I=new Map,H=new Set,W=new Map,we=new Map,le=new Set,be=new Map,se=new Map,Re=!1;function lt(){if(u=e.history.listen(k=>{let{action:N,location:L,delta:$}=k;if(Re){Re=!1;return}Jr(se.size===0||$!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let z=Gs({currentLocation:x.location,nextLocation:L,historyAction:N});if(z&&$!=null){Re=!0,e.history.go($*-1),Mr(z,{state:"blocked",location:L,proceed(){Mr(z,{state:"proceeding",proceed:void 0,reset:void 0,location:L}),e.history.go($)},reset(){let ne=new Map(x.blockers);ne.set(z,ya),Le({blockers:ne})}});return}return Ct(N,L)}),n){LD(t,M);let k=()=>DD(t,M);t.addEventListener("pagehide",k),K=()=>t.removeEventListener("pagehide",k)}return x.initialized||Ct(Ue.Pop,x.location,{initialHydration:!0}),S}function bt(){u&&u(),K&&K(),p.clear(),E&&E.abort(),x.fetchers.forEach((k,N)=>en(N)),x.blockers.forEach((k,N)=>Ys(N))}function he(k){return p.add(k),()=>p.delete(k)}function Le(k,N){N===void 0&&(N={}),x=He({},x,k);let L=[],$=[];d.v7_fetcherPersist&&x.fetchers.forEach((z,ne)=>{z.state==="idle"&&(le.has(ne)?$.push(ne):L.push(ne))}),[...p].forEach(z=>z(x,{deletedFetchers:$,unstable_viewTransitionOpts:N.viewTransitionOpts,unstable_flushSync:N.flushSync===!0})),d.v7_fetcherPersist&&(L.forEach(z=>x.fetchers.delete(z)),$.forEach(z=>en(z)))}function qe(k,N,L){var $,z;let{flushSync:ne}=L===void 0?{}:L,G=x.actionData!=null&&x.navigation.formMethod!=null&&an(x.navigation.formMethod)&&x.navigation.state==="loading"&&(($=k.state)==null?void 0:$._isRedirect)!==!0,q;N.actionData?Object.keys(N.actionData).length>0?q=N.actionData:q=null:G?q=x.actionData:q=null;let Y=N.loaderData?w1(x.loaderData,N.loaderData,N.matches||[],N.errors):x.loaderData,ie=x.blockers;ie.size>0&&(ie=new Map(ie),ie.forEach((ye,Me)=>ie.set(Me,ya)));let Ae=T===!0||x.navigation.formMethod!=null&&an(x.navigation.formMethod)&&((z=k.state)==null?void 0:z._isRedirect)!==!0;i&&(l=i,i=void 0),X||w===Ue.Pop||(w===Ue.Push?e.history.push(k,k.state):w===Ue.Replace&&e.history.replace(k,k.state));let oe;if(w===Ue.Pop){let ye=M.get(x.location.pathname);ye&&ye.has(k.pathname)?oe={currentLocation:x.location,nextLocation:k}:M.has(k.pathname)&&(oe={currentLocation:k,nextLocation:x.location})}else if(D){let ye=M.get(x.location.pathname);ye?ye.add(k.pathname):(ye=new Set([k.pathname]),M.set(x.location.pathname,ye)),oe={currentLocation:x.location,nextLocation:k}}Le(He({},N,{actionData:q,loaderData:Y,historyAction:w,location:k,initialized:!0,navigation:Xc,revalidation:"idle",restoreScrollPosition:We(k,N.matches||x.matches),preventScrollReset:Ae,blockers:ie}),{viewTransitionOpts:oe,flushSync:ne===!0}),w=Ue.Pop,T=!1,D=!1,X=!1,Q=!1,re=[],ae=[]}async function Lt(k,N){if(typeof k=="number"){e.history.go(k);return}let L=lu(x.location,x.matches,c,d.v7_prependBasename,k,d.v7_relativeSplatPath,N==null?void 0:N.fromRouteId,N==null?void 0:N.relative),{path:$,submission:z,error:ne}=v1(d.v7_normalizeFormMethod,!1,L,N),G=x.location,q=vs(x.location,$,N&&N.state);q=He({},q,e.history.encodeLocation(q));let Y=N&&N.replace!=null?N.replace:void 0,ie=Ue.Push;Y===!0?ie=Ue.Replace:Y===!1||z!=null&&an(z.formMethod)&&z.formAction===x.location.pathname+x.location.search&&(ie=Ue.Replace);let Ae=N&&"preventScrollReset"in N?N.preventScrollReset===!0:void 0,oe=(N&&N.unstable_flushSync)===!0,ye=Gs({currentLocation:G,nextLocation:q,historyAction:ie});if(ye){Mr(ye,{state:"blocked",location:q,proceed(){Mr(ye,{state:"proceeding",proceed:void 0,reset:void 0,location:q}),Lt(k,N)},reset(){let Me=new Map(x.blockers);Me.set(ye,ya),Le({blockers:Me})}});return}return await Ct(ie,q,{submission:z,pendingError:ne,preventScrollReset:Ae,replace:N&&N.replace,enableViewTransition:N&&N.unstable_viewTransition,flushSync:oe})}function qt(){if(co(),Le({revalidation:"loading"}),x.navigation.state!=="submitting"){if(x.navigation.state==="idle"){Ct(x.historyAction,x.location,{startUninterruptedRevalidation:!0});return}Ct(w||x.historyAction,x.navigation.location,{overrideNavigation:x.navigation})}}async function Ct(k,N,L){E&&E.abort(),E=null,w=k,X=(L&&L.startUninterruptedRevalidation)===!0,sc(x.location,x.matches),T=(L&&L.preventScrollReset)===!0,D=(L&&L.enableViewTransition)===!0;let $=i||l,z=L&&L.overrideNavigation,ne=Lo($,N,c),G=(L&&L.flushSync)===!0;if(!ne){let Me=zt(404,{pathname:N.pathname}),{matches:it,route:Je}=_1($);uo(),qe(N,{matches:it,loaderData:{},errors:{[Je.id]:Me}},{flushSync:G});return}if(x.initialized&&!Q&&_D(x.location,N)&&!(L&&L.submission&&an(L.submission.formMethod))){qe(N,{matches:ne},{flushSync:G});return}E=new AbortController;let q=ba(e.history,N,E.signal,L&&L.submission),Y,ie;if(L&&L.pendingError)ie={[Ga(ne).route.id]:L.pendingError};else if(L&&L.submission&&an(L.submission.formMethod)){let Me=await Xn(q,N,L.submission,ne,{replace:L.replace,flushSync:G});if(Me.shortCircuited)return;Y=Me.pendingActionData,ie=Me.pendingActionError,z=Qc(N,L.submission),G=!1,q=new Request(q.url,{signal:q.signal})}let{shortCircuited:Ae,loaderData:oe,errors:ye}=await Ws(q,N,ne,z,L&&L.submission,L&&L.fetcherSubmission,L&&L.replace,L&&L.initialHydration===!0,G,Y,ie);Ae||(E=null,qe(N,He({matches:ne},Y?{actionData:Y}:{},{loaderData:oe,errors:ye})))}async function Xn(k,N,L,$,z){z===void 0&&(z={}),co();let ne=ND(N,L);Le({navigation:ne},{flushSync:z.flushSync===!0});let G,q=cu($,N);if(!q.route.action&&!q.route.lazy)G={type:ze.error,error:zt(405,{method:k.method,pathname:N.pathname,routeId:q.route.id})};else if(G=await ja("action",k,q,$,s,a,c,d.v7_relativeSplatPath),k.signal.aborted)return{shortCircuited:!0};if(Wr(G)){let Y;return z&&z.replace!=null?Y=z.replace:Y=G.location===x.location.pathname+x.location.search,await hn(x,G,{submission:L,replace:Y}),{shortCircuited:!0}}if(Do(G)){let Y=Ga($,q.route.id);return(z&&z.replace)!==!0&&(w=Ue.Push),{pendingActionData:{},pendingActionError:{[Y.route.id]:G.error}}}if(Vr(G))throw zt(400,{type:"defer-action"});return{pendingActionData:{[q.route.id]:G.data}}}async function Ws(k,N,L,$,z,ne,G,q,Y,ie,Ae){let oe=$||Qc(N,z),ye=z||ne||E1(oe),Me=i||l,[it,Je]=y1(e.history,x,L,ye,N,d.v7_partialHydration&&q===!0,Q,re,ae,le,W,H,Me,c,ie,Ae);if(uo(_e=>!(L&&L.some(De=>De.route.id===_e))||it&&it.some(De=>De.route.id===_e)),B=++O,it.length===0&&Je.length===0){let _e=tn();return qe(N,He({matches:L,loaderData:{},errors:Ae||null},ie?{actionData:ie}:{},_e?{fetchers:new Map(x.fetchers)}:{}),{flushSync:Y}),{shortCircuited:!0}}if(!X&&(!d.v7_partialHydration||!q)){Je.forEach(De=>{let mn=x.fetchers.get(De.key),qs=Ca(void 0,mn?mn.data:void 0);x.fetchers.set(De.key,qs)});let _e=ie||x.actionData;Le(He({navigation:oe},_e?Object.keys(_e).length===0?{actionData:null}:{actionData:_e}:{},Je.length>0?{fetchers:new Map(x.fetchers)}:{}),{flushSync:Y})}Je.forEach(_e=>{V.has(_e.key)&&St(_e.key),_e.controller&&V.set(_e.key,_e.controller)});let po=()=>Je.forEach(_e=>St(_e.key));E&&E.signal.addEventListener("abort",po);let{results:lc,loaderResults:fo,fetcherResults:qn}=await Or(x.matches,L,it,Je,k);if(k.signal.aborted)return{shortCircuited:!0};E&&E.signal.removeEventListener("abort",po),Je.forEach(_e=>V.delete(_e.key));let Pr=k1(lc);if(Pr){if(Pr.idx>=it.length){let _e=Je[Pr.idx-it.length].key;H.add(_e)}return await hn(x,Pr.result,{replace:G}),{shortCircuited:!0}}let{loaderData:ic,errors:cc}=S1(x,L,it,fo,Ae,Je,qn,be);be.forEach((_e,De)=>{_e.subscribe(mn=>{(mn||_e.done)&&be.delete(De)})});let dc=tn(),ho=ia(B),Qs=dc||ho||Je.length>0;return He({loaderData:ic,errors:cc},Qs?{fetchers:new Map(x.fetchers)}:{})}function Zs(k,N,L,$){if(o)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");V.has(k)&&St(k);let z=($&&$.unstable_flushSync)===!0,ne=i||l,G=lu(x.location,x.matches,c,d.v7_prependBasename,L,d.v7_relativeSplatPath,N,$==null?void 0:$.relative),q=Lo(ne,G,c);if(!q){Ar(k,N,zt(404,{pathname:G}),{flushSync:z});return}let{path:Y,submission:ie,error:Ae}=v1(d.v7_normalizeFormMethod,!0,G,$);if(Ae){Ar(k,N,Ae,{flushSync:z});return}let oe=cu(q,Y);if(T=($&&$.preventScrollReset)===!0,ie&&an(ie.formMethod)){sa(k,N,Y,oe,q,z,ie);return}W.set(k,{routeId:N,path:Y}),fn(k,N,Y,oe,q,z,ie)}async function sa(k,N,L,$,z,ne,G){if(co(),W.delete(k),!$.route.action&&!$.route.lazy){let De=zt(405,{method:G.formMethod,pathname:L,routeId:N});Ar(k,N,De,{flushSync:ne});return}let q=x.fetchers.get(k);Jt(k,RD(G,q),{flushSync:ne});let Y=new AbortController,ie=ba(e.history,L,Y.signal,G);V.set(k,Y);let Ae=O,oe=await ja("action",ie,$,z,s,a,c,d.v7_relativeSplatPath);if(ie.signal.aborted){V.get(k)===Y&&V.delete(k);return}if(d.v7_fetcherPersist&&le.has(k)){if(Wr(oe)||Do(oe)){Jt(k,tr(void 0));return}}else{if(Wr(oe))if(V.delete(k),B>Ae){Jt(k,tr(void 0));return}else return H.add(k),Jt(k,Ca(G)),hn(x,oe,{fetcherSubmission:G});if(Do(oe)){Ar(k,N,oe.error);return}}if(Vr(oe))throw zt(400,{type:"defer-action"});let ye=x.navigation.location||x.location,Me=ba(e.history,ye,Y.signal),it=i||l,Je=x.navigation.state!=="idle"?Lo(it,x.navigation.location,c):x.matches;de(Je,"Didn't find any matches after fetcher action");let po=++O;I.set(k,po);let lc=Ca(G,oe.data);x.fetchers.set(k,lc);let[fo,qn]=y1(e.history,x,Je,G,ye,!1,Q,re,ae,le,W,H,it,c,{[$.route.id]:oe.data},void 0);qn.filter(De=>De.key!==k).forEach(De=>{let mn=De.key,qs=x.fetchers.get(mn),n5=Ca(void 0,qs?qs.data:void 0);x.fetchers.set(mn,n5),V.has(mn)&&St(mn),De.controller&&V.set(mn,De.controller)}),Le({fetchers:new Map(x.fetchers)});let Pr=()=>qn.forEach(De=>St(De.key));Y.signal.addEventListener("abort",Pr);let{results:ic,loaderResults:cc,fetcherResults:dc}=await Or(x.matches,Je,fo,qn,Me);if(Y.signal.aborted)return;Y.signal.removeEventListener("abort",Pr),I.delete(k),V.delete(k),qn.forEach(De=>V.delete(De.key));let ho=k1(ic);if(ho){if(ho.idx>=fo.length){let De=qn[ho.idx-fo.length].key;H.add(De)}return hn(x,ho.result)}let{loaderData:Qs,errors:_e}=S1(x,x.matches,fo,cc,void 0,qn,dc,be);if(x.fetchers.has(k)){let De=tr(oe.data);x.fetchers.set(k,De)}ia(po),x.navigation.state==="loading"&&po>B?(de(w,"Expected pending action"),E&&E.abort(),qe(x.navigation.location,{matches:Je,loaderData:Qs,errors:_e,fetchers:new Map(x.fetchers)})):(Le({errors:_e,loaderData:w1(x.loaderData,Qs,Je,_e),fetchers:new Map(x.fetchers)}),Q=!1)}async function fn(k,N,L,$,z,ne,G){let q=x.fetchers.get(k);Jt(k,Ca(G,q?q.data:void 0),{flushSync:ne});let Y=new AbortController,ie=ba(e.history,L,Y.signal);V.set(k,Y);let Ae=O,oe=await ja("loader",ie,$,z,s,a,c,d.v7_relativeSplatPath);if(Vr(oe)&&(oe=await o0(oe,ie.signal,!0)||oe),V.get(k)===Y&&V.delete(k),!ie.signal.aborted){if(le.has(k)){Jt(k,tr(void 0));return}if(Wr(oe))if(B>Ae){Jt(k,tr(void 0));return}else{H.add(k),await hn(x,oe);return}if(Do(oe)){Ar(k,N,oe.error);return}de(!Vr(oe),"Unhandled fetcher deferred data"),Jt(k,tr(oe.data))}}async function hn(k,N,L){let{submission:$,fetcherSubmission:z,replace:ne}=L===void 0?{}:L;N.revalidate&&(Q=!0);let G=vs(k.location,N.location,{_isRedirect:!0});if(de(G,"Expected a location on the redirect navigation"),n){let ye=!1;if(N.reloadDocument)ye=!0;else if(e0.test(N.location)){const Me=e.history.createURL(N.location);ye=Me.origin!==t.location.origin||br(Me.pathname,c)==null}if(ye){ne?t.location.replace(N.location):t.location.assign(N.location);return}}E=null;let q=ne===!0?Ue.Replace:Ue.Push,{formMethod:Y,formAction:ie,formEncType:Ae}=k.navigation;!$&&!z&&Y&&ie&&Ae&&($=E1(k.navigation));let oe=$||z;if(gD.has(N.status)&&oe&&an(oe.formMethod))await Ct(q,G,{submission:He({},oe,{formAction:N.location}),preventScrollReset:T});else{let ye=Qc(G,$);await Ct(q,G,{overrideNavigation:ye,fetcherSubmission:z,preventScrollReset:T})}}async function Or(k,N,L,$,z){let ne=await Promise.all([...L.map(Y=>ja("loader",z,Y,N,s,a,c,d.v7_relativeSplatPath)),...$.map(Y=>Y.matches&&Y.match&&Y.controller?ja("loader",ba(e.history,Y.path,Y.controller.signal),Y.match,Y.matches,s,a,c,d.v7_relativeSplatPath):{type:ze.error,error:zt(404,{pathname:Y.path})})]),G=ne.slice(0,L.length),q=ne.slice(L.length);return await Promise.all([T1(k,L,G,G.map(()=>z.signal),!1,x.loaderData),T1(k,$.map(Y=>Y.match),q,$.map(Y=>Y.controller?Y.controller.signal:null),!0)]),{results:ne,loaderResults:G,fetcherResults:q}}function co(){Q=!0,re.push(...uo()),W.forEach((k,N)=>{V.has(N)&&(ae.push(N),St(N))})}function Jt(k,N,L){L===void 0&&(L={}),x.fetchers.set(k,N),Le({fetchers:new Map(x.fetchers)},{flushSync:(L&&L.flushSync)===!0})}function Ar(k,N,L,$){$===void 0&&($={});let z=Ga(x.matches,N);en(k),Le({errors:{[z.route.id]:L},fetchers:new Map(x.fetchers)},{flushSync:($&&$.flushSync)===!0})}function Ks(k){return d.v7_fetcherPersist&&(we.set(k,(we.get(k)||0)+1),le.has(k)&&le.delete(k)),x.fetchers.get(k)||vD}function en(k){let N=x.fetchers.get(k);V.has(k)&&!(N&&N.state==="loading"&&I.has(k))&&St(k),W.delete(k),I.delete(k),H.delete(k),le.delete(k),x.fetchers.delete(k)}function Qn(k){if(d.v7_fetcherPersist){let N=(we.get(k)||0)-1;N<=0?(we.delete(k),le.add(k)):we.set(k,N)}else en(k);Le({fetchers:new Map(x.fetchers)})}function St(k){let N=V.get(k);de(N,"Expected fetch controller: "+k),N.abort(),V.delete(k)}function la(k){for(let N of k){let L=Ks(N),$=tr(L.data);x.fetchers.set(N,$)}}function tn(){let k=[],N=!1;for(let L of H){let $=x.fetchers.get(L);de($,"Expected fetcher: "+L),$.state==="loading"&&(H.delete(L),k.push(L),N=!0)}return la(k),N}function ia(k){let N=[];for(let[L,$]of I)if($<k){let z=x.fetchers.get(L);de(z,"Expected fetcher: "+L),z.state==="loading"&&(St(L),I.delete(L),N.push(L))}return la(N),N.length>0}function oc(k,N){let L=x.blockers.get(k)||ya;return se.get(k)!==N&&se.set(k,N),L}function Ys(k){x.blockers.delete(k),se.delete(k)}function Mr(k,N){let L=x.blockers.get(k)||ya;de(L.state==="unblocked"&&N.state==="blocked"||L.state==="blocked"&&N.state==="blocked"||L.state==="blocked"&&N.state==="proceeding"||L.state==="blocked"&&N.state==="unblocked"||L.state==="proceeding"&&N.state==="unblocked","Invalid blocker state transition: "+L.state+" -> "+N.state);let $=new Map(x.blockers);$.set(k,N),Le({blockers:$})}function Gs(k){let{currentLocation:N,nextLocation:L,historyAction:$}=k;if(se.size===0)return;se.size>1&&Jr(!1,"A router only supports one blocker at a time");let z=Array.from(se.entries()),[ne,G]=z[z.length-1],q=x.blockers.get(ne);if(!(q&&q.state==="proceeding")&&G({currentLocation:N,nextLocation:L,historyAction:$}))return ne}function uo(k){let N=[];return be.forEach((L,$)=>{(!k||k($))&&(L.cancel(),N.push($),be.delete($))}),N}function ac(k,N,L){if(m=k,C=N,y=L||null,!b&&x.navigation===Xc){b=!0;let $=We(x.location,x.matches);$!=null&&Le({restoreScrollPosition:$})}return()=>{m=null,C=null,y=null}}function Xs(k,N){return y&&y(k,N.map($=>YL($,x.loaderData)))||k.key}function sc(k,N){if(m&&C){let L=Xs(k,N);m[L]=C()}}function We(k,N){if(m){let L=Xs(k,N),$=m[L];if(typeof $=="number")return $}return null}function ht(k){s={},i=au(k,a,void 0,s)}return S={get basename(){return c},get future(){return d},get state(){return x},get routes(){return l},get window(){return t},initialize:lt,subscribe:he,enableScrollRestoration:ac,navigate:Lt,fetch:Zs,revalidate:qt,createHref:k=>e.history.createHref(k),encodeLocation:k=>e.history.encodeLocation(k),getFetcher:Ks,deleteFetcher:Qn,dispose:bt,getBlocker:oc,deleteBlocker:Ys,_internalFetchControllers:V,_internalActiveDeferreds:be,_internalSetRoutes:ht},S}function bD(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function lu(e,t,n,o,a,s,l,i){let c,d;if(l){c=[];for(let p of t)if(c.push(p),p.route.id===l){d=p;break}}else c=t,d=t[t.length-1];let u=tf(a||".",ef(c,s),br(e.pathname,n)||e.pathname,i==="path");return a==null&&(u.search=e.search,u.hash=e.hash),(a==null||a===""||a===".")&&d&&d.route.index&&!rf(u.search)&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),o&&n!=="/"&&(u.pathname=u.pathname==="/"?n:Bn([n,u.pathname])),eo(u)}function v1(e,t,n,o){if(!o||!bD(o))return{path:n};if(o.formMethod&&!ED(o.formMethod))return{path:n,error:zt(405,{method:o.formMethod})};let a=()=>({path:n,error:zt(400,{type:"invalid-body"})}),s=o.formMethod||"get",l=e?s.toUpperCase():s.toLowerCase(),i=r0(n);if(o.body!==void 0){if(o.formEncType==="text/plain"){if(!an(l))return a();let m=typeof o.body=="string"?o.body:o.body instanceof FormData||o.body instanceof URLSearchParams?Array.from(o.body.entries()).reduce((y,C)=>{let[b,_]=C;return""+y+b+"="+_+`
`},""):String(o.body);return{path:n,submission:{formMethod:l,formAction:i,formEncType:o.formEncType,formData:void 0,json:void 0,text:m}}}else if(o.formEncType==="application/json"){if(!an(l))return a();try{let m=typeof o.body=="string"?JSON.parse(o.body):o.body;return{path:n,submission:{formMethod:l,formAction:i,formEncType:o.formEncType,formData:void 0,json:m,text:void 0}}}catch{return a()}}}de(typeof FormData=="function","FormData is not available in this environment");let c,d;if(o.formData)c=iu(o.formData),d=o.formData;else if(o.body instanceof FormData)c=iu(o.body),d=o.body;else if(o.body instanceof URLSearchParams)c=o.body,d=C1(c);else if(o.body==null)c=new URLSearchParams,d=new FormData;else try{c=new URLSearchParams(o.body),d=C1(c)}catch{return a()}let u={formMethod:l,formAction:i,formEncType:o&&o.formEncType||"application/x-www-form-urlencoded",formData:d,json:void 0,text:void 0};if(an(u.formMethod))return{path:n,submission:u};let p=Gn(n);return t&&p.search&&rf(p.search)&&c.append("index",""),p.search="?"+c,{path:eo(p),submission:u}}function CD(e,t){let n=e;if(t){let o=e.findIndex(a=>a.route.id===t);o>=0&&(n=e.slice(0,o))}return n}function y1(e,t,n,o,a,s,l,i,c,d,u,p,m,y,C,b){let _=b?Object.values(b)[0]:C?Object.values(C)[0]:void 0,g=e.createURL(t.location),f=e.createURL(a),h=b?Object.keys(b)[0]:void 0,S=CD(n,h).filter((w,T)=>{let{route:E}=w;if(E.lazy)return!0;if(E.loader==null)return!1;if(s)return E.loader.hydrate?!0:t.loaderData[E.id]===void 0&&(!t.errors||t.errors[E.id]===void 0);if(SD(t.loaderData,t.matches[T],w)||i.some(K=>K===w.route.id))return!0;let D=t.matches[T],M=w;return j1(w,He({currentUrl:g,currentParams:D.params,nextUrl:f,nextParams:M.params},o,{actionResult:_,defaultShouldRevalidate:l||g.pathname+g.search===f.pathname+f.search||g.search!==f.search||n0(D,M)}))}),x=[];return u.forEach((w,T)=>{if(s||!n.some(X=>X.route.id===w.routeId)||d.has(T))return;let E=Lo(m,w.path,y);if(!E){x.push({key:T,routeId:w.routeId,path:w.path,matches:null,match:null,controller:null});return}let D=t.fetchers.get(T),M=cu(E,w.path),K=!1;p.has(T)?K=!1:c.includes(T)?K=!0:D&&D.state!=="idle"&&D.data===void 0?K=l:K=j1(M,He({currentUrl:g,currentParams:t.matches[t.matches.length-1].params,nextUrl:f,nextParams:n[n.length-1].params},o,{actionResult:_,defaultShouldRevalidate:l})),K&&x.push({key:T,routeId:w.routeId,path:w.path,matches:E,match:M,controller:new AbortController})}),[S,x]}function SD(e,t,n){let o=!t||n.route.id!==t.route.id,a=e[n.route.id]===void 0;return o||a}function n0(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function j1(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function b1(e,t,n){if(!e.lazy)return;let o=await e.lazy();if(!e.lazy)return;let a=n[e.id];de(a,"No route found in manifest");let s={};for(let l in o){let c=a[l]!==void 0&&l!=="hasErrorBoundary";Jr(!c,'Route "'+a.id+'" has a static property "'+l+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+l+'" will be ignored.')),!c&&!ZL.has(l)&&(s[l]=o[l])}Object.assign(a,s),Object.assign(a,He({},t(a),{lazy:void 0}))}async function ja(e,t,n,o,a,s,l,i,c){c===void 0&&(c={});let d,u,p,m=b=>{let _,g=new Promise((f,h)=>_=h);return p=()=>_(),t.signal.addEventListener("abort",p),Promise.race([b({request:t,params:n.params,context:c.requestContext}),g])};try{let b=n.route[e];if(n.route.lazy)if(b){let _,g=await Promise.all([m(b).catch(f=>{_=f}),b1(n.route,s,a)]);if(_)throw _;u=g[0]}else if(await b1(n.route,s,a),b=n.route[e],b)u=await m(b);else if(e==="action"){let _=new URL(t.url),g=_.pathname+_.search;throw zt(405,{method:t.method,pathname:g,routeId:n.route.id})}else return{type:ze.data,data:void 0};else if(b)u=await m(b);else{let _=new URL(t.url),g=_.pathname+_.search;throw zt(404,{pathname:g})}de(u!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(b){d=ze.error,u=b}finally{p&&t.signal.removeEventListener("abort",p)}if(TD(u)){let b=u.status;if(xD.has(b)){let g=u.headers.get("Location");if(de(g,"Redirects returned/thrown from loaders/actions must have a Location header"),!e0.test(g))g=lu(new URL(t.url),o.slice(0,o.indexOf(n)+1),l,!0,g,i);else if(!c.isStaticRequest){let f=new URL(t.url),h=g.startsWith("//")?new URL(f.protocol+g):new URL(g),j=br(h.pathname,l)!=null;h.origin===f.origin&&j&&(g=h.pathname+h.search+h.hash)}if(c.isStaticRequest)throw u.headers.set("Location",g),u;return{type:ze.redirect,status:b,location:g,revalidate:u.headers.get("X-Remix-Revalidate")!==null,reloadDocument:u.headers.get("X-Remix-Reload-Document")!==null}}if(c.isRouteRequest)throw{type:d===ze.error?ze.error:ze.data,response:u};let _;try{let g=u.headers.get("Content-Type");g&&/\bapplication\/json\b/.test(g)?_=await u.json():_=await u.text()}catch(g){return{type:ze.error,error:g}}return d===ze.error?{type:d,error:new nf(b,u.statusText,_),headers:u.headers}:{type:ze.data,data:_,statusCode:u.status,headers:u.headers}}if(d===ze.error)return{type:d,error:u};if(kD(u)){var y,C;return{type:ze.deferred,deferredData:u,statusCode:(y=u.init)==null?void 0:y.status,headers:((C=u.init)==null?void 0:C.headers)&&new Headers(u.init.headers)}}return{type:ze.data,data:u}}function ba(e,t,n,o){let a=e.createURL(r0(t)).toString(),s={signal:n};if(o&&an(o.formMethod)){let{formMethod:l,formEncType:i}=o;s.method=l.toUpperCase(),i==="application/json"?(s.headers=new Headers({"Content-Type":i}),s.body=JSON.stringify(o.json)):i==="text/plain"?s.body=o.text:i==="application/x-www-form-urlencoded"&&o.formData?s.body=iu(o.formData):s.body=o.formData}return new Request(a,s)}function iu(e){let t=new URLSearchParams;for(let[n,o]of e.entries())t.append(n,typeof o=="string"?o:o.name);return t}function C1(e){let t=new FormData;for(let[n,o]of e.entries())t.append(n,o);return t}function wD(e,t,n,o,a){let s={},l=null,i,c=!1,d={};return n.forEach((u,p)=>{let m=t[p].route.id;if(de(!Wr(u),"Cannot handle redirect results in processLoaderData"),Do(u)){let y=Ga(e,m),C=u.error;o&&(C=Object.values(o)[0],o=void 0),l=l||{},l[y.route.id]==null&&(l[y.route.id]=C),s[m]=void 0,c||(c=!0,i=qg(u.error)?u.error.status:500),u.headers&&(d[m]=u.headers)}else Vr(u)?(a.set(m,u.deferredData),s[m]=u.deferredData.data):s[m]=u.data,u.statusCode!=null&&u.statusCode!==200&&!c&&(i=u.statusCode),u.headers&&(d[m]=u.headers)}),o&&(l=o,s[Object.keys(o)[0]]=void 0),{loaderData:s,errors:l,statusCode:i||200,loaderHeaders:d}}function S1(e,t,n,o,a,s,l,i){let{loaderData:c,errors:d}=wD(t,n,o,a,i);for(let u=0;u<s.length;u++){let{key:p,match:m,controller:y}=s[u];de(l!==void 0&&l[u]!==void 0,"Did not find corresponding fetcher result");let C=l[u];if(!(y&&y.signal.aborted))if(Do(C)){let b=Ga(e.matches,m==null?void 0:m.route.id);d&&d[b.route.id]||(d=He({},d,{[b.route.id]:C.error})),e.fetchers.delete(p)}else if(Wr(C))de(!1,"Unhandled fetcher revalidation redirect");else if(Vr(C))de(!1,"Unhandled fetcher deferred data");else{let b=tr(C.data);e.fetchers.set(p,b)}}return{loaderData:c,errors:d}}function w1(e,t,n,o){let a=He({},t);for(let s of n){let l=s.route.id;if(t.hasOwnProperty(l)?t[l]!==void 0&&(a[l]=t[l]):e[l]!==void 0&&s.route.loader&&(a[l]=e[l]),o&&o.hasOwnProperty(l))break}return a}function Ga(e,t){return(t?e.slice(0,e.findIndex(o=>o.route.id===t)+1):[...e]).reverse().find(o=>o.route.hasErrorBoundary===!0)||e[0]}function _1(e){let t=e.length===1?e[0]:e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function zt(e,t){let{pathname:n,routeId:o,method:a,type:s}=t===void 0?{}:t,l="Unknown Server Error",i="Unknown @remix-run/router error";return e===400?(l="Bad Request",a&&n&&o?i="You made a "+a+' request to "'+n+'" but '+('did not provide a `loader` for route "'+o+'", ')+"so there is no way to handle the request.":s==="defer-action"?i="defer() is not supported in actions":s==="invalid-body"&&(i="Unable to encode submission body")):e===403?(l="Forbidden",i='Route "'+o+'" does not match URL "'+n+'"'):e===404?(l="Not Found",i='No route matches URL "'+n+'"'):e===405&&(l="Method Not Allowed",a&&n&&o?i="You made a "+a.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+o+'", ')+"so there is no way to handle the request.":a&&(i='Invalid request method "'+a.toUpperCase()+'"')),new nf(e||500,l,new Error(i),!0)}function k1(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(Wr(n))return{result:n,idx:t}}}function r0(e){let t=typeof e=="string"?Gn(e):e;return eo(He({},t,{hash:""}))}function _D(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function Vr(e){return e.type===ze.deferred}function Do(e){return e.type===ze.error}function Wr(e){return(e&&e.type)===ze.redirect}function kD(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function TD(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function ED(e){return mD.has(e.toLowerCase())}function an(e){return fD.has(e.toLowerCase())}async function T1(e,t,n,o,a,s){for(let l=0;l<n.length;l++){let i=n[l],c=t[l];if(!c)continue;let d=e.find(p=>p.route.id===c.route.id),u=d!=null&&!n0(d,c)&&(s&&s[c.route.id])!==void 0;if(Vr(i)&&(a||u)){let p=o[l];de(p,"Expected an AbortSignal for revalidating fetcher deferred result"),await o0(i,p,a).then(m=>{m&&(n[l]=m||n[l])})}}}async function o0(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:ze.data,data:e.deferredData.unwrappedData}}catch(a){return{type:ze.error,error:a}}return{type:ze.data,data:e.deferredData.data}}}function rf(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function cu(e,t){let n=typeof t=="string"?Gn(t).search:t.search;if(e[e.length-1].route.index&&rf(n||""))return e[e.length-1];let o=Qg(e);return o[o.length-1]}function E1(e){let{formMethod:t,formAction:n,formEncType:o,text:a,formData:s,json:l}=e;if(!(!t||!n||!o)){if(a!=null)return{formMethod:t,formAction:n,formEncType:o,formData:void 0,json:void 0,text:a};if(s!=null)return{formMethod:t,formAction:n,formEncType:o,formData:s,json:void 0,text:void 0};if(l!==void 0)return{formMethod:t,formAction:n,formEncType:o,formData:void 0,json:l,text:void 0}}}function Qc(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function ND(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function Ca(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function RD(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function tr(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function LD(e,t){try{let n=e.sessionStorage.getItem(t0);if(n){let o=JSON.parse(n);for(let[a,s]of Object.entries(o||{}))s&&Array.isArray(s)&&t.set(a,new Set(s||[]))}}catch{}}function DD(e,t){if(t.size>0){let n={};for(let[o,a]of t)n[o]=[...a];try{e.sessionStorage.setItem(t0,JSON.stringify(n))}catch(o){Jr(!1,"Failed to save applied view transitions in sessionStorage ("+o+").")}}}/**
 * React Router v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ys(){return ys=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},ys.apply(this,arguments)}const zs=v.createContext(null),of=v.createContext(null),Lr=v.createContext(null),rc=v.createContext(null),Dr=v.createContext({outlet:null,matches:[],isDataRoute:!1}),a0=v.createContext(null);function OD(e,t){let{relative:n}=t===void 0?{}:t;Fs()||de(!1);let{basename:o,navigator:a}=v.useContext(Lr),{hash:s,pathname:l,search:i}=Hs(e,{relative:n}),c=l;return o!=="/"&&(c=l==="/"?o:Bn([o,l])),a.createHref({pathname:c,search:i,hash:s})}function Fs(){return v.useContext(rc)!=null}function aa(){return Fs()||de(!1),v.useContext(rc).location}function s0(e){v.useContext(Lr).static||v.useLayoutEffect(e)}function AD(){let{isDataRoute:e}=v.useContext(Dr);return e?YD():MD()}function MD(){Fs()||de(!1);let e=v.useContext(zs),{basename:t,future:n,navigator:o}=v.useContext(Lr),{matches:a}=v.useContext(Dr),{pathname:s}=aa(),l=JSON.stringify(ef(a,n.v7_relativeSplatPath)),i=v.useRef(!1);return s0(()=>{i.current=!0}),v.useCallback(function(d,u){if(u===void 0&&(u={}),!i.current)return;if(typeof d=="number"){o.go(d);return}let p=tf(d,JSON.parse(l),s,u.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:Bn([t,p.pathname])),(u.replace?o.replace:o.push)(p,u.state,u)},[t,o,l,s,e])}const PD=v.createContext(null);function $D(e){let t=v.useContext(Dr).outlet;return t&&v.createElement(PD.Provider,{value:e},t)}function Hs(e,t){let{relative:n}=t===void 0?{}:t,{future:o}=v.useContext(Lr),{matches:a}=v.useContext(Dr),{pathname:s}=aa(),l=JSON.stringify(ef(a,o.v7_relativeSplatPath));return v.useMemo(()=>tf(e,JSON.parse(l),s,n==="path"),[e,l,s,n])}function BD(e,t,n,o){Fs()||de(!1);let{navigator:a}=v.useContext(Lr),{matches:s}=v.useContext(Dr),l=s[s.length-1],i=l?l.params:{};l&&l.pathname;let c=l?l.pathnameBase:"/";l&&l.route;let d=aa(),u;if(t){var p;let _=typeof t=="string"?Gn(t):t;c==="/"||(p=_.pathname)!=null&&p.startsWith(c)||de(!1),u=_}else u=d;let m=u.pathname||"/",y=c==="/"?m:m.slice(c.length)||"/",C=Lo(e,{pathname:y}),b=UD(C&&C.map(_=>Object.assign({},_,{params:Object.assign({},i,_.params),pathname:Bn([c,a.encodeLocation?a.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?c:Bn([c,a.encodeLocation?a.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),s,n,o);return t&&b?v.createElement(rc.Provider,{value:{location:ys({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Ue.Pop}},b):b}function ID(){let e=KD(),t=qg(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},t),n?v.createElement("pre",{style:a},n):null,s)}const zD=v.createElement(ID,null);class FD extends v.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?v.createElement(Dr.Provider,{value:this.props.routeContext},v.createElement(a0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function HD(e){let{routeContext:t,match:n,children:o}=e,a=v.useContext(zs);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),v.createElement(Dr.Provider,{value:t},o)}function UD(e,t,n,o){var a;if(t===void 0&&(t=[]),n===void 0&&(n=null),o===void 0&&(o=null),e==null){var s;if((s=n)!=null&&s.errors)e=n.matches;else return null}let l=e,i=(a=n)==null?void 0:a.errors;if(i!=null){let u=l.findIndex(p=>p.route.id&&(i==null?void 0:i[p.route.id]));u>=0||de(!1),l=l.slice(0,Math.min(l.length,u+1))}let c=!1,d=-1;if(n&&o&&o.v7_partialHydration)for(let u=0;u<l.length;u++){let p=l[u];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(d=u),p.route.id){let{loaderData:m,errors:y}=n,C=p.route.loader&&m[p.route.id]===void 0&&(!y||y[p.route.id]===void 0);if(p.route.lazy||C){c=!0,d>=0?l=l.slice(0,d+1):l=[l[0]];break}}}return l.reduceRight((u,p,m)=>{let y,C=!1,b=null,_=null;n&&(y=i&&p.route.id?i[p.route.id]:void 0,b=p.route.errorElement||zD,c&&(d<0&&m===0?(GD("route-fallback",!1),C=!0,_=null):d===m&&(C=!0,_=p.route.hydrateFallbackElement||null)));let g=t.concat(l.slice(0,m+1)),f=()=>{let h;return y?h=b:C?h=_:p.route.Component?h=v.createElement(p.route.Component,null):p.route.element?h=p.route.element:h=u,v.createElement(HD,{match:p,routeContext:{outlet:u,matches:g,isDataRoute:n!=null},children:h})};return n&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?v.createElement(FD,{location:n.location,revalidation:n.revalidation,component:b,error:y,children:f(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):f()},null)}var l0=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(l0||{}),Si=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Si||{});function VD(e){let t=v.useContext(zs);return t||de(!1),t}function WD(e){let t=v.useContext(of);return t||de(!1),t}function ZD(e){let t=v.useContext(Dr);return t||de(!1),t}function i0(e){let t=ZD(),n=t.matches[t.matches.length-1];return n.route.id||de(!1),n.route.id}function KD(){var e;let t=v.useContext(a0),n=WD(Si.UseRouteError),o=i0(Si.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[o]}function YD(){let{router:e}=VD(l0.UseNavigateStable),t=i0(Si.UseNavigateStable),n=v.useRef(!1);return s0(()=>{n.current=!0}),v.useCallback(function(a,s){s===void 0&&(s={}),n.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,ys({fromRouteId:t},s)))},[e,t])}const N1={};function GD(e,t,n){!t&&!N1[e]&&(N1[e]=!0)}function XD(e){return $D(e.context)}function QD(e){let{basename:t="/",children:n=null,location:o,navigationType:a=Ue.Pop,navigator:s,static:l=!1,future:i}=e;Fs()&&de(!1);let c=t.replace(/^\/*/,"/"),d=v.useMemo(()=>({basename:c,navigator:s,static:l,future:ys({v7_relativeSplatPath:!1},i)}),[c,i,s,l]);typeof o=="string"&&(o=Gn(o));let{pathname:u="/",search:p="",hash:m="",state:y=null,key:C="default"}=o,b=v.useMemo(()=>{let _=br(u,c);return _==null?null:{location:{pathname:_,search:p,hash:m,state:y,key:C},navigationType:a}},[c,u,p,m,y,C,a]);return b==null?null:v.createElement(Lr.Provider,{value:d},v.createElement(rc.Provider,{children:n,value:b}))}new Promise(()=>{});function qD(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:v.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(t,{hydrateFallbackElement:v.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:v.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ko(){return Ko=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Ko.apply(this,arguments)}function c0(e,t){if(e==null)return{};var n={},o=Object.keys(e),a,s;for(s=0;s<o.length;s++)a=o[s],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function JD(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function eO(e,t){return e.button===0&&(!t||t==="_self")&&!JD(e)}const tO=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],nO=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"];function rO(e,t){return jD({basename:t==null?void 0:t.basename,future:Ko({},t==null?void 0:t.future,{v7_prependBasename:!0}),history:UL({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||oO(),routes:e,mapRouteProperties:qD,window:t==null?void 0:t.window}).initialize()}function oO(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=Ko({},t,{errors:aO(t.errors)})),t}function aO(e){if(!e)return null;let t=Object.entries(e),n={};for(let[o,a]of t)if(a&&a.__type==="RouteErrorResponse")n[o]=new nf(a.status,a.statusText,a.data,a.internal===!0);else if(a&&a.__type==="Error"){if(a.__subType){let s=window[a.__subType];if(typeof s=="function")try{let l=new s(a.message);l.stack="",n[o]=l}catch{}}if(n[o]==null){let s=new Error(a.message);s.stack="",n[o]=s}}else n[o]=a;return n}const d0=v.createContext({isTransitioning:!1}),sO=v.createContext(new Map),lO="startTransition",R1=j5[lO],iO="flushSync",L1=L8[iO];function cO(e){R1?R1(e):e()}function Sa(e){L1?L1(e):e()}class dO{constructor(){this.status="pending",this.promise=new Promise((t,n)=>{this.resolve=o=>{this.status==="pending"&&(this.status="resolved",t(o))},this.reject=o=>{this.status==="pending"&&(this.status="rejected",n(o))}})}}function uO(e){let{fallbackElement:t,router:n,future:o}=e,[a,s]=v.useState(n.state),[l,i]=v.useState(),[c,d]=v.useState({isTransitioning:!1}),[u,p]=v.useState(),[m,y]=v.useState(),[C,b]=v.useState(),_=v.useRef(new Map),{v7_startTransition:g}=o||{},f=v.useCallback(w=>{g?cO(w):w()},[g]),h=v.useCallback((w,T)=>{let{deletedFetchers:E,unstable_flushSync:D,unstable_viewTransitionOpts:M}=T;E.forEach(X=>_.current.delete(X)),w.fetchers.forEach((X,Q)=>{X.data!==void 0&&_.current.set(Q,X.data)});let K=n.window==null||typeof n.window.document.startViewTransition!="function";if(!M||K){D?Sa(()=>s(w)):f(()=>s(w));return}if(D){Sa(()=>{m&&(u&&u.resolve(),m.skipTransition()),d({isTransitioning:!0,flushSync:!0,currentLocation:M.currentLocation,nextLocation:M.nextLocation})});let X=n.window.document.startViewTransition(()=>{Sa(()=>s(w))});X.finished.finally(()=>{Sa(()=>{p(void 0),y(void 0),i(void 0),d({isTransitioning:!1})})}),Sa(()=>y(X));return}m?(u&&u.resolve(),m.skipTransition(),b({state:w,currentLocation:M.currentLocation,nextLocation:M.nextLocation})):(i(w),d({isTransitioning:!0,flushSync:!1,currentLocation:M.currentLocation,nextLocation:M.nextLocation}))},[n.window,m,u,_,f]);v.useLayoutEffect(()=>n.subscribe(h),[n,h]),v.useEffect(()=>{c.isTransitioning&&!c.flushSync&&p(new dO)},[c]),v.useEffect(()=>{if(u&&l&&n.window){let w=l,T=u.promise,E=n.window.document.startViewTransition(async()=>{f(()=>s(w)),await T});E.finished.finally(()=>{p(void 0),y(void 0),i(void 0),d({isTransitioning:!1})}),y(E)}},[f,l,u,n.window]),v.useEffect(()=>{u&&l&&a.location.key===l.location.key&&u.resolve()},[u,m,a.location,l]),v.useEffect(()=>{!c.isTransitioning&&C&&(i(C.state),d({isTransitioning:!0,flushSync:!1,currentLocation:C.currentLocation,nextLocation:C.nextLocation}),b(void 0))},[c.isTransitioning,C]),v.useEffect(()=>{},[]);let j=v.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:w=>n.navigate(w),push:(w,T,E)=>n.navigate(w,{state:T,preventScrollReset:E==null?void 0:E.preventScrollReset}),replace:(w,T,E)=>n.navigate(w,{replace:!0,state:T,preventScrollReset:E==null?void 0:E.preventScrollReset})}),[n]),S=n.basename||"/",x=v.useMemo(()=>({router:n,navigator:j,static:!1,basename:S}),[n,j,S]);return v.createElement(v.Fragment,null,v.createElement(zs.Provider,{value:x},v.createElement(of.Provider,{value:a},v.createElement(sO.Provider,{value:_.current},v.createElement(d0.Provider,{value:c},v.createElement(QD,{basename:S,location:a.location,navigationType:a.historyAction,navigator:j,future:{v7_relativeSplatPath:n.future.v7_relativeSplatPath}},a.initialized||n.future.v7_partialHydration?v.createElement(pO,{routes:n.routes,future:n.future,state:a}):t))))),null)}function pO(e){let{routes:t,future:n,state:o}=e;return BD(t,void 0,o,n)}const fO=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",hO=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,mO=v.forwardRef(function(t,n){let{onClick:o,relative:a,reloadDocument:s,replace:l,state:i,target:c,to:d,preventScrollReset:u,unstable_viewTransition:p}=t,m=c0(t,tO),{basename:y}=v.useContext(Lr),C,b=!1;if(typeof d=="string"&&hO.test(d)&&(C=d,fO))try{let h=new URL(window.location.href),j=d.startsWith("//")?new URL(h.protocol+d):new URL(d),S=br(j.pathname,y);j.origin===h.origin&&S!=null?d=S+j.search+j.hash:b=!0}catch{}let _=OD(d,{relative:a}),g=vO(d,{replace:l,state:i,target:c,preventScrollReset:u,relative:a,unstable_viewTransition:p});function f(h){o&&o(h),h.defaultPrevented||g(h)}return v.createElement("a",Ko({},m,{href:C||_,onClick:b||s?o:f,ref:n,target:c}))}),xO=v.forwardRef(function(t,n){let{"aria-current":o="page",caseSensitive:a=!1,className:s="",end:l=!1,style:i,to:c,unstable_viewTransition:d,children:u}=t,p=c0(t,nO),m=Hs(c,{relative:p.relative}),y=aa(),C=v.useContext(of),{navigator:b}=v.useContext(Lr),_=C!=null&&yO(m)&&d===!0,g=b.encodeLocation?b.encodeLocation(m).pathname:m.pathname,f=y.pathname,h=C&&C.navigation&&C.navigation.location?C.navigation.location.pathname:null;a||(f=f.toLowerCase(),h=h?h.toLowerCase():null,g=g.toLowerCase());const j=g!=="/"&&g.endsWith("/")?g.length-1:g.length;let S=f===g||!l&&f.startsWith(g)&&f.charAt(j)==="/",x=h!=null&&(h===g||!l&&h.startsWith(g)&&h.charAt(g.length)==="/"),w={isActive:S,isPending:x,isTransitioning:_},T=S?o:void 0,E;typeof s=="function"?E=s(w):E=[s,S?"active":null,x?"pending":null,_?"transitioning":null].filter(Boolean).join(" ");let D=typeof i=="function"?i(w):i;return v.createElement(mO,Ko({},p,{"aria-current":T,className:E,ref:n,style:D,to:c,unstable_viewTransition:d}),typeof u=="function"?u(w):u)});var du;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(du||(du={}));var D1;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(D1||(D1={}));function gO(e){let t=v.useContext(zs);return t||de(!1),t}function vO(e,t){let{target:n,replace:o,state:a,preventScrollReset:s,relative:l,unstable_viewTransition:i}=t===void 0?{}:t,c=AD(),d=aa(),u=Hs(e,{relative:l});return v.useCallback(p=>{if(eO(p,n)){p.preventDefault();let m=o!==void 0?o:eo(d)===eo(u);c(e,{replace:m,state:a,preventScrollReset:s,relative:l,unstable_viewTransition:i})}},[d,c,u,o,a,n,e,s,l,i])}function yO(e,t){t===void 0&&(t={});let n=v.useContext(d0);n==null&&de(!1);let{basename:o}=gO(du.useViewTransitionState),a=Hs(e,{relative:t.relative});if(!n.isTransitioning)return!1;let s=br(n.currentLocation.pathname,o)||n.currentLocation.pathname,l=br(n.nextLocation.pathname,o)||n.nextLocation.pathname;return su(a.pathname,l)!=null||su(a.pathname,s)!=null}const Us=({to:e,className:t="",exact:n,onClick:o,label:a,style:s,...l})=>r.jsx(xO,{to:e,onClick:o,end:n&&"end",className:({isActive:i})=>`${t} ${i?"active":""}`,"aria-label":a,style:s,children:r.jsx(Ls,{...l})}),u0=()=>r.jsx(R,{code:"pager",Component:FL,Source:HL,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"pager"})," property can be used to pass configuration options to the ",r.jsx(Us,{to:"/components/Pager",text:"Pager"})," component displayed underneath the datatable."]})}),jO=Object.freeze(Object.defineProperty({__proto__:null,default:u0},Symbol.toStringTag,{value:"Module"})),bO=`export const animals = [
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
`,p0=()=>r.jsxs(U,{code:"rows",children:[r.jsxs("div",{className:"cols-2 stack-desktop mar-b-4",children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"rows"})," property is used to provide the data that you want to display.  It should be an array of objects.  The object can contain any data."]}),r.jsxs("p",{children:["In these examples we're using this data for the ",r.jsx("code",{children:"rows"}),"."]})]}),r.jsx("div",{className:"example",children:r.jsx("div",{className:"source",children:r.jsx(An,{code:bO,language:"js"})})})]}),CO=Object.freeze(Object.defineProperty({__proto__:null,default:p0},Symbol.toStringTag,{value:"Module"})),SO=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Datatable"}),r.jsx(Ug,{}),r.jsxs(rt,{tocName:"datatable",children:[r.jsx(ce,{title:"Properties"}),r.jsx(p0,{}),r.jsx(Zg,{}),r.jsx(Vg,{}),r.jsx(u0,{}),r.jsx(ce,{title:"Column Properties"}),r.jsx(Yg,{}),r.jsx(Wg,{}),r.jsx(Kg,{})]})]}),wO=Object.freeze(Object.defineProperty({__proto__:null,default:SO},Symbol.toStringTag,{value:"Module"})),_O=()=>r.jsx(Qe,{summary:"Click to reveal",children:"This is the content that is revealed."}),kO=`import { Details } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Details } from '@abw/badger-react-ui

const DetailsExample = () =>
  <Details summary="Click to reveal">
    This is the content that is revealed.
  </Details>

export default DetailsExample`,f0=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Details"})," component displays a summary with revealable content using the native HTML ",r.jsx("code",{children:"details"})," element."]}),r.jsx(pe,{Component:_O,code:kO})]}),TO=Object.freeze(Object.defineProperty({__proto__:null,default:f0},Symbol.toStringTag,{value:"Module"})),EO=()=>r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(Qe,{summary:"Bordered",border:!0,children:"This is the content that is revealed."}),r.jsx(Qe,{summary:"Bordered and Lined",border:!0,lined:!0,children:"This is the content that is revealed."}),r.jsx(Qe,{summary:"Wide Border",border:3,lined:!0,children:"This is the content that is revealed."})]}),NO=`import React from 'react'
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

export default DetailsExample`,h0=()=>r.jsx(R,{code:"border",Component:EO,Source:NO,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"border"})," property can be used to add a CSS class to add a border around the component.  By itself it will add a one pixel border.  You can also set it to an integer (in pixels) for a wider border.  The same border width will also be applied to the line separating the summary and content when the ",r.jsx("code",{children:"lined"})," ","property is used."]})}),RO=Object.freeze(Object.defineProperty({__proto__:null,default:h0},Symbol.toStringTag,{value:"Module"})),LO=()=>r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(Qe,{summary:"Blue Border",color:"blue",border:!0,lined:!0,children:"This is the content that is revealed."}),r.jsx(Qe,{summary:"Blue Shaded",color:"blue",shaded:!0,lined:!0,border:!0,children:"This is the content that is revealed."})]}),DO=`import React from 'react'
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

export default DetailsExample`,m0=()=>r.jsx(R,{code:"color",Component:LO,Source:DO,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"color"})," property can be used to set the color range. It is most commonly used in conjunction with the ",r.jsx("code",{children:"border"}),","," ",r.jsx("code",{children:"lined"})," and ",r.jsx("code",{children:"shaded"})," properties."]})}),OO=Object.freeze(Object.defineProperty({__proto__:null,default:m0},Symbol.toStringTag,{value:"Module"})),AO=()=>r.jsx("div",{className:"grid-1 gap-4",children:r.jsx(Qe,{summary:"This is the summary",content:"This is the content that is revealed."})}),MO=`import React from 'react'
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

export default DetailsExample`,x0=()=>r.jsx(R,{code:"content",Component:AO,Source:MO,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"content"})," property can be used as a short-cut to set the body content for simple cases."]})}),PO=Object.freeze(Object.defineProperty({__proto__:null,default:x0},Symbol.toStringTag,{value:"Module"})),$O=()=>r.jsx(Qe,{summary:"Lined Details",lined:!0,children:"This is the content that is revealed."}),BO=`import React from 'react'
import { Details } from '@/src/index.jsx'

const DetailsExample = () =>
  /* START */
  <Details summary="Lined Details" lined>
    This is the content that is revealed.
  </Details>
  /* END */

export default DetailsExample`,g0=()=>r.jsx(R,{code:"lined",Component:$O,Source:BO,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"lined"})," property can be used to add a CSS class to add a line between the summary and content."]})}),IO=Object.freeze(Object.defineProperty({__proto__:null,default:g0},Symbol.toStringTag,{value:"Module"})),zO=()=>r.jsx("div",{className:"grid-1 gap-4",children:r.jsx(Qe,{summary:"This is the summary",open:!0,children:"This is the content that is revealed."})}),FO=`import React from 'react'
import { Details } from '@/src/index.jsx'

const DetailsExample = () =>
  <div className="grid-1 gap-4">
    {/* START */}
    <Details summary="This is the summary" open>
      This is the content that is revealed.
    </Details>
    {/* END */}
  </div>

export default DetailsExample`,v0=()=>r.jsx(R,{code:"open",Component:zO,Source:FO,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"open"})," property can be set to make the details initially open."]})}),HO=Object.freeze(Object.defineProperty({__proto__:null,default:v0},Symbol.toStringTag,{value:"Module"})),UO=()=>r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(Qe,{summary:"Border Radius",border:!0,lined:!0,radius:2,children:"This is the content that is revealed."}),r.jsx(Qe,{summary:"Border Radius",border:!0,lined:!0,radius:4,children:"This is the content that is revealed."})]}),VO=`import React from 'react'
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

export default DetailsExample`,y0=()=>r.jsx(R,{code:"radius",Component:UO,Source:VO,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"radius"})," property can be used to set the border radius. It should be an integer in units of 0.25rem."]})}),WO=Object.freeze(Object.defineProperty({__proto__:null,default:y0},Symbol.toStringTag,{value:"Module"})),ZO=()=>r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(Qe,{summary:"Shaded",shaded:!0,children:"This is the content that is revealed."}),r.jsx(Qe,{summary:"Shaded and Border",border:!0,shaded:!0,children:"This is the content that is revealed."}),r.jsx(Qe,{summary:"Shaded, Lined and Border",border:!0,shaded:!0,lined:!0,children:"This is the content that is revealed."})]}),KO=`import React from 'react'
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

export default DetailsExample`,j0=()=>r.jsx(R,{code:"shaded",Component:ZO,Source:KO,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"shaded"})," property can be used to add shading."]})}),YO=Object.freeze(Object.defineProperty({__proto__:null,default:j0},Symbol.toStringTag,{value:"Module"})),GO=()=>r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(Qe,{summary:"Shadow 1",border:!0,shaded:!0,shadow:1,children:"This is the content that is revealed."}),r.jsx(Qe,{summary:"Shadow 3",border:!0,shaded:!0,shadow:3,children:"This is the content that is revealed."}),r.jsx(Qe,{summary:"Shadow 5",border:!0,shaded:!0,shadow:5,children:"This is the content that is revealed."})]}),XO=`import React from 'react'
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

export default DetailsExample`,b0=()=>r.jsx(R,{code:"shadow",Component:GO,Source:XO,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"shadow"})," property can be used to add a drop shadow. This can be any integer from 1 to 5."]})}),QO=Object.freeze(Object.defineProperty({__proto__:null,default:b0},Symbol.toStringTag,{value:"Module"})),qO=()=>r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(Qe,{summary:"This is the summary",children:"This is the content that is revealed."}),r.jsx(Qe,{border:!0,lined:!0,summary:r.jsxs("div",{className:"wide flex space middle pad-r-2",children:[r.jsx("div",{children:"Control Panel"}),r.jsx(ee,{name:"cog"})]}),children:"This is the content that is revealed."})]}),JO=`import React from 'react'
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

export default DetailsExample`,C0=()=>r.jsx(R,{code:"summary",Component:qO,Source:JO,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"summary"})," property is used to set the summary text. It can be a text string or any JSX content."]})}),eA=Object.freeze(Object.defineProperty({__proto__:null,default:C0},Symbol.toStringTag,{value:"Module"})),tA=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Details"}),r.jsx(f0,{}),r.jsxs(rt,{tocName:"details",children:[r.jsx(ce,{title:"Properties"}),r.jsx(C0,{}),r.jsx(x0,{}),r.jsx(v0,{}),r.jsx(g0,{}),r.jsx(h0,{}),r.jsx(y0,{}),r.jsx(j0,{}),r.jsx(b0,{}),r.jsx(m0,{}),r.jsx(ce,{title:"CSS Classes"}),r.jsxs(U,{code:"className",children:["Set a CSS class for the ",r.jsx("code",{children:"details"})," container element."]}),r.jsxs(U,{code:"summaryClass",children:["Set a CSS class for the ",r.jsx("code",{children:"summary"})," element."]}),r.jsxs(U,{code:"contentClass",children:["Set a CSS class for the content ",r.jsx("code",{children:"div"})," element."]}),r.jsx(ce,{title:"Components"}),r.jsx(U,{code:"Summary",id:"Summary-component",children:"Renders the summary element."}),r.jsx(U,{code:"Content",id:"Content=component",children:"Renders the content."})]})]}),nA=Object.freeze(Object.defineProperty({__proto__:null,default:tA},Symbol.toStringTag,{value:"Module"})),rA=()=>r.jsx(Er,{text:"Dropdown Menu",iconRight:"angle-down",options:["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger","Colin Camel","David Donkey","Eddie Elephant","Franky Ferret","Gina Goat","Helen Horse","Ian Iguana","Juliet Jackdaw","Kevin Kangaroo","Linda Llama","Mike Monkey"]}),oA=`import { DropdownMenu } from '@/src/index.jsx'

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

export default DropdownExample`,S0=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"DropdownMenu"})," component generates a dropdown menu.  It extends the behaviour of the"," ",r.jsx(Us,{to:"/components/dropdown",children:"Dropdown"})," component."]}),r.jsxs("div",{className:"cols-2 stack-desktop",children:[r.jsx("p",{children:"The default behaviour is to open the dropdown menu when the user clicks on the trigger."}),r.jsxs("p",{children:["Keyboard navigation is also supported.  The user can ",r.jsx("code",{children:"TAB"})," ","to the trigger and then press ",r.jsx("code",{children:"SPACE"}),", ",r.jsx("code",{children:"ENTER"}),","," ",r.jsx("code",{children:"DOWN"})," or ",r.jsx("code",{children:"UP"})," to open the menu."]}),r.jsxs("p",{children:["Once the menu is open, the ",r.jsx("code",{children:"DOWN"})," and ",r.jsx("code",{children:"UP"})," keys"," ","can be used to select menu items, ",r.jsx("code",{children:"ENTER"})," or"," ",r.jsx("code",{children:"SPACE"})," will select the current item and ",r.jsx("code",{children:"ESCAPE"})," ","will close the menu."]})]}),r.jsx(pe,{Component:rA,code:oA})]}),aA=Object.freeze(Object.defineProperty({__proto__:null,default:S0},Symbol.toStringTag,{value:"Module"})),sA=()=>r.jsx(Er,{text:"Dropdown Menu",iconRight:"angle-down",onSelect:e=>alert(`You selected: ${e.text}`),options:[{text:"Item One"},{text:"Item Two"},{text:"Item Three"}]}),lA=`import React from 'react'
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

export default DropdownMenuExample`,w0=()=>r.jsx(R,{code:"onSelect",Component:sA,Source:lA,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"onSelect"})," property should be used to define a handler which will be called when an item is selected, either by being clicked on or by keyboard selection.  The handler will be passed the data for the item that was selected."]})}),iA=Object.freeze(Object.defineProperty({__proto__:null,default:w0},Symbol.toStringTag,{value:"Module"})),cA=()=>r.jsx(Er,{text:"Simple Options",iconRight:"angle-down",options:["Hello","World",10,11]}),dA=`import React from 'react'
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

export default DropdownExample`,uA=()=>r.jsx(Er,{text:"Option Separators",iconRight:"angle-down",options:["One","Two","Three",{separator:!0},"Eleven","Twelve","Thirteen",{separator:!0},"One Hundred","Two Hundred","Three Hundred"]}),pA=`import React from 'react'
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

export default DropdownExample`,fA=()=>r.jsx(Er,{text:"Object Options",iconRight:"angle-down",options:[{text:"Star",iconLeft:"star"},{text:"Heart",iconRight:"heart",className:"text-right"},{text:"Move",iconLeft:"angle-left",iconRight:"angle-right"},{text:r.jsxs("div",{className:"flex space small",children:[r.jsx("div",{children:"Foo"}),r.jsx("div",{children:"Bar"})]})}]}),hA=`import React from 'react'
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

export default DropdownExample`,mA=()=>r.jsx(Er,{text:"Option Headings",iconRight:"angle-down",options:[{heading:"Single Digit Numbers"},"One","Two","Three",{heading:"Double Digit Numbers"},"Eleven","Twelve","Thirteen",{heading:"Triple Digit Numbers"},"One Hundred","Two Hundred","Three Hundred"]}),xA=`import React from 'react'
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

export default DropdownExample`,gA=()=>r.jsx(Er,{text:"Disabled Options",iconRight:"angle-down",options:[{text:"Disabled #1",disabled:!0},{text:"Enabled #2"},{text:"Disabled #3",disabled:!0},{text:"Enabled #4"},{text:"Disabled #5",disabled:!0}]}),vA=`import React from 'react'
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

export default DropdownExample`,_0=()=>r.jsxs(U,{code:"options",children:[r.jsxs("div",{className:"cols-2 stack-desktop mar-b-4",children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"options"})," property should be used to define an array of options to display in the menu."]}),r.jsx("p",{children:"For simple cases, each element in the array can be a text string or numerical value."})]}),r.jsx(pe,{Component:cA,code:dA,caption:"options",expand:!1,undent:2}),r.jsxs("div",{className:"cols-2 stack-desktop mar-b-4",children:[r.jsxs("p",{children:["An element in the ",r.jsx("code",{children:"options"})," array can also be an object. It should contain a ",r.jsx("code",{children:"text"})," property which can be a string or JSX fragment. A ",r.jsx("code",{children:"className"})," can be included to add a CSS class to the option."]}),r.jsxs("p",{children:["The content for an element is rendered using the ",r.jsx("code",{children:"WithIcon"})," ","component from"," ",r.jsx("a",{href:"https://abw.github.io/badger-icon/",children:"Badger Icon"})," allowing you to include ",r.jsx("code",{children:"iconLeft"})," and ",r.jsx("code",{children:"iconRight"})," properties to add icons to either side, along with ",r.jsx("code",{children:"iconLeftClass"})," and"," ",r.jsx("code",{children:"iconRightClass"})," to set CSS classes for those icons."]})]}),r.jsx(pe,{Component:fA,code:hA,caption:"options",expand:!1,undent:2}),r.jsx("div",{className:"cols-2 stack-desktop mar-b-4",children:r.jsxs("p",{children:["An object in the ",r.jsx("code",{children:"options"})," array can have a"," ",r.jsx("code",{children:"disabled"})," property set to ",r.jsx("code",{children:"true"})," to disable the option."]})}),r.jsx(pe,{Component:gA,code:vA,caption:"options",expand:!1,undent:2}),r.jsx("div",{className:"cols-2 stack-desktop mar-b-4",children:r.jsxs("p",{children:["An object in the ",r.jsx("code",{children:"options"})," array can have a"," ",r.jsx("code",{children:"separator"})," property set to ",r.jsx("code",{children:"true"})," to create a separator."]})}),r.jsx(pe,{Component:uA,code:pA,caption:"options",expand:!1,undent:2}),r.jsx("div",{className:"cols-2 stack-desktop mar-b-4",children:r.jsxs("p",{children:["An object in the ",r.jsx("code",{children:"options"})," array can have a"," ",r.jsx("code",{children:"heading"})," property to create a section heading."]})}),r.jsx(pe,{Component:mA,code:xA,caption:"options",expand:!1,undent:2})]}),yA=Object.freeze(Object.defineProperty({__proto__:null,default:_0},Symbol.toStringTag,{value:"Module"})),to=({children:e,align:t="top"})=>r.jsx("div",{className:`grid-2 gap-h-8 stack-desktop ${t}`,style:{"--prose-width":"100%"},children:e}),jA=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Dropdown Menu"}),r.jsx(S0,{}),r.jsxs(rt,{tocName:"dropdown",children:[r.jsx(ce,{title:"Properties"}),r.jsxs("p",{className:"large",children:["All the properties supported by the"," ",r.jsx(Us,{to:"/components/dropdown",children:"Dropdown"})," component are supported.  These are the additional properties specific to the ",r.jsx("code",{children:"DropdownMenu"}),"."]}),r.jsx(_0,{}),r.jsx(w0,{}),r.jsxs(to,{children:[r.jsxs("div",{className:"flow",children:[r.jsx(ce,{title:"CSS Classes"}),r.jsxs(U,{code:"optionClass",children:["Used to set the CSS class added to each dropdown menu item. The default value is ",r.jsx("code",{children:"item no-hover"}),".  The"," ",r.jsx("code",{children:"no-hover"})," class suppresses the hover styles that would usually be applied to menu items.  Instead the"," ",r.jsx("code",{children:"active"})," class is added to the active item, selected either by hovering over it or by keyboard navigation."]}),r.jsxs(U,{code:"separatorClass",children:["Used to set the CSS class added to the dropdown menu separator. The default value is ",r.jsx("code",{children:"separator"}),"."]})]}),r.jsxs("div",{className:"flow",children:[r.jsx(ce,{title:"Components"}),r.jsxs(U,{code:"Options",id:"Options-component",children:["Renders the dropdown menu options.  Defaults to ",r.jsx("code",{children:"DropdownMenuOptions"}),"."]}),r.jsxs(U,{code:"Option",id:"Option-component",children:["Renders each dropdown menu option.  Defaults to ",r.jsx("code",{children:"DropdownMenuOption"}),"."]}),r.jsxs(U,{code:"Separator",id:"Separator-component",children:["Renders a separator between menu items.  Defaults to ",r.jsx("code",{children:"DropdownMenuSeparator"}),"."]})]})]})]})]}),bA=Object.freeze(Object.defineProperty({__proto__:null,default:jA},Symbol.toStringTag,{value:"Module"})),CA=()=>r.jsx(pn,{text:"Dropdown",children:"Hello World!"}),SA=`import { Dropdown } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Dropdown } from '@abw/badger-react-ui

const DropdownExample = () => {
  return (
    <Dropdown text='Dropdown'>
      Hello World!
    </Dropdown>
  )
}

export default DropdownExample`,k0=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Dropdown"})," component can be used to display content that is visible when the user clicks on the trigger."]}),r.jsx("div",{className:"cols-2 stack-desktop",children:r.jsx("p",{children:"The default behaviour is to open the dropdown when the user clicks on the trigger."})}),r.jsx(pe,{Component:CA,code:SA})]}),wA=Object.freeze(Object.defineProperty({__proto__:null,default:k0},Symbol.toStringTag,{value:"Module"})),_A=()=>r.jsx(pn,{text:"Dropdown Content",content:"Hello World!"}),kA=`import React from 'react'
import { Dropdown } from '@/src/index.jsx'

const DropdownExample = () =>
  /* START */
  <Dropdown
    text='Dropdown Content'
    content='Hello World!'
  />
  /* END */

export default DropdownExample`,T0=()=>r.jsx(R,{code:"content",Component:_A,Source:kA,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"content"})," property can be used to define the content as a short-cut.  Otherwise any child content of the"," ",r.jsx("code",{children:"Dropdown"})," component will be displayed."]})}),TA=Object.freeze(Object.defineProperty({__proto__:null,default:T0},Symbol.toStringTag,{value:"Module"})),EA=()=>r.jsx(pn,{text:"Dropdown iconLeft",iconLeft:"angle-down",content:"Hello World!"}),NA=`import React from 'react'
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

export default DropdownExample`,E0=()=>r.jsx(R,{code:"iconLeft",Component:EA,Source:NA,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"iconLeft"})," property can used to define an icon for the left side of the trigger.  The ",r.jsx("code",{children:"iconLeftClass"})," can be used to add a CSS class for it."]})}),RA=Object.freeze(Object.defineProperty({__proto__:null,default:E0},Symbol.toStringTag,{value:"Module"})),LA=()=>r.jsx(pn,{text:"Dropdown iconLeftRotate",iconLeft:"angle-right",iconLeftRotate:90,content:"Hello World!"}),DA=`import React from 'react'
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

export default DropdownMenuExample`,N0=()=>r.jsx(R,{code:"iconLeftRotate",Component:LA,Source:DA,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"iconLeftRotate"})," property can used to specify the rotation (in degrees) of the icon when the dropdown is open."]})}),OA=Object.freeze(Object.defineProperty({__proto__:null,default:N0},Symbol.toStringTag,{value:"Module"})),AA=()=>r.jsx(pn,{text:"Dropdown iconRight",iconRight:"angle-down",content:"Hello World!"}),MA=`import React from 'react'
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

export default DropdownExample`,R0=()=>r.jsx(R,{code:"iconRight",Component:AA,Source:MA,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"iconRight"})," property can used to define an icon for the left side of the trigger.  The ",r.jsx("code",{children:"iconRightClass"})," can be used to add a CSS class for it."]})}),PA=Object.freeze(Object.defineProperty({__proto__:null,default:R0},Symbol.toStringTag,{value:"Module"})),$A=()=>r.jsx(pn,{text:"Dropdown iconRightRotate",iconRight:"angle-left",iconRightRotate:-90,content:"Hello World!"}),BA=`import React from 'react'
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

export default DropdownExample`,L0=()=>r.jsx(R,{code:"iconRightRotate",Component:$A,Source:BA,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"iconRightRotate"})," property can used to specify the rotation (in degrees) of the icon when the dropdown is open."]})}),IA=Object.freeze(Object.defineProperty({__proto__:null,default:L0},Symbol.toStringTag,{value:"Module"})),zA=()=>r.jsx(pn,{openOnHover:!0,text:"Dropdown openOnHover",content:"Hello World!"}),FA=`import React from 'react'
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

export default DropdownExample`,D0=()=>r.jsx(R,{code:"openOnHover",Component:zA,Source:FA,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"openOnHover"})," property can added to make the menu open when the mouse hovers over the trigger."]})}),HA=Object.freeze(Object.defineProperty({__proto__:null,default:D0},Symbol.toStringTag,{value:"Module"})),UA=()=>r.jsx(pn,{right:!0,text:"Dropdown Right",content:"Hello World!"}),VA=`import React from 'react'
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

export default DropdownExample`,O0=()=>r.jsx(R,{code:"right",Component:UA,Source:VA,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"right"})," property can added to align the dropdown menu to the right edge of the trigger"]})}),WA=Object.freeze(Object.defineProperty({__proto__:null,default:O0},Symbol.toStringTag,{value:"Module"})),ZA=()=>r.jsx(pn,{text:"Dropdown Trigger Text",children:"Hello World!"}),KA=`import React from 'react'
import { Dropdown } from '@/src/index.jsx'

const DropdownExample = () =>
  /* START */
  <Dropdown
    text='Dropdown Trigger Text'
  >
    Hello World!
  </Dropdown>
  /* END */

export default DropdownExample`,A0=()=>r.jsx(R,{code:"text",Component:ZA,Source:KA,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"text"})," property should be used to define the text for the trigger."]})}),YA=Object.freeze(Object.defineProperty({__proto__:null,default:A0},Symbol.toStringTag,{value:"Module"})),GA=()=>r.jsx(pn,{wide:!0,text:"Dropdown Wide",content:"Hello World!"}),XA=`import React from 'react'
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

export default DropdownExample`,M0=()=>r.jsx(R,{code:"wide",Component:GA,Source:XA,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"wide"})," property can added to make the menu expand to the full width of the container."]})}),QA=Object.freeze(Object.defineProperty({__proto__:null,default:M0},Symbol.toStringTag,{value:"Module"})),qA=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Dropdown"}),r.jsx(k0,{}),r.jsxs(rt,{tocName:"dropdown",children:[r.jsx(ce,{title:"Properties"}),r.jsx(A0,{}),r.jsx(T0,{}),r.jsx(D0,{}),r.jsx(O0,{}),r.jsx(M0,{}),r.jsx(E0,{}),r.jsx(N0,{}),r.jsx(R0,{}),r.jsx(L0,{}),r.jsxs(to,{children:[r.jsxs("div",{className:"flow",children:[r.jsx(ce,{title:"CSS Classes"}),r.jsxs(U,{code:"className",children:["Used to set the CSS class for the dropdown container.  The default value is ",r.jsx("code",{children:"dropdown"}),"."]}),r.jsxs(U,{code:"openClass",children:["Used to set the CSS class added to the dropdown container when the menu is open.  The default value is ",r.jsx("code",{children:"open"}),"."]}),r.jsxs(U,{code:"closedClass",children:["Used to set the CSS class added to the dropdown container when the menu is closed.  The default value is ",r.jsx("code",{children:"closed"}),"."]}),r.jsxs(U,{code:"triggerClass",children:["Used to set the CSS class added to the dropdown trigger. The default value is ",r.jsx("code",{children:"trigger"}),"."]}),r.jsxs(U,{code:"menuClass",children:[r.jsx("b",{children:"TODO: update this!"}),"Used to set the CSS class added to the dropdown menu container. The default value is ",r.jsx("code",{children:"menu border bdr-1"}),".  The"," ",r.jsx("code",{children:"border"})," utility class adds a border and"," ",r.jsx("code",{children:"bdr-1"})," sets the border radius to 1 unit (0.25rem or 4px)."]})]}),r.jsxs("div",{className:"flow",children:[r.jsx(ce,{title:"Components"}),r.jsxs(U,{code:"Trigger",id:"Trigger-component",children:["Renders the dropdown menu trigger.  Defaults to ",r.jsx("code",{children:"DropdownTrigger"}),"."]}),r.jsxs(U,{code:"Body",id:"Body-component",children:["Renders the dropdown body.  Defaults to ",r.jsx("code",{children:"DropdownBody"}),"."]})]})]})]})]}),JA=Object.freeze(Object.defineProperty({__proto__:null,default:qA},Symbol.toStringTag,{value:"Module"})),eM=()=>r.jsx(ee,{name:"check"}),tM=`import React from 'react'
import { Icon } from '@/src/index.jsx'

{/* START */}
// PRETEND: import { Icon } from '@abw/badger-react-ui'

const IconExample = () =>
  <Icon name="check"/>

export default IconExample
`,nM=Oj(0,100,5),wl=({name:e,stop:t,setStop:n,disabled:o=!1})=>r.jsxs("select",{name:e,required:!0,value:t,onChange:a=>n(a.target.value),disabled:o,children:[r.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Select Stop"}),r.jsx("option",{value:"",children:"None"}),nM.map(a=>r.jsx("option",{value:a,children:a},a))]}),rM=()=>{const[e,t]=v.useState(0),[n,o]=v.useState({name:"bars"}),a=c=>()=>{o(d=>({...d,[c]:!d[c]})),t(d=>d+1)},s=c=>d=>{o(u=>({...u,[c]:d})),t(u=>u+1)},i=`<Icon
  ${aM(n)}
/>`;return r.jsxs("div",{className:"example grid-2 gap-8 stack-desktop",children:[r.jsxs("div",{children:[r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Output"}),r.jsx("div",{className:"output mar-b-8",children:r.jsx(sM,{options:n},e)})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Markup"}),r.jsx(An,{code:i,language:"html",expand:!0})]})]}),r.jsx(oM,{options:n,setOption:s,toggleOption:a})]})},oM=({options:e,setOption:t})=>{const n=t("name"),o=t("size"),a=t("color"),s=t("foreground"),l=t("background"),i=t("foregroundDark"),c=t("backgroundDark");return r.jsxs("div",{children:[r.jsxs("div",{className:"grid-3 gap-4 stack-mobile top",children:[r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Icon Name"}),r.jsx(ou,{icon:e.name,setIcon:n})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Size"}),r.jsx(Tx,{size:e.size,setSize:o})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Color"}),r.jsx(kx,{color:e.color,setColor:a,disabled:e.type})]})]}),r.jsxs("div",{className:"grid-2 gap-4 gap-v-0 stack-mobile top",children:[r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Foreground Stop"}),r.jsx(wl,{stop:e.foreground,setStop:s})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Background Stop"}),r.jsx(wl,{stop:e.background,setStop:l})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Foreground Dark"}),r.jsx(wl,{stop:e.foregroundDark,setStop:i})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Background Dark"}),r.jsx(wl,{stop:e.backgroundDark,setStop:c})]})]})]})},P0=e=>{const t=["name","size"].filter(o=>e[o]).reduce((o,a)=>(o[a]=e[a],o),{}),n=["color","foreground","background","foregroundDark","backgroundDark"].map(o=>e[o]||"").join("-");return n.length>4&&(t.color=n.replace(/-*$/,"")),t},aM=e=>{const t=P0(e);return Object.entries(t).map(([n,o])=>`${n}="${o}"`).join(`
  `)},sM=({options:e})=>r.jsx(ee,{...P0(e)}),$0=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Icon"})," component can be used to render SVG icons. The functionality is imported from"," ",r.jsx("a",{href:"https://abw.github.io/badger-icon/",children:"Badger Icon"})," with some extra bells and whistles."]}),r.jsx(pe,{Component:eM,code:tM,expand:!0}),r.jsx("h2",{children:"Demo"}),r.jsx(rM,{})]}),lM=Object.freeze(Object.defineProperty({__proto__:null,default:$0},Symbol.toStringTag,{value:"Module"})),B0=()=>r.jsxs(U,{code:"IconLibrary",children:[r.jsxs("p",{children:["The default set of icons is defined as ",r.jsx("code",{children:"IconLibrary"}),". The ",r.jsx("code",{children:"addIcon()"})," and ",r.jsx("code",{children:"addIcons()"})," function are provided for adding icons to the library."]}),r.jsx("div",{className:"grid-fill gap-4 mar-t-8",children:Object.keys(Ts.icons).map(e=>r.jsxs("div",{className:"text-center bgc-100 bgd-0 fgc-10 fgd-90 pad-4 shadow-2",children:[r.jsx(ee,{name:e,className:"x3"}),r.jsx("div",{className:"small mar-t-4",children:e})]},e))})]}),iM=Object.freeze(Object.defineProperty({__proto__:null,default:B0},Symbol.toStringTag,{value:"Module"})),cM=()=>r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"flex gap-2 middle",children:[r.jsx(ee,{name:"check",className:"smallest"}),r.jsx(ee,{name:"check",className:"smaller"}),r.jsx(ee,{name:"check",className:"small"}),r.jsx(ee,{name:"check"}),r.jsx(ee,{name:"check",className:"large"}),r.jsx(ee,{name:"check",className:"larger"}),r.jsx(ee,{name:"check",className:"largest"})]}),r.jsxs("div",{className:"flex gap-2 mar-t-4",children:[r.jsx(ee,{name:"check",className:"larger green fgc-50"}),r.jsx(ee,{name:"cross",className:"larger red fgc-50"})]})]}),dM=`import React from 'react'
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

export default Component`,I0=()=>r.jsx(R,{code:"className",Component:cM,Source:dM,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"className"})," property can be used to set a CSS class."]})}),uM=Object.freeze(Object.defineProperty({__proto__:null,default:I0},Symbol.toStringTag,{value:"Module"})),pM=()=>r.jsxs("div",{className:"flex gap-2 x2",children:[r.jsx(ee,{name:"check",color:"green-50"}),r.jsx(ee,{name:"check",color:"green-70-30"}),r.jsx(ee,{name:"check",color:"green-70--30"}),r.jsx(ee,{name:"check",color:"green-70-30-30-70"})]}),fM=`import React from 'react'
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

export default Component`,z0=()=>r.jsxs(R,{code:"color",Component:pM,Source:fM,undent:2,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"color"})," property is a short-cut to set the color.  This adds the color to the CSS class."]}),r.jsxs("p",{children:["The ",r.jsx("code",{children:"color"})," can be be comprised of up to 5 elements separated by hyphens.  The first is the color range, e.g. ",r.jsx("code",{children:"red"}),","," ",r.jsx("code",{children:"green"}),", ",r.jsx("code",{children:"blue"}),", etc.  The second is the stop number for the foreground.  This is an integer from 0 (darkest) to 100 (lightest) in steps of 5.  The third is the stop number for the background.  The remaining two numbers are stops for the foreground and background colors in dark mode."]})]}),hM=Object.freeze(Object.defineProperty({__proto__:null,default:z0},Symbol.toStringTag,{value:"Module"})),mM=()=>r.jsxs("div",{className:"flex gap-2 x2",children:[r.jsx(ee,{name:"bars"}),r.jsx(ee,{name:"check"}),r.jsx(ee,{name:"cross"}),r.jsx(ee,{name:"arrow"}),r.jsx(ee,{name:"arrow-right"}),r.jsx(ee,{name:"arrow-down-thicker.red.fgc-50"})]}),xM=`import React from 'react'
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

export default Component`,F0=()=>r.jsxs(R,{code:"name",Component:mM,Source:xM,undent:2,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"name"})," property can be used to select an icon from the default icon library."]}),r.jsx("p",{children:"Additional modifiers and classes can be added to the name to apply styles and transformations.  See the Badger Icon documentation for further details."})]}),gM=Object.freeze(Object.defineProperty({__proto__:null,default:F0},Symbol.toStringTag,{value:"Module"})),vM=()=>r.jsxs("div",{className:"flex gap-2",children:[r.jsx(ee,{className:"x3",path:"M448,96L448,416C448,434 434,448 416,448L96,448C78,448 64,434 64,416L64,96C64,78 78,64 96,64L416,64C434,64 448,78 448,96ZM384,128L128,128L128,384L384,384L384,128Z"}),r.jsx(ee,{className:"x3",path:"M21,5L21,20C21,20 20,21 20,21L5,21C4,21 3,20 3,20L3,5C3,4 4,3 5,3L20,3C20,3 21,4 21,5ZM18,6L6,6L6,18L18,18L18,6Z",width:24,height:24})]}),yM=`import React from 'react'
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

export default Component`,H0=()=>r.jsx(R,{code:"path",Component:vM,Source:yM,undent:2,expand:!0,children:r.jsxs("p",{children:["You can specify the data for a path.  The default viewbox is assumed to be 512px wide and 512px high.  You can set the ",r.jsx("code",{children:"width"})," and"," ",r.jsx("code",{children:"height"})," properties to change that."]})}),jM=Object.freeze(Object.defineProperty({__proto__:null,default:H0},Symbol.toStringTag,{value:"Module"})),bM=()=>r.jsxs("div",{className:"flex gap-2",children:[r.jsx(ee,{name:"check",size:"smallest"}),r.jsx(ee,{name:"check",size:"smaller"}),r.jsx(ee,{name:"check",size:"small"}),r.jsx(ee,{name:"check",size:"medium"}),r.jsx(ee,{name:"check",size:"large"}),r.jsx(ee,{name:"check",size:"larger"}),r.jsx(ee,{name:"check",size:"largest"})]}),CM=`import React from 'react'
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

export default Component`,U0=()=>r.jsx(R,{code:"size",Component:bM,Source:CM,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"size"})," property is a short-cut to set the size.  This adds the size to the CSS class."]})}),SM=Object.freeze(Object.defineProperty({__proto__:null,default:U0},Symbol.toStringTag,{value:"Module"})),wM=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Icon"}),r.jsx($0,{}),r.jsxs(rt,{tocName:"icon",children:[r.jsx(ce,{title:"Properties"}),r.jsx(F0,{}),r.jsx(I0,{}),r.jsx(U0,{}),r.jsx(z0,{}),r.jsx(H0,{}),r.jsx(ce,{title:"Components"}),r.jsx(B0,{})]})]}),_M=Object.freeze(Object.defineProperty({__proto__:null,default:wM},Symbol.toStringTag,{value:"Module"})),kM=()=>{const[e,t]=v.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsxs(Tn,{open:e,className:"max-width-30rem",children:[r.jsx("header",{children:r.jsx("h3",{children:"A Modal!"})}),r.jsxs("p",{children:["This is a modal.  The content is rendered as an ",r.jsx("code",{children:"article"}),".  You can include"," ",r.jsx("code",{children:"header"})," and ",r.jsx("code",{children:"footer"})," ","sections if you want, although they're entirely optional."]}),r.jsx("footer",{children:r.jsx(A,{color:"red",text:"Close Modal",onClick:()=>t(!1)})})]}),r.jsx(A,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},TM=`import { Modal, Button } from '@/src/index.jsx'

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

export default ModalExample`,V0=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Modal"})," component can be used to create an overlaid modal dialog."]}),r.jsxs("p",{className:"cols-2 stack-desktop",children:["The ",r.jsx("code",{children:"open"})," property should be used to indicate if the modal is open or not. Any child elements will be rendered inside the modal body."]}),r.jsx(pe,{Component:kM,code:TM,expand:!0})]}),EM=Object.freeze(Object.defineProperty({__proto__:null,default:V0},Symbol.toStringTag,{value:"Module"})),NM=()=>{const{show:e,hide:t,Modal:n}=ck();return r.jsxs(r.Fragment,{children:[r.jsxs(n,{children:[r.jsx("p",{children:"Modal State"}),r.jsx(A,{color:"red",text:"Close Modal",onClick:t})]}),r.jsx(A,{color:"green",text:"Open Modal",onClick:e})]})},RM=`import { ModalState, Button } from '@/src/index.jsx'
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

export default ModalStateExample`,W0=()=>r.jsx(R,{code:"ModalState",Component:NM,Source:RM,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"ModalState"})," function can be used to generate a Modal with state.  It returns the ",r.jsx("code",{children:"isVisible"})," property,"," ",r.jsx("code",{children:"show"})," and ",r.jsx("code",{children:"hide"})," functions to change the visibility, and a ",r.jsx("code",{children:"Modal"})," component."]})}),LM=Object.freeze(Object.defineProperty({__proto__:null,default:W0},Symbol.toStringTag,{value:"Module"})),DM=()=>{const[e,t]=v.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsxs(Tn,{open:e,className:"large max-width-25rem pad-8",children:[r.jsx("p",{children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object."}),r.jsx(A,{color:"red",text:"Close Modal",onClick:()=>t(!1)})]}),r.jsx(A,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},OM=`import { Modal, Button } from '@/src/index.jsx'
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

export default ModalExample`,Z0=()=>r.jsx(R,{code:"className",Component:DM,Source:OM,undent:6,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"className"})," property can be used to add a CSS class to the Modal ",r.jsx("code",{children:"dialog"})," element."]})}),AM=Object.freeze(Object.defineProperty({__proto__:null,default:Z0},Symbol.toStringTag,{value:"Module"})),MM=()=>{const[e,t]=v.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsx(Tn,{open:e,close:()=>t(!1),children:r.jsx("p",{children:"This is a modal with a close button."})}),r.jsx(A,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},PM=`import React, { useState } from 'react'
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

export default ModalExample`,K0=()=>r.jsx(R,{code:"close",Component:MM,Source:PM,undent:6,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"close"})," property can be used to automatically add a close icon to the top right corner.  It should be a function which will close the modal when the icon is clicked."]})}),$M=Object.freeze(Object.defineProperty({__proto__:null,default:K0},Symbol.toStringTag,{value:"Module"})),BM=()=>{const[e,t]=v.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsx(Tn,{open:e,close:()=>t(!1),closeIcon:"thumb",children:r.jsx("p",{children:"This is a modal with a custom close icon."})}),r.jsx(A,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},IM=`import React, { useState } from 'react'
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

export default ModalExample`,Y0=()=>r.jsx(R,{code:"closeIcon",Component:BM,Source:IM,undent:6,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"closeIcon"})," property can be used to change the icon displayed to close the modal."]})}),zM=Object.freeze(Object.defineProperty({__proto__:null,default:Y0},Symbol.toStringTag,{value:"Module"})),FM=()=>{const[e,t]=v.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsx(Tn,{open:e,close:()=>t(!1),title:"Hello World!",text:"This is a modal with a custom footer",footer:r.jsx("div",{className:"text-right",children:r.jsx(A,{color:"red",text:"Close",size:"small",iconRight:"cross",onClick:()=>t(!1)})})}),r.jsx(A,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},HM=`import { Modal, Button } from '@/src/index.jsx'
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

export default ModalExample`,G0=()=>r.jsx(R,{code:"footer",Component:FM,Source:HM,undent:6,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"footer"})," property can be used to define some custom footer content."]})}),UM=Object.freeze(Object.defineProperty({__proto__:null,default:G0},Symbol.toStringTag,{value:"Module"})),VM=()=>{const[e,t]=v.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsx(Tn,{open:e,close:()=>t(!1),text:"This is a modal with a custom header",header:r.jsxs(r.Fragment,{children:[r.jsx("h3",{children:"Custom Header"}),r.jsx("p",{children:"Hello World!"})]})}),r.jsx(A,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},WM=`import { Modal, Button } from '@/src/index.jsx'
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

export default ModalExample`,X0=()=>r.jsx(R,{code:"header",Component:VM,Source:WM,undent:6,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"header"})," property can be used to define some custom header content."]})}),ZM=Object.freeze(Object.defineProperty({__proto__:null,default:X0},Symbol.toStringTag,{value:"Module"})),KM=()=>{const[e,t]=v.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsx(Tn,{open:e,close:()=>t(!1),text:"This is a modal"}),r.jsx(A,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},YM=`import { Modal, Button } from '@/src/index.jsx'

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

export default ModalExample`,Q0=()=>r.jsx(R,{code:"text",Component:KM,Source:YM,undent:6,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"text"})," property can be used to define the body text."]})}),GM=Object.freeze(Object.defineProperty({__proto__:null,default:Q0},Symbol.toStringTag,{value:"Module"})),XM=()=>{const[e,t]=v.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsx(Tn,{open:e,close:()=>t(!1),text:"This is a modal with a title",title:"My Modal"}),r.jsx(A,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},QM=`import { Modal, Button } from '@/src/index.jsx'
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

export default ModalExample`,q0=()=>r.jsx(R,{code:"title",Component:XM,Source:QM,undent:6,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"title"})," property can be used to add a title."]})}),qM=Object.freeze(Object.defineProperty({__proto__:null,default:q0},Symbol.toStringTag,{value:"Module"})),JM=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Modal"}),r.jsx(V0,{}),r.jsxs(rt,{tocName:"modal",children:[r.jsx(ce,{title:"Properties"}),r.jsx(Z0,{}),r.jsx(K0,{}),r.jsx(Y0,{}),r.jsx(Q0,{}),r.jsx(q0,{}),r.jsx(X0,{}),r.jsx(G0,{}),r.jsx(ce,{title:"Components"}),r.jsx(W0,{})]})]}),eP=Object.freeze(Object.defineProperty({__proto__:null,default:JM},Symbol.toStringTag,{value:"Module"})),tP=()=>{const{isVisible:e,show:t,hide:n}=kr();return r.jsxs("div",{className:"relative pad-6 border",children:[e&&r.jsx(ra,{className:"flex middle center pad-8",children:r.jsxs("div",{children:[r.jsx("p",{className:"larger",children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been... that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object."}),r.jsx(A,{onClick:n,className:"red",text:"Hide Overlay"})]})}),r.jsx("p",{className:"mar-t-none",children:"May I make a suggestion? May I make a suggestion? I've got one other suggestion."}),r.jsx("p",{children:"Well let's hear yours. Let's hear your suggestion."}),r.jsx("p",{children:"Stonehenge! It's the best production value we've ever had on stage."}),r.jsx("p",{children:"But we haven't got the equipment. We haven't got the equipment, we haven't got Stonehenge, we haven't..."}),r.jsx("p",{children:"Not yet we don't. Let's start... Musically, musically we all know it. Musically we all know it. Right? No problems musically. We go right on stage. And it's quite simple. This is you know... Ian can take care of this..."}),r.jsx("p",{children:"I know what the Stonehenge monument looks like. We don't have that piece of scenery anymore."}),r.jsx("p",{children:"I know, so we build a new one. And this is it, look!"}),r.jsx(A,{onClick:t,color:"green",text:"Show Overlay"})]})},nP=`import { Overlay, VisibleState, Button } from '@/src/index.jsx'

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

export default OverlayExample`,J0=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Overlay"})," component can be used to create an overlay. The default positioning is absolute so it will fill to cover the nearest parent that has positioning set to relative."]}),r.jsx(pe,{Component:tP,code:nP})]}),rP=Object.freeze(Object.defineProperty({__proto__:null,default:J0},Symbol.toStringTag,{value:"Module"})),oP=()=>{const{show:e,hide:t,Overlay:n}=uk();return r.jsxs(r.Fragment,{children:[r.jsx(n,{fixed:!0,className:"flex center middle",children:r.jsxs("div",{children:[r.jsx("h1",{className:"mar-b-4",children:"Overlay State"}),r.jsx(A,{color:"red",text:"Hide Overlay",onClick:t})]})}),r.jsx(A,{color:"green",text:"Show Overlay",onClick:e})]})},aP=`import { OverlayState, Button } from '@/src/index.jsx'
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

export default OverlayStateExample`,e4=()=>r.jsx(R,{code:"OverlayState",Component:oP,Source:aP,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"OverlayState"})," function can be used to generate an Overlay with state.  It returns the ",r.jsx("code",{children:"isVisible"})," property,"," ",r.jsx("code",{children:"show"})," and ",r.jsx("code",{children:"hide"})," functions to change the visibility, and an ",r.jsx("code",{children:"Overlay"})," component."]})}),sP=Object.freeze(Object.defineProperty({__proto__:null,default:e4},Symbol.toStringTag,{value:"Module"})),lP=()=>{const[e,t]=v.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsxs(Tn,{open:e,className:"large max-width-25rem pad-8",children:[r.jsx("p",{children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object."}),r.jsx(A,{color:"red",text:"Close Modal",onClick:()=>t(!1)})]}),r.jsx(A,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},iP=`import { Modal, Button } from '@/src/index.jsx'
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

export default ModalExample`,cP=()=>r.jsx(R,{code:"className",Component:lP,Source:iP,undent:6,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"className"})," property can be used to add a CSS class to the Modal ",r.jsx("code",{children:"dialog"})," element."]})}),dP=Object.freeze(Object.defineProperty({__proto__:null,default:cP},Symbol.toStringTag,{value:"Module"})),uP=()=>{const{isVisible:e,show:t,hide:n}=kr();return r.jsxs("div",{className:"relative pad-6 border",children:[r.jsx(A,{onClick:t,color:"green",text:"Show Red Overlay"}),e&&r.jsxs(ra,{className:"flex space top pad-6",style:{"--color":"var(--red-70)","--background-color":"var(--red-20)","--background-opacity":"10%"},children:[r.jsx("p",{className:"larger",children:"Custom red overlay"}),r.jsx(A,{onClick:n,className:"red",text:"Hide Overlay"})]})]})},pP=`import React from 'react'
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

export default ColorExample`,t4=()=>r.jsx(R,{title:"Custom Colors",Component:uP,Source:pP,undent:8,children:r.jsxs("p",{children:["You can set the ",r.jsx("code",{children:"--color"})," and ",r.jsx("code",{children:"--background-color"})," ","CSS properties to define your own colors for the overlay.  The"," ",r.jsx("code",{children:"--background-opacity"})," can be set to change the background opacity."]})}),fP=Object.freeze(Object.defineProperty({__proto__:null,default:t4},Symbol.toStringTag,{value:"Module"})),hP=()=>{const{isVisible:e,show:t,hide:n}=kr();return r.jsxs("div",{className:"relative pad-6 border",children:[r.jsx(A,{onClick:t,color:"green",text:"Show Overlay"}),e&&r.jsx(ra,{fixed:!0,className:"flex center middle",children:r.jsxs("div",{className:"max-width-40rem",children:[r.jsx("p",{className:"larger",children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been... that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object."}),r.jsx(A,{onClick:n,className:"red",text:"Hide Overlay"})]})})]})},mP=`import React from 'react'
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

export default OverlayExample`,n4=()=>r.jsx(R,{code:"fixed",Component:hP,Source:mP,undent:8,children:r.jsxs("p",{children:["Add the ",r.jsx("code",{children:"fixed"})," to set the overlay position to fixed so that it covers the entire viewport."]})}),xP=Object.freeze(Object.defineProperty({__proto__:null,default:n4},Symbol.toStringTag,{value:"Module"})),gP=()=>{const{isVisible:e,show:t,hide:n}=kr();return r.jsxs("div",{className:"relative pad-6 border",children:[r.jsx(A,{onClick:t,color:"green",text:"Show Light Overlay"}),e&&r.jsxs(ra,{light:!0,className:"flex space top pad-6",children:[r.jsx("p",{className:"larger",children:"Light overlay"}),r.jsx(A,{onClick:n,className:"red",text:"Hide Overlay"})]})]})},vP=`import React from 'react'
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

export default ColorExample`,yP=()=>{const{isVisible:e,show:t,hide:n}=kr();return r.jsxs("div",{className:"relative pad-6 border",children:[r.jsx(A,{onClick:t,color:"green",text:"Show Dark Overlay"}),e&&r.jsxs(ra,{dark:!0,className:"flex space top pad-6",children:[r.jsx("p",{className:"larger",children:"Dark overlay"}),r.jsx(A,{onClick:n,className:"red",text:"Hide Overlay"})]})]})},jP=`import React from 'react'
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

export default ColorExample`,r4=()=>r.jsxs(U,{code:"light / dark",children:[r.jsxs("p",{className:"cols-2 stack-desktop",children:["The default overlay color is white in light mode and black in dark mode.  You can add the ",r.jsx("code",{children:"light"})," or ",r.jsx("code",{children:"dark"})," ","property to explicitly set it to one or the other."]}),r.jsx(pe,{Component:gP,code:vP,caption:"light",undent:8}),r.jsx(pe,{Component:yP,code:jP,caption:"dark",undent:8})]}),bP=Object.freeze(Object.defineProperty({__proto__:null,default:r4},Symbol.toStringTag,{value:"Module"})),CP=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Overlay"}),r.jsx(J0,{}),r.jsxs(rt,{tocName:"overlay",children:[r.jsx(ce,{title:"Properties"}),r.jsx(n4,{}),r.jsx(r4,{}),r.jsx(ce,{title:"Styling"}),r.jsx(t4,{}),r.jsx(ce,{title:"Components"}),r.jsx(e4,{})]})]}),SP=Object.freeze(Object.defineProperty({__proto__:null,default:CP},Symbol.toStringTag,{value:"Module"})),wP=({page:e,className:t,onClick:n})=>{const{pageRanges:o}=L_(),a=o[e];return r.jsx(A,{text:a,className:t,onClick:n})},_P=()=>{const e=["A-C","D-F","G-I","J-M","N-P","Q-T","U-W","X-Z"],t=e.length,[n,o]=v.useState(0);return r.jsx(Zt,{pages:t,page:n,setPage:o,pageRanges:e,Page:wP,size:"small"})},kP=`import { Pager, usePager, Button } from '@/src/index.jsx'

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

export default PagerExample`,o4=({items:e})=>r.jsx("table",{className:"wide shaded striped celled",children:r.jsx("tbody",{children:e.map(([t,n])=>r.jsx(TP,{name:t,value:n},t))})}),TP=({name:e,value:t})=>r.jsxs("tr",{children:[r.jsx("td",{className:"font-mono",children:e}),r.jsx("td",{children:t})]}),a4=()=>r.jsxs(r.Fragment,{children:[r.jsx("h2",{children:"Context"}),r.jsxs("div",{className:"cols-2 stack-desktop",children:[r.jsx("p",{children:"A react context is created which provides the items listed below. Any other properties passed in to the component will also be accessible to child components."}),r.jsxs("p",{children:["Values are provided for the 0-based indexes of the first, last, previous, next and current pages. For example, the lowest value for ",r.jsx("code",{children:"page"})," is"," ",r.jsx("code",{children:"0"})," and the highest value is ",r.jsx("code",{children:"pages - 1"}),"."]}),r.jsxs("p",{children:['Their counterparts are also provided in "human readable" 1-based form with a ',r.jsx("code",{children:"No"})," suffix.  For example, the values for ",r.jsx("code",{children:"pageNo"})," range from ",r.jsx("code",{children:"1"})," to ",r.jsx("code",{children:"pages"}),", and will always be one more than ",r.jsx("code",{children:"page"}),"."]})]}),r.jsx(o4,{items:[["pages","The total number of pages, as passed into the component as a property."],["page","The index (0 based) of the current page, as passed into the component as a property."],["setPage","The function for setting a page index, as passed into the component as a property."],["pageNo",r.jsxs(r.Fragment,{children:["The current page number (1 based), effectively one louder than ",r.jsx("code",{children:"page"}),".  e.g. if ",r.jsx("code",{children:"page"})," is ten then this goes up to eleven."]})],["firstPage","The index (0 based) of the first page.  This is always 0 but is included for completeness."],["firstPageNo","The number (1 based) of the first page.  This is always 1 but is included for completeness."],["lastPage","The index (0 based) of the last page."],["lastPageNo","The number (1 based) of the first page."],["prevPage","The index (0 based) of the previous page."],["prevPageNo","The number (1 based) of the previous page."],["nextPage","The index (0 based) of the next page."],["nextPageNo","The number (1 based) of the next page."]]}),r.jsx("h2",{children:"Custom Component"}),r.jsxs("div",{className:"cols-2 stack-desktop",children:[r.jsxs("p",{children:["You can provide your own components to render certain elements of the pager widget. These will be passed relevant parameters as properties and can use the ",r.jsx("code",{children:"usePager()"})," hook to access the full pager context, including any additional properties that you pass to the ",r.jsx("code",{children:"Pager"})," component."]}),r.jsxs("p",{children:["In this example we define a custom ",r.jsx("code",{children:"MyPageButton"})," component to replace the ",r.jsx("code",{children:"Page"})," component that renders the numbered page buttons.  Instead of displaying page numbers it shows alphabetical ranges for each button, defined in a custom ",r.jsx("code",{children:"pageRanges"})," "," ","property."]})]}),r.jsx(pe,{Component:_P,code:kP})]}),EP=Object.freeze(Object.defineProperty({__proto__:null,default:a4},Symbol.toStringTag,{value:"Module"})),NP=()=>{const[e,t]=v.useState(0);return r.jsx(Zt,{pages:11,page:e,setPage:t})},RP=`import { Pager } from '@/src/index.jsx'

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

export default PagerExample`,s4=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Pager"})," component generates buttons for navigating through several pages."]}),r.jsx("div",{className:"cols-2 stack-desktop",children:r.jsxs("p",{children:["The three mandatory properties are ",r.jsx("code",{children:"pages"})," indicating the total number of pages, ",r.jsx("code",{children:"page"})," for the current page index (ranging from 0 to ",r.jsx("code",{children:"pages"})," - 1) and a"," ",r.jsx("code",{children:"setPage"})," handler to set the page index."]})}),r.jsx(pe,{Component:NP,code:RP})]}),LP=Object.freeze(Object.defineProperty({__proto__:null,default:s4},Symbol.toStringTag,{value:"Module"})),DP=()=>{const[e,t]=v.useState(0);return r.jsx("div",{className:"grid-1 gap-4",children:r.jsx(Zt,{pages:11,page:e,setPage:t,className:"pager small brand border pad-2 bdr-2 bgc-90 bgd-10"})})},OP=`import React, { useState } from 'react'
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
`,l4=()=>r.jsx(R,{code:"className",Component:DP,Source:OP,undent:4,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"className"})," property can be used to set a CSS class for the pager container.  The default value is ",r.jsx("code",{children:"pager"}),"."]})}),AP=Object.freeze(Object.defineProperty({__proto__:null,default:l4},Symbol.toStringTag,{value:"Module"})),MP=()=>{const[e,t]=v.useState(0);return r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(Zt,{pages:11,page:e,setPage:t,color:"red"}),r.jsx(Zt,{pages:11,page:e,setPage:t,color:"green"}),r.jsx(Zt,{pages:11,page:e,setPage:t,color:"blue"})]})},PP=`import React, { useState } from 'react'
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
`,i4=()=>r.jsx(R,{code:"color",Component:MP,Source:PP,undent:4,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"color"})," property can be used to set the color range used for the buttons.  This is a short-cut which adds the specified color to the CSS class for the pager container."]})}),$P=Object.freeze(Object.defineProperty({__proto__:null,default:i4},Symbol.toStringTag,{value:"Module"})),BP=()=>{const[e,t]=v.useState(0);return r.jsx(Zt,{pages:11,page:e,setPage:t,prevIcon:"angle-left",nextIcon:"angle-right"})},IP=`import React, { useState } from 'react'
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
`,c4=()=>r.jsx(R,{code:"prevIcon / nextIcon",Component:BP,Source:IP,undent:4,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"prevIcon"})," and ",r.jsx("code",{children:"nextIcon"})," properties can be used to set the icons for the previous and next page button."]})}),zP=Object.freeze(Object.defineProperty({__proto__:null,default:c4},Symbol.toStringTag,{value:"Module"})),FP=()=>{const[e,t]=v.useState(0);return r.jsx(Zt,{pages:11,page:e,setPage:t,nextIcon:"angle-right"})},HP=`import React, { useState } from 'react'
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
`,UP=()=>r.jsx(R,{code:"nextIcon",Component:FP,Source:HP,undent:4,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"nextIcon"})," property can be used to set the icon for the next page button."]})}),VP=Object.freeze(Object.defineProperty({__proto__:null,default:UP},Symbol.toStringTag,{value:"Module"})),WP=()=>{const[e,t]=v.useState(0);return r.jsx(Zt,{pages:11,page:e,setPage:t,showFirstLast:!1})},ZP=`import React, { useState } from 'react'
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
`,d4=()=>r.jsxs(R,{code:"showFirstLast",Component:WP,Source:ZP,undent:4,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"showFirstLast"})," property determines if the first and last pages are shown in the set of numbered page buttons. A button for the first page will be displayed when it is less than previous page.  The last page button will be displayed when it is greater than the next page."]}),r.jsxs("p",{children:["This value defaults to ",r.jsx("code",{children:"true"})," but can be set"," ",r.jsx("code",{children:"false"})," to hide these buttons."]})]}),KP=Object.freeze(Object.defineProperty({__proto__:null,default:d4},Symbol.toStringTag,{value:"Module"})),YP=()=>{const[e,t]=v.useState(0);return r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(Zt,{pages:11,page:e,setPage:t,size:"smaller"}),r.jsx(Zt,{pages:11,page:e,setPage:t,size:"small"})]})},GP=`import React, { useState } from 'react'
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
`,u4=()=>r.jsx(R,{code:"size",Component:YP,Source:GP,undent:4,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"size"})," property can be used to set the size to one of the standard sizes.  This is also a short-cut for adding the size as a CSS class so you can use it to add any of your own size classes."]})}),XP=Object.freeze(Object.defineProperty({__proto__:null,default:u4},Symbol.toStringTag,{value:"Module"})),QP=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Pager"}),r.jsx(s4,{}),r.jsx(a4,{}),r.jsxs(rt,{tocName:"pager",children:[r.jsx(ce,{title:"Properties"}),r.jsx(l4,{}),r.jsx(i4,{}),r.jsx(u4,{}),r.jsx(c4,{}),r.jsx(d4,{}),r.jsxs(to,{children:[r.jsxs("div",{className:"flow",children:[r.jsx(ce,{title:"CSS Classes"}),r.jsxs(U,{code:"className",children:["Used to set the CSS class for the pager container.  The default value is ",r.jsx("code",{children:"pager"}),"."]}),r.jsxs(U,{code:"buttonClass",children:["Used to set a default CSS class for all buttons.  The default value is ",r.jsx("code",{children:"outline"}),"."]}),r.jsxs(U,{code:"prevClass",children:["Used to set the CSS class for the previous page button.  It defaults to the value for ",r.jsx("code",{children:"buttonClass"}),"."]}),r.jsxs(U,{code:"nextClass",children:["Used to set the CSS class for the next page button.  It defaults to the value for ",r.jsx("code",{children:"buttonClass"}),"."]}),r.jsxs(U,{code:"pagesClass",children:["Used to set the CSS class for the numbered page buttons container. The default value is ",r.jsx("code",{children:"pages"}),"."]}),r.jsxs(U,{code:"pageClass",children:["Used to set the CSS class for individual numbered page buttons.  It defaults to the value for ",r.jsx("code",{children:"buttonClass"}),"."]}),r.jsxs(U,{code:"currentPageClass",children:["Used to set the CSS class for the currently selected numbered page button. The default value is ",r.jsx("code",{children:"solid"}),"."]})]}),r.jsxs("div",{className:"flow",children:[r.jsx(ce,{title:"Components"}),r.jsxs(U,{code:"Previous",id:"Previous-component",children:["Renders the previous page button.  Defaults to ",r.jsx("code",{children:"PagerPrevious"}),"."]}),r.jsxs(U,{code:"Next",id:"Next-component",children:["Renders the next page button.  Defaults to ",r.jsx("code",{children:"PagerNext"}),"."]}),r.jsxs(U,{code:"Pages",id:"Pages-component",children:["Renders the collection of numbered page buttons.  Defaults to ",r.jsx("code",{children:"PagerPages"}),"."]}),r.jsxs(U,{code:"Page",id:"Page-component",children:["Renders an individual page button.  Defaults to ",r.jsx("code",{children:"PagerPage"}),"."]}),r.jsxs(U,{code:"Separator",id:"Separator-component",children:["Renders the separator between the first and/or last pages and the rest of the numbered page buttons. Defaults to ",r.jsx("code",{children:"PagerSeparator"}),"."]})]})]})]})]}),qP=Object.freeze(Object.defineProperty({__proto__:null,default:QP},Symbol.toStringTag,{value:"Module"})),JP=()=>{const[e,t]=v.useState(!1);return r.jsx(Sn,{value:e,onChange:t,options:["David","Nigel","Derek"]})},e$=`import { Radio } from '@/src/index.jsx'

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

export default RadioExample`,p4=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Radio"})," component renders a set of radio buttons."]}),r.jsx(pe,{Component:JP,code:e$,expand:!0})]}),t$=Object.freeze(Object.defineProperty({__proto__:null,default:p4},Symbol.toStringTag,{value:"Module"})),n$=()=>{const[e,t]=v.useState(!1),[n,o]=v.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsx(Sn,{border:!0,labelClass:"mar-b-2",value:e,onChange:t,options:["David","Nigel","Derek"]}),r.jsx(Sn,{border:!0,inline:!0,labelClass:"mar-r-2",value:n,onChange:o,options:["David","Nigel","Derek"]})]})},r$=`import { Radio } from '@/src/index.jsx'
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

export default BorderExample`,f4=()=>r.jsxs(R,{code:"border",Component:n$,Source:r$,undent:4,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"border"})," property can be set to add a border to each item."]}),r.jsxs("p",{children:["You may need to add margins to either the bottom or right side of each label using the ",r.jsx("code",{children:"labelClass"})," property."]})]}),o$=Object.freeze(Object.defineProperty({__proto__:null,default:f4},Symbol.toStringTag,{value:"Module"})),a$=()=>{const[e,t]=v.useState(!1);return r.jsx(Sn,{className:"grid-3 gap-2",value:e,onChange:t,options:["David","Nigel","Derek"]})},s$=`import { Radio } from '@/src/index.jsx'
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

export default ClassName`,h4=()=>r.jsx(R,{code:"className",Component:a$,Source:s$,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"className"})," property can be used to add a CSS class to the container element."]})}),l$=Object.freeze(Object.defineProperty({__proto__:null,default:h4},Symbol.toStringTag,{value:"Module"})),i$=()=>{const[e,t]=v.useState(!1);return r.jsx(Sn,{value:e,onChange:t,options:[{value:"david",text:"David St. Hubbins"},{value:"nigel",text:"Nigel Tufnel"},{value:"derek",text:"Derek Smalls"},{value:"john",text:'John "Stumpy" Pepys',disabled:!0},{value:"eric",text:'Eric "Stumpy Joe" Childs',disabled:!0},{value:"peter",text:'Peter "James" Bond',disabled:!0},{value:"mick",text:"Mick Shrimpton",disabled:!0}]})},c$=`import { Radio } from '@/src/index.jsx'
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

export default DisabledExample`,m4=()=>r.jsx(R,{code:"disabled",Component:i$,Source:c$,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"disabled"})," property can be added to an option to disable it."]})}),d$=Object.freeze(Object.defineProperty({__proto__:null,default:m4},Symbol.toStringTag,{value:"Module"})),u$=()=>{const[e,t]=v.useState(!1);return r.jsx(Sn,{inline:!0,value:e,onChange:t,options:["David","Nigel","Derek"]})},p$=`import { Radio } from '@/src/index.jsx'
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

export default InlineExample`,x4=()=>r.jsx(R,{code:"inline",Component:u$,Source:p$,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"inline"})," property can be set to create inline radio buttons."]})}),f$=Object.freeze(Object.defineProperty({__proto__:null,default:x4},Symbol.toStringTag,{value:"Module"})),h$=()=>{const[e,t]=v.useState(!1);return r.jsx(Sn,{name:"tap",value:e,onChange:t,options:["David","Nigel","Derek"]})},m$=`import { Radio } from '@/src/index.jsx'
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

export default NameExample`,g4=()=>r.jsx(R,{code:"name",Component:h$,Source:m$,undent:4,expand:!0,children:r.jsxs("p",{children:["Each radio set should have a unique name so that the web browser knows which options belong to a particular group.  You can provider one explicitly using the ",r.jsx("code",{children:"name"})," property, otherwise one will be generated for you."]})}),x$=Object.freeze(Object.defineProperty({__proto__:null,default:g4},Symbol.toStringTag,{value:"Module"})),g$=()=>{const[e,t]=v.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsx(Sn,{value:e,onChange:t,options:["David","Nigel","Derek"]}),!!e&&r.jsxs("div",{className:"mar-t-2",children:["Selected value: ",e]})]})},v$=`import { Radio } from '@/src/index.jsx'
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

export default OnChangeExample`,Mt=({id:e,text:t})=>r.jsx("a",{href:`#${qp(e||t)}`,className:"code",children:t}),v4=()=>r.jsx(R,{code:"onChange",Component:g$,Source:v$,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"onChange"})," property should be used to define a function to handle changes in the state.  This will typically be used to update the ",r.jsx(Mt,{text:"value"}),"."]})}),y$=Object.freeze(Object.defineProperty({__proto__:null,default:v4},Symbol.toStringTag,{value:"Module"})),j$=()=>{const[e,t]=v.useState(!1);return r.jsx(Sn,{value:e,onChange:t,options:[{value:"david",text:"David St. Hubbins"},{value:"nigel",text:"Nigel Tufnel"},{value:"derek",text:"Derek Smalls"}]})},b$=`import { Radio } from '@/src/index.jsx'
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

export default OptionsExample`,y4=()=>r.jsx(R,{code:"options",Component:j$,Source:b$,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"options"})," property should be used to define the values for each radio button.  These can be simple values (e.g. strings or numbers) as shown in the preceding examples.  For more complex cases you should define each element as an object containing a"," ",r.jsx("code",{children:"value"})," and any of ",r.jsx("code",{children:"text"}),", ",r.jsx("code",{children:"label"})," or"," ",r.jsx("code",{children:"name"})," for the displayed text."]})}),C$=Object.freeze(Object.defineProperty({__proto__:null,default:y4},Symbol.toStringTag,{value:"Module"})),S$=()=>{const[e,t]=v.useState(!1);return r.jsx(Sn,{value:e,onChange:t,options:["David","Nigel","Derek"]})},w$=`import { Radio } from '@/src/index.jsx'
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

export default ValueExample`,j4=()=>r.jsx(R,{code:"value",Component:S$,Source:w$,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"value"})," property should be used to define the current selected value.  This should be used in conjunction with"," ",r.jsx(Mt,{text:"onChange"})," to update the value."]})}),_$=Object.freeze(Object.defineProperty({__proto__:null,default:j4},Symbol.toStringTag,{value:"Module"})),k$=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Radio"}),r.jsx(p4,{}),r.jsxs(rt,{tocName:"radio",children:[r.jsx(ce,{title:"Properties"}),r.jsx(j4,{}),r.jsx(v4,{}),r.jsx(g4,{}),r.jsx(h4,{}),r.jsx(x4,{}),r.jsx(f4,{}),r.jsx(ce,{title:"Option Properties"}),r.jsx(y4,{}),r.jsx(m4,{})]})]}),T$=Object.freeze(Object.defineProperty({__proto__:null,default:k$},Symbol.toStringTag,{value:"Module"})),E$=["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger"],N$=()=>{const e=t=>E$.filter(n=>n.toLowerCase().indexOf(t.toLowerCase())!==-1);return r.jsx(nc,{onSearch:e})},R$=`import { Search } from '@/src/index.jsx'

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

export default SearchExample`,b4=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Search"}),' component implements the familiar "autocomplete" functionality.']}),r.jsx("p",{className:"cols-2 stack-desktop",children:"The user starts typing and after a short debounce delay a set of results matching their input is displayed. The user can then click on a result or use the keyboard to navigate through the results."}),r.jsx(pe,{Component:N$,code:R$})]}),L$=Object.freeze(Object.defineProperty({__proto__:null,default:b4},Symbol.toStringTag,{value:"Module"})),D$=[{name:"Alan Aardvark",tel:"555-1245"},{name:"Amy Aardvark",tel:"555-2233"},{name:"Anne Aardvark",tel:"555-6565"},{name:"Bart Badger",tel:"555-4201"},{name:"Betty Badger",tel:"555-1111"},{name:"Bobby Badger",tel:"555-9876"},{name:"Brenda Badger",tel:"555-3443"},{name:"Brian Badger",tel:"555-1337"}],O$=()=>{const e=n=>r.jsxs("div",{className:"flex space baseline",children:[r.jsx("div",{children:n.name}),r.jsx("div",{className:"smaller",children:n.tel})]}),t=n=>D$.filter(o=>o.name.toLowerCase().indexOf(n.toLowerCase())!==-1);return r.jsx(nc,{onSearch:t,displayResult:e})},A$=`import { Search } from '@/src/index.jsx'

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

export default DisplayResultExample`,C4=()=>r.jsx(R,{code:"displayResult",Component:O$,Source:A$,expand:!0,children:r.jsxs("p",{children:["If a result is a text string then it will be displayed as the result. If it's an object containing a ",r.jsx("code",{children:"text"}),","," ",r.jsx("code",{children:"label"})," or ",r.jsx("code",{children:"name"})," property then that will be used as the display value.  Otherwise you can provide a"," ",r.jsx("code",{children:"displayResult"})," function to display the result any way you like."]})}),M$=Object.freeze(Object.defineProperty({__proto__:null,default:C4},Symbol.toStringTag,{value:"Module"})),P$=[{id:100,name:"Alan Aardvark",tel:"555-1245"},{id:101,name:"Amy Aardvark",tel:"555-2233"},{id:102,name:"Anne Aardvark",tel:"555-6565"},{id:110,name:"Bart Badger",tel:"555-4201"},{id:111,name:"Betty Badger",tel:"555-1111"},{id:112,name:"Bobby Badger",tel:"555-9876"},{id:113,name:"Brenda Badger",tel:"555-3443"},{id:114,name:"Brian Badger",tel:"555-1337"}],$$=()=>{const e=n=>`#${n.id}: ${n.name} (${n.tel})`,t=n=>P$.filter(o=>o.name.toLowerCase().indexOf(n.toLowerCase())!==-1);return r.jsx(nc,{onSearch:t,displayValue:e})},B$=`import { Search } from '@/src/index.jsx'

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

export default DisplayValueExample`,S4=()=>r.jsx(R,{code:"displayValue",Component:$$,Source:B$,expand:!0,children:r.jsxs("p",{children:["When a result is selected the same rules will be applied to display the result in the search input.  If it's not a string or an object containing one of the aforementioned properties then you should provide a ",r.jsx("code",{children:"displayValue"})," function to convert the result to a text string that can be displayed."]})}),I$=Object.freeze(Object.defineProperty({__proto__:null,default:S4},Symbol.toStringTag,{value:"Module"})),z$=["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Beatrice Badger","Belinda Badger","Ben Badger","Bert Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger","Brook Badger","Buzz Badger"],F$=()=>{const e=async t=>Vi(500).then(()=>z$.filter(n=>n.toLowerCase().indexOf(t.toLowerCase())!==-1));return r.jsx(nc,{onSearch:e,debug:!0})},H$=`import { Search } from '@/src/index.jsx'
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

export default OnSearchExample`,w4=()=>r.jsx(R,{code:"onSearch",Component:F$,Source:H$,children:r.jsxs("p",{children:["You should provide an ",r.jsx("code",{children:"onSearch"})," function which will be passed the search input and should return an array of results.  This can be an asynchronous function if necessary.  For example, a function which makes an API request to fetch the matching results."]})}),U$=Object.freeze(Object.defineProperty({__proto__:null,default:w4},Symbol.toStringTag,{value:"Module"})),V$=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Search"}),r.jsx(b4,{}),r.jsxs(rt,{tocName:"search",children:[r.jsx(ce,{title:"Properties"}),r.jsx(w4,{}),r.jsx(C4,{}),r.jsx(S4,{})]})]}),W$=Object.freeze(Object.defineProperty({__proto__:null,default:V$},Symbol.toStringTag,{value:"Module"})),Z$=["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger","Colin Camel","David Donkey","Eddie Elephant","Franky Ferret","Gina Goat","Helen Horse","Ian Iguana","Juliet Jackdaw","Kevin Kangaroo","Linda Llama"],K$=()=>r.jsx(Rr,{options:Z$}),Y$=`import { Select } from '@/src/index.jsx'

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

export default SelectExample`,_4=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Select"})," component implements a custom select input."]}),r.jsx(pe,{Component:K$,code:Y$}),r.jsx("h2",{children:"Context"}),r.jsxs("div",{className:"cols-2 stack-desktop",children:[r.jsx("p",{children:"A react context is created which provides the items listed below. Any other properties passed in to the component will also be accessible to child components."}),r.jsxs("p",{children:["Custom components can be wrapped with the ",r.jsx("code",{children:"SelectConsumer"})," ","higher order component to receive these items as properties.  Or you can use the ",r.jsx("code",{children:"useSelect"})," hook to access them."]})]}),r.jsx(o4,{items:[["close","Handler to close the menu."],["cursor",r.jsxs(r.Fragment,{children:["The index of the currently selected option in the ",r.jsx("code",{children:"options"})," array"]})],["disabled","Boolean flag indicating if the input is disabled"],["displayOption","Function to display the content for an option"],["input","The current input value displayed in the field."],["isOpen","Boolean flag indicating if the menu of options is displayed."],["menuRef","A React reference for the menu container."],["onBlur","Handler for blur events."],["onClick","Handler for click events."],["onFocus","Handler for focus events."],["onKeyDown","Handler for keyboard events."],["open","Handler to open the menu."],["options","The array of selection options."],["selected",r.jsxs(r.Fragment,{children:["The selected element in the ",r.jsx("code",{children:"options"})," array"]})],["selectCursor","Handler to select the option indexed by the cursor."],["selectOption","Handler to select an option."],["setCursor","Handler to set the cursor"],["validOption","Function to determine if an option is valid (i.e. not disabled)"],["value","The value of the current selected option."]]})]}),G$=Object.freeze(Object.defineProperty({__proto__:null,default:_4},Symbol.toStringTag,{value:"Module"})),X$=[{name:"Alan Aardvark",tel:"555-1245"},{name:"Amy Aardvark",tel:"555-2233"},{name:"Anne Aardvark",tel:"555-6565"},{name:"Bart Badger",tel:"555-4201"},{name:"Betty Badger",tel:"555-1111"},{name:"Bobby Badger",tel:"555-9876"},{name:"Brenda Badger",tel:"555-3443"},{name:"Brian Badger",tel:"555-1337"}],Q$=()=>{const e=t=>r.jsxs("div",{className:"flex space baseline",children:[r.jsx("div",{children:t.name}),r.jsx("div",{className:"smaller",children:t.tel})]});return r.jsx(Rr,{options:X$,displayOption:e})},q$=`import { Select } from '@/src/index.jsx'

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

export default DisplayOptionExample`,k4=()=>r.jsx(R,{code:"displayOption",Component:Q$,Source:q$,expand:!0,children:r.jsxs("p",{children:["If an option is a text string then it will be displayed as it is. If it's an object containing a ",r.jsx("code",{children:"text"}),","," ",r.jsx("code",{children:"label"})," or ",r.jsx("code",{children:"name"})," property then that will be used as the display value.  Otherwise you can provide a"," ",r.jsx("code",{children:"displayOption"})," function to display the result any way you like."]})}),J$=Object.freeze(Object.defineProperty({__proto__:null,default:k4},Symbol.toStringTag,{value:"Module"})),eB=[{id:100,name:"Alan Aardvark",tel:"555-1245"},{id:101,name:"Amy Aardvark",tel:"555-2233"},{id:102,name:"Anne Aardvark",tel:"555-6565"},{id:110,name:"Bart Badger",tel:"555-4201"},{id:111,name:"Betty Badger",tel:"555-1111"},{id:112,name:"Bobby Badger",tel:"555-9876"},{id:113,name:"Brenda Badger",tel:"555-3443"},{id:114,name:"Brian Badger",tel:"555-1337"}],tB=()=>{const e=t=>r.jsxs("div",{className:"flex baseline",children:[r.jsxs("span",{className:"smaller mar-r-2",children:["#",t.id]})," ",t.name," (",t.tel,")"]});return r.jsx(Rr,{options:eB,displayValue:e})},nB=`import { Select } from '@/src/index.jsx'

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

export default DisplayValueExample`,T4=()=>r.jsx(R,{code:"displayValue",Component:tB,Source:nB,expand:!0,children:r.jsxs("p",{children:["When an option is selected the same rules will be applied to display the option in the search input.  If it's not a string or an object containing one of the aforementioned properties then you should provide a ",r.jsx("code",{children:"displayValue"})," function to convert the result to a text string that can be displayed."]})}),rB=Object.freeze(Object.defineProperty({__proto__:null,default:T4},Symbol.toStringTag,{value:"Module"})),oB=[{id:101,name:"Alan Aardvark"},{id:102,name:"Amy Aardvark"},{id:103,name:"Anne Aardvark",disabled:!0},{id:104,name:"Bart Badger"},{id:105,name:"Betty Badger"},{id:106,name:"Bobby Badger",disabled:!0},{id:107,name:"Brenda Badger"},{id:108,name:"Brian Badger"},{id:109,name:"Colin Camel",disabled:!0},{id:110,name:"Derek Donkey"}],aB=()=>r.jsx(Rr,{options:oB}),sB=`import { Select } from '@/src/index.jsx'

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

export default OptionsExample`,E4=()=>r.jsxs(R,{code:"options",Component:aB,Source:sB,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"options"})," property should be used to provide an array of options that the user can select from.  Each element in the array can be a string, numerical value or an object."]}),r.jsxs("p",{children:["When the ",r.jsx("code",{children:"options"})," contains an array of objects, each object element should have an ",r.jsx("code",{children:"id"})," or ",r.jsx("code",{children:"value"})," property to uniquely identify it.  By default, options will be displayed using the ",r.jsx("code",{children:"text"}),", ",r.jsx("code",{children:"label"})," or ",r.jsx("code",{children:"name"})," property. Alternately, you can define your own ",r.jsx(Mt,{text:"displayOption"})," function to display an option in the selection list and/or a"," ",r.jsx(Mt,{text:"displayValue"})," function to display the selected value."]}),r.jsxs("p",{children:["The ",r.jsx("code",{children:"disabled"})," "," property can be used to mark an option as disabled, or you can define a ",r.jsx(Mt,{text:"validOption"})," function to implement a different strategy to identify unselectable options."]})]}),lB=Object.freeze(Object.defineProperty({__proto__:null,default:E4},Symbol.toStringTag,{value:"Module"})),iB=[{id:1,name:"Alan Aardvark"},{id:2,name:"Amy Aardvark"},{id:3,name:"Anne Aardvark"},{id:4,name:"Bart Badger"},{id:5,name:"Betty Badger"},{id:6,name:"Bobby Badger"},{id:7,name:"Brenda Badger"},{id:8,name:"Brian Badger"},{id:9,name:"Ignored Iguana",disabled:!0}],cB=()=>r.jsx(r.Fragment,{children:r.jsx(Rr,{debug:!0,search:!0,options:iB})}),dB=`import { Select } from '@/src/index.jsx'

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
  <>
    <Select
      debug
      search
      options={animals}
    />
  </>

export default SearchExample`,N4=()=>r.jsx(R,{code:"search",Component:cB,Source:dB,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"search"})," property can be set to enable searching of options."]})}),uB=Object.freeze(Object.defineProperty({__proto__:null,default:N4},Symbol.toStringTag,{value:"Module"})),pB=[{id:101,name:"Alan Aardvark"},{id:102,name:"Amy Apple",isFruit:!0},{id:103,name:"Anne Aardvark"},{id:104,name:"Bart Banana",isFruit:!0},{id:105,name:"Betty Badger"},{id:106,name:"Bobby Badger"},{id:107,name:"Brenda Badger"},{id:108,name:"Brian Badger"},{id:109,name:"Colin Cherry",isFruit:!0},{id:110,name:"Derek Donkey"}],fB=()=>r.jsx(Rr,{validOption:e=>!e.isFruit,options:pB}),hB=`import { Select } from '@/src/index.jsx'

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

export default OptionsExample`,R4=()=>r.jsxs(R,{code:"validOption",Component:fB,Source:hB,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"validOption"})," property can be used to provide a function that determines if an option is valid and can be selected.  The default function uses the ",r.jsx("code",{children:"disabled"})," property in an option to identify invalid options."]}),r.jsxs("p",{children:["In this example we define a ",r.jsx("code",{children:"validOption"})," function which rejects any options that have the ",r.jsx("code",{children:"isFruit"})," flag set."]})]}),mB=Object.freeze(Object.defineProperty({__proto__:null,default:R4},Symbol.toStringTag,{value:"Module"})),xB=["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger"],gB=()=>r.jsx(Rr,{options:xB,value:"Bobby Badger"}),vB=`import { Select } from '@/src/index.jsx'

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

export default ValueExample`,yB=[{id:1,name:"Alan Aardvark"},{id:2,name:"Amy Aardvark"},{id:3,name:"Anne Aardvark"},{id:4,name:"Bart Badger"},{id:5,name:"Betty Badger"},{id:6,name:"Bobby Badger"},{id:7,name:"Brenda Badger"},{id:8,name:"Brian Badger"}],jB=()=>r.jsx(Rr,{options:yB,value:5}),bB=`import { Select } from '@/src/index.jsx'

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

export default ValueExample`,L4=()=>r.jsxs(U,{code:"value",children:[r.jsx("div",{className:"cols-2 stack-desktop mar-b-4",children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"value"})," property can be used to pre-select a value."]})}),r.jsx(pe,{Component:gB,code:vB,caption:"value",expand:!1}),r.jsx("div",{className:"cols-2 stack-desktop mar-b-4",children:r.jsxs("p",{children:["When the ",r.jsx("code",{children:"options"})," are defined as an array of objects, the specified ",r.jsx("code",{children:"value"})," should correspond to the"," ",r.jsx("code",{children:"value"})," or ",r.jsx("code",{children:"id"})," property of an element in the ",r.jsx("code",{children:"options"})," array."]})}),r.jsx(pe,{Component:jB,code:bB,caption:"value",expand:!1})]}),CB=Object.freeze(Object.defineProperty({__proto__:null,default:L4},Symbol.toStringTag,{value:"Module"})),SB=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Select"}),r.jsx(_4,{}),r.jsxs(rt,{tocName:"select",children:[r.jsx(ce,{title:"Properties"}),r.jsx(E4,{}),r.jsx(L4,{}),r.jsx(N4,{}),r.jsx(k4,{}),r.jsx(T4,{}),r.jsx(R4,{}),r.jsx(U,{code:"disabled",split:!0,children:"Boolean flag to set the select input to be disabled."}),r.jsxs(U,{code:"placeholder",split:!0,children:["Set the placeholder text.  The default is ",r.jsx("code",{children:"Select"}),"."]}),r.jsxs(U,{code:"noOptions",split:!0,children:["Set the text displayed when there are no options to select from. The default is ",r.jsx("code",{children:"No options"}),"."]}),r.jsxs(U,{code:"openOnHover",split:!0,children:["Flag to indicate that the option menu should open when the cursor hovers over the trigger input.  Defaults to ",r.jsx("code",{children:"false"}),"."]}),r.jsxs(U,{code:"closeOnBlur",split:!0,children:["Flag to indicate that the option menu should close when focus is lost. Defaults to ",r.jsx("code",{children:"true"}),"."]}),r.jsxs(U,{code:"closeDelay",split:!0,children:["Delay (in milliseconds) before the menu is closed.  This is required to ensure that any click events have been registered before the menu is closed. Defaults to ",r.jsx("code",{children:"300"}),"."]}),r.jsxs(to,{children:[r.jsxs("div",{className:"flow",children:[r.jsx(ce,{title:"Event Handlers"}),r.jsxs(U,{code:"onLoad",children:["Called when the component is first loaded.  The handler is passed a reference to the ",r.jsx("code",{children:"SearchContext"})," object."]}),r.jsxs(U,{code:"onUnload",children:["Called when the component is unloaded.  The handler is passed a reference to the ",r.jsx("code",{children:"SearchContext"})," object."]}),r.jsx(U,{code:"onFocus",children:"Called when the component gains focus."}),r.jsx(U,{code:"onBlur",children:"Called when the component loses focus."}),r.jsx(U,{code:"onClick",children:"Called when the component is clicked."}),r.jsx(U,{code:"onOpen",children:"Called when the component is opened and selectable options are displayed."}),r.jsx(U,{code:"onClose",children:"Called when the component is closed and selectable options are hidden."}),r.jsx(U,{code:"onSelect",children:"Called when an option is selected.  The selection option is passed as an argument."})]}),r.jsxs("div",{className:"flow",children:[r.jsx(ce,{title:"CSS Classes"}),r.jsxs(U,{code:"placeholderClass",children:["Set the class for the placeholder text. The default is ",r.jsx("code",{children:"placeholder"}),"."]}),r.jsxs(U,{code:"inputClass",children:["Set the class for the input element. The default is ",r.jsx("code",{children:"input"}),"."]}),r.jsxs(U,{code:"selectingClass",children:["Set the class added when a selection is in place. The default is ",r.jsx("code",{children:"selecting"}),"."]}),r.jsxs(U,{code:"optionsClass",children:["Set the class added for the options container. The default is ",r.jsx("code",{children:"menu border bdr-1"}),"."]}),r.jsxs(U,{code:"optionClass",children:["Set the class added to each option element. The default is ",r.jsx("code",{children:"item"}),"."]}),r.jsxs(U,{code:"activeClass",children:["Set the class added to an option that is currently active. The default is ",r.jsx("code",{children:"active"}),"."]}),r.jsxs(U,{code:"noOptionsClass",children:["Set the class added to the element displayed when there are no options to select from. The default is ",r.jsx("code",{children:"none"}),"."]})]}),r.jsxs("div",{className:"flow",children:[r.jsx(ce,{title:"Components"}),r.jsx(U,{code:"Content",children:"Renders the content of the select component."}),r.jsx(U,{code:"Input",children:"Renders the input field."}),r.jsx(U,{code:"Options",id:"Options-component",children:"Renders the selectable options."}),r.jsx(U,{code:"Option",children:"Renders an individual option."}),r.jsx(U,{code:"NoOptions",id:"NoOptions-component",children:"Renders a message indicating that there are no options to select from."})]})]})]})]}),wB=Object.freeze(Object.defineProperty({__proto__:null,default:SB},Symbol.toStringTag,{value:"Module"})),O1=[{id:100,animal:"Ant"},{id:101,animal:"Bat"},{id:102,animal:"Cat"},{id:103,animal:"Dog"}],_B=()=>{const[e,t]=te.useState(!1),[n,o]=te.useState(O1),a=i=>{o(i),t(!0)},s=()=>{o(O1.map(i=>({...i,moved:!1}))),t(!1)},l=({item:i,setNodeRef:c,style:d,listeners:u,...p})=>r.jsx("div",{ref:c,style:d,className:`sortable border item mar-r-2 pad pad-h-2 bgc-95 bgd-5 ${i.moved?"moved":""}`,...p,...u,children:i.animal});return r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"flex space middle mar-b-4",children:[r.jsx("h3",{children:"Drag Items to Set Order"}),e&&r.jsx("div",{children:r.jsx(A,{color:"brown",size:"smallest",text:"Reset Order",iconLeft:"rotate-flipx",onClick:s})})]}),r.jsx("div",{className:"sortable list Horizontal",children:r.jsx(Vk,{items:n,Item:l,setOrder:a})})]})},kB=`import { HorizontalSort, Button } from '@/src/index.jsx'

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

export default HorizontalSortExample`,D4=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"HorizontalSort"})," component works exactly the same but constricts the items to be sorted horizontally."]}),r.jsx(pe,{Component:_B,code:kB})]}),TB=Object.freeze(Object.defineProperty({__proto__:null,default:D4},Symbol.toStringTag,{value:"Module"})),wi=[{id:100,animal:"Alan Aardvark"},{id:101,animal:"Brian Badger"},{id:102,animal:"Colin Camel"},{id:103,animal:"David Dog"},{id:104,animal:"Edward Elephant"},{id:105,animal:"Frank Ferret"},{id:106,animal:"Gerald Giraffe"},{id:107,animal:"Hector Hedgehog"}],EB=()=>{const[e,t]=te.useState(!1),[n,o]=te.useState(wi),a=i=>{o(i),t(!0)},s=()=>{o(wi.map(i=>({...i,moved:!1}))),t(!1)},l=({item:i,setNodeRef:c,style:d,listeners:u,...p})=>r.jsx("div",{ref:c,style:d,className:`sortable item border mar-r-2 mar-b-2 pad pad-h-2 bgc-95 bgd-5 ${i.moved?"moved":""}`,...p,...u,children:i.animal});return r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"flex space middle mar-b-4",children:[r.jsx("h3",{children:"Drag Items to Set Order"}),e&&r.jsx("div",{children:r.jsx(A,{color:"brown",size:"smallest",text:"Reset Order",iconLeft:"rotate-flipx",onClick:s})})]}),r.jsx("div",{className:`sortable ${e?"changed":""}`,children:r.jsx(Qp,{items:n,Item:l,setOrder:a})})]})},NB=`import { Sortable, Button } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Sortable, Button } from '@abw/badger-react-ui
import { animals } from '../data.js'

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

export default SortableExample`,O4=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Sortable"})," component is a wrapper around"," ",r.jsx("a",{href:"https://dndkit.com/",children:"dnd kit"})," for creating sortable components."]}),r.jsx(pe,{Component:EB,code:NB})]}),RB=Object.freeze(Object.defineProperty({__proto__:null,default:O4},Symbol.toStringTag,{value:"Module"})),LB=()=>{const[e,t]=te.useState(!1),[n,o]=te.useState(wi),a=i=>{o(i),t(!0)},s=()=>{o(wi.map(i=>({...i,moved:!1}))),t(!1)},l=({item:i,setNodeRef:c,style:d,listeners:u,...p})=>r.jsx("div",{ref:c,style:d,className:`sortable item border mar-b-2 pad pad-h-2 bgc-95 bgd-5 ${i.moved?"moved":""}`,...p,...u,children:i.animal});return r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"flex space middle mar-b-4",children:[r.jsx("h3",{className:"mar-t-none",children:"Drag Items to Set Order"}),e&&r.jsx("div",{children:r.jsx(A,{color:"brown",size:"smallest",text:"Reset Order",iconLeft:"rotate-flipx",onClick:s})})]}),r.jsx("div",{className:"sortable list vertical",children:r.jsx(_x,{items:n,Item:l,setOrder:a})})]})},DB=`import { VerticalSort, Button } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { VerticalSort, Button } from '@abw/badger-react-ui
import { animals } from '../data.js'

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

export default VerticalSortExample`,A4=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"VerticalSort"})," component works exactly the same but constricts the items to be sorted vertically."]}),r.jsx(pe,{Component:LB,code:DB})]}),OB=Object.freeze(Object.defineProperty({__proto__:null,default:A4},Symbol.toStringTag,{value:"Module"})),AB=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Sortable"}),r.jsx(O4,{}),r.jsx("h1",{children:"Vertical Sort"}),r.jsx(A4,{}),r.jsx("h1",{children:"Horizontal Sort"}),r.jsx(D4,{}),r.jsx(rt,{tocName:"sortable",children:r.jsx(to,{children:r.jsxs("div",{className:"flow",children:[r.jsx(ce,{title:"Properties"}),r.jsxs(U,{code:"items",children:["An array of items to sort.  Each should be an object which must contain an ",r.jsx("code",{children:"id"})," property to uniquely identify it."]}),r.jsxs(U,{code:"Item",children:["A component used to render each item.  It will be passed an"," ",r.jsx("code",{children:"item"})," from the list of items, ",r.jsx("code",{children:"setNodeRef"})," ","which must be added to the generate element via the ",r.jsx("code",{children:"ref"})," ","property, a ",r.jsx("code",{children:"style"})," object containing style,",r.jsx("code",{children:"listeners"})," and other ",r.jsx("code",{children:"props"})," which should be added to the element."]}),r.jsxs(U,{code:"setOrder",children:["A function which will be called when the order of items changes. It will be pass an array containing the ",r.jsx("code",{children:"items"})," in the new order."]})]})})})]}),MB=Object.freeze(Object.defineProperty({__proto__:null,default:AB},Symbol.toStringTag,{value:"Module"})),PB=()=>r.jsxs("div",{className:"x3 flex gap-3 middle wrap",children:[r.jsx(Z,{}),r.jsx(Z,{color:"red"}),r.jsx(Z,{color:"orange",fill:!0}),r.jsx(Z,{color:"yellow",fill:!0,stroke:"thin"}),r.jsx(Z,{color:"green",fill:!0,stroke:"thinner",bgIcon:"circle",bgStroke:!0,bgFill:!1}),r.jsx(Z,{color:"teal",fill:!0,stroke:"thinner",bgIcon:"circle",bgStroke:"thin"}),r.jsx(Z,{color:"blue",fill:!0,stroke:"thinner",bgIcon:"circle",bgStroke:"thinner",fillStop:90,strokeStop:60})]}),$B=`import { Spinner } from '@/src/index.jsx'

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

export default SpinnerExample`,M4=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Spinner"})," component renders a spinning icon indicating that something is happening."]}),r.jsx(pe,{Component:PB,code:$B,expand:!0})]}),BB=Object.freeze(Object.defineProperty({__proto__:null,default:M4},Symbol.toStringTag,{value:"Module"})),IB=()=>r.jsx("div",{className:"x3",children:r.jsx(Z,{bgIcon:"circle",color:"blue",bgColor:"yellow"})}),zB=`import { Spinner } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Spinner } from '@abw/badger-react-ui

const SpinnerExample = () =>
  <div className="x3">
    <Spinner bgIcon="circle" color="blue" bgColor="yellow"/>
  </div>

export default SpinnerExample`,P4=()=>r.jsx(R,{code:"bgColor",Component:IB,Source:zB,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"bgColor"})," property can be used to set the color of the background icon.  It only has any effect when"," ",r.jsx(Mt,{text:"bgIcon"})," is set."]})}),FB=Object.freeze(Object.defineProperty({__proto__:null,default:P4},Symbol.toStringTag,{value:"Module"})),HB=()=>r.jsx("div",{className:"x3",children:r.jsx(Z,{bgIcon:"circle",bgStroke:"thin",bgFill:!1})}),UB=`import { Spinner } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Spinner } from '@abw/badger-react-ui

const SpinnerExample = () =>
  <div className="x3">
    <Spinner bgIcon="circle" bgStroke="thin" bgFill={false}/>
  </div>

export default SpinnerExample`,$4=()=>r.jsx(R,{code:"bgFill",Component:HB,Source:UB,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"bgFill"})," property is used to fill the background icon. It is set true by default but can be explicitly set to false to disable the fill. It only has any effect when ",r.jsx(Mt,{text:"bgIcon"})," is set."]})}),VB=Object.freeze(Object.defineProperty({__proto__:null,default:$4},Symbol.toStringTag,{value:"Module"})),WB=()=>r.jsxs("div",{className:"x3 flex gap-3 wrap",children:[r.jsx(Z,{bgIcon:"circle",bgFillStop:70,bgFillStopDark:30}),r.jsx(Z,{bgIcon:"circle",bgFillStop:80,bgFillStopDark:20}),r.jsx(Z,{bgIcon:"circle",bgFillStop:90,bgFillStopDark:10})]}),ZB=`import { Spinner } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Spinner } from '@abw/badger-react-ui

const SpinnerExample = () =>
  <div className="x3 flex gap-3 wrap">
    <Spinner bgIcon="circle" bgFillStop={70} bgFillStopDark={30}/>
    <Spinner bgIcon="circle" bgFillStop={80} bgFillStopDark={20}/>
    <Spinner bgIcon="circle" bgFillStop={90} bgFillStopDark={10}/>
  </div>

export default SpinnerExample`,B4=()=>r.jsx(R,{code:"bgFillStop",Component:WB,Source:ZB,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"bgFillStop"})," property can be used to set color stop for the background icon fill.  The ",r.jsx("code",{children:"bgFillStopDark"})," property can be used to set it for dark mode. It only has any effect when ",r.jsx(Mt,{text:"bgIcon"})," is set."]})}),KB=Object.freeze(Object.defineProperty({__proto__:null,default:B4},Symbol.toStringTag,{value:"Module"})),YB=()=>r.jsxs("div",{className:"x3 flex gap-3 wrap",children:[r.jsx(Z,{bgIcon:!1}),r.jsx(Z,{bgIcon:"circle"}),r.jsx(Z,{bgIcon:"square40"}),r.jsx(Z,{bgIcon:"square30"}),r.jsx(Z,{bgIcon:"square20"}),r.jsx(Z,{bgIcon:"square10"}),r.jsx(Z,{bgIcon:"square"})]}),GB=`import { Spinner } from '@/src/index.jsx'

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

export default SpinnerExample`,I4=()=>r.jsx(R,{code:"bgIcon",Component:YB,Source:GB,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"bgIcon"})," property can be used to set a background icon. The default value is ",r.jsx("code",{children:"false"}),".  When the"," ",r.jsx("code",{children:"bgIcon"})," is set the main icon is shrunk to fit inside it. You can control the level of shrinkage using the"," ",r.jsx(Mt,{text:"shrink"})," property."]})}),XB=Object.freeze(Object.defineProperty({__proto__:null,default:I4},Symbol.toStringTag,{value:"Module"})),QB=()=>r.jsxs("div",{className:"x3 flex gap-3 wrap",children:[r.jsx(Z,{bgIcon:"circle",bgStroke:!0}),r.jsx(Z,{bgIcon:"circle",bgStroke:"thin"}),r.jsx(Z,{bgIcon:"circle",bgStroke:"thinner"}),r.jsx(Z,{bgIcon:"circle",bgStroke:"thinnest"})]}),qB=`import { Spinner } from '@/src/index.jsx'

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

export default SpinnerExample`,z4=()=>r.jsxs(R,{code:"bgStroke",Component:QB,Source:qB,undent:2,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"bgStroke"})," property can be used to set the stroke width of a background icon. It only has any effect when ",r.jsx(Mt,{text:"bgIcon"})," is set."]}),r.jsxs("p",{children:["It can be set to ",r.jsx("code",{children:"true"})," to get the default stroke width, or one of the semantic names: ",r.jsx("code",{children:"thinnest"}),","," ",r.jsx("code",{children:"thinner"}),", ",r.jsx("code",{children:"thin"}),", ",r.jsx("code",{children:"thick"}),","," ",r.jsx("code",{children:"thicker"})," or ",r.jsx("code",{children:"thickest"}),"."]})]}),JB=Object.freeze(Object.defineProperty({__proto__:null,default:z4},Symbol.toStringTag,{value:"Module"})),eI=()=>r.jsxs("div",{className:"x3 flex gap-3 wrap",children:[r.jsx(Z,{bgIcon:"circle",bgStroke:!0,bgStrokeStop:20,bgStrokeStopDark:60}),r.jsx(Z,{bgIcon:"circle",bgStroke:!0,bgStrokeStop:40,bgStrokeStopDark:50}),r.jsx(Z,{bgIcon:"circle",bgStroke:!0,bgStrokeStop:60,bgStrokeStopDark:40})]}),tI=`import { Spinner } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Spinner } from '@abw/badger-react-ui

const SpinnerExample = () =>
  <div className="x3 flex gap-3 wrap">
    <Spinner bgIcon="circle" bgStroke bgStrokeStop={20} bgStrokeStopDark={60}/>
    <Spinner bgIcon="circle" bgStroke bgStrokeStop={40} bgStrokeStopDark={50}/>
    <Spinner bgIcon="circle" bgStroke bgStrokeStop={60} bgStrokeStopDark={40}/>
  </div>

export default SpinnerExample`,F4=()=>r.jsx(R,{code:"bgStrokeStop",Component:eI,Source:tI,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"bgStrokeStop"})," property can be used to set the color stop for the stroke on the background icons.  The"," ",r.jsx("code",{children:"bgStrokeStopDark"})," property can be used to set it in dark mode. It only has any effect when ",r.jsx(Mt,{text:"bgIcon"})," is set."]})}),nI=Object.freeze(Object.defineProperty({__proto__:null,default:F4},Symbol.toStringTag,{value:"Module"})),rI=()=>r.jsxs("div",{className:"x3 flex gap-3",children:[r.jsx(Z,{color:"red"}),r.jsx(Z,{color:"orange"}),r.jsx(Z,{color:"yellow"}),r.jsx(Z,{color:"green"})]}),oI=`import { Spinner } from '@/src/index.jsx'

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

export default SpinnerExample`,H4=()=>r.jsxs(R,{code:"color",Component:rI,Source:oI,undent:2,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"color"})," property can be used to set the base color. The default value is ",r.jsx("code",{children:"brand"})," which can be set as the brand color for your site."]}),r.jsxs("p",{children:["This is simply a shortcut to add the specified ",r.jsx("code",{children:"color"})," as a CSS class to the icon."]})]}),aI=Object.freeze(Object.defineProperty({__proto__:null,default:H4},Symbol.toStringTag,{value:"Module"})),sI=()=>r.jsxs("div",{className:"x3 flex gap-3 wrap",children:[r.jsx(Z,{fill:!0,color:"red"}),r.jsx(Z,{fill:!0,color:"orange"}),r.jsx(Z,{fill:!0,color:"yellow"}),r.jsx(Z,{fill:!0,color:"green"})]}),lI=`import { Spinner } from '@/src/index.jsx'

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

export default SpinnerExample`,U4=()=>r.jsx(R,{code:"fill",Component:sI,Source:lI,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"fill"})," property can be used to fill the icon."]})}),iI=Object.freeze(Object.defineProperty({__proto__:null,default:U4},Symbol.toStringTag,{value:"Module"})),cI=()=>r.jsxs("div",{className:"x3 flex gap-3 wrap",children:[r.jsx(Z,{fill:!0,fillStop:50,fillStopDark:40}),r.jsx(Z,{fill:!0,fillStop:60,fillStopDark:30}),r.jsx(Z,{fill:!0,fillStop:70,fillStopDark:20}),r.jsx(Z,{fill:!0,fillStop:80,fillStopDark:10})]}),dI=`import { Spinner } from '@/src/index.jsx'

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

export default SpinnerExample`,V4=()=>r.jsx(R,{code:"fillStop",Component:cI,Source:dI,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"fillStop"})," property can be used to set the color stop for the fill, ranging from 0 (near black) to 100 (near white) in steps of 5.  The ",r.jsx("code",{children:"fillStopDark"})," property can be used to set a different color stop for dark mode."]})}),uI=Object.freeze(Object.defineProperty({__proto__:null,default:V4},Symbol.toStringTag,{value:"Module"})),pI=()=>r.jsxs("div",{className:"x3 flex gap-3",children:[r.jsx(Z,{icon:"rotate"}),r.jsx(Z,{icon:"asterisk"}),r.jsx(Z,{icon:"arrow"})]}),fI=`import { Spinner } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Spinner } from '@abw/badger-react-ui

const SpinnerExample = () =>
  <div className="x3 flex gap-3">
    <Spinner icon="rotate"/>
    <Spinner icon="asterisk"/>
    <Spinner icon="arrow"/>
  </div>

export default SpinnerExample`,W4=()=>r.jsx(R,{code:"icon",Component:pI,Source:fI,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"icon"})," property can be used to change the foreground icon. The default value is ",r.jsx("code",{children:"cog"}),"."]})}),hI=Object.freeze(Object.defineProperty({__proto__:null,default:W4},Symbol.toStringTag,{value:"Module"})),mI=()=>r.jsxs("div",{className:"x3 flex gap-1",children:[r.jsx(Z,{}),r.jsx(Z,{reverse:!0})]}),xI=`import { Spinner } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Spinner } from '@abw/badger-react-ui

const SpinnerExample = () =>
  <div className="x3 flex gap-1">
    <Spinner/>
    <Spinner reverse/>
  </div>

export default SpinnerExample`,Z4=()=>r.jsx(R,{code:"reverse",Component:mI,Source:xI,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"reverse"})," property can be used to reverse the direction of spin."]})}),gI=Object.freeze(Object.defineProperty({__proto__:null,default:Z4},Symbol.toStringTag,{value:"Module"})),vI=()=>r.jsxs("div",{className:"x3 flex gap-3 wrap",children:[r.jsx(Z,{bgIcon:"circle"}),r.jsx(Z,{bgIcon:"circle",shrink:6}),r.jsx(Z,{bgIcon:"circle",shrink:7}),r.jsx(Z,{bgIcon:"circle",shrink:8})]}),yI=`import { Spinner } from '@/src/index.jsx'

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

export default SpinnerExample`,K4=()=>r.jsx(R,{code:"shrink",Component:vI,Source:yI,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"shrink"})," property can be used to shrink the icon. The default value is 5 when a ",r.jsx(Mt,{text:"bgIcon"})," is set, otherwise it is 0."]})}),jI=Object.freeze(Object.defineProperty({__proto__:null,default:K4},Symbol.toStringTag,{value:"Module"})),bI=()=>r.jsxs("div",{className:"flex middle gap-3",children:[r.jsx(Z,{size:"x3"}),r.jsx(Z,{size:"x5"}),r.jsx(Z,{size:"x8"})]}),CI=`import { Spinner } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Spinner } from '@abw/badger-react-ui

const SpinnerExample = () =>
  <div className="flex middle gap-3">
    <Spinner size="x3"/>
    <Spinner size="x5"/>
    <Spinner size="x8"/>
  </div>

export default SpinnerExample`,Y4=()=>r.jsxs(R,{code:"size",Component:bI,Source:CI,undent:2,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"size"})," property can be set to change the size.  This can be one of the semantic sizes: ",r.jsx("code",{children:"smallest"}),","," ",r.jsx("code",{children:"smaller"}),", ",r.jsx("code",{children:"small"}),", ",r.jsx("code",{children:"medium"})," (default)"," ",r.jsx("code",{children:"large"}),", ",r.jsx("code",{children:"larger"})," or ",r.jsx("code",{children:"largest"}),", or one of the size multipliers from ",r.jsx("code",{children:"x2"})," up to ",r.jsx("code",{children:"x10"}),"."]}),r.jsxs("p",{children:["This is simply a shortcut to add the specified ",r.jsx("code",{children:"size"})," as a CSS class to the icon."]})]}),SI=Object.freeze(Object.defineProperty({__proto__:null,default:Y4},Symbol.toStringTag,{value:"Module"})),wI=()=>r.jsxs("div",{className:"x3 flex gap-3 wrap",children:[r.jsx(Z,{stroke:"thinnest"}),r.jsx(Z,{stroke:"thinner"}),r.jsx(Z,{stroke:"thin"}),r.jsx(Z,{}),r.jsx(Z,{stroke:"thick"}),r.jsx(Z,{stroke:"thicker"}),r.jsx(Z,{stroke:"thickest"}),r.jsx(Z,{stroke:!1,fill:!0})]}),_I=`import { Spinner } from '@/src/index.jsx'

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

export default SpinnerExample`,G4=()=>r.jsxs(R,{code:"stroke",Component:wI,Source:_I,undent:2,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"stroke"})," property can be used to set a stroke thickness, using one of the semantic names: ",r.jsx("code",{children:"thinnest"}),","," ",r.jsx("code",{children:"thinner"}),", ",r.jsx("code",{children:"thin"}),", ",r.jsx("code",{children:"thick"}),","," ",r.jsx("code",{children:"thicker"})," or ",r.jsx("code",{children:"thickest"}),"."]}),r.jsxs("p",{children:["The ",r.jsx("code",{children:"stroke"})," can be set to ",r.jsx("code",{children:"false"})," to disable the outline stroke (although you won't see anything unless you also enable ",r.jsx(Mt,{text:"fill"}),")"]})]}),kI=Object.freeze(Object.defineProperty({__proto__:null,default:G4},Symbol.toStringTag,{value:"Module"})),TI=()=>r.jsxs("div",{className:"x3 flex gap-3 wrap",children:[r.jsx(Z,{strokeStop:20,strokeStopDark:80}),r.jsx(Z,{strokeStop:50,strokeStopDark:50}),r.jsx(Z,{strokeStop:80,strokeStopDark:20})]}),EI=`import { Spinner } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Spinner } from '@abw/badger-react-ui

const SpinnerExample = () =>
  <div className="x3 flex gap-3 wrap">
    <Spinner strokeStop={20} strokeStopDark={80}/>
    <Spinner strokeStop={50} strokeStopDark={50}/>
    <Spinner strokeStop={80} strokeStopDark={20}/>
  </div>

export default SpinnerExample`,X4=()=>r.jsx(R,{code:"strokeStop",Component:TI,Source:EI,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"strokeStop"})," property can be used to set the color stop for the stroke, ranging from 0 (near black) to 100 (near white) in steps of 5.  The ",r.jsx("code",{children:"strokeStopDark"})," property can be used to set the color stop for dark mode."]})}),NI=Object.freeze(Object.defineProperty({__proto__:null,default:X4},Symbol.toStringTag,{value:"Module"})),RI=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Spinner"}),r.jsx(M4,{}),r.jsxs(rt,{tocName:"spinner",children:[r.jsx(ce,{title:"Properties"}),r.jsx(Y4,{}),r.jsx(Z4,{}),r.jsx(K4,{}),r.jsx(W4,{}),r.jsx(H4,{}),r.jsx(G4,{}),r.jsx(X4,{}),r.jsx(U4,{}),r.jsx(V4,{}),r.jsx(I4,{}),r.jsx(P4,{}),r.jsx(z4,{}),r.jsx(F4,{}),r.jsx($4,{}),r.jsx(B4,{})]})]}),LI=Object.freeze(Object.defineProperty({__proto__:null,default:RI},Symbol.toStringTag,{value:"Module"})),DI=`## using npm
$ npm add @abw/badger-react-ui

## using yarn
$ yarn add @abw/badger-react-ui

## using pnpm
$ pnpm add @abw/badger-react-ui`,OI="import '@abw/badger-react-ui/styles/badger-css-react-ui.min.css';",AI="@import '@abw/badger-react-ui/styles/badger-css-react-ui.scss';",MI=`// If you're already importing Badger CSS styles
// something like this...
import '@abw/badger-css/styles/badger.min.css';

// ...then you only need to add this line to get
// the additional styles from Badger React UI
import '@abw/badger-react-ui/styles/badger-react-ui.min.css';`,PI=`// If you're already importing Badger CSS styles
// something like this...
import '@abw/badger-css/styles/badger.scss';

// ...then you only need to add this line to get
// the additional styles from Badger React UI
import '@abw/badger-react-ui/styles/badger-react-ui.scss';
`,$I=()=>r.jsxs("div",{className:"prose flow",children:[r.jsx("h1",{children:"Installation"}),r.jsx("h2",{children:"Adding to a Javascript Project"}),r.jsxs("p",{children:["Add ",r.jsx("code",{children:"@abw/badger-react-ui"})," to your Javascript project using your favourite package manager."]}),r.jsx(An,{code:DI,caption:"Installing",language:"shell",className:"mar-b-8",expand:!0}),r.jsx("h2",{children:"Importing the CSS"}),r.jsxs(to,{children:[r.jsx("p",{children:"The precise details on how you import the CSS will vary depending on what framework and bundler you're using.  For a React app using Vite or running under Next.js, for example, you can add the CSS file to your main application script as show below."}),r.jsxs("p",{children:["For other frameworks and/or bundlers you should consult the documentation on how to import a CSS file from a module in your"," ",r.jsx("code",{children:"node_modules"})," directory."]})]}),r.jsx(An,{code:OI,caption:"Combined CSS for Badger CSS / React UI",language:"js",className:"mar-b-8",expand:!0}),r.jsx("h2",{children:"Importing the SCSS"}),r.jsxs(to,{children:[r.jsx("p",{children:"If you're using SASS/SCSS to build your stylesheet then you can import the SCSS components."}),r.jsx("p",{children:"Add the following line to your main SCSS stylesheet source."})]}),r.jsx(An,{code:AI,caption:"Combined SCSS for Badger CSS / React UI",language:"scss",className:"mar-b-8",expand:!0}),r.jsx("h2",{children:"Includes Badger CSS!"}),r.jsxs("p",{children:["Note that the examples shown above import stylesheets that"," ",r.jsx("b",{children:"include"})," the styles from Badger CSS.  If you're already using Badger CSS and have it imported, or if you've customised your installation of Badger CSS, then you only need to import the additional styles for Badger React UI."]}),r.jsx(An,{code:MI,caption:"Separate CSS for Badger CSS / React UI",language:"js",className:"mar-b-8",expand:!0}),r.jsx(An,{code:PI,caption:"Separate SCSS for Badger CSS / React UI",language:"scss",className:"mar-b-8",expand:!0})]}),BI=Object.freeze(Object.defineProperty({__proto__:null,default:$I},Symbol.toStringTag,{value:"Module"})),II=e=>v.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 900 348",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",xmlSpace:"preserve","xmlns:serif":"http://www.serif.com/",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:2},...e},v.createElement("path",{className:"white",d:"M251.572,212.02C254.513,216.061 254.715,224.14 250.095,227.707C250.444,223.032 248.285,217.636 246.595,215.207C245.351,213.421 240.529,209.129 235.734,208.678C239.528,206.432 248.479,207.771 251.572,212.02ZM384.14,296.071C385.221,300.139 369.105,297.678 368.976,310.316C368.912,316.686 371.784,320.829 368.158,321.337C364.186,321.893 363.702,317.912 363.009,312.67C361.525,301.448 369.403,297.943 376.939,295.687C383.239,293.8 383.721,294.493 384.14,296.071ZM253.718,205.387C253.325,205.165 252.924,204.95 252.515,204.744C240.306,198.572 226.195,201.866 221.023,212.097C216.954,220.147 219.624,230.108 226.897,236.996C223.855,235.725 220.886,234.082 218.121,232C201.872,219.763 198.65,197.554 202.498,192.469C205.797,188.109 229.508,185.044 245.757,197.281C248.897,199.645 251.533,202.419 253.718,205.387ZM237.701,38.979C234.959,40.644 229.11,29.763 219.15,31.701C213.297,32.839 209.964,30.344 213.732,27.34C224.434,18.806 242.755,35.909 237.701,38.979ZM102.358,65.632C92.93,59.118 82.319,55.79 70.261,59.171C61.606,61.598 55.943,67.285 53.203,74.67C51.916,74.775 50.609,74.911 49.293,75.073C41.358,76.053 33.068,77.961 26.855,79.508C45.336,54.696 68.07,46.037 90.212,45.935L91.775,45.928L92.073,44.393C93.513,36.977 89.339,29.817 78.425,24.264C102.932,19.041 133.157,24.498 149.387,33.721L151.514,34.93L152.164,32.571C153.117,29.113 152.884,20.563 147.007,12.944C177.743,18.398 201.051,28.288 219.375,41.206C253.271,69.998 271.19,107.581 286.422,143.401C303.117,182.661 316.606,219.801 344.235,241.041C344.731,241.562 345.232,242.081 345.737,242.598C354.202,251.26 369.687,264.151 388.439,280.71C390.567,282.59 392.536,284.445 394.289,286.258C390.175,286.465 384.884,287.861 378.121,289.401C355.898,294.457 355.058,304.229 357.619,320.184C358.932,328.361 362.585,332.134 367.854,333.381C347.657,338.931 337.347,342.519 312.425,337.814C273.532,330.471 236.683,316.046 225.943,310.994C225.749,310.608 225.423,310.285 224.995,310.101C210.606,303.913 200.922,296.04 196.833,286.988C198.796,285.944 200.367,284.755 201.74,283.804C202.604,283.205 202.819,282.017 202.22,281.154C201.622,280.29 200.434,280.074 199.57,280.673C196.577,282.748 192.528,286.255 184.628,285.578C183.581,285.489 182.657,286.266 182.568,287.313C182.478,288.361 183.256,289.284 184.303,289.373C187.94,289.685 190.882,289.256 193.326,288.475C197.252,297.211 205.873,305.078 218.736,311.412C193.53,320.617 171.273,314.508 151.338,302.875C130.029,290.441 111.338,271.747 94.517,258.202C80.516,246.928 67.672,239.285 55.79,240.915C48.382,241.931 41.226,246.463 34.375,256.107C23.226,231.606 38.024,207.024 52.658,191.434L54.205,189.786L52.319,188.541C38.022,179.099 21.81,184.908 11.009,196.975C10.204,187.276 14.741,173.112 22.182,160.21C29.69,147.192 40.209,135.4 51.636,130.932C122.17,117.473 156.365,176.933 192.036,228.629C212.984,258.988 259.699,294.806 348.432,323.461C343.645,308.274 345.837,301.003 349.276,294.022C327.909,284.035 301.478,267.497 284.086,236.018C236.493,149.873 215.639,88.568 146.875,71.303C134.894,68.295 119.263,65.091 102.358,65.632ZM102.275,79.762C100.823,87.371 78.096,65.294 73.617,77.189C65.317,99.228 57.382,86.649 59.352,80.667C69.456,49.974 103.609,72.771 102.275,79.762Z",style:{fill:"white"}}),v.createElement("path",{className:"black",d:"M52.054,78.596C51.294,78.672 50.529,78.759 49.759,78.854C39.593,80.108 28.834,82.925 22.777,84.472L17.915,85.714L20.728,81.559C40.142,52.889 64.62,42.703 88.525,42.149C88.888,35.685 83.351,30.024 71.924,25.526L66.722,23.478L72.092,21.924C97.213,14.653 130.162,19.649 148.812,29.092C148.924,24.696 147.199,17.339 140.471,11.578L135.382,7.22L142.003,8.25C168.067,12.303 189.097,19.357 206.402,28.658C206.575,28.721 206.748,28.783 206.921,28.846C208.323,24.341 212.385,20.472 219.865,21.145C239.675,22.925 243.917,32.841 244.961,51.125C270.1,72.457 287.235,102.584 300.677,133.136C312.72,160.511 321.799,188.221 331.031,210.219C334.652,218.847 338.295,226.594 342.151,233.093C344.174,235.417 346.275,237.699 348.461,239.935C356.894,248.564 372.28,261.359 390.96,277.855C394.6,281.069 397.773,284.243 400.276,287.281C402.859,288.644 404.62,291.472 405.778,296.536C405.975,297.173 406.119,297.795 406.209,298.403C406.253,298.697 406.287,298.994 406.314,299.294C406.615,301.13 406.861,303.2 407.058,305.527C407.84,314.777 405.022,326.993 390.631,330.7C387.826,331.422 385.121,332.093 382.547,332.63C378.775,333.843 375.504,334.896 375.505,334.895C353.988,343.064 340.05,346.906 311.718,341.557C270.836,333.838 232.195,318.357 223.053,313.826C195.401,325.115 171.094,318.814 149.418,306.165C127.941,293.633 109.081,274.82 92.128,261.169C85.494,255.827 79.163,251.286 73.076,248.283C67.258,245.412 61.69,243.95 56.308,244.689C49.102,245.677 42.338,250.617 35.728,260.909L33.983,263.626L32.45,260.785C18.325,234.619 32.7,207.872 48.29,190.557C35.023,183.325 20.386,190.519 11.384,202.521L9.087,205.583L8.03,201.904C5.111,191.745 9.777,174.095 18.883,158.307C24.331,148.86 31.344,140.108 39.121,133.986C28.037,137.259 16.107,142.234 3.209,149.173C16.216,114.812 33.291,93.85 51.552,81.51C51.677,80.52 51.845,79.548 52.054,78.596ZM251.572,212.02C248.479,207.771 239.528,206.432 235.734,208.678C240.529,209.129 245.351,213.421 246.595,215.207C248.285,217.636 250.444,223.032 250.095,227.707C254.715,224.14 254.513,216.061 251.572,212.02ZM384.14,296.071C383.721,294.493 383.239,293.8 376.939,295.687C369.403,297.943 361.525,301.448 363.009,312.67C363.702,317.912 364.186,321.893 368.158,321.337C371.784,320.829 368.912,316.686 368.976,310.316C369.105,297.678 385.221,300.139 384.14,296.071ZM253.718,205.387C251.533,202.419 248.897,199.645 245.757,197.281C229.508,185.044 205.797,188.109 202.498,192.469C198.65,197.554 201.872,219.763 218.121,232C220.886,234.082 223.855,235.725 226.897,236.996C219.624,230.108 216.954,220.147 221.023,212.097C226.195,201.866 240.306,198.572 252.515,204.744C252.924,204.95 253.325,205.165 253.718,205.387ZM237.701,38.979C242.755,35.909 224.434,18.806 213.732,27.34C209.964,30.344 213.297,32.839 219.15,31.701C229.11,29.763 234.959,40.644 237.701,38.979ZM102.358,65.632C119.263,65.091 134.894,68.295 146.875,71.303C215.639,88.568 236.493,149.873 284.086,236.018C301.478,267.497 327.909,284.035 349.276,294.022C345.837,301.003 343.645,308.274 348.432,323.461C259.699,294.806 212.984,258.988 192.036,228.629C156.365,176.933 122.17,117.473 51.636,130.932C40.209,135.4 29.69,147.192 22.182,160.21C14.741,173.112 10.204,187.276 11.009,196.975C21.81,184.908 38.022,179.099 52.319,188.541L54.205,189.786L52.658,191.434C38.024,207.024 23.226,231.606 34.375,256.107C41.226,246.463 48.382,241.931 55.79,240.915C67.672,239.285 80.516,246.928 94.517,258.202C111.338,271.747 130.029,290.441 151.338,302.875C171.273,314.508 193.53,320.617 218.736,311.412C205.873,305.078 197.252,297.211 193.326,288.475C190.882,289.256 187.94,289.685 184.303,289.373C183.256,289.284 182.478,288.361 182.568,287.313C182.657,286.266 183.581,285.489 184.628,285.578C192.528,286.255 196.577,282.748 199.57,280.673C200.434,280.074 201.622,280.29 202.22,281.154C202.819,282.017 202.604,283.205 201.74,283.804C200.367,284.755 198.796,285.944 196.833,286.988C200.922,296.04 210.606,303.913 224.995,310.101C225.423,310.285 225.749,310.608 225.943,310.994C236.683,316.046 273.532,330.471 312.425,337.814C337.347,342.519 347.657,338.931 367.854,333.381C362.585,332.134 358.932,328.361 357.619,320.184C355.058,304.229 355.898,294.457 378.121,289.401C384.884,287.861 390.175,286.465 394.289,286.258C392.536,284.445 390.567,282.59 388.439,280.71C369.687,264.151 354.202,251.26 345.737,242.598C345.232,242.081 344.731,241.562 344.235,241.041C316.606,219.801 303.117,182.661 286.422,143.401C271.19,107.581 253.271,69.998 219.375,41.206C201.051,28.288 177.743,18.398 147.007,12.944C152.884,20.563 153.117,29.113 152.164,32.571L151.514,34.93L149.387,33.721C133.157,24.498 102.932,19.041 78.425,24.264C89.339,29.817 93.513,36.977 92.073,44.393L91.775,45.928L90.212,45.935C68.07,46.037 45.336,54.696 26.855,79.508C33.068,77.961 41.358,76.053 49.293,75.073C50.609,74.911 51.916,74.775 53.203,74.67C55.943,67.285 61.606,61.598 70.261,59.171C82.319,55.79 92.93,59.118 102.358,65.632ZM102.275,79.762C103.609,72.771 69.456,49.974 59.352,80.667C57.382,86.649 65.317,99.228 73.617,77.189C78.096,65.294 100.823,87.371 102.275,79.762Z"}),v.createElement("path",{className:"badger",d:"M418.81,39.948C419.704,39.68 421.135,39.389 423.103,39.076C425.07,38.763 427.082,38.607 429.139,38.607C431.107,38.607 432.873,38.741 434.438,39.009C436.003,39.277 437.322,39.814 438.396,40.619C439.469,41.424 440.274,42.519 440.81,43.905C441.347,45.292 441.615,47.103 441.615,49.338L441.615,62.485C443.851,61.591 445.975,60.965 447.987,60.607C449.999,60.249 452.213,60.07 454.628,60.07C458.92,60.07 462.989,60.831 466.835,62.351C470.681,63.871 474.079,66.085 477.03,68.991C479.982,71.898 482.307,75.497 484.006,79.79C485.705,84.083 486.555,89.046 486.555,94.681C486.555,100.494 485.683,105.569 483.939,109.907C482.195,114.244 479.758,117.844 476.628,120.706C473.498,123.567 469.675,125.736 465.158,127.212C460.642,128.687 455.656,129.425 450.201,129.425C444.298,129.425 439.29,128.732 435.176,127.346C431.062,125.96 427.574,124.238 424.712,122.181C420.777,119.409 418.81,115.831 418.81,111.449L418.81,39.948ZM450.201,111.449C454.314,111.449 457.512,110.041 459.792,107.224C462.073,104.406 463.213,100.226 463.213,94.681C463.213,89.046 462.05,84.843 459.725,82.071C457.4,79.298 454.27,77.912 450.335,77.912C448.546,77.912 447.003,78.091 445.707,78.449C444.41,78.806 443.001,79.343 441.481,80.059L441.481,109.303C442.465,109.929 443.65,110.443 445.036,110.846C446.422,111.248 448.144,111.449 450.201,111.449ZM524.787,60.07C529.617,60.07 534.021,60.562 538.001,61.546C541.981,62.53 545.379,64.028 548.196,66.04C551.013,68.052 553.182,70.601 554.702,73.686C556.223,76.772 556.983,80.416 556.983,84.62L556.983,114.669C556.983,116.994 556.335,118.895 555.038,120.37C553.741,121.846 552.198,123.12 550.41,124.193C544.597,127.681 536.413,129.425 525.86,129.425C521.121,129.425 516.85,128.978 513.049,128.084C509.248,127.189 505.984,125.848 503.256,124.059C500.529,122.271 498.427,119.99 496.951,117.218C495.476,114.445 494.738,111.226 494.738,107.559C494.738,101.388 496.571,96.648 500.238,93.339C503.905,90.03 509.584,87.973 517.275,87.168L534.848,85.29L534.848,84.351C534.848,81.758 533.708,79.902 531.428,78.784C529.147,77.666 525.86,77.107 521.568,77.107C518.169,77.107 514.86,77.465 511.641,78.18C508.421,78.896 505.515,79.79 502.921,80.863C501.758,80.059 500.775,78.829 499.97,77.174C499.165,75.52 498.762,73.798 498.762,72.01C498.762,69.684 499.321,67.829 500.439,66.442C501.557,65.056 503.279,63.871 505.604,62.887C508.198,61.904 511.261,61.188 514.793,60.741C518.326,60.294 521.657,60.07 524.787,60.07ZM525.86,112.791C527.381,112.791 529.058,112.634 530.891,112.321C532.724,112.008 534.088,111.583 534.983,111.047L534.983,100.315L525.324,101.12C522.82,101.299 520.763,101.835 519.153,102.73C517.543,103.624 516.738,104.965 516.738,106.754C516.738,108.543 517.431,109.996 518.818,111.114C520.204,112.232 522.551,112.791 525.86,112.791ZM568.117,94.681C568.117,88.778 569.012,83.658 570.8,79.321C572.589,74.983 575.071,71.384 578.245,68.522C581.42,65.66 585.132,63.536 589.38,62.15C593.628,60.763 598.211,60.07 603.13,60.07C604.919,60.07 606.663,60.227 608.362,60.54C610.061,60.853 611.447,61.233 612.52,61.68L612.52,39.948C613.415,39.68 614.846,39.389 616.813,39.076C618.781,38.763 620.793,38.607 622.85,38.607C624.817,38.607 626.584,38.741 628.149,39.009C629.714,39.277 631.033,39.814 632.106,40.619C633.179,41.424 633.984,42.519 634.521,43.905C635.057,45.292 635.326,47.103 635.326,49.338L635.326,112.925C635.326,117.128 633.358,120.482 629.423,122.986C626.83,124.685 623.476,126.183 619.362,127.48C615.248,128.777 610.508,129.425 605.142,129.425C599.329,129.425 594.12,128.62 589.514,127.011C584.908,125.401 581.018,123.076 577.843,120.035C574.668,116.994 572.253,113.35 570.599,109.102C568.944,104.854 568.117,100.047 568.117,94.681ZM606.215,77.912C601.386,77.912 597.675,79.298 595.081,82.071C592.488,84.843 591.191,89.046 591.191,94.681C591.191,100.226 592.398,104.406 594.813,107.224C597.227,110.041 600.715,111.449 605.276,111.449C606.886,111.449 608.339,111.203 609.636,110.711C610.933,110.22 611.939,109.661 612.655,109.035L612.655,79.522C610.866,78.449 608.72,77.912 606.215,77.912ZM681.339,60.07C686.436,60.07 691.064,60.719 695.223,62.016C699.382,63.312 702.892,64.989 705.754,67.046C707.542,68.298 708.951,69.684 709.979,71.205C711.008,72.725 711.522,74.693 711.522,77.107L711.522,124.059C711.522,128.799 710.628,132.891 708.839,136.334C707.051,139.777 704.613,142.639 701.528,144.919C698.443,147.2 694.821,148.877 690.662,149.95C686.503,151.023 682.054,151.56 677.314,151.56C669.176,151.56 662.781,150.464 658.131,148.273C653.48,146.082 651.155,142.527 651.155,137.608C651.155,135.551 651.58,133.74 652.43,132.175C653.279,130.61 654.241,129.425 655.314,128.62C657.907,130.051 660.836,131.259 664.101,132.242C667.365,133.226 670.741,133.718 674.229,133.718C679.058,133.718 682.904,132.913 685.766,131.303C688.627,129.694 690.058,127.1 690.058,123.523L690.058,121.376C686.392,122.986 681.92,123.791 676.643,123.791C672.619,123.791 668.796,123.187 665.174,121.98C661.552,120.773 658.377,118.895 655.649,116.346C652.922,113.797 650.73,110.51 649.076,106.486C647.421,102.461 646.594,97.677 646.594,92.132C646.594,86.677 647.466,81.937 649.21,77.912C650.954,73.888 653.369,70.556 656.454,67.918C659.54,65.28 663.206,63.312 667.454,62.016C671.702,60.719 676.33,60.07 681.339,60.07ZM689.656,79.522C689.03,79.164 688.113,78.806 686.906,78.449C685.699,78.091 684.201,77.912 682.412,77.912C678.03,77.912 674.743,79.142 672.552,81.601C670.361,84.061 669.265,87.571 669.265,92.132C669.265,97.319 670.361,101.053 672.552,103.333C674.743,105.614 677.538,106.754 680.936,106.754C684.603,106.754 687.51,105.904 689.656,104.205L689.656,79.522ZM760.084,129.425C754.807,129.425 749.911,128.687 745.395,127.212C740.878,125.736 736.943,123.523 733.59,120.571C730.236,117.62 727.598,113.909 725.675,109.437C723.752,104.965 722.791,99.734 722.791,93.742C722.791,87.839 723.752,82.764 725.675,78.516C727.598,74.268 730.124,70.78 733.254,68.052C736.384,65.325 739.962,63.312 743.986,62.016C748.011,60.719 752.124,60.07 756.328,60.07C761.068,60.07 765.383,60.786 769.273,62.217C773.163,63.648 776.517,65.615 779.334,68.119C782.151,70.623 784.342,73.619 785.908,77.107C787.473,80.595 788.255,84.396 788.255,88.51C788.255,91.551 787.406,93.876 785.706,95.486C784.007,97.095 781.637,98.124 778.596,98.571L745.462,103.535C746.445,106.486 748.458,108.699 751.498,110.175C754.539,111.651 758.027,112.388 761.962,112.388C765.629,112.388 769.094,111.919 772.359,110.98C775.623,110.041 778.283,108.945 780.34,107.693C781.771,108.587 782.979,109.84 783.962,111.449C784.946,113.059 785.438,114.758 785.438,116.547C785.438,120.571 783.56,123.567 779.804,125.535C776.942,127.055 773.722,128.084 770.145,128.62C766.568,129.157 763.214,129.425 760.084,129.425ZM756.328,76.705C754.181,76.705 752.326,77.063 750.761,77.778C749.196,78.493 747.921,79.41 746.937,80.528C745.954,81.646 745.216,82.898 744.724,84.284C744.232,85.67 743.941,87.079 743.852,88.51L766.791,84.754C766.523,82.965 765.539,81.176 763.84,79.388C762.141,77.599 759.637,76.705 756.328,76.705ZM822.061,127.145C821.166,127.413 819.758,127.681 817.835,127.95C815.912,128.218 813.922,128.352 811.865,128.352C809.898,128.352 808.131,128.218 806.566,127.95C805.001,127.681 803.682,127.145 802.609,126.34C801.536,125.535 800.709,124.439 800.127,123.053C799.546,121.667 799.255,119.856 799.255,117.62L799.255,77.376C799.255,75.319 799.635,73.552 800.396,72.077C801.156,70.601 802.251,69.282 803.682,68.119C805.113,66.957 806.879,65.906 808.981,64.967C811.083,64.028 813.341,63.201 815.756,62.485C818.17,61.77 820.674,61.211 823.268,60.808C825.861,60.406 828.455,60.205 831.049,60.205C835.341,60.205 838.74,61.032 841.244,62.686C843.748,64.341 845,67.046 845,70.802C845,72.054 844.821,73.284 844.463,74.491C844.106,75.699 843.659,76.794 843.122,77.778C841.244,77.778 839.321,77.867 837.354,78.046C835.386,78.225 833.463,78.493 831.585,78.851C829.707,79.209 827.941,79.589 826.286,79.991C824.632,80.394 823.223,80.863 822.061,81.4L822.061,127.145Z"}),v.createElement("path",{className:"react-ui",d:"M456.264,259.551C455.489,259.783 454.269,260.016 452.604,260.248C450.939,260.48 449.215,260.596 447.434,260.596C445.73,260.596 444.2,260.48 442.845,260.248C441.49,260.016 440.347,259.551 439.418,258.854C438.488,258.157 437.772,257.208 437.268,256.007C436.765,254.807 436.513,253.239 436.513,251.302L436.513,216.449C436.513,214.667 436.842,213.138 437.501,211.86C438.159,210.582 439.108,209.439 440.347,208.432C441.586,207.426 443.116,206.516 444.936,205.702C446.756,204.889 448.712,204.173 450.803,203.553C452.894,202.933 455.063,202.449 457.309,202.101C459.555,201.752 461.801,201.578 464.047,201.578C467.765,201.578 470.708,202.294 472.877,203.727C475.046,205.16 476.13,207.503 476.13,210.756C476.13,211.84 475.975,212.905 475.665,213.951C475.355,214.997 474.968,215.945 474.504,216.797C472.877,216.797 471.212,216.875 469.508,217.03C467.804,217.185 466.139,217.417 464.512,217.727C462.886,218.037 461.356,218.366 459.923,218.714C458.49,219.063 457.27,219.469 456.264,219.934L456.264,259.551ZM511.913,261.526C507.343,261.526 503.103,260.887 499.191,259.609C495.28,258.331 491.872,256.414 488.968,253.858C486.063,251.302 483.778,248.088 482.113,244.215C480.448,240.343 479.615,235.812 479.615,230.623C479.615,225.511 480.448,221.115 482.113,217.436C483.778,213.757 485.966,210.737 488.677,208.374C491.388,206.012 494.486,204.269 497.971,203.146C501.457,202.023 505.02,201.462 508.66,201.462C512.765,201.462 516.502,202.081 519.871,203.321C523.24,204.56 526.145,206.264 528.584,208.432C531.024,210.601 532.922,213.196 534.277,216.216C535.633,219.237 536.31,222.529 536.31,226.092C536.31,228.725 535.574,230.739 534.103,232.133C532.631,233.527 530.579,234.418 527.945,234.805L499.249,239.104C500.101,241.659 501.844,243.576 504.477,244.854C507.111,246.132 510.131,246.771 513.539,246.771C516.715,246.771 519.716,246.365 522.543,245.551C525.37,244.738 527.674,243.789 529.456,242.705C530.695,243.48 531.741,244.564 532.593,245.958C533.445,247.352 533.871,248.824 533.871,250.373C533.871,253.858 532.244,256.453 528.991,258.157C526.513,259.473 523.724,260.364 520.626,260.829C517.528,261.294 514.624,261.526 511.913,261.526ZM508.66,215.868C506.801,215.868 505.194,216.178 503.838,216.797C502.483,217.417 501.379,218.211 500.527,219.179C499.675,220.147 499.036,221.231 498.61,222.432C498.184,223.632 497.933,224.852 497.855,226.092L517.722,222.839C517.489,221.29 516.637,219.74 515.166,218.191C513.694,216.642 511.526,215.868 508.66,215.868ZM569.073,201.462C573.255,201.462 577.069,201.888 580.516,202.74C583.963,203.592 586.906,204.889 589.346,206.632C591.785,208.374 593.664,210.582 594.98,213.254C596.297,215.926 596.955,219.082 596.955,222.722L596.955,248.746C596.955,250.76 596.394,252.406 595.271,253.684C594.148,254.962 592.812,256.066 591.263,256.995C586.228,260.016 579.141,261.526 570.002,261.526C565.897,261.526 562.199,261.139 558.907,260.364C555.615,259.59 552.788,258.428 550.426,256.879C548.064,255.33 546.244,253.355 544.966,250.954C543.688,248.553 543.049,245.764 543.049,242.589C543.049,237.245 544.636,233.14 547.812,230.274C550.987,227.408 555.906,225.627 562.567,224.93L577.786,223.303L577.786,222.49C577.786,220.244 576.798,218.637 574.823,217.669C572.848,216.7 570.002,216.216 566.284,216.216C563.341,216.216 560.475,216.526 557.687,217.146C554.899,217.765 552.382,218.54 550.135,219.469C549.129,218.772 548.277,217.707 547.58,216.275C546.883,214.842 546.534,213.351 546.534,211.802C546.534,209.788 547.018,208.181 547.986,206.98C548.954,205.78 550.445,204.754 552.459,203.902C554.705,203.05 557.358,202.43 560.417,202.043C563.477,201.655 566.362,201.462 569.073,201.462ZM570.002,247.12C571.319,247.12 572.771,246.984 574.359,246.713C575.946,246.442 577.128,246.074 577.902,245.609L577.902,236.315L569.537,237.012C567.369,237.167 565.587,237.632 564.193,238.406C562.799,239.181 562.102,240.343 562.102,241.892C562.102,243.441 562.702,244.699 563.903,245.668C565.103,246.636 567.136,247.12 570.002,247.12ZM640.871,217.03C638.934,217.03 637.095,217.339 635.352,217.959C633.609,218.579 632.099,219.489 630.821,220.689C629.543,221.89 628.517,223.381 627.743,225.162C626.968,226.944 626.581,229.035 626.581,231.436C626.581,236.238 627.955,239.839 630.705,242.24C633.455,244.641 636.804,245.842 640.754,245.842C643.078,245.842 645.092,245.571 646.796,245.029C648.5,244.486 650.01,243.906 651.327,243.286C652.876,244.37 654.037,245.551 654.812,246.829C655.587,248.107 655.974,249.637 655.974,251.418C655.974,254.594 654.463,257.053 651.443,258.796C648.422,260.538 644.24,261.41 638.896,261.41C634.016,261.41 629.601,260.693 625.651,259.26C621.701,257.828 618.313,255.814 615.486,253.219C612.659,250.625 610.471,247.507 608.922,243.867C607.373,240.227 606.598,236.199 606.598,231.784C606.598,226.672 607.431,222.2 609.096,218.366C610.761,214.532 613.027,211.376 615.892,208.897C618.758,206.419 622.069,204.56 625.826,203.321C629.582,202.081 633.551,201.462 637.734,201.462C643.31,201.462 647.609,202.469 650.63,204.482C653.65,206.496 655.161,209.091 655.161,212.266C655.161,213.738 654.812,215.113 654.115,216.391C653.418,217.669 652.605,218.772 651.675,219.702C650.359,219.082 648.771,218.482 646.912,217.901C645.053,217.32 643.039,217.03 640.871,217.03ZM685.599,240.265C685.599,242.279 686.238,243.712 687.516,244.564C688.794,245.416 690.595,245.842 692.918,245.842C694.08,245.842 695.281,245.745 696.52,245.551C697.759,245.358 698.844,245.106 699.773,244.796C700.47,245.648 701.07,246.597 701.574,247.643C702.077,248.688 702.329,249.947 702.329,251.418C702.329,254.362 701.225,256.763 699.018,258.621C696.81,260.48 692.918,261.41 687.342,261.41C680.526,261.41 675.279,259.861 671.6,256.763C667.921,253.665 666.081,248.63 666.081,241.659L666.081,191.935C666.933,191.703 668.153,191.451 669.741,191.18C671.329,190.909 673.013,190.773 674.795,190.773C678.203,190.773 680.855,191.374 682.753,192.574C684.65,193.775 685.599,196.311 685.599,200.184L685.599,207.619L700.819,207.619C701.283,208.471 701.729,209.536 702.155,210.814C702.581,212.092 702.794,213.506 702.794,215.055C702.794,217.765 702.193,219.721 700.993,220.922C699.792,222.122 698.185,222.722 696.171,222.722L685.599,222.722L685.599,240.265ZM799.454,233.643C799.454,237.826 798.737,241.64 797.305,245.087C795.872,248.533 793.8,251.476 791.089,253.916C788.378,256.356 785.086,258.234 781.214,259.551C777.341,260.868 772.965,261.526 768.086,261.526C763.206,261.526 758.83,260.868 754.958,259.551C751.085,258.234 747.793,256.356 745.082,253.916C742.372,251.476 740.3,248.533 738.867,245.087C737.434,241.64 736.718,237.826 736.718,233.643L736.718,189.263C737.57,189.108 738.925,188.895 740.784,188.624C742.643,188.353 744.424,188.217 746.128,188.217C747.909,188.217 749.478,188.353 750.833,188.624C752.189,188.895 753.331,189.379 754.261,190.076C755.19,190.773 755.887,191.742 756.352,192.981C756.816,194.22 757.049,195.847 757.049,197.86L757.049,233.295C757.049,237.012 758.075,239.917 760.128,242.008C762.18,244.099 764.833,245.145 768.086,245.145C771.416,245.145 774.088,244.099 776.102,242.008C778.116,239.917 779.123,237.012 779.123,233.295L779.123,189.263C779.975,189.108 781.33,188.895 783.189,188.624C785.048,188.353 786.829,188.217 788.533,188.217C790.314,188.217 791.883,188.353 793.238,188.624C794.594,188.895 795.736,189.379 796.666,190.076C797.595,190.773 798.292,191.742 798.757,192.981C799.221,194.22 799.454,195.847 799.454,197.86L799.454,233.643ZM834.54,259.202C833.688,259.435 832.352,259.667 830.531,259.899C828.711,260.132 826.911,260.248 825.129,260.248C823.348,260.248 821.779,260.112 820.424,259.841C819.069,259.57 817.926,259.086 816.997,258.389C816.067,257.692 815.37,256.724 814.906,255.485C814.441,254.245 814.208,252.619 814.208,250.605L814.208,189.263C815.06,189.108 816.416,188.895 818.275,188.624C820.134,188.353 821.915,188.217 823.619,188.217C825.4,188.217 826.969,188.353 828.324,188.624C829.68,188.895 830.822,189.379 831.751,190.076C832.681,190.773 833.378,191.742 833.843,192.981C834.307,194.22 834.54,195.847 834.54,197.86L834.54,259.202Z"})),zI=e=>v.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 440 440",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",xmlSpace:"preserve","xmlns:serif":"http://www.serif.com/",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:1.5},...e},v.createElement("circle",{cx:220,cy:220,r:144,style:{fill:"rgb(136,136,136)",stroke:"black",strokeWidth:"0.33px"}}),v.createElement("path",{d:"M220,12C334.798,12 428,105.202 428,220C428,334.798 334.798,428 220,428C105.202,428 12,334.798 12,220C12,105.202 105.202,12 220,12ZM220,76C140.524,76 76,140.524 76,220C76,299.476 140.524,364 220,364C299.476,364 364,299.476 364,220C364,140.524 299.476,76 220,76Z",style:{fill:"rgb(206,206,206)",stroke:"black",strokeWidth:"6.67px"}}),v.createElement("path",{d:"M41.319,232.772C38.119,232.829 35.878,232.789 34.556,232.652C33.233,232.516 32.025,232.097 30.891,231.317C29.797,230.537 28.939,229.512 28.315,228.163C27.731,226.853 27.383,225.299 27.351,223.499C27.321,221.82 27.574,220.295 28.11,218.925C28.645,217.555 29.466,216.461 30.532,215.641C31.636,214.782 32.828,214.28 34.145,214.097C35.421,213.914 37.7,213.793 40.979,213.735L46.378,213.638C49.538,213.582 51.819,213.621 53.142,213.758C54.464,213.894 55.672,214.313 56.766,215.093C57.9,215.873 58.758,216.898 59.343,218.248C59.966,219.557 60.274,221.112 60.306,222.912C60.336,224.591 60.083,226.116 59.547,227.486C59.052,228.855 58.231,229.95 57.126,230.769C56.021,231.629 54.829,232.131 53.553,232.313C52.236,232.497 49.957,232.618 46.718,232.675L41.319,232.772ZM51.53,224.348C53.01,224.322 53.968,224.225 54.365,224.058C54.762,223.891 54.957,223.567 54.947,223.047C54.94,222.607 54.774,222.29 54.45,222.056C54.126,221.862 53.124,221.759 51.484,221.789L36.727,222.052C34.887,222.085 33.769,222.185 33.331,222.313C32.934,222.48 32.7,222.844 32.71,223.364C32.72,223.924 32.966,224.279 33.489,224.43C33.972,224.581 35.173,224.64 37.012,224.607L51.53,224.348ZM60.115,235.306L61.347,243.494C61.681,245.709 61.739,247.439 61.562,248.68C61.424,249.914 61.047,250.901 60.464,251.596C59.92,252.284 59.189,252.799 58.275,253.179C57.356,253.52 55.95,253.853 53.972,254.151L51.243,254.562C49.265,254.859 47.772,254.882 46.796,254.584C45.827,254.325 45.002,253.681 44.361,252.645C43.719,251.609 43.228,250.226 42.96,248.447L42.632,246.271L30.054,248.165L28.827,240.017L60.115,235.306ZM55.962,244.264L48.012,245.461L48.101,246.054C48.214,246.806 48.45,247.296 48.887,247.514C49.285,247.737 50.06,247.782 51.207,247.609L53.778,247.222C54.846,247.061 55.534,246.796 55.797,246.392C56.066,246.028 56.117,245.293 55.962,244.264ZM65.668,263.888L35.019,271.744L32.973,263.762L63.622,255.906L65.668,263.888ZM73.017,284.844L43.393,295.958L40.864,289.217L52.805,280.165L39.36,285.21L36.944,278.768L66.567,267.654L68.984,274.095L57.267,283.404L70.6,278.402L73.017,284.844ZM78.538,295.659L50.283,309.897L46.575,302.539L74.83,288.301L78.538,295.659ZM74.884,324.988C72.198,326.727 70.274,327.877 69.079,328.459C67.884,329.042 66.637,329.325 65.262,329.262C63.921,329.177 62.651,328.76 61.408,327.945C60.221,327.141 59.105,326.005 58.127,324.494C57.214,323.084 56.623,321.655 56.354,320.209C56.085,318.763 56.204,317.4 56.676,316.142C57.159,314.828 57.906,313.773 58.927,312.922C59.915,312.092 61.786,310.786 64.539,309.004L69.073,306.07C71.725,304.353 73.683,303.181 74.878,302.598C76.073,302.015 77.32,301.733 78.661,301.817C80.036,301.88 81.306,302.297 82.515,303.135C83.736,303.917 84.819,305.074 85.797,306.585C86.71,307.996 87.3,309.424 87.569,310.87C87.872,312.294 87.753,313.657 87.248,314.937C86.764,316.251 86.017,317.306 85.03,318.136C84.008,318.987 82.138,320.293 79.418,322.054L74.884,324.988ZM79.105,312.441C80.347,311.637 81.11,311.048 81.358,310.697C81.607,310.345 81.601,309.968 81.319,309.531C81.08,309.162 80.772,308.98 80.372,308.952C79.995,308.958 79.09,309.401 77.714,310.292L65.322,318.312C63.778,319.312 62.881,319.987 62.577,320.327C62.328,320.679 62.322,321.111 62.605,321.548C62.909,322.018 63.306,322.19 63.829,322.042C64.319,321.915 65.37,321.33 66.915,320.331L79.105,312.441ZM104.097,331.146L80.061,351.721L75.379,346.251L83.505,333.662L72.595,343L68.121,337.773L92.158,317.198L96.632,322.425L88.805,335.179L99.624,325.92L104.097,331.146ZM116.973,342.973L99.303,369.64L93.032,363.991L96.536,359.503L94.337,357.522L90.179,361.421L83.849,355.718L108.146,335.022L116.973,342.973ZM100.106,355.182C102.219,352.239 104.837,348.676 108.073,344.485C103.407,348.41 100.049,351.361 98.026,353.308L100.106,355.182ZM133.778,355.495L130.062,360.657L126.102,357.806L111.332,378.323L104.645,373.509L119.414,352.992L115.486,350.164L119.202,345.002L133.778,355.495ZM135.754,356.629L147.731,363.322L144.628,368.874L139.845,366.2L136.918,371.438L141.387,373.936L138.46,379.173L133.991,376.676L130.596,382.752L135.833,385.678L132.75,391.196L120.32,384.249L135.754,356.629ZM150.451,364.831L156.15,367.169C159.813,368.672 162.217,369.874 163.376,370.738C164.534,371.603 165.306,372.568 165.653,373.618C166,374.669 166.095,375.702 165.849,376.725C165.654,377.726 164.969,379.607 163.83,382.382L159.625,392.633C158.547,395.261 157.708,396.991 157.099,397.736C156.476,398.518 155.781,399.054 154.939,399.314C154.149,399.553 153.22,399.604 152.256,399.424C151.255,399.23 149.84,398.779 148.027,398.035L138.442,394.103L150.451,364.831ZM156.01,372.991L148.115,392.235C149.188,392.675 149.946,392.726 150.387,392.388C150.828,392.051 151.462,390.927 152.267,388.966L156.927,377.605C157.474,376.272 157.749,375.391 157.827,374.99C157.904,374.59 157.826,374.255 157.569,373.933C157.348,373.627 156.824,373.325 156.01,372.991ZM194.889,388.345L187.399,386.838L187.865,384.525C188.078,383.466 188.102,382.736 187.961,382.422C187.828,382.069 187.538,381.888 187.107,381.802C186.636,381.707 186.205,381.824 185.891,382.169C185.537,382.506 185.301,383.07 185.135,383.894C184.93,384.913 184.929,385.729 185.101,386.294C185.265,386.899 185.884,387.676 186.989,388.673C190.171,391.517 192.051,393.731 192.724,395.254C193.389,396.816 193.418,399.106 192.802,402.165C192.361,404.361 191.755,405.953 191.04,406.87C190.317,407.826 189.124,408.484 187.484,408.929C185.891,409.343 184.095,409.349 182.134,408.954C179.977,408.52 178.221,407.718 176.857,406.587C175.486,405.495 174.679,404.231 174.461,402.882C174.243,401.532 174.37,399.681 174.836,397.367L175.246,395.328L182.736,396.835L181.979,400.599C181.742,401.776 181.71,402.545 181.843,402.898C182.007,403.298 182.328,403.526 182.877,403.636C183.387,403.739 183.866,403.59 184.18,403.246C184.541,402.869 184.785,402.266 184.951,401.442C185.322,399.599 185.323,398.375 184.924,397.724C184.532,397.033 183.467,395.839 181.727,394.143C179.995,392.407 178.859,391.159 178.35,390.444C177.802,389.722 177.419,388.788 177.2,387.642C176.982,386.497 177.062,385.085 177.393,383.438C177.875,381.046 178.535,379.384 179.345,378.404C180.193,377.432 181.347,376.767 182.798,376.447C184.297,376.095 185.968,376.105 187.89,376.492C189.968,376.91 191.709,377.586 193.057,378.592C194.374,379.551 195.18,380.611 195.446,381.725C195.711,382.839 195.631,384.659 195.142,387.09L194.889,388.345ZM200.214,379.311L213.892,380.38L213.397,386.721L207.933,386.294L207.466,392.276L212.57,392.675L212.102,398.657L206.998,398.257L206.456,405.196L212.437,405.664L211.945,411.965L197.748,410.855L200.214,379.311ZM225.777,380.267L226.42,405.578L231.418,405.452L231.578,411.77L218.342,412.105L217.54,380.476L225.777,380.267ZM233.537,379.948L247.346,378.191L248.149,384.5L242.514,385.217L243.272,391.169L248.311,390.528L249.069,396.479L244.029,397.121L245.706,410.295L237.532,411.335L233.537,379.948ZM258.549,375.749L265.335,406.653L257.287,408.42L250.501,377.517L258.549,375.749ZM281.962,378.541L274.713,380.955L273.968,378.716C273.626,377.691 273.285,377.046 273.007,376.844C272.716,376.603 272.374,376.591 271.957,376.73C271.501,376.882 271.185,377.198 271.084,377.653C270.945,378.121 271.02,378.728 271.286,379.525C271.615,380.512 272.019,381.22 272.449,381.625C272.892,382.068 273.815,382.435 275.27,382.751C279.444,383.638 282.176,384.625 283.516,385.612C284.869,386.637 286.033,388.61 287.019,391.57C287.727,393.696 287.992,395.378 287.827,396.529C287.675,397.718 286.967,398.882 285.765,400.083C284.588,401.234 283.032,402.132 281.135,402.764C279.047,403.459 277.125,403.636 275.379,403.332C273.646,403.066 272.318,402.37 271.458,401.307C270.598,400.244 269.789,398.574 269.043,396.335L268.386,394.362L275.635,391.947L276.848,395.591C277.227,396.729 277.581,397.412 277.872,397.653C278.214,397.918 278.606,397.956 279.137,397.779C279.63,397.615 279.972,397.248 280.073,396.793C280.2,396.287 280.112,395.642 279.846,394.845C279.252,393.061 278.645,391.999 277.975,391.632C277.292,391.227 275.774,390.721 273.421,390.113C271.056,389.467 269.45,388.948 268.653,388.581C267.818,388.227 267.021,387.607 266.263,386.721C265.504,385.836 264.872,384.571 264.341,382.977C263.57,380.662 263.317,378.891 263.532,377.639C263.786,376.374 264.456,375.223 265.557,374.224C266.683,373.174 268.138,372.352 269.997,371.733C272.009,371.063 273.855,370.785 275.525,370.988C277.144,371.165 278.371,371.684 279.155,372.519C279.939,373.354 280.774,374.973 281.557,377.326L281.962,378.541ZM298.791,359.997L312.694,388.418L305.293,392.039L299.457,380.11L297.265,381.182L303.101,393.111L295.699,396.732L281.795,368.311L289.197,364.69L294.172,374.858L296.363,373.786L291.389,363.618L298.791,359.997ZM328.977,350.672L322.871,355.265L321.453,353.379C320.804,352.515 320.275,352.012 319.947,351.909C319.595,351.773 319.267,351.87 318.915,352.134C318.532,352.423 318.332,352.823 318.381,353.287C318.397,353.775 318.662,354.326 319.167,354.998C319.792,355.829 320.401,356.372 320.937,356.619C321.498,356.898 322.49,356.953 323.97,356.791C328.209,356.305 331.113,356.373 332.698,356.883C334.306,357.425 336.036,358.927 337.912,361.42C339.258,363.21 340.044,364.721 340.254,365.865C340.488,367.04 340.185,368.369 339.428,369.89C338.678,371.355 337.487,372.701 335.889,373.903C334.131,375.225 332.364,376.004 330.612,376.27C328.885,376.568 327.404,376.33 326.251,375.596C325.098,374.862 323.8,373.535 322.382,371.649L321.132,369.987L327.237,365.395L329.546,368.463C330.267,369.422 330.82,369.958 331.172,370.093C331.58,370.237 331.964,370.148 332.411,369.812C332.827,369.499 333.034,369.043 332.986,368.579C332.945,368.059 332.656,367.475 332.151,366.804C331.021,365.301 330.108,364.487 329.356,364.352C328.58,364.185 326.98,364.187 324.556,364.358C322.108,364.498 320.42,364.516 319.548,364.421C318.644,364.35 317.691,364.016 316.691,363.417C315.69,362.818 314.688,361.82 313.679,360.477C312.212,358.527 311.41,356.928 311.216,355.673C311.054,354.393 311.324,353.088 312.051,351.791C312.785,350.438 313.903,349.197 315.47,348.019C317.164,346.744 318.827,345.894 320.474,345.556C322.066,345.21 323.394,345.312 324.403,345.854C325.411,346.397 326.717,347.667 328.208,349.649L328.977,350.672ZM352.018,341.021C354.259,343.305 355.771,344.96 356.581,346.015C357.391,347.069 357.917,348.234 358.13,349.594C358.315,350.925 358.161,352.253 357.61,353.634C357.06,354.958 356.17,356.279 354.885,357.539C353.686,358.715 352.405,359.58 351.041,360.132C349.678,360.685 348.319,360.841 346.992,360.631C345.608,360.419 344.425,359.899 343.386,359.068C342.376,358.266 340.722,356.695 338.425,354.353L334.644,350.498C332.431,348.242 330.892,346.558 330.082,345.504C329.272,344.449 328.746,343.285 328.561,341.953C328.348,340.594 328.502,339.266 329.081,337.914C329.603,336.561 330.521,335.269 331.806,334.008C333.005,332.832 334.286,331.967 335.649,331.415C336.984,330.834 338.343,330.677 339.699,330.917C341.083,331.128 342.266,331.649 343.276,332.45C344.315,333.281 345.968,334.852 348.237,337.166L352.018,341.021ZM338.881,339.394C337.845,338.338 337.116,337.708 336.721,337.535C336.327,337.361 335.959,337.443 335.587,337.807C335.273,338.115 335.157,338.453 335.21,338.85C335.291,339.218 335.905,340.016 337.054,341.187L347.389,351.724C348.678,353.038 349.519,353.782 349.913,354.012C350.307,354.185 350.732,354.104 351.103,353.74C351.503,353.348 351.592,352.925 351.342,352.442C351.12,351.987 350.337,351.074 349.049,349.76L338.881,339.394ZM341.099,325.297L349.778,314.415L354.751,318.38L351.209,322.821L355.9,326.562L359.067,322.591L363.758,326.332L360.59,330.303L370.973,338.584L365.835,345.026L341.099,325.297ZM360.217,298.339L365.582,301.754L362.962,305.871L384.287,319.447L379.862,326.398L358.537,312.822L355.937,316.905L350.572,313.489L360.217,298.339ZM373.724,268.616L401.315,284.523L397.232,293.957C392.425,292.879 387.026,291.458 381.05,289.656C383.345,290.998 388.109,293.888 395.342,298.326L391.291,307.687L360.792,298.497L363.969,291.155L374.435,294.769L384.533,298.224C379.631,295.754 373.288,292.181 365.542,287.521L368.942,279.665C369.87,279.936 373.139,281.046 378.872,283.004L390.287,286.942C383.414,283.488 376.851,279.819 370.562,275.921L373.724,268.616ZM376.781,254.323L408.604,257.594L406.512,265.77L400.91,264.75L400.176,267.617L405.56,269.49L403.448,277.745L373.836,265.832L376.781,254.323ZM395.425,263.594C391.838,263.089 387.466,262.425 382.252,261.503C387.895,263.814 392.068,265.419 394.731,266.307L395.425,263.594ZM378.103,248.493L378.802,242.694C379.266,238.842 379.736,236.28 380.221,234.928C380.661,233.612 381.55,232.591 382.886,231.865C384.218,231.18 386.216,230.977 388.877,231.298C391.339,231.594 392.929,232.108 393.691,232.804C394.454,233.5 394.826,234.754 394.77,236.56C395.359,235.02 396.048,233.975 396.791,233.5C397.533,233.025 398.167,232.779 398.781,232.692C399.352,232.64 400.91,232.747 403.452,233.053L411.712,234.049L410.798,241.634L400.354,240.375C398.686,240.175 397.639,240.169 397.208,240.399C396.778,240.63 396.498,241.281 396.364,242.393L410.502,244.096L409.516,252.277L378.103,248.493ZM384.49,240.962L391.479,241.804C391.589,240.891 391.507,240.236 391.312,239.85C391.116,239.464 390.306,239.165 388.916,238.998L387.209,238.792C386.216,238.672 385.522,238.75 385.161,239.069C384.84,239.393 384.6,240.049 384.49,240.962ZM380.371,226.869L380.35,213.149L386.71,213.139L386.718,218.619L392.718,218.61L392.71,213.49L398.71,213.48L398.718,218.6L405.678,218.589L405.669,212.589L411.989,212.579L412.011,226.819L380.371,226.869Z"}),v.createElement("path",{d:"M65.814,139.849C68.729,141.171 70.736,142.169 71.872,142.859C73.008,143.55 73.919,144.446 74.609,145.637C75.262,146.812 75.598,148.106 75.583,149.592C75.548,151.026 75.195,152.579 74.452,154.218C73.759,155.748 72.876,157.017 71.804,158.024C70.733,159.032 69.522,159.669 68.208,159.951C66.841,160.254 65.55,160.196 64.281,159.796C63.05,159.414 60.94,158.545 57.953,157.191L53.034,154.961C50.156,153.656 48.113,152.642 46.977,151.951C45.841,151.261 44.929,150.364 44.276,149.19C43.586,147.999 43.251,146.705 43.302,145.235C43.301,143.785 43.69,142.248 44.433,140.609C45.127,139.079 46.009,137.81 47.081,136.803C48.116,135.779 49.327,135.142 50.677,134.876C52.044,134.573 53.335,134.631 54.567,135.014C55.836,135.414 57.945,136.282 60.896,137.62L65.814,139.849ZM52.976,143.077C51.628,142.466 50.721,142.142 50.291,142.123C49.86,142.103 49.546,142.312 49.331,142.786C49.15,143.186 49.163,143.544 49.356,143.895C49.564,144.209 50.426,144.731 51.919,145.408L65.362,151.503C67.038,152.262 68.091,152.652 68.542,152.724C68.972,152.744 69.339,152.515 69.554,152.041C69.785,151.531 69.715,151.104 69.308,150.744C68.937,150.4 67.877,149.832 66.201,149.072L52.976,143.077ZM52.319,126.004L56.705,118.981C57.892,117.081 58.972,115.728 59.913,114.901C60.82,114.053 61.749,113.548 62.643,113.399C63.504,113.229 64.394,113.314 65.336,113.619C66.256,113.958 67.541,114.619 69.237,115.678L71.578,117.14C73.275,118.2 74.424,119.153 74.971,120.014C75.54,120.84 75.748,121.866 75.562,123.07C75.376,124.275 74.85,125.644 73.897,127.171L72.732,129.037L83.52,135.775L79.156,142.764L52.319,126.004ZM61.298,121.897L68.117,126.156L68.435,125.647C68.838,125.002 68.978,124.476 68.787,124.027C68.63,123.599 68.07,123.06 67.086,122.446L64.88,121.069C63.964,120.497 63.269,120.251 62.807,120.387C62.366,120.489 61.849,121.015 61.298,121.897ZM65.491,105.806L74.058,95.089L79.026,99.06L75.604,103.341L80.291,107.087L83.488,103.088L88.174,106.834L84.977,110.834L90.414,115.179L94.16,110.493L99.097,114.439L90.205,125.562L65.491,105.806ZM91.595,76.985L113.834,99.49L108.713,104.551L95.575,97.345L105.668,107.559L100.775,112.395L78.535,89.89L83.429,85.054L96.71,91.949L86.701,81.82L91.595,76.985ZM125.69,63.611L119.349,67.872L118.033,65.913C117.43,65.017 116.929,64.486 116.607,64.365C116.262,64.211 115.93,64.29 115.565,64.536C115.166,64.803 114.946,65.192 114.97,65.658C114.961,66.146 115.196,66.711 115.664,67.409C116.244,68.272 116.823,68.846 117.346,69.122C117.89,69.431 118.878,69.538 120.364,69.455C124.624,69.195 127.52,69.417 129.075,70.011C130.653,70.637 132.301,72.229 134.041,74.818C135.29,76.677 135.995,78.228 136.144,79.381C136.314,80.568 135.942,81.878 135.104,83.357C134.277,84.78 133.017,86.06 131.357,87.176C129.531,88.403 127.726,89.086 125.962,89.259C124.221,89.465 122.756,89.149 121.643,88.354C120.531,87.56 119.306,86.166 117.989,84.207L116.829,82.481L123.17,78.22L125.312,81.407C125.981,82.403 126.505,82.967 126.849,83.121C127.249,83.286 127.637,83.218 128.102,82.905C128.534,82.615 128.765,82.171 128.741,81.705C128.728,81.184 128.471,80.585 128.002,79.888C126.954,78.328 126.085,77.466 125.341,77.291C124.575,77.083 122.977,77 120.548,77.042C118.096,77.051 116.409,76.98 115.544,76.839C114.645,76.72 113.711,76.335 112.744,75.684C111.776,75.033 110.829,73.983 109.892,72.589C108.531,70.563 107.815,68.924 107.688,67.66C107.595,66.373 107.934,65.085 108.728,63.829C109.533,62.516 110.716,61.336 112.343,60.243C114.102,59.06 115.808,58.3 117.471,58.05C119.079,57.788 120.4,57.961 121.378,58.557C122.357,59.152 123.593,60.49 124.976,62.548L125.69,63.611ZM151.705,60.191C153.126,63.059 154.048,65.102 154.491,66.356C154.934,67.609 155.072,68.88 154.852,70.239C154.615,71.562 154.056,72.776 153.103,73.917C152.169,75.005 150.913,75.984 149.3,76.783C147.795,77.529 146.308,77.953 144.841,78.055C143.374,78.156 142.033,77.883 140.837,77.27C139.587,76.64 138.624,75.777 137.895,74.666C137.184,73.59 136.1,71.582 134.644,68.643L132.247,63.804C130.844,60.972 129.904,58.894 129.461,57.64C129.019,56.386 128.881,55.115 129.118,53.793C129.338,52.434 129.897,51.219 130.867,50.114C131.783,48.99 133.057,48.047 134.67,47.248C136.175,46.502 137.662,46.079 139.129,45.977C140.579,45.839 141.919,46.112 143.133,46.761C144.383,47.392 145.346,48.254 146.057,49.33C146.787,50.442 147.87,52.449 149.309,55.353L151.705,60.191ZM139.723,54.566C139.066,53.239 138.568,52.415 138.247,52.127C137.927,51.84 137.551,51.803 137.085,52.033C136.691,52.229 136.475,52.514 136.402,52.907C136.365,53.283 136.701,54.232 137.429,55.702L143.981,68.928C144.797,70.577 145.366,71.545 145.669,71.886C145.99,72.173 146.419,72.229 146.885,71.998C147.387,71.749 147.603,71.375 147.516,70.838C147.446,70.336 146.985,69.226 146.168,67.577L139.723,54.566ZM167.692,34.963L174.441,55.018C175.206,57.293 175.666,58.911 175.821,59.871C176.013,60.82 175.878,61.92 175.489,63.149C175.088,64.339 174.357,65.429 173.348,66.317C172.3,67.218 170.987,67.956 169.395,68.491C167.613,69.091 165.919,69.324 164.35,69.176C162.794,69.067 161.502,68.615 160.501,67.897C159.499,67.179 158.751,66.334 158.28,65.311C157.809,64.287 156.98,62.076 155.845,58.702L149.874,40.96L157.683,38.332L165.249,60.813C165.696,62.14 166.052,62.948 166.281,63.251C166.56,63.579 166.927,63.667 167.344,63.526C167.837,63.36 168.076,63.069 168.088,62.601C168.099,62.133 167.856,61.159 167.358,59.681L159.92,37.579L167.692,34.963ZM174.727,33.131L180.462,32.033C184.273,31.303 186.857,30.972 188.292,31.023C189.681,31.042 190.923,31.578 192.021,32.631C193.079,33.691 193.88,35.533 194.383,38.165C194.85,40.601 194.844,42.272 194.412,43.21C193.981,44.147 192.9,44.884 191.162,45.379C192.809,45.471 194.014,45.811 194.692,46.373C195.37,46.936 195.797,47.465 196.067,48.024C196.29,48.552 196.662,50.069 197.143,52.583L198.707,60.755L191.204,62.191L189.226,51.859C188.91,50.209 188.597,49.21 188.246,48.87C187.896,48.53 187.191,48.461 186.091,48.671L188.768,62.658L180.675,64.207L174.727,33.131ZM183.842,36.925L185.166,43.839C186.069,43.666 186.668,43.389 186.976,43.085C187.285,42.782 187.323,41.919 187.06,40.544L186.737,38.855C186.549,37.873 186.264,37.235 185.85,36.988C185.444,36.781 184.746,36.752 183.842,36.925ZM219.815,41.52L211.587,41.97L211.288,36.498C211.198,34.861 211.064,33.867 210.884,33.516C210.663,33.128 210.292,32.947 209.693,32.98C209.014,33.017 208.588,33.281 208.454,33.769C208.281,34.259 208.258,35.302 208.345,36.9L209.148,51.558C209.231,53.076 209.367,54.11 209.591,54.538C209.777,55.009 210.19,55.226 210.829,55.191C211.468,55.156 211.854,54.895 211.987,54.407C212.163,53.957 212.182,52.834 212.088,51.116L211.871,47.162L220.099,46.712L220.165,47.91C220.344,51.185 220.231,53.515 219.866,54.897C219.461,56.281 218.528,57.534 216.987,58.66C215.447,59.786 213.558,60.41 211.241,60.537C208.845,60.668 206.824,60.338 205.218,59.545C203.612,58.751 202.508,57.61 201.904,56.08C201.342,54.589 200.935,52.288 200.765,49.172L200.26,39.946C200.135,37.67 200.123,35.988 200.22,34.821C200.318,33.694 200.736,32.549 201.438,31.469C202.138,30.349 203.173,29.491 204.498,28.818C205.861,28.102 207.403,27.738 209.2,27.639C211.597,27.508 213.62,27.878 215.268,28.709C216.876,29.543 217.98,30.684 218.536,32.056C219.132,33.425 219.489,35.569 219.651,38.524L219.815,41.52ZM226.051,27.944L239.739,28.872L239.309,35.218L233.841,34.847L233.435,40.833L238.544,41.179L238.137,47.166L233.029,46.819L232.558,53.763L238.544,54.169L238.117,60.475L223.909,59.511L226.051,27.944ZM272.132,44.93L264.713,43.105L265.276,40.813C265.534,39.765 265.59,39.037 265.462,38.717C265.344,38.359 265.062,38.166 264.635,38.061C264.169,37.946 263.733,38.045 263.404,38.376C263.037,38.697 262.777,39.251 262.576,40.067C262.328,41.077 262.292,41.892 262.44,42.464C262.578,43.074 263.163,43.877 264.225,44.921C267.282,47.898 269.067,50.19 269.674,51.74C270.272,53.329 270.203,55.618 269.458,58.648C268.923,60.823 268.25,62.388 267.497,63.274C266.734,64.198 265.514,64.804 263.856,65.179C262.247,65.525 260.452,65.454 258.51,64.977C256.373,64.451 254.653,63.575 253.339,62.387C252.015,61.237 251.263,59.94 251.102,58.583C250.942,57.225 251.148,55.381 251.712,53.089L252.209,51.069L259.628,52.894L258.711,56.623C258.424,57.788 258.359,58.555 258.477,58.913C258.624,59.32 258.935,59.562 259.479,59.695C259.984,59.82 260.469,59.692 260.797,59.36C261.174,59 261.444,58.407 261.644,57.592C262.093,55.766 262.147,54.543 261.775,53.875C261.414,53.169 260.4,51.931 258.734,50.162C257.078,48.354 255.996,47.058 255.518,46.322C255.001,45.577 254.658,44.628 254.489,43.474C254.319,42.32 254.459,40.913 254.861,39.282C255.443,36.912 256.174,35.28 257.025,34.335C257.913,33.401 259.095,32.785 260.559,32.527C262.071,32.24 263.74,32.321 265.643,32.789C267.702,33.295 269.412,34.045 270.716,35.108C271.991,36.121 272.752,37.215 272.97,38.339C273.187,39.464 273.029,41.279 272.437,43.687L272.132,44.93ZM292.077,61.866C290.909,64.845 290.018,66.902 289.387,68.072C288.756,69.243 287.909,70.199 286.755,70.95C285.616,71.664 284.341,72.066 282.856,72.129C281.423,72.168 279.854,71.897 278.178,71.24C276.614,70.627 275.301,69.812 274.239,68.794C273.177,67.776 272.478,66.6 272.127,65.303C271.754,63.953 271.745,62.661 272.078,61.374C272.396,60.123 273.153,57.972 274.35,54.918L276.321,49.89C277.474,46.948 278.381,44.854 279.011,43.684C279.642,42.513 280.49,41.557 281.629,40.843C282.782,40.092 284.057,39.69 285.527,39.665C286.975,39.588 288.53,39.896 290.206,40.553C291.77,41.166 293.083,41.982 294.145,42.999C295.221,43.98 295.92,45.156 296.256,46.491C296.63,47.84 296.639,49.132 296.321,50.383C295.988,51.67 295.23,53.822 294.048,56.838L292.077,61.866ZM288.186,49.213C288.726,47.836 289.002,46.913 288.999,46.482C288.996,46.051 288.771,45.748 288.287,45.558C287.877,45.398 287.521,45.43 287.181,45.64C286.878,45.865 286.401,46.752 285.803,48.279L280.416,62.021C279.745,63.734 279.411,64.806 279.362,65.26C279.365,65.691 279.612,66.045 280.097,66.235C280.618,66.44 281.041,66.347 281.379,65.922C281.704,65.533 282.216,64.445 282.887,62.732L288.186,49.213ZM305.248,47.78L317.483,54.419L314.45,60.009L309.458,57.3L306.596,62.574L311.062,64.997L308.2,70.27L303.735,67.848L297.402,79.521L290.16,75.591L305.248,47.78ZM336.214,66.91L332.603,72.146L328.586,69.376L314.235,90.188L307.451,85.51L321.802,64.698L317.818,61.951L321.428,56.715L336.214,66.91ZM364.183,92.203L339.722,112.6L332.279,105.509C334.952,101.37 338.151,96.794 341.907,91.809C339.854,93.499 335.496,96.971 328.833,102.225L321.448,95.189L340.609,69.743L346.401,75.262L339.394,83.834L332.663,92.117C336.674,88.37 342.219,83.653 349.268,77.993L355.466,83.898C354.89,84.676 352.72,87.36 348.901,92.064L341.262,101.415C346.878,96.158 352.588,91.267 358.42,86.712L364.183,92.203ZM375.916,107.812L353.681,130.812L348.545,124.115L352.809,120.341L351.008,117.992L346.209,121.067L341.024,114.307L368.687,98.385L375.916,107.812ZM357.107,116.742C359.72,114.234 362.944,111.208 366.89,107.677C361.586,110.686 357.747,112.975 355.403,114.521L357.107,116.742ZM381.75,116.129L384.673,121.184C386.616,124.543 387.779,126.874 388.203,128.246C388.641,129.564 388.544,130.914 387.911,132.296C387.258,133.644 385.782,135.006 383.462,136.348C381.315,137.589 379.735,138.133 378.708,138.035C377.68,137.936 376.629,137.157 375.589,135.679C376.044,137.264 376.12,138.514 375.812,139.34C375.504,140.165 375.144,140.742 374.705,141.181C374.28,141.565 372.97,142.416 370.754,143.697L363.551,147.862L359.727,141.249L368.834,135.982C370.288,135.141 371.128,134.516 371.334,134.074C371.54,133.631 371.373,132.942 370.812,131.973L358.485,139.102L354.36,131.969L381.75,116.129ZM381.166,125.985L375.071,129.51C375.532,130.306 375.991,130.78 376.379,130.972C376.767,131.163 377.594,130.916 378.806,130.215L380.295,129.354C381.161,128.853 381.669,128.374 381.766,127.902C381.828,127.451 381.626,126.782 381.166,125.985ZM394.047,138.523L399.41,151.152L393.555,153.638L391.414,148.594L385.891,150.939L387.892,155.651L382.369,157.996L380.368,153.284L373.962,156.004L376.307,161.527L370.49,163.997L364.924,150.89L394.047,138.523Z"}),v.createElement("path",{d:"M184.955,228.867C188.721,238.945 188.513,248.571 184.331,257.744C180.149,266.917 173.328,273.271 163.868,276.806C162.694,277.245 161.783,276.599 161.136,274.868C160.466,273.075 160.618,271.785 161.592,270.998C165.55,268.391 167.432,264.376 167.237,258.953C167.118,255.615 165.001,248.444 160.888,237.438C158.162,230.143 155.958,225.188 154.277,222.575C150.745,216.708 146.627,213.702 141.923,213.557C140.501,214.089 139.223,212.84 138.091,209.81C137.167,207.337 137.447,205.823 138.931,205.269C147.834,201.941 156.818,202.6 165.882,207.246C174.969,211.953 181.327,219.16 184.955,228.867ZM154.841,276.691C155.65,278.855 155.467,280.157 154.292,280.596C144.462,284.27 134.975,283.869 125.834,279.394C116.823,275.08 110.469,267.978 106.772,258.085C103.145,248.378 103.217,238.768 106.99,229.254C110.725,219.826 117.074,213.437 126.039,210.086C127.029,209.717 127.959,210.038 128.831,211.051C129.61,211.817 130.208,212.756 130.624,213.869C131.017,214.92 131.112,215.836 130.911,216.616C130.678,217.125 129.963,217.851 128.764,218.792C127.404,219.864 126.471,220.952 125.968,222.057C125.054,223.948 124.673,226.416 124.824,229.46C125.129,232.728 126.46,237.515 128.817,243.822L132.768,254.395C136.096,263.298 139.268,269.053 142.286,271.66C145.11,274.127 148.362,275.097 152.04,274.568C152.395,274.576 152.932,274.692 153.65,274.917C154.144,275.296 154.541,275.888 154.841,276.691ZM242.304,166.531L250.75,188.847L244.327,191.459C243.207,191.102 241.934,189.957 240.507,188.025C238.841,185.829 237.838,184.653 237.498,184.498C232.627,181.457 228.398,180.606 224.812,181.946C223.452,182.455 222.252,181.318 221.212,178.535C220.38,176.31 220.332,174.954 221.066,174.468L222.364,173.983C223.539,173.544 225.332,173.437 227.742,173.664C230.152,173.891 231.851,173.82 232.84,173.45C234.51,172.826 235.717,171.247 236.461,168.714L242.304,166.531ZM263.863,212.907C266.451,219.832 265.806,226.591 261.928,233.184C258.136,239.252 252.716,243.602 245.667,246.237C244.493,246.676 243.374,245.473 242.311,242.629C241.294,239.908 241.254,238.197 242.189,237.495C242.638,237.187 243.283,236.84 244.126,236.455C246.622,235.028 248.416,233.512 249.508,231.907C250.599,230.301 250.832,228.663 250.208,226.994C248.984,223.717 246.104,222.045 241.569,221.978C240.125,221.884 235.883,222.412 228.844,223.563C221.782,224.652 215.452,224.023 209.854,221.676C203.537,219.104 199.281,214.881 197.086,209.008C194.845,203.01 194.983,196.969 197.501,190.885C200.103,184.839 204.403,180.695 210.401,178.454C211.204,178.153 212.042,178.51 212.914,179.523C213.608,180.25 214.129,181.077 214.476,182.004C215.284,184.168 215.171,185.655 214.134,186.465C212.318,187.637 210.964,189.2 210.073,191.154C209.02,193.238 208.864,195.27 209.603,197.248C209.973,198.238 210.694,199.131 211.767,199.928C215.673,202.837 220.643,203.41 226.679,201.648C228.703,201.032 230.917,200.451 233.321,199.906C235.724,199.36 238.366,198.795 241.249,198.211C245.088,198.115 248.954,199.031 252.845,200.959C258.25,203.731 261.922,207.713 263.863,212.907ZM214.54,257.975L205.898,235.415L212.483,232.954C213.603,233.311 214.888,234.486 216.338,236.481C217.857,238.661 218.829,239.848 219.254,240.042C224.063,243.107 228.323,243.946 232.032,242.559C233.393,242.051 234.593,243.188 235.632,245.97C236.464,248.196 236.471,249.533 235.651,249.98C235.489,250.111 235.098,250.292 234.48,250.523C233.244,250.985 231.42,251.103 229.01,250.876C226.6,250.649 224.931,250.709 224.004,251.056C222.335,251.68 221.128,253.258 220.383,255.791L214.54,257.975ZM316.313,138.873L324.758,161.189L318.336,163.801C317.216,163.444 315.942,162.299 314.515,160.366C312.849,158.171 311.846,156.995 311.507,156.84C306.635,153.799 302.407,152.948 298.821,154.288C297.46,154.797 296.26,153.66 295.221,150.877C294.389,148.652 294.34,147.296 295.075,146.81L296.373,146.325C297.548,145.886 299.34,145.779 301.75,146.006C304.16,146.233 305.86,146.161 306.849,145.792C308.518,145.168 309.725,143.589 310.47,141.056L316.313,138.873ZM337.872,185.249C340.46,192.174 339.815,198.933 335.937,205.526C332.145,211.593 326.724,215.944 319.676,218.579C318.501,219.018 317.382,217.815 316.32,214.971C315.303,212.25 315.262,210.539 316.198,209.837C316.646,209.529 317.292,209.182 318.134,208.797C320.631,207.37 322.425,205.854 323.516,204.249C324.607,202.643 324.841,201.005 324.217,199.336C322.992,196.059 320.113,194.387 315.578,194.32C314.133,194.226 309.892,194.754 302.853,195.905C295.791,196.994 289.46,196.365 283.862,194.018C277.546,191.446 273.29,187.223 271.095,181.35C268.854,175.352 268.992,169.311 271.509,163.227C274.112,157.181 278.412,153.037 284.409,150.796C285.213,150.495 286.051,150.852 286.923,151.865C287.617,152.592 288.138,153.419 288.484,154.346C289.293,156.51 289.179,157.997 288.143,158.807C286.326,159.979 284.973,161.542 284.082,163.496C283.029,165.58 282.872,167.612 283.612,169.59C283.981,170.58 284.703,171.473 285.776,172.27C289.681,175.179 294.652,175.752 300.687,173.99C302.712,173.374 304.926,172.793 307.329,172.248C309.732,171.702 312.375,171.137 315.257,170.553C319.097,170.457 322.962,171.373 326.854,173.301C332.258,176.073 335.931,180.055 337.872,185.249ZM288.549,230.317L279.907,207.757L286.491,205.296C287.611,205.653 288.896,206.828 290.346,208.823C291.866,211.003 292.838,212.19 293.262,212.384C298.072,215.449 302.331,216.288 306.041,214.901C307.401,214.393 308.601,215.53 309.641,218.312C310.473,220.538 310.479,221.875 309.66,222.322C309.497,222.453 309.107,222.634 308.489,222.865C307.252,223.327 305.429,223.445 303.019,223.218C300.609,222.991 298.94,223.051 298.013,223.398C296.343,224.022 295.136,225.6 294.392,228.133L288.549,230.317Z"}),v.createElement("path",{d:"M394.606,195.569C388.976,196.699 383.488,193.046 382.359,187.416C381.229,181.786 384.882,176.298 390.512,175.168C396.142,174.038 401.63,177.692 402.76,183.321C403.89,188.951 400.236,194.439 394.606,195.569Z"}),v.createElement("path",{d:"M49.46,175.274C55.091,176.4 58.748,181.886 57.621,187.517C56.495,193.147 51.009,196.804 45.378,195.678C39.748,194.551 36.091,189.066 37.217,183.435C38.344,177.804 43.83,174.148 49.46,175.274Z"})),FI=()=>r.jsx("div",{className:"flow",children:r.jsxs("div",{className:"mobile block-center pad-t-8 flow",children:[r.jsx(II,{className:"brui-logo"}),r.jsx("h1",{className:"mar-t-8",children:"React UI Components"}),r.jsx("h2",{className:"mar-t-none large",children:"For Badger Fans"}),r.jsxs("p",{className:"larger",children:["This is my personal collection of React UI components built around the styles provided by"," ",r.jsx("a",{href:"https://abw.github.io/badger-css",children:"Badger CSS"})]}),r.jsx("div",{className:"text-center",children:r.jsx(zI,{className:"width-10rem"})}),r.jsx("p",{children:"This is Open Source Software and you're welcome to use it. But be warned that it is also Opiniated and Selfish Software."}),r.jsx("p",{children:"I wrote it for me to help my get my job done.  It provides a solid foundation of React components that allow me to get a new site up and running quickly."}),r.jsx("p",{children:"I don't have the time or inclination to help other people get their jobs done (unless they're my clients, colleagues, family or close friends).  So please be aware that this is effectively unsupported software and you're on your own.  If you're not comfortable with that then you should almost certainly be using one of the many other fine UI toolkits that are available."}),r.jsx("p",{children:"Also note that this collection is supposed to be a starting point, not a final destination. You can use the components and styles provided, but at some point you will probably want or need to dig in and start adding your own code, or modifying the builtin components."}),r.jsx("p",{children:"Everything is modular and themeable, so that's generally quite easy to achieve.  But it requires a reasonable knowledge of React, CSS and SASS.  The documentation is provided as a reference for me (and my colleagues) to use, and it assumes a fairly high level of proficiency in these areas."}),r.jsx("p",{children:"Or to put it another way, if you're expecting someone to hold your hand explaining how to get this up and running, then you've probably come to the wrong place."})]})}),HI=Object.freeze(Object.defineProperty({__proto__:null,default:FI},Symbol.toStringTag,{value:"Module"})),Q4=({path:e,onClick:t,width:n=512,height:o=512,style:a,className:s="night-and-day--icon",fill:l="currentColor"})=>r.jsx("svg",{"aria-hidden":"true",focusable:"false",className:s,style:a,role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${n} ${o}`,onClick:t,children:r.jsx("path",{d:e,fill:l})}),UI=e=>r.jsx(Q4,{path:"M289,23C160,23 56,127 56,256C56,385 160,489 289,489C352,489 409,464 451,423C456,418 457,411 454,404C451,397 444,394 436,395C426,397 416,397 405,397C304,397 222,316 222,214C222,146 260,86 315,55C322,51 325,44 323,37C322,30 316,25 309,24C302,23 295,23 289,23L289,23Z",...e}),q4=({Icon:e,caption:t,onClick:n,iconClass:o,iconStyle:a,captionStyle:s,className:l="night-and-day--switcher",captionClass:i="night-and-day--caption",style:c={display:"inline-block"}})=>r.jsxs("div",{className:l,onClick:n,style:c,children:[r.jsx(e,{style:a,className:o}),!!t&&r.jsx("div",{className:i,style:s,children:t})]}),VI=e=>{const{setDark:t}=Vs();return r.jsx(q4,{Icon:UI,onClick:t,...e})},WI=e=>r.jsx(Q4,{path:"M362,1.2C367,3 370,8 371,13L391,121L499,141C504,142 509,145 511,150C512,155 512,161 509,166L447,256L509,346C512,351 512,357 511,362C509,367 504,370 499,371L391,391L371,499C370,504 367,509 362,511C357,512 351,512 346,509L256,447L166,509C161,512 156,512 151,511C146,509 142,504 141,499L121,391L13,371C8,370 3,367 1,362C0,356 0,351 3,346L65,256L3,166C0,161 0,156 1,151C3,146 8,142 13,141L121,121L141,13C142,8 146,3 151,1C156,0 161,0 166,3L256,65L346,3C351,0 357,0 362,1ZM160,256C160,203 203,160 256,160C309,160 352,203 352,256C352,309 309,352 256,352C203,352 160,309 160,256ZM384,256C384,186 326,128 256,128C186,128 128,186 128,256C128,326 186,384 256,384C326,384 384,326 384,256Z",...e}),ZI=e=>{const{setLight:t}=Vs();return r.jsx(q4,{Icon:WI,onClick:t,...e})},KI=({sunrise:e={},nightfall:t={}})=>{const{isLight:n,setLight:o,setDark:a}=Vs();return n?r.jsx(ZI,{onClick:a,...e}):r.jsx(VI,{onClick:o,...t})},J4=v.createContext(),Vs=()=>v.useContext(J4),_l="dark",qc="light",YI="(prefers-color-scheme: dark)",Jc=()=>!1,GI=()=>{let e={};return{clear:()=>e={},getItem:t=>e[t],setItem:(t,n)=>e[t]=n,removeItem:t=>delete e[t]}},XI=()=>({matches:Jc,addEventListener:Jc,removeEventListener:Jc}),e5=typeof window<"u",ed=e5&&window.localStorage?window.localStorage:GI(),QI=e5&&window.matchMedia?e=>window.matchMedia(e):XI,uu=QI(YI),qI=()=>uu.matches,JI=e=>e.split(" "),A1=(e,t="")=>`${e} ${t}`,ez=({storageKey:e,defaultVariant:t,children:n})=>{const o=e?ed.getItem(e):null,[a,s=""]=o?JI(o):[qI(),null],[l,i]=v.useState(a===_l),[c,d]=v.useState(s||t),u=C=>{i(C),e&&ed.setItem(e,A1(C?_l:qc,c))},p=C=>{d(C),e&&ed.setItem(e,A1(l?_l:qc,C))},m=C=>u(C.matches);v.useEffect(()=>(uu.addEventListener("change",m),()=>uu.removeEventListener("change",m)),[]);const y={isDark:l,isLight:!l,setDark:()=>u(!0),setLight:()=>u(!1),setIsDark:i,toggleTheme:()=>u(!l),theme:l?_l:qc,variant:c,setVariant:p};return r.jsx(J4.Provider,{value:y,children:n})},t5="0.0.15",tz="2024-02-10",M1="sidebar",nz="no-sidebar",rz=()=>{const{variant:e,setVariant:t}=Vs();return r.jsx("header",{children:r.jsxs("nav",{children:[r.jsxs("div",{children:[r.jsx(ee,{name:"bars",className:"toggle-sidebar action",onClick:()=>t(e===M1?nz:M1)}),r.jsx(Us,{to:"/",className:"home mar-l-2",text:"Badger React UI"}),r.jsxs("span",{className:"small mar-l-2",children:["v",t5]})]}),r.jsxs("div",{className:"flex middle",children:[r.jsx("a",{href:"https://github.com/abw/badger-react-ui",children:r.jsx(ee,{name:"github",className:"mar-r-4"})}),r.jsx(KI,{})]})]})})},oz=()=>r.jsx("footer",{children:r.jsxs("div",{className:"flex space middle",children:[r.jsx("div",{className:"large",children:"Badger React UI"}),r.jsxs("div",{className:"text-center small",children:["by ",r.jsx("a",{href:"https://github.com/abw",children:"Andy Wardley"})]}),r.jsxs("div",{className:"text-right",children:["v",t5,r.jsx("br",{}),tz]})]})}),az=({toc:e,contentRef:t})=>r.jsx("ul",{className:"toc",children:Object.entries(e).map(([n,o])=>r.jsx("li",{onClick:()=>{var a,s;(s=t.current)==null||s.scrollTo({top:((a=o.ref.current)==null?void 0:a.offsetTop)-20})},className:o.heading?"heading":"",children:o.heading?r.jsx("h4",{children:o.heading}):o.text.match(/^code:/)?r.jsx("code",{children:o.text.replace(/^code:/,"")}):o.text},n))}),sz=Is.Consumer(az),lz=({title:e,path:t,items:n,tocs:o})=>{const a=Hs(),s=t&&a.pathname.slice(0,t.length)===t;return r.jsxs("details",{className:"menu",open:s,children:[r.jsx("summary",{children:e}),r.jsx("ul",{children:n.map(l=>{const i=a.pathname===l.to;return r.jsxs("li",{children:[r.jsx(Us,{className:"item",...l}),!!l.tocName&&i&&o[l.tocName]&&r.jsx(sz,{toc:o[l.tocName]})]},l.to)})})]})},P1=Is.Consumer(lz),iz={title:"Getting Started",path:"/getting-started",items:[{to:"/getting-started/installation",text:"Installation"}]},cz={title:"Components",path:"/components",items:[{to:"/components/alert",text:"Alert",tocName:"alert"},{to:"/components/button",text:"Button",tocName:"button"},{to:"/components/buttons",text:"Buttons",tocName:"buttons"},{to:"/components/checkbox",text:"Checkbox",tocName:"checkbox"},{to:"/components/confirm",text:"Confirm",tocName:"confirm"},{to:"/components/datatable",text:"Datatable",tocName:"datatable"},{to:"/components/details",text:"Details",tocName:"details"},{to:"/components/dropdown",text:"Dropdown",tocName:"dropdown"},{to:"/components/dropdown-menu",text:"Dropdown Menu",tocName:"dropdown-menu"},{to:"/components/icon",text:"Icon",tocName:"icon"},{to:"/components/modal",text:"Modal",tocName:"modal"},{to:"/components/overlay",text:"Overlay",tocName:"overlay"},{to:"/components/pager",text:"Pager",tocName:"pager"},{to:"/components/radio",text:"Radio",tocName:"radio"},{to:"/components/search",text:"Search",tocName:"search"},{to:"/components/select",text:"Select",tocName:"select"},{to:"/components/sortable",text:"Sortable",tocName:"sortable"},{to:"/components/spinner",text:"Spinner",tocName:"spinner"}]},dz=()=>r.jsxs(r.Fragment,{children:[r.jsx(P1,{...iz}),r.jsx(P1,{...cz})]});function uz(){const{pathname:e}=aa();return v.useEffect(()=>pz(document.getElementById("content")),[e]),null}function pz(e,{top:t=0,left:n=0,behavior:o="smooth"}={}){e==null||e.scrollTo({top:t,left:n,behavior:o})}const fz=({contentRef:e})=>{const{theme:t,variant:n}=Vs();return r.jsxs("div",{id:"site",className:n,"data-theme":t,children:[r.jsx(rz,{}),r.jsxs("div",{id:"app",children:[r.jsx(uz,{}),r.jsx("aside",{children:r.jsx(dz,{})}),r.jsx("main",{id:"content",ref:e,children:r.jsx(XD,{})})]}),r.jsx(oz,{})]})},hz=Is.Consumer(fz),mz=/\/_layout$/,xz=/\/_examples\//,gz=vz(Object.assign({"../pages/components/alert/_examples/Alert/index.jsx":lT,"../pages/components/alert/_examples/Error/index.jsx":fT,"../pages/components/alert/_examples/Info/index.jsx":xT,"../pages/components/alert/_examples/Success/index.jsx":yT,"../pages/components/alert/_examples/Warning/index.jsx":CT,"../pages/components/alert/_examples/border/index.jsx":_T,"../pages/components/alert/_examples/className/index.jsx":ET,"../pages/components/alert/_examples/color/index.jsx":LT,"../pages/components/alert/_examples/dismissable/index.jsx":AT,"../pages/components/alert/_examples/headIcon/index.jsx":$T,"../pages/components/alert/_examples/headline/index.jsx":zT,"../pages/components/alert/_examples/icon/index.jsx":UT,"../pages/components/alert/_examples/onDismiss/index.jsx":ZT,"../pages/components/alert/_examples/radius/index.jsx":GT,"../pages/components/alert/_examples/revealable/index.jsx":qT,"../pages/components/alert/_examples/revealed/index.jsx":tE,"../pages/components/alert/_examples/shadow/index.jsx":oE,"../pages/components/alert/_examples/size/index.jsx":lE,"../pages/components/alert/_examples/stripe/index.jsx":dE,"../pages/components/alert/_examples/text/index.jsx":fE,"../pages/components/alert/_examples/title/index.jsx":xE,"../pages/components/alert/_examples/type/index.jsx":yE,"../pages/components/alert/index.jsx":CE,"../pages/components/button/_examples/Button/index.jsx":_E,"../pages/components/button/_examples/Content/index.jsx":EE,"../pages/components/button/_examples/bare/index.jsx":LE,"../pages/components/button/_examples/border/index.jsx":AE,"../pages/components/button/_examples/bright/index.jsx":$E,"../pages/components/button/_examples/className/index.jsx":zE,"../pages/components/button/_examples/color/index.jsx":UE,"../pages/components/button/_examples/dark/index.jsx":ZE,"../pages/components/button/_examples/disabled/index.jsx":GE,"../pages/components/button/_examples/icon/index.jsx":qE,"../pages/components/button/_examples/iconLeft/index.jsx":tN,"../pages/components/button/_examples/iconRight/index.jsx":oN,"../pages/components/button/_examples/label/index.jsx":lN,"../pages/components/button/_examples/onClick/index.jsx":dN,"../pages/components/button/_examples/outline/index.jsx":fN,"../pages/components/button/_examples/radius/index.jsx":xN,"../pages/components/button/_examples/shaded/index.jsx":yN,"../pages/components/button/_examples/shadow/index.jsx":CN,"../pages/components/button/_examples/size/index.jsx":_N,"../pages/components/button/_examples/text/index.jsx":EN,"../pages/components/button/_examples/tooltip/index.jsx":LN,"../pages/components/button/_examples/type/index.jsx":AN,"../pages/components/button/index.jsx":PN,"../pages/components/buttons/_examples/Button/index.jsx":zN,"../pages/components/buttons/_examples/Buttons/index.jsx":UN,"../pages/components/buttons/_examples/buttonClass/index.jsx":ZN,"../pages/components/buttons/_examples/buttonsProp/index.jsx":GN,"../pages/components/buttons/_examples/className/index.jsx":qN,"../pages/components/buttons/_examples/outline/index.jsx":tR,"../pages/components/buttons/index.jsx":rR,"../pages/components/checkbox/_examples/CheckboxState/index.jsx":sR,"../pages/components/checkbox/_examples/Overview/index.jsx":cR,"../pages/components/checkbox/_examples/border/index.jsx":pR,"../pages/components/checkbox/_examples/checked/index.jsx":mR,"../pages/components/checkbox/_examples/checkedText/index.jsx":vR,"../pages/components/checkbox/_examples/className/index.jsx":bR,"../pages/components/checkbox/_examples/disabled/index.jsx":wR,"../pages/components/checkbox/_examples/onChange/index.jsx":TR,"../pages/components/checkbox/_examples/text/index.jsx":RR,"../pages/components/checkbox/index.jsx":DR,"../pages/components/confirm/_examples/Overview/index.jsx":MR,"../pages/components/confirm/_examples/cancel/index.jsx":BR,"../pages/components/confirm/_examples/cancelProps/index.jsx":FR,"../pages/components/confirm/_examples/className/index.jsx":VR,"../pages/components/confirm/_examples/color/index.jsx":KR,"../pages/components/confirm/_examples/confirm/index.jsx":XR,"../pages/components/confirm/_examples/confirmProps/index.jsx":JR,"../pages/components/confirm/_examples/iconRight/index.jsx":nL,"../pages/components/confirm/_examples/onClick/index.jsx":aL,"../pages/components/confirm/_examples/text/index.jsx":iL,"../pages/components/confirm/index.jsx":dL,"../pages/components/datatable/_examples/Datatable/index.jsx":fL,"../pages/components/datatable/_examples/color/index.jsx":xL,"../pages/components/datatable/_examples/columns/className/index.jsx":jL,"../pages/components/datatable/_examples/columns/display/index.jsx":SL,"../pages/components/datatable/_examples/columns/index.jsx":AL,"../pages/components/datatable/_examples/columns/label/index.jsx":$L,"../pages/components/datatable/_examples/columns/type/index.jsx":zL,"../pages/components/datatable/_examples/pager/index.jsx":jO,"../pages/components/datatable/_examples/rows/index.jsx":CO,"../pages/components/datatable/index.jsx":wO,"../pages/components/details/_examples/Details/index.jsx":TO,"../pages/components/details/_examples/border/index.jsx":RO,"../pages/components/details/_examples/color/index.jsx":OO,"../pages/components/details/_examples/content/index.jsx":PO,"../pages/components/details/_examples/lined/index.jsx":IO,"../pages/components/details/_examples/open/index.jsx":HO,"../pages/components/details/_examples/radius/index.jsx":WO,"../pages/components/details/_examples/shaded/index.jsx":YO,"../pages/components/details/_examples/shadow/index.jsx":QO,"../pages/components/details/_examples/summary/index.jsx":eA,"../pages/components/details/index.jsx":nA,"../pages/components/dropdown-menu/_examples/DropdownMenu/index.jsx":aA,"../pages/components/dropdown-menu/_examples/onSelect/index.jsx":iA,"../pages/components/dropdown-menu/_examples/options/index.jsx":yA,"../pages/components/dropdown-menu/index.jsx":bA,"../pages/components/dropdown/_examples/Dropdown/index.jsx":wA,"../pages/components/dropdown/_examples/content/index.jsx":TA,"../pages/components/dropdown/_examples/iconLeft/index.jsx":RA,"../pages/components/dropdown/_examples/iconLeftRotate/index.jsx":OA,"../pages/components/dropdown/_examples/iconRight/index.jsx":PA,"../pages/components/dropdown/_examples/iconRightRotate/index.jsx":IA,"../pages/components/dropdown/_examples/openOnHover/index.jsx":HA,"../pages/components/dropdown/_examples/right/index.jsx":WA,"../pages/components/dropdown/_examples/text/index.jsx":YA,"../pages/components/dropdown/_examples/wide/index.jsx":QA,"../pages/components/dropdown/index.jsx":JA,"../pages/components/icon/_examples/Icon/index.jsx":lM,"../pages/components/icon/_examples/IconLibrary/index.jsx":iM,"../pages/components/icon/_examples/className/index.jsx":uM,"../pages/components/icon/_examples/color/index.jsx":hM,"../pages/components/icon/_examples/name/index.jsx":gM,"../pages/components/icon/_examples/path/index.jsx":jM,"../pages/components/icon/_examples/size/index.jsx":SM,"../pages/components/icon/index.jsx":_M,"../pages/components/modal/_examples/Modal/index.jsx":EM,"../pages/components/modal/_examples/ModalState/index.jsx":LM,"../pages/components/modal/_examples/className/index.jsx":AM,"../pages/components/modal/_examples/close/index.jsx":$M,"../pages/components/modal/_examples/closeIcon/index.jsx":zM,"../pages/components/modal/_examples/footer/index.jsx":UM,"../pages/components/modal/_examples/header/index.jsx":ZM,"../pages/components/modal/_examples/text/index.jsx":GM,"../pages/components/modal/_examples/title/index.jsx":qM,"../pages/components/modal/index.jsx":eP,"../pages/components/overlay/_examples/Overlay/index.jsx":rP,"../pages/components/overlay/_examples/OverlayState/index.jsx":sP,"../pages/components/overlay/_examples/className/index.jsx":dP,"../pages/components/overlay/_examples/custom/index.jsx":fP,"../pages/components/overlay/_examples/fixed/index.jsx":xP,"../pages/components/overlay/_examples/theme/index.jsx":bP,"../pages/components/overlay/index.jsx":SP,"../pages/components/pager/_examples/Context/index.jsx":EP,"../pages/components/pager/_examples/Pager/index.jsx":LP,"../pages/components/pager/_examples/className/index.jsx":AP,"../pages/components/pager/_examples/color/index.jsx":$P,"../pages/components/pager/_examples/icons/index.jsx":zP,"../pages/components/pager/_examples/nextIcon/index.jsx":VP,"../pages/components/pager/_examples/showFirstLast/index.jsx":KP,"../pages/components/pager/_examples/size/index.jsx":XP,"../pages/components/pager/index.jsx":qP,"../pages/components/radio/_examples/Overview/index.jsx":t$,"../pages/components/radio/_examples/border/index.jsx":o$,"../pages/components/radio/_examples/className/index.jsx":l$,"../pages/components/radio/_examples/disabled/index.jsx":d$,"../pages/components/radio/_examples/inline/index.jsx":f$,"../pages/components/radio/_examples/name/index.jsx":x$,"../pages/components/radio/_examples/onChange/index.jsx":y$,"../pages/components/radio/_examples/options/index.jsx":C$,"../pages/components/radio/_examples/value/index.jsx":_$,"../pages/components/radio/index.jsx":T$,"../pages/components/search/_examples/Search/index.jsx":L$,"../pages/components/search/_examples/displayResult/index.jsx":M$,"../pages/components/search/_examples/displayValue/index.jsx":I$,"../pages/components/search/_examples/onSearch/index.jsx":U$,"../pages/components/search/index.jsx":W$,"../pages/components/select/_examples/Select/index.jsx":G$,"../pages/components/select/_examples/displayOption/index.jsx":J$,"../pages/components/select/_examples/displayValue/index.jsx":rB,"../pages/components/select/_examples/options/index.jsx":lB,"../pages/components/select/_examples/search/index.jsx":uB,"../pages/components/select/_examples/validOption/index.jsx":mB,"../pages/components/select/_examples/value/index.jsx":CB,"../pages/components/select/index.jsx":wB,"../pages/components/sortable/_examples/Horizontal/index.jsx":TB,"../pages/components/sortable/_examples/Sortable/index.jsx":RB,"../pages/components/sortable/_examples/Vertical/index.jsx":OB,"../pages/components/sortable/index.jsx":MB,"../pages/components/spinner/_examples/Spinner/index.jsx":BB,"../pages/components/spinner/_examples/bgColor/index.jsx":FB,"../pages/components/spinner/_examples/bgFill/index.jsx":VB,"../pages/components/spinner/_examples/bgFillStop/index.jsx":KB,"../pages/components/spinner/_examples/bgIcon/index.jsx":XB,"../pages/components/spinner/_examples/bgStroke/index.jsx":JB,"../pages/components/spinner/_examples/bgStrokeStop/index.jsx":nI,"../pages/components/spinner/_examples/color/index.jsx":aI,"../pages/components/spinner/_examples/fill/index.jsx":iI,"../pages/components/spinner/_examples/fillStop/index.jsx":uI,"../pages/components/spinner/_examples/icon/index.jsx":hI,"../pages/components/spinner/_examples/reverse/index.jsx":gI,"../pages/components/spinner/_examples/shrink/index.jsx":jI,"../pages/components/spinner/_examples/size/index.jsx":SI,"../pages/components/spinner/_examples/stroke/index.jsx":kI,"../pages/components/spinner/_examples/strokeStop/index.jsx":NI,"../pages/components/spinner/index.jsx":LI,"../pages/getting-started/installation.jsx":BI,"../pages/index.jsx":HI}));function vz(e){const n=Object.entries(e).map(yz).filter(a=>!a.path.match(xz)).reduce((a,s)=>(a[s.path]=s,a),{}),o=Object.keys(n).filter(a=>a.match(mz)).sort((a,s)=>s.length-a.length);for(let a of o){const s=n[a];delete n[a];const l=a.replace(/_layout$/,""),i=l.length;s.path=l,s.children=[];const c=n[l];c&&(delete c.path,c.index=!0,s.children.push(c),delete n[l]);const d=Object.keys(n).filter(u=>u.slice(0,i)===l);for(let u of d){const p=n[u];delete n[u],u=u.slice(i),p.path=u.length?u:"/",s.children.push(p)}n[l]=s}return Object.values(n)}function yz([e,t]){const n=e.replace(/^[./]*pages/,"").replace(/\.jsx$/,"").replace(/index$/,"").replace(/\[(\w+)\]/,":$1"),o=t.default;return{path:n,Component:o}}const jz=rO([{path:"/",element:r.jsx(hz,{}),children:gz}],{basename:"/badger-react-ui"});td.createRoot(document.getElementById("root")).render(r.jsx(te.StrictMode,{children:r.jsx(ez,{storageKey:"theme",children:r.jsx(Is.Provider,{children:r.jsx(uO,{router:jz})})})}));
