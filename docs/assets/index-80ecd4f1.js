var M4=Object.defineProperty;var P4=(e,t,n)=>t in e?M4(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var me=(e,t,n)=>(P4(e,typeof t!="symbol"?t+"":t,n),n);function O1(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in e)){const s=Object.getOwnPropertyDescriptor(r,a);s&&Object.defineProperty(e,a,s.get?s:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}})();var Fl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Hn(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var A1={exports:{}},wi={},M1={exports:{}},ue={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ys=Symbol.for("react.element"),$4=Symbol.for("react.portal"),B4=Symbol.for("react.fragment"),I4=Symbol.for("react.strict_mode"),z4=Symbol.for("react.profiler"),F4=Symbol.for("react.provider"),H4=Symbol.for("react.context"),U4=Symbol.for("react.forward_ref"),V4=Symbol.for("react.suspense"),W4=Symbol.for("react.memo"),Z4=Symbol.for("react.lazy"),of=Symbol.iterator;function K4(e){return e===null||typeof e!="object"?null:(e=of&&e[of]||e["@@iterator"],typeof e=="function"?e:null)}var P1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$1=Object.assign,B1={};function Zo(e,t,n){this.props=e,this.context=t,this.refs=B1,this.updater=n||P1}Zo.prototype.isReactComponent={};Zo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Zo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function I1(){}I1.prototype=Zo.prototype;function uu(e,t,n){this.props=e,this.context=t,this.refs=B1,this.updater=n||P1}var pu=uu.prototype=new I1;pu.constructor=uu;$1(pu,Zo.prototype);pu.isPureReactComponent=!0;var af=Array.isArray,z1=Object.prototype.hasOwnProperty,fu={current:null},F1={key:!0,ref:!0,__self:!0,__source:!0};function H1(e,t,n){var r,a={},s=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(s=""+t.key),t)z1.call(t,r)&&!F1.hasOwnProperty(r)&&(a[r]=t[r]);var i=arguments.length-2;if(i===1)a.children=n;else if(1<i){for(var c=Array(i),d=0;d<i;d++)c[d]=arguments[d+2];a.children=c}if(e&&e.defaultProps)for(r in i=e.defaultProps,i)a[r]===void 0&&(a[r]=i[r]);return{$$typeof:ys,type:e,key:s,ref:l,props:a,_owner:fu.current}}function Y4(e,t){return{$$typeof:ys,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function hu(e){return typeof e=="object"&&e!==null&&e.$$typeof===ys}function G4(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var sf=/\/+/g;function dc(e,t){return typeof e=="object"&&e!==null&&e.key!=null?G4(""+e.key):t.toString(36)}function _l(e,t,n,r,a){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case ys:case $4:l=!0}}if(l)return l=e,a=a(l),e=r===""?"."+dc(l,0):r,af(a)?(n="",e!=null&&(n=e.replace(sf,"$&/")+"/"),_l(a,t,n,"",function(d){return d})):a!=null&&(hu(a)&&(a=Y4(a,n+(!a.key||l&&l.key===a.key?"":(""+a.key).replace(sf,"$&/")+"/")+e)),t.push(a)),1;if(l=0,r=r===""?".":r+":",af(e))for(var i=0;i<e.length;i++){s=e[i];var c=r+dc(s,i);l+=_l(s,t,n,c,a)}else if(c=K4(e),typeof c=="function")for(e=c.call(e),i=0;!(s=e.next()).done;)s=s.value,c=r+dc(s,i++),l+=_l(s,t,n,c,a);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function qs(e,t,n){if(e==null)return e;var r=[],a=0;return _l(e,r,"","",function(s){return t.call(n,s,a++)}),r}function X4(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var xt={current:null},kl={transition:null},Q4={ReactCurrentDispatcher:xt,ReactCurrentBatchConfig:kl,ReactCurrentOwner:fu};ue.Children={map:qs,forEach:function(e,t,n){qs(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return qs(e,function(){t++}),t},toArray:function(e){return qs(e,function(t){return t})||[]},only:function(e){if(!hu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ue.Component=Zo;ue.Fragment=B4;ue.Profiler=z4;ue.PureComponent=uu;ue.StrictMode=I4;ue.Suspense=V4;ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q4;ue.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=$1({},e.props),a=e.key,s=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,l=fu.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(c in t)z1.call(t,c)&&!F1.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&i!==void 0?i[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){i=Array(c);for(var d=0;d<c;d++)i[d]=arguments[d+2];r.children=i}return{$$typeof:ys,type:e.type,key:a,ref:s,props:r,_owner:l}};ue.createContext=function(e){return e={$$typeof:H4,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:F4,_context:e},e.Consumer=e};ue.createElement=H1;ue.createFactory=function(e){var t=H1.bind(null,e);return t.type=e,t};ue.createRef=function(){return{current:null}};ue.forwardRef=function(e){return{$$typeof:U4,render:e}};ue.isValidElement=hu;ue.lazy=function(e){return{$$typeof:Z4,_payload:{_status:-1,_result:e},_init:X4}};ue.memo=function(e,t){return{$$typeof:W4,type:e,compare:t===void 0?null:t}};ue.startTransition=function(e){var t=kl.transition;kl.transition={};try{e()}finally{kl.transition=t}};ue.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ue.useCallback=function(e,t){return xt.current.useCallback(e,t)};ue.useContext=function(e){return xt.current.useContext(e)};ue.useDebugValue=function(){};ue.useDeferredValue=function(e){return xt.current.useDeferredValue(e)};ue.useEffect=function(e,t){return xt.current.useEffect(e,t)};ue.useId=function(){return xt.current.useId()};ue.useImperativeHandle=function(e,t,n){return xt.current.useImperativeHandle(e,t,n)};ue.useInsertionEffect=function(e,t){return xt.current.useInsertionEffect(e,t)};ue.useLayoutEffect=function(e,t){return xt.current.useLayoutEffect(e,t)};ue.useMemo=function(e,t){return xt.current.useMemo(e,t)};ue.useReducer=function(e,t,n){return xt.current.useReducer(e,t,n)};ue.useRef=function(e){return xt.current.useRef(e)};ue.useState=function(e){return xt.current.useState(e)};ue.useSyncExternalStore=function(e,t,n){return xt.current.useSyncExternalStore(e,t,n)};ue.useTransition=function(){return xt.current.useTransition()};ue.version="18.2.0";M1.exports=ue;var v=M1.exports;const ee=Hn(v),q4=O1({__proto__:null,default:ee},[v]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J4=v,e5=Symbol.for("react.element"),t5=Symbol.for("react.fragment"),n5=Object.prototype.hasOwnProperty,r5=J4.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o5={key:!0,ref:!0,__self:!0,__source:!0};function U1(e,t,n){var r,a={},s=null,l=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)n5.call(t,r)&&!o5.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)a[r]===void 0&&(a[r]=t[r]);return{$$typeof:e5,type:e,key:s,ref:l,props:a,_owner:r5.current}}wi.Fragment=t5;wi.jsx=U1;wi.jsxs=U1;A1.exports=wi;var o=A1.exports,ed={},V1={exports:{}},Mt={},W1={exports:{}},Z1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(O,B){var I=O.length;O.push(B);e:for(;0<I;){var H=I-1>>>1,W=O[H];if(0<a(W,B))O[H]=B,O[I]=W,I=H;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var B=O[0],I=O.pop();if(I!==B){O[0]=I;e:for(var H=0,W=O.length,be=W>>>1;H<be;){var se=2*(H+1)-1,je=O[se],ae=se+1,Ne=O[ae];if(0>a(je,I))ae<W&&0>a(Ne,je)?(O[H]=Ne,O[ae]=I,H=ae):(O[H]=je,O[se]=I,H=se);else if(ae<W&&0>a(Ne,I))O[H]=Ne,O[ae]=I,H=ae;else break e}}return B}function a(O,B){var I=O.sortIndex-B.sortIndex;return I!==0?I:O.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var l=Date,i=l.now();e.unstable_now=function(){return l.now()-i}}var c=[],d=[],u=1,p=null,m=3,y=!1,b=!1,C=!1,_=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(O){for(var B=n(d);B!==null;){if(B.callback===null)r(d);else if(B.startTime<=O)r(d),B.sortIndex=B.expirationTime,t(c,B);else break;B=n(d)}}function j(O){if(C=!1,h(O),!b)if(n(c)!==null)b=!0,oe(S);else{var B=n(d);B!==null&&V(j,B.startTime-O)}}function S(O,B){b=!1,C&&(C=!1,x(T),T=-1),y=!0;var I=m;try{for(h(B),p=n(c);p!==null&&(!(p.expirationTime>B)||O&&!P());){var H=p.callback;if(typeof H=="function"){p.callback=null,m=p.priorityLevel;var W=H(p.expirationTime<=B);B=e.unstable_now(),typeof W=="function"?p.callback=W:p===n(c)&&r(c),h(B)}else r(c);p=n(c)}if(p!==null)var be=!0;else{var se=n(d);se!==null&&V(j,se.startTime-B),be=!1}return be}finally{p=null,m=I,y=!1}}var g=!1,w=null,T=-1,E=5,D=-1;function P(){return!(e.unstable_now()-D<E)}function Y(){if(w!==null){var O=e.unstable_now();D=O;var B=!0;try{B=w(!0,O)}finally{B?Q():(g=!1,w=null)}}else g=!1}var Q;if(typeof f=="function")Q=function(){f(Y)};else if(typeof MessageChannel<"u"){var G=new MessageChannel,ne=G.port2;G.port1.onmessage=Y,Q=function(){ne.postMessage(null)}}else Q=function(){_(Y,0)};function oe(O){w=O,g||(g=!0,Q())}function V(O,B){T=_(function(){O(e.unstable_now())},B)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(O){O.callback=null},e.unstable_continueExecution=function(){b||y||(b=!0,oe(S))},e.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<O?Math.floor(1e3/O):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(O){switch(m){case 1:case 2:case 3:var B=3;break;default:B=m}var I=m;m=B;try{return O()}finally{m=I}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(O,B){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var I=m;m=O;try{return B()}finally{m=I}},e.unstable_scheduleCallback=function(O,B,I){var H=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?H+I:H):I=H,O){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=I+W,O={id:u++,callback:B,priorityLevel:O,startTime:I,expirationTime:W,sortIndex:-1},I>H?(O.sortIndex=I,t(d,O),n(c)===null&&O===n(d)&&(C?(x(T),T=-1):C=!0,V(j,I-H))):(O.sortIndex=W,t(c,O),b||y||(b=!0,oe(S))),O},e.unstable_shouldYield=P,e.unstable_wrapCallback=function(O){var B=m;return function(){var I=m;m=B;try{return O.apply(this,arguments)}finally{m=I}}}})(Z1);W1.exports=Z1;var a5=W1.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K1=v,At=a5;function M(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Y1=new Set,Ga={};function eo(e,t){Bo(e,t),Bo(e+"Capture",t)}function Bo(e,t){for(Ga[e]=t,e=0;e<t.length;e++)Y1.add(t[e])}var Pn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),td=Object.prototype.hasOwnProperty,s5=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,lf={},cf={};function l5(e){return td.call(cf,e)?!0:td.call(lf,e)?!1:s5.test(e)?cf[e]=!0:(lf[e]=!0,!1)}function i5(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function c5(e,t,n,r){if(t===null||typeof t>"u"||i5(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function vt(e,t,n,r,a,s,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=l}var ot={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ot[e]=new vt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ot[t]=new vt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ot[e]=new vt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ot[e]=new vt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ot[e]=new vt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ot[e]=new vt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ot[e]=new vt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ot[e]=new vt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ot[e]=new vt(e,5,!1,e.toLowerCase(),null,!1,!1)});var mu=/[\-:]([a-z])/g;function gu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(mu,gu);ot[t]=new vt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(mu,gu);ot[t]=new vt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(mu,gu);ot[t]=new vt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ot[e]=new vt(e,1,!1,e.toLowerCase(),null,!1,!1)});ot.xlinkHref=new vt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ot[e]=new vt(e,1,!1,e.toLowerCase(),null,!0,!0)});function xu(e,t,n,r){var a=ot.hasOwnProperty(t)?ot[t]:null;(a!==null?a.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(c5(t,n,a,r)&&(n=null),r||a===null?l5(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,r=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Un=K1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Js=Symbol.for("react.element"),go=Symbol.for("react.portal"),xo=Symbol.for("react.fragment"),vu=Symbol.for("react.strict_mode"),nd=Symbol.for("react.profiler"),G1=Symbol.for("react.provider"),X1=Symbol.for("react.context"),yu=Symbol.for("react.forward_ref"),rd=Symbol.for("react.suspense"),od=Symbol.for("react.suspense_list"),ju=Symbol.for("react.memo"),er=Symbol.for("react.lazy"),Q1=Symbol.for("react.offscreen"),df=Symbol.iterator;function la(e){return e===null||typeof e!="object"?null:(e=df&&e[df]||e["@@iterator"],typeof e=="function"?e:null)}var Be=Object.assign,uc;function ba(e){if(uc===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);uc=t&&t[1]||""}return`
`+uc+e}var pc=!1;function fc(e,t){if(!e||pc)return"";pc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var a=d.stack.split(`
`),s=r.stack.split(`
`),l=a.length-1,i=s.length-1;1<=l&&0<=i&&a[l]!==s[i];)i--;for(;1<=l&&0<=i;l--,i--)if(a[l]!==s[i]){if(l!==1||i!==1)do if(l--,i--,0>i||a[l]!==s[i]){var c=`
`+a[l].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=l&&0<=i);break}}}finally{pc=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ba(e):""}function d5(e){switch(e.tag){case 5:return ba(e.type);case 16:return ba("Lazy");case 13:return ba("Suspense");case 19:return ba("SuspenseList");case 0:case 2:case 15:return e=fc(e.type,!1),e;case 11:return e=fc(e.type.render,!1),e;case 1:return e=fc(e.type,!0),e;default:return""}}function ad(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case xo:return"Fragment";case go:return"Portal";case nd:return"Profiler";case vu:return"StrictMode";case rd:return"Suspense";case od:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case X1:return(e.displayName||"Context")+".Consumer";case G1:return(e._context.displayName||"Context")+".Provider";case yu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ju:return t=e.displayName||null,t!==null?t:ad(e.type)||"Memo";case er:t=e._payload,e=e._init;try{return ad(e(t))}catch{}}return null}function u5(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ad(t);case 8:return t===vu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function mr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function q1(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function p5(e){var t=q1(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(l){r=""+l,s.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function el(e){e._valueTracker||(e._valueTracker=p5(e))}function J1(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=q1(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Hl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function sd(e,t){var n=t.checked;return Be({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function uf(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=mr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function e2(e,t){t=t.checked,t!=null&&xu(e,"checked",t,!1)}function ld(e,t){e2(e,t);var n=mr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?id(e,t.type,n):t.hasOwnProperty("defaultValue")&&id(e,t.type,mr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function pf(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function id(e,t,n){(t!=="number"||Hl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Sa=Array.isArray;function Ro(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+mr(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function cd(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(M(91));return Be({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ff(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(M(92));if(Sa(n)){if(1<n.length)throw Error(M(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:mr(n)}}function t2(e,t){var n=mr(t.value),r=mr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function hf(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function n2(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function dd(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?n2(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var tl,r2=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(tl=tl||document.createElement("div"),tl.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=tl.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Xa(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Aa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},f5=["Webkit","ms","Moz","O"];Object.keys(Aa).forEach(function(e){f5.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Aa[t]=Aa[e]})});function o2(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Aa.hasOwnProperty(e)&&Aa[e]?(""+t).trim():t+"px"}function a2(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,a=o2(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}var h5=Be({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ud(e,t){if(t){if(h5[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(M(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(M(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(M(61))}if(t.style!=null&&typeof t.style!="object")throw Error(M(62))}}function pd(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fd=null;function Cu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var hd=null,Do=null,Oo=null;function mf(e){if(e=bs(e)){if(typeof hd!="function")throw Error(M(280));var t=e.stateNode;t&&(t=Ni(t),hd(e.stateNode,e.type,t))}}function s2(e){Do?Oo?Oo.push(e):Oo=[e]:Do=e}function l2(){if(Do){var e=Do,t=Oo;if(Oo=Do=null,mf(e),t)for(e=0;e<t.length;e++)mf(t[e])}}function i2(e,t){return e(t)}function c2(){}var hc=!1;function d2(e,t,n){if(hc)return e(t,n);hc=!0;try{return i2(e,t,n)}finally{hc=!1,(Do!==null||Oo!==null)&&(c2(),l2())}}function Qa(e,t){var n=e.stateNode;if(n===null)return null;var r=Ni(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(M(231,t,typeof n));return n}var md=!1;if(Pn)try{var ia={};Object.defineProperty(ia,"passive",{get:function(){md=!0}}),window.addEventListener("test",ia,ia),window.removeEventListener("test",ia,ia)}catch{md=!1}function m5(e,t,n,r,a,s,l,i,c){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(u){this.onError(u)}}var Ma=!1,Ul=null,Vl=!1,gd=null,g5={onError:function(e){Ma=!0,Ul=e}};function x5(e,t,n,r,a,s,l,i,c){Ma=!1,Ul=null,m5.apply(g5,arguments)}function v5(e,t,n,r,a,s,l,i,c){if(x5.apply(this,arguments),Ma){if(Ma){var d=Ul;Ma=!1,Ul=null}else throw Error(M(198));Vl||(Vl=!0,gd=d)}}function to(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function u2(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function gf(e){if(to(e)!==e)throw Error(M(188))}function y5(e){var t=e.alternate;if(!t){if(t=to(e),t===null)throw Error(M(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return gf(a),e;if(s===r)return gf(a),t;s=s.sibling}throw Error(M(188))}if(n.return!==r.return)n=a,r=s;else{for(var l=!1,i=a.child;i;){if(i===n){l=!0,n=a,r=s;break}if(i===r){l=!0,r=a,n=s;break}i=i.sibling}if(!l){for(i=s.child;i;){if(i===n){l=!0,n=s,r=a;break}if(i===r){l=!0,r=s,n=a;break}i=i.sibling}if(!l)throw Error(M(189))}}if(n.alternate!==r)throw Error(M(190))}if(n.tag!==3)throw Error(M(188));return n.stateNode.current===n?e:t}function p2(e){return e=y5(e),e!==null?f2(e):null}function f2(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=f2(e);if(t!==null)return t;e=e.sibling}return null}var h2=At.unstable_scheduleCallback,xf=At.unstable_cancelCallback,j5=At.unstable_shouldYield,C5=At.unstable_requestPaint,Ue=At.unstable_now,b5=At.unstable_getCurrentPriorityLevel,bu=At.unstable_ImmediatePriority,m2=At.unstable_UserBlockingPriority,Wl=At.unstable_NormalPriority,S5=At.unstable_LowPriority,g2=At.unstable_IdlePriority,_i=null,yn=null;function w5(e){if(yn&&typeof yn.onCommitFiberRoot=="function")try{yn.onCommitFiberRoot(_i,e,void 0,(e.current.flags&128)===128)}catch{}}var an=Math.clz32?Math.clz32:T5,_5=Math.log,k5=Math.LN2;function T5(e){return e>>>=0,e===0?32:31-(_5(e)/k5|0)|0}var nl=64,rl=4194304;function wa(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Zl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,a=e.suspendedLanes,s=e.pingedLanes,l=n&268435455;if(l!==0){var i=l&~a;i!==0?r=wa(i):(s&=l,s!==0&&(r=wa(s)))}else l=n&~a,l!==0?r=wa(l):s!==0&&(r=wa(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&a)&&(a=r&-r,s=t&-t,a>=s||a===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-an(t),a=1<<n,r|=e[n],t&=~a;return r}function E5(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function N5(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,s=e.pendingLanes;0<s;){var l=31-an(s),i=1<<l,c=a[l];c===-1?(!(i&n)||i&r)&&(a[l]=E5(i,t)):c<=t&&(e.expiredLanes|=i),s&=~i}}function xd(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function x2(){var e=nl;return nl<<=1,!(nl&4194240)&&(nl=64),e}function mc(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function js(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-an(t),e[t]=n}function L5(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-an(n),s=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~s}}function Su(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-an(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var Ce=0;function v2(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var y2,wu,j2,C2,b2,vd=!1,ol=[],lr=null,ir=null,cr=null,qa=new Map,Ja=new Map,rr=[],R5="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function vf(e,t){switch(e){case"focusin":case"focusout":lr=null;break;case"dragenter":case"dragleave":ir=null;break;case"mouseover":case"mouseout":cr=null;break;case"pointerover":case"pointerout":qa.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ja.delete(t.pointerId)}}function ca(e,t,n,r,a,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[a]},t!==null&&(t=bs(t),t!==null&&wu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function D5(e,t,n,r,a){switch(t){case"focusin":return lr=ca(lr,e,t,n,r,a),!0;case"dragenter":return ir=ca(ir,e,t,n,r,a),!0;case"mouseover":return cr=ca(cr,e,t,n,r,a),!0;case"pointerover":var s=a.pointerId;return qa.set(s,ca(qa.get(s)||null,e,t,n,r,a)),!0;case"gotpointercapture":return s=a.pointerId,Ja.set(s,ca(Ja.get(s)||null,e,t,n,r,a)),!0}return!1}function S2(e){var t=Ir(e.target);if(t!==null){var n=to(t);if(n!==null){if(t=n.tag,t===13){if(t=u2(n),t!==null){e.blockedOn=t,b2(e.priority,function(){j2(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Tl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=yd(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);fd=r,n.target.dispatchEvent(r),fd=null}else return t=bs(n),t!==null&&wu(t),e.blockedOn=n,!1;t.shift()}return!0}function yf(e,t,n){Tl(e)&&n.delete(t)}function O5(){vd=!1,lr!==null&&Tl(lr)&&(lr=null),ir!==null&&Tl(ir)&&(ir=null),cr!==null&&Tl(cr)&&(cr=null),qa.forEach(yf),Ja.forEach(yf)}function da(e,t){e.blockedOn===t&&(e.blockedOn=null,vd||(vd=!0,At.unstable_scheduleCallback(At.unstable_NormalPriority,O5)))}function es(e){function t(a){return da(a,e)}if(0<ol.length){da(ol[0],e);for(var n=1;n<ol.length;n++){var r=ol[n];r.blockedOn===e&&(r.blockedOn=null)}}for(lr!==null&&da(lr,e),ir!==null&&da(ir,e),cr!==null&&da(cr,e),qa.forEach(t),Ja.forEach(t),n=0;n<rr.length;n++)r=rr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<rr.length&&(n=rr[0],n.blockedOn===null);)S2(n),n.blockedOn===null&&rr.shift()}var Ao=Un.ReactCurrentBatchConfig,Kl=!0;function A5(e,t,n,r){var a=Ce,s=Ao.transition;Ao.transition=null;try{Ce=1,_u(e,t,n,r)}finally{Ce=a,Ao.transition=s}}function M5(e,t,n,r){var a=Ce,s=Ao.transition;Ao.transition=null;try{Ce=4,_u(e,t,n,r)}finally{Ce=a,Ao.transition=s}}function _u(e,t,n,r){if(Kl){var a=yd(e,t,n,r);if(a===null)_c(e,t,r,Yl,n),vf(e,r);else if(D5(a,e,t,n,r))r.stopPropagation();else if(vf(e,r),t&4&&-1<R5.indexOf(e)){for(;a!==null;){var s=bs(a);if(s!==null&&y2(s),s=yd(e,t,n,r),s===null&&_c(e,t,r,Yl,n),s===a)break;a=s}a!==null&&r.stopPropagation()}else _c(e,t,r,null,n)}}var Yl=null;function yd(e,t,n,r){if(Yl=null,e=Cu(r),e=Ir(e),e!==null)if(t=to(e),t===null)e=null;else if(n=t.tag,n===13){if(e=u2(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Yl=e,null}function w2(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(b5()){case bu:return 1;case m2:return 4;case Wl:case S5:return 16;case g2:return 536870912;default:return 16}default:return 16}}var ar=null,ku=null,El=null;function _2(){if(El)return El;var e,t=ku,n=t.length,r,a="value"in ar?ar.value:ar.textContent,s=a.length;for(e=0;e<n&&t[e]===a[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===a[s-r];r++);return El=a.slice(e,1<r?1-r:void 0)}function Nl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function al(){return!0}function jf(){return!1}function Pt(e){function t(n,r,a,s,l){this._reactName=n,this._targetInst=a,this.type=r,this.nativeEvent=s,this.target=l,this.currentTarget=null;for(var i in e)e.hasOwnProperty(i)&&(n=e[i],this[i]=n?n(s):s[i]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?al:jf,this.isPropagationStopped=jf,this}return Be(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=al)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=al)},persist:function(){},isPersistent:al}),t}var Ko={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Tu=Pt(Ko),Cs=Be({},Ko,{view:0,detail:0}),P5=Pt(Cs),gc,xc,ua,ki=Be({},Cs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Eu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ua&&(ua&&e.type==="mousemove"?(gc=e.screenX-ua.screenX,xc=e.screenY-ua.screenY):xc=gc=0,ua=e),gc)},movementY:function(e){return"movementY"in e?e.movementY:xc}}),Cf=Pt(ki),$5=Be({},ki,{dataTransfer:0}),B5=Pt($5),I5=Be({},Cs,{relatedTarget:0}),vc=Pt(I5),z5=Be({},Ko,{animationName:0,elapsedTime:0,pseudoElement:0}),F5=Pt(z5),H5=Be({},Ko,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),U5=Pt(H5),V5=Be({},Ko,{data:0}),bf=Pt(V5),W5={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Z5={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},K5={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Y5(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=K5[e])?!!t[e]:!1}function Eu(){return Y5}var G5=Be({},Cs,{key:function(e){if(e.key){var t=W5[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Nl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Z5[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Eu,charCode:function(e){return e.type==="keypress"?Nl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Nl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),X5=Pt(G5),Q5=Be({},ki,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sf=Pt(Q5),q5=Be({},Cs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Eu}),J5=Pt(q5),e6=Be({},Ko,{propertyName:0,elapsedTime:0,pseudoElement:0}),t6=Pt(e6),n6=Be({},ki,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),r6=Pt(n6),o6=[9,13,27,32],Nu=Pn&&"CompositionEvent"in window,Pa=null;Pn&&"documentMode"in document&&(Pa=document.documentMode);var a6=Pn&&"TextEvent"in window&&!Pa,k2=Pn&&(!Nu||Pa&&8<Pa&&11>=Pa),wf=String.fromCharCode(32),_f=!1;function T2(e,t){switch(e){case"keyup":return o6.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function E2(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var vo=!1;function s6(e,t){switch(e){case"compositionend":return E2(t);case"keypress":return t.which!==32?null:(_f=!0,wf);case"textInput":return e=t.data,e===wf&&_f?null:e;default:return null}}function l6(e,t){if(vo)return e==="compositionend"||!Nu&&T2(e,t)?(e=_2(),El=ku=ar=null,vo=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return k2&&t.locale!=="ko"?null:t.data;default:return null}}var i6={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!i6[e.type]:t==="textarea"}function N2(e,t,n,r){s2(r),t=Gl(t,"onChange"),0<t.length&&(n=new Tu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var $a=null,ts=null;function c6(e){z2(e,0)}function Ti(e){var t=Co(e);if(J1(t))return e}function d6(e,t){if(e==="change")return t}var L2=!1;if(Pn){var yc;if(Pn){var jc="oninput"in document;if(!jc){var Tf=document.createElement("div");Tf.setAttribute("oninput","return;"),jc=typeof Tf.oninput=="function"}yc=jc}else yc=!1;L2=yc&&(!document.documentMode||9<document.documentMode)}function Ef(){$a&&($a.detachEvent("onpropertychange",R2),ts=$a=null)}function R2(e){if(e.propertyName==="value"&&Ti(ts)){var t=[];N2(t,ts,e,Cu(e)),d2(c6,t)}}function u6(e,t,n){e==="focusin"?(Ef(),$a=t,ts=n,$a.attachEvent("onpropertychange",R2)):e==="focusout"&&Ef()}function p6(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ti(ts)}function f6(e,t){if(e==="click")return Ti(t)}function h6(e,t){if(e==="input"||e==="change")return Ti(t)}function m6(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ln=typeof Object.is=="function"?Object.is:m6;function ns(e,t){if(ln(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!td.call(t,a)||!ln(e[a],t[a]))return!1}return!0}function Nf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Lf(e,t){var n=Nf(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Nf(n)}}function D2(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?D2(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function O2(){for(var e=window,t=Hl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Hl(e.document)}return t}function Lu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function g6(e){var t=O2(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&D2(n.ownerDocument.documentElement,n)){if(r!==null&&Lu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,s=Math.min(r.start,a);r=r.end===void 0?s:Math.min(r.end,a),!e.extend&&s>r&&(a=r,r=s,s=a),a=Lf(n,s);var l=Lf(n,r);a&&l&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var x6=Pn&&"documentMode"in document&&11>=document.documentMode,yo=null,jd=null,Ba=null,Cd=!1;function Rf(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Cd||yo==null||yo!==Hl(r)||(r=yo,"selectionStart"in r&&Lu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ba&&ns(Ba,r)||(Ba=r,r=Gl(jd,"onSelect"),0<r.length&&(t=new Tu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=yo)))}function sl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var jo={animationend:sl("Animation","AnimationEnd"),animationiteration:sl("Animation","AnimationIteration"),animationstart:sl("Animation","AnimationStart"),transitionend:sl("Transition","TransitionEnd")},Cc={},A2={};Pn&&(A2=document.createElement("div").style,"AnimationEvent"in window||(delete jo.animationend.animation,delete jo.animationiteration.animation,delete jo.animationstart.animation),"TransitionEvent"in window||delete jo.transitionend.transition);function Ei(e){if(Cc[e])return Cc[e];if(!jo[e])return e;var t=jo[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in A2)return Cc[e]=t[n];return e}var M2=Ei("animationend"),P2=Ei("animationiteration"),$2=Ei("animationstart"),B2=Ei("transitionend"),I2=new Map,Df="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jr(e,t){I2.set(e,t),eo(t,[e])}for(var bc=0;bc<Df.length;bc++){var Sc=Df[bc],v6=Sc.toLowerCase(),y6=Sc[0].toUpperCase()+Sc.slice(1);jr(v6,"on"+y6)}jr(M2,"onAnimationEnd");jr(P2,"onAnimationIteration");jr($2,"onAnimationStart");jr("dblclick","onDoubleClick");jr("focusin","onFocus");jr("focusout","onBlur");jr(B2,"onTransitionEnd");Bo("onMouseEnter",["mouseout","mouseover"]);Bo("onMouseLeave",["mouseout","mouseover"]);Bo("onPointerEnter",["pointerout","pointerover"]);Bo("onPointerLeave",["pointerout","pointerover"]);eo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));eo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));eo("onBeforeInput",["compositionend","keypress","textInput","paste"]);eo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));eo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));eo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _a="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),j6=new Set("cancel close invalid load scroll toggle".split(" ").concat(_a));function Of(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,v5(r,t,void 0,e),e.currentTarget=null}function z2(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var l=r.length-1;0<=l;l--){var i=r[l],c=i.instance,d=i.currentTarget;if(i=i.listener,c!==s&&a.isPropagationStopped())break e;Of(a,i,d),s=c}else for(l=0;l<r.length;l++){if(i=r[l],c=i.instance,d=i.currentTarget,i=i.listener,c!==s&&a.isPropagationStopped())break e;Of(a,i,d),s=c}}}if(Vl)throw e=gd,Vl=!1,gd=null,e}function Te(e,t){var n=t[kd];n===void 0&&(n=t[kd]=new Set);var r=e+"__bubble";n.has(r)||(F2(t,e,2,!1),n.add(r))}function wc(e,t,n){var r=0;t&&(r|=4),F2(n,e,r,t)}var ll="_reactListening"+Math.random().toString(36).slice(2);function rs(e){if(!e[ll]){e[ll]=!0,Y1.forEach(function(n){n!=="selectionchange"&&(j6.has(n)||wc(n,!1,e),wc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ll]||(t[ll]=!0,wc("selectionchange",!1,t))}}function F2(e,t,n,r){switch(w2(t)){case 1:var a=A5;break;case 4:a=M5;break;default:a=_u}n=a.bind(null,t,n,e),a=void 0,!md||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function _c(e,t,n,r,a){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var i=r.stateNode.containerInfo;if(i===a||i.nodeType===8&&i.parentNode===a)break;if(l===4)for(l=r.return;l!==null;){var c=l.tag;if((c===3||c===4)&&(c=l.stateNode.containerInfo,c===a||c.nodeType===8&&c.parentNode===a))return;l=l.return}for(;i!==null;){if(l=Ir(i),l===null)return;if(c=l.tag,c===5||c===6){r=s=l;continue e}i=i.parentNode}}r=r.return}d2(function(){var d=s,u=Cu(n),p=[];e:{var m=I2.get(e);if(m!==void 0){var y=Tu,b=e;switch(e){case"keypress":if(Nl(n)===0)break e;case"keydown":case"keyup":y=X5;break;case"focusin":b="focus",y=vc;break;case"focusout":b="blur",y=vc;break;case"beforeblur":case"afterblur":y=vc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Cf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=B5;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=J5;break;case M2:case P2:case $2:y=F5;break;case B2:y=t6;break;case"scroll":y=P5;break;case"wheel":y=r6;break;case"copy":case"cut":case"paste":y=U5;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Sf}var C=(t&4)!==0,_=!C&&e==="scroll",x=C?m!==null?m+"Capture":null:m;C=[];for(var f=d,h;f!==null;){h=f;var j=h.stateNode;if(h.tag===5&&j!==null&&(h=j,x!==null&&(j=Qa(f,x),j!=null&&C.push(os(f,j,h)))),_)break;f=f.return}0<C.length&&(m=new y(m,b,null,n,u),p.push({event:m,listeners:C}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",m&&n!==fd&&(b=n.relatedTarget||n.fromElement)&&(Ir(b)||b[$n]))break e;if((y||m)&&(m=u.window===u?u:(m=u.ownerDocument)?m.defaultView||m.parentWindow:window,y?(b=n.relatedTarget||n.toElement,y=d,b=b?Ir(b):null,b!==null&&(_=to(b),b!==_||b.tag!==5&&b.tag!==6)&&(b=null)):(y=null,b=d),y!==b)){if(C=Cf,j="onMouseLeave",x="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(C=Sf,j="onPointerLeave",x="onPointerEnter",f="pointer"),_=y==null?m:Co(y),h=b==null?m:Co(b),m=new C(j,f+"leave",y,n,u),m.target=_,m.relatedTarget=h,j=null,Ir(u)===d&&(C=new C(x,f+"enter",b,n,u),C.target=h,C.relatedTarget=_,j=C),_=j,y&&b)t:{for(C=y,x=b,f=0,h=C;h;h=fo(h))f++;for(h=0,j=x;j;j=fo(j))h++;for(;0<f-h;)C=fo(C),f--;for(;0<h-f;)x=fo(x),h--;for(;f--;){if(C===x||x!==null&&C===x.alternate)break t;C=fo(C),x=fo(x)}C=null}else C=null;y!==null&&Af(p,m,y,C,!1),b!==null&&_!==null&&Af(p,_,b,C,!0)}}e:{if(m=d?Co(d):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var S=d6;else if(kf(m))if(L2)S=h6;else{S=p6;var g=u6}else(y=m.nodeName)&&y.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(S=f6);if(S&&(S=S(e,d))){N2(p,S,n,u);break e}g&&g(e,m,d),e==="focusout"&&(g=m._wrapperState)&&g.controlled&&m.type==="number"&&id(m,"number",m.value)}switch(g=d?Co(d):window,e){case"focusin":(kf(g)||g.contentEditable==="true")&&(yo=g,jd=d,Ba=null);break;case"focusout":Ba=jd=yo=null;break;case"mousedown":Cd=!0;break;case"contextmenu":case"mouseup":case"dragend":Cd=!1,Rf(p,n,u);break;case"selectionchange":if(x6)break;case"keydown":case"keyup":Rf(p,n,u)}var w;if(Nu)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else vo?T2(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(k2&&n.locale!=="ko"&&(vo||T!=="onCompositionStart"?T==="onCompositionEnd"&&vo&&(w=_2()):(ar=u,ku="value"in ar?ar.value:ar.textContent,vo=!0)),g=Gl(d,T),0<g.length&&(T=new bf(T,e,null,n,u),p.push({event:T,listeners:g}),w?T.data=w:(w=E2(n),w!==null&&(T.data=w)))),(w=a6?s6(e,n):l6(e,n))&&(d=Gl(d,"onBeforeInput"),0<d.length&&(u=new bf("onBeforeInput","beforeinput",null,n,u),p.push({event:u,listeners:d}),u.data=w))}z2(p,t)})}function os(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Gl(e,t){for(var n=t+"Capture",r=[];e!==null;){var a=e,s=a.stateNode;a.tag===5&&s!==null&&(a=s,s=Qa(e,n),s!=null&&r.unshift(os(e,s,a)),s=Qa(e,t),s!=null&&r.push(os(e,s,a))),e=e.return}return r}function fo(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Af(e,t,n,r,a){for(var s=t._reactName,l=[];n!==null&&n!==r;){var i=n,c=i.alternate,d=i.stateNode;if(c!==null&&c===r)break;i.tag===5&&d!==null&&(i=d,a?(c=Qa(n,s),c!=null&&l.unshift(os(n,c,i))):a||(c=Qa(n,s),c!=null&&l.push(os(n,c,i)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var C6=/\r\n?/g,b6=/\u0000|\uFFFD/g;function Mf(e){return(typeof e=="string"?e:""+e).replace(C6,`
`).replace(b6,"")}function il(e,t,n){if(t=Mf(t),Mf(e)!==t&&n)throw Error(M(425))}function Xl(){}var bd=null,Sd=null;function wd(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var _d=typeof setTimeout=="function"?setTimeout:void 0,S6=typeof clearTimeout=="function"?clearTimeout:void 0,Pf=typeof Promise=="function"?Promise:void 0,w6=typeof queueMicrotask=="function"?queueMicrotask:typeof Pf<"u"?function(e){return Pf.resolve(null).then(e).catch(_6)}:_d;function _6(e){setTimeout(function(){throw e})}function kc(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(r===0){e.removeChild(a),es(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=a}while(n);es(t)}function dr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function $f(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Yo=Math.random().toString(36).slice(2),vn="__reactFiber$"+Yo,as="__reactProps$"+Yo,$n="__reactContainer$"+Yo,kd="__reactEvents$"+Yo,k6="__reactListeners$"+Yo,T6="__reactHandles$"+Yo;function Ir(e){var t=e[vn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[$n]||n[vn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=$f(e);e!==null;){if(n=e[vn])return n;e=$f(e)}return t}e=n,n=e.parentNode}return null}function bs(e){return e=e[vn]||e[$n],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Co(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(M(33))}function Ni(e){return e[as]||null}var Td=[],bo=-1;function Cr(e){return{current:e}}function Ee(e){0>bo||(e.current=Td[bo],Td[bo]=null,bo--)}function _e(e,t){bo++,Td[bo]=e.current,e.current=t}var gr={},ut=Cr(gr),Tt=Cr(!1),Zr=gr;function Io(e,t){var n=e.type.contextTypes;if(!n)return gr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a={},s;for(s in n)a[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Et(e){return e=e.childContextTypes,e!=null}function Ql(){Ee(Tt),Ee(ut)}function Bf(e,t,n){if(ut.current!==gr)throw Error(M(168));_e(ut,t),_e(Tt,n)}function H2(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var a in r)if(!(a in t))throw Error(M(108,u5(e)||"Unknown",a));return Be({},n,r)}function ql(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||gr,Zr=ut.current,_e(ut,e),_e(Tt,Tt.current),!0}function If(e,t,n){var r=e.stateNode;if(!r)throw Error(M(169));n?(e=H2(e,t,Zr),r.__reactInternalMemoizedMergedChildContext=e,Ee(Tt),Ee(ut),_e(ut,e)):Ee(Tt),_e(Tt,n)}var En=null,Li=!1,Tc=!1;function U2(e){En===null?En=[e]:En.push(e)}function E6(e){Li=!0,U2(e)}function br(){if(!Tc&&En!==null){Tc=!0;var e=0,t=Ce;try{var n=En;for(Ce=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}En=null,Li=!1}catch(a){throw En!==null&&(En=En.slice(e+1)),h2(bu,br),a}finally{Ce=t,Tc=!1}}return null}var So=[],wo=0,Jl=null,ei=0,zt=[],Ft=0,Kr=null,Dn=1,On="";function Pr(e,t){So[wo++]=ei,So[wo++]=Jl,Jl=e,ei=t}function V2(e,t,n){zt[Ft++]=Dn,zt[Ft++]=On,zt[Ft++]=Kr,Kr=e;var r=Dn;e=On;var a=32-an(r)-1;r&=~(1<<a),n+=1;var s=32-an(t)+a;if(30<s){var l=a-a%5;s=(r&(1<<l)-1).toString(32),r>>=l,a-=l,Dn=1<<32-an(t)+a|n<<a|r,On=s+e}else Dn=1<<s|n<<a|r,On=e}function Ru(e){e.return!==null&&(Pr(e,1),V2(e,1,0))}function Du(e){for(;e===Jl;)Jl=So[--wo],So[wo]=null,ei=So[--wo],So[wo]=null;for(;e===Kr;)Kr=zt[--Ft],zt[Ft]=null,On=zt[--Ft],zt[Ft]=null,Dn=zt[--Ft],zt[Ft]=null}var Ot=null,Dt=null,De=!1,on=null;function W2(e,t){var n=Ht(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function zf(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ot=e,Dt=dr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ot=e,Dt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Kr!==null?{id:Dn,overflow:On}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ht(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ot=e,Dt=null,!0):!1;default:return!1}}function Ed(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Nd(e){if(De){var t=Dt;if(t){var n=t;if(!zf(e,t)){if(Ed(e))throw Error(M(418));t=dr(n.nextSibling);var r=Ot;t&&zf(e,t)?W2(r,n):(e.flags=e.flags&-4097|2,De=!1,Ot=e)}}else{if(Ed(e))throw Error(M(418));e.flags=e.flags&-4097|2,De=!1,Ot=e}}}function Ff(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ot=e}function cl(e){if(e!==Ot)return!1;if(!De)return Ff(e),De=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!wd(e.type,e.memoizedProps)),t&&(t=Dt)){if(Ed(e))throw Z2(),Error(M(418));for(;t;)W2(e,t),t=dr(t.nextSibling)}if(Ff(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(M(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Dt=dr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Dt=null}}else Dt=Ot?dr(e.stateNode.nextSibling):null;return!0}function Z2(){for(var e=Dt;e;)e=dr(e.nextSibling)}function zo(){Dt=Ot=null,De=!1}function Ou(e){on===null?on=[e]:on.push(e)}var N6=Un.ReactCurrentBatchConfig;function tn(e,t){if(e&&e.defaultProps){t=Be({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var ti=Cr(null),ni=null,_o=null,Au=null;function Mu(){Au=_o=ni=null}function Pu(e){var t=ti.current;Ee(ti),e._currentValue=t}function Ld(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Mo(e,t){ni=e,Au=_o=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(kt=!0),e.firstContext=null)}function Wt(e){var t=e._currentValue;if(Au!==e)if(e={context:e,memoizedValue:t,next:null},_o===null){if(ni===null)throw Error(M(308));_o=e,ni.dependencies={lanes:0,firstContext:e}}else _o=_o.next=e;return t}var zr=null;function $u(e){zr===null?zr=[e]:zr.push(e)}function K2(e,t,n,r){var a=t.interleaved;return a===null?(n.next=n,$u(t)):(n.next=a.next,a.next=n),t.interleaved=n,Bn(e,r)}function Bn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var tr=!1;function Bu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Y2(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function An(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ur(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ge&2){var a=r.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),r.pending=t,Bn(e,n)}return a=r.interleaved,a===null?(t.next=t,$u(r)):(t.next=a.next,a.next=t),r.interleaved=t,Bn(e,n)}function Ll(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Su(e,n)}}function Hf(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var a=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?a=s=l:s=s.next=l,n=n.next}while(n!==null);s===null?a=s=t:s=s.next=t}else a=s=t;n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ri(e,t,n,r){var a=e.updateQueue;tr=!1;var s=a.firstBaseUpdate,l=a.lastBaseUpdate,i=a.shared.pending;if(i!==null){a.shared.pending=null;var c=i,d=c.next;c.next=null,l===null?s=d:l.next=d,l=c;var u=e.alternate;u!==null&&(u=u.updateQueue,i=u.lastBaseUpdate,i!==l&&(i===null?u.firstBaseUpdate=d:i.next=d,u.lastBaseUpdate=c))}if(s!==null){var p=a.baseState;l=0,u=d=c=null,i=s;do{var m=i.lane,y=i.eventTime;if((r&m)===m){u!==null&&(u=u.next={eventTime:y,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null});e:{var b=e,C=i;switch(m=t,y=n,C.tag){case 1:if(b=C.payload,typeof b=="function"){p=b.call(y,p,m);break e}p=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=C.payload,m=typeof b=="function"?b.call(y,p,m):b,m==null)break e;p=Be({},p,m);break e;case 2:tr=!0}}i.callback!==null&&i.lane!==0&&(e.flags|=64,m=a.effects,m===null?a.effects=[i]:m.push(i))}else y={eventTime:y,lane:m,tag:i.tag,payload:i.payload,callback:i.callback,next:null},u===null?(d=u=y,c=p):u=u.next=y,l|=m;if(i=i.next,i===null){if(i=a.shared.pending,i===null)break;m=i,i=m.next,m.next=null,a.lastBaseUpdate=m,a.shared.pending=null}}while(1);if(u===null&&(c=p),a.baseState=c,a.firstBaseUpdate=d,a.lastBaseUpdate=u,t=a.shared.interleaved,t!==null){a=t;do l|=a.lane,a=a.next;while(a!==t)}else s===null&&(a.shared.lanes=0);Gr|=l,e.lanes=l,e.memoizedState=p}}function Uf(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(a!==null){if(r.callback=null,r=n,typeof a!="function")throw Error(M(191,a));a.call(r)}}}var G2=new K1.Component().refs;function Rd(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Be({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ri={isMounted:function(e){return(e=e._reactInternals)?to(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=gt(),a=fr(e),s=An(r,a);s.payload=t,n!=null&&(s.callback=n),t=ur(e,s,a),t!==null&&(sn(t,e,a,r),Ll(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=gt(),a=fr(e),s=An(r,a);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=ur(e,s,a),t!==null&&(sn(t,e,a,r),Ll(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=gt(),r=fr(e),a=An(n,r);a.tag=2,t!=null&&(a.callback=t),t=ur(e,a,r),t!==null&&(sn(t,e,r,n),Ll(t,e,r))}};function Vf(e,t,n,r,a,s,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,l):t.prototype&&t.prototype.isPureReactComponent?!ns(n,r)||!ns(a,s):!0}function X2(e,t,n){var r=!1,a=gr,s=t.contextType;return typeof s=="object"&&s!==null?s=Wt(s):(a=Et(t)?Zr:ut.current,r=t.contextTypes,s=(r=r!=null)?Io(e,a):gr),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ri,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=s),t}function Wf(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ri.enqueueReplaceState(t,t.state,null)}function Dd(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs=G2,Bu(e);var s=t.contextType;typeof s=="object"&&s!==null?a.context=Wt(s):(s=Et(t)?Zr:ut.current,a.context=Io(e,s)),a.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Rd(e,t,s,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&Ri.enqueueReplaceState(a,a.state,null),ri(e,n,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function pa(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(M(309));var r=n.stateNode}if(!r)throw Error(M(147,e));var a=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(l){var i=a.refs;i===G2&&(i=a.refs={}),l===null?delete i[s]:i[s]=l},t._stringRef=s,t)}if(typeof e!="string")throw Error(M(284));if(!n._owner)throw Error(M(290,e))}return e}function dl(e,t){throw e=Object.prototype.toString.call(t),Error(M(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Zf(e){var t=e._init;return t(e._payload)}function Q2(e){function t(x,f){if(e){var h=x.deletions;h===null?(x.deletions=[f],x.flags|=16):h.push(f)}}function n(x,f){if(!e)return null;for(;f!==null;)t(x,f),f=f.sibling;return null}function r(x,f){for(x=new Map;f!==null;)f.key!==null?x.set(f.key,f):x.set(f.index,f),f=f.sibling;return x}function a(x,f){return x=hr(x,f),x.index=0,x.sibling=null,x}function s(x,f,h){return x.index=h,e?(h=x.alternate,h!==null?(h=h.index,h<f?(x.flags|=2,f):h):(x.flags|=2,f)):(x.flags|=1048576,f)}function l(x){return e&&x.alternate===null&&(x.flags|=2),x}function i(x,f,h,j){return f===null||f.tag!==6?(f=Ac(h,x.mode,j),f.return=x,f):(f=a(f,h),f.return=x,f)}function c(x,f,h,j){var S=h.type;return S===xo?u(x,f,h.props.children,j,h.key):f!==null&&(f.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===er&&Zf(S)===f.type)?(j=a(f,h.props),j.ref=pa(x,f,h),j.return=x,j):(j=Pl(h.type,h.key,h.props,null,x.mode,j),j.ref=pa(x,f,h),j.return=x,j)}function d(x,f,h,j){return f===null||f.tag!==4||f.stateNode.containerInfo!==h.containerInfo||f.stateNode.implementation!==h.implementation?(f=Mc(h,x.mode,j),f.return=x,f):(f=a(f,h.children||[]),f.return=x,f)}function u(x,f,h,j,S){return f===null||f.tag!==7?(f=Wr(h,x.mode,j,S),f.return=x,f):(f=a(f,h),f.return=x,f)}function p(x,f,h){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Ac(""+f,x.mode,h),f.return=x,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Js:return h=Pl(f.type,f.key,f.props,null,x.mode,h),h.ref=pa(x,null,f),h.return=x,h;case go:return f=Mc(f,x.mode,h),f.return=x,f;case er:var j=f._init;return p(x,j(f._payload),h)}if(Sa(f)||la(f))return f=Wr(f,x.mode,h,null),f.return=x,f;dl(x,f)}return null}function m(x,f,h,j){var S=f!==null?f.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return S!==null?null:i(x,f,""+h,j);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Js:return h.key===S?c(x,f,h,j):null;case go:return h.key===S?d(x,f,h,j):null;case er:return S=h._init,m(x,f,S(h._payload),j)}if(Sa(h)||la(h))return S!==null?null:u(x,f,h,j,null);dl(x,h)}return null}function y(x,f,h,j,S){if(typeof j=="string"&&j!==""||typeof j=="number")return x=x.get(h)||null,i(f,x,""+j,S);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Js:return x=x.get(j.key===null?h:j.key)||null,c(f,x,j,S);case go:return x=x.get(j.key===null?h:j.key)||null,d(f,x,j,S);case er:var g=j._init;return y(x,f,h,g(j._payload),S)}if(Sa(j)||la(j))return x=x.get(h)||null,u(f,x,j,S,null);dl(f,j)}return null}function b(x,f,h,j){for(var S=null,g=null,w=f,T=f=0,E=null;w!==null&&T<h.length;T++){w.index>T?(E=w,w=null):E=w.sibling;var D=m(x,w,h[T],j);if(D===null){w===null&&(w=E);break}e&&w&&D.alternate===null&&t(x,w),f=s(D,f,T),g===null?S=D:g.sibling=D,g=D,w=E}if(T===h.length)return n(x,w),De&&Pr(x,T),S;if(w===null){for(;T<h.length;T++)w=p(x,h[T],j),w!==null&&(f=s(w,f,T),g===null?S=w:g.sibling=w,g=w);return De&&Pr(x,T),S}for(w=r(x,w);T<h.length;T++)E=y(w,x,T,h[T],j),E!==null&&(e&&E.alternate!==null&&w.delete(E.key===null?T:E.key),f=s(E,f,T),g===null?S=E:g.sibling=E,g=E);return e&&w.forEach(function(P){return t(x,P)}),De&&Pr(x,T),S}function C(x,f,h,j){var S=la(h);if(typeof S!="function")throw Error(M(150));if(h=S.call(h),h==null)throw Error(M(151));for(var g=S=null,w=f,T=f=0,E=null,D=h.next();w!==null&&!D.done;T++,D=h.next()){w.index>T?(E=w,w=null):E=w.sibling;var P=m(x,w,D.value,j);if(P===null){w===null&&(w=E);break}e&&w&&P.alternate===null&&t(x,w),f=s(P,f,T),g===null?S=P:g.sibling=P,g=P,w=E}if(D.done)return n(x,w),De&&Pr(x,T),S;if(w===null){for(;!D.done;T++,D=h.next())D=p(x,D.value,j),D!==null&&(f=s(D,f,T),g===null?S=D:g.sibling=D,g=D);return De&&Pr(x,T),S}for(w=r(x,w);!D.done;T++,D=h.next())D=y(w,x,T,D.value,j),D!==null&&(e&&D.alternate!==null&&w.delete(D.key===null?T:D.key),f=s(D,f,T),g===null?S=D:g.sibling=D,g=D);return e&&w.forEach(function(Y){return t(x,Y)}),De&&Pr(x,T),S}function _(x,f,h,j){if(typeof h=="object"&&h!==null&&h.type===xo&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Js:e:{for(var S=h.key,g=f;g!==null;){if(g.key===S){if(S=h.type,S===xo){if(g.tag===7){n(x,g.sibling),f=a(g,h.props.children),f.return=x,x=f;break e}}else if(g.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===er&&Zf(S)===g.type){n(x,g.sibling),f=a(g,h.props),f.ref=pa(x,g,h),f.return=x,x=f;break e}n(x,g);break}else t(x,g);g=g.sibling}h.type===xo?(f=Wr(h.props.children,x.mode,j,h.key),f.return=x,x=f):(j=Pl(h.type,h.key,h.props,null,x.mode,j),j.ref=pa(x,f,h),j.return=x,x=j)}return l(x);case go:e:{for(g=h.key;f!==null;){if(f.key===g)if(f.tag===4&&f.stateNode.containerInfo===h.containerInfo&&f.stateNode.implementation===h.implementation){n(x,f.sibling),f=a(f,h.children||[]),f.return=x,x=f;break e}else{n(x,f);break}else t(x,f);f=f.sibling}f=Mc(h,x.mode,j),f.return=x,x=f}return l(x);case er:return g=h._init,_(x,f,g(h._payload),j)}if(Sa(h))return b(x,f,h,j);if(la(h))return C(x,f,h,j);dl(x,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,f!==null&&f.tag===6?(n(x,f.sibling),f=a(f,h),f.return=x,x=f):(n(x,f),f=Ac(h,x.mode,j),f.return=x,x=f),l(x)):n(x,f)}return _}var Fo=Q2(!0),q2=Q2(!1),Ss={},jn=Cr(Ss),ss=Cr(Ss),ls=Cr(Ss);function Fr(e){if(e===Ss)throw Error(M(174));return e}function Iu(e,t){switch(_e(ls,t),_e(ss,e),_e(jn,Ss),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:dd(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=dd(t,e)}Ee(jn),_e(jn,t)}function Ho(){Ee(jn),Ee(ss),Ee(ls)}function J2(e){Fr(ls.current);var t=Fr(jn.current),n=dd(t,e.type);t!==n&&(_e(ss,e),_e(jn,n))}function zu(e){ss.current===e&&(Ee(jn),Ee(ss))}var Me=Cr(0);function oi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ec=[];function Fu(){for(var e=0;e<Ec.length;e++)Ec[e]._workInProgressVersionPrimary=null;Ec.length=0}var Rl=Un.ReactCurrentDispatcher,Nc=Un.ReactCurrentBatchConfig,Yr=0,$e=null,Ke=null,Je=null,ai=!1,Ia=!1,is=0,L6=0;function it(){throw Error(M(321))}function Hu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ln(e[n],t[n]))return!1;return!0}function Uu(e,t,n,r,a,s){if(Yr=s,$e=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Rl.current=e===null||e.memoizedState===null?A6:M6,e=n(r,a),Ia){s=0;do{if(Ia=!1,is=0,25<=s)throw Error(M(301));s+=1,Je=Ke=null,t.updateQueue=null,Rl.current=P6,e=n(r,a)}while(Ia)}if(Rl.current=si,t=Ke!==null&&Ke.next!==null,Yr=0,Je=Ke=$e=null,ai=!1,t)throw Error(M(300));return e}function Vu(){var e=is!==0;return is=0,e}function mn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Je===null?$e.memoizedState=Je=e:Je=Je.next=e,Je}function Zt(){if(Ke===null){var e=$e.alternate;e=e!==null?e.memoizedState:null}else e=Ke.next;var t=Je===null?$e.memoizedState:Je.next;if(t!==null)Je=t,Ke=e;else{if(e===null)throw Error(M(310));Ke=e,e={memoizedState:Ke.memoizedState,baseState:Ke.baseState,baseQueue:Ke.baseQueue,queue:Ke.queue,next:null},Je===null?$e.memoizedState=Je=e:Je=Je.next=e}return Je}function cs(e,t){return typeof t=="function"?t(e):t}function Lc(e){var t=Zt(),n=t.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=e;var r=Ke,a=r.baseQueue,s=n.pending;if(s!==null){if(a!==null){var l=a.next;a.next=s.next,s.next=l}r.baseQueue=a=s,n.pending=null}if(a!==null){s=a.next,r=r.baseState;var i=l=null,c=null,d=s;do{var u=d.lane;if((Yr&u)===u)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var p={lane:u,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(i=c=p,l=r):c=c.next=p,$e.lanes|=u,Gr|=u}d=d.next}while(d!==null&&d!==s);c===null?l=r:c.next=i,ln(r,t.memoizedState)||(kt=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){a=e;do s=a.lane,$e.lanes|=s,Gr|=s,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Rc(e){var t=Zt(),n=t.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,s=t.memoizedState;if(a!==null){n.pending=null;var l=a=a.next;do s=e(s,l.action),l=l.next;while(l!==a);ln(s,t.memoizedState)||(kt=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function em(){}function tm(e,t){var n=$e,r=Zt(),a=t(),s=!ln(r.memoizedState,a);if(s&&(r.memoizedState=a,kt=!0),r=r.queue,Wu(om.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||Je!==null&&Je.memoizedState.tag&1){if(n.flags|=2048,ds(9,rm.bind(null,n,r,a,t),void 0,null),tt===null)throw Error(M(349));Yr&30||nm(n,t,a)}return a}function nm(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=$e.updateQueue,t===null?(t={lastEffect:null,stores:null},$e.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function rm(e,t,n,r){t.value=n,t.getSnapshot=r,am(t)&&sm(e)}function om(e,t,n){return n(function(){am(t)&&sm(e)})}function am(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ln(e,n)}catch{return!0}}function sm(e){var t=Bn(e,1);t!==null&&sn(t,e,1,-1)}function Kf(e){var t=mn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:cs,lastRenderedState:e},t.queue=e,e=e.dispatch=O6.bind(null,$e,e),[t.memoizedState,e]}function ds(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=$e.updateQueue,t===null?(t={lastEffect:null,stores:null},$e.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function lm(){return Zt().memoizedState}function Dl(e,t,n,r){var a=mn();$e.flags|=e,a.memoizedState=ds(1|t,n,void 0,r===void 0?null:r)}function Di(e,t,n,r){var a=Zt();r=r===void 0?null:r;var s=void 0;if(Ke!==null){var l=Ke.memoizedState;if(s=l.destroy,r!==null&&Hu(r,l.deps)){a.memoizedState=ds(t,n,s,r);return}}$e.flags|=e,a.memoizedState=ds(1|t,n,s,r)}function Yf(e,t){return Dl(8390656,8,e,t)}function Wu(e,t){return Di(2048,8,e,t)}function im(e,t){return Di(4,2,e,t)}function cm(e,t){return Di(4,4,e,t)}function dm(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function um(e,t,n){return n=n!=null?n.concat([e]):null,Di(4,4,dm.bind(null,t,e),n)}function Zu(){}function pm(e,t){var n=Zt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Hu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function fm(e,t){var n=Zt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Hu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function hm(e,t,n){return Yr&21?(ln(n,t)||(n=x2(),$e.lanes|=n,Gr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,kt=!0),e.memoizedState=n)}function R6(e,t){var n=Ce;Ce=n!==0&&4>n?n:4,e(!0);var r=Nc.transition;Nc.transition={};try{e(!1),t()}finally{Ce=n,Nc.transition=r}}function mm(){return Zt().memoizedState}function D6(e,t,n){var r=fr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},gm(e))xm(t,n);else if(n=K2(e,t,n,r),n!==null){var a=gt();sn(n,e,r,a),vm(n,t,r)}}function O6(e,t,n){var r=fr(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(gm(e))xm(t,a);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var l=t.lastRenderedState,i=s(l,n);if(a.hasEagerState=!0,a.eagerState=i,ln(i,l)){var c=t.interleaved;c===null?(a.next=a,$u(t)):(a.next=c.next,c.next=a),t.interleaved=a;return}}catch{}finally{}n=K2(e,t,a,r),n!==null&&(a=gt(),sn(n,e,r,a),vm(n,t,r))}}function gm(e){var t=e.alternate;return e===$e||t!==null&&t===$e}function xm(e,t){Ia=ai=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function vm(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Su(e,n)}}var si={readContext:Wt,useCallback:it,useContext:it,useEffect:it,useImperativeHandle:it,useInsertionEffect:it,useLayoutEffect:it,useMemo:it,useReducer:it,useRef:it,useState:it,useDebugValue:it,useDeferredValue:it,useTransition:it,useMutableSource:it,useSyncExternalStore:it,useId:it,unstable_isNewReconciler:!1},A6={readContext:Wt,useCallback:function(e,t){return mn().memoizedState=[e,t===void 0?null:t],e},useContext:Wt,useEffect:Yf,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Dl(4194308,4,dm.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Dl(4194308,4,e,t)},useInsertionEffect:function(e,t){return Dl(4,2,e,t)},useMemo:function(e,t){var n=mn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=mn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=D6.bind(null,$e,e),[r.memoizedState,e]},useRef:function(e){var t=mn();return e={current:e},t.memoizedState=e},useState:Kf,useDebugValue:Zu,useDeferredValue:function(e){return mn().memoizedState=e},useTransition:function(){var e=Kf(!1),t=e[0];return e=R6.bind(null,e[1]),mn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=$e,a=mn();if(De){if(n===void 0)throw Error(M(407));n=n()}else{if(n=t(),tt===null)throw Error(M(349));Yr&30||nm(r,t,n)}a.memoizedState=n;var s={value:n,getSnapshot:t};return a.queue=s,Yf(om.bind(null,r,s,e),[e]),r.flags|=2048,ds(9,rm.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=mn(),t=tt.identifierPrefix;if(De){var n=On,r=Dn;n=(r&~(1<<32-an(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=is++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=L6++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},M6={readContext:Wt,useCallback:pm,useContext:Wt,useEffect:Wu,useImperativeHandle:um,useInsertionEffect:im,useLayoutEffect:cm,useMemo:fm,useReducer:Lc,useRef:lm,useState:function(){return Lc(cs)},useDebugValue:Zu,useDeferredValue:function(e){var t=Zt();return hm(t,Ke.memoizedState,e)},useTransition:function(){var e=Lc(cs)[0],t=Zt().memoizedState;return[e,t]},useMutableSource:em,useSyncExternalStore:tm,useId:mm,unstable_isNewReconciler:!1},P6={readContext:Wt,useCallback:pm,useContext:Wt,useEffect:Wu,useImperativeHandle:um,useInsertionEffect:im,useLayoutEffect:cm,useMemo:fm,useReducer:Rc,useRef:lm,useState:function(){return Rc(cs)},useDebugValue:Zu,useDeferredValue:function(e){var t=Zt();return Ke===null?t.memoizedState=e:hm(t,Ke.memoizedState,e)},useTransition:function(){var e=Rc(cs)[0],t=Zt().memoizedState;return[e,t]},useMutableSource:em,useSyncExternalStore:tm,useId:mm,unstable_isNewReconciler:!1};function Uo(e,t){try{var n="",r=t;do n+=d5(r),r=r.return;while(r);var a=n}catch(s){a=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:a,digest:null}}function Dc(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Od(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var $6=typeof WeakMap=="function"?WeakMap:Map;function ym(e,t,n){n=An(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ii||(ii=!0,Ud=r),Od(e,t)},n}function jm(e,t,n){n=An(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){Od(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Od(e,t),typeof r!="function"&&(pr===null?pr=new Set([this]):pr.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Gf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new $6;var a=new Set;r.set(t,a)}else a=r.get(t),a===void 0&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=Q6.bind(null,e,t,n),t.then(e,e))}function Xf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Qf(e,t,n,r,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=An(-1,1),t.tag=2,ur(n,t,1))),n.lanes|=1),e)}var B6=Un.ReactCurrentOwner,kt=!1;function mt(e,t,n,r){t.child=e===null?q2(t,null,n,r):Fo(t,e.child,n,r)}function qf(e,t,n,r,a){n=n.render;var s=t.ref;return Mo(t,a),r=Uu(e,t,n,r,s,a),n=Vu(),e!==null&&!kt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,In(e,t,a)):(De&&n&&Ru(t),t.flags|=1,mt(e,t,r,a),t.child)}function Jf(e,t,n,r,a){if(e===null){var s=n.type;return typeof s=="function"&&!ep(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,Cm(e,t,s,r,a)):(e=Pl(n.type,null,r,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&a)){var l=s.memoizedProps;if(n=n.compare,n=n!==null?n:ns,n(l,r)&&e.ref===t.ref)return In(e,t,a)}return t.flags|=1,e=hr(s,r),e.ref=t.ref,e.return=t,t.child=e}function Cm(e,t,n,r,a){if(e!==null){var s=e.memoizedProps;if(ns(s,r)&&e.ref===t.ref)if(kt=!1,t.pendingProps=r=s,(e.lanes&a)!==0)e.flags&131072&&(kt=!0);else return t.lanes=e.lanes,In(e,t,a)}return Ad(e,t,n,r,a)}function bm(e,t,n){var r=t.pendingProps,a=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},_e(To,Rt),Rt|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,_e(To,Rt),Rt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,_e(To,Rt),Rt|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,_e(To,Rt),Rt|=r;return mt(e,t,a,n),t.child}function Sm(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ad(e,t,n,r,a){var s=Et(n)?Zr:ut.current;return s=Io(t,s),Mo(t,a),n=Uu(e,t,n,r,s,a),r=Vu(),e!==null&&!kt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,In(e,t,a)):(De&&r&&Ru(t),t.flags|=1,mt(e,t,n,a),t.child)}function eh(e,t,n,r,a){if(Et(n)){var s=!0;ql(t)}else s=!1;if(Mo(t,a),t.stateNode===null)Ol(e,t),X2(t,n,r),Dd(t,n,r,a),r=!0;else if(e===null){var l=t.stateNode,i=t.memoizedProps;l.props=i;var c=l.context,d=n.contextType;typeof d=="object"&&d!==null?d=Wt(d):(d=Et(n)?Zr:ut.current,d=Io(t,d));var u=n.getDerivedStateFromProps,p=typeof u=="function"||typeof l.getSnapshotBeforeUpdate=="function";p||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(i!==r||c!==d)&&Wf(t,l,r,d),tr=!1;var m=t.memoizedState;l.state=m,ri(t,r,l,a),c=t.memoizedState,i!==r||m!==c||Tt.current||tr?(typeof u=="function"&&(Rd(t,n,u,r),c=t.memoizedState),(i=tr||Vf(t,n,i,r,m,c,d))?(p||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),l.props=r,l.state=c,l.context=d,r=i):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Y2(e,t),i=t.memoizedProps,d=t.type===t.elementType?i:tn(t.type,i),l.props=d,p=t.pendingProps,m=l.context,c=n.contextType,typeof c=="object"&&c!==null?c=Wt(c):(c=Et(n)?Zr:ut.current,c=Io(t,c));var y=n.getDerivedStateFromProps;(u=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(i!==p||m!==c)&&Wf(t,l,r,c),tr=!1,m=t.memoizedState,l.state=m,ri(t,r,l,a);var b=t.memoizedState;i!==p||m!==b||Tt.current||tr?(typeof y=="function"&&(Rd(t,n,y,r),b=t.memoizedState),(d=tr||Vf(t,n,d,r,m,b,c)||!1)?(u||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,b,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,b,c)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||i===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=b),l.props=r,l.state=b,l.context=c,r=d):(typeof l.componentDidUpdate!="function"||i===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Md(e,t,n,r,s,a)}function Md(e,t,n,r,a,s){Sm(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return a&&If(t,n,!1),In(e,t,s);r=t.stateNode,B6.current=t;var i=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Fo(t,e.child,null,s),t.child=Fo(t,null,i,s)):mt(e,t,i,s),t.memoizedState=r.state,a&&If(t,n,!0),t.child}function wm(e){var t=e.stateNode;t.pendingContext?Bf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Bf(e,t.context,!1),Iu(e,t.containerInfo)}function th(e,t,n,r,a){return zo(),Ou(a),t.flags|=256,mt(e,t,n,r),t.child}var Pd={dehydrated:null,treeContext:null,retryLane:0};function $d(e){return{baseLanes:e,cachePool:null,transitions:null}}function _m(e,t,n){var r=t.pendingProps,a=Me.current,s=!1,l=(t.flags&128)!==0,i;if((i=l)||(i=e!==null&&e.memoizedState===null?!1:(a&2)!==0),i?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),_e(Me,a&1),e===null)return Nd(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,s?(r=t.mode,s=t.child,l={mode:"hidden",children:l},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=l):s=Mi(l,r,0,null),e=Wr(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=$d(n),t.memoizedState=Pd,e):Ku(t,l));if(a=e.memoizedState,a!==null&&(i=a.dehydrated,i!==null))return I6(e,t,l,r,i,a,n);if(s){s=r.fallback,l=t.mode,a=e.child,i=a.sibling;var c={mode:"hidden",children:r.children};return!(l&1)&&t.child!==a?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=hr(a,c),r.subtreeFlags=a.subtreeFlags&14680064),i!==null?s=hr(i,s):(s=Wr(s,l,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,l=e.child.memoizedState,l=l===null?$d(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=e.childLanes&~n,t.memoizedState=Pd,r}return s=e.child,e=s.sibling,r=hr(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ku(e,t){return t=Mi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ul(e,t,n,r){return r!==null&&Ou(r),Fo(t,e.child,null,n),e=Ku(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function I6(e,t,n,r,a,s,l){if(n)return t.flags&256?(t.flags&=-257,r=Dc(Error(M(422))),ul(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,a=t.mode,r=Mi({mode:"visible",children:r.children},a,0,null),s=Wr(s,a,l,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&Fo(t,e.child,null,l),t.child.memoizedState=$d(l),t.memoizedState=Pd,s);if(!(t.mode&1))return ul(e,t,l,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var i=r.dgst;return r=i,s=Error(M(419)),r=Dc(s,r,void 0),ul(e,t,l,r)}if(i=(l&e.childLanes)!==0,kt||i){if(r=tt,r!==null){switch(l&-l){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(r.suspendedLanes|l)?0:a,a!==0&&a!==s.retryLane&&(s.retryLane=a,Bn(e,a),sn(r,e,a,-1))}return Ju(),r=Dc(Error(M(421))),ul(e,t,l,r)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=q6.bind(null,e),a._reactRetry=t,null):(e=s.treeContext,Dt=dr(a.nextSibling),Ot=t,De=!0,on=null,e!==null&&(zt[Ft++]=Dn,zt[Ft++]=On,zt[Ft++]=Kr,Dn=e.id,On=e.overflow,Kr=t),t=Ku(t,r.children),t.flags|=4096,t)}function nh(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ld(e.return,t,n)}function Oc(e,t,n,r,a){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=a)}function km(e,t,n){var r=t.pendingProps,a=r.revealOrder,s=r.tail;if(mt(e,t,r.children,n),r=Me.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&nh(e,n,t);else if(e.tag===19)nh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(_e(Me,r),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&oi(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Oc(t,!1,a,n,s);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&oi(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Oc(t,!0,n,null,s);break;case"together":Oc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ol(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function In(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(M(153));if(t.child!==null){for(e=t.child,n=hr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=hr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function z6(e,t,n){switch(t.tag){case 3:wm(t),zo();break;case 5:J2(t);break;case 1:Et(t.type)&&ql(t);break;case 4:Iu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;_e(ti,r._currentValue),r._currentValue=a;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(_e(Me,Me.current&1),t.flags|=128,null):n&t.child.childLanes?_m(e,t,n):(_e(Me,Me.current&1),e=In(e,t,n),e!==null?e.sibling:null);_e(Me,Me.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return km(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),_e(Me,Me.current),r)break;return null;case 22:case 23:return t.lanes=0,bm(e,t,n)}return In(e,t,n)}var Tm,Bd,Em,Nm;Tm=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Bd=function(){};Em=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,Fr(jn.current);var s=null;switch(n){case"input":a=sd(e,a),r=sd(e,r),s=[];break;case"select":a=Be({},a,{value:void 0}),r=Be({},r,{value:void 0}),s=[];break;case"textarea":a=cd(e,a),r=cd(e,r),s=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Xl)}ud(n,r);var l;n=null;for(d in a)if(!r.hasOwnProperty(d)&&a.hasOwnProperty(d)&&a[d]!=null)if(d==="style"){var i=a[d];for(l in i)i.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Ga.hasOwnProperty(d)?s||(s=[]):(s=s||[]).push(d,null));for(d in r){var c=r[d];if(i=a!=null?a[d]:void 0,r.hasOwnProperty(d)&&c!==i&&(c!=null||i!=null))if(d==="style")if(i){for(l in i)!i.hasOwnProperty(l)||c&&c.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in c)c.hasOwnProperty(l)&&i[l]!==c[l]&&(n||(n={}),n[l]=c[l])}else n||(s||(s=[]),s.push(d,n)),n=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,i=i?i.__html:void 0,c!=null&&i!==c&&(s=s||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Ga.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&Te("scroll",e),s||i===c||(s=[])):(s=s||[]).push(d,c))}n&&(s=s||[]).push("style",n);var d=s;(t.updateQueue=d)&&(t.flags|=4)}};Nm=function(e,t,n,r){n!==r&&(t.flags|=4)};function fa(e,t){if(!De)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ct(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function F6(e,t,n){var r=t.pendingProps;switch(Du(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ct(t),null;case 1:return Et(t.type)&&Ql(),ct(t),null;case 3:return r=t.stateNode,Ho(),Ee(Tt),Ee(ut),Fu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(cl(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,on!==null&&(Zd(on),on=null))),Bd(e,t),ct(t),null;case 5:zu(t);var a=Fr(ls.current);if(n=t.type,e!==null&&t.stateNode!=null)Em(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(M(166));return ct(t),null}if(e=Fr(jn.current),cl(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[vn]=t,r[as]=s,e=(t.mode&1)!==0,n){case"dialog":Te("cancel",r),Te("close",r);break;case"iframe":case"object":case"embed":Te("load",r);break;case"video":case"audio":for(a=0;a<_a.length;a++)Te(_a[a],r);break;case"source":Te("error",r);break;case"img":case"image":case"link":Te("error",r),Te("load",r);break;case"details":Te("toggle",r);break;case"input":uf(r,s),Te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Te("invalid",r);break;case"textarea":ff(r,s),Te("invalid",r)}ud(n,s),a=null;for(var l in s)if(s.hasOwnProperty(l)){var i=s[l];l==="children"?typeof i=="string"?r.textContent!==i&&(s.suppressHydrationWarning!==!0&&il(r.textContent,i,e),a=["children",i]):typeof i=="number"&&r.textContent!==""+i&&(s.suppressHydrationWarning!==!0&&il(r.textContent,i,e),a=["children",""+i]):Ga.hasOwnProperty(l)&&i!=null&&l==="onScroll"&&Te("scroll",r)}switch(n){case"input":el(r),pf(r,s,!0);break;case"textarea":el(r),hf(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Xl)}r=a,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=n2(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[vn]=t,e[as]=r,Tm(e,t,!1,!1),t.stateNode=e;e:{switch(l=pd(n,r),n){case"dialog":Te("cancel",e),Te("close",e),a=r;break;case"iframe":case"object":case"embed":Te("load",e),a=r;break;case"video":case"audio":for(a=0;a<_a.length;a++)Te(_a[a],e);a=r;break;case"source":Te("error",e),a=r;break;case"img":case"image":case"link":Te("error",e),Te("load",e),a=r;break;case"details":Te("toggle",e),a=r;break;case"input":uf(e,r),a=sd(e,r),Te("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=Be({},r,{value:void 0}),Te("invalid",e);break;case"textarea":ff(e,r),a=cd(e,r),Te("invalid",e);break;default:a=r}ud(n,a),i=a;for(s in i)if(i.hasOwnProperty(s)){var c=i[s];s==="style"?a2(e,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&r2(e,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Xa(e,c):typeof c=="number"&&Xa(e,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ga.hasOwnProperty(s)?c!=null&&s==="onScroll"&&Te("scroll",e):c!=null&&xu(e,s,c,l))}switch(n){case"input":el(e),pf(e,r,!1);break;case"textarea":el(e),hf(e);break;case"option":r.value!=null&&e.setAttribute("value",""+mr(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?Ro(e,!!r.multiple,s,!1):r.defaultValue!=null&&Ro(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Xl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ct(t),null;case 6:if(e&&t.stateNode!=null)Nm(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(M(166));if(n=Fr(ls.current),Fr(jn.current),cl(t)){if(r=t.stateNode,n=t.memoizedProps,r[vn]=t,(s=r.nodeValue!==n)&&(e=Ot,e!==null))switch(e.tag){case 3:il(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&il(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[vn]=t,t.stateNode=r}return ct(t),null;case 13:if(Ee(Me),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(De&&Dt!==null&&t.mode&1&&!(t.flags&128))Z2(),zo(),t.flags|=98560,s=!1;else if(s=cl(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(M(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(M(317));s[vn]=t}else zo(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ct(t),s=!1}else on!==null&&(Zd(on),on=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Me.current&1?Ge===0&&(Ge=3):Ju())),t.updateQueue!==null&&(t.flags|=4),ct(t),null);case 4:return Ho(),Bd(e,t),e===null&&rs(t.stateNode.containerInfo),ct(t),null;case 10:return Pu(t.type._context),ct(t),null;case 17:return Et(t.type)&&Ql(),ct(t),null;case 19:if(Ee(Me),s=t.memoizedState,s===null)return ct(t),null;if(r=(t.flags&128)!==0,l=s.rendering,l===null)if(r)fa(s,!1);else{if(Ge!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=oi(e),l!==null){for(t.flags|=128,fa(s,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,l=s.alternate,l===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=l.childLanes,s.lanes=l.lanes,s.child=l.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=l.memoizedProps,s.memoizedState=l.memoizedState,s.updateQueue=l.updateQueue,s.type=l.type,e=l.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return _e(Me,Me.current&1|2),t.child}e=e.sibling}s.tail!==null&&Ue()>Vo&&(t.flags|=128,r=!0,fa(s,!1),t.lanes=4194304)}else{if(!r)if(e=oi(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),fa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!l.alternate&&!De)return ct(t),null}else 2*Ue()-s.renderingStartTime>Vo&&n!==1073741824&&(t.flags|=128,r=!0,fa(s,!1),t.lanes=4194304);s.isBackwards?(l.sibling=t.child,t.child=l):(n=s.last,n!==null?n.sibling=l:t.child=l,s.last=l)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Ue(),t.sibling=null,n=Me.current,_e(Me,r?n&1|2:n&1),t):(ct(t),null);case 22:case 23:return qu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Rt&1073741824&&(ct(t),t.subtreeFlags&6&&(t.flags|=8192)):ct(t),null;case 24:return null;case 25:return null}throw Error(M(156,t.tag))}function H6(e,t){switch(Du(t),t.tag){case 1:return Et(t.type)&&Ql(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ho(),Ee(Tt),Ee(ut),Fu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return zu(t),null;case 13:if(Ee(Me),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(M(340));zo()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ee(Me),null;case 4:return Ho(),null;case 10:return Pu(t.type._context),null;case 22:case 23:return qu(),null;case 24:return null;default:return null}}var pl=!1,dt=!1,U6=typeof WeakSet=="function"?WeakSet:Set,F=null;function ko(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ze(e,t,r)}else n.current=null}function Id(e,t,n){try{n()}catch(r){ze(e,t,r)}}var rh=!1;function V6(e,t){if(bd=Kl,e=O2(),Lu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var l=0,i=-1,c=-1,d=0,u=0,p=e,m=null;t:for(;;){for(var y;p!==n||a!==0&&p.nodeType!==3||(i=l+a),p!==s||r!==0&&p.nodeType!==3||(c=l+r),p.nodeType===3&&(l+=p.nodeValue.length),(y=p.firstChild)!==null;)m=p,p=y;for(;;){if(p===e)break t;if(m===n&&++d===a&&(i=l),m===s&&++u===r&&(c=l),(y=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=y}n=i===-1||c===-1?null:{start:i,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Sd={focusedElem:e,selectionRange:n},Kl=!1,F=t;F!==null;)if(t=F,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,F=e;else for(;F!==null;){t=F;try{var b=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var C=b.memoizedProps,_=b.memoizedState,x=t.stateNode,f=x.getSnapshotBeforeUpdate(t.elementType===t.type?C:tn(t.type,C),_);x.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(M(163))}}catch(j){ze(t,t.return,j)}if(e=t.sibling,e!==null){e.return=t.return,F=e;break}F=t.return}return b=rh,rh=!1,b}function za(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var s=a.destroy;a.destroy=void 0,s!==void 0&&Id(t,n,s)}a=a.next}while(a!==r)}}function Oi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function zd(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Lm(e){var t=e.alternate;t!==null&&(e.alternate=null,Lm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[vn],delete t[as],delete t[kd],delete t[k6],delete t[T6])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Rm(e){return e.tag===5||e.tag===3||e.tag===4}function oh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Rm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Fd(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Xl));else if(r!==4&&(e=e.child,e!==null))for(Fd(e,t,n),e=e.sibling;e!==null;)Fd(e,t,n),e=e.sibling}function Hd(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Hd(e,t,n),e=e.sibling;e!==null;)Hd(e,t,n),e=e.sibling}var nt=null,nn=!1;function Qn(e,t,n){for(n=n.child;n!==null;)Dm(e,t,n),n=n.sibling}function Dm(e,t,n){if(yn&&typeof yn.onCommitFiberUnmount=="function")try{yn.onCommitFiberUnmount(_i,n)}catch{}switch(n.tag){case 5:dt||ko(n,t);case 6:var r=nt,a=nn;nt=null,Qn(e,t,n),nt=r,nn=a,nt!==null&&(nn?(e=nt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):nt.removeChild(n.stateNode));break;case 18:nt!==null&&(nn?(e=nt,n=n.stateNode,e.nodeType===8?kc(e.parentNode,n):e.nodeType===1&&kc(e,n),es(e)):kc(nt,n.stateNode));break;case 4:r=nt,a=nn,nt=n.stateNode.containerInfo,nn=!0,Qn(e,t,n),nt=r,nn=a;break;case 0:case 11:case 14:case 15:if(!dt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var s=a,l=s.destroy;s=s.tag,l!==void 0&&(s&2||s&4)&&Id(n,t,l),a=a.next}while(a!==r)}Qn(e,t,n);break;case 1:if(!dt&&(ko(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(i){ze(n,t,i)}Qn(e,t,n);break;case 21:Qn(e,t,n);break;case 22:n.mode&1?(dt=(r=dt)||n.memoizedState!==null,Qn(e,t,n),dt=r):Qn(e,t,n);break;default:Qn(e,t,n)}}function ah(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new U6),t.forEach(function(r){var a=J6.bind(null,e,r);n.has(r)||(n.add(r),r.then(a,a))})}}function en(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r];try{var s=e,l=t,i=l;e:for(;i!==null;){switch(i.tag){case 5:nt=i.stateNode,nn=!1;break e;case 3:nt=i.stateNode.containerInfo,nn=!0;break e;case 4:nt=i.stateNode.containerInfo,nn=!0;break e}i=i.return}if(nt===null)throw Error(M(160));Dm(s,l,a),nt=null,nn=!1;var c=a.alternate;c!==null&&(c.return=null),a.return=null}catch(d){ze(a,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Om(t,e),t=t.sibling}function Om(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(en(t,e),hn(e),r&4){try{za(3,e,e.return),Oi(3,e)}catch(C){ze(e,e.return,C)}try{za(5,e,e.return)}catch(C){ze(e,e.return,C)}}break;case 1:en(t,e),hn(e),r&512&&n!==null&&ko(n,n.return);break;case 5:if(en(t,e),hn(e),r&512&&n!==null&&ko(n,n.return),e.flags&32){var a=e.stateNode;try{Xa(a,"")}catch(C){ze(e,e.return,C)}}if(r&4&&(a=e.stateNode,a!=null)){var s=e.memoizedProps,l=n!==null?n.memoizedProps:s,i=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{i==="input"&&s.type==="radio"&&s.name!=null&&e2(a,s),pd(i,l);var d=pd(i,s);for(l=0;l<c.length;l+=2){var u=c[l],p=c[l+1];u==="style"?a2(a,p):u==="dangerouslySetInnerHTML"?r2(a,p):u==="children"?Xa(a,p):xu(a,u,p,d)}switch(i){case"input":ld(a,s);break;case"textarea":t2(a,s);break;case"select":var m=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?Ro(a,!!s.multiple,y,!1):m!==!!s.multiple&&(s.defaultValue!=null?Ro(a,!!s.multiple,s.defaultValue,!0):Ro(a,!!s.multiple,s.multiple?[]:"",!1))}a[as]=s}catch(C){ze(e,e.return,C)}}break;case 6:if(en(t,e),hn(e),r&4){if(e.stateNode===null)throw Error(M(162));a=e.stateNode,s=e.memoizedProps;try{a.nodeValue=s}catch(C){ze(e,e.return,C)}}break;case 3:if(en(t,e),hn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{es(t.containerInfo)}catch(C){ze(e,e.return,C)}break;case 4:en(t,e),hn(e);break;case 13:en(t,e),hn(e),a=e.child,a.flags&8192&&(s=a.memoizedState!==null,a.stateNode.isHidden=s,!s||a.alternate!==null&&a.alternate.memoizedState!==null||(Xu=Ue())),r&4&&ah(e);break;case 22:if(u=n!==null&&n.memoizedState!==null,e.mode&1?(dt=(d=dt)||u,en(t,e),dt=d):en(t,e),hn(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!u&&e.mode&1)for(F=e,u=e.child;u!==null;){for(p=F=u;F!==null;){switch(m=F,y=m.child,m.tag){case 0:case 11:case 14:case 15:za(4,m,m.return);break;case 1:ko(m,m.return);var b=m.stateNode;if(typeof b.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,b.props=t.memoizedProps,b.state=t.memoizedState,b.componentWillUnmount()}catch(C){ze(r,n,C)}}break;case 5:ko(m,m.return);break;case 22:if(m.memoizedState!==null){lh(p);continue}}y!==null?(y.return=m,F=y):lh(p)}u=u.sibling}e:for(u=null,p=e;;){if(p.tag===5){if(u===null){u=p;try{a=p.stateNode,d?(s=a.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(i=p.stateNode,c=p.memoizedProps.style,l=c!=null&&c.hasOwnProperty("display")?c.display:null,i.style.display=o2("display",l))}catch(C){ze(e,e.return,C)}}}else if(p.tag===6){if(u===null)try{p.stateNode.nodeValue=d?"":p.memoizedProps}catch(C){ze(e,e.return,C)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;u===p&&(u=null),p=p.return}u===p&&(u=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:en(t,e),hn(e),r&4&&ah(e);break;case 21:break;default:en(t,e),hn(e)}}function hn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Rm(n)){var r=n;break e}n=n.return}throw Error(M(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(Xa(a,""),r.flags&=-33);var s=oh(e);Hd(e,s,a);break;case 3:case 4:var l=r.stateNode.containerInfo,i=oh(e);Fd(e,i,l);break;default:throw Error(M(161))}}catch(c){ze(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function W6(e,t,n){F=e,Am(e)}function Am(e,t,n){for(var r=(e.mode&1)!==0;F!==null;){var a=F,s=a.child;if(a.tag===22&&r){var l=a.memoizedState!==null||pl;if(!l){var i=a.alternate,c=i!==null&&i.memoizedState!==null||dt;i=pl;var d=dt;if(pl=l,(dt=c)&&!d)for(F=a;F!==null;)l=F,c=l.child,l.tag===22&&l.memoizedState!==null?ih(a):c!==null?(c.return=l,F=c):ih(a);for(;s!==null;)F=s,Am(s),s=s.sibling;F=a,pl=i,dt=d}sh(e)}else a.subtreeFlags&8772&&s!==null?(s.return=a,F=s):sh(e)}}function sh(e){for(;F!==null;){var t=F;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:dt||Oi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!dt)if(n===null)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:tn(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Uf(t,s,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Uf(t,l,n)}break;case 5:var i=t.stateNode;if(n===null&&t.flags&4){n=i;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var u=d.memoizedState;if(u!==null){var p=u.dehydrated;p!==null&&es(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(M(163))}dt||t.flags&512&&zd(t)}catch(m){ze(t,t.return,m)}}if(t===e){F=null;break}if(n=t.sibling,n!==null){n.return=t.return,F=n;break}F=t.return}}function lh(e){for(;F!==null;){var t=F;if(t===e){F=null;break}var n=t.sibling;if(n!==null){n.return=t.return,F=n;break}F=t.return}}function ih(e){for(;F!==null;){var t=F;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Oi(4,t)}catch(c){ze(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var a=t.return;try{r.componentDidMount()}catch(c){ze(t,a,c)}}var s=t.return;try{zd(t)}catch(c){ze(t,s,c)}break;case 5:var l=t.return;try{zd(t)}catch(c){ze(t,l,c)}}}catch(c){ze(t,t.return,c)}if(t===e){F=null;break}var i=t.sibling;if(i!==null){i.return=t.return,F=i;break}F=t.return}}var Z6=Math.ceil,li=Un.ReactCurrentDispatcher,Yu=Un.ReactCurrentOwner,Ut=Un.ReactCurrentBatchConfig,ge=0,tt=null,We=null,rt=0,Rt=0,To=Cr(0),Ge=0,us=null,Gr=0,Ai=0,Gu=0,Fa=null,_t=null,Xu=0,Vo=1/0,Tn=null,ii=!1,Ud=null,pr=null,fl=!1,sr=null,ci=0,Ha=0,Vd=null,Al=-1,Ml=0;function gt(){return ge&6?Ue():Al!==-1?Al:Al=Ue()}function fr(e){return e.mode&1?ge&2&&rt!==0?rt&-rt:N6.transition!==null?(Ml===0&&(Ml=x2()),Ml):(e=Ce,e!==0||(e=window.event,e=e===void 0?16:w2(e.type)),e):1}function sn(e,t,n,r){if(50<Ha)throw Ha=0,Vd=null,Error(M(185));js(e,n,r),(!(ge&2)||e!==tt)&&(e===tt&&(!(ge&2)&&(Ai|=n),Ge===4&&or(e,rt)),Nt(e,r),n===1&&ge===0&&!(t.mode&1)&&(Vo=Ue()+500,Li&&br()))}function Nt(e,t){var n=e.callbackNode;N5(e,t);var r=Zl(e,e===tt?rt:0);if(r===0)n!==null&&xf(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&xf(n),t===1)e.tag===0?E6(ch.bind(null,e)):U2(ch.bind(null,e)),w6(function(){!(ge&6)&&br()}),n=null;else{switch(v2(r)){case 1:n=bu;break;case 4:n=m2;break;case 16:n=Wl;break;case 536870912:n=g2;break;default:n=Wl}n=Hm(n,Mm.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Mm(e,t){if(Al=-1,Ml=0,ge&6)throw Error(M(327));var n=e.callbackNode;if(Po()&&e.callbackNode!==n)return null;var r=Zl(e,e===tt?rt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=di(e,r);else{t=r;var a=ge;ge|=2;var s=$m();(tt!==e||rt!==t)&&(Tn=null,Vo=Ue()+500,Vr(e,t));do try{G6();break}catch(i){Pm(e,i)}while(1);Mu(),li.current=s,ge=a,We!==null?t=0:(tt=null,rt=0,t=Ge)}if(t!==0){if(t===2&&(a=xd(e),a!==0&&(r=a,t=Wd(e,a))),t===1)throw n=us,Vr(e,0),or(e,r),Nt(e,Ue()),n;if(t===6)or(e,r);else{if(a=e.current.alternate,!(r&30)&&!K6(a)&&(t=di(e,r),t===2&&(s=xd(e),s!==0&&(r=s,t=Wd(e,s))),t===1))throw n=us,Vr(e,0),or(e,r),Nt(e,Ue()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(M(345));case 2:$r(e,_t,Tn);break;case 3:if(or(e,r),(r&130023424)===r&&(t=Xu+500-Ue(),10<t)){if(Zl(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){gt(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=_d($r.bind(null,e,_t,Tn),t);break}$r(e,_t,Tn);break;case 4:if(or(e,r),(r&4194240)===r)break;for(t=e.eventTimes,a=-1;0<r;){var l=31-an(r);s=1<<l,l=t[l],l>a&&(a=l),r&=~s}if(r=a,r=Ue()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Z6(r/1960))-r,10<r){e.timeoutHandle=_d($r.bind(null,e,_t,Tn),r);break}$r(e,_t,Tn);break;case 5:$r(e,_t,Tn);break;default:throw Error(M(329))}}}return Nt(e,Ue()),e.callbackNode===n?Mm.bind(null,e):null}function Wd(e,t){var n=Fa;return e.current.memoizedState.isDehydrated&&(Vr(e,t).flags|=256),e=di(e,t),e!==2&&(t=_t,_t=n,t!==null&&Zd(t)),e}function Zd(e){_t===null?_t=e:_t.push.apply(_t,e)}function K6(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var a=n[r],s=a.getSnapshot;a=a.value;try{if(!ln(s(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function or(e,t){for(t&=~Gu,t&=~Ai,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-an(t),r=1<<n;e[n]=-1,t&=~r}}function ch(e){if(ge&6)throw Error(M(327));Po();var t=Zl(e,0);if(!(t&1))return Nt(e,Ue()),null;var n=di(e,t);if(e.tag!==0&&n===2){var r=xd(e);r!==0&&(t=r,n=Wd(e,r))}if(n===1)throw n=us,Vr(e,0),or(e,t),Nt(e,Ue()),n;if(n===6)throw Error(M(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,$r(e,_t,Tn),Nt(e,Ue()),null}function Qu(e,t){var n=ge;ge|=1;try{return e(t)}finally{ge=n,ge===0&&(Vo=Ue()+500,Li&&br())}}function Xr(e){sr!==null&&sr.tag===0&&!(ge&6)&&Po();var t=ge;ge|=1;var n=Ut.transition,r=Ce;try{if(Ut.transition=null,Ce=1,e)return e()}finally{Ce=r,Ut.transition=n,ge=t,!(ge&6)&&br()}}function qu(){Rt=To.current,Ee(To)}function Vr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,S6(n)),We!==null)for(n=We.return;n!==null;){var r=n;switch(Du(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ql();break;case 3:Ho(),Ee(Tt),Ee(ut),Fu();break;case 5:zu(r);break;case 4:Ho();break;case 13:Ee(Me);break;case 19:Ee(Me);break;case 10:Pu(r.type._context);break;case 22:case 23:qu()}n=n.return}if(tt=e,We=e=hr(e.current,null),rt=Rt=t,Ge=0,us=null,Gu=Ai=Gr=0,_t=Fa=null,zr!==null){for(t=0;t<zr.length;t++)if(n=zr[t],r=n.interleaved,r!==null){n.interleaved=null;var a=r.next,s=n.pending;if(s!==null){var l=s.next;s.next=a,r.next=l}n.pending=r}zr=null}return e}function Pm(e,t){do{var n=We;try{if(Mu(),Rl.current=si,ai){for(var r=$e.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}ai=!1}if(Yr=0,Je=Ke=$e=null,Ia=!1,is=0,Yu.current=null,n===null||n.return===null){Ge=1,us=t,We=null;break}e:{var s=e,l=n.return,i=n,c=t;if(t=rt,i.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,u=i,p=u.tag;if(!(u.mode&1)&&(p===0||p===11||p===15)){var m=u.alternate;m?(u.updateQueue=m.updateQueue,u.memoizedState=m.memoizedState,u.lanes=m.lanes):(u.updateQueue=null,u.memoizedState=null)}var y=Xf(l);if(y!==null){y.flags&=-257,Qf(y,l,i,s,t),y.mode&1&&Gf(s,d,t),t=y,c=d;var b=t.updateQueue;if(b===null){var C=new Set;C.add(c),t.updateQueue=C}else b.add(c);break e}else{if(!(t&1)){Gf(s,d,t),Ju();break e}c=Error(M(426))}}else if(De&&i.mode&1){var _=Xf(l);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Qf(_,l,i,s,t),Ou(Uo(c,i));break e}}s=c=Uo(c,i),Ge!==4&&(Ge=2),Fa===null?Fa=[s]:Fa.push(s),s=l;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var x=ym(s,c,t);Hf(s,x);break e;case 1:i=c;var f=s.type,h=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(pr===null||!pr.has(h)))){s.flags|=65536,t&=-t,s.lanes|=t;var j=jm(s,i,t);Hf(s,j);break e}}s=s.return}while(s!==null)}Im(n)}catch(S){t=S,We===n&&n!==null&&(We=n=n.return);continue}break}while(1)}function $m(){var e=li.current;return li.current=si,e===null?si:e}function Ju(){(Ge===0||Ge===3||Ge===2)&&(Ge=4),tt===null||!(Gr&268435455)&&!(Ai&268435455)||or(tt,rt)}function di(e,t){var n=ge;ge|=2;var r=$m();(tt!==e||rt!==t)&&(Tn=null,Vr(e,t));do try{Y6();break}catch(a){Pm(e,a)}while(1);if(Mu(),ge=n,li.current=r,We!==null)throw Error(M(261));return tt=null,rt=0,Ge}function Y6(){for(;We!==null;)Bm(We)}function G6(){for(;We!==null&&!j5();)Bm(We)}function Bm(e){var t=Fm(e.alternate,e,Rt);e.memoizedProps=e.pendingProps,t===null?Im(e):We=t,Yu.current=null}function Im(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=H6(n,t),n!==null){n.flags&=32767,We=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ge=6,We=null;return}}else if(n=F6(n,t,Rt),n!==null){We=n;return}if(t=t.sibling,t!==null){We=t;return}We=t=e}while(t!==null);Ge===0&&(Ge=5)}function $r(e,t,n){var r=Ce,a=Ut.transition;try{Ut.transition=null,Ce=1,X6(e,t,n,r)}finally{Ut.transition=a,Ce=r}return null}function X6(e,t,n,r){do Po();while(sr!==null);if(ge&6)throw Error(M(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(M(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(L5(e,s),e===tt&&(We=tt=null,rt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||fl||(fl=!0,Hm(Wl,function(){return Po(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ut.transition,Ut.transition=null;var l=Ce;Ce=1;var i=ge;ge|=4,Yu.current=null,V6(e,n),Om(n,e),g6(Sd),Kl=!!bd,Sd=bd=null,e.current=n,W6(n),C5(),ge=i,Ce=l,Ut.transition=s}else e.current=n;if(fl&&(fl=!1,sr=e,ci=a),s=e.pendingLanes,s===0&&(pr=null),w5(n.stateNode),Nt(e,Ue()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(ii)throw ii=!1,e=Ud,Ud=null,e;return ci&1&&e.tag!==0&&Po(),s=e.pendingLanes,s&1?e===Vd?Ha++:(Ha=0,Vd=e):Ha=0,br(),null}function Po(){if(sr!==null){var e=v2(ci),t=Ut.transition,n=Ce;try{if(Ut.transition=null,Ce=16>e?16:e,sr===null)var r=!1;else{if(e=sr,sr=null,ci=0,ge&6)throw Error(M(331));var a=ge;for(ge|=4,F=e.current;F!==null;){var s=F,l=s.child;if(F.flags&16){var i=s.deletions;if(i!==null){for(var c=0;c<i.length;c++){var d=i[c];for(F=d;F!==null;){var u=F;switch(u.tag){case 0:case 11:case 15:za(8,u,s)}var p=u.child;if(p!==null)p.return=u,F=p;else for(;F!==null;){u=F;var m=u.sibling,y=u.return;if(Lm(u),u===d){F=null;break}if(m!==null){m.return=y,F=m;break}F=y}}}var b=s.alternate;if(b!==null){var C=b.child;if(C!==null){b.child=null;do{var _=C.sibling;C.sibling=null,C=_}while(C!==null)}}F=s}}if(s.subtreeFlags&2064&&l!==null)l.return=s,F=l;else e:for(;F!==null;){if(s=F,s.flags&2048)switch(s.tag){case 0:case 11:case 15:za(9,s,s.return)}var x=s.sibling;if(x!==null){x.return=s.return,F=x;break e}F=s.return}}var f=e.current;for(F=f;F!==null;){l=F;var h=l.child;if(l.subtreeFlags&2064&&h!==null)h.return=l,F=h;else e:for(l=f;F!==null;){if(i=F,i.flags&2048)try{switch(i.tag){case 0:case 11:case 15:Oi(9,i)}}catch(S){ze(i,i.return,S)}if(i===l){F=null;break e}var j=i.sibling;if(j!==null){j.return=i.return,F=j;break e}F=i.return}}if(ge=a,br(),yn&&typeof yn.onPostCommitFiberRoot=="function")try{yn.onPostCommitFiberRoot(_i,e)}catch{}r=!0}return r}finally{Ce=n,Ut.transition=t}}return!1}function dh(e,t,n){t=Uo(n,t),t=ym(e,t,1),e=ur(e,t,1),t=gt(),e!==null&&(js(e,1,t),Nt(e,t))}function ze(e,t,n){if(e.tag===3)dh(e,e,n);else for(;t!==null;){if(t.tag===3){dh(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(pr===null||!pr.has(r))){e=Uo(n,e),e=jm(t,e,1),t=ur(t,e,1),e=gt(),t!==null&&(js(t,1,e),Nt(t,e));break}}t=t.return}}function Q6(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=gt(),e.pingedLanes|=e.suspendedLanes&n,tt===e&&(rt&n)===n&&(Ge===4||Ge===3&&(rt&130023424)===rt&&500>Ue()-Xu?Vr(e,0):Gu|=n),Nt(e,t)}function zm(e,t){t===0&&(e.mode&1?(t=rl,rl<<=1,!(rl&130023424)&&(rl=4194304)):t=1);var n=gt();e=Bn(e,t),e!==null&&(js(e,t,n),Nt(e,n))}function q6(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),zm(e,n)}function J6(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(M(314))}r!==null&&r.delete(t),zm(e,n)}var Fm;Fm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Tt.current)kt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return kt=!1,z6(e,t,n);kt=!!(e.flags&131072)}else kt=!1,De&&t.flags&1048576&&V2(t,ei,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ol(e,t),e=t.pendingProps;var a=Io(t,ut.current);Mo(t,n),a=Uu(null,t,r,e,a,n);var s=Vu();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Et(r)?(s=!0,ql(t)):s=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Bu(t),a.updater=Ri,t.stateNode=a,a._reactInternals=t,Dd(t,r,e,n),t=Md(null,t,r,!0,s,n)):(t.tag=0,De&&s&&Ru(t),mt(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ol(e,t),e=t.pendingProps,a=r._init,r=a(r._payload),t.type=r,a=t.tag=t8(r),e=tn(r,e),a){case 0:t=Ad(null,t,r,e,n);break e;case 1:t=eh(null,t,r,e,n);break e;case 11:t=qf(null,t,r,e,n);break e;case 14:t=Jf(null,t,r,tn(r.type,e),n);break e}throw Error(M(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:tn(r,a),Ad(e,t,r,a,n);case 1:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:tn(r,a),eh(e,t,r,a,n);case 3:e:{if(wm(t),e===null)throw Error(M(387));r=t.pendingProps,s=t.memoizedState,a=s.element,Y2(e,t),ri(t,r,null,n);var l=t.memoizedState;if(r=l.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){a=Uo(Error(M(423)),t),t=th(e,t,r,n,a);break e}else if(r!==a){a=Uo(Error(M(424)),t),t=th(e,t,r,n,a);break e}else for(Dt=dr(t.stateNode.containerInfo.firstChild),Ot=t,De=!0,on=null,n=q2(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(zo(),r===a){t=In(e,t,n);break e}mt(e,t,r,n)}t=t.child}return t;case 5:return J2(t),e===null&&Nd(t),r=t.type,a=t.pendingProps,s=e!==null?e.memoizedProps:null,l=a.children,wd(r,a)?l=null:s!==null&&wd(r,s)&&(t.flags|=32),Sm(e,t),mt(e,t,l,n),t.child;case 6:return e===null&&Nd(t),null;case 13:return _m(e,t,n);case 4:return Iu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Fo(t,null,r,n):mt(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:tn(r,a),qf(e,t,r,a,n);case 7:return mt(e,t,t.pendingProps,n),t.child;case 8:return mt(e,t,t.pendingProps.children,n),t.child;case 12:return mt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,s=t.memoizedProps,l=a.value,_e(ti,r._currentValue),r._currentValue=l,s!==null)if(ln(s.value,l)){if(s.children===a.children&&!Tt.current){t=In(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var i=s.dependencies;if(i!==null){l=s.child;for(var c=i.firstContext;c!==null;){if(c.context===r){if(s.tag===1){c=An(-1,n&-n),c.tag=2;var d=s.updateQueue;if(d!==null){d=d.shared;var u=d.pending;u===null?c.next=c:(c.next=u.next,u.next=c),d.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),Ld(s.return,n,t),i.lanes|=n;break}c=c.next}}else if(s.tag===10)l=s.type===t.type?null:s.child;else if(s.tag===18){if(l=s.return,l===null)throw Error(M(341));l.lanes|=n,i=l.alternate,i!==null&&(i.lanes|=n),Ld(l,n,t),l=s.sibling}else l=s.child;if(l!==null)l.return=s;else for(l=s;l!==null;){if(l===t){l=null;break}if(s=l.sibling,s!==null){s.return=l.return,l=s;break}l=l.return}s=l}mt(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,Mo(t,n),a=Wt(a),r=r(a),t.flags|=1,mt(e,t,r,n),t.child;case 14:return r=t.type,a=tn(r,t.pendingProps),a=tn(r.type,a),Jf(e,t,r,a,n);case 15:return Cm(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:tn(r,a),Ol(e,t),t.tag=1,Et(r)?(e=!0,ql(t)):e=!1,Mo(t,n),X2(t,r,a),Dd(t,r,a,n),Md(null,t,r,!0,e,n);case 19:return km(e,t,n);case 22:return bm(e,t,n)}throw Error(M(156,t.tag))};function Hm(e,t){return h2(e,t)}function e8(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ht(e,t,n,r){return new e8(e,t,n,r)}function ep(e){return e=e.prototype,!(!e||!e.isReactComponent)}function t8(e){if(typeof e=="function")return ep(e)?1:0;if(e!=null){if(e=e.$$typeof,e===yu)return 11;if(e===ju)return 14}return 2}function hr(e,t){var n=e.alternate;return n===null?(n=Ht(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Pl(e,t,n,r,a,s){var l=2;if(r=e,typeof e=="function")ep(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case xo:return Wr(n.children,a,s,t);case vu:l=8,a|=8;break;case nd:return e=Ht(12,n,t,a|2),e.elementType=nd,e.lanes=s,e;case rd:return e=Ht(13,n,t,a),e.elementType=rd,e.lanes=s,e;case od:return e=Ht(19,n,t,a),e.elementType=od,e.lanes=s,e;case Q1:return Mi(n,a,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case G1:l=10;break e;case X1:l=9;break e;case yu:l=11;break e;case ju:l=14;break e;case er:l=16,r=null;break e}throw Error(M(130,e==null?e:typeof e,""))}return t=Ht(l,n,t,a),t.elementType=e,t.type=r,t.lanes=s,t}function Wr(e,t,n,r){return e=Ht(7,e,r,t),e.lanes=n,e}function Mi(e,t,n,r){return e=Ht(22,e,r,t),e.elementType=Q1,e.lanes=n,e.stateNode={isHidden:!1},e}function Ac(e,t,n){return e=Ht(6,e,null,t),e.lanes=n,e}function Mc(e,t,n){return t=Ht(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function n8(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mc(0),this.expirationTimes=mc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mc(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function tp(e,t,n,r,a,s,l,i,c){return e=new n8(e,t,n,i,c),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Ht(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bu(s),e}function r8(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:go,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Um(e){if(!e)return gr;e=e._reactInternals;e:{if(to(e)!==e||e.tag!==1)throw Error(M(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Et(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(M(171))}if(e.tag===1){var n=e.type;if(Et(n))return H2(e,n,t)}return t}function Vm(e,t,n,r,a,s,l,i,c){return e=tp(n,r,!0,e,a,s,l,i,c),e.context=Um(null),n=e.current,r=gt(),a=fr(n),s=An(r,a),s.callback=t??null,ur(n,s,a),e.current.lanes=a,js(e,a,r),Nt(e,r),e}function Pi(e,t,n,r){var a=t.current,s=gt(),l=fr(a);return n=Um(n),t.context===null?t.context=n:t.pendingContext=n,t=An(s,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ur(a,t,l),e!==null&&(sn(e,a,l,s),Ll(e,a,l)),l}function ui(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function uh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function np(e,t){uh(e,t),(e=e.alternate)&&uh(e,t)}function o8(){return null}var Wm=typeof reportError=="function"?reportError:function(e){console.error(e)};function rp(e){this._internalRoot=e}$i.prototype.render=rp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(M(409));Pi(e,t,null,null)};$i.prototype.unmount=rp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Xr(function(){Pi(null,e,null,null)}),t[$n]=null}};function $i(e){this._internalRoot=e}$i.prototype.unstable_scheduleHydration=function(e){if(e){var t=C2();e={blockedOn:null,target:e,priority:t};for(var n=0;n<rr.length&&t!==0&&t<rr[n].priority;n++);rr.splice(n,0,e),n===0&&S2(e)}};function op(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Bi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ph(){}function a8(e,t,n,r,a){if(a){if(typeof r=="function"){var s=r;r=function(){var d=ui(l);s.call(d)}}var l=Vm(t,r,e,0,null,!1,!1,"",ph);return e._reactRootContainer=l,e[$n]=l.current,rs(e.nodeType===8?e.parentNode:e),Xr(),l}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var i=r;r=function(){var d=ui(c);i.call(d)}}var c=tp(e,0,!1,null,null,!1,!1,"",ph);return e._reactRootContainer=c,e[$n]=c.current,rs(e.nodeType===8?e.parentNode:e),Xr(function(){Pi(t,c,n,r)}),c}function Ii(e,t,n,r,a){var s=n._reactRootContainer;if(s){var l=s;if(typeof a=="function"){var i=a;a=function(){var c=ui(l);i.call(c)}}Pi(t,l,e,a)}else l=a8(n,t,e,a,r);return ui(l)}y2=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=wa(t.pendingLanes);n!==0&&(Su(t,n|1),Nt(t,Ue()),!(ge&6)&&(Vo=Ue()+500,br()))}break;case 13:Xr(function(){var r=Bn(e,1);if(r!==null){var a=gt();sn(r,e,1,a)}}),np(e,1)}};wu=function(e){if(e.tag===13){var t=Bn(e,134217728);if(t!==null){var n=gt();sn(t,e,134217728,n)}np(e,134217728)}};j2=function(e){if(e.tag===13){var t=fr(e),n=Bn(e,t);if(n!==null){var r=gt();sn(n,e,t,r)}np(e,t)}};C2=function(){return Ce};b2=function(e,t){var n=Ce;try{return Ce=e,t()}finally{Ce=n}};hd=function(e,t,n){switch(t){case"input":if(ld(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=Ni(r);if(!a)throw Error(M(90));J1(r),ld(r,a)}}}break;case"textarea":t2(e,n);break;case"select":t=n.value,t!=null&&Ro(e,!!n.multiple,t,!1)}};i2=Qu;c2=Xr;var s8={usingClientEntryPoint:!1,Events:[bs,Co,Ni,s2,l2,Qu]},ha={findFiberByHostInstance:Ir,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},l8={bundleType:ha.bundleType,version:ha.version,rendererPackageName:ha.rendererPackageName,rendererConfig:ha.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Un.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=p2(e),e===null?null:e.stateNode},findFiberByHostInstance:ha.findFiberByHostInstance||o8,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hl.isDisabled&&hl.supportsFiber)try{_i=hl.inject(l8),yn=hl}catch{}}Mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=s8;Mt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!op(t))throw Error(M(200));return r8(e,t,null,n)};Mt.createRoot=function(e,t){if(!op(e))throw Error(M(299));var n=!1,r="",a=Wm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=tp(e,1,!1,null,null,n,!1,r,a),e[$n]=t.current,rs(e.nodeType===8?e.parentNode:e),new rp(t)};Mt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(M(188)):(e=Object.keys(e).join(","),Error(M(268,e)));return e=p2(t),e=e===null?null:e.stateNode,e};Mt.flushSync=function(e){return Xr(e)};Mt.hydrate=function(e,t,n){if(!Bi(t))throw Error(M(200));return Ii(null,e,t,!0,n)};Mt.hydrateRoot=function(e,t,n){if(!op(e))throw Error(M(405));var r=n!=null&&n.hydratedSources||null,a=!1,s="",l=Wm;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Vm(t,null,e,1,n??null,a,!1,s,l),e[$n]=t.current,rs(e),r)for(e=0;e<r.length;e++)n=r[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new $i(t)};Mt.render=function(e,t,n){if(!Bi(t))throw Error(M(200));return Ii(null,e,t,!1,n)};Mt.unmountComponentAtNode=function(e){if(!Bi(e))throw Error(M(40));return e._reactRootContainer?(Xr(function(){Ii(null,null,e,!1,function(){e._reactRootContainer=null,e[$n]=null})}),!0):!1};Mt.unstable_batchedUpdates=Qu;Mt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Bi(n))throw Error(M(200));if(e==null||e._reactInternals===void 0)throw Error(M(38));return Ii(e,t,n,!1,r)};Mt.version="18.2.0-next-9e3b772b8-20220608";function Zm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Zm)}catch(e){console.error(e)}}Zm(),V1.exports=Mt;var Ln=V1.exports;const i8=Hn(Ln),c8=O1({__proto__:null,default:i8},[Ln]);var fh=Ln;ed.createRoot=fh.createRoot,ed.hydrateRoot=fh.hydrateRoot;function d8(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,s;for(s=0;s<r.length;s++)a=r[s],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function u8(e,t){if(e==null)return{};var n=d8(e,t),r,a;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Kd(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function p8(e){if(Array.isArray(e))return Kd(e)}function f8(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function h8(e,t){if(e){if(typeof e=="string")return Kd(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Kd(e,t)}}function m8(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function g8(e){return p8(e)||f8(e)||h8(e)||m8()}function ps(e){"@babel/helpers - typeof";return ps=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ps(e)}function x8(e,t){if(ps(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(ps(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function v8(e){var t=x8(e,"string");return ps(t)=="symbol"?t:String(t)}function Km(e,t,n){return t=v8(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Yd(){return Yd=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Yd.apply(this,arguments)}function hh(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Eo(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?hh(Object(n),!0).forEach(function(r){Km(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):hh(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function y8(e){var t=e.length;if(t===0||t===1)return e;if(t===2)return[e[0],e[1],"".concat(e[0],".").concat(e[1]),"".concat(e[1],".").concat(e[0])];if(t===3)return[e[0],e[1],e[2],"".concat(e[0],".").concat(e[1]),"".concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[0]),"".concat(e[1],".").concat(e[2]),"".concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[1],".").concat(e[0])];if(t>=4)return[e[0],e[1],e[2],e[3],"".concat(e[0],".").concat(e[1]),"".concat(e[0],".").concat(e[2]),"".concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[0]),"".concat(e[1],".").concat(e[2]),"".concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[1]),"".concat(e[2],".").concat(e[3]),"".concat(e[3],".").concat(e[0]),"".concat(e[3],".").concat(e[1]),"".concat(e[3],".").concat(e[2]),"".concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[1],".").concat(e[3]),"".concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[2],".").concat(e[3]),"".concat(e[0],".").concat(e[3],".").concat(e[1]),"".concat(e[0],".").concat(e[3],".").concat(e[2]),"".concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[1],".").concat(e[2],".").concat(e[3]),"".concat(e[1],".").concat(e[3],".").concat(e[0]),"".concat(e[1],".").concat(e[3],".").concat(e[2]),"".concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[0],".").concat(e[3]),"".concat(e[2],".").concat(e[1],".").concat(e[0]),"".concat(e[2],".").concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[3],".").concat(e[0]),"".concat(e[2],".").concat(e[3],".").concat(e[1]),"".concat(e[3],".").concat(e[0],".").concat(e[1]),"".concat(e[3],".").concat(e[0],".").concat(e[2]),"".concat(e[3],".").concat(e[1],".").concat(e[0]),"".concat(e[3],".").concat(e[1],".").concat(e[2]),"".concat(e[3],".").concat(e[2],".").concat(e[0]),"".concat(e[3],".").concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[1],".").concat(e[2],".").concat(e[3]),"".concat(e[0],".").concat(e[1],".").concat(e[3],".").concat(e[2]),"".concat(e[0],".").concat(e[2],".").concat(e[1],".").concat(e[3]),"".concat(e[0],".").concat(e[2],".").concat(e[3],".").concat(e[1]),"".concat(e[0],".").concat(e[3],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[3],".").concat(e[2],".").concat(e[1]),"".concat(e[1],".").concat(e[0],".").concat(e[2],".").concat(e[3]),"".concat(e[1],".").concat(e[0],".").concat(e[3],".").concat(e[2]),"".concat(e[1],".").concat(e[2],".").concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[2],".").concat(e[3],".").concat(e[0]),"".concat(e[1],".").concat(e[3],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[3],".").concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[0],".").concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[0],".").concat(e[3],".").concat(e[1]),"".concat(e[2],".").concat(e[1],".").concat(e[0],".").concat(e[3]),"".concat(e[2],".").concat(e[1],".").concat(e[3],".").concat(e[0]),"".concat(e[2],".").concat(e[3],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[3],".").concat(e[1],".").concat(e[0]),"".concat(e[3],".").concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[3],".").concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[3],".").concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[3],".").concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[3],".").concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[3],".").concat(e[2],".").concat(e[1],".").concat(e[0])]}var Pc={};function j8(e){if(e.length===0||e.length===1)return e;var t=e.join(".");return Pc[t]||(Pc[t]=y8(e)),Pc[t]}function C8(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,r=e.filter(function(s){return s!=="token"}),a=j8(r);return a.reduce(function(s,l){return Eo(Eo({},s),n[l])},t)}function mh(e){return e.join(" ")}function b8(e,t){var n=0;return function(r){return n+=1,r.map(function(a,s){return Ym({node:a,stylesheet:e,useInlineStyles:t,key:"code-segment-".concat(n,"-").concat(s)})})}}function Ym(e){var t=e.node,n=e.stylesheet,r=e.style,a=r===void 0?{}:r,s=e.useInlineStyles,l=e.key,i=t.properties,c=t.type,d=t.tagName,u=t.value;if(c==="text")return u;if(d){var p=b8(n,s),m;if(!s)m=Eo(Eo({},i),{},{className:mh(i.className)});else{var y=Object.keys(n).reduce(function(x,f){return f.split(".").forEach(function(h){x.includes(h)||x.push(h)}),x},[]),b=i.className&&i.className.includes("token")?["token"]:[],C=i.className&&b.concat(i.className.filter(function(x){return!y.includes(x)}));m=Eo(Eo({},i),{},{className:mh(C)||void 0,style:C8(i.className,Object.assign({},i.style,a),n)})}var _=p(t.children);return ee.createElement(d,Yd({key:l},m),_)}}const S8=function(e,t){var n=e.listLanguages();return n.indexOf(t)!==-1};var w8=["language","children","style","customStyle","codeTagProps","useInlineStyles","showLineNumbers","showInlineLineNumbers","startingLineNumber","lineNumberContainerStyle","lineNumberStyle","wrapLines","wrapLongLines","lineProps","renderer","PreTag","CodeTag","code","astGenerator"];function gh(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function xn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?gh(Object(n),!0).forEach(function(r){Km(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):gh(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var _8=/\n/g;function k8(e){return e.match(_8)}function T8(e){var t=e.lines,n=e.startingLineNumber,r=e.style;return t.map(function(a,s){var l=s+n;return ee.createElement("span",{key:"line-".concat(s),className:"react-syntax-highlighter-line-number",style:typeof r=="function"?r(l):r},"".concat(l,`
`))})}function E8(e){var t=e.codeString,n=e.codeStyle,r=e.containerStyle,a=r===void 0?{float:"left",paddingRight:"10px"}:r,s=e.numberStyle,l=s===void 0?{}:s,i=e.startingLineNumber;return ee.createElement("code",{style:Object.assign({},n,a)},T8({lines:t.replace(/\n$/,"").split(`
`),style:l,startingLineNumber:i}))}function N8(e){return"".concat(e.toString().length,".25em")}function Gm(e,t){return{type:"element",tagName:"span",properties:{key:"line-number--".concat(e),className:["comment","linenumber","react-syntax-highlighter-line-number"],style:t},children:[{type:"text",value:e}]}}function Xm(e,t,n){var r={display:"inline-block",minWidth:N8(n),paddingRight:"1em",textAlign:"right",userSelect:"none"},a=typeof e=="function"?e(t):e,s=xn(xn({},r),a);return s}function $l(e){var t=e.children,n=e.lineNumber,r=e.lineNumberStyle,a=e.largestLineNumber,s=e.showInlineLineNumbers,l=e.lineProps,i=l===void 0?{}:l,c=e.className,d=c===void 0?[]:c,u=e.showLineNumbers,p=e.wrapLongLines,m=typeof i=="function"?i(n):i;if(m.className=d,n&&s){var y=Xm(r,n,a);t.unshift(Gm(n,y))}return p&u&&(m.style=xn(xn({},m.style),{},{display:"flex"})),{type:"element",tagName:"span",properties:m,children:t}}function Qm(e){for(var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],r=0;r<e.length;r++){var a=e[r];if(a.type==="text")n.push($l({children:[a],className:g8(new Set(t))}));else if(a.children){var s=t.concat(a.properties.className);Qm(a.children,s).forEach(function(l){return n.push(l)})}}return n}function L8(e,t,n,r,a,s,l,i,c){var d,u=Qm(e.value),p=[],m=-1,y=0;function b(S,g){var w=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return $l({children:S,lineNumber:g,lineNumberStyle:i,largestLineNumber:l,showInlineLineNumbers:a,lineProps:n,className:w,showLineNumbers:r,wrapLongLines:c})}function C(S,g){if(r&&g&&a){var w=Xm(i,g,l);S.unshift(Gm(g,w))}return S}function _(S,g){var w=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return t||w.length>0?b(S,g,w):C(S,g)}for(var x=function(){var g=u[y],w=g.children[0].value,T=k8(w);if(T){var E=w.split(`
`);E.forEach(function(D,P){var Y=r&&p.length+s,Q={type:"text",value:"".concat(D,`
`)};if(P===0){var G=u.slice(m+1,y).concat($l({children:[Q],className:g.properties.className})),ne=_(G,Y);p.push(ne)}else if(P===E.length-1){var oe=u[y+1]&&u[y+1].children&&u[y+1].children[0],V={type:"text",value:"".concat(D)};if(oe){var O=$l({children:[V],className:g.properties.className});u.splice(y+1,0,O)}else{var B=[V],I=_(B,Y,g.properties.className);p.push(I)}}else{var H=[Q],W=_(H,Y,g.properties.className);p.push(W)}}),m=y}y++};y<u.length;)x();if(m!==u.length-1){var f=u.slice(m+1,u.length);if(f&&f.length){var h=r&&p.length+s,j=_(f,h);p.push(j)}}return t?p:(d=[]).concat.apply(d,p)}function R8(e){var t=e.rows,n=e.stylesheet,r=e.useInlineStyles;return t.map(function(a,s){return Ym({node:a,stylesheet:n,useInlineStyles:r,key:"code-segement".concat(s)})})}function qm(e){return e&&typeof e.highlightAuto<"u"}function D8(e){var t=e.astGenerator,n=e.language,r=e.code,a=e.defaultCodeValue;if(qm(t)){var s=S8(t,n);return n==="text"?{value:a,language:"text"}:s?t.highlight(n,r):t.highlightAuto(r)}try{return n&&n!=="text"?{value:t.highlight(r,n)}:{value:a}}catch{return{value:a}}}function O8(e,t){return function(r){var a=r.language,s=r.children,l=r.style,i=l===void 0?t:l,c=r.customStyle,d=c===void 0?{}:c,u=r.codeTagProps,p=u===void 0?{className:a?"language-".concat(a):void 0,style:xn(xn({},i['code[class*="language-"]']),i['code[class*="language-'.concat(a,'"]')])}:u,m=r.useInlineStyles,y=m===void 0?!0:m,b=r.showLineNumbers,C=b===void 0?!1:b,_=r.showInlineLineNumbers,x=_===void 0?!0:_,f=r.startingLineNumber,h=f===void 0?1:f,j=r.lineNumberContainerStyle,S=r.lineNumberStyle,g=S===void 0?{}:S,w=r.wrapLines,T=r.wrapLongLines,E=T===void 0?!1:T,D=r.lineProps,P=D===void 0?{}:D,Y=r.renderer,Q=r.PreTag,G=Q===void 0?"pre":Q,ne=r.CodeTag,oe=ne===void 0?"code":ne,V=r.code,O=V===void 0?(Array.isArray(s)?s[0]:s)||"":V,B=r.astGenerator,I=u8(r,w8);B=B||e;var H=C?ee.createElement(E8,{containerStyle:j,codeStyle:p.style||{},numberStyle:g,startingLineNumber:h,codeString:O}):null,W=i.hljs||i['pre[class*="language-"]']||{backgroundColor:"#fff"},be=qm(B)?"hljs":"prismjs",se=y?Object.assign({},I,{style:Object.assign({},W,d)}):Object.assign({},I,{className:I.className?"".concat(be," ").concat(I.className):be,style:Object.assign({},d)});if(E?p.style=xn(xn({},p.style),{},{whiteSpace:"pre-wrap"}):p.style=xn(xn({},p.style),{},{whiteSpace:"pre"}),!B)return ee.createElement(G,se,H,ee.createElement(oe,p,O));(w===void 0&&Y||E)&&(w=!0),Y=Y||R8;var je=[{type:"text",value:O}],ae=D8({astGenerator:B,language:a,code:O,defaultCodeValue:je});ae.language===null&&(ae.value=je);var Ne=ae.value.length+h,st=L8(ae,w,P,C,x,h,Ne,g,E);return ee.createElement(G,se,ee.createElement(oe,p,!x&&H,Y({rows:st,stylesheet:i,useInlineStyles:y})))}}var A8=P8,M8=Object.prototype.hasOwnProperty;function P8(){for(var e={},t=0;t<arguments.length;t++){var n=arguments[t];for(var r in n)M8.call(n,r)&&(e[r]=n[r])}return e}var Jm=e3,ap=e3.prototype;ap.space=null;ap.normal={};ap.property={};function e3(e,t,n){this.property=e,this.normal=t,n&&(this.space=n)}var xh=A8,$8=Jm,B8=I8;function I8(e){for(var t=e.length,n=[],r=[],a=-1,s,l;++a<t;)s=e[a],n.push(s.property),r.push(s.normal),l=s.space;return new $8(xh.apply(null,n),xh.apply(null,r),l)}var sp=z8;function z8(e){return e.toLowerCase()}var t3=n3,Yt=n3.prototype;Yt.space=null;Yt.attribute=null;Yt.property=null;Yt.boolean=!1;Yt.booleanish=!1;Yt.overloadedBoolean=!1;Yt.number=!1;Yt.commaSeparated=!1;Yt.spaceSeparated=!1;Yt.commaOrSpaceSeparated=!1;Yt.mustUseProperty=!1;Yt.defined=!1;function n3(e,t){this.property=e,this.attribute=t}var Cn={},F8=0;Cn.boolean=no();Cn.booleanish=no();Cn.overloadedBoolean=no();Cn.number=no();Cn.spaceSeparated=no();Cn.commaSeparated=no();Cn.commaOrSpaceSeparated=no();function no(){return Math.pow(2,++F8)}var r3=t3,vh=Cn,o3=lp;lp.prototype=new r3;lp.prototype.defined=!0;var a3=["boolean","booleanish","overloadedBoolean","number","commaSeparated","spaceSeparated","commaOrSpaceSeparated"],H8=a3.length;function lp(e,t,n,r){var a=-1,s;for(yh(this,"space",r),r3.call(this,e,t);++a<H8;)s=a3[a],yh(this,s,(n&vh[s])===vh[s])}function yh(e,t,n){n&&(e[t]=n)}var jh=sp,U8=Jm,V8=o3,ws=W8;function W8(e){var t=e.space,n=e.mustUseProperty||[],r=e.attributes||{},a=e.properties,s=e.transform,l={},i={},c,d;for(c in a)d=new V8(c,s(r,c),a[c],t),n.indexOf(c)!==-1&&(d.mustUseProperty=!0),l[c]=d,i[jh(c)]=c,i[jh(d.attribute)]=c;return new U8(l,i,t)}var Z8=ws,K8=Z8({space:"xlink",transform:Y8,properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}});function Y8(e,t){return"xlink:"+t.slice(5).toLowerCase()}var G8=ws,X8=G8({space:"xml",transform:Q8,properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function Q8(e,t){return"xml:"+t.slice(3).toLowerCase()}var q8=J8;function J8(e,t){return t in e?e[t]:t}var ev=q8,s3=tv;function tv(e,t){return ev(e,t.toLowerCase())}var nv=ws,rv=s3,ov=nv({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:rv,properties:{xmlns:null,xmlnsXLink:null}}),ip=Cn,av=ws,St=ip.booleanish,$t=ip.number,Mr=ip.spaceSeparated,sv=av({transform:lv,properties:{ariaActiveDescendant:null,ariaAtomic:St,ariaAutoComplete:null,ariaBusy:St,ariaChecked:St,ariaColCount:$t,ariaColIndex:$t,ariaColSpan:$t,ariaControls:Mr,ariaCurrent:null,ariaDescribedBy:Mr,ariaDetails:null,ariaDisabled:St,ariaDropEffect:Mr,ariaErrorMessage:null,ariaExpanded:St,ariaFlowTo:Mr,ariaGrabbed:St,ariaHasPopup:null,ariaHidden:St,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Mr,ariaLevel:$t,ariaLive:null,ariaModal:St,ariaMultiLine:St,ariaMultiSelectable:St,ariaOrientation:null,ariaOwns:Mr,ariaPlaceholder:null,ariaPosInSet:$t,ariaPressed:St,ariaReadOnly:St,ariaRelevant:null,ariaRequired:St,ariaRoleDescription:Mr,ariaRowCount:$t,ariaRowIndex:$t,ariaRowSpan:$t,ariaSelected:St,ariaSetSize:$t,ariaSort:null,ariaValueMax:$t,ariaValueMin:$t,ariaValueNow:$t,ariaValueText:null,role:null}});function lv(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}var Go=Cn,iv=ws,cv=s3,de=Go.boolean,dv=Go.overloadedBoolean,ma=Go.booleanish,ke=Go.number,ht=Go.spaceSeparated,ml=Go.commaSeparated,uv=iv({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:cv,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:ml,acceptCharset:ht,accessKey:ht,action:null,allow:null,allowFullScreen:de,allowPaymentRequest:de,allowUserMedia:de,alt:null,as:null,async:de,autoCapitalize:null,autoComplete:ht,autoFocus:de,autoPlay:de,capture:de,charSet:null,checked:de,cite:null,className:ht,cols:ke,colSpan:null,content:null,contentEditable:ma,controls:de,controlsList:ht,coords:ke|ml,crossOrigin:null,data:null,dateTime:null,decoding:null,default:de,defer:de,dir:null,dirName:null,disabled:de,download:dv,draggable:ma,encType:null,enterKeyHint:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:de,formTarget:null,headers:ht,height:ke,hidden:de,high:ke,href:null,hrefLang:null,htmlFor:ht,httpEquiv:ht,id:null,imageSizes:null,imageSrcSet:ml,inputMode:null,integrity:null,is:null,isMap:de,itemId:null,itemProp:ht,itemRef:ht,itemScope:de,itemType:ht,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:de,low:ke,manifest:null,max:null,maxLength:ke,media:null,method:null,min:null,minLength:ke,multiple:de,muted:de,name:null,nonce:null,noModule:de,noValidate:de,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforePrint:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextMenu:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:de,optimum:ke,pattern:null,ping:ht,placeholder:null,playsInline:de,poster:null,preload:null,readOnly:de,referrerPolicy:null,rel:ht,required:de,reversed:de,rows:ke,rowSpan:ke,sandbox:ht,scope:null,scoped:de,seamless:de,selected:de,shape:null,size:ke,sizes:null,slot:null,span:ke,spellCheck:ma,src:null,srcDoc:null,srcLang:null,srcSet:ml,start:ke,step:null,style:null,tabIndex:ke,target:null,title:null,translate:null,type:null,typeMustMatch:de,useMap:null,value:ma,width:ke,wrap:null,align:null,aLink:null,archive:ht,axis:null,background:null,bgColor:null,border:ke,borderColor:null,bottomMargin:ke,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:de,declare:de,event:null,face:null,frame:null,frameBorder:null,hSpace:ke,leftMargin:ke,link:null,longDesc:null,lowSrc:null,marginHeight:ke,marginWidth:ke,noResize:de,noHref:de,noShade:de,noWrap:de,object:null,profile:null,prompt:null,rev:null,rightMargin:ke,rules:null,scheme:null,scrolling:ma,standby:null,summary:null,text:null,topMargin:ke,valueType:null,version:null,vAlign:null,vLink:null,vSpace:ke,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:de,disableRemotePlayback:de,prefix:null,property:null,results:ke,security:null,unselectable:null}}),pv=B8,fv=K8,hv=X8,mv=ov,gv=sv,xv=uv,vv=pv([hv,fv,mv,gv,xv]),yv=sp,jv=o3,Cv=t3,cp="data",bv=_v,Sv=/^data[-\w.:]+$/i,l3=/-[a-z]/g,wv=/[A-Z]/g;function _v(e,t){var n=yv(t),r=t,a=Cv;return n in e.normal?e.property[e.normal[n]]:(n.length>4&&n.slice(0,4)===cp&&Sv.test(t)&&(t.charAt(4)==="-"?r=kv(t):t=Tv(t),a=jv),new a(r,t))}function kv(e){var t=e.slice(5).replace(l3,Nv);return cp+t.charAt(0).toUpperCase()+t.slice(1)}function Tv(e){var t=e.slice(4);return l3.test(t)?e:(t=t.replace(wv,Ev),t.charAt(0)!=="-"&&(t="-"+t),cp+t)}function Ev(e){return"-"+e.toLowerCase()}function Nv(e){return e.charAt(1).toUpperCase()}var Lv=Rv,Ch=/[#.]/g;function Rv(e,t){for(var n=e||"",r=t||"div",a={},s=0,l,i,c;s<n.length;)Ch.lastIndex=s,c=Ch.exec(n),l=n.slice(s,c?c.index:n.length),l&&(i?i==="#"?a.id=l:a.className?a.className.push(l):a.className=[l]:r=l,s+=l.length),c&&(i=c[0],s++);return{type:"element",tagName:r,properties:a,children:[]}}var dp={};dp.parse=Av;dp.stringify=Mv;var bh="",Dv=" ",Ov=/[ \t\n\r\f]+/g;function Av(e){var t=String(e||bh).trim();return t===bh?[]:t.split(Ov)}function Mv(e){return e.join(Dv).trim()}var up={};up.parse=Pv;up.stringify=$v;var Gd=",",Sh=" ",ka="";function Pv(e){for(var t=[],n=String(e||ka),r=n.indexOf(Gd),a=0,s=!1,l;!s;)r===-1&&(r=n.length,s=!0),l=n.slice(a,r).trim(),(l||!s)&&t.push(l),a=r+1,r=n.indexOf(Gd,a);return t}function $v(e,t){var n=t||{},r=n.padLeft===!1?ka:Sh,a=n.padRight?Sh:ka;return e[e.length-1]===ka&&(e=e.concat(ka)),e.join(a+Gd+r).trim()}var Bv=bv,wh=sp,Iv=Lv,_h=dp.parse,kh=up.parse,zv=Hv,Fv={}.hasOwnProperty;function Hv(e,t,n){var r=n?Kv(n):null;return a;function a(l,i){var c=Iv(l,t),d=Array.prototype.slice.call(arguments,2),u=c.tagName.toLowerCase(),p;if(c.tagName=r&&Fv.call(r,u)?r[u]:u,i&&Uv(i,c)&&(d.unshift(i),i=null),i)for(p in i)s(c.properties,p,i[p]);return i3(c.children,d),c.tagName==="template"&&(c.content={type:"root",children:c.children},c.children=[]),c}function s(l,i,c){var d,u,p;c==null||c!==c||(d=Bv(e,i),u=d.property,p=c,typeof p=="string"&&(d.spaceSeparated?p=_h(p):d.commaSeparated?p=kh(p):d.commaOrSpaceSeparated&&(p=_h(kh(p).join(" ")))),u==="style"&&typeof c!="string"&&(p=Zv(p)),u==="className"&&l.className&&(p=l.className.concat(p)),l[u]=Wv(d,u,p))}}function Uv(e,t){return typeof e=="string"||"length"in e||Vv(t.tagName,e)}function Vv(e,t){var n=t.type;return e==="input"||!n||typeof n!="string"?!1:typeof t.children=="object"&&"length"in t.children?!0:(n=n.toLowerCase(),e==="button"?n!=="menu"&&n!=="submit"&&n!=="reset"&&n!=="button":"value"in t)}function i3(e,t){var n,r;if(typeof t=="string"||typeof t=="number"){e.push({type:"text",value:String(t)});return}if(typeof t=="object"&&"length"in t){for(n=-1,r=t.length;++n<r;)i3(e,t[n]);return}if(typeof t!="object"||!("type"in t))throw new Error("Expected node, nodes, or string, got `"+t+"`");e.push(t)}function Wv(e,t,n){var r,a,s;if(typeof n!="object"||!("length"in n))return Th(e,t,n);for(a=n.length,r=-1,s=[];++r<a;)s[r]=Th(e,t,n[r]);return s}function Th(e,t,n){var r=n;return e.number||e.positiveNumber?!isNaN(r)&&r!==""&&(r=Number(r)):(e.boolean||e.overloadedBoolean)&&typeof r=="string"&&(r===""||wh(n)===wh(t))&&(r=!0),r}function Zv(e){var t=[],n;for(n in e)t.push([n,e[n]].join(": "));return t.join("; ")}function Kv(e){for(var t=e.length,n=-1,r={},a;++n<t;)a=e[n],r[a.toLowerCase()]=a;return r}var Yv=vv,Gv=zv,c3=Gv(Yv,"div");c3.displayName="html";var Xv=c3,Qv=Xv;const qv="Æ",Jv="&",e7="Á",t7="Â",n7="À",r7="Å",o7="Ã",a7="Ä",s7="©",l7="Ç",i7="Ð",c7="É",d7="Ê",u7="È",p7="Ë",f7=">",h7="Í",m7="Î",g7="Ì",x7="Ï",v7="<",y7="Ñ",j7="Ó",C7="Ô",b7="Ò",S7="Ø",w7="Õ",_7="Ö",k7='"',T7="®",E7="Þ",N7="Ú",L7="Û",R7="Ù",D7="Ü",O7="Ý",A7="á",M7="â",P7="´",$7="æ",B7="à",I7="&",z7="å",F7="ã",H7="ä",U7="¦",V7="ç",W7="¸",Z7="¢",K7="©",Y7="¤",G7="°",X7="÷",Q7="é",q7="ê",J7="è",e9="ð",t9="ë",n9="½",r9="¼",o9="¾",a9=">",s9="í",l9="î",i9="¡",c9="ì",d9="¿",u9="ï",p9="«",f9="<",h9="¯",m9="µ",g9="·",x9=" ",v9="¬",y9="ñ",j9="ó",C9="ô",b9="ò",S9="ª",w9="º",_9="ø",k9="õ",T9="ö",E9="¶",N9="±",L9="£",R9='"',D9="»",O9="®",A9="§",M9="­",P9="¹",$9="²",B9="³",I9="ß",z9="þ",F9="×",H9="ú",U9="û",V9="ù",W9="¨",Z9="ü",K9="ý",Y9="¥",G9="ÿ",X9={AElig:qv,AMP:Jv,Aacute:e7,Acirc:t7,Agrave:n7,Aring:r7,Atilde:o7,Auml:a7,COPY:s7,Ccedil:l7,ETH:i7,Eacute:c7,Ecirc:d7,Egrave:u7,Euml:p7,GT:f7,Iacute:h7,Icirc:m7,Igrave:g7,Iuml:x7,LT:v7,Ntilde:y7,Oacute:j7,Ocirc:C7,Ograve:b7,Oslash:S7,Otilde:w7,Ouml:_7,QUOT:k7,REG:T7,THORN:E7,Uacute:N7,Ucirc:L7,Ugrave:R7,Uuml:D7,Yacute:O7,aacute:A7,acirc:M7,acute:P7,aelig:$7,agrave:B7,amp:I7,aring:z7,atilde:F7,auml:H7,brvbar:U7,ccedil:V7,cedil:W7,cent:Z7,copy:K7,curren:Y7,deg:G7,divide:X7,eacute:Q7,ecirc:q7,egrave:J7,eth:e9,euml:t9,frac12:n9,frac14:r9,frac34:o9,gt:a9,iacute:s9,icirc:l9,iexcl:i9,igrave:c9,iquest:d9,iuml:u9,laquo:p9,lt:f9,macr:h9,micro:m9,middot:g9,nbsp:x9,not:v9,ntilde:y9,oacute:j9,ocirc:C9,ograve:b9,ordf:S9,ordm:w9,oslash:_9,otilde:k9,ouml:T9,para:E9,plusmn:N9,pound:L9,quot:R9,raquo:D9,reg:O9,sect:A9,shy:M9,sup1:P9,sup2:$9,sup3:B9,szlig:I9,thorn:z9,times:F9,uacute:H9,ucirc:U9,ugrave:V9,uml:W9,uuml:Z9,yacute:K9,yen:Y9,yuml:G9},Q9={0:"�",128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"};var d3=q9;function q9(e){var t=typeof e=="string"?e.charCodeAt(0):e;return t>=48&&t<=57}var J9=ey;function ey(e){var t=typeof e=="string"?e.charCodeAt(0):e;return t>=97&&t<=102||t>=65&&t<=70||t>=48&&t<=57}var ty=ny;function ny(e){var t=typeof e=="string"?e.charCodeAt(0):e;return t>=97&&t<=122||t>=65&&t<=90}var ry=ty,oy=d3,ay=sy;function sy(e){return ry(e)||oy(e)}var gl,ly=59,iy=cy;function cy(e){var t="&"+e+";",n;return gl=gl||document.createElement("i"),gl.innerHTML=t,n=gl.textContent,n.charCodeAt(n.length-1)===ly&&e!=="semi"||n===t?!1:n}var Eh=X9,Nh=Q9,dy=d3,uy=J9,u3=ay,py=iy,fy=ky,hy={}.hasOwnProperty,ho=String.fromCharCode,my=Function.prototype,Lh={warning:null,reference:null,text:null,warningContext:null,referenceContext:null,textContext:null,position:{},additional:null,attribute:!1,nonTerminated:!0},gy=9,Rh=10,xy=12,vy=32,Dh=38,yy=59,jy=60,Cy=61,by=35,Sy=88,wy=120,_y=65533,mo="named",pp="hexadecimal",fp="decimal",hp={};hp[pp]=16;hp[fp]=10;var zi={};zi[mo]=u3;zi[fp]=dy;zi[pp]=uy;var p3=1,f3=2,h3=3,m3=4,g3=5,Xd=6,x3=7,Sr={};Sr[p3]="Named character references must be terminated by a semicolon";Sr[f3]="Numeric character references must be terminated by a semicolon";Sr[h3]="Named character references cannot be empty";Sr[m3]="Numeric character references cannot be empty";Sr[g3]="Named character references must be known";Sr[Xd]="Numeric character references cannot be disallowed";Sr[x3]="Numeric character references cannot be outside the permissible Unicode range";function ky(e,t){var n={},r,a;t||(t={});for(a in Lh)r=t[a],n[a]=r??Lh[a];return(n.position.indent||n.position.start)&&(n.indent=n.position.indent||[],n.position=n.position.start),Ty(e,n)}function Ty(e,t){var n=t.additional,r=t.nonTerminated,a=t.text,s=t.reference,l=t.warning,i=t.textContext,c=t.referenceContext,d=t.warningContext,u=t.position,p=t.indent||[],m=e.length,y=0,b=-1,C=u.column||1,_=u.line||1,x="",f=[],h,j,S,g,w,T,E,D,P,Y,Q,G,ne,oe,V,O,B,I,H;for(typeof n=="string"&&(n=n.charCodeAt(0)),O=W(),D=l?be:my,y--,m++;++y<m;)if(w===Rh&&(C=p[b]||1),w=e.charCodeAt(y),w===Dh){if(E=e.charCodeAt(y+1),E===gy||E===Rh||E===xy||E===vy||E===Dh||E===jy||E!==E||n&&E===n){x+=ho(w),C++;continue}for(ne=y+1,G=ne,H=ne,E===by?(H=++G,E=e.charCodeAt(H),E===Sy||E===wy?(oe=pp,H=++G):oe=fp):oe=mo,h="",Q="",g="",V=zi[oe],H--;++H<m&&(E=e.charCodeAt(H),!!V(E));)g+=ho(E),oe===mo&&hy.call(Eh,g)&&(h=g,Q=Eh[g]);S=e.charCodeAt(H)===yy,S&&(H++,j=oe===mo?py(g):!1,j&&(h=g,Q=j)),I=1+H-ne,!S&&!r||(g?oe===mo?(S&&!Q?D(g3,1):(h!==g&&(H=G+h.length,I=1+H-G,S=!1),S||(P=h?p3:h3,t.attribute?(E=e.charCodeAt(H),E===Cy?(D(P,I),Q=null):u3(E)?Q=null:D(P,I)):D(P,I))),T=Q):(S||D(f3,I),T=parseInt(g,hp[oe]),Ey(T)?(D(x3,I),T=ho(_y)):T in Nh?(D(Xd,I),T=Nh[T]):(Y="",Ny(T)&&D(Xd,I),T>65535&&(T-=65536,Y+=ho(T>>>10|55296),T=56320|T&1023),T=Y+ho(T))):oe!==mo&&D(m3,I)),T?(se(),O=W(),y=H-1,C+=H-ne+1,f.push(T),B=W(),B.offset++,s&&s.call(c,T,{start:O,end:B},e.slice(ne-1,H)),O=B):(g=e.slice(ne-1,H),x+=g,C+=g.length,y=H-1)}else w===10&&(_++,b++,C=0),w===w?(x+=ho(w),C++):se();return f.join("");function W(){return{line:_,column:C,offset:y+(u.offset||0)}}function be(je,ae){var Ne=W();Ne.column+=ae,Ne.offset+=ae,l.call(d,Sr[je],Ne,je)}function se(){x&&(f.push(x),a&&a.call(i,x,{start:O,end:W()}),x="")}}function Ey(e){return e>=55296&&e<=57343||e>1114111}function Ny(e){return e>=1&&e<=8||e===11||e>=13&&e<=31||e>=127&&e<=159||e>=64976&&e<=65007||(e&65535)===65535||(e&65535)===65534}var v3={exports:{}};(function(e){var t=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=function(r){var a=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,s=0,l={},i={manual:r.Prism&&r.Prism.manual,disableWorkerMessageHandler:r.Prism&&r.Prism.disableWorkerMessageHandler,util:{encode:function f(h){return h instanceof c?new c(h.type,f(h.content),h.alias):Array.isArray(h)?h.map(f):h.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(f){return Object.prototype.toString.call(f).slice(8,-1)},objId:function(f){return f.__id||Object.defineProperty(f,"__id",{value:++s}),f.__id},clone:function f(h,j){j=j||{};var S,g;switch(i.util.type(h)){case"Object":if(g=i.util.objId(h),j[g])return j[g];S={},j[g]=S;for(var w in h)h.hasOwnProperty(w)&&(S[w]=f(h[w],j));return S;case"Array":return g=i.util.objId(h),j[g]?j[g]:(S=[],j[g]=S,h.forEach(function(T,E){S[E]=f(T,j)}),S);default:return h}},getLanguage:function(f){for(;f;){var h=a.exec(f.className);if(h)return h[1].toLowerCase();f=f.parentElement}return"none"},setLanguage:function(f,h){f.className=f.className.replace(RegExp(a,"gi"),""),f.classList.add("language-"+h)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(S){var f=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(S.stack)||[])[1];if(f){var h=document.getElementsByTagName("script");for(var j in h)if(h[j].src==f)return h[j]}return null}},isActive:function(f,h,j){for(var S="no-"+h;f;){var g=f.classList;if(g.contains(h))return!0;if(g.contains(S))return!1;f=f.parentElement}return!!j}},languages:{plain:l,plaintext:l,text:l,txt:l,extend:function(f,h){var j=i.util.clone(i.languages[f]);for(var S in h)j[S]=h[S];return j},insertBefore:function(f,h,j,S){S=S||i.languages;var g=S[f],w={};for(var T in g)if(g.hasOwnProperty(T)){if(T==h)for(var E in j)j.hasOwnProperty(E)&&(w[E]=j[E]);j.hasOwnProperty(T)||(w[T]=g[T])}var D=S[f];return S[f]=w,i.languages.DFS(i.languages,function(P,Y){Y===D&&P!=f&&(this[P]=w)}),w},DFS:function f(h,j,S,g){g=g||{};var w=i.util.objId;for(var T in h)if(h.hasOwnProperty(T)){j.call(h,T,h[T],S||T);var E=h[T],D=i.util.type(E);D==="Object"&&!g[w(E)]?(g[w(E)]=!0,f(E,j,null,g)):D==="Array"&&!g[w(E)]&&(g[w(E)]=!0,f(E,j,T,g))}}},plugins:{},highlightAll:function(f,h){i.highlightAllUnder(document,f,h)},highlightAllUnder:function(f,h,j){var S={callback:j,container:f,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};i.hooks.run("before-highlightall",S),S.elements=Array.prototype.slice.apply(S.container.querySelectorAll(S.selector)),i.hooks.run("before-all-elements-highlight",S);for(var g=0,w;w=S.elements[g++];)i.highlightElement(w,h===!0,S.callback)},highlightElement:function(f,h,j){var S=i.util.getLanguage(f),g=i.languages[S];i.util.setLanguage(f,S);var w=f.parentElement;w&&w.nodeName.toLowerCase()==="pre"&&i.util.setLanguage(w,S);var T=f.textContent,E={element:f,language:S,grammar:g,code:T};function D(Y){E.highlightedCode=Y,i.hooks.run("before-insert",E),E.element.innerHTML=E.highlightedCode,i.hooks.run("after-highlight",E),i.hooks.run("complete",E),j&&j.call(E.element)}if(i.hooks.run("before-sanity-check",E),w=E.element.parentElement,w&&w.nodeName.toLowerCase()==="pre"&&!w.hasAttribute("tabindex")&&w.setAttribute("tabindex","0"),!E.code){i.hooks.run("complete",E),j&&j.call(E.element);return}if(i.hooks.run("before-highlight",E),!E.grammar){D(i.util.encode(E.code));return}if(h&&r.Worker){var P=new Worker(i.filename);P.onmessage=function(Y){D(Y.data)},P.postMessage(JSON.stringify({language:E.language,code:E.code,immediateClose:!0}))}else D(i.highlight(E.code,E.grammar,E.language))},highlight:function(f,h,j){var S={code:f,grammar:h,language:j};if(i.hooks.run("before-tokenize",S),!S.grammar)throw new Error('The language "'+S.language+'" has no grammar.');return S.tokens=i.tokenize(S.code,S.grammar),i.hooks.run("after-tokenize",S),c.stringify(i.util.encode(S.tokens),S.language)},tokenize:function(f,h){var j=h.rest;if(j){for(var S in j)h[S]=j[S];delete h.rest}var g=new p;return m(g,g.head,f),u(f,g,h,g.head,0),b(g)},hooks:{all:{},add:function(f,h){var j=i.hooks.all;j[f]=j[f]||[],j[f].push(h)},run:function(f,h){var j=i.hooks.all[f];if(!(!j||!j.length))for(var S=0,g;g=j[S++];)g(h)}},Token:c};r.Prism=i;function c(f,h,j,S){this.type=f,this.content=h,this.alias=j,this.length=(S||"").length|0}c.stringify=function f(h,j){if(typeof h=="string")return h;if(Array.isArray(h)){var S="";return h.forEach(function(D){S+=f(D,j)}),S}var g={type:h.type,content:f(h.content,j),tag:"span",classes:["token",h.type],attributes:{},language:j},w=h.alias;w&&(Array.isArray(w)?Array.prototype.push.apply(g.classes,w):g.classes.push(w)),i.hooks.run("wrap",g);var T="";for(var E in g.attributes)T+=" "+E+'="'+(g.attributes[E]||"").replace(/"/g,"&quot;")+'"';return"<"+g.tag+' class="'+g.classes.join(" ")+'"'+T+">"+g.content+"</"+g.tag+">"};function d(f,h,j,S){f.lastIndex=h;var g=f.exec(j);if(g&&S&&g[1]){var w=g[1].length;g.index+=w,g[0]=g[0].slice(w)}return g}function u(f,h,j,S,g,w){for(var T in j)if(!(!j.hasOwnProperty(T)||!j[T])){var E=j[T];E=Array.isArray(E)?E:[E];for(var D=0;D<E.length;++D){if(w&&w.cause==T+","+D)return;var P=E[D],Y=P.inside,Q=!!P.lookbehind,G=!!P.greedy,ne=P.alias;if(G&&!P.pattern.global){var oe=P.pattern.toString().match(/[imsuy]*$/)[0];P.pattern=RegExp(P.pattern.source,oe+"g")}for(var V=P.pattern||P,O=S.next,B=g;O!==h.tail&&!(w&&B>=w.reach);B+=O.value.length,O=O.next){var I=O.value;if(h.length>f.length)return;if(!(I instanceof c)){var H=1,W;if(G){if(W=d(V,B,f,Q),!W||W.index>=f.length)break;var ae=W.index,be=W.index+W[0].length,se=B;for(se+=O.value.length;ae>=se;)O=O.next,se+=O.value.length;if(se-=O.value.length,B=se,O.value instanceof c)continue;for(var je=O;je!==h.tail&&(se<be||typeof je.value=="string");je=je.next)H++,se+=je.value.length;H--,I=f.slice(B,se),W.index-=B}else if(W=d(V,0,I,Q),!W)continue;var ae=W.index,Ne=W[0],st=I.slice(0,ae),jt=I.slice(ae+Ne.length),fe=B+I.length;w&&fe>w.reach&&(w.reach=fe);var Le=O.prev;st&&(Le=m(h,Le,st),B+=st.length),y(h,Le,H);var Qe=new c(T,Y?i.tokenize(Ne,Y):Ne,ne,Ne);if(O=m(h,Le,Qe),jt&&m(h,O,jt),H>1){var Lt={cause:T+","+D,reach:fe};u(f,h,j,O.prev,B,Lt),w&&Lt.reach>w.reach&&(w.reach=Lt.reach)}}}}}}function p(){var f={value:null,prev:null,next:null},h={value:null,prev:f,next:null};f.next=h,this.head=f,this.tail=h,this.length=0}function m(f,h,j){var S=h.next,g={value:j,prev:h,next:S};return h.next=g,S.prev=g,f.length++,g}function y(f,h,j){for(var S=h.next,g=0;g<j&&S!==f.tail;g++)S=S.next;h.next=S,S.prev=h,f.length-=g}function b(f){for(var h=[],j=f.head.next;j!==f.tail;)h.push(j.value),j=j.next;return h}if(!r.document)return r.addEventListener&&(i.disableWorkerMessageHandler||r.addEventListener("message",function(f){var h=JSON.parse(f.data),j=h.language,S=h.code,g=h.immediateClose;r.postMessage(i.highlight(S,i.languages[j],j)),g&&r.close()},!1)),i;var C=i.util.currentScript();C&&(i.filename=C.src,C.hasAttribute("data-manual")&&(i.manual=!0));function _(){i.manual||i.highlightAll()}if(!i.manual){var x=document.readyState;x==="loading"||x==="interactive"&&C&&C.defer?document.addEventListener("DOMContentLoaded",_):window.requestAnimationFrame?window.requestAnimationFrame(_):window.setTimeout(_,16)}return i}(t);e.exports&&(e.exports=n),typeof Fl<"u"&&(Fl.Prism=n)})(v3);var Ly=v3.exports,Ry=mp;mp.displayName="markup";mp.aliases=["html","mathml","svg","xml","ssml","atom","rss"];function mp(e){e.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},e.languages.markup.tag.inside["attr-value"].inside.entity=e.languages.markup.entity,e.languages.markup.doctype.inside["internal-subset"].inside=e.languages.markup,e.hooks.add("wrap",function(t){t.type==="entity"&&(t.attributes.title=t.content.value.replace(/&amp;/,"&"))}),Object.defineProperty(e.languages.markup.tag,"addInlined",{value:function(n,r){var a={};a["language-"+r]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:e.languages[r]},a.cdata=/^<!\[CDATA\[|\]\]>$/i;var s={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};s["language-"+r]={pattern:/[\s\S]+/,inside:e.languages[r]};var l={};l[n]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return n}),"i"),lookbehind:!0,greedy:!0,inside:s},e.languages.insertBefore("markup","cdata",l)}}),Object.defineProperty(e.languages.markup.tag,"addAttribute",{value:function(t,n){e.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+t+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[n,"language-"+n],inside:e.languages[n]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),e.languages.html=e.languages.markup,e.languages.mathml=e.languages.markup,e.languages.svg=e.languages.markup,e.languages.xml=e.languages.extend("markup",{}),e.languages.ssml=e.languages.xml,e.languages.atom=e.languages.xml,e.languages.rss=e.languages.xml}var y3=gp;gp.displayName="css";gp.aliases=[];function gp(e){(function(t){var n=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;t.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+n.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+n.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+n.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:n,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},t.languages.css.atrule.inside.rest=t.languages.css;var r=t.languages.markup;r&&(r.tag.addInlined("style","css"),r.tag.addAttribute("style","css"))})(e)}const Dy=Hn(y3);var Oy=xp;xp.displayName="clike";xp.aliases=[];function xp(e){e.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/}}var Ay=vp;vp.displayName="javascript";vp.aliases=["js"];function vp(e){e.languages.javascript=e.languages.extend("clike",{"class-name":[e.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),e.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,e.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:e.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:e.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:e.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:e.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:e.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),e.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:e.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),e.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),e.languages.markup&&(e.languages.markup.tag.addInlined("script","javascript"),e.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),e.languages.js=e.languages.javascript}var Ta=typeof globalThis=="object"?globalThis:typeof self=="object"?self:typeof window=="object"?window:typeof Fl=="object"?Fl:{},My=Qy();Ta.Prism={manual:!0,disableWorkerMessageHandler:!0};var Py=Qv,$y=fy,j3=Ly,By=Ry,Iy=y3,zy=Oy,Fy=Ay;My();var yp={}.hasOwnProperty;function C3(){}C3.prototype=j3;var Ze=new C3,Hy=Ze;Ze.highlight=Vy;Ze.register=_s;Ze.alias=Uy;Ze.registered=Wy;Ze.listLanguages=Zy;_s(By);_s(Iy);_s(zy);_s(Fy);Ze.util.encode=Gy;Ze.Token.stringify=Ky;function _s(e){if(typeof e!="function"||!e.displayName)throw new Error("Expected `function` for `grammar`, got `"+e+"`");Ze.languages[e.displayName]===void 0&&e(Ze)}function Uy(e,t){var n=Ze.languages,r=e,a,s,l,i;t&&(r={},r[e]=t);for(a in r)for(s=r[a],s=typeof s=="string"?[s]:s,l=s.length,i=-1;++i<l;)n[s[i]]=n[a]}function Vy(e,t){var n=j3.highlight,r;if(typeof e!="string")throw new Error("Expected `string` for `value`, got `"+e+"`");if(Ze.util.type(t)==="Object")r=t,t=null;else{if(typeof t!="string")throw new Error("Expected `string` for `name`, got `"+t+"`");if(yp.call(Ze.languages,t))r=Ze.languages[t];else throw new Error("Unknown language: `"+t+"` is not registered")}return n.call(this,e,r,t)}function Wy(e){if(typeof e!="string")throw new Error("Expected `string` for `language`, got `"+e+"`");return yp.call(Ze.languages,e)}function Zy(){var e=Ze.languages,t=[],n;for(n in e)yp.call(e,n)&&typeof e[n]=="object"&&t.push(n);return t}function Ky(e,t,n){var r;return typeof e=="string"?{type:"text",value:e}:Ze.util.type(e)==="Array"?Yy(e,t):(r={type:e.type,content:Ze.Token.stringify(e.content,t,n),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:n},e.alias&&(r.classes=r.classes.concat(e.alias)),Ze.hooks.run("wrap",r),Py(r.tag+"."+r.classes.join("."),Xy(r.attributes),r.content))}function Yy(e,t){for(var n=[],r=e.length,a=-1,s;++a<r;)s=e[a],s!==""&&s!==null&&s!==void 0&&n.push(s);for(a=-1,r=n.length;++a<r;)s=n[a],n[a]=Ze.Token.stringify(s,t,n);return n}function Gy(e){return e}function Xy(e){var t;for(t in e)e[t]=$y(e[t]);return e}function Qy(){var e="Prism"in Ta,t=e?Ta.Prism:void 0;return n;function n(){e?Ta.Prism=t:delete Ta.Prism,e=void 0,t=void 0}}const jp=Hn(Hy);var Cp=O8(jp,{});Cp.registerLanguage=function(e,t){return jp.register(t)};Cp.alias=function(e,t){return jp.alias(e,t)};const ro=Cp;var qy=bp;bp.displayName="bash";bp.aliases=["shell"];function bp(e){(function(t){var n="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",r={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},a={bash:r,environment:{pattern:RegExp("\\$"+n),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+n),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};t.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+n),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:a},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:r}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:a},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:a.entity}}],environment:{pattern:RegExp("\\$?"+n),alias:"constant"},variable:a.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},r.inside=t.languages.bash;for(var s=["comment","function-name","for-or-select","assign-left","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],l=a.variable[1].inside,i=0;i<s.length;i++)l[s[i]]=t.languages.bash[s[i]];t.languages.shell=t.languages.bash})(e)}const Jy=Hn(qy);var ej=Sp;Sp.displayName="json";Sp.aliases=["webmanifest"];function Sp(e){e.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},e.languages.webmanifest=e.languages.json}const tj=Hn(ej);var nj=wp;wp.displayName="jsx";wp.aliases=[];function wp(e){(function(t){var n=t.util.clone(t.languages.javascript),r=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,a=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,s=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function l(d,u){return d=d.replace(/<S>/g,function(){return r}).replace(/<BRACES>/g,function(){return a}).replace(/<SPREAD>/g,function(){return s}),RegExp(d,u)}s=l(s).source,t.languages.jsx=t.languages.extend("markup",n),t.languages.jsx.tag.pattern=l(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),t.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,t.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,t.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,t.languages.jsx.tag.inside.comment=n.comment,t.languages.insertBefore("inside","attr-name",{spread:{pattern:l(/<SPREAD>/.source),inside:t.languages.jsx}},t.languages.jsx.tag),t.languages.insertBefore("inside","special-attr",{script:{pattern:l(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:t.languages.jsx}}},t.languages.jsx.tag);var i=function(d){return d?typeof d=="string"?d:typeof d.content=="string"?d.content:d.content.map(i).join(""):""},c=function(d){for(var u=[],p=0;p<d.length;p++){var m=d[p],y=!1;if(typeof m!="string"&&(m.type==="tag"&&m.content[0]&&m.content[0].type==="tag"?m.content[0].content[0].content==="</"?u.length>0&&u[u.length-1].tagName===i(m.content[0].content[1])&&u.pop():m.content[m.content.length-1].content==="/>"||u.push({tagName:i(m.content[0].content[1]),openedBraces:0}):u.length>0&&m.type==="punctuation"&&m.content==="{"?u[u.length-1].openedBraces++:u.length>0&&u[u.length-1].openedBraces>0&&m.type==="punctuation"&&m.content==="}"?u[u.length-1].openedBraces--:y=!0),(y||typeof m=="string")&&u.length>0&&u[u.length-1].openedBraces===0){var b=i(m);p<d.length-1&&(typeof d[p+1]=="string"||d[p+1].type==="plain-text")&&(b+=i(d[p+1]),d.splice(p+1,1)),p>0&&(typeof d[p-1]=="string"||d[p-1].type==="plain-text")&&(b=i(d[p-1])+b,d.splice(p-1,1),p--),d[p]=new t.Token("plain-text",b,null,b)}m.content&&typeof m.content!="string"&&c(m.content)}};t.hooks.add("after-tokenize",function(d){d.language!=="jsx"&&d.language!=="tsx"||c(d.tokens)})})(e)}const rj=Hn(nj);var oj=_p;_p.displayName="scss";_p.aliases=[];function _p(e){e.languages.scss=e.languages.extend("css",{comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0},atrule:{pattern:/@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,inside:{rule:/@[\w-]+/}},url:/(?:[-a-z]+-)?url(?=\()/i,selector:{pattern:/(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,inside:{parent:{pattern:/&/,alias:"important"},placeholder:/%[-\w]+/,variable:/\$[-\w]+|#\{\$[-\w]+\}/}},property:{pattern:/(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,inside:{variable:/\$[-\w]+|#\{\$[-\w]+\}/}}}),e.languages.insertBefore("scss","atrule",{keyword:[/@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i,{pattern:/( )(?:from|through)(?= )/,lookbehind:!0}]}),e.languages.insertBefore("scss","important",{variable:/\$[-\w]+|#\{\$[-\w]+\}/}),e.languages.insertBefore("scss","function",{"module-modifier":{pattern:/\b(?:as|hide|show|with)\b/i,alias:"keyword"},placeholder:{pattern:/%[-\w]+/,alias:"selector"},statement:{pattern:/\B!(?:default|optional)\b/i,alias:"keyword"},boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"},operator:{pattern:/(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,lookbehind:!0}}),e.languages.scss.atrule.inside.rest=e.languages.scss}const aj=Hn(oj);var sj=kp;kp.displayName="yaml";kp.aliases=["yml"];function kp(e){(function(t){var n=/[*&][^\s[\]{},]+/,r=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,a="(?:"+r.source+"(?:[ 	]+"+n.source+")?|"+n.source+"(?:[ 	]+"+r.source+")?)",s=/(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g,function(){return/[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source}),l=/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;function i(c,d){d=(d||"").replace(/m/g,"")+"m";var u=/([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g,function(){return a}).replace(/<<value>>/g,function(){return c});return RegExp(u,d)}t.languages.yaml={scalar:{pattern:RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g,function(){return a})),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g,function(){return a}).replace(/<<key>>/g,function(){return"(?:"+s+"|"+l+")"})),lookbehind:!0,greedy:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:i(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),lookbehind:!0,alias:"number"},boolean:{pattern:i(/false|true/.source,"i"),lookbehind:!0,alias:"important"},null:{pattern:i(/null|~/.source,"i"),lookbehind:!0,alias:"important"},string:{pattern:i(l),lookbehind:!0,greedy:!0},number:{pattern:i(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source,"i"),lookbehind:!0},tag:r,important:n,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},t.languages.yml=t.languages.yaml})(e)}const lj=Hn(sj);function ij(e){return typeof e=="boolean"}function oo(e){return typeof e=="string"}function Tp(e){return typeof e=="number"}function b3(e){return Number.isInteger(e)}function Xo(e){return Array.isArray(e)}function Fi(e){return typeof e=="function"}function cj(e){return e instanceof RegExp}function Qo(e){return typeof e=="object"&&!Xo(e)&&!S3(e)}function dj(e){return e===void 0}function S3(e){return e===null}function ye(e){return!(dj(e)||S3(e))}function Hi(e){return!ye(e)}function w3(...e){throw new Error(e.join(""))}const _3=(e,...t)=>Fi(e)?e(...t):e;function Pe(){}function uj(){return Intl.DateTimeFormat().resolvedOptions().locale}let Ep={locale:uj(),currency:"GBP",currencySign:"£",thousands:","};const pj=(e,t,n=1)=>{const r=t<e?-Math.abs(n):n;return Array(1+Math.floor(Math.abs((t-e)/n))).fill(e).map((a,s)=>a+s*r)};function fj(e,t={}){return new Intl.NumberFormat(t.locale||Ep.locale,t).format(e)}function hj(e,t={}){return fj(e,{style:"currency",currency:Ep.currency,...t})}function Ea(e,t=Ep.thousands){if(Hi(e))return"";for(var n=e.toString().split("."),r=/(\d+)(\d{3})/;r.test(n[0]);)n[0]=n[0].replace(r,`$1${t}$2`);return n.join(".")}function mj(e,t=/,\s*|\s+/){return Hi(e)?[]:oo(e)?e.length?e.split(t):[]:Xo(e)?e:[e]}function fs(e,t=!0,n={}){return Qo(e)?e:mj(e).reduce((r,a)=>(r[a]=Fi(t)?t(a):t,r),n)}function k3(e){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()}const gj=k3;function xj(e){if(Fi(e))return e;if(cj(e))return t=>e.test(t);if(Qo(e))return t=>!!e[t];if(Xo(e)||oo(e)){const t=fs(e);return n=>!!t[n]}w3("Invalid selector() specification: "+e)}const Np=(e,t,n={})=>{let r={},a={delete:!1,...n};const s=xj(t);return Object.keys(e).map(l=>{if(s(l)){let i=e[l];a.delete&&delete e[l],a.key&&(l=a.key(l)),a.value&&(i=a.value(i)),r[l]=i}}),r},Oh=(e,t)=>parseInt(e[t]||0),Ah=(e,t)=>parseFloat(e[t]||0),Mh=(e,t)=>(e[t]||"").toString(),Ph=e=>(t,n)=>Oh(t,e)-Oh(n,e),$c=e=>(t,n)=>Ah(t,e)-Ah(n,e),$h=e=>(t,n)=>{let r=Mh(t,e).toLowerCase(),a=Mh(n,e).toLowerCase();return r>a?1:a>r?-1:0},vj=e=>(t,n)=>e(n,t);function yj(e,t=300){let n;return(...r)=>{clearTimeout(n),n=setTimeout(()=>e.apply(this,r),t)}}function Ui(e){return new Promise(t=>setTimeout(t,e))}ro.registerLanguage("jsx",rj);ro.registerLanguage("json",tj);ro.registerLanguage("css",Dy);ro.registerLanguage("scss",aj);ro.registerLanguage("bash",Jy);ro.registerLanguage("yaml",lj);const Rn=({code:e,language:t="jsx",caption:n,expand:r=!1,fixed:a=r,className:s="",highlightLines:l,lineProps:i,undent:c=!1})=>{const[d,u]=v.useState(!1),[p,m]=v.useState(r),y=()=>{navigator.clipboard.writeText(e),u(!0),Ui(2e3).then(()=>u(!1))};return o.jsxs("div",{className:`codeblock ${s} ${p?"expanded":""} ${a?"fixed-open":"expandable"}`,children:[!!n&&o.jsx("h4",{className:"caption",children:n}),o.jsxs("div",{className:"controls",children:[o.jsx("div",{className:"expand",onClick:()=>m(!p),children:p?"Compress":"Expand"}),o.jsx("div",{className:`clipboard ${d?"copied":""}`,onClick:y,children:d?"Copied":"Copy"})]}),o.jsx(ro,{language:t,showLineNumbers:!0,useInlineStyles:!1,wrapLines:!0,customStyle:{},children:jj(e,{undent:c})})]})},jj=(e,t={})=>{if(e=e.replace(/^[^]*?{?\/\*\s*START\s*\*\/}?\n/,"").replace(/[\n\s]*{?\/\*\s*END\s*\*\/}?[^]*/,"").replaceAll(/\/\/\s*PRETEND:\s/g,"").replaceAll(/{?\/\*\s*PRETEND:\s(.*?)\s+\*\/}?/g,"$1").replace(/\n+$/,""),t.undent){const n=new RegExp("^"+" ".repeat(t.undent),"gm");e=e.replaceAll(n,"")}return e},pe=({Component:e,code:t,html:n,children:r,className:a="",language:s,...l})=>o.jsxs("div",{className:`example grid-2 gap-8 stack-desktop ${a}`,children:[o.jsx("div",{className:"source",children:o.jsx(Rn,{code:t||n,language:n?"html":s,...l})}),!!r&&o.jsx("div",{className:"interim",children:r}),e?o.jsxs("div",{className:"output",children:[o.jsx("h4",{className:"caption",children:"Output"}),o.jsx(e,{})]}):null,n?o.jsxs("div",{className:"output",children:[o.jsx("h4",{className:"caption",children:"Output"}),o.jsx("div",{dangerouslySetInnerHTML:{__html:n}})]}):null]}),xl=v.createContext();function Bh(e){return typeof e=="function"}function Ih(e){return typeof e=="object"&&!T3(e)&&!Cj(e)}function T3(e){return Array.isArray(e)}function Cj(e){return e===null}function bj({context:e={},Implementation:t,spec:n=!1,props:r={},ref:a}){if(!n)return o.jsx(t,{...r,ref:a});let s={},l=Bh(n)?n(e):e[n];if(T3(l)&&(t=l[0],l=l[1]),Bh(l)){const i=l(r,a,e);if(ee.isValidElement(i))return i;Ih(i)&&Object.assign(s,r,i)}else Ih(l)?Object.assign(s,l,r):Object.assign(s,r);return o.jsx(t,{...s,ref:a})}const Sj=e=>({Context:xl,Provider:({children:t,...n})=>o.jsx(xl.Provider,{value:{...e,...n},children:t}),Consumer:t=>n=>o.jsx(xl.Consumer,{children:r=>o.jsx(t,{...r,...n,context:r})}),Component:(t,n=t.displayName||t.name)=>ee.forwardRef((r,a)=>o.jsx(xl.Consumer,{children:s=>o.jsx(bj,{Implementation:t,context:s,spec:n,props:r,ref:a})}))}),wj=Sj(),xe=wj.Component,_j="svg",Qd="-",E3="fill",kj="path",Tj="line",Ej="rect",Nj="array",Lj="circle",Rj="ellipse",Dj="polygon",Oj="polyline",Lp=/-(?!\d)/,zh="currentColor",Rp=512,Dp=512,ks={defaults:{width:512,height:512,type:"line"},icons:{alpha:"M102,448L256,64L410,448 M152,333L360,333",angle:"M448,336L256,144L64,336",angles:"M448,448L256,256L64,448M448,256L256,64L64,256",arrow:"M96,224L256,64L416,224M256,86L256,448",arrows:"M144,144L256,32L368,144M368,368L256,480L144,368M256,56L256,456",asterisk:"M76,152L436,360M76,360L436,152M256,48L256,464",at:"M256,160C309,160 352,203 352,256C352,309 309,352 256,352C203,352 160,309 160,256C160,203 203,160 256,160M256,480C132,480 32,380 32,256C32,132 132,32 256,32C380,32 480,132 480,256L480,288C480,323 451,352 416,352C381,352 352,323 352,288L352,176",ban:"M100,412L412,100 M256,32C380,32 480,132 480,255C480,379 380,480 256,480C132,480 32,379 32,255C32,132 132,32 256,32Z",bars:"M64,96L448,96M64,256L448,256M64,416L448,416",caret:"M448,336L256,144L64,336L448,336Z",check:"M48,248L192,392L464,120",circle:"circle:256 256 224",clipboard:"M192,80L80,80L80,496L432,496L432,80L320,80L320,112L192,112L192,80ZM256,16C282,16 304,38 304,64C304,90 282,112 256,112C230,112 208,90 208,64C208,38 230,16 256,16Z",cloud:"M480,293C480,234 437,177 362,196C346,161 319,116 240,120C180,124 139,165 125,224C121,223 116,223 111,223C68,223 32,260 32,307C32,354 68,392 111,392C120,392 366,392 380,392C462,392 480,335 480,293Z",cog:"M306,21L206,21L187,91L147,114L78,95L28,182L78,233L78,279L28,330L78,417L147,398L187,421L206,491L306,491L325,421L365,398L434,417L484,330L434,279L434,233L484,182L434,95L365,114L325,91L306,21Z M256,176C300,176 336,212 336,256C336,300 300,336 256,336C212,336 176,300 176,256C176,212 212,176 256,176Z",cross:"M112,112L400,400M400,112L112,400",drag:"M64,96L256,32L448,96M64,416L256,480L448,416M128,256L384,256",envelope:"M32,104L480,104L480,408L32,408L32,104M48,120L256,288L464,120M48,392L200,252M464,392L312,252",equals:"M96,320L416,320 M96,192L416,192",exclamation:"M256,96L256,310M254,416L258,416",eye:["M48,256C146,48 367,49 466,256M48,256C145,464 368,464 466,256","circle:256 256 64"],filter:"M64,32L448,32L448,128L305,271L304,432L208,496L208,272L64,128L64,32Z",folder:"M480,128L480,448L32,448L32,64L176,64L240,128L480,128Z",heart:"M256,128C298,48 382,48 424,88C466,128 466,208 424,288C394,348 319,408 256,448C193,408 118,348 88,288C46,208 46,128 88,88C130,48 214,48 256,128Z",hourglass:"M80,32L432,32M80,480L432,480M128,32C128,256 384,256 384,480M384,32C384,256 128,256 128,480",info:"M212,202L256,202L256,416M182,416L330,416M252,96L256,96",key:["M189,246C183,229 180,212 180,194C180,118 242,56 318,56C394,56 456,118 456,194C456,270 394,332 318,332C300,332 283,329 266,323L232,360L184,360L184,408L136,408L136,456L56,456L56,379L189,246Z","circle:344 168 8"],list:"M176,96L448,96M176,256L448,256M176,416L448,416M64,96L80,96M64,256L80,256M64,416L80,416",locked:["M144,224L144,166C144,105 195,54 256,54C317,54 368,105 368,166L368,224M256,320L256,368","rect:80 224 352 240 32 32"],login:"M192,128L320,256L192,384M304,256L64,256M320,64L448,64L448,448L320,448",logout:"M320,128L448,256L320,384M432,256L192,256M192,448L64,448L64,64L192,64",minus:"M96,256L416,256",mobile:["rect:128 48 256 416 32 32","M128,120L384,120M128,392L384,392"],number:"M256,448L256,64L176,128 M160,448L336,449",page:"M416,170L416,480L96,480L96,32L288,32L416,170M288,32L288,176L416,176",pen:"M482,143C491,134 491,120 482,112L401,30C392,21 378,21 369,30L72,326L22,489L186,439L482,143M305,93L418,206",phone:"M51,59C40,62 32,72 32,84C41,321 192,472 428,480C440,480 451,471 453,459C459,435 469,395 475,371C478,360 472,348 462,343C438,331 395,309 370,297C360,292 347,295 339,304C325,323 303,352 304,352C255,352 160,257 160,208C160,207 188,186 207,172C217,165 220,152 215,141C202,117 181,74 169,50C164,39 152,34 141,37C116,43 75,53 51,59Z",plus:"M256,96L256,416M96,256L416,256",point:"M464,192L256,16L48,192L128,192L128,480L384,480L384,192L464,192Z",prime:"M256,128L256,256",question:"M160,160C160,126 197,80 255,80C314,80 336,128 336,160C336,236 255,235 255,320 M255,416L256,416",rotate:"M392,120C356,84 307,64 256,64C150,64 64,150 64,256C64,362 150,448 256,448C303,448 349,430 384,399C349,430 303,448 256,448C150,448 64,362 64,256C64,150 150,64 256,64C307,64 356,84 392,120Z M352,208L480,208L480,80",search:"M204,32C300,32 384,111 384,208C384,305 305,384 208,384C111,384 32,305 32,208C32,111 107,32 204,32M480,480L332,332",slash:"M64,448L448,64",square:"rect:32 32 448 448",square10:"rect:32 32 448 448 45 45",square20:"rect:32 32 448 448 90 90",square30:"rect:32 32 448 448 135 135",square40:"rect:32 32 448 448 180 180",star:"M256,32L324,183L489,202L367,313L400,476L256,394L112,476L145,313L23,202L188,183L256,32Z",thumb:"M149,174L32,174L32,448L149,448L149,184 M149,217C277,160 246,36 282,38C372,44 324,192 324,192L440,192C462,192 480,210 480,232C480,254 462,272 440,272L368,272M424,272C446,272 464,290 464,312C464,334 446,352 424,352L352,352M392,352C414,352 432,370 432,392C432,414 414,432 392,432L256,432C220,432 149,409 149,409",time:"M256,128L256,256L336,336",trash:"M32,80L480,80 M80,80C80,80 100,344 109,452C111,477 131,496 156,496C211,496 301,496 356,496C381,496 401,477 403,452C412,344 432,80 432,80 M160,80L208,16L304,16L352,74",triangle:"M256,64L32,448L480,448L256,64Z",unlocked:["M144,224L144,166C144,105 195,54 256,54C304,54 346,85 361,128M256,320L256,368","rect:80 224 352 240 32 32"],user:"M256,32C302,32 340,70 340,116C340,162 302,208 256,208C210,208 172,162 172,116C172,70 210,32 256,32ZM448,412C448,361 410,320 363,320L148,320C102,320 64,361 64,412L64,480L448,480L448,412Z",vertical:"line:256,48 256,464",wrench:"M486,108C493,124 496,142 496,160C496,239 431,304 352,304C330,304 309,299 290,290L98,482C79,501 49,501 30,482C11,463 11,433 30,414L222,222C213,203 208,182 208,160C208,81 273,16 352,16C370,16 388,19 404,26L326,103L409,186L486,108Z"}};function Aj(e,t,n=ks){n.icons[e]=t}function Mj(e,t=ks){Object.entries(e).forEach(([n,r])=>Aj(n,r,t))}const vl=v.createContext();function Fh(e){return typeof e=="function"}function Hh(e){return typeof e=="object"&&!N3(e)&&!Pj(e)}function N3(e){return Array.isArray(e)}function Pj(e){return e===null}function $j({context:e={},Implementation:t,spec:n=!1,props:r={},ref:a}){if(!n)return o.jsx(t,{...r,ref:a});let s={},l=Fh(n)?n(e):e[n];if(N3(l)&&(t=l[0],l=l[1]),Fh(l)){const i=l(r,a,e);if(ee.isValidElement(i))return i;Hh(i)&&Object.assign(s,r,i)}else Hh(l)?Object.assign(s,l,r):Object.assign(s,r);return o.jsx(t,{...s,ref:a})}const Bj=e=>({Context:vl,Provider:({children:t,...n})=>o.jsx(vl.Provider,{value:{...e,...n},children:t}),Consumer:t=>n=>o.jsx(vl.Consumer,{children:r=>o.jsx(t,{...r,...n,context:r})}),Component:(t,n=t.displayName||t.name)=>ee.forwardRef((r,a)=>o.jsx(vl.Consumer,{children:s=>o.jsx($j,{Implementation:t,context:s,spec:n,props:r,ref:a})}))}),Ij=Bj(),zj=Ij.Component;function Vn(e){return typeof e=="string"}function Ts(e){return Array.isArray(e)}function Vi(e){return typeof e=="object"&&!Ts(e)&&!R3(e)}function L3(e){return e===void 0}function R3(e){return e===null}function Wi(e){return!(L3(e)||R3(e))}function D3(e){return!Wi(e)}function zn(...e){throw new Error(e.join(""))}function Fj(){return Intl.DateTimeFormat().resolvedOptions().locale}Fj();function qd(e,t=/,\s*|\s+/){return D3(e)?[]:Vn(e)?e.length?e.split(t):[]:Ts(e)?e:[e]}const Hj=(e,t)=>{const n=e[t];return delete e[t],n};function Es(e){return e.split(/\s*[;&]\s*/).filter(t=>t.length>0).reduce((t,n)=>{const[r,a]=n.split(/\s*[:=]\s*/);return t[r]=L3(a)?!0:a,t},{})}const Op=e=>e.filter(Wi).join(" "),Uj=e=>Object.entries(e).filter(([,t])=>t).map(([t])=>t),Vj=(...e)=>Op(e.flatMap(t=>Vi(t)?Uj(t):t)),Wj=e=>qd(e,/\s+/),O3={x:0,y:0,size:16,flipX:!1,flipY:!1,rotate:0},xr={flip:(e,t)=>{Vn(t)&&t.match(/^y$/i)?e.flipY=!e.flipY:e.flipX=!e.flipX},flipx:e=>e.flipX=!e.flipX,flipy:e=>e.flipY=!e.flipY,grow:(e,t)=>e.size+=parseFloat(t),shrink:(e,t)=>e.size-=parseFloat(t),left:(e,t)=>t===!0?e.rotate-=90:e.x-=parseFloat(t),right:(e,t)=>t===!0?e.rotate+=90:e.x+=parseFloat(t),up:(e,t)=>t===!0?e.rotate+=0:e.y-=parseFloat(t),down:(e,t)=>t===!0?e.rotate+=180:e.y+=parseFloat(t),rotate:(e,t)=>e.rotate+=parseInt(t)};xr.flop=xr.flipy;xr["flip-x"]=xr.flipx;xr["flip-y"]=xr.flipy;function A3(e,t={...O3}){const n=Vn(e)?Es(e):e||{};return Object.entries(n).reduce((r,[a,s])=>{const l=a.toLowerCase();return(xr[l]||zn(`Invalid transform: ${l}`))(r,s),r},t)}const Zj=4.42,kn=e=>`${Zj*e}%`,Kj={},Jd={outline:{fill:"none",stroke:"currentColor",strokeWidth:kn(2),strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"1.5"},solid:{fill:"currentColor",stroke:"none"},round:{strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"1.5"},square:{strokeLinecap:"square",strokeLinejoin:"miter",strokeMiterlimit:"1.5"},butt:{strokeLinecap:"butt"},bevel:{strokeLinejoin:"bevel"},thinnest:{strokeWidth:kn(.5)},thinner:{strokeWidth:kn(1)},thin:{strokeWidth:kn(1.5)},medium:{strokeWidth:kn(2)},thick:{strokeWidth:kn(2.5)},thicker:{strokeWidth:kn(3)},thickest:{strokeWidth:kn(3.5)}};Jd.line=Jd.outline;const Yj={...Object.entries(Jd).reduce((e,[t,n])=>(e[t]=r=>Object.assign(r,n),e),{}),fill:(e,t)=>e.fill=t===!0?zh:t,stroke:(e,t)=>e.stroke=t===!0?zh:t,nofill:e=>delete e.fill,nostroke:e=>delete e.stroke,strokewidth:(e,t)=>e.strokeWidth=t.match(/^[\d.]+$/)?kn(parseFloat(t)):t,opacity:(e,t)=>e.opacity=t,fillopacity:(e,t)=>e.fillOpacity=t,strokeopacity:(e,t)=>e.strokeOpacity=t,dasharray:(e,t)=>e.strokeDasharray=t,drawlength:(e,t)=>e["--draw-length"]=t,drawtime:(e,t)=>e["--draw-time"]=t,filltime:(e,t)=>e["--fill-time"]=t};function pi(e,t){return(Vn(t)?t.split(Lp):t).forEach(n=>{const[r,a=!0]=n.split(/[:=]/),s=r.toLowerCase(),l=Yj[s];if(l){l(e.style||(e.style={...Kj}),a);return}(xr[s]||zn(`Invalid style or transform: ${s}`))(e.transform||(e.transform={...O3}),a)})}const Gj={width:Rp,height:Dp,type:E3},M3={svg:e=>({element:_j,svg:e}),array:e=>({element:Nj,items:e}),path:e=>({element:kj,d:e}),polygon:e=>({element:Dj,points:e}),polyline:e=>({element:Oj,points:e}),circle:e=>({element:Lj,...yl(e,"cx cy r")}),ellipse:e=>({element:Rj,...yl(e,"cx cy rx ry")}),line:e=>({element:Tj,...yl(e,"x1 y1 x2 y2")}),rect:e=>({element:Ej,...yl(e,"x y width height rx ry")})};function yl(e,t){const n=Ts(t)?[...t]:qd(t);return qd(e).reduce((r,a)=>{if(n.length){const s=n.shift();r[s]=a}return r},{})}const P3=e=>{const[t,n=""]=e.split("?"),[r,...a]=t.split(/\.(?!\d)/),s=r.split(Lp).filter(i=>i.length),l=Es(n);return{dashes:s,classes:a,style:l}},Xj=(e,t)=>{const n=P3(e),{dashes:r}=n;for(let a=r.length;a>0;a--){const s=r.slice(0,a).join(Qd);if(t[s]){n.name=r.splice(0,a).join(Qd);break}}return n},Uh=(e,t,n={})=>{const{icons:r}=t,a=Xj(e,r),{name:s,classes:l,style:i,dashes:c}=a;D3(s)&&zn(`No icon found matching any leading subset of ${a.dashes.join(Qd)}`);const d=t.icons[s]||zn(`Icon not found in data: ${s}`),u=$3(d,t,{...n,name:s});if((l.length||n.className)&&(u.className=Op([...l||[],n.className])),u.transform&&(u.transform=A3(u.transform)),u.style&&(u.style=Vn(u.style)?Es(u.style):{...u.style}),u.type){const p=u.style&&{...u.style};pi(u,u.type),delete u.type,p&&Object.assign(u.style,p)}return c.length&&pi(u,c),Object.keys(i).length&&(u.style=Object.assign(u.style||{},i)),u};function Qj(e){const t=e.match(/^(.*?):(.*)/);return t?{path:t[2],type:t[1]}:{path:e}}const $3=(e,t,n={})=>{const{defaults:r={}}=t,a={...Gj,...r,...n};return B3(a,e,t)},B3=(e,t,n)=>{if(Vn(t))return qj(e,t);if(Vi(t))return Jj(e,t,n);if(Ts(t))return eC(e,t,n);zn(`Cannot parse icon data: ${t}`)};function qj(e,t){if(t.match(/^\w*</))return e.body={element:"svg",svg:t},e;const n=t.match(/^(.*?):(.*)/);if(n){const[,r,a]=n,{dashes:s,classes:l}=P3(r),i=s.shift(),c=M3[i]||zn(`Invalid icon data element: ${i}`);return e.body=c(a),l.length&&(e.body.className=Op(l)),s.length&&pi(e.body,s),e}return e.body={element:"path",d:t},e}function Jj(e,t,n){const r={...t};if(r.element)return e.body=r,e;if(r.data){const a=Hj(r,"data");return B3(e,a,n),Object.assign(e,r),e}for(let a of Object.entries(M3)){const[s,l]=a,i=r[s];if(Wi(i))return e.body=l(i),delete r[s],Object.assign(e,r),e}zn(`Cannot parse icon data: ${JSON.stringify(t)}`)}function eC(e,t,n){return e.body={element:"array",items:t.map(r=>$3(r,n).body)},e}const tC=({size:e,...t})=>{t.width??(t.width=e||Rp),t.height??(t.height=e||Dp),t.path&&Object.assign(t,Qj(t.path));let n;return t.style&&(Vn(t.style)?(n=Es(t.style),t.style={}):n={...t.style}),pi(t,t.type?t.type.split(Lp).filter(r=>r.length):E3),delete t.type,t.style&&n&&Object.assign(t.style,n),t.transform&&(t.transform=A3(t.transform)),t},Ap=e=>Vi(e)?Object.entries(e).reduce((t,[n,r])=>(t[n.replace(/(?!-)-./g,a=>a[1].toUpperCase())]=r,t),{}):e,nC=e=>Wi(e)?Ap(Es(e)):null,Wn=({style:e,class:t,...n})=>({style:Vn(e)?nC(e):Ap(e),className:t,...n}),rC=e=>o.jsx("circle",{...Wn(e)}),oC=e=>o.jsx("ellipse",{...Wn(e)}),aC=e=>o.jsx("line",{...Wn(e)}),I3=e=>o.jsx("path",{...Wn(e)}),sC=e=>o.jsx("polygon",{...Wn(e)}),lC=e=>o.jsx("polyline",{...Wn(e)}),iC=e=>o.jsx("rect",{...Wn(e)}),cC=({svg:e,...t})=>o.jsx("g",{dangerouslySetInnerHTML:{__html:e},...Wn(t)}),dC=({items:e,...t})=>o.jsx("g",{...Wn(t),children:e.map((n,r)=>o.jsx(fi,{body:n},r))}),uC={array:dC,circle:rC,ellipse:oC,line:aC,path:I3,polygon:sC,polyline:lC,rect:iC,svg:cC},fi=({path:e,body:t,...n})=>{if(e)return o.jsx(I3,{d:e,...n});if(Vn(t))return o.jsx("g",{dangerouslySetInnerHTML:{__html:t}});if(Vi(t)){const{element:r,...a}=t,s=uC[r]||zn(`Invalid element type: ${r} => `,JSON.stringify(t));return o.jsx(s,{...a})}if(Ts(t))return t.map((r,a)=>o.jsx(fi,{body:r},a));zn(`Don't know how to handle body: ${t}`)};function pC({width:e,height:t,transform:n,children:r}){const a=e/2,s=t/2,l=n.x*e/16,i=n.y*t/16,c=n.size/16*(n.flipX?-1:1),d=n.size/16*(n.flipY?-1:1),u=n.rotate;return o.jsx("g",{transform:`translate(${a} ${s})`,children:o.jsx("g",{transform:`translate(${l}, ${i}) scale(${c}, ${d}) rotate(${u} 0 0)`,children:o.jsx("g",{transform:`translate(-${a} -${s})`,children:r})})})}const Bc=({onClick:e,minx:t=0,miny:n=0,width:r=Rp,height:a=Dp,style:s,transform:l,className:i="",debug:c,...d})=>o.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",role:"img","aria-hidden":"true",focusable:"false",viewBox:`${t} ${n} ${r} ${a}`,className:`${i} icon`,style:Ap(s),onClick:e,children:[!!c&&console.log("style: ",s),l?o.jsx(pC,{width:r,height:a,transform:l,children:o.jsx(fi,{...d})}):o.jsx(fi,{...d})]}),fC=({name:e,iconsClass:t="icons",library:n=ks,...r})=>{if(!e)return o.jsx(Bc,{...tC(r)});const a=Wj(e);return a.length===1?o.jsx(Bc,{...r,...Uh(e,n,r)}):o.jsx("div",{className:Vj(t,r.className),children:a.map(s=>o.jsx(Bc,{...r,...Uh(s,n,r)},s))})},Bl=zj(fC,"Icon"),hC=e=>e.filter(ye).join(" "),mC=e=>Object.entries(e).filter(([,t])=>t).map(([t])=>t),we=(...e)=>hC(e.flatMap(t=>Qo(t)?mC(t):t)),gC=e=>{if(!e)return null;const[t,n,r,a,s]=e.split("-");return we(t,vC(n),yC(r),jC(a),CC(s))},xC=({className:e,size:t,color:n,...r})=>({...r,className:we(e,t,gC(n))}),Zi=e=>z3(e,"border",t=>`border bdw-${t}`),Mp=e=>z3(e,"shadow-1",t=>`shadow-${t}`),Pp=e=>Ns(e,t=>`bdr-${t}`),vC=e=>Ns(e,t=>`fgc-${t}`),yC=e=>Ns(e,t=>`bgc-${t}`),jC=e=>Ns(e,t=>`fgd-${t}`),CC=e=>Ns(e,t=>`bgd-${t}`),Ns=(e,t)=>b3(parseInt(e))?_3(t,e):null,z3=(e,t,n)=>e===!0?t:parseInt(e)?_3(n,e):null,J=e=>o.jsx(Bl,{...xC(e)});function Vh(e,t,n={}){return ye(t)&&(n[e]=b3(t)?`${t}deg`:t),Object.keys(n).length?n:null}const bC=({icon:e,iconClass:t,iconLeft:n,iconLeftClass:r="on-left",iconLeftRotate:a,iconRight:s,iconRightClass:l="on-right",iconRightRotate:i,text:c,children:d})=>o.jsxs(o.Fragment,{children:[!!e&&o.jsx(Bl,{name:e,className:t,fixedWidth:!0}),!!n&&o.jsx(Bl,{name:n,className:r,style:Vh("--icon-rotate",a),fixedWidth:!0}),c||d,!!s&&o.jsx(Bl,{name:s,className:l,style:Vh("--icon-rotate",i),fixedWidth:!0})]}),Ls=xe(bC,"WithIcons");Mj({github:"path-fill-stroke=none:M256,0C115,0 0,115 0,256C0,369 73,465 175,499C188,501 193,493 193,487C193,481 192,460 192,439C128,451 111,423 106,409C103,402 91,379 80,373C71,368 58,356 80,356C100,356 114,374 119,382C142,421 179,410 194,403C196,387 203,375 210,369C153,363 93,340 93,243C93,215 103,192 120,174C117,167 108,141 122,106C122,106 144,99 193,132C213,126 235,124 257,124C278,124 300,126 321,132C370,99 391,106 391,106C405,141 396,167 394,174C410,192 420,214 420,243C420,341 360,363 303,369C312,377 320,392 320,416C320,451 320,478 320,487C320,493 325,501 338,499C439,465 512,369 512,256C512,115 397,0 256,0Z"});const SC=({dismissable:e,dismiss:t,revealable:n,isRevealed:r,openIcon:a="angle-down",closedIcon:s="angle-left",dismissIcon:l="cross"})=>o.jsxs("div",{className:"on-right",children:[!!e&&o.jsx(J,{name:l,fixedWidth:!0,className:"dismiss",onClick:()=>t(!0)}),!!n&&o.jsx(J,{name:r?a:s,fixedWidth:!0,className:"reveal"})]}),F3=xe(SC,"AlertControls"),wC=({headline:e,headIcon:t,toggle:n,revealable:r=!1,controlProps:a,Controls:s=F3})=>o.jsxs("div",{className:"headline flex space",onClick:r?n:null,children:[o.jsxs("div",{children:[!!t&&o.jsx(J,{name:t,fixedWidth:!0,className:"on-left"}),e]}),o.jsx(s,{...a})]}),_C=xe(wC,"AlertHeadline"),kC=({title:e,text:t,children:n})=>o.jsxs(o.Fragment,{children:[e&&o.jsx("h3",{children:e}),t?o.jsx("p",{children:t}):n]}),H3=xe(kC,"AlertContent"),TC=({icon:e,Content:t=H3,...n})=>o.jsxs("div",{className:"side-icon",children:[o.jsx(J,{name:e}),o.jsx("div",{className:"wide",children:o.jsx(t,{...n})})]}),EC=xe(TC,"AlertIcon"),U3=e=>oo(e)||Tp(e)||ij(e),Rs=e=>U3(e)||!e.separator&&!e.heading&&!e.disabled,NC=e=>U3(e)?e:e.value??e.id,LC=(e,t,n=NC)=>{if(Hi(t))return[];const r=e.findIndex(a=>t===n(a));return r>=0?[e[r],r]:[]},RC=(e,t)=>{const n=e.toLowerCase().split(/\s+/);return t.filter(r=>{if(r.fixed)return!0;const a=r.search??r.text??r.label??r.name??r.value;if(ye(a)){const s=a.toString().toLowerCase();return n.every(l=>s.indexOf(l)>=0)}return!1})};function DC(e,t=Rs){const n=e.findIndex(t);return n<0?null:n}function OC(e,t=Rs){for(let n=e.length-1;n>=0;n--)if(t(e[n]))return n;return null}function AC(e,t,n=Rs){for(let r=1;r<=e.length;r++){const a=(t+r)%e.length;if(n(e[a]))return a}return null}function MC(e,t,n=Rs){for(let r=1;r<=e.length;r++){const a=(t+e.length-r)%e.length;if(n(e[a]))return a}return null}const Il="",$p="ArrowDown",Bp="ArrowUp",PC="Tab",Ki="Enter",Ip=" ",Yi="Escape",$C="Backspace",hi=e=>{const t=`HINT: define ${e}() to render this value`;return n=>oo(n)||Tp(n)?n:Qo(n)?n.text??n.label??n.name??t:t},BC=e=>oo(e)||Tp(e)?e:o.jsx(Ls,{...e}),V3=(e,t)=>{if(!e||!t)return;const n=t.offsetTop,r=n+t.offsetHeight,a=e.scrollTop,s=a+e.offsetHeight;n<a?e.scrollTo({top:n}):r>s&&e.scrollTo({top:a+(r-s)})},Zn=({title:e,headline:t,headIcon:n,type:r,size:a,color:s,stripe:l,border:i,radius:c,shadow:d,className:u,text:p,children:m,onDismiss:y,icon:b,dismissable:C=!1,revealable:_=!1,revealed:x=!1,openIcon:f,closedIcon:h,dismissIcon:j,Headline:S=_C,Controls:g=F3,Content:w=H3,Icon:T=EC})=>{const[E,D]=v.useState(_?x:!0),[P,Y]=v.useState(!1),Q=we("alert",r,a,s,u,{revealable:_,dismissable:C,stripe:l},E?"revealed":null,Mp(d),Zi(i),Pp(c)),G=()=>D(I=>!I),oe={dismissable:C,revealable:_,isRevealed:E,dismiss:()=>{Y(!0),y&&y()},openIcon:f,closedIcon:h,dismissIcon:j},V={title:e,text:p,children:m},O={...V,icon:b,Content:w},B={headline:t,headIcon:n,toggle:G,revealable:_,controlProps:oe,Controls:g};return P?null:o.jsxs("div",{className:Q,children:[!!t&&o.jsx(S,{...B}),E&&(b?o.jsx(T,{...O}):o.jsx(w,{...V}))]})},Na=xe(e=>o.jsx(Zn,{...e,type:"info"}),"Info"),La=xe(e=>o.jsx(Zn,{...e,type:"success"}),"Success"),Ra=xe(e=>o.jsx(Zn,{...e,type:"warning"}),"Warning"),Da=xe(e=>o.jsx(Zn,{...e,type:"error"}),"Error");Zn.Info=Na;Zn.Success=La;Zn.Warning=Ra;Zn.Error=Da;const q=xe(Zn,"Alert"),IC=({type:e="button",size:t,color:n,className:r,disabled:a,bright:s,dark:l,outline:i,bare:c,shaded:d,shadow:u,border:p,radius:m,label:y,tooltip:b,tabIndex:C=0,icon:_,iconClass:x,iconLeft:f,iconLeftClass:h,iconRight:j,iconRightClass:S,text:g,children:w,Content:T=Ls,...E})=>{const D=we(t,n,r,{bright:s,dark:l,outline:i,bare:c,shaded:d,icon:_},Mp(u),Zi(p),Pp(m)),P={icon:_,iconClass:x,iconLeft:f,iconLeftClass:h,iconRight:j,iconRightClass:S,text:g,children:w};return o.jsx("button",{className:D,"aria-label":y,tabIndex:C,type:e,disabled:a,"aria-disabled":a,"data-tooltip":b,...E,children:o.jsx(T,{...P})})},A=xe(IC,"Button"),zC=({buttons:e,children:t,className:n="buttons",buttonClass:r,Button:a=A,...s})=>o.jsx("div",{className:n,children:e?e.map((l,i)=>o.jsx(a,{className:r,...s,...l},i)):t}),ao=xe(zC,"Buttons"),FC=({className:e,disabled:t,children:n,ref:r})=>o.jsx("label",{className:we(e,{disabled:t}),ref:r,children:n}),HC=xe(FC,"CheckboxLabel"),UC=({disabled:e=!1,tabIndex:t=0,onChange:n=Pe,ref:r,...a})=>o.jsx("input",{type:"checkbox",ref:r,"aria-disabled":e,tabIndex:e?-1:t,onChange:s=>n(s.target.checked),...a}),VC=xe(UC,"CheckboxInput"),WC=({size:e,color:t,border:n,inline:r,className:a="checkbox",text:s,ref:l,inputRef:i,checked:c,checkedText:d=s,uncheckedText:u=s,inputClass:p,Label:m=HC,Input:y=VC,...b})=>o.jsxs(m,{className:we(e,t,a,Zi(n),{inline:r}),ref:l,checked:c,...b,children:[o.jsx(y,{className:p,ref:i,checked:c,...b}),c?d:u]}),bn=xe(WC,"Checkbox"),ZC=({checked:e=!1}={})=>{const[t,n]=v.useState(e);return{isChecked:t,setChecked:n,check:()=>n(!0),uncheck:()=>n(!1)}},KC=({checked:e=!1,onChange:t,...n})=>{const{isChecked:r,setChecked:a}=ZC({checked:e}),s=l=>{a(l),t&&t(l)};return o.jsx(bn,{checked:r,onChange:s,...n})},wr=({visible:e=!1}={})=>{const[t,n]=v.useState(e);return{isVisible:t,setVisible:n,show:()=>n(!0),hide:()=>n(!1)}},YC=({initiallyRevealed:e=!1,open:t=e,confirmIcon:n="check",confirmText:r="Confirm",confirmColor:a="red",confirmClass:s,cancelIcon:l="cross",cancelText:i="Cancel",cancelColor:c="grey",cancelClass:d,confirm:u={iconRight:n,text:r,color:a,className:s},cancel:p={iconLeft:l,text:i,color:c,className:d},buttonsClass:m,className:y=m,buttonClass:b,onClick:C=()=>window.alert("No confirm action defined"),..._})=>{const{isVisible:x,hide:f,show:h}=wr({visible:t}),S={iconRight:n,text:r,color:a,className:s,...u,onClick:w=>{w.preventDefault(),f(),C()}},g={iconLeft:l,text:i,color:c,className:d,outline:!0,...p,onClick:f};return o.jsx(ao,{className:y,buttonClass:b,buttons:x?[g,S]:[{..._,onClick:h}]})},Sn=xe(YC,"Confirm");var GC=Object.defineProperty,XC=(e,t,n)=>t in e?GC(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ic=(e,t,n)=>(XC(e,typeof t!="symbol"?t+"":t,n),n);const _r=(e,t={})=>{const n=ee.createContext(t);return{Context:n,Provider:r=>o.jsx(e,{...r,render:a=>o.jsx(n.Provider,{value:a,children:r.children})}),Consumer:r=>a=>o.jsx(n.Consumer,{children:s=>o.jsx(r,{...s,...a})}),Use:()=>ee.useContext(n)}};function QC(e={},t={},n={}){return Object.entries(t).reduce((r,[a,s])=>{const l=n[s];return l!==null&&typeof l<"u"&&(r[a]=l),r},{...e})}function qC(e,t=[]){return(typeof t=="string"?t.split(/,\s*|\s+/):t).reduce((n,r)=>{const a=e[r]||eb(`Cannot expose non-existent action method: ${r}`);return n[r]=a.bind(e),n},{})}function JC(e,t){const n=e.debug??t.debug,r=Wh(e.debugPrefix??t.debugPrefix,e),a=Wh(e.debugColor??t.debugColor,e);return n?r?(s,...l)=>console.log(`%c${r}%c${s}`,`color: ${a}`,"color:black",...l):console.log.bind(console):()=>{}}function Wh(e,t){return typeof e=="function"?e(t):e}function eb(...e){throw new Error(e.join(""))}class Ua extends ee.Component{constructor(t){super(t);const n=this.constructor;this.debug=JC(t,n),this.state=QC(n.initialState,n.initialProps,t),this.actions=qC(this,n.actions)}getContext(){return{...this.props,...this.state,...this.actions}}getRenderProps(){return this.getContext()}render(){return this.props.render(this.getRenderProps())}}Ic(Ua,"initialState",{}),Ic(Ua,"initialProps",{}),Ic(Ua,"actions",[]);const zc=e=>{oo(e)&&(e={field:e});const{field:t}=e;return e.type||(e.type="text"),e.label||(e.label=k3(t)),e.id||(e.id=t),e},tb=e=>{if(oo(e))return fs(e,zc);if(Xo(e))return e.reduce((t,n)=>{const r=zc(n);return t[r.field]=r,t},{});if(Qo(e))return Object.entries(e).reduce((t,[n,r])=>{const a=zc({...r,field:n});return t[a.field]=a,t},{});w3("Invalid columns definition")},nb=e=>Object.keys(e).filter(t=>!e[t].hidden),rb=({value:e,search:t})=>ye(e)?e.toString()===t.toString():!1,ga=({value:e,search:t})=>{const n=t.toLowerCase().split(/\s+/);if(ye(e)){const r=e.toString().toLowerCase();return n.every(a=>r.indexOf(a)>-1)}else return!1},ob=({value:e,search:t})=>ye(e)?parseInt(e)===parseInt(t):!1,ab=({value:e,search:t})=>ye(e)?parseFloat(e)===parseFloat(t):!1,sb=({value:e=!1,search:t})=>{const n=parseInt(t)!==0;return e===n},Zh={string:ga,text:ga,number:ga,price:ga,pounds:ga,select:rb,boolean:sb,integer:ob,float:ab},lb=(e,t,n)=>{const r=Object.keys(n);return r.length===0?e:e.filter(a=>r.every(s=>{const l=n[s],i=t[s],c=i.field||s,d=a[c],u=i.filterType||i.type,p=i.filter||Zh[u]||Zh.text;return ye(l)&&l.length?p({row:a,field:c,value:d,search:l}):!0}))},ib=(e,t=1,n=e.length)=>{const r=e.length,a=Math.ceil(r/n);t=Math.min(t,a);const s=t-1,l=n*s,i=Math.min(l+n-1,r-1),c=e.slice(l,i+1);return{pageSize:n,pages:a,page:s,pageNo:t,total:r,firstIndex:l,lastIndex:i,firstPage:1,lastPage:a,thisSize:c.length,from:l+1,to:i+1,all:l===i,one:r===1,none:r===0,rows:c}},Kh={string:$h,text:$h,number:$c,price:$c,currency:$c,integer:Ph,id:Ph},cb=(e,t,n,r)=>{if(!n)return e;const a=t[n],s=a.sort,l=a.type||"text",i=Fi(s)?s:(Kh[l]||Kh.text)(n);return e.sort(r?vj(i):i)},db=({render:e,rows:t=[],...n})=>{const r=v.useMemo(()=>tb(n.columns),[n.columns]),[a,s]=v.useState(n.pageNo??1),[l,i]=v.useState(n.pageSize??10),[c,d]=v.useState(!1),[u,p]=v.useState({}),[m,y]=v.useState(n.sortColumn),[b,C]=v.useState(n.sortReverse??!1),[_,x]=v.useState(Object.keys(r)),[f,h]=v.useState(nb(r)),[j,S]=v.useState(!1),g=()=>S(!0),w=()=>S(!1),T=G=>{m===G?C(ne=>!ne):(y(G),C(!1))},E=G=>{G.preventDefault(),G.stopPropagation(),d(ne=>!ne)},D=(G,ne)=>{p(oe=>{const V={...oe};return ye(ne)&&ne.length?V[G]=ne:delete V[G],V}),s(1)},P=G=>h(ne=>{const oe=fs(ne);return console.log("visible: ",ne),console.log("isVisible: ",oe),oe[G]?ne.filter(V=>V!==G):Object.keys(r).filter(V=>V===G||oe[V])}),Y=G=>{let ne=[],oe=[];const V=fs(f);G.forEach(O=>{ne.push(O),V[O]&&oe.push(O)}),h(oe),x(ne)},Q=v.useMemo(()=>ib(cb(lb(t,r,u),r,m,b),a,l),[t,r,u,m,b,a,l]);return e({...n,rows:t,columns:r,page:Q,pageNo:a,setPageNo:s,pageSize:l,setPageSize:i,showFilters:c,toggleFilters:E,filters:u,setFilter:D,sortColumn:m,setSortColumn:y,sortReverse:b,setSortReverse:C,toggleSortColumn:T,visibleColumns:f,setVisibleColumns:h,toggleVisibleColumn:P,columnOrder:_,setColumnOrder:x,changeColumnOrder:Y,controlsVisible:j,showControls:g,hideControls:w})},pt=_r(db),ub=({page:e,summaryClass:t="small flex middle gap-2",setPageNo:n})=>o.jsxs("div",{className:t,children:[o.jsx(A,{icon:"arrow-left",size:"smaller",disabled:e.pageNo<=e.firstPage,outline:!0,onClick:()=>n(e.pageNo-1)}),o.jsx(A,{icon:"arrow-right",size:"smaller",disabled:e.pageNo>=e.lastPage,outline:!0,onClick:()=>n(e.pageNo+1)}),o.jsxs("div",{style:{textWrap:"balance"},children:["Page ",e.pageNo,"/",e.lastPage," ",e.none?"no rows":e.one?"one row":e.all?`all ${Ea(e.total)} rows`:`rows ${Ea(e.from)}-${Ea(e.to)} of ${Ea(e.total)}`," "]})]}),pb=pt.Consumer(ub);var Nn;let W3=(Nn=class extends Ua{componentDidMount(){this.mounted=!0,this.props.onLoad(this)}componentWillUnmount(){this.mounted=!1,this.props.onUnload(this)}onMouseEnter(){this.debug("onMouseEnter()"),this.setState({hasHover:!0},this.props.openOnHover?()=>{this.open(),this.focusTrigger()}:null)}onMouseLeave(){this.debug("onMouseLeave()"),this.setState({hasHover:!1},this.props.openOnHover?()=>this.closeSoon():null)}onFocus(){this.debug("onFocus()"),this.setState({hasFocus:!0},this.props.onFocus)}onBlur(){this.debug("onBlur()"),this.setState({hasFocus:!1},this.props.onBlur),this.props.closeOnBlur&&this.closeSoon()}onClick(){this.debug("onClick()"),this.state.isOpen?this.close():this.open()}open(){this.debug("open()"),this.setState({isOpen:!0},this.props.onOpen)}close(){this.debug("close()"),this.setState(this.closeState(),this.props.onClose)}closeState(){return this.constructor.inactiveState}closeSoon(t=!1){this.debug(`closeSoon()  force:${t}`),Ui(this.props.closeDelay).then(()=>{this.closeable(t)?this.close():console.log(`NOT closing force:${t} hasHover:${this.state.hasHover}`)})}closeable(t){return t||!this.state.hasHover}onKeyDown(t){switch(this.debug(`onKeyDown(${t.key})`),t.key){case Ki:case Ip:this.state.isOpen?this.close():this.open();break;case Yi:this.close();break;default:console.log(`ignored key ${t.key}`);return}t.preventDefault()}triggerRef(t){this._triggerRef=t}focusTrigger(){this._triggerRef?(this.debug("focussing trigger"),this._triggerRef.focus()):this.debug("no trigger to focus")}},me(Nn,"debug",!1),me(Nn,"defaultProps",{options:[],openOnHover:!1,closeOnBlur:!0,closeDelay:300,onLoad:Pe,onUnload:Pe,onFocus:Pe,onBlur:Pe,onClick:Pe,onOpen:Pe,onClose:Pe}),me(Nn,"inactiveState",{isOpen:!1}),me(Nn,"initialState",{...Nn.inactiveState}),Nn);const Br=class Br extends W3{open(t=this.initialCursor()??this.cursorFirstIndex()){this.debug(`open(${t})`),this.setState({isOpen:!0,cursor:t},this.props.onOpen)}onKeyDown(t){switch(this.debug(`onKeyDown(${t.key})`),this.debug("alt: ",t.altKey),this.debug("ctrl: ",t.ctrlKey),this.debug("meta: ",t.metaKey),t.key){case $p:this.state.isOpen?this.setCursor(this.cursorNextIndex()):this.open(this.initialCursor()??this.cursorFirstIndex());break;case Bp:this.state.isOpen?this.setCursor(this.cursorPrevIndex()):this.open(this.initialCursor()??this.cursorLastIndex());break;case Ki:case Ip:this.state.isOpen?this.selectCursor():this.open(this.initialCursor()??this.cursorFirstIndex());break;case Yi:this.close();break;default:console.log(`ignored key ${t.key}`);return}t.preventDefault()}menuOptions(){return this.props.options}initialCursor(){return null}cursorFirstIndex(){return DC(this.menuOptions(),this.props.validOption)}cursorLastIndex(){return OC(this.menuOptions(),this.props.validOption)}cursorNextIndex(){return AC(this.menuOptions(),this.state.cursor,this.props.validOption)}cursorPrevIndex(){return MC(this.menuOptions(),this.state.cursor,this.props.validOption)}setCursor(t){this.debug(`setCursor(${t})`),this.setState({cursor:t})}selectCursor(){this.debug("selectCursor()");const{cursor:t}=this.state,n=this.menuOptions();if(n&&n.length&&ye(t)){const r=n[t];this.debug(`selectCursor() ${t} =>`,r),this.selectOption(r)}else this.debug("Not selecting: cursor out of range")}selectOption(t){this.debug("selectOption()",t),this.setState(this.selectState(t),()=>this.props.onSelect(t)),this.props.closeOnSelect?(this.debug("closeOnSelect is set, closing"),this.closeSoon(!0)):this.debug("closeOnSelect is not set, NOT closing")}selectState(t){return{selected:t}}menuRef(t){this._menuRef=t}activeRef(t){V3(this._menuRef,t)}};me(Br,"debug",!0),me(Br,"defaultProps",{options:[],openOnHover:!1,closeOnBlur:!0,closeDelay:300,onLoad:Pe,onUnload:Pe,onFocus:Pe,onBlur:Pe,onClick:Pe,onOpen:Pe,onClose:Pe,onSelect:Pe,closeOnSelect:!0}),me(Br,"inactiveState",{isOpen:!1,cursor:void 0,selected:void 0}),me(Br,"initialState",{...Br.inactiveState});let mi=Br;var gn;let fb=(gn=class extends mi{},me(gn,"debug",!1),me(gn,"debugPrefix","Dropdown > "),me(gn,"debugColor","MediumVioletRed"),me(gn,"defaultProps",{...gn.defaultProps,options:[],displayOption:BC}),me(gn,"actions",["onMouseEnter","onMouseLeave","onFocus","onBlur","onClick","onKeyDown","open","close","setCursor","selectCursor","selectOption","triggerRef","menuRef","activeRef"]),gn);const Ds=_r(fb),hb=({triggerClass:e="trigger",triggerRef:t,safeAreaClass:n="safe-area",onMouseEnter:r,onMouseLeave:a,onKeyDown:s,onFocus:l,onBlur:i,onClick:c,...d})=>o.jsxs("div",{className:e,onClick:c,onMouseEnter:r,onMouseLeave:a,onKeyDown:s,onFocus:l,onBlur:i,tabIndex:0,ref:t,children:[o.jsx(Ls,{...Np(d,/^(icon|text)/)}),o.jsx("div",{className:n})]}),mb=Ds.Consumer(hb),gb=({option:e,active:t,activeRef:n,selected:r,onClick:a,onMouseEnter:s,optionClass:l="item no-hover",activeClass:i="active",selectedClass:c="selected",disabledClass:d="disabled",displayOption:u})=>o.jsx("div",{className:we(l,e.className,t?i:null,r?c:null,e.disabled?d:null),onMouseEnter:s,onClick:a,ref:t?n:null,"aria-disabled":e.disabled,children:u(e)}),xb=Ds.Consumer(gb),vb=({option:e,separatorClass:t="separator"})=>o.jsx("div",{className:we(t,e.className)}),yb=({option:e,optionClass:t="item no-hover",headingClass:n="heading"})=>o.jsx("h4",{className:we(n,t,e.className),children:e.heading}),jb=({options:e=[],menuRef:t,menuClass:n="menu border bdr-1",cursor:r,selected:a,selectOption:s,setCursor:l,onMouseEnter:i,onMouseLeave:c,Option:d=xb,Separator:u=vb,Heading:p=yb})=>o.jsx("div",{className:n,ref:t,onMouseEnter:i,onMouseLeave:c,children:e.map((m,y)=>m.separator?o.jsx(u,{option:m},y):m.heading?o.jsx(p,{option:m},y):o.jsx(d,{option:m,active:ye(r)&&e[r]===m,selected:a===m,onClick:()=>s(m),onMouseEnter:()=>l(y)},m.id??m.value??y))}),Cb=Ds.Consumer(jb),bb=({className:e="dropdown",openClass:t="open",closedClass:n="closed",isOpen:r,right:a,size:s,wide:l,Trigger:i=mb,Options:c=Cb})=>o.jsxs("div",{className:we(e,s,r?t:n,{right:a,wide:l}),children:[o.jsx(i,{}),r&&o.jsx(c,{})]}),Sb=Ds.Consumer(bb),wb=({Content:e=Sb,...t})=>o.jsx(Ds.Provider,{...t,children:o.jsx(e,{})}),kr=xe(wb,"DropdownMenu"),_b=({setPageSize:e,pageSizes:t=[10,25,50,100,250,500,1e3]})=>o.jsx("div",{className:"pagesize",children:o.jsx(kr,{right:!0,iconRight:"page",text:"Page Size",size:"small",options:t.map(n=>({n,text:`${n} per page`})),onSelect:n=>e(n.n)})}),kb=pt.Consumer(_b);class Oa extends W3{}me(Oa,"debug",!1),me(Oa,"debugPrefix","Dropdown > "),me(Oa,"debugColor","MediumVioletRed"),me(Oa,"actions",["onMouseEnter","onMouseLeave","onFocus","onBlur","onClick","onKeyDown","open","close","triggerRef"]);const Os=_r(Oa),Tb=({triggerClass:e="trigger",triggerRef:t,safeAreaClass:n="safe-area",onMouseEnter:r,onMouseLeave:a,onKeyDown:s,onFocus:l,onBlur:i,onClick:c,...d})=>o.jsxs("div",{className:e,onClick:c,onMouseEnter:r,onMouseLeave:a,onKeyDown:s,onFocus:l,onBlur:i,tabIndex:0,ref:t,children:[o.jsx(Ls,{...Np(d,/^(icon|text)/)}),o.jsx("div",{className:n})]}),Eb=Os.Consumer(Tb),Nb=({bodyClass:e="body border bdr-1",onMouseEnter:t,onMouseLeave:n,content:r})=>o.jsx("div",{className:e,onMouseEnter:t,onMouseLeave:n,children:r||"No content defined"}),Lb=Os.Consumer(Nb),Rb=({className:e="dropdown",openClass:t="open",closedClass:n="closed",isOpen:r,right:a,size:s,wide:l,Trigger:i=Eb,Body:c=Lb})=>o.jsxs("div",{className:we(e,s,r?t:n,{right:a,wide:l}),children:[o.jsx(i,{}),r&&o.jsx(c,{})]}),Db=Os.Consumer(Rb),Ob=({Content:e=Db,content:t,children:n,...r})=>o.jsx(Os.Provider,{content:t||n,...r,children:o.jsx(e,{})}),dn=xe(Ob,"Dropdown"),Ab=({item:e,setNodeRef:t,style:n,listeners:r,toggleVisibleColumn:a,isVisible:s,...l})=>o.jsxs("div",{ref:t,style:n,className:`sortable item flex middle border mar-b-2 ${e.moved?"moved":""}`,...l,children:[o.jsx(bn,{className:"fluid flex middle",checked:s[e.id]||!1,onChange:()=>a(e.id),text:e.label},e.id),o.jsx("div",{...r,className:"pad-h-2",children:o.jsx(J,{name:"drag",className:"drag-handle"})})]}),Mb=({close:e})=>o.jsx(A,{className:"wide",size:"smaller",color:"green",text:"OK",onClick:e}),Pb=Os.Consumer(Mb);function $b(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return v.useMemo(()=>r=>{t.forEach(a=>a(r))},t)}const Gi=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function qo(e){const t=Object.prototype.toString.call(e);return t==="[object Window]"||t==="[object global]"}function zp(e){return"nodeType"in e}function yt(e){var t,n;return e?qo(e)?e:zp(e)&&(t=(n=e.ownerDocument)==null?void 0:n.defaultView)!=null?t:window:window}function Fp(e){const{Document:t}=yt(e);return e instanceof t}function As(e){return qo(e)?!1:e instanceof yt(e).HTMLElement}function Z3(e){return e instanceof yt(e).SVGElement}function Jo(e){return e?qo(e)?e.document:zp(e)?Fp(e)?e:As(e)||Z3(e)?e.ownerDocument:document:document:document}const Kt=Gi?v.useLayoutEffect:v.useEffect;function Xi(e){const t=v.useRef(e);return Kt(()=>{t.current=e}),v.useCallback(function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return t.current==null?void 0:t.current(...r)},[])}function Bb(){const e=v.useRef(null),t=v.useCallback((r,a)=>{e.current=setInterval(r,a)},[]),n=v.useCallback(()=>{e.current!==null&&(clearInterval(e.current),e.current=null)},[]);return[t,n]}function hs(e,t){t===void 0&&(t=[e]);const n=v.useRef(e);return Kt(()=>{n.current!==e&&(n.current=e)},t),n}function Ms(e,t){const n=v.useRef();return v.useMemo(()=>{const r=e(n.current);return n.current=r,r},[...t])}function gi(e){const t=Xi(e),n=v.useRef(null),r=v.useCallback(a=>{a!==n.current&&(t==null||t(a,n.current)),n.current=a},[]);return[n,r]}function xi(e){const t=v.useRef();return v.useEffect(()=>{t.current=e},[e]),t.current}let Fc={};function Ps(e,t){return v.useMemo(()=>{if(t)return t;const n=Fc[e]==null?0:Fc[e]+1;return Fc[e]=n,e+"-"+n},[e,t])}function K3(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];return r.reduce((s,l)=>{const i=Object.entries(l);for(const[c,d]of i){const u=s[c];u!=null&&(s[c]=u+e*d)}return s},{...t})}}const $o=K3(1),ms=K3(-1);function Ib(e){return"clientX"in e&&"clientY"in e}function Qi(e){if(!e)return!1;const{KeyboardEvent:t}=yt(e.target);return t&&e instanceof t}function zb(e){if(!e)return!1;const{TouchEvent:t}=yt(e.target);return t&&e instanceof t}function vi(e){if(zb(e)){if(e.touches&&e.touches.length){const{clientX:t,clientY:n}=e.touches[0];return{x:t,y:n}}else if(e.changedTouches&&e.changedTouches.length){const{clientX:t,clientY:n}=e.changedTouches[0];return{x:t,y:n}}}return Ib(e)?{x:e.clientX,y:e.clientY}:null}const vr=Object.freeze({Translate:{toString(e){if(!e)return;const{x:t,y:n}=e;return"translate3d("+(t?Math.round(t):0)+"px, "+(n?Math.round(n):0)+"px, 0)"}},Scale:{toString(e){if(!e)return;const{scaleX:t,scaleY:n}=e;return"scaleX("+t+") scaleY("+n+")"}},Transform:{toString(e){if(e)return[vr.Translate.toString(e),vr.Scale.toString(e)].join(" ")}},Transition:{toString(e){let{property:t,duration:n,easing:r}=e;return t+" "+n+"ms "+r}}}),Yh="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function Fb(e){return e.matches(Yh)?e:e.querySelector(Yh)}const Hb={display:"none"};function Ub(e){let{id:t,value:n}=e;return ee.createElement("div",{id:t,style:Hb},n)}function Vb(e){let{id:t,announcement:n,ariaLiveType:r="assertive"}=e;const a={position:"fixed",width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"};return ee.createElement("div",{id:t,style:a,role:"status","aria-live":r,"aria-atomic":!0},n)}function Wb(){const[e,t]=v.useState("");return{announce:v.useCallback(r=>{r!=null&&t(r)},[]),announcement:e}}const Y3=v.createContext(null);function Zb(e){const t=v.useContext(Y3);v.useEffect(()=>{if(!t)throw new Error("useDndMonitor must be used within a children of <DndContext>");return t(e)},[e,t])}function Kb(){const[e]=v.useState(()=>new Set),t=v.useCallback(r=>(e.add(r),()=>e.delete(r)),[e]);return[v.useCallback(r=>{let{type:a,event:s}=r;e.forEach(l=>{var i;return(i=l[a])==null?void 0:i.call(l,s)})},[e]),t]}const Yb={draggable:`
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `},Gb={onDragStart(e){let{active:t}=e;return"Picked up draggable item "+t.id+"."},onDragOver(e){let{active:t,over:n}=e;return n?"Draggable item "+t.id+" was moved over droppable area "+n.id+".":"Draggable item "+t.id+" is no longer over a droppable area."},onDragEnd(e){let{active:t,over:n}=e;return n?"Draggable item "+t.id+" was dropped over droppable area "+n.id:"Draggable item "+t.id+" was dropped."},onDragCancel(e){let{active:t}=e;return"Dragging was cancelled. Draggable item "+t.id+" was dropped."}};function Xb(e){let{announcements:t=Gb,container:n,hiddenTextDescribedById:r,screenReaderInstructions:a=Yb}=e;const{announce:s,announcement:l}=Wb(),i=Ps("DndLiveRegion"),[c,d]=v.useState(!1);if(v.useEffect(()=>{d(!0)},[]),Zb(v.useMemo(()=>({onDragStart(p){let{active:m}=p;s(t.onDragStart({active:m}))},onDragMove(p){let{active:m,over:y}=p;t.onDragMove&&s(t.onDragMove({active:m,over:y}))},onDragOver(p){let{active:m,over:y}=p;s(t.onDragOver({active:m,over:y}))},onDragEnd(p){let{active:m,over:y}=p;s(t.onDragEnd({active:m,over:y}))},onDragCancel(p){let{active:m,over:y}=p;s(t.onDragCancel({active:m,over:y}))}}),[s,t])),!c)return null;const u=ee.createElement(ee.Fragment,null,ee.createElement(Ub,{id:r,value:a.draggable}),ee.createElement(Vb,{id:i,announcement:l}));return n?Ln.createPortal(u,n):u}var Ye;(function(e){e.DragStart="dragStart",e.DragMove="dragMove",e.DragEnd="dragEnd",e.DragCancel="dragCancel",e.DragOver="dragOver",e.RegisterDroppable="registerDroppable",e.SetDroppableDisabled="setDroppableDisabled",e.UnregisterDroppable="unregisterDroppable"})(Ye||(Ye={}));function yi(){}function Gh(e,t){return v.useMemo(()=>({sensor:e,options:t??{}}),[e,t])}function Qb(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return v.useMemo(()=>[...t].filter(r=>r!=null),[...t])}const cn=Object.freeze({x:0,y:0});function G3(e,t){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function qb(e,t){const n=vi(e);if(!n)return"0 0";const r={x:(n.x-t.left)/t.width*100,y:(n.y-t.top)/t.height*100};return r.x+"% "+r.y+"%"}function X3(e,t){let{data:{value:n}}=e,{data:{value:r}}=t;return n-r}function Jb(e,t){let{data:{value:n}}=e,{data:{value:r}}=t;return r-n}function Xh(e){let{left:t,top:n,height:r,width:a}=e;return[{x:t,y:n},{x:t+a,y:n},{x:t,y:n+r},{x:t+a,y:n+r}]}function Q3(e,t){if(!e||e.length===0)return null;const[n]=e;return t?n[t]:n}function Qh(e,t,n){return t===void 0&&(t=e.left),n===void 0&&(n=e.top),{x:t+e.width*.5,y:n+e.height*.5}}const eS=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:r}=e;const a=Qh(t,t.left,t.top),s=[];for(const l of r){const{id:i}=l,c=n.get(i);if(c){const d=G3(Qh(c),a);s.push({id:i,data:{droppableContainer:l,value:d}})}}return s.sort(X3)},tS=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:r}=e;const a=Xh(t),s=[];for(const l of r){const{id:i}=l,c=n.get(i);if(c){const d=Xh(c),u=a.reduce((m,y,b)=>m+G3(d[b],y),0),p=Number((u/4).toFixed(4));s.push({id:i,data:{droppableContainer:l,value:p}})}}return s.sort(X3)};function nS(e,t){const n=Math.max(t.top,e.top),r=Math.max(t.left,e.left),a=Math.min(t.left+t.width,e.left+e.width),s=Math.min(t.top+t.height,e.top+e.height),l=a-r,i=s-n;if(r<a&&n<s){const c=t.width*t.height,d=e.width*e.height,u=l*i,p=u/(c+d-u);return Number(p.toFixed(4))}return 0}const rS=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:r}=e;const a=[];for(const s of r){const{id:l}=s,i=n.get(l);if(i){const c=nS(i,t);c>0&&a.push({id:l,data:{droppableContainer:s,value:c}})}}return a.sort(Jb)};function oS(e,t,n){return{...e,scaleX:t&&n?t.width/n.width:1,scaleY:t&&n?t.height/n.height:1}}function q3(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:cn}function aS(e){return function(n){for(var r=arguments.length,a=new Array(r>1?r-1:0),s=1;s<r;s++)a[s-1]=arguments[s];return a.reduce((l,i)=>({...l,top:l.top+e*i.y,bottom:l.bottom+e*i.y,left:l.left+e*i.x,right:l.right+e*i.x}),{...n})}}const sS=aS(1);function J3(e){if(e.startsWith("matrix3d(")){const t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}else if(e.startsWith("matrix(")){const t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}function lS(e,t,n){const r=J3(t);if(!r)return e;const{scaleX:a,scaleY:s,x:l,y:i}=r,c=e.left-l-(1-a)*parseFloat(n),d=e.top-i-(1-s)*parseFloat(n.slice(n.indexOf(" ")+1)),u=a?e.width/a:e.width,p=s?e.height/s:e.height;return{width:u,height:p,top:d,right:c+u,bottom:d+p,left:c}}const iS={ignoreTransform:!1};function ea(e,t){t===void 0&&(t=iS);let n=e.getBoundingClientRect();if(t.ignoreTransform){const{transform:d,transformOrigin:u}=yt(e).getComputedStyle(e);d&&(n=lS(n,d,u))}const{top:r,left:a,width:s,height:l,bottom:i,right:c}=n;return{top:r,left:a,width:s,height:l,bottom:i,right:c}}function qh(e){return ea(e,{ignoreTransform:!0})}function cS(e){const t=e.innerWidth,n=e.innerHeight;return{top:0,left:0,right:t,bottom:n,width:t,height:n}}function dS(e,t){return t===void 0&&(t=yt(e).getComputedStyle(e)),t.position==="fixed"}function uS(e,t){t===void 0&&(t=yt(e).getComputedStyle(e));const n=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some(a=>{const s=t[a];return typeof s=="string"?n.test(s):!1})}function qi(e,t){const n=[];function r(a){if(t!=null&&n.length>=t||!a)return n;if(Fp(a)&&a.scrollingElement!=null&&!n.includes(a.scrollingElement))return n.push(a.scrollingElement),n;if(!As(a)||Z3(a)||n.includes(a))return n;const s=yt(e).getComputedStyle(a);return a!==e&&uS(a,s)&&n.push(a),dS(a,s)?n:r(a.parentNode)}return e?r(e):n}function eg(e){const[t]=qi(e,1);return t??null}function Hc(e){return!Gi||!e?null:qo(e)?e:zp(e)?Fp(e)||e===Jo(e).scrollingElement?window:As(e)?e:null:null}function tg(e){return qo(e)?e.scrollX:e.scrollLeft}function ng(e){return qo(e)?e.scrollY:e.scrollTop}function eu(e){return{x:tg(e),y:ng(e)}}var et;(function(e){e[e.Forward=1]="Forward",e[e.Backward=-1]="Backward"})(et||(et={}));function rg(e){return!Gi||!e?!1:e===document.scrollingElement}function og(e){const t={x:0,y:0},n=rg(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth},r={x:e.scrollWidth-n.width,y:e.scrollHeight-n.height},a=e.scrollTop<=t.y,s=e.scrollLeft<=t.x,l=e.scrollTop>=r.y,i=e.scrollLeft>=r.x;return{isTop:a,isLeft:s,isBottom:l,isRight:i,maxScroll:r,minScroll:t}}const pS={x:.2,y:.2};function fS(e,t,n,r,a){let{top:s,left:l,right:i,bottom:c}=n;r===void 0&&(r=10),a===void 0&&(a=pS);const{isTop:d,isBottom:u,isLeft:p,isRight:m}=og(e),y={x:0,y:0},b={x:0,y:0},C={height:t.height*a.y,width:t.width*a.x};return!d&&s<=t.top+C.height?(y.y=et.Backward,b.y=r*Math.abs((t.top+C.height-s)/C.height)):!u&&c>=t.bottom-C.height&&(y.y=et.Forward,b.y=r*Math.abs((t.bottom-C.height-c)/C.height)),!m&&i>=t.right-C.width?(y.x=et.Forward,b.x=r*Math.abs((t.right-C.width-i)/C.width)):!p&&l<=t.left+C.width&&(y.x=et.Backward,b.x=r*Math.abs((t.left+C.width-l)/C.width)),{direction:y,speed:b}}function hS(e){if(e===document.scrollingElement){const{innerWidth:s,innerHeight:l}=window;return{top:0,left:0,right:s,bottom:l,width:s,height:l}}const{top:t,left:n,right:r,bottom:a}=e.getBoundingClientRect();return{top:t,left:n,right:r,bottom:a,width:e.clientWidth,height:e.clientHeight}}function ag(e){return e.reduce((t,n)=>$o(t,eu(n)),cn)}function mS(e){return e.reduce((t,n)=>t+tg(n),0)}function gS(e){return e.reduce((t,n)=>t+ng(n),0)}function sg(e,t){if(t===void 0&&(t=ea),!e)return;const{top:n,left:r,bottom:a,right:s}=t(e);eg(e)&&(a<=0||s<=0||n>=window.innerHeight||r>=window.innerWidth)&&e.scrollIntoView({block:"center",inline:"center"})}const xS=[["x",["left","right"],mS],["y",["top","bottom"],gS]];class Hp{constructor(t,n){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;const r=qi(n),a=ag(r);this.rect={...t},this.width=t.width,this.height=t.height;for(const[s,l,i]of xS)for(const c of l)Object.defineProperty(this,c,{get:()=>{const d=i(r),u=a[s]-d;return this.rect[c]+u},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}}class Va{constructor(t){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach(n=>{var r;return(r=this.target)==null?void 0:r.removeEventListener(...n)})},this.target=t}add(t,n,r){var a;(a=this.target)==null||a.addEventListener(t,n,r),this.listeners.push([t,n,r])}}function vS(e){const{EventTarget:t}=yt(e);return e instanceof t?e:Jo(e)}function Uc(e,t){const n=Math.abs(e.x),r=Math.abs(e.y);return typeof t=="number"?Math.sqrt(n**2+r**2)>t:"x"in t&&"y"in t?n>t.x&&r>t.y:"x"in t?n>t.x:"y"in t?r>t.y:!1}var It;(function(e){e.Click="click",e.DragStart="dragstart",e.Keydown="keydown",e.ContextMenu="contextmenu",e.Resize="resize",e.SelectionChange="selectionchange",e.VisibilityChange="visibilitychange"})(It||(It={}));function Jh(e){e.preventDefault()}function yS(e){e.stopPropagation()}var he;(function(e){e.Space="Space",e.Down="ArrowDown",e.Right="ArrowRight",e.Left="ArrowLeft",e.Up="ArrowUp",e.Esc="Escape",e.Enter="Enter"})(he||(he={}));const lg={start:[he.Space,he.Enter],cancel:[he.Esc],end:[he.Space,he.Enter]},jS=(e,t)=>{let{currentCoordinates:n}=t;switch(e.code){case he.Right:return{...n,x:n.x+25};case he.Left:return{...n,x:n.x-25};case he.Down:return{...n,y:n.y+25};case he.Up:return{...n,y:n.y-25}}};class Up{constructor(t){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=t;const{event:{target:n}}=t;this.props=t,this.listeners=new Va(Jo(n)),this.windowListeners=new Va(yt(n)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(It.Resize,this.handleCancel),this.windowListeners.add(It.VisibilityChange,this.handleCancel),setTimeout(()=>this.listeners.add(It.Keydown,this.handleKeyDown))}handleStart(){const{activeNode:t,onStart:n}=this.props,r=t.node.current;r&&sg(r),n(cn)}handleKeyDown(t){if(Qi(t)){const{active:n,context:r,options:a}=this.props,{keyboardCodes:s=lg,coordinateGetter:l=jS,scrollBehavior:i="smooth"}=a,{code:c}=t;if(s.end.includes(c)){this.handleEnd(t);return}if(s.cancel.includes(c)){this.handleCancel(t);return}const{collisionRect:d}=r.current,u=d?{x:d.left,y:d.top}:cn;this.referenceCoordinates||(this.referenceCoordinates=u);const p=l(t,{active:n,context:r.current,currentCoordinates:u});if(p){const m=ms(p,u),y={x:0,y:0},{scrollableAncestors:b}=r.current;for(const C of b){const _=t.code,{isTop:x,isRight:f,isLeft:h,isBottom:j,maxScroll:S,minScroll:g}=og(C),w=hS(C),T={x:Math.min(_===he.Right?w.right-w.width/2:w.right,Math.max(_===he.Right?w.left:w.left+w.width/2,p.x)),y:Math.min(_===he.Down?w.bottom-w.height/2:w.bottom,Math.max(_===he.Down?w.top:w.top+w.height/2,p.y))},E=_===he.Right&&!f||_===he.Left&&!h,D=_===he.Down&&!j||_===he.Up&&!x;if(E&&T.x!==p.x){const P=C.scrollLeft+m.x,Y=_===he.Right&&P<=S.x||_===he.Left&&P>=g.x;if(Y&&!m.y){C.scrollTo({left:P,behavior:i});return}Y?y.x=C.scrollLeft-P:y.x=_===he.Right?C.scrollLeft-S.x:C.scrollLeft-g.x,y.x&&C.scrollBy({left:-y.x,behavior:i});break}else if(D&&T.y!==p.y){const P=C.scrollTop+m.y,Y=_===he.Down&&P<=S.y||_===he.Up&&P>=g.y;if(Y&&!m.x){C.scrollTo({top:P,behavior:i});return}Y?y.y=C.scrollTop-P:y.y=_===he.Down?C.scrollTop-S.y:C.scrollTop-g.y,y.y&&C.scrollBy({top:-y.y,behavior:i});break}}this.handleMove(t,$o(ms(p,this.referenceCoordinates),y))}}}handleMove(t,n){const{onMove:r}=this.props;t.preventDefault(),r(n)}handleEnd(t){const{onEnd:n}=this.props;t.preventDefault(),this.detach(),n()}handleCancel(t){const{onCancel:n}=this.props;t.preventDefault(),this.detach(),n()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}}Up.activators=[{eventName:"onKeyDown",handler:(e,t,n)=>{let{keyboardCodes:r=lg,onActivation:a}=t,{active:s}=n;const{code:l}=e.nativeEvent;if(r.start.includes(l)){const i=s.activatorNode.current;return i&&e.target!==i?!1:(e.preventDefault(),a==null||a({event:e.nativeEvent}),!0)}return!1}}];function e1(e){return!!(e&&"distance"in e)}function t1(e){return!!(e&&"delay"in e)}class Vp{constructor(t,n,r){var a;r===void 0&&(r=vS(t.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=t,this.events=n;const{event:s}=t,{target:l}=s;this.props=t,this.events=n,this.document=Jo(l),this.documentListeners=new Va(this.document),this.listeners=new Va(r),this.windowListeners=new Va(yt(l)),this.initialCoordinates=(a=vi(s))!=null?a:cn,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){const{events:t,props:{options:{activationConstraint:n,bypassActivationConstraint:r}}}=this;if(this.listeners.add(t.move.name,this.handleMove,{passive:!1}),this.listeners.add(t.end.name,this.handleEnd),this.windowListeners.add(It.Resize,this.handleCancel),this.windowListeners.add(It.DragStart,Jh),this.windowListeners.add(It.VisibilityChange,this.handleCancel),this.windowListeners.add(It.ContextMenu,Jh),this.documentListeners.add(It.Keydown,this.handleKeydown),n){if(r!=null&&r({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(t1(n)){this.timeoutId=setTimeout(this.handleStart,n.delay);return}if(e1(n))return}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),this.timeoutId!==null&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handleStart(){const{initialCoordinates:t}=this,{onStart:n}=this.props;t&&(this.activated=!0,this.documentListeners.add(It.Click,yS,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(It.SelectionChange,this.removeTextSelection),n(t))}handleMove(t){var n;const{activated:r,initialCoordinates:a,props:s}=this,{onMove:l,options:{activationConstraint:i}}=s;if(!a)return;const c=(n=vi(t))!=null?n:cn,d=ms(a,c);if(!r&&i){if(e1(i)){if(i.tolerance!=null&&Uc(d,i.tolerance))return this.handleCancel();if(Uc(d,i.distance))return this.handleStart()}return t1(i)&&Uc(d,i.tolerance)?this.handleCancel():void 0}t.cancelable&&t.preventDefault(),l(c)}handleEnd(){const{onEnd:t}=this.props;this.detach(),t()}handleCancel(){const{onCancel:t}=this.props;this.detach(),t()}handleKeydown(t){t.code===he.Esc&&this.handleCancel()}removeTextSelection(){var t;(t=this.document.getSelection())==null||t.removeAllRanges()}}const CS={move:{name:"pointermove"},end:{name:"pointerup"}};class Wp extends Vp{constructor(t){const{event:n}=t,r=Jo(n.target);super(t,CS,r)}}Wp.activators=[{eventName:"onPointerDown",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;return!n.isPrimary||n.button!==0?!1:(r==null||r({event:n}),!0)}}];const bS={move:{name:"mousemove"},end:{name:"mouseup"}};var tu;(function(e){e[e.RightClick=2]="RightClick"})(tu||(tu={}));class SS extends Vp{constructor(t){super(t,bS,Jo(t.event.target))}}SS.activators=[{eventName:"onMouseDown",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;return n.button===tu.RightClick?!1:(r==null||r({event:n}),!0)}}];const Vc={move:{name:"touchmove"},end:{name:"touchend"}};class wS extends Vp{constructor(t){super(t,Vc)}static setup(){return window.addEventListener(Vc.move.name,t,{capture:!1,passive:!1}),function(){window.removeEventListener(Vc.move.name,t)};function t(){}}}wS.activators=[{eventName:"onTouchStart",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;const{touches:a}=n;return a.length>1?!1:(r==null||r({event:n}),!0)}}];var Wa;(function(e){e[e.Pointer=0]="Pointer",e[e.DraggableRect=1]="DraggableRect"})(Wa||(Wa={}));var ji;(function(e){e[e.TreeOrder=0]="TreeOrder",e[e.ReversedTreeOrder=1]="ReversedTreeOrder"})(ji||(ji={}));function _S(e){let{acceleration:t,activator:n=Wa.Pointer,canScroll:r,draggingRect:a,enabled:s,interval:l=5,order:i=ji.TreeOrder,pointerCoordinates:c,scrollableAncestors:d,scrollableAncestorRects:u,delta:p,threshold:m}=e;const y=TS({delta:p,disabled:!s}),[b,C]=Bb(),_=v.useRef({x:0,y:0}),x=v.useRef({x:0,y:0}),f=v.useMemo(()=>{switch(n){case Wa.Pointer:return c?{top:c.y,bottom:c.y,left:c.x,right:c.x}:null;case Wa.DraggableRect:return a}},[n,a,c]),h=v.useRef(null),j=v.useCallback(()=>{const g=h.current;if(!g)return;const w=_.current.x*x.current.x,T=_.current.y*x.current.y;g.scrollBy(w,T)},[]),S=v.useMemo(()=>i===ji.TreeOrder?[...d].reverse():d,[i,d]);v.useEffect(()=>{if(!s||!d.length||!f){C();return}for(const g of S){if((r==null?void 0:r(g))===!1)continue;const w=d.indexOf(g),T=u[w];if(!T)continue;const{direction:E,speed:D}=fS(g,T,f,t,m);for(const P of["x","y"])y[P][E[P]]||(D[P]=0,E[P]=0);if(D.x>0||D.y>0){C(),h.current=g,b(j,l),_.current=D,x.current=E;return}}_.current={x:0,y:0},x.current={x:0,y:0},C()},[t,j,r,C,s,l,JSON.stringify(f),JSON.stringify(y),b,d,S,u,JSON.stringify(m)])}const kS={x:{[et.Backward]:!1,[et.Forward]:!1},y:{[et.Backward]:!1,[et.Forward]:!1}};function TS(e){let{delta:t,disabled:n}=e;const r=xi(t);return Ms(a=>{if(n||!r||!a)return kS;const s={x:Math.sign(t.x-r.x),y:Math.sign(t.y-r.y)};return{x:{[et.Backward]:a.x[et.Backward]||s.x===-1,[et.Forward]:a.x[et.Forward]||s.x===1},y:{[et.Backward]:a.y[et.Backward]||s.y===-1,[et.Forward]:a.y[et.Forward]||s.y===1}}},[n,t,r])}function ES(e,t){const n=t!==null?e.get(t):void 0,r=n?n.node.current:null;return Ms(a=>{var s;return t===null?null:(s=r??a)!=null?s:null},[r,t])}function NS(e,t){return v.useMemo(()=>e.reduce((n,r)=>{const{sensor:a}=r,s=a.activators.map(l=>({eventName:l.eventName,handler:t(l.handler,r)}));return[...n,...s]},[]),[e,t])}var gs;(function(e){e[e.Always=0]="Always",e[e.BeforeDragging=1]="BeforeDragging",e[e.WhileDragging=2]="WhileDragging"})(gs||(gs={}));var nu;(function(e){e.Optimized="optimized"})(nu||(nu={}));const n1=new Map;function LS(e,t){let{dragging:n,dependencies:r,config:a}=t;const[s,l]=v.useState(null),{frequency:i,measure:c,strategy:d}=a,u=v.useRef(e),p=_(),m=hs(p),y=v.useCallback(function(x){x===void 0&&(x=[]),!m.current&&l(f=>f===null?x:f.concat(x.filter(h=>!f.includes(h))))},[m]),b=v.useRef(null),C=Ms(x=>{if(p&&!n)return n1;if(!x||x===n1||u.current!==e||s!=null){const f=new Map;for(let h of e){if(!h)continue;if(s&&s.length>0&&!s.includes(h.id)&&h.rect.current){f.set(h.id,h.rect.current);continue}const j=h.node.current,S=j?new Hp(c(j),j):null;h.rect.current=S,S&&f.set(h.id,S)}return f}return x},[e,s,n,p,c]);return v.useEffect(()=>{u.current=e},[e]),v.useEffect(()=>{p||y()},[n,p]),v.useEffect(()=>{s&&s.length>0&&l(null)},[JSON.stringify(s)]),v.useEffect(()=>{p||typeof i!="number"||b.current!==null||(b.current=setTimeout(()=>{y(),b.current=null},i))},[i,p,y,...r]),{droppableRects:C,measureDroppableContainers:y,measuringScheduled:s!=null};function _(){switch(d){case gs.Always:return!1;case gs.BeforeDragging:return n;default:return!n}}}function Zp(e,t){return Ms(n=>e?n||(typeof t=="function"?t(e):e):null,[t,e])}function RS(e,t){return Zp(e,t)}function DS(e){let{callback:t,disabled:n}=e;const r=Xi(t),a=v.useMemo(()=>{if(n||typeof window>"u"||typeof window.MutationObserver>"u")return;const{MutationObserver:s}=window;return new s(r)},[r,n]);return v.useEffect(()=>()=>a==null?void 0:a.disconnect(),[a]),a}function Ji(e){let{callback:t,disabled:n}=e;const r=Xi(t),a=v.useMemo(()=>{if(n||typeof window>"u"||typeof window.ResizeObserver>"u")return;const{ResizeObserver:s}=window;return new s(r)},[n]);return v.useEffect(()=>()=>a==null?void 0:a.disconnect(),[a]),a}function OS(e){return new Hp(ea(e),e)}function r1(e,t,n){t===void 0&&(t=OS);const[r,a]=v.useReducer(i,null),s=DS({callback(c){if(e)for(const d of c){const{type:u,target:p}=d;if(u==="childList"&&p instanceof HTMLElement&&p.contains(e)){a();break}}}}),l=Ji({callback:a});return Kt(()=>{a(),e?(l==null||l.observe(e),s==null||s.observe(document.body,{childList:!0,subtree:!0})):(l==null||l.disconnect(),s==null||s.disconnect())},[e]),r;function i(c){if(!e)return null;if(e.isConnected===!1){var d;return(d=c??n)!=null?d:null}const u=t(e);return JSON.stringify(c)===JSON.stringify(u)?c:u}}function AS(e){const t=Zp(e);return q3(e,t)}const o1=[];function MS(e){const t=v.useRef(e),n=Ms(r=>e?r&&r!==o1&&e&&t.current&&e.parentNode===t.current.parentNode?r:qi(e):o1,[e]);return v.useEffect(()=>{t.current=e},[e]),n}function PS(e){const[t,n]=v.useState(null),r=v.useRef(e),a=v.useCallback(s=>{const l=Hc(s.target);l&&n(i=>i?(i.set(l,eu(l)),new Map(i)):null)},[]);return v.useEffect(()=>{const s=r.current;if(e!==s){l(s);const i=e.map(c=>{const d=Hc(c);return d?(d.addEventListener("scroll",a,{passive:!0}),[d,eu(d)]):null}).filter(c=>c!=null);n(i.length?new Map(i):null),r.current=e}return()=>{l(e),l(s)};function l(i){i.forEach(c=>{const d=Hc(c);d==null||d.removeEventListener("scroll",a)})}},[a,e]),v.useMemo(()=>e.length?t?Array.from(t.values()).reduce((s,l)=>$o(s,l),cn):ag(e):cn,[e,t])}function a1(e,t){t===void 0&&(t=[]);const n=v.useRef(null);return v.useEffect(()=>{n.current=null},t),v.useEffect(()=>{const r=e!==cn;r&&!n.current&&(n.current=e),!r&&n.current&&(n.current=null)},[e]),n.current?ms(e,n.current):cn}function $S(e){v.useEffect(()=>{if(!Gi)return;const t=e.map(n=>{let{sensor:r}=n;return r.setup==null?void 0:r.setup()});return()=>{for(const n of t)n==null||n()}},e.map(t=>{let{sensor:n}=t;return n}))}function BS(e,t){return v.useMemo(()=>e.reduce((n,r)=>{let{eventName:a,handler:s}=r;return n[a]=l=>{s(l,t)},n},{}),[e,t])}function ig(e){return v.useMemo(()=>e?cS(e):null,[e])}const Wc=[];function IS(e,t){t===void 0&&(t=ea);const[n]=e,r=ig(n?yt(n):null),[a,s]=v.useReducer(i,Wc),l=Ji({callback:s});return e.length>0&&a===Wc&&s(),Kt(()=>{e.length?e.forEach(c=>l==null?void 0:l.observe(c)):(l==null||l.disconnect(),s())},[e]),a;function i(){return e.length?e.map(c=>rg(c)?r:new Hp(t(c),c)):Wc}}function cg(e){if(!e)return null;if(e.children.length>1)return e;const t=e.children[0];return As(t)?t:e}function zS(e){let{measure:t}=e;const[n,r]=v.useState(null),a=v.useCallback(d=>{for(const{target:u}of d)if(As(u)){r(p=>{const m=t(u);return p?{...p,width:m.width,height:m.height}:m});break}},[t]),s=Ji({callback:a}),l=v.useCallback(d=>{const u=cg(d);s==null||s.disconnect(),u&&(s==null||s.observe(u)),r(u?t(u):null)},[t,s]),[i,c]=gi(l);return v.useMemo(()=>({nodeRef:i,rect:n,setRef:c}),[n,i,c])}const FS=[{sensor:Wp,options:{}},{sensor:Up,options:{}}],HS={current:{}},zl={draggable:{measure:qh},droppable:{measure:qh,strategy:gs.WhileDragging,frequency:nu.Optimized},dragOverlay:{measure:ea}};class Za extends Map{get(t){var n;return t!=null&&(n=super.get(t))!=null?n:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter(t=>{let{disabled:n}=t;return!n})}getNodeFor(t){var n,r;return(n=(r=this.get(t))==null?void 0:r.node.current)!=null?n:void 0}}const US={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new Za,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:yi},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:zl,measureDroppableContainers:yi,windowRect:null,measuringScheduled:!1},dg={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:yi,draggableNodes:new Map,over:null,measureDroppableContainers:yi},$s=v.createContext(dg),ug=v.createContext(US);function VS(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new Za}}}function WS(e,t){switch(t.type){case Ye.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case Ye.DragMove:return e.draggable.active?{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}}:e;case Ye.DragEnd:case Ye.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case Ye.RegisterDroppable:{const{element:n}=t,{id:r}=n,a=new Za(e.droppable.containers);return a.set(r,n),{...e,droppable:{...e.droppable,containers:a}}}case Ye.SetDroppableDisabled:{const{id:n,key:r,disabled:a}=t,s=e.droppable.containers.get(n);if(!s||r!==s.key)return e;const l=new Za(e.droppable.containers);return l.set(n,{...s,disabled:a}),{...e,droppable:{...e.droppable,containers:l}}}case Ye.UnregisterDroppable:{const{id:n,key:r}=t,a=e.droppable.containers.get(n);if(!a||r!==a.key)return e;const s=new Za(e.droppable.containers);return s.delete(n),{...e,droppable:{...e.droppable,containers:s}}}default:return e}}function ZS(e){let{disabled:t}=e;const{active:n,activatorEvent:r,draggableNodes:a}=v.useContext($s),s=xi(r),l=xi(n==null?void 0:n.id);return v.useEffect(()=>{if(!t&&!r&&s&&l!=null){if(!Qi(s)||document.activeElement===s.target)return;const i=a.get(l);if(!i)return;const{activatorNode:c,node:d}=i;if(!c.current&&!d.current)return;requestAnimationFrame(()=>{for(const u of[c.current,d.current]){if(!u)continue;const p=Fb(u);if(p){p.focus();break}}})}},[r,t,a,l,s]),null}function pg(e,t){let{transform:n,...r}=t;return e!=null&&e.length?e.reduce((a,s)=>s({transform:a,...r}),n):n}function KS(e){return v.useMemo(()=>({draggable:{...zl.draggable,...e==null?void 0:e.draggable},droppable:{...zl.droppable,...e==null?void 0:e.droppable},dragOverlay:{...zl.dragOverlay,...e==null?void 0:e.dragOverlay}}),[e==null?void 0:e.draggable,e==null?void 0:e.droppable,e==null?void 0:e.dragOverlay])}function YS(e){let{activeNode:t,measure:n,initialRect:r,config:a=!0}=e;const s=v.useRef(!1),{x:l,y:i}=typeof a=="boolean"?{x:a,y:a}:a;Kt(()=>{if(!l&&!i||!t){s.current=!1;return}if(s.current||!r)return;const d=t==null?void 0:t.node.current;if(!d||d.isConnected===!1)return;const u=n(d),p=q3(u,r);if(l||(p.x=0),i||(p.y=0),s.current=!0,Math.abs(p.x)>0||Math.abs(p.y)>0){const m=eg(d);m&&m.scrollBy({top:p.y,left:p.x})}},[t,l,i,r,n])}const ec=v.createContext({...cn,scaleX:1,scaleY:1});var nr;(function(e){e[e.Uninitialized=0]="Uninitialized",e[e.Initializing=1]="Initializing",e[e.Initialized=2]="Initialized"})(nr||(nr={}));const GS=v.memo(function(t){var n,r,a,s;let{id:l,accessibility:i,autoScroll:c=!0,children:d,sensors:u=FS,collisionDetection:p=rS,measuring:m,modifiers:y,...b}=t;const C=v.useReducer(WS,void 0,VS),[_,x]=C,[f,h]=Kb(),[j,S]=v.useState(nr.Uninitialized),g=j===nr.Initialized,{draggable:{active:w,nodes:T,translate:E},droppable:{containers:D}}=_,P=w?T.get(w):null,Y=v.useRef({initial:null,translated:null}),Q=v.useMemo(()=>{var Ve;return w!=null?{id:w,data:(Ve=P==null?void 0:P.data)!=null?Ve:HS,rect:Y}:null},[w,P]),G=v.useRef(null),[ne,oe]=v.useState(null),[V,O]=v.useState(null),B=hs(b,Object.values(b)),I=Ps("DndDescribedBy",l),H=v.useMemo(()=>D.getEnabled(),[D]),W=KS(m),{droppableRects:be,measureDroppableContainers:se,measuringScheduled:je}=LS(H,{dragging:g,dependencies:[E.x,E.y],config:W.droppable}),ae=ES(T,w),Ne=v.useMemo(()=>V?vi(V):null,[V]),st=ac(),jt=RS(ae,W.draggable.measure);YS({activeNode:w?T.get(w):null,config:st.layoutShiftCompensation,initialRect:jt,measure:W.draggable.measure});const fe=r1(ae,W.draggable.measure,jt),Le=r1(ae?ae.parentElement:null),Qe=v.useRef({activatorEvent:null,active:null,activeNode:ae,collisionRect:null,collisions:null,droppableRects:be,draggableNodes:T,draggingNode:null,draggingNodeRect:null,droppableContainers:D,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),Lt=D.getNodeFor((n=Qe.current.over)==null?void 0:n.id),Xt=zS({measure:W.dragOverlay.measure}),Ct=(r=Xt.nodeRef.current)!=null?r:ae,Yn=g?(a=Xt.rect)!=null?a:fe:null,Vs=!!(Xt.nodeRef.current&&Xt.rect),Ws=AS(Vs?null:fe),oa=ig(Ct?yt(Ct):null),un=MS(g?Lt??ae:null),pn=IS(un),Rr=pg(y,{transform:{x:E.x-Ws.x,y:E.y-Ws.y,scaleX:1,scaleY:1},activatorEvent:V,active:Q,activeNodeRect:fe,containerNodeRect:Le,draggingNodeRect:Yn,over:Qe.current.over,overlayNodeRect:Xt.rect,scrollableAncestors:un,scrollableAncestorRects:pn,windowRect:oa}),lo=Ne?$o(Ne,E):null,Qt=PS(un),Dr=a1(Qt),Zs=a1(Qt,[fe]),qt=$o(Rr,Dr),Gn=Yn?sS(Yn,Rr):null,bt=Q&&Gn?p({active:Q,collisionRect:Gn,droppableRects:be,droppableContainers:H,pointerCoordinates:lo}):null,aa=Q3(bt,"id"),[Jt,sa]=v.useState(null),rc=Vs?Rr:$o(Rr,Zs),Ks=oS(rc,(s=Jt==null?void 0:Jt.rect)!=null?s:null,fe),Or=v.useCallback((Ve,ft)=>{let{sensor:k,options:N}=ft;if(G.current==null)return;const L=T.get(G.current);if(!L)return;const $=Ve.nativeEvent,z=new k({active:G.current,activeNode:L,event:$,options:N,context:Qe,onStart(K){const X=G.current;if(X==null)return;const Z=T.get(X);if(!Z)return;const{onDragStart:le}=B.current,Oe={active:{id:X,data:Z.data,rect:Y}};Ln.unstable_batchedUpdates(()=>{le==null||le(Oe),S(nr.Initializing),x({type:Ye.DragStart,initialCoordinates:K,active:X}),f({type:"onDragStart",event:Oe})})},onMove(K){x({type:Ye.DragMove,coordinates:K})},onEnd:te(Ye.DragEnd),onCancel:te(Ye.DragCancel)});Ln.unstable_batchedUpdates(()=>{oe(z),O(Ve.nativeEvent)});function te(K){return async function(){const{active:Z,collisions:le,over:Oe,scrollAdjustedTranslate:re}=Qe.current;let ve=null;if(Z&&re){const{cancelDrop:Ae}=B.current;ve={activatorEvent:$,active:Z,collisions:le,delta:re,over:Oe},K===Ye.DragEnd&&typeof Ae=="function"&&await Promise.resolve(Ae(ve))&&(K=Ye.DragCancel)}G.current=null,Ln.unstable_batchedUpdates(()=>{x({type:K}),S(nr.Uninitialized),sa(null),oe(null),O(null);const Ae=K===Ye.DragEnd?"onDragEnd":"onDragCancel";if(ve){const lt=B.current[Ae];lt==null||lt(ve),f({type:Ae,event:ve})}})}}},[T]),Ys=v.useCallback((Ve,ft)=>(k,N)=>{const L=k.nativeEvent,$=T.get(N);if(G.current!==null||!$||L.dndKit||L.defaultPrevented)return;const z={active:$};Ve(k,ft.options,z)===!0&&(L.dndKit={capturedBy:ft.sensor},G.current=N,Or(k,ft))},[T,Or]),io=NS(u,Ys);$S(u),Kt(()=>{fe&&j===nr.Initializing&&S(nr.Initialized)},[fe,j]),v.useEffect(()=>{const{onDragMove:Ve}=B.current,{active:ft,activatorEvent:k,collisions:N,over:L}=Qe.current;if(!ft||!k)return;const $={active:ft,activatorEvent:k,collisions:N,delta:{x:qt.x,y:qt.y},over:L};Ln.unstable_batchedUpdates(()=>{Ve==null||Ve($),f({type:"onDragMove",event:$})})},[qt.x,qt.y]),v.useEffect(()=>{const{active:Ve,activatorEvent:ft,collisions:k,droppableContainers:N,scrollAdjustedTranslate:L}=Qe.current;if(!Ve||G.current==null||!ft||!L)return;const{onDragOver:$}=B.current,z=N.get(aa),te=z&&z.rect.current?{id:z.id,rect:z.rect.current,data:z.data,disabled:z.disabled}:null,K={active:Ve,activatorEvent:ft,collisions:k,delta:{x:L.x,y:L.y},over:te};Ln.unstable_batchedUpdates(()=>{sa(te),$==null||$(K),f({type:"onDragOver",event:K})})},[aa]),Kt(()=>{Qe.current={activatorEvent:V,active:Q,activeNode:ae,collisionRect:Gn,collisions:bt,droppableRects:be,draggableNodes:T,draggingNode:Ct,draggingNodeRect:Yn,droppableContainers:D,over:Jt,scrollableAncestors:un,scrollAdjustedTranslate:qt},Y.current={initial:Yn,translated:Gn}},[Q,ae,bt,Gn,T,Ct,Yn,be,D,Jt,un,qt]),_S({...st,delta:E,draggingRect:Gn,pointerCoordinates:lo,scrollableAncestors:un,scrollableAncestorRects:pn});const oc=v.useMemo(()=>({active:Q,activeNode:ae,activeNodeRect:fe,activatorEvent:V,collisions:bt,containerNodeRect:Le,dragOverlay:Xt,draggableNodes:T,droppableContainers:D,droppableRects:be,over:Jt,measureDroppableContainers:se,scrollableAncestors:un,scrollableAncestorRects:pn,measuringConfiguration:W,measuringScheduled:je,windowRect:oa}),[Q,ae,fe,V,bt,Le,Xt,T,D,be,Jt,se,un,pn,W,je,oa]),Gs=v.useMemo(()=>({activatorEvent:V,activators:io,active:Q,activeNodeRect:fe,ariaDescribedById:{draggable:I},dispatch:x,draggableNodes:T,over:Jt,measureDroppableContainers:se}),[V,io,Q,fe,x,I,T,Jt,se]);return ee.createElement(Y3.Provider,{value:h},ee.createElement($s.Provider,{value:Gs},ee.createElement(ug.Provider,{value:oc},ee.createElement(ec.Provider,{value:Ks},d)),ee.createElement(ZS,{disabled:(i==null?void 0:i.restoreFocus)===!1})),ee.createElement(Xb,{...i,hiddenTextDescribedById:I}));function ac(){const Ve=(ne==null?void 0:ne.autoScrollEnabled)===!1,ft=typeof c=="object"?c.enabled===!1:c===!1,k=g&&!Ve&&!ft;return typeof c=="object"?{...c,enabled:k}:{enabled:k}}}),XS=v.createContext(null),s1="button",QS="Droppable";function qS(e){let{id:t,data:n,disabled:r=!1,attributes:a}=e;const s=Ps(QS),{activators:l,activatorEvent:i,active:c,activeNodeRect:d,ariaDescribedById:u,draggableNodes:p,over:m}=v.useContext($s),{role:y=s1,roleDescription:b="draggable",tabIndex:C=0}=a??{},_=(c==null?void 0:c.id)===t,x=v.useContext(_?ec:XS),[f,h]=gi(),[j,S]=gi(),g=BS(l,t),w=hs(n);Kt(()=>(p.set(t,{id:t,key:s,node:f,activatorNode:j,data:w}),()=>{const E=p.get(t);E&&E.key===s&&p.delete(t)}),[p,t]);const T=v.useMemo(()=>({role:y,tabIndex:C,"aria-disabled":r,"aria-pressed":_&&y===s1?!0:void 0,"aria-roledescription":b,"aria-describedby":u.draggable}),[r,y,C,_,b,u.draggable]);return{active:c,activatorEvent:i,activeNodeRect:d,attributes:T,isDragging:_,listeners:r?void 0:g,node:f,over:m,setNodeRef:h,setActivatorNodeRef:S,transform:x}}function fg(){return v.useContext(ug)}const JS="Droppable",ew={timeout:25};function tw(e){let{data:t,disabled:n=!1,id:r,resizeObserverConfig:a}=e;const s=Ps(JS),{active:l,dispatch:i,over:c,measureDroppableContainers:d}=v.useContext($s),u=v.useRef({disabled:n}),p=v.useRef(!1),m=v.useRef(null),y=v.useRef(null),{disabled:b,updateMeasurementsFor:C,timeout:_}={...ew,...a},x=hs(C??r),f=v.useCallback(()=>{if(!p.current){p.current=!0;return}y.current!=null&&clearTimeout(y.current),y.current=setTimeout(()=>{d(Array.isArray(x.current)?x.current:[x.current]),y.current=null},_)},[_]),h=Ji({callback:f,disabled:b||!l}),j=v.useCallback((T,E)=>{h&&(E&&(h.unobserve(E),p.current=!1),T&&h.observe(T))},[h]),[S,g]=gi(j),w=hs(t);return v.useEffect(()=>{!h||!S.current||(h.disconnect(),p.current=!1,h.observe(S.current))},[S,h]),Kt(()=>(i({type:Ye.RegisterDroppable,element:{id:r,key:s,disabled:n,node:S,rect:m,data:w}}),()=>i({type:Ye.UnregisterDroppable,key:s,id:r})),[r]),v.useEffect(()=>{n!==u.current.disabled&&(i({type:Ye.SetDroppableDisabled,id:r,key:s,disabled:n}),u.current.disabled=n)},[r,s,n,i]),{active:l,rect:m,isOver:(c==null?void 0:c.id)===r,node:S,over:c,setNodeRef:g}}function nw(e){let{animation:t,children:n}=e;const[r,a]=v.useState(null),[s,l]=v.useState(null),i=xi(n);return!n&&!r&&i&&a(i),Kt(()=>{if(!s)return;const c=r==null?void 0:r.key,d=r==null?void 0:r.props.id;if(c==null||d==null){a(null);return}Promise.resolve(t(d,s)).then(()=>{a(null)})},[t,r,s]),ee.createElement(ee.Fragment,null,n,r?v.cloneElement(r,{ref:l}):null)}const rw={x:0,y:0,scaleX:1,scaleY:1};function ow(e){let{children:t}=e;return ee.createElement($s.Provider,{value:dg},ee.createElement(ec.Provider,{value:rw},t))}const aw={position:"fixed",touchAction:"none"},sw=e=>Qi(e)?"transform 250ms ease":void 0,lw=v.forwardRef((e,t)=>{let{as:n,activatorEvent:r,adjustScale:a,children:s,className:l,rect:i,style:c,transform:d,transition:u=sw}=e;if(!i)return null;const p=a?d:{...d,scaleX:1,scaleY:1},m={...aw,width:i.width,height:i.height,top:i.top,left:i.left,transform:vr.Transform.toString(p),transformOrigin:a&&r?qb(r,i):void 0,transition:typeof u=="function"?u(r):u,...c};return ee.createElement(n,{className:l,style:m,ref:t},s)}),iw=e=>t=>{let{active:n,dragOverlay:r}=t;const a={},{styles:s,className:l}=e;if(s!=null&&s.active)for(const[i,c]of Object.entries(s.active))c!==void 0&&(a[i]=n.node.style.getPropertyValue(i),n.node.style.setProperty(i,c));if(s!=null&&s.dragOverlay)for(const[i,c]of Object.entries(s.dragOverlay))c!==void 0&&r.node.style.setProperty(i,c);return l!=null&&l.active&&n.node.classList.add(l.active),l!=null&&l.dragOverlay&&r.node.classList.add(l.dragOverlay),function(){for(const[c,d]of Object.entries(a))n.node.style.setProperty(c,d);l!=null&&l.active&&n.node.classList.remove(l.active)}},cw=e=>{let{transform:{initial:t,final:n}}=e;return[{transform:vr.Transform.toString(t)},{transform:vr.Transform.toString(n)}]},dw={duration:250,easing:"ease",keyframes:cw,sideEffects:iw({styles:{active:{opacity:"0"}}})};function uw(e){let{config:t,draggableNodes:n,droppableContainers:r,measuringConfiguration:a}=e;return Xi((s,l)=>{if(t===null)return;const i=n.get(s);if(!i)return;const c=i.node.current;if(!c)return;const d=cg(l);if(!d)return;const{transform:u}=yt(l).getComputedStyle(l),p=J3(u);if(!p)return;const m=typeof t=="function"?t:pw(t);return sg(c,a.draggable.measure),m({active:{id:s,data:i.data,node:c,rect:a.draggable.measure(c)},draggableNodes:n,dragOverlay:{node:l,rect:a.dragOverlay.measure(d)},droppableContainers:r,measuringConfiguration:a,transform:p})})}function pw(e){const{duration:t,easing:n,sideEffects:r,keyframes:a}={...dw,...e};return s=>{let{active:l,dragOverlay:i,transform:c,...d}=s;if(!t)return;const u={x:i.rect.left-l.rect.left,y:i.rect.top-l.rect.top},p={scaleX:c.scaleX!==1?l.rect.width*c.scaleX/i.rect.width:1,scaleY:c.scaleY!==1?l.rect.height*c.scaleY/i.rect.height:1},m={x:c.x-u.x,y:c.y-u.y,...p},y=a({...d,active:l,dragOverlay:i,transform:{initial:c,final:m}}),[b]=y,C=y[y.length-1];if(JSON.stringify(b)===JSON.stringify(C))return;const _=r==null?void 0:r({active:l,dragOverlay:i,...d}),x=i.node.animate(y,{duration:t,easing:n,fill:"forwards"});return new Promise(f=>{x.onfinish=()=>{_==null||_(),f()}})}}let l1=0;function fw(e){return v.useMemo(()=>{if(e!=null)return l1++,l1},[e])}const hw=ee.memo(e=>{let{adjustScale:t=!1,children:n,dropAnimation:r,style:a,transition:s,modifiers:l,wrapperElement:i="div",className:c,zIndex:d=999}=e;const{activatorEvent:u,active:p,activeNodeRect:m,containerNodeRect:y,draggableNodes:b,droppableContainers:C,dragOverlay:_,over:x,measuringConfiguration:f,scrollableAncestors:h,scrollableAncestorRects:j,windowRect:S}=fg(),g=v.useContext(ec),w=fw(p==null?void 0:p.id),T=pg(l,{activatorEvent:u,active:p,activeNodeRect:m,containerNodeRect:y,draggingNodeRect:_.rect,over:x,overlayNodeRect:_.rect,scrollableAncestors:h,scrollableAncestorRects:j,transform:g,windowRect:S}),E=Zp(m),D=uw({config:r,draggableNodes:b,droppableContainers:C,measuringConfiguration:f}),P=E?_.setRef:void 0;return ee.createElement(ow,null,ee.createElement(nw,{animation:D},p&&w?ee.createElement(lw,{key:w,id:p.id,ref:P,as:i,activatorEvent:u,adjustScale:t,className:c,transition:s,rect:E,style:{zIndex:d,...a},transform:T},n):null))});function Kp(e,t,n){const r=e.slice();return r.splice(n<0?r.length+n:n,0,r.splice(t,1)[0]),r}function mw(e,t){return e.reduce((n,r,a)=>{const s=t.get(r);return s&&(n[a]=s),n},Array(e.length))}function jl(e){return e!==null&&e>=0}function gw(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function xw(e){return typeof e=="boolean"?{draggable:e,droppable:e}:e}const Cl={scaleX:1,scaleY:1},vw=e=>{var t;let{rects:n,activeNodeRect:r,activeIndex:a,overIndex:s,index:l}=e;const i=(t=n[a])!=null?t:r;if(!i)return null;const c=yw(n,l,a);if(l===a){const d=n[s];return d?{x:a<s?d.left+d.width-(i.left+i.width):d.left-i.left,y:0,...Cl}:null}return l>a&&l<=s?{x:-i.width-c,y:0,...Cl}:l<a&&l>=s?{x:i.width+c,y:0,...Cl}:{x:0,y:0,...Cl}};function yw(e,t,n){const r=e[t],a=e[t-1],s=e[t+1];return!r||!a&&!s?0:n<t?a?r.left-(a.left+a.width):s.left-(r.left+r.width):s?s.left-(r.left+r.width):r.left-(a.left+a.width)}const Yp=e=>{let{rects:t,activeIndex:n,overIndex:r,index:a}=e;const s=Kp(t,r,n),l=t[a],i=s[a];return!i||!l?null:{x:i.left-l.left,y:i.top-l.top,scaleX:i.width/l.width,scaleY:i.height/l.height}},bl={scaleX:1,scaleY:1},jw=e=>{var t;let{activeIndex:n,activeNodeRect:r,index:a,rects:s,overIndex:l}=e;const i=(t=s[n])!=null?t:r;if(!i)return null;if(a===n){const d=s[l];return d?{x:0,y:n<l?d.top+d.height-(i.top+i.height):d.top-i.top,...bl}:null}const c=Cw(s,a,n);return a>n&&a<=l?{x:0,y:-i.height-c,...bl}:a<n&&a>=l?{x:0,y:i.height+c,...bl}:{x:0,y:0,...bl}};function Cw(e,t,n){const r=e[t],a=e[t-1],s=e[t+1];return r?n<t?a?r.top-(a.top+a.height):s?s.top-(r.top+r.height):0:s?s.top-(r.top+r.height):a?r.top-(a.top+a.height):0:0}const hg="Sortable",mg=ee.createContext({activeIndex:-1,containerId:hg,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:Yp,disabled:{draggable:!1,droppable:!1}});function bw(e){let{children:t,id:n,items:r,strategy:a=Yp,disabled:s=!1}=e;const{active:l,dragOverlay:i,droppableRects:c,over:d,measureDroppableContainers:u}=fg(),p=Ps(hg,n),m=i.rect!==null,y=v.useMemo(()=>r.map(g=>typeof g=="object"&&"id"in g?g.id:g),[r]),b=l!=null,C=l?y.indexOf(l.id):-1,_=d?y.indexOf(d.id):-1,x=v.useRef(y),f=!gw(y,x.current),h=_!==-1&&C===-1||f,j=xw(s);Kt(()=>{f&&b&&u(y)},[f,y,b,u]),v.useEffect(()=>{x.current=y},[y]);const S=v.useMemo(()=>({activeIndex:C,containerId:p,disabled:j,disableTransforms:h,items:y,overIndex:_,useDragOverlay:m,sortedRects:mw(y,c),strategy:a}),[C,p,j.draggable,j.droppable,h,y,_,c,m,a]);return ee.createElement(mg.Provider,{value:S},t)}const Sw=e=>{let{id:t,items:n,activeIndex:r,overIndex:a}=e;return Kp(n,r,a).indexOf(t)},ww=e=>{let{containerId:t,isSorting:n,wasDragging:r,index:a,items:s,newIndex:l,previousItems:i,previousContainerId:c,transition:d}=e;return!d||!r||i!==s&&a===l?!1:n?!0:l!==a&&t===c},_w={duration:200,easing:"ease"},gg="transform",kw=vr.Transition.toString({property:gg,duration:0,easing:"linear"}),Tw={roleDescription:"sortable"};function Ew(e){let{disabled:t,index:n,node:r,rect:a}=e;const[s,l]=v.useState(null),i=v.useRef(n);return Kt(()=>{if(!t&&n!==i.current&&r.current){const c=a.current;if(c){const d=ea(r.current,{ignoreTransform:!0}),u={x:c.left-d.left,y:c.top-d.top,scaleX:c.width/d.width,scaleY:c.height/d.height};(u.x||u.y)&&l(u)}}n!==i.current&&(i.current=n)},[t,n,r,a]),v.useEffect(()=>{s&&l(null)},[s]),s}function Nw(e){let{animateLayoutChanges:t=ww,attributes:n,disabled:r,data:a,getNewIndex:s=Sw,id:l,strategy:i,resizeObserverConfig:c,transition:d=_w}=e;const{items:u,containerId:p,activeIndex:m,disabled:y,disableTransforms:b,sortedRects:C,overIndex:_,useDragOverlay:x,strategy:f}=v.useContext(mg),h=Lw(r,y),j=u.indexOf(l),S=v.useMemo(()=>({sortable:{containerId:p,index:j,items:u},...a}),[p,a,j,u]),g=v.useMemo(()=>u.slice(u.indexOf(l)),[u,l]),{rect:w,node:T,isOver:E,setNodeRef:D}=tw({id:l,data:S,disabled:h.droppable,resizeObserverConfig:{updateMeasurementsFor:g,...c}}),{active:P,activatorEvent:Y,activeNodeRect:Q,attributes:G,setNodeRef:ne,listeners:oe,isDragging:V,over:O,setActivatorNodeRef:B,transform:I}=qS({id:l,data:S,attributes:{...Tw,...n},disabled:h.draggable}),H=$b(D,ne),W=!!P,be=W&&!b&&jl(m)&&jl(_),se=!x&&V,je=se&&be?I:null,Ne=be?je??(i??f)({rects:C,activeNodeRect:Q,activeIndex:m,overIndex:_,index:j}):null,st=jl(m)&&jl(_)?s({id:l,items:u,activeIndex:m,overIndex:_}):j,jt=P==null?void 0:P.id,fe=v.useRef({activeId:jt,items:u,newIndex:st,containerId:p}),Le=u!==fe.current.items,Qe=t({active:P,containerId:p,isDragging:V,isSorting:W,id:l,index:j,items:u,newIndex:fe.current.newIndex,previousItems:fe.current.items,previousContainerId:fe.current.containerId,transition:d,wasDragging:fe.current.activeId!=null}),Lt=Ew({disabled:!Qe,index:j,node:T,rect:w});return v.useEffect(()=>{W&&fe.current.newIndex!==st&&(fe.current.newIndex=st),p!==fe.current.containerId&&(fe.current.containerId=p),u!==fe.current.items&&(fe.current.items=u)},[W,st,p,u]),v.useEffect(()=>{if(jt===fe.current.activeId)return;if(jt&&!fe.current.activeId){fe.current.activeId=jt;return}const Ct=setTimeout(()=>{fe.current.activeId=jt},50);return()=>clearTimeout(Ct)},[jt]),{active:P,activeIndex:m,attributes:G,data:S,rect:w,index:j,newIndex:st,items:u,isOver:E,isSorting:W,isDragging:V,listeners:oe,node:T,overIndex:_,over:O,setNodeRef:H,setActivatorNodeRef:B,setDroppableNodeRef:D,setDraggableNodeRef:ne,transform:Lt??Ne,transition:Xt()};function Xt(){if(Lt||Le&&fe.current.newIndex===j)return kw;if(!(se&&!Qi(Y)||!d)&&(W||Qe))return vr.Transition.toString({...d,property:gg})}}function Lw(e,t){var n,r;return typeof e=="boolean"?{draggable:e,droppable:!1}:{draggable:(n=e==null?void 0:e.draggable)!=null?n:t.draggable,droppable:(r=e==null?void 0:e.droppable)!=null?r:t.droppable}}function Ci(e){if(!e)return!1;const t=e.data.current;return!!(t&&"sortable"in t&&typeof t.sortable=="object"&&"containerId"in t.sortable&&"items"in t.sortable&&"index"in t.sortable)}const Rw=[he.Down,he.Right,he.Up,he.Left],Dw=(e,t)=>{let{context:{active:n,collisionRect:r,droppableRects:a,droppableContainers:s,over:l,scrollableAncestors:i}}=t;if(Rw.includes(e.code)){if(e.preventDefault(),!n||!r)return;const c=[];s.getEnabled().forEach(p=>{if(!p||p!=null&&p.disabled)return;const m=a.get(p.id);if(m)switch(e.code){case he.Down:r.top<m.top&&c.push(p);break;case he.Up:r.top>m.top&&c.push(p);break;case he.Left:r.left>m.left&&c.push(p);break;case he.Right:r.left<m.left&&c.push(p);break}});const d=tS({active:n,collisionRect:r,droppableRects:a,droppableContainers:c,pointerCoordinates:null});let u=Q3(d,"id");if(u===(l==null?void 0:l.id)&&d.length>1&&(u=d[1].id),u!=null){const p=s.get(n.id),m=s.get(u),y=m?a.get(m.id):null,b=m==null?void 0:m.node.current;if(b&&y&&p&&m){const _=qi(b).some((g,w)=>i[w]!==g),x=xg(p,m),f=Ow(p,m),h=_||!x?{x:0,y:0}:{x:f?r.width-y.width:0,y:f?r.height-y.height:0},j={x:y.left,y:y.top};return h.x&&h.y?j:ms(j,h)}}}};function xg(e,t){return!Ci(e)||!Ci(t)?!1:e.data.current.sortable.containerId===t.data.current.sortable.containerId}function Ow(e,t){return!Ci(e)||!Ci(t)||!xg(e,t)?!1:e.data.current.sortable.index<t.data.current.sortable.index}const Aw=e=>{let{transform:t}=e;return{...t,y:0}};function vg(e,t,n){const r={...e};return t.top+e.y<=n.top?r.y=n.top-t.top:t.bottom+e.y>=n.top+n.height&&(r.y=n.top+n.height-t.bottom),t.left+e.x<=n.left?r.x=n.left-t.left:t.right+e.x>=n.left+n.width&&(r.x=n.left+n.width-t.right),r}const Gp=e=>{let{containerNodeRect:t,draggingNodeRect:n,transform:r}=e;return!n||!t?r:vg(r,n,t)},Mw=e=>{let{transform:t}=e;return{...t,x:0}},yg=e=>{let{transform:t,draggingNodeRect:n,windowRect:r}=e;return!n||!r?t:vg(t,n,r)},Xp=({items:e,setOrder:t,List:n=({children:c})=>c,Item:r,modifiers:a=[Gp],strategy:s=Yp,Overlay:l,...i})=>{const[c,d]=v.useState(null),u=Qb(Gh(Wp),Gh(Up,{coordinateGetter:Dw}));function p(b){const C=e.findIndex(_=>_.id===b.active.id);d(C)}function m(){d(null)}function y(b){const{active:C,over:_}=b;if(C.id!==_.id){const x=e.findIndex(h=>h.id===C.id),f=e.findIndex(h=>h.id===_.id);e[x].moved=!0,t(Kp(e,x,f))}d(null)}return o.jsxs(GS,{sensors:u,collisionDetection:eS,onDragStart:p,onDragCancel:m,onDragEnd:y,modifiers:a,children:[o.jsx(bw,{items:e,strategy:s,children:o.jsx(n,{...i,children:e.map(b=>o.jsx(Pw,{id:b.id,item:b,Item:r,...i},b.id))})}),l&&c&&o.jsx(hw,{children:o.jsx(l,{item:c,...i})})]})},Pw=({id:e,item:t,Item:n,...r})=>{const{attributes:a,listeners:s,setNodeRef:l,transform:i,transition:c}=Nw({id:e}),d={transform:vr.Translate.toString(i),transition:c};return o.jsx(n,{item:t,setNodeRef:l,style:d,listeners:s,...a,...r})},jg=({...e})=>o.jsx(Xp,{modifiers:[Mw,yg,Gp],strategy:jw,...e}),$w=({columns:e,visibleColumns:t,toggleVisibleColumn:n,columnOrder:r,changeColumnOrder:a})=>{const s=fs(t),l=r.map(c=>Np(e[c],"id label")),i=c=>{a(c.map(d=>d.id))};return o.jsxs(dn,{right:!0,iconRight:"square vertical-left=2.5 vertical-right=2.5",text:"Columns",size:"small",closeOnBlur:!1,children:[o.jsx("div",{className:"sortable list vertical",children:o.jsx(jg,{items:l,Item:Ab,setOrder:i,isVisible:s,toggleVisibleColumn:n})}),o.jsxs("div",{className:"smaller mar-b-2",children:["Click checkbox to show/hide.",o.jsx("br",{}),"Drag handle to order."]}),o.jsx(Pb,{})]})},Bw=pt.Consumer($w),Iw=({headerClass:e,Summary:t=pb,PageSize:n=kb,Columns:r=Bw})=>o.jsx("header",{className:e,children:o.jsxs("div",{className:"flex space middle",children:[o.jsx("div",{children:o.jsx(t,{})}),o.jsxs("div",{className:"flex gap-2",children:[o.jsx(r,{}),o.jsx(n,{})]})]})}),zw=pt.Consumer(Iw),i1=({value:e})=>ye(e)?e:"",Fw=({value:e})=>ye(e)?Ea(e):"",c1=({value:e})=>ye(e)?hj(e):"",Hw=({value:e})=>ye(e)?gj(e):"",Uw=({value:e})=>ye(e)?e?"true":"false":"",Vw={default:i1,text:i1,number:Fw,price:c1,currency:c1,boolean:Uw,title:Hw},Ww=({row:e,column:t,name:n,value:r,cellClass:a,sortColumn:s,sortingClass:l="sorting",displayTypes:i=Vw})=>{const c=t.type||"text",d=t.display||i[c]||i.default,u=s===n,p=we(a,t.className,u?l:null,t.right?"text-right":null);return o.jsx("td",{className:p,children:o.jsx(d,{row:e,column:t,value:r,name:n,field:n})})},Zw=pt.Consumer(Ww),Kw=({row:e,columns:t,visibleColumns:n,Cell:r=Zw})=>o.jsx("tr",{children:n.map(a=>{const s=t[a],l=s.field??a,i=e[l];return o.jsx(r,{row:e,name:a,field:l,column:s,value:i},a)})}),Yw=pt.Consumer(Kw),Gw=({page:e,Row:t=Yw})=>o.jsx("tbody",{children:e.rows.map((n,r)=>o.jsx(t,{row:n},n.id??r))}),Xw=pt.Consumer(Gw),Qw=({name:e,column:t,sortColumn:n,sortReverse:r,toggleSortColumn:a,sortUpIcon:s="arrow-up",sortDownIcon:l="arrow-down",unsortedIcon:i="arrows",sortIconClass:c="sort-icon",sortingClass:d="sorting",showFilters:u,toggleFilters:p,filters:m,filteringClass:y="filtering",filterIcon:b="filter",filteringIcon:C="filter-solid",filterIconClass:_="filter-icon",headingClass:x="heading",rightClass:f="right"})=>{const h=e===n,j=h&&r,S=ye(m[e]);return o.jsx("th",{className:we(x,t.right?f:null,u?y:null,S?y:null,h?d:null),onClick:()=>a(e),children:o.jsxs("div",{className:"flex space middle",children:[o.jsx("span",{className:"label",children:t.label}),o.jsxs("div",{className:"flex gap-1",children:[o.jsx(J,{className:_,name:S?C:b,onClick:p}),o.jsx(J,{className:c,name:h?j?s:l:i})]})]})})},qw=pt.Consumer(Qw),Jw=({columns:e,headingsClass:t="headings",visibleColumns:n,Heading:r=qw})=>o.jsx("thead",{children:o.jsx("tr",{className:t,children:n.map(a=>o.jsx(r,{name:a,column:e[a]},a))})}),e_=pt.Consumer(Jw),t_=({name:e,filters:t,setFilter:n,filterClass:r="filter",filteringClass:a="filtering",clearFilterIcon:s="cross"})=>o.jsx("th",{className:we(r,ye(t[e])?a:null),children:o.jsxs("div",{className:"flex space middle gap-1",children:[o.jsx("input",{type:"text",value:t[e]??"",onChange:l=>n(e,l.target.value)}),o.jsx(J,{name:s,onClick:()=>n(e,null)})]})}),n_=pt.Consumer(t_),r_=({columns:e,filtersClass:t="filters",visibleColumns:n,Filter:r=n_})=>o.jsx("thead",{children:o.jsx("tr",{className:t,children:n.map(a=>o.jsx(r,{name:a,column:e[a]},a))})}),o_=pt.Consumer(r_),a_=({tableClass:e="celled striped table",selectableClass:t="selectable",scrollX:n,rowClick:r,showFilters:a,Headings:s=e_,Filters:l=o_,Rows:i=Xw})=>o.jsxs("table",{className:we(e,n?"nowrap":"wide",{[t]:r}),children:[o.jsx(s,{}),a&&o.jsx(l,{}),o.jsx(i,{})]}),s_=pt.Consumer(a_),l_=({scrollX:e,Table:t=s_})=>o.jsx("div",{className:e?"scroll-x":"",children:o.jsx(t,{})}),i_=pt.Consumer(l_),c_=({page:e=0,pages:t,buttonClass:n="outline",pageClass:r=n,currentPageClass:a="solid",render:s,...l})=>{const d=t-1,u=t,p=e+1,m=e>0?e-1:null,y=ye(m)?m+1:null,b=e<d?e+1:null,C=ye(b)?b+1:null;return s({page:e,pageNo:p,firstPage:0,firstPageNo:1,lastPage:d,lastPageNo:u,pages:t,prevPage:m,prevPageNo:y,nextPage:b,nextPageNo:C,buttonClass:n,pageClass:r,currentPageClass:a,...l})},Tr=_r(c_),d_=Tr.Use,u_=({prevPage:e,setPage:t,buttonClass:n,prevClass:r=n,prevIcon:a="arrow-left"})=>o.jsx(A,{className:r,icon:a,onClick:()=>t(e),disabled:Hi(e)}),p_=Tr.Consumer(u_),f_=({nextPage:e,setPage:t,buttonClass:n,nextClass:r=n,nextIcon:a="arrow-right"})=>o.jsx(A,{className:r,icon:a,onClick:()=>t(e),disabled:!e}),h_=Tr.Consumer(f_),m_=({pageNo:e,text:t=e,buttonClass:n,className:r=n,onClick:a})=>o.jsx(A,{text:t,className:r,onClick:a}),g_=Tr.Consumer(m_),x_=o.jsx(o.Fragment,{children:"…"}),v_=({pageSeparatorClass:e="separator",pageSeparator:t=x_})=>o.jsx("div",{className:e,children:t}),y_=Tr.Consumer(v_),j_=({page:e,pageNo:t,firstPage:n,firstPageNo:r,prevPage:a,prevPageNo:s,nextPage:l,nextPageNo:i,lastPage:c,lastPageNo:d,setPage:u,pagesClass:p="pages",buttonClass:m,pageClass:y=m,currentPageClass:b="brand",showFirstLast:C=!0,Separator:_=y_,Page:x=g_})=>o.jsxs("div",{className:p,children:[C&&a>n&&o.jsxs(o.Fragment,{children:[o.jsx(x,{page:n,pageNo:r,className:y,onClick:()=>u(n)}),a>n+1&&o.jsx(_,{})]}),ye(a)&&o.jsx(x,{page:a,pageNo:s,className:y,onClick:()=>u(a)}),o.jsx(x,{page:e,pageNo:t,className:b,current:!0,disabled:!0}),ye(l)&&o.jsx(x,{page:l,pageNo:i,className:y,onClick:()=>u(l)}),C&&l&&l<c&&o.jsxs(o.Fragment,{children:[l<c-1&&o.jsx(_,{}),o.jsx(x,{page:c,pageNo:d,className:y,onClick:()=>u(c)})]})]}),C_=Tr.Consumer(j_),b_=({className:e="pager",size:t,color:n,Previous:r=p_,Next:a=h_,Pages:s=C_})=>o.jsxs("div",{className:we(e,t,n),children:[o.jsx(r,{}),o.jsx(s,{}),o.jsx(a,{})]}),S_=Tr.Consumer(b_),w_=({Content:e=S_,...t})=>o.jsx(Tr.Provider,{...t,children:o.jsx(e,{})}),Vt=xe(w_,"Pager"),__=({footerClass:e,pager:t={},page:n,setPageNo:r})=>o.jsx("footer",{className:e,children:o.jsx(Vt,{page:n.page,pages:n.pages,setPage:a=>r(a+1),...t})}),k_=pt.Consumer(__),T_=({color:e,className:t="datatable",Header:n=zw,Body:r=i_,Footer:a=k_})=>o.jsxs("section",{className:we(t,e),children:[o.jsx(n,{}),o.jsx(r,{}),o.jsx(a,{})]}),E_=pt.Consumer(T_),N_=({Content:e=E_,...t})=>o.jsx(pt.Provider,{...t,children:o.jsx(e,{})}),Gt=xe(N_,"Datatable"),L_=({summary:e,summaryClass:t})=>o.jsx("summary",{className:t,children:e}),R_=({content:e,children:t,contentClass:n})=>o.jsx("div",{className:n,children:e||t}),D_=({className:e,size:t,color:n,lined:r,border:a,radius:s,shaded:l,shadow:i,open:c,Summary:d=L_,Content:u=R_,...p})=>o.jsxs("details",{className:we(e,n,Zi(a),Pp(s),Mp(i),{size:t,color:n,lined:r,shaded:l}),open:c,children:[o.jsx(d,{...p}),o.jsx(u,{...p})]}),Xe=xe(D_,"Details"),O_=({close:e,icon:t="cross",className:n="close"})=>o.jsx("div",{className:n,onClick:e,children:o.jsx(J,{name:t})}),A_=xe(O_,"ModalClose"),M_=({title:e,header:t})=>e||t?o.jsxs("header",{children:[!!e&&o.jsx("h3",{children:e}),t]}):null,P_=xe(M_,"ModalHeader"),$_=({footer:e})=>!!e&&o.jsx("footer",{children:e}),B_=xe($_,"ModalFooter"),I_=({text:e,children:t,Header:n=P_,Footer:r=B_,...a})=>o.jsxs("article",{children:[o.jsx(n,{...a}),e||t,o.jsx(r,{...a})]}),z_=xe(I_,"ModalContent"),F_=({ref:e,open:t,close:n,className:r,closeClass:a="close",closeIcon:s="cross",Close:l=A_,Content:i=z_,...c})=>(e||(e=v.useRef(null)),v.useEffect(()=>{const{current:d}=e;t?d.showModal():d.close()},[t]),o.jsxs("dialog",{ref:e,className:r,children:[!!n&&o.jsx(l,{close:n,icon:s,className:a}),o.jsx(i,{...c})]})),wn=xe(F_,"Modal"),H_=({open:e=!1}={})=>{const{isVisible:t,show:n,hide:r}=wr({visible:e});return{show:n,hide:r,Modal:a=>o.jsx(wn,{open:t,...a})}},U_=({color:e,className:t,style:n,fixed:r,light:a,dark:s,children:l})=>o.jsx("div",{className:we("overlay",t,e,{fixed:r,light:a,dark:s}),style:n,children:l}),ta=xe(U_,"Overlay"),V_=({open:e=!1}={})=>{const{isVisible:t,show:n,hide:r}=wr({visible:e});return{show:n,hide:r,Overlay:a=>t&&o.jsx(ta,{...a})}},W_=({className:e,disabled:t,children:n})=>o.jsx("label",{className:we(e,{disabled:t}),children:n}),Z_=xe(W_,"RadioLabel"),K_=({name:e,option:t,tabIndex:n=0,onChange:r=Pe,checked:a})=>o.jsx("input",{type:"radio",name:e,disabled:t.disabled,"aria-disabled":t.disabled,tabIndex:t.disabled?-1:n,onChange:s=>r(s.target.checked),checked:a}),Y_=xe(K_,"RadioInput"),G_=({name:e,option:t,checked:n,inline:r,border:a,labelClass:s="radio",inputClass:l,Label:i=Z_,Input:c=Y_,onChange:d})=>o.jsxs(i,{className:we(s,t.labelClass,{inline:r,border:a}),disabled:t.disabled,option:t,children:[o.jsx(c,{name:e,option:t,checked:n,className:we(l,t.inputClass),onChange:()=>d(t.value)}),t.text??t.label??t.name]}),X_=xe(G_,"RadioOption"),Q_=({value:e,options:t,className:n="radioset",disabled:r,Option:a=X_,...s})=>o.jsx("div",{className:we(n,{disabled:r}),children:t.map(l=>{const i=Qo(l)?l:{value:l,label:l};return o.jsx(a,{option:i,checked:i.value===e,value:e,...s},i.value)})}),Fn=xe(Q_,"Radio"),Zc={searching:!1,search:void 0,results:void 0,result:void 0,cursor:void 0};class qn extends Ua{constructor(t){super(t);const n=this.inputValue();this.state={...this.state,input:n,searching:!1},this.startSearch=t.debounceTime?yj(this.search.bind(this),t.debounceTime):this.search.bind(this)}componentDidMount(){this.mounted=!0,this.props.onLoad(this)}componentWillUnmount(){this.setState({results:null}),this.mounted=!1,this.props.onUnload(this)}inputValue(t=this.props.initialValue){return ye(t)?this.props.displayValue(t):Il}onFocus(){this.debug("onFocus()"),this.setState({hasFocus:!0},this.props.onFocus)}onBlur(){this.debug("onBlur()"),this.setState({hasFocus:!1},this.props.onBlur),Ui(500).then(()=>this.clearResults())}onChange(t){const n=t.target.value;this.debug(`input: ${n}`),n.length>=this.props.minLength?this.setState({input:n},this.startSearch):this.setState({input:n,...Zc})}onKeyDown(t){this.debug(`onKeyDown(${t.key})`);const n=this.state.cursor;switch(t.key){case $p:this.setCursor(n+1);break;case Bp:this.setCursor(n-1);break;case Ki:this.selectCursor();break;case Yi:this.reset();break;default:return}t.preventDefault()}reset(){this.debug("reset()");const t=this.props.initialValue,n=this.inputValue(t);this.debug(`reset() [input:${n}] from value: `,t),this.setState({value:t,input:n,...Zc},this.props.onReset)}search(){const{input:t}=this.state,{minLength:n,onSearch:r}=this.props;if(t.length<n){this.debug(`search() cancelled - input is shorter than ${n}`);return}if(!r){this.debug("search() cancelled - no onSearch() handler defined");return}this.debug("onSearch: ",r),this.setState({search:t,searching:!0},async()=>this.searchResults(await r(t,this)))}searchResults(t){this.debug("searchResults()",t),this.setState({results:t,searching:!1,cursor:0})}selectResult(t){this.debug("selectResult()",t);const n=this.inputValue(t);this.setState({value:t,input:n,...Zc},()=>this.props.onSelect(t))}setCursor(t){this.debug(`setCursor(${t})`);const{results:n}=this.state;this.setState({cursor:n&&n.length?(t+n.length)%n.length:void 0})}selectCursor(){const{cursor:t,results:n}=this.state;n&&n.length&&ye(t)&&this.selectResult(n[t])}clearResults(){this.mounted&&this.setState({results:null})}resultsRef(t){this._resultsRef=t}activeRef(t){V3(this._resultsRef,t)}}me(qn,"debug",!1),me(qn,"debugPrefix","Search > "),me(qn,"debugColor","MediumVioletRed"),me(qn,"defaultProps",{minLength:2,debounceTime:500,onLoad:Pe,onUnload:Pe,onFocus:Pe,onBlur:Pe,onReset:Pe,onSelect:Pe,displayValue:hi("displayValue"),displayResult:hi("displayResult")}),me(qn,"initialState",{value:"",searching:!1}),me(qn,"initialProps",{value:"initialValue"}),me(qn,"actions",["onFocus","onBlur","onChange","onKeyDown","reset","selectResult","setCursor","selectCursor","resultsRef","activeRef"]);const na=_r(qn),q_=({input:e,onFocus:t,onBlur:n,onChange:r,reset:a,placeholder:s="Search",clearIcon:l="cross",searchIcon:i="search",searchingIcon:c="cog.spin",inputsClass:d="inputs round",prefixClass:u="prefix",suffixClass:p="suffix",inputType:m="text",inputClass:y="",disabled:b,searching:C})=>o.jsxs("div",{className:d,children:[o.jsx("div",{className:u,children:o.jsx(J,{name:i})}),o.jsx("input",{type:m,placeholder:s,value:e,onFocus:t,onBlur:n,onChange:r,disabled:b,className:y}),o.jsx("div",{className:p,onClick:a,children:o.jsx(J,{name:C?c:l})})]}),J_=na.Consumer(q_),ek=({result:e,active:t,activeRef:n,onClick:r,onMouseEnter:a,displayResult:s,resultClass:l="item",activeClass:i="active"})=>o.jsx("div",{className:we(l,{[i]:t}),onClick:r,onMouseEnter:a,ref:t?n:null,children:s(e)}),tk=na.Consumer(ek),nk=({noResultsClass:e="none",noResults:t="No results"})=>o.jsx("div",{className:e,children:t}),rk=na.Consumer(nk),ok=({results:e,resultsRef:t,cursor:n,selectResult:r,setCursor:a,resultsClass:s="menu border bdr-1",Result:l=tk,NoResults:i=rk})=>o.jsx("div",{className:s,ref:t,children:Xo(e)&&e.length?e.map((c,d)=>o.jsx(l,{result:c,active:ye(n)&&e[n]===c,onClick:()=>r(c),onMouseEnter:()=>a(d)},c.id??c.value??d)):o.jsx(i,{})}),ak=na.Consumer(ok),sk=({results:e,onKeyDown:t,Input:n=J_,Results:r=ak})=>o.jsxs("div",{className:"search",onKeyDown:t,children:[o.jsx(n,{}),!!e&&o.jsx(r,{})]}),lk=na.Consumer(sk),ik=({Content:e=lk,...t})=>o.jsx(na.Provider,{...t,children:o.jsx(e,{})}),tc=xe(ik,"Search");var wt;let ck=(wt=class extends mi{constructor(t){super(t),this.state={...this.state,...this.valueState(),closeOnBlur:!this.props.search},this.debug(`search: ${this.props.search}  closeOnBlur: ${this.state.closeOnBlur}`)}componentDidUpdate(t){this.props.value!==t.value&&(this.debug(`value has changed from ${t.value} to ${this.props.value}`),this.setState(this.valueState()))}initialCursor(){return this.state.cursor}valueState(t=this.props.value){const n=this.props.options,[r,a]=this.props.findOption(n,t),s=this.inputValue(r);return{value:r,cursor:a,input:s,options:n}}inputValue(t=this.props.value){return ye(t)?this.props.displayValue(t):null}selectState(t){const n=this.inputValue(t);return{value:t,input:n,selected:t}}closeState(){return{...this.constructor.inactiveState,options:this.props.options}}onKeyDown(t){switch(this.debug(`onKeyDown(${t.key})`),t.key){case $p:this.state.isOpen?this.setCursor(this.cursorNextIndex()):this.open(this.initialCursor()??this.cursorFirstIndex());break;case Bp:this.state.isOpen?this.setCursor(this.cursorPrevIndex()):this.open(this.initialCursor()??this.cursorLastIndex());break;case Ki:this.state.isOpen?this.selectCursor():this.open(this.initialCursor()??this.cursorFirstIndex());break;case Yi:this.close();break;case $C:this.debug("backspace"),this.searchBackspace();break;case PC:return;case Ip:if(this.state.isOpen){if(!(this.state.searchInput??Il).length)break}else{this.debug("space to open"),this.open(this.cursorFirstIndex());break}default:if(this.debug("default keypress"),t.altKey||t.ctrlKey||t.metaKey)return;if(t.key.length===1){console.log(`typed key ${t.key}`),this.searchKey(t.key),this.state.open||this.open(),this._searchRef&&this._searchRef.focus();break}console.log(`ignored key ${t.key}`);return}t.preventDefault()}searchRef(t){this.debug("searchRef()"),this._searchRef=t}focusSearch(t){this.debug("focusSearch()"),t==null||t.stopPropagation(),this.setState({searchFocus:!0})}blurSearch(){this.debug("blurSearch()"),this.setState({searchFocus:!1}),this.closeSoon()}setSearch(t){this.setState({searchInput:t},()=>this.searchOptions())}searchKey(t){this.setSearch((this.state.searchInput??Il)+t)}searchBackspace(){this.setSearch(ye(this.state.searchInput)&&this.state.searchInput.length>1?this.state.searchInput.slice(0,-1):void 0)}clearSearch(t){t==null||t.preventDefault(),t==null||t.stopPropagation(),this._searchRef&&(this.debug("re-focussing search input"),this._searchRef.focus()),this.setSearch(void 0)}searchOptions(){this.debug("searchOptions()");const{options:t,searchOptions:n}=this.props;this.setState(r=>({options:ye(r.searchInput)?n(r.searchInput,this.props.options.filter(this.props.validOption)):t,cursor:0}))}closeable(t){return this.debug(`closeable()  force:${t}  hasHover:${this.state.hasHover}  searchFocus:${this.state.searchFocus}`),t||!(this.state.hasHover||this.state.searchFocus)}menuOptions(){return this.state.options}},me(wt,"debug",!1),me(wt,"debugPrefix","Select > "),me(wt,"debugColor","MediumVioletRed"),me(wt,"defaultProps",{...wt.defaultProps,options:[],search:!1,findOption:LC,validOption:Rs,searchOptions:RC,displayValue:hi("displayValue"),displayOption:hi("displayOption")}),me(wt,"inactiveState",{isOpen:!1,selected:void 0,searchInput:void 0}),me(wt,"initialState",{value:Il,cursor:void 0,...wt.inactiveState}),me(wt,"initialProps",{}),me(wt,"actions",["onFocus","onBlur","onClick","onKeyDown","open","close","setCursor","selectCursor","selectOption","menuRef","activeRef","searchRef","focusSearch","blurSearch","setSearch","clearSearch"]),wt);const so=_r(ck),dk=({input:e,onFocus:t,onBlur:n,onClick:r,placeholder:a="Select",placeholderClass:s="placeholder",inputsClass:l="inputs",inputClass:i="input",suffixClass:c="suffix",disabled:d})=>o.jsxs("div",{className:l,onClick:r,children:[o.jsx("div",{onFocus:t,onBlur:n,disabled:d,className:i,tabIndex:0,children:ye(e)?o.jsx(o.Fragment,{children:e}):o.jsx("span",{className:s,children:a})}),o.jsx("div",{className:c,children:o.jsx(J,{name:"angle-down"})})]}),uk=so.Consumer(dk),pk=({option:e,active:t,activeRef:n,selected:r,onClick:a,onMouseEnter:s,validOption:l,displayOption:i,optionClass:c="item no-hover",activeClass:d="active",selectedClass:u="selected",disabledClass:p="disabled"})=>o.jsx("div",{className:we(c,e.className,t?d:null,r?u:null,l(e)?null:p),onMouseEnter:s,onClick:a,ref:t?n:null,"aria-disabled":e.disabled,children:i(e)}),fk=so.Consumer(pk),hk=({noOptionsClass:e="none",noOptions:t="No options"})=>o.jsx("div",{className:e,children:t}),mk=so.Consumer(hk),gk=({options:e,menuRef:t,menuClass:n="menu border bdr-1",cursor:r,selected:a,selectOption:s,setCursor:l,Option:i=fk,NoOptions:c=mk})=>o.jsx("div",{className:n,ref:t,children:Xo(e)&&e.length?e.map((d,u)=>o.jsx(i,{option:d,active:ye(r)&&e[r]===d,selected:a===d,onClick:()=>s(d),onMouseEnter:()=>l(u)},d.id??d.value??u)):o.jsx(c,{})}),xk=so.Consumer(gk),vk=({searchInput:e,focusSearch:t,blurSearch:n,searchRef:r,setSearch:a,clearSearch:s,searchPlaceholder:l="Search",searchFieldClass:i="search field",searchInputsClass:c="inputs",searchPrefixClass:d="shaded lined prefix",searchSuffixClass:u="shaded lined suffix",searchClearClass:p="clear",inputClass:m,searchIcon:y="search",clearSearchIcon:b="cross"})=>o.jsx("div",{className:i,children:o.jsxs("div",{className:c,children:[o.jsx("div",{className:d,children:o.jsx(J,{name:y})}),o.jsx("input",{ref:r,className:m,type:"text",placeholder:l,value:e??"",onClick:C=>C.stopPropagation(),onChange:C=>a(C.target.value),onFocus:t,onBlur:n,autoComplete:"chrome-is-broken",tabIndex:"0"}),o.jsx("div",{className:we(u,e?p:null),onClick:s,children:o.jsx(J,{name:b})})]})}),yk=so.Consumer(vk),jk=({onKeyDown:e,isOpen:t,search:n,selectClass:r="select",openClass:a="open",closedClass:s="closed",Input:l=uk,Search:i=yk,Menu:c=xk})=>o.jsxs("div",{className:we(r,t?a:s),onKeyDown:e,children:[o.jsx(l,{}),!!t&&!!n&&o.jsx(i,{}),!!t&&o.jsx(c,{})]}),Ck=so.Consumer(jk),bk=({Content:e=Ck,...t})=>o.jsx(so.Provider,{...t,children:o.jsx(e,{})}),Er=xe(bk,"Select"),Sk=({...e})=>o.jsx(Xp,{modifiers:[Aw,yg,Gp],strategy:vw,...e}),wk=()=>o.jsxs(q,{children:[o.jsx("h3",{children:"Hello World!"}),"This is an alert."]}),_k=`import React from 'react'
import { Alert } from '@/src/index.jsx'

{/* START */}
// PRETEND: import { Alert } from '@abw/badger-react-ui'

const AlertExample = () =>
  <Alert>
    <h3>Hello World!</h3>
    This is an alert.
  </Alert>

export default AlertExample
`,kk=["red","brown","orange","yellow","olive","green","teal","blue","indigo","violet","purple","pink","maroon"],Cg=({color:e,setColor:t,disabled:n=!1})=>o.jsxs("select",{name:"color",required:!0,value:e,onChange:r=>t(r.target.value),disabled:n,children:[o.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Select Range"}),o.jsx("option",{value:"",children:"Default"}),kk.map(r=>o.jsx("option",{value:r,children:r},r))]}),Tk=["smallest","smaller","small","medium","large","larger","largest","x2","x3","x4","x5","x6","x7","x8","x9","x10"],bg=({size:e,setSize:t})=>o.jsxs("select",{name:"size",required:!0,value:e,onChange:n=>t(n.target.value),children:[o.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Size"}),o.jsx("option",{value:"",children:"Default"}),Tk.map(n=>o.jsx("option",{value:n,children:n},n))]}),Ek=[0,1,2,3,4,5,6,8,10],Nk=({radius:e,setRadius:t})=>o.jsxs("select",{name:"radius",required:!0,value:e,onChange:n=>t(n.target.value),children:[o.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Radius"}),o.jsx("option",{value:"",children:"Default"}),Ek.map(n=>o.jsx("option",{value:n,children:n},n))]}),Lk=[1,2,3,4,5],Rk=({shadow:e,setShadow:t})=>o.jsxs("select",{name:"shadow",required:!0,value:e,onChange:n=>t(n.target.value),children:[o.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Shadow"}),o.jsx("option",{value:"",children:"Default"}),Lk.map(n=>o.jsx("option",{value:n,children:n},n))]}),d1=({checked:e,toggle:t,label:n,disabled:r=!1})=>o.jsxs("label",{className:"checkbox border no-focus",children:[o.jsx("input",{type:"checkbox",checked:e,onChange:t,disabled:r}),n]}),Dk=[0,1,2,3,4,5,6,8,10],Ok=({border:e,setBorder:t,disabled:n=!1})=>o.jsxs("select",{name:"border",required:!0,value:e,onChange:r=>t(r.target.value),disabled:n,children:[o.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Border"}),o.jsx("option",{value:"",children:"Default"}),Dk.map(r=>o.jsx("option",{value:r,children:r},r))]}),Ak=Object.keys(ks.icons),ru=({icon:e,setIcon:t,disabled:n=!1})=>o.jsxs("select",{name:"icon",required:!0,value:e,onChange:r=>t(r.target.value),disabled:n,children:[o.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Icon"}),o.jsx("option",{value:"",children:"None"}),Ak.map(r=>o.jsx("option",{value:r,children:r},r))]}),Mk=()=>{const[e,t]=v.useState(0),[n,r]=v.useState({headline:"",title:"",text:"Hello World!",revealable:!1,stripe:!1}),a=c=>()=>{r(d=>({...d,[c]:!d[c]})),t(d=>d+1)},s=c=>d=>{r(u=>({...u,[c]:d})),t(u=>u+1)},i=`<Alert
  ${$k(n)}
/>`;return o.jsxs("div",{className:"example grid-2 gap-h-8 stack-desktop",children:[o.jsxs("div",{children:[o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Output"}),o.jsx("div",{className:"output mar-b-8",children:o.jsx(Bk,{options:n},e)})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Markup"}),o.jsx(Rn,{code:i,language:"html",expand:!0})]})]}),o.jsx(Pk,{options:n,setOption:s,toggleOption:a})]})},Pk=({options:e,toggleOption:t,setOption:n})=>{const r=n("headline"),a=n("title"),s=n("text"),l=n("type"),i=n("size"),c=n("color"),d=n("border"),u=n("radius"),p=n("shadow"),m=n("icon"),y=n("headicon"),b=t("stripe"),C=t("revealable");return o.jsxs("div",{children:[o.jsx(Kc,{label:"Headline",value:e.headline,setValue:r}),o.jsx(Kc,{label:"Title",value:e.title,setValue:a}),o.jsx(Kc,{label:"Text",value:e.text,setValue:s}),o.jsxs("div",{className:"grid-2 gap-h-4 stack-mobile top",children:[o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Type"}),o.jsx(Ik,{type:e.type,setType:l})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Color"}),o.jsx(Cg,{color:e.color,setColor:c,disabled:e.type})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Size"}),o.jsx(bg,{size:e.size,setSize:i})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Shadow"}),o.jsx(Rk,{shadow:e.shadow,setShadow:p})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Border Width"}),o.jsx(Ok,{border:e.border,setBorder:d,disabled:e.stripe})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Border Radius"}),o.jsx(Nk,{radius:e.radius,setRadius:u})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Headline Icon"}),o.jsx(ru,{icon:e.headicon,setIcon:y,disabled:!e.headline})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Body Icon"}),o.jsx(ru,{icons:e.icon,setIcon:m})]})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Options"}),o.jsxs("div",{className:"grid-2 gap-h-4 stack-mobile top",children:[o.jsx(d1,{checked:e.stripe,toggle:b,label:"Stripe"}),o.jsx(d1,{checked:e.revealable,toggle:C,label:"Revealable",disabled:!e.headline})]})]})]})},$k=e=>{const t=["headline","title","text","type","color","size","headicon","icon"].filter(a=>e[a]).map(a=>`${a}="${e[a]}"`),n=["shadow","border","radius"].filter(a=>e[a]).map(a=>`${a}={${e[a]}}`),r=["stripe","revealable","dismissable"].filter(a=>e[a]);return[...t,...n,...r].join(`
  `)},Bk=({options:e})=>o.jsx(q,{...e}),Ik=({type:e,setType:t})=>o.jsxs("select",{name:"type",required:!0,value:e,onChange:n=>t(n.target.value),children:[o.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Type"}),o.jsx("option",{value:"",children:"Default"}),["info","warning","success","error"].map(n=>o.jsx("option",{value:n,children:n},n))]}),Kc=({label:e,value:t,setValue:n})=>o.jsxs("div",{className:"field",children:[o.jsx("label",{children:e}),o.jsxs("div",{className:"inputs",children:[o.jsx("input",{type:"text",name:"headline",value:t,onChange:r=>n(r.target.value)}),o.jsx("div",{className:"suffix",children:o.jsx(J,{name:"cross",className:"hover",onClick:()=>n("")})})]})]}),Sg=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["Use the ",o.jsx("code",{children:"Alert"})," component to render an alert. Any child elements will be rendered inside the alert body."]}),o.jsx(pe,{Component:wk,code:_k,expand:!0}),o.jsx("h2",{children:"Demo"}),o.jsx(Mk,{})]}),zk=Object.freeze(Object.defineProperty({__proto__:null,default:Sg},Symbol.toStringTag,{value:"Module"})),Qp=e=>e.replaceAll(/\W+/g,"-").replace(/^-+/,"").replace(/-+$/,"").toLowerCase(),Fk=({render:e})=>{const[t,n]=v.useState({}),r=v.useRef();return e({tocs:t,addToc:(l,i,c,d)=>{const u=t[l]||(t[l]={});u[i]={text:c,ref:d},n({...t})},addTocHeading:(l,i,c,d)=>{const u=t[l]||(t[l]={});u[i]={heading:c,ref:d},n({...t})},contentRef:r})},Bs=_r(Fk),Hk=({addToc:e,addTocHeading:t,tocName:n,render:r})=>r({addPageToc:(l,i,c)=>{e(n,l,i,c)},addPageTocHeading:(l,i,c)=>{t(n,l,i,c)}}),qp=_r(Bs.Consumer(Hk)),Uk=({id:e,code:t,title:n=t,children:r,addPageToc:a,split:s})=>{const l=Qp(e||t||n),i=v.useRef(),c=t?`code:${t}`:n;return v.useEffect(()=>{a&&a(l,c,i)},[e,t,n]),o.jsxs("section",{id:l,ref:i,children:[o.jsx("h3",{className:t?"font-mono page-section":"page-section",children:n}),o.jsx("div",{className:s?"cols-2 stack-desktop":"",children:r})]})},U=qp.Consumer(Uk),R=({Component:e,Source:t,children:n,code:r,title:a,caption:s=r?o.jsx("code",{children:r}):a,expand:l,undent:i,lineProps:c,highlightLines:d,...u})=>o.jsxs(U,{code:r,title:a,...u,children:[o.jsx("div",{className:"cols-2 stack-desktop mar-b-4",children:n}),o.jsx(pe,{Component:e,code:t,caption:s,expand:l,undent:i,highlightLines:d,lineProps:c})]}),Vk=()=>o.jsxs("div",{children:[o.jsx(Da,{text:"Error alert"}),o.jsx(Da,{text:"Error alert with border",border:!0}),o.jsx(Da,{headline:"Error Alert",text:"Error alert with headline",border:!0,shadow:!0}),o.jsx(Da,{title:"Stonehenge",text:"Crushed by a dwarf",icon:"exclamation-thick",stripe:!0,shadow:3})]}),Wk=`import React from 'react'
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
`,wg=()=>o.jsx(R,{code:"Error",Component:Vk,Source:Wk,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"Error"})," component is a short-cut to generate an error alert."]})}),Zk=Object.freeze(Object.defineProperty({__proto__:null,default:wg},Symbol.toStringTag,{value:"Module"})),Kk=()=>o.jsxs("div",{children:[o.jsx(Na,{text:"Info alert"}),o.jsx(Na,{text:"Info alert with border",border:!0}),o.jsx(Na,{headline:"Info Alert",text:"Info alert with headline",border:!0,shadow:!0}),o.jsx(Na,{title:"Stonehenge",text:"Where the demons dwell",icon:"info",stripe:!0,shadow:3})]}),Yk=`import React from 'react'
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
`,_g=()=>o.jsx(R,{code:"Info",Component:Kk,Source:Yk,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"Info"})," component is a short-cut to generate an info alert."]})}),Gk=Object.freeze(Object.defineProperty({__proto__:null,default:_g},Symbol.toStringTag,{value:"Module"})),Xk=()=>o.jsxs("div",{children:[o.jsx(La,{text:"Success alert"}),o.jsx(La,{text:"Success alert with border",border:!0}),o.jsx(La,{headline:"Success Alert",text:"Success alert with headline",border:!0,shadow:!0}),o.jsx(La,{title:"Stonehenge",text:"Where the banshees live...",icon:"check-thicker-shrink=4",stripe:!0,shadow:3})]}),Qk=`import React from 'react'
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
`,kg=()=>o.jsx(R,{code:"Success",Component:Xk,Source:Qk,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"Success"})," component is a short-cut to generate a success alert."]})}),qk=Object.freeze(Object.defineProperty({__proto__:null,default:kg},Symbol.toStringTag,{value:"Module"})),Jk=()=>o.jsxs("div",{children:[o.jsx(Ra,{text:"Warning alert"}),o.jsx(Ra,{text:"Warning alert with border",border:!0}),o.jsx(Ra,{headline:"Warning Alert",text:"Warning alert with headline",border:!0,shadow:!0}),o.jsx(Ra,{title:"Stonehenge",text:"...and they do live well",icon:"exclamation-thick",stripe:!0,shadow:3})]}),eT=`import React from 'react'
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
`,Tg=()=>o.jsx(R,{code:"Warning",Component:Jk,Source:eT,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"Warning"})," component is a short-cut to generate a warning alert."]})}),tT=Object.freeze(Object.defineProperty({__proto__:null,default:Tg},Symbol.toStringTag,{value:"Module"})),nT=()=>o.jsxs("div",{children:[o.jsx(q,{text:"Border Alert",border:!0}),o.jsx(q,{text:"Border Width 2",border:2})]}),rT=`import React from 'react'
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
`,Eg=()=>o.jsx(R,{code:"border",Component:nT,Source:rT,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"border"})," property can be used to add a border.  This can be a number to indicate the border width."]})}),oT=Object.freeze(Object.defineProperty({__proto__:null,default:Eg},Symbol.toStringTag,{value:"Module"})),aT=()=>o.jsx(q,{text:"Hello World!",className:"border shadow-2"}),sT=`import React from 'react'
import { Alert } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Alert
    text="Hello World!"
    className="border shadow-2"
  />
/* END */

export default Component
`,Ng=()=>o.jsx(R,{code:"className",Component:aT,Source:sT,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"className"})," property can be used to set a CSS class."]})}),lT=Object.freeze(Object.defineProperty({__proto__:null,default:Ng},Symbol.toStringTag,{value:"Module"})),iT=()=>o.jsxs("div",{children:[o.jsx(q,{text:"Red Alert",color:"red"}),o.jsx(q,{text:"Brown Alert",color:"brown"}),o.jsx(q,{text:"Orange Alert",color:"orange"}),o.jsx(q,{text:"Yellow Alert",color:"yellow"}),o.jsx(q,{text:"Green Alert",color:"green"}),o.jsx(q,{text:"Teal Alert",color:"teal"}),o.jsx(q,{text:"Blue Alert",color:"blue"}),o.jsx(q,{text:"Indigo Alert",color:"indigo"}),o.jsx(q,{text:"Violet Alert",color:"violet"}),o.jsx(q,{text:"Purple Alert",color:"purple"}),o.jsx(q,{text:"Pink Alert",color:"pink"}),o.jsx(q,{text:"Maroon Alert",color:"maroon"})]}),cT=`import React from 'react'
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
`,Lg=()=>o.jsx(R,{code:"color",Component:iT,Source:cT,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"color"})," property can be used to set the color range used for the alert."]})}),dT=Object.freeze(Object.defineProperty({__proto__:null,default:Lg},Symbol.toStringTag,{value:"Module"})),uT=()=>o.jsx(q,{headline:"Dismissable Alert",text:"A dismissable alert",dismissable:!0}),pT=`import React from 'react'
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
`,Rg=()=>o.jsx(R,{code:"dismissable",Component:uT,Source:pT,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"dismissable"})," property can be used to make an alert dismissable."]})}),fT=Object.freeze(Object.defineProperty({__proto__:null,default:Rg},Symbol.toStringTag,{value:"Module"})),hT=()=>o.jsx(q,{headline:"Headline Icon Alert",headIcon:"bars",text:"An alert with a headline icon"}),mT=`import React from 'react'
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
`,Dg=()=>o.jsx(R,{code:"headicon",Component:hT,Source:mT,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"headIcon"})," property can be used to add an icon to the headline."]})}),gT=Object.freeze(Object.defineProperty({__proto__:null,default:Dg},Symbol.toStringTag,{value:"Module"})),xT=()=>o.jsx(q,{headline:"Headline Alert",text:"An alert with a headline"}),vT=`import React from 'react'
import { Alert } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Alert
    headline="Headline Alert"
    text="An alert with a headline"
  />
/* END */

export default Component
`,Og=()=>o.jsx(R,{code:"headline",Component:xT,Source:vT,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"headline"})," property can be used to set a headline."]})}),yT=Object.freeze(Object.defineProperty({__proto__:null,default:Og},Symbol.toStringTag,{value:"Module"})),jT=()=>o.jsxs("div",{children:[o.jsx(q,{icon:"info",type:"info",title:"Eleven",text:"It's one louder"}),o.jsx(q,{icon:"check",type:"success",title:"Eleven",text:"It's one louder"}),o.jsx(q,{icon:"exclamation",type:"error",title:"Eleven",text:"It's one louder"})]}),CT=`import React from 'react'
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
`,Ag=()=>o.jsx(R,{code:"icon",Component:jT,Source:CT,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"icon"})," property can be used to add an icon to the body."]})}),bT=Object.freeze(Object.defineProperty({__proto__:null,default:Ag},Symbol.toStringTag,{value:"Module"})),ST=()=>o.jsx(q,{headline:"Dismissable Alert",text:"A dismissable alert",onDismiss:()=>window.alert("Bye!"),dismissable:!0}),wT=`import React from 'react'
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
`,Mg=()=>o.jsx(R,{code:"onDismiss",Component:ST,Source:wT,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"onDismiss"})," property can be used to register a function which will be called when the alert is dismissed."]})}),_T=Object.freeze(Object.defineProperty({__proto__:null,default:Mg},Symbol.toStringTag,{value:"Module"})),kT=()=>o.jsx(q,{text:"Radius Alert",radius:4}),TT=`import React from 'react'
import { Alert } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Alert
    text="Radius Alert"
    radius={4}
  />
/* END */

export default Component
`,Pg=()=>o.jsx(R,{code:"radius",Component:kT,Source:TT,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"radius"})," property can be used to set the border radius."]})}),ET=Object.freeze(Object.defineProperty({__proto__:null,default:Pg},Symbol.toStringTag,{value:"Module"})),NT=()=>o.jsx(q,{headline:"Revealable Alert",text:"A revealable alert",revealable:!0}),LT=`import React from 'react'
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
`,$g=()=>o.jsx(R,{code:"revealable",Component:NT,Source:LT,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"revealable"})," property can be used to make the alert revealable."]})}),RT=Object.freeze(Object.defineProperty({__proto__:null,default:$g},Symbol.toStringTag,{value:"Module"})),DT=()=>o.jsx(q,{headline:"Revealed Alert",text:"A revealed alert",revealable:!0,revealed:!0}),OT=`import React from 'react'
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
`,Bg=()=>o.jsx(R,{code:"revealed",Component:DT,Source:OT,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"revealed"})," property can be set to make it a revealable alert initially revealed."]})}),AT=Object.freeze(Object.defineProperty({__proto__:null,default:Bg},Symbol.toStringTag,{value:"Module"})),MT=()=>o.jsxs("div",{children:[o.jsx(q,{text:"Alert With Default Shadow (1)",shadow:!0}),o.jsx(q,{text:"Alert With Shadow 2",shadow:2}),o.jsx(q,{text:"Alert With Shadow 3",shadow:3}),o.jsx(q,{text:"Alert With Shadow 4",shadow:4}),o.jsx(q,{text:"Alert With Shadow 5",shadow:5})]}),PT=`import React from 'react'
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
`,Ig=()=>o.jsx(R,{code:"shadow",Component:MT,Source:PT,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"shadow"})," property can be used to add a shadow.  The default value is 1 or you can set it to any number from"," ","1 to 5."]})}),$T=Object.freeze(Object.defineProperty({__proto__:null,default:Ig},Symbol.toStringTag,{value:"Module"})),BT=()=>o.jsxs("div",{children:[o.jsx(q,{text:"Smallest Alert",size:"smallest"}),o.jsx(q,{text:"Smaller Alert",size:"smaller"}),o.jsx(q,{text:"Small Alert",size:"small"}),o.jsx(q,{text:"Medium Alert",size:"medium"}),o.jsx(q,{text:"Large Alert",size:"large"}),o.jsx(q,{text:"Larger Alert",size:"larger"}),o.jsx(q,{text:"Largest Alert",size:"largest"})]}),IT=`import React from 'react'
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
`,zg=()=>o.jsx(R,{code:"size",Component:BT,Source:IT,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"size"})," property can be used to set the text size."]})}),zT=Object.freeze(Object.defineProperty({__proto__:null,default:zg},Symbol.toStringTag,{value:"Module"})),FT=()=>o.jsxs("div",{children:[o.jsx(q,{text:"Stripe Alert",stripe:!0,shadow:4}),o.jsx(q,{text:"Info Stripe Alert",type:"info",stripe:!0,shadow:4}),o.jsx(q,{text:"Success Stripe Alert",type:"success",stripe:!0,shadow:4}),o.jsx(q,{text:"Warning Stripe Alert",type:"warning",stripe:!0,shadow:4}),o.jsx(q,{text:"Error Stripe Alert",type:"error",stripe:!0,shadow:4})]}),HT=`import React from 'react'
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
`,Fg=()=>o.jsx(R,{code:"stripe",Component:FT,Source:HT,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"stripe"})," property can be set as a short-cut to add the"," ",o.jsx("code",{children:"stripe"})," CSS class for a more minimal look."]})}),UT=Object.freeze(Object.defineProperty({__proto__:null,default:Fg},Symbol.toStringTag,{value:"Module"})),VT=()=>o.jsx(q,{text:"Hello World!"}),WT=`import React from 'react'
import { Alert } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Alert text="Hello World!"/>
/* END */

export default Component`,Hg=()=>o.jsx(R,{code:"text",Component:VT,Source:WT,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"text"})," property can be used to set the body text."]})}),ZT=Object.freeze(Object.defineProperty({__proto__:null,default:Hg},Symbol.toStringTag,{value:"Module"})),KT=()=>o.jsx(q,{title:"Hello World!",children:"This is an alert"}),YT=`import React from 'react'
import { Alert } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Alert title="Hello World!">
    This is an alert
  </Alert>
/* END */

export default Component`,Ug=()=>o.jsx(R,{code:"title",Component:KT,Source:YT,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"title"})," property can be used to set a title."]})}),GT=Object.freeze(Object.defineProperty({__proto__:null,default:Ug},Symbol.toStringTag,{value:"Module"})),XT=()=>o.jsxs("div",{children:[o.jsx(q,{text:"Info Alert",type:"info"}),o.jsx(q,{text:"Success Alert",type:"success"}),o.jsx(q,{text:"Warning Alert",type:"warning"}),o.jsx(q,{text:"Error Alert",type:"error"})]}),QT=`import React from 'react'
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
`,Vg=()=>o.jsx(R,{code:"type",Component:XT,Source:QT,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"type"})," property can be used to set it to one of the pre-defined types: ",o.jsx("code",{children:"info"}),", ",o.jsx("code",{children:"success"}),","," ",o.jsx("code",{children:"warning"})," or ",o.jsx("code",{children:"error"}),"."]})}),qT=Object.freeze(Object.defineProperty({__proto__:null,default:Vg},Symbol.toStringTag,{value:"Module"})),at=({tocName:e,children:t})=>o.jsx(qp.Provider,{tocName:e,children:t}),JT=({id:e,title:t,addPageTocHeading:n})=>{const r=Qp(e||t),a=v.useRef();return v.useEffect(()=>{n&&n(r,t,a)},[e,t]),o.jsx("h2",{id:r,ref:a,className:"section-heading",children:t})},ce=qp.Consumer(JT),eE=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Alert"}),o.jsx(Sg,{}),o.jsxs(at,{tocName:"alert",children:[o.jsx(ce,{title:"Properties"}),o.jsx(Ug,{}),o.jsx(Hg,{}),o.jsx(Og,{}),o.jsx(Dg,{}),o.jsx($g,{}),o.jsx(Bg,{}),o.jsx(Rg,{}),o.jsx(Mg,{}),o.jsx(Ng,{}),o.jsx(Eg,{}),o.jsx(Pg,{}),o.jsx(Ig,{}),o.jsx(zg,{}),o.jsx(Lg,{}),o.jsx(Vg,{}),o.jsx(Fg,{}),o.jsx(Ag,{}),o.jsx(ce,{title:"Components"}),o.jsx(_g,{}),o.jsx(kg,{}),o.jsx(Tg,{}),o.jsx(wg,{})]})]}),tE=Object.freeze(Object.defineProperty({__proto__:null,default:eE},Symbol.toStringTag,{value:"Module"})),nE=()=>o.jsx(A,{children:"This is a button"}),rE=`import React from 'react'
import { Button } from '@/src/index.jsx'

{/* START */}
// PRETEND: import { Button } from '@abw/badger-react-ui'

const ButtonExample = () =>
  <Button>
    This is a button
  </Button>

export default ButtonExample
`,Wg=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"Button"})," component can be used to render a button. Any child elements will be included as content."]}),o.jsxs("p",{className:"cols-2 stack-desktop",children:["There are numerous properties listed below that are typically used as shortcuts to set particular CSS styles.  Any other properties not listed here are forwarded to the ",o.jsx("code",{children:"button"})," component."]}),o.jsx(pe,{Component:nE,code:rE,expand:!0})]}),oE=Object.freeze(Object.defineProperty({__proto__:null,default:Wg},Symbol.toStringTag,{value:"Module"})),aE=()=>o.jsx(A,{text:"Custom Button Content",Content:({text:e})=>o.jsxs("span",{className:"pad-4",children:["😀 ",e]})}),sE=`import React from 'react'
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
`,Zg=()=>o.jsxs(R,{code:"Content",Component:aE,Source:sE,undent:2,expand:!0,children:[o.jsxs("p",{children:["The ",o.jsx("code",{children:"Content"})," property (note the capital C) can be used to provide an alternate component to render the button content. By default it uses ",o.jsx("code",{children:"WithIcons"})," to render the button text with optional icons."]}),o.jsxs("p",{children:["If you want to change the way that button content is generated on a global level then you can use the theming engine to define a different ",o.jsx("code",{children:"Content"})," component for all buttons."]})]}),lE=Object.freeze(Object.defineProperty({__proto__:null,default:Zg},Symbol.toStringTag,{value:"Module"})),iE=()=>o.jsxs("div",{className:"flex wrap gap-4",children:[o.jsx(A,{text:"Red Bare",color:"red",bare:!0}),o.jsx(A,{text:"Green Bare",color:"green",bare:!0}),o.jsx(A,{text:"Blue Bare",color:"blue",bare:!0})]}),cE=`import React from 'react'
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
`,Kg=()=>o.jsx(R,{code:"bare",Component:iE,Source:cE,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"bare"})," property can be added for bare naked buttons."]})}),dE=Object.freeze(Object.defineProperty({__proto__:null,default:Kg},Symbol.toStringTag,{value:"Module"})),uE=()=>o.jsxs("div",{className:"flex middle wrap gap-4",children:[o.jsx(A,{text:"Border 2",color:"red",outline:!0,border:2}),o.jsx(A,{text:"Border 3",color:"brown",outline:!0,border:3}),o.jsx(A,{text:"Border 4",color:"orange",outline:!0,border:4}),o.jsx(A,{text:"Border 5",color:"yellow",outline:!0,border:5})]}),pE=`import React from 'react'
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
`,Yg=()=>o.jsx(R,{code:"border",Component:uE,Source:pE,undent:2,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"border"})," property can be used to set the border width. This is only really noticeable on outline buttons.  There is a border around solid buttons (mainly to help in matching the height of other form inputs), although it's the same color as the background."]})}),fE=Object.freeze(Object.defineProperty({__proto__:null,default:Yg},Symbol.toStringTag,{value:"Module"})),hE=()=>o.jsxs("div",{className:"flex wrap gap-4",children:[o.jsx(A,{text:"Yellow Button",color:"yellow"}),o.jsx(A,{text:"Bright Yellow Button",color:"yellow",bright:!0})]}),mE=`import React from 'react'
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
`,Gg=()=>o.jsx(R,{code:"bright",Component:hE,Source:mE,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"bright"})," property can be added to make the buttons brighter than normal."]})}),gE=Object.freeze(Object.defineProperty({__proto__:null,default:Gg},Symbol.toStringTag,{value:"Module"})),xE=()=>o.jsx(A,{text:"Custom Button",className:"red bdw-2 bdr-4 bgc-80 fgc-20 bgd-20 fgd-80"}),vE=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    text="Custom Button"
    className="red bdw-2 bdr-4 bgc-80 fgc-20 bgd-20 fgd-80"
  />
/* END */

export default Component
`,Xg=()=>o.jsx(R,{code:"className",Component:xE,Source:vE,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"className"})," property can be added to add a CSS class to the button."]})}),yE=Object.freeze(Object.defineProperty({__proto__:null,default:Xg},Symbol.toStringTag,{value:"Module"})),jE=()=>o.jsxs("div",{className:"grid-2 gap-4 stack-tablet",children:[o.jsx(A,{text:"Red Button",color:"red"}),o.jsx(A,{text:"Brown Button",color:"brown"}),o.jsx(A,{text:"Orange Button",color:"orange"}),o.jsx(A,{text:"Yellow Button",color:"yellow"}),o.jsx(A,{text:"Green Button",color:"green"}),o.jsx(A,{text:"Teal Button",color:"teal"}),o.jsx(A,{text:"Blue Button",color:"blue"}),o.jsx(A,{text:"Indigo Button",color:"indigo"}),o.jsx(A,{text:"Violet Button",color:"violet"}),o.jsx(A,{text:"Purple Button",color:"purple"}),o.jsx(A,{text:"Pink Button",color:"pink"}),o.jsx(A,{text:"Maroon Button",color:"maroon"})]}),CE=`import React from 'react'
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
`,Qg=()=>o.jsx(R,{code:"color",Component:jE,Source:CE,undent:2,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"color"})," property can be used to set the color range used for the button."]})}),bE=Object.freeze(Object.defineProperty({__proto__:null,default:Qg},Symbol.toStringTag,{value:"Module"})),SE=()=>o.jsxs("div",{className:"flex wrap gap-4",children:[o.jsx(A,{text:"Red Button",color:"red"}),o.jsx(A,{text:"Dark Red Button",color:"red",dark:!0})]}),wE=`import React from 'react'
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
`,qg=()=>o.jsx(R,{code:"dark",Component:SE,Source:wE,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"dark"})," property can be added to make the buttons darker than normal."]})}),_E=Object.freeze(Object.defineProperty({__proto__:null,default:qg},Symbol.toStringTag,{value:"Module"})),kE=()=>o.jsx(A,{text:"Disabled Button",disabled:!0}),TE=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    text="Disabled Button"
    disabled
  />
/* END */

export default Component
`,Jg=()=>o.jsx(R,{code:"disabled",Component:kE,Source:TE,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"disabled"})," property can be set to disable a button."]})}),EE=Object.freeze(Object.defineProperty({__proto__:null,default:Jg},Symbol.toStringTag,{value:"Module"})),NE=()=>o.jsx(A,{color:"green",icon:"bars"}),LE=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    color="green"
    icon="bars"
  />
/* END */

export default Component
`,ex=()=>o.jsx(R,{code:"icon",Component:NE,Source:LE,undent:2,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"icon"})," property can be used to add an icon to a button."]})}),RE=Object.freeze(Object.defineProperty({__proto__:null,default:ex},Symbol.toStringTag,{value:"Module"})),DE=()=>o.jsx(A,{color:"green",text:"Back",iconLeft:"angle-left"}),OE=`import React from 'react'
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
`,tx=()=>o.jsx(R,{code:"iconLeft",Component:DE,Source:OE,undent:2,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"iconLeft"})," property can be used to add an icon to the left side of a button."]})}),AE=Object.freeze(Object.defineProperty({__proto__:null,default:tx},Symbol.toStringTag,{value:"Module"})),ME=()=>o.jsx(A,{color:"green",text:"Next",iconRight:"angle-right"}),PE=`import React from 'react'
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
`,nx=()=>o.jsx(R,{code:"iconRight",Component:ME,Source:PE,undent:2,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"iconRight"})," property can be used to add an icon to the right side of a button."]})}),$E=Object.freeze(Object.defineProperty({__proto__:null,default:nx},Symbol.toStringTag,{value:"Module"})),BE=()=>o.jsx(A,{text:"I am labelled!",label:"This is a label"}),IE=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    text="I am labelled!"
    label="This is a label"
  />
/* END */

export default Component
`,rx=()=>o.jsx(R,{code:"label",Component:BE,Source:IE,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"label"})," property can be used to set the",o.jsx("code",{children:"aria-label"})," property on the button.  This typically doesn't have any visual effect on the button, but is used by screen readers to provide more detail about the functionality of the button."]})}),zE=Object.freeze(Object.defineProperty({__proto__:null,default:rx},Symbol.toStringTag,{value:"Module"})),FE=()=>o.jsx(A,{text:"Click Me!",onClick:()=>window.alert("Click!")}),HE=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    text="Click Me!"
    onClick={() => window.alert('Click!')}
  />
/* END */

export default Component
`,ox=()=>o.jsx(R,{code:"onClick",Component:FE,Source:HE,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"onClick"})," property can be used to register a function which will be called when the button is clicked."]})}),UE=Object.freeze(Object.defineProperty({__proto__:null,default:ox},Symbol.toStringTag,{value:"Module"})),VE=()=>o.jsxs("div",{className:"flex wrap gap-4",children:[o.jsx(A,{text:"Red Outline",color:"red",outline:!0}),o.jsx(A,{text:"Green Outline",color:"green",outline:!0}),o.jsx(A,{text:"Blue Outline",color:"blue",outline:!0})]}),WE=`import React from 'react'
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
`,ax=()=>o.jsx(R,{code:"outline",Component:VE,Source:WE,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"outline"})," property can be added for outline buttons."]})}),ZE=Object.freeze(Object.defineProperty({__proto__:null,default:ax},Symbol.toStringTag,{value:"Module"})),KE=()=>o.jsxs("div",{className:"flex middle wrap gap-4",children:[o.jsx(A,{text:"Radius 0",color:"olive",radius:0}),o.jsx(A,{text:"Radius 2",color:"green",radius:2}),o.jsx(A,{text:"Radius 4",color:"teal",radius:3}),o.jsx(A,{text:"Radius 6",color:"blue",radius:4})]}),YE=`import React from 'react'
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
`,sx=()=>o.jsx(R,{code:"radius",Component:KE,Source:YE,undent:2,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"radius"})," property can be used to set the border radius in multiples of the base unit: 0.25rem."]})}),GE=Object.freeze(Object.defineProperty({__proto__:null,default:sx},Symbol.toStringTag,{value:"Module"})),XE=()=>o.jsxs("div",{className:"flex wrap gap-4",children:[o.jsx(A,{text:"Red Shaded",color:"red",shaded:!0}),o.jsx(A,{text:"Green Shaded",color:"green",shaded:!0}),o.jsx(A,{text:"Blue Shaded",color:"blue",shaded:!0})]}),QE=`import React from 'react'
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
`,lx=()=>o.jsx(R,{code:"shaded",Component:XE,Source:QE,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"shaded"})," property can be added for shaded buttons."]})}),qE=Object.freeze(Object.defineProperty({__proto__:null,default:lx},Symbol.toStringTag,{value:"Module"})),JE=()=>o.jsxs("div",{className:"flex middle wrap gap-4",children:[o.jsx(A,{text:"Shadow 1",color:"indigo",outline:!0,shadow:!0}),o.jsx(A,{text:"Shadow 2",color:"violet",outline:!0,shadow:2}),o.jsx(A,{text:"Shadow 3",color:"purple",outline:!0,shadow:3}),o.jsx(A,{text:"Shadow 4",color:"pink",outline:!0,shadow:4}),o.jsx(A,{text:"Shadow 5",color:"maroon",outline:!0,shadow:5})]}),eN=`import React from 'react'
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
`,ix=()=>o.jsx(R,{code:"shadow",Component:JE,Source:eN,undent:2,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"shadow"})," property can be used to add a shadow to the button ranging from 1 to 5."]})}),tN=Object.freeze(Object.defineProperty({__proto__:null,default:ix},Symbol.toStringTag,{value:"Module"})),nN=()=>o.jsxs("div",{className:"flex middle wrap gap-4",children:[o.jsx(A,{text:"Smallest",size:"smallest"}),o.jsx(A,{text:"Smaller",size:"smaller"}),o.jsx(A,{text:"Small",size:"small"}),o.jsx(A,{text:"Medium",size:"medium"}),o.jsx(A,{text:"Large",size:"large"}),o.jsx(A,{text:"Larger",size:"larger"}),o.jsx(A,{text:"Largest",size:"largest"}),o.jsx(A,{text:"x3",size:"x3"}),o.jsx(A,{text:"x5",size:"x5"}),o.jsx(A,{text:"x7",size:"x7"})]}),rN=`import React from 'react'
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
`,cx=()=>o.jsx(R,{code:"size",Component:nN,Source:rN,undent:2,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"size"})," property can be used to set the button size. This can be one of: ",o.jsx("code",{children:"smallest"}),", ",o.jsx("code",{children:"smaller"}),", ",o.jsx("code",{children:"small"})," ",",",o.jsx("code",{children:"medium"})," (default - same as no explicit size), ",o.jsx("code",{children:"large"})," ",",",o.jsx("code",{children:"larger"}),", ",o.jsx("code",{children:"largest"}),"; or any of the size multipliers:"," ",o.jsx("code",{children:"x2"}),", ",o.jsx("code",{children:"x3"}),", etc., up to ",o.jsx("code",{children:"x10"}),"."]})}),oN=Object.freeze(Object.defineProperty({__proto__:null,default:cx},Symbol.toStringTag,{value:"Module"})),aN=()=>o.jsx(A,{text:"Grey Button"}),sN=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button text="Grey Button"/>
/* END */

export default Component
`,dx=()=>o.jsx(R,{code:"text",Component:aN,Source:sN,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"text"})," property can be used to set the text for the button."]})}),lN=Object.freeze(Object.defineProperty({__proto__:null,default:dx},Symbol.toStringTag,{value:"Module"})),iN=()=>o.jsx(A,{text:"Tooltip",label:"This is a tooltip",tooltip:"top left"}),cN=`import React from 'react'
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
`,ux=()=>o.jsx(R,{code:"tooltip",Component:iN,Source:cN,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"tooltip"})," property can be used to set the",o.jsx("code",{children:"data-tooltip"})," property on the button.  This can be used to indicate the direction of the tooltip, e.g. ",o.jsx("code",{children:"top"}),","," ",o.jsx("code",{children:"right"}),", ",o.jsx("code",{children:"top right"}),", etc. The tooltip content should be defined using the ",o.jsx("code",{children:"label"})," property."]})}),dN=Object.freeze(Object.defineProperty({__proto__:null,default:ux},Symbol.toStringTag,{value:"Module"})),uN=()=>o.jsx(A,{text:"Grey Button",type:"submit"}),pN=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    text="Grey Button"
    type="submit"
  />
/* END */

export default Component
`,px=()=>o.jsxs(R,{code:"type",Component:uN,Source:pN,undent:2,expand:!0,children:[o.jsxs("p",{children:["The default ",o.jsx("code",{children:"type"})," for a button is set to ",o.jsx("code",{children:"button"}),". In most cases this has no effect.  However, inside the scope of a ",o.jsx("code",{children:"form"})," element, the ",o.jsx("code",{children:"type"})," for a button would usually default to being ",o.jsx("code",{children:"submit"}),".  When clicked, the button would submit the form."]}),o.jsxs("p",{children:["This behaviour usually surprises people (it certainly catches me out from time to time).  Having an explicit default button type prevents this from happening.  When you really do want to add a button to submit a form, you should explicitly set the ",o.jsx("code",{children:"type"})," to"," ",o.jsx("code",{children:"submit"}),".  You can also set it to ",o.jsx("code",{children:"reset"})," to make a reset button for a form."]})]}),fN=Object.freeze(Object.defineProperty({__proto__:null,default:px},Symbol.toStringTag,{value:"Module"})),hN=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Button"}),o.jsx(Wg,{}),o.jsxs(at,{tocName:"button",children:[o.jsx(ce,{title:"Properties"}),o.jsx(dx,{}),o.jsx(ox,{}),o.jsx(Jg,{}),o.jsx(Qg,{}),o.jsx(Gg,{}),o.jsx(qg,{}),o.jsx(lx,{}),o.jsx(ax,{}),o.jsx(Kg,{}),o.jsx(Xg,{}),o.jsx(Yg,{}),o.jsx(sx,{}),o.jsx(ix,{}),o.jsx(cx,{}),o.jsx(ex,{}),o.jsx(tx,{}),o.jsx(nx,{}),o.jsx(rx,{}),o.jsx(ux,{}),o.jsx(px,{}),o.jsx(ce,{title:"Components"}),o.jsx(Zg,{})]})]}),mN=Object.freeze(Object.defineProperty({__proto__:null,default:hN},Symbol.toStringTag,{value:"Module"})),gN=({text:e})=>o.jsx("span",{className:"border pad pad-h-4 mar",children:e}),xN=()=>o.jsx(ao,{buttons:[{text:"One"},{text:"Two"}],Button:gN}),vN=`import { Buttons } from '@/src/index.jsx'

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
`,fx=()=>o.jsx(R,{code:"Button",Component:xN,Source:vN,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"Button"})," property (note the capital B) can be used to define a different component for rendering each button."]})}),yN=Object.freeze(Object.defineProperty({__proto__:null,default:fx},Symbol.toStringTag,{value:"Module"})),jN=()=>o.jsxs(ao,{children:[o.jsx(A,{text:"One",outline:!0}),o.jsx(A,{text:"Two",outline:!0})]}),CN=`import { Buttons, Button } from '@/src/index.jsx'

{/* START */}
import React from 'react'
// PRETEND: import { Buttons, Button } from '@abw/badger-react-ui'

const ButtonsExample = () =>
  <Buttons>
    <Button text="One" outline/>
    <Button text="Two" outline/>
  </Buttons>

export default ButtonsExample
`,hx=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"Buttons"})," component can be used to render a connected set of buttons."]}),o.jsx(pe,{Component:jN,code:CN,expand:!0})]}),bN=Object.freeze(Object.defineProperty({__proto__:null,default:hx},Symbol.toStringTag,{value:"Module"})),SN=()=>o.jsx(o.Fragment,{children:o.jsx(ao,{outline:!0,buttonClass:"blue shadow-1",buttons:[{text:"One"},{text:"Two"}]})}),wN=`import React from 'react'
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
`,mx=()=>o.jsx(R,{code:"buttonClass",Component:SN,Source:wN,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"buttonClass"})," property can be used to add a CSS class to each button. Badger CSS targets the ",o.jsx("code",{children:"button"})," element for styling so you don't need to add any special classes to get the default styling."]})}),_N=Object.freeze(Object.defineProperty({__proto__:null,default:mx},Symbol.toStringTag,{value:"Module"})),kN=()=>o.jsx(o.Fragment,{children:o.jsx(ao,{buttons:[{text:"One",outline:!0},{text:"Two",outline:!0}]})}),TN=`import React from 'react'
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
`,gx=()=>o.jsx(R,{code:"buttons",Component:kN,Source:TN,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"buttons"})," property can be used to define properties for a set of buttons."]})}),EN=Object.freeze(Object.defineProperty({__proto__:null,default:gx},Symbol.toStringTag,{value:"Module"})),NN=()=>o.jsx(o.Fragment,{children:o.jsx(ao,{outline:!0,className:"buttons border pad-2 bgc-90 bgd-10 bdr-2",buttons:[{text:"One"},{text:"Two"}]})}),LN=`import React from 'react'
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
`,xx=()=>o.jsx(R,{code:"className",Component:NN,Source:LN,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"className"})," property can be used to set the CSS class for the buttons container element.  The default value is"," ",o.jsx("code",{children:"buttons"}),".  If you want to use the default styles provided by Badger CSS then you should include ",o.jsx("code",{children:"buttons"})," in the value you provide for ",o.jsx("code",{children:"className"})]})}),RN=Object.freeze(Object.defineProperty({__proto__:null,default:xx},Symbol.toStringTag,{value:"Module"})),DN=()=>o.jsx(o.Fragment,{children:o.jsx(ao,{outline:!0,buttons:[{text:"One"},{text:"Two"},{text:"Three",outline:!1,color:"orange"}]})}),ON=`import React from 'react'
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
`,vx=()=>o.jsx(R,{code:"outline",Component:DN,Source:ON,undent:4,expand:!0,children:o.jsxs("p",{children:["Additional properties passed to the ",o.jsx("code",{children:"Buttons"})," component will be forwarded to each ",o.jsx("code",{children:"Button"})," component.  For example, you can set the ",o.jsx("code",{children:"outline"})," property on the parent",o.jsx("code",{children:"Buttons"})," component so that you don't have to repeat it for each button.  However, individual buttons can override any of these properties."]})}),AN=Object.freeze(Object.defineProperty({__proto__:null,default:vx},Symbol.toStringTag,{value:"Module"})),MN=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Buttons"}),o.jsx(hx,{}),o.jsxs(at,{tocName:"buttons",children:[o.jsx(ce,{title:"Properties"}),o.jsx(gx,{}),o.jsx(vx,{}),o.jsx(xx,{}),o.jsx(mx,{}),o.jsx(ce,{title:"Components"}),o.jsx(fx,{})]})]}),PN=Object.freeze(Object.defineProperty({__proto__:null,default:MN},Symbol.toStringTag,{value:"Module"})),$N=()=>o.jsx(KC,{text:"I like badgers",onChange:e=>console.log(`Checked: ${e}`)}),BN=`import { CheckboxState } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { CheckboxState } from '@abw/badger-react-ui

const CheckboxStateExample = () =>
  <CheckboxState
    text="I like badgers"
    onChange={checked => console.log(\`Checked: \${checked}\`)}
  />

export default CheckboxStateExample`,yx=()=>o.jsx(R,{code:"CheckboxState",Component:$N,Source:BN,expand:!0,children:o.jsx("div",{children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"CheckboxState"})," function can be used to generate a Checkbox with internal state."]})})}),IN=Object.freeze(Object.defineProperty({__proto__:null,default:yx},Symbol.toStringTag,{value:"Module"})),zN=()=>{const[e,t]=v.useState(!1);return o.jsx(bn,{text:"I like badgers",checked:e,onChange:t})},FN=`import { Checkbox } from '@/src/index.jsx'

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

export default CheckboxExample`,jx=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"Checkbox"})," component renders a checkbox with a label."]}),o.jsx(pe,{Component:zN,code:FN,expand:!0})]}),HN=Object.freeze(Object.defineProperty({__proto__:null,default:jx},Symbol.toStringTag,{value:"Module"})),UN=()=>{const[e,t]=v.useState(!1);return o.jsx(bn,{border:!0,text:"I like badgers",checked:e,onChange:t})},VN=`import { Checkbox } from '@/src/index.jsx'
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

export default ClassName`,Cx=()=>o.jsx(R,{code:"border",Component:UN,Source:VN,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"border"})," property can be used as a short-cut to add the ",o.jsx("code",{children:"border"})," class."]})}),WN=Object.freeze(Object.defineProperty({__proto__:null,default:Cx},Symbol.toStringTag,{value:"Module"})),ZN=()=>{const[e,t]=v.useState(!1);return o.jsx(bn,{text:"I like badgers",checked:e,onChange:t})},KN=`import { Checkbox } from '@/src/index.jsx'
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

export default CheckedExample`,bx=()=>o.jsx(R,{code:"checked",Component:ZN,Source:KN,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"checked"})," property should be passed to indicate if the checkbox is checked (",o.jsx("code",{children:"true"}),") or not (",o.jsx("code",{children:"false"}),")."]})}),YN=Object.freeze(Object.defineProperty({__proto__:null,default:bx},Symbol.toStringTag,{value:"Module"})),GN=()=>{const[e,t]=v.useState(!1);return o.jsx(bn,{checkedText:"I like badgers (well done!)",uncheckedText:"I like badgers (you really should!)",checked:e,onChange:t})},XN=`import { Checkbox } from '@/src/index.jsx'
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

export default CheckedTextExample`,Sx=()=>o.jsx(R,{code:"checkedText / uncheckedText",Component:GN,Source:XN,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"checkedText"})," and ",o.jsx("code",{children:"uncheckedText"})," properties can be used to provide different text for the checked and unchecked states."]})}),QN=Object.freeze(Object.defineProperty({__proto__:null,default:Sx},Symbol.toStringTag,{value:"Module"})),qN=()=>{const[e,t]=v.useState(!1);return o.jsx(bn,{text:"I like badgers",className:"large border",checked:e,onChange:t})},JN=`import { Checkbox } from '@/src/index.jsx'
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

export default ClassName`,wx=()=>o.jsx(R,{code:"className",Component:qN,Source:JN,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"className"})," property can be used to add a CSS class to the checkbox ",o.jsx("code",{children:"label"})," element."]})}),eL=Object.freeze(Object.defineProperty({__proto__:null,default:wx},Symbol.toStringTag,{value:"Module"})),tL=()=>{const[e,t]=v.useState(!1);return o.jsx(bn,{disabled:!0,text:"I like badgers",checked:e,onChange:t})},nL=`import { Checkbox } from '@/src/index.jsx'
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

export default DisabledExample`,_x=()=>o.jsx(R,{code:"disabled",Component:tL,Source:nL,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"disabled"})," property can be set to disable a checkbox."]})}),rL=Object.freeze(Object.defineProperty({__proto__:null,default:_x},Symbol.toStringTag,{value:"Module"})),oL=()=>{const[e,t]=v.useState(!1);return o.jsx(bn,{text:"I like badgers",checked:e,onChange:t})},aL=`import { Checkbox } from '@/src/index.jsx'
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

export default OnChangeExample`,kx=()=>o.jsx(R,{code:"onChange",Component:oL,Source:aL,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"onChange"})," property should be used to define a function to handle changes in the state."]})}),sL=Object.freeze(Object.defineProperty({__proto__:null,default:kx},Symbol.toStringTag,{value:"Module"})),lL=()=>{const[e,t]=v.useState(!1);return o.jsx(bn,{text:"Badger are the best!",checked:e,onChange:t})},iL=`import { Checkbox } from '@/src/index.jsx'
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

export default TextExample`,Tx=()=>o.jsx(R,{code:"text",Component:lL,Source:iL,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"text"})," property should be used to set the text for the checkbox."]})}),cL=Object.freeze(Object.defineProperty({__proto__:null,default:Tx},Symbol.toStringTag,{value:"Module"})),dL=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Checkbox"}),o.jsx(jx,{}),o.jsxs(at,{tocName:"checkbox",children:[o.jsx(ce,{title:"Properties"}),o.jsx(Tx,{}),o.jsx(bx,{}),o.jsx(Sx,{}),o.jsx(kx,{}),o.jsx(wx,{}),o.jsx(Cx,{}),o.jsx(_x,{}),o.jsx(ce,{title:"Components"}),o.jsx(yx,{})]})]}),uL=Object.freeze(Object.defineProperty({__proto__:null,default:dL},Symbol.toStringTag,{value:"Module"})),pL=()=>o.jsx(o.Fragment,{children:o.jsx(Sn,{text:"Delete",color:"red",iconRight:"trash",onClick:()=>window.alert("Confirmed!")})}),fL=`import { Confirm } from '@/src/index.jsx'

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

export default ConfirmExample`,Ex=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"Confirm"})," component provides an extra safety net for potentially dangerous operations.  When the user click on the button it then prompts them to confirm or cancel the action."]}),o.jsxs("p",{className:"cols-2 stack-desktop",children:["Additional properties not listed below are forwarded onto the initial button.  For example, you can set the ",o.jsx("code",{children:"text"}),","," ",o.jsx("code",{children:"color"}),", add icons, and so on, just like you would for any other button."]}),o.jsx(pe,{Component:pL,code:fL,expand:!0})]}),hL=Object.freeze(Object.defineProperty({__proto__:null,default:Ex},Symbol.toStringTag,{value:"Module"})),mL=()=>o.jsx(Sn,{text:"Delete",color:"red",cancel:{text:"Go Back",color:"yellow",outline:!1,iconLeft:"angle-left"}}),gL=`import React from 'react'
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

export default CancelExample`,Nx=()=>o.jsx(R,{code:"cancel",Component:mL,Source:gL,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"cancel"})," property can be used to set properties for the cancel button."]})}),xL=Object.freeze(Object.defineProperty({__proto__:null,default:Nx},Symbol.toStringTag,{value:"Module"})),vL=()=>o.jsx(Sn,{text:"Delete",color:"red",cancelText:"Nah",cancelColor:"blue",cancelIcon:"angle-left"}),yL=`import React from 'react'
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

export default CancelExample`,Lx=()=>o.jsx(R,{id:"cancelProps",code:"cancelXXX",Component:vL,Source:yL,undent:2,expand:!0,children:o.jsxs("p",{children:["You can also set individual properties for the cancel button",o.jsx("code",{children:"cancelIcon"}),","," ",o.jsx("code",{children:"cancelText"}),","," ",o.jsx("code",{children:"cancelColor"})," and"," ",o.jsx("code",{children:"cancelClass"}),"."]})}),jL=Object.freeze(Object.defineProperty({__proto__:null,default:Lx},Symbol.toStringTag,{value:"Module"})),CL=()=>o.jsx(o.Fragment,{children:o.jsx(Sn,{className:"buttons border pad-2 bgc-90 bgd-10 bdr-2",icon:"trash",color:"red"})}),bL=`import React from 'react'
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
`,Rx=()=>o.jsx(R,{code:"className",Component:CL,Source:bL,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"className"})," property can be used to set the CSS class for the buttons container element.  The default value is"," ",o.jsx("code",{children:"buttons"}),".  If you want to use the default styles provided by Badger CSS then you should include ",o.jsx("code",{children:"buttons"})," in the value you provide for ",o.jsx("code",{children:"className"})]})}),SL=Object.freeze(Object.defineProperty({__proto__:null,default:Rx},Symbol.toStringTag,{value:"Module"})),wL=()=>o.jsx(Sn,{text:"Click to Delete",color:"red"}),_L=`import React from 'react'
import { Confirm } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Confirm
    text="Click to Delete"
    color="red"
  />
/* END */

export default Component
`,Dx=()=>o.jsx(R,{code:"color",Component:wL,Source:_L,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"color"})," property can be used to set the color for the initial button."]})}),kL=Object.freeze(Object.defineProperty({__proto__:null,default:Dx},Symbol.toStringTag,{value:"Module"})),TL=()=>o.jsx(Sn,{text:"Delete",color:"red",confirm:{text:"Yep, do it!",color:"green",iconRight:"angle-right"}}),EL=`import React from 'react'
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

export default ConfirmExample`,Ox=()=>o.jsx(R,{code:"confirm",Component:TL,Source:EL,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"confirm"})," property can be used to set properties for the confirmation button."]})}),NL=Object.freeze(Object.defineProperty({__proto__:null,default:Ox},Symbol.toStringTag,{value:"Module"})),LL=()=>o.jsx(Sn,{text:"Delete",color:"red",confirmText:"Yep",confirmColor:"green",confirmIcon:"trash"}),RL=`import React from 'react'
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

export default ConfirmProps`,Ax=()=>o.jsx(R,{id:"confirmProps",code:"confirmXXX",Component:LL,Source:RL,undent:2,expand:!0,children:o.jsxs("p",{children:["You can also set individual properties for the confirm button",o.jsx("code",{children:"confirmIcon"}),","," ",o.jsx("code",{children:"confirmText"}),","," ",o.jsx("code",{children:"confirmColor"})," and"," ",o.jsx("code",{children:"confirmClass"}),"."]})}),DL=Object.freeze(Object.defineProperty({__proto__:null,default:Ax},Symbol.toStringTag,{value:"Module"})),OL=()=>o.jsx(Sn,{text:"Click to Delete",color:"red",iconRight:"trash"}),AL=`import React from 'react'
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
`,Mx=()=>o.jsx(R,{code:"iconRight",Component:OL,Source:AL,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"iconRight"})," property can be used to add an icon to the right.  Or ",o.jsx("code",{children:"iconLeft"})," can be used to add an icon to the left. Or just an ",o.jsx("code",{children:"icon"})," if you want an icon without any text."]})}),ML=Object.freeze(Object.defineProperty({__proto__:null,default:Mx},Symbol.toStringTag,{value:"Module"})),PL=()=>o.jsx(Sn,{text:"Delete",color:"red",onClick:()=>window.alert("Deleted!")}),$L=`import React from 'react'
import { Confirm } from '@/src/index.jsx'

const OnClickExample = () =>
  /* START */
  <Confirm
    text="Delete"
    color="red"
    onClick={() => window.alert('Deleted!')}
  />
  /* END */

export default OnClickExample`,Px=()=>o.jsx(R,{code:"onClick",Component:PL,Source:$L,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"onClick"})," property should be used to define the handler which will be called when the user confirms the action."]})}),BL=Object.freeze(Object.defineProperty({__proto__:null,default:Px},Symbol.toStringTag,{value:"Module"})),IL=()=>o.jsx(Sn,{text:"Click to Delete"}),zL=`import React from 'react'
import { Confirm } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Confirm
    text="Click to Delete"
  />
/* END */

export default Component
`,$x=()=>o.jsx(R,{code:"text",Component:IL,Source:zL,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"text"})," property can be used to set the text for the initial button."]})}),FL=Object.freeze(Object.defineProperty({__proto__:null,default:$x},Symbol.toStringTag,{value:"Module"})),HL=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Confirm"}),o.jsx(Ex,{}),o.jsxs(at,{tocName:"confirm",children:[o.jsx(ce,{title:"Properties"}),o.jsx($x,{}),o.jsx(Dx,{}),o.jsx(Mx,{}),o.jsx(Rx,{}),o.jsx(Nx,{}),o.jsx(Lx,{}),o.jsx(Ox,{}),o.jsx(Ax,{}),o.jsx(ce,{title:"Event Handlers"}),o.jsx(Px,{})]})]}),UL=Object.freeze(Object.defineProperty({__proto__:null,default:HL},Symbol.toStringTag,{value:"Module"})),_n=[{name:"Alan",animal:"Anteater",id:10,role:"admin"},{name:"Bobby",animal:"Badger",id:20,role:"admin"},{name:"Brenda",animal:"Badger",id:30,role:"admin"},{name:"Christina",animal:"Cat",id:40,role:"user"},{name:"Derek",animal:"Dog",id:50,role:"user"},{name:"Delia",animal:"Donkey",id:60,role:"admin"},{name:"Edwin",animal:"Elephant",id:70,role:"admin"},{name:"Frank",animal:"Ferret",id:80,role:"user"},{name:"Felicity",animal:"Fox",id:90,role:"admin"},{name:"Gertrude",animal:"Goat",id:11,role:"admin"},{name:"Hector",animal:"Hamster",id:12,role:"admin"},{name:"Ian",animal:"Iguana",id:13,role:"user"},{name:"Julie",animal:"Jellyfish",id:14,role:"user"},{name:"Kevin",animal:"Koala",id:21,role:"user"},{name:"Lionel",animal:"Llama",id:22,role:"user"},{name:"Mary",animal:"Magpie",id:23,role:"user"},{name:"Nerys",animal:"Narwhal",id:24,role:"user"},{name:"Oliver",animal:"Octopus",id:31,role:"user"},{name:"Penny",animal:"Panda",id:32,role:"admin"},{name:"Quentin",animal:"Quail",id:33,role:"admin"},{name:"Roger",animal:"Raccoon",id:41,role:"user"},{name:"Simon",animal:"Stoat",id:42,role:"user"},{name:"Terry",animal:"Tiger",id:43,role:"user"},{name:"Ursula",animal:"Unicorn",id:101,role:"user"},{name:"Violet",animal:"Vole",id:102,role:"user"},{name:"Willy",animal:"Wombat",id:103,role:"user"},{name:"Xerces",animal:"Xenus",id:201,role:"user"},{name:"Yvonne",animal:"Yaz",id:202,role:"user"},{name:"Zebedee",animal:"Zebra",id:203,role:"user"},{name:"Al",animal:"Zebra",id:301,role:"guest"},{name:"Bob",animal:"Wombat",id:302,role:"guest"},{name:"Chris",animal:"Panda",id:303,role:"guest"},{name:"Kevin",animal:"Gerbil",id:304,role:"guest"},{name:"Roland",animal:"Rat",id:1234,role:"superstar"}],VL=()=>o.jsx(Gt,{rows:_n,columns:"id name animal role"}),WL=`import { Datatable } from '@/src/index.jsx'

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

export default DatatableExample`,Bx=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"Datatable"})," component can be used to display, sort, filter and page sets of data."]}),o.jsxs("div",{className:"cols-2 stack-desktop",children:[o.jsxs("p",{children:["The two mandatory properties are ",o.jsx("code",{children:"rows"})," and ",o.jsx("code",{children:"columns"}),". The ",o.jsx("code",{children:"rows"})," should be an array of objects containing the data that you want to display.  The ",o.jsx("code",{children:"columns"})," defines which properties in those objects you want to display.  In the simple case this can be a string of whitespace delimited identifiers. These should correspond to properties in the objects in the"," ",o.jsx("code",{children:"rows"})," array."]}),o.jsx("p",{children:"Click on the column headings to set the sort order.  Clicking again on the same column heading will toggle the order between ascending and descending.  Click on the small filter icon in each heading to show/hide the filters.  You can then type into the filter value for each column to filter the rows."}),o.jsx("p",{children:'The "Page Size" dropdown menu in the top right corner allows you to specify how many rows appear on each page.  The "Columns" item next to it allows you to specify which columns should be displayed.  You can drag them to change the order of columns.'})]}),o.jsx(pe,{Component:VL,code:WL})]}),ZL=Object.freeze(Object.defineProperty({__proto__:null,default:Bx},Symbol.toStringTag,{value:"Module"})),KL=()=>o.jsx(Gt,{color:"brand",rows:_n,columns:"id name animal role"}),YL=`import React from 'react'
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

export default DatatableExample`,Ix=()=>o.jsx(R,{code:"color",Component:KL,Source:YL,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"color"})," property can be used to define the color range used for the data table."]})}),GL=Object.freeze(Object.defineProperty({__proto__:null,default:Ix},Symbol.toStringTag,{value:"Module"})),XL=()=>o.jsx(Gt,{rows:[{id:10101,name:"Alan",salary:123456,admin:!0},{id:1010,name:"Brian",salary:45678,admin:!1},{id:101,name:"Charlie",salary:56789,admin:!1}],columns:{id:{type:"number",className:"text-right"},name:{},salary:{type:"currency",className:"text-right"},admin:{type:"boolean",className:"text-right"}}}),QL=`import React from 'react'
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

export default DatatableExample`,qL=()=>o.jsxs(R,{code:"type",Component:XL,Source:QL,undent:4,expand:!0,children:[o.jsxs("p",{children:["The ",o.jsx("code",{children:"type"})," property can be used to specify what kind of data type is used in the corresponding field in each row."]}),o.jsxs("p",{children:["The default value is ",o.jsx("code",{children:"string"})," which will display (and sort) values as strings.  You can also set it to ",o.jsx("code",{children:"number"}),","," ",o.jsx("code",{children:"currency"}),", ",o.jsx("code",{children:"boolean"}),", and others... (TODO)"]})]}),JL=Object.freeze(Object.defineProperty({__proto__:null,default:qL},Symbol.toStringTag,{value:"Module"})),eR=()=>o.jsx(Gt,{rows:_n,columns:{id:{},name:{display:({row:e})=>`${e.name} ${e.animal}`}}}),tR=`import React from 'react'
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

export default DatatableExample`,zx=()=>o.jsx(R,{code:"display",Component:eR,Source:tR,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"display"})," property can be used to define a custom function to display the column value."]})}),nR=Object.freeze(Object.defineProperty({__proto__:null,default:zx},Symbol.toStringTag,{value:"Module"})),rR=()=>o.jsx(Gt,{color:"brand",rows:_n,columns:"id name animal role"}),oR=`import React from 'react'
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
`,aR=()=>o.jsx(Gt,{color:"brand",rows:_n,columns:["id","name","animal","role"]}),sR=`import React from 'react'
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
`,lR=()=>o.jsx(Gt,{color:"brand",rows:_n,columns:[{field:"id"},{field:"name"},{field:"animal"},{field:"role"}]}),iR=`import React from 'react'
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
`,cR=()=>o.jsx(Gt,{color:"brand",rows:_n,columns:[{field:"id",label:"Ref.",type:"number"},{field:"name",label:"Username"},{field:"animal"},{field:"role"}]}),dR=`import React from 'react'
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
`,uR=()=>o.jsx(Gt,{color:"brand",rows:_n,columns:{id:{label:"Ref.",type:"number"},name:{label:"Username",type:"string"},animal:{},role:{}}}),pR=`import React from 'react'
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
`,Fx=()=>o.jsxs(U,{code:"columns",children:[o.jsxs("div",{className:"cols-2 stack-desktop mar-b-4",children:[o.jsxs("p",{children:["The ",o.jsx("code",{children:"columns"})," property is used to define which properties in the ",o.jsx("code",{children:"rows"})," you want to display."]}),o.jsx("p",{children:"For simple cases this can be a string containing a whitespace delimited list of properties."})]}),o.jsx(pe,{Component:rR,code:oR,caption:"columns",expand:!1,undent:2}),o.jsx("div",{className:"cols-2 stack-desktop mar-b-4",children:o.jsx("p",{children:"The string format is short-hand for specifying an array of strings."})}),o.jsx(pe,{Component:aR,code:sR,caption:"columns",expand:!1,undent:2}),o.jsx("div",{className:"cols-2 stack-desktop mar-b-4",children:o.jsxs("p",{children:['When a column is defined as a string it is "upgraded" to an object in which the string is the ',o.jsx("code",{children:"field"})," property. This should (usually) correspond to a property in each row that you want to display in the column."]})}),o.jsx(pe,{Component:lR,code:iR,caption:"columns",expand:!1,undent:2}),o.jsxs("div",{className:"cols-2 stack-desktop mar-b-4",children:[o.jsxs("p",{children:["The column object will be augmented with some additional properties:"," ",o.jsx("code",{children:"id"})," (the same value as the field, for sorting purposes),"," ",o.jsx("code",{children:"label"})," used as the label heading and defaulting to a capitalised version of the ",o.jsx("code",{children:"field"}),", and ",o.jsx("code",{children:"type"})," defaulting to ",o.jsx("code",{children:"string"}),"."]}),o.jsxs("p",{children:["You can define different values for ",o.jsx("code",{children:"label"})," and",o.jsx("code",{children:"type"})," (along with other properties"," ",o.jsx("a",{href:"#column-properties",children:"detailed below"}),")."]}),o.jsxs("p",{children:["In this example we set the ",o.jsx("code",{children:"type"})," of the first column to be ",o.jsx("code",{children:"number"}),".  If you click on the"," ",o.jsx("code",{children:"Id"})," column heading in one of the previous example, you can see that it's sorting the rows alphabetically, e.g."," ","10, 101, 102, 103, 11, 12, etc.  Setting the column type to"," ",o.jsx("code",{children:"number"}),", as shown in the next example, fixes this problem and the rows will be sorted numerically, e.g. 10, 11, 12, 13, 14, 20, etc."]})]}),o.jsx(pe,{Component:cR,code:dR,caption:"columns",expand:!1,undent:2}),o.jsx("div",{className:"cols-2 stack-desktop mar-b-4",children:o.jsxs("p",{children:["The final option is to define the columns as an object in which the keys are the field names and the values contain additional configuration options for the column.  These can be left empty if you're happy with the default values for ",o.jsx("code",{children:"label"})," and ",o.jsx("code",{children:"type"}),"."]})}),o.jsx(pe,{Component:uR,code:pR,caption:"columns",expand:!1,undent:2}),o.jsxs("p",{children:["See the ",o.jsx("a",{href:"#column-properties",children:"Column Properties"})," section below for further information about the properties that can be added to the ",o.jsx("code",{children:"columns"}),"."]})]}),fR=Object.freeze(Object.defineProperty({__proto__:null,default:Fx},Symbol.toStringTag,{value:"Module"})),hR=()=>o.jsx(Gt,{rows:_n,columns:{id:{label:"User ID"},name:{label:"User Name"}}}),mR=`import React from 'react'
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

export default DatatableExample`,Hx=()=>o.jsx(R,{code:"label",Component:hR,Source:mR,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"label"})," property can be used to define the label that appears in the column heading."]})}),gR=Object.freeze(Object.defineProperty({__proto__:null,default:Hx},Symbol.toStringTag,{value:"Module"})),xR=()=>o.jsx(Gt,{rows:[{id:10101,name:"Alan",salary:123456,admin:!0},{id:1010,name:"Brian",salary:45678,admin:!1},{id:101,name:"Charlie",salary:56789,admin:!1}],columns:{id:{type:"number"},name:{},salary:{type:"currency"},admin:{type:"boolean"}}}),vR=`import React from 'react'
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

export default DatatableExample`,Ux=()=>o.jsxs(R,{code:"type",Component:xR,Source:vR,undent:4,expand:!0,children:[o.jsxs("p",{children:["The ",o.jsx("code",{children:"type"})," property can be used to specify what kind of data type is used in the corresponding field in each row."]}),o.jsxs("p",{children:["The default value is ",o.jsx("code",{children:"string"})," which will display (and sort) values as strings.  You can also set it to ",o.jsx("code",{children:"number"}),","," ",o.jsx("code",{children:"currency"}),", ",o.jsx("code",{children:"boolean"}),", and others... (TODO)"]})]}),yR=Object.freeze(Object.defineProperty({__proto__:null,default:Ux},Symbol.toStringTag,{value:"Module"})),jR=()=>o.jsx(Gt,{rows:_n,columns:"id name animal role",pager:{size:"small",color:"blue"}}),CR=`import React from 'react'
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
 */function Fe(){return Fe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Fe.apply(this,arguments)}var He;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(He||(He={}));const u1="popstate";function bR(e){e===void 0&&(e={});function t(r,a){let{pathname:s,search:l,hash:i}=r.location;return xs("",{pathname:s,search:l,hash:i},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(r,a){return typeof a=="string"?a:qr(a)}return wR(t,n,null,e)}function ie(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Qr(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function SR(){return Math.random().toString(36).substr(2,8)}function p1(e,t){return{usr:e.state,key:e.key,idx:t}}function xs(e,t,n,r){return n===void 0&&(n=null),Fe({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Kn(t):t,{state:n,key:t&&t.key||r||SR()})}function qr(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Kn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function wR(e,t,n,r){r===void 0&&(r={});let{window:a=document.defaultView,v5Compat:s=!1}=r,l=a.history,i=He.Pop,c=null,d=u();d==null&&(d=0,l.replaceState(Fe({},l.state,{idx:d}),""));function u(){return(l.state||{idx:null}).idx}function p(){i=He.Pop;let _=u(),x=_==null?null:_-d;d=_,c&&c({action:i,location:C.location,delta:x})}function m(_,x){i=He.Push;let f=xs(C.location,_,x);n&&n(f,_),d=u()+1;let h=p1(f,d),j=C.createHref(f);try{l.pushState(h,"",j)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;a.location.assign(j)}s&&c&&c({action:i,location:C.location,delta:1})}function y(_,x){i=He.Replace;let f=xs(C.location,_,x);n&&n(f,_),d=u();let h=p1(f,d),j=C.createHref(f);l.replaceState(h,"",j),s&&c&&c({action:i,location:C.location,delta:0})}function b(_){let x=a.location.origin!=="null"?a.location.origin:a.location.href,f=typeof _=="string"?_:qr(_);return ie(x,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,x)}let C={get action(){return i},get location(){return e(a,l)},listen(_){if(c)throw new Error("A history only accepts one active listener");return a.addEventListener(u1,p),c=_,()=>{a.removeEventListener(u1,p),c=null}},createHref(_){return t(a,_)},createURL:b,encodeLocation(_){let x=b(_);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:m,replace:y,go(_){return l.go(_)}};return C}var Ie;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ie||(Ie={}));const _R=new Set(["lazy","caseSensitive","path","id","index","children"]);function kR(e){return e.index===!0}function ou(e,t,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((a,s)=>{let l=[...n,s],i=typeof a.id=="string"?a.id:l.join("-");if(ie(a.index!==!0||!a.children,"Cannot specify children on an index route"),ie(!r[i],'Found a route id collision on id "'+i+`".  Route id's must be globally unique within Data Router usages`),kR(a)){let c=Fe({},a,t(a),{id:i});return r[i]=c,c}else{let c=Fe({},a,t(a),{id:i,children:void 0});return r[i]=c,a.children&&(c.children=ou(a.children,t,l,r)),c}})}function No(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Kn(t):t,a=yr(r.pathname||"/",n);if(a==null)return null;let s=Vx(e);ER(s);let l=null;for(let i=0;l==null&&i<s.length;++i)l=$R(s[i],IR(a));return l}function TR(e,t){let{route:n,pathname:r,params:a}=e;return{id:n.id,pathname:r,params:a,data:t[n.id],handle:n.handle}}function Vx(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let a=(s,l,i)=>{let c={relativePath:i===void 0?s.path||"":i,caseSensitive:s.caseSensitive===!0,childrenIndex:l,route:s};c.relativePath.startsWith("/")&&(ie(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let d=Mn([r,c.relativePath]),u=n.concat(c);s.children&&s.children.length>0&&(ie(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),Vx(s.children,t,u,d)),!(s.path==null&&!s.index)&&t.push({path:d,score:MR(d,s.index),routesMeta:u})};return e.forEach((s,l)=>{var i;if(s.path===""||!((i=s.path)!=null&&i.includes("?")))a(s,l);else for(let c of Wx(s.path))a(s,l,c)}),t}function Wx(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,a=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return a?[s,""]:[s];let l=Wx(r.join("/")),i=[];return i.push(...l.map(c=>c===""?s:[s,c].join("/"))),a&&i.push(...l),i.map(c=>e.startsWith("/")&&c===""?"/":c)}function ER(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:PR(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const NR=/^:\w+$/,LR=3,RR=2,DR=1,OR=10,AR=-2,f1=e=>e==="*";function MR(e,t){let n=e.split("/"),r=n.length;return n.some(f1)&&(r+=AR),t&&(r+=RR),n.filter(a=>!f1(a)).reduce((a,s)=>a+(NR.test(s)?LR:s===""?DR:OR),r)}function PR(e,t){return e.length===t.length&&e.slice(0,-1).every((r,a)=>r===t[a])?e[e.length-1]-t[t.length-1]:0}function $R(e,t){let{routesMeta:n}=e,r={},a="/",s=[];for(let l=0;l<n.length;++l){let i=n[l],c=l===n.length-1,d=a==="/"?t:t.slice(a.length)||"/",u=au({path:i.relativePath,caseSensitive:i.caseSensitive,end:c},d);if(!u)return null;Object.assign(r,u.params);let p=i.route;s.push({params:r,pathname:Mn([a,u.pathname]),pathnameBase:UR(Mn([a,u.pathnameBase])),route:p}),u.pathnameBase!=="/"&&(a=Mn([a,u.pathnameBase]))}return s}function au(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=BR(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let s=a[0],l=s.replace(/(.)\/+$/,"$1"),i=a.slice(1);return{params:r.reduce((d,u,p)=>{let{paramName:m,isOptional:y}=u;if(m==="*"){let C=i[p]||"";l=s.slice(0,s.length-C.length).replace(/(.)\/+$/,"$1")}const b=i[p];return y&&!b?d[m]=void 0:d[m]=zR(b||"",m),d},{}),pathname:s,pathnameBase:l,pattern:e}}function BR(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Qr(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(l,i,c)=>(r.push({paramName:i,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),r]}function IR(e){try{return decodeURI(e)}catch(t){return Qr(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function zR(e,t){try{return decodeURIComponent(e)}catch(n){return Qr(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function yr(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function FR(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:a=""}=typeof e=="string"?Kn(e):e;return{pathname:n?n.startsWith("/")?n:HR(n,t):t,search:VR(r),hash:WR(a)}}function HR(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function Yc(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Zx(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Jp(e,t){let n=Zx(e);return t?n.map((r,a)=>a===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function ef(e,t,n,r){r===void 0&&(r=!1);let a;typeof e=="string"?a=Kn(e):(a=Fe({},e),ie(!a.pathname||!a.pathname.includes("?"),Yc("?","pathname","search",a)),ie(!a.pathname||!a.pathname.includes("#"),Yc("#","pathname","hash",a)),ie(!a.search||!a.search.includes("#"),Yc("#","search","hash",a)));let s=e===""||a.pathname==="",l=s?"/":a.pathname,i;if(l==null)i=n;else{let p=t.length-1;if(!r&&l.startsWith("..")){let m=l.split("/");for(;m[0]==="..";)m.shift(),p-=1;a.pathname=m.join("/")}i=p>=0?t[p]:"/"}let c=FR(a,i),d=l&&l!=="/"&&l.endsWith("/"),u=(s||l===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(d||u)&&(c.pathname+="/"),c}const Mn=e=>e.join("/").replace(/\/\/+/g,"/"),UR=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),VR=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,WR=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class tf{constructor(t,n,r,a){a===void 0&&(a=!1),this.status=t,this.statusText=n||"",this.internal=a,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function Kx(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Yx=["post","put","patch","delete"],ZR=new Set(Yx),KR=["get",...Yx],YR=new Set(KR),GR=new Set([301,302,303,307,308]),XR=new Set([307,308]),Gc={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},QR={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},xa={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Gx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,qR=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),Xx="remix-router-transitions";function JR(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",r=!n;ie(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let a;if(e.mapRouteProperties)a=e.mapRouteProperties;else if(e.detectErrorBoundary){let k=e.detectErrorBoundary;a=N=>({hasErrorBoundary:k(N)})}else a=qR;let s={},l=ou(e.routes,a,void 0,s),i,c=e.basename||"/",d=Fe({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1},e.future),u=null,p=new Set,m=null,y=null,b=null,C=e.hydrationData!=null,_=No(l,e.history.location,c),x=null;if(_==null){let k=Bt(404,{pathname:e.history.location.pathname}),{matches:N,route:L}=C1(l);_=N,x={[L.id]:k}}let f,h=_.some(k=>k.route.lazy),j=_.some(k=>k.route.loader);if(h)f=!1;else if(!j)f=!0;else if(d.v7_partialHydration){let k=e.hydrationData?e.hydrationData.loaderData:null,N=e.hydrationData?e.hydrationData.errors:null;f=_.every(L=>L.route.loader&&L.route.loader.hydrate!==!0&&(k&&k[L.route.id]!==void 0||N&&N[L.route.id]!==void 0))}else f=e.hydrationData!=null;let S,g={historyAction:e.history.action,location:e.history.location,matches:_,initialized:f,navigation:Gc,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||x,fetchers:new Map,blockers:new Map},w=He.Pop,T=!1,E,D=!1,P=new Map,Y=null,Q=!1,G=!1,ne=[],oe=[],V=new Map,O=0,B=-1,I=new Map,H=new Set,W=new Map,be=new Map,se=new Set,je=new Map,ae=new Map,Ne=!1;function st(){if(u=e.history.listen(k=>{let{action:N,location:L,delta:$}=k;if(Ne){Ne=!1;return}Qr(ae.size===0||$!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let z=Ys({currentLocation:g.location,nextLocation:L,historyAction:N});if(z&&$!=null){Ne=!0,e.history.go($*-1),Or(z,{state:"blocked",location:L,proceed(){Or(z,{state:"proceeding",proceed:void 0,reset:void 0,location:L}),e.history.go($)},reset(){let te=new Map(g.blockers);te.set(z,xa),Le({blockers:te})}});return}return Ct(N,L)}),n){dD(t,P);let k=()=>uD(t,P);t.addEventListener("pagehide",k),Y=()=>t.removeEventListener("pagehide",k)}return g.initialized||Ct(He.Pop,g.location,{initialHydration:!0}),S}function jt(){u&&u(),Y&&Y(),p.clear(),E&&E.abort(),g.fetchers.forEach((k,N)=>qt(N)),g.blockers.forEach((k,N)=>Ks(N))}function fe(k){return p.add(k),()=>p.delete(k)}function Le(k,N){N===void 0&&(N={}),g=Fe({},g,k);let L=[],$=[];d.v7_fetcherPersist&&g.fetchers.forEach((z,te)=>{z.state==="idle"&&(se.has(te)?$.push(te):L.push(te))}),[...p].forEach(z=>z(g,{deletedFetchers:$,unstable_viewTransitionOpts:N.viewTransitionOpts,unstable_flushSync:N.flushSync===!0})),d.v7_fetcherPersist&&(L.forEach(z=>g.fetchers.delete(z)),$.forEach(z=>qt(z)))}function Qe(k,N,L){var $,z;let{flushSync:te}=L===void 0?{}:L,K=g.actionData!=null&&g.navigation.formMethod!=null&&rn(g.navigation.formMethod)&&g.navigation.state==="loading"&&(($=k.state)==null?void 0:$._isRedirect)!==!0,X;N.actionData?Object.keys(N.actionData).length>0?X=N.actionData:X=null:K?X=g.actionData:X=null;let Z=N.loaderData?j1(g.loaderData,N.loaderData,N.matches||[],N.errors):g.loaderData,le=g.blockers;le.size>0&&(le=new Map(le),le.forEach((ve,Ae)=>le.set(Ae,xa)));let Oe=T===!0||g.navigation.formMethod!=null&&rn(g.navigation.formMethod)&&((z=k.state)==null?void 0:z._isRedirect)!==!0;i&&(l=i,i=void 0),Q||w===He.Pop||(w===He.Push?e.history.push(k,k.state):w===He.Replace&&e.history.replace(k,k.state));let re;if(w===He.Pop){let ve=P.get(g.location.pathname);ve&&ve.has(k.pathname)?re={currentLocation:g.location,nextLocation:k}:P.has(k.pathname)&&(re={currentLocation:k,nextLocation:g.location})}else if(D){let ve=P.get(g.location.pathname);ve?ve.add(k.pathname):(ve=new Set([k.pathname]),P.set(g.location.pathname,ve)),re={currentLocation:g.location,nextLocation:k}}Le(Fe({},N,{actionData:X,loaderData:Z,historyAction:w,location:k,initialized:!0,navigation:Gc,revalidation:"idle",restoreScrollPosition:Ve(k,N.matches||g.matches),preventScrollReset:Oe,blockers:le}),{viewTransitionOpts:re,flushSync:te===!0}),w=He.Pop,T=!1,D=!1,Q=!1,G=!1,ne=[],oe=[]}async function Lt(k,N){if(typeof k=="number"){e.history.go(k);return}let L=su(g.location,g.matches,c,d.v7_prependBasename,k,d.v7_relativeSplatPath,N==null?void 0:N.fromRouteId,N==null?void 0:N.relative),{path:$,submission:z,error:te}=h1(d.v7_normalizeFormMethod,!1,L,N),K=g.location,X=xs(g.location,$,N&&N.state);X=Fe({},X,e.history.encodeLocation(X));let Z=N&&N.replace!=null?N.replace:void 0,le=He.Push;Z===!0?le=He.Replace:Z===!1||z!=null&&rn(z.formMethod)&&z.formAction===g.location.pathname+g.location.search&&(le=He.Replace);let Oe=N&&"preventScrollReset"in N?N.preventScrollReset===!0:void 0,re=(N&&N.unstable_flushSync)===!0,ve=Ys({currentLocation:K,nextLocation:X,historyAction:le});if(ve){Or(ve,{state:"blocked",location:X,proceed(){Or(ve,{state:"proceeding",proceed:void 0,reset:void 0,location:X}),Lt(k,N)},reset(){let Ae=new Map(g.blockers);Ae.set(ve,xa),Le({blockers:Ae})}});return}return await Ct(le,X,{submission:z,pendingError:te,preventScrollReset:Oe,replace:N&&N.replace,enableViewTransition:N&&N.unstable_viewTransition,flushSync:re})}function Xt(){if(lo(),Le({revalidation:"loading"}),g.navigation.state!=="submitting"){if(g.navigation.state==="idle"){Ct(g.historyAction,g.location,{startUninterruptedRevalidation:!0});return}Ct(w||g.historyAction,g.navigation.location,{overrideNavigation:g.navigation})}}async function Ct(k,N,L){E&&E.abort(),E=null,w=k,Q=(L&&L.startUninterruptedRevalidation)===!0,ac(g.location,g.matches),T=(L&&L.preventScrollReset)===!0,D=(L&&L.enableViewTransition)===!0;let $=i||l,z=L&&L.overrideNavigation,te=No($,N,c),K=(L&&L.flushSync)===!0;if(!te){let Ae=Bt(404,{pathname:N.pathname}),{matches:lt,route:qe}=C1($);io(),Qe(N,{matches:lt,loaderData:{},errors:{[qe.id]:Ae}},{flushSync:K});return}if(g.initialized&&!G&&oD(g.location,N)&&!(L&&L.submission&&rn(L.submission.formMethod))){Qe(N,{matches:te},{flushSync:K});return}E=new AbortController;let X=ya(e.history,N,E.signal,L&&L.submission),Z,le;if(L&&L.pendingError)le={[Ka(te).route.id]:L.pendingError};else if(L&&L.submission&&rn(L.submission.formMethod)){let Ae=await Yn(X,N,L.submission,te,{replace:L.replace,flushSync:K});if(Ae.shortCircuited)return;Z=Ae.pendingActionData,le=Ae.pendingActionError,z=Xc(N,L.submission),K=!1,X=new Request(X.url,{signal:X.signal})}let{shortCircuited:Oe,loaderData:re,errors:ve}=await Vs(X,N,te,z,L&&L.submission,L&&L.fetcherSubmission,L&&L.replace,L&&L.initialHydration===!0,K,Z,le);Oe||(E=null,Qe(N,Fe({matches:te},Z?{actionData:Z}:{},{loaderData:re,errors:ve})))}async function Yn(k,N,L,$,z){z===void 0&&(z={}),lo();let te=iD(N,L);Le({navigation:te},{flushSync:z.flushSync===!0});let K,X=iu($,N);if(!X.route.action&&!X.route.lazy)K={type:Ie.error,error:Bt(405,{method:k.method,pathname:N.pathname,routeId:X.route.id})};else if(K=await va("action",k,X,$,s,a,c,d.v7_relativeSplatPath),k.signal.aborted)return{shortCircuited:!0};if(Ur(K)){let Z;return z&&z.replace!=null?Z=z.replace:Z=K.location===g.location.pathname+g.location.search,await pn(g,K,{submission:L,replace:Z}),{shortCircuited:!0}}if(Lo(K)){let Z=Ka($,X.route.id);return(z&&z.replace)!==!0&&(w=He.Push),{pendingActionData:{},pendingActionError:{[Z.route.id]:K.error}}}if(Hr(K))throw Bt(400,{type:"defer-action"});return{pendingActionData:{[X.route.id]:K.data}}}async function Vs(k,N,L,$,z,te,K,X,Z,le,Oe){let re=$||Xc(N,z),ve=z||te||w1(re),Ae=i||l,[lt,qe]=m1(e.history,g,L,ve,N,d.v7_partialHydration&&X===!0,G,ne,oe,se,W,H,Ae,c,le,Oe);if(io(Se=>!(L&&L.some(Re=>Re.route.id===Se))||lt&&lt.some(Re=>Re.route.id===Se)),B=++O,lt.length===0&&qe.length===0){let Se=Jt();return Qe(N,Fe({matches:L,loaderData:{},errors:Oe||null},le?{actionData:le}:{},Se?{fetchers:new Map(g.fetchers)}:{}),{flushSync:Z}),{shortCircuited:!0}}if(!Q&&(!d.v7_partialHydration||!X)){qe.forEach(Re=>{let fn=g.fetchers.get(Re.key),Qs=ja(void 0,fn?fn.data:void 0);g.fetchers.set(Re.key,Qs)});let Se=le||g.actionData;Le(Fe({navigation:re},Se?Object.keys(Se).length===0?{actionData:null}:{actionData:Se}:{},qe.length>0?{fetchers:new Map(g.fetchers)}:{}),{flushSync:Z})}qe.forEach(Se=>{V.has(Se.key)&&bt(Se.key),Se.controller&&V.set(Se.key,Se.controller)});let co=()=>qe.forEach(Se=>bt(Se.key));E&&E.signal.addEventListener("abort",co);let{results:sc,loaderResults:uo,fetcherResults:Xn}=await Rr(g.matches,L,lt,qe,k);if(k.signal.aborted)return{shortCircuited:!0};E&&E.signal.removeEventListener("abort",co),qe.forEach(Se=>V.delete(Se.key));let Ar=b1(sc);if(Ar){if(Ar.idx>=lt.length){let Se=qe[Ar.idx-lt.length].key;H.add(Se)}return await pn(g,Ar.result,{replace:K}),{shortCircuited:!0}}let{loaderData:lc,errors:ic}=y1(g,L,lt,uo,Oe,qe,Xn,je);je.forEach((Se,Re)=>{Se.subscribe(fn=>{(fn||Se.done)&&je.delete(Re)})});let cc=Jt(),po=sa(B),Xs=cc||po||qe.length>0;return Fe({loaderData:lc,errors:ic},Xs?{fetchers:new Map(g.fetchers)}:{})}function Ws(k,N,L,$){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");V.has(k)&&bt(k);let z=($&&$.unstable_flushSync)===!0,te=i||l,K=su(g.location,g.matches,c,d.v7_prependBasename,L,d.v7_relativeSplatPath,N,$==null?void 0:$.relative),X=No(te,K,c);if(!X){Dr(k,N,Bt(404,{pathname:K}),{flushSync:z});return}let{path:Z,submission:le,error:Oe}=h1(d.v7_normalizeFormMethod,!0,K,$);if(Oe){Dr(k,N,Oe,{flushSync:z});return}let re=iu(X,Z);if(T=($&&$.preventScrollReset)===!0,le&&rn(le.formMethod)){oa(k,N,Z,re,X,z,le);return}W.set(k,{routeId:N,path:Z}),un(k,N,Z,re,X,z,le)}async function oa(k,N,L,$,z,te,K){if(lo(),W.delete(k),!$.route.action&&!$.route.lazy){let Re=Bt(405,{method:K.formMethod,pathname:L,routeId:N});Dr(k,N,Re,{flushSync:te});return}let X=g.fetchers.get(k);Qt(k,cD(K,X),{flushSync:te});let Z=new AbortController,le=ya(e.history,L,Z.signal,K);V.set(k,Z);let Oe=O,re=await va("action",le,$,z,s,a,c,d.v7_relativeSplatPath);if(le.signal.aborted){V.get(k)===Z&&V.delete(k);return}if(d.v7_fetcherPersist&&se.has(k)){if(Ur(re)||Lo(re)){Qt(k,Jn(void 0));return}}else{if(Ur(re))if(V.delete(k),B>Oe){Qt(k,Jn(void 0));return}else return H.add(k),Qt(k,ja(K)),pn(g,re,{fetcherSubmission:K});if(Lo(re)){Dr(k,N,re.error);return}}if(Hr(re))throw Bt(400,{type:"defer-action"});let ve=g.navigation.location||g.location,Ae=ya(e.history,ve,Z.signal),lt=i||l,qe=g.navigation.state!=="idle"?No(lt,g.navigation.location,c):g.matches;ie(qe,"Didn't find any matches after fetcher action");let co=++O;I.set(k,co);let sc=ja(K,re.data);g.fetchers.set(k,sc);let[uo,Xn]=m1(e.history,g,qe,K,ve,!1,G,ne,oe,se,W,H,lt,c,{[$.route.id]:re.data},void 0);Xn.filter(Re=>Re.key!==k).forEach(Re=>{let fn=Re.key,Qs=g.fetchers.get(fn),A4=ja(void 0,Qs?Qs.data:void 0);g.fetchers.set(fn,A4),V.has(fn)&&bt(fn),Re.controller&&V.set(fn,Re.controller)}),Le({fetchers:new Map(g.fetchers)});let Ar=()=>Xn.forEach(Re=>bt(Re.key));Z.signal.addEventListener("abort",Ar);let{results:lc,loaderResults:ic,fetcherResults:cc}=await Rr(g.matches,qe,uo,Xn,Ae);if(Z.signal.aborted)return;Z.signal.removeEventListener("abort",Ar),I.delete(k),V.delete(k),Xn.forEach(Re=>V.delete(Re.key));let po=b1(lc);if(po){if(po.idx>=uo.length){let Re=Xn[po.idx-uo.length].key;H.add(Re)}return pn(g,po.result)}let{loaderData:Xs,errors:Se}=y1(g,g.matches,uo,ic,void 0,Xn,cc,je);if(g.fetchers.has(k)){let Re=Jn(re.data);g.fetchers.set(k,Re)}sa(co),g.navigation.state==="loading"&&co>B?(ie(w,"Expected pending action"),E&&E.abort(),Qe(g.navigation.location,{matches:qe,loaderData:Xs,errors:Se,fetchers:new Map(g.fetchers)})):(Le({errors:Se,loaderData:j1(g.loaderData,Xs,qe,Se),fetchers:new Map(g.fetchers)}),G=!1)}async function un(k,N,L,$,z,te,K){let X=g.fetchers.get(k);Qt(k,ja(K,X?X.data:void 0),{flushSync:te});let Z=new AbortController,le=ya(e.history,L,Z.signal);V.set(k,Z);let Oe=O,re=await va("loader",le,$,z,s,a,c,d.v7_relativeSplatPath);if(Hr(re)&&(re=await Jx(re,le.signal,!0)||re),V.get(k)===Z&&V.delete(k),!le.signal.aborted){if(se.has(k)){Qt(k,Jn(void 0));return}if(Ur(re))if(B>Oe){Qt(k,Jn(void 0));return}else{H.add(k),await pn(g,re);return}if(Lo(re)){Dr(k,N,re.error);return}ie(!Hr(re),"Unhandled fetcher deferred data"),Qt(k,Jn(re.data))}}async function pn(k,N,L){let{submission:$,fetcherSubmission:z,replace:te}=L===void 0?{}:L;N.revalidate&&(G=!0);let K=xs(k.location,N.location,{_isRedirect:!0});if(ie(K,"Expected a location on the redirect navigation"),n){let ve=!1;if(N.reloadDocument)ve=!0;else if(Gx.test(N.location)){const Ae=e.history.createURL(N.location);ve=Ae.origin!==t.location.origin||yr(Ae.pathname,c)==null}if(ve){te?t.location.replace(N.location):t.location.assign(N.location);return}}E=null;let X=te===!0?He.Replace:He.Push,{formMethod:Z,formAction:le,formEncType:Oe}=k.navigation;!$&&!z&&Z&&le&&Oe&&($=w1(k.navigation));let re=$||z;if(XR.has(N.status)&&re&&rn(re.formMethod))await Ct(X,K,{submission:Fe({},re,{formAction:N.location}),preventScrollReset:T});else{let ve=Xc(K,$);await Ct(X,K,{overrideNavigation:ve,fetcherSubmission:z,preventScrollReset:T})}}async function Rr(k,N,L,$,z){let te=await Promise.all([...L.map(Z=>va("loader",z,Z,N,s,a,c,d.v7_relativeSplatPath)),...$.map(Z=>Z.matches&&Z.match&&Z.controller?va("loader",ya(e.history,Z.path,Z.controller.signal),Z.match,Z.matches,s,a,c,d.v7_relativeSplatPath):{type:Ie.error,error:Bt(404,{pathname:Z.path})})]),K=te.slice(0,L.length),X=te.slice(L.length);return await Promise.all([S1(k,L,K,K.map(()=>z.signal),!1,g.loaderData),S1(k,$.map(Z=>Z.match),X,$.map(Z=>Z.controller?Z.controller.signal:null),!0)]),{results:te,loaderResults:K,fetcherResults:X}}function lo(){G=!0,ne.push(...io()),W.forEach((k,N)=>{V.has(N)&&(oe.push(N),bt(N))})}function Qt(k,N,L){L===void 0&&(L={}),g.fetchers.set(k,N),Le({fetchers:new Map(g.fetchers)},{flushSync:(L&&L.flushSync)===!0})}function Dr(k,N,L,$){$===void 0&&($={});let z=Ka(g.matches,N);qt(k),Le({errors:{[z.route.id]:L},fetchers:new Map(g.fetchers)},{flushSync:($&&$.flushSync)===!0})}function Zs(k){return d.v7_fetcherPersist&&(be.set(k,(be.get(k)||0)+1),se.has(k)&&se.delete(k)),g.fetchers.get(k)||QR}function qt(k){let N=g.fetchers.get(k);V.has(k)&&!(N&&N.state==="loading"&&I.has(k))&&bt(k),W.delete(k),I.delete(k),H.delete(k),se.delete(k),g.fetchers.delete(k)}function Gn(k){if(d.v7_fetcherPersist){let N=(be.get(k)||0)-1;N<=0?(be.delete(k),se.add(k)):be.set(k,N)}else qt(k);Le({fetchers:new Map(g.fetchers)})}function bt(k){let N=V.get(k);ie(N,"Expected fetch controller: "+k),N.abort(),V.delete(k)}function aa(k){for(let N of k){let L=Zs(N),$=Jn(L.data);g.fetchers.set(N,$)}}function Jt(){let k=[],N=!1;for(let L of H){let $=g.fetchers.get(L);ie($,"Expected fetcher: "+L),$.state==="loading"&&(H.delete(L),k.push(L),N=!0)}return aa(k),N}function sa(k){let N=[];for(let[L,$]of I)if($<k){let z=g.fetchers.get(L);ie(z,"Expected fetcher: "+L),z.state==="loading"&&(bt(L),I.delete(L),N.push(L))}return aa(N),N.length>0}function rc(k,N){let L=g.blockers.get(k)||xa;return ae.get(k)!==N&&ae.set(k,N),L}function Ks(k){g.blockers.delete(k),ae.delete(k)}function Or(k,N){let L=g.blockers.get(k)||xa;ie(L.state==="unblocked"&&N.state==="blocked"||L.state==="blocked"&&N.state==="blocked"||L.state==="blocked"&&N.state==="proceeding"||L.state==="blocked"&&N.state==="unblocked"||L.state==="proceeding"&&N.state==="unblocked","Invalid blocker state transition: "+L.state+" -> "+N.state);let $=new Map(g.blockers);$.set(k,N),Le({blockers:$})}function Ys(k){let{currentLocation:N,nextLocation:L,historyAction:$}=k;if(ae.size===0)return;ae.size>1&&Qr(!1,"A router only supports one blocker at a time");let z=Array.from(ae.entries()),[te,K]=z[z.length-1],X=g.blockers.get(te);if(!(X&&X.state==="proceeding")&&K({currentLocation:N,nextLocation:L,historyAction:$}))return te}function io(k){let N=[];return je.forEach((L,$)=>{(!k||k($))&&(L.cancel(),N.push($),je.delete($))}),N}function oc(k,N,L){if(m=k,b=N,y=L||null,!C&&g.navigation===Gc){C=!0;let $=Ve(g.location,g.matches);$!=null&&Le({restoreScrollPosition:$})}return()=>{m=null,b=null,y=null}}function Gs(k,N){return y&&y(k,N.map($=>TR($,g.loaderData)))||k.key}function ac(k,N){if(m&&b){let L=Gs(k,N);m[L]=b()}}function Ve(k,N){if(m){let L=Gs(k,N),$=m[L];if(typeof $=="number")return $}return null}function ft(k){s={},i=ou(k,a,void 0,s)}return S={get basename(){return c},get future(){return d},get state(){return g},get routes(){return l},get window(){return t},initialize:st,subscribe:fe,enableScrollRestoration:oc,navigate:Lt,fetch:Ws,revalidate:Xt,createHref:k=>e.history.createHref(k),encodeLocation:k=>e.history.encodeLocation(k),getFetcher:Zs,deleteFetcher:Gn,dispose:jt,getBlocker:rc,deleteBlocker:Ks,_internalFetchControllers:V,_internalActiveDeferreds:je,_internalSetRoutes:ft},S}function eD(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function su(e,t,n,r,a,s,l,i){let c,d;if(l){c=[];for(let p of t)if(c.push(p),p.route.id===l){d=p;break}}else c=t,d=t[t.length-1];let u=ef(a||".",Jp(c,s),yr(e.pathname,n)||e.pathname,i==="path");return a==null&&(u.search=e.search,u.hash=e.hash),(a==null||a===""||a===".")&&d&&d.route.index&&!nf(u.search)&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(u.pathname=u.pathname==="/"?n:Mn([n,u.pathname])),qr(u)}function h1(e,t,n,r){if(!r||!eD(r))return{path:n};if(r.formMethod&&!lD(r.formMethod))return{path:n,error:Bt(405,{method:r.formMethod})};let a=()=>({path:n,error:Bt(400,{type:"invalid-body"})}),s=r.formMethod||"get",l=e?s.toUpperCase():s.toLowerCase(),i=qx(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!rn(l))return a();let m=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((y,b)=>{let[C,_]=b;return""+y+C+"="+_+`
`},""):String(r.body);return{path:n,submission:{formMethod:l,formAction:i,formEncType:r.formEncType,formData:void 0,json:void 0,text:m}}}else if(r.formEncType==="application/json"){if(!rn(l))return a();try{let m=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:l,formAction:i,formEncType:r.formEncType,formData:void 0,json:m,text:void 0}}}catch{return a()}}}ie(typeof FormData=="function","FormData is not available in this environment");let c,d;if(r.formData)c=lu(r.formData),d=r.formData;else if(r.body instanceof FormData)c=lu(r.body),d=r.body;else if(r.body instanceof URLSearchParams)c=r.body,d=v1(c);else if(r.body==null)c=new URLSearchParams,d=new FormData;else try{c=new URLSearchParams(r.body),d=v1(c)}catch{return a()}let u={formMethod:l,formAction:i,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:d,json:void 0,text:void 0};if(rn(u.formMethod))return{path:n,submission:u};let p=Kn(n);return t&&p.search&&nf(p.search)&&c.append("index",""),p.search="?"+c,{path:qr(p),submission:u}}function tD(e,t){let n=e;if(t){let r=e.findIndex(a=>a.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function m1(e,t,n,r,a,s,l,i,c,d,u,p,m,y,b,C){let _=C?Object.values(C)[0]:b?Object.values(b)[0]:void 0,x=e.createURL(t.location),f=e.createURL(a),h=C?Object.keys(C)[0]:void 0,S=tD(n,h).filter((w,T)=>{let{route:E}=w;if(E.lazy)return!0;if(E.loader==null)return!1;if(s)return E.loader.hydrate?!0:t.loaderData[E.id]===void 0&&(!t.errors||t.errors[E.id]===void 0);if(nD(t.loaderData,t.matches[T],w)||i.some(Y=>Y===w.route.id))return!0;let D=t.matches[T],P=w;return g1(w,Fe({currentUrl:x,currentParams:D.params,nextUrl:f,nextParams:P.params},r,{actionResult:_,defaultShouldRevalidate:l||x.pathname+x.search===f.pathname+f.search||x.search!==f.search||Qx(D,P)}))}),g=[];return u.forEach((w,T)=>{if(s||!n.some(Q=>Q.route.id===w.routeId)||d.has(T))return;let E=No(m,w.path,y);if(!E){g.push({key:T,routeId:w.routeId,path:w.path,matches:null,match:null,controller:null});return}let D=t.fetchers.get(T),P=iu(E,w.path),Y=!1;p.has(T)?Y=!1:c.includes(T)?Y=!0:D&&D.state!=="idle"&&D.data===void 0?Y=l:Y=g1(P,Fe({currentUrl:x,currentParams:t.matches[t.matches.length-1].params,nextUrl:f,nextParams:n[n.length-1].params},r,{actionResult:_,defaultShouldRevalidate:l})),Y&&g.push({key:T,routeId:w.routeId,path:w.path,matches:E,match:P,controller:new AbortController})}),[S,g]}function nD(e,t,n){let r=!t||n.route.id!==t.route.id,a=e[n.route.id]===void 0;return r||a}function Qx(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function g1(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function x1(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let a=n[e.id];ie(a,"No route found in manifest");let s={};for(let l in r){let c=a[l]!==void 0&&l!=="hasErrorBoundary";Qr(!c,'Route "'+a.id+'" has a static property "'+l+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+l+'" will be ignored.')),!c&&!_R.has(l)&&(s[l]=r[l])}Object.assign(a,s),Object.assign(a,Fe({},t(a),{lazy:void 0}))}async function va(e,t,n,r,a,s,l,i,c){c===void 0&&(c={});let d,u,p,m=C=>{let _,x=new Promise((f,h)=>_=h);return p=()=>_(),t.signal.addEventListener("abort",p),Promise.race([C({request:t,params:n.params,context:c.requestContext}),x])};try{let C=n.route[e];if(n.route.lazy)if(C){let _,x=await Promise.all([m(C).catch(f=>{_=f}),x1(n.route,s,a)]);if(_)throw _;u=x[0]}else if(await x1(n.route,s,a),C=n.route[e],C)u=await m(C);else if(e==="action"){let _=new URL(t.url),x=_.pathname+_.search;throw Bt(405,{method:t.method,pathname:x,routeId:n.route.id})}else return{type:Ie.data,data:void 0};else if(C)u=await m(C);else{let _=new URL(t.url),x=_.pathname+_.search;throw Bt(404,{pathname:x})}ie(u!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(C){d=Ie.error,u=C}finally{p&&t.signal.removeEventListener("abort",p)}if(sD(u)){let C=u.status;if(GR.has(C)){let x=u.headers.get("Location");if(ie(x,"Redirects returned/thrown from loaders/actions must have a Location header"),!Gx.test(x))x=su(new URL(t.url),r.slice(0,r.indexOf(n)+1),l,!0,x,i);else if(!c.isStaticRequest){let f=new URL(t.url),h=x.startsWith("//")?new URL(f.protocol+x):new URL(x),j=yr(h.pathname,l)!=null;h.origin===f.origin&&j&&(x=h.pathname+h.search+h.hash)}if(c.isStaticRequest)throw u.headers.set("Location",x),u;return{type:Ie.redirect,status:C,location:x,revalidate:u.headers.get("X-Remix-Revalidate")!==null,reloadDocument:u.headers.get("X-Remix-Reload-Document")!==null}}if(c.isRouteRequest)throw{type:d===Ie.error?Ie.error:Ie.data,response:u};let _;try{let x=u.headers.get("Content-Type");x&&/\bapplication\/json\b/.test(x)?_=await u.json():_=await u.text()}catch(x){return{type:Ie.error,error:x}}return d===Ie.error?{type:d,error:new tf(C,u.statusText,_),headers:u.headers}:{type:Ie.data,data:_,statusCode:u.status,headers:u.headers}}if(d===Ie.error)return{type:d,error:u};if(aD(u)){var y,b;return{type:Ie.deferred,deferredData:u,statusCode:(y=u.init)==null?void 0:y.status,headers:((b=u.init)==null?void 0:b.headers)&&new Headers(u.init.headers)}}return{type:Ie.data,data:u}}function ya(e,t,n,r){let a=e.createURL(qx(t)).toString(),s={signal:n};if(r&&rn(r.formMethod)){let{formMethod:l,formEncType:i}=r;s.method=l.toUpperCase(),i==="application/json"?(s.headers=new Headers({"Content-Type":i}),s.body=JSON.stringify(r.json)):i==="text/plain"?s.body=r.text:i==="application/x-www-form-urlencoded"&&r.formData?s.body=lu(r.formData):s.body=r.formData}return new Request(a,s)}function lu(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,typeof r=="string"?r:r.name);return t}function v1(e){let t=new FormData;for(let[n,r]of e.entries())t.append(n,r);return t}function rD(e,t,n,r,a){let s={},l=null,i,c=!1,d={};return n.forEach((u,p)=>{let m=t[p].route.id;if(ie(!Ur(u),"Cannot handle redirect results in processLoaderData"),Lo(u)){let y=Ka(e,m),b=u.error;r&&(b=Object.values(r)[0],r=void 0),l=l||{},l[y.route.id]==null&&(l[y.route.id]=b),s[m]=void 0,c||(c=!0,i=Kx(u.error)?u.error.status:500),u.headers&&(d[m]=u.headers)}else Hr(u)?(a.set(m,u.deferredData),s[m]=u.deferredData.data):s[m]=u.data,u.statusCode!=null&&u.statusCode!==200&&!c&&(i=u.statusCode),u.headers&&(d[m]=u.headers)}),r&&(l=r,s[Object.keys(r)[0]]=void 0),{loaderData:s,errors:l,statusCode:i||200,loaderHeaders:d}}function y1(e,t,n,r,a,s,l,i){let{loaderData:c,errors:d}=rD(t,n,r,a,i);for(let u=0;u<s.length;u++){let{key:p,match:m,controller:y}=s[u];ie(l!==void 0&&l[u]!==void 0,"Did not find corresponding fetcher result");let b=l[u];if(!(y&&y.signal.aborted))if(Lo(b)){let C=Ka(e.matches,m==null?void 0:m.route.id);d&&d[C.route.id]||(d=Fe({},d,{[C.route.id]:b.error})),e.fetchers.delete(p)}else if(Ur(b))ie(!1,"Unhandled fetcher revalidation redirect");else if(Hr(b))ie(!1,"Unhandled fetcher deferred data");else{let C=Jn(b.data);e.fetchers.set(p,C)}}return{loaderData:c,errors:d}}function j1(e,t,n,r){let a=Fe({},t);for(let s of n){let l=s.route.id;if(t.hasOwnProperty(l)?t[l]!==void 0&&(a[l]=t[l]):e[l]!==void 0&&s.route.loader&&(a[l]=e[l]),r&&r.hasOwnProperty(l))break}return a}function Ka(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function C1(e){let t=e.length===1?e[0]:e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function Bt(e,t){let{pathname:n,routeId:r,method:a,type:s}=t===void 0?{}:t,l="Unknown Server Error",i="Unknown @remix-run/router error";return e===400?(l="Bad Request",a&&n&&r?i="You made a "+a+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"?i="defer() is not supported in actions":s==="invalid-body"&&(i="Unable to encode submission body")):e===403?(l="Forbidden",i='Route "'+r+'" does not match URL "'+n+'"'):e===404?(l="Not Found",i='No route matches URL "'+n+'"'):e===405&&(l="Method Not Allowed",a&&n&&r?i="You made a "+a.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":a&&(i='Invalid request method "'+a.toUpperCase()+'"')),new tf(e||500,l,new Error(i),!0)}function b1(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(Ur(n))return{result:n,idx:t}}}function qx(e){let t=typeof e=="string"?Kn(e):e;return qr(Fe({},t,{hash:""}))}function oD(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function Hr(e){return e.type===Ie.deferred}function Lo(e){return e.type===Ie.error}function Ur(e){return(e&&e.type)===Ie.redirect}function aD(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function sD(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function lD(e){return YR.has(e.toLowerCase())}function rn(e){return ZR.has(e.toLowerCase())}async function S1(e,t,n,r,a,s){for(let l=0;l<n.length;l++){let i=n[l],c=t[l];if(!c)continue;let d=e.find(p=>p.route.id===c.route.id),u=d!=null&&!Qx(d,c)&&(s&&s[c.route.id])!==void 0;if(Hr(i)&&(a||u)){let p=r[l];ie(p,"Expected an AbortSignal for revalidating fetcher deferred result"),await Jx(i,p,a).then(m=>{m&&(n[l]=m||n[l])})}}}async function Jx(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:Ie.data,data:e.deferredData.unwrappedData}}catch(a){return{type:Ie.error,error:a}}return{type:Ie.data,data:e.deferredData.data}}}function nf(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function iu(e,t){let n=typeof t=="string"?Kn(t).search:t.search;if(e[e.length-1].route.index&&nf(n||""))return e[e.length-1];let r=Zx(e);return r[r.length-1]}function w1(e){let{formMethod:t,formAction:n,formEncType:r,text:a,formData:s,json:l}=e;if(!(!t||!n||!r)){if(a!=null)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:void 0,text:a};if(s!=null)return{formMethod:t,formAction:n,formEncType:r,formData:s,json:void 0,text:void 0};if(l!==void 0)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:l,text:void 0}}}function Xc(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function iD(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function ja(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function cD(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function Jn(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function dD(e,t){try{let n=e.sessionStorage.getItem(Xx);if(n){let r=JSON.parse(n);for(let[a,s]of Object.entries(r||{}))s&&Array.isArray(s)&&t.set(a,new Set(s||[]))}}catch{}}function uD(e,t){if(t.size>0){let n={};for(let[r,a]of t)n[r]=[...a];try{e.sessionStorage.setItem(Xx,JSON.stringify(n))}catch(r){Qr(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vs(){return vs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},vs.apply(this,arguments)}const Is=v.createContext(null),rf=v.createContext(null),Nr=v.createContext(null),nc=v.createContext(null),Lr=v.createContext({outlet:null,matches:[],isDataRoute:!1}),e0=v.createContext(null);function pD(e,t){let{relative:n}=t===void 0?{}:t;zs()||ie(!1);let{basename:r,navigator:a}=v.useContext(Nr),{hash:s,pathname:l,search:i}=Fs(e,{relative:n}),c=l;return r!=="/"&&(c=l==="/"?r:Mn([r,l])),a.createHref({pathname:c,search:i,hash:s})}function zs(){return v.useContext(nc)!=null}function ra(){return zs()||ie(!1),v.useContext(nc).location}function t0(e){v.useContext(Nr).static||v.useLayoutEffect(e)}function fD(){let{isDataRoute:e}=v.useContext(Lr);return e?TD():hD()}function hD(){zs()||ie(!1);let e=v.useContext(Is),{basename:t,future:n,navigator:r}=v.useContext(Nr),{matches:a}=v.useContext(Lr),{pathname:s}=ra(),l=JSON.stringify(Jp(a,n.v7_relativeSplatPath)),i=v.useRef(!1);return t0(()=>{i.current=!0}),v.useCallback(function(d,u){if(u===void 0&&(u={}),!i.current)return;if(typeof d=="number"){r.go(d);return}let p=ef(d,JSON.parse(l),s,u.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:Mn([t,p.pathname])),(u.replace?r.replace:r.push)(p,u.state,u)},[t,r,l,s,e])}const mD=v.createContext(null);function gD(e){let t=v.useContext(Lr).outlet;return t&&v.createElement(mD.Provider,{value:e},t)}function Fs(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=v.useContext(Nr),{matches:a}=v.useContext(Lr),{pathname:s}=ra(),l=JSON.stringify(Jp(a,r.v7_relativeSplatPath));return v.useMemo(()=>ef(e,JSON.parse(l),s,n==="path"),[e,l,s,n])}function xD(e,t,n,r){zs()||ie(!1);let{navigator:a}=v.useContext(Nr),{matches:s}=v.useContext(Lr),l=s[s.length-1],i=l?l.params:{};l&&l.pathname;let c=l?l.pathnameBase:"/";l&&l.route;let d=ra(),u;if(t){var p;let _=typeof t=="string"?Kn(t):t;c==="/"||(p=_.pathname)!=null&&p.startsWith(c)||ie(!1),u=_}else u=d;let m=u.pathname||"/",y=c==="/"?m:m.slice(c.length)||"/",b=No(e,{pathname:y}),C=bD(b&&b.map(_=>Object.assign({},_,{params:Object.assign({},i,_.params),pathname:Mn([c,a.encodeLocation?a.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?c:Mn([c,a.encodeLocation?a.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),s,n,r);return t&&C?v.createElement(nc.Provider,{value:{location:vs({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:He.Pop}},C):C}function vD(){let e=kD(),t=Kx(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},t),n?v.createElement("pre",{style:a},n):null,s)}const yD=v.createElement(vD,null);class jD extends v.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?v.createElement(Lr.Provider,{value:this.props.routeContext},v.createElement(e0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function CD(e){let{routeContext:t,match:n,children:r}=e,a=v.useContext(Is);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),v.createElement(Lr.Provider,{value:t},r)}function bD(e,t,n,r){var a;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var s;if((s=n)!=null&&s.errors)e=n.matches;else return null}let l=e,i=(a=n)==null?void 0:a.errors;if(i!=null){let u=l.findIndex(p=>p.route.id&&(i==null?void 0:i[p.route.id]));u>=0||ie(!1),l=l.slice(0,Math.min(l.length,u+1))}let c=!1,d=-1;if(n&&r&&r.v7_partialHydration)for(let u=0;u<l.length;u++){let p=l[u];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(d=u),p.route.id){let{loaderData:m,errors:y}=n,b=p.route.loader&&m[p.route.id]===void 0&&(!y||y[p.route.id]===void 0);if(p.route.lazy||b){c=!0,d>=0?l=l.slice(0,d+1):l=[l[0]];break}}}return l.reduceRight((u,p,m)=>{let y,b=!1,C=null,_=null;n&&(y=i&&p.route.id?i[p.route.id]:void 0,C=p.route.errorElement||yD,c&&(d<0&&m===0?(ED("route-fallback",!1),b=!0,_=null):d===m&&(b=!0,_=p.route.hydrateFallbackElement||null)));let x=t.concat(l.slice(0,m+1)),f=()=>{let h;return y?h=C:b?h=_:p.route.Component?h=v.createElement(p.route.Component,null):p.route.element?h=p.route.element:h=u,v.createElement(CD,{match:p,routeContext:{outlet:u,matches:x,isDataRoute:n!=null},children:h})};return n&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?v.createElement(jD,{location:n.location,revalidation:n.revalidation,component:C,error:y,children:f(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):f()},null)}var n0=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(n0||{}),bi=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(bi||{});function SD(e){let t=v.useContext(Is);return t||ie(!1),t}function wD(e){let t=v.useContext(rf);return t||ie(!1),t}function _D(e){let t=v.useContext(Lr);return t||ie(!1),t}function r0(e){let t=_D(),n=t.matches[t.matches.length-1];return n.route.id||ie(!1),n.route.id}function kD(){var e;let t=v.useContext(e0),n=wD(bi.UseRouteError),r=r0(bi.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function TD(){let{router:e}=SD(n0.UseNavigateStable),t=r0(bi.UseNavigateStable),n=v.useRef(!1);return t0(()=>{n.current=!0}),v.useCallback(function(a,s){s===void 0&&(s={}),n.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,vs({fromRouteId:t},s)))},[e,t])}const _1={};function ED(e,t,n){!t&&!_1[e]&&(_1[e]=!0)}function ND(e){return gD(e.context)}function LD(e){let{basename:t="/",children:n=null,location:r,navigationType:a=He.Pop,navigator:s,static:l=!1,future:i}=e;zs()&&ie(!1);let c=t.replace(/^\/*/,"/"),d=v.useMemo(()=>({basename:c,navigator:s,static:l,future:vs({v7_relativeSplatPath:!1},i)}),[c,i,s,l]);typeof r=="string"&&(r=Kn(r));let{pathname:u="/",search:p="",hash:m="",state:y=null,key:b="default"}=r,C=v.useMemo(()=>{let _=yr(u,c);return _==null?null:{location:{pathname:_,search:p,hash:m,state:y,key:b},navigationType:a}},[c,u,p,m,y,b,a]);return C==null?null:v.createElement(Nr.Provider,{value:d},v.createElement(nc.Provider,{children:n,value:C}))}new Promise(()=>{});function RD(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:v.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(t,{hydrateFallbackElement:v.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:v.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Wo(){return Wo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Wo.apply(this,arguments)}function o0(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,s;for(s=0;s<r.length;s++)a=r[s],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function DD(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function OD(e,t){return e.button===0&&(!t||t==="_self")&&!DD(e)}const AD=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],MD=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"];function PD(e,t){return JR({basename:t==null?void 0:t.basename,future:Wo({},t==null?void 0:t.future,{v7_prependBasename:!0}),history:bR({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||$D(),routes:e,mapRouteProperties:RD,window:t==null?void 0:t.window}).initialize()}function $D(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=Wo({},t,{errors:BD(t.errors)})),t}function BD(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,a]of t)if(a&&a.__type==="RouteErrorResponse")n[r]=new tf(a.status,a.statusText,a.data,a.internal===!0);else if(a&&a.__type==="Error"){if(a.__subType){let s=window[a.__subType];if(typeof s=="function")try{let l=new s(a.message);l.stack="",n[r]=l}catch{}}if(n[r]==null){let s=new Error(a.message);s.stack="",n[r]=s}}else n[r]=a;return n}const a0=v.createContext({isTransitioning:!1}),ID=v.createContext(new Map),zD="startTransition",k1=q4[zD],FD="flushSync",T1=c8[FD];function HD(e){k1?k1(e):e()}function Ca(e){T1?T1(e):e()}class UD{constructor(){this.status="pending",this.promise=new Promise((t,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",t(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}}function VD(e){let{fallbackElement:t,router:n,future:r}=e,[a,s]=v.useState(n.state),[l,i]=v.useState(),[c,d]=v.useState({isTransitioning:!1}),[u,p]=v.useState(),[m,y]=v.useState(),[b,C]=v.useState(),_=v.useRef(new Map),{v7_startTransition:x}=r||{},f=v.useCallback(w=>{x?HD(w):w()},[x]),h=v.useCallback((w,T)=>{let{deletedFetchers:E,unstable_flushSync:D,unstable_viewTransitionOpts:P}=T;E.forEach(Q=>_.current.delete(Q)),w.fetchers.forEach((Q,G)=>{Q.data!==void 0&&_.current.set(G,Q.data)});let Y=n.window==null||typeof n.window.document.startViewTransition!="function";if(!P||Y){D?Ca(()=>s(w)):f(()=>s(w));return}if(D){Ca(()=>{m&&(u&&u.resolve(),m.skipTransition()),d({isTransitioning:!0,flushSync:!0,currentLocation:P.currentLocation,nextLocation:P.nextLocation})});let Q=n.window.document.startViewTransition(()=>{Ca(()=>s(w))});Q.finished.finally(()=>{Ca(()=>{p(void 0),y(void 0),i(void 0),d({isTransitioning:!1})})}),Ca(()=>y(Q));return}m?(u&&u.resolve(),m.skipTransition(),C({state:w,currentLocation:P.currentLocation,nextLocation:P.nextLocation})):(i(w),d({isTransitioning:!0,flushSync:!1,currentLocation:P.currentLocation,nextLocation:P.nextLocation}))},[n.window,m,u,_,f]);v.useLayoutEffect(()=>n.subscribe(h),[n,h]),v.useEffect(()=>{c.isTransitioning&&!c.flushSync&&p(new UD)},[c]),v.useEffect(()=>{if(u&&l&&n.window){let w=l,T=u.promise,E=n.window.document.startViewTransition(async()=>{f(()=>s(w)),await T});E.finished.finally(()=>{p(void 0),y(void 0),i(void 0),d({isTransitioning:!1})}),y(E)}},[f,l,u,n.window]),v.useEffect(()=>{u&&l&&a.location.key===l.location.key&&u.resolve()},[u,m,a.location,l]),v.useEffect(()=>{!c.isTransitioning&&b&&(i(b.state),d({isTransitioning:!0,flushSync:!1,currentLocation:b.currentLocation,nextLocation:b.nextLocation}),C(void 0))},[c.isTransitioning,b]),v.useEffect(()=>{},[]);let j=v.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:w=>n.navigate(w),push:(w,T,E)=>n.navigate(w,{state:T,preventScrollReset:E==null?void 0:E.preventScrollReset}),replace:(w,T,E)=>n.navigate(w,{replace:!0,state:T,preventScrollReset:E==null?void 0:E.preventScrollReset})}),[n]),S=n.basename||"/",g=v.useMemo(()=>({router:n,navigator:j,static:!1,basename:S}),[n,j,S]);return v.createElement(v.Fragment,null,v.createElement(Is.Provider,{value:g},v.createElement(rf.Provider,{value:a},v.createElement(ID.Provider,{value:_.current},v.createElement(a0.Provider,{value:c},v.createElement(LD,{basename:S,location:a.location,navigationType:a.historyAction,navigator:j,future:{v7_relativeSplatPath:n.future.v7_relativeSplatPath}},a.initialized||n.future.v7_partialHydration?v.createElement(WD,{routes:n.routes,future:n.future,state:a}):t))))),null)}function WD(e){let{routes:t,future:n,state:r}=e;return xD(t,void 0,r,n)}const ZD=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",KD=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,YD=v.forwardRef(function(t,n){let{onClick:r,relative:a,reloadDocument:s,replace:l,state:i,target:c,to:d,preventScrollReset:u,unstable_viewTransition:p}=t,m=o0(t,AD),{basename:y}=v.useContext(Nr),b,C=!1;if(typeof d=="string"&&KD.test(d)&&(b=d,ZD))try{let h=new URL(window.location.href),j=d.startsWith("//")?new URL(h.protocol+d):new URL(d),S=yr(j.pathname,y);j.origin===h.origin&&S!=null?d=S+j.search+j.hash:C=!0}catch{}let _=pD(d,{relative:a}),x=QD(d,{replace:l,state:i,target:c,preventScrollReset:u,relative:a,unstable_viewTransition:p});function f(h){r&&r(h),h.defaultPrevented||x(h)}return v.createElement("a",Wo({},m,{href:b||_,onClick:C||s?r:f,ref:n,target:c}))}),GD=v.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:a=!1,className:s="",end:l=!1,style:i,to:c,unstable_viewTransition:d,children:u}=t,p=o0(t,MD),m=Fs(c,{relative:p.relative}),y=ra(),b=v.useContext(rf),{navigator:C}=v.useContext(Nr),_=b!=null&&qD(m)&&d===!0,x=C.encodeLocation?C.encodeLocation(m).pathname:m.pathname,f=y.pathname,h=b&&b.navigation&&b.navigation.location?b.navigation.location.pathname:null;a||(f=f.toLowerCase(),h=h?h.toLowerCase():null,x=x.toLowerCase());const j=x!=="/"&&x.endsWith("/")?x.length-1:x.length;let S=f===x||!l&&f.startsWith(x)&&f.charAt(j)==="/",g=h!=null&&(h===x||!l&&h.startsWith(x)&&h.charAt(x.length)==="/"),w={isActive:S,isPending:g,isTransitioning:_},T=S?r:void 0,E;typeof s=="function"?E=s(w):E=[s,S?"active":null,g?"pending":null,_?"transitioning":null].filter(Boolean).join(" ");let D=typeof i=="function"?i(w):i;return v.createElement(YD,Wo({},p,{"aria-current":T,className:E,ref:n,style:D,to:c,unstable_viewTransition:d}),typeof u=="function"?u(w):u)});var cu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(cu||(cu={}));var E1;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(E1||(E1={}));function XD(e){let t=v.useContext(Is);return t||ie(!1),t}function QD(e,t){let{target:n,replace:r,state:a,preventScrollReset:s,relative:l,unstable_viewTransition:i}=t===void 0?{}:t,c=fD(),d=ra(),u=Fs(e,{relative:l});return v.useCallback(p=>{if(OD(p,n)){p.preventDefault();let m=r!==void 0?r:qr(d)===qr(u);c(e,{replace:m,state:a,preventScrollReset:s,relative:l,unstable_viewTransition:i})}},[d,c,u,r,a,n,e,s,l,i])}function qD(e,t){t===void 0&&(t={});let n=v.useContext(a0);n==null&&ie(!1);let{basename:r}=XD(cu.useViewTransitionState),a=Fs(e,{relative:t.relative});if(!n.isTransitioning)return!1;let s=yr(n.currentLocation.pathname,r)||n.currentLocation.pathname,l=yr(n.nextLocation.pathname,r)||n.nextLocation.pathname;return au(a.pathname,l)!=null||au(a.pathname,s)!=null}const Hs=({to:e,className:t="",exact:n,onClick:r,label:a,style:s,...l})=>o.jsx(GD,{to:e,onClick:r,end:n&&"end",className:({isActive:i})=>`${t} ${i?"active":""}`,"aria-label":a,style:s,children:o.jsx(Ls,{...l})}),s0=()=>o.jsx(R,{code:"pager",Component:jR,Source:CR,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"pager"})," property can be used to pass configuration options to the ",o.jsx(Hs,{to:"/components/Pager",text:"Pager"})," component displayed underneath the datatable."]})}),JD=Object.freeze(Object.defineProperty({__proto__:null,default:s0},Symbol.toStringTag,{value:"Module"})),eO=`export const animals = [
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
`,l0=()=>o.jsxs(U,{code:"rows",children:[o.jsxs("div",{className:"cols-2 stack-desktop mar-b-4",children:[o.jsxs("p",{children:["The ",o.jsx("code",{children:"rows"})," property is used to provide the data that you want to display.  It should be an array of objects.  The object can contain any data."]}),o.jsxs("p",{children:["In these examples we're using this data for the ",o.jsx("code",{children:"rows"}),"."]})]}),o.jsx("div",{className:"example",children:o.jsx("div",{className:"source",children:o.jsx(Rn,{code:eO,language:"js"})})})]}),tO=Object.freeze(Object.defineProperty({__proto__:null,default:l0},Symbol.toStringTag,{value:"Module"})),nO=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Datatable"}),o.jsx(Bx,{}),o.jsxs(at,{tocName:"datatable",children:[o.jsx(ce,{title:"Properties"}),o.jsx(l0,{}),o.jsx(Fx,{}),o.jsx(Ix,{}),o.jsx(s0,{}),o.jsx(ce,{title:"Column Properties"}),o.jsx(Ux,{}),o.jsx(zx,{}),o.jsx(Hx,{})]})]}),rO=Object.freeze(Object.defineProperty({__proto__:null,default:nO},Symbol.toStringTag,{value:"Module"})),oO=()=>o.jsx(Xe,{summary:"Click to reveal",children:"This is the content that is revealed."}),aO=`import { Details } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Details } from '@abw/badger-react-ui

const DetailsExample = () =>
  <Details summary="Click to reveal">
    This is the content that is revealed.
  </Details>

export default DetailsExample`,i0=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"Details"})," component displays a summary with revealable content using the native HTML ",o.jsx("code",{children:"details"})," element."]}),o.jsx(pe,{Component:oO,code:aO})]}),sO=Object.freeze(Object.defineProperty({__proto__:null,default:i0},Symbol.toStringTag,{value:"Module"})),lO=()=>o.jsxs("div",{className:"grid-1 gap-4",children:[o.jsx(Xe,{summary:"Bordered",border:!0,children:"This is the content that is revealed."}),o.jsx(Xe,{summary:"Bordered and Lined",border:!0,lined:!0,children:"This is the content that is revealed."}),o.jsx(Xe,{summary:"Wide Border",border:3,lined:!0,children:"This is the content that is revealed."})]}),iO=`import React from 'react'
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

export default DetailsExample`,c0=()=>o.jsx(R,{code:"border",Component:lO,Source:iO,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"border"})," property can be used to add a CSS class to add a border around the component.  By itself it will add a one pixel border.  You can also set it to an integer (in pixels) for a wider border.  The same border width will also be applied to the line separating the summary and content when the ",o.jsx("code",{children:"lined"})," ","property is used."]})}),cO=Object.freeze(Object.defineProperty({__proto__:null,default:c0},Symbol.toStringTag,{value:"Module"})),dO=()=>o.jsxs("div",{className:"grid-1 gap-4",children:[o.jsx(Xe,{summary:"Blue Border",color:"blue",border:!0,lined:!0,children:"This is the content that is revealed."}),o.jsx(Xe,{summary:"Blue Shaded",color:"blue",shaded:!0,lined:!0,border:!0,children:"This is the content that is revealed."})]}),uO=`import React from 'react'
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

export default DetailsExample`,d0=()=>o.jsx(R,{code:"color",Component:dO,Source:uO,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"color"})," property can be used to set the color range. It is most commonly used in conjunction with the ",o.jsx("code",{children:"border"}),","," ",o.jsx("code",{children:"lined"})," and ",o.jsx("code",{children:"shaded"})," properties."]})}),pO=Object.freeze(Object.defineProperty({__proto__:null,default:d0},Symbol.toStringTag,{value:"Module"})),fO=()=>o.jsx("div",{className:"grid-1 gap-4",children:o.jsx(Xe,{summary:"This is the summary",content:"This is the content that is revealed."})}),hO=`import React from 'react'
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

export default DetailsExample`,u0=()=>o.jsx(R,{code:"content",Component:fO,Source:hO,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"content"})," property can be used as a short-cut to set the body content for simple cases."]})}),mO=Object.freeze(Object.defineProperty({__proto__:null,default:u0},Symbol.toStringTag,{value:"Module"})),gO=()=>o.jsx(Xe,{summary:"Lined Details",lined:!0,children:"This is the content that is revealed."}),xO=`import React from 'react'
import { Details } from '@/src/index.jsx'

const DetailsExample = () =>
  /* START */
  <Details summary="Lined Details" lined>
    This is the content that is revealed.
  </Details>
  /* END */

export default DetailsExample`,p0=()=>o.jsx(R,{code:"lined",Component:gO,Source:xO,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"lined"})," property can be used to add a CSS class to add a line between the summary and content."]})}),vO=Object.freeze(Object.defineProperty({__proto__:null,default:p0},Symbol.toStringTag,{value:"Module"})),yO=()=>o.jsx("div",{className:"grid-1 gap-4",children:o.jsx(Xe,{summary:"This is the summary",open:!0,children:"This is the content that is revealed."})}),jO=`import React from 'react'
import { Details } from '@/src/index.jsx'

const DetailsExample = () =>
  <div className="grid-1 gap-4">
    {/* START */}
    <Details summary="This is the summary" open>
      This is the content that is revealed.
    </Details>
    {/* END */}
  </div>

export default DetailsExample`,f0=()=>o.jsx(R,{code:"open",Component:yO,Source:jO,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"open"})," property can be set to make the details initially open."]})}),CO=Object.freeze(Object.defineProperty({__proto__:null,default:f0},Symbol.toStringTag,{value:"Module"})),bO=()=>o.jsxs("div",{className:"grid-1 gap-4",children:[o.jsx(Xe,{summary:"Border Radius",border:!0,lined:!0,radius:2,children:"This is the content that is revealed."}),o.jsx(Xe,{summary:"Border Radius",border:!0,lined:!0,radius:4,children:"This is the content that is revealed."})]}),SO=`import React from 'react'
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

export default DetailsExample`,h0=()=>o.jsx(R,{code:"radius",Component:bO,Source:SO,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"radius"})," property can be used to set the border radius. It should be an integer in units of 0.25rem."]})}),wO=Object.freeze(Object.defineProperty({__proto__:null,default:h0},Symbol.toStringTag,{value:"Module"})),_O=()=>o.jsxs("div",{className:"grid-1 gap-4",children:[o.jsx(Xe,{summary:"Shaded",shaded:!0,children:"This is the content that is revealed."}),o.jsx(Xe,{summary:"Shaded and Border",border:!0,shaded:!0,children:"This is the content that is revealed."}),o.jsx(Xe,{summary:"Shaded, Lined and Border",border:!0,shaded:!0,lined:!0,children:"This is the content that is revealed."})]}),kO=`import React from 'react'
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

export default DetailsExample`,m0=()=>o.jsx(R,{code:"shaded",Component:_O,Source:kO,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"shaded"})," property can be used to add shading."]})}),TO=Object.freeze(Object.defineProperty({__proto__:null,default:m0},Symbol.toStringTag,{value:"Module"})),EO=()=>o.jsxs("div",{className:"grid-1 gap-4",children:[o.jsx(Xe,{summary:"Shadow 1",border:!0,shaded:!0,shadow:1,children:"This is the content that is revealed."}),o.jsx(Xe,{summary:"Shadow 3",border:!0,shaded:!0,shadow:3,children:"This is the content that is revealed."}),o.jsx(Xe,{summary:"Shadow 5",border:!0,shaded:!0,shadow:5,children:"This is the content that is revealed."})]}),NO=`import React from 'react'
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

export default DetailsExample`,g0=()=>o.jsx(R,{code:"shadow",Component:EO,Source:NO,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"shadow"})," property can be used to add a drop shadow. This can be any integer from 1 to 5."]})}),LO=Object.freeze(Object.defineProperty({__proto__:null,default:g0},Symbol.toStringTag,{value:"Module"})),RO=()=>o.jsxs("div",{className:"grid-1 gap-4",children:[o.jsx(Xe,{summary:"This is the summary",children:"This is the content that is revealed."}),o.jsx(Xe,{border:!0,lined:!0,summary:o.jsxs("div",{className:"wide flex space middle pad-r-2",children:[o.jsx("div",{children:"Control Panel"}),o.jsx(J,{name:"cog"})]}),children:"This is the content that is revealed."})]}),DO=`import React from 'react'
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

export default DetailsExample`,x0=()=>o.jsx(R,{code:"summary",Component:RO,Source:DO,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"summary"})," property is used to set the summary text. It can be a text string or any JSX content."]})}),OO=Object.freeze(Object.defineProperty({__proto__:null,default:x0},Symbol.toStringTag,{value:"Module"})),AO=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Details"}),o.jsx(i0,{}),o.jsxs(at,{tocName:"details",children:[o.jsx(ce,{title:"Properties"}),o.jsx(x0,{}),o.jsx(u0,{}),o.jsx(f0,{}),o.jsx(p0,{}),o.jsx(c0,{}),o.jsx(h0,{}),o.jsx(m0,{}),o.jsx(g0,{}),o.jsx(d0,{}),o.jsx(ce,{title:"CSS Classes"}),o.jsxs(U,{code:"className",children:["Set a CSS class for the ",o.jsx("code",{children:"details"})," container element."]}),o.jsxs(U,{code:"summaryClass",children:["Set a CSS class for the ",o.jsx("code",{children:"summary"})," element."]}),o.jsxs(U,{code:"contentClass",children:["Set a CSS class for the content ",o.jsx("code",{children:"div"})," element."]}),o.jsx(ce,{title:"Components"}),o.jsx(U,{code:"Summary",id:"Summary-component",children:"Renders the summary element."}),o.jsx(U,{code:"Content",id:"Content=component",children:"Renders the content."})]})]}),MO=Object.freeze(Object.defineProperty({__proto__:null,default:AO},Symbol.toStringTag,{value:"Module"})),PO=()=>o.jsx(kr,{text:"Dropdown Menu",iconRight:"angle-down",options:["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger","Colin Camel","David Donkey","Eddie Elephant","Franky Ferret","Gina Goat","Helen Horse","Ian Iguana","Juliet Jackdaw","Kevin Kangaroo","Linda Llama","Mike Monkey"]}),$O=`import { DropdownMenu } from '@/src/index.jsx'

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

export default DropdownExample`,v0=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"DropdownMenu"})," component generates a dropdown menu.  It extends the behaviour of the"," ",o.jsx(Hs,{to:"/components/dropdown",children:"Dropdown"})," component."]}),o.jsxs("div",{className:"cols-2 stack-desktop",children:[o.jsx("p",{children:"The default behaviour is to open the dropdown menu when the user clicks on the trigger."}),o.jsxs("p",{children:["Keyboard navigation is also supported.  The user can ",o.jsx("code",{children:"TAB"})," ","to the trigger and then press ",o.jsx("code",{children:"SPACE"}),", ",o.jsx("code",{children:"ENTER"}),","," ",o.jsx("code",{children:"DOWN"})," or ",o.jsx("code",{children:"UP"})," to open the menu."]}),o.jsxs("p",{children:["Once the menu is open, the ",o.jsx("code",{children:"DOWN"})," and ",o.jsx("code",{children:"UP"})," keys"," ","can be used to select menu items, ",o.jsx("code",{children:"ENTER"})," or"," ",o.jsx("code",{children:"SPACE"})," will select the current item and ",o.jsx("code",{children:"ESCAPE"})," ","will close the menu."]})]}),o.jsx(pe,{Component:PO,code:$O})]}),BO=Object.freeze(Object.defineProperty({__proto__:null,default:v0},Symbol.toStringTag,{value:"Module"})),IO=()=>o.jsx(kr,{text:"Dropdown Menu",iconRight:"angle-down",onSelect:e=>alert(`You selected: ${e.text}`),options:[{text:"Item One"},{text:"Item Two"},{text:"Item Three"}]}),zO=`import React from 'react'
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

export default DropdownMenuExample`,y0=()=>o.jsx(R,{code:"onSelect",Component:IO,Source:zO,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"onSelect"})," property should be used to define a handler which will be called when an item is selected, either by being clicked on or by keyboard selection.  The handler will be passed the data for the item that was selected."]})}),FO=Object.freeze(Object.defineProperty({__proto__:null,default:y0},Symbol.toStringTag,{value:"Module"})),HO=()=>o.jsx(kr,{text:"Simple Options",iconRight:"angle-down",options:["Hello","World",10,11]}),UO=`import React from 'react'
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

export default DropdownExample`,VO=()=>o.jsx(kr,{text:"Option Separators",iconRight:"angle-down",options:["One","Two","Three",{separator:!0},"Eleven","Twelve","Thirteen",{separator:!0},"One Hundred","Two Hundred","Three Hundred"]}),WO=`import React from 'react'
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

export default DropdownExample`,ZO=()=>o.jsx(kr,{text:"Object Options",iconRight:"angle-down",options:[{text:"Star",iconLeft:"star"},{text:"Heart",iconRight:"heart",className:"text-right"},{text:"Move",iconLeft:"angle-left",iconRight:"angle-right"},{text:o.jsxs("div",{className:"flex space small",children:[o.jsx("div",{children:"Foo"}),o.jsx("div",{children:"Bar"})]})}]}),KO=`import React from 'react'
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

export default DropdownExample`,YO=()=>o.jsx(kr,{text:"Option Headings",iconRight:"angle-down",options:[{heading:"Single Digit Numbers"},"One","Two","Three",{heading:"Double Digit Numbers"},"Eleven","Twelve","Thirteen",{heading:"Triple Digit Numbers"},"One Hundred","Two Hundred","Three Hundred"]}),GO=`import React from 'react'
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

export default DropdownExample`,XO=()=>o.jsx(kr,{text:"Disabled Options",iconRight:"angle-down",options:[{text:"Disabled #1",disabled:!0},{text:"Enabled #2"},{text:"Disabled #3",disabled:!0},{text:"Enabled #4"},{text:"Disabled #5",disabled:!0}]}),QO=`import React from 'react'
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

export default DropdownExample`,j0=()=>o.jsxs(U,{code:"options",children:[o.jsxs("div",{className:"cols-2 stack-desktop mar-b-4",children:[o.jsxs("p",{children:["The ",o.jsx("code",{children:"options"})," property should be used to define an array of options to display in the menu."]}),o.jsx("p",{children:"For simple cases, each element in the array can be a text string or numerical value."})]}),o.jsx(pe,{Component:HO,code:UO,caption:"options",expand:!1,undent:2}),o.jsxs("div",{className:"cols-2 stack-desktop mar-b-4",children:[o.jsxs("p",{children:["An element in the ",o.jsx("code",{children:"options"})," array can also be an object. It should contain a ",o.jsx("code",{children:"text"})," property which can be a string or JSX fragment. A ",o.jsx("code",{children:"className"})," can be included to add a CSS class to the option."]}),o.jsxs("p",{children:["The content for an element is rendered using the ",o.jsx("code",{children:"WithIcon"})," ","component from"," ",o.jsx("a",{href:"https://abw.github.io/badger-icon/",children:"Badger Icon"})," allowing you to include ",o.jsx("code",{children:"iconLeft"})," and ",o.jsx("code",{children:"iconRight"})," properties to add icons to either side, along with ",o.jsx("code",{children:"iconLeftClass"})," and"," ",o.jsx("code",{children:"iconRightClass"})," to set CSS classes for those icons."]})]}),o.jsx(pe,{Component:ZO,code:KO,caption:"options",expand:!1,undent:2}),o.jsx("div",{className:"cols-2 stack-desktop mar-b-4",children:o.jsxs("p",{children:["An object in the ",o.jsx("code",{children:"options"})," array can have a"," ",o.jsx("code",{children:"disabled"})," property set to ",o.jsx("code",{children:"true"})," to disable the option."]})}),o.jsx(pe,{Component:XO,code:QO,caption:"options",expand:!1,undent:2}),o.jsx("div",{className:"cols-2 stack-desktop mar-b-4",children:o.jsxs("p",{children:["An object in the ",o.jsx("code",{children:"options"})," array can have a"," ",o.jsx("code",{children:"separator"})," property set to ",o.jsx("code",{children:"true"})," to create a separator."]})}),o.jsx(pe,{Component:VO,code:WO,caption:"options",expand:!1,undent:2}),o.jsx("div",{className:"cols-2 stack-desktop mar-b-4",children:o.jsxs("p",{children:["An object in the ",o.jsx("code",{children:"options"})," array can have a"," ",o.jsx("code",{children:"heading"})," property to create a section heading."]})}),o.jsx(pe,{Component:YO,code:GO,caption:"options",expand:!1,undent:2})]}),qO=Object.freeze(Object.defineProperty({__proto__:null,default:j0},Symbol.toStringTag,{value:"Module"})),Jr=({children:e,align:t="top"})=>o.jsx("div",{className:`grid-2 gap-h-8 stack-desktop ${t}`,style:{"--prose-width":"100%"},children:e}),JO=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Dropdown Menu"}),o.jsx(v0,{}),o.jsxs(at,{tocName:"dropdown",children:[o.jsx(ce,{title:"Properties"}),o.jsxs("p",{className:"large",children:["All the properties supported by the"," ",o.jsx(Hs,{to:"/components/dropdown",children:"Dropdown"})," component are supported.  These are the additional properties specific to the ",o.jsx("code",{children:"DropdownMenu"}),"."]}),o.jsx(j0,{}),o.jsx(y0,{}),o.jsxs(Jr,{children:[o.jsxs("div",{className:"flow",children:[o.jsx(ce,{title:"CSS Classes"}),o.jsxs(U,{code:"optionClass",children:["Used to set the CSS class added to each dropdown menu item. The default value is ",o.jsx("code",{children:"item no-hover"}),".  The"," ",o.jsx("code",{children:"no-hover"})," class suppresses the hover styles that would usually be applied to menu items.  Instead the"," ",o.jsx("code",{children:"active"})," class is added to the active item, selected either by hovering over it or by keyboard navigation."]}),o.jsxs(U,{code:"separatorClass",children:["Used to set the CSS class added to the dropdown menu separator. The default value is ",o.jsx("code",{children:"separator"}),"."]})]}),o.jsxs("div",{className:"flow",children:[o.jsx(ce,{title:"Components"}),o.jsxs(U,{code:"Options",id:"Options-component",children:["Renders the dropdown menu options.  Defaults to ",o.jsx("code",{children:"DropdownMenuOptions"}),"."]}),o.jsxs(U,{code:"Option",id:"Option-component",children:["Renders each dropdown menu option.  Defaults to ",o.jsx("code",{children:"DropdownMenuOption"}),"."]}),o.jsxs(U,{code:"Separator",id:"Separator-component",children:["Renders a separator between menu items.  Defaults to ",o.jsx("code",{children:"DropdownMenuSeparator"}),"."]})]})]})]})]}),eA=Object.freeze(Object.defineProperty({__proto__:null,default:JO},Symbol.toStringTag,{value:"Module"})),tA=()=>o.jsx(dn,{text:"Dropdown",children:"Hello World!"}),nA=`import { Dropdown } from '@/src/index.jsx'

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

export default DropdownExample`,C0=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"Dropdown"})," component can be used to display content that is visible when the user clicks on the trigger."]}),o.jsx("div",{className:"cols-2 stack-desktop",children:o.jsx("p",{children:"The default behaviour is to open the dropdown when the user clicks on the trigger."})}),o.jsx(pe,{Component:tA,code:nA})]}),rA=Object.freeze(Object.defineProperty({__proto__:null,default:C0},Symbol.toStringTag,{value:"Module"})),oA=()=>o.jsx(dn,{text:"Dropdown Content",content:"Hello World!"}),aA=`import React from 'react'
import { Dropdown } from '@/src/index.jsx'

const DropdownExample = () =>
  /* START */
  <Dropdown
    text='Dropdown Content'
    content='Hello World!'
  />
  /* END */

export default DropdownExample`,b0=()=>o.jsx(R,{code:"content",Component:oA,Source:aA,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"content"})," property can be used to define the content as a short-cut.  Otherwise any child content of the"," ",o.jsx("code",{children:"Dropdown"})," component will be displayed."]})}),sA=Object.freeze(Object.defineProperty({__proto__:null,default:b0},Symbol.toStringTag,{value:"Module"})),lA=()=>o.jsx(dn,{text:"Dropdown iconLeft",iconLeft:"angle-down",content:"Hello World!"}),iA=`import React from 'react'
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

export default DropdownExample`,S0=()=>o.jsx(R,{code:"iconLeft",Component:lA,Source:iA,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"iconLeft"})," property can used to define an icon for the left side of the trigger.  The ",o.jsx("code",{children:"iconLeftClass"})," can be used to add a CSS class for it."]})}),cA=Object.freeze(Object.defineProperty({__proto__:null,default:S0},Symbol.toStringTag,{value:"Module"})),dA=()=>o.jsx(dn,{text:"Dropdown iconLeftRotate",iconLeft:"angle-right",iconLeftRotate:90,content:"Hello World!"}),uA=`import React from 'react'
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

export default DropdownMenuExample`,w0=()=>o.jsx(R,{code:"iconLeftRotate",Component:dA,Source:uA,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"iconLeftRotate"})," property can used to specify the rotation (in degrees) of the icon when the dropdown is open."]})}),pA=Object.freeze(Object.defineProperty({__proto__:null,default:w0},Symbol.toStringTag,{value:"Module"})),fA=()=>o.jsx(dn,{text:"Dropdown iconRight",iconRight:"angle-down",content:"Hello World!"}),hA=`import React from 'react'
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

export default DropdownExample`,_0=()=>o.jsx(R,{code:"iconRight",Component:fA,Source:hA,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"iconRight"})," property can used to define an icon for the left side of the trigger.  The ",o.jsx("code",{children:"iconRightClass"})," can be used to add a CSS class for it."]})}),mA=Object.freeze(Object.defineProperty({__proto__:null,default:_0},Symbol.toStringTag,{value:"Module"})),gA=()=>o.jsx(dn,{text:"Dropdown iconRightRotate",iconRight:"angle-left",iconRightRotate:-90,content:"Hello World!"}),xA=`import React from 'react'
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

export default DropdownExample`,k0=()=>o.jsx(R,{code:"iconRightRotate",Component:gA,Source:xA,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"iconRightRotate"})," property can used to specify the rotation (in degrees) of the icon when the dropdown is open."]})}),vA=Object.freeze(Object.defineProperty({__proto__:null,default:k0},Symbol.toStringTag,{value:"Module"})),yA=()=>o.jsx(dn,{openOnHover:!0,text:"Dropdown openOnHover",content:"Hello World!"}),jA=`import React from 'react'
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

export default DropdownExample`,T0=()=>o.jsx(R,{code:"openOnHover",Component:yA,Source:jA,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"openOnHover"})," property can added to make the menu open when the mouse hovers over the trigger."]})}),CA=Object.freeze(Object.defineProperty({__proto__:null,default:T0},Symbol.toStringTag,{value:"Module"})),bA=()=>o.jsx(dn,{right:!0,text:"Dropdown Right",content:"Hello World!"}),SA=`import React from 'react'
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

export default DropdownExample`,E0=()=>o.jsx(R,{code:"right",Component:bA,Source:SA,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"right"})," property can added to align the dropdown menu to the right edge of the trigger"]})}),wA=Object.freeze(Object.defineProperty({__proto__:null,default:E0},Symbol.toStringTag,{value:"Module"})),_A=()=>o.jsx(dn,{text:"Dropdown Trigger Text",children:"Hello World!"}),kA=`import React from 'react'
import { Dropdown } from '@/src/index.jsx'

const DropdownExample = () =>
  /* START */
  <Dropdown
    text='Dropdown Trigger Text'
  >
    Hello World!
  </Dropdown>
  /* END */

export default DropdownExample`,N0=()=>o.jsx(R,{code:"text",Component:_A,Source:kA,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"text"})," property should be used to define the text for the trigger."]})}),TA=Object.freeze(Object.defineProperty({__proto__:null,default:N0},Symbol.toStringTag,{value:"Module"})),EA=()=>o.jsx(dn,{wide:!0,text:"Dropdown Wide",content:"Hello World!"}),NA=`import React from 'react'
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

export default DropdownExample`,L0=()=>o.jsx(R,{code:"wide",Component:EA,Source:NA,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"wide"})," property can added to make the menu expand to the full width of the container."]})}),LA=Object.freeze(Object.defineProperty({__proto__:null,default:L0},Symbol.toStringTag,{value:"Module"})),RA=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Dropdown"}),o.jsx(C0,{}),o.jsxs(at,{tocName:"dropdown",children:[o.jsx(ce,{title:"Properties"}),o.jsx(N0,{}),o.jsx(b0,{}),o.jsx(T0,{}),o.jsx(E0,{}),o.jsx(L0,{}),o.jsx(S0,{}),o.jsx(w0,{}),o.jsx(_0,{}),o.jsx(k0,{}),o.jsxs(Jr,{children:[o.jsxs("div",{className:"flow",children:[o.jsx(ce,{title:"CSS Classes"}),o.jsxs(U,{code:"className",children:["Used to set the CSS class for the dropdown container.  The default value is ",o.jsx("code",{children:"dropdown"}),"."]}),o.jsxs(U,{code:"openClass",children:["Used to set the CSS class added to the dropdown container when the menu is open.  The default value is ",o.jsx("code",{children:"open"}),"."]}),o.jsxs(U,{code:"closedClass",children:["Used to set the CSS class added to the dropdown container when the menu is closed.  The default value is ",o.jsx("code",{children:"closed"}),"."]}),o.jsxs(U,{code:"triggerClass",children:["Used to set the CSS class added to the dropdown trigger. The default value is ",o.jsx("code",{children:"trigger"}),"."]}),o.jsxs(U,{code:"menuClass",children:[o.jsx("b",{children:"TODO: update this!"}),"Used to set the CSS class added to the dropdown menu container. The default value is ",o.jsx("code",{children:"menu border bdr-1"}),".  The"," ",o.jsx("code",{children:"border"})," utility class adds a border and"," ",o.jsx("code",{children:"bdr-1"})," sets the border radius to 1 unit (0.25rem or 4px)."]})]}),o.jsxs("div",{className:"flow",children:[o.jsx(ce,{title:"Components"}),o.jsxs(U,{code:"Trigger",id:"Trigger-component",children:["Renders the dropdown menu trigger.  Defaults to ",o.jsx("code",{children:"DropdownTrigger"}),"."]}),o.jsxs(U,{code:"Body",id:"Body-component",children:["Renders the dropdown body.  Defaults to ",o.jsx("code",{children:"DropdownBody"}),"."]})]})]})]})]}),DA=Object.freeze(Object.defineProperty({__proto__:null,default:RA},Symbol.toStringTag,{value:"Module"})),OA=()=>o.jsx(J,{name:"check"}),AA=`import React from 'react'
import { Icon } from '@/src/index.jsx'

{/* START */}
// PRETEND: import { Icon } from '@abw/badger-react-ui'

const IconExample = () =>
  <Icon name="check"/>

export default IconExample
`,MA=pj(0,100,5),Sl=({name:e,stop:t,setStop:n,disabled:r=!1})=>o.jsxs("select",{name:e,required:!0,value:t,onChange:a=>n(a.target.value),disabled:r,children:[o.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Select Stop"}),o.jsx("option",{value:"",children:"None"}),MA.map(a=>o.jsx("option",{value:a,children:a},a))]}),PA=()=>{const[e,t]=v.useState(0),[n,r]=v.useState({name:"bars"}),a=c=>()=>{r(d=>({...d,[c]:!d[c]})),t(d=>d+1)},s=c=>d=>{r(u=>({...u,[c]:d})),t(u=>u+1)},i=`<Icon
  ${BA(n)}
/>`;return o.jsxs("div",{className:"example grid-2 gap-8 stack-desktop",children:[o.jsxs("div",{children:[o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Output"}),o.jsx("div",{className:"output mar-b-8",children:o.jsx(IA,{options:n},e)})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Markup"}),o.jsx(Rn,{code:i,language:"html",expand:!0})]})]}),o.jsx($A,{options:n,setOption:s,toggleOption:a})]})},$A=({options:e,setOption:t})=>{const n=t("name"),r=t("size"),a=t("color"),s=t("foreground"),l=t("background"),i=t("foregroundDark"),c=t("backgroundDark");return o.jsxs("div",{children:[o.jsxs("div",{className:"grid-3 gap-4 stack-mobile top",children:[o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Icon Name"}),o.jsx(ru,{icon:e.name,setIcon:n})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Size"}),o.jsx(bg,{size:e.size,setSize:r})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Color"}),o.jsx(Cg,{color:e.color,setColor:a,disabled:e.type})]})]}),o.jsxs("div",{className:"grid-2 gap-4 gap-v-0 stack-mobile top",children:[o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Foreground Stop"}),o.jsx(Sl,{stop:e.foreground,setStop:s})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Background Stop"}),o.jsx(Sl,{stop:e.background,setStop:l})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Foreground Dark"}),o.jsx(Sl,{stop:e.foregroundDark,setStop:i})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Background Dark"}),o.jsx(Sl,{stop:e.backgroundDark,setStop:c})]})]})]})},R0=e=>{const t=["name","size"].filter(r=>e[r]).reduce((r,a)=>(r[a]=e[a],r),{}),n=["color","foreground","background","foregroundDark","backgroundDark"].map(r=>e[r]||"").join("-");return n.length>4&&(t.color=n.replace(/-*$/,"")),t},BA=e=>{const t=R0(e);return Object.entries(t).map(([n,r])=>`${n}="${r}"`).join(`
  `)},IA=({options:e})=>o.jsx(J,{...R0(e)}),D0=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"Icon"})," component can be used to render SVG icons. The functionality is imported from"," ",o.jsx("a",{href:"https://abw.github.io/badger-icon/",children:"Badger Icon"})," with some extra bells and whistles."]}),o.jsx(pe,{Component:OA,code:AA,expand:!0}),o.jsx("h2",{children:"Demo"}),o.jsx(PA,{})]}),zA=Object.freeze(Object.defineProperty({__proto__:null,default:D0},Symbol.toStringTag,{value:"Module"})),O0=()=>o.jsxs(U,{code:"IconLibrary",children:[o.jsxs("p",{children:["The default set of icons is defined as ",o.jsx("code",{children:"IconLibrary"}),". The ",o.jsx("code",{children:"addIcon()"})," and ",o.jsx("code",{children:"addIcons()"})," function are provided for adding icons to the library."]}),o.jsx("div",{className:"grid-fill gap-4 mar-t-8",children:Object.keys(ks.icons).map(e=>o.jsxs("div",{className:"text-center bgc-100 bgd-0 fgc-10 fgd-90 pad-4 shadow-2",children:[o.jsx(J,{name:e,className:"x3"}),o.jsx("div",{className:"small mar-t-4",children:e})]},e))})]}),FA=Object.freeze(Object.defineProperty({__proto__:null,default:O0},Symbol.toStringTag,{value:"Module"})),HA=()=>o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"flex gap-2 middle",children:[o.jsx(J,{name:"check",className:"smallest"}),o.jsx(J,{name:"check",className:"smaller"}),o.jsx(J,{name:"check",className:"small"}),o.jsx(J,{name:"check"}),o.jsx(J,{name:"check",className:"large"}),o.jsx(J,{name:"check",className:"larger"}),o.jsx(J,{name:"check",className:"largest"})]}),o.jsxs("div",{className:"flex gap-2 mar-t-4",children:[o.jsx(J,{name:"check",className:"larger green fgc-50"}),o.jsx(J,{name:"cross",className:"larger red fgc-50"})]})]}),UA=`import React from 'react'
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

export default Component`,A0=()=>o.jsx(R,{code:"className",Component:HA,Source:UA,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"className"})," property can be used to set a CSS class."]})}),VA=Object.freeze(Object.defineProperty({__proto__:null,default:A0},Symbol.toStringTag,{value:"Module"})),WA=()=>o.jsxs("div",{className:"flex gap-2 x2",children:[o.jsx(J,{name:"check",color:"green-50"}),o.jsx(J,{name:"check",color:"green-70-30"}),o.jsx(J,{name:"check",color:"green-70--30"}),o.jsx(J,{name:"check",color:"green-70-30-30-70"})]}),ZA=`import React from 'react'
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

export default Component`,M0=()=>o.jsxs(R,{code:"color",Component:WA,Source:ZA,undent:2,expand:!0,children:[o.jsxs("p",{children:["The ",o.jsx("code",{children:"color"})," property is a short-cut to set the color.  This adds the color to the CSS class."]}),o.jsxs("p",{children:["The ",o.jsx("code",{children:"color"})," can be be comprised of up to 5 elements separated by hyphens.  The first is the color range, e.g. ",o.jsx("code",{children:"red"}),","," ",o.jsx("code",{children:"green"}),", ",o.jsx("code",{children:"blue"}),", etc.  The second is the stop number for the foreground.  This is an integer from 0 (darkest) to 100 (lightest) in steps of 5.  The third is the stop number for the background.  The remaining two numbers are stops for the foreground and background colors in dark mode."]})]}),KA=Object.freeze(Object.defineProperty({__proto__:null,default:M0},Symbol.toStringTag,{value:"Module"})),YA=()=>o.jsxs("div",{className:"flex gap-2 x2",children:[o.jsx(J,{name:"bars"}),o.jsx(J,{name:"check"}),o.jsx(J,{name:"cross"}),o.jsx(J,{name:"arrow"}),o.jsx(J,{name:"arrow-right"}),o.jsx(J,{name:"arrow-down-thicker.red.fgc-50"})]}),GA=`import React from 'react'
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

export default Component`,P0=()=>o.jsxs(R,{code:"name",Component:YA,Source:GA,undent:2,expand:!0,children:[o.jsxs("p",{children:["The ",o.jsx("code",{children:"name"})," property can be used to select an icon from the default icon library."]}),o.jsx("p",{children:"Additional modifiers and classes can be added to the name to apply styles and transformations.  See the Badger Icon documentation for further details."})]}),XA=Object.freeze(Object.defineProperty({__proto__:null,default:P0},Symbol.toStringTag,{value:"Module"})),QA=()=>o.jsxs("div",{className:"flex gap-2",children:[o.jsx(J,{className:"x3",path:"M448,96L448,416C448,434 434,448 416,448L96,448C78,448 64,434 64,416L64,96C64,78 78,64 96,64L416,64C434,64 448,78 448,96ZM384,128L128,128L128,384L384,384L384,128Z"}),o.jsx(J,{className:"x3",path:"M21,5L21,20C21,20 20,21 20,21L5,21C4,21 3,20 3,20L3,5C3,4 4,3 5,3L20,3C20,3 21,4 21,5ZM18,6L6,6L6,18L18,18L18,6Z",width:24,height:24})]}),qA=`import React from 'react'
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

export default Component`,$0=()=>o.jsx(R,{code:"path",Component:QA,Source:qA,undent:2,expand:!0,children:o.jsxs("p",{children:["You can specify the data for a path.  The default viewbox is assumed to be 512px wide and 512px high.  You can set the ",o.jsx("code",{children:"width"})," and"," ",o.jsx("code",{children:"height"})," properties to change that."]})}),JA=Object.freeze(Object.defineProperty({__proto__:null,default:$0},Symbol.toStringTag,{value:"Module"})),eM=()=>o.jsxs("div",{className:"flex gap-2",children:[o.jsx(J,{name:"check",size:"smallest"}),o.jsx(J,{name:"check",size:"smaller"}),o.jsx(J,{name:"check",size:"small"}),o.jsx(J,{name:"check",size:"medium"}),o.jsx(J,{name:"check",size:"large"}),o.jsx(J,{name:"check",size:"larger"}),o.jsx(J,{name:"check",size:"largest"})]}),tM=`import React from 'react'
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

export default Component`,B0=()=>o.jsx(R,{code:"size",Component:eM,Source:tM,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"size"})," property is a short-cut to set the size.  This adds the size to the CSS class."]})}),nM=Object.freeze(Object.defineProperty({__proto__:null,default:B0},Symbol.toStringTag,{value:"Module"})),rM=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Icon"}),o.jsx(D0,{}),o.jsxs(at,{tocName:"icon",children:[o.jsx(ce,{title:"Properties"}),o.jsx(P0,{}),o.jsx(A0,{}),o.jsx(B0,{}),o.jsx(M0,{}),o.jsx($0,{}),o.jsx(ce,{title:"Components"}),o.jsx(O0,{})]})]}),oM=Object.freeze(Object.defineProperty({__proto__:null,default:rM},Symbol.toStringTag,{value:"Module"})),aM=()=>{const[e,t]=v.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsxs(wn,{open:e,className:"max-width-30rem",children:[o.jsx("header",{children:o.jsx("h3",{children:"A Modal!"})}),o.jsxs("p",{children:["This is a modal.  The content is rendered as an ",o.jsx("code",{children:"article"}),".  You can include"," ",o.jsx("code",{children:"header"})," and ",o.jsx("code",{children:"footer"})," ","sections if you want, although they're entirely optional."]}),o.jsx("footer",{children:o.jsx(A,{color:"red",text:"Close Modal",onClick:()=>t(!1)})})]}),o.jsx(A,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},sM=`import { Modal, Button } from '@/src/index.jsx'

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

export default ModalExample`,I0=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"Modal"})," component can be used to create an overlaid modal dialog."]}),o.jsxs("p",{className:"cols-2 stack-desktop",children:["The ",o.jsx("code",{children:"open"})," property should be used to indicate if the modal is open or not. Any child elements will be rendered inside the modal body."]}),o.jsx(pe,{Component:aM,code:sM,expand:!0})]}),lM=Object.freeze(Object.defineProperty({__proto__:null,default:I0},Symbol.toStringTag,{value:"Module"})),iM=()=>{const{show:e,hide:t,Modal:n}=H_();return o.jsxs(o.Fragment,{children:[o.jsxs(n,{children:[o.jsx("p",{children:"Modal State"}),o.jsx(A,{color:"red",text:"Close Modal",onClick:t})]}),o.jsx(A,{color:"green",text:"Open Modal",onClick:e})]})},cM=`import { ModalState, Button } from '@/src/index.jsx'
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

export default ModalStateExample`,z0=()=>o.jsx(R,{code:"ModalState",Component:iM,Source:cM,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"ModalState"})," function can be used to generate a Modal with state.  It returns the ",o.jsx("code",{children:"isVisible"})," property,"," ",o.jsx("code",{children:"show"})," and ",o.jsx("code",{children:"hide"})," functions to change the visibility, and a ",o.jsx("code",{children:"Modal"})," component."]})}),dM=Object.freeze(Object.defineProperty({__proto__:null,default:z0},Symbol.toStringTag,{value:"Module"})),uM=()=>{const[e,t]=v.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsxs(wn,{open:e,className:"large max-width-25rem pad-8",children:[o.jsx("p",{children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object."}),o.jsx(A,{color:"red",text:"Close Modal",onClick:()=>t(!1)})]}),o.jsx(A,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},pM=`import { Modal, Button } from '@/src/index.jsx'
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

export default ModalExample`,F0=()=>o.jsx(R,{code:"className",Component:uM,Source:pM,undent:6,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"className"})," property can be used to add a CSS class to the Modal ",o.jsx("code",{children:"dialog"})," element."]})}),fM=Object.freeze(Object.defineProperty({__proto__:null,default:F0},Symbol.toStringTag,{value:"Module"})),hM=()=>{const[e,t]=v.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(wn,{open:e,close:()=>t(!1),children:o.jsx("p",{children:"This is a modal with a close button."})}),o.jsx(A,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},mM=`import React, { useState } from 'react'
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

export default ModalExample`,H0=()=>o.jsx(R,{code:"close",Component:hM,Source:mM,undent:6,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"close"})," property can be used to automatically add a close icon to the top right corner.  It should be a function which will close the modal when the icon is clicked."]})}),gM=Object.freeze(Object.defineProperty({__proto__:null,default:H0},Symbol.toStringTag,{value:"Module"})),xM=()=>{const[e,t]=v.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(wn,{open:e,close:()=>t(!1),closeIcon:"thumb",children:o.jsx("p",{children:"This is a modal with a custom close icon."})}),o.jsx(A,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},vM=`import React, { useState } from 'react'
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

export default ModalExample`,U0=()=>o.jsx(R,{code:"closeIcon",Component:xM,Source:vM,undent:6,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"closeIcon"})," property can be used to change the icon displayed to close the modal."]})}),yM=Object.freeze(Object.defineProperty({__proto__:null,default:U0},Symbol.toStringTag,{value:"Module"})),jM=()=>{const[e,t]=v.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(wn,{open:e,close:()=>t(!1),title:"Hello World!",text:"This is a modal with a custom footer",footer:o.jsx("div",{className:"text-right",children:o.jsx(A,{color:"red",text:"Close",size:"small",iconRight:"cross",onClick:()=>t(!1)})})}),o.jsx(A,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},CM=`import { Modal, Button } from '@/src/index.jsx'
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

export default ModalExample`,V0=()=>o.jsx(R,{code:"footer",Component:jM,Source:CM,undent:6,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"footer"})," property can be used to define some custom footer content."]})}),bM=Object.freeze(Object.defineProperty({__proto__:null,default:V0},Symbol.toStringTag,{value:"Module"})),SM=()=>{const[e,t]=v.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(wn,{open:e,close:()=>t(!1),text:"This is a modal with a custom header",header:o.jsxs(o.Fragment,{children:[o.jsx("h3",{children:"Custom Header"}),o.jsx("p",{children:"Hello World!"})]})}),o.jsx(A,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},wM=`import { Modal, Button } from '@/src/index.jsx'
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

export default ModalExample`,W0=()=>o.jsx(R,{code:"header",Component:SM,Source:wM,undent:6,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"header"})," property can be used to define some custom header content."]})}),_M=Object.freeze(Object.defineProperty({__proto__:null,default:W0},Symbol.toStringTag,{value:"Module"})),kM=()=>{const[e,t]=v.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(wn,{open:e,close:()=>t(!1),text:"This is a modal"}),o.jsx(A,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},TM=`import { Modal, Button } from '@/src/index.jsx'

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

export default ModalExample`,Z0=()=>o.jsx(R,{code:"text",Component:kM,Source:TM,undent:6,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"text"})," property can be used to define the body text."]})}),EM=Object.freeze(Object.defineProperty({__proto__:null,default:Z0},Symbol.toStringTag,{value:"Module"})),NM=()=>{const[e,t]=v.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(wn,{open:e,close:()=>t(!1),text:"This is a modal with a title",title:"My Modal"}),o.jsx(A,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},LM=`import { Modal, Button } from '@/src/index.jsx'
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

export default ModalExample`,K0=()=>o.jsx(R,{code:"title",Component:NM,Source:LM,undent:6,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"title"})," property can be used to add a title."]})}),RM=Object.freeze(Object.defineProperty({__proto__:null,default:K0},Symbol.toStringTag,{value:"Module"})),DM=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Modal"}),o.jsx(I0,{}),o.jsxs(at,{tocName:"modal",children:[o.jsx(ce,{title:"Properties"}),o.jsx(F0,{}),o.jsx(H0,{}),o.jsx(U0,{}),o.jsx(Z0,{}),o.jsx(K0,{}),o.jsx(W0,{}),o.jsx(V0,{}),o.jsx(ce,{title:"Components"}),o.jsx(z0,{})]})]}),OM=Object.freeze(Object.defineProperty({__proto__:null,default:DM},Symbol.toStringTag,{value:"Module"})),AM=()=>{const{isVisible:e,show:t,hide:n}=wr();return o.jsxs("div",{className:"relative pad-6 border",children:[e&&o.jsx(ta,{className:"flex middle center pad-8",children:o.jsxs("div",{children:[o.jsx("p",{className:"larger",children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been... that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object."}),o.jsx(A,{onClick:n,className:"red",text:"Hide Overlay"})]})}),o.jsx("p",{className:"mar-t-none",children:"May I make a suggestion? May I make a suggestion? I've got one other suggestion."}),o.jsx("p",{children:"Well let's hear yours. Let's hear your suggestion."}),o.jsx("p",{children:"Stonehenge! It's the best production value we've ever had on stage."}),o.jsx("p",{children:"But we haven't got the equipment. We haven't got the equipment, we haven't got Stonehenge, we haven't..."}),o.jsx("p",{children:"Not yet we don't. Let's start... Musically, musically we all know it. Musically we all know it. Right? No problems musically. We go right on stage. And it's quite simple. This is you know... Ian can take care of this..."}),o.jsx("p",{children:"I know what the Stonehenge monument looks like. We don't have that piece of scenery anymore."}),o.jsx("p",{children:"I know, so we build a new one. And this is it, look!"}),o.jsx(A,{onClick:t,color:"green",text:"Show Overlay"})]})},MM=`import { Overlay, VisibleState, Button } from '@/src/index.jsx'

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

export default OverlayExample`,Y0=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"Overlay"})," component can be used to create an overlay. The default positioning is absolute so it will fill to cover the nearest parent that has positioning set to relative."]}),o.jsx(pe,{Component:AM,code:MM})]}),PM=Object.freeze(Object.defineProperty({__proto__:null,default:Y0},Symbol.toStringTag,{value:"Module"})),$M=()=>{const{show:e,hide:t,Overlay:n}=V_();return o.jsxs(o.Fragment,{children:[o.jsx(n,{fixed:!0,className:"flex center middle",children:o.jsxs("div",{children:[o.jsx("h1",{className:"mar-b-4",children:"Overlay State"}),o.jsx(A,{color:"red",text:"Hide Overlay",onClick:t})]})}),o.jsx(A,{color:"green",text:"Show Overlay",onClick:e})]})},BM=`import { OverlayState, Button } from '@/src/index.jsx'
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

export default OverlayStateExample`,G0=()=>o.jsx(R,{code:"OverlayState",Component:$M,Source:BM,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"OverlayState"})," function can be used to generate an Overlay with state.  It returns the ",o.jsx("code",{children:"isVisible"})," property,"," ",o.jsx("code",{children:"show"})," and ",o.jsx("code",{children:"hide"})," functions to change the visibility, and an ",o.jsx("code",{children:"Overlay"})," component."]})}),IM=Object.freeze(Object.defineProperty({__proto__:null,default:G0},Symbol.toStringTag,{value:"Module"})),zM=()=>{const[e,t]=v.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsxs(wn,{open:e,className:"large max-width-25rem pad-8",children:[o.jsx("p",{children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object."}),o.jsx(A,{color:"red",text:"Close Modal",onClick:()=>t(!1)})]}),o.jsx(A,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},FM=`import { Modal, Button } from '@/src/index.jsx'
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

export default ModalExample`,HM=()=>o.jsx(R,{code:"className",Component:zM,Source:FM,undent:6,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"className"})," property can be used to add a CSS class to the Modal ",o.jsx("code",{children:"dialog"})," element."]})}),UM=Object.freeze(Object.defineProperty({__proto__:null,default:HM},Symbol.toStringTag,{value:"Module"})),VM=()=>{const{isVisible:e,show:t,hide:n}=wr();return o.jsxs("div",{className:"relative pad-6 border",children:[o.jsx(A,{onClick:t,color:"green",text:"Show Red Overlay"}),e&&o.jsxs(ta,{className:"flex space top pad-6",style:{"--color":"var(--red-70)","--background-color":"var(--red-20)","--background-opacity":"10%"},children:[o.jsx("p",{className:"larger",children:"Custom red overlay"}),o.jsx(A,{onClick:n,className:"red",text:"Hide Overlay"})]})]})},WM=`import React from 'react'
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

export default ColorExample`,X0=()=>o.jsx(R,{title:"Custom Colors",Component:VM,Source:WM,undent:8,children:o.jsxs("p",{children:["You can set the ",o.jsx("code",{children:"--color"})," and ",o.jsx("code",{children:"--background-color"})," ","CSS properties to define your own colors for the overlay.  The"," ",o.jsx("code",{children:"--background-opacity"})," can be set to change the background opacity."]})}),ZM=Object.freeze(Object.defineProperty({__proto__:null,default:X0},Symbol.toStringTag,{value:"Module"})),KM=()=>{const{isVisible:e,show:t,hide:n}=wr();return o.jsxs("div",{className:"relative pad-6 border",children:[o.jsx(A,{onClick:t,color:"green",text:"Show Overlay"}),e&&o.jsx(ta,{fixed:!0,className:"flex center middle",children:o.jsxs("div",{className:"max-width-40rem",children:[o.jsx("p",{className:"larger",children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been... that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object."}),o.jsx(A,{onClick:n,className:"red",text:"Hide Overlay"})]})})]})},YM=`import React from 'react'
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

export default OverlayExample`,Q0=()=>o.jsx(R,{code:"fixed",Component:KM,Source:YM,undent:8,children:o.jsxs("p",{children:["Add the ",o.jsx("code",{children:"fixed"})," to set the overlay position to fixed so that it covers the entire viewport."]})}),GM=Object.freeze(Object.defineProperty({__proto__:null,default:Q0},Symbol.toStringTag,{value:"Module"})),XM=()=>{const{isVisible:e,show:t,hide:n}=wr();return o.jsxs("div",{className:"relative pad-6 border",children:[o.jsx(A,{onClick:t,color:"green",text:"Show Light Overlay"}),e&&o.jsxs(ta,{light:!0,className:"flex space top pad-6",children:[o.jsx("p",{className:"larger",children:"Light overlay"}),o.jsx(A,{onClick:n,className:"red",text:"Hide Overlay"})]})]})},QM=`import React from 'react'
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

export default ColorExample`,qM=()=>{const{isVisible:e,show:t,hide:n}=wr();return o.jsxs("div",{className:"relative pad-6 border",children:[o.jsx(A,{onClick:t,color:"green",text:"Show Dark Overlay"}),e&&o.jsxs(ta,{dark:!0,className:"flex space top pad-6",children:[o.jsx("p",{className:"larger",children:"Dark overlay"}),o.jsx(A,{onClick:n,className:"red",text:"Hide Overlay"})]})]})},JM=`import React from 'react'
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

export default ColorExample`,q0=()=>o.jsxs(U,{code:"light / dark",children:[o.jsxs("p",{className:"cols-2 stack-desktop",children:["The default overlay color is white in light mode and black in dark mode.  You can add the ",o.jsx("code",{children:"light"})," or ",o.jsx("code",{children:"dark"})," ","property to explicitly set it to one or the other."]}),o.jsx(pe,{Component:XM,code:QM,caption:"light",undent:8}),o.jsx(pe,{Component:qM,code:JM,caption:"dark",undent:8})]}),eP=Object.freeze(Object.defineProperty({__proto__:null,default:q0},Symbol.toStringTag,{value:"Module"})),tP=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Overlay"}),o.jsx(Y0,{}),o.jsxs(at,{tocName:"overlay",children:[o.jsx(ce,{title:"Properties"}),o.jsx(Q0,{}),o.jsx(q0,{}),o.jsx(ce,{title:"Styling"}),o.jsx(X0,{}),o.jsx(ce,{title:"Components"}),o.jsx(G0,{})]})]}),nP=Object.freeze(Object.defineProperty({__proto__:null,default:tP},Symbol.toStringTag,{value:"Module"})),rP=({page:e,className:t,onClick:n})=>{const{pageRanges:r}=d_(),a=r[e];return o.jsx(A,{text:a,className:t,onClick:n})},oP=()=>{const e=["A-C","D-F","G-I","J-M","N-P","Q-T","U-W","X-Z"],t=e.length,[n,r]=v.useState(0);return o.jsx(Vt,{pages:t,page:n,setPage:r,pageRanges:e,Page:rP,size:"small"})},aP=`import { Pager, usePager, Button } from '@/src/index.jsx'

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

export default PagerExample`,J0=({items:e})=>o.jsx("table",{className:"wide shaded striped celled",children:o.jsx("tbody",{children:e.map(([t,n])=>o.jsx(sP,{name:t,value:n},t))})}),sP=({name:e,value:t})=>o.jsxs("tr",{children:[o.jsx("td",{className:"font-mono",children:e}),o.jsx("td",{children:t})]}),e4=()=>o.jsxs(o.Fragment,{children:[o.jsx("h2",{children:"Context"}),o.jsxs("div",{className:"cols-2 stack-desktop",children:[o.jsx("p",{children:"A react context is created which provides the items listed below. Any other properties passed in to the component will also be accessible to child components."}),o.jsxs("p",{children:["Values are provided for the 0-based indexes of the first, last, previous, next and current pages. For example, the lowest value for ",o.jsx("code",{children:"page"})," is"," ",o.jsx("code",{children:"0"})," and the highest value is ",o.jsx("code",{children:"pages - 1"}),"."]}),o.jsxs("p",{children:['Their counterparts are also provided in "human readable" 1-based form with a ',o.jsx("code",{children:"No"})," suffix.  For example, the values for ",o.jsx("code",{children:"pageNo"})," range from ",o.jsx("code",{children:"1"})," to ",o.jsx("code",{children:"pages"}),", and will always be one more than ",o.jsx("code",{children:"page"}),"."]})]}),o.jsx(J0,{items:[["pages","The total number of pages, as passed into the component as a property."],["page","The index (0 based) of the current page, as passed into the component as a property."],["setPage","The function for setting a page index, as passed into the component as a property."],["pageNo",o.jsxs(o.Fragment,{children:["The current page number (1 based), effectively one louder than ",o.jsx("code",{children:"page"}),".  e.g. if ",o.jsx("code",{children:"page"})," is ten then this goes up to eleven."]})],["firstPage","The index (0 based) of the first page.  This is always 0 but is included for completeness."],["firstPageNo","The number (1 based) of the first page.  This is always 1 but is included for completeness."],["lastPage","The index (0 based) of the last page."],["lastPageNo","The number (1 based) of the first page."],["prevPage","The index (0 based) of the previous page."],["prevPageNo","The number (1 based) of the previous page."],["nextPage","The index (0 based) of the next page."],["nextPageNo","The number (1 based) of the next page."]]}),o.jsx("h2",{children:"Custom Component"}),o.jsxs("div",{className:"cols-2 stack-desktop",children:[o.jsxs("p",{children:["You can provide your own components to render certain elements of the pager widget. These will be passed relevant parameters as properties and can use the ",o.jsx("code",{children:"usePager()"})," hook to access the full pager context, including any additional properties that you pass to the ",o.jsx("code",{children:"Pager"})," component."]}),o.jsxs("p",{children:["In this example we define a custom ",o.jsx("code",{children:"MyPageButton"})," component to replace the ",o.jsx("code",{children:"Page"})," component that renders the numbered page buttons.  Instead of displaying page numbers it shows alphabetical ranges for each button, defined in a custom ",o.jsx("code",{children:"pageRanges"})," "," ","property."]})]}),o.jsx(pe,{Component:oP,code:aP})]}),lP=Object.freeze(Object.defineProperty({__proto__:null,default:e4},Symbol.toStringTag,{value:"Module"})),iP=()=>{const[e,t]=v.useState(0);return o.jsx(Vt,{pages:11,page:e,setPage:t})},cP=`import { Pager } from '@/src/index.jsx'

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

export default PagerExample`,t4=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"Pager"})," component generates buttons for navigating through several pages."]}),o.jsx("div",{className:"cols-2 stack-desktop",children:o.jsxs("p",{children:["The three mandatory properties are ",o.jsx("code",{children:"pages"})," indicating the total number of pages, ",o.jsx("code",{children:"page"})," for the current page index (ranging from 0 to ",o.jsx("code",{children:"pages"})," - 1) and a"," ",o.jsx("code",{children:"setPage"})," handler to set the page index."]})}),o.jsx(pe,{Component:iP,code:cP})]}),dP=Object.freeze(Object.defineProperty({__proto__:null,default:t4},Symbol.toStringTag,{value:"Module"})),uP=()=>{const[e,t]=v.useState(0);return o.jsx("div",{className:"grid-1 gap-4",children:o.jsx(Vt,{pages:11,page:e,setPage:t,className:"pager small brand border pad-2 bdr-2 bgc-90 bgd-10"})})},pP=`import React, { useState } from 'react'
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
`,n4=()=>o.jsx(R,{code:"className",Component:uP,Source:pP,undent:4,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"className"})," property can be used to set a CSS class for the pager container.  The default value is ",o.jsx("code",{children:"pager"}),"."]})}),fP=Object.freeze(Object.defineProperty({__proto__:null,default:n4},Symbol.toStringTag,{value:"Module"})),hP=()=>{const[e,t]=v.useState(0);return o.jsxs("div",{className:"grid-1 gap-4",children:[o.jsx(Vt,{pages:11,page:e,setPage:t,color:"red"}),o.jsx(Vt,{pages:11,page:e,setPage:t,color:"green"}),o.jsx(Vt,{pages:11,page:e,setPage:t,color:"blue"})]})},mP=`import React, { useState } from 'react'
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
`,r4=()=>o.jsx(R,{code:"color",Component:hP,Source:mP,undent:4,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"color"})," property can be used to set the color range used for the buttons.  This is a short-cut which adds the specified color to the CSS class for the pager container."]})}),gP=Object.freeze(Object.defineProperty({__proto__:null,default:r4},Symbol.toStringTag,{value:"Module"})),xP=()=>{const[e,t]=v.useState(0);return o.jsx(Vt,{pages:11,page:e,setPage:t,prevIcon:"angle-left",nextIcon:"angle-right"})},vP=`import React, { useState } from 'react'
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
`,o4=()=>o.jsx(R,{code:"prevIcon / nextIcon",Component:xP,Source:vP,undent:4,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"prevIcon"})," and ",o.jsx("code",{children:"nextIcon"})," properties can be used to set the icons for the previous and next page button."]})}),yP=Object.freeze(Object.defineProperty({__proto__:null,default:o4},Symbol.toStringTag,{value:"Module"})),jP=()=>{const[e,t]=v.useState(0);return o.jsx(Vt,{pages:11,page:e,setPage:t,nextIcon:"angle-right"})},CP=`import React, { useState } from 'react'
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
`,bP=()=>o.jsx(R,{code:"nextIcon",Component:jP,Source:CP,undent:4,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"nextIcon"})," property can be used to set the icon for the next page button."]})}),SP=Object.freeze(Object.defineProperty({__proto__:null,default:bP},Symbol.toStringTag,{value:"Module"})),wP=()=>{const[e,t]=v.useState(0);return o.jsx(Vt,{pages:11,page:e,setPage:t,showFirstLast:!1})},_P=`import React, { useState } from 'react'
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
`,a4=()=>o.jsxs(R,{code:"showFirstLast",Component:wP,Source:_P,undent:4,children:[o.jsxs("p",{children:["The ",o.jsx("code",{children:"showFirstLast"})," property determines if the first and last pages are shown in the set of numbered page buttons. A button for the first page will be displayed when it is less than previous page.  The last page button will be displayed when it is greater than the next page."]}),o.jsxs("p",{children:["This value defaults to ",o.jsx("code",{children:"true"})," but can be set"," ",o.jsx("code",{children:"false"})," to hide these buttons."]})]}),kP=Object.freeze(Object.defineProperty({__proto__:null,default:a4},Symbol.toStringTag,{value:"Module"})),TP=()=>{const[e,t]=v.useState(0);return o.jsxs("div",{className:"grid-1 gap-4",children:[o.jsx(Vt,{pages:11,page:e,setPage:t,size:"smaller"}),o.jsx(Vt,{pages:11,page:e,setPage:t,size:"small"})]})},EP=`import React, { useState } from 'react'
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
`,s4=()=>o.jsx(R,{code:"size",Component:TP,Source:EP,undent:4,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"size"})," property can be used to set the size to one of the standard sizes.  This is also a short-cut for adding the size as a CSS class so you can use it to add any of your own size classes."]})}),NP=Object.freeze(Object.defineProperty({__proto__:null,default:s4},Symbol.toStringTag,{value:"Module"})),LP=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Pager"}),o.jsx(t4,{}),o.jsx(e4,{}),o.jsxs(at,{tocName:"pager",children:[o.jsx(ce,{title:"Properties"}),o.jsx(n4,{}),o.jsx(r4,{}),o.jsx(s4,{}),o.jsx(o4,{}),o.jsx(a4,{}),o.jsxs(Jr,{children:[o.jsxs("div",{className:"flow",children:[o.jsx(ce,{title:"CSS Classes"}),o.jsxs(U,{code:"className",children:["Used to set the CSS class for the pager container.  The default value is ",o.jsx("code",{children:"pager"}),"."]}),o.jsxs(U,{code:"buttonClass",children:["Used to set a default CSS class for all buttons.  The default value is ",o.jsx("code",{children:"outline"}),"."]}),o.jsxs(U,{code:"prevClass",children:["Used to set the CSS class for the previous page button.  It defaults to the value for ",o.jsx("code",{children:"buttonClass"}),"."]}),o.jsxs(U,{code:"nextClass",children:["Used to set the CSS class for the next page button.  It defaults to the value for ",o.jsx("code",{children:"buttonClass"}),"."]}),o.jsxs(U,{code:"pagesClass",children:["Used to set the CSS class for the numbered page buttons container. The default value is ",o.jsx("code",{children:"pages"}),"."]}),o.jsxs(U,{code:"pageClass",children:["Used to set the CSS class for individual numbered page buttons.  It defaults to the value for ",o.jsx("code",{children:"buttonClass"}),"."]}),o.jsxs(U,{code:"currentPageClass",children:["Used to set the CSS class for the currently selected numbered page button. The default value is ",o.jsx("code",{children:"solid"}),"."]})]}),o.jsxs("div",{className:"flow",children:[o.jsx(ce,{title:"Components"}),o.jsxs(U,{code:"Previous",id:"Previous-component",children:["Renders the previous page button.  Defaults to ",o.jsx("code",{children:"PagerPrevious"}),"."]}),o.jsxs(U,{code:"Next",id:"Next-component",children:["Renders the next page button.  Defaults to ",o.jsx("code",{children:"PagerNext"}),"."]}),o.jsxs(U,{code:"Pages",id:"Pages-component",children:["Renders the collection of numbered page buttons.  Defaults to ",o.jsx("code",{children:"PagerPages"}),"."]}),o.jsxs(U,{code:"Page",id:"Page-component",children:["Renders an individual page button.  Defaults to ",o.jsx("code",{children:"PagerPage"}),"."]}),o.jsxs(U,{code:"Separator",id:"Separator-component",children:["Renders the separator between the first and/or last pages and the rest of the numbered page buttons. Defaults to ",o.jsx("code",{children:"PagerSeparator"}),"."]})]})]})]})]}),RP=Object.freeze(Object.defineProperty({__proto__:null,default:LP},Symbol.toStringTag,{value:"Module"})),DP=()=>{const[e,t]=v.useState(!1);return o.jsx(Fn,{name:"tap",value:e,onChange:t,options:["David","Nigel","Derek"]})},OP=`import { Radio } from '@/src/index.jsx'

/* START */
import React, { useState } from 'react'
// PRETEND: import { Radio } from '@abw/badger-react-ui

const RadioExample = () => {
  const [value, setValue] = useState(false)
  return (
    <Radio
      name="tap"
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

export default RadioExample`,l4=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"Radio"})," component renders a set of radio buttons."]}),o.jsx(pe,{Component:DP,code:OP,expand:!0})]}),AP=Object.freeze(Object.defineProperty({__proto__:null,default:l4},Symbol.toStringTag,{value:"Module"})),MP=()=>{const[e,t]=v.useState(!1),[n,r]=v.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(Fn,{border:!0,name:"tap1",labelClass:"mar-b-2",value:e,onChange:t,options:["David","Nigel","Derek"]}),o.jsx(Fn,{border:!0,inline:!0,name:"tap2",labelClass:"mar-r-2",value:n,onChange:r,options:["David","Nigel","Derek"]})]})},PP=`import { Radio } from '@/src/index.jsx'
import React, { useState } from 'react'

const BorderExample = () => {
  const [value1, setValue1] = useState(false)
  const [value2, setValue2] = useState(false)
  return (
    <>
      {/* START */}
      <Radio
        border
        name="tap1"
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
        name="tap2"
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

export default BorderExample`,i4=()=>o.jsxs(R,{code:"border",Component:MP,Source:PP,undent:4,expand:!0,children:[o.jsxs("p",{children:["The ",o.jsx("code",{children:"border"})," property can be set to add a border to each item."]}),o.jsxs("p",{children:["You may need to add margins to either the bottom or right side of each label using the ",o.jsx("code",{children:"labelClass"})," property."]})]}),$P=Object.freeze(Object.defineProperty({__proto__:null,default:i4},Symbol.toStringTag,{value:"Module"})),BP=()=>{const[e,t]=v.useState(!1);return o.jsx(Fn,{className:"grid-3 gap-2",name:"tap",value:e,onChange:t,options:["David","Nigel","Derek"]})},IP=`import { Radio } from '@/src/index.jsx'
import React, { useState } from 'react'

const ClassName = () => {
  const [value, setValue] = useState(false)
  return (
    /* START */
    <Radio
      className="grid-3 gap-2"
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

export default ClassName`,c4=()=>o.jsx(R,{code:"className",Component:BP,Source:IP,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"className"})," property can be used to add a CSS class to the container element."]})}),zP=Object.freeze(Object.defineProperty({__proto__:null,default:c4},Symbol.toStringTag,{value:"Module"})),FP=()=>{const[e,t]=v.useState(!1);return o.jsx(Fn,{name:"tap",value:e,onChange:t,options:[{value:"david",text:"David St. Hubbins"},{value:"nigel",text:"Nigel Tufnel"},{value:"derek",text:"Derek Smalls"},{value:"john",text:'John "Stumpy" Pepys',disabled:!0},{value:"eric",text:'Eric "Stumpy Joe" Childs',disabled:!0},{value:"peter",text:'Peter "James" Bond',disabled:!0},{value:"mick",text:"Mick Shrimpton",disabled:!0}]})},HP=`import { Radio } from '@/src/index.jsx'
import React, { useState } from 'react'

const DisabledExample = () => {
  const [value, setValue] = useState(false)
  return (
    /* START */
    <Radio
      name="tap"
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

export default DisabledExample`,d4=()=>o.jsx(R,{code:"disabled",Component:FP,Source:HP,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"disabled"})," property can be added to an option to disable it."]})}),UP=Object.freeze(Object.defineProperty({__proto__:null,default:d4},Symbol.toStringTag,{value:"Module"})),VP=()=>{const[e,t]=v.useState(!1);return o.jsx(Fn,{inline:!0,name:"tap",value:e,onChange:t,options:["David","Nigel","Derek"]})},WP=`import { Radio } from '@/src/index.jsx'
import React, { useState } from 'react'

const InlineExample = () => {
  const [value, setValue] = useState(false)
  return (
    /* START */
    <Radio
      inline
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

export default InlineExample`,u4=()=>o.jsx(R,{code:"inline",Component:VP,Source:WP,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"inline"})," property can be set to create inline radio buttons."]})}),ZP=Object.freeze(Object.defineProperty({__proto__:null,default:u4},Symbol.toStringTag,{value:"Module"})),KP=()=>{const[e,t]=v.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(Fn,{name:"tap",value:e,onChange:t,options:["David","Nigel","Derek"]}),!!e&&o.jsxs("div",{children:["Selected value: ",e]})]})},YP=`import { Radio } from '@/src/index.jsx'
import React, { useState } from 'react'

/* START */
const OnChangeExample = () => {
  const [value, setValue] = useState(false)
  return (
    <>
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
      { Boolean(value) &&
        <div>
          Selected value: {value}
        </div>
      }
    </>
  )
}
/* END */

export default OnChangeExample`,Ya=({id:e,text:t})=>o.jsx("a",{href:`#${Qp(e||t)}`,className:"code",children:t}),p4=()=>o.jsx(R,{code:"onChange",Component:KP,Source:YP,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"onChange"})," property should be used to define a function to handle changes in the state.  This will typically be used to update the ",o.jsx(Ya,{text:"value"}),"."]})}),GP=Object.freeze(Object.defineProperty({__proto__:null,default:p4},Symbol.toStringTag,{value:"Module"})),XP=()=>{const[e,t]=v.useState(!1);return o.jsx(Fn,{value:e,onChange:t,options:[{value:"david",text:"David St. Hubbins"},{value:"nigel",text:"Nigel Tufnel"},{value:"derek",text:"Derek Smalls"}]})},QP=`import { Radio } from '@/src/index.jsx'
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

export default OptionsExample`,f4=()=>o.jsx(R,{code:"options",Component:XP,Source:QP,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"options"})," property should be used to define the values for each radio button.  These can be simple values (e.g. strings or numbers) as shown in the preceding examples.  For more complex cases you should define each element as an object containing a"," ",o.jsx("code",{children:"value"})," and any of ",o.jsx("code",{children:"text"}),", ",o.jsx("code",{children:"label"})," or"," ",o.jsx("code",{children:"name"})," for the displayed text."]})}),qP=Object.freeze(Object.defineProperty({__proto__:null,default:f4},Symbol.toStringTag,{value:"Module"})),JP=()=>{const[e,t]=v.useState(!1);return o.jsx(Fn,{name:"tap",value:e,onChange:t,options:["David","Nigel","Derek"]})},e$=`import { Radio } from '@/src/index.jsx'
import React, { useState } from 'react'

/* START */
const ValueExample = () => {
  const [value, setValue] = useState(false)
  return (
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
  )
}
/* END */

export default ValueExample`,h4=()=>o.jsx(R,{code:"value",Component:JP,Source:e$,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"value"})," property should be used to define the current selected value.  This should be used in conjunction with"," ",o.jsx(Ya,{text:"onChange"})," to update the value."]})}),t$=Object.freeze(Object.defineProperty({__proto__:null,default:h4},Symbol.toStringTag,{value:"Module"})),n$=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Radio"}),o.jsx(l4,{}),o.jsxs(at,{tocName:"radio",children:[o.jsx(ce,{title:"Properties"}),o.jsx(h4,{}),o.jsx(p4,{}),o.jsx(c4,{}),o.jsx(u4,{}),o.jsx(i4,{}),o.jsx(ce,{title:"Option Properties"}),o.jsx(f4,{}),o.jsx(d4,{})]})]}),r$=Object.freeze(Object.defineProperty({__proto__:null,default:n$},Symbol.toStringTag,{value:"Module"})),o$=["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger"],a$=()=>{const e=t=>o$.filter(n=>n.toLowerCase().indexOf(t.toLowerCase())!==-1);return o.jsx(tc,{onSearch:e})},s$=`import { Search } from '@/src/index.jsx'

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

export default SearchExample`,m4=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"Search"}),' component implements the familiar "autocomplete" functionality.']}),o.jsx("p",{className:"cols-2 stack-desktop",children:"The user starts typing and after a short debounce delay a set of results matching their input is displayed. The user can then click on a result or use the keyboard to navigate through the results."}),o.jsx(pe,{Component:a$,code:s$})]}),l$=Object.freeze(Object.defineProperty({__proto__:null,default:m4},Symbol.toStringTag,{value:"Module"})),i$=[{name:"Alan Aardvark",tel:"555-1245"},{name:"Amy Aardvark",tel:"555-2233"},{name:"Anne Aardvark",tel:"555-6565"},{name:"Bart Badger",tel:"555-4201"},{name:"Betty Badger",tel:"555-1111"},{name:"Bobby Badger",tel:"555-9876"},{name:"Brenda Badger",tel:"555-3443"},{name:"Brian Badger",tel:"555-1337"}],c$=()=>{const e=n=>o.jsxs("div",{className:"flex space baseline",children:[o.jsx("div",{children:n.name}),o.jsx("div",{className:"smaller",children:n.tel})]}),t=n=>i$.filter(r=>r.name.toLowerCase().indexOf(n.toLowerCase())!==-1);return o.jsx(tc,{onSearch:t,displayResult:e})},d$=`import { Search } from '@/src/index.jsx'

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

export default DisplayResultExample`,g4=()=>o.jsx(R,{code:"displayResult",Component:c$,Source:d$,expand:!0,children:o.jsxs("p",{children:["If a result is a text string then it will be displayed as the result. If it's an object containing a ",o.jsx("code",{children:"text"}),","," ",o.jsx("code",{children:"label"})," or ",o.jsx("code",{children:"name"})," property then that will be used as the display value.  Otherwise you can provide a"," ",o.jsx("code",{children:"displayResult"})," function to display the result any way you like."]})}),u$=Object.freeze(Object.defineProperty({__proto__:null,default:g4},Symbol.toStringTag,{value:"Module"})),p$=[{id:100,name:"Alan Aardvark",tel:"555-1245"},{id:101,name:"Amy Aardvark",tel:"555-2233"},{id:102,name:"Anne Aardvark",tel:"555-6565"},{id:110,name:"Bart Badger",tel:"555-4201"},{id:111,name:"Betty Badger",tel:"555-1111"},{id:112,name:"Bobby Badger",tel:"555-9876"},{id:113,name:"Brenda Badger",tel:"555-3443"},{id:114,name:"Brian Badger",tel:"555-1337"}],f$=()=>{const e=n=>`#${n.id}: ${n.name} (${n.tel})`,t=n=>p$.filter(r=>r.name.toLowerCase().indexOf(n.toLowerCase())!==-1);return o.jsx(tc,{onSearch:t,displayValue:e})},h$=`import { Search } from '@/src/index.jsx'

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

export default DisplayValueExample`,x4=()=>o.jsx(R,{code:"displayValue",Component:f$,Source:h$,expand:!0,children:o.jsxs("p",{children:["When a result is selected the same rules will be applied to display the result in the search input.  If it's not a string or an object containing one of the aforementioned properties then you should provide a ",o.jsx("code",{children:"displayValue"})," function to convert the result to a text string that can be displayed."]})}),m$=Object.freeze(Object.defineProperty({__proto__:null,default:x4},Symbol.toStringTag,{value:"Module"})),g$=["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Beatrice Badger","Belinda Badger","Ben Badger","Bert Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger","Brook Badger","Buzz Badger"],x$=()=>{const e=async t=>Ui(500).then(()=>g$.filter(n=>n.toLowerCase().indexOf(t.toLowerCase())!==-1));return o.jsx(tc,{onSearch:e,debug:!0})},v$=`import { Search } from '@/src/index.jsx'
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

export default OnSearchExample`,v4=()=>o.jsx(R,{code:"onSearch",Component:x$,Source:v$,children:o.jsxs("p",{children:["You should provide an ",o.jsx("code",{children:"onSearch"})," function which will be passed the search input and should return an array of results.  This can be an asynchronous function if necessary.  For example, a function which makes an API request to fetch the matching results."]})}),y$=Object.freeze(Object.defineProperty({__proto__:null,default:v4},Symbol.toStringTag,{value:"Module"})),j$=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Search"}),o.jsx(m4,{}),o.jsxs(at,{tocName:"search",children:[o.jsx(ce,{title:"Properties"}),o.jsx(v4,{}),o.jsx(g4,{}),o.jsx(x4,{})]})]}),C$=Object.freeze(Object.defineProperty({__proto__:null,default:j$},Symbol.toStringTag,{value:"Module"})),b$=["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger","Colin Camel","David Donkey","Eddie Elephant","Franky Ferret","Gina Goat","Helen Horse","Ian Iguana","Juliet Jackdaw","Kevin Kangaroo","Linda Llama"],S$=()=>o.jsx(Er,{options:b$}),w$=`import { Select } from '@/src/index.jsx'

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

export default SelectExample`,y4=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"Select"})," component implements a custom select input."]}),o.jsx(pe,{Component:S$,code:w$}),o.jsx("h2",{children:"Context"}),o.jsxs("div",{className:"cols-2 stack-desktop",children:[o.jsx("p",{children:"A react context is created which provides the items listed below. Any other properties passed in to the component will also be accessible to child components."}),o.jsxs("p",{children:["Custom components can be wrapped with the ",o.jsx("code",{children:"SelectConsumer"})," ","higher order component to receive these items as properties.  Or you can use the ",o.jsx("code",{children:"useSelect"})," hook to access them."]})]}),o.jsx(J0,{items:[["close","Handler to close the menu."],["cursor",o.jsxs(o.Fragment,{children:["The index of the currently selected option in the ",o.jsx("code",{children:"options"})," array"]})],["disabled","Boolean flag indicating if the input is disabled"],["displayOption","Function to display the content for an option"],["input","The current input value displayed in the field."],["isOpen","Boolean flag indicating if the menu of options is displayed."],["menuRef","A React reference for the menu container."],["onBlur","Handler for blur events."],["onClick","Handler for click events."],["onFocus","Handler for focus events."],["onKeyDown","Handler for keyboard events."],["open","Handler to open the menu."],["options","The array of selection options."],["selected",o.jsxs(o.Fragment,{children:["The selected element in the ",o.jsx("code",{children:"options"})," array"]})],["selectCursor","Handler to select the option indexed by the cursor."],["selectOption","Handler to select an option."],["setCursor","Handler to set the cursor"],["validOption","Function to determine if an option is valid (i.e. not disabled)"],["value","The value of the current selected option."]]})]}),_$=Object.freeze(Object.defineProperty({__proto__:null,default:y4},Symbol.toStringTag,{value:"Module"})),k$=[{name:"Alan Aardvark",tel:"555-1245"},{name:"Amy Aardvark",tel:"555-2233"},{name:"Anne Aardvark",tel:"555-6565"},{name:"Bart Badger",tel:"555-4201"},{name:"Betty Badger",tel:"555-1111"},{name:"Bobby Badger",tel:"555-9876"},{name:"Brenda Badger",tel:"555-3443"},{name:"Brian Badger",tel:"555-1337"}],T$=()=>{const e=t=>o.jsxs("div",{className:"flex space baseline",children:[o.jsx("div",{children:t.name}),o.jsx("div",{className:"smaller",children:t.tel})]});return o.jsx(Er,{options:k$,displayOption:e})},E$=`import { Select } from '@/src/index.jsx'

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

export default DisplayOptionExample`,j4=()=>o.jsx(R,{code:"displayOption",Component:T$,Source:E$,expand:!0,children:o.jsxs("p",{children:["If an option is a text string then it will be displayed as it is. If it's an object containing a ",o.jsx("code",{children:"text"}),","," ",o.jsx("code",{children:"label"})," or ",o.jsx("code",{children:"name"})," property then that will be used as the display value.  Otherwise you can provide a"," ",o.jsx("code",{children:"displayOption"})," function to display the result any way you like."]})}),N$=Object.freeze(Object.defineProperty({__proto__:null,default:j4},Symbol.toStringTag,{value:"Module"})),L$=[{id:100,name:"Alan Aardvark",tel:"555-1245"},{id:101,name:"Amy Aardvark",tel:"555-2233"},{id:102,name:"Anne Aardvark",tel:"555-6565"},{id:110,name:"Bart Badger",tel:"555-4201"},{id:111,name:"Betty Badger",tel:"555-1111"},{id:112,name:"Bobby Badger",tel:"555-9876"},{id:113,name:"Brenda Badger",tel:"555-3443"},{id:114,name:"Brian Badger",tel:"555-1337"}],R$=()=>{const e=t=>o.jsxs("div",{className:"flex baseline",children:[o.jsxs("span",{className:"smaller mar-r-2",children:["#",t.id]})," ",t.name," (",t.tel,")"]});return o.jsx(Er,{options:L$,displayValue:e})},D$=`import { Select } from '@/src/index.jsx'

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

export default DisplayValueExample`,C4=()=>o.jsx(R,{code:"displayValue",Component:R$,Source:D$,expand:!0,children:o.jsxs("p",{children:["When an option is selected the same rules will be applied to display the option in the search input.  If it's not a string or an object containing one of the aforementioned properties then you should provide a ",o.jsx("code",{children:"displayValue"})," function to convert the result to a text string that can be displayed."]})}),O$=Object.freeze(Object.defineProperty({__proto__:null,default:C4},Symbol.toStringTag,{value:"Module"})),A$=[{id:101,name:"Alan Aardvark"},{id:102,name:"Amy Aardvark"},{id:103,name:"Anne Aardvark",disabled:!0},{id:104,name:"Bart Badger"},{id:105,name:"Betty Badger"},{id:106,name:"Bobby Badger",disabled:!0},{id:107,name:"Brenda Badger"},{id:108,name:"Brian Badger"},{id:109,name:"Colin Camel",disabled:!0},{id:110,name:"Derek Donkey"}],M$=()=>o.jsx(Er,{options:A$}),P$=`import { Select } from '@/src/index.jsx'

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

export default OptionsExample`,b4=()=>o.jsxs(R,{code:"options",Component:M$,Source:P$,expand:!0,children:[o.jsxs("p",{children:["The ",o.jsx("code",{children:"options"})," property should be used to provide an array of options that the user can select from.  Each element in the array can be a string, numerical value or an object."]}),o.jsxs("p",{children:["When the ",o.jsx("code",{children:"options"})," contains an array of objects, each object element should have an ",o.jsx("code",{children:"id"})," or ",o.jsx("code",{children:"value"})," property to uniquely identify it.  By default, options will be displayed using the ",o.jsx("code",{children:"text"}),", ",o.jsx("code",{children:"label"})," or ",o.jsx("code",{children:"name"})," property. Alternately, you can define your own ",o.jsx(Ya,{text:"displayOption"})," function to display an option in the selection list and/or a"," ",o.jsx(Ya,{text:"displayValue"})," function to display the selected value."]}),o.jsxs("p",{children:["The ",o.jsx("code",{children:"disabled"})," "," property can be used to mark an option as disabled, or you can define a ",o.jsx(Ya,{text:"validOption"})," function to implement a different strategy to identify unselectable options."]})]}),$$=Object.freeze(Object.defineProperty({__proto__:null,default:b4},Symbol.toStringTag,{value:"Module"})),B$=[{id:1,name:"Alan Aardvark"},{id:2,name:"Amy Aardvark"},{id:3,name:"Anne Aardvark"},{id:4,name:"Bart Badger"},{id:5,name:"Betty Badger"},{id:6,name:"Bobby Badger"},{id:7,name:"Brenda Badger"},{id:8,name:"Brian Badger"},{id:9,name:"Ignored Iguana",disabled:!0}],I$=()=>o.jsx(o.Fragment,{children:o.jsx(Er,{debug:!0,search:!0,options:B$})}),z$=`import { Select } from '@/src/index.jsx'

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

export default SearchExample`,S4=()=>o.jsx(R,{code:"search",Component:I$,Source:z$,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"search"})," property can be set to enable searching of options."]})}),F$=Object.freeze(Object.defineProperty({__proto__:null,default:S4},Symbol.toStringTag,{value:"Module"})),H$=[{id:101,name:"Alan Aardvark"},{id:102,name:"Amy Apple",isFruit:!0},{id:103,name:"Anne Aardvark"},{id:104,name:"Bart Banana",isFruit:!0},{id:105,name:"Betty Badger"},{id:106,name:"Bobby Badger"},{id:107,name:"Brenda Badger"},{id:108,name:"Brian Badger"},{id:109,name:"Colin Cherry",isFruit:!0},{id:110,name:"Derek Donkey"}],U$=()=>o.jsx(Er,{validOption:e=>!e.isFruit,options:H$}),V$=`import { Select } from '@/src/index.jsx'

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

export default OptionsExample`,w4=()=>o.jsxs(R,{code:"validOption",Component:U$,Source:V$,expand:!0,children:[o.jsxs("p",{children:["The ",o.jsx("code",{children:"validOption"})," property can be used to provide a function that determines if an option is valid and can be selected.  The default function uses the ",o.jsx("code",{children:"disabled"})," property in an option to identify invalid options."]}),o.jsxs("p",{children:["In this example we define a ",o.jsx("code",{children:"validOption"})," function which rejects any options that have the ",o.jsx("code",{children:"isFruit"})," flag set."]})]}),W$=Object.freeze(Object.defineProperty({__proto__:null,default:w4},Symbol.toStringTag,{value:"Module"})),Z$=["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger"],K$=()=>o.jsx(Er,{options:Z$,value:"Bobby Badger"}),Y$=`import { Select } from '@/src/index.jsx'

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

export default ValueExample`,G$=[{id:1,name:"Alan Aardvark"},{id:2,name:"Amy Aardvark"},{id:3,name:"Anne Aardvark"},{id:4,name:"Bart Badger"},{id:5,name:"Betty Badger"},{id:6,name:"Bobby Badger"},{id:7,name:"Brenda Badger"},{id:8,name:"Brian Badger"}],X$=()=>o.jsx(Er,{options:G$,value:5}),Q$=`import { Select } from '@/src/index.jsx'

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

export default ValueExample`,_4=()=>o.jsxs(U,{code:"value",children:[o.jsx("div",{className:"cols-2 stack-desktop mar-b-4",children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"value"})," property can be used to pre-select a value."]})}),o.jsx(pe,{Component:K$,code:Y$,caption:"value",expand:!1}),o.jsx("div",{className:"cols-2 stack-desktop mar-b-4",children:o.jsxs("p",{children:["When the ",o.jsx("code",{children:"options"})," are defined as an array of objects, the specified ",o.jsx("code",{children:"value"})," should correspond to the"," ",o.jsx("code",{children:"value"})," or ",o.jsx("code",{children:"id"})," property of an element in the ",o.jsx("code",{children:"options"})," array."]})}),o.jsx(pe,{Component:X$,code:Q$,caption:"value",expand:!1})]}),q$=Object.freeze(Object.defineProperty({__proto__:null,default:_4},Symbol.toStringTag,{value:"Module"})),J$=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Select"}),o.jsx(y4,{}),o.jsxs(at,{tocName:"select",children:[o.jsx(ce,{title:"Properties"}),o.jsx(b4,{}),o.jsx(_4,{}),o.jsx(S4,{}),o.jsx(j4,{}),o.jsx(C4,{}),o.jsx(w4,{}),o.jsx(U,{code:"disabled",split:!0,children:"Boolean flag to set the select input to be disabled."}),o.jsxs(U,{code:"placeholder",split:!0,children:["Set the placeholder text.  The default is ",o.jsx("code",{children:"Select"}),"."]}),o.jsxs(U,{code:"noOptions",split:!0,children:["Set the text displayed when there are no options to select from. The default is ",o.jsx("code",{children:"No options"}),"."]}),o.jsxs(U,{code:"openOnHover",split:!0,children:["Flag to indicate that the option menu should open when the cursor hovers over the trigger input.  Defaults to ",o.jsx("code",{children:"false"}),"."]}),o.jsxs(U,{code:"closeOnBlur",split:!0,children:["Flag to indicate that the option menu should close when focus is lost. Defaults to ",o.jsx("code",{children:"true"}),"."]}),o.jsxs(U,{code:"closeDelay",split:!0,children:["Delay (in milliseconds) before the menu is closed.  This is required to ensure that any click events have been registered before the menu is closed. Defaults to ",o.jsx("code",{children:"300"}),"."]}),o.jsxs(Jr,{children:[o.jsxs("div",{className:"flow",children:[o.jsx(ce,{title:"Event Handlers"}),o.jsxs(U,{code:"onLoad",children:["Called when the component is first loaded.  The handler is passed a reference to the ",o.jsx("code",{children:"SearchContext"})," object."]}),o.jsxs(U,{code:"onUnload",children:["Called when the component is unloaded.  The handler is passed a reference to the ",o.jsx("code",{children:"SearchContext"})," object."]}),o.jsx(U,{code:"onFocus",children:"Called when the component gains focus."}),o.jsx(U,{code:"onBlur",children:"Called when the component loses focus."}),o.jsx(U,{code:"onClick",children:"Called when the component is clicked."}),o.jsx(U,{code:"onOpen",children:"Called when the component is opened and selectable options are displayed."}),o.jsx(U,{code:"onClose",children:"Called when the component is closed and selectable options are hidden."}),o.jsx(U,{code:"onSelect",children:"Called when an option is selected.  The selection option is passed as an argument."})]}),o.jsxs("div",{className:"flow",children:[o.jsx(ce,{title:"CSS Classes"}),o.jsxs(U,{code:"placeholderClass",children:["Set the class for the placeholder text. The default is ",o.jsx("code",{children:"placeholder"}),"."]}),o.jsxs(U,{code:"inputClass",children:["Set the class for the input element. The default is ",o.jsx("code",{children:"input"}),"."]}),o.jsxs(U,{code:"selectingClass",children:["Set the class added when a selection is in place. The default is ",o.jsx("code",{children:"selecting"}),"."]}),o.jsxs(U,{code:"optionsClass",children:["Set the class added for the options container. The default is ",o.jsx("code",{children:"menu border bdr-1"}),"."]}),o.jsxs(U,{code:"optionClass",children:["Set the class added to each option element. The default is ",o.jsx("code",{children:"item"}),"."]}),o.jsxs(U,{code:"activeClass",children:["Set the class added to an option that is currently active. The default is ",o.jsx("code",{children:"active"}),"."]}),o.jsxs(U,{code:"noOptionsClass",children:["Set the class added to the element displayed when there are no options to select from. The default is ",o.jsx("code",{children:"none"}),"."]})]}),o.jsxs("div",{className:"flow",children:[o.jsx(ce,{title:"Components"}),o.jsx(U,{code:"Content",children:"Renders the content of the select component."}),o.jsx(U,{code:"Input",children:"Renders the input field."}),o.jsx(U,{code:"Options",id:"Options-component",children:"Renders the selectable options."}),o.jsx(U,{code:"Option",children:"Renders an individual option."}),o.jsx(U,{code:"NoOptions",id:"NoOptions-component",children:"Renders a message indicating that there are no options to select from."})]})]})]})]}),eB=Object.freeze(Object.defineProperty({__proto__:null,default:J$},Symbol.toStringTag,{value:"Module"})),N1=[{id:100,animal:"Ant"},{id:101,animal:"Bat"},{id:102,animal:"Cat"},{id:103,animal:"Dog"}],tB=()=>{const[e,t]=ee.useState(!1),[n,r]=ee.useState(N1),a=i=>{r(i),t(!0)},s=()=>{r(N1.map(i=>({...i,moved:!1}))),t(!1)},l=({item:i,setNodeRef:c,style:d,listeners:u,...p})=>o.jsx("div",{ref:c,style:d,className:`sortable border item mar-r-2 pad pad-h-2 bgc-95 bgd-5 ${i.moved?"moved":""}`,...p,...u,children:i.animal});return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"flex space middle mar-b-4",children:[o.jsx("h3",{children:"Drag Items to Set Order"}),e&&o.jsx("div",{children:o.jsx(A,{color:"brown",size:"smallest",text:"Reset Order",iconLeft:"rotate-flipx",onClick:s})})]}),o.jsx("div",{className:"sortable list Horizontal",children:o.jsx(Sk,{items:n,Item:l,setOrder:a})})]})},nB=`import { HorizontalSort, Button } from '@/src/index.jsx'

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

export default HorizontalSortExample`,k4=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"HorizontalSort"})," component works exactly the same but constricts the items to be sorted horizontally."]}),o.jsx(pe,{Component:tB,code:nB})]}),rB=Object.freeze(Object.defineProperty({__proto__:null,default:k4},Symbol.toStringTag,{value:"Module"})),Si=[{id:100,animal:"Alan Aardvark"},{id:101,animal:"Brian Badger"},{id:102,animal:"Colin Camel"},{id:103,animal:"David Dog"},{id:104,animal:"Edward Elephant"},{id:105,animal:"Frank Ferret"},{id:106,animal:"Gerald Giraffe"},{id:107,animal:"Hector Hedgehog"}],oB=()=>{const[e,t]=ee.useState(!1),[n,r]=ee.useState(Si),a=i=>{r(i),t(!0)},s=()=>{r(Si.map(i=>({...i,moved:!1}))),t(!1)},l=({item:i,setNodeRef:c,style:d,listeners:u,...p})=>o.jsx("div",{ref:c,style:d,className:`sortable item border mar-r-2 mar-b-2 pad pad-h-2 bgc-95 bgd-5 ${i.moved?"moved":""}`,...p,...u,children:i.animal});return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"flex space middle mar-b-4",children:[o.jsx("h3",{children:"Drag Items to Set Order"}),e&&o.jsx("div",{children:o.jsx(A,{color:"brown",size:"smallest",text:"Reset Order",iconLeft:"rotate-flipx",onClick:s})})]}),o.jsx("div",{className:`sortable ${e?"changed":""}`,children:o.jsx(Xp,{items:n,Item:l,setOrder:a})})]})},aB=`import { Sortable, Button } from '@/src/index.jsx'

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

export default SortableExample`,T4=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"Sortable"})," component is a wrapper around"," ",o.jsx("a",{href:"https://dndkit.com/",children:"dnd kit"})," for creating sortable components."]}),o.jsx(pe,{Component:oB,code:aB})]}),sB=Object.freeze(Object.defineProperty({__proto__:null,default:T4},Symbol.toStringTag,{value:"Module"})),lB=()=>{const[e,t]=ee.useState(!1),[n,r]=ee.useState(Si),a=i=>{r(i),t(!0)},s=()=>{r(Si.map(i=>({...i,moved:!1}))),t(!1)},l=({item:i,setNodeRef:c,style:d,listeners:u,...p})=>o.jsx("div",{ref:c,style:d,className:`sortable item border mar-b-2 pad pad-h-2 bgc-95 bgd-5 ${i.moved?"moved":""}`,...p,...u,children:i.animal});return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"flex space middle mar-b-4",children:[o.jsx("h3",{className:"mar-t-none",children:"Drag Items to Set Order"}),e&&o.jsx("div",{children:o.jsx(A,{color:"brown",size:"smallest",text:"Reset Order",iconLeft:"rotate-flipx",onClick:s})})]}),o.jsx("div",{className:"sortable list vertical",children:o.jsx(jg,{items:n,Item:l,setOrder:a})})]})},iB=`import { VerticalSort, Button } from '@/src/index.jsx'

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

export default VerticalSortExample`,E4=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"VerticalSort"})," component works exactly the same but constricts the items to be sorted vertically."]}),o.jsx(pe,{Component:lB,code:iB})]}),cB=Object.freeze(Object.defineProperty({__proto__:null,default:E4},Symbol.toStringTag,{value:"Module"})),dB=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Sortable"}),o.jsx(T4,{}),o.jsx("h1",{children:"Vertical Sort"}),o.jsx(E4,{}),o.jsx("h1",{children:"Horizontal Sort"}),o.jsx(k4,{}),o.jsx(at,{tocName:"sortable",children:o.jsx(Jr,{children:o.jsxs("div",{className:"flow",children:[o.jsx(ce,{title:"Properties"}),o.jsxs(U,{code:"items",children:["An array of items to sort.  Each should be an object which must contain an ",o.jsx("code",{children:"id"})," property to uniquely identify it."]}),o.jsxs(U,{code:"Item",children:["A component used to render each item.  It will be passed an"," ",o.jsx("code",{children:"item"})," from the list of items, ",o.jsx("code",{children:"setNodeRef"})," ","which must be added to the generate element via the ",o.jsx("code",{children:"ref"})," ","property, a ",o.jsx("code",{children:"style"})," object containing style,",o.jsx("code",{children:"listeners"})," and other ",o.jsx("code",{children:"props"})," which should be added to the element."]}),o.jsxs(U,{code:"setOrder",children:["A function which will be called when the order of items changes. It will be pass an array containing the ",o.jsx("code",{children:"items"})," in the new order."]})]})})})]}),uB=Object.freeze(Object.defineProperty({__proto__:null,default:dB},Symbol.toStringTag,{value:"Module"})),pB=`## using npm
$ npm add @abw/badger-react-ui

## using yarn
$ yarn add @abw/badger-react-ui

## using pnpm
$ pnpm add @abw/badger-react-ui`,fB="import '@abw/badger-react-ui/styles/badger-css-react-ui.min.css';",hB="@import '@abw/badger-react-ui/styles/badger-css-react-ui.scss';",mB=`// If you're already importing Badger CSS styles
// something like this...
import '@abw/badger-css/styles/badger.min.css';

// ...then you only need to add this line to get
// the additional styles from Badger React UI
import '@abw/badger-react-ui/styles/badger-react-ui.min.css';`,gB=`// If you're already importing Badger CSS styles
// something like this...
import '@abw/badger-css/styles/badger.scss';

// ...then you only need to add this line to get
// the additional styles from Badger React UI
import '@abw/badger-react-ui/styles/badger-react-ui.scss';
`,xB=()=>o.jsxs("div",{className:"prose flow",children:[o.jsx("h1",{children:"Installation"}),o.jsx("h2",{children:"Adding to a Javascript Project"}),o.jsxs("p",{children:["Add ",o.jsx("code",{children:"@abw/badger-react-ui"})," to your Javascript project using your favourite package manager."]}),o.jsx(Rn,{code:pB,caption:"Installing",language:"shell",className:"mar-b-8",expand:!0}),o.jsx("h2",{children:"Importing the CSS"}),o.jsxs(Jr,{children:[o.jsx("p",{children:"The precise details on how you import the CSS will vary depending on what framework and bundler you're using.  For a React app using Vite or running under Next.js, for example, you can add the CSS file to your main application script as show below."}),o.jsxs("p",{children:["For other frameworks and/or bundlers you should consult the documentation on how to import a CSS file from a module in your"," ",o.jsx("code",{children:"node_modules"})," directory."]})]}),o.jsx(Rn,{code:fB,caption:"Combined CSS for Badger CSS / React UI",language:"js",className:"mar-b-8",expand:!0}),o.jsx("h2",{children:"Importing the SCSS"}),o.jsxs(Jr,{children:[o.jsx("p",{children:"If you're using SASS/SCSS to build your stylesheet then you can import the SCSS components."}),o.jsx("p",{children:"Add the following line to your main SCSS stylesheet source."})]}),o.jsx(Rn,{code:hB,caption:"Combined SCSS for Badger CSS / React UI",language:"scss",className:"mar-b-8",expand:!0}),o.jsx("h2",{children:"Includes Badger CSS!"}),o.jsxs("p",{children:["Note that the examples shown above import stylesheets that"," ",o.jsx("b",{children:"include"})," the styles from Badger CSS.  If you're already using Badger CSS and have it imported, or if you've customised your installation of Badger CSS, then you only need to import the additional styles for Badger React UI."]}),o.jsx(Rn,{code:mB,caption:"Separate CSS for Badger CSS / React UI",language:"js",className:"mar-b-8",expand:!0}),o.jsx(Rn,{code:gB,caption:"Separate SCSS for Badger CSS / React UI",language:"scss",className:"mar-b-8",expand:!0})]}),vB=Object.freeze(Object.defineProperty({__proto__:null,default:xB},Symbol.toStringTag,{value:"Module"})),yB=e=>v.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 900 348",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",xmlSpace:"preserve","xmlns:serif":"http://www.serif.com/",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:2},...e},v.createElement("path",{className:"white",d:"M251.572,212.02C254.513,216.061 254.715,224.14 250.095,227.707C250.444,223.032 248.285,217.636 246.595,215.207C245.351,213.421 240.529,209.129 235.734,208.678C239.528,206.432 248.479,207.771 251.572,212.02ZM384.14,296.071C385.221,300.139 369.105,297.678 368.976,310.316C368.912,316.686 371.784,320.829 368.158,321.337C364.186,321.893 363.702,317.912 363.009,312.67C361.525,301.448 369.403,297.943 376.939,295.687C383.239,293.8 383.721,294.493 384.14,296.071ZM253.718,205.387C253.325,205.165 252.924,204.95 252.515,204.744C240.306,198.572 226.195,201.866 221.023,212.097C216.954,220.147 219.624,230.108 226.897,236.996C223.855,235.725 220.886,234.082 218.121,232C201.872,219.763 198.65,197.554 202.498,192.469C205.797,188.109 229.508,185.044 245.757,197.281C248.897,199.645 251.533,202.419 253.718,205.387ZM237.701,38.979C234.959,40.644 229.11,29.763 219.15,31.701C213.297,32.839 209.964,30.344 213.732,27.34C224.434,18.806 242.755,35.909 237.701,38.979ZM102.358,65.632C92.93,59.118 82.319,55.79 70.261,59.171C61.606,61.598 55.943,67.285 53.203,74.67C51.916,74.775 50.609,74.911 49.293,75.073C41.358,76.053 33.068,77.961 26.855,79.508C45.336,54.696 68.07,46.037 90.212,45.935L91.775,45.928L92.073,44.393C93.513,36.977 89.339,29.817 78.425,24.264C102.932,19.041 133.157,24.498 149.387,33.721L151.514,34.93L152.164,32.571C153.117,29.113 152.884,20.563 147.007,12.944C177.743,18.398 201.051,28.288 219.375,41.206C253.271,69.998 271.19,107.581 286.422,143.401C303.117,182.661 316.606,219.801 344.235,241.041C344.731,241.562 345.232,242.081 345.737,242.598C354.202,251.26 369.687,264.151 388.439,280.71C390.567,282.59 392.536,284.445 394.289,286.258C390.175,286.465 384.884,287.861 378.121,289.401C355.898,294.457 355.058,304.229 357.619,320.184C358.932,328.361 362.585,332.134 367.854,333.381C347.657,338.931 337.347,342.519 312.425,337.814C273.532,330.471 236.683,316.046 225.943,310.994C225.749,310.608 225.423,310.285 224.995,310.101C210.606,303.913 200.922,296.04 196.833,286.988C198.796,285.944 200.367,284.755 201.74,283.804C202.604,283.205 202.819,282.017 202.22,281.154C201.622,280.29 200.434,280.074 199.57,280.673C196.577,282.748 192.528,286.255 184.628,285.578C183.581,285.489 182.657,286.266 182.568,287.313C182.478,288.361 183.256,289.284 184.303,289.373C187.94,289.685 190.882,289.256 193.326,288.475C197.252,297.211 205.873,305.078 218.736,311.412C193.53,320.617 171.273,314.508 151.338,302.875C130.029,290.441 111.338,271.747 94.517,258.202C80.516,246.928 67.672,239.285 55.79,240.915C48.382,241.931 41.226,246.463 34.375,256.107C23.226,231.606 38.024,207.024 52.658,191.434L54.205,189.786L52.319,188.541C38.022,179.099 21.81,184.908 11.009,196.975C10.204,187.276 14.741,173.112 22.182,160.21C29.69,147.192 40.209,135.4 51.636,130.932C122.17,117.473 156.365,176.933 192.036,228.629C212.984,258.988 259.699,294.806 348.432,323.461C343.645,308.274 345.837,301.003 349.276,294.022C327.909,284.035 301.478,267.497 284.086,236.018C236.493,149.873 215.639,88.568 146.875,71.303C134.894,68.295 119.263,65.091 102.358,65.632ZM102.275,79.762C100.823,87.371 78.096,65.294 73.617,77.189C65.317,99.228 57.382,86.649 59.352,80.667C69.456,49.974 103.609,72.771 102.275,79.762Z",style:{fill:"white"}}),v.createElement("path",{className:"black",d:"M52.054,78.596C51.294,78.672 50.529,78.759 49.759,78.854C39.593,80.108 28.834,82.925 22.777,84.472L17.915,85.714L20.728,81.559C40.142,52.889 64.62,42.703 88.525,42.149C88.888,35.685 83.351,30.024 71.924,25.526L66.722,23.478L72.092,21.924C97.213,14.653 130.162,19.649 148.812,29.092C148.924,24.696 147.199,17.339 140.471,11.578L135.382,7.22L142.003,8.25C168.067,12.303 189.097,19.357 206.402,28.658C206.575,28.721 206.748,28.783 206.921,28.846C208.323,24.341 212.385,20.472 219.865,21.145C239.675,22.925 243.917,32.841 244.961,51.125C270.1,72.457 287.235,102.584 300.677,133.136C312.72,160.511 321.799,188.221 331.031,210.219C334.652,218.847 338.295,226.594 342.151,233.093C344.174,235.417 346.275,237.699 348.461,239.935C356.894,248.564 372.28,261.359 390.96,277.855C394.6,281.069 397.773,284.243 400.276,287.281C402.859,288.644 404.62,291.472 405.778,296.536C405.975,297.173 406.119,297.795 406.209,298.403C406.253,298.697 406.287,298.994 406.314,299.294C406.615,301.13 406.861,303.2 407.058,305.527C407.84,314.777 405.022,326.993 390.631,330.7C387.826,331.422 385.121,332.093 382.547,332.63C378.775,333.843 375.504,334.896 375.505,334.895C353.988,343.064 340.05,346.906 311.718,341.557C270.836,333.838 232.195,318.357 223.053,313.826C195.401,325.115 171.094,318.814 149.418,306.165C127.941,293.633 109.081,274.82 92.128,261.169C85.494,255.827 79.163,251.286 73.076,248.283C67.258,245.412 61.69,243.95 56.308,244.689C49.102,245.677 42.338,250.617 35.728,260.909L33.983,263.626L32.45,260.785C18.325,234.619 32.7,207.872 48.29,190.557C35.023,183.325 20.386,190.519 11.384,202.521L9.087,205.583L8.03,201.904C5.111,191.745 9.777,174.095 18.883,158.307C24.331,148.86 31.344,140.108 39.121,133.986C28.037,137.259 16.107,142.234 3.209,149.173C16.216,114.812 33.291,93.85 51.552,81.51C51.677,80.52 51.845,79.548 52.054,78.596ZM251.572,212.02C248.479,207.771 239.528,206.432 235.734,208.678C240.529,209.129 245.351,213.421 246.595,215.207C248.285,217.636 250.444,223.032 250.095,227.707C254.715,224.14 254.513,216.061 251.572,212.02ZM384.14,296.071C383.721,294.493 383.239,293.8 376.939,295.687C369.403,297.943 361.525,301.448 363.009,312.67C363.702,317.912 364.186,321.893 368.158,321.337C371.784,320.829 368.912,316.686 368.976,310.316C369.105,297.678 385.221,300.139 384.14,296.071ZM253.718,205.387C251.533,202.419 248.897,199.645 245.757,197.281C229.508,185.044 205.797,188.109 202.498,192.469C198.65,197.554 201.872,219.763 218.121,232C220.886,234.082 223.855,235.725 226.897,236.996C219.624,230.108 216.954,220.147 221.023,212.097C226.195,201.866 240.306,198.572 252.515,204.744C252.924,204.95 253.325,205.165 253.718,205.387ZM237.701,38.979C242.755,35.909 224.434,18.806 213.732,27.34C209.964,30.344 213.297,32.839 219.15,31.701C229.11,29.763 234.959,40.644 237.701,38.979ZM102.358,65.632C119.263,65.091 134.894,68.295 146.875,71.303C215.639,88.568 236.493,149.873 284.086,236.018C301.478,267.497 327.909,284.035 349.276,294.022C345.837,301.003 343.645,308.274 348.432,323.461C259.699,294.806 212.984,258.988 192.036,228.629C156.365,176.933 122.17,117.473 51.636,130.932C40.209,135.4 29.69,147.192 22.182,160.21C14.741,173.112 10.204,187.276 11.009,196.975C21.81,184.908 38.022,179.099 52.319,188.541L54.205,189.786L52.658,191.434C38.024,207.024 23.226,231.606 34.375,256.107C41.226,246.463 48.382,241.931 55.79,240.915C67.672,239.285 80.516,246.928 94.517,258.202C111.338,271.747 130.029,290.441 151.338,302.875C171.273,314.508 193.53,320.617 218.736,311.412C205.873,305.078 197.252,297.211 193.326,288.475C190.882,289.256 187.94,289.685 184.303,289.373C183.256,289.284 182.478,288.361 182.568,287.313C182.657,286.266 183.581,285.489 184.628,285.578C192.528,286.255 196.577,282.748 199.57,280.673C200.434,280.074 201.622,280.29 202.22,281.154C202.819,282.017 202.604,283.205 201.74,283.804C200.367,284.755 198.796,285.944 196.833,286.988C200.922,296.04 210.606,303.913 224.995,310.101C225.423,310.285 225.749,310.608 225.943,310.994C236.683,316.046 273.532,330.471 312.425,337.814C337.347,342.519 347.657,338.931 367.854,333.381C362.585,332.134 358.932,328.361 357.619,320.184C355.058,304.229 355.898,294.457 378.121,289.401C384.884,287.861 390.175,286.465 394.289,286.258C392.536,284.445 390.567,282.59 388.439,280.71C369.687,264.151 354.202,251.26 345.737,242.598C345.232,242.081 344.731,241.562 344.235,241.041C316.606,219.801 303.117,182.661 286.422,143.401C271.19,107.581 253.271,69.998 219.375,41.206C201.051,28.288 177.743,18.398 147.007,12.944C152.884,20.563 153.117,29.113 152.164,32.571L151.514,34.93L149.387,33.721C133.157,24.498 102.932,19.041 78.425,24.264C89.339,29.817 93.513,36.977 92.073,44.393L91.775,45.928L90.212,45.935C68.07,46.037 45.336,54.696 26.855,79.508C33.068,77.961 41.358,76.053 49.293,75.073C50.609,74.911 51.916,74.775 53.203,74.67C55.943,67.285 61.606,61.598 70.261,59.171C82.319,55.79 92.93,59.118 102.358,65.632ZM102.275,79.762C103.609,72.771 69.456,49.974 59.352,80.667C57.382,86.649 65.317,99.228 73.617,77.189C78.096,65.294 100.823,87.371 102.275,79.762Z"}),v.createElement("path",{className:"badger",d:"M418.81,39.948C419.704,39.68 421.135,39.389 423.103,39.076C425.07,38.763 427.082,38.607 429.139,38.607C431.107,38.607 432.873,38.741 434.438,39.009C436.003,39.277 437.322,39.814 438.396,40.619C439.469,41.424 440.274,42.519 440.81,43.905C441.347,45.292 441.615,47.103 441.615,49.338L441.615,62.485C443.851,61.591 445.975,60.965 447.987,60.607C449.999,60.249 452.213,60.07 454.628,60.07C458.92,60.07 462.989,60.831 466.835,62.351C470.681,63.871 474.079,66.085 477.03,68.991C479.982,71.898 482.307,75.497 484.006,79.79C485.705,84.083 486.555,89.046 486.555,94.681C486.555,100.494 485.683,105.569 483.939,109.907C482.195,114.244 479.758,117.844 476.628,120.706C473.498,123.567 469.675,125.736 465.158,127.212C460.642,128.687 455.656,129.425 450.201,129.425C444.298,129.425 439.29,128.732 435.176,127.346C431.062,125.96 427.574,124.238 424.712,122.181C420.777,119.409 418.81,115.831 418.81,111.449L418.81,39.948ZM450.201,111.449C454.314,111.449 457.512,110.041 459.792,107.224C462.073,104.406 463.213,100.226 463.213,94.681C463.213,89.046 462.05,84.843 459.725,82.071C457.4,79.298 454.27,77.912 450.335,77.912C448.546,77.912 447.003,78.091 445.707,78.449C444.41,78.806 443.001,79.343 441.481,80.059L441.481,109.303C442.465,109.929 443.65,110.443 445.036,110.846C446.422,111.248 448.144,111.449 450.201,111.449ZM524.787,60.07C529.617,60.07 534.021,60.562 538.001,61.546C541.981,62.53 545.379,64.028 548.196,66.04C551.013,68.052 553.182,70.601 554.702,73.686C556.223,76.772 556.983,80.416 556.983,84.62L556.983,114.669C556.983,116.994 556.335,118.895 555.038,120.37C553.741,121.846 552.198,123.12 550.41,124.193C544.597,127.681 536.413,129.425 525.86,129.425C521.121,129.425 516.85,128.978 513.049,128.084C509.248,127.189 505.984,125.848 503.256,124.059C500.529,122.271 498.427,119.99 496.951,117.218C495.476,114.445 494.738,111.226 494.738,107.559C494.738,101.388 496.571,96.648 500.238,93.339C503.905,90.03 509.584,87.973 517.275,87.168L534.848,85.29L534.848,84.351C534.848,81.758 533.708,79.902 531.428,78.784C529.147,77.666 525.86,77.107 521.568,77.107C518.169,77.107 514.86,77.465 511.641,78.18C508.421,78.896 505.515,79.79 502.921,80.863C501.758,80.059 500.775,78.829 499.97,77.174C499.165,75.52 498.762,73.798 498.762,72.01C498.762,69.684 499.321,67.829 500.439,66.442C501.557,65.056 503.279,63.871 505.604,62.887C508.198,61.904 511.261,61.188 514.793,60.741C518.326,60.294 521.657,60.07 524.787,60.07ZM525.86,112.791C527.381,112.791 529.058,112.634 530.891,112.321C532.724,112.008 534.088,111.583 534.983,111.047L534.983,100.315L525.324,101.12C522.82,101.299 520.763,101.835 519.153,102.73C517.543,103.624 516.738,104.965 516.738,106.754C516.738,108.543 517.431,109.996 518.818,111.114C520.204,112.232 522.551,112.791 525.86,112.791ZM568.117,94.681C568.117,88.778 569.012,83.658 570.8,79.321C572.589,74.983 575.071,71.384 578.245,68.522C581.42,65.66 585.132,63.536 589.38,62.15C593.628,60.763 598.211,60.07 603.13,60.07C604.919,60.07 606.663,60.227 608.362,60.54C610.061,60.853 611.447,61.233 612.52,61.68L612.52,39.948C613.415,39.68 614.846,39.389 616.813,39.076C618.781,38.763 620.793,38.607 622.85,38.607C624.817,38.607 626.584,38.741 628.149,39.009C629.714,39.277 631.033,39.814 632.106,40.619C633.179,41.424 633.984,42.519 634.521,43.905C635.057,45.292 635.326,47.103 635.326,49.338L635.326,112.925C635.326,117.128 633.358,120.482 629.423,122.986C626.83,124.685 623.476,126.183 619.362,127.48C615.248,128.777 610.508,129.425 605.142,129.425C599.329,129.425 594.12,128.62 589.514,127.011C584.908,125.401 581.018,123.076 577.843,120.035C574.668,116.994 572.253,113.35 570.599,109.102C568.944,104.854 568.117,100.047 568.117,94.681ZM606.215,77.912C601.386,77.912 597.675,79.298 595.081,82.071C592.488,84.843 591.191,89.046 591.191,94.681C591.191,100.226 592.398,104.406 594.813,107.224C597.227,110.041 600.715,111.449 605.276,111.449C606.886,111.449 608.339,111.203 609.636,110.711C610.933,110.22 611.939,109.661 612.655,109.035L612.655,79.522C610.866,78.449 608.72,77.912 606.215,77.912ZM681.339,60.07C686.436,60.07 691.064,60.719 695.223,62.016C699.382,63.312 702.892,64.989 705.754,67.046C707.542,68.298 708.951,69.684 709.979,71.205C711.008,72.725 711.522,74.693 711.522,77.107L711.522,124.059C711.522,128.799 710.628,132.891 708.839,136.334C707.051,139.777 704.613,142.639 701.528,144.919C698.443,147.2 694.821,148.877 690.662,149.95C686.503,151.023 682.054,151.56 677.314,151.56C669.176,151.56 662.781,150.464 658.131,148.273C653.48,146.082 651.155,142.527 651.155,137.608C651.155,135.551 651.58,133.74 652.43,132.175C653.279,130.61 654.241,129.425 655.314,128.62C657.907,130.051 660.836,131.259 664.101,132.242C667.365,133.226 670.741,133.718 674.229,133.718C679.058,133.718 682.904,132.913 685.766,131.303C688.627,129.694 690.058,127.1 690.058,123.523L690.058,121.376C686.392,122.986 681.92,123.791 676.643,123.791C672.619,123.791 668.796,123.187 665.174,121.98C661.552,120.773 658.377,118.895 655.649,116.346C652.922,113.797 650.73,110.51 649.076,106.486C647.421,102.461 646.594,97.677 646.594,92.132C646.594,86.677 647.466,81.937 649.21,77.912C650.954,73.888 653.369,70.556 656.454,67.918C659.54,65.28 663.206,63.312 667.454,62.016C671.702,60.719 676.33,60.07 681.339,60.07ZM689.656,79.522C689.03,79.164 688.113,78.806 686.906,78.449C685.699,78.091 684.201,77.912 682.412,77.912C678.03,77.912 674.743,79.142 672.552,81.601C670.361,84.061 669.265,87.571 669.265,92.132C669.265,97.319 670.361,101.053 672.552,103.333C674.743,105.614 677.538,106.754 680.936,106.754C684.603,106.754 687.51,105.904 689.656,104.205L689.656,79.522ZM760.084,129.425C754.807,129.425 749.911,128.687 745.395,127.212C740.878,125.736 736.943,123.523 733.59,120.571C730.236,117.62 727.598,113.909 725.675,109.437C723.752,104.965 722.791,99.734 722.791,93.742C722.791,87.839 723.752,82.764 725.675,78.516C727.598,74.268 730.124,70.78 733.254,68.052C736.384,65.325 739.962,63.312 743.986,62.016C748.011,60.719 752.124,60.07 756.328,60.07C761.068,60.07 765.383,60.786 769.273,62.217C773.163,63.648 776.517,65.615 779.334,68.119C782.151,70.623 784.342,73.619 785.908,77.107C787.473,80.595 788.255,84.396 788.255,88.51C788.255,91.551 787.406,93.876 785.706,95.486C784.007,97.095 781.637,98.124 778.596,98.571L745.462,103.535C746.445,106.486 748.458,108.699 751.498,110.175C754.539,111.651 758.027,112.388 761.962,112.388C765.629,112.388 769.094,111.919 772.359,110.98C775.623,110.041 778.283,108.945 780.34,107.693C781.771,108.587 782.979,109.84 783.962,111.449C784.946,113.059 785.438,114.758 785.438,116.547C785.438,120.571 783.56,123.567 779.804,125.535C776.942,127.055 773.722,128.084 770.145,128.62C766.568,129.157 763.214,129.425 760.084,129.425ZM756.328,76.705C754.181,76.705 752.326,77.063 750.761,77.778C749.196,78.493 747.921,79.41 746.937,80.528C745.954,81.646 745.216,82.898 744.724,84.284C744.232,85.67 743.941,87.079 743.852,88.51L766.791,84.754C766.523,82.965 765.539,81.176 763.84,79.388C762.141,77.599 759.637,76.705 756.328,76.705ZM822.061,127.145C821.166,127.413 819.758,127.681 817.835,127.95C815.912,128.218 813.922,128.352 811.865,128.352C809.898,128.352 808.131,128.218 806.566,127.95C805.001,127.681 803.682,127.145 802.609,126.34C801.536,125.535 800.709,124.439 800.127,123.053C799.546,121.667 799.255,119.856 799.255,117.62L799.255,77.376C799.255,75.319 799.635,73.552 800.396,72.077C801.156,70.601 802.251,69.282 803.682,68.119C805.113,66.957 806.879,65.906 808.981,64.967C811.083,64.028 813.341,63.201 815.756,62.485C818.17,61.77 820.674,61.211 823.268,60.808C825.861,60.406 828.455,60.205 831.049,60.205C835.341,60.205 838.74,61.032 841.244,62.686C843.748,64.341 845,67.046 845,70.802C845,72.054 844.821,73.284 844.463,74.491C844.106,75.699 843.659,76.794 843.122,77.778C841.244,77.778 839.321,77.867 837.354,78.046C835.386,78.225 833.463,78.493 831.585,78.851C829.707,79.209 827.941,79.589 826.286,79.991C824.632,80.394 823.223,80.863 822.061,81.4L822.061,127.145Z"}),v.createElement("path",{className:"react-ui",d:"M456.264,259.551C455.489,259.783 454.269,260.016 452.604,260.248C450.939,260.48 449.215,260.596 447.434,260.596C445.73,260.596 444.2,260.48 442.845,260.248C441.49,260.016 440.347,259.551 439.418,258.854C438.488,258.157 437.772,257.208 437.268,256.007C436.765,254.807 436.513,253.239 436.513,251.302L436.513,216.449C436.513,214.667 436.842,213.138 437.501,211.86C438.159,210.582 439.108,209.439 440.347,208.432C441.586,207.426 443.116,206.516 444.936,205.702C446.756,204.889 448.712,204.173 450.803,203.553C452.894,202.933 455.063,202.449 457.309,202.101C459.555,201.752 461.801,201.578 464.047,201.578C467.765,201.578 470.708,202.294 472.877,203.727C475.046,205.16 476.13,207.503 476.13,210.756C476.13,211.84 475.975,212.905 475.665,213.951C475.355,214.997 474.968,215.945 474.504,216.797C472.877,216.797 471.212,216.875 469.508,217.03C467.804,217.185 466.139,217.417 464.512,217.727C462.886,218.037 461.356,218.366 459.923,218.714C458.49,219.063 457.27,219.469 456.264,219.934L456.264,259.551ZM511.913,261.526C507.343,261.526 503.103,260.887 499.191,259.609C495.28,258.331 491.872,256.414 488.968,253.858C486.063,251.302 483.778,248.088 482.113,244.215C480.448,240.343 479.615,235.812 479.615,230.623C479.615,225.511 480.448,221.115 482.113,217.436C483.778,213.757 485.966,210.737 488.677,208.374C491.388,206.012 494.486,204.269 497.971,203.146C501.457,202.023 505.02,201.462 508.66,201.462C512.765,201.462 516.502,202.081 519.871,203.321C523.24,204.56 526.145,206.264 528.584,208.432C531.024,210.601 532.922,213.196 534.277,216.216C535.633,219.237 536.31,222.529 536.31,226.092C536.31,228.725 535.574,230.739 534.103,232.133C532.631,233.527 530.579,234.418 527.945,234.805L499.249,239.104C500.101,241.659 501.844,243.576 504.477,244.854C507.111,246.132 510.131,246.771 513.539,246.771C516.715,246.771 519.716,246.365 522.543,245.551C525.37,244.738 527.674,243.789 529.456,242.705C530.695,243.48 531.741,244.564 532.593,245.958C533.445,247.352 533.871,248.824 533.871,250.373C533.871,253.858 532.244,256.453 528.991,258.157C526.513,259.473 523.724,260.364 520.626,260.829C517.528,261.294 514.624,261.526 511.913,261.526ZM508.66,215.868C506.801,215.868 505.194,216.178 503.838,216.797C502.483,217.417 501.379,218.211 500.527,219.179C499.675,220.147 499.036,221.231 498.61,222.432C498.184,223.632 497.933,224.852 497.855,226.092L517.722,222.839C517.489,221.29 516.637,219.74 515.166,218.191C513.694,216.642 511.526,215.868 508.66,215.868ZM569.073,201.462C573.255,201.462 577.069,201.888 580.516,202.74C583.963,203.592 586.906,204.889 589.346,206.632C591.785,208.374 593.664,210.582 594.98,213.254C596.297,215.926 596.955,219.082 596.955,222.722L596.955,248.746C596.955,250.76 596.394,252.406 595.271,253.684C594.148,254.962 592.812,256.066 591.263,256.995C586.228,260.016 579.141,261.526 570.002,261.526C565.897,261.526 562.199,261.139 558.907,260.364C555.615,259.59 552.788,258.428 550.426,256.879C548.064,255.33 546.244,253.355 544.966,250.954C543.688,248.553 543.049,245.764 543.049,242.589C543.049,237.245 544.636,233.14 547.812,230.274C550.987,227.408 555.906,225.627 562.567,224.93L577.786,223.303L577.786,222.49C577.786,220.244 576.798,218.637 574.823,217.669C572.848,216.7 570.002,216.216 566.284,216.216C563.341,216.216 560.475,216.526 557.687,217.146C554.899,217.765 552.382,218.54 550.135,219.469C549.129,218.772 548.277,217.707 547.58,216.275C546.883,214.842 546.534,213.351 546.534,211.802C546.534,209.788 547.018,208.181 547.986,206.98C548.954,205.78 550.445,204.754 552.459,203.902C554.705,203.05 557.358,202.43 560.417,202.043C563.477,201.655 566.362,201.462 569.073,201.462ZM570.002,247.12C571.319,247.12 572.771,246.984 574.359,246.713C575.946,246.442 577.128,246.074 577.902,245.609L577.902,236.315L569.537,237.012C567.369,237.167 565.587,237.632 564.193,238.406C562.799,239.181 562.102,240.343 562.102,241.892C562.102,243.441 562.702,244.699 563.903,245.668C565.103,246.636 567.136,247.12 570.002,247.12ZM640.871,217.03C638.934,217.03 637.095,217.339 635.352,217.959C633.609,218.579 632.099,219.489 630.821,220.689C629.543,221.89 628.517,223.381 627.743,225.162C626.968,226.944 626.581,229.035 626.581,231.436C626.581,236.238 627.955,239.839 630.705,242.24C633.455,244.641 636.804,245.842 640.754,245.842C643.078,245.842 645.092,245.571 646.796,245.029C648.5,244.486 650.01,243.906 651.327,243.286C652.876,244.37 654.037,245.551 654.812,246.829C655.587,248.107 655.974,249.637 655.974,251.418C655.974,254.594 654.463,257.053 651.443,258.796C648.422,260.538 644.24,261.41 638.896,261.41C634.016,261.41 629.601,260.693 625.651,259.26C621.701,257.828 618.313,255.814 615.486,253.219C612.659,250.625 610.471,247.507 608.922,243.867C607.373,240.227 606.598,236.199 606.598,231.784C606.598,226.672 607.431,222.2 609.096,218.366C610.761,214.532 613.027,211.376 615.892,208.897C618.758,206.419 622.069,204.56 625.826,203.321C629.582,202.081 633.551,201.462 637.734,201.462C643.31,201.462 647.609,202.469 650.63,204.482C653.65,206.496 655.161,209.091 655.161,212.266C655.161,213.738 654.812,215.113 654.115,216.391C653.418,217.669 652.605,218.772 651.675,219.702C650.359,219.082 648.771,218.482 646.912,217.901C645.053,217.32 643.039,217.03 640.871,217.03ZM685.599,240.265C685.599,242.279 686.238,243.712 687.516,244.564C688.794,245.416 690.595,245.842 692.918,245.842C694.08,245.842 695.281,245.745 696.52,245.551C697.759,245.358 698.844,245.106 699.773,244.796C700.47,245.648 701.07,246.597 701.574,247.643C702.077,248.688 702.329,249.947 702.329,251.418C702.329,254.362 701.225,256.763 699.018,258.621C696.81,260.48 692.918,261.41 687.342,261.41C680.526,261.41 675.279,259.861 671.6,256.763C667.921,253.665 666.081,248.63 666.081,241.659L666.081,191.935C666.933,191.703 668.153,191.451 669.741,191.18C671.329,190.909 673.013,190.773 674.795,190.773C678.203,190.773 680.855,191.374 682.753,192.574C684.65,193.775 685.599,196.311 685.599,200.184L685.599,207.619L700.819,207.619C701.283,208.471 701.729,209.536 702.155,210.814C702.581,212.092 702.794,213.506 702.794,215.055C702.794,217.765 702.193,219.721 700.993,220.922C699.792,222.122 698.185,222.722 696.171,222.722L685.599,222.722L685.599,240.265ZM799.454,233.643C799.454,237.826 798.737,241.64 797.305,245.087C795.872,248.533 793.8,251.476 791.089,253.916C788.378,256.356 785.086,258.234 781.214,259.551C777.341,260.868 772.965,261.526 768.086,261.526C763.206,261.526 758.83,260.868 754.958,259.551C751.085,258.234 747.793,256.356 745.082,253.916C742.372,251.476 740.3,248.533 738.867,245.087C737.434,241.64 736.718,237.826 736.718,233.643L736.718,189.263C737.57,189.108 738.925,188.895 740.784,188.624C742.643,188.353 744.424,188.217 746.128,188.217C747.909,188.217 749.478,188.353 750.833,188.624C752.189,188.895 753.331,189.379 754.261,190.076C755.19,190.773 755.887,191.742 756.352,192.981C756.816,194.22 757.049,195.847 757.049,197.86L757.049,233.295C757.049,237.012 758.075,239.917 760.128,242.008C762.18,244.099 764.833,245.145 768.086,245.145C771.416,245.145 774.088,244.099 776.102,242.008C778.116,239.917 779.123,237.012 779.123,233.295L779.123,189.263C779.975,189.108 781.33,188.895 783.189,188.624C785.048,188.353 786.829,188.217 788.533,188.217C790.314,188.217 791.883,188.353 793.238,188.624C794.594,188.895 795.736,189.379 796.666,190.076C797.595,190.773 798.292,191.742 798.757,192.981C799.221,194.22 799.454,195.847 799.454,197.86L799.454,233.643ZM834.54,259.202C833.688,259.435 832.352,259.667 830.531,259.899C828.711,260.132 826.911,260.248 825.129,260.248C823.348,260.248 821.779,260.112 820.424,259.841C819.069,259.57 817.926,259.086 816.997,258.389C816.067,257.692 815.37,256.724 814.906,255.485C814.441,254.245 814.208,252.619 814.208,250.605L814.208,189.263C815.06,189.108 816.416,188.895 818.275,188.624C820.134,188.353 821.915,188.217 823.619,188.217C825.4,188.217 826.969,188.353 828.324,188.624C829.68,188.895 830.822,189.379 831.751,190.076C832.681,190.773 833.378,191.742 833.843,192.981C834.307,194.22 834.54,195.847 834.54,197.86L834.54,259.202Z"})),jB=e=>v.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 440 440",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",xmlSpace:"preserve","xmlns:serif":"http://www.serif.com/",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:1.5},...e},v.createElement("circle",{cx:220,cy:220,r:144,style:{fill:"rgb(136,136,136)",stroke:"black",strokeWidth:"0.33px"}}),v.createElement("path",{d:"M220,12C334.798,12 428,105.202 428,220C428,334.798 334.798,428 220,428C105.202,428 12,334.798 12,220C12,105.202 105.202,12 220,12ZM220,76C140.524,76 76,140.524 76,220C76,299.476 140.524,364 220,364C299.476,364 364,299.476 364,220C364,140.524 299.476,76 220,76Z",style:{fill:"rgb(206,206,206)",stroke:"black",strokeWidth:"6.67px"}}),v.createElement("path",{d:"M41.319,232.772C38.119,232.829 35.878,232.789 34.556,232.652C33.233,232.516 32.025,232.097 30.891,231.317C29.797,230.537 28.939,229.512 28.315,228.163C27.731,226.853 27.383,225.299 27.351,223.499C27.321,221.82 27.574,220.295 28.11,218.925C28.645,217.555 29.466,216.461 30.532,215.641C31.636,214.782 32.828,214.28 34.145,214.097C35.421,213.914 37.7,213.793 40.979,213.735L46.378,213.638C49.538,213.582 51.819,213.621 53.142,213.758C54.464,213.894 55.672,214.313 56.766,215.093C57.9,215.873 58.758,216.898 59.343,218.248C59.966,219.557 60.274,221.112 60.306,222.912C60.336,224.591 60.083,226.116 59.547,227.486C59.052,228.855 58.231,229.95 57.126,230.769C56.021,231.629 54.829,232.131 53.553,232.313C52.236,232.497 49.957,232.618 46.718,232.675L41.319,232.772ZM51.53,224.348C53.01,224.322 53.968,224.225 54.365,224.058C54.762,223.891 54.957,223.567 54.947,223.047C54.94,222.607 54.774,222.29 54.45,222.056C54.126,221.862 53.124,221.759 51.484,221.789L36.727,222.052C34.887,222.085 33.769,222.185 33.331,222.313C32.934,222.48 32.7,222.844 32.71,223.364C32.72,223.924 32.966,224.279 33.489,224.43C33.972,224.581 35.173,224.64 37.012,224.607L51.53,224.348ZM60.115,235.306L61.347,243.494C61.681,245.709 61.739,247.439 61.562,248.68C61.424,249.914 61.047,250.901 60.464,251.596C59.92,252.284 59.189,252.799 58.275,253.179C57.356,253.52 55.95,253.853 53.972,254.151L51.243,254.562C49.265,254.859 47.772,254.882 46.796,254.584C45.827,254.325 45.002,253.681 44.361,252.645C43.719,251.609 43.228,250.226 42.96,248.447L42.632,246.271L30.054,248.165L28.827,240.017L60.115,235.306ZM55.962,244.264L48.012,245.461L48.101,246.054C48.214,246.806 48.45,247.296 48.887,247.514C49.285,247.737 50.06,247.782 51.207,247.609L53.778,247.222C54.846,247.061 55.534,246.796 55.797,246.392C56.066,246.028 56.117,245.293 55.962,244.264ZM65.668,263.888L35.019,271.744L32.973,263.762L63.622,255.906L65.668,263.888ZM73.017,284.844L43.393,295.958L40.864,289.217L52.805,280.165L39.36,285.21L36.944,278.768L66.567,267.654L68.984,274.095L57.267,283.404L70.6,278.402L73.017,284.844ZM78.538,295.659L50.283,309.897L46.575,302.539L74.83,288.301L78.538,295.659ZM74.884,324.988C72.198,326.727 70.274,327.877 69.079,328.459C67.884,329.042 66.637,329.325 65.262,329.262C63.921,329.177 62.651,328.76 61.408,327.945C60.221,327.141 59.105,326.005 58.127,324.494C57.214,323.084 56.623,321.655 56.354,320.209C56.085,318.763 56.204,317.4 56.676,316.142C57.159,314.828 57.906,313.773 58.927,312.922C59.915,312.092 61.786,310.786 64.539,309.004L69.073,306.07C71.725,304.353 73.683,303.181 74.878,302.598C76.073,302.015 77.32,301.733 78.661,301.817C80.036,301.88 81.306,302.297 82.515,303.135C83.736,303.917 84.819,305.074 85.797,306.585C86.71,307.996 87.3,309.424 87.569,310.87C87.872,312.294 87.753,313.657 87.248,314.937C86.764,316.251 86.017,317.306 85.03,318.136C84.008,318.987 82.138,320.293 79.418,322.054L74.884,324.988ZM79.105,312.441C80.347,311.637 81.11,311.048 81.358,310.697C81.607,310.345 81.601,309.968 81.319,309.531C81.08,309.162 80.772,308.98 80.372,308.952C79.995,308.958 79.09,309.401 77.714,310.292L65.322,318.312C63.778,319.312 62.881,319.987 62.577,320.327C62.328,320.679 62.322,321.111 62.605,321.548C62.909,322.018 63.306,322.19 63.829,322.042C64.319,321.915 65.37,321.33 66.915,320.331L79.105,312.441ZM104.097,331.146L80.061,351.721L75.379,346.251L83.505,333.662L72.595,343L68.121,337.773L92.158,317.198L96.632,322.425L88.805,335.179L99.624,325.92L104.097,331.146ZM116.973,342.973L99.303,369.64L93.032,363.991L96.536,359.503L94.337,357.522L90.179,361.421L83.849,355.718L108.146,335.022L116.973,342.973ZM100.106,355.182C102.219,352.239 104.837,348.676 108.073,344.485C103.407,348.41 100.049,351.361 98.026,353.308L100.106,355.182ZM133.778,355.495L130.062,360.657L126.102,357.806L111.332,378.323L104.645,373.509L119.414,352.992L115.486,350.164L119.202,345.002L133.778,355.495ZM135.754,356.629L147.731,363.322L144.628,368.874L139.845,366.2L136.918,371.438L141.387,373.936L138.46,379.173L133.991,376.676L130.596,382.752L135.833,385.678L132.75,391.196L120.32,384.249L135.754,356.629ZM150.451,364.831L156.15,367.169C159.813,368.672 162.217,369.874 163.376,370.738C164.534,371.603 165.306,372.568 165.653,373.618C166,374.669 166.095,375.702 165.849,376.725C165.654,377.726 164.969,379.607 163.83,382.382L159.625,392.633C158.547,395.261 157.708,396.991 157.099,397.736C156.476,398.518 155.781,399.054 154.939,399.314C154.149,399.553 153.22,399.604 152.256,399.424C151.255,399.23 149.84,398.779 148.027,398.035L138.442,394.103L150.451,364.831ZM156.01,372.991L148.115,392.235C149.188,392.675 149.946,392.726 150.387,392.388C150.828,392.051 151.462,390.927 152.267,388.966L156.927,377.605C157.474,376.272 157.749,375.391 157.827,374.99C157.904,374.59 157.826,374.255 157.569,373.933C157.348,373.627 156.824,373.325 156.01,372.991ZM194.889,388.345L187.399,386.838L187.865,384.525C188.078,383.466 188.102,382.736 187.961,382.422C187.828,382.069 187.538,381.888 187.107,381.802C186.636,381.707 186.205,381.824 185.891,382.169C185.537,382.506 185.301,383.07 185.135,383.894C184.93,384.913 184.929,385.729 185.101,386.294C185.265,386.899 185.884,387.676 186.989,388.673C190.171,391.517 192.051,393.731 192.724,395.254C193.389,396.816 193.418,399.106 192.802,402.165C192.361,404.361 191.755,405.953 191.04,406.87C190.317,407.826 189.124,408.484 187.484,408.929C185.891,409.343 184.095,409.349 182.134,408.954C179.977,408.52 178.221,407.718 176.857,406.587C175.486,405.495 174.679,404.231 174.461,402.882C174.243,401.532 174.37,399.681 174.836,397.367L175.246,395.328L182.736,396.835L181.979,400.599C181.742,401.776 181.71,402.545 181.843,402.898C182.007,403.298 182.328,403.526 182.877,403.636C183.387,403.739 183.866,403.59 184.18,403.246C184.541,402.869 184.785,402.266 184.951,401.442C185.322,399.599 185.323,398.375 184.924,397.724C184.532,397.033 183.467,395.839 181.727,394.143C179.995,392.407 178.859,391.159 178.35,390.444C177.802,389.722 177.419,388.788 177.2,387.642C176.982,386.497 177.062,385.085 177.393,383.438C177.875,381.046 178.535,379.384 179.345,378.404C180.193,377.432 181.347,376.767 182.798,376.447C184.297,376.095 185.968,376.105 187.89,376.492C189.968,376.91 191.709,377.586 193.057,378.592C194.374,379.551 195.18,380.611 195.446,381.725C195.711,382.839 195.631,384.659 195.142,387.09L194.889,388.345ZM200.214,379.311L213.892,380.38L213.397,386.721L207.933,386.294L207.466,392.276L212.57,392.675L212.102,398.657L206.998,398.257L206.456,405.196L212.437,405.664L211.945,411.965L197.748,410.855L200.214,379.311ZM225.777,380.267L226.42,405.578L231.418,405.452L231.578,411.77L218.342,412.105L217.54,380.476L225.777,380.267ZM233.537,379.948L247.346,378.191L248.149,384.5L242.514,385.217L243.272,391.169L248.311,390.528L249.069,396.479L244.029,397.121L245.706,410.295L237.532,411.335L233.537,379.948ZM258.549,375.749L265.335,406.653L257.287,408.42L250.501,377.517L258.549,375.749ZM281.962,378.541L274.713,380.955L273.968,378.716C273.626,377.691 273.285,377.046 273.007,376.844C272.716,376.603 272.374,376.591 271.957,376.73C271.501,376.882 271.185,377.198 271.084,377.653C270.945,378.121 271.02,378.728 271.286,379.525C271.615,380.512 272.019,381.22 272.449,381.625C272.892,382.068 273.815,382.435 275.27,382.751C279.444,383.638 282.176,384.625 283.516,385.612C284.869,386.637 286.033,388.61 287.019,391.57C287.727,393.696 287.992,395.378 287.827,396.529C287.675,397.718 286.967,398.882 285.765,400.083C284.588,401.234 283.032,402.132 281.135,402.764C279.047,403.459 277.125,403.636 275.379,403.332C273.646,403.066 272.318,402.37 271.458,401.307C270.598,400.244 269.789,398.574 269.043,396.335L268.386,394.362L275.635,391.947L276.848,395.591C277.227,396.729 277.581,397.412 277.872,397.653C278.214,397.918 278.606,397.956 279.137,397.779C279.63,397.615 279.972,397.248 280.073,396.793C280.2,396.287 280.112,395.642 279.846,394.845C279.252,393.061 278.645,391.999 277.975,391.632C277.292,391.227 275.774,390.721 273.421,390.113C271.056,389.467 269.45,388.948 268.653,388.581C267.818,388.227 267.021,387.607 266.263,386.721C265.504,385.836 264.872,384.571 264.341,382.977C263.57,380.662 263.317,378.891 263.532,377.639C263.786,376.374 264.456,375.223 265.557,374.224C266.683,373.174 268.138,372.352 269.997,371.733C272.009,371.063 273.855,370.785 275.525,370.988C277.144,371.165 278.371,371.684 279.155,372.519C279.939,373.354 280.774,374.973 281.557,377.326L281.962,378.541ZM298.791,359.997L312.694,388.418L305.293,392.039L299.457,380.11L297.265,381.182L303.101,393.111L295.699,396.732L281.795,368.311L289.197,364.69L294.172,374.858L296.363,373.786L291.389,363.618L298.791,359.997ZM328.977,350.672L322.871,355.265L321.453,353.379C320.804,352.515 320.275,352.012 319.947,351.909C319.595,351.773 319.267,351.87 318.915,352.134C318.532,352.423 318.332,352.823 318.381,353.287C318.397,353.775 318.662,354.326 319.167,354.998C319.792,355.829 320.401,356.372 320.937,356.619C321.498,356.898 322.49,356.953 323.97,356.791C328.209,356.305 331.113,356.373 332.698,356.883C334.306,357.425 336.036,358.927 337.912,361.42C339.258,363.21 340.044,364.721 340.254,365.865C340.488,367.04 340.185,368.369 339.428,369.89C338.678,371.355 337.487,372.701 335.889,373.903C334.131,375.225 332.364,376.004 330.612,376.27C328.885,376.568 327.404,376.33 326.251,375.596C325.098,374.862 323.8,373.535 322.382,371.649L321.132,369.987L327.237,365.395L329.546,368.463C330.267,369.422 330.82,369.958 331.172,370.093C331.58,370.237 331.964,370.148 332.411,369.812C332.827,369.499 333.034,369.043 332.986,368.579C332.945,368.059 332.656,367.475 332.151,366.804C331.021,365.301 330.108,364.487 329.356,364.352C328.58,364.185 326.98,364.187 324.556,364.358C322.108,364.498 320.42,364.516 319.548,364.421C318.644,364.35 317.691,364.016 316.691,363.417C315.69,362.818 314.688,361.82 313.679,360.477C312.212,358.527 311.41,356.928 311.216,355.673C311.054,354.393 311.324,353.088 312.051,351.791C312.785,350.438 313.903,349.197 315.47,348.019C317.164,346.744 318.827,345.894 320.474,345.556C322.066,345.21 323.394,345.312 324.403,345.854C325.411,346.397 326.717,347.667 328.208,349.649L328.977,350.672ZM352.018,341.021C354.259,343.305 355.771,344.96 356.581,346.015C357.391,347.069 357.917,348.234 358.13,349.594C358.315,350.925 358.161,352.253 357.61,353.634C357.06,354.958 356.17,356.279 354.885,357.539C353.686,358.715 352.405,359.58 351.041,360.132C349.678,360.685 348.319,360.841 346.992,360.631C345.608,360.419 344.425,359.899 343.386,359.068C342.376,358.266 340.722,356.695 338.425,354.353L334.644,350.498C332.431,348.242 330.892,346.558 330.082,345.504C329.272,344.449 328.746,343.285 328.561,341.953C328.348,340.594 328.502,339.266 329.081,337.914C329.603,336.561 330.521,335.269 331.806,334.008C333.005,332.832 334.286,331.967 335.649,331.415C336.984,330.834 338.343,330.677 339.699,330.917C341.083,331.128 342.266,331.649 343.276,332.45C344.315,333.281 345.968,334.852 348.237,337.166L352.018,341.021ZM338.881,339.394C337.845,338.338 337.116,337.708 336.721,337.535C336.327,337.361 335.959,337.443 335.587,337.807C335.273,338.115 335.157,338.453 335.21,338.85C335.291,339.218 335.905,340.016 337.054,341.187L347.389,351.724C348.678,353.038 349.519,353.782 349.913,354.012C350.307,354.185 350.732,354.104 351.103,353.74C351.503,353.348 351.592,352.925 351.342,352.442C351.12,351.987 350.337,351.074 349.049,349.76L338.881,339.394ZM341.099,325.297L349.778,314.415L354.751,318.38L351.209,322.821L355.9,326.562L359.067,322.591L363.758,326.332L360.59,330.303L370.973,338.584L365.835,345.026L341.099,325.297ZM360.217,298.339L365.582,301.754L362.962,305.871L384.287,319.447L379.862,326.398L358.537,312.822L355.937,316.905L350.572,313.489L360.217,298.339ZM373.724,268.616L401.315,284.523L397.232,293.957C392.425,292.879 387.026,291.458 381.05,289.656C383.345,290.998 388.109,293.888 395.342,298.326L391.291,307.687L360.792,298.497L363.969,291.155L374.435,294.769L384.533,298.224C379.631,295.754 373.288,292.181 365.542,287.521L368.942,279.665C369.87,279.936 373.139,281.046 378.872,283.004L390.287,286.942C383.414,283.488 376.851,279.819 370.562,275.921L373.724,268.616ZM376.781,254.323L408.604,257.594L406.512,265.77L400.91,264.75L400.176,267.617L405.56,269.49L403.448,277.745L373.836,265.832L376.781,254.323ZM395.425,263.594C391.838,263.089 387.466,262.425 382.252,261.503C387.895,263.814 392.068,265.419 394.731,266.307L395.425,263.594ZM378.103,248.493L378.802,242.694C379.266,238.842 379.736,236.28 380.221,234.928C380.661,233.612 381.55,232.591 382.886,231.865C384.218,231.18 386.216,230.977 388.877,231.298C391.339,231.594 392.929,232.108 393.691,232.804C394.454,233.5 394.826,234.754 394.77,236.56C395.359,235.02 396.048,233.975 396.791,233.5C397.533,233.025 398.167,232.779 398.781,232.692C399.352,232.64 400.91,232.747 403.452,233.053L411.712,234.049L410.798,241.634L400.354,240.375C398.686,240.175 397.639,240.169 397.208,240.399C396.778,240.63 396.498,241.281 396.364,242.393L410.502,244.096L409.516,252.277L378.103,248.493ZM384.49,240.962L391.479,241.804C391.589,240.891 391.507,240.236 391.312,239.85C391.116,239.464 390.306,239.165 388.916,238.998L387.209,238.792C386.216,238.672 385.522,238.75 385.161,239.069C384.84,239.393 384.6,240.049 384.49,240.962ZM380.371,226.869L380.35,213.149L386.71,213.139L386.718,218.619L392.718,218.61L392.71,213.49L398.71,213.48L398.718,218.6L405.678,218.589L405.669,212.589L411.989,212.579L412.011,226.819L380.371,226.869Z"}),v.createElement("path",{d:"M65.814,139.849C68.729,141.171 70.736,142.169 71.872,142.859C73.008,143.55 73.919,144.446 74.609,145.637C75.262,146.812 75.598,148.106 75.583,149.592C75.548,151.026 75.195,152.579 74.452,154.218C73.759,155.748 72.876,157.017 71.804,158.024C70.733,159.032 69.522,159.669 68.208,159.951C66.841,160.254 65.55,160.196 64.281,159.796C63.05,159.414 60.94,158.545 57.953,157.191L53.034,154.961C50.156,153.656 48.113,152.642 46.977,151.951C45.841,151.261 44.929,150.364 44.276,149.19C43.586,147.999 43.251,146.705 43.302,145.235C43.301,143.785 43.69,142.248 44.433,140.609C45.127,139.079 46.009,137.81 47.081,136.803C48.116,135.779 49.327,135.142 50.677,134.876C52.044,134.573 53.335,134.631 54.567,135.014C55.836,135.414 57.945,136.282 60.896,137.62L65.814,139.849ZM52.976,143.077C51.628,142.466 50.721,142.142 50.291,142.123C49.86,142.103 49.546,142.312 49.331,142.786C49.15,143.186 49.163,143.544 49.356,143.895C49.564,144.209 50.426,144.731 51.919,145.408L65.362,151.503C67.038,152.262 68.091,152.652 68.542,152.724C68.972,152.744 69.339,152.515 69.554,152.041C69.785,151.531 69.715,151.104 69.308,150.744C68.937,150.4 67.877,149.832 66.201,149.072L52.976,143.077ZM52.319,126.004L56.705,118.981C57.892,117.081 58.972,115.728 59.913,114.901C60.82,114.053 61.749,113.548 62.643,113.399C63.504,113.229 64.394,113.314 65.336,113.619C66.256,113.958 67.541,114.619 69.237,115.678L71.578,117.14C73.275,118.2 74.424,119.153 74.971,120.014C75.54,120.84 75.748,121.866 75.562,123.07C75.376,124.275 74.85,125.644 73.897,127.171L72.732,129.037L83.52,135.775L79.156,142.764L52.319,126.004ZM61.298,121.897L68.117,126.156L68.435,125.647C68.838,125.002 68.978,124.476 68.787,124.027C68.63,123.599 68.07,123.06 67.086,122.446L64.88,121.069C63.964,120.497 63.269,120.251 62.807,120.387C62.366,120.489 61.849,121.015 61.298,121.897ZM65.491,105.806L74.058,95.089L79.026,99.06L75.604,103.341L80.291,107.087L83.488,103.088L88.174,106.834L84.977,110.834L90.414,115.179L94.16,110.493L99.097,114.439L90.205,125.562L65.491,105.806ZM91.595,76.985L113.834,99.49L108.713,104.551L95.575,97.345L105.668,107.559L100.775,112.395L78.535,89.89L83.429,85.054L96.71,91.949L86.701,81.82L91.595,76.985ZM125.69,63.611L119.349,67.872L118.033,65.913C117.43,65.017 116.929,64.486 116.607,64.365C116.262,64.211 115.93,64.29 115.565,64.536C115.166,64.803 114.946,65.192 114.97,65.658C114.961,66.146 115.196,66.711 115.664,67.409C116.244,68.272 116.823,68.846 117.346,69.122C117.89,69.431 118.878,69.538 120.364,69.455C124.624,69.195 127.52,69.417 129.075,70.011C130.653,70.637 132.301,72.229 134.041,74.818C135.29,76.677 135.995,78.228 136.144,79.381C136.314,80.568 135.942,81.878 135.104,83.357C134.277,84.78 133.017,86.06 131.357,87.176C129.531,88.403 127.726,89.086 125.962,89.259C124.221,89.465 122.756,89.149 121.643,88.354C120.531,87.56 119.306,86.166 117.989,84.207L116.829,82.481L123.17,78.22L125.312,81.407C125.981,82.403 126.505,82.967 126.849,83.121C127.249,83.286 127.637,83.218 128.102,82.905C128.534,82.615 128.765,82.171 128.741,81.705C128.728,81.184 128.471,80.585 128.002,79.888C126.954,78.328 126.085,77.466 125.341,77.291C124.575,77.083 122.977,77 120.548,77.042C118.096,77.051 116.409,76.98 115.544,76.839C114.645,76.72 113.711,76.335 112.744,75.684C111.776,75.033 110.829,73.983 109.892,72.589C108.531,70.563 107.815,68.924 107.688,67.66C107.595,66.373 107.934,65.085 108.728,63.829C109.533,62.516 110.716,61.336 112.343,60.243C114.102,59.06 115.808,58.3 117.471,58.05C119.079,57.788 120.4,57.961 121.378,58.557C122.357,59.152 123.593,60.49 124.976,62.548L125.69,63.611ZM151.705,60.191C153.126,63.059 154.048,65.102 154.491,66.356C154.934,67.609 155.072,68.88 154.852,70.239C154.615,71.562 154.056,72.776 153.103,73.917C152.169,75.005 150.913,75.984 149.3,76.783C147.795,77.529 146.308,77.953 144.841,78.055C143.374,78.156 142.033,77.883 140.837,77.27C139.587,76.64 138.624,75.777 137.895,74.666C137.184,73.59 136.1,71.582 134.644,68.643L132.247,63.804C130.844,60.972 129.904,58.894 129.461,57.64C129.019,56.386 128.881,55.115 129.118,53.793C129.338,52.434 129.897,51.219 130.867,50.114C131.783,48.99 133.057,48.047 134.67,47.248C136.175,46.502 137.662,46.079 139.129,45.977C140.579,45.839 141.919,46.112 143.133,46.761C144.383,47.392 145.346,48.254 146.057,49.33C146.787,50.442 147.87,52.449 149.309,55.353L151.705,60.191ZM139.723,54.566C139.066,53.239 138.568,52.415 138.247,52.127C137.927,51.84 137.551,51.803 137.085,52.033C136.691,52.229 136.475,52.514 136.402,52.907C136.365,53.283 136.701,54.232 137.429,55.702L143.981,68.928C144.797,70.577 145.366,71.545 145.669,71.886C145.99,72.173 146.419,72.229 146.885,71.998C147.387,71.749 147.603,71.375 147.516,70.838C147.446,70.336 146.985,69.226 146.168,67.577L139.723,54.566ZM167.692,34.963L174.441,55.018C175.206,57.293 175.666,58.911 175.821,59.871C176.013,60.82 175.878,61.92 175.489,63.149C175.088,64.339 174.357,65.429 173.348,66.317C172.3,67.218 170.987,67.956 169.395,68.491C167.613,69.091 165.919,69.324 164.35,69.176C162.794,69.067 161.502,68.615 160.501,67.897C159.499,67.179 158.751,66.334 158.28,65.311C157.809,64.287 156.98,62.076 155.845,58.702L149.874,40.96L157.683,38.332L165.249,60.813C165.696,62.14 166.052,62.948 166.281,63.251C166.56,63.579 166.927,63.667 167.344,63.526C167.837,63.36 168.076,63.069 168.088,62.601C168.099,62.133 167.856,61.159 167.358,59.681L159.92,37.579L167.692,34.963ZM174.727,33.131L180.462,32.033C184.273,31.303 186.857,30.972 188.292,31.023C189.681,31.042 190.923,31.578 192.021,32.631C193.079,33.691 193.88,35.533 194.383,38.165C194.85,40.601 194.844,42.272 194.412,43.21C193.981,44.147 192.9,44.884 191.162,45.379C192.809,45.471 194.014,45.811 194.692,46.373C195.37,46.936 195.797,47.465 196.067,48.024C196.29,48.552 196.662,50.069 197.143,52.583L198.707,60.755L191.204,62.191L189.226,51.859C188.91,50.209 188.597,49.21 188.246,48.87C187.896,48.53 187.191,48.461 186.091,48.671L188.768,62.658L180.675,64.207L174.727,33.131ZM183.842,36.925L185.166,43.839C186.069,43.666 186.668,43.389 186.976,43.085C187.285,42.782 187.323,41.919 187.06,40.544L186.737,38.855C186.549,37.873 186.264,37.235 185.85,36.988C185.444,36.781 184.746,36.752 183.842,36.925ZM219.815,41.52L211.587,41.97L211.288,36.498C211.198,34.861 211.064,33.867 210.884,33.516C210.663,33.128 210.292,32.947 209.693,32.98C209.014,33.017 208.588,33.281 208.454,33.769C208.281,34.259 208.258,35.302 208.345,36.9L209.148,51.558C209.231,53.076 209.367,54.11 209.591,54.538C209.777,55.009 210.19,55.226 210.829,55.191C211.468,55.156 211.854,54.895 211.987,54.407C212.163,53.957 212.182,52.834 212.088,51.116L211.871,47.162L220.099,46.712L220.165,47.91C220.344,51.185 220.231,53.515 219.866,54.897C219.461,56.281 218.528,57.534 216.987,58.66C215.447,59.786 213.558,60.41 211.241,60.537C208.845,60.668 206.824,60.338 205.218,59.545C203.612,58.751 202.508,57.61 201.904,56.08C201.342,54.589 200.935,52.288 200.765,49.172L200.26,39.946C200.135,37.67 200.123,35.988 200.22,34.821C200.318,33.694 200.736,32.549 201.438,31.469C202.138,30.349 203.173,29.491 204.498,28.818C205.861,28.102 207.403,27.738 209.2,27.639C211.597,27.508 213.62,27.878 215.268,28.709C216.876,29.543 217.98,30.684 218.536,32.056C219.132,33.425 219.489,35.569 219.651,38.524L219.815,41.52ZM226.051,27.944L239.739,28.872L239.309,35.218L233.841,34.847L233.435,40.833L238.544,41.179L238.137,47.166L233.029,46.819L232.558,53.763L238.544,54.169L238.117,60.475L223.909,59.511L226.051,27.944ZM272.132,44.93L264.713,43.105L265.276,40.813C265.534,39.765 265.59,39.037 265.462,38.717C265.344,38.359 265.062,38.166 264.635,38.061C264.169,37.946 263.733,38.045 263.404,38.376C263.037,38.697 262.777,39.251 262.576,40.067C262.328,41.077 262.292,41.892 262.44,42.464C262.578,43.074 263.163,43.877 264.225,44.921C267.282,47.898 269.067,50.19 269.674,51.74C270.272,53.329 270.203,55.618 269.458,58.648C268.923,60.823 268.25,62.388 267.497,63.274C266.734,64.198 265.514,64.804 263.856,65.179C262.247,65.525 260.452,65.454 258.51,64.977C256.373,64.451 254.653,63.575 253.339,62.387C252.015,61.237 251.263,59.94 251.102,58.583C250.942,57.225 251.148,55.381 251.712,53.089L252.209,51.069L259.628,52.894L258.711,56.623C258.424,57.788 258.359,58.555 258.477,58.913C258.624,59.32 258.935,59.562 259.479,59.695C259.984,59.82 260.469,59.692 260.797,59.36C261.174,59 261.444,58.407 261.644,57.592C262.093,55.766 262.147,54.543 261.775,53.875C261.414,53.169 260.4,51.931 258.734,50.162C257.078,48.354 255.996,47.058 255.518,46.322C255.001,45.577 254.658,44.628 254.489,43.474C254.319,42.32 254.459,40.913 254.861,39.282C255.443,36.912 256.174,35.28 257.025,34.335C257.913,33.401 259.095,32.785 260.559,32.527C262.071,32.24 263.74,32.321 265.643,32.789C267.702,33.295 269.412,34.045 270.716,35.108C271.991,36.121 272.752,37.215 272.97,38.339C273.187,39.464 273.029,41.279 272.437,43.687L272.132,44.93ZM292.077,61.866C290.909,64.845 290.018,66.902 289.387,68.072C288.756,69.243 287.909,70.199 286.755,70.95C285.616,71.664 284.341,72.066 282.856,72.129C281.423,72.168 279.854,71.897 278.178,71.24C276.614,70.627 275.301,69.812 274.239,68.794C273.177,67.776 272.478,66.6 272.127,65.303C271.754,63.953 271.745,62.661 272.078,61.374C272.396,60.123 273.153,57.972 274.35,54.918L276.321,49.89C277.474,46.948 278.381,44.854 279.011,43.684C279.642,42.513 280.49,41.557 281.629,40.843C282.782,40.092 284.057,39.69 285.527,39.665C286.975,39.588 288.53,39.896 290.206,40.553C291.77,41.166 293.083,41.982 294.145,42.999C295.221,43.98 295.92,45.156 296.256,46.491C296.63,47.84 296.639,49.132 296.321,50.383C295.988,51.67 295.23,53.822 294.048,56.838L292.077,61.866ZM288.186,49.213C288.726,47.836 289.002,46.913 288.999,46.482C288.996,46.051 288.771,45.748 288.287,45.558C287.877,45.398 287.521,45.43 287.181,45.64C286.878,45.865 286.401,46.752 285.803,48.279L280.416,62.021C279.745,63.734 279.411,64.806 279.362,65.26C279.365,65.691 279.612,66.045 280.097,66.235C280.618,66.44 281.041,66.347 281.379,65.922C281.704,65.533 282.216,64.445 282.887,62.732L288.186,49.213ZM305.248,47.78L317.483,54.419L314.45,60.009L309.458,57.3L306.596,62.574L311.062,64.997L308.2,70.27L303.735,67.848L297.402,79.521L290.16,75.591L305.248,47.78ZM336.214,66.91L332.603,72.146L328.586,69.376L314.235,90.188L307.451,85.51L321.802,64.698L317.818,61.951L321.428,56.715L336.214,66.91ZM364.183,92.203L339.722,112.6L332.279,105.509C334.952,101.37 338.151,96.794 341.907,91.809C339.854,93.499 335.496,96.971 328.833,102.225L321.448,95.189L340.609,69.743L346.401,75.262L339.394,83.834L332.663,92.117C336.674,88.37 342.219,83.653 349.268,77.993L355.466,83.898C354.89,84.676 352.72,87.36 348.901,92.064L341.262,101.415C346.878,96.158 352.588,91.267 358.42,86.712L364.183,92.203ZM375.916,107.812L353.681,130.812L348.545,124.115L352.809,120.341L351.008,117.992L346.209,121.067L341.024,114.307L368.687,98.385L375.916,107.812ZM357.107,116.742C359.72,114.234 362.944,111.208 366.89,107.677C361.586,110.686 357.747,112.975 355.403,114.521L357.107,116.742ZM381.75,116.129L384.673,121.184C386.616,124.543 387.779,126.874 388.203,128.246C388.641,129.564 388.544,130.914 387.911,132.296C387.258,133.644 385.782,135.006 383.462,136.348C381.315,137.589 379.735,138.133 378.708,138.035C377.68,137.936 376.629,137.157 375.589,135.679C376.044,137.264 376.12,138.514 375.812,139.34C375.504,140.165 375.144,140.742 374.705,141.181C374.28,141.565 372.97,142.416 370.754,143.697L363.551,147.862L359.727,141.249L368.834,135.982C370.288,135.141 371.128,134.516 371.334,134.074C371.54,133.631 371.373,132.942 370.812,131.973L358.485,139.102L354.36,131.969L381.75,116.129ZM381.166,125.985L375.071,129.51C375.532,130.306 375.991,130.78 376.379,130.972C376.767,131.163 377.594,130.916 378.806,130.215L380.295,129.354C381.161,128.853 381.669,128.374 381.766,127.902C381.828,127.451 381.626,126.782 381.166,125.985ZM394.047,138.523L399.41,151.152L393.555,153.638L391.414,148.594L385.891,150.939L387.892,155.651L382.369,157.996L380.368,153.284L373.962,156.004L376.307,161.527L370.49,163.997L364.924,150.89L394.047,138.523Z"}),v.createElement("path",{d:"M184.955,228.867C188.721,238.945 188.513,248.571 184.331,257.744C180.149,266.917 173.328,273.271 163.868,276.806C162.694,277.245 161.783,276.599 161.136,274.868C160.466,273.075 160.618,271.785 161.592,270.998C165.55,268.391 167.432,264.376 167.237,258.953C167.118,255.615 165.001,248.444 160.888,237.438C158.162,230.143 155.958,225.188 154.277,222.575C150.745,216.708 146.627,213.702 141.923,213.557C140.501,214.089 139.223,212.84 138.091,209.81C137.167,207.337 137.447,205.823 138.931,205.269C147.834,201.941 156.818,202.6 165.882,207.246C174.969,211.953 181.327,219.16 184.955,228.867ZM154.841,276.691C155.65,278.855 155.467,280.157 154.292,280.596C144.462,284.27 134.975,283.869 125.834,279.394C116.823,275.08 110.469,267.978 106.772,258.085C103.145,248.378 103.217,238.768 106.99,229.254C110.725,219.826 117.074,213.437 126.039,210.086C127.029,209.717 127.959,210.038 128.831,211.051C129.61,211.817 130.208,212.756 130.624,213.869C131.017,214.92 131.112,215.836 130.911,216.616C130.678,217.125 129.963,217.851 128.764,218.792C127.404,219.864 126.471,220.952 125.968,222.057C125.054,223.948 124.673,226.416 124.824,229.46C125.129,232.728 126.46,237.515 128.817,243.822L132.768,254.395C136.096,263.298 139.268,269.053 142.286,271.66C145.11,274.127 148.362,275.097 152.04,274.568C152.395,274.576 152.932,274.692 153.65,274.917C154.144,275.296 154.541,275.888 154.841,276.691ZM242.304,166.531L250.75,188.847L244.327,191.459C243.207,191.102 241.934,189.957 240.507,188.025C238.841,185.829 237.838,184.653 237.498,184.498C232.627,181.457 228.398,180.606 224.812,181.946C223.452,182.455 222.252,181.318 221.212,178.535C220.38,176.31 220.332,174.954 221.066,174.468L222.364,173.983C223.539,173.544 225.332,173.437 227.742,173.664C230.152,173.891 231.851,173.82 232.84,173.45C234.51,172.826 235.717,171.247 236.461,168.714L242.304,166.531ZM263.863,212.907C266.451,219.832 265.806,226.591 261.928,233.184C258.136,239.252 252.716,243.602 245.667,246.237C244.493,246.676 243.374,245.473 242.311,242.629C241.294,239.908 241.254,238.197 242.189,237.495C242.638,237.187 243.283,236.84 244.126,236.455C246.622,235.028 248.416,233.512 249.508,231.907C250.599,230.301 250.832,228.663 250.208,226.994C248.984,223.717 246.104,222.045 241.569,221.978C240.125,221.884 235.883,222.412 228.844,223.563C221.782,224.652 215.452,224.023 209.854,221.676C203.537,219.104 199.281,214.881 197.086,209.008C194.845,203.01 194.983,196.969 197.501,190.885C200.103,184.839 204.403,180.695 210.401,178.454C211.204,178.153 212.042,178.51 212.914,179.523C213.608,180.25 214.129,181.077 214.476,182.004C215.284,184.168 215.171,185.655 214.134,186.465C212.318,187.637 210.964,189.2 210.073,191.154C209.02,193.238 208.864,195.27 209.603,197.248C209.973,198.238 210.694,199.131 211.767,199.928C215.673,202.837 220.643,203.41 226.679,201.648C228.703,201.032 230.917,200.451 233.321,199.906C235.724,199.36 238.366,198.795 241.249,198.211C245.088,198.115 248.954,199.031 252.845,200.959C258.25,203.731 261.922,207.713 263.863,212.907ZM214.54,257.975L205.898,235.415L212.483,232.954C213.603,233.311 214.888,234.486 216.338,236.481C217.857,238.661 218.829,239.848 219.254,240.042C224.063,243.107 228.323,243.946 232.032,242.559C233.393,242.051 234.593,243.188 235.632,245.97C236.464,248.196 236.471,249.533 235.651,249.98C235.489,250.111 235.098,250.292 234.48,250.523C233.244,250.985 231.42,251.103 229.01,250.876C226.6,250.649 224.931,250.709 224.004,251.056C222.335,251.68 221.128,253.258 220.383,255.791L214.54,257.975ZM316.313,138.873L324.758,161.189L318.336,163.801C317.216,163.444 315.942,162.299 314.515,160.366C312.849,158.171 311.846,156.995 311.507,156.84C306.635,153.799 302.407,152.948 298.821,154.288C297.46,154.797 296.26,153.66 295.221,150.877C294.389,148.652 294.34,147.296 295.075,146.81L296.373,146.325C297.548,145.886 299.34,145.779 301.75,146.006C304.16,146.233 305.86,146.161 306.849,145.792C308.518,145.168 309.725,143.589 310.47,141.056L316.313,138.873ZM337.872,185.249C340.46,192.174 339.815,198.933 335.937,205.526C332.145,211.593 326.724,215.944 319.676,218.579C318.501,219.018 317.382,217.815 316.32,214.971C315.303,212.25 315.262,210.539 316.198,209.837C316.646,209.529 317.292,209.182 318.134,208.797C320.631,207.37 322.425,205.854 323.516,204.249C324.607,202.643 324.841,201.005 324.217,199.336C322.992,196.059 320.113,194.387 315.578,194.32C314.133,194.226 309.892,194.754 302.853,195.905C295.791,196.994 289.46,196.365 283.862,194.018C277.546,191.446 273.29,187.223 271.095,181.35C268.854,175.352 268.992,169.311 271.509,163.227C274.112,157.181 278.412,153.037 284.409,150.796C285.213,150.495 286.051,150.852 286.923,151.865C287.617,152.592 288.138,153.419 288.484,154.346C289.293,156.51 289.179,157.997 288.143,158.807C286.326,159.979 284.973,161.542 284.082,163.496C283.029,165.58 282.872,167.612 283.612,169.59C283.981,170.58 284.703,171.473 285.776,172.27C289.681,175.179 294.652,175.752 300.687,173.99C302.712,173.374 304.926,172.793 307.329,172.248C309.732,171.702 312.375,171.137 315.257,170.553C319.097,170.457 322.962,171.373 326.854,173.301C332.258,176.073 335.931,180.055 337.872,185.249ZM288.549,230.317L279.907,207.757L286.491,205.296C287.611,205.653 288.896,206.828 290.346,208.823C291.866,211.003 292.838,212.19 293.262,212.384C298.072,215.449 302.331,216.288 306.041,214.901C307.401,214.393 308.601,215.53 309.641,218.312C310.473,220.538 310.479,221.875 309.66,222.322C309.497,222.453 309.107,222.634 308.489,222.865C307.252,223.327 305.429,223.445 303.019,223.218C300.609,222.991 298.94,223.051 298.013,223.398C296.343,224.022 295.136,225.6 294.392,228.133L288.549,230.317Z"}),v.createElement("path",{d:"M394.606,195.569C388.976,196.699 383.488,193.046 382.359,187.416C381.229,181.786 384.882,176.298 390.512,175.168C396.142,174.038 401.63,177.692 402.76,183.321C403.89,188.951 400.236,194.439 394.606,195.569Z"}),v.createElement("path",{d:"M49.46,175.274C55.091,176.4 58.748,181.886 57.621,187.517C56.495,193.147 51.009,196.804 45.378,195.678C39.748,194.551 36.091,189.066 37.217,183.435C38.344,177.804 43.83,174.148 49.46,175.274Z"})),CB=()=>o.jsx("div",{className:"flow",children:o.jsxs("div",{className:"mobile block-center pad-t-8 flow",children:[o.jsx(yB,{className:"brui-logo"}),o.jsx("h1",{className:"mar-t-8",children:"React UI Components"}),o.jsx("h2",{className:"mar-t-none large",children:"For Badger Fans"}),o.jsxs("p",{className:"larger",children:["This is my personal collection of React UI components built around the styles provided by"," ",o.jsx("a",{href:"https://abw.github.io/badger-css",children:"Badger CSS"})]}),o.jsx("div",{className:"text-center",children:o.jsx(jB,{className:"width-10rem"})}),o.jsx("p",{children:"This is Open Source Software and you're welcome to use it. But be warned that it is also Opiniated and Selfish Software."}),o.jsx("p",{children:"I wrote it for me to help my get my job done.  It provides a solid foundation of React components that allow me to get a new site up and running quickly."}),o.jsx("p",{children:"I don't have the time or inclination to help other people get their jobs done (unless they're my clients, colleagues, family or close friends).  So please be aware that this is effectively unsupported software and you're on your own.  If you're not comfortable with that then you should almost certainly be using one of the many other fine UI toolkits that are available."}),o.jsx("p",{children:"Also note that this collection is supposed to be a starting point, not a final destination. You can use the components and styles provided, but at some point you will probably want or need to dig in and start adding your own code, or modifying the builtin components."}),o.jsx("p",{children:"Everything is modular and themeable, so that's generally quite easy to achieve.  But it requires a reasonable knowledge of React, CSS and SASS.  The documentation is provided as a reference for me (and my colleagues) to use, and it assumes a fairly high level of proficiency in these areas."}),o.jsx("p",{children:"Or to put it another way, if you're expecting someone to hold your hand explaining how to get this up and running, then you've probably come to the wrong place."})]})}),bB=Object.freeze(Object.defineProperty({__proto__:null,default:CB},Symbol.toStringTag,{value:"Module"})),N4=({path:e,onClick:t,width:n=512,height:r=512,style:a,className:s="night-and-day--icon",fill:l="currentColor"})=>o.jsx("svg",{"aria-hidden":"true",focusable:"false",className:s,style:a,role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${n} ${r}`,onClick:t,children:o.jsx("path",{d:e,fill:l})}),SB=e=>o.jsx(N4,{path:"M289,23C160,23 56,127 56,256C56,385 160,489 289,489C352,489 409,464 451,423C456,418 457,411 454,404C451,397 444,394 436,395C426,397 416,397 405,397C304,397 222,316 222,214C222,146 260,86 315,55C322,51 325,44 323,37C322,30 316,25 309,24C302,23 295,23 289,23L289,23Z",...e}),L4=({Icon:e,caption:t,onClick:n,iconClass:r,iconStyle:a,captionStyle:s,className:l="night-and-day--switcher",captionClass:i="night-and-day--caption",style:c={display:"inline-block"}})=>o.jsxs("div",{className:l,onClick:n,style:c,children:[o.jsx(e,{style:a,className:r}),!!t&&o.jsx("div",{className:i,style:s,children:t})]}),wB=e=>{const{setDark:t}=Us();return o.jsx(L4,{Icon:SB,onClick:t,...e})},_B=e=>o.jsx(N4,{path:"M362,1.2C367,3 370,8 371,13L391,121L499,141C504,142 509,145 511,150C512,155 512,161 509,166L447,256L509,346C512,351 512,357 511,362C509,367 504,370 499,371L391,391L371,499C370,504 367,509 362,511C357,512 351,512 346,509L256,447L166,509C161,512 156,512 151,511C146,509 142,504 141,499L121,391L13,371C8,370 3,367 1,362C0,356 0,351 3,346L65,256L3,166C0,161 0,156 1,151C3,146 8,142 13,141L121,121L141,13C142,8 146,3 151,1C156,0 161,0 166,3L256,65L346,3C351,0 357,0 362,1ZM160,256C160,203 203,160 256,160C309,160 352,203 352,256C352,309 309,352 256,352C203,352 160,309 160,256ZM384,256C384,186 326,128 256,128C186,128 128,186 128,256C128,326 186,384 256,384C326,384 384,326 384,256Z",...e}),kB=e=>{const{setLight:t}=Us();return o.jsx(L4,{Icon:_B,onClick:t,...e})},TB=({sunrise:e={},nightfall:t={}})=>{const{isLight:n,setLight:r,setDark:a}=Us();return n?o.jsx(kB,{onClick:a,...e}):o.jsx(wB,{onClick:r,...t})},R4=v.createContext(),Us=()=>v.useContext(R4),wl="dark",Qc="light",EB="(prefers-color-scheme: dark)",qc=()=>!1,NB=()=>{let e={};return{clear:()=>e={},getItem:t=>e[t],setItem:(t,n)=>e[t]=n,removeItem:t=>delete e[t]}},LB=()=>({matches:qc,addEventListener:qc,removeEventListener:qc}),D4=typeof window<"u",Jc=D4&&window.localStorage?window.localStorage:NB(),RB=D4&&window.matchMedia?e=>window.matchMedia(e):LB,du=RB(EB),DB=()=>du.matches,OB=e=>e.split(" "),L1=(e,t="")=>`${e} ${t}`,AB=({storageKey:e,defaultVariant:t,children:n})=>{const r=e?Jc.getItem(e):null,[a,s=""]=r?OB(r):[DB(),null],[l,i]=v.useState(a===wl),[c,d]=v.useState(s||t),u=b=>{i(b),e&&Jc.setItem(e,L1(b?wl:Qc,c))},p=b=>{d(b),e&&Jc.setItem(e,L1(l?wl:Qc,b))},m=b=>u(b.matches);v.useEffect(()=>(du.addEventListener("change",m),()=>du.removeEventListener("change",m)),[]);const y={isDark:l,isLight:!l,setDark:()=>u(!0),setLight:()=>u(!1),setIsDark:i,toggleTheme:()=>u(!l),theme:l?wl:Qc,variant:c,setVariant:p};return o.jsx(R4.Provider,{value:y,children:n})},O4="0.0.14",MB="2024-02-06",R1="sidebar",PB="no-sidebar",$B=()=>{const{variant:e,setVariant:t}=Us();return o.jsx("header",{children:o.jsxs("nav",{children:[o.jsxs("div",{children:[o.jsx(J,{name:"bars",className:"toggle-sidebar action",onClick:()=>t(e===R1?PB:R1)}),o.jsx(Hs,{to:"/",className:"home mar-l-2",text:"Badger React UI"}),o.jsxs("span",{className:"small mar-l-2",children:["v",O4]})]}),o.jsxs("div",{className:"flex middle",children:[o.jsx("a",{href:"https://github.com/abw/badger-react-ui",children:o.jsx(J,{name:"github",className:"mar-r-4"})}),o.jsx(TB,{})]})]})})},BB=()=>o.jsx("footer",{children:o.jsxs("div",{className:"flex space middle",children:[o.jsx("div",{className:"large",children:"Badger React UI"}),o.jsxs("div",{className:"text-center small",children:["by ",o.jsx("a",{href:"https://github.com/abw",children:"Andy Wardley"})]}),o.jsxs("div",{className:"text-right",children:["v",O4,o.jsx("br",{}),MB]})]})}),IB=({toc:e,contentRef:t})=>o.jsx("ul",{className:"toc",children:Object.entries(e).map(([n,r])=>o.jsx("li",{onClick:()=>{var a,s;(s=t.current)==null||s.scrollTo({top:((a=r.ref.current)==null?void 0:a.offsetTop)-20})},className:r.heading?"heading":"",children:r.heading?o.jsx("h4",{children:r.heading}):r.text.match(/^code:/)?o.jsx("code",{children:r.text.replace(/^code:/,"")}):r.text},n))}),zB=Bs.Consumer(IB),FB=({title:e,path:t,items:n,tocs:r})=>{const a=Fs(),s=t&&a.pathname.slice(0,t.length)===t;return o.jsxs("details",{className:"menu",open:s,children:[o.jsx("summary",{children:e}),o.jsx("ul",{children:n.map(l=>{const i=a.pathname===l.to;return o.jsxs("li",{children:[o.jsx(Hs,{className:"item",...l}),!!l.tocName&&i&&r[l.tocName]&&o.jsx(zB,{toc:r[l.tocName]})]},l.to)})})]})},D1=Bs.Consumer(FB),HB={title:"Getting Started",path:"/getting-started",items:[{to:"/getting-started/installation",text:"Installation"}]},UB={title:"Components",path:"/components",items:[{to:"/components/alert",text:"Alert",tocName:"alert"},{to:"/components/button",text:"Button",tocName:"button"},{to:"/components/buttons",text:"Buttons",tocName:"buttons"},{to:"/components/checkbox",text:"Checkbox",tocName:"checkbox"},{to:"/components/confirm",text:"Confirm",tocName:"confirm"},{to:"/components/datatable",text:"Datatable",tocName:"datatable"},{to:"/components/details",text:"Details",tocName:"details"},{to:"/components/dropdown",text:"Dropdown",tocName:"dropdown"},{to:"/components/dropdown-menu",text:"Dropdown Menu",tocName:"dropdown-menu"},{to:"/components/icon",text:"Icon",tocName:"icon"},{to:"/components/modal",text:"Modal",tocName:"modal"},{to:"/components/overlay",text:"Overlay",tocName:"overlay"},{to:"/components/pager",text:"Pager",tocName:"pager"},{to:"/components/radio",text:"Radio",tocName:"radio"},{to:"/components/search",text:"Search",tocName:"search"},{to:"/components/select",text:"Select",tocName:"select"},{to:"/components/sortable",text:"Sortable",tocName:"sortable"}]},VB=()=>o.jsxs(o.Fragment,{children:[o.jsx(D1,{...HB}),o.jsx(D1,{...UB})]});function WB(){const{pathname:e}=ra();return v.useEffect(()=>ZB(document.getElementById("content")),[e]),null}function ZB(e,{top:t=0,left:n=0,behavior:r="smooth"}={}){e==null||e.scrollTo({top:t,left:n,behavior:r})}const KB=({contentRef:e})=>{const{theme:t,variant:n}=Us();return o.jsxs("div",{id:"site",className:n,"data-theme":t,children:[o.jsx($B,{}),o.jsxs("div",{id:"app",children:[o.jsx(WB,{}),o.jsx("aside",{children:o.jsx(VB,{})}),o.jsx("main",{id:"content",ref:e,children:o.jsx(ND,{})})]}),o.jsx(BB,{})]})},YB=Bs.Consumer(KB),GB=/\/_layout$/,XB=/\/_examples\//,QB=qB(Object.assign({"../pages/components/alert/_examples/Alert/index.jsx":zk,"../pages/components/alert/_examples/Error/index.jsx":Zk,"../pages/components/alert/_examples/Info/index.jsx":Gk,"../pages/components/alert/_examples/Success/index.jsx":qk,"../pages/components/alert/_examples/Warning/index.jsx":tT,"../pages/components/alert/_examples/border/index.jsx":oT,"../pages/components/alert/_examples/className/index.jsx":lT,"../pages/components/alert/_examples/color/index.jsx":dT,"../pages/components/alert/_examples/dismissable/index.jsx":fT,"../pages/components/alert/_examples/headIcon/index.jsx":gT,"../pages/components/alert/_examples/headline/index.jsx":yT,"../pages/components/alert/_examples/icon/index.jsx":bT,"../pages/components/alert/_examples/onDismiss/index.jsx":_T,"../pages/components/alert/_examples/radius/index.jsx":ET,"../pages/components/alert/_examples/revealable/index.jsx":RT,"../pages/components/alert/_examples/revealed/index.jsx":AT,"../pages/components/alert/_examples/shadow/index.jsx":$T,"../pages/components/alert/_examples/size/index.jsx":zT,"../pages/components/alert/_examples/stripe/index.jsx":UT,"../pages/components/alert/_examples/text/index.jsx":ZT,"../pages/components/alert/_examples/title/index.jsx":GT,"../pages/components/alert/_examples/type/index.jsx":qT,"../pages/components/alert/index.jsx":tE,"../pages/components/button/_examples/Button/index.jsx":oE,"../pages/components/button/_examples/Content/index.jsx":lE,"../pages/components/button/_examples/bare/index.jsx":dE,"../pages/components/button/_examples/border/index.jsx":fE,"../pages/components/button/_examples/bright/index.jsx":gE,"../pages/components/button/_examples/className/index.jsx":yE,"../pages/components/button/_examples/color/index.jsx":bE,"../pages/components/button/_examples/dark/index.jsx":_E,"../pages/components/button/_examples/disabled/index.jsx":EE,"../pages/components/button/_examples/icon/index.jsx":RE,"../pages/components/button/_examples/iconLeft/index.jsx":AE,"../pages/components/button/_examples/iconRight/index.jsx":$E,"../pages/components/button/_examples/label/index.jsx":zE,"../pages/components/button/_examples/onClick/index.jsx":UE,"../pages/components/button/_examples/outline/index.jsx":ZE,"../pages/components/button/_examples/radius/index.jsx":GE,"../pages/components/button/_examples/shaded/index.jsx":qE,"../pages/components/button/_examples/shadow/index.jsx":tN,"../pages/components/button/_examples/size/index.jsx":oN,"../pages/components/button/_examples/text/index.jsx":lN,"../pages/components/button/_examples/tooltip/index.jsx":dN,"../pages/components/button/_examples/type/index.jsx":fN,"../pages/components/button/index.jsx":mN,"../pages/components/buttons/_examples/Button/index.jsx":yN,"../pages/components/buttons/_examples/Buttons/index.jsx":bN,"../pages/components/buttons/_examples/buttonClass/index.jsx":_N,"../pages/components/buttons/_examples/buttonsProp/index.jsx":EN,"../pages/components/buttons/_examples/className/index.jsx":RN,"../pages/components/buttons/_examples/outline/index.jsx":AN,"../pages/components/buttons/index.jsx":PN,"../pages/components/checkbox/_examples/CheckboxState/index.jsx":IN,"../pages/components/checkbox/_examples/Overview/index.jsx":HN,"../pages/components/checkbox/_examples/border/index.jsx":WN,"../pages/components/checkbox/_examples/checked/index.jsx":YN,"../pages/components/checkbox/_examples/checkedText/index.jsx":QN,"../pages/components/checkbox/_examples/className/index.jsx":eL,"../pages/components/checkbox/_examples/disabled/index.jsx":rL,"../pages/components/checkbox/_examples/onChange/index.jsx":sL,"../pages/components/checkbox/_examples/text/index.jsx":cL,"../pages/components/checkbox/index.jsx":uL,"../pages/components/confirm/_examples/Overview/index.jsx":hL,"../pages/components/confirm/_examples/cancel/index.jsx":xL,"../pages/components/confirm/_examples/cancelProps/index.jsx":jL,"../pages/components/confirm/_examples/className/index.jsx":SL,"../pages/components/confirm/_examples/color/index.jsx":kL,"../pages/components/confirm/_examples/confirm/index.jsx":NL,"../pages/components/confirm/_examples/confirmProps/index.jsx":DL,"../pages/components/confirm/_examples/iconRight/index.jsx":ML,"../pages/components/confirm/_examples/onClick/index.jsx":BL,"../pages/components/confirm/_examples/text/index.jsx":FL,"../pages/components/confirm/index.jsx":UL,"../pages/components/datatable/_examples/Datatable/index.jsx":ZL,"../pages/components/datatable/_examples/color/index.jsx":GL,"../pages/components/datatable/_examples/columns/className/index.jsx":JL,"../pages/components/datatable/_examples/columns/display/index.jsx":nR,"../pages/components/datatable/_examples/columns/index.jsx":fR,"../pages/components/datatable/_examples/columns/label/index.jsx":gR,"../pages/components/datatable/_examples/columns/type/index.jsx":yR,"../pages/components/datatable/_examples/pager/index.jsx":JD,"../pages/components/datatable/_examples/rows/index.jsx":tO,"../pages/components/datatable/index.jsx":rO,"../pages/components/details/_examples/Details/index.jsx":sO,"../pages/components/details/_examples/border/index.jsx":cO,"../pages/components/details/_examples/color/index.jsx":pO,"../pages/components/details/_examples/content/index.jsx":mO,"../pages/components/details/_examples/lined/index.jsx":vO,"../pages/components/details/_examples/open/index.jsx":CO,"../pages/components/details/_examples/radius/index.jsx":wO,"../pages/components/details/_examples/shaded/index.jsx":TO,"../pages/components/details/_examples/shadow/index.jsx":LO,"../pages/components/details/_examples/summary/index.jsx":OO,"../pages/components/details/index.jsx":MO,"../pages/components/dropdown-menu/_examples/DropdownMenu/index.jsx":BO,"../pages/components/dropdown-menu/_examples/onSelect/index.jsx":FO,"../pages/components/dropdown-menu/_examples/options/index.jsx":qO,"../pages/components/dropdown-menu/index.jsx":eA,"../pages/components/dropdown/_examples/Dropdown/index.jsx":rA,"../pages/components/dropdown/_examples/content/index.jsx":sA,"../pages/components/dropdown/_examples/iconLeft/index.jsx":cA,"../pages/components/dropdown/_examples/iconLeftRotate/index.jsx":pA,"../pages/components/dropdown/_examples/iconRight/index.jsx":mA,"../pages/components/dropdown/_examples/iconRightRotate/index.jsx":vA,"../pages/components/dropdown/_examples/openOnHover/index.jsx":CA,"../pages/components/dropdown/_examples/right/index.jsx":wA,"../pages/components/dropdown/_examples/text/index.jsx":TA,"../pages/components/dropdown/_examples/wide/index.jsx":LA,"../pages/components/dropdown/index.jsx":DA,"../pages/components/icon/_examples/Icon/index.jsx":zA,"../pages/components/icon/_examples/IconLibrary/index.jsx":FA,"../pages/components/icon/_examples/className/index.jsx":VA,"../pages/components/icon/_examples/color/index.jsx":KA,"../pages/components/icon/_examples/name/index.jsx":XA,"../pages/components/icon/_examples/path/index.jsx":JA,"../pages/components/icon/_examples/size/index.jsx":nM,"../pages/components/icon/index.jsx":oM,"../pages/components/modal/_examples/Modal/index.jsx":lM,"../pages/components/modal/_examples/ModalState/index.jsx":dM,"../pages/components/modal/_examples/className/index.jsx":fM,"../pages/components/modal/_examples/close/index.jsx":gM,"../pages/components/modal/_examples/closeIcon/index.jsx":yM,"../pages/components/modal/_examples/footer/index.jsx":bM,"../pages/components/modal/_examples/header/index.jsx":_M,"../pages/components/modal/_examples/text/index.jsx":EM,"../pages/components/modal/_examples/title/index.jsx":RM,"../pages/components/modal/index.jsx":OM,"../pages/components/overlay/_examples/Overlay/index.jsx":PM,"../pages/components/overlay/_examples/OverlayState/index.jsx":IM,"../pages/components/overlay/_examples/className/index.jsx":UM,"../pages/components/overlay/_examples/custom/index.jsx":ZM,"../pages/components/overlay/_examples/fixed/index.jsx":GM,"../pages/components/overlay/_examples/theme/index.jsx":eP,"../pages/components/overlay/index.jsx":nP,"../pages/components/pager/_examples/Context/index.jsx":lP,"../pages/components/pager/_examples/Pager/index.jsx":dP,"../pages/components/pager/_examples/className/index.jsx":fP,"../pages/components/pager/_examples/color/index.jsx":gP,"../pages/components/pager/_examples/icons/index.jsx":yP,"../pages/components/pager/_examples/nextIcon/index.jsx":SP,"../pages/components/pager/_examples/showFirstLast/index.jsx":kP,"../pages/components/pager/_examples/size/index.jsx":NP,"../pages/components/pager/index.jsx":RP,"../pages/components/radio/_examples/Overview/index.jsx":AP,"../pages/components/radio/_examples/border/index.jsx":$P,"../pages/components/radio/_examples/className/index.jsx":zP,"../pages/components/radio/_examples/disabled/index.jsx":UP,"../pages/components/radio/_examples/inline/index.jsx":ZP,"../pages/components/radio/_examples/onChange/index.jsx":GP,"../pages/components/radio/_examples/options/index.jsx":qP,"../pages/components/radio/_examples/value/index.jsx":t$,"../pages/components/radio/index.jsx":r$,"../pages/components/search/_examples/Search/index.jsx":l$,"../pages/components/search/_examples/displayResult/index.jsx":u$,"../pages/components/search/_examples/displayValue/index.jsx":m$,"../pages/components/search/_examples/onSearch/index.jsx":y$,"../pages/components/search/index.jsx":C$,"../pages/components/select/_examples/Select/index.jsx":_$,"../pages/components/select/_examples/displayOption/index.jsx":N$,"../pages/components/select/_examples/displayValue/index.jsx":O$,"../pages/components/select/_examples/options/index.jsx":$$,"../pages/components/select/_examples/search/index.jsx":F$,"../pages/components/select/_examples/validOption/index.jsx":W$,"../pages/components/select/_examples/value/index.jsx":q$,"../pages/components/select/index.jsx":eB,"../pages/components/sortable/_examples/Horizontal/index.jsx":rB,"../pages/components/sortable/_examples/Sortable/index.jsx":sB,"../pages/components/sortable/_examples/Vertical/index.jsx":cB,"../pages/components/sortable/index.jsx":uB,"../pages/getting-started/installation.jsx":vB,"../pages/index.jsx":bB}));function qB(e){const n=Object.entries(e).map(JB).filter(a=>!a.path.match(XB)).reduce((a,s)=>(a[s.path]=s,a),{}),r=Object.keys(n).filter(a=>a.match(GB)).sort((a,s)=>s.length-a.length);for(let a of r){const s=n[a];delete n[a];const l=a.replace(/_layout$/,""),i=l.length;s.path=l,s.children=[];const c=n[l];c&&(delete c.path,c.index=!0,s.children.push(c),delete n[l]);const d=Object.keys(n).filter(u=>u.slice(0,i)===l);for(let u of d){const p=n[u];delete n[u],u=u.slice(i),p.path=u.length?u:"/",s.children.push(p)}n[l]=s}return Object.values(n)}function JB([e,t]){const n=e.replace(/^[./]*pages/,"").replace(/\.jsx$/,"").replace(/index$/,"").replace(/\[(\w+)\]/,":$1"),r=t.default;return{path:n,Component:r}}const eI=PD([{path:"/",element:o.jsx(YB,{}),children:QB}],{basename:"/badger-react-ui"});ed.createRoot(document.getElementById("root")).render(o.jsx(ee.StrictMode,{children:o.jsx(AB,{storageKey:"theme",children:o.jsx(Bs.Provider,{children:o.jsx(VD,{router:eI})})})}));
