var l4=Object.defineProperty;var a4=(e,t,n)=>t in e?l4(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var qe=(e,t,n)=>(a4(e,typeof t!="symbol"?t+"":t,n),n);function s4(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const l in r)if(l!=="default"&&!(l in e)){const a=Object.getOwnPropertyDescriptor(r,l);a&&Object.defineProperty(e,l,a.get?a:{enumerable:!0,get:()=>r[l]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const a of l)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(l){const a={};return l.integrity&&(a.integrity=l.integrity),l.referrerPolicy&&(a.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?a.credentials="include":l.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(l){if(l.ep)return;l.ep=!0;const a=n(l);fetch(l.href,a)}})();var xa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Fn(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var r2={exports:{}},Ka={},o2={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fl=Symbol.for("react.element"),i4=Symbol.for("react.portal"),c4=Symbol.for("react.fragment"),u4=Symbol.for("react.strict_mode"),d4=Symbol.for("react.profiler"),p4=Symbol.for("react.provider"),f4=Symbol.for("react.context"),h4=Symbol.for("react.forward_ref"),m4=Symbol.for("react.suspense"),g4=Symbol.for("react.memo"),x4=Symbol.for("react.lazy"),Ju=Symbol.iterator;function v4(e){return e===null||typeof e!="object"?null:(e=Ju&&e[Ju]||e["@@iterator"],typeof e=="function"?e:null)}var l2={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},a2=Object.assign,s2={};function eo(e,t,n){this.props=e,this.context=t,this.refs=s2,this.updater=n||l2}eo.prototype.isReactComponent={};eo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};eo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function i2(){}i2.prototype=eo.prototype;function fc(e,t,n){this.props=e,this.context=t,this.refs=s2,this.updater=n||l2}var hc=fc.prototype=new i2;hc.constructor=fc;a2(hc,eo.prototype);hc.isPureReactComponent=!0;var ed=Array.isArray,c2=Object.prototype.hasOwnProperty,mc={current:null},u2={key:!0,ref:!0,__self:!0,__source:!0};function d2(e,t,n){var r,l={},a=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(a=""+t.key),t)c2.call(t,r)&&!u2.hasOwnProperty(r)&&(l[r]=t[r]);var i=arguments.length-2;if(i===1)l.children=n;else if(1<i){for(var c=Array(i),u=0;u<i;u++)c[u]=arguments[u+2];l.children=c}if(e&&e.defaultProps)for(r in i=e.defaultProps,i)l[r]===void 0&&(l[r]=i[r]);return{$$typeof:fl,type:e,key:a,ref:s,props:l,_owner:mc.current}}function y4(e,t){return{$$typeof:fl,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function gc(e){return typeof e=="object"&&e!==null&&e.$$typeof===fl}function C4(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var td=/\/+/g;function _s(e,t){return typeof e=="object"&&e!==null&&e.key!=null?C4(""+e.key):t.toString(36)}function ra(e,t,n,r,l){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(a){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case fl:case i4:s=!0}}if(s)return s=e,l=l(s),e=r===""?"."+_s(s,0):r,ed(l)?(n="",e!=null&&(n=e.replace(td,"$&/")+"/"),ra(l,t,n,"",function(u){return u})):l!=null&&(gc(l)&&(l=y4(l,n+(!l.key||s&&s.key===l.key?"":(""+l.key).replace(td,"$&/")+"/")+e)),t.push(l)),1;if(s=0,r=r===""?".":r+":",ed(e))for(var i=0;i<e.length;i++){a=e[i];var c=r+_s(a,i);s+=ra(a,t,n,c,l)}else if(c=v4(e),typeof c=="function")for(e=c.call(e),i=0;!(a=e.next()).done;)a=a.value,c=r+_s(a,i++),s+=ra(a,t,n,c,l);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Ml(e,t,n){if(e==null)return e;var r=[],l=0;return ra(e,r,"","",function(a){return t.call(n,a,l++)}),r}function j4(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var rt={current:null},oa={transition:null},S4={ReactCurrentDispatcher:rt,ReactCurrentBatchConfig:oa,ReactCurrentOwner:mc};te.Children={map:Ml,forEach:function(e,t,n){Ml(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ml(e,function(){t++}),t},toArray:function(e){return Ml(e,function(t){return t})||[]},only:function(e){if(!gc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};te.Component=eo;te.Fragment=c4;te.Profiler=d4;te.PureComponent=fc;te.StrictMode=u4;te.Suspense=m4;te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=S4;te.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=a2({},e.props),l=e.key,a=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,s=mc.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(c in t)c2.call(t,c)&&!u2.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&i!==void 0?i[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){i=Array(c);for(var u=0;u<c;u++)i[u]=arguments[u+2];r.children=i}return{$$typeof:fl,type:e.type,key:l,ref:a,props:r,_owner:s}};te.createContext=function(e){return e={$$typeof:f4,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:p4,_context:e},e.Consumer=e};te.createElement=d2;te.createFactory=function(e){var t=d2.bind(null,e);return t.type=e,t};te.createRef=function(){return{current:null}};te.forwardRef=function(e){return{$$typeof:h4,render:e}};te.isValidElement=gc;te.lazy=function(e){return{$$typeof:x4,_payload:{_status:-1,_result:e},_init:j4}};te.memo=function(e,t){return{$$typeof:g4,type:e,compare:t===void 0?null:t}};te.startTransition=function(e){var t=oa.transition;oa.transition={};try{e()}finally{oa.transition=t}};te.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};te.useCallback=function(e,t){return rt.current.useCallback(e,t)};te.useContext=function(e){return rt.current.useContext(e)};te.useDebugValue=function(){};te.useDeferredValue=function(e){return rt.current.useDeferredValue(e)};te.useEffect=function(e,t){return rt.current.useEffect(e,t)};te.useId=function(){return rt.current.useId()};te.useImperativeHandle=function(e,t,n){return rt.current.useImperativeHandle(e,t,n)};te.useInsertionEffect=function(e,t){return rt.current.useInsertionEffect(e,t)};te.useLayoutEffect=function(e,t){return rt.current.useLayoutEffect(e,t)};te.useMemo=function(e,t){return rt.current.useMemo(e,t)};te.useReducer=function(e,t,n){return rt.current.useReducer(e,t,n)};te.useRef=function(e){return rt.current.useRef(e)};te.useState=function(e){return rt.current.useState(e)};te.useSyncExternalStore=function(e,t,n){return rt.current.useSyncExternalStore(e,t,n)};te.useTransition=function(){return rt.current.useTransition()};te.version="18.2.0";o2.exports=te;var w=o2.exports;const Ve=Fn(w),b4=s4({__proto__:null,default:Ve},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _4=w,w4=Symbol.for("react.element"),k4=Symbol.for("react.fragment"),L4=Object.prototype.hasOwnProperty,T4=_4.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,E4={key:!0,ref:!0,__self:!0,__source:!0};function p2(e,t,n){var r,l={},a=null,s=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)L4.call(t,r)&&!E4.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:w4,type:e,key:a,ref:s,props:l,_owner:T4.current}}Ka.Fragment=k4;Ka.jsx=p2;Ka.jsxs=p2;r2.exports=Ka;var o=r2.exports,ai={},f2={exports:{}},gt={},h2={exports:{}},m2={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,$){var B=N.length;N.push($);e:for(;0<B;){var z=B-1>>>1,G=N[z];if(0<l(G,$))N[z]=$,N[B]=G,B=z;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var $=N[0],B=N.pop();if(B!==$){N[0]=B;e:for(var z=0,G=N.length,Pe=G>>>1;z<Pe;){var oe=2*(z+1)-1,Ae=N[oe],we=oe+1,Ue=N[we];if(0>l(Ae,B))we<G&&0>l(Ue,Ae)?(N[z]=Ue,N[we]=B,z=we):(N[z]=Ae,N[oe]=B,z=oe);else if(we<G&&0>l(Ue,B))N[z]=Ue,N[we]=B,z=we;else break e}}return $}function l(N,$){var B=N.sortIndex-$.sortIndex;return B!==0?B:N.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var s=Date,i=s.now();e.unstable_now=function(){return s.now()-i}}var c=[],u=[],p=1,m=null,g=3,b=!1,C=!1,S=!1,E=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(N){for(var $=n(u);$!==null;){if($.callback===null)r(u);else if($.startTime<=N)r(u),$.sortIndex=$.expirationTime,t(c,$);else break;$=n(u)}}function f(N){if(S=!1,h(N),!C)if(n(c)!==null)C=!0,ce(v);else{var $=n(u);$!==null&&xe(f,$.startTime-N)}}function v(N,$){C=!1,S&&(S=!1,x(L),L=-1),b=!0;var B=g;try{for(h($),m=n(c);m!==null&&(!(m.expirationTime>$)||N&&!F());){var z=m.callback;if(typeof z=="function"){m.callback=null,g=m.priorityLevel;var G=z(m.expirationTime<=$);$=e.unstable_now(),typeof G=="function"?m.callback=G:m===n(c)&&r(c),h($)}else r(c);m=n(c)}if(m!==null)var Pe=!0;else{var oe=n(u);oe!==null&&xe(f,oe.startTime-$),Pe=!1}return Pe}finally{m=null,g=B,b=!1}}var y=!1,j=null,L=-1,T=5,A=-1;function F(){return!(e.unstable_now()-A<T)}function X(){if(j!==null){var N=e.unstable_now();A=N;var $=!0;try{$=j(!0,N)}finally{$?le():(y=!1,j=null)}}else y=!1}var le;if(typeof d=="function")le=function(){d(X)};else if(typeof MessageChannel<"u"){var ye=new MessageChannel,J=ye.port2;ye.port1.onmessage=X,le=function(){J.postMessage(null)}}else le=function(){E(X,0)};function ce(N){j=N,y||(y=!0,le())}function xe(N,$){L=E(function(){N(e.unstable_now())},$)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){C||b||(C=!0,ce(v))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(N){switch(g){case 1:case 2:case 3:var $=3;break;default:$=g}var B=g;g=$;try{return N()}finally{g=B}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,$){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var B=g;g=N;try{return $()}finally{g=B}},e.unstable_scheduleCallback=function(N,$,B){var z=e.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?z+B:z):B=z,N){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=B+G,N={id:p++,callback:$,priorityLevel:N,startTime:B,expirationTime:G,sortIndex:-1},B>z?(N.sortIndex=B,t(u,N),n(c)===null&&N===n(u)&&(S?(x(L),L=-1):S=!0,xe(f,B-z))):(N.sortIndex=G,t(c,N),C||b||(C=!0,ce(v))),N},e.unstable_shouldYield=F,e.unstable_wrapCallback=function(N){var $=g;return function(){var B=g;g=$;try{return N.apply(this,arguments)}finally{g=B}}}})(m2);h2.exports=m2;var N4=h2.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g2=w,ht=N4;function P(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var x2=new Set,Ko={};function mr(e,t){Zr(e,t),Zr(e+"Capture",t)}function Zr(e,t){for(Ko[e]=t,e=0;e<t.length;e++)x2.add(t[e])}var on=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),si=Object.prototype.hasOwnProperty,O4=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,nd={},rd={};function R4(e){return si.call(rd,e)?!0:si.call(nd,e)?!1:O4.test(e)?rd[e]=!0:(nd[e]=!0,!1)}function M4(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function P4(e,t,n,r){if(t===null||typeof t>"u"||M4(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ot(e,t,n,r,l,a,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=s}var Ze={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ze[e]=new ot(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ze[t]=new ot(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ze[e]=new ot(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ze[e]=new ot(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ze[e]=new ot(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ze[e]=new ot(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ze[e]=new ot(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ze[e]=new ot(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ze[e]=new ot(e,5,!1,e.toLowerCase(),null,!1,!1)});var xc=/[\-:]([a-z])/g;function vc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(xc,vc);Ze[t]=new ot(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(xc,vc);Ze[t]=new ot(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(xc,vc);Ze[t]=new ot(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ze[e]=new ot(e,1,!1,e.toLowerCase(),null,!1,!1)});Ze.xlinkHref=new ot("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ze[e]=new ot(e,1,!1,e.toLowerCase(),null,!0,!0)});function yc(e,t,n,r){var l=Ze.hasOwnProperty(t)?Ze[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(P4(t,n,l,r)&&(n=null),r||l===null?R4(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var un=g2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Pl=Symbol.for("react.element"),wr=Symbol.for("react.portal"),kr=Symbol.for("react.fragment"),Cc=Symbol.for("react.strict_mode"),ii=Symbol.for("react.profiler"),v2=Symbol.for("react.provider"),y2=Symbol.for("react.context"),jc=Symbol.for("react.forward_ref"),ci=Symbol.for("react.suspense"),ui=Symbol.for("react.suspense_list"),Sc=Symbol.for("react.memo"),Sn=Symbol.for("react.lazy"),C2=Symbol.for("react.offscreen"),od=Symbol.iterator;function fo(e){return e===null||typeof e!="object"?null:(e=od&&e[od]||e["@@iterator"],typeof e=="function"?e:null)}var _e=Object.assign,ws;function ko(e){if(ws===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ws=t&&t[1]||""}return`
`+ws+e}var ks=!1;function Ls(e,t){if(!e||ks)return"";ks=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var l=u.stack.split(`
`),a=r.stack.split(`
`),s=l.length-1,i=a.length-1;1<=s&&0<=i&&l[s]!==a[i];)i--;for(;1<=s&&0<=i;s--,i--)if(l[s]!==a[i]){if(s!==1||i!==1)do if(s--,i--,0>i||l[s]!==a[i]){var c=`
`+l[s].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=s&&0<=i);break}}}finally{ks=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ko(e):""}function A4(e){switch(e.tag){case 5:return ko(e.type);case 16:return ko("Lazy");case 13:return ko("Suspense");case 19:return ko("SuspenseList");case 0:case 2:case 15:return e=Ls(e.type,!1),e;case 11:return e=Ls(e.type.render,!1),e;case 1:return e=Ls(e.type,!0),e;default:return""}}function di(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case kr:return"Fragment";case wr:return"Portal";case ii:return"Profiler";case Cc:return"StrictMode";case ci:return"Suspense";case ui:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case y2:return(e.displayName||"Context")+".Consumer";case v2:return(e._context.displayName||"Context")+".Provider";case jc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Sc:return t=e.displayName||null,t!==null?t:di(e.type)||"Memo";case Sn:t=e._payload,e=e._init;try{return di(e(t))}catch{}}return null}function $4(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return di(t);case 8:return t===Cc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Bn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function j2(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function B4(e){var t=j2(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(s){r=""+s,a.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Al(e){e._valueTracker||(e._valueTracker=B4(e))}function S2(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=j2(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function va(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function pi(e,t){var n=t.checked;return _e({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ld(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Bn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function b2(e,t){t=t.checked,t!=null&&yc(e,"checked",t,!1)}function fi(e,t){b2(e,t);var n=Bn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?hi(e,t.type,n):t.hasOwnProperty("defaultValue")&&hi(e,t.type,Bn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ad(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function hi(e,t,n){(t!=="number"||va(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Lo=Array.isArray;function Ir(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Bn(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function mi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(P(91));return _e({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function sd(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(P(92));if(Lo(n)){if(1<n.length)throw Error(P(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Bn(n)}}function _2(e,t){var n=Bn(t.value),r=Bn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function id(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function w2(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?w2(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var $l,k2=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for($l=$l||document.createElement("div"),$l.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=$l.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Yo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var $o={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},D4=["Webkit","ms","Moz","O"];Object.keys($o).forEach(function(e){D4.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),$o[t]=$o[e]})});function L2(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||$o.hasOwnProperty(e)&&$o[e]?(""+t).trim():t+"px"}function T2(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=L2(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var I4=_e({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xi(e,t){if(t){if(I4[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(P(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(P(61))}if(t.style!=null&&typeof t.style!="object")throw Error(P(62))}}function vi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yi=null;function bc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ci=null,zr=null,Fr=null;function cd(e){if(e=gl(e)){if(typeof Ci!="function")throw Error(P(280));var t=e.stateNode;t&&(t=Ja(t),Ci(e.stateNode,e.type,t))}}function E2(e){zr?Fr?Fr.push(e):Fr=[e]:zr=e}function N2(){if(zr){var e=zr,t=Fr;if(Fr=zr=null,cd(e),t)for(e=0;e<t.length;e++)cd(t[e])}}function O2(e,t){return e(t)}function R2(){}var Ts=!1;function M2(e,t,n){if(Ts)return e(t,n);Ts=!0;try{return O2(e,t,n)}finally{Ts=!1,(zr!==null||Fr!==null)&&(R2(),N2())}}function Qo(e,t){var n=e.stateNode;if(n===null)return null;var r=Ja(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(P(231,t,typeof n));return n}var ji=!1;if(on)try{var ho={};Object.defineProperty(ho,"passive",{get:function(){ji=!0}}),window.addEventListener("test",ho,ho),window.removeEventListener("test",ho,ho)}catch{ji=!1}function z4(e,t,n,r,l,a,s,i,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(p){this.onError(p)}}var Bo=!1,ya=null,Ca=!1,Si=null,F4={onError:function(e){Bo=!0,ya=e}};function U4(e,t,n,r,l,a,s,i,c){Bo=!1,ya=null,z4.apply(F4,arguments)}function W4(e,t,n,r,l,a,s,i,c){if(U4.apply(this,arguments),Bo){if(Bo){var u=ya;Bo=!1,ya=null}else throw Error(P(198));Ca||(Ca=!0,Si=u)}}function gr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function P2(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ud(e){if(gr(e)!==e)throw Error(P(188))}function V4(e){var t=e.alternate;if(!t){if(t=gr(e),t===null)throw Error(P(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var a=l.alternate;if(a===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===a.child){for(a=l.child;a;){if(a===n)return ud(l),e;if(a===r)return ud(l),t;a=a.sibling}throw Error(P(188))}if(n.return!==r.return)n=l,r=a;else{for(var s=!1,i=l.child;i;){if(i===n){s=!0,n=l,r=a;break}if(i===r){s=!0,r=l,n=a;break}i=i.sibling}if(!s){for(i=a.child;i;){if(i===n){s=!0,n=a,r=l;break}if(i===r){s=!0,r=a,n=l;break}i=i.sibling}if(!s)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?e:t}function A2(e){return e=V4(e),e!==null?$2(e):null}function $2(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=$2(e);if(t!==null)return t;e=e.sibling}return null}var B2=ht.unstable_scheduleCallback,dd=ht.unstable_cancelCallback,H4=ht.unstable_shouldYield,Z4=ht.unstable_requestPaint,Oe=ht.unstable_now,G4=ht.unstable_getCurrentPriorityLevel,_c=ht.unstable_ImmediatePriority,D2=ht.unstable_UserBlockingPriority,ja=ht.unstable_NormalPriority,K4=ht.unstable_LowPriority,I2=ht.unstable_IdlePriority,Ya=null,Wt=null;function Y4(e){if(Wt&&typeof Wt.onCommitFiberRoot=="function")try{Wt.onCommitFiberRoot(Ya,e,void 0,(e.current.flags&128)===128)}catch{}}var At=Math.clz32?Math.clz32:q4,Q4=Math.log,X4=Math.LN2;function q4(e){return e>>>=0,e===0?32:31-(Q4(e)/X4|0)|0}var Bl=64,Dl=4194304;function To(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Sa(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,a=e.pingedLanes,s=n&268435455;if(s!==0){var i=s&~l;i!==0?r=To(i):(a&=s,a!==0&&(r=To(a)))}else s=n&~l,s!==0?r=To(s):a!==0&&(r=To(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,a=t&-t,l>=a||l===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-At(t),l=1<<n,r|=e[n],t&=~l;return r}function J4(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function e0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,a=e.pendingLanes;0<a;){var s=31-At(a),i=1<<s,c=l[s];c===-1?(!(i&n)||i&r)&&(l[s]=J4(i,t)):c<=t&&(e.expiredLanes|=i),a&=~i}}function bi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function z2(){var e=Bl;return Bl<<=1,!(Bl&4194240)&&(Bl=64),e}function Es(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function hl(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-At(t),e[t]=n}function t0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-At(n),a=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~a}}function wc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-At(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var ae=0;function F2(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var U2,kc,W2,V2,H2,_i=!1,Il=[],En=null,Nn=null,On=null,Xo=new Map,qo=new Map,_n=[],n0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function pd(e,t){switch(e){case"focusin":case"focusout":En=null;break;case"dragenter":case"dragleave":Nn=null;break;case"mouseover":case"mouseout":On=null;break;case"pointerover":case"pointerout":Xo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":qo.delete(t.pointerId)}}function mo(e,t,n,r,l,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[l]},t!==null&&(t=gl(t),t!==null&&kc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function r0(e,t,n,r,l){switch(t){case"focusin":return En=mo(En,e,t,n,r,l),!0;case"dragenter":return Nn=mo(Nn,e,t,n,r,l),!0;case"mouseover":return On=mo(On,e,t,n,r,l),!0;case"pointerover":var a=l.pointerId;return Xo.set(a,mo(Xo.get(a)||null,e,t,n,r,l)),!0;case"gotpointercapture":return a=l.pointerId,qo.set(a,mo(qo.get(a)||null,e,t,n,r,l)),!0}return!1}function Z2(e){var t=nr(e.target);if(t!==null){var n=gr(t);if(n!==null){if(t=n.tag,t===13){if(t=P2(n),t!==null){e.blockedOn=t,H2(e.priority,function(){W2(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function la(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=wi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);yi=r,n.target.dispatchEvent(r),yi=null}else return t=gl(n),t!==null&&kc(t),e.blockedOn=n,!1;t.shift()}return!0}function fd(e,t,n){la(e)&&n.delete(t)}function o0(){_i=!1,En!==null&&la(En)&&(En=null),Nn!==null&&la(Nn)&&(Nn=null),On!==null&&la(On)&&(On=null),Xo.forEach(fd),qo.forEach(fd)}function go(e,t){e.blockedOn===t&&(e.blockedOn=null,_i||(_i=!0,ht.unstable_scheduleCallback(ht.unstable_NormalPriority,o0)))}function Jo(e){function t(l){return go(l,e)}if(0<Il.length){go(Il[0],e);for(var n=1;n<Il.length;n++){var r=Il[n];r.blockedOn===e&&(r.blockedOn=null)}}for(En!==null&&go(En,e),Nn!==null&&go(Nn,e),On!==null&&go(On,e),Xo.forEach(t),qo.forEach(t),n=0;n<_n.length;n++)r=_n[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<_n.length&&(n=_n[0],n.blockedOn===null);)Z2(n),n.blockedOn===null&&_n.shift()}var Ur=un.ReactCurrentBatchConfig,ba=!0;function l0(e,t,n,r){var l=ae,a=Ur.transition;Ur.transition=null;try{ae=1,Lc(e,t,n,r)}finally{ae=l,Ur.transition=a}}function a0(e,t,n,r){var l=ae,a=Ur.transition;Ur.transition=null;try{ae=4,Lc(e,t,n,r)}finally{ae=l,Ur.transition=a}}function Lc(e,t,n,r){if(ba){var l=wi(e,t,n,r);if(l===null)Is(e,t,r,_a,n),pd(e,r);else if(r0(l,e,t,n,r))r.stopPropagation();else if(pd(e,r),t&4&&-1<n0.indexOf(e)){for(;l!==null;){var a=gl(l);if(a!==null&&U2(a),a=wi(e,t,n,r),a===null&&Is(e,t,r,_a,n),a===l)break;l=a}l!==null&&r.stopPropagation()}else Is(e,t,r,null,n)}}var _a=null;function wi(e,t,n,r){if(_a=null,e=bc(r),e=nr(e),e!==null)if(t=gr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=P2(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return _a=e,null}function G2(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(G4()){case _c:return 1;case D2:return 4;case ja:case K4:return 16;case I2:return 536870912;default:return 16}default:return 16}}var Ln=null,Tc=null,aa=null;function K2(){if(aa)return aa;var e,t=Tc,n=t.length,r,l="value"in Ln?Ln.value:Ln.textContent,a=l.length;for(e=0;e<n&&t[e]===l[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===l[a-r];r++);return aa=l.slice(e,1<r?1-r:void 0)}function sa(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function zl(){return!0}function hd(){return!1}function xt(e){function t(n,r,l,a,s){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=a,this.target=s,this.currentTarget=null;for(var i in e)e.hasOwnProperty(i)&&(n=e[i],this[i]=n?n(a):a[i]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?zl:hd,this.isPropagationStopped=hd,this}return _e(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=zl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=zl)},persist:function(){},isPersistent:zl}),t}var to={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ec=xt(to),ml=_e({},to,{view:0,detail:0}),s0=xt(ml),Ns,Os,xo,Qa=_e({},ml,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Nc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==xo&&(xo&&e.type==="mousemove"?(Ns=e.screenX-xo.screenX,Os=e.screenY-xo.screenY):Os=Ns=0,xo=e),Ns)},movementY:function(e){return"movementY"in e?e.movementY:Os}}),md=xt(Qa),i0=_e({},Qa,{dataTransfer:0}),c0=xt(i0),u0=_e({},ml,{relatedTarget:0}),Rs=xt(u0),d0=_e({},to,{animationName:0,elapsedTime:0,pseudoElement:0}),p0=xt(d0),f0=_e({},to,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),h0=xt(f0),m0=_e({},to,{data:0}),gd=xt(m0),g0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},x0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},v0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function y0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=v0[e])?!!t[e]:!1}function Nc(){return y0}var C0=_e({},ml,{key:function(e){if(e.key){var t=g0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=sa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?x0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Nc,charCode:function(e){return e.type==="keypress"?sa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?sa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),j0=xt(C0),S0=_e({},Qa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xd=xt(S0),b0=_e({},ml,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Nc}),_0=xt(b0),w0=_e({},to,{propertyName:0,elapsedTime:0,pseudoElement:0}),k0=xt(w0),L0=_e({},Qa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),T0=xt(L0),E0=[9,13,27,32],Oc=on&&"CompositionEvent"in window,Do=null;on&&"documentMode"in document&&(Do=document.documentMode);var N0=on&&"TextEvent"in window&&!Do,Y2=on&&(!Oc||Do&&8<Do&&11>=Do),vd=String.fromCharCode(32),yd=!1;function Q2(e,t){switch(e){case"keyup":return E0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function X2(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Lr=!1;function O0(e,t){switch(e){case"compositionend":return X2(t);case"keypress":return t.which!==32?null:(yd=!0,vd);case"textInput":return e=t.data,e===vd&&yd?null:e;default:return null}}function R0(e,t){if(Lr)return e==="compositionend"||!Oc&&Q2(e,t)?(e=K2(),aa=Tc=Ln=null,Lr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Y2&&t.locale!=="ko"?null:t.data;default:return null}}var M0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!M0[e.type]:t==="textarea"}function q2(e,t,n,r){E2(r),t=wa(t,"onChange"),0<t.length&&(n=new Ec("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Io=null,el=null;function P0(e){cp(e,0)}function Xa(e){var t=Nr(e);if(S2(t))return e}function A0(e,t){if(e==="change")return t}var J2=!1;if(on){var Ms;if(on){var Ps="oninput"in document;if(!Ps){var jd=document.createElement("div");jd.setAttribute("oninput","return;"),Ps=typeof jd.oninput=="function"}Ms=Ps}else Ms=!1;J2=Ms&&(!document.documentMode||9<document.documentMode)}function Sd(){Io&&(Io.detachEvent("onpropertychange",ep),el=Io=null)}function ep(e){if(e.propertyName==="value"&&Xa(el)){var t=[];q2(t,el,e,bc(e)),M2(P0,t)}}function $0(e,t,n){e==="focusin"?(Sd(),Io=t,el=n,Io.attachEvent("onpropertychange",ep)):e==="focusout"&&Sd()}function B0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Xa(el)}function D0(e,t){if(e==="click")return Xa(t)}function I0(e,t){if(e==="input"||e==="change")return Xa(t)}function z0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Dt=typeof Object.is=="function"?Object.is:z0;function tl(e,t){if(Dt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!si.call(t,l)||!Dt(e[l],t[l]))return!1}return!0}function bd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _d(e,t){var n=bd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=bd(n)}}function tp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?tp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function np(){for(var e=window,t=va();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=va(e.document)}return t}function Rc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function F0(e){var t=np(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&tp(n.ownerDocument.documentElement,n)){if(r!==null&&Rc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,a=Math.min(r.start,l);r=r.end===void 0?a:Math.min(r.end,l),!e.extend&&a>r&&(l=r,r=a,a=l),l=_d(n,a);var s=_d(n,r);l&&s&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var U0=on&&"documentMode"in document&&11>=document.documentMode,Tr=null,ki=null,zo=null,Li=!1;function wd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Li||Tr==null||Tr!==va(r)||(r=Tr,"selectionStart"in r&&Rc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),zo&&tl(zo,r)||(zo=r,r=wa(ki,"onSelect"),0<r.length&&(t=new Ec("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Tr)))}function Fl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Er={animationend:Fl("Animation","AnimationEnd"),animationiteration:Fl("Animation","AnimationIteration"),animationstart:Fl("Animation","AnimationStart"),transitionend:Fl("Transition","TransitionEnd")},As={},rp={};on&&(rp=document.createElement("div").style,"AnimationEvent"in window||(delete Er.animationend.animation,delete Er.animationiteration.animation,delete Er.animationstart.animation),"TransitionEvent"in window||delete Er.transitionend.transition);function qa(e){if(As[e])return As[e];if(!Er[e])return e;var t=Er[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in rp)return As[e]=t[n];return e}var op=qa("animationend"),lp=qa("animationiteration"),ap=qa("animationstart"),sp=qa("transitionend"),ip=new Map,kd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Un(e,t){ip.set(e,t),mr(t,[e])}for(var $s=0;$s<kd.length;$s++){var Bs=kd[$s],W0=Bs.toLowerCase(),V0=Bs[0].toUpperCase()+Bs.slice(1);Un(W0,"on"+V0)}Un(op,"onAnimationEnd");Un(lp,"onAnimationIteration");Un(ap,"onAnimationStart");Un("dblclick","onDoubleClick");Un("focusin","onFocus");Un("focusout","onBlur");Un(sp,"onTransitionEnd");Zr("onMouseEnter",["mouseout","mouseover"]);Zr("onMouseLeave",["mouseout","mouseover"]);Zr("onPointerEnter",["pointerout","pointerover"]);Zr("onPointerLeave",["pointerout","pointerover"]);mr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));mr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));mr("onBeforeInput",["compositionend","keypress","textInput","paste"]);mr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));mr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));mr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Eo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),H0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Eo));function Ld(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,W4(r,t,void 0,e),e.currentTarget=null}function cp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var s=r.length-1;0<=s;s--){var i=r[s],c=i.instance,u=i.currentTarget;if(i=i.listener,c!==a&&l.isPropagationStopped())break e;Ld(l,i,u),a=c}else for(s=0;s<r.length;s++){if(i=r[s],c=i.instance,u=i.currentTarget,i=i.listener,c!==a&&l.isPropagationStopped())break e;Ld(l,i,u),a=c}}}if(Ca)throw e=Si,Ca=!1,Si=null,e}function me(e,t){var n=t[Ri];n===void 0&&(n=t[Ri]=new Set);var r=e+"__bubble";n.has(r)||(up(t,e,2,!1),n.add(r))}function Ds(e,t,n){var r=0;t&&(r|=4),up(n,e,r,t)}var Ul="_reactListening"+Math.random().toString(36).slice(2);function nl(e){if(!e[Ul]){e[Ul]=!0,x2.forEach(function(n){n!=="selectionchange"&&(H0.has(n)||Ds(n,!1,e),Ds(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ul]||(t[Ul]=!0,Ds("selectionchange",!1,t))}}function up(e,t,n,r){switch(G2(t)){case 1:var l=l0;break;case 4:l=a0;break;default:l=Lc}n=l.bind(null,t,n,e),l=void 0,!ji||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Is(e,t,n,r,l){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var i=r.stateNode.containerInfo;if(i===l||i.nodeType===8&&i.parentNode===l)break;if(s===4)for(s=r.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===l||c.nodeType===8&&c.parentNode===l))return;s=s.return}for(;i!==null;){if(s=nr(i),s===null)return;if(c=s.tag,c===5||c===6){r=a=s;continue e}i=i.parentNode}}r=r.return}M2(function(){var u=a,p=bc(n),m=[];e:{var g=ip.get(e);if(g!==void 0){var b=Ec,C=e;switch(e){case"keypress":if(sa(n)===0)break e;case"keydown":case"keyup":b=j0;break;case"focusin":C="focus",b=Rs;break;case"focusout":C="blur",b=Rs;break;case"beforeblur":case"afterblur":b=Rs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=md;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=c0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=_0;break;case op:case lp:case ap:b=p0;break;case sp:b=k0;break;case"scroll":b=s0;break;case"wheel":b=T0;break;case"copy":case"cut":case"paste":b=h0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=xd}var S=(t&4)!==0,E=!S&&e==="scroll",x=S?g!==null?g+"Capture":null:g;S=[];for(var d=u,h;d!==null;){h=d;var f=h.stateNode;if(h.tag===5&&f!==null&&(h=f,x!==null&&(f=Qo(d,x),f!=null&&S.push(rl(d,f,h)))),E)break;d=d.return}0<S.length&&(g=new b(g,C,null,n,p),m.push({event:g,listeners:S}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",g&&n!==yi&&(C=n.relatedTarget||n.fromElement)&&(nr(C)||C[ln]))break e;if((b||g)&&(g=p.window===p?p:(g=p.ownerDocument)?g.defaultView||g.parentWindow:window,b?(C=n.relatedTarget||n.toElement,b=u,C=C?nr(C):null,C!==null&&(E=gr(C),C!==E||C.tag!==5&&C.tag!==6)&&(C=null)):(b=null,C=u),b!==C)){if(S=md,f="onMouseLeave",x="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(S=xd,f="onPointerLeave",x="onPointerEnter",d="pointer"),E=b==null?g:Nr(b),h=C==null?g:Nr(C),g=new S(f,d+"leave",b,n,p),g.target=E,g.relatedTarget=h,f=null,nr(p)===u&&(S=new S(x,d+"enter",C,n,p),S.target=h,S.relatedTarget=E,f=S),E=f,b&&C)t:{for(S=b,x=C,d=0,h=S;h;h=Sr(h))d++;for(h=0,f=x;f;f=Sr(f))h++;for(;0<d-h;)S=Sr(S),d--;for(;0<h-d;)x=Sr(x),h--;for(;d--;){if(S===x||x!==null&&S===x.alternate)break t;S=Sr(S),x=Sr(x)}S=null}else S=null;b!==null&&Td(m,g,b,S,!1),C!==null&&E!==null&&Td(m,E,C,S,!0)}}e:{if(g=u?Nr(u):window,b=g.nodeName&&g.nodeName.toLowerCase(),b==="select"||b==="input"&&g.type==="file")var v=A0;else if(Cd(g))if(J2)v=I0;else{v=B0;var y=$0}else(b=g.nodeName)&&b.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(v=D0);if(v&&(v=v(e,u))){q2(m,v,n,p);break e}y&&y(e,g,u),e==="focusout"&&(y=g._wrapperState)&&y.controlled&&g.type==="number"&&hi(g,"number",g.value)}switch(y=u?Nr(u):window,e){case"focusin":(Cd(y)||y.contentEditable==="true")&&(Tr=y,ki=u,zo=null);break;case"focusout":zo=ki=Tr=null;break;case"mousedown":Li=!0;break;case"contextmenu":case"mouseup":case"dragend":Li=!1,wd(m,n,p);break;case"selectionchange":if(U0)break;case"keydown":case"keyup":wd(m,n,p)}var j;if(Oc)e:{switch(e){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else Lr?Q2(e,n)&&(L="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(Y2&&n.locale!=="ko"&&(Lr||L!=="onCompositionStart"?L==="onCompositionEnd"&&Lr&&(j=K2()):(Ln=p,Tc="value"in Ln?Ln.value:Ln.textContent,Lr=!0)),y=wa(u,L),0<y.length&&(L=new gd(L,e,null,n,p),m.push({event:L,listeners:y}),j?L.data=j:(j=X2(n),j!==null&&(L.data=j)))),(j=N0?O0(e,n):R0(e,n))&&(u=wa(u,"onBeforeInput"),0<u.length&&(p=new gd("onBeforeInput","beforeinput",null,n,p),m.push({event:p,listeners:u}),p.data=j))}cp(m,t)})}function rl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function wa(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,a=l.stateNode;l.tag===5&&a!==null&&(l=a,a=Qo(e,n),a!=null&&r.unshift(rl(e,a,l)),a=Qo(e,t),a!=null&&r.push(rl(e,a,l))),e=e.return}return r}function Sr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Td(e,t,n,r,l){for(var a=t._reactName,s=[];n!==null&&n!==r;){var i=n,c=i.alternate,u=i.stateNode;if(c!==null&&c===r)break;i.tag===5&&u!==null&&(i=u,l?(c=Qo(n,a),c!=null&&s.unshift(rl(n,c,i))):l||(c=Qo(n,a),c!=null&&s.push(rl(n,c,i)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Z0=/\r\n?/g,G0=/\u0000|\uFFFD/g;function Ed(e){return(typeof e=="string"?e:""+e).replace(Z0,`
`).replace(G0,"")}function Wl(e,t,n){if(t=Ed(t),Ed(e)!==t&&n)throw Error(P(425))}function ka(){}var Ti=null,Ei=null;function Ni(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Oi=typeof setTimeout=="function"?setTimeout:void 0,K0=typeof clearTimeout=="function"?clearTimeout:void 0,Nd=typeof Promise=="function"?Promise:void 0,Y0=typeof queueMicrotask=="function"?queueMicrotask:typeof Nd<"u"?function(e){return Nd.resolve(null).then(e).catch(Q0)}:Oi;function Q0(e){setTimeout(function(){throw e})}function zs(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Jo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Jo(t)}function Rn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Od(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var no=Math.random().toString(36).slice(2),Ut="__reactFiber$"+no,ol="__reactProps$"+no,ln="__reactContainer$"+no,Ri="__reactEvents$"+no,X0="__reactListeners$"+no,q0="__reactHandles$"+no;function nr(e){var t=e[Ut];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ln]||n[Ut]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Od(e);e!==null;){if(n=e[Ut])return n;e=Od(e)}return t}e=n,n=e.parentNode}return null}function gl(e){return e=e[Ut]||e[ln],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Nr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function Ja(e){return e[ol]||null}var Mi=[],Or=-1;function Wn(e){return{current:e}}function ge(e){0>Or||(e.current=Mi[Or],Mi[Or]=null,Or--)}function pe(e,t){Or++,Mi[Or]=e.current,e.current=t}var Dn={},Qe=Wn(Dn),it=Wn(!1),ir=Dn;function Gr(e,t){var n=e.type.contextTypes;if(!n)return Dn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},a;for(a in n)l[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function ct(e){return e=e.childContextTypes,e!=null}function La(){ge(it),ge(Qe)}function Rd(e,t,n){if(Qe.current!==Dn)throw Error(P(168));pe(Qe,t),pe(it,n)}function dp(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(P(108,$4(e)||"Unknown",l));return _e({},n,r)}function Ta(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Dn,ir=Qe.current,pe(Qe,e),pe(it,it.current),!0}function Md(e,t,n){var r=e.stateNode;if(!r)throw Error(P(169));n?(e=dp(e,t,ir),r.__reactInternalMemoizedMergedChildContext=e,ge(it),ge(Qe),pe(Qe,e)):ge(it),pe(it,n)}var Jt=null,es=!1,Fs=!1;function pp(e){Jt===null?Jt=[e]:Jt.push(e)}function J0(e){es=!0,pp(e)}function Vn(){if(!Fs&&Jt!==null){Fs=!0;var e=0,t=ae;try{var n=Jt;for(ae=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Jt=null,es=!1}catch(l){throw Jt!==null&&(Jt=Jt.slice(e+1)),B2(_c,Vn),l}finally{ae=t,Fs=!1}}return null}var Rr=[],Mr=0,Ea=null,Na=0,Ct=[],jt=0,cr=null,en=1,tn="";function er(e,t){Rr[Mr++]=Na,Rr[Mr++]=Ea,Ea=e,Na=t}function fp(e,t,n){Ct[jt++]=en,Ct[jt++]=tn,Ct[jt++]=cr,cr=e;var r=en;e=tn;var l=32-At(r)-1;r&=~(1<<l),n+=1;var a=32-At(t)+l;if(30<a){var s=l-l%5;a=(r&(1<<s)-1).toString(32),r>>=s,l-=s,en=1<<32-At(t)+l|n<<l|r,tn=a+e}else en=1<<a|n<<l|r,tn=e}function Mc(e){e.return!==null&&(er(e,1),fp(e,1,0))}function Pc(e){for(;e===Ea;)Ea=Rr[--Mr],Rr[Mr]=null,Na=Rr[--Mr],Rr[Mr]=null;for(;e===cr;)cr=Ct[--jt],Ct[jt]=null,tn=Ct[--jt],Ct[jt]=null,en=Ct[--jt],Ct[jt]=null}var ft=null,pt=null,ve=!1,Pt=null;function hp(e,t){var n=St(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Pd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ft=e,pt=Rn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ft=e,pt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=cr!==null?{id:en,overflow:tn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=St(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ft=e,pt=null,!0):!1;default:return!1}}function Pi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ai(e){if(ve){var t=pt;if(t){var n=t;if(!Pd(e,t)){if(Pi(e))throw Error(P(418));t=Rn(n.nextSibling);var r=ft;t&&Pd(e,t)?hp(r,n):(e.flags=e.flags&-4097|2,ve=!1,ft=e)}}else{if(Pi(e))throw Error(P(418));e.flags=e.flags&-4097|2,ve=!1,ft=e}}}function Ad(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ft=e}function Vl(e){if(e!==ft)return!1;if(!ve)return Ad(e),ve=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ni(e.type,e.memoizedProps)),t&&(t=pt)){if(Pi(e))throw mp(),Error(P(418));for(;t;)hp(e,t),t=Rn(t.nextSibling)}if(Ad(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){pt=Rn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}pt=null}}else pt=ft?Rn(e.stateNode.nextSibling):null;return!0}function mp(){for(var e=pt;e;)e=Rn(e.nextSibling)}function Kr(){pt=ft=null,ve=!1}function Ac(e){Pt===null?Pt=[e]:Pt.push(e)}var e5=un.ReactCurrentBatchConfig;function Ot(e,t){if(e&&e.defaultProps){t=_e({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Oa=Wn(null),Ra=null,Pr=null,$c=null;function Bc(){$c=Pr=Ra=null}function Dc(e){var t=Oa.current;ge(Oa),e._currentValue=t}function $i(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Wr(e,t){Ra=e,$c=Pr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(st=!0),e.firstContext=null)}function _t(e){var t=e._currentValue;if($c!==e)if(e={context:e,memoizedValue:t,next:null},Pr===null){if(Ra===null)throw Error(P(308));Pr=e,Ra.dependencies={lanes:0,firstContext:e}}else Pr=Pr.next=e;return t}var rr=null;function Ic(e){rr===null?rr=[e]:rr.push(e)}function gp(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,Ic(t)):(n.next=l.next,l.next=n),t.interleaved=n,an(e,r)}function an(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var bn=!1;function zc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function xp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function nn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Mn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,re&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,an(e,n)}return l=r.interleaved,l===null?(t.next=t,Ic(r)):(t.next=l.next,l.next=t),r.interleaved=t,an(e,n)}function ia(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,wc(e,n)}}function $d(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?l=a=s:a=a.next=s,n=n.next}while(n!==null);a===null?l=a=t:a=a.next=t}else l=a=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ma(e,t,n,r){var l=e.updateQueue;bn=!1;var a=l.firstBaseUpdate,s=l.lastBaseUpdate,i=l.shared.pending;if(i!==null){l.shared.pending=null;var c=i,u=c.next;c.next=null,s===null?a=u:s.next=u,s=c;var p=e.alternate;p!==null&&(p=p.updateQueue,i=p.lastBaseUpdate,i!==s&&(i===null?p.firstBaseUpdate=u:i.next=u,p.lastBaseUpdate=c))}if(a!==null){var m=l.baseState;s=0,p=u=c=null,i=a;do{var g=i.lane,b=i.eventTime;if((r&g)===g){p!==null&&(p=p.next={eventTime:b,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null});e:{var C=e,S=i;switch(g=t,b=n,S.tag){case 1:if(C=S.payload,typeof C=="function"){m=C.call(b,m,g);break e}m=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=S.payload,g=typeof C=="function"?C.call(b,m,g):C,g==null)break e;m=_e({},m,g);break e;case 2:bn=!0}}i.callback!==null&&i.lane!==0&&(e.flags|=64,g=l.effects,g===null?l.effects=[i]:g.push(i))}else b={eventTime:b,lane:g,tag:i.tag,payload:i.payload,callback:i.callback,next:null},p===null?(u=p=b,c=m):p=p.next=b,s|=g;if(i=i.next,i===null){if(i=l.shared.pending,i===null)break;g=i,i=g.next,g.next=null,l.lastBaseUpdate=g,l.shared.pending=null}}while(1);if(p===null&&(c=m),l.baseState=c,l.firstBaseUpdate=u,l.lastBaseUpdate=p,t=l.shared.interleaved,t!==null){l=t;do s|=l.lane,l=l.next;while(l!==t)}else a===null&&(l.shared.lanes=0);dr|=s,e.lanes=s,e.memoizedState=m}}function Bd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(P(191,l));l.call(r)}}}var vp=new g2.Component().refs;function Bi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:_e({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ts={isMounted:function(e){return(e=e._reactInternals)?gr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=nt(),l=An(e),a=nn(r,l);a.payload=t,n!=null&&(a.callback=n),t=Mn(e,a,l),t!==null&&($t(t,e,l,r),ia(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=nt(),l=An(e),a=nn(r,l);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Mn(e,a,l),t!==null&&($t(t,e,l,r),ia(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=nt(),r=An(e),l=nn(n,r);l.tag=2,t!=null&&(l.callback=t),t=Mn(e,l,r),t!==null&&($t(t,e,r,n),ia(t,e,r))}};function Dd(e,t,n,r,l,a,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,s):t.prototype&&t.prototype.isPureReactComponent?!tl(n,r)||!tl(l,a):!0}function yp(e,t,n){var r=!1,l=Dn,a=t.contextType;return typeof a=="object"&&a!==null?a=_t(a):(l=ct(t)?ir:Qe.current,r=t.contextTypes,a=(r=r!=null)?Gr(e,l):Dn),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ts,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=a),t}function Id(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ts.enqueueReplaceState(t,t.state,null)}function Di(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs=vp,zc(e);var a=t.contextType;typeof a=="object"&&a!==null?l.context=_t(a):(a=ct(t)?ir:Qe.current,l.context=Gr(e,a)),l.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Bi(e,t,a,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&ts.enqueueReplaceState(l,l.state,null),Ma(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function vo(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,e));var l=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(s){var i=l.refs;i===vp&&(i=l.refs={}),s===null?delete i[a]:i[a]=s},t._stringRef=a,t)}if(typeof e!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,e))}return e}function Hl(e,t){throw e=Object.prototype.toString.call(t),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function zd(e){var t=e._init;return t(e._payload)}function Cp(e){function t(x,d){if(e){var h=x.deletions;h===null?(x.deletions=[d],x.flags|=16):h.push(d)}}function n(x,d){if(!e)return null;for(;d!==null;)t(x,d),d=d.sibling;return null}function r(x,d){for(x=new Map;d!==null;)d.key!==null?x.set(d.key,d):x.set(d.index,d),d=d.sibling;return x}function l(x,d){return x=$n(x,d),x.index=0,x.sibling=null,x}function a(x,d,h){return x.index=h,e?(h=x.alternate,h!==null?(h=h.index,h<d?(x.flags|=2,d):h):(x.flags|=2,d)):(x.flags|=1048576,d)}function s(x){return e&&x.alternate===null&&(x.flags|=2),x}function i(x,d,h,f){return d===null||d.tag!==6?(d=Ks(h,x.mode,f),d.return=x,d):(d=l(d,h),d.return=x,d)}function c(x,d,h,f){var v=h.type;return v===kr?p(x,d,h.props.children,f,h.key):d!==null&&(d.elementType===v||typeof v=="object"&&v!==null&&v.$$typeof===Sn&&zd(v)===d.type)?(f=l(d,h.props),f.ref=vo(x,d,h),f.return=x,f):(f=ha(h.type,h.key,h.props,null,x.mode,f),f.ref=vo(x,d,h),f.return=x,f)}function u(x,d,h,f){return d===null||d.tag!==4||d.stateNode.containerInfo!==h.containerInfo||d.stateNode.implementation!==h.implementation?(d=Ys(h,x.mode,f),d.return=x,d):(d=l(d,h.children||[]),d.return=x,d)}function p(x,d,h,f,v){return d===null||d.tag!==7?(d=sr(h,x.mode,f,v),d.return=x,d):(d=l(d,h),d.return=x,d)}function m(x,d,h){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Ks(""+d,x.mode,h),d.return=x,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Pl:return h=ha(d.type,d.key,d.props,null,x.mode,h),h.ref=vo(x,null,d),h.return=x,h;case wr:return d=Ys(d,x.mode,h),d.return=x,d;case Sn:var f=d._init;return m(x,f(d._payload),h)}if(Lo(d)||fo(d))return d=sr(d,x.mode,h,null),d.return=x,d;Hl(x,d)}return null}function g(x,d,h,f){var v=d!==null?d.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return v!==null?null:i(x,d,""+h,f);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Pl:return h.key===v?c(x,d,h,f):null;case wr:return h.key===v?u(x,d,h,f):null;case Sn:return v=h._init,g(x,d,v(h._payload),f)}if(Lo(h)||fo(h))return v!==null?null:p(x,d,h,f,null);Hl(x,h)}return null}function b(x,d,h,f,v){if(typeof f=="string"&&f!==""||typeof f=="number")return x=x.get(h)||null,i(d,x,""+f,v);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Pl:return x=x.get(f.key===null?h:f.key)||null,c(d,x,f,v);case wr:return x=x.get(f.key===null?h:f.key)||null,u(d,x,f,v);case Sn:var y=f._init;return b(x,d,h,y(f._payload),v)}if(Lo(f)||fo(f))return x=x.get(h)||null,p(d,x,f,v,null);Hl(d,f)}return null}function C(x,d,h,f){for(var v=null,y=null,j=d,L=d=0,T=null;j!==null&&L<h.length;L++){j.index>L?(T=j,j=null):T=j.sibling;var A=g(x,j,h[L],f);if(A===null){j===null&&(j=T);break}e&&j&&A.alternate===null&&t(x,j),d=a(A,d,L),y===null?v=A:y.sibling=A,y=A,j=T}if(L===h.length)return n(x,j),ve&&er(x,L),v;if(j===null){for(;L<h.length;L++)j=m(x,h[L],f),j!==null&&(d=a(j,d,L),y===null?v=j:y.sibling=j,y=j);return ve&&er(x,L),v}for(j=r(x,j);L<h.length;L++)T=b(j,x,L,h[L],f),T!==null&&(e&&T.alternate!==null&&j.delete(T.key===null?L:T.key),d=a(T,d,L),y===null?v=T:y.sibling=T,y=T);return e&&j.forEach(function(F){return t(x,F)}),ve&&er(x,L),v}function S(x,d,h,f){var v=fo(h);if(typeof v!="function")throw Error(P(150));if(h=v.call(h),h==null)throw Error(P(151));for(var y=v=null,j=d,L=d=0,T=null,A=h.next();j!==null&&!A.done;L++,A=h.next()){j.index>L?(T=j,j=null):T=j.sibling;var F=g(x,j,A.value,f);if(F===null){j===null&&(j=T);break}e&&j&&F.alternate===null&&t(x,j),d=a(F,d,L),y===null?v=F:y.sibling=F,y=F,j=T}if(A.done)return n(x,j),ve&&er(x,L),v;if(j===null){for(;!A.done;L++,A=h.next())A=m(x,A.value,f),A!==null&&(d=a(A,d,L),y===null?v=A:y.sibling=A,y=A);return ve&&er(x,L),v}for(j=r(x,j);!A.done;L++,A=h.next())A=b(j,x,L,A.value,f),A!==null&&(e&&A.alternate!==null&&j.delete(A.key===null?L:A.key),d=a(A,d,L),y===null?v=A:y.sibling=A,y=A);return e&&j.forEach(function(X){return t(x,X)}),ve&&er(x,L),v}function E(x,d,h,f){if(typeof h=="object"&&h!==null&&h.type===kr&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Pl:e:{for(var v=h.key,y=d;y!==null;){if(y.key===v){if(v=h.type,v===kr){if(y.tag===7){n(x,y.sibling),d=l(y,h.props.children),d.return=x,x=d;break e}}else if(y.elementType===v||typeof v=="object"&&v!==null&&v.$$typeof===Sn&&zd(v)===y.type){n(x,y.sibling),d=l(y,h.props),d.ref=vo(x,y,h),d.return=x,x=d;break e}n(x,y);break}else t(x,y);y=y.sibling}h.type===kr?(d=sr(h.props.children,x.mode,f,h.key),d.return=x,x=d):(f=ha(h.type,h.key,h.props,null,x.mode,f),f.ref=vo(x,d,h),f.return=x,x=f)}return s(x);case wr:e:{for(y=h.key;d!==null;){if(d.key===y)if(d.tag===4&&d.stateNode.containerInfo===h.containerInfo&&d.stateNode.implementation===h.implementation){n(x,d.sibling),d=l(d,h.children||[]),d.return=x,x=d;break e}else{n(x,d);break}else t(x,d);d=d.sibling}d=Ys(h,x.mode,f),d.return=x,x=d}return s(x);case Sn:return y=h._init,E(x,d,y(h._payload),f)}if(Lo(h))return C(x,d,h,f);if(fo(h))return S(x,d,h,f);Hl(x,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,d!==null&&d.tag===6?(n(x,d.sibling),d=l(d,h),d.return=x,x=d):(n(x,d),d=Ks(h,x.mode,f),d.return=x,x=d),s(x)):n(x,d)}return E}var Yr=Cp(!0),jp=Cp(!1),xl={},Vt=Wn(xl),ll=Wn(xl),al=Wn(xl);function or(e){if(e===xl)throw Error(P(174));return e}function Fc(e,t){switch(pe(al,t),pe(ll,e),pe(Vt,xl),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:gi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=gi(t,e)}ge(Vt),pe(Vt,t)}function Qr(){ge(Vt),ge(ll),ge(al)}function Sp(e){or(al.current);var t=or(Vt.current),n=gi(t,e.type);t!==n&&(pe(ll,e),pe(Vt,n))}function Uc(e){ll.current===e&&(ge(Vt),ge(ll))}var Se=Wn(0);function Pa(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Us=[];function Wc(){for(var e=0;e<Us.length;e++)Us[e]._workInProgressVersionPrimary=null;Us.length=0}var ca=un.ReactCurrentDispatcher,Ws=un.ReactCurrentBatchConfig,ur=0,be=null,Be=null,ze=null,Aa=!1,Fo=!1,sl=0,t5=0;function Ge(){throw Error(P(321))}function Vc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Dt(e[n],t[n]))return!1;return!0}function Hc(e,t,n,r,l,a){if(ur=a,be=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ca.current=e===null||e.memoizedState===null?l5:a5,e=n(r,l),Fo){a=0;do{if(Fo=!1,sl=0,25<=a)throw Error(P(301));a+=1,ze=Be=null,t.updateQueue=null,ca.current=s5,e=n(r,l)}while(Fo)}if(ca.current=$a,t=Be!==null&&Be.next!==null,ur=0,ze=Be=be=null,Aa=!1,t)throw Error(P(300));return e}function Zc(){var e=sl!==0;return sl=0,e}function zt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ze===null?be.memoizedState=ze=e:ze=ze.next=e,ze}function wt(){if(Be===null){var e=be.alternate;e=e!==null?e.memoizedState:null}else e=Be.next;var t=ze===null?be.memoizedState:ze.next;if(t!==null)ze=t,Be=e;else{if(e===null)throw Error(P(310));Be=e,e={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},ze===null?be.memoizedState=ze=e:ze=ze.next=e}return ze}function il(e,t){return typeof t=="function"?t(e):t}function Vs(e){var t=wt(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=Be,l=r.baseQueue,a=n.pending;if(a!==null){if(l!==null){var s=l.next;l.next=a.next,a.next=s}r.baseQueue=l=a,n.pending=null}if(l!==null){a=l.next,r=r.baseState;var i=s=null,c=null,u=a;do{var p=u.lane;if((ur&p)===p)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var m={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(i=c=m,s=r):c=c.next=m,be.lanes|=p,dr|=p}u=u.next}while(u!==null&&u!==a);c===null?s=r:c.next=i,Dt(r,t.memoizedState)||(st=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do a=l.lane,be.lanes|=a,dr|=a,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Hs(e){var t=wt(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,a=t.memoizedState;if(l!==null){n.pending=null;var s=l=l.next;do a=e(a,s.action),s=s.next;while(s!==l);Dt(a,t.memoizedState)||(st=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function bp(){}function _p(e,t){var n=be,r=wt(),l=t(),a=!Dt(r.memoizedState,l);if(a&&(r.memoizedState=l,st=!0),r=r.queue,Gc(Lp.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||ze!==null&&ze.memoizedState.tag&1){if(n.flags|=2048,cl(9,kp.bind(null,n,r,l,t),void 0,null),Fe===null)throw Error(P(349));ur&30||wp(n,t,l)}return l}function wp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=be.updateQueue,t===null?(t={lastEffect:null,stores:null},be.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function kp(e,t,n,r){t.value=n,t.getSnapshot=r,Tp(t)&&Ep(e)}function Lp(e,t,n){return n(function(){Tp(t)&&Ep(e)})}function Tp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Dt(e,n)}catch{return!0}}function Ep(e){var t=an(e,1);t!==null&&$t(t,e,1,-1)}function Fd(e){var t=zt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:il,lastRenderedState:e},t.queue=e,e=e.dispatch=o5.bind(null,be,e),[t.memoizedState,e]}function cl(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=be.updateQueue,t===null?(t={lastEffect:null,stores:null},be.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Np(){return wt().memoizedState}function ua(e,t,n,r){var l=zt();be.flags|=e,l.memoizedState=cl(1|t,n,void 0,r===void 0?null:r)}function ns(e,t,n,r){var l=wt();r=r===void 0?null:r;var a=void 0;if(Be!==null){var s=Be.memoizedState;if(a=s.destroy,r!==null&&Vc(r,s.deps)){l.memoizedState=cl(t,n,a,r);return}}be.flags|=e,l.memoizedState=cl(1|t,n,a,r)}function Ud(e,t){return ua(8390656,8,e,t)}function Gc(e,t){return ns(2048,8,e,t)}function Op(e,t){return ns(4,2,e,t)}function Rp(e,t){return ns(4,4,e,t)}function Mp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Pp(e,t,n){return n=n!=null?n.concat([e]):null,ns(4,4,Mp.bind(null,t,e),n)}function Kc(){}function Ap(e,t){var n=wt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Vc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function $p(e,t){var n=wt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Vc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Bp(e,t,n){return ur&21?(Dt(n,t)||(n=z2(),be.lanes|=n,dr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,st=!0),e.memoizedState=n)}function n5(e,t){var n=ae;ae=n!==0&&4>n?n:4,e(!0);var r=Ws.transition;Ws.transition={};try{e(!1),t()}finally{ae=n,Ws.transition=r}}function Dp(){return wt().memoizedState}function r5(e,t,n){var r=An(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ip(e))zp(t,n);else if(n=gp(e,t,n,r),n!==null){var l=nt();$t(n,e,r,l),Fp(n,t,r)}}function o5(e,t,n){var r=An(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ip(e))zp(t,l);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var s=t.lastRenderedState,i=a(s,n);if(l.hasEagerState=!0,l.eagerState=i,Dt(i,s)){var c=t.interleaved;c===null?(l.next=l,Ic(t)):(l.next=c.next,c.next=l),t.interleaved=l;return}}catch{}finally{}n=gp(e,t,l,r),n!==null&&(l=nt(),$t(n,e,r,l),Fp(n,t,r))}}function Ip(e){var t=e.alternate;return e===be||t!==null&&t===be}function zp(e,t){Fo=Aa=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Fp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,wc(e,n)}}var $a={readContext:_t,useCallback:Ge,useContext:Ge,useEffect:Ge,useImperativeHandle:Ge,useInsertionEffect:Ge,useLayoutEffect:Ge,useMemo:Ge,useReducer:Ge,useRef:Ge,useState:Ge,useDebugValue:Ge,useDeferredValue:Ge,useTransition:Ge,useMutableSource:Ge,useSyncExternalStore:Ge,useId:Ge,unstable_isNewReconciler:!1},l5={readContext:_t,useCallback:function(e,t){return zt().memoizedState=[e,t===void 0?null:t],e},useContext:_t,useEffect:Ud,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ua(4194308,4,Mp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ua(4194308,4,e,t)},useInsertionEffect:function(e,t){return ua(4,2,e,t)},useMemo:function(e,t){var n=zt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=zt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=r5.bind(null,be,e),[r.memoizedState,e]},useRef:function(e){var t=zt();return e={current:e},t.memoizedState=e},useState:Fd,useDebugValue:Kc,useDeferredValue:function(e){return zt().memoizedState=e},useTransition:function(){var e=Fd(!1),t=e[0];return e=n5.bind(null,e[1]),zt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=be,l=zt();if(ve){if(n===void 0)throw Error(P(407));n=n()}else{if(n=t(),Fe===null)throw Error(P(349));ur&30||wp(r,t,n)}l.memoizedState=n;var a={value:n,getSnapshot:t};return l.queue=a,Ud(Lp.bind(null,r,a,e),[e]),r.flags|=2048,cl(9,kp.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=zt(),t=Fe.identifierPrefix;if(ve){var n=tn,r=en;n=(r&~(1<<32-At(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=sl++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=t5++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},a5={readContext:_t,useCallback:Ap,useContext:_t,useEffect:Gc,useImperativeHandle:Pp,useInsertionEffect:Op,useLayoutEffect:Rp,useMemo:$p,useReducer:Vs,useRef:Np,useState:function(){return Vs(il)},useDebugValue:Kc,useDeferredValue:function(e){var t=wt();return Bp(t,Be.memoizedState,e)},useTransition:function(){var e=Vs(il)[0],t=wt().memoizedState;return[e,t]},useMutableSource:bp,useSyncExternalStore:_p,useId:Dp,unstable_isNewReconciler:!1},s5={readContext:_t,useCallback:Ap,useContext:_t,useEffect:Gc,useImperativeHandle:Pp,useInsertionEffect:Op,useLayoutEffect:Rp,useMemo:$p,useReducer:Hs,useRef:Np,useState:function(){return Hs(il)},useDebugValue:Kc,useDeferredValue:function(e){var t=wt();return Be===null?t.memoizedState=e:Bp(t,Be.memoizedState,e)},useTransition:function(){var e=Hs(il)[0],t=wt().memoizedState;return[e,t]},useMutableSource:bp,useSyncExternalStore:_p,useId:Dp,unstable_isNewReconciler:!1};function Xr(e,t){try{var n="",r=t;do n+=A4(r),r=r.return;while(r);var l=n}catch(a){l=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:l,digest:null}}function Zs(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ii(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var i5=typeof WeakMap=="function"?WeakMap:Map;function Up(e,t,n){n=nn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Da||(Da=!0,Yi=r),Ii(e,t)},n}function Wp(e,t,n){n=nn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Ii(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){Ii(e,t),typeof r!="function"&&(Pn===null?Pn=new Set([this]):Pn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Wd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new i5;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=S5.bind(null,e,t,n),t.then(e,e))}function Vd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Hd(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=nn(-1,1),t.tag=2,Mn(n,t,1))),n.lanes|=1),e)}var c5=un.ReactCurrentOwner,st=!1;function et(e,t,n,r){t.child=e===null?jp(t,null,n,r):Yr(t,e.child,n,r)}function Zd(e,t,n,r,l){n=n.render;var a=t.ref;return Wr(t,l),r=Hc(e,t,n,r,a,l),n=Zc(),e!==null&&!st?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,sn(e,t,l)):(ve&&n&&Mc(t),t.flags|=1,et(e,t,r,l),t.child)}function Gd(e,t,n,r,l){if(e===null){var a=n.type;return typeof a=="function"&&!nu(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Vp(e,t,a,r,l)):(e=ha(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&l)){var s=a.memoizedProps;if(n=n.compare,n=n!==null?n:tl,n(s,r)&&e.ref===t.ref)return sn(e,t,l)}return t.flags|=1,e=$n(a,r),e.ref=t.ref,e.return=t,t.child=e}function Vp(e,t,n,r,l){if(e!==null){var a=e.memoizedProps;if(tl(a,r)&&e.ref===t.ref)if(st=!1,t.pendingProps=r=a,(e.lanes&l)!==0)e.flags&131072&&(st=!0);else return t.lanes=e.lanes,sn(e,t,l)}return zi(e,t,n,r,l)}function Hp(e,t,n){var r=t.pendingProps,l=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},pe($r,dt),dt|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,pe($r,dt),dt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,pe($r,dt),dt|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,pe($r,dt),dt|=r;return et(e,t,l,n),t.child}function Zp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function zi(e,t,n,r,l){var a=ct(n)?ir:Qe.current;return a=Gr(t,a),Wr(t,l),n=Hc(e,t,n,r,a,l),r=Zc(),e!==null&&!st?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,sn(e,t,l)):(ve&&r&&Mc(t),t.flags|=1,et(e,t,n,l),t.child)}function Kd(e,t,n,r,l){if(ct(n)){var a=!0;Ta(t)}else a=!1;if(Wr(t,l),t.stateNode===null)da(e,t),yp(t,n,r),Di(t,n,r,l),r=!0;else if(e===null){var s=t.stateNode,i=t.memoizedProps;s.props=i;var c=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=_t(u):(u=ct(n)?ir:Qe.current,u=Gr(t,u));var p=n.getDerivedStateFromProps,m=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function";m||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(i!==r||c!==u)&&Id(t,s,r,u),bn=!1;var g=t.memoizedState;s.state=g,Ma(t,r,s,l),c=t.memoizedState,i!==r||g!==c||it.current||bn?(typeof p=="function"&&(Bi(t,n,p,r),c=t.memoizedState),(i=bn||Dd(t,n,i,r,g,c,u))?(m||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),s.props=r,s.state=c,s.context=u,r=i):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,xp(e,t),i=t.memoizedProps,u=t.type===t.elementType?i:Ot(t.type,i),s.props=u,m=t.pendingProps,g=s.context,c=n.contextType,typeof c=="object"&&c!==null?c=_t(c):(c=ct(n)?ir:Qe.current,c=Gr(t,c));var b=n.getDerivedStateFromProps;(p=typeof b=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(i!==m||g!==c)&&Id(t,s,r,c),bn=!1,g=t.memoizedState,s.state=g,Ma(t,r,s,l);var C=t.memoizedState;i!==m||g!==C||it.current||bn?(typeof b=="function"&&(Bi(t,n,b,r),C=t.memoizedState),(u=bn||Dd(t,n,u,r,g,C,c)||!1)?(p||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,C,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,C,c)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||i===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=C),s.props=r,s.state=C,s.context=c,r=u):(typeof s.componentDidUpdate!="function"||i===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Fi(e,t,n,r,a,l)}function Fi(e,t,n,r,l,a){Zp(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return l&&Md(t,n,!1),sn(e,t,a);r=t.stateNode,c5.current=t;var i=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Yr(t,e.child,null,a),t.child=Yr(t,null,i,a)):et(e,t,i,a),t.memoizedState=r.state,l&&Md(t,n,!0),t.child}function Gp(e){var t=e.stateNode;t.pendingContext?Rd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Rd(e,t.context,!1),Fc(e,t.containerInfo)}function Yd(e,t,n,r,l){return Kr(),Ac(l),t.flags|=256,et(e,t,n,r),t.child}var Ui={dehydrated:null,treeContext:null,retryLane:0};function Wi(e){return{baseLanes:e,cachePool:null,transitions:null}}function Kp(e,t,n){var r=t.pendingProps,l=Se.current,a=!1,s=(t.flags&128)!==0,i;if((i=s)||(i=e!==null&&e.memoizedState===null?!1:(l&2)!==0),i?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),pe(Se,l&1),e===null)return Ai(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,a?(r=t.mode,a=t.child,s={mode:"hidden",children:s},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=s):a=ls(s,r,0,null),e=sr(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Wi(n),t.memoizedState=Ui,e):Yc(t,s));if(l=e.memoizedState,l!==null&&(i=l.dehydrated,i!==null))return u5(e,t,s,r,i,l,n);if(a){a=r.fallback,s=t.mode,l=e.child,i=l.sibling;var c={mode:"hidden",children:r.children};return!(s&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=$n(l,c),r.subtreeFlags=l.subtreeFlags&14680064),i!==null?a=$n(i,a):(a=sr(a,s,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,s=e.child.memoizedState,s=s===null?Wi(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},a.memoizedState=s,a.childLanes=e.childLanes&~n,t.memoizedState=Ui,r}return a=e.child,e=a.sibling,r=$n(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Yc(e,t){return t=ls({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Zl(e,t,n,r){return r!==null&&Ac(r),Yr(t,e.child,null,n),e=Yc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function u5(e,t,n,r,l,a,s){if(n)return t.flags&256?(t.flags&=-257,r=Zs(Error(P(422))),Zl(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,l=t.mode,r=ls({mode:"visible",children:r.children},l,0,null),a=sr(a,l,s,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&Yr(t,e.child,null,s),t.child.memoizedState=Wi(s),t.memoizedState=Ui,a);if(!(t.mode&1))return Zl(e,t,s,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var i=r.dgst;return r=i,a=Error(P(419)),r=Zs(a,r,void 0),Zl(e,t,s,r)}if(i=(s&e.childLanes)!==0,st||i){if(r=Fe,r!==null){switch(s&-s){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|s)?0:l,l!==0&&l!==a.retryLane&&(a.retryLane=l,an(e,l),$t(r,e,l,-1))}return tu(),r=Zs(Error(P(421))),Zl(e,t,s,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=b5.bind(null,e),l._reactRetry=t,null):(e=a.treeContext,pt=Rn(l.nextSibling),ft=t,ve=!0,Pt=null,e!==null&&(Ct[jt++]=en,Ct[jt++]=tn,Ct[jt++]=cr,en=e.id,tn=e.overflow,cr=t),t=Yc(t,r.children),t.flags|=4096,t)}function Qd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),$i(e.return,t,n)}function Gs(e,t,n,r,l){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=l)}function Yp(e,t,n){var r=t.pendingProps,l=r.revealOrder,a=r.tail;if(et(e,t,r.children,n),r=Se.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Qd(e,n,t);else if(e.tag===19)Qd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(pe(Se,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Pa(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Gs(t,!1,l,n,a);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Pa(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Gs(t,!0,n,null,a);break;case"together":Gs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function da(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function sn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),dr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(P(153));if(t.child!==null){for(e=t.child,n=$n(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=$n(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function d5(e,t,n){switch(t.tag){case 3:Gp(t),Kr();break;case 5:Sp(t);break;case 1:ct(t.type)&&Ta(t);break;case 4:Fc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;pe(Oa,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(pe(Se,Se.current&1),t.flags|=128,null):n&t.child.childLanes?Kp(e,t,n):(pe(Se,Se.current&1),e=sn(e,t,n),e!==null?e.sibling:null);pe(Se,Se.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Yp(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),pe(Se,Se.current),r)break;return null;case 22:case 23:return t.lanes=0,Hp(e,t,n)}return sn(e,t,n)}var Qp,Vi,Xp,qp;Qp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Vi=function(){};Xp=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,or(Vt.current);var a=null;switch(n){case"input":l=pi(e,l),r=pi(e,r),a=[];break;case"select":l=_e({},l,{value:void 0}),r=_e({},r,{value:void 0}),a=[];break;case"textarea":l=mi(e,l),r=mi(e,r),a=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ka)}xi(n,r);var s;n=null;for(u in l)if(!r.hasOwnProperty(u)&&l.hasOwnProperty(u)&&l[u]!=null)if(u==="style"){var i=l[u];for(s in i)i.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ko.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var c=r[u];if(i=l!=null?l[u]:void 0,r.hasOwnProperty(u)&&c!==i&&(c!=null||i!=null))if(u==="style")if(i){for(s in i)!i.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in c)c.hasOwnProperty(s)&&i[s]!==c[s]&&(n||(n={}),n[s]=c[s])}else n||(a||(a=[]),a.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,i=i?i.__html:void 0,c!=null&&i!==c&&(a=a||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(a=a||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ko.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&me("scroll",e),a||i===c||(a=[])):(a=a||[]).push(u,c))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}};qp=function(e,t,n,r){n!==r&&(t.flags|=4)};function yo(e,t){if(!ve)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ke(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function p5(e,t,n){var r=t.pendingProps;switch(Pc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(t),null;case 1:return ct(t.type)&&La(),Ke(t),null;case 3:return r=t.stateNode,Qr(),ge(it),ge(Qe),Wc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Vl(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Pt!==null&&(qi(Pt),Pt=null))),Vi(e,t),Ke(t),null;case 5:Uc(t);var l=or(al.current);if(n=t.type,e!==null&&t.stateNode!=null)Xp(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(P(166));return Ke(t),null}if(e=or(Vt.current),Vl(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[Ut]=t,r[ol]=a,e=(t.mode&1)!==0,n){case"dialog":me("cancel",r),me("close",r);break;case"iframe":case"object":case"embed":me("load",r);break;case"video":case"audio":for(l=0;l<Eo.length;l++)me(Eo[l],r);break;case"source":me("error",r);break;case"img":case"image":case"link":me("error",r),me("load",r);break;case"details":me("toggle",r);break;case"input":ld(r,a),me("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},me("invalid",r);break;case"textarea":sd(r,a),me("invalid",r)}xi(n,a),l=null;for(var s in a)if(a.hasOwnProperty(s)){var i=a[s];s==="children"?typeof i=="string"?r.textContent!==i&&(a.suppressHydrationWarning!==!0&&Wl(r.textContent,i,e),l=["children",i]):typeof i=="number"&&r.textContent!==""+i&&(a.suppressHydrationWarning!==!0&&Wl(r.textContent,i,e),l=["children",""+i]):Ko.hasOwnProperty(s)&&i!=null&&s==="onScroll"&&me("scroll",r)}switch(n){case"input":Al(r),ad(r,a,!0);break;case"textarea":Al(r),id(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=ka)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=w2(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Ut]=t,e[ol]=r,Qp(e,t,!1,!1),t.stateNode=e;e:{switch(s=vi(n,r),n){case"dialog":me("cancel",e),me("close",e),l=r;break;case"iframe":case"object":case"embed":me("load",e),l=r;break;case"video":case"audio":for(l=0;l<Eo.length;l++)me(Eo[l],e);l=r;break;case"source":me("error",e),l=r;break;case"img":case"image":case"link":me("error",e),me("load",e),l=r;break;case"details":me("toggle",e),l=r;break;case"input":ld(e,r),l=pi(e,r),me("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=_e({},r,{value:void 0}),me("invalid",e);break;case"textarea":sd(e,r),l=mi(e,r),me("invalid",e);break;default:l=r}xi(n,l),i=l;for(a in i)if(i.hasOwnProperty(a)){var c=i[a];a==="style"?T2(e,c):a==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&k2(e,c)):a==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Yo(e,c):typeof c=="number"&&Yo(e,""+c):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Ko.hasOwnProperty(a)?c!=null&&a==="onScroll"&&me("scroll",e):c!=null&&yc(e,a,c,s))}switch(n){case"input":Al(e),ad(e,r,!1);break;case"textarea":Al(e),id(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Bn(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?Ir(e,!!r.multiple,a,!1):r.defaultValue!=null&&Ir(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=ka)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ke(t),null;case 6:if(e&&t.stateNode!=null)qp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(P(166));if(n=or(al.current),or(Vt.current),Vl(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ut]=t,(a=r.nodeValue!==n)&&(e=ft,e!==null))switch(e.tag){case 3:Wl(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Wl(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ut]=t,t.stateNode=r}return Ke(t),null;case 13:if(ge(Se),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ve&&pt!==null&&t.mode&1&&!(t.flags&128))mp(),Kr(),t.flags|=98560,a=!1;else if(a=Vl(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(P(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(P(317));a[Ut]=t}else Kr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ke(t),a=!1}else Pt!==null&&(qi(Pt),Pt=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Se.current&1?De===0&&(De=3):tu())),t.updateQueue!==null&&(t.flags|=4),Ke(t),null);case 4:return Qr(),Vi(e,t),e===null&&nl(t.stateNode.containerInfo),Ke(t),null;case 10:return Dc(t.type._context),Ke(t),null;case 17:return ct(t.type)&&La(),Ke(t),null;case 19:if(ge(Se),a=t.memoizedState,a===null)return Ke(t),null;if(r=(t.flags&128)!==0,s=a.rendering,s===null)if(r)yo(a,!1);else{if(De!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Pa(e),s!==null){for(t.flags|=128,yo(a,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,s=a.alternate,s===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=s.childLanes,a.lanes=s.lanes,a.child=s.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=s.memoizedProps,a.memoizedState=s.memoizedState,a.updateQueue=s.updateQueue,a.type=s.type,e=s.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return pe(Se,Se.current&1|2),t.child}e=e.sibling}a.tail!==null&&Oe()>qr&&(t.flags|=128,r=!0,yo(a,!1),t.lanes=4194304)}else{if(!r)if(e=Pa(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),yo(a,!0),a.tail===null&&a.tailMode==="hidden"&&!s.alternate&&!ve)return Ke(t),null}else 2*Oe()-a.renderingStartTime>qr&&n!==1073741824&&(t.flags|=128,r=!0,yo(a,!1),t.lanes=4194304);a.isBackwards?(s.sibling=t.child,t.child=s):(n=a.last,n!==null?n.sibling=s:t.child=s,a.last=s)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Oe(),t.sibling=null,n=Se.current,pe(Se,r?n&1|2:n&1),t):(Ke(t),null);case 22:case 23:return eu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?dt&1073741824&&(Ke(t),t.subtreeFlags&6&&(t.flags|=8192)):Ke(t),null;case 24:return null;case 25:return null}throw Error(P(156,t.tag))}function f5(e,t){switch(Pc(t),t.tag){case 1:return ct(t.type)&&La(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Qr(),ge(it),ge(Qe),Wc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Uc(t),null;case 13:if(ge(Se),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(P(340));Kr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ge(Se),null;case 4:return Qr(),null;case 10:return Dc(t.type._context),null;case 22:case 23:return eu(),null;case 24:return null;default:return null}}var Gl=!1,Ye=!1,h5=typeof WeakSet=="function"?WeakSet:Set,I=null;function Ar(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ke(e,t,r)}else n.current=null}function Hi(e,t,n){try{n()}catch(r){ke(e,t,r)}}var Xd=!1;function m5(e,t){if(Ti=ba,e=np(),Rc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var s=0,i=-1,c=-1,u=0,p=0,m=e,g=null;t:for(;;){for(var b;m!==n||l!==0&&m.nodeType!==3||(i=s+l),m!==a||r!==0&&m.nodeType!==3||(c=s+r),m.nodeType===3&&(s+=m.nodeValue.length),(b=m.firstChild)!==null;)g=m,m=b;for(;;){if(m===e)break t;if(g===n&&++u===l&&(i=s),g===a&&++p===r&&(c=s),(b=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=b}n=i===-1||c===-1?null:{start:i,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ei={focusedElem:e,selectionRange:n},ba=!1,I=t;I!==null;)if(t=I,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,I=e;else for(;I!==null;){t=I;try{var C=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var S=C.memoizedProps,E=C.memoizedState,x=t.stateNode,d=x.getSnapshotBeforeUpdate(t.elementType===t.type?S:Ot(t.type,S),E);x.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(f){ke(t,t.return,f)}if(e=t.sibling,e!==null){e.return=t.return,I=e;break}I=t.return}return C=Xd,Xd=!1,C}function Uo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var a=l.destroy;l.destroy=void 0,a!==void 0&&Hi(t,n,a)}l=l.next}while(l!==r)}}function rs(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Zi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Jp(e){var t=e.alternate;t!==null&&(e.alternate=null,Jp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ut],delete t[ol],delete t[Ri],delete t[X0],delete t[q0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ef(e){return e.tag===5||e.tag===3||e.tag===4}function qd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ef(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Gi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ka));else if(r!==4&&(e=e.child,e!==null))for(Gi(e,t,n),e=e.sibling;e!==null;)Gi(e,t,n),e=e.sibling}function Ki(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ki(e,t,n),e=e.sibling;e!==null;)Ki(e,t,n),e=e.sibling}var We=null,Rt=!1;function vn(e,t,n){for(n=n.child;n!==null;)tf(e,t,n),n=n.sibling}function tf(e,t,n){if(Wt&&typeof Wt.onCommitFiberUnmount=="function")try{Wt.onCommitFiberUnmount(Ya,n)}catch{}switch(n.tag){case 5:Ye||Ar(n,t);case 6:var r=We,l=Rt;We=null,vn(e,t,n),We=r,Rt=l,We!==null&&(Rt?(e=We,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):We.removeChild(n.stateNode));break;case 18:We!==null&&(Rt?(e=We,n=n.stateNode,e.nodeType===8?zs(e.parentNode,n):e.nodeType===1&&zs(e,n),Jo(e)):zs(We,n.stateNode));break;case 4:r=We,l=Rt,We=n.stateNode.containerInfo,Rt=!0,vn(e,t,n),We=r,Rt=l;break;case 0:case 11:case 14:case 15:if(!Ye&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var a=l,s=a.destroy;a=a.tag,s!==void 0&&(a&2||a&4)&&Hi(n,t,s),l=l.next}while(l!==r)}vn(e,t,n);break;case 1:if(!Ye&&(Ar(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(i){ke(n,t,i)}vn(e,t,n);break;case 21:vn(e,t,n);break;case 22:n.mode&1?(Ye=(r=Ye)||n.memoizedState!==null,vn(e,t,n),Ye=r):vn(e,t,n);break;default:vn(e,t,n)}}function Jd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new h5),t.forEach(function(r){var l=_5.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Nt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var a=e,s=t,i=s;e:for(;i!==null;){switch(i.tag){case 5:We=i.stateNode,Rt=!1;break e;case 3:We=i.stateNode.containerInfo,Rt=!0;break e;case 4:We=i.stateNode.containerInfo,Rt=!0;break e}i=i.return}if(We===null)throw Error(P(160));tf(a,s,l),We=null,Rt=!1;var c=l.alternate;c!==null&&(c.return=null),l.return=null}catch(u){ke(l,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)nf(t,e),t=t.sibling}function nf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Nt(t,e),It(e),r&4){try{Uo(3,e,e.return),rs(3,e)}catch(S){ke(e,e.return,S)}try{Uo(5,e,e.return)}catch(S){ke(e,e.return,S)}}break;case 1:Nt(t,e),It(e),r&512&&n!==null&&Ar(n,n.return);break;case 5:if(Nt(t,e),It(e),r&512&&n!==null&&Ar(n,n.return),e.flags&32){var l=e.stateNode;try{Yo(l,"")}catch(S){ke(e,e.return,S)}}if(r&4&&(l=e.stateNode,l!=null)){var a=e.memoizedProps,s=n!==null?n.memoizedProps:a,i=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{i==="input"&&a.type==="radio"&&a.name!=null&&b2(l,a),vi(i,s);var u=vi(i,a);for(s=0;s<c.length;s+=2){var p=c[s],m=c[s+1];p==="style"?T2(l,m):p==="dangerouslySetInnerHTML"?k2(l,m):p==="children"?Yo(l,m):yc(l,p,m,u)}switch(i){case"input":fi(l,a);break;case"textarea":_2(l,a);break;case"select":var g=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!a.multiple;var b=a.value;b!=null?Ir(l,!!a.multiple,b,!1):g!==!!a.multiple&&(a.defaultValue!=null?Ir(l,!!a.multiple,a.defaultValue,!0):Ir(l,!!a.multiple,a.multiple?[]:"",!1))}l[ol]=a}catch(S){ke(e,e.return,S)}}break;case 6:if(Nt(t,e),It(e),r&4){if(e.stateNode===null)throw Error(P(162));l=e.stateNode,a=e.memoizedProps;try{l.nodeValue=a}catch(S){ke(e,e.return,S)}}break;case 3:if(Nt(t,e),It(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Jo(t.containerInfo)}catch(S){ke(e,e.return,S)}break;case 4:Nt(t,e),It(e);break;case 13:Nt(t,e),It(e),l=e.child,l.flags&8192&&(a=l.memoizedState!==null,l.stateNode.isHidden=a,!a||l.alternate!==null&&l.alternate.memoizedState!==null||(qc=Oe())),r&4&&Jd(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(Ye=(u=Ye)||p,Nt(t,e),Ye=u):Nt(t,e),It(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!p&&e.mode&1)for(I=e,p=e.child;p!==null;){for(m=I=p;I!==null;){switch(g=I,b=g.child,g.tag){case 0:case 11:case 14:case 15:Uo(4,g,g.return);break;case 1:Ar(g,g.return);var C=g.stateNode;if(typeof C.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,C.props=t.memoizedProps,C.state=t.memoizedState,C.componentWillUnmount()}catch(S){ke(r,n,S)}}break;case 5:Ar(g,g.return);break;case 22:if(g.memoizedState!==null){t1(m);continue}}b!==null?(b.return=g,I=b):t1(m)}p=p.sibling}e:for(p=null,m=e;;){if(m.tag===5){if(p===null){p=m;try{l=m.stateNode,u?(a=l.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(i=m.stateNode,c=m.memoizedProps.style,s=c!=null&&c.hasOwnProperty("display")?c.display:null,i.style.display=L2("display",s))}catch(S){ke(e,e.return,S)}}}else if(m.tag===6){if(p===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(S){ke(e,e.return,S)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;p===m&&(p=null),m=m.return}p===m&&(p=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Nt(t,e),It(e),r&4&&Jd(e);break;case 21:break;default:Nt(t,e),It(e)}}function It(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(ef(n)){var r=n;break e}n=n.return}throw Error(P(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Yo(l,""),r.flags&=-33);var a=qd(e);Ki(e,a,l);break;case 3:case 4:var s=r.stateNode.containerInfo,i=qd(e);Gi(e,i,s);break;default:throw Error(P(161))}}catch(c){ke(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function g5(e,t,n){I=e,rf(e)}function rf(e,t,n){for(var r=(e.mode&1)!==0;I!==null;){var l=I,a=l.child;if(l.tag===22&&r){var s=l.memoizedState!==null||Gl;if(!s){var i=l.alternate,c=i!==null&&i.memoizedState!==null||Ye;i=Gl;var u=Ye;if(Gl=s,(Ye=c)&&!u)for(I=l;I!==null;)s=I,c=s.child,s.tag===22&&s.memoizedState!==null?n1(l):c!==null?(c.return=s,I=c):n1(l);for(;a!==null;)I=a,rf(a),a=a.sibling;I=l,Gl=i,Ye=u}e1(e)}else l.subtreeFlags&8772&&a!==null?(a.return=l,I=a):e1(e)}}function e1(e){for(;I!==null;){var t=I;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ye||rs(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ye)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Ot(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Bd(t,a,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Bd(t,s,n)}break;case 5:var i=t.stateNode;if(n===null&&t.flags&4){n=i;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var m=p.dehydrated;m!==null&&Jo(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}Ye||t.flags&512&&Zi(t)}catch(g){ke(t,t.return,g)}}if(t===e){I=null;break}if(n=t.sibling,n!==null){n.return=t.return,I=n;break}I=t.return}}function t1(e){for(;I!==null;){var t=I;if(t===e){I=null;break}var n=t.sibling;if(n!==null){n.return=t.return,I=n;break}I=t.return}}function n1(e){for(;I!==null;){var t=I;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{rs(4,t)}catch(c){ke(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(c){ke(t,l,c)}}var a=t.return;try{Zi(t)}catch(c){ke(t,a,c)}break;case 5:var s=t.return;try{Zi(t)}catch(c){ke(t,s,c)}}}catch(c){ke(t,t.return,c)}if(t===e){I=null;break}var i=t.sibling;if(i!==null){i.return=t.return,I=i;break}I=t.return}}var x5=Math.ceil,Ba=un.ReactCurrentDispatcher,Qc=un.ReactCurrentOwner,bt=un.ReactCurrentBatchConfig,re=0,Fe=null,Re=null,He=0,dt=0,$r=Wn(0),De=0,ul=null,dr=0,os=0,Xc=0,Wo=null,at=null,qc=0,qr=1/0,qt=null,Da=!1,Yi=null,Pn=null,Kl=!1,Tn=null,Ia=0,Vo=0,Qi=null,pa=-1,fa=0;function nt(){return re&6?Oe():pa!==-1?pa:pa=Oe()}function An(e){return e.mode&1?re&2&&He!==0?He&-He:e5.transition!==null?(fa===0&&(fa=z2()),fa):(e=ae,e!==0||(e=window.event,e=e===void 0?16:G2(e.type)),e):1}function $t(e,t,n,r){if(50<Vo)throw Vo=0,Qi=null,Error(P(185));hl(e,n,r),(!(re&2)||e!==Fe)&&(e===Fe&&(!(re&2)&&(os|=n),De===4&&wn(e,He)),ut(e,r),n===1&&re===0&&!(t.mode&1)&&(qr=Oe()+500,es&&Vn()))}function ut(e,t){var n=e.callbackNode;e0(e,t);var r=Sa(e,e===Fe?He:0);if(r===0)n!==null&&dd(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&dd(n),t===1)e.tag===0?J0(r1.bind(null,e)):pp(r1.bind(null,e)),Y0(function(){!(re&6)&&Vn()}),n=null;else{switch(F2(r)){case 1:n=_c;break;case 4:n=D2;break;case 16:n=ja;break;case 536870912:n=I2;break;default:n=ja}n=pf(n,of.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function of(e,t){if(pa=-1,fa=0,re&6)throw Error(P(327));var n=e.callbackNode;if(Vr()&&e.callbackNode!==n)return null;var r=Sa(e,e===Fe?He:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=za(e,r);else{t=r;var l=re;re|=2;var a=af();(Fe!==e||He!==t)&&(qt=null,qr=Oe()+500,ar(e,t));do try{C5();break}catch(i){lf(e,i)}while(1);Bc(),Ba.current=a,re=l,Re!==null?t=0:(Fe=null,He=0,t=De)}if(t!==0){if(t===2&&(l=bi(e),l!==0&&(r=l,t=Xi(e,l))),t===1)throw n=ul,ar(e,0),wn(e,r),ut(e,Oe()),n;if(t===6)wn(e,r);else{if(l=e.current.alternate,!(r&30)&&!v5(l)&&(t=za(e,r),t===2&&(a=bi(e),a!==0&&(r=a,t=Xi(e,a))),t===1))throw n=ul,ar(e,0),wn(e,r),ut(e,Oe()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(P(345));case 2:tr(e,at,qt);break;case 3:if(wn(e,r),(r&130023424)===r&&(t=qc+500-Oe(),10<t)){if(Sa(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){nt(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Oi(tr.bind(null,e,at,qt),t);break}tr(e,at,qt);break;case 4:if(wn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var s=31-At(r);a=1<<s,s=t[s],s>l&&(l=s),r&=~a}if(r=l,r=Oe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*x5(r/1960))-r,10<r){e.timeoutHandle=Oi(tr.bind(null,e,at,qt),r);break}tr(e,at,qt);break;case 5:tr(e,at,qt);break;default:throw Error(P(329))}}}return ut(e,Oe()),e.callbackNode===n?of.bind(null,e):null}function Xi(e,t){var n=Wo;return e.current.memoizedState.isDehydrated&&(ar(e,t).flags|=256),e=za(e,t),e!==2&&(t=at,at=n,t!==null&&qi(t)),e}function qi(e){at===null?at=e:at.push.apply(at,e)}function v5(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],a=l.getSnapshot;l=l.value;try{if(!Dt(a(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function wn(e,t){for(t&=~Xc,t&=~os,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-At(t),r=1<<n;e[n]=-1,t&=~r}}function r1(e){if(re&6)throw Error(P(327));Vr();var t=Sa(e,0);if(!(t&1))return ut(e,Oe()),null;var n=za(e,t);if(e.tag!==0&&n===2){var r=bi(e);r!==0&&(t=r,n=Xi(e,r))}if(n===1)throw n=ul,ar(e,0),wn(e,t),ut(e,Oe()),n;if(n===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,tr(e,at,qt),ut(e,Oe()),null}function Jc(e,t){var n=re;re|=1;try{return e(t)}finally{re=n,re===0&&(qr=Oe()+500,es&&Vn())}}function pr(e){Tn!==null&&Tn.tag===0&&!(re&6)&&Vr();var t=re;re|=1;var n=bt.transition,r=ae;try{if(bt.transition=null,ae=1,e)return e()}finally{ae=r,bt.transition=n,re=t,!(re&6)&&Vn()}}function eu(){dt=$r.current,ge($r)}function ar(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,K0(n)),Re!==null)for(n=Re.return;n!==null;){var r=n;switch(Pc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&La();break;case 3:Qr(),ge(it),ge(Qe),Wc();break;case 5:Uc(r);break;case 4:Qr();break;case 13:ge(Se);break;case 19:ge(Se);break;case 10:Dc(r.type._context);break;case 22:case 23:eu()}n=n.return}if(Fe=e,Re=e=$n(e.current,null),He=dt=t,De=0,ul=null,Xc=os=dr=0,at=Wo=null,rr!==null){for(t=0;t<rr.length;t++)if(n=rr[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,a=n.pending;if(a!==null){var s=a.next;a.next=l,r.next=s}n.pending=r}rr=null}return e}function lf(e,t){do{var n=Re;try{if(Bc(),ca.current=$a,Aa){for(var r=be.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Aa=!1}if(ur=0,ze=Be=be=null,Fo=!1,sl=0,Qc.current=null,n===null||n.return===null){De=1,ul=t,Re=null;break}e:{var a=e,s=n.return,i=n,c=t;if(t=He,i.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,p=i,m=p.tag;if(!(p.mode&1)&&(m===0||m===11||m===15)){var g=p.alternate;g?(p.updateQueue=g.updateQueue,p.memoizedState=g.memoizedState,p.lanes=g.lanes):(p.updateQueue=null,p.memoizedState=null)}var b=Vd(s);if(b!==null){b.flags&=-257,Hd(b,s,i,a,t),b.mode&1&&Wd(a,u,t),t=b,c=u;var C=t.updateQueue;if(C===null){var S=new Set;S.add(c),t.updateQueue=S}else C.add(c);break e}else{if(!(t&1)){Wd(a,u,t),tu();break e}c=Error(P(426))}}else if(ve&&i.mode&1){var E=Vd(s);if(E!==null){!(E.flags&65536)&&(E.flags|=256),Hd(E,s,i,a,t),Ac(Xr(c,i));break e}}a=c=Xr(c,i),De!==4&&(De=2),Wo===null?Wo=[a]:Wo.push(a),a=s;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var x=Up(a,c,t);$d(a,x);break e;case 1:i=c;var d=a.type,h=a.stateNode;if(!(a.flags&128)&&(typeof d.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Pn===null||!Pn.has(h)))){a.flags|=65536,t&=-t,a.lanes|=t;var f=Wp(a,i,t);$d(a,f);break e}}a=a.return}while(a!==null)}cf(n)}catch(v){t=v,Re===n&&n!==null&&(Re=n=n.return);continue}break}while(1)}function af(){var e=Ba.current;return Ba.current=$a,e===null?$a:e}function tu(){(De===0||De===3||De===2)&&(De=4),Fe===null||!(dr&268435455)&&!(os&268435455)||wn(Fe,He)}function za(e,t){var n=re;re|=2;var r=af();(Fe!==e||He!==t)&&(qt=null,ar(e,t));do try{y5();break}catch(l){lf(e,l)}while(1);if(Bc(),re=n,Ba.current=r,Re!==null)throw Error(P(261));return Fe=null,He=0,De}function y5(){for(;Re!==null;)sf(Re)}function C5(){for(;Re!==null&&!H4();)sf(Re)}function sf(e){var t=df(e.alternate,e,dt);e.memoizedProps=e.pendingProps,t===null?cf(e):Re=t,Qc.current=null}function cf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=f5(n,t),n!==null){n.flags&=32767,Re=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{De=6,Re=null;return}}else if(n=p5(n,t,dt),n!==null){Re=n;return}if(t=t.sibling,t!==null){Re=t;return}Re=t=e}while(t!==null);De===0&&(De=5)}function tr(e,t,n){var r=ae,l=bt.transition;try{bt.transition=null,ae=1,j5(e,t,n,r)}finally{bt.transition=l,ae=r}return null}function j5(e,t,n,r){do Vr();while(Tn!==null);if(re&6)throw Error(P(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(t0(e,a),e===Fe&&(Re=Fe=null,He=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Kl||(Kl=!0,pf(ja,function(){return Vr(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=bt.transition,bt.transition=null;var s=ae;ae=1;var i=re;re|=4,Qc.current=null,m5(e,n),nf(n,e),F0(Ei),ba=!!Ti,Ei=Ti=null,e.current=n,g5(n),Z4(),re=i,ae=s,bt.transition=a}else e.current=n;if(Kl&&(Kl=!1,Tn=e,Ia=l),a=e.pendingLanes,a===0&&(Pn=null),Y4(n.stateNode),ut(e,Oe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(Da)throw Da=!1,e=Yi,Yi=null,e;return Ia&1&&e.tag!==0&&Vr(),a=e.pendingLanes,a&1?e===Qi?Vo++:(Vo=0,Qi=e):Vo=0,Vn(),null}function Vr(){if(Tn!==null){var e=F2(Ia),t=bt.transition,n=ae;try{if(bt.transition=null,ae=16>e?16:e,Tn===null)var r=!1;else{if(e=Tn,Tn=null,Ia=0,re&6)throw Error(P(331));var l=re;for(re|=4,I=e.current;I!==null;){var a=I,s=a.child;if(I.flags&16){var i=a.deletions;if(i!==null){for(var c=0;c<i.length;c++){var u=i[c];for(I=u;I!==null;){var p=I;switch(p.tag){case 0:case 11:case 15:Uo(8,p,a)}var m=p.child;if(m!==null)m.return=p,I=m;else for(;I!==null;){p=I;var g=p.sibling,b=p.return;if(Jp(p),p===u){I=null;break}if(g!==null){g.return=b,I=g;break}I=b}}}var C=a.alternate;if(C!==null){var S=C.child;if(S!==null){C.child=null;do{var E=S.sibling;S.sibling=null,S=E}while(S!==null)}}I=a}}if(a.subtreeFlags&2064&&s!==null)s.return=a,I=s;else e:for(;I!==null;){if(a=I,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Uo(9,a,a.return)}var x=a.sibling;if(x!==null){x.return=a.return,I=x;break e}I=a.return}}var d=e.current;for(I=d;I!==null;){s=I;var h=s.child;if(s.subtreeFlags&2064&&h!==null)h.return=s,I=h;else e:for(s=d;I!==null;){if(i=I,i.flags&2048)try{switch(i.tag){case 0:case 11:case 15:rs(9,i)}}catch(v){ke(i,i.return,v)}if(i===s){I=null;break e}var f=i.sibling;if(f!==null){f.return=i.return,I=f;break e}I=i.return}}if(re=l,Vn(),Wt&&typeof Wt.onPostCommitFiberRoot=="function")try{Wt.onPostCommitFiberRoot(Ya,e)}catch{}r=!0}return r}finally{ae=n,bt.transition=t}}return!1}function o1(e,t,n){t=Xr(n,t),t=Up(e,t,1),e=Mn(e,t,1),t=nt(),e!==null&&(hl(e,1,t),ut(e,t))}function ke(e,t,n){if(e.tag===3)o1(e,e,n);else for(;t!==null;){if(t.tag===3){o1(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Pn===null||!Pn.has(r))){e=Xr(n,e),e=Wp(t,e,1),t=Mn(t,e,1),e=nt(),t!==null&&(hl(t,1,e),ut(t,e));break}}t=t.return}}function S5(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=nt(),e.pingedLanes|=e.suspendedLanes&n,Fe===e&&(He&n)===n&&(De===4||De===3&&(He&130023424)===He&&500>Oe()-qc?ar(e,0):Xc|=n),ut(e,t)}function uf(e,t){t===0&&(e.mode&1?(t=Dl,Dl<<=1,!(Dl&130023424)&&(Dl=4194304)):t=1);var n=nt();e=an(e,t),e!==null&&(hl(e,t,n),ut(e,n))}function b5(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),uf(e,n)}function _5(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(t),uf(e,n)}var df;df=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||it.current)st=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return st=!1,d5(e,t,n);st=!!(e.flags&131072)}else st=!1,ve&&t.flags&1048576&&fp(t,Na,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;da(e,t),e=t.pendingProps;var l=Gr(t,Qe.current);Wr(t,n),l=Hc(null,t,r,e,l,n);var a=Zc();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ct(r)?(a=!0,Ta(t)):a=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,zc(t),l.updater=ts,t.stateNode=l,l._reactInternals=t,Di(t,r,e,n),t=Fi(null,t,r,!0,a,n)):(t.tag=0,ve&&a&&Mc(t),et(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(da(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=k5(r),e=Ot(r,e),l){case 0:t=zi(null,t,r,e,n);break e;case 1:t=Kd(null,t,r,e,n);break e;case 11:t=Zd(null,t,r,e,n);break e;case 14:t=Gd(null,t,r,Ot(r.type,e),n);break e}throw Error(P(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ot(r,l),zi(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ot(r,l),Kd(e,t,r,l,n);case 3:e:{if(Gp(t),e===null)throw Error(P(387));r=t.pendingProps,a=t.memoizedState,l=a.element,xp(e,t),Ma(t,r,null,n);var s=t.memoizedState;if(r=s.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){l=Xr(Error(P(423)),t),t=Yd(e,t,r,n,l);break e}else if(r!==l){l=Xr(Error(P(424)),t),t=Yd(e,t,r,n,l);break e}else for(pt=Rn(t.stateNode.containerInfo.firstChild),ft=t,ve=!0,Pt=null,n=jp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Kr(),r===l){t=sn(e,t,n);break e}et(e,t,r,n)}t=t.child}return t;case 5:return Sp(t),e===null&&Ai(t),r=t.type,l=t.pendingProps,a=e!==null?e.memoizedProps:null,s=l.children,Ni(r,l)?s=null:a!==null&&Ni(r,a)&&(t.flags|=32),Zp(e,t),et(e,t,s,n),t.child;case 6:return e===null&&Ai(t),null;case 13:return Kp(e,t,n);case 4:return Fc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Yr(t,null,r,n):et(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ot(r,l),Zd(e,t,r,l,n);case 7:return et(e,t,t.pendingProps,n),t.child;case 8:return et(e,t,t.pendingProps.children,n),t.child;case 12:return et(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,a=t.memoizedProps,s=l.value,pe(Oa,r._currentValue),r._currentValue=s,a!==null)if(Dt(a.value,s)){if(a.children===l.children&&!it.current){t=sn(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var i=a.dependencies;if(i!==null){s=a.child;for(var c=i.firstContext;c!==null;){if(c.context===r){if(a.tag===1){c=nn(-1,n&-n),c.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?c.next=c:(c.next=p.next,p.next=c),u.pending=c}}a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),$i(a.return,n,t),i.lanes|=n;break}c=c.next}}else if(a.tag===10)s=a.type===t.type?null:a.child;else if(a.tag===18){if(s=a.return,s===null)throw Error(P(341));s.lanes|=n,i=s.alternate,i!==null&&(i.lanes|=n),$i(s,n,t),s=a.sibling}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===t){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}et(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,Wr(t,n),l=_t(l),r=r(l),t.flags|=1,et(e,t,r,n),t.child;case 14:return r=t.type,l=Ot(r,t.pendingProps),l=Ot(r.type,l),Gd(e,t,r,l,n);case 15:return Vp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ot(r,l),da(e,t),t.tag=1,ct(r)?(e=!0,Ta(t)):e=!1,Wr(t,n),yp(t,r,l),Di(t,r,l,n),Fi(null,t,r,!0,e,n);case 19:return Yp(e,t,n);case 22:return Hp(e,t,n)}throw Error(P(156,t.tag))};function pf(e,t){return B2(e,t)}function w5(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function St(e,t,n,r){return new w5(e,t,n,r)}function nu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function k5(e){if(typeof e=="function")return nu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===jc)return 11;if(e===Sc)return 14}return 2}function $n(e,t){var n=e.alternate;return n===null?(n=St(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ha(e,t,n,r,l,a){var s=2;if(r=e,typeof e=="function")nu(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case kr:return sr(n.children,l,a,t);case Cc:s=8,l|=8;break;case ii:return e=St(12,n,t,l|2),e.elementType=ii,e.lanes=a,e;case ci:return e=St(13,n,t,l),e.elementType=ci,e.lanes=a,e;case ui:return e=St(19,n,t,l),e.elementType=ui,e.lanes=a,e;case C2:return ls(n,l,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case v2:s=10;break e;case y2:s=9;break e;case jc:s=11;break e;case Sc:s=14;break e;case Sn:s=16,r=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return t=St(s,n,t,l),t.elementType=e,t.type=r,t.lanes=a,t}function sr(e,t,n,r){return e=St(7,e,r,t),e.lanes=n,e}function ls(e,t,n,r){return e=St(22,e,r,t),e.elementType=C2,e.lanes=n,e.stateNode={isHidden:!1},e}function Ks(e,t,n){return e=St(6,e,null,t),e.lanes=n,e}function Ys(e,t,n){return t=St(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function L5(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Es(0),this.expirationTimes=Es(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Es(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function ru(e,t,n,r,l,a,s,i,c){return e=new L5(e,t,n,i,c),t===1?(t=1,a===!0&&(t|=8)):t=0,a=St(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},zc(a),e}function T5(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:wr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ff(e){if(!e)return Dn;e=e._reactInternals;e:{if(gr(e)!==e||e.tag!==1)throw Error(P(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ct(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(P(171))}if(e.tag===1){var n=e.type;if(ct(n))return dp(e,n,t)}return t}function hf(e,t,n,r,l,a,s,i,c){return e=ru(n,r,!0,e,l,a,s,i,c),e.context=ff(null),n=e.current,r=nt(),l=An(n),a=nn(r,l),a.callback=t??null,Mn(n,a,l),e.current.lanes=l,hl(e,l,r),ut(e,r),e}function as(e,t,n,r){var l=t.current,a=nt(),s=An(l);return n=ff(n),t.context===null?t.context=n:t.pendingContext=n,t=nn(a,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Mn(l,t,s),e!==null&&($t(e,l,s,a),ia(e,l,s)),s}function Fa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function l1(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ou(e,t){l1(e,t),(e=e.alternate)&&l1(e,t)}function E5(){return null}var mf=typeof reportError=="function"?reportError:function(e){console.error(e)};function lu(e){this._internalRoot=e}ss.prototype.render=lu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(P(409));as(e,t,null,null)};ss.prototype.unmount=lu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;pr(function(){as(null,e,null,null)}),t[ln]=null}};function ss(e){this._internalRoot=e}ss.prototype.unstable_scheduleHydration=function(e){if(e){var t=V2();e={blockedOn:null,target:e,priority:t};for(var n=0;n<_n.length&&t!==0&&t<_n[n].priority;n++);_n.splice(n,0,e),n===0&&Z2(e)}};function au(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function is(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function a1(){}function N5(e,t,n,r,l){if(l){if(typeof r=="function"){var a=r;r=function(){var u=Fa(s);a.call(u)}}var s=hf(t,r,e,0,null,!1,!1,"",a1);return e._reactRootContainer=s,e[ln]=s.current,nl(e.nodeType===8?e.parentNode:e),pr(),s}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var i=r;r=function(){var u=Fa(c);i.call(u)}}var c=ru(e,0,!1,null,null,!1,!1,"",a1);return e._reactRootContainer=c,e[ln]=c.current,nl(e.nodeType===8?e.parentNode:e),pr(function(){as(t,c,n,r)}),c}function cs(e,t,n,r,l){var a=n._reactRootContainer;if(a){var s=a;if(typeof l=="function"){var i=l;l=function(){var c=Fa(s);i.call(c)}}as(t,s,e,l)}else s=N5(n,t,e,l,r);return Fa(s)}U2=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=To(t.pendingLanes);n!==0&&(wc(t,n|1),ut(t,Oe()),!(re&6)&&(qr=Oe()+500,Vn()))}break;case 13:pr(function(){var r=an(e,1);if(r!==null){var l=nt();$t(r,e,1,l)}}),ou(e,1)}};kc=function(e){if(e.tag===13){var t=an(e,134217728);if(t!==null){var n=nt();$t(t,e,134217728,n)}ou(e,134217728)}};W2=function(e){if(e.tag===13){var t=An(e),n=an(e,t);if(n!==null){var r=nt();$t(n,e,t,r)}ou(e,t)}};V2=function(){return ae};H2=function(e,t){var n=ae;try{return ae=e,t()}finally{ae=n}};Ci=function(e,t,n){switch(t){case"input":if(fi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=Ja(r);if(!l)throw Error(P(90));S2(r),fi(r,l)}}}break;case"textarea":_2(e,n);break;case"select":t=n.value,t!=null&&Ir(e,!!n.multiple,t,!1)}};O2=Jc;R2=pr;var O5={usingClientEntryPoint:!1,Events:[gl,Nr,Ja,E2,N2,Jc]},Co={findFiberByHostInstance:nr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},R5={bundleType:Co.bundleType,version:Co.version,rendererPackageName:Co.rendererPackageName,rendererConfig:Co.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:un.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=A2(e),e===null?null:e.stateNode},findFiberByHostInstance:Co.findFiberByHostInstance||E5,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yl.isDisabled&&Yl.supportsFiber)try{Ya=Yl.inject(R5),Wt=Yl}catch{}}gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O5;gt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!au(t))throw Error(P(200));return T5(e,t,null,n)};gt.createRoot=function(e,t){if(!au(e))throw Error(P(299));var n=!1,r="",l=mf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=ru(e,1,!1,null,null,n,!1,r,l),e[ln]=t.current,nl(e.nodeType===8?e.parentNode:e),new lu(t)};gt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=A2(t),e=e===null?null:e.stateNode,e};gt.flushSync=function(e){return pr(e)};gt.hydrate=function(e,t,n){if(!is(t))throw Error(P(200));return cs(null,e,t,!0,n)};gt.hydrateRoot=function(e,t,n){if(!au(e))throw Error(P(405));var r=n!=null&&n.hydratedSources||null,l=!1,a="",s=mf;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=hf(t,null,e,1,n??null,l,!1,a,s),e[ln]=t.current,nl(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new ss(t)};gt.render=function(e,t,n){if(!is(t))throw Error(P(200));return cs(null,e,t,!1,n)};gt.unmountComponentAtNode=function(e){if(!is(e))throw Error(P(40));return e._reactRootContainer?(pr(function(){cs(null,null,e,!1,function(){e._reactRootContainer=null,e[ln]=null})}),!0):!1};gt.unstable_batchedUpdates=Jc;gt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!is(n))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return cs(e,t,n,!1,r)};gt.version="18.2.0-next-9e3b772b8-20220608";function gf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gf)}catch(e){console.error(e)}}gf(),f2.exports=gt;var M5=f2.exports,s1=M5;ai.createRoot=s1.createRoot,ai.hydrateRoot=s1.hydrateRoot;function P5(e,t){if(e==null)return{};var n={},r=Object.keys(e),l,a;for(a=0;a<r.length;a++)l=r[a],!(t.indexOf(l)>=0)&&(n[l]=e[l]);return n}function A5(e,t){if(e==null)return{};var n=P5(e,t),r,l;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)r=a[l],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Ji(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function $5(e){if(Array.isArray(e))return Ji(e)}function B5(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function D5(e,t){if(e){if(typeof e=="string")return Ji(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ji(e,t)}}function I5(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function z5(e){return $5(e)||B5(e)||D5(e)||I5()}function dl(e){"@babel/helpers - typeof";return dl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},dl(e)}function F5(e,t){if(dl(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(dl(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function U5(e){var t=F5(e,"string");return dl(t)==="symbol"?t:String(t)}function xf(e,t,n){return t=U5(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ec(){return ec=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ec.apply(this,arguments)}function i1(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),n.push.apply(n,r)}return n}function Br(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?i1(Object(n),!0).forEach(function(r){xf(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i1(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function W5(e){var t=e.length;if(t===0||t===1)return e;if(t===2)return[e[0],e[1],"".concat(e[0],".").concat(e[1]),"".concat(e[1],".").concat(e[0])];if(t===3)return[e[0],e[1],e[2],"".concat(e[0],".").concat(e[1]),"".concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[0]),"".concat(e[1],".").concat(e[2]),"".concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[1],".").concat(e[0])];if(t>=4)return[e[0],e[1],e[2],e[3],"".concat(e[0],".").concat(e[1]),"".concat(e[0],".").concat(e[2]),"".concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[0]),"".concat(e[1],".").concat(e[2]),"".concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[1]),"".concat(e[2],".").concat(e[3]),"".concat(e[3],".").concat(e[0]),"".concat(e[3],".").concat(e[1]),"".concat(e[3],".").concat(e[2]),"".concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[1],".").concat(e[3]),"".concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[2],".").concat(e[3]),"".concat(e[0],".").concat(e[3],".").concat(e[1]),"".concat(e[0],".").concat(e[3],".").concat(e[2]),"".concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[1],".").concat(e[2],".").concat(e[3]),"".concat(e[1],".").concat(e[3],".").concat(e[0]),"".concat(e[1],".").concat(e[3],".").concat(e[2]),"".concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[0],".").concat(e[3]),"".concat(e[2],".").concat(e[1],".").concat(e[0]),"".concat(e[2],".").concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[3],".").concat(e[0]),"".concat(e[2],".").concat(e[3],".").concat(e[1]),"".concat(e[3],".").concat(e[0],".").concat(e[1]),"".concat(e[3],".").concat(e[0],".").concat(e[2]),"".concat(e[3],".").concat(e[1],".").concat(e[0]),"".concat(e[3],".").concat(e[1],".").concat(e[2]),"".concat(e[3],".").concat(e[2],".").concat(e[0]),"".concat(e[3],".").concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[1],".").concat(e[2],".").concat(e[3]),"".concat(e[0],".").concat(e[1],".").concat(e[3],".").concat(e[2]),"".concat(e[0],".").concat(e[2],".").concat(e[1],".").concat(e[3]),"".concat(e[0],".").concat(e[2],".").concat(e[3],".").concat(e[1]),"".concat(e[0],".").concat(e[3],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[3],".").concat(e[2],".").concat(e[1]),"".concat(e[1],".").concat(e[0],".").concat(e[2],".").concat(e[3]),"".concat(e[1],".").concat(e[0],".").concat(e[3],".").concat(e[2]),"".concat(e[1],".").concat(e[2],".").concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[2],".").concat(e[3],".").concat(e[0]),"".concat(e[1],".").concat(e[3],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[3],".").concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[0],".").concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[0],".").concat(e[3],".").concat(e[1]),"".concat(e[2],".").concat(e[1],".").concat(e[0],".").concat(e[3]),"".concat(e[2],".").concat(e[1],".").concat(e[3],".").concat(e[0]),"".concat(e[2],".").concat(e[3],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[3],".").concat(e[1],".").concat(e[0]),"".concat(e[3],".").concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[3],".").concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[3],".").concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[3],".").concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[3],".").concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[3],".").concat(e[2],".").concat(e[1],".").concat(e[0])]}var Qs={};function V5(e){if(e.length===0||e.length===1)return e;var t=e.join(".");return Qs[t]||(Qs[t]=W5(e)),Qs[t]}function H5(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,r=e.filter(function(a){return a!=="token"}),l=V5(r);return l.reduce(function(a,s){return Br(Br({},a),n[s])},t)}function c1(e){return e.join(" ")}function Z5(e,t){var n=0;return function(r){return n+=1,r.map(function(l,a){return vf({node:l,stylesheet:e,useInlineStyles:t,key:"code-segment-".concat(n,"-").concat(a)})})}}function vf(e){var t=e.node,n=e.stylesheet,r=e.style,l=r===void 0?{}:r,a=e.useInlineStyles,s=e.key,i=t.properties,c=t.type,u=t.tagName,p=t.value;if(c==="text")return p;if(u){var m=Z5(n,a),g;if(!a)g=Br(Br({},i),{},{className:c1(i.className)});else{var b=Object.keys(n).reduce(function(x,d){return d.split(".").forEach(function(h){x.includes(h)||x.push(h)}),x},[]),C=i.className&&i.className.includes("token")?["token"]:[],S=i.className&&C.concat(i.className.filter(function(x){return!b.includes(x)}));g=Br(Br({},i),{},{className:c1(S)||void 0,style:H5(i.className,Object.assign({},i.style,l),n)})}var E=m(t.children);return Ve.createElement(u,ec({key:s},g),E)}}const G5=function(e,t){var n=e.listLanguages();return n.indexOf(t)!==-1};var K5=["language","children","style","customStyle","codeTagProps","useInlineStyles","showLineNumbers","showInlineLineNumbers","startingLineNumber","lineNumberContainerStyle","lineNumberStyle","wrapLines","wrapLongLines","lineProps","renderer","PreTag","CodeTag","code","astGenerator"];function u1(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),n.push.apply(n,r)}return n}function Ft(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?u1(Object(n),!0).forEach(function(r){xf(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u1(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var Y5=/\n/g;function Q5(e){return e.match(Y5)}function X5(e){var t=e.lines,n=e.startingLineNumber,r=e.style;return t.map(function(l,a){var s=a+n;return Ve.createElement("span",{key:"line-".concat(a),className:"react-syntax-highlighter-line-number",style:typeof r=="function"?r(s):r},"".concat(s,`
`))})}function q5(e){var t=e.codeString,n=e.codeStyle,r=e.containerStyle,l=r===void 0?{float:"left",paddingRight:"10px"}:r,a=e.numberStyle,s=a===void 0?{}:a,i=e.startingLineNumber;return Ve.createElement("code",{style:Object.assign({},n,l)},X5({lines:t.replace(/\n$/,"").split(`
`),style:s,startingLineNumber:i}))}function J5(e){return"".concat(e.toString().length,".25em")}function yf(e,t){return{type:"element",tagName:"span",properties:{key:"line-number--".concat(e),className:["comment","linenumber","react-syntax-highlighter-line-number"],style:t},children:[{type:"text",value:e}]}}function Cf(e,t,n){var r={display:"inline-block",minWidth:J5(n),paddingRight:"1em",textAlign:"right",userSelect:"none"},l=typeof e=="function"?e(t):e,a=Ft(Ft({},r),l);return a}function ma(e){var t=e.children,n=e.lineNumber,r=e.lineNumberStyle,l=e.largestLineNumber,a=e.showInlineLineNumbers,s=e.lineProps,i=s===void 0?{}:s,c=e.className,u=c===void 0?[]:c,p=e.showLineNumbers,m=e.wrapLongLines,g=typeof i=="function"?i(n):i;if(g.className=u,n&&a){var b=Cf(r,n,l);t.unshift(yf(n,b))}return m&p&&(g.style=Ft(Ft({},g.style),{},{display:"flex"})),{type:"element",tagName:"span",properties:g,children:t}}function jf(e){for(var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],r=0;r<e.length;r++){var l=e[r];if(l.type==="text")n.push(ma({children:[l],className:z5(new Set(t))}));else if(l.children){var a=t.concat(l.properties.className);jf(l.children,a).forEach(function(s){return n.push(s)})}}return n}function e6(e,t,n,r,l,a,s,i,c){var u,p=jf(e.value),m=[],g=-1,b=0;function C(v,y){var j=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return ma({children:v,lineNumber:y,lineNumberStyle:i,largestLineNumber:s,showInlineLineNumbers:l,lineProps:n,className:j,showLineNumbers:r,wrapLongLines:c})}function S(v,y){if(r&&y&&l){var j=Cf(i,y,s);v.unshift(yf(y,j))}return v}function E(v,y){var j=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return t||j.length>0?C(v,y,j):S(v,y)}for(var x=function(){var y=p[b],j=y.children[0].value,L=Q5(j);if(L){var T=j.split(`
`);T.forEach(function(A,F){var X=r&&m.length+a,le={type:"text",value:"".concat(A,`
`)};if(F===0){var ye=p.slice(g+1,b).concat(ma({children:[le],className:y.properties.className})),J=E(ye,X);m.push(J)}else if(F===T.length-1){var ce=p[b+1]&&p[b+1].children&&p[b+1].children[0],xe={type:"text",value:"".concat(A)};if(ce){var N=ma({children:[xe],className:y.properties.className});p.splice(b+1,0,N)}else{var $=[xe],B=E($,X,y.properties.className);m.push(B)}}else{var z=[le],G=E(z,X,y.properties.className);m.push(G)}}),g=b}b++};b<p.length;)x();if(g!==p.length-1){var d=p.slice(g+1,p.length);if(d&&d.length){var h=r&&m.length+a,f=E(d,h);m.push(f)}}return t?m:(u=[]).concat.apply(u,m)}function t6(e){var t=e.rows,n=e.stylesheet,r=e.useInlineStyles;return t.map(function(l,a){return vf({node:l,stylesheet:n,useInlineStyles:r,key:"code-segement".concat(a)})})}function Sf(e){return e&&typeof e.highlightAuto<"u"}function n6(e){var t=e.astGenerator,n=e.language,r=e.code,l=e.defaultCodeValue;if(Sf(t)){var a=G5(t,n);return n==="text"?{value:l,language:"text"}:a?t.highlight(n,r):t.highlightAuto(r)}try{return n&&n!=="text"?{value:t.highlight(r,n)}:{value:l}}catch{return{value:l}}}function r6(e,t){return function(r){var l=r.language,a=r.children,s=r.style,i=s===void 0?t:s,c=r.customStyle,u=c===void 0?{}:c,p=r.codeTagProps,m=p===void 0?{className:l?"language-".concat(l):void 0,style:Ft(Ft({},i['code[class*="language-"]']),i['code[class*="language-'.concat(l,'"]')])}:p,g=r.useInlineStyles,b=g===void 0?!0:g,C=r.showLineNumbers,S=C===void 0?!1:C,E=r.showInlineLineNumbers,x=E===void 0?!0:E,d=r.startingLineNumber,h=d===void 0?1:d,f=r.lineNumberContainerStyle,v=r.lineNumberStyle,y=v===void 0?{}:v,j=r.wrapLines,L=r.wrapLongLines,T=L===void 0?!1:L,A=r.lineProps,F=A===void 0?{}:A,X=r.renderer,le=r.PreTag,ye=le===void 0?"pre":le,J=r.CodeTag,ce=J===void 0?"code":J,xe=r.code,N=xe===void 0?(Array.isArray(a)?a[0]:a)||"":xe,$=r.astGenerator,B=A5(r,K5);$=$||e;var z=S?Ve.createElement(q5,{containerStyle:f,codeStyle:m.style||{},numberStyle:y,startingLineNumber:h,codeString:N}):null,G=i.hljs||i['pre[class*="language-"]']||{backgroundColor:"#fff"},Pe=Sf($)?"hljs":"prismjs",oe=b?Object.assign({},B,{style:Object.assign({},G,u)}):Object.assign({},B,{className:B.className?"".concat(Pe," ").concat(B.className):Pe,style:Object.assign({},u)});if(T?m.style=Ft(Ft({},m.style),{},{whiteSpace:"pre-wrap"}):m.style=Ft(Ft({},m.style),{},{whiteSpace:"pre"}),!$)return Ve.createElement(ye,oe,z,Ve.createElement(ce,m,N));(j===void 0&&X||T)&&(j=!0),X=X||t6;var Ae=[{type:"text",value:N}],we=n6({astGenerator:$,language:l,code:N,defaultCodeValue:Ae});we.language===null&&(we.value=Ae);var Ue=we.value.length+h,Yn=e6(we,j,F,S,x,h,Ue,y,T);return Ve.createElement(ye,oe,Ve.createElement(ce,m,!x&&z,X({rows:Yn,stylesheet:i,useInlineStyles:b})))}}var o6=a6,l6=Object.prototype.hasOwnProperty;function a6(){for(var e={},t=0;t<arguments.length;t++){var n=arguments[t];for(var r in n)l6.call(n,r)&&(e[r]=n[r])}return e}var bf=_f,su=_f.prototype;su.space=null;su.normal={};su.property={};function _f(e,t,n){this.property=e,this.normal=t,n&&(this.space=n)}var d1=o6,s6=bf,i6=c6;function c6(e){for(var t=e.length,n=[],r=[],l=-1,a,s;++l<t;)a=e[l],n.push(a.property),r.push(a.normal),s=a.space;return new s6(d1.apply(null,n),d1.apply(null,r),s)}var iu=u6;function u6(e){return e.toLowerCase()}var wf=kf,kt=kf.prototype;kt.space=null;kt.attribute=null;kt.property=null;kt.boolean=!1;kt.booleanish=!1;kt.overloadedBoolean=!1;kt.number=!1;kt.commaSeparated=!1;kt.spaceSeparated=!1;kt.commaOrSpaceSeparated=!1;kt.mustUseProperty=!1;kt.defined=!1;function kf(e,t){this.property=e,this.attribute=t}var Ht={},d6=0;Ht.boolean=xr();Ht.booleanish=xr();Ht.overloadedBoolean=xr();Ht.number=xr();Ht.spaceSeparated=xr();Ht.commaSeparated=xr();Ht.commaOrSpaceSeparated=xr();function xr(){return Math.pow(2,++d6)}var Lf=wf,p1=Ht,Tf=cu;cu.prototype=new Lf;cu.prototype.defined=!0;var Ef=["boolean","booleanish","overloadedBoolean","number","commaSeparated","spaceSeparated","commaOrSpaceSeparated"],p6=Ef.length;function cu(e,t,n,r){var l=-1,a;for(f1(this,"space",r),Lf.call(this,e,t);++l<p6;)a=Ef[l],f1(this,a,(n&p1[a])===p1[a])}function f1(e,t,n){n&&(e[t]=n)}var h1=iu,f6=bf,h6=Tf,vl=m6;function m6(e){var t=e.space,n=e.mustUseProperty||[],r=e.attributes||{},l=e.properties,a=e.transform,s={},i={},c,u;for(c in l)u=new h6(c,a(r,c),l[c],t),n.indexOf(c)!==-1&&(u.mustUseProperty=!0),s[c]=u,i[h1(c)]=c,i[h1(u.attribute)]=c;return new f6(s,i,t)}var g6=vl,x6=g6({space:"xlink",transform:v6,properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}});function v6(e,t){return"xlink:"+t.slice(5).toLowerCase()}var y6=vl,C6=y6({space:"xml",transform:j6,properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function j6(e,t){return"xml:"+t.slice(3).toLowerCase()}var S6=b6;function b6(e,t){return t in e?e[t]:t}var _6=S6,Nf=w6;function w6(e,t){return _6(e,t.toLowerCase())}var k6=vl,L6=Nf,T6=k6({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:L6,properties:{xmlns:null,xmlnsXLink:null}}),uu=Ht,E6=vl,lt=uu.booleanish,vt=uu.number,Jn=uu.spaceSeparated,N6=E6({transform:O6,properties:{ariaActiveDescendant:null,ariaAtomic:lt,ariaAutoComplete:null,ariaBusy:lt,ariaChecked:lt,ariaColCount:vt,ariaColIndex:vt,ariaColSpan:vt,ariaControls:Jn,ariaCurrent:null,ariaDescribedBy:Jn,ariaDetails:null,ariaDisabled:lt,ariaDropEffect:Jn,ariaErrorMessage:null,ariaExpanded:lt,ariaFlowTo:Jn,ariaGrabbed:lt,ariaHasPopup:null,ariaHidden:lt,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Jn,ariaLevel:vt,ariaLive:null,ariaModal:lt,ariaMultiLine:lt,ariaMultiSelectable:lt,ariaOrientation:null,ariaOwns:Jn,ariaPlaceholder:null,ariaPosInSet:vt,ariaPressed:lt,ariaReadOnly:lt,ariaRelevant:null,ariaRequired:lt,ariaRoleDescription:Jn,ariaRowCount:vt,ariaRowIndex:vt,ariaRowSpan:vt,ariaSelected:lt,ariaSetSize:vt,ariaSort:null,ariaValueMax:vt,ariaValueMin:vt,ariaValueNow:vt,ariaValueText:null,role:null}});function O6(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}var ro=Ht,R6=vl,M6=Nf,ee=ro.boolean,P6=ro.overloadedBoolean,jo=ro.booleanish,he=ro.number,Je=ro.spaceSeparated,Ql=ro.commaSeparated,A6=R6({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:M6,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Ql,acceptCharset:Je,accessKey:Je,action:null,allow:null,allowFullScreen:ee,allowPaymentRequest:ee,allowUserMedia:ee,alt:null,as:null,async:ee,autoCapitalize:null,autoComplete:Je,autoFocus:ee,autoPlay:ee,capture:ee,charSet:null,checked:ee,cite:null,className:Je,cols:he,colSpan:null,content:null,contentEditable:jo,controls:ee,controlsList:Je,coords:he|Ql,crossOrigin:null,data:null,dateTime:null,decoding:null,default:ee,defer:ee,dir:null,dirName:null,disabled:ee,download:P6,draggable:jo,encType:null,enterKeyHint:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:ee,formTarget:null,headers:Je,height:he,hidden:ee,high:he,href:null,hrefLang:null,htmlFor:Je,httpEquiv:Je,id:null,imageSizes:null,imageSrcSet:Ql,inputMode:null,integrity:null,is:null,isMap:ee,itemId:null,itemProp:Je,itemRef:Je,itemScope:ee,itemType:Je,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:ee,low:he,manifest:null,max:null,maxLength:he,media:null,method:null,min:null,minLength:he,multiple:ee,muted:ee,name:null,nonce:null,noModule:ee,noValidate:ee,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforePrint:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextMenu:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:ee,optimum:he,pattern:null,ping:Je,placeholder:null,playsInline:ee,poster:null,preload:null,readOnly:ee,referrerPolicy:null,rel:Je,required:ee,reversed:ee,rows:he,rowSpan:he,sandbox:Je,scope:null,scoped:ee,seamless:ee,selected:ee,shape:null,size:he,sizes:null,slot:null,span:he,spellCheck:jo,src:null,srcDoc:null,srcLang:null,srcSet:Ql,start:he,step:null,style:null,tabIndex:he,target:null,title:null,translate:null,type:null,typeMustMatch:ee,useMap:null,value:jo,width:he,wrap:null,align:null,aLink:null,archive:Je,axis:null,background:null,bgColor:null,border:he,borderColor:null,bottomMargin:he,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:ee,declare:ee,event:null,face:null,frame:null,frameBorder:null,hSpace:he,leftMargin:he,link:null,longDesc:null,lowSrc:null,marginHeight:he,marginWidth:he,noResize:ee,noHref:ee,noShade:ee,noWrap:ee,object:null,profile:null,prompt:null,rev:null,rightMargin:he,rules:null,scheme:null,scrolling:jo,standby:null,summary:null,text:null,topMargin:he,valueType:null,version:null,vAlign:null,vLink:null,vSpace:he,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:ee,disableRemotePlayback:ee,prefix:null,property:null,results:he,security:null,unselectable:null}}),$6=i6,B6=x6,D6=C6,I6=T6,z6=N6,F6=A6,U6=$6([D6,B6,I6,z6,F6]),W6=iu,V6=Tf,H6=wf,du="data",Z6=Y6,G6=/^data[-\w.:]+$/i,Of=/-[a-z]/g,K6=/[A-Z]/g;function Y6(e,t){var n=W6(t),r=t,l=H6;return n in e.normal?e.property[e.normal[n]]:(n.length>4&&n.slice(0,4)===du&&G6.test(t)&&(t.charAt(4)==="-"?r=Q6(t):t=X6(t),l=V6),new l(r,t))}function Q6(e){var t=e.slice(5).replace(Of,J6);return du+t.charAt(0).toUpperCase()+t.slice(1)}function X6(e){var t=e.slice(4);return Of.test(t)?e:(t=t.replace(K6,q6),t.charAt(0)!=="-"&&(t="-"+t),du+t)}function q6(e){return"-"+e.toLowerCase()}function J6(e){return e.charAt(1).toUpperCase()}var e8=t8,m1=/[#.]/g;function t8(e,t){for(var n=e||"",r=t||"div",l={},a=0,s,i,c;a<n.length;)m1.lastIndex=a,c=m1.exec(n),s=n.slice(a,c?c.index:n.length),s&&(i?i==="#"?l.id=s:l.className?l.className.push(s):l.className=[s]:r=s,a+=s.length),c&&(i=c[0],a++);return{type:"element",tagName:r,properties:l,children:[]}}var pu={};pu.parse=o8;pu.stringify=l8;var g1="",n8=" ",r8=/[ \t\n\r\f]+/g;function o8(e){var t=String(e||g1).trim();return t===g1?[]:t.split(r8)}function l8(e){return e.join(n8).trim()}var fu={};fu.parse=a8;fu.stringify=s8;var tc=",",x1=" ",No="";function a8(e){for(var t=[],n=String(e||No),r=n.indexOf(tc),l=0,a=!1,s;!a;)r===-1&&(r=n.length,a=!0),s=n.slice(l,r).trim(),(s||!a)&&t.push(s),l=r+1,r=n.indexOf(tc,l);return t}function s8(e,t){var n=t||{},r=n.padLeft===!1?No:x1,l=n.padRight?x1:No;return e[e.length-1]===No&&(e=e.concat(No)),e.join(l+tc+r).trim()}var i8=Z6,v1=iu,c8=e8,y1=pu.parse,C1=fu.parse,u8=p8,d8={}.hasOwnProperty;function p8(e,t,n){var r=n?x8(n):null;return l;function l(s,i){var c=c8(s,t),u=Array.prototype.slice.call(arguments,2),p=c.tagName.toLowerCase(),m;if(c.tagName=r&&d8.call(r,p)?r[p]:p,i&&f8(i,c)&&(u.unshift(i),i=null),i)for(m in i)a(c.properties,m,i[m]);return Rf(c.children,u),c.tagName==="template"&&(c.content={type:"root",children:c.children},c.children=[]),c}function a(s,i,c){var u,p,m;c==null||c!==c||(u=i8(e,i),p=u.property,m=c,typeof m=="string"&&(u.spaceSeparated?m=y1(m):u.commaSeparated?m=C1(m):u.commaOrSpaceSeparated&&(m=y1(C1(m).join(" ")))),p==="style"&&typeof c!="string"&&(m=g8(m)),p==="className"&&s.className&&(m=s.className.concat(m)),s[p]=m8(u,p,m))}}function f8(e,t){return typeof e=="string"||"length"in e||h8(t.tagName,e)}function h8(e,t){var n=t.type;return e==="input"||!n||typeof n!="string"?!1:typeof t.children=="object"&&"length"in t.children?!0:(n=n.toLowerCase(),e==="button"?n!=="menu"&&n!=="submit"&&n!=="reset"&&n!=="button":"value"in t)}function Rf(e,t){var n,r;if(typeof t=="string"||typeof t=="number"){e.push({type:"text",value:String(t)});return}if(typeof t=="object"&&"length"in t){for(n=-1,r=t.length;++n<r;)Rf(e,t[n]);return}if(typeof t!="object"||!("type"in t))throw new Error("Expected node, nodes, or string, got `"+t+"`");e.push(t)}function m8(e,t,n){var r,l,a;if(typeof n!="object"||!("length"in n))return j1(e,t,n);for(l=n.length,r=-1,a=[];++r<l;)a[r]=j1(e,t,n[r]);return a}function j1(e,t,n){var r=n;return e.number||e.positiveNumber?!isNaN(r)&&r!==""&&(r=Number(r)):(e.boolean||e.overloadedBoolean)&&typeof r=="string"&&(r===""||v1(n)===v1(t))&&(r=!0),r}function g8(e){var t=[],n;for(n in e)t.push([n,e[n]].join(": "));return t.join("; ")}function x8(e){for(var t=e.length,n=-1,r={},l;++n<t;)l=e[n],r[l.toLowerCase()]=l;return r}var v8=U6,y8=u8,Mf=y8(v8,"div");Mf.displayName="html";var C8=Mf,j8=C8;const S8="Æ",b8="&",_8="Á",w8="Â",k8="À",L8="Å",T8="Ã",E8="Ä",N8="©",O8="Ç",R8="Ð",M8="É",P8="Ê",A8="È",$8="Ë",B8=">",D8="Í",I8="Î",z8="Ì",F8="Ï",U8="<",W8="Ñ",V8="Ó",H8="Ô",Z8="Ò",G8="Ø",K8="Õ",Y8="Ö",Q8='"',X8="®",q8="Þ",J8="Ú",eg="Û",tg="Ù",ng="Ü",rg="Ý",og="á",lg="â",ag="´",sg="æ",ig="à",cg="&",ug="å",dg="ã",pg="ä",fg="¦",hg="ç",mg="¸",gg="¢",xg="©",vg="¤",yg="°",Cg="÷",jg="é",Sg="ê",bg="è",_g="ð",wg="ë",kg="½",Lg="¼",Tg="¾",Eg=">",Ng="í",Og="î",Rg="¡",Mg="ì",Pg="¿",Ag="ï",$g="«",Bg="<",Dg="¯",Ig="µ",zg="·",Fg=" ",Ug="¬",Wg="ñ",Vg="ó",Hg="ô",Zg="ò",Gg="ª",Kg="º",Yg="ø",Qg="õ",Xg="ö",qg="¶",Jg="±",e7="£",t7='"',n7="»",r7="®",o7="§",l7="­",a7="¹",s7="²",i7="³",c7="ß",u7="þ",d7="×",p7="ú",f7="û",h7="ù",m7="¨",g7="ü",x7="ý",v7="¥",y7="ÿ",C7={AElig:S8,AMP:b8,Aacute:_8,Acirc:w8,Agrave:k8,Aring:L8,Atilde:T8,Auml:E8,COPY:N8,Ccedil:O8,ETH:R8,Eacute:M8,Ecirc:P8,Egrave:A8,Euml:$8,GT:B8,Iacute:D8,Icirc:I8,Igrave:z8,Iuml:F8,LT:U8,Ntilde:W8,Oacute:V8,Ocirc:H8,Ograve:Z8,Oslash:G8,Otilde:K8,Ouml:Y8,QUOT:Q8,REG:X8,THORN:q8,Uacute:J8,Ucirc:eg,Ugrave:tg,Uuml:ng,Yacute:rg,aacute:og,acirc:lg,acute:ag,aelig:sg,agrave:ig,amp:cg,aring:ug,atilde:dg,auml:pg,brvbar:fg,ccedil:hg,cedil:mg,cent:gg,copy:xg,curren:vg,deg:yg,divide:Cg,eacute:jg,ecirc:Sg,egrave:bg,eth:_g,euml:wg,frac12:kg,frac14:Lg,frac34:Tg,gt:Eg,iacute:Ng,icirc:Og,iexcl:Rg,igrave:Mg,iquest:Pg,iuml:Ag,laquo:$g,lt:Bg,macr:Dg,micro:Ig,middot:zg,nbsp:Fg,not:Ug,ntilde:Wg,oacute:Vg,ocirc:Hg,ograve:Zg,ordf:Gg,ordm:Kg,oslash:Yg,otilde:Qg,ouml:Xg,para:qg,plusmn:Jg,pound:e7,quot:t7,raquo:n7,reg:r7,sect:o7,shy:l7,sup1:a7,sup2:s7,sup3:i7,szlig:c7,thorn:u7,times:d7,uacute:p7,ucirc:f7,ugrave:h7,uml:m7,uuml:g7,yacute:x7,yen:v7,yuml:y7},j7={0:"�",128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"};var Pf=S7;function S7(e){var t=typeof e=="string"?e.charCodeAt(0):e;return t>=48&&t<=57}var b7=_7;function _7(e){var t=typeof e=="string"?e.charCodeAt(0):e;return t>=97&&t<=102||t>=65&&t<=70||t>=48&&t<=57}var w7=k7;function k7(e){var t=typeof e=="string"?e.charCodeAt(0):e;return t>=97&&t<=122||t>=65&&t<=90}var L7=w7,T7=Pf,E7=N7;function N7(e){return L7(e)||T7(e)}var Xl,O7=59,R7=M7;function M7(e){var t="&"+e+";",n;return Xl=Xl||document.createElement("i"),Xl.innerHTML=t,n=Xl.textContent,n.charCodeAt(n.length-1)===O7&&e!=="semi"||n===t?!1:n}var S1=C7,b1=j7,P7=Pf,A7=b7,Af=E7,$7=R7,B7=Q7,D7={}.hasOwnProperty,br=String.fromCharCode,I7=Function.prototype,_1={warning:null,reference:null,text:null,warningContext:null,referenceContext:null,textContext:null,position:{},additional:null,attribute:!1,nonTerminated:!0},z7=9,w1=10,F7=12,U7=32,k1=38,W7=59,V7=60,H7=61,Z7=35,G7=88,K7=120,Y7=65533,_r="named",hu="hexadecimal",mu="decimal",gu={};gu[hu]=16;gu[mu]=10;var us={};us[_r]=Af;us[mu]=P7;us[hu]=A7;var $f=1,Bf=2,Df=3,If=4,zf=5,nc=6,Ff=7,Hn={};Hn[$f]="Named character references must be terminated by a semicolon";Hn[Bf]="Numeric character references must be terminated by a semicolon";Hn[Df]="Named character references cannot be empty";Hn[If]="Numeric character references cannot be empty";Hn[zf]="Named character references must be known";Hn[nc]="Numeric character references cannot be disallowed";Hn[Ff]="Numeric character references cannot be outside the permissible Unicode range";function Q7(e,t){var n={},r,l;t||(t={});for(l in _1)r=t[l],n[l]=r??_1[l];return(n.position.indent||n.position.start)&&(n.indent=n.position.indent||[],n.position=n.position.start),X7(e,n)}function X7(e,t){var n=t.additional,r=t.nonTerminated,l=t.text,a=t.reference,s=t.warning,i=t.textContext,c=t.referenceContext,u=t.warningContext,p=t.position,m=t.indent||[],g=e.length,b=0,C=-1,S=p.column||1,E=p.line||1,x="",d=[],h,f,v,y,j,L,T,A,F,X,le,ye,J,ce,xe,N,$,B,z;for(typeof n=="string"&&(n=n.charCodeAt(0)),N=G(),A=s?Pe:I7,b--,g++;++b<g;)if(j===w1&&(S=m[C]||1),j=e.charCodeAt(b),j===k1){if(T=e.charCodeAt(b+1),T===z7||T===w1||T===F7||T===U7||T===k1||T===V7||T!==T||n&&T===n){x+=br(j),S++;continue}for(J=b+1,ye=J,z=J,T===Z7?(z=++ye,T=e.charCodeAt(z),T===G7||T===K7?(ce=hu,z=++ye):ce=mu):ce=_r,h="",le="",y="",xe=us[ce],z--;++z<g&&(T=e.charCodeAt(z),!!xe(T));)y+=br(T),ce===_r&&D7.call(S1,y)&&(h=y,le=S1[y]);v=e.charCodeAt(z)===W7,v&&(z++,f=ce===_r?$7(y):!1,f&&(h=y,le=f)),B=1+z-J,!v&&!r||(y?ce===_r?(v&&!le?A(zf,1):(h!==y&&(z=ye+h.length,B=1+z-ye,v=!1),v||(F=h?$f:Df,t.attribute?(T=e.charCodeAt(z),T===H7?(A(F,B),le=null):Af(T)?le=null:A(F,B)):A(F,B))),L=le):(v||A(Bf,B),L=parseInt(y,gu[ce]),q7(L)?(A(Ff,B),L=br(Y7)):L in b1?(A(nc,B),L=b1[L]):(X="",J7(L)&&A(nc,B),L>65535&&(L-=65536,X+=br(L>>>10|55296),L=56320|L&1023),L=X+br(L))):ce!==_r&&A(If,B)),L?(oe(),N=G(),b=z-1,S+=z-J+1,d.push(L),$=G(),$.offset++,a&&a.call(c,L,{start:N,end:$},e.slice(J-1,z)),N=$):(y=e.slice(J-1,z),x+=y,S+=y.length,b=z-1)}else j===10&&(E++,C++,S=0),j===j?(x+=br(j),S++):oe();return d.join("");function G(){return{line:E,column:S,offset:b+(p.offset||0)}}function Pe(Ae,we){var Ue=G();Ue.column+=we,Ue.offset+=we,s.call(u,Hn[Ae],Ue,Ae)}function oe(){x&&(d.push(x),l&&l.call(i,x,{start:N,end:G()}),x="")}}function q7(e){return e>=55296&&e<=57343||e>1114111}function J7(e){return e>=1&&e<=8||e===11||e>=13&&e<=31||e>=127&&e<=159||e>=64976&&e<=65007||(e&65535)===65535||(e&65535)===65534}var Uf={exports:{}};(function(e){var t=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=function(r){var l=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,a=0,s={},i={manual:r.Prism&&r.Prism.manual,disableWorkerMessageHandler:r.Prism&&r.Prism.disableWorkerMessageHandler,util:{encode:function d(h){return h instanceof c?new c(h.type,d(h.content),h.alias):Array.isArray(h)?h.map(d):h.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(d){return Object.prototype.toString.call(d).slice(8,-1)},objId:function(d){return d.__id||Object.defineProperty(d,"__id",{value:++a}),d.__id},clone:function d(h,f){f=f||{};var v,y;switch(i.util.type(h)){case"Object":if(y=i.util.objId(h),f[y])return f[y];v={},f[y]=v;for(var j in h)h.hasOwnProperty(j)&&(v[j]=d(h[j],f));return v;case"Array":return y=i.util.objId(h),f[y]?f[y]:(v=[],f[y]=v,h.forEach(function(L,T){v[T]=d(L,f)}),v);default:return h}},getLanguage:function(d){for(;d;){var h=l.exec(d.className);if(h)return h[1].toLowerCase();d=d.parentElement}return"none"},setLanguage:function(d,h){d.className=d.className.replace(RegExp(l,"gi"),""),d.classList.add("language-"+h)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(v){var d=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(v.stack)||[])[1];if(d){var h=document.getElementsByTagName("script");for(var f in h)if(h[f].src==d)return h[f]}return null}},isActive:function(d,h,f){for(var v="no-"+h;d;){var y=d.classList;if(y.contains(h))return!0;if(y.contains(v))return!1;d=d.parentElement}return!!f}},languages:{plain:s,plaintext:s,text:s,txt:s,extend:function(d,h){var f=i.util.clone(i.languages[d]);for(var v in h)f[v]=h[v];return f},insertBefore:function(d,h,f,v){v=v||i.languages;var y=v[d],j={};for(var L in y)if(y.hasOwnProperty(L)){if(L==h)for(var T in f)f.hasOwnProperty(T)&&(j[T]=f[T]);f.hasOwnProperty(L)||(j[L]=y[L])}var A=v[d];return v[d]=j,i.languages.DFS(i.languages,function(F,X){X===A&&F!=d&&(this[F]=j)}),j},DFS:function d(h,f,v,y){y=y||{};var j=i.util.objId;for(var L in h)if(h.hasOwnProperty(L)){f.call(h,L,h[L],v||L);var T=h[L],A=i.util.type(T);A==="Object"&&!y[j(T)]?(y[j(T)]=!0,d(T,f,null,y)):A==="Array"&&!y[j(T)]&&(y[j(T)]=!0,d(T,f,L,y))}}},plugins:{},highlightAll:function(d,h){i.highlightAllUnder(document,d,h)},highlightAllUnder:function(d,h,f){var v={callback:f,container:d,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};i.hooks.run("before-highlightall",v),v.elements=Array.prototype.slice.apply(v.container.querySelectorAll(v.selector)),i.hooks.run("before-all-elements-highlight",v);for(var y=0,j;j=v.elements[y++];)i.highlightElement(j,h===!0,v.callback)},highlightElement:function(d,h,f){var v=i.util.getLanguage(d),y=i.languages[v];i.util.setLanguage(d,v);var j=d.parentElement;j&&j.nodeName.toLowerCase()==="pre"&&i.util.setLanguage(j,v);var L=d.textContent,T={element:d,language:v,grammar:y,code:L};function A(X){T.highlightedCode=X,i.hooks.run("before-insert",T),T.element.innerHTML=T.highlightedCode,i.hooks.run("after-highlight",T),i.hooks.run("complete",T),f&&f.call(T.element)}if(i.hooks.run("before-sanity-check",T),j=T.element.parentElement,j&&j.nodeName.toLowerCase()==="pre"&&!j.hasAttribute("tabindex")&&j.setAttribute("tabindex","0"),!T.code){i.hooks.run("complete",T),f&&f.call(T.element);return}if(i.hooks.run("before-highlight",T),!T.grammar){A(i.util.encode(T.code));return}if(h&&r.Worker){var F=new Worker(i.filename);F.onmessage=function(X){A(X.data)},F.postMessage(JSON.stringify({language:T.language,code:T.code,immediateClose:!0}))}else A(i.highlight(T.code,T.grammar,T.language))},highlight:function(d,h,f){var v={code:d,grammar:h,language:f};if(i.hooks.run("before-tokenize",v),!v.grammar)throw new Error('The language "'+v.language+'" has no grammar.');return v.tokens=i.tokenize(v.code,v.grammar),i.hooks.run("after-tokenize",v),c.stringify(i.util.encode(v.tokens),v.language)},tokenize:function(d,h){var f=h.rest;if(f){for(var v in f)h[v]=f[v];delete h.rest}var y=new m;return g(y,y.head,d),p(d,y,h,y.head,0),C(y)},hooks:{all:{},add:function(d,h){var f=i.hooks.all;f[d]=f[d]||[],f[d].push(h)},run:function(d,h){var f=i.hooks.all[d];if(!(!f||!f.length))for(var v=0,y;y=f[v++];)y(h)}},Token:c};r.Prism=i;function c(d,h,f,v){this.type=d,this.content=h,this.alias=f,this.length=(v||"").length|0}c.stringify=function d(h,f){if(typeof h=="string")return h;if(Array.isArray(h)){var v="";return h.forEach(function(A){v+=d(A,f)}),v}var y={type:h.type,content:d(h.content,f),tag:"span",classes:["token",h.type],attributes:{},language:f},j=h.alias;j&&(Array.isArray(j)?Array.prototype.push.apply(y.classes,j):y.classes.push(j)),i.hooks.run("wrap",y);var L="";for(var T in y.attributes)L+=" "+T+'="'+(y.attributes[T]||"").replace(/"/g,"&quot;")+'"';return"<"+y.tag+' class="'+y.classes.join(" ")+'"'+L+">"+y.content+"</"+y.tag+">"};function u(d,h,f,v){d.lastIndex=h;var y=d.exec(f);if(y&&v&&y[1]){var j=y[1].length;y.index+=j,y[0]=y[0].slice(j)}return y}function p(d,h,f,v,y,j){for(var L in f)if(!(!f.hasOwnProperty(L)||!f[L])){var T=f[L];T=Array.isArray(T)?T:[T];for(var A=0;A<T.length;++A){if(j&&j.cause==L+","+A)return;var F=T[A],X=F.inside,le=!!F.lookbehind,ye=!!F.greedy,J=F.alias;if(ye&&!F.pattern.global){var ce=F.pattern.toString().match(/[imsuy]*$/)[0];F.pattern=RegExp(F.pattern.source,ce+"g")}for(var xe=F.pattern||F,N=v.next,$=y;N!==h.tail&&!(j&&$>=j.reach);$+=N.value.length,N=N.next){var B=N.value;if(h.length>d.length)return;if(!(B instanceof c)){var z=1,G;if(ye){if(G=u(xe,$,d,le),!G||G.index>=d.length)break;var we=G.index,Pe=G.index+G[0].length,oe=$;for(oe+=N.value.length;we>=oe;)N=N.next,oe+=N.value.length;if(oe-=N.value.length,$=oe,N.value instanceof c)continue;for(var Ae=N;Ae!==h.tail&&(oe<Pe||typeof Ae.value=="string");Ae=Ae.next)z++,oe+=Ae.value.length;z--,B=d.slice($,oe),G.index-=$}else if(G=u(xe,0,B,le),!G)continue;var we=G.index,Ue=G[0],Yn=B.slice(0,we),Ce=B.slice(we+Ue.length),Yt=$+B.length;j&&Yt>j.reach&&(j.reach=Yt);var Qn=N.prev;Yn&&(Qn=g(h,Qn,Yn),$+=Yn.length),b(h,Qn,z);var xs=new c(L,X?i.tokenize(Ue,X):Ue,J,Ue);if(N=g(h,Qn,xs),Ce&&g(h,N,Ce),z>1){var Tt={cause:L+","+A,reach:Yt};p(d,h,f,N.prev,$,Tt),j&&Tt.reach>j.reach&&(j.reach=Tt.reach)}}}}}}function m(){var d={value:null,prev:null,next:null},h={value:null,prev:d,next:null};d.next=h,this.head=d,this.tail=h,this.length=0}function g(d,h,f){var v=h.next,y={value:f,prev:h,next:v};return h.next=y,v.prev=y,d.length++,y}function b(d,h,f){for(var v=h.next,y=0;y<f&&v!==d.tail;y++)v=v.next;h.next=v,v.prev=h,d.length-=y}function C(d){for(var h=[],f=d.head.next;f!==d.tail;)h.push(f.value),f=f.next;return h}if(!r.document)return r.addEventListener&&(i.disableWorkerMessageHandler||r.addEventListener("message",function(d){var h=JSON.parse(d.data),f=h.language,v=h.code,y=h.immediateClose;r.postMessage(i.highlight(v,i.languages[f],f)),y&&r.close()},!1)),i;var S=i.util.currentScript();S&&(i.filename=S.src,S.hasAttribute("data-manual")&&(i.manual=!0));function E(){i.manual||i.highlightAll()}if(!i.manual){var x=document.readyState;x==="loading"||x==="interactive"&&S&&S.defer?document.addEventListener("DOMContentLoaded",E):window.requestAnimationFrame?window.requestAnimationFrame(E):window.setTimeout(E,16)}return i}(t);e.exports&&(e.exports=n),typeof xa<"u"&&(xa.Prism=n)})(Uf);var ex=Uf.exports,tx=xu;xu.displayName="markup";xu.aliases=["html","mathml","svg","xml","ssml","atom","rss"];function xu(e){e.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},e.languages.markup.tag.inside["attr-value"].inside.entity=e.languages.markup.entity,e.languages.markup.doctype.inside["internal-subset"].inside=e.languages.markup,e.hooks.add("wrap",function(t){t.type==="entity"&&(t.attributes.title=t.content.value.replace(/&amp;/,"&"))}),Object.defineProperty(e.languages.markup.tag,"addInlined",{value:function(n,r){var l={};l["language-"+r]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:e.languages[r]},l.cdata=/^<!\[CDATA\[|\]\]>$/i;var a={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:l}};a["language-"+r]={pattern:/[\s\S]+/,inside:e.languages[r]};var s={};s[n]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return n}),"i"),lookbehind:!0,greedy:!0,inside:a},e.languages.insertBefore("markup","cdata",s)}}),Object.defineProperty(e.languages.markup.tag,"addAttribute",{value:function(t,n){e.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+t+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[n,"language-"+n],inside:e.languages[n]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),e.languages.html=e.languages.markup,e.languages.mathml=e.languages.markup,e.languages.svg=e.languages.markup,e.languages.xml=e.languages.extend("markup",{}),e.languages.ssml=e.languages.xml,e.languages.atom=e.languages.xml,e.languages.rss=e.languages.xml}var Wf=vu;vu.displayName="css";vu.aliases=[];function vu(e){(function(t){var n=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;t.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+n.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+n.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+n.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:n,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},t.languages.css.atrule.inside.rest=t.languages.css;var r=t.languages.markup;r&&(r.tag.addInlined("style","css"),r.tag.addAttribute("style","css"))})(e)}const nx=Fn(Wf);var rx=yu;yu.displayName="clike";yu.aliases=[];function yu(e){e.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/}}var ox=Cu;Cu.displayName="javascript";Cu.aliases=["js"];function Cu(e){e.languages.javascript=e.languages.extend("clike",{"class-name":[e.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),e.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,e.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:e.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:e.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:e.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:e.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:e.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),e.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:e.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),e.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),e.languages.markup&&(e.languages.markup.tag.addInlined("script","javascript"),e.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),e.languages.js=e.languages.javascript}var Oo=typeof globalThis=="object"?globalThis:typeof self=="object"?self:typeof window=="object"?window:typeof xa=="object"?xa:{},lx=jx();Oo.Prism={manual:!0,disableWorkerMessageHandler:!0};var ax=j8,sx=B7,Vf=ex,ix=tx,cx=Wf,ux=rx,dx=ox;lx();var ju={}.hasOwnProperty;function Hf(){}Hf.prototype=Vf;var Me=new Hf,px=Me;Me.highlight=hx;Me.register=yl;Me.alias=fx;Me.registered=mx;Me.listLanguages=gx;yl(ix);yl(cx);yl(ux);yl(dx);Me.util.encode=yx;Me.Token.stringify=xx;function yl(e){if(typeof e!="function"||!e.displayName)throw new Error("Expected `function` for `grammar`, got `"+e+"`");Me.languages[e.displayName]===void 0&&e(Me)}function fx(e,t){var n=Me.languages,r=e,l,a,s,i;t&&(r={},r[e]=t);for(l in r)for(a=r[l],a=typeof a=="string"?[a]:a,s=a.length,i=-1;++i<s;)n[a[i]]=n[l]}function hx(e,t){var n=Vf.highlight,r;if(typeof e!="string")throw new Error("Expected `string` for `value`, got `"+e+"`");if(Me.util.type(t)==="Object")r=t,t=null;else{if(typeof t!="string")throw new Error("Expected `string` for `name`, got `"+t+"`");if(ju.call(Me.languages,t))r=Me.languages[t];else throw new Error("Unknown language: `"+t+"` is not registered")}return n.call(this,e,r,t)}function mx(e){if(typeof e!="string")throw new Error("Expected `string` for `language`, got `"+e+"`");return ju.call(Me.languages,e)}function gx(){var e=Me.languages,t=[],n;for(n in e)ju.call(e,n)&&typeof e[n]=="object"&&t.push(n);return t}function xx(e,t,n){var r;return typeof e=="string"?{type:"text",value:e}:Me.util.type(e)==="Array"?vx(e,t):(r={type:e.type,content:Me.Token.stringify(e.content,t,n),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:n},e.alias&&(r.classes=r.classes.concat(e.alias)),Me.hooks.run("wrap",r),ax(r.tag+"."+r.classes.join("."),Cx(r.attributes),r.content))}function vx(e,t){for(var n=[],r=e.length,l=-1,a;++l<r;)a=e[l],a!==""&&a!==null&&a!==void 0&&n.push(a);for(l=-1,r=n.length;++l<r;)a=n[l],n[l]=Me.Token.stringify(a,t,n);return n}function yx(e){return e}function Cx(e){var t;for(t in e)e[t]=sx(e[t]);return e}function jx(){var e="Prism"in Oo,t=e?Oo.Prism:void 0;return n;function n(){e?Oo.Prism=t:delete Oo.Prism,e=void 0,t=void 0}}const Su=Fn(px);var bu=r6(Su,{});bu.registerLanguage=function(e,t){return Su.register(t)};bu.alias=function(e,t){return Su.alias(e,t)};const vr=bu;var Sx=_u;_u.displayName="bash";_u.aliases=["shell"];function _u(e){(function(t){var n="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",r={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},l={bash:r,environment:{pattern:RegExp("\\$"+n),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+n),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};t.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+n),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:l},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:r}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:l},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:l.entity}}],environment:{pattern:RegExp("\\$?"+n),alias:"constant"},variable:l.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},r.inside=t.languages.bash;for(var a=["comment","function-name","for-or-select","assign-left","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],s=l.variable[1].inside,i=0;i<a.length;i++)s[a[i]]=t.languages.bash[a[i]];t.languages.shell=t.languages.bash})(e)}const bx=Fn(Sx);var _x=wu;wu.displayName="json";wu.aliases=["webmanifest"];function wu(e){e.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},e.languages.webmanifest=e.languages.json}const wx=Fn(_x);var kx=ku;ku.displayName="jsx";ku.aliases=[];function ku(e){(function(t){var n=t.util.clone(t.languages.javascript),r=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,l=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,a=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function s(u,p){return u=u.replace(/<S>/g,function(){return r}).replace(/<BRACES>/g,function(){return l}).replace(/<SPREAD>/g,function(){return a}),RegExp(u,p)}a=s(a).source,t.languages.jsx=t.languages.extend("markup",n),t.languages.jsx.tag.pattern=s(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),t.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,t.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,t.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,t.languages.jsx.tag.inside.comment=n.comment,t.languages.insertBefore("inside","attr-name",{spread:{pattern:s(/<SPREAD>/.source),inside:t.languages.jsx}},t.languages.jsx.tag),t.languages.insertBefore("inside","special-attr",{script:{pattern:s(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:t.languages.jsx}}},t.languages.jsx.tag);var i=function(u){return u?typeof u=="string"?u:typeof u.content=="string"?u.content:u.content.map(i).join(""):""},c=function(u){for(var p=[],m=0;m<u.length;m++){var g=u[m],b=!1;if(typeof g!="string"&&(g.type==="tag"&&g.content[0]&&g.content[0].type==="tag"?g.content[0].content[0].content==="</"?p.length>0&&p[p.length-1].tagName===i(g.content[0].content[1])&&p.pop():g.content[g.content.length-1].content==="/>"||p.push({tagName:i(g.content[0].content[1]),openedBraces:0}):p.length>0&&g.type==="punctuation"&&g.content==="{"?p[p.length-1].openedBraces++:p.length>0&&p[p.length-1].openedBraces>0&&g.type==="punctuation"&&g.content==="}"?p[p.length-1].openedBraces--:b=!0),(b||typeof g=="string")&&p.length>0&&p[p.length-1].openedBraces===0){var C=i(g);m<u.length-1&&(typeof u[m+1]=="string"||u[m+1].type==="plain-text")&&(C+=i(u[m+1]),u.splice(m+1,1)),m>0&&(typeof u[m-1]=="string"||u[m-1].type==="plain-text")&&(C=i(u[m-1])+C,u.splice(m-1,1),m--),u[m]=new t.Token("plain-text",C,null,C)}g.content&&typeof g.content!="string"&&c(g.content)}};t.hooks.add("after-tokenize",function(u){u.language!=="jsx"&&u.language!=="tsx"||c(u.tokens)})})(e)}const Lx=Fn(kx);var Tx=Lu;Lu.displayName="scss";Lu.aliases=[];function Lu(e){e.languages.scss=e.languages.extend("css",{comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0},atrule:{pattern:/@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,inside:{rule:/@[\w-]+/}},url:/(?:[-a-z]+-)?url(?=\()/i,selector:{pattern:/(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,inside:{parent:{pattern:/&/,alias:"important"},placeholder:/%[-\w]+/,variable:/\$[-\w]+|#\{\$[-\w]+\}/}},property:{pattern:/(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,inside:{variable:/\$[-\w]+|#\{\$[-\w]+\}/}}}),e.languages.insertBefore("scss","atrule",{keyword:[/@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i,{pattern:/( )(?:from|through)(?= )/,lookbehind:!0}]}),e.languages.insertBefore("scss","important",{variable:/\$[-\w]+|#\{\$[-\w]+\}/}),e.languages.insertBefore("scss","function",{"module-modifier":{pattern:/\b(?:as|hide|show|with)\b/i,alias:"keyword"},placeholder:{pattern:/%[-\w]+/,alias:"selector"},statement:{pattern:/\B!(?:default|optional)\b/i,alias:"keyword"},boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"},operator:{pattern:/(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,lookbehind:!0}}),e.languages.scss.atrule.inside.rest=e.languages.scss}const Ex=Fn(Tx);var Nx=Tu;Tu.displayName="yaml";Tu.aliases=["yml"];function Tu(e){(function(t){var n=/[*&][^\s[\]{},]+/,r=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,l="(?:"+r.source+"(?:[ 	]+"+n.source+")?|"+n.source+"(?:[ 	]+"+r.source+")?)",a=/(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g,function(){return/[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source}),s=/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;function i(c,u){u=(u||"").replace(/m/g,"")+"m";var p=/([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g,function(){return l}).replace(/<<value>>/g,function(){return c});return RegExp(p,u)}t.languages.yaml={scalar:{pattern:RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g,function(){return l})),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g,function(){return l}).replace(/<<key>>/g,function(){return"(?:"+a+"|"+s+")"})),lookbehind:!0,greedy:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:i(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),lookbehind:!0,alias:"number"},boolean:{pattern:i(/false|true/.source,"i"),lookbehind:!0,alias:"important"},null:{pattern:i(/null|~/.source,"i"),lookbehind:!0,alias:"important"},string:{pattern:i(s),lookbehind:!0,greedy:!0},number:{pattern:i(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source,"i"),lookbehind:!0},tag:r,important:n,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},t.languages.yml=t.languages.yaml})(e)}const Ox=Fn(Nx);function Rx(e){return typeof e=="string"}function Mx(e){return Number.isInteger(e)}function Eu(e){return Array.isArray(e)}function Px(e){return typeof e=="function"}function Zf(e){return typeof e=="object"&&!Eu(e)&&!Gf(e)}function Ax(e){return e===void 0}function Gf(e){return e===null}function mt(e){return!(Ax(e)||Gf(e))}function $x(e){return!mt(e)}function tt(){}function Bx(){return Intl.DateTimeFormat().resolvedOptions().locale}Bx();const Dx=(e,t,n=1)=>{const r=t<e?-Math.abs(n):n;return Array(1+Math.floor(Math.abs((t-e)/n))).fill(e).map((l,a)=>l+a*r)};function Ix(e,t=300){let n;return(...r)=>{clearTimeout(n),n=setTimeout(()=>e.apply(this,r),t)}}function ds(e){return new Promise(t=>setTimeout(t,e))}vr.registerLanguage("jsx",Lx);vr.registerLanguage("json",wx);vr.registerLanguage("css",nx);vr.registerLanguage("scss",Ex);vr.registerLanguage("bash",bx);vr.registerLanguage("yaml",Ox);const kn=({code:e,language:t="jsx",caption:n,expand:r=!1,fixed:l=r,className:a="",highlightLines:s,lineProps:i,undent:c=!1})=>{const[u,p]=w.useState(!1),[m,g]=w.useState(r),b=()=>{navigator.clipboard.writeText(e),p(!0),ds(2e3).then(()=>p(!1))};return o.jsxs("div",{className:`codeblock ${a} ${m?"expanded":""} ${l?"fixed-open":"expandable"}`,children:[!!n&&o.jsx("h4",{className:"caption",children:n}),o.jsxs("div",{className:"controls",children:[o.jsx("div",{className:"expand",onClick:()=>g(!m),children:m?"Compress":"Expand"}),o.jsx("div",{className:`clipboard ${u?"copied":""}`,onClick:b,children:u?"Copied":"Copy"})]}),o.jsx(vr,{language:t,showLineNumbers:!0,useInlineStyles:!1,wrapLines:!0,customStyle:{},children:zx(e,{undent:c})})]})},zx=(e,t={})=>{if(e=e.replace(/^[^]*?{?\/\*\s*START\s*\*\/}?\n/,"").replace(/[\n\s]*{?\/\*\s*END\s*\*\/}?[^]*/,"").replaceAll(/\/\/\s*PRETEND:\s/g,"").replaceAll(/{?\/\*\s*PRETEND:\s(.*?)\s+\*\/}?/g,"$1").replace(/\n+$/,""),t.undent){const n=new RegExp("^"+" ".repeat(t.undent),"gm");e=e.replaceAll(n,"")}return e},Xe=({Component:e,code:t,html:n,children:r,className:l="",language:a,...s})=>o.jsxs("div",{className:`example grid-2 gap-8 stack-desktop ${l}`,children:[o.jsx("div",{className:"source",children:o.jsx(kn,{code:t||n,language:n?"html":a,...s})}),!!r&&o.jsx("div",{className:"interim",children:r}),e?o.jsxs("div",{className:"output",children:[o.jsx("h4",{className:"caption",children:"Output"}),o.jsx(e,{})]}):null,n?o.jsxs("div",{className:"output",children:[o.jsx("h4",{className:"caption",children:"Output"}),o.jsx("div",{dangerouslySetInnerHTML:{__html:n}})]}):null]}),ql=w.createContext();function L1(e){return typeof e=="function"}function T1(e){return typeof e=="object"&&!Kf(e)&&!Fx(e)}function Kf(e){return Array.isArray(e)}function Fx(e){return e===null}function Ux({context:e={},Implementation:t,spec:n=!1,props:r={},ref:l}){if(!n)return o.jsx(t,{...r,ref:l});let a={},s=L1(n)?n(e):e[n];if(Kf(s)&&(t=s[0],s=s[1]),L1(s)){const i=s(r,l,e);if(Ve.isValidElement(i))return i;T1(i)&&Object.assign(a,r,i)}else T1(s)?Object.assign(a,s,r):Object.assign(a,r);return o.jsx(t,{...a,ref:l})}const Wx=e=>({Context:ql,Provider:({children:t,...n})=>o.jsx(ql.Provider,{value:{...e,...n},children:t}),Consumer:t=>n=>o.jsx(ql.Consumer,{children:r=>o.jsx(t,{...r,...n,context:r})}),Component:(t,n=t.displayName||t.name)=>Ve.forwardRef((r,l)=>o.jsx(ql.Consumer,{children:a=>o.jsx(Ux,{Implementation:t,context:a,spec:n,props:r,ref:l})}))}),Vx=Wx(),fe=Vx.Component,Hx="svg",rc="-",E1="none",Yf="fill",Zx="path",Gx="line",Kx="rect",Yx="array",Qx="circle",Xx="ellipse",qx="polygon",Jx="polyline",Nu=/-(?!\d)/,N1="currentColor",Ou=512,Ru=512,Cl={defaults:{width:512,height:512,type:"line"},icons:{alpha:"M102,448L256,64L410,448 M152,333L360,333",angle:"M448,336L256,144L64,336",angles:"M448,448L256,256L64,448M448,256L256,64L64,256",arrow:"M96,224L256,64L416,224M256,86L256,448",arrows:"M144,144L256,32L368,144M368,368L256,480L144,368M256,56L256,456",asterisk:"M76,152L436,360M76,360L436,152M256,48L256,464",at:"M256,160C309,160 352,203 352,256C352,309 309,352 256,352C203,352 160,309 160,256C160,203 203,160 256,160M256,480C132,480 32,380 32,256C32,132 132,32 256,32C380,32 480,132 480,256L480,288C480,323 451,352 416,352C381,352 352,323 352,288L352,176",ban:"M100,412L412,100 M256,32C380,32 480,132 480,255C480,379 380,480 256,480C132,480 32,379 32,255C32,132 132,32 256,32Z",bars:"M64,96L448,96M64,256L448,256M64,416L448,416",caret:"M448,336L256,144L64,336L448,336Z",check:"M48,248L192,392L464,120",circle:"circle:256 256 224",clipboard:"M192,80L80,80L80,496L432,496L432,80L320,80L320,112L192,112L192,80ZM256,16C282,16 304,38 304,64C304,90 282,112 256,112C230,112 208,90 208,64C208,38 230,16 256,16Z",cloud:"M480,293C480,234 437,177 362,196C346,161 319,116 240,120C180,124 139,165 125,224C121,223 116,223 111,223C68,223 32,260 32,307C32,354 68,392 111,392C120,392 366,392 380,392C462,392 480,335 480,293Z",cog:"M306,21L206,21L187,91L147,114L78,95L28,182L78,233L78,279L28,330L78,417L147,398L187,421L206,491L306,491L325,421L365,398L434,417L484,330L434,279L434,233L484,182L434,95L365,114L325,91L306,21Z M256,176C300,176 336,212 336,256C336,300 300,336 256,336C212,336 176,300 176,256C176,212 212,176 256,176Z",cross:"M112,112L400,400M400,112L112,400",drag:"M64,96L256,32L448,96M64,416L256,480L448,416M128,256L384,256",envelope:"M32,104L480,104L480,408L32,408L32,104M48,120L256,288L464,120M48,392L200,252M464,392L312,252",equals:"M96,320L416,320 M96,192L416,192",exclamation:"M256,96L256,310M254,416L258,416",filter:"M64,32L448,32L448,128L305,271L304,432L208,496L208,272L64,128L64,32Z",heart:"M256,128C298,48 382,48 424,88C466,128 466,208 424,288C394,348 319,408 256,448C193,408 118,348 88,288C46,208 46,128 88,88C130,48 214,48 256,128Z",hourglass:"M80,32L432,32M80,480L432,480M128,32C128,256 384,256 384,480M384,32C384,256 128,256 128,480",info:"M212,202L256,202L256,416M182,416L330,416M252,96L256,96",list:"M176,96L448,96M176,256L448,256M176,416L448,416M64,96L80,96M64,256L80,256M64,416L80,416",minus:"M96,256L416,256",number:"M256,448L256,64L176,128 M160,448L336,449",pen:"M482,143C491,134 491,120 482,112L401,30C392,21 378,21 369,30L72,326L22,489L186,439L482,143M305,93L418,206",plus:"M256,96L256,416M96,256L416,256",point:"M464,192L256,16L48,192L128,192L128,480L384,480L384,192L464,192Z",prime:"M256,128L256,256",question:"M160,160C160,126 197,80 255,80C314,80 336,128 336,160C336,236 255,235 255,320 M255,416L256,416",rotate:"M392,120C356,84 307,64 256,64C150,64 64,150 64,256C64,362 150,448 256,448C303,448 349,430 384,399C349,430 303,448 256,448C150,448 64,362 64,256C64,150 150,64 256,64C307,64 356,84 392,120Z M352,208L480,208L480,80",search:"M204,32C300,32 384,111 384,208C384,305 305,384 208,384C111,384 32,305 32,208C32,111 107,32 204,32M480,480L332,332",square:"rect:32 32 448 448",square10:"rect:32 32 448 448 45 45",square20:"rect:32 32 448 448 90 90",square30:"rect:32 32 448 448 135 135",square40:"rect:32 32 448 448 180 180",star:"M256,32L324,183L489,202L367,313L400,476L256,394L112,476L145,313L23,202L188,183L256,32Z",thumb:"M149,174L32,174L32,448L149,448L149,184 M149,217C277,160 246,36 282,38C372,44 324,192 324,192L440,192C462,192 480,210 480,232C480,254 462,272 440,272L368,272M424,272C446,272 464,290 464,312C464,334 446,352 424,352L352,352M392,352C414,352 432,370 432,392C432,414 414,432 392,432L256,432C220,432 149,409 149,409",time:"M256,128L256,256L336,336",trash:"M32,80L480,80 M80,80C80,80 100,344 109,452C111,477 131,496 156,496C211,496 301,496 356,496C381,496 401,477 403,452C412,344 432,80 432,80 M160,80L208,16L304,16L352,74",triangle:"M256,64L32,448L480,448L256,64Z",user:"M256,32C302,32 340,70 340,116C340,162 302,208 256,208C210,208 172,162 172,116C172,70 210,32 256,32ZM448,412C448,361 410,320 363,320L148,320C102,320 64,361 64,412L64,480L448,480L448,412Z",vertical:"line:256,48 256,464",wrench:"M486,108C493,124 496,142 496,160C496,239 431,304 352,304C330,304 309,299 290,290L98,482C79,501 49,501 30,482C11,463 11,433 30,414L222,222C213,203 208,182 208,160C208,81 273,16 352,16C370,16 388,19 404,26L326,103L409,186L486,108Z"}};function e9(e,t,n=Cl){n.icons[e]=t}function t9(e,t=Cl){Object.entries(e).forEach(([n,r])=>e9(n,r,t))}const Jl=w.createContext();function O1(e){return typeof e=="function"}function R1(e){return typeof e=="object"&&!Qf(e)&&!n9(e)}function Qf(e){return Array.isArray(e)}function n9(e){return e===null}function r9({context:e={},Implementation:t,spec:n=!1,props:r={},ref:l}){if(!n)return o.jsx(t,{...r,ref:l});let a={},s=O1(n)?n(e):e[n];if(Qf(s)&&(t=s[0],s=s[1]),O1(s)){const i=s(r,l,e);if(Ve.isValidElement(i))return i;R1(i)&&Object.assign(a,r,i)}else R1(s)?Object.assign(a,s,r):Object.assign(a,r);return o.jsx(t,{...a,ref:l})}const o9=e=>({Context:Jl,Provider:({children:t,...n})=>o.jsx(Jl.Provider,{value:{...e,...n},children:t}),Consumer:t=>n=>o.jsx(Jl.Consumer,{children:r=>o.jsx(t,{...r,...n,context:r})}),Component:(t,n=t.displayName||t.name)=>Ve.forwardRef((r,l)=>o.jsx(Jl.Consumer,{children:a=>o.jsx(r9,{Implementation:t,context:a,spec:n,props:r,ref:l})}))}),l9=o9(),a9=l9.Component;function dn(e){return typeof e=="string"}function jl(e){return Array.isArray(e)}function Mu(e){return typeof e=="object"&&!jl(e)&&!qf(e)}function Xf(e){return e===void 0}function qf(e){return e===null}function ps(e){return!(Xf(e)||qf(e))}function Jf(e){return!ps(e)}function cn(...e){throw new Error(e.join(""))}function s9(){return Intl.DateTimeFormat().resolvedOptions().locale}s9();function M1(e){return Jf(e)?[]:dn(e)?e.length?e.split(/,\s*|\s+/):[]:jl(e)?e:[e]}function Sl(e){return e.split(/\s*[;&]\s*/).filter(t=>t.length>0).reduce((t,n)=>{const[r,l]=n.split(/\s*[:=]\s*/);return t[r]=Xf(l)?!0:l,t},{})}const e3=e=>e.filter(ps).join(" "),t3={x:0,y:0,size:16,flipX:!1,flipY:!1,rotate:0},In={flip:(e,t)=>{dn(t)&&t.match(/^y$/i)?e.flipY=!e.flipY:e.flipX=!e.flipX},flipx:e=>e.flipX=!e.flipX,flipy:e=>e.flipY=!e.flipY,grow:(e,t)=>e.size+=parseInt(t),shrink:(e,t)=>e.size-=parseInt(t),left:(e,t)=>t===!0?e.rotate-=90:e.x-=parseInt(t),right:(e,t)=>t===!0?e.rotate+=90:e.x+=parseInt(t),up:(e,t)=>t===!0?e.rotate+=0:e.y-=parseInt(t),down:(e,t)=>t===!0?e.rotate+=180:e.y+=parseInt(t),rotate:(e,t)=>e.rotate+=parseInt(t)};In.flop=In.flipy;In["flip-x"]=In.flipx;In["flip-y"]=In.flipy;function n3(e,t={...t3}){const n=dn(e)?Sl(e):e||{};return Object.entries(n).reduce((r,[l,a])=>{const s=l.toLowerCase();return(In[s]||cn(`Invalid transform: ${s}`))(r,a),r},t)}const i9=4.42,Xt=e=>`${i9*e}%`,c9={},oc={outline:{fill:"none",stroke:"currentColor",strokeWidth:Xt(2),strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"1.5"},solid:{fill:"currentColor",stroke:"none"},round:{strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"1.5"},square:{strokeLinecap:"square",strokeLinejoin:"miter",strokeMiterlimit:"1.5"},butt:{strokeLinecap:"butt"},bevel:{strokeLinejoin:"bevel"},thinnest:{strokeWidth:Xt(.5)},thinner:{strokeWidth:Xt(1)},thin:{strokeWidth:Xt(1.5)},medium:{strokeWidth:Xt(2)},thick:{strokeWidth:Xt(2.5)},thicker:{strokeWidth:Xt(3)},thickest:{strokeWidth:Xt(3.5)}};oc.line=oc.outline;const u9={...Object.entries(oc).reduce((e,[t,n])=>(e[t]=r=>Object.assign(r,n),e),{}),fill:(e,t)=>e.fill=t===!0?N1:t,stroke:(e,t)=>e.stroke=t===!0?N1:t,nofill:e=>e.fill=E1,nostroke:e=>e.stroke=E1,strokewidth:(e,t)=>e.strokeWidth=t.match(/^[\d.]+$/)?Xt(parseFloat(t)):t,opacity:(e,t)=>e.opacity=t,fillopacity:(e,t)=>e.fillOpacity=t,strokeopacity:(e,t)=>e.strokeOpacity=t,dasharray:(e,t)=>e.strokeDasharray=t,drawlength:(e,t)=>e["--draw-length"]=t,drawtime:(e,t)=>e["--draw-time"]=t,filltime:(e,t)=>e["--fill-time"]=t};function Ua(e,t){return(dn(t)?t.split(Nu):t).forEach(n=>{const[r,l=!0]=n.split(/[:=]/),a=r.toLowerCase(),s=u9[a];if(s){s(e.style||(e.style={...c9}),l);return}(In[a]||cn(`Invalid style or transform: ${a}`))(e.transform||(e.transform={...t3}),l)})}const d9={width:Ou,height:Ru,type:Yf},r3={svg:e=>({element:Hx,svg:e}),array:e=>({element:Yx,items:e}),path:e=>({element:Zx,d:e}),polygon:e=>({element:qx,points:e}),polyline:e=>({element:Jx,points:e}),circle:e=>({element:Qx,...ea(e,"cx cy r")}),ellipse:e=>({element:Xx,...ea(e,"cx cy rx ry")}),line:e=>({element:Gx,...ea(e,"x1 y1 x2 y2")}),rect:e=>({element:Kx,...ea(e,"x y width height rx ry")})};function ea(e,t){const n=jl(t)?[...t]:M1(t);return M1(e).reduce((r,l)=>{if(n.length){const a=n.shift();r[a]=l}return r},{})}const o3=e=>{const[t,n=""]=e.split("?"),[r,...l]=t.split(/\.(?!\d)/),a=r.split(Nu).filter(i=>i.length),s=Sl(n);return{dashes:a,classes:l,style:s}},p9=(e,t)=>{const n=o3(e),{dashes:r}=n;for(let l=r.length;l>0;l--){const a=r.slice(0,l).join(rc);if(t[a]){n.name=r.splice(0,l).join(rc);break}}return n},f9=(e,t,n={})=>{const{icons:r}=t,l=p9(e,r),{name:a,classes:s,style:i,dashes:c}=l;Jf(a)&&cn(`No icon found matching any leading subset of ${l.dashes.join(rc)}`);const u=t.icons[a]||cn(`Icon not found in data: ${a}`),p=l3(u,t,{...n,name:a});if((s.length||n.className)&&(p.className=e3([...s||[],n.className])),p.transform&&(p.transform=n3(p.transform)),p.style&&(p.style=dn(p.style)?Sl(p.style):{...p.style}),p.type){const m=p.style&&{...p.style};Ua(p,p.type),delete p.type,m&&Object.assign(p.style,m)}return c.length&&Ua(p,c),Object.keys(i).length&&(p.style=Object.assign(p.style||{},i)),p};function h9(e){const t=e.match(/^(.*?):(.*)/);return t?{path:t[2],type:t[1]}:{path:e}}const l3=(e,t,n={})=>{const{defaults:r={}}=t,l={...d9,...r,...n};if(dn(e))return m9(l,e);if(Mu(e))return g9(l,e);if(jl(e))return x9(l,e,t);cn(`Cannot parse icon data: ${e}`)};function m9(e,t){if(t.match(/^\w*</))return e.body={element:"svg",svg:t},e;const n=t.match(/^(.*?):(.*)/);if(n){const[,r,l]=n,{dashes:a,classes:s}=o3(r),i=a.shift(),c=r3[i]||cn(`Invalid icon data element: ${i}`);return e.body=c(l),s.length&&(e.body.className=e3(s)),a.length&&Ua(e.body,a),e}return e.body={element:"path",d:t},e}function g9(e,t){const n={...t};if(n.element)return e.body=n,e;for(let r of Object.entries(r3)){const[l,a]=r,s=n[l];if(ps(s))return e.body=a(s),delete n[l],Object.assign(e,n),e}cn(`Cannot parse icon data: ${JSON.stringify(t)}`)}function x9(e,t,n){return e.body={element:"array",items:t.map(r=>l3(r,n).body)},e}const v9=({size:e,...t})=>{t.width??(t.width=e||Ou),t.height??(t.height=e||Ru),t.path&&Object.assign(t,h9(t.path));let n;return t.style&&(dn(t.style)?(n=Sl(t.style),t.style={}):n={...t.style}),Ua(t,t.type?t.type.split(Nu).filter(r=>r.length):Yf),delete t.type,t.style&&n&&Object.assign(t.style,n),t.transform&&(t.transform=n3(t.transform)),t},Pu=e=>Mu(e)?Object.entries(e).reduce((t,[n,r])=>(t[n.replace(/(?!-)-./g,l=>l[1].toUpperCase())]=r,t),{}):e,y9=e=>ps(e)?Pu(Sl(e)):null,pn=({style:e,class:t,...n})=>({style:dn(e)?y9(e):Pu(e),className:t,...n});function C9({width:e,height:t,transform:n,children:r}){const l=e/2,a=t/2,s=n.x*e/16,i=n.y*t/16,c=n.size/16*(n.flipX?-1:1),u=n.size/16*(n.flipY?-1:1),p=n.rotate;return o.jsx("g",{transform:`translate(${l} ${a})`,children:o.jsx("g",{transform:`translate(${s}, ${i}) scale(${c}, ${u}) rotate(${p} 0 0)`,children:o.jsx("g",{transform:`translate(-${l} -${a})`,children:r})})})}const j9=e=>o.jsx("circle",{...pn(e)}),S9=e=>o.jsx("ellipse",{...pn(e)}),b9=e=>o.jsx("line",{...pn(e)}),a3=e=>o.jsx("path",{...pn(e)}),_9=e=>o.jsx("polygon",{...pn(e)}),w9=e=>o.jsx("polyline",{...pn(e)}),k9=e=>o.jsx("rect",{...pn(e)}),L9=({svg:e,...t})=>o.jsx("g",{dangerouslySetInnerHTML:{__html:e},...pn(t)}),T9=({items:e,...t})=>o.jsx("g",{...pn(t),children:e.map((n,r)=>o.jsx(Wa,{body:n},r))}),E9={array:T9,circle:j9,ellipse:S9,line:b9,path:a3,polygon:_9,polyline:w9,rect:k9,svg:L9},Wa=({path:e,body:t,...n})=>{if(e)return o.jsx(a3,{d:e,...n});if(dn(t))return o.jsx("g",{dangerouslySetInnerHTML:{__html:t}});if(Mu(t)){const{element:r,...l}=t,a=E9[r]||cn(`Invalid element type: ${r} => `,JSON.stringify(t));return o.jsx(a,{...l})}if(jl(t))return t.map((r,l)=>o.jsx(Wa,{body:r},l));cn(`Don't know how to handle body: ${t}`)},P1=({onClick:e,minx:t=0,miny:n=0,width:r=Ou,height:l=Ru,style:a,transform:s,className:i="",debug:c,...u})=>o.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",role:"img","aria-hidden":"true",focusable:"false",viewBox:`${t} ${n} ${r} ${l}`,className:`${i} icon`,style:Pu(a),onClick:e,children:[!!c&&console.log("style: ",a),s?o.jsx(C9,{width:r,height:l,transform:s,children:o.jsx(Wa,{...u})}):o.jsx(Wa,{...u})]}),N9=({name:e,library:t=Cl,...n})=>e?o.jsx(P1,{...n,...f9(e,t,n)}):o.jsx(P1,{...v9(n)}),ga=a9(N9,"Icon"),s3=(e,...t)=>Px(e)?e(...t):e,O9=e=>e.filter(mt).join(" "),R9=e=>Object.entries(e).filter(([,t])=>t).map(([t])=>t),Zt=(...e)=>O9(e.flatMap(t=>Zf(t)?R9(t):t)),M9=e=>{if(!e)return null;const[t,n,r,l,a]=e.split("-");return Zt(t,A9(n),$9(r),B9(l),D9(a))},P9=({className:e,size:t,color:n,...r})=>({...r,className:Zt(e,t,M9(n))}),Au=e=>i3(e,"border",t=>`border bdw-${t}`),$u=e=>i3(e,"shadow-1",t=>`shadow-${t}`),Bu=e=>bl(e,t=>`bdr-${t}`),A9=e=>bl(e,t=>`fgc-${t}`),$9=e=>bl(e,t=>`bgc-${t}`),B9=e=>bl(e,t=>`fgd-${t}`),D9=e=>bl(e,t=>`bgd-${t}`),bl=(e,t)=>Mx(parseInt(e))?s3(t,e):null,i3=(e,t,n)=>e===!0?t:parseInt(e)?s3(n,e):null,Y=e=>o.jsx(ga,{...P9(e)}),I9=({icon:e,iconClass:t,iconLeft:n,iconLeftClass:r="on-left",iconRight:l,iconRightClass:a="on-right",text:s,children:i})=>o.jsxs(o.Fragment,{children:[!!e&&o.jsx(ga,{name:e,className:t,fixedWidth:!0}),!!n&&o.jsx(ga,{name:n,className:r,fixedWidth:!0}),s||i,!!l&&o.jsx(ga,{name:l,className:a,fixedWidth:!0})]}),c3=fe(I9,"WithIcons");t9({github:"path-fill-nostroke:M256,0C115,0 0,115 0,256C0,369 73,465 175,499C188,501 193,493 193,487C193,481 192,460 192,439C128,451 111,423 106,409C103,402 91,379 80,373C71,368 58,356 80,356C100,356 114,374 119,382C142,421 179,410 194,403C196,387 203,375 210,369C153,363 93,340 93,243C93,215 103,192 120,174C117,167 108,141 122,106C122,106 144,99 193,132C213,126 235,124 257,124C278,124 300,126 321,132C370,99 391,106 391,106C405,141 396,167 394,174C410,192 420,214 420,243C420,341 360,363 303,369C312,377 320,392 320,416C320,451 320,478 320,487C320,493 325,501 338,499C439,465 512,369 512,256C512,115 397,0 256,0Z"});const z9=({dismissable:e,dismiss:t,revealable:n,isRevealed:r,openIcon:l="angle-down",closedIcon:a="angle-left",dismissIcon:s="cross"})=>o.jsxs("div",{className:"on-right",children:[!!e&&o.jsx(Y,{name:s,fixedWidth:!0,className:"dismiss",onClick:()=>t(!0)}),!!n&&o.jsx(Y,{name:r?l:a,fixedWidth:!0,className:"reveal"})]}),u3=fe(z9,"AlertControls"),F9=({headline:e,headIcon:t,toggle:n,revealable:r=!1,controlProps:l,Controls:a=u3})=>o.jsxs("div",{className:"headline flex space",onClick:r?n:null,children:[o.jsxs("div",{children:[!!t&&o.jsx(Y,{name:t,fixedWidth:!0,className:"on-left"}),e]}),o.jsx(a,{...l})]}),U9=fe(F9,"AlertHeadline"),W9=({title:e,text:t,children:n})=>o.jsxs(o.Fragment,{children:[e&&o.jsx("h3",{children:e}),t?o.jsx("p",{children:t}):n]}),d3=fe(W9,"AlertContent"),V9=({icon:e,Content:t=d3,...n})=>o.jsxs("div",{className:"side-icon",children:[o.jsx(Y,{name:e}),o.jsx("div",{className:"wide",children:o.jsx(t,{...n})})]}),H9=fe(V9,"AlertIcon"),p3="",f3="ArrowDown",h3="ArrowUp",m3="Enter",Z9=" ",g3="Escape",Va=e=>{const t=`HINT: define ${e}() to render this value`;return n=>Rx(n)?n:Zf(n)?n.text??n.label??n.name??t:t},x3=(e,t)=>{if(!e||!t)return;const n=t.offsetTop,r=n+t.offsetHeight,l=e.scrollTop,a=l+e.offsetHeight;n<l?e.scrollTo({top:n}):r>a&&e.scrollTo({top:l+(r-a)})},fn=({title:e,headline:t,headIcon:n,type:r,size:l,color:a,stripe:s,border:i,radius:c,shadow:u,className:p,text:m,children:g,onDismiss:b,icon:C,dismissable:S=!1,revealable:E=!1,revealed:x=!1,openIcon:d,closedIcon:h,dismissIcon:f,Headline:v=U9,Controls:y=u3,Content:j=d3,Icon:L=H9})=>{const[T,A]=w.useState(E?x:!0),[F,X]=w.useState(!1),le=Zt("alert",r,l,a,p,{revealable:E,dismissable:S,stripe:s},T?"revealed":null,$u(u),Au(i),Bu(c)),ye=()=>A(B=>!B),ce={dismissable:S,revealable:E,isRevealed:T,dismiss:()=>{X(!0),b&&b()},openIcon:d,closedIcon:h,dismissIcon:f},xe={title:e,text:m,children:g},N={...xe,icon:C,Content:j},$={headline:t,headIcon:n,toggle:ye,revealable:E,controlProps:ce,Controls:y};return F?null:o.jsxs("div",{className:le,children:[!!t&&o.jsx(v,{...$}),T&&(C?o.jsx(L,{...N}):o.jsx(j,{...xe}))]})},Ro=fe(e=>o.jsx(fn,{...e,type:"info"}),"Info"),Mo=fe(e=>o.jsx(fn,{...e,type:"success"}),"Success"),Po=fe(e=>o.jsx(fn,{...e,type:"warning"}),"Warning"),Ao=fe(e=>o.jsx(fn,{...e,type:"error"}),"Error");fn.Info=Ro;fn.Success=Mo;fn.Warning=Po;fn.Error=Ao;const V=fe(fn,"Alert"),G9=({type:e="button",size:t,color:n,className:r,disabled:l,bright:a,dark:s,outline:i,bare:c,shaded:u,shadow:p,border:m,radius:g,label:b,tooltip:C,tabIndex:S=0,icon:E,iconClass:x,iconLeft:d,iconLeftClass:h,iconRight:f,iconRightClass:v,text:y,children:j,Content:L=c3,...T})=>{const A=Zt(t,n,r,{bright:a,dark:s,outline:i,bare:c,shaded:u,icon:E},$u(p),Au(m),Bu(g)),F={icon:E,iconClass:x,iconLeft:d,iconLeftClass:h,iconRight:f,iconRightClass:v,text:y,children:j};return o.jsx("button",{className:A,"aria-label":b,tabIndex:S,type:e,disabled:l,"aria-disabled":l,"data-tooltip":C,...T,children:o.jsx(L,{...F})})},M=fe(G9,"Button"),K9=({buttons:e,children:t,className:n="buttons",buttonClass:r,Button:l=M,...a})=>o.jsx("div",{className:n,children:e?e.map((s,i)=>o.jsx(l,{className:r,...a,...s},i)):t}),yr=fe(K9,"Buttons"),Y9=({className:e,children:t,ref:n})=>o.jsx("label",{className:e,ref:n,children:t}),Q9=fe(Y9,"CheckboxLabel"),X9=({disabled:e=!1,tabIndex:t=0,onChange:n=tt,ref:r,...l})=>o.jsx("input",{type:"checkbox",ref:r,"aria-disabled":e,tabIndex:e?-1:t,onChange:a=>n(a.target.checked),...l}),q9=fe(X9,"CheckboxInput"),J9=({text:e,className:t="checkbox",ref:n,inputRef:r,checked:l,checkedText:a=e,uncheckedText:s=e,inputClass:i,Label:c=Q9,Input:u=q9,...p})=>o.jsxs(c,{className:t,ref:n,checked:l,children:[o.jsx(u,{className:i,ref:r,checked:l,...p}),l?a:s]}),Cr=fe(J9,"Checkbox"),ev=({checked:e=!1}={})=>{const[t,n]=w.useState(e);return{isChecked:t,setChecked:n,check:()=>n(!0),uncheck:()=>n(!1)}},tv=({checked:e=!1,onChange:t,...n})=>{const{isChecked:r,setChecked:l}=ev({checked:e}),a=s=>{l(s),t&&t(s)};return o.jsx(Cr,{checked:r,onChange:a,...n})},Zn=({visible:e=!1}={})=>{const[t,n]=w.useState(e);return{isVisible:t,setVisible:n,show:()=>n(!0),hide:()=>n(!1)}},nv=({initiallyRevealed:e=!1,open:t=e,confirmIcon:n="check",confirmText:r="Confirm",confirmColor:l="red",confirmClass:a,cancelIcon:s="cross",cancelText:i="Cancel",cancelColor:c="grey",cancelClass:u,confirm:p={iconRight:n,text:r,color:l,className:a},cancel:m={iconLeft:s,text:i,color:c,className:u},buttonsClass:g,className:b=g,buttonClass:C,onClick:S=()=>window.alert("No confirm action defined"),...E})=>{const{isVisible:x,hide:d,show:h}=Zn({visible:t}),v={iconRight:n,text:r,color:l,className:a,...p,onClick:j=>{j.preventDefault(),d(),S()}},y={iconLeft:s,text:i,color:c,className:u,outline:!0,...m,onClick:d};return o.jsx(yr,{className:b,buttonClass:C,buttons:x?[y,v]:[{...E,onClick:h}]})},Gt=fe(nv,"Confirm"),rv=({summary:e,summaryClass:t})=>o.jsx("summary",{className:t,children:e}),ov=({content:e,children:t,contentClass:n})=>o.jsx("div",{className:n,children:e||t}),lv=({className:e,size:t,color:n,lined:r,border:l,radius:a,shaded:s,shadow:i,open:c,Summary:u=rv,Content:p=ov,...m})=>o.jsxs("details",{className:Zt(e,n,Au(l),Bu(a),$u(i),{size:t,color:n,lined:r,shaded:s}),open:c,children:[o.jsx(u,{...m}),o.jsx(p,{...m})]}),Ie=fe(lv,"Details"),av=({close:e,icon:t="cross",className:n="close"})=>o.jsx("div",{className:n,onClick:e,children:o.jsx(Y,{name:t})}),sv=fe(av,"ModalClose"),iv=({title:e,header:t})=>e||t?o.jsxs("header",{children:[!!e&&o.jsx("h3",{children:e}),t]}):null,cv=fe(iv,"ModalHeader"),uv=({footer:e})=>!!e&&o.jsx("footer",{children:e}),dv=fe(uv,"ModalFooter"),pv=({text:e,children:t,Header:n=cv,Footer:r=dv,...l})=>o.jsxs("article",{children:[o.jsx(n,{...l}),e||t,o.jsx(r,{...l})]}),fv=fe(pv,"ModalContent"),hv=({ref:e,open:t,close:n,className:r,closeClass:l="close",closeIcon:a="cross",Close:s=sv,Content:i=fv,...c})=>(e||(e=w.useRef(null)),w.useEffect(()=>{const{current:u}=e;t?u.showModal():u.close()},[t]),o.jsxs("dialog",{ref:e,className:r,children:[!!n&&o.jsx(s,{close:n,icon:a,className:l}),o.jsx(i,{...c})]})),Kt=fe(hv,"Modal"),mv=({open:e=!1}={})=>{const{isVisible:t,show:n,hide:r}=Zn({visible:e});return{show:n,hide:r,Modal:l=>o.jsx(Kt,{open:t,...l})}},gv=({color:e,className:t,style:n,fixed:r,light:l,dark:a,children:s})=>o.jsx("div",{className:Zt("overlay",t,e,{fixed:r,light:l,dark:a}),style:n,children:s}),oo=fe(gv,"Overlay"),xv=({open:e=!1}={})=>{const{isVisible:t,show:n,hide:r}=Zn({visible:e});return{show:n,hide:r,Overlay:l=>t&&o.jsx(oo,{...l})}};var vv=Object.defineProperty,yv=(e,t,n)=>t in e?vv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Xs=(e,t,n)=>(yv(e,typeof t!="symbol"?t+"":t,n),n);const _l=(e,t={})=>{const n=Ve.createContext(t);return{Context:n,Provider:r=>o.jsx(e,{...r,render:l=>o.jsx(n.Provider,{value:l,children:r.children})}),Consumer:r=>l=>o.jsx(n.Consumer,{children:a=>o.jsx(r,{...a,...l})}),Use:()=>Ve.useContext(n)}};function Cv(e={},t={},n={}){return Object.entries(t).reduce((r,[l,a])=>{const s=n[a];return s!==null&&typeof s<"u"&&(r[l]=s),r},{...e})}function jv(e,t=[]){return(typeof t=="string"?t.split(/,\s*|\s+/):t).reduce((n,r)=>{const l=e[r]||bv(`Cannot expose non-existent action method: ${r}`);return n[r]=l.bind(e),n},{})}function Sv(e,t){const n=e.debug??t.debug,r=A1(e.debugPrefix??t.debugPrefix,e),l=A1(e.debugColor??t.debugColor,e);return n?r?(a,...s)=>console.log(`%c${r}%c${a}`,`color: ${l}`,"color:black",...s):console.log.bind(console):()=>{}}function A1(e,t){return typeof e=="function"?e(t):e}function bv(...e){throw new Error(e.join(""))}class Ho extends Ve.Component{constructor(t){super(t);const n=this.constructor;this.debug=Sv(t,n),this.state=Cv(n.initialState,n.initialProps,t),this.actions=jv(this,n.actions)}getContext(){return{...this.props,...this.state,...this.actions}}getRenderProps(){return this.getContext()}render(){return this.props.render(this.getRenderProps())}}Xs(Ho,"initialState",{}),Xs(Ho,"initialProps",{}),Xs(Ho,"actions",[]);const _v=({page:e=0,pages:t,buttonClass:n="outline",pageClass:r=n,currentPageClass:l="solid",render:a,...s})=>{const u=t-1,p=t,m=e+1,g=e>0?e-1:null,b=mt(g)?g+1:null,C=e<u?e+1:null,S=mt(C)?C+1:null;return a({page:e,pageNo:m,firstPage:0,firstPageNo:1,lastPage:u,lastPageNo:p,pages:t,prevPage:g,prevPageNo:b,nextPage:C,nextPageNo:S,buttonClass:n,pageClass:r,currentPageClass:l,...s})},Gn=_l(_v),wv=Gn.Use,kv=({prevPage:e,setPage:t,buttonClass:n,prevClass:r=n,prevIcon:l="arrow-left"})=>o.jsx(M,{className:r,icon:l,onClick:()=>t(e),disabled:$x(e)}),Lv=Gn.Consumer(kv),Tv=({nextPage:e,setPage:t,buttonClass:n,nextClass:r=n,nextIcon:l="arrow-right"})=>o.jsx(M,{className:r,icon:l,onClick:()=>t(e),disabled:!e}),Ev=Gn.Consumer(Tv),Nv=({pageNo:e,text:t=e,buttonClass:n,className:r=n,onClick:l})=>o.jsx(M,{text:t,className:r,onClick:l}),Ov=Gn.Consumer(Nv),Rv=o.jsx(o.Fragment,{children:"…"}),Mv=({pageSeparatorClass:e="separator",pageSeparator:t=Rv})=>o.jsx("div",{className:e,children:t}),Pv=Gn.Consumer(Mv),Av=({page:e,pageNo:t,firstPage:n,firstPageNo:r,prevPage:l,prevPageNo:a,nextPage:s,nextPageNo:i,lastPage:c,lastPageNo:u,setPage:p,pagesClass:m="pages",buttonClass:g,pageClass:b=g,currentPageClass:C="brand",showFirstLast:S=!0,Separator:E=Pv,Page:x=Ov})=>o.jsxs("div",{className:m,children:[S&&l>n&&o.jsxs(o.Fragment,{children:[o.jsx(x,{page:n,pageNo:r,className:b,onClick:()=>p(n)}),l>n+1&&o.jsx(E,{})]}),mt(l)&&o.jsx(x,{page:l,pageNo:a,className:b,onClick:()=>p(l)}),o.jsx(x,{page:e,pageNo:t,className:C,current:!0,disabled:!0}),mt(s)&&o.jsx(x,{page:s,pageNo:i,className:b,onClick:()=>p(s)}),S&&s&&s<c&&o.jsxs(o.Fragment,{children:[s<c-1&&o.jsx(E,{}),o.jsx(x,{page:c,pageNo:u,className:b,onClick:()=>p(c)})]})]}),$v=Gn.Consumer(Av),Bv=({className:e="pager",size:t,color:n,Previous:r=Lv,Next:l=Ev,Pages:a=$v})=>o.jsxs("div",{className:Zt(e,t,n),children:[o.jsx(r,{}),o.jsx(a,{}),o.jsx(l,{})]}),Dv=Gn.Consumer(Bv),Iv=({Content:e=Dv,...t})=>o.jsx(Gn.Provider,{...t,children:o.jsx(e,{})}),Bt=fe(Iv,"Pager"),qs={searching:!1,search:void 0,results:void 0,result:void 0,cursor:void 0};class yn extends Ho{constructor(t){super(t);const n=this.inputValue();this.state={...this.state,input:n,searching:!1},this.startSearch=t.debounceTime?Ix(this.search.bind(this),t.debounceTime):this.search.bind(this)}componentDidMount(){this.mounted=!0,this.props.onLoad(this)}componentWillUnmount(){this.setState({results:null}),this.mounted=!1,this.props.onUnload(this)}inputValue(t=this.props.initialValue){return mt(t)?this.props.displayValue(t):p3}onFocus(){this.debug("onFocus()"),this.setState({hasFocus:!0},this.props.onFocus)}onBlur(){this.debug("onBlur()"),this.setState({hasFocus:!1},this.props.onBlur),ds(500).then(()=>this.clearResults())}onChange(t){const n=t.target.value;this.debug(`input: ${n}`),n.length>=this.props.minLength?this.setState({input:n},this.startSearch):this.setState({input:n,...qs})}onKeyDown(t){this.debug(`onKeyDown(${t.key})`);const n=this.state.cursor;switch(t.key){case f3:this.setCursor(n+1);break;case h3:this.setCursor(n-1);break;case m3:this.selectCursor();break;case g3:this.reset();break;default:return}t.preventDefault()}reset(){this.debug("reset()");const t=this.props.initialValue,n=this.inputValue(t);this.debug(`reset() [input:${n}] from value: `,t),this.setState({value:t,input:n,...qs},this.props.onReset)}search(){const{input:t}=this.state,{minLength:n,onSearch:r}=this.props;if(t.length<n){this.debug(`search() cancelled - input is shorter than ${n}`);return}if(!r){this.debug("search() cancelled - no onSearch() handler defined");return}this.debug("onSearch: ",r),this.setState({search:t,searching:!0},async()=>this.searchResults(await r(t,this)))}searchResults(t){this.debug("searchResults()",t),this.setState({results:t,searching:!1,cursor:0})}selectResult(t){this.debug("selectResult()",t);const n=this.inputValue(t);this.setState({value:t,input:n,...qs},()=>this.props.onSelect(t))}setCursor(t){this.debug(`setCursor(${t})`);const{results:n}=this.state;this.setState({cursor:n&&n.length?(t+n.length)%n.length:void 0})}selectCursor(){const{cursor:t,results:n}=this.state;n&&n.length&&mt(t)&&this.selectResult(n[t])}clearResults(){this.mounted&&this.setState({results:null})}resultsRef(t){this._resultsRef=t}activeRef(t){x3(this._resultsRef,t)}}qe(yn,"debug",!1),qe(yn,"debugPrefix","Search > "),qe(yn,"debugColor","MediumVioletRed"),qe(yn,"defaultProps",{minLength:2,debounceTime:500,onLoad:tt,onUnload:tt,onFocus:tt,onBlur:tt,onReset:tt,onSelect:tt,displayValue:Va("displayValue"),displayResult:Va("displayResult")}),qe(yn,"initialState",{value:"",searching:!1}),qe(yn,"initialProps",{value:"initialValue"}),qe(yn,"actions",["onFocus","onBlur","onChange","onKeyDown","reset","selectResult","setCursor","selectCursor","resultsRef","activeRef"]);const lo=_l(yn),zv=({input:e,onFocus:t,onBlur:n,onChange:r,reset:l,placeholder:a="Search",clearIcon:s="cross",searchIcon:i="search",searchingIcon:c="cog.spin",inputsClass:u="inputs round",prefixClass:p="prefix",suffixClass:m="suffix",inputType:g="text",inputClass:b="",disabled:C,searching:S})=>o.jsxs("div",{className:u,children:[o.jsx("div",{className:p,children:o.jsx(Y,{name:i})}),o.jsx("input",{type:g,placeholder:a,value:e,onFocus:t,onBlur:n,onChange:r,disabled:C,className:b}),o.jsx("div",{className:m,onClick:l,children:o.jsx(Y,{name:S?c:s})})]}),Fv=lo.Consumer(zv),Uv=({result:e,active:t,activeRef:n,onClick:r,onMouseEnter:l,displayResult:a,resultClass:s="result",activeClass:i="active"})=>o.jsx("div",{className:Zt(s,{[i]:t}),onClick:r,onMouseEnter:l,ref:t?n:null,children:a(e)}),Wv=lo.Consumer(Uv),Vv=({noResultsClass:e="no-results",noResults:t="No results"})=>o.jsx("div",{className:e,children:t}),Hv=lo.Consumer(Vv),Zv=({results:e,resultsRef:t,cursor:n,selectResult:r,setCursor:l,resultsClass:a="results",Result:s=Wv,NoResults:i=Hv})=>o.jsx("div",{className:a,ref:t,children:Eu(e)&&e.length?e.map((c,u)=>o.jsx(s,{result:c,active:mt(n)&&e[n]===c,onClick:()=>r(c),onMouseEnter:()=>l(u)},c.id??c.value??u)):o.jsx(i,{})}),Gv=lo.Consumer(Zv),Kv=({results:e,onKeyDown:t,Input:n=Fv,Results:r=Gv})=>o.jsxs("div",{className:"search",onKeyDown:t,children:[o.jsx(n,{}),!!e&&o.jsx(r,{})]}),Yv=lo.Consumer(Kv),Qv=({Content:e=Yv,...t})=>o.jsx(lo.Provider,{...t,children:o.jsx(e,{})}),fs=fe(Qv,"Search"),$1={selecting:!1,cursor:void 0};class Cn extends Ho{constructor(t){super(t);const n=this.inputValue();this.state={...this.state,input:n,searching:!1}}componentDidMount(){this.mounted=!0,this.props.onLoad(this)}componentWillUnmount(){this.setState({results:null}),this.mounted=!1,this.props.onUnload(this)}inputValue(t=this.props.initialValue){return mt(t)?this.props.displayValue(t):null}onFocus(){this.debug("onFocus()"),this.setState({hasFocus:!0},this.props.onFocus)}onBlur(){this.debug("onBlur()"),this.setState({hasFocus:!1},this.props.onBlur),ds(250).then(()=>this.close())}onClick(){this.debug("onClick()"),this.state.selecting?this.close():this.open()}open(t=0){this.debug(`open(${t})`),this.setState({selecting:!0,cursor:t},this.props.onOpen)}close(){this.debug("close()"),this.setState({selecting:!1,cursor:void 0},this.props.onClose)}onKeyDown(t){var r;this.debug(`onKeyDown(${t.key})`);const n=this.state.cursor;switch(t.key){case f3:this.state.selecting?this.setCursor(n+1):this.open();break;case h3:this.state.selecting?this.setCursor(n-1):this.open(((r=this.props.options)==null?void 0:r.length)-1);break;case m3:this.state.selecting?this.selectCursor():this.open();break;case g3:this.close();break;case Z9:this.state.selecting||this.open();break;default:console.log(`ignored key ${t.key}`);return}t.preventDefault()}setCursor(t){this.debug(`setCursor(${t})`);const{options:n}=this.props;t=n&&n.length?(t+n.length)%n.length:void 0,this.setState({cursor:t})}selectCursor(){this.debug("selectCursor()");const{cursor:t}=this.state,{options:n}=this.props;if(n&&n.length&&mt(t)){const r=n[t];this.debug(`selectCursor() ${t} =>`,r),this.selectOption(r)}else this.debug("Not selecting: cursor out of range")}selectOption(t){this.debug("selectOption()",t);const n=this.inputValue(t);this.setState({value:t,input:n,...$1},()=>this.props.onSelect(t))}optionsRef(t){this._optionsRef=t}activeRef(t){x3(this.optionsRef,t)}}qe(Cn,"debug",!0),qe(Cn,"debugPrefix","Select > "),qe(Cn,"debugColor","MediumVioletRed"),qe(Cn,"defaultProps",{options:[],onLoad:tt,onUnload:tt,onFocus:tt,onBlur:tt,onClick:tt,onOpen:tt,onClose:tt,onSelect:tt,displayValue:Va("displayValue"),displayOption:Va("displayOption")}),qe(Cn,"initialState",{value:p3,...$1}),qe(Cn,"initialProps",{value:"initialValue"}),qe(Cn,"actions",["onFocus","onBlur","onClick","onKeyDown","open","close","setCursor","selectCursor","selectOption","optionsRef","activeRef"]);const ao=_l(Cn),Xv=({input:e,onFocus:t,onBlur:n,onClick:r,placeholder:l="Select",placeholderClass:a="placeholder",inputsClass:s="inputs",inputClass:i="input",suffixClass:c="suffix",disabled:u})=>o.jsxs("div",{className:s,onClick:r,children:[o.jsx("div",{onFocus:t,onBlur:n,disabled:u,className:i,tabIndex:0,children:mt(e)?o.jsx(o.Fragment,{children:e}):o.jsx("span",{className:a,children:l})}),o.jsx("div",{className:c,children:o.jsx(Y,{name:"angle-down"})})]}),qv=ao.Consumer(Xv),Jv=({option:e,active:t,activeRef:n,onClick:r,onMouseEnter:l,displayOption:a,optionClass:s="option",activeClass:i="active"})=>o.jsx("div",{className:Zt(s,{[i]:t}),onClick:r,onMouseEnter:l,ref:t?n:null,children:a(e)}),ey=ao.Consumer(Jv),ty=({noOptionsClass:e="no-options",noOptions:t="No options"})=>o.jsx("div",{className:e,children:t}),ny=ao.Consumer(ty),ry=({options:e,optionsRef:t,optionsClass:n="options",cursor:r,selectOption:l,setCursor:a,Option:s=ey,NoOptions:i=ny})=>o.jsx("div",{className:n,ref:t,children:Eu(e)&&e.length?e.map((c,u)=>o.jsx(s,{option:c,active:mt(r)&&e[r]===c,onClick:()=>l(c),onMouseEnter:()=>a(u)},c.id??c.value??u)):o.jsx(i,{})}),oy=ao.Consumer(ry),ly=({onKeyDown:e,selecting:t,selectClass:n="select",selectingClass:r="selecting",Input:l=qv,Options:a=oy})=>o.jsxs("div",{className:Zt(n,{[r]:t}),onKeyDown:e,children:[o.jsx(l,{}),!!t&&o.jsx(a,{})]}),ay=ao.Consumer(ly),sy=({Content:e=ay,...t})=>o.jsx(ao.Provider,{...t,children:o.jsx(e,{})}),hs=fe(sy,"Select"),iy=()=>o.jsxs(V,{children:[o.jsx("h3",{children:"Hello World!"}),"This is an alert."]}),cy=`import React from 'react'
import { Alert } from '@/src/index.jsx'

{/* START */}
// PRETEND: import { Alert } from '@abw/badger-react-ui'

const AlertExample = () =>
  <Alert>
    <h3>Hello World!</h3>
    This is an alert.
  </Alert>

export default AlertExample
`,uy=["red","brown","orange","yellow","olive","green","teal","blue","indigo","violet","purple","pink","maroon"],v3=({color:e,setColor:t,disabled:n=!1})=>o.jsxs("select",{name:"color",required:!0,value:e,onChange:r=>t(r.target.value),disabled:n,children:[o.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Select Range"}),o.jsx("option",{value:"",children:"Default"}),uy.map(r=>o.jsx("option",{value:r,children:r},r))]}),dy=["smallest","smaller","small","medium","large","larger","largest","x2","x3","x4","x5","x6","x7","x8","x9","x10"],y3=({size:e,setSize:t})=>o.jsxs("select",{name:"size",required:!0,value:e,onChange:n=>t(n.target.value),children:[o.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Size"}),o.jsx("option",{value:"",children:"Default"}),dy.map(n=>o.jsx("option",{value:n,children:n},n))]}),py=[0,1,2,3,4,5,6,8,10],fy=({radius:e,setRadius:t})=>o.jsxs("select",{name:"radius",required:!0,value:e,onChange:n=>t(n.target.value),children:[o.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Radius"}),o.jsx("option",{value:"",children:"Default"}),py.map(n=>o.jsx("option",{value:n,children:n},n))]}),hy=[1,2,3,4,5],my=({shadow:e,setShadow:t})=>o.jsxs("select",{name:"shadow",required:!0,value:e,onChange:n=>t(n.target.value),children:[o.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Shadow"}),o.jsx("option",{value:"",children:"Default"}),hy.map(n=>o.jsx("option",{value:n,children:n},n))]}),B1=({checked:e,toggle:t,label:n,disabled:r=!1})=>o.jsxs("label",{className:"checkbox border no-focus",children:[o.jsx("input",{type:"checkbox",checked:e,onChange:t,disabled:r}),n]}),gy=[0,1,2,3,4,5,6,8,10],xy=({border:e,setBorder:t,disabled:n=!1})=>o.jsxs("select",{name:"border",required:!0,value:e,onChange:r=>t(r.target.value),disabled:n,children:[o.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Border"}),o.jsx("option",{value:"",children:"Default"}),gy.map(r=>o.jsx("option",{value:r,children:r},r))]}),vy=Object.keys(Cl.icons),lc=({icon:e,setIcon:t,disabled:n=!1})=>o.jsxs("select",{name:"icon",required:!0,value:e,onChange:r=>t(r.target.value),disabled:n,children:[o.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Icon"}),o.jsx("option",{value:"",children:"None"}),vy.map(r=>o.jsx("option",{value:r,children:r},r))]}),yy=()=>{const[e,t]=w.useState(0),[n,r]=w.useState({headline:"",title:"",text:"Hello World!",revealable:!1,stripe:!1}),l=c=>()=>{r(u=>({...u,[c]:!u[c]})),t(u=>u+1)},a=c=>u=>{r(p=>({...p,[c]:u})),t(p=>p+1)},i=`<Alert
  ${jy(n)}
/>`;return o.jsxs("div",{className:"example grid-2 gap-h-8 stack-desktop",children:[o.jsxs("div",{children:[o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Output"}),o.jsx("div",{className:"output mar-b-8",children:o.jsx(Sy,{options:n},e)})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Markup"}),o.jsx(kn,{code:i,language:"html",expand:!0})]})]}),o.jsx(Cy,{options:n,setOption:a,toggleOption:l})]})},Cy=({options:e,toggleOption:t,setOption:n})=>{const r=n("headline"),l=n("title"),a=n("text"),s=n("type"),i=n("size"),c=n("color"),u=n("border"),p=n("radius"),m=n("shadow"),g=n("icon"),b=n("headIcon"),C=t("stripe"),S=t("revealable");return o.jsxs("div",{children:[o.jsx(Js,{label:"Headline",value:e.headline,setValue:r}),o.jsx(Js,{label:"Title",value:e.title,setValue:l}),o.jsx(Js,{label:"Text",value:e.text,setValue:a}),o.jsxs("div",{className:"grid-2 gap-h-4 stack-mobile top",children:[o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Type"}),o.jsx(by,{type:e.type,setType:s})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Color"}),o.jsx(v3,{color:e.color,setColor:c,disabled:e.type})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Size"}),o.jsx(y3,{size:e.size,setSize:i})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Shadow"}),o.jsx(my,{shadow:e.shadow,setShadow:m})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Border Width"}),o.jsx(xy,{border:e.border,setBorder:u,disabled:e.stripe})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Border Radius"}),o.jsx(fy,{radius:e.radius,setRadius:p})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Headline Icon"}),o.jsx(lc,{icon:e.headIcon,setIcon:b,disabled:!e.headline})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Body Icon"}),o.jsx(lc,{icons:e.icon,setIcon:g})]})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Options"}),o.jsxs("div",{className:"grid-2 gap-h-4 stack-mobile top",children:[o.jsx(B1,{checked:e.stripe,toggle:C,label:"Stripe"}),o.jsx(B1,{checked:e.revealable,toggle:S,label:"Revealable",disabled:!e.headline})]})]})]})},jy=e=>{const t=["headline","title","text","type","color","size"].filter(l=>e[l]).map(l=>`${l}="${e[l]}"`),n=["shadow","border","radius"].filter(l=>e[l]).map(l=>`${l}={${e[l]}}`),r=["stripe","revealable","dismissable"].filter(l=>e[l]);return[...t,...n,...r].join(`
  `)},Sy=({options:e})=>o.jsx(V,{...e}),by=({type:e,setType:t})=>o.jsxs("select",{name:"type",required:!0,value:e,onChange:n=>t(n.target.value),children:[o.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Type"}),o.jsx("option",{value:"",children:"Default"}),["info","warning","success","error"].map(n=>o.jsx("option",{value:n,children:n},n))]}),Js=({label:e,value:t,setValue:n})=>o.jsxs("div",{className:"field",children:[o.jsx("label",{children:e}),o.jsxs("div",{className:"inputs",children:[o.jsx("input",{type:"text",name:"headline",value:t,onChange:r=>n(r.target.value)}),o.jsx("div",{className:"suffix",children:o.jsx(Y,{name:"cross",className:"hover",onClick:()=>n("")})})]})]}),C3=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["Use the ",o.jsx("code",{children:"Alert"})," component to render an alert. Any child elements will be rendered inside the alert body."]}),o.jsx(Xe,{Component:iy,code:cy,expand:!0}),o.jsx("h2",{children:"Demo"}),o.jsx(yy,{})]}),_y=Object.freeze(Object.defineProperty({__proto__:null,default:C3},Symbol.toStringTag,{value:"Module"})),j3=e=>e.replaceAll(/\W+/g,"-").replace(/^-+/,"").replace(/-+$/,"").toLowerCase(),wy=({render:e})=>{const[t,n]=w.useState({}),r=w.useRef();return e({tocs:t,addToc:(s,i,c,u)=>{const p=t[s]||(t[s]={});p[i]={text:c,ref:u},n({...t})},addTocHeading:(s,i,c,u)=>{const p=t[s]||(t[s]={});p[i]={heading:c,ref:u},n({...t})},contentRef:r})},wl=_l(wy),ky=({addToc:e,addTocHeading:t,tocName:n,render:r})=>r({addPageToc:(s,i,c)=>{e(n,s,i,c)},addPageTocHeading:(s,i,c)=>{t(n,s,i,c)}}),Du=_l(wl.Consumer(ky)),Ly=({id:e,code:t,title:n=t,children:r,addPageToc:l,split:a})=>{const s=j3(e||t||n),i=w.useRef(),c=t?`code:${t}`:n;return w.useEffect(()=>{l&&l(s,c,i)},[e,t,n]),o.jsxs("section",{id:s,ref:i,children:[o.jsx("h3",{className:t?"font-mono page-section":"page-section",children:n}),o.jsx("div",{className:a?"cols-2 stack-desktop":"",children:r})]})},K=Du.Consumer(Ly),R=({Component:e,Source:t,children:n,code:r,title:l,caption:a=r?o.jsx("code",{children:r}):l,expand:s,undent:i,lineProps:c,highlightLines:u,...p})=>o.jsxs(K,{code:r,title:l,...p,children:[o.jsx("div",{className:"cols-2 stack-desktop mar-b-4",children:n}),o.jsx(Xe,{Component:e,code:t,caption:a,expand:s,undent:i,highlightLines:u,lineProps:c})]}),Ty=()=>o.jsxs("div",{children:[o.jsx(Ao,{text:"Error alert"}),o.jsx(Ao,{text:"Error alert with border",border:!0}),o.jsx(Ao,{headline:"Error Alert",text:"Error alert with headline",border:!0,shadow:!0}),o.jsx(Ao,{title:"Stonehenge",text:"Crushed by a dwarf",icon:"exclamation-thick",stripe:!0,shadow:3})]}),Ey=`import React from 'react'
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
`,S3=()=>o.jsx(R,{code:"Error",Component:Ty,Source:Ey,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"Error"})," component is a short-cut to generate an error alert."]})}),Ny=Object.freeze(Object.defineProperty({__proto__:null,default:S3},Symbol.toStringTag,{value:"Module"})),Oy=()=>o.jsxs("div",{children:[o.jsx(Ro,{text:"Info alert"}),o.jsx(Ro,{text:"Info alert with border",border:!0}),o.jsx(Ro,{headline:"Info Alert",text:"Info alert with headline",border:!0,shadow:!0}),o.jsx(Ro,{title:"Stonehenge",text:"Where the demons dwell",icon:"info",stripe:!0,shadow:3})]}),Ry=`import React from 'react'
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
`,b3=()=>o.jsx(R,{code:"Info",Component:Oy,Source:Ry,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"Info"})," component is a short-cut to generate an info alert."]})}),My=Object.freeze(Object.defineProperty({__proto__:null,default:b3},Symbol.toStringTag,{value:"Module"})),Py=()=>o.jsxs("div",{children:[o.jsx(Mo,{text:"Success alert"}),o.jsx(Mo,{text:"Success alert with border",border:!0}),o.jsx(Mo,{headline:"Success Alert",text:"Success alert with headline",border:!0,shadow:!0}),o.jsx(Mo,{title:"Stonehenge",text:"Where the banshees live...",icon:"check-thicker-shrink=4",stripe:!0,shadow:3})]}),Ay=`import React from 'react'
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
`,_3=()=>o.jsx(R,{code:"Success",Component:Py,Source:Ay,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"Success"})," component is a short-cut to generate a success alert."]})}),$y=Object.freeze(Object.defineProperty({__proto__:null,default:_3},Symbol.toStringTag,{value:"Module"})),By=()=>o.jsxs("div",{children:[o.jsx(Po,{text:"Warning alert"}),o.jsx(Po,{text:"Warning alert with border",border:!0}),o.jsx(Po,{headline:"Warning Alert",text:"Warning alert with headline",border:!0,shadow:!0}),o.jsx(Po,{title:"Stonehenge",text:"...and they do live well",icon:"exclamation-thick",stripe:!0,shadow:3})]}),Dy=`import React from 'react'
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
`,w3=()=>o.jsx(R,{code:"Warning",Component:By,Source:Dy,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"Warning"})," component is a short-cut to generate a warning alert."]})}),Iy=Object.freeze(Object.defineProperty({__proto__:null,default:w3},Symbol.toStringTag,{value:"Module"})),zy=()=>o.jsxs("div",{children:[o.jsx(V,{text:"Border Alert",border:!0}),o.jsx(V,{text:"Border Width 2",border:2})]}),Fy=`import React from 'react'
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
`,k3=()=>o.jsx(R,{code:"border",Component:zy,Source:Fy,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"border"})," property can be used to add a border.  This can be a number to indicate the border width."]})}),Uy=Object.freeze(Object.defineProperty({__proto__:null,default:k3},Symbol.toStringTag,{value:"Module"})),Wy=()=>o.jsx(V,{text:"Hello World!",className:"border shadow-2"}),Vy=`import React from 'react'
import { Alert } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Alert
    text="Hello World!"
    className="border shadow-2"
  />
/* END */

export default Component
`,L3=()=>o.jsx(R,{code:"className",Component:Wy,Source:Vy,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"className"})," property can be used to set a CSS class."]})}),Hy=Object.freeze(Object.defineProperty({__proto__:null,default:L3},Symbol.toStringTag,{value:"Module"})),Zy=()=>o.jsxs("div",{children:[o.jsx(V,{text:"Red Alert",color:"red"}),o.jsx(V,{text:"Brown Alert",color:"brown"}),o.jsx(V,{text:"Orange Alert",color:"orange"}),o.jsx(V,{text:"Yellow Alert",color:"yellow"}),o.jsx(V,{text:"Green Alert",color:"green"}),o.jsx(V,{text:"Teal Alert",color:"teal"}),o.jsx(V,{text:"Blue Alert",color:"blue"}),o.jsx(V,{text:"Indigo Alert",color:"indigo"}),o.jsx(V,{text:"Violet Alert",color:"violet"}),o.jsx(V,{text:"Purple Alert",color:"purple"}),o.jsx(V,{text:"Pink Alert",color:"pink"}),o.jsx(V,{text:"Maroon Alert",color:"maroon"})]}),Gy=`import React from 'react'
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
`,T3=()=>o.jsx(R,{code:"color",Component:Zy,Source:Gy,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"color"})," property can be used to set the color range used for the alert."]})}),Ky=Object.freeze(Object.defineProperty({__proto__:null,default:T3},Symbol.toStringTag,{value:"Module"})),Yy=()=>o.jsx(V,{headline:"Dismissable Alert",text:"A dismissable alert",dismissable:!0}),Qy=`import React from 'react'
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
`,E3=()=>o.jsx(R,{code:"dismissable",Component:Yy,Source:Qy,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"dismissable"})," property can be used to make an alert dismissable."]})}),Xy=Object.freeze(Object.defineProperty({__proto__:null,default:E3},Symbol.toStringTag,{value:"Module"})),qy=()=>o.jsx(V,{headline:"Headline Icon Alert",headIcon:"bars",text:"An alert with a headline icon"}),Jy=`import React from 'react'
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
`,N3=()=>o.jsx(R,{code:"headicon",Component:qy,Source:Jy,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"headIcon"})," property can be used to add an icon to the headline."]})}),eC=Object.freeze(Object.defineProperty({__proto__:null,default:N3},Symbol.toStringTag,{value:"Module"})),tC=()=>o.jsx(V,{headline:"Headline Alert",text:"An alert with a headline"}),nC=`import React from 'react'
import { Alert } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Alert
    headline="Headline Alert"
    text="An alert with a headline"
  />
/* END */

export default Component
`,O3=()=>o.jsx(R,{code:"headline",Component:tC,Source:nC,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"headline"})," property can be used to set a headline."]})}),rC=Object.freeze(Object.defineProperty({__proto__:null,default:O3},Symbol.toStringTag,{value:"Module"})),oC=()=>o.jsxs("div",{children:[o.jsx(V,{icon:"info",type:"info",title:"Eleven",text:"It's one louder"}),o.jsx(V,{icon:"check",type:"success",title:"Eleven",text:"It's one louder"}),o.jsx(V,{icon:"exclamation",type:"error",title:"Eleven",text:"It's one louder"})]}),lC=`import React from 'react'
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
`,R3=()=>o.jsx(R,{code:"icon",Component:oC,Source:lC,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"icon"})," property can be used to add an icon to the body."]})}),aC=Object.freeze(Object.defineProperty({__proto__:null,default:R3},Symbol.toStringTag,{value:"Module"})),sC=()=>o.jsx(V,{headline:"Dismissable Alert",text:"A dismissable alert",onDismiss:()=>window.alert("Bye!"),dismissable:!0}),iC=`import React from 'react'
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
`,M3=()=>o.jsx(R,{code:"onDismiss",Component:sC,Source:iC,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"onDismiss"})," property can be used to register a function which will be called when the alert is dismissed."]})}),cC=Object.freeze(Object.defineProperty({__proto__:null,default:M3},Symbol.toStringTag,{value:"Module"})),uC=()=>o.jsx(V,{text:"Radius Alert",radius:4}),dC=`import React from 'react'
import { Alert } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Alert
    text="Radius Alert"
    radius={4}
  />
/* END */

export default Component
`,P3=()=>o.jsx(R,{code:"radius",Component:uC,Source:dC,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"radius"})," property can be used to set the border radius."]})}),pC=Object.freeze(Object.defineProperty({__proto__:null,default:P3},Symbol.toStringTag,{value:"Module"})),fC=()=>o.jsx(V,{headline:"Revealable Alert",text:"A revealable alert",revealable:!0}),hC=`import React from 'react'
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
`,A3=()=>o.jsx(R,{code:"revealable",Component:fC,Source:hC,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"revealable"})," property can be used to make the alert revealable."]})}),mC=Object.freeze(Object.defineProperty({__proto__:null,default:A3},Symbol.toStringTag,{value:"Module"})),gC=()=>o.jsx(V,{headline:"Revealed Alert",text:"A revealed alert",revealable:!0,revealed:!0}),xC=`import React from 'react'
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
`,$3=()=>o.jsx(R,{code:"revealed",Component:gC,Source:xC,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"revealed"})," property can be set to make it a revealable alert initially revealed."]})}),vC=Object.freeze(Object.defineProperty({__proto__:null,default:$3},Symbol.toStringTag,{value:"Module"})),yC=()=>o.jsxs("div",{children:[o.jsx(V,{text:"Alert With Default Shadow (1)",shadow:!0}),o.jsx(V,{text:"Alert With Shadow 2",shadow:2}),o.jsx(V,{text:"Alert With Shadow 3",shadow:3}),o.jsx(V,{text:"Alert With Shadow 4",shadow:4}),o.jsx(V,{text:"Alert With Shadow 5",shadow:5})]}),CC=`import React from 'react'
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
`,B3=()=>o.jsx(R,{code:"shadow",Component:yC,Source:CC,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"shadow"})," property can be used to add a shadow.  The default value is 1 or you can set it to any number from"," ","1 to 5."]})}),jC=Object.freeze(Object.defineProperty({__proto__:null,default:B3},Symbol.toStringTag,{value:"Module"})),SC=()=>o.jsxs("div",{children:[o.jsx(V,{text:"Smallest Alert",size:"smallest"}),o.jsx(V,{text:"Smaller Alert",size:"smaller"}),o.jsx(V,{text:"Small Alert",size:"small"}),o.jsx(V,{text:"Medium Alert",size:"medium"}),o.jsx(V,{text:"Large Alert",size:"large"}),o.jsx(V,{text:"Larger Alert",size:"larger"}),o.jsx(V,{text:"Largest Alert",size:"largest"})]}),bC=`import React from 'react'
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
`,D3=()=>o.jsx(R,{code:"size",Component:SC,Source:bC,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"size"})," property can be used to set the text size."]})}),_C=Object.freeze(Object.defineProperty({__proto__:null,default:D3},Symbol.toStringTag,{value:"Module"})),wC=()=>o.jsxs("div",{children:[o.jsx(V,{text:"Stripe Alert",stripe:!0,shadow:4}),o.jsx(V,{text:"Info Stripe Alert",type:"info",stripe:!0,shadow:4}),o.jsx(V,{text:"Success Stripe Alert",type:"success",stripe:!0,shadow:4}),o.jsx(V,{text:"Warning Stripe Alert",type:"warning",stripe:!0,shadow:4}),o.jsx(V,{text:"Error Stripe Alert",type:"error",stripe:!0,shadow:4})]}),kC=`import React from 'react'
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
`,I3=()=>o.jsx(R,{code:"stripe",Component:wC,Source:kC,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"stripe"})," property can be set as a short-cut to add the"," ",o.jsx("code",{children:"stripe"})," CSS class for a more minimal look."]})}),LC=Object.freeze(Object.defineProperty({__proto__:null,default:I3},Symbol.toStringTag,{value:"Module"})),TC=()=>o.jsx(V,{text:"Hello World!"}),EC=`import React from 'react'
import { Alert } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Alert text="Hello World!"/>
/* END */

export default Component`,z3=()=>o.jsx(R,{code:"text",Component:TC,Source:EC,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"text"})," property can be used to set the body text."]})}),NC=Object.freeze(Object.defineProperty({__proto__:null,default:z3},Symbol.toStringTag,{value:"Module"})),OC=()=>o.jsx(V,{title:"Hello World!",children:"This is an alert"}),RC=`import React from 'react'
import { Alert } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Alert title="Hello World!">
    This is an alert
  </Alert>
/* END */

export default Component`,F3=()=>o.jsx(R,{code:"title",Component:OC,Source:RC,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"title"})," property can be used to set a title."]})}),MC=Object.freeze(Object.defineProperty({__proto__:null,default:F3},Symbol.toStringTag,{value:"Module"})),PC=()=>o.jsxs("div",{children:[o.jsx(V,{text:"Info Alert",type:"info"}),o.jsx(V,{text:"Success Alert",type:"success"}),o.jsx(V,{text:"Warning Alert",type:"warning"}),o.jsx(V,{text:"Error Alert",type:"error"})]}),AC=`import React from 'react'
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
`,U3=()=>o.jsx(R,{code:"type",Component:PC,Source:AC,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"type"})," property can be used to set it to one of the pre-defined types: ",o.jsx("code",{children:"info"}),", ",o.jsx("code",{children:"success"}),","," ",o.jsx("code",{children:"warning"})," or ",o.jsx("code",{children:"error"}),"."]})}),$C=Object.freeze(Object.defineProperty({__proto__:null,default:U3},Symbol.toStringTag,{value:"Module"})),Lt=({tocName:e,children:t})=>o.jsx(Du.Provider,{tocName:e,children:t}),BC=({id:e,title:t,addPageTocHeading:n})=>{const r=j3(e||t),l=w.useRef();return w.useEffect(()=>{n&&n(r,t,l)},[e,t]),o.jsx("h2",{id:r,ref:l,className:"section-heading",children:t})},ie=Du.Consumer(BC),DC=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Alert"}),o.jsx(C3,{}),o.jsxs(Lt,{tocName:"alert",children:[o.jsx(ie,{title:"Properties"}),o.jsx(F3,{}),o.jsx(z3,{}),o.jsx(O3,{}),o.jsx(N3,{}),o.jsx(A3,{}),o.jsx($3,{}),o.jsx(E3,{}),o.jsx(M3,{}),o.jsx(L3,{}),o.jsx(k3,{}),o.jsx(P3,{}),o.jsx(B3,{}),o.jsx(D3,{}),o.jsx(T3,{}),o.jsx(U3,{}),o.jsx(I3,{}),o.jsx(R3,{}),o.jsx(ie,{title:"Components"}),o.jsx(b3,{}),o.jsx(_3,{}),o.jsx(w3,{}),o.jsx(S3,{})]})]}),IC=Object.freeze(Object.defineProperty({__proto__:null,default:DC},Symbol.toStringTag,{value:"Module"})),zC=()=>o.jsx(M,{children:"This is a button"}),FC=`import React from 'react'
import { Button } from '@/src/index.jsx'

{/* START */}
// PRETEND: import { Button } from '@abw/badger-react-ui'

const ButtonExample = () =>
  <Button>
    This is a button
  </Button>

export default ButtonExample
`,W3=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"Button"})," component can be used to render a button. Any child elements will be included as content."]}),o.jsxs("p",{className:"cols-2 stack-desktop",children:["There are numerous properties listed below that are typically used as shortcuts to set particular CSS styles.  Any other properties not listed here are forwarded to the ",o.jsx("code",{children:"button"})," component."]}),o.jsx(Xe,{Component:zC,code:FC,expand:!0})]}),UC=Object.freeze(Object.defineProperty({__proto__:null,default:W3},Symbol.toStringTag,{value:"Module"})),WC=()=>o.jsx(M,{text:"Custom Button Content",Content:({text:e})=>o.jsxs("span",{className:"pad-4",children:["😀 ",e]})}),VC=`import React from 'react'
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
`,V3=()=>o.jsxs(R,{code:"Content",Component:WC,Source:VC,undent:2,expand:!0,children:[o.jsxs("p",{children:["The ",o.jsx("code",{children:"Content"})," property (note the capital C) can be used to provide an alternate component to render the button content. By default it uses ",o.jsx("code",{children:"WithIcons"})," to render the button text with optional icons."]}),o.jsxs("p",{children:["If you want to change the way that button content is generated on a global level then you can use the theming engine to define a different ",o.jsx("code",{children:"Content"})," component for all buttons."]})]}),HC=Object.freeze(Object.defineProperty({__proto__:null,default:V3},Symbol.toStringTag,{value:"Module"})),ZC=()=>o.jsxs("div",{className:"flex wrap gap-4",children:[o.jsx(M,{text:"Red Bare",color:"red",bare:!0}),o.jsx(M,{text:"Green Bare",color:"green",bare:!0}),o.jsx(M,{text:"Blue Bare",color:"blue",bare:!0})]}),GC=`import React from 'react'
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
`,H3=()=>o.jsx(R,{code:"bare",Component:ZC,Source:GC,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"bare"})," property can be added for bare naked buttons."]})}),KC=Object.freeze(Object.defineProperty({__proto__:null,default:H3},Symbol.toStringTag,{value:"Module"})),YC=()=>o.jsxs("div",{className:"flex middle wrap gap-4",children:[o.jsx(M,{text:"Border 2",color:"red",outline:!0,border:2}),o.jsx(M,{text:"Border 3",color:"brown",outline:!0,border:3}),o.jsx(M,{text:"Border 4",color:"orange",outline:!0,border:4}),o.jsx(M,{text:"Border 5",color:"yellow",outline:!0,border:5})]}),QC=`import React from 'react'
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
`,Z3=()=>o.jsx(R,{code:"border",Component:YC,Source:QC,undent:2,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"border"})," property can be used to set the border width. This is only really noticeable on outline buttons.  There is a border around solid buttons (mainly to help in matching the height of other form inputs), although it's the same color as the background."]})}),XC=Object.freeze(Object.defineProperty({__proto__:null,default:Z3},Symbol.toStringTag,{value:"Module"})),qC=()=>o.jsxs("div",{className:"flex wrap gap-4",children:[o.jsx(M,{text:"Yellow Button",color:"yellow"}),o.jsx(M,{text:"Bright Yellow Button",color:"yellow",bright:!0})]}),JC=`import React from 'react'
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
`,G3=()=>o.jsx(R,{code:"bright",Component:qC,Source:JC,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"bright"})," property can be added to make the buttons brighter than normal."]})}),ej=Object.freeze(Object.defineProperty({__proto__:null,default:G3},Symbol.toStringTag,{value:"Module"})),tj=()=>o.jsx(M,{text:"Custom Button",className:"red bdw-2 bdr-4 bgc-80 fgc-20 bgd-20 fgd-80"}),nj=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    text="Custom Button"
    className="red bdw-2 bdr-4 bgc-80 fgc-20 bgd-20 fgd-80"
  />
/* END */

export default Component
`,K3=()=>o.jsx(R,{code:"className",Component:tj,Source:nj,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"className"})," property can be added to add a CSS class to the button."]})}),rj=Object.freeze(Object.defineProperty({__proto__:null,default:K3},Symbol.toStringTag,{value:"Module"})),oj=()=>o.jsxs("div",{className:"grid-2 gap-4 stack-tablet",children:[o.jsx(M,{text:"Red Button",color:"red"}),o.jsx(M,{text:"Brown Button",color:"brown"}),o.jsx(M,{text:"Orange Button",color:"orange"}),o.jsx(M,{text:"Yellow Button",color:"yellow"}),o.jsx(M,{text:"Green Button",color:"green"}),o.jsx(M,{text:"Teal Button",color:"teal"}),o.jsx(M,{text:"Blue Button",color:"blue"}),o.jsx(M,{text:"Indigo Button",color:"indigo"}),o.jsx(M,{text:"Violet Button",color:"violet"}),o.jsx(M,{text:"Purple Button",color:"purple"}),o.jsx(M,{text:"Pink Button",color:"pink"}),o.jsx(M,{text:"Maroon Button",color:"maroon"})]}),lj=`import React from 'react'
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
`,Y3=()=>o.jsx(R,{code:"color",Component:oj,Source:lj,undent:2,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"color"})," property can be used to set the color range used for the button."]})}),aj=Object.freeze(Object.defineProperty({__proto__:null,default:Y3},Symbol.toStringTag,{value:"Module"})),sj=()=>o.jsxs("div",{className:"flex wrap gap-4",children:[o.jsx(M,{text:"Red Button",color:"red"}),o.jsx(M,{text:"Dark Red Button",color:"red",dark:!0})]}),ij=`import React from 'react'
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
`,Q3=()=>o.jsx(R,{code:"dark",Component:sj,Source:ij,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"dark"})," property can be added to make the buttons darker than normal."]})}),cj=Object.freeze(Object.defineProperty({__proto__:null,default:Q3},Symbol.toStringTag,{value:"Module"})),uj=()=>o.jsx(M,{text:"Disabled Button",disabled:!0}),dj=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    text="Disabled Button"
    disabled
  />
/* END */

export default Component
`,X3=()=>o.jsx(R,{code:"disabled",Component:uj,Source:dj,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"disabled"})," property can be set to disable a button."]})}),pj=Object.freeze(Object.defineProperty({__proto__:null,default:X3},Symbol.toStringTag,{value:"Module"})),fj=()=>o.jsx(M,{color:"green",icon:"bars"}),hj=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    color="green"
    icon="bars"
  />
/* END */

export default Component
`,q3=()=>o.jsx(R,{code:"icon",Component:fj,Source:hj,undent:2,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"icon"})," property can be used to add an icon to a button."]})}),mj=Object.freeze(Object.defineProperty({__proto__:null,default:q3},Symbol.toStringTag,{value:"Module"})),gj=()=>o.jsx(M,{color:"green",text:"Back",iconLeft:"angle-left"}),xj=`import React from 'react'
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
`,J3=()=>o.jsx(R,{code:"iconLeft",Component:gj,Source:xj,undent:2,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"iconLeft"})," property can be used to add an icon to the left side of a button."]})}),vj=Object.freeze(Object.defineProperty({__proto__:null,default:J3},Symbol.toStringTag,{value:"Module"})),yj=()=>o.jsx(M,{color:"green",text:"Next",iconRight:"angle-right"}),Cj=`import React from 'react'
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
`,eh=()=>o.jsx(R,{code:"iconRight",Component:yj,Source:Cj,undent:2,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"iconRight"})," property can be used to add an icon to the right side of a button."]})}),jj=Object.freeze(Object.defineProperty({__proto__:null,default:eh},Symbol.toStringTag,{value:"Module"})),Sj=()=>o.jsx(M,{text:"I am labelled!",label:"This is a label"}),bj=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    text="I am labelled!"
    label="This is a label"
  />
/* END */

export default Component
`,th=()=>o.jsx(R,{code:"label",Component:Sj,Source:bj,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"label"})," property can be used to set the",o.jsx("code",{children:"aria-label"})," property on the button.  This typically doesn't have any visual effect on the button, but is used by screen readers to provide more detail about the functionality of the button."]})}),_j=Object.freeze(Object.defineProperty({__proto__:null,default:th},Symbol.toStringTag,{value:"Module"})),wj=()=>o.jsx(M,{text:"Click Me!",onClick:()=>window.alert("Click!")}),kj=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    text="Click Me!"
    onClick={() => window.alert('Click!')}
  />
/* END */

export default Component
`,nh=()=>o.jsx(R,{code:"onClick",Component:wj,Source:kj,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"onClick"})," property can be used to register a function which will be called when the button is clicked."]})}),Lj=Object.freeze(Object.defineProperty({__proto__:null,default:nh},Symbol.toStringTag,{value:"Module"})),Tj=()=>o.jsxs("div",{className:"flex wrap gap-4",children:[o.jsx(M,{text:"Red Outline",color:"red",outline:!0}),o.jsx(M,{text:"Green Outline",color:"green",outline:!0}),o.jsx(M,{text:"Blue Outline",color:"blue",outline:!0})]}),Ej=`import React from 'react'
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
`,rh=()=>o.jsx(R,{code:"outline",Component:Tj,Source:Ej,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"outline"})," property can be added for outline buttons."]})}),Nj=Object.freeze(Object.defineProperty({__proto__:null,default:rh},Symbol.toStringTag,{value:"Module"})),Oj=()=>o.jsxs("div",{className:"flex middle wrap gap-4",children:[o.jsx(M,{text:"Radius 0",color:"olive",radius:0}),o.jsx(M,{text:"Radius 2",color:"green",radius:2}),o.jsx(M,{text:"Radius 4",color:"teal",radius:3}),o.jsx(M,{text:"Radius 6",color:"blue",radius:4})]}),Rj=`import React from 'react'
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
`,oh=()=>o.jsx(R,{code:"radius",Component:Oj,Source:Rj,undent:2,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"radius"})," property can be used to set the border radius in multiples of the base unit: 0.25rem."]})}),Mj=Object.freeze(Object.defineProperty({__proto__:null,default:oh},Symbol.toStringTag,{value:"Module"})),Pj=()=>o.jsxs("div",{className:"flex wrap gap-4",children:[o.jsx(M,{text:"Red Shaded",color:"red",shaded:!0}),o.jsx(M,{text:"Green Shaded",color:"green",shaded:!0}),o.jsx(M,{text:"Blue Shaded",color:"blue",shaded:!0})]}),Aj=`import React from 'react'
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
`,lh=()=>o.jsx(R,{code:"shaded",Component:Pj,Source:Aj,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"shaded"})," property can be added for shaded buttons."]})}),$j=Object.freeze(Object.defineProperty({__proto__:null,default:lh},Symbol.toStringTag,{value:"Module"})),Bj=()=>o.jsxs("div",{className:"flex middle wrap gap-4",children:[o.jsx(M,{text:"Shadow 1",color:"indigo",outline:!0,shadow:!0}),o.jsx(M,{text:"Shadow 2",color:"violet",outline:!0,shadow:2}),o.jsx(M,{text:"Shadow 3",color:"purple",outline:!0,shadow:3}),o.jsx(M,{text:"Shadow 4",color:"pink",outline:!0,shadow:4}),o.jsx(M,{text:"Shadow 5",color:"maroon",outline:!0,shadow:5})]}),Dj=`import React from 'react'
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
`,ah=()=>o.jsx(R,{code:"shadow",Component:Bj,Source:Dj,undent:2,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"shadow"})," property can be used to add a shadow to the button ranging from 1 to 5."]})}),Ij=Object.freeze(Object.defineProperty({__proto__:null,default:ah},Symbol.toStringTag,{value:"Module"})),zj=()=>o.jsxs("div",{className:"flex middle wrap gap-4",children:[o.jsx(M,{text:"Smallest",size:"smallest"}),o.jsx(M,{text:"Smaller",size:"smaller"}),o.jsx(M,{text:"Small",size:"small"}),o.jsx(M,{text:"Medium",size:"medium"}),o.jsx(M,{text:"Large",size:"large"}),o.jsx(M,{text:"Larger",size:"larger"}),o.jsx(M,{text:"Largest",size:"largest"}),o.jsx(M,{text:"x3",size:"x3"}),o.jsx(M,{text:"x5",size:"x5"}),o.jsx(M,{text:"x7",size:"x7"})]}),Fj=`import React from 'react'
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
`,sh=()=>o.jsx(R,{code:"size",Component:zj,Source:Fj,undent:2,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"size"})," property can be used to set the button size. This can be one of: ",o.jsx("code",{children:"smallest"}),", ",o.jsx("code",{children:"smaller"}),", ",o.jsx("code",{children:"small"})," ",",",o.jsx("code",{children:"medium"})," (default - same as no explicit size), ",o.jsx("code",{children:"large"})," ",",",o.jsx("code",{children:"larger"}),", ",o.jsx("code",{children:"largest"}),"; or any of the size multipliers:"," ",o.jsx("code",{children:"x2"}),", ",o.jsx("code",{children:"x3"}),", etc., up to ",o.jsx("code",{children:"x10"}),"."]})}),Uj=Object.freeze(Object.defineProperty({__proto__:null,default:sh},Symbol.toStringTag,{value:"Module"})),Wj=()=>o.jsx(M,{text:"Grey Button"}),Vj=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button text="Grey Button"/>
/* END */

export default Component
`,ih=()=>o.jsx(R,{code:"text",Component:Wj,Source:Vj,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"text"})," property can be used to set the text for the button."]})}),Hj=Object.freeze(Object.defineProperty({__proto__:null,default:ih},Symbol.toStringTag,{value:"Module"})),Zj=()=>o.jsx(M,{text:"Tooltip",label:"This is a tooltip",tooltip:"top left"}),Gj=`import React from 'react'
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
`,ch=()=>o.jsx(R,{code:"tooltip",Component:Zj,Source:Gj,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"tooltip"})," property can be used to set the",o.jsx("code",{children:"data-tooltip"})," property on the button.  This can be used to indicate the direction of the tooltip, e.g. ",o.jsx("code",{children:"top"}),","," ",o.jsx("code",{children:"right"}),", ",o.jsx("code",{children:"top right"}),", etc. The tooltip content should be defined using the ",o.jsx("code",{children:"label"})," property."]})}),Kj=Object.freeze(Object.defineProperty({__proto__:null,default:ch},Symbol.toStringTag,{value:"Module"})),Yj=()=>o.jsx(M,{text:"Grey Button",type:"submit"}),Qj=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    text="Grey Button"
    type="submit"
  />
/* END */

export default Component
`,uh=()=>o.jsxs(R,{code:"type",Component:Yj,Source:Qj,undent:2,expand:!0,children:[o.jsxs("p",{children:["The default ",o.jsx("code",{children:"type"})," for a button is set to ",o.jsx("code",{children:"button"}),". In most cases this has no effect.  However, inside the scope of a ",o.jsx("code",{children:"form"})," element, the ",o.jsx("code",{children:"type"})," for a button would usually default to being ",o.jsx("code",{children:"submit"}),".  When clicked, the button would submit the form."]}),o.jsxs("p",{children:["This behaviour usually surprises people (it certainly catches me out from time to time).  Having an explicit default button type prevents this from happening.  When you really do want to add a button to submit a form, you should explicitly set the ",o.jsx("code",{children:"type"})," to"," ",o.jsx("code",{children:"submit"}),".  You can also set it to ",o.jsx("code",{children:"reset"})," to make a reset button for a form."]})]}),Xj=Object.freeze(Object.defineProperty({__proto__:null,default:uh},Symbol.toStringTag,{value:"Module"})),qj=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Button"}),o.jsx(W3,{}),o.jsxs(Lt,{tocName:"button",children:[o.jsx(ie,{title:"Properties"}),o.jsx(ih,{}),o.jsx(nh,{}),o.jsx(X3,{}),o.jsx(Y3,{}),o.jsx(G3,{}),o.jsx(Q3,{}),o.jsx(lh,{}),o.jsx(rh,{}),o.jsx(H3,{}),o.jsx(K3,{}),o.jsx(Z3,{}),o.jsx(oh,{}),o.jsx(ah,{}),o.jsx(sh,{}),o.jsx(q3,{}),o.jsx(J3,{}),o.jsx(eh,{}),o.jsx(th,{}),o.jsx(ch,{}),o.jsx(uh,{}),o.jsx(ie,{title:"Components"}),o.jsx(V3,{})]})]}),Jj=Object.freeze(Object.defineProperty({__proto__:null,default:qj},Symbol.toStringTag,{value:"Module"})),eS=({text:e})=>o.jsx("span",{className:"border pad pad-h-4 mar",children:e}),tS=()=>o.jsx(yr,{buttons:[{text:"One"},{text:"Two"}],Button:eS}),nS=`import { Buttons } from '@/src/index.jsx'

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
`,dh=()=>o.jsx(R,{code:"Button",Component:tS,Source:nS,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"Button"})," property (note the capital B) can be used to define a different component for rendering each button."]})}),rS=Object.freeze(Object.defineProperty({__proto__:null,default:dh},Symbol.toStringTag,{value:"Module"})),oS=()=>o.jsxs(yr,{children:[o.jsx(M,{text:"One",outline:!0}),o.jsx(M,{text:"Two",outline:!0})]}),lS=`import { Buttons, Button } from '@/src/index.jsx'

{/* START */}
import React from 'react'
// PRETEND: import { Buttons, Button } from '@abw/badger-react-ui'

const ButtonsExample = () =>
  <Buttons>
    <Button text="One" outline/>
    <Button text="Two" outline/>
  </Buttons>

export default ButtonsExample
`,ph=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"Buttons"})," component can be used to render a connected set of buttons."]}),o.jsx(Xe,{Component:oS,code:lS,expand:!0})]}),aS=Object.freeze(Object.defineProperty({__proto__:null,default:ph},Symbol.toStringTag,{value:"Module"})),sS=()=>o.jsx(o.Fragment,{children:o.jsx(yr,{outline:!0,buttonClass:"blue shadow-1",buttons:[{text:"One"},{text:"Two"}]})}),iS=`import React from 'react'
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
`,fh=()=>o.jsx(R,{code:"buttonClass",Component:sS,Source:iS,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"buttonClass"})," property can be used to add a CSS class to each button. Badger CSS targets the ",o.jsx("code",{children:"button"})," element for styling so you don't need to add any special classes to get the default styling."]})}),cS=Object.freeze(Object.defineProperty({__proto__:null,default:fh},Symbol.toStringTag,{value:"Module"})),uS=()=>o.jsx(o.Fragment,{children:o.jsx(yr,{buttons:[{text:"One",outline:!0},{text:"Two",outline:!0}]})}),dS=`import React from 'react'
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
`,hh=()=>o.jsx(R,{code:"buttons",Component:uS,Source:dS,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"buttons"})," property can be used to define properties for a set of buttons."]})}),pS=Object.freeze(Object.defineProperty({__proto__:null,default:hh},Symbol.toStringTag,{value:"Module"})),fS=()=>o.jsx(o.Fragment,{children:o.jsx(yr,{outline:!0,className:"buttons border pad-2 bgc-90 bgd-10 bdr-2",buttons:[{text:"One"},{text:"Two"}]})}),hS=`import React from 'react'
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
`,mh=()=>o.jsx(R,{code:"className",Component:fS,Source:hS,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"className"})," property can be used to set the CSS class for the buttons container element.  The default value is"," ",o.jsx("code",{children:"buttons"}),".  If you want to use the default styles provided by Badger CSS then you should include ",o.jsx("code",{children:"buttons"})," in the value you provide for ",o.jsx("code",{children:"className"})]})}),mS=Object.freeze(Object.defineProperty({__proto__:null,default:mh},Symbol.toStringTag,{value:"Module"})),gS=()=>o.jsx(o.Fragment,{children:o.jsx(yr,{outline:!0,buttons:[{text:"One"},{text:"Two"},{text:"Three",outline:!1,color:"orange"}]})}),xS=`import React from 'react'
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
`,gh=()=>o.jsx(R,{code:"outline",Component:gS,Source:xS,undent:4,expand:!0,children:o.jsxs("p",{children:["Additional properties passed to the ",o.jsx("code",{children:"Buttons"})," component will be forwarded to each ",o.jsx("code",{children:"Button"})," component.  For example, you can set the ",o.jsx("code",{children:"outline"})," property on the parent",o.jsx("code",{children:"Buttons"})," component so that you don't have to repeat it for each button.  However, individual buttons can override any of these properties."]})}),vS=Object.freeze(Object.defineProperty({__proto__:null,default:gh},Symbol.toStringTag,{value:"Module"})),yS=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Buttons"}),o.jsx(ph,{}),o.jsxs(Lt,{tocName:"buttons",children:[o.jsx(ie,{title:"Properties"}),o.jsx(hh,{}),o.jsx(gh,{}),o.jsx(mh,{}),o.jsx(fh,{}),o.jsx(ie,{title:"Components"}),o.jsx(dh,{})]})]}),CS=Object.freeze(Object.defineProperty({__proto__:null,default:yS},Symbol.toStringTag,{value:"Module"})),jS=()=>o.jsx(tv,{text:"I like badgers",onChange:e=>console.log(`Checked: ${e}`)}),SS=`import { CheckboxState } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { CheckboxState } from '@abw/badger-react-ui

const CheckboxStateExample = () =>
  <CheckboxState
    text="I like badgers"
    onChange={checked => console.log(\`Checked: \${checked}\`)}
  />

export default CheckboxStateExample`,xh=()=>o.jsx(R,{code:"CheckboxState",Component:jS,Source:SS,expand:!0,children:o.jsx("div",{children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"CheckboxState"})," function can be used to generate a Checkbox with internal state."]})})}),bS=Object.freeze(Object.defineProperty({__proto__:null,default:xh},Symbol.toStringTag,{value:"Module"})),_S=()=>{const[e,t]=w.useState(!1);return o.jsx(Cr,{text:"I like badgers",checked:e,onChange:t})},wS=`import { Checkbox } from '@/src/index.jsx'

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

export default CheckboxExample`,vh=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"Checkbox"})," component renders a checkbox with a label."]}),o.jsx(Xe,{Component:_S,code:wS,expand:!0})]}),kS=Object.freeze(Object.defineProperty({__proto__:null,default:vh},Symbol.toStringTag,{value:"Module"})),LS=()=>{const[e,t]=w.useState(!1);return o.jsx(Cr,{text:"I like badgers",checked:e,onChange:t})},TS=`import { Checkbox } from '@/src/index.jsx'
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

export default CheckedExample`,yh=()=>o.jsx(R,{code:"checked",Component:LS,Source:TS,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"checked"})," property should be passed to indicate if the checkbox is checked (",o.jsx("code",{children:"true"}),") or not (",o.jsx("code",{children:"false"}),")."]})}),ES=Object.freeze(Object.defineProperty({__proto__:null,default:yh},Symbol.toStringTag,{value:"Module"})),NS=()=>{const[e,t]=w.useState(!1);return o.jsx(Cr,{checkedText:"I like badgers (well done!)",uncheckedText:"I like badgers (you really should!)",checked:e,onChange:t})},OS=`import { Checkbox } from '@/src/index.jsx'
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

export default CheckedTextExample`,Ch=()=>o.jsx(R,{code:"checkedText / uncheckedText",Component:NS,Source:OS,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"checkedText"})," and ",o.jsx("code",{children:"uncheckedText"})," properties can be used to provide different text for the checked and unchecked states."]})}),RS=Object.freeze(Object.defineProperty({__proto__:null,default:Ch},Symbol.toStringTag,{value:"Module"})),MS=()=>{const[e,t]=w.useState(!1);return o.jsx(Cr,{text:"I like badgers",className:"large border",checked:e,onChange:t})},PS=`import { Checkbox } from '@/src/index.jsx'
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

export default ClassName`,jh=()=>o.jsx(R,{code:"className",Component:MS,Source:PS,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"className"})," property can be used to add a CSS class to the checkbox ",o.jsx("code",{children:"label"})," element."]})}),AS=Object.freeze(Object.defineProperty({__proto__:null,default:jh},Symbol.toStringTag,{value:"Module"})),$S=()=>{const[e,t]=w.useState(!1);return o.jsx(Cr,{text:"I like badgers",checked:e,onChange:t})},BS=`import { Checkbox } from '@/src/index.jsx'
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

export default OnChangeExample`,Sh=()=>o.jsx(R,{code:"onChange",Component:$S,Source:BS,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"onChange"})," property should be used to define a function to handle changes in the state."]})}),DS=Object.freeze(Object.defineProperty({__proto__:null,default:Sh},Symbol.toStringTag,{value:"Module"})),IS=()=>{const[e,t]=w.useState(!1);return o.jsx(Cr,{text:"Badger are the best!",checked:e,onChange:t})},zS=`import { Checkbox } from '@/src/index.jsx'
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

export default TextExample`,bh=()=>o.jsx(R,{code:"text",Component:IS,Source:zS,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"text"})," property should be used to set the text for the checkbox."]})}),FS=Object.freeze(Object.defineProperty({__proto__:null,default:bh},Symbol.toStringTag,{value:"Module"})),US=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Checkbox"}),o.jsx(vh,{}),o.jsxs(Lt,{tocName:"checkbox",children:[o.jsx(ie,{title:"Properties"}),o.jsx(bh,{}),o.jsx(yh,{}),o.jsx(Ch,{}),o.jsx(Sh,{}),o.jsx(jh,{}),o.jsx(ie,{title:"Components"}),o.jsx(xh,{})]})]}),WS=Object.freeze(Object.defineProperty({__proto__:null,default:US},Symbol.toStringTag,{value:"Module"})),VS=()=>o.jsx(o.Fragment,{children:o.jsx(Gt,{text:"Delete",color:"red",iconRight:"trash",onClick:()=>window.alert("Confirmed!")})}),HS=`import { Confirm } from '@/src/index.jsx'

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

export default ConfirmExample`,_h=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"Confirm"})," component provides an extra safety net for potentially dangerous operations.  When the user click on the button it then prompts them to confirm or cancel the action."]}),o.jsxs("p",{className:"cols-2 stack-desktop",children:["Additional properties not listed below are forwarded onto the initial button.  For example, you can set the ",o.jsx("code",{children:"text"}),","," ",o.jsx("code",{children:"color"}),", add icons, and so on, just like you would for any other button."]}),o.jsx(Xe,{Component:VS,code:HS,expand:!0})]}),ZS=Object.freeze(Object.defineProperty({__proto__:null,default:_h},Symbol.toStringTag,{value:"Module"})),GS=()=>o.jsx(Gt,{text:"Delete",color:"red",cancel:{text:"Go Back",color:"yellow",outline:!1,iconLeft:"angle-left"}}),KS=`import React from 'react'
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

export default CancelExample`,wh=()=>o.jsx(R,{code:"cancel",Component:GS,Source:KS,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"cancel"})," property can be used to set properties for the cancel button."]})}),YS=Object.freeze(Object.defineProperty({__proto__:null,default:wh},Symbol.toStringTag,{value:"Module"})),QS=()=>o.jsx(Gt,{text:"Delete",color:"red",cancelText:"Nah",cancelColor:"blue",cancelIcon:"angle-left"}),XS=`import React from 'react'
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

export default CancelExample`,kh=()=>o.jsx(R,{id:"cancelProps",code:"cancelXXX",Component:QS,Source:XS,undent:2,expand:!0,children:o.jsxs("p",{children:["You can also set individual properties for the cancel button",o.jsx("code",{children:"cancelIcon"}),","," ",o.jsx("code",{children:"cancelText"}),","," ",o.jsx("code",{children:"cancelColor"})," and"," ",o.jsx("code",{children:"cancelClass"}),"."]})}),qS=Object.freeze(Object.defineProperty({__proto__:null,default:kh},Symbol.toStringTag,{value:"Module"})),JS=()=>o.jsx(o.Fragment,{children:o.jsx(Gt,{className:"buttons border pad-2 bgc-90 bgd-10 bdr-2",icon:"trash",color:"red"})}),eb=`import React from 'react'
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
`,Lh=()=>o.jsx(R,{code:"className",Component:JS,Source:eb,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"className"})," property can be used to set the CSS class for the buttons container element.  The default value is"," ",o.jsx("code",{children:"buttons"}),".  If you want to use the default styles provided by Badger CSS then you should include ",o.jsx("code",{children:"buttons"})," in the value you provide for ",o.jsx("code",{children:"className"})]})}),tb=Object.freeze(Object.defineProperty({__proto__:null,default:Lh},Symbol.toStringTag,{value:"Module"})),nb=()=>o.jsx(Gt,{text:"Click to Delete",color:"red"}),rb=`import React from 'react'
import { Confirm } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Confirm
    text="Click to Delete"
    color="red"
  />
/* END */

export default Component
`,Th=()=>o.jsx(R,{code:"color",Component:nb,Source:rb,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"color"})," property can be used to set the color for the initial button."]})}),ob=Object.freeze(Object.defineProperty({__proto__:null,default:Th},Symbol.toStringTag,{value:"Module"})),lb=()=>o.jsx(Gt,{text:"Delete",color:"red",confirm:{text:"Yep, do it!",color:"green",iconRight:"angle-right"}}),ab=`import React from 'react'
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

export default ConfirmExample`,Eh=()=>o.jsx(R,{code:"confirm",Component:lb,Source:ab,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"confirm"})," property can be used to set properties for the confirmation button."]})}),sb=Object.freeze(Object.defineProperty({__proto__:null,default:Eh},Symbol.toStringTag,{value:"Module"})),ib=()=>o.jsx(Gt,{text:"Delete",color:"red",confirmText:"Yep",confirmColor:"green",confirmIcon:"trash"}),cb=`import React from 'react'
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

export default ConfirmProps`,Nh=()=>o.jsx(R,{id:"confirmProps",code:"confirmXXX",Component:ib,Source:cb,undent:2,expand:!0,children:o.jsxs("p",{children:["You can also set individual properties for the confirm button",o.jsx("code",{children:"confirmIcon"}),","," ",o.jsx("code",{children:"confirmText"}),","," ",o.jsx("code",{children:"confirmColor"})," and"," ",o.jsx("code",{children:"confirmClass"}),"."]})}),ub=Object.freeze(Object.defineProperty({__proto__:null,default:Nh},Symbol.toStringTag,{value:"Module"})),db=()=>o.jsx(Gt,{text:"Click to Delete",color:"red",iconRight:"trash"}),pb=`import React from 'react'
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
`,Oh=()=>o.jsx(R,{code:"iconRight",Component:db,Source:pb,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"iconRight"})," property can be used to add an icon to the right.  Or ",o.jsx("code",{children:"iconLeft"})," can be used to add an icon to the left. Or just an ",o.jsx("code",{children:"icon"})," if you want an icon without any text."]})}),fb=Object.freeze(Object.defineProperty({__proto__:null,default:Oh},Symbol.toStringTag,{value:"Module"})),hb=()=>o.jsx(Gt,{text:"Delete",color:"red",onClick:()=>window.alert("Deleted!")}),mb=`import React from 'react'
import { Confirm } from '@/src/index.jsx'

const OnClickExample = () =>
  /* START */
  <Confirm
    text="Delete"
    color="red"
    onClick={() => window.alert('Deleted!')}
  />
  /* END */

export default OnClickExample`,Rh=()=>o.jsx(R,{code:"onClick",Component:hb,Source:mb,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"onClick"})," property should be used to define the handler which will be called when the user confirms the action."]})}),gb=Object.freeze(Object.defineProperty({__proto__:null,default:Rh},Symbol.toStringTag,{value:"Module"})),xb=()=>o.jsx(Gt,{text:"Click to Delete"}),vb=`import React from 'react'
import { Confirm } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Confirm
    text="Click to Delete"
  />
/* END */

export default Component
`,Mh=()=>o.jsx(R,{code:"text",Component:xb,Source:vb,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"text"})," property can be used to set the text for the initial button."]})}),yb=Object.freeze(Object.defineProperty({__proto__:null,default:Mh},Symbol.toStringTag,{value:"Module"})),Cb=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Confirm"}),o.jsx(_h,{}),o.jsxs(Lt,{tocName:"confirm",children:[o.jsx(ie,{title:"Properties"}),o.jsx(Mh,{}),o.jsx(Th,{}),o.jsx(Oh,{}),o.jsx(Lh,{}),o.jsx(wh,{}),o.jsx(kh,{}),o.jsx(Eh,{}),o.jsx(Nh,{}),o.jsx(ie,{title:"Event Handlers"}),o.jsx(Rh,{})]})]}),jb=Object.freeze(Object.defineProperty({__proto__:null,default:Cb},Symbol.toStringTag,{value:"Module"})),Sb=()=>o.jsx(Ie,{summary:"Click to reveal",children:"This is the content that is revealed."}),bb=`import { Details } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Details } from '@abw/badger-react-ui

const DetailsExample = () =>
  <Details summary="Click to reveal">
    This is the content that is revealed.
  </Details>

export default DetailsExample`,Ph=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"Details"})," component displays a summary with revealable content using the native HTML ",o.jsx("code",{children:"details"})," element."]}),o.jsx(Xe,{Component:Sb,code:bb})]}),_b=Object.freeze(Object.defineProperty({__proto__:null,default:Ph},Symbol.toStringTag,{value:"Module"})),wb=()=>o.jsxs("div",{className:"grid-1 gap-4",children:[o.jsx(Ie,{summary:"Bordered",border:!0,children:"This is the content that is revealed."}),o.jsx(Ie,{summary:"Bordered and Lined",border:!0,lined:!0,children:"This is the content that is revealed."}),o.jsx(Ie,{summary:"Wide Border",border:3,lined:!0,children:"This is the content that is revealed."})]}),kb=`import React from 'react'
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

export default DetailsExample`,Ah=()=>o.jsx(R,{code:"border",Component:wb,Source:kb,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"border"})," property can be used to add a CSS class to add a border around the component.  By itself it will add a one pixel border.  You can also set it to an integer (in pixels) for a wider border.  The same border width will also be applied to the line separating the summary and content when the ",o.jsx("code",{children:"lined"})," ","property is used."]})}),Lb=Object.freeze(Object.defineProperty({__proto__:null,default:Ah},Symbol.toStringTag,{value:"Module"})),Tb=()=>o.jsxs("div",{className:"grid-1 gap-4",children:[o.jsx(Ie,{summary:"Blue Border",color:"blue",border:!0,lined:!0,children:"This is the content that is revealed."}),o.jsx(Ie,{summary:"Blue Shaded",color:"blue",shaded:!0,lined:!0,border:!0,children:"This is the content that is revealed."})]}),Eb=`import React from 'react'
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

export default DetailsExample`,$h=()=>o.jsx(R,{code:"color",Component:Tb,Source:Eb,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"color"})," property can be used to set the color range. It is most commonly used in conjunction with the ",o.jsx("code",{children:"border"}),","," ",o.jsx("code",{children:"lined"})," and ",o.jsx("code",{children:"shaded"})," properties."]})}),Nb=Object.freeze(Object.defineProperty({__proto__:null,default:$h},Symbol.toStringTag,{value:"Module"})),Ob=()=>o.jsx("div",{className:"grid-1 gap-4",children:o.jsx(Ie,{summary:"This is the summary",content:"This is the content that is revealed."})}),Rb=`import React from 'react'
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

export default DetailsExample`,Bh=()=>o.jsx(R,{code:"content",Component:Ob,Source:Rb,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"content"})," property can be used as a short-cut to set the body content for simple cases."]})}),Mb=Object.freeze(Object.defineProperty({__proto__:null,default:Bh},Symbol.toStringTag,{value:"Module"})),Pb=()=>o.jsx(Ie,{summary:"Lined Details",lined:!0,children:"This is the content that is revealed."}),Ab=`import React from 'react'
import { Details } from '@/src/index.jsx'

const DetailsExample = () =>
  /* START */
  <Details summary="Lined Details" lined>
    This is the content that is revealed.
  </Details>
  /* END */

export default DetailsExample`,Dh=()=>o.jsx(R,{code:"lined",Component:Pb,Source:Ab,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"lined"})," property can be used to add a CSS class to add a line between the summary and content."]})}),$b=Object.freeze(Object.defineProperty({__proto__:null,default:Dh},Symbol.toStringTag,{value:"Module"})),Bb=()=>o.jsx("div",{className:"grid-1 gap-4",children:o.jsx(Ie,{summary:"This is the summary",open:!0,children:"This is the content that is revealed."})}),Db=`import React from 'react'
import { Details } from '@/src/index.jsx'

const DetailsExample = () =>
  <div className="grid-1 gap-4">
    {/* START */}
    <Details summary="This is the summary" open>
      This is the content that is revealed.
    </Details>
    {/* END */}
  </div>

export default DetailsExample`,Ih=()=>o.jsx(R,{code:"open",Component:Bb,Source:Db,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"open"})," property can be set to make the details initially open."]})}),Ib=Object.freeze(Object.defineProperty({__proto__:null,default:Ih},Symbol.toStringTag,{value:"Module"})),zb=()=>o.jsxs("div",{className:"grid-1 gap-4",children:[o.jsx(Ie,{summary:"Border Radius",border:!0,lined:!0,radius:2,children:"This is the content that is revealed."}),o.jsx(Ie,{summary:"Border Radius",border:!0,lined:!0,radius:4,children:"This is the content that is revealed."})]}),Fb=`import React from 'react'
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

export default DetailsExample`,zh=()=>o.jsx(R,{code:"radius",Component:zb,Source:Fb,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"radius"})," property can be used to set the border radius. It should be an integer in units of 0.25rem."]})}),Ub=Object.freeze(Object.defineProperty({__proto__:null,default:zh},Symbol.toStringTag,{value:"Module"})),Wb=()=>o.jsxs("div",{className:"grid-1 gap-4",children:[o.jsx(Ie,{summary:"Shaded",shaded:!0,children:"This is the content that is revealed."}),o.jsx(Ie,{summary:"Shaded and Border",border:!0,shaded:!0,children:"This is the content that is revealed."}),o.jsx(Ie,{summary:"Shaded, Lined and Border",border:!0,shaded:!0,lined:!0,children:"This is the content that is revealed."})]}),Vb=`import React from 'react'
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

export default DetailsExample`,Fh=()=>o.jsx(R,{code:"shaded",Component:Wb,Source:Vb,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"shaded"})," property can be used to add shading."]})}),Hb=Object.freeze(Object.defineProperty({__proto__:null,default:Fh},Symbol.toStringTag,{value:"Module"})),Zb=()=>o.jsxs("div",{className:"grid-1 gap-4",children:[o.jsx(Ie,{summary:"Shadow 1",border:!0,shaded:!0,shadow:1,children:"This is the content that is revealed."}),o.jsx(Ie,{summary:"Shadow 3",border:!0,shaded:!0,shadow:3,children:"This is the content that is revealed."}),o.jsx(Ie,{summary:"Shadow 5",border:!0,shaded:!0,shadow:5,children:"This is the content that is revealed."})]}),Gb=`import React from 'react'
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

export default DetailsExample`,Uh=()=>o.jsx(R,{code:"shadow",Component:Zb,Source:Gb,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"shadow"})," property can be used to add a drop shadow. This can be any integer from 1 to 5."]})}),Kb=Object.freeze(Object.defineProperty({__proto__:null,default:Uh},Symbol.toStringTag,{value:"Module"})),Yb=()=>o.jsxs("div",{className:"grid-1 gap-4",children:[o.jsx(Ie,{summary:"This is the summary",children:"This is the content that is revealed."}),o.jsx(Ie,{border:!0,lined:!0,summary:o.jsxs("div",{className:"wide flex space middle pad-r-2",children:[o.jsx("div",{children:"Control Panel"}),o.jsx(Y,{name:"cog"})]}),children:"This is the content that is revealed."})]}),Qb=`import React from 'react'
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

export default DetailsExample`,Wh=()=>o.jsx(R,{code:"summary",Component:Yb,Source:Qb,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"summary"})," property is used to set the summary text. It can be a text string or any JSX content."]})}),Xb=Object.freeze(Object.defineProperty({__proto__:null,default:Wh},Symbol.toStringTag,{value:"Module"})),qb=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Details"}),o.jsx(Ph,{}),o.jsxs(Lt,{tocName:"details",children:[o.jsx(ie,{title:"Properties"}),o.jsx(Wh,{}),o.jsx(Bh,{}),o.jsx(Ih,{}),o.jsx(Dh,{}),o.jsx(Ah,{}),o.jsx(zh,{}),o.jsx(Fh,{}),o.jsx(Uh,{}),o.jsx($h,{}),o.jsx(ie,{title:"CSS Classes"}),o.jsxs(K,{code:"className",children:["Set a CSS class for the ",o.jsx("code",{children:"details"})," container element."]}),o.jsxs(K,{code:"summaryClass",children:["Set a CSS class for the ",o.jsx("code",{children:"summary"})," element."]}),o.jsxs(K,{code:"contentClass",children:["Set a CSS class for the content ",o.jsx("code",{children:"div"})," element."]}),o.jsx(ie,{title:"Components"}),o.jsx(K,{code:"Summary",id:"Summary-component",children:"Renders the summary element."}),o.jsx(K,{code:"Content",id:"Content=component",children:"Renders the content."})]})]}),Jb=Object.freeze(Object.defineProperty({__proto__:null,default:qb},Symbol.toStringTag,{value:"Module"})),e_=()=>o.jsx(Y,{name:"check"}),t_=`import React from 'react'
import { Icon } from '@/src/index.jsx'

{/* START */}
// PRETEND: import { Icon } from '@abw/badger-react-ui'

const IconExample = () =>
  <Icon name="check"/>

export default IconExample
`,n_=Dx(0,100,5),ta=({name:e,stop:t,setStop:n,disabled:r=!1})=>o.jsxs("select",{name:e,required:!0,value:t,onChange:l=>n(l.target.value),disabled:r,children:[o.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Select Stop"}),o.jsx("option",{value:"",children:"None"}),n_.map(l=>o.jsx("option",{value:l,children:l},l))]}),r_=()=>{const[e,t]=w.useState(0),[n,r]=w.useState({name:"bars"}),l=c=>()=>{r(u=>({...u,[c]:!u[c]})),t(u=>u+1)},a=c=>u=>{r(p=>({...p,[c]:u})),t(p=>p+1)},i=`<Icon
  ${l_(n)}
/>`;return o.jsxs("div",{className:"example grid-2 gap-8 stack-desktop",children:[o.jsxs("div",{children:[o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Output"}),o.jsx("div",{className:"output mar-b-8",children:o.jsx(a_,{options:n},e)})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Markup"}),o.jsx(kn,{code:i,language:"html",expand:!0})]})]}),o.jsx(o_,{options:n,setOption:a,toggleOption:l})]})},o_=({options:e,setOption:t})=>{const n=t("name"),r=t("size"),l=t("color"),a=t("foreground"),s=t("background"),i=t("foregroundDark"),c=t("backgroundDark");return o.jsxs("div",{children:[o.jsxs("div",{className:"grid-3 gap-4 stack-mobile top",children:[o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Icon Name"}),o.jsx(lc,{icon:e.name,setIcon:n})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Size"}),o.jsx(y3,{size:e.size,setSize:r})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Color"}),o.jsx(v3,{color:e.color,setColor:l,disabled:e.type})]})]}),o.jsxs("div",{className:"grid-2 gap-4 gap-v-0 stack-mobile top",children:[o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Foreground Stop"}),o.jsx(ta,{stop:e.foreground,setStop:a})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Background Stop"}),o.jsx(ta,{stop:e.background,setStop:s})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Foreground Dark"}),o.jsx(ta,{stop:e.foregroundDark,setStop:i})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Background Dark"}),o.jsx(ta,{stop:e.backgroundDark,setStop:c})]})]})]})},Vh=e=>{const t=["name","size"].filter(r=>e[r]).reduce((r,l)=>(r[l]=e[l],r),{}),n=["color","foreground","background","foregroundDark","backgroundDark"].map(r=>e[r]||"").join("-");return n.length>4&&(t.color=n.replace(/-*$/,"")),t},l_=e=>{const t=Vh(e);return Object.entries(t).map(([n,r])=>`${n}="${r}"`).join(`
  `)},a_=({options:e})=>o.jsx(Y,{...Vh(e)}),Hh=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"Icon"})," component can be used to render SVG icons. The functionality is imported from"," ",o.jsx("a",{href:"https://abw.github.io/badger-icon/",children:"Badger Icon"})," with some extra bells and whistles."]}),o.jsx(Xe,{Component:e_,code:t_,expand:!0}),o.jsx("h2",{children:"Demo"}),o.jsx(r_,{})]}),s_=Object.freeze(Object.defineProperty({__proto__:null,default:Hh},Symbol.toStringTag,{value:"Module"})),Zh=()=>o.jsxs(K,{code:"IconLibrary",children:[o.jsxs("p",{children:["The default set of icons is defined as ",o.jsx("code",{children:"IconLibrary"}),". The ",o.jsx("code",{children:"addIcon()"})," and ",o.jsx("code",{children:"addIcons()"})," function are provided for adding icons to the library."]}),o.jsx("div",{className:"grid-fill gap-4 mar-t-8",children:Object.keys(Cl.icons).map(e=>o.jsxs("div",{className:"text-center bgc-100 bgd-0 fgc-10 fgd-90 pad-4 shadow-2",children:[o.jsx(Y,{name:e,className:"x3"}),o.jsx("div",{className:"small mar-t-4",children:e})]},e))})]}),i_=Object.freeze(Object.defineProperty({__proto__:null,default:Zh},Symbol.toStringTag,{value:"Module"})),c_=()=>o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"flex gap-2 middle",children:[o.jsx(Y,{name:"check",className:"smallest"}),o.jsx(Y,{name:"check",className:"smaller"}),o.jsx(Y,{name:"check",className:"small"}),o.jsx(Y,{name:"check"}),o.jsx(Y,{name:"check",className:"large"}),o.jsx(Y,{name:"check",className:"larger"}),o.jsx(Y,{name:"check",className:"largest"})]}),o.jsxs("div",{className:"flex gap-2 mar-t-4",children:[o.jsx(Y,{name:"check",className:"larger green fgc-50"}),o.jsx(Y,{name:"cross",className:"larger red fgc-50"})]})]}),u_=`import React from 'react'
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

export default Component`,Gh=()=>o.jsx(R,{code:"className",Component:c_,Source:u_,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"className"})," property can be used to set a CSS class."]})}),d_=Object.freeze(Object.defineProperty({__proto__:null,default:Gh},Symbol.toStringTag,{value:"Module"})),p_=()=>o.jsxs("div",{className:"flex gap-2 x2",children:[o.jsx(Y,{name:"check",color:"green-50"}),o.jsx(Y,{name:"check",color:"green-70-30"}),o.jsx(Y,{name:"check",color:"green-70--30"}),o.jsx(Y,{name:"check",color:"green-70-30-30-70"})]}),f_=`import React from 'react'
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

export default Component`,Kh=()=>o.jsxs(R,{code:"color",Component:p_,Source:f_,undent:2,expand:!0,children:[o.jsxs("p",{children:["The ",o.jsx("code",{children:"color"})," property is a short-cut to set the color.  This adds the color to the CSS class."]}),o.jsxs("p",{children:["The ",o.jsx("code",{children:"color"})," can be be comprised of up to 5 elements separated by hyphens.  The first is the color range, e.g. ",o.jsx("code",{children:"red"}),","," ",o.jsx("code",{children:"green"}),", ",o.jsx("code",{children:"blue"}),", etc.  The second is the stop number for the foreground.  This is an integer from 0 (darkest) to 100 (lightest) in steps of 5.  The third is the stop number for the background.  The remaining two numbers are stops for the foreground and background colors in dark mode."]})]}),h_=Object.freeze(Object.defineProperty({__proto__:null,default:Kh},Symbol.toStringTag,{value:"Module"})),m_=()=>o.jsxs("div",{className:"flex gap-2 x2",children:[o.jsx(Y,{name:"bars"}),o.jsx(Y,{name:"check"}),o.jsx(Y,{name:"cross"}),o.jsx(Y,{name:"arrow"}),o.jsx(Y,{name:"arrow-right"}),o.jsx(Y,{name:"arrow-down-thicker.red.fgc-50"})]}),g_=`import React from 'react'
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

export default Component`,Yh=()=>o.jsxs(R,{code:"name",Component:m_,Source:g_,undent:2,expand:!0,children:[o.jsxs("p",{children:["The ",o.jsx("code",{children:"name"})," property can be used to select an icon from the default icon library."]}),o.jsx("p",{children:"Additional modifiers and classes can be added to the name to apply styles and transformations.  See the Badger Icon documentation for further details."})]}),x_=Object.freeze(Object.defineProperty({__proto__:null,default:Yh},Symbol.toStringTag,{value:"Module"})),v_=()=>o.jsxs("div",{className:"flex gap-2",children:[o.jsx(Y,{className:"x3",path:"M448,96L448,416C448,434 434,448 416,448L96,448C78,448 64,434 64,416L64,96C64,78 78,64 96,64L416,64C434,64 448,78 448,96ZM384,128L128,128L128,384L384,384L384,128Z"}),o.jsx(Y,{className:"x3",path:"M21,5L21,20C21,20 20,21 20,21L5,21C4,21 3,20 3,20L3,5C3,4 4,3 5,3L20,3C20,3 21,4 21,5ZM18,6L6,6L6,18L18,18L18,6Z",width:24,height:24})]}),y_=`import React from 'react'
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

export default Component`,Qh=()=>o.jsx(R,{code:"path",Component:v_,Source:y_,undent:2,expand:!0,children:o.jsxs("p",{children:["You can specify the data for a path.  The default viewbox is assumed to be 512px wide and 512px high.  You can set the ",o.jsx("code",{children:"width"})," and"," ",o.jsx("code",{children:"height"})," properties to change that."]})}),C_=Object.freeze(Object.defineProperty({__proto__:null,default:Qh},Symbol.toStringTag,{value:"Module"})),j_=()=>o.jsxs("div",{className:"flex gap-2",children:[o.jsx(Y,{name:"check",size:"smallest"}),o.jsx(Y,{name:"check",size:"smaller"}),o.jsx(Y,{name:"check",size:"small"}),o.jsx(Y,{name:"check",size:"medium"}),o.jsx(Y,{name:"check",size:"large"}),o.jsx(Y,{name:"check",size:"larger"}),o.jsx(Y,{name:"check",size:"largest"})]}),S_=`import React from 'react'
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

export default Component`,Xh=()=>o.jsx(R,{code:"size",Component:j_,Source:S_,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"size"})," property is a short-cut to set the size.  This adds the size to the CSS class."]})}),b_=Object.freeze(Object.defineProperty({__proto__:null,default:Xh},Symbol.toStringTag,{value:"Module"})),__=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Icon"}),o.jsx(Hh,{}),o.jsxs(Lt,{tocName:"icon",children:[o.jsx(ie,{title:"Properties"}),o.jsx(Yh,{}),o.jsx(Gh,{}),o.jsx(Xh,{}),o.jsx(Kh,{}),o.jsx(Qh,{}),o.jsx(ie,{title:"Components"}),o.jsx(Zh,{})]})]}),w_=Object.freeze(Object.defineProperty({__proto__:null,default:__},Symbol.toStringTag,{value:"Module"})),k_=()=>{const[e,t]=w.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsxs(Kt,{open:e,className:"max-width-30rem",children:[o.jsx("header",{children:o.jsx("h3",{children:"A Modal!"})}),o.jsxs("p",{children:["This is a modal.  The content is rendered as an ",o.jsx("code",{children:"article"}),".  You can include"," ",o.jsx("code",{children:"header"})," and ",o.jsx("code",{children:"footer"})," ","sections if you want, although they're entirely optional."]}),o.jsx("footer",{children:o.jsx(M,{color:"red",text:"Close Modal",onClick:()=>t(!1)})})]}),o.jsx(M,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},L_=`import { Modal, Button } from '@/src/index.jsx'

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

export default ModalExample`,qh=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"Modal"})," component can be used to create an overlaid modal dialog."]}),o.jsxs("p",{className:"cols-2 stack-desktop",children:["The ",o.jsx("code",{children:"open"})," property should be used to indicate if the modal is open or not. Any child elements will be rendered inside the modal body."]}),o.jsx(Xe,{Component:k_,code:L_,expand:!0})]}),T_=Object.freeze(Object.defineProperty({__proto__:null,default:qh},Symbol.toStringTag,{value:"Module"})),E_=()=>{const{show:e,hide:t,Modal:n}=mv();return o.jsxs(o.Fragment,{children:[o.jsxs(n,{children:[o.jsx("p",{children:"Modal State"}),o.jsx(M,{color:"red",text:"Close Modal",onClick:t})]}),o.jsx(M,{color:"green",text:"Open Modal",onClick:e})]})},N_=`import { ModalState, Button } from '@/src/index.jsx'
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

export default ModalStateExample`,Jh=()=>o.jsx(R,{code:"ModalState",Component:E_,Source:N_,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"ModalState"})," function can be used to generate a Modal with state.  It returns the ",o.jsx("code",{children:"isVisible"})," property,"," ",o.jsx("code",{children:"show"})," and ",o.jsx("code",{children:"hide"})," functions to change the visibility, and a ",o.jsx("code",{children:"Modal"})," component."]})}),O_=Object.freeze(Object.defineProperty({__proto__:null,default:Jh},Symbol.toStringTag,{value:"Module"})),R_=()=>{const[e,t]=w.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsxs(Kt,{open:e,className:"large max-width-25rem pad-8",children:[o.jsx("p",{children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object."}),o.jsx(M,{color:"red",text:"Close Modal",onClick:()=>t(!1)})]}),o.jsx(M,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},M_=`import { Modal, Button } from '@/src/index.jsx'
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

export default ModalExample`,em=()=>o.jsx(R,{code:"className",Component:R_,Source:M_,undent:6,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"className"})," property can be used to add a CSS class to the Modal ",o.jsx("code",{children:"dialog"})," element."]})}),P_=Object.freeze(Object.defineProperty({__proto__:null,default:em},Symbol.toStringTag,{value:"Module"})),A_=()=>{const[e,t]=w.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(Kt,{open:e,close:()=>t(!1),children:o.jsx("p",{children:"This is a modal with a close button."})}),o.jsx(M,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},$_=`import React, { useState } from 'react'
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

export default ModalExample`,tm=()=>o.jsx(R,{code:"close",Component:A_,Source:$_,undent:6,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"close"})," property can be used to automatically add a close icon to the top right corner.  It should be a function which will close the modal when the icon is clicked."]})}),B_=Object.freeze(Object.defineProperty({__proto__:null,default:tm},Symbol.toStringTag,{value:"Module"})),D_=()=>{const[e,t]=w.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(Kt,{open:e,close:()=>t(!1),closeIcon:"thumb",children:o.jsx("p",{children:"This is a modal with a custom close icon."})}),o.jsx(M,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},I_=`import React, { useState } from 'react'
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

export default ModalExample`,nm=()=>o.jsx(R,{code:"closeIcon",Component:D_,Source:I_,undent:6,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"closeIcon"})," property can be used to change the icon displayed to close the modal."]})}),z_=Object.freeze(Object.defineProperty({__proto__:null,default:nm},Symbol.toStringTag,{value:"Module"})),F_=()=>{const[e,t]=w.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(Kt,{open:e,close:()=>t(!1),title:"Hello World!",text:"This is a modal with a custom footer",footer:o.jsx("div",{className:"text-right",children:o.jsx(M,{color:"red",text:"Close",size:"small",iconRight:"cross",onClick:()=>t(!1)})})}),o.jsx(M,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},U_=`import { Modal, Button } from '@/src/index.jsx'
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

export default ModalExample`,rm=()=>o.jsx(R,{code:"footer",Component:F_,Source:U_,undent:6,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"footer"})," property can be used to define some custom footer content."]})}),W_=Object.freeze(Object.defineProperty({__proto__:null,default:rm},Symbol.toStringTag,{value:"Module"})),V_=()=>{const[e,t]=w.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(Kt,{open:e,close:()=>t(!1),text:"This is a modal with a custom header",header:o.jsxs(o.Fragment,{children:[o.jsx("h3",{children:"Custom Header"}),o.jsx("p",{children:"Hello World!"})]})}),o.jsx(M,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},H_=`import { Modal, Button } from '@/src/index.jsx'
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

export default ModalExample`,om=()=>o.jsx(R,{code:"header",Component:V_,Source:H_,undent:6,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"header"})," property can be used to define some custom header content."]})}),Z_=Object.freeze(Object.defineProperty({__proto__:null,default:om},Symbol.toStringTag,{value:"Module"})),G_=()=>{const[e,t]=w.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(Kt,{open:e,close:()=>t(!1),text:"This is a modal"}),o.jsx(M,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},K_=`import { Modal, Button } from '@/src/index.jsx'

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

export default ModalExample`,lm=()=>o.jsx(R,{code:"text",Component:G_,Source:K_,undent:6,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"text"})," property can be used to define the body text."]})}),Y_=Object.freeze(Object.defineProperty({__proto__:null,default:lm},Symbol.toStringTag,{value:"Module"})),Q_=()=>{const[e,t]=w.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(Kt,{open:e,close:()=>t(!1),text:"This is a modal with a title",title:"My Modal"}),o.jsx(M,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},X_=`import { Modal, Button } from '@/src/index.jsx'
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

export default ModalExample`,am=()=>o.jsx(R,{code:"title",Component:Q_,Source:X_,undent:6,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"title"})," property can be used to add a title."]})}),q_=Object.freeze(Object.defineProperty({__proto__:null,default:am},Symbol.toStringTag,{value:"Module"})),J_=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Modal"}),o.jsx(qh,{}),o.jsxs(Lt,{tocName:"modal",children:[o.jsx(ie,{title:"Properties"}),o.jsx(em,{}),o.jsx(tm,{}),o.jsx(nm,{}),o.jsx(lm,{}),o.jsx(am,{}),o.jsx(om,{}),o.jsx(rm,{}),o.jsx(ie,{title:"Components"}),o.jsx(Jh,{})]})]}),ew=Object.freeze(Object.defineProperty({__proto__:null,default:J_},Symbol.toStringTag,{value:"Module"})),tw=()=>{const{isVisible:e,show:t,hide:n}=Zn();return o.jsxs("div",{className:"relative pad-6 border",children:[e&&o.jsx(oo,{className:"flex middle center pad-8",children:o.jsxs("div",{children:[o.jsx("p",{className:"larger",children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been... that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object."}),o.jsx(M,{onClick:n,className:"red",text:"Hide Overlay"})]})}),o.jsx("p",{className:"mar-t-none",children:"May I make a suggestion? May I make a suggestion? I've got one other suggestion."}),o.jsx("p",{children:"Well let's hear yours. Let's hear your suggestion."}),o.jsx("p",{children:"Stonehenge! It's the best production value we've ever had on stage."}),o.jsx("p",{children:"But we haven't got the equipment. We haven't got the equipment, we haven't got Stonehenge, we haven't..."}),o.jsx("p",{children:"Not yet we don't. Let's start... Musically, musically we all know it. Musically we all know it. Right? No problems musically. We go right on stage. And it's quite simple. This is you know... Ian can take care of this..."}),o.jsx("p",{children:"I know what the Stonehenge monument looks like. We don't have that piece of scenery anymore."}),o.jsx("p",{children:"I know, so we build a new one. And this is it, look!"}),o.jsx(M,{onClick:t,color:"green",text:"Show Overlay"})]})},nw=`import { Overlay, VisibleState, Button } from '@/src/index.jsx'

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

export default OverlayExample`,sm=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"Overlay"})," component can be used to create an overlay. The default positioning is absolute so it will fill to cover the nearest parent that has positioning set to relative."]}),o.jsx(Xe,{Component:tw,code:nw})]}),rw=Object.freeze(Object.defineProperty({__proto__:null,default:sm},Symbol.toStringTag,{value:"Module"})),ow=()=>{const{show:e,hide:t,Overlay:n}=xv();return o.jsxs(o.Fragment,{children:[o.jsx(n,{fixed:!0,className:"flex center middle",children:o.jsxs("div",{children:[o.jsx("h1",{className:"mar-b-4",children:"Overlay State"}),o.jsx(M,{color:"red",text:"Hide Overlay",onClick:t})]})}),o.jsx(M,{color:"green",text:"Show Overlay",onClick:e})]})},lw=`import { OverlayState, Button } from '@/src/index.jsx'
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

export default OverlayStateExample`,im=()=>o.jsx(R,{code:"OverlayState",Component:ow,Source:lw,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"OverlayState"})," function can be used to generate an Overlay with state.  It returns the ",o.jsx("code",{children:"isVisible"})," property,"," ",o.jsx("code",{children:"show"})," and ",o.jsx("code",{children:"hide"})," functions to change the visibility, and an ",o.jsx("code",{children:"Overlay"})," component."]})}),aw=Object.freeze(Object.defineProperty({__proto__:null,default:im},Symbol.toStringTag,{value:"Module"})),sw=()=>{const[e,t]=w.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsxs(Kt,{open:e,className:"large max-width-25rem pad-8",children:[o.jsx("p",{children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object."}),o.jsx(M,{color:"red",text:"Close Modal",onClick:()=>t(!1)})]}),o.jsx(M,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},iw=`import { Modal, Button } from '@/src/index.jsx'
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

export default ModalExample`,cw=()=>o.jsx(R,{code:"className",Component:sw,Source:iw,undent:6,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"className"})," property can be used to add a CSS class to the Modal ",o.jsx("code",{children:"dialog"})," element."]})}),uw=Object.freeze(Object.defineProperty({__proto__:null,default:cw},Symbol.toStringTag,{value:"Module"})),dw=()=>{const{isVisible:e,show:t,hide:n}=Zn();return o.jsxs("div",{className:"relative pad-6 border",children:[o.jsx(M,{onClick:t,color:"green",text:"Show Red Overlay"}),e&&o.jsxs(oo,{className:"flex space top pad-6",style:{"--color":"var(--red-70)","--background-color":"var(--red-20)","--background-opacity":"10%"},children:[o.jsx("p",{className:"larger",children:"Custom red overlay"}),o.jsx(M,{onClick:n,className:"red",text:"Hide Overlay"})]})]})},pw=`import React from 'react'
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

export default ColorExample`,cm=()=>o.jsx(R,{title:"Custom Colors",Component:dw,Source:pw,undent:8,children:o.jsxs("p",{children:["You can set the ",o.jsx("code",{children:"--color"})," and ",o.jsx("code",{children:"--background-color"})," ","CSS properties to define your own colors for the overlay.  The"," ",o.jsx("code",{children:"--background-opacity"})," can be set to change the background opacity."]})}),fw=Object.freeze(Object.defineProperty({__proto__:null,default:cm},Symbol.toStringTag,{value:"Module"})),hw=()=>{const{isVisible:e,show:t,hide:n}=Zn();return o.jsxs("div",{className:"relative pad-6 border",children:[o.jsx(M,{onClick:t,color:"green",text:"Show Overlay"}),e&&o.jsx(oo,{fixed:!0,className:"flex center middle",children:o.jsxs("div",{className:"max-width-40rem",children:[o.jsx("p",{className:"larger",children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been... that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object."}),o.jsx(M,{onClick:n,className:"red",text:"Hide Overlay"})]})})]})},mw=`import React from 'react'
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

export default OverlayExample`,um=()=>o.jsx(R,{code:"fixed",Component:hw,Source:mw,undent:8,children:o.jsxs("p",{children:["Add the ",o.jsx("code",{children:"fixed"})," to set the overlay position to fixed so that it covers the entire viewport."]})}),gw=Object.freeze(Object.defineProperty({__proto__:null,default:um},Symbol.toStringTag,{value:"Module"})),xw=()=>{const{isVisible:e,show:t,hide:n}=Zn();return o.jsxs("div",{className:"relative pad-6 border",children:[o.jsx(M,{onClick:t,color:"green",text:"Show Light Overlay"}),e&&o.jsxs(oo,{light:!0,className:"flex space top pad-6",children:[o.jsx("p",{className:"larger",children:"Light overlay"}),o.jsx(M,{onClick:n,className:"red",text:"Hide Overlay"})]})]})},vw=`import React from 'react'
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

export default ColorExample`,yw=()=>{const{isVisible:e,show:t,hide:n}=Zn();return o.jsxs("div",{className:"relative pad-6 border",children:[o.jsx(M,{onClick:t,color:"green",text:"Show Dark Overlay"}),e&&o.jsxs(oo,{dark:!0,className:"flex space top pad-6",children:[o.jsx("p",{className:"larger",children:"Dark overlay"}),o.jsx(M,{onClick:n,className:"red",text:"Hide Overlay"})]})]})},Cw=`import React from 'react'
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

export default ColorExample`,dm=()=>o.jsxs(K,{code:"light / dark",children:[o.jsxs("p",{className:"cols-2 stack-desktop",children:["The default overlay color is white in light mode and black in dark mode.  You can add the ",o.jsx("code",{children:"light"})," or ",o.jsx("code",{children:"dark"})," ","property to explicitly set it to one or the other."]}),o.jsx(Xe,{Component:xw,code:vw,caption:"light",undent:8}),o.jsx(Xe,{Component:yw,code:Cw,caption:"dark",undent:8})]}),jw=Object.freeze(Object.defineProperty({__proto__:null,default:dm},Symbol.toStringTag,{value:"Module"})),Sw=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Overlay"}),o.jsx(sm,{}),o.jsxs(Lt,{tocName:"overlay",children:[o.jsx(ie,{title:"Properties"}),o.jsx(um,{}),o.jsx(dm,{}),o.jsx(ie,{title:"Styling"}),o.jsx(cm,{}),o.jsx(ie,{title:"Components"}),o.jsx(im,{})]})]}),bw=Object.freeze(Object.defineProperty({__proto__:null,default:Sw},Symbol.toStringTag,{value:"Module"})),_w=({page:e,className:t,onClick:n})=>{const{pageRanges:r}=wv(),l=r[e];return o.jsx(M,{text:l,className:t,onClick:n})},ww=()=>{const e=["A-C","D-F","G-I","J-M","N-P","Q-T","U-W","X-Z"],t=e.length,[n,r]=w.useState(0);return o.jsx(Bt,{pages:t,page:n,setPage:r,pageRanges:e,Page:_w,size:"small"})},kw=`import { Pager, usePager, Button } from '@/src/index.jsx'

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

export default PagerExample`,Lw=({items:e})=>o.jsx("table",{className:"wide shaded striped celled",children:o.jsx("tbody",{children:e.map(([t,n])=>o.jsx(Tw,{name:t,value:n},t))})}),Tw=({name:e,value:t})=>o.jsxs("tr",{children:[o.jsx("td",{className:"font-mono",children:e}),o.jsx("td",{children:t})]}),pm=()=>o.jsxs(o.Fragment,{children:[o.jsx("h2",{children:"Context"}),o.jsxs("div",{className:"cols-2 stack-desktop",children:[o.jsx("p",{children:"A react context is created which provides the items listed below. Any other properties passed in to the component will also be accessible to child components."}),o.jsxs("p",{children:["Values are provided for the 0-based indexes of the first, last, previous, next and current pages. For example, the lowest value for ",o.jsx("code",{children:"page"})," is"," ",o.jsx("code",{children:"0"})," and the highest value is ",o.jsx("code",{children:"pages - 1"}),"."]}),o.jsxs("p",{children:['Their counterparts are also provided in "human readable" 1-based form with a ',o.jsx("code",{children:"No"})," suffix.  For example, the values for ",o.jsx("code",{children:"pageNo"})," range from ",o.jsx("code",{children:"1"})," to ",o.jsx("code",{children:"pages"}),", and will always be one more than ",o.jsx("code",{children:"page"}),"."]})]}),o.jsx(Lw,{items:[["pages","The total number of pages, as passed into the component as a property."],["page","The index (0 based) of the current page, as passed into the component as a property."],["setPage","The function for setting a page index, as passed into the component as a property."],["pageNo",o.jsxs(o.Fragment,{children:["The current page number (1 based), effectively one louder than ",o.jsx("code",{children:"page"}),".  e.g. if ",o.jsx("code",{children:"page"})," is ten then this goes up to eleven."]})],["firstPage","The index (0 based) of the first page.  This is always 0 but is included for completeness."],["firstPageNo","The number (1 based) of the first page.  This is always 1 but is included for completeness."],["lastPage","The index (0 based) of the last page."],["lastPageNo","The number (1 based) of the first page."],["prevPage","The index (0 based) of the previous page."],["prevPageNo","The number (1 based) of the previous page."],["nextPage","The index (0 based) of the next page."],["nextPageNo","The number (1 based) of the next page."]]}),o.jsx("h2",{children:"Custom Component"}),o.jsxs("div",{className:"cols-2 stack-desktop",children:[o.jsxs("p",{children:["You can provide your own components to render certain elements of the pager widget. These will be passed relevant parameters as properties and can use the ",o.jsx("code",{children:"usePager()"})," hook to access the full pager context, including any additional properties that you pass to the ",o.jsx("code",{children:"Pager"})," component."]}),o.jsxs("p",{children:["In this example we define a custom ",o.jsx("code",{children:"MyPageButton"})," component to replace the ",o.jsx("code",{children:"Page"})," component that renders the numbered page buttons.  Instead of displaying page numbers it shows alphabetical ranges for each button, defined in a custom ",o.jsx("code",{children:"pageRanges"})," "," ","property."]})]}),o.jsx(Xe,{Component:ww,code:kw})]}),Ew=Object.freeze(Object.defineProperty({__proto__:null,default:pm},Symbol.toStringTag,{value:"Module"})),Nw=()=>{const[e,t]=w.useState(0);return o.jsx(Bt,{pages:11,page:e,setPage:t})},Ow=`import { Pager } from '@/src/index.jsx'

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

export default PagerExample`,fm=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"Pager"})," component generates buttons for navigating through several pages."]}),o.jsx("div",{className:"cols-2 stack-desktop",children:o.jsxs("p",{children:["The three mandatory properties are ",o.jsx("code",{children:"pages"})," indicating the total number of pages, ",o.jsx("code",{children:"page"})," for the current page index (ranging from 0 to ",o.jsx("code",{children:"pages"})," - 1) and a"," ",o.jsx("code",{children:"setPage"})," handler to set the page index."]})}),o.jsx(Xe,{Component:Nw,code:Ow})]}),Rw=Object.freeze(Object.defineProperty({__proto__:null,default:fm},Symbol.toStringTag,{value:"Module"})),Mw=()=>{const[e,t]=w.useState(0);return o.jsx("div",{className:"grid-1 gap-4",children:o.jsx(Bt,{pages:11,page:e,setPage:t,className:"pager small brand border pad-2 bdr-2 bgc-90 bgd-10"})})},Pw=`import React, { useState } from 'react'
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
`,hm=()=>o.jsx(R,{code:"className",Component:Mw,Source:Pw,undent:4,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"className"})," property can be used to set a CSS class for the pager container.  The default value is ",o.jsx("code",{children:"pager"}),"."]})}),Aw=Object.freeze(Object.defineProperty({__proto__:null,default:hm},Symbol.toStringTag,{value:"Module"})),$w=()=>{const[e,t]=w.useState(0);return o.jsxs("div",{className:"grid-1 gap-4",children:[o.jsx(Bt,{pages:11,page:e,setPage:t,color:"red"}),o.jsx(Bt,{pages:11,page:e,setPage:t,color:"green"}),o.jsx(Bt,{pages:11,page:e,setPage:t,color:"blue"})]})},Bw=`import React, { useState } from 'react'
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
`,mm=()=>o.jsx(R,{code:"color",Component:$w,Source:Bw,undent:4,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"color"})," property can be used to set the color range used for the buttons.  This is a short-cut which adds the specified color to the CSS class for the pager container."]})}),Dw=Object.freeze(Object.defineProperty({__proto__:null,default:mm},Symbol.toStringTag,{value:"Module"})),Iw=()=>{const[e,t]=w.useState(0);return o.jsx(Bt,{pages:11,page:e,setPage:t,prevIcon:"angle-left",nextIcon:"angle-right"})},zw=`import React, { useState } from 'react'
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
`,gm=()=>o.jsx(R,{code:"prevIcon / nextIcon",Component:Iw,Source:zw,undent:4,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"prevIcon"})," and ",o.jsx("code",{children:"nextIcon"})," properties can be used to set the icons for the previous and next page button."]})}),Fw=Object.freeze(Object.defineProperty({__proto__:null,default:gm},Symbol.toStringTag,{value:"Module"})),Uw=()=>{const[e,t]=w.useState(0);return o.jsx(Bt,{pages:11,page:e,setPage:t,nextIcon:"angle-right"})},Ww=`import React, { useState } from 'react'
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
`,Vw=()=>o.jsx(R,{code:"nextIcon",Component:Uw,Source:Ww,undent:4,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"nextIcon"})," property can be used to set the icon for the next page button."]})}),Hw=Object.freeze(Object.defineProperty({__proto__:null,default:Vw},Symbol.toStringTag,{value:"Module"})),Zw=()=>{const[e,t]=w.useState(0);return o.jsx(Bt,{pages:11,page:e,setPage:t,showFirstLast:!1})},Gw=`import React, { useState } from 'react'
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
`,xm=()=>o.jsxs(R,{code:"showFirstLast",Component:Zw,Source:Gw,undent:4,children:[o.jsxs("p",{children:["The ",o.jsx("code",{children:"showFirstLast"})," property determines if the first and last pages are shown in the set of numbered page buttons. A button for the first page will be displayed when it is less than previous page.  The last page button will be displayed when it is greater than the next page."]}),o.jsxs("p",{children:["This value defaults to ",o.jsx("code",{children:"true"})," but can be set"," ",o.jsx("code",{children:"false"})," to hide these buttons."]})]}),Kw=Object.freeze(Object.defineProperty({__proto__:null,default:xm},Symbol.toStringTag,{value:"Module"})),Yw=()=>{const[e,t]=w.useState(0);return o.jsxs("div",{className:"grid-1 gap-4",children:[o.jsx(Bt,{pages:11,page:e,setPage:t,size:"smaller"}),o.jsx(Bt,{pages:11,page:e,setPage:t,size:"small"})]})},Qw=`import React, { useState } from 'react'
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
`,vm=()=>o.jsx(R,{code:"size",Component:Yw,Source:Qw,undent:4,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"size"})," property can be used to set the size to one of the standard sizes.  This is also a short-cut for adding the size as a CSS class so you can use it to add any of your own size classes."]})}),Xw=Object.freeze(Object.defineProperty({__proto__:null,default:vm},Symbol.toStringTag,{value:"Module"})),Ha=({children:e,align:t="top"})=>o.jsx("div",{className:`grid-2 gap-h-8 stack-desktop ${t}`,style:{"--prose-width":"100%"},children:e}),qw=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Pager"}),o.jsx(fm,{}),o.jsx(pm,{}),o.jsxs(Lt,{tocName:"pager",children:[o.jsx(ie,{title:"Properties"}),o.jsx(hm,{}),o.jsx(mm,{}),o.jsx(vm,{}),o.jsx(gm,{}),o.jsx(xm,{}),o.jsxs(Ha,{children:[o.jsxs("div",{className:"flow",children:[o.jsx(ie,{title:"CSS Classes"}),o.jsxs(K,{code:"className",children:["Used to set the CSS class for the pager container.  The default value is ",o.jsx("code",{children:"pager"}),"."]}),o.jsxs(K,{code:"buttonClass",children:["Used to set a default CSS class for all buttons.  The default value is ",o.jsx("code",{children:"outline"}),"."]}),o.jsxs(K,{code:"prevClass",children:["Used to set the CSS class for the previous page button.  It defaults to the value for ",o.jsx("code",{children:"buttonClass"}),"."]}),o.jsxs(K,{code:"nextClass",children:["Used to set the CSS class for the next page button.  It defaults to the value for ",o.jsx("code",{children:"buttonClass"}),"."]}),o.jsxs(K,{code:"pagesClass",children:["Used to set the CSS class for the numbered page buttons container. The default value is ",o.jsx("code",{children:"pages"}),"."]}),o.jsxs(K,{code:"pageClass",children:["Used to set the CSS class for individual numbered page buttons.  It defaults to the value for ",o.jsx("code",{children:"buttonClass"}),"."]}),o.jsxs(K,{code:"currentPageClass",children:["Used to set the CSS class for the currently selected numbered page button. The default value is ",o.jsx("code",{children:"solid"}),"."]})]}),o.jsxs("div",{className:"flow",children:[o.jsx(ie,{title:"Components"}),o.jsxs(K,{code:"Previous",id:"Previous-component",children:["Renders the previous page button.  Defaults to ",o.jsx("code",{children:"PagerPrevious"}),"."]}),o.jsxs(K,{code:"Next",id:"Next-component",children:["Renders the next page button.  Defaults to ",o.jsx("code",{children:"PagerNext"}),"."]}),o.jsxs(K,{code:"Pages",id:"Pages-component",children:["Renders the collection of numbered page buttons.  Defaults to ",o.jsx("code",{children:"PagerPages"}),"."]}),o.jsxs(K,{code:"Page",id:"Page-component",children:["Renders an individual page button.  Defaults to ",o.jsx("code",{children:"PagerPage"}),"."]}),o.jsxs(K,{code:"Separator",id:"Separator-component",children:["Renders the separator between the first and/or last pages and the rest of the numbered page buttons. Defaults to ",o.jsx("code",{children:"PagerSeparator"}),"."]})]})]})]})]}),Jw=Object.freeze(Object.defineProperty({__proto__:null,default:qw},Symbol.toStringTag,{value:"Module"})),ek=["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger"],tk=()=>{const e=t=>ek.filter(n=>n.toLowerCase().indexOf(t.toLowerCase())!==-1);return o.jsx(fs,{onSearch:e})},nk=`import { Search } from '@/src/index.jsx'

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

export default SearchExample`,ym=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"Search"}),' component implements the familiar "autocomplete" functionality.']}),o.jsx("p",{className:"cols-2 stack-desktop",children:"The user starts typing and after a short debounce delay a set of results matching their input is displayed. The user can then click on a result or use the keyboard to navigate through the results."}),o.jsx(Xe,{Component:tk,code:nk})]}),rk=Object.freeze(Object.defineProperty({__proto__:null,default:ym},Symbol.toStringTag,{value:"Module"})),ok=[{name:"Alan Aardvark",tel:"555-1245"},{name:"Amy Aardvark",tel:"555-2233"},{name:"Anne Aardvark",tel:"555-6565"},{name:"Bart Badger",tel:"555-4201"},{name:"Betty Badger",tel:"555-1111"},{name:"Bobby Badger",tel:"555-9876"},{name:"Brenda Badger",tel:"555-3443"},{name:"Brian Badger",tel:"555-1337"}],lk=()=>{const e=n=>o.jsxs("div",{className:"flex space baseline",children:[o.jsx("div",{children:n.name}),o.jsx("div",{className:"smaller",children:n.tel})]}),t=n=>ok.filter(r=>r.name.toLowerCase().indexOf(n.toLowerCase())!==-1);return o.jsx(fs,{onSearch:t,displayResult:e})},ak=`import { Search } from '@/src/index.jsx'

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

export default DisplayResultExample`,Cm=()=>o.jsx(R,{code:"displayResult",Component:lk,Source:ak,expand:!0,children:o.jsxs("p",{children:["If a result is a text string then it will be displayed as the result. If it's an object containing a ",o.jsx("code",{children:"text"}),","," ",o.jsx("code",{children:"label"})," or ",o.jsx("code",{children:"name"})," property then that will be used as the display value.  Otherwise you can provide a"," ",o.jsx("code",{children:"displayResult"})," function to display the result any way you like."]})}),sk=Object.freeze(Object.defineProperty({__proto__:null,default:Cm},Symbol.toStringTag,{value:"Module"})),ik=[{id:100,name:"Alan Aardvark",tel:"555-1245"},{id:101,name:"Amy Aardvark",tel:"555-2233"},{id:102,name:"Anne Aardvark",tel:"555-6565"},{id:110,name:"Bart Badger",tel:"555-4201"},{id:111,name:"Betty Badger",tel:"555-1111"},{id:112,name:"Bobby Badger",tel:"555-9876"},{id:113,name:"Brenda Badger",tel:"555-3443"},{id:114,name:"Brian Badger",tel:"555-1337"}],ck=()=>{const e=n=>`#${n.id}: ${n.name} (${n.tel})`,t=n=>ik.filter(r=>r.name.toLowerCase().indexOf(n.toLowerCase())!==-1);return o.jsx(fs,{onSearch:t,displayValue:e})},uk=`import { Search } from '@/src/index.jsx'

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

export default DisplayValueExample`,jm=()=>o.jsx(R,{code:"displayValue",Component:ck,Source:uk,expand:!0,children:o.jsxs("p",{children:["When a result is selected the same rules will be applied to display the result in the search input.  If it's not a string or an object containing one of the aforementioned properties then you should provide a ",o.jsx("code",{children:"displayValue"})," function to convert the result to a text string that can be displayed."]})}),dk=Object.freeze(Object.defineProperty({__proto__:null,default:jm},Symbol.toStringTag,{value:"Module"})),pk=["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Beatrice Badger","Belinda Badger","Ben Badger","Bert Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger","Brook Badger","Buzz Badger"],fk=()=>{const e=async t=>ds(500).then(()=>pk.filter(n=>n.toLowerCase().indexOf(t.toLowerCase())!==-1));return o.jsx(fs,{onSearch:e,debug:!0})},hk=`import { Search } from '@/src/index.jsx'
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

export default OnSearchExample`,Sm=()=>o.jsx(R,{code:"onSearch",Component:fk,Source:hk,children:o.jsxs("p",{children:["You should provide an ",o.jsx("code",{children:"onSearch"})," function which will be passed the search input and should return an array of results.  This can be an asynchronous function if necessary.  For example, a function which makes an API request to fetch the matching results."]})}),mk=Object.freeze(Object.defineProperty({__proto__:null,default:Sm},Symbol.toStringTag,{value:"Module"})),gk=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Search"}),o.jsx(ym,{}),o.jsxs(Lt,{tocName:"search",children:[o.jsx(ie,{title:"Properties"}),o.jsx(Sm,{}),o.jsx(Cm,{}),o.jsx(jm,{})]})]}),xk=Object.freeze(Object.defineProperty({__proto__:null,default:gk},Symbol.toStringTag,{value:"Module"})),vk=["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger"],yk=()=>o.jsx(hs,{options:vk}),Ck=`import { Select } from '@/src/index.jsx'

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

const SelectExample = () =>
  <Select options={animals}/>

export default SelectExample`,bm=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"Select"})," component implements a custom select input."]}),o.jsx(Xe,{Component:yk,code:Ck})]}),jk=Object.freeze(Object.defineProperty({__proto__:null,default:bm},Symbol.toStringTag,{value:"Module"})),Sk=[{name:"Alan Aardvark",tel:"555-1245"},{name:"Amy Aardvark",tel:"555-2233"},{name:"Anne Aardvark",tel:"555-6565"},{name:"Bart Badger",tel:"555-4201"},{name:"Betty Badger",tel:"555-1111"},{name:"Bobby Badger",tel:"555-9876"},{name:"Brenda Badger",tel:"555-3443"},{name:"Brian Badger",tel:"555-1337"}],bk=()=>{const e=t=>o.jsxs("div",{className:"flex space baseline",children:[o.jsx("div",{children:t.name}),o.jsx("div",{className:"smaller",children:t.tel})]});return o.jsx(hs,{options:Sk,displayOption:e})},_k=`import { Select } from '@/src/index.jsx'

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

export default DisplayOptionExample`,_m=()=>o.jsx(R,{code:"displayOption",Component:bk,Source:_k,expand:!0,children:o.jsxs("p",{children:["If an option is a text string then it will be displayed as it is. If it's an object containing a ",o.jsx("code",{children:"text"}),","," ",o.jsx("code",{children:"label"})," or ",o.jsx("code",{children:"name"})," property then that will be used as the display value.  Otherwise you can provide a"," ",o.jsx("code",{children:"displayOption"})," function to display the result any way you like."]})}),wk=Object.freeze(Object.defineProperty({__proto__:null,default:_m},Symbol.toStringTag,{value:"Module"})),kk=[{id:100,name:"Alan Aardvark",tel:"555-1245"},{id:101,name:"Amy Aardvark",tel:"555-2233"},{id:102,name:"Anne Aardvark",tel:"555-6565"},{id:110,name:"Bart Badger",tel:"555-4201"},{id:111,name:"Betty Badger",tel:"555-1111"},{id:112,name:"Bobby Badger",tel:"555-9876"},{id:113,name:"Brenda Badger",tel:"555-3443"},{id:114,name:"Brian Badger",tel:"555-1337"}],Lk=()=>{const e=t=>o.jsxs("div",{className:"flex baseline",children:[o.jsxs("span",{className:"smaller mar-r-2",children:["#",t.id]})," ",t.name," (",t.tel,")"]});return o.jsx(hs,{options:kk,displayValue:e})},Tk=`import { Select } from '@/src/index.jsx'

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

export default DisplayValueExample`,wm=()=>o.jsx(R,{code:"displayValue",Component:Lk,Source:Tk,expand:!0,children:o.jsxs("p",{children:["When an option is selected the same rules will be applied to display the option in the search input.  If it's not a string or an object containing one of the aforementioned properties then you should provide a ",o.jsx("code",{children:"displayValue"})," function to convert the result to a text string that can be displayed."]})}),Ek=Object.freeze(Object.defineProperty({__proto__:null,default:wm},Symbol.toStringTag,{value:"Module"})),Nk=[{id:101,name:"Alan Aardvark"},{id:102,name:"Amy Aardvark"},{id:103,name:"Anne Aardvark"},{id:104,name:"Bart Badger"},{id:105,name:"Betty Badger"},{id:106,name:"Bobby Badger"},{id:107,name:"Brenda Badger"},{id:108,name:"Brian Badger"}],Ok=()=>o.jsx(hs,{options:Nk}),Rk=`import { Select } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Select } from '@abw/badger-react-ui

const animals = [
  { id: 101, name: 'Alan Aardvark' },
  { id: 102, name: 'Amy Aardvark'  },
  { id: 103, name: 'Anne Aardvark' },
  { id: 104, name: 'Bart Badger'   },
  { id: 105, name: 'Betty Badger'  },
  { id: 106, name: 'Bobby Badger'  },
  { id: 107, name: 'Brenda Badger' },
  { id: 108, name: 'Brian Badger'  },
]

const OptionsExample = () =>
  <Select
    options={animals}
  />

export default OptionsExample`,km=()=>o.jsx(R,{code:"options",Component:Ok,Source:Rk,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"options"})," property should be used to provide an array of options that the user can select from.  Each element in the array can be a string or an object."]})}),Mk=Object.freeze(Object.defineProperty({__proto__:null,default:km},Symbol.toStringTag,{value:"Module"})),Pk=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Select"}),o.jsx(bm,{}),o.jsxs(Lt,{tocName:"select",children:[o.jsx(ie,{title:"Properties"}),o.jsx(km,{}),o.jsx(_m,{}),o.jsx(wm,{}),o.jsx(K,{code:"disabled",children:"Boolean flag to set the select input to be disabled."}),o.jsxs(K,{code:"placeholder",children:["Set the placeholder text.  The default is ",o.jsx("code",{children:"Search"}),"."]}),o.jsxs(K,{code:"noOptions",children:["Set the text displayed when there are no options to select from. The default is ",o.jsx("code",{children:"No options"}),"."]}),o.jsxs(Ha,{children:[o.jsxs("div",{children:[o.jsx(ie,{title:"Event Handlers"}),o.jsxs(K,{code:"onLoad",children:["Called when the component is first loaded.  The handler is passed a reference to the ",o.jsx("code",{children:"SearchContext"})," object."]}),o.jsxs(K,{code:"onUnload",children:["Called when the component is unloaded.  The handler is passed a reference to the ",o.jsx("code",{children:"SearchContext"})," object."]}),o.jsx(K,{code:"onFocus",children:"Called when the component gains focus."}),o.jsx(K,{code:"onBlur",children:"Called when the component loses focus."}),o.jsx(K,{code:"onClick",children:"Called when the component is clicked."}),o.jsx(K,{code:"onOpen",children:"Called when the component is opened and selectable options are displayed."}),o.jsx(K,{code:"onClose",children:"Called when the component is closed and selectable options are hidden."}),o.jsx(K,{code:"onSelect",children:"Called when an option is selected.  The selection option is passed as an argument."})]}),o.jsxs("div",{className:"flow",children:[o.jsx(ie,{title:"CSS Classes"}),o.jsxs(K,{code:"placeholderClass",children:["Set the class for the placeholder text. The default is ",o.jsx("code",{children:"placeholder"}),"."]}),o.jsxs(K,{code:"inputClass",children:["Set the class for the input element. The default is ",o.jsx("code",{children:"input"}),"."]}),o.jsxs(K,{code:"selectingClass",children:["Set the class added when a selection is in place. The default is ",o.jsx("code",{children:"selecting"}),"."]}),o.jsxs(K,{code:"optionsClass",children:["Set the class added for the options container. The default is ",o.jsx("code",{children:"options"}),"."]}),o.jsxs(K,{code:"optionClass",children:["Set the class added to each option element. The default is ",o.jsx("code",{children:"option"}),"."]}),o.jsxs(K,{code:"activeClass",children:["Set the class added to an option that is currently active. The default is ",o.jsx("code",{children:"active"}),"."]}),o.jsxs(K,{code:"noOptionsClass",children:["Set the class added to the element displayed when there are no options to select from. The default is ",o.jsx("code",{children:"no-options"}),"."]})]}),o.jsxs("div",{className:"flow",children:[o.jsx(ie,{title:"Components"}),o.jsx(K,{code:"Content",children:"Renders the content of the select component."}),o.jsx(K,{code:"Input",children:"Renders the input field."}),o.jsx(K,{code:"Options",id:"Options-component",children:"Renders the selectable options."}),o.jsx(K,{code:"Option",children:"Renders an individual option."}),o.jsx(K,{code:"NoOptions",id:"NoOptions-component",children:"Renders a message indicating that there are no options to select from."})]})]})]})]}),Ak=Object.freeze(Object.defineProperty({__proto__:null,default:Pk},Symbol.toStringTag,{value:"Module"})),$k=`## using npm
$ npm add @abw/badger-react-ui

## using yarn
$ yarn add @abw/badger-react-ui

## using pnpm
$ pnpm add @abw/badger-react-ui`,Bk="import '@abw/badger-react-ui/styles/badger-css-react-ui.min.css';",Dk="@import '@abw/badger-react-ui/styles/badger-css-react-ui.scss';",Ik=`// If you're already importing Badger CSS styles
// something like this...
import '@abw/badger-css/styles/badger.min.css';

// ...then you only need to add this line to get
// the additional styles from Badger React UI
import '@abw/badger-react-ui/styles/badger-react-ui.min.css';`,zk=`// If you're already importing Badger CSS styles
// something like this...
import '@abw/badger-css/styles/badger.scss';

// ...then you only need to add this line to get
// the additional styles from Badger React UI
import '@abw/badger-react-ui/styles/badger-react-ui.scss';
`,Fk=()=>o.jsxs("div",{className:"prose flow",children:[o.jsx("h1",{children:"Installation"}),o.jsx("h2",{children:"Adding to a Javascript Project"}),o.jsxs("p",{children:["Add ",o.jsx("code",{children:"@abw/badger-react-ui"})," to your Javascript project using your favourite package manager."]}),o.jsx(kn,{code:$k,caption:"Installing",language:"shell",className:"mar-b-8",expand:!0}),o.jsx("h2",{children:"Importing the CSS"}),o.jsxs(Ha,{children:[o.jsx("p",{children:"The precise details on how you import the CSS will vary depending on what framework and bundler you're using.  For a React app using Vite or running under Next.js, for example, you can add the CSS file to your main application script as show below."}),o.jsxs("p",{children:["For other frameworks and/or bundlers you should consult the documentation on how to import a CSS file from a module in your"," ",o.jsx("code",{children:"node_modules"})," directory."]})]}),o.jsx(kn,{code:Bk,caption:"Combined CSS for Badger CSS / React UI",language:"js",className:"mar-b-8",expand:!0}),o.jsx("h2",{children:"Importing the SCSS"}),o.jsxs(Ha,{children:[o.jsx("p",{children:"If you're using SASS/SCSS to build your stylesheet then you can import the SCSS components."}),o.jsx("p",{children:"Add the following line to your main SCSS stylesheet source."})]}),o.jsx(kn,{code:Dk,caption:"Combined SCSS for Badger CSS / React UI",language:"scss",className:"mar-b-8",expand:!0}),o.jsx("h2",{children:"Includes Badger CSS!"}),o.jsxs("p",{children:["Note that the examples shown above import stylesheets that"," ",o.jsx("b",{children:"include"})," the styles from Badger CSS.  If you're already using Badger CSS and have it imported, or if you've customised your installation of Badger CSS, then you only need to import the additional styles for Badger React UI."]}),o.jsx(kn,{code:Ik,caption:"Separate CSS for Badger CSS / React UI",language:"js",className:"mar-b-8",expand:!0}),o.jsx(kn,{code:zk,caption:"Separate SCSS for Badger CSS / React UI",language:"scss",className:"mar-b-8",expand:!0})]}),Uk=Object.freeze(Object.defineProperty({__proto__:null,default:Fk},Symbol.toStringTag,{value:"Module"})),Wk=e=>w.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 900 348",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",xmlSpace:"preserve","xmlns:serif":"http://www.serif.com/",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:2},...e},w.createElement("path",{className:"white",d:"M251.572,212.02C254.513,216.061 254.715,224.14 250.095,227.707C250.444,223.032 248.285,217.636 246.595,215.207C245.351,213.421 240.529,209.129 235.734,208.678C239.528,206.432 248.479,207.771 251.572,212.02ZM384.14,296.071C385.221,300.139 369.105,297.678 368.976,310.316C368.912,316.686 371.784,320.829 368.158,321.337C364.186,321.893 363.702,317.912 363.009,312.67C361.525,301.448 369.403,297.943 376.939,295.687C383.239,293.8 383.721,294.493 384.14,296.071ZM253.718,205.387C253.325,205.165 252.924,204.95 252.515,204.744C240.306,198.572 226.195,201.866 221.023,212.097C216.954,220.147 219.624,230.108 226.897,236.996C223.855,235.725 220.886,234.082 218.121,232C201.872,219.763 198.65,197.554 202.498,192.469C205.797,188.109 229.508,185.044 245.757,197.281C248.897,199.645 251.533,202.419 253.718,205.387ZM237.701,38.979C234.959,40.644 229.11,29.763 219.15,31.701C213.297,32.839 209.964,30.344 213.732,27.34C224.434,18.806 242.755,35.909 237.701,38.979ZM102.358,65.632C92.93,59.118 82.319,55.79 70.261,59.171C61.606,61.598 55.943,67.285 53.203,74.67C51.916,74.775 50.609,74.911 49.293,75.073C41.358,76.053 33.068,77.961 26.855,79.508C45.336,54.696 68.07,46.037 90.212,45.935L91.775,45.928L92.073,44.393C93.513,36.977 89.339,29.817 78.425,24.264C102.932,19.041 133.157,24.498 149.387,33.721L151.514,34.93L152.164,32.571C153.117,29.113 152.884,20.563 147.007,12.944C177.743,18.398 201.051,28.288 219.375,41.206C253.271,69.998 271.19,107.581 286.422,143.401C303.117,182.661 316.606,219.801 344.235,241.041C344.731,241.562 345.232,242.081 345.737,242.598C354.202,251.26 369.687,264.151 388.439,280.71C390.567,282.59 392.536,284.445 394.289,286.258C390.175,286.465 384.884,287.861 378.121,289.401C355.898,294.457 355.058,304.229 357.619,320.184C358.932,328.361 362.585,332.134 367.854,333.381C347.657,338.931 337.347,342.519 312.425,337.814C273.532,330.471 236.683,316.046 225.943,310.994C225.749,310.608 225.423,310.285 224.995,310.101C210.606,303.913 200.922,296.04 196.833,286.988C198.796,285.944 200.367,284.755 201.74,283.804C202.604,283.205 202.819,282.017 202.22,281.154C201.622,280.29 200.434,280.074 199.57,280.673C196.577,282.748 192.528,286.255 184.628,285.578C183.581,285.489 182.657,286.266 182.568,287.313C182.478,288.361 183.256,289.284 184.303,289.373C187.94,289.685 190.882,289.256 193.326,288.475C197.252,297.211 205.873,305.078 218.736,311.412C193.53,320.617 171.273,314.508 151.338,302.875C130.029,290.441 111.338,271.747 94.517,258.202C80.516,246.928 67.672,239.285 55.79,240.915C48.382,241.931 41.226,246.463 34.375,256.107C23.226,231.606 38.024,207.024 52.658,191.434L54.205,189.786L52.319,188.541C38.022,179.099 21.81,184.908 11.009,196.975C10.204,187.276 14.741,173.112 22.182,160.21C29.69,147.192 40.209,135.4 51.636,130.932C122.17,117.473 156.365,176.933 192.036,228.629C212.984,258.988 259.699,294.806 348.432,323.461C343.645,308.274 345.837,301.003 349.276,294.022C327.909,284.035 301.478,267.497 284.086,236.018C236.493,149.873 215.639,88.568 146.875,71.303C134.894,68.295 119.263,65.091 102.358,65.632ZM102.275,79.762C100.823,87.371 78.096,65.294 73.617,77.189C65.317,99.228 57.382,86.649 59.352,80.667C69.456,49.974 103.609,72.771 102.275,79.762Z",style:{fill:"white"}}),w.createElement("path",{className:"black",d:"M52.054,78.596C51.294,78.672 50.529,78.759 49.759,78.854C39.593,80.108 28.834,82.925 22.777,84.472L17.915,85.714L20.728,81.559C40.142,52.889 64.62,42.703 88.525,42.149C88.888,35.685 83.351,30.024 71.924,25.526L66.722,23.478L72.092,21.924C97.213,14.653 130.162,19.649 148.812,29.092C148.924,24.696 147.199,17.339 140.471,11.578L135.382,7.22L142.003,8.25C168.067,12.303 189.097,19.357 206.402,28.658C206.575,28.721 206.748,28.783 206.921,28.846C208.323,24.341 212.385,20.472 219.865,21.145C239.675,22.925 243.917,32.841 244.961,51.125C270.1,72.457 287.235,102.584 300.677,133.136C312.72,160.511 321.799,188.221 331.031,210.219C334.652,218.847 338.295,226.594 342.151,233.093C344.174,235.417 346.275,237.699 348.461,239.935C356.894,248.564 372.28,261.359 390.96,277.855C394.6,281.069 397.773,284.243 400.276,287.281C402.859,288.644 404.62,291.472 405.778,296.536C405.975,297.173 406.119,297.795 406.209,298.403C406.253,298.697 406.287,298.994 406.314,299.294C406.615,301.13 406.861,303.2 407.058,305.527C407.84,314.777 405.022,326.993 390.631,330.7C387.826,331.422 385.121,332.093 382.547,332.63C378.775,333.843 375.504,334.896 375.505,334.895C353.988,343.064 340.05,346.906 311.718,341.557C270.836,333.838 232.195,318.357 223.053,313.826C195.401,325.115 171.094,318.814 149.418,306.165C127.941,293.633 109.081,274.82 92.128,261.169C85.494,255.827 79.163,251.286 73.076,248.283C67.258,245.412 61.69,243.95 56.308,244.689C49.102,245.677 42.338,250.617 35.728,260.909L33.983,263.626L32.45,260.785C18.325,234.619 32.7,207.872 48.29,190.557C35.023,183.325 20.386,190.519 11.384,202.521L9.087,205.583L8.03,201.904C5.111,191.745 9.777,174.095 18.883,158.307C24.331,148.86 31.344,140.108 39.121,133.986C28.037,137.259 16.107,142.234 3.209,149.173C16.216,114.812 33.291,93.85 51.552,81.51C51.677,80.52 51.845,79.548 52.054,78.596ZM251.572,212.02C248.479,207.771 239.528,206.432 235.734,208.678C240.529,209.129 245.351,213.421 246.595,215.207C248.285,217.636 250.444,223.032 250.095,227.707C254.715,224.14 254.513,216.061 251.572,212.02ZM384.14,296.071C383.721,294.493 383.239,293.8 376.939,295.687C369.403,297.943 361.525,301.448 363.009,312.67C363.702,317.912 364.186,321.893 368.158,321.337C371.784,320.829 368.912,316.686 368.976,310.316C369.105,297.678 385.221,300.139 384.14,296.071ZM253.718,205.387C251.533,202.419 248.897,199.645 245.757,197.281C229.508,185.044 205.797,188.109 202.498,192.469C198.65,197.554 201.872,219.763 218.121,232C220.886,234.082 223.855,235.725 226.897,236.996C219.624,230.108 216.954,220.147 221.023,212.097C226.195,201.866 240.306,198.572 252.515,204.744C252.924,204.95 253.325,205.165 253.718,205.387ZM237.701,38.979C242.755,35.909 224.434,18.806 213.732,27.34C209.964,30.344 213.297,32.839 219.15,31.701C229.11,29.763 234.959,40.644 237.701,38.979ZM102.358,65.632C119.263,65.091 134.894,68.295 146.875,71.303C215.639,88.568 236.493,149.873 284.086,236.018C301.478,267.497 327.909,284.035 349.276,294.022C345.837,301.003 343.645,308.274 348.432,323.461C259.699,294.806 212.984,258.988 192.036,228.629C156.365,176.933 122.17,117.473 51.636,130.932C40.209,135.4 29.69,147.192 22.182,160.21C14.741,173.112 10.204,187.276 11.009,196.975C21.81,184.908 38.022,179.099 52.319,188.541L54.205,189.786L52.658,191.434C38.024,207.024 23.226,231.606 34.375,256.107C41.226,246.463 48.382,241.931 55.79,240.915C67.672,239.285 80.516,246.928 94.517,258.202C111.338,271.747 130.029,290.441 151.338,302.875C171.273,314.508 193.53,320.617 218.736,311.412C205.873,305.078 197.252,297.211 193.326,288.475C190.882,289.256 187.94,289.685 184.303,289.373C183.256,289.284 182.478,288.361 182.568,287.313C182.657,286.266 183.581,285.489 184.628,285.578C192.528,286.255 196.577,282.748 199.57,280.673C200.434,280.074 201.622,280.29 202.22,281.154C202.819,282.017 202.604,283.205 201.74,283.804C200.367,284.755 198.796,285.944 196.833,286.988C200.922,296.04 210.606,303.913 224.995,310.101C225.423,310.285 225.749,310.608 225.943,310.994C236.683,316.046 273.532,330.471 312.425,337.814C337.347,342.519 347.657,338.931 367.854,333.381C362.585,332.134 358.932,328.361 357.619,320.184C355.058,304.229 355.898,294.457 378.121,289.401C384.884,287.861 390.175,286.465 394.289,286.258C392.536,284.445 390.567,282.59 388.439,280.71C369.687,264.151 354.202,251.26 345.737,242.598C345.232,242.081 344.731,241.562 344.235,241.041C316.606,219.801 303.117,182.661 286.422,143.401C271.19,107.581 253.271,69.998 219.375,41.206C201.051,28.288 177.743,18.398 147.007,12.944C152.884,20.563 153.117,29.113 152.164,32.571L151.514,34.93L149.387,33.721C133.157,24.498 102.932,19.041 78.425,24.264C89.339,29.817 93.513,36.977 92.073,44.393L91.775,45.928L90.212,45.935C68.07,46.037 45.336,54.696 26.855,79.508C33.068,77.961 41.358,76.053 49.293,75.073C50.609,74.911 51.916,74.775 53.203,74.67C55.943,67.285 61.606,61.598 70.261,59.171C82.319,55.79 92.93,59.118 102.358,65.632ZM102.275,79.762C103.609,72.771 69.456,49.974 59.352,80.667C57.382,86.649 65.317,99.228 73.617,77.189C78.096,65.294 100.823,87.371 102.275,79.762Z"}),w.createElement("path",{className:"badger",d:"M418.81,39.948C419.704,39.68 421.135,39.389 423.103,39.076C425.07,38.763 427.082,38.607 429.139,38.607C431.107,38.607 432.873,38.741 434.438,39.009C436.003,39.277 437.322,39.814 438.396,40.619C439.469,41.424 440.274,42.519 440.81,43.905C441.347,45.292 441.615,47.103 441.615,49.338L441.615,62.485C443.851,61.591 445.975,60.965 447.987,60.607C449.999,60.249 452.213,60.07 454.628,60.07C458.92,60.07 462.989,60.831 466.835,62.351C470.681,63.871 474.079,66.085 477.03,68.991C479.982,71.898 482.307,75.497 484.006,79.79C485.705,84.083 486.555,89.046 486.555,94.681C486.555,100.494 485.683,105.569 483.939,109.907C482.195,114.244 479.758,117.844 476.628,120.706C473.498,123.567 469.675,125.736 465.158,127.212C460.642,128.687 455.656,129.425 450.201,129.425C444.298,129.425 439.29,128.732 435.176,127.346C431.062,125.96 427.574,124.238 424.712,122.181C420.777,119.409 418.81,115.831 418.81,111.449L418.81,39.948ZM450.201,111.449C454.314,111.449 457.512,110.041 459.792,107.224C462.073,104.406 463.213,100.226 463.213,94.681C463.213,89.046 462.05,84.843 459.725,82.071C457.4,79.298 454.27,77.912 450.335,77.912C448.546,77.912 447.003,78.091 445.707,78.449C444.41,78.806 443.001,79.343 441.481,80.059L441.481,109.303C442.465,109.929 443.65,110.443 445.036,110.846C446.422,111.248 448.144,111.449 450.201,111.449ZM524.787,60.07C529.617,60.07 534.021,60.562 538.001,61.546C541.981,62.53 545.379,64.028 548.196,66.04C551.013,68.052 553.182,70.601 554.702,73.686C556.223,76.772 556.983,80.416 556.983,84.62L556.983,114.669C556.983,116.994 556.335,118.895 555.038,120.37C553.741,121.846 552.198,123.12 550.41,124.193C544.597,127.681 536.413,129.425 525.86,129.425C521.121,129.425 516.85,128.978 513.049,128.084C509.248,127.189 505.984,125.848 503.256,124.059C500.529,122.271 498.427,119.99 496.951,117.218C495.476,114.445 494.738,111.226 494.738,107.559C494.738,101.388 496.571,96.648 500.238,93.339C503.905,90.03 509.584,87.973 517.275,87.168L534.848,85.29L534.848,84.351C534.848,81.758 533.708,79.902 531.428,78.784C529.147,77.666 525.86,77.107 521.568,77.107C518.169,77.107 514.86,77.465 511.641,78.18C508.421,78.896 505.515,79.79 502.921,80.863C501.758,80.059 500.775,78.829 499.97,77.174C499.165,75.52 498.762,73.798 498.762,72.01C498.762,69.684 499.321,67.829 500.439,66.442C501.557,65.056 503.279,63.871 505.604,62.887C508.198,61.904 511.261,61.188 514.793,60.741C518.326,60.294 521.657,60.07 524.787,60.07ZM525.86,112.791C527.381,112.791 529.058,112.634 530.891,112.321C532.724,112.008 534.088,111.583 534.983,111.047L534.983,100.315L525.324,101.12C522.82,101.299 520.763,101.835 519.153,102.73C517.543,103.624 516.738,104.965 516.738,106.754C516.738,108.543 517.431,109.996 518.818,111.114C520.204,112.232 522.551,112.791 525.86,112.791ZM568.117,94.681C568.117,88.778 569.012,83.658 570.8,79.321C572.589,74.983 575.071,71.384 578.245,68.522C581.42,65.66 585.132,63.536 589.38,62.15C593.628,60.763 598.211,60.07 603.13,60.07C604.919,60.07 606.663,60.227 608.362,60.54C610.061,60.853 611.447,61.233 612.52,61.68L612.52,39.948C613.415,39.68 614.846,39.389 616.813,39.076C618.781,38.763 620.793,38.607 622.85,38.607C624.817,38.607 626.584,38.741 628.149,39.009C629.714,39.277 631.033,39.814 632.106,40.619C633.179,41.424 633.984,42.519 634.521,43.905C635.057,45.292 635.326,47.103 635.326,49.338L635.326,112.925C635.326,117.128 633.358,120.482 629.423,122.986C626.83,124.685 623.476,126.183 619.362,127.48C615.248,128.777 610.508,129.425 605.142,129.425C599.329,129.425 594.12,128.62 589.514,127.011C584.908,125.401 581.018,123.076 577.843,120.035C574.668,116.994 572.253,113.35 570.599,109.102C568.944,104.854 568.117,100.047 568.117,94.681ZM606.215,77.912C601.386,77.912 597.675,79.298 595.081,82.071C592.488,84.843 591.191,89.046 591.191,94.681C591.191,100.226 592.398,104.406 594.813,107.224C597.227,110.041 600.715,111.449 605.276,111.449C606.886,111.449 608.339,111.203 609.636,110.711C610.933,110.22 611.939,109.661 612.655,109.035L612.655,79.522C610.866,78.449 608.72,77.912 606.215,77.912ZM681.339,60.07C686.436,60.07 691.064,60.719 695.223,62.016C699.382,63.312 702.892,64.989 705.754,67.046C707.542,68.298 708.951,69.684 709.979,71.205C711.008,72.725 711.522,74.693 711.522,77.107L711.522,124.059C711.522,128.799 710.628,132.891 708.839,136.334C707.051,139.777 704.613,142.639 701.528,144.919C698.443,147.2 694.821,148.877 690.662,149.95C686.503,151.023 682.054,151.56 677.314,151.56C669.176,151.56 662.781,150.464 658.131,148.273C653.48,146.082 651.155,142.527 651.155,137.608C651.155,135.551 651.58,133.74 652.43,132.175C653.279,130.61 654.241,129.425 655.314,128.62C657.907,130.051 660.836,131.259 664.101,132.242C667.365,133.226 670.741,133.718 674.229,133.718C679.058,133.718 682.904,132.913 685.766,131.303C688.627,129.694 690.058,127.1 690.058,123.523L690.058,121.376C686.392,122.986 681.92,123.791 676.643,123.791C672.619,123.791 668.796,123.187 665.174,121.98C661.552,120.773 658.377,118.895 655.649,116.346C652.922,113.797 650.73,110.51 649.076,106.486C647.421,102.461 646.594,97.677 646.594,92.132C646.594,86.677 647.466,81.937 649.21,77.912C650.954,73.888 653.369,70.556 656.454,67.918C659.54,65.28 663.206,63.312 667.454,62.016C671.702,60.719 676.33,60.07 681.339,60.07ZM689.656,79.522C689.03,79.164 688.113,78.806 686.906,78.449C685.699,78.091 684.201,77.912 682.412,77.912C678.03,77.912 674.743,79.142 672.552,81.601C670.361,84.061 669.265,87.571 669.265,92.132C669.265,97.319 670.361,101.053 672.552,103.333C674.743,105.614 677.538,106.754 680.936,106.754C684.603,106.754 687.51,105.904 689.656,104.205L689.656,79.522ZM760.084,129.425C754.807,129.425 749.911,128.687 745.395,127.212C740.878,125.736 736.943,123.523 733.59,120.571C730.236,117.62 727.598,113.909 725.675,109.437C723.752,104.965 722.791,99.734 722.791,93.742C722.791,87.839 723.752,82.764 725.675,78.516C727.598,74.268 730.124,70.78 733.254,68.052C736.384,65.325 739.962,63.312 743.986,62.016C748.011,60.719 752.124,60.07 756.328,60.07C761.068,60.07 765.383,60.786 769.273,62.217C773.163,63.648 776.517,65.615 779.334,68.119C782.151,70.623 784.342,73.619 785.908,77.107C787.473,80.595 788.255,84.396 788.255,88.51C788.255,91.551 787.406,93.876 785.706,95.486C784.007,97.095 781.637,98.124 778.596,98.571L745.462,103.535C746.445,106.486 748.458,108.699 751.498,110.175C754.539,111.651 758.027,112.388 761.962,112.388C765.629,112.388 769.094,111.919 772.359,110.98C775.623,110.041 778.283,108.945 780.34,107.693C781.771,108.587 782.979,109.84 783.962,111.449C784.946,113.059 785.438,114.758 785.438,116.547C785.438,120.571 783.56,123.567 779.804,125.535C776.942,127.055 773.722,128.084 770.145,128.62C766.568,129.157 763.214,129.425 760.084,129.425ZM756.328,76.705C754.181,76.705 752.326,77.063 750.761,77.778C749.196,78.493 747.921,79.41 746.937,80.528C745.954,81.646 745.216,82.898 744.724,84.284C744.232,85.67 743.941,87.079 743.852,88.51L766.791,84.754C766.523,82.965 765.539,81.176 763.84,79.388C762.141,77.599 759.637,76.705 756.328,76.705ZM822.061,127.145C821.166,127.413 819.758,127.681 817.835,127.95C815.912,128.218 813.922,128.352 811.865,128.352C809.898,128.352 808.131,128.218 806.566,127.95C805.001,127.681 803.682,127.145 802.609,126.34C801.536,125.535 800.709,124.439 800.127,123.053C799.546,121.667 799.255,119.856 799.255,117.62L799.255,77.376C799.255,75.319 799.635,73.552 800.396,72.077C801.156,70.601 802.251,69.282 803.682,68.119C805.113,66.957 806.879,65.906 808.981,64.967C811.083,64.028 813.341,63.201 815.756,62.485C818.17,61.77 820.674,61.211 823.268,60.808C825.861,60.406 828.455,60.205 831.049,60.205C835.341,60.205 838.74,61.032 841.244,62.686C843.748,64.341 845,67.046 845,70.802C845,72.054 844.821,73.284 844.463,74.491C844.106,75.699 843.659,76.794 843.122,77.778C841.244,77.778 839.321,77.867 837.354,78.046C835.386,78.225 833.463,78.493 831.585,78.851C829.707,79.209 827.941,79.589 826.286,79.991C824.632,80.394 823.223,80.863 822.061,81.4L822.061,127.145Z"}),w.createElement("path",{className:"react-ui",d:"M456.264,259.551C455.489,259.783 454.269,260.016 452.604,260.248C450.939,260.48 449.215,260.596 447.434,260.596C445.73,260.596 444.2,260.48 442.845,260.248C441.49,260.016 440.347,259.551 439.418,258.854C438.488,258.157 437.772,257.208 437.268,256.007C436.765,254.807 436.513,253.239 436.513,251.302L436.513,216.449C436.513,214.667 436.842,213.138 437.501,211.86C438.159,210.582 439.108,209.439 440.347,208.432C441.586,207.426 443.116,206.516 444.936,205.702C446.756,204.889 448.712,204.173 450.803,203.553C452.894,202.933 455.063,202.449 457.309,202.101C459.555,201.752 461.801,201.578 464.047,201.578C467.765,201.578 470.708,202.294 472.877,203.727C475.046,205.16 476.13,207.503 476.13,210.756C476.13,211.84 475.975,212.905 475.665,213.951C475.355,214.997 474.968,215.945 474.504,216.797C472.877,216.797 471.212,216.875 469.508,217.03C467.804,217.185 466.139,217.417 464.512,217.727C462.886,218.037 461.356,218.366 459.923,218.714C458.49,219.063 457.27,219.469 456.264,219.934L456.264,259.551ZM511.913,261.526C507.343,261.526 503.103,260.887 499.191,259.609C495.28,258.331 491.872,256.414 488.968,253.858C486.063,251.302 483.778,248.088 482.113,244.215C480.448,240.343 479.615,235.812 479.615,230.623C479.615,225.511 480.448,221.115 482.113,217.436C483.778,213.757 485.966,210.737 488.677,208.374C491.388,206.012 494.486,204.269 497.971,203.146C501.457,202.023 505.02,201.462 508.66,201.462C512.765,201.462 516.502,202.081 519.871,203.321C523.24,204.56 526.145,206.264 528.584,208.432C531.024,210.601 532.922,213.196 534.277,216.216C535.633,219.237 536.31,222.529 536.31,226.092C536.31,228.725 535.574,230.739 534.103,232.133C532.631,233.527 530.579,234.418 527.945,234.805L499.249,239.104C500.101,241.659 501.844,243.576 504.477,244.854C507.111,246.132 510.131,246.771 513.539,246.771C516.715,246.771 519.716,246.365 522.543,245.551C525.37,244.738 527.674,243.789 529.456,242.705C530.695,243.48 531.741,244.564 532.593,245.958C533.445,247.352 533.871,248.824 533.871,250.373C533.871,253.858 532.244,256.453 528.991,258.157C526.513,259.473 523.724,260.364 520.626,260.829C517.528,261.294 514.624,261.526 511.913,261.526ZM508.66,215.868C506.801,215.868 505.194,216.178 503.838,216.797C502.483,217.417 501.379,218.211 500.527,219.179C499.675,220.147 499.036,221.231 498.61,222.432C498.184,223.632 497.933,224.852 497.855,226.092L517.722,222.839C517.489,221.29 516.637,219.74 515.166,218.191C513.694,216.642 511.526,215.868 508.66,215.868ZM569.073,201.462C573.255,201.462 577.069,201.888 580.516,202.74C583.963,203.592 586.906,204.889 589.346,206.632C591.785,208.374 593.664,210.582 594.98,213.254C596.297,215.926 596.955,219.082 596.955,222.722L596.955,248.746C596.955,250.76 596.394,252.406 595.271,253.684C594.148,254.962 592.812,256.066 591.263,256.995C586.228,260.016 579.141,261.526 570.002,261.526C565.897,261.526 562.199,261.139 558.907,260.364C555.615,259.59 552.788,258.428 550.426,256.879C548.064,255.33 546.244,253.355 544.966,250.954C543.688,248.553 543.049,245.764 543.049,242.589C543.049,237.245 544.636,233.14 547.812,230.274C550.987,227.408 555.906,225.627 562.567,224.93L577.786,223.303L577.786,222.49C577.786,220.244 576.798,218.637 574.823,217.669C572.848,216.7 570.002,216.216 566.284,216.216C563.341,216.216 560.475,216.526 557.687,217.146C554.899,217.765 552.382,218.54 550.135,219.469C549.129,218.772 548.277,217.707 547.58,216.275C546.883,214.842 546.534,213.351 546.534,211.802C546.534,209.788 547.018,208.181 547.986,206.98C548.954,205.78 550.445,204.754 552.459,203.902C554.705,203.05 557.358,202.43 560.417,202.043C563.477,201.655 566.362,201.462 569.073,201.462ZM570.002,247.12C571.319,247.12 572.771,246.984 574.359,246.713C575.946,246.442 577.128,246.074 577.902,245.609L577.902,236.315L569.537,237.012C567.369,237.167 565.587,237.632 564.193,238.406C562.799,239.181 562.102,240.343 562.102,241.892C562.102,243.441 562.702,244.699 563.903,245.668C565.103,246.636 567.136,247.12 570.002,247.12ZM640.871,217.03C638.934,217.03 637.095,217.339 635.352,217.959C633.609,218.579 632.099,219.489 630.821,220.689C629.543,221.89 628.517,223.381 627.743,225.162C626.968,226.944 626.581,229.035 626.581,231.436C626.581,236.238 627.955,239.839 630.705,242.24C633.455,244.641 636.804,245.842 640.754,245.842C643.078,245.842 645.092,245.571 646.796,245.029C648.5,244.486 650.01,243.906 651.327,243.286C652.876,244.37 654.037,245.551 654.812,246.829C655.587,248.107 655.974,249.637 655.974,251.418C655.974,254.594 654.463,257.053 651.443,258.796C648.422,260.538 644.24,261.41 638.896,261.41C634.016,261.41 629.601,260.693 625.651,259.26C621.701,257.828 618.313,255.814 615.486,253.219C612.659,250.625 610.471,247.507 608.922,243.867C607.373,240.227 606.598,236.199 606.598,231.784C606.598,226.672 607.431,222.2 609.096,218.366C610.761,214.532 613.027,211.376 615.892,208.897C618.758,206.419 622.069,204.56 625.826,203.321C629.582,202.081 633.551,201.462 637.734,201.462C643.31,201.462 647.609,202.469 650.63,204.482C653.65,206.496 655.161,209.091 655.161,212.266C655.161,213.738 654.812,215.113 654.115,216.391C653.418,217.669 652.605,218.772 651.675,219.702C650.359,219.082 648.771,218.482 646.912,217.901C645.053,217.32 643.039,217.03 640.871,217.03ZM685.599,240.265C685.599,242.279 686.238,243.712 687.516,244.564C688.794,245.416 690.595,245.842 692.918,245.842C694.08,245.842 695.281,245.745 696.52,245.551C697.759,245.358 698.844,245.106 699.773,244.796C700.47,245.648 701.07,246.597 701.574,247.643C702.077,248.688 702.329,249.947 702.329,251.418C702.329,254.362 701.225,256.763 699.018,258.621C696.81,260.48 692.918,261.41 687.342,261.41C680.526,261.41 675.279,259.861 671.6,256.763C667.921,253.665 666.081,248.63 666.081,241.659L666.081,191.935C666.933,191.703 668.153,191.451 669.741,191.18C671.329,190.909 673.013,190.773 674.795,190.773C678.203,190.773 680.855,191.374 682.753,192.574C684.65,193.775 685.599,196.311 685.599,200.184L685.599,207.619L700.819,207.619C701.283,208.471 701.729,209.536 702.155,210.814C702.581,212.092 702.794,213.506 702.794,215.055C702.794,217.765 702.193,219.721 700.993,220.922C699.792,222.122 698.185,222.722 696.171,222.722L685.599,222.722L685.599,240.265ZM799.454,233.643C799.454,237.826 798.737,241.64 797.305,245.087C795.872,248.533 793.8,251.476 791.089,253.916C788.378,256.356 785.086,258.234 781.214,259.551C777.341,260.868 772.965,261.526 768.086,261.526C763.206,261.526 758.83,260.868 754.958,259.551C751.085,258.234 747.793,256.356 745.082,253.916C742.372,251.476 740.3,248.533 738.867,245.087C737.434,241.64 736.718,237.826 736.718,233.643L736.718,189.263C737.57,189.108 738.925,188.895 740.784,188.624C742.643,188.353 744.424,188.217 746.128,188.217C747.909,188.217 749.478,188.353 750.833,188.624C752.189,188.895 753.331,189.379 754.261,190.076C755.19,190.773 755.887,191.742 756.352,192.981C756.816,194.22 757.049,195.847 757.049,197.86L757.049,233.295C757.049,237.012 758.075,239.917 760.128,242.008C762.18,244.099 764.833,245.145 768.086,245.145C771.416,245.145 774.088,244.099 776.102,242.008C778.116,239.917 779.123,237.012 779.123,233.295L779.123,189.263C779.975,189.108 781.33,188.895 783.189,188.624C785.048,188.353 786.829,188.217 788.533,188.217C790.314,188.217 791.883,188.353 793.238,188.624C794.594,188.895 795.736,189.379 796.666,190.076C797.595,190.773 798.292,191.742 798.757,192.981C799.221,194.22 799.454,195.847 799.454,197.86L799.454,233.643ZM834.54,259.202C833.688,259.435 832.352,259.667 830.531,259.899C828.711,260.132 826.911,260.248 825.129,260.248C823.348,260.248 821.779,260.112 820.424,259.841C819.069,259.57 817.926,259.086 816.997,258.389C816.067,257.692 815.37,256.724 814.906,255.485C814.441,254.245 814.208,252.619 814.208,250.605L814.208,189.263C815.06,189.108 816.416,188.895 818.275,188.624C820.134,188.353 821.915,188.217 823.619,188.217C825.4,188.217 826.969,188.353 828.324,188.624C829.68,188.895 830.822,189.379 831.751,190.076C832.681,190.773 833.378,191.742 833.843,192.981C834.307,194.22 834.54,195.847 834.54,197.86L834.54,259.202Z"})),Vk=e=>w.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 440 440",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",xmlSpace:"preserve","xmlns:serif":"http://www.serif.com/",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:1.5},...e},w.createElement("circle",{cx:220,cy:220,r:144,style:{fill:"rgb(136,136,136)",stroke:"black",strokeWidth:"0.33px"}}),w.createElement("path",{d:"M220,12C334.798,12 428,105.202 428,220C428,334.798 334.798,428 220,428C105.202,428 12,334.798 12,220C12,105.202 105.202,12 220,12ZM220,76C140.524,76 76,140.524 76,220C76,299.476 140.524,364 220,364C299.476,364 364,299.476 364,220C364,140.524 299.476,76 220,76Z",style:{fill:"rgb(206,206,206)",stroke:"black",strokeWidth:"6.67px"}}),w.createElement("path",{d:"M41.319,232.772C38.119,232.829 35.878,232.789 34.556,232.652C33.233,232.516 32.025,232.097 30.891,231.317C29.797,230.537 28.939,229.512 28.315,228.163C27.731,226.853 27.383,225.299 27.351,223.499C27.321,221.82 27.574,220.295 28.11,218.925C28.645,217.555 29.466,216.461 30.532,215.641C31.636,214.782 32.828,214.28 34.145,214.097C35.421,213.914 37.7,213.793 40.979,213.735L46.378,213.638C49.538,213.582 51.819,213.621 53.142,213.758C54.464,213.894 55.672,214.313 56.766,215.093C57.9,215.873 58.758,216.898 59.343,218.248C59.966,219.557 60.274,221.112 60.306,222.912C60.336,224.591 60.083,226.116 59.547,227.486C59.052,228.855 58.231,229.95 57.126,230.769C56.021,231.629 54.829,232.131 53.553,232.313C52.236,232.497 49.957,232.618 46.718,232.675L41.319,232.772ZM51.53,224.348C53.01,224.322 53.968,224.225 54.365,224.058C54.762,223.891 54.957,223.567 54.947,223.047C54.94,222.607 54.774,222.29 54.45,222.056C54.126,221.862 53.124,221.759 51.484,221.789L36.727,222.052C34.887,222.085 33.769,222.185 33.331,222.313C32.934,222.48 32.7,222.844 32.71,223.364C32.72,223.924 32.966,224.279 33.489,224.43C33.972,224.581 35.173,224.64 37.012,224.607L51.53,224.348ZM60.115,235.306L61.347,243.494C61.681,245.709 61.739,247.439 61.562,248.68C61.424,249.914 61.047,250.901 60.464,251.596C59.92,252.284 59.189,252.799 58.275,253.179C57.356,253.52 55.95,253.853 53.972,254.151L51.243,254.562C49.265,254.859 47.772,254.882 46.796,254.584C45.827,254.325 45.002,253.681 44.361,252.645C43.719,251.609 43.228,250.226 42.96,248.447L42.632,246.271L30.054,248.165L28.827,240.017L60.115,235.306ZM55.962,244.264L48.012,245.461L48.101,246.054C48.214,246.806 48.45,247.296 48.887,247.514C49.285,247.737 50.06,247.782 51.207,247.609L53.778,247.222C54.846,247.061 55.534,246.796 55.797,246.392C56.066,246.028 56.117,245.293 55.962,244.264ZM65.668,263.888L35.019,271.744L32.973,263.762L63.622,255.906L65.668,263.888ZM73.017,284.844L43.393,295.958L40.864,289.217L52.805,280.165L39.36,285.21L36.944,278.768L66.567,267.654L68.984,274.095L57.267,283.404L70.6,278.402L73.017,284.844ZM78.538,295.659L50.283,309.897L46.575,302.539L74.83,288.301L78.538,295.659ZM74.884,324.988C72.198,326.727 70.274,327.877 69.079,328.459C67.884,329.042 66.637,329.325 65.262,329.262C63.921,329.177 62.651,328.76 61.408,327.945C60.221,327.141 59.105,326.005 58.127,324.494C57.214,323.084 56.623,321.655 56.354,320.209C56.085,318.763 56.204,317.4 56.676,316.142C57.159,314.828 57.906,313.773 58.927,312.922C59.915,312.092 61.786,310.786 64.539,309.004L69.073,306.07C71.725,304.353 73.683,303.181 74.878,302.598C76.073,302.015 77.32,301.733 78.661,301.817C80.036,301.88 81.306,302.297 82.515,303.135C83.736,303.917 84.819,305.074 85.797,306.585C86.71,307.996 87.3,309.424 87.569,310.87C87.872,312.294 87.753,313.657 87.248,314.937C86.764,316.251 86.017,317.306 85.03,318.136C84.008,318.987 82.138,320.293 79.418,322.054L74.884,324.988ZM79.105,312.441C80.347,311.637 81.11,311.048 81.358,310.697C81.607,310.345 81.601,309.968 81.319,309.531C81.08,309.162 80.772,308.98 80.372,308.952C79.995,308.958 79.09,309.401 77.714,310.292L65.322,318.312C63.778,319.312 62.881,319.987 62.577,320.327C62.328,320.679 62.322,321.111 62.605,321.548C62.909,322.018 63.306,322.19 63.829,322.042C64.319,321.915 65.37,321.33 66.915,320.331L79.105,312.441ZM104.097,331.146L80.061,351.721L75.379,346.251L83.505,333.662L72.595,343L68.121,337.773L92.158,317.198L96.632,322.425L88.805,335.179L99.624,325.92L104.097,331.146ZM116.973,342.973L99.303,369.64L93.032,363.991L96.536,359.503L94.337,357.522L90.179,361.421L83.849,355.718L108.146,335.022L116.973,342.973ZM100.106,355.182C102.219,352.239 104.837,348.676 108.073,344.485C103.407,348.41 100.049,351.361 98.026,353.308L100.106,355.182ZM133.778,355.495L130.062,360.657L126.102,357.806L111.332,378.323L104.645,373.509L119.414,352.992L115.486,350.164L119.202,345.002L133.778,355.495ZM135.754,356.629L147.731,363.322L144.628,368.874L139.845,366.2L136.918,371.438L141.387,373.936L138.46,379.173L133.991,376.676L130.596,382.752L135.833,385.678L132.75,391.196L120.32,384.249L135.754,356.629ZM150.451,364.831L156.15,367.169C159.813,368.672 162.217,369.874 163.376,370.738C164.534,371.603 165.306,372.568 165.653,373.618C166,374.669 166.095,375.702 165.849,376.725C165.654,377.726 164.969,379.607 163.83,382.382L159.625,392.633C158.547,395.261 157.708,396.991 157.099,397.736C156.476,398.518 155.781,399.054 154.939,399.314C154.149,399.553 153.22,399.604 152.256,399.424C151.255,399.23 149.84,398.779 148.027,398.035L138.442,394.103L150.451,364.831ZM156.01,372.991L148.115,392.235C149.188,392.675 149.946,392.726 150.387,392.388C150.828,392.051 151.462,390.927 152.267,388.966L156.927,377.605C157.474,376.272 157.749,375.391 157.827,374.99C157.904,374.59 157.826,374.255 157.569,373.933C157.348,373.627 156.824,373.325 156.01,372.991ZM194.889,388.345L187.399,386.838L187.865,384.525C188.078,383.466 188.102,382.736 187.961,382.422C187.828,382.069 187.538,381.888 187.107,381.802C186.636,381.707 186.205,381.824 185.891,382.169C185.537,382.506 185.301,383.07 185.135,383.894C184.93,384.913 184.929,385.729 185.101,386.294C185.265,386.899 185.884,387.676 186.989,388.673C190.171,391.517 192.051,393.731 192.724,395.254C193.389,396.816 193.418,399.106 192.802,402.165C192.361,404.361 191.755,405.953 191.04,406.87C190.317,407.826 189.124,408.484 187.484,408.929C185.891,409.343 184.095,409.349 182.134,408.954C179.977,408.52 178.221,407.718 176.857,406.587C175.486,405.495 174.679,404.231 174.461,402.882C174.243,401.532 174.37,399.681 174.836,397.367L175.246,395.328L182.736,396.835L181.979,400.599C181.742,401.776 181.71,402.545 181.843,402.898C182.007,403.298 182.328,403.526 182.877,403.636C183.387,403.739 183.866,403.59 184.18,403.246C184.541,402.869 184.785,402.266 184.951,401.442C185.322,399.599 185.323,398.375 184.924,397.724C184.532,397.033 183.467,395.839 181.727,394.143C179.995,392.407 178.859,391.159 178.35,390.444C177.802,389.722 177.419,388.788 177.2,387.642C176.982,386.497 177.062,385.085 177.393,383.438C177.875,381.046 178.535,379.384 179.345,378.404C180.193,377.432 181.347,376.767 182.798,376.447C184.297,376.095 185.968,376.105 187.89,376.492C189.968,376.91 191.709,377.586 193.057,378.592C194.374,379.551 195.18,380.611 195.446,381.725C195.711,382.839 195.631,384.659 195.142,387.09L194.889,388.345ZM200.214,379.311L213.892,380.38L213.397,386.721L207.933,386.294L207.466,392.276L212.57,392.675L212.102,398.657L206.998,398.257L206.456,405.196L212.437,405.664L211.945,411.965L197.748,410.855L200.214,379.311ZM225.777,380.267L226.42,405.578L231.418,405.452L231.578,411.77L218.342,412.105L217.54,380.476L225.777,380.267ZM233.537,379.948L247.346,378.191L248.149,384.5L242.514,385.217L243.272,391.169L248.311,390.528L249.069,396.479L244.029,397.121L245.706,410.295L237.532,411.335L233.537,379.948ZM258.549,375.749L265.335,406.653L257.287,408.42L250.501,377.517L258.549,375.749ZM281.962,378.541L274.713,380.955L273.968,378.716C273.626,377.691 273.285,377.046 273.007,376.844C272.716,376.603 272.374,376.591 271.957,376.73C271.501,376.882 271.185,377.198 271.084,377.653C270.945,378.121 271.02,378.728 271.286,379.525C271.615,380.512 272.019,381.22 272.449,381.625C272.892,382.068 273.815,382.435 275.27,382.751C279.444,383.638 282.176,384.625 283.516,385.612C284.869,386.637 286.033,388.61 287.019,391.57C287.727,393.696 287.992,395.378 287.827,396.529C287.675,397.718 286.967,398.882 285.765,400.083C284.588,401.234 283.032,402.132 281.135,402.764C279.047,403.459 277.125,403.636 275.379,403.332C273.646,403.066 272.318,402.37 271.458,401.307C270.598,400.244 269.789,398.574 269.043,396.335L268.386,394.362L275.635,391.947L276.848,395.591C277.227,396.729 277.581,397.412 277.872,397.653C278.214,397.918 278.606,397.956 279.137,397.779C279.63,397.615 279.972,397.248 280.073,396.793C280.2,396.287 280.112,395.642 279.846,394.845C279.252,393.061 278.645,391.999 277.975,391.632C277.292,391.227 275.774,390.721 273.421,390.113C271.056,389.467 269.45,388.948 268.653,388.581C267.818,388.227 267.021,387.607 266.263,386.721C265.504,385.836 264.872,384.571 264.341,382.977C263.57,380.662 263.317,378.891 263.532,377.639C263.786,376.374 264.456,375.223 265.557,374.224C266.683,373.174 268.138,372.352 269.997,371.733C272.009,371.063 273.855,370.785 275.525,370.988C277.144,371.165 278.371,371.684 279.155,372.519C279.939,373.354 280.774,374.973 281.557,377.326L281.962,378.541ZM298.791,359.997L312.694,388.418L305.293,392.039L299.457,380.11L297.265,381.182L303.101,393.111L295.699,396.732L281.795,368.311L289.197,364.69L294.172,374.858L296.363,373.786L291.389,363.618L298.791,359.997ZM328.977,350.672L322.871,355.265L321.453,353.379C320.804,352.515 320.275,352.012 319.947,351.909C319.595,351.773 319.267,351.87 318.915,352.134C318.532,352.423 318.332,352.823 318.381,353.287C318.397,353.775 318.662,354.326 319.167,354.998C319.792,355.829 320.401,356.372 320.937,356.619C321.498,356.898 322.49,356.953 323.97,356.791C328.209,356.305 331.113,356.373 332.698,356.883C334.306,357.425 336.036,358.927 337.912,361.42C339.258,363.21 340.044,364.721 340.254,365.865C340.488,367.04 340.185,368.369 339.428,369.89C338.678,371.355 337.487,372.701 335.889,373.903C334.131,375.225 332.364,376.004 330.612,376.27C328.885,376.568 327.404,376.33 326.251,375.596C325.098,374.862 323.8,373.535 322.382,371.649L321.132,369.987L327.237,365.395L329.546,368.463C330.267,369.422 330.82,369.958 331.172,370.093C331.58,370.237 331.964,370.148 332.411,369.812C332.827,369.499 333.034,369.043 332.986,368.579C332.945,368.059 332.656,367.475 332.151,366.804C331.021,365.301 330.108,364.487 329.356,364.352C328.58,364.185 326.98,364.187 324.556,364.358C322.108,364.498 320.42,364.516 319.548,364.421C318.644,364.35 317.691,364.016 316.691,363.417C315.69,362.818 314.688,361.82 313.679,360.477C312.212,358.527 311.41,356.928 311.216,355.673C311.054,354.393 311.324,353.088 312.051,351.791C312.785,350.438 313.903,349.197 315.47,348.019C317.164,346.744 318.827,345.894 320.474,345.556C322.066,345.21 323.394,345.312 324.403,345.854C325.411,346.397 326.717,347.667 328.208,349.649L328.977,350.672ZM352.018,341.021C354.259,343.305 355.771,344.96 356.581,346.015C357.391,347.069 357.917,348.234 358.13,349.594C358.315,350.925 358.161,352.253 357.61,353.634C357.06,354.958 356.17,356.279 354.885,357.539C353.686,358.715 352.405,359.58 351.041,360.132C349.678,360.685 348.319,360.841 346.992,360.631C345.608,360.419 344.425,359.899 343.386,359.068C342.376,358.266 340.722,356.695 338.425,354.353L334.644,350.498C332.431,348.242 330.892,346.558 330.082,345.504C329.272,344.449 328.746,343.285 328.561,341.953C328.348,340.594 328.502,339.266 329.081,337.914C329.603,336.561 330.521,335.269 331.806,334.008C333.005,332.832 334.286,331.967 335.649,331.415C336.984,330.834 338.343,330.677 339.699,330.917C341.083,331.128 342.266,331.649 343.276,332.45C344.315,333.281 345.968,334.852 348.237,337.166L352.018,341.021ZM338.881,339.394C337.845,338.338 337.116,337.708 336.721,337.535C336.327,337.361 335.959,337.443 335.587,337.807C335.273,338.115 335.157,338.453 335.21,338.85C335.291,339.218 335.905,340.016 337.054,341.187L347.389,351.724C348.678,353.038 349.519,353.782 349.913,354.012C350.307,354.185 350.732,354.104 351.103,353.74C351.503,353.348 351.592,352.925 351.342,352.442C351.12,351.987 350.337,351.074 349.049,349.76L338.881,339.394ZM341.099,325.297L349.778,314.415L354.751,318.38L351.209,322.821L355.9,326.562L359.067,322.591L363.758,326.332L360.59,330.303L370.973,338.584L365.835,345.026L341.099,325.297ZM360.217,298.339L365.582,301.754L362.962,305.871L384.287,319.447L379.862,326.398L358.537,312.822L355.937,316.905L350.572,313.489L360.217,298.339ZM373.724,268.616L401.315,284.523L397.232,293.957C392.425,292.879 387.026,291.458 381.05,289.656C383.345,290.998 388.109,293.888 395.342,298.326L391.291,307.687L360.792,298.497L363.969,291.155L374.435,294.769L384.533,298.224C379.631,295.754 373.288,292.181 365.542,287.521L368.942,279.665C369.87,279.936 373.139,281.046 378.872,283.004L390.287,286.942C383.414,283.488 376.851,279.819 370.562,275.921L373.724,268.616ZM376.781,254.323L408.604,257.594L406.512,265.77L400.91,264.75L400.176,267.617L405.56,269.49L403.448,277.745L373.836,265.832L376.781,254.323ZM395.425,263.594C391.838,263.089 387.466,262.425 382.252,261.503C387.895,263.814 392.068,265.419 394.731,266.307L395.425,263.594ZM378.103,248.493L378.802,242.694C379.266,238.842 379.736,236.28 380.221,234.928C380.661,233.612 381.55,232.591 382.886,231.865C384.218,231.18 386.216,230.977 388.877,231.298C391.339,231.594 392.929,232.108 393.691,232.804C394.454,233.5 394.826,234.754 394.77,236.56C395.359,235.02 396.048,233.975 396.791,233.5C397.533,233.025 398.167,232.779 398.781,232.692C399.352,232.64 400.91,232.747 403.452,233.053L411.712,234.049L410.798,241.634L400.354,240.375C398.686,240.175 397.639,240.169 397.208,240.399C396.778,240.63 396.498,241.281 396.364,242.393L410.502,244.096L409.516,252.277L378.103,248.493ZM384.49,240.962L391.479,241.804C391.589,240.891 391.507,240.236 391.312,239.85C391.116,239.464 390.306,239.165 388.916,238.998L387.209,238.792C386.216,238.672 385.522,238.75 385.161,239.069C384.84,239.393 384.6,240.049 384.49,240.962ZM380.371,226.869L380.35,213.149L386.71,213.139L386.718,218.619L392.718,218.61L392.71,213.49L398.71,213.48L398.718,218.6L405.678,218.589L405.669,212.589L411.989,212.579L412.011,226.819L380.371,226.869Z"}),w.createElement("path",{d:"M65.814,139.849C68.729,141.171 70.736,142.169 71.872,142.859C73.008,143.55 73.919,144.446 74.609,145.637C75.262,146.812 75.598,148.106 75.583,149.592C75.548,151.026 75.195,152.579 74.452,154.218C73.759,155.748 72.876,157.017 71.804,158.024C70.733,159.032 69.522,159.669 68.208,159.951C66.841,160.254 65.55,160.196 64.281,159.796C63.05,159.414 60.94,158.545 57.953,157.191L53.034,154.961C50.156,153.656 48.113,152.642 46.977,151.951C45.841,151.261 44.929,150.364 44.276,149.19C43.586,147.999 43.251,146.705 43.302,145.235C43.301,143.785 43.69,142.248 44.433,140.609C45.127,139.079 46.009,137.81 47.081,136.803C48.116,135.779 49.327,135.142 50.677,134.876C52.044,134.573 53.335,134.631 54.567,135.014C55.836,135.414 57.945,136.282 60.896,137.62L65.814,139.849ZM52.976,143.077C51.628,142.466 50.721,142.142 50.291,142.123C49.86,142.103 49.546,142.312 49.331,142.786C49.15,143.186 49.163,143.544 49.356,143.895C49.564,144.209 50.426,144.731 51.919,145.408L65.362,151.503C67.038,152.262 68.091,152.652 68.542,152.724C68.972,152.744 69.339,152.515 69.554,152.041C69.785,151.531 69.715,151.104 69.308,150.744C68.937,150.4 67.877,149.832 66.201,149.072L52.976,143.077ZM52.319,126.004L56.705,118.981C57.892,117.081 58.972,115.728 59.913,114.901C60.82,114.053 61.749,113.548 62.643,113.399C63.504,113.229 64.394,113.314 65.336,113.619C66.256,113.958 67.541,114.619 69.237,115.678L71.578,117.14C73.275,118.2 74.424,119.153 74.971,120.014C75.54,120.84 75.748,121.866 75.562,123.07C75.376,124.275 74.85,125.644 73.897,127.171L72.732,129.037L83.52,135.775L79.156,142.764L52.319,126.004ZM61.298,121.897L68.117,126.156L68.435,125.647C68.838,125.002 68.978,124.476 68.787,124.027C68.63,123.599 68.07,123.06 67.086,122.446L64.88,121.069C63.964,120.497 63.269,120.251 62.807,120.387C62.366,120.489 61.849,121.015 61.298,121.897ZM65.491,105.806L74.058,95.089L79.026,99.06L75.604,103.341L80.291,107.087L83.488,103.088L88.174,106.834L84.977,110.834L90.414,115.179L94.16,110.493L99.097,114.439L90.205,125.562L65.491,105.806ZM91.595,76.985L113.834,99.49L108.713,104.551L95.575,97.345L105.668,107.559L100.775,112.395L78.535,89.89L83.429,85.054L96.71,91.949L86.701,81.82L91.595,76.985ZM125.69,63.611L119.349,67.872L118.033,65.913C117.43,65.017 116.929,64.486 116.607,64.365C116.262,64.211 115.93,64.29 115.565,64.536C115.166,64.803 114.946,65.192 114.97,65.658C114.961,66.146 115.196,66.711 115.664,67.409C116.244,68.272 116.823,68.846 117.346,69.122C117.89,69.431 118.878,69.538 120.364,69.455C124.624,69.195 127.52,69.417 129.075,70.011C130.653,70.637 132.301,72.229 134.041,74.818C135.29,76.677 135.995,78.228 136.144,79.381C136.314,80.568 135.942,81.878 135.104,83.357C134.277,84.78 133.017,86.06 131.357,87.176C129.531,88.403 127.726,89.086 125.962,89.259C124.221,89.465 122.756,89.149 121.643,88.354C120.531,87.56 119.306,86.166 117.989,84.207L116.829,82.481L123.17,78.22L125.312,81.407C125.981,82.403 126.505,82.967 126.849,83.121C127.249,83.286 127.637,83.218 128.102,82.905C128.534,82.615 128.765,82.171 128.741,81.705C128.728,81.184 128.471,80.585 128.002,79.888C126.954,78.328 126.085,77.466 125.341,77.291C124.575,77.083 122.977,77 120.548,77.042C118.096,77.051 116.409,76.98 115.544,76.839C114.645,76.72 113.711,76.335 112.744,75.684C111.776,75.033 110.829,73.983 109.892,72.589C108.531,70.563 107.815,68.924 107.688,67.66C107.595,66.373 107.934,65.085 108.728,63.829C109.533,62.516 110.716,61.336 112.343,60.243C114.102,59.06 115.808,58.3 117.471,58.05C119.079,57.788 120.4,57.961 121.378,58.557C122.357,59.152 123.593,60.49 124.976,62.548L125.69,63.611ZM151.705,60.191C153.126,63.059 154.048,65.102 154.491,66.356C154.934,67.609 155.072,68.88 154.852,70.239C154.615,71.562 154.056,72.776 153.103,73.917C152.169,75.005 150.913,75.984 149.3,76.783C147.795,77.529 146.308,77.953 144.841,78.055C143.374,78.156 142.033,77.883 140.837,77.27C139.587,76.64 138.624,75.777 137.895,74.666C137.184,73.59 136.1,71.582 134.644,68.643L132.247,63.804C130.844,60.972 129.904,58.894 129.461,57.64C129.019,56.386 128.881,55.115 129.118,53.793C129.338,52.434 129.897,51.219 130.867,50.114C131.783,48.99 133.057,48.047 134.67,47.248C136.175,46.502 137.662,46.079 139.129,45.977C140.579,45.839 141.919,46.112 143.133,46.761C144.383,47.392 145.346,48.254 146.057,49.33C146.787,50.442 147.87,52.449 149.309,55.353L151.705,60.191ZM139.723,54.566C139.066,53.239 138.568,52.415 138.247,52.127C137.927,51.84 137.551,51.803 137.085,52.033C136.691,52.229 136.475,52.514 136.402,52.907C136.365,53.283 136.701,54.232 137.429,55.702L143.981,68.928C144.797,70.577 145.366,71.545 145.669,71.886C145.99,72.173 146.419,72.229 146.885,71.998C147.387,71.749 147.603,71.375 147.516,70.838C147.446,70.336 146.985,69.226 146.168,67.577L139.723,54.566ZM167.692,34.963L174.441,55.018C175.206,57.293 175.666,58.911 175.821,59.871C176.013,60.82 175.878,61.92 175.489,63.149C175.088,64.339 174.357,65.429 173.348,66.317C172.3,67.218 170.987,67.956 169.395,68.491C167.613,69.091 165.919,69.324 164.35,69.176C162.794,69.067 161.502,68.615 160.501,67.897C159.499,67.179 158.751,66.334 158.28,65.311C157.809,64.287 156.98,62.076 155.845,58.702L149.874,40.96L157.683,38.332L165.249,60.813C165.696,62.14 166.052,62.948 166.281,63.251C166.56,63.579 166.927,63.667 167.344,63.526C167.837,63.36 168.076,63.069 168.088,62.601C168.099,62.133 167.856,61.159 167.358,59.681L159.92,37.579L167.692,34.963ZM174.727,33.131L180.462,32.033C184.273,31.303 186.857,30.972 188.292,31.023C189.681,31.042 190.923,31.578 192.021,32.631C193.079,33.691 193.88,35.533 194.383,38.165C194.85,40.601 194.844,42.272 194.412,43.21C193.981,44.147 192.9,44.884 191.162,45.379C192.809,45.471 194.014,45.811 194.692,46.373C195.37,46.936 195.797,47.465 196.067,48.024C196.29,48.552 196.662,50.069 197.143,52.583L198.707,60.755L191.204,62.191L189.226,51.859C188.91,50.209 188.597,49.21 188.246,48.87C187.896,48.53 187.191,48.461 186.091,48.671L188.768,62.658L180.675,64.207L174.727,33.131ZM183.842,36.925L185.166,43.839C186.069,43.666 186.668,43.389 186.976,43.085C187.285,42.782 187.323,41.919 187.06,40.544L186.737,38.855C186.549,37.873 186.264,37.235 185.85,36.988C185.444,36.781 184.746,36.752 183.842,36.925ZM219.815,41.52L211.587,41.97L211.288,36.498C211.198,34.861 211.064,33.867 210.884,33.516C210.663,33.128 210.292,32.947 209.693,32.98C209.014,33.017 208.588,33.281 208.454,33.769C208.281,34.259 208.258,35.302 208.345,36.9L209.148,51.558C209.231,53.076 209.367,54.11 209.591,54.538C209.777,55.009 210.19,55.226 210.829,55.191C211.468,55.156 211.854,54.895 211.987,54.407C212.163,53.957 212.182,52.834 212.088,51.116L211.871,47.162L220.099,46.712L220.165,47.91C220.344,51.185 220.231,53.515 219.866,54.897C219.461,56.281 218.528,57.534 216.987,58.66C215.447,59.786 213.558,60.41 211.241,60.537C208.845,60.668 206.824,60.338 205.218,59.545C203.612,58.751 202.508,57.61 201.904,56.08C201.342,54.589 200.935,52.288 200.765,49.172L200.26,39.946C200.135,37.67 200.123,35.988 200.22,34.821C200.318,33.694 200.736,32.549 201.438,31.469C202.138,30.349 203.173,29.491 204.498,28.818C205.861,28.102 207.403,27.738 209.2,27.639C211.597,27.508 213.62,27.878 215.268,28.709C216.876,29.543 217.98,30.684 218.536,32.056C219.132,33.425 219.489,35.569 219.651,38.524L219.815,41.52ZM226.051,27.944L239.739,28.872L239.309,35.218L233.841,34.847L233.435,40.833L238.544,41.179L238.137,47.166L233.029,46.819L232.558,53.763L238.544,54.169L238.117,60.475L223.909,59.511L226.051,27.944ZM272.132,44.93L264.713,43.105L265.276,40.813C265.534,39.765 265.59,39.037 265.462,38.717C265.344,38.359 265.062,38.166 264.635,38.061C264.169,37.946 263.733,38.045 263.404,38.376C263.037,38.697 262.777,39.251 262.576,40.067C262.328,41.077 262.292,41.892 262.44,42.464C262.578,43.074 263.163,43.877 264.225,44.921C267.282,47.898 269.067,50.19 269.674,51.74C270.272,53.329 270.203,55.618 269.458,58.648C268.923,60.823 268.25,62.388 267.497,63.274C266.734,64.198 265.514,64.804 263.856,65.179C262.247,65.525 260.452,65.454 258.51,64.977C256.373,64.451 254.653,63.575 253.339,62.387C252.015,61.237 251.263,59.94 251.102,58.583C250.942,57.225 251.148,55.381 251.712,53.089L252.209,51.069L259.628,52.894L258.711,56.623C258.424,57.788 258.359,58.555 258.477,58.913C258.624,59.32 258.935,59.562 259.479,59.695C259.984,59.82 260.469,59.692 260.797,59.36C261.174,59 261.444,58.407 261.644,57.592C262.093,55.766 262.147,54.543 261.775,53.875C261.414,53.169 260.4,51.931 258.734,50.162C257.078,48.354 255.996,47.058 255.518,46.322C255.001,45.577 254.658,44.628 254.489,43.474C254.319,42.32 254.459,40.913 254.861,39.282C255.443,36.912 256.174,35.28 257.025,34.335C257.913,33.401 259.095,32.785 260.559,32.527C262.071,32.24 263.74,32.321 265.643,32.789C267.702,33.295 269.412,34.045 270.716,35.108C271.991,36.121 272.752,37.215 272.97,38.339C273.187,39.464 273.029,41.279 272.437,43.687L272.132,44.93ZM292.077,61.866C290.909,64.845 290.018,66.902 289.387,68.072C288.756,69.243 287.909,70.199 286.755,70.95C285.616,71.664 284.341,72.066 282.856,72.129C281.423,72.168 279.854,71.897 278.178,71.24C276.614,70.627 275.301,69.812 274.239,68.794C273.177,67.776 272.478,66.6 272.127,65.303C271.754,63.953 271.745,62.661 272.078,61.374C272.396,60.123 273.153,57.972 274.35,54.918L276.321,49.89C277.474,46.948 278.381,44.854 279.011,43.684C279.642,42.513 280.49,41.557 281.629,40.843C282.782,40.092 284.057,39.69 285.527,39.665C286.975,39.588 288.53,39.896 290.206,40.553C291.77,41.166 293.083,41.982 294.145,42.999C295.221,43.98 295.92,45.156 296.256,46.491C296.63,47.84 296.639,49.132 296.321,50.383C295.988,51.67 295.23,53.822 294.048,56.838L292.077,61.866ZM288.186,49.213C288.726,47.836 289.002,46.913 288.999,46.482C288.996,46.051 288.771,45.748 288.287,45.558C287.877,45.398 287.521,45.43 287.181,45.64C286.878,45.865 286.401,46.752 285.803,48.279L280.416,62.021C279.745,63.734 279.411,64.806 279.362,65.26C279.365,65.691 279.612,66.045 280.097,66.235C280.618,66.44 281.041,66.347 281.379,65.922C281.704,65.533 282.216,64.445 282.887,62.732L288.186,49.213ZM305.248,47.78L317.483,54.419L314.45,60.009L309.458,57.3L306.596,62.574L311.062,64.997L308.2,70.27L303.735,67.848L297.402,79.521L290.16,75.591L305.248,47.78ZM336.214,66.91L332.603,72.146L328.586,69.376L314.235,90.188L307.451,85.51L321.802,64.698L317.818,61.951L321.428,56.715L336.214,66.91ZM364.183,92.203L339.722,112.6L332.279,105.509C334.952,101.37 338.151,96.794 341.907,91.809C339.854,93.499 335.496,96.971 328.833,102.225L321.448,95.189L340.609,69.743L346.401,75.262L339.394,83.834L332.663,92.117C336.674,88.37 342.219,83.653 349.268,77.993L355.466,83.898C354.89,84.676 352.72,87.36 348.901,92.064L341.262,101.415C346.878,96.158 352.588,91.267 358.42,86.712L364.183,92.203ZM375.916,107.812L353.681,130.812L348.545,124.115L352.809,120.341L351.008,117.992L346.209,121.067L341.024,114.307L368.687,98.385L375.916,107.812ZM357.107,116.742C359.72,114.234 362.944,111.208 366.89,107.677C361.586,110.686 357.747,112.975 355.403,114.521L357.107,116.742ZM381.75,116.129L384.673,121.184C386.616,124.543 387.779,126.874 388.203,128.246C388.641,129.564 388.544,130.914 387.911,132.296C387.258,133.644 385.782,135.006 383.462,136.348C381.315,137.589 379.735,138.133 378.708,138.035C377.68,137.936 376.629,137.157 375.589,135.679C376.044,137.264 376.12,138.514 375.812,139.34C375.504,140.165 375.144,140.742 374.705,141.181C374.28,141.565 372.97,142.416 370.754,143.697L363.551,147.862L359.727,141.249L368.834,135.982C370.288,135.141 371.128,134.516 371.334,134.074C371.54,133.631 371.373,132.942 370.812,131.973L358.485,139.102L354.36,131.969L381.75,116.129ZM381.166,125.985L375.071,129.51C375.532,130.306 375.991,130.78 376.379,130.972C376.767,131.163 377.594,130.916 378.806,130.215L380.295,129.354C381.161,128.853 381.669,128.374 381.766,127.902C381.828,127.451 381.626,126.782 381.166,125.985ZM394.047,138.523L399.41,151.152L393.555,153.638L391.414,148.594L385.891,150.939L387.892,155.651L382.369,157.996L380.368,153.284L373.962,156.004L376.307,161.527L370.49,163.997L364.924,150.89L394.047,138.523Z"}),w.createElement("path",{d:"M184.955,228.867C188.721,238.945 188.513,248.571 184.331,257.744C180.149,266.917 173.328,273.271 163.868,276.806C162.694,277.245 161.783,276.599 161.136,274.868C160.466,273.075 160.618,271.785 161.592,270.998C165.55,268.391 167.432,264.376 167.237,258.953C167.118,255.615 165.001,248.444 160.888,237.438C158.162,230.143 155.958,225.188 154.277,222.575C150.745,216.708 146.627,213.702 141.923,213.557C140.501,214.089 139.223,212.84 138.091,209.81C137.167,207.337 137.447,205.823 138.931,205.269C147.834,201.941 156.818,202.6 165.882,207.246C174.969,211.953 181.327,219.16 184.955,228.867ZM154.841,276.691C155.65,278.855 155.467,280.157 154.292,280.596C144.462,284.27 134.975,283.869 125.834,279.394C116.823,275.08 110.469,267.978 106.772,258.085C103.145,248.378 103.217,238.768 106.99,229.254C110.725,219.826 117.074,213.437 126.039,210.086C127.029,209.717 127.959,210.038 128.831,211.051C129.61,211.817 130.208,212.756 130.624,213.869C131.017,214.92 131.112,215.836 130.911,216.616C130.678,217.125 129.963,217.851 128.764,218.792C127.404,219.864 126.471,220.952 125.968,222.057C125.054,223.948 124.673,226.416 124.824,229.46C125.129,232.728 126.46,237.515 128.817,243.822L132.768,254.395C136.096,263.298 139.268,269.053 142.286,271.66C145.11,274.127 148.362,275.097 152.04,274.568C152.395,274.576 152.932,274.692 153.65,274.917C154.144,275.296 154.541,275.888 154.841,276.691ZM242.304,166.531L250.75,188.847L244.327,191.459C243.207,191.102 241.934,189.957 240.507,188.025C238.841,185.829 237.838,184.653 237.498,184.498C232.627,181.457 228.398,180.606 224.812,181.946C223.452,182.455 222.252,181.318 221.212,178.535C220.38,176.31 220.332,174.954 221.066,174.468L222.364,173.983C223.539,173.544 225.332,173.437 227.742,173.664C230.152,173.891 231.851,173.82 232.84,173.45C234.51,172.826 235.717,171.247 236.461,168.714L242.304,166.531ZM263.863,212.907C266.451,219.832 265.806,226.591 261.928,233.184C258.136,239.252 252.716,243.602 245.667,246.237C244.493,246.676 243.374,245.473 242.311,242.629C241.294,239.908 241.254,238.197 242.189,237.495C242.638,237.187 243.283,236.84 244.126,236.455C246.622,235.028 248.416,233.512 249.508,231.907C250.599,230.301 250.832,228.663 250.208,226.994C248.984,223.717 246.104,222.045 241.569,221.978C240.125,221.884 235.883,222.412 228.844,223.563C221.782,224.652 215.452,224.023 209.854,221.676C203.537,219.104 199.281,214.881 197.086,209.008C194.845,203.01 194.983,196.969 197.501,190.885C200.103,184.839 204.403,180.695 210.401,178.454C211.204,178.153 212.042,178.51 212.914,179.523C213.608,180.25 214.129,181.077 214.476,182.004C215.284,184.168 215.171,185.655 214.134,186.465C212.318,187.637 210.964,189.2 210.073,191.154C209.02,193.238 208.864,195.27 209.603,197.248C209.973,198.238 210.694,199.131 211.767,199.928C215.673,202.837 220.643,203.41 226.679,201.648C228.703,201.032 230.917,200.451 233.321,199.906C235.724,199.36 238.366,198.795 241.249,198.211C245.088,198.115 248.954,199.031 252.845,200.959C258.25,203.731 261.922,207.713 263.863,212.907ZM214.54,257.975L205.898,235.415L212.483,232.954C213.603,233.311 214.888,234.486 216.338,236.481C217.857,238.661 218.829,239.848 219.254,240.042C224.063,243.107 228.323,243.946 232.032,242.559C233.393,242.051 234.593,243.188 235.632,245.97C236.464,248.196 236.471,249.533 235.651,249.98C235.489,250.111 235.098,250.292 234.48,250.523C233.244,250.985 231.42,251.103 229.01,250.876C226.6,250.649 224.931,250.709 224.004,251.056C222.335,251.68 221.128,253.258 220.383,255.791L214.54,257.975ZM316.313,138.873L324.758,161.189L318.336,163.801C317.216,163.444 315.942,162.299 314.515,160.366C312.849,158.171 311.846,156.995 311.507,156.84C306.635,153.799 302.407,152.948 298.821,154.288C297.46,154.797 296.26,153.66 295.221,150.877C294.389,148.652 294.34,147.296 295.075,146.81L296.373,146.325C297.548,145.886 299.34,145.779 301.75,146.006C304.16,146.233 305.86,146.161 306.849,145.792C308.518,145.168 309.725,143.589 310.47,141.056L316.313,138.873ZM337.872,185.249C340.46,192.174 339.815,198.933 335.937,205.526C332.145,211.593 326.724,215.944 319.676,218.579C318.501,219.018 317.382,217.815 316.32,214.971C315.303,212.25 315.262,210.539 316.198,209.837C316.646,209.529 317.292,209.182 318.134,208.797C320.631,207.37 322.425,205.854 323.516,204.249C324.607,202.643 324.841,201.005 324.217,199.336C322.992,196.059 320.113,194.387 315.578,194.32C314.133,194.226 309.892,194.754 302.853,195.905C295.791,196.994 289.46,196.365 283.862,194.018C277.546,191.446 273.29,187.223 271.095,181.35C268.854,175.352 268.992,169.311 271.509,163.227C274.112,157.181 278.412,153.037 284.409,150.796C285.213,150.495 286.051,150.852 286.923,151.865C287.617,152.592 288.138,153.419 288.484,154.346C289.293,156.51 289.179,157.997 288.143,158.807C286.326,159.979 284.973,161.542 284.082,163.496C283.029,165.58 282.872,167.612 283.612,169.59C283.981,170.58 284.703,171.473 285.776,172.27C289.681,175.179 294.652,175.752 300.687,173.99C302.712,173.374 304.926,172.793 307.329,172.248C309.732,171.702 312.375,171.137 315.257,170.553C319.097,170.457 322.962,171.373 326.854,173.301C332.258,176.073 335.931,180.055 337.872,185.249ZM288.549,230.317L279.907,207.757L286.491,205.296C287.611,205.653 288.896,206.828 290.346,208.823C291.866,211.003 292.838,212.19 293.262,212.384C298.072,215.449 302.331,216.288 306.041,214.901C307.401,214.393 308.601,215.53 309.641,218.312C310.473,220.538 310.479,221.875 309.66,222.322C309.497,222.453 309.107,222.634 308.489,222.865C307.252,223.327 305.429,223.445 303.019,223.218C300.609,222.991 298.94,223.051 298.013,223.398C296.343,224.022 295.136,225.6 294.392,228.133L288.549,230.317Z"}),w.createElement("path",{d:"M394.606,195.569C388.976,196.699 383.488,193.046 382.359,187.416C381.229,181.786 384.882,176.298 390.512,175.168C396.142,174.038 401.63,177.692 402.76,183.321C403.89,188.951 400.236,194.439 394.606,195.569Z"}),w.createElement("path",{d:"M49.46,175.274C55.091,176.4 58.748,181.886 57.621,187.517C56.495,193.147 51.009,196.804 45.378,195.678C39.748,194.551 36.091,189.066 37.217,183.435C38.344,177.804 43.83,174.148 49.46,175.274Z"})),Hk=()=>o.jsx("div",{className:"flow",children:o.jsxs("div",{className:"mobile block-center pad-t-8 flow",children:[o.jsx(Wk,{className:"brui-logo"}),o.jsx("h1",{className:"mar-t-8",children:"React UI Components"}),o.jsx("h2",{className:"mar-t-none large",children:"For Badger Fans"}),o.jsxs("p",{className:"larger",children:["This is my personal collection of React UI components built around the styles provided by"," ",o.jsx("a",{href:"https://abw.github.io/badger-css",children:"Badger CSS"})]}),o.jsx("div",{className:"text-center",children:o.jsx(Vk,{className:"width-10rem"})}),o.jsx("p",{children:"This is Open Source Software and you're welcome to use it. But be warned that it is also Opiniated and Selfish Software."}),o.jsx("p",{children:"I wrote it for me to help my get my job done.  It provides a solid foundation of React components that allow me to get a new site up and running quickly."}),o.jsx("p",{children:"I don't have the time or inclination to help other people get their jobs done (unless they're my clients, colleagues, family or close friends).  So please be aware that this is effectively unsupported software and you're on your own.  If you're not comfortable with that then you should almost certainly be using one of the many other fine UI toolkits that are available."}),o.jsx("p",{children:"Also note that this collection is supposed to be a starting point, not a final destination. You can use the components and styles provided, but at some point you will probably want or need to dig in and start adding your own code, or modifying the builtin components."}),o.jsx("p",{children:"Everything is modular and themeable, so that's generally quite easy to achieve.  But it requires a reasonable knowledge of React, CSS and SASS.  The documentation is provided as a reference for me (and my colleagues) to use, and it assumes a fairly high level of proficiency in these areas."}),o.jsx("p",{children:"Or to put it another way, if you're expecting someone to hold your hand explaining how to get this up and running, then you've probably come to the wrong place."})]})}),Zk=Object.freeze(Object.defineProperty({__proto__:null,default:Hk},Symbol.toStringTag,{value:"Module"}));/**
 * @remix-run/router v1.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Le(){return Le=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Le.apply(this,arguments)}var Ee;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Ee||(Ee={}));const D1="popstate";function Gk(e){e===void 0&&(e={});function t(r,l){let{pathname:a,search:s,hash:i}=r.location;return pl("",{pathname:a,search:s,hash:i},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function n(r,l){return typeof l=="string"?l:hr(l)}return Yk(t,n,null,e)}function q(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function fr(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Kk(){return Math.random().toString(36).substr(2,8)}function I1(e,t){return{usr:e.state,key:e.key,idx:t}}function pl(e,t,n,r){return n===void 0&&(n=null),Le({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?hn(t):t,{state:n,key:t&&t.key||r||Kk()})}function hr(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function hn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Yk(e,t,n,r){r===void 0&&(r={});let{window:l=document.defaultView,v5Compat:a=!1}=r,s=l.history,i=Ee.Pop,c=null,u=p();u==null&&(u=0,s.replaceState(Le({},s.state,{idx:u}),""));function p(){return(s.state||{idx:null}).idx}function m(){i=Ee.Pop;let E=p(),x=E==null?null:E-u;u=E,c&&c({action:i,location:S.location,delta:x})}function g(E,x){i=Ee.Push;let d=pl(S.location,E,x);n&&n(d,E),u=p()+1;let h=I1(d,u),f=S.createHref(d);try{s.pushState(h,"",f)}catch(v){if(v instanceof DOMException&&v.name==="DataCloneError")throw v;l.location.assign(f)}a&&c&&c({action:i,location:S.location,delta:1})}function b(E,x){i=Ee.Replace;let d=pl(S.location,E,x);n&&n(d,E),u=p();let h=I1(d,u),f=S.createHref(d);s.replaceState(h,"",f),a&&c&&c({action:i,location:S.location,delta:0})}function C(E){let x=l.location.origin!=="null"?l.location.origin:l.location.href,d=typeof E=="string"?E:hr(E);return q(x,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,x)}let S={get action(){return i},get location(){return e(l,s)},listen(E){if(c)throw new Error("A history only accepts one active listener");return l.addEventListener(D1,m),c=E,()=>{l.removeEventListener(D1,m),c=null}},createHref(E){return t(l,E)},createURL:C,encodeLocation(E){let x=C(E);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:g,replace:b,go(E){return s.go(E)}};return S}var Ne;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ne||(Ne={}));const Qk=new Set(["lazy","caseSensitive","path","id","index","children"]);function Xk(e){return e.index===!0}function ac(e,t,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((l,a)=>{let s=[...n,a],i=typeof l.id=="string"?l.id:s.join("-");if(q(l.index!==!0||!l.children,"Cannot specify children on an index route"),q(!r[i],'Found a route id collision on id "'+i+`".  Route id's must be globally unique within Data Router usages`),Xk(l)){let c=Le({},l,t(l),{id:i});return r[i]=c,c}else{let c=Le({},l,t(l),{id:i,children:void 0});return r[i]=c,l.children&&(c.children=ac(l.children,t,s,r)),c}})}function Dr(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?hn(t):t,l=zn(r.pathname||"/",n);if(l==null)return null;let a=Lm(e);Jk(a);let s=null;for(let i=0;s==null&&i<a.length;++i)s=iL(a[i],uL(l));return s}function qk(e,t){let{route:n,pathname:r,params:l}=e;return{id:n.id,pathname:r,params:l,data:t[n.id],handle:n.handle}}function Lm(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let l=(a,s,i)=>{let c={relativePath:i===void 0?a.path||"":i,caseSensitive:a.caseSensitive===!0,childrenIndex:s,route:a};c.relativePath.startsWith("/")&&(q(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=rn([r,c.relativePath]),p=n.concat(c);a.children&&a.children.length>0&&(q(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Lm(a.children,t,p,u)),!(a.path==null&&!a.index)&&t.push({path:u,score:aL(u,a.index),routesMeta:p})};return e.forEach((a,s)=>{var i;if(a.path===""||!((i=a.path)!=null&&i.includes("?")))l(a,s);else for(let c of Tm(a.path))l(a,s,c)}),t}function Tm(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,l=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return l?[a,""]:[a];let s=Tm(r.join("/")),i=[];return i.push(...s.map(c=>c===""?a:[a,c].join("/"))),l&&i.push(...s),i.map(c=>e.startsWith("/")&&c===""?"/":c)}function Jk(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:sL(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const eL=/^:\w+$/,tL=3,nL=2,rL=1,oL=10,lL=-2,z1=e=>e==="*";function aL(e,t){let n=e.split("/"),r=n.length;return n.some(z1)&&(r+=lL),t&&(r+=nL),n.filter(l=>!z1(l)).reduce((l,a)=>l+(eL.test(a)?tL:a===""?rL:oL),r)}function sL(e,t){return e.length===t.length&&e.slice(0,-1).every((r,l)=>r===t[l])?e[e.length-1]-t[t.length-1]:0}function iL(e,t){let{routesMeta:n}=e,r={},l="/",a=[];for(let s=0;s<n.length;++s){let i=n[s],c=s===n.length-1,u=l==="/"?t:t.slice(l.length)||"/",p=sc({path:i.relativePath,caseSensitive:i.caseSensitive,end:c},u);if(!p)return null;Object.assign(r,p.params);let m=i.route;a.push({params:r,pathname:rn([l,p.pathname]),pathnameBase:hL(rn([l,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(l=rn([l,p.pathnameBase]))}return a}function sc(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=cL(e.path,e.caseSensitive,e.end),l=t.match(n);if(!l)return null;let a=l[0],s=a.replace(/(.)\/+$/,"$1"),i=l.slice(1);return{params:r.reduce((u,p,m)=>{let{paramName:g,isOptional:b}=p;if(g==="*"){let S=i[m]||"";s=a.slice(0,a.length-S.length).replace(/(.)\/+$/,"$1")}const C=i[m];return b&&!C?u[g]=void 0:u[g]=dL(C||"",g),u},{}),pathname:a,pathnameBase:s,pattern:e}}function cL(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),fr(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(s,i,c)=>(r.push({paramName:i,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),r]}function uL(e){try{return decodeURI(e)}catch(t){return fr(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function dL(e,t){try{return decodeURIComponent(e)}catch(n){return fr(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function zn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function pL(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:l=""}=typeof e=="string"?hn(e):e;return{pathname:n?n.startsWith("/")?n:fL(n,t):t,search:mL(r),hash:gL(l)}}function fL(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(l=>{l===".."?n.length>1&&n.pop():l!=="."&&n.push(l)}),n.length>1?n.join("/"):"/"}function ei(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ms(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Iu(e,t,n,r){r===void 0&&(r=!1);let l;typeof e=="string"?l=hn(e):(l=Le({},e),q(!l.pathname||!l.pathname.includes("?"),ei("?","pathname","search",l)),q(!l.pathname||!l.pathname.includes("#"),ei("#","pathname","hash",l)),q(!l.search||!l.search.includes("#"),ei("#","search","hash",l)));let a=e===""||l.pathname==="",s=a?"/":l.pathname,i;if(r||s==null)i=n;else{let m=t.length-1;if(s.startsWith("..")){let g=s.split("/");for(;g[0]==="..";)g.shift(),m-=1;l.pathname=g.join("/")}i=m>=0?t[m]:"/"}let c=pL(l,i),u=s&&s!=="/"&&s.endsWith("/"),p=(a||s===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||p)&&(c.pathname+="/"),c}const rn=e=>e.join("/").replace(/\/\/+/g,"/"),hL=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),mL=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,gL=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class zu{constructor(t,n,r,l){l===void 0&&(l=!1),this.status=t,this.statusText=n||"",this.internal=l,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function Em(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Nm=["post","put","patch","delete"],xL=new Set(Nm),vL=["get",...Nm],yL=new Set(vL),CL=new Set([301,302,303,307,308]),jL=new Set([307,308]),ti={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},SL={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},So={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Om=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,bL=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),Rm="remix-router-transitions";function _L(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",r=!n;q(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let l;if(e.mapRouteProperties)l=e.mapRouteProperties;else if(e.detectErrorBoundary){let _=e.detectErrorBoundary;l=k=>({hasErrorBoundary:_(k)})}else l=bL;let a={},s=ac(e.routes,l,void 0,a),i,c=e.basename||"/",u=Le({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_prependBasename:!1},e.future),p=null,m=new Set,g=null,b=null,C=null,S=e.hydrationData!=null,E=Dr(s,e.history.location,c),x=null;if(E==null){let _=yt(404,{pathname:e.history.location.pathname}),{matches:k,route:O}=K1(s);E=k,x={[O.id]:_}}let d=!E.some(_=>_.route.lazy)&&(!E.some(_=>_.route.loader)||e.hydrationData!=null),h,f={historyAction:e.history.action,location:e.history.location,matches:E,initialized:d,navigation:ti,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||x,fetchers:new Map,blockers:new Map},v=Ee.Pop,y=!1,j,L=!1,T=new Map,A=null,F=!1,X=!1,le=[],ye=[],J=new Map,ce=0,xe=-1,N=new Map,$=new Set,B=new Map,z=new Map,G=new Set,Pe=new Map,oe=new Map,Ae=!1;function we(){if(p=e.history.listen(_=>{let{action:k,location:O,delta:D}=_;if(Ae){Ae=!1;return}fr(oe.size===0||D!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let W=Yu({currentLocation:f.location,nextLocation:O,historyAction:k});if(W&&D!=null){Ae=!0,e.history.go(D*-1),Ol(W,{state:"blocked",location:O,proceed(){Ol(W,{state:"proceeding",proceed:void 0,reset:void 0,location:O}),e.history.go(D)},reset(){let H=new Map(f.blockers);H.set(W,So),Ce({blockers:H})}});return}return Tt(k,O)}),n){AL(t,T);let _=()=>$L(t,T);t.addEventListener("pagehide",_),A=()=>t.removeEventListener("pagehide",_)}return f.initialized||Tt(Ee.Pop,f.location),h}function Ue(){p&&p(),A&&A(),m.clear(),j&&j.abort(),f.fetchers.forEach((_,k)=>Nl(k)),f.blockers.forEach((_,k)=>Ku(k))}function Yn(_){return m.add(_),()=>m.delete(_)}function Ce(_,k){f=Le({},f,_);let O=[],D=[];u.v7_fetcherPersist&&f.fetchers.forEach((W,H)=>{W.state==="idle"&&(G.has(H)?D.push(H):O.push(H))}),m.forEach(W=>W(f,{deletedFetchers:D,unstable_viewTransitionOpts:k})),u.v7_fetcherPersist&&(O.forEach(W=>f.fetchers.delete(W)),D.forEach(W=>Nl(W)))}function Yt(_,k){var O,D;let W=f.actionData!=null&&f.navigation.formMethod!=null&&Mt(f.navigation.formMethod)&&f.navigation.state==="loading"&&((O=_.state)==null?void 0:O._isRedirect)!==!0,H;k.actionData?Object.keys(k.actionData).length>0?H=k.actionData:H=null:W?H=f.actionData:H=null;let Q=k.loaderData?G1(f.loaderData,k.loaderData,k.matches||[],k.errors):f.loaderData,Z=f.blockers;Z.size>0&&(Z=new Map(Z),Z.forEach((je,ne)=>Z.set(ne,So)));let U=y===!0||f.navigation.formMethod!=null&&Mt(f.navigation.formMethod)&&((D=_.state)==null?void 0:D._isRedirect)!==!0;i&&(s=i,i=void 0),F||v===Ee.Pop||(v===Ee.Push?e.history.push(_,_.state):v===Ee.Replace&&e.history.replace(_,_.state));let ue;if(v===Ee.Pop){let je=T.get(f.location.pathname);je&&je.has(_.pathname)?ue={currentLocation:f.location,nextLocation:_}:T.has(_.pathname)&&(ue={currentLocation:_,nextLocation:f.location})}else if(L){let je=T.get(f.location.pathname);je?je.add(_.pathname):(je=new Set([_.pathname]),T.set(f.location.pathname,je)),ue={currentLocation:f.location,nextLocation:_}}Ce(Le({},k,{actionData:H,loaderData:Q,historyAction:v,location:_,initialized:!0,navigation:ti,revalidation:"idle",restoreScrollPosition:Xu(_,k.matches||f.matches),preventScrollReset:U,blockers:Z}),ue),v=Ee.Pop,y=!1,L=!1,F=!1,X=!1,le=[],ye=[]}async function Qn(_,k){if(typeof _=="number"){e.history.go(_);return}let O=ic(f.location,f.matches,c,u.v7_prependBasename,_,k==null?void 0:k.fromRouteId,k==null?void 0:k.relative),{path:D,submission:W,error:H}=F1(u.v7_normalizeFormMethod,!1,O,k),Q=f.location,Z=pl(f.location,D,k&&k.state);Z=Le({},Z,e.history.encodeLocation(Z));let U=k&&k.replace!=null?k.replace:void 0,ue=Ee.Push;U===!0?ue=Ee.Replace:U===!1||W!=null&&Mt(W.formMethod)&&W.formAction===f.location.pathname+f.location.search&&(ue=Ee.Replace);let je=k&&"preventScrollReset"in k?k.preventScrollReset===!0:void 0,ne=Yu({currentLocation:Q,nextLocation:Z,historyAction:ue});if(ne){Ol(ne,{state:"blocked",location:Z,proceed(){Ol(ne,{state:"proceeding",proceed:void 0,reset:void 0,location:Z}),Qn(_,k)},reset(){let de=new Map(f.blockers);de.set(ne,So),Ce({blockers:de})}});return}return await Tt(ue,Z,{submission:W,pendingError:H,preventScrollReset:je,replace:k&&k.replace,enableViewTransition:k&&k.unstable_viewTransition})}function xs(){if(vs(),Ce({revalidation:"loading"}),f.navigation.state!=="submitting"){if(f.navigation.state==="idle"){Tt(f.historyAction,f.location,{startUninterruptedRevalidation:!0});return}Tt(v||f.historyAction,f.navigation.location,{overrideNavigation:f.navigation})}}async function Tt(_,k,O){j&&j.abort(),j=null,v=_,F=(O&&O.startUninterruptedRevalidation)===!0,n4(f.location,f.matches),y=(O&&O.preventScrollReset)===!0,L=(O&&O.enableViewTransition)===!0;let D=i||s,W=O&&O.overrideNavigation,H=Dr(D,k,c);if(!H){let de=yt(404,{pathname:k.pathname}),{matches:$e,route:Xn}=K1(D);ys(),Yt(k,{matches:$e,loaderData:{},errors:{[Xn.id]:de}});return}if(f.initialized&&!X&&EL(f.location,k)&&!(O&&O.submission&&Mt(O.submission.formMethod))){Yt(k,{matches:H});return}j=new AbortController;let Q=_o(e.history,k,j.signal,O&&O.submission),Z,U;if(O&&O.pendingError)U={[Zo(H).route.id]:O.pendingError};else if(O&&O.submission&&Mt(O.submission.formMethod)){let de=await Km(Q,k,O.submission,H,{replace:O.replace});if(de.shortCircuited)return;Z=de.pendingActionData,U=de.pendingActionError,W=ni(k,O.submission),Q=new Request(Q.url,{signal:Q.signal})}let{shortCircuited:ue,loaderData:je,errors:ne}=await Ym(Q,k,H,W,O&&O.submission,O&&O.fetcherSubmission,O&&O.replace,Z,U);ue||(j=null,Yt(k,Le({matches:H},Z?{actionData:Z}:{},{loaderData:je,errors:ne})))}async function Km(_,k,O,D,W){W===void 0&&(W={}),vs();let H=ML(k,O);Ce({navigation:H});let Q,Z=uc(D,k);if(!Z.route.action&&!Z.route.lazy)Q={type:Ne.error,error:yt(405,{method:_.method,pathname:k.pathname,routeId:Z.route.id})};else if(Q=await bo("action",_,Z,D,a,l,c),_.signal.aborted)return{shortCircuited:!0};if(Hr(Q)){let U;return W&&W.replace!=null?U=W.replace:U=Q.location===f.location.pathname+f.location.search,await io(f,Q,{submission:O,replace:U}),{shortCircuited:!0}}if(Go(Q)){let U=Zo(D,Z.route.id);return(W&&W.replace)!==!0&&(v=Ee.Push),{pendingActionData:{},pendingActionError:{[U.route.id]:Q.error}}}if(lr(Q))throw yt(400,{type:"defer-action"});return{pendingActionData:{[Z.route.id]:Q.data}}}async function Ym(_,k,O,D,W,H,Q,Z,U){let ue=D||ni(k,W),je=W||H||X1(ue),ne=i||s,[de,$e]=U1(e.history,f,O,je,k,X,le,ye,B,$,ne,c,Z,U);if(ys(se=>!(O&&O.some(Et=>Et.route.id===se))||de&&de.some(Et=>Et.route.id===se)),xe=++ce,de.length===0&&$e.length===0){let se=Zu();return Yt(k,Le({matches:O,loaderData:{},errors:U||null},Z?{actionData:Z}:{},se?{fetchers:new Map(f.fetchers)}:{})),{shortCircuited:!0}}if(!F){$e.forEach(Et=>{let xn=f.fetchers.get(Et.key),Te=wo(void 0,xn?xn.data:void 0);f.fetchers.set(Et.key,Te)});let se=Z||f.actionData;Ce(Le({navigation:ue},se?Object.keys(se).length===0?{actionData:null}:{actionData:se}:{},$e.length>0?{fetchers:new Map(f.fetchers)}:{}))}$e.forEach(se=>{J.has(se.key)&&mn(se.key),se.controller&&J.set(se.key,se.controller)});let Xn=()=>$e.forEach(se=>mn(se.key));j&&j.signal.addEventListener("abort",Xn);let{results:qn,loaderResults:uo,fetcherResults:Cs}=await Vu(f.matches,O,de,$e,_);if(_.signal.aborted)return{shortCircuited:!0};j&&j.signal.removeEventListener("abort",Xn),$e.forEach(se=>J.delete(se.key));let Qt=Y1(qn);if(Qt){if(Qt.idx>=de.length){let se=$e[Qt.idx-de.length].key;$.add(se)}return await io(f,Qt.result,{replace:Q}),{shortCircuited:!0}}let{loaderData:gn,errors:Rl}=Z1(f,O,de,uo,U,$e,Cs,Pe);Pe.forEach((se,Et)=>{se.subscribe(xn=>{(xn||se.done)&&Pe.delete(Et)})});let js=Zu(),Ss=Gu(xe),bs=js||Ss||$e.length>0;return Le({loaderData:gn,errors:Rl},bs?{fetchers:new Map(f.fetchers)}:{})}function Wu(_){return u.v7_fetcherPersist&&(z.set(_,(z.get(_)||0)+1),G.has(_)&&G.delete(_)),f.fetchers.get(_)||SL}function Qm(_,k,O,D){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");J.has(_)&&mn(_);let W=i||s,H=ic(f.location,f.matches,c,u.v7_prependBasename,O,k,D==null?void 0:D.relative),Q=Dr(W,H,c);if(!Q){co(_,k,yt(404,{pathname:H}));return}let{path:Z,submission:U,error:ue}=F1(u.v7_normalizeFormMethod,!0,H,D);if(ue){co(_,k,ue);return}let je=uc(Q,Z);if(y=(D&&D.preventScrollReset)===!0,U&&Mt(U.formMethod)){Xm(_,k,Z,je,Q,U);return}B.set(_,{routeId:k,path:Z}),qm(_,k,Z,je,Q,U)}async function Xm(_,k,O,D,W,H){if(vs(),B.delete(_),!D.route.action&&!D.route.lazy){let Te=yt(405,{method:H.formMethod,pathname:O,routeId:k});co(_,k,Te);return}let Q=f.fetchers.get(_),Z=PL(H,Q);f.fetchers.set(_,Z),Ce({fetchers:new Map(f.fetchers)});let U=new AbortController,ue=_o(e.history,O,U.signal,H);J.set(_,U);let je=ce,ne=await bo("action",ue,D,W,a,l,c);if(ue.signal.aborted){J.get(_)===U&&J.delete(_);return}if(G.has(_)){f.fetchers.set(_,jn(void 0)),Ce({fetchers:new Map(f.fetchers)});return}if(Hr(ne))if(J.delete(_),xe>je){let Te=jn(void 0);f.fetchers.set(_,Te),Ce({fetchers:new Map(f.fetchers)});return}else{$.add(_);let Te=wo(H);return f.fetchers.set(_,Te),Ce({fetchers:new Map(f.fetchers)}),io(f,ne,{fetcherSubmission:H})}if(Go(ne)){co(_,k,ne.error);return}if(lr(ne))throw yt(400,{type:"defer-action"});let de=f.navigation.location||f.location,$e=_o(e.history,de,U.signal),Xn=i||s,qn=f.navigation.state!=="idle"?Dr(Xn,f.navigation.location,c):f.matches;q(qn,"Didn't find any matches after fetcher action");let uo=++ce;N.set(_,uo);let Cs=wo(H,ne.data);f.fetchers.set(_,Cs);let[Qt,gn]=U1(e.history,f,qn,H,de,X,le,ye,B,$,Xn,c,{[D.route.id]:ne.data},void 0);gn.filter(Te=>Te.key!==_).forEach(Te=>{let po=Te.key,qu=f.fetchers.get(po),o4=wo(void 0,qu?qu.data:void 0);f.fetchers.set(po,o4),J.has(po)&&mn(po),Te.controller&&J.set(po,Te.controller)}),Ce({fetchers:new Map(f.fetchers)});let Rl=()=>gn.forEach(Te=>mn(Te.key));U.signal.addEventListener("abort",Rl);let{results:js,loaderResults:Ss,fetcherResults:bs}=await Vu(f.matches,qn,Qt,gn,$e);if(U.signal.aborted)return;U.signal.removeEventListener("abort",Rl),N.delete(_),J.delete(_),gn.forEach(Te=>J.delete(Te.key));let se=Y1(js);if(se){if(se.idx>=Qt.length){let Te=gn[se.idx-Qt.length].key;$.add(Te)}return io(f,se.result)}let{loaderData:Et,errors:xn}=Z1(f,f.matches,Qt,Ss,void 0,gn,bs,Pe);if(f.fetchers.has(_)){let Te=jn(ne.data);f.fetchers.set(_,Te)}Gu(uo),f.navigation.state==="loading"&&uo>xe?(q(v,"Expected pending action"),j&&j.abort(),Yt(f.navigation.location,{matches:qn,loaderData:Et,errors:xn,fetchers:new Map(f.fetchers)})):(Ce({errors:xn,loaderData:G1(f.loaderData,Et,qn,xn),fetchers:new Map(f.fetchers)}),X=!1)}async function qm(_,k,O,D,W,H){let Q=f.fetchers.get(_),Z=wo(H,Q?Q.data:void 0);f.fetchers.set(_,Z),Ce({fetchers:new Map(f.fetchers)});let U=new AbortController,ue=_o(e.history,O,U.signal);J.set(_,U);let je=ce,ne=await bo("loader",ue,D,W,a,l,c);if(lr(ne)&&(ne=await Am(ne,ue.signal,!0)||ne),J.get(_)===U&&J.delete(_),ue.signal.aborted)return;if(G.has(_)){f.fetchers.set(_,jn(void 0)),Ce({fetchers:new Map(f.fetchers)});return}if(Hr(ne))if(xe>je){let $e=jn(void 0);f.fetchers.set(_,$e),Ce({fetchers:new Map(f.fetchers)});return}else{$.add(_),await io(f,ne);return}if(Go(ne)){co(_,k,ne.error);return}q(!lr(ne),"Unhandled fetcher deferred data");let de=jn(ne.data);f.fetchers.set(_,de),Ce({fetchers:new Map(f.fetchers)})}async function io(_,k,O){let{submission:D,fetcherSubmission:W,replace:H}=O===void 0?{}:O;k.revalidate&&(X=!0);let Q=pl(_.location,k.location,{_isRedirect:!0});if(q(Q,"Expected a location on the redirect navigation"),n){let de=!1;if(k.reloadDocument)de=!0;else if(Om.test(k.location)){const $e=e.history.createURL(k.location);de=$e.origin!==t.location.origin||zn($e.pathname,c)==null}if(de){H?t.location.replace(k.location):t.location.assign(k.location);return}}j=null;let Z=H===!0?Ee.Replace:Ee.Push,{formMethod:U,formAction:ue,formEncType:je}=_.navigation;!D&&!W&&U&&ue&&je&&(D=X1(_.navigation));let ne=D||W;if(jL.has(k.status)&&ne&&Mt(ne.formMethod))await Tt(Z,Q,{submission:Le({},ne,{formAction:k.location}),preventScrollReset:y});else{let de=ni(Q,D);await Tt(Z,Q,{overrideNavigation:de,fetcherSubmission:W,preventScrollReset:y})}}async function Vu(_,k,O,D,W){let H=await Promise.all([...O.map(U=>bo("loader",W,U,k,a,l,c)),...D.map(U=>U.matches&&U.match&&U.controller?bo("loader",_o(e.history,U.path,U.controller.signal),U.match,U.matches,a,l,c):{type:Ne.error,error:yt(404,{pathname:U.path})})]),Q=H.slice(0,O.length),Z=H.slice(O.length);return await Promise.all([Q1(_,O,Q,Q.map(()=>W.signal),!1,f.loaderData),Q1(_,D.map(U=>U.match),Z,D.map(U=>U.controller?U.controller.signal:null),!0)]),{results:H,loaderResults:Q,fetcherResults:Z}}function vs(){X=!0,le.push(...ys()),B.forEach((_,k)=>{J.has(k)&&(ye.push(k),mn(k))})}function co(_,k,O){let D=Zo(f.matches,k);Nl(_),Ce({errors:{[D.route.id]:O},fetchers:new Map(f.fetchers)})}function Nl(_){let k=f.fetchers.get(_);J.has(_)&&!(k&&k.state==="loading"&&N.has(_))&&mn(_),B.delete(_),N.delete(_),$.delete(_),G.delete(_),f.fetchers.delete(_)}function Jm(_){if(u.v7_fetcherPersist){let k=(z.get(_)||0)-1;k<=0?(z.delete(_),G.add(_)):z.set(_,k)}else Nl(_);Ce({fetchers:new Map(f.fetchers)})}function mn(_){let k=J.get(_);q(k,"Expected fetch controller: "+_),k.abort(),J.delete(_)}function Hu(_){for(let k of _){let O=Wu(k),D=jn(O.data);f.fetchers.set(k,D)}}function Zu(){let _=[],k=!1;for(let O of $){let D=f.fetchers.get(O);q(D,"Expected fetcher: "+O),D.state==="loading"&&($.delete(O),_.push(O),k=!0)}return Hu(_),k}function Gu(_){let k=[];for(let[O,D]of N)if(D<_){let W=f.fetchers.get(O);q(W,"Expected fetcher: "+O),W.state==="loading"&&(mn(O),N.delete(O),k.push(O))}return Hu(k),k.length>0}function e4(_,k){let O=f.blockers.get(_)||So;return oe.get(_)!==k&&oe.set(_,k),O}function Ku(_){f.blockers.delete(_),oe.delete(_)}function Ol(_,k){let O=f.blockers.get(_)||So;q(O.state==="unblocked"&&k.state==="blocked"||O.state==="blocked"&&k.state==="blocked"||O.state==="blocked"&&k.state==="proceeding"||O.state==="blocked"&&k.state==="unblocked"||O.state==="proceeding"&&k.state==="unblocked","Invalid blocker state transition: "+O.state+" -> "+k.state);let D=new Map(f.blockers);D.set(_,k),Ce({blockers:D})}function Yu(_){let{currentLocation:k,nextLocation:O,historyAction:D}=_;if(oe.size===0)return;oe.size>1&&fr(!1,"A router only supports one blocker at a time");let W=Array.from(oe.entries()),[H,Q]=W[W.length-1],Z=f.blockers.get(H);if(!(Z&&Z.state==="proceeding")&&Q({currentLocation:k,nextLocation:O,historyAction:D}))return H}function ys(_){let k=[];return Pe.forEach((O,D)=>{(!_||_(D))&&(O.cancel(),k.push(D),Pe.delete(D))}),k}function t4(_,k,O){if(g=_,C=k,b=O||null,!S&&f.navigation===ti){S=!0;let D=Xu(f.location,f.matches);D!=null&&Ce({restoreScrollPosition:D})}return()=>{g=null,C=null,b=null}}function Qu(_,k){return b&&b(_,k.map(D=>qk(D,f.loaderData)))||_.key}function n4(_,k){if(g&&C){let O=Qu(_,k);g[O]=C()}}function Xu(_,k){if(g){let O=Qu(_,k),D=g[O];if(typeof D=="number")return D}return null}function r4(_){a={},i=ac(_,l,void 0,a)}return h={get basename(){return c},get state(){return f},get routes(){return s},get window(){return t},initialize:we,subscribe:Yn,enableScrollRestoration:t4,navigate:Qn,fetch:Qm,revalidate:xs,createHref:_=>e.history.createHref(_),encodeLocation:_=>e.history.encodeLocation(_),getFetcher:Wu,deleteFetcher:Jm,dispose:Ue,getBlocker:e4,deleteBlocker:Ku,_internalFetchControllers:J,_internalActiveDeferreds:Pe,_internalSetRoutes:r4},h}function wL(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function ic(e,t,n,r,l,a,s){let i,c;if(a!=null&&s!=="path"){i=[];for(let p of t)if(i.push(p),p.route.id===a){c=p;break}}else i=t,c=t[t.length-1];let u=Iu(l||".",ms(i).map(p=>p.pathnameBase),zn(e.pathname,n)||e.pathname,s==="path");return l==null&&(u.search=e.search,u.hash=e.hash),(l==null||l===""||l===".")&&c&&c.route.index&&!Fu(u.search)&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(u.pathname=u.pathname==="/"?n:rn([n,u.pathname])),hr(u)}function F1(e,t,n,r){if(!r||!wL(r))return{path:n};if(r.formMethod&&!RL(r.formMethod))return{path:n,error:yt(405,{method:r.formMethod})};let l=()=>({path:n,error:yt(400,{type:"invalid-body"})}),a=r.formMethod||"get",s=e?a.toUpperCase():a.toLowerCase(),i=Pm(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!Mt(s))return l();let g=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((b,C)=>{let[S,E]=C;return""+b+S+"="+E+`
`},""):String(r.body);return{path:n,submission:{formMethod:s,formAction:i,formEncType:r.formEncType,formData:void 0,json:void 0,text:g}}}else if(r.formEncType==="application/json"){if(!Mt(s))return l();try{let g=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:s,formAction:i,formEncType:r.formEncType,formData:void 0,json:g,text:void 0}}}catch{return l()}}}q(typeof FormData=="function","FormData is not available in this environment");let c,u;if(r.formData)c=cc(r.formData),u=r.formData;else if(r.body instanceof FormData)c=cc(r.body),u=r.body;else if(r.body instanceof URLSearchParams)c=r.body,u=H1(c);else if(r.body==null)c=new URLSearchParams,u=new FormData;else try{c=new URLSearchParams(r.body),u=H1(c)}catch{return l()}let p={formMethod:s,formAction:i,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(Mt(p.formMethod))return{path:n,submission:p};let m=hn(n);return t&&m.search&&Fu(m.search)&&c.append("index",""),m.search="?"+c,{path:hr(m),submission:p}}function kL(e,t){let n=e;if(t){let r=e.findIndex(l=>l.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function U1(e,t,n,r,l,a,s,i,c,u,p,m,g,b){let C=b?Object.values(b)[0]:g?Object.values(g)[0]:void 0,S=e.createURL(t.location),E=e.createURL(l),x=b?Object.keys(b)[0]:void 0,h=kL(n,x).filter((v,y)=>{if(v.route.lazy)return!0;if(v.route.loader==null)return!1;if(LL(t.loaderData,t.matches[y],v)||s.some(T=>T===v.route.id))return!0;let j=t.matches[y],L=v;return W1(v,Le({currentUrl:S,currentParams:j.params,nextUrl:E,nextParams:L.params},r,{actionResult:C,defaultShouldRevalidate:a||S.pathname+S.search===E.pathname+E.search||S.search!==E.search||Mm(j,L)}))}),f=[];return c.forEach((v,y)=>{if(!n.some(F=>F.route.id===v.routeId))return;let j=Dr(p,v.path,m);if(!j){f.push({key:y,routeId:v.routeId,path:v.path,matches:null,match:null,controller:null});return}let L=t.fetchers.get(y),T=uc(j,v.path),A=!1;u.has(y)?A=!1:i.includes(y)?A=!0:L&&L.state!=="idle"&&L.data===void 0?A=a:A=W1(T,Le({currentUrl:S,currentParams:t.matches[t.matches.length-1].params,nextUrl:E,nextParams:n[n.length-1].params},r,{actionResult:C,defaultShouldRevalidate:a})),A&&f.push({key:y,routeId:v.routeId,path:v.path,matches:j,match:T,controller:new AbortController})}),[h,f]}function LL(e,t,n){let r=!t||n.route.id!==t.route.id,l=e[n.route.id]===void 0;return r||l}function Mm(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function W1(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function V1(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let l=n[e.id];q(l,"No route found in manifest");let a={};for(let s in r){let c=l[s]!==void 0&&s!=="hasErrorBoundary";fr(!c,'Route "'+l.id+'" has a static property "'+s+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+s+'" will be ignored.')),!c&&!Qk.has(s)&&(a[s]=r[s])}Object.assign(l,a),Object.assign(l,Le({},t(l),{lazy:void 0}))}async function bo(e,t,n,r,l,a,s,i){i===void 0&&(i={});let c,u,p,m=C=>{let S,E=new Promise((x,d)=>S=d);return p=()=>S(),t.signal.addEventListener("abort",p),Promise.race([C({request:t,params:n.params,context:i.requestContext}),E])};try{let C=n.route[e];if(n.route.lazy)if(C){let S,E=await Promise.all([m(C).catch(x=>{S=x}),V1(n.route,a,l)]);if(S)throw S;u=E[0]}else if(await V1(n.route,a,l),C=n.route[e],C)u=await m(C);else if(e==="action"){let S=new URL(t.url),E=S.pathname+S.search;throw yt(405,{method:t.method,pathname:E,routeId:n.route.id})}else return{type:Ne.data,data:void 0};else if(C)u=await m(C);else{let S=new URL(t.url),E=S.pathname+S.search;throw yt(404,{pathname:E})}q(u!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(C){c=Ne.error,u=C}finally{p&&t.signal.removeEventListener("abort",p)}if(OL(u)){let C=u.status;if(CL.has(C)){let x=u.headers.get("Location");if(q(x,"Redirects returned/thrown from loaders/actions must have a Location header"),!Om.test(x))x=ic(new URL(t.url),r.slice(0,r.indexOf(n)+1),s,!0,x);else if(!i.isStaticRequest){let d=new URL(t.url),h=x.startsWith("//")?new URL(d.protocol+x):new URL(x),f=zn(h.pathname,s)!=null;h.origin===d.origin&&f&&(x=h.pathname+h.search+h.hash)}if(i.isStaticRequest)throw u.headers.set("Location",x),u;return{type:Ne.redirect,status:C,location:x,revalidate:u.headers.get("X-Remix-Revalidate")!==null,reloadDocument:u.headers.get("X-Remix-Reload-Document")!==null}}if(i.isRouteRequest)throw{type:c===Ne.error?Ne.error:Ne.data,response:u};let S,E=u.headers.get("Content-Type");return E&&/\bapplication\/json\b/.test(E)?S=await u.json():S=await u.text(),c===Ne.error?{type:c,error:new zu(C,u.statusText,S),headers:u.headers}:{type:Ne.data,data:S,statusCode:u.status,headers:u.headers}}if(c===Ne.error)return{type:c,error:u};if(NL(u)){var g,b;return{type:Ne.deferred,deferredData:u,statusCode:(g=u.init)==null?void 0:g.status,headers:((b=u.init)==null?void 0:b.headers)&&new Headers(u.init.headers)}}return{type:Ne.data,data:u}}function _o(e,t,n,r){let l=e.createURL(Pm(t)).toString(),a={signal:n};if(r&&Mt(r.formMethod)){let{formMethod:s,formEncType:i}=r;a.method=s.toUpperCase(),i==="application/json"?(a.headers=new Headers({"Content-Type":i}),a.body=JSON.stringify(r.json)):i==="text/plain"?a.body=r.text:i==="application/x-www-form-urlencoded"&&r.formData?a.body=cc(r.formData):a.body=r.formData}return new Request(l,a)}function cc(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,typeof r=="string"?r:r.name);return t}function H1(e){let t=new FormData;for(let[n,r]of e.entries())t.append(n,r);return t}function TL(e,t,n,r,l){let a={},s=null,i,c=!1,u={};return n.forEach((p,m)=>{let g=t[m].route.id;if(q(!Hr(p),"Cannot handle redirect results in processLoaderData"),Go(p)){let b=Zo(e,g),C=p.error;r&&(C=Object.values(r)[0],r=void 0),s=s||{},s[b.route.id]==null&&(s[b.route.id]=C),a[g]=void 0,c||(c=!0,i=Em(p.error)?p.error.status:500),p.headers&&(u[g]=p.headers)}else lr(p)?(l.set(g,p.deferredData),a[g]=p.deferredData.data):a[g]=p.data,p.statusCode!=null&&p.statusCode!==200&&!c&&(i=p.statusCode),p.headers&&(u[g]=p.headers)}),r&&(s=r,a[Object.keys(r)[0]]=void 0),{loaderData:a,errors:s,statusCode:i||200,loaderHeaders:u}}function Z1(e,t,n,r,l,a,s,i){let{loaderData:c,errors:u}=TL(t,n,r,l,i);for(let p=0;p<a.length;p++){let{key:m,match:g,controller:b}=a[p];q(s!==void 0&&s[p]!==void 0,"Did not find corresponding fetcher result");let C=s[p];if(!(b&&b.signal.aborted))if(Go(C)){let S=Zo(e.matches,g==null?void 0:g.route.id);u&&u[S.route.id]||(u=Le({},u,{[S.route.id]:C.error})),e.fetchers.delete(m)}else if(Hr(C))q(!1,"Unhandled fetcher revalidation redirect");else if(lr(C))q(!1,"Unhandled fetcher deferred data");else{let S=jn(C.data);e.fetchers.set(m,S)}}return{loaderData:c,errors:u}}function G1(e,t,n,r){let l=Le({},t);for(let a of n){let s=a.route.id;if(t.hasOwnProperty(s)?t[s]!==void 0&&(l[s]=t[s]):e[s]!==void 0&&a.route.loader&&(l[s]=e[s]),r&&r.hasOwnProperty(s))break}return l}function Zo(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function K1(e){let t=e.length===1?e[0]:e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function yt(e,t){let{pathname:n,routeId:r,method:l,type:a}=t===void 0?{}:t,s="Unknown Server Error",i="Unknown @remix-run/router error";return e===400?(s="Bad Request",l&&n&&r?i="You made a "+l+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":a==="defer-action"?i="defer() is not supported in actions":a==="invalid-body"&&(i="Unable to encode submission body")):e===403?(s="Forbidden",i='Route "'+r+'" does not match URL "'+n+'"'):e===404?(s="Not Found",i='No route matches URL "'+n+'"'):e===405&&(s="Method Not Allowed",l&&n&&r?i="You made a "+l.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":l&&(i='Invalid request method "'+l.toUpperCase()+'"')),new zu(e||500,s,new Error(i),!0)}function Y1(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(Hr(n))return{result:n,idx:t}}}function Pm(e){let t=typeof e=="string"?hn(e):e;return hr(Le({},t,{hash:""}))}function EL(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function lr(e){return e.type===Ne.deferred}function Go(e){return e.type===Ne.error}function Hr(e){return(e&&e.type)===Ne.redirect}function NL(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function OL(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function RL(e){return yL.has(e.toLowerCase())}function Mt(e){return xL.has(e.toLowerCase())}async function Q1(e,t,n,r,l,a){for(let s=0;s<n.length;s++){let i=n[s],c=t[s];if(!c)continue;let u=e.find(m=>m.route.id===c.route.id),p=u!=null&&!Mm(u,c)&&(a&&a[c.route.id])!==void 0;if(lr(i)&&(l||p)){let m=r[s];q(m,"Expected an AbortSignal for revalidating fetcher deferred result"),await Am(i,m,l).then(g=>{g&&(n[s]=g||n[s])})}}}async function Am(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:Ne.data,data:e.deferredData.unwrappedData}}catch(l){return{type:Ne.error,error:l}}return{type:Ne.data,data:e.deferredData.data}}}function Fu(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function uc(e,t){let n=typeof t=="string"?hn(t).search:t.search;if(e[e.length-1].route.index&&Fu(n||""))return e[e.length-1];let r=ms(e);return r[r.length-1]}function X1(e){let{formMethod:t,formAction:n,formEncType:r,text:l,formData:a,json:s}=e;if(!(!t||!n||!r)){if(l!=null)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:void 0,text:l};if(a!=null)return{formMethod:t,formAction:n,formEncType:r,formData:a,json:void 0,text:void 0};if(s!==void 0)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:s,text:void 0}}}function ni(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function ML(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function wo(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function PL(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function jn(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function AL(e,t){try{let n=e.sessionStorage.getItem(Rm);if(n){let r=JSON.parse(n);for(let[l,a]of Object.entries(r||{}))a&&Array.isArray(a)&&t.set(l,new Set(a||[]))}}catch{}}function $L(e,t){if(t.size>0){let n={};for(let[r,l]of t)n[r]=[...l];try{e.sessionStorage.setItem(Rm,JSON.stringify(n))}catch(r){fr(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Za(){return Za=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Za.apply(this,arguments)}const kl=w.createContext(null),Uu=w.createContext(null),jr=w.createContext(null),gs=w.createContext(null),Kn=w.createContext({outlet:null,matches:[],isDataRoute:!1}),$m=w.createContext(null);function BL(e,t){let{relative:n}=t===void 0?{}:t;Ll()||q(!1);let{basename:r,navigator:l}=w.useContext(jr),{hash:a,pathname:s,search:i}=Tl(e,{relative:n}),c=s;return r!=="/"&&(c=s==="/"?r:rn([r,s])),l.createHref({pathname:c,search:i,hash:a})}function Ll(){return w.useContext(gs)!=null}function so(){return Ll()||q(!1),w.useContext(gs).location}function Bm(e){w.useContext(jr).static||w.useLayoutEffect(e)}function DL(){let{isDataRoute:e}=w.useContext(Kn);return e?qL():IL()}function IL(){Ll()||q(!1);let e=w.useContext(kl),{basename:t,navigator:n}=w.useContext(jr),{matches:r}=w.useContext(Kn),{pathname:l}=so(),a=JSON.stringify(ms(r).map(c=>c.pathnameBase)),s=w.useRef(!1);return Bm(()=>{s.current=!0}),w.useCallback(function(c,u){if(u===void 0&&(u={}),!s.current)return;if(typeof c=="number"){n.go(c);return}let p=Iu(c,JSON.parse(a),l,u.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:rn([t,p.pathname])),(u.replace?n.replace:n.push)(p,u.state,u)},[t,n,a,l,e])}const zL=w.createContext(null);function FL(e){let t=w.useContext(Kn).outlet;return t&&w.createElement(zL.Provider,{value:e},t)}function Tl(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=w.useContext(Kn),{pathname:l}=so(),a=JSON.stringify(ms(r).map(s=>s.pathnameBase));return w.useMemo(()=>Iu(e,JSON.parse(a),l,n==="path"),[e,a,l,n])}function UL(e,t,n){Ll()||q(!1);let{navigator:r}=w.useContext(jr),{matches:l}=w.useContext(Kn),a=l[l.length-1],s=a?a.params:{};a&&a.pathname;let i=a?a.pathnameBase:"/";a&&a.route;let c=so(),u;if(t){var p;let S=typeof t=="string"?hn(t):t;i==="/"||(p=S.pathname)!=null&&p.startsWith(i)||q(!1),u=S}else u=c;let m=u.pathname||"/",g=i==="/"?m:m.slice(i.length)||"/",b=Dr(e,{pathname:g}),C=GL(b&&b.map(S=>Object.assign({},S,{params:Object.assign({},s,S.params),pathname:rn([i,r.encodeLocation?r.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?i:rn([i,r.encodeLocation?r.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),l,n);return t&&C?w.createElement(gs.Provider,{value:{location:Za({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Ee.Pop}},C):C}function WL(){let e=XL(),t=Em(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},a=null;return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},t),n?w.createElement("pre",{style:l},n):null,a)}const VL=w.createElement(WL,null);class HL extends w.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?w.createElement(Kn.Provider,{value:this.props.routeContext},w.createElement($m.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ZL(e){let{routeContext:t,match:n,children:r}=e,l=w.useContext(kl);return l&&l.static&&l.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=n.route.id),w.createElement(Kn.Provider,{value:t},r)}function GL(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var l;if((l=n)!=null&&l.errors)e=n.matches;else return null}let a=e,s=(r=n)==null?void 0:r.errors;if(s!=null){let i=a.findIndex(c=>c.route.id&&(s==null?void 0:s[c.route.id]));i>=0||q(!1),a=a.slice(0,Math.min(a.length,i+1))}return a.reduceRight((i,c,u)=>{let p=c.route.id?s==null?void 0:s[c.route.id]:null,m=null;n&&(m=c.route.errorElement||VL);let g=t.concat(a.slice(0,u+1)),b=()=>{let C;return p?C=m:c.route.Component?C=w.createElement(c.route.Component,null):c.route.element?C=c.route.element:C=i,w.createElement(ZL,{match:c,routeContext:{outlet:i,matches:g,isDataRoute:n!=null},children:C})};return n&&(c.route.ErrorBoundary||c.route.errorElement||u===0)?w.createElement(HL,{location:n.location,revalidation:n.revalidation,component:m,error:p,children:b(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):b()},null)}var Dm=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Dm||{}),Ga=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Ga||{});function KL(e){let t=w.useContext(kl);return t||q(!1),t}function YL(e){let t=w.useContext(Uu);return t||q(!1),t}function QL(e){let t=w.useContext(Kn);return t||q(!1),t}function Im(e){let t=QL(),n=t.matches[t.matches.length-1];return n.route.id||q(!1),n.route.id}function XL(){var e;let t=w.useContext($m),n=YL(Ga.UseRouteError),r=Im(Ga.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function qL(){let{router:e}=KL(Dm.UseNavigateStable),t=Im(Ga.UseNavigateStable),n=w.useRef(!1);return Bm(()=>{n.current=!0}),w.useCallback(function(l,a){a===void 0&&(a={}),n.current&&(typeof l=="number"?e.navigate(l):e.navigate(l,Za({fromRouteId:t},a)))},[e,t])}function JL(e){return FL(e.context)}function eT(e){let{basename:t="/",children:n=null,location:r,navigationType:l=Ee.Pop,navigator:a,static:s=!1}=e;Ll()&&q(!1);let i=t.replace(/^\/*/,"/"),c=w.useMemo(()=>({basename:i,navigator:a,static:s}),[i,a,s]);typeof r=="string"&&(r=hn(r));let{pathname:u="/",search:p="",hash:m="",state:g=null,key:b="default"}=r,C=w.useMemo(()=>{let S=zn(u,i);return S==null?null:{location:{pathname:S,search:p,hash:m,state:g,key:b},navigationType:l}},[i,u,p,m,g,b,l]);return C==null?null:w.createElement(jr.Provider,{value:c},w.createElement(gs.Provider,{children:n,value:C}))}new Promise(()=>{});function tT(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:w.createElement(e.Component),Component:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:w.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Jr(){return Jr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Jr.apply(this,arguments)}function zm(e,t){if(e==null)return{};var n={},r=Object.keys(e),l,a;for(a=0;a<r.length;a++)l=r[a],!(t.indexOf(l)>=0)&&(n[l]=e[l]);return n}function nT(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function rT(e,t){return e.button===0&&(!t||t==="_self")&&!nT(e)}const oT=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],lT=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"];function aT(e,t){return _L({basename:t==null?void 0:t.basename,future:Jr({},t==null?void 0:t.future,{v7_prependBasename:!0}),history:Gk({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||sT(),routes:e,mapRouteProperties:tT,window:t==null?void 0:t.window}).initialize()}function sT(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=Jr({},t,{errors:iT(t.errors)})),t}function iT(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,l]of t)if(l&&l.__type==="RouteErrorResponse")n[r]=new zu(l.status,l.statusText,l.data,l.internal===!0);else if(l&&l.__type==="Error"){if(l.__subType){let a=window[l.__subType];if(typeof a=="function")try{let s=new a(l.message);s.stack="",n[r]=s}catch{}}if(n[r]==null){let a=new Error(l.message);a.stack="",n[r]=a}}else n[r]=l;return n}const Fm=w.createContext({isTransitioning:!1}),cT=w.createContext(new Map),uT="startTransition",q1=b4[uT];function dT(e){q1?q1(e):e()}class pT{constructor(){this.status="pending",this.promise=new Promise((t,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",t(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}}function fT(e){let{fallbackElement:t,router:n,future:r}=e,[l,a]=w.useState(n.state),[s,i]=w.useState(),[c,u]=w.useState({isTransitioning:!1}),[p,m]=w.useState(),[g,b]=w.useState(),[C,S]=w.useState(),E=w.useRef(new Map),{v7_startTransition:x}=r||{},d=w.useCallback(j=>{x?dT(j):j()},[x]),h=w.useCallback((j,L)=>{let{deletedFetchers:T,unstable_viewTransitionOpts:A}=L;T.forEach(F=>E.current.delete(F)),j.fetchers.forEach((F,X)=>{F.data!==void 0&&E.current.set(X,F.data)}),!A||n.window==null||typeof n.window.document.startViewTransition!="function"?d(()=>a(j)):g&&p?(p.resolve(),g.skipTransition(),S({state:j,currentLocation:A.currentLocation,nextLocation:A.nextLocation})):(i(j),u({isTransitioning:!0,currentLocation:A.currentLocation,nextLocation:A.nextLocation}))},[n.window,g,p,E,d]);w.useLayoutEffect(()=>n.subscribe(h),[n,h]),w.useEffect(()=>{c.isTransitioning&&m(new pT)},[c.isTransitioning]),w.useEffect(()=>{if(p&&s&&n.window){let j=s,L=p.promise,T=n.window.document.startViewTransition(async()=>{d(()=>a(j)),await L});T.finished.finally(()=>{m(void 0),b(void 0),i(void 0),u({isTransitioning:!1})}),b(T)}},[d,s,p,n.window]),w.useEffect(()=>{p&&s&&l.location.key===s.location.key&&p.resolve()},[p,g,l.location,s]),w.useEffect(()=>{!c.isTransitioning&&C&&(i(C.state),u({isTransitioning:!0,currentLocation:C.currentLocation,nextLocation:C.nextLocation}),S(void 0))},[c.isTransitioning,C]);let f=w.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:j=>n.navigate(j),push:(j,L,T)=>n.navigate(j,{state:L,preventScrollReset:T==null?void 0:T.preventScrollReset}),replace:(j,L,T)=>n.navigate(j,{replace:!0,state:L,preventScrollReset:T==null?void 0:T.preventScrollReset})}),[n]),v=n.basename||"/",y=w.useMemo(()=>({router:n,navigator:f,static:!1,basename:v}),[n,f,v]);return w.createElement(w.Fragment,null,w.createElement(kl.Provider,{value:y},w.createElement(Uu.Provider,{value:l},w.createElement(cT.Provider,{value:E.current},w.createElement(Fm.Provider,{value:c},w.createElement(eT,{basename:v,location:l.location,navigationType:l.historyAction,navigator:f},l.initialized?w.createElement(hT,{routes:n.routes,state:l}):t))))),null)}function hT(e){let{routes:t,state:n}=e;return UL(t,void 0,n)}const mT=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",gT=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,xT=w.forwardRef(function(t,n){let{onClick:r,relative:l,reloadDocument:a,replace:s,state:i,target:c,to:u,preventScrollReset:p,unstable_viewTransition:m}=t,g=zm(t,oT),{basename:b}=w.useContext(jr),C,S=!1;if(typeof u=="string"&&gT.test(u)&&(C=u,mT))try{let h=new URL(window.location.href),f=u.startsWith("//")?new URL(h.protocol+u):new URL(u),v=zn(f.pathname,b);f.origin===h.origin&&v!=null?u=v+f.search+f.hash:S=!0}catch{}let E=BL(u,{relative:l}),x=CT(u,{replace:s,state:i,target:c,preventScrollReset:p,relative:l,unstable_viewTransition:m});function d(h){r&&r(h),h.defaultPrevented||x(h)}return w.createElement("a",Jr({},g,{href:C||E,onClick:S||a?r:d,ref:n,target:c}))}),vT=w.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:l=!1,className:a="",end:s=!1,style:i,to:c,unstable_viewTransition:u,children:p}=t,m=zm(t,lT),g=Tl(c,{relative:m.relative}),b=so(),C=w.useContext(Uu),{navigator:S}=w.useContext(jr),E=C!=null&&jT(g)&&u===!0,x=S.encodeLocation?S.encodeLocation(g).pathname:g.pathname,d=b.pathname,h=C&&C.navigation&&C.navigation.location?C.navigation.location.pathname:null;l||(d=d.toLowerCase(),h=h?h.toLowerCase():null,x=x.toLowerCase());let f=d===x||!s&&d.startsWith(x)&&d.charAt(x.length)==="/",v=h!=null&&(h===x||!s&&h.startsWith(x)&&h.charAt(x.length)==="/"),y={isActive:f,isPending:v,isTransitioning:E},j=f?r:void 0,L;typeof a=="function"?L=a(y):L=[a,f?"active":null,v?"pending":null,E?"transitioning":null].filter(Boolean).join(" ");let T=typeof i=="function"?i(y):i;return w.createElement(xT,Jr({},m,{"aria-current":j,className:L,ref:n,style:T,to:c,unstable_viewTransition:u}),typeof p=="function"?p(y):p)});var dc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(dc||(dc={}));var J1;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(J1||(J1={}));function yT(e){let t=w.useContext(kl);return t||q(!1),t}function CT(e,t){let{target:n,replace:r,state:l,preventScrollReset:a,relative:s,unstable_viewTransition:i}=t===void 0?{}:t,c=DL(),u=so(),p=Tl(e,{relative:s});return w.useCallback(m=>{if(rT(m,n)){m.preventDefault();let g=r!==void 0?r:hr(u)===hr(p);c(e,{replace:g,state:l,preventScrollReset:a,relative:s,unstable_viewTransition:i})}},[u,c,p,r,l,n,e,a,s,i])}function jT(e,t){t===void 0&&(t={});let n=w.useContext(Fm);n==null&&q(!1);let{basename:r}=yT(dc.useViewTransitionState),l=Tl(e,{relative:t.relative});if(!n.isTransitioning)return!1;let a=zn(n.currentLocation.pathname,r)||n.currentLocation.pathname,s=zn(n.nextLocation.pathname,r)||n.nextLocation.pathname;return sc(l.pathname,s)!=null||sc(l.pathname,a)!=null}const Um=({to:e,className:t="",exact:n,onClick:r,label:l,style:a,...s})=>o.jsx(vT,{to:e,onClick:r,end:n&&"end",className:({isActive:i})=>`${t} ${i?"active":""}`,"aria-label":l,style:a,children:o.jsx(c3,{...s})}),Wm=({path:e,onClick:t,width:n=512,height:r=512,style:l,className:a="night-and-day--icon",fill:s="currentColor"})=>o.jsx("svg",{"aria-hidden":"true",focusable:"false",className:a,style:l,role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${n} ${r}`,onClick:t,children:o.jsx("path",{d:e,fill:s})}),ST=e=>o.jsx(Wm,{path:"M289,23C160,23 56,127 56,256C56,385 160,489 289,489C352,489 409,464 451,423C456,418 457,411 454,404C451,397 444,394 436,395C426,397 416,397 405,397C304,397 222,316 222,214C222,146 260,86 315,55C322,51 325,44 323,37C322,30 316,25 309,24C302,23 295,23 289,23L289,23Z",...e}),Vm=({Icon:e,caption:t,onClick:n,iconClass:r,iconStyle:l,captionStyle:a,className:s="night-and-day--switcher",captionClass:i="night-and-day--caption",style:c={display:"inline-block"}})=>o.jsxs("div",{className:s,onClick:n,style:c,children:[o.jsx(e,{style:l,className:r}),!!t&&o.jsx("div",{className:i,style:a,children:t})]}),bT=e=>{const{setDark:t}=El();return o.jsx(Vm,{Icon:ST,onClick:t,...e})},_T=e=>o.jsx(Wm,{path:"M362,1.2C367,3 370,8 371,13L391,121L499,141C504,142 509,145 511,150C512,155 512,161 509,166L447,256L509,346C512,351 512,357 511,362C509,367 504,370 499,371L391,391L371,499C370,504 367,509 362,511C357,512 351,512 346,509L256,447L166,509C161,512 156,512 151,511C146,509 142,504 141,499L121,391L13,371C8,370 3,367 1,362C0,356 0,351 3,346L65,256L3,166C0,161 0,156 1,151C3,146 8,142 13,141L121,121L141,13C142,8 146,3 151,1C156,0 161,0 166,3L256,65L346,3C351,0 357,0 362,1ZM160,256C160,203 203,160 256,160C309,160 352,203 352,256C352,309 309,352 256,352C203,352 160,309 160,256ZM384,256C384,186 326,128 256,128C186,128 128,186 128,256C128,326 186,384 256,384C326,384 384,326 384,256Z",...e}),wT=e=>{const{setLight:t}=El();return o.jsx(Vm,{Icon:_T,onClick:t,...e})},kT=({sunrise:e={},nightfall:t={}})=>{const{isLight:n,setLight:r,setDark:l}=El();return n?o.jsx(wT,{onClick:l,...e}):o.jsx(bT,{onClick:r,...t})},Hm=w.createContext(),El=()=>w.useContext(Hm),na="dark",ri="light",LT="(prefers-color-scheme: dark)",oi=()=>!1,TT=()=>{let e={};return{clear:()=>e={},getItem:t=>e[t],setItem:(t,n)=>e[t]=n,removeItem:t=>delete e[t]}},ET=()=>({matches:oi,addEventListener:oi,removeEventListener:oi}),Zm=typeof window<"u",li=Zm&&window.localStorage?window.localStorage:TT(),NT=Zm&&window.matchMedia?e=>window.matchMedia(e):ET,pc=NT(LT),OT=()=>pc.matches,RT=e=>e.split(" "),e2=(e,t="")=>`${e} ${t}`,MT=({storageKey:e,defaultVariant:t,children:n})=>{const r=e?li.getItem(e):null,[l,a=""]=r?RT(r):[OT(),null],[s,i]=w.useState(l===na),[c,u]=w.useState(a||t),p=C=>{i(C),e&&li.setItem(e,e2(C?na:ri,c))},m=C=>{u(C),e&&li.setItem(e,e2(s?na:ri,C))},g=C=>p(C.matches);w.useEffect(()=>(pc.addEventListener("change",g),()=>pc.removeEventListener("change",g)),[]);const b={isDark:s,isLight:!s,setDark:()=>p(!0),setLight:()=>p(!1),setIsDark:i,toggleTheme:()=>p(!s),theme:s?na:ri,variant:c,setVariant:m};return o.jsx(Hm.Provider,{value:b,children:n})},Gm="0.0.4",PT="2023-12-08",t2="sidebar",AT="no-sidebar",$T=()=>{const{variant:e,setVariant:t}=El();return o.jsx("header",{children:o.jsxs("nav",{children:[o.jsxs("div",{children:[o.jsx(Y,{name:"bars",className:"toggle-sidebar action",onClick:()=>t(e===t2?AT:t2)}),o.jsx(Um,{to:"/",className:"home mar-l-2",text:"Badger React UI"}),o.jsxs("span",{className:"small mar-l-2",children:["v",Gm]})]}),o.jsxs("div",{className:"flex middle",children:[o.jsx("a",{href:"https://github.com/abw/badger-react-ui",children:o.jsx(Y,{name:"github",className:"mar-r-4"})}),o.jsx(kT,{})]})]})})},BT=()=>o.jsx("footer",{children:o.jsxs("div",{className:"flex space middle",children:[o.jsx("div",{className:"large",children:"Badger React UI"}),o.jsxs("div",{className:"text-center small",children:["by ",o.jsx("a",{href:"https://github.com/abw",children:"Andy Wardley"})]}),o.jsxs("div",{className:"text-right",children:["v",Gm,o.jsx("br",{}),PT]})]})}),DT=({toc:e,contentRef:t})=>o.jsxs("ul",{className:"toc",children:[console.log("TOC: ",e),Object.entries(e).map(([n,r])=>o.jsx("li",{onClick:()=>{var l,a;(a=t.current)==null||a.scrollTo({top:((l=r.ref.current)==null?void 0:l.offsetTop)-20})},className:r.heading?"heading":"",children:r.heading?o.jsx("h4",{children:r.heading}):r.text.match(/^code:/)?o.jsx("code",{children:r.text.replace(/^code:/,"")}):r.text},n))]}),IT=wl.Consumer(DT),zT=({title:e,path:t,items:n,tocs:r})=>{const l=Tl(),a=t&&l.pathname.slice(0,t.length)===t;return o.jsxs("details",{className:"menu",open:a,children:[o.jsx("summary",{children:e}),o.jsx("ul",{children:n.map(s=>{const i=l.pathname===s.to;return o.jsxs("li",{children:[o.jsx(Um,{className:"item",...s}),!!s.tocName&&i&&r[s.tocName]&&o.jsx(IT,{toc:r[s.tocName]})]},s.to)})})]})},n2=wl.Consumer(zT),FT={title:"Getting Started",path:"/getting-started",items:[{to:"/getting-started/installation",text:"Installation"}]},UT={title:"Components",path:"/components",items:[{to:"/components/alert",text:"Alert",tocName:"alert"},{to:"/components/button",text:"Button",tocName:"button"},{to:"/components/buttons",text:"Buttons",tocName:"buttons"},{to:"/components/checkbox",text:"Checkbox",tocName:"checkbox"},{to:"/components/confirm",text:"Confirm",tocName:"confirm"},{to:"/components/details",text:"Details",tocName:"details"},{to:"/components/icon",text:"Icon",tocName:"icon"},{to:"/components/modal",text:"Modal",tocName:"modal"},{to:"/components/overlay",text:"Overlay",tocName:"overlay"},{to:"/components/pager",text:"Pager",tocName:"pager"},{to:"/components/search",text:"Search",tocName:"search"},{to:"/components/select",text:"Select",tocName:"select"}]},WT=()=>o.jsxs(o.Fragment,{children:[o.jsx(n2,{...FT}),o.jsx(n2,{...UT})]});function VT(){const{pathname:e}=so();return w.useEffect(()=>HT(document.getElementById("content")),[e]),null}function HT(e,{top:t=0,left:n=0,behavior:r="smooth"}={}){e==null||e.scrollTo({top:t,left:n,behavior:r})}const ZT=({contentRef:e})=>{const{theme:t,variant:n}=El();return o.jsxs("div",{id:"site",className:n,"data-theme":t,children:[o.jsx($T,{}),o.jsxs("div",{id:"app",children:[o.jsx(VT,{}),o.jsx("aside",{children:o.jsx(WT,{})}),o.jsx("main",{id:"content",ref:e,children:o.jsx(JL,{})})]}),o.jsx(BT,{})]})},GT=wl.Consumer(ZT),KT=/\/_layout$/,YT=/\/_examples\//,QT=XT(Object.assign({"../pages/components/alert/_examples/Alert/index.jsx":_y,"../pages/components/alert/_examples/Error/index.jsx":Ny,"../pages/components/alert/_examples/Info/index.jsx":My,"../pages/components/alert/_examples/Success/index.jsx":$y,"../pages/components/alert/_examples/Warning/index.jsx":Iy,"../pages/components/alert/_examples/border/index.jsx":Uy,"../pages/components/alert/_examples/className/index.jsx":Hy,"../pages/components/alert/_examples/color/index.jsx":Ky,"../pages/components/alert/_examples/dismissable/index.jsx":Xy,"../pages/components/alert/_examples/headIcon/index.jsx":eC,"../pages/components/alert/_examples/headline/index.jsx":rC,"../pages/components/alert/_examples/icon/index.jsx":aC,"../pages/components/alert/_examples/onDismiss/index.jsx":cC,"../pages/components/alert/_examples/radius/index.jsx":pC,"../pages/components/alert/_examples/revealable/index.jsx":mC,"../pages/components/alert/_examples/revealed/index.jsx":vC,"../pages/components/alert/_examples/shadow/index.jsx":jC,"../pages/components/alert/_examples/size/index.jsx":_C,"../pages/components/alert/_examples/stripe/index.jsx":LC,"../pages/components/alert/_examples/text/index.jsx":NC,"../pages/components/alert/_examples/title/index.jsx":MC,"../pages/components/alert/_examples/type/index.jsx":$C,"../pages/components/alert/index.jsx":IC,"../pages/components/button/_examples/Button/index.jsx":UC,"../pages/components/button/_examples/Content/index.jsx":HC,"../pages/components/button/_examples/bare/index.jsx":KC,"../pages/components/button/_examples/border/index.jsx":XC,"../pages/components/button/_examples/bright/index.jsx":ej,"../pages/components/button/_examples/className/index.jsx":rj,"../pages/components/button/_examples/color/index.jsx":aj,"../pages/components/button/_examples/dark/index.jsx":cj,"../pages/components/button/_examples/disabled/index.jsx":pj,"../pages/components/button/_examples/icon/index.jsx":mj,"../pages/components/button/_examples/iconLeft/index.jsx":vj,"../pages/components/button/_examples/iconRight/index.jsx":jj,"../pages/components/button/_examples/label/index.jsx":_j,"../pages/components/button/_examples/onClick/index.jsx":Lj,"../pages/components/button/_examples/outline/index.jsx":Nj,"../pages/components/button/_examples/radius/index.jsx":Mj,"../pages/components/button/_examples/shaded/index.jsx":$j,"../pages/components/button/_examples/shadow/index.jsx":Ij,"../pages/components/button/_examples/size/index.jsx":Uj,"../pages/components/button/_examples/text/index.jsx":Hj,"../pages/components/button/_examples/tooltip/index.jsx":Kj,"../pages/components/button/_examples/type/index.jsx":Xj,"../pages/components/button/index.jsx":Jj,"../pages/components/buttons/_examples/Button/index.jsx":rS,"../pages/components/buttons/_examples/Buttons/index.jsx":aS,"../pages/components/buttons/_examples/buttonClass/index.jsx":cS,"../pages/components/buttons/_examples/buttonsProp/index.jsx":pS,"../pages/components/buttons/_examples/className/index.jsx":mS,"../pages/components/buttons/_examples/outline/index.jsx":vS,"../pages/components/buttons/index.jsx":CS,"../pages/components/checkbox/_examples/CheckboxState/index.jsx":bS,"../pages/components/checkbox/_examples/Overview/index.jsx":kS,"../pages/components/checkbox/_examples/checked/index.jsx":ES,"../pages/components/checkbox/_examples/checkedText/index.jsx":RS,"../pages/components/checkbox/_examples/className/index.jsx":AS,"../pages/components/checkbox/_examples/onChange/index.jsx":DS,"../pages/components/checkbox/_examples/text/index.jsx":FS,"../pages/components/checkbox/index.jsx":WS,"../pages/components/confirm/_examples/Overview/index.jsx":ZS,"../pages/components/confirm/_examples/cancel/index.jsx":YS,"../pages/components/confirm/_examples/cancelProps/index.jsx":qS,"../pages/components/confirm/_examples/className/index.jsx":tb,"../pages/components/confirm/_examples/color/index.jsx":ob,"../pages/components/confirm/_examples/confirm/index.jsx":sb,"../pages/components/confirm/_examples/confirmProps/index.jsx":ub,"../pages/components/confirm/_examples/iconRight/index.jsx":fb,"../pages/components/confirm/_examples/onClick/index.jsx":gb,"../pages/components/confirm/_examples/text/index.jsx":yb,"../pages/components/confirm/index.jsx":jb,"../pages/components/details/_examples/Details/index.jsx":_b,"../pages/components/details/_examples/border/index.jsx":Lb,"../pages/components/details/_examples/color/index.jsx":Nb,"../pages/components/details/_examples/content/index.jsx":Mb,"../pages/components/details/_examples/lined/index.jsx":$b,"../pages/components/details/_examples/open/index.jsx":Ib,"../pages/components/details/_examples/radius/index.jsx":Ub,"../pages/components/details/_examples/shaded/index.jsx":Hb,"../pages/components/details/_examples/shadow/index.jsx":Kb,"../pages/components/details/_examples/summary/index.jsx":Xb,"../pages/components/details/index.jsx":Jb,"../pages/components/icon/_examples/Icon/index.jsx":s_,"../pages/components/icon/_examples/IconLibrary/index.jsx":i_,"../pages/components/icon/_examples/className/index.jsx":d_,"../pages/components/icon/_examples/color/index.jsx":h_,"../pages/components/icon/_examples/name/index.jsx":x_,"../pages/components/icon/_examples/path/index.jsx":C_,"../pages/components/icon/_examples/size/index.jsx":b_,"../pages/components/icon/index.jsx":w_,"../pages/components/modal/_examples/Modal/index.jsx":T_,"../pages/components/modal/_examples/ModalState/index.jsx":O_,"../pages/components/modal/_examples/className/index.jsx":P_,"../pages/components/modal/_examples/close/index.jsx":B_,"../pages/components/modal/_examples/closeIcon/index.jsx":z_,"../pages/components/modal/_examples/footer/index.jsx":W_,"../pages/components/modal/_examples/header/index.jsx":Z_,"../pages/components/modal/_examples/text/index.jsx":Y_,"../pages/components/modal/_examples/title/index.jsx":q_,"../pages/components/modal/index.jsx":ew,"../pages/components/overlay/_examples/Overlay/index.jsx":rw,"../pages/components/overlay/_examples/OverlayState/index.jsx":aw,"../pages/components/overlay/_examples/className/index.jsx":uw,"../pages/components/overlay/_examples/custom/index.jsx":fw,"../pages/components/overlay/_examples/fixed/index.jsx":gw,"../pages/components/overlay/_examples/theme/index.jsx":jw,"../pages/components/overlay/index.jsx":bw,"../pages/components/pager/_examples/Context/index.jsx":Ew,"../pages/components/pager/_examples/Pager/index.jsx":Rw,"../pages/components/pager/_examples/className/index.jsx":Aw,"../pages/components/pager/_examples/color/index.jsx":Dw,"../pages/components/pager/_examples/icons/index.jsx":Fw,"../pages/components/pager/_examples/nextIcon/index.jsx":Hw,"../pages/components/pager/_examples/showFirstLast/index.jsx":Kw,"../pages/components/pager/_examples/size/index.jsx":Xw,"../pages/components/pager/index.jsx":Jw,"../pages/components/search/_examples/Search/index.jsx":rk,"../pages/components/search/_examples/displayResult/index.jsx":sk,"../pages/components/search/_examples/displayValue/index.jsx":dk,"../pages/components/search/_examples/onSearch/index.jsx":mk,"../pages/components/search/index.jsx":xk,"../pages/components/select/_examples/Select/index.jsx":jk,"../pages/components/select/_examples/displayOption/index.jsx":wk,"../pages/components/select/_examples/displayValue/index.jsx":Ek,"../pages/components/select/_examples/options/index.jsx":Mk,"../pages/components/select/index.jsx":Ak,"../pages/getting-started/installation.jsx":Uk,"../pages/index.jsx":Zk}));function XT(e){const n=Object.entries(e).map(qT).filter(l=>!l.path.match(YT)).reduce((l,a)=>(l[a.path]=a,l),{}),r=Object.keys(n).filter(l=>l.match(KT)).sort((l,a)=>a.length-l.length);for(let l of r){const a=n[l];delete n[l];const s=l.replace(/_layout$/,""),i=s.length;a.path=s,a.children=[];const c=n[s];c&&(delete c.path,c.index=!0,a.children.push(c),delete n[s]);const u=Object.keys(n).filter(p=>p.slice(0,i)===s);for(let p of u){const m=n[p];delete n[p],p=p.slice(i),m.path=p.length?p:"/",a.children.push(m)}n[s]=a}return Object.values(n)}function qT([e,t]){const n=e.replace(/^[./]*pages/,"").replace(/\.jsx$/,"").replace(/index$/,"").replace(/\[(\w+)\]/,":$1"),r=t.default;return{path:n,Component:r}}const JT=aT([{path:"/",element:o.jsx(GT,{}),children:QT}],{basename:"/badger-react-ui"});ai.createRoot(document.getElementById("root")).render(o.jsx(Ve.StrictMode,{children:o.jsx(MT,{storageKey:"theme",children:o.jsx(wl.Provider,{children:o.jsx(fT,{router:JT})})})}));
