var R4=Object.defineProperty;var M4=(e,t,n)=>t in e?R4(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Se=(e,t,n)=>(M4(e,typeof t!="symbol"?t+"":t,n),n);function D4(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const l in r)if(l!=="default"&&!(l in e)){const a=Object.getOwnPropertyDescriptor(r,l);a&&Object.defineProperty(e,l,a.get?a:{enumerable:!0,get:()=>r[l]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const a of l)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(l){const a={};return l.integrity&&(a.integrity=l.integrity),l.referrerPolicy&&(a.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?a.credentials="include":l.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(l){if(l.ep)return;l.ep=!0;const a=n(l);fetch(l.href,a)}})();var _a=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Wn(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var gp={exports:{}},ts={},vp={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yl=Symbol.for("react.element"),P4=Symbol.for("react.portal"),A4=Symbol.for("react.fragment"),$4=Symbol.for("react.strict_mode"),B4=Symbol.for("react.profiler"),I4=Symbol.for("react.provider"),z4=Symbol.for("react.context"),F4=Symbol.for("react.forward_ref"),U4=Symbol.for("react.suspense"),H4=Symbol.for("react.memo"),W4=Symbol.for("react.lazy"),pd=Symbol.iterator;function V4(e){return e===null||typeof e!="object"?null:(e=pd&&e[pd]||e["@@iterator"],typeof e=="function"?e:null)}var yp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Cp=Object.assign,jp={};function oo(e,t,n){this.props=e,this.context=t,this.refs=jp,this.updater=n||yp}oo.prototype.isReactComponent={};oo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};oo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Sp(){}Sp.prototype=oo.prototype;function _c(e,t,n){this.props=e,this.context=t,this.refs=jp,this.updater=n||yp}var kc=_c.prototype=new Sp;kc.constructor=_c;Cp(kc,oo.prototype);kc.isPureReactComponent=!0;var fd=Array.isArray,bp=Object.prototype.hasOwnProperty,Tc={current:null},wp={key:!0,ref:!0,__self:!0,__source:!0};function _p(e,t,n){var r,l={},a=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(a=""+t.key),t)bp.call(t,r)&&!wp.hasOwnProperty(r)&&(l[r]=t[r]);var i=arguments.length-2;if(i===1)l.children=n;else if(1<i){for(var c=Array(i),u=0;u<i;u++)c[u]=arguments[u+2];l.children=c}if(e&&e.defaultProps)for(r in i=e.defaultProps,i)l[r]===void 0&&(l[r]=i[r]);return{$$typeof:yl,type:e,key:a,ref:s,props:l,_owner:Tc.current}}function Z4(e,t){return{$$typeof:yl,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Lc(e){return typeof e=="object"&&e!==null&&e.$$typeof===yl}function G4(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var hd=/\/+/g;function Ds(e,t){return typeof e=="object"&&e!==null&&e.key!=null?G4(""+e.key):t.toString(36)}function da(e,t,n,r,l){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(a){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case yl:case P4:s=!0}}if(s)return s=e,l=l(s),e=r===""?"."+Ds(s,0):r,fd(l)?(n="",e!=null&&(n=e.replace(hd,"$&/")+"/"),da(l,t,n,"",function(u){return u})):l!=null&&(Lc(l)&&(l=Z4(l,n+(!l.key||s&&s.key===l.key?"":(""+l.key).replace(hd,"$&/")+"/")+e)),t.push(l)),1;if(s=0,r=r===""?".":r+":",fd(e))for(var i=0;i<e.length;i++){a=e[i];var c=r+Ds(a,i);s+=da(a,t,n,c,l)}else if(c=V4(e),typeof c=="function")for(e=c.call(e),i=0;!(a=e.next()).done;)a=a.value,c=r+Ds(a,i++),s+=da(a,t,n,c,l);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Fl(e,t,n){if(e==null)return e;var r=[],l=0;return da(e,r,"","",function(a){return t.call(n,a,l++)}),r}function K4(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var at={current:null},pa={transition:null},Y4={ReactCurrentDispatcher:at,ReactCurrentBatchConfig:pa,ReactCurrentOwner:Tc};te.Children={map:Fl,forEach:function(e,t,n){Fl(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Fl(e,function(){t++}),t},toArray:function(e){return Fl(e,function(t){return t})||[]},only:function(e){if(!Lc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};te.Component=oo;te.Fragment=A4;te.Profiler=B4;te.PureComponent=_c;te.StrictMode=$4;te.Suspense=U4;te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Y4;te.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Cp({},e.props),l=e.key,a=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,s=Tc.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(c in t)bp.call(t,c)&&!wp.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&i!==void 0?i[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){i=Array(c);for(var u=0;u<c;u++)i[u]=arguments[u+2];r.children=i}return{$$typeof:yl,type:e.type,key:l,ref:a,props:r,_owner:s}};te.createContext=function(e){return e={$$typeof:z4,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:I4,_context:e},e.Consumer=e};te.createElement=_p;te.createFactory=function(e){var t=_p.bind(null,e);return t.type=e,t};te.createRef=function(){return{current:null}};te.forwardRef=function(e){return{$$typeof:F4,render:e}};te.isValidElement=Lc;te.lazy=function(e){return{$$typeof:W4,_payload:{_status:-1,_result:e},_init:K4}};te.memo=function(e,t){return{$$typeof:H4,type:e,compare:t===void 0?null:t}};te.startTransition=function(e){var t=pa.transition;pa.transition={};try{e()}finally{pa.transition=t}};te.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};te.useCallback=function(e,t){return at.current.useCallback(e,t)};te.useContext=function(e){return at.current.useContext(e)};te.useDebugValue=function(){};te.useDeferredValue=function(e){return at.current.useDeferredValue(e)};te.useEffect=function(e,t){return at.current.useEffect(e,t)};te.useId=function(){return at.current.useId()};te.useImperativeHandle=function(e,t,n){return at.current.useImperativeHandle(e,t,n)};te.useInsertionEffect=function(e,t){return at.current.useInsertionEffect(e,t)};te.useLayoutEffect=function(e,t){return at.current.useLayoutEffect(e,t)};te.useMemo=function(e,t){return at.current.useMemo(e,t)};te.useReducer=function(e,t,n){return at.current.useReducer(e,t,n)};te.useRef=function(e){return at.current.useRef(e)};te.useState=function(e){return at.current.useState(e)};te.useSyncExternalStore=function(e,t,n){return at.current.useSyncExternalStore(e,t,n)};te.useTransition=function(){return at.current.useTransition()};te.version="18.2.0";vp.exports=te;var _=vp.exports;const Ge=Wn(_),Q4=D4({__proto__:null,default:Ge},[_]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X4=_,q4=Symbol.for("react.element"),J4=Symbol.for("react.fragment"),e0=Object.prototype.hasOwnProperty,t0=X4.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n0={key:!0,ref:!0,__self:!0,__source:!0};function kp(e,t,n){var r,l={},a=null,s=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)e0.call(t,r)&&!n0.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:q4,type:e,key:a,ref:s,props:l,_owner:t0.current}}ts.Fragment=J4;ts.jsx=kp;ts.jsxs=kp;gp.exports=ts;var o=gp.exports,xi={},Tp={exports:{}},yt={},Lp={exports:{}},Ep={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(O,A){var $=O.length;O.push(A);e:for(;0<$;){var z=$-1>>>1,K=O[z];if(0<l(K,A))O[z]=A,O[$]=K,$=z;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var A=O[0],$=O.pop();if($!==A){O[0]=$;e:for(var z=0,K=O.length,Ae=K>>>1;z<Ae;){var le=2*(z+1)-1,$e=O[le],Te=le+1,Ve=O[Te];if(0>l($e,$))Te<K&&0>l(Ve,$e)?(O[z]=Ve,O[Te]=$,z=Te):(O[z]=$e,O[le]=$,z=le);else if(Te<K&&0>l(Ve,$))O[z]=Ve,O[Te]=$,z=Te;else break e}}return A}function l(O,A){var $=O.sortIndex-A.sortIndex;return $!==0?$:O.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var s=Date,i=s.now();e.unstable_now=function(){return s.now()-i}}var c=[],u=[],d=1,x=null,m=3,j=!1,y=!1,S=!1,E=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(O){for(var A=n(u);A!==null;){if(A.callback===null)r(u);else if(A.startTime<=O)r(u),A.sortIndex=A.expirationTime,t(c,A);else break;A=n(u)}}function f(O){if(S=!1,h(O),!y)if(n(c)!==null)y=!0,ue(v);else{var A=n(u);A!==null&&ge(f,A.startTime-O)}}function v(O,A){y=!1,S&&(S=!1,g(T),T=-1),j=!0;var $=m;try{for(h(A),x=n(c);x!==null&&(!(x.expirationTime>A)||O&&!U());){var z=x.callback;if(typeof z=="function"){x.callback=null,m=x.priorityLevel;var K=z(x.expirationTime<=A);A=e.unstable_now(),typeof K=="function"?x.callback=K:x===n(c)&&r(c),h(A)}else r(c);x=n(c)}if(x!==null)var Ae=!0;else{var le=n(u);le!==null&&ge(f,le.startTime-A),Ae=!1}return Ae}finally{x=null,m=$,j=!1}}var C=!1,b=null,T=-1,L=5,P=-1;function U(){return!(e.unstable_now()-P<L)}function X(){if(b!==null){var O=e.unstable_now();P=O;var A=!0;try{A=b(!0,O)}finally{A?ae():(C=!1,b=null)}}else C=!1}var ae;if(typeof p=="function")ae=function(){p(X)};else if(typeof MessageChannel<"u"){var ye=new MessageChannel,J=ye.port2;ye.port1.onmessage=X,ae=function(){J.postMessage(null)}}else ae=function(){E(X,0)};function ue(O){b=O,C||(C=!0,ae())}function ge(O,A){T=E(function(){O(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(O){O.callback=null},e.unstable_continueExecution=function(){y||j||(y=!0,ue(v))},e.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<O?Math.floor(1e3/O):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(O){switch(m){case 1:case 2:case 3:var A=3;break;default:A=m}var $=m;m=A;try{return O()}finally{m=$}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(O,A){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var $=m;m=O;try{return A()}finally{m=$}},e.unstable_scheduleCallback=function(O,A,$){var z=e.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?z+$:z):$=z,O){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=$+K,O={id:d++,callback:A,priorityLevel:O,startTime:$,expirationTime:K,sortIndex:-1},$>z?(O.sortIndex=$,t(u,O),n(c)===null&&O===n(u)&&(S?(g(T),T=-1):S=!0,ge(f,$-z))):(O.sortIndex=K,t(c,O),y||j||(y=!0,ue(v))),O},e.unstable_shouldYield=U,e.unstable_wrapCallback=function(O){var A=m;return function(){var $=m;m=A;try{return O.apply(this,arguments)}finally{m=$}}}})(Ep);Lp.exports=Ep;var r0=Lp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Np=_,vt=r0;function D(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Op=new Set,Jo={};function vr(e,t){Qr(e,t),Qr(e+"Capture",t)}function Qr(e,t){for(Jo[e]=t,e=0;e<t.length;e++)Op.add(t[e])}var sn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),gi=Object.prototype.hasOwnProperty,o0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,md={},xd={};function l0(e){return gi.call(xd,e)?!0:gi.call(md,e)?!1:o0.test(e)?xd[e]=!0:(md[e]=!0,!1)}function a0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function s0(e,t,n,r){if(t===null||typeof t>"u"||a0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function st(e,t,n,r,l,a,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=s}var Ye={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ye[e]=new st(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ye[t]=new st(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ye[e]=new st(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ye[e]=new st(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ye[e]=new st(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ye[e]=new st(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ye[e]=new st(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ye[e]=new st(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ye[e]=new st(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ec=/[\-:]([a-z])/g;function Nc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ec,Nc);Ye[t]=new st(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ec,Nc);Ye[t]=new st(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ec,Nc);Ye[t]=new st(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ye[e]=new st(e,1,!1,e.toLowerCase(),null,!1,!1)});Ye.xlinkHref=new st("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ye[e]=new st(e,1,!1,e.toLowerCase(),null,!0,!0)});function Oc(e,t,n,r){var l=Ye.hasOwnProperty(t)?Ye[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(s0(t,n,l,r)&&(n=null),r||l===null?l0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var fn=Np.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ul=Symbol.for("react.element"),Er=Symbol.for("react.portal"),Nr=Symbol.for("react.fragment"),Rc=Symbol.for("react.strict_mode"),vi=Symbol.for("react.profiler"),Rp=Symbol.for("react.provider"),Mp=Symbol.for("react.context"),Mc=Symbol.for("react.forward_ref"),yi=Symbol.for("react.suspense"),Ci=Symbol.for("react.suspense_list"),Dc=Symbol.for("react.memo"),wn=Symbol.for("react.lazy"),Dp=Symbol.for("react.offscreen"),gd=Symbol.iterator;function go(e){return e===null||typeof e!="object"?null:(e=gd&&e[gd]||e["@@iterator"],typeof e=="function"?e:null)}var ke=Object.assign,Ps;function No(e){if(Ps===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ps=t&&t[1]||""}return`
`+Ps+e}var As=!1;function $s(e,t){if(!e||As)return"";As=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var l=u.stack.split(`
`),a=r.stack.split(`
`),s=l.length-1,i=a.length-1;1<=s&&0<=i&&l[s]!==a[i];)i--;for(;1<=s&&0<=i;s--,i--)if(l[s]!==a[i]){if(s!==1||i!==1)do if(s--,i--,0>i||l[s]!==a[i]){var c=`
`+l[s].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=s&&0<=i);break}}}finally{As=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?No(e):""}function i0(e){switch(e.tag){case 5:return No(e.type);case 16:return No("Lazy");case 13:return No("Suspense");case 19:return No("SuspenseList");case 0:case 2:case 15:return e=$s(e.type,!1),e;case 11:return e=$s(e.type.render,!1),e;case 1:return e=$s(e.type,!0),e;default:return""}}function ji(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Nr:return"Fragment";case Er:return"Portal";case vi:return"Profiler";case Rc:return"StrictMode";case yi:return"Suspense";case Ci:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Mp:return(e.displayName||"Context")+".Consumer";case Rp:return(e._context.displayName||"Context")+".Provider";case Mc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Dc:return t=e.displayName||null,t!==null?t:ji(e.type)||"Memo";case wn:t=e._payload,e=e._init;try{return ji(e(t))}catch{}}return null}function c0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ji(t);case 8:return t===Rc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function zn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Pp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function u0(e){var t=Pp(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(s){r=""+s,a.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Hl(e){e._valueTracker||(e._valueTracker=u0(e))}function Ap(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Pp(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ka(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Si(e,t){var n=t.checked;return ke({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function vd(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=zn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function $p(e,t){t=t.checked,t!=null&&Oc(e,"checked",t,!1)}function bi(e,t){$p(e,t);var n=zn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?wi(e,t.type,n):t.hasOwnProperty("defaultValue")&&wi(e,t.type,zn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function yd(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function wi(e,t,n){(t!=="number"||ka(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Oo=Array.isArray;function Hr(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+zn(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function _i(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(D(91));return ke({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Cd(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(D(92));if(Oo(n)){if(1<n.length)throw Error(D(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:zn(n)}}function Bp(e,t){var n=zn(t.value),r=zn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function jd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ip(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ki(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ip(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Wl,zp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Wl=Wl||document.createElement("div"),Wl.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Wl.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function el(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var zo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},d0=["Webkit","ms","Moz","O"];Object.keys(zo).forEach(function(e){d0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),zo[t]=zo[e]})});function Fp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||zo.hasOwnProperty(e)&&zo[e]?(""+t).trim():t+"px"}function Up(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Fp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var p0=ke({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ti(e,t){if(t){if(p0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(D(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(D(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(D(61))}if(t.style!=null&&typeof t.style!="object")throw Error(D(62))}}function Li(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ei=null;function Pc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ni=null,Wr=null,Vr=null;function Sd(e){if(e=Sl(e)){if(typeof Ni!="function")throw Error(D(280));var t=e.stateNode;t&&(t=as(t),Ni(e.stateNode,e.type,t))}}function Hp(e){Wr?Vr?Vr.push(e):Vr=[e]:Wr=e}function Wp(){if(Wr){var e=Wr,t=Vr;if(Vr=Wr=null,Sd(e),t)for(e=0;e<t.length;e++)Sd(t[e])}}function Vp(e,t){return e(t)}function Zp(){}var Bs=!1;function Gp(e,t,n){if(Bs)return e(t,n);Bs=!0;try{return Vp(e,t,n)}finally{Bs=!1,(Wr!==null||Vr!==null)&&(Zp(),Wp())}}function tl(e,t){var n=e.stateNode;if(n===null)return null;var r=as(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(D(231,t,typeof n));return n}var Oi=!1;if(sn)try{var vo={};Object.defineProperty(vo,"passive",{get:function(){Oi=!0}}),window.addEventListener("test",vo,vo),window.removeEventListener("test",vo,vo)}catch{Oi=!1}function f0(e,t,n,r,l,a,s,i,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Fo=!1,Ta=null,La=!1,Ri=null,h0={onError:function(e){Fo=!0,Ta=e}};function m0(e,t,n,r,l,a,s,i,c){Fo=!1,Ta=null,f0.apply(h0,arguments)}function x0(e,t,n,r,l,a,s,i,c){if(m0.apply(this,arguments),Fo){if(Fo){var u=Ta;Fo=!1,Ta=null}else throw Error(D(198));La||(La=!0,Ri=u)}}function yr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Kp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function bd(e){if(yr(e)!==e)throw Error(D(188))}function g0(e){var t=e.alternate;if(!t){if(t=yr(e),t===null)throw Error(D(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var a=l.alternate;if(a===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===a.child){for(a=l.child;a;){if(a===n)return bd(l),e;if(a===r)return bd(l),t;a=a.sibling}throw Error(D(188))}if(n.return!==r.return)n=l,r=a;else{for(var s=!1,i=l.child;i;){if(i===n){s=!0,n=l,r=a;break}if(i===r){s=!0,r=l,n=a;break}i=i.sibling}if(!s){for(i=a.child;i;){if(i===n){s=!0,n=a,r=l;break}if(i===r){s=!0,r=a,n=l;break}i=i.sibling}if(!s)throw Error(D(189))}}if(n.alternate!==r)throw Error(D(190))}if(n.tag!==3)throw Error(D(188));return n.stateNode.current===n?e:t}function Yp(e){return e=g0(e),e!==null?Qp(e):null}function Qp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Qp(e);if(t!==null)return t;e=e.sibling}return null}var Xp=vt.unstable_scheduleCallback,wd=vt.unstable_cancelCallback,v0=vt.unstable_shouldYield,y0=vt.unstable_requestPaint,Me=vt.unstable_now,C0=vt.unstable_getCurrentPriorityLevel,Ac=vt.unstable_ImmediatePriority,qp=vt.unstable_UserBlockingPriority,Ea=vt.unstable_NormalPriority,j0=vt.unstable_LowPriority,Jp=vt.unstable_IdlePriority,ns=null,Gt=null;function S0(e){if(Gt&&typeof Gt.onCommitFiberRoot=="function")try{Gt.onCommitFiberRoot(ns,e,void 0,(e.current.flags&128)===128)}catch{}}var It=Math.clz32?Math.clz32:_0,b0=Math.log,w0=Math.LN2;function _0(e){return e>>>=0,e===0?32:31-(b0(e)/w0|0)|0}var Vl=64,Zl=4194304;function Ro(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Na(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,a=e.pingedLanes,s=n&268435455;if(s!==0){var i=s&~l;i!==0?r=Ro(i):(a&=s,a!==0&&(r=Ro(a)))}else s=n&~l,s!==0?r=Ro(s):a!==0&&(r=Ro(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,a=t&-t,l>=a||l===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-It(t),l=1<<n,r|=e[n],t&=~l;return r}function k0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function T0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,a=e.pendingLanes;0<a;){var s=31-It(a),i=1<<s,c=l[s];c===-1?(!(i&n)||i&r)&&(l[s]=k0(i,t)):c<=t&&(e.expiredLanes|=i),a&=~i}}function Mi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function e2(){var e=Vl;return Vl<<=1,!(Vl&4194240)&&(Vl=64),e}function Is(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Cl(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-It(t),e[t]=n}function L0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-It(n),a=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~a}}function $c(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-It(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var se=0;function t2(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var n2,Bc,r2,o2,l2,Di=!1,Gl=[],Rn=null,Mn=null,Dn=null,nl=new Map,rl=new Map,Tn=[],E0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _d(e,t){switch(e){case"focusin":case"focusout":Rn=null;break;case"dragenter":case"dragleave":Mn=null;break;case"mouseover":case"mouseout":Dn=null;break;case"pointerover":case"pointerout":nl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":rl.delete(t.pointerId)}}function yo(e,t,n,r,l,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[l]},t!==null&&(t=Sl(t),t!==null&&Bc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function N0(e,t,n,r,l){switch(t){case"focusin":return Rn=yo(Rn,e,t,n,r,l),!0;case"dragenter":return Mn=yo(Mn,e,t,n,r,l),!0;case"mouseover":return Dn=yo(Dn,e,t,n,r,l),!0;case"pointerover":var a=l.pointerId;return nl.set(a,yo(nl.get(a)||null,e,t,n,r,l)),!0;case"gotpointercapture":return a=l.pointerId,rl.set(a,yo(rl.get(a)||null,e,t,n,r,l)),!0}return!1}function a2(e){var t=lr(e.target);if(t!==null){var n=yr(t);if(n!==null){if(t=n.tag,t===13){if(t=Kp(n),t!==null){e.blockedOn=t,l2(e.priority,function(){r2(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function fa(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Pi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ei=r,n.target.dispatchEvent(r),Ei=null}else return t=Sl(n),t!==null&&Bc(t),e.blockedOn=n,!1;t.shift()}return!0}function kd(e,t,n){fa(e)&&n.delete(t)}function O0(){Di=!1,Rn!==null&&fa(Rn)&&(Rn=null),Mn!==null&&fa(Mn)&&(Mn=null),Dn!==null&&fa(Dn)&&(Dn=null),nl.forEach(kd),rl.forEach(kd)}function Co(e,t){e.blockedOn===t&&(e.blockedOn=null,Di||(Di=!0,vt.unstable_scheduleCallback(vt.unstable_NormalPriority,O0)))}function ol(e){function t(l){return Co(l,e)}if(0<Gl.length){Co(Gl[0],e);for(var n=1;n<Gl.length;n++){var r=Gl[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Rn!==null&&Co(Rn,e),Mn!==null&&Co(Mn,e),Dn!==null&&Co(Dn,e),nl.forEach(t),rl.forEach(t),n=0;n<Tn.length;n++)r=Tn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Tn.length&&(n=Tn[0],n.blockedOn===null);)a2(n),n.blockedOn===null&&Tn.shift()}var Zr=fn.ReactCurrentBatchConfig,Oa=!0;function R0(e,t,n,r){var l=se,a=Zr.transition;Zr.transition=null;try{se=1,Ic(e,t,n,r)}finally{se=l,Zr.transition=a}}function M0(e,t,n,r){var l=se,a=Zr.transition;Zr.transition=null;try{se=4,Ic(e,t,n,r)}finally{se=l,Zr.transition=a}}function Ic(e,t,n,r){if(Oa){var l=Pi(e,t,n,r);if(l===null)Ys(e,t,r,Ra,n),_d(e,r);else if(N0(l,e,t,n,r))r.stopPropagation();else if(_d(e,r),t&4&&-1<E0.indexOf(e)){for(;l!==null;){var a=Sl(l);if(a!==null&&n2(a),a=Pi(e,t,n,r),a===null&&Ys(e,t,r,Ra,n),a===l)break;l=a}l!==null&&r.stopPropagation()}else Ys(e,t,r,null,n)}}var Ra=null;function Pi(e,t,n,r){if(Ra=null,e=Pc(r),e=lr(e),e!==null)if(t=yr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Kp(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ra=e,null}function s2(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(C0()){case Ac:return 1;case qp:return 4;case Ea:case j0:return 16;case Jp:return 536870912;default:return 16}default:return 16}}var Nn=null,zc=null,ha=null;function i2(){if(ha)return ha;var e,t=zc,n=t.length,r,l="value"in Nn?Nn.value:Nn.textContent,a=l.length;for(e=0;e<n&&t[e]===l[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===l[a-r];r++);return ha=l.slice(e,1<r?1-r:void 0)}function ma(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Kl(){return!0}function Td(){return!1}function Ct(e){function t(n,r,l,a,s){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=a,this.target=s,this.currentTarget=null;for(var i in e)e.hasOwnProperty(i)&&(n=e[i],this[i]=n?n(a):a[i]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Kl:Td,this.isPropagationStopped=Td,this}return ke(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Kl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Kl)},persist:function(){},isPersistent:Kl}),t}var lo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fc=Ct(lo),jl=ke({},lo,{view:0,detail:0}),D0=Ct(jl),zs,Fs,jo,rs=ke({},jl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Uc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==jo&&(jo&&e.type==="mousemove"?(zs=e.screenX-jo.screenX,Fs=e.screenY-jo.screenY):Fs=zs=0,jo=e),zs)},movementY:function(e){return"movementY"in e?e.movementY:Fs}}),Ld=Ct(rs),P0=ke({},rs,{dataTransfer:0}),A0=Ct(P0),$0=ke({},jl,{relatedTarget:0}),Us=Ct($0),B0=ke({},lo,{animationName:0,elapsedTime:0,pseudoElement:0}),I0=Ct(B0),z0=ke({},lo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),F0=Ct(z0),U0=ke({},lo,{data:0}),Ed=Ct(U0),H0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},W0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},V0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Z0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=V0[e])?!!t[e]:!1}function Uc(){return Z0}var G0=ke({},jl,{key:function(e){if(e.key){var t=H0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ma(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?W0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Uc,charCode:function(e){return e.type==="keypress"?ma(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ma(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),K0=Ct(G0),Y0=ke({},rs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nd=Ct(Y0),Q0=ke({},jl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Uc}),X0=Ct(Q0),q0=ke({},lo,{propertyName:0,elapsedTime:0,pseudoElement:0}),J0=Ct(q0),e5=ke({},rs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),t5=Ct(e5),n5=[9,13,27,32],Hc=sn&&"CompositionEvent"in window,Uo=null;sn&&"documentMode"in document&&(Uo=document.documentMode);var r5=sn&&"TextEvent"in window&&!Uo,c2=sn&&(!Hc||Uo&&8<Uo&&11>=Uo),Od=String.fromCharCode(32),Rd=!1;function u2(e,t){switch(e){case"keyup":return n5.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function d2(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Or=!1;function o5(e,t){switch(e){case"compositionend":return d2(t);case"keypress":return t.which!==32?null:(Rd=!0,Od);case"textInput":return e=t.data,e===Od&&Rd?null:e;default:return null}}function l5(e,t){if(Or)return e==="compositionend"||!Hc&&u2(e,t)?(e=i2(),ha=zc=Nn=null,Or=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return c2&&t.locale!=="ko"?null:t.data;default:return null}}var a5={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Md(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!a5[e.type]:t==="textarea"}function p2(e,t,n,r){Hp(r),t=Ma(t,"onChange"),0<t.length&&(n=new Fc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ho=null,ll=null;function s5(e){b2(e,0)}function os(e){var t=Dr(e);if(Ap(t))return e}function i5(e,t){if(e==="change")return t}var f2=!1;if(sn){var Hs;if(sn){var Ws="oninput"in document;if(!Ws){var Dd=document.createElement("div");Dd.setAttribute("oninput","return;"),Ws=typeof Dd.oninput=="function"}Hs=Ws}else Hs=!1;f2=Hs&&(!document.documentMode||9<document.documentMode)}function Pd(){Ho&&(Ho.detachEvent("onpropertychange",h2),ll=Ho=null)}function h2(e){if(e.propertyName==="value"&&os(ll)){var t=[];p2(t,ll,e,Pc(e)),Gp(s5,t)}}function c5(e,t,n){e==="focusin"?(Pd(),Ho=t,ll=n,Ho.attachEvent("onpropertychange",h2)):e==="focusout"&&Pd()}function u5(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return os(ll)}function d5(e,t){if(e==="click")return os(t)}function p5(e,t){if(e==="input"||e==="change")return os(t)}function f5(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ft=typeof Object.is=="function"?Object.is:f5;function al(e,t){if(Ft(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!gi.call(t,l)||!Ft(e[l],t[l]))return!1}return!0}function Ad(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function $d(e,t){var n=Ad(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ad(n)}}function m2(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?m2(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function x2(){for(var e=window,t=ka();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ka(e.document)}return t}function Wc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function h5(e){var t=x2(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&m2(n.ownerDocument.documentElement,n)){if(r!==null&&Wc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,a=Math.min(r.start,l);r=r.end===void 0?a:Math.min(r.end,l),!e.extend&&a>r&&(l=r,r=a,a=l),l=$d(n,a);var s=$d(n,r);l&&s&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var m5=sn&&"documentMode"in document&&11>=document.documentMode,Rr=null,Ai=null,Wo=null,$i=!1;function Bd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;$i||Rr==null||Rr!==ka(r)||(r=Rr,"selectionStart"in r&&Wc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Wo&&al(Wo,r)||(Wo=r,r=Ma(Ai,"onSelect"),0<r.length&&(t=new Fc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Rr)))}function Yl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Mr={animationend:Yl("Animation","AnimationEnd"),animationiteration:Yl("Animation","AnimationIteration"),animationstart:Yl("Animation","AnimationStart"),transitionend:Yl("Transition","TransitionEnd")},Vs={},g2={};sn&&(g2=document.createElement("div").style,"AnimationEvent"in window||(delete Mr.animationend.animation,delete Mr.animationiteration.animation,delete Mr.animationstart.animation),"TransitionEvent"in window||delete Mr.transitionend.transition);function ls(e){if(Vs[e])return Vs[e];if(!Mr[e])return e;var t=Mr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in g2)return Vs[e]=t[n];return e}var v2=ls("animationend"),y2=ls("animationiteration"),C2=ls("animationstart"),j2=ls("transitionend"),S2=new Map,Id="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vn(e,t){S2.set(e,t),vr(t,[e])}for(var Zs=0;Zs<Id.length;Zs++){var Gs=Id[Zs],x5=Gs.toLowerCase(),g5=Gs[0].toUpperCase()+Gs.slice(1);Vn(x5,"on"+g5)}Vn(v2,"onAnimationEnd");Vn(y2,"onAnimationIteration");Vn(C2,"onAnimationStart");Vn("dblclick","onDoubleClick");Vn("focusin","onFocus");Vn("focusout","onBlur");Vn(j2,"onTransitionEnd");Qr("onMouseEnter",["mouseout","mouseover"]);Qr("onMouseLeave",["mouseout","mouseover"]);Qr("onPointerEnter",["pointerout","pointerover"]);Qr("onPointerLeave",["pointerout","pointerover"]);vr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));vr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));vr("onBeforeInput",["compositionend","keypress","textInput","paste"]);vr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));vr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));vr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),v5=new Set("cancel close invalid load scroll toggle".split(" ").concat(Mo));function zd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,x0(r,t,void 0,e),e.currentTarget=null}function b2(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var s=r.length-1;0<=s;s--){var i=r[s],c=i.instance,u=i.currentTarget;if(i=i.listener,c!==a&&l.isPropagationStopped())break e;zd(l,i,u),a=c}else for(s=0;s<r.length;s++){if(i=r[s],c=i.instance,u=i.currentTarget,i=i.listener,c!==a&&l.isPropagationStopped())break e;zd(l,i,u),a=c}}}if(La)throw e=Ri,La=!1,Ri=null,e}function me(e,t){var n=t[Ui];n===void 0&&(n=t[Ui]=new Set);var r=e+"__bubble";n.has(r)||(w2(t,e,2,!1),n.add(r))}function Ks(e,t,n){var r=0;t&&(r|=4),w2(n,e,r,t)}var Ql="_reactListening"+Math.random().toString(36).slice(2);function sl(e){if(!e[Ql]){e[Ql]=!0,Op.forEach(function(n){n!=="selectionchange"&&(v5.has(n)||Ks(n,!1,e),Ks(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ql]||(t[Ql]=!0,Ks("selectionchange",!1,t))}}function w2(e,t,n,r){switch(s2(t)){case 1:var l=R0;break;case 4:l=M0;break;default:l=Ic}n=l.bind(null,t,n,e),l=void 0,!Oi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Ys(e,t,n,r,l){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var i=r.stateNode.containerInfo;if(i===l||i.nodeType===8&&i.parentNode===l)break;if(s===4)for(s=r.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===l||c.nodeType===8&&c.parentNode===l))return;s=s.return}for(;i!==null;){if(s=lr(i),s===null)return;if(c=s.tag,c===5||c===6){r=a=s;continue e}i=i.parentNode}}r=r.return}Gp(function(){var u=a,d=Pc(n),x=[];e:{var m=S2.get(e);if(m!==void 0){var j=Fc,y=e;switch(e){case"keypress":if(ma(n)===0)break e;case"keydown":case"keyup":j=K0;break;case"focusin":y="focus",j=Us;break;case"focusout":y="blur",j=Us;break;case"beforeblur":case"afterblur":j=Us;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=Ld;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=A0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=X0;break;case v2:case y2:case C2:j=I0;break;case j2:j=J0;break;case"scroll":j=D0;break;case"wheel":j=t5;break;case"copy":case"cut":case"paste":j=F0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=Nd}var S=(t&4)!==0,E=!S&&e==="scroll",g=S?m!==null?m+"Capture":null:m;S=[];for(var p=u,h;p!==null;){h=p;var f=h.stateNode;if(h.tag===5&&f!==null&&(h=f,g!==null&&(f=tl(p,g),f!=null&&S.push(il(p,f,h)))),E)break;p=p.return}0<S.length&&(m=new j(m,y,null,n,d),x.push({event:m,listeners:S}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",j=e==="mouseout"||e==="pointerout",m&&n!==Ei&&(y=n.relatedTarget||n.fromElement)&&(lr(y)||y[cn]))break e;if((j||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,j?(y=n.relatedTarget||n.toElement,j=u,y=y?lr(y):null,y!==null&&(E=yr(y),y!==E||y.tag!==5&&y.tag!==6)&&(y=null)):(j=null,y=u),j!==y)){if(S=Ld,f="onMouseLeave",g="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(S=Nd,f="onPointerLeave",g="onPointerEnter",p="pointer"),E=j==null?m:Dr(j),h=y==null?m:Dr(y),m=new S(f,p+"leave",j,n,d),m.target=E,m.relatedTarget=h,f=null,lr(d)===u&&(S=new S(g,p+"enter",y,n,d),S.target=h,S.relatedTarget=E,f=S),E=f,j&&y)t:{for(S=j,g=y,p=0,h=S;h;h=kr(h))p++;for(h=0,f=g;f;f=kr(f))h++;for(;0<p-h;)S=kr(S),p--;for(;0<h-p;)g=kr(g),h--;for(;p--;){if(S===g||g!==null&&S===g.alternate)break t;S=kr(S),g=kr(g)}S=null}else S=null;j!==null&&Fd(x,m,j,S,!1),y!==null&&E!==null&&Fd(x,E,y,S,!0)}}e:{if(m=u?Dr(u):window,j=m.nodeName&&m.nodeName.toLowerCase(),j==="select"||j==="input"&&m.type==="file")var v=i5;else if(Md(m))if(f2)v=p5;else{v=u5;var C=c5}else(j=m.nodeName)&&j.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(v=d5);if(v&&(v=v(e,u))){p2(x,v,n,d);break e}C&&C(e,m,u),e==="focusout"&&(C=m._wrapperState)&&C.controlled&&m.type==="number"&&wi(m,"number",m.value)}switch(C=u?Dr(u):window,e){case"focusin":(Md(C)||C.contentEditable==="true")&&(Rr=C,Ai=u,Wo=null);break;case"focusout":Wo=Ai=Rr=null;break;case"mousedown":$i=!0;break;case"contextmenu":case"mouseup":case"dragend":$i=!1,Bd(x,n,d);break;case"selectionchange":if(m5)break;case"keydown":case"keyup":Bd(x,n,d)}var b;if(Hc)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Or?u2(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(c2&&n.locale!=="ko"&&(Or||T!=="onCompositionStart"?T==="onCompositionEnd"&&Or&&(b=i2()):(Nn=d,zc="value"in Nn?Nn.value:Nn.textContent,Or=!0)),C=Ma(u,T),0<C.length&&(T=new Ed(T,e,null,n,d),x.push({event:T,listeners:C}),b?T.data=b:(b=d2(n),b!==null&&(T.data=b)))),(b=r5?o5(e,n):l5(e,n))&&(u=Ma(u,"onBeforeInput"),0<u.length&&(d=new Ed("onBeforeInput","beforeinput",null,n,d),x.push({event:d,listeners:u}),d.data=b))}b2(x,t)})}function il(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ma(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,a=l.stateNode;l.tag===5&&a!==null&&(l=a,a=tl(e,n),a!=null&&r.unshift(il(e,a,l)),a=tl(e,t),a!=null&&r.push(il(e,a,l))),e=e.return}return r}function kr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Fd(e,t,n,r,l){for(var a=t._reactName,s=[];n!==null&&n!==r;){var i=n,c=i.alternate,u=i.stateNode;if(c!==null&&c===r)break;i.tag===5&&u!==null&&(i=u,l?(c=tl(n,a),c!=null&&s.unshift(il(n,c,i))):l||(c=tl(n,a),c!=null&&s.push(il(n,c,i)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var y5=/\r\n?/g,C5=/\u0000|\uFFFD/g;function Ud(e){return(typeof e=="string"?e:""+e).replace(y5,`
`).replace(C5,"")}function Xl(e,t,n){if(t=Ud(t),Ud(e)!==t&&n)throw Error(D(425))}function Da(){}var Bi=null,Ii=null;function zi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Fi=typeof setTimeout=="function"?setTimeout:void 0,j5=typeof clearTimeout=="function"?clearTimeout:void 0,Hd=typeof Promise=="function"?Promise:void 0,S5=typeof queueMicrotask=="function"?queueMicrotask:typeof Hd<"u"?function(e){return Hd.resolve(null).then(e).catch(b5)}:Fi;function b5(e){setTimeout(function(){throw e})}function Qs(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),ol(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);ol(t)}function Pn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Wd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ao=Math.random().toString(36).slice(2),Zt="__reactFiber$"+ao,cl="__reactProps$"+ao,cn="__reactContainer$"+ao,Ui="__reactEvents$"+ao,w5="__reactListeners$"+ao,_5="__reactHandles$"+ao;function lr(e){var t=e[Zt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[cn]||n[Zt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Wd(e);e!==null;){if(n=e[Zt])return n;e=Wd(e)}return t}e=n,n=e.parentNode}return null}function Sl(e){return e=e[Zt]||e[cn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Dr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(D(33))}function as(e){return e[cl]||null}var Hi=[],Pr=-1;function Zn(e){return{current:e}}function xe(e){0>Pr||(e.current=Hi[Pr],Hi[Pr]=null,Pr--)}function fe(e,t){Pr++,Hi[Pr]=e.current,e.current=t}var Fn={},Je=Zn(Fn),dt=Zn(!1),dr=Fn;function Xr(e,t){var n=e.type.contextTypes;if(!n)return Fn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},a;for(a in n)l[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function pt(e){return e=e.childContextTypes,e!=null}function Pa(){xe(dt),xe(Je)}function Vd(e,t,n){if(Je.current!==Fn)throw Error(D(168));fe(Je,t),fe(dt,n)}function _2(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(D(108,c0(e)||"Unknown",l));return ke({},n,r)}function Aa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Fn,dr=Je.current,fe(Je,e),fe(dt,dt.current),!0}function Zd(e,t,n){var r=e.stateNode;if(!r)throw Error(D(169));n?(e=_2(e,t,dr),r.__reactInternalMemoizedMergedChildContext=e,xe(dt),xe(Je),fe(Je,e)):xe(dt),fe(dt,n)}var nn=null,ss=!1,Xs=!1;function k2(e){nn===null?nn=[e]:nn.push(e)}function k5(e){ss=!0,k2(e)}function Gn(){if(!Xs&&nn!==null){Xs=!0;var e=0,t=se;try{var n=nn;for(se=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}nn=null,ss=!1}catch(l){throw nn!==null&&(nn=nn.slice(e+1)),Xp(Ac,Gn),l}finally{se=t,Xs=!1}}return null}var Ar=[],$r=0,$a=null,Ba=0,bt=[],wt=0,pr=null,rn=1,on="";function rr(e,t){Ar[$r++]=Ba,Ar[$r++]=$a,$a=e,Ba=t}function T2(e,t,n){bt[wt++]=rn,bt[wt++]=on,bt[wt++]=pr,pr=e;var r=rn;e=on;var l=32-It(r)-1;r&=~(1<<l),n+=1;var a=32-It(t)+l;if(30<a){var s=l-l%5;a=(r&(1<<s)-1).toString(32),r>>=s,l-=s,rn=1<<32-It(t)+l|n<<l|r,on=a+e}else rn=1<<a|n<<l|r,on=e}function Vc(e){e.return!==null&&(rr(e,1),T2(e,1,0))}function Zc(e){for(;e===$a;)$a=Ar[--$r],Ar[$r]=null,Ba=Ar[--$r],Ar[$r]=null;for(;e===pr;)pr=bt[--wt],bt[wt]=null,on=bt[--wt],bt[wt]=null,rn=bt[--wt],bt[wt]=null}var gt=null,xt=null,ve=!1,Bt=null;function L2(e,t){var n=_t(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Gd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,gt=e,xt=Pn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,gt=e,xt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=pr!==null?{id:rn,overflow:on}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=_t(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,gt=e,xt=null,!0):!1;default:return!1}}function Wi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Vi(e){if(ve){var t=xt;if(t){var n=t;if(!Gd(e,t)){if(Wi(e))throw Error(D(418));t=Pn(n.nextSibling);var r=gt;t&&Gd(e,t)?L2(r,n):(e.flags=e.flags&-4097|2,ve=!1,gt=e)}}else{if(Wi(e))throw Error(D(418));e.flags=e.flags&-4097|2,ve=!1,gt=e}}}function Kd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;gt=e}function ql(e){if(e!==gt)return!1;if(!ve)return Kd(e),ve=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!zi(e.type,e.memoizedProps)),t&&(t=xt)){if(Wi(e))throw E2(),Error(D(418));for(;t;)L2(e,t),t=Pn(t.nextSibling)}if(Kd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(D(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){xt=Pn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}xt=null}}else xt=gt?Pn(e.stateNode.nextSibling):null;return!0}function E2(){for(var e=xt;e;)e=Pn(e.nextSibling)}function qr(){xt=gt=null,ve=!1}function Gc(e){Bt===null?Bt=[e]:Bt.push(e)}var T5=fn.ReactCurrentBatchConfig;function Pt(e,t){if(e&&e.defaultProps){t=ke({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Ia=Zn(null),za=null,Br=null,Kc=null;function Yc(){Kc=Br=za=null}function Qc(e){var t=Ia.current;xe(Ia),e._currentValue=t}function Zi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Gr(e,t){za=e,Kc=Br=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ut=!0),e.firstContext=null)}function Lt(e){var t=e._currentValue;if(Kc!==e)if(e={context:e,memoizedValue:t,next:null},Br===null){if(za===null)throw Error(D(308));Br=e,za.dependencies={lanes:0,firstContext:e}}else Br=Br.next=e;return t}var ar=null;function Xc(e){ar===null?ar=[e]:ar.push(e)}function N2(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,Xc(t)):(n.next=l.next,l.next=n),t.interleaved=n,un(e,r)}function un(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var _n=!1;function qc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function O2(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ln(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function An(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,re&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,un(e,n)}return l=r.interleaved,l===null?(t.next=t,Xc(r)):(t.next=l.next,l.next=t),r.interleaved=t,un(e,n)}function xa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,$c(e,n)}}function Yd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?l=a=s:a=a.next=s,n=n.next}while(n!==null);a===null?l=a=t:a=a.next=t}else l=a=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Fa(e,t,n,r){var l=e.updateQueue;_n=!1;var a=l.firstBaseUpdate,s=l.lastBaseUpdate,i=l.shared.pending;if(i!==null){l.shared.pending=null;var c=i,u=c.next;c.next=null,s===null?a=u:s.next=u,s=c;var d=e.alternate;d!==null&&(d=d.updateQueue,i=d.lastBaseUpdate,i!==s&&(i===null?d.firstBaseUpdate=u:i.next=u,d.lastBaseUpdate=c))}if(a!==null){var x=l.baseState;s=0,d=u=c=null,i=a;do{var m=i.lane,j=i.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:j,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null});e:{var y=e,S=i;switch(m=t,j=n,S.tag){case 1:if(y=S.payload,typeof y=="function"){x=y.call(j,x,m);break e}x=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=S.payload,m=typeof y=="function"?y.call(j,x,m):y,m==null)break e;x=ke({},x,m);break e;case 2:_n=!0}}i.callback!==null&&i.lane!==0&&(e.flags|=64,m=l.effects,m===null?l.effects=[i]:m.push(i))}else j={eventTime:j,lane:m,tag:i.tag,payload:i.payload,callback:i.callback,next:null},d===null?(u=d=j,c=x):d=d.next=j,s|=m;if(i=i.next,i===null){if(i=l.shared.pending,i===null)break;m=i,i=m.next,m.next=null,l.lastBaseUpdate=m,l.shared.pending=null}}while(1);if(d===null&&(c=x),l.baseState=c,l.firstBaseUpdate=u,l.lastBaseUpdate=d,t=l.shared.interleaved,t!==null){l=t;do s|=l.lane,l=l.next;while(l!==t)}else a===null&&(l.shared.lanes=0);hr|=s,e.lanes=s,e.memoizedState=x}}function Qd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(D(191,l));l.call(r)}}}var R2=new Np.Component().refs;function Gi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ke({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var is={isMounted:function(e){return(e=e._reactInternals)?yr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ot(),l=Bn(e),a=ln(r,l);a.payload=t,n!=null&&(a.callback=n),t=An(e,a,l),t!==null&&(zt(t,e,l,r),xa(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ot(),l=Bn(e),a=ln(r,l);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=An(e,a,l),t!==null&&(zt(t,e,l,r),xa(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ot(),r=Bn(e),l=ln(n,r);l.tag=2,t!=null&&(l.callback=t),t=An(e,l,r),t!==null&&(zt(t,e,r,n),xa(t,e,r))}};function Xd(e,t,n,r,l,a,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,s):t.prototype&&t.prototype.isPureReactComponent?!al(n,r)||!al(l,a):!0}function M2(e,t,n){var r=!1,l=Fn,a=t.contextType;return typeof a=="object"&&a!==null?a=Lt(a):(l=pt(t)?dr:Je.current,r=t.contextTypes,a=(r=r!=null)?Xr(e,l):Fn),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=is,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=a),t}function qd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&is.enqueueReplaceState(t,t.state,null)}function Ki(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs=R2,qc(e);var a=t.contextType;typeof a=="object"&&a!==null?l.context=Lt(a):(a=pt(t)?dr:Je.current,l.context=Xr(e,a)),l.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Gi(e,t,a,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&is.enqueueReplaceState(l,l.state,null),Fa(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function So(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(D(309));var r=n.stateNode}if(!r)throw Error(D(147,e));var l=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(s){var i=l.refs;i===R2&&(i=l.refs={}),s===null?delete i[a]:i[a]=s},t._stringRef=a,t)}if(typeof e!="string")throw Error(D(284));if(!n._owner)throw Error(D(290,e))}return e}function Jl(e,t){throw e=Object.prototype.toString.call(t),Error(D(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Jd(e){var t=e._init;return t(e._payload)}function D2(e){function t(g,p){if(e){var h=g.deletions;h===null?(g.deletions=[p],g.flags|=16):h.push(p)}}function n(g,p){if(!e)return null;for(;p!==null;)t(g,p),p=p.sibling;return null}function r(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function l(g,p){return g=In(g,p),g.index=0,g.sibling=null,g}function a(g,p,h){return g.index=h,e?(h=g.alternate,h!==null?(h=h.index,h<p?(g.flags|=2,p):h):(g.flags|=2,p)):(g.flags|=1048576,p)}function s(g){return e&&g.alternate===null&&(g.flags|=2),g}function i(g,p,h,f){return p===null||p.tag!==6?(p=oi(h,g.mode,f),p.return=g,p):(p=l(p,h),p.return=g,p)}function c(g,p,h,f){var v=h.type;return v===Nr?d(g,p,h.props.children,f,h.key):p!==null&&(p.elementType===v||typeof v=="object"&&v!==null&&v.$$typeof===wn&&Jd(v)===p.type)?(f=l(p,h.props),f.ref=So(g,p,h),f.return=g,f):(f=Sa(h.type,h.key,h.props,null,g.mode,f),f.ref=So(g,p,h),f.return=g,f)}function u(g,p,h,f){return p===null||p.tag!==4||p.stateNode.containerInfo!==h.containerInfo||p.stateNode.implementation!==h.implementation?(p=li(h,g.mode,f),p.return=g,p):(p=l(p,h.children||[]),p.return=g,p)}function d(g,p,h,f,v){return p===null||p.tag!==7?(p=ur(h,g.mode,f,v),p.return=g,p):(p=l(p,h),p.return=g,p)}function x(g,p,h){if(typeof p=="string"&&p!==""||typeof p=="number")return p=oi(""+p,g.mode,h),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Ul:return h=Sa(p.type,p.key,p.props,null,g.mode,h),h.ref=So(g,null,p),h.return=g,h;case Er:return p=li(p,g.mode,h),p.return=g,p;case wn:var f=p._init;return x(g,f(p._payload),h)}if(Oo(p)||go(p))return p=ur(p,g.mode,h,null),p.return=g,p;Jl(g,p)}return null}function m(g,p,h,f){var v=p!==null?p.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return v!==null?null:i(g,p,""+h,f);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Ul:return h.key===v?c(g,p,h,f):null;case Er:return h.key===v?u(g,p,h,f):null;case wn:return v=h._init,m(g,p,v(h._payload),f)}if(Oo(h)||go(h))return v!==null?null:d(g,p,h,f,null);Jl(g,h)}return null}function j(g,p,h,f,v){if(typeof f=="string"&&f!==""||typeof f=="number")return g=g.get(h)||null,i(p,g,""+f,v);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ul:return g=g.get(f.key===null?h:f.key)||null,c(p,g,f,v);case Er:return g=g.get(f.key===null?h:f.key)||null,u(p,g,f,v);case wn:var C=f._init;return j(g,p,h,C(f._payload),v)}if(Oo(f)||go(f))return g=g.get(h)||null,d(p,g,f,v,null);Jl(p,f)}return null}function y(g,p,h,f){for(var v=null,C=null,b=p,T=p=0,L=null;b!==null&&T<h.length;T++){b.index>T?(L=b,b=null):L=b.sibling;var P=m(g,b,h[T],f);if(P===null){b===null&&(b=L);break}e&&b&&P.alternate===null&&t(g,b),p=a(P,p,T),C===null?v=P:C.sibling=P,C=P,b=L}if(T===h.length)return n(g,b),ve&&rr(g,T),v;if(b===null){for(;T<h.length;T++)b=x(g,h[T],f),b!==null&&(p=a(b,p,T),C===null?v=b:C.sibling=b,C=b);return ve&&rr(g,T),v}for(b=r(g,b);T<h.length;T++)L=j(b,g,T,h[T],f),L!==null&&(e&&L.alternate!==null&&b.delete(L.key===null?T:L.key),p=a(L,p,T),C===null?v=L:C.sibling=L,C=L);return e&&b.forEach(function(U){return t(g,U)}),ve&&rr(g,T),v}function S(g,p,h,f){var v=go(h);if(typeof v!="function")throw Error(D(150));if(h=v.call(h),h==null)throw Error(D(151));for(var C=v=null,b=p,T=p=0,L=null,P=h.next();b!==null&&!P.done;T++,P=h.next()){b.index>T?(L=b,b=null):L=b.sibling;var U=m(g,b,P.value,f);if(U===null){b===null&&(b=L);break}e&&b&&U.alternate===null&&t(g,b),p=a(U,p,T),C===null?v=U:C.sibling=U,C=U,b=L}if(P.done)return n(g,b),ve&&rr(g,T),v;if(b===null){for(;!P.done;T++,P=h.next())P=x(g,P.value,f),P!==null&&(p=a(P,p,T),C===null?v=P:C.sibling=P,C=P);return ve&&rr(g,T),v}for(b=r(g,b);!P.done;T++,P=h.next())P=j(b,g,T,P.value,f),P!==null&&(e&&P.alternate!==null&&b.delete(P.key===null?T:P.key),p=a(P,p,T),C===null?v=P:C.sibling=P,C=P);return e&&b.forEach(function(X){return t(g,X)}),ve&&rr(g,T),v}function E(g,p,h,f){if(typeof h=="object"&&h!==null&&h.type===Nr&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Ul:e:{for(var v=h.key,C=p;C!==null;){if(C.key===v){if(v=h.type,v===Nr){if(C.tag===7){n(g,C.sibling),p=l(C,h.props.children),p.return=g,g=p;break e}}else if(C.elementType===v||typeof v=="object"&&v!==null&&v.$$typeof===wn&&Jd(v)===C.type){n(g,C.sibling),p=l(C,h.props),p.ref=So(g,C,h),p.return=g,g=p;break e}n(g,C);break}else t(g,C);C=C.sibling}h.type===Nr?(p=ur(h.props.children,g.mode,f,h.key),p.return=g,g=p):(f=Sa(h.type,h.key,h.props,null,g.mode,f),f.ref=So(g,p,h),f.return=g,g=f)}return s(g);case Er:e:{for(C=h.key;p!==null;){if(p.key===C)if(p.tag===4&&p.stateNode.containerInfo===h.containerInfo&&p.stateNode.implementation===h.implementation){n(g,p.sibling),p=l(p,h.children||[]),p.return=g,g=p;break e}else{n(g,p);break}else t(g,p);p=p.sibling}p=li(h,g.mode,f),p.return=g,g=p}return s(g);case wn:return C=h._init,E(g,p,C(h._payload),f)}if(Oo(h))return y(g,p,h,f);if(go(h))return S(g,p,h,f);Jl(g,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,p!==null&&p.tag===6?(n(g,p.sibling),p=l(p,h),p.return=g,g=p):(n(g,p),p=oi(h,g.mode,f),p.return=g,g=p),s(g)):n(g,p)}return E}var Jr=D2(!0),P2=D2(!1),bl={},Kt=Zn(bl),ul=Zn(bl),dl=Zn(bl);function sr(e){if(e===bl)throw Error(D(174));return e}function Jc(e,t){switch(fe(dl,t),fe(ul,e),fe(Kt,bl),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ki(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ki(t,e)}xe(Kt),fe(Kt,t)}function eo(){xe(Kt),xe(ul),xe(dl)}function A2(e){sr(dl.current);var t=sr(Kt.current),n=ki(t,e.type);t!==n&&(fe(ul,e),fe(Kt,n))}function eu(e){ul.current===e&&(xe(Kt),xe(ul))}var be=Zn(0);function Ua(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var qs=[];function tu(){for(var e=0;e<qs.length;e++)qs[e]._workInProgressVersionPrimary=null;qs.length=0}var ga=fn.ReactCurrentDispatcher,Js=fn.ReactCurrentBatchConfig,fr=0,_e=null,Ie=null,Ue=null,Ha=!1,Vo=!1,pl=0,L5=0;function Qe(){throw Error(D(321))}function nu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ft(e[n],t[n]))return!1;return!0}function ru(e,t,n,r,l,a){if(fr=a,_e=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ga.current=e===null||e.memoizedState===null?R5:M5,e=n(r,l),Vo){a=0;do{if(Vo=!1,pl=0,25<=a)throw Error(D(301));a+=1,Ue=Ie=null,t.updateQueue=null,ga.current=D5,e=n(r,l)}while(Vo)}if(ga.current=Wa,t=Ie!==null&&Ie.next!==null,fr=0,Ue=Ie=_e=null,Ha=!1,t)throw Error(D(300));return e}function ou(){var e=pl!==0;return pl=0,e}function Ht(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?_e.memoizedState=Ue=e:Ue=Ue.next=e,Ue}function Et(){if(Ie===null){var e=_e.alternate;e=e!==null?e.memoizedState:null}else e=Ie.next;var t=Ue===null?_e.memoizedState:Ue.next;if(t!==null)Ue=t,Ie=e;else{if(e===null)throw Error(D(310));Ie=e,e={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},Ue===null?_e.memoizedState=Ue=e:Ue=Ue.next=e}return Ue}function fl(e,t){return typeof t=="function"?t(e):t}function ei(e){var t=Et(),n=t.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=e;var r=Ie,l=r.baseQueue,a=n.pending;if(a!==null){if(l!==null){var s=l.next;l.next=a.next,a.next=s}r.baseQueue=l=a,n.pending=null}if(l!==null){a=l.next,r=r.baseState;var i=s=null,c=null,u=a;do{var d=u.lane;if((fr&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var x={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(i=c=x,s=r):c=c.next=x,_e.lanes|=d,hr|=d}u=u.next}while(u!==null&&u!==a);c===null?s=r:c.next=i,Ft(r,t.memoizedState)||(ut=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do a=l.lane,_e.lanes|=a,hr|=a,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ti(e){var t=Et(),n=t.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,a=t.memoizedState;if(l!==null){n.pending=null;var s=l=l.next;do a=e(a,s.action),s=s.next;while(s!==l);Ft(a,t.memoizedState)||(ut=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function $2(){}function B2(e,t){var n=_e,r=Et(),l=t(),a=!Ft(r.memoizedState,l);if(a&&(r.memoizedState=l,ut=!0),r=r.queue,lu(F2.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||Ue!==null&&Ue.memoizedState.tag&1){if(n.flags|=2048,hl(9,z2.bind(null,n,r,l,t),void 0,null),He===null)throw Error(D(349));fr&30||I2(n,t,l)}return l}function I2(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=_e.updateQueue,t===null?(t={lastEffect:null,stores:null},_e.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function z2(e,t,n,r){t.value=n,t.getSnapshot=r,U2(t)&&H2(e)}function F2(e,t,n){return n(function(){U2(t)&&H2(e)})}function U2(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ft(e,n)}catch{return!0}}function H2(e){var t=un(e,1);t!==null&&zt(t,e,1,-1)}function e1(e){var t=Ht();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fl,lastRenderedState:e},t.queue=e,e=e.dispatch=O5.bind(null,_e,e),[t.memoizedState,e]}function hl(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=_e.updateQueue,t===null?(t={lastEffect:null,stores:null},_e.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function W2(){return Et().memoizedState}function va(e,t,n,r){var l=Ht();_e.flags|=e,l.memoizedState=hl(1|t,n,void 0,r===void 0?null:r)}function cs(e,t,n,r){var l=Et();r=r===void 0?null:r;var a=void 0;if(Ie!==null){var s=Ie.memoizedState;if(a=s.destroy,r!==null&&nu(r,s.deps)){l.memoizedState=hl(t,n,a,r);return}}_e.flags|=e,l.memoizedState=hl(1|t,n,a,r)}function t1(e,t){return va(8390656,8,e,t)}function lu(e,t){return cs(2048,8,e,t)}function V2(e,t){return cs(4,2,e,t)}function Z2(e,t){return cs(4,4,e,t)}function G2(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function K2(e,t,n){return n=n!=null?n.concat([e]):null,cs(4,4,G2.bind(null,t,e),n)}function au(){}function Y2(e,t){var n=Et();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&nu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Q2(e,t){var n=Et();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&nu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function X2(e,t,n){return fr&21?(Ft(n,t)||(n=e2(),_e.lanes|=n,hr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ut=!0),e.memoizedState=n)}function E5(e,t){var n=se;se=n!==0&&4>n?n:4,e(!0);var r=Js.transition;Js.transition={};try{e(!1),t()}finally{se=n,Js.transition=r}}function q2(){return Et().memoizedState}function N5(e,t,n){var r=Bn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},J2(e))ef(t,n);else if(n=N2(e,t,n,r),n!==null){var l=ot();zt(n,e,r,l),tf(n,t,r)}}function O5(e,t,n){var r=Bn(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(J2(e))ef(t,l);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var s=t.lastRenderedState,i=a(s,n);if(l.hasEagerState=!0,l.eagerState=i,Ft(i,s)){var c=t.interleaved;c===null?(l.next=l,Xc(t)):(l.next=c.next,c.next=l),t.interleaved=l;return}}catch{}finally{}n=N2(e,t,l,r),n!==null&&(l=ot(),zt(n,e,r,l),tf(n,t,r))}}function J2(e){var t=e.alternate;return e===_e||t!==null&&t===_e}function ef(e,t){Vo=Ha=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function tf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,$c(e,n)}}var Wa={readContext:Lt,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useInsertionEffect:Qe,useLayoutEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useMutableSource:Qe,useSyncExternalStore:Qe,useId:Qe,unstable_isNewReconciler:!1},R5={readContext:Lt,useCallback:function(e,t){return Ht().memoizedState=[e,t===void 0?null:t],e},useContext:Lt,useEffect:t1,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,va(4194308,4,G2.bind(null,t,e),n)},useLayoutEffect:function(e,t){return va(4194308,4,e,t)},useInsertionEffect:function(e,t){return va(4,2,e,t)},useMemo:function(e,t){var n=Ht();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ht();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=N5.bind(null,_e,e),[r.memoizedState,e]},useRef:function(e){var t=Ht();return e={current:e},t.memoizedState=e},useState:e1,useDebugValue:au,useDeferredValue:function(e){return Ht().memoizedState=e},useTransition:function(){var e=e1(!1),t=e[0];return e=E5.bind(null,e[1]),Ht().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=_e,l=Ht();if(ve){if(n===void 0)throw Error(D(407));n=n()}else{if(n=t(),He===null)throw Error(D(349));fr&30||I2(r,t,n)}l.memoizedState=n;var a={value:n,getSnapshot:t};return l.queue=a,t1(F2.bind(null,r,a,e),[e]),r.flags|=2048,hl(9,z2.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=Ht(),t=He.identifierPrefix;if(ve){var n=on,r=rn;n=(r&~(1<<32-It(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=pl++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=L5++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},M5={readContext:Lt,useCallback:Y2,useContext:Lt,useEffect:lu,useImperativeHandle:K2,useInsertionEffect:V2,useLayoutEffect:Z2,useMemo:Q2,useReducer:ei,useRef:W2,useState:function(){return ei(fl)},useDebugValue:au,useDeferredValue:function(e){var t=Et();return X2(t,Ie.memoizedState,e)},useTransition:function(){var e=ei(fl)[0],t=Et().memoizedState;return[e,t]},useMutableSource:$2,useSyncExternalStore:B2,useId:q2,unstable_isNewReconciler:!1},D5={readContext:Lt,useCallback:Y2,useContext:Lt,useEffect:lu,useImperativeHandle:K2,useInsertionEffect:V2,useLayoutEffect:Z2,useMemo:Q2,useReducer:ti,useRef:W2,useState:function(){return ti(fl)},useDebugValue:au,useDeferredValue:function(e){var t=Et();return Ie===null?t.memoizedState=e:X2(t,Ie.memoizedState,e)},useTransition:function(){var e=ti(fl)[0],t=Et().memoizedState;return[e,t]},useMutableSource:$2,useSyncExternalStore:B2,useId:q2,unstable_isNewReconciler:!1};function to(e,t){try{var n="",r=t;do n+=i0(r),r=r.return;while(r);var l=n}catch(a){l=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:l,digest:null}}function ni(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Yi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var P5=typeof WeakMap=="function"?WeakMap:Map;function nf(e,t,n){n=ln(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Za||(Za=!0,lc=r),Yi(e,t)},n}function rf(e,t,n){n=ln(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Yi(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){Yi(e,t),typeof r!="function"&&($n===null?$n=new Set([this]):$n.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function n1(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new P5;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Y5.bind(null,e,t,n),t.then(e,e))}function r1(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function o1(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ln(-1,1),t.tag=2,An(n,t,1))),n.lanes|=1),e)}var A5=fn.ReactCurrentOwner,ut=!1;function nt(e,t,n,r){t.child=e===null?P2(t,null,n,r):Jr(t,e.child,n,r)}function l1(e,t,n,r,l){n=n.render;var a=t.ref;return Gr(t,l),r=ru(e,t,n,r,a,l),n=ou(),e!==null&&!ut?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,dn(e,t,l)):(ve&&n&&Vc(t),t.flags|=1,nt(e,t,r,l),t.child)}function a1(e,t,n,r,l){if(e===null){var a=n.type;return typeof a=="function"&&!hu(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,of(e,t,a,r,l)):(e=Sa(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&l)){var s=a.memoizedProps;if(n=n.compare,n=n!==null?n:al,n(s,r)&&e.ref===t.ref)return dn(e,t,l)}return t.flags|=1,e=In(a,r),e.ref=t.ref,e.return=t,t.child=e}function of(e,t,n,r,l){if(e!==null){var a=e.memoizedProps;if(al(a,r)&&e.ref===t.ref)if(ut=!1,t.pendingProps=r=a,(e.lanes&l)!==0)e.flags&131072&&(ut=!0);else return t.lanes=e.lanes,dn(e,t,l)}return Qi(e,t,n,r,l)}function lf(e,t,n){var r=t.pendingProps,l=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},fe(zr,mt),mt|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,fe(zr,mt),mt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,fe(zr,mt),mt|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,fe(zr,mt),mt|=r;return nt(e,t,l,n),t.child}function af(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Qi(e,t,n,r,l){var a=pt(n)?dr:Je.current;return a=Xr(t,a),Gr(t,l),n=ru(e,t,n,r,a,l),r=ou(),e!==null&&!ut?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,dn(e,t,l)):(ve&&r&&Vc(t),t.flags|=1,nt(e,t,n,l),t.child)}function s1(e,t,n,r,l){if(pt(n)){var a=!0;Aa(t)}else a=!1;if(Gr(t,l),t.stateNode===null)ya(e,t),M2(t,n,r),Ki(t,n,r,l),r=!0;else if(e===null){var s=t.stateNode,i=t.memoizedProps;s.props=i;var c=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Lt(u):(u=pt(n)?dr:Je.current,u=Xr(t,u));var d=n.getDerivedStateFromProps,x=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";x||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(i!==r||c!==u)&&qd(t,s,r,u),_n=!1;var m=t.memoizedState;s.state=m,Fa(t,r,s,l),c=t.memoizedState,i!==r||m!==c||dt.current||_n?(typeof d=="function"&&(Gi(t,n,d,r),c=t.memoizedState),(i=_n||Xd(t,n,i,r,m,c,u))?(x||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),s.props=r,s.state=c,s.context=u,r=i):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,O2(e,t),i=t.memoizedProps,u=t.type===t.elementType?i:Pt(t.type,i),s.props=u,x=t.pendingProps,m=s.context,c=n.contextType,typeof c=="object"&&c!==null?c=Lt(c):(c=pt(n)?dr:Je.current,c=Xr(t,c));var j=n.getDerivedStateFromProps;(d=typeof j=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(i!==x||m!==c)&&qd(t,s,r,c),_n=!1,m=t.memoizedState,s.state=m,Fa(t,r,s,l);var y=t.memoizedState;i!==x||m!==y||dt.current||_n?(typeof j=="function"&&(Gi(t,n,j,r),y=t.memoizedState),(u=_n||Xd(t,n,u,r,m,y,c)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,c)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||i===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),s.props=r,s.state=y,s.context=c,r=u):(typeof s.componentDidUpdate!="function"||i===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Xi(e,t,n,r,a,l)}function Xi(e,t,n,r,l,a){af(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return l&&Zd(t,n,!1),dn(e,t,a);r=t.stateNode,A5.current=t;var i=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Jr(t,e.child,null,a),t.child=Jr(t,null,i,a)):nt(e,t,i,a),t.memoizedState=r.state,l&&Zd(t,n,!0),t.child}function sf(e){var t=e.stateNode;t.pendingContext?Vd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Vd(e,t.context,!1),Jc(e,t.containerInfo)}function i1(e,t,n,r,l){return qr(),Gc(l),t.flags|=256,nt(e,t,n,r),t.child}var qi={dehydrated:null,treeContext:null,retryLane:0};function Ji(e){return{baseLanes:e,cachePool:null,transitions:null}}function cf(e,t,n){var r=t.pendingProps,l=be.current,a=!1,s=(t.flags&128)!==0,i;if((i=s)||(i=e!==null&&e.memoizedState===null?!1:(l&2)!==0),i?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),fe(be,l&1),e===null)return Vi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,a?(r=t.mode,a=t.child,s={mode:"hidden",children:s},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=s):a=ps(s,r,0,null),e=ur(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Ji(n),t.memoizedState=qi,e):su(t,s));if(l=e.memoizedState,l!==null&&(i=l.dehydrated,i!==null))return $5(e,t,s,r,i,l,n);if(a){a=r.fallback,s=t.mode,l=e.child,i=l.sibling;var c={mode:"hidden",children:r.children};return!(s&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=In(l,c),r.subtreeFlags=l.subtreeFlags&14680064),i!==null?a=In(i,a):(a=ur(a,s,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,s=e.child.memoizedState,s=s===null?Ji(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},a.memoizedState=s,a.childLanes=e.childLanes&~n,t.memoizedState=qi,r}return a=e.child,e=a.sibling,r=In(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function su(e,t){return t=ps({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ea(e,t,n,r){return r!==null&&Gc(r),Jr(t,e.child,null,n),e=su(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function $5(e,t,n,r,l,a,s){if(n)return t.flags&256?(t.flags&=-257,r=ni(Error(D(422))),ea(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,l=t.mode,r=ps({mode:"visible",children:r.children},l,0,null),a=ur(a,l,s,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&Jr(t,e.child,null,s),t.child.memoizedState=Ji(s),t.memoizedState=qi,a);if(!(t.mode&1))return ea(e,t,s,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var i=r.dgst;return r=i,a=Error(D(419)),r=ni(a,r,void 0),ea(e,t,s,r)}if(i=(s&e.childLanes)!==0,ut||i){if(r=He,r!==null){switch(s&-s){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|s)?0:l,l!==0&&l!==a.retryLane&&(a.retryLane=l,un(e,l),zt(r,e,l,-1))}return fu(),r=ni(Error(D(421))),ea(e,t,s,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Q5.bind(null,e),l._reactRetry=t,null):(e=a.treeContext,xt=Pn(l.nextSibling),gt=t,ve=!0,Bt=null,e!==null&&(bt[wt++]=rn,bt[wt++]=on,bt[wt++]=pr,rn=e.id,on=e.overflow,pr=t),t=su(t,r.children),t.flags|=4096,t)}function c1(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Zi(e.return,t,n)}function ri(e,t,n,r,l){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=l)}function uf(e,t,n){var r=t.pendingProps,l=r.revealOrder,a=r.tail;if(nt(e,t,r.children,n),r=be.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&c1(e,n,t);else if(e.tag===19)c1(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(fe(be,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Ua(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),ri(t,!1,l,n,a);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Ua(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}ri(t,!0,n,null,a);break;case"together":ri(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ya(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function dn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),hr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(D(153));if(t.child!==null){for(e=t.child,n=In(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=In(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function B5(e,t,n){switch(t.tag){case 3:sf(t),qr();break;case 5:A2(t);break;case 1:pt(t.type)&&Aa(t);break;case 4:Jc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;fe(Ia,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(fe(be,be.current&1),t.flags|=128,null):n&t.child.childLanes?cf(e,t,n):(fe(be,be.current&1),e=dn(e,t,n),e!==null?e.sibling:null);fe(be,be.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return uf(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),fe(be,be.current),r)break;return null;case 22:case 23:return t.lanes=0,lf(e,t,n)}return dn(e,t,n)}var df,ec,pf,ff;df=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ec=function(){};pf=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,sr(Kt.current);var a=null;switch(n){case"input":l=Si(e,l),r=Si(e,r),a=[];break;case"select":l=ke({},l,{value:void 0}),r=ke({},r,{value:void 0}),a=[];break;case"textarea":l=_i(e,l),r=_i(e,r),a=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Da)}Ti(n,r);var s;n=null;for(u in l)if(!r.hasOwnProperty(u)&&l.hasOwnProperty(u)&&l[u]!=null)if(u==="style"){var i=l[u];for(s in i)i.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Jo.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var c=r[u];if(i=l!=null?l[u]:void 0,r.hasOwnProperty(u)&&c!==i&&(c!=null||i!=null))if(u==="style")if(i){for(s in i)!i.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in c)c.hasOwnProperty(s)&&i[s]!==c[s]&&(n||(n={}),n[s]=c[s])}else n||(a||(a=[]),a.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,i=i?i.__html:void 0,c!=null&&i!==c&&(a=a||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(a=a||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Jo.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&me("scroll",e),a||i===c||(a=[])):(a=a||[]).push(u,c))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}};ff=function(e,t,n,r){n!==r&&(t.flags|=4)};function bo(e,t){if(!ve)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Xe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function I5(e,t,n){var r=t.pendingProps;switch(Zc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xe(t),null;case 1:return pt(t.type)&&Pa(),Xe(t),null;case 3:return r=t.stateNode,eo(),xe(dt),xe(Je),tu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ql(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Bt!==null&&(ic(Bt),Bt=null))),ec(e,t),Xe(t),null;case 5:eu(t);var l=sr(dl.current);if(n=t.type,e!==null&&t.stateNode!=null)pf(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(D(166));return Xe(t),null}if(e=sr(Kt.current),ql(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[Zt]=t,r[cl]=a,e=(t.mode&1)!==0,n){case"dialog":me("cancel",r),me("close",r);break;case"iframe":case"object":case"embed":me("load",r);break;case"video":case"audio":for(l=0;l<Mo.length;l++)me(Mo[l],r);break;case"source":me("error",r);break;case"img":case"image":case"link":me("error",r),me("load",r);break;case"details":me("toggle",r);break;case"input":vd(r,a),me("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},me("invalid",r);break;case"textarea":Cd(r,a),me("invalid",r)}Ti(n,a),l=null;for(var s in a)if(a.hasOwnProperty(s)){var i=a[s];s==="children"?typeof i=="string"?r.textContent!==i&&(a.suppressHydrationWarning!==!0&&Xl(r.textContent,i,e),l=["children",i]):typeof i=="number"&&r.textContent!==""+i&&(a.suppressHydrationWarning!==!0&&Xl(r.textContent,i,e),l=["children",""+i]):Jo.hasOwnProperty(s)&&i!=null&&s==="onScroll"&&me("scroll",r)}switch(n){case"input":Hl(r),yd(r,a,!0);break;case"textarea":Hl(r),jd(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=Da)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ip(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Zt]=t,e[cl]=r,df(e,t,!1,!1),t.stateNode=e;e:{switch(s=Li(n,r),n){case"dialog":me("cancel",e),me("close",e),l=r;break;case"iframe":case"object":case"embed":me("load",e),l=r;break;case"video":case"audio":for(l=0;l<Mo.length;l++)me(Mo[l],e);l=r;break;case"source":me("error",e),l=r;break;case"img":case"image":case"link":me("error",e),me("load",e),l=r;break;case"details":me("toggle",e),l=r;break;case"input":vd(e,r),l=Si(e,r),me("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=ke({},r,{value:void 0}),me("invalid",e);break;case"textarea":Cd(e,r),l=_i(e,r),me("invalid",e);break;default:l=r}Ti(n,l),i=l;for(a in i)if(i.hasOwnProperty(a)){var c=i[a];a==="style"?Up(e,c):a==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&zp(e,c)):a==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&el(e,c):typeof c=="number"&&el(e,""+c):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Jo.hasOwnProperty(a)?c!=null&&a==="onScroll"&&me("scroll",e):c!=null&&Oc(e,a,c,s))}switch(n){case"input":Hl(e),yd(e,r,!1);break;case"textarea":Hl(e),jd(e);break;case"option":r.value!=null&&e.setAttribute("value",""+zn(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?Hr(e,!!r.multiple,a,!1):r.defaultValue!=null&&Hr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Da)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Xe(t),null;case 6:if(e&&t.stateNode!=null)ff(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(D(166));if(n=sr(dl.current),sr(Kt.current),ql(t)){if(r=t.stateNode,n=t.memoizedProps,r[Zt]=t,(a=r.nodeValue!==n)&&(e=gt,e!==null))switch(e.tag){case 3:Xl(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Xl(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Zt]=t,t.stateNode=r}return Xe(t),null;case 13:if(xe(be),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ve&&xt!==null&&t.mode&1&&!(t.flags&128))E2(),qr(),t.flags|=98560,a=!1;else if(a=ql(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(D(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(D(317));a[Zt]=t}else qr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Xe(t),a=!1}else Bt!==null&&(ic(Bt),Bt=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||be.current&1?ze===0&&(ze=3):fu())),t.updateQueue!==null&&(t.flags|=4),Xe(t),null);case 4:return eo(),ec(e,t),e===null&&sl(t.stateNode.containerInfo),Xe(t),null;case 10:return Qc(t.type._context),Xe(t),null;case 17:return pt(t.type)&&Pa(),Xe(t),null;case 19:if(xe(be),a=t.memoizedState,a===null)return Xe(t),null;if(r=(t.flags&128)!==0,s=a.rendering,s===null)if(r)bo(a,!1);else{if(ze!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Ua(e),s!==null){for(t.flags|=128,bo(a,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,s=a.alternate,s===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=s.childLanes,a.lanes=s.lanes,a.child=s.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=s.memoizedProps,a.memoizedState=s.memoizedState,a.updateQueue=s.updateQueue,a.type=s.type,e=s.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return fe(be,be.current&1|2),t.child}e=e.sibling}a.tail!==null&&Me()>no&&(t.flags|=128,r=!0,bo(a,!1),t.lanes=4194304)}else{if(!r)if(e=Ua(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),bo(a,!0),a.tail===null&&a.tailMode==="hidden"&&!s.alternate&&!ve)return Xe(t),null}else 2*Me()-a.renderingStartTime>no&&n!==1073741824&&(t.flags|=128,r=!0,bo(a,!1),t.lanes=4194304);a.isBackwards?(s.sibling=t.child,t.child=s):(n=a.last,n!==null?n.sibling=s:t.child=s,a.last=s)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Me(),t.sibling=null,n=be.current,fe(be,r?n&1|2:n&1),t):(Xe(t),null);case 22:case 23:return pu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?mt&1073741824&&(Xe(t),t.subtreeFlags&6&&(t.flags|=8192)):Xe(t),null;case 24:return null;case 25:return null}throw Error(D(156,t.tag))}function z5(e,t){switch(Zc(t),t.tag){case 1:return pt(t.type)&&Pa(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return eo(),xe(dt),xe(Je),tu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return eu(t),null;case 13:if(xe(be),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(D(340));qr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return xe(be),null;case 4:return eo(),null;case 10:return Qc(t.type._context),null;case 22:case 23:return pu(),null;case 24:return null;default:return null}}var ta=!1,qe=!1,F5=typeof WeakSet=="function"?WeakSet:Set,I=null;function Ir(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Le(e,t,r)}else n.current=null}function tc(e,t,n){try{n()}catch(r){Le(e,t,r)}}var u1=!1;function U5(e,t){if(Bi=Oa,e=x2(),Wc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var s=0,i=-1,c=-1,u=0,d=0,x=e,m=null;t:for(;;){for(var j;x!==n||l!==0&&x.nodeType!==3||(i=s+l),x!==a||r!==0&&x.nodeType!==3||(c=s+r),x.nodeType===3&&(s+=x.nodeValue.length),(j=x.firstChild)!==null;)m=x,x=j;for(;;){if(x===e)break t;if(m===n&&++u===l&&(i=s),m===a&&++d===r&&(c=s),(j=x.nextSibling)!==null)break;x=m,m=x.parentNode}x=j}n=i===-1||c===-1?null:{start:i,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ii={focusedElem:e,selectionRange:n},Oa=!1,I=t;I!==null;)if(t=I,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,I=e;else for(;I!==null;){t=I;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var S=y.memoizedProps,E=y.memoizedState,g=t.stateNode,p=g.getSnapshotBeforeUpdate(t.elementType===t.type?S:Pt(t.type,S),E);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(D(163))}}catch(f){Le(t,t.return,f)}if(e=t.sibling,e!==null){e.return=t.return,I=e;break}I=t.return}return y=u1,u1=!1,y}function Zo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var a=l.destroy;l.destroy=void 0,a!==void 0&&tc(t,n,a)}l=l.next}while(l!==r)}}function us(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function nc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function hf(e){var t=e.alternate;t!==null&&(e.alternate=null,hf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Zt],delete t[cl],delete t[Ui],delete t[w5],delete t[_5])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function mf(e){return e.tag===5||e.tag===3||e.tag===4}function d1(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||mf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function rc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Da));else if(r!==4&&(e=e.child,e!==null))for(rc(e,t,n),e=e.sibling;e!==null;)rc(e,t,n),e=e.sibling}function oc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(oc(e,t,n),e=e.sibling;e!==null;)oc(e,t,n),e=e.sibling}var Ze=null,At=!1;function jn(e,t,n){for(n=n.child;n!==null;)xf(e,t,n),n=n.sibling}function xf(e,t,n){if(Gt&&typeof Gt.onCommitFiberUnmount=="function")try{Gt.onCommitFiberUnmount(ns,n)}catch{}switch(n.tag){case 5:qe||Ir(n,t);case 6:var r=Ze,l=At;Ze=null,jn(e,t,n),Ze=r,At=l,Ze!==null&&(At?(e=Ze,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ze.removeChild(n.stateNode));break;case 18:Ze!==null&&(At?(e=Ze,n=n.stateNode,e.nodeType===8?Qs(e.parentNode,n):e.nodeType===1&&Qs(e,n),ol(e)):Qs(Ze,n.stateNode));break;case 4:r=Ze,l=At,Ze=n.stateNode.containerInfo,At=!0,jn(e,t,n),Ze=r,At=l;break;case 0:case 11:case 14:case 15:if(!qe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var a=l,s=a.destroy;a=a.tag,s!==void 0&&(a&2||a&4)&&tc(n,t,s),l=l.next}while(l!==r)}jn(e,t,n);break;case 1:if(!qe&&(Ir(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(i){Le(n,t,i)}jn(e,t,n);break;case 21:jn(e,t,n);break;case 22:n.mode&1?(qe=(r=qe)||n.memoizedState!==null,jn(e,t,n),qe=r):jn(e,t,n);break;default:jn(e,t,n)}}function p1(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new F5),t.forEach(function(r){var l=X5.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Dt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var a=e,s=t,i=s;e:for(;i!==null;){switch(i.tag){case 5:Ze=i.stateNode,At=!1;break e;case 3:Ze=i.stateNode.containerInfo,At=!0;break e;case 4:Ze=i.stateNode.containerInfo,At=!0;break e}i=i.return}if(Ze===null)throw Error(D(160));xf(a,s,l),Ze=null,At=!1;var c=l.alternate;c!==null&&(c.return=null),l.return=null}catch(u){Le(l,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)gf(t,e),t=t.sibling}function gf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Dt(t,e),Ut(e),r&4){try{Zo(3,e,e.return),us(3,e)}catch(S){Le(e,e.return,S)}try{Zo(5,e,e.return)}catch(S){Le(e,e.return,S)}}break;case 1:Dt(t,e),Ut(e),r&512&&n!==null&&Ir(n,n.return);break;case 5:if(Dt(t,e),Ut(e),r&512&&n!==null&&Ir(n,n.return),e.flags&32){var l=e.stateNode;try{el(l,"")}catch(S){Le(e,e.return,S)}}if(r&4&&(l=e.stateNode,l!=null)){var a=e.memoizedProps,s=n!==null?n.memoizedProps:a,i=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{i==="input"&&a.type==="radio"&&a.name!=null&&$p(l,a),Li(i,s);var u=Li(i,a);for(s=0;s<c.length;s+=2){var d=c[s],x=c[s+1];d==="style"?Up(l,x):d==="dangerouslySetInnerHTML"?zp(l,x):d==="children"?el(l,x):Oc(l,d,x,u)}switch(i){case"input":bi(l,a);break;case"textarea":Bp(l,a);break;case"select":var m=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!a.multiple;var j=a.value;j!=null?Hr(l,!!a.multiple,j,!1):m!==!!a.multiple&&(a.defaultValue!=null?Hr(l,!!a.multiple,a.defaultValue,!0):Hr(l,!!a.multiple,a.multiple?[]:"",!1))}l[cl]=a}catch(S){Le(e,e.return,S)}}break;case 6:if(Dt(t,e),Ut(e),r&4){if(e.stateNode===null)throw Error(D(162));l=e.stateNode,a=e.memoizedProps;try{l.nodeValue=a}catch(S){Le(e,e.return,S)}}break;case 3:if(Dt(t,e),Ut(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ol(t.containerInfo)}catch(S){Le(e,e.return,S)}break;case 4:Dt(t,e),Ut(e);break;case 13:Dt(t,e),Ut(e),l=e.child,l.flags&8192&&(a=l.memoizedState!==null,l.stateNode.isHidden=a,!a||l.alternate!==null&&l.alternate.memoizedState!==null||(uu=Me())),r&4&&p1(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(qe=(u=qe)||d,Dt(t,e),qe=u):Dt(t,e),Ut(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(I=e,d=e.child;d!==null;){for(x=I=d;I!==null;){switch(m=I,j=m.child,m.tag){case 0:case 11:case 14:case 15:Zo(4,m,m.return);break;case 1:Ir(m,m.return);var y=m.stateNode;if(typeof y.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(S){Le(r,n,S)}}break;case 5:Ir(m,m.return);break;case 22:if(m.memoizedState!==null){h1(x);continue}}j!==null?(j.return=m,I=j):h1(x)}d=d.sibling}e:for(d=null,x=e;;){if(x.tag===5){if(d===null){d=x;try{l=x.stateNode,u?(a=l.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(i=x.stateNode,c=x.memoizedProps.style,s=c!=null&&c.hasOwnProperty("display")?c.display:null,i.style.display=Fp("display",s))}catch(S){Le(e,e.return,S)}}}else if(x.tag===6){if(d===null)try{x.stateNode.nodeValue=u?"":x.memoizedProps}catch(S){Le(e,e.return,S)}}else if((x.tag!==22&&x.tag!==23||x.memoizedState===null||x===e)&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===e)break e;for(;x.sibling===null;){if(x.return===null||x.return===e)break e;d===x&&(d=null),x=x.return}d===x&&(d=null),x.sibling.return=x.return,x=x.sibling}}break;case 19:Dt(t,e),Ut(e),r&4&&p1(e);break;case 21:break;default:Dt(t,e),Ut(e)}}function Ut(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(mf(n)){var r=n;break e}n=n.return}throw Error(D(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(el(l,""),r.flags&=-33);var a=d1(e);oc(e,a,l);break;case 3:case 4:var s=r.stateNode.containerInfo,i=d1(e);rc(e,i,s);break;default:throw Error(D(161))}}catch(c){Le(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function H5(e,t,n){I=e,vf(e)}function vf(e,t,n){for(var r=(e.mode&1)!==0;I!==null;){var l=I,a=l.child;if(l.tag===22&&r){var s=l.memoizedState!==null||ta;if(!s){var i=l.alternate,c=i!==null&&i.memoizedState!==null||qe;i=ta;var u=qe;if(ta=s,(qe=c)&&!u)for(I=l;I!==null;)s=I,c=s.child,s.tag===22&&s.memoizedState!==null?m1(l):c!==null?(c.return=s,I=c):m1(l);for(;a!==null;)I=a,vf(a),a=a.sibling;I=l,ta=i,qe=u}f1(e)}else l.subtreeFlags&8772&&a!==null?(a.return=l,I=a):f1(e)}}function f1(e){for(;I!==null;){var t=I;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:qe||us(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!qe)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Pt(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Qd(t,a,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Qd(t,s,n)}break;case 5:var i=t.stateNode;if(n===null&&t.flags&4){n=i;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var x=d.dehydrated;x!==null&&ol(x)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(D(163))}qe||t.flags&512&&nc(t)}catch(m){Le(t,t.return,m)}}if(t===e){I=null;break}if(n=t.sibling,n!==null){n.return=t.return,I=n;break}I=t.return}}function h1(e){for(;I!==null;){var t=I;if(t===e){I=null;break}var n=t.sibling;if(n!==null){n.return=t.return,I=n;break}I=t.return}}function m1(e){for(;I!==null;){var t=I;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{us(4,t)}catch(c){Le(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(c){Le(t,l,c)}}var a=t.return;try{nc(t)}catch(c){Le(t,a,c)}break;case 5:var s=t.return;try{nc(t)}catch(c){Le(t,s,c)}}}catch(c){Le(t,t.return,c)}if(t===e){I=null;break}var i=t.sibling;if(i!==null){i.return=t.return,I=i;break}I=t.return}}var W5=Math.ceil,Va=fn.ReactCurrentDispatcher,iu=fn.ReactCurrentOwner,kt=fn.ReactCurrentBatchConfig,re=0,He=null,De=null,Ke=0,mt=0,zr=Zn(0),ze=0,ml=null,hr=0,ds=0,cu=0,Go=null,ct=null,uu=0,no=1/0,tn=null,Za=!1,lc=null,$n=null,na=!1,On=null,Ga=0,Ko=0,ac=null,Ca=-1,ja=0;function ot(){return re&6?Me():Ca!==-1?Ca:Ca=Me()}function Bn(e){return e.mode&1?re&2&&Ke!==0?Ke&-Ke:T5.transition!==null?(ja===0&&(ja=e2()),ja):(e=se,e!==0||(e=window.event,e=e===void 0?16:s2(e.type)),e):1}function zt(e,t,n,r){if(50<Ko)throw Ko=0,ac=null,Error(D(185));Cl(e,n,r),(!(re&2)||e!==He)&&(e===He&&(!(re&2)&&(ds|=n),ze===4&&Ln(e,Ke)),ft(e,r),n===1&&re===0&&!(t.mode&1)&&(no=Me()+500,ss&&Gn()))}function ft(e,t){var n=e.callbackNode;T0(e,t);var r=Na(e,e===He?Ke:0);if(r===0)n!==null&&wd(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&wd(n),t===1)e.tag===0?k5(x1.bind(null,e)):k2(x1.bind(null,e)),S5(function(){!(re&6)&&Gn()}),n=null;else{switch(t2(r)){case 1:n=Ac;break;case 4:n=qp;break;case 16:n=Ea;break;case 536870912:n=Jp;break;default:n=Ea}n=kf(n,yf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function yf(e,t){if(Ca=-1,ja=0,re&6)throw Error(D(327));var n=e.callbackNode;if(Kr()&&e.callbackNode!==n)return null;var r=Na(e,e===He?Ke:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ka(e,r);else{t=r;var l=re;re|=2;var a=jf();(He!==e||Ke!==t)&&(tn=null,no=Me()+500,cr(e,t));do try{G5();break}catch(i){Cf(e,i)}while(1);Yc(),Va.current=a,re=l,De!==null?t=0:(He=null,Ke=0,t=ze)}if(t!==0){if(t===2&&(l=Mi(e),l!==0&&(r=l,t=sc(e,l))),t===1)throw n=ml,cr(e,0),Ln(e,r),ft(e,Me()),n;if(t===6)Ln(e,r);else{if(l=e.current.alternate,!(r&30)&&!V5(l)&&(t=Ka(e,r),t===2&&(a=Mi(e),a!==0&&(r=a,t=sc(e,a))),t===1))throw n=ml,cr(e,0),Ln(e,r),ft(e,Me()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(D(345));case 2:or(e,ct,tn);break;case 3:if(Ln(e,r),(r&130023424)===r&&(t=uu+500-Me(),10<t)){if(Na(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ot(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Fi(or.bind(null,e,ct,tn),t);break}or(e,ct,tn);break;case 4:if(Ln(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var s=31-It(r);a=1<<s,s=t[s],s>l&&(l=s),r&=~a}if(r=l,r=Me()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*W5(r/1960))-r,10<r){e.timeoutHandle=Fi(or.bind(null,e,ct,tn),r);break}or(e,ct,tn);break;case 5:or(e,ct,tn);break;default:throw Error(D(329))}}}return ft(e,Me()),e.callbackNode===n?yf.bind(null,e):null}function sc(e,t){var n=Go;return e.current.memoizedState.isDehydrated&&(cr(e,t).flags|=256),e=Ka(e,t),e!==2&&(t=ct,ct=n,t!==null&&ic(t)),e}function ic(e){ct===null?ct=e:ct.push.apply(ct,e)}function V5(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],a=l.getSnapshot;l=l.value;try{if(!Ft(a(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ln(e,t){for(t&=~cu,t&=~ds,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-It(t),r=1<<n;e[n]=-1,t&=~r}}function x1(e){if(re&6)throw Error(D(327));Kr();var t=Na(e,0);if(!(t&1))return ft(e,Me()),null;var n=Ka(e,t);if(e.tag!==0&&n===2){var r=Mi(e);r!==0&&(t=r,n=sc(e,r))}if(n===1)throw n=ml,cr(e,0),Ln(e,t),ft(e,Me()),n;if(n===6)throw Error(D(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,or(e,ct,tn),ft(e,Me()),null}function du(e,t){var n=re;re|=1;try{return e(t)}finally{re=n,re===0&&(no=Me()+500,ss&&Gn())}}function mr(e){On!==null&&On.tag===0&&!(re&6)&&Kr();var t=re;re|=1;var n=kt.transition,r=se;try{if(kt.transition=null,se=1,e)return e()}finally{se=r,kt.transition=n,re=t,!(re&6)&&Gn()}}function pu(){mt=zr.current,xe(zr)}function cr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,j5(n)),De!==null)for(n=De.return;n!==null;){var r=n;switch(Zc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Pa();break;case 3:eo(),xe(dt),xe(Je),tu();break;case 5:eu(r);break;case 4:eo();break;case 13:xe(be);break;case 19:xe(be);break;case 10:Qc(r.type._context);break;case 22:case 23:pu()}n=n.return}if(He=e,De=e=In(e.current,null),Ke=mt=t,ze=0,ml=null,cu=ds=hr=0,ct=Go=null,ar!==null){for(t=0;t<ar.length;t++)if(n=ar[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,a=n.pending;if(a!==null){var s=a.next;a.next=l,r.next=s}n.pending=r}ar=null}return e}function Cf(e,t){do{var n=De;try{if(Yc(),ga.current=Wa,Ha){for(var r=_e.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Ha=!1}if(fr=0,Ue=Ie=_e=null,Vo=!1,pl=0,iu.current=null,n===null||n.return===null){ze=1,ml=t,De=null;break}e:{var a=e,s=n.return,i=n,c=t;if(t=Ke,i.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=i,x=d.tag;if(!(d.mode&1)&&(x===0||x===11||x===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var j=r1(s);if(j!==null){j.flags&=-257,o1(j,s,i,a,t),j.mode&1&&n1(a,u,t),t=j,c=u;var y=t.updateQueue;if(y===null){var S=new Set;S.add(c),t.updateQueue=S}else y.add(c);break e}else{if(!(t&1)){n1(a,u,t),fu();break e}c=Error(D(426))}}else if(ve&&i.mode&1){var E=r1(s);if(E!==null){!(E.flags&65536)&&(E.flags|=256),o1(E,s,i,a,t),Gc(to(c,i));break e}}a=c=to(c,i),ze!==4&&(ze=2),Go===null?Go=[a]:Go.push(a),a=s;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var g=nf(a,c,t);Yd(a,g);break e;case 1:i=c;var p=a.type,h=a.stateNode;if(!(a.flags&128)&&(typeof p.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&($n===null||!$n.has(h)))){a.flags|=65536,t&=-t,a.lanes|=t;var f=rf(a,i,t);Yd(a,f);break e}}a=a.return}while(a!==null)}bf(n)}catch(v){t=v,De===n&&n!==null&&(De=n=n.return);continue}break}while(1)}function jf(){var e=Va.current;return Va.current=Wa,e===null?Wa:e}function fu(){(ze===0||ze===3||ze===2)&&(ze=4),He===null||!(hr&268435455)&&!(ds&268435455)||Ln(He,Ke)}function Ka(e,t){var n=re;re|=2;var r=jf();(He!==e||Ke!==t)&&(tn=null,cr(e,t));do try{Z5();break}catch(l){Cf(e,l)}while(1);if(Yc(),re=n,Va.current=r,De!==null)throw Error(D(261));return He=null,Ke=0,ze}function Z5(){for(;De!==null;)Sf(De)}function G5(){for(;De!==null&&!v0();)Sf(De)}function Sf(e){var t=_f(e.alternate,e,mt);e.memoizedProps=e.pendingProps,t===null?bf(e):De=t,iu.current=null}function bf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=z5(n,t),n!==null){n.flags&=32767,De=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ze=6,De=null;return}}else if(n=I5(n,t,mt),n!==null){De=n;return}if(t=t.sibling,t!==null){De=t;return}De=t=e}while(t!==null);ze===0&&(ze=5)}function or(e,t,n){var r=se,l=kt.transition;try{kt.transition=null,se=1,K5(e,t,n,r)}finally{kt.transition=l,se=r}return null}function K5(e,t,n,r){do Kr();while(On!==null);if(re&6)throw Error(D(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(D(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(L0(e,a),e===He&&(De=He=null,Ke=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||na||(na=!0,kf(Ea,function(){return Kr(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=kt.transition,kt.transition=null;var s=se;se=1;var i=re;re|=4,iu.current=null,U5(e,n),gf(n,e),h5(Ii),Oa=!!Bi,Ii=Bi=null,e.current=n,H5(n),y0(),re=i,se=s,kt.transition=a}else e.current=n;if(na&&(na=!1,On=e,Ga=l),a=e.pendingLanes,a===0&&($n=null),S0(n.stateNode),ft(e,Me()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(Za)throw Za=!1,e=lc,lc=null,e;return Ga&1&&e.tag!==0&&Kr(),a=e.pendingLanes,a&1?e===ac?Ko++:(Ko=0,ac=e):Ko=0,Gn(),null}function Kr(){if(On!==null){var e=t2(Ga),t=kt.transition,n=se;try{if(kt.transition=null,se=16>e?16:e,On===null)var r=!1;else{if(e=On,On=null,Ga=0,re&6)throw Error(D(331));var l=re;for(re|=4,I=e.current;I!==null;){var a=I,s=a.child;if(I.flags&16){var i=a.deletions;if(i!==null){for(var c=0;c<i.length;c++){var u=i[c];for(I=u;I!==null;){var d=I;switch(d.tag){case 0:case 11:case 15:Zo(8,d,a)}var x=d.child;if(x!==null)x.return=d,I=x;else for(;I!==null;){d=I;var m=d.sibling,j=d.return;if(hf(d),d===u){I=null;break}if(m!==null){m.return=j,I=m;break}I=j}}}var y=a.alternate;if(y!==null){var S=y.child;if(S!==null){y.child=null;do{var E=S.sibling;S.sibling=null,S=E}while(S!==null)}}I=a}}if(a.subtreeFlags&2064&&s!==null)s.return=a,I=s;else e:for(;I!==null;){if(a=I,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Zo(9,a,a.return)}var g=a.sibling;if(g!==null){g.return=a.return,I=g;break e}I=a.return}}var p=e.current;for(I=p;I!==null;){s=I;var h=s.child;if(s.subtreeFlags&2064&&h!==null)h.return=s,I=h;else e:for(s=p;I!==null;){if(i=I,i.flags&2048)try{switch(i.tag){case 0:case 11:case 15:us(9,i)}}catch(v){Le(i,i.return,v)}if(i===s){I=null;break e}var f=i.sibling;if(f!==null){f.return=i.return,I=f;break e}I=i.return}}if(re=l,Gn(),Gt&&typeof Gt.onPostCommitFiberRoot=="function")try{Gt.onPostCommitFiberRoot(ns,e)}catch{}r=!0}return r}finally{se=n,kt.transition=t}}return!1}function g1(e,t,n){t=to(n,t),t=nf(e,t,1),e=An(e,t,1),t=ot(),e!==null&&(Cl(e,1,t),ft(e,t))}function Le(e,t,n){if(e.tag===3)g1(e,e,n);else for(;t!==null;){if(t.tag===3){g1(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&($n===null||!$n.has(r))){e=to(n,e),e=rf(t,e,1),t=An(t,e,1),e=ot(),t!==null&&(Cl(t,1,e),ft(t,e));break}}t=t.return}}function Y5(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ot(),e.pingedLanes|=e.suspendedLanes&n,He===e&&(Ke&n)===n&&(ze===4||ze===3&&(Ke&130023424)===Ke&&500>Me()-uu?cr(e,0):cu|=n),ft(e,t)}function wf(e,t){t===0&&(e.mode&1?(t=Zl,Zl<<=1,!(Zl&130023424)&&(Zl=4194304)):t=1);var n=ot();e=un(e,t),e!==null&&(Cl(e,t,n),ft(e,n))}function Q5(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),wf(e,n)}function X5(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(D(314))}r!==null&&r.delete(t),wf(e,n)}var _f;_f=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||dt.current)ut=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ut=!1,B5(e,t,n);ut=!!(e.flags&131072)}else ut=!1,ve&&t.flags&1048576&&T2(t,Ba,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ya(e,t),e=t.pendingProps;var l=Xr(t,Je.current);Gr(t,n),l=ru(null,t,r,e,l,n);var a=ou();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,pt(r)?(a=!0,Aa(t)):a=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,qc(t),l.updater=is,t.stateNode=l,l._reactInternals=t,Ki(t,r,e,n),t=Xi(null,t,r,!0,a,n)):(t.tag=0,ve&&a&&Vc(t),nt(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ya(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=J5(r),e=Pt(r,e),l){case 0:t=Qi(null,t,r,e,n);break e;case 1:t=s1(null,t,r,e,n);break e;case 11:t=l1(null,t,r,e,n);break e;case 14:t=a1(null,t,r,Pt(r.type,e),n);break e}throw Error(D(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Pt(r,l),Qi(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Pt(r,l),s1(e,t,r,l,n);case 3:e:{if(sf(t),e===null)throw Error(D(387));r=t.pendingProps,a=t.memoizedState,l=a.element,O2(e,t),Fa(t,r,null,n);var s=t.memoizedState;if(r=s.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){l=to(Error(D(423)),t),t=i1(e,t,r,n,l);break e}else if(r!==l){l=to(Error(D(424)),t),t=i1(e,t,r,n,l);break e}else for(xt=Pn(t.stateNode.containerInfo.firstChild),gt=t,ve=!0,Bt=null,n=P2(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(qr(),r===l){t=dn(e,t,n);break e}nt(e,t,r,n)}t=t.child}return t;case 5:return A2(t),e===null&&Vi(t),r=t.type,l=t.pendingProps,a=e!==null?e.memoizedProps:null,s=l.children,zi(r,l)?s=null:a!==null&&zi(r,a)&&(t.flags|=32),af(e,t),nt(e,t,s,n),t.child;case 6:return e===null&&Vi(t),null;case 13:return cf(e,t,n);case 4:return Jc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Jr(t,null,r,n):nt(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Pt(r,l),l1(e,t,r,l,n);case 7:return nt(e,t,t.pendingProps,n),t.child;case 8:return nt(e,t,t.pendingProps.children,n),t.child;case 12:return nt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,a=t.memoizedProps,s=l.value,fe(Ia,r._currentValue),r._currentValue=s,a!==null)if(Ft(a.value,s)){if(a.children===l.children&&!dt.current){t=dn(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var i=a.dependencies;if(i!==null){s=a.child;for(var c=i.firstContext;c!==null;){if(c.context===r){if(a.tag===1){c=ln(-1,n&-n),c.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),Zi(a.return,n,t),i.lanes|=n;break}c=c.next}}else if(a.tag===10)s=a.type===t.type?null:a.child;else if(a.tag===18){if(s=a.return,s===null)throw Error(D(341));s.lanes|=n,i=s.alternate,i!==null&&(i.lanes|=n),Zi(s,n,t),s=a.sibling}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===t){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}nt(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,Gr(t,n),l=Lt(l),r=r(l),t.flags|=1,nt(e,t,r,n),t.child;case 14:return r=t.type,l=Pt(r,t.pendingProps),l=Pt(r.type,l),a1(e,t,r,l,n);case 15:return of(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Pt(r,l),ya(e,t),t.tag=1,pt(r)?(e=!0,Aa(t)):e=!1,Gr(t,n),M2(t,r,l),Ki(t,r,l,n),Xi(null,t,r,!0,e,n);case 19:return uf(e,t,n);case 22:return lf(e,t,n)}throw Error(D(156,t.tag))};function kf(e,t){return Xp(e,t)}function q5(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _t(e,t,n,r){return new q5(e,t,n,r)}function hu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function J5(e){if(typeof e=="function")return hu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Mc)return 11;if(e===Dc)return 14}return 2}function In(e,t){var n=e.alternate;return n===null?(n=_t(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Sa(e,t,n,r,l,a){var s=2;if(r=e,typeof e=="function")hu(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Nr:return ur(n.children,l,a,t);case Rc:s=8,l|=8;break;case vi:return e=_t(12,n,t,l|2),e.elementType=vi,e.lanes=a,e;case yi:return e=_t(13,n,t,l),e.elementType=yi,e.lanes=a,e;case Ci:return e=_t(19,n,t,l),e.elementType=Ci,e.lanes=a,e;case Dp:return ps(n,l,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Rp:s=10;break e;case Mp:s=9;break e;case Mc:s=11;break e;case Dc:s=14;break e;case wn:s=16,r=null;break e}throw Error(D(130,e==null?e:typeof e,""))}return t=_t(s,n,t,l),t.elementType=e,t.type=r,t.lanes=a,t}function ur(e,t,n,r){return e=_t(7,e,r,t),e.lanes=n,e}function ps(e,t,n,r){return e=_t(22,e,r,t),e.elementType=Dp,e.lanes=n,e.stateNode={isHidden:!1},e}function oi(e,t,n){return e=_t(6,e,null,t),e.lanes=n,e}function li(e,t,n){return t=_t(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function e6(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Is(0),this.expirationTimes=Is(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Is(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function mu(e,t,n,r,l,a,s,i,c){return e=new e6(e,t,n,i,c),t===1?(t=1,a===!0&&(t|=8)):t=0,a=_t(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},qc(a),e}function t6(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Er,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Tf(e){if(!e)return Fn;e=e._reactInternals;e:{if(yr(e)!==e||e.tag!==1)throw Error(D(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(pt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(D(171))}if(e.tag===1){var n=e.type;if(pt(n))return _2(e,n,t)}return t}function Lf(e,t,n,r,l,a,s,i,c){return e=mu(n,r,!0,e,l,a,s,i,c),e.context=Tf(null),n=e.current,r=ot(),l=Bn(n),a=ln(r,l),a.callback=t??null,An(n,a,l),e.current.lanes=l,Cl(e,l,r),ft(e,r),e}function fs(e,t,n,r){var l=t.current,a=ot(),s=Bn(l);return n=Tf(n),t.context===null?t.context=n:t.pendingContext=n,t=ln(a,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=An(l,t,s),e!==null&&(zt(e,l,s,a),xa(e,l,s)),s}function Ya(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function v1(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function xu(e,t){v1(e,t),(e=e.alternate)&&v1(e,t)}function n6(){return null}var Ef=typeof reportError=="function"?reportError:function(e){console.error(e)};function gu(e){this._internalRoot=e}hs.prototype.render=gu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(D(409));fs(e,t,null,null)};hs.prototype.unmount=gu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;mr(function(){fs(null,e,null,null)}),t[cn]=null}};function hs(e){this._internalRoot=e}hs.prototype.unstable_scheduleHydration=function(e){if(e){var t=o2();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Tn.length&&t!==0&&t<Tn[n].priority;n++);Tn.splice(n,0,e),n===0&&a2(e)}};function vu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ms(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function y1(){}function r6(e,t,n,r,l){if(l){if(typeof r=="function"){var a=r;r=function(){var u=Ya(s);a.call(u)}}var s=Lf(t,r,e,0,null,!1,!1,"",y1);return e._reactRootContainer=s,e[cn]=s.current,sl(e.nodeType===8?e.parentNode:e),mr(),s}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var i=r;r=function(){var u=Ya(c);i.call(u)}}var c=mu(e,0,!1,null,null,!1,!1,"",y1);return e._reactRootContainer=c,e[cn]=c.current,sl(e.nodeType===8?e.parentNode:e),mr(function(){fs(t,c,n,r)}),c}function xs(e,t,n,r,l){var a=n._reactRootContainer;if(a){var s=a;if(typeof l=="function"){var i=l;l=function(){var c=Ya(s);i.call(c)}}fs(t,s,e,l)}else s=r6(n,t,e,l,r);return Ya(s)}n2=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ro(t.pendingLanes);n!==0&&($c(t,n|1),ft(t,Me()),!(re&6)&&(no=Me()+500,Gn()))}break;case 13:mr(function(){var r=un(e,1);if(r!==null){var l=ot();zt(r,e,1,l)}}),xu(e,1)}};Bc=function(e){if(e.tag===13){var t=un(e,134217728);if(t!==null){var n=ot();zt(t,e,134217728,n)}xu(e,134217728)}};r2=function(e){if(e.tag===13){var t=Bn(e),n=un(e,t);if(n!==null){var r=ot();zt(n,e,t,r)}xu(e,t)}};o2=function(){return se};l2=function(e,t){var n=se;try{return se=e,t()}finally{se=n}};Ni=function(e,t,n){switch(t){case"input":if(bi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=as(r);if(!l)throw Error(D(90));Ap(r),bi(r,l)}}}break;case"textarea":Bp(e,n);break;case"select":t=n.value,t!=null&&Hr(e,!!n.multiple,t,!1)}};Vp=du;Zp=mr;var o6={usingClientEntryPoint:!1,Events:[Sl,Dr,as,Hp,Wp,du]},wo={findFiberByHostInstance:lr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},l6={bundleType:wo.bundleType,version:wo.version,rendererPackageName:wo.rendererPackageName,rendererConfig:wo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:fn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Yp(e),e===null?null:e.stateNode},findFiberByHostInstance:wo.findFiberByHostInstance||n6,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ra=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ra.isDisabled&&ra.supportsFiber)try{ns=ra.inject(l6),Gt=ra}catch{}}yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=o6;yt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vu(t))throw Error(D(200));return t6(e,t,null,n)};yt.createRoot=function(e,t){if(!vu(e))throw Error(D(299));var n=!1,r="",l=Ef;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=mu(e,1,!1,null,null,n,!1,r,l),e[cn]=t.current,sl(e.nodeType===8?e.parentNode:e),new gu(t)};yt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(D(188)):(e=Object.keys(e).join(","),Error(D(268,e)));return e=Yp(t),e=e===null?null:e.stateNode,e};yt.flushSync=function(e){return mr(e)};yt.hydrate=function(e,t,n){if(!ms(t))throw Error(D(200));return xs(null,e,t,!0,n)};yt.hydrateRoot=function(e,t,n){if(!vu(e))throw Error(D(405));var r=n!=null&&n.hydratedSources||null,l=!1,a="",s=Ef;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Lf(t,null,e,1,n??null,l,!1,a,s),e[cn]=t.current,sl(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new hs(t)};yt.render=function(e,t,n){if(!ms(t))throw Error(D(200));return xs(null,e,t,!1,n)};yt.unmountComponentAtNode=function(e){if(!ms(e))throw Error(D(40));return e._reactRootContainer?(mr(function(){xs(null,null,e,!1,function(){e._reactRootContainer=null,e[cn]=null})}),!0):!1};yt.unstable_batchedUpdates=du;yt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ms(n))throw Error(D(200));if(e==null||e._reactInternals===void 0)throw Error(D(38));return xs(e,t,n,!1,r)};yt.version="18.2.0-next-9e3b772b8-20220608";function Nf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Nf)}catch(e){console.error(e)}}Nf(),Tp.exports=yt;var a6=Tp.exports,C1=a6;xi.createRoot=C1.createRoot,xi.hydrateRoot=C1.hydrateRoot;function s6(e,t){if(e==null)return{};var n={},r=Object.keys(e),l,a;for(a=0;a<r.length;a++)l=r[a],!(t.indexOf(l)>=0)&&(n[l]=e[l]);return n}function i6(e,t){if(e==null)return{};var n=s6(e,t),r,l;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)r=a[l],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function cc(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function c6(e){if(Array.isArray(e))return cc(e)}function u6(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function d6(e,t){if(e){if(typeof e=="string")return cc(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return cc(e,t)}}function p6(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function f6(e){return c6(e)||u6(e)||d6(e)||p6()}function xl(e){"@babel/helpers - typeof";return xl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},xl(e)}function h6(e,t){if(xl(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(xl(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function m6(e){var t=h6(e,"string");return xl(t)==="symbol"?t:String(t)}function Of(e,t,n){return t=m6(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function uc(){return uc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},uc.apply(this,arguments)}function j1(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),n.push.apply(n,r)}return n}function Fr(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?j1(Object(n),!0).forEach(function(r){Of(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j1(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function x6(e){var t=e.length;if(t===0||t===1)return e;if(t===2)return[e[0],e[1],"".concat(e[0],".").concat(e[1]),"".concat(e[1],".").concat(e[0])];if(t===3)return[e[0],e[1],e[2],"".concat(e[0],".").concat(e[1]),"".concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[0]),"".concat(e[1],".").concat(e[2]),"".concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[1],".").concat(e[0])];if(t>=4)return[e[0],e[1],e[2],e[3],"".concat(e[0],".").concat(e[1]),"".concat(e[0],".").concat(e[2]),"".concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[0]),"".concat(e[1],".").concat(e[2]),"".concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[1]),"".concat(e[2],".").concat(e[3]),"".concat(e[3],".").concat(e[0]),"".concat(e[3],".").concat(e[1]),"".concat(e[3],".").concat(e[2]),"".concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[1],".").concat(e[3]),"".concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[2],".").concat(e[3]),"".concat(e[0],".").concat(e[3],".").concat(e[1]),"".concat(e[0],".").concat(e[3],".").concat(e[2]),"".concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[1],".").concat(e[2],".").concat(e[3]),"".concat(e[1],".").concat(e[3],".").concat(e[0]),"".concat(e[1],".").concat(e[3],".").concat(e[2]),"".concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[0],".").concat(e[3]),"".concat(e[2],".").concat(e[1],".").concat(e[0]),"".concat(e[2],".").concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[3],".").concat(e[0]),"".concat(e[2],".").concat(e[3],".").concat(e[1]),"".concat(e[3],".").concat(e[0],".").concat(e[1]),"".concat(e[3],".").concat(e[0],".").concat(e[2]),"".concat(e[3],".").concat(e[1],".").concat(e[0]),"".concat(e[3],".").concat(e[1],".").concat(e[2]),"".concat(e[3],".").concat(e[2],".").concat(e[0]),"".concat(e[3],".").concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[1],".").concat(e[2],".").concat(e[3]),"".concat(e[0],".").concat(e[1],".").concat(e[3],".").concat(e[2]),"".concat(e[0],".").concat(e[2],".").concat(e[1],".").concat(e[3]),"".concat(e[0],".").concat(e[2],".").concat(e[3],".").concat(e[1]),"".concat(e[0],".").concat(e[3],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[3],".").concat(e[2],".").concat(e[1]),"".concat(e[1],".").concat(e[0],".").concat(e[2],".").concat(e[3]),"".concat(e[1],".").concat(e[0],".").concat(e[3],".").concat(e[2]),"".concat(e[1],".").concat(e[2],".").concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[2],".").concat(e[3],".").concat(e[0]),"".concat(e[1],".").concat(e[3],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[3],".").concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[0],".").concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[0],".").concat(e[3],".").concat(e[1]),"".concat(e[2],".").concat(e[1],".").concat(e[0],".").concat(e[3]),"".concat(e[2],".").concat(e[1],".").concat(e[3],".").concat(e[0]),"".concat(e[2],".").concat(e[3],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[3],".").concat(e[1],".").concat(e[0]),"".concat(e[3],".").concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[3],".").concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[3],".").concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[3],".").concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[3],".").concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[3],".").concat(e[2],".").concat(e[1],".").concat(e[0])]}var ai={};function g6(e){if(e.length===0||e.length===1)return e;var t=e.join(".");return ai[t]||(ai[t]=x6(e)),ai[t]}function v6(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,r=e.filter(function(a){return a!=="token"}),l=g6(r);return l.reduce(function(a,s){return Fr(Fr({},a),n[s])},t)}function S1(e){return e.join(" ")}function y6(e,t){var n=0;return function(r){return n+=1,r.map(function(l,a){return Rf({node:l,stylesheet:e,useInlineStyles:t,key:"code-segment-".concat(n,"-").concat(a)})})}}function Rf(e){var t=e.node,n=e.stylesheet,r=e.style,l=r===void 0?{}:r,a=e.useInlineStyles,s=e.key,i=t.properties,c=t.type,u=t.tagName,d=t.value;if(c==="text")return d;if(u){var x=y6(n,a),m;if(!a)m=Fr(Fr({},i),{},{className:S1(i.className)});else{var j=Object.keys(n).reduce(function(g,p){return p.split(".").forEach(function(h){g.includes(h)||g.push(h)}),g},[]),y=i.className&&i.className.includes("token")?["token"]:[],S=i.className&&y.concat(i.className.filter(function(g){return!j.includes(g)}));m=Fr(Fr({},i),{},{className:S1(S)||void 0,style:v6(i.className,Object.assign({},i.style,l),n)})}var E=x(t.children);return Ge.createElement(u,uc({key:s},m),E)}}const C6=function(e,t){var n=e.listLanguages();return n.indexOf(t)!==-1};var j6=["language","children","style","customStyle","codeTagProps","useInlineStyles","showLineNumbers","showInlineLineNumbers","startingLineNumber","lineNumberContainerStyle","lineNumberStyle","wrapLines","wrapLongLines","lineProps","renderer","PreTag","CodeTag","code","astGenerator"];function b1(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),n.push.apply(n,r)}return n}function Vt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?b1(Object(n),!0).forEach(function(r){Of(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b1(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var S6=/\n/g;function b6(e){return e.match(S6)}function w6(e){var t=e.lines,n=e.startingLineNumber,r=e.style;return t.map(function(l,a){var s=a+n;return Ge.createElement("span",{key:"line-".concat(a),className:"react-syntax-highlighter-line-number",style:typeof r=="function"?r(s):r},"".concat(s,`
`))})}function _6(e){var t=e.codeString,n=e.codeStyle,r=e.containerStyle,l=r===void 0?{float:"left",paddingRight:"10px"}:r,a=e.numberStyle,s=a===void 0?{}:a,i=e.startingLineNumber;return Ge.createElement("code",{style:Object.assign({},n,l)},w6({lines:t.replace(/\n$/,"").split(`
`),style:s,startingLineNumber:i}))}function k6(e){return"".concat(e.toString().length,".25em")}function Mf(e,t){return{type:"element",tagName:"span",properties:{key:"line-number--".concat(e),className:["comment","linenumber","react-syntax-highlighter-line-number"],style:t},children:[{type:"text",value:e}]}}function Df(e,t,n){var r={display:"inline-block",minWidth:k6(n),paddingRight:"1em",textAlign:"right",userSelect:"none"},l=typeof e=="function"?e(t):e,a=Vt(Vt({},r),l);return a}function ba(e){var t=e.children,n=e.lineNumber,r=e.lineNumberStyle,l=e.largestLineNumber,a=e.showInlineLineNumbers,s=e.lineProps,i=s===void 0?{}:s,c=e.className,u=c===void 0?[]:c,d=e.showLineNumbers,x=e.wrapLongLines,m=typeof i=="function"?i(n):i;if(m.className=u,n&&a){var j=Df(r,n,l);t.unshift(Mf(n,j))}return x&d&&(m.style=Vt(Vt({},m.style),{},{display:"flex"})),{type:"element",tagName:"span",properties:m,children:t}}function Pf(e){for(var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],r=0;r<e.length;r++){var l=e[r];if(l.type==="text")n.push(ba({children:[l],className:f6(new Set(t))}));else if(l.children){var a=t.concat(l.properties.className);Pf(l.children,a).forEach(function(s){return n.push(s)})}}return n}function T6(e,t,n,r,l,a,s,i,c){var u,d=Pf(e.value),x=[],m=-1,j=0;function y(v,C){var b=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return ba({children:v,lineNumber:C,lineNumberStyle:i,largestLineNumber:s,showInlineLineNumbers:l,lineProps:n,className:b,showLineNumbers:r,wrapLongLines:c})}function S(v,C){if(r&&C&&l){var b=Df(i,C,s);v.unshift(Mf(C,b))}return v}function E(v,C){var b=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return t||b.length>0?y(v,C,b):S(v,C)}for(var g=function(){var C=d[j],b=C.children[0].value,T=b6(b);if(T){var L=b.split(`
`);L.forEach(function(P,U){var X=r&&x.length+a,ae={type:"text",value:"".concat(P,`
`)};if(U===0){var ye=d.slice(m+1,j).concat(ba({children:[ae],className:C.properties.className})),J=E(ye,X);x.push(J)}else if(U===L.length-1){var ue=d[j+1]&&d[j+1].children&&d[j+1].children[0],ge={type:"text",value:"".concat(P)};if(ue){var O=ba({children:[ge],className:C.properties.className});d.splice(j+1,0,O)}else{var A=[ge],$=E(A,X,C.properties.className);x.push($)}}else{var z=[ae],K=E(z,X,C.properties.className);x.push(K)}}),m=j}j++};j<d.length;)g();if(m!==d.length-1){var p=d.slice(m+1,d.length);if(p&&p.length){var h=r&&x.length+a,f=E(p,h);x.push(f)}}return t?x:(u=[]).concat.apply(u,x)}function L6(e){var t=e.rows,n=e.stylesheet,r=e.useInlineStyles;return t.map(function(l,a){return Rf({node:l,stylesheet:n,useInlineStyles:r,key:"code-segement".concat(a)})})}function Af(e){return e&&typeof e.highlightAuto<"u"}function E6(e){var t=e.astGenerator,n=e.language,r=e.code,l=e.defaultCodeValue;if(Af(t)){var a=C6(t,n);return n==="text"?{value:l,language:"text"}:a?t.highlight(n,r):t.highlightAuto(r)}try{return n&&n!=="text"?{value:t.highlight(r,n)}:{value:l}}catch{return{value:l}}}function N6(e,t){return function(r){var l=r.language,a=r.children,s=r.style,i=s===void 0?t:s,c=r.customStyle,u=c===void 0?{}:c,d=r.codeTagProps,x=d===void 0?{className:l?"language-".concat(l):void 0,style:Vt(Vt({},i['code[class*="language-"]']),i['code[class*="language-'.concat(l,'"]')])}:d,m=r.useInlineStyles,j=m===void 0?!0:m,y=r.showLineNumbers,S=y===void 0?!1:y,E=r.showInlineLineNumbers,g=E===void 0?!0:E,p=r.startingLineNumber,h=p===void 0?1:p,f=r.lineNumberContainerStyle,v=r.lineNumberStyle,C=v===void 0?{}:v,b=r.wrapLines,T=r.wrapLongLines,L=T===void 0?!1:T,P=r.lineProps,U=P===void 0?{}:P,X=r.renderer,ae=r.PreTag,ye=ae===void 0?"pre":ae,J=r.CodeTag,ue=J===void 0?"code":J,ge=r.code,O=ge===void 0?(Array.isArray(a)?a[0]:a)||"":ge,A=r.astGenerator,$=i6(r,j6);A=A||e;var z=S?Ge.createElement(_6,{containerStyle:f,codeStyle:x.style||{},numberStyle:C,startingLineNumber:h,codeString:O}):null,K=i.hljs||i['pre[class*="language-"]']||{backgroundColor:"#fff"},Ae=Af(A)?"hljs":"prismjs",le=j?Object.assign({},$,{style:Object.assign({},K,u)}):Object.assign({},$,{className:$.className?"".concat(Ae," ").concat($.className):Ae,style:Object.assign({},u)});if(L?x.style=Vt(Vt({},x.style),{},{whiteSpace:"pre-wrap"}):x.style=Vt(Vt({},x.style),{},{whiteSpace:"pre"}),!A)return Ge.createElement(ye,le,z,Ge.createElement(ue,x,O));(b===void 0&&X||L)&&(b=!0),X=X||L6;var $e=[{type:"text",value:O}],Te=E6({astGenerator:A,language:l,code:O,defaultCodeValue:$e});Te.language===null&&(Te.value=$e);var Ve=Te.value.length+h,qn=T6(Te,b,U,S,g,h,Ve,C,L);return Ge.createElement(ye,le,Ge.createElement(ue,x,!g&&z,X({rows:qn,stylesheet:i,useInlineStyles:j})))}}var O6=M6,R6=Object.prototype.hasOwnProperty;function M6(){for(var e={},t=0;t<arguments.length;t++){var n=arguments[t];for(var r in n)R6.call(n,r)&&(e[r]=n[r])}return e}var $f=Bf,yu=Bf.prototype;yu.space=null;yu.normal={};yu.property={};function Bf(e,t,n){this.property=e,this.normal=t,n&&(this.space=n)}var w1=O6,D6=$f,P6=A6;function A6(e){for(var t=e.length,n=[],r=[],l=-1,a,s;++l<t;)a=e[l],n.push(a.property),r.push(a.normal),s=a.space;return new D6(w1.apply(null,n),w1.apply(null,r),s)}var Cu=$6;function $6(e){return e.toLowerCase()}var If=zf,Nt=zf.prototype;Nt.space=null;Nt.attribute=null;Nt.property=null;Nt.boolean=!1;Nt.booleanish=!1;Nt.overloadedBoolean=!1;Nt.number=!1;Nt.commaSeparated=!1;Nt.spaceSeparated=!1;Nt.commaOrSpaceSeparated=!1;Nt.mustUseProperty=!1;Nt.defined=!1;function zf(e,t){this.property=e,this.attribute=t}var Yt={},B6=0;Yt.boolean=Cr();Yt.booleanish=Cr();Yt.overloadedBoolean=Cr();Yt.number=Cr();Yt.spaceSeparated=Cr();Yt.commaSeparated=Cr();Yt.commaOrSpaceSeparated=Cr();function Cr(){return Math.pow(2,++B6)}var Ff=If,_1=Yt,Uf=ju;ju.prototype=new Ff;ju.prototype.defined=!0;var Hf=["boolean","booleanish","overloadedBoolean","number","commaSeparated","spaceSeparated","commaOrSpaceSeparated"],I6=Hf.length;function ju(e,t,n,r){var l=-1,a;for(k1(this,"space",r),Ff.call(this,e,t);++l<I6;)a=Hf[l],k1(this,a,(n&_1[a])===_1[a])}function k1(e,t,n){n&&(e[t]=n)}var T1=Cu,z6=$f,F6=Uf,wl=U6;function U6(e){var t=e.space,n=e.mustUseProperty||[],r=e.attributes||{},l=e.properties,a=e.transform,s={},i={},c,u;for(c in l)u=new F6(c,a(r,c),l[c],t),n.indexOf(c)!==-1&&(u.mustUseProperty=!0),s[c]=u,i[T1(c)]=c,i[T1(u.attribute)]=c;return new z6(s,i,t)}var H6=wl,W6=H6({space:"xlink",transform:V6,properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}});function V6(e,t){return"xlink:"+t.slice(5).toLowerCase()}var Z6=wl,G6=Z6({space:"xml",transform:K6,properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function K6(e,t){return"xml:"+t.slice(3).toLowerCase()}var Y6=Q6;function Q6(e,t){return t in e?e[t]:t}var X6=Y6,Wf=q6;function q6(e,t){return X6(e,t.toLowerCase())}var J6=wl,ex=Wf,tx=J6({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:ex,properties:{xmlns:null,xmlnsXLink:null}}),Su=Yt,nx=wl,it=Su.booleanish,jt=Su.number,nr=Su.spaceSeparated,rx=nx({transform:ox,properties:{ariaActiveDescendant:null,ariaAtomic:it,ariaAutoComplete:null,ariaBusy:it,ariaChecked:it,ariaColCount:jt,ariaColIndex:jt,ariaColSpan:jt,ariaControls:nr,ariaCurrent:null,ariaDescribedBy:nr,ariaDetails:null,ariaDisabled:it,ariaDropEffect:nr,ariaErrorMessage:null,ariaExpanded:it,ariaFlowTo:nr,ariaGrabbed:it,ariaHasPopup:null,ariaHidden:it,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:nr,ariaLevel:jt,ariaLive:null,ariaModal:it,ariaMultiLine:it,ariaMultiSelectable:it,ariaOrientation:null,ariaOwns:nr,ariaPlaceholder:null,ariaPosInSet:jt,ariaPressed:it,ariaReadOnly:it,ariaRelevant:null,ariaRequired:it,ariaRoleDescription:nr,ariaRowCount:jt,ariaRowIndex:jt,ariaRowSpan:jt,ariaSelected:it,ariaSetSize:jt,ariaSort:null,ariaValueMax:jt,ariaValueMin:jt,ariaValueNow:jt,ariaValueText:null,role:null}});function ox(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}var so=Yt,lx=wl,ax=Wf,ee=so.boolean,sx=so.overloadedBoolean,_o=so.booleanish,he=so.number,tt=so.spaceSeparated,oa=so.commaSeparated,ix=lx({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:ax,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:oa,acceptCharset:tt,accessKey:tt,action:null,allow:null,allowFullScreen:ee,allowPaymentRequest:ee,allowUserMedia:ee,alt:null,as:null,async:ee,autoCapitalize:null,autoComplete:tt,autoFocus:ee,autoPlay:ee,capture:ee,charSet:null,checked:ee,cite:null,className:tt,cols:he,colSpan:null,content:null,contentEditable:_o,controls:ee,controlsList:tt,coords:he|oa,crossOrigin:null,data:null,dateTime:null,decoding:null,default:ee,defer:ee,dir:null,dirName:null,disabled:ee,download:sx,draggable:_o,encType:null,enterKeyHint:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:ee,formTarget:null,headers:tt,height:he,hidden:ee,high:he,href:null,hrefLang:null,htmlFor:tt,httpEquiv:tt,id:null,imageSizes:null,imageSrcSet:oa,inputMode:null,integrity:null,is:null,isMap:ee,itemId:null,itemProp:tt,itemRef:tt,itemScope:ee,itemType:tt,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:ee,low:he,manifest:null,max:null,maxLength:he,media:null,method:null,min:null,minLength:he,multiple:ee,muted:ee,name:null,nonce:null,noModule:ee,noValidate:ee,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforePrint:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextMenu:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:ee,optimum:he,pattern:null,ping:tt,placeholder:null,playsInline:ee,poster:null,preload:null,readOnly:ee,referrerPolicy:null,rel:tt,required:ee,reversed:ee,rows:he,rowSpan:he,sandbox:tt,scope:null,scoped:ee,seamless:ee,selected:ee,shape:null,size:he,sizes:null,slot:null,span:he,spellCheck:_o,src:null,srcDoc:null,srcLang:null,srcSet:oa,start:he,step:null,style:null,tabIndex:he,target:null,title:null,translate:null,type:null,typeMustMatch:ee,useMap:null,value:_o,width:he,wrap:null,align:null,aLink:null,archive:tt,axis:null,background:null,bgColor:null,border:he,borderColor:null,bottomMargin:he,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:ee,declare:ee,event:null,face:null,frame:null,frameBorder:null,hSpace:he,leftMargin:he,link:null,longDesc:null,lowSrc:null,marginHeight:he,marginWidth:he,noResize:ee,noHref:ee,noShade:ee,noWrap:ee,object:null,profile:null,prompt:null,rev:null,rightMargin:he,rules:null,scheme:null,scrolling:_o,standby:null,summary:null,text:null,topMargin:he,valueType:null,version:null,vAlign:null,vLink:null,vSpace:he,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:ee,disableRemotePlayback:ee,prefix:null,property:null,results:he,security:null,unselectable:null}}),cx=P6,ux=W6,dx=G6,px=tx,fx=rx,hx=ix,mx=cx([dx,ux,px,fx,hx]),xx=Cu,gx=Uf,vx=If,bu="data",yx=Sx,Cx=/^data[-\w.:]+$/i,Vf=/-[a-z]/g,jx=/[A-Z]/g;function Sx(e,t){var n=xx(t),r=t,l=vx;return n in e.normal?e.property[e.normal[n]]:(n.length>4&&n.slice(0,4)===bu&&Cx.test(t)&&(t.charAt(4)==="-"?r=bx(t):t=wx(t),l=gx),new l(r,t))}function bx(e){var t=e.slice(5).replace(Vf,kx);return bu+t.charAt(0).toUpperCase()+t.slice(1)}function wx(e){var t=e.slice(4);return Vf.test(t)?e:(t=t.replace(jx,_x),t.charAt(0)!=="-"&&(t="-"+t),bu+t)}function _x(e){return"-"+e.toLowerCase()}function kx(e){return e.charAt(1).toUpperCase()}var Tx=Lx,L1=/[#.]/g;function Lx(e,t){for(var n=e||"",r=t||"div",l={},a=0,s,i,c;a<n.length;)L1.lastIndex=a,c=L1.exec(n),s=n.slice(a,c?c.index:n.length),s&&(i?i==="#"?l.id=s:l.className?l.className.push(s):l.className=[s]:r=s,a+=s.length),c&&(i=c[0],a++);return{type:"element",tagName:r,properties:l,children:[]}}var wu={};wu.parse=Ox;wu.stringify=Rx;var E1="",Ex=" ",Nx=/[ \t\n\r\f]+/g;function Ox(e){var t=String(e||E1).trim();return t===E1?[]:t.split(Nx)}function Rx(e){return e.join(Ex).trim()}var _u={};_u.parse=Mx;_u.stringify=Dx;var dc=",",N1=" ",Do="";function Mx(e){for(var t=[],n=String(e||Do),r=n.indexOf(dc),l=0,a=!1,s;!a;)r===-1&&(r=n.length,a=!0),s=n.slice(l,r).trim(),(s||!a)&&t.push(s),l=r+1,r=n.indexOf(dc,l);return t}function Dx(e,t){var n=t||{},r=n.padLeft===!1?Do:N1,l=n.padRight?N1:Do;return e[e.length-1]===Do&&(e=e.concat(Do)),e.join(l+dc+r).trim()}var Px=yx,O1=Cu,Ax=Tx,R1=wu.parse,M1=_u.parse,$x=Ix,Bx={}.hasOwnProperty;function Ix(e,t,n){var r=n?Wx(n):null;return l;function l(s,i){var c=Ax(s,t),u=Array.prototype.slice.call(arguments,2),d=c.tagName.toLowerCase(),x;if(c.tagName=r&&Bx.call(r,d)?r[d]:d,i&&zx(i,c)&&(u.unshift(i),i=null),i)for(x in i)a(c.properties,x,i[x]);return Zf(c.children,u),c.tagName==="template"&&(c.content={type:"root",children:c.children},c.children=[]),c}function a(s,i,c){var u,d,x;c==null||c!==c||(u=Px(e,i),d=u.property,x=c,typeof x=="string"&&(u.spaceSeparated?x=R1(x):u.commaSeparated?x=M1(x):u.commaOrSpaceSeparated&&(x=R1(M1(x).join(" ")))),d==="style"&&typeof c!="string"&&(x=Hx(x)),d==="className"&&s.className&&(x=s.className.concat(x)),s[d]=Ux(u,d,x))}}function zx(e,t){return typeof e=="string"||"length"in e||Fx(t.tagName,e)}function Fx(e,t){var n=t.type;return e==="input"||!n||typeof n!="string"?!1:typeof t.children=="object"&&"length"in t.children?!0:(n=n.toLowerCase(),e==="button"?n!=="menu"&&n!=="submit"&&n!=="reset"&&n!=="button":"value"in t)}function Zf(e,t){var n,r;if(typeof t=="string"||typeof t=="number"){e.push({type:"text",value:String(t)});return}if(typeof t=="object"&&"length"in t){for(n=-1,r=t.length;++n<r;)Zf(e,t[n]);return}if(typeof t!="object"||!("type"in t))throw new Error("Expected node, nodes, or string, got `"+t+"`");e.push(t)}function Ux(e,t,n){var r,l,a;if(typeof n!="object"||!("length"in n))return D1(e,t,n);for(l=n.length,r=-1,a=[];++r<l;)a[r]=D1(e,t,n[r]);return a}function D1(e,t,n){var r=n;return e.number||e.positiveNumber?!isNaN(r)&&r!==""&&(r=Number(r)):(e.boolean||e.overloadedBoolean)&&typeof r=="string"&&(r===""||O1(n)===O1(t))&&(r=!0),r}function Hx(e){var t=[],n;for(n in e)t.push([n,e[n]].join(": "));return t.join("; ")}function Wx(e){for(var t=e.length,n=-1,r={},l;++n<t;)l=e[n],r[l.toLowerCase()]=l;return r}var Vx=mx,Zx=$x,Gf=Zx(Vx,"div");Gf.displayName="html";var Gx=Gf,Kx=Gx;const Yx="Æ",Qx="&",Xx="Á",qx="Â",Jx="À",eg="Å",tg="Ã",ng="Ä",rg="©",og="Ç",lg="Ð",ag="É",sg="Ê",ig="È",cg="Ë",ug=">",dg="Í",pg="Î",fg="Ì",hg="Ï",mg="<",xg="Ñ",gg="Ó",vg="Ô",yg="Ò",Cg="Ø",jg="Õ",Sg="Ö",bg='"',wg="®",_g="Þ",kg="Ú",Tg="Û",Lg="Ù",Eg="Ü",Ng="Ý",Og="á",Rg="â",Mg="´",Dg="æ",Pg="à",Ag="&",$g="å",Bg="ã",Ig="ä",zg="¦",Fg="ç",Ug="¸",Hg="¢",Wg="©",Vg="¤",Zg="°",Gg="÷",Kg="é",Yg="ê",Qg="è",Xg="ð",qg="ë",Jg="½",e8="¼",t8="¾",n8=">",r8="í",o8="î",l8="¡",a8="ì",s8="¿",i8="ï",c8="«",u8="<",d8="¯",p8="µ",f8="·",h8=" ",m8="¬",x8="ñ",g8="ó",v8="ô",y8="ò",C8="ª",j8="º",S8="ø",b8="õ",w8="ö",_8="¶",k8="±",T8="£",L8='"',E8="»",N8="®",O8="§",R8="­",M8="¹",D8="²",P8="³",A8="ß",$8="þ",B8="×",I8="ú",z8="û",F8="ù",U8="¨",H8="ü",W8="ý",V8="¥",Z8="ÿ",G8={AElig:Yx,AMP:Qx,Aacute:Xx,Acirc:qx,Agrave:Jx,Aring:eg,Atilde:tg,Auml:ng,COPY:rg,Ccedil:og,ETH:lg,Eacute:ag,Ecirc:sg,Egrave:ig,Euml:cg,GT:ug,Iacute:dg,Icirc:pg,Igrave:fg,Iuml:hg,LT:mg,Ntilde:xg,Oacute:gg,Ocirc:vg,Ograve:yg,Oslash:Cg,Otilde:jg,Ouml:Sg,QUOT:bg,REG:wg,THORN:_g,Uacute:kg,Ucirc:Tg,Ugrave:Lg,Uuml:Eg,Yacute:Ng,aacute:Og,acirc:Rg,acute:Mg,aelig:Dg,agrave:Pg,amp:Ag,aring:$g,atilde:Bg,auml:Ig,brvbar:zg,ccedil:Fg,cedil:Ug,cent:Hg,copy:Wg,curren:Vg,deg:Zg,divide:Gg,eacute:Kg,ecirc:Yg,egrave:Qg,eth:Xg,euml:qg,frac12:Jg,frac14:e8,frac34:t8,gt:n8,iacute:r8,icirc:o8,iexcl:l8,igrave:a8,iquest:s8,iuml:i8,laquo:c8,lt:u8,macr:d8,micro:p8,middot:f8,nbsp:h8,not:m8,ntilde:x8,oacute:g8,ocirc:v8,ograve:y8,ordf:C8,ordm:j8,oslash:S8,otilde:b8,ouml:w8,para:_8,plusmn:k8,pound:T8,quot:L8,raquo:E8,reg:N8,sect:O8,shy:R8,sup1:M8,sup2:D8,sup3:P8,szlig:A8,thorn:$8,times:B8,uacute:I8,ucirc:z8,ugrave:F8,uml:U8,uuml:H8,yacute:W8,yen:V8,yuml:Z8},K8={0:"�",128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"};var Kf=Y8;function Y8(e){var t=typeof e=="string"?e.charCodeAt(0):e;return t>=48&&t<=57}var Q8=X8;function X8(e){var t=typeof e=="string"?e.charCodeAt(0):e;return t>=97&&t<=102||t>=65&&t<=70||t>=48&&t<=57}var q8=J8;function J8(e){var t=typeof e=="string"?e.charCodeAt(0):e;return t>=97&&t<=122||t>=65&&t<=90}var e7=q8,t7=Kf,n7=r7;function r7(e){return e7(e)||t7(e)}var la,o7=59,l7=a7;function a7(e){var t="&"+e+";",n;return la=la||document.createElement("i"),la.innerHTML=t,n=la.textContent,n.charCodeAt(n.length-1)===o7&&e!=="semi"||n===t?!1:n}var P1=G8,A1=K8,s7=Kf,i7=Q8,Yf=n7,c7=l7,u7=b7,d7={}.hasOwnProperty,Tr=String.fromCharCode,p7=Function.prototype,$1={warning:null,reference:null,text:null,warningContext:null,referenceContext:null,textContext:null,position:{},additional:null,attribute:!1,nonTerminated:!0},f7=9,B1=10,h7=12,m7=32,I1=38,x7=59,g7=60,v7=61,y7=35,C7=88,j7=120,S7=65533,Lr="named",ku="hexadecimal",Tu="decimal",Lu={};Lu[ku]=16;Lu[Tu]=10;var gs={};gs[Lr]=Yf;gs[Tu]=s7;gs[ku]=i7;var Qf=1,Xf=2,qf=3,Jf=4,eh=5,pc=6,th=7,Kn={};Kn[Qf]="Named character references must be terminated by a semicolon";Kn[Xf]="Numeric character references must be terminated by a semicolon";Kn[qf]="Named character references cannot be empty";Kn[Jf]="Numeric character references cannot be empty";Kn[eh]="Named character references must be known";Kn[pc]="Numeric character references cannot be disallowed";Kn[th]="Numeric character references cannot be outside the permissible Unicode range";function b7(e,t){var n={},r,l;t||(t={});for(l in $1)r=t[l],n[l]=r??$1[l];return(n.position.indent||n.position.start)&&(n.indent=n.position.indent||[],n.position=n.position.start),w7(e,n)}function w7(e,t){var n=t.additional,r=t.nonTerminated,l=t.text,a=t.reference,s=t.warning,i=t.textContext,c=t.referenceContext,u=t.warningContext,d=t.position,x=t.indent||[],m=e.length,j=0,y=-1,S=d.column||1,E=d.line||1,g="",p=[],h,f,v,C,b,T,L,P,U,X,ae,ye,J,ue,ge,O,A,$,z;for(typeof n=="string"&&(n=n.charCodeAt(0)),O=K(),P=s?Ae:p7,j--,m++;++j<m;)if(b===B1&&(S=x[y]||1),b=e.charCodeAt(j),b===I1){if(L=e.charCodeAt(j+1),L===f7||L===B1||L===h7||L===m7||L===I1||L===g7||L!==L||n&&L===n){g+=Tr(b),S++;continue}for(J=j+1,ye=J,z=J,L===y7?(z=++ye,L=e.charCodeAt(z),L===C7||L===j7?(ue=ku,z=++ye):ue=Tu):ue=Lr,h="",ae="",C="",ge=gs[ue],z--;++z<m&&(L=e.charCodeAt(z),!!ge(L));)C+=Tr(L),ue===Lr&&d7.call(P1,C)&&(h=C,ae=P1[C]);v=e.charCodeAt(z)===x7,v&&(z++,f=ue===Lr?c7(C):!1,f&&(h=C,ae=f)),$=1+z-J,!v&&!r||(C?ue===Lr?(v&&!ae?P(eh,1):(h!==C&&(z=ye+h.length,$=1+z-ye,v=!1),v||(U=h?Qf:qf,t.attribute?(L=e.charCodeAt(z),L===v7?(P(U,$),ae=null):Yf(L)?ae=null:P(U,$)):P(U,$))),T=ae):(v||P(Xf,$),T=parseInt(C,Lu[ue]),_7(T)?(P(th,$),T=Tr(S7)):T in A1?(P(pc,$),T=A1[T]):(X="",k7(T)&&P(pc,$),T>65535&&(T-=65536,X+=Tr(T>>>10|55296),T=56320|T&1023),T=X+Tr(T))):ue!==Lr&&P(Jf,$)),T?(le(),O=K(),j=z-1,S+=z-J+1,p.push(T),A=K(),A.offset++,a&&a.call(c,T,{start:O,end:A},e.slice(J-1,z)),O=A):(C=e.slice(J-1,z),g+=C,S+=C.length,j=z-1)}else b===10&&(E++,y++,S=0),b===b?(g+=Tr(b),S++):le();return p.join("");function K(){return{line:E,column:S,offset:j+(d.offset||0)}}function Ae($e,Te){var Ve=K();Ve.column+=Te,Ve.offset+=Te,s.call(u,Kn[$e],Ve,$e)}function le(){g&&(p.push(g),l&&l.call(i,g,{start:O,end:K()}),g="")}}function _7(e){return e>=55296&&e<=57343||e>1114111}function k7(e){return e>=1&&e<=8||e===11||e>=13&&e<=31||e>=127&&e<=159||e>=64976&&e<=65007||(e&65535)===65535||(e&65535)===65534}var nh={exports:{}};(function(e){var t=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=function(r){var l=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,a=0,s={},i={manual:r.Prism&&r.Prism.manual,disableWorkerMessageHandler:r.Prism&&r.Prism.disableWorkerMessageHandler,util:{encode:function p(h){return h instanceof c?new c(h.type,p(h.content),h.alias):Array.isArray(h)?h.map(p):h.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(p){return Object.prototype.toString.call(p).slice(8,-1)},objId:function(p){return p.__id||Object.defineProperty(p,"__id",{value:++a}),p.__id},clone:function p(h,f){f=f||{};var v,C;switch(i.util.type(h)){case"Object":if(C=i.util.objId(h),f[C])return f[C];v={},f[C]=v;for(var b in h)h.hasOwnProperty(b)&&(v[b]=p(h[b],f));return v;case"Array":return C=i.util.objId(h),f[C]?f[C]:(v=[],f[C]=v,h.forEach(function(T,L){v[L]=p(T,f)}),v);default:return h}},getLanguage:function(p){for(;p;){var h=l.exec(p.className);if(h)return h[1].toLowerCase();p=p.parentElement}return"none"},setLanguage:function(p,h){p.className=p.className.replace(RegExp(l,"gi"),""),p.classList.add("language-"+h)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(v){var p=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(v.stack)||[])[1];if(p){var h=document.getElementsByTagName("script");for(var f in h)if(h[f].src==p)return h[f]}return null}},isActive:function(p,h,f){for(var v="no-"+h;p;){var C=p.classList;if(C.contains(h))return!0;if(C.contains(v))return!1;p=p.parentElement}return!!f}},languages:{plain:s,plaintext:s,text:s,txt:s,extend:function(p,h){var f=i.util.clone(i.languages[p]);for(var v in h)f[v]=h[v];return f},insertBefore:function(p,h,f,v){v=v||i.languages;var C=v[p],b={};for(var T in C)if(C.hasOwnProperty(T)){if(T==h)for(var L in f)f.hasOwnProperty(L)&&(b[L]=f[L]);f.hasOwnProperty(T)||(b[T]=C[T])}var P=v[p];return v[p]=b,i.languages.DFS(i.languages,function(U,X){X===P&&U!=p&&(this[U]=b)}),b},DFS:function p(h,f,v,C){C=C||{};var b=i.util.objId;for(var T in h)if(h.hasOwnProperty(T)){f.call(h,T,h[T],v||T);var L=h[T],P=i.util.type(L);P==="Object"&&!C[b(L)]?(C[b(L)]=!0,p(L,f,null,C)):P==="Array"&&!C[b(L)]&&(C[b(L)]=!0,p(L,f,T,C))}}},plugins:{},highlightAll:function(p,h){i.highlightAllUnder(document,p,h)},highlightAllUnder:function(p,h,f){var v={callback:f,container:p,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};i.hooks.run("before-highlightall",v),v.elements=Array.prototype.slice.apply(v.container.querySelectorAll(v.selector)),i.hooks.run("before-all-elements-highlight",v);for(var C=0,b;b=v.elements[C++];)i.highlightElement(b,h===!0,v.callback)},highlightElement:function(p,h,f){var v=i.util.getLanguage(p),C=i.languages[v];i.util.setLanguage(p,v);var b=p.parentElement;b&&b.nodeName.toLowerCase()==="pre"&&i.util.setLanguage(b,v);var T=p.textContent,L={element:p,language:v,grammar:C,code:T};function P(X){L.highlightedCode=X,i.hooks.run("before-insert",L),L.element.innerHTML=L.highlightedCode,i.hooks.run("after-highlight",L),i.hooks.run("complete",L),f&&f.call(L.element)}if(i.hooks.run("before-sanity-check",L),b=L.element.parentElement,b&&b.nodeName.toLowerCase()==="pre"&&!b.hasAttribute("tabindex")&&b.setAttribute("tabindex","0"),!L.code){i.hooks.run("complete",L),f&&f.call(L.element);return}if(i.hooks.run("before-highlight",L),!L.grammar){P(i.util.encode(L.code));return}if(h&&r.Worker){var U=new Worker(i.filename);U.onmessage=function(X){P(X.data)},U.postMessage(JSON.stringify({language:L.language,code:L.code,immediateClose:!0}))}else P(i.highlight(L.code,L.grammar,L.language))},highlight:function(p,h,f){var v={code:p,grammar:h,language:f};if(i.hooks.run("before-tokenize",v),!v.grammar)throw new Error('The language "'+v.language+'" has no grammar.');return v.tokens=i.tokenize(v.code,v.grammar),i.hooks.run("after-tokenize",v),c.stringify(i.util.encode(v.tokens),v.language)},tokenize:function(p,h){var f=h.rest;if(f){for(var v in f)h[v]=f[v];delete h.rest}var C=new x;return m(C,C.head,p),d(p,C,h,C.head,0),y(C)},hooks:{all:{},add:function(p,h){var f=i.hooks.all;f[p]=f[p]||[],f[p].push(h)},run:function(p,h){var f=i.hooks.all[p];if(!(!f||!f.length))for(var v=0,C;C=f[v++];)C(h)}},Token:c};r.Prism=i;function c(p,h,f,v){this.type=p,this.content=h,this.alias=f,this.length=(v||"").length|0}c.stringify=function p(h,f){if(typeof h=="string")return h;if(Array.isArray(h)){var v="";return h.forEach(function(P){v+=p(P,f)}),v}var C={type:h.type,content:p(h.content,f),tag:"span",classes:["token",h.type],attributes:{},language:f},b=h.alias;b&&(Array.isArray(b)?Array.prototype.push.apply(C.classes,b):C.classes.push(b)),i.hooks.run("wrap",C);var T="";for(var L in C.attributes)T+=" "+L+'="'+(C.attributes[L]||"").replace(/"/g,"&quot;")+'"';return"<"+C.tag+' class="'+C.classes.join(" ")+'"'+T+">"+C.content+"</"+C.tag+">"};function u(p,h,f,v){p.lastIndex=h;var C=p.exec(f);if(C&&v&&C[1]){var b=C[1].length;C.index+=b,C[0]=C[0].slice(b)}return C}function d(p,h,f,v,C,b){for(var T in f)if(!(!f.hasOwnProperty(T)||!f[T])){var L=f[T];L=Array.isArray(L)?L:[L];for(var P=0;P<L.length;++P){if(b&&b.cause==T+","+P)return;var U=L[P],X=U.inside,ae=!!U.lookbehind,ye=!!U.greedy,J=U.alias;if(ye&&!U.pattern.global){var ue=U.pattern.toString().match(/[imsuy]*$/)[0];U.pattern=RegExp(U.pattern.source,ue+"g")}for(var ge=U.pattern||U,O=v.next,A=C;O!==h.tail&&!(b&&A>=b.reach);A+=O.value.length,O=O.next){var $=O.value;if(h.length>p.length)return;if(!($ instanceof c)){var z=1,K;if(ye){if(K=u(ge,A,p,ae),!K||K.index>=p.length)break;var Te=K.index,Ae=K.index+K[0].length,le=A;for(le+=O.value.length;Te>=le;)O=O.next,le+=O.value.length;if(le-=O.value.length,A=le,O.value instanceof c)continue;for(var $e=O;$e!==h.tail&&(le<Ae||typeof $e.value=="string");$e=$e.next)z++,le+=$e.value.length;z--,$=p.slice(A,le),K.index-=A}else if(K=u(ge,0,$,ae),!K)continue;var Te=K.index,Ve=K[0],qn=$.slice(0,Te),Ce=$.slice(Te+Ve.length),qt=A+$.length;b&&qt>b.reach&&(b.reach=qt);var Jn=O.prev;qn&&(Jn=m(h,Jn,qn),A+=qn.length),j(h,Jn,z);var Ts=new c(T,X?i.tokenize(Ve,X):Ve,J,Ve);if(O=m(h,Jn,Ts),Ce&&m(h,O,Ce),z>1){var Rt={cause:T+","+P,reach:qt};d(p,h,f,O.prev,A,Rt),b&&Rt.reach>b.reach&&(b.reach=Rt.reach)}}}}}}function x(){var p={value:null,prev:null,next:null},h={value:null,prev:p,next:null};p.next=h,this.head=p,this.tail=h,this.length=0}function m(p,h,f){var v=h.next,C={value:f,prev:h,next:v};return h.next=C,v.prev=C,p.length++,C}function j(p,h,f){for(var v=h.next,C=0;C<f&&v!==p.tail;C++)v=v.next;h.next=v,v.prev=h,p.length-=C}function y(p){for(var h=[],f=p.head.next;f!==p.tail;)h.push(f.value),f=f.next;return h}if(!r.document)return r.addEventListener&&(i.disableWorkerMessageHandler||r.addEventListener("message",function(p){var h=JSON.parse(p.data),f=h.language,v=h.code,C=h.immediateClose;r.postMessage(i.highlight(v,i.languages[f],f)),C&&r.close()},!1)),i;var S=i.util.currentScript();S&&(i.filename=S.src,S.hasAttribute("data-manual")&&(i.manual=!0));function E(){i.manual||i.highlightAll()}if(!i.manual){var g=document.readyState;g==="loading"||g==="interactive"&&S&&S.defer?document.addEventListener("DOMContentLoaded",E):window.requestAnimationFrame?window.requestAnimationFrame(E):window.setTimeout(E,16)}return i}(t);e.exports&&(e.exports=n),typeof _a<"u"&&(_a.Prism=n)})(nh);var T7=nh.exports,L7=Eu;Eu.displayName="markup";Eu.aliases=["html","mathml","svg","xml","ssml","atom","rss"];function Eu(e){e.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},e.languages.markup.tag.inside["attr-value"].inside.entity=e.languages.markup.entity,e.languages.markup.doctype.inside["internal-subset"].inside=e.languages.markup,e.hooks.add("wrap",function(t){t.type==="entity"&&(t.attributes.title=t.content.value.replace(/&amp;/,"&"))}),Object.defineProperty(e.languages.markup.tag,"addInlined",{value:function(n,r){var l={};l["language-"+r]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:e.languages[r]},l.cdata=/^<!\[CDATA\[|\]\]>$/i;var a={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:l}};a["language-"+r]={pattern:/[\s\S]+/,inside:e.languages[r]};var s={};s[n]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return n}),"i"),lookbehind:!0,greedy:!0,inside:a},e.languages.insertBefore("markup","cdata",s)}}),Object.defineProperty(e.languages.markup.tag,"addAttribute",{value:function(t,n){e.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+t+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[n,"language-"+n],inside:e.languages[n]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),e.languages.html=e.languages.markup,e.languages.mathml=e.languages.markup,e.languages.svg=e.languages.markup,e.languages.xml=e.languages.extend("markup",{}),e.languages.ssml=e.languages.xml,e.languages.atom=e.languages.xml,e.languages.rss=e.languages.xml}var rh=Nu;Nu.displayName="css";Nu.aliases=[];function Nu(e){(function(t){var n=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;t.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+n.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+n.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+n.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:n,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},t.languages.css.atrule.inside.rest=t.languages.css;var r=t.languages.markup;r&&(r.tag.addInlined("style","css"),r.tag.addAttribute("style","css"))})(e)}const E7=Wn(rh);var N7=Ou;Ou.displayName="clike";Ou.aliases=[];function Ou(e){e.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/}}var O7=Ru;Ru.displayName="javascript";Ru.aliases=["js"];function Ru(e){e.languages.javascript=e.languages.extend("clike",{"class-name":[e.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),e.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,e.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:e.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:e.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:e.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:e.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:e.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),e.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:e.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),e.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),e.languages.markup&&(e.languages.markup.tag.addInlined("script","javascript"),e.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),e.languages.js=e.languages.javascript}var Po=typeof globalThis=="object"?globalThis:typeof self=="object"?self:typeof window=="object"?window:typeof _a=="object"?_a:{},R7=K7();Po.Prism={manual:!0,disableWorkerMessageHandler:!0};var M7=Kx,D7=u7,oh=T7,P7=L7,A7=rh,$7=N7,B7=O7;R7();var Mu={}.hasOwnProperty;function lh(){}lh.prototype=oh;var Pe=new lh,I7=Pe;Pe.highlight=F7;Pe.register=_l;Pe.alias=z7;Pe.registered=U7;Pe.listLanguages=H7;_l(P7);_l(A7);_l($7);_l(B7);Pe.util.encode=Z7;Pe.Token.stringify=W7;function _l(e){if(typeof e!="function"||!e.displayName)throw new Error("Expected `function` for `grammar`, got `"+e+"`");Pe.languages[e.displayName]===void 0&&e(Pe)}function z7(e,t){var n=Pe.languages,r=e,l,a,s,i;t&&(r={},r[e]=t);for(l in r)for(a=r[l],a=typeof a=="string"?[a]:a,s=a.length,i=-1;++i<s;)n[a[i]]=n[l]}function F7(e,t){var n=oh.highlight,r;if(typeof e!="string")throw new Error("Expected `string` for `value`, got `"+e+"`");if(Pe.util.type(t)==="Object")r=t,t=null;else{if(typeof t!="string")throw new Error("Expected `string` for `name`, got `"+t+"`");if(Mu.call(Pe.languages,t))r=Pe.languages[t];else throw new Error("Unknown language: `"+t+"` is not registered")}return n.call(this,e,r,t)}function U7(e){if(typeof e!="string")throw new Error("Expected `string` for `language`, got `"+e+"`");return Mu.call(Pe.languages,e)}function H7(){var e=Pe.languages,t=[],n;for(n in e)Mu.call(e,n)&&typeof e[n]=="object"&&t.push(n);return t}function W7(e,t,n){var r;return typeof e=="string"?{type:"text",value:e}:Pe.util.type(e)==="Array"?V7(e,t):(r={type:e.type,content:Pe.Token.stringify(e.content,t,n),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:n},e.alias&&(r.classes=r.classes.concat(e.alias)),Pe.hooks.run("wrap",r),M7(r.tag+"."+r.classes.join("."),G7(r.attributes),r.content))}function V7(e,t){for(var n=[],r=e.length,l=-1,a;++l<r;)a=e[l],a!==""&&a!==null&&a!==void 0&&n.push(a);for(l=-1,r=n.length;++l<r;)a=n[l],n[l]=Pe.Token.stringify(a,t,n);return n}function Z7(e){return e}function G7(e){var t;for(t in e)e[t]=D7(e[t]);return e}function K7(){var e="Prism"in Po,t=e?Po.Prism:void 0;return n;function n(){e?Po.Prism=t:delete Po.Prism,e=void 0,t=void 0}}const Du=Wn(I7);var Pu=N6(Du,{});Pu.registerLanguage=function(e,t){return Du.register(t)};Pu.alias=function(e,t){return Du.alias(e,t)};const jr=Pu;var Y7=Au;Au.displayName="bash";Au.aliases=["shell"];function Au(e){(function(t){var n="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",r={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},l={bash:r,environment:{pattern:RegExp("\\$"+n),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+n),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};t.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+n),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:l},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:r}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:l},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:l.entity}}],environment:{pattern:RegExp("\\$?"+n),alias:"constant"},variable:l.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},r.inside=t.languages.bash;for(var a=["comment","function-name","for-or-select","assign-left","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],s=l.variable[1].inside,i=0;i<a.length;i++)s[a[i]]=t.languages.bash[a[i]];t.languages.shell=t.languages.bash})(e)}const Q7=Wn(Y7);var X7=$u;$u.displayName="json";$u.aliases=["webmanifest"];function $u(e){e.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},e.languages.webmanifest=e.languages.json}const q7=Wn(X7);var J7=Bu;Bu.displayName="jsx";Bu.aliases=[];function Bu(e){(function(t){var n=t.util.clone(t.languages.javascript),r=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,l=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,a=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function s(u,d){return u=u.replace(/<S>/g,function(){return r}).replace(/<BRACES>/g,function(){return l}).replace(/<SPREAD>/g,function(){return a}),RegExp(u,d)}a=s(a).source,t.languages.jsx=t.languages.extend("markup",n),t.languages.jsx.tag.pattern=s(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),t.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,t.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,t.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,t.languages.jsx.tag.inside.comment=n.comment,t.languages.insertBefore("inside","attr-name",{spread:{pattern:s(/<SPREAD>/.source),inside:t.languages.jsx}},t.languages.jsx.tag),t.languages.insertBefore("inside","special-attr",{script:{pattern:s(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:t.languages.jsx}}},t.languages.jsx.tag);var i=function(u){return u?typeof u=="string"?u:typeof u.content=="string"?u.content:u.content.map(i).join(""):""},c=function(u){for(var d=[],x=0;x<u.length;x++){var m=u[x],j=!1;if(typeof m!="string"&&(m.type==="tag"&&m.content[0]&&m.content[0].type==="tag"?m.content[0].content[0].content==="</"?d.length>0&&d[d.length-1].tagName===i(m.content[0].content[1])&&d.pop():m.content[m.content.length-1].content==="/>"||d.push({tagName:i(m.content[0].content[1]),openedBraces:0}):d.length>0&&m.type==="punctuation"&&m.content==="{"?d[d.length-1].openedBraces++:d.length>0&&d[d.length-1].openedBraces>0&&m.type==="punctuation"&&m.content==="}"?d[d.length-1].openedBraces--:j=!0),(j||typeof m=="string")&&d.length>0&&d[d.length-1].openedBraces===0){var y=i(m);x<u.length-1&&(typeof u[x+1]=="string"||u[x+1].type==="plain-text")&&(y+=i(u[x+1]),u.splice(x+1,1)),x>0&&(typeof u[x-1]=="string"||u[x-1].type==="plain-text")&&(y=i(u[x-1])+y,u.splice(x-1,1),x--),u[x]=new t.Token("plain-text",y,null,y)}m.content&&typeof m.content!="string"&&c(m.content)}};t.hooks.add("after-tokenize",function(u){u.language!=="jsx"&&u.language!=="tsx"||c(u.tokens)})})(e)}const e9=Wn(J7);var t9=Iu;Iu.displayName="scss";Iu.aliases=[];function Iu(e){e.languages.scss=e.languages.extend("css",{comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0},atrule:{pattern:/@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,inside:{rule:/@[\w-]+/}},url:/(?:[-a-z]+-)?url(?=\()/i,selector:{pattern:/(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,inside:{parent:{pattern:/&/,alias:"important"},placeholder:/%[-\w]+/,variable:/\$[-\w]+|#\{\$[-\w]+\}/}},property:{pattern:/(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,inside:{variable:/\$[-\w]+|#\{\$[-\w]+\}/}}}),e.languages.insertBefore("scss","atrule",{keyword:[/@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i,{pattern:/( )(?:from|through)(?= )/,lookbehind:!0}]}),e.languages.insertBefore("scss","important",{variable:/\$[-\w]+|#\{\$[-\w]+\}/}),e.languages.insertBefore("scss","function",{"module-modifier":{pattern:/\b(?:as|hide|show|with)\b/i,alias:"keyword"},placeholder:{pattern:/%[-\w]+/,alias:"selector"},statement:{pattern:/\B!(?:default|optional)\b/i,alias:"keyword"},boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"},operator:{pattern:/(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,lookbehind:!0}}),e.languages.scss.atrule.inside.rest=e.languages.scss}const n9=Wn(t9);var r9=zu;zu.displayName="yaml";zu.aliases=["yml"];function zu(e){(function(t){var n=/[*&][^\s[\]{},]+/,r=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,l="(?:"+r.source+"(?:[ 	]+"+n.source+")?|"+n.source+"(?:[ 	]+"+r.source+")?)",a=/(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g,function(){return/[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source}),s=/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;function i(c,u){u=(u||"").replace(/m/g,"")+"m";var d=/([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g,function(){return l}).replace(/<<value>>/g,function(){return c});return RegExp(d,u)}t.languages.yaml={scalar:{pattern:RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g,function(){return l})),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g,function(){return l}).replace(/<<key>>/g,function(){return"(?:"+a+"|"+s+")"})),lookbehind:!0,greedy:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:i(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),lookbehind:!0,alias:"number"},boolean:{pattern:i(/false|true/.source,"i"),lookbehind:!0,alias:"important"},null:{pattern:i(/null|~/.source,"i"),lookbehind:!0,alias:"important"},string:{pattern:i(s),lookbehind:!0,greedy:!0},number:{pattern:i(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source,"i"),lookbehind:!0},tag:r,important:n,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},t.languages.yml=t.languages.yaml})(e)}const o9=Wn(r9);function kl(e){return typeof e=="string"}function Fu(e){return typeof e=="number"}function ah(e){return Number.isInteger(e)}function Tl(e){return Array.isArray(e)}function Uu(e){return typeof e=="function"}function l9(e){return e instanceof RegExp}function vs(e){return typeof e=="object"&&!Tl(e)&&!sh(e)}function a9(e){return e===void 0}function sh(e){return e===null}function lt(e){return!(a9(e)||sh(e))}function ih(e){return!lt(e)}function s9(...e){throw new Error(e.join(""))}function rt(){}function i9(){return Intl.DateTimeFormat().resolvedOptions().locale}i9();const c9=(e,t,n=1)=>{const r=t<e?-Math.abs(n):n;return Array(1+Math.floor(Math.abs((t-e)/n))).fill(e).map((l,a)=>l+a*r)};function u9(e){return ih(e)?[]:kl(e)?e.length?e.split(/,\s*|\s+/):[]:Tl(e)?e:[e]}function ch(e,t=!0,n={}){return vs(e)?e:u9(e).reduce((r,l)=>(r[l]=Uu(t)?t(l):t,r),n)}function d9(e){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()}function p9(e){if(Uu(e))return e;if(l9(e))return t=>e.test(t);if(vs(e))return t=>!!e[t];if(Tl(e)||kl(e)){const t=ch(e);return n=>!!t[n]}s9("Invalid selector() specification: "+e)}const f9=(e,t,n={})=>{let r={},l={delete:!1,...n};const a=p9(t);return Object.keys(e).map(s=>{if(a(s)){let i=e[s];l.delete&&delete e[s],l.key&&(s=l.key(s)),l.value&&(i=l.value(i)),r[s]=i}}),r};function h9(e,t=300){let n;return(...r)=>{clearTimeout(n),n=setTimeout(()=>e.apply(this,r),t)}}function ys(e){return new Promise(t=>setTimeout(t,e))}jr.registerLanguage("jsx",e9);jr.registerLanguage("json",q7);jr.registerLanguage("css",E7);jr.registerLanguage("scss",n9);jr.registerLanguage("bash",Q7);jr.registerLanguage("yaml",o9);const En=({code:e,language:t="jsx",caption:n,expand:r=!1,fixed:l=r,className:a="",highlightLines:s,lineProps:i,undent:c=!1})=>{const[u,d]=_.useState(!1),[x,m]=_.useState(r),j=()=>{navigator.clipboard.writeText(e),d(!0),ys(2e3).then(()=>d(!1))};return o.jsxs("div",{className:`codeblock ${a} ${x?"expanded":""} ${l?"fixed-open":"expandable"}`,children:[!!n&&o.jsx("h4",{className:"caption",children:n}),o.jsxs("div",{className:"controls",children:[o.jsx("div",{className:"expand",onClick:()=>m(!x),children:x?"Compress":"Expand"}),o.jsx("div",{className:`clipboard ${u?"copied":""}`,onClick:j,children:u?"Copied":"Copy"})]}),o.jsx(jr,{language:t,showLineNumbers:!0,useInlineStyles:!1,wrapLines:!0,customStyle:{},children:m9(e,{undent:c})})]})},m9=(e,t={})=>{if(e=e.replace(/^[^]*?{?\/\*\s*START\s*\*\/}?\n/,"").replace(/[\n\s]*{?\/\*\s*END\s*\*\/}?[^]*/,"").replaceAll(/\/\/\s*PRETEND:\s/g,"").replaceAll(/{?\/\*\s*PRETEND:\s(.*?)\s+\*\/}?/g,"$1").replace(/\n+$/,""),t.undent){const n=new RegExp("^"+" ".repeat(t.undent),"gm");e=e.replaceAll(n,"")}return e},we=({Component:e,code:t,html:n,children:r,className:l="",language:a,...s})=>o.jsxs("div",{className:`example grid-2 gap-8 stack-desktop ${l}`,children:[o.jsx("div",{className:"source",children:o.jsx(En,{code:t||n,language:n?"html":a,...s})}),!!r&&o.jsx("div",{className:"interim",children:r}),e?o.jsxs("div",{className:"output",children:[o.jsx("h4",{className:"caption",children:"Output"}),o.jsx(e,{})]}):null,n?o.jsxs("div",{className:"output",children:[o.jsx("h4",{className:"caption",children:"Output"}),o.jsx("div",{dangerouslySetInnerHTML:{__html:n}})]}):null]}),aa=_.createContext();function z1(e){return typeof e=="function"}function F1(e){return typeof e=="object"&&!uh(e)&&!x9(e)}function uh(e){return Array.isArray(e)}function x9(e){return e===null}function g9({context:e={},Implementation:t,spec:n=!1,props:r={},ref:l}){if(!n)return o.jsx(t,{...r,ref:l});let a={},s=z1(n)?n(e):e[n];if(uh(s)&&(t=s[0],s=s[1]),z1(s)){const i=s(r,l,e);if(Ge.isValidElement(i))return i;F1(i)&&Object.assign(a,r,i)}else F1(s)?Object.assign(a,s,r):Object.assign(a,r);return o.jsx(t,{...a,ref:l})}const v9=e=>({Context:aa,Provider:({children:t,...n})=>o.jsx(aa.Provider,{value:{...e,...n},children:t}),Consumer:t=>n=>o.jsx(aa.Consumer,{children:r=>o.jsx(t,{...r,...n,context:r})}),Component:(t,n=t.displayName||t.name)=>Ge.forwardRef((r,l)=>o.jsx(aa.Consumer,{children:a=>o.jsx(g9,{Implementation:t,context:a,spec:n,props:r,ref:l})}))}),y9=v9(),ce=y9.Component,C9="svg",fc="-",U1="none",dh="fill",j9="path",S9="line",b9="rect",w9="array",_9="circle",k9="ellipse",T9="polygon",L9="polyline",Hu=/-(?!\d)/,H1="currentColor",Wu=512,Vu=512,Ll={defaults:{width:512,height:512,type:"line"},icons:{alpha:"M102,448L256,64L410,448 M152,333L360,333",angle:"M448,336L256,144L64,336",angles:"M448,448L256,256L64,448M448,256L256,64L64,256",arrow:"M96,224L256,64L416,224M256,86L256,448",arrows:"M144,144L256,32L368,144M368,368L256,480L144,368M256,56L256,456",asterisk:"M76,152L436,360M76,360L436,152M256,48L256,464",at:"M256,160C309,160 352,203 352,256C352,309 309,352 256,352C203,352 160,309 160,256C160,203 203,160 256,160M256,480C132,480 32,380 32,256C32,132 132,32 256,32C380,32 480,132 480,256L480,288C480,323 451,352 416,352C381,352 352,323 352,288L352,176",ban:"M100,412L412,100 M256,32C380,32 480,132 480,255C480,379 380,480 256,480C132,480 32,379 32,255C32,132 132,32 256,32Z",bars:"M64,96L448,96M64,256L448,256M64,416L448,416",caret:"M448,336L256,144L64,336L448,336Z",check:"M48,248L192,392L464,120",circle:"circle:256 256 224",clipboard:"M192,80L80,80L80,496L432,496L432,80L320,80L320,112L192,112L192,80ZM256,16C282,16 304,38 304,64C304,90 282,112 256,112C230,112 208,90 208,64C208,38 230,16 256,16Z",cloud:"M480,293C480,234 437,177 362,196C346,161 319,116 240,120C180,124 139,165 125,224C121,223 116,223 111,223C68,223 32,260 32,307C32,354 68,392 111,392C120,392 366,392 380,392C462,392 480,335 480,293Z",cog:"M306,21L206,21L187,91L147,114L78,95L28,182L78,233L78,279L28,330L78,417L147,398L187,421L206,491L306,491L325,421L365,398L434,417L484,330L434,279L434,233L484,182L434,95L365,114L325,91L306,21Z M256,176C300,176 336,212 336,256C336,300 300,336 256,336C212,336 176,300 176,256C176,212 212,176 256,176Z",cross:"M112,112L400,400M400,112L112,400",drag:"M64,96L256,32L448,96M64,416L256,480L448,416M128,256L384,256",envelope:"M32,104L480,104L480,408L32,408L32,104M48,120L256,288L464,120M48,392L200,252M464,392L312,252",equals:"M96,320L416,320 M96,192L416,192",exclamation:"M256,96L256,310M254,416L258,416",filter:"M64,32L448,32L448,128L305,271L304,432L208,496L208,272L64,128L64,32Z",heart:"M256,128C298,48 382,48 424,88C466,128 466,208 424,288C394,348 319,408 256,448C193,408 118,348 88,288C46,208 46,128 88,88C130,48 214,48 256,128Z",hourglass:"M80,32L432,32M80,480L432,480M128,32C128,256 384,256 384,480M384,32C384,256 128,256 128,480",info:"M212,202L256,202L256,416M182,416L330,416M252,96L256,96",list:"M176,96L448,96M176,256L448,256M176,416L448,416M64,96L80,96M64,256L80,256M64,416L80,416",minus:"M96,256L416,256",number:"M256,448L256,64L176,128 M160,448L336,449",pen:"M482,143C491,134 491,120 482,112L401,30C392,21 378,21 369,30L72,326L22,489L186,439L482,143M305,93L418,206",plus:"M256,96L256,416M96,256L416,256",point:"M464,192L256,16L48,192L128,192L128,480L384,480L384,192L464,192Z",prime:"M256,128L256,256",question:"M160,160C160,126 197,80 255,80C314,80 336,128 336,160C336,236 255,235 255,320 M255,416L256,416",rotate:"M392,120C356,84 307,64 256,64C150,64 64,150 64,256C64,362 150,448 256,448C303,448 349,430 384,399C349,430 303,448 256,448C150,448 64,362 64,256C64,150 150,64 256,64C307,64 356,84 392,120Z M352,208L480,208L480,80",search:"M204,32C300,32 384,111 384,208C384,305 305,384 208,384C111,384 32,305 32,208C32,111 107,32 204,32M480,480L332,332",square:"rect:32 32 448 448",square10:"rect:32 32 448 448 45 45",square20:"rect:32 32 448 448 90 90",square30:"rect:32 32 448 448 135 135",square40:"rect:32 32 448 448 180 180",star:"M256,32L324,183L489,202L367,313L400,476L256,394L112,476L145,313L23,202L188,183L256,32Z",thumb:"M149,174L32,174L32,448L149,448L149,184 M149,217C277,160 246,36 282,38C372,44 324,192 324,192L440,192C462,192 480,210 480,232C480,254 462,272 440,272L368,272M424,272C446,272 464,290 464,312C464,334 446,352 424,352L352,352M392,352C414,352 432,370 432,392C432,414 414,432 392,432L256,432C220,432 149,409 149,409",time:"M256,128L256,256L336,336",trash:"M32,80L480,80 M80,80C80,80 100,344 109,452C111,477 131,496 156,496C211,496 301,496 356,496C381,496 401,477 403,452C412,344 432,80 432,80 M160,80L208,16L304,16L352,74",triangle:"M256,64L32,448L480,448L256,64Z",user:"M256,32C302,32 340,70 340,116C340,162 302,208 256,208C210,208 172,162 172,116C172,70 210,32 256,32ZM448,412C448,361 410,320 363,320L148,320C102,320 64,361 64,412L64,480L448,480L448,412Z",vertical:"line:256,48 256,464",wrench:"M486,108C493,124 496,142 496,160C496,239 431,304 352,304C330,304 309,299 290,290L98,482C79,501 49,501 30,482C11,463 11,433 30,414L222,222C213,203 208,182 208,160C208,81 273,16 352,16C370,16 388,19 404,26L326,103L409,186L486,108Z"}};function E9(e,t,n=Ll){n.icons[e]=t}function N9(e,t=Ll){Object.entries(e).forEach(([n,r])=>E9(n,r,t))}const sa=_.createContext();function W1(e){return typeof e=="function"}function V1(e){return typeof e=="object"&&!ph(e)&&!O9(e)}function ph(e){return Array.isArray(e)}function O9(e){return e===null}function R9({context:e={},Implementation:t,spec:n=!1,props:r={},ref:l}){if(!n)return o.jsx(t,{...r,ref:l});let a={},s=W1(n)?n(e):e[n];if(ph(s)&&(t=s[0],s=s[1]),W1(s)){const i=s(r,l,e);if(Ge.isValidElement(i))return i;V1(i)&&Object.assign(a,r,i)}else V1(s)?Object.assign(a,s,r):Object.assign(a,r);return o.jsx(t,{...a,ref:l})}const M9=e=>({Context:sa,Provider:({children:t,...n})=>o.jsx(sa.Provider,{value:{...e,...n},children:t}),Consumer:t=>n=>o.jsx(sa.Consumer,{children:r=>o.jsx(t,{...r,...n,context:r})}),Component:(t,n=t.displayName||t.name)=>Ge.forwardRef((r,l)=>o.jsx(sa.Consumer,{children:a=>o.jsx(R9,{Implementation:t,context:a,spec:n,props:r,ref:l})}))}),D9=M9(),P9=D9.Component;function hn(e){return typeof e=="string"}function El(e){return Array.isArray(e)}function Zu(e){return typeof e=="object"&&!El(e)&&!hh(e)}function fh(e){return e===void 0}function hh(e){return e===null}function Cs(e){return!(fh(e)||hh(e))}function mh(e){return!Cs(e)}function pn(...e){throw new Error(e.join(""))}function A9(){return Intl.DateTimeFormat().resolvedOptions().locale}A9();function Z1(e){return mh(e)?[]:hn(e)?e.length?e.split(/,\s*|\s+/):[]:El(e)?e:[e]}function Nl(e){return e.split(/\s*[;&]\s*/).filter(t=>t.length>0).reduce((t,n)=>{const[r,l]=n.split(/\s*[:=]\s*/);return t[r]=fh(l)?!0:l,t},{})}const xh=e=>e.filter(Cs).join(" "),gh={x:0,y:0,size:16,flipX:!1,flipY:!1,rotate:0},Un={flip:(e,t)=>{hn(t)&&t.match(/^y$/i)?e.flipY=!e.flipY:e.flipX=!e.flipX},flipx:e=>e.flipX=!e.flipX,flipy:e=>e.flipY=!e.flipY,grow:(e,t)=>e.size+=parseInt(t),shrink:(e,t)=>e.size-=parseInt(t),left:(e,t)=>t===!0?e.rotate-=90:e.x-=parseInt(t),right:(e,t)=>t===!0?e.rotate+=90:e.x+=parseInt(t),up:(e,t)=>t===!0?e.rotate+=0:e.y-=parseInt(t),down:(e,t)=>t===!0?e.rotate+=180:e.y+=parseInt(t),rotate:(e,t)=>e.rotate+=parseInt(t)};Un.flop=Un.flipy;Un["flip-x"]=Un.flipx;Un["flip-y"]=Un.flipy;function vh(e,t={...gh}){const n=hn(e)?Nl(e):e||{};return Object.entries(n).reduce((r,[l,a])=>{const s=l.toLowerCase();return(Un[s]||pn(`Invalid transform: ${s}`))(r,a),r},t)}const $9=4.42,en=e=>`${$9*e}%`,B9={},hc={outline:{fill:"none",stroke:"currentColor",strokeWidth:en(2),strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"1.5"},solid:{fill:"currentColor",stroke:"none"},round:{strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"1.5"},square:{strokeLinecap:"square",strokeLinejoin:"miter",strokeMiterlimit:"1.5"},butt:{strokeLinecap:"butt"},bevel:{strokeLinejoin:"bevel"},thinnest:{strokeWidth:en(.5)},thinner:{strokeWidth:en(1)},thin:{strokeWidth:en(1.5)},medium:{strokeWidth:en(2)},thick:{strokeWidth:en(2.5)},thicker:{strokeWidth:en(3)},thickest:{strokeWidth:en(3.5)}};hc.line=hc.outline;const I9={...Object.entries(hc).reduce((e,[t,n])=>(e[t]=r=>Object.assign(r,n),e),{}),fill:(e,t)=>e.fill=t===!0?H1:t,stroke:(e,t)=>e.stroke=t===!0?H1:t,nofill:e=>e.fill=U1,nostroke:e=>e.stroke=U1,strokewidth:(e,t)=>e.strokeWidth=t.match(/^[\d.]+$/)?en(parseFloat(t)):t,opacity:(e,t)=>e.opacity=t,fillopacity:(e,t)=>e.fillOpacity=t,strokeopacity:(e,t)=>e.strokeOpacity=t,dasharray:(e,t)=>e.strokeDasharray=t,drawlength:(e,t)=>e["--draw-length"]=t,drawtime:(e,t)=>e["--draw-time"]=t,filltime:(e,t)=>e["--fill-time"]=t};function Qa(e,t){return(hn(t)?t.split(Hu):t).forEach(n=>{const[r,l=!0]=n.split(/[:=]/),a=r.toLowerCase(),s=I9[a];if(s){s(e.style||(e.style={...B9}),l);return}(Un[a]||pn(`Invalid style or transform: ${a}`))(e.transform||(e.transform={...gh}),l)})}const z9={width:Wu,height:Vu,type:dh},yh={svg:e=>({element:C9,svg:e}),array:e=>({element:w9,items:e}),path:e=>({element:j9,d:e}),polygon:e=>({element:T9,points:e}),polyline:e=>({element:L9,points:e}),circle:e=>({element:_9,...ia(e,"cx cy r")}),ellipse:e=>({element:k9,...ia(e,"cx cy rx ry")}),line:e=>({element:S9,...ia(e,"x1 y1 x2 y2")}),rect:e=>({element:b9,...ia(e,"x y width height rx ry")})};function ia(e,t){const n=El(t)?[...t]:Z1(t);return Z1(e).reduce((r,l)=>{if(n.length){const a=n.shift();r[a]=l}return r},{})}const Ch=e=>{const[t,n=""]=e.split("?"),[r,...l]=t.split(/\.(?!\d)/),a=r.split(Hu).filter(i=>i.length),s=Nl(n);return{dashes:a,classes:l,style:s}},F9=(e,t)=>{const n=Ch(e),{dashes:r}=n;for(let l=r.length;l>0;l--){const a=r.slice(0,l).join(fc);if(t[a]){n.name=r.splice(0,l).join(fc);break}}return n},U9=(e,t,n={})=>{const{icons:r}=t,l=F9(e,r),{name:a,classes:s,style:i,dashes:c}=l;mh(a)&&pn(`No icon found matching any leading subset of ${l.dashes.join(fc)}`);const u=t.icons[a]||pn(`Icon not found in data: ${a}`),d=jh(u,t,{...n,name:a});if((s.length||n.className)&&(d.className=xh([...s||[],n.className])),d.transform&&(d.transform=vh(d.transform)),d.style&&(d.style=hn(d.style)?Nl(d.style):{...d.style}),d.type){const x=d.style&&{...d.style};Qa(d,d.type),delete d.type,x&&Object.assign(d.style,x)}return c.length&&Qa(d,c),Object.keys(i).length&&(d.style=Object.assign(d.style||{},i)),d};function H9(e){const t=e.match(/^(.*?):(.*)/);return t?{path:t[2],type:t[1]}:{path:e}}const jh=(e,t,n={})=>{const{defaults:r={}}=t,l={...z9,...r,...n};if(hn(e))return W9(l,e);if(Zu(e))return V9(l,e);if(El(e))return Z9(l,e,t);pn(`Cannot parse icon data: ${e}`)};function W9(e,t){if(t.match(/^\w*</))return e.body={element:"svg",svg:t},e;const n=t.match(/^(.*?):(.*)/);if(n){const[,r,l]=n,{dashes:a,classes:s}=Ch(r),i=a.shift(),c=yh[i]||pn(`Invalid icon data element: ${i}`);return e.body=c(l),s.length&&(e.body.className=xh(s)),a.length&&Qa(e.body,a),e}return e.body={element:"path",d:t},e}function V9(e,t){const n={...t};if(n.element)return e.body=n,e;for(let r of Object.entries(yh)){const[l,a]=r,s=n[l];if(Cs(s))return e.body=a(s),delete n[l],Object.assign(e,n),e}pn(`Cannot parse icon data: ${JSON.stringify(t)}`)}function Z9(e,t,n){return e.body={element:"array",items:t.map(r=>jh(r,n).body)},e}const G9=({size:e,...t})=>{t.width??(t.width=e||Wu),t.height??(t.height=e||Vu),t.path&&Object.assign(t,H9(t.path));let n;return t.style&&(hn(t.style)?(n=Nl(t.style),t.style={}):n={...t.style}),Qa(t,t.type?t.type.split(Hu).filter(r=>r.length):dh),delete t.type,t.style&&n&&Object.assign(t.style,n),t.transform&&(t.transform=vh(t.transform)),t},Gu=e=>Zu(e)?Object.entries(e).reduce((t,[n,r])=>(t[n.replace(/(?!-)-./g,l=>l[1].toUpperCase())]=r,t),{}):e,K9=e=>Cs(e)?Gu(Nl(e)):null,mn=({style:e,class:t,...n})=>({style:hn(e)?K9(e):Gu(e),className:t,...n});function Y9({width:e,height:t,transform:n,children:r}){const l=e/2,a=t/2,s=n.x*e/16,i=n.y*t/16,c=n.size/16*(n.flipX?-1:1),u=n.size/16*(n.flipY?-1:1),d=n.rotate;return o.jsx("g",{transform:`translate(${l} ${a})`,children:o.jsx("g",{transform:`translate(${s}, ${i}) scale(${c}, ${u}) rotate(${d} 0 0)`,children:o.jsx("g",{transform:`translate(-${l} -${a})`,children:r})})})}const Q9=e=>o.jsx("circle",{...mn(e)}),X9=e=>o.jsx("ellipse",{...mn(e)}),q9=e=>o.jsx("line",{...mn(e)}),Sh=e=>o.jsx("path",{...mn(e)}),J9=e=>o.jsx("polygon",{...mn(e)}),ev=e=>o.jsx("polyline",{...mn(e)}),tv=e=>o.jsx("rect",{...mn(e)}),nv=({svg:e,...t})=>o.jsx("g",{dangerouslySetInnerHTML:{__html:e},...mn(t)}),rv=({items:e,...t})=>o.jsx("g",{...mn(t),children:e.map((n,r)=>o.jsx(Xa,{body:n},r))}),ov={array:rv,circle:Q9,ellipse:X9,line:q9,path:Sh,polygon:J9,polyline:ev,rect:tv,svg:nv},Xa=({path:e,body:t,...n})=>{if(e)return o.jsx(Sh,{d:e,...n});if(hn(t))return o.jsx("g",{dangerouslySetInnerHTML:{__html:t}});if(Zu(t)){const{element:r,...l}=t,a=ov[r]||pn(`Invalid element type: ${r} => `,JSON.stringify(t));return o.jsx(a,{...l})}if(El(t))return t.map((r,l)=>o.jsx(Xa,{body:r},l));pn(`Don't know how to handle body: ${t}`)},G1=({onClick:e,minx:t=0,miny:n=0,width:r=Wu,height:l=Vu,style:a,transform:s,className:i="",debug:c,...u})=>o.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",role:"img","aria-hidden":"true",focusable:"false",viewBox:`${t} ${n} ${r} ${l}`,className:`${i} icon`,style:Gu(a),onClick:e,children:[!!c&&console.log("style: ",a),s?o.jsx(Y9,{width:r,height:l,transform:s,children:o.jsx(Xa,{...u})}):o.jsx(Xa,{...u})]}),lv=({name:e,library:t=Ll,...n})=>e?o.jsx(G1,{...n,...U9(e,t,n)}):o.jsx(G1,{...G9(n)}),wa=P9(lv,"Icon"),bh=(e,...t)=>Uu(e)?e(...t):e,av=e=>e.filter(lt).join(" "),sv=e=>Object.entries(e).filter(([,t])=>t).map(([t])=>t),We=(...e)=>av(e.flatMap(t=>vs(t)?sv(t):t)),iv=e=>{if(!e)return null;const[t,n,r,l,a]=e.split("-");return We(t,uv(n),dv(r),pv(l),fv(a))},cv=({className:e,size:t,color:n,...r})=>({...r,className:We(e,t,iv(n))}),Ku=e=>wh(e,"border",t=>`border bdw-${t}`),Yu=e=>wh(e,"shadow-1",t=>`shadow-${t}`),Qu=e=>Ol(e,t=>`bdr-${t}`),uv=e=>Ol(e,t=>`fgc-${t}`),dv=e=>Ol(e,t=>`bgc-${t}`),pv=e=>Ol(e,t=>`fgd-${t}`),fv=e=>Ol(e,t=>`bgd-${t}`),Ol=(e,t)=>ah(parseInt(e))?bh(t,e):null,wh=(e,t,n)=>e===!0?t:parseInt(e)?bh(n,e):null,Y=e=>o.jsx(wa,{...cv(e)});function K1(e,t,n={}){return lt(t)&&(n[e]=ah(t)?`${t}deg`:t),Object.keys(n).length?n:null}const hv=({icon:e,iconClass:t,iconLeft:n,iconLeftClass:r="on-left",iconLeftRotate:l,iconRight:a,iconRightClass:s="on-right",iconRightRotate:i,text:c,children:u})=>o.jsxs(o.Fragment,{children:[!!e&&o.jsx(wa,{name:e,className:t,fixedWidth:!0}),!!n&&o.jsx(wa,{name:n,className:r,style:K1("--icon-rotate",l),fixedWidth:!0}),c||u,!!a&&o.jsx(wa,{name:a,className:s,style:K1("--icon-rotate",i),fixedWidth:!0})]}),js=ce(hv,"WithIcons");N9({github:"path-fill-nostroke:M256,0C115,0 0,115 0,256C0,369 73,465 175,499C188,501 193,493 193,487C193,481 192,460 192,439C128,451 111,423 106,409C103,402 91,379 80,373C71,368 58,356 80,356C100,356 114,374 119,382C142,421 179,410 194,403C196,387 203,375 210,369C153,363 93,340 93,243C93,215 103,192 120,174C117,167 108,141 122,106C122,106 144,99 193,132C213,126 235,124 257,124C278,124 300,126 321,132C370,99 391,106 391,106C405,141 396,167 394,174C410,192 420,214 420,243C420,341 360,363 303,369C312,377 320,392 320,416C320,451 320,478 320,487C320,493 325,501 338,499C439,465 512,369 512,256C512,115 397,0 256,0Z"});const mv=({dismissable:e,dismiss:t,revealable:n,isRevealed:r,openIcon:l="angle-down",closedIcon:a="angle-left",dismissIcon:s="cross"})=>o.jsxs("div",{className:"on-right",children:[!!e&&o.jsx(Y,{name:s,fixedWidth:!0,className:"dismiss",onClick:()=>t(!0)}),!!n&&o.jsx(Y,{name:r?l:a,fixedWidth:!0,className:"reveal"})]}),_h=ce(mv,"AlertControls"),xv=({headline:e,headIcon:t,toggle:n,revealable:r=!1,controlProps:l,Controls:a=_h})=>o.jsxs("div",{className:"headline flex space",onClick:r?n:null,children:[o.jsxs("div",{children:[!!t&&o.jsx(Y,{name:t,fixedWidth:!0,className:"on-left"}),e]}),o.jsx(a,{...l})]}),gv=ce(xv,"AlertHeadline"),vv=({title:e,text:t,children:n})=>o.jsxs(o.Fragment,{children:[e&&o.jsx("h3",{children:e}),t?o.jsx("p",{children:t}):n]}),kh=ce(vv,"AlertContent"),yv=({icon:e,Content:t=kh,...n})=>o.jsxs("div",{className:"side-icon",children:[o.jsx(Y,{name:e}),o.jsx("div",{className:"wide",children:o.jsx(t,{...n})})]}),Cv=ce(yv,"AlertIcon"),Ss=e=>kl(e)||Fu(e)||!e.separator&&!e.heading&&!e.disabled;function jv(e,t=Ss){const n=e.findIndex(t);return n<0?null:n}function Sv(e,t=Ss){for(let n=e.length-1;n>=0;n--)if(t(e[n]))return n;return null}function bv(e,t,n=Ss){for(let r=1;r<e.length;r++){const l=(t+r)%e.length;if(n(e[l]))return l}return null}function wv(e,t,n=Ss){for(let r=1;r<e.length;r++){const l=(t+e.length-r)%e.length;if(n(e[l]))return l}return null}const Th="",Lh="ArrowDown",Eh="ArrowUp",Nh="Enter",_v=" ",Oh="Escape",qa=e=>{const t=`HINT: define ${e}() to render this value`;return n=>kl(n)||Fu(n)?n:vs(n)?n.text??n.label??n.name??t:t},kv=e=>kl(e)||Fu(e)?e:o.jsx(js,{...e}),Rh=(e,t)=>{if(!e||!t)return;const n=t.offsetTop,r=n+t.offsetHeight,l=e.scrollTop,a=l+e.offsetHeight;n<l?e.scrollTo({top:n}):r>a&&e.scrollTo({top:l+(r-a)})},xn=({title:e,headline:t,headIcon:n,type:r,size:l,color:a,stripe:s,border:i,radius:c,shadow:u,className:d,text:x,children:m,onDismiss:j,icon:y,dismissable:S=!1,revealable:E=!1,revealed:g=!1,openIcon:p,closedIcon:h,dismissIcon:f,Headline:v=gv,Controls:C=_h,Content:b=kh,Icon:T=Cv})=>{const[L,P]=_.useState(E?g:!0),[U,X]=_.useState(!1),ae=We("alert",r,l,a,d,{revealable:E,dismissable:S,stripe:s},L?"revealed":null,Yu(u),Ku(i),Qu(c)),ye=()=>P($=>!$),ue={dismissable:S,revealable:E,isRevealed:L,dismiss:()=>{X(!0),j&&j()},openIcon:p,closedIcon:h,dismissIcon:f},ge={title:e,text:x,children:m},O={...ge,icon:y,Content:b},A={headline:t,headIcon:n,toggle:ye,revealable:E,controlProps:ue,Controls:C};return U?null:o.jsxs("div",{className:ae,children:[!!t&&o.jsx(v,{...A}),L&&(y?o.jsx(T,{...O}):o.jsx(b,{...ge}))]})},Ao=ce(e=>o.jsx(xn,{...e,type:"info"}),"Info"),$o=ce(e=>o.jsx(xn,{...e,type:"success"}),"Success"),Bo=ce(e=>o.jsx(xn,{...e,type:"warning"}),"Warning"),Io=ce(e=>o.jsx(xn,{...e,type:"error"}),"Error");xn.Info=Ao;xn.Success=$o;xn.Warning=Bo;xn.Error=Io;const V=ce(xn,"Alert"),Tv=({type:e="button",size:t,color:n,className:r,disabled:l,bright:a,dark:s,outline:i,bare:c,shaded:u,shadow:d,border:x,radius:m,label:j,tooltip:y,tabIndex:S=0,icon:E,iconClass:g,iconLeft:p,iconLeftClass:h,iconRight:f,iconRightClass:v,text:C,children:b,Content:T=js,...L})=>{const P=We(t,n,r,{bright:a,dark:s,outline:i,bare:c,shaded:u,icon:E},Yu(d),Ku(x),Qu(m)),U={icon:E,iconClass:g,iconLeft:p,iconLeftClass:h,iconRight:f,iconRightClass:v,text:C,children:b};return o.jsx("button",{className:P,"aria-label":j,tabIndex:S,type:e,disabled:l,"aria-disabled":l,"data-tooltip":y,...L,children:o.jsx(T,{...U})})},M=ce(Tv,"Button"),Lv=({buttons:e,children:t,className:n="buttons",buttonClass:r,Button:l=M,...a})=>o.jsx("div",{className:n,children:e?e.map((s,i)=>o.jsx(l,{className:r,...a,...s},i)):t}),Sr=ce(Lv,"Buttons"),Ev=({className:e,children:t,ref:n})=>o.jsx("label",{className:e,ref:n,children:t}),Nv=ce(Ev,"CheckboxLabel"),Ov=({disabled:e=!1,tabIndex:t=0,onChange:n=rt,ref:r,...l})=>o.jsx("input",{type:"checkbox",ref:r,"aria-disabled":e,tabIndex:e?-1:t,onChange:a=>n(a.target.checked),...l}),Rv=ce(Ov,"CheckboxInput"),Mv=({text:e,className:t="checkbox",ref:n,inputRef:r,checked:l,checkedText:a=e,uncheckedText:s=e,inputClass:i,Label:c=Nv,Input:u=Rv,...d})=>o.jsxs(c,{className:t,ref:n,checked:l,children:[o.jsx(u,{className:i,ref:r,checked:l,...d}),l?a:s]}),br=ce(Mv,"Checkbox"),Dv=({checked:e=!1}={})=>{const[t,n]=_.useState(e);return{isChecked:t,setChecked:n,check:()=>n(!0),uncheck:()=>n(!1)}},Pv=({checked:e=!1,onChange:t,...n})=>{const{isChecked:r,setChecked:l}=Dv({checked:e}),a=s=>{l(s),t&&t(s)};return o.jsx(br,{checked:r,onChange:a,...n})},Yn=({visible:e=!1}={})=>{const[t,n]=_.useState(e);return{isVisible:t,setVisible:n,show:()=>n(!0),hide:()=>n(!1)}},Av=({initiallyRevealed:e=!1,open:t=e,confirmIcon:n="check",confirmText:r="Confirm",confirmColor:l="red",confirmClass:a,cancelIcon:s="cross",cancelText:i="Cancel",cancelColor:c="grey",cancelClass:u,confirm:d={iconRight:n,text:r,color:l,className:a},cancel:x={iconLeft:s,text:i,color:c,className:u},buttonsClass:m,className:j=m,buttonClass:y,onClick:S=()=>window.alert("No confirm action defined"),...E})=>{const{isVisible:g,hide:p,show:h}=Yn({visible:t}),v={iconRight:n,text:r,color:l,className:a,...d,onClick:b=>{b.preventDefault(),p(),S()}},C={iconLeft:s,text:i,color:c,className:u,outline:!0,...x,onClick:p};return o.jsx(Sr,{className:j,buttonClass:y,buttons:g?[C,v]:[{...E,onClick:h}]})},Qt=ce(Av,"Confirm");var $v=Object.defineProperty,Bv=(e,t,n)=>t in e?$v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,si=(e,t,n)=>(Bv(e,typeof t!="symbol"?t+"":t,n),n);const wr=(e,t={})=>{const n=Ge.createContext(t);return{Context:n,Provider:r=>o.jsx(e,{...r,render:l=>o.jsx(n.Provider,{value:l,children:r.children})}),Consumer:r=>l=>o.jsx(n.Consumer,{children:a=>o.jsx(r,{...a,...l})}),Use:()=>Ge.useContext(n)}};function Iv(e={},t={},n={}){return Object.entries(t).reduce((r,[l,a])=>{const s=n[a];return s!==null&&typeof s<"u"&&(r[l]=s),r},{...e})}function zv(e,t=[]){return(typeof t=="string"?t.split(/,\s*|\s+/):t).reduce((n,r)=>{const l=e[r]||Uv(`Cannot expose non-existent action method: ${r}`);return n[r]=l.bind(e),n},{})}function Fv(e,t){const n=e.debug??t.debug,r=Y1(e.debugPrefix??t.debugPrefix,e),l=Y1(e.debugColor??t.debugColor,e);return n?r?(a,...s)=>console.log(`%c${r}%c${a}`,`color: ${l}`,"color:black",...s):console.log.bind(console):()=>{}}function Y1(e,t){return typeof e=="function"?e(t):e}function Uv(...e){throw new Error(e.join(""))}class Yo extends Ge.Component{constructor(t){super(t);const n=this.constructor;this.debug=Fv(t,n),this.state=Iv(n.initialState,n.initialProps,t),this.actions=zv(this,n.actions)}getContext(){return{...this.props,...this.state,...this.actions}}getRenderProps(){return this.getContext()}render(){return this.props.render(this.getRenderProps())}}si(Yo,"initialState",{}),si(Yo,"initialProps",{}),si(Yo,"actions",[]);const Hv=e=>ch(e,t=>{const n=t,r="text",l=d9(n);return{field:n,type:r,label:l}}),Wv=e=>Object.keys(e).filter(t=>!e[t].hidden),Vv=(e,t=1,n=e.length)=>{const r=e.length,l=Math.ceil(r/n);t=Math.min(t,l);const a=t-1,s=n*a,i=Math.min(s+n,r-1),c=e.slice(s,i+1);return{pageSize:n,pages:l,page:a,pageNo:t,firstIndex:s,lastIndex:i,rows:c}},Zv=({render:e,rows:t=[],...n})=>{const r=_.useMemo(()=>Hv(n.columns),[n.columns]),[l,a]=_.useState(n.pageNo??1),[s,i]=_.useState(n.pageSize??10),[c,u]=_.useState(n.sortColumn),[d,x]=_.useState(n.sortReverse??!1),[m,j]=_.useState(Wv(r)),y=E=>{c===E?x(g=>!g):(u(E),x(!1))},S=_.useMemo(()=>Vv(t,l,s),[t,l,s]);return console.log("page:",S),console.log("columns:",r),e({...n,rows:t,columns:r,page:S,pageNo:l,setPageNo:a,pageSize:s,setPageSize:i,sortColumn:c,setSortColumn:u,sortReverse:d,setSortReverse:x,toggleSortColumn:y,visibleColumns:m,setVisibleColumns:j})},Ot=wr(Zv),Q1={isOpen:!1,cursor:void 0,selected:void 0};class Qo extends Yo{componentDidMount(){this.mounted=!0,this.props.onLoad(this)}componentWillUnmount(){this.mounted=!1,this.props.onUnload(this)}onMouseEnter(){this.debug("onMouseEnter()"),this.setState({hasHover:!0},this.props.openOnHover?()=>{this.open(),this.focusTrigger()}:null)}onMouseLeave(){this.debug("onMouseLeave()"),this.setState({hasHover:!1},this.props.openOnHover?()=>this.closeSoon():null)}onFocus(){this.debug("onFocus()"),this.setState({hasFocus:!0},this.props.onFocus)}onBlur(){this.debug("onBlur()"),this.setState({hasFocus:!1},this.props.onBlur),this.closeSoon(!0)}onClick(){this.debug("onClick()"),this.state.isOpen?this.close():this.open()}open(t=this.cursorFirstIndex()){this.debug(`open(${t})`),this.setState({isOpen:!0,cursor:t},this.props.onOpen)}close(){this.debug("close()"),this.setState(Q1,this.props.onClose)}closeSoon(t=!1){this.debug("closeSoon()"),ys(this.props.closeDelay).then(()=>{t||!this.state.hasHover?(console.log("closing"),this.close()):console.log(`NOT closing force:${t} hasHover:${this.state.hasHover}`)})}onKeyDown(t){switch(this.debug(`onKeyDown(${t.key})`),t.key){case Lh:this.state.isOpen?this.setCursor(this.cursorNextIndex()):this.open(this.cursorFirstIndex());break;case Eh:this.state.isOpen?this.setCursor(this.cursorPrevIndex()):this.open(this.cursorLastIndex());break;case Nh:case _v:this.state.isOpen?this.selectCursor():this.open(this.cursorFirstIndex());break;case Oh:this.close();break;default:console.log(`ignored key ${t.key}`);return}t.preventDefault()}menuOptions(){return this.props.options}cursorFirstIndex(){return jv(this.menuOptions())}cursorLastIndex(){return Sv(this.menuOptions())}cursorNextIndex(){return bv(this.menuOptions(),this.state.cursor)}cursorPrevIndex(){return wv(this.menuOptions(),this.state.cursor)}setCursor(t){this.debug(`setCursor(${t})`),this.setState({cursor:t})}selectCursor(){this.debug("selectCursor()");const{cursor:t}=this.state,{options:n}=this.props;if(n&&n.length&&lt(t)){const r=n[t];this.debug(`selectCursor() ${t} =>`,r),this.selectOption(r)}else this.debug("Not selecting: cursor out of range")}selectOption(t){this.debug("selectOption()",t),this.setState(this.selectState(t),()=>this.props.onSelect(t)),this.closeSoon(!0)}selectState(t){return{selected:t}}triggerRef(t){this._triggerRef=t}focusTrigger(){this._triggerRef?(this.debug("focussing trigger"),this._triggerRef.focus()):this.debug("no trigger to focus")}menuRef(t){this._menuRef=t}activeRef(t){Rh(this._menuRef,t)}}Se(Qo,"debug",!0),Se(Qo,"defaultProps",{options:[],openOnHover:!1,closeDelay:300,onLoad:rt,onUnload:rt,onFocus:rt,onBlur:rt,onClick:rt,onOpen:rt,onClose:rt,onSelect:rt}),Se(Qo,"initialState",{...Q1});const kn=class kn extends Qo{};Se(kn,"debug",!0),Se(kn,"debugPrefix","Dropdown > "),Se(kn,"debugColor","MediumVioletRed"),Se(kn,"defaultProps",{...kn.defaultProps,options:[],displayOption:kv}),Se(kn,"actions",["onMouseEnter","onMouseLeave","onFocus","onBlur","onClick","onKeyDown","open","close","setCursor","selectCursor","selectOption","triggerRef","menuRef","activeRef"]);let mc=kn;const Rl=wr(mc),Gv=({triggerClass:e="trigger",triggerRef:t,onMouseEnter:n,onMouseLeave:r,onKeyDown:l,onFocus:a,onBlur:s,onClick:i,...c})=>o.jsx("div",{className:e,onClick:i,onMouseEnter:n,onMouseLeave:r,onKeyDown:l,onFocus:a,onBlur:s,tabIndex:0,ref:t,children:o.jsx(js,{...f9(c,/^(icon|text)/)})}),Kv=Rl.Consumer(Gv),Yv=({option:e,active:t,activeRef:n,selected:r,onClick:l,onMouseEnter:a,optionClass:s="item no-hover",activeClass:i="active",selectedClass:c="selected",disabledClass:u="disabled",displayOption:d})=>o.jsx("div",{className:We(s,e.className,t?i:null,r?c:null,e.disabled?u:null),onMouseEnter:a,onClick:l,ref:t?n:null,"aria-disabled":e.disabled,children:d(e)}),Qv=Rl.Consumer(Yv),Xv=({option:e,separatorClass:t="separator"})=>o.jsx("div",{className:We(t,e.className)}),qv=({option:e,optionClass:t="item no-hover",headingClass:n="heading"})=>o.jsx("h4",{className:We(n,t,e.className),children:e.heading}),Jv=({options:e=[],menuRef:t,menuClass:n="menu border bdr-1",cursor:r,selected:l,selectOption:a,setCursor:s,onMouseEnter:i,onMouseLeave:c,Option:u=Qv,Separator:d=Xv,Heading:x=qv})=>o.jsx("div",{className:n,ref:t,onMouseEnter:i,onMouseLeave:c,children:e.map((m,j)=>m.separator?o.jsx(d,{option:m},j):m.heading?o.jsx(x,{option:m},j):o.jsx(u,{option:m,active:lt(r)&&e[r]===m,selected:l===m,onClick:()=>a(m),onMouseEnter:()=>s(j)},m.id??m.value??j))}),ey=Rl.Consumer(Jv),ty=({className:e="dropdown",openClass:t="open",closedClass:n="closed",isOpen:r,right:l,size:a,wide:s,Trigger:i=Kv,Menu:c=ey})=>o.jsxs("div",{className:We(e,a,r?t:n,{right:l,wide:s}),children:[o.jsx(i,{}),r&&o.jsx(c,{})]}),ny=Rl.Consumer(ty),ry=({Content:e=ny,...t})=>o.jsx(Rl.Provider,{...t,children:o.jsx(e,{})}),et=ce(ry,"Dropdown"),oy=({setPageSize:e,pageSizes:t=[10,25,50,100,250,500,1e3]})=>o.jsx(et,{right:!0,iconRight:"angle-down",text:"Page Size",size:"small",items:t.map(n=>({n,text:`${n} per page`})),onSelect:n=>e(n.n)}),ly=Ot.Consumer(oy),ay=({headerClass:e,PageSize:t=ly})=>o.jsx("header",{className:e,children:o.jsxs("div",{className:"flex space",children:[o.jsx("div",{children:"pp"}),o.jsx(t,{})]})}),sy=Ot.Consumer(ay),iy=({row:e,column:t,name:n,field:r,value:l,rowClick:a,onClick:s,cellClass:i,sortColumn:c})=>{const u=c===n,d=We(i,t.className,{sorting:u});return o.jsx("td",{className:d,children:l})},cy=Ot.Consumer(iy),uy=({row:e,columns:t,visibleColumns:n,Cell:r=cy})=>o.jsx("tr",{children:n.map(l=>{const a=t[l],s=a.field??l,i=e[s];return o.jsx(r,{row:e,name:l,field:s,column:a,value:i},l)})}),dy=Ot.Consumer(uy),py=({page:e,Row:t=dy})=>o.jsx("tbody",{children:e.rows.map((n,r)=>o.jsx(t,{row:n},n.id??r))}),fy=Ot.Consumer(py),hy=({name:e,column:t,sortColumn:n,sortReverse:r,toggleSortColumn:l,sortUpIcon:a="arrow-up",sortDownIcon:s="arrow-down",headingClass:i="heading"})=>{const c=e===n,u=c&&r;return o.jsx("th",{className:We(i,{sorting:c}),onClick:()=>l(e),children:o.jsxs("div",{className:"flex space middle",children:[o.jsx("span",{className:"label",children:t.label}),c&&o.jsx(Y,{name:u?a:s})]})})},my=Ot.Consumer(hy),xy=({columns:e,headingsClass:t="headings",visibleColumns:n,Heading:r=my})=>o.jsx("thead",{children:o.jsx("tr",{className:t,children:n.map(l=>o.jsx(r,{name:l,column:e[l]},l))})}),gy=Ot.Consumer(xy),vy=({tableClass:e="celled striped table",selectableClass:t="selectable",scrollX:n,rowClick:r,Headings:l=gy,Rows:a=fy})=>o.jsxs("table",{className:We(e,n?"nowrap":"wide",{[t]:r}),children:[o.jsx(l,{}),o.jsx(a,{})]}),yy=Ot.Consumer(vy),Cy=({scrollX:e,Table:t=yy})=>o.jsx("div",{className:e?"scroll-x":"",children:o.jsx(t,{})}),jy=Ot.Consumer(Cy),Sy=({page:e=0,pages:t,buttonClass:n="outline",pageClass:r=n,currentPageClass:l="solid",render:a,...s})=>{const u=t-1,d=t,x=e+1,m=e>0?e-1:null,j=lt(m)?m+1:null,y=e<u?e+1:null,S=lt(y)?y+1:null;return a({page:e,pageNo:x,firstPage:0,firstPageNo:1,lastPage:u,lastPageNo:d,pages:t,prevPage:m,prevPageNo:j,nextPage:y,nextPageNo:S,buttonClass:n,pageClass:r,currentPageClass:l,...s})},Qn=wr(Sy),by=Qn.Use,wy=({prevPage:e,setPage:t,buttonClass:n,prevClass:r=n,prevIcon:l="arrow-left"})=>o.jsx(M,{className:r,icon:l,onClick:()=>t(e),disabled:ih(e)}),_y=Qn.Consumer(wy),ky=({nextPage:e,setPage:t,buttonClass:n,nextClass:r=n,nextIcon:l="arrow-right"})=>o.jsx(M,{className:r,icon:l,onClick:()=>t(e),disabled:!e}),Ty=Qn.Consumer(ky),Ly=({pageNo:e,text:t=e,buttonClass:n,className:r=n,onClick:l})=>o.jsx(M,{text:t,className:r,onClick:l}),Ey=Qn.Consumer(Ly),Ny=o.jsx(o.Fragment,{children:"…"}),Oy=({pageSeparatorClass:e="separator",pageSeparator:t=Ny})=>o.jsx("div",{className:e,children:t}),Ry=Qn.Consumer(Oy),My=({page:e,pageNo:t,firstPage:n,firstPageNo:r,prevPage:l,prevPageNo:a,nextPage:s,nextPageNo:i,lastPage:c,lastPageNo:u,setPage:d,pagesClass:x="pages",buttonClass:m,pageClass:j=m,currentPageClass:y="brand",showFirstLast:S=!0,Separator:E=Ry,Page:g=Ey})=>o.jsxs("div",{className:x,children:[S&&l>n&&o.jsxs(o.Fragment,{children:[o.jsx(g,{page:n,pageNo:r,className:j,onClick:()=>d(n)}),l>n+1&&o.jsx(E,{})]}),lt(l)&&o.jsx(g,{page:l,pageNo:a,className:j,onClick:()=>d(l)}),o.jsx(g,{page:e,pageNo:t,className:y,current:!0,disabled:!0}),lt(s)&&o.jsx(g,{page:s,pageNo:i,className:j,onClick:()=>d(s)}),S&&s&&s<c&&o.jsxs(o.Fragment,{children:[s<c-1&&o.jsx(E,{}),o.jsx(g,{page:c,pageNo:u,className:j,onClick:()=>d(c)})]})]}),Dy=Qn.Consumer(My),Py=({className:e="pager",size:t,color:n,Previous:r=_y,Next:l=Ty,Pages:a=Dy})=>o.jsxs("div",{className:We(e,t,n),children:[o.jsx(r,{}),o.jsx(a,{}),o.jsx(l,{})]}),Ay=Qn.Consumer(Py),$y=({Content:e=Ay,...t})=>o.jsx(Qn.Provider,{...t,children:o.jsx(e,{})}),Tt=ce($y,"Pager"),By=({footerClass:e,page:t,setPageNo:n,sortColumn:r})=>o.jsxs("footer",{className:e,children:[o.jsx(Tt,{page:t.page,pages:t.pages,setPage:l=>n(l+1)}),"Sorting: ",r]}),Iy=Ot.Consumer(By),zy=({color:e,className:t="datatable",Header:n=sy,Body:r=jy,Footer:l=Iy})=>o.jsxs("section",{className:We(t,e),children:[o.jsx(n,{}),o.jsx(r,{}),o.jsx(l,{})]}),Fy=Ot.Consumer(zy),Uy=({Content:e=Fy,...t})=>o.jsx(Ot.Provider,{...t,children:o.jsx(e,{})}),Hy=ce(Uy,"Datatable"),Wy=({summary:e,summaryClass:t})=>o.jsx("summary",{className:t,children:e}),Vy=({content:e,children:t,contentClass:n})=>o.jsx("div",{className:n,children:e||t}),Zy=({className:e,size:t,color:n,lined:r,border:l,radius:a,shaded:s,shadow:i,open:c,Summary:u=Wy,Content:d=Vy,...x})=>o.jsxs("details",{className:We(e,n,Ku(l),Qu(a),Yu(i),{size:t,color:n,lined:r,shaded:s}),open:c,children:[o.jsx(u,{...x}),o.jsx(d,{...x})]}),Fe=ce(Zy,"Details"),Gy=({close:e,icon:t="cross",className:n="close"})=>o.jsx("div",{className:n,onClick:e,children:o.jsx(Y,{name:t})}),Ky=ce(Gy,"ModalClose"),Yy=({title:e,header:t})=>e||t?o.jsxs("header",{children:[!!e&&o.jsx("h3",{children:e}),t]}):null,Qy=ce(Yy,"ModalHeader"),Xy=({footer:e})=>!!e&&o.jsx("footer",{children:e}),qy=ce(Xy,"ModalFooter"),Jy=({text:e,children:t,Header:n=Qy,Footer:r=qy,...l})=>o.jsxs("article",{children:[o.jsx(n,{...l}),e||t,o.jsx(r,{...l})]}),eC=ce(Jy,"ModalContent"),tC=({ref:e,open:t,close:n,className:r,closeClass:l="close",closeIcon:a="cross",Close:s=Ky,Content:i=eC,...c})=>(e||(e=_.useRef(null)),_.useEffect(()=>{const{current:u}=e;t?u.showModal():u.close()},[t]),o.jsxs("dialog",{ref:e,className:r,children:[!!n&&o.jsx(s,{close:n,icon:a,className:l}),o.jsx(i,{...c})]})),Xt=ce(tC,"Modal"),nC=({open:e=!1}={})=>{const{isVisible:t,show:n,hide:r}=Yn({visible:e});return{show:n,hide:r,Modal:l=>o.jsx(Xt,{open:t,...l})}},rC=({color:e,className:t,style:n,fixed:r,light:l,dark:a,children:s})=>o.jsx("div",{className:We("overlay",t,e,{fixed:r,light:l,dark:a}),style:n,children:s}),io=ce(rC,"Overlay"),oC=({open:e=!1}={})=>{const{isVisible:t,show:n,hide:r}=Yn({visible:e});return{show:n,hide:r,Overlay:l=>t&&o.jsx(io,{...l})}},ii={searching:!1,search:void 0,results:void 0,result:void 0,cursor:void 0};class Sn extends Yo{constructor(t){super(t);const n=this.inputValue();this.state={...this.state,input:n,searching:!1},this.startSearch=t.debounceTime?h9(this.search.bind(this),t.debounceTime):this.search.bind(this)}componentDidMount(){this.mounted=!0,this.props.onLoad(this)}componentWillUnmount(){this.setState({results:null}),this.mounted=!1,this.props.onUnload(this)}inputValue(t=this.props.initialValue){return lt(t)?this.props.displayValue(t):Th}onFocus(){this.debug("onFocus()"),this.setState({hasFocus:!0},this.props.onFocus)}onBlur(){this.debug("onBlur()"),this.setState({hasFocus:!1},this.props.onBlur),ys(500).then(()=>this.clearResults())}onChange(t){const n=t.target.value;this.debug(`input: ${n}`),n.length>=this.props.minLength?this.setState({input:n},this.startSearch):this.setState({input:n,...ii})}onKeyDown(t){this.debug(`onKeyDown(${t.key})`);const n=this.state.cursor;switch(t.key){case Lh:this.setCursor(n+1);break;case Eh:this.setCursor(n-1);break;case Nh:this.selectCursor();break;case Oh:this.reset();break;default:return}t.preventDefault()}reset(){this.debug("reset()");const t=this.props.initialValue,n=this.inputValue(t);this.debug(`reset() [input:${n}] from value: `,t),this.setState({value:t,input:n,...ii},this.props.onReset)}search(){const{input:t}=this.state,{minLength:n,onSearch:r}=this.props;if(t.length<n){this.debug(`search() cancelled - input is shorter than ${n}`);return}if(!r){this.debug("search() cancelled - no onSearch() handler defined");return}this.debug("onSearch: ",r),this.setState({search:t,searching:!0},async()=>this.searchResults(await r(t,this)))}searchResults(t){this.debug("searchResults()",t),this.setState({results:t,searching:!1,cursor:0})}selectResult(t){this.debug("selectResult()",t);const n=this.inputValue(t);this.setState({value:t,input:n,...ii},()=>this.props.onSelect(t))}setCursor(t){this.debug(`setCursor(${t})`);const{results:n}=this.state;this.setState({cursor:n&&n.length?(t+n.length)%n.length:void 0})}selectCursor(){const{cursor:t,results:n}=this.state;n&&n.length&&lt(t)&&this.selectResult(n[t])}clearResults(){this.mounted&&this.setState({results:null})}resultsRef(t){this._resultsRef=t}activeRef(t){Rh(this._resultsRef,t)}}Se(Sn,"debug",!1),Se(Sn,"debugPrefix","Search > "),Se(Sn,"debugColor","MediumVioletRed"),Se(Sn,"defaultProps",{minLength:2,debounceTime:500,onLoad:rt,onUnload:rt,onFocus:rt,onBlur:rt,onReset:rt,onSelect:rt,displayValue:qa("displayValue"),displayResult:qa("displayResult")}),Se(Sn,"initialState",{value:"",searching:!1}),Se(Sn,"initialProps",{value:"initialValue"}),Se(Sn,"actions",["onFocus","onBlur","onChange","onKeyDown","reset","selectResult","setCursor","selectCursor","resultsRef","activeRef"]);const co=wr(Sn),lC=({input:e,onFocus:t,onBlur:n,onChange:r,reset:l,placeholder:a="Search",clearIcon:s="cross",searchIcon:i="search",searchingIcon:c="cog.spin",inputsClass:u="inputs round",prefixClass:d="prefix",suffixClass:x="suffix",inputType:m="text",inputClass:j="",disabled:y,searching:S})=>o.jsxs("div",{className:u,children:[o.jsx("div",{className:d,children:o.jsx(Y,{name:i})}),o.jsx("input",{type:m,placeholder:a,value:e,onFocus:t,onBlur:n,onChange:r,disabled:y,className:j}),o.jsx("div",{className:x,onClick:l,children:o.jsx(Y,{name:S?c:s})})]}),aC=co.Consumer(lC),sC=({result:e,active:t,activeRef:n,onClick:r,onMouseEnter:l,displayResult:a,resultClass:s="item",activeClass:i="active"})=>o.jsx("div",{className:We(s,{[i]:t}),onClick:r,onMouseEnter:l,ref:t?n:null,children:a(e)}),iC=co.Consumer(sC),cC=({noResultsClass:e="none",noResults:t="No results"})=>o.jsx("div",{className:e,children:t}),uC=co.Consumer(cC),dC=({results:e,resultsRef:t,cursor:n,selectResult:r,setCursor:l,resultsClass:a="menu border bdr-1",Result:s=iC,NoResults:i=uC})=>o.jsx("div",{className:a,ref:t,children:Tl(e)&&e.length?e.map((c,u)=>o.jsx(s,{result:c,active:lt(n)&&e[n]===c,onClick:()=>r(c),onMouseEnter:()=>l(u)},c.id??c.value??u)):o.jsx(i,{})}),pC=co.Consumer(dC),fC=({results:e,onKeyDown:t,Input:n=aC,Results:r=pC})=>o.jsxs("div",{className:"search",onKeyDown:t,children:[o.jsx(n,{}),!!e&&o.jsx(r,{})]}),hC=co.Consumer(fC),mC=({Content:e=hC,...t})=>o.jsx(co.Provider,{...t,children:o.jsx(e,{})}),bs=ce(mC,"Search"),xC={value:Th,isOpen:!1,cursor:void 0,selected:void 0},Wt=class Wt extends Qo{constructor(t){super(t);const n=this.inputValue();this.state={...this.state,input:n}}inputValue(t=this.props.initialValue){return lt(t)?this.props.displayValue(t):null}selectState(t){const n=this.inputValue(t);return{value:t,input:n,selected:t}}};Se(Wt,"debug",!0),Se(Wt,"debugPrefix","Select > "),Se(Wt,"debugColor","MediumVioletRed"),Se(Wt,"defaultProps",{...Wt.defaultProps,options:[],displayValue:qa("displayValue"),displayOption:qa("displayOption")}),Se(Wt,"initialState",{...xC}),Se(Wt,"initialProps",{value:"initialValue"}),Se(Wt,"actions",["onFocus","onBlur","onClick","onKeyDown","open","close","setCursor","selectCursor","selectOption","menuRef","activeRef"]);let xc=Wt;const uo=wr(xc),gC=({input:e,onFocus:t,onBlur:n,onClick:r,placeholder:l="Select",placeholderClass:a="placeholder",inputsClass:s="inputs",inputClass:i="input",suffixClass:c="suffix",disabled:u})=>o.jsxs("div",{className:s,onClick:r,children:[o.jsx("div",{onFocus:t,onBlur:n,disabled:u,className:i,tabIndex:0,children:lt(e)?o.jsx(o.Fragment,{children:e}):o.jsx("span",{className:a,children:l})}),o.jsx("div",{className:c,children:o.jsx(Y,{name:"angle-down"})})]}),vC=uo.Consumer(gC),yC=({option:e,active:t,activeRef:n,selected:r,onClick:l,onMouseEnter:a,displayOption:s,optionClass:i="item no-hover",activeClass:c="active",selectedClass:u="selected",disabledClass:d="disabled"})=>o.jsx("div",{className:We(i,e.className,t?c:null,r?u:null,e.disabled?d:null),onMouseEnter:a,onClick:l,ref:t?n:null,"aria-disabled":e.disabled,children:s(e)}),CC=uo.Consumer(yC),jC=({noOptionsClass:e="none",noOptions:t="No options"})=>o.jsx("div",{className:e,children:t}),SC=uo.Consumer(jC),bC=({options:e,menuRef:t,menuClass:n="menu border bdr-1",cursor:r,selected:l,selectOption:a,setCursor:s,Option:i=CC,NoOptions:c=SC})=>o.jsx("div",{className:n,ref:t,children:Tl(e)&&e.length?e.map((u,d)=>o.jsx(i,{option:u,active:lt(r)&&e[r]===u,selected:l===u,onClick:()=>a(u),onMouseEnter:()=>s(d)},u.id??u.value??d)):o.jsx(c,{})}),wC=uo.Consumer(bC),_C=({onKeyDown:e,isOpen:t,selectClass:n="select",openClass:r="open",closedClass:l="closed",Input:a=vC,Menu:s=wC})=>o.jsxs("div",{className:We(n,t?r:l),onKeyDown:e,children:[o.jsx(a,{}),!!t&&o.jsx(s,{})]}),kC=uo.Consumer(_C),TC=({Content:e=kC,...t})=>o.jsx(uo.Provider,{...t,children:o.jsx(e,{})}),ws=ce(TC,"Select"),LC=()=>o.jsxs(V,{children:[o.jsx("h3",{children:"Hello World!"}),"This is an alert."]}),EC=`import React from 'react'
import { Alert } from '@/src/index.jsx'

{/* START */}
// PRETEND: import { Alert } from '@abw/badger-react-ui'

const AlertExample = () =>
  <Alert>
    <h3>Hello World!</h3>
    This is an alert.
  </Alert>

export default AlertExample
`,NC=["red","brown","orange","yellow","olive","green","teal","blue","indigo","violet","purple","pink","maroon"],Mh=({color:e,setColor:t,disabled:n=!1})=>o.jsxs("select",{name:"color",required:!0,value:e,onChange:r=>t(r.target.value),disabled:n,children:[o.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Select Range"}),o.jsx("option",{value:"",children:"Default"}),NC.map(r=>o.jsx("option",{value:r,children:r},r))]}),OC=["smallest","smaller","small","medium","large","larger","largest","x2","x3","x4","x5","x6","x7","x8","x9","x10"],Dh=({size:e,setSize:t})=>o.jsxs("select",{name:"size",required:!0,value:e,onChange:n=>t(n.target.value),children:[o.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Size"}),o.jsx("option",{value:"",children:"Default"}),OC.map(n=>o.jsx("option",{value:n,children:n},n))]}),RC=[0,1,2,3,4,5,6,8,10],MC=({radius:e,setRadius:t})=>o.jsxs("select",{name:"radius",required:!0,value:e,onChange:n=>t(n.target.value),children:[o.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Radius"}),o.jsx("option",{value:"",children:"Default"}),RC.map(n=>o.jsx("option",{value:n,children:n},n))]}),DC=[1,2,3,4,5],PC=({shadow:e,setShadow:t})=>o.jsxs("select",{name:"shadow",required:!0,value:e,onChange:n=>t(n.target.value),children:[o.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Shadow"}),o.jsx("option",{value:"",children:"Default"}),DC.map(n=>o.jsx("option",{value:n,children:n},n))]}),X1=({checked:e,toggle:t,label:n,disabled:r=!1})=>o.jsxs("label",{className:"checkbox border no-focus",children:[o.jsx("input",{type:"checkbox",checked:e,onChange:t,disabled:r}),n]}),AC=[0,1,2,3,4,5,6,8,10],$C=({border:e,setBorder:t,disabled:n=!1})=>o.jsxs("select",{name:"border",required:!0,value:e,onChange:r=>t(r.target.value),disabled:n,children:[o.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Border"}),o.jsx("option",{value:"",children:"Default"}),AC.map(r=>o.jsx("option",{value:r,children:r},r))]}),BC=Object.keys(Ll.icons),gc=({icon:e,setIcon:t,disabled:n=!1})=>o.jsxs("select",{name:"icon",required:!0,value:e,onChange:r=>t(r.target.value),disabled:n,children:[o.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Icon"}),o.jsx("option",{value:"",children:"None"}),BC.map(r=>o.jsx("option",{value:r,children:r},r))]}),IC=()=>{const[e,t]=_.useState(0),[n,r]=_.useState({headline:"",title:"",text:"Hello World!",revealable:!1,stripe:!1}),l=c=>()=>{r(u=>({...u,[c]:!u[c]})),t(u=>u+1)},a=c=>u=>{r(d=>({...d,[c]:u})),t(d=>d+1)},i=`<Alert
  ${FC(n)}
/>`;return o.jsxs("div",{className:"example grid-2 gap-h-8 stack-desktop",children:[o.jsxs("div",{children:[o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Output"}),o.jsx("div",{className:"output mar-b-8",children:o.jsx(UC,{options:n},e)})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Markup"}),o.jsx(En,{code:i,language:"html",expand:!0})]})]}),o.jsx(zC,{options:n,setOption:a,toggleOption:l})]})},zC=({options:e,toggleOption:t,setOption:n})=>{const r=n("headline"),l=n("title"),a=n("text"),s=n("type"),i=n("size"),c=n("color"),u=n("border"),d=n("radius"),x=n("shadow"),m=n("icon"),j=n("headicon"),y=t("stripe"),S=t("revealable");return o.jsxs("div",{children:[o.jsx(ci,{label:"Headline",value:e.headline,setValue:r}),o.jsx(ci,{label:"Title",value:e.title,setValue:l}),o.jsx(ci,{label:"Text",value:e.text,setValue:a}),o.jsxs("div",{className:"grid-2 gap-h-4 stack-mobile top",children:[o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Type"}),o.jsx(HC,{type:e.type,setType:s})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Color"}),o.jsx(Mh,{color:e.color,setColor:c,disabled:e.type})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Size"}),o.jsx(Dh,{size:e.size,setSize:i})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Shadow"}),o.jsx(PC,{shadow:e.shadow,setShadow:x})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Border Width"}),o.jsx($C,{border:e.border,setBorder:u,disabled:e.stripe})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Border Radius"}),o.jsx(MC,{radius:e.radius,setRadius:d})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Headline Icon"}),o.jsx(gc,{icon:e.headicon,setIcon:j,disabled:!e.headline})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Body Icon"}),o.jsx(gc,{icons:e.icon,setIcon:m})]})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Options"}),o.jsxs("div",{className:"grid-2 gap-h-4 stack-mobile top",children:[o.jsx(X1,{checked:e.stripe,toggle:y,label:"Stripe"}),o.jsx(X1,{checked:e.revealable,toggle:S,label:"Revealable",disabled:!e.headline})]})]})]})},FC=e=>{const t=["headline","title","text","type","color","size","headicon","icon"].filter(l=>e[l]).map(l=>`${l}="${e[l]}"`),n=["shadow","border","radius"].filter(l=>e[l]).map(l=>`${l}={${e[l]}}`),r=["stripe","revealable","dismissable"].filter(l=>e[l]);return[...t,...n,...r].join(`
  `)},UC=({options:e})=>o.jsx(V,{...e}),HC=({type:e,setType:t})=>o.jsxs("select",{name:"type",required:!0,value:e,onChange:n=>t(n.target.value),children:[o.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Type"}),o.jsx("option",{value:"",children:"Default"}),["info","warning","success","error"].map(n=>o.jsx("option",{value:n,children:n},n))]}),ci=({label:e,value:t,setValue:n})=>o.jsxs("div",{className:"field",children:[o.jsx("label",{children:e}),o.jsxs("div",{className:"inputs",children:[o.jsx("input",{type:"text",name:"headline",value:t,onChange:r=>n(r.target.value)}),o.jsx("div",{className:"suffix",children:o.jsx(Y,{name:"cross",className:"hover",onClick:()=>n("")})})]})]}),Ph=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["Use the ",o.jsx("code",{children:"Alert"})," component to render an alert. Any child elements will be rendered inside the alert body."]}),o.jsx(we,{Component:LC,code:EC,expand:!0}),o.jsx("h2",{children:"Demo"}),o.jsx(IC,{})]}),WC=Object.freeze(Object.defineProperty({__proto__:null,default:Ph},Symbol.toStringTag,{value:"Module"})),Ah=e=>e.replaceAll(/\W+/g,"-").replace(/^-+/,"").replace(/-+$/,"").toLowerCase(),VC=({render:e})=>{const[t,n]=_.useState({}),r=_.useRef();return e({tocs:t,addToc:(s,i,c,u)=>{const d=t[s]||(t[s]={});d[i]={text:c,ref:u},n({...t})},addTocHeading:(s,i,c,u)=>{const d=t[s]||(t[s]={});d[i]={heading:c,ref:u},n({...t})},contentRef:r})},Ml=wr(VC),ZC=({addToc:e,addTocHeading:t,tocName:n,render:r})=>r({addPageToc:(s,i,c)=>{e(n,s,i,c)},addPageTocHeading:(s,i,c)=>{t(n,s,i,c)}}),Xu=wr(Ml.Consumer(ZC)),GC=({id:e,code:t,title:n=t,children:r,addPageToc:l,split:a})=>{const s=Ah(e||t||n),i=_.useRef(),c=t?`code:${t}`:n;return _.useEffect(()=>{l&&l(s,c,i)},[e,t,n]),o.jsxs("section",{id:s,ref:i,children:[o.jsx("h3",{className:t?"font-mono page-section":"page-section",children:n}),o.jsx("div",{className:a?"cols-2 stack-desktop":"",children:r})]})},F=Xu.Consumer(GC),N=({Component:e,Source:t,children:n,code:r,title:l,caption:a=r?o.jsx("code",{children:r}):l,expand:s,undent:i,lineProps:c,highlightLines:u,...d})=>o.jsxs(F,{code:r,title:l,...d,children:[o.jsx("div",{className:"cols-2 stack-desktop mar-b-4",children:n}),o.jsx(we,{Component:e,code:t,caption:a,expand:s,undent:i,highlightLines:u,lineProps:c})]}),KC=()=>o.jsxs("div",{children:[o.jsx(Io,{text:"Error alert"}),o.jsx(Io,{text:"Error alert with border",border:!0}),o.jsx(Io,{headline:"Error Alert",text:"Error alert with headline",border:!0,shadow:!0}),o.jsx(Io,{title:"Stonehenge",text:"Crushed by a dwarf",icon:"exclamation-thick",stripe:!0,shadow:3})]}),YC=`import React from 'react'
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
`,$h=()=>o.jsx(N,{code:"Error",Component:KC,Source:YC,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"Error"})," component is a short-cut to generate an error alert."]})}),QC=Object.freeze(Object.defineProperty({__proto__:null,default:$h},Symbol.toStringTag,{value:"Module"})),XC=()=>o.jsxs("div",{children:[o.jsx(Ao,{text:"Info alert"}),o.jsx(Ao,{text:"Info alert with border",border:!0}),o.jsx(Ao,{headline:"Info Alert",text:"Info alert with headline",border:!0,shadow:!0}),o.jsx(Ao,{title:"Stonehenge",text:"Where the demons dwell",icon:"info",stripe:!0,shadow:3})]}),qC=`import React from 'react'
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
`,Bh=()=>o.jsx(N,{code:"Info",Component:XC,Source:qC,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"Info"})," component is a short-cut to generate an info alert."]})}),JC=Object.freeze(Object.defineProperty({__proto__:null,default:Bh},Symbol.toStringTag,{value:"Module"})),ej=()=>o.jsxs("div",{children:[o.jsx($o,{text:"Success alert"}),o.jsx($o,{text:"Success alert with border",border:!0}),o.jsx($o,{headline:"Success Alert",text:"Success alert with headline",border:!0,shadow:!0}),o.jsx($o,{title:"Stonehenge",text:"Where the banshees live...",icon:"check-thicker-shrink=4",stripe:!0,shadow:3})]}),tj=`import React from 'react'
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
`,Ih=()=>o.jsx(N,{code:"Success",Component:ej,Source:tj,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"Success"})," component is a short-cut to generate a success alert."]})}),nj=Object.freeze(Object.defineProperty({__proto__:null,default:Ih},Symbol.toStringTag,{value:"Module"})),rj=()=>o.jsxs("div",{children:[o.jsx(Bo,{text:"Warning alert"}),o.jsx(Bo,{text:"Warning alert with border",border:!0}),o.jsx(Bo,{headline:"Warning Alert",text:"Warning alert with headline",border:!0,shadow:!0}),o.jsx(Bo,{title:"Stonehenge",text:"...and they do live well",icon:"exclamation-thick",stripe:!0,shadow:3})]}),oj=`import React from 'react'
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
`,zh=()=>o.jsx(N,{code:"Warning",Component:rj,Source:oj,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"Warning"})," component is a short-cut to generate a warning alert."]})}),lj=Object.freeze(Object.defineProperty({__proto__:null,default:zh},Symbol.toStringTag,{value:"Module"})),aj=()=>o.jsxs("div",{children:[o.jsx(V,{text:"Border Alert",border:!0}),o.jsx(V,{text:"Border Width 2",border:2})]}),sj=`import React from 'react'
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
`,Fh=()=>o.jsx(N,{code:"border",Component:aj,Source:sj,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"border"})," property can be used to add a border.  This can be a number to indicate the border width."]})}),ij=Object.freeze(Object.defineProperty({__proto__:null,default:Fh},Symbol.toStringTag,{value:"Module"})),cj=()=>o.jsx(V,{text:"Hello World!",className:"border shadow-2"}),uj=`import React from 'react'
import { Alert } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Alert
    text="Hello World!"
    className="border shadow-2"
  />
/* END */

export default Component
`,Uh=()=>o.jsx(N,{code:"className",Component:cj,Source:uj,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"className"})," property can be used to set a CSS class."]})}),dj=Object.freeze(Object.defineProperty({__proto__:null,default:Uh},Symbol.toStringTag,{value:"Module"})),pj=()=>o.jsxs("div",{children:[o.jsx(V,{text:"Red Alert",color:"red"}),o.jsx(V,{text:"Brown Alert",color:"brown"}),o.jsx(V,{text:"Orange Alert",color:"orange"}),o.jsx(V,{text:"Yellow Alert",color:"yellow"}),o.jsx(V,{text:"Green Alert",color:"green"}),o.jsx(V,{text:"Teal Alert",color:"teal"}),o.jsx(V,{text:"Blue Alert",color:"blue"}),o.jsx(V,{text:"Indigo Alert",color:"indigo"}),o.jsx(V,{text:"Violet Alert",color:"violet"}),o.jsx(V,{text:"Purple Alert",color:"purple"}),o.jsx(V,{text:"Pink Alert",color:"pink"}),o.jsx(V,{text:"Maroon Alert",color:"maroon"})]}),fj=`import React from 'react'
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
`,Hh=()=>o.jsx(N,{code:"color",Component:pj,Source:fj,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"color"})," property can be used to set the color range used for the alert."]})}),hj=Object.freeze(Object.defineProperty({__proto__:null,default:Hh},Symbol.toStringTag,{value:"Module"})),mj=()=>o.jsx(V,{headline:"Dismissable Alert",text:"A dismissable alert",dismissable:!0}),xj=`import React from 'react'
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
`,Wh=()=>o.jsx(N,{code:"dismissable",Component:mj,Source:xj,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"dismissable"})," property can be used to make an alert dismissable."]})}),gj=Object.freeze(Object.defineProperty({__proto__:null,default:Wh},Symbol.toStringTag,{value:"Module"})),vj=()=>o.jsx(V,{headline:"Headline Icon Alert",headIcon:"bars",text:"An alert with a headline icon"}),yj=`import React from 'react'
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
`,Vh=()=>o.jsx(N,{code:"headicon",Component:vj,Source:yj,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"headIcon"})," property can be used to add an icon to the headline."]})}),Cj=Object.freeze(Object.defineProperty({__proto__:null,default:Vh},Symbol.toStringTag,{value:"Module"})),jj=()=>o.jsx(V,{headline:"Headline Alert",text:"An alert with a headline"}),Sj=`import React from 'react'
import { Alert } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Alert
    headline="Headline Alert"
    text="An alert with a headline"
  />
/* END */

export default Component
`,Zh=()=>o.jsx(N,{code:"headline",Component:jj,Source:Sj,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"headline"})," property can be used to set a headline."]})}),bj=Object.freeze(Object.defineProperty({__proto__:null,default:Zh},Symbol.toStringTag,{value:"Module"})),wj=()=>o.jsxs("div",{children:[o.jsx(V,{icon:"info",type:"info",title:"Eleven",text:"It's one louder"}),o.jsx(V,{icon:"check",type:"success",title:"Eleven",text:"It's one louder"}),o.jsx(V,{icon:"exclamation",type:"error",title:"Eleven",text:"It's one louder"})]}),_j=`import React from 'react'
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
`,Gh=()=>o.jsx(N,{code:"icon",Component:wj,Source:_j,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"icon"})," property can be used to add an icon to the body."]})}),kj=Object.freeze(Object.defineProperty({__proto__:null,default:Gh},Symbol.toStringTag,{value:"Module"})),Tj=()=>o.jsx(V,{headline:"Dismissable Alert",text:"A dismissable alert",onDismiss:()=>window.alert("Bye!"),dismissable:!0}),Lj=`import React from 'react'
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
`,Kh=()=>o.jsx(N,{code:"onDismiss",Component:Tj,Source:Lj,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"onDismiss"})," property can be used to register a function which will be called when the alert is dismissed."]})}),Ej=Object.freeze(Object.defineProperty({__proto__:null,default:Kh},Symbol.toStringTag,{value:"Module"})),Nj=()=>o.jsx(V,{text:"Radius Alert",radius:4}),Oj=`import React from 'react'
import { Alert } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Alert
    text="Radius Alert"
    radius={4}
  />
/* END */

export default Component
`,Yh=()=>o.jsx(N,{code:"radius",Component:Nj,Source:Oj,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"radius"})," property can be used to set the border radius."]})}),Rj=Object.freeze(Object.defineProperty({__proto__:null,default:Yh},Symbol.toStringTag,{value:"Module"})),Mj=()=>o.jsx(V,{headline:"Revealable Alert",text:"A revealable alert",revealable:!0}),Dj=`import React from 'react'
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
`,Qh=()=>o.jsx(N,{code:"revealable",Component:Mj,Source:Dj,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"revealable"})," property can be used to make the alert revealable."]})}),Pj=Object.freeze(Object.defineProperty({__proto__:null,default:Qh},Symbol.toStringTag,{value:"Module"})),Aj=()=>o.jsx(V,{headline:"Revealed Alert",text:"A revealed alert",revealable:!0,revealed:!0}),$j=`import React from 'react'
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
`,Xh=()=>o.jsx(N,{code:"revealed",Component:Aj,Source:$j,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"revealed"})," property can be set to make it a revealable alert initially revealed."]})}),Bj=Object.freeze(Object.defineProperty({__proto__:null,default:Xh},Symbol.toStringTag,{value:"Module"})),Ij=()=>o.jsxs("div",{children:[o.jsx(V,{text:"Alert With Default Shadow (1)",shadow:!0}),o.jsx(V,{text:"Alert With Shadow 2",shadow:2}),o.jsx(V,{text:"Alert With Shadow 3",shadow:3}),o.jsx(V,{text:"Alert With Shadow 4",shadow:4}),o.jsx(V,{text:"Alert With Shadow 5",shadow:5})]}),zj=`import React from 'react'
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
`,qh=()=>o.jsx(N,{code:"shadow",Component:Ij,Source:zj,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"shadow"})," property can be used to add a shadow.  The default value is 1 or you can set it to any number from"," ","1 to 5."]})}),Fj=Object.freeze(Object.defineProperty({__proto__:null,default:qh},Symbol.toStringTag,{value:"Module"})),Uj=()=>o.jsxs("div",{children:[o.jsx(V,{text:"Smallest Alert",size:"smallest"}),o.jsx(V,{text:"Smaller Alert",size:"smaller"}),o.jsx(V,{text:"Small Alert",size:"small"}),o.jsx(V,{text:"Medium Alert",size:"medium"}),o.jsx(V,{text:"Large Alert",size:"large"}),o.jsx(V,{text:"Larger Alert",size:"larger"}),o.jsx(V,{text:"Largest Alert",size:"largest"})]}),Hj=`import React from 'react'
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
`,Jh=()=>o.jsx(N,{code:"size",Component:Uj,Source:Hj,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"size"})," property can be used to set the text size."]})}),Wj=Object.freeze(Object.defineProperty({__proto__:null,default:Jh},Symbol.toStringTag,{value:"Module"})),Vj=()=>o.jsxs("div",{children:[o.jsx(V,{text:"Stripe Alert",stripe:!0,shadow:4}),o.jsx(V,{text:"Info Stripe Alert",type:"info",stripe:!0,shadow:4}),o.jsx(V,{text:"Success Stripe Alert",type:"success",stripe:!0,shadow:4}),o.jsx(V,{text:"Warning Stripe Alert",type:"warning",stripe:!0,shadow:4}),o.jsx(V,{text:"Error Stripe Alert",type:"error",stripe:!0,shadow:4})]}),Zj=`import React from 'react'
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
`,e3=()=>o.jsx(N,{code:"stripe",Component:Vj,Source:Zj,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"stripe"})," property can be set as a short-cut to add the"," ",o.jsx("code",{children:"stripe"})," CSS class for a more minimal look."]})}),Gj=Object.freeze(Object.defineProperty({__proto__:null,default:e3},Symbol.toStringTag,{value:"Module"})),Kj=()=>o.jsx(V,{text:"Hello World!"}),Yj=`import React from 'react'
import { Alert } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Alert text="Hello World!"/>
/* END */

export default Component`,t3=()=>o.jsx(N,{code:"text",Component:Kj,Source:Yj,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"text"})," property can be used to set the body text."]})}),Qj=Object.freeze(Object.defineProperty({__proto__:null,default:t3},Symbol.toStringTag,{value:"Module"})),Xj=()=>o.jsx(V,{title:"Hello World!",children:"This is an alert"}),qj=`import React from 'react'
import { Alert } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Alert title="Hello World!">
    This is an alert
  </Alert>
/* END */

export default Component`,n3=()=>o.jsx(N,{code:"title",Component:Xj,Source:qj,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"title"})," property can be used to set a title."]})}),Jj=Object.freeze(Object.defineProperty({__proto__:null,default:n3},Symbol.toStringTag,{value:"Module"})),eS=()=>o.jsxs("div",{children:[o.jsx(V,{text:"Info Alert",type:"info"}),o.jsx(V,{text:"Success Alert",type:"success"}),o.jsx(V,{text:"Warning Alert",type:"warning"}),o.jsx(V,{text:"Error Alert",type:"error"})]}),tS=`import React from 'react'
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
`,r3=()=>o.jsx(N,{code:"type",Component:eS,Source:tS,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"type"})," property can be used to set it to one of the pre-defined types: ",o.jsx("code",{children:"info"}),", ",o.jsx("code",{children:"success"}),","," ",o.jsx("code",{children:"warning"})," or ",o.jsx("code",{children:"error"}),"."]})}),nS=Object.freeze(Object.defineProperty({__proto__:null,default:r3},Symbol.toStringTag,{value:"Module"})),ht=({tocName:e,children:t})=>o.jsx(Xu.Provider,{tocName:e,children:t}),rS=({id:e,title:t,addPageTocHeading:n})=>{const r=Ah(e||t),l=_.useRef();return _.useEffect(()=>{n&&n(r,t,l)},[e,t]),o.jsx("h2",{id:r,ref:l,className:"section-heading",children:t})},oe=Xu.Consumer(rS),oS=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Alert"}),o.jsx(Ph,{}),o.jsxs(ht,{tocName:"alert",children:[o.jsx(oe,{title:"Properties"}),o.jsx(n3,{}),o.jsx(t3,{}),o.jsx(Zh,{}),o.jsx(Vh,{}),o.jsx(Qh,{}),o.jsx(Xh,{}),o.jsx(Wh,{}),o.jsx(Kh,{}),o.jsx(Uh,{}),o.jsx(Fh,{}),o.jsx(Yh,{}),o.jsx(qh,{}),o.jsx(Jh,{}),o.jsx(Hh,{}),o.jsx(r3,{}),o.jsx(e3,{}),o.jsx(Gh,{}),o.jsx(oe,{title:"Components"}),o.jsx(Bh,{}),o.jsx(Ih,{}),o.jsx(zh,{}),o.jsx($h,{})]})]}),lS=Object.freeze(Object.defineProperty({__proto__:null,default:oS},Symbol.toStringTag,{value:"Module"})),aS=()=>o.jsx(M,{children:"This is a button"}),sS=`import React from 'react'
import { Button } from '@/src/index.jsx'

{/* START */}
// PRETEND: import { Button } from '@abw/badger-react-ui'

const ButtonExample = () =>
  <Button>
    This is a button
  </Button>

export default ButtonExample
`,o3=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"Button"})," component can be used to render a button. Any child elements will be included as content."]}),o.jsxs("p",{className:"cols-2 stack-desktop",children:["There are numerous properties listed below that are typically used as shortcuts to set particular CSS styles.  Any other properties not listed here are forwarded to the ",o.jsx("code",{children:"button"})," component."]}),o.jsx(we,{Component:aS,code:sS,expand:!0})]}),iS=Object.freeze(Object.defineProperty({__proto__:null,default:o3},Symbol.toStringTag,{value:"Module"})),cS=()=>o.jsx(M,{text:"Custom Button Content",Content:({text:e})=>o.jsxs("span",{className:"pad-4",children:["😀 ",e]})}),uS=`import React from 'react'
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
`,l3=()=>o.jsxs(N,{code:"Content",Component:cS,Source:uS,undent:2,expand:!0,children:[o.jsxs("p",{children:["The ",o.jsx("code",{children:"Content"})," property (note the capital C) can be used to provide an alternate component to render the button content. By default it uses ",o.jsx("code",{children:"WithIcons"})," to render the button text with optional icons."]}),o.jsxs("p",{children:["If you want to change the way that button content is generated on a global level then you can use the theming engine to define a different ",o.jsx("code",{children:"Content"})," component for all buttons."]})]}),dS=Object.freeze(Object.defineProperty({__proto__:null,default:l3},Symbol.toStringTag,{value:"Module"})),pS=()=>o.jsxs("div",{className:"flex wrap gap-4",children:[o.jsx(M,{text:"Red Bare",color:"red",bare:!0}),o.jsx(M,{text:"Green Bare",color:"green",bare:!0}),o.jsx(M,{text:"Blue Bare",color:"blue",bare:!0})]}),fS=`import React from 'react'
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
`,a3=()=>o.jsx(N,{code:"bare",Component:pS,Source:fS,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"bare"})," property can be added for bare naked buttons."]})}),hS=Object.freeze(Object.defineProperty({__proto__:null,default:a3},Symbol.toStringTag,{value:"Module"})),mS=()=>o.jsxs("div",{className:"flex middle wrap gap-4",children:[o.jsx(M,{text:"Border 2",color:"red",outline:!0,border:2}),o.jsx(M,{text:"Border 3",color:"brown",outline:!0,border:3}),o.jsx(M,{text:"Border 4",color:"orange",outline:!0,border:4}),o.jsx(M,{text:"Border 5",color:"yellow",outline:!0,border:5})]}),xS=`import React from 'react'
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
`,s3=()=>o.jsx(N,{code:"border",Component:mS,Source:xS,undent:2,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"border"})," property can be used to set the border width. This is only really noticeable on outline buttons.  There is a border around solid buttons (mainly to help in matching the height of other form inputs), although it's the same color as the background."]})}),gS=Object.freeze(Object.defineProperty({__proto__:null,default:s3},Symbol.toStringTag,{value:"Module"})),vS=()=>o.jsxs("div",{className:"flex wrap gap-4",children:[o.jsx(M,{text:"Yellow Button",color:"yellow"}),o.jsx(M,{text:"Bright Yellow Button",color:"yellow",bright:!0})]}),yS=`import React from 'react'
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
`,i3=()=>o.jsx(N,{code:"bright",Component:vS,Source:yS,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"bright"})," property can be added to make the buttons brighter than normal."]})}),CS=Object.freeze(Object.defineProperty({__proto__:null,default:i3},Symbol.toStringTag,{value:"Module"})),jS=()=>o.jsx(M,{text:"Custom Button",className:"red bdw-2 bdr-4 bgc-80 fgc-20 bgd-20 fgd-80"}),SS=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    text="Custom Button"
    className="red bdw-2 bdr-4 bgc-80 fgc-20 bgd-20 fgd-80"
  />
/* END */

export default Component
`,c3=()=>o.jsx(N,{code:"className",Component:jS,Source:SS,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"className"})," property can be added to add a CSS class to the button."]})}),bS=Object.freeze(Object.defineProperty({__proto__:null,default:c3},Symbol.toStringTag,{value:"Module"})),wS=()=>o.jsxs("div",{className:"grid-2 gap-4 stack-tablet",children:[o.jsx(M,{text:"Red Button",color:"red"}),o.jsx(M,{text:"Brown Button",color:"brown"}),o.jsx(M,{text:"Orange Button",color:"orange"}),o.jsx(M,{text:"Yellow Button",color:"yellow"}),o.jsx(M,{text:"Green Button",color:"green"}),o.jsx(M,{text:"Teal Button",color:"teal"}),o.jsx(M,{text:"Blue Button",color:"blue"}),o.jsx(M,{text:"Indigo Button",color:"indigo"}),o.jsx(M,{text:"Violet Button",color:"violet"}),o.jsx(M,{text:"Purple Button",color:"purple"}),o.jsx(M,{text:"Pink Button",color:"pink"}),o.jsx(M,{text:"Maroon Button",color:"maroon"})]}),_S=`import React from 'react'
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
`,u3=()=>o.jsx(N,{code:"color",Component:wS,Source:_S,undent:2,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"color"})," property can be used to set the color range used for the button."]})}),kS=Object.freeze(Object.defineProperty({__proto__:null,default:u3},Symbol.toStringTag,{value:"Module"})),TS=()=>o.jsxs("div",{className:"flex wrap gap-4",children:[o.jsx(M,{text:"Red Button",color:"red"}),o.jsx(M,{text:"Dark Red Button",color:"red",dark:!0})]}),LS=`import React from 'react'
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
`,d3=()=>o.jsx(N,{code:"dark",Component:TS,Source:LS,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"dark"})," property can be added to make the buttons darker than normal."]})}),ES=Object.freeze(Object.defineProperty({__proto__:null,default:d3},Symbol.toStringTag,{value:"Module"})),NS=()=>o.jsx(M,{text:"Disabled Button",disabled:!0}),OS=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    text="Disabled Button"
    disabled
  />
/* END */

export default Component
`,p3=()=>o.jsx(N,{code:"disabled",Component:NS,Source:OS,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"disabled"})," property can be set to disable a button."]})}),RS=Object.freeze(Object.defineProperty({__proto__:null,default:p3},Symbol.toStringTag,{value:"Module"})),MS=()=>o.jsx(M,{color:"green",icon:"bars"}),DS=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    color="green"
    icon="bars"
  />
/* END */

export default Component
`,f3=()=>o.jsx(N,{code:"icon",Component:MS,Source:DS,undent:2,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"icon"})," property can be used to add an icon to a button."]})}),PS=Object.freeze(Object.defineProperty({__proto__:null,default:f3},Symbol.toStringTag,{value:"Module"})),AS=()=>o.jsx(M,{color:"green",text:"Back",iconLeft:"angle-left"}),$S=`import React from 'react'
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
`,h3=()=>o.jsx(N,{code:"iconLeft",Component:AS,Source:$S,undent:2,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"iconLeft"})," property can be used to add an icon to the left side of a button."]})}),BS=Object.freeze(Object.defineProperty({__proto__:null,default:h3},Symbol.toStringTag,{value:"Module"})),IS=()=>o.jsx(M,{color:"green",text:"Next",iconRight:"angle-right"}),zS=`import React from 'react'
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
`,m3=()=>o.jsx(N,{code:"iconRight",Component:IS,Source:zS,undent:2,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"iconRight"})," property can be used to add an icon to the right side of a button."]})}),FS=Object.freeze(Object.defineProperty({__proto__:null,default:m3},Symbol.toStringTag,{value:"Module"})),US=()=>o.jsx(M,{text:"I am labelled!",label:"This is a label"}),HS=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    text="I am labelled!"
    label="This is a label"
  />
/* END */

export default Component
`,x3=()=>o.jsx(N,{code:"label",Component:US,Source:HS,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"label"})," property can be used to set the",o.jsx("code",{children:"aria-label"})," property on the button.  This typically doesn't have any visual effect on the button, but is used by screen readers to provide more detail about the functionality of the button."]})}),WS=Object.freeze(Object.defineProperty({__proto__:null,default:x3},Symbol.toStringTag,{value:"Module"})),VS=()=>o.jsx(M,{text:"Click Me!",onClick:()=>window.alert("Click!")}),ZS=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    text="Click Me!"
    onClick={() => window.alert('Click!')}
  />
/* END */

export default Component
`,g3=()=>o.jsx(N,{code:"onClick",Component:VS,Source:ZS,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"onClick"})," property can be used to register a function which will be called when the button is clicked."]})}),GS=Object.freeze(Object.defineProperty({__proto__:null,default:g3},Symbol.toStringTag,{value:"Module"})),KS=()=>o.jsxs("div",{className:"flex wrap gap-4",children:[o.jsx(M,{text:"Red Outline",color:"red",outline:!0}),o.jsx(M,{text:"Green Outline",color:"green",outline:!0}),o.jsx(M,{text:"Blue Outline",color:"blue",outline:!0})]}),YS=`import React from 'react'
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
`,v3=()=>o.jsx(N,{code:"outline",Component:KS,Source:YS,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"outline"})," property can be added for outline buttons."]})}),QS=Object.freeze(Object.defineProperty({__proto__:null,default:v3},Symbol.toStringTag,{value:"Module"})),XS=()=>o.jsxs("div",{className:"flex middle wrap gap-4",children:[o.jsx(M,{text:"Radius 0",color:"olive",radius:0}),o.jsx(M,{text:"Radius 2",color:"green",radius:2}),o.jsx(M,{text:"Radius 4",color:"teal",radius:3}),o.jsx(M,{text:"Radius 6",color:"blue",radius:4})]}),qS=`import React from 'react'
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
`,y3=()=>o.jsx(N,{code:"radius",Component:XS,Source:qS,undent:2,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"radius"})," property can be used to set the border radius in multiples of the base unit: 0.25rem."]})}),JS=Object.freeze(Object.defineProperty({__proto__:null,default:y3},Symbol.toStringTag,{value:"Module"})),eb=()=>o.jsxs("div",{className:"flex wrap gap-4",children:[o.jsx(M,{text:"Red Shaded",color:"red",shaded:!0}),o.jsx(M,{text:"Green Shaded",color:"green",shaded:!0}),o.jsx(M,{text:"Blue Shaded",color:"blue",shaded:!0})]}),tb=`import React from 'react'
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
`,C3=()=>o.jsx(N,{code:"shaded",Component:eb,Source:tb,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"shaded"})," property can be added for shaded buttons."]})}),nb=Object.freeze(Object.defineProperty({__proto__:null,default:C3},Symbol.toStringTag,{value:"Module"})),rb=()=>o.jsxs("div",{className:"flex middle wrap gap-4",children:[o.jsx(M,{text:"Shadow 1",color:"indigo",outline:!0,shadow:!0}),o.jsx(M,{text:"Shadow 2",color:"violet",outline:!0,shadow:2}),o.jsx(M,{text:"Shadow 3",color:"purple",outline:!0,shadow:3}),o.jsx(M,{text:"Shadow 4",color:"pink",outline:!0,shadow:4}),o.jsx(M,{text:"Shadow 5",color:"maroon",outline:!0,shadow:5})]}),ob=`import React from 'react'
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
`,j3=()=>o.jsx(N,{code:"shadow",Component:rb,Source:ob,undent:2,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"shadow"})," property can be used to add a shadow to the button ranging from 1 to 5."]})}),lb=Object.freeze(Object.defineProperty({__proto__:null,default:j3},Symbol.toStringTag,{value:"Module"})),ab=()=>o.jsxs("div",{className:"flex middle wrap gap-4",children:[o.jsx(M,{text:"Smallest",size:"smallest"}),o.jsx(M,{text:"Smaller",size:"smaller"}),o.jsx(M,{text:"Small",size:"small"}),o.jsx(M,{text:"Medium",size:"medium"}),o.jsx(M,{text:"Large",size:"large"}),o.jsx(M,{text:"Larger",size:"larger"}),o.jsx(M,{text:"Largest",size:"largest"}),o.jsx(M,{text:"x3",size:"x3"}),o.jsx(M,{text:"x5",size:"x5"}),o.jsx(M,{text:"x7",size:"x7"})]}),sb=`import React from 'react'
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
`,S3=()=>o.jsx(N,{code:"size",Component:ab,Source:sb,undent:2,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"size"})," property can be used to set the button size. This can be one of: ",o.jsx("code",{children:"smallest"}),", ",o.jsx("code",{children:"smaller"}),", ",o.jsx("code",{children:"small"})," ",",",o.jsx("code",{children:"medium"})," (default - same as no explicit size), ",o.jsx("code",{children:"large"})," ",",",o.jsx("code",{children:"larger"}),", ",o.jsx("code",{children:"largest"}),"; or any of the size multipliers:"," ",o.jsx("code",{children:"x2"}),", ",o.jsx("code",{children:"x3"}),", etc., up to ",o.jsx("code",{children:"x10"}),"."]})}),ib=Object.freeze(Object.defineProperty({__proto__:null,default:S3},Symbol.toStringTag,{value:"Module"})),cb=()=>o.jsx(M,{text:"Grey Button"}),ub=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button text="Grey Button"/>
/* END */

export default Component
`,b3=()=>o.jsx(N,{code:"text",Component:cb,Source:ub,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"text"})," property can be used to set the text for the button."]})}),db=Object.freeze(Object.defineProperty({__proto__:null,default:b3},Symbol.toStringTag,{value:"Module"})),pb=()=>o.jsx(M,{text:"Tooltip",label:"This is a tooltip",tooltip:"top left"}),fb=`import React from 'react'
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
`,w3=()=>o.jsx(N,{code:"tooltip",Component:pb,Source:fb,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"tooltip"})," property can be used to set the",o.jsx("code",{children:"data-tooltip"})," property on the button.  This can be used to indicate the direction of the tooltip, e.g. ",o.jsx("code",{children:"top"}),","," ",o.jsx("code",{children:"right"}),", ",o.jsx("code",{children:"top right"}),", etc. The tooltip content should be defined using the ",o.jsx("code",{children:"label"})," property."]})}),hb=Object.freeze(Object.defineProperty({__proto__:null,default:w3},Symbol.toStringTag,{value:"Module"})),mb=()=>o.jsx(M,{text:"Grey Button",type:"submit"}),xb=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    text="Grey Button"
    type="submit"
  />
/* END */

export default Component
`,_3=()=>o.jsxs(N,{code:"type",Component:mb,Source:xb,undent:2,expand:!0,children:[o.jsxs("p",{children:["The default ",o.jsx("code",{children:"type"})," for a button is set to ",o.jsx("code",{children:"button"}),". In most cases this has no effect.  However, inside the scope of a ",o.jsx("code",{children:"form"})," element, the ",o.jsx("code",{children:"type"})," for a button would usually default to being ",o.jsx("code",{children:"submit"}),".  When clicked, the button would submit the form."]}),o.jsxs("p",{children:["This behaviour usually surprises people (it certainly catches me out from time to time).  Having an explicit default button type prevents this from happening.  When you really do want to add a button to submit a form, you should explicitly set the ",o.jsx("code",{children:"type"})," to"," ",o.jsx("code",{children:"submit"}),".  You can also set it to ",o.jsx("code",{children:"reset"})," to make a reset button for a form."]})]}),gb=Object.freeze(Object.defineProperty({__proto__:null,default:_3},Symbol.toStringTag,{value:"Module"})),vb=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Button"}),o.jsx(o3,{}),o.jsxs(ht,{tocName:"button",children:[o.jsx(oe,{title:"Properties"}),o.jsx(b3,{}),o.jsx(g3,{}),o.jsx(p3,{}),o.jsx(u3,{}),o.jsx(i3,{}),o.jsx(d3,{}),o.jsx(C3,{}),o.jsx(v3,{}),o.jsx(a3,{}),o.jsx(c3,{}),o.jsx(s3,{}),o.jsx(y3,{}),o.jsx(j3,{}),o.jsx(S3,{}),o.jsx(f3,{}),o.jsx(h3,{}),o.jsx(m3,{}),o.jsx(x3,{}),o.jsx(w3,{}),o.jsx(_3,{}),o.jsx(oe,{title:"Components"}),o.jsx(l3,{})]})]}),yb=Object.freeze(Object.defineProperty({__proto__:null,default:vb},Symbol.toStringTag,{value:"Module"})),Cb=({text:e})=>o.jsx("span",{className:"border pad pad-h-4 mar",children:e}),jb=()=>o.jsx(Sr,{buttons:[{text:"One"},{text:"Two"}],Button:Cb}),Sb=`import { Buttons } from '@/src/index.jsx'

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
`,k3=()=>o.jsx(N,{code:"Button",Component:jb,Source:Sb,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"Button"})," property (note the capital B) can be used to define a different component for rendering each button."]})}),bb=Object.freeze(Object.defineProperty({__proto__:null,default:k3},Symbol.toStringTag,{value:"Module"})),wb=()=>o.jsxs(Sr,{children:[o.jsx(M,{text:"One",outline:!0}),o.jsx(M,{text:"Two",outline:!0})]}),_b=`import { Buttons, Button } from '@/src/index.jsx'

{/* START */}
import React from 'react'
// PRETEND: import { Buttons, Button } from '@abw/badger-react-ui'

const ButtonsExample = () =>
  <Buttons>
    <Button text="One" outline/>
    <Button text="Two" outline/>
  </Buttons>

export default ButtonsExample
`,T3=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"Buttons"})," component can be used to render a connected set of buttons."]}),o.jsx(we,{Component:wb,code:_b,expand:!0})]}),kb=Object.freeze(Object.defineProperty({__proto__:null,default:T3},Symbol.toStringTag,{value:"Module"})),Tb=()=>o.jsx(o.Fragment,{children:o.jsx(Sr,{outline:!0,buttonClass:"blue shadow-1",buttons:[{text:"One"},{text:"Two"}]})}),Lb=`import React from 'react'
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
`,L3=()=>o.jsx(N,{code:"buttonClass",Component:Tb,Source:Lb,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"buttonClass"})," property can be used to add a CSS class to each button. Badger CSS targets the ",o.jsx("code",{children:"button"})," element for styling so you don't need to add any special classes to get the default styling."]})}),Eb=Object.freeze(Object.defineProperty({__proto__:null,default:L3},Symbol.toStringTag,{value:"Module"})),Nb=()=>o.jsx(o.Fragment,{children:o.jsx(Sr,{buttons:[{text:"One",outline:!0},{text:"Two",outline:!0}]})}),Ob=`import React from 'react'
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
`,E3=()=>o.jsx(N,{code:"buttons",Component:Nb,Source:Ob,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"buttons"})," property can be used to define properties for a set of buttons."]})}),Rb=Object.freeze(Object.defineProperty({__proto__:null,default:E3},Symbol.toStringTag,{value:"Module"})),Mb=()=>o.jsx(o.Fragment,{children:o.jsx(Sr,{outline:!0,className:"buttons border pad-2 bgc-90 bgd-10 bdr-2",buttons:[{text:"One"},{text:"Two"}]})}),Db=`import React from 'react'
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
`,N3=()=>o.jsx(N,{code:"className",Component:Mb,Source:Db,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"className"})," property can be used to set the CSS class for the buttons container element.  The default value is"," ",o.jsx("code",{children:"buttons"}),".  If you want to use the default styles provided by Badger CSS then you should include ",o.jsx("code",{children:"buttons"})," in the value you provide for ",o.jsx("code",{children:"className"})]})}),Pb=Object.freeze(Object.defineProperty({__proto__:null,default:N3},Symbol.toStringTag,{value:"Module"})),Ab=()=>o.jsx(o.Fragment,{children:o.jsx(Sr,{outline:!0,buttons:[{text:"One"},{text:"Two"},{text:"Three",outline:!1,color:"orange"}]})}),$b=`import React from 'react'
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
`,O3=()=>o.jsx(N,{code:"outline",Component:Ab,Source:$b,undent:4,expand:!0,children:o.jsxs("p",{children:["Additional properties passed to the ",o.jsx("code",{children:"Buttons"})," component will be forwarded to each ",o.jsx("code",{children:"Button"})," component.  For example, you can set the ",o.jsx("code",{children:"outline"})," property on the parent",o.jsx("code",{children:"Buttons"})," component so that you don't have to repeat it for each button.  However, individual buttons can override any of these properties."]})}),Bb=Object.freeze(Object.defineProperty({__proto__:null,default:O3},Symbol.toStringTag,{value:"Module"})),Ib=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Buttons"}),o.jsx(T3,{}),o.jsxs(ht,{tocName:"buttons",children:[o.jsx(oe,{title:"Properties"}),o.jsx(E3,{}),o.jsx(O3,{}),o.jsx(N3,{}),o.jsx(L3,{}),o.jsx(oe,{title:"Components"}),o.jsx(k3,{})]})]}),zb=Object.freeze(Object.defineProperty({__proto__:null,default:Ib},Symbol.toStringTag,{value:"Module"})),Fb=()=>o.jsx(Pv,{text:"I like badgers",onChange:e=>console.log(`Checked: ${e}`)}),Ub=`import { CheckboxState } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { CheckboxState } from '@abw/badger-react-ui

const CheckboxStateExample = () =>
  <CheckboxState
    text="I like badgers"
    onChange={checked => console.log(\`Checked: \${checked}\`)}
  />

export default CheckboxStateExample`,R3=()=>o.jsx(N,{code:"CheckboxState",Component:Fb,Source:Ub,expand:!0,children:o.jsx("div",{children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"CheckboxState"})," function can be used to generate a Checkbox with internal state."]})})}),Hb=Object.freeze(Object.defineProperty({__proto__:null,default:R3},Symbol.toStringTag,{value:"Module"})),Wb=()=>{const[e,t]=_.useState(!1);return o.jsx(br,{text:"I like badgers",checked:e,onChange:t})},Vb=`import { Checkbox } from '@/src/index.jsx'

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

export default CheckboxExample`,M3=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"Checkbox"})," component renders a checkbox with a label."]}),o.jsx(we,{Component:Wb,code:Vb,expand:!0})]}),Zb=Object.freeze(Object.defineProperty({__proto__:null,default:M3},Symbol.toStringTag,{value:"Module"})),Gb=()=>{const[e,t]=_.useState(!1);return o.jsx(br,{text:"I like badgers",checked:e,onChange:t})},Kb=`import { Checkbox } from '@/src/index.jsx'
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

export default CheckedExample`,D3=()=>o.jsx(N,{code:"checked",Component:Gb,Source:Kb,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"checked"})," property should be passed to indicate if the checkbox is checked (",o.jsx("code",{children:"true"}),") or not (",o.jsx("code",{children:"false"}),")."]})}),Yb=Object.freeze(Object.defineProperty({__proto__:null,default:D3},Symbol.toStringTag,{value:"Module"})),Qb=()=>{const[e,t]=_.useState(!1);return o.jsx(br,{checkedText:"I like badgers (well done!)",uncheckedText:"I like badgers (you really should!)",checked:e,onChange:t})},Xb=`import { Checkbox } from '@/src/index.jsx'
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

export default CheckedTextExample`,P3=()=>o.jsx(N,{code:"checkedText / uncheckedText",Component:Qb,Source:Xb,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"checkedText"})," and ",o.jsx("code",{children:"uncheckedText"})," properties can be used to provide different text for the checked and unchecked states."]})}),qb=Object.freeze(Object.defineProperty({__proto__:null,default:P3},Symbol.toStringTag,{value:"Module"})),Jb=()=>{const[e,t]=_.useState(!1);return o.jsx(br,{text:"I like badgers",className:"large border",checked:e,onChange:t})},ew=`import { Checkbox } from '@/src/index.jsx'
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

export default ClassName`,A3=()=>o.jsx(N,{code:"className",Component:Jb,Source:ew,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"className"})," property can be used to add a CSS class to the checkbox ",o.jsx("code",{children:"label"})," element."]})}),tw=Object.freeze(Object.defineProperty({__proto__:null,default:A3},Symbol.toStringTag,{value:"Module"})),nw=()=>{const[e,t]=_.useState(!1);return o.jsx(br,{text:"I like badgers",checked:e,onChange:t})},rw=`import { Checkbox } from '@/src/index.jsx'
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

export default OnChangeExample`,$3=()=>o.jsx(N,{code:"onChange",Component:nw,Source:rw,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"onChange"})," property should be used to define a function to handle changes in the state."]})}),ow=Object.freeze(Object.defineProperty({__proto__:null,default:$3},Symbol.toStringTag,{value:"Module"})),lw=()=>{const[e,t]=_.useState(!1);return o.jsx(br,{text:"Badger are the best!",checked:e,onChange:t})},aw=`import { Checkbox } from '@/src/index.jsx'
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

export default TextExample`,B3=()=>o.jsx(N,{code:"text",Component:lw,Source:aw,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"text"})," property should be used to set the text for the checkbox."]})}),sw=Object.freeze(Object.defineProperty({__proto__:null,default:B3},Symbol.toStringTag,{value:"Module"})),iw=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Checkbox"}),o.jsx(M3,{}),o.jsxs(ht,{tocName:"checkbox",children:[o.jsx(oe,{title:"Properties"}),o.jsx(B3,{}),o.jsx(D3,{}),o.jsx(P3,{}),o.jsx($3,{}),o.jsx(A3,{}),o.jsx(oe,{title:"Components"}),o.jsx(R3,{})]})]}),cw=Object.freeze(Object.defineProperty({__proto__:null,default:iw},Symbol.toStringTag,{value:"Module"})),uw=()=>o.jsx(o.Fragment,{children:o.jsx(Qt,{text:"Delete",color:"red",iconRight:"trash",onClick:()=>window.alert("Confirmed!")})}),dw=`import { Confirm } from '@/src/index.jsx'

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

export default ConfirmExample`,I3=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"Confirm"})," component provides an extra safety net for potentially dangerous operations.  When the user click on the button it then prompts them to confirm or cancel the action."]}),o.jsxs("p",{className:"cols-2 stack-desktop",children:["Additional properties not listed below are forwarded onto the initial button.  For example, you can set the ",o.jsx("code",{children:"text"}),","," ",o.jsx("code",{children:"color"}),", add icons, and so on, just like you would for any other button."]}),o.jsx(we,{Component:uw,code:dw,expand:!0})]}),pw=Object.freeze(Object.defineProperty({__proto__:null,default:I3},Symbol.toStringTag,{value:"Module"})),fw=()=>o.jsx(Qt,{text:"Delete",color:"red",cancel:{text:"Go Back",color:"yellow",outline:!1,iconLeft:"angle-left"}}),hw=`import React from 'react'
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

export default CancelExample`,z3=()=>o.jsx(N,{code:"cancel",Component:fw,Source:hw,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"cancel"})," property can be used to set properties for the cancel button."]})}),mw=Object.freeze(Object.defineProperty({__proto__:null,default:z3},Symbol.toStringTag,{value:"Module"})),xw=()=>o.jsx(Qt,{text:"Delete",color:"red",cancelText:"Nah",cancelColor:"blue",cancelIcon:"angle-left"}),gw=`import React from 'react'
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

export default CancelExample`,F3=()=>o.jsx(N,{id:"cancelProps",code:"cancelXXX",Component:xw,Source:gw,undent:2,expand:!0,children:o.jsxs("p",{children:["You can also set individual properties for the cancel button",o.jsx("code",{children:"cancelIcon"}),","," ",o.jsx("code",{children:"cancelText"}),","," ",o.jsx("code",{children:"cancelColor"})," and"," ",o.jsx("code",{children:"cancelClass"}),"."]})}),vw=Object.freeze(Object.defineProperty({__proto__:null,default:F3},Symbol.toStringTag,{value:"Module"})),yw=()=>o.jsx(o.Fragment,{children:o.jsx(Qt,{className:"buttons border pad-2 bgc-90 bgd-10 bdr-2",icon:"trash",color:"red"})}),Cw=`import React from 'react'
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
`,U3=()=>o.jsx(N,{code:"className",Component:yw,Source:Cw,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"className"})," property can be used to set the CSS class for the buttons container element.  The default value is"," ",o.jsx("code",{children:"buttons"}),".  If you want to use the default styles provided by Badger CSS then you should include ",o.jsx("code",{children:"buttons"})," in the value you provide for ",o.jsx("code",{children:"className"})]})}),jw=Object.freeze(Object.defineProperty({__proto__:null,default:U3},Symbol.toStringTag,{value:"Module"})),Sw=()=>o.jsx(Qt,{text:"Click to Delete",color:"red"}),bw=`import React from 'react'
import { Confirm } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Confirm
    text="Click to Delete"
    color="red"
  />
/* END */

export default Component
`,H3=()=>o.jsx(N,{code:"color",Component:Sw,Source:bw,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"color"})," property can be used to set the color for the initial button."]})}),ww=Object.freeze(Object.defineProperty({__proto__:null,default:H3},Symbol.toStringTag,{value:"Module"})),_w=()=>o.jsx(Qt,{text:"Delete",color:"red",confirm:{text:"Yep, do it!",color:"green",iconRight:"angle-right"}}),kw=`import React from 'react'
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

export default ConfirmExample`,W3=()=>o.jsx(N,{code:"confirm",Component:_w,Source:kw,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"confirm"})," property can be used to set properties for the confirmation button."]})}),Tw=Object.freeze(Object.defineProperty({__proto__:null,default:W3},Symbol.toStringTag,{value:"Module"})),Lw=()=>o.jsx(Qt,{text:"Delete",color:"red",confirmText:"Yep",confirmColor:"green",confirmIcon:"trash"}),Ew=`import React from 'react'
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

export default ConfirmProps`,V3=()=>o.jsx(N,{id:"confirmProps",code:"confirmXXX",Component:Lw,Source:Ew,undent:2,expand:!0,children:o.jsxs("p",{children:["You can also set individual properties for the confirm button",o.jsx("code",{children:"confirmIcon"}),","," ",o.jsx("code",{children:"confirmText"}),","," ",o.jsx("code",{children:"confirmColor"})," and"," ",o.jsx("code",{children:"confirmClass"}),"."]})}),Nw=Object.freeze(Object.defineProperty({__proto__:null,default:V3},Symbol.toStringTag,{value:"Module"})),Ow=()=>o.jsx(Qt,{text:"Click to Delete",color:"red",iconRight:"trash"}),Rw=`import React from 'react'
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
`,Z3=()=>o.jsx(N,{code:"iconRight",Component:Ow,Source:Rw,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"iconRight"})," property can be used to add an icon to the right.  Or ",o.jsx("code",{children:"iconLeft"})," can be used to add an icon to the left. Or just an ",o.jsx("code",{children:"icon"})," if you want an icon without any text."]})}),Mw=Object.freeze(Object.defineProperty({__proto__:null,default:Z3},Symbol.toStringTag,{value:"Module"})),Dw=()=>o.jsx(Qt,{text:"Delete",color:"red",onClick:()=>window.alert("Deleted!")}),Pw=`import React from 'react'
import { Confirm } from '@/src/index.jsx'

const OnClickExample = () =>
  /* START */
  <Confirm
    text="Delete"
    color="red"
    onClick={() => window.alert('Deleted!')}
  />
  /* END */

export default OnClickExample`,G3=()=>o.jsx(N,{code:"onClick",Component:Dw,Source:Pw,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"onClick"})," property should be used to define the handler which will be called when the user confirms the action."]})}),Aw=Object.freeze(Object.defineProperty({__proto__:null,default:G3},Symbol.toStringTag,{value:"Module"})),$w=()=>o.jsx(Qt,{text:"Click to Delete"}),Bw=`import React from 'react'
import { Confirm } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Confirm
    text="Click to Delete"
  />
/* END */

export default Component
`,K3=()=>o.jsx(N,{code:"text",Component:$w,Source:Bw,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"text"})," property can be used to set the text for the initial button."]})}),Iw=Object.freeze(Object.defineProperty({__proto__:null,default:K3},Symbol.toStringTag,{value:"Module"})),zw=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Confirm"}),o.jsx(I3,{}),o.jsxs(ht,{tocName:"confirm",children:[o.jsx(oe,{title:"Properties"}),o.jsx(K3,{}),o.jsx(H3,{}),o.jsx(Z3,{}),o.jsx(U3,{}),o.jsx(z3,{}),o.jsx(F3,{}),o.jsx(W3,{}),o.jsx(V3,{}),o.jsx(oe,{title:"Event Handlers"}),o.jsx(G3,{})]})]}),Fw=Object.freeze(Object.defineProperty({__proto__:null,default:zw},Symbol.toStringTag,{value:"Module"})),Uw=[{name:"Alan",animal:"Anteater",id:10,role:"admin"},{name:"Bobby",animal:"Badger",id:20,role:"admin"},{name:"Brenda",animal:"Badger",id:30,role:"admin"},{name:"Christina",animal:"Cat",id:40,role:"user"},{name:"Derek",animal:"Dog",id:50,role:"user"},{name:"Delia",animal:"Donkey",id:60,role:"admin"},{name:"Edwin",animal:"Elephant",id:70,role:"admin"},{name:"Frank",animal:"Ferret",id:80,role:"user"},{name:"Felicity",animal:"Fox",id:90,role:"admin"},{name:"Gertrude",animal:"Goat",id:11,role:"admin"},{name:"Hector",animal:"Hamster",id:12,role:"admin"},{name:"Ian",animal:"Iguana",id:13,role:"user"},{name:"Julie",animal:"Jellyfish",id:14,role:"user"},{name:"Kevin",animal:"Koala",id:21,role:"user"},{name:"Lionel",animal:"Llama",id:22,role:"user"},{name:"Mary",animal:"Magpie",id:23,role:"user"},{name:"Nerys",animal:"Narwhal",id:24,role:"user"},{name:"Oliver",animal:"Octopus",id:31,role:"user"},{name:"Penny",animal:"Panda",id:32,role:"admin"},{name:"Quentin",animal:"Quail",id:33,role:"admin"},{name:"Roger",animal:"Raccoon",id:41,role:"user"},{name:"Simon",animal:"Stoat",id:42,role:"user"},{name:"Terry",animal:"Tiger",id:43,role:"user"},{name:"Ursula",animal:"Unicorn",id:51,role:"user"},{name:"Violet",animal:"Vole",id:52,role:"user"},{name:"Willy",animal:"Wombat",id:53,role:"user"},{name:"Xerces",animal:"Xenus",id:61,role:"user"},{name:"Yvonne",animal:"Yaz",id:62,role:"user"},{name:"Zebedee",animal:"Zebra",id:63,role:"user"}],Hw=()=>o.jsx(Hy,{rows:Uw,columns:"id name animal role"}),Ww=`import { Datatable } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Datatable } from '@abw/badger-react-ui
import { animals } from '../data.js'

const DatatableExample = () => {
  return (
    <Datatable
      // color="green"
      rows={animals}
      columns="id name animal role"
    />
  )
}

export default DatatableExample`,Y3=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"Datatable"})," component can be used to display, sort, filter and page sets of data."]}),o.jsx(we,{Component:Hw,code:Ww})]}),Vw=Object.freeze(Object.defineProperty({__proto__:null,default:Y3},Symbol.toStringTag,{value:"Module"})),Zw=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Datatable"}),o.jsx(Y3,{}),o.jsx(ht,{tocName:"datatable",children:o.jsx(oe,{title:"Properties"})})]}),Gw=Object.freeze(Object.defineProperty({__proto__:null,default:Zw},Symbol.toStringTag,{value:"Module"})),Kw=()=>o.jsx(Fe,{summary:"Click to reveal",children:"This is the content that is revealed."}),Yw=`import { Details } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Details } from '@abw/badger-react-ui

const DetailsExample = () =>
  <Details summary="Click to reveal">
    This is the content that is revealed.
  </Details>

export default DetailsExample`,Q3=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"Details"})," component displays a summary with revealable content using the native HTML ",o.jsx("code",{children:"details"})," element."]}),o.jsx(we,{Component:Kw,code:Yw})]}),Qw=Object.freeze(Object.defineProperty({__proto__:null,default:Q3},Symbol.toStringTag,{value:"Module"})),Xw=()=>o.jsxs("div",{className:"grid-1 gap-4",children:[o.jsx(Fe,{summary:"Bordered",border:!0,children:"This is the content that is revealed."}),o.jsx(Fe,{summary:"Bordered and Lined",border:!0,lined:!0,children:"This is the content that is revealed."}),o.jsx(Fe,{summary:"Wide Border",border:3,lined:!0,children:"This is the content that is revealed."})]}),qw=`import React from 'react'
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

export default DetailsExample`,X3=()=>o.jsx(N,{code:"border",Component:Xw,Source:qw,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"border"})," property can be used to add a CSS class to add a border around the component.  By itself it will add a one pixel border.  You can also set it to an integer (in pixels) for a wider border.  The same border width will also be applied to the line separating the summary and content when the ",o.jsx("code",{children:"lined"})," ","property is used."]})}),Jw=Object.freeze(Object.defineProperty({__proto__:null,default:X3},Symbol.toStringTag,{value:"Module"})),e_=()=>o.jsxs("div",{className:"grid-1 gap-4",children:[o.jsx(Fe,{summary:"Blue Border",color:"blue",border:!0,lined:!0,children:"This is the content that is revealed."}),o.jsx(Fe,{summary:"Blue Shaded",color:"blue",shaded:!0,lined:!0,border:!0,children:"This is the content that is revealed."})]}),t_=`import React from 'react'
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

export default DetailsExample`,q3=()=>o.jsx(N,{code:"color",Component:e_,Source:t_,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"color"})," property can be used to set the color range. It is most commonly used in conjunction with the ",o.jsx("code",{children:"border"}),","," ",o.jsx("code",{children:"lined"})," and ",o.jsx("code",{children:"shaded"})," properties."]})}),n_=Object.freeze(Object.defineProperty({__proto__:null,default:q3},Symbol.toStringTag,{value:"Module"})),r_=()=>o.jsx("div",{className:"grid-1 gap-4",children:o.jsx(Fe,{summary:"This is the summary",content:"This is the content that is revealed."})}),o_=`import React from 'react'
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

export default DetailsExample`,J3=()=>o.jsx(N,{code:"content",Component:r_,Source:o_,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"content"})," property can be used as a short-cut to set the body content for simple cases."]})}),l_=Object.freeze(Object.defineProperty({__proto__:null,default:J3},Symbol.toStringTag,{value:"Module"})),a_=()=>o.jsx(Fe,{summary:"Lined Details",lined:!0,children:"This is the content that is revealed."}),s_=`import React from 'react'
import { Details } from '@/src/index.jsx'

const DetailsExample = () =>
  /* START */
  <Details summary="Lined Details" lined>
    This is the content that is revealed.
  </Details>
  /* END */

export default DetailsExample`,em=()=>o.jsx(N,{code:"lined",Component:a_,Source:s_,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"lined"})," property can be used to add a CSS class to add a line between the summary and content."]})}),i_=Object.freeze(Object.defineProperty({__proto__:null,default:em},Symbol.toStringTag,{value:"Module"})),c_=()=>o.jsx("div",{className:"grid-1 gap-4",children:o.jsx(Fe,{summary:"This is the summary",open:!0,children:"This is the content that is revealed."})}),u_=`import React from 'react'
import { Details } from '@/src/index.jsx'

const DetailsExample = () =>
  <div className="grid-1 gap-4">
    {/* START */}
    <Details summary="This is the summary" open>
      This is the content that is revealed.
    </Details>
    {/* END */}
  </div>

export default DetailsExample`,tm=()=>o.jsx(N,{code:"open",Component:c_,Source:u_,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"open"})," property can be set to make the details initially open."]})}),d_=Object.freeze(Object.defineProperty({__proto__:null,default:tm},Symbol.toStringTag,{value:"Module"})),p_=()=>o.jsxs("div",{className:"grid-1 gap-4",children:[o.jsx(Fe,{summary:"Border Radius",border:!0,lined:!0,radius:2,children:"This is the content that is revealed."}),o.jsx(Fe,{summary:"Border Radius",border:!0,lined:!0,radius:4,children:"This is the content that is revealed."})]}),f_=`import React from 'react'
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

export default DetailsExample`,nm=()=>o.jsx(N,{code:"radius",Component:p_,Source:f_,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"radius"})," property can be used to set the border radius. It should be an integer in units of 0.25rem."]})}),h_=Object.freeze(Object.defineProperty({__proto__:null,default:nm},Symbol.toStringTag,{value:"Module"})),m_=()=>o.jsxs("div",{className:"grid-1 gap-4",children:[o.jsx(Fe,{summary:"Shaded",shaded:!0,children:"This is the content that is revealed."}),o.jsx(Fe,{summary:"Shaded and Border",border:!0,shaded:!0,children:"This is the content that is revealed."}),o.jsx(Fe,{summary:"Shaded, Lined and Border",border:!0,shaded:!0,lined:!0,children:"This is the content that is revealed."})]}),x_=`import React from 'react'
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

export default DetailsExample`,rm=()=>o.jsx(N,{code:"shaded",Component:m_,Source:x_,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"shaded"})," property can be used to add shading."]})}),g_=Object.freeze(Object.defineProperty({__proto__:null,default:rm},Symbol.toStringTag,{value:"Module"})),v_=()=>o.jsxs("div",{className:"grid-1 gap-4",children:[o.jsx(Fe,{summary:"Shadow 1",border:!0,shaded:!0,shadow:1,children:"This is the content that is revealed."}),o.jsx(Fe,{summary:"Shadow 3",border:!0,shaded:!0,shadow:3,children:"This is the content that is revealed."}),o.jsx(Fe,{summary:"Shadow 5",border:!0,shaded:!0,shadow:5,children:"This is the content that is revealed."})]}),y_=`import React from 'react'
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

export default DetailsExample`,om=()=>o.jsx(N,{code:"shadow",Component:v_,Source:y_,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"shadow"})," property can be used to add a drop shadow. This can be any integer from 1 to 5."]})}),C_=Object.freeze(Object.defineProperty({__proto__:null,default:om},Symbol.toStringTag,{value:"Module"})),j_=()=>o.jsxs("div",{className:"grid-1 gap-4",children:[o.jsx(Fe,{summary:"This is the summary",children:"This is the content that is revealed."}),o.jsx(Fe,{border:!0,lined:!0,summary:o.jsxs("div",{className:"wide flex space middle pad-r-2",children:[o.jsx("div",{children:"Control Panel"}),o.jsx(Y,{name:"cog"})]}),children:"This is the content that is revealed."})]}),S_=`import React from 'react'
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

export default DetailsExample`,lm=()=>o.jsx(N,{code:"summary",Component:j_,Source:S_,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"summary"})," property is used to set the summary text. It can be a text string or any JSX content."]})}),b_=Object.freeze(Object.defineProperty({__proto__:null,default:lm},Symbol.toStringTag,{value:"Module"})),w_=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Details"}),o.jsx(Q3,{}),o.jsxs(ht,{tocName:"details",children:[o.jsx(oe,{title:"Properties"}),o.jsx(lm,{}),o.jsx(J3,{}),o.jsx(tm,{}),o.jsx(em,{}),o.jsx(X3,{}),o.jsx(nm,{}),o.jsx(rm,{}),o.jsx(om,{}),o.jsx(q3,{}),o.jsx(oe,{title:"CSS Classes"}),o.jsxs(F,{code:"className",children:["Set a CSS class for the ",o.jsx("code",{children:"details"})," container element."]}),o.jsxs(F,{code:"summaryClass",children:["Set a CSS class for the ",o.jsx("code",{children:"summary"})," element."]}),o.jsxs(F,{code:"contentClass",children:["Set a CSS class for the content ",o.jsx("code",{children:"div"})," element."]}),o.jsx(oe,{title:"Components"}),o.jsx(F,{code:"Summary",id:"Summary-component",children:"Renders the summary element."}),o.jsx(F,{code:"Content",id:"Content=component",children:"Renders the content."})]})]}),__=Object.freeze(Object.defineProperty({__proto__:null,default:w_},Symbol.toStringTag,{value:"Module"})),k_=()=>o.jsx(et,{text:"Dropdown Menu",options:["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger","Colin Camel","David Donkey","Eddie Elephant","Franky Ferret","Gina Goat","Helen Horse","Ian Iguana","Juliet Jackdaw","Kevin Kangaroo","Linda Llama","Mike Monkey"]}),T_=`import { Dropdown } from '@/src/index.jsx'

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

export default DropdownExample`,am=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"Dropdown"})," component generates a dropdown menu"]}),o.jsxs("div",{className:"cols-2 stack-desktop",children:[o.jsx("p",{children:"The default behaviour is to open the dropdown menu when the user clicks on the trigger."}),o.jsxs("p",{children:["Keyboard navigation is also supported.  The user can ",o.jsx("code",{children:"TAB"})," ","to the trigger and then press ",o.jsx("code",{children:"SPACE"}),", ",o.jsx("code",{children:"ENTER"}),","," ",o.jsx("code",{children:"DOWN"})," or ",o.jsx("code",{children:"UP"})," to open the menu."]}),o.jsxs("p",{children:["Once the menu is open, the ",o.jsx("code",{children:"DOWN"})," and ",o.jsx("code",{children:"UP"})," keys"," ","can be used to select menu items, ",o.jsx("code",{children:"ENTER"})," or"," ",o.jsx("code",{children:"SPACE"})," will select the current item and ",o.jsx("code",{children:"ESCAPE"})," ","will close the menu."]})]}),o.jsx(we,{Component:k_,code:T_})]}),L_=Object.freeze(Object.defineProperty({__proto__:null,default:am},Symbol.toStringTag,{value:"Module"})),E_=()=>o.jsx(et,{text:"Dropdown Menu",iconLeft:"angle-down",options:[{text:"Item One"},{text:"Item Two"},{text:"Item Three"}]}),N_=`import React from 'react'
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

export default DropdownExample`,sm=()=>o.jsx(N,{code:"iconLeft",Component:E_,Source:N_,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"iconLeft"})," property can used to define an icon for the left side of the trigger.  The ",o.jsx("code",{children:"iconLeftClass"})," can be used to add a CSS class for it."]})}),O_=Object.freeze(Object.defineProperty({__proto__:null,default:sm},Symbol.toStringTag,{value:"Module"})),R_=()=>o.jsx(et,{text:"Dropdown Menu",iconLeft:"angle-right",iconLeftRotate:90,options:[{text:"Item One"},{text:"Item Two"},{text:"Item Three"}]}),M_=`import React from 'react'
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

export default DropdownExample`,im=()=>o.jsx(N,{code:"iconLeftRotate",Component:R_,Source:M_,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"iconLeftRotate"})," property can used to specify the rotation (in degrees) of the icon when the dropdown is open."]})}),D_=Object.freeze(Object.defineProperty({__proto__:null,default:im},Symbol.toStringTag,{value:"Module"})),P_=()=>o.jsx(et,{right:!0,text:"Dropdown Menu",iconRight:"angle-down",options:[{text:"Item One"},{text:"Item Two"},{text:"Item Three"}]}),A_=`import React from 'react'
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

export default DropdownExample`,cm=()=>o.jsx(N,{code:"iconRight",Component:P_,Source:A_,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"iconRight"})," property can used to define an icon for the left side of the trigger.  The ",o.jsx("code",{children:"iconRightClass"})," can be used to add a CSS class for it."]})}),$_=Object.freeze(Object.defineProperty({__proto__:null,default:cm},Symbol.toStringTag,{value:"Module"})),B_=()=>o.jsx(et,{text:"Dropdown Menu",iconRight:"angle-left",iconRightRotate:-90,options:[{text:"Item One"},{text:"Item Two"},{text:"Item Three"}]}),I_=`import React from 'react'
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

export default DropdownExample`,um=()=>o.jsx(N,{code:"iconRightRotate",Component:B_,Source:I_,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"iconRightRotate"})," property can used to specify the rotation (in degrees) of the icon when the dropdown is open."]})}),z_=Object.freeze(Object.defineProperty({__proto__:null,default:um},Symbol.toStringTag,{value:"Module"})),F_=()=>o.jsx(et,{text:"Dropdown Menu",onSelect:e=>alert(`You selected: ${e.text}`),options:[{text:"Item One"},{text:"Item Two"},{text:"Item Three"}]}),U_=`import React from 'react'
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

export default DropdownExample`,dm=()=>o.jsx(N,{code:"onSelect",Component:F_,Source:U_,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"onSelect"})," property should be used to define a handler which will be called when an item is selected, either by being clicked on or by keyboard selection.  The handler will be passed the data for the item that was selected."]})}),H_=Object.freeze(Object.defineProperty({__proto__:null,default:dm},Symbol.toStringTag,{value:"Module"})),W_=()=>o.jsx(et,{openOnHover:!0,text:"Dropdown Menu",options:[{text:"Item One"},{text:"Item Two"},{text:"Item Three"}]}),V_=`import React from 'react'
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

export default DropdownExample`,pm=()=>o.jsx(N,{code:"openOnHover",Component:W_,Source:V_,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"openOnHover"})," property can added to make the menu open when the mouse hovers over the trigger."]})}),Z_=Object.freeze(Object.defineProperty({__proto__:null,default:pm},Symbol.toStringTag,{value:"Module"})),G_=()=>o.jsx(et,{text:"Simple Options",options:["Hello","World",10,11]}),K_=`import React from 'react'
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

export default DropdownExample`,Y_=()=>o.jsx(et,{text:"Option Separators",options:["One","Two","Three",{separator:!0},"Eleven","Twelve","Thirteen",{separator:!0},"One Hundred","Two Hundred","Three Hundred"]}),Q_=`import React from 'react'
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

export default DropdownExample`,X_=()=>o.jsx(et,{text:"Object Options",options:[{text:"Star",iconLeft:"star"},{text:"Heart",iconRight:"heart",className:"text-right"},{text:"Move",iconLeft:"angle-left",iconRight:"angle-right"},{text:o.jsxs("div",{className:"flex space small",children:[o.jsx("div",{children:"Foo"}),o.jsx("div",{children:"Bar"})]})}]}),q_=`import React from 'react'
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

export default DropdownExample`,J_=()=>o.jsx(et,{text:"Option Headings",options:[{heading:"Single Digit Numbers"},"One","Two","Three",{heading:"Double Digit Numbers"},"Eleven","Twelve","Thirteen",{heading:"Triple Digit Numbers"},"One Hundred","Two Hundred","Three Hundred"]}),ek=`import React from 'react'
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

export default DropdownExample`,tk=()=>o.jsx(et,{text:"Disabled Options",options:[{text:"Disabled #1",disabled:!0},{text:"Enabled #2"},{text:"Disabled #3",disabled:!0},{text:"Enabled #4"},{text:"Disabled #5",disabled:!0}]}),nk=`import React from 'react'
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

export default DropdownExample`,fm=()=>o.jsxs(F,{code:"options",children:[o.jsxs("div",{className:"cols-2 stack-desktop mar-b-4",children:[o.jsxs("p",{children:["The ",o.jsx("code",{children:"options"})," property should be used to define an array of options to display in the menu."]}),o.jsx("p",{children:"For simple cases, each element in the array can be a text string or numerical value."})]}),o.jsx(we,{Component:G_,code:K_,caption:"options",expand:!1,undent:2}),o.jsxs("div",{className:"cols-2 stack-desktop mar-b-4",children:[o.jsxs("p",{children:["An element in the ",o.jsx("code",{children:"options"})," array can also be an object. It should contain a ",o.jsx("code",{children:"text"})," property which can be a string or JSX fragment. A ",o.jsx("code",{children:"className"})," can be included to add a CSS class to the option."]}),o.jsxs("p",{children:["The content for an element is rendered using the ",o.jsx("code",{children:"WithIcon"})," ","component from"," ",o.jsx("a",{href:"https://abw.github.io/badger-icon/",children:"Badger Icon"})," allowing you to include ",o.jsx("code",{children:"iconLeft"})," and ",o.jsx("code",{children:"iconRight"})," properties to add icons to either side, along with ",o.jsx("code",{children:"iconLeftClass"})," and"," ",o.jsx("code",{children:"iconRightClass"})," to set CSS classes for those icons."]})]}),o.jsx(we,{Component:X_,code:q_,caption:"options",expand:!1,undent:2}),o.jsx("div",{className:"cols-2 stack-desktop mar-b-4",children:o.jsxs("p",{children:["An object in the ",o.jsx("code",{children:"options"})," array can have a"," ",o.jsx("code",{children:"disabled"})," property set to ",o.jsx("code",{children:"true"})," to disable the option."]})}),o.jsx(we,{Component:tk,code:nk,caption:"options",expand:!1,undent:2}),o.jsx("div",{className:"cols-2 stack-desktop mar-b-4",children:o.jsxs("p",{children:["An object in the ",o.jsx("code",{children:"options"})," array can have a"," ",o.jsx("code",{children:"separator"})," property set to ",o.jsx("code",{children:"true"})," to create a separator."]})}),o.jsx(we,{Component:Y_,code:Q_,caption:"options",expand:!1,undent:2}),o.jsx("div",{className:"cols-2 stack-desktop mar-b-4",children:o.jsxs("p",{children:["An object in the ",o.jsx("code",{children:"options"})," array can have a"," ",o.jsx("code",{children:"heading"})," property to create a section heading."]})}),o.jsx(we,{Component:J_,code:ek,caption:"options",expand:!1,undent:2})]}),rk=Object.freeze(Object.defineProperty({__proto__:null,default:fm},Symbol.toStringTag,{value:"Module"})),ok=()=>o.jsx(et,{right:!0,text:"Dropdown Menu",options:[{text:"Item One"},{text:"Item Two"},{text:"Item Three"}]}),lk=`import React from 'react'
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

export default DropdownExample`,hm=()=>o.jsx(N,{code:"right",Component:ok,Source:lk,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"right"})," property can added to align the dropdown menu to the right edge of the trigger"]})}),ak=Object.freeze(Object.defineProperty({__proto__:null,default:hm},Symbol.toStringTag,{value:"Module"})),sk=()=>o.jsx(et,{text:"The Trigger Text",options:["Item One","Item Two","Item Three"]}),ik=`import React from 'react'
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

export default DropdownExample`,mm=()=>o.jsx(N,{code:"text",Component:sk,Source:ik,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"text"})," property should be used to define the text for the trigger."]})}),ck=Object.freeze(Object.defineProperty({__proto__:null,default:mm},Symbol.toStringTag,{value:"Module"})),uk=()=>o.jsx(et,{wide:!0,text:"Dropdown Menu",options:[{text:"Item One"},{text:"Item Two"},{text:"Item Three"}]}),dk=`import React from 'react'
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

export default DropdownExample`,xm=()=>o.jsx(N,{code:"wide",Component:uk,Source:dk,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"wide"})," property can added to make the menu expand to the full width of the container."]})}),pk=Object.freeze(Object.defineProperty({__proto__:null,default:xm},Symbol.toStringTag,{value:"Module"})),gl=({children:e,align:t="top"})=>o.jsx("div",{className:`grid-2 gap-h-8 stack-desktop ${t}`,style:{"--prose-width":"100%"},children:e}),fk=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Dropdown"}),o.jsx(am,{}),o.jsxs(ht,{tocName:"dropdown",children:[o.jsx(oe,{title:"Properties"}),o.jsx(mm,{}),o.jsx(fm,{}),o.jsx(dm,{}),o.jsx(pm,{}),o.jsx(hm,{}),o.jsx(xm,{}),o.jsx(sm,{}),o.jsx(im,{}),o.jsx(cm,{}),o.jsx(um,{}),o.jsxs(gl,{children:[o.jsxs("div",{className:"flow",children:[o.jsx(oe,{title:"CSS Classes"}),o.jsxs(F,{code:"className",children:["Used to set the CSS class for the dropdown container.  The default value is ",o.jsx("code",{children:"dropdown"}),"."]}),o.jsxs(F,{code:"openClass",children:["Used to set the CSS class added to the dropdown container when the menu is open.  The default value is ",o.jsx("code",{children:"open"}),"."]}),o.jsxs(F,{code:"closedClass",children:["Used to set the CSS class added to the dropdown container when the menu is closed.  The default value is ",o.jsx("code",{children:"closed"}),"."]}),o.jsxs(F,{code:"triggerClass",children:["Used to set the CSS class added to the dropdown trigger. The default value is ",o.jsx("code",{children:"trigger"}),"."]}),o.jsxs(F,{code:"menuClass",children:["Used to set the CSS class added to the dropdown menu container. The default value is ",o.jsx("code",{children:"menu border bdr-1"}),".  The"," ",o.jsx("code",{children:"border"})," utility class adds a border and"," ",o.jsx("code",{children:"bdr-1"})," sets the border radius to 1 unit (0.25rem or 4px)."]}),o.jsxs(F,{code:"optionClass",children:["Used to set the CSS class added to each dropdown menu item. The default value is ",o.jsx("code",{children:"item no-hover"}),".  The"," ",o.jsx("code",{children:"no-hover"})," class suppresses the hover styles that would usually be applied to menu items.  Instead the"," ",o.jsx("code",{children:"active"})," class is added to the active item, selected either by hovering over it or by keyboard navigation."]}),o.jsxs(F,{code:"separatorClass",children:["Used to set the CSS class added to the dropdown menu separator. The default value is ",o.jsx("code",{children:"separator"}),"."]})]}),o.jsxs("div",{className:"flow",children:[o.jsx(oe,{title:"Components"}),o.jsxs(F,{code:"Trigger",id:"Trigger-component",children:["Renders the dropdown menu trigger.  Defaults to ",o.jsx("code",{children:"DropdownTrigger"}),"."]}),o.jsxs(F,{code:"Menu",id:"Menu-component",children:["Renders the dropdown menu.  Defaults to ",o.jsx("code",{children:"DropdownMenu"}),"."]}),o.jsxs(F,{code:"Option",id:"Option-component",children:["Renders each dropdown menu option.  Defaults to ",o.jsx("code",{children:"DropdownOption"}),"."]}),o.jsxs(F,{code:"Separator",id:"Separator-component",children:["Renders a separator between menu items.  Defaults to ",o.jsx("code",{children:"DropdownSeparator"}),"."]})]})]})]})]}),hk=Object.freeze(Object.defineProperty({__proto__:null,default:fk},Symbol.toStringTag,{value:"Module"})),mk=()=>o.jsx(Y,{name:"check"}),xk=`import React from 'react'
import { Icon } from '@/src/index.jsx'

{/* START */}
// PRETEND: import { Icon } from '@abw/badger-react-ui'

const IconExample = () =>
  <Icon name="check"/>

export default IconExample
`,gk=c9(0,100,5),ca=({name:e,stop:t,setStop:n,disabled:r=!1})=>o.jsxs("select",{name:e,required:!0,value:t,onChange:l=>n(l.target.value),disabled:r,children:[o.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Select Stop"}),o.jsx("option",{value:"",children:"None"}),gk.map(l=>o.jsx("option",{value:l,children:l},l))]}),vk=()=>{const[e,t]=_.useState(0),[n,r]=_.useState({name:"bars"}),l=c=>()=>{r(u=>({...u,[c]:!u[c]})),t(u=>u+1)},a=c=>u=>{r(d=>({...d,[c]:u})),t(d=>d+1)},i=`<Icon
  ${Ck(n)}
/>`;return o.jsxs("div",{className:"example grid-2 gap-8 stack-desktop",children:[o.jsxs("div",{children:[o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Output"}),o.jsx("div",{className:"output mar-b-8",children:o.jsx(jk,{options:n},e)})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Markup"}),o.jsx(En,{code:i,language:"html",expand:!0})]})]}),o.jsx(yk,{options:n,setOption:a,toggleOption:l})]})},yk=({options:e,setOption:t})=>{const n=t("name"),r=t("size"),l=t("color"),a=t("foreground"),s=t("background"),i=t("foregroundDark"),c=t("backgroundDark");return o.jsxs("div",{children:[o.jsxs("div",{className:"grid-3 gap-4 stack-mobile top",children:[o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Icon Name"}),o.jsx(gc,{icon:e.name,setIcon:n})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Size"}),o.jsx(Dh,{size:e.size,setSize:r})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Color"}),o.jsx(Mh,{color:e.color,setColor:l,disabled:e.type})]})]}),o.jsxs("div",{className:"grid-2 gap-4 gap-v-0 stack-mobile top",children:[o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Foreground Stop"}),o.jsx(ca,{stop:e.foreground,setStop:a})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Background Stop"}),o.jsx(ca,{stop:e.background,setStop:s})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Foreground Dark"}),o.jsx(ca,{stop:e.foregroundDark,setStop:i})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Background Dark"}),o.jsx(ca,{stop:e.backgroundDark,setStop:c})]})]})]})},gm=e=>{const t=["name","size"].filter(r=>e[r]).reduce((r,l)=>(r[l]=e[l],r),{}),n=["color","foreground","background","foregroundDark","backgroundDark"].map(r=>e[r]||"").join("-");return n.length>4&&(t.color=n.replace(/-*$/,"")),t},Ck=e=>{const t=gm(e);return Object.entries(t).map(([n,r])=>`${n}="${r}"`).join(`
  `)},jk=({options:e})=>o.jsx(Y,{...gm(e)}),vm=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"Icon"})," component can be used to render SVG icons. The functionality is imported from"," ",o.jsx("a",{href:"https://abw.github.io/badger-icon/",children:"Badger Icon"})," with some extra bells and whistles."]}),o.jsx(we,{Component:mk,code:xk,expand:!0}),o.jsx("h2",{children:"Demo"}),o.jsx(vk,{})]}),Sk=Object.freeze(Object.defineProperty({__proto__:null,default:vm},Symbol.toStringTag,{value:"Module"})),ym=()=>o.jsxs(F,{code:"IconLibrary",children:[o.jsxs("p",{children:["The default set of icons is defined as ",o.jsx("code",{children:"IconLibrary"}),". The ",o.jsx("code",{children:"addIcon()"})," and ",o.jsx("code",{children:"addIcons()"})," function are provided for adding icons to the library."]}),o.jsx("div",{className:"grid-fill gap-4 mar-t-8",children:Object.keys(Ll.icons).map(e=>o.jsxs("div",{className:"text-center bgc-100 bgd-0 fgc-10 fgd-90 pad-4 shadow-2",children:[o.jsx(Y,{name:e,className:"x3"}),o.jsx("div",{className:"small mar-t-4",children:e})]},e))})]}),bk=Object.freeze(Object.defineProperty({__proto__:null,default:ym},Symbol.toStringTag,{value:"Module"})),wk=()=>o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"flex gap-2 middle",children:[o.jsx(Y,{name:"check",className:"smallest"}),o.jsx(Y,{name:"check",className:"smaller"}),o.jsx(Y,{name:"check",className:"small"}),o.jsx(Y,{name:"check"}),o.jsx(Y,{name:"check",className:"large"}),o.jsx(Y,{name:"check",className:"larger"}),o.jsx(Y,{name:"check",className:"largest"})]}),o.jsxs("div",{className:"flex gap-2 mar-t-4",children:[o.jsx(Y,{name:"check",className:"larger green fgc-50"}),o.jsx(Y,{name:"cross",className:"larger red fgc-50"})]})]}),_k=`import React from 'react'
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

export default Component`,Cm=()=>o.jsx(N,{code:"className",Component:wk,Source:_k,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"className"})," property can be used to set a CSS class."]})}),kk=Object.freeze(Object.defineProperty({__proto__:null,default:Cm},Symbol.toStringTag,{value:"Module"})),Tk=()=>o.jsxs("div",{className:"flex gap-2 x2",children:[o.jsx(Y,{name:"check",color:"green-50"}),o.jsx(Y,{name:"check",color:"green-70-30"}),o.jsx(Y,{name:"check",color:"green-70--30"}),o.jsx(Y,{name:"check",color:"green-70-30-30-70"})]}),Lk=`import React from 'react'
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

export default Component`,jm=()=>o.jsxs(N,{code:"color",Component:Tk,Source:Lk,undent:2,expand:!0,children:[o.jsxs("p",{children:["The ",o.jsx("code",{children:"color"})," property is a short-cut to set the color.  This adds the color to the CSS class."]}),o.jsxs("p",{children:["The ",o.jsx("code",{children:"color"})," can be be comprised of up to 5 elements separated by hyphens.  The first is the color range, e.g. ",o.jsx("code",{children:"red"}),","," ",o.jsx("code",{children:"green"}),", ",o.jsx("code",{children:"blue"}),", etc.  The second is the stop number for the foreground.  This is an integer from 0 (darkest) to 100 (lightest) in steps of 5.  The third is the stop number for the background.  The remaining two numbers are stops for the foreground and background colors in dark mode."]})]}),Ek=Object.freeze(Object.defineProperty({__proto__:null,default:jm},Symbol.toStringTag,{value:"Module"})),Nk=()=>o.jsxs("div",{className:"flex gap-2 x2",children:[o.jsx(Y,{name:"bars"}),o.jsx(Y,{name:"check"}),o.jsx(Y,{name:"cross"}),o.jsx(Y,{name:"arrow"}),o.jsx(Y,{name:"arrow-right"}),o.jsx(Y,{name:"arrow-down-thicker.red.fgc-50"})]}),Ok=`import React from 'react'
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

export default Component`,Sm=()=>o.jsxs(N,{code:"name",Component:Nk,Source:Ok,undent:2,expand:!0,children:[o.jsxs("p",{children:["The ",o.jsx("code",{children:"name"})," property can be used to select an icon from the default icon library."]}),o.jsx("p",{children:"Additional modifiers and classes can be added to the name to apply styles and transformations.  See the Badger Icon documentation for further details."})]}),Rk=Object.freeze(Object.defineProperty({__proto__:null,default:Sm},Symbol.toStringTag,{value:"Module"})),Mk=()=>o.jsxs("div",{className:"flex gap-2",children:[o.jsx(Y,{className:"x3",path:"M448,96L448,416C448,434 434,448 416,448L96,448C78,448 64,434 64,416L64,96C64,78 78,64 96,64L416,64C434,64 448,78 448,96ZM384,128L128,128L128,384L384,384L384,128Z"}),o.jsx(Y,{className:"x3",path:"M21,5L21,20C21,20 20,21 20,21L5,21C4,21 3,20 3,20L3,5C3,4 4,3 5,3L20,3C20,3 21,4 21,5ZM18,6L6,6L6,18L18,18L18,6Z",width:24,height:24})]}),Dk=`import React from 'react'
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

export default Component`,bm=()=>o.jsx(N,{code:"path",Component:Mk,Source:Dk,undent:2,expand:!0,children:o.jsxs("p",{children:["You can specify the data for a path.  The default viewbox is assumed to be 512px wide and 512px high.  You can set the ",o.jsx("code",{children:"width"})," and"," ",o.jsx("code",{children:"height"})," properties to change that."]})}),Pk=Object.freeze(Object.defineProperty({__proto__:null,default:bm},Symbol.toStringTag,{value:"Module"})),Ak=()=>o.jsxs("div",{className:"flex gap-2",children:[o.jsx(Y,{name:"check",size:"smallest"}),o.jsx(Y,{name:"check",size:"smaller"}),o.jsx(Y,{name:"check",size:"small"}),o.jsx(Y,{name:"check",size:"medium"}),o.jsx(Y,{name:"check",size:"large"}),o.jsx(Y,{name:"check",size:"larger"}),o.jsx(Y,{name:"check",size:"largest"})]}),$k=`import React from 'react'
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

export default Component`,wm=()=>o.jsx(N,{code:"size",Component:Ak,Source:$k,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"size"})," property is a short-cut to set the size.  This adds the size to the CSS class."]})}),Bk=Object.freeze(Object.defineProperty({__proto__:null,default:wm},Symbol.toStringTag,{value:"Module"})),Ik=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Icon"}),o.jsx(vm,{}),o.jsxs(ht,{tocName:"icon",children:[o.jsx(oe,{title:"Properties"}),o.jsx(Sm,{}),o.jsx(Cm,{}),o.jsx(wm,{}),o.jsx(jm,{}),o.jsx(bm,{}),o.jsx(oe,{title:"Components"}),o.jsx(ym,{})]})]}),zk=Object.freeze(Object.defineProperty({__proto__:null,default:Ik},Symbol.toStringTag,{value:"Module"})),Fk=()=>{const[e,t]=_.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsxs(Xt,{open:e,className:"max-width-30rem",children:[o.jsx("header",{children:o.jsx("h3",{children:"A Modal!"})}),o.jsxs("p",{children:["This is a modal.  The content is rendered as an ",o.jsx("code",{children:"article"}),".  You can include"," ",o.jsx("code",{children:"header"})," and ",o.jsx("code",{children:"footer"})," ","sections if you want, although they're entirely optional."]}),o.jsx("footer",{children:o.jsx(M,{color:"red",text:"Close Modal",onClick:()=>t(!1)})})]}),o.jsx(M,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},Uk=`import { Modal, Button } from '@/src/index.jsx'

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

export default ModalExample`,_m=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"Modal"})," component can be used to create an overlaid modal dialog."]}),o.jsxs("p",{className:"cols-2 stack-desktop",children:["The ",o.jsx("code",{children:"open"})," property should be used to indicate if the modal is open or not. Any child elements will be rendered inside the modal body."]}),o.jsx(we,{Component:Fk,code:Uk,expand:!0})]}),Hk=Object.freeze(Object.defineProperty({__proto__:null,default:_m},Symbol.toStringTag,{value:"Module"})),Wk=()=>{const{show:e,hide:t,Modal:n}=nC();return o.jsxs(o.Fragment,{children:[o.jsxs(n,{children:[o.jsx("p",{children:"Modal State"}),o.jsx(M,{color:"red",text:"Close Modal",onClick:t})]}),o.jsx(M,{color:"green",text:"Open Modal",onClick:e})]})},Vk=`import { ModalState, Button } from '@/src/index.jsx'
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

export default ModalStateExample`,km=()=>o.jsx(N,{code:"ModalState",Component:Wk,Source:Vk,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"ModalState"})," function can be used to generate a Modal with state.  It returns the ",o.jsx("code",{children:"isVisible"})," property,"," ",o.jsx("code",{children:"show"})," and ",o.jsx("code",{children:"hide"})," functions to change the visibility, and a ",o.jsx("code",{children:"Modal"})," component."]})}),Zk=Object.freeze(Object.defineProperty({__proto__:null,default:km},Symbol.toStringTag,{value:"Module"})),Gk=()=>{const[e,t]=_.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsxs(Xt,{open:e,className:"large max-width-25rem pad-8",children:[o.jsx("p",{children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object."}),o.jsx(M,{color:"red",text:"Close Modal",onClick:()=>t(!1)})]}),o.jsx(M,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},Kk=`import { Modal, Button } from '@/src/index.jsx'
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

export default ModalExample`,Tm=()=>o.jsx(N,{code:"className",Component:Gk,Source:Kk,undent:6,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"className"})," property can be used to add a CSS class to the Modal ",o.jsx("code",{children:"dialog"})," element."]})}),Yk=Object.freeze(Object.defineProperty({__proto__:null,default:Tm},Symbol.toStringTag,{value:"Module"})),Qk=()=>{const[e,t]=_.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(Xt,{open:e,close:()=>t(!1),children:o.jsx("p",{children:"This is a modal with a close button."})}),o.jsx(M,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},Xk=`import React, { useState } from 'react'
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

export default ModalExample`,Lm=()=>o.jsx(N,{code:"close",Component:Qk,Source:Xk,undent:6,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"close"})," property can be used to automatically add a close icon to the top right corner.  It should be a function which will close the modal when the icon is clicked."]})}),qk=Object.freeze(Object.defineProperty({__proto__:null,default:Lm},Symbol.toStringTag,{value:"Module"})),Jk=()=>{const[e,t]=_.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(Xt,{open:e,close:()=>t(!1),closeIcon:"thumb",children:o.jsx("p",{children:"This is a modal with a custom close icon."})}),o.jsx(M,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},eT=`import React, { useState } from 'react'
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

export default ModalExample`,Em=()=>o.jsx(N,{code:"closeIcon",Component:Jk,Source:eT,undent:6,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"closeIcon"})," property can be used to change the icon displayed to close the modal."]})}),tT=Object.freeze(Object.defineProperty({__proto__:null,default:Em},Symbol.toStringTag,{value:"Module"})),nT=()=>{const[e,t]=_.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(Xt,{open:e,close:()=>t(!1),title:"Hello World!",text:"This is a modal with a custom footer",footer:o.jsx("div",{className:"text-right",children:o.jsx(M,{color:"red",text:"Close",size:"small",iconRight:"cross",onClick:()=>t(!1)})})}),o.jsx(M,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},rT=`import { Modal, Button } from '@/src/index.jsx'
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

export default ModalExample`,Nm=()=>o.jsx(N,{code:"footer",Component:nT,Source:rT,undent:6,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"footer"})," property can be used to define some custom footer content."]})}),oT=Object.freeze(Object.defineProperty({__proto__:null,default:Nm},Symbol.toStringTag,{value:"Module"})),lT=()=>{const[e,t]=_.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(Xt,{open:e,close:()=>t(!1),text:"This is a modal with a custom header",header:o.jsxs(o.Fragment,{children:[o.jsx("h3",{children:"Custom Header"}),o.jsx("p",{children:"Hello World!"})]})}),o.jsx(M,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},aT=`import { Modal, Button } from '@/src/index.jsx'
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

export default ModalExample`,Om=()=>o.jsx(N,{code:"header",Component:lT,Source:aT,undent:6,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"header"})," property can be used to define some custom header content."]})}),sT=Object.freeze(Object.defineProperty({__proto__:null,default:Om},Symbol.toStringTag,{value:"Module"})),iT=()=>{const[e,t]=_.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(Xt,{open:e,close:()=>t(!1),text:"This is a modal"}),o.jsx(M,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},cT=`import { Modal, Button } from '@/src/index.jsx'

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

export default ModalExample`,Rm=()=>o.jsx(N,{code:"text",Component:iT,Source:cT,undent:6,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"text"})," property can be used to define the body text."]})}),uT=Object.freeze(Object.defineProperty({__proto__:null,default:Rm},Symbol.toStringTag,{value:"Module"})),dT=()=>{const[e,t]=_.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(Xt,{open:e,close:()=>t(!1),text:"This is a modal with a title",title:"My Modal"}),o.jsx(M,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},pT=`import { Modal, Button } from '@/src/index.jsx'
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

export default ModalExample`,Mm=()=>o.jsx(N,{code:"title",Component:dT,Source:pT,undent:6,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"title"})," property can be used to add a title."]})}),fT=Object.freeze(Object.defineProperty({__proto__:null,default:Mm},Symbol.toStringTag,{value:"Module"})),hT=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Modal"}),o.jsx(_m,{}),o.jsxs(ht,{tocName:"modal",children:[o.jsx(oe,{title:"Properties"}),o.jsx(Tm,{}),o.jsx(Lm,{}),o.jsx(Em,{}),o.jsx(Rm,{}),o.jsx(Mm,{}),o.jsx(Om,{}),o.jsx(Nm,{}),o.jsx(oe,{title:"Components"}),o.jsx(km,{})]})]}),mT=Object.freeze(Object.defineProperty({__proto__:null,default:hT},Symbol.toStringTag,{value:"Module"})),xT=()=>{const{isVisible:e,show:t,hide:n}=Yn();return o.jsxs("div",{className:"relative pad-6 border",children:[e&&o.jsx(io,{className:"flex middle center pad-8",children:o.jsxs("div",{children:[o.jsx("p",{className:"larger",children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been... that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object."}),o.jsx(M,{onClick:n,className:"red",text:"Hide Overlay"})]})}),o.jsx("p",{className:"mar-t-none",children:"May I make a suggestion? May I make a suggestion? I've got one other suggestion."}),o.jsx("p",{children:"Well let's hear yours. Let's hear your suggestion."}),o.jsx("p",{children:"Stonehenge! It's the best production value we've ever had on stage."}),o.jsx("p",{children:"But we haven't got the equipment. We haven't got the equipment, we haven't got Stonehenge, we haven't..."}),o.jsx("p",{children:"Not yet we don't. Let's start... Musically, musically we all know it. Musically we all know it. Right? No problems musically. We go right on stage. And it's quite simple. This is you know... Ian can take care of this..."}),o.jsx("p",{children:"I know what the Stonehenge monument looks like. We don't have that piece of scenery anymore."}),o.jsx("p",{children:"I know, so we build a new one. And this is it, look!"}),o.jsx(M,{onClick:t,color:"green",text:"Show Overlay"})]})},gT=`import { Overlay, VisibleState, Button } from '@/src/index.jsx'

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

export default OverlayExample`,Dm=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"Overlay"})," component can be used to create an overlay. The default positioning is absolute so it will fill to cover the nearest parent that has positioning set to relative."]}),o.jsx(we,{Component:xT,code:gT})]}),vT=Object.freeze(Object.defineProperty({__proto__:null,default:Dm},Symbol.toStringTag,{value:"Module"})),yT=()=>{const{show:e,hide:t,Overlay:n}=oC();return o.jsxs(o.Fragment,{children:[o.jsx(n,{fixed:!0,className:"flex center middle",children:o.jsxs("div",{children:[o.jsx("h1",{className:"mar-b-4",children:"Overlay State"}),o.jsx(M,{color:"red",text:"Hide Overlay",onClick:t})]})}),o.jsx(M,{color:"green",text:"Show Overlay",onClick:e})]})},CT=`import { OverlayState, Button } from '@/src/index.jsx'
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

export default OverlayStateExample`,Pm=()=>o.jsx(N,{code:"OverlayState",Component:yT,Source:CT,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"OverlayState"})," function can be used to generate an Overlay with state.  It returns the ",o.jsx("code",{children:"isVisible"})," property,"," ",o.jsx("code",{children:"show"})," and ",o.jsx("code",{children:"hide"})," functions to change the visibility, and an ",o.jsx("code",{children:"Overlay"})," component."]})}),jT=Object.freeze(Object.defineProperty({__proto__:null,default:Pm},Symbol.toStringTag,{value:"Module"})),ST=()=>{const[e,t]=_.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsxs(Xt,{open:e,className:"large max-width-25rem pad-8",children:[o.jsx("p",{children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object."}),o.jsx(M,{color:"red",text:"Close Modal",onClick:()=>t(!1)})]}),o.jsx(M,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},bT=`import { Modal, Button } from '@/src/index.jsx'
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

export default ModalExample`,wT=()=>o.jsx(N,{code:"className",Component:ST,Source:bT,undent:6,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"className"})," property can be used to add a CSS class to the Modal ",o.jsx("code",{children:"dialog"})," element."]})}),_T=Object.freeze(Object.defineProperty({__proto__:null,default:wT},Symbol.toStringTag,{value:"Module"})),kT=()=>{const{isVisible:e,show:t,hide:n}=Yn();return o.jsxs("div",{className:"relative pad-6 border",children:[o.jsx(M,{onClick:t,color:"green",text:"Show Red Overlay"}),e&&o.jsxs(io,{className:"flex space top pad-6",style:{"--color":"var(--red-70)","--background-color":"var(--red-20)","--background-opacity":"10%"},children:[o.jsx("p",{className:"larger",children:"Custom red overlay"}),o.jsx(M,{onClick:n,className:"red",text:"Hide Overlay"})]})]})},TT=`import React from 'react'
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

export default ColorExample`,Am=()=>o.jsx(N,{title:"Custom Colors",Component:kT,Source:TT,undent:8,children:o.jsxs("p",{children:["You can set the ",o.jsx("code",{children:"--color"})," and ",o.jsx("code",{children:"--background-color"})," ","CSS properties to define your own colors for the overlay.  The"," ",o.jsx("code",{children:"--background-opacity"})," can be set to change the background opacity."]})}),LT=Object.freeze(Object.defineProperty({__proto__:null,default:Am},Symbol.toStringTag,{value:"Module"})),ET=()=>{const{isVisible:e,show:t,hide:n}=Yn();return o.jsxs("div",{className:"relative pad-6 border",children:[o.jsx(M,{onClick:t,color:"green",text:"Show Overlay"}),e&&o.jsx(io,{fixed:!0,className:"flex center middle",children:o.jsxs("div",{className:"max-width-40rem",children:[o.jsx("p",{className:"larger",children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been... that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object."}),o.jsx(M,{onClick:n,className:"red",text:"Hide Overlay"})]})})]})},NT=`import React from 'react'
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

export default OverlayExample`,$m=()=>o.jsx(N,{code:"fixed",Component:ET,Source:NT,undent:8,children:o.jsxs("p",{children:["Add the ",o.jsx("code",{children:"fixed"})," to set the overlay position to fixed so that it covers the entire viewport."]})}),OT=Object.freeze(Object.defineProperty({__proto__:null,default:$m},Symbol.toStringTag,{value:"Module"})),RT=()=>{const{isVisible:e,show:t,hide:n}=Yn();return o.jsxs("div",{className:"relative pad-6 border",children:[o.jsx(M,{onClick:t,color:"green",text:"Show Light Overlay"}),e&&o.jsxs(io,{light:!0,className:"flex space top pad-6",children:[o.jsx("p",{className:"larger",children:"Light overlay"}),o.jsx(M,{onClick:n,className:"red",text:"Hide Overlay"})]})]})},MT=`import React from 'react'
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

export default ColorExample`,DT=()=>{const{isVisible:e,show:t,hide:n}=Yn();return o.jsxs("div",{className:"relative pad-6 border",children:[o.jsx(M,{onClick:t,color:"green",text:"Show Dark Overlay"}),e&&o.jsxs(io,{dark:!0,className:"flex space top pad-6",children:[o.jsx("p",{className:"larger",children:"Dark overlay"}),o.jsx(M,{onClick:n,className:"red",text:"Hide Overlay"})]})]})},PT=`import React from 'react'
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

export default ColorExample`,Bm=()=>o.jsxs(F,{code:"light / dark",children:[o.jsxs("p",{className:"cols-2 stack-desktop",children:["The default overlay color is white in light mode and black in dark mode.  You can add the ",o.jsx("code",{children:"light"})," or ",o.jsx("code",{children:"dark"})," ","property to explicitly set it to one or the other."]}),o.jsx(we,{Component:RT,code:MT,caption:"light",undent:8}),o.jsx(we,{Component:DT,code:PT,caption:"dark",undent:8})]}),AT=Object.freeze(Object.defineProperty({__proto__:null,default:Bm},Symbol.toStringTag,{value:"Module"})),$T=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Overlay"}),o.jsx(Dm,{}),o.jsxs(ht,{tocName:"overlay",children:[o.jsx(oe,{title:"Properties"}),o.jsx($m,{}),o.jsx(Bm,{}),o.jsx(oe,{title:"Styling"}),o.jsx(Am,{}),o.jsx(oe,{title:"Components"}),o.jsx(Pm,{})]})]}),BT=Object.freeze(Object.defineProperty({__proto__:null,default:$T},Symbol.toStringTag,{value:"Module"})),IT=({page:e,className:t,onClick:n})=>{const{pageRanges:r}=by(),l=r[e];return o.jsx(M,{text:l,className:t,onClick:n})},zT=()=>{const e=["A-C","D-F","G-I","J-M","N-P","Q-T","U-W","X-Z"],t=e.length,[n,r]=_.useState(0);return o.jsx(Tt,{pages:t,page:n,setPage:r,pageRanges:e,Page:IT,size:"small"})},FT=`import { Pager, usePager, Button } from '@/src/index.jsx'

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

export default PagerExample`,UT=({items:e})=>o.jsx("table",{className:"wide shaded striped celled",children:o.jsx("tbody",{children:e.map(([t,n])=>o.jsx(HT,{name:t,value:n},t))})}),HT=({name:e,value:t})=>o.jsxs("tr",{children:[o.jsx("td",{className:"font-mono",children:e}),o.jsx("td",{children:t})]}),Im=()=>o.jsxs(o.Fragment,{children:[o.jsx("h2",{children:"Context"}),o.jsxs("div",{className:"cols-2 stack-desktop",children:[o.jsx("p",{children:"A react context is created which provides the items listed below. Any other properties passed in to the component will also be accessible to child components."}),o.jsxs("p",{children:["Values are provided for the 0-based indexes of the first, last, previous, next and current pages. For example, the lowest value for ",o.jsx("code",{children:"page"})," is"," ",o.jsx("code",{children:"0"})," and the highest value is ",o.jsx("code",{children:"pages - 1"}),"."]}),o.jsxs("p",{children:['Their counterparts are also provided in "human readable" 1-based form with a ',o.jsx("code",{children:"No"})," suffix.  For example, the values for ",o.jsx("code",{children:"pageNo"})," range from ",o.jsx("code",{children:"1"})," to ",o.jsx("code",{children:"pages"}),", and will always be one more than ",o.jsx("code",{children:"page"}),"."]})]}),o.jsx(UT,{items:[["pages","The total number of pages, as passed into the component as a property."],["page","The index (0 based) of the current page, as passed into the component as a property."],["setPage","The function for setting a page index, as passed into the component as a property."],["pageNo",o.jsxs(o.Fragment,{children:["The current page number (1 based), effectively one louder than ",o.jsx("code",{children:"page"}),".  e.g. if ",o.jsx("code",{children:"page"})," is ten then this goes up to eleven."]})],["firstPage","The index (0 based) of the first page.  This is always 0 but is included for completeness."],["firstPageNo","The number (1 based) of the first page.  This is always 1 but is included for completeness."],["lastPage","The index (0 based) of the last page."],["lastPageNo","The number (1 based) of the first page."],["prevPage","The index (0 based) of the previous page."],["prevPageNo","The number (1 based) of the previous page."],["nextPage","The index (0 based) of the next page."],["nextPageNo","The number (1 based) of the next page."]]}),o.jsx("h2",{children:"Custom Component"}),o.jsxs("div",{className:"cols-2 stack-desktop",children:[o.jsxs("p",{children:["You can provide your own components to render certain elements of the pager widget. These will be passed relevant parameters as properties and can use the ",o.jsx("code",{children:"usePager()"})," hook to access the full pager context, including any additional properties that you pass to the ",o.jsx("code",{children:"Pager"})," component."]}),o.jsxs("p",{children:["In this example we define a custom ",o.jsx("code",{children:"MyPageButton"})," component to replace the ",o.jsx("code",{children:"Page"})," component that renders the numbered page buttons.  Instead of displaying page numbers it shows alphabetical ranges for each button, defined in a custom ",o.jsx("code",{children:"pageRanges"})," "," ","property."]})]}),o.jsx(we,{Component:zT,code:FT})]}),WT=Object.freeze(Object.defineProperty({__proto__:null,default:Im},Symbol.toStringTag,{value:"Module"})),VT=()=>{const[e,t]=_.useState(0);return o.jsx(Tt,{pages:11,page:e,setPage:t})},ZT=`import { Pager } from '@/src/index.jsx'

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

export default PagerExample`,zm=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"Pager"})," component generates buttons for navigating through several pages."]}),o.jsx("div",{className:"cols-2 stack-desktop",children:o.jsxs("p",{children:["The three mandatory properties are ",o.jsx("code",{children:"pages"})," indicating the total number of pages, ",o.jsx("code",{children:"page"})," for the current page index (ranging from 0 to ",o.jsx("code",{children:"pages"})," - 1) and a"," ",o.jsx("code",{children:"setPage"})," handler to set the page index."]})}),o.jsx(we,{Component:VT,code:ZT})]}),GT=Object.freeze(Object.defineProperty({__proto__:null,default:zm},Symbol.toStringTag,{value:"Module"})),KT=()=>{const[e,t]=_.useState(0);return o.jsx("div",{className:"grid-1 gap-4",children:o.jsx(Tt,{pages:11,page:e,setPage:t,className:"pager small brand border pad-2 bdr-2 bgc-90 bgd-10"})})},YT=`import React, { useState } from 'react'
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
`,Fm=()=>o.jsx(N,{code:"className",Component:KT,Source:YT,undent:4,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"className"})," property can be used to set a CSS class for the pager container.  The default value is ",o.jsx("code",{children:"pager"}),"."]})}),QT=Object.freeze(Object.defineProperty({__proto__:null,default:Fm},Symbol.toStringTag,{value:"Module"})),XT=()=>{const[e,t]=_.useState(0);return o.jsxs("div",{className:"grid-1 gap-4",children:[o.jsx(Tt,{pages:11,page:e,setPage:t,color:"red"}),o.jsx(Tt,{pages:11,page:e,setPage:t,color:"green"}),o.jsx(Tt,{pages:11,page:e,setPage:t,color:"blue"})]})},qT=`import React, { useState } from 'react'
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
`,Um=()=>o.jsx(N,{code:"color",Component:XT,Source:qT,undent:4,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"color"})," property can be used to set the color range used for the buttons.  This is a short-cut which adds the specified color to the CSS class for the pager container."]})}),JT=Object.freeze(Object.defineProperty({__proto__:null,default:Um},Symbol.toStringTag,{value:"Module"})),eL=()=>{const[e,t]=_.useState(0);return o.jsx(Tt,{pages:11,page:e,setPage:t,prevIcon:"angle-left",nextIcon:"angle-right"})},tL=`import React, { useState } from 'react'
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
`,Hm=()=>o.jsx(N,{code:"prevIcon / nextIcon",Component:eL,Source:tL,undent:4,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"prevIcon"})," and ",o.jsx("code",{children:"nextIcon"})," properties can be used to set the icons for the previous and next page button."]})}),nL=Object.freeze(Object.defineProperty({__proto__:null,default:Hm},Symbol.toStringTag,{value:"Module"})),rL=()=>{const[e,t]=_.useState(0);return o.jsx(Tt,{pages:11,page:e,setPage:t,nextIcon:"angle-right"})},oL=`import React, { useState } from 'react'
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
`,lL=()=>o.jsx(N,{code:"nextIcon",Component:rL,Source:oL,undent:4,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"nextIcon"})," property can be used to set the icon for the next page button."]})}),aL=Object.freeze(Object.defineProperty({__proto__:null,default:lL},Symbol.toStringTag,{value:"Module"})),sL=()=>{const[e,t]=_.useState(0);return o.jsx(Tt,{pages:11,page:e,setPage:t,showFirstLast:!1})},iL=`import React, { useState } from 'react'
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
`,Wm=()=>o.jsxs(N,{code:"showFirstLast",Component:sL,Source:iL,undent:4,children:[o.jsxs("p",{children:["The ",o.jsx("code",{children:"showFirstLast"})," property determines if the first and last pages are shown in the set of numbered page buttons. A button for the first page will be displayed when it is less than previous page.  The last page button will be displayed when it is greater than the next page."]}),o.jsxs("p",{children:["This value defaults to ",o.jsx("code",{children:"true"})," but can be set"," ",o.jsx("code",{children:"false"})," to hide these buttons."]})]}),cL=Object.freeze(Object.defineProperty({__proto__:null,default:Wm},Symbol.toStringTag,{value:"Module"})),uL=()=>{const[e,t]=_.useState(0);return o.jsxs("div",{className:"grid-1 gap-4",children:[o.jsx(Tt,{pages:11,page:e,setPage:t,size:"smaller"}),o.jsx(Tt,{pages:11,page:e,setPage:t,size:"small"})]})},dL=`import React, { useState } from 'react'
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
`,Vm=()=>o.jsx(N,{code:"size",Component:uL,Source:dL,undent:4,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"size"})," property can be used to set the size to one of the standard sizes.  This is also a short-cut for adding the size as a CSS class so you can use it to add any of your own size classes."]})}),pL=Object.freeze(Object.defineProperty({__proto__:null,default:Vm},Symbol.toStringTag,{value:"Module"})),fL=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Pager"}),o.jsx(zm,{}),o.jsx(Im,{}),o.jsxs(ht,{tocName:"pager",children:[o.jsx(oe,{title:"Properties"}),o.jsx(Fm,{}),o.jsx(Um,{}),o.jsx(Vm,{}),o.jsx(Hm,{}),o.jsx(Wm,{}),o.jsxs(gl,{children:[o.jsxs("div",{className:"flow",children:[o.jsx(oe,{title:"CSS Classes"}),o.jsxs(F,{code:"className",children:["Used to set the CSS class for the pager container.  The default value is ",o.jsx("code",{children:"pager"}),"."]}),o.jsxs(F,{code:"buttonClass",children:["Used to set a default CSS class for all buttons.  The default value is ",o.jsx("code",{children:"outline"}),"."]}),o.jsxs(F,{code:"prevClass",children:["Used to set the CSS class for the previous page button.  It defaults to the value for ",o.jsx("code",{children:"buttonClass"}),"."]}),o.jsxs(F,{code:"nextClass",children:["Used to set the CSS class for the next page button.  It defaults to the value for ",o.jsx("code",{children:"buttonClass"}),"."]}),o.jsxs(F,{code:"pagesClass",children:["Used to set the CSS class for the numbered page buttons container. The default value is ",o.jsx("code",{children:"pages"}),"."]}),o.jsxs(F,{code:"pageClass",children:["Used to set the CSS class for individual numbered page buttons.  It defaults to the value for ",o.jsx("code",{children:"buttonClass"}),"."]}),o.jsxs(F,{code:"currentPageClass",children:["Used to set the CSS class for the currently selected numbered page button. The default value is ",o.jsx("code",{children:"solid"}),"."]})]}),o.jsxs("div",{className:"flow",children:[o.jsx(oe,{title:"Components"}),o.jsxs(F,{code:"Previous",id:"Previous-component",children:["Renders the previous page button.  Defaults to ",o.jsx("code",{children:"PagerPrevious"}),"."]}),o.jsxs(F,{code:"Next",id:"Next-component",children:["Renders the next page button.  Defaults to ",o.jsx("code",{children:"PagerNext"}),"."]}),o.jsxs(F,{code:"Pages",id:"Pages-component",children:["Renders the collection of numbered page buttons.  Defaults to ",o.jsx("code",{children:"PagerPages"}),"."]}),o.jsxs(F,{code:"Page",id:"Page-component",children:["Renders an individual page button.  Defaults to ",o.jsx("code",{children:"PagerPage"}),"."]}),o.jsxs(F,{code:"Separator",id:"Separator-component",children:["Renders the separator between the first and/or last pages and the rest of the numbered page buttons. Defaults to ",o.jsx("code",{children:"PagerSeparator"}),"."]})]})]})]})]}),hL=Object.freeze(Object.defineProperty({__proto__:null,default:fL},Symbol.toStringTag,{value:"Module"})),mL=["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger"],xL=()=>{const e=t=>mL.filter(n=>n.toLowerCase().indexOf(t.toLowerCase())!==-1);return o.jsx(bs,{onSearch:e})},gL=`import { Search } from '@/src/index.jsx'

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

export default SearchExample`,Zm=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"Search"}),' component implements the familiar "autocomplete" functionality.']}),o.jsx("p",{className:"cols-2 stack-desktop",children:"The user starts typing and after a short debounce delay a set of results matching their input is displayed. The user can then click on a result or use the keyboard to navigate through the results."}),o.jsx(we,{Component:xL,code:gL})]}),vL=Object.freeze(Object.defineProperty({__proto__:null,default:Zm},Symbol.toStringTag,{value:"Module"})),yL=[{name:"Alan Aardvark",tel:"555-1245"},{name:"Amy Aardvark",tel:"555-2233"},{name:"Anne Aardvark",tel:"555-6565"},{name:"Bart Badger",tel:"555-4201"},{name:"Betty Badger",tel:"555-1111"},{name:"Bobby Badger",tel:"555-9876"},{name:"Brenda Badger",tel:"555-3443"},{name:"Brian Badger",tel:"555-1337"}],CL=()=>{const e=n=>o.jsxs("div",{className:"flex space baseline",children:[o.jsx("div",{children:n.name}),o.jsx("div",{className:"smaller",children:n.tel})]}),t=n=>yL.filter(r=>r.name.toLowerCase().indexOf(n.toLowerCase())!==-1);return o.jsx(bs,{onSearch:t,displayResult:e})},jL=`import { Search } from '@/src/index.jsx'

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

export default DisplayResultExample`,Gm=()=>o.jsx(N,{code:"displayResult",Component:CL,Source:jL,expand:!0,children:o.jsxs("p",{children:["If a result is a text string then it will be displayed as the result. If it's an object containing a ",o.jsx("code",{children:"text"}),","," ",o.jsx("code",{children:"label"})," or ",o.jsx("code",{children:"name"})," property then that will be used as the display value.  Otherwise you can provide a"," ",o.jsx("code",{children:"displayResult"})," function to display the result any way you like."]})}),SL=Object.freeze(Object.defineProperty({__proto__:null,default:Gm},Symbol.toStringTag,{value:"Module"})),bL=[{id:100,name:"Alan Aardvark",tel:"555-1245"},{id:101,name:"Amy Aardvark",tel:"555-2233"},{id:102,name:"Anne Aardvark",tel:"555-6565"},{id:110,name:"Bart Badger",tel:"555-4201"},{id:111,name:"Betty Badger",tel:"555-1111"},{id:112,name:"Bobby Badger",tel:"555-9876"},{id:113,name:"Brenda Badger",tel:"555-3443"},{id:114,name:"Brian Badger",tel:"555-1337"}],wL=()=>{const e=n=>`#${n.id}: ${n.name} (${n.tel})`,t=n=>bL.filter(r=>r.name.toLowerCase().indexOf(n.toLowerCase())!==-1);return o.jsx(bs,{onSearch:t,displayValue:e})},_L=`import { Search } from '@/src/index.jsx'

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

export default DisplayValueExample`,Km=()=>o.jsx(N,{code:"displayValue",Component:wL,Source:_L,expand:!0,children:o.jsxs("p",{children:["When a result is selected the same rules will be applied to display the result in the search input.  If it's not a string or an object containing one of the aforementioned properties then you should provide a ",o.jsx("code",{children:"displayValue"})," function to convert the result to a text string that can be displayed."]})}),kL=Object.freeze(Object.defineProperty({__proto__:null,default:Km},Symbol.toStringTag,{value:"Module"})),TL=["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Beatrice Badger","Belinda Badger","Ben Badger","Bert Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger","Brook Badger","Buzz Badger"],LL=()=>{const e=async t=>ys(500).then(()=>TL.filter(n=>n.toLowerCase().indexOf(t.toLowerCase())!==-1));return o.jsx(bs,{onSearch:e,debug:!0})},EL=`import { Search } from '@/src/index.jsx'
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

export default OnSearchExample`,Ym=()=>o.jsx(N,{code:"onSearch",Component:LL,Source:EL,children:o.jsxs("p",{children:["You should provide an ",o.jsx("code",{children:"onSearch"})," function which will be passed the search input and should return an array of results.  This can be an asynchronous function if necessary.  For example, a function which makes an API request to fetch the matching results."]})}),NL=Object.freeze(Object.defineProperty({__proto__:null,default:Ym},Symbol.toStringTag,{value:"Module"})),OL=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Search"}),o.jsx(Zm,{}),o.jsxs(ht,{tocName:"search",children:[o.jsx(oe,{title:"Properties"}),o.jsx(Ym,{}),o.jsx(Gm,{}),o.jsx(Km,{})]})]}),RL=Object.freeze(Object.defineProperty({__proto__:null,default:OL},Symbol.toStringTag,{value:"Module"})),ML=["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger","Colin Camel","David Donkey","Eddie Elephant","Franky Ferret","Gina Goat","Helen Horse","Ian Iguana","Juliet Jackdaw","Kevin Kangaroo","Linda Llama"],DL=()=>o.jsx(ws,{options:ML}),PL=`import { Select } from '@/src/index.jsx'

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

export default SelectExample`,Qm=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"Select"})," component implements a custom select input."]}),o.jsx(we,{Component:DL,code:PL})]}),AL=Object.freeze(Object.defineProperty({__proto__:null,default:Qm},Symbol.toStringTag,{value:"Module"})),$L=[{name:"Alan Aardvark",tel:"555-1245"},{name:"Amy Aardvark",tel:"555-2233"},{name:"Anne Aardvark",tel:"555-6565"},{name:"Bart Badger",tel:"555-4201"},{name:"Betty Badger",tel:"555-1111"},{name:"Bobby Badger",tel:"555-9876"},{name:"Brenda Badger",tel:"555-3443"},{name:"Brian Badger",tel:"555-1337"}],BL=()=>{const e=t=>o.jsxs("div",{className:"flex space baseline",children:[o.jsx("div",{children:t.name}),o.jsx("div",{className:"smaller",children:t.tel})]});return o.jsx(ws,{options:$L,displayOption:e})},IL=`import { Select } from '@/src/index.jsx'

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

export default DisplayOptionExample`,Xm=()=>o.jsx(N,{code:"displayOption",Component:BL,Source:IL,expand:!0,children:o.jsxs("p",{children:["If an option is a text string then it will be displayed as it is. If it's an object containing a ",o.jsx("code",{children:"text"}),","," ",o.jsx("code",{children:"label"})," or ",o.jsx("code",{children:"name"})," property then that will be used as the display value.  Otherwise you can provide a"," ",o.jsx("code",{children:"displayOption"})," function to display the result any way you like."]})}),zL=Object.freeze(Object.defineProperty({__proto__:null,default:Xm},Symbol.toStringTag,{value:"Module"})),FL=[{id:100,name:"Alan Aardvark",tel:"555-1245"},{id:101,name:"Amy Aardvark",tel:"555-2233"},{id:102,name:"Anne Aardvark",tel:"555-6565"},{id:110,name:"Bart Badger",tel:"555-4201"},{id:111,name:"Betty Badger",tel:"555-1111"},{id:112,name:"Bobby Badger",tel:"555-9876"},{id:113,name:"Brenda Badger",tel:"555-3443"},{id:114,name:"Brian Badger",tel:"555-1337"}],UL=()=>{const e=t=>o.jsxs("div",{className:"flex baseline",children:[o.jsxs("span",{className:"smaller mar-r-2",children:["#",t.id]})," ",t.name," (",t.tel,")"]});return o.jsx(ws,{options:FL,displayValue:e})},HL=`import { Select } from '@/src/index.jsx'

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

export default DisplayValueExample`,qm=()=>o.jsx(N,{code:"displayValue",Component:UL,Source:HL,expand:!0,children:o.jsxs("p",{children:["When an option is selected the same rules will be applied to display the option in the search input.  If it's not a string or an object containing one of the aforementioned properties then you should provide a ",o.jsx("code",{children:"displayValue"})," function to convert the result to a text string that can be displayed."]})}),WL=Object.freeze(Object.defineProperty({__proto__:null,default:qm},Symbol.toStringTag,{value:"Module"})),VL=[{id:101,name:"Alan Aardvark"},{id:102,name:"Amy Aardvark"},{id:103,name:"Anne Aardvark"},{id:104,name:"Bart Badger"},{id:105,name:"Betty Badger"},{id:106,name:"Bobby Badger"},{id:107,name:"Brenda Badger"},{id:108,name:"Brian Badger"},{id:109,name:"Colin Camel",disabled:!0},{id:110,name:"Derek Donkey"}],ZL=()=>o.jsx(ws,{options:VL}),GL=`import { Select } from '@/src/index.jsx'

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

export default OptionsExample`,Jm=()=>o.jsx(N,{code:"options",Component:ZL,Source:GL,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"options"})," property should be used to provide an array of options that the user can select from.  Each element in the array can be a string, numerical value or an object.  The ",o.jsx("code",{children:"disabled"})," ","property can be used to mark an option as disabled."]})}),KL=Object.freeze(Object.defineProperty({__proto__:null,default:Jm},Symbol.toStringTag,{value:"Module"})),YL=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Select"}),o.jsx(Qm,{}),o.jsxs(ht,{tocName:"select",children:[o.jsx(oe,{title:"Properties"}),o.jsx(Jm,{}),o.jsx(Xm,{}),o.jsx(qm,{}),o.jsx(F,{code:"disabled",children:"Boolean flag to set the select input to be disabled."}),o.jsxs(F,{code:"placeholder",children:["Set the placeholder text.  The default is ",o.jsx("code",{children:"Search"}),"."]}),o.jsxs(F,{code:"noOptions",children:["Set the text displayed when there are no options to select from. The default is ",o.jsx("code",{children:"No options"}),"."]}),o.jsxs(gl,{children:[o.jsxs("div",{children:[o.jsx(oe,{title:"Event Handlers"}),o.jsxs(F,{code:"onLoad",children:["Called when the component is first loaded.  The handler is passed a reference to the ",o.jsx("code",{children:"SearchContext"})," object."]}),o.jsxs(F,{code:"onUnload",children:["Called when the component is unloaded.  The handler is passed a reference to the ",o.jsx("code",{children:"SearchContext"})," object."]}),o.jsx(F,{code:"onFocus",children:"Called when the component gains focus."}),o.jsx(F,{code:"onBlur",children:"Called when the component loses focus."}),o.jsx(F,{code:"onClick",children:"Called when the component is clicked."}),o.jsx(F,{code:"onOpen",children:"Called when the component is opened and selectable options are displayed."}),o.jsx(F,{code:"onClose",children:"Called when the component is closed and selectable options are hidden."}),o.jsx(F,{code:"onSelect",children:"Called when an option is selected.  The selection option is passed as an argument."})]}),o.jsxs("div",{className:"flow",children:[o.jsx(oe,{title:"CSS Classes"}),o.jsxs(F,{code:"placeholderClass",children:["Set the class for the placeholder text. The default is ",o.jsx("code",{children:"placeholder"}),"."]}),o.jsxs(F,{code:"inputClass",children:["Set the class for the input element. The default is ",o.jsx("code",{children:"input"}),"."]}),o.jsxs(F,{code:"selectingClass",children:["Set the class added when a selection is in place. The default is ",o.jsx("code",{children:"selecting"}),"."]}),o.jsxs(F,{code:"optionsClass",children:["Set the class added for the options container. The default is ",o.jsx("code",{children:"menu border bdr-1"}),"."]}),o.jsxs(F,{code:"optionClass",children:["Set the class added to each option element. The default is ",o.jsx("code",{children:"item"}),"."]}),o.jsxs(F,{code:"activeClass",children:["Set the class added to an option that is currently active. The default is ",o.jsx("code",{children:"active"}),"."]}),o.jsxs(F,{code:"noOptionsClass",children:["Set the class added to the element displayed when there are no options to select from. The default is ",o.jsx("code",{children:"none"}),"."]})]}),o.jsxs("div",{className:"flow",children:[o.jsx(oe,{title:"Components"}),o.jsx(F,{code:"Content",children:"Renders the content of the select component."}),o.jsx(F,{code:"Input",children:"Renders the input field."}),o.jsx(F,{code:"Options",id:"Options-component",children:"Renders the selectable options."}),o.jsx(F,{code:"Option",children:"Renders an individual option."}),o.jsx(F,{code:"NoOptions",id:"NoOptions-component",children:"Renders a message indicating that there are no options to select from."})]})]})]})]}),QL=Object.freeze(Object.defineProperty({__proto__:null,default:YL},Symbol.toStringTag,{value:"Module"})),XL=`## using npm
$ npm add @abw/badger-react-ui

## using yarn
$ yarn add @abw/badger-react-ui

## using pnpm
$ pnpm add @abw/badger-react-ui`,qL="import '@abw/badger-react-ui/styles/badger-css-react-ui.min.css';",JL="@import '@abw/badger-react-ui/styles/badger-css-react-ui.scss';",eE=`// If you're already importing Badger CSS styles
// something like this...
import '@abw/badger-css/styles/badger.min.css';

// ...then you only need to add this line to get
// the additional styles from Badger React UI
import '@abw/badger-react-ui/styles/badger-react-ui.min.css';`,tE=`// If you're already importing Badger CSS styles
// something like this...
import '@abw/badger-css/styles/badger.scss';

// ...then you only need to add this line to get
// the additional styles from Badger React UI
import '@abw/badger-react-ui/styles/badger-react-ui.scss';
`,nE=()=>o.jsxs("div",{className:"prose flow",children:[o.jsx("h1",{children:"Installation"}),o.jsx("h2",{children:"Adding to a Javascript Project"}),o.jsxs("p",{children:["Add ",o.jsx("code",{children:"@abw/badger-react-ui"})," to your Javascript project using your favourite package manager."]}),o.jsx(En,{code:XL,caption:"Installing",language:"shell",className:"mar-b-8",expand:!0}),o.jsx("h2",{children:"Importing the CSS"}),o.jsxs(gl,{children:[o.jsx("p",{children:"The precise details on how you import the CSS will vary depending on what framework and bundler you're using.  For a React app using Vite or running under Next.js, for example, you can add the CSS file to your main application script as show below."}),o.jsxs("p",{children:["For other frameworks and/or bundlers you should consult the documentation on how to import a CSS file from a module in your"," ",o.jsx("code",{children:"node_modules"})," directory."]})]}),o.jsx(En,{code:qL,caption:"Combined CSS for Badger CSS / React UI",language:"js",className:"mar-b-8",expand:!0}),o.jsx("h2",{children:"Importing the SCSS"}),o.jsxs(gl,{children:[o.jsx("p",{children:"If you're using SASS/SCSS to build your stylesheet then you can import the SCSS components."}),o.jsx("p",{children:"Add the following line to your main SCSS stylesheet source."})]}),o.jsx(En,{code:JL,caption:"Combined SCSS for Badger CSS / React UI",language:"scss",className:"mar-b-8",expand:!0}),o.jsx("h2",{children:"Includes Badger CSS!"}),o.jsxs("p",{children:["Note that the examples shown above import stylesheets that"," ",o.jsx("b",{children:"include"})," the styles from Badger CSS.  If you're already using Badger CSS and have it imported, or if you've customised your installation of Badger CSS, then you only need to import the additional styles for Badger React UI."]}),o.jsx(En,{code:eE,caption:"Separate CSS for Badger CSS / React UI",language:"js",className:"mar-b-8",expand:!0}),o.jsx(En,{code:tE,caption:"Separate SCSS for Badger CSS / React UI",language:"scss",className:"mar-b-8",expand:!0})]}),rE=Object.freeze(Object.defineProperty({__proto__:null,default:nE},Symbol.toStringTag,{value:"Module"})),oE=e=>_.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 900 348",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",xmlSpace:"preserve","xmlns:serif":"http://www.serif.com/",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:2},...e},_.createElement("path",{className:"white",d:"M251.572,212.02C254.513,216.061 254.715,224.14 250.095,227.707C250.444,223.032 248.285,217.636 246.595,215.207C245.351,213.421 240.529,209.129 235.734,208.678C239.528,206.432 248.479,207.771 251.572,212.02ZM384.14,296.071C385.221,300.139 369.105,297.678 368.976,310.316C368.912,316.686 371.784,320.829 368.158,321.337C364.186,321.893 363.702,317.912 363.009,312.67C361.525,301.448 369.403,297.943 376.939,295.687C383.239,293.8 383.721,294.493 384.14,296.071ZM253.718,205.387C253.325,205.165 252.924,204.95 252.515,204.744C240.306,198.572 226.195,201.866 221.023,212.097C216.954,220.147 219.624,230.108 226.897,236.996C223.855,235.725 220.886,234.082 218.121,232C201.872,219.763 198.65,197.554 202.498,192.469C205.797,188.109 229.508,185.044 245.757,197.281C248.897,199.645 251.533,202.419 253.718,205.387ZM237.701,38.979C234.959,40.644 229.11,29.763 219.15,31.701C213.297,32.839 209.964,30.344 213.732,27.34C224.434,18.806 242.755,35.909 237.701,38.979ZM102.358,65.632C92.93,59.118 82.319,55.79 70.261,59.171C61.606,61.598 55.943,67.285 53.203,74.67C51.916,74.775 50.609,74.911 49.293,75.073C41.358,76.053 33.068,77.961 26.855,79.508C45.336,54.696 68.07,46.037 90.212,45.935L91.775,45.928L92.073,44.393C93.513,36.977 89.339,29.817 78.425,24.264C102.932,19.041 133.157,24.498 149.387,33.721L151.514,34.93L152.164,32.571C153.117,29.113 152.884,20.563 147.007,12.944C177.743,18.398 201.051,28.288 219.375,41.206C253.271,69.998 271.19,107.581 286.422,143.401C303.117,182.661 316.606,219.801 344.235,241.041C344.731,241.562 345.232,242.081 345.737,242.598C354.202,251.26 369.687,264.151 388.439,280.71C390.567,282.59 392.536,284.445 394.289,286.258C390.175,286.465 384.884,287.861 378.121,289.401C355.898,294.457 355.058,304.229 357.619,320.184C358.932,328.361 362.585,332.134 367.854,333.381C347.657,338.931 337.347,342.519 312.425,337.814C273.532,330.471 236.683,316.046 225.943,310.994C225.749,310.608 225.423,310.285 224.995,310.101C210.606,303.913 200.922,296.04 196.833,286.988C198.796,285.944 200.367,284.755 201.74,283.804C202.604,283.205 202.819,282.017 202.22,281.154C201.622,280.29 200.434,280.074 199.57,280.673C196.577,282.748 192.528,286.255 184.628,285.578C183.581,285.489 182.657,286.266 182.568,287.313C182.478,288.361 183.256,289.284 184.303,289.373C187.94,289.685 190.882,289.256 193.326,288.475C197.252,297.211 205.873,305.078 218.736,311.412C193.53,320.617 171.273,314.508 151.338,302.875C130.029,290.441 111.338,271.747 94.517,258.202C80.516,246.928 67.672,239.285 55.79,240.915C48.382,241.931 41.226,246.463 34.375,256.107C23.226,231.606 38.024,207.024 52.658,191.434L54.205,189.786L52.319,188.541C38.022,179.099 21.81,184.908 11.009,196.975C10.204,187.276 14.741,173.112 22.182,160.21C29.69,147.192 40.209,135.4 51.636,130.932C122.17,117.473 156.365,176.933 192.036,228.629C212.984,258.988 259.699,294.806 348.432,323.461C343.645,308.274 345.837,301.003 349.276,294.022C327.909,284.035 301.478,267.497 284.086,236.018C236.493,149.873 215.639,88.568 146.875,71.303C134.894,68.295 119.263,65.091 102.358,65.632ZM102.275,79.762C100.823,87.371 78.096,65.294 73.617,77.189C65.317,99.228 57.382,86.649 59.352,80.667C69.456,49.974 103.609,72.771 102.275,79.762Z",style:{fill:"white"}}),_.createElement("path",{className:"black",d:"M52.054,78.596C51.294,78.672 50.529,78.759 49.759,78.854C39.593,80.108 28.834,82.925 22.777,84.472L17.915,85.714L20.728,81.559C40.142,52.889 64.62,42.703 88.525,42.149C88.888,35.685 83.351,30.024 71.924,25.526L66.722,23.478L72.092,21.924C97.213,14.653 130.162,19.649 148.812,29.092C148.924,24.696 147.199,17.339 140.471,11.578L135.382,7.22L142.003,8.25C168.067,12.303 189.097,19.357 206.402,28.658C206.575,28.721 206.748,28.783 206.921,28.846C208.323,24.341 212.385,20.472 219.865,21.145C239.675,22.925 243.917,32.841 244.961,51.125C270.1,72.457 287.235,102.584 300.677,133.136C312.72,160.511 321.799,188.221 331.031,210.219C334.652,218.847 338.295,226.594 342.151,233.093C344.174,235.417 346.275,237.699 348.461,239.935C356.894,248.564 372.28,261.359 390.96,277.855C394.6,281.069 397.773,284.243 400.276,287.281C402.859,288.644 404.62,291.472 405.778,296.536C405.975,297.173 406.119,297.795 406.209,298.403C406.253,298.697 406.287,298.994 406.314,299.294C406.615,301.13 406.861,303.2 407.058,305.527C407.84,314.777 405.022,326.993 390.631,330.7C387.826,331.422 385.121,332.093 382.547,332.63C378.775,333.843 375.504,334.896 375.505,334.895C353.988,343.064 340.05,346.906 311.718,341.557C270.836,333.838 232.195,318.357 223.053,313.826C195.401,325.115 171.094,318.814 149.418,306.165C127.941,293.633 109.081,274.82 92.128,261.169C85.494,255.827 79.163,251.286 73.076,248.283C67.258,245.412 61.69,243.95 56.308,244.689C49.102,245.677 42.338,250.617 35.728,260.909L33.983,263.626L32.45,260.785C18.325,234.619 32.7,207.872 48.29,190.557C35.023,183.325 20.386,190.519 11.384,202.521L9.087,205.583L8.03,201.904C5.111,191.745 9.777,174.095 18.883,158.307C24.331,148.86 31.344,140.108 39.121,133.986C28.037,137.259 16.107,142.234 3.209,149.173C16.216,114.812 33.291,93.85 51.552,81.51C51.677,80.52 51.845,79.548 52.054,78.596ZM251.572,212.02C248.479,207.771 239.528,206.432 235.734,208.678C240.529,209.129 245.351,213.421 246.595,215.207C248.285,217.636 250.444,223.032 250.095,227.707C254.715,224.14 254.513,216.061 251.572,212.02ZM384.14,296.071C383.721,294.493 383.239,293.8 376.939,295.687C369.403,297.943 361.525,301.448 363.009,312.67C363.702,317.912 364.186,321.893 368.158,321.337C371.784,320.829 368.912,316.686 368.976,310.316C369.105,297.678 385.221,300.139 384.14,296.071ZM253.718,205.387C251.533,202.419 248.897,199.645 245.757,197.281C229.508,185.044 205.797,188.109 202.498,192.469C198.65,197.554 201.872,219.763 218.121,232C220.886,234.082 223.855,235.725 226.897,236.996C219.624,230.108 216.954,220.147 221.023,212.097C226.195,201.866 240.306,198.572 252.515,204.744C252.924,204.95 253.325,205.165 253.718,205.387ZM237.701,38.979C242.755,35.909 224.434,18.806 213.732,27.34C209.964,30.344 213.297,32.839 219.15,31.701C229.11,29.763 234.959,40.644 237.701,38.979ZM102.358,65.632C119.263,65.091 134.894,68.295 146.875,71.303C215.639,88.568 236.493,149.873 284.086,236.018C301.478,267.497 327.909,284.035 349.276,294.022C345.837,301.003 343.645,308.274 348.432,323.461C259.699,294.806 212.984,258.988 192.036,228.629C156.365,176.933 122.17,117.473 51.636,130.932C40.209,135.4 29.69,147.192 22.182,160.21C14.741,173.112 10.204,187.276 11.009,196.975C21.81,184.908 38.022,179.099 52.319,188.541L54.205,189.786L52.658,191.434C38.024,207.024 23.226,231.606 34.375,256.107C41.226,246.463 48.382,241.931 55.79,240.915C67.672,239.285 80.516,246.928 94.517,258.202C111.338,271.747 130.029,290.441 151.338,302.875C171.273,314.508 193.53,320.617 218.736,311.412C205.873,305.078 197.252,297.211 193.326,288.475C190.882,289.256 187.94,289.685 184.303,289.373C183.256,289.284 182.478,288.361 182.568,287.313C182.657,286.266 183.581,285.489 184.628,285.578C192.528,286.255 196.577,282.748 199.57,280.673C200.434,280.074 201.622,280.29 202.22,281.154C202.819,282.017 202.604,283.205 201.74,283.804C200.367,284.755 198.796,285.944 196.833,286.988C200.922,296.04 210.606,303.913 224.995,310.101C225.423,310.285 225.749,310.608 225.943,310.994C236.683,316.046 273.532,330.471 312.425,337.814C337.347,342.519 347.657,338.931 367.854,333.381C362.585,332.134 358.932,328.361 357.619,320.184C355.058,304.229 355.898,294.457 378.121,289.401C384.884,287.861 390.175,286.465 394.289,286.258C392.536,284.445 390.567,282.59 388.439,280.71C369.687,264.151 354.202,251.26 345.737,242.598C345.232,242.081 344.731,241.562 344.235,241.041C316.606,219.801 303.117,182.661 286.422,143.401C271.19,107.581 253.271,69.998 219.375,41.206C201.051,28.288 177.743,18.398 147.007,12.944C152.884,20.563 153.117,29.113 152.164,32.571L151.514,34.93L149.387,33.721C133.157,24.498 102.932,19.041 78.425,24.264C89.339,29.817 93.513,36.977 92.073,44.393L91.775,45.928L90.212,45.935C68.07,46.037 45.336,54.696 26.855,79.508C33.068,77.961 41.358,76.053 49.293,75.073C50.609,74.911 51.916,74.775 53.203,74.67C55.943,67.285 61.606,61.598 70.261,59.171C82.319,55.79 92.93,59.118 102.358,65.632ZM102.275,79.762C103.609,72.771 69.456,49.974 59.352,80.667C57.382,86.649 65.317,99.228 73.617,77.189C78.096,65.294 100.823,87.371 102.275,79.762Z"}),_.createElement("path",{className:"badger",d:"M418.81,39.948C419.704,39.68 421.135,39.389 423.103,39.076C425.07,38.763 427.082,38.607 429.139,38.607C431.107,38.607 432.873,38.741 434.438,39.009C436.003,39.277 437.322,39.814 438.396,40.619C439.469,41.424 440.274,42.519 440.81,43.905C441.347,45.292 441.615,47.103 441.615,49.338L441.615,62.485C443.851,61.591 445.975,60.965 447.987,60.607C449.999,60.249 452.213,60.07 454.628,60.07C458.92,60.07 462.989,60.831 466.835,62.351C470.681,63.871 474.079,66.085 477.03,68.991C479.982,71.898 482.307,75.497 484.006,79.79C485.705,84.083 486.555,89.046 486.555,94.681C486.555,100.494 485.683,105.569 483.939,109.907C482.195,114.244 479.758,117.844 476.628,120.706C473.498,123.567 469.675,125.736 465.158,127.212C460.642,128.687 455.656,129.425 450.201,129.425C444.298,129.425 439.29,128.732 435.176,127.346C431.062,125.96 427.574,124.238 424.712,122.181C420.777,119.409 418.81,115.831 418.81,111.449L418.81,39.948ZM450.201,111.449C454.314,111.449 457.512,110.041 459.792,107.224C462.073,104.406 463.213,100.226 463.213,94.681C463.213,89.046 462.05,84.843 459.725,82.071C457.4,79.298 454.27,77.912 450.335,77.912C448.546,77.912 447.003,78.091 445.707,78.449C444.41,78.806 443.001,79.343 441.481,80.059L441.481,109.303C442.465,109.929 443.65,110.443 445.036,110.846C446.422,111.248 448.144,111.449 450.201,111.449ZM524.787,60.07C529.617,60.07 534.021,60.562 538.001,61.546C541.981,62.53 545.379,64.028 548.196,66.04C551.013,68.052 553.182,70.601 554.702,73.686C556.223,76.772 556.983,80.416 556.983,84.62L556.983,114.669C556.983,116.994 556.335,118.895 555.038,120.37C553.741,121.846 552.198,123.12 550.41,124.193C544.597,127.681 536.413,129.425 525.86,129.425C521.121,129.425 516.85,128.978 513.049,128.084C509.248,127.189 505.984,125.848 503.256,124.059C500.529,122.271 498.427,119.99 496.951,117.218C495.476,114.445 494.738,111.226 494.738,107.559C494.738,101.388 496.571,96.648 500.238,93.339C503.905,90.03 509.584,87.973 517.275,87.168L534.848,85.29L534.848,84.351C534.848,81.758 533.708,79.902 531.428,78.784C529.147,77.666 525.86,77.107 521.568,77.107C518.169,77.107 514.86,77.465 511.641,78.18C508.421,78.896 505.515,79.79 502.921,80.863C501.758,80.059 500.775,78.829 499.97,77.174C499.165,75.52 498.762,73.798 498.762,72.01C498.762,69.684 499.321,67.829 500.439,66.442C501.557,65.056 503.279,63.871 505.604,62.887C508.198,61.904 511.261,61.188 514.793,60.741C518.326,60.294 521.657,60.07 524.787,60.07ZM525.86,112.791C527.381,112.791 529.058,112.634 530.891,112.321C532.724,112.008 534.088,111.583 534.983,111.047L534.983,100.315L525.324,101.12C522.82,101.299 520.763,101.835 519.153,102.73C517.543,103.624 516.738,104.965 516.738,106.754C516.738,108.543 517.431,109.996 518.818,111.114C520.204,112.232 522.551,112.791 525.86,112.791ZM568.117,94.681C568.117,88.778 569.012,83.658 570.8,79.321C572.589,74.983 575.071,71.384 578.245,68.522C581.42,65.66 585.132,63.536 589.38,62.15C593.628,60.763 598.211,60.07 603.13,60.07C604.919,60.07 606.663,60.227 608.362,60.54C610.061,60.853 611.447,61.233 612.52,61.68L612.52,39.948C613.415,39.68 614.846,39.389 616.813,39.076C618.781,38.763 620.793,38.607 622.85,38.607C624.817,38.607 626.584,38.741 628.149,39.009C629.714,39.277 631.033,39.814 632.106,40.619C633.179,41.424 633.984,42.519 634.521,43.905C635.057,45.292 635.326,47.103 635.326,49.338L635.326,112.925C635.326,117.128 633.358,120.482 629.423,122.986C626.83,124.685 623.476,126.183 619.362,127.48C615.248,128.777 610.508,129.425 605.142,129.425C599.329,129.425 594.12,128.62 589.514,127.011C584.908,125.401 581.018,123.076 577.843,120.035C574.668,116.994 572.253,113.35 570.599,109.102C568.944,104.854 568.117,100.047 568.117,94.681ZM606.215,77.912C601.386,77.912 597.675,79.298 595.081,82.071C592.488,84.843 591.191,89.046 591.191,94.681C591.191,100.226 592.398,104.406 594.813,107.224C597.227,110.041 600.715,111.449 605.276,111.449C606.886,111.449 608.339,111.203 609.636,110.711C610.933,110.22 611.939,109.661 612.655,109.035L612.655,79.522C610.866,78.449 608.72,77.912 606.215,77.912ZM681.339,60.07C686.436,60.07 691.064,60.719 695.223,62.016C699.382,63.312 702.892,64.989 705.754,67.046C707.542,68.298 708.951,69.684 709.979,71.205C711.008,72.725 711.522,74.693 711.522,77.107L711.522,124.059C711.522,128.799 710.628,132.891 708.839,136.334C707.051,139.777 704.613,142.639 701.528,144.919C698.443,147.2 694.821,148.877 690.662,149.95C686.503,151.023 682.054,151.56 677.314,151.56C669.176,151.56 662.781,150.464 658.131,148.273C653.48,146.082 651.155,142.527 651.155,137.608C651.155,135.551 651.58,133.74 652.43,132.175C653.279,130.61 654.241,129.425 655.314,128.62C657.907,130.051 660.836,131.259 664.101,132.242C667.365,133.226 670.741,133.718 674.229,133.718C679.058,133.718 682.904,132.913 685.766,131.303C688.627,129.694 690.058,127.1 690.058,123.523L690.058,121.376C686.392,122.986 681.92,123.791 676.643,123.791C672.619,123.791 668.796,123.187 665.174,121.98C661.552,120.773 658.377,118.895 655.649,116.346C652.922,113.797 650.73,110.51 649.076,106.486C647.421,102.461 646.594,97.677 646.594,92.132C646.594,86.677 647.466,81.937 649.21,77.912C650.954,73.888 653.369,70.556 656.454,67.918C659.54,65.28 663.206,63.312 667.454,62.016C671.702,60.719 676.33,60.07 681.339,60.07ZM689.656,79.522C689.03,79.164 688.113,78.806 686.906,78.449C685.699,78.091 684.201,77.912 682.412,77.912C678.03,77.912 674.743,79.142 672.552,81.601C670.361,84.061 669.265,87.571 669.265,92.132C669.265,97.319 670.361,101.053 672.552,103.333C674.743,105.614 677.538,106.754 680.936,106.754C684.603,106.754 687.51,105.904 689.656,104.205L689.656,79.522ZM760.084,129.425C754.807,129.425 749.911,128.687 745.395,127.212C740.878,125.736 736.943,123.523 733.59,120.571C730.236,117.62 727.598,113.909 725.675,109.437C723.752,104.965 722.791,99.734 722.791,93.742C722.791,87.839 723.752,82.764 725.675,78.516C727.598,74.268 730.124,70.78 733.254,68.052C736.384,65.325 739.962,63.312 743.986,62.016C748.011,60.719 752.124,60.07 756.328,60.07C761.068,60.07 765.383,60.786 769.273,62.217C773.163,63.648 776.517,65.615 779.334,68.119C782.151,70.623 784.342,73.619 785.908,77.107C787.473,80.595 788.255,84.396 788.255,88.51C788.255,91.551 787.406,93.876 785.706,95.486C784.007,97.095 781.637,98.124 778.596,98.571L745.462,103.535C746.445,106.486 748.458,108.699 751.498,110.175C754.539,111.651 758.027,112.388 761.962,112.388C765.629,112.388 769.094,111.919 772.359,110.98C775.623,110.041 778.283,108.945 780.34,107.693C781.771,108.587 782.979,109.84 783.962,111.449C784.946,113.059 785.438,114.758 785.438,116.547C785.438,120.571 783.56,123.567 779.804,125.535C776.942,127.055 773.722,128.084 770.145,128.62C766.568,129.157 763.214,129.425 760.084,129.425ZM756.328,76.705C754.181,76.705 752.326,77.063 750.761,77.778C749.196,78.493 747.921,79.41 746.937,80.528C745.954,81.646 745.216,82.898 744.724,84.284C744.232,85.67 743.941,87.079 743.852,88.51L766.791,84.754C766.523,82.965 765.539,81.176 763.84,79.388C762.141,77.599 759.637,76.705 756.328,76.705ZM822.061,127.145C821.166,127.413 819.758,127.681 817.835,127.95C815.912,128.218 813.922,128.352 811.865,128.352C809.898,128.352 808.131,128.218 806.566,127.95C805.001,127.681 803.682,127.145 802.609,126.34C801.536,125.535 800.709,124.439 800.127,123.053C799.546,121.667 799.255,119.856 799.255,117.62L799.255,77.376C799.255,75.319 799.635,73.552 800.396,72.077C801.156,70.601 802.251,69.282 803.682,68.119C805.113,66.957 806.879,65.906 808.981,64.967C811.083,64.028 813.341,63.201 815.756,62.485C818.17,61.77 820.674,61.211 823.268,60.808C825.861,60.406 828.455,60.205 831.049,60.205C835.341,60.205 838.74,61.032 841.244,62.686C843.748,64.341 845,67.046 845,70.802C845,72.054 844.821,73.284 844.463,74.491C844.106,75.699 843.659,76.794 843.122,77.778C841.244,77.778 839.321,77.867 837.354,78.046C835.386,78.225 833.463,78.493 831.585,78.851C829.707,79.209 827.941,79.589 826.286,79.991C824.632,80.394 823.223,80.863 822.061,81.4L822.061,127.145Z"}),_.createElement("path",{className:"react-ui",d:"M456.264,259.551C455.489,259.783 454.269,260.016 452.604,260.248C450.939,260.48 449.215,260.596 447.434,260.596C445.73,260.596 444.2,260.48 442.845,260.248C441.49,260.016 440.347,259.551 439.418,258.854C438.488,258.157 437.772,257.208 437.268,256.007C436.765,254.807 436.513,253.239 436.513,251.302L436.513,216.449C436.513,214.667 436.842,213.138 437.501,211.86C438.159,210.582 439.108,209.439 440.347,208.432C441.586,207.426 443.116,206.516 444.936,205.702C446.756,204.889 448.712,204.173 450.803,203.553C452.894,202.933 455.063,202.449 457.309,202.101C459.555,201.752 461.801,201.578 464.047,201.578C467.765,201.578 470.708,202.294 472.877,203.727C475.046,205.16 476.13,207.503 476.13,210.756C476.13,211.84 475.975,212.905 475.665,213.951C475.355,214.997 474.968,215.945 474.504,216.797C472.877,216.797 471.212,216.875 469.508,217.03C467.804,217.185 466.139,217.417 464.512,217.727C462.886,218.037 461.356,218.366 459.923,218.714C458.49,219.063 457.27,219.469 456.264,219.934L456.264,259.551ZM511.913,261.526C507.343,261.526 503.103,260.887 499.191,259.609C495.28,258.331 491.872,256.414 488.968,253.858C486.063,251.302 483.778,248.088 482.113,244.215C480.448,240.343 479.615,235.812 479.615,230.623C479.615,225.511 480.448,221.115 482.113,217.436C483.778,213.757 485.966,210.737 488.677,208.374C491.388,206.012 494.486,204.269 497.971,203.146C501.457,202.023 505.02,201.462 508.66,201.462C512.765,201.462 516.502,202.081 519.871,203.321C523.24,204.56 526.145,206.264 528.584,208.432C531.024,210.601 532.922,213.196 534.277,216.216C535.633,219.237 536.31,222.529 536.31,226.092C536.31,228.725 535.574,230.739 534.103,232.133C532.631,233.527 530.579,234.418 527.945,234.805L499.249,239.104C500.101,241.659 501.844,243.576 504.477,244.854C507.111,246.132 510.131,246.771 513.539,246.771C516.715,246.771 519.716,246.365 522.543,245.551C525.37,244.738 527.674,243.789 529.456,242.705C530.695,243.48 531.741,244.564 532.593,245.958C533.445,247.352 533.871,248.824 533.871,250.373C533.871,253.858 532.244,256.453 528.991,258.157C526.513,259.473 523.724,260.364 520.626,260.829C517.528,261.294 514.624,261.526 511.913,261.526ZM508.66,215.868C506.801,215.868 505.194,216.178 503.838,216.797C502.483,217.417 501.379,218.211 500.527,219.179C499.675,220.147 499.036,221.231 498.61,222.432C498.184,223.632 497.933,224.852 497.855,226.092L517.722,222.839C517.489,221.29 516.637,219.74 515.166,218.191C513.694,216.642 511.526,215.868 508.66,215.868ZM569.073,201.462C573.255,201.462 577.069,201.888 580.516,202.74C583.963,203.592 586.906,204.889 589.346,206.632C591.785,208.374 593.664,210.582 594.98,213.254C596.297,215.926 596.955,219.082 596.955,222.722L596.955,248.746C596.955,250.76 596.394,252.406 595.271,253.684C594.148,254.962 592.812,256.066 591.263,256.995C586.228,260.016 579.141,261.526 570.002,261.526C565.897,261.526 562.199,261.139 558.907,260.364C555.615,259.59 552.788,258.428 550.426,256.879C548.064,255.33 546.244,253.355 544.966,250.954C543.688,248.553 543.049,245.764 543.049,242.589C543.049,237.245 544.636,233.14 547.812,230.274C550.987,227.408 555.906,225.627 562.567,224.93L577.786,223.303L577.786,222.49C577.786,220.244 576.798,218.637 574.823,217.669C572.848,216.7 570.002,216.216 566.284,216.216C563.341,216.216 560.475,216.526 557.687,217.146C554.899,217.765 552.382,218.54 550.135,219.469C549.129,218.772 548.277,217.707 547.58,216.275C546.883,214.842 546.534,213.351 546.534,211.802C546.534,209.788 547.018,208.181 547.986,206.98C548.954,205.78 550.445,204.754 552.459,203.902C554.705,203.05 557.358,202.43 560.417,202.043C563.477,201.655 566.362,201.462 569.073,201.462ZM570.002,247.12C571.319,247.12 572.771,246.984 574.359,246.713C575.946,246.442 577.128,246.074 577.902,245.609L577.902,236.315L569.537,237.012C567.369,237.167 565.587,237.632 564.193,238.406C562.799,239.181 562.102,240.343 562.102,241.892C562.102,243.441 562.702,244.699 563.903,245.668C565.103,246.636 567.136,247.12 570.002,247.12ZM640.871,217.03C638.934,217.03 637.095,217.339 635.352,217.959C633.609,218.579 632.099,219.489 630.821,220.689C629.543,221.89 628.517,223.381 627.743,225.162C626.968,226.944 626.581,229.035 626.581,231.436C626.581,236.238 627.955,239.839 630.705,242.24C633.455,244.641 636.804,245.842 640.754,245.842C643.078,245.842 645.092,245.571 646.796,245.029C648.5,244.486 650.01,243.906 651.327,243.286C652.876,244.37 654.037,245.551 654.812,246.829C655.587,248.107 655.974,249.637 655.974,251.418C655.974,254.594 654.463,257.053 651.443,258.796C648.422,260.538 644.24,261.41 638.896,261.41C634.016,261.41 629.601,260.693 625.651,259.26C621.701,257.828 618.313,255.814 615.486,253.219C612.659,250.625 610.471,247.507 608.922,243.867C607.373,240.227 606.598,236.199 606.598,231.784C606.598,226.672 607.431,222.2 609.096,218.366C610.761,214.532 613.027,211.376 615.892,208.897C618.758,206.419 622.069,204.56 625.826,203.321C629.582,202.081 633.551,201.462 637.734,201.462C643.31,201.462 647.609,202.469 650.63,204.482C653.65,206.496 655.161,209.091 655.161,212.266C655.161,213.738 654.812,215.113 654.115,216.391C653.418,217.669 652.605,218.772 651.675,219.702C650.359,219.082 648.771,218.482 646.912,217.901C645.053,217.32 643.039,217.03 640.871,217.03ZM685.599,240.265C685.599,242.279 686.238,243.712 687.516,244.564C688.794,245.416 690.595,245.842 692.918,245.842C694.08,245.842 695.281,245.745 696.52,245.551C697.759,245.358 698.844,245.106 699.773,244.796C700.47,245.648 701.07,246.597 701.574,247.643C702.077,248.688 702.329,249.947 702.329,251.418C702.329,254.362 701.225,256.763 699.018,258.621C696.81,260.48 692.918,261.41 687.342,261.41C680.526,261.41 675.279,259.861 671.6,256.763C667.921,253.665 666.081,248.63 666.081,241.659L666.081,191.935C666.933,191.703 668.153,191.451 669.741,191.18C671.329,190.909 673.013,190.773 674.795,190.773C678.203,190.773 680.855,191.374 682.753,192.574C684.65,193.775 685.599,196.311 685.599,200.184L685.599,207.619L700.819,207.619C701.283,208.471 701.729,209.536 702.155,210.814C702.581,212.092 702.794,213.506 702.794,215.055C702.794,217.765 702.193,219.721 700.993,220.922C699.792,222.122 698.185,222.722 696.171,222.722L685.599,222.722L685.599,240.265ZM799.454,233.643C799.454,237.826 798.737,241.64 797.305,245.087C795.872,248.533 793.8,251.476 791.089,253.916C788.378,256.356 785.086,258.234 781.214,259.551C777.341,260.868 772.965,261.526 768.086,261.526C763.206,261.526 758.83,260.868 754.958,259.551C751.085,258.234 747.793,256.356 745.082,253.916C742.372,251.476 740.3,248.533 738.867,245.087C737.434,241.64 736.718,237.826 736.718,233.643L736.718,189.263C737.57,189.108 738.925,188.895 740.784,188.624C742.643,188.353 744.424,188.217 746.128,188.217C747.909,188.217 749.478,188.353 750.833,188.624C752.189,188.895 753.331,189.379 754.261,190.076C755.19,190.773 755.887,191.742 756.352,192.981C756.816,194.22 757.049,195.847 757.049,197.86L757.049,233.295C757.049,237.012 758.075,239.917 760.128,242.008C762.18,244.099 764.833,245.145 768.086,245.145C771.416,245.145 774.088,244.099 776.102,242.008C778.116,239.917 779.123,237.012 779.123,233.295L779.123,189.263C779.975,189.108 781.33,188.895 783.189,188.624C785.048,188.353 786.829,188.217 788.533,188.217C790.314,188.217 791.883,188.353 793.238,188.624C794.594,188.895 795.736,189.379 796.666,190.076C797.595,190.773 798.292,191.742 798.757,192.981C799.221,194.22 799.454,195.847 799.454,197.86L799.454,233.643ZM834.54,259.202C833.688,259.435 832.352,259.667 830.531,259.899C828.711,260.132 826.911,260.248 825.129,260.248C823.348,260.248 821.779,260.112 820.424,259.841C819.069,259.57 817.926,259.086 816.997,258.389C816.067,257.692 815.37,256.724 814.906,255.485C814.441,254.245 814.208,252.619 814.208,250.605L814.208,189.263C815.06,189.108 816.416,188.895 818.275,188.624C820.134,188.353 821.915,188.217 823.619,188.217C825.4,188.217 826.969,188.353 828.324,188.624C829.68,188.895 830.822,189.379 831.751,190.076C832.681,190.773 833.378,191.742 833.843,192.981C834.307,194.22 834.54,195.847 834.54,197.86L834.54,259.202Z"})),lE=e=>_.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 440 440",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",xmlSpace:"preserve","xmlns:serif":"http://www.serif.com/",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:1.5},...e},_.createElement("circle",{cx:220,cy:220,r:144,style:{fill:"rgb(136,136,136)",stroke:"black",strokeWidth:"0.33px"}}),_.createElement("path",{d:"M220,12C334.798,12 428,105.202 428,220C428,334.798 334.798,428 220,428C105.202,428 12,334.798 12,220C12,105.202 105.202,12 220,12ZM220,76C140.524,76 76,140.524 76,220C76,299.476 140.524,364 220,364C299.476,364 364,299.476 364,220C364,140.524 299.476,76 220,76Z",style:{fill:"rgb(206,206,206)",stroke:"black",strokeWidth:"6.67px"}}),_.createElement("path",{d:"M41.319,232.772C38.119,232.829 35.878,232.789 34.556,232.652C33.233,232.516 32.025,232.097 30.891,231.317C29.797,230.537 28.939,229.512 28.315,228.163C27.731,226.853 27.383,225.299 27.351,223.499C27.321,221.82 27.574,220.295 28.11,218.925C28.645,217.555 29.466,216.461 30.532,215.641C31.636,214.782 32.828,214.28 34.145,214.097C35.421,213.914 37.7,213.793 40.979,213.735L46.378,213.638C49.538,213.582 51.819,213.621 53.142,213.758C54.464,213.894 55.672,214.313 56.766,215.093C57.9,215.873 58.758,216.898 59.343,218.248C59.966,219.557 60.274,221.112 60.306,222.912C60.336,224.591 60.083,226.116 59.547,227.486C59.052,228.855 58.231,229.95 57.126,230.769C56.021,231.629 54.829,232.131 53.553,232.313C52.236,232.497 49.957,232.618 46.718,232.675L41.319,232.772ZM51.53,224.348C53.01,224.322 53.968,224.225 54.365,224.058C54.762,223.891 54.957,223.567 54.947,223.047C54.94,222.607 54.774,222.29 54.45,222.056C54.126,221.862 53.124,221.759 51.484,221.789L36.727,222.052C34.887,222.085 33.769,222.185 33.331,222.313C32.934,222.48 32.7,222.844 32.71,223.364C32.72,223.924 32.966,224.279 33.489,224.43C33.972,224.581 35.173,224.64 37.012,224.607L51.53,224.348ZM60.115,235.306L61.347,243.494C61.681,245.709 61.739,247.439 61.562,248.68C61.424,249.914 61.047,250.901 60.464,251.596C59.92,252.284 59.189,252.799 58.275,253.179C57.356,253.52 55.95,253.853 53.972,254.151L51.243,254.562C49.265,254.859 47.772,254.882 46.796,254.584C45.827,254.325 45.002,253.681 44.361,252.645C43.719,251.609 43.228,250.226 42.96,248.447L42.632,246.271L30.054,248.165L28.827,240.017L60.115,235.306ZM55.962,244.264L48.012,245.461L48.101,246.054C48.214,246.806 48.45,247.296 48.887,247.514C49.285,247.737 50.06,247.782 51.207,247.609L53.778,247.222C54.846,247.061 55.534,246.796 55.797,246.392C56.066,246.028 56.117,245.293 55.962,244.264ZM65.668,263.888L35.019,271.744L32.973,263.762L63.622,255.906L65.668,263.888ZM73.017,284.844L43.393,295.958L40.864,289.217L52.805,280.165L39.36,285.21L36.944,278.768L66.567,267.654L68.984,274.095L57.267,283.404L70.6,278.402L73.017,284.844ZM78.538,295.659L50.283,309.897L46.575,302.539L74.83,288.301L78.538,295.659ZM74.884,324.988C72.198,326.727 70.274,327.877 69.079,328.459C67.884,329.042 66.637,329.325 65.262,329.262C63.921,329.177 62.651,328.76 61.408,327.945C60.221,327.141 59.105,326.005 58.127,324.494C57.214,323.084 56.623,321.655 56.354,320.209C56.085,318.763 56.204,317.4 56.676,316.142C57.159,314.828 57.906,313.773 58.927,312.922C59.915,312.092 61.786,310.786 64.539,309.004L69.073,306.07C71.725,304.353 73.683,303.181 74.878,302.598C76.073,302.015 77.32,301.733 78.661,301.817C80.036,301.88 81.306,302.297 82.515,303.135C83.736,303.917 84.819,305.074 85.797,306.585C86.71,307.996 87.3,309.424 87.569,310.87C87.872,312.294 87.753,313.657 87.248,314.937C86.764,316.251 86.017,317.306 85.03,318.136C84.008,318.987 82.138,320.293 79.418,322.054L74.884,324.988ZM79.105,312.441C80.347,311.637 81.11,311.048 81.358,310.697C81.607,310.345 81.601,309.968 81.319,309.531C81.08,309.162 80.772,308.98 80.372,308.952C79.995,308.958 79.09,309.401 77.714,310.292L65.322,318.312C63.778,319.312 62.881,319.987 62.577,320.327C62.328,320.679 62.322,321.111 62.605,321.548C62.909,322.018 63.306,322.19 63.829,322.042C64.319,321.915 65.37,321.33 66.915,320.331L79.105,312.441ZM104.097,331.146L80.061,351.721L75.379,346.251L83.505,333.662L72.595,343L68.121,337.773L92.158,317.198L96.632,322.425L88.805,335.179L99.624,325.92L104.097,331.146ZM116.973,342.973L99.303,369.64L93.032,363.991L96.536,359.503L94.337,357.522L90.179,361.421L83.849,355.718L108.146,335.022L116.973,342.973ZM100.106,355.182C102.219,352.239 104.837,348.676 108.073,344.485C103.407,348.41 100.049,351.361 98.026,353.308L100.106,355.182ZM133.778,355.495L130.062,360.657L126.102,357.806L111.332,378.323L104.645,373.509L119.414,352.992L115.486,350.164L119.202,345.002L133.778,355.495ZM135.754,356.629L147.731,363.322L144.628,368.874L139.845,366.2L136.918,371.438L141.387,373.936L138.46,379.173L133.991,376.676L130.596,382.752L135.833,385.678L132.75,391.196L120.32,384.249L135.754,356.629ZM150.451,364.831L156.15,367.169C159.813,368.672 162.217,369.874 163.376,370.738C164.534,371.603 165.306,372.568 165.653,373.618C166,374.669 166.095,375.702 165.849,376.725C165.654,377.726 164.969,379.607 163.83,382.382L159.625,392.633C158.547,395.261 157.708,396.991 157.099,397.736C156.476,398.518 155.781,399.054 154.939,399.314C154.149,399.553 153.22,399.604 152.256,399.424C151.255,399.23 149.84,398.779 148.027,398.035L138.442,394.103L150.451,364.831ZM156.01,372.991L148.115,392.235C149.188,392.675 149.946,392.726 150.387,392.388C150.828,392.051 151.462,390.927 152.267,388.966L156.927,377.605C157.474,376.272 157.749,375.391 157.827,374.99C157.904,374.59 157.826,374.255 157.569,373.933C157.348,373.627 156.824,373.325 156.01,372.991ZM194.889,388.345L187.399,386.838L187.865,384.525C188.078,383.466 188.102,382.736 187.961,382.422C187.828,382.069 187.538,381.888 187.107,381.802C186.636,381.707 186.205,381.824 185.891,382.169C185.537,382.506 185.301,383.07 185.135,383.894C184.93,384.913 184.929,385.729 185.101,386.294C185.265,386.899 185.884,387.676 186.989,388.673C190.171,391.517 192.051,393.731 192.724,395.254C193.389,396.816 193.418,399.106 192.802,402.165C192.361,404.361 191.755,405.953 191.04,406.87C190.317,407.826 189.124,408.484 187.484,408.929C185.891,409.343 184.095,409.349 182.134,408.954C179.977,408.52 178.221,407.718 176.857,406.587C175.486,405.495 174.679,404.231 174.461,402.882C174.243,401.532 174.37,399.681 174.836,397.367L175.246,395.328L182.736,396.835L181.979,400.599C181.742,401.776 181.71,402.545 181.843,402.898C182.007,403.298 182.328,403.526 182.877,403.636C183.387,403.739 183.866,403.59 184.18,403.246C184.541,402.869 184.785,402.266 184.951,401.442C185.322,399.599 185.323,398.375 184.924,397.724C184.532,397.033 183.467,395.839 181.727,394.143C179.995,392.407 178.859,391.159 178.35,390.444C177.802,389.722 177.419,388.788 177.2,387.642C176.982,386.497 177.062,385.085 177.393,383.438C177.875,381.046 178.535,379.384 179.345,378.404C180.193,377.432 181.347,376.767 182.798,376.447C184.297,376.095 185.968,376.105 187.89,376.492C189.968,376.91 191.709,377.586 193.057,378.592C194.374,379.551 195.18,380.611 195.446,381.725C195.711,382.839 195.631,384.659 195.142,387.09L194.889,388.345ZM200.214,379.311L213.892,380.38L213.397,386.721L207.933,386.294L207.466,392.276L212.57,392.675L212.102,398.657L206.998,398.257L206.456,405.196L212.437,405.664L211.945,411.965L197.748,410.855L200.214,379.311ZM225.777,380.267L226.42,405.578L231.418,405.452L231.578,411.77L218.342,412.105L217.54,380.476L225.777,380.267ZM233.537,379.948L247.346,378.191L248.149,384.5L242.514,385.217L243.272,391.169L248.311,390.528L249.069,396.479L244.029,397.121L245.706,410.295L237.532,411.335L233.537,379.948ZM258.549,375.749L265.335,406.653L257.287,408.42L250.501,377.517L258.549,375.749ZM281.962,378.541L274.713,380.955L273.968,378.716C273.626,377.691 273.285,377.046 273.007,376.844C272.716,376.603 272.374,376.591 271.957,376.73C271.501,376.882 271.185,377.198 271.084,377.653C270.945,378.121 271.02,378.728 271.286,379.525C271.615,380.512 272.019,381.22 272.449,381.625C272.892,382.068 273.815,382.435 275.27,382.751C279.444,383.638 282.176,384.625 283.516,385.612C284.869,386.637 286.033,388.61 287.019,391.57C287.727,393.696 287.992,395.378 287.827,396.529C287.675,397.718 286.967,398.882 285.765,400.083C284.588,401.234 283.032,402.132 281.135,402.764C279.047,403.459 277.125,403.636 275.379,403.332C273.646,403.066 272.318,402.37 271.458,401.307C270.598,400.244 269.789,398.574 269.043,396.335L268.386,394.362L275.635,391.947L276.848,395.591C277.227,396.729 277.581,397.412 277.872,397.653C278.214,397.918 278.606,397.956 279.137,397.779C279.63,397.615 279.972,397.248 280.073,396.793C280.2,396.287 280.112,395.642 279.846,394.845C279.252,393.061 278.645,391.999 277.975,391.632C277.292,391.227 275.774,390.721 273.421,390.113C271.056,389.467 269.45,388.948 268.653,388.581C267.818,388.227 267.021,387.607 266.263,386.721C265.504,385.836 264.872,384.571 264.341,382.977C263.57,380.662 263.317,378.891 263.532,377.639C263.786,376.374 264.456,375.223 265.557,374.224C266.683,373.174 268.138,372.352 269.997,371.733C272.009,371.063 273.855,370.785 275.525,370.988C277.144,371.165 278.371,371.684 279.155,372.519C279.939,373.354 280.774,374.973 281.557,377.326L281.962,378.541ZM298.791,359.997L312.694,388.418L305.293,392.039L299.457,380.11L297.265,381.182L303.101,393.111L295.699,396.732L281.795,368.311L289.197,364.69L294.172,374.858L296.363,373.786L291.389,363.618L298.791,359.997ZM328.977,350.672L322.871,355.265L321.453,353.379C320.804,352.515 320.275,352.012 319.947,351.909C319.595,351.773 319.267,351.87 318.915,352.134C318.532,352.423 318.332,352.823 318.381,353.287C318.397,353.775 318.662,354.326 319.167,354.998C319.792,355.829 320.401,356.372 320.937,356.619C321.498,356.898 322.49,356.953 323.97,356.791C328.209,356.305 331.113,356.373 332.698,356.883C334.306,357.425 336.036,358.927 337.912,361.42C339.258,363.21 340.044,364.721 340.254,365.865C340.488,367.04 340.185,368.369 339.428,369.89C338.678,371.355 337.487,372.701 335.889,373.903C334.131,375.225 332.364,376.004 330.612,376.27C328.885,376.568 327.404,376.33 326.251,375.596C325.098,374.862 323.8,373.535 322.382,371.649L321.132,369.987L327.237,365.395L329.546,368.463C330.267,369.422 330.82,369.958 331.172,370.093C331.58,370.237 331.964,370.148 332.411,369.812C332.827,369.499 333.034,369.043 332.986,368.579C332.945,368.059 332.656,367.475 332.151,366.804C331.021,365.301 330.108,364.487 329.356,364.352C328.58,364.185 326.98,364.187 324.556,364.358C322.108,364.498 320.42,364.516 319.548,364.421C318.644,364.35 317.691,364.016 316.691,363.417C315.69,362.818 314.688,361.82 313.679,360.477C312.212,358.527 311.41,356.928 311.216,355.673C311.054,354.393 311.324,353.088 312.051,351.791C312.785,350.438 313.903,349.197 315.47,348.019C317.164,346.744 318.827,345.894 320.474,345.556C322.066,345.21 323.394,345.312 324.403,345.854C325.411,346.397 326.717,347.667 328.208,349.649L328.977,350.672ZM352.018,341.021C354.259,343.305 355.771,344.96 356.581,346.015C357.391,347.069 357.917,348.234 358.13,349.594C358.315,350.925 358.161,352.253 357.61,353.634C357.06,354.958 356.17,356.279 354.885,357.539C353.686,358.715 352.405,359.58 351.041,360.132C349.678,360.685 348.319,360.841 346.992,360.631C345.608,360.419 344.425,359.899 343.386,359.068C342.376,358.266 340.722,356.695 338.425,354.353L334.644,350.498C332.431,348.242 330.892,346.558 330.082,345.504C329.272,344.449 328.746,343.285 328.561,341.953C328.348,340.594 328.502,339.266 329.081,337.914C329.603,336.561 330.521,335.269 331.806,334.008C333.005,332.832 334.286,331.967 335.649,331.415C336.984,330.834 338.343,330.677 339.699,330.917C341.083,331.128 342.266,331.649 343.276,332.45C344.315,333.281 345.968,334.852 348.237,337.166L352.018,341.021ZM338.881,339.394C337.845,338.338 337.116,337.708 336.721,337.535C336.327,337.361 335.959,337.443 335.587,337.807C335.273,338.115 335.157,338.453 335.21,338.85C335.291,339.218 335.905,340.016 337.054,341.187L347.389,351.724C348.678,353.038 349.519,353.782 349.913,354.012C350.307,354.185 350.732,354.104 351.103,353.74C351.503,353.348 351.592,352.925 351.342,352.442C351.12,351.987 350.337,351.074 349.049,349.76L338.881,339.394ZM341.099,325.297L349.778,314.415L354.751,318.38L351.209,322.821L355.9,326.562L359.067,322.591L363.758,326.332L360.59,330.303L370.973,338.584L365.835,345.026L341.099,325.297ZM360.217,298.339L365.582,301.754L362.962,305.871L384.287,319.447L379.862,326.398L358.537,312.822L355.937,316.905L350.572,313.489L360.217,298.339ZM373.724,268.616L401.315,284.523L397.232,293.957C392.425,292.879 387.026,291.458 381.05,289.656C383.345,290.998 388.109,293.888 395.342,298.326L391.291,307.687L360.792,298.497L363.969,291.155L374.435,294.769L384.533,298.224C379.631,295.754 373.288,292.181 365.542,287.521L368.942,279.665C369.87,279.936 373.139,281.046 378.872,283.004L390.287,286.942C383.414,283.488 376.851,279.819 370.562,275.921L373.724,268.616ZM376.781,254.323L408.604,257.594L406.512,265.77L400.91,264.75L400.176,267.617L405.56,269.49L403.448,277.745L373.836,265.832L376.781,254.323ZM395.425,263.594C391.838,263.089 387.466,262.425 382.252,261.503C387.895,263.814 392.068,265.419 394.731,266.307L395.425,263.594ZM378.103,248.493L378.802,242.694C379.266,238.842 379.736,236.28 380.221,234.928C380.661,233.612 381.55,232.591 382.886,231.865C384.218,231.18 386.216,230.977 388.877,231.298C391.339,231.594 392.929,232.108 393.691,232.804C394.454,233.5 394.826,234.754 394.77,236.56C395.359,235.02 396.048,233.975 396.791,233.5C397.533,233.025 398.167,232.779 398.781,232.692C399.352,232.64 400.91,232.747 403.452,233.053L411.712,234.049L410.798,241.634L400.354,240.375C398.686,240.175 397.639,240.169 397.208,240.399C396.778,240.63 396.498,241.281 396.364,242.393L410.502,244.096L409.516,252.277L378.103,248.493ZM384.49,240.962L391.479,241.804C391.589,240.891 391.507,240.236 391.312,239.85C391.116,239.464 390.306,239.165 388.916,238.998L387.209,238.792C386.216,238.672 385.522,238.75 385.161,239.069C384.84,239.393 384.6,240.049 384.49,240.962ZM380.371,226.869L380.35,213.149L386.71,213.139L386.718,218.619L392.718,218.61L392.71,213.49L398.71,213.48L398.718,218.6L405.678,218.589L405.669,212.589L411.989,212.579L412.011,226.819L380.371,226.869Z"}),_.createElement("path",{d:"M65.814,139.849C68.729,141.171 70.736,142.169 71.872,142.859C73.008,143.55 73.919,144.446 74.609,145.637C75.262,146.812 75.598,148.106 75.583,149.592C75.548,151.026 75.195,152.579 74.452,154.218C73.759,155.748 72.876,157.017 71.804,158.024C70.733,159.032 69.522,159.669 68.208,159.951C66.841,160.254 65.55,160.196 64.281,159.796C63.05,159.414 60.94,158.545 57.953,157.191L53.034,154.961C50.156,153.656 48.113,152.642 46.977,151.951C45.841,151.261 44.929,150.364 44.276,149.19C43.586,147.999 43.251,146.705 43.302,145.235C43.301,143.785 43.69,142.248 44.433,140.609C45.127,139.079 46.009,137.81 47.081,136.803C48.116,135.779 49.327,135.142 50.677,134.876C52.044,134.573 53.335,134.631 54.567,135.014C55.836,135.414 57.945,136.282 60.896,137.62L65.814,139.849ZM52.976,143.077C51.628,142.466 50.721,142.142 50.291,142.123C49.86,142.103 49.546,142.312 49.331,142.786C49.15,143.186 49.163,143.544 49.356,143.895C49.564,144.209 50.426,144.731 51.919,145.408L65.362,151.503C67.038,152.262 68.091,152.652 68.542,152.724C68.972,152.744 69.339,152.515 69.554,152.041C69.785,151.531 69.715,151.104 69.308,150.744C68.937,150.4 67.877,149.832 66.201,149.072L52.976,143.077ZM52.319,126.004L56.705,118.981C57.892,117.081 58.972,115.728 59.913,114.901C60.82,114.053 61.749,113.548 62.643,113.399C63.504,113.229 64.394,113.314 65.336,113.619C66.256,113.958 67.541,114.619 69.237,115.678L71.578,117.14C73.275,118.2 74.424,119.153 74.971,120.014C75.54,120.84 75.748,121.866 75.562,123.07C75.376,124.275 74.85,125.644 73.897,127.171L72.732,129.037L83.52,135.775L79.156,142.764L52.319,126.004ZM61.298,121.897L68.117,126.156L68.435,125.647C68.838,125.002 68.978,124.476 68.787,124.027C68.63,123.599 68.07,123.06 67.086,122.446L64.88,121.069C63.964,120.497 63.269,120.251 62.807,120.387C62.366,120.489 61.849,121.015 61.298,121.897ZM65.491,105.806L74.058,95.089L79.026,99.06L75.604,103.341L80.291,107.087L83.488,103.088L88.174,106.834L84.977,110.834L90.414,115.179L94.16,110.493L99.097,114.439L90.205,125.562L65.491,105.806ZM91.595,76.985L113.834,99.49L108.713,104.551L95.575,97.345L105.668,107.559L100.775,112.395L78.535,89.89L83.429,85.054L96.71,91.949L86.701,81.82L91.595,76.985ZM125.69,63.611L119.349,67.872L118.033,65.913C117.43,65.017 116.929,64.486 116.607,64.365C116.262,64.211 115.93,64.29 115.565,64.536C115.166,64.803 114.946,65.192 114.97,65.658C114.961,66.146 115.196,66.711 115.664,67.409C116.244,68.272 116.823,68.846 117.346,69.122C117.89,69.431 118.878,69.538 120.364,69.455C124.624,69.195 127.52,69.417 129.075,70.011C130.653,70.637 132.301,72.229 134.041,74.818C135.29,76.677 135.995,78.228 136.144,79.381C136.314,80.568 135.942,81.878 135.104,83.357C134.277,84.78 133.017,86.06 131.357,87.176C129.531,88.403 127.726,89.086 125.962,89.259C124.221,89.465 122.756,89.149 121.643,88.354C120.531,87.56 119.306,86.166 117.989,84.207L116.829,82.481L123.17,78.22L125.312,81.407C125.981,82.403 126.505,82.967 126.849,83.121C127.249,83.286 127.637,83.218 128.102,82.905C128.534,82.615 128.765,82.171 128.741,81.705C128.728,81.184 128.471,80.585 128.002,79.888C126.954,78.328 126.085,77.466 125.341,77.291C124.575,77.083 122.977,77 120.548,77.042C118.096,77.051 116.409,76.98 115.544,76.839C114.645,76.72 113.711,76.335 112.744,75.684C111.776,75.033 110.829,73.983 109.892,72.589C108.531,70.563 107.815,68.924 107.688,67.66C107.595,66.373 107.934,65.085 108.728,63.829C109.533,62.516 110.716,61.336 112.343,60.243C114.102,59.06 115.808,58.3 117.471,58.05C119.079,57.788 120.4,57.961 121.378,58.557C122.357,59.152 123.593,60.49 124.976,62.548L125.69,63.611ZM151.705,60.191C153.126,63.059 154.048,65.102 154.491,66.356C154.934,67.609 155.072,68.88 154.852,70.239C154.615,71.562 154.056,72.776 153.103,73.917C152.169,75.005 150.913,75.984 149.3,76.783C147.795,77.529 146.308,77.953 144.841,78.055C143.374,78.156 142.033,77.883 140.837,77.27C139.587,76.64 138.624,75.777 137.895,74.666C137.184,73.59 136.1,71.582 134.644,68.643L132.247,63.804C130.844,60.972 129.904,58.894 129.461,57.64C129.019,56.386 128.881,55.115 129.118,53.793C129.338,52.434 129.897,51.219 130.867,50.114C131.783,48.99 133.057,48.047 134.67,47.248C136.175,46.502 137.662,46.079 139.129,45.977C140.579,45.839 141.919,46.112 143.133,46.761C144.383,47.392 145.346,48.254 146.057,49.33C146.787,50.442 147.87,52.449 149.309,55.353L151.705,60.191ZM139.723,54.566C139.066,53.239 138.568,52.415 138.247,52.127C137.927,51.84 137.551,51.803 137.085,52.033C136.691,52.229 136.475,52.514 136.402,52.907C136.365,53.283 136.701,54.232 137.429,55.702L143.981,68.928C144.797,70.577 145.366,71.545 145.669,71.886C145.99,72.173 146.419,72.229 146.885,71.998C147.387,71.749 147.603,71.375 147.516,70.838C147.446,70.336 146.985,69.226 146.168,67.577L139.723,54.566ZM167.692,34.963L174.441,55.018C175.206,57.293 175.666,58.911 175.821,59.871C176.013,60.82 175.878,61.92 175.489,63.149C175.088,64.339 174.357,65.429 173.348,66.317C172.3,67.218 170.987,67.956 169.395,68.491C167.613,69.091 165.919,69.324 164.35,69.176C162.794,69.067 161.502,68.615 160.501,67.897C159.499,67.179 158.751,66.334 158.28,65.311C157.809,64.287 156.98,62.076 155.845,58.702L149.874,40.96L157.683,38.332L165.249,60.813C165.696,62.14 166.052,62.948 166.281,63.251C166.56,63.579 166.927,63.667 167.344,63.526C167.837,63.36 168.076,63.069 168.088,62.601C168.099,62.133 167.856,61.159 167.358,59.681L159.92,37.579L167.692,34.963ZM174.727,33.131L180.462,32.033C184.273,31.303 186.857,30.972 188.292,31.023C189.681,31.042 190.923,31.578 192.021,32.631C193.079,33.691 193.88,35.533 194.383,38.165C194.85,40.601 194.844,42.272 194.412,43.21C193.981,44.147 192.9,44.884 191.162,45.379C192.809,45.471 194.014,45.811 194.692,46.373C195.37,46.936 195.797,47.465 196.067,48.024C196.29,48.552 196.662,50.069 197.143,52.583L198.707,60.755L191.204,62.191L189.226,51.859C188.91,50.209 188.597,49.21 188.246,48.87C187.896,48.53 187.191,48.461 186.091,48.671L188.768,62.658L180.675,64.207L174.727,33.131ZM183.842,36.925L185.166,43.839C186.069,43.666 186.668,43.389 186.976,43.085C187.285,42.782 187.323,41.919 187.06,40.544L186.737,38.855C186.549,37.873 186.264,37.235 185.85,36.988C185.444,36.781 184.746,36.752 183.842,36.925ZM219.815,41.52L211.587,41.97L211.288,36.498C211.198,34.861 211.064,33.867 210.884,33.516C210.663,33.128 210.292,32.947 209.693,32.98C209.014,33.017 208.588,33.281 208.454,33.769C208.281,34.259 208.258,35.302 208.345,36.9L209.148,51.558C209.231,53.076 209.367,54.11 209.591,54.538C209.777,55.009 210.19,55.226 210.829,55.191C211.468,55.156 211.854,54.895 211.987,54.407C212.163,53.957 212.182,52.834 212.088,51.116L211.871,47.162L220.099,46.712L220.165,47.91C220.344,51.185 220.231,53.515 219.866,54.897C219.461,56.281 218.528,57.534 216.987,58.66C215.447,59.786 213.558,60.41 211.241,60.537C208.845,60.668 206.824,60.338 205.218,59.545C203.612,58.751 202.508,57.61 201.904,56.08C201.342,54.589 200.935,52.288 200.765,49.172L200.26,39.946C200.135,37.67 200.123,35.988 200.22,34.821C200.318,33.694 200.736,32.549 201.438,31.469C202.138,30.349 203.173,29.491 204.498,28.818C205.861,28.102 207.403,27.738 209.2,27.639C211.597,27.508 213.62,27.878 215.268,28.709C216.876,29.543 217.98,30.684 218.536,32.056C219.132,33.425 219.489,35.569 219.651,38.524L219.815,41.52ZM226.051,27.944L239.739,28.872L239.309,35.218L233.841,34.847L233.435,40.833L238.544,41.179L238.137,47.166L233.029,46.819L232.558,53.763L238.544,54.169L238.117,60.475L223.909,59.511L226.051,27.944ZM272.132,44.93L264.713,43.105L265.276,40.813C265.534,39.765 265.59,39.037 265.462,38.717C265.344,38.359 265.062,38.166 264.635,38.061C264.169,37.946 263.733,38.045 263.404,38.376C263.037,38.697 262.777,39.251 262.576,40.067C262.328,41.077 262.292,41.892 262.44,42.464C262.578,43.074 263.163,43.877 264.225,44.921C267.282,47.898 269.067,50.19 269.674,51.74C270.272,53.329 270.203,55.618 269.458,58.648C268.923,60.823 268.25,62.388 267.497,63.274C266.734,64.198 265.514,64.804 263.856,65.179C262.247,65.525 260.452,65.454 258.51,64.977C256.373,64.451 254.653,63.575 253.339,62.387C252.015,61.237 251.263,59.94 251.102,58.583C250.942,57.225 251.148,55.381 251.712,53.089L252.209,51.069L259.628,52.894L258.711,56.623C258.424,57.788 258.359,58.555 258.477,58.913C258.624,59.32 258.935,59.562 259.479,59.695C259.984,59.82 260.469,59.692 260.797,59.36C261.174,59 261.444,58.407 261.644,57.592C262.093,55.766 262.147,54.543 261.775,53.875C261.414,53.169 260.4,51.931 258.734,50.162C257.078,48.354 255.996,47.058 255.518,46.322C255.001,45.577 254.658,44.628 254.489,43.474C254.319,42.32 254.459,40.913 254.861,39.282C255.443,36.912 256.174,35.28 257.025,34.335C257.913,33.401 259.095,32.785 260.559,32.527C262.071,32.24 263.74,32.321 265.643,32.789C267.702,33.295 269.412,34.045 270.716,35.108C271.991,36.121 272.752,37.215 272.97,38.339C273.187,39.464 273.029,41.279 272.437,43.687L272.132,44.93ZM292.077,61.866C290.909,64.845 290.018,66.902 289.387,68.072C288.756,69.243 287.909,70.199 286.755,70.95C285.616,71.664 284.341,72.066 282.856,72.129C281.423,72.168 279.854,71.897 278.178,71.24C276.614,70.627 275.301,69.812 274.239,68.794C273.177,67.776 272.478,66.6 272.127,65.303C271.754,63.953 271.745,62.661 272.078,61.374C272.396,60.123 273.153,57.972 274.35,54.918L276.321,49.89C277.474,46.948 278.381,44.854 279.011,43.684C279.642,42.513 280.49,41.557 281.629,40.843C282.782,40.092 284.057,39.69 285.527,39.665C286.975,39.588 288.53,39.896 290.206,40.553C291.77,41.166 293.083,41.982 294.145,42.999C295.221,43.98 295.92,45.156 296.256,46.491C296.63,47.84 296.639,49.132 296.321,50.383C295.988,51.67 295.23,53.822 294.048,56.838L292.077,61.866ZM288.186,49.213C288.726,47.836 289.002,46.913 288.999,46.482C288.996,46.051 288.771,45.748 288.287,45.558C287.877,45.398 287.521,45.43 287.181,45.64C286.878,45.865 286.401,46.752 285.803,48.279L280.416,62.021C279.745,63.734 279.411,64.806 279.362,65.26C279.365,65.691 279.612,66.045 280.097,66.235C280.618,66.44 281.041,66.347 281.379,65.922C281.704,65.533 282.216,64.445 282.887,62.732L288.186,49.213ZM305.248,47.78L317.483,54.419L314.45,60.009L309.458,57.3L306.596,62.574L311.062,64.997L308.2,70.27L303.735,67.848L297.402,79.521L290.16,75.591L305.248,47.78ZM336.214,66.91L332.603,72.146L328.586,69.376L314.235,90.188L307.451,85.51L321.802,64.698L317.818,61.951L321.428,56.715L336.214,66.91ZM364.183,92.203L339.722,112.6L332.279,105.509C334.952,101.37 338.151,96.794 341.907,91.809C339.854,93.499 335.496,96.971 328.833,102.225L321.448,95.189L340.609,69.743L346.401,75.262L339.394,83.834L332.663,92.117C336.674,88.37 342.219,83.653 349.268,77.993L355.466,83.898C354.89,84.676 352.72,87.36 348.901,92.064L341.262,101.415C346.878,96.158 352.588,91.267 358.42,86.712L364.183,92.203ZM375.916,107.812L353.681,130.812L348.545,124.115L352.809,120.341L351.008,117.992L346.209,121.067L341.024,114.307L368.687,98.385L375.916,107.812ZM357.107,116.742C359.72,114.234 362.944,111.208 366.89,107.677C361.586,110.686 357.747,112.975 355.403,114.521L357.107,116.742ZM381.75,116.129L384.673,121.184C386.616,124.543 387.779,126.874 388.203,128.246C388.641,129.564 388.544,130.914 387.911,132.296C387.258,133.644 385.782,135.006 383.462,136.348C381.315,137.589 379.735,138.133 378.708,138.035C377.68,137.936 376.629,137.157 375.589,135.679C376.044,137.264 376.12,138.514 375.812,139.34C375.504,140.165 375.144,140.742 374.705,141.181C374.28,141.565 372.97,142.416 370.754,143.697L363.551,147.862L359.727,141.249L368.834,135.982C370.288,135.141 371.128,134.516 371.334,134.074C371.54,133.631 371.373,132.942 370.812,131.973L358.485,139.102L354.36,131.969L381.75,116.129ZM381.166,125.985L375.071,129.51C375.532,130.306 375.991,130.78 376.379,130.972C376.767,131.163 377.594,130.916 378.806,130.215L380.295,129.354C381.161,128.853 381.669,128.374 381.766,127.902C381.828,127.451 381.626,126.782 381.166,125.985ZM394.047,138.523L399.41,151.152L393.555,153.638L391.414,148.594L385.891,150.939L387.892,155.651L382.369,157.996L380.368,153.284L373.962,156.004L376.307,161.527L370.49,163.997L364.924,150.89L394.047,138.523Z"}),_.createElement("path",{d:"M184.955,228.867C188.721,238.945 188.513,248.571 184.331,257.744C180.149,266.917 173.328,273.271 163.868,276.806C162.694,277.245 161.783,276.599 161.136,274.868C160.466,273.075 160.618,271.785 161.592,270.998C165.55,268.391 167.432,264.376 167.237,258.953C167.118,255.615 165.001,248.444 160.888,237.438C158.162,230.143 155.958,225.188 154.277,222.575C150.745,216.708 146.627,213.702 141.923,213.557C140.501,214.089 139.223,212.84 138.091,209.81C137.167,207.337 137.447,205.823 138.931,205.269C147.834,201.941 156.818,202.6 165.882,207.246C174.969,211.953 181.327,219.16 184.955,228.867ZM154.841,276.691C155.65,278.855 155.467,280.157 154.292,280.596C144.462,284.27 134.975,283.869 125.834,279.394C116.823,275.08 110.469,267.978 106.772,258.085C103.145,248.378 103.217,238.768 106.99,229.254C110.725,219.826 117.074,213.437 126.039,210.086C127.029,209.717 127.959,210.038 128.831,211.051C129.61,211.817 130.208,212.756 130.624,213.869C131.017,214.92 131.112,215.836 130.911,216.616C130.678,217.125 129.963,217.851 128.764,218.792C127.404,219.864 126.471,220.952 125.968,222.057C125.054,223.948 124.673,226.416 124.824,229.46C125.129,232.728 126.46,237.515 128.817,243.822L132.768,254.395C136.096,263.298 139.268,269.053 142.286,271.66C145.11,274.127 148.362,275.097 152.04,274.568C152.395,274.576 152.932,274.692 153.65,274.917C154.144,275.296 154.541,275.888 154.841,276.691ZM242.304,166.531L250.75,188.847L244.327,191.459C243.207,191.102 241.934,189.957 240.507,188.025C238.841,185.829 237.838,184.653 237.498,184.498C232.627,181.457 228.398,180.606 224.812,181.946C223.452,182.455 222.252,181.318 221.212,178.535C220.38,176.31 220.332,174.954 221.066,174.468L222.364,173.983C223.539,173.544 225.332,173.437 227.742,173.664C230.152,173.891 231.851,173.82 232.84,173.45C234.51,172.826 235.717,171.247 236.461,168.714L242.304,166.531ZM263.863,212.907C266.451,219.832 265.806,226.591 261.928,233.184C258.136,239.252 252.716,243.602 245.667,246.237C244.493,246.676 243.374,245.473 242.311,242.629C241.294,239.908 241.254,238.197 242.189,237.495C242.638,237.187 243.283,236.84 244.126,236.455C246.622,235.028 248.416,233.512 249.508,231.907C250.599,230.301 250.832,228.663 250.208,226.994C248.984,223.717 246.104,222.045 241.569,221.978C240.125,221.884 235.883,222.412 228.844,223.563C221.782,224.652 215.452,224.023 209.854,221.676C203.537,219.104 199.281,214.881 197.086,209.008C194.845,203.01 194.983,196.969 197.501,190.885C200.103,184.839 204.403,180.695 210.401,178.454C211.204,178.153 212.042,178.51 212.914,179.523C213.608,180.25 214.129,181.077 214.476,182.004C215.284,184.168 215.171,185.655 214.134,186.465C212.318,187.637 210.964,189.2 210.073,191.154C209.02,193.238 208.864,195.27 209.603,197.248C209.973,198.238 210.694,199.131 211.767,199.928C215.673,202.837 220.643,203.41 226.679,201.648C228.703,201.032 230.917,200.451 233.321,199.906C235.724,199.36 238.366,198.795 241.249,198.211C245.088,198.115 248.954,199.031 252.845,200.959C258.25,203.731 261.922,207.713 263.863,212.907ZM214.54,257.975L205.898,235.415L212.483,232.954C213.603,233.311 214.888,234.486 216.338,236.481C217.857,238.661 218.829,239.848 219.254,240.042C224.063,243.107 228.323,243.946 232.032,242.559C233.393,242.051 234.593,243.188 235.632,245.97C236.464,248.196 236.471,249.533 235.651,249.98C235.489,250.111 235.098,250.292 234.48,250.523C233.244,250.985 231.42,251.103 229.01,250.876C226.6,250.649 224.931,250.709 224.004,251.056C222.335,251.68 221.128,253.258 220.383,255.791L214.54,257.975ZM316.313,138.873L324.758,161.189L318.336,163.801C317.216,163.444 315.942,162.299 314.515,160.366C312.849,158.171 311.846,156.995 311.507,156.84C306.635,153.799 302.407,152.948 298.821,154.288C297.46,154.797 296.26,153.66 295.221,150.877C294.389,148.652 294.34,147.296 295.075,146.81L296.373,146.325C297.548,145.886 299.34,145.779 301.75,146.006C304.16,146.233 305.86,146.161 306.849,145.792C308.518,145.168 309.725,143.589 310.47,141.056L316.313,138.873ZM337.872,185.249C340.46,192.174 339.815,198.933 335.937,205.526C332.145,211.593 326.724,215.944 319.676,218.579C318.501,219.018 317.382,217.815 316.32,214.971C315.303,212.25 315.262,210.539 316.198,209.837C316.646,209.529 317.292,209.182 318.134,208.797C320.631,207.37 322.425,205.854 323.516,204.249C324.607,202.643 324.841,201.005 324.217,199.336C322.992,196.059 320.113,194.387 315.578,194.32C314.133,194.226 309.892,194.754 302.853,195.905C295.791,196.994 289.46,196.365 283.862,194.018C277.546,191.446 273.29,187.223 271.095,181.35C268.854,175.352 268.992,169.311 271.509,163.227C274.112,157.181 278.412,153.037 284.409,150.796C285.213,150.495 286.051,150.852 286.923,151.865C287.617,152.592 288.138,153.419 288.484,154.346C289.293,156.51 289.179,157.997 288.143,158.807C286.326,159.979 284.973,161.542 284.082,163.496C283.029,165.58 282.872,167.612 283.612,169.59C283.981,170.58 284.703,171.473 285.776,172.27C289.681,175.179 294.652,175.752 300.687,173.99C302.712,173.374 304.926,172.793 307.329,172.248C309.732,171.702 312.375,171.137 315.257,170.553C319.097,170.457 322.962,171.373 326.854,173.301C332.258,176.073 335.931,180.055 337.872,185.249ZM288.549,230.317L279.907,207.757L286.491,205.296C287.611,205.653 288.896,206.828 290.346,208.823C291.866,211.003 292.838,212.19 293.262,212.384C298.072,215.449 302.331,216.288 306.041,214.901C307.401,214.393 308.601,215.53 309.641,218.312C310.473,220.538 310.479,221.875 309.66,222.322C309.497,222.453 309.107,222.634 308.489,222.865C307.252,223.327 305.429,223.445 303.019,223.218C300.609,222.991 298.94,223.051 298.013,223.398C296.343,224.022 295.136,225.6 294.392,228.133L288.549,230.317Z"}),_.createElement("path",{d:"M394.606,195.569C388.976,196.699 383.488,193.046 382.359,187.416C381.229,181.786 384.882,176.298 390.512,175.168C396.142,174.038 401.63,177.692 402.76,183.321C403.89,188.951 400.236,194.439 394.606,195.569Z"}),_.createElement("path",{d:"M49.46,175.274C55.091,176.4 58.748,181.886 57.621,187.517C56.495,193.147 51.009,196.804 45.378,195.678C39.748,194.551 36.091,189.066 37.217,183.435C38.344,177.804 43.83,174.148 49.46,175.274Z"})),aE=()=>o.jsx("div",{className:"flow",children:o.jsxs("div",{className:"mobile block-center pad-t-8 flow",children:[o.jsx(oE,{className:"brui-logo"}),o.jsx("h1",{className:"mar-t-8",children:"React UI Components"}),o.jsx("h2",{className:"mar-t-none large",children:"For Badger Fans"}),o.jsxs("p",{className:"larger",children:["This is my personal collection of React UI components built around the styles provided by"," ",o.jsx("a",{href:"https://abw.github.io/badger-css",children:"Badger CSS"})]}),o.jsx("div",{className:"text-center",children:o.jsx(lE,{className:"width-10rem"})}),o.jsx("p",{children:"This is Open Source Software and you're welcome to use it. But be warned that it is also Opiniated and Selfish Software."}),o.jsx("p",{children:"I wrote it for me to help my get my job done.  It provides a solid foundation of React components that allow me to get a new site up and running quickly."}),o.jsx("p",{children:"I don't have the time or inclination to help other people get their jobs done (unless they're my clients, colleagues, family or close friends).  So please be aware that this is effectively unsupported software and you're on your own.  If you're not comfortable with that then you should almost certainly be using one of the many other fine UI toolkits that are available."}),o.jsx("p",{children:"Also note that this collection is supposed to be a starting point, not a final destination. You can use the components and styles provided, but at some point you will probably want or need to dig in and start adding your own code, or modifying the builtin components."}),o.jsx("p",{children:"Everything is modular and themeable, so that's generally quite easy to achieve.  But it requires a reasonable knowledge of React, CSS and SASS.  The documentation is provided as a reference for me (and my colleagues) to use, and it assumes a fairly high level of proficiency in these areas."}),o.jsx("p",{children:"Or to put it another way, if you're expecting someone to hold your hand explaining how to get this up and running, then you've probably come to the wrong place."})]})}),sE=Object.freeze(Object.defineProperty({__proto__:null,default:aE},Symbol.toStringTag,{value:"Module"}));/**
 * @remix-run/router v1.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ee(){return Ee=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ee.apply(this,arguments)}var Oe;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Oe||(Oe={}));const q1="popstate";function iE(e){e===void 0&&(e={});function t(r,l){let{pathname:a,search:s,hash:i}=r.location;return vl("",{pathname:a,search:s,hash:i},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function n(r,l){return typeof l=="string"?l:gr(l)}return uE(t,n,null,e)}function q(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function xr(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function cE(){return Math.random().toString(36).substr(2,8)}function J1(e,t){return{usr:e.state,key:e.key,idx:t}}function vl(e,t,n,r){return n===void 0&&(n=null),Ee({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?gn(t):t,{state:n,key:t&&t.key||r||cE()})}function gr(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function gn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function uE(e,t,n,r){r===void 0&&(r={});let{window:l=document.defaultView,v5Compat:a=!1}=r,s=l.history,i=Oe.Pop,c=null,u=d();u==null&&(u=0,s.replaceState(Ee({},s.state,{idx:u}),""));function d(){return(s.state||{idx:null}).idx}function x(){i=Oe.Pop;let E=d(),g=E==null?null:E-u;u=E,c&&c({action:i,location:S.location,delta:g})}function m(E,g){i=Oe.Push;let p=vl(S.location,E,g);n&&n(p,E),u=d()+1;let h=J1(p,u),f=S.createHref(p);try{s.pushState(h,"",f)}catch(v){if(v instanceof DOMException&&v.name==="DataCloneError")throw v;l.location.assign(f)}a&&c&&c({action:i,location:S.location,delta:1})}function j(E,g){i=Oe.Replace;let p=vl(S.location,E,g);n&&n(p,E),u=d();let h=J1(p,u),f=S.createHref(p);s.replaceState(h,"",f),a&&c&&c({action:i,location:S.location,delta:0})}function y(E){let g=l.location.origin!=="null"?l.location.origin:l.location.href,p=typeof E=="string"?E:gr(E);return q(g,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,g)}let S={get action(){return i},get location(){return e(l,s)},listen(E){if(c)throw new Error("A history only accepts one active listener");return l.addEventListener(q1,x),c=E,()=>{l.removeEventListener(q1,x),c=null}},createHref(E){return t(l,E)},createURL:y,encodeLocation(E){let g=y(E);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:m,replace:j,go(E){return s.go(E)}};return S}var Re;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Re||(Re={}));const dE=new Set(["lazy","caseSensitive","path","id","index","children"]);function pE(e){return e.index===!0}function vc(e,t,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((l,a)=>{let s=[...n,a],i=typeof l.id=="string"?l.id:s.join("-");if(q(l.index!==!0||!l.children,"Cannot specify children on an index route"),q(!r[i],'Found a route id collision on id "'+i+`".  Route id's must be globally unique within Data Router usages`),pE(l)){let c=Ee({},l,t(l),{id:i});return r[i]=c,c}else{let c=Ee({},l,t(l),{id:i,children:void 0});return r[i]=c,l.children&&(c.children=vc(l.children,t,s,r)),c}})}function Ur(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?gn(t):t,l=Hn(r.pathname||"/",n);if(l==null)return null;let a=e4(e);hE(a);let s=null;for(let i=0;s==null&&i<a.length;++i)s=bE(a[i],_E(l));return s}function fE(e,t){let{route:n,pathname:r,params:l}=e;return{id:n.id,pathname:r,params:l,data:t[n.id],handle:n.handle}}function e4(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let l=(a,s,i)=>{let c={relativePath:i===void 0?a.path||"":i,caseSensitive:a.caseSensitive===!0,childrenIndex:s,route:a};c.relativePath.startsWith("/")&&(q(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=an([r,c.relativePath]),d=n.concat(c);a.children&&a.children.length>0&&(q(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),e4(a.children,t,d,u)),!(a.path==null&&!a.index)&&t.push({path:u,score:jE(u,a.index),routesMeta:d})};return e.forEach((a,s)=>{var i;if(a.path===""||!((i=a.path)!=null&&i.includes("?")))l(a,s);else for(let c of t4(a.path))l(a,s,c)}),t}function t4(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,l=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return l?[a,""]:[a];let s=t4(r.join("/")),i=[];return i.push(...s.map(c=>c===""?a:[a,c].join("/"))),l&&i.push(...s),i.map(c=>e.startsWith("/")&&c===""?"/":c)}function hE(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:SE(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const mE=/^:\w+$/,xE=3,gE=2,vE=1,yE=10,CE=-2,ep=e=>e==="*";function jE(e,t){let n=e.split("/"),r=n.length;return n.some(ep)&&(r+=CE),t&&(r+=gE),n.filter(l=>!ep(l)).reduce((l,a)=>l+(mE.test(a)?xE:a===""?vE:yE),r)}function SE(e,t){return e.length===t.length&&e.slice(0,-1).every((r,l)=>r===t[l])?e[e.length-1]-t[t.length-1]:0}function bE(e,t){let{routesMeta:n}=e,r={},l="/",a=[];for(let s=0;s<n.length;++s){let i=n[s],c=s===n.length-1,u=l==="/"?t:t.slice(l.length)||"/",d=yc({path:i.relativePath,caseSensitive:i.caseSensitive,end:c},u);if(!d)return null;Object.assign(r,d.params);let x=i.route;a.push({params:r,pathname:an([l,d.pathname]),pathnameBase:EE(an([l,d.pathnameBase])),route:x}),d.pathnameBase!=="/"&&(l=an([l,d.pathnameBase]))}return a}function yc(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=wE(e.path,e.caseSensitive,e.end),l=t.match(n);if(!l)return null;let a=l[0],s=a.replace(/(.)\/+$/,"$1"),i=l.slice(1);return{params:r.reduce((u,d,x)=>{let{paramName:m,isOptional:j}=d;if(m==="*"){let S=i[x]||"";s=a.slice(0,a.length-S.length).replace(/(.)\/+$/,"$1")}const y=i[x];return j&&!y?u[m]=void 0:u[m]=kE(y||"",m),u},{}),pathname:a,pathnameBase:s,pattern:e}}function wE(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),xr(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(s,i,c)=>(r.push({paramName:i,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),r]}function _E(e){try{return decodeURI(e)}catch(t){return xr(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function kE(e,t){try{return decodeURIComponent(e)}catch(n){return xr(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Hn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function TE(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:l=""}=typeof e=="string"?gn(e):e;return{pathname:n?n.startsWith("/")?n:LE(n,t):t,search:NE(r),hash:OE(l)}}function LE(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(l=>{l===".."?n.length>1&&n.pop():l!=="."&&n.push(l)}),n.length>1?n.join("/"):"/"}function ui(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function _s(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function qu(e,t,n,r){r===void 0&&(r=!1);let l;typeof e=="string"?l=gn(e):(l=Ee({},e),q(!l.pathname||!l.pathname.includes("?"),ui("?","pathname","search",l)),q(!l.pathname||!l.pathname.includes("#"),ui("#","pathname","hash",l)),q(!l.search||!l.search.includes("#"),ui("#","search","hash",l)));let a=e===""||l.pathname==="",s=a?"/":l.pathname,i;if(r||s==null)i=n;else{let x=t.length-1;if(s.startsWith("..")){let m=s.split("/");for(;m[0]==="..";)m.shift(),x-=1;l.pathname=m.join("/")}i=x>=0?t[x]:"/"}let c=TE(l,i),u=s&&s!=="/"&&s.endsWith("/"),d=(a||s===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const an=e=>e.join("/").replace(/\/\/+/g,"/"),EE=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),NE=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,OE=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class Ju{constructor(t,n,r,l){l===void 0&&(l=!1),this.status=t,this.statusText=n||"",this.internal=l,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function n4(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const r4=["post","put","patch","delete"],RE=new Set(r4),ME=["get",...r4],DE=new Set(ME),PE=new Set([301,302,303,307,308]),AE=new Set([307,308]),di={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},$E={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},ko={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},o4=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,BE=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),l4="remix-router-transitions";function IE(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",r=!n;q(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let l;if(e.mapRouteProperties)l=e.mapRouteProperties;else if(e.detectErrorBoundary){let w=e.detectErrorBoundary;l=k=>({hasErrorBoundary:w(k)})}else l=BE;let a={},s=vc(e.routes,l,void 0,a),i,c=e.basename||"/",u=Ee({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_prependBasename:!1},e.future),d=null,x=new Set,m=null,j=null,y=null,S=e.hydrationData!=null,E=Ur(s,e.history.location,c),g=null;if(E==null){let w=St(404,{pathname:e.history.location.pathname}),{matches:k,route:R}=ip(s);E=k,g={[R.id]:w}}let p=!E.some(w=>w.route.lazy)&&(!E.some(w=>w.route.loader)||e.hydrationData!=null),h,f={historyAction:e.history.action,location:e.history.location,matches:E,initialized:p,navigation:di,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||g,fetchers:new Map,blockers:new Map},v=Oe.Pop,C=!1,b,T=!1,L=new Map,P=null,U=!1,X=!1,ae=[],ye=[],J=new Map,ue=0,ge=-1,O=new Map,A=new Set,$=new Map,z=new Map,K=new Set,Ae=new Map,le=new Map,$e=!1;function Te(){if(d=e.history.listen(w=>{let{action:k,location:R,delta:B}=w;if($e){$e=!1;return}xr(le.size===0||B!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let W=id({currentLocation:f.location,nextLocation:R,historyAction:k});if(W&&B!=null){$e=!0,e.history.go(B*-1),Il(W,{state:"blocked",location:R,proceed(){Il(W,{state:"proceeding",proceed:void 0,reset:void 0,location:R}),e.history.go(B)},reset(){let Z=new Map(f.blockers);Z.set(W,ko),Ce({blockers:Z})}});return}return Rt(k,R)}),n){QE(t,L);let w=()=>XE(t,L);t.addEventListener("pagehide",w),P=()=>t.removeEventListener("pagehide",w)}return f.initialized||Rt(Oe.Pop,f.location),h}function Ve(){d&&d(),P&&P(),x.clear(),b&&b.abort(),f.fetchers.forEach((w,k)=>Bl(k)),f.blockers.forEach((w,k)=>sd(k))}function qn(w){return x.add(w),()=>x.delete(w)}function Ce(w,k){f=Ee({},f,w);let R=[],B=[];u.v7_fetcherPersist&&f.fetchers.forEach((W,Z)=>{W.state==="idle"&&(K.has(Z)?B.push(Z):R.push(Z))}),x.forEach(W=>W(f,{deletedFetchers:B,unstable_viewTransitionOpts:k})),u.v7_fetcherPersist&&(R.forEach(W=>f.fetchers.delete(W)),B.forEach(W=>Bl(W)))}function qt(w,k){var R,B;let W=f.actionData!=null&&f.navigation.formMethod!=null&&$t(f.navigation.formMethod)&&f.navigation.state==="loading"&&((R=w.state)==null?void 0:R._isRedirect)!==!0,Z;k.actionData?Object.keys(k.actionData).length>0?Z=k.actionData:Z=null:W?Z=f.actionData:Z=null;let Q=k.loaderData?sp(f.loaderData,k.loaderData,k.matches||[],k.errors):f.loaderData,G=f.blockers;G.size>0&&(G=new Map(G),G.forEach((je,ne)=>G.set(ne,ko)));let H=C===!0||f.navigation.formMethod!=null&&$t(f.navigation.formMethod)&&((B=w.state)==null?void 0:B._isRedirect)!==!0;i&&(s=i,i=void 0),U||v===Oe.Pop||(v===Oe.Push?e.history.push(w,w.state):v===Oe.Replace&&e.history.replace(w,w.state));let de;if(v===Oe.Pop){let je=L.get(f.location.pathname);je&&je.has(w.pathname)?de={currentLocation:f.location,nextLocation:w}:L.has(w.pathname)&&(de={currentLocation:w,nextLocation:f.location})}else if(T){let je=L.get(f.location.pathname);je?je.add(w.pathname):(je=new Set([w.pathname]),L.set(f.location.pathname,je)),de={currentLocation:f.location,nextLocation:w}}Ce(Ee({},k,{actionData:Z,loaderData:Q,historyAction:v,location:w,initialized:!0,navigation:di,revalidation:"idle",restoreScrollPosition:ud(w,k.matches||f.matches),preventScrollReset:H,blockers:G}),de),v=Oe.Pop,C=!1,T=!1,U=!1,X=!1,ae=[],ye=[]}async function Jn(w,k){if(typeof w=="number"){e.history.go(w);return}let R=Cc(f.location,f.matches,c,u.v7_prependBasename,w,k==null?void 0:k.fromRouteId,k==null?void 0:k.relative),{path:B,submission:W,error:Z}=tp(u.v7_normalizeFormMethod,!1,R,k),Q=f.location,G=vl(f.location,B,k&&k.state);G=Ee({},G,e.history.encodeLocation(G));let H=k&&k.replace!=null?k.replace:void 0,de=Oe.Push;H===!0?de=Oe.Replace:H===!1||W!=null&&$t(W.formMethod)&&W.formAction===f.location.pathname+f.location.search&&(de=Oe.Replace);let je=k&&"preventScrollReset"in k?k.preventScrollReset===!0:void 0,ne=id({currentLocation:Q,nextLocation:G,historyAction:de});if(ne){Il(ne,{state:"blocked",location:G,proceed(){Il(ne,{state:"proceeding",proceed:void 0,reset:void 0,location:G}),Jn(w,k)},reset(){let pe=new Map(f.blockers);pe.set(ne,ko),Ce({blockers:pe})}});return}return await Rt(de,G,{submission:W,pendingError:Z,preventScrollReset:je,replace:k&&k.replace,enableViewTransition:k&&k.unstable_viewTransition})}function Ts(){if(Ls(),Ce({revalidation:"loading"}),f.navigation.state!=="submitting"){if(f.navigation.state==="idle"){Rt(f.historyAction,f.location,{startUninterruptedRevalidation:!0});return}Rt(v||f.historyAction,f.navigation.location,{overrideNavigation:f.navigation})}}async function Rt(w,k,R){b&&b.abort(),b=null,v=w,U=(R&&R.startUninterruptedRevalidation)===!0,E4(f.location,f.matches),C=(R&&R.preventScrollReset)===!0,T=(R&&R.enableViewTransition)===!0;let B=i||s,W=R&&R.overrideNavigation,Z=Ur(B,k,c);if(!Z){let pe=St(404,{pathname:k.pathname}),{matches:Be,route:er}=ip(B);Es(),qt(k,{matches:Be,loaderData:{},errors:{[er.id]:pe}});return}if(f.initialized&&!X&&WE(f.location,k)&&!(R&&R.submission&&$t(R.submission.formMethod))){qt(k,{matches:Z});return}b=new AbortController;let Q=Lo(e.history,k,b.signal,R&&R.submission),G,H;if(R&&R.pendingError)H={[Xo(Z).route.id]:R.pendingError};else if(R&&R.submission&&$t(R.submission.formMethod)){let pe=await j4(Q,k,R.submission,Z,{replace:R.replace});if(pe.shortCircuited)return;G=pe.pendingActionData,H=pe.pendingActionError,W=pi(k,R.submission),Q=new Request(Q.url,{signal:Q.signal})}let{shortCircuited:de,loaderData:je,errors:ne}=await S4(Q,k,Z,W,R&&R.submission,R&&R.fetcherSubmission,R&&R.replace,G,H);de||(b=null,qt(k,Ee({matches:Z},G?{actionData:G}:{},{loaderData:je,errors:ne})))}async function j4(w,k,R,B,W){W===void 0&&(W={}),Ls();let Z=KE(k,R);Ce({navigation:Z});let Q,G=Sc(B,k);if(!G.route.action&&!G.route.lazy)Q={type:Re.error,error:St(405,{method:w.method,pathname:k.pathname,routeId:G.route.id})};else if(Q=await To("action",w,G,B,a,l,c),w.signal.aborted)return{shortCircuited:!0};if(Yr(Q)){let H;return W&&W.replace!=null?H=W.replace:H=Q.location===f.location.pathname+f.location.search,await fo(f,Q,{submission:R,replace:H}),{shortCircuited:!0}}if(qo(Q)){let H=Xo(B,G.route.id);return(W&&W.replace)!==!0&&(v=Oe.Push),{pendingActionData:{},pendingActionError:{[H.route.id]:Q.error}}}if(ir(Q))throw St(400,{type:"defer-action"});return{pendingActionData:{[G.route.id]:Q.data}}}async function S4(w,k,R,B,W,Z,Q,G,H){let de=B||pi(k,W),je=W||Z||dp(de),ne=i||s,[pe,Be]=np(e.history,f,R,je,k,X,ae,ye,$,A,ne,c,G,H);if(Es(ie=>!(R&&R.some(Mt=>Mt.route.id===ie))||pe&&pe.some(Mt=>Mt.route.id===ie)),ge=++ue,pe.length===0&&Be.length===0){let ie=ld();return qt(k,Ee({matches:R,loaderData:{},errors:H||null},G?{actionData:G}:{},ie?{fetchers:new Map(f.fetchers)}:{})),{shortCircuited:!0}}if(!U){Be.forEach(Mt=>{let Cn=f.fetchers.get(Mt.key),Ne=Eo(void 0,Cn?Cn.data:void 0);f.fetchers.set(Mt.key,Ne)});let ie=G||f.actionData;Ce(Ee({navigation:de},ie?Object.keys(ie).length===0?{actionData:null}:{actionData:ie}:{},Be.length>0?{fetchers:new Map(f.fetchers)}:{}))}Be.forEach(ie=>{J.has(ie.key)&&vn(ie.key),ie.controller&&J.set(ie.key,ie.controller)});let er=()=>Be.forEach(ie=>vn(ie.key));b&&b.signal.addEventListener("abort",er);let{results:tr,loaderResults:mo,fetcherResults:Ns}=await rd(f.matches,R,pe,Be,w);if(w.signal.aborted)return{shortCircuited:!0};b&&b.signal.removeEventListener("abort",er),Be.forEach(ie=>J.delete(ie.key));let Jt=cp(tr);if(Jt){if(Jt.idx>=pe.length){let ie=Be[Jt.idx-pe.length].key;A.add(ie)}return await fo(f,Jt.result,{replace:Q}),{shortCircuited:!0}}let{loaderData:yn,errors:zl}=ap(f,R,pe,mo,H,Be,Ns,Ae);Ae.forEach((ie,Mt)=>{ie.subscribe(Cn=>{(Cn||ie.done)&&Ae.delete(Mt)})});let Os=ld(),Rs=ad(ge),Ms=Os||Rs||Be.length>0;return Ee({loaderData:yn,errors:zl},Ms?{fetchers:new Map(f.fetchers)}:{})}function nd(w){return u.v7_fetcherPersist&&(z.set(w,(z.get(w)||0)+1),K.has(w)&&K.delete(w)),f.fetchers.get(w)||$E}function b4(w,k,R,B){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");J.has(w)&&vn(w);let W=i||s,Z=Cc(f.location,f.matches,c,u.v7_prependBasename,R,k,B==null?void 0:B.relative),Q=Ur(W,Z,c);if(!Q){ho(w,k,St(404,{pathname:Z}));return}let{path:G,submission:H,error:de}=tp(u.v7_normalizeFormMethod,!0,Z,B);if(de){ho(w,k,de);return}let je=Sc(Q,G);if(C=(B&&B.preventScrollReset)===!0,H&&$t(H.formMethod)){w4(w,k,G,je,Q,H);return}$.set(w,{routeId:k,path:G}),_4(w,k,G,je,Q,H)}async function w4(w,k,R,B,W,Z){if(Ls(),$.delete(w),!B.route.action&&!B.route.lazy){let Ne=St(405,{method:Z.formMethod,pathname:R,routeId:k});ho(w,k,Ne);return}let Q=f.fetchers.get(w),G=YE(Z,Q);f.fetchers.set(w,G),Ce({fetchers:new Map(f.fetchers)});let H=new AbortController,de=Lo(e.history,R,H.signal,Z);J.set(w,H);let je=ue,ne=await To("action",de,B,W,a,l,c);if(de.signal.aborted){J.get(w)===H&&J.delete(w);return}if(K.has(w)){f.fetchers.set(w,bn(void 0)),Ce({fetchers:new Map(f.fetchers)});return}if(Yr(ne))if(J.delete(w),ge>je){let Ne=bn(void 0);f.fetchers.set(w,Ne),Ce({fetchers:new Map(f.fetchers)});return}else{A.add(w);let Ne=Eo(Z);return f.fetchers.set(w,Ne),Ce({fetchers:new Map(f.fetchers)}),fo(f,ne,{fetcherSubmission:Z})}if(qo(ne)){ho(w,k,ne.error);return}if(ir(ne))throw St(400,{type:"defer-action"});let pe=f.navigation.location||f.location,Be=Lo(e.history,pe,H.signal),er=i||s,tr=f.navigation.state!=="idle"?Ur(er,f.navigation.location,c):f.matches;q(tr,"Didn't find any matches after fetcher action");let mo=++ue;O.set(w,mo);let Ns=Eo(Z,ne.data);f.fetchers.set(w,Ns);let[Jt,yn]=np(e.history,f,tr,Z,pe,X,ae,ye,$,A,er,c,{[B.route.id]:ne.data},void 0);yn.filter(Ne=>Ne.key!==w).forEach(Ne=>{let xo=Ne.key,dd=f.fetchers.get(xo),O4=Eo(void 0,dd?dd.data:void 0);f.fetchers.set(xo,O4),J.has(xo)&&vn(xo),Ne.controller&&J.set(xo,Ne.controller)}),Ce({fetchers:new Map(f.fetchers)});let zl=()=>yn.forEach(Ne=>vn(Ne.key));H.signal.addEventListener("abort",zl);let{results:Os,loaderResults:Rs,fetcherResults:Ms}=await rd(f.matches,tr,Jt,yn,Be);if(H.signal.aborted)return;H.signal.removeEventListener("abort",zl),O.delete(w),J.delete(w),yn.forEach(Ne=>J.delete(Ne.key));let ie=cp(Os);if(ie){if(ie.idx>=Jt.length){let Ne=yn[ie.idx-Jt.length].key;A.add(Ne)}return fo(f,ie.result)}let{loaderData:Mt,errors:Cn}=ap(f,f.matches,Jt,Rs,void 0,yn,Ms,Ae);if(f.fetchers.has(w)){let Ne=bn(ne.data);f.fetchers.set(w,Ne)}ad(mo),f.navigation.state==="loading"&&mo>ge?(q(v,"Expected pending action"),b&&b.abort(),qt(f.navigation.location,{matches:tr,loaderData:Mt,errors:Cn,fetchers:new Map(f.fetchers)})):(Ce({errors:Cn,loaderData:sp(f.loaderData,Mt,tr,Cn),fetchers:new Map(f.fetchers)}),X=!1)}async function _4(w,k,R,B,W,Z){let Q=f.fetchers.get(w),G=Eo(Z,Q?Q.data:void 0);f.fetchers.set(w,G),Ce({fetchers:new Map(f.fetchers)});let H=new AbortController,de=Lo(e.history,R,H.signal);J.set(w,H);let je=ue,ne=await To("loader",de,B,W,a,l,c);if(ir(ne)&&(ne=await i4(ne,de.signal,!0)||ne),J.get(w)===H&&J.delete(w),de.signal.aborted)return;if(K.has(w)){f.fetchers.set(w,bn(void 0)),Ce({fetchers:new Map(f.fetchers)});return}if(Yr(ne))if(ge>je){let Be=bn(void 0);f.fetchers.set(w,Be),Ce({fetchers:new Map(f.fetchers)});return}else{A.add(w),await fo(f,ne);return}if(qo(ne)){ho(w,k,ne.error);return}q(!ir(ne),"Unhandled fetcher deferred data");let pe=bn(ne.data);f.fetchers.set(w,pe),Ce({fetchers:new Map(f.fetchers)})}async function fo(w,k,R){let{submission:B,fetcherSubmission:W,replace:Z}=R===void 0?{}:R;k.revalidate&&(X=!0);let Q=vl(w.location,k.location,{_isRedirect:!0});if(q(Q,"Expected a location on the redirect navigation"),n){let pe=!1;if(k.reloadDocument)pe=!0;else if(o4.test(k.location)){const Be=e.history.createURL(k.location);pe=Be.origin!==t.location.origin||Hn(Be.pathname,c)==null}if(pe){Z?t.location.replace(k.location):t.location.assign(k.location);return}}b=null;let G=Z===!0?Oe.Replace:Oe.Push,{formMethod:H,formAction:de,formEncType:je}=w.navigation;!B&&!W&&H&&de&&je&&(B=dp(w.navigation));let ne=B||W;if(AE.has(k.status)&&ne&&$t(ne.formMethod))await Rt(G,Q,{submission:Ee({},ne,{formAction:k.location}),preventScrollReset:C});else{let pe=pi(Q,B);await Rt(G,Q,{overrideNavigation:pe,fetcherSubmission:W,preventScrollReset:C})}}async function rd(w,k,R,B,W){let Z=await Promise.all([...R.map(H=>To("loader",W,H,k,a,l,c)),...B.map(H=>H.matches&&H.match&&H.controller?To("loader",Lo(e.history,H.path,H.controller.signal),H.match,H.matches,a,l,c):{type:Re.error,error:St(404,{pathname:H.path})})]),Q=Z.slice(0,R.length),G=Z.slice(R.length);return await Promise.all([up(w,R,Q,Q.map(()=>W.signal),!1,f.loaderData),up(w,B.map(H=>H.match),G,B.map(H=>H.controller?H.controller.signal:null),!0)]),{results:Z,loaderResults:Q,fetcherResults:G}}function Ls(){X=!0,ae.push(...Es()),$.forEach((w,k)=>{J.has(k)&&(ye.push(k),vn(k))})}function ho(w,k,R){let B=Xo(f.matches,k);Bl(w),Ce({errors:{[B.route.id]:R},fetchers:new Map(f.fetchers)})}function Bl(w){let k=f.fetchers.get(w);J.has(w)&&!(k&&k.state==="loading"&&O.has(w))&&vn(w),$.delete(w),O.delete(w),A.delete(w),K.delete(w),f.fetchers.delete(w)}function k4(w){if(u.v7_fetcherPersist){let k=(z.get(w)||0)-1;k<=0?(z.delete(w),K.add(w)):z.set(w,k)}else Bl(w);Ce({fetchers:new Map(f.fetchers)})}function vn(w){let k=J.get(w);q(k,"Expected fetch controller: "+w),k.abort(),J.delete(w)}function od(w){for(let k of w){let R=nd(k),B=bn(R.data);f.fetchers.set(k,B)}}function ld(){let w=[],k=!1;for(let R of A){let B=f.fetchers.get(R);q(B,"Expected fetcher: "+R),B.state==="loading"&&(A.delete(R),w.push(R),k=!0)}return od(w),k}function ad(w){let k=[];for(let[R,B]of O)if(B<w){let W=f.fetchers.get(R);q(W,"Expected fetcher: "+R),W.state==="loading"&&(vn(R),O.delete(R),k.push(R))}return od(k),k.length>0}function T4(w,k){let R=f.blockers.get(w)||ko;return le.get(w)!==k&&le.set(w,k),R}function sd(w){f.blockers.delete(w),le.delete(w)}function Il(w,k){let R=f.blockers.get(w)||ko;q(R.state==="unblocked"&&k.state==="blocked"||R.state==="blocked"&&k.state==="blocked"||R.state==="blocked"&&k.state==="proceeding"||R.state==="blocked"&&k.state==="unblocked"||R.state==="proceeding"&&k.state==="unblocked","Invalid blocker state transition: "+R.state+" -> "+k.state);let B=new Map(f.blockers);B.set(w,k),Ce({blockers:B})}function id(w){let{currentLocation:k,nextLocation:R,historyAction:B}=w;if(le.size===0)return;le.size>1&&xr(!1,"A router only supports one blocker at a time");let W=Array.from(le.entries()),[Z,Q]=W[W.length-1],G=f.blockers.get(Z);if(!(G&&G.state==="proceeding")&&Q({currentLocation:k,nextLocation:R,historyAction:B}))return Z}function Es(w){let k=[];return Ae.forEach((R,B)=>{(!w||w(B))&&(R.cancel(),k.push(B),Ae.delete(B))}),k}function L4(w,k,R){if(m=w,y=k,j=R||null,!S&&f.navigation===di){S=!0;let B=ud(f.location,f.matches);B!=null&&Ce({restoreScrollPosition:B})}return()=>{m=null,y=null,j=null}}function cd(w,k){return j&&j(w,k.map(B=>fE(B,f.loaderData)))||w.key}function E4(w,k){if(m&&y){let R=cd(w,k);m[R]=y()}}function ud(w,k){if(m){let R=cd(w,k),B=m[R];if(typeof B=="number")return B}return null}function N4(w){a={},i=vc(w,l,void 0,a)}return h={get basename(){return c},get state(){return f},get routes(){return s},get window(){return t},initialize:Te,subscribe:qn,enableScrollRestoration:L4,navigate:Jn,fetch:b4,revalidate:Ts,createHref:w=>e.history.createHref(w),encodeLocation:w=>e.history.encodeLocation(w),getFetcher:nd,deleteFetcher:k4,dispose:Ve,getBlocker:T4,deleteBlocker:sd,_internalFetchControllers:J,_internalActiveDeferreds:Ae,_internalSetRoutes:N4},h}function zE(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function Cc(e,t,n,r,l,a,s){let i,c;if(a!=null&&s!=="path"){i=[];for(let d of t)if(i.push(d),d.route.id===a){c=d;break}}else i=t,c=t[t.length-1];let u=qu(l||".",_s(i).map(d=>d.pathnameBase),Hn(e.pathname,n)||e.pathname,s==="path");return l==null&&(u.search=e.search,u.hash=e.hash),(l==null||l===""||l===".")&&c&&c.route.index&&!ed(u.search)&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(u.pathname=u.pathname==="/"?n:an([n,u.pathname])),gr(u)}function tp(e,t,n,r){if(!r||!zE(r))return{path:n};if(r.formMethod&&!GE(r.formMethod))return{path:n,error:St(405,{method:r.formMethod})};let l=()=>({path:n,error:St(400,{type:"invalid-body"})}),a=r.formMethod||"get",s=e?a.toUpperCase():a.toLowerCase(),i=s4(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!$t(s))return l();let m=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((j,y)=>{let[S,E]=y;return""+j+S+"="+E+`
`},""):String(r.body);return{path:n,submission:{formMethod:s,formAction:i,formEncType:r.formEncType,formData:void 0,json:void 0,text:m}}}else if(r.formEncType==="application/json"){if(!$t(s))return l();try{let m=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:s,formAction:i,formEncType:r.formEncType,formData:void 0,json:m,text:void 0}}}catch{return l()}}}q(typeof FormData=="function","FormData is not available in this environment");let c,u;if(r.formData)c=jc(r.formData),u=r.formData;else if(r.body instanceof FormData)c=jc(r.body),u=r.body;else if(r.body instanceof URLSearchParams)c=r.body,u=lp(c);else if(r.body==null)c=new URLSearchParams,u=new FormData;else try{c=new URLSearchParams(r.body),u=lp(c)}catch{return l()}let d={formMethod:s,formAction:i,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if($t(d.formMethod))return{path:n,submission:d};let x=gn(n);return t&&x.search&&ed(x.search)&&c.append("index",""),x.search="?"+c,{path:gr(x),submission:d}}function FE(e,t){let n=e;if(t){let r=e.findIndex(l=>l.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function np(e,t,n,r,l,a,s,i,c,u,d,x,m,j){let y=j?Object.values(j)[0]:m?Object.values(m)[0]:void 0,S=e.createURL(t.location),E=e.createURL(l),g=j?Object.keys(j)[0]:void 0,h=FE(n,g).filter((v,C)=>{if(v.route.lazy)return!0;if(v.route.loader==null)return!1;if(UE(t.loaderData,t.matches[C],v)||s.some(L=>L===v.route.id))return!0;let b=t.matches[C],T=v;return rp(v,Ee({currentUrl:S,currentParams:b.params,nextUrl:E,nextParams:T.params},r,{actionResult:y,defaultShouldRevalidate:a||S.pathname+S.search===E.pathname+E.search||S.search!==E.search||a4(b,T)}))}),f=[];return c.forEach((v,C)=>{if(!n.some(U=>U.route.id===v.routeId))return;let b=Ur(d,v.path,x);if(!b){f.push({key:C,routeId:v.routeId,path:v.path,matches:null,match:null,controller:null});return}let T=t.fetchers.get(C),L=Sc(b,v.path),P=!1;u.has(C)?P=!1:i.includes(C)?P=!0:T&&T.state!=="idle"&&T.data===void 0?P=a:P=rp(L,Ee({currentUrl:S,currentParams:t.matches[t.matches.length-1].params,nextUrl:E,nextParams:n[n.length-1].params},r,{actionResult:y,defaultShouldRevalidate:a})),P&&f.push({key:C,routeId:v.routeId,path:v.path,matches:b,match:L,controller:new AbortController})}),[h,f]}function UE(e,t,n){let r=!t||n.route.id!==t.route.id,l=e[n.route.id]===void 0;return r||l}function a4(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function rp(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function op(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let l=n[e.id];q(l,"No route found in manifest");let a={};for(let s in r){let c=l[s]!==void 0&&s!=="hasErrorBoundary";xr(!c,'Route "'+l.id+'" has a static property "'+s+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+s+'" will be ignored.')),!c&&!dE.has(s)&&(a[s]=r[s])}Object.assign(l,a),Object.assign(l,Ee({},t(l),{lazy:void 0}))}async function To(e,t,n,r,l,a,s,i){i===void 0&&(i={});let c,u,d,x=y=>{let S,E=new Promise((g,p)=>S=p);return d=()=>S(),t.signal.addEventListener("abort",d),Promise.race([y({request:t,params:n.params,context:i.requestContext}),E])};try{let y=n.route[e];if(n.route.lazy)if(y){let S,E=await Promise.all([x(y).catch(g=>{S=g}),op(n.route,a,l)]);if(S)throw S;u=E[0]}else if(await op(n.route,a,l),y=n.route[e],y)u=await x(y);else if(e==="action"){let S=new URL(t.url),E=S.pathname+S.search;throw St(405,{method:t.method,pathname:E,routeId:n.route.id})}else return{type:Re.data,data:void 0};else if(y)u=await x(y);else{let S=new URL(t.url),E=S.pathname+S.search;throw St(404,{pathname:E})}q(u!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(y){c=Re.error,u=y}finally{d&&t.signal.removeEventListener("abort",d)}if(ZE(u)){let y=u.status;if(PE.has(y)){let g=u.headers.get("Location");if(q(g,"Redirects returned/thrown from loaders/actions must have a Location header"),!o4.test(g))g=Cc(new URL(t.url),r.slice(0,r.indexOf(n)+1),s,!0,g);else if(!i.isStaticRequest){let p=new URL(t.url),h=g.startsWith("//")?new URL(p.protocol+g):new URL(g),f=Hn(h.pathname,s)!=null;h.origin===p.origin&&f&&(g=h.pathname+h.search+h.hash)}if(i.isStaticRequest)throw u.headers.set("Location",g),u;return{type:Re.redirect,status:y,location:g,revalidate:u.headers.get("X-Remix-Revalidate")!==null,reloadDocument:u.headers.get("X-Remix-Reload-Document")!==null}}if(i.isRouteRequest)throw{type:c===Re.error?Re.error:Re.data,response:u};let S,E=u.headers.get("Content-Type");return E&&/\bapplication\/json\b/.test(E)?S=await u.json():S=await u.text(),c===Re.error?{type:c,error:new Ju(y,u.statusText,S),headers:u.headers}:{type:Re.data,data:S,statusCode:u.status,headers:u.headers}}if(c===Re.error)return{type:c,error:u};if(VE(u)){var m,j;return{type:Re.deferred,deferredData:u,statusCode:(m=u.init)==null?void 0:m.status,headers:((j=u.init)==null?void 0:j.headers)&&new Headers(u.init.headers)}}return{type:Re.data,data:u}}function Lo(e,t,n,r){let l=e.createURL(s4(t)).toString(),a={signal:n};if(r&&$t(r.formMethod)){let{formMethod:s,formEncType:i}=r;a.method=s.toUpperCase(),i==="application/json"?(a.headers=new Headers({"Content-Type":i}),a.body=JSON.stringify(r.json)):i==="text/plain"?a.body=r.text:i==="application/x-www-form-urlencoded"&&r.formData?a.body=jc(r.formData):a.body=r.formData}return new Request(l,a)}function jc(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,typeof r=="string"?r:r.name);return t}function lp(e){let t=new FormData;for(let[n,r]of e.entries())t.append(n,r);return t}function HE(e,t,n,r,l){let a={},s=null,i,c=!1,u={};return n.forEach((d,x)=>{let m=t[x].route.id;if(q(!Yr(d),"Cannot handle redirect results in processLoaderData"),qo(d)){let j=Xo(e,m),y=d.error;r&&(y=Object.values(r)[0],r=void 0),s=s||{},s[j.route.id]==null&&(s[j.route.id]=y),a[m]=void 0,c||(c=!0,i=n4(d.error)?d.error.status:500),d.headers&&(u[m]=d.headers)}else ir(d)?(l.set(m,d.deferredData),a[m]=d.deferredData.data):a[m]=d.data,d.statusCode!=null&&d.statusCode!==200&&!c&&(i=d.statusCode),d.headers&&(u[m]=d.headers)}),r&&(s=r,a[Object.keys(r)[0]]=void 0),{loaderData:a,errors:s,statusCode:i||200,loaderHeaders:u}}function ap(e,t,n,r,l,a,s,i){let{loaderData:c,errors:u}=HE(t,n,r,l,i);for(let d=0;d<a.length;d++){let{key:x,match:m,controller:j}=a[d];q(s!==void 0&&s[d]!==void 0,"Did not find corresponding fetcher result");let y=s[d];if(!(j&&j.signal.aborted))if(qo(y)){let S=Xo(e.matches,m==null?void 0:m.route.id);u&&u[S.route.id]||(u=Ee({},u,{[S.route.id]:y.error})),e.fetchers.delete(x)}else if(Yr(y))q(!1,"Unhandled fetcher revalidation redirect");else if(ir(y))q(!1,"Unhandled fetcher deferred data");else{let S=bn(y.data);e.fetchers.set(x,S)}}return{loaderData:c,errors:u}}function sp(e,t,n,r){let l=Ee({},t);for(let a of n){let s=a.route.id;if(t.hasOwnProperty(s)?t[s]!==void 0&&(l[s]=t[s]):e[s]!==void 0&&a.route.loader&&(l[s]=e[s]),r&&r.hasOwnProperty(s))break}return l}function Xo(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function ip(e){let t=e.length===1?e[0]:e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function St(e,t){let{pathname:n,routeId:r,method:l,type:a}=t===void 0?{}:t,s="Unknown Server Error",i="Unknown @remix-run/router error";return e===400?(s="Bad Request",l&&n&&r?i="You made a "+l+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":a==="defer-action"?i="defer() is not supported in actions":a==="invalid-body"&&(i="Unable to encode submission body")):e===403?(s="Forbidden",i='Route "'+r+'" does not match URL "'+n+'"'):e===404?(s="Not Found",i='No route matches URL "'+n+'"'):e===405&&(s="Method Not Allowed",l&&n&&r?i="You made a "+l.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":l&&(i='Invalid request method "'+l.toUpperCase()+'"')),new Ju(e||500,s,new Error(i),!0)}function cp(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(Yr(n))return{result:n,idx:t}}}function s4(e){let t=typeof e=="string"?gn(e):e;return gr(Ee({},t,{hash:""}))}function WE(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function ir(e){return e.type===Re.deferred}function qo(e){return e.type===Re.error}function Yr(e){return(e&&e.type)===Re.redirect}function VE(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function ZE(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function GE(e){return DE.has(e.toLowerCase())}function $t(e){return RE.has(e.toLowerCase())}async function up(e,t,n,r,l,a){for(let s=0;s<n.length;s++){let i=n[s],c=t[s];if(!c)continue;let u=e.find(x=>x.route.id===c.route.id),d=u!=null&&!a4(u,c)&&(a&&a[c.route.id])!==void 0;if(ir(i)&&(l||d)){let x=r[s];q(x,"Expected an AbortSignal for revalidating fetcher deferred result"),await i4(i,x,l).then(m=>{m&&(n[s]=m||n[s])})}}}async function i4(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:Re.data,data:e.deferredData.unwrappedData}}catch(l){return{type:Re.error,error:l}}return{type:Re.data,data:e.deferredData.data}}}function ed(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function Sc(e,t){let n=typeof t=="string"?gn(t).search:t.search;if(e[e.length-1].route.index&&ed(n||""))return e[e.length-1];let r=_s(e);return r[r.length-1]}function dp(e){let{formMethod:t,formAction:n,formEncType:r,text:l,formData:a,json:s}=e;if(!(!t||!n||!r)){if(l!=null)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:void 0,text:l};if(a!=null)return{formMethod:t,formAction:n,formEncType:r,formData:a,json:void 0,text:void 0};if(s!==void 0)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:s,text:void 0}}}function pi(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function KE(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function Eo(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function YE(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function bn(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function QE(e,t){try{let n=e.sessionStorage.getItem(l4);if(n){let r=JSON.parse(n);for(let[l,a]of Object.entries(r||{}))a&&Array.isArray(a)&&t.set(l,new Set(a||[]))}}catch{}}function XE(e,t){if(t.size>0){let n={};for(let[r,l]of t)n[r]=[...l];try{e.sessionStorage.setItem(l4,JSON.stringify(n))}catch(r){xr(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ja(){return Ja=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ja.apply(this,arguments)}const Dl=_.createContext(null),td=_.createContext(null),_r=_.createContext(null),ks=_.createContext(null),Xn=_.createContext({outlet:null,matches:[],isDataRoute:!1}),c4=_.createContext(null);function qE(e,t){let{relative:n}=t===void 0?{}:t;Pl()||q(!1);let{basename:r,navigator:l}=_.useContext(_r),{hash:a,pathname:s,search:i}=Al(e,{relative:n}),c=s;return r!=="/"&&(c=s==="/"?r:an([r,s])),l.createHref({pathname:c,search:i,hash:a})}function Pl(){return _.useContext(ks)!=null}function po(){return Pl()||q(!1),_.useContext(ks).location}function u4(e){_.useContext(_r).static||_.useLayoutEffect(e)}function JE(){let{isDataRoute:e}=_.useContext(Xn);return e?fN():eN()}function eN(){Pl()||q(!1);let e=_.useContext(Dl),{basename:t,navigator:n}=_.useContext(_r),{matches:r}=_.useContext(Xn),{pathname:l}=po(),a=JSON.stringify(_s(r).map(c=>c.pathnameBase)),s=_.useRef(!1);return u4(()=>{s.current=!0}),_.useCallback(function(c,u){if(u===void 0&&(u={}),!s.current)return;if(typeof c=="number"){n.go(c);return}let d=qu(c,JSON.parse(a),l,u.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:an([t,d.pathname])),(u.replace?n.replace:n.push)(d,u.state,u)},[t,n,a,l,e])}const tN=_.createContext(null);function nN(e){let t=_.useContext(Xn).outlet;return t&&_.createElement(tN.Provider,{value:e},t)}function Al(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=_.useContext(Xn),{pathname:l}=po(),a=JSON.stringify(_s(r).map(s=>s.pathnameBase));return _.useMemo(()=>qu(e,JSON.parse(a),l,n==="path"),[e,a,l,n])}function rN(e,t,n){Pl()||q(!1);let{navigator:r}=_.useContext(_r),{matches:l}=_.useContext(Xn),a=l[l.length-1],s=a?a.params:{};a&&a.pathname;let i=a?a.pathnameBase:"/";a&&a.route;let c=po(),u;if(t){var d;let S=typeof t=="string"?gn(t):t;i==="/"||(d=S.pathname)!=null&&d.startsWith(i)||q(!1),u=S}else u=c;let x=u.pathname||"/",m=i==="/"?x:x.slice(i.length)||"/",j=Ur(e,{pathname:m}),y=iN(j&&j.map(S=>Object.assign({},S,{params:Object.assign({},s,S.params),pathname:an([i,r.encodeLocation?r.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?i:an([i,r.encodeLocation?r.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),l,n);return t&&y?_.createElement(ks.Provider,{value:{location:Ja({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Oe.Pop}},y):y}function oN(){let e=pN(),t=n4(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},a=null;return _.createElement(_.Fragment,null,_.createElement("h2",null,"Unexpected Application Error!"),_.createElement("h3",{style:{fontStyle:"italic"}},t),n?_.createElement("pre",{style:l},n):null,a)}const lN=_.createElement(oN,null);class aN extends _.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?_.createElement(Xn.Provider,{value:this.props.routeContext},_.createElement(c4.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function sN(e){let{routeContext:t,match:n,children:r}=e,l=_.useContext(Dl);return l&&l.static&&l.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=n.route.id),_.createElement(Xn.Provider,{value:t},r)}function iN(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var l;if((l=n)!=null&&l.errors)e=n.matches;else return null}let a=e,s=(r=n)==null?void 0:r.errors;if(s!=null){let i=a.findIndex(c=>c.route.id&&(s==null?void 0:s[c.route.id]));i>=0||q(!1),a=a.slice(0,Math.min(a.length,i+1))}return a.reduceRight((i,c,u)=>{let d=c.route.id?s==null?void 0:s[c.route.id]:null,x=null;n&&(x=c.route.errorElement||lN);let m=t.concat(a.slice(0,u+1)),j=()=>{let y;return d?y=x:c.route.Component?y=_.createElement(c.route.Component,null):c.route.element?y=c.route.element:y=i,_.createElement(sN,{match:c,routeContext:{outlet:i,matches:m,isDataRoute:n!=null},children:y})};return n&&(c.route.ErrorBoundary||c.route.errorElement||u===0)?_.createElement(aN,{location:n.location,revalidation:n.revalidation,component:x,error:d,children:j(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):j()},null)}var d4=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(d4||{}),es=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(es||{});function cN(e){let t=_.useContext(Dl);return t||q(!1),t}function uN(e){let t=_.useContext(td);return t||q(!1),t}function dN(e){let t=_.useContext(Xn);return t||q(!1),t}function p4(e){let t=dN(),n=t.matches[t.matches.length-1];return n.route.id||q(!1),n.route.id}function pN(){var e;let t=_.useContext(c4),n=uN(es.UseRouteError),r=p4(es.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function fN(){let{router:e}=cN(d4.UseNavigateStable),t=p4(es.UseNavigateStable),n=_.useRef(!1);return u4(()=>{n.current=!0}),_.useCallback(function(l,a){a===void 0&&(a={}),n.current&&(typeof l=="number"?e.navigate(l):e.navigate(l,Ja({fromRouteId:t},a)))},[e,t])}function hN(e){return nN(e.context)}function mN(e){let{basename:t="/",children:n=null,location:r,navigationType:l=Oe.Pop,navigator:a,static:s=!1}=e;Pl()&&q(!1);let i=t.replace(/^\/*/,"/"),c=_.useMemo(()=>({basename:i,navigator:a,static:s}),[i,a,s]);typeof r=="string"&&(r=gn(r));let{pathname:u="/",search:d="",hash:x="",state:m=null,key:j="default"}=r,y=_.useMemo(()=>{let S=Hn(u,i);return S==null?null:{location:{pathname:S,search:d,hash:x,state:m,key:j},navigationType:l}},[i,u,d,x,m,j,l]);return y==null?null:_.createElement(_r.Provider,{value:c},_.createElement(ks.Provider,{children:n,value:y}))}new Promise(()=>{});function xN(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:_.createElement(e.Component),Component:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:_.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ro(){return ro=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ro.apply(this,arguments)}function f4(e,t){if(e==null)return{};var n={},r=Object.keys(e),l,a;for(a=0;a<r.length;a++)l=r[a],!(t.indexOf(l)>=0)&&(n[l]=e[l]);return n}function gN(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function vN(e,t){return e.button===0&&(!t||t==="_self")&&!gN(e)}const yN=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],CN=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"];function jN(e,t){return IE({basename:t==null?void 0:t.basename,future:ro({},t==null?void 0:t.future,{v7_prependBasename:!0}),history:iE({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||SN(),routes:e,mapRouteProperties:xN,window:t==null?void 0:t.window}).initialize()}function SN(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=ro({},t,{errors:bN(t.errors)})),t}function bN(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,l]of t)if(l&&l.__type==="RouteErrorResponse")n[r]=new Ju(l.status,l.statusText,l.data,l.internal===!0);else if(l&&l.__type==="Error"){if(l.__subType){let a=window[l.__subType];if(typeof a=="function")try{let s=new a(l.message);s.stack="",n[r]=s}catch{}}if(n[r]==null){let a=new Error(l.message);a.stack="",n[r]=a}}else n[r]=l;return n}const h4=_.createContext({isTransitioning:!1}),wN=_.createContext(new Map),_N="startTransition",pp=Q4[_N];function kN(e){pp?pp(e):e()}class TN{constructor(){this.status="pending",this.promise=new Promise((t,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",t(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}}function LN(e){let{fallbackElement:t,router:n,future:r}=e,[l,a]=_.useState(n.state),[s,i]=_.useState(),[c,u]=_.useState({isTransitioning:!1}),[d,x]=_.useState(),[m,j]=_.useState(),[y,S]=_.useState(),E=_.useRef(new Map),{v7_startTransition:g}=r||{},p=_.useCallback(b=>{g?kN(b):b()},[g]),h=_.useCallback((b,T)=>{let{deletedFetchers:L,unstable_viewTransitionOpts:P}=T;L.forEach(U=>E.current.delete(U)),b.fetchers.forEach((U,X)=>{U.data!==void 0&&E.current.set(X,U.data)}),!P||n.window==null||typeof n.window.document.startViewTransition!="function"?p(()=>a(b)):m&&d?(d.resolve(),m.skipTransition(),S({state:b,currentLocation:P.currentLocation,nextLocation:P.nextLocation})):(i(b),u({isTransitioning:!0,currentLocation:P.currentLocation,nextLocation:P.nextLocation}))},[n.window,m,d,E,p]);_.useLayoutEffect(()=>n.subscribe(h),[n,h]),_.useEffect(()=>{c.isTransitioning&&x(new TN)},[c.isTransitioning]),_.useEffect(()=>{if(d&&s&&n.window){let b=s,T=d.promise,L=n.window.document.startViewTransition(async()=>{p(()=>a(b)),await T});L.finished.finally(()=>{x(void 0),j(void 0),i(void 0),u({isTransitioning:!1})}),j(L)}},[p,s,d,n.window]),_.useEffect(()=>{d&&s&&l.location.key===s.location.key&&d.resolve()},[d,m,l.location,s]),_.useEffect(()=>{!c.isTransitioning&&y&&(i(y.state),u({isTransitioning:!0,currentLocation:y.currentLocation,nextLocation:y.nextLocation}),S(void 0))},[c.isTransitioning,y]);let f=_.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:b=>n.navigate(b),push:(b,T,L)=>n.navigate(b,{state:T,preventScrollReset:L==null?void 0:L.preventScrollReset}),replace:(b,T,L)=>n.navigate(b,{replace:!0,state:T,preventScrollReset:L==null?void 0:L.preventScrollReset})}),[n]),v=n.basename||"/",C=_.useMemo(()=>({router:n,navigator:f,static:!1,basename:v}),[n,f,v]);return _.createElement(_.Fragment,null,_.createElement(Dl.Provider,{value:C},_.createElement(td.Provider,{value:l},_.createElement(wN.Provider,{value:E.current},_.createElement(h4.Provider,{value:c},_.createElement(mN,{basename:v,location:l.location,navigationType:l.historyAction,navigator:f},l.initialized?_.createElement(EN,{routes:n.routes,state:l}):t))))),null)}function EN(e){let{routes:t,state:n}=e;return rN(t,void 0,n)}const NN=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ON=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,RN=_.forwardRef(function(t,n){let{onClick:r,relative:l,reloadDocument:a,replace:s,state:i,target:c,to:u,preventScrollReset:d,unstable_viewTransition:x}=t,m=f4(t,yN),{basename:j}=_.useContext(_r),y,S=!1;if(typeof u=="string"&&ON.test(u)&&(y=u,NN))try{let h=new URL(window.location.href),f=u.startsWith("//")?new URL(h.protocol+u):new URL(u),v=Hn(f.pathname,j);f.origin===h.origin&&v!=null?u=v+f.search+f.hash:S=!0}catch{}let E=qE(u,{relative:l}),g=PN(u,{replace:s,state:i,target:c,preventScrollReset:d,relative:l,unstable_viewTransition:x});function p(h){r&&r(h),h.defaultPrevented||g(h)}return _.createElement("a",ro({},m,{href:y||E,onClick:S||a?r:p,ref:n,target:c}))}),MN=_.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:l=!1,className:a="",end:s=!1,style:i,to:c,unstable_viewTransition:u,children:d}=t,x=f4(t,CN),m=Al(c,{relative:x.relative}),j=po(),y=_.useContext(td),{navigator:S}=_.useContext(_r),E=y!=null&&AN(m)&&u===!0,g=S.encodeLocation?S.encodeLocation(m).pathname:m.pathname,p=j.pathname,h=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;l||(p=p.toLowerCase(),h=h?h.toLowerCase():null,g=g.toLowerCase());let f=p===g||!s&&p.startsWith(g)&&p.charAt(g.length)==="/",v=h!=null&&(h===g||!s&&h.startsWith(g)&&h.charAt(g.length)==="/"),C={isActive:f,isPending:v,isTransitioning:E},b=f?r:void 0,T;typeof a=="function"?T=a(C):T=[a,f?"active":null,v?"pending":null,E?"transitioning":null].filter(Boolean).join(" ");let L=typeof i=="function"?i(C):i;return _.createElement(RN,ro({},x,{"aria-current":b,className:T,ref:n,style:L,to:c,unstable_viewTransition:u}),typeof d=="function"?d(C):d)});var bc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(bc||(bc={}));var fp;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(fp||(fp={}));function DN(e){let t=_.useContext(Dl);return t||q(!1),t}function PN(e,t){let{target:n,replace:r,state:l,preventScrollReset:a,relative:s,unstable_viewTransition:i}=t===void 0?{}:t,c=JE(),u=po(),d=Al(e,{relative:s});return _.useCallback(x=>{if(vN(x,n)){x.preventDefault();let m=r!==void 0?r:gr(u)===gr(d);c(e,{replace:m,state:l,preventScrollReset:a,relative:s,unstable_viewTransition:i})}},[u,c,d,r,l,n,e,a,s,i])}function AN(e,t){t===void 0&&(t={});let n=_.useContext(h4);n==null&&q(!1);let{basename:r}=DN(bc.useViewTransitionState),l=Al(e,{relative:t.relative});if(!n.isTransitioning)return!1;let a=Hn(n.currentLocation.pathname,r)||n.currentLocation.pathname,s=Hn(n.nextLocation.pathname,r)||n.nextLocation.pathname;return yc(l.pathname,s)!=null||yc(l.pathname,a)!=null}const m4=({to:e,className:t="",exact:n,onClick:r,label:l,style:a,...s})=>o.jsx(MN,{to:e,onClick:r,end:n&&"end",className:({isActive:i})=>`${t} ${i?"active":""}`,"aria-label":l,style:a,children:o.jsx(js,{...s})}),x4=({path:e,onClick:t,width:n=512,height:r=512,style:l,className:a="night-and-day--icon",fill:s="currentColor"})=>o.jsx("svg",{"aria-hidden":"true",focusable:"false",className:a,style:l,role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${n} ${r}`,onClick:t,children:o.jsx("path",{d:e,fill:s})}),$N=e=>o.jsx(x4,{path:"M289,23C160,23 56,127 56,256C56,385 160,489 289,489C352,489 409,464 451,423C456,418 457,411 454,404C451,397 444,394 436,395C426,397 416,397 405,397C304,397 222,316 222,214C222,146 260,86 315,55C322,51 325,44 323,37C322,30 316,25 309,24C302,23 295,23 289,23L289,23Z",...e}),g4=({Icon:e,caption:t,onClick:n,iconClass:r,iconStyle:l,captionStyle:a,className:s="night-and-day--switcher",captionClass:i="night-and-day--caption",style:c={display:"inline-block"}})=>o.jsxs("div",{className:s,onClick:n,style:c,children:[o.jsx(e,{style:l,className:r}),!!t&&o.jsx("div",{className:i,style:a,children:t})]}),BN=e=>{const{setDark:t}=$l();return o.jsx(g4,{Icon:$N,onClick:t,...e})},IN=e=>o.jsx(x4,{path:"M362,1.2C367,3 370,8 371,13L391,121L499,141C504,142 509,145 511,150C512,155 512,161 509,166L447,256L509,346C512,351 512,357 511,362C509,367 504,370 499,371L391,391L371,499C370,504 367,509 362,511C357,512 351,512 346,509L256,447L166,509C161,512 156,512 151,511C146,509 142,504 141,499L121,391L13,371C8,370 3,367 1,362C0,356 0,351 3,346L65,256L3,166C0,161 0,156 1,151C3,146 8,142 13,141L121,121L141,13C142,8 146,3 151,1C156,0 161,0 166,3L256,65L346,3C351,0 357,0 362,1ZM160,256C160,203 203,160 256,160C309,160 352,203 352,256C352,309 309,352 256,352C203,352 160,309 160,256ZM384,256C384,186 326,128 256,128C186,128 128,186 128,256C128,326 186,384 256,384C326,384 384,326 384,256Z",...e}),zN=e=>{const{setLight:t}=$l();return o.jsx(g4,{Icon:IN,onClick:t,...e})},FN=({sunrise:e={},nightfall:t={}})=>{const{isLight:n,setLight:r,setDark:l}=$l();return n?o.jsx(zN,{onClick:l,...e}):o.jsx(BN,{onClick:r,...t})},v4=_.createContext(),$l=()=>_.useContext(v4),ua="dark",fi="light",UN="(prefers-color-scheme: dark)",hi=()=>!1,HN=()=>{let e={};return{clear:()=>e={},getItem:t=>e[t],setItem:(t,n)=>e[t]=n,removeItem:t=>delete e[t]}},WN=()=>({matches:hi,addEventListener:hi,removeEventListener:hi}),y4=typeof window<"u",mi=y4&&window.localStorage?window.localStorage:HN(),VN=y4&&window.matchMedia?e=>window.matchMedia(e):WN,wc=VN(UN),ZN=()=>wc.matches,GN=e=>e.split(" "),hp=(e,t="")=>`${e} ${t}`,KN=({storageKey:e,defaultVariant:t,children:n})=>{const r=e?mi.getItem(e):null,[l,a=""]=r?GN(r):[ZN(),null],[s,i]=_.useState(l===ua),[c,u]=_.useState(a||t),d=y=>{i(y),e&&mi.setItem(e,hp(y?ua:fi,c))},x=y=>{u(y),e&&mi.setItem(e,hp(s?ua:fi,y))},m=y=>d(y.matches);_.useEffect(()=>(wc.addEventListener("change",m),()=>wc.removeEventListener("change",m)),[]);const j={isDark:s,isLight:!s,setDark:()=>d(!0),setLight:()=>d(!1),setIsDark:i,toggleTheme:()=>d(!s),theme:s?ua:fi,variant:c,setVariant:x};return o.jsx(v4.Provider,{value:j,children:n})},C4="0.0.5",YN="2023-12-30",mp="sidebar",QN="no-sidebar",XN=()=>{const{variant:e,setVariant:t}=$l();return o.jsx("header",{children:o.jsxs("nav",{children:[o.jsxs("div",{children:[o.jsx(Y,{name:"bars",className:"toggle-sidebar action",onClick:()=>t(e===mp?QN:mp)}),o.jsx(m4,{to:"/",className:"home mar-l-2",text:"Badger React UI"}),o.jsxs("span",{className:"small mar-l-2",children:["v",C4]})]}),o.jsxs("div",{className:"flex middle",children:[o.jsx("a",{href:"https://github.com/abw/badger-react-ui",children:o.jsx(Y,{name:"github",className:"mar-r-4"})}),o.jsx(FN,{})]})]})})},qN=()=>o.jsx("footer",{children:o.jsxs("div",{className:"flex space middle",children:[o.jsx("div",{className:"large",children:"Badger React UI"}),o.jsxs("div",{className:"text-center small",children:["by ",o.jsx("a",{href:"https://github.com/abw",children:"Andy Wardley"})]}),o.jsxs("div",{className:"text-right",children:["v",C4,o.jsx("br",{}),YN]})]})}),JN=({toc:e,contentRef:t})=>o.jsx("ul",{className:"toc",children:Object.entries(e).map(([n,r])=>o.jsx("li",{onClick:()=>{var l,a;(a=t.current)==null||a.scrollTo({top:((l=r.ref.current)==null?void 0:l.offsetTop)-20})},className:r.heading?"heading":"",children:r.heading?o.jsx("h4",{children:r.heading}):r.text.match(/^code:/)?o.jsx("code",{children:r.text.replace(/^code:/,"")}):r.text},n))}),eO=Ml.Consumer(JN),tO=({title:e,path:t,items:n,tocs:r})=>{const l=Al(),a=t&&l.pathname.slice(0,t.length)===t;return o.jsxs("details",{className:"menu",open:a,children:[o.jsx("summary",{children:e}),o.jsx("ul",{children:n.map(s=>{const i=l.pathname===s.to;return o.jsxs("li",{children:[o.jsx(m4,{className:"item",...s}),!!s.tocName&&i&&r[s.tocName]&&o.jsx(eO,{toc:r[s.tocName]})]},s.to)})})]})},xp=Ml.Consumer(tO),nO={title:"Getting Started",path:"/getting-started",items:[{to:"/getting-started/installation",text:"Installation"}]},rO={title:"Components",path:"/components",items:[{to:"/components/alert",text:"Alert",tocName:"alert"},{to:"/components/button",text:"Button",tocName:"button"},{to:"/components/buttons",text:"Buttons",tocName:"buttons"},{to:"/components/checkbox",text:"Checkbox",tocName:"checkbox"},{to:"/components/confirm",text:"Confirm",tocName:"confirm"},{to:"/components/datatable",text:"Datatable",tocName:"datatable"},{to:"/components/details",text:"Details",tocName:"details"},{to:"/components/dropdown",text:"Dropdown",tocName:"dropdown"},{to:"/components/icon",text:"Icon",tocName:"icon"},{to:"/components/modal",text:"Modal",tocName:"modal"},{to:"/components/overlay",text:"Overlay",tocName:"overlay"},{to:"/components/pager",text:"Pager",tocName:"pager"},{to:"/components/search",text:"Search",tocName:"search"},{to:"/components/select",text:"Select",tocName:"select"}]},oO=()=>o.jsxs(o.Fragment,{children:[o.jsx(xp,{...nO}),o.jsx(xp,{...rO})]});function lO(){const{pathname:e}=po();return _.useEffect(()=>aO(document.getElementById("content")),[e]),null}function aO(e,{top:t=0,left:n=0,behavior:r="smooth"}={}){e==null||e.scrollTo({top:t,left:n,behavior:r})}const sO=({contentRef:e})=>{const{theme:t,variant:n}=$l();return o.jsxs("div",{id:"site",className:n,"data-theme":t,children:[o.jsx(XN,{}),o.jsxs("div",{id:"app",children:[o.jsx(lO,{}),o.jsx("aside",{children:o.jsx(oO,{})}),o.jsx("main",{id:"content",ref:e,children:o.jsx(hN,{})})]}),o.jsx(qN,{})]})},iO=Ml.Consumer(sO),cO=/\/_layout$/,uO=/\/_examples\//,dO=pO(Object.assign({"../pages/components/alert/_examples/Alert/index.jsx":WC,"../pages/components/alert/_examples/Error/index.jsx":QC,"../pages/components/alert/_examples/Info/index.jsx":JC,"../pages/components/alert/_examples/Success/index.jsx":nj,"../pages/components/alert/_examples/Warning/index.jsx":lj,"../pages/components/alert/_examples/border/index.jsx":ij,"../pages/components/alert/_examples/className/index.jsx":dj,"../pages/components/alert/_examples/color/index.jsx":hj,"../pages/components/alert/_examples/dismissable/index.jsx":gj,"../pages/components/alert/_examples/headIcon/index.jsx":Cj,"../pages/components/alert/_examples/headline/index.jsx":bj,"../pages/components/alert/_examples/icon/index.jsx":kj,"../pages/components/alert/_examples/onDismiss/index.jsx":Ej,"../pages/components/alert/_examples/radius/index.jsx":Rj,"../pages/components/alert/_examples/revealable/index.jsx":Pj,"../pages/components/alert/_examples/revealed/index.jsx":Bj,"../pages/components/alert/_examples/shadow/index.jsx":Fj,"../pages/components/alert/_examples/size/index.jsx":Wj,"../pages/components/alert/_examples/stripe/index.jsx":Gj,"../pages/components/alert/_examples/text/index.jsx":Qj,"../pages/components/alert/_examples/title/index.jsx":Jj,"../pages/components/alert/_examples/type/index.jsx":nS,"../pages/components/alert/index.jsx":lS,"../pages/components/button/_examples/Button/index.jsx":iS,"../pages/components/button/_examples/Content/index.jsx":dS,"../pages/components/button/_examples/bare/index.jsx":hS,"../pages/components/button/_examples/border/index.jsx":gS,"../pages/components/button/_examples/bright/index.jsx":CS,"../pages/components/button/_examples/className/index.jsx":bS,"../pages/components/button/_examples/color/index.jsx":kS,"../pages/components/button/_examples/dark/index.jsx":ES,"../pages/components/button/_examples/disabled/index.jsx":RS,"../pages/components/button/_examples/icon/index.jsx":PS,"../pages/components/button/_examples/iconLeft/index.jsx":BS,"../pages/components/button/_examples/iconRight/index.jsx":FS,"../pages/components/button/_examples/label/index.jsx":WS,"../pages/components/button/_examples/onClick/index.jsx":GS,"../pages/components/button/_examples/outline/index.jsx":QS,"../pages/components/button/_examples/radius/index.jsx":JS,"../pages/components/button/_examples/shaded/index.jsx":nb,"../pages/components/button/_examples/shadow/index.jsx":lb,"../pages/components/button/_examples/size/index.jsx":ib,"../pages/components/button/_examples/text/index.jsx":db,"../pages/components/button/_examples/tooltip/index.jsx":hb,"../pages/components/button/_examples/type/index.jsx":gb,"../pages/components/button/index.jsx":yb,"../pages/components/buttons/_examples/Button/index.jsx":bb,"../pages/components/buttons/_examples/Buttons/index.jsx":kb,"../pages/components/buttons/_examples/buttonClass/index.jsx":Eb,"../pages/components/buttons/_examples/buttonsProp/index.jsx":Rb,"../pages/components/buttons/_examples/className/index.jsx":Pb,"../pages/components/buttons/_examples/outline/index.jsx":Bb,"../pages/components/buttons/index.jsx":zb,"../pages/components/checkbox/_examples/CheckboxState/index.jsx":Hb,"../pages/components/checkbox/_examples/Overview/index.jsx":Zb,"../pages/components/checkbox/_examples/checked/index.jsx":Yb,"../pages/components/checkbox/_examples/checkedText/index.jsx":qb,"../pages/components/checkbox/_examples/className/index.jsx":tw,"../pages/components/checkbox/_examples/onChange/index.jsx":ow,"../pages/components/checkbox/_examples/text/index.jsx":sw,"../pages/components/checkbox/index.jsx":cw,"../pages/components/confirm/_examples/Overview/index.jsx":pw,"../pages/components/confirm/_examples/cancel/index.jsx":mw,"../pages/components/confirm/_examples/cancelProps/index.jsx":vw,"../pages/components/confirm/_examples/className/index.jsx":jw,"../pages/components/confirm/_examples/color/index.jsx":ww,"../pages/components/confirm/_examples/confirm/index.jsx":Tw,"../pages/components/confirm/_examples/confirmProps/index.jsx":Nw,"../pages/components/confirm/_examples/iconRight/index.jsx":Mw,"../pages/components/confirm/_examples/onClick/index.jsx":Aw,"../pages/components/confirm/_examples/text/index.jsx":Iw,"../pages/components/confirm/index.jsx":Fw,"../pages/components/datatable/_examples/Datatable/index.jsx":Vw,"../pages/components/datatable/index.jsx":Gw,"../pages/components/details/_examples/Details/index.jsx":Qw,"../pages/components/details/_examples/border/index.jsx":Jw,"../pages/components/details/_examples/color/index.jsx":n_,"../pages/components/details/_examples/content/index.jsx":l_,"../pages/components/details/_examples/lined/index.jsx":i_,"../pages/components/details/_examples/open/index.jsx":d_,"../pages/components/details/_examples/radius/index.jsx":h_,"../pages/components/details/_examples/shaded/index.jsx":g_,"../pages/components/details/_examples/shadow/index.jsx":C_,"../pages/components/details/_examples/summary/index.jsx":b_,"../pages/components/details/index.jsx":__,"../pages/components/dropdown/_examples/Dropdown/index.jsx":L_,"../pages/components/dropdown/_examples/iconLeft/index.jsx":O_,"../pages/components/dropdown/_examples/iconLeftRotate/index.jsx":D_,"../pages/components/dropdown/_examples/iconRight/index.jsx":$_,"../pages/components/dropdown/_examples/iconRightRotate/index.jsx":z_,"../pages/components/dropdown/_examples/onSelect/index.jsx":H_,"../pages/components/dropdown/_examples/openOnHover/index.jsx":Z_,"../pages/components/dropdown/_examples/options/index.jsx":rk,"../pages/components/dropdown/_examples/right/index.jsx":ak,"../pages/components/dropdown/_examples/text/index.jsx":ck,"../pages/components/dropdown/_examples/wide/index.jsx":pk,"../pages/components/dropdown/index.jsx":hk,"../pages/components/icon/_examples/Icon/index.jsx":Sk,"../pages/components/icon/_examples/IconLibrary/index.jsx":bk,"../pages/components/icon/_examples/className/index.jsx":kk,"../pages/components/icon/_examples/color/index.jsx":Ek,"../pages/components/icon/_examples/name/index.jsx":Rk,"../pages/components/icon/_examples/path/index.jsx":Pk,"../pages/components/icon/_examples/size/index.jsx":Bk,"../pages/components/icon/index.jsx":zk,"../pages/components/modal/_examples/Modal/index.jsx":Hk,"../pages/components/modal/_examples/ModalState/index.jsx":Zk,"../pages/components/modal/_examples/className/index.jsx":Yk,"../pages/components/modal/_examples/close/index.jsx":qk,"../pages/components/modal/_examples/closeIcon/index.jsx":tT,"../pages/components/modal/_examples/footer/index.jsx":oT,"../pages/components/modal/_examples/header/index.jsx":sT,"../pages/components/modal/_examples/text/index.jsx":uT,"../pages/components/modal/_examples/title/index.jsx":fT,"../pages/components/modal/index.jsx":mT,"../pages/components/overlay/_examples/Overlay/index.jsx":vT,"../pages/components/overlay/_examples/OverlayState/index.jsx":jT,"../pages/components/overlay/_examples/className/index.jsx":_T,"../pages/components/overlay/_examples/custom/index.jsx":LT,"../pages/components/overlay/_examples/fixed/index.jsx":OT,"../pages/components/overlay/_examples/theme/index.jsx":AT,"../pages/components/overlay/index.jsx":BT,"../pages/components/pager/_examples/Context/index.jsx":WT,"../pages/components/pager/_examples/Pager/index.jsx":GT,"../pages/components/pager/_examples/className/index.jsx":QT,"../pages/components/pager/_examples/color/index.jsx":JT,"../pages/components/pager/_examples/icons/index.jsx":nL,"../pages/components/pager/_examples/nextIcon/index.jsx":aL,"../pages/components/pager/_examples/showFirstLast/index.jsx":cL,"../pages/components/pager/_examples/size/index.jsx":pL,"../pages/components/pager/index.jsx":hL,"../pages/components/search/_examples/Search/index.jsx":vL,"../pages/components/search/_examples/displayResult/index.jsx":SL,"../pages/components/search/_examples/displayValue/index.jsx":kL,"../pages/components/search/_examples/onSearch/index.jsx":NL,"../pages/components/search/index.jsx":RL,"../pages/components/select/_examples/Select/index.jsx":AL,"../pages/components/select/_examples/displayOption/index.jsx":zL,"../pages/components/select/_examples/displayValue/index.jsx":WL,"../pages/components/select/_examples/options/index.jsx":KL,"../pages/components/select/index.jsx":QL,"../pages/getting-started/installation.jsx":rE,"../pages/index.jsx":sE}));function pO(e){const n=Object.entries(e).map(fO).filter(l=>!l.path.match(uO)).reduce((l,a)=>(l[a.path]=a,l),{}),r=Object.keys(n).filter(l=>l.match(cO)).sort((l,a)=>a.length-l.length);for(let l of r){const a=n[l];delete n[l];const s=l.replace(/_layout$/,""),i=s.length;a.path=s,a.children=[];const c=n[s];c&&(delete c.path,c.index=!0,a.children.push(c),delete n[s]);const u=Object.keys(n).filter(d=>d.slice(0,i)===s);for(let d of u){const x=n[d];delete n[d],d=d.slice(i),x.path=d.length?d:"/",a.children.push(x)}n[s]=a}return Object.values(n)}function fO([e,t]){const n=e.replace(/^[./]*pages/,"").replace(/\.jsx$/,"").replace(/index$/,"").replace(/\[(\w+)\]/,":$1"),r=t.default;return{path:n,Component:r}}const hO=jN([{path:"/",element:o.jsx(iO,{}),children:dO}],{basename:"/badger-react-ui"});xi.createRoot(document.getElementById("root")).render(o.jsx(Ge.StrictMode,{children:o.jsx(KN,{storageKey:"theme",children:o.jsx(Ml.Provider,{children:o.jsx(LN,{router:hO})})})}));
