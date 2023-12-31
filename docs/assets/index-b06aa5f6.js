var Y4=Object.defineProperty;var Q4=(e,t,n)=>t in e?Y4(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var be=(e,t,n)=>(Q4(e,typeof t!="symbol"?t+"":t,n),n);function X4(e,t){for(var n=0;n<t.length;n++){const o=t[n];if(typeof o!="string"&&!Array.isArray(o)){for(const a in o)if(a!=="default"&&!(a in e)){const l=Object.getOwnPropertyDescriptor(o,a);l&&Object.defineProperty(e,a,l.get?l:{enumerable:!0,get:()=>o[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(a){if(a.ep)return;a.ep=!0;const l=n(a);fetch(a.href,l)}})();var El=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Zn(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var kp={exports:{}},os={},Tp={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ja=Symbol.for("react.element"),q4=Symbol.for("react.portal"),J4=Symbol.for("react.fragment"),e0=Symbol.for("react.strict_mode"),t0=Symbol.for("react.profiler"),n0=Symbol.for("react.provider"),r0=Symbol.for("react.context"),o0=Symbol.for("react.forward_ref"),a0=Symbol.for("react.suspense"),l0=Symbol.for("react.memo"),s0=Symbol.for("react.lazy"),md=Symbol.iterator;function i0(e){return e===null||typeof e!="object"?null:(e=md&&e[md]||e["@@iterator"],typeof e=="function"?e:null)}var Ep={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Lp=Object.assign,Np={};function ao(e,t,n){this.props=e,this.context=t,this.refs=Np,this.updater=n||Ep}ao.prototype.isReactComponent={};ao.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ao.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Rp(){}Rp.prototype=ao.prototype;function Ec(e,t,n){this.props=e,this.context=t,this.refs=Np,this.updater=n||Ep}var Lc=Ec.prototype=new Rp;Lc.constructor=Ec;Lp(Lc,ao.prototype);Lc.isPureReactComponent=!0;var xd=Array.isArray,Op=Object.prototype.hasOwnProperty,Nc={current:null},Dp={key:!0,ref:!0,__self:!0,__source:!0};function Mp(e,t,n){var o,a={},l=null,s=null;if(t!=null)for(o in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(l=""+t.key),t)Op.call(t,o)&&!Dp.hasOwnProperty(o)&&(a[o]=t[o]);var i=arguments.length-2;if(i===1)a.children=n;else if(1<i){for(var c=Array(i),u=0;u<i;u++)c[u]=arguments[u+2];a.children=c}if(e&&e.defaultProps)for(o in i=e.defaultProps,i)a[o]===void 0&&(a[o]=i[o]);return{$$typeof:ja,type:e,key:l,ref:s,props:a,_owner:Nc.current}}function c0(e,t){return{$$typeof:ja,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Rc(e){return typeof e=="object"&&e!==null&&e.$$typeof===ja}function u0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var gd=/\/+/g;function $s(e,t){return typeof e=="object"&&e!==null&&e.key!=null?u0(""+e.key):t.toString(36)}function hl(e,t,n,o,a){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case ja:case q4:s=!0}}if(s)return s=e,a=a(s),e=o===""?"."+$s(s,0):o,xd(a)?(n="",e!=null&&(n=e.replace(gd,"$&/")+"/"),hl(a,t,n,"",function(u){return u})):a!=null&&(Rc(a)&&(a=c0(a,n+(!a.key||s&&s.key===a.key?"":(""+a.key).replace(gd,"$&/")+"/")+e)),t.push(a)),1;if(s=0,o=o===""?".":o+":",xd(e))for(var i=0;i<e.length;i++){l=e[i];var c=o+$s(l,i);s+=hl(l,t,n,c,a)}else if(c=i0(e),typeof c=="function")for(e=c.call(e),i=0;!(l=e.next()).done;)l=l.value,c=o+$s(l,i++),s+=hl(l,t,n,c,a);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Va(e,t,n){if(e==null)return e;var o=[],a=0;return hl(e,o,"","",function(l){return t.call(n,l,a++)}),o}function d0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var at={current:null},ml={transition:null},p0={ReactCurrentDispatcher:at,ReactCurrentBatchConfig:ml,ReactCurrentOwner:Nc};te.Children={map:Va,forEach:function(e,t,n){Va(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Va(e,function(){t++}),t},toArray:function(e){return Va(e,function(t){return t})||[]},only:function(e){if(!Rc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};te.Component=ao;te.Fragment=J4;te.Profiler=t0;te.PureComponent=Ec;te.StrictMode=e0;te.Suspense=a0;te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=p0;te.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=Lp({},e.props),a=e.key,l=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,s=Nc.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(c in t)Op.call(t,c)&&!Dp.hasOwnProperty(c)&&(o[c]=t[c]===void 0&&i!==void 0?i[c]:t[c])}var c=arguments.length-2;if(c===1)o.children=n;else if(1<c){i=Array(c);for(var u=0;u<c;u++)i[u]=arguments[u+2];o.children=i}return{$$typeof:ja,type:e.type,key:a,ref:l,props:o,_owner:s}};te.createContext=function(e){return e={$$typeof:r0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:n0,_context:e},e.Consumer=e};te.createElement=Mp;te.createFactory=function(e){var t=Mp.bind(null,e);return t.type=e,t};te.createRef=function(){return{current:null}};te.forwardRef=function(e){return{$$typeof:o0,render:e}};te.isValidElement=Rc;te.lazy=function(e){return{$$typeof:s0,_payload:{_status:-1,_result:e},_init:d0}};te.memo=function(e,t){return{$$typeof:l0,type:e,compare:t===void 0?null:t}};te.startTransition=function(e){var t=ml.transition;ml.transition={};try{e()}finally{ml.transition=t}};te.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};te.useCallback=function(e,t){return at.current.useCallback(e,t)};te.useContext=function(e){return at.current.useContext(e)};te.useDebugValue=function(){};te.useDeferredValue=function(e){return at.current.useDeferredValue(e)};te.useEffect=function(e,t){return at.current.useEffect(e,t)};te.useId=function(){return at.current.useId()};te.useImperativeHandle=function(e,t,n){return at.current.useImperativeHandle(e,t,n)};te.useInsertionEffect=function(e,t){return at.current.useInsertionEffect(e,t)};te.useLayoutEffect=function(e,t){return at.current.useLayoutEffect(e,t)};te.useMemo=function(e,t){return at.current.useMemo(e,t)};te.useReducer=function(e,t,n){return at.current.useReducer(e,t,n)};te.useRef=function(e){return at.current.useRef(e)};te.useState=function(e){return at.current.useState(e)};te.useSyncExternalStore=function(e,t,n){return at.current.useSyncExternalStore(e,t,n)};te.useTransition=function(){return at.current.useTransition()};te.version="18.2.0";Tp.exports=te;var _=Tp.exports;const Ge=Zn(_),f0=X4({__proto__:null,default:Ge},[_]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h0=_,m0=Symbol.for("react.element"),x0=Symbol.for("react.fragment"),g0=Object.prototype.hasOwnProperty,v0=h0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y0={key:!0,ref:!0,__self:!0,__source:!0};function Pp(e,t,n){var o,a={},l=null,s=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(s=t.ref);for(o in t)g0.call(t,o)&&!y0.hasOwnProperty(o)&&(a[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps,t)a[o]===void 0&&(a[o]=t[o]);return{$$typeof:m0,type:e,key:l,ref:s,props:a,_owner:v0.current}}os.Fragment=x0;os.jsx=Pp;os.jsxs=Pp;kp.exports=os;var r=kp.exports,yi={},$p={exports:{}},Ct={},Ap={exports:{}},Bp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(R,$){var A=R.length;R.push($);e:for(;0<A;){var z=A-1>>>1,K=R[z];if(0<a(K,$))R[z]=$,R[A]=K,A=z;else break e}}function n(R){return R.length===0?null:R[0]}function o(R){if(R.length===0)return null;var $=R[0],A=R.pop();if(A!==$){R[0]=A;e:for(var z=0,K=R.length,Ae=K>>>1;z<Ae;){var le=2*(z+1)-1,Be=R[le],Ee=le+1,We=R[Ee];if(0>a(Be,A))Ee<K&&0>a(We,Be)?(R[z]=We,R[Ee]=A,z=Ee):(R[z]=Be,R[le]=A,z=le);else if(Ee<K&&0>a(We,A))R[z]=We,R[Ee]=A,z=Ee;else break e}}return $}function a(R,$){var A=R.sortIndex-$.sortIndex;return A!==0?A:R.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var s=Date,i=s.now();e.unstable_now=function(){return s.now()-i}}var c=[],u=[],d=1,x=null,m=3,j=!1,y=!1,S=!1,N=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(R){for(var $=n(u);$!==null;){if($.callback===null)o(u);else if($.startTime<=R)o(u),$.sortIndex=$.expirationTime,t(c,$);else break;$=n(u)}}function f(R){if(S=!1,h(R),!y)if(n(c)!==null)y=!0,ue(v);else{var $=n(u);$!==null&&ge(f,$.startTime-R)}}function v(R,$){y=!1,S&&(S=!1,g(T),T=-1),j=!0;var A=m;try{for(h($),x=n(c);x!==null&&(!(x.expirationTime>$)||R&&!U());){var z=x.callback;if(typeof z=="function"){x.callback=null,m=x.priorityLevel;var K=z(x.expirationTime<=$);$=e.unstable_now(),typeof K=="function"?x.callback=K:x===n(c)&&o(c),h($)}else o(c);x=n(c)}if(x!==null)var Ae=!0;else{var le=n(u);le!==null&&ge(f,le.startTime-$),Ae=!1}return Ae}finally{x=null,m=A,j=!1}}var C=!1,b=null,T=-1,E=5,P=-1;function U(){return!(e.unstable_now()-P<E)}function X(){if(b!==null){var R=e.unstable_now();P=R;var $=!0;try{$=b(!0,R)}finally{$?se():(C=!1,b=null)}}else C=!1}var se;if(typeof p=="function")se=function(){p(X)};else if(typeof MessageChannel<"u"){var Ce=new MessageChannel,J=Ce.port2;Ce.port1.onmessage=X,se=function(){J.postMessage(null)}}else se=function(){N(X,0)};function ue(R){b=R,C||(C=!0,se())}function ge(R,$){T=N(function(){R(e.unstable_now())},$)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){y||j||(y=!0,ue(v))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(R){switch(m){case 1:case 2:case 3:var $=3;break;default:$=m}var A=m;m=$;try{return R()}finally{m=A}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,$){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var A=m;m=R;try{return $()}finally{m=A}},e.unstable_scheduleCallback=function(R,$,A){var z=e.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?z+A:z):A=z,R){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=A+K,R={id:d++,callback:$,priorityLevel:R,startTime:A,expirationTime:K,sortIndex:-1},A>z?(R.sortIndex=A,t(u,R),n(c)===null&&R===n(u)&&(S?(g(T),T=-1):S=!0,ge(f,A-z))):(R.sortIndex=K,t(c,R),y||j||(y=!0,ue(v))),R},e.unstable_shouldYield=U,e.unstable_wrapCallback=function(R){var $=m;return function(){var A=m;m=$;try{return R.apply(this,arguments)}finally{m=A}}}})(Bp);Ap.exports=Bp;var C0=Ap.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ip=_,yt=C0;function M(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var zp=new Set,ta={};function Cr(e,t){Xr(e,t),Xr(e+"Capture",t)}function Xr(e,t){for(ta[e]=t,e=0;e<t.length;e++)zp.add(t[e])}var sn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ci=Object.prototype.hasOwnProperty,j0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,vd={},yd={};function S0(e){return Ci.call(yd,e)?!0:Ci.call(vd,e)?!1:j0.test(e)?yd[e]=!0:(vd[e]=!0,!1)}function b0(e,t,n,o){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return o?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function _0(e,t,n,o){if(t===null||typeof t>"u"||b0(e,t,n,o))return!0;if(o)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function lt(e,t,n,o,a,l,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=o,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=s}var Ye={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ye[e]=new lt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ye[t]=new lt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ye[e]=new lt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ye[e]=new lt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ye[e]=new lt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ye[e]=new lt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ye[e]=new lt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ye[e]=new lt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ye[e]=new lt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Oc=/[\-:]([a-z])/g;function Dc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Oc,Dc);Ye[t]=new lt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Oc,Dc);Ye[t]=new lt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Oc,Dc);Ye[t]=new lt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ye[e]=new lt(e,1,!1,e.toLowerCase(),null,!1,!1)});Ye.xlinkHref=new lt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ye[e]=new lt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Mc(e,t,n,o){var a=Ye.hasOwnProperty(t)?Ye[t]:null;(a!==null?a.type!==0:o||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(_0(t,n,a,o)&&(n=null),o||a===null?S0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,o=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,o?e.setAttributeNS(o,t,n):e.setAttribute(t,n))))}var hn=Ip.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Wa=Symbol.for("react.element"),Nr=Symbol.for("react.portal"),Rr=Symbol.for("react.fragment"),Pc=Symbol.for("react.strict_mode"),ji=Symbol.for("react.profiler"),Fp=Symbol.for("react.provider"),Up=Symbol.for("react.context"),$c=Symbol.for("react.forward_ref"),Si=Symbol.for("react.suspense"),bi=Symbol.for("react.suspense_list"),Ac=Symbol.for("react.memo"),kn=Symbol.for("react.lazy"),Hp=Symbol.for("react.offscreen"),Cd=Symbol.iterator;function yo(e){return e===null||typeof e!="object"?null:(e=Cd&&e[Cd]||e["@@iterator"],typeof e=="function"?e:null)}var ke=Object.assign,As;function Oo(e){if(As===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);As=t&&t[1]||""}return`
`+As+e}var Bs=!1;function Is(e,t){if(!e||Bs)return"";Bs=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var o=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){o=u}e.call(t.prototype)}else{try{throw Error()}catch(u){o=u}e()}}catch(u){if(u&&o&&typeof u.stack=="string"){for(var a=u.stack.split(`
`),l=o.stack.split(`
`),s=a.length-1,i=l.length-1;1<=s&&0<=i&&a[s]!==l[i];)i--;for(;1<=s&&0<=i;s--,i--)if(a[s]!==l[i]){if(s!==1||i!==1)do if(s--,i--,0>i||a[s]!==l[i]){var c=`
`+a[s].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=s&&0<=i);break}}}finally{Bs=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Oo(e):""}function w0(e){switch(e.tag){case 5:return Oo(e.type);case 16:return Oo("Lazy");case 13:return Oo("Suspense");case 19:return Oo("SuspenseList");case 0:case 2:case 15:return e=Is(e.type,!1),e;case 11:return e=Is(e.type.render,!1),e;case 1:return e=Is(e.type,!0),e;default:return""}}function _i(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Rr:return"Fragment";case Nr:return"Portal";case ji:return"Profiler";case Pc:return"StrictMode";case Si:return"Suspense";case bi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Up:return(e.displayName||"Context")+".Consumer";case Fp:return(e._context.displayName||"Context")+".Provider";case $c:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ac:return t=e.displayName||null,t!==null?t:_i(e.type)||"Memo";case kn:t=e._payload,e=e._init;try{return _i(e(t))}catch{}}return null}function k0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return _i(t);case 8:return t===Pc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Un(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Vp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function T0(e){var t=Vp(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(s){o=""+s,l.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return o},setValue:function(s){o=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Za(e){e._valueTracker||(e._valueTracker=T0(e))}function Wp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),o="";return e&&(o=Vp(e)?e.checked?"true":"false":e.value),e=o,e!==n?(t.setValue(e),!0):!1}function Ll(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function wi(e,t){var n=t.checked;return ke({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function jd(e,t){var n=t.defaultValue==null?"":t.defaultValue,o=t.checked!=null?t.checked:t.defaultChecked;n=Un(t.value!=null?t.value:n),e._wrapperState={initialChecked:o,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Zp(e,t){t=t.checked,t!=null&&Mc(e,"checked",t,!1)}function ki(e,t){Zp(e,t);var n=Un(t.value),o=t.type;if(n!=null)o==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ti(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ti(e,t.type,Un(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Sd(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!(o!=="submit"&&o!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ti(e,t,n){(t!=="number"||Ll(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Do=Array.isArray;function Vr(e,t,n,o){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&o&&(e[n].defaultSelected=!0)}else{for(n=""+Un(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,o&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Ei(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(M(91));return ke({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function bd(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(M(92));if(Do(n)){if(1<n.length)throw Error(M(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Un(n)}}function Gp(e,t){var n=Un(t.value),o=Un(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),o!=null&&(e.defaultValue=""+o)}function _d(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Kp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Li(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Kp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ga,Yp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,o,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,o,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ga=Ga||document.createElement("div"),Ga.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ga.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function na(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Uo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},E0=["Webkit","ms","Moz","O"];Object.keys(Uo).forEach(function(e){E0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Uo[t]=Uo[e]})});function Qp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Uo.hasOwnProperty(e)&&Uo[e]?(""+t).trim():t+"px"}function Xp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var o=n.indexOf("--")===0,a=Qp(n,t[n],o);n==="float"&&(n="cssFloat"),o?e.setProperty(n,a):e[n]=a}}var L0=ke({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ni(e,t){if(t){if(L0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(M(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(M(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(M(61))}if(t.style!=null&&typeof t.style!="object")throw Error(M(62))}}function Ri(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Oi=null;function Bc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Di=null,Wr=null,Zr=null;function wd(e){if(e=_a(e)){if(typeof Di!="function")throw Error(M(280));var t=e.stateNode;t&&(t=cs(t),Di(e.stateNode,e.type,t))}}function qp(e){Wr?Zr?Zr.push(e):Zr=[e]:Wr=e}function Jp(){if(Wr){var e=Wr,t=Zr;if(Zr=Wr=null,wd(e),t)for(e=0;e<t.length;e++)wd(t[e])}}function e2(e,t){return e(t)}function t2(){}var zs=!1;function n2(e,t,n){if(zs)return e(t,n);zs=!0;try{return e2(e,t,n)}finally{zs=!1,(Wr!==null||Zr!==null)&&(t2(),Jp())}}function ra(e,t){var n=e.stateNode;if(n===null)return null;var o=cs(n);if(o===null)return null;n=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(M(231,t,typeof n));return n}var Mi=!1;if(sn)try{var Co={};Object.defineProperty(Co,"passive",{get:function(){Mi=!0}}),window.addEventListener("test",Co,Co),window.removeEventListener("test",Co,Co)}catch{Mi=!1}function N0(e,t,n,o,a,l,s,i,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Ho=!1,Nl=null,Rl=!1,Pi=null,R0={onError:function(e){Ho=!0,Nl=e}};function O0(e,t,n,o,a,l,s,i,c){Ho=!1,Nl=null,N0.apply(R0,arguments)}function D0(e,t,n,o,a,l,s,i,c){if(O0.apply(this,arguments),Ho){if(Ho){var u=Nl;Ho=!1,Nl=null}else throw Error(M(198));Rl||(Rl=!0,Pi=u)}}function jr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function r2(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function kd(e){if(jr(e)!==e)throw Error(M(188))}function M0(e){var t=e.alternate;if(!t){if(t=jr(e),t===null)throw Error(M(188));return t!==e?null:e}for(var n=e,o=t;;){var a=n.return;if(a===null)break;var l=a.alternate;if(l===null){if(o=a.return,o!==null){n=o;continue}break}if(a.child===l.child){for(l=a.child;l;){if(l===n)return kd(a),e;if(l===o)return kd(a),t;l=l.sibling}throw Error(M(188))}if(n.return!==o.return)n=a,o=l;else{for(var s=!1,i=a.child;i;){if(i===n){s=!0,n=a,o=l;break}if(i===o){s=!0,o=a,n=l;break}i=i.sibling}if(!s){for(i=l.child;i;){if(i===n){s=!0,n=l,o=a;break}if(i===o){s=!0,o=l,n=a;break}i=i.sibling}if(!s)throw Error(M(189))}}if(n.alternate!==o)throw Error(M(190))}if(n.tag!==3)throw Error(M(188));return n.stateNode.current===n?e:t}function o2(e){return e=M0(e),e!==null?a2(e):null}function a2(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=a2(e);if(t!==null)return t;e=e.sibling}return null}var l2=yt.unstable_scheduleCallback,Td=yt.unstable_cancelCallback,P0=yt.unstable_shouldYield,$0=yt.unstable_requestPaint,Me=yt.unstable_now,A0=yt.unstable_getCurrentPriorityLevel,Ic=yt.unstable_ImmediatePriority,s2=yt.unstable_UserBlockingPriority,Ol=yt.unstable_NormalPriority,B0=yt.unstable_LowPriority,i2=yt.unstable_IdlePriority,as=null,Kt=null;function I0(e){if(Kt&&typeof Kt.onCommitFiberRoot=="function")try{Kt.onCommitFiberRoot(as,e,void 0,(e.current.flags&128)===128)}catch{}}var It=Math.clz32?Math.clz32:U0,z0=Math.log,F0=Math.LN2;function U0(e){return e>>>=0,e===0?32:31-(z0(e)/F0|0)|0}var Ka=64,Ya=4194304;function Mo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Dl(e,t){var n=e.pendingLanes;if(n===0)return 0;var o=0,a=e.suspendedLanes,l=e.pingedLanes,s=n&268435455;if(s!==0){var i=s&~a;i!==0?o=Mo(i):(l&=s,l!==0&&(o=Mo(l)))}else s=n&~a,s!==0?o=Mo(s):l!==0&&(o=Mo(l));if(o===0)return 0;if(t!==0&&t!==o&&!(t&a)&&(a=o&-o,l=t&-t,a>=l||a===16&&(l&4194240)!==0))return t;if(o&4&&(o|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=o;0<t;)n=31-It(t),a=1<<n,o|=e[n],t&=~a;return o}function H0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function V0(e,t){for(var n=e.suspendedLanes,o=e.pingedLanes,a=e.expirationTimes,l=e.pendingLanes;0<l;){var s=31-It(l),i=1<<s,c=a[s];c===-1?(!(i&n)||i&o)&&(a[s]=H0(i,t)):c<=t&&(e.expiredLanes|=i),l&=~i}}function $i(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function c2(){var e=Ka;return Ka<<=1,!(Ka&4194240)&&(Ka=64),e}function Fs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Sa(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-It(t),e[t]=n}function W0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-It(n),l=1<<a;t[a]=0,o[a]=-1,e[a]=-1,n&=~l}}function zc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var o=31-It(n),a=1<<o;a&t|e[o]&t&&(e[o]|=t),n&=~a}}var ie=0;function u2(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var d2,Fc,p2,f2,h2,Ai=!1,Qa=[],Mn=null,Pn=null,$n=null,oa=new Map,aa=new Map,Ln=[],Z0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ed(e,t){switch(e){case"focusin":case"focusout":Mn=null;break;case"dragenter":case"dragleave":Pn=null;break;case"mouseover":case"mouseout":$n=null;break;case"pointerover":case"pointerout":oa.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":aa.delete(t.pointerId)}}function jo(e,t,n,o,a,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:o,nativeEvent:l,targetContainers:[a]},t!==null&&(t=_a(t),t!==null&&Fc(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function G0(e,t,n,o,a){switch(t){case"focusin":return Mn=jo(Mn,e,t,n,o,a),!0;case"dragenter":return Pn=jo(Pn,e,t,n,o,a),!0;case"mouseover":return $n=jo($n,e,t,n,o,a),!0;case"pointerover":var l=a.pointerId;return oa.set(l,jo(oa.get(l)||null,e,t,n,o,a)),!0;case"gotpointercapture":return l=a.pointerId,aa.set(l,jo(aa.get(l)||null,e,t,n,o,a)),!0}return!1}function m2(e){var t=sr(e.target);if(t!==null){var n=jr(t);if(n!==null){if(t=n.tag,t===13){if(t=r2(n),t!==null){e.blockedOn=t,h2(e.priority,function(){p2(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function xl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Bi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var o=new n.constructor(n.type,n);Oi=o,n.target.dispatchEvent(o),Oi=null}else return t=_a(n),t!==null&&Fc(t),e.blockedOn=n,!1;t.shift()}return!0}function Ld(e,t,n){xl(e)&&n.delete(t)}function K0(){Ai=!1,Mn!==null&&xl(Mn)&&(Mn=null),Pn!==null&&xl(Pn)&&(Pn=null),$n!==null&&xl($n)&&($n=null),oa.forEach(Ld),aa.forEach(Ld)}function So(e,t){e.blockedOn===t&&(e.blockedOn=null,Ai||(Ai=!0,yt.unstable_scheduleCallback(yt.unstable_NormalPriority,K0)))}function la(e){function t(a){return So(a,e)}if(0<Qa.length){So(Qa[0],e);for(var n=1;n<Qa.length;n++){var o=Qa[n];o.blockedOn===e&&(o.blockedOn=null)}}for(Mn!==null&&So(Mn,e),Pn!==null&&So(Pn,e),$n!==null&&So($n,e),oa.forEach(t),aa.forEach(t),n=0;n<Ln.length;n++)o=Ln[n],o.blockedOn===e&&(o.blockedOn=null);for(;0<Ln.length&&(n=Ln[0],n.blockedOn===null);)m2(n),n.blockedOn===null&&Ln.shift()}var Gr=hn.ReactCurrentBatchConfig,Ml=!0;function Y0(e,t,n,o){var a=ie,l=Gr.transition;Gr.transition=null;try{ie=1,Uc(e,t,n,o)}finally{ie=a,Gr.transition=l}}function Q0(e,t,n,o){var a=ie,l=Gr.transition;Gr.transition=null;try{ie=4,Uc(e,t,n,o)}finally{ie=a,Gr.transition=l}}function Uc(e,t,n,o){if(Ml){var a=Bi(e,t,n,o);if(a===null)Xs(e,t,o,Pl,n),Ed(e,o);else if(G0(a,e,t,n,o))o.stopPropagation();else if(Ed(e,o),t&4&&-1<Z0.indexOf(e)){for(;a!==null;){var l=_a(a);if(l!==null&&d2(l),l=Bi(e,t,n,o),l===null&&Xs(e,t,o,Pl,n),l===a)break;a=l}a!==null&&o.stopPropagation()}else Xs(e,t,o,null,n)}}var Pl=null;function Bi(e,t,n,o){if(Pl=null,e=Bc(o),e=sr(e),e!==null)if(t=jr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=r2(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Pl=e,null}function x2(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(A0()){case Ic:return 1;case s2:return 4;case Ol:case B0:return 16;case i2:return 536870912;default:return 16}default:return 16}}var On=null,Hc=null,gl=null;function g2(){if(gl)return gl;var e,t=Hc,n=t.length,o,a="value"in On?On.value:On.textContent,l=a.length;for(e=0;e<n&&t[e]===a[e];e++);var s=n-e;for(o=1;o<=s&&t[n-o]===a[l-o];o++);return gl=a.slice(e,1<o?1-o:void 0)}function vl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Xa(){return!0}function Nd(){return!1}function jt(e){function t(n,o,a,l,s){this._reactName=n,this._targetInst=a,this.type=o,this.nativeEvent=l,this.target=s,this.currentTarget=null;for(var i in e)e.hasOwnProperty(i)&&(n=e[i],this[i]=n?n(l):l[i]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Xa:Nd,this.isPropagationStopped=Nd,this}return ke(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Xa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Xa)},persist:function(){},isPersistent:Xa}),t}var lo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vc=jt(lo),ba=ke({},lo,{view:0,detail:0}),X0=jt(ba),Us,Hs,bo,ls=ke({},ba,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==bo&&(bo&&e.type==="mousemove"?(Us=e.screenX-bo.screenX,Hs=e.screenY-bo.screenY):Hs=Us=0,bo=e),Us)},movementY:function(e){return"movementY"in e?e.movementY:Hs}}),Rd=jt(ls),q0=ke({},ls,{dataTransfer:0}),J0=jt(q0),e5=ke({},ba,{relatedTarget:0}),Vs=jt(e5),t5=ke({},lo,{animationName:0,elapsedTime:0,pseudoElement:0}),n5=jt(t5),r5=ke({},lo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),o5=jt(r5),a5=ke({},lo,{data:0}),Od=jt(a5),l5={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},s5={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},i5={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function c5(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=i5[e])?!!t[e]:!1}function Wc(){return c5}var u5=ke({},ba,{key:function(e){if(e.key){var t=l5[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=vl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?s5[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wc,charCode:function(e){return e.type==="keypress"?vl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?vl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),d5=jt(u5),p5=ke({},ls,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Dd=jt(p5),f5=ke({},ba,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wc}),h5=jt(f5),m5=ke({},lo,{propertyName:0,elapsedTime:0,pseudoElement:0}),x5=jt(m5),g5=ke({},ls,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),v5=jt(g5),y5=[9,13,27,32],Zc=sn&&"CompositionEvent"in window,Vo=null;sn&&"documentMode"in document&&(Vo=document.documentMode);var C5=sn&&"TextEvent"in window&&!Vo,v2=sn&&(!Zc||Vo&&8<Vo&&11>=Vo),Md=String.fromCharCode(32),Pd=!1;function y2(e,t){switch(e){case"keyup":return y5.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function C2(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Or=!1;function j5(e,t){switch(e){case"compositionend":return C2(t);case"keypress":return t.which!==32?null:(Pd=!0,Md);case"textInput":return e=t.data,e===Md&&Pd?null:e;default:return null}}function S5(e,t){if(Or)return e==="compositionend"||!Zc&&y2(e,t)?(e=g2(),gl=Hc=On=null,Or=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return v2&&t.locale!=="ko"?null:t.data;default:return null}}var b5={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $d(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!b5[e.type]:t==="textarea"}function j2(e,t,n,o){qp(o),t=$l(t,"onChange"),0<t.length&&(n=new Vc("onChange","change",null,n,o),e.push({event:n,listeners:t}))}var Wo=null,sa=null;function _5(e){O2(e,0)}function ss(e){var t=Pr(e);if(Wp(t))return e}function w5(e,t){if(e==="change")return t}var S2=!1;if(sn){var Ws;if(sn){var Zs="oninput"in document;if(!Zs){var Ad=document.createElement("div");Ad.setAttribute("oninput","return;"),Zs=typeof Ad.oninput=="function"}Ws=Zs}else Ws=!1;S2=Ws&&(!document.documentMode||9<document.documentMode)}function Bd(){Wo&&(Wo.detachEvent("onpropertychange",b2),sa=Wo=null)}function b2(e){if(e.propertyName==="value"&&ss(sa)){var t=[];j2(t,sa,e,Bc(e)),n2(_5,t)}}function k5(e,t,n){e==="focusin"?(Bd(),Wo=t,sa=n,Wo.attachEvent("onpropertychange",b2)):e==="focusout"&&Bd()}function T5(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ss(sa)}function E5(e,t){if(e==="click")return ss(t)}function L5(e,t){if(e==="input"||e==="change")return ss(t)}function N5(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ft=typeof Object.is=="function"?Object.is:N5;function ia(e,t){if(Ft(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var a=n[o];if(!Ci.call(t,a)||!Ft(e[a],t[a]))return!1}return!0}function Id(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function zd(e,t){var n=Id(e);e=0;for(var o;n;){if(n.nodeType===3){if(o=e+n.textContent.length,e<=t&&o>=t)return{node:n,offset:t-e};e=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Id(n)}}function _2(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?_2(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function w2(){for(var e=window,t=Ll();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ll(e.document)}return t}function Gc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function R5(e){var t=w2(),n=e.focusedElem,o=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&_2(n.ownerDocument.documentElement,n)){if(o!==null&&Gc(n)){if(t=o.start,e=o.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,l=Math.min(o.start,a);o=o.end===void 0?l:Math.min(o.end,a),!e.extend&&l>o&&(a=o,o=l,l=a),a=zd(n,l);var s=zd(n,o);a&&s&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),l>o?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var O5=sn&&"documentMode"in document&&11>=document.documentMode,Dr=null,Ii=null,Zo=null,zi=!1;function Fd(e,t,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zi||Dr==null||Dr!==Ll(o)||(o=Dr,"selectionStart"in o&&Gc(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Zo&&ia(Zo,o)||(Zo=o,o=$l(Ii,"onSelect"),0<o.length&&(t=new Vc("onSelect","select",null,t,n),e.push({event:t,listeners:o}),t.target=Dr)))}function qa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Mr={animationend:qa("Animation","AnimationEnd"),animationiteration:qa("Animation","AnimationIteration"),animationstart:qa("Animation","AnimationStart"),transitionend:qa("Transition","TransitionEnd")},Gs={},k2={};sn&&(k2=document.createElement("div").style,"AnimationEvent"in window||(delete Mr.animationend.animation,delete Mr.animationiteration.animation,delete Mr.animationstart.animation),"TransitionEvent"in window||delete Mr.transitionend.transition);function is(e){if(Gs[e])return Gs[e];if(!Mr[e])return e;var t=Mr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in k2)return Gs[e]=t[n];return e}var T2=is("animationend"),E2=is("animationiteration"),L2=is("animationstart"),N2=is("transitionend"),R2=new Map,Ud="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gn(e,t){R2.set(e,t),Cr(t,[e])}for(var Ks=0;Ks<Ud.length;Ks++){var Ys=Ud[Ks],D5=Ys.toLowerCase(),M5=Ys[0].toUpperCase()+Ys.slice(1);Gn(D5,"on"+M5)}Gn(T2,"onAnimationEnd");Gn(E2,"onAnimationIteration");Gn(L2,"onAnimationStart");Gn("dblclick","onDoubleClick");Gn("focusin","onFocus");Gn("focusout","onBlur");Gn(N2,"onTransitionEnd");Xr("onMouseEnter",["mouseout","mouseover"]);Xr("onMouseLeave",["mouseout","mouseover"]);Xr("onPointerEnter",["pointerout","pointerover"]);Xr("onPointerLeave",["pointerout","pointerover"]);Cr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Cr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Cr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Cr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Cr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Cr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),P5=new Set("cancel close invalid load scroll toggle".split(" ").concat(Po));function Hd(e,t,n){var o=e.type||"unknown-event";e.currentTarget=n,D0(o,t,void 0,e),e.currentTarget=null}function O2(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var o=e[n],a=o.event;o=o.listeners;e:{var l=void 0;if(t)for(var s=o.length-1;0<=s;s--){var i=o[s],c=i.instance,u=i.currentTarget;if(i=i.listener,c!==l&&a.isPropagationStopped())break e;Hd(a,i,u),l=c}else for(s=0;s<o.length;s++){if(i=o[s],c=i.instance,u=i.currentTarget,i=i.listener,c!==l&&a.isPropagationStopped())break e;Hd(a,i,u),l=c}}}if(Rl)throw e=Pi,Rl=!1,Pi=null,e}function me(e,t){var n=t[Wi];n===void 0&&(n=t[Wi]=new Set);var o=e+"__bubble";n.has(o)||(D2(t,e,2,!1),n.add(o))}function Qs(e,t,n){var o=0;t&&(o|=4),D2(n,e,o,t)}var Ja="_reactListening"+Math.random().toString(36).slice(2);function ca(e){if(!e[Ja]){e[Ja]=!0,zp.forEach(function(n){n!=="selectionchange"&&(P5.has(n)||Qs(n,!1,e),Qs(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ja]||(t[Ja]=!0,Qs("selectionchange",!1,t))}}function D2(e,t,n,o){switch(x2(t)){case 1:var a=Y0;break;case 4:a=Q0;break;default:a=Uc}n=a.bind(null,t,n,e),a=void 0,!Mi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),o?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Xs(e,t,n,o,a){var l=o;if(!(t&1)&&!(t&2)&&o!==null)e:for(;;){if(o===null)return;var s=o.tag;if(s===3||s===4){var i=o.stateNode.containerInfo;if(i===a||i.nodeType===8&&i.parentNode===a)break;if(s===4)for(s=o.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===a||c.nodeType===8&&c.parentNode===a))return;s=s.return}for(;i!==null;){if(s=sr(i),s===null)return;if(c=s.tag,c===5||c===6){o=l=s;continue e}i=i.parentNode}}o=o.return}n2(function(){var u=l,d=Bc(n),x=[];e:{var m=R2.get(e);if(m!==void 0){var j=Vc,y=e;switch(e){case"keypress":if(vl(n)===0)break e;case"keydown":case"keyup":j=d5;break;case"focusin":y="focus",j=Vs;break;case"focusout":y="blur",j=Vs;break;case"beforeblur":case"afterblur":j=Vs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=Rd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=J0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=h5;break;case T2:case E2:case L2:j=n5;break;case N2:j=x5;break;case"scroll":j=X0;break;case"wheel":j=v5;break;case"copy":case"cut":case"paste":j=o5;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=Dd}var S=(t&4)!==0,N=!S&&e==="scroll",g=S?m!==null?m+"Capture":null:m;S=[];for(var p=u,h;p!==null;){h=p;var f=h.stateNode;if(h.tag===5&&f!==null&&(h=f,g!==null&&(f=ra(p,g),f!=null&&S.push(ua(p,f,h)))),N)break;p=p.return}0<S.length&&(m=new j(m,y,null,n,d),x.push({event:m,listeners:S}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",j=e==="mouseout"||e==="pointerout",m&&n!==Oi&&(y=n.relatedTarget||n.fromElement)&&(sr(y)||y[cn]))break e;if((j||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,j?(y=n.relatedTarget||n.toElement,j=u,y=y?sr(y):null,y!==null&&(N=jr(y),y!==N||y.tag!==5&&y.tag!==6)&&(y=null)):(j=null,y=u),j!==y)){if(S=Rd,f="onMouseLeave",g="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(S=Dd,f="onPointerLeave",g="onPointerEnter",p="pointer"),N=j==null?m:Pr(j),h=y==null?m:Pr(y),m=new S(f,p+"leave",j,n,d),m.target=N,m.relatedTarget=h,f=null,sr(d)===u&&(S=new S(g,p+"enter",y,n,d),S.target=h,S.relatedTarget=N,f=S),N=f,j&&y)t:{for(S=j,g=y,p=0,h=S;h;h=Tr(h))p++;for(h=0,f=g;f;f=Tr(f))h++;for(;0<p-h;)S=Tr(S),p--;for(;0<h-p;)g=Tr(g),h--;for(;p--;){if(S===g||g!==null&&S===g.alternate)break t;S=Tr(S),g=Tr(g)}S=null}else S=null;j!==null&&Vd(x,m,j,S,!1),y!==null&&N!==null&&Vd(x,N,y,S,!0)}}e:{if(m=u?Pr(u):window,j=m.nodeName&&m.nodeName.toLowerCase(),j==="select"||j==="input"&&m.type==="file")var v=w5;else if($d(m))if(S2)v=L5;else{v=T5;var C=k5}else(j=m.nodeName)&&j.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(v=E5);if(v&&(v=v(e,u))){j2(x,v,n,d);break e}C&&C(e,m,u),e==="focusout"&&(C=m._wrapperState)&&C.controlled&&m.type==="number"&&Ti(m,"number",m.value)}switch(C=u?Pr(u):window,e){case"focusin":($d(C)||C.contentEditable==="true")&&(Dr=C,Ii=u,Zo=null);break;case"focusout":Zo=Ii=Dr=null;break;case"mousedown":zi=!0;break;case"contextmenu":case"mouseup":case"dragend":zi=!1,Fd(x,n,d);break;case"selectionchange":if(O5)break;case"keydown":case"keyup":Fd(x,n,d)}var b;if(Zc)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Or?y2(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(v2&&n.locale!=="ko"&&(Or||T!=="onCompositionStart"?T==="onCompositionEnd"&&Or&&(b=g2()):(On=d,Hc="value"in On?On.value:On.textContent,Or=!0)),C=$l(u,T),0<C.length&&(T=new Od(T,e,null,n,d),x.push({event:T,listeners:C}),b?T.data=b:(b=C2(n),b!==null&&(T.data=b)))),(b=C5?j5(e,n):S5(e,n))&&(u=$l(u,"onBeforeInput"),0<u.length&&(d=new Od("onBeforeInput","beforeinput",null,n,d),x.push({event:d,listeners:u}),d.data=b))}O2(x,t)})}function ua(e,t,n){return{instance:e,listener:t,currentTarget:n}}function $l(e,t){for(var n=t+"Capture",o=[];e!==null;){var a=e,l=a.stateNode;a.tag===5&&l!==null&&(a=l,l=ra(e,n),l!=null&&o.unshift(ua(e,l,a)),l=ra(e,t),l!=null&&o.push(ua(e,l,a))),e=e.return}return o}function Tr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Vd(e,t,n,o,a){for(var l=t._reactName,s=[];n!==null&&n!==o;){var i=n,c=i.alternate,u=i.stateNode;if(c!==null&&c===o)break;i.tag===5&&u!==null&&(i=u,a?(c=ra(n,l),c!=null&&s.unshift(ua(n,c,i))):a||(c=ra(n,l),c!=null&&s.push(ua(n,c,i)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var $5=/\r\n?/g,A5=/\u0000|\uFFFD/g;function Wd(e){return(typeof e=="string"?e:""+e).replace($5,`
`).replace(A5,"")}function el(e,t,n){if(t=Wd(t),Wd(e)!==t&&n)throw Error(M(425))}function Al(){}var Fi=null,Ui=null;function Hi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Vi=typeof setTimeout=="function"?setTimeout:void 0,B5=typeof clearTimeout=="function"?clearTimeout:void 0,Zd=typeof Promise=="function"?Promise:void 0,I5=typeof queueMicrotask=="function"?queueMicrotask:typeof Zd<"u"?function(e){return Zd.resolve(null).then(e).catch(z5)}:Vi;function z5(e){setTimeout(function(){throw e})}function qs(e,t){var n=t,o=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(o===0){e.removeChild(a),la(t);return}o--}else n!=="$"&&n!=="$?"&&n!=="$!"||o++;n=a}while(n);la(t)}function An(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Gd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var so=Math.random().toString(36).slice(2),Gt="__reactFiber$"+so,da="__reactProps$"+so,cn="__reactContainer$"+so,Wi="__reactEvents$"+so,F5="__reactListeners$"+so,U5="__reactHandles$"+so;function sr(e){var t=e[Gt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[cn]||n[Gt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Gd(e);e!==null;){if(n=e[Gt])return n;e=Gd(e)}return t}e=n,n=e.parentNode}return null}function _a(e){return e=e[Gt]||e[cn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Pr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(M(33))}function cs(e){return e[da]||null}var Zi=[],$r=-1;function Kn(e){return{current:e}}function xe(e){0>$r||(e.current=Zi[$r],Zi[$r]=null,$r--)}function fe(e,t){$r++,Zi[$r]=e.current,e.current=t}var Hn={},et=Kn(Hn),pt=Kn(!1),fr=Hn;function qr(e,t){var n=e.type.contextTypes;if(!n)return Hn;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var a={},l;for(l in n)a[l]=t[l];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function ft(e){return e=e.childContextTypes,e!=null}function Bl(){xe(pt),xe(et)}function Kd(e,t,n){if(et.current!==Hn)throw Error(M(168));fe(et,t),fe(pt,n)}function M2(e,t,n){var o=e.stateNode;if(t=t.childContextTypes,typeof o.getChildContext!="function")return n;o=o.getChildContext();for(var a in o)if(!(a in t))throw Error(M(108,k0(e)||"Unknown",a));return ke({},n,o)}function Il(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Hn,fr=et.current,fe(et,e),fe(pt,pt.current),!0}function Yd(e,t,n){var o=e.stateNode;if(!o)throw Error(M(169));n?(e=M2(e,t,fr),o.__reactInternalMemoizedMergedChildContext=e,xe(pt),xe(et),fe(et,e)):xe(pt),fe(pt,n)}var nn=null,us=!1,Js=!1;function P2(e){nn===null?nn=[e]:nn.push(e)}function H5(e){us=!0,P2(e)}function Yn(){if(!Js&&nn!==null){Js=!0;var e=0,t=ie;try{var n=nn;for(ie=1;e<n.length;e++){var o=n[e];do o=o(!0);while(o!==null)}nn=null,us=!1}catch(a){throw nn!==null&&(nn=nn.slice(e+1)),l2(Ic,Yn),a}finally{ie=t,Js=!1}}return null}var Ar=[],Br=0,zl=null,Fl=0,_t=[],wt=0,hr=null,rn=1,on="";function ar(e,t){Ar[Br++]=Fl,Ar[Br++]=zl,zl=e,Fl=t}function $2(e,t,n){_t[wt++]=rn,_t[wt++]=on,_t[wt++]=hr,hr=e;var o=rn;e=on;var a=32-It(o)-1;o&=~(1<<a),n+=1;var l=32-It(t)+a;if(30<l){var s=a-a%5;l=(o&(1<<s)-1).toString(32),o>>=s,a-=s,rn=1<<32-It(t)+a|n<<a|o,on=l+e}else rn=1<<l|n<<a|o,on=e}function Kc(e){e.return!==null&&(ar(e,1),$2(e,1,0))}function Yc(e){for(;e===zl;)zl=Ar[--Br],Ar[Br]=null,Fl=Ar[--Br],Ar[Br]=null;for(;e===hr;)hr=_t[--wt],_t[wt]=null,on=_t[--wt],_t[wt]=null,rn=_t[--wt],_t[wt]=null}var vt=null,gt=null,ve=!1,Bt=null;function A2(e,t){var n=kt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Qd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,vt=e,gt=An(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,vt=e,gt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=hr!==null?{id:rn,overflow:on}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=kt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,vt=e,gt=null,!0):!1;default:return!1}}function Gi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ki(e){if(ve){var t=gt;if(t){var n=t;if(!Qd(e,t)){if(Gi(e))throw Error(M(418));t=An(n.nextSibling);var o=vt;t&&Qd(e,t)?A2(o,n):(e.flags=e.flags&-4097|2,ve=!1,vt=e)}}else{if(Gi(e))throw Error(M(418));e.flags=e.flags&-4097|2,ve=!1,vt=e}}}function Xd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;vt=e}function tl(e){if(e!==vt)return!1;if(!ve)return Xd(e),ve=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Hi(e.type,e.memoizedProps)),t&&(t=gt)){if(Gi(e))throw B2(),Error(M(418));for(;t;)A2(e,t),t=An(t.nextSibling)}if(Xd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(M(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){gt=An(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}gt=null}}else gt=vt?An(e.stateNode.nextSibling):null;return!0}function B2(){for(var e=gt;e;)e=An(e.nextSibling)}function Jr(){gt=vt=null,ve=!1}function Qc(e){Bt===null?Bt=[e]:Bt.push(e)}var V5=hn.ReactCurrentBatchConfig;function Pt(e,t){if(e&&e.defaultProps){t=ke({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Ul=Kn(null),Hl=null,Ir=null,Xc=null;function qc(){Xc=Ir=Hl=null}function Jc(e){var t=Ul.current;xe(Ul),e._currentValue=t}function Yi(e,t,n){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===n)break;e=e.return}}function Kr(e,t){Hl=e,Xc=Ir=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(dt=!0),e.firstContext=null)}function Lt(e){var t=e._currentValue;if(Xc!==e)if(e={context:e,memoizedValue:t,next:null},Ir===null){if(Hl===null)throw Error(M(308));Ir=e,Hl.dependencies={lanes:0,firstContext:e}}else Ir=Ir.next=e;return t}var ir=null;function eu(e){ir===null?ir=[e]:ir.push(e)}function I2(e,t,n,o){var a=t.interleaved;return a===null?(n.next=n,eu(t)):(n.next=a.next,a.next=n),t.interleaved=n,un(e,o)}function un(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Tn=!1;function tu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function z2(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function an(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Bn(e,t,n){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,oe&2){var a=o.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),o.pending=t,un(e,n)}return a=o.interleaved,a===null?(t.next=t,eu(o)):(t.next=a.next,a.next=t),o.interleaved=t,un(e,n)}function yl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,zc(e,n)}}function qd(e,t){var n=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var a=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?a=l=s:l=l.next=s,n=n.next}while(n!==null);l===null?a=l=t:l=l.next=t}else a=l=t;n={baseState:o.baseState,firstBaseUpdate:a,lastBaseUpdate:l,shared:o.shared,effects:o.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Vl(e,t,n,o){var a=e.updateQueue;Tn=!1;var l=a.firstBaseUpdate,s=a.lastBaseUpdate,i=a.shared.pending;if(i!==null){a.shared.pending=null;var c=i,u=c.next;c.next=null,s===null?l=u:s.next=u,s=c;var d=e.alternate;d!==null&&(d=d.updateQueue,i=d.lastBaseUpdate,i!==s&&(i===null?d.firstBaseUpdate=u:i.next=u,d.lastBaseUpdate=c))}if(l!==null){var x=a.baseState;s=0,d=u=c=null,i=l;do{var m=i.lane,j=i.eventTime;if((o&m)===m){d!==null&&(d=d.next={eventTime:j,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null});e:{var y=e,S=i;switch(m=t,j=n,S.tag){case 1:if(y=S.payload,typeof y=="function"){x=y.call(j,x,m);break e}x=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=S.payload,m=typeof y=="function"?y.call(j,x,m):y,m==null)break e;x=ke({},x,m);break e;case 2:Tn=!0}}i.callback!==null&&i.lane!==0&&(e.flags|=64,m=a.effects,m===null?a.effects=[i]:m.push(i))}else j={eventTime:j,lane:m,tag:i.tag,payload:i.payload,callback:i.callback,next:null},d===null?(u=d=j,c=x):d=d.next=j,s|=m;if(i=i.next,i===null){if(i=a.shared.pending,i===null)break;m=i,i=m.next,m.next=null,a.lastBaseUpdate=m,a.shared.pending=null}}while(1);if(d===null&&(c=x),a.baseState=c,a.firstBaseUpdate=u,a.lastBaseUpdate=d,t=a.shared.interleaved,t!==null){a=t;do s|=a.lane,a=a.next;while(a!==t)}else l===null&&(a.shared.lanes=0);xr|=s,e.lanes=s,e.memoizedState=x}}function Jd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var o=e[t],a=o.callback;if(a!==null){if(o.callback=null,o=n,typeof a!="function")throw Error(M(191,a));a.call(o)}}}var F2=new Ip.Component().refs;function Qi(e,t,n,o){t=e.memoizedState,n=n(o,t),n=n==null?t:ke({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ds={isMounted:function(e){return(e=e._reactInternals)?jr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var o=rt(),a=zn(e),l=an(o,a);l.payload=t,n!=null&&(l.callback=n),t=Bn(e,l,a),t!==null&&(zt(t,e,a,o),yl(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var o=rt(),a=zn(e),l=an(o,a);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Bn(e,l,a),t!==null&&(zt(t,e,a,o),yl(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=rt(),o=zn(e),a=an(n,o);a.tag=2,t!=null&&(a.callback=t),t=Bn(e,a,o),t!==null&&(zt(t,e,o,n),yl(t,e,o))}};function e1(e,t,n,o,a,l,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,l,s):t.prototype&&t.prototype.isPureReactComponent?!ia(n,o)||!ia(a,l):!0}function U2(e,t,n){var o=!1,a=Hn,l=t.contextType;return typeof l=="object"&&l!==null?l=Lt(l):(a=ft(t)?fr:et.current,o=t.contextTypes,l=(o=o!=null)?qr(e,a):Hn),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ds,e.stateNode=t,t._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=l),t}function t1(e,t,n,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,o),t.state!==e&&ds.enqueueReplaceState(t,t.state,null)}function Xi(e,t,n,o){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs=F2,tu(e);var l=t.contextType;typeof l=="object"&&l!==null?a.context=Lt(l):(l=ft(t)?fr:et.current,a.context=qr(e,l)),a.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Qi(e,t,l,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&ds.enqueueReplaceState(a,a.state,null),Vl(e,n,a,o),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function _o(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(M(309));var o=n.stateNode}if(!o)throw Error(M(147,e));var a=o,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(s){var i=a.refs;i===F2&&(i=a.refs={}),s===null?delete i[l]:i[l]=s},t._stringRef=l,t)}if(typeof e!="string")throw Error(M(284));if(!n._owner)throw Error(M(290,e))}return e}function nl(e,t){throw e=Object.prototype.toString.call(t),Error(M(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function n1(e){var t=e._init;return t(e._payload)}function H2(e){function t(g,p){if(e){var h=g.deletions;h===null?(g.deletions=[p],g.flags|=16):h.push(p)}}function n(g,p){if(!e)return null;for(;p!==null;)t(g,p),p=p.sibling;return null}function o(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function a(g,p){return g=Fn(g,p),g.index=0,g.sibling=null,g}function l(g,p,h){return g.index=h,e?(h=g.alternate,h!==null?(h=h.index,h<p?(g.flags|=2,p):h):(g.flags|=2,p)):(g.flags|=1048576,p)}function s(g){return e&&g.alternate===null&&(g.flags|=2),g}function i(g,p,h,f){return p===null||p.tag!==6?(p=li(h,g.mode,f),p.return=g,p):(p=a(p,h),p.return=g,p)}function c(g,p,h,f){var v=h.type;return v===Rr?d(g,p,h.props.children,f,h.key):p!==null&&(p.elementType===v||typeof v=="object"&&v!==null&&v.$$typeof===kn&&n1(v)===p.type)?(f=a(p,h.props),f.ref=_o(g,p,h),f.return=g,f):(f=wl(h.type,h.key,h.props,null,g.mode,f),f.ref=_o(g,p,h),f.return=g,f)}function u(g,p,h,f){return p===null||p.tag!==4||p.stateNode.containerInfo!==h.containerInfo||p.stateNode.implementation!==h.implementation?(p=si(h,g.mode,f),p.return=g,p):(p=a(p,h.children||[]),p.return=g,p)}function d(g,p,h,f,v){return p===null||p.tag!==7?(p=pr(h,g.mode,f,v),p.return=g,p):(p=a(p,h),p.return=g,p)}function x(g,p,h){if(typeof p=="string"&&p!==""||typeof p=="number")return p=li(""+p,g.mode,h),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Wa:return h=wl(p.type,p.key,p.props,null,g.mode,h),h.ref=_o(g,null,p),h.return=g,h;case Nr:return p=si(p,g.mode,h),p.return=g,p;case kn:var f=p._init;return x(g,f(p._payload),h)}if(Do(p)||yo(p))return p=pr(p,g.mode,h,null),p.return=g,p;nl(g,p)}return null}function m(g,p,h,f){var v=p!==null?p.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return v!==null?null:i(g,p,""+h,f);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Wa:return h.key===v?c(g,p,h,f):null;case Nr:return h.key===v?u(g,p,h,f):null;case kn:return v=h._init,m(g,p,v(h._payload),f)}if(Do(h)||yo(h))return v!==null?null:d(g,p,h,f,null);nl(g,h)}return null}function j(g,p,h,f,v){if(typeof f=="string"&&f!==""||typeof f=="number")return g=g.get(h)||null,i(p,g,""+f,v);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Wa:return g=g.get(f.key===null?h:f.key)||null,c(p,g,f,v);case Nr:return g=g.get(f.key===null?h:f.key)||null,u(p,g,f,v);case kn:var C=f._init;return j(g,p,h,C(f._payload),v)}if(Do(f)||yo(f))return g=g.get(h)||null,d(p,g,f,v,null);nl(p,f)}return null}function y(g,p,h,f){for(var v=null,C=null,b=p,T=p=0,E=null;b!==null&&T<h.length;T++){b.index>T?(E=b,b=null):E=b.sibling;var P=m(g,b,h[T],f);if(P===null){b===null&&(b=E);break}e&&b&&P.alternate===null&&t(g,b),p=l(P,p,T),C===null?v=P:C.sibling=P,C=P,b=E}if(T===h.length)return n(g,b),ve&&ar(g,T),v;if(b===null){for(;T<h.length;T++)b=x(g,h[T],f),b!==null&&(p=l(b,p,T),C===null?v=b:C.sibling=b,C=b);return ve&&ar(g,T),v}for(b=o(g,b);T<h.length;T++)E=j(b,g,T,h[T],f),E!==null&&(e&&E.alternate!==null&&b.delete(E.key===null?T:E.key),p=l(E,p,T),C===null?v=E:C.sibling=E,C=E);return e&&b.forEach(function(U){return t(g,U)}),ve&&ar(g,T),v}function S(g,p,h,f){var v=yo(h);if(typeof v!="function")throw Error(M(150));if(h=v.call(h),h==null)throw Error(M(151));for(var C=v=null,b=p,T=p=0,E=null,P=h.next();b!==null&&!P.done;T++,P=h.next()){b.index>T?(E=b,b=null):E=b.sibling;var U=m(g,b,P.value,f);if(U===null){b===null&&(b=E);break}e&&b&&U.alternate===null&&t(g,b),p=l(U,p,T),C===null?v=U:C.sibling=U,C=U,b=E}if(P.done)return n(g,b),ve&&ar(g,T),v;if(b===null){for(;!P.done;T++,P=h.next())P=x(g,P.value,f),P!==null&&(p=l(P,p,T),C===null?v=P:C.sibling=P,C=P);return ve&&ar(g,T),v}for(b=o(g,b);!P.done;T++,P=h.next())P=j(b,g,T,P.value,f),P!==null&&(e&&P.alternate!==null&&b.delete(P.key===null?T:P.key),p=l(P,p,T),C===null?v=P:C.sibling=P,C=P);return e&&b.forEach(function(X){return t(g,X)}),ve&&ar(g,T),v}function N(g,p,h,f){if(typeof h=="object"&&h!==null&&h.type===Rr&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Wa:e:{for(var v=h.key,C=p;C!==null;){if(C.key===v){if(v=h.type,v===Rr){if(C.tag===7){n(g,C.sibling),p=a(C,h.props.children),p.return=g,g=p;break e}}else if(C.elementType===v||typeof v=="object"&&v!==null&&v.$$typeof===kn&&n1(v)===C.type){n(g,C.sibling),p=a(C,h.props),p.ref=_o(g,C,h),p.return=g,g=p;break e}n(g,C);break}else t(g,C);C=C.sibling}h.type===Rr?(p=pr(h.props.children,g.mode,f,h.key),p.return=g,g=p):(f=wl(h.type,h.key,h.props,null,g.mode,f),f.ref=_o(g,p,h),f.return=g,g=f)}return s(g);case Nr:e:{for(C=h.key;p!==null;){if(p.key===C)if(p.tag===4&&p.stateNode.containerInfo===h.containerInfo&&p.stateNode.implementation===h.implementation){n(g,p.sibling),p=a(p,h.children||[]),p.return=g,g=p;break e}else{n(g,p);break}else t(g,p);p=p.sibling}p=si(h,g.mode,f),p.return=g,g=p}return s(g);case kn:return C=h._init,N(g,p,C(h._payload),f)}if(Do(h))return y(g,p,h,f);if(yo(h))return S(g,p,h,f);nl(g,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,p!==null&&p.tag===6?(n(g,p.sibling),p=a(p,h),p.return=g,g=p):(n(g,p),p=li(h,g.mode,f),p.return=g,g=p),s(g)):n(g,p)}return N}var eo=H2(!0),V2=H2(!1),wa={},Yt=Kn(wa),pa=Kn(wa),fa=Kn(wa);function cr(e){if(e===wa)throw Error(M(174));return e}function nu(e,t){switch(fe(fa,t),fe(pa,e),fe(Yt,wa),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Li(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Li(t,e)}xe(Yt),fe(Yt,t)}function to(){xe(Yt),xe(pa),xe(fa)}function W2(e){cr(fa.current);var t=cr(Yt.current),n=Li(t,e.type);t!==n&&(fe(pa,e),fe(Yt,n))}function ru(e){pa.current===e&&(xe(Yt),xe(pa))}var _e=Kn(0);function Wl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ei=[];function ou(){for(var e=0;e<ei.length;e++)ei[e]._workInProgressVersionPrimary=null;ei.length=0}var Cl=hn.ReactCurrentDispatcher,ti=hn.ReactCurrentBatchConfig,mr=0,we=null,ze=null,He=null,Zl=!1,Go=!1,ha=0,W5=0;function Qe(){throw Error(M(321))}function au(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ft(e[n],t[n]))return!1;return!0}function lu(e,t,n,o,a,l){if(mr=l,we=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Cl.current=e===null||e.memoizedState===null?Y5:Q5,e=n(o,a),Go){l=0;do{if(Go=!1,ha=0,25<=l)throw Error(M(301));l+=1,He=ze=null,t.updateQueue=null,Cl.current=X5,e=n(o,a)}while(Go)}if(Cl.current=Gl,t=ze!==null&&ze.next!==null,mr=0,He=ze=we=null,Zl=!1,t)throw Error(M(300));return e}function su(){var e=ha!==0;return ha=0,e}function Vt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return He===null?we.memoizedState=He=e:He=He.next=e,He}function Nt(){if(ze===null){var e=we.alternate;e=e!==null?e.memoizedState:null}else e=ze.next;var t=He===null?we.memoizedState:He.next;if(t!==null)He=t,ze=e;else{if(e===null)throw Error(M(310));ze=e,e={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},He===null?we.memoizedState=He=e:He=He.next=e}return He}function ma(e,t){return typeof t=="function"?t(e):t}function ni(e){var t=Nt(),n=t.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=e;var o=ze,a=o.baseQueue,l=n.pending;if(l!==null){if(a!==null){var s=a.next;a.next=l.next,l.next=s}o.baseQueue=a=l,n.pending=null}if(a!==null){l=a.next,o=o.baseState;var i=s=null,c=null,u=l;do{var d=u.lane;if((mr&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),o=u.hasEagerState?u.eagerState:e(o,u.action);else{var x={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(i=c=x,s=o):c=c.next=x,we.lanes|=d,xr|=d}u=u.next}while(u!==null&&u!==l);c===null?s=o:c.next=i,Ft(o,t.memoizedState)||(dt=!0),t.memoizedState=o,t.baseState=s,t.baseQueue=c,n.lastRenderedState=o}if(e=n.interleaved,e!==null){a=e;do l=a.lane,we.lanes|=l,xr|=l,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ri(e){var t=Nt(),n=t.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=e;var o=n.dispatch,a=n.pending,l=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do l=e(l,s.action),s=s.next;while(s!==a);Ft(l,t.memoizedState)||(dt=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,o]}function Z2(){}function G2(e,t){var n=we,o=Nt(),a=t(),l=!Ft(o.memoizedState,a);if(l&&(o.memoizedState=a,dt=!0),o=o.queue,iu(Q2.bind(null,n,o,e),[e]),o.getSnapshot!==t||l||He!==null&&He.memoizedState.tag&1){if(n.flags|=2048,xa(9,Y2.bind(null,n,o,a,t),void 0,null),Ve===null)throw Error(M(349));mr&30||K2(n,t,a)}return a}function K2(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=we.updateQueue,t===null?(t={lastEffect:null,stores:null},we.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Y2(e,t,n,o){t.value=n,t.getSnapshot=o,X2(t)&&q2(e)}function Q2(e,t,n){return n(function(){X2(t)&&q2(e)})}function X2(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ft(e,n)}catch{return!0}}function q2(e){var t=un(e,1);t!==null&&zt(t,e,1,-1)}function r1(e){var t=Vt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:e},t.queue=e,e=e.dispatch=K5.bind(null,we,e),[t.memoizedState,e]}function xa(e,t,n,o){return e={tag:e,create:t,destroy:n,deps:o,next:null},t=we.updateQueue,t===null?(t={lastEffect:null,stores:null},we.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(o=n.next,n.next=e,e.next=o,t.lastEffect=e)),e}function J2(){return Nt().memoizedState}function jl(e,t,n,o){var a=Vt();we.flags|=e,a.memoizedState=xa(1|t,n,void 0,o===void 0?null:o)}function ps(e,t,n,o){var a=Nt();o=o===void 0?null:o;var l=void 0;if(ze!==null){var s=ze.memoizedState;if(l=s.destroy,o!==null&&au(o,s.deps)){a.memoizedState=xa(t,n,l,o);return}}we.flags|=e,a.memoizedState=xa(1|t,n,l,o)}function o1(e,t){return jl(8390656,8,e,t)}function iu(e,t){return ps(2048,8,e,t)}function ef(e,t){return ps(4,2,e,t)}function tf(e,t){return ps(4,4,e,t)}function nf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function rf(e,t,n){return n=n!=null?n.concat([e]):null,ps(4,4,nf.bind(null,t,e),n)}function cu(){}function of(e,t){var n=Nt();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&au(t,o[1])?o[0]:(n.memoizedState=[e,t],e)}function af(e,t){var n=Nt();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&au(t,o[1])?o[0]:(e=e(),n.memoizedState=[e,t],e)}function lf(e,t,n){return mr&21?(Ft(n,t)||(n=c2(),we.lanes|=n,xr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,dt=!0),e.memoizedState=n)}function Z5(e,t){var n=ie;ie=n!==0&&4>n?n:4,e(!0);var o=ti.transition;ti.transition={};try{e(!1),t()}finally{ie=n,ti.transition=o}}function sf(){return Nt().memoizedState}function G5(e,t,n){var o=zn(e);if(n={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null},cf(e))uf(t,n);else if(n=I2(e,t,n,o),n!==null){var a=rt();zt(n,e,o,a),df(n,t,o)}}function K5(e,t,n){var o=zn(e),a={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null};if(cf(e))uf(t,a);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var s=t.lastRenderedState,i=l(s,n);if(a.hasEagerState=!0,a.eagerState=i,Ft(i,s)){var c=t.interleaved;c===null?(a.next=a,eu(t)):(a.next=c.next,c.next=a),t.interleaved=a;return}}catch{}finally{}n=I2(e,t,a,o),n!==null&&(a=rt(),zt(n,e,o,a),df(n,t,o))}}function cf(e){var t=e.alternate;return e===we||t!==null&&t===we}function uf(e,t){Go=Zl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function df(e,t,n){if(n&4194240){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,zc(e,n)}}var Gl={readContext:Lt,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useInsertionEffect:Qe,useLayoutEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useMutableSource:Qe,useSyncExternalStore:Qe,useId:Qe,unstable_isNewReconciler:!1},Y5={readContext:Lt,useCallback:function(e,t){return Vt().memoizedState=[e,t===void 0?null:t],e},useContext:Lt,useEffect:o1,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,jl(4194308,4,nf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return jl(4194308,4,e,t)},useInsertionEffect:function(e,t){return jl(4,2,e,t)},useMemo:function(e,t){var n=Vt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var o=Vt();return t=n!==void 0?n(t):t,o.memoizedState=o.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},o.queue=e,e=e.dispatch=G5.bind(null,we,e),[o.memoizedState,e]},useRef:function(e){var t=Vt();return e={current:e},t.memoizedState=e},useState:r1,useDebugValue:cu,useDeferredValue:function(e){return Vt().memoizedState=e},useTransition:function(){var e=r1(!1),t=e[0];return e=Z5.bind(null,e[1]),Vt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var o=we,a=Vt();if(ve){if(n===void 0)throw Error(M(407));n=n()}else{if(n=t(),Ve===null)throw Error(M(349));mr&30||K2(o,t,n)}a.memoizedState=n;var l={value:n,getSnapshot:t};return a.queue=l,o1(Q2.bind(null,o,l,e),[e]),o.flags|=2048,xa(9,Y2.bind(null,o,l,n,t),void 0,null),n},useId:function(){var e=Vt(),t=Ve.identifierPrefix;if(ve){var n=on,o=rn;n=(o&~(1<<32-It(o)-1)).toString(32)+n,t=":"+t+"R"+n,n=ha++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=W5++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Q5={readContext:Lt,useCallback:of,useContext:Lt,useEffect:iu,useImperativeHandle:rf,useInsertionEffect:ef,useLayoutEffect:tf,useMemo:af,useReducer:ni,useRef:J2,useState:function(){return ni(ma)},useDebugValue:cu,useDeferredValue:function(e){var t=Nt();return lf(t,ze.memoizedState,e)},useTransition:function(){var e=ni(ma)[0],t=Nt().memoizedState;return[e,t]},useMutableSource:Z2,useSyncExternalStore:G2,useId:sf,unstable_isNewReconciler:!1},X5={readContext:Lt,useCallback:of,useContext:Lt,useEffect:iu,useImperativeHandle:rf,useInsertionEffect:ef,useLayoutEffect:tf,useMemo:af,useReducer:ri,useRef:J2,useState:function(){return ri(ma)},useDebugValue:cu,useDeferredValue:function(e){var t=Nt();return ze===null?t.memoizedState=e:lf(t,ze.memoizedState,e)},useTransition:function(){var e=ri(ma)[0],t=Nt().memoizedState;return[e,t]},useMutableSource:Z2,useSyncExternalStore:G2,useId:sf,unstable_isNewReconciler:!1};function no(e,t){try{var n="",o=t;do n+=w0(o),o=o.return;while(o);var a=n}catch(l){a=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:a,digest:null}}function oi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function qi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var q5=typeof WeakMap=="function"?WeakMap:Map;function pf(e,t,n){n=an(-1,n),n.tag=3,n.payload={element:null};var o=t.value;return n.callback=function(){Yl||(Yl=!0,ic=o),qi(e,t)},n}function ff(e,t,n){n=an(-1,n),n.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var a=t.value;n.payload=function(){return o(a)},n.callback=function(){qi(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){qi(e,t),typeof o!="function"&&(In===null?In=new Set([this]):In.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function a1(e,t,n){var o=e.pingCache;if(o===null){o=e.pingCache=new q5;var a=new Set;o.set(t,a)}else a=o.get(t),a===void 0&&(a=new Set,o.set(t,a));a.has(n)||(a.add(n),e=px.bind(null,e,t,n),t.then(e,e))}function l1(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function s1(e,t,n,o,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=an(-1,1),t.tag=2,Bn(n,t,1))),n.lanes|=1),e)}var J5=hn.ReactCurrentOwner,dt=!1;function nt(e,t,n,o){t.child=e===null?V2(t,null,n,o):eo(t,e.child,n,o)}function i1(e,t,n,o,a){n=n.render;var l=t.ref;return Kr(t,a),o=lu(e,t,n,o,l,a),n=su(),e!==null&&!dt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,dn(e,t,a)):(ve&&n&&Kc(t),t.flags|=1,nt(e,t,o,a),t.child)}function c1(e,t,n,o,a){if(e===null){var l=n.type;return typeof l=="function"&&!gu(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,hf(e,t,l,o,a)):(e=wl(n.type,null,o,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&a)){var s=l.memoizedProps;if(n=n.compare,n=n!==null?n:ia,n(s,o)&&e.ref===t.ref)return dn(e,t,a)}return t.flags|=1,e=Fn(l,o),e.ref=t.ref,e.return=t,t.child=e}function hf(e,t,n,o,a){if(e!==null){var l=e.memoizedProps;if(ia(l,o)&&e.ref===t.ref)if(dt=!1,t.pendingProps=o=l,(e.lanes&a)!==0)e.flags&131072&&(dt=!0);else return t.lanes=e.lanes,dn(e,t,a)}return Ji(e,t,n,o,a)}function mf(e,t,n){var o=t.pendingProps,a=o.children,l=e!==null?e.memoizedState:null;if(o.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},fe(Fr,xt),xt|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,fe(Fr,xt),xt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=l!==null?l.baseLanes:n,fe(Fr,xt),xt|=o}else l!==null?(o=l.baseLanes|n,t.memoizedState=null):o=n,fe(Fr,xt),xt|=o;return nt(e,t,a,n),t.child}function xf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ji(e,t,n,o,a){var l=ft(n)?fr:et.current;return l=qr(t,l),Kr(t,a),n=lu(e,t,n,o,l,a),o=su(),e!==null&&!dt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,dn(e,t,a)):(ve&&o&&Kc(t),t.flags|=1,nt(e,t,n,a),t.child)}function u1(e,t,n,o,a){if(ft(n)){var l=!0;Il(t)}else l=!1;if(Kr(t,a),t.stateNode===null)Sl(e,t),U2(t,n,o),Xi(t,n,o,a),o=!0;else if(e===null){var s=t.stateNode,i=t.memoizedProps;s.props=i;var c=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Lt(u):(u=ft(n)?fr:et.current,u=qr(t,u));var d=n.getDerivedStateFromProps,x=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";x||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(i!==o||c!==u)&&t1(t,s,o,u),Tn=!1;var m=t.memoizedState;s.state=m,Vl(t,o,s,a),c=t.memoizedState,i!==o||m!==c||pt.current||Tn?(typeof d=="function"&&(Qi(t,n,d,o),c=t.memoizedState),(i=Tn||e1(t,n,i,o,m,c,u))?(x||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=c),s.props=o,s.state=c,s.context=u,o=i):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{s=t.stateNode,z2(e,t),i=t.memoizedProps,u=t.type===t.elementType?i:Pt(t.type,i),s.props=u,x=t.pendingProps,m=s.context,c=n.contextType,typeof c=="object"&&c!==null?c=Lt(c):(c=ft(n)?fr:et.current,c=qr(t,c));var j=n.getDerivedStateFromProps;(d=typeof j=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(i!==x||m!==c)&&t1(t,s,o,c),Tn=!1,m=t.memoizedState,s.state=m,Vl(t,o,s,a);var y=t.memoizedState;i!==x||m!==y||pt.current||Tn?(typeof j=="function"&&(Qi(t,n,j,o),y=t.memoizedState),(u=Tn||e1(t,n,u,o,m,y,c)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(o,y,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(o,y,c)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||i===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=y),s.props=o,s.state=y,s.context=c,o=u):(typeof s.componentDidUpdate!="function"||i===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),o=!1)}return ec(e,t,n,o,l,a)}function ec(e,t,n,o,a,l){xf(e,t);var s=(t.flags&128)!==0;if(!o&&!s)return a&&Yd(t,n,!1),dn(e,t,l);o=t.stateNode,J5.current=t;var i=s&&typeof n.getDerivedStateFromError!="function"?null:o.render();return t.flags|=1,e!==null&&s?(t.child=eo(t,e.child,null,l),t.child=eo(t,null,i,l)):nt(e,t,i,l),t.memoizedState=o.state,a&&Yd(t,n,!0),t.child}function gf(e){var t=e.stateNode;t.pendingContext?Kd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Kd(e,t.context,!1),nu(e,t.containerInfo)}function d1(e,t,n,o,a){return Jr(),Qc(a),t.flags|=256,nt(e,t,n,o),t.child}var tc={dehydrated:null,treeContext:null,retryLane:0};function nc(e){return{baseLanes:e,cachePool:null,transitions:null}}function vf(e,t,n){var o=t.pendingProps,a=_e.current,l=!1,s=(t.flags&128)!==0,i;if((i=s)||(i=e!==null&&e.memoizedState===null?!1:(a&2)!==0),i?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),fe(_e,a&1),e===null)return Ki(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=o.children,e=o.fallback,l?(o=t.mode,l=t.child,s={mode:"hidden",children:s},!(o&1)&&l!==null?(l.childLanes=0,l.pendingProps=s):l=ms(s,o,0,null),e=pr(e,o,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=nc(n),t.memoizedState=tc,e):uu(t,s));if(a=e.memoizedState,a!==null&&(i=a.dehydrated,i!==null))return ex(e,t,s,o,i,a,n);if(l){l=o.fallback,s=t.mode,a=e.child,i=a.sibling;var c={mode:"hidden",children:o.children};return!(s&1)&&t.child!==a?(o=t.child,o.childLanes=0,o.pendingProps=c,t.deletions=null):(o=Fn(a,c),o.subtreeFlags=a.subtreeFlags&14680064),i!==null?l=Fn(i,l):(l=pr(l,s,n,null),l.flags|=2),l.return=t,o.return=t,o.sibling=l,t.child=o,o=l,l=t.child,s=e.child.memoizedState,s=s===null?nc(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},l.memoizedState=s,l.childLanes=e.childLanes&~n,t.memoizedState=tc,o}return l=e.child,e=l.sibling,o=Fn(l,{mode:"visible",children:o.children}),!(t.mode&1)&&(o.lanes=n),o.return=t,o.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=o,t.memoizedState=null,o}function uu(e,t){return t=ms({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function rl(e,t,n,o){return o!==null&&Qc(o),eo(t,e.child,null,n),e=uu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ex(e,t,n,o,a,l,s){if(n)return t.flags&256?(t.flags&=-257,o=oi(Error(M(422))),rl(e,t,s,o)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=o.fallback,a=t.mode,o=ms({mode:"visible",children:o.children},a,0,null),l=pr(l,a,s,null),l.flags|=2,o.return=t,l.return=t,o.sibling=l,t.child=o,t.mode&1&&eo(t,e.child,null,s),t.child.memoizedState=nc(s),t.memoizedState=tc,l);if(!(t.mode&1))return rl(e,t,s,null);if(a.data==="$!"){if(o=a.nextSibling&&a.nextSibling.dataset,o)var i=o.dgst;return o=i,l=Error(M(419)),o=oi(l,o,void 0),rl(e,t,s,o)}if(i=(s&e.childLanes)!==0,dt||i){if(o=Ve,o!==null){switch(s&-s){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(o.suspendedLanes|s)?0:a,a!==0&&a!==l.retryLane&&(l.retryLane=a,un(e,a),zt(o,e,a,-1))}return xu(),o=oi(Error(M(421))),rl(e,t,s,o)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=fx.bind(null,e),a._reactRetry=t,null):(e=l.treeContext,gt=An(a.nextSibling),vt=t,ve=!0,Bt=null,e!==null&&(_t[wt++]=rn,_t[wt++]=on,_t[wt++]=hr,rn=e.id,on=e.overflow,hr=t),t=uu(t,o.children),t.flags|=4096,t)}function p1(e,t,n){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),Yi(e.return,t,n)}function ai(e,t,n,o,a){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:a}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=o,l.tail=n,l.tailMode=a)}function yf(e,t,n){var o=t.pendingProps,a=o.revealOrder,l=o.tail;if(nt(e,t,o.children,n),o=_e.current,o&2)o=o&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&p1(e,n,t);else if(e.tag===19)p1(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(fe(_e,o),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&Wl(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),ai(t,!1,a,n,l);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Wl(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}ai(t,!0,n,null,l);break;case"together":ai(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Sl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function dn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),xr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(M(153));if(t.child!==null){for(e=t.child,n=Fn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Fn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function tx(e,t,n){switch(t.tag){case 3:gf(t),Jr();break;case 5:W2(t);break;case 1:ft(t.type)&&Il(t);break;case 4:nu(t,t.stateNode.containerInfo);break;case 10:var o=t.type._context,a=t.memoizedProps.value;fe(Ul,o._currentValue),o._currentValue=a;break;case 13:if(o=t.memoizedState,o!==null)return o.dehydrated!==null?(fe(_e,_e.current&1),t.flags|=128,null):n&t.child.childLanes?vf(e,t,n):(fe(_e,_e.current&1),e=dn(e,t,n),e!==null?e.sibling:null);fe(_e,_e.current&1);break;case 19:if(o=(n&t.childLanes)!==0,e.flags&128){if(o)return yf(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),fe(_e,_e.current),o)break;return null;case 22:case 23:return t.lanes=0,mf(e,t,n)}return dn(e,t,n)}var Cf,rc,jf,Sf;Cf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};rc=function(){};jf=function(e,t,n,o){var a=e.memoizedProps;if(a!==o){e=t.stateNode,cr(Yt.current);var l=null;switch(n){case"input":a=wi(e,a),o=wi(e,o),l=[];break;case"select":a=ke({},a,{value:void 0}),o=ke({},o,{value:void 0}),l=[];break;case"textarea":a=Ei(e,a),o=Ei(e,o),l=[];break;default:typeof a.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=Al)}Ni(n,o);var s;n=null;for(u in a)if(!o.hasOwnProperty(u)&&a.hasOwnProperty(u)&&a[u]!=null)if(u==="style"){var i=a[u];for(s in i)i.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ta.hasOwnProperty(u)?l||(l=[]):(l=l||[]).push(u,null));for(u in o){var c=o[u];if(i=a!=null?a[u]:void 0,o.hasOwnProperty(u)&&c!==i&&(c!=null||i!=null))if(u==="style")if(i){for(s in i)!i.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in c)c.hasOwnProperty(s)&&i[s]!==c[s]&&(n||(n={}),n[s]=c[s])}else n||(l||(l=[]),l.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,i=i?i.__html:void 0,c!=null&&i!==c&&(l=l||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(l=l||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ta.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&me("scroll",e),l||i===c||(l=[])):(l=l||[]).push(u,c))}n&&(l=l||[]).push("style",n);var u=l;(t.updateQueue=u)&&(t.flags|=4)}};Sf=function(e,t,n,o){n!==o&&(t.flags|=4)};function wo(e,t){if(!ve)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Xe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,o=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,o|=a.subtreeFlags&14680064,o|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,o|=a.subtreeFlags,o|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=o,e.childLanes=n,t}function nx(e,t,n){var o=t.pendingProps;switch(Yc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xe(t),null;case 1:return ft(t.type)&&Bl(),Xe(t),null;case 3:return o=t.stateNode,to(),xe(pt),xe(et),ou(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(tl(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Bt!==null&&(dc(Bt),Bt=null))),rc(e,t),Xe(t),null;case 5:ru(t);var a=cr(fa.current);if(n=t.type,e!==null&&t.stateNode!=null)jf(e,t,n,o,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!o){if(t.stateNode===null)throw Error(M(166));return Xe(t),null}if(e=cr(Yt.current),tl(t)){o=t.stateNode,n=t.type;var l=t.memoizedProps;switch(o[Gt]=t,o[da]=l,e=(t.mode&1)!==0,n){case"dialog":me("cancel",o),me("close",o);break;case"iframe":case"object":case"embed":me("load",o);break;case"video":case"audio":for(a=0;a<Po.length;a++)me(Po[a],o);break;case"source":me("error",o);break;case"img":case"image":case"link":me("error",o),me("load",o);break;case"details":me("toggle",o);break;case"input":jd(o,l),me("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!l.multiple},me("invalid",o);break;case"textarea":bd(o,l),me("invalid",o)}Ni(n,l),a=null;for(var s in l)if(l.hasOwnProperty(s)){var i=l[s];s==="children"?typeof i=="string"?o.textContent!==i&&(l.suppressHydrationWarning!==!0&&el(o.textContent,i,e),a=["children",i]):typeof i=="number"&&o.textContent!==""+i&&(l.suppressHydrationWarning!==!0&&el(o.textContent,i,e),a=["children",""+i]):ta.hasOwnProperty(s)&&i!=null&&s==="onScroll"&&me("scroll",o)}switch(n){case"input":Za(o),Sd(o,l,!0);break;case"textarea":Za(o),_d(o);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(o.onclick=Al)}o=a,t.updateQueue=o,o!==null&&(t.flags|=4)}else{s=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Kp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=s.createElement(n,{is:o.is}):(e=s.createElement(n),n==="select"&&(s=e,o.multiple?s.multiple=!0:o.size&&(s.size=o.size))):e=s.createElementNS(e,n),e[Gt]=t,e[da]=o,Cf(e,t,!1,!1),t.stateNode=e;e:{switch(s=Ri(n,o),n){case"dialog":me("cancel",e),me("close",e),a=o;break;case"iframe":case"object":case"embed":me("load",e),a=o;break;case"video":case"audio":for(a=0;a<Po.length;a++)me(Po[a],e);a=o;break;case"source":me("error",e),a=o;break;case"img":case"image":case"link":me("error",e),me("load",e),a=o;break;case"details":me("toggle",e),a=o;break;case"input":jd(e,o),a=wi(e,o),me("invalid",e);break;case"option":a=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},a=ke({},o,{value:void 0}),me("invalid",e);break;case"textarea":bd(e,o),a=Ei(e,o),me("invalid",e);break;default:a=o}Ni(n,a),i=a;for(l in i)if(i.hasOwnProperty(l)){var c=i[l];l==="style"?Xp(e,c):l==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Yp(e,c)):l==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&na(e,c):typeof c=="number"&&na(e,""+c):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(ta.hasOwnProperty(l)?c!=null&&l==="onScroll"&&me("scroll",e):c!=null&&Mc(e,l,c,s))}switch(n){case"input":Za(e),Sd(e,o,!1);break;case"textarea":Za(e),_d(e);break;case"option":o.value!=null&&e.setAttribute("value",""+Un(o.value));break;case"select":e.multiple=!!o.multiple,l=o.value,l!=null?Vr(e,!!o.multiple,l,!1):o.defaultValue!=null&&Vr(e,!!o.multiple,o.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Al)}switch(n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Xe(t),null;case 6:if(e&&t.stateNode!=null)Sf(e,t,e.memoizedProps,o);else{if(typeof o!="string"&&t.stateNode===null)throw Error(M(166));if(n=cr(fa.current),cr(Yt.current),tl(t)){if(o=t.stateNode,n=t.memoizedProps,o[Gt]=t,(l=o.nodeValue!==n)&&(e=vt,e!==null))switch(e.tag){case 3:el(o.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&el(o.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else o=(n.nodeType===9?n:n.ownerDocument).createTextNode(o),o[Gt]=t,t.stateNode=o}return Xe(t),null;case 13:if(xe(_e),o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ve&&gt!==null&&t.mode&1&&!(t.flags&128))B2(),Jr(),t.flags|=98560,l=!1;else if(l=tl(t),o!==null&&o.dehydrated!==null){if(e===null){if(!l)throw Error(M(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(M(317));l[Gt]=t}else Jr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Xe(t),l=!1}else Bt!==null&&(dc(Bt),Bt=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(t.child.flags|=8192,t.mode&1&&(e===null||_e.current&1?Fe===0&&(Fe=3):xu())),t.updateQueue!==null&&(t.flags|=4),Xe(t),null);case 4:return to(),rc(e,t),e===null&&ca(t.stateNode.containerInfo),Xe(t),null;case 10:return Jc(t.type._context),Xe(t),null;case 17:return ft(t.type)&&Bl(),Xe(t),null;case 19:if(xe(_e),l=t.memoizedState,l===null)return Xe(t),null;if(o=(t.flags&128)!==0,s=l.rendering,s===null)if(o)wo(l,!1);else{if(Fe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Wl(e),s!==null){for(t.flags|=128,wo(l,!1),o=s.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),t.subtreeFlags=0,o=n,n=t.child;n!==null;)l=n,e=o,l.flags&=14680066,s=l.alternate,s===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=s.childLanes,l.lanes=s.lanes,l.child=s.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=s.memoizedProps,l.memoizedState=s.memoizedState,l.updateQueue=s.updateQueue,l.type=s.type,e=s.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return fe(_e,_e.current&1|2),t.child}e=e.sibling}l.tail!==null&&Me()>ro&&(t.flags|=128,o=!0,wo(l,!1),t.lanes=4194304)}else{if(!o)if(e=Wl(s),e!==null){if(t.flags|=128,o=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),wo(l,!0),l.tail===null&&l.tailMode==="hidden"&&!s.alternate&&!ve)return Xe(t),null}else 2*Me()-l.renderingStartTime>ro&&n!==1073741824&&(t.flags|=128,o=!0,wo(l,!1),t.lanes=4194304);l.isBackwards?(s.sibling=t.child,t.child=s):(n=l.last,n!==null?n.sibling=s:t.child=s,l.last=s)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Me(),t.sibling=null,n=_e.current,fe(_e,o?n&1|2:n&1),t):(Xe(t),null);case 22:case 23:return mu(),o=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(t.flags|=8192),o&&t.mode&1?xt&1073741824&&(Xe(t),t.subtreeFlags&6&&(t.flags|=8192)):Xe(t),null;case 24:return null;case 25:return null}throw Error(M(156,t.tag))}function rx(e,t){switch(Yc(t),t.tag){case 1:return ft(t.type)&&Bl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return to(),xe(pt),xe(et),ou(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ru(t),null;case 13:if(xe(_e),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(M(340));Jr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return xe(_e),null;case 4:return to(),null;case 10:return Jc(t.type._context),null;case 22:case 23:return mu(),null;case 24:return null;default:return null}}var ol=!1,Je=!1,ox=typeof WeakSet=="function"?WeakSet:Set,I=null;function zr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(o){Le(e,t,o)}else n.current=null}function oc(e,t,n){try{n()}catch(o){Le(e,t,o)}}var f1=!1;function ax(e,t){if(Fi=Ml,e=w2(),Gc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var a=o.anchorOffset,l=o.focusNode;o=o.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var s=0,i=-1,c=-1,u=0,d=0,x=e,m=null;t:for(;;){for(var j;x!==n||a!==0&&x.nodeType!==3||(i=s+a),x!==l||o!==0&&x.nodeType!==3||(c=s+o),x.nodeType===3&&(s+=x.nodeValue.length),(j=x.firstChild)!==null;)m=x,x=j;for(;;){if(x===e)break t;if(m===n&&++u===a&&(i=s),m===l&&++d===o&&(c=s),(j=x.nextSibling)!==null)break;x=m,m=x.parentNode}x=j}n=i===-1||c===-1?null:{start:i,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ui={focusedElem:e,selectionRange:n},Ml=!1,I=t;I!==null;)if(t=I,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,I=e;else for(;I!==null;){t=I;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var S=y.memoizedProps,N=y.memoizedState,g=t.stateNode,p=g.getSnapshotBeforeUpdate(t.elementType===t.type?S:Pt(t.type,S),N);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(M(163))}}catch(f){Le(t,t.return,f)}if(e=t.sibling,e!==null){e.return=t.return,I=e;break}I=t.return}return y=f1,f1=!1,y}function Ko(e,t,n){var o=t.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var a=o=o.next;do{if((a.tag&e)===e){var l=a.destroy;a.destroy=void 0,l!==void 0&&oc(t,n,l)}a=a.next}while(a!==o)}}function fs(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var o=n.create;n.destroy=o()}n=n.next}while(n!==t)}}function ac(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function bf(e){var t=e.alternate;t!==null&&(e.alternate=null,bf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Gt],delete t[da],delete t[Wi],delete t[F5],delete t[U5])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function _f(e){return e.tag===5||e.tag===3||e.tag===4}function h1(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||_f(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function lc(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Al));else if(o!==4&&(e=e.child,e!==null))for(lc(e,t,n),e=e.sibling;e!==null;)lc(e,t,n),e=e.sibling}function sc(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(sc(e,t,n),e=e.sibling;e!==null;)sc(e,t,n),e=e.sibling}var Ze=null,$t=!1;function bn(e,t,n){for(n=n.child;n!==null;)wf(e,t,n),n=n.sibling}function wf(e,t,n){if(Kt&&typeof Kt.onCommitFiberUnmount=="function")try{Kt.onCommitFiberUnmount(as,n)}catch{}switch(n.tag){case 5:Je||zr(n,t);case 6:var o=Ze,a=$t;Ze=null,bn(e,t,n),Ze=o,$t=a,Ze!==null&&($t?(e=Ze,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ze.removeChild(n.stateNode));break;case 18:Ze!==null&&($t?(e=Ze,n=n.stateNode,e.nodeType===8?qs(e.parentNode,n):e.nodeType===1&&qs(e,n),la(e)):qs(Ze,n.stateNode));break;case 4:o=Ze,a=$t,Ze=n.stateNode.containerInfo,$t=!0,bn(e,t,n),Ze=o,$t=a;break;case 0:case 11:case 14:case 15:if(!Je&&(o=n.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){a=o=o.next;do{var l=a,s=l.destroy;l=l.tag,s!==void 0&&(l&2||l&4)&&oc(n,t,s),a=a.next}while(a!==o)}bn(e,t,n);break;case 1:if(!Je&&(zr(n,t),o=n.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=n.memoizedProps,o.state=n.memoizedState,o.componentWillUnmount()}catch(i){Le(n,t,i)}bn(e,t,n);break;case 21:bn(e,t,n);break;case 22:n.mode&1?(Je=(o=Je)||n.memoizedState!==null,bn(e,t,n),Je=o):bn(e,t,n);break;default:bn(e,t,n)}}function m1(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new ox),t.forEach(function(o){var a=hx.bind(null,e,o);n.has(o)||(n.add(o),o.then(a,a))})}}function Mt(e,t){var n=t.deletions;if(n!==null)for(var o=0;o<n.length;o++){var a=n[o];try{var l=e,s=t,i=s;e:for(;i!==null;){switch(i.tag){case 5:Ze=i.stateNode,$t=!1;break e;case 3:Ze=i.stateNode.containerInfo,$t=!0;break e;case 4:Ze=i.stateNode.containerInfo,$t=!0;break e}i=i.return}if(Ze===null)throw Error(M(160));wf(l,s,a),Ze=null,$t=!1;var c=a.alternate;c!==null&&(c.return=null),a.return=null}catch(u){Le(a,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)kf(t,e),t=t.sibling}function kf(e,t){var n=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Mt(t,e),Ht(e),o&4){try{Ko(3,e,e.return),fs(3,e)}catch(S){Le(e,e.return,S)}try{Ko(5,e,e.return)}catch(S){Le(e,e.return,S)}}break;case 1:Mt(t,e),Ht(e),o&512&&n!==null&&zr(n,n.return);break;case 5:if(Mt(t,e),Ht(e),o&512&&n!==null&&zr(n,n.return),e.flags&32){var a=e.stateNode;try{na(a,"")}catch(S){Le(e,e.return,S)}}if(o&4&&(a=e.stateNode,a!=null)){var l=e.memoizedProps,s=n!==null?n.memoizedProps:l,i=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{i==="input"&&l.type==="radio"&&l.name!=null&&Zp(a,l),Ri(i,s);var u=Ri(i,l);for(s=0;s<c.length;s+=2){var d=c[s],x=c[s+1];d==="style"?Xp(a,x):d==="dangerouslySetInnerHTML"?Yp(a,x):d==="children"?na(a,x):Mc(a,d,x,u)}switch(i){case"input":ki(a,l);break;case"textarea":Gp(a,l);break;case"select":var m=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!l.multiple;var j=l.value;j!=null?Vr(a,!!l.multiple,j,!1):m!==!!l.multiple&&(l.defaultValue!=null?Vr(a,!!l.multiple,l.defaultValue,!0):Vr(a,!!l.multiple,l.multiple?[]:"",!1))}a[da]=l}catch(S){Le(e,e.return,S)}}break;case 6:if(Mt(t,e),Ht(e),o&4){if(e.stateNode===null)throw Error(M(162));a=e.stateNode,l=e.memoizedProps;try{a.nodeValue=l}catch(S){Le(e,e.return,S)}}break;case 3:if(Mt(t,e),Ht(e),o&4&&n!==null&&n.memoizedState.isDehydrated)try{la(t.containerInfo)}catch(S){Le(e,e.return,S)}break;case 4:Mt(t,e),Ht(e);break;case 13:Mt(t,e),Ht(e),a=e.child,a.flags&8192&&(l=a.memoizedState!==null,a.stateNode.isHidden=l,!l||a.alternate!==null&&a.alternate.memoizedState!==null||(fu=Me())),o&4&&m1(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Je=(u=Je)||d,Mt(t,e),Je=u):Mt(t,e),Ht(e),o&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(I=e,d=e.child;d!==null;){for(x=I=d;I!==null;){switch(m=I,j=m.child,m.tag){case 0:case 11:case 14:case 15:Ko(4,m,m.return);break;case 1:zr(m,m.return);var y=m.stateNode;if(typeof y.componentWillUnmount=="function"){o=m,n=m.return;try{t=o,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(S){Le(o,n,S)}}break;case 5:zr(m,m.return);break;case 22:if(m.memoizedState!==null){g1(x);continue}}j!==null?(j.return=m,I=j):g1(x)}d=d.sibling}e:for(d=null,x=e;;){if(x.tag===5){if(d===null){d=x;try{a=x.stateNode,u?(l=a.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(i=x.stateNode,c=x.memoizedProps.style,s=c!=null&&c.hasOwnProperty("display")?c.display:null,i.style.display=Qp("display",s))}catch(S){Le(e,e.return,S)}}}else if(x.tag===6){if(d===null)try{x.stateNode.nodeValue=u?"":x.memoizedProps}catch(S){Le(e,e.return,S)}}else if((x.tag!==22&&x.tag!==23||x.memoizedState===null||x===e)&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===e)break e;for(;x.sibling===null;){if(x.return===null||x.return===e)break e;d===x&&(d=null),x=x.return}d===x&&(d=null),x.sibling.return=x.return,x=x.sibling}}break;case 19:Mt(t,e),Ht(e),o&4&&m1(e);break;case 21:break;default:Mt(t,e),Ht(e)}}function Ht(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(_f(n)){var o=n;break e}n=n.return}throw Error(M(160))}switch(o.tag){case 5:var a=o.stateNode;o.flags&32&&(na(a,""),o.flags&=-33);var l=h1(e);sc(e,l,a);break;case 3:case 4:var s=o.stateNode.containerInfo,i=h1(e);lc(e,i,s);break;default:throw Error(M(161))}}catch(c){Le(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function lx(e,t,n){I=e,Tf(e)}function Tf(e,t,n){for(var o=(e.mode&1)!==0;I!==null;){var a=I,l=a.child;if(a.tag===22&&o){var s=a.memoizedState!==null||ol;if(!s){var i=a.alternate,c=i!==null&&i.memoizedState!==null||Je;i=ol;var u=Je;if(ol=s,(Je=c)&&!u)for(I=a;I!==null;)s=I,c=s.child,s.tag===22&&s.memoizedState!==null?v1(a):c!==null?(c.return=s,I=c):v1(a);for(;l!==null;)I=l,Tf(l),l=l.sibling;I=a,ol=i,Je=u}x1(e)}else a.subtreeFlags&8772&&l!==null?(l.return=a,I=l):x1(e)}}function x1(e){for(;I!==null;){var t=I;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Je||fs(5,t);break;case 1:var o=t.stateNode;if(t.flags&4&&!Je)if(n===null)o.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:Pt(t.type,n.memoizedProps);o.componentDidUpdate(a,n.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Jd(t,l,o);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Jd(t,s,n)}break;case 5:var i=t.stateNode;if(n===null&&t.flags&4){n=i;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var x=d.dehydrated;x!==null&&la(x)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(M(163))}Je||t.flags&512&&ac(t)}catch(m){Le(t,t.return,m)}}if(t===e){I=null;break}if(n=t.sibling,n!==null){n.return=t.return,I=n;break}I=t.return}}function g1(e){for(;I!==null;){var t=I;if(t===e){I=null;break}var n=t.sibling;if(n!==null){n.return=t.return,I=n;break}I=t.return}}function v1(e){for(;I!==null;){var t=I;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{fs(4,t)}catch(c){Le(t,n,c)}break;case 1:var o=t.stateNode;if(typeof o.componentDidMount=="function"){var a=t.return;try{o.componentDidMount()}catch(c){Le(t,a,c)}}var l=t.return;try{ac(t)}catch(c){Le(t,l,c)}break;case 5:var s=t.return;try{ac(t)}catch(c){Le(t,s,c)}}}catch(c){Le(t,t.return,c)}if(t===e){I=null;break}var i=t.sibling;if(i!==null){i.return=t.return,I=i;break}I=t.return}}var sx=Math.ceil,Kl=hn.ReactCurrentDispatcher,du=hn.ReactCurrentOwner,Tt=hn.ReactCurrentBatchConfig,oe=0,Ve=null,Pe=null,Ke=0,xt=0,Fr=Kn(0),Fe=0,ga=null,xr=0,hs=0,pu=0,Yo=null,ut=null,fu=0,ro=1/0,tn=null,Yl=!1,ic=null,In=null,al=!1,Dn=null,Ql=0,Qo=0,cc=null,bl=-1,_l=0;function rt(){return oe&6?Me():bl!==-1?bl:bl=Me()}function zn(e){return e.mode&1?oe&2&&Ke!==0?Ke&-Ke:V5.transition!==null?(_l===0&&(_l=c2()),_l):(e=ie,e!==0||(e=window.event,e=e===void 0?16:x2(e.type)),e):1}function zt(e,t,n,o){if(50<Qo)throw Qo=0,cc=null,Error(M(185));Sa(e,n,o),(!(oe&2)||e!==Ve)&&(e===Ve&&(!(oe&2)&&(hs|=n),Fe===4&&Nn(e,Ke)),ht(e,o),n===1&&oe===0&&!(t.mode&1)&&(ro=Me()+500,us&&Yn()))}function ht(e,t){var n=e.callbackNode;V0(e,t);var o=Dl(e,e===Ve?Ke:0);if(o===0)n!==null&&Td(n),e.callbackNode=null,e.callbackPriority=0;else if(t=o&-o,e.callbackPriority!==t){if(n!=null&&Td(n),t===1)e.tag===0?H5(y1.bind(null,e)):P2(y1.bind(null,e)),I5(function(){!(oe&6)&&Yn()}),n=null;else{switch(u2(o)){case 1:n=Ic;break;case 4:n=s2;break;case 16:n=Ol;break;case 536870912:n=i2;break;default:n=Ol}n=Pf(n,Ef.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ef(e,t){if(bl=-1,_l=0,oe&6)throw Error(M(327));var n=e.callbackNode;if(Yr()&&e.callbackNode!==n)return null;var o=Dl(e,e===Ve?Ke:0);if(o===0)return null;if(o&30||o&e.expiredLanes||t)t=Xl(e,o);else{t=o;var a=oe;oe|=2;var l=Nf();(Ve!==e||Ke!==t)&&(tn=null,ro=Me()+500,dr(e,t));do try{ux();break}catch(i){Lf(e,i)}while(1);qc(),Kl.current=l,oe=a,Pe!==null?t=0:(Ve=null,Ke=0,t=Fe)}if(t!==0){if(t===2&&(a=$i(e),a!==0&&(o=a,t=uc(e,a))),t===1)throw n=ga,dr(e,0),Nn(e,o),ht(e,Me()),n;if(t===6)Nn(e,o);else{if(a=e.current.alternate,!(o&30)&&!ix(a)&&(t=Xl(e,o),t===2&&(l=$i(e),l!==0&&(o=l,t=uc(e,l))),t===1))throw n=ga,dr(e,0),Nn(e,o),ht(e,Me()),n;switch(e.finishedWork=a,e.finishedLanes=o,t){case 0:case 1:throw Error(M(345));case 2:lr(e,ut,tn);break;case 3:if(Nn(e,o),(o&130023424)===o&&(t=fu+500-Me(),10<t)){if(Dl(e,0)!==0)break;if(a=e.suspendedLanes,(a&o)!==o){rt(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Vi(lr.bind(null,e,ut,tn),t);break}lr(e,ut,tn);break;case 4:if(Nn(e,o),(o&4194240)===o)break;for(t=e.eventTimes,a=-1;0<o;){var s=31-It(o);l=1<<s,s=t[s],s>a&&(a=s),o&=~l}if(o=a,o=Me()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*sx(o/1960))-o,10<o){e.timeoutHandle=Vi(lr.bind(null,e,ut,tn),o);break}lr(e,ut,tn);break;case 5:lr(e,ut,tn);break;default:throw Error(M(329))}}}return ht(e,Me()),e.callbackNode===n?Ef.bind(null,e):null}function uc(e,t){var n=Yo;return e.current.memoizedState.isDehydrated&&(dr(e,t).flags|=256),e=Xl(e,t),e!==2&&(t=ut,ut=n,t!==null&&dc(t)),e}function dc(e){ut===null?ut=e:ut.push.apply(ut,e)}function ix(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var o=0;o<n.length;o++){var a=n[o],l=a.getSnapshot;a=a.value;try{if(!Ft(l(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Nn(e,t){for(t&=~pu,t&=~hs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-It(t),o=1<<n;e[n]=-1,t&=~o}}function y1(e){if(oe&6)throw Error(M(327));Yr();var t=Dl(e,0);if(!(t&1))return ht(e,Me()),null;var n=Xl(e,t);if(e.tag!==0&&n===2){var o=$i(e);o!==0&&(t=o,n=uc(e,o))}if(n===1)throw n=ga,dr(e,0),Nn(e,t),ht(e,Me()),n;if(n===6)throw Error(M(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,lr(e,ut,tn),ht(e,Me()),null}function hu(e,t){var n=oe;oe|=1;try{return e(t)}finally{oe=n,oe===0&&(ro=Me()+500,us&&Yn())}}function gr(e){Dn!==null&&Dn.tag===0&&!(oe&6)&&Yr();var t=oe;oe|=1;var n=Tt.transition,o=ie;try{if(Tt.transition=null,ie=1,e)return e()}finally{ie=o,Tt.transition=n,oe=t,!(oe&6)&&Yn()}}function mu(){xt=Fr.current,xe(Fr)}function dr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,B5(n)),Pe!==null)for(n=Pe.return;n!==null;){var o=n;switch(Yc(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&Bl();break;case 3:to(),xe(pt),xe(et),ou();break;case 5:ru(o);break;case 4:to();break;case 13:xe(_e);break;case 19:xe(_e);break;case 10:Jc(o.type._context);break;case 22:case 23:mu()}n=n.return}if(Ve=e,Pe=e=Fn(e.current,null),Ke=xt=t,Fe=0,ga=null,pu=hs=xr=0,ut=Yo=null,ir!==null){for(t=0;t<ir.length;t++)if(n=ir[t],o=n.interleaved,o!==null){n.interleaved=null;var a=o.next,l=n.pending;if(l!==null){var s=l.next;l.next=a,o.next=s}n.pending=o}ir=null}return e}function Lf(e,t){do{var n=Pe;try{if(qc(),Cl.current=Gl,Zl){for(var o=we.memoizedState;o!==null;){var a=o.queue;a!==null&&(a.pending=null),o=o.next}Zl=!1}if(mr=0,He=ze=we=null,Go=!1,ha=0,du.current=null,n===null||n.return===null){Fe=1,ga=t,Pe=null;break}e:{var l=e,s=n.return,i=n,c=t;if(t=Ke,i.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=i,x=d.tag;if(!(d.mode&1)&&(x===0||x===11||x===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var j=l1(s);if(j!==null){j.flags&=-257,s1(j,s,i,l,t),j.mode&1&&a1(l,u,t),t=j,c=u;var y=t.updateQueue;if(y===null){var S=new Set;S.add(c),t.updateQueue=S}else y.add(c);break e}else{if(!(t&1)){a1(l,u,t),xu();break e}c=Error(M(426))}}else if(ve&&i.mode&1){var N=l1(s);if(N!==null){!(N.flags&65536)&&(N.flags|=256),s1(N,s,i,l,t),Qc(no(c,i));break e}}l=c=no(c,i),Fe!==4&&(Fe=2),Yo===null?Yo=[l]:Yo.push(l),l=s;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var g=pf(l,c,t);qd(l,g);break e;case 1:i=c;var p=l.type,h=l.stateNode;if(!(l.flags&128)&&(typeof p.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(In===null||!In.has(h)))){l.flags|=65536,t&=-t,l.lanes|=t;var f=ff(l,i,t);qd(l,f);break e}}l=l.return}while(l!==null)}Of(n)}catch(v){t=v,Pe===n&&n!==null&&(Pe=n=n.return);continue}break}while(1)}function Nf(){var e=Kl.current;return Kl.current=Gl,e===null?Gl:e}function xu(){(Fe===0||Fe===3||Fe===2)&&(Fe=4),Ve===null||!(xr&268435455)&&!(hs&268435455)||Nn(Ve,Ke)}function Xl(e,t){var n=oe;oe|=2;var o=Nf();(Ve!==e||Ke!==t)&&(tn=null,dr(e,t));do try{cx();break}catch(a){Lf(e,a)}while(1);if(qc(),oe=n,Kl.current=o,Pe!==null)throw Error(M(261));return Ve=null,Ke=0,Fe}function cx(){for(;Pe!==null;)Rf(Pe)}function ux(){for(;Pe!==null&&!P0();)Rf(Pe)}function Rf(e){var t=Mf(e.alternate,e,xt);e.memoizedProps=e.pendingProps,t===null?Of(e):Pe=t,du.current=null}function Of(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=rx(n,t),n!==null){n.flags&=32767,Pe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Fe=6,Pe=null;return}}else if(n=nx(n,t,xt),n!==null){Pe=n;return}if(t=t.sibling,t!==null){Pe=t;return}Pe=t=e}while(t!==null);Fe===0&&(Fe=5)}function lr(e,t,n){var o=ie,a=Tt.transition;try{Tt.transition=null,ie=1,dx(e,t,n,o)}finally{Tt.transition=a,ie=o}return null}function dx(e,t,n,o){do Yr();while(Dn!==null);if(oe&6)throw Error(M(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(M(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(W0(e,l),e===Ve&&(Pe=Ve=null,Ke=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||al||(al=!0,Pf(Ol,function(){return Yr(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=Tt.transition,Tt.transition=null;var s=ie;ie=1;var i=oe;oe|=4,du.current=null,ax(e,n),kf(n,e),R5(Ui),Ml=!!Fi,Ui=Fi=null,e.current=n,lx(n),$0(),oe=i,ie=s,Tt.transition=l}else e.current=n;if(al&&(al=!1,Dn=e,Ql=a),l=e.pendingLanes,l===0&&(In=null),I0(n.stateNode),ht(e,Me()),t!==null)for(o=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],o(a.value,{componentStack:a.stack,digest:a.digest});if(Yl)throw Yl=!1,e=ic,ic=null,e;return Ql&1&&e.tag!==0&&Yr(),l=e.pendingLanes,l&1?e===cc?Qo++:(Qo=0,cc=e):Qo=0,Yn(),null}function Yr(){if(Dn!==null){var e=u2(Ql),t=Tt.transition,n=ie;try{if(Tt.transition=null,ie=16>e?16:e,Dn===null)var o=!1;else{if(e=Dn,Dn=null,Ql=0,oe&6)throw Error(M(331));var a=oe;for(oe|=4,I=e.current;I!==null;){var l=I,s=l.child;if(I.flags&16){var i=l.deletions;if(i!==null){for(var c=0;c<i.length;c++){var u=i[c];for(I=u;I!==null;){var d=I;switch(d.tag){case 0:case 11:case 15:Ko(8,d,l)}var x=d.child;if(x!==null)x.return=d,I=x;else for(;I!==null;){d=I;var m=d.sibling,j=d.return;if(bf(d),d===u){I=null;break}if(m!==null){m.return=j,I=m;break}I=j}}}var y=l.alternate;if(y!==null){var S=y.child;if(S!==null){y.child=null;do{var N=S.sibling;S.sibling=null,S=N}while(S!==null)}}I=l}}if(l.subtreeFlags&2064&&s!==null)s.return=l,I=s;else e:for(;I!==null;){if(l=I,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Ko(9,l,l.return)}var g=l.sibling;if(g!==null){g.return=l.return,I=g;break e}I=l.return}}var p=e.current;for(I=p;I!==null;){s=I;var h=s.child;if(s.subtreeFlags&2064&&h!==null)h.return=s,I=h;else e:for(s=p;I!==null;){if(i=I,i.flags&2048)try{switch(i.tag){case 0:case 11:case 15:fs(9,i)}}catch(v){Le(i,i.return,v)}if(i===s){I=null;break e}var f=i.sibling;if(f!==null){f.return=i.return,I=f;break e}I=i.return}}if(oe=a,Yn(),Kt&&typeof Kt.onPostCommitFiberRoot=="function")try{Kt.onPostCommitFiberRoot(as,e)}catch{}o=!0}return o}finally{ie=n,Tt.transition=t}}return!1}function C1(e,t,n){t=no(n,t),t=pf(e,t,1),e=Bn(e,t,1),t=rt(),e!==null&&(Sa(e,1,t),ht(e,t))}function Le(e,t,n){if(e.tag===3)C1(e,e,n);else for(;t!==null;){if(t.tag===3){C1(t,e,n);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(In===null||!In.has(o))){e=no(n,e),e=ff(t,e,1),t=Bn(t,e,1),e=rt(),t!==null&&(Sa(t,1,e),ht(t,e));break}}t=t.return}}function px(e,t,n){var o=e.pingCache;o!==null&&o.delete(t),t=rt(),e.pingedLanes|=e.suspendedLanes&n,Ve===e&&(Ke&n)===n&&(Fe===4||Fe===3&&(Ke&130023424)===Ke&&500>Me()-fu?dr(e,0):pu|=n),ht(e,t)}function Df(e,t){t===0&&(e.mode&1?(t=Ya,Ya<<=1,!(Ya&130023424)&&(Ya=4194304)):t=1);var n=rt();e=un(e,t),e!==null&&(Sa(e,t,n),ht(e,n))}function fx(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Df(e,n)}function hx(e,t){var n=0;switch(e.tag){case 13:var o=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(M(314))}o!==null&&o.delete(t),Df(e,n)}var Mf;Mf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||pt.current)dt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return dt=!1,tx(e,t,n);dt=!!(e.flags&131072)}else dt=!1,ve&&t.flags&1048576&&$2(t,Fl,t.index);switch(t.lanes=0,t.tag){case 2:var o=t.type;Sl(e,t),e=t.pendingProps;var a=qr(t,et.current);Kr(t,n),a=lu(null,t,o,e,a,n);var l=su();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ft(o)?(l=!0,Il(t)):l=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,tu(t),a.updater=ds,t.stateNode=a,a._reactInternals=t,Xi(t,o,e,n),t=ec(null,t,o,!0,l,n)):(t.tag=0,ve&&l&&Kc(t),nt(null,t,a,n),t=t.child),t;case 16:o=t.elementType;e:{switch(Sl(e,t),e=t.pendingProps,a=o._init,o=a(o._payload),t.type=o,a=t.tag=xx(o),e=Pt(o,e),a){case 0:t=Ji(null,t,o,e,n);break e;case 1:t=u1(null,t,o,e,n);break e;case 11:t=i1(null,t,o,e,n);break e;case 14:t=c1(null,t,o,Pt(o.type,e),n);break e}throw Error(M(306,o,""))}return t;case 0:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:Pt(o,a),Ji(e,t,o,a,n);case 1:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:Pt(o,a),u1(e,t,o,a,n);case 3:e:{if(gf(t),e===null)throw Error(M(387));o=t.pendingProps,l=t.memoizedState,a=l.element,z2(e,t),Vl(t,o,null,n);var s=t.memoizedState;if(o=s.element,l.isDehydrated)if(l={element:o,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){a=no(Error(M(423)),t),t=d1(e,t,o,n,a);break e}else if(o!==a){a=no(Error(M(424)),t),t=d1(e,t,o,n,a);break e}else for(gt=An(t.stateNode.containerInfo.firstChild),vt=t,ve=!0,Bt=null,n=V2(t,null,o,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Jr(),o===a){t=dn(e,t,n);break e}nt(e,t,o,n)}t=t.child}return t;case 5:return W2(t),e===null&&Ki(t),o=t.type,a=t.pendingProps,l=e!==null?e.memoizedProps:null,s=a.children,Hi(o,a)?s=null:l!==null&&Hi(o,l)&&(t.flags|=32),xf(e,t),nt(e,t,s,n),t.child;case 6:return e===null&&Ki(t),null;case 13:return vf(e,t,n);case 4:return nu(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=eo(t,null,o,n):nt(e,t,o,n),t.child;case 11:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:Pt(o,a),i1(e,t,o,a,n);case 7:return nt(e,t,t.pendingProps,n),t.child;case 8:return nt(e,t,t.pendingProps.children,n),t.child;case 12:return nt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(o=t.type._context,a=t.pendingProps,l=t.memoizedProps,s=a.value,fe(Ul,o._currentValue),o._currentValue=s,l!==null)if(Ft(l.value,s)){if(l.children===a.children&&!pt.current){t=dn(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var i=l.dependencies;if(i!==null){s=l.child;for(var c=i.firstContext;c!==null;){if(c.context===o){if(l.tag===1){c=an(-1,n&-n),c.tag=2;var u=l.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}l.lanes|=n,c=l.alternate,c!==null&&(c.lanes|=n),Yi(l.return,n,t),i.lanes|=n;break}c=c.next}}else if(l.tag===10)s=l.type===t.type?null:l.child;else if(l.tag===18){if(s=l.return,s===null)throw Error(M(341));s.lanes|=n,i=s.alternate,i!==null&&(i.lanes|=n),Yi(s,n,t),s=l.sibling}else s=l.child;if(s!==null)s.return=l;else for(s=l;s!==null;){if(s===t){s=null;break}if(l=s.sibling,l!==null){l.return=s.return,s=l;break}s=s.return}l=s}nt(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,o=t.pendingProps.children,Kr(t,n),a=Lt(a),o=o(a),t.flags|=1,nt(e,t,o,n),t.child;case 14:return o=t.type,a=Pt(o,t.pendingProps),a=Pt(o.type,a),c1(e,t,o,a,n);case 15:return hf(e,t,t.type,t.pendingProps,n);case 17:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:Pt(o,a),Sl(e,t),t.tag=1,ft(o)?(e=!0,Il(t)):e=!1,Kr(t,n),U2(t,o,a),Xi(t,o,a,n),ec(null,t,o,!0,e,n);case 19:return yf(e,t,n);case 22:return mf(e,t,n)}throw Error(M(156,t.tag))};function Pf(e,t){return l2(e,t)}function mx(e,t,n,o){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kt(e,t,n,o){return new mx(e,t,n,o)}function gu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function xx(e){if(typeof e=="function")return gu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===$c)return 11;if(e===Ac)return 14}return 2}function Fn(e,t){var n=e.alternate;return n===null?(n=kt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function wl(e,t,n,o,a,l){var s=2;if(o=e,typeof e=="function")gu(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Rr:return pr(n.children,a,l,t);case Pc:s=8,a|=8;break;case ji:return e=kt(12,n,t,a|2),e.elementType=ji,e.lanes=l,e;case Si:return e=kt(13,n,t,a),e.elementType=Si,e.lanes=l,e;case bi:return e=kt(19,n,t,a),e.elementType=bi,e.lanes=l,e;case Hp:return ms(n,a,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Fp:s=10;break e;case Up:s=9;break e;case $c:s=11;break e;case Ac:s=14;break e;case kn:s=16,o=null;break e}throw Error(M(130,e==null?e:typeof e,""))}return t=kt(s,n,t,a),t.elementType=e,t.type=o,t.lanes=l,t}function pr(e,t,n,o){return e=kt(7,e,o,t),e.lanes=n,e}function ms(e,t,n,o){return e=kt(22,e,o,t),e.elementType=Hp,e.lanes=n,e.stateNode={isHidden:!1},e}function li(e,t,n){return e=kt(6,e,null,t),e.lanes=n,e}function si(e,t,n){return t=kt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function gx(e,t,n,o,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fs(0),this.expirationTimes=Fs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fs(0),this.identifierPrefix=o,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function vu(e,t,n,o,a,l,s,i,c){return e=new gx(e,t,n,i,c),t===1?(t=1,l===!0&&(t|=8)):t=0,l=kt(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:o,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},tu(l),e}function vx(e,t,n){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Nr,key:o==null?null:""+o,children:e,containerInfo:t,implementation:n}}function $f(e){if(!e)return Hn;e=e._reactInternals;e:{if(jr(e)!==e||e.tag!==1)throw Error(M(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ft(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(M(171))}if(e.tag===1){var n=e.type;if(ft(n))return M2(e,n,t)}return t}function Af(e,t,n,o,a,l,s,i,c){return e=vu(n,o,!0,e,a,l,s,i,c),e.context=$f(null),n=e.current,o=rt(),a=zn(n),l=an(o,a),l.callback=t??null,Bn(n,l,a),e.current.lanes=a,Sa(e,a,o),ht(e,o),e}function xs(e,t,n,o){var a=t.current,l=rt(),s=zn(a);return n=$f(n),t.context===null?t.context=n:t.pendingContext=n,t=an(l,s),t.payload={element:e},o=o===void 0?null:o,o!==null&&(t.callback=o),e=Bn(a,t,s),e!==null&&(zt(e,a,s,l),yl(e,a,s)),s}function ql(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function j1(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function yu(e,t){j1(e,t),(e=e.alternate)&&j1(e,t)}function yx(){return null}var Bf=typeof reportError=="function"?reportError:function(e){console.error(e)};function Cu(e){this._internalRoot=e}gs.prototype.render=Cu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(M(409));xs(e,t,null,null)};gs.prototype.unmount=Cu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;gr(function(){xs(null,e,null,null)}),t[cn]=null}};function gs(e){this._internalRoot=e}gs.prototype.unstable_scheduleHydration=function(e){if(e){var t=f2();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ln.length&&t!==0&&t<Ln[n].priority;n++);Ln.splice(n,0,e),n===0&&m2(e)}};function ju(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function vs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function S1(){}function Cx(e,t,n,o,a){if(a){if(typeof o=="function"){var l=o;o=function(){var u=ql(s);l.call(u)}}var s=Af(t,o,e,0,null,!1,!1,"",S1);return e._reactRootContainer=s,e[cn]=s.current,ca(e.nodeType===8?e.parentNode:e),gr(),s}for(;a=e.lastChild;)e.removeChild(a);if(typeof o=="function"){var i=o;o=function(){var u=ql(c);i.call(u)}}var c=vu(e,0,!1,null,null,!1,!1,"",S1);return e._reactRootContainer=c,e[cn]=c.current,ca(e.nodeType===8?e.parentNode:e),gr(function(){xs(t,c,n,o)}),c}function ys(e,t,n,o,a){var l=n._reactRootContainer;if(l){var s=l;if(typeof a=="function"){var i=a;a=function(){var c=ql(s);i.call(c)}}xs(t,s,e,a)}else s=Cx(n,t,e,a,o);return ql(s)}d2=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Mo(t.pendingLanes);n!==0&&(zc(t,n|1),ht(t,Me()),!(oe&6)&&(ro=Me()+500,Yn()))}break;case 13:gr(function(){var o=un(e,1);if(o!==null){var a=rt();zt(o,e,1,a)}}),yu(e,1)}};Fc=function(e){if(e.tag===13){var t=un(e,134217728);if(t!==null){var n=rt();zt(t,e,134217728,n)}yu(e,134217728)}};p2=function(e){if(e.tag===13){var t=zn(e),n=un(e,t);if(n!==null){var o=rt();zt(n,e,t,o)}yu(e,t)}};f2=function(){return ie};h2=function(e,t){var n=ie;try{return ie=e,t()}finally{ie=n}};Di=function(e,t,n){switch(t){case"input":if(ki(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var o=n[t];if(o!==e&&o.form===e.form){var a=cs(o);if(!a)throw Error(M(90));Wp(o),ki(o,a)}}}break;case"textarea":Gp(e,n);break;case"select":t=n.value,t!=null&&Vr(e,!!n.multiple,t,!1)}};e2=hu;t2=gr;var jx={usingClientEntryPoint:!1,Events:[_a,Pr,cs,qp,Jp,hu]},ko={findFiberByHostInstance:sr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Sx={bundleType:ko.bundleType,version:ko.version,rendererPackageName:ko.rendererPackageName,rendererConfig:ko.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:hn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=o2(e),e===null?null:e.stateNode},findFiberByHostInstance:ko.findFiberByHostInstance||yx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ll=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ll.isDisabled&&ll.supportsFiber)try{as=ll.inject(Sx),Kt=ll}catch{}}Ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jx;Ct.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ju(t))throw Error(M(200));return vx(e,t,null,n)};Ct.createRoot=function(e,t){if(!ju(e))throw Error(M(299));var n=!1,o="",a=Bf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=vu(e,1,!1,null,null,n,!1,o,a),e[cn]=t.current,ca(e.nodeType===8?e.parentNode:e),new Cu(t)};Ct.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(M(188)):(e=Object.keys(e).join(","),Error(M(268,e)));return e=o2(t),e=e===null?null:e.stateNode,e};Ct.flushSync=function(e){return gr(e)};Ct.hydrate=function(e,t,n){if(!vs(t))throw Error(M(200));return ys(null,e,t,!0,n)};Ct.hydrateRoot=function(e,t,n){if(!ju(e))throw Error(M(405));var o=n!=null&&n.hydratedSources||null,a=!1,l="",s=Bf;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Af(t,null,e,1,n??null,a,!1,l,s),e[cn]=t.current,ca(e),o)for(e=0;e<o.length;e++)n=o[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new gs(t)};Ct.render=function(e,t,n){if(!vs(t))throw Error(M(200));return ys(null,e,t,!1,n)};Ct.unmountComponentAtNode=function(e){if(!vs(e))throw Error(M(40));return e._reactRootContainer?(gr(function(){ys(null,null,e,!1,function(){e._reactRootContainer=null,e[cn]=null})}),!0):!1};Ct.unstable_batchedUpdates=hu;Ct.unstable_renderSubtreeIntoContainer=function(e,t,n,o){if(!vs(n))throw Error(M(200));if(e==null||e._reactInternals===void 0)throw Error(M(38));return ys(e,t,n,!1,o)};Ct.version="18.2.0-next-9e3b772b8-20220608";function If(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(If)}catch(e){console.error(e)}}If(),$p.exports=Ct;var bx=$p.exports,b1=bx;yi.createRoot=b1.createRoot,yi.hydrateRoot=b1.hydrateRoot;function _x(e,t){if(e==null)return{};var n={},o=Object.keys(e),a,l;for(l=0;l<o.length;l++)a=o[l],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function wx(e,t){if(e==null)return{};var n=_x(e,t),o,a;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)o=l[a],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}function pc(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function kx(e){if(Array.isArray(e))return pc(e)}function Tx(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ex(e,t){if(e){if(typeof e=="string")return pc(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return pc(e,t)}}function Lx(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Nx(e){return kx(e)||Tx(e)||Ex(e)||Lx()}function va(e){"@babel/helpers - typeof";return va=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},va(e)}function Rx(e,t){if(va(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t||"default");if(va(o)!=="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Ox(e){var t=Rx(e,"string");return va(t)==="symbol"?t:String(t)}function zf(e,t,n){return t=Ox(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function fc(){return fc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},fc.apply(this,arguments)}function _1(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,o)}return n}function Ur(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?_1(Object(n),!0).forEach(function(o){zf(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_1(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function Dx(e){var t=e.length;if(t===0||t===1)return e;if(t===2)return[e[0],e[1],"".concat(e[0],".").concat(e[1]),"".concat(e[1],".").concat(e[0])];if(t===3)return[e[0],e[1],e[2],"".concat(e[0],".").concat(e[1]),"".concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[0]),"".concat(e[1],".").concat(e[2]),"".concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[1],".").concat(e[0])];if(t>=4)return[e[0],e[1],e[2],e[3],"".concat(e[0],".").concat(e[1]),"".concat(e[0],".").concat(e[2]),"".concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[0]),"".concat(e[1],".").concat(e[2]),"".concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[1]),"".concat(e[2],".").concat(e[3]),"".concat(e[3],".").concat(e[0]),"".concat(e[3],".").concat(e[1]),"".concat(e[3],".").concat(e[2]),"".concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[1],".").concat(e[3]),"".concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[2],".").concat(e[3]),"".concat(e[0],".").concat(e[3],".").concat(e[1]),"".concat(e[0],".").concat(e[3],".").concat(e[2]),"".concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[1],".").concat(e[2],".").concat(e[3]),"".concat(e[1],".").concat(e[3],".").concat(e[0]),"".concat(e[1],".").concat(e[3],".").concat(e[2]),"".concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[0],".").concat(e[3]),"".concat(e[2],".").concat(e[1],".").concat(e[0]),"".concat(e[2],".").concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[3],".").concat(e[0]),"".concat(e[2],".").concat(e[3],".").concat(e[1]),"".concat(e[3],".").concat(e[0],".").concat(e[1]),"".concat(e[3],".").concat(e[0],".").concat(e[2]),"".concat(e[3],".").concat(e[1],".").concat(e[0]),"".concat(e[3],".").concat(e[1],".").concat(e[2]),"".concat(e[3],".").concat(e[2],".").concat(e[0]),"".concat(e[3],".").concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[1],".").concat(e[2],".").concat(e[3]),"".concat(e[0],".").concat(e[1],".").concat(e[3],".").concat(e[2]),"".concat(e[0],".").concat(e[2],".").concat(e[1],".").concat(e[3]),"".concat(e[0],".").concat(e[2],".").concat(e[3],".").concat(e[1]),"".concat(e[0],".").concat(e[3],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[3],".").concat(e[2],".").concat(e[1]),"".concat(e[1],".").concat(e[0],".").concat(e[2],".").concat(e[3]),"".concat(e[1],".").concat(e[0],".").concat(e[3],".").concat(e[2]),"".concat(e[1],".").concat(e[2],".").concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[2],".").concat(e[3],".").concat(e[0]),"".concat(e[1],".").concat(e[3],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[3],".").concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[0],".").concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[0],".").concat(e[3],".").concat(e[1]),"".concat(e[2],".").concat(e[1],".").concat(e[0],".").concat(e[3]),"".concat(e[2],".").concat(e[1],".").concat(e[3],".").concat(e[0]),"".concat(e[2],".").concat(e[3],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[3],".").concat(e[1],".").concat(e[0]),"".concat(e[3],".").concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[3],".").concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[3],".").concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[3],".").concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[3],".").concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[3],".").concat(e[2],".").concat(e[1],".").concat(e[0])]}var ii={};function Mx(e){if(e.length===0||e.length===1)return e;var t=e.join(".");return ii[t]||(ii[t]=Dx(e)),ii[t]}function Px(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,o=e.filter(function(l){return l!=="token"}),a=Mx(o);return a.reduce(function(l,s){return Ur(Ur({},l),n[s])},t)}function w1(e){return e.join(" ")}function $x(e,t){var n=0;return function(o){return n+=1,o.map(function(a,l){return Ff({node:a,stylesheet:e,useInlineStyles:t,key:"code-segment-".concat(n,"-").concat(l)})})}}function Ff(e){var t=e.node,n=e.stylesheet,o=e.style,a=o===void 0?{}:o,l=e.useInlineStyles,s=e.key,i=t.properties,c=t.type,u=t.tagName,d=t.value;if(c==="text")return d;if(u){var x=$x(n,l),m;if(!l)m=Ur(Ur({},i),{},{className:w1(i.className)});else{var j=Object.keys(n).reduce(function(g,p){return p.split(".").forEach(function(h){g.includes(h)||g.push(h)}),g},[]),y=i.className&&i.className.includes("token")?["token"]:[],S=i.className&&y.concat(i.className.filter(function(g){return!j.includes(g)}));m=Ur(Ur({},i),{},{className:w1(S)||void 0,style:Px(i.className,Object.assign({},i.style,a),n)})}var N=x(t.children);return Ge.createElement(u,fc({key:s},m),N)}}const Ax=function(e,t){var n=e.listLanguages();return n.indexOf(t)!==-1};var Bx=["language","children","style","customStyle","codeTagProps","useInlineStyles","showLineNumbers","showInlineLineNumbers","startingLineNumber","lineNumberContainerStyle","lineNumberStyle","wrapLines","wrapLongLines","lineProps","renderer","PreTag","CodeTag","code","astGenerator"];function k1(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,o)}return n}function Zt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?k1(Object(n),!0).forEach(function(o){zf(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k1(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}var Ix=/\n/g;function zx(e){return e.match(Ix)}function Fx(e){var t=e.lines,n=e.startingLineNumber,o=e.style;return t.map(function(a,l){var s=l+n;return Ge.createElement("span",{key:"line-".concat(l),className:"react-syntax-highlighter-line-number",style:typeof o=="function"?o(s):o},"".concat(s,`
`))})}function Ux(e){var t=e.codeString,n=e.codeStyle,o=e.containerStyle,a=o===void 0?{float:"left",paddingRight:"10px"}:o,l=e.numberStyle,s=l===void 0?{}:l,i=e.startingLineNumber;return Ge.createElement("code",{style:Object.assign({},n,a)},Fx({lines:t.replace(/\n$/,"").split(`
`),style:s,startingLineNumber:i}))}function Hx(e){return"".concat(e.toString().length,".25em")}function Uf(e,t){return{type:"element",tagName:"span",properties:{key:"line-number--".concat(e),className:["comment","linenumber","react-syntax-highlighter-line-number"],style:t},children:[{type:"text",value:e}]}}function Hf(e,t,n){var o={display:"inline-block",minWidth:Hx(n),paddingRight:"1em",textAlign:"right",userSelect:"none"},a=typeof e=="function"?e(t):e,l=Zt(Zt({},o),a);return l}function kl(e){var t=e.children,n=e.lineNumber,o=e.lineNumberStyle,a=e.largestLineNumber,l=e.showInlineLineNumbers,s=e.lineProps,i=s===void 0?{}:s,c=e.className,u=c===void 0?[]:c,d=e.showLineNumbers,x=e.wrapLongLines,m=typeof i=="function"?i(n):i;if(m.className=u,n&&l){var j=Hf(o,n,a);t.unshift(Uf(n,j))}return x&d&&(m.style=Zt(Zt({},m.style),{},{display:"flex"})),{type:"element",tagName:"span",properties:m,children:t}}function Vf(e){for(var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],o=0;o<e.length;o++){var a=e[o];if(a.type==="text")n.push(kl({children:[a],className:Nx(new Set(t))}));else if(a.children){var l=t.concat(a.properties.className);Vf(a.children,l).forEach(function(s){return n.push(s)})}}return n}function Vx(e,t,n,o,a,l,s,i,c){var u,d=Vf(e.value),x=[],m=-1,j=0;function y(v,C){var b=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return kl({children:v,lineNumber:C,lineNumberStyle:i,largestLineNumber:s,showInlineLineNumbers:a,lineProps:n,className:b,showLineNumbers:o,wrapLongLines:c})}function S(v,C){if(o&&C&&a){var b=Hf(i,C,s);v.unshift(Uf(C,b))}return v}function N(v,C){var b=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return t||b.length>0?y(v,C,b):S(v,C)}for(var g=function(){var C=d[j],b=C.children[0].value,T=zx(b);if(T){var E=b.split(`
`);E.forEach(function(P,U){var X=o&&x.length+l,se={type:"text",value:"".concat(P,`
`)};if(U===0){var Ce=d.slice(m+1,j).concat(kl({children:[se],className:C.properties.className})),J=N(Ce,X);x.push(J)}else if(U===E.length-1){var ue=d[j+1]&&d[j+1].children&&d[j+1].children[0],ge={type:"text",value:"".concat(P)};if(ue){var R=kl({children:[ge],className:C.properties.className});d.splice(j+1,0,R)}else{var $=[ge],A=N($,X,C.properties.className);x.push(A)}}else{var z=[se],K=N(z,X,C.properties.className);x.push(K)}}),m=j}j++};j<d.length;)g();if(m!==d.length-1){var p=d.slice(m+1,d.length);if(p&&p.length){var h=o&&x.length+l,f=N(p,h);x.push(f)}}return t?x:(u=[]).concat.apply(u,x)}function Wx(e){var t=e.rows,n=e.stylesheet,o=e.useInlineStyles;return t.map(function(a,l){return Ff({node:a,stylesheet:n,useInlineStyles:o,key:"code-segement".concat(l)})})}function Wf(e){return e&&typeof e.highlightAuto<"u"}function Zx(e){var t=e.astGenerator,n=e.language,o=e.code,a=e.defaultCodeValue;if(Wf(t)){var l=Ax(t,n);return n==="text"?{value:a,language:"text"}:l?t.highlight(n,o):t.highlightAuto(o)}try{return n&&n!=="text"?{value:t.highlight(o,n)}:{value:a}}catch{return{value:a}}}function Gx(e,t){return function(o){var a=o.language,l=o.children,s=o.style,i=s===void 0?t:s,c=o.customStyle,u=c===void 0?{}:c,d=o.codeTagProps,x=d===void 0?{className:a?"language-".concat(a):void 0,style:Zt(Zt({},i['code[class*="language-"]']),i['code[class*="language-'.concat(a,'"]')])}:d,m=o.useInlineStyles,j=m===void 0?!0:m,y=o.showLineNumbers,S=y===void 0?!1:y,N=o.showInlineLineNumbers,g=N===void 0?!0:N,p=o.startingLineNumber,h=p===void 0?1:p,f=o.lineNumberContainerStyle,v=o.lineNumberStyle,C=v===void 0?{}:v,b=o.wrapLines,T=o.wrapLongLines,E=T===void 0?!1:T,P=o.lineProps,U=P===void 0?{}:P,X=o.renderer,se=o.PreTag,Ce=se===void 0?"pre":se,J=o.CodeTag,ue=J===void 0?"code":J,ge=o.code,R=ge===void 0?(Array.isArray(l)?l[0]:l)||"":ge,$=o.astGenerator,A=wx(o,Bx);$=$||e;var z=S?Ge.createElement(Ux,{containerStyle:f,codeStyle:x.style||{},numberStyle:C,startingLineNumber:h,codeString:R}):null,K=i.hljs||i['pre[class*="language-"]']||{backgroundColor:"#fff"},Ae=Wf($)?"hljs":"prismjs",le=j?Object.assign({},A,{style:Object.assign({},K,u)}):Object.assign({},A,{className:A.className?"".concat(Ae," ").concat(A.className):Ae,style:Object.assign({},u)});if(E?x.style=Zt(Zt({},x.style),{},{whiteSpace:"pre-wrap"}):x.style=Zt(Zt({},x.style),{},{whiteSpace:"pre"}),!$)return Ge.createElement(Ce,le,z,Ge.createElement(ue,x,R));(b===void 0&&X||E)&&(b=!0),X=X||Wx;var Be=[{type:"text",value:R}],Ee=Zx({astGenerator:$,language:a,code:R,defaultCodeValue:Be});Ee.language===null&&(Ee.value=Be);var We=Ee.value.length+h,er=Vx(Ee,b,U,S,g,h,We,C,E);return Ge.createElement(Ce,le,Ge.createElement(ue,x,!g&&z,X({rows:er,stylesheet:i,useInlineStyles:j})))}}var Kx=Qx,Yx=Object.prototype.hasOwnProperty;function Qx(){for(var e={},t=0;t<arguments.length;t++){var n=arguments[t];for(var o in n)Yx.call(n,o)&&(e[o]=n[o])}return e}var Zf=Gf,Su=Gf.prototype;Su.space=null;Su.normal={};Su.property={};function Gf(e,t,n){this.property=e,this.normal=t,n&&(this.space=n)}var T1=Kx,Xx=Zf,qx=Jx;function Jx(e){for(var t=e.length,n=[],o=[],a=-1,l,s;++a<t;)l=e[a],n.push(l.property),o.push(l.normal),s=l.space;return new Xx(T1.apply(null,n),T1.apply(null,o),s)}var bu=eg;function eg(e){return e.toLowerCase()}var Kf=Yf,Rt=Yf.prototype;Rt.space=null;Rt.attribute=null;Rt.property=null;Rt.boolean=!1;Rt.booleanish=!1;Rt.overloadedBoolean=!1;Rt.number=!1;Rt.commaSeparated=!1;Rt.spaceSeparated=!1;Rt.commaOrSpaceSeparated=!1;Rt.mustUseProperty=!1;Rt.defined=!1;function Yf(e,t){this.property=e,this.attribute=t}var Qt={},tg=0;Qt.boolean=Sr();Qt.booleanish=Sr();Qt.overloadedBoolean=Sr();Qt.number=Sr();Qt.spaceSeparated=Sr();Qt.commaSeparated=Sr();Qt.commaOrSpaceSeparated=Sr();function Sr(){return Math.pow(2,++tg)}var Qf=Kf,E1=Qt,Xf=_u;_u.prototype=new Qf;_u.prototype.defined=!0;var qf=["boolean","booleanish","overloadedBoolean","number","commaSeparated","spaceSeparated","commaOrSpaceSeparated"],ng=qf.length;function _u(e,t,n,o){var a=-1,l;for(L1(this,"space",o),Qf.call(this,e,t);++a<ng;)l=qf[a],L1(this,l,(n&E1[l])===E1[l])}function L1(e,t,n){n&&(e[t]=n)}var N1=bu,rg=Zf,og=Xf,ka=ag;function ag(e){var t=e.space,n=e.mustUseProperty||[],o=e.attributes||{},a=e.properties,l=e.transform,s={},i={},c,u;for(c in a)u=new og(c,l(o,c),a[c],t),n.indexOf(c)!==-1&&(u.mustUseProperty=!0),s[c]=u,i[N1(c)]=c,i[N1(u.attribute)]=c;return new rg(s,i,t)}var lg=ka,sg=lg({space:"xlink",transform:ig,properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}});function ig(e,t){return"xlink:"+t.slice(5).toLowerCase()}var cg=ka,ug=cg({space:"xml",transform:dg,properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function dg(e,t){return"xml:"+t.slice(3).toLowerCase()}var pg=fg;function fg(e,t){return t in e?e[t]:t}var hg=pg,Jf=mg;function mg(e,t){return hg(e,t.toLowerCase())}var xg=ka,gg=Jf,vg=xg({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:gg,properties:{xmlns:null,xmlnsXLink:null}}),wu=Qt,yg=ka,ct=wu.booleanish,St=wu.number,or=wu.spaceSeparated,Cg=yg({transform:jg,properties:{ariaActiveDescendant:null,ariaAtomic:ct,ariaAutoComplete:null,ariaBusy:ct,ariaChecked:ct,ariaColCount:St,ariaColIndex:St,ariaColSpan:St,ariaControls:or,ariaCurrent:null,ariaDescribedBy:or,ariaDetails:null,ariaDisabled:ct,ariaDropEffect:or,ariaErrorMessage:null,ariaExpanded:ct,ariaFlowTo:or,ariaGrabbed:ct,ariaHasPopup:null,ariaHidden:ct,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:or,ariaLevel:St,ariaLive:null,ariaModal:ct,ariaMultiLine:ct,ariaMultiSelectable:ct,ariaOrientation:null,ariaOwns:or,ariaPlaceholder:null,ariaPosInSet:St,ariaPressed:ct,ariaReadOnly:ct,ariaRelevant:null,ariaRequired:ct,ariaRoleDescription:or,ariaRowCount:St,ariaRowIndex:St,ariaRowSpan:St,ariaSelected:ct,ariaSetSize:St,ariaSort:null,ariaValueMax:St,ariaValueMin:St,ariaValueNow:St,ariaValueText:null,role:null}});function jg(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}var io=Qt,Sg=ka,bg=Jf,ee=io.boolean,_g=io.overloadedBoolean,To=io.booleanish,he=io.number,tt=io.spaceSeparated,sl=io.commaSeparated,wg=Sg({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:bg,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:sl,acceptCharset:tt,accessKey:tt,action:null,allow:null,allowFullScreen:ee,allowPaymentRequest:ee,allowUserMedia:ee,alt:null,as:null,async:ee,autoCapitalize:null,autoComplete:tt,autoFocus:ee,autoPlay:ee,capture:ee,charSet:null,checked:ee,cite:null,className:tt,cols:he,colSpan:null,content:null,contentEditable:To,controls:ee,controlsList:tt,coords:he|sl,crossOrigin:null,data:null,dateTime:null,decoding:null,default:ee,defer:ee,dir:null,dirName:null,disabled:ee,download:_g,draggable:To,encType:null,enterKeyHint:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:ee,formTarget:null,headers:tt,height:he,hidden:ee,high:he,href:null,hrefLang:null,htmlFor:tt,httpEquiv:tt,id:null,imageSizes:null,imageSrcSet:sl,inputMode:null,integrity:null,is:null,isMap:ee,itemId:null,itemProp:tt,itemRef:tt,itemScope:ee,itemType:tt,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:ee,low:he,manifest:null,max:null,maxLength:he,media:null,method:null,min:null,minLength:he,multiple:ee,muted:ee,name:null,nonce:null,noModule:ee,noValidate:ee,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforePrint:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextMenu:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:ee,optimum:he,pattern:null,ping:tt,placeholder:null,playsInline:ee,poster:null,preload:null,readOnly:ee,referrerPolicy:null,rel:tt,required:ee,reversed:ee,rows:he,rowSpan:he,sandbox:tt,scope:null,scoped:ee,seamless:ee,selected:ee,shape:null,size:he,sizes:null,slot:null,span:he,spellCheck:To,src:null,srcDoc:null,srcLang:null,srcSet:sl,start:he,step:null,style:null,tabIndex:he,target:null,title:null,translate:null,type:null,typeMustMatch:ee,useMap:null,value:To,width:he,wrap:null,align:null,aLink:null,archive:tt,axis:null,background:null,bgColor:null,border:he,borderColor:null,bottomMargin:he,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:ee,declare:ee,event:null,face:null,frame:null,frameBorder:null,hSpace:he,leftMargin:he,link:null,longDesc:null,lowSrc:null,marginHeight:he,marginWidth:he,noResize:ee,noHref:ee,noShade:ee,noWrap:ee,object:null,profile:null,prompt:null,rev:null,rightMargin:he,rules:null,scheme:null,scrolling:To,standby:null,summary:null,text:null,topMargin:he,valueType:null,version:null,vAlign:null,vLink:null,vSpace:he,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:ee,disableRemotePlayback:ee,prefix:null,property:null,results:he,security:null,unselectable:null}}),kg=qx,Tg=sg,Eg=ug,Lg=vg,Ng=Cg,Rg=wg,Og=kg([Eg,Tg,Lg,Ng,Rg]),Dg=bu,Mg=Xf,Pg=Kf,ku="data",$g=Ig,Ag=/^data[-\w.:]+$/i,eh=/-[a-z]/g,Bg=/[A-Z]/g;function Ig(e,t){var n=Dg(t),o=t,a=Pg;return n in e.normal?e.property[e.normal[n]]:(n.length>4&&n.slice(0,4)===ku&&Ag.test(t)&&(t.charAt(4)==="-"?o=zg(t):t=Fg(t),a=Mg),new a(o,t))}function zg(e){var t=e.slice(5).replace(eh,Hg);return ku+t.charAt(0).toUpperCase()+t.slice(1)}function Fg(e){var t=e.slice(4);return eh.test(t)?e:(t=t.replace(Bg,Ug),t.charAt(0)!=="-"&&(t="-"+t),ku+t)}function Ug(e){return"-"+e.toLowerCase()}function Hg(e){return e.charAt(1).toUpperCase()}var Vg=Wg,R1=/[#.]/g;function Wg(e,t){for(var n=e||"",o=t||"div",a={},l=0,s,i,c;l<n.length;)R1.lastIndex=l,c=R1.exec(n),s=n.slice(l,c?c.index:n.length),s&&(i?i==="#"?a.id=s:a.className?a.className.push(s):a.className=[s]:o=s,l+=s.length),c&&(i=c[0],l++);return{type:"element",tagName:o,properties:a,children:[]}}var Tu={};Tu.parse=Kg;Tu.stringify=Yg;var O1="",Zg=" ",Gg=/[ \t\n\r\f]+/g;function Kg(e){var t=String(e||O1).trim();return t===O1?[]:t.split(Gg)}function Yg(e){return e.join(Zg).trim()}var Eu={};Eu.parse=Qg;Eu.stringify=Xg;var hc=",",D1=" ",$o="";function Qg(e){for(var t=[],n=String(e||$o),o=n.indexOf(hc),a=0,l=!1,s;!l;)o===-1&&(o=n.length,l=!0),s=n.slice(a,o).trim(),(s||!l)&&t.push(s),a=o+1,o=n.indexOf(hc,a);return t}function Xg(e,t){var n=t||{},o=n.padLeft===!1?$o:D1,a=n.padRight?D1:$o;return e[e.length-1]===$o&&(e=e.concat($o)),e.join(a+hc+o).trim()}var qg=$g,M1=bu,Jg=Vg,P1=Tu.parse,$1=Eu.parse,e6=n6,t6={}.hasOwnProperty;function n6(e,t,n){var o=n?s6(n):null;return a;function a(s,i){var c=Jg(s,t),u=Array.prototype.slice.call(arguments,2),d=c.tagName.toLowerCase(),x;if(c.tagName=o&&t6.call(o,d)?o[d]:d,i&&r6(i,c)&&(u.unshift(i),i=null),i)for(x in i)l(c.properties,x,i[x]);return th(c.children,u),c.tagName==="template"&&(c.content={type:"root",children:c.children},c.children=[]),c}function l(s,i,c){var u,d,x;c==null||c!==c||(u=qg(e,i),d=u.property,x=c,typeof x=="string"&&(u.spaceSeparated?x=P1(x):u.commaSeparated?x=$1(x):u.commaOrSpaceSeparated&&(x=P1($1(x).join(" ")))),d==="style"&&typeof c!="string"&&(x=l6(x)),d==="className"&&s.className&&(x=s.className.concat(x)),s[d]=a6(u,d,x))}}function r6(e,t){return typeof e=="string"||"length"in e||o6(t.tagName,e)}function o6(e,t){var n=t.type;return e==="input"||!n||typeof n!="string"?!1:typeof t.children=="object"&&"length"in t.children?!0:(n=n.toLowerCase(),e==="button"?n!=="menu"&&n!=="submit"&&n!=="reset"&&n!=="button":"value"in t)}function th(e,t){var n,o;if(typeof t=="string"||typeof t=="number"){e.push({type:"text",value:String(t)});return}if(typeof t=="object"&&"length"in t){for(n=-1,o=t.length;++n<o;)th(e,t[n]);return}if(typeof t!="object"||!("type"in t))throw new Error("Expected node, nodes, or string, got `"+t+"`");e.push(t)}function a6(e,t,n){var o,a,l;if(typeof n!="object"||!("length"in n))return A1(e,t,n);for(a=n.length,o=-1,l=[];++o<a;)l[o]=A1(e,t,n[o]);return l}function A1(e,t,n){var o=n;return e.number||e.positiveNumber?!isNaN(o)&&o!==""&&(o=Number(o)):(e.boolean||e.overloadedBoolean)&&typeof o=="string"&&(o===""||M1(n)===M1(t))&&(o=!0),o}function l6(e){var t=[],n;for(n in e)t.push([n,e[n]].join(": "));return t.join("; ")}function s6(e){for(var t=e.length,n=-1,o={},a;++n<t;)a=e[n],o[a.toLowerCase()]=a;return o}var i6=Og,c6=e6,nh=c6(i6,"div");nh.displayName="html";var u6=nh,d6=u6;const p6="Æ",f6="&",h6="Á",m6="Â",x6="À",g6="Å",v6="Ã",y6="Ä",C6="©",j6="Ç",S6="Ð",b6="É",_6="Ê",w6="È",k6="Ë",T6=">",E6="Í",L6="Î",N6="Ì",R6="Ï",O6="<",D6="Ñ",M6="Ó",P6="Ô",$6="Ò",A6="Ø",B6="Õ",I6="Ö",z6='"',F6="®",U6="Þ",H6="Ú",V6="Û",W6="Ù",Z6="Ü",G6="Ý",K6="á",Y6="â",Q6="´",X6="æ",q6="à",J6="&",e8="å",t8="ã",n8="ä",r8="¦",o8="ç",a8="¸",l8="¢",s8="©",i8="¤",c8="°",u8="÷",d8="é",p8="ê",f8="è",h8="ð",m8="ë",x8="½",g8="¼",v8="¾",y8=">",C8="í",j8="î",S8="¡",b8="ì",_8="¿",w8="ï",k8="«",T8="<",E8="¯",L8="µ",N8="·",R8=" ",O8="¬",D8="ñ",M8="ó",P8="ô",$8="ò",A8="ª",B8="º",I8="ø",z8="õ",F8="ö",U8="¶",H8="±",V8="£",W8='"',Z8="»",G8="®",K8="§",Y8="­",Q8="¹",X8="²",q8="³",J8="ß",e7="þ",t7="×",n7="ú",r7="û",o7="ù",a7="¨",l7="ü",s7="ý",i7="¥",c7="ÿ",u7={AElig:p6,AMP:f6,Aacute:h6,Acirc:m6,Agrave:x6,Aring:g6,Atilde:v6,Auml:y6,COPY:C6,Ccedil:j6,ETH:S6,Eacute:b6,Ecirc:_6,Egrave:w6,Euml:k6,GT:T6,Iacute:E6,Icirc:L6,Igrave:N6,Iuml:R6,LT:O6,Ntilde:D6,Oacute:M6,Ocirc:P6,Ograve:$6,Oslash:A6,Otilde:B6,Ouml:I6,QUOT:z6,REG:F6,THORN:U6,Uacute:H6,Ucirc:V6,Ugrave:W6,Uuml:Z6,Yacute:G6,aacute:K6,acirc:Y6,acute:Q6,aelig:X6,agrave:q6,amp:J6,aring:e8,atilde:t8,auml:n8,brvbar:r8,ccedil:o8,cedil:a8,cent:l8,copy:s8,curren:i8,deg:c8,divide:u8,eacute:d8,ecirc:p8,egrave:f8,eth:h8,euml:m8,frac12:x8,frac14:g8,frac34:v8,gt:y8,iacute:C8,icirc:j8,iexcl:S8,igrave:b8,iquest:_8,iuml:w8,laquo:k8,lt:T8,macr:E8,micro:L8,middot:N8,nbsp:R8,not:O8,ntilde:D8,oacute:M8,ocirc:P8,ograve:$8,ordf:A8,ordm:B8,oslash:I8,otilde:z8,ouml:F8,para:U8,plusmn:H8,pound:V8,quot:W8,raquo:Z8,reg:G8,sect:K8,shy:Y8,sup1:Q8,sup2:X8,sup3:q8,szlig:J8,thorn:e7,times:t7,uacute:n7,ucirc:r7,ugrave:o7,uml:a7,uuml:l7,yacute:s7,yen:i7,yuml:c7},d7={0:"�",128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"};var rh=p7;function p7(e){var t=typeof e=="string"?e.charCodeAt(0):e;return t>=48&&t<=57}var f7=h7;function h7(e){var t=typeof e=="string"?e.charCodeAt(0):e;return t>=97&&t<=102||t>=65&&t<=70||t>=48&&t<=57}var m7=x7;function x7(e){var t=typeof e=="string"?e.charCodeAt(0):e;return t>=97&&t<=122||t>=65&&t<=90}var g7=m7,v7=rh,y7=C7;function C7(e){return g7(e)||v7(e)}var il,j7=59,S7=b7;function b7(e){var t="&"+e+";",n;return il=il||document.createElement("i"),il.innerHTML=t,n=il.textContent,n.charCodeAt(n.length-1)===j7&&e!=="semi"||n===t?!1:n}var B1=u7,I1=d7,_7=rh,w7=f7,oh=y7,k7=S7,T7=z7,E7={}.hasOwnProperty,Er=String.fromCharCode,L7=Function.prototype,z1={warning:null,reference:null,text:null,warningContext:null,referenceContext:null,textContext:null,position:{},additional:null,attribute:!1,nonTerminated:!0},N7=9,F1=10,R7=12,O7=32,U1=38,D7=59,M7=60,P7=61,$7=35,A7=88,B7=120,I7=65533,Lr="named",Lu="hexadecimal",Nu="decimal",Ru={};Ru[Lu]=16;Ru[Nu]=10;var Cs={};Cs[Lr]=oh;Cs[Nu]=_7;Cs[Lu]=w7;var ah=1,lh=2,sh=3,ih=4,ch=5,mc=6,uh=7,Qn={};Qn[ah]="Named character references must be terminated by a semicolon";Qn[lh]="Numeric character references must be terminated by a semicolon";Qn[sh]="Named character references cannot be empty";Qn[ih]="Numeric character references cannot be empty";Qn[ch]="Named character references must be known";Qn[mc]="Numeric character references cannot be disallowed";Qn[uh]="Numeric character references cannot be outside the permissible Unicode range";function z7(e,t){var n={},o,a;t||(t={});for(a in z1)o=t[a],n[a]=o??z1[a];return(n.position.indent||n.position.start)&&(n.indent=n.position.indent||[],n.position=n.position.start),F7(e,n)}function F7(e,t){var n=t.additional,o=t.nonTerminated,a=t.text,l=t.reference,s=t.warning,i=t.textContext,c=t.referenceContext,u=t.warningContext,d=t.position,x=t.indent||[],m=e.length,j=0,y=-1,S=d.column||1,N=d.line||1,g="",p=[],h,f,v,C,b,T,E,P,U,X,se,Ce,J,ue,ge,R,$,A,z;for(typeof n=="string"&&(n=n.charCodeAt(0)),R=K(),P=s?Ae:L7,j--,m++;++j<m;)if(b===F1&&(S=x[y]||1),b=e.charCodeAt(j),b===U1){if(E=e.charCodeAt(j+1),E===N7||E===F1||E===R7||E===O7||E===U1||E===M7||E!==E||n&&E===n){g+=Er(b),S++;continue}for(J=j+1,Ce=J,z=J,E===$7?(z=++Ce,E=e.charCodeAt(z),E===A7||E===B7?(ue=Lu,z=++Ce):ue=Nu):ue=Lr,h="",se="",C="",ge=Cs[ue],z--;++z<m&&(E=e.charCodeAt(z),!!ge(E));)C+=Er(E),ue===Lr&&E7.call(B1,C)&&(h=C,se=B1[C]);v=e.charCodeAt(z)===D7,v&&(z++,f=ue===Lr?k7(C):!1,f&&(h=C,se=f)),A=1+z-J,!v&&!o||(C?ue===Lr?(v&&!se?P(ch,1):(h!==C&&(z=Ce+h.length,A=1+z-Ce,v=!1),v||(U=h?ah:sh,t.attribute?(E=e.charCodeAt(z),E===P7?(P(U,A),se=null):oh(E)?se=null:P(U,A)):P(U,A))),T=se):(v||P(lh,A),T=parseInt(C,Ru[ue]),U7(T)?(P(uh,A),T=Er(I7)):T in I1?(P(mc,A),T=I1[T]):(X="",H7(T)&&P(mc,A),T>65535&&(T-=65536,X+=Er(T>>>10|55296),T=56320|T&1023),T=X+Er(T))):ue!==Lr&&P(ih,A)),T?(le(),R=K(),j=z-1,S+=z-J+1,p.push(T),$=K(),$.offset++,l&&l.call(c,T,{start:R,end:$},e.slice(J-1,z)),R=$):(C=e.slice(J-1,z),g+=C,S+=C.length,j=z-1)}else b===10&&(N++,y++,S=0),b===b?(g+=Er(b),S++):le();return p.join("");function K(){return{line:N,column:S,offset:j+(d.offset||0)}}function Ae(Be,Ee){var We=K();We.column+=Ee,We.offset+=Ee,s.call(u,Qn[Be],We,Be)}function le(){g&&(p.push(g),a&&a.call(i,g,{start:R,end:K()}),g="")}}function U7(e){return e>=55296&&e<=57343||e>1114111}function H7(e){return e>=1&&e<=8||e===11||e>=13&&e<=31||e>=127&&e<=159||e>=64976&&e<=65007||(e&65535)===65535||(e&65535)===65534}var dh={exports:{}};(function(e){var t=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=function(o){var a=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,l=0,s={},i={manual:o.Prism&&o.Prism.manual,disableWorkerMessageHandler:o.Prism&&o.Prism.disableWorkerMessageHandler,util:{encode:function p(h){return h instanceof c?new c(h.type,p(h.content),h.alias):Array.isArray(h)?h.map(p):h.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(p){return Object.prototype.toString.call(p).slice(8,-1)},objId:function(p){return p.__id||Object.defineProperty(p,"__id",{value:++l}),p.__id},clone:function p(h,f){f=f||{};var v,C;switch(i.util.type(h)){case"Object":if(C=i.util.objId(h),f[C])return f[C];v={},f[C]=v;for(var b in h)h.hasOwnProperty(b)&&(v[b]=p(h[b],f));return v;case"Array":return C=i.util.objId(h),f[C]?f[C]:(v=[],f[C]=v,h.forEach(function(T,E){v[E]=p(T,f)}),v);default:return h}},getLanguage:function(p){for(;p;){var h=a.exec(p.className);if(h)return h[1].toLowerCase();p=p.parentElement}return"none"},setLanguage:function(p,h){p.className=p.className.replace(RegExp(a,"gi"),""),p.classList.add("language-"+h)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(v){var p=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(v.stack)||[])[1];if(p){var h=document.getElementsByTagName("script");for(var f in h)if(h[f].src==p)return h[f]}return null}},isActive:function(p,h,f){for(var v="no-"+h;p;){var C=p.classList;if(C.contains(h))return!0;if(C.contains(v))return!1;p=p.parentElement}return!!f}},languages:{plain:s,plaintext:s,text:s,txt:s,extend:function(p,h){var f=i.util.clone(i.languages[p]);for(var v in h)f[v]=h[v];return f},insertBefore:function(p,h,f,v){v=v||i.languages;var C=v[p],b={};for(var T in C)if(C.hasOwnProperty(T)){if(T==h)for(var E in f)f.hasOwnProperty(E)&&(b[E]=f[E]);f.hasOwnProperty(T)||(b[T]=C[T])}var P=v[p];return v[p]=b,i.languages.DFS(i.languages,function(U,X){X===P&&U!=p&&(this[U]=b)}),b},DFS:function p(h,f,v,C){C=C||{};var b=i.util.objId;for(var T in h)if(h.hasOwnProperty(T)){f.call(h,T,h[T],v||T);var E=h[T],P=i.util.type(E);P==="Object"&&!C[b(E)]?(C[b(E)]=!0,p(E,f,null,C)):P==="Array"&&!C[b(E)]&&(C[b(E)]=!0,p(E,f,T,C))}}},plugins:{},highlightAll:function(p,h){i.highlightAllUnder(document,p,h)},highlightAllUnder:function(p,h,f){var v={callback:f,container:p,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};i.hooks.run("before-highlightall",v),v.elements=Array.prototype.slice.apply(v.container.querySelectorAll(v.selector)),i.hooks.run("before-all-elements-highlight",v);for(var C=0,b;b=v.elements[C++];)i.highlightElement(b,h===!0,v.callback)},highlightElement:function(p,h,f){var v=i.util.getLanguage(p),C=i.languages[v];i.util.setLanguage(p,v);var b=p.parentElement;b&&b.nodeName.toLowerCase()==="pre"&&i.util.setLanguage(b,v);var T=p.textContent,E={element:p,language:v,grammar:C,code:T};function P(X){E.highlightedCode=X,i.hooks.run("before-insert",E),E.element.innerHTML=E.highlightedCode,i.hooks.run("after-highlight",E),i.hooks.run("complete",E),f&&f.call(E.element)}if(i.hooks.run("before-sanity-check",E),b=E.element.parentElement,b&&b.nodeName.toLowerCase()==="pre"&&!b.hasAttribute("tabindex")&&b.setAttribute("tabindex","0"),!E.code){i.hooks.run("complete",E),f&&f.call(E.element);return}if(i.hooks.run("before-highlight",E),!E.grammar){P(i.util.encode(E.code));return}if(h&&o.Worker){var U=new Worker(i.filename);U.onmessage=function(X){P(X.data)},U.postMessage(JSON.stringify({language:E.language,code:E.code,immediateClose:!0}))}else P(i.highlight(E.code,E.grammar,E.language))},highlight:function(p,h,f){var v={code:p,grammar:h,language:f};if(i.hooks.run("before-tokenize",v),!v.grammar)throw new Error('The language "'+v.language+'" has no grammar.');return v.tokens=i.tokenize(v.code,v.grammar),i.hooks.run("after-tokenize",v),c.stringify(i.util.encode(v.tokens),v.language)},tokenize:function(p,h){var f=h.rest;if(f){for(var v in f)h[v]=f[v];delete h.rest}var C=new x;return m(C,C.head,p),d(p,C,h,C.head,0),y(C)},hooks:{all:{},add:function(p,h){var f=i.hooks.all;f[p]=f[p]||[],f[p].push(h)},run:function(p,h){var f=i.hooks.all[p];if(!(!f||!f.length))for(var v=0,C;C=f[v++];)C(h)}},Token:c};o.Prism=i;function c(p,h,f,v){this.type=p,this.content=h,this.alias=f,this.length=(v||"").length|0}c.stringify=function p(h,f){if(typeof h=="string")return h;if(Array.isArray(h)){var v="";return h.forEach(function(P){v+=p(P,f)}),v}var C={type:h.type,content:p(h.content,f),tag:"span",classes:["token",h.type],attributes:{},language:f},b=h.alias;b&&(Array.isArray(b)?Array.prototype.push.apply(C.classes,b):C.classes.push(b)),i.hooks.run("wrap",C);var T="";for(var E in C.attributes)T+=" "+E+'="'+(C.attributes[E]||"").replace(/"/g,"&quot;")+'"';return"<"+C.tag+' class="'+C.classes.join(" ")+'"'+T+">"+C.content+"</"+C.tag+">"};function u(p,h,f,v){p.lastIndex=h;var C=p.exec(f);if(C&&v&&C[1]){var b=C[1].length;C.index+=b,C[0]=C[0].slice(b)}return C}function d(p,h,f,v,C,b){for(var T in f)if(!(!f.hasOwnProperty(T)||!f[T])){var E=f[T];E=Array.isArray(E)?E:[E];for(var P=0;P<E.length;++P){if(b&&b.cause==T+","+P)return;var U=E[P],X=U.inside,se=!!U.lookbehind,Ce=!!U.greedy,J=U.alias;if(Ce&&!U.pattern.global){var ue=U.pattern.toString().match(/[imsuy]*$/)[0];U.pattern=RegExp(U.pattern.source,ue+"g")}for(var ge=U.pattern||U,R=v.next,$=C;R!==h.tail&&!(b&&$>=b.reach);$+=R.value.length,R=R.next){var A=R.value;if(h.length>p.length)return;if(!(A instanceof c)){var z=1,K;if(Ce){if(K=u(ge,$,p,se),!K||K.index>=p.length)break;var Ee=K.index,Ae=K.index+K[0].length,le=$;for(le+=R.value.length;Ee>=le;)R=R.next,le+=R.value.length;if(le-=R.value.length,$=le,R.value instanceof c)continue;for(var Be=R;Be!==h.tail&&(le<Ae||typeof Be.value=="string");Be=Be.next)z++,le+=Be.value.length;z--,A=p.slice($,le),K.index-=$}else if(K=u(ge,0,A,se),!K)continue;var Ee=K.index,We=K[0],er=A.slice(0,Ee),je=A.slice(Ee+We.length),qt=$+A.length;b&&qt>b.reach&&(b.reach=qt);var tr=R.prev;er&&(tr=m(h,tr,er),$+=er.length),j(h,tr,z);var Ls=new c(T,X?i.tokenize(We,X):We,J,We);if(R=m(h,tr,Ls),je&&m(h,R,je),z>1){var Ot={cause:T+","+P,reach:qt};d(p,h,f,R.prev,$,Ot),b&&Ot.reach>b.reach&&(b.reach=Ot.reach)}}}}}}function x(){var p={value:null,prev:null,next:null},h={value:null,prev:p,next:null};p.next=h,this.head=p,this.tail=h,this.length=0}function m(p,h,f){var v=h.next,C={value:f,prev:h,next:v};return h.next=C,v.prev=C,p.length++,C}function j(p,h,f){for(var v=h.next,C=0;C<f&&v!==p.tail;C++)v=v.next;h.next=v,v.prev=h,p.length-=C}function y(p){for(var h=[],f=p.head.next;f!==p.tail;)h.push(f.value),f=f.next;return h}if(!o.document)return o.addEventListener&&(i.disableWorkerMessageHandler||o.addEventListener("message",function(p){var h=JSON.parse(p.data),f=h.language,v=h.code,C=h.immediateClose;o.postMessage(i.highlight(v,i.languages[f],f)),C&&o.close()},!1)),i;var S=i.util.currentScript();S&&(i.filename=S.src,S.hasAttribute("data-manual")&&(i.manual=!0));function N(){i.manual||i.highlightAll()}if(!i.manual){var g=document.readyState;g==="loading"||g==="interactive"&&S&&S.defer?document.addEventListener("DOMContentLoaded",N):window.requestAnimationFrame?window.requestAnimationFrame(N):window.setTimeout(N,16)}return i}(t);e.exports&&(e.exports=n),typeof El<"u"&&(El.Prism=n)})(dh);var V7=dh.exports,W7=Ou;Ou.displayName="markup";Ou.aliases=["html","mathml","svg","xml","ssml","atom","rss"];function Ou(e){e.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},e.languages.markup.tag.inside["attr-value"].inside.entity=e.languages.markup.entity,e.languages.markup.doctype.inside["internal-subset"].inside=e.languages.markup,e.hooks.add("wrap",function(t){t.type==="entity"&&(t.attributes.title=t.content.value.replace(/&amp;/,"&"))}),Object.defineProperty(e.languages.markup.tag,"addInlined",{value:function(n,o){var a={};a["language-"+o]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:e.languages[o]},a.cdata=/^<!\[CDATA\[|\]\]>$/i;var l={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};l["language-"+o]={pattern:/[\s\S]+/,inside:e.languages[o]};var s={};s[n]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return n}),"i"),lookbehind:!0,greedy:!0,inside:l},e.languages.insertBefore("markup","cdata",s)}}),Object.defineProperty(e.languages.markup.tag,"addAttribute",{value:function(t,n){e.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+t+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[n,"language-"+n],inside:e.languages[n]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),e.languages.html=e.languages.markup,e.languages.mathml=e.languages.markup,e.languages.svg=e.languages.markup,e.languages.xml=e.languages.extend("markup",{}),e.languages.ssml=e.languages.xml,e.languages.atom=e.languages.xml,e.languages.rss=e.languages.xml}var ph=Du;Du.displayName="css";Du.aliases=[];function Du(e){(function(t){var n=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;t.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+n.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+n.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+n.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:n,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},t.languages.css.atrule.inside.rest=t.languages.css;var o=t.languages.markup;o&&(o.tag.addInlined("style","css"),o.tag.addAttribute("style","css"))})(e)}const Z7=Zn(ph);var G7=Mu;Mu.displayName="clike";Mu.aliases=[];function Mu(e){e.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/}}var K7=Pu;Pu.displayName="javascript";Pu.aliases=["js"];function Pu(e){e.languages.javascript=e.languages.extend("clike",{"class-name":[e.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),e.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,e.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:e.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:e.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:e.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:e.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:e.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),e.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:e.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),e.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),e.languages.markup&&(e.languages.markup.tag.addInlined("script","javascript"),e.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),e.languages.js=e.languages.javascript}var Ao=typeof globalThis=="object"?globalThis:typeof self=="object"?self:typeof window=="object"?window:typeof El=="object"?El:{},Y7=d9();Ao.Prism={manual:!0,disableWorkerMessageHandler:!0};var Q7=d6,X7=T7,fh=V7,q7=W7,J7=ph,e9=G7,t9=K7;Y7();var $u={}.hasOwnProperty;function hh(){}hh.prototype=fh;var $e=new hh,n9=$e;$e.highlight=o9;$e.register=Ta;$e.alias=r9;$e.registered=a9;$e.listLanguages=l9;Ta(q7);Ta(J7);Ta(e9);Ta(t9);$e.util.encode=c9;$e.Token.stringify=s9;function Ta(e){if(typeof e!="function"||!e.displayName)throw new Error("Expected `function` for `grammar`, got `"+e+"`");$e.languages[e.displayName]===void 0&&e($e)}function r9(e,t){var n=$e.languages,o=e,a,l,s,i;t&&(o={},o[e]=t);for(a in o)for(l=o[a],l=typeof l=="string"?[l]:l,s=l.length,i=-1;++i<s;)n[l[i]]=n[a]}function o9(e,t){var n=fh.highlight,o;if(typeof e!="string")throw new Error("Expected `string` for `value`, got `"+e+"`");if($e.util.type(t)==="Object")o=t,t=null;else{if(typeof t!="string")throw new Error("Expected `string` for `name`, got `"+t+"`");if($u.call($e.languages,t))o=$e.languages[t];else throw new Error("Unknown language: `"+t+"` is not registered")}return n.call(this,e,o,t)}function a9(e){if(typeof e!="string")throw new Error("Expected `string` for `language`, got `"+e+"`");return $u.call($e.languages,e)}function l9(){var e=$e.languages,t=[],n;for(n in e)$u.call(e,n)&&typeof e[n]=="object"&&t.push(n);return t}function s9(e,t,n){var o;return typeof e=="string"?{type:"text",value:e}:$e.util.type(e)==="Array"?i9(e,t):(o={type:e.type,content:$e.Token.stringify(e.content,t,n),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:n},e.alias&&(o.classes=o.classes.concat(e.alias)),$e.hooks.run("wrap",o),Q7(o.tag+"."+o.classes.join("."),u9(o.attributes),o.content))}function i9(e,t){for(var n=[],o=e.length,a=-1,l;++a<o;)l=e[a],l!==""&&l!==null&&l!==void 0&&n.push(l);for(a=-1,o=n.length;++a<o;)l=n[a],n[a]=$e.Token.stringify(l,t,n);return n}function c9(e){return e}function u9(e){var t;for(t in e)e[t]=X7(e[t]);return e}function d9(){var e="Prism"in Ao,t=e?Ao.Prism:void 0;return n;function n(){e?Ao.Prism=t:delete Ao.Prism,e=void 0,t=void 0}}const Au=Zn(n9);var Bu=Gx(Au,{});Bu.registerLanguage=function(e,t){return Au.register(t)};Bu.alias=function(e,t){return Au.alias(e,t)};const br=Bu;var p9=Iu;Iu.displayName="bash";Iu.aliases=["shell"];function Iu(e){(function(t){var n="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",o={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},a={bash:o,environment:{pattern:RegExp("\\$"+n),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+n),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};t.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+n),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:a},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:o}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:a},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:a.entity}}],environment:{pattern:RegExp("\\$?"+n),alias:"constant"},variable:a.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},o.inside=t.languages.bash;for(var l=["comment","function-name","for-or-select","assign-left","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],s=a.variable[1].inside,i=0;i<l.length;i++)s[l[i]]=t.languages.bash[l[i]];t.languages.shell=t.languages.bash})(e)}const f9=Zn(p9);var h9=zu;zu.displayName="json";zu.aliases=["webmanifest"];function zu(e){e.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},e.languages.webmanifest=e.languages.json}const m9=Zn(h9);var x9=Fu;Fu.displayName="jsx";Fu.aliases=[];function Fu(e){(function(t){var n=t.util.clone(t.languages.javascript),o=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,a=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,l=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function s(u,d){return u=u.replace(/<S>/g,function(){return o}).replace(/<BRACES>/g,function(){return a}).replace(/<SPREAD>/g,function(){return l}),RegExp(u,d)}l=s(l).source,t.languages.jsx=t.languages.extend("markup",n),t.languages.jsx.tag.pattern=s(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),t.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,t.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,t.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,t.languages.jsx.tag.inside.comment=n.comment,t.languages.insertBefore("inside","attr-name",{spread:{pattern:s(/<SPREAD>/.source),inside:t.languages.jsx}},t.languages.jsx.tag),t.languages.insertBefore("inside","special-attr",{script:{pattern:s(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:t.languages.jsx}}},t.languages.jsx.tag);var i=function(u){return u?typeof u=="string"?u:typeof u.content=="string"?u.content:u.content.map(i).join(""):""},c=function(u){for(var d=[],x=0;x<u.length;x++){var m=u[x],j=!1;if(typeof m!="string"&&(m.type==="tag"&&m.content[0]&&m.content[0].type==="tag"?m.content[0].content[0].content==="</"?d.length>0&&d[d.length-1].tagName===i(m.content[0].content[1])&&d.pop():m.content[m.content.length-1].content==="/>"||d.push({tagName:i(m.content[0].content[1]),openedBraces:0}):d.length>0&&m.type==="punctuation"&&m.content==="{"?d[d.length-1].openedBraces++:d.length>0&&d[d.length-1].openedBraces>0&&m.type==="punctuation"&&m.content==="}"?d[d.length-1].openedBraces--:j=!0),(j||typeof m=="string")&&d.length>0&&d[d.length-1].openedBraces===0){var y=i(m);x<u.length-1&&(typeof u[x+1]=="string"||u[x+1].type==="plain-text")&&(y+=i(u[x+1]),u.splice(x+1,1)),x>0&&(typeof u[x-1]=="string"||u[x-1].type==="plain-text")&&(y=i(u[x-1])+y,u.splice(x-1,1),x--),u[x]=new t.Token("plain-text",y,null,y)}m.content&&typeof m.content!="string"&&c(m.content)}};t.hooks.add("after-tokenize",function(u){u.language!=="jsx"&&u.language!=="tsx"||c(u.tokens)})})(e)}const g9=Zn(x9);var v9=Uu;Uu.displayName="scss";Uu.aliases=[];function Uu(e){e.languages.scss=e.languages.extend("css",{comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0},atrule:{pattern:/@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,inside:{rule:/@[\w-]+/}},url:/(?:[-a-z]+-)?url(?=\()/i,selector:{pattern:/(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,inside:{parent:{pattern:/&/,alias:"important"},placeholder:/%[-\w]+/,variable:/\$[-\w]+|#\{\$[-\w]+\}/}},property:{pattern:/(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,inside:{variable:/\$[-\w]+|#\{\$[-\w]+\}/}}}),e.languages.insertBefore("scss","atrule",{keyword:[/@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i,{pattern:/( )(?:from|through)(?= )/,lookbehind:!0}]}),e.languages.insertBefore("scss","important",{variable:/\$[-\w]+|#\{\$[-\w]+\}/}),e.languages.insertBefore("scss","function",{"module-modifier":{pattern:/\b(?:as|hide|show|with)\b/i,alias:"keyword"},placeholder:{pattern:/%[-\w]+/,alias:"selector"},statement:{pattern:/\B!(?:default|optional)\b/i,alias:"keyword"},boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"},operator:{pattern:/(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,lookbehind:!0}}),e.languages.scss.atrule.inside.rest=e.languages.scss}const y9=Zn(v9);var C9=Hu;Hu.displayName="yaml";Hu.aliases=["yml"];function Hu(e){(function(t){var n=/[*&][^\s[\]{},]+/,o=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,a="(?:"+o.source+"(?:[ 	]+"+n.source+")?|"+n.source+"(?:[ 	]+"+o.source+")?)",l=/(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g,function(){return/[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source}),s=/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;function i(c,u){u=(u||"").replace(/m/g,"")+"m";var d=/([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g,function(){return a}).replace(/<<value>>/g,function(){return c});return RegExp(d,u)}t.languages.yaml={scalar:{pattern:RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g,function(){return a})),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g,function(){return a}).replace(/<<key>>/g,function(){return"(?:"+l+"|"+s+")"})),lookbehind:!0,greedy:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:i(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),lookbehind:!0,alias:"number"},boolean:{pattern:i(/false|true/.source,"i"),lookbehind:!0,alias:"important"},null:{pattern:i(/null|~/.source,"i"),lookbehind:!0,alias:"important"},string:{pattern:i(s),lookbehind:!0,greedy:!0},number:{pattern:i(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source,"i"),lookbehind:!0},tag:o,important:n,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},t.languages.yml=t.languages.yaml})(e)}const j9=Zn(C9);function Ea(e){return typeof e=="string"}function Vu(e){return typeof e=="number"}function mh(e){return Number.isInteger(e)}function La(e){return Array.isArray(e)}function js(e){return typeof e=="function"}function S9(e){return e instanceof RegExp}function Na(e){return typeof e=="object"&&!La(e)&&!xh(e)}function b9(e){return e===void 0}function xh(e){return e===null}function ot(e){return!(b9(e)||xh(e))}function Wu(e){return!ot(e)}function _9(...e){throw new Error(e.join(""))}function qe(){}function w9(){return Intl.DateTimeFormat().resolvedOptions().locale}w9();const k9=(e,t,n=1)=>{const o=t<e?-Math.abs(n):n;return Array(1+Math.floor(Math.abs((t-e)/n))).fill(e).map((a,l)=>a+l*o)};function T9(e){return Wu(e)?[]:Ea(e)?e.length?e.split(/,\s*|\s+/):[]:La(e)?e:[e]}function gh(e,t=!0,n={}){return Na(e)?e:T9(e).reduce((o,a)=>(o[a]=js(t)?t(a):t,o),n)}function E9(e){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()}function L9(e){if(js(e))return e;if(S9(e))return t=>e.test(t);if(Na(e))return t=>!!e[t];if(La(e)||Ea(e)){const t=gh(e);return n=>!!t[n]}_9("Invalid selector() specification: "+e)}const N9=(e,t,n={})=>{let o={},a={delete:!1,...n};const l=L9(t);return Object.keys(e).map(s=>{if(l(s)){let i=e[s];a.delete&&delete e[s],a.key&&(s=a.key(s)),a.value&&(i=a.value(i)),o[s]=i}}),o},H1=(e,t)=>parseInt(e[t]||0),V1=(e,t)=>parseFloat(e[t]||0),W1=(e,t)=>(e[t]||"").toString(),Z1=e=>(t,n)=>H1(t,e)-H1(n,e),ci=e=>(t,n)=>V1(t,e)-V1(n,e),G1=e=>(t,n)=>{let o=W1(t,e).toLowerCase(),a=W1(n,e).toLowerCase();return o>a?1:a>o?-1:0},R9=e=>(t,n)=>e(n,t);function O9(e,t=300){let n;return(...o)=>{clearTimeout(n),n=setTimeout(()=>e.apply(this,o),t)}}function Ss(e){return new Promise(t=>setTimeout(t,e))}br.registerLanguage("jsx",g9);br.registerLanguage("json",m9);br.registerLanguage("css",Z7);br.registerLanguage("scss",y9);br.registerLanguage("bash",f9);br.registerLanguage("yaml",j9);const Rn=({code:e,language:t="jsx",caption:n,expand:o=!1,fixed:a=o,className:l="",highlightLines:s,lineProps:i,undent:c=!1})=>{const[u,d]=_.useState(!1),[x,m]=_.useState(o),j=()=>{navigator.clipboard.writeText(e),d(!0),Ss(2e3).then(()=>d(!1))};return r.jsxs("div",{className:`codeblock ${l} ${x?"expanded":""} ${a?"fixed-open":"expandable"}`,children:[!!n&&r.jsx("h4",{className:"caption",children:n}),r.jsxs("div",{className:"controls",children:[r.jsx("div",{className:"expand",onClick:()=>m(!x),children:x?"Compress":"Expand"}),r.jsx("div",{className:`clipboard ${u?"copied":""}`,onClick:j,children:u?"Copied":"Copy"})]}),r.jsx(br,{language:t,showLineNumbers:!0,useInlineStyles:!1,wrapLines:!0,customStyle:{},children:D9(e,{undent:c})})]})},D9=(e,t={})=>{if(e=e.replace(/^[^]*?{?\/\*\s*START\s*\*\/}?\n/,"").replace(/[\n\s]*{?\/\*\s*END\s*\*\/}?[^]*/,"").replaceAll(/\/\/\s*PRETEND:\s/g,"").replaceAll(/{?\/\*\s*PRETEND:\s(.*?)\s+\*\/}?/g,"$1").replace(/\n+$/,""),t.undent){const n=new RegExp("^"+" ".repeat(t.undent),"gm");e=e.replaceAll(n,"")}return e},ye=({Component:e,code:t,html:n,children:o,className:a="",language:l,...s})=>r.jsxs("div",{className:`example grid-2 gap-8 stack-desktop ${a}`,children:[r.jsx("div",{className:"source",children:r.jsx(Rn,{code:t||n,language:n?"html":l,...s})}),!!o&&r.jsx("div",{className:"interim",children:o}),e?r.jsxs("div",{className:"output",children:[r.jsx("h4",{className:"caption",children:"Output"}),r.jsx(e,{})]}):null,n?r.jsxs("div",{className:"output",children:[r.jsx("h4",{className:"caption",children:"Output"}),r.jsx("div",{dangerouslySetInnerHTML:{__html:n}})]}):null]}),cl=_.createContext();function K1(e){return typeof e=="function"}function Y1(e){return typeof e=="object"&&!vh(e)&&!M9(e)}function vh(e){return Array.isArray(e)}function M9(e){return e===null}function P9({context:e={},Implementation:t,spec:n=!1,props:o={},ref:a}){if(!n)return r.jsx(t,{...o,ref:a});let l={},s=K1(n)?n(e):e[n];if(vh(s)&&(t=s[0],s=s[1]),K1(s)){const i=s(o,a,e);if(Ge.isValidElement(i))return i;Y1(i)&&Object.assign(l,o,i)}else Y1(s)?Object.assign(l,s,o):Object.assign(l,o);return r.jsx(t,{...l,ref:a})}const $9=e=>({Context:cl,Provider:({children:t,...n})=>r.jsx(cl.Provider,{value:{...e,...n},children:t}),Consumer:t=>n=>r.jsx(cl.Consumer,{children:o=>r.jsx(t,{...o,...n,context:o})}),Component:(t,n=t.displayName||t.name)=>Ge.forwardRef((o,a)=>r.jsx(cl.Consumer,{children:l=>r.jsx(P9,{Implementation:t,context:l,spec:n,props:o,ref:a})}))}),A9=$9(),ae=A9.Component,B9="svg",xc="-",Q1="none",yh="fill",I9="path",z9="line",F9="rect",U9="array",H9="circle",V9="ellipse",W9="polygon",Z9="polyline",Zu=/-(?!\d)/,X1="currentColor",Gu=512,Ku=512,Ra={defaults:{width:512,height:512,type:"line"},icons:{alpha:"M102,448L256,64L410,448 M152,333L360,333",angle:"M448,336L256,144L64,336",angles:"M448,448L256,256L64,448M448,256L256,64L64,256",arrow:"M96,224L256,64L416,224M256,86L256,448",arrows:"M144,144L256,32L368,144M368,368L256,480L144,368M256,56L256,456",asterisk:"M76,152L436,360M76,360L436,152M256,48L256,464",at:"M256,160C309,160 352,203 352,256C352,309 309,352 256,352C203,352 160,309 160,256C160,203 203,160 256,160M256,480C132,480 32,380 32,256C32,132 132,32 256,32C380,32 480,132 480,256L480,288C480,323 451,352 416,352C381,352 352,323 352,288L352,176",ban:"M100,412L412,100 M256,32C380,32 480,132 480,255C480,379 380,480 256,480C132,480 32,379 32,255C32,132 132,32 256,32Z",bars:"M64,96L448,96M64,256L448,256M64,416L448,416",caret:"M448,336L256,144L64,336L448,336Z",check:"M48,248L192,392L464,120",circle:"circle:256 256 224",clipboard:"M192,80L80,80L80,496L432,496L432,80L320,80L320,112L192,112L192,80ZM256,16C282,16 304,38 304,64C304,90 282,112 256,112C230,112 208,90 208,64C208,38 230,16 256,16Z",cloud:"M480,293C480,234 437,177 362,196C346,161 319,116 240,120C180,124 139,165 125,224C121,223 116,223 111,223C68,223 32,260 32,307C32,354 68,392 111,392C120,392 366,392 380,392C462,392 480,335 480,293Z",cog:"M306,21L206,21L187,91L147,114L78,95L28,182L78,233L78,279L28,330L78,417L147,398L187,421L206,491L306,491L325,421L365,398L434,417L484,330L434,279L434,233L484,182L434,95L365,114L325,91L306,21Z M256,176C300,176 336,212 336,256C336,300 300,336 256,336C212,336 176,300 176,256C176,212 212,176 256,176Z",cross:"M112,112L400,400M400,112L112,400",drag:"M64,96L256,32L448,96M64,416L256,480L448,416M128,256L384,256",envelope:"M32,104L480,104L480,408L32,408L32,104M48,120L256,288L464,120M48,392L200,252M464,392L312,252",equals:"M96,320L416,320 M96,192L416,192",exclamation:"M256,96L256,310M254,416L258,416",filter:"M64,32L448,32L448,128L305,271L304,432L208,496L208,272L64,128L64,32Z",heart:"M256,128C298,48 382,48 424,88C466,128 466,208 424,288C394,348 319,408 256,448C193,408 118,348 88,288C46,208 46,128 88,88C130,48 214,48 256,128Z",hourglass:"M80,32L432,32M80,480L432,480M128,32C128,256 384,256 384,480M384,32C384,256 128,256 128,480",info:"M212,202L256,202L256,416M182,416L330,416M252,96L256,96",list:"M176,96L448,96M176,256L448,256M176,416L448,416M64,96L80,96M64,256L80,256M64,416L80,416",minus:"M96,256L416,256",number:"M256,448L256,64L176,128 M160,448L336,449",pen:"M482,143C491,134 491,120 482,112L401,30C392,21 378,21 369,30L72,326L22,489L186,439L482,143M305,93L418,206",plus:"M256,96L256,416M96,256L416,256",point:"M464,192L256,16L48,192L128,192L128,480L384,480L384,192L464,192Z",prime:"M256,128L256,256",question:"M160,160C160,126 197,80 255,80C314,80 336,128 336,160C336,236 255,235 255,320 M255,416L256,416",rotate:"M392,120C356,84 307,64 256,64C150,64 64,150 64,256C64,362 150,448 256,448C303,448 349,430 384,399C349,430 303,448 256,448C150,448 64,362 64,256C64,150 150,64 256,64C307,64 356,84 392,120Z M352,208L480,208L480,80",search:"M204,32C300,32 384,111 384,208C384,305 305,384 208,384C111,384 32,305 32,208C32,111 107,32 204,32M480,480L332,332",square:"rect:32 32 448 448",square10:"rect:32 32 448 448 45 45",square20:"rect:32 32 448 448 90 90",square30:"rect:32 32 448 448 135 135",square40:"rect:32 32 448 448 180 180",star:"M256,32L324,183L489,202L367,313L400,476L256,394L112,476L145,313L23,202L188,183L256,32Z",thumb:"M149,174L32,174L32,448L149,448L149,184 M149,217C277,160 246,36 282,38C372,44 324,192 324,192L440,192C462,192 480,210 480,232C480,254 462,272 440,272L368,272M424,272C446,272 464,290 464,312C464,334 446,352 424,352L352,352M392,352C414,352 432,370 432,392C432,414 414,432 392,432L256,432C220,432 149,409 149,409",time:"M256,128L256,256L336,336",trash:"M32,80L480,80 M80,80C80,80 100,344 109,452C111,477 131,496 156,496C211,496 301,496 356,496C381,496 401,477 403,452C412,344 432,80 432,80 M160,80L208,16L304,16L352,74",triangle:"M256,64L32,448L480,448L256,64Z",user:"M256,32C302,32 340,70 340,116C340,162 302,208 256,208C210,208 172,162 172,116C172,70 210,32 256,32ZM448,412C448,361 410,320 363,320L148,320C102,320 64,361 64,412L64,480L448,480L448,412Z",vertical:"line:256,48 256,464",wrench:"M486,108C493,124 496,142 496,160C496,239 431,304 352,304C330,304 309,299 290,290L98,482C79,501 49,501 30,482C11,463 11,433 30,414L222,222C213,203 208,182 208,160C208,81 273,16 352,16C370,16 388,19 404,26L326,103L409,186L486,108Z"}};function G9(e,t,n=Ra){n.icons[e]=t}function K9(e,t=Ra){Object.entries(e).forEach(([n,o])=>G9(n,o,t))}const ul=_.createContext();function q1(e){return typeof e=="function"}function J1(e){return typeof e=="object"&&!Ch(e)&&!Y9(e)}function Ch(e){return Array.isArray(e)}function Y9(e){return e===null}function Q9({context:e={},Implementation:t,spec:n=!1,props:o={},ref:a}){if(!n)return r.jsx(t,{...o,ref:a});let l={},s=q1(n)?n(e):e[n];if(Ch(s)&&(t=s[0],s=s[1]),q1(s)){const i=s(o,a,e);if(Ge.isValidElement(i))return i;J1(i)&&Object.assign(l,o,i)}else J1(s)?Object.assign(l,s,o):Object.assign(l,o);return r.jsx(t,{...l,ref:a})}const X9=e=>({Context:ul,Provider:({children:t,...n})=>r.jsx(ul.Provider,{value:{...e,...n},children:t}),Consumer:t=>n=>r.jsx(ul.Consumer,{children:o=>r.jsx(t,{...o,...n,context:o})}),Component:(t,n=t.displayName||t.name)=>Ge.forwardRef((o,a)=>r.jsx(ul.Consumer,{children:l=>r.jsx(Q9,{Implementation:t,context:l,spec:n,props:o,ref:a})}))}),q9=X9(),J9=q9.Component;function mn(e){return typeof e=="string"}function Oa(e){return Array.isArray(e)}function Yu(e){return typeof e=="object"&&!Oa(e)&&!Sh(e)}function jh(e){return e===void 0}function Sh(e){return e===null}function bs(e){return!(jh(e)||Sh(e))}function bh(e){return!bs(e)}function pn(...e){throw new Error(e.join(""))}function ev(){return Intl.DateTimeFormat().resolvedOptions().locale}ev();function ep(e){return bh(e)?[]:mn(e)?e.length?e.split(/,\s*|\s+/):[]:Oa(e)?e:[e]}function Da(e){return e.split(/\s*[;&]\s*/).filter(t=>t.length>0).reduce((t,n)=>{const[o,a]=n.split(/\s*[:=]\s*/);return t[o]=jh(a)?!0:a,t},{})}const _h=e=>e.filter(bs).join(" "),wh={x:0,y:0,size:16,flipX:!1,flipY:!1,rotate:0},Vn={flip:(e,t)=>{mn(t)&&t.match(/^y$/i)?e.flipY=!e.flipY:e.flipX=!e.flipX},flipx:e=>e.flipX=!e.flipX,flipy:e=>e.flipY=!e.flipY,grow:(e,t)=>e.size+=parseInt(t),shrink:(e,t)=>e.size-=parseInt(t),left:(e,t)=>t===!0?e.rotate-=90:e.x-=parseInt(t),right:(e,t)=>t===!0?e.rotate+=90:e.x+=parseInt(t),up:(e,t)=>t===!0?e.rotate+=0:e.y-=parseInt(t),down:(e,t)=>t===!0?e.rotate+=180:e.y+=parseInt(t),rotate:(e,t)=>e.rotate+=parseInt(t)};Vn.flop=Vn.flipy;Vn["flip-x"]=Vn.flipx;Vn["flip-y"]=Vn.flipy;function kh(e,t={...wh}){const n=mn(e)?Da(e):e||{};return Object.entries(n).reduce((o,[a,l])=>{const s=a.toLowerCase();return(Vn[s]||pn(`Invalid transform: ${s}`))(o,l),o},t)}const tv=4.42,en=e=>`${tv*e}%`,nv={},gc={outline:{fill:"none",stroke:"currentColor",strokeWidth:en(2),strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"1.5"},solid:{fill:"currentColor",stroke:"none"},round:{strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"1.5"},square:{strokeLinecap:"square",strokeLinejoin:"miter",strokeMiterlimit:"1.5"},butt:{strokeLinecap:"butt"},bevel:{strokeLinejoin:"bevel"},thinnest:{strokeWidth:en(.5)},thinner:{strokeWidth:en(1)},thin:{strokeWidth:en(1.5)},medium:{strokeWidth:en(2)},thick:{strokeWidth:en(2.5)},thicker:{strokeWidth:en(3)},thickest:{strokeWidth:en(3.5)}};gc.line=gc.outline;const rv={...Object.entries(gc).reduce((e,[t,n])=>(e[t]=o=>Object.assign(o,n),e),{}),fill:(e,t)=>e.fill=t===!0?X1:t,stroke:(e,t)=>e.stroke=t===!0?X1:t,nofill:e=>e.fill=Q1,nostroke:e=>e.stroke=Q1,strokewidth:(e,t)=>e.strokeWidth=t.match(/^[\d.]+$/)?en(parseFloat(t)):t,opacity:(e,t)=>e.opacity=t,fillopacity:(e,t)=>e.fillOpacity=t,strokeopacity:(e,t)=>e.strokeOpacity=t,dasharray:(e,t)=>e.strokeDasharray=t,drawlength:(e,t)=>e["--draw-length"]=t,drawtime:(e,t)=>e["--draw-time"]=t,filltime:(e,t)=>e["--fill-time"]=t};function Jl(e,t){return(mn(t)?t.split(Zu):t).forEach(n=>{const[o,a=!0]=n.split(/[:=]/),l=o.toLowerCase(),s=rv[l];if(s){s(e.style||(e.style={...nv}),a);return}(Vn[l]||pn(`Invalid style or transform: ${l}`))(e.transform||(e.transform={...wh}),a)})}const ov={width:Gu,height:Ku,type:yh},Th={svg:e=>({element:B9,svg:e}),array:e=>({element:U9,items:e}),path:e=>({element:I9,d:e}),polygon:e=>({element:W9,points:e}),polyline:e=>({element:Z9,points:e}),circle:e=>({element:H9,...dl(e,"cx cy r")}),ellipse:e=>({element:V9,...dl(e,"cx cy rx ry")}),line:e=>({element:z9,...dl(e,"x1 y1 x2 y2")}),rect:e=>({element:F9,...dl(e,"x y width height rx ry")})};function dl(e,t){const n=Oa(t)?[...t]:ep(t);return ep(e).reduce((o,a)=>{if(n.length){const l=n.shift();o[l]=a}return o},{})}const Eh=e=>{const[t,n=""]=e.split("?"),[o,...a]=t.split(/\.(?!\d)/),l=o.split(Zu).filter(i=>i.length),s=Da(n);return{dashes:l,classes:a,style:s}},av=(e,t)=>{const n=Eh(e),{dashes:o}=n;for(let a=o.length;a>0;a--){const l=o.slice(0,a).join(xc);if(t[l]){n.name=o.splice(0,a).join(xc);break}}return n},lv=(e,t,n={})=>{const{icons:o}=t,a=av(e,o),{name:l,classes:s,style:i,dashes:c}=a;bh(l)&&pn(`No icon found matching any leading subset of ${a.dashes.join(xc)}`);const u=t.icons[l]||pn(`Icon not found in data: ${l}`),d=Lh(u,t,{...n,name:l});if((s.length||n.className)&&(d.className=_h([...s||[],n.className])),d.transform&&(d.transform=kh(d.transform)),d.style&&(d.style=mn(d.style)?Da(d.style):{...d.style}),d.type){const x=d.style&&{...d.style};Jl(d,d.type),delete d.type,x&&Object.assign(d.style,x)}return c.length&&Jl(d,c),Object.keys(i).length&&(d.style=Object.assign(d.style||{},i)),d};function sv(e){const t=e.match(/^(.*?):(.*)/);return t?{path:t[2],type:t[1]}:{path:e}}const Lh=(e,t,n={})=>{const{defaults:o={}}=t,a={...ov,...o,...n};if(mn(e))return iv(a,e);if(Yu(e))return cv(a,e);if(Oa(e))return uv(a,e,t);pn(`Cannot parse icon data: ${e}`)};function iv(e,t){if(t.match(/^\w*</))return e.body={element:"svg",svg:t},e;const n=t.match(/^(.*?):(.*)/);if(n){const[,o,a]=n,{dashes:l,classes:s}=Eh(o),i=l.shift(),c=Th[i]||pn(`Invalid icon data element: ${i}`);return e.body=c(a),s.length&&(e.body.className=_h(s)),l.length&&Jl(e.body,l),e}return e.body={element:"path",d:t},e}function cv(e,t){const n={...t};if(n.element)return e.body=n,e;for(let o of Object.entries(Th)){const[a,l]=o,s=n[a];if(bs(s))return e.body=l(s),delete n[a],Object.assign(e,n),e}pn(`Cannot parse icon data: ${JSON.stringify(t)}`)}function uv(e,t,n){return e.body={element:"array",items:t.map(o=>Lh(o,n).body)},e}const dv=({size:e,...t})=>{t.width??(t.width=e||Gu),t.height??(t.height=e||Ku),t.path&&Object.assign(t,sv(t.path));let n;return t.style&&(mn(t.style)?(n=Da(t.style),t.style={}):n={...t.style}),Jl(t,t.type?t.type.split(Zu).filter(o=>o.length):yh),delete t.type,t.style&&n&&Object.assign(t.style,n),t.transform&&(t.transform=kh(t.transform)),t},Qu=e=>Yu(e)?Object.entries(e).reduce((t,[n,o])=>(t[n.replace(/(?!-)-./g,a=>a[1].toUpperCase())]=o,t),{}):e,pv=e=>bs(e)?Qu(Da(e)):null,xn=({style:e,class:t,...n})=>({style:mn(e)?pv(e):Qu(e),className:t,...n});function fv({width:e,height:t,transform:n,children:o}){const a=e/2,l=t/2,s=n.x*e/16,i=n.y*t/16,c=n.size/16*(n.flipX?-1:1),u=n.size/16*(n.flipY?-1:1),d=n.rotate;return r.jsx("g",{transform:`translate(${a} ${l})`,children:r.jsx("g",{transform:`translate(${s}, ${i}) scale(${c}, ${u}) rotate(${d} 0 0)`,children:r.jsx("g",{transform:`translate(-${a} -${l})`,children:o})})})}const hv=e=>r.jsx("circle",{...xn(e)}),mv=e=>r.jsx("ellipse",{...xn(e)}),xv=e=>r.jsx("line",{...xn(e)}),Nh=e=>r.jsx("path",{...xn(e)}),gv=e=>r.jsx("polygon",{...xn(e)}),vv=e=>r.jsx("polyline",{...xn(e)}),yv=e=>r.jsx("rect",{...xn(e)}),Cv=({svg:e,...t})=>r.jsx("g",{dangerouslySetInnerHTML:{__html:e},...xn(t)}),jv=({items:e,...t})=>r.jsx("g",{...xn(t),children:e.map((n,o)=>r.jsx(es,{body:n},o))}),Sv={array:jv,circle:hv,ellipse:mv,line:xv,path:Nh,polygon:gv,polyline:vv,rect:yv,svg:Cv},es=({path:e,body:t,...n})=>{if(e)return r.jsx(Nh,{d:e,...n});if(mn(t))return r.jsx("g",{dangerouslySetInnerHTML:{__html:t}});if(Yu(t)){const{element:o,...a}=t,l=Sv[o]||pn(`Invalid element type: ${o} => `,JSON.stringify(t));return r.jsx(l,{...a})}if(Oa(t))return t.map((o,a)=>r.jsx(es,{body:o},a));pn(`Don't know how to handle body: ${t}`)},tp=({onClick:e,minx:t=0,miny:n=0,width:o=Gu,height:a=Ku,style:l,transform:s,className:i="",debug:c,...u})=>r.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",role:"img","aria-hidden":"true",focusable:"false",viewBox:`${t} ${n} ${o} ${a}`,className:`${i} icon`,style:Qu(l),onClick:e,children:[!!c&&console.log("style: ",l),s?r.jsx(fv,{width:o,height:a,transform:s,children:r.jsx(es,{...u})}):r.jsx(es,{...u})]}),bv=({name:e,library:t=Ra,...n})=>e?r.jsx(tp,{...n,...lv(e,t,n)}):r.jsx(tp,{...dv(n)}),Tl=J9(bv,"Icon"),Rh=(e,...t)=>js(e)?e(...t):e,_v=e=>e.filter(ot).join(" "),wv=e=>Object.entries(e).filter(([,t])=>t).map(([t])=>t),Te=(...e)=>_v(e.flatMap(t=>Na(t)?wv(t):t)),kv=e=>{if(!e)return null;const[t,n,o,a,l]=e.split("-");return Te(t,Ev(n),Lv(o),Nv(a),Rv(l))},Tv=({className:e,size:t,color:n,...o})=>({...o,className:Te(e,t,kv(n))}),Xu=e=>Oh(e,"border",t=>`border bdw-${t}`),qu=e=>Oh(e,"shadow-1",t=>`shadow-${t}`),Ju=e=>Ma(e,t=>`bdr-${t}`),Ev=e=>Ma(e,t=>`fgc-${t}`),Lv=e=>Ma(e,t=>`bgc-${t}`),Nv=e=>Ma(e,t=>`fgd-${t}`),Rv=e=>Ma(e,t=>`bgd-${t}`),Ma=(e,t)=>mh(parseInt(e))?Rh(t,e):null,Oh=(e,t,n)=>e===!0?t:parseInt(e)?Rh(n,e):null,Y=e=>r.jsx(Tl,{...Tv(e)});function np(e,t,n={}){return ot(t)&&(n[e]=mh(t)?`${t}deg`:t),Object.keys(n).length?n:null}const Ov=({icon:e,iconClass:t,iconLeft:n,iconLeftClass:o="on-left",iconLeftRotate:a,iconRight:l,iconRightClass:s="on-right",iconRightRotate:i,text:c,children:u})=>r.jsxs(r.Fragment,{children:[!!e&&r.jsx(Tl,{name:e,className:t,fixedWidth:!0}),!!n&&r.jsx(Tl,{name:n,className:o,style:np("--icon-rotate",a),fixedWidth:!0}),c||u,!!l&&r.jsx(Tl,{name:l,className:s,style:np("--icon-rotate",i),fixedWidth:!0})]}),_s=ae(Ov,"WithIcons");K9({github:"path-fill-nostroke:M256,0C115,0 0,115 0,256C0,369 73,465 175,499C188,501 193,493 193,487C193,481 192,460 192,439C128,451 111,423 106,409C103,402 91,379 80,373C71,368 58,356 80,356C100,356 114,374 119,382C142,421 179,410 194,403C196,387 203,375 210,369C153,363 93,340 93,243C93,215 103,192 120,174C117,167 108,141 122,106C122,106 144,99 193,132C213,126 235,124 257,124C278,124 300,126 321,132C370,99 391,106 391,106C405,141 396,167 394,174C410,192 420,214 420,243C420,341 360,363 303,369C312,377 320,392 320,416C320,451 320,478 320,487C320,493 325,501 338,499C439,465 512,369 512,256C512,115 397,0 256,0Z"});const Dv=({dismissable:e,dismiss:t,revealable:n,isRevealed:o,openIcon:a="angle-down",closedIcon:l="angle-left",dismissIcon:s="cross"})=>r.jsxs("div",{className:"on-right",children:[!!e&&r.jsx(Y,{name:s,fixedWidth:!0,className:"dismiss",onClick:()=>t(!0)}),!!n&&r.jsx(Y,{name:o?a:l,fixedWidth:!0,className:"reveal"})]}),Dh=ae(Dv,"AlertControls"),Mv=({headline:e,headIcon:t,toggle:n,revealable:o=!1,controlProps:a,Controls:l=Dh})=>r.jsxs("div",{className:"headline flex space",onClick:o?n:null,children:[r.jsxs("div",{children:[!!t&&r.jsx(Y,{name:t,fixedWidth:!0,className:"on-left"}),e]}),r.jsx(l,{...a})]}),Pv=ae(Mv,"AlertHeadline"),$v=({title:e,text:t,children:n})=>r.jsxs(r.Fragment,{children:[e&&r.jsx("h3",{children:e}),t?r.jsx("p",{children:t}):n]}),Mh=ae($v,"AlertContent"),Av=({icon:e,Content:t=Mh,...n})=>r.jsxs("div",{className:"side-icon",children:[r.jsx(Y,{name:e}),r.jsx("div",{className:"wide",children:r.jsx(t,{...n})})]}),Bv=ae(Av,"AlertIcon"),ws=e=>Ea(e)||Vu(e)||!e.separator&&!e.heading&&!e.disabled;function Iv(e,t=ws){const n=e.findIndex(t);return n<0?null:n}function zv(e,t=ws){for(let n=e.length-1;n>=0;n--)if(t(e[n]))return n;return null}function Fv(e,t,n=ws){for(let o=1;o<e.length;o++){const a=(t+o)%e.length;if(n(e[a]))return a}return null}function Uv(e,t,n=ws){for(let o=1;o<e.length;o++){const a=(t+e.length-o)%e.length;if(n(e[a]))return a}return null}const Ph="",$h="ArrowDown",Ah="ArrowUp",Bh="Enter",Hv=" ",Ih="Escape",ts=e=>{const t=`HINT: define ${e}() to render this value`;return n=>Ea(n)||Vu(n)?n:Na(n)?n.text??n.label??n.name??t:t},Vv=e=>Ea(e)||Vu(e)?e:r.jsx(_s,{...e}),zh=(e,t)=>{if(!e||!t)return;const n=t.offsetTop,o=n+t.offsetHeight,a=e.scrollTop,l=a+e.offsetHeight;n<a?e.scrollTo({top:n}):o>l&&e.scrollTo({top:a+(o-l)})},gn=({title:e,headline:t,headIcon:n,type:o,size:a,color:l,stripe:s,border:i,radius:c,shadow:u,className:d,text:x,children:m,onDismiss:j,icon:y,dismissable:S=!1,revealable:N=!1,revealed:g=!1,openIcon:p,closedIcon:h,dismissIcon:f,Headline:v=Pv,Controls:C=Dh,Content:b=Mh,Icon:T=Bv})=>{const[E,P]=_.useState(N?g:!0),[U,X]=_.useState(!1),se=Te("alert",o,a,l,d,{revealable:N,dismissable:S,stripe:s},E?"revealed":null,qu(u),Xu(i),Ju(c)),Ce=()=>P(A=>!A),ue={dismissable:S,revealable:N,isRevealed:E,dismiss:()=>{X(!0),j&&j()},openIcon:p,closedIcon:h,dismissIcon:f},ge={title:e,text:x,children:m},R={...ge,icon:y,Content:b},$={headline:t,headIcon:n,toggle:Ce,revealable:N,controlProps:ue,Controls:C};return U?null:r.jsxs("div",{className:se,children:[!!t&&r.jsx(v,{...$}),E&&(y?r.jsx(T,{...R}):r.jsx(b,{...ge}))]})},Bo=ae(e=>r.jsx(gn,{...e,type:"info"}),"Info"),Io=ae(e=>r.jsx(gn,{...e,type:"success"}),"Success"),zo=ae(e=>r.jsx(gn,{...e,type:"warning"}),"Warning"),Fo=ae(e=>r.jsx(gn,{...e,type:"error"}),"Error");gn.Info=Bo;gn.Success=Io;gn.Warning=zo;gn.Error=Fo;const W=ae(gn,"Alert"),Wv=({type:e="button",size:t,color:n,className:o,disabled:a,bright:l,dark:s,outline:i,bare:c,shaded:u,shadow:d,border:x,radius:m,label:j,tooltip:y,tabIndex:S=0,icon:N,iconClass:g,iconLeft:p,iconLeftClass:h,iconRight:f,iconRightClass:v,text:C,children:b,Content:T=_s,...E})=>{const P=Te(t,n,o,{bright:l,dark:s,outline:i,bare:c,shaded:u,icon:N},qu(d),Xu(x),Ju(m)),U={icon:N,iconClass:g,iconLeft:p,iconLeftClass:h,iconRight:f,iconRightClass:v,text:C,children:b};return r.jsx("button",{className:P,"aria-label":j,tabIndex:S,type:e,disabled:a,"aria-disabled":a,"data-tooltip":y,...E,children:r.jsx(T,{...U})})},D=ae(Wv,"Button"),Zv=({buttons:e,children:t,className:n="buttons",buttonClass:o,Button:a=D,...l})=>r.jsx("div",{className:n,children:e?e.map((s,i)=>r.jsx(a,{className:o,...l,...s},i)):t}),_r=ae(Zv,"Buttons"),Gv=({className:e,disabled:t,children:n,ref:o})=>r.jsx("label",{className:Te(e,{disabled:t}),ref:o,children:n}),Kv=ae(Gv,"CheckboxLabel"),Yv=({disabled:e=!1,tabIndex:t=0,onChange:n=qe,ref:o,...a})=>r.jsx("input",{type:"checkbox",ref:o,"aria-disabled":e,tabIndex:e?-1:t,onChange:l=>n(l.target.checked),...a}),Qv=ae(Yv,"CheckboxInput"),Xv=({text:e,className:t="checkbox",ref:n,inputRef:o,checked:a,checkedText:l=e,uncheckedText:s=e,inputClass:i,Label:c=Kv,Input:u=Qv,...d})=>r.jsxs(c,{className:t,ref:n,checked:a,...d,children:[r.jsx(u,{className:i,ref:o,checked:a,...d}),a?l:s]}),vn=ae(Xv,"Checkbox"),qv=({checked:e=!1}={})=>{const[t,n]=_.useState(e);return{isChecked:t,setChecked:n,check:()=>n(!0),uncheck:()=>n(!1)}},Jv=({checked:e=!1,onChange:t,...n})=>{const{isChecked:o,setChecked:a}=qv({checked:e}),l=s=>{a(s),t&&t(s)};return r.jsx(vn,{checked:o,onChange:l,...n})},Xn=({visible:e=!1}={})=>{const[t,n]=_.useState(e);return{isVisible:t,setVisible:n,show:()=>n(!0),hide:()=>n(!1)}},ey=({initiallyRevealed:e=!1,open:t=e,confirmIcon:n="check",confirmText:o="Confirm",confirmColor:a="red",confirmClass:l,cancelIcon:s="cross",cancelText:i="Cancel",cancelColor:c="grey",cancelClass:u,confirm:d={iconRight:n,text:o,color:a,className:l},cancel:x={iconLeft:s,text:i,color:c,className:u},buttonsClass:m,className:j=m,buttonClass:y,onClick:S=()=>window.alert("No confirm action defined"),...N})=>{const{isVisible:g,hide:p,show:h}=Xn({visible:t}),v={iconRight:n,text:o,color:a,className:l,...d,onClick:b=>{b.preventDefault(),p(),S()}},C={iconLeft:s,text:i,color:c,className:u,outline:!0,...x,onClick:p};return r.jsx(_r,{className:j,buttonClass:y,buttons:g?[C,v]:[{...N,onClick:h}]})},Xt=ae(ey,"Confirm");var ty=Object.defineProperty,ny=(e,t,n)=>t in e?ty(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ui=(e,t,n)=>(ny(e,typeof t!="symbol"?t+"":t,n),n);const wr=(e,t={})=>{const n=Ge.createContext(t);return{Context:n,Provider:o=>r.jsx(e,{...o,render:a=>r.jsx(n.Provider,{value:a,children:o.children})}),Consumer:o=>a=>r.jsx(n.Consumer,{children:l=>r.jsx(o,{...l,...a})}),Use:()=>Ge.useContext(n)}};function ry(e={},t={},n={}){return Object.entries(t).reduce((o,[a,l])=>{const s=n[l];return s!==null&&typeof s<"u"&&(o[a]=s),o},{...e})}function oy(e,t=[]){return(typeof t=="string"?t.split(/,\s*|\s+/):t).reduce((n,o)=>{const a=e[o]||ly(`Cannot expose non-existent action method: ${o}`);return n[o]=a.bind(e),n},{})}function ay(e,t){const n=e.debug??t.debug,o=rp(e.debugPrefix??t.debugPrefix,e),a=rp(e.debugColor??t.debugColor,e);return n?o?(l,...s)=>console.log(`%c${o}%c${l}`,`color: ${a}`,"color:black",...s):console.log.bind(console):()=>{}}function rp(e,t){return typeof e=="function"?e(t):e}function ly(...e){throw new Error(e.join(""))}class Xo extends Ge.Component{constructor(t){super(t);const n=this.constructor;this.debug=ay(t,n),this.state=ry(n.initialState,n.initialProps,t),this.actions=oy(this,n.actions)}getContext(){return{...this.props,...this.state,...this.actions}}getRenderProps(){return this.getContext()}render(){return this.props.render(this.getRenderProps())}}ui(Xo,"initialState",{}),ui(Xo,"initialProps",{}),ui(Xo,"actions",[]);const sy=e=>gh(e,t=>{const n=t,o="text",a=E9(n);return{field:n,type:o,label:a}}),iy=e=>Object.keys(e).filter(t=>!e[t].hidden),op={string:G1,text:G1,number:ci,price:ci,pounds:ci,integer:Z1,id:Z1},cy=(e,t,n,o)=>{if(!n)return e;const a=t[n],l=a.sort,s=a.type||"text",i=js(l)?l:(op[s]||op.text)(n);return e.sort(o?R9(i):i)},uy=(e,t=1,n=e.length)=>{const o=e.length,a=Math.ceil(o/n);t=Math.min(t,a);const l=t-1,s=n*l,i=Math.min(s+n,o-1),c=e.slice(s,i+1);return{pageSize:n,pages:a,page:l,pageNo:t,firstIndex:s,lastIndex:i,rows:c}},dy=({render:e,rows:t=[],...n})=>{const o=_.useMemo(()=>sy(n.columns),[n.columns]),[a,l]=_.useState(n.pageNo??1),[s,i]=_.useState(n.pageSize??10),[c,u]=_.useState(n.sortColumn),[d,x]=_.useState(n.sortReverse??!1),[m,j]=_.useState(iy(o)),[y,S]=_.useState(!0),N=()=>S(!0),g=()=>S(!1),p=f=>{c===f?x(v=>!v):(u(f),x(!1))},h=_.useMemo(()=>uy(cy(t,o,c,d),a,s),[t,a,s,c,d]);return e({...n,rows:t,columns:o,page:h,pageNo:a,setPageNo:l,pageSize:s,setPageSize:i,sortColumn:c,setSortColumn:u,sortReverse:d,setSortReverse:x,toggleSortColumn:p,visibleColumns:m,setVisibleColumns:j,controlsVisible:y,showControls:N,hideControls:g})},mt=wr(dy),py=({headerClass:e,showControls:t})=>r.jsx("header",{className:e,children:r.jsxs("div",{className:"flex space middle",children:[r.jsx("div",{children:"pp"}),r.jsx(Y,{name:"cog",className:"hover",onClick:t})]})}),fy=mt.Consumer(py),hy=({row:e,column:t,name:n,field:o,value:a,rowClick:l,onClick:s,cellClass:i,sortColumn:c})=>{const u=c===n,d=Te(i,t.className,{sorting:u});return r.jsx("td",{className:d,children:a})},my=mt.Consumer(hy),xy=({row:e,columns:t,visibleColumns:n,Cell:o=my})=>r.jsx("tr",{children:n.map(a=>{const l=t[a],s=l.field??a,i=e[s];return r.jsx(o,{row:e,name:a,field:s,column:l,value:i},a)})}),gy=mt.Consumer(xy),vy=({page:e,Row:t=gy})=>r.jsx("tbody",{children:e.rows.map((n,o)=>r.jsx(t,{row:n},n.id??o))}),yy=mt.Consumer(vy),Cy=({name:e,column:t,sortColumn:n,sortReverse:o,toggleSortColumn:a,sortUpIcon:l="arrow-up",sortDownIcon:s="arrow-down",headingClass:i="heading"})=>{const c=e===n,u=c&&o;return r.jsx("th",{className:Te(i,{sorting:c}),onClick:()=>a(e),children:r.jsxs("div",{className:"flex space middle",children:[r.jsx("span",{className:"label",children:t.label}),c&&r.jsx(Y,{name:u?l:s})]})})},jy=mt.Consumer(Cy),Sy=({columns:e,headingsClass:t="headings",visibleColumns:n,Heading:o=jy})=>r.jsx("thead",{children:r.jsx("tr",{className:t,children:n.map(a=>r.jsx(o,{name:a,column:e[a]},a))})}),by=mt.Consumer(Sy),_y=({tableClass:e="celled striped table",selectableClass:t="selectable",scrollX:n,rowClick:o,Headings:a=by,Rows:l=yy})=>r.jsxs("table",{className:Te(e,n?"nowrap":"wide",{[t]:o}),children:[r.jsx(a,{}),r.jsx(l,{})]}),wy=mt.Consumer(_y),ky=({scrollX:e,Table:t=wy})=>r.jsx("div",{className:e?"scroll-x":"",children:r.jsx(t,{})}),Ty=mt.Consumer(ky),Ey=({page:e=0,pages:t,buttonClass:n="outline",pageClass:o=n,currentPageClass:a="solid",render:l,...s})=>{const u=t-1,d=t,x=e+1,m=e>0?e-1:null,j=ot(m)?m+1:null,y=e<u?e+1:null,S=ot(y)?y+1:null;return l({page:e,pageNo:x,firstPage:0,firstPageNo:1,lastPage:u,lastPageNo:d,pages:t,prevPage:m,prevPageNo:j,nextPage:y,nextPageNo:S,buttonClass:n,pageClass:o,currentPageClass:a,...s})},qn=wr(Ey),Ly=qn.Use,Ny=({prevPage:e,setPage:t,buttonClass:n,prevClass:o=n,prevIcon:a="arrow-left"})=>r.jsx(D,{className:o,icon:a,onClick:()=>t(e),disabled:Wu(e)}),Ry=qn.Consumer(Ny),Oy=({nextPage:e,setPage:t,buttonClass:n,nextClass:o=n,nextIcon:a="arrow-right"})=>r.jsx(D,{className:o,icon:a,onClick:()=>t(e),disabled:!e}),Dy=qn.Consumer(Oy),My=({pageNo:e,text:t=e,buttonClass:n,className:o=n,onClick:a})=>r.jsx(D,{text:t,className:o,onClick:a}),Py=qn.Consumer(My),$y=r.jsx(r.Fragment,{children:"…"}),Ay=({pageSeparatorClass:e="separator",pageSeparator:t=$y})=>r.jsx("div",{className:e,children:t}),By=qn.Consumer(Ay),Iy=({page:e,pageNo:t,firstPage:n,firstPageNo:o,prevPage:a,prevPageNo:l,nextPage:s,nextPageNo:i,lastPage:c,lastPageNo:u,setPage:d,pagesClass:x="pages",buttonClass:m,pageClass:j=m,currentPageClass:y="brand",showFirstLast:S=!0,Separator:N=By,Page:g=Py})=>r.jsxs("div",{className:x,children:[S&&a>n&&r.jsxs(r.Fragment,{children:[r.jsx(g,{page:n,pageNo:o,className:j,onClick:()=>d(n)}),a>n+1&&r.jsx(N,{})]}),ot(a)&&r.jsx(g,{page:a,pageNo:l,className:j,onClick:()=>d(a)}),r.jsx(g,{page:e,pageNo:t,className:y,current:!0,disabled:!0}),ot(s)&&r.jsx(g,{page:s,pageNo:i,className:j,onClick:()=>d(s)}),S&&s&&s<c&&r.jsxs(r.Fragment,{children:[s<c-1&&r.jsx(N,{}),r.jsx(g,{page:c,pageNo:u,className:j,onClick:()=>d(c)})]})]}),zy=qn.Consumer(Iy),Fy=({className:e="pager",size:t,color:n,Previous:o=Ry,Next:a=Dy,Pages:l=zy})=>r.jsxs("div",{className:Te(e,t,n),children:[r.jsx(o,{}),r.jsx(l,{}),r.jsx(a,{})]}),Uy=qn.Consumer(Fy),Hy=({Content:e=Uy,...t})=>r.jsx(qn.Provider,{...t,children:r.jsx(e,{})}),Et=ae(Hy,"Pager"),Vy=({footerClass:e,pager:t={},page:n,setPageNo:o,sortColumn:a})=>r.jsxs("footer",{className:e,children:[r.jsx(Et,{page:n.page,pages:n.pages,setPage:l=>o(l+1),...t}),"Sorting: ",a]}),Wy=mt.Consumer(Vy),Zy=({sortColumn:e,setSortColumn:t,sortReverse:n,setSortReverse:o,columns:a})=>r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Sort By"}),r.jsx(uo,{wide:!0,value:e,options:Object.entries(a).map(([l,{label:s}])=>({id:l,label:s})),onSelect:l=>t(l.id)})]}),r.jsx("div",{className:"field pad-t-label",children:r.jsx(vn,{text:"Descending",checked:n,onChange:o,disabled:Wu(e)})})]}),Gy=mt.Consumer(Zy),ap={isOpen:!1,cursor:void 0,selected:void 0};class qo extends Xo{componentDidMount(){this.mounted=!0,this.props.onLoad(this)}componentWillUnmount(){this.mounted=!1,this.props.onUnload(this)}onMouseEnter(){this.debug("onMouseEnter()"),this.setState({hasHover:!0},this.props.openOnHover?()=>{this.open(),this.focusTrigger()}:null)}onMouseLeave(){this.debug("onMouseLeave()"),this.setState({hasHover:!1},this.props.openOnHover?()=>this.closeSoon():null)}onFocus(){this.debug("onFocus()"),this.setState({hasFocus:!0},this.props.onFocus)}onBlur(){this.debug("onBlur()"),this.setState({hasFocus:!1},this.props.onBlur),this.closeSoon(!0)}onClick(){this.debug("onClick()"),this.state.isOpen?this.close():this.open()}open(t=this.cursorFirstIndex()){this.debug(`open(${t})`),this.setState({isOpen:!0,cursor:t},this.props.onOpen)}close(){this.debug("close()"),this.setState(ap,this.props.onClose)}closeSoon(t=!1){this.debug("closeSoon()"),Ss(this.props.closeDelay).then(()=>{t||!this.state.hasHover?(console.log("closing"),this.close()):console.log(`NOT closing force:${t} hasHover:${this.state.hasHover}`)})}onKeyDown(t){switch(this.debug(`onKeyDown(${t.key})`),t.key){case $h:this.state.isOpen?this.setCursor(this.cursorNextIndex()):this.open(this.cursorFirstIndex());break;case Ah:this.state.isOpen?this.setCursor(this.cursorPrevIndex()):this.open(this.cursorLastIndex());break;case Bh:case Hv:this.state.isOpen?this.selectCursor():this.open(this.cursorFirstIndex());break;case Ih:this.close();break;default:console.log(`ignored key ${t.key}`);return}t.preventDefault()}menuOptions(){return this.props.options}cursorFirstIndex(){return Iv(this.menuOptions())}cursorLastIndex(){return zv(this.menuOptions())}cursorNextIndex(){return Fv(this.menuOptions(),this.state.cursor)}cursorPrevIndex(){return Uv(this.menuOptions(),this.state.cursor)}setCursor(t){this.debug(`setCursor(${t})`),this.setState({cursor:t})}selectCursor(){this.debug("selectCursor()");const{cursor:t}=this.state,{options:n}=this.props;if(n&&n.length&&ot(t)){const o=n[t];this.debug(`selectCursor() ${t} =>`,o),this.selectOption(o)}else this.debug("Not selecting: cursor out of range")}selectOption(t){this.debug("selectOption()",t),this.setState(this.selectState(t),()=>this.props.onSelect(t)),this.closeSoon(!0)}selectState(t){return{selected:t}}triggerRef(t){this._triggerRef=t}focusTrigger(){this._triggerRef?(this.debug("focussing trigger"),this._triggerRef.focus()):this.debug("no trigger to focus")}menuRef(t){this._menuRef=t}activeRef(t){zh(this._menuRef,t)}}be(qo,"debug",!0),be(qo,"defaultProps",{options:[],openOnHover:!1,closeDelay:300,onLoad:qe,onUnload:qe,onFocus:qe,onBlur:qe,onClick:qe,onOpen:qe,onClose:qe,onSelect:qe}),be(qo,"initialState",{...ap});const Ky={value:Ph,isOpen:!1,cursor:void 0,selected:void 0},Wt=class Wt extends qo{constructor(t){super(t);const n=this.inputValue();this.state={...this.state,input:n}}inputValue(t=this.props.initialValue){return ot(t)?this.props.displayValue(t):null}selectState(t){const n=this.inputValue(t);return{value:t,input:n,selected:t}}};be(Wt,"debug",!1),be(Wt,"debugPrefix","Select > "),be(Wt,"debugColor","MediumVioletRed"),be(Wt,"defaultProps",{...Wt.defaultProps,options:[],displayValue:ts("displayValue"),displayOption:ts("displayOption")}),be(Wt,"initialState",{...Ky}),be(Wt,"initialProps",{value:"initialValue"}),be(Wt,"actions",["onFocus","onBlur","onClick","onKeyDown","open","close","setCursor","selectCursor","selectOption","menuRef","activeRef"]);let vc=Wt;const co=wr(vc),Yy=({input:e,onFocus:t,onBlur:n,onClick:o,placeholder:a="Select",placeholderClass:l="placeholder",inputsClass:s="inputs",inputClass:i="input",suffixClass:c="suffix",disabled:u})=>r.jsxs("div",{className:s,onClick:o,children:[r.jsx("div",{onFocus:t,onBlur:n,disabled:u,className:i,tabIndex:0,children:ot(e)?r.jsx(r.Fragment,{children:e}):r.jsx("span",{className:l,children:a})}),r.jsx("div",{className:c,children:r.jsx(Y,{name:"angle-down"})})]}),Qy=co.Consumer(Yy),Xy=({option:e,active:t,activeRef:n,selected:o,onClick:a,onMouseEnter:l,displayOption:s,optionClass:i="item no-hover",activeClass:c="active",selectedClass:u="selected",disabledClass:d="disabled"})=>r.jsx("div",{className:Te(i,e.className,t?c:null,o?u:null,e.disabled?d:null),onMouseEnter:l,onClick:a,ref:t?n:null,"aria-disabled":e.disabled,children:s(e)}),qy=co.Consumer(Xy),Jy=({noOptionsClass:e="none",noOptions:t="No options"})=>r.jsx("div",{className:e,children:t}),eC=co.Consumer(Jy),tC=({options:e,menuRef:t,menuClass:n="menu border bdr-1",cursor:o,selected:a,selectOption:l,setCursor:s,Option:i=qy,NoOptions:c=eC})=>r.jsx("div",{className:n,ref:t,children:La(e)&&e.length?e.map((u,d)=>r.jsx(i,{option:u,active:ot(o)&&e[o]===u,selected:a===u,onClick:()=>l(u),onMouseEnter:()=>s(d)},u.id??u.value??d)):r.jsx(c,{})}),nC=co.Consumer(tC),rC=({onKeyDown:e,isOpen:t,selectClass:n="select",openClass:o="open",closedClass:a="closed",Input:l=Qy,Menu:s=nC})=>r.jsxs("div",{className:Te(n,t?o:a),onKeyDown:e,children:[r.jsx(l,{}),!!t&&r.jsx(s,{})]}),oC=co.Consumer(rC),aC=({Content:e=oC,...t})=>r.jsx(co.Provider,{...t,children:r.jsx(e,{})}),uo=ae(aC,"Select"),lC=({pageSize:e,setPageSize:t,pageSizes:n=[10,25,50,100,250,500,1e3]})=>r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Page Size"}),r.jsx(uo,{value:e,options:n,onSelect:o=>t(o)})]}),sC=mt.Consumer(lC),iC=({controlsVisible:e,hideControls:t})=>r.jsxs(Ut,{open:e,close:t,children:[r.jsx("header",{children:r.jsx("h3",{children:"Data Table Controls"})}),r.jsxs("div",{className:"grid-3 gap-4",children:[r.jsx(sC,{}),r.jsx(Gy,{})]}),r.jsx("footer",{className:"text-right",children:r.jsx(D,{text:"OK",onClick:t})})]}),cC=mt.Consumer(iC),uC=({color:e,className:t="datatable",Header:n=fy,Body:o=Ty,Footer:a=Wy,Controls:l=cC})=>r.jsxs("section",{className:Te(t,e),children:[r.jsx(n,{}),r.jsx(o,{}),r.jsx(a,{}),r.jsx(l,{})]}),dC=mt.Consumer(uC),pC=({Content:e=dC,...t})=>r.jsx(mt.Provider,{...t,children:r.jsx(e,{})}),fC=ae(pC,"Datatable"),hC=({summary:e,summaryClass:t})=>r.jsx("summary",{className:t,children:e}),mC=({content:e,children:t,contentClass:n})=>r.jsx("div",{className:n,children:e||t}),xC=({className:e,size:t,color:n,lined:o,border:a,radius:l,shaded:s,shadow:i,open:c,Summary:u=hC,Content:d=mC,...x})=>r.jsxs("details",{className:Te(e,n,Xu(a),Ju(l),qu(i),{size:t,color:n,lined:o,shaded:s}),open:c,children:[r.jsx(u,{...x}),r.jsx(d,{...x})]}),Ue=ae(xC,"Details"),En=class En extends qo{};be(En,"debug",!1),be(En,"debugPrefix","Dropdown > "),be(En,"debugColor","MediumVioletRed"),be(En,"defaultProps",{...En.defaultProps,options:[],displayOption:Vv}),be(En,"actions",["onMouseEnter","onMouseLeave","onFocus","onBlur","onClick","onKeyDown","open","close","setCursor","selectCursor","selectOption","triggerRef","menuRef","activeRef"]);let yc=En;const Pa=wr(yc),gC=({triggerClass:e="trigger",triggerRef:t,onMouseEnter:n,onMouseLeave:o,onKeyDown:a,onFocus:l,onBlur:s,onClick:i,...c})=>r.jsx("div",{className:e,onClick:i,onMouseEnter:n,onMouseLeave:o,onKeyDown:a,onFocus:l,onBlur:s,tabIndex:0,ref:t,children:r.jsx(_s,{...N9(c,/^(icon|text)/)})}),vC=Pa.Consumer(gC),yC=({option:e,active:t,activeRef:n,selected:o,onClick:a,onMouseEnter:l,optionClass:s="item no-hover",activeClass:i="active",selectedClass:c="selected",disabledClass:u="disabled",displayOption:d})=>r.jsx("div",{className:Te(s,e.className,t?i:null,o?c:null,e.disabled?u:null),onMouseEnter:l,onClick:a,ref:t?n:null,"aria-disabled":e.disabled,children:d(e)}),CC=Pa.Consumer(yC),jC=({option:e,separatorClass:t="separator"})=>r.jsx("div",{className:Te(t,e.className)}),SC=({option:e,optionClass:t="item no-hover",headingClass:n="heading"})=>r.jsx("h4",{className:Te(n,t,e.className),children:e.heading}),bC=({options:e=[],menuRef:t,menuClass:n="menu border bdr-1",cursor:o,selected:a,selectOption:l,setCursor:s,onMouseEnter:i,onMouseLeave:c,Option:u=CC,Separator:d=jC,Heading:x=SC})=>r.jsx("div",{className:n,ref:t,onMouseEnter:i,onMouseLeave:c,children:e.map((m,j)=>m.separator?r.jsx(d,{option:m},j):m.heading?r.jsx(x,{option:m},j):r.jsx(u,{option:m,active:ot(o)&&e[o]===m,selected:a===m,onClick:()=>l(m),onMouseEnter:()=>s(j)},m.id??m.value??j))}),_C=Pa.Consumer(bC),wC=({className:e="dropdown",openClass:t="open",closedClass:n="closed",isOpen:o,right:a,size:l,wide:s,Trigger:i=vC,Menu:c=_C})=>r.jsxs("div",{className:Te(e,l,o?t:n,{right:a,wide:s}),children:[r.jsx(i,{}),o&&r.jsx(c,{})]}),kC=Pa.Consumer(wC),TC=({Content:e=kC,...t})=>r.jsx(Pa.Provider,{...t,children:r.jsx(e,{})}),st=ae(TC,"Dropdown"),EC=({close:e,icon:t="cross",className:n="close"})=>r.jsx("div",{className:n,onClick:e,children:r.jsx(Y,{name:t})}),LC=ae(EC,"ModalClose"),NC=({title:e,header:t})=>e||t?r.jsxs("header",{children:[!!e&&r.jsx("h3",{children:e}),t]}):null,RC=ae(NC,"ModalHeader"),OC=({footer:e})=>!!e&&r.jsx("footer",{children:e}),DC=ae(OC,"ModalFooter"),MC=({text:e,children:t,Header:n=RC,Footer:o=DC,...a})=>r.jsxs("article",{children:[r.jsx(n,{...a}),e||t,r.jsx(o,{...a})]}),PC=ae(MC,"ModalContent"),$C=({ref:e,open:t,close:n,className:o,closeClass:a="close",closeIcon:l="cross",Close:s=LC,Content:i=PC,...c})=>(e||(e=_.useRef(null)),_.useEffect(()=>{const{current:u}=e;t?u.showModal():u.close()},[t]),r.jsxs("dialog",{ref:e,className:o,children:[!!n&&r.jsx(s,{close:n,icon:l,className:a}),r.jsx(i,{...c})]})),Ut=ae($C,"Modal"),AC=({open:e=!1}={})=>{const{isVisible:t,show:n,hide:o}=Xn({visible:e});return{show:n,hide:o,Modal:a=>r.jsx(Ut,{open:t,...a})}},BC=({color:e,className:t,style:n,fixed:o,light:a,dark:l,children:s})=>r.jsx("div",{className:Te("overlay",t,e,{fixed:o,light:a,dark:l}),style:n,children:s}),po=ae(BC,"Overlay"),IC=({open:e=!1}={})=>{const{isVisible:t,show:n,hide:o}=Xn({visible:e});return{show:n,hide:o,Overlay:a=>t&&r.jsx(po,{...a})}},zC=({className:e,disabled:t,children:n})=>r.jsx("label",{className:Te(e,{disabled:t}),children:n}),FC=ae(zC,"RadioLabel"),UC=({option:e,tabIndex:t=0,onChange:n=qe,checked:o})=>r.jsx("input",{type:"radio",disabled:e.disabled,"aria-disabled":e.disabled,tabIndex:e.disabled?-1:t,onChange:a=>n(a.target.checked),checked:o}),HC=ae(UC,"RadioInput"),VC=({name:e,option:t,checked:n,inline:o,border:a,labelClass:l="radio",inputClass:s,Label:i=FC,Input:c=HC,onChange:u})=>r.jsxs(i,{className:Te(l,t.labelClass,{inline:o,border:a}),disabled:t.disabled,option:t,children:[r.jsx(c,{name:e,option:t,checked:n,className:Te(s,t.inputClass),onChange:()=>u(t.value)}),t.text??t.label??t.name]}),WC=ae(VC,"RadioOption"),ZC=({value:e,options:t,className:n="radioset",disabled:o,Option:a=WC,...l})=>r.jsx("div",{className:Te(n,{disabled:o}),children:t.map(s=>{const i=Na(s)?s:{value:s,label:s};return r.jsx(a,{option:i,checked:i.value===e,value:e,...l},i.value)})}),fn=ae(ZC,"Radio"),di={searching:!1,search:void 0,results:void 0,result:void 0,cursor:void 0};class _n extends Xo{constructor(t){super(t);const n=this.inputValue();this.state={...this.state,input:n,searching:!1},this.startSearch=t.debounceTime?O9(this.search.bind(this),t.debounceTime):this.search.bind(this)}componentDidMount(){this.mounted=!0,this.props.onLoad(this)}componentWillUnmount(){this.setState({results:null}),this.mounted=!1,this.props.onUnload(this)}inputValue(t=this.props.initialValue){return ot(t)?this.props.displayValue(t):Ph}onFocus(){this.debug("onFocus()"),this.setState({hasFocus:!0},this.props.onFocus)}onBlur(){this.debug("onBlur()"),this.setState({hasFocus:!1},this.props.onBlur),Ss(500).then(()=>this.clearResults())}onChange(t){const n=t.target.value;this.debug(`input: ${n}`),n.length>=this.props.minLength?this.setState({input:n},this.startSearch):this.setState({input:n,...di})}onKeyDown(t){this.debug(`onKeyDown(${t.key})`);const n=this.state.cursor;switch(t.key){case $h:this.setCursor(n+1);break;case Ah:this.setCursor(n-1);break;case Bh:this.selectCursor();break;case Ih:this.reset();break;default:return}t.preventDefault()}reset(){this.debug("reset()");const t=this.props.initialValue,n=this.inputValue(t);this.debug(`reset() [input:${n}] from value: `,t),this.setState({value:t,input:n,...di},this.props.onReset)}search(){const{input:t}=this.state,{minLength:n,onSearch:o}=this.props;if(t.length<n){this.debug(`search() cancelled - input is shorter than ${n}`);return}if(!o){this.debug("search() cancelled - no onSearch() handler defined");return}this.debug("onSearch: ",o),this.setState({search:t,searching:!0},async()=>this.searchResults(await o(t,this)))}searchResults(t){this.debug("searchResults()",t),this.setState({results:t,searching:!1,cursor:0})}selectResult(t){this.debug("selectResult()",t);const n=this.inputValue(t);this.setState({value:t,input:n,...di},()=>this.props.onSelect(t))}setCursor(t){this.debug(`setCursor(${t})`);const{results:n}=this.state;this.setState({cursor:n&&n.length?(t+n.length)%n.length:void 0})}selectCursor(){const{cursor:t,results:n}=this.state;n&&n.length&&ot(t)&&this.selectResult(n[t])}clearResults(){this.mounted&&this.setState({results:null})}resultsRef(t){this._resultsRef=t}activeRef(t){zh(this._resultsRef,t)}}be(_n,"debug",!1),be(_n,"debugPrefix","Search > "),be(_n,"debugColor","MediumVioletRed"),be(_n,"defaultProps",{minLength:2,debounceTime:500,onLoad:qe,onUnload:qe,onFocus:qe,onBlur:qe,onReset:qe,onSelect:qe,displayValue:ts("displayValue"),displayResult:ts("displayResult")}),be(_n,"initialState",{value:"",searching:!1}),be(_n,"initialProps",{value:"initialValue"}),be(_n,"actions",["onFocus","onBlur","onChange","onKeyDown","reset","selectResult","setCursor","selectCursor","resultsRef","activeRef"]);const fo=wr(_n),GC=({input:e,onFocus:t,onBlur:n,onChange:o,reset:a,placeholder:l="Search",clearIcon:s="cross",searchIcon:i="search",searchingIcon:c="cog.spin",inputsClass:u="inputs round",prefixClass:d="prefix",suffixClass:x="suffix",inputType:m="text",inputClass:j="",disabled:y,searching:S})=>r.jsxs("div",{className:u,children:[r.jsx("div",{className:d,children:r.jsx(Y,{name:i})}),r.jsx("input",{type:m,placeholder:l,value:e,onFocus:t,onBlur:n,onChange:o,disabled:y,className:j}),r.jsx("div",{className:x,onClick:a,children:r.jsx(Y,{name:S?c:s})})]}),KC=fo.Consumer(GC),YC=({result:e,active:t,activeRef:n,onClick:o,onMouseEnter:a,displayResult:l,resultClass:s="item",activeClass:i="active"})=>r.jsx("div",{className:Te(s,{[i]:t}),onClick:o,onMouseEnter:a,ref:t?n:null,children:l(e)}),QC=fo.Consumer(YC),XC=({noResultsClass:e="none",noResults:t="No results"})=>r.jsx("div",{className:e,children:t}),qC=fo.Consumer(XC),JC=({results:e,resultsRef:t,cursor:n,selectResult:o,setCursor:a,resultsClass:l="menu border bdr-1",Result:s=QC,NoResults:i=qC})=>r.jsx("div",{className:l,ref:t,children:La(e)&&e.length?e.map((c,u)=>r.jsx(s,{result:c,active:ot(n)&&e[n]===c,onClick:()=>o(c),onMouseEnter:()=>a(u)},c.id??c.value??u)):r.jsx(i,{})}),ej=fo.Consumer(JC),tj=({results:e,onKeyDown:t,Input:n=KC,Results:o=ej})=>r.jsxs("div",{className:"search",onKeyDown:t,children:[r.jsx(n,{}),!!e&&r.jsx(o,{})]}),nj=fo.Consumer(tj),rj=({Content:e=nj,...t})=>r.jsx(fo.Provider,{...t,children:r.jsx(e,{})}),ks=ae(rj,"Search"),oj=()=>r.jsxs(W,{children:[r.jsx("h3",{children:"Hello World!"}),"This is an alert."]}),aj=`import React from 'react'
import { Alert } from '@/src/index.jsx'

{/* START */}
// PRETEND: import { Alert } from '@abw/badger-react-ui'

const AlertExample = () =>
  <Alert>
    <h3>Hello World!</h3>
    This is an alert.
  </Alert>

export default AlertExample
`,lj=["red","brown","orange","yellow","olive","green","teal","blue","indigo","violet","purple","pink","maroon"],Fh=({color:e,setColor:t,disabled:n=!1})=>r.jsxs("select",{name:"color",required:!0,value:e,onChange:o=>t(o.target.value),disabled:n,children:[r.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Select Range"}),r.jsx("option",{value:"",children:"Default"}),lj.map(o=>r.jsx("option",{value:o,children:o},o))]}),sj=["smallest","smaller","small","medium","large","larger","largest","x2","x3","x4","x5","x6","x7","x8","x9","x10"],Uh=({size:e,setSize:t})=>r.jsxs("select",{name:"size",required:!0,value:e,onChange:n=>t(n.target.value),children:[r.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Size"}),r.jsx("option",{value:"",children:"Default"}),sj.map(n=>r.jsx("option",{value:n,children:n},n))]}),ij=[0,1,2,3,4,5,6,8,10],cj=({radius:e,setRadius:t})=>r.jsxs("select",{name:"radius",required:!0,value:e,onChange:n=>t(n.target.value),children:[r.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Radius"}),r.jsx("option",{value:"",children:"Default"}),ij.map(n=>r.jsx("option",{value:n,children:n},n))]}),uj=[1,2,3,4,5],dj=({shadow:e,setShadow:t})=>r.jsxs("select",{name:"shadow",required:!0,value:e,onChange:n=>t(n.target.value),children:[r.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Shadow"}),r.jsx("option",{value:"",children:"Default"}),uj.map(n=>r.jsx("option",{value:n,children:n},n))]}),lp=({checked:e,toggle:t,label:n,disabled:o=!1})=>r.jsxs("label",{className:"checkbox border no-focus",children:[r.jsx("input",{type:"checkbox",checked:e,onChange:t,disabled:o}),n]}),pj=[0,1,2,3,4,5,6,8,10],fj=({border:e,setBorder:t,disabled:n=!1})=>r.jsxs("select",{name:"border",required:!0,value:e,onChange:o=>t(o.target.value),disabled:n,children:[r.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Border"}),r.jsx("option",{value:"",children:"Default"}),pj.map(o=>r.jsx("option",{value:o,children:o},o))]}),hj=Object.keys(Ra.icons),Cc=({icon:e,setIcon:t,disabled:n=!1})=>r.jsxs("select",{name:"icon",required:!0,value:e,onChange:o=>t(o.target.value),disabled:n,children:[r.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Icon"}),r.jsx("option",{value:"",children:"None"}),hj.map(o=>r.jsx("option",{value:o,children:o},o))]}),mj=()=>{const[e,t]=_.useState(0),[n,o]=_.useState({headline:"",title:"",text:"Hello World!",revealable:!1,stripe:!1}),a=c=>()=>{o(u=>({...u,[c]:!u[c]})),t(u=>u+1)},l=c=>u=>{o(d=>({...d,[c]:u})),t(d=>d+1)},i=`<Alert
  ${gj(n)}
/>`;return r.jsxs("div",{className:"example grid-2 gap-h-8 stack-desktop",children:[r.jsxs("div",{children:[r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Output"}),r.jsx("div",{className:"output mar-b-8",children:r.jsx(vj,{options:n},e)})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Markup"}),r.jsx(Rn,{code:i,language:"html",expand:!0})]})]}),r.jsx(xj,{options:n,setOption:l,toggleOption:a})]})},xj=({options:e,toggleOption:t,setOption:n})=>{const o=n("headline"),a=n("title"),l=n("text"),s=n("type"),i=n("size"),c=n("color"),u=n("border"),d=n("radius"),x=n("shadow"),m=n("icon"),j=n("headicon"),y=t("stripe"),S=t("revealable");return r.jsxs("div",{children:[r.jsx(pi,{label:"Headline",value:e.headline,setValue:o}),r.jsx(pi,{label:"Title",value:e.title,setValue:a}),r.jsx(pi,{label:"Text",value:e.text,setValue:l}),r.jsxs("div",{className:"grid-2 gap-h-4 stack-mobile top",children:[r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Type"}),r.jsx(yj,{type:e.type,setType:s})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Color"}),r.jsx(Fh,{color:e.color,setColor:c,disabled:e.type})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Size"}),r.jsx(Uh,{size:e.size,setSize:i})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Shadow"}),r.jsx(dj,{shadow:e.shadow,setShadow:x})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Border Width"}),r.jsx(fj,{border:e.border,setBorder:u,disabled:e.stripe})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Border Radius"}),r.jsx(cj,{radius:e.radius,setRadius:d})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Headline Icon"}),r.jsx(Cc,{icon:e.headicon,setIcon:j,disabled:!e.headline})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Body Icon"}),r.jsx(Cc,{icons:e.icon,setIcon:m})]})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Options"}),r.jsxs("div",{className:"grid-2 gap-h-4 stack-mobile top",children:[r.jsx(lp,{checked:e.stripe,toggle:y,label:"Stripe"}),r.jsx(lp,{checked:e.revealable,toggle:S,label:"Revealable",disabled:!e.headline})]})]})]})},gj=e=>{const t=["headline","title","text","type","color","size","headicon","icon"].filter(a=>e[a]).map(a=>`${a}="${e[a]}"`),n=["shadow","border","radius"].filter(a=>e[a]).map(a=>`${a}={${e[a]}}`),o=["stripe","revealable","dismissable"].filter(a=>e[a]);return[...t,...n,...o].join(`
  `)},vj=({options:e})=>r.jsx(W,{...e}),yj=({type:e,setType:t})=>r.jsxs("select",{name:"type",required:!0,value:e,onChange:n=>t(n.target.value),children:[r.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Type"}),r.jsx("option",{value:"",children:"Default"}),["info","warning","success","error"].map(n=>r.jsx("option",{value:n,children:n},n))]}),pi=({label:e,value:t,setValue:n})=>r.jsxs("div",{className:"field",children:[r.jsx("label",{children:e}),r.jsxs("div",{className:"inputs",children:[r.jsx("input",{type:"text",name:"headline",value:t,onChange:o=>n(o.target.value)}),r.jsx("div",{className:"suffix",children:r.jsx(Y,{name:"cross",className:"hover",onClick:()=>n("")})})]})]}),Hh=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["Use the ",r.jsx("code",{children:"Alert"})," component to render an alert. Any child elements will be rendered inside the alert body."]}),r.jsx(ye,{Component:oj,code:aj,expand:!0}),r.jsx("h2",{children:"Demo"}),r.jsx(mj,{})]}),Cj=Object.freeze(Object.defineProperty({__proto__:null,default:Hh},Symbol.toStringTag,{value:"Module"})),Vh=e=>e.replaceAll(/\W+/g,"-").replace(/^-+/,"").replace(/-+$/,"").toLowerCase(),jj=({render:e})=>{const[t,n]=_.useState({}),o=_.useRef();return e({tocs:t,addToc:(s,i,c,u)=>{const d=t[s]||(t[s]={});d[i]={text:c,ref:u},n({...t})},addTocHeading:(s,i,c,u)=>{const d=t[s]||(t[s]={});d[i]={heading:c,ref:u},n({...t})},contentRef:o})},$a=wr(jj),Sj=({addToc:e,addTocHeading:t,tocName:n,render:o})=>o({addPageToc:(s,i,c)=>{e(n,s,i,c)},addPageTocHeading:(s,i,c)=>{t(n,s,i,c)}}),ed=wr($a.Consumer(Sj)),bj=({id:e,code:t,title:n=t,children:o,addPageToc:a,split:l})=>{const s=Vh(e||t||n),i=_.useRef(),c=t?`code:${t}`:n;return _.useEffect(()=>{a&&a(s,c,i)},[e,t,n]),r.jsxs("section",{id:s,ref:i,children:[r.jsx("h3",{className:t?"font-mono page-section":"page-section",children:n}),r.jsx("div",{className:l?"cols-2 stack-desktop":"",children:o})]})},F=ed.Consumer(bj),L=({Component:e,Source:t,children:n,code:o,title:a,caption:l=o?r.jsx("code",{children:o}):a,expand:s,undent:i,lineProps:c,highlightLines:u,...d})=>r.jsxs(F,{code:o,title:a,...d,children:[r.jsx("div",{className:"cols-2 stack-desktop mar-b-4",children:n}),r.jsx(ye,{Component:e,code:t,caption:l,expand:s,undent:i,highlightLines:u,lineProps:c})]}),_j=()=>r.jsxs("div",{children:[r.jsx(Fo,{text:"Error alert"}),r.jsx(Fo,{text:"Error alert with border",border:!0}),r.jsx(Fo,{headline:"Error Alert",text:"Error alert with headline",border:!0,shadow:!0}),r.jsx(Fo,{title:"Stonehenge",text:"Crushed by a dwarf",icon:"exclamation-thick",stripe:!0,shadow:3})]}),wj=`import React from 'react'
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
`,Wh=()=>r.jsx(L,{code:"Error",Component:_j,Source:wj,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"Error"})," component is a short-cut to generate an error alert."]})}),kj=Object.freeze(Object.defineProperty({__proto__:null,default:Wh},Symbol.toStringTag,{value:"Module"})),Tj=()=>r.jsxs("div",{children:[r.jsx(Bo,{text:"Info alert"}),r.jsx(Bo,{text:"Info alert with border",border:!0}),r.jsx(Bo,{headline:"Info Alert",text:"Info alert with headline",border:!0,shadow:!0}),r.jsx(Bo,{title:"Stonehenge",text:"Where the demons dwell",icon:"info",stripe:!0,shadow:3})]}),Ej=`import React from 'react'
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
`,Zh=()=>r.jsx(L,{code:"Info",Component:Tj,Source:Ej,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"Info"})," component is a short-cut to generate an info alert."]})}),Lj=Object.freeze(Object.defineProperty({__proto__:null,default:Zh},Symbol.toStringTag,{value:"Module"})),Nj=()=>r.jsxs("div",{children:[r.jsx(Io,{text:"Success alert"}),r.jsx(Io,{text:"Success alert with border",border:!0}),r.jsx(Io,{headline:"Success Alert",text:"Success alert with headline",border:!0,shadow:!0}),r.jsx(Io,{title:"Stonehenge",text:"Where the banshees live...",icon:"check-thicker-shrink=4",stripe:!0,shadow:3})]}),Rj=`import React from 'react'
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
`,Gh=()=>r.jsx(L,{code:"Success",Component:Nj,Source:Rj,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"Success"})," component is a short-cut to generate a success alert."]})}),Oj=Object.freeze(Object.defineProperty({__proto__:null,default:Gh},Symbol.toStringTag,{value:"Module"})),Dj=()=>r.jsxs("div",{children:[r.jsx(zo,{text:"Warning alert"}),r.jsx(zo,{text:"Warning alert with border",border:!0}),r.jsx(zo,{headline:"Warning Alert",text:"Warning alert with headline",border:!0,shadow:!0}),r.jsx(zo,{title:"Stonehenge",text:"...and they do live well",icon:"exclamation-thick",stripe:!0,shadow:3})]}),Mj=`import React from 'react'
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
`,Kh=()=>r.jsx(L,{code:"Warning",Component:Dj,Source:Mj,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"Warning"})," component is a short-cut to generate a warning alert."]})}),Pj=Object.freeze(Object.defineProperty({__proto__:null,default:Kh},Symbol.toStringTag,{value:"Module"})),$j=()=>r.jsxs("div",{children:[r.jsx(W,{text:"Border Alert",border:!0}),r.jsx(W,{text:"Border Width 2",border:2})]}),Aj=`import React from 'react'
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
`,Yh=()=>r.jsx(L,{code:"border",Component:$j,Source:Aj,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"border"})," property can be used to add a border.  This can be a number to indicate the border width."]})}),Bj=Object.freeze(Object.defineProperty({__proto__:null,default:Yh},Symbol.toStringTag,{value:"Module"})),Ij=()=>r.jsx(W,{text:"Hello World!",className:"border shadow-2"}),zj=`import React from 'react'
import { Alert } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Alert
    text="Hello World!"
    className="border shadow-2"
  />
/* END */

export default Component
`,Qh=()=>r.jsx(L,{code:"className",Component:Ij,Source:zj,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"className"})," property can be used to set a CSS class."]})}),Fj=Object.freeze(Object.defineProperty({__proto__:null,default:Qh},Symbol.toStringTag,{value:"Module"})),Uj=()=>r.jsxs("div",{children:[r.jsx(W,{text:"Red Alert",color:"red"}),r.jsx(W,{text:"Brown Alert",color:"brown"}),r.jsx(W,{text:"Orange Alert",color:"orange"}),r.jsx(W,{text:"Yellow Alert",color:"yellow"}),r.jsx(W,{text:"Green Alert",color:"green"}),r.jsx(W,{text:"Teal Alert",color:"teal"}),r.jsx(W,{text:"Blue Alert",color:"blue"}),r.jsx(W,{text:"Indigo Alert",color:"indigo"}),r.jsx(W,{text:"Violet Alert",color:"violet"}),r.jsx(W,{text:"Purple Alert",color:"purple"}),r.jsx(W,{text:"Pink Alert",color:"pink"}),r.jsx(W,{text:"Maroon Alert",color:"maroon"})]}),Hj=`import React from 'react'
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
`,Xh=()=>r.jsx(L,{code:"color",Component:Uj,Source:Hj,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"color"})," property can be used to set the color range used for the alert."]})}),Vj=Object.freeze(Object.defineProperty({__proto__:null,default:Xh},Symbol.toStringTag,{value:"Module"})),Wj=()=>r.jsx(W,{headline:"Dismissable Alert",text:"A dismissable alert",dismissable:!0}),Zj=`import React from 'react'
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
`,qh=()=>r.jsx(L,{code:"dismissable",Component:Wj,Source:Zj,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"dismissable"})," property can be used to make an alert dismissable."]})}),Gj=Object.freeze(Object.defineProperty({__proto__:null,default:qh},Symbol.toStringTag,{value:"Module"})),Kj=()=>r.jsx(W,{headline:"Headline Icon Alert",headIcon:"bars",text:"An alert with a headline icon"}),Yj=`import React from 'react'
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
`,Jh=()=>r.jsx(L,{code:"headicon",Component:Kj,Source:Yj,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"headIcon"})," property can be used to add an icon to the headline."]})}),Qj=Object.freeze(Object.defineProperty({__proto__:null,default:Jh},Symbol.toStringTag,{value:"Module"})),Xj=()=>r.jsx(W,{headline:"Headline Alert",text:"An alert with a headline"}),qj=`import React from 'react'
import { Alert } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Alert
    headline="Headline Alert"
    text="An alert with a headline"
  />
/* END */

export default Component
`,em=()=>r.jsx(L,{code:"headline",Component:Xj,Source:qj,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"headline"})," property can be used to set a headline."]})}),Jj=Object.freeze(Object.defineProperty({__proto__:null,default:em},Symbol.toStringTag,{value:"Module"})),eS=()=>r.jsxs("div",{children:[r.jsx(W,{icon:"info",type:"info",title:"Eleven",text:"It's one louder"}),r.jsx(W,{icon:"check",type:"success",title:"Eleven",text:"It's one louder"}),r.jsx(W,{icon:"exclamation",type:"error",title:"Eleven",text:"It's one louder"})]}),tS=`import React from 'react'
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
`,tm=()=>r.jsx(L,{code:"icon",Component:eS,Source:tS,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"icon"})," property can be used to add an icon to the body."]})}),nS=Object.freeze(Object.defineProperty({__proto__:null,default:tm},Symbol.toStringTag,{value:"Module"})),rS=()=>r.jsx(W,{headline:"Dismissable Alert",text:"A dismissable alert",onDismiss:()=>window.alert("Bye!"),dismissable:!0}),oS=`import React from 'react'
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
`,nm=()=>r.jsx(L,{code:"onDismiss",Component:rS,Source:oS,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"onDismiss"})," property can be used to register a function which will be called when the alert is dismissed."]})}),aS=Object.freeze(Object.defineProperty({__proto__:null,default:nm},Symbol.toStringTag,{value:"Module"})),lS=()=>r.jsx(W,{text:"Radius Alert",radius:4}),sS=`import React from 'react'
import { Alert } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Alert
    text="Radius Alert"
    radius={4}
  />
/* END */

export default Component
`,rm=()=>r.jsx(L,{code:"radius",Component:lS,Source:sS,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"radius"})," property can be used to set the border radius."]})}),iS=Object.freeze(Object.defineProperty({__proto__:null,default:rm},Symbol.toStringTag,{value:"Module"})),cS=()=>r.jsx(W,{headline:"Revealable Alert",text:"A revealable alert",revealable:!0}),uS=`import React from 'react'
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
`,om=()=>r.jsx(L,{code:"revealable",Component:cS,Source:uS,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"revealable"})," property can be used to make the alert revealable."]})}),dS=Object.freeze(Object.defineProperty({__proto__:null,default:om},Symbol.toStringTag,{value:"Module"})),pS=()=>r.jsx(W,{headline:"Revealed Alert",text:"A revealed alert",revealable:!0,revealed:!0}),fS=`import React from 'react'
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
`,am=()=>r.jsx(L,{code:"revealed",Component:pS,Source:fS,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"revealed"})," property can be set to make it a revealable alert initially revealed."]})}),hS=Object.freeze(Object.defineProperty({__proto__:null,default:am},Symbol.toStringTag,{value:"Module"})),mS=()=>r.jsxs("div",{children:[r.jsx(W,{text:"Alert With Default Shadow (1)",shadow:!0}),r.jsx(W,{text:"Alert With Shadow 2",shadow:2}),r.jsx(W,{text:"Alert With Shadow 3",shadow:3}),r.jsx(W,{text:"Alert With Shadow 4",shadow:4}),r.jsx(W,{text:"Alert With Shadow 5",shadow:5})]}),xS=`import React from 'react'
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
`,lm=()=>r.jsx(L,{code:"shadow",Component:mS,Source:xS,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"shadow"})," property can be used to add a shadow.  The default value is 1 or you can set it to any number from"," ","1 to 5."]})}),gS=Object.freeze(Object.defineProperty({__proto__:null,default:lm},Symbol.toStringTag,{value:"Module"})),vS=()=>r.jsxs("div",{children:[r.jsx(W,{text:"Smallest Alert",size:"smallest"}),r.jsx(W,{text:"Smaller Alert",size:"smaller"}),r.jsx(W,{text:"Small Alert",size:"small"}),r.jsx(W,{text:"Medium Alert",size:"medium"}),r.jsx(W,{text:"Large Alert",size:"large"}),r.jsx(W,{text:"Larger Alert",size:"larger"}),r.jsx(W,{text:"Largest Alert",size:"largest"})]}),yS=`import React from 'react'
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
`,sm=()=>r.jsx(L,{code:"size",Component:vS,Source:yS,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"size"})," property can be used to set the text size."]})}),CS=Object.freeze(Object.defineProperty({__proto__:null,default:sm},Symbol.toStringTag,{value:"Module"})),jS=()=>r.jsxs("div",{children:[r.jsx(W,{text:"Stripe Alert",stripe:!0,shadow:4}),r.jsx(W,{text:"Info Stripe Alert",type:"info",stripe:!0,shadow:4}),r.jsx(W,{text:"Success Stripe Alert",type:"success",stripe:!0,shadow:4}),r.jsx(W,{text:"Warning Stripe Alert",type:"warning",stripe:!0,shadow:4}),r.jsx(W,{text:"Error Stripe Alert",type:"error",stripe:!0,shadow:4})]}),SS=`import React from 'react'
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
`,im=()=>r.jsx(L,{code:"stripe",Component:jS,Source:SS,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"stripe"})," property can be set as a short-cut to add the"," ",r.jsx("code",{children:"stripe"})," CSS class for a more minimal look."]})}),bS=Object.freeze(Object.defineProperty({__proto__:null,default:im},Symbol.toStringTag,{value:"Module"})),_S=()=>r.jsx(W,{text:"Hello World!"}),wS=`import React from 'react'
import { Alert } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Alert text="Hello World!"/>
/* END */

export default Component`,cm=()=>r.jsx(L,{code:"text",Component:_S,Source:wS,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"text"})," property can be used to set the body text."]})}),kS=Object.freeze(Object.defineProperty({__proto__:null,default:cm},Symbol.toStringTag,{value:"Module"})),TS=()=>r.jsx(W,{title:"Hello World!",children:"This is an alert"}),ES=`import React from 'react'
import { Alert } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Alert title="Hello World!">
    This is an alert
  </Alert>
/* END */

export default Component`,um=()=>r.jsx(L,{code:"title",Component:TS,Source:ES,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"title"})," property can be used to set a title."]})}),LS=Object.freeze(Object.defineProperty({__proto__:null,default:um},Symbol.toStringTag,{value:"Module"})),NS=()=>r.jsxs("div",{children:[r.jsx(W,{text:"Info Alert",type:"info"}),r.jsx(W,{text:"Success Alert",type:"success"}),r.jsx(W,{text:"Warning Alert",type:"warning"}),r.jsx(W,{text:"Error Alert",type:"error"})]}),RS=`import React from 'react'
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
`,dm=()=>r.jsx(L,{code:"type",Component:NS,Source:RS,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"type"})," property can be used to set it to one of the pre-defined types: ",r.jsx("code",{children:"info"}),", ",r.jsx("code",{children:"success"}),","," ",r.jsx("code",{children:"warning"})," or ",r.jsx("code",{children:"error"}),"."]})}),OS=Object.freeze(Object.defineProperty({__proto__:null,default:dm},Symbol.toStringTag,{value:"Module"})),it=({tocName:e,children:t})=>r.jsx(ed.Provider,{tocName:e,children:t}),DS=({id:e,title:t,addPageTocHeading:n})=>{const o=Vh(e||t),a=_.useRef();return _.useEffect(()=>{n&&n(o,t,a)},[e,t]),r.jsx("h2",{id:o,ref:a,className:"section-heading",children:t})},re=ed.Consumer(DS),MS=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Alert"}),r.jsx(Hh,{}),r.jsxs(it,{tocName:"alert",children:[r.jsx(re,{title:"Properties"}),r.jsx(um,{}),r.jsx(cm,{}),r.jsx(em,{}),r.jsx(Jh,{}),r.jsx(om,{}),r.jsx(am,{}),r.jsx(qh,{}),r.jsx(nm,{}),r.jsx(Qh,{}),r.jsx(Yh,{}),r.jsx(rm,{}),r.jsx(lm,{}),r.jsx(sm,{}),r.jsx(Xh,{}),r.jsx(dm,{}),r.jsx(im,{}),r.jsx(tm,{}),r.jsx(re,{title:"Components"}),r.jsx(Zh,{}),r.jsx(Gh,{}),r.jsx(Kh,{}),r.jsx(Wh,{})]})]}),PS=Object.freeze(Object.defineProperty({__proto__:null,default:MS},Symbol.toStringTag,{value:"Module"})),$S=()=>r.jsx(D,{children:"This is a button"}),AS=`import React from 'react'
import { Button } from '@/src/index.jsx'

{/* START */}
// PRETEND: import { Button } from '@abw/badger-react-ui'

const ButtonExample = () =>
  <Button>
    This is a button
  </Button>

export default ButtonExample
`,pm=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Button"})," component can be used to render a button. Any child elements will be included as content."]}),r.jsxs("p",{className:"cols-2 stack-desktop",children:["There are numerous properties listed below that are typically used as shortcuts to set particular CSS styles.  Any other properties not listed here are forwarded to the ",r.jsx("code",{children:"button"})," component."]}),r.jsx(ye,{Component:$S,code:AS,expand:!0})]}),BS=Object.freeze(Object.defineProperty({__proto__:null,default:pm},Symbol.toStringTag,{value:"Module"})),IS=()=>r.jsx(D,{text:"Custom Button Content",Content:({text:e})=>r.jsxs("span",{className:"pad-4",children:["😀 ",e]})}),zS=`import React from 'react'
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
`,fm=()=>r.jsxs(L,{code:"Content",Component:IS,Source:zS,undent:2,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"Content"})," property (note the capital C) can be used to provide an alternate component to render the button content. By default it uses ",r.jsx("code",{children:"WithIcons"})," to render the button text with optional icons."]}),r.jsxs("p",{children:["If you want to change the way that button content is generated on a global level then you can use the theming engine to define a different ",r.jsx("code",{children:"Content"})," component for all buttons."]})]}),FS=Object.freeze(Object.defineProperty({__proto__:null,default:fm},Symbol.toStringTag,{value:"Module"})),US=()=>r.jsxs("div",{className:"flex wrap gap-4",children:[r.jsx(D,{text:"Red Bare",color:"red",bare:!0}),r.jsx(D,{text:"Green Bare",color:"green",bare:!0}),r.jsx(D,{text:"Blue Bare",color:"blue",bare:!0})]}),HS=`import React from 'react'
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
`,hm=()=>r.jsx(L,{code:"bare",Component:US,Source:HS,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"bare"})," property can be added for bare naked buttons."]})}),VS=Object.freeze(Object.defineProperty({__proto__:null,default:hm},Symbol.toStringTag,{value:"Module"})),WS=()=>r.jsxs("div",{className:"flex middle wrap gap-4",children:[r.jsx(D,{text:"Border 2",color:"red",outline:!0,border:2}),r.jsx(D,{text:"Border 3",color:"brown",outline:!0,border:3}),r.jsx(D,{text:"Border 4",color:"orange",outline:!0,border:4}),r.jsx(D,{text:"Border 5",color:"yellow",outline:!0,border:5})]}),ZS=`import React from 'react'
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
`,mm=()=>r.jsx(L,{code:"border",Component:WS,Source:ZS,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"border"})," property can be used to set the border width. This is only really noticeable on outline buttons.  There is a border around solid buttons (mainly to help in matching the height of other form inputs), although it's the same color as the background."]})}),GS=Object.freeze(Object.defineProperty({__proto__:null,default:mm},Symbol.toStringTag,{value:"Module"})),KS=()=>r.jsxs("div",{className:"flex wrap gap-4",children:[r.jsx(D,{text:"Yellow Button",color:"yellow"}),r.jsx(D,{text:"Bright Yellow Button",color:"yellow",bright:!0})]}),YS=`import React from 'react'
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
`,xm=()=>r.jsx(L,{code:"bright",Component:KS,Source:YS,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"bright"})," property can be added to make the buttons brighter than normal."]})}),QS=Object.freeze(Object.defineProperty({__proto__:null,default:xm},Symbol.toStringTag,{value:"Module"})),XS=()=>r.jsx(D,{text:"Custom Button",className:"red bdw-2 bdr-4 bgc-80 fgc-20 bgd-20 fgd-80"}),qS=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    text="Custom Button"
    className="red bdw-2 bdr-4 bgc-80 fgc-20 bgd-20 fgd-80"
  />
/* END */

export default Component
`,gm=()=>r.jsx(L,{code:"className",Component:XS,Source:qS,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"className"})," property can be added to add a CSS class to the button."]})}),JS=Object.freeze(Object.defineProperty({__proto__:null,default:gm},Symbol.toStringTag,{value:"Module"})),eb=()=>r.jsxs("div",{className:"grid-2 gap-4 stack-tablet",children:[r.jsx(D,{text:"Red Button",color:"red"}),r.jsx(D,{text:"Brown Button",color:"brown"}),r.jsx(D,{text:"Orange Button",color:"orange"}),r.jsx(D,{text:"Yellow Button",color:"yellow"}),r.jsx(D,{text:"Green Button",color:"green"}),r.jsx(D,{text:"Teal Button",color:"teal"}),r.jsx(D,{text:"Blue Button",color:"blue"}),r.jsx(D,{text:"Indigo Button",color:"indigo"}),r.jsx(D,{text:"Violet Button",color:"violet"}),r.jsx(D,{text:"Purple Button",color:"purple"}),r.jsx(D,{text:"Pink Button",color:"pink"}),r.jsx(D,{text:"Maroon Button",color:"maroon"})]}),tb=`import React from 'react'
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
`,vm=()=>r.jsx(L,{code:"color",Component:eb,Source:tb,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"color"})," property can be used to set the color range used for the button."]})}),nb=Object.freeze(Object.defineProperty({__proto__:null,default:vm},Symbol.toStringTag,{value:"Module"})),rb=()=>r.jsxs("div",{className:"flex wrap gap-4",children:[r.jsx(D,{text:"Red Button",color:"red"}),r.jsx(D,{text:"Dark Red Button",color:"red",dark:!0})]}),ob=`import React from 'react'
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
`,ym=()=>r.jsx(L,{code:"dark",Component:rb,Source:ob,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"dark"})," property can be added to make the buttons darker than normal."]})}),ab=Object.freeze(Object.defineProperty({__proto__:null,default:ym},Symbol.toStringTag,{value:"Module"})),lb=()=>r.jsx(D,{text:"Disabled Button",disabled:!0}),sb=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    text="Disabled Button"
    disabled
  />
/* END */

export default Component
`,Cm=()=>r.jsx(L,{code:"disabled",Component:lb,Source:sb,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"disabled"})," property can be set to disable a button."]})}),ib=Object.freeze(Object.defineProperty({__proto__:null,default:Cm},Symbol.toStringTag,{value:"Module"})),cb=()=>r.jsx(D,{color:"green",icon:"bars"}),ub=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    color="green"
    icon="bars"
  />
/* END */

export default Component
`,jm=()=>r.jsx(L,{code:"icon",Component:cb,Source:ub,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"icon"})," property can be used to add an icon to a button."]})}),db=Object.freeze(Object.defineProperty({__proto__:null,default:jm},Symbol.toStringTag,{value:"Module"})),pb=()=>r.jsx(D,{color:"green",text:"Back",iconLeft:"angle-left"}),fb=`import React from 'react'
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
`,Sm=()=>r.jsx(L,{code:"iconLeft",Component:pb,Source:fb,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"iconLeft"})," property can be used to add an icon to the left side of a button."]})}),hb=Object.freeze(Object.defineProperty({__proto__:null,default:Sm},Symbol.toStringTag,{value:"Module"})),mb=()=>r.jsx(D,{color:"green",text:"Next",iconRight:"angle-right"}),xb=`import React from 'react'
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
`,bm=()=>r.jsx(L,{code:"iconRight",Component:mb,Source:xb,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"iconRight"})," property can be used to add an icon to the right side of a button."]})}),gb=Object.freeze(Object.defineProperty({__proto__:null,default:bm},Symbol.toStringTag,{value:"Module"})),vb=()=>r.jsx(D,{text:"I am labelled!",label:"This is a label"}),yb=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    text="I am labelled!"
    label="This is a label"
  />
/* END */

export default Component
`,_m=()=>r.jsx(L,{code:"label",Component:vb,Source:yb,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"label"})," property can be used to set the",r.jsx("code",{children:"aria-label"})," property on the button.  This typically doesn't have any visual effect on the button, but is used by screen readers to provide more detail about the functionality of the button."]})}),Cb=Object.freeze(Object.defineProperty({__proto__:null,default:_m},Symbol.toStringTag,{value:"Module"})),jb=()=>r.jsx(D,{text:"Click Me!",onClick:()=>window.alert("Click!")}),Sb=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    text="Click Me!"
    onClick={() => window.alert('Click!')}
  />
/* END */

export default Component
`,wm=()=>r.jsx(L,{code:"onClick",Component:jb,Source:Sb,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"onClick"})," property can be used to register a function which will be called when the button is clicked."]})}),bb=Object.freeze(Object.defineProperty({__proto__:null,default:wm},Symbol.toStringTag,{value:"Module"})),_b=()=>r.jsxs("div",{className:"flex wrap gap-4",children:[r.jsx(D,{text:"Red Outline",color:"red",outline:!0}),r.jsx(D,{text:"Green Outline",color:"green",outline:!0}),r.jsx(D,{text:"Blue Outline",color:"blue",outline:!0})]}),wb=`import React from 'react'
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
`,km=()=>r.jsx(L,{code:"outline",Component:_b,Source:wb,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"outline"})," property can be added for outline buttons."]})}),kb=Object.freeze(Object.defineProperty({__proto__:null,default:km},Symbol.toStringTag,{value:"Module"})),Tb=()=>r.jsxs("div",{className:"flex middle wrap gap-4",children:[r.jsx(D,{text:"Radius 0",color:"olive",radius:0}),r.jsx(D,{text:"Radius 2",color:"green",radius:2}),r.jsx(D,{text:"Radius 4",color:"teal",radius:3}),r.jsx(D,{text:"Radius 6",color:"blue",radius:4})]}),Eb=`import React from 'react'
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
`,Tm=()=>r.jsx(L,{code:"radius",Component:Tb,Source:Eb,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"radius"})," property can be used to set the border radius in multiples of the base unit: 0.25rem."]})}),Lb=Object.freeze(Object.defineProperty({__proto__:null,default:Tm},Symbol.toStringTag,{value:"Module"})),Nb=()=>r.jsxs("div",{className:"flex wrap gap-4",children:[r.jsx(D,{text:"Red Shaded",color:"red",shaded:!0}),r.jsx(D,{text:"Green Shaded",color:"green",shaded:!0}),r.jsx(D,{text:"Blue Shaded",color:"blue",shaded:!0})]}),Rb=`import React from 'react'
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
`,Em=()=>r.jsx(L,{code:"shaded",Component:Nb,Source:Rb,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"shaded"})," property can be added for shaded buttons."]})}),Ob=Object.freeze(Object.defineProperty({__proto__:null,default:Em},Symbol.toStringTag,{value:"Module"})),Db=()=>r.jsxs("div",{className:"flex middle wrap gap-4",children:[r.jsx(D,{text:"Shadow 1",color:"indigo",outline:!0,shadow:!0}),r.jsx(D,{text:"Shadow 2",color:"violet",outline:!0,shadow:2}),r.jsx(D,{text:"Shadow 3",color:"purple",outline:!0,shadow:3}),r.jsx(D,{text:"Shadow 4",color:"pink",outline:!0,shadow:4}),r.jsx(D,{text:"Shadow 5",color:"maroon",outline:!0,shadow:5})]}),Mb=`import React from 'react'
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
`,Lm=()=>r.jsx(L,{code:"shadow",Component:Db,Source:Mb,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"shadow"})," property can be used to add a shadow to the button ranging from 1 to 5."]})}),Pb=Object.freeze(Object.defineProperty({__proto__:null,default:Lm},Symbol.toStringTag,{value:"Module"})),$b=()=>r.jsxs("div",{className:"flex middle wrap gap-4",children:[r.jsx(D,{text:"Smallest",size:"smallest"}),r.jsx(D,{text:"Smaller",size:"smaller"}),r.jsx(D,{text:"Small",size:"small"}),r.jsx(D,{text:"Medium",size:"medium"}),r.jsx(D,{text:"Large",size:"large"}),r.jsx(D,{text:"Larger",size:"larger"}),r.jsx(D,{text:"Largest",size:"largest"}),r.jsx(D,{text:"x3",size:"x3"}),r.jsx(D,{text:"x5",size:"x5"}),r.jsx(D,{text:"x7",size:"x7"})]}),Ab=`import React from 'react'
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
`,Nm=()=>r.jsx(L,{code:"size",Component:$b,Source:Ab,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"size"})," property can be used to set the button size. This can be one of: ",r.jsx("code",{children:"smallest"}),", ",r.jsx("code",{children:"smaller"}),", ",r.jsx("code",{children:"small"})," ",",",r.jsx("code",{children:"medium"})," (default - same as no explicit size), ",r.jsx("code",{children:"large"})," ",",",r.jsx("code",{children:"larger"}),", ",r.jsx("code",{children:"largest"}),"; or any of the size multipliers:"," ",r.jsx("code",{children:"x2"}),", ",r.jsx("code",{children:"x3"}),", etc., up to ",r.jsx("code",{children:"x10"}),"."]})}),Bb=Object.freeze(Object.defineProperty({__proto__:null,default:Nm},Symbol.toStringTag,{value:"Module"})),Ib=()=>r.jsx(D,{text:"Grey Button"}),zb=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button text="Grey Button"/>
/* END */

export default Component
`,Rm=()=>r.jsx(L,{code:"text",Component:Ib,Source:zb,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"text"})," property can be used to set the text for the button."]})}),Fb=Object.freeze(Object.defineProperty({__proto__:null,default:Rm},Symbol.toStringTag,{value:"Module"})),Ub=()=>r.jsx(D,{text:"Tooltip",label:"This is a tooltip",tooltip:"top left"}),Hb=`import React from 'react'
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
`,Om=()=>r.jsx(L,{code:"tooltip",Component:Ub,Source:Hb,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"tooltip"})," property can be used to set the",r.jsx("code",{children:"data-tooltip"})," property on the button.  This can be used to indicate the direction of the tooltip, e.g. ",r.jsx("code",{children:"top"}),","," ",r.jsx("code",{children:"right"}),", ",r.jsx("code",{children:"top right"}),", etc. The tooltip content should be defined using the ",r.jsx("code",{children:"label"})," property."]})}),Vb=Object.freeze(Object.defineProperty({__proto__:null,default:Om},Symbol.toStringTag,{value:"Module"})),Wb=()=>r.jsx(D,{text:"Grey Button",type:"submit"}),Zb=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    text="Grey Button"
    type="submit"
  />
/* END */

export default Component
`,Dm=()=>r.jsxs(L,{code:"type",Component:Wb,Source:Zb,undent:2,expand:!0,children:[r.jsxs("p",{children:["The default ",r.jsx("code",{children:"type"})," for a button is set to ",r.jsx("code",{children:"button"}),". In most cases this has no effect.  However, inside the scope of a ",r.jsx("code",{children:"form"})," element, the ",r.jsx("code",{children:"type"})," for a button would usually default to being ",r.jsx("code",{children:"submit"}),".  When clicked, the button would submit the form."]}),r.jsxs("p",{children:["This behaviour usually surprises people (it certainly catches me out from time to time).  Having an explicit default button type prevents this from happening.  When you really do want to add a button to submit a form, you should explicitly set the ",r.jsx("code",{children:"type"})," to"," ",r.jsx("code",{children:"submit"}),".  You can also set it to ",r.jsx("code",{children:"reset"})," to make a reset button for a form."]})]}),Gb=Object.freeze(Object.defineProperty({__proto__:null,default:Dm},Symbol.toStringTag,{value:"Module"})),Kb=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Button"}),r.jsx(pm,{}),r.jsxs(it,{tocName:"button",children:[r.jsx(re,{title:"Properties"}),r.jsx(Rm,{}),r.jsx(wm,{}),r.jsx(Cm,{}),r.jsx(vm,{}),r.jsx(xm,{}),r.jsx(ym,{}),r.jsx(Em,{}),r.jsx(km,{}),r.jsx(hm,{}),r.jsx(gm,{}),r.jsx(mm,{}),r.jsx(Tm,{}),r.jsx(Lm,{}),r.jsx(Nm,{}),r.jsx(jm,{}),r.jsx(Sm,{}),r.jsx(bm,{}),r.jsx(_m,{}),r.jsx(Om,{}),r.jsx(Dm,{}),r.jsx(re,{title:"Components"}),r.jsx(fm,{})]})]}),Yb=Object.freeze(Object.defineProperty({__proto__:null,default:Kb},Symbol.toStringTag,{value:"Module"})),Qb=({text:e})=>r.jsx("span",{className:"border pad pad-h-4 mar",children:e}),Xb=()=>r.jsx(_r,{buttons:[{text:"One"},{text:"Two"}],Button:Qb}),qb=`import { Buttons } from '@/src/index.jsx'

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
`,Mm=()=>r.jsx(L,{code:"Button",Component:Xb,Source:qb,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"Button"})," property (note the capital B) can be used to define a different component for rendering each button."]})}),Jb=Object.freeze(Object.defineProperty({__proto__:null,default:Mm},Symbol.toStringTag,{value:"Module"})),e_=()=>r.jsxs(_r,{children:[r.jsx(D,{text:"One",outline:!0}),r.jsx(D,{text:"Two",outline:!0})]}),t_=`import { Buttons, Button } from '@/src/index.jsx'

{/* START */}
import React from 'react'
// PRETEND: import { Buttons, Button } from '@abw/badger-react-ui'

const ButtonsExample = () =>
  <Buttons>
    <Button text="One" outline/>
    <Button text="Two" outline/>
  </Buttons>

export default ButtonsExample
`,Pm=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Buttons"})," component can be used to render a connected set of buttons."]}),r.jsx(ye,{Component:e_,code:t_,expand:!0})]}),n_=Object.freeze(Object.defineProperty({__proto__:null,default:Pm},Symbol.toStringTag,{value:"Module"})),r_=()=>r.jsx(r.Fragment,{children:r.jsx(_r,{outline:!0,buttonClass:"blue shadow-1",buttons:[{text:"One"},{text:"Two"}]})}),o_=`import React from 'react'
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
`,$m=()=>r.jsx(L,{code:"buttonClass",Component:r_,Source:o_,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"buttonClass"})," property can be used to add a CSS class to each button. Badger CSS targets the ",r.jsx("code",{children:"button"})," element for styling so you don't need to add any special classes to get the default styling."]})}),a_=Object.freeze(Object.defineProperty({__proto__:null,default:$m},Symbol.toStringTag,{value:"Module"})),l_=()=>r.jsx(r.Fragment,{children:r.jsx(_r,{buttons:[{text:"One",outline:!0},{text:"Two",outline:!0}]})}),s_=`import React from 'react'
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
`,Am=()=>r.jsx(L,{code:"buttons",Component:l_,Source:s_,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"buttons"})," property can be used to define properties for a set of buttons."]})}),i_=Object.freeze(Object.defineProperty({__proto__:null,default:Am},Symbol.toStringTag,{value:"Module"})),c_=()=>r.jsx(r.Fragment,{children:r.jsx(_r,{outline:!0,className:"buttons border pad-2 bgc-90 bgd-10 bdr-2",buttons:[{text:"One"},{text:"Two"}]})}),u_=`import React from 'react'
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
`,Bm=()=>r.jsx(L,{code:"className",Component:c_,Source:u_,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"className"})," property can be used to set the CSS class for the buttons container element.  The default value is"," ",r.jsx("code",{children:"buttons"}),".  If you want to use the default styles provided by Badger CSS then you should include ",r.jsx("code",{children:"buttons"})," in the value you provide for ",r.jsx("code",{children:"className"})]})}),d_=Object.freeze(Object.defineProperty({__proto__:null,default:Bm},Symbol.toStringTag,{value:"Module"})),p_=()=>r.jsx(r.Fragment,{children:r.jsx(_r,{outline:!0,buttons:[{text:"One"},{text:"Two"},{text:"Three",outline:!1,color:"orange"}]})}),f_=`import React from 'react'
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
`,Im=()=>r.jsx(L,{code:"outline",Component:p_,Source:f_,undent:4,expand:!0,children:r.jsxs("p",{children:["Additional properties passed to the ",r.jsx("code",{children:"Buttons"})," component will be forwarded to each ",r.jsx("code",{children:"Button"})," component.  For example, you can set the ",r.jsx("code",{children:"outline"})," property on the parent",r.jsx("code",{children:"Buttons"})," component so that you don't have to repeat it for each button.  However, individual buttons can override any of these properties."]})}),h_=Object.freeze(Object.defineProperty({__proto__:null,default:Im},Symbol.toStringTag,{value:"Module"})),m_=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Buttons"}),r.jsx(Pm,{}),r.jsxs(it,{tocName:"buttons",children:[r.jsx(re,{title:"Properties"}),r.jsx(Am,{}),r.jsx(Im,{}),r.jsx(Bm,{}),r.jsx($m,{}),r.jsx(re,{title:"Components"}),r.jsx(Mm,{})]})]}),x_=Object.freeze(Object.defineProperty({__proto__:null,default:m_},Symbol.toStringTag,{value:"Module"})),g_=()=>r.jsx(Jv,{text:"I like badgers",onChange:e=>console.log(`Checked: ${e}`)}),v_=`import { CheckboxState } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { CheckboxState } from '@abw/badger-react-ui

const CheckboxStateExample = () =>
  <CheckboxState
    text="I like badgers"
    onChange={checked => console.log(\`Checked: \${checked}\`)}
  />

export default CheckboxStateExample`,zm=()=>r.jsx(L,{code:"CheckboxState",Component:g_,Source:v_,expand:!0,children:r.jsx("div",{children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"CheckboxState"})," function can be used to generate a Checkbox with internal state."]})})}),y_=Object.freeze(Object.defineProperty({__proto__:null,default:zm},Symbol.toStringTag,{value:"Module"})),C_=()=>{const[e,t]=_.useState(!1);return r.jsx(vn,{text:"I like badgers",checked:e,onChange:t})},j_=`import { Checkbox } from '@/src/index.jsx'

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

export default CheckboxExample`,Fm=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Checkbox"})," component renders a checkbox with a label."]}),r.jsx(ye,{Component:C_,code:j_,expand:!0})]}),S_=Object.freeze(Object.defineProperty({__proto__:null,default:Fm},Symbol.toStringTag,{value:"Module"})),b_=()=>{const[e,t]=_.useState(!1);return r.jsx(vn,{text:"I like badgers",checked:e,onChange:t})},__=`import { Checkbox } from '@/src/index.jsx'
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

export default CheckedExample`,Um=()=>r.jsx(L,{code:"checked",Component:b_,Source:__,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"checked"})," property should be passed to indicate if the checkbox is checked (",r.jsx("code",{children:"true"}),") or not (",r.jsx("code",{children:"false"}),")."]})}),w_=Object.freeze(Object.defineProperty({__proto__:null,default:Um},Symbol.toStringTag,{value:"Module"})),k_=()=>{const[e,t]=_.useState(!1);return r.jsx(vn,{checkedText:"I like badgers (well done!)",uncheckedText:"I like badgers (you really should!)",checked:e,onChange:t})},T_=`import { Checkbox } from '@/src/index.jsx'
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

export default CheckedTextExample`,Hm=()=>r.jsx(L,{code:"checkedText / uncheckedText",Component:k_,Source:T_,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"checkedText"})," and ",r.jsx("code",{children:"uncheckedText"})," properties can be used to provide different text for the checked and unchecked states."]})}),E_=Object.freeze(Object.defineProperty({__proto__:null,default:Hm},Symbol.toStringTag,{value:"Module"})),L_=()=>{const[e,t]=_.useState(!1);return r.jsx(vn,{text:"I like badgers",className:"large border",checked:e,onChange:t})},N_=`import { Checkbox } from '@/src/index.jsx'
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

export default ClassName`,Vm=()=>r.jsx(L,{code:"className",Component:L_,Source:N_,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"className"})," property can be used to add a CSS class to the checkbox ",r.jsx("code",{children:"label"})," element."]})}),R_=Object.freeze(Object.defineProperty({__proto__:null,default:Vm},Symbol.toStringTag,{value:"Module"})),O_=()=>{const[e,t]=_.useState(!1);return r.jsx(vn,{disabled:!0,text:"I like badgers",checked:e,onChange:t})},D_=`import { Checkbox } from '@/src/index.jsx'
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

export default DisabledExample`,Wm=()=>r.jsx(L,{code:"disabled",Component:O_,Source:D_,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"disabled"})," property can be set to disable a checkbox."]})}),M_=Object.freeze(Object.defineProperty({__proto__:null,default:Wm},Symbol.toStringTag,{value:"Module"})),P_=()=>{const[e,t]=_.useState(!1);return r.jsx(vn,{text:"I like badgers",checked:e,onChange:t})},$_=`import { Checkbox } from '@/src/index.jsx'
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

export default OnChangeExample`,Zm=()=>r.jsx(L,{code:"onChange",Component:P_,Source:$_,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"onChange"})," property should be used to define a function to handle changes in the state."]})}),A_=Object.freeze(Object.defineProperty({__proto__:null,default:Zm},Symbol.toStringTag,{value:"Module"})),B_=()=>{const[e,t]=_.useState(!1);return r.jsx(vn,{text:"Badger are the best!",checked:e,onChange:t})},I_=`import { Checkbox } from '@/src/index.jsx'
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

export default TextExample`,Gm=()=>r.jsx(L,{code:"text",Component:B_,Source:I_,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"text"})," property should be used to set the text for the checkbox."]})}),z_=Object.freeze(Object.defineProperty({__proto__:null,default:Gm},Symbol.toStringTag,{value:"Module"})),F_=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Checkbox"}),r.jsx(Fm,{}),r.jsxs(it,{tocName:"checkbox",children:[r.jsx(re,{title:"Properties"}),r.jsx(Gm,{}),r.jsx(Um,{}),r.jsx(Hm,{}),r.jsx(Zm,{}),r.jsx(Vm,{}),r.jsx(Wm,{}),r.jsx(re,{title:"Components"}),r.jsx(zm,{})]})]}),U_=Object.freeze(Object.defineProperty({__proto__:null,default:F_},Symbol.toStringTag,{value:"Module"})),H_=()=>r.jsx(r.Fragment,{children:r.jsx(Xt,{text:"Delete",color:"red",iconRight:"trash",onClick:()=>window.alert("Confirmed!")})}),V_=`import { Confirm } from '@/src/index.jsx'

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

export default ConfirmExample`,Km=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Confirm"})," component provides an extra safety net for potentially dangerous operations.  When the user click on the button it then prompts them to confirm or cancel the action."]}),r.jsxs("p",{className:"cols-2 stack-desktop",children:["Additional properties not listed below are forwarded onto the initial button.  For example, you can set the ",r.jsx("code",{children:"text"}),","," ",r.jsx("code",{children:"color"}),", add icons, and so on, just like you would for any other button."]}),r.jsx(ye,{Component:H_,code:V_,expand:!0})]}),W_=Object.freeze(Object.defineProperty({__proto__:null,default:Km},Symbol.toStringTag,{value:"Module"})),Z_=()=>r.jsx(Xt,{text:"Delete",color:"red",cancel:{text:"Go Back",color:"yellow",outline:!1,iconLeft:"angle-left"}}),G_=`import React from 'react'
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

export default CancelExample`,Ym=()=>r.jsx(L,{code:"cancel",Component:Z_,Source:G_,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"cancel"})," property can be used to set properties for the cancel button."]})}),K_=Object.freeze(Object.defineProperty({__proto__:null,default:Ym},Symbol.toStringTag,{value:"Module"})),Y_=()=>r.jsx(Xt,{text:"Delete",color:"red",cancelText:"Nah",cancelColor:"blue",cancelIcon:"angle-left"}),Q_=`import React from 'react'
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

export default CancelExample`,Qm=()=>r.jsx(L,{id:"cancelProps",code:"cancelXXX",Component:Y_,Source:Q_,undent:2,expand:!0,children:r.jsxs("p",{children:["You can also set individual properties for the cancel button",r.jsx("code",{children:"cancelIcon"}),","," ",r.jsx("code",{children:"cancelText"}),","," ",r.jsx("code",{children:"cancelColor"})," and"," ",r.jsx("code",{children:"cancelClass"}),"."]})}),X_=Object.freeze(Object.defineProperty({__proto__:null,default:Qm},Symbol.toStringTag,{value:"Module"})),q_=()=>r.jsx(r.Fragment,{children:r.jsx(Xt,{className:"buttons border pad-2 bgc-90 bgd-10 bdr-2",icon:"trash",color:"red"})}),J_=`import React from 'react'
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
`,Xm=()=>r.jsx(L,{code:"className",Component:q_,Source:J_,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"className"})," property can be used to set the CSS class for the buttons container element.  The default value is"," ",r.jsx("code",{children:"buttons"}),".  If you want to use the default styles provided by Badger CSS then you should include ",r.jsx("code",{children:"buttons"})," in the value you provide for ",r.jsx("code",{children:"className"})]})}),ew=Object.freeze(Object.defineProperty({__proto__:null,default:Xm},Symbol.toStringTag,{value:"Module"})),tw=()=>r.jsx(Xt,{text:"Click to Delete",color:"red"}),nw=`import React from 'react'
import { Confirm } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Confirm
    text="Click to Delete"
    color="red"
  />
/* END */

export default Component
`,qm=()=>r.jsx(L,{code:"color",Component:tw,Source:nw,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"color"})," property can be used to set the color for the initial button."]})}),rw=Object.freeze(Object.defineProperty({__proto__:null,default:qm},Symbol.toStringTag,{value:"Module"})),ow=()=>r.jsx(Xt,{text:"Delete",color:"red",confirm:{text:"Yep, do it!",color:"green",iconRight:"angle-right"}}),aw=`import React from 'react'
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

export default ConfirmExample`,Jm=()=>r.jsx(L,{code:"confirm",Component:ow,Source:aw,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"confirm"})," property can be used to set properties for the confirmation button."]})}),lw=Object.freeze(Object.defineProperty({__proto__:null,default:Jm},Symbol.toStringTag,{value:"Module"})),sw=()=>r.jsx(Xt,{text:"Delete",color:"red",confirmText:"Yep",confirmColor:"green",confirmIcon:"trash"}),iw=`import React from 'react'
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

export default ConfirmProps`,e3=()=>r.jsx(L,{id:"confirmProps",code:"confirmXXX",Component:sw,Source:iw,undent:2,expand:!0,children:r.jsxs("p",{children:["You can also set individual properties for the confirm button",r.jsx("code",{children:"confirmIcon"}),","," ",r.jsx("code",{children:"confirmText"}),","," ",r.jsx("code",{children:"confirmColor"})," and"," ",r.jsx("code",{children:"confirmClass"}),"."]})}),cw=Object.freeze(Object.defineProperty({__proto__:null,default:e3},Symbol.toStringTag,{value:"Module"})),uw=()=>r.jsx(Xt,{text:"Click to Delete",color:"red",iconRight:"trash"}),dw=`import React from 'react'
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
`,t3=()=>r.jsx(L,{code:"iconRight",Component:uw,Source:dw,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"iconRight"})," property can be used to add an icon to the right.  Or ",r.jsx("code",{children:"iconLeft"})," can be used to add an icon to the left. Or just an ",r.jsx("code",{children:"icon"})," if you want an icon without any text."]})}),pw=Object.freeze(Object.defineProperty({__proto__:null,default:t3},Symbol.toStringTag,{value:"Module"})),fw=()=>r.jsx(Xt,{text:"Delete",color:"red",onClick:()=>window.alert("Deleted!")}),hw=`import React from 'react'
import { Confirm } from '@/src/index.jsx'

const OnClickExample = () =>
  /* START */
  <Confirm
    text="Delete"
    color="red"
    onClick={() => window.alert('Deleted!')}
  />
  /* END */

export default OnClickExample`,n3=()=>r.jsx(L,{code:"onClick",Component:fw,Source:hw,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"onClick"})," property should be used to define the handler which will be called when the user confirms the action."]})}),mw=Object.freeze(Object.defineProperty({__proto__:null,default:n3},Symbol.toStringTag,{value:"Module"})),xw=()=>r.jsx(Xt,{text:"Click to Delete"}),gw=`import React from 'react'
import { Confirm } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Confirm
    text="Click to Delete"
  />
/* END */

export default Component
`,r3=()=>r.jsx(L,{code:"text",Component:xw,Source:gw,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"text"})," property can be used to set the text for the initial button."]})}),vw=Object.freeze(Object.defineProperty({__proto__:null,default:r3},Symbol.toStringTag,{value:"Module"})),yw=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Confirm"}),r.jsx(Km,{}),r.jsxs(it,{tocName:"confirm",children:[r.jsx(re,{title:"Properties"}),r.jsx(r3,{}),r.jsx(qm,{}),r.jsx(t3,{}),r.jsx(Xm,{}),r.jsx(Ym,{}),r.jsx(Qm,{}),r.jsx(Jm,{}),r.jsx(e3,{}),r.jsx(re,{title:"Event Handlers"}),r.jsx(n3,{})]})]}),Cw=Object.freeze(Object.defineProperty({__proto__:null,default:yw},Symbol.toStringTag,{value:"Module"})),jw=[{name:"Alan",animal:"Anteater",id:10,role:"admin"},{name:"Bobby",animal:"Badger",id:20,role:"admin"},{name:"Brenda",animal:"Badger",id:30,role:"admin"},{name:"Christina",animal:"Cat",id:40,role:"user"},{name:"Derek",animal:"Dog",id:50,role:"user"},{name:"Delia",animal:"Donkey",id:60,role:"admin"},{name:"Edwin",animal:"Elephant",id:70,role:"admin"},{name:"Frank",animal:"Ferret",id:80,role:"user"},{name:"Felicity",animal:"Fox",id:90,role:"admin"},{name:"Gertrude",animal:"Goat",id:11,role:"admin"},{name:"Hector",animal:"Hamster",id:12,role:"admin"},{name:"Ian",animal:"Iguana",id:13,role:"user"},{name:"Julie",animal:"Jellyfish",id:14,role:"user"},{name:"Kevin",animal:"Koala",id:21,role:"user"},{name:"Lionel",animal:"Llama",id:22,role:"user"},{name:"Mary",animal:"Magpie",id:23,role:"user"},{name:"Nerys",animal:"Narwhal",id:24,role:"user"},{name:"Oliver",animal:"Octopus",id:31,role:"user"},{name:"Penny",animal:"Panda",id:32,role:"admin"},{name:"Quentin",animal:"Quail",id:33,role:"admin"},{name:"Roger",animal:"Raccoon",id:41,role:"user"},{name:"Simon",animal:"Stoat",id:42,role:"user"},{name:"Terry",animal:"Tiger",id:43,role:"user"},{name:"Ursula",animal:"Unicorn",id:101,role:"user"},{name:"Violet",animal:"Vole",id:102,role:"user"},{name:"Willy",animal:"Wombat",id:103,role:"user"},{name:"Xerces",animal:"Xenus",id:201,role:"user"},{name:"Yvonne",animal:"Yaz",id:202,role:"user"},{name:"Zebedee",animal:"Zebra",id:203,role:"user"}],Sw=()=>r.jsx(fC,{color:"brand",rows:jw,columns:"id name animal role",pager:{size:"small"}}),bw=`import { Datatable } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Datatable } from '@abw/badger-react-ui
import { animals } from '../data.js'

const DatatableExample = () => {
  return (
    <Datatable
      color="brand"
      rows={animals}
      columns="id name animal role"
      pager={{ size: 'small' }}
    />
  )
}

export default DatatableExample`,o3=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Datatable"})," component can be used to display, sort, filter and page sets of data."]}),r.jsx(ye,{Component:Sw,code:bw})]}),_w=Object.freeze(Object.defineProperty({__proto__:null,default:o3},Symbol.toStringTag,{value:"Module"})),ww=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Datatable"}),r.jsx(o3,{}),r.jsx(it,{tocName:"datatable",children:r.jsx(re,{title:"Properties"})})]}),kw=Object.freeze(Object.defineProperty({__proto__:null,default:ww},Symbol.toStringTag,{value:"Module"})),Tw=()=>r.jsx(Ue,{summary:"Click to reveal",children:"This is the content that is revealed."}),Ew=`import { Details } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Details } from '@abw/badger-react-ui

const DetailsExample = () =>
  <Details summary="Click to reveal">
    This is the content that is revealed.
  </Details>

export default DetailsExample`,a3=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Details"})," component displays a summary with revealable content using the native HTML ",r.jsx("code",{children:"details"})," element."]}),r.jsx(ye,{Component:Tw,code:Ew})]}),Lw=Object.freeze(Object.defineProperty({__proto__:null,default:a3},Symbol.toStringTag,{value:"Module"})),Nw=()=>r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(Ue,{summary:"Bordered",border:!0,children:"This is the content that is revealed."}),r.jsx(Ue,{summary:"Bordered and Lined",border:!0,lined:!0,children:"This is the content that is revealed."}),r.jsx(Ue,{summary:"Wide Border",border:3,lined:!0,children:"This is the content that is revealed."})]}),Rw=`import React from 'react'
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

export default DetailsExample`,l3=()=>r.jsx(L,{code:"border",Component:Nw,Source:Rw,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"border"})," property can be used to add a CSS class to add a border around the component.  By itself it will add a one pixel border.  You can also set it to an integer (in pixels) for a wider border.  The same border width will also be applied to the line separating the summary and content when the ",r.jsx("code",{children:"lined"})," ","property is used."]})}),Ow=Object.freeze(Object.defineProperty({__proto__:null,default:l3},Symbol.toStringTag,{value:"Module"})),Dw=()=>r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(Ue,{summary:"Blue Border",color:"blue",border:!0,lined:!0,children:"This is the content that is revealed."}),r.jsx(Ue,{summary:"Blue Shaded",color:"blue",shaded:!0,lined:!0,border:!0,children:"This is the content that is revealed."})]}),Mw=`import React from 'react'
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

export default DetailsExample`,s3=()=>r.jsx(L,{code:"color",Component:Dw,Source:Mw,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"color"})," property can be used to set the color range. It is most commonly used in conjunction with the ",r.jsx("code",{children:"border"}),","," ",r.jsx("code",{children:"lined"})," and ",r.jsx("code",{children:"shaded"})," properties."]})}),Pw=Object.freeze(Object.defineProperty({__proto__:null,default:s3},Symbol.toStringTag,{value:"Module"})),$w=()=>r.jsx("div",{className:"grid-1 gap-4",children:r.jsx(Ue,{summary:"This is the summary",content:"This is the content that is revealed."})}),Aw=`import React from 'react'
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

export default DetailsExample`,i3=()=>r.jsx(L,{code:"content",Component:$w,Source:Aw,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"content"})," property can be used as a short-cut to set the body content for simple cases."]})}),Bw=Object.freeze(Object.defineProperty({__proto__:null,default:i3},Symbol.toStringTag,{value:"Module"})),Iw=()=>r.jsx(Ue,{summary:"Lined Details",lined:!0,children:"This is the content that is revealed."}),zw=`import React from 'react'
import { Details } from '@/src/index.jsx'

const DetailsExample = () =>
  /* START */
  <Details summary="Lined Details" lined>
    This is the content that is revealed.
  </Details>
  /* END */

export default DetailsExample`,c3=()=>r.jsx(L,{code:"lined",Component:Iw,Source:zw,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"lined"})," property can be used to add a CSS class to add a line between the summary and content."]})}),Fw=Object.freeze(Object.defineProperty({__proto__:null,default:c3},Symbol.toStringTag,{value:"Module"})),Uw=()=>r.jsx("div",{className:"grid-1 gap-4",children:r.jsx(Ue,{summary:"This is the summary",open:!0,children:"This is the content that is revealed."})}),Hw=`import React from 'react'
import { Details } from '@/src/index.jsx'

const DetailsExample = () =>
  <div className="grid-1 gap-4">
    {/* START */}
    <Details summary="This is the summary" open>
      This is the content that is revealed.
    </Details>
    {/* END */}
  </div>

export default DetailsExample`,u3=()=>r.jsx(L,{code:"open",Component:Uw,Source:Hw,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"open"})," property can be set to make the details initially open."]})}),Vw=Object.freeze(Object.defineProperty({__proto__:null,default:u3},Symbol.toStringTag,{value:"Module"})),Ww=()=>r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(Ue,{summary:"Border Radius",border:!0,lined:!0,radius:2,children:"This is the content that is revealed."}),r.jsx(Ue,{summary:"Border Radius",border:!0,lined:!0,radius:4,children:"This is the content that is revealed."})]}),Zw=`import React from 'react'
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

export default DetailsExample`,d3=()=>r.jsx(L,{code:"radius",Component:Ww,Source:Zw,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"radius"})," property can be used to set the border radius. It should be an integer in units of 0.25rem."]})}),Gw=Object.freeze(Object.defineProperty({__proto__:null,default:d3},Symbol.toStringTag,{value:"Module"})),Kw=()=>r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(Ue,{summary:"Shaded",shaded:!0,children:"This is the content that is revealed."}),r.jsx(Ue,{summary:"Shaded and Border",border:!0,shaded:!0,children:"This is the content that is revealed."}),r.jsx(Ue,{summary:"Shaded, Lined and Border",border:!0,shaded:!0,lined:!0,children:"This is the content that is revealed."})]}),Yw=`import React from 'react'
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

export default DetailsExample`,p3=()=>r.jsx(L,{code:"shaded",Component:Kw,Source:Yw,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"shaded"})," property can be used to add shading."]})}),Qw=Object.freeze(Object.defineProperty({__proto__:null,default:p3},Symbol.toStringTag,{value:"Module"})),Xw=()=>r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(Ue,{summary:"Shadow 1",border:!0,shaded:!0,shadow:1,children:"This is the content that is revealed."}),r.jsx(Ue,{summary:"Shadow 3",border:!0,shaded:!0,shadow:3,children:"This is the content that is revealed."}),r.jsx(Ue,{summary:"Shadow 5",border:!0,shaded:!0,shadow:5,children:"This is the content that is revealed."})]}),qw=`import React from 'react'
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

export default DetailsExample`,f3=()=>r.jsx(L,{code:"shadow",Component:Xw,Source:qw,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"shadow"})," property can be used to add a drop shadow. This can be any integer from 1 to 5."]})}),Jw=Object.freeze(Object.defineProperty({__proto__:null,default:f3},Symbol.toStringTag,{value:"Module"})),ek=()=>r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(Ue,{summary:"This is the summary",children:"This is the content that is revealed."}),r.jsx(Ue,{border:!0,lined:!0,summary:r.jsxs("div",{className:"wide flex space middle pad-r-2",children:[r.jsx("div",{children:"Control Panel"}),r.jsx(Y,{name:"cog"})]}),children:"This is the content that is revealed."})]}),tk=`import React from 'react'
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

export default DetailsExample`,h3=()=>r.jsx(L,{code:"summary",Component:ek,Source:tk,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"summary"})," property is used to set the summary text. It can be a text string or any JSX content."]})}),nk=Object.freeze(Object.defineProperty({__proto__:null,default:h3},Symbol.toStringTag,{value:"Module"})),rk=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Details"}),r.jsx(a3,{}),r.jsxs(it,{tocName:"details",children:[r.jsx(re,{title:"Properties"}),r.jsx(h3,{}),r.jsx(i3,{}),r.jsx(u3,{}),r.jsx(c3,{}),r.jsx(l3,{}),r.jsx(d3,{}),r.jsx(p3,{}),r.jsx(f3,{}),r.jsx(s3,{}),r.jsx(re,{title:"CSS Classes"}),r.jsxs(F,{code:"className",children:["Set a CSS class for the ",r.jsx("code",{children:"details"})," container element."]}),r.jsxs(F,{code:"summaryClass",children:["Set a CSS class for the ",r.jsx("code",{children:"summary"})," element."]}),r.jsxs(F,{code:"contentClass",children:["Set a CSS class for the content ",r.jsx("code",{children:"div"})," element."]}),r.jsx(re,{title:"Components"}),r.jsx(F,{code:"Summary",id:"Summary-component",children:"Renders the summary element."}),r.jsx(F,{code:"Content",id:"Content=component",children:"Renders the content."})]})]}),ok=Object.freeze(Object.defineProperty({__proto__:null,default:rk},Symbol.toStringTag,{value:"Module"})),ak=()=>r.jsx(st,{text:"Dropdown Menu",options:["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger","Colin Camel","David Donkey","Eddie Elephant","Franky Ferret","Gina Goat","Helen Horse","Ian Iguana","Juliet Jackdaw","Kevin Kangaroo","Linda Llama","Mike Monkey"]}),lk=`import { Dropdown } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Dropdown } from '@abw/badger-react-ui

const DropdownExample = () => {
  return (
    <Dropdown
      text='Dropdown Menu'
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

export default DropdownExample`,m3=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Dropdown"})," component generates a dropdown menu"]}),r.jsxs("div",{className:"cols-2 stack-desktop",children:[r.jsx("p",{children:"The default behaviour is to open the dropdown menu when the user clicks on the trigger."}),r.jsxs("p",{children:["Keyboard navigation is also supported.  The user can ",r.jsx("code",{children:"TAB"})," ","to the trigger and then press ",r.jsx("code",{children:"SPACE"}),", ",r.jsx("code",{children:"ENTER"}),","," ",r.jsx("code",{children:"DOWN"})," or ",r.jsx("code",{children:"UP"})," to open the menu."]}),r.jsxs("p",{children:["Once the menu is open, the ",r.jsx("code",{children:"DOWN"})," and ",r.jsx("code",{children:"UP"})," keys"," ","can be used to select menu items, ",r.jsx("code",{children:"ENTER"})," or"," ",r.jsx("code",{children:"SPACE"})," will select the current item and ",r.jsx("code",{children:"ESCAPE"})," ","will close the menu."]})]}),r.jsx(ye,{Component:ak,code:lk})]}),sk=Object.freeze(Object.defineProperty({__proto__:null,default:m3},Symbol.toStringTag,{value:"Module"})),ik=()=>r.jsx(st,{text:"Dropdown Menu",iconLeft:"angle-down",options:[{text:"Item One"},{text:"Item Two"},{text:"Item Three"}]}),ck=`import React from 'react'
import { Dropdown } from '@/src/index.jsx'

// PRETEND: import { Dropdown } from '@abw/badger-react-ui

const DropdownExample = () =>
  /* START */
  <Dropdown
    text='Dropdown Menu'
    iconLeft='angle-down'
    options={[
      { text: 'Item One'   },
      { text: 'Item Two'   },
      { text: 'Item Three' },
    ]}
  />
  /* END */

export default DropdownExample`,x3=()=>r.jsx(L,{code:"iconLeft",Component:ik,Source:ck,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"iconLeft"})," property can used to define an icon for the left side of the trigger.  The ",r.jsx("code",{children:"iconLeftClass"})," can be used to add a CSS class for it."]})}),uk=Object.freeze(Object.defineProperty({__proto__:null,default:x3},Symbol.toStringTag,{value:"Module"})),dk=()=>r.jsx(st,{text:"Dropdown Menu",iconLeft:"angle-right",iconLeftRotate:90,options:[{text:"Item One"},{text:"Item Two"},{text:"Item Three"}]}),pk=`import React from 'react'
import { Dropdown } from '@/src/index.jsx'

// PRETEND: import { Dropdown } from '@abw/badger-react-ui

const DropdownExample = () =>
  /* START */
  <Dropdown
    text='Dropdown Menu'
    iconLeft='angle-right'
    iconLeftRotate={90}
    options={[
      { text: 'Item One'   },
      { text: 'Item Two'   },
      { text: 'Item Three' },
    ]}
  />
  /* END */

export default DropdownExample`,g3=()=>r.jsx(L,{code:"iconLeftRotate",Component:dk,Source:pk,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"iconLeftRotate"})," property can used to specify the rotation (in degrees) of the icon when the dropdown is open."]})}),fk=Object.freeze(Object.defineProperty({__proto__:null,default:g3},Symbol.toStringTag,{value:"Module"})),hk=()=>r.jsx(st,{right:!0,text:"Dropdown Menu",iconRight:"angle-down",options:[{text:"Item One"},{text:"Item Two"},{text:"Item Three"}]}),mk=`import React from 'react'
import { Dropdown } from '@/src/index.jsx'

// PRETEND: import { Dropdown } from '@abw/badger-react-ui

const DropdownExample = () =>
  /* START */
  <Dropdown
    right
    text='Dropdown Menu'
    iconRight='angle-down'
    options={[
      { text: 'Item One'   },
      { text: 'Item Two'   },
      { text: 'Item Three' },
    ]}
  />
  /* END */

export default DropdownExample`,v3=()=>r.jsx(L,{code:"iconRight",Component:hk,Source:mk,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"iconRight"})," property can used to define an icon for the left side of the trigger.  The ",r.jsx("code",{children:"iconRightClass"})," can be used to add a CSS class for it."]})}),xk=Object.freeze(Object.defineProperty({__proto__:null,default:v3},Symbol.toStringTag,{value:"Module"})),gk=()=>r.jsx(st,{text:"Dropdown Menu",iconRight:"angle-left",iconRightRotate:-90,options:[{text:"Item One"},{text:"Item Two"},{text:"Item Three"}]}),vk=`import React from 'react'
import { Dropdown } from '@/src/index.jsx'

// PRETEND: import { Dropdown } from '@abw/badger-react-ui

const DropdownExample = () =>
  /* START */
  <Dropdown
    text='Dropdown Menu'
    iconRight='angle-left'
    iconRightRotate={-90}
    options={[
      { text: 'Item One'   },
      { text: 'Item Two'   },
      { text: 'Item Three' },
    ]}
  />
  /* END */

export default DropdownExample`,y3=()=>r.jsx(L,{code:"iconRightRotate",Component:gk,Source:vk,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"iconRightRotate"})," property can used to specify the rotation (in degrees) of the icon when the dropdown is open."]})}),yk=Object.freeze(Object.defineProperty({__proto__:null,default:y3},Symbol.toStringTag,{value:"Module"})),Ck=()=>r.jsx(st,{text:"Dropdown Menu",onSelect:e=>alert(`You selected: ${e.text}`),options:[{text:"Item One"},{text:"Item Two"},{text:"Item Three"}]}),jk=`import React from 'react'
import { Dropdown } from '@/src/index.jsx'

const DropdownExample = () =>
  /* START */
  <Dropdown
    text='Dropdown Menu'
    onSelect={item => alert(\`You selected: \${item.text}\`)}
    options={[
      { text: 'Item One'   },
      { text: 'Item Two'   },
      { text: 'Item Three' },
    ]}
  />
  /* END */

export default DropdownExample`,C3=()=>r.jsx(L,{code:"onSelect",Component:Ck,Source:jk,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"onSelect"})," property should be used to define a handler which will be called when an item is selected, either by being clicked on or by keyboard selection.  The handler will be passed the data for the item that was selected."]})}),Sk=Object.freeze(Object.defineProperty({__proto__:null,default:C3},Symbol.toStringTag,{value:"Module"})),bk=()=>r.jsx(st,{openOnHover:!0,text:"Dropdown Menu",options:[{text:"Item One"},{text:"Item Two"},{text:"Item Three"}]}),_k=`import React from 'react'
import { Dropdown } from '@/src/index.jsx'

// PRETEND: import { Dropdown } from '@abw/badger-react-ui

const DropdownExample = () =>
  /* START */
  <Dropdown
    openOnHover={true}
    text='Dropdown Menu'
    options={[
      { text: 'Item One'   },
      { text: 'Item Two'   },
      { text: 'Item Three' },
    ]}
  />
  /* END */

export default DropdownExample`,j3=()=>r.jsx(L,{code:"openOnHover",Component:bk,Source:_k,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"openOnHover"})," property can added to make the menu open when the mouse hovers over the trigger."]})}),wk=Object.freeze(Object.defineProperty({__proto__:null,default:j3},Symbol.toStringTag,{value:"Module"})),kk=()=>r.jsx(st,{text:"Simple Options",options:["Hello","World",10,11]}),Tk=`import React from 'react'
import { Dropdown } from '@/src/index.jsx'

const DropdownExample = () =>
  /* START */
  <Dropdown
    text='Simple Options'
    options={[
      'Hello',
      'World',
      10,
      11,
    ]}
  />
  /* END */

export default DropdownExample`,Ek=()=>r.jsx(st,{text:"Option Separators",options:["One","Two","Three",{separator:!0},"Eleven","Twelve","Thirteen",{separator:!0},"One Hundred","Two Hundred","Three Hundred"]}),Lk=`import React from 'react'
import { Dropdown } from '@/src/index.jsx'

const DropdownExample = () =>
  /* START */
  <Dropdown
    text='Option Separators'
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

export default DropdownExample`,Nk=()=>r.jsx(st,{text:"Object Options",options:[{text:"Star",iconLeft:"star"},{text:"Heart",iconRight:"heart",className:"text-right"},{text:"Move",iconLeft:"angle-left",iconRight:"angle-right"},{text:r.jsxs("div",{className:"flex space small",children:[r.jsx("div",{children:"Foo"}),r.jsx("div",{children:"Bar"})]})}]}),Rk=`import React from 'react'
import { Dropdown } from '@/src/index.jsx'

const DropdownExample = () =>
  /* START */
  <Dropdown
    text='Object Options'
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

export default DropdownExample`,Ok=()=>r.jsx(st,{text:"Option Headings",options:[{heading:"Single Digit Numbers"},"One","Two","Three",{heading:"Double Digit Numbers"},"Eleven","Twelve","Thirteen",{heading:"Triple Digit Numbers"},"One Hundred","Two Hundred","Three Hundred"]}),Dk=`import React from 'react'
import { Dropdown } from '@/src/index.jsx'

const DropdownExample = () =>
  /* START */
  <Dropdown
    text='Option Headings'
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

export default DropdownExample`,Mk=()=>r.jsx(st,{text:"Disabled Options",options:[{text:"Disabled #1",disabled:!0},{text:"Enabled #2"},{text:"Disabled #3",disabled:!0},{text:"Enabled #4"},{text:"Disabled #5",disabled:!0}]}),Pk=`import React from 'react'
import { Dropdown } from '@/src/index.jsx'

const DropdownExample = () =>
  /* START */
  <Dropdown
    text='Disabled Options'
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

export default DropdownExample`,S3=()=>r.jsxs(F,{code:"options",children:[r.jsxs("div",{className:"cols-2 stack-desktop mar-b-4",children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"options"})," property should be used to define an array of options to display in the menu."]}),r.jsx("p",{children:"For simple cases, each element in the array can be a text string or numerical value."})]}),r.jsx(ye,{Component:kk,code:Tk,caption:"options",expand:!1,undent:2}),r.jsxs("div",{className:"cols-2 stack-desktop mar-b-4",children:[r.jsxs("p",{children:["An element in the ",r.jsx("code",{children:"options"})," array can also be an object. It should contain a ",r.jsx("code",{children:"text"})," property which can be a string or JSX fragment. A ",r.jsx("code",{children:"className"})," can be included to add a CSS class to the option."]}),r.jsxs("p",{children:["The content for an element is rendered using the ",r.jsx("code",{children:"WithIcon"})," ","component from"," ",r.jsx("a",{href:"https://abw.github.io/badger-icon/",children:"Badger Icon"})," allowing you to include ",r.jsx("code",{children:"iconLeft"})," and ",r.jsx("code",{children:"iconRight"})," properties to add icons to either side, along with ",r.jsx("code",{children:"iconLeftClass"})," and"," ",r.jsx("code",{children:"iconRightClass"})," to set CSS classes for those icons."]})]}),r.jsx(ye,{Component:Nk,code:Rk,caption:"options",expand:!1,undent:2}),r.jsx("div",{className:"cols-2 stack-desktop mar-b-4",children:r.jsxs("p",{children:["An object in the ",r.jsx("code",{children:"options"})," array can have a"," ",r.jsx("code",{children:"disabled"})," property set to ",r.jsx("code",{children:"true"})," to disable the option."]})}),r.jsx(ye,{Component:Mk,code:Pk,caption:"options",expand:!1,undent:2}),r.jsx("div",{className:"cols-2 stack-desktop mar-b-4",children:r.jsxs("p",{children:["An object in the ",r.jsx("code",{children:"options"})," array can have a"," ",r.jsx("code",{children:"separator"})," property set to ",r.jsx("code",{children:"true"})," to create a separator."]})}),r.jsx(ye,{Component:Ek,code:Lk,caption:"options",expand:!1,undent:2}),r.jsx("div",{className:"cols-2 stack-desktop mar-b-4",children:r.jsxs("p",{children:["An object in the ",r.jsx("code",{children:"options"})," array can have a"," ",r.jsx("code",{children:"heading"})," property to create a section heading."]})}),r.jsx(ye,{Component:Ok,code:Dk,caption:"options",expand:!1,undent:2})]}),$k=Object.freeze(Object.defineProperty({__proto__:null,default:S3},Symbol.toStringTag,{value:"Module"})),Ak=()=>r.jsx(st,{right:!0,text:"Dropdown Menu",options:[{text:"Item One"},{text:"Item Two"},{text:"Item Three"}]}),Bk=`import React from 'react'
import { Dropdown } from '@/src/index.jsx'

// PRETEND: import { Dropdown } from '@abw/badger-react-ui

const DropdownExample = () =>
  /* START */
  <Dropdown
    right
    text='Dropdown Menu'
    options={[
      { text: 'Item One'   },
      { text: 'Item Two'   },
      { text: 'Item Three' },
    ]}
  />
  /* END */

export default DropdownExample`,b3=()=>r.jsx(L,{code:"right",Component:Ak,Source:Bk,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"right"})," property can added to align the dropdown menu to the right edge of the trigger"]})}),Ik=Object.freeze(Object.defineProperty({__proto__:null,default:b3},Symbol.toStringTag,{value:"Module"})),zk=()=>r.jsx(st,{text:"The Trigger Text",options:["Item One","Item Two","Item Three"]}),Fk=`import React from 'react'
import { Dropdown } from '@/src/index.jsx'

const DropdownExample = () =>
  /* START */
  <Dropdown
    text='The Trigger Text'
    options={[
      'Item One',
      'Item Two',
      'Item Three',
    ]}
  />
  /* END */

export default DropdownExample`,_3=()=>r.jsx(L,{code:"text",Component:zk,Source:Fk,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"text"})," property should be used to define the text for the trigger."]})}),Uk=Object.freeze(Object.defineProperty({__proto__:null,default:_3},Symbol.toStringTag,{value:"Module"})),Hk=()=>r.jsx(st,{wide:!0,text:"Dropdown Menu",options:[{text:"Item One"},{text:"Item Two"},{text:"Item Three"}]}),Vk=`import React from 'react'
import { Dropdown } from '@/src/index.jsx'

// PRETEND: import { Dropdown } from '@abw/badger-react-ui

const DropdownExample = () =>
  /* START */
  <Dropdown
    wide
    text='Dropdown Menu'
    options={[
      { text: 'Item One'   },
      { text: 'Item Two'   },
      { text: 'Item Three' },
    ]}
  />
  /* END */

export default DropdownExample`,w3=()=>r.jsx(L,{code:"wide",Component:Hk,Source:Vk,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"wide"})," property can added to make the menu expand to the full width of the container."]})}),Wk=Object.freeze(Object.defineProperty({__proto__:null,default:w3},Symbol.toStringTag,{value:"Module"})),ya=({children:e,align:t="top"})=>r.jsx("div",{className:`grid-2 gap-h-8 stack-desktop ${t}`,style:{"--prose-width":"100%"},children:e}),Zk=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Dropdown"}),r.jsx(m3,{}),r.jsxs(it,{tocName:"dropdown",children:[r.jsx(re,{title:"Properties"}),r.jsx(_3,{}),r.jsx(S3,{}),r.jsx(C3,{}),r.jsx(j3,{}),r.jsx(b3,{}),r.jsx(w3,{}),r.jsx(x3,{}),r.jsx(g3,{}),r.jsx(v3,{}),r.jsx(y3,{}),r.jsxs(ya,{children:[r.jsxs("div",{className:"flow",children:[r.jsx(re,{title:"CSS Classes"}),r.jsxs(F,{code:"className",children:["Used to set the CSS class for the dropdown container.  The default value is ",r.jsx("code",{children:"dropdown"}),"."]}),r.jsxs(F,{code:"openClass",children:["Used to set the CSS class added to the dropdown container when the menu is open.  The default value is ",r.jsx("code",{children:"open"}),"."]}),r.jsxs(F,{code:"closedClass",children:["Used to set the CSS class added to the dropdown container when the menu is closed.  The default value is ",r.jsx("code",{children:"closed"}),"."]}),r.jsxs(F,{code:"triggerClass",children:["Used to set the CSS class added to the dropdown trigger. The default value is ",r.jsx("code",{children:"trigger"}),"."]}),r.jsxs(F,{code:"menuClass",children:["Used to set the CSS class added to the dropdown menu container. The default value is ",r.jsx("code",{children:"menu border bdr-1"}),".  The"," ",r.jsx("code",{children:"border"})," utility class adds a border and"," ",r.jsx("code",{children:"bdr-1"})," sets the border radius to 1 unit (0.25rem or 4px)."]}),r.jsxs(F,{code:"optionClass",children:["Used to set the CSS class added to each dropdown menu item. The default value is ",r.jsx("code",{children:"item no-hover"}),".  The"," ",r.jsx("code",{children:"no-hover"})," class suppresses the hover styles that would usually be applied to menu items.  Instead the"," ",r.jsx("code",{children:"active"})," class is added to the active item, selected either by hovering over it or by keyboard navigation."]}),r.jsxs(F,{code:"separatorClass",children:["Used to set the CSS class added to the dropdown menu separator. The default value is ",r.jsx("code",{children:"separator"}),"."]})]}),r.jsxs("div",{className:"flow",children:[r.jsx(re,{title:"Components"}),r.jsxs(F,{code:"Trigger",id:"Trigger-component",children:["Renders the dropdown menu trigger.  Defaults to ",r.jsx("code",{children:"DropdownTrigger"}),"."]}),r.jsxs(F,{code:"Menu",id:"Menu-component",children:["Renders the dropdown menu.  Defaults to ",r.jsx("code",{children:"DropdownMenu"}),"."]}),r.jsxs(F,{code:"Option",id:"Option-component",children:["Renders each dropdown menu option.  Defaults to ",r.jsx("code",{children:"DropdownOption"}),"."]}),r.jsxs(F,{code:"Separator",id:"Separator-component",children:["Renders a separator between menu items.  Defaults to ",r.jsx("code",{children:"DropdownSeparator"}),"."]})]})]})]})]}),Gk=Object.freeze(Object.defineProperty({__proto__:null,default:Zk},Symbol.toStringTag,{value:"Module"})),Kk=()=>r.jsx(Y,{name:"check"}),Yk=`import React from 'react'
import { Icon } from '@/src/index.jsx'

{/* START */}
// PRETEND: import { Icon } from '@abw/badger-react-ui'

const IconExample = () =>
  <Icon name="check"/>

export default IconExample
`,Qk=k9(0,100,5),pl=({name:e,stop:t,setStop:n,disabled:o=!1})=>r.jsxs("select",{name:e,required:!0,value:t,onChange:a=>n(a.target.value),disabled:o,children:[r.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Select Stop"}),r.jsx("option",{value:"",children:"None"}),Qk.map(a=>r.jsx("option",{value:a,children:a},a))]}),Xk=()=>{const[e,t]=_.useState(0),[n,o]=_.useState({name:"bars"}),a=c=>()=>{o(u=>({...u,[c]:!u[c]})),t(u=>u+1)},l=c=>u=>{o(d=>({...d,[c]:u})),t(d=>d+1)},i=`<Icon
  ${Jk(n)}
/>`;return r.jsxs("div",{className:"example grid-2 gap-8 stack-desktop",children:[r.jsxs("div",{children:[r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Output"}),r.jsx("div",{className:"output mar-b-8",children:r.jsx(eT,{options:n},e)})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Markup"}),r.jsx(Rn,{code:i,language:"html",expand:!0})]})]}),r.jsx(qk,{options:n,setOption:l,toggleOption:a})]})},qk=({options:e,setOption:t})=>{const n=t("name"),o=t("size"),a=t("color"),l=t("foreground"),s=t("background"),i=t("foregroundDark"),c=t("backgroundDark");return r.jsxs("div",{children:[r.jsxs("div",{className:"grid-3 gap-4 stack-mobile top",children:[r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Icon Name"}),r.jsx(Cc,{icon:e.name,setIcon:n})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Size"}),r.jsx(Uh,{size:e.size,setSize:o})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Color"}),r.jsx(Fh,{color:e.color,setColor:a,disabled:e.type})]})]}),r.jsxs("div",{className:"grid-2 gap-4 gap-v-0 stack-mobile top",children:[r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Foreground Stop"}),r.jsx(pl,{stop:e.foreground,setStop:l})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Background Stop"}),r.jsx(pl,{stop:e.background,setStop:s})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Foreground Dark"}),r.jsx(pl,{stop:e.foregroundDark,setStop:i})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Background Dark"}),r.jsx(pl,{stop:e.backgroundDark,setStop:c})]})]})]})},k3=e=>{const t=["name","size"].filter(o=>e[o]).reduce((o,a)=>(o[a]=e[a],o),{}),n=["color","foreground","background","foregroundDark","backgroundDark"].map(o=>e[o]||"").join("-");return n.length>4&&(t.color=n.replace(/-*$/,"")),t},Jk=e=>{const t=k3(e);return Object.entries(t).map(([n,o])=>`${n}="${o}"`).join(`
  `)},eT=({options:e})=>r.jsx(Y,{...k3(e)}),T3=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Icon"})," component can be used to render SVG icons. The functionality is imported from"," ",r.jsx("a",{href:"https://abw.github.io/badger-icon/",children:"Badger Icon"})," with some extra bells and whistles."]}),r.jsx(ye,{Component:Kk,code:Yk,expand:!0}),r.jsx("h2",{children:"Demo"}),r.jsx(Xk,{})]}),tT=Object.freeze(Object.defineProperty({__proto__:null,default:T3},Symbol.toStringTag,{value:"Module"})),E3=()=>r.jsxs(F,{code:"IconLibrary",children:[r.jsxs("p",{children:["The default set of icons is defined as ",r.jsx("code",{children:"IconLibrary"}),". The ",r.jsx("code",{children:"addIcon()"})," and ",r.jsx("code",{children:"addIcons()"})," function are provided for adding icons to the library."]}),r.jsx("div",{className:"grid-fill gap-4 mar-t-8",children:Object.keys(Ra.icons).map(e=>r.jsxs("div",{className:"text-center bgc-100 bgd-0 fgc-10 fgd-90 pad-4 shadow-2",children:[r.jsx(Y,{name:e,className:"x3"}),r.jsx("div",{className:"small mar-t-4",children:e})]},e))})]}),nT=Object.freeze(Object.defineProperty({__proto__:null,default:E3},Symbol.toStringTag,{value:"Module"})),rT=()=>r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"flex gap-2 middle",children:[r.jsx(Y,{name:"check",className:"smallest"}),r.jsx(Y,{name:"check",className:"smaller"}),r.jsx(Y,{name:"check",className:"small"}),r.jsx(Y,{name:"check"}),r.jsx(Y,{name:"check",className:"large"}),r.jsx(Y,{name:"check",className:"larger"}),r.jsx(Y,{name:"check",className:"largest"})]}),r.jsxs("div",{className:"flex gap-2 mar-t-4",children:[r.jsx(Y,{name:"check",className:"larger green fgc-50"}),r.jsx(Y,{name:"cross",className:"larger red fgc-50"})]})]}),oT=`import React from 'react'
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

export default Component`,L3=()=>r.jsx(L,{code:"className",Component:rT,Source:oT,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"className"})," property can be used to set a CSS class."]})}),aT=Object.freeze(Object.defineProperty({__proto__:null,default:L3},Symbol.toStringTag,{value:"Module"})),lT=()=>r.jsxs("div",{className:"flex gap-2 x2",children:[r.jsx(Y,{name:"check",color:"green-50"}),r.jsx(Y,{name:"check",color:"green-70-30"}),r.jsx(Y,{name:"check",color:"green-70--30"}),r.jsx(Y,{name:"check",color:"green-70-30-30-70"})]}),sT=`import React from 'react'
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

export default Component`,N3=()=>r.jsxs(L,{code:"color",Component:lT,Source:sT,undent:2,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"color"})," property is a short-cut to set the color.  This adds the color to the CSS class."]}),r.jsxs("p",{children:["The ",r.jsx("code",{children:"color"})," can be be comprised of up to 5 elements separated by hyphens.  The first is the color range, e.g. ",r.jsx("code",{children:"red"}),","," ",r.jsx("code",{children:"green"}),", ",r.jsx("code",{children:"blue"}),", etc.  The second is the stop number for the foreground.  This is an integer from 0 (darkest) to 100 (lightest) in steps of 5.  The third is the stop number for the background.  The remaining two numbers are stops for the foreground and background colors in dark mode."]})]}),iT=Object.freeze(Object.defineProperty({__proto__:null,default:N3},Symbol.toStringTag,{value:"Module"})),cT=()=>r.jsxs("div",{className:"flex gap-2 x2",children:[r.jsx(Y,{name:"bars"}),r.jsx(Y,{name:"check"}),r.jsx(Y,{name:"cross"}),r.jsx(Y,{name:"arrow"}),r.jsx(Y,{name:"arrow-right"}),r.jsx(Y,{name:"arrow-down-thicker.red.fgc-50"})]}),uT=`import React from 'react'
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

export default Component`,R3=()=>r.jsxs(L,{code:"name",Component:cT,Source:uT,undent:2,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"name"})," property can be used to select an icon from the default icon library."]}),r.jsx("p",{children:"Additional modifiers and classes can be added to the name to apply styles and transformations.  See the Badger Icon documentation for further details."})]}),dT=Object.freeze(Object.defineProperty({__proto__:null,default:R3},Symbol.toStringTag,{value:"Module"})),pT=()=>r.jsxs("div",{className:"flex gap-2",children:[r.jsx(Y,{className:"x3",path:"M448,96L448,416C448,434 434,448 416,448L96,448C78,448 64,434 64,416L64,96C64,78 78,64 96,64L416,64C434,64 448,78 448,96ZM384,128L128,128L128,384L384,384L384,128Z"}),r.jsx(Y,{className:"x3",path:"M21,5L21,20C21,20 20,21 20,21L5,21C4,21 3,20 3,20L3,5C3,4 4,3 5,3L20,3C20,3 21,4 21,5ZM18,6L6,6L6,18L18,18L18,6Z",width:24,height:24})]}),fT=`import React from 'react'
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

export default Component`,O3=()=>r.jsx(L,{code:"path",Component:pT,Source:fT,undent:2,expand:!0,children:r.jsxs("p",{children:["You can specify the data for a path.  The default viewbox is assumed to be 512px wide and 512px high.  You can set the ",r.jsx("code",{children:"width"})," and"," ",r.jsx("code",{children:"height"})," properties to change that."]})}),hT=Object.freeze(Object.defineProperty({__proto__:null,default:O3},Symbol.toStringTag,{value:"Module"})),mT=()=>r.jsxs("div",{className:"flex gap-2",children:[r.jsx(Y,{name:"check",size:"smallest"}),r.jsx(Y,{name:"check",size:"smaller"}),r.jsx(Y,{name:"check",size:"small"}),r.jsx(Y,{name:"check",size:"medium"}),r.jsx(Y,{name:"check",size:"large"}),r.jsx(Y,{name:"check",size:"larger"}),r.jsx(Y,{name:"check",size:"largest"})]}),xT=`import React from 'react'
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

export default Component`,D3=()=>r.jsx(L,{code:"size",Component:mT,Source:xT,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"size"})," property is a short-cut to set the size.  This adds the size to the CSS class."]})}),gT=Object.freeze(Object.defineProperty({__proto__:null,default:D3},Symbol.toStringTag,{value:"Module"})),vT=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Icon"}),r.jsx(T3,{}),r.jsxs(it,{tocName:"icon",children:[r.jsx(re,{title:"Properties"}),r.jsx(R3,{}),r.jsx(L3,{}),r.jsx(D3,{}),r.jsx(N3,{}),r.jsx(O3,{}),r.jsx(re,{title:"Components"}),r.jsx(E3,{})]})]}),yT=Object.freeze(Object.defineProperty({__proto__:null,default:vT},Symbol.toStringTag,{value:"Module"})),CT=()=>{const[e,t]=_.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsxs(Ut,{open:e,className:"max-width-30rem",children:[r.jsx("header",{children:r.jsx("h3",{children:"A Modal!"})}),r.jsxs("p",{children:["This is a modal.  The content is rendered as an ",r.jsx("code",{children:"article"}),".  You can include"," ",r.jsx("code",{children:"header"})," and ",r.jsx("code",{children:"footer"})," ","sections if you want, although they're entirely optional."]}),r.jsx("footer",{children:r.jsx(D,{color:"red",text:"Close Modal",onClick:()=>t(!1)})})]}),r.jsx(D,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},jT=`import { Modal, Button } from '@/src/index.jsx'

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

export default ModalExample`,M3=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Modal"})," component can be used to create an overlaid modal dialog."]}),r.jsxs("p",{className:"cols-2 stack-desktop",children:["The ",r.jsx("code",{children:"open"})," property should be used to indicate if the modal is open or not. Any child elements will be rendered inside the modal body."]}),r.jsx(ye,{Component:CT,code:jT,expand:!0})]}),ST=Object.freeze(Object.defineProperty({__proto__:null,default:M3},Symbol.toStringTag,{value:"Module"})),bT=()=>{const{show:e,hide:t,Modal:n}=AC();return r.jsxs(r.Fragment,{children:[r.jsxs(n,{children:[r.jsx("p",{children:"Modal State"}),r.jsx(D,{color:"red",text:"Close Modal",onClick:t})]}),r.jsx(D,{color:"green",text:"Open Modal",onClick:e})]})},_T=`import { ModalState, Button } from '@/src/index.jsx'
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

export default ModalStateExample`,P3=()=>r.jsx(L,{code:"ModalState",Component:bT,Source:_T,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"ModalState"})," function can be used to generate a Modal with state.  It returns the ",r.jsx("code",{children:"isVisible"})," property,"," ",r.jsx("code",{children:"show"})," and ",r.jsx("code",{children:"hide"})," functions to change the visibility, and a ",r.jsx("code",{children:"Modal"})," component."]})}),wT=Object.freeze(Object.defineProperty({__proto__:null,default:P3},Symbol.toStringTag,{value:"Module"})),kT=()=>{const[e,t]=_.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsxs(Ut,{open:e,className:"large max-width-25rem pad-8",children:[r.jsx("p",{children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object."}),r.jsx(D,{color:"red",text:"Close Modal",onClick:()=>t(!1)})]}),r.jsx(D,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},TT=`import { Modal, Button } from '@/src/index.jsx'
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

export default ModalExample`,$3=()=>r.jsx(L,{code:"className",Component:kT,Source:TT,undent:6,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"className"})," property can be used to add a CSS class to the Modal ",r.jsx("code",{children:"dialog"})," element."]})}),ET=Object.freeze(Object.defineProperty({__proto__:null,default:$3},Symbol.toStringTag,{value:"Module"})),LT=()=>{const[e,t]=_.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsx(Ut,{open:e,close:()=>t(!1),children:r.jsx("p",{children:"This is a modal with a close button."})}),r.jsx(D,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},NT=`import React, { useState } from 'react'
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

export default ModalExample`,A3=()=>r.jsx(L,{code:"close",Component:LT,Source:NT,undent:6,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"close"})," property can be used to automatically add a close icon to the top right corner.  It should be a function which will close the modal when the icon is clicked."]})}),RT=Object.freeze(Object.defineProperty({__proto__:null,default:A3},Symbol.toStringTag,{value:"Module"})),OT=()=>{const[e,t]=_.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsx(Ut,{open:e,close:()=>t(!1),closeIcon:"thumb",children:r.jsx("p",{children:"This is a modal with a custom close icon."})}),r.jsx(D,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},DT=`import React, { useState } from 'react'
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

export default ModalExample`,B3=()=>r.jsx(L,{code:"closeIcon",Component:OT,Source:DT,undent:6,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"closeIcon"})," property can be used to change the icon displayed to close the modal."]})}),MT=Object.freeze(Object.defineProperty({__proto__:null,default:B3},Symbol.toStringTag,{value:"Module"})),PT=()=>{const[e,t]=_.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsx(Ut,{open:e,close:()=>t(!1),title:"Hello World!",text:"This is a modal with a custom footer",footer:r.jsx("div",{className:"text-right",children:r.jsx(D,{color:"red",text:"Close",size:"small",iconRight:"cross",onClick:()=>t(!1)})})}),r.jsx(D,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},$T=`import { Modal, Button } from '@/src/index.jsx'
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

export default ModalExample`,I3=()=>r.jsx(L,{code:"footer",Component:PT,Source:$T,undent:6,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"footer"})," property can be used to define some custom footer content."]})}),AT=Object.freeze(Object.defineProperty({__proto__:null,default:I3},Symbol.toStringTag,{value:"Module"})),BT=()=>{const[e,t]=_.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsx(Ut,{open:e,close:()=>t(!1),text:"This is a modal with a custom header",header:r.jsxs(r.Fragment,{children:[r.jsx("h3",{children:"Custom Header"}),r.jsx("p",{children:"Hello World!"})]})}),r.jsx(D,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},IT=`import { Modal, Button } from '@/src/index.jsx'
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

export default ModalExample`,z3=()=>r.jsx(L,{code:"header",Component:BT,Source:IT,undent:6,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"header"})," property can be used to define some custom header content."]})}),zT=Object.freeze(Object.defineProperty({__proto__:null,default:z3},Symbol.toStringTag,{value:"Module"})),FT=()=>{const[e,t]=_.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsx(Ut,{open:e,close:()=>t(!1),text:"This is a modal"}),r.jsx(D,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},UT=`import { Modal, Button } from '@/src/index.jsx'

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

export default ModalExample`,F3=()=>r.jsx(L,{code:"text",Component:FT,Source:UT,undent:6,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"text"})," property can be used to define the body text."]})}),HT=Object.freeze(Object.defineProperty({__proto__:null,default:F3},Symbol.toStringTag,{value:"Module"})),VT=()=>{const[e,t]=_.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsx(Ut,{open:e,close:()=>t(!1),text:"This is a modal with a title",title:"My Modal"}),r.jsx(D,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},WT=`import { Modal, Button } from '@/src/index.jsx'
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

export default ModalExample`,U3=()=>r.jsx(L,{code:"title",Component:VT,Source:WT,undent:6,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"title"})," property can be used to add a title."]})}),ZT=Object.freeze(Object.defineProperty({__proto__:null,default:U3},Symbol.toStringTag,{value:"Module"})),GT=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Modal"}),r.jsx(M3,{}),r.jsxs(it,{tocName:"modal",children:[r.jsx(re,{title:"Properties"}),r.jsx($3,{}),r.jsx(A3,{}),r.jsx(B3,{}),r.jsx(F3,{}),r.jsx(U3,{}),r.jsx(z3,{}),r.jsx(I3,{}),r.jsx(re,{title:"Components"}),r.jsx(P3,{})]})]}),KT=Object.freeze(Object.defineProperty({__proto__:null,default:GT},Symbol.toStringTag,{value:"Module"})),YT=()=>{const{isVisible:e,show:t,hide:n}=Xn();return r.jsxs("div",{className:"relative pad-6 border",children:[e&&r.jsx(po,{className:"flex middle center pad-8",children:r.jsxs("div",{children:[r.jsx("p",{className:"larger",children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been... that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object."}),r.jsx(D,{onClick:n,className:"red",text:"Hide Overlay"})]})}),r.jsx("p",{className:"mar-t-none",children:"May I make a suggestion? May I make a suggestion? I've got one other suggestion."}),r.jsx("p",{children:"Well let's hear yours. Let's hear your suggestion."}),r.jsx("p",{children:"Stonehenge! It's the best production value we've ever had on stage."}),r.jsx("p",{children:"But we haven't got the equipment. We haven't got the equipment, we haven't got Stonehenge, we haven't..."}),r.jsx("p",{children:"Not yet we don't. Let's start... Musically, musically we all know it. Musically we all know it. Right? No problems musically. We go right on stage. And it's quite simple. This is you know... Ian can take care of this..."}),r.jsx("p",{children:"I know what the Stonehenge monument looks like. We don't have that piece of scenery anymore."}),r.jsx("p",{children:"I know, so we build a new one. And this is it, look!"}),r.jsx(D,{onClick:t,color:"green",text:"Show Overlay"})]})},QT=`import { Overlay, VisibleState, Button } from '@/src/index.jsx'

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

export default OverlayExample`,H3=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Overlay"})," component can be used to create an overlay. The default positioning is absolute so it will fill to cover the nearest parent that has positioning set to relative."]}),r.jsx(ye,{Component:YT,code:QT})]}),XT=Object.freeze(Object.defineProperty({__proto__:null,default:H3},Symbol.toStringTag,{value:"Module"})),qT=()=>{const{show:e,hide:t,Overlay:n}=IC();return r.jsxs(r.Fragment,{children:[r.jsx(n,{fixed:!0,className:"flex center middle",children:r.jsxs("div",{children:[r.jsx("h1",{className:"mar-b-4",children:"Overlay State"}),r.jsx(D,{color:"red",text:"Hide Overlay",onClick:t})]})}),r.jsx(D,{color:"green",text:"Show Overlay",onClick:e})]})},JT=`import { OverlayState, Button } from '@/src/index.jsx'
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

export default OverlayStateExample`,V3=()=>r.jsx(L,{code:"OverlayState",Component:qT,Source:JT,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"OverlayState"})," function can be used to generate an Overlay with state.  It returns the ",r.jsx("code",{children:"isVisible"})," property,"," ",r.jsx("code",{children:"show"})," and ",r.jsx("code",{children:"hide"})," functions to change the visibility, and an ",r.jsx("code",{children:"Overlay"})," component."]})}),eE=Object.freeze(Object.defineProperty({__proto__:null,default:V3},Symbol.toStringTag,{value:"Module"})),tE=()=>{const[e,t]=_.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsxs(Ut,{open:e,className:"large max-width-25rem pad-8",children:[r.jsx("p",{children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object."}),r.jsx(D,{color:"red",text:"Close Modal",onClick:()=>t(!1)})]}),r.jsx(D,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},nE=`import { Modal, Button } from '@/src/index.jsx'
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

export default ModalExample`,rE=()=>r.jsx(L,{code:"className",Component:tE,Source:nE,undent:6,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"className"})," property can be used to add a CSS class to the Modal ",r.jsx("code",{children:"dialog"})," element."]})}),oE=Object.freeze(Object.defineProperty({__proto__:null,default:rE},Symbol.toStringTag,{value:"Module"})),aE=()=>{const{isVisible:e,show:t,hide:n}=Xn();return r.jsxs("div",{className:"relative pad-6 border",children:[r.jsx(D,{onClick:t,color:"green",text:"Show Red Overlay"}),e&&r.jsxs(po,{className:"flex space top pad-6",style:{"--color":"var(--red-70)","--background-color":"var(--red-20)","--background-opacity":"10%"},children:[r.jsx("p",{className:"larger",children:"Custom red overlay"}),r.jsx(D,{onClick:n,className:"red",text:"Hide Overlay"})]})]})},lE=`import React from 'react'
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

export default ColorExample`,W3=()=>r.jsx(L,{title:"Custom Colors",Component:aE,Source:lE,undent:8,children:r.jsxs("p",{children:["You can set the ",r.jsx("code",{children:"--color"})," and ",r.jsx("code",{children:"--background-color"})," ","CSS properties to define your own colors for the overlay.  The"," ",r.jsx("code",{children:"--background-opacity"})," can be set to change the background opacity."]})}),sE=Object.freeze(Object.defineProperty({__proto__:null,default:W3},Symbol.toStringTag,{value:"Module"})),iE=()=>{const{isVisible:e,show:t,hide:n}=Xn();return r.jsxs("div",{className:"relative pad-6 border",children:[r.jsx(D,{onClick:t,color:"green",text:"Show Overlay"}),e&&r.jsx(po,{fixed:!0,className:"flex center middle",children:r.jsxs("div",{className:"max-width-40rem",children:[r.jsx("p",{className:"larger",children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been... that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object."}),r.jsx(D,{onClick:n,className:"red",text:"Hide Overlay"})]})})]})},cE=`import React from 'react'
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

export default OverlayExample`,Z3=()=>r.jsx(L,{code:"fixed",Component:iE,Source:cE,undent:8,children:r.jsxs("p",{children:["Add the ",r.jsx("code",{children:"fixed"})," to set the overlay position to fixed so that it covers the entire viewport."]})}),uE=Object.freeze(Object.defineProperty({__proto__:null,default:Z3},Symbol.toStringTag,{value:"Module"})),dE=()=>{const{isVisible:e,show:t,hide:n}=Xn();return r.jsxs("div",{className:"relative pad-6 border",children:[r.jsx(D,{onClick:t,color:"green",text:"Show Light Overlay"}),e&&r.jsxs(po,{light:!0,className:"flex space top pad-6",children:[r.jsx("p",{className:"larger",children:"Light overlay"}),r.jsx(D,{onClick:n,className:"red",text:"Hide Overlay"})]})]})},pE=`import React from 'react'
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

export default ColorExample`,fE=()=>{const{isVisible:e,show:t,hide:n}=Xn();return r.jsxs("div",{className:"relative pad-6 border",children:[r.jsx(D,{onClick:t,color:"green",text:"Show Dark Overlay"}),e&&r.jsxs(po,{dark:!0,className:"flex space top pad-6",children:[r.jsx("p",{className:"larger",children:"Dark overlay"}),r.jsx(D,{onClick:n,className:"red",text:"Hide Overlay"})]})]})},hE=`import React from 'react'
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

export default ColorExample`,G3=()=>r.jsxs(F,{code:"light / dark",children:[r.jsxs("p",{className:"cols-2 stack-desktop",children:["The default overlay color is white in light mode and black in dark mode.  You can add the ",r.jsx("code",{children:"light"})," or ",r.jsx("code",{children:"dark"})," ","property to explicitly set it to one or the other."]}),r.jsx(ye,{Component:dE,code:pE,caption:"light",undent:8}),r.jsx(ye,{Component:fE,code:hE,caption:"dark",undent:8})]}),mE=Object.freeze(Object.defineProperty({__proto__:null,default:G3},Symbol.toStringTag,{value:"Module"})),xE=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Overlay"}),r.jsx(H3,{}),r.jsxs(it,{tocName:"overlay",children:[r.jsx(re,{title:"Properties"}),r.jsx(Z3,{}),r.jsx(G3,{}),r.jsx(re,{title:"Styling"}),r.jsx(W3,{}),r.jsx(re,{title:"Components"}),r.jsx(V3,{})]})]}),gE=Object.freeze(Object.defineProperty({__proto__:null,default:xE},Symbol.toStringTag,{value:"Module"})),vE=({page:e,className:t,onClick:n})=>{const{pageRanges:o}=Ly(),a=o[e];return r.jsx(D,{text:a,className:t,onClick:n})},yE=()=>{const e=["A-C","D-F","G-I","J-M","N-P","Q-T","U-W","X-Z"],t=e.length,[n,o]=_.useState(0);return r.jsx(Et,{pages:t,page:n,setPage:o,pageRanges:e,Page:vE,size:"small"})},CE=`import { Pager, usePager, Button } from '@/src/index.jsx'

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

export default PagerExample`,jE=({items:e})=>r.jsx("table",{className:"wide shaded striped celled",children:r.jsx("tbody",{children:e.map(([t,n])=>r.jsx(SE,{name:t,value:n},t))})}),SE=({name:e,value:t})=>r.jsxs("tr",{children:[r.jsx("td",{className:"font-mono",children:e}),r.jsx("td",{children:t})]}),K3=()=>r.jsxs(r.Fragment,{children:[r.jsx("h2",{children:"Context"}),r.jsxs("div",{className:"cols-2 stack-desktop",children:[r.jsx("p",{children:"A react context is created which provides the items listed below. Any other properties passed in to the component will also be accessible to child components."}),r.jsxs("p",{children:["Values are provided for the 0-based indexes of the first, last, previous, next and current pages. For example, the lowest value for ",r.jsx("code",{children:"page"})," is"," ",r.jsx("code",{children:"0"})," and the highest value is ",r.jsx("code",{children:"pages - 1"}),"."]}),r.jsxs("p",{children:['Their counterparts are also provided in "human readable" 1-based form with a ',r.jsx("code",{children:"No"})," suffix.  For example, the values for ",r.jsx("code",{children:"pageNo"})," range from ",r.jsx("code",{children:"1"})," to ",r.jsx("code",{children:"pages"}),", and will always be one more than ",r.jsx("code",{children:"page"}),"."]})]}),r.jsx(jE,{items:[["pages","The total number of pages, as passed into the component as a property."],["page","The index (0 based) of the current page, as passed into the component as a property."],["setPage","The function for setting a page index, as passed into the component as a property."],["pageNo",r.jsxs(r.Fragment,{children:["The current page number (1 based), effectively one louder than ",r.jsx("code",{children:"page"}),".  e.g. if ",r.jsx("code",{children:"page"})," is ten then this goes up to eleven."]})],["firstPage","The index (0 based) of the first page.  This is always 0 but is included for completeness."],["firstPageNo","The number (1 based) of the first page.  This is always 1 but is included for completeness."],["lastPage","The index (0 based) of the last page."],["lastPageNo","The number (1 based) of the first page."],["prevPage","The index (0 based) of the previous page."],["prevPageNo","The number (1 based) of the previous page."],["nextPage","The index (0 based) of the next page."],["nextPageNo","The number (1 based) of the next page."]]}),r.jsx("h2",{children:"Custom Component"}),r.jsxs("div",{className:"cols-2 stack-desktop",children:[r.jsxs("p",{children:["You can provide your own components to render certain elements of the pager widget. These will be passed relevant parameters as properties and can use the ",r.jsx("code",{children:"usePager()"})," hook to access the full pager context, including any additional properties that you pass to the ",r.jsx("code",{children:"Pager"})," component."]}),r.jsxs("p",{children:["In this example we define a custom ",r.jsx("code",{children:"MyPageButton"})," component to replace the ",r.jsx("code",{children:"Page"})," component that renders the numbered page buttons.  Instead of displaying page numbers it shows alphabetical ranges for each button, defined in a custom ",r.jsx("code",{children:"pageRanges"})," "," ","property."]})]}),r.jsx(ye,{Component:yE,code:CE})]}),bE=Object.freeze(Object.defineProperty({__proto__:null,default:K3},Symbol.toStringTag,{value:"Module"})),_E=()=>{const[e,t]=_.useState(0);return r.jsx(Et,{pages:11,page:e,setPage:t})},wE=`import { Pager } from '@/src/index.jsx'

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

export default PagerExample`,Y3=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Pager"})," component generates buttons for navigating through several pages."]}),r.jsx("div",{className:"cols-2 stack-desktop",children:r.jsxs("p",{children:["The three mandatory properties are ",r.jsx("code",{children:"pages"})," indicating the total number of pages, ",r.jsx("code",{children:"page"})," for the current page index (ranging from 0 to ",r.jsx("code",{children:"pages"})," - 1) and a"," ",r.jsx("code",{children:"setPage"})," handler to set the page index."]})}),r.jsx(ye,{Component:_E,code:wE})]}),kE=Object.freeze(Object.defineProperty({__proto__:null,default:Y3},Symbol.toStringTag,{value:"Module"})),TE=()=>{const[e,t]=_.useState(0);return r.jsx("div",{className:"grid-1 gap-4",children:r.jsx(Et,{pages:11,page:e,setPage:t,className:"pager small brand border pad-2 bdr-2 bgc-90 bgd-10"})})},EE=`import React, { useState } from 'react'
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
`,Q3=()=>r.jsx(L,{code:"className",Component:TE,Source:EE,undent:4,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"className"})," property can be used to set a CSS class for the pager container.  The default value is ",r.jsx("code",{children:"pager"}),"."]})}),LE=Object.freeze(Object.defineProperty({__proto__:null,default:Q3},Symbol.toStringTag,{value:"Module"})),NE=()=>{const[e,t]=_.useState(0);return r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(Et,{pages:11,page:e,setPage:t,color:"red"}),r.jsx(Et,{pages:11,page:e,setPage:t,color:"green"}),r.jsx(Et,{pages:11,page:e,setPage:t,color:"blue"})]})},RE=`import React, { useState } from 'react'
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
`,X3=()=>r.jsx(L,{code:"color",Component:NE,Source:RE,undent:4,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"color"})," property can be used to set the color range used for the buttons.  This is a short-cut which adds the specified color to the CSS class for the pager container."]})}),OE=Object.freeze(Object.defineProperty({__proto__:null,default:X3},Symbol.toStringTag,{value:"Module"})),DE=()=>{const[e,t]=_.useState(0);return r.jsx(Et,{pages:11,page:e,setPage:t,prevIcon:"angle-left",nextIcon:"angle-right"})},ME=`import React, { useState } from 'react'
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
`,q3=()=>r.jsx(L,{code:"prevIcon / nextIcon",Component:DE,Source:ME,undent:4,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"prevIcon"})," and ",r.jsx("code",{children:"nextIcon"})," properties can be used to set the icons for the previous and next page button."]})}),PE=Object.freeze(Object.defineProperty({__proto__:null,default:q3},Symbol.toStringTag,{value:"Module"})),$E=()=>{const[e,t]=_.useState(0);return r.jsx(Et,{pages:11,page:e,setPage:t,nextIcon:"angle-right"})},AE=`import React, { useState } from 'react'
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
`,BE=()=>r.jsx(L,{code:"nextIcon",Component:$E,Source:AE,undent:4,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"nextIcon"})," property can be used to set the icon for the next page button."]})}),IE=Object.freeze(Object.defineProperty({__proto__:null,default:BE},Symbol.toStringTag,{value:"Module"})),zE=()=>{const[e,t]=_.useState(0);return r.jsx(Et,{pages:11,page:e,setPage:t,showFirstLast:!1})},FE=`import React, { useState } from 'react'
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
`,J3=()=>r.jsxs(L,{code:"showFirstLast",Component:zE,Source:FE,undent:4,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"showFirstLast"})," property determines if the first and last pages are shown in the set of numbered page buttons. A button for the first page will be displayed when it is less than previous page.  The last page button will be displayed when it is greater than the next page."]}),r.jsxs("p",{children:["This value defaults to ",r.jsx("code",{children:"true"})," but can be set"," ",r.jsx("code",{children:"false"})," to hide these buttons."]})]}),UE=Object.freeze(Object.defineProperty({__proto__:null,default:J3},Symbol.toStringTag,{value:"Module"})),HE=()=>{const[e,t]=_.useState(0);return r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(Et,{pages:11,page:e,setPage:t,size:"smaller"}),r.jsx(Et,{pages:11,page:e,setPage:t,size:"small"})]})},VE=`import React, { useState } from 'react'
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
`,e4=()=>r.jsx(L,{code:"size",Component:HE,Source:VE,undent:4,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"size"})," property can be used to set the size to one of the standard sizes.  This is also a short-cut for adding the size as a CSS class so you can use it to add any of your own size classes."]})}),WE=Object.freeze(Object.defineProperty({__proto__:null,default:e4},Symbol.toStringTag,{value:"Module"})),ZE=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Pager"}),r.jsx(Y3,{}),r.jsx(K3,{}),r.jsxs(it,{tocName:"pager",children:[r.jsx(re,{title:"Properties"}),r.jsx(Q3,{}),r.jsx(X3,{}),r.jsx(e4,{}),r.jsx(q3,{}),r.jsx(J3,{}),r.jsxs(ya,{children:[r.jsxs("div",{className:"flow",children:[r.jsx(re,{title:"CSS Classes"}),r.jsxs(F,{code:"className",children:["Used to set the CSS class for the pager container.  The default value is ",r.jsx("code",{children:"pager"}),"."]}),r.jsxs(F,{code:"buttonClass",children:["Used to set a default CSS class for all buttons.  The default value is ",r.jsx("code",{children:"outline"}),"."]}),r.jsxs(F,{code:"prevClass",children:["Used to set the CSS class for the previous page button.  It defaults to the value for ",r.jsx("code",{children:"buttonClass"}),"."]}),r.jsxs(F,{code:"nextClass",children:["Used to set the CSS class for the next page button.  It defaults to the value for ",r.jsx("code",{children:"buttonClass"}),"."]}),r.jsxs(F,{code:"pagesClass",children:["Used to set the CSS class for the numbered page buttons container. The default value is ",r.jsx("code",{children:"pages"}),"."]}),r.jsxs(F,{code:"pageClass",children:["Used to set the CSS class for individual numbered page buttons.  It defaults to the value for ",r.jsx("code",{children:"buttonClass"}),"."]}),r.jsxs(F,{code:"currentPageClass",children:["Used to set the CSS class for the currently selected numbered page button. The default value is ",r.jsx("code",{children:"solid"}),"."]})]}),r.jsxs("div",{className:"flow",children:[r.jsx(re,{title:"Components"}),r.jsxs(F,{code:"Previous",id:"Previous-component",children:["Renders the previous page button.  Defaults to ",r.jsx("code",{children:"PagerPrevious"}),"."]}),r.jsxs(F,{code:"Next",id:"Next-component",children:["Renders the next page button.  Defaults to ",r.jsx("code",{children:"PagerNext"}),"."]}),r.jsxs(F,{code:"Pages",id:"Pages-component",children:["Renders the collection of numbered page buttons.  Defaults to ",r.jsx("code",{children:"PagerPages"}),"."]}),r.jsxs(F,{code:"Page",id:"Page-component",children:["Renders an individual page button.  Defaults to ",r.jsx("code",{children:"PagerPage"}),"."]}),r.jsxs(F,{code:"Separator",id:"Separator-component",children:["Renders the separator between the first and/or last pages and the rest of the numbered page buttons. Defaults to ",r.jsx("code",{children:"PagerSeparator"}),"."]})]})]})]})]}),GE=Object.freeze(Object.defineProperty({__proto__:null,default:ZE},Symbol.toStringTag,{value:"Module"})),KE=()=>{const[e,t]=_.useState(!1);return r.jsx(fn,{value:e,onChange:t,options:["David","Nigel","Derek"]})},YE=`import { Radio } from '@/src/index.jsx'

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

export default RadioExample`,t4=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Radio"})," component renders a set of radio buttons."]}),r.jsx(ye,{Component:KE,code:YE,expand:!0})]}),QE=Object.freeze(Object.defineProperty({__proto__:null,default:t4},Symbol.toStringTag,{value:"Module"})),XE=()=>{const[e,t]=_.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsx(fn,{border:!0,labelClass:"mar-b-2",value:e,onChange:t,options:["David","Nigel","Derek"]}),r.jsx(fn,{border:!0,inline:!0,labelClass:"mar-r-2",value:e,onChange:t,options:["David","Nigel","Derek"]})]})},qE=`import { Radio } from '@/src/index.jsx'
import React, { useState } from 'react'

const BorderExample = () => {
  const [value, setValue] = useState(false)
  return (
    <>
      {/* START */}
      <Radio
        border
        labelClass="mar-b-2"
        value={value}
        onChange={setValue}
        options={[
          'David',
          'Nigel',
          'Derek'
        ]}
      />
      <Radio
        border inline
        labelClass="mar-r-2"
        value={value}
        onChange={setValue}
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

export default BorderExample`,n4=()=>r.jsxs(L,{code:"border",Component:XE,Source:qE,undent:4,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"border"})," property can be set to add a border to each item."]}),r.jsxs("p",{children:["You may need to add margins to either the bottom or right side of each label using the ",r.jsx("code",{children:"labelClass"})," property."]})]}),JE=Object.freeze(Object.defineProperty({__proto__:null,default:n4},Symbol.toStringTag,{value:"Module"})),eL=()=>{const[e,t]=_.useState(!1);return r.jsx(fn,{className:"grid-3 gap-2",value:e,onChange:t,options:["David","Nigel","Derek"]})},tL=`import { Radio } from '@/src/index.jsx'
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

export default ClassName`,r4=()=>r.jsx(L,{code:"className",Component:eL,Source:tL,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"className"})," property can be used to add a CSS class to the container element."]})}),nL=Object.freeze(Object.defineProperty({__proto__:null,default:r4},Symbol.toStringTag,{value:"Module"})),rL=()=>{const[e,t]=_.useState(!1);return r.jsx(fn,{value:e,onChange:t,options:[{value:"david",text:"David St. Hubbins"},{value:"nigel",text:"Nigel Tufnel"},{value:"derek",text:"Derek Smalls"},{value:"john",text:'John "Stumpy" Pepys',disabled:!0},{value:"eric",text:'Eric "Stumpy Joe" Childs',disabled:!0},{value:"peter",text:'Peter "James" Bond',disabled:!0},{value:"mick",text:"Mick Shrimpton",disabled:!0}]})},oL=`import { Radio } from '@/src/index.jsx'
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

export default DisabledExample`,o4=()=>r.jsx(L,{code:"disabled",Component:rL,Source:oL,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"disabled"})," property can be added to an option to disable it."]})}),aL=Object.freeze(Object.defineProperty({__proto__:null,default:o4},Symbol.toStringTag,{value:"Module"})),lL=()=>{const[e,t]=_.useState(!1);return r.jsx(fn,{inline:!0,value:e,onChange:t,options:["David","Nigel","Derek"]})},sL=`import { Radio } from '@/src/index.jsx'
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

export default InlineExample`,a4=()=>r.jsx(L,{code:"inline",Component:lL,Source:sL,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"inline"})," property can be set to create inline radio buttons."]})}),iL=Object.freeze(Object.defineProperty({__proto__:null,default:a4},Symbol.toStringTag,{value:"Module"})),cL=()=>{const[e,t]=_.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsx(fn,{value:e,onChange:t,options:["David","Nigel","Derek"]}),!!e&&r.jsxs("div",{children:["Selected value: ",e]})]})},uL=`import { Radio } from '@/src/index.jsx'
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
        <div>
          Selected value: {value}
        </div>
      }
    </>
  )
}
/* END */

export default OnChangeExample`,l4=()=>r.jsx(L,{code:"onChange",Component:cL,Source:uL,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"onChange"})," property should be used to define a function to handle changes in the state.  This will typically be used to update the ",r.jsx("a",{href:"#value",className:"font-mono",children:"value"}),"."]})}),dL=Object.freeze(Object.defineProperty({__proto__:null,default:l4},Symbol.toStringTag,{value:"Module"})),pL=()=>{const[e,t]=_.useState(!1);return r.jsx(fn,{value:e,onChange:t,options:[{value:"david",text:"David St. Hubbins"},{value:"nigel",text:"Nigel Tufnel"},{value:"derek",text:"Derek Smalls"}]})},fL=`import { Radio } from '@/src/index.jsx'
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

export default OptionsExample`,s4=()=>r.jsx(L,{code:"options",Component:pL,Source:fL,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"options"})," property should be used to define the values for each radio button.  These can be simple values (e.g. strings or numbers) as shown in the preceding examples.  For more complex cases you should define each element as an object containing a"," ",r.jsx("code",{children:"value"})," and any of ",r.jsx("code",{children:"text"}),", ",r.jsx("code",{children:"label"})," or"," ",r.jsx("code",{children:"name"})," for the displayed text."]})}),hL=Object.freeze(Object.defineProperty({__proto__:null,default:s4},Symbol.toStringTag,{value:"Module"})),mL=()=>{const[e,t]=_.useState(!1);return r.jsx(fn,{value:e,onChange:t,options:["David","Nigel","Derek"]})},xL=`import { Radio } from '@/src/index.jsx'
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

export default ValueExample`,i4=()=>r.jsx(L,{code:"value",Component:mL,Source:xL,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"value"})," property should be used to define the current selected value.  This should be used in conjunction with"," ",r.jsx("a",{href:"#onchange",className:"font-mono",children:"onChange"})," to update the value."]})}),gL=Object.freeze(Object.defineProperty({__proto__:null,default:i4},Symbol.toStringTag,{value:"Module"})),vL=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Radio"}),r.jsx(t4,{}),r.jsxs(it,{tocName:"radio",children:[r.jsx(re,{title:"Properties"}),r.jsx(i4,{}),r.jsx(l4,{}),r.jsx(r4,{}),r.jsx(a4,{}),r.jsx(n4,{}),r.jsx(re,{title:"Options"}),r.jsx(s4,{}),r.jsx(o4,{})]})]}),yL=Object.freeze(Object.defineProperty({__proto__:null,default:vL},Symbol.toStringTag,{value:"Module"})),CL=["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger"],jL=()=>{const e=t=>CL.filter(n=>n.toLowerCase().indexOf(t.toLowerCase())!==-1);return r.jsx(ks,{onSearch:e})},SL=`import { Search } from '@/src/index.jsx'

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

export default SearchExample`,c4=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Search"}),' component implements the familiar "autocomplete" functionality.']}),r.jsx("p",{className:"cols-2 stack-desktop",children:"The user starts typing and after a short debounce delay a set of results matching their input is displayed. The user can then click on a result or use the keyboard to navigate through the results."}),r.jsx(ye,{Component:jL,code:SL})]}),bL=Object.freeze(Object.defineProperty({__proto__:null,default:c4},Symbol.toStringTag,{value:"Module"})),_L=[{name:"Alan Aardvark",tel:"555-1245"},{name:"Amy Aardvark",tel:"555-2233"},{name:"Anne Aardvark",tel:"555-6565"},{name:"Bart Badger",tel:"555-4201"},{name:"Betty Badger",tel:"555-1111"},{name:"Bobby Badger",tel:"555-9876"},{name:"Brenda Badger",tel:"555-3443"},{name:"Brian Badger",tel:"555-1337"}],wL=()=>{const e=n=>r.jsxs("div",{className:"flex space baseline",children:[r.jsx("div",{children:n.name}),r.jsx("div",{className:"smaller",children:n.tel})]}),t=n=>_L.filter(o=>o.name.toLowerCase().indexOf(n.toLowerCase())!==-1);return r.jsx(ks,{onSearch:t,displayResult:e})},kL=`import { Search } from '@/src/index.jsx'

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

export default DisplayResultExample`,u4=()=>r.jsx(L,{code:"displayResult",Component:wL,Source:kL,expand:!0,children:r.jsxs("p",{children:["If a result is a text string then it will be displayed as the result. If it's an object containing a ",r.jsx("code",{children:"text"}),","," ",r.jsx("code",{children:"label"})," or ",r.jsx("code",{children:"name"})," property then that will be used as the display value.  Otherwise you can provide a"," ",r.jsx("code",{children:"displayResult"})," function to display the result any way you like."]})}),TL=Object.freeze(Object.defineProperty({__proto__:null,default:u4},Symbol.toStringTag,{value:"Module"})),EL=[{id:100,name:"Alan Aardvark",tel:"555-1245"},{id:101,name:"Amy Aardvark",tel:"555-2233"},{id:102,name:"Anne Aardvark",tel:"555-6565"},{id:110,name:"Bart Badger",tel:"555-4201"},{id:111,name:"Betty Badger",tel:"555-1111"},{id:112,name:"Bobby Badger",tel:"555-9876"},{id:113,name:"Brenda Badger",tel:"555-3443"},{id:114,name:"Brian Badger",tel:"555-1337"}],LL=()=>{const e=n=>`#${n.id}: ${n.name} (${n.tel})`,t=n=>EL.filter(o=>o.name.toLowerCase().indexOf(n.toLowerCase())!==-1);return r.jsx(ks,{onSearch:t,displayValue:e})},NL=`import { Search } from '@/src/index.jsx'

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

export default DisplayValueExample`,d4=()=>r.jsx(L,{code:"displayValue",Component:LL,Source:NL,expand:!0,children:r.jsxs("p",{children:["When a result is selected the same rules will be applied to display the result in the search input.  If it's not a string or an object containing one of the aforementioned properties then you should provide a ",r.jsx("code",{children:"displayValue"})," function to convert the result to a text string that can be displayed."]})}),RL=Object.freeze(Object.defineProperty({__proto__:null,default:d4},Symbol.toStringTag,{value:"Module"})),OL=["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Beatrice Badger","Belinda Badger","Ben Badger","Bert Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger","Brook Badger","Buzz Badger"],DL=()=>{const e=async t=>Ss(500).then(()=>OL.filter(n=>n.toLowerCase().indexOf(t.toLowerCase())!==-1));return r.jsx(ks,{onSearch:e,debug:!0})},ML=`import { Search } from '@/src/index.jsx'
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

export default OnSearchExample`,p4=()=>r.jsx(L,{code:"onSearch",Component:DL,Source:ML,children:r.jsxs("p",{children:["You should provide an ",r.jsx("code",{children:"onSearch"})," function which will be passed the search input and should return an array of results.  This can be an asynchronous function if necessary.  For example, a function which makes an API request to fetch the matching results."]})}),PL=Object.freeze(Object.defineProperty({__proto__:null,default:p4},Symbol.toStringTag,{value:"Module"})),$L=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Search"}),r.jsx(c4,{}),r.jsxs(it,{tocName:"search",children:[r.jsx(re,{title:"Properties"}),r.jsx(p4,{}),r.jsx(u4,{}),r.jsx(d4,{})]})]}),AL=Object.freeze(Object.defineProperty({__proto__:null,default:$L},Symbol.toStringTag,{value:"Module"})),BL=["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger","Colin Camel","David Donkey","Eddie Elephant","Franky Ferret","Gina Goat","Helen Horse","Ian Iguana","Juliet Jackdaw","Kevin Kangaroo","Linda Llama"],IL=()=>r.jsx(uo,{options:BL}),zL=`import { Select } from '@/src/index.jsx'

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

export default SelectExample`,f4=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Select"})," component implements a custom select input."]}),r.jsx(ye,{Component:IL,code:zL})]}),FL=Object.freeze(Object.defineProperty({__proto__:null,default:f4},Symbol.toStringTag,{value:"Module"})),UL=[{name:"Alan Aardvark",tel:"555-1245"},{name:"Amy Aardvark",tel:"555-2233"},{name:"Anne Aardvark",tel:"555-6565"},{name:"Bart Badger",tel:"555-4201"},{name:"Betty Badger",tel:"555-1111"},{name:"Bobby Badger",tel:"555-9876"},{name:"Brenda Badger",tel:"555-3443"},{name:"Brian Badger",tel:"555-1337"}],HL=()=>{const e=t=>r.jsxs("div",{className:"flex space baseline",children:[r.jsx("div",{children:t.name}),r.jsx("div",{className:"smaller",children:t.tel})]});return r.jsx(uo,{options:UL,displayOption:e})},VL=`import { Select } from '@/src/index.jsx'

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

export default DisplayOptionExample`,h4=()=>r.jsx(L,{code:"displayOption",Component:HL,Source:VL,expand:!0,children:r.jsxs("p",{children:["If an option is a text string then it will be displayed as it is. If it's an object containing a ",r.jsx("code",{children:"text"}),","," ",r.jsx("code",{children:"label"})," or ",r.jsx("code",{children:"name"})," property then that will be used as the display value.  Otherwise you can provide a"," ",r.jsx("code",{children:"displayOption"})," function to display the result any way you like."]})}),WL=Object.freeze(Object.defineProperty({__proto__:null,default:h4},Symbol.toStringTag,{value:"Module"})),ZL=[{id:100,name:"Alan Aardvark",tel:"555-1245"},{id:101,name:"Amy Aardvark",tel:"555-2233"},{id:102,name:"Anne Aardvark",tel:"555-6565"},{id:110,name:"Bart Badger",tel:"555-4201"},{id:111,name:"Betty Badger",tel:"555-1111"},{id:112,name:"Bobby Badger",tel:"555-9876"},{id:113,name:"Brenda Badger",tel:"555-3443"},{id:114,name:"Brian Badger",tel:"555-1337"}],GL=()=>{const e=t=>r.jsxs("div",{className:"flex baseline",children:[r.jsxs("span",{className:"smaller mar-r-2",children:["#",t.id]})," ",t.name," (",t.tel,")"]});return r.jsx(uo,{options:ZL,displayValue:e})},KL=`import { Select } from '@/src/index.jsx'

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

export default DisplayValueExample`,m4=()=>r.jsx(L,{code:"displayValue",Component:GL,Source:KL,expand:!0,children:r.jsxs("p",{children:["When an option is selected the same rules will be applied to display the option in the search input.  If it's not a string or an object containing one of the aforementioned properties then you should provide a ",r.jsx("code",{children:"displayValue"})," function to convert the result to a text string that can be displayed."]})}),YL=Object.freeze(Object.defineProperty({__proto__:null,default:m4},Symbol.toStringTag,{value:"Module"})),QL=[{id:101,name:"Alan Aardvark"},{id:102,name:"Amy Aardvark"},{id:103,name:"Anne Aardvark"},{id:104,name:"Bart Badger"},{id:105,name:"Betty Badger"},{id:106,name:"Bobby Badger"},{id:107,name:"Brenda Badger"},{id:108,name:"Brian Badger"},{id:109,name:"Colin Camel",disabled:!0},{id:110,name:"Derek Donkey"}],XL=()=>r.jsx(uo,{options:QL}),qL=`import { Select } from '@/src/index.jsx'

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
  { id: 109, name: 'Colin Camel', disabled: true  },
  { id: 110, name: 'Derek Donkey'  },
]

const OptionsExample = () =>
  <Select
    options={animals}
  />

export default OptionsExample`,x4=()=>r.jsx(L,{code:"options",Component:XL,Source:qL,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"options"})," property should be used to provide an array of options that the user can select from.  Each element in the array can be a string, numerical value or an object.  The ",r.jsx("code",{children:"disabled"})," ","property can be used to mark an option as disabled."]})}),JL=Object.freeze(Object.defineProperty({__proto__:null,default:x4},Symbol.toStringTag,{value:"Module"})),eN=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Select"}),r.jsx(f4,{}),r.jsxs(it,{tocName:"select",children:[r.jsx(re,{title:"Properties"}),r.jsx(x4,{}),r.jsx(h4,{}),r.jsx(m4,{}),r.jsx(F,{code:"disabled",children:"Boolean flag to set the select input to be disabled."}),r.jsxs(F,{code:"placeholder",children:["Set the placeholder text.  The default is ",r.jsx("code",{children:"Search"}),"."]}),r.jsxs(F,{code:"noOptions",children:["Set the text displayed when there are no options to select from. The default is ",r.jsx("code",{children:"No options"}),"."]}),r.jsxs(ya,{children:[r.jsxs("div",{children:[r.jsx(re,{title:"Event Handlers"}),r.jsxs(F,{code:"onLoad",children:["Called when the component is first loaded.  The handler is passed a reference to the ",r.jsx("code",{children:"SearchContext"})," object."]}),r.jsxs(F,{code:"onUnload",children:["Called when the component is unloaded.  The handler is passed a reference to the ",r.jsx("code",{children:"SearchContext"})," object."]}),r.jsx(F,{code:"onFocus",children:"Called when the component gains focus."}),r.jsx(F,{code:"onBlur",children:"Called when the component loses focus."}),r.jsx(F,{code:"onClick",children:"Called when the component is clicked."}),r.jsx(F,{code:"onOpen",children:"Called when the component is opened and selectable options are displayed."}),r.jsx(F,{code:"onClose",children:"Called when the component is closed and selectable options are hidden."}),r.jsx(F,{code:"onSelect",children:"Called when an option is selected.  The selection option is passed as an argument."})]}),r.jsxs("div",{className:"flow",children:[r.jsx(re,{title:"CSS Classes"}),r.jsxs(F,{code:"placeholderClass",children:["Set the class for the placeholder text. The default is ",r.jsx("code",{children:"placeholder"}),"."]}),r.jsxs(F,{code:"inputClass",children:["Set the class for the input element. The default is ",r.jsx("code",{children:"input"}),"."]}),r.jsxs(F,{code:"selectingClass",children:["Set the class added when a selection is in place. The default is ",r.jsx("code",{children:"selecting"}),"."]}),r.jsxs(F,{code:"optionsClass",children:["Set the class added for the options container. The default is ",r.jsx("code",{children:"menu border bdr-1"}),"."]}),r.jsxs(F,{code:"optionClass",children:["Set the class added to each option element. The default is ",r.jsx("code",{children:"item"}),"."]}),r.jsxs(F,{code:"activeClass",children:["Set the class added to an option that is currently active. The default is ",r.jsx("code",{children:"active"}),"."]}),r.jsxs(F,{code:"noOptionsClass",children:["Set the class added to the element displayed when there are no options to select from. The default is ",r.jsx("code",{children:"none"}),"."]})]}),r.jsxs("div",{className:"flow",children:[r.jsx(re,{title:"Components"}),r.jsx(F,{code:"Content",children:"Renders the content of the select component."}),r.jsx(F,{code:"Input",children:"Renders the input field."}),r.jsx(F,{code:"Options",id:"Options-component",children:"Renders the selectable options."}),r.jsx(F,{code:"Option",children:"Renders an individual option."}),r.jsx(F,{code:"NoOptions",id:"NoOptions-component",children:"Renders a message indicating that there are no options to select from."})]})]})]})]}),tN=Object.freeze(Object.defineProperty({__proto__:null,default:eN},Symbol.toStringTag,{value:"Module"})),nN=`## using npm
$ npm add @abw/badger-react-ui

## using yarn
$ yarn add @abw/badger-react-ui

## using pnpm
$ pnpm add @abw/badger-react-ui`,rN="import '@abw/badger-react-ui/styles/badger-css-react-ui.min.css';",oN="@import '@abw/badger-react-ui/styles/badger-css-react-ui.scss';",aN=`// If you're already importing Badger CSS styles
// something like this...
import '@abw/badger-css/styles/badger.min.css';

// ...then you only need to add this line to get
// the additional styles from Badger React UI
import '@abw/badger-react-ui/styles/badger-react-ui.min.css';`,lN=`// If you're already importing Badger CSS styles
// something like this...
import '@abw/badger-css/styles/badger.scss';

// ...then you only need to add this line to get
// the additional styles from Badger React UI
import '@abw/badger-react-ui/styles/badger-react-ui.scss';
`,sN=()=>r.jsxs("div",{className:"prose flow",children:[r.jsx("h1",{children:"Installation"}),r.jsx("h2",{children:"Adding to a Javascript Project"}),r.jsxs("p",{children:["Add ",r.jsx("code",{children:"@abw/badger-react-ui"})," to your Javascript project using your favourite package manager."]}),r.jsx(Rn,{code:nN,caption:"Installing",language:"shell",className:"mar-b-8",expand:!0}),r.jsx("h2",{children:"Importing the CSS"}),r.jsxs(ya,{children:[r.jsx("p",{children:"The precise details on how you import the CSS will vary depending on what framework and bundler you're using.  For a React app using Vite or running under Next.js, for example, you can add the CSS file to your main application script as show below."}),r.jsxs("p",{children:["For other frameworks and/or bundlers you should consult the documentation on how to import a CSS file from a module in your"," ",r.jsx("code",{children:"node_modules"})," directory."]})]}),r.jsx(Rn,{code:rN,caption:"Combined CSS for Badger CSS / React UI",language:"js",className:"mar-b-8",expand:!0}),r.jsx("h2",{children:"Importing the SCSS"}),r.jsxs(ya,{children:[r.jsx("p",{children:"If you're using SASS/SCSS to build your stylesheet then you can import the SCSS components."}),r.jsx("p",{children:"Add the following line to your main SCSS stylesheet source."})]}),r.jsx(Rn,{code:oN,caption:"Combined SCSS for Badger CSS / React UI",language:"scss",className:"mar-b-8",expand:!0}),r.jsx("h2",{children:"Includes Badger CSS!"}),r.jsxs("p",{children:["Note that the examples shown above import stylesheets that"," ",r.jsx("b",{children:"include"})," the styles from Badger CSS.  If you're already using Badger CSS and have it imported, or if you've customised your installation of Badger CSS, then you only need to import the additional styles for Badger React UI."]}),r.jsx(Rn,{code:aN,caption:"Separate CSS for Badger CSS / React UI",language:"js",className:"mar-b-8",expand:!0}),r.jsx(Rn,{code:lN,caption:"Separate SCSS for Badger CSS / React UI",language:"scss",className:"mar-b-8",expand:!0})]}),iN=Object.freeze(Object.defineProperty({__proto__:null,default:sN},Symbol.toStringTag,{value:"Module"})),cN=e=>_.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 900 348",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",xmlSpace:"preserve","xmlns:serif":"http://www.serif.com/",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:2},...e},_.createElement("path",{className:"white",d:"M251.572,212.02C254.513,216.061 254.715,224.14 250.095,227.707C250.444,223.032 248.285,217.636 246.595,215.207C245.351,213.421 240.529,209.129 235.734,208.678C239.528,206.432 248.479,207.771 251.572,212.02ZM384.14,296.071C385.221,300.139 369.105,297.678 368.976,310.316C368.912,316.686 371.784,320.829 368.158,321.337C364.186,321.893 363.702,317.912 363.009,312.67C361.525,301.448 369.403,297.943 376.939,295.687C383.239,293.8 383.721,294.493 384.14,296.071ZM253.718,205.387C253.325,205.165 252.924,204.95 252.515,204.744C240.306,198.572 226.195,201.866 221.023,212.097C216.954,220.147 219.624,230.108 226.897,236.996C223.855,235.725 220.886,234.082 218.121,232C201.872,219.763 198.65,197.554 202.498,192.469C205.797,188.109 229.508,185.044 245.757,197.281C248.897,199.645 251.533,202.419 253.718,205.387ZM237.701,38.979C234.959,40.644 229.11,29.763 219.15,31.701C213.297,32.839 209.964,30.344 213.732,27.34C224.434,18.806 242.755,35.909 237.701,38.979ZM102.358,65.632C92.93,59.118 82.319,55.79 70.261,59.171C61.606,61.598 55.943,67.285 53.203,74.67C51.916,74.775 50.609,74.911 49.293,75.073C41.358,76.053 33.068,77.961 26.855,79.508C45.336,54.696 68.07,46.037 90.212,45.935L91.775,45.928L92.073,44.393C93.513,36.977 89.339,29.817 78.425,24.264C102.932,19.041 133.157,24.498 149.387,33.721L151.514,34.93L152.164,32.571C153.117,29.113 152.884,20.563 147.007,12.944C177.743,18.398 201.051,28.288 219.375,41.206C253.271,69.998 271.19,107.581 286.422,143.401C303.117,182.661 316.606,219.801 344.235,241.041C344.731,241.562 345.232,242.081 345.737,242.598C354.202,251.26 369.687,264.151 388.439,280.71C390.567,282.59 392.536,284.445 394.289,286.258C390.175,286.465 384.884,287.861 378.121,289.401C355.898,294.457 355.058,304.229 357.619,320.184C358.932,328.361 362.585,332.134 367.854,333.381C347.657,338.931 337.347,342.519 312.425,337.814C273.532,330.471 236.683,316.046 225.943,310.994C225.749,310.608 225.423,310.285 224.995,310.101C210.606,303.913 200.922,296.04 196.833,286.988C198.796,285.944 200.367,284.755 201.74,283.804C202.604,283.205 202.819,282.017 202.22,281.154C201.622,280.29 200.434,280.074 199.57,280.673C196.577,282.748 192.528,286.255 184.628,285.578C183.581,285.489 182.657,286.266 182.568,287.313C182.478,288.361 183.256,289.284 184.303,289.373C187.94,289.685 190.882,289.256 193.326,288.475C197.252,297.211 205.873,305.078 218.736,311.412C193.53,320.617 171.273,314.508 151.338,302.875C130.029,290.441 111.338,271.747 94.517,258.202C80.516,246.928 67.672,239.285 55.79,240.915C48.382,241.931 41.226,246.463 34.375,256.107C23.226,231.606 38.024,207.024 52.658,191.434L54.205,189.786L52.319,188.541C38.022,179.099 21.81,184.908 11.009,196.975C10.204,187.276 14.741,173.112 22.182,160.21C29.69,147.192 40.209,135.4 51.636,130.932C122.17,117.473 156.365,176.933 192.036,228.629C212.984,258.988 259.699,294.806 348.432,323.461C343.645,308.274 345.837,301.003 349.276,294.022C327.909,284.035 301.478,267.497 284.086,236.018C236.493,149.873 215.639,88.568 146.875,71.303C134.894,68.295 119.263,65.091 102.358,65.632ZM102.275,79.762C100.823,87.371 78.096,65.294 73.617,77.189C65.317,99.228 57.382,86.649 59.352,80.667C69.456,49.974 103.609,72.771 102.275,79.762Z",style:{fill:"white"}}),_.createElement("path",{className:"black",d:"M52.054,78.596C51.294,78.672 50.529,78.759 49.759,78.854C39.593,80.108 28.834,82.925 22.777,84.472L17.915,85.714L20.728,81.559C40.142,52.889 64.62,42.703 88.525,42.149C88.888,35.685 83.351,30.024 71.924,25.526L66.722,23.478L72.092,21.924C97.213,14.653 130.162,19.649 148.812,29.092C148.924,24.696 147.199,17.339 140.471,11.578L135.382,7.22L142.003,8.25C168.067,12.303 189.097,19.357 206.402,28.658C206.575,28.721 206.748,28.783 206.921,28.846C208.323,24.341 212.385,20.472 219.865,21.145C239.675,22.925 243.917,32.841 244.961,51.125C270.1,72.457 287.235,102.584 300.677,133.136C312.72,160.511 321.799,188.221 331.031,210.219C334.652,218.847 338.295,226.594 342.151,233.093C344.174,235.417 346.275,237.699 348.461,239.935C356.894,248.564 372.28,261.359 390.96,277.855C394.6,281.069 397.773,284.243 400.276,287.281C402.859,288.644 404.62,291.472 405.778,296.536C405.975,297.173 406.119,297.795 406.209,298.403C406.253,298.697 406.287,298.994 406.314,299.294C406.615,301.13 406.861,303.2 407.058,305.527C407.84,314.777 405.022,326.993 390.631,330.7C387.826,331.422 385.121,332.093 382.547,332.63C378.775,333.843 375.504,334.896 375.505,334.895C353.988,343.064 340.05,346.906 311.718,341.557C270.836,333.838 232.195,318.357 223.053,313.826C195.401,325.115 171.094,318.814 149.418,306.165C127.941,293.633 109.081,274.82 92.128,261.169C85.494,255.827 79.163,251.286 73.076,248.283C67.258,245.412 61.69,243.95 56.308,244.689C49.102,245.677 42.338,250.617 35.728,260.909L33.983,263.626L32.45,260.785C18.325,234.619 32.7,207.872 48.29,190.557C35.023,183.325 20.386,190.519 11.384,202.521L9.087,205.583L8.03,201.904C5.111,191.745 9.777,174.095 18.883,158.307C24.331,148.86 31.344,140.108 39.121,133.986C28.037,137.259 16.107,142.234 3.209,149.173C16.216,114.812 33.291,93.85 51.552,81.51C51.677,80.52 51.845,79.548 52.054,78.596ZM251.572,212.02C248.479,207.771 239.528,206.432 235.734,208.678C240.529,209.129 245.351,213.421 246.595,215.207C248.285,217.636 250.444,223.032 250.095,227.707C254.715,224.14 254.513,216.061 251.572,212.02ZM384.14,296.071C383.721,294.493 383.239,293.8 376.939,295.687C369.403,297.943 361.525,301.448 363.009,312.67C363.702,317.912 364.186,321.893 368.158,321.337C371.784,320.829 368.912,316.686 368.976,310.316C369.105,297.678 385.221,300.139 384.14,296.071ZM253.718,205.387C251.533,202.419 248.897,199.645 245.757,197.281C229.508,185.044 205.797,188.109 202.498,192.469C198.65,197.554 201.872,219.763 218.121,232C220.886,234.082 223.855,235.725 226.897,236.996C219.624,230.108 216.954,220.147 221.023,212.097C226.195,201.866 240.306,198.572 252.515,204.744C252.924,204.95 253.325,205.165 253.718,205.387ZM237.701,38.979C242.755,35.909 224.434,18.806 213.732,27.34C209.964,30.344 213.297,32.839 219.15,31.701C229.11,29.763 234.959,40.644 237.701,38.979ZM102.358,65.632C119.263,65.091 134.894,68.295 146.875,71.303C215.639,88.568 236.493,149.873 284.086,236.018C301.478,267.497 327.909,284.035 349.276,294.022C345.837,301.003 343.645,308.274 348.432,323.461C259.699,294.806 212.984,258.988 192.036,228.629C156.365,176.933 122.17,117.473 51.636,130.932C40.209,135.4 29.69,147.192 22.182,160.21C14.741,173.112 10.204,187.276 11.009,196.975C21.81,184.908 38.022,179.099 52.319,188.541L54.205,189.786L52.658,191.434C38.024,207.024 23.226,231.606 34.375,256.107C41.226,246.463 48.382,241.931 55.79,240.915C67.672,239.285 80.516,246.928 94.517,258.202C111.338,271.747 130.029,290.441 151.338,302.875C171.273,314.508 193.53,320.617 218.736,311.412C205.873,305.078 197.252,297.211 193.326,288.475C190.882,289.256 187.94,289.685 184.303,289.373C183.256,289.284 182.478,288.361 182.568,287.313C182.657,286.266 183.581,285.489 184.628,285.578C192.528,286.255 196.577,282.748 199.57,280.673C200.434,280.074 201.622,280.29 202.22,281.154C202.819,282.017 202.604,283.205 201.74,283.804C200.367,284.755 198.796,285.944 196.833,286.988C200.922,296.04 210.606,303.913 224.995,310.101C225.423,310.285 225.749,310.608 225.943,310.994C236.683,316.046 273.532,330.471 312.425,337.814C337.347,342.519 347.657,338.931 367.854,333.381C362.585,332.134 358.932,328.361 357.619,320.184C355.058,304.229 355.898,294.457 378.121,289.401C384.884,287.861 390.175,286.465 394.289,286.258C392.536,284.445 390.567,282.59 388.439,280.71C369.687,264.151 354.202,251.26 345.737,242.598C345.232,242.081 344.731,241.562 344.235,241.041C316.606,219.801 303.117,182.661 286.422,143.401C271.19,107.581 253.271,69.998 219.375,41.206C201.051,28.288 177.743,18.398 147.007,12.944C152.884,20.563 153.117,29.113 152.164,32.571L151.514,34.93L149.387,33.721C133.157,24.498 102.932,19.041 78.425,24.264C89.339,29.817 93.513,36.977 92.073,44.393L91.775,45.928L90.212,45.935C68.07,46.037 45.336,54.696 26.855,79.508C33.068,77.961 41.358,76.053 49.293,75.073C50.609,74.911 51.916,74.775 53.203,74.67C55.943,67.285 61.606,61.598 70.261,59.171C82.319,55.79 92.93,59.118 102.358,65.632ZM102.275,79.762C103.609,72.771 69.456,49.974 59.352,80.667C57.382,86.649 65.317,99.228 73.617,77.189C78.096,65.294 100.823,87.371 102.275,79.762Z"}),_.createElement("path",{className:"badger",d:"M418.81,39.948C419.704,39.68 421.135,39.389 423.103,39.076C425.07,38.763 427.082,38.607 429.139,38.607C431.107,38.607 432.873,38.741 434.438,39.009C436.003,39.277 437.322,39.814 438.396,40.619C439.469,41.424 440.274,42.519 440.81,43.905C441.347,45.292 441.615,47.103 441.615,49.338L441.615,62.485C443.851,61.591 445.975,60.965 447.987,60.607C449.999,60.249 452.213,60.07 454.628,60.07C458.92,60.07 462.989,60.831 466.835,62.351C470.681,63.871 474.079,66.085 477.03,68.991C479.982,71.898 482.307,75.497 484.006,79.79C485.705,84.083 486.555,89.046 486.555,94.681C486.555,100.494 485.683,105.569 483.939,109.907C482.195,114.244 479.758,117.844 476.628,120.706C473.498,123.567 469.675,125.736 465.158,127.212C460.642,128.687 455.656,129.425 450.201,129.425C444.298,129.425 439.29,128.732 435.176,127.346C431.062,125.96 427.574,124.238 424.712,122.181C420.777,119.409 418.81,115.831 418.81,111.449L418.81,39.948ZM450.201,111.449C454.314,111.449 457.512,110.041 459.792,107.224C462.073,104.406 463.213,100.226 463.213,94.681C463.213,89.046 462.05,84.843 459.725,82.071C457.4,79.298 454.27,77.912 450.335,77.912C448.546,77.912 447.003,78.091 445.707,78.449C444.41,78.806 443.001,79.343 441.481,80.059L441.481,109.303C442.465,109.929 443.65,110.443 445.036,110.846C446.422,111.248 448.144,111.449 450.201,111.449ZM524.787,60.07C529.617,60.07 534.021,60.562 538.001,61.546C541.981,62.53 545.379,64.028 548.196,66.04C551.013,68.052 553.182,70.601 554.702,73.686C556.223,76.772 556.983,80.416 556.983,84.62L556.983,114.669C556.983,116.994 556.335,118.895 555.038,120.37C553.741,121.846 552.198,123.12 550.41,124.193C544.597,127.681 536.413,129.425 525.86,129.425C521.121,129.425 516.85,128.978 513.049,128.084C509.248,127.189 505.984,125.848 503.256,124.059C500.529,122.271 498.427,119.99 496.951,117.218C495.476,114.445 494.738,111.226 494.738,107.559C494.738,101.388 496.571,96.648 500.238,93.339C503.905,90.03 509.584,87.973 517.275,87.168L534.848,85.29L534.848,84.351C534.848,81.758 533.708,79.902 531.428,78.784C529.147,77.666 525.86,77.107 521.568,77.107C518.169,77.107 514.86,77.465 511.641,78.18C508.421,78.896 505.515,79.79 502.921,80.863C501.758,80.059 500.775,78.829 499.97,77.174C499.165,75.52 498.762,73.798 498.762,72.01C498.762,69.684 499.321,67.829 500.439,66.442C501.557,65.056 503.279,63.871 505.604,62.887C508.198,61.904 511.261,61.188 514.793,60.741C518.326,60.294 521.657,60.07 524.787,60.07ZM525.86,112.791C527.381,112.791 529.058,112.634 530.891,112.321C532.724,112.008 534.088,111.583 534.983,111.047L534.983,100.315L525.324,101.12C522.82,101.299 520.763,101.835 519.153,102.73C517.543,103.624 516.738,104.965 516.738,106.754C516.738,108.543 517.431,109.996 518.818,111.114C520.204,112.232 522.551,112.791 525.86,112.791ZM568.117,94.681C568.117,88.778 569.012,83.658 570.8,79.321C572.589,74.983 575.071,71.384 578.245,68.522C581.42,65.66 585.132,63.536 589.38,62.15C593.628,60.763 598.211,60.07 603.13,60.07C604.919,60.07 606.663,60.227 608.362,60.54C610.061,60.853 611.447,61.233 612.52,61.68L612.52,39.948C613.415,39.68 614.846,39.389 616.813,39.076C618.781,38.763 620.793,38.607 622.85,38.607C624.817,38.607 626.584,38.741 628.149,39.009C629.714,39.277 631.033,39.814 632.106,40.619C633.179,41.424 633.984,42.519 634.521,43.905C635.057,45.292 635.326,47.103 635.326,49.338L635.326,112.925C635.326,117.128 633.358,120.482 629.423,122.986C626.83,124.685 623.476,126.183 619.362,127.48C615.248,128.777 610.508,129.425 605.142,129.425C599.329,129.425 594.12,128.62 589.514,127.011C584.908,125.401 581.018,123.076 577.843,120.035C574.668,116.994 572.253,113.35 570.599,109.102C568.944,104.854 568.117,100.047 568.117,94.681ZM606.215,77.912C601.386,77.912 597.675,79.298 595.081,82.071C592.488,84.843 591.191,89.046 591.191,94.681C591.191,100.226 592.398,104.406 594.813,107.224C597.227,110.041 600.715,111.449 605.276,111.449C606.886,111.449 608.339,111.203 609.636,110.711C610.933,110.22 611.939,109.661 612.655,109.035L612.655,79.522C610.866,78.449 608.72,77.912 606.215,77.912ZM681.339,60.07C686.436,60.07 691.064,60.719 695.223,62.016C699.382,63.312 702.892,64.989 705.754,67.046C707.542,68.298 708.951,69.684 709.979,71.205C711.008,72.725 711.522,74.693 711.522,77.107L711.522,124.059C711.522,128.799 710.628,132.891 708.839,136.334C707.051,139.777 704.613,142.639 701.528,144.919C698.443,147.2 694.821,148.877 690.662,149.95C686.503,151.023 682.054,151.56 677.314,151.56C669.176,151.56 662.781,150.464 658.131,148.273C653.48,146.082 651.155,142.527 651.155,137.608C651.155,135.551 651.58,133.74 652.43,132.175C653.279,130.61 654.241,129.425 655.314,128.62C657.907,130.051 660.836,131.259 664.101,132.242C667.365,133.226 670.741,133.718 674.229,133.718C679.058,133.718 682.904,132.913 685.766,131.303C688.627,129.694 690.058,127.1 690.058,123.523L690.058,121.376C686.392,122.986 681.92,123.791 676.643,123.791C672.619,123.791 668.796,123.187 665.174,121.98C661.552,120.773 658.377,118.895 655.649,116.346C652.922,113.797 650.73,110.51 649.076,106.486C647.421,102.461 646.594,97.677 646.594,92.132C646.594,86.677 647.466,81.937 649.21,77.912C650.954,73.888 653.369,70.556 656.454,67.918C659.54,65.28 663.206,63.312 667.454,62.016C671.702,60.719 676.33,60.07 681.339,60.07ZM689.656,79.522C689.03,79.164 688.113,78.806 686.906,78.449C685.699,78.091 684.201,77.912 682.412,77.912C678.03,77.912 674.743,79.142 672.552,81.601C670.361,84.061 669.265,87.571 669.265,92.132C669.265,97.319 670.361,101.053 672.552,103.333C674.743,105.614 677.538,106.754 680.936,106.754C684.603,106.754 687.51,105.904 689.656,104.205L689.656,79.522ZM760.084,129.425C754.807,129.425 749.911,128.687 745.395,127.212C740.878,125.736 736.943,123.523 733.59,120.571C730.236,117.62 727.598,113.909 725.675,109.437C723.752,104.965 722.791,99.734 722.791,93.742C722.791,87.839 723.752,82.764 725.675,78.516C727.598,74.268 730.124,70.78 733.254,68.052C736.384,65.325 739.962,63.312 743.986,62.016C748.011,60.719 752.124,60.07 756.328,60.07C761.068,60.07 765.383,60.786 769.273,62.217C773.163,63.648 776.517,65.615 779.334,68.119C782.151,70.623 784.342,73.619 785.908,77.107C787.473,80.595 788.255,84.396 788.255,88.51C788.255,91.551 787.406,93.876 785.706,95.486C784.007,97.095 781.637,98.124 778.596,98.571L745.462,103.535C746.445,106.486 748.458,108.699 751.498,110.175C754.539,111.651 758.027,112.388 761.962,112.388C765.629,112.388 769.094,111.919 772.359,110.98C775.623,110.041 778.283,108.945 780.34,107.693C781.771,108.587 782.979,109.84 783.962,111.449C784.946,113.059 785.438,114.758 785.438,116.547C785.438,120.571 783.56,123.567 779.804,125.535C776.942,127.055 773.722,128.084 770.145,128.62C766.568,129.157 763.214,129.425 760.084,129.425ZM756.328,76.705C754.181,76.705 752.326,77.063 750.761,77.778C749.196,78.493 747.921,79.41 746.937,80.528C745.954,81.646 745.216,82.898 744.724,84.284C744.232,85.67 743.941,87.079 743.852,88.51L766.791,84.754C766.523,82.965 765.539,81.176 763.84,79.388C762.141,77.599 759.637,76.705 756.328,76.705ZM822.061,127.145C821.166,127.413 819.758,127.681 817.835,127.95C815.912,128.218 813.922,128.352 811.865,128.352C809.898,128.352 808.131,128.218 806.566,127.95C805.001,127.681 803.682,127.145 802.609,126.34C801.536,125.535 800.709,124.439 800.127,123.053C799.546,121.667 799.255,119.856 799.255,117.62L799.255,77.376C799.255,75.319 799.635,73.552 800.396,72.077C801.156,70.601 802.251,69.282 803.682,68.119C805.113,66.957 806.879,65.906 808.981,64.967C811.083,64.028 813.341,63.201 815.756,62.485C818.17,61.77 820.674,61.211 823.268,60.808C825.861,60.406 828.455,60.205 831.049,60.205C835.341,60.205 838.74,61.032 841.244,62.686C843.748,64.341 845,67.046 845,70.802C845,72.054 844.821,73.284 844.463,74.491C844.106,75.699 843.659,76.794 843.122,77.778C841.244,77.778 839.321,77.867 837.354,78.046C835.386,78.225 833.463,78.493 831.585,78.851C829.707,79.209 827.941,79.589 826.286,79.991C824.632,80.394 823.223,80.863 822.061,81.4L822.061,127.145Z"}),_.createElement("path",{className:"react-ui",d:"M456.264,259.551C455.489,259.783 454.269,260.016 452.604,260.248C450.939,260.48 449.215,260.596 447.434,260.596C445.73,260.596 444.2,260.48 442.845,260.248C441.49,260.016 440.347,259.551 439.418,258.854C438.488,258.157 437.772,257.208 437.268,256.007C436.765,254.807 436.513,253.239 436.513,251.302L436.513,216.449C436.513,214.667 436.842,213.138 437.501,211.86C438.159,210.582 439.108,209.439 440.347,208.432C441.586,207.426 443.116,206.516 444.936,205.702C446.756,204.889 448.712,204.173 450.803,203.553C452.894,202.933 455.063,202.449 457.309,202.101C459.555,201.752 461.801,201.578 464.047,201.578C467.765,201.578 470.708,202.294 472.877,203.727C475.046,205.16 476.13,207.503 476.13,210.756C476.13,211.84 475.975,212.905 475.665,213.951C475.355,214.997 474.968,215.945 474.504,216.797C472.877,216.797 471.212,216.875 469.508,217.03C467.804,217.185 466.139,217.417 464.512,217.727C462.886,218.037 461.356,218.366 459.923,218.714C458.49,219.063 457.27,219.469 456.264,219.934L456.264,259.551ZM511.913,261.526C507.343,261.526 503.103,260.887 499.191,259.609C495.28,258.331 491.872,256.414 488.968,253.858C486.063,251.302 483.778,248.088 482.113,244.215C480.448,240.343 479.615,235.812 479.615,230.623C479.615,225.511 480.448,221.115 482.113,217.436C483.778,213.757 485.966,210.737 488.677,208.374C491.388,206.012 494.486,204.269 497.971,203.146C501.457,202.023 505.02,201.462 508.66,201.462C512.765,201.462 516.502,202.081 519.871,203.321C523.24,204.56 526.145,206.264 528.584,208.432C531.024,210.601 532.922,213.196 534.277,216.216C535.633,219.237 536.31,222.529 536.31,226.092C536.31,228.725 535.574,230.739 534.103,232.133C532.631,233.527 530.579,234.418 527.945,234.805L499.249,239.104C500.101,241.659 501.844,243.576 504.477,244.854C507.111,246.132 510.131,246.771 513.539,246.771C516.715,246.771 519.716,246.365 522.543,245.551C525.37,244.738 527.674,243.789 529.456,242.705C530.695,243.48 531.741,244.564 532.593,245.958C533.445,247.352 533.871,248.824 533.871,250.373C533.871,253.858 532.244,256.453 528.991,258.157C526.513,259.473 523.724,260.364 520.626,260.829C517.528,261.294 514.624,261.526 511.913,261.526ZM508.66,215.868C506.801,215.868 505.194,216.178 503.838,216.797C502.483,217.417 501.379,218.211 500.527,219.179C499.675,220.147 499.036,221.231 498.61,222.432C498.184,223.632 497.933,224.852 497.855,226.092L517.722,222.839C517.489,221.29 516.637,219.74 515.166,218.191C513.694,216.642 511.526,215.868 508.66,215.868ZM569.073,201.462C573.255,201.462 577.069,201.888 580.516,202.74C583.963,203.592 586.906,204.889 589.346,206.632C591.785,208.374 593.664,210.582 594.98,213.254C596.297,215.926 596.955,219.082 596.955,222.722L596.955,248.746C596.955,250.76 596.394,252.406 595.271,253.684C594.148,254.962 592.812,256.066 591.263,256.995C586.228,260.016 579.141,261.526 570.002,261.526C565.897,261.526 562.199,261.139 558.907,260.364C555.615,259.59 552.788,258.428 550.426,256.879C548.064,255.33 546.244,253.355 544.966,250.954C543.688,248.553 543.049,245.764 543.049,242.589C543.049,237.245 544.636,233.14 547.812,230.274C550.987,227.408 555.906,225.627 562.567,224.93L577.786,223.303L577.786,222.49C577.786,220.244 576.798,218.637 574.823,217.669C572.848,216.7 570.002,216.216 566.284,216.216C563.341,216.216 560.475,216.526 557.687,217.146C554.899,217.765 552.382,218.54 550.135,219.469C549.129,218.772 548.277,217.707 547.58,216.275C546.883,214.842 546.534,213.351 546.534,211.802C546.534,209.788 547.018,208.181 547.986,206.98C548.954,205.78 550.445,204.754 552.459,203.902C554.705,203.05 557.358,202.43 560.417,202.043C563.477,201.655 566.362,201.462 569.073,201.462ZM570.002,247.12C571.319,247.12 572.771,246.984 574.359,246.713C575.946,246.442 577.128,246.074 577.902,245.609L577.902,236.315L569.537,237.012C567.369,237.167 565.587,237.632 564.193,238.406C562.799,239.181 562.102,240.343 562.102,241.892C562.102,243.441 562.702,244.699 563.903,245.668C565.103,246.636 567.136,247.12 570.002,247.12ZM640.871,217.03C638.934,217.03 637.095,217.339 635.352,217.959C633.609,218.579 632.099,219.489 630.821,220.689C629.543,221.89 628.517,223.381 627.743,225.162C626.968,226.944 626.581,229.035 626.581,231.436C626.581,236.238 627.955,239.839 630.705,242.24C633.455,244.641 636.804,245.842 640.754,245.842C643.078,245.842 645.092,245.571 646.796,245.029C648.5,244.486 650.01,243.906 651.327,243.286C652.876,244.37 654.037,245.551 654.812,246.829C655.587,248.107 655.974,249.637 655.974,251.418C655.974,254.594 654.463,257.053 651.443,258.796C648.422,260.538 644.24,261.41 638.896,261.41C634.016,261.41 629.601,260.693 625.651,259.26C621.701,257.828 618.313,255.814 615.486,253.219C612.659,250.625 610.471,247.507 608.922,243.867C607.373,240.227 606.598,236.199 606.598,231.784C606.598,226.672 607.431,222.2 609.096,218.366C610.761,214.532 613.027,211.376 615.892,208.897C618.758,206.419 622.069,204.56 625.826,203.321C629.582,202.081 633.551,201.462 637.734,201.462C643.31,201.462 647.609,202.469 650.63,204.482C653.65,206.496 655.161,209.091 655.161,212.266C655.161,213.738 654.812,215.113 654.115,216.391C653.418,217.669 652.605,218.772 651.675,219.702C650.359,219.082 648.771,218.482 646.912,217.901C645.053,217.32 643.039,217.03 640.871,217.03ZM685.599,240.265C685.599,242.279 686.238,243.712 687.516,244.564C688.794,245.416 690.595,245.842 692.918,245.842C694.08,245.842 695.281,245.745 696.52,245.551C697.759,245.358 698.844,245.106 699.773,244.796C700.47,245.648 701.07,246.597 701.574,247.643C702.077,248.688 702.329,249.947 702.329,251.418C702.329,254.362 701.225,256.763 699.018,258.621C696.81,260.48 692.918,261.41 687.342,261.41C680.526,261.41 675.279,259.861 671.6,256.763C667.921,253.665 666.081,248.63 666.081,241.659L666.081,191.935C666.933,191.703 668.153,191.451 669.741,191.18C671.329,190.909 673.013,190.773 674.795,190.773C678.203,190.773 680.855,191.374 682.753,192.574C684.65,193.775 685.599,196.311 685.599,200.184L685.599,207.619L700.819,207.619C701.283,208.471 701.729,209.536 702.155,210.814C702.581,212.092 702.794,213.506 702.794,215.055C702.794,217.765 702.193,219.721 700.993,220.922C699.792,222.122 698.185,222.722 696.171,222.722L685.599,222.722L685.599,240.265ZM799.454,233.643C799.454,237.826 798.737,241.64 797.305,245.087C795.872,248.533 793.8,251.476 791.089,253.916C788.378,256.356 785.086,258.234 781.214,259.551C777.341,260.868 772.965,261.526 768.086,261.526C763.206,261.526 758.83,260.868 754.958,259.551C751.085,258.234 747.793,256.356 745.082,253.916C742.372,251.476 740.3,248.533 738.867,245.087C737.434,241.64 736.718,237.826 736.718,233.643L736.718,189.263C737.57,189.108 738.925,188.895 740.784,188.624C742.643,188.353 744.424,188.217 746.128,188.217C747.909,188.217 749.478,188.353 750.833,188.624C752.189,188.895 753.331,189.379 754.261,190.076C755.19,190.773 755.887,191.742 756.352,192.981C756.816,194.22 757.049,195.847 757.049,197.86L757.049,233.295C757.049,237.012 758.075,239.917 760.128,242.008C762.18,244.099 764.833,245.145 768.086,245.145C771.416,245.145 774.088,244.099 776.102,242.008C778.116,239.917 779.123,237.012 779.123,233.295L779.123,189.263C779.975,189.108 781.33,188.895 783.189,188.624C785.048,188.353 786.829,188.217 788.533,188.217C790.314,188.217 791.883,188.353 793.238,188.624C794.594,188.895 795.736,189.379 796.666,190.076C797.595,190.773 798.292,191.742 798.757,192.981C799.221,194.22 799.454,195.847 799.454,197.86L799.454,233.643ZM834.54,259.202C833.688,259.435 832.352,259.667 830.531,259.899C828.711,260.132 826.911,260.248 825.129,260.248C823.348,260.248 821.779,260.112 820.424,259.841C819.069,259.57 817.926,259.086 816.997,258.389C816.067,257.692 815.37,256.724 814.906,255.485C814.441,254.245 814.208,252.619 814.208,250.605L814.208,189.263C815.06,189.108 816.416,188.895 818.275,188.624C820.134,188.353 821.915,188.217 823.619,188.217C825.4,188.217 826.969,188.353 828.324,188.624C829.68,188.895 830.822,189.379 831.751,190.076C832.681,190.773 833.378,191.742 833.843,192.981C834.307,194.22 834.54,195.847 834.54,197.86L834.54,259.202Z"})),uN=e=>_.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 440 440",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",xmlSpace:"preserve","xmlns:serif":"http://www.serif.com/",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:1.5},...e},_.createElement("circle",{cx:220,cy:220,r:144,style:{fill:"rgb(136,136,136)",stroke:"black",strokeWidth:"0.33px"}}),_.createElement("path",{d:"M220,12C334.798,12 428,105.202 428,220C428,334.798 334.798,428 220,428C105.202,428 12,334.798 12,220C12,105.202 105.202,12 220,12ZM220,76C140.524,76 76,140.524 76,220C76,299.476 140.524,364 220,364C299.476,364 364,299.476 364,220C364,140.524 299.476,76 220,76Z",style:{fill:"rgb(206,206,206)",stroke:"black",strokeWidth:"6.67px"}}),_.createElement("path",{d:"M41.319,232.772C38.119,232.829 35.878,232.789 34.556,232.652C33.233,232.516 32.025,232.097 30.891,231.317C29.797,230.537 28.939,229.512 28.315,228.163C27.731,226.853 27.383,225.299 27.351,223.499C27.321,221.82 27.574,220.295 28.11,218.925C28.645,217.555 29.466,216.461 30.532,215.641C31.636,214.782 32.828,214.28 34.145,214.097C35.421,213.914 37.7,213.793 40.979,213.735L46.378,213.638C49.538,213.582 51.819,213.621 53.142,213.758C54.464,213.894 55.672,214.313 56.766,215.093C57.9,215.873 58.758,216.898 59.343,218.248C59.966,219.557 60.274,221.112 60.306,222.912C60.336,224.591 60.083,226.116 59.547,227.486C59.052,228.855 58.231,229.95 57.126,230.769C56.021,231.629 54.829,232.131 53.553,232.313C52.236,232.497 49.957,232.618 46.718,232.675L41.319,232.772ZM51.53,224.348C53.01,224.322 53.968,224.225 54.365,224.058C54.762,223.891 54.957,223.567 54.947,223.047C54.94,222.607 54.774,222.29 54.45,222.056C54.126,221.862 53.124,221.759 51.484,221.789L36.727,222.052C34.887,222.085 33.769,222.185 33.331,222.313C32.934,222.48 32.7,222.844 32.71,223.364C32.72,223.924 32.966,224.279 33.489,224.43C33.972,224.581 35.173,224.64 37.012,224.607L51.53,224.348ZM60.115,235.306L61.347,243.494C61.681,245.709 61.739,247.439 61.562,248.68C61.424,249.914 61.047,250.901 60.464,251.596C59.92,252.284 59.189,252.799 58.275,253.179C57.356,253.52 55.95,253.853 53.972,254.151L51.243,254.562C49.265,254.859 47.772,254.882 46.796,254.584C45.827,254.325 45.002,253.681 44.361,252.645C43.719,251.609 43.228,250.226 42.96,248.447L42.632,246.271L30.054,248.165L28.827,240.017L60.115,235.306ZM55.962,244.264L48.012,245.461L48.101,246.054C48.214,246.806 48.45,247.296 48.887,247.514C49.285,247.737 50.06,247.782 51.207,247.609L53.778,247.222C54.846,247.061 55.534,246.796 55.797,246.392C56.066,246.028 56.117,245.293 55.962,244.264ZM65.668,263.888L35.019,271.744L32.973,263.762L63.622,255.906L65.668,263.888ZM73.017,284.844L43.393,295.958L40.864,289.217L52.805,280.165L39.36,285.21L36.944,278.768L66.567,267.654L68.984,274.095L57.267,283.404L70.6,278.402L73.017,284.844ZM78.538,295.659L50.283,309.897L46.575,302.539L74.83,288.301L78.538,295.659ZM74.884,324.988C72.198,326.727 70.274,327.877 69.079,328.459C67.884,329.042 66.637,329.325 65.262,329.262C63.921,329.177 62.651,328.76 61.408,327.945C60.221,327.141 59.105,326.005 58.127,324.494C57.214,323.084 56.623,321.655 56.354,320.209C56.085,318.763 56.204,317.4 56.676,316.142C57.159,314.828 57.906,313.773 58.927,312.922C59.915,312.092 61.786,310.786 64.539,309.004L69.073,306.07C71.725,304.353 73.683,303.181 74.878,302.598C76.073,302.015 77.32,301.733 78.661,301.817C80.036,301.88 81.306,302.297 82.515,303.135C83.736,303.917 84.819,305.074 85.797,306.585C86.71,307.996 87.3,309.424 87.569,310.87C87.872,312.294 87.753,313.657 87.248,314.937C86.764,316.251 86.017,317.306 85.03,318.136C84.008,318.987 82.138,320.293 79.418,322.054L74.884,324.988ZM79.105,312.441C80.347,311.637 81.11,311.048 81.358,310.697C81.607,310.345 81.601,309.968 81.319,309.531C81.08,309.162 80.772,308.98 80.372,308.952C79.995,308.958 79.09,309.401 77.714,310.292L65.322,318.312C63.778,319.312 62.881,319.987 62.577,320.327C62.328,320.679 62.322,321.111 62.605,321.548C62.909,322.018 63.306,322.19 63.829,322.042C64.319,321.915 65.37,321.33 66.915,320.331L79.105,312.441ZM104.097,331.146L80.061,351.721L75.379,346.251L83.505,333.662L72.595,343L68.121,337.773L92.158,317.198L96.632,322.425L88.805,335.179L99.624,325.92L104.097,331.146ZM116.973,342.973L99.303,369.64L93.032,363.991L96.536,359.503L94.337,357.522L90.179,361.421L83.849,355.718L108.146,335.022L116.973,342.973ZM100.106,355.182C102.219,352.239 104.837,348.676 108.073,344.485C103.407,348.41 100.049,351.361 98.026,353.308L100.106,355.182ZM133.778,355.495L130.062,360.657L126.102,357.806L111.332,378.323L104.645,373.509L119.414,352.992L115.486,350.164L119.202,345.002L133.778,355.495ZM135.754,356.629L147.731,363.322L144.628,368.874L139.845,366.2L136.918,371.438L141.387,373.936L138.46,379.173L133.991,376.676L130.596,382.752L135.833,385.678L132.75,391.196L120.32,384.249L135.754,356.629ZM150.451,364.831L156.15,367.169C159.813,368.672 162.217,369.874 163.376,370.738C164.534,371.603 165.306,372.568 165.653,373.618C166,374.669 166.095,375.702 165.849,376.725C165.654,377.726 164.969,379.607 163.83,382.382L159.625,392.633C158.547,395.261 157.708,396.991 157.099,397.736C156.476,398.518 155.781,399.054 154.939,399.314C154.149,399.553 153.22,399.604 152.256,399.424C151.255,399.23 149.84,398.779 148.027,398.035L138.442,394.103L150.451,364.831ZM156.01,372.991L148.115,392.235C149.188,392.675 149.946,392.726 150.387,392.388C150.828,392.051 151.462,390.927 152.267,388.966L156.927,377.605C157.474,376.272 157.749,375.391 157.827,374.99C157.904,374.59 157.826,374.255 157.569,373.933C157.348,373.627 156.824,373.325 156.01,372.991ZM194.889,388.345L187.399,386.838L187.865,384.525C188.078,383.466 188.102,382.736 187.961,382.422C187.828,382.069 187.538,381.888 187.107,381.802C186.636,381.707 186.205,381.824 185.891,382.169C185.537,382.506 185.301,383.07 185.135,383.894C184.93,384.913 184.929,385.729 185.101,386.294C185.265,386.899 185.884,387.676 186.989,388.673C190.171,391.517 192.051,393.731 192.724,395.254C193.389,396.816 193.418,399.106 192.802,402.165C192.361,404.361 191.755,405.953 191.04,406.87C190.317,407.826 189.124,408.484 187.484,408.929C185.891,409.343 184.095,409.349 182.134,408.954C179.977,408.52 178.221,407.718 176.857,406.587C175.486,405.495 174.679,404.231 174.461,402.882C174.243,401.532 174.37,399.681 174.836,397.367L175.246,395.328L182.736,396.835L181.979,400.599C181.742,401.776 181.71,402.545 181.843,402.898C182.007,403.298 182.328,403.526 182.877,403.636C183.387,403.739 183.866,403.59 184.18,403.246C184.541,402.869 184.785,402.266 184.951,401.442C185.322,399.599 185.323,398.375 184.924,397.724C184.532,397.033 183.467,395.839 181.727,394.143C179.995,392.407 178.859,391.159 178.35,390.444C177.802,389.722 177.419,388.788 177.2,387.642C176.982,386.497 177.062,385.085 177.393,383.438C177.875,381.046 178.535,379.384 179.345,378.404C180.193,377.432 181.347,376.767 182.798,376.447C184.297,376.095 185.968,376.105 187.89,376.492C189.968,376.91 191.709,377.586 193.057,378.592C194.374,379.551 195.18,380.611 195.446,381.725C195.711,382.839 195.631,384.659 195.142,387.09L194.889,388.345ZM200.214,379.311L213.892,380.38L213.397,386.721L207.933,386.294L207.466,392.276L212.57,392.675L212.102,398.657L206.998,398.257L206.456,405.196L212.437,405.664L211.945,411.965L197.748,410.855L200.214,379.311ZM225.777,380.267L226.42,405.578L231.418,405.452L231.578,411.77L218.342,412.105L217.54,380.476L225.777,380.267ZM233.537,379.948L247.346,378.191L248.149,384.5L242.514,385.217L243.272,391.169L248.311,390.528L249.069,396.479L244.029,397.121L245.706,410.295L237.532,411.335L233.537,379.948ZM258.549,375.749L265.335,406.653L257.287,408.42L250.501,377.517L258.549,375.749ZM281.962,378.541L274.713,380.955L273.968,378.716C273.626,377.691 273.285,377.046 273.007,376.844C272.716,376.603 272.374,376.591 271.957,376.73C271.501,376.882 271.185,377.198 271.084,377.653C270.945,378.121 271.02,378.728 271.286,379.525C271.615,380.512 272.019,381.22 272.449,381.625C272.892,382.068 273.815,382.435 275.27,382.751C279.444,383.638 282.176,384.625 283.516,385.612C284.869,386.637 286.033,388.61 287.019,391.57C287.727,393.696 287.992,395.378 287.827,396.529C287.675,397.718 286.967,398.882 285.765,400.083C284.588,401.234 283.032,402.132 281.135,402.764C279.047,403.459 277.125,403.636 275.379,403.332C273.646,403.066 272.318,402.37 271.458,401.307C270.598,400.244 269.789,398.574 269.043,396.335L268.386,394.362L275.635,391.947L276.848,395.591C277.227,396.729 277.581,397.412 277.872,397.653C278.214,397.918 278.606,397.956 279.137,397.779C279.63,397.615 279.972,397.248 280.073,396.793C280.2,396.287 280.112,395.642 279.846,394.845C279.252,393.061 278.645,391.999 277.975,391.632C277.292,391.227 275.774,390.721 273.421,390.113C271.056,389.467 269.45,388.948 268.653,388.581C267.818,388.227 267.021,387.607 266.263,386.721C265.504,385.836 264.872,384.571 264.341,382.977C263.57,380.662 263.317,378.891 263.532,377.639C263.786,376.374 264.456,375.223 265.557,374.224C266.683,373.174 268.138,372.352 269.997,371.733C272.009,371.063 273.855,370.785 275.525,370.988C277.144,371.165 278.371,371.684 279.155,372.519C279.939,373.354 280.774,374.973 281.557,377.326L281.962,378.541ZM298.791,359.997L312.694,388.418L305.293,392.039L299.457,380.11L297.265,381.182L303.101,393.111L295.699,396.732L281.795,368.311L289.197,364.69L294.172,374.858L296.363,373.786L291.389,363.618L298.791,359.997ZM328.977,350.672L322.871,355.265L321.453,353.379C320.804,352.515 320.275,352.012 319.947,351.909C319.595,351.773 319.267,351.87 318.915,352.134C318.532,352.423 318.332,352.823 318.381,353.287C318.397,353.775 318.662,354.326 319.167,354.998C319.792,355.829 320.401,356.372 320.937,356.619C321.498,356.898 322.49,356.953 323.97,356.791C328.209,356.305 331.113,356.373 332.698,356.883C334.306,357.425 336.036,358.927 337.912,361.42C339.258,363.21 340.044,364.721 340.254,365.865C340.488,367.04 340.185,368.369 339.428,369.89C338.678,371.355 337.487,372.701 335.889,373.903C334.131,375.225 332.364,376.004 330.612,376.27C328.885,376.568 327.404,376.33 326.251,375.596C325.098,374.862 323.8,373.535 322.382,371.649L321.132,369.987L327.237,365.395L329.546,368.463C330.267,369.422 330.82,369.958 331.172,370.093C331.58,370.237 331.964,370.148 332.411,369.812C332.827,369.499 333.034,369.043 332.986,368.579C332.945,368.059 332.656,367.475 332.151,366.804C331.021,365.301 330.108,364.487 329.356,364.352C328.58,364.185 326.98,364.187 324.556,364.358C322.108,364.498 320.42,364.516 319.548,364.421C318.644,364.35 317.691,364.016 316.691,363.417C315.69,362.818 314.688,361.82 313.679,360.477C312.212,358.527 311.41,356.928 311.216,355.673C311.054,354.393 311.324,353.088 312.051,351.791C312.785,350.438 313.903,349.197 315.47,348.019C317.164,346.744 318.827,345.894 320.474,345.556C322.066,345.21 323.394,345.312 324.403,345.854C325.411,346.397 326.717,347.667 328.208,349.649L328.977,350.672ZM352.018,341.021C354.259,343.305 355.771,344.96 356.581,346.015C357.391,347.069 357.917,348.234 358.13,349.594C358.315,350.925 358.161,352.253 357.61,353.634C357.06,354.958 356.17,356.279 354.885,357.539C353.686,358.715 352.405,359.58 351.041,360.132C349.678,360.685 348.319,360.841 346.992,360.631C345.608,360.419 344.425,359.899 343.386,359.068C342.376,358.266 340.722,356.695 338.425,354.353L334.644,350.498C332.431,348.242 330.892,346.558 330.082,345.504C329.272,344.449 328.746,343.285 328.561,341.953C328.348,340.594 328.502,339.266 329.081,337.914C329.603,336.561 330.521,335.269 331.806,334.008C333.005,332.832 334.286,331.967 335.649,331.415C336.984,330.834 338.343,330.677 339.699,330.917C341.083,331.128 342.266,331.649 343.276,332.45C344.315,333.281 345.968,334.852 348.237,337.166L352.018,341.021ZM338.881,339.394C337.845,338.338 337.116,337.708 336.721,337.535C336.327,337.361 335.959,337.443 335.587,337.807C335.273,338.115 335.157,338.453 335.21,338.85C335.291,339.218 335.905,340.016 337.054,341.187L347.389,351.724C348.678,353.038 349.519,353.782 349.913,354.012C350.307,354.185 350.732,354.104 351.103,353.74C351.503,353.348 351.592,352.925 351.342,352.442C351.12,351.987 350.337,351.074 349.049,349.76L338.881,339.394ZM341.099,325.297L349.778,314.415L354.751,318.38L351.209,322.821L355.9,326.562L359.067,322.591L363.758,326.332L360.59,330.303L370.973,338.584L365.835,345.026L341.099,325.297ZM360.217,298.339L365.582,301.754L362.962,305.871L384.287,319.447L379.862,326.398L358.537,312.822L355.937,316.905L350.572,313.489L360.217,298.339ZM373.724,268.616L401.315,284.523L397.232,293.957C392.425,292.879 387.026,291.458 381.05,289.656C383.345,290.998 388.109,293.888 395.342,298.326L391.291,307.687L360.792,298.497L363.969,291.155L374.435,294.769L384.533,298.224C379.631,295.754 373.288,292.181 365.542,287.521L368.942,279.665C369.87,279.936 373.139,281.046 378.872,283.004L390.287,286.942C383.414,283.488 376.851,279.819 370.562,275.921L373.724,268.616ZM376.781,254.323L408.604,257.594L406.512,265.77L400.91,264.75L400.176,267.617L405.56,269.49L403.448,277.745L373.836,265.832L376.781,254.323ZM395.425,263.594C391.838,263.089 387.466,262.425 382.252,261.503C387.895,263.814 392.068,265.419 394.731,266.307L395.425,263.594ZM378.103,248.493L378.802,242.694C379.266,238.842 379.736,236.28 380.221,234.928C380.661,233.612 381.55,232.591 382.886,231.865C384.218,231.18 386.216,230.977 388.877,231.298C391.339,231.594 392.929,232.108 393.691,232.804C394.454,233.5 394.826,234.754 394.77,236.56C395.359,235.02 396.048,233.975 396.791,233.5C397.533,233.025 398.167,232.779 398.781,232.692C399.352,232.64 400.91,232.747 403.452,233.053L411.712,234.049L410.798,241.634L400.354,240.375C398.686,240.175 397.639,240.169 397.208,240.399C396.778,240.63 396.498,241.281 396.364,242.393L410.502,244.096L409.516,252.277L378.103,248.493ZM384.49,240.962L391.479,241.804C391.589,240.891 391.507,240.236 391.312,239.85C391.116,239.464 390.306,239.165 388.916,238.998L387.209,238.792C386.216,238.672 385.522,238.75 385.161,239.069C384.84,239.393 384.6,240.049 384.49,240.962ZM380.371,226.869L380.35,213.149L386.71,213.139L386.718,218.619L392.718,218.61L392.71,213.49L398.71,213.48L398.718,218.6L405.678,218.589L405.669,212.589L411.989,212.579L412.011,226.819L380.371,226.869Z"}),_.createElement("path",{d:"M65.814,139.849C68.729,141.171 70.736,142.169 71.872,142.859C73.008,143.55 73.919,144.446 74.609,145.637C75.262,146.812 75.598,148.106 75.583,149.592C75.548,151.026 75.195,152.579 74.452,154.218C73.759,155.748 72.876,157.017 71.804,158.024C70.733,159.032 69.522,159.669 68.208,159.951C66.841,160.254 65.55,160.196 64.281,159.796C63.05,159.414 60.94,158.545 57.953,157.191L53.034,154.961C50.156,153.656 48.113,152.642 46.977,151.951C45.841,151.261 44.929,150.364 44.276,149.19C43.586,147.999 43.251,146.705 43.302,145.235C43.301,143.785 43.69,142.248 44.433,140.609C45.127,139.079 46.009,137.81 47.081,136.803C48.116,135.779 49.327,135.142 50.677,134.876C52.044,134.573 53.335,134.631 54.567,135.014C55.836,135.414 57.945,136.282 60.896,137.62L65.814,139.849ZM52.976,143.077C51.628,142.466 50.721,142.142 50.291,142.123C49.86,142.103 49.546,142.312 49.331,142.786C49.15,143.186 49.163,143.544 49.356,143.895C49.564,144.209 50.426,144.731 51.919,145.408L65.362,151.503C67.038,152.262 68.091,152.652 68.542,152.724C68.972,152.744 69.339,152.515 69.554,152.041C69.785,151.531 69.715,151.104 69.308,150.744C68.937,150.4 67.877,149.832 66.201,149.072L52.976,143.077ZM52.319,126.004L56.705,118.981C57.892,117.081 58.972,115.728 59.913,114.901C60.82,114.053 61.749,113.548 62.643,113.399C63.504,113.229 64.394,113.314 65.336,113.619C66.256,113.958 67.541,114.619 69.237,115.678L71.578,117.14C73.275,118.2 74.424,119.153 74.971,120.014C75.54,120.84 75.748,121.866 75.562,123.07C75.376,124.275 74.85,125.644 73.897,127.171L72.732,129.037L83.52,135.775L79.156,142.764L52.319,126.004ZM61.298,121.897L68.117,126.156L68.435,125.647C68.838,125.002 68.978,124.476 68.787,124.027C68.63,123.599 68.07,123.06 67.086,122.446L64.88,121.069C63.964,120.497 63.269,120.251 62.807,120.387C62.366,120.489 61.849,121.015 61.298,121.897ZM65.491,105.806L74.058,95.089L79.026,99.06L75.604,103.341L80.291,107.087L83.488,103.088L88.174,106.834L84.977,110.834L90.414,115.179L94.16,110.493L99.097,114.439L90.205,125.562L65.491,105.806ZM91.595,76.985L113.834,99.49L108.713,104.551L95.575,97.345L105.668,107.559L100.775,112.395L78.535,89.89L83.429,85.054L96.71,91.949L86.701,81.82L91.595,76.985ZM125.69,63.611L119.349,67.872L118.033,65.913C117.43,65.017 116.929,64.486 116.607,64.365C116.262,64.211 115.93,64.29 115.565,64.536C115.166,64.803 114.946,65.192 114.97,65.658C114.961,66.146 115.196,66.711 115.664,67.409C116.244,68.272 116.823,68.846 117.346,69.122C117.89,69.431 118.878,69.538 120.364,69.455C124.624,69.195 127.52,69.417 129.075,70.011C130.653,70.637 132.301,72.229 134.041,74.818C135.29,76.677 135.995,78.228 136.144,79.381C136.314,80.568 135.942,81.878 135.104,83.357C134.277,84.78 133.017,86.06 131.357,87.176C129.531,88.403 127.726,89.086 125.962,89.259C124.221,89.465 122.756,89.149 121.643,88.354C120.531,87.56 119.306,86.166 117.989,84.207L116.829,82.481L123.17,78.22L125.312,81.407C125.981,82.403 126.505,82.967 126.849,83.121C127.249,83.286 127.637,83.218 128.102,82.905C128.534,82.615 128.765,82.171 128.741,81.705C128.728,81.184 128.471,80.585 128.002,79.888C126.954,78.328 126.085,77.466 125.341,77.291C124.575,77.083 122.977,77 120.548,77.042C118.096,77.051 116.409,76.98 115.544,76.839C114.645,76.72 113.711,76.335 112.744,75.684C111.776,75.033 110.829,73.983 109.892,72.589C108.531,70.563 107.815,68.924 107.688,67.66C107.595,66.373 107.934,65.085 108.728,63.829C109.533,62.516 110.716,61.336 112.343,60.243C114.102,59.06 115.808,58.3 117.471,58.05C119.079,57.788 120.4,57.961 121.378,58.557C122.357,59.152 123.593,60.49 124.976,62.548L125.69,63.611ZM151.705,60.191C153.126,63.059 154.048,65.102 154.491,66.356C154.934,67.609 155.072,68.88 154.852,70.239C154.615,71.562 154.056,72.776 153.103,73.917C152.169,75.005 150.913,75.984 149.3,76.783C147.795,77.529 146.308,77.953 144.841,78.055C143.374,78.156 142.033,77.883 140.837,77.27C139.587,76.64 138.624,75.777 137.895,74.666C137.184,73.59 136.1,71.582 134.644,68.643L132.247,63.804C130.844,60.972 129.904,58.894 129.461,57.64C129.019,56.386 128.881,55.115 129.118,53.793C129.338,52.434 129.897,51.219 130.867,50.114C131.783,48.99 133.057,48.047 134.67,47.248C136.175,46.502 137.662,46.079 139.129,45.977C140.579,45.839 141.919,46.112 143.133,46.761C144.383,47.392 145.346,48.254 146.057,49.33C146.787,50.442 147.87,52.449 149.309,55.353L151.705,60.191ZM139.723,54.566C139.066,53.239 138.568,52.415 138.247,52.127C137.927,51.84 137.551,51.803 137.085,52.033C136.691,52.229 136.475,52.514 136.402,52.907C136.365,53.283 136.701,54.232 137.429,55.702L143.981,68.928C144.797,70.577 145.366,71.545 145.669,71.886C145.99,72.173 146.419,72.229 146.885,71.998C147.387,71.749 147.603,71.375 147.516,70.838C147.446,70.336 146.985,69.226 146.168,67.577L139.723,54.566ZM167.692,34.963L174.441,55.018C175.206,57.293 175.666,58.911 175.821,59.871C176.013,60.82 175.878,61.92 175.489,63.149C175.088,64.339 174.357,65.429 173.348,66.317C172.3,67.218 170.987,67.956 169.395,68.491C167.613,69.091 165.919,69.324 164.35,69.176C162.794,69.067 161.502,68.615 160.501,67.897C159.499,67.179 158.751,66.334 158.28,65.311C157.809,64.287 156.98,62.076 155.845,58.702L149.874,40.96L157.683,38.332L165.249,60.813C165.696,62.14 166.052,62.948 166.281,63.251C166.56,63.579 166.927,63.667 167.344,63.526C167.837,63.36 168.076,63.069 168.088,62.601C168.099,62.133 167.856,61.159 167.358,59.681L159.92,37.579L167.692,34.963ZM174.727,33.131L180.462,32.033C184.273,31.303 186.857,30.972 188.292,31.023C189.681,31.042 190.923,31.578 192.021,32.631C193.079,33.691 193.88,35.533 194.383,38.165C194.85,40.601 194.844,42.272 194.412,43.21C193.981,44.147 192.9,44.884 191.162,45.379C192.809,45.471 194.014,45.811 194.692,46.373C195.37,46.936 195.797,47.465 196.067,48.024C196.29,48.552 196.662,50.069 197.143,52.583L198.707,60.755L191.204,62.191L189.226,51.859C188.91,50.209 188.597,49.21 188.246,48.87C187.896,48.53 187.191,48.461 186.091,48.671L188.768,62.658L180.675,64.207L174.727,33.131ZM183.842,36.925L185.166,43.839C186.069,43.666 186.668,43.389 186.976,43.085C187.285,42.782 187.323,41.919 187.06,40.544L186.737,38.855C186.549,37.873 186.264,37.235 185.85,36.988C185.444,36.781 184.746,36.752 183.842,36.925ZM219.815,41.52L211.587,41.97L211.288,36.498C211.198,34.861 211.064,33.867 210.884,33.516C210.663,33.128 210.292,32.947 209.693,32.98C209.014,33.017 208.588,33.281 208.454,33.769C208.281,34.259 208.258,35.302 208.345,36.9L209.148,51.558C209.231,53.076 209.367,54.11 209.591,54.538C209.777,55.009 210.19,55.226 210.829,55.191C211.468,55.156 211.854,54.895 211.987,54.407C212.163,53.957 212.182,52.834 212.088,51.116L211.871,47.162L220.099,46.712L220.165,47.91C220.344,51.185 220.231,53.515 219.866,54.897C219.461,56.281 218.528,57.534 216.987,58.66C215.447,59.786 213.558,60.41 211.241,60.537C208.845,60.668 206.824,60.338 205.218,59.545C203.612,58.751 202.508,57.61 201.904,56.08C201.342,54.589 200.935,52.288 200.765,49.172L200.26,39.946C200.135,37.67 200.123,35.988 200.22,34.821C200.318,33.694 200.736,32.549 201.438,31.469C202.138,30.349 203.173,29.491 204.498,28.818C205.861,28.102 207.403,27.738 209.2,27.639C211.597,27.508 213.62,27.878 215.268,28.709C216.876,29.543 217.98,30.684 218.536,32.056C219.132,33.425 219.489,35.569 219.651,38.524L219.815,41.52ZM226.051,27.944L239.739,28.872L239.309,35.218L233.841,34.847L233.435,40.833L238.544,41.179L238.137,47.166L233.029,46.819L232.558,53.763L238.544,54.169L238.117,60.475L223.909,59.511L226.051,27.944ZM272.132,44.93L264.713,43.105L265.276,40.813C265.534,39.765 265.59,39.037 265.462,38.717C265.344,38.359 265.062,38.166 264.635,38.061C264.169,37.946 263.733,38.045 263.404,38.376C263.037,38.697 262.777,39.251 262.576,40.067C262.328,41.077 262.292,41.892 262.44,42.464C262.578,43.074 263.163,43.877 264.225,44.921C267.282,47.898 269.067,50.19 269.674,51.74C270.272,53.329 270.203,55.618 269.458,58.648C268.923,60.823 268.25,62.388 267.497,63.274C266.734,64.198 265.514,64.804 263.856,65.179C262.247,65.525 260.452,65.454 258.51,64.977C256.373,64.451 254.653,63.575 253.339,62.387C252.015,61.237 251.263,59.94 251.102,58.583C250.942,57.225 251.148,55.381 251.712,53.089L252.209,51.069L259.628,52.894L258.711,56.623C258.424,57.788 258.359,58.555 258.477,58.913C258.624,59.32 258.935,59.562 259.479,59.695C259.984,59.82 260.469,59.692 260.797,59.36C261.174,59 261.444,58.407 261.644,57.592C262.093,55.766 262.147,54.543 261.775,53.875C261.414,53.169 260.4,51.931 258.734,50.162C257.078,48.354 255.996,47.058 255.518,46.322C255.001,45.577 254.658,44.628 254.489,43.474C254.319,42.32 254.459,40.913 254.861,39.282C255.443,36.912 256.174,35.28 257.025,34.335C257.913,33.401 259.095,32.785 260.559,32.527C262.071,32.24 263.74,32.321 265.643,32.789C267.702,33.295 269.412,34.045 270.716,35.108C271.991,36.121 272.752,37.215 272.97,38.339C273.187,39.464 273.029,41.279 272.437,43.687L272.132,44.93ZM292.077,61.866C290.909,64.845 290.018,66.902 289.387,68.072C288.756,69.243 287.909,70.199 286.755,70.95C285.616,71.664 284.341,72.066 282.856,72.129C281.423,72.168 279.854,71.897 278.178,71.24C276.614,70.627 275.301,69.812 274.239,68.794C273.177,67.776 272.478,66.6 272.127,65.303C271.754,63.953 271.745,62.661 272.078,61.374C272.396,60.123 273.153,57.972 274.35,54.918L276.321,49.89C277.474,46.948 278.381,44.854 279.011,43.684C279.642,42.513 280.49,41.557 281.629,40.843C282.782,40.092 284.057,39.69 285.527,39.665C286.975,39.588 288.53,39.896 290.206,40.553C291.77,41.166 293.083,41.982 294.145,42.999C295.221,43.98 295.92,45.156 296.256,46.491C296.63,47.84 296.639,49.132 296.321,50.383C295.988,51.67 295.23,53.822 294.048,56.838L292.077,61.866ZM288.186,49.213C288.726,47.836 289.002,46.913 288.999,46.482C288.996,46.051 288.771,45.748 288.287,45.558C287.877,45.398 287.521,45.43 287.181,45.64C286.878,45.865 286.401,46.752 285.803,48.279L280.416,62.021C279.745,63.734 279.411,64.806 279.362,65.26C279.365,65.691 279.612,66.045 280.097,66.235C280.618,66.44 281.041,66.347 281.379,65.922C281.704,65.533 282.216,64.445 282.887,62.732L288.186,49.213ZM305.248,47.78L317.483,54.419L314.45,60.009L309.458,57.3L306.596,62.574L311.062,64.997L308.2,70.27L303.735,67.848L297.402,79.521L290.16,75.591L305.248,47.78ZM336.214,66.91L332.603,72.146L328.586,69.376L314.235,90.188L307.451,85.51L321.802,64.698L317.818,61.951L321.428,56.715L336.214,66.91ZM364.183,92.203L339.722,112.6L332.279,105.509C334.952,101.37 338.151,96.794 341.907,91.809C339.854,93.499 335.496,96.971 328.833,102.225L321.448,95.189L340.609,69.743L346.401,75.262L339.394,83.834L332.663,92.117C336.674,88.37 342.219,83.653 349.268,77.993L355.466,83.898C354.89,84.676 352.72,87.36 348.901,92.064L341.262,101.415C346.878,96.158 352.588,91.267 358.42,86.712L364.183,92.203ZM375.916,107.812L353.681,130.812L348.545,124.115L352.809,120.341L351.008,117.992L346.209,121.067L341.024,114.307L368.687,98.385L375.916,107.812ZM357.107,116.742C359.72,114.234 362.944,111.208 366.89,107.677C361.586,110.686 357.747,112.975 355.403,114.521L357.107,116.742ZM381.75,116.129L384.673,121.184C386.616,124.543 387.779,126.874 388.203,128.246C388.641,129.564 388.544,130.914 387.911,132.296C387.258,133.644 385.782,135.006 383.462,136.348C381.315,137.589 379.735,138.133 378.708,138.035C377.68,137.936 376.629,137.157 375.589,135.679C376.044,137.264 376.12,138.514 375.812,139.34C375.504,140.165 375.144,140.742 374.705,141.181C374.28,141.565 372.97,142.416 370.754,143.697L363.551,147.862L359.727,141.249L368.834,135.982C370.288,135.141 371.128,134.516 371.334,134.074C371.54,133.631 371.373,132.942 370.812,131.973L358.485,139.102L354.36,131.969L381.75,116.129ZM381.166,125.985L375.071,129.51C375.532,130.306 375.991,130.78 376.379,130.972C376.767,131.163 377.594,130.916 378.806,130.215L380.295,129.354C381.161,128.853 381.669,128.374 381.766,127.902C381.828,127.451 381.626,126.782 381.166,125.985ZM394.047,138.523L399.41,151.152L393.555,153.638L391.414,148.594L385.891,150.939L387.892,155.651L382.369,157.996L380.368,153.284L373.962,156.004L376.307,161.527L370.49,163.997L364.924,150.89L394.047,138.523Z"}),_.createElement("path",{d:"M184.955,228.867C188.721,238.945 188.513,248.571 184.331,257.744C180.149,266.917 173.328,273.271 163.868,276.806C162.694,277.245 161.783,276.599 161.136,274.868C160.466,273.075 160.618,271.785 161.592,270.998C165.55,268.391 167.432,264.376 167.237,258.953C167.118,255.615 165.001,248.444 160.888,237.438C158.162,230.143 155.958,225.188 154.277,222.575C150.745,216.708 146.627,213.702 141.923,213.557C140.501,214.089 139.223,212.84 138.091,209.81C137.167,207.337 137.447,205.823 138.931,205.269C147.834,201.941 156.818,202.6 165.882,207.246C174.969,211.953 181.327,219.16 184.955,228.867ZM154.841,276.691C155.65,278.855 155.467,280.157 154.292,280.596C144.462,284.27 134.975,283.869 125.834,279.394C116.823,275.08 110.469,267.978 106.772,258.085C103.145,248.378 103.217,238.768 106.99,229.254C110.725,219.826 117.074,213.437 126.039,210.086C127.029,209.717 127.959,210.038 128.831,211.051C129.61,211.817 130.208,212.756 130.624,213.869C131.017,214.92 131.112,215.836 130.911,216.616C130.678,217.125 129.963,217.851 128.764,218.792C127.404,219.864 126.471,220.952 125.968,222.057C125.054,223.948 124.673,226.416 124.824,229.46C125.129,232.728 126.46,237.515 128.817,243.822L132.768,254.395C136.096,263.298 139.268,269.053 142.286,271.66C145.11,274.127 148.362,275.097 152.04,274.568C152.395,274.576 152.932,274.692 153.65,274.917C154.144,275.296 154.541,275.888 154.841,276.691ZM242.304,166.531L250.75,188.847L244.327,191.459C243.207,191.102 241.934,189.957 240.507,188.025C238.841,185.829 237.838,184.653 237.498,184.498C232.627,181.457 228.398,180.606 224.812,181.946C223.452,182.455 222.252,181.318 221.212,178.535C220.38,176.31 220.332,174.954 221.066,174.468L222.364,173.983C223.539,173.544 225.332,173.437 227.742,173.664C230.152,173.891 231.851,173.82 232.84,173.45C234.51,172.826 235.717,171.247 236.461,168.714L242.304,166.531ZM263.863,212.907C266.451,219.832 265.806,226.591 261.928,233.184C258.136,239.252 252.716,243.602 245.667,246.237C244.493,246.676 243.374,245.473 242.311,242.629C241.294,239.908 241.254,238.197 242.189,237.495C242.638,237.187 243.283,236.84 244.126,236.455C246.622,235.028 248.416,233.512 249.508,231.907C250.599,230.301 250.832,228.663 250.208,226.994C248.984,223.717 246.104,222.045 241.569,221.978C240.125,221.884 235.883,222.412 228.844,223.563C221.782,224.652 215.452,224.023 209.854,221.676C203.537,219.104 199.281,214.881 197.086,209.008C194.845,203.01 194.983,196.969 197.501,190.885C200.103,184.839 204.403,180.695 210.401,178.454C211.204,178.153 212.042,178.51 212.914,179.523C213.608,180.25 214.129,181.077 214.476,182.004C215.284,184.168 215.171,185.655 214.134,186.465C212.318,187.637 210.964,189.2 210.073,191.154C209.02,193.238 208.864,195.27 209.603,197.248C209.973,198.238 210.694,199.131 211.767,199.928C215.673,202.837 220.643,203.41 226.679,201.648C228.703,201.032 230.917,200.451 233.321,199.906C235.724,199.36 238.366,198.795 241.249,198.211C245.088,198.115 248.954,199.031 252.845,200.959C258.25,203.731 261.922,207.713 263.863,212.907ZM214.54,257.975L205.898,235.415L212.483,232.954C213.603,233.311 214.888,234.486 216.338,236.481C217.857,238.661 218.829,239.848 219.254,240.042C224.063,243.107 228.323,243.946 232.032,242.559C233.393,242.051 234.593,243.188 235.632,245.97C236.464,248.196 236.471,249.533 235.651,249.98C235.489,250.111 235.098,250.292 234.48,250.523C233.244,250.985 231.42,251.103 229.01,250.876C226.6,250.649 224.931,250.709 224.004,251.056C222.335,251.68 221.128,253.258 220.383,255.791L214.54,257.975ZM316.313,138.873L324.758,161.189L318.336,163.801C317.216,163.444 315.942,162.299 314.515,160.366C312.849,158.171 311.846,156.995 311.507,156.84C306.635,153.799 302.407,152.948 298.821,154.288C297.46,154.797 296.26,153.66 295.221,150.877C294.389,148.652 294.34,147.296 295.075,146.81L296.373,146.325C297.548,145.886 299.34,145.779 301.75,146.006C304.16,146.233 305.86,146.161 306.849,145.792C308.518,145.168 309.725,143.589 310.47,141.056L316.313,138.873ZM337.872,185.249C340.46,192.174 339.815,198.933 335.937,205.526C332.145,211.593 326.724,215.944 319.676,218.579C318.501,219.018 317.382,217.815 316.32,214.971C315.303,212.25 315.262,210.539 316.198,209.837C316.646,209.529 317.292,209.182 318.134,208.797C320.631,207.37 322.425,205.854 323.516,204.249C324.607,202.643 324.841,201.005 324.217,199.336C322.992,196.059 320.113,194.387 315.578,194.32C314.133,194.226 309.892,194.754 302.853,195.905C295.791,196.994 289.46,196.365 283.862,194.018C277.546,191.446 273.29,187.223 271.095,181.35C268.854,175.352 268.992,169.311 271.509,163.227C274.112,157.181 278.412,153.037 284.409,150.796C285.213,150.495 286.051,150.852 286.923,151.865C287.617,152.592 288.138,153.419 288.484,154.346C289.293,156.51 289.179,157.997 288.143,158.807C286.326,159.979 284.973,161.542 284.082,163.496C283.029,165.58 282.872,167.612 283.612,169.59C283.981,170.58 284.703,171.473 285.776,172.27C289.681,175.179 294.652,175.752 300.687,173.99C302.712,173.374 304.926,172.793 307.329,172.248C309.732,171.702 312.375,171.137 315.257,170.553C319.097,170.457 322.962,171.373 326.854,173.301C332.258,176.073 335.931,180.055 337.872,185.249ZM288.549,230.317L279.907,207.757L286.491,205.296C287.611,205.653 288.896,206.828 290.346,208.823C291.866,211.003 292.838,212.19 293.262,212.384C298.072,215.449 302.331,216.288 306.041,214.901C307.401,214.393 308.601,215.53 309.641,218.312C310.473,220.538 310.479,221.875 309.66,222.322C309.497,222.453 309.107,222.634 308.489,222.865C307.252,223.327 305.429,223.445 303.019,223.218C300.609,222.991 298.94,223.051 298.013,223.398C296.343,224.022 295.136,225.6 294.392,228.133L288.549,230.317Z"}),_.createElement("path",{d:"M394.606,195.569C388.976,196.699 383.488,193.046 382.359,187.416C381.229,181.786 384.882,176.298 390.512,175.168C396.142,174.038 401.63,177.692 402.76,183.321C403.89,188.951 400.236,194.439 394.606,195.569Z"}),_.createElement("path",{d:"M49.46,175.274C55.091,176.4 58.748,181.886 57.621,187.517C56.495,193.147 51.009,196.804 45.378,195.678C39.748,194.551 36.091,189.066 37.217,183.435C38.344,177.804 43.83,174.148 49.46,175.274Z"})),dN=()=>r.jsx("div",{className:"flow",children:r.jsxs("div",{className:"mobile block-center pad-t-8 flow",children:[r.jsx(cN,{className:"brui-logo"}),r.jsx("h1",{className:"mar-t-8",children:"React UI Components"}),r.jsx("h2",{className:"mar-t-none large",children:"For Badger Fans"}),r.jsxs("p",{className:"larger",children:["This is my personal collection of React UI components built around the styles provided by"," ",r.jsx("a",{href:"https://abw.github.io/badger-css",children:"Badger CSS"})]}),r.jsx("div",{className:"text-center",children:r.jsx(uN,{className:"width-10rem"})}),r.jsx("p",{children:"This is Open Source Software and you're welcome to use it. But be warned that it is also Opiniated and Selfish Software."}),r.jsx("p",{children:"I wrote it for me to help my get my job done.  It provides a solid foundation of React components that allow me to get a new site up and running quickly."}),r.jsx("p",{children:"I don't have the time or inclination to help other people get their jobs done (unless they're my clients, colleagues, family or close friends).  So please be aware that this is effectively unsupported software and you're on your own.  If you're not comfortable with that then you should almost certainly be using one of the many other fine UI toolkits that are available."}),r.jsx("p",{children:"Also note that this collection is supposed to be a starting point, not a final destination. You can use the components and styles provided, but at some point you will probably want or need to dig in and start adding your own code, or modifying the builtin components."}),r.jsx("p",{children:"Everything is modular and themeable, so that's generally quite easy to achieve.  But it requires a reasonable knowledge of React, CSS and SASS.  The documentation is provided as a reference for me (and my colleagues) to use, and it assumes a fairly high level of proficiency in these areas."}),r.jsx("p",{children:"Or to put it another way, if you're expecting someone to hold your hand explaining how to get this up and running, then you've probably come to the wrong place."})]})}),pN=Object.freeze(Object.defineProperty({__proto__:null,default:dN},Symbol.toStringTag,{value:"Module"}));/**
 * @remix-run/router v1.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ne(){return Ne=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Ne.apply(this,arguments)}var Oe;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Oe||(Oe={}));const sp="popstate";function fN(e){e===void 0&&(e={});function t(o,a){let{pathname:l,search:s,hash:i}=o.location;return Ca("",{pathname:l,search:s,hash:i},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(o,a){return typeof a=="string"?a:yr(a)}return mN(t,n,null,e)}function q(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function vr(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function hN(){return Math.random().toString(36).substr(2,8)}function ip(e,t){return{usr:e.state,key:e.key,idx:t}}function Ca(e,t,n,o){return n===void 0&&(n=null),Ne({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?yn(t):t,{state:n,key:t&&t.key||o||hN()})}function yr(e){let{pathname:t="/",search:n="",hash:o=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),o&&o!=="#"&&(t+=o.charAt(0)==="#"?o:"#"+o),t}function yn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let o=e.indexOf("?");o>=0&&(t.search=e.substr(o),e=e.substr(0,o)),e&&(t.pathname=e)}return t}function mN(e,t,n,o){o===void 0&&(o={});let{window:a=document.defaultView,v5Compat:l=!1}=o,s=a.history,i=Oe.Pop,c=null,u=d();u==null&&(u=0,s.replaceState(Ne({},s.state,{idx:u}),""));function d(){return(s.state||{idx:null}).idx}function x(){i=Oe.Pop;let N=d(),g=N==null?null:N-u;u=N,c&&c({action:i,location:S.location,delta:g})}function m(N,g){i=Oe.Push;let p=Ca(S.location,N,g);n&&n(p,N),u=d()+1;let h=ip(p,u),f=S.createHref(p);try{s.pushState(h,"",f)}catch(v){if(v instanceof DOMException&&v.name==="DataCloneError")throw v;a.location.assign(f)}l&&c&&c({action:i,location:S.location,delta:1})}function j(N,g){i=Oe.Replace;let p=Ca(S.location,N,g);n&&n(p,N),u=d();let h=ip(p,u),f=S.createHref(p);s.replaceState(h,"",f),l&&c&&c({action:i,location:S.location,delta:0})}function y(N){let g=a.location.origin!=="null"?a.location.origin:a.location.href,p=typeof N=="string"?N:yr(N);return q(g,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,g)}let S={get action(){return i},get location(){return e(a,s)},listen(N){if(c)throw new Error("A history only accepts one active listener");return a.addEventListener(sp,x),c=N,()=>{a.removeEventListener(sp,x),c=null}},createHref(N){return t(a,N)},createURL:y,encodeLocation(N){let g=y(N);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:m,replace:j,go(N){return s.go(N)}};return S}var De;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(De||(De={}));const xN=new Set(["lazy","caseSensitive","path","id","index","children"]);function gN(e){return e.index===!0}function jc(e,t,n,o){return n===void 0&&(n=[]),o===void 0&&(o={}),e.map((a,l)=>{let s=[...n,l],i=typeof a.id=="string"?a.id:s.join("-");if(q(a.index!==!0||!a.children,"Cannot specify children on an index route"),q(!o[i],'Found a route id collision on id "'+i+`".  Route id's must be globally unique within Data Router usages`),gN(a)){let c=Ne({},a,t(a),{id:i});return o[i]=c,c}else{let c=Ne({},a,t(a),{id:i,children:void 0});return o[i]=c,a.children&&(c.children=jc(a.children,t,s,o)),c}})}function Hr(e,t,n){n===void 0&&(n="/");let o=typeof t=="string"?yn(t):t,a=Wn(o.pathname||"/",n);if(a==null)return null;let l=g4(e);yN(l);let s=null;for(let i=0;s==null&&i<l.length;++i)s=EN(l[i],NN(a));return s}function vN(e,t){let{route:n,pathname:o,params:a}=e;return{id:n.id,pathname:o,params:a,data:t[n.id],handle:n.handle}}function g4(e,t,n,o){t===void 0&&(t=[]),n===void 0&&(n=[]),o===void 0&&(o="");let a=(l,s,i)=>{let c={relativePath:i===void 0?l.path||"":i,caseSensitive:l.caseSensitive===!0,childrenIndex:s,route:l};c.relativePath.startsWith("/")&&(q(c.relativePath.startsWith(o),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+o+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(o.length));let u=ln([o,c.relativePath]),d=n.concat(c);l.children&&l.children.length>0&&(q(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),g4(l.children,t,d,u)),!(l.path==null&&!l.index)&&t.push({path:u,score:kN(u,l.index),routesMeta:d})};return e.forEach((l,s)=>{var i;if(l.path===""||!((i=l.path)!=null&&i.includes("?")))a(l,s);else for(let c of v4(l.path))a(l,s,c)}),t}function v4(e){let t=e.split("/");if(t.length===0)return[];let[n,...o]=t,a=n.endsWith("?"),l=n.replace(/\?$/,"");if(o.length===0)return a?[l,""]:[l];let s=v4(o.join("/")),i=[];return i.push(...s.map(c=>c===""?l:[l,c].join("/"))),a&&i.push(...s),i.map(c=>e.startsWith("/")&&c===""?"/":c)}function yN(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:TN(t.routesMeta.map(o=>o.childrenIndex),n.routesMeta.map(o=>o.childrenIndex)))}const CN=/^:\w+$/,jN=3,SN=2,bN=1,_N=10,wN=-2,cp=e=>e==="*";function kN(e,t){let n=e.split("/"),o=n.length;return n.some(cp)&&(o+=wN),t&&(o+=SN),n.filter(a=>!cp(a)).reduce((a,l)=>a+(CN.test(l)?jN:l===""?bN:_N),o)}function TN(e,t){return e.length===t.length&&e.slice(0,-1).every((o,a)=>o===t[a])?e[e.length-1]-t[t.length-1]:0}function EN(e,t){let{routesMeta:n}=e,o={},a="/",l=[];for(let s=0;s<n.length;++s){let i=n[s],c=s===n.length-1,u=a==="/"?t:t.slice(a.length)||"/",d=Sc({path:i.relativePath,caseSensitive:i.caseSensitive,end:c},u);if(!d)return null;Object.assign(o,d.params);let x=i.route;l.push({params:o,pathname:ln([a,d.pathname]),pathnameBase:MN(ln([a,d.pathnameBase])),route:x}),d.pathnameBase!=="/"&&(a=ln([a,d.pathnameBase]))}return l}function Sc(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,o]=LN(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let l=a[0],s=l.replace(/(.)\/+$/,"$1"),i=a.slice(1);return{params:o.reduce((u,d,x)=>{let{paramName:m,isOptional:j}=d;if(m==="*"){let S=i[x]||"";s=l.slice(0,l.length-S.length).replace(/(.)\/+$/,"$1")}const y=i[x];return j&&!y?u[m]=void 0:u[m]=RN(y||"",m),u},{}),pathname:l,pathnameBase:s,pattern:e}}function LN(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),vr(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let o=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(s,i,c)=>(o.push({paramName:i,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(o.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),o]}function NN(e){try{return decodeURI(e)}catch(t){return vr(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function RN(e,t){try{return decodeURIComponent(e)}catch(n){return vr(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Wn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,o=e.charAt(n);return o&&o!=="/"?null:e.slice(n)||"/"}function ON(e,t){t===void 0&&(t="/");let{pathname:n,search:o="",hash:a=""}=typeof e=="string"?yn(e):e;return{pathname:n?n.startsWith("/")?n:DN(n,t):t,search:PN(o),hash:$N(a)}}function DN(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function fi(e,t,n,o){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(o)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Ts(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function td(e,t,n,o){o===void 0&&(o=!1);let a;typeof e=="string"?a=yn(e):(a=Ne({},e),q(!a.pathname||!a.pathname.includes("?"),fi("?","pathname","search",a)),q(!a.pathname||!a.pathname.includes("#"),fi("#","pathname","hash",a)),q(!a.search||!a.search.includes("#"),fi("#","search","hash",a)));let l=e===""||a.pathname==="",s=l?"/":a.pathname,i;if(o||s==null)i=n;else{let x=t.length-1;if(s.startsWith("..")){let m=s.split("/");for(;m[0]==="..";)m.shift(),x-=1;a.pathname=m.join("/")}i=x>=0?t[x]:"/"}let c=ON(a,i),u=s&&s!=="/"&&s.endsWith("/"),d=(l||s===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const ln=e=>e.join("/").replace(/\/\/+/g,"/"),MN=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),PN=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,$N=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class nd{constructor(t,n,o,a){a===void 0&&(a=!1),this.status=t,this.statusText=n||"",this.internal=a,o instanceof Error?(this.data=o.toString(),this.error=o):this.data=o}}function y4(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const C4=["post","put","patch","delete"],AN=new Set(C4),BN=["get",...C4],IN=new Set(BN),zN=new Set([301,302,303,307,308]),FN=new Set([307,308]),hi={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},UN={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Eo={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},j4=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,HN=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),S4="remix-router-transitions";function VN(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",o=!n;q(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let a;if(e.mapRouteProperties)a=e.mapRouteProperties;else if(e.detectErrorBoundary){let w=e.detectErrorBoundary;a=k=>({hasErrorBoundary:w(k)})}else a=HN;let l={},s=jc(e.routes,a,void 0,l),i,c=e.basename||"/",u=Ne({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_prependBasename:!1},e.future),d=null,x=new Set,m=null,j=null,y=null,S=e.hydrationData!=null,N=Hr(s,e.history.location,c),g=null;if(N==null){let w=bt(404,{pathname:e.history.location.pathname}),{matches:k,route:O}=gp(s);N=k,g={[O.id]:w}}let p=!N.some(w=>w.route.lazy)&&(!N.some(w=>w.route.loader)||e.hydrationData!=null),h,f={historyAction:e.history.action,location:e.history.location,matches:N,initialized:p,navigation:hi,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||g,fetchers:new Map,blockers:new Map},v=Oe.Pop,C=!1,b,T=!1,E=new Map,P=null,U=!1,X=!1,se=[],Ce=[],J=new Map,ue=0,ge=-1,R=new Map,$=new Set,A=new Map,z=new Map,K=new Set,Ae=new Map,le=new Map,Be=!1;function Ee(){if(d=e.history.listen(w=>{let{action:k,location:O,delta:B}=w;if(Be){Be=!1;return}vr(le.size===0||B!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let V=dd({currentLocation:f.location,nextLocation:O,historyAction:k});if(V&&B!=null){Be=!0,e.history.go(B*-1),Ua(V,{state:"blocked",location:O,proceed(){Ua(V,{state:"proceeding",proceed:void 0,reset:void 0,location:O}),e.history.go(B)},reset(){let Z=new Map(f.blockers);Z.set(V,Eo),je({blockers:Z})}});return}return Ot(k,O)}),n){tR(t,E);let w=()=>nR(t,E);t.addEventListener("pagehide",w),P=()=>t.removeEventListener("pagehide",w)}return f.initialized||Ot(Oe.Pop,f.location),h}function We(){d&&d(),P&&P(),x.clear(),b&&b.abort(),f.fetchers.forEach((w,k)=>Fa(k)),f.blockers.forEach((w,k)=>ud(k))}function er(w){return x.add(w),()=>x.delete(w)}function je(w,k){f=Ne({},f,w);let O=[],B=[];u.v7_fetcherPersist&&f.fetchers.forEach((V,Z)=>{V.state==="idle"&&(K.has(Z)?B.push(Z):O.push(Z))}),x.forEach(V=>V(f,{deletedFetchers:B,unstable_viewTransitionOpts:k})),u.v7_fetcherPersist&&(O.forEach(V=>f.fetchers.delete(V)),B.forEach(V=>Fa(V)))}function qt(w,k){var O,B;let V=f.actionData!=null&&f.navigation.formMethod!=null&&At(f.navigation.formMethod)&&f.navigation.state==="loading"&&((O=w.state)==null?void 0:O._isRedirect)!==!0,Z;k.actionData?Object.keys(k.actionData).length>0?Z=k.actionData:Z=null:V?Z=f.actionData:Z=null;let Q=k.loaderData?xp(f.loaderData,k.loaderData,k.matches||[],k.errors):f.loaderData,G=f.blockers;G.size>0&&(G=new Map(G),G.forEach((Se,ne)=>G.set(ne,Eo)));let H=C===!0||f.navigation.formMethod!=null&&At(f.navigation.formMethod)&&((B=w.state)==null?void 0:B._isRedirect)!==!0;i&&(s=i,i=void 0),U||v===Oe.Pop||(v===Oe.Push?e.history.push(w,w.state):v===Oe.Replace&&e.history.replace(w,w.state));let de;if(v===Oe.Pop){let Se=E.get(f.location.pathname);Se&&Se.has(w.pathname)?de={currentLocation:f.location,nextLocation:w}:E.has(w.pathname)&&(de={currentLocation:w,nextLocation:f.location})}else if(T){let Se=E.get(f.location.pathname);Se?Se.add(w.pathname):(Se=new Set([w.pathname]),E.set(f.location.pathname,Se)),de={currentLocation:f.location,nextLocation:w}}je(Ne({},k,{actionData:Z,loaderData:Q,historyAction:v,location:w,initialized:!0,navigation:hi,revalidation:"idle",restoreScrollPosition:fd(w,k.matches||f.matches),preventScrollReset:H,blockers:G}),de),v=Oe.Pop,C=!1,T=!1,U=!1,X=!1,se=[],Ce=[]}async function tr(w,k){if(typeof w=="number"){e.history.go(w);return}let O=bc(f.location,f.matches,c,u.v7_prependBasename,w,k==null?void 0:k.fromRouteId,k==null?void 0:k.relative),{path:B,submission:V,error:Z}=up(u.v7_normalizeFormMethod,!1,O,k),Q=f.location,G=Ca(f.location,B,k&&k.state);G=Ne({},G,e.history.encodeLocation(G));let H=k&&k.replace!=null?k.replace:void 0,de=Oe.Push;H===!0?de=Oe.Replace:H===!1||V!=null&&At(V.formMethod)&&V.formAction===f.location.pathname+f.location.search&&(de=Oe.Replace);let Se=k&&"preventScrollReset"in k?k.preventScrollReset===!0:void 0,ne=dd({currentLocation:Q,nextLocation:G,historyAction:de});if(ne){Ua(ne,{state:"blocked",location:G,proceed(){Ua(ne,{state:"proceeding",proceed:void 0,reset:void 0,location:G}),tr(w,k)},reset(){let pe=new Map(f.blockers);pe.set(ne,Eo),je({blockers:pe})}});return}return await Ot(de,G,{submission:V,pendingError:Z,preventScrollReset:Se,replace:k&&k.replace,enableViewTransition:k&&k.unstable_viewTransition})}function Ls(){if(Ns(),je({revalidation:"loading"}),f.navigation.state!=="submitting"){if(f.navigation.state==="idle"){Ot(f.historyAction,f.location,{startUninterruptedRevalidation:!0});return}Ot(v||f.historyAction,f.navigation.location,{overrideNavigation:f.navigation})}}async function Ot(w,k,O){b&&b.abort(),b=null,v=w,U=(O&&O.startUninterruptedRevalidation)===!0,Z4(f.location,f.matches),C=(O&&O.preventScrollReset)===!0,T=(O&&O.enableViewTransition)===!0;let B=i||s,V=O&&O.overrideNavigation,Z=Hr(B,k,c);if(!Z){let pe=bt(404,{pathname:k.pathname}),{matches:Ie,route:nr}=gp(B);Rs(),qt(k,{matches:Ie,loaderData:{},errors:{[nr.id]:pe}});return}if(f.initialized&&!X&&YN(f.location,k)&&!(O&&O.submission&&At(O.submission.formMethod))){qt(k,{matches:Z});return}b=new AbortController;let Q=No(e.history,k,b.signal,O&&O.submission),G,H;if(O&&O.pendingError)H={[Jo(Z).route.id]:O.pendingError};else if(O&&O.submission&&At(O.submission.formMethod)){let pe=await B4(Q,k,O.submission,Z,{replace:O.replace});if(pe.shortCircuited)return;G=pe.pendingActionData,H=pe.pendingActionError,V=mi(k,O.submission),Q=new Request(Q.url,{signal:Q.signal})}let{shortCircuited:de,loaderData:Se,errors:ne}=await I4(Q,k,Z,V,O&&O.submission,O&&O.fetcherSubmission,O&&O.replace,G,H);de||(b=null,qt(k,Ne({matches:Z},G?{actionData:G}:{},{loaderData:Se,errors:ne})))}async function B4(w,k,O,B,V){V===void 0&&(V={}),Ns();let Z=JN(k,O);je({navigation:Z});let Q,G=wc(B,k);if(!G.route.action&&!G.route.lazy)Q={type:De.error,error:bt(405,{method:w.method,pathname:k.pathname,routeId:G.route.id})};else if(Q=await Lo("action",w,G,B,l,a,c),w.signal.aborted)return{shortCircuited:!0};if(Qr(Q)){let H;return V&&V.replace!=null?H=V.replace:H=Q.location===f.location.pathname+f.location.search,await mo(f,Q,{submission:O,replace:H}),{shortCircuited:!0}}if(ea(Q)){let H=Jo(B,G.route.id);return(V&&V.replace)!==!0&&(v=Oe.Push),{pendingActionData:{},pendingActionError:{[H.route.id]:Q.error}}}if(ur(Q))throw bt(400,{type:"defer-action"});return{pendingActionData:{[G.route.id]:Q.data}}}async function I4(w,k,O,B,V,Z,Q,G,H){let de=B||mi(k,V),Se=V||Z||Cp(de),ne=i||s,[pe,Ie]=dp(e.history,f,O,Se,k,X,se,Ce,A,$,ne,c,G,H);if(Rs(ce=>!(O&&O.some(Dt=>Dt.route.id===ce))||pe&&pe.some(Dt=>Dt.route.id===ce)),ge=++ue,pe.length===0&&Ie.length===0){let ce=id();return qt(k,Ne({matches:O,loaderData:{},errors:H||null},G?{actionData:G}:{},ce?{fetchers:new Map(f.fetchers)}:{})),{shortCircuited:!0}}if(!U){Ie.forEach(Dt=>{let Sn=f.fetchers.get(Dt.key),Re=Ro(void 0,Sn?Sn.data:void 0);f.fetchers.set(Dt.key,Re)});let ce=G||f.actionData;je(Ne({navigation:de},ce?Object.keys(ce).length===0?{actionData:null}:{actionData:ce}:{},Ie.length>0?{fetchers:new Map(f.fetchers)}:{}))}Ie.forEach(ce=>{J.has(ce.key)&&Cn(ce.key),ce.controller&&J.set(ce.key,ce.controller)});let nr=()=>Ie.forEach(ce=>Cn(ce.key));b&&b.signal.addEventListener("abort",nr);let{results:rr,loaderResults:go,fetcherResults:Os}=await ld(f.matches,O,pe,Ie,w);if(w.signal.aborted)return{shortCircuited:!0};b&&b.signal.removeEventListener("abort",nr),Ie.forEach(ce=>J.delete(ce.key));let Jt=vp(rr);if(Jt){if(Jt.idx>=pe.length){let ce=Ie[Jt.idx-pe.length].key;$.add(ce)}return await mo(f,Jt.result,{replace:Q}),{shortCircuited:!0}}let{loaderData:jn,errors:Ha}=mp(f,O,pe,go,H,Ie,Os,Ae);Ae.forEach((ce,Dt)=>{ce.subscribe(Sn=>{(Sn||ce.done)&&Ae.delete(Dt)})});let Ds=id(),Ms=cd(ge),Ps=Ds||Ms||Ie.length>0;return Ne({loaderData:jn,errors:Ha},Ps?{fetchers:new Map(f.fetchers)}:{})}function ad(w){return u.v7_fetcherPersist&&(z.set(w,(z.get(w)||0)+1),K.has(w)&&K.delete(w)),f.fetchers.get(w)||UN}function z4(w,k,O,B){if(o)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");J.has(w)&&Cn(w);let V=i||s,Z=bc(f.location,f.matches,c,u.v7_prependBasename,O,k,B==null?void 0:B.relative),Q=Hr(V,Z,c);if(!Q){xo(w,k,bt(404,{pathname:Z}));return}let{path:G,submission:H,error:de}=up(u.v7_normalizeFormMethod,!0,Z,B);if(de){xo(w,k,de);return}let Se=wc(Q,G);if(C=(B&&B.preventScrollReset)===!0,H&&At(H.formMethod)){F4(w,k,G,Se,Q,H);return}A.set(w,{routeId:k,path:G}),U4(w,k,G,Se,Q,H)}async function F4(w,k,O,B,V,Z){if(Ns(),A.delete(w),!B.route.action&&!B.route.lazy){let Re=bt(405,{method:Z.formMethod,pathname:O,routeId:k});xo(w,k,Re);return}let Q=f.fetchers.get(w),G=eR(Z,Q);f.fetchers.set(w,G),je({fetchers:new Map(f.fetchers)});let H=new AbortController,de=No(e.history,O,H.signal,Z);J.set(w,H);let Se=ue,ne=await Lo("action",de,B,V,l,a,c);if(de.signal.aborted){J.get(w)===H&&J.delete(w);return}if(K.has(w)){f.fetchers.set(w,wn(void 0)),je({fetchers:new Map(f.fetchers)});return}if(Qr(ne))if(J.delete(w),ge>Se){let Re=wn(void 0);f.fetchers.set(w,Re),je({fetchers:new Map(f.fetchers)});return}else{$.add(w);let Re=Ro(Z);return f.fetchers.set(w,Re),je({fetchers:new Map(f.fetchers)}),mo(f,ne,{fetcherSubmission:Z})}if(ea(ne)){xo(w,k,ne.error);return}if(ur(ne))throw bt(400,{type:"defer-action"});let pe=f.navigation.location||f.location,Ie=No(e.history,pe,H.signal),nr=i||s,rr=f.navigation.state!=="idle"?Hr(nr,f.navigation.location,c):f.matches;q(rr,"Didn't find any matches after fetcher action");let go=++ue;R.set(w,go);let Os=Ro(Z,ne.data);f.fetchers.set(w,Os);let[Jt,jn]=dp(e.history,f,rr,Z,pe,X,se,Ce,A,$,nr,c,{[B.route.id]:ne.data},void 0);jn.filter(Re=>Re.key!==w).forEach(Re=>{let vo=Re.key,hd=f.fetchers.get(vo),K4=Ro(void 0,hd?hd.data:void 0);f.fetchers.set(vo,K4),J.has(vo)&&Cn(vo),Re.controller&&J.set(vo,Re.controller)}),je({fetchers:new Map(f.fetchers)});let Ha=()=>jn.forEach(Re=>Cn(Re.key));H.signal.addEventListener("abort",Ha);let{results:Ds,loaderResults:Ms,fetcherResults:Ps}=await ld(f.matches,rr,Jt,jn,Ie);if(H.signal.aborted)return;H.signal.removeEventListener("abort",Ha),R.delete(w),J.delete(w),jn.forEach(Re=>J.delete(Re.key));let ce=vp(Ds);if(ce){if(ce.idx>=Jt.length){let Re=jn[ce.idx-Jt.length].key;$.add(Re)}return mo(f,ce.result)}let{loaderData:Dt,errors:Sn}=mp(f,f.matches,Jt,Ms,void 0,jn,Ps,Ae);if(f.fetchers.has(w)){let Re=wn(ne.data);f.fetchers.set(w,Re)}cd(go),f.navigation.state==="loading"&&go>ge?(q(v,"Expected pending action"),b&&b.abort(),qt(f.navigation.location,{matches:rr,loaderData:Dt,errors:Sn,fetchers:new Map(f.fetchers)})):(je({errors:Sn,loaderData:xp(f.loaderData,Dt,rr,Sn),fetchers:new Map(f.fetchers)}),X=!1)}async function U4(w,k,O,B,V,Z){let Q=f.fetchers.get(w),G=Ro(Z,Q?Q.data:void 0);f.fetchers.set(w,G),je({fetchers:new Map(f.fetchers)});let H=new AbortController,de=No(e.history,O,H.signal);J.set(w,H);let Se=ue,ne=await Lo("loader",de,B,V,l,a,c);if(ur(ne)&&(ne=await w4(ne,de.signal,!0)||ne),J.get(w)===H&&J.delete(w),de.signal.aborted)return;if(K.has(w)){f.fetchers.set(w,wn(void 0)),je({fetchers:new Map(f.fetchers)});return}if(Qr(ne))if(ge>Se){let Ie=wn(void 0);f.fetchers.set(w,Ie),je({fetchers:new Map(f.fetchers)});return}else{$.add(w),await mo(f,ne);return}if(ea(ne)){xo(w,k,ne.error);return}q(!ur(ne),"Unhandled fetcher deferred data");let pe=wn(ne.data);f.fetchers.set(w,pe),je({fetchers:new Map(f.fetchers)})}async function mo(w,k,O){let{submission:B,fetcherSubmission:V,replace:Z}=O===void 0?{}:O;k.revalidate&&(X=!0);let Q=Ca(w.location,k.location,{_isRedirect:!0});if(q(Q,"Expected a location on the redirect navigation"),n){let pe=!1;if(k.reloadDocument)pe=!0;else if(j4.test(k.location)){const Ie=e.history.createURL(k.location);pe=Ie.origin!==t.location.origin||Wn(Ie.pathname,c)==null}if(pe){Z?t.location.replace(k.location):t.location.assign(k.location);return}}b=null;let G=Z===!0?Oe.Replace:Oe.Push,{formMethod:H,formAction:de,formEncType:Se}=w.navigation;!B&&!V&&H&&de&&Se&&(B=Cp(w.navigation));let ne=B||V;if(FN.has(k.status)&&ne&&At(ne.formMethod))await Ot(G,Q,{submission:Ne({},ne,{formAction:k.location}),preventScrollReset:C});else{let pe=mi(Q,B);await Ot(G,Q,{overrideNavigation:pe,fetcherSubmission:V,preventScrollReset:C})}}async function ld(w,k,O,B,V){let Z=await Promise.all([...O.map(H=>Lo("loader",V,H,k,l,a,c)),...B.map(H=>H.matches&&H.match&&H.controller?Lo("loader",No(e.history,H.path,H.controller.signal),H.match,H.matches,l,a,c):{type:De.error,error:bt(404,{pathname:H.path})})]),Q=Z.slice(0,O.length),G=Z.slice(O.length);return await Promise.all([yp(w,O,Q,Q.map(()=>V.signal),!1,f.loaderData),yp(w,B.map(H=>H.match),G,B.map(H=>H.controller?H.controller.signal:null),!0)]),{results:Z,loaderResults:Q,fetcherResults:G}}function Ns(){X=!0,se.push(...Rs()),A.forEach((w,k)=>{J.has(k)&&(Ce.push(k),Cn(k))})}function xo(w,k,O){let B=Jo(f.matches,k);Fa(w),je({errors:{[B.route.id]:O},fetchers:new Map(f.fetchers)})}function Fa(w){let k=f.fetchers.get(w);J.has(w)&&!(k&&k.state==="loading"&&R.has(w))&&Cn(w),A.delete(w),R.delete(w),$.delete(w),K.delete(w),f.fetchers.delete(w)}function H4(w){if(u.v7_fetcherPersist){let k=(z.get(w)||0)-1;k<=0?(z.delete(w),K.add(w)):z.set(w,k)}else Fa(w);je({fetchers:new Map(f.fetchers)})}function Cn(w){let k=J.get(w);q(k,"Expected fetch controller: "+w),k.abort(),J.delete(w)}function sd(w){for(let k of w){let O=ad(k),B=wn(O.data);f.fetchers.set(k,B)}}function id(){let w=[],k=!1;for(let O of $){let B=f.fetchers.get(O);q(B,"Expected fetcher: "+O),B.state==="loading"&&($.delete(O),w.push(O),k=!0)}return sd(w),k}function cd(w){let k=[];for(let[O,B]of R)if(B<w){let V=f.fetchers.get(O);q(V,"Expected fetcher: "+O),V.state==="loading"&&(Cn(O),R.delete(O),k.push(O))}return sd(k),k.length>0}function V4(w,k){let O=f.blockers.get(w)||Eo;return le.get(w)!==k&&le.set(w,k),O}function ud(w){f.blockers.delete(w),le.delete(w)}function Ua(w,k){let O=f.blockers.get(w)||Eo;q(O.state==="unblocked"&&k.state==="blocked"||O.state==="blocked"&&k.state==="blocked"||O.state==="blocked"&&k.state==="proceeding"||O.state==="blocked"&&k.state==="unblocked"||O.state==="proceeding"&&k.state==="unblocked","Invalid blocker state transition: "+O.state+" -> "+k.state);let B=new Map(f.blockers);B.set(w,k),je({blockers:B})}function dd(w){let{currentLocation:k,nextLocation:O,historyAction:B}=w;if(le.size===0)return;le.size>1&&vr(!1,"A router only supports one blocker at a time");let V=Array.from(le.entries()),[Z,Q]=V[V.length-1],G=f.blockers.get(Z);if(!(G&&G.state==="proceeding")&&Q({currentLocation:k,nextLocation:O,historyAction:B}))return Z}function Rs(w){let k=[];return Ae.forEach((O,B)=>{(!w||w(B))&&(O.cancel(),k.push(B),Ae.delete(B))}),k}function W4(w,k,O){if(m=w,y=k,j=O||null,!S&&f.navigation===hi){S=!0;let B=fd(f.location,f.matches);B!=null&&je({restoreScrollPosition:B})}return()=>{m=null,y=null,j=null}}function pd(w,k){return j&&j(w,k.map(B=>vN(B,f.loaderData)))||w.key}function Z4(w,k){if(m&&y){let O=pd(w,k);m[O]=y()}}function fd(w,k){if(m){let O=pd(w,k),B=m[O];if(typeof B=="number")return B}return null}function G4(w){l={},i=jc(w,a,void 0,l)}return h={get basename(){return c},get state(){return f},get routes(){return s},get window(){return t},initialize:Ee,subscribe:er,enableScrollRestoration:W4,navigate:tr,fetch:z4,revalidate:Ls,createHref:w=>e.history.createHref(w),encodeLocation:w=>e.history.encodeLocation(w),getFetcher:ad,deleteFetcher:H4,dispose:We,getBlocker:V4,deleteBlocker:ud,_internalFetchControllers:J,_internalActiveDeferreds:Ae,_internalSetRoutes:G4},h}function WN(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function bc(e,t,n,o,a,l,s){let i,c;if(l!=null&&s!=="path"){i=[];for(let d of t)if(i.push(d),d.route.id===l){c=d;break}}else i=t,c=t[t.length-1];let u=td(a||".",Ts(i).map(d=>d.pathnameBase),Wn(e.pathname,n)||e.pathname,s==="path");return a==null&&(u.search=e.search,u.hash=e.hash),(a==null||a===""||a===".")&&c&&c.route.index&&!rd(u.search)&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),o&&n!=="/"&&(u.pathname=u.pathname==="/"?n:ln([n,u.pathname])),yr(u)}function up(e,t,n,o){if(!o||!WN(o))return{path:n};if(o.formMethod&&!qN(o.formMethod))return{path:n,error:bt(405,{method:o.formMethod})};let a=()=>({path:n,error:bt(400,{type:"invalid-body"})}),l=o.formMethod||"get",s=e?l.toUpperCase():l.toLowerCase(),i=_4(n);if(o.body!==void 0){if(o.formEncType==="text/plain"){if(!At(s))return a();let m=typeof o.body=="string"?o.body:o.body instanceof FormData||o.body instanceof URLSearchParams?Array.from(o.body.entries()).reduce((j,y)=>{let[S,N]=y;return""+j+S+"="+N+`
`},""):String(o.body);return{path:n,submission:{formMethod:s,formAction:i,formEncType:o.formEncType,formData:void 0,json:void 0,text:m}}}else if(o.formEncType==="application/json"){if(!At(s))return a();try{let m=typeof o.body=="string"?JSON.parse(o.body):o.body;return{path:n,submission:{formMethod:s,formAction:i,formEncType:o.formEncType,formData:void 0,json:m,text:void 0}}}catch{return a()}}}q(typeof FormData=="function","FormData is not available in this environment");let c,u;if(o.formData)c=_c(o.formData),u=o.formData;else if(o.body instanceof FormData)c=_c(o.body),u=o.body;else if(o.body instanceof URLSearchParams)c=o.body,u=hp(c);else if(o.body==null)c=new URLSearchParams,u=new FormData;else try{c=new URLSearchParams(o.body),u=hp(c)}catch{return a()}let d={formMethod:s,formAction:i,formEncType:o&&o.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(At(d.formMethod))return{path:n,submission:d};let x=yn(n);return t&&x.search&&rd(x.search)&&c.append("index",""),x.search="?"+c,{path:yr(x),submission:d}}function ZN(e,t){let n=e;if(t){let o=e.findIndex(a=>a.route.id===t);o>=0&&(n=e.slice(0,o))}return n}function dp(e,t,n,o,a,l,s,i,c,u,d,x,m,j){let y=j?Object.values(j)[0]:m?Object.values(m)[0]:void 0,S=e.createURL(t.location),N=e.createURL(a),g=j?Object.keys(j)[0]:void 0,h=ZN(n,g).filter((v,C)=>{if(v.route.lazy)return!0;if(v.route.loader==null)return!1;if(GN(t.loaderData,t.matches[C],v)||s.some(E=>E===v.route.id))return!0;let b=t.matches[C],T=v;return pp(v,Ne({currentUrl:S,currentParams:b.params,nextUrl:N,nextParams:T.params},o,{actionResult:y,defaultShouldRevalidate:l||S.pathname+S.search===N.pathname+N.search||S.search!==N.search||b4(b,T)}))}),f=[];return c.forEach((v,C)=>{if(!n.some(U=>U.route.id===v.routeId))return;let b=Hr(d,v.path,x);if(!b){f.push({key:C,routeId:v.routeId,path:v.path,matches:null,match:null,controller:null});return}let T=t.fetchers.get(C),E=wc(b,v.path),P=!1;u.has(C)?P=!1:i.includes(C)?P=!0:T&&T.state!=="idle"&&T.data===void 0?P=l:P=pp(E,Ne({currentUrl:S,currentParams:t.matches[t.matches.length-1].params,nextUrl:N,nextParams:n[n.length-1].params},o,{actionResult:y,defaultShouldRevalidate:l})),P&&f.push({key:C,routeId:v.routeId,path:v.path,matches:b,match:E,controller:new AbortController})}),[h,f]}function GN(e,t,n){let o=!t||n.route.id!==t.route.id,a=e[n.route.id]===void 0;return o||a}function b4(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function pp(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function fp(e,t,n){if(!e.lazy)return;let o=await e.lazy();if(!e.lazy)return;let a=n[e.id];q(a,"No route found in manifest");let l={};for(let s in o){let c=a[s]!==void 0&&s!=="hasErrorBoundary";vr(!c,'Route "'+a.id+'" has a static property "'+s+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+s+'" will be ignored.')),!c&&!xN.has(s)&&(l[s]=o[s])}Object.assign(a,l),Object.assign(a,Ne({},t(a),{lazy:void 0}))}async function Lo(e,t,n,o,a,l,s,i){i===void 0&&(i={});let c,u,d,x=y=>{let S,N=new Promise((g,p)=>S=p);return d=()=>S(),t.signal.addEventListener("abort",d),Promise.race([y({request:t,params:n.params,context:i.requestContext}),N])};try{let y=n.route[e];if(n.route.lazy)if(y){let S,N=await Promise.all([x(y).catch(g=>{S=g}),fp(n.route,l,a)]);if(S)throw S;u=N[0]}else if(await fp(n.route,l,a),y=n.route[e],y)u=await x(y);else if(e==="action"){let S=new URL(t.url),N=S.pathname+S.search;throw bt(405,{method:t.method,pathname:N,routeId:n.route.id})}else return{type:De.data,data:void 0};else if(y)u=await x(y);else{let S=new URL(t.url),N=S.pathname+S.search;throw bt(404,{pathname:N})}q(u!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(y){c=De.error,u=y}finally{d&&t.signal.removeEventListener("abort",d)}if(XN(u)){let y=u.status;if(zN.has(y)){let g=u.headers.get("Location");if(q(g,"Redirects returned/thrown from loaders/actions must have a Location header"),!j4.test(g))g=bc(new URL(t.url),o.slice(0,o.indexOf(n)+1),s,!0,g);else if(!i.isStaticRequest){let p=new URL(t.url),h=g.startsWith("//")?new URL(p.protocol+g):new URL(g),f=Wn(h.pathname,s)!=null;h.origin===p.origin&&f&&(g=h.pathname+h.search+h.hash)}if(i.isStaticRequest)throw u.headers.set("Location",g),u;return{type:De.redirect,status:y,location:g,revalidate:u.headers.get("X-Remix-Revalidate")!==null,reloadDocument:u.headers.get("X-Remix-Reload-Document")!==null}}if(i.isRouteRequest)throw{type:c===De.error?De.error:De.data,response:u};let S,N=u.headers.get("Content-Type");return N&&/\bapplication\/json\b/.test(N)?S=await u.json():S=await u.text(),c===De.error?{type:c,error:new nd(y,u.statusText,S),headers:u.headers}:{type:De.data,data:S,statusCode:u.status,headers:u.headers}}if(c===De.error)return{type:c,error:u};if(QN(u)){var m,j;return{type:De.deferred,deferredData:u,statusCode:(m=u.init)==null?void 0:m.status,headers:((j=u.init)==null?void 0:j.headers)&&new Headers(u.init.headers)}}return{type:De.data,data:u}}function No(e,t,n,o){let a=e.createURL(_4(t)).toString(),l={signal:n};if(o&&At(o.formMethod)){let{formMethod:s,formEncType:i}=o;l.method=s.toUpperCase(),i==="application/json"?(l.headers=new Headers({"Content-Type":i}),l.body=JSON.stringify(o.json)):i==="text/plain"?l.body=o.text:i==="application/x-www-form-urlencoded"&&o.formData?l.body=_c(o.formData):l.body=o.formData}return new Request(a,l)}function _c(e){let t=new URLSearchParams;for(let[n,o]of e.entries())t.append(n,typeof o=="string"?o:o.name);return t}function hp(e){let t=new FormData;for(let[n,o]of e.entries())t.append(n,o);return t}function KN(e,t,n,o,a){let l={},s=null,i,c=!1,u={};return n.forEach((d,x)=>{let m=t[x].route.id;if(q(!Qr(d),"Cannot handle redirect results in processLoaderData"),ea(d)){let j=Jo(e,m),y=d.error;o&&(y=Object.values(o)[0],o=void 0),s=s||{},s[j.route.id]==null&&(s[j.route.id]=y),l[m]=void 0,c||(c=!0,i=y4(d.error)?d.error.status:500),d.headers&&(u[m]=d.headers)}else ur(d)?(a.set(m,d.deferredData),l[m]=d.deferredData.data):l[m]=d.data,d.statusCode!=null&&d.statusCode!==200&&!c&&(i=d.statusCode),d.headers&&(u[m]=d.headers)}),o&&(s=o,l[Object.keys(o)[0]]=void 0),{loaderData:l,errors:s,statusCode:i||200,loaderHeaders:u}}function mp(e,t,n,o,a,l,s,i){let{loaderData:c,errors:u}=KN(t,n,o,a,i);for(let d=0;d<l.length;d++){let{key:x,match:m,controller:j}=l[d];q(s!==void 0&&s[d]!==void 0,"Did not find corresponding fetcher result");let y=s[d];if(!(j&&j.signal.aborted))if(ea(y)){let S=Jo(e.matches,m==null?void 0:m.route.id);u&&u[S.route.id]||(u=Ne({},u,{[S.route.id]:y.error})),e.fetchers.delete(x)}else if(Qr(y))q(!1,"Unhandled fetcher revalidation redirect");else if(ur(y))q(!1,"Unhandled fetcher deferred data");else{let S=wn(y.data);e.fetchers.set(x,S)}}return{loaderData:c,errors:u}}function xp(e,t,n,o){let a=Ne({},t);for(let l of n){let s=l.route.id;if(t.hasOwnProperty(s)?t[s]!==void 0&&(a[s]=t[s]):e[s]!==void 0&&l.route.loader&&(a[s]=e[s]),o&&o.hasOwnProperty(s))break}return a}function Jo(e,t){return(t?e.slice(0,e.findIndex(o=>o.route.id===t)+1):[...e]).reverse().find(o=>o.route.hasErrorBoundary===!0)||e[0]}function gp(e){let t=e.length===1?e[0]:e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function bt(e,t){let{pathname:n,routeId:o,method:a,type:l}=t===void 0?{}:t,s="Unknown Server Error",i="Unknown @remix-run/router error";return e===400?(s="Bad Request",a&&n&&o?i="You made a "+a+' request to "'+n+'" but '+('did not provide a `loader` for route "'+o+'", ')+"so there is no way to handle the request.":l==="defer-action"?i="defer() is not supported in actions":l==="invalid-body"&&(i="Unable to encode submission body")):e===403?(s="Forbidden",i='Route "'+o+'" does not match URL "'+n+'"'):e===404?(s="Not Found",i='No route matches URL "'+n+'"'):e===405&&(s="Method Not Allowed",a&&n&&o?i="You made a "+a.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+o+'", ')+"so there is no way to handle the request.":a&&(i='Invalid request method "'+a.toUpperCase()+'"')),new nd(e||500,s,new Error(i),!0)}function vp(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(Qr(n))return{result:n,idx:t}}}function _4(e){let t=typeof e=="string"?yn(e):e;return yr(Ne({},t,{hash:""}))}function YN(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function ur(e){return e.type===De.deferred}function ea(e){return e.type===De.error}function Qr(e){return(e&&e.type)===De.redirect}function QN(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function XN(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function qN(e){return IN.has(e.toLowerCase())}function At(e){return AN.has(e.toLowerCase())}async function yp(e,t,n,o,a,l){for(let s=0;s<n.length;s++){let i=n[s],c=t[s];if(!c)continue;let u=e.find(x=>x.route.id===c.route.id),d=u!=null&&!b4(u,c)&&(l&&l[c.route.id])!==void 0;if(ur(i)&&(a||d)){let x=o[s];q(x,"Expected an AbortSignal for revalidating fetcher deferred result"),await w4(i,x,a).then(m=>{m&&(n[s]=m||n[s])})}}}async function w4(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:De.data,data:e.deferredData.unwrappedData}}catch(a){return{type:De.error,error:a}}return{type:De.data,data:e.deferredData.data}}}function rd(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function wc(e,t){let n=typeof t=="string"?yn(t).search:t.search;if(e[e.length-1].route.index&&rd(n||""))return e[e.length-1];let o=Ts(e);return o[o.length-1]}function Cp(e){let{formMethod:t,formAction:n,formEncType:o,text:a,formData:l,json:s}=e;if(!(!t||!n||!o)){if(a!=null)return{formMethod:t,formAction:n,formEncType:o,formData:void 0,json:void 0,text:a};if(l!=null)return{formMethod:t,formAction:n,formEncType:o,formData:l,json:void 0,text:void 0};if(s!==void 0)return{formMethod:t,formAction:n,formEncType:o,formData:void 0,json:s,text:void 0}}}function mi(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function JN(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function Ro(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function eR(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function wn(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function tR(e,t){try{let n=e.sessionStorage.getItem(S4);if(n){let o=JSON.parse(n);for(let[a,l]of Object.entries(o||{}))l&&Array.isArray(l)&&t.set(a,new Set(l||[]))}}catch{}}function nR(e,t){if(t.size>0){let n={};for(let[o,a]of t)n[o]=[...a];try{e.sessionStorage.setItem(S4,JSON.stringify(n))}catch(o){vr(!1,"Failed to save applied view transitions in sessionStorage ("+o+").")}}}/**
 * React Router v6.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ns(){return ns=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},ns.apply(this,arguments)}const Aa=_.createContext(null),od=_.createContext(null),kr=_.createContext(null),Es=_.createContext(null),Jn=_.createContext({outlet:null,matches:[],isDataRoute:!1}),k4=_.createContext(null);function rR(e,t){let{relative:n}=t===void 0?{}:t;Ba()||q(!1);let{basename:o,navigator:a}=_.useContext(kr),{hash:l,pathname:s,search:i}=Ia(e,{relative:n}),c=s;return o!=="/"&&(c=s==="/"?o:ln([o,s])),a.createHref({pathname:c,search:i,hash:l})}function Ba(){return _.useContext(Es)!=null}function ho(){return Ba()||q(!1),_.useContext(Es).location}function T4(e){_.useContext(kr).static||_.useLayoutEffect(e)}function oR(){let{isDataRoute:e}=_.useContext(Jn);return e?vR():aR()}function aR(){Ba()||q(!1);let e=_.useContext(Aa),{basename:t,navigator:n}=_.useContext(kr),{matches:o}=_.useContext(Jn),{pathname:a}=ho(),l=JSON.stringify(Ts(o).map(c=>c.pathnameBase)),s=_.useRef(!1);return T4(()=>{s.current=!0}),_.useCallback(function(c,u){if(u===void 0&&(u={}),!s.current)return;if(typeof c=="number"){n.go(c);return}let d=td(c,JSON.parse(l),a,u.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:ln([t,d.pathname])),(u.replace?n.replace:n.push)(d,u.state,u)},[t,n,l,a,e])}const lR=_.createContext(null);function sR(e){let t=_.useContext(Jn).outlet;return t&&_.createElement(lR.Provider,{value:e},t)}function Ia(e,t){let{relative:n}=t===void 0?{}:t,{matches:o}=_.useContext(Jn),{pathname:a}=ho(),l=JSON.stringify(Ts(o).map(s=>s.pathnameBase));return _.useMemo(()=>td(e,JSON.parse(l),a,n==="path"),[e,l,a,n])}function iR(e,t,n){Ba()||q(!1);let{navigator:o}=_.useContext(kr),{matches:a}=_.useContext(Jn),l=a[a.length-1],s=l?l.params:{};l&&l.pathname;let i=l?l.pathnameBase:"/";l&&l.route;let c=ho(),u;if(t){var d;let S=typeof t=="string"?yn(t):t;i==="/"||(d=S.pathname)!=null&&d.startsWith(i)||q(!1),u=S}else u=c;let x=u.pathname||"/",m=i==="/"?x:x.slice(i.length)||"/",j=Hr(e,{pathname:m}),y=fR(j&&j.map(S=>Object.assign({},S,{params:Object.assign({},s,S.params),pathname:ln([i,o.encodeLocation?o.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?i:ln([i,o.encodeLocation?o.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),a,n);return t&&y?_.createElement(Es.Provider,{value:{location:ns({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Oe.Pop}},y):y}function cR(){let e=gR(),t=y4(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},l=null;return _.createElement(_.Fragment,null,_.createElement("h2",null,"Unexpected Application Error!"),_.createElement("h3",{style:{fontStyle:"italic"}},t),n?_.createElement("pre",{style:a},n):null,l)}const uR=_.createElement(cR,null);class dR extends _.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?_.createElement(Jn.Provider,{value:this.props.routeContext},_.createElement(k4.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function pR(e){let{routeContext:t,match:n,children:o}=e,a=_.useContext(Aa);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),_.createElement(Jn.Provider,{value:t},o)}function fR(e,t,n){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var a;if((a=n)!=null&&a.errors)e=n.matches;else return null}let l=e,s=(o=n)==null?void 0:o.errors;if(s!=null){let i=l.findIndex(c=>c.route.id&&(s==null?void 0:s[c.route.id]));i>=0||q(!1),l=l.slice(0,Math.min(l.length,i+1))}return l.reduceRight((i,c,u)=>{let d=c.route.id?s==null?void 0:s[c.route.id]:null,x=null;n&&(x=c.route.errorElement||uR);let m=t.concat(l.slice(0,u+1)),j=()=>{let y;return d?y=x:c.route.Component?y=_.createElement(c.route.Component,null):c.route.element?y=c.route.element:y=i,_.createElement(pR,{match:c,routeContext:{outlet:i,matches:m,isDataRoute:n!=null},children:y})};return n&&(c.route.ErrorBoundary||c.route.errorElement||u===0)?_.createElement(dR,{location:n.location,revalidation:n.revalidation,component:x,error:d,children:j(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):j()},null)}var E4=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(E4||{}),rs=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(rs||{});function hR(e){let t=_.useContext(Aa);return t||q(!1),t}function mR(e){let t=_.useContext(od);return t||q(!1),t}function xR(e){let t=_.useContext(Jn);return t||q(!1),t}function L4(e){let t=xR(),n=t.matches[t.matches.length-1];return n.route.id||q(!1),n.route.id}function gR(){var e;let t=_.useContext(k4),n=mR(rs.UseRouteError),o=L4(rs.UseRouteError);return t||((e=n.errors)==null?void 0:e[o])}function vR(){let{router:e}=hR(E4.UseNavigateStable),t=L4(rs.UseNavigateStable),n=_.useRef(!1);return T4(()=>{n.current=!0}),_.useCallback(function(a,l){l===void 0&&(l={}),n.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,ns({fromRouteId:t},l)))},[e,t])}function yR(e){return sR(e.context)}function CR(e){let{basename:t="/",children:n=null,location:o,navigationType:a=Oe.Pop,navigator:l,static:s=!1}=e;Ba()&&q(!1);let i=t.replace(/^\/*/,"/"),c=_.useMemo(()=>({basename:i,navigator:l,static:s}),[i,l,s]);typeof o=="string"&&(o=yn(o));let{pathname:u="/",search:d="",hash:x="",state:m=null,key:j="default"}=o,y=_.useMemo(()=>{let S=Wn(u,i);return S==null?null:{location:{pathname:S,search:d,hash:x,state:m,key:j},navigationType:a}},[i,u,d,x,m,j,a]);return y==null?null:_.createElement(kr.Provider,{value:c},_.createElement(Es.Provider,{children:n,value:y}))}new Promise(()=>{});function jR(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:_.createElement(e.Component),Component:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:_.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function oo(){return oo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},oo.apply(this,arguments)}function N4(e,t){if(e==null)return{};var n={},o=Object.keys(e),a,l;for(l=0;l<o.length;l++)a=o[l],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function SR(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function bR(e,t){return e.button===0&&(!t||t==="_self")&&!SR(e)}const _R=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],wR=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"];function kR(e,t){return VN({basename:t==null?void 0:t.basename,future:oo({},t==null?void 0:t.future,{v7_prependBasename:!0}),history:fN({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||TR(),routes:e,mapRouteProperties:jR,window:t==null?void 0:t.window}).initialize()}function TR(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=oo({},t,{errors:ER(t.errors)})),t}function ER(e){if(!e)return null;let t=Object.entries(e),n={};for(let[o,a]of t)if(a&&a.__type==="RouteErrorResponse")n[o]=new nd(a.status,a.statusText,a.data,a.internal===!0);else if(a&&a.__type==="Error"){if(a.__subType){let l=window[a.__subType];if(typeof l=="function")try{let s=new l(a.message);s.stack="",n[o]=s}catch{}}if(n[o]==null){let l=new Error(a.message);l.stack="",n[o]=l}}else n[o]=a;return n}const R4=_.createContext({isTransitioning:!1}),LR=_.createContext(new Map),NR="startTransition",jp=f0[NR];function RR(e){jp?jp(e):e()}class OR{constructor(){this.status="pending",this.promise=new Promise((t,n)=>{this.resolve=o=>{this.status==="pending"&&(this.status="resolved",t(o))},this.reject=o=>{this.status==="pending"&&(this.status="rejected",n(o))}})}}function DR(e){let{fallbackElement:t,router:n,future:o}=e,[a,l]=_.useState(n.state),[s,i]=_.useState(),[c,u]=_.useState({isTransitioning:!1}),[d,x]=_.useState(),[m,j]=_.useState(),[y,S]=_.useState(),N=_.useRef(new Map),{v7_startTransition:g}=o||{},p=_.useCallback(b=>{g?RR(b):b()},[g]),h=_.useCallback((b,T)=>{let{deletedFetchers:E,unstable_viewTransitionOpts:P}=T;E.forEach(U=>N.current.delete(U)),b.fetchers.forEach((U,X)=>{U.data!==void 0&&N.current.set(X,U.data)}),!P||n.window==null||typeof n.window.document.startViewTransition!="function"?p(()=>l(b)):m&&d?(d.resolve(),m.skipTransition(),S({state:b,currentLocation:P.currentLocation,nextLocation:P.nextLocation})):(i(b),u({isTransitioning:!0,currentLocation:P.currentLocation,nextLocation:P.nextLocation}))},[n.window,m,d,N,p]);_.useLayoutEffect(()=>n.subscribe(h),[n,h]),_.useEffect(()=>{c.isTransitioning&&x(new OR)},[c.isTransitioning]),_.useEffect(()=>{if(d&&s&&n.window){let b=s,T=d.promise,E=n.window.document.startViewTransition(async()=>{p(()=>l(b)),await T});E.finished.finally(()=>{x(void 0),j(void 0),i(void 0),u({isTransitioning:!1})}),j(E)}},[p,s,d,n.window]),_.useEffect(()=>{d&&s&&a.location.key===s.location.key&&d.resolve()},[d,m,a.location,s]),_.useEffect(()=>{!c.isTransitioning&&y&&(i(y.state),u({isTransitioning:!0,currentLocation:y.currentLocation,nextLocation:y.nextLocation}),S(void 0))},[c.isTransitioning,y]);let f=_.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:b=>n.navigate(b),push:(b,T,E)=>n.navigate(b,{state:T,preventScrollReset:E==null?void 0:E.preventScrollReset}),replace:(b,T,E)=>n.navigate(b,{replace:!0,state:T,preventScrollReset:E==null?void 0:E.preventScrollReset})}),[n]),v=n.basename||"/",C=_.useMemo(()=>({router:n,navigator:f,static:!1,basename:v}),[n,f,v]);return _.createElement(_.Fragment,null,_.createElement(Aa.Provider,{value:C},_.createElement(od.Provider,{value:a},_.createElement(LR.Provider,{value:N.current},_.createElement(R4.Provider,{value:c},_.createElement(CR,{basename:v,location:a.location,navigationType:a.historyAction,navigator:f},a.initialized?_.createElement(MR,{routes:n.routes,state:a}):t))))),null)}function MR(e){let{routes:t,state:n}=e;return iR(t,void 0,n)}const PR=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",$R=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,AR=_.forwardRef(function(t,n){let{onClick:o,relative:a,reloadDocument:l,replace:s,state:i,target:c,to:u,preventScrollReset:d,unstable_viewTransition:x}=t,m=N4(t,_R),{basename:j}=_.useContext(kr),y,S=!1;if(typeof u=="string"&&$R.test(u)&&(y=u,PR))try{let h=new URL(window.location.href),f=u.startsWith("//")?new URL(h.protocol+u):new URL(u),v=Wn(f.pathname,j);f.origin===h.origin&&v!=null?u=v+f.search+f.hash:S=!0}catch{}let N=rR(u,{relative:a}),g=zR(u,{replace:s,state:i,target:c,preventScrollReset:d,relative:a,unstable_viewTransition:x});function p(h){o&&o(h),h.defaultPrevented||g(h)}return _.createElement("a",oo({},m,{href:y||N,onClick:S||l?o:p,ref:n,target:c}))}),BR=_.forwardRef(function(t,n){let{"aria-current":o="page",caseSensitive:a=!1,className:l="",end:s=!1,style:i,to:c,unstable_viewTransition:u,children:d}=t,x=N4(t,wR),m=Ia(c,{relative:x.relative}),j=ho(),y=_.useContext(od),{navigator:S}=_.useContext(kr),N=y!=null&&FR(m)&&u===!0,g=S.encodeLocation?S.encodeLocation(m).pathname:m.pathname,p=j.pathname,h=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;a||(p=p.toLowerCase(),h=h?h.toLowerCase():null,g=g.toLowerCase());let f=p===g||!s&&p.startsWith(g)&&p.charAt(g.length)==="/",v=h!=null&&(h===g||!s&&h.startsWith(g)&&h.charAt(g.length)==="/"),C={isActive:f,isPending:v,isTransitioning:N},b=f?o:void 0,T;typeof l=="function"?T=l(C):T=[l,f?"active":null,v?"pending":null,N?"transitioning":null].filter(Boolean).join(" ");let E=typeof i=="function"?i(C):i;return _.createElement(AR,oo({},x,{"aria-current":b,className:T,ref:n,style:E,to:c,unstable_viewTransition:u}),typeof d=="function"?d(C):d)});var kc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(kc||(kc={}));var Sp;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Sp||(Sp={}));function IR(e){let t=_.useContext(Aa);return t||q(!1),t}function zR(e,t){let{target:n,replace:o,state:a,preventScrollReset:l,relative:s,unstable_viewTransition:i}=t===void 0?{}:t,c=oR(),u=ho(),d=Ia(e,{relative:s});return _.useCallback(x=>{if(bR(x,n)){x.preventDefault();let m=o!==void 0?o:yr(u)===yr(d);c(e,{replace:m,state:a,preventScrollReset:l,relative:s,unstable_viewTransition:i})}},[u,c,d,o,a,n,e,l,s,i])}function FR(e,t){t===void 0&&(t={});let n=_.useContext(R4);n==null&&q(!1);let{basename:o}=IR(kc.useViewTransitionState),a=Ia(e,{relative:t.relative});if(!n.isTransitioning)return!1;let l=Wn(n.currentLocation.pathname,o)||n.currentLocation.pathname,s=Wn(n.nextLocation.pathname,o)||n.nextLocation.pathname;return Sc(a.pathname,s)!=null||Sc(a.pathname,l)!=null}const O4=({to:e,className:t="",exact:n,onClick:o,label:a,style:l,...s})=>r.jsx(BR,{to:e,onClick:o,end:n&&"end",className:({isActive:i})=>`${t} ${i?"active":""}`,"aria-label":a,style:l,children:r.jsx(_s,{...s})}),D4=({path:e,onClick:t,width:n=512,height:o=512,style:a,className:l="night-and-day--icon",fill:s="currentColor"})=>r.jsx("svg",{"aria-hidden":"true",focusable:"false",className:l,style:a,role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${n} ${o}`,onClick:t,children:r.jsx("path",{d:e,fill:s})}),UR=e=>r.jsx(D4,{path:"M289,23C160,23 56,127 56,256C56,385 160,489 289,489C352,489 409,464 451,423C456,418 457,411 454,404C451,397 444,394 436,395C426,397 416,397 405,397C304,397 222,316 222,214C222,146 260,86 315,55C322,51 325,44 323,37C322,30 316,25 309,24C302,23 295,23 289,23L289,23Z",...e}),M4=({Icon:e,caption:t,onClick:n,iconClass:o,iconStyle:a,captionStyle:l,className:s="night-and-day--switcher",captionClass:i="night-and-day--caption",style:c={display:"inline-block"}})=>r.jsxs("div",{className:s,onClick:n,style:c,children:[r.jsx(e,{style:a,className:o}),!!t&&r.jsx("div",{className:i,style:l,children:t})]}),HR=e=>{const{setDark:t}=za();return r.jsx(M4,{Icon:UR,onClick:t,...e})},VR=e=>r.jsx(D4,{path:"M362,1.2C367,3 370,8 371,13L391,121L499,141C504,142 509,145 511,150C512,155 512,161 509,166L447,256L509,346C512,351 512,357 511,362C509,367 504,370 499,371L391,391L371,499C370,504 367,509 362,511C357,512 351,512 346,509L256,447L166,509C161,512 156,512 151,511C146,509 142,504 141,499L121,391L13,371C8,370 3,367 1,362C0,356 0,351 3,346L65,256L3,166C0,161 0,156 1,151C3,146 8,142 13,141L121,121L141,13C142,8 146,3 151,1C156,0 161,0 166,3L256,65L346,3C351,0 357,0 362,1ZM160,256C160,203 203,160 256,160C309,160 352,203 352,256C352,309 309,352 256,352C203,352 160,309 160,256ZM384,256C384,186 326,128 256,128C186,128 128,186 128,256C128,326 186,384 256,384C326,384 384,326 384,256Z",...e}),WR=e=>{const{setLight:t}=za();return r.jsx(M4,{Icon:VR,onClick:t,...e})},ZR=({sunrise:e={},nightfall:t={}})=>{const{isLight:n,setLight:o,setDark:a}=za();return n?r.jsx(WR,{onClick:a,...e}):r.jsx(HR,{onClick:o,...t})},P4=_.createContext(),za=()=>_.useContext(P4),fl="dark",xi="light",GR="(prefers-color-scheme: dark)",gi=()=>!1,KR=()=>{let e={};return{clear:()=>e={},getItem:t=>e[t],setItem:(t,n)=>e[t]=n,removeItem:t=>delete e[t]}},YR=()=>({matches:gi,addEventListener:gi,removeEventListener:gi}),$4=typeof window<"u",vi=$4&&window.localStorage?window.localStorage:KR(),QR=$4&&window.matchMedia?e=>window.matchMedia(e):YR,Tc=QR(GR),XR=()=>Tc.matches,qR=e=>e.split(" "),bp=(e,t="")=>`${e} ${t}`,JR=({storageKey:e,defaultVariant:t,children:n})=>{const o=e?vi.getItem(e):null,[a,l=""]=o?qR(o):[XR(),null],[s,i]=_.useState(a===fl),[c,u]=_.useState(l||t),d=y=>{i(y),e&&vi.setItem(e,bp(y?fl:xi,c))},x=y=>{u(y),e&&vi.setItem(e,bp(s?fl:xi,y))},m=y=>d(y.matches);_.useEffect(()=>(Tc.addEventListener("change",m),()=>Tc.removeEventListener("change",m)),[]);const j={isDark:s,isLight:!s,setDark:()=>d(!0),setLight:()=>d(!1),setIsDark:i,toggleTheme:()=>d(!s),theme:s?fl:xi,variant:c,setVariant:x};return r.jsx(P4.Provider,{value:j,children:n})},A4="0.0.6",eO="2023-12-31",_p="sidebar",tO="no-sidebar",nO=()=>{const{variant:e,setVariant:t}=za();return r.jsx("header",{children:r.jsxs("nav",{children:[r.jsxs("div",{children:[r.jsx(Y,{name:"bars",className:"toggle-sidebar action",onClick:()=>t(e===_p?tO:_p)}),r.jsx(O4,{to:"/",className:"home mar-l-2",text:"Badger React UI"}),r.jsxs("span",{className:"small mar-l-2",children:["v",A4]})]}),r.jsxs("div",{className:"flex middle",children:[r.jsx("a",{href:"https://github.com/abw/badger-react-ui",children:r.jsx(Y,{name:"github",className:"mar-r-4"})}),r.jsx(ZR,{})]})]})})},rO=()=>r.jsx("footer",{children:r.jsxs("div",{className:"flex space middle",children:[r.jsx("div",{className:"large",children:"Badger React UI"}),r.jsxs("div",{className:"text-center small",children:["by ",r.jsx("a",{href:"https://github.com/abw",children:"Andy Wardley"})]}),r.jsxs("div",{className:"text-right",children:["v",A4,r.jsx("br",{}),eO]})]})}),oO=({toc:e,contentRef:t})=>r.jsx("ul",{className:"toc",children:Object.entries(e).map(([n,o])=>r.jsx("li",{onClick:()=>{var a,l;(l=t.current)==null||l.scrollTo({top:((a=o.ref.current)==null?void 0:a.offsetTop)-20})},className:o.heading?"heading":"",children:o.heading?r.jsx("h4",{children:o.heading}):o.text.match(/^code:/)?r.jsx("code",{children:o.text.replace(/^code:/,"")}):o.text},n))}),aO=$a.Consumer(oO),lO=({title:e,path:t,items:n,tocs:o})=>{const a=Ia(),l=t&&a.pathname.slice(0,t.length)===t;return r.jsxs("details",{className:"menu",open:l,children:[r.jsx("summary",{children:e}),r.jsx("ul",{children:n.map(s=>{const i=a.pathname===s.to;return r.jsxs("li",{children:[r.jsx(O4,{className:"item",...s}),!!s.tocName&&i&&o[s.tocName]&&r.jsx(aO,{toc:o[s.tocName]})]},s.to)})})]})},wp=$a.Consumer(lO),sO={title:"Getting Started",path:"/getting-started",items:[{to:"/getting-started/installation",text:"Installation"}]},iO={title:"Components",path:"/components",items:[{to:"/components/alert",text:"Alert",tocName:"alert"},{to:"/components/button",text:"Button",tocName:"button"},{to:"/components/buttons",text:"Buttons",tocName:"buttons"},{to:"/components/checkbox",text:"Checkbox",tocName:"checkbox"},{to:"/components/confirm",text:"Confirm",tocName:"confirm"},{to:"/components/datatable",text:"Datatable",tocName:"datatable"},{to:"/components/details",text:"Details",tocName:"details"},{to:"/components/dropdown",text:"Dropdown",tocName:"dropdown"},{to:"/components/icon",text:"Icon",tocName:"icon"},{to:"/components/modal",text:"Modal",tocName:"modal"},{to:"/components/overlay",text:"Overlay",tocName:"overlay"},{to:"/components/pager",text:"Pager",tocName:"pager"},{to:"/components/radio",text:"Radio",tocName:"radio"},{to:"/components/search",text:"Search",tocName:"search"},{to:"/components/select",text:"Select",tocName:"select"}]},cO=()=>r.jsxs(r.Fragment,{children:[r.jsx(wp,{...sO}),r.jsx(wp,{...iO})]});function uO(){const{pathname:e}=ho();return _.useEffect(()=>dO(document.getElementById("content")),[e]),null}function dO(e,{top:t=0,left:n=0,behavior:o="smooth"}={}){e==null||e.scrollTo({top:t,left:n,behavior:o})}const pO=({contentRef:e})=>{const{theme:t,variant:n}=za();return r.jsxs("div",{id:"site",className:n,"data-theme":t,children:[r.jsx(nO,{}),r.jsxs("div",{id:"app",children:[r.jsx(uO,{}),r.jsx("aside",{children:r.jsx(cO,{})}),r.jsx("main",{id:"content",ref:e,children:r.jsx(yR,{})})]}),r.jsx(rO,{})]})},fO=$a.Consumer(pO),hO=/\/_layout$/,mO=/\/_examples\//,xO=gO(Object.assign({"../pages/components/alert/_examples/Alert/index.jsx":Cj,"../pages/components/alert/_examples/Error/index.jsx":kj,"../pages/components/alert/_examples/Info/index.jsx":Lj,"../pages/components/alert/_examples/Success/index.jsx":Oj,"../pages/components/alert/_examples/Warning/index.jsx":Pj,"../pages/components/alert/_examples/border/index.jsx":Bj,"../pages/components/alert/_examples/className/index.jsx":Fj,"../pages/components/alert/_examples/color/index.jsx":Vj,"../pages/components/alert/_examples/dismissable/index.jsx":Gj,"../pages/components/alert/_examples/headIcon/index.jsx":Qj,"../pages/components/alert/_examples/headline/index.jsx":Jj,"../pages/components/alert/_examples/icon/index.jsx":nS,"../pages/components/alert/_examples/onDismiss/index.jsx":aS,"../pages/components/alert/_examples/radius/index.jsx":iS,"../pages/components/alert/_examples/revealable/index.jsx":dS,"../pages/components/alert/_examples/revealed/index.jsx":hS,"../pages/components/alert/_examples/shadow/index.jsx":gS,"../pages/components/alert/_examples/size/index.jsx":CS,"../pages/components/alert/_examples/stripe/index.jsx":bS,"../pages/components/alert/_examples/text/index.jsx":kS,"../pages/components/alert/_examples/title/index.jsx":LS,"../pages/components/alert/_examples/type/index.jsx":OS,"../pages/components/alert/index.jsx":PS,"../pages/components/button/_examples/Button/index.jsx":BS,"../pages/components/button/_examples/Content/index.jsx":FS,"../pages/components/button/_examples/bare/index.jsx":VS,"../pages/components/button/_examples/border/index.jsx":GS,"../pages/components/button/_examples/bright/index.jsx":QS,"../pages/components/button/_examples/className/index.jsx":JS,"../pages/components/button/_examples/color/index.jsx":nb,"../pages/components/button/_examples/dark/index.jsx":ab,"../pages/components/button/_examples/disabled/index.jsx":ib,"../pages/components/button/_examples/icon/index.jsx":db,"../pages/components/button/_examples/iconLeft/index.jsx":hb,"../pages/components/button/_examples/iconRight/index.jsx":gb,"../pages/components/button/_examples/label/index.jsx":Cb,"../pages/components/button/_examples/onClick/index.jsx":bb,"../pages/components/button/_examples/outline/index.jsx":kb,"../pages/components/button/_examples/radius/index.jsx":Lb,"../pages/components/button/_examples/shaded/index.jsx":Ob,"../pages/components/button/_examples/shadow/index.jsx":Pb,"../pages/components/button/_examples/size/index.jsx":Bb,"../pages/components/button/_examples/text/index.jsx":Fb,"../pages/components/button/_examples/tooltip/index.jsx":Vb,"../pages/components/button/_examples/type/index.jsx":Gb,"../pages/components/button/index.jsx":Yb,"../pages/components/buttons/_examples/Button/index.jsx":Jb,"../pages/components/buttons/_examples/Buttons/index.jsx":n_,"../pages/components/buttons/_examples/buttonClass/index.jsx":a_,"../pages/components/buttons/_examples/buttonsProp/index.jsx":i_,"../pages/components/buttons/_examples/className/index.jsx":d_,"../pages/components/buttons/_examples/outline/index.jsx":h_,"../pages/components/buttons/index.jsx":x_,"../pages/components/checkbox/_examples/CheckboxState/index.jsx":y_,"../pages/components/checkbox/_examples/Overview/index.jsx":S_,"../pages/components/checkbox/_examples/checked/index.jsx":w_,"../pages/components/checkbox/_examples/checkedText/index.jsx":E_,"../pages/components/checkbox/_examples/className/index.jsx":R_,"../pages/components/checkbox/_examples/disabled/index.jsx":M_,"../pages/components/checkbox/_examples/onChange/index.jsx":A_,"../pages/components/checkbox/_examples/text/index.jsx":z_,"../pages/components/checkbox/index.jsx":U_,"../pages/components/confirm/_examples/Overview/index.jsx":W_,"../pages/components/confirm/_examples/cancel/index.jsx":K_,"../pages/components/confirm/_examples/cancelProps/index.jsx":X_,"../pages/components/confirm/_examples/className/index.jsx":ew,"../pages/components/confirm/_examples/color/index.jsx":rw,"../pages/components/confirm/_examples/confirm/index.jsx":lw,"../pages/components/confirm/_examples/confirmProps/index.jsx":cw,"../pages/components/confirm/_examples/iconRight/index.jsx":pw,"../pages/components/confirm/_examples/onClick/index.jsx":mw,"../pages/components/confirm/_examples/text/index.jsx":vw,"../pages/components/confirm/index.jsx":Cw,"../pages/components/datatable/_examples/Datatable/index.jsx":_w,"../pages/components/datatable/index.jsx":kw,"../pages/components/details/_examples/Details/index.jsx":Lw,"../pages/components/details/_examples/border/index.jsx":Ow,"../pages/components/details/_examples/color/index.jsx":Pw,"../pages/components/details/_examples/content/index.jsx":Bw,"../pages/components/details/_examples/lined/index.jsx":Fw,"../pages/components/details/_examples/open/index.jsx":Vw,"../pages/components/details/_examples/radius/index.jsx":Gw,"../pages/components/details/_examples/shaded/index.jsx":Qw,"../pages/components/details/_examples/shadow/index.jsx":Jw,"../pages/components/details/_examples/summary/index.jsx":nk,"../pages/components/details/index.jsx":ok,"../pages/components/dropdown/_examples/Dropdown/index.jsx":sk,"../pages/components/dropdown/_examples/iconLeft/index.jsx":uk,"../pages/components/dropdown/_examples/iconLeftRotate/index.jsx":fk,"../pages/components/dropdown/_examples/iconRight/index.jsx":xk,"../pages/components/dropdown/_examples/iconRightRotate/index.jsx":yk,"../pages/components/dropdown/_examples/onSelect/index.jsx":Sk,"../pages/components/dropdown/_examples/openOnHover/index.jsx":wk,"../pages/components/dropdown/_examples/options/index.jsx":$k,"../pages/components/dropdown/_examples/right/index.jsx":Ik,"../pages/components/dropdown/_examples/text/index.jsx":Uk,"../pages/components/dropdown/_examples/wide/index.jsx":Wk,"../pages/components/dropdown/index.jsx":Gk,"../pages/components/icon/_examples/Icon/index.jsx":tT,"../pages/components/icon/_examples/IconLibrary/index.jsx":nT,"../pages/components/icon/_examples/className/index.jsx":aT,"../pages/components/icon/_examples/color/index.jsx":iT,"../pages/components/icon/_examples/name/index.jsx":dT,"../pages/components/icon/_examples/path/index.jsx":hT,"../pages/components/icon/_examples/size/index.jsx":gT,"../pages/components/icon/index.jsx":yT,"../pages/components/modal/_examples/Modal/index.jsx":ST,"../pages/components/modal/_examples/ModalState/index.jsx":wT,"../pages/components/modal/_examples/className/index.jsx":ET,"../pages/components/modal/_examples/close/index.jsx":RT,"../pages/components/modal/_examples/closeIcon/index.jsx":MT,"../pages/components/modal/_examples/footer/index.jsx":AT,"../pages/components/modal/_examples/header/index.jsx":zT,"../pages/components/modal/_examples/text/index.jsx":HT,"../pages/components/modal/_examples/title/index.jsx":ZT,"../pages/components/modal/index.jsx":KT,"../pages/components/overlay/_examples/Overlay/index.jsx":XT,"../pages/components/overlay/_examples/OverlayState/index.jsx":eE,"../pages/components/overlay/_examples/className/index.jsx":oE,"../pages/components/overlay/_examples/custom/index.jsx":sE,"../pages/components/overlay/_examples/fixed/index.jsx":uE,"../pages/components/overlay/_examples/theme/index.jsx":mE,"../pages/components/overlay/index.jsx":gE,"../pages/components/pager/_examples/Context/index.jsx":bE,"../pages/components/pager/_examples/Pager/index.jsx":kE,"../pages/components/pager/_examples/className/index.jsx":LE,"../pages/components/pager/_examples/color/index.jsx":OE,"../pages/components/pager/_examples/icons/index.jsx":PE,"../pages/components/pager/_examples/nextIcon/index.jsx":IE,"../pages/components/pager/_examples/showFirstLast/index.jsx":UE,"../pages/components/pager/_examples/size/index.jsx":WE,"../pages/components/pager/index.jsx":GE,"../pages/components/radio/_examples/Overview/index.jsx":QE,"../pages/components/radio/_examples/border/index.jsx":JE,"../pages/components/radio/_examples/className/index.jsx":nL,"../pages/components/radio/_examples/disabled/index.jsx":aL,"../pages/components/radio/_examples/inline/index.jsx":iL,"../pages/components/radio/_examples/onChange/index.jsx":dL,"../pages/components/radio/_examples/options/index.jsx":hL,"../pages/components/radio/_examples/value/index.jsx":gL,"../pages/components/radio/index.jsx":yL,"../pages/components/search/_examples/Search/index.jsx":bL,"../pages/components/search/_examples/displayResult/index.jsx":TL,"../pages/components/search/_examples/displayValue/index.jsx":RL,"../pages/components/search/_examples/onSearch/index.jsx":PL,"../pages/components/search/index.jsx":AL,"../pages/components/select/_examples/Select/index.jsx":FL,"../pages/components/select/_examples/displayOption/index.jsx":WL,"../pages/components/select/_examples/displayValue/index.jsx":YL,"../pages/components/select/_examples/options/index.jsx":JL,"../pages/components/select/index.jsx":tN,"../pages/getting-started/installation.jsx":iN,"../pages/index.jsx":pN}));function gO(e){const n=Object.entries(e).map(vO).filter(a=>!a.path.match(mO)).reduce((a,l)=>(a[l.path]=l,a),{}),o=Object.keys(n).filter(a=>a.match(hO)).sort((a,l)=>l.length-a.length);for(let a of o){const l=n[a];delete n[a];const s=a.replace(/_layout$/,""),i=s.length;l.path=s,l.children=[];const c=n[s];c&&(delete c.path,c.index=!0,l.children.push(c),delete n[s]);const u=Object.keys(n).filter(d=>d.slice(0,i)===s);for(let d of u){const x=n[d];delete n[d],d=d.slice(i),x.path=d.length?d:"/",l.children.push(x)}n[s]=l}return Object.values(n)}function vO([e,t]){const n=e.replace(/^[./]*pages/,"").replace(/\.jsx$/,"").replace(/index$/,"").replace(/\[(\w+)\]/,":$1"),o=t.default;return{path:n,Component:o}}const yO=kR([{path:"/",element:r.jsx(fO,{}),children:xO}],{basename:"/badger-react-ui"});yi.createRoot(document.getElementById("root")).render(r.jsx(Ge.StrictMode,{children:r.jsx(JR,{storageKey:"theme",children:r.jsx($a.Provider,{children:r.jsx(DR,{router:yO})})})}));
