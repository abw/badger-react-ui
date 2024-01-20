var yx=Object.defineProperty;var Cx=(e,t,n)=>t in e?yx(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var xe=(e,t,n)=>(Cx(e,typeof t!="symbol"?t+"":t,n),n);function wh(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in e)){const s=Object.getOwnPropertyDescriptor(r,a);s&&Object.defineProperty(e,a,s.get?s:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}})();var Al=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Bn(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var _h={exports:{}},xi={},kh={exports:{}},de={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fs=Symbol.for("react.element"),jx=Symbol.for("react.portal"),bx=Symbol.for("react.fragment"),Sx=Symbol.for("react.strict_mode"),wx=Symbol.for("react.profiler"),_x=Symbol.for("react.provider"),kx=Symbol.for("react.context"),Tx=Symbol.for("react.forward_ref"),Ex=Symbol.for("react.suspense"),Lx=Symbol.for("react.memo"),Nx=Symbol.for("react.lazy"),Gp=Symbol.iterator;function Rx(e){return e===null||typeof e!="object"?null:(e=Gp&&e[Gp]||e["@@iterator"],typeof e=="function"?e:null)}var Th={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Eh=Object.assign,Lh={};function zo(e,t,n){this.props=e,this.context=t,this.refs=Lh,this.updater=n||Th}zo.prototype.isReactComponent={};zo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};zo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Nh(){}Nh.prototype=zo.prototype;function od(e,t,n){this.props=e,this.context=t,this.refs=Lh,this.updater=n||Th}var ad=od.prototype=new Nh;ad.constructor=od;Eh(ad,zo.prototype);ad.isPureReactComponent=!0;var Yp=Array.isArray,Rh=Object.prototype.hasOwnProperty,sd={current:null},Dh={key:!0,ref:!0,__self:!0,__source:!0};function Oh(e,t,n){var r,a={},s=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(s=""+t.key),t)Rh.call(t,r)&&!Dh.hasOwnProperty(r)&&(a[r]=t[r]);var i=arguments.length-2;if(i===1)a.children=n;else if(1<i){for(var c=Array(i),u=0;u<i;u++)c[u]=arguments[u+2];a.children=c}if(e&&e.defaultProps)for(r in i=e.defaultProps,i)a[r]===void 0&&(a[r]=i[r]);return{$$typeof:fs,type:e,key:s,ref:l,props:a,_owner:sd.current}}function Dx(e,t){return{$$typeof:fs,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ld(e){return typeof e=="object"&&e!==null&&e.$$typeof===fs}function Ox(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Xp=/\/+/g;function rc(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ox(""+e.key):t.toString(36)}function Cl(e,t,n,r,a){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case fs:case jx:l=!0}}if(l)return l=e,a=a(l),e=r===""?"."+rc(l,0):r,Yp(a)?(n="",e!=null&&(n=e.replace(Xp,"$&/")+"/"),Cl(a,t,n,"",function(u){return u})):a!=null&&(ld(a)&&(a=Dx(a,n+(!a.key||l&&l.key===a.key?"":(""+a.key).replace(Xp,"$&/")+"/")+e)),t.push(a)),1;if(l=0,r=r===""?".":r+":",Yp(e))for(var i=0;i<e.length;i++){s=e[i];var c=r+rc(s,i);l+=Cl(s,t,n,c,a)}else if(c=Rx(e),typeof c=="function")for(e=c.call(e),i=0;!(s=e.next()).done;)s=s.value,c=r+rc(s,i++),l+=Cl(s,t,n,c,a);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Zs(e,t,n){if(e==null)return e;var r=[],a=0;return Cl(e,r,"","",function(s){return t.call(n,s,a++)}),r}function Mx(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var xt={current:null},jl={transition:null},Ax={ReactCurrentDispatcher:xt,ReactCurrentBatchConfig:jl,ReactCurrentOwner:sd};de.Children={map:Zs,forEach:function(e,t,n){Zs(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Zs(e,function(){t++}),t},toArray:function(e){return Zs(e,function(t){return t})||[]},only:function(e){if(!ld(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};de.Component=zo;de.Fragment=bx;de.Profiler=wx;de.PureComponent=od;de.StrictMode=Sx;de.Suspense=Ex;de.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ax;de.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Eh({},e.props),a=e.key,s=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,l=sd.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(c in t)Rh.call(t,c)&&!Dh.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&i!==void 0?i[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){i=Array(c);for(var u=0;u<c;u++)i[u]=arguments[u+2];r.children=i}return{$$typeof:fs,type:e.type,key:a,ref:s,props:r,_owner:l}};de.createContext=function(e){return e={$$typeof:kx,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:_x,_context:e},e.Consumer=e};de.createElement=Oh;de.createFactory=function(e){var t=Oh.bind(null,e);return t.type=e,t};de.createRef=function(){return{current:null}};de.forwardRef=function(e){return{$$typeof:Tx,render:e}};de.isValidElement=ld;de.lazy=function(e){return{$$typeof:Nx,_payload:{_status:-1,_result:e},_init:Mx}};de.memo=function(e,t){return{$$typeof:Lx,type:e,compare:t===void 0?null:t}};de.startTransition=function(e){var t=jl.transition;jl.transition={};try{e()}finally{jl.transition=t}};de.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};de.useCallback=function(e,t){return xt.current.useCallback(e,t)};de.useContext=function(e){return xt.current.useContext(e)};de.useDebugValue=function(){};de.useDeferredValue=function(e){return xt.current.useDeferredValue(e)};de.useEffect=function(e,t){return xt.current.useEffect(e,t)};de.useId=function(){return xt.current.useId()};de.useImperativeHandle=function(e,t,n){return xt.current.useImperativeHandle(e,t,n)};de.useInsertionEffect=function(e,t){return xt.current.useInsertionEffect(e,t)};de.useLayoutEffect=function(e,t){return xt.current.useLayoutEffect(e,t)};de.useMemo=function(e,t){return xt.current.useMemo(e,t)};de.useReducer=function(e,t,n){return xt.current.useReducer(e,t,n)};de.useRef=function(e){return xt.current.useRef(e)};de.useState=function(e){return xt.current.useState(e)};de.useSyncExternalStore=function(e,t,n){return xt.current.useSyncExternalStore(e,t,n)};de.useTransition=function(){return xt.current.useTransition()};de.version="18.2.0";kh.exports=de;var v=kh.exports;const ee=Bn(v),Px=wh({__proto__:null,default:ee},[v]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $x=v,Bx=Symbol.for("react.element"),Ix=Symbol.for("react.fragment"),zx=Object.prototype.hasOwnProperty,Fx=$x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ux={key:!0,ref:!0,__self:!0,__source:!0};function Mh(e,t,n){var r,a={},s=null,l=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)zx.call(t,r)&&!Ux.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)a[r]===void 0&&(a[r]=t[r]);return{$$typeof:Bx,type:e,key:s,ref:l,props:a,_owner:Fx.current}}xi.Fragment=Ix;xi.jsx=Mh;xi.jsxs=Mh;_h.exports=xi;var o=_h.exports,Zc={},Ah={exports:{}},Mt={},Ph={exports:{}},$h={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(O,B){var I=O.length;O.push(B);e:for(;0<I;){var U=I-1>>>1,V=O[U];if(0<a(V,B))O[U]=B,O[I]=V,I=U;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var B=O[0],I=O.pop();if(I!==B){O[0]=I;e:for(var U=0,V=O.length,je=V>>>1;U<je;){var se=2*(U+1)-1,ve=O[se],ae=se+1,Ee=O[ae];if(0>a(ve,I))ae<V&&0>a(Ee,ve)?(O[U]=Ee,O[ae]=I,U=ae):(O[U]=ve,O[se]=I,U=se);else if(ae<V&&0>a(Ee,I))O[U]=Ee,O[ae]=I,U=ae;else break e}}return B}function a(O,B){var I=O.sortIndex-B.sortIndex;return I!==0?I:O.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var l=Date,i=l.now();e.unstable_now=function(){return l.now()-i}}var c=[],u=[],d=1,p=null,m=3,y=!1,b=!1,j=!1,_=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(O){for(var B=n(u);B!==null;){if(B.callback===null)r(u);else if(B.startTime<=O)r(u),B.sortIndex=B.expirationTime,t(c,B);else break;B=n(u)}}function C(O){if(j=!1,h(O),!b)if(n(c)!==null)b=!0,oe(S);else{var B=n(u);B!==null&&H(C,B.startTime-O)}}function S(O,B){b=!1,j&&(j=!1,x(T),T=-1),y=!0;var I=m;try{for(h(B),p=n(c);p!==null&&(!(p.expirationTime>B)||O&&!P());){var U=p.callback;if(typeof U=="function"){p.callback=null,m=p.priorityLevel;var V=U(p.expirationTime<=B);B=e.unstable_now(),typeof V=="function"?p.callback=V:p===n(c)&&r(c),h(B)}else r(c);p=n(c)}if(p!==null)var je=!0;else{var se=n(u);se!==null&&H(C,se.startTime-B),je=!1}return je}finally{p=null,m=I,y=!1}}var g=!1,w=null,T=-1,E=5,D=-1;function P(){return!(e.unstable_now()-D<E)}function G(){if(w!==null){var O=e.unstable_now();D=O;var B=!0;try{B=w(!0,O)}finally{B?Q():(g=!1,w=null)}}else g=!1}var Q;if(typeof f=="function")Q=function(){f(G)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,ne=Y.port2;Y.port1.onmessage=G,Q=function(){ne.postMessage(null)}}else Q=function(){_(G,0)};function oe(O){w=O,g||(g=!0,Q())}function H(O,B){T=_(function(){O(e.unstable_now())},B)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(O){O.callback=null},e.unstable_continueExecution=function(){b||y||(b=!0,oe(S))},e.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<O?Math.floor(1e3/O):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(O){switch(m){case 1:case 2:case 3:var B=3;break;default:B=m}var I=m;m=B;try{return O()}finally{m=I}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(O,B){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var I=m;m=O;try{return B()}finally{m=I}},e.unstable_scheduleCallback=function(O,B,I){var U=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?U+I:U):I=U,O){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=I+V,O={id:d++,callback:B,priorityLevel:O,startTime:I,expirationTime:V,sortIndex:-1},I>U?(O.sortIndex=I,t(u,O),n(c)===null&&O===n(u)&&(j?(x(T),T=-1):j=!0,H(C,I-U))):(O.sortIndex=V,t(c,O),b||y||(b=!0,oe(S))),O},e.unstable_shouldYield=P,e.unstable_wrapCallback=function(O){var B=m;return function(){var I=m;m=B;try{return O.apply(this,arguments)}finally{m=I}}}})($h);Ph.exports=$h;var Hx=Ph.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bh=v,Ot=Hx;function A(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ih=new Set,Ha={};function Yr(e,t){Do(e,t),Do(e+"Capture",t)}function Do(e,t){for(Ha[e]=t,e=0;e<t.length;e++)Ih.add(t[e])}var Dn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Kc=Object.prototype.hasOwnProperty,Vx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Qp={},qp={};function Wx(e){return Kc.call(qp,e)?!0:Kc.call(Qp,e)?!1:Vx.test(e)?qp[e]=!0:(Qp[e]=!0,!1)}function Zx(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Kx(e,t,n,r){if(t===null||typeof t>"u"||Zx(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function vt(e,t,n,r,a,s,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=l}var at={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){at[e]=new vt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];at[t]=new vt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){at[e]=new vt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){at[e]=new vt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){at[e]=new vt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){at[e]=new vt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){at[e]=new vt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){at[e]=new vt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){at[e]=new vt(e,5,!1,e.toLowerCase(),null,!1,!1)});var id=/[\-:]([a-z])/g;function cd(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(id,cd);at[t]=new vt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(id,cd);at[t]=new vt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(id,cd);at[t]=new vt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){at[e]=new vt(e,1,!1,e.toLowerCase(),null,!1,!1)});at.xlinkHref=new vt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){at[e]=new vt(e,1,!1,e.toLowerCase(),null,!0,!0)});function ud(e,t,n,r){var a=at.hasOwnProperty(t)?at[t]:null;(a!==null?a.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Kx(t,n,a,r)&&(n=null),r||a===null?Wx(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,r=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var In=Bh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ks=Symbol.for("react.element"),co=Symbol.for("react.portal"),uo=Symbol.for("react.fragment"),dd=Symbol.for("react.strict_mode"),Gc=Symbol.for("react.profiler"),zh=Symbol.for("react.provider"),Fh=Symbol.for("react.context"),pd=Symbol.for("react.forward_ref"),Yc=Symbol.for("react.suspense"),Xc=Symbol.for("react.suspense_list"),fd=Symbol.for("react.memo"),Xn=Symbol.for("react.lazy"),Uh=Symbol.for("react.offscreen"),Jp=Symbol.iterator;function ta(e){return e===null||typeof e!="object"?null:(e=Jp&&e[Jp]||e["@@iterator"],typeof e=="function"?e:null)}var $e=Object.assign,oc;function xa(e){if(oc===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);oc=t&&t[1]||""}return`
`+oc+e}var ac=!1;function sc(e,t){if(!e||ac)return"";ac=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var a=u.stack.split(`
`),s=r.stack.split(`
`),l=a.length-1,i=s.length-1;1<=l&&0<=i&&a[l]!==s[i];)i--;for(;1<=l&&0<=i;l--,i--)if(a[l]!==s[i]){if(l!==1||i!==1)do if(l--,i--,0>i||a[l]!==s[i]){var c=`
`+a[l].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=l&&0<=i);break}}}finally{ac=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?xa(e):""}function Gx(e){switch(e.tag){case 5:return xa(e.type);case 16:return xa("Lazy");case 13:return xa("Suspense");case 19:return xa("SuspenseList");case 0:case 2:case 15:return e=sc(e.type,!1),e;case 11:return e=sc(e.type.render,!1),e;case 1:return e=sc(e.type,!0),e;default:return""}}function Qc(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case uo:return"Fragment";case co:return"Portal";case Gc:return"Profiler";case dd:return"StrictMode";case Yc:return"Suspense";case Xc:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Fh:return(e.displayName||"Context")+".Consumer";case zh:return(e._context.displayName||"Context")+".Provider";case pd:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case fd:return t=e.displayName||null,t!==null?t:Qc(e.type)||"Memo";case Xn:t=e._payload,e=e._init;try{return Qc(e(t))}catch{}}return null}function Yx(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qc(t);case 8:return t===dd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function pr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Hh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Xx(e){var t=Hh(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(l){r=""+l,s.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Gs(e){e._valueTracker||(e._valueTracker=Xx(e))}function Vh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Hh(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Pl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function qc(e,t){var n=t.checked;return $e({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ef(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=pr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Wh(e,t){t=t.checked,t!=null&&ud(e,"checked",t,!1)}function Jc(e,t){Wh(e,t);var n=pr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?eu(e,t.type,n):t.hasOwnProperty("defaultValue")&&eu(e,t.type,pr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function tf(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function eu(e,t,n){(t!=="number"||Pl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var va=Array.isArray;function _o(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+pr(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function tu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(A(91));return $e({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function nf(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(A(92));if(va(n)){if(1<n.length)throw Error(A(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:pr(n)}}function Zh(e,t){var n=pr(t.value),r=pr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function rf(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Kh(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function nu(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Kh(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ys,Gh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ys=Ys||document.createElement("div"),Ys.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ys.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Va(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ea={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Qx=["Webkit","ms","Moz","O"];Object.keys(Ea).forEach(function(e){Qx.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ea[t]=Ea[e]})});function Yh(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ea.hasOwnProperty(e)&&Ea[e]?(""+t).trim():t+"px"}function Xh(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,a=Yh(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}var qx=$e({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ru(e,t){if(t){if(qx[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(A(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(A(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(A(61))}if(t.style!=null&&typeof t.style!="object")throw Error(A(62))}}function ou(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var au=null;function hd(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var su=null,ko=null,To=null;function of(e){if(e=gs(e)){if(typeof su!="function")throw Error(A(280));var t=e.stateNode;t&&(t=bi(t),su(e.stateNode,e.type,t))}}function Qh(e){ko?To?To.push(e):To=[e]:ko=e}function qh(){if(ko){var e=ko,t=To;if(To=ko=null,of(e),t)for(e=0;e<t.length;e++)of(t[e])}}function Jh(e,t){return e(t)}function e2(){}var lc=!1;function t2(e,t,n){if(lc)return e(t,n);lc=!0;try{return Jh(e,t,n)}finally{lc=!1,(ko!==null||To!==null)&&(e2(),qh())}}function Wa(e,t){var n=e.stateNode;if(n===null)return null;var r=bi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(A(231,t,typeof n));return n}var lu=!1;if(Dn)try{var na={};Object.defineProperty(na,"passive",{get:function(){lu=!0}}),window.addEventListener("test",na,na),window.removeEventListener("test",na,na)}catch{lu=!1}function Jx(e,t,n,r,a,s,l,i,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var La=!1,$l=null,Bl=!1,iu=null,e5={onError:function(e){La=!0,$l=e}};function t5(e,t,n,r,a,s,l,i,c){La=!1,$l=null,Jx.apply(e5,arguments)}function n5(e,t,n,r,a,s,l,i,c){if(t5.apply(this,arguments),La){if(La){var u=$l;La=!1,$l=null}else throw Error(A(198));Bl||(Bl=!0,iu=u)}}function Xr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function n2(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function af(e){if(Xr(e)!==e)throw Error(A(188))}function r5(e){var t=e.alternate;if(!t){if(t=Xr(e),t===null)throw Error(A(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return af(a),e;if(s===r)return af(a),t;s=s.sibling}throw Error(A(188))}if(n.return!==r.return)n=a,r=s;else{for(var l=!1,i=a.child;i;){if(i===n){l=!0,n=a,r=s;break}if(i===r){l=!0,r=a,n=s;break}i=i.sibling}if(!l){for(i=s.child;i;){if(i===n){l=!0,n=s,r=a;break}if(i===r){l=!0,r=s,n=a;break}i=i.sibling}if(!l)throw Error(A(189))}}if(n.alternate!==r)throw Error(A(190))}if(n.tag!==3)throw Error(A(188));return n.stateNode.current===n?e:t}function r2(e){return e=r5(e),e!==null?o2(e):null}function o2(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=o2(e);if(t!==null)return t;e=e.sibling}return null}var a2=Ot.unstable_scheduleCallback,sf=Ot.unstable_cancelCallback,o5=Ot.unstable_shouldYield,a5=Ot.unstable_requestPaint,He=Ot.unstable_now,s5=Ot.unstable_getCurrentPriorityLevel,md=Ot.unstable_ImmediatePriority,s2=Ot.unstable_UserBlockingPriority,Il=Ot.unstable_NormalPriority,l5=Ot.unstable_LowPriority,l2=Ot.unstable_IdlePriority,vi=null,Cn=null;function i5(e){if(Cn&&typeof Cn.onCommitFiberRoot=="function")try{Cn.onCommitFiberRoot(vi,e,void 0,(e.current.flags&128)===128)}catch{}}var rn=Math.clz32?Math.clz32:d5,c5=Math.log,u5=Math.LN2;function d5(e){return e>>>=0,e===0?32:31-(c5(e)/u5|0)|0}var Xs=64,Qs=4194304;function ya(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function zl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,a=e.suspendedLanes,s=e.pingedLanes,l=n&268435455;if(l!==0){var i=l&~a;i!==0?r=ya(i):(s&=l,s!==0&&(r=ya(s)))}else l=n&~a,l!==0?r=ya(l):s!==0&&(r=ya(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&a)&&(a=r&-r,s=t&-t,a>=s||a===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-rn(t),a=1<<n,r|=e[n],t&=~a;return r}function p5(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function f5(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,s=e.pendingLanes;0<s;){var l=31-rn(s),i=1<<l,c=a[l];c===-1?(!(i&n)||i&r)&&(a[l]=p5(i,t)):c<=t&&(e.expiredLanes|=i),s&=~i}}function cu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function i2(){var e=Xs;return Xs<<=1,!(Xs&4194240)&&(Xs=64),e}function ic(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function hs(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-rn(t),e[t]=n}function h5(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-rn(n),s=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~s}}function gd(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-rn(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var ye=0;function c2(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var u2,xd,d2,p2,f2,uu=!1,qs=[],or=null,ar=null,sr=null,Za=new Map,Ka=new Map,Jn=[],m5="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function lf(e,t){switch(e){case"focusin":case"focusout":or=null;break;case"dragenter":case"dragleave":ar=null;break;case"mouseover":case"mouseout":sr=null;break;case"pointerover":case"pointerout":Za.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ka.delete(t.pointerId)}}function ra(e,t,n,r,a,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[a]},t!==null&&(t=gs(t),t!==null&&xd(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function g5(e,t,n,r,a){switch(t){case"focusin":return or=ra(or,e,t,n,r,a),!0;case"dragenter":return ar=ra(ar,e,t,n,r,a),!0;case"mouseover":return sr=ra(sr,e,t,n,r,a),!0;case"pointerover":var s=a.pointerId;return Za.set(s,ra(Za.get(s)||null,e,t,n,r,a)),!0;case"gotpointercapture":return s=a.pointerId,Ka.set(s,ra(Ka.get(s)||null,e,t,n,r,a)),!0}return!1}function h2(e){var t=Mr(e.target);if(t!==null){var n=Xr(t);if(n!==null){if(t=n.tag,t===13){if(t=n2(n),t!==null){e.blockedOn=t,f2(e.priority,function(){d2(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function bl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=du(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);au=r,n.target.dispatchEvent(r),au=null}else return t=gs(n),t!==null&&xd(t),e.blockedOn=n,!1;t.shift()}return!0}function cf(e,t,n){bl(e)&&n.delete(t)}function x5(){uu=!1,or!==null&&bl(or)&&(or=null),ar!==null&&bl(ar)&&(ar=null),sr!==null&&bl(sr)&&(sr=null),Za.forEach(cf),Ka.forEach(cf)}function oa(e,t){e.blockedOn===t&&(e.blockedOn=null,uu||(uu=!0,Ot.unstable_scheduleCallback(Ot.unstable_NormalPriority,x5)))}function Ga(e){function t(a){return oa(a,e)}if(0<qs.length){oa(qs[0],e);for(var n=1;n<qs.length;n++){var r=qs[n];r.blockedOn===e&&(r.blockedOn=null)}}for(or!==null&&oa(or,e),ar!==null&&oa(ar,e),sr!==null&&oa(sr,e),Za.forEach(t),Ka.forEach(t),n=0;n<Jn.length;n++)r=Jn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Jn.length&&(n=Jn[0],n.blockedOn===null);)h2(n),n.blockedOn===null&&Jn.shift()}var Eo=In.ReactCurrentBatchConfig,Fl=!0;function v5(e,t,n,r){var a=ye,s=Eo.transition;Eo.transition=null;try{ye=1,vd(e,t,n,r)}finally{ye=a,Eo.transition=s}}function y5(e,t,n,r){var a=ye,s=Eo.transition;Eo.transition=null;try{ye=4,vd(e,t,n,r)}finally{ye=a,Eo.transition=s}}function vd(e,t,n,r){if(Fl){var a=du(e,t,n,r);if(a===null)vc(e,t,r,Ul,n),lf(e,r);else if(g5(a,e,t,n,r))r.stopPropagation();else if(lf(e,r),t&4&&-1<m5.indexOf(e)){for(;a!==null;){var s=gs(a);if(s!==null&&u2(s),s=du(e,t,n,r),s===null&&vc(e,t,r,Ul,n),s===a)break;a=s}a!==null&&r.stopPropagation()}else vc(e,t,r,null,n)}}var Ul=null;function du(e,t,n,r){if(Ul=null,e=hd(r),e=Mr(e),e!==null)if(t=Xr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=n2(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ul=e,null}function m2(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(s5()){case md:return 1;case s2:return 4;case Il:case l5:return 16;case l2:return 536870912;default:return 16}default:return 16}}var nr=null,yd=null,Sl=null;function g2(){if(Sl)return Sl;var e,t=yd,n=t.length,r,a="value"in nr?nr.value:nr.textContent,s=a.length;for(e=0;e<n&&t[e]===a[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===a[s-r];r++);return Sl=a.slice(e,1<r?1-r:void 0)}function wl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Js(){return!0}function uf(){return!1}function At(e){function t(n,r,a,s,l){this._reactName=n,this._targetInst=a,this.type=r,this.nativeEvent=s,this.target=l,this.currentTarget=null;for(var i in e)e.hasOwnProperty(i)&&(n=e[i],this[i]=n?n(s):s[i]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Js:uf,this.isPropagationStopped=uf,this}return $e(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Js)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Js)},persist:function(){},isPersistent:Js}),t}var Fo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cd=At(Fo),ms=$e({},Fo,{view:0,detail:0}),C5=At(ms),cc,uc,aa,yi=$e({},ms,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jd,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==aa&&(aa&&e.type==="mousemove"?(cc=e.screenX-aa.screenX,uc=e.screenY-aa.screenY):uc=cc=0,aa=e),cc)},movementY:function(e){return"movementY"in e?e.movementY:uc}}),df=At(yi),j5=$e({},yi,{dataTransfer:0}),b5=At(j5),S5=$e({},ms,{relatedTarget:0}),dc=At(S5),w5=$e({},Fo,{animationName:0,elapsedTime:0,pseudoElement:0}),_5=At(w5),k5=$e({},Fo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),T5=At(k5),E5=$e({},Fo,{data:0}),pf=At(E5),L5={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},N5={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},R5={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function D5(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=R5[e])?!!t[e]:!1}function jd(){return D5}var O5=$e({},ms,{key:function(e){if(e.key){var t=L5[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=wl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?N5[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jd,charCode:function(e){return e.type==="keypress"?wl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?wl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),M5=At(O5),A5=$e({},yi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ff=At(A5),P5=$e({},ms,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jd}),$5=At(P5),B5=$e({},Fo,{propertyName:0,elapsedTime:0,pseudoElement:0}),I5=At(B5),z5=$e({},yi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),F5=At(z5),U5=[9,13,27,32],bd=Dn&&"CompositionEvent"in window,Na=null;Dn&&"documentMode"in document&&(Na=document.documentMode);var H5=Dn&&"TextEvent"in window&&!Na,x2=Dn&&(!bd||Na&&8<Na&&11>=Na),hf=String.fromCharCode(32),mf=!1;function v2(e,t){switch(e){case"keyup":return U5.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function y2(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var po=!1;function V5(e,t){switch(e){case"compositionend":return y2(t);case"keypress":return t.which!==32?null:(mf=!0,hf);case"textInput":return e=t.data,e===hf&&mf?null:e;default:return null}}function W5(e,t){if(po)return e==="compositionend"||!bd&&v2(e,t)?(e=g2(),Sl=yd=nr=null,po=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return x2&&t.locale!=="ko"?null:t.data;default:return null}}var Z5={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Z5[e.type]:t==="textarea"}function C2(e,t,n,r){Qh(r),t=Hl(t,"onChange"),0<t.length&&(n=new Cd("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ra=null,Ya=null;function K5(e){R2(e,0)}function Ci(e){var t=mo(e);if(Vh(t))return e}function G5(e,t){if(e==="change")return t}var j2=!1;if(Dn){var pc;if(Dn){var fc="oninput"in document;if(!fc){var xf=document.createElement("div");xf.setAttribute("oninput","return;"),fc=typeof xf.oninput=="function"}pc=fc}else pc=!1;j2=pc&&(!document.documentMode||9<document.documentMode)}function vf(){Ra&&(Ra.detachEvent("onpropertychange",b2),Ya=Ra=null)}function b2(e){if(e.propertyName==="value"&&Ci(Ya)){var t=[];C2(t,Ya,e,hd(e)),t2(K5,t)}}function Y5(e,t,n){e==="focusin"?(vf(),Ra=t,Ya=n,Ra.attachEvent("onpropertychange",b2)):e==="focusout"&&vf()}function X5(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ci(Ya)}function Q5(e,t){if(e==="click")return Ci(t)}function q5(e,t){if(e==="input"||e==="change")return Ci(t)}function J5(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var an=typeof Object.is=="function"?Object.is:J5;function Xa(e,t){if(an(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!Kc.call(t,a)||!an(e[a],t[a]))return!1}return!0}function yf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Cf(e,t){var n=yf(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=yf(n)}}function S2(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?S2(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function w2(){for(var e=window,t=Pl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Pl(e.document)}return t}function Sd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function e6(e){var t=w2(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&S2(n.ownerDocument.documentElement,n)){if(r!==null&&Sd(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,s=Math.min(r.start,a);r=r.end===void 0?s:Math.min(r.end,a),!e.extend&&s>r&&(a=r,r=s,s=a),a=Cf(n,s);var l=Cf(n,r);a&&l&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var t6=Dn&&"documentMode"in document&&11>=document.documentMode,fo=null,pu=null,Da=null,fu=!1;function jf(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;fu||fo==null||fo!==Pl(r)||(r=fo,"selectionStart"in r&&Sd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Da&&Xa(Da,r)||(Da=r,r=Hl(pu,"onSelect"),0<r.length&&(t=new Cd("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=fo)))}function el(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ho={animationend:el("Animation","AnimationEnd"),animationiteration:el("Animation","AnimationIteration"),animationstart:el("Animation","AnimationStart"),transitionend:el("Transition","TransitionEnd")},hc={},_2={};Dn&&(_2=document.createElement("div").style,"AnimationEvent"in window||(delete ho.animationend.animation,delete ho.animationiteration.animation,delete ho.animationstart.animation),"TransitionEvent"in window||delete ho.transitionend.transition);function ji(e){if(hc[e])return hc[e];if(!ho[e])return e;var t=ho[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in _2)return hc[e]=t[n];return e}var k2=ji("animationend"),T2=ji("animationiteration"),E2=ji("animationstart"),L2=ji("transitionend"),N2=new Map,bf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xr(e,t){N2.set(e,t),Yr(t,[e])}for(var mc=0;mc<bf.length;mc++){var gc=bf[mc],n6=gc.toLowerCase(),r6=gc[0].toUpperCase()+gc.slice(1);xr(n6,"on"+r6)}xr(k2,"onAnimationEnd");xr(T2,"onAnimationIteration");xr(E2,"onAnimationStart");xr("dblclick","onDoubleClick");xr("focusin","onFocus");xr("focusout","onBlur");xr(L2,"onTransitionEnd");Do("onMouseEnter",["mouseout","mouseover"]);Do("onMouseLeave",["mouseout","mouseover"]);Do("onPointerEnter",["pointerout","pointerover"]);Do("onPointerLeave",["pointerout","pointerover"]);Yr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Yr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Yr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Yr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Yr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Yr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ca="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),o6=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ca));function Sf(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,n5(r,t,void 0,e),e.currentTarget=null}function R2(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var l=r.length-1;0<=l;l--){var i=r[l],c=i.instance,u=i.currentTarget;if(i=i.listener,c!==s&&a.isPropagationStopped())break e;Sf(a,i,u),s=c}else for(l=0;l<r.length;l++){if(i=r[l],c=i.instance,u=i.currentTarget,i=i.listener,c!==s&&a.isPropagationStopped())break e;Sf(a,i,u),s=c}}}if(Bl)throw e=iu,Bl=!1,iu=null,e}function ke(e,t){var n=t[vu];n===void 0&&(n=t[vu]=new Set);var r=e+"__bubble";n.has(r)||(D2(t,e,2,!1),n.add(r))}function xc(e,t,n){var r=0;t&&(r|=4),D2(n,e,r,t)}var tl="_reactListening"+Math.random().toString(36).slice(2);function Qa(e){if(!e[tl]){e[tl]=!0,Ih.forEach(function(n){n!=="selectionchange"&&(o6.has(n)||xc(n,!1,e),xc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[tl]||(t[tl]=!0,xc("selectionchange",!1,t))}}function D2(e,t,n,r){switch(m2(t)){case 1:var a=v5;break;case 4:a=y5;break;default:a=vd}n=a.bind(null,t,n,e),a=void 0,!lu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function vc(e,t,n,r,a){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var i=r.stateNode.containerInfo;if(i===a||i.nodeType===8&&i.parentNode===a)break;if(l===4)for(l=r.return;l!==null;){var c=l.tag;if((c===3||c===4)&&(c=l.stateNode.containerInfo,c===a||c.nodeType===8&&c.parentNode===a))return;l=l.return}for(;i!==null;){if(l=Mr(i),l===null)return;if(c=l.tag,c===5||c===6){r=s=l;continue e}i=i.parentNode}}r=r.return}t2(function(){var u=s,d=hd(n),p=[];e:{var m=N2.get(e);if(m!==void 0){var y=Cd,b=e;switch(e){case"keypress":if(wl(n)===0)break e;case"keydown":case"keyup":y=M5;break;case"focusin":b="focus",y=dc;break;case"focusout":b="blur",y=dc;break;case"beforeblur":case"afterblur":y=dc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=df;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=b5;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=$5;break;case k2:case T2:case E2:y=_5;break;case L2:y=I5;break;case"scroll":y=C5;break;case"wheel":y=F5;break;case"copy":case"cut":case"paste":y=T5;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=ff}var j=(t&4)!==0,_=!j&&e==="scroll",x=j?m!==null?m+"Capture":null:m;j=[];for(var f=u,h;f!==null;){h=f;var C=h.stateNode;if(h.tag===5&&C!==null&&(h=C,x!==null&&(C=Wa(f,x),C!=null&&j.push(qa(f,C,h)))),_)break;f=f.return}0<j.length&&(m=new y(m,b,null,n,d),p.push({event:m,listeners:j}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",m&&n!==au&&(b=n.relatedTarget||n.fromElement)&&(Mr(b)||b[On]))break e;if((y||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,y?(b=n.relatedTarget||n.toElement,y=u,b=b?Mr(b):null,b!==null&&(_=Xr(b),b!==_||b.tag!==5&&b.tag!==6)&&(b=null)):(y=null,b=u),y!==b)){if(j=df,C="onMouseLeave",x="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(j=ff,C="onPointerLeave",x="onPointerEnter",f="pointer"),_=y==null?m:mo(y),h=b==null?m:mo(b),m=new j(C,f+"leave",y,n,d),m.target=_,m.relatedTarget=h,C=null,Mr(d)===u&&(j=new j(x,f+"enter",b,n,d),j.target=h,j.relatedTarget=_,C=j),_=C,y&&b)t:{for(j=y,x=b,f=0,h=j;h;h=so(h))f++;for(h=0,C=x;C;C=so(C))h++;for(;0<f-h;)j=so(j),f--;for(;0<h-f;)x=so(x),h--;for(;f--;){if(j===x||x!==null&&j===x.alternate)break t;j=so(j),x=so(x)}j=null}else j=null;y!==null&&wf(p,m,y,j,!1),b!==null&&_!==null&&wf(p,_,b,j,!0)}}e:{if(m=u?mo(u):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var S=G5;else if(gf(m))if(j2)S=q5;else{S=X5;var g=Y5}else(y=m.nodeName)&&y.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(S=Q5);if(S&&(S=S(e,u))){C2(p,S,n,d);break e}g&&g(e,m,u),e==="focusout"&&(g=m._wrapperState)&&g.controlled&&m.type==="number"&&eu(m,"number",m.value)}switch(g=u?mo(u):window,e){case"focusin":(gf(g)||g.contentEditable==="true")&&(fo=g,pu=u,Da=null);break;case"focusout":Da=pu=fo=null;break;case"mousedown":fu=!0;break;case"contextmenu":case"mouseup":case"dragend":fu=!1,jf(p,n,d);break;case"selectionchange":if(t6)break;case"keydown":case"keyup":jf(p,n,d)}var w;if(bd)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else po?v2(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(x2&&n.locale!=="ko"&&(po||T!=="onCompositionStart"?T==="onCompositionEnd"&&po&&(w=g2()):(nr=d,yd="value"in nr?nr.value:nr.textContent,po=!0)),g=Hl(u,T),0<g.length&&(T=new pf(T,e,null,n,d),p.push({event:T,listeners:g}),w?T.data=w:(w=y2(n),w!==null&&(T.data=w)))),(w=H5?V5(e,n):W5(e,n))&&(u=Hl(u,"onBeforeInput"),0<u.length&&(d=new pf("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:u}),d.data=w))}R2(p,t)})}function qa(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Hl(e,t){for(var n=t+"Capture",r=[];e!==null;){var a=e,s=a.stateNode;a.tag===5&&s!==null&&(a=s,s=Wa(e,n),s!=null&&r.unshift(qa(e,s,a)),s=Wa(e,t),s!=null&&r.push(qa(e,s,a))),e=e.return}return r}function so(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function wf(e,t,n,r,a){for(var s=t._reactName,l=[];n!==null&&n!==r;){var i=n,c=i.alternate,u=i.stateNode;if(c!==null&&c===r)break;i.tag===5&&u!==null&&(i=u,a?(c=Wa(n,s),c!=null&&l.unshift(qa(n,c,i))):a||(c=Wa(n,s),c!=null&&l.push(qa(n,c,i)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var a6=/\r\n?/g,s6=/\u0000|\uFFFD/g;function _f(e){return(typeof e=="string"?e:""+e).replace(a6,`
`).replace(s6,"")}function nl(e,t,n){if(t=_f(t),_f(e)!==t&&n)throw Error(A(425))}function Vl(){}var hu=null,mu=null;function gu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var xu=typeof setTimeout=="function"?setTimeout:void 0,l6=typeof clearTimeout=="function"?clearTimeout:void 0,kf=typeof Promise=="function"?Promise:void 0,i6=typeof queueMicrotask=="function"?queueMicrotask:typeof kf<"u"?function(e){return kf.resolve(null).then(e).catch(c6)}:xu;function c6(e){setTimeout(function(){throw e})}function yc(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(r===0){e.removeChild(a),Ga(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=a}while(n);Ga(t)}function lr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Tf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Uo=Math.random().toString(36).slice(2),yn="__reactFiber$"+Uo,Ja="__reactProps$"+Uo,On="__reactContainer$"+Uo,vu="__reactEvents$"+Uo,u6="__reactListeners$"+Uo,d6="__reactHandles$"+Uo;function Mr(e){var t=e[yn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[On]||n[yn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Tf(e);e!==null;){if(n=e[yn])return n;e=Tf(e)}return t}e=n,n=e.parentNode}return null}function gs(e){return e=e[yn]||e[On],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function mo(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(A(33))}function bi(e){return e[Ja]||null}var yu=[],go=-1;function vr(e){return{current:e}}function Te(e){0>go||(e.current=yu[go],yu[go]=null,go--)}function Se(e,t){go++,yu[go]=e.current,e.current=t}var fr={},pt=vr(fr),kt=vr(!1),Fr=fr;function Oo(e,t){var n=e.type.contextTypes;if(!n)return fr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a={},s;for(s in n)a[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Tt(e){return e=e.childContextTypes,e!=null}function Wl(){Te(kt),Te(pt)}function Ef(e,t,n){if(pt.current!==fr)throw Error(A(168));Se(pt,t),Se(kt,n)}function O2(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var a in r)if(!(a in t))throw Error(A(108,Yx(e)||"Unknown",a));return $e({},n,r)}function Zl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||fr,Fr=pt.current,Se(pt,e),Se(kt,kt.current),!0}function Lf(e,t,n){var r=e.stateNode;if(!r)throw Error(A(169));n?(e=O2(e,t,Fr),r.__reactInternalMemoizedMergedChildContext=e,Te(kt),Te(pt),Se(pt,e)):Te(kt),Se(kt,n)}var kn=null,Si=!1,Cc=!1;function M2(e){kn===null?kn=[e]:kn.push(e)}function p6(e){Si=!0,M2(e)}function yr(){if(!Cc&&kn!==null){Cc=!0;var e=0,t=ye;try{var n=kn;for(ye=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}kn=null,Si=!1}catch(a){throw kn!==null&&(kn=kn.slice(e+1)),a2(md,yr),a}finally{ye=t,Cc=!1}}return null}var xo=[],vo=0,Kl=null,Gl=0,It=[],zt=0,Ur=null,En=1,Ln="";function Dr(e,t){xo[vo++]=Gl,xo[vo++]=Kl,Kl=e,Gl=t}function A2(e,t,n){It[zt++]=En,It[zt++]=Ln,It[zt++]=Ur,Ur=e;var r=En;e=Ln;var a=32-rn(r)-1;r&=~(1<<a),n+=1;var s=32-rn(t)+a;if(30<s){var l=a-a%5;s=(r&(1<<l)-1).toString(32),r>>=l,a-=l,En=1<<32-rn(t)+a|n<<a|r,Ln=s+e}else En=1<<s|n<<a|r,Ln=e}function wd(e){e.return!==null&&(Dr(e,1),A2(e,1,0))}function _d(e){for(;e===Kl;)Kl=xo[--vo],xo[vo]=null,Gl=xo[--vo],xo[vo]=null;for(;e===Ur;)Ur=It[--zt],It[zt]=null,Ln=It[--zt],It[zt]=null,En=It[--zt],It[zt]=null}var Dt=null,Rt=null,Re=!1,nn=null;function P2(e,t){var n=Ft(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Nf(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Dt=e,Rt=lr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Dt=e,Rt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ur!==null?{id:En,overflow:Ln}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ft(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Dt=e,Rt=null,!0):!1;default:return!1}}function Cu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ju(e){if(Re){var t=Rt;if(t){var n=t;if(!Nf(e,t)){if(Cu(e))throw Error(A(418));t=lr(n.nextSibling);var r=Dt;t&&Nf(e,t)?P2(r,n):(e.flags=e.flags&-4097|2,Re=!1,Dt=e)}}else{if(Cu(e))throw Error(A(418));e.flags=e.flags&-4097|2,Re=!1,Dt=e}}}function Rf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Dt=e}function rl(e){if(e!==Dt)return!1;if(!Re)return Rf(e),Re=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!gu(e.type,e.memoizedProps)),t&&(t=Rt)){if(Cu(e))throw $2(),Error(A(418));for(;t;)P2(e,t),t=lr(t.nextSibling)}if(Rf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(A(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Rt=lr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Rt=null}}else Rt=Dt?lr(e.stateNode.nextSibling):null;return!0}function $2(){for(var e=Rt;e;)e=lr(e.nextSibling)}function Mo(){Rt=Dt=null,Re=!1}function kd(e){nn===null?nn=[e]:nn.push(e)}var f6=In.ReactCurrentBatchConfig;function Jt(e,t){if(e&&e.defaultProps){t=$e({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Yl=vr(null),Xl=null,yo=null,Td=null;function Ed(){Td=yo=Xl=null}function Ld(e){var t=Yl.current;Te(Yl),e._currentValue=t}function bu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Lo(e,t){Xl=e,Td=yo=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(_t=!0),e.firstContext=null)}function Vt(e){var t=e._currentValue;if(Td!==e)if(e={context:e,memoizedValue:t,next:null},yo===null){if(Xl===null)throw Error(A(308));yo=e,Xl.dependencies={lanes:0,firstContext:e}}else yo=yo.next=e;return t}var Ar=null;function Nd(e){Ar===null?Ar=[e]:Ar.push(e)}function B2(e,t,n,r){var a=t.interleaved;return a===null?(n.next=n,Nd(t)):(n.next=a.next,a.next=n),t.interleaved=n,Mn(e,r)}function Mn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Qn=!1;function Rd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function I2(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Nn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ir(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,he&2){var a=r.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),r.pending=t,Mn(e,n)}return a=r.interleaved,a===null?(t.next=t,Nd(r)):(t.next=a.next,a.next=t),r.interleaved=t,Mn(e,n)}function _l(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,gd(e,n)}}function Df(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var a=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?a=s=l:s=s.next=l,n=n.next}while(n!==null);s===null?a=s=t:s=s.next=t}else a=s=t;n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ql(e,t,n,r){var a=e.updateQueue;Qn=!1;var s=a.firstBaseUpdate,l=a.lastBaseUpdate,i=a.shared.pending;if(i!==null){a.shared.pending=null;var c=i,u=c.next;c.next=null,l===null?s=u:l.next=u,l=c;var d=e.alternate;d!==null&&(d=d.updateQueue,i=d.lastBaseUpdate,i!==l&&(i===null?d.firstBaseUpdate=u:i.next=u,d.lastBaseUpdate=c))}if(s!==null){var p=a.baseState;l=0,d=u=c=null,i=s;do{var m=i.lane,y=i.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:y,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null});e:{var b=e,j=i;switch(m=t,y=n,j.tag){case 1:if(b=j.payload,typeof b=="function"){p=b.call(y,p,m);break e}p=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=j.payload,m=typeof b=="function"?b.call(y,p,m):b,m==null)break e;p=$e({},p,m);break e;case 2:Qn=!0}}i.callback!==null&&i.lane!==0&&(e.flags|=64,m=a.effects,m===null?a.effects=[i]:m.push(i))}else y={eventTime:y,lane:m,tag:i.tag,payload:i.payload,callback:i.callback,next:null},d===null?(u=d=y,c=p):d=d.next=y,l|=m;if(i=i.next,i===null){if(i=a.shared.pending,i===null)break;m=i,i=m.next,m.next=null,a.lastBaseUpdate=m,a.shared.pending=null}}while(1);if(d===null&&(c=p),a.baseState=c,a.firstBaseUpdate=u,a.lastBaseUpdate=d,t=a.shared.interleaved,t!==null){a=t;do l|=a.lane,a=a.next;while(a!==t)}else s===null&&(a.shared.lanes=0);Vr|=l,e.lanes=l,e.memoizedState=p}}function Of(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(a!==null){if(r.callback=null,r=n,typeof a!="function")throw Error(A(191,a));a.call(r)}}}var z2=new Bh.Component().refs;function Su(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:$e({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var wi={isMounted:function(e){return(e=e._reactInternals)?Xr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=gt(),a=ur(e),s=Nn(r,a);s.payload=t,n!=null&&(s.callback=n),t=ir(e,s,a),t!==null&&(on(t,e,a,r),_l(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=gt(),a=ur(e),s=Nn(r,a);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=ir(e,s,a),t!==null&&(on(t,e,a,r),_l(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=gt(),r=ur(e),a=Nn(n,r);a.tag=2,t!=null&&(a.callback=t),t=ir(e,a,r),t!==null&&(on(t,e,r,n),_l(t,e,r))}};function Mf(e,t,n,r,a,s,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,l):t.prototype&&t.prototype.isPureReactComponent?!Xa(n,r)||!Xa(a,s):!0}function F2(e,t,n){var r=!1,a=fr,s=t.contextType;return typeof s=="object"&&s!==null?s=Vt(s):(a=Tt(t)?Fr:pt.current,r=t.contextTypes,s=(r=r!=null)?Oo(e,a):fr),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=wi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=s),t}function Af(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&wi.enqueueReplaceState(t,t.state,null)}function wu(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs=z2,Rd(e);var s=t.contextType;typeof s=="object"&&s!==null?a.context=Vt(s):(s=Tt(t)?Fr:pt.current,a.context=Oo(e,s)),a.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Su(e,t,s,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&wi.enqueueReplaceState(a,a.state,null),Ql(e,n,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function sa(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(A(309));var r=n.stateNode}if(!r)throw Error(A(147,e));var a=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(l){var i=a.refs;i===z2&&(i=a.refs={}),l===null?delete i[s]:i[s]=l},t._stringRef=s,t)}if(typeof e!="string")throw Error(A(284));if(!n._owner)throw Error(A(290,e))}return e}function ol(e,t){throw e=Object.prototype.toString.call(t),Error(A(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Pf(e){var t=e._init;return t(e._payload)}function U2(e){function t(x,f){if(e){var h=x.deletions;h===null?(x.deletions=[f],x.flags|=16):h.push(f)}}function n(x,f){if(!e)return null;for(;f!==null;)t(x,f),f=f.sibling;return null}function r(x,f){for(x=new Map;f!==null;)f.key!==null?x.set(f.key,f):x.set(f.index,f),f=f.sibling;return x}function a(x,f){return x=dr(x,f),x.index=0,x.sibling=null,x}function s(x,f,h){return x.index=h,e?(h=x.alternate,h!==null?(h=h.index,h<f?(x.flags|=2,f):h):(x.flags|=2,f)):(x.flags|=1048576,f)}function l(x){return e&&x.alternate===null&&(x.flags|=2),x}function i(x,f,h,C){return f===null||f.tag!==6?(f=Tc(h,x.mode,C),f.return=x,f):(f=a(f,h),f.return=x,f)}function c(x,f,h,C){var S=h.type;return S===uo?d(x,f,h.props.children,C,h.key):f!==null&&(f.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Xn&&Pf(S)===f.type)?(C=a(f,h.props),C.ref=sa(x,f,h),C.return=x,C):(C=Rl(h.type,h.key,h.props,null,x.mode,C),C.ref=sa(x,f,h),C.return=x,C)}function u(x,f,h,C){return f===null||f.tag!==4||f.stateNode.containerInfo!==h.containerInfo||f.stateNode.implementation!==h.implementation?(f=Ec(h,x.mode,C),f.return=x,f):(f=a(f,h.children||[]),f.return=x,f)}function d(x,f,h,C,S){return f===null||f.tag!==7?(f=zr(h,x.mode,C,S),f.return=x,f):(f=a(f,h),f.return=x,f)}function p(x,f,h){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Tc(""+f,x.mode,h),f.return=x,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ks:return h=Rl(f.type,f.key,f.props,null,x.mode,h),h.ref=sa(x,null,f),h.return=x,h;case co:return f=Ec(f,x.mode,h),f.return=x,f;case Xn:var C=f._init;return p(x,C(f._payload),h)}if(va(f)||ta(f))return f=zr(f,x.mode,h,null),f.return=x,f;ol(x,f)}return null}function m(x,f,h,C){var S=f!==null?f.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return S!==null?null:i(x,f,""+h,C);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Ks:return h.key===S?c(x,f,h,C):null;case co:return h.key===S?u(x,f,h,C):null;case Xn:return S=h._init,m(x,f,S(h._payload),C)}if(va(h)||ta(h))return S!==null?null:d(x,f,h,C,null);ol(x,h)}return null}function y(x,f,h,C,S){if(typeof C=="string"&&C!==""||typeof C=="number")return x=x.get(h)||null,i(f,x,""+C,S);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case Ks:return x=x.get(C.key===null?h:C.key)||null,c(f,x,C,S);case co:return x=x.get(C.key===null?h:C.key)||null,u(f,x,C,S);case Xn:var g=C._init;return y(x,f,h,g(C._payload),S)}if(va(C)||ta(C))return x=x.get(h)||null,d(f,x,C,S,null);ol(f,C)}return null}function b(x,f,h,C){for(var S=null,g=null,w=f,T=f=0,E=null;w!==null&&T<h.length;T++){w.index>T?(E=w,w=null):E=w.sibling;var D=m(x,w,h[T],C);if(D===null){w===null&&(w=E);break}e&&w&&D.alternate===null&&t(x,w),f=s(D,f,T),g===null?S=D:g.sibling=D,g=D,w=E}if(T===h.length)return n(x,w),Re&&Dr(x,T),S;if(w===null){for(;T<h.length;T++)w=p(x,h[T],C),w!==null&&(f=s(w,f,T),g===null?S=w:g.sibling=w,g=w);return Re&&Dr(x,T),S}for(w=r(x,w);T<h.length;T++)E=y(w,x,T,h[T],C),E!==null&&(e&&E.alternate!==null&&w.delete(E.key===null?T:E.key),f=s(E,f,T),g===null?S=E:g.sibling=E,g=E);return e&&w.forEach(function(P){return t(x,P)}),Re&&Dr(x,T),S}function j(x,f,h,C){var S=ta(h);if(typeof S!="function")throw Error(A(150));if(h=S.call(h),h==null)throw Error(A(151));for(var g=S=null,w=f,T=f=0,E=null,D=h.next();w!==null&&!D.done;T++,D=h.next()){w.index>T?(E=w,w=null):E=w.sibling;var P=m(x,w,D.value,C);if(P===null){w===null&&(w=E);break}e&&w&&P.alternate===null&&t(x,w),f=s(P,f,T),g===null?S=P:g.sibling=P,g=P,w=E}if(D.done)return n(x,w),Re&&Dr(x,T),S;if(w===null){for(;!D.done;T++,D=h.next())D=p(x,D.value,C),D!==null&&(f=s(D,f,T),g===null?S=D:g.sibling=D,g=D);return Re&&Dr(x,T),S}for(w=r(x,w);!D.done;T++,D=h.next())D=y(w,x,T,D.value,C),D!==null&&(e&&D.alternate!==null&&w.delete(D.key===null?T:D.key),f=s(D,f,T),g===null?S=D:g.sibling=D,g=D);return e&&w.forEach(function(G){return t(x,G)}),Re&&Dr(x,T),S}function _(x,f,h,C){if(typeof h=="object"&&h!==null&&h.type===uo&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Ks:e:{for(var S=h.key,g=f;g!==null;){if(g.key===S){if(S=h.type,S===uo){if(g.tag===7){n(x,g.sibling),f=a(g,h.props.children),f.return=x,x=f;break e}}else if(g.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Xn&&Pf(S)===g.type){n(x,g.sibling),f=a(g,h.props),f.ref=sa(x,g,h),f.return=x,x=f;break e}n(x,g);break}else t(x,g);g=g.sibling}h.type===uo?(f=zr(h.props.children,x.mode,C,h.key),f.return=x,x=f):(C=Rl(h.type,h.key,h.props,null,x.mode,C),C.ref=sa(x,f,h),C.return=x,x=C)}return l(x);case co:e:{for(g=h.key;f!==null;){if(f.key===g)if(f.tag===4&&f.stateNode.containerInfo===h.containerInfo&&f.stateNode.implementation===h.implementation){n(x,f.sibling),f=a(f,h.children||[]),f.return=x,x=f;break e}else{n(x,f);break}else t(x,f);f=f.sibling}f=Ec(h,x.mode,C),f.return=x,x=f}return l(x);case Xn:return g=h._init,_(x,f,g(h._payload),C)}if(va(h))return b(x,f,h,C);if(ta(h))return j(x,f,h,C);ol(x,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,f!==null&&f.tag===6?(n(x,f.sibling),f=a(f,h),f.return=x,x=f):(n(x,f),f=Tc(h,x.mode,C),f.return=x,x=f),l(x)):n(x,f)}return _}var Ao=U2(!0),H2=U2(!1),xs={},jn=vr(xs),es=vr(xs),ts=vr(xs);function Pr(e){if(e===xs)throw Error(A(174));return e}function Dd(e,t){switch(Se(ts,t),Se(es,e),Se(jn,xs),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:nu(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=nu(t,e)}Te(jn),Se(jn,t)}function Po(){Te(jn),Te(es),Te(ts)}function V2(e){Pr(ts.current);var t=Pr(jn.current),n=nu(t,e.type);t!==n&&(Se(es,e),Se(jn,n))}function Od(e){es.current===e&&(Te(jn),Te(es))}var Me=vr(0);function ql(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var jc=[];function Md(){for(var e=0;e<jc.length;e++)jc[e]._workInProgressVersionPrimary=null;jc.length=0}var kl=In.ReactCurrentDispatcher,bc=In.ReactCurrentBatchConfig,Hr=0,Pe=null,Ke=null,Je=null,Jl=!1,Oa=!1,ns=0,h6=0;function ct(){throw Error(A(321))}function Ad(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!an(e[n],t[n]))return!1;return!0}function Pd(e,t,n,r,a,s){if(Hr=s,Pe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,kl.current=e===null||e.memoizedState===null?v6:y6,e=n(r,a),Oa){s=0;do{if(Oa=!1,ns=0,25<=s)throw Error(A(301));s+=1,Je=Ke=null,t.updateQueue=null,kl.current=C6,e=n(r,a)}while(Oa)}if(kl.current=ei,t=Ke!==null&&Ke.next!==null,Hr=0,Je=Ke=Pe=null,Jl=!1,t)throw Error(A(300));return e}function $d(){var e=ns!==0;return ns=0,e}function mn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Je===null?Pe.memoizedState=Je=e:Je=Je.next=e,Je}function Wt(){if(Ke===null){var e=Pe.alternate;e=e!==null?e.memoizedState:null}else e=Ke.next;var t=Je===null?Pe.memoizedState:Je.next;if(t!==null)Je=t,Ke=e;else{if(e===null)throw Error(A(310));Ke=e,e={memoizedState:Ke.memoizedState,baseState:Ke.baseState,baseQueue:Ke.baseQueue,queue:Ke.queue,next:null},Je===null?Pe.memoizedState=Je=e:Je=Je.next=e}return Je}function rs(e,t){return typeof t=="function"?t(e):t}function Sc(e){var t=Wt(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var r=Ke,a=r.baseQueue,s=n.pending;if(s!==null){if(a!==null){var l=a.next;a.next=s.next,s.next=l}r.baseQueue=a=s,n.pending=null}if(a!==null){s=a.next,r=r.baseState;var i=l=null,c=null,u=s;do{var d=u.lane;if((Hr&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(i=c=p,l=r):c=c.next=p,Pe.lanes|=d,Vr|=d}u=u.next}while(u!==null&&u!==s);c===null?l=r:c.next=i,an(r,t.memoizedState)||(_t=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){a=e;do s=a.lane,Pe.lanes|=s,Vr|=s,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function wc(e){var t=Wt(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,s=t.memoizedState;if(a!==null){n.pending=null;var l=a=a.next;do s=e(s,l.action),l=l.next;while(l!==a);an(s,t.memoizedState)||(_t=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function W2(){}function Z2(e,t){var n=Pe,r=Wt(),a=t(),s=!an(r.memoizedState,a);if(s&&(r.memoizedState=a,_t=!0),r=r.queue,Bd(Y2.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||Je!==null&&Je.memoizedState.tag&1){if(n.flags|=2048,os(9,G2.bind(null,n,r,a,t),void 0,null),tt===null)throw Error(A(349));Hr&30||K2(n,t,a)}return a}function K2(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Pe.updateQueue,t===null?(t={lastEffect:null,stores:null},Pe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function G2(e,t,n,r){t.value=n,t.getSnapshot=r,X2(t)&&Q2(e)}function Y2(e,t,n){return n(function(){X2(t)&&Q2(e)})}function X2(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!an(e,n)}catch{return!0}}function Q2(e){var t=Mn(e,1);t!==null&&on(t,e,1,-1)}function $f(e){var t=mn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:rs,lastRenderedState:e},t.queue=e,e=e.dispatch=x6.bind(null,Pe,e),[t.memoizedState,e]}function os(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Pe.updateQueue,t===null?(t={lastEffect:null,stores:null},Pe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function q2(){return Wt().memoizedState}function Tl(e,t,n,r){var a=mn();Pe.flags|=e,a.memoizedState=os(1|t,n,void 0,r===void 0?null:r)}function _i(e,t,n,r){var a=Wt();r=r===void 0?null:r;var s=void 0;if(Ke!==null){var l=Ke.memoizedState;if(s=l.destroy,r!==null&&Ad(r,l.deps)){a.memoizedState=os(t,n,s,r);return}}Pe.flags|=e,a.memoizedState=os(1|t,n,s,r)}function Bf(e,t){return Tl(8390656,8,e,t)}function Bd(e,t){return _i(2048,8,e,t)}function J2(e,t){return _i(4,2,e,t)}function em(e,t){return _i(4,4,e,t)}function tm(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function nm(e,t,n){return n=n!=null?n.concat([e]):null,_i(4,4,tm.bind(null,t,e),n)}function Id(){}function rm(e,t){var n=Wt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ad(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function om(e,t){var n=Wt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ad(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function am(e,t,n){return Hr&21?(an(n,t)||(n=i2(),Pe.lanes|=n,Vr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,_t=!0),e.memoizedState=n)}function m6(e,t){var n=ye;ye=n!==0&&4>n?n:4,e(!0);var r=bc.transition;bc.transition={};try{e(!1),t()}finally{ye=n,bc.transition=r}}function sm(){return Wt().memoizedState}function g6(e,t,n){var r=ur(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},lm(e))im(t,n);else if(n=B2(e,t,n,r),n!==null){var a=gt();on(n,e,r,a),cm(n,t,r)}}function x6(e,t,n){var r=ur(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(lm(e))im(t,a);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var l=t.lastRenderedState,i=s(l,n);if(a.hasEagerState=!0,a.eagerState=i,an(i,l)){var c=t.interleaved;c===null?(a.next=a,Nd(t)):(a.next=c.next,c.next=a),t.interleaved=a;return}}catch{}finally{}n=B2(e,t,a,r),n!==null&&(a=gt(),on(n,e,r,a),cm(n,t,r))}}function lm(e){var t=e.alternate;return e===Pe||t!==null&&t===Pe}function im(e,t){Oa=Jl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function cm(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,gd(e,n)}}var ei={readContext:Vt,useCallback:ct,useContext:ct,useEffect:ct,useImperativeHandle:ct,useInsertionEffect:ct,useLayoutEffect:ct,useMemo:ct,useReducer:ct,useRef:ct,useState:ct,useDebugValue:ct,useDeferredValue:ct,useTransition:ct,useMutableSource:ct,useSyncExternalStore:ct,useId:ct,unstable_isNewReconciler:!1},v6={readContext:Vt,useCallback:function(e,t){return mn().memoizedState=[e,t===void 0?null:t],e},useContext:Vt,useEffect:Bf,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Tl(4194308,4,tm.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Tl(4194308,4,e,t)},useInsertionEffect:function(e,t){return Tl(4,2,e,t)},useMemo:function(e,t){var n=mn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=mn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=g6.bind(null,Pe,e),[r.memoizedState,e]},useRef:function(e){var t=mn();return e={current:e},t.memoizedState=e},useState:$f,useDebugValue:Id,useDeferredValue:function(e){return mn().memoizedState=e},useTransition:function(){var e=$f(!1),t=e[0];return e=m6.bind(null,e[1]),mn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Pe,a=mn();if(Re){if(n===void 0)throw Error(A(407));n=n()}else{if(n=t(),tt===null)throw Error(A(349));Hr&30||K2(r,t,n)}a.memoizedState=n;var s={value:n,getSnapshot:t};return a.queue=s,Bf(Y2.bind(null,r,s,e),[e]),r.flags|=2048,os(9,G2.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=mn(),t=tt.identifierPrefix;if(Re){var n=Ln,r=En;n=(r&~(1<<32-rn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ns++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=h6++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},y6={readContext:Vt,useCallback:rm,useContext:Vt,useEffect:Bd,useImperativeHandle:nm,useInsertionEffect:J2,useLayoutEffect:em,useMemo:om,useReducer:Sc,useRef:q2,useState:function(){return Sc(rs)},useDebugValue:Id,useDeferredValue:function(e){var t=Wt();return am(t,Ke.memoizedState,e)},useTransition:function(){var e=Sc(rs)[0],t=Wt().memoizedState;return[e,t]},useMutableSource:W2,useSyncExternalStore:Z2,useId:sm,unstable_isNewReconciler:!1},C6={readContext:Vt,useCallback:rm,useContext:Vt,useEffect:Bd,useImperativeHandle:nm,useInsertionEffect:J2,useLayoutEffect:em,useMemo:om,useReducer:wc,useRef:q2,useState:function(){return wc(rs)},useDebugValue:Id,useDeferredValue:function(e){var t=Wt();return Ke===null?t.memoizedState=e:am(t,Ke.memoizedState,e)},useTransition:function(){var e=wc(rs)[0],t=Wt().memoizedState;return[e,t]},useMutableSource:W2,useSyncExternalStore:Z2,useId:sm,unstable_isNewReconciler:!1};function $o(e,t){try{var n="",r=t;do n+=Gx(r),r=r.return;while(r);var a=n}catch(s){a=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:a,digest:null}}function _c(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function _u(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var j6=typeof WeakMap=="function"?WeakMap:Map;function um(e,t,n){n=Nn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ni||(ni=!0,Au=r),_u(e,t)},n}function dm(e,t,n){n=Nn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){_u(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){_u(e,t),typeof r!="function"&&(cr===null?cr=new Set([this]):cr.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function If(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new j6;var a=new Set;r.set(t,a)}else a=r.get(t),a===void 0&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=A6.bind(null,e,t,n),t.then(e,e))}function zf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ff(e,t,n,r,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Nn(-1,1),t.tag=2,ir(n,t,1))),n.lanes|=1),e)}var b6=In.ReactCurrentOwner,_t=!1;function mt(e,t,n,r){t.child=e===null?H2(t,null,n,r):Ao(t,e.child,n,r)}function Uf(e,t,n,r,a){n=n.render;var s=t.ref;return Lo(t,a),r=Pd(e,t,n,r,s,a),n=$d(),e!==null&&!_t?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,An(e,t,a)):(Re&&n&&wd(t),t.flags|=1,mt(e,t,r,a),t.child)}function Hf(e,t,n,r,a){if(e===null){var s=n.type;return typeof s=="function"&&!Kd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,pm(e,t,s,r,a)):(e=Rl(n.type,null,r,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&a)){var l=s.memoizedProps;if(n=n.compare,n=n!==null?n:Xa,n(l,r)&&e.ref===t.ref)return An(e,t,a)}return t.flags|=1,e=dr(s,r),e.ref=t.ref,e.return=t,t.child=e}function pm(e,t,n,r,a){if(e!==null){var s=e.memoizedProps;if(Xa(s,r)&&e.ref===t.ref)if(_t=!1,t.pendingProps=r=s,(e.lanes&a)!==0)e.flags&131072&&(_t=!0);else return t.lanes=e.lanes,An(e,t,a)}return ku(e,t,n,r,a)}function fm(e,t,n){var r=t.pendingProps,a=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Se(jo,Nt),Nt|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Se(jo,Nt),Nt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Se(jo,Nt),Nt|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,Se(jo,Nt),Nt|=r;return mt(e,t,a,n),t.child}function hm(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ku(e,t,n,r,a){var s=Tt(n)?Fr:pt.current;return s=Oo(t,s),Lo(t,a),n=Pd(e,t,n,r,s,a),r=$d(),e!==null&&!_t?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,An(e,t,a)):(Re&&r&&wd(t),t.flags|=1,mt(e,t,n,a),t.child)}function Vf(e,t,n,r,a){if(Tt(n)){var s=!0;Zl(t)}else s=!1;if(Lo(t,a),t.stateNode===null)El(e,t),F2(t,n,r),wu(t,n,r,a),r=!0;else if(e===null){var l=t.stateNode,i=t.memoizedProps;l.props=i;var c=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=Vt(u):(u=Tt(n)?Fr:pt.current,u=Oo(t,u));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof l.getSnapshotBeforeUpdate=="function";p||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(i!==r||c!==u)&&Af(t,l,r,u),Qn=!1;var m=t.memoizedState;l.state=m,Ql(t,r,l,a),c=t.memoizedState,i!==r||m!==c||kt.current||Qn?(typeof d=="function"&&(Su(t,n,d,r),c=t.memoizedState),(i=Qn||Mf(t,n,i,r,m,c,u))?(p||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),l.props=r,l.state=c,l.context=u,r=i):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,I2(e,t),i=t.memoizedProps,u=t.type===t.elementType?i:Jt(t.type,i),l.props=u,p=t.pendingProps,m=l.context,c=n.contextType,typeof c=="object"&&c!==null?c=Vt(c):(c=Tt(n)?Fr:pt.current,c=Oo(t,c));var y=n.getDerivedStateFromProps;(d=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(i!==p||m!==c)&&Af(t,l,r,c),Qn=!1,m=t.memoizedState,l.state=m,Ql(t,r,l,a);var b=t.memoizedState;i!==p||m!==b||kt.current||Qn?(typeof y=="function"&&(Su(t,n,y,r),b=t.memoizedState),(u=Qn||Mf(t,n,u,r,m,b,c)||!1)?(d||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,b,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,b,c)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||i===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=b),l.props=r,l.state=b,l.context=c,r=u):(typeof l.componentDidUpdate!="function"||i===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Tu(e,t,n,r,s,a)}function Tu(e,t,n,r,a,s){hm(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return a&&Lf(t,n,!1),An(e,t,s);r=t.stateNode,b6.current=t;var i=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Ao(t,e.child,null,s),t.child=Ao(t,null,i,s)):mt(e,t,i,s),t.memoizedState=r.state,a&&Lf(t,n,!0),t.child}function mm(e){var t=e.stateNode;t.pendingContext?Ef(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ef(e,t.context,!1),Dd(e,t.containerInfo)}function Wf(e,t,n,r,a){return Mo(),kd(a),t.flags|=256,mt(e,t,n,r),t.child}var Eu={dehydrated:null,treeContext:null,retryLane:0};function Lu(e){return{baseLanes:e,cachePool:null,transitions:null}}function gm(e,t,n){var r=t.pendingProps,a=Me.current,s=!1,l=(t.flags&128)!==0,i;if((i=l)||(i=e!==null&&e.memoizedState===null?!1:(a&2)!==0),i?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),Se(Me,a&1),e===null)return ju(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,s?(r=t.mode,s=t.child,l={mode:"hidden",children:l},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=l):s=Ei(l,r,0,null),e=zr(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Lu(n),t.memoizedState=Eu,e):zd(t,l));if(a=e.memoizedState,a!==null&&(i=a.dehydrated,i!==null))return S6(e,t,l,r,i,a,n);if(s){s=r.fallback,l=t.mode,a=e.child,i=a.sibling;var c={mode:"hidden",children:r.children};return!(l&1)&&t.child!==a?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=dr(a,c),r.subtreeFlags=a.subtreeFlags&14680064),i!==null?s=dr(i,s):(s=zr(s,l,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,l=e.child.memoizedState,l=l===null?Lu(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=e.childLanes&~n,t.memoizedState=Eu,r}return s=e.child,e=s.sibling,r=dr(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function zd(e,t){return t=Ei({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function al(e,t,n,r){return r!==null&&kd(r),Ao(t,e.child,null,n),e=zd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function S6(e,t,n,r,a,s,l){if(n)return t.flags&256?(t.flags&=-257,r=_c(Error(A(422))),al(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,a=t.mode,r=Ei({mode:"visible",children:r.children},a,0,null),s=zr(s,a,l,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&Ao(t,e.child,null,l),t.child.memoizedState=Lu(l),t.memoizedState=Eu,s);if(!(t.mode&1))return al(e,t,l,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var i=r.dgst;return r=i,s=Error(A(419)),r=_c(s,r,void 0),al(e,t,l,r)}if(i=(l&e.childLanes)!==0,_t||i){if(r=tt,r!==null){switch(l&-l){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(r.suspendedLanes|l)?0:a,a!==0&&a!==s.retryLane&&(s.retryLane=a,Mn(e,a),on(r,e,a,-1))}return Zd(),r=_c(Error(A(421))),al(e,t,l,r)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=P6.bind(null,e),a._reactRetry=t,null):(e=s.treeContext,Rt=lr(a.nextSibling),Dt=t,Re=!0,nn=null,e!==null&&(It[zt++]=En,It[zt++]=Ln,It[zt++]=Ur,En=e.id,Ln=e.overflow,Ur=t),t=zd(t,r.children),t.flags|=4096,t)}function Zf(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),bu(e.return,t,n)}function kc(e,t,n,r,a){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=a)}function xm(e,t,n){var r=t.pendingProps,a=r.revealOrder,s=r.tail;if(mt(e,t,r.children,n),r=Me.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Zf(e,n,t);else if(e.tag===19)Zf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Se(Me,r),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&ql(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),kc(t,!1,a,n,s);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&ql(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}kc(t,!0,n,null,s);break;case"together":kc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function El(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function An(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Vr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(A(153));if(t.child!==null){for(e=t.child,n=dr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=dr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function w6(e,t,n){switch(t.tag){case 3:mm(t),Mo();break;case 5:V2(t);break;case 1:Tt(t.type)&&Zl(t);break;case 4:Dd(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;Se(Yl,r._currentValue),r._currentValue=a;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Se(Me,Me.current&1),t.flags|=128,null):n&t.child.childLanes?gm(e,t,n):(Se(Me,Me.current&1),e=An(e,t,n),e!==null?e.sibling:null);Se(Me,Me.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return xm(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Se(Me,Me.current),r)break;return null;case 22:case 23:return t.lanes=0,fm(e,t,n)}return An(e,t,n)}var vm,Nu,ym,Cm;vm=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Nu=function(){};ym=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,Pr(jn.current);var s=null;switch(n){case"input":a=qc(e,a),r=qc(e,r),s=[];break;case"select":a=$e({},a,{value:void 0}),r=$e({},r,{value:void 0}),s=[];break;case"textarea":a=tu(e,a),r=tu(e,r),s=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Vl)}ru(n,r);var l;n=null;for(u in a)if(!r.hasOwnProperty(u)&&a.hasOwnProperty(u)&&a[u]!=null)if(u==="style"){var i=a[u];for(l in i)i.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ha.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var c=r[u];if(i=a!=null?a[u]:void 0,r.hasOwnProperty(u)&&c!==i&&(c!=null||i!=null))if(u==="style")if(i){for(l in i)!i.hasOwnProperty(l)||c&&c.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in c)c.hasOwnProperty(l)&&i[l]!==c[l]&&(n||(n={}),n[l]=c[l])}else n||(s||(s=[]),s.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,i=i?i.__html:void 0,c!=null&&i!==c&&(s=s||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ha.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&ke("scroll",e),s||i===c||(s=[])):(s=s||[]).push(u,c))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};Cm=function(e,t,n,r){n!==r&&(t.flags|=4)};function la(e,t){if(!Re)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ut(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function _6(e,t,n){var r=t.pendingProps;switch(_d(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ut(t),null;case 1:return Tt(t.type)&&Wl(),ut(t),null;case 3:return r=t.stateNode,Po(),Te(kt),Te(pt),Md(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(rl(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,nn!==null&&(Bu(nn),nn=null))),Nu(e,t),ut(t),null;case 5:Od(t);var a=Pr(ts.current);if(n=t.type,e!==null&&t.stateNode!=null)ym(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(A(166));return ut(t),null}if(e=Pr(jn.current),rl(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[yn]=t,r[Ja]=s,e=(t.mode&1)!==0,n){case"dialog":ke("cancel",r),ke("close",r);break;case"iframe":case"object":case"embed":ke("load",r);break;case"video":case"audio":for(a=0;a<Ca.length;a++)ke(Ca[a],r);break;case"source":ke("error",r);break;case"img":case"image":case"link":ke("error",r),ke("load",r);break;case"details":ke("toggle",r);break;case"input":ef(r,s),ke("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ke("invalid",r);break;case"textarea":nf(r,s),ke("invalid",r)}ru(n,s),a=null;for(var l in s)if(s.hasOwnProperty(l)){var i=s[l];l==="children"?typeof i=="string"?r.textContent!==i&&(s.suppressHydrationWarning!==!0&&nl(r.textContent,i,e),a=["children",i]):typeof i=="number"&&r.textContent!==""+i&&(s.suppressHydrationWarning!==!0&&nl(r.textContent,i,e),a=["children",""+i]):Ha.hasOwnProperty(l)&&i!=null&&l==="onScroll"&&ke("scroll",r)}switch(n){case"input":Gs(r),tf(r,s,!0);break;case"textarea":Gs(r),rf(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Vl)}r=a,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Kh(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[yn]=t,e[Ja]=r,vm(e,t,!1,!1),t.stateNode=e;e:{switch(l=ou(n,r),n){case"dialog":ke("cancel",e),ke("close",e),a=r;break;case"iframe":case"object":case"embed":ke("load",e),a=r;break;case"video":case"audio":for(a=0;a<Ca.length;a++)ke(Ca[a],e);a=r;break;case"source":ke("error",e),a=r;break;case"img":case"image":case"link":ke("error",e),ke("load",e),a=r;break;case"details":ke("toggle",e),a=r;break;case"input":ef(e,r),a=qc(e,r),ke("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=$e({},r,{value:void 0}),ke("invalid",e);break;case"textarea":nf(e,r),a=tu(e,r),ke("invalid",e);break;default:a=r}ru(n,a),i=a;for(s in i)if(i.hasOwnProperty(s)){var c=i[s];s==="style"?Xh(e,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Gh(e,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Va(e,c):typeof c=="number"&&Va(e,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ha.hasOwnProperty(s)?c!=null&&s==="onScroll"&&ke("scroll",e):c!=null&&ud(e,s,c,l))}switch(n){case"input":Gs(e),tf(e,r,!1);break;case"textarea":Gs(e),rf(e);break;case"option":r.value!=null&&e.setAttribute("value",""+pr(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?_o(e,!!r.multiple,s,!1):r.defaultValue!=null&&_o(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Vl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ut(t),null;case 6:if(e&&t.stateNode!=null)Cm(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(A(166));if(n=Pr(ts.current),Pr(jn.current),rl(t)){if(r=t.stateNode,n=t.memoizedProps,r[yn]=t,(s=r.nodeValue!==n)&&(e=Dt,e!==null))switch(e.tag){case 3:nl(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&nl(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[yn]=t,t.stateNode=r}return ut(t),null;case 13:if(Te(Me),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Re&&Rt!==null&&t.mode&1&&!(t.flags&128))$2(),Mo(),t.flags|=98560,s=!1;else if(s=rl(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(A(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(A(317));s[yn]=t}else Mo(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ut(t),s=!1}else nn!==null&&(Bu(nn),nn=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Me.current&1?Ye===0&&(Ye=3):Zd())),t.updateQueue!==null&&(t.flags|=4),ut(t),null);case 4:return Po(),Nu(e,t),e===null&&Qa(t.stateNode.containerInfo),ut(t),null;case 10:return Ld(t.type._context),ut(t),null;case 17:return Tt(t.type)&&Wl(),ut(t),null;case 19:if(Te(Me),s=t.memoizedState,s===null)return ut(t),null;if(r=(t.flags&128)!==0,l=s.rendering,l===null)if(r)la(s,!1);else{if(Ye!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=ql(e),l!==null){for(t.flags|=128,la(s,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,l=s.alternate,l===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=l.childLanes,s.lanes=l.lanes,s.child=l.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=l.memoizedProps,s.memoizedState=l.memoizedState,s.updateQueue=l.updateQueue,s.type=l.type,e=l.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Se(Me,Me.current&1|2),t.child}e=e.sibling}s.tail!==null&&He()>Bo&&(t.flags|=128,r=!0,la(s,!1),t.lanes=4194304)}else{if(!r)if(e=ql(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),la(s,!0),s.tail===null&&s.tailMode==="hidden"&&!l.alternate&&!Re)return ut(t),null}else 2*He()-s.renderingStartTime>Bo&&n!==1073741824&&(t.flags|=128,r=!0,la(s,!1),t.lanes=4194304);s.isBackwards?(l.sibling=t.child,t.child=l):(n=s.last,n!==null?n.sibling=l:t.child=l,s.last=l)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=He(),t.sibling=null,n=Me.current,Se(Me,r?n&1|2:n&1),t):(ut(t),null);case 22:case 23:return Wd(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Nt&1073741824&&(ut(t),t.subtreeFlags&6&&(t.flags|=8192)):ut(t),null;case 24:return null;case 25:return null}throw Error(A(156,t.tag))}function k6(e,t){switch(_d(t),t.tag){case 1:return Tt(t.type)&&Wl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Po(),Te(kt),Te(pt),Md(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Od(t),null;case 13:if(Te(Me),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(A(340));Mo()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Te(Me),null;case 4:return Po(),null;case 10:return Ld(t.type._context),null;case 22:case 23:return Wd(),null;case 24:return null;default:return null}}var sl=!1,dt=!1,T6=typeof WeakSet=="function"?WeakSet:Set,F=null;function Co(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ze(e,t,r)}else n.current=null}function Ru(e,t,n){try{n()}catch(r){ze(e,t,r)}}var Kf=!1;function E6(e,t){if(hu=Fl,e=w2(),Sd(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var l=0,i=-1,c=-1,u=0,d=0,p=e,m=null;t:for(;;){for(var y;p!==n||a!==0&&p.nodeType!==3||(i=l+a),p!==s||r!==0&&p.nodeType!==3||(c=l+r),p.nodeType===3&&(l+=p.nodeValue.length),(y=p.firstChild)!==null;)m=p,p=y;for(;;){if(p===e)break t;if(m===n&&++u===a&&(i=l),m===s&&++d===r&&(c=l),(y=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=y}n=i===-1||c===-1?null:{start:i,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(mu={focusedElem:e,selectionRange:n},Fl=!1,F=t;F!==null;)if(t=F,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,F=e;else for(;F!==null;){t=F;try{var b=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var j=b.memoizedProps,_=b.memoizedState,x=t.stateNode,f=x.getSnapshotBeforeUpdate(t.elementType===t.type?j:Jt(t.type,j),_);x.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(C){ze(t,t.return,C)}if(e=t.sibling,e!==null){e.return=t.return,F=e;break}F=t.return}return b=Kf,Kf=!1,b}function Ma(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var s=a.destroy;a.destroy=void 0,s!==void 0&&Ru(t,n,s)}a=a.next}while(a!==r)}}function ki(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Du(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function jm(e){var t=e.alternate;t!==null&&(e.alternate=null,jm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[yn],delete t[Ja],delete t[vu],delete t[u6],delete t[d6])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function bm(e){return e.tag===5||e.tag===3||e.tag===4}function Gf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||bm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ou(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Vl));else if(r!==4&&(e=e.child,e!==null))for(Ou(e,t,n),e=e.sibling;e!==null;)Ou(e,t,n),e=e.sibling}function Mu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Mu(e,t,n),e=e.sibling;e!==null;)Mu(e,t,n),e=e.sibling}var rt=null,en=!1;function Kn(e,t,n){for(n=n.child;n!==null;)Sm(e,t,n),n=n.sibling}function Sm(e,t,n){if(Cn&&typeof Cn.onCommitFiberUnmount=="function")try{Cn.onCommitFiberUnmount(vi,n)}catch{}switch(n.tag){case 5:dt||Co(n,t);case 6:var r=rt,a=en;rt=null,Kn(e,t,n),rt=r,en=a,rt!==null&&(en?(e=rt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):rt.removeChild(n.stateNode));break;case 18:rt!==null&&(en?(e=rt,n=n.stateNode,e.nodeType===8?yc(e.parentNode,n):e.nodeType===1&&yc(e,n),Ga(e)):yc(rt,n.stateNode));break;case 4:r=rt,a=en,rt=n.stateNode.containerInfo,en=!0,Kn(e,t,n),rt=r,en=a;break;case 0:case 11:case 14:case 15:if(!dt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var s=a,l=s.destroy;s=s.tag,l!==void 0&&(s&2||s&4)&&Ru(n,t,l),a=a.next}while(a!==r)}Kn(e,t,n);break;case 1:if(!dt&&(Co(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(i){ze(n,t,i)}Kn(e,t,n);break;case 21:Kn(e,t,n);break;case 22:n.mode&1?(dt=(r=dt)||n.memoizedState!==null,Kn(e,t,n),dt=r):Kn(e,t,n);break;default:Kn(e,t,n)}}function Yf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new T6),t.forEach(function(r){var a=$6.bind(null,e,r);n.has(r)||(n.add(r),r.then(a,a))})}}function qt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r];try{var s=e,l=t,i=l;e:for(;i!==null;){switch(i.tag){case 5:rt=i.stateNode,en=!1;break e;case 3:rt=i.stateNode.containerInfo,en=!0;break e;case 4:rt=i.stateNode.containerInfo,en=!0;break e}i=i.return}if(rt===null)throw Error(A(160));Sm(s,l,a),rt=null,en=!1;var c=a.alternate;c!==null&&(c.return=null),a.return=null}catch(u){ze(a,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)wm(t,e),t=t.sibling}function wm(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(qt(t,e),hn(e),r&4){try{Ma(3,e,e.return),ki(3,e)}catch(j){ze(e,e.return,j)}try{Ma(5,e,e.return)}catch(j){ze(e,e.return,j)}}break;case 1:qt(t,e),hn(e),r&512&&n!==null&&Co(n,n.return);break;case 5:if(qt(t,e),hn(e),r&512&&n!==null&&Co(n,n.return),e.flags&32){var a=e.stateNode;try{Va(a,"")}catch(j){ze(e,e.return,j)}}if(r&4&&(a=e.stateNode,a!=null)){var s=e.memoizedProps,l=n!==null?n.memoizedProps:s,i=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{i==="input"&&s.type==="radio"&&s.name!=null&&Wh(a,s),ou(i,l);var u=ou(i,s);for(l=0;l<c.length;l+=2){var d=c[l],p=c[l+1];d==="style"?Xh(a,p):d==="dangerouslySetInnerHTML"?Gh(a,p):d==="children"?Va(a,p):ud(a,d,p,u)}switch(i){case"input":Jc(a,s);break;case"textarea":Zh(a,s);break;case"select":var m=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?_o(a,!!s.multiple,y,!1):m!==!!s.multiple&&(s.defaultValue!=null?_o(a,!!s.multiple,s.defaultValue,!0):_o(a,!!s.multiple,s.multiple?[]:"",!1))}a[Ja]=s}catch(j){ze(e,e.return,j)}}break;case 6:if(qt(t,e),hn(e),r&4){if(e.stateNode===null)throw Error(A(162));a=e.stateNode,s=e.memoizedProps;try{a.nodeValue=s}catch(j){ze(e,e.return,j)}}break;case 3:if(qt(t,e),hn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ga(t.containerInfo)}catch(j){ze(e,e.return,j)}break;case 4:qt(t,e),hn(e);break;case 13:qt(t,e),hn(e),a=e.child,a.flags&8192&&(s=a.memoizedState!==null,a.stateNode.isHidden=s,!s||a.alternate!==null&&a.alternate.memoizedState!==null||(Hd=He())),r&4&&Yf(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(dt=(u=dt)||d,qt(t,e),dt=u):qt(t,e),hn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(F=e,d=e.child;d!==null;){for(p=F=d;F!==null;){switch(m=F,y=m.child,m.tag){case 0:case 11:case 14:case 15:Ma(4,m,m.return);break;case 1:Co(m,m.return);var b=m.stateNode;if(typeof b.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,b.props=t.memoizedProps,b.state=t.memoizedState,b.componentWillUnmount()}catch(j){ze(r,n,j)}}break;case 5:Co(m,m.return);break;case 22:if(m.memoizedState!==null){Qf(p);continue}}y!==null?(y.return=m,F=y):Qf(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{a=p.stateNode,u?(s=a.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(i=p.stateNode,c=p.memoizedProps.style,l=c!=null&&c.hasOwnProperty("display")?c.display:null,i.style.display=Yh("display",l))}catch(j){ze(e,e.return,j)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(j){ze(e,e.return,j)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:qt(t,e),hn(e),r&4&&Yf(e);break;case 21:break;default:qt(t,e),hn(e)}}function hn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(bm(n)){var r=n;break e}n=n.return}throw Error(A(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(Va(a,""),r.flags&=-33);var s=Gf(e);Mu(e,s,a);break;case 3:case 4:var l=r.stateNode.containerInfo,i=Gf(e);Ou(e,i,l);break;default:throw Error(A(161))}}catch(c){ze(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function L6(e,t,n){F=e,_m(e)}function _m(e,t,n){for(var r=(e.mode&1)!==0;F!==null;){var a=F,s=a.child;if(a.tag===22&&r){var l=a.memoizedState!==null||sl;if(!l){var i=a.alternate,c=i!==null&&i.memoizedState!==null||dt;i=sl;var u=dt;if(sl=l,(dt=c)&&!u)for(F=a;F!==null;)l=F,c=l.child,l.tag===22&&l.memoizedState!==null?qf(a):c!==null?(c.return=l,F=c):qf(a);for(;s!==null;)F=s,_m(s),s=s.sibling;F=a,sl=i,dt=u}Xf(e)}else a.subtreeFlags&8772&&s!==null?(s.return=a,F=s):Xf(e)}}function Xf(e){for(;F!==null;){var t=F;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:dt||ki(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!dt)if(n===null)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:Jt(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Of(t,s,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Of(t,l,n)}break;case 5:var i=t.stateNode;if(n===null&&t.flags&4){n=i;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Ga(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}dt||t.flags&512&&Du(t)}catch(m){ze(t,t.return,m)}}if(t===e){F=null;break}if(n=t.sibling,n!==null){n.return=t.return,F=n;break}F=t.return}}function Qf(e){for(;F!==null;){var t=F;if(t===e){F=null;break}var n=t.sibling;if(n!==null){n.return=t.return,F=n;break}F=t.return}}function qf(e){for(;F!==null;){var t=F;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ki(4,t)}catch(c){ze(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var a=t.return;try{r.componentDidMount()}catch(c){ze(t,a,c)}}var s=t.return;try{Du(t)}catch(c){ze(t,s,c)}break;case 5:var l=t.return;try{Du(t)}catch(c){ze(t,l,c)}}}catch(c){ze(t,t.return,c)}if(t===e){F=null;break}var i=t.sibling;if(i!==null){i.return=t.return,F=i;break}F=t.return}}var N6=Math.ceil,ti=In.ReactCurrentDispatcher,Fd=In.ReactCurrentOwner,Ut=In.ReactCurrentBatchConfig,he=0,tt=null,We=null,ot=0,Nt=0,jo=vr(0),Ye=0,as=null,Vr=0,Ti=0,Ud=0,Aa=null,wt=null,Hd=0,Bo=1/0,_n=null,ni=!1,Au=null,cr=null,ll=!1,rr=null,ri=0,Pa=0,Pu=null,Ll=-1,Nl=0;function gt(){return he&6?He():Ll!==-1?Ll:Ll=He()}function ur(e){return e.mode&1?he&2&&ot!==0?ot&-ot:f6.transition!==null?(Nl===0&&(Nl=i2()),Nl):(e=ye,e!==0||(e=window.event,e=e===void 0?16:m2(e.type)),e):1}function on(e,t,n,r){if(50<Pa)throw Pa=0,Pu=null,Error(A(185));hs(e,n,r),(!(he&2)||e!==tt)&&(e===tt&&(!(he&2)&&(Ti|=n),Ye===4&&er(e,ot)),Et(e,r),n===1&&he===0&&!(t.mode&1)&&(Bo=He()+500,Si&&yr()))}function Et(e,t){var n=e.callbackNode;f5(e,t);var r=zl(e,e===tt?ot:0);if(r===0)n!==null&&sf(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&sf(n),t===1)e.tag===0?p6(Jf.bind(null,e)):M2(Jf.bind(null,e)),i6(function(){!(he&6)&&yr()}),n=null;else{switch(c2(r)){case 1:n=md;break;case 4:n=s2;break;case 16:n=Il;break;case 536870912:n=l2;break;default:n=Il}n=Om(n,km.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function km(e,t){if(Ll=-1,Nl=0,he&6)throw Error(A(327));var n=e.callbackNode;if(No()&&e.callbackNode!==n)return null;var r=zl(e,e===tt?ot:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=oi(e,r);else{t=r;var a=he;he|=2;var s=Em();(tt!==e||ot!==t)&&(_n=null,Bo=He()+500,Ir(e,t));do try{O6();break}catch(i){Tm(e,i)}while(1);Ed(),ti.current=s,he=a,We!==null?t=0:(tt=null,ot=0,t=Ye)}if(t!==0){if(t===2&&(a=cu(e),a!==0&&(r=a,t=$u(e,a))),t===1)throw n=as,Ir(e,0),er(e,r),Et(e,He()),n;if(t===6)er(e,r);else{if(a=e.current.alternate,!(r&30)&&!R6(a)&&(t=oi(e,r),t===2&&(s=cu(e),s!==0&&(r=s,t=$u(e,s))),t===1))throw n=as,Ir(e,0),er(e,r),Et(e,He()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(A(345));case 2:Or(e,wt,_n);break;case 3:if(er(e,r),(r&130023424)===r&&(t=Hd+500-He(),10<t)){if(zl(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){gt(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=xu(Or.bind(null,e,wt,_n),t);break}Or(e,wt,_n);break;case 4:if(er(e,r),(r&4194240)===r)break;for(t=e.eventTimes,a=-1;0<r;){var l=31-rn(r);s=1<<l,l=t[l],l>a&&(a=l),r&=~s}if(r=a,r=He()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*N6(r/1960))-r,10<r){e.timeoutHandle=xu(Or.bind(null,e,wt,_n),r);break}Or(e,wt,_n);break;case 5:Or(e,wt,_n);break;default:throw Error(A(329))}}}return Et(e,He()),e.callbackNode===n?km.bind(null,e):null}function $u(e,t){var n=Aa;return e.current.memoizedState.isDehydrated&&(Ir(e,t).flags|=256),e=oi(e,t),e!==2&&(t=wt,wt=n,t!==null&&Bu(t)),e}function Bu(e){wt===null?wt=e:wt.push.apply(wt,e)}function R6(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var a=n[r],s=a.getSnapshot;a=a.value;try{if(!an(s(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function er(e,t){for(t&=~Ud,t&=~Ti,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-rn(t),r=1<<n;e[n]=-1,t&=~r}}function Jf(e){if(he&6)throw Error(A(327));No();var t=zl(e,0);if(!(t&1))return Et(e,He()),null;var n=oi(e,t);if(e.tag!==0&&n===2){var r=cu(e);r!==0&&(t=r,n=$u(e,r))}if(n===1)throw n=as,Ir(e,0),er(e,t),Et(e,He()),n;if(n===6)throw Error(A(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Or(e,wt,_n),Et(e,He()),null}function Vd(e,t){var n=he;he|=1;try{return e(t)}finally{he=n,he===0&&(Bo=He()+500,Si&&yr())}}function Wr(e){rr!==null&&rr.tag===0&&!(he&6)&&No();var t=he;he|=1;var n=Ut.transition,r=ye;try{if(Ut.transition=null,ye=1,e)return e()}finally{ye=r,Ut.transition=n,he=t,!(he&6)&&yr()}}function Wd(){Nt=jo.current,Te(jo)}function Ir(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,l6(n)),We!==null)for(n=We.return;n!==null;){var r=n;switch(_d(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Wl();break;case 3:Po(),Te(kt),Te(pt),Md();break;case 5:Od(r);break;case 4:Po();break;case 13:Te(Me);break;case 19:Te(Me);break;case 10:Ld(r.type._context);break;case 22:case 23:Wd()}n=n.return}if(tt=e,We=e=dr(e.current,null),ot=Nt=t,Ye=0,as=null,Ud=Ti=Vr=0,wt=Aa=null,Ar!==null){for(t=0;t<Ar.length;t++)if(n=Ar[t],r=n.interleaved,r!==null){n.interleaved=null;var a=r.next,s=n.pending;if(s!==null){var l=s.next;s.next=a,r.next=l}n.pending=r}Ar=null}return e}function Tm(e,t){do{var n=We;try{if(Ed(),kl.current=ei,Jl){for(var r=Pe.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}Jl=!1}if(Hr=0,Je=Ke=Pe=null,Oa=!1,ns=0,Fd.current=null,n===null||n.return===null){Ye=1,as=t,We=null;break}e:{var s=e,l=n.return,i=n,c=t;if(t=ot,i.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=i,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var y=zf(l);if(y!==null){y.flags&=-257,Ff(y,l,i,s,t),y.mode&1&&If(s,u,t),t=y,c=u;var b=t.updateQueue;if(b===null){var j=new Set;j.add(c),t.updateQueue=j}else b.add(c);break e}else{if(!(t&1)){If(s,u,t),Zd();break e}c=Error(A(426))}}else if(Re&&i.mode&1){var _=zf(l);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Ff(_,l,i,s,t),kd($o(c,i));break e}}s=c=$o(c,i),Ye!==4&&(Ye=2),Aa===null?Aa=[s]:Aa.push(s),s=l;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var x=um(s,c,t);Df(s,x);break e;case 1:i=c;var f=s.type,h=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(cr===null||!cr.has(h)))){s.flags|=65536,t&=-t,s.lanes|=t;var C=dm(s,i,t);Df(s,C);break e}}s=s.return}while(s!==null)}Nm(n)}catch(S){t=S,We===n&&n!==null&&(We=n=n.return);continue}break}while(1)}function Em(){var e=ti.current;return ti.current=ei,e===null?ei:e}function Zd(){(Ye===0||Ye===3||Ye===2)&&(Ye=4),tt===null||!(Vr&268435455)&&!(Ti&268435455)||er(tt,ot)}function oi(e,t){var n=he;he|=2;var r=Em();(tt!==e||ot!==t)&&(_n=null,Ir(e,t));do try{D6();break}catch(a){Tm(e,a)}while(1);if(Ed(),he=n,ti.current=r,We!==null)throw Error(A(261));return tt=null,ot=0,Ye}function D6(){for(;We!==null;)Lm(We)}function O6(){for(;We!==null&&!o5();)Lm(We)}function Lm(e){var t=Dm(e.alternate,e,Nt);e.memoizedProps=e.pendingProps,t===null?Nm(e):We=t,Fd.current=null}function Nm(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=k6(n,t),n!==null){n.flags&=32767,We=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ye=6,We=null;return}}else if(n=_6(n,t,Nt),n!==null){We=n;return}if(t=t.sibling,t!==null){We=t;return}We=t=e}while(t!==null);Ye===0&&(Ye=5)}function Or(e,t,n){var r=ye,a=Ut.transition;try{Ut.transition=null,ye=1,M6(e,t,n,r)}finally{Ut.transition=a,ye=r}return null}function M6(e,t,n,r){do No();while(rr!==null);if(he&6)throw Error(A(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(A(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(h5(e,s),e===tt&&(We=tt=null,ot=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ll||(ll=!0,Om(Il,function(){return No(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ut.transition,Ut.transition=null;var l=ye;ye=1;var i=he;he|=4,Fd.current=null,E6(e,n),wm(n,e),e6(mu),Fl=!!hu,mu=hu=null,e.current=n,L6(n),a5(),he=i,ye=l,Ut.transition=s}else e.current=n;if(ll&&(ll=!1,rr=e,ri=a),s=e.pendingLanes,s===0&&(cr=null),i5(n.stateNode),Et(e,He()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(ni)throw ni=!1,e=Au,Au=null,e;return ri&1&&e.tag!==0&&No(),s=e.pendingLanes,s&1?e===Pu?Pa++:(Pa=0,Pu=e):Pa=0,yr(),null}function No(){if(rr!==null){var e=c2(ri),t=Ut.transition,n=ye;try{if(Ut.transition=null,ye=16>e?16:e,rr===null)var r=!1;else{if(e=rr,rr=null,ri=0,he&6)throw Error(A(331));var a=he;for(he|=4,F=e.current;F!==null;){var s=F,l=s.child;if(F.flags&16){var i=s.deletions;if(i!==null){for(var c=0;c<i.length;c++){var u=i[c];for(F=u;F!==null;){var d=F;switch(d.tag){case 0:case 11:case 15:Ma(8,d,s)}var p=d.child;if(p!==null)p.return=d,F=p;else for(;F!==null;){d=F;var m=d.sibling,y=d.return;if(jm(d),d===u){F=null;break}if(m!==null){m.return=y,F=m;break}F=y}}}var b=s.alternate;if(b!==null){var j=b.child;if(j!==null){b.child=null;do{var _=j.sibling;j.sibling=null,j=_}while(j!==null)}}F=s}}if(s.subtreeFlags&2064&&l!==null)l.return=s,F=l;else e:for(;F!==null;){if(s=F,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ma(9,s,s.return)}var x=s.sibling;if(x!==null){x.return=s.return,F=x;break e}F=s.return}}var f=e.current;for(F=f;F!==null;){l=F;var h=l.child;if(l.subtreeFlags&2064&&h!==null)h.return=l,F=h;else e:for(l=f;F!==null;){if(i=F,i.flags&2048)try{switch(i.tag){case 0:case 11:case 15:ki(9,i)}}catch(S){ze(i,i.return,S)}if(i===l){F=null;break e}var C=i.sibling;if(C!==null){C.return=i.return,F=C;break e}F=i.return}}if(he=a,yr(),Cn&&typeof Cn.onPostCommitFiberRoot=="function")try{Cn.onPostCommitFiberRoot(vi,e)}catch{}r=!0}return r}finally{ye=n,Ut.transition=t}}return!1}function e1(e,t,n){t=$o(n,t),t=um(e,t,1),e=ir(e,t,1),t=gt(),e!==null&&(hs(e,1,t),Et(e,t))}function ze(e,t,n){if(e.tag===3)e1(e,e,n);else for(;t!==null;){if(t.tag===3){e1(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(cr===null||!cr.has(r))){e=$o(n,e),e=dm(t,e,1),t=ir(t,e,1),e=gt(),t!==null&&(hs(t,1,e),Et(t,e));break}}t=t.return}}function A6(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=gt(),e.pingedLanes|=e.suspendedLanes&n,tt===e&&(ot&n)===n&&(Ye===4||Ye===3&&(ot&130023424)===ot&&500>He()-Hd?Ir(e,0):Ud|=n),Et(e,t)}function Rm(e,t){t===0&&(e.mode&1?(t=Qs,Qs<<=1,!(Qs&130023424)&&(Qs=4194304)):t=1);var n=gt();e=Mn(e,t),e!==null&&(hs(e,t,n),Et(e,n))}function P6(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Rm(e,n)}function $6(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(A(314))}r!==null&&r.delete(t),Rm(e,n)}var Dm;Dm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||kt.current)_t=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return _t=!1,w6(e,t,n);_t=!!(e.flags&131072)}else _t=!1,Re&&t.flags&1048576&&A2(t,Gl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;El(e,t),e=t.pendingProps;var a=Oo(t,pt.current);Lo(t,n),a=Pd(null,t,r,e,a,n);var s=$d();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Tt(r)?(s=!0,Zl(t)):s=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Rd(t),a.updater=wi,t.stateNode=a,a._reactInternals=t,wu(t,r,e,n),t=Tu(null,t,r,!0,s,n)):(t.tag=0,Re&&s&&wd(t),mt(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(El(e,t),e=t.pendingProps,a=r._init,r=a(r._payload),t.type=r,a=t.tag=I6(r),e=Jt(r,e),a){case 0:t=ku(null,t,r,e,n);break e;case 1:t=Vf(null,t,r,e,n);break e;case 11:t=Uf(null,t,r,e,n);break e;case 14:t=Hf(null,t,r,Jt(r.type,e),n);break e}throw Error(A(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Jt(r,a),ku(e,t,r,a,n);case 1:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Jt(r,a),Vf(e,t,r,a,n);case 3:e:{if(mm(t),e===null)throw Error(A(387));r=t.pendingProps,s=t.memoizedState,a=s.element,I2(e,t),Ql(t,r,null,n);var l=t.memoizedState;if(r=l.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){a=$o(Error(A(423)),t),t=Wf(e,t,r,n,a);break e}else if(r!==a){a=$o(Error(A(424)),t),t=Wf(e,t,r,n,a);break e}else for(Rt=lr(t.stateNode.containerInfo.firstChild),Dt=t,Re=!0,nn=null,n=H2(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Mo(),r===a){t=An(e,t,n);break e}mt(e,t,r,n)}t=t.child}return t;case 5:return V2(t),e===null&&ju(t),r=t.type,a=t.pendingProps,s=e!==null?e.memoizedProps:null,l=a.children,gu(r,a)?l=null:s!==null&&gu(r,s)&&(t.flags|=32),hm(e,t),mt(e,t,l,n),t.child;case 6:return e===null&&ju(t),null;case 13:return gm(e,t,n);case 4:return Dd(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ao(t,null,r,n):mt(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Jt(r,a),Uf(e,t,r,a,n);case 7:return mt(e,t,t.pendingProps,n),t.child;case 8:return mt(e,t,t.pendingProps.children,n),t.child;case 12:return mt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,s=t.memoizedProps,l=a.value,Se(Yl,r._currentValue),r._currentValue=l,s!==null)if(an(s.value,l)){if(s.children===a.children&&!kt.current){t=An(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var i=s.dependencies;if(i!==null){l=s.child;for(var c=i.firstContext;c!==null;){if(c.context===r){if(s.tag===1){c=Nn(-1,n&-n),c.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),bu(s.return,n,t),i.lanes|=n;break}c=c.next}}else if(s.tag===10)l=s.type===t.type?null:s.child;else if(s.tag===18){if(l=s.return,l===null)throw Error(A(341));l.lanes|=n,i=l.alternate,i!==null&&(i.lanes|=n),bu(l,n,t),l=s.sibling}else l=s.child;if(l!==null)l.return=s;else for(l=s;l!==null;){if(l===t){l=null;break}if(s=l.sibling,s!==null){s.return=l.return,l=s;break}l=l.return}s=l}mt(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,Lo(t,n),a=Vt(a),r=r(a),t.flags|=1,mt(e,t,r,n),t.child;case 14:return r=t.type,a=Jt(r,t.pendingProps),a=Jt(r.type,a),Hf(e,t,r,a,n);case 15:return pm(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Jt(r,a),El(e,t),t.tag=1,Tt(r)?(e=!0,Zl(t)):e=!1,Lo(t,n),F2(t,r,a),wu(t,r,a,n),Tu(null,t,r,!0,e,n);case 19:return xm(e,t,n);case 22:return fm(e,t,n)}throw Error(A(156,t.tag))};function Om(e,t){return a2(e,t)}function B6(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ft(e,t,n,r){return new B6(e,t,n,r)}function Kd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function I6(e){if(typeof e=="function")return Kd(e)?1:0;if(e!=null){if(e=e.$$typeof,e===pd)return 11;if(e===fd)return 14}return 2}function dr(e,t){var n=e.alternate;return n===null?(n=Ft(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Rl(e,t,n,r,a,s){var l=2;if(r=e,typeof e=="function")Kd(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case uo:return zr(n.children,a,s,t);case dd:l=8,a|=8;break;case Gc:return e=Ft(12,n,t,a|2),e.elementType=Gc,e.lanes=s,e;case Yc:return e=Ft(13,n,t,a),e.elementType=Yc,e.lanes=s,e;case Xc:return e=Ft(19,n,t,a),e.elementType=Xc,e.lanes=s,e;case Uh:return Ei(n,a,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case zh:l=10;break e;case Fh:l=9;break e;case pd:l=11;break e;case fd:l=14;break e;case Xn:l=16,r=null;break e}throw Error(A(130,e==null?e:typeof e,""))}return t=Ft(l,n,t,a),t.elementType=e,t.type=r,t.lanes=s,t}function zr(e,t,n,r){return e=Ft(7,e,r,t),e.lanes=n,e}function Ei(e,t,n,r){return e=Ft(22,e,r,t),e.elementType=Uh,e.lanes=n,e.stateNode={isHidden:!1},e}function Tc(e,t,n){return e=Ft(6,e,null,t),e.lanes=n,e}function Ec(e,t,n){return t=Ft(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function z6(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ic(0),this.expirationTimes=ic(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ic(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Gd(e,t,n,r,a,s,l,i,c){return e=new z6(e,t,n,i,c),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Ft(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Rd(s),e}function F6(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:co,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Mm(e){if(!e)return fr;e=e._reactInternals;e:{if(Xr(e)!==e||e.tag!==1)throw Error(A(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Tt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(A(171))}if(e.tag===1){var n=e.type;if(Tt(n))return O2(e,n,t)}return t}function Am(e,t,n,r,a,s,l,i,c){return e=Gd(n,r,!0,e,a,s,l,i,c),e.context=Mm(null),n=e.current,r=gt(),a=ur(n),s=Nn(r,a),s.callback=t??null,ir(n,s,a),e.current.lanes=a,hs(e,a,r),Et(e,r),e}function Li(e,t,n,r){var a=t.current,s=gt(),l=ur(a);return n=Mm(n),t.context===null?t.context=n:t.pendingContext=n,t=Nn(s,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ir(a,t,l),e!==null&&(on(e,a,l,s),_l(e,a,l)),l}function ai(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function t1(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Yd(e,t){t1(e,t),(e=e.alternate)&&t1(e,t)}function U6(){return null}var Pm=typeof reportError=="function"?reportError:function(e){console.error(e)};function Xd(e){this._internalRoot=e}Ni.prototype.render=Xd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(A(409));Li(e,t,null,null)};Ni.prototype.unmount=Xd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Wr(function(){Li(null,e,null,null)}),t[On]=null}};function Ni(e){this._internalRoot=e}Ni.prototype.unstable_scheduleHydration=function(e){if(e){var t=p2();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Jn.length&&t!==0&&t<Jn[n].priority;n++);Jn.splice(n,0,e),n===0&&h2(e)}};function Qd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ri(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function n1(){}function H6(e,t,n,r,a){if(a){if(typeof r=="function"){var s=r;r=function(){var u=ai(l);s.call(u)}}var l=Am(t,r,e,0,null,!1,!1,"",n1);return e._reactRootContainer=l,e[On]=l.current,Qa(e.nodeType===8?e.parentNode:e),Wr(),l}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var i=r;r=function(){var u=ai(c);i.call(u)}}var c=Gd(e,0,!1,null,null,!1,!1,"",n1);return e._reactRootContainer=c,e[On]=c.current,Qa(e.nodeType===8?e.parentNode:e),Wr(function(){Li(t,c,n,r)}),c}function Di(e,t,n,r,a){var s=n._reactRootContainer;if(s){var l=s;if(typeof a=="function"){var i=a;a=function(){var c=ai(l);i.call(c)}}Li(t,l,e,a)}else l=H6(n,t,e,a,r);return ai(l)}u2=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ya(t.pendingLanes);n!==0&&(gd(t,n|1),Et(t,He()),!(he&6)&&(Bo=He()+500,yr()))}break;case 13:Wr(function(){var r=Mn(e,1);if(r!==null){var a=gt();on(r,e,1,a)}}),Yd(e,1)}};xd=function(e){if(e.tag===13){var t=Mn(e,134217728);if(t!==null){var n=gt();on(t,e,134217728,n)}Yd(e,134217728)}};d2=function(e){if(e.tag===13){var t=ur(e),n=Mn(e,t);if(n!==null){var r=gt();on(n,e,t,r)}Yd(e,t)}};p2=function(){return ye};f2=function(e,t){var n=ye;try{return ye=e,t()}finally{ye=n}};su=function(e,t,n){switch(t){case"input":if(Jc(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=bi(r);if(!a)throw Error(A(90));Vh(r),Jc(r,a)}}}break;case"textarea":Zh(e,n);break;case"select":t=n.value,t!=null&&_o(e,!!n.multiple,t,!1)}};Jh=Vd;e2=Wr;var V6={usingClientEntryPoint:!1,Events:[gs,mo,bi,Qh,qh,Vd]},ia={findFiberByHostInstance:Mr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},W6={bundleType:ia.bundleType,version:ia.version,rendererPackageName:ia.rendererPackageName,rendererConfig:ia.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:In.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=r2(e),e===null?null:e.stateNode},findFiberByHostInstance:ia.findFiberByHostInstance||U6,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var il=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!il.isDisabled&&il.supportsFiber)try{vi=il.inject(W6),Cn=il}catch{}}Mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=V6;Mt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Qd(t))throw Error(A(200));return F6(e,t,null,n)};Mt.createRoot=function(e,t){if(!Qd(e))throw Error(A(299));var n=!1,r="",a=Pm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=Gd(e,1,!1,null,null,n,!1,r,a),e[On]=t.current,Qa(e.nodeType===8?e.parentNode:e),new Xd(t)};Mt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(A(188)):(e=Object.keys(e).join(","),Error(A(268,e)));return e=r2(t),e=e===null?null:e.stateNode,e};Mt.flushSync=function(e){return Wr(e)};Mt.hydrate=function(e,t,n){if(!Ri(t))throw Error(A(200));return Di(null,e,t,!0,n)};Mt.hydrateRoot=function(e,t,n){if(!Qd(e))throw Error(A(405));var r=n!=null&&n.hydratedSources||null,a=!1,s="",l=Pm;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Am(t,null,e,1,n??null,a,!1,s,l),e[On]=t.current,Qa(e),r)for(e=0;e<r.length;e++)n=r[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new Ni(t)};Mt.render=function(e,t,n){if(!Ri(t))throw Error(A(200));return Di(null,e,t,!1,n)};Mt.unmountComponentAtNode=function(e){if(!Ri(e))throw Error(A(40));return e._reactRootContainer?(Wr(function(){Di(null,null,e,!1,function(){e._reactRootContainer=null,e[On]=null})}),!0):!1};Mt.unstable_batchedUpdates=Vd;Mt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ri(n))throw Error(A(200));if(e==null||e._reactInternals===void 0)throw Error(A(38));return Di(e,t,n,!1,r)};Mt.version="18.2.0-next-9e3b772b8-20220608";function $m(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($m)}catch(e){console.error(e)}}$m(),Ah.exports=Mt;var Tn=Ah.exports;const Z6=Bn(Tn),K6=wh({__proto__:null,default:Z6},[Tn]);var r1=Tn;Zc.createRoot=r1.createRoot,Zc.hydrateRoot=r1.hydrateRoot;function G6(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,s;for(s=0;s<r.length;s++)a=r[s],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Y6(e,t){if(e==null)return{};var n=G6(e,t),r,a;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Iu(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function X6(e){if(Array.isArray(e))return Iu(e)}function Q6(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function q6(e,t){if(e){if(typeof e=="string")return Iu(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Iu(e,t)}}function J6(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function e8(e){return X6(e)||Q6(e)||q6(e)||J6()}function ss(e){"@babel/helpers - typeof";return ss=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ss(e)}function t8(e,t){if(ss(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(ss(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function n8(e){var t=t8(e,"string");return ss(t)=="symbol"?t:String(t)}function Bm(e,t,n){return t=n8(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function zu(){return zu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},zu.apply(this,arguments)}function o1(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function bo(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?o1(Object(n),!0).forEach(function(r){Bm(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o1(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function r8(e){var t=e.length;if(t===0||t===1)return e;if(t===2)return[e[0],e[1],"".concat(e[0],".").concat(e[1]),"".concat(e[1],".").concat(e[0])];if(t===3)return[e[0],e[1],e[2],"".concat(e[0],".").concat(e[1]),"".concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[0]),"".concat(e[1],".").concat(e[2]),"".concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[1],".").concat(e[0])];if(t>=4)return[e[0],e[1],e[2],e[3],"".concat(e[0],".").concat(e[1]),"".concat(e[0],".").concat(e[2]),"".concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[0]),"".concat(e[1],".").concat(e[2]),"".concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[1]),"".concat(e[2],".").concat(e[3]),"".concat(e[3],".").concat(e[0]),"".concat(e[3],".").concat(e[1]),"".concat(e[3],".").concat(e[2]),"".concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[1],".").concat(e[3]),"".concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[2],".").concat(e[3]),"".concat(e[0],".").concat(e[3],".").concat(e[1]),"".concat(e[0],".").concat(e[3],".").concat(e[2]),"".concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[1],".").concat(e[2],".").concat(e[3]),"".concat(e[1],".").concat(e[3],".").concat(e[0]),"".concat(e[1],".").concat(e[3],".").concat(e[2]),"".concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[0],".").concat(e[3]),"".concat(e[2],".").concat(e[1],".").concat(e[0]),"".concat(e[2],".").concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[3],".").concat(e[0]),"".concat(e[2],".").concat(e[3],".").concat(e[1]),"".concat(e[3],".").concat(e[0],".").concat(e[1]),"".concat(e[3],".").concat(e[0],".").concat(e[2]),"".concat(e[3],".").concat(e[1],".").concat(e[0]),"".concat(e[3],".").concat(e[1],".").concat(e[2]),"".concat(e[3],".").concat(e[2],".").concat(e[0]),"".concat(e[3],".").concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[1],".").concat(e[2],".").concat(e[3]),"".concat(e[0],".").concat(e[1],".").concat(e[3],".").concat(e[2]),"".concat(e[0],".").concat(e[2],".").concat(e[1],".").concat(e[3]),"".concat(e[0],".").concat(e[2],".").concat(e[3],".").concat(e[1]),"".concat(e[0],".").concat(e[3],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[3],".").concat(e[2],".").concat(e[1]),"".concat(e[1],".").concat(e[0],".").concat(e[2],".").concat(e[3]),"".concat(e[1],".").concat(e[0],".").concat(e[3],".").concat(e[2]),"".concat(e[1],".").concat(e[2],".").concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[2],".").concat(e[3],".").concat(e[0]),"".concat(e[1],".").concat(e[3],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[3],".").concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[0],".").concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[0],".").concat(e[3],".").concat(e[1]),"".concat(e[2],".").concat(e[1],".").concat(e[0],".").concat(e[3]),"".concat(e[2],".").concat(e[1],".").concat(e[3],".").concat(e[0]),"".concat(e[2],".").concat(e[3],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[3],".").concat(e[1],".").concat(e[0]),"".concat(e[3],".").concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[3],".").concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[3],".").concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[3],".").concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[3],".").concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[3],".").concat(e[2],".").concat(e[1],".").concat(e[0])]}var Lc={};function o8(e){if(e.length===0||e.length===1)return e;var t=e.join(".");return Lc[t]||(Lc[t]=r8(e)),Lc[t]}function a8(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,r=e.filter(function(s){return s!=="token"}),a=o8(r);return a.reduce(function(s,l){return bo(bo({},s),n[l])},t)}function a1(e){return e.join(" ")}function s8(e,t){var n=0;return function(r){return n+=1,r.map(function(a,s){return Im({node:a,stylesheet:e,useInlineStyles:t,key:"code-segment-".concat(n,"-").concat(s)})})}}function Im(e){var t=e.node,n=e.stylesheet,r=e.style,a=r===void 0?{}:r,s=e.useInlineStyles,l=e.key,i=t.properties,c=t.type,u=t.tagName,d=t.value;if(c==="text")return d;if(u){var p=s8(n,s),m;if(!s)m=bo(bo({},i),{},{className:a1(i.className)});else{var y=Object.keys(n).reduce(function(x,f){return f.split(".").forEach(function(h){x.includes(h)||x.push(h)}),x},[]),b=i.className&&i.className.includes("token")?["token"]:[],j=i.className&&b.concat(i.className.filter(function(x){return!y.includes(x)}));m=bo(bo({},i),{},{className:a1(j)||void 0,style:a8(i.className,Object.assign({},i.style,a),n)})}var _=p(t.children);return ee.createElement(u,zu({key:l},m),_)}}const l8=function(e,t){var n=e.listLanguages();return n.indexOf(t)!==-1};var i8=["language","children","style","customStyle","codeTagProps","useInlineStyles","showLineNumbers","showInlineLineNumbers","startingLineNumber","lineNumberContainerStyle","lineNumberStyle","wrapLines","wrapLongLines","lineProps","renderer","PreTag","CodeTag","code","astGenerator"];function s1(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function vn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?s1(Object(n),!0).forEach(function(r){Bm(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s1(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var c8=/\n/g;function u8(e){return e.match(c8)}function d8(e){var t=e.lines,n=e.startingLineNumber,r=e.style;return t.map(function(a,s){var l=s+n;return ee.createElement("span",{key:"line-".concat(s),className:"react-syntax-highlighter-line-number",style:typeof r=="function"?r(l):r},"".concat(l,`
`))})}function p8(e){var t=e.codeString,n=e.codeStyle,r=e.containerStyle,a=r===void 0?{float:"left",paddingRight:"10px"}:r,s=e.numberStyle,l=s===void 0?{}:s,i=e.startingLineNumber;return ee.createElement("code",{style:Object.assign({},n,a)},d8({lines:t.replace(/\n$/,"").split(`
`),style:l,startingLineNumber:i}))}function f8(e){return"".concat(e.toString().length,".25em")}function zm(e,t){return{type:"element",tagName:"span",properties:{key:"line-number--".concat(e),className:["comment","linenumber","react-syntax-highlighter-line-number"],style:t},children:[{type:"text",value:e}]}}function Fm(e,t,n){var r={display:"inline-block",minWidth:f8(n),paddingRight:"1em",textAlign:"right",userSelect:"none"},a=typeof e=="function"?e(t):e,s=vn(vn({},r),a);return s}function Dl(e){var t=e.children,n=e.lineNumber,r=e.lineNumberStyle,a=e.largestLineNumber,s=e.showInlineLineNumbers,l=e.lineProps,i=l===void 0?{}:l,c=e.className,u=c===void 0?[]:c,d=e.showLineNumbers,p=e.wrapLongLines,m=typeof i=="function"?i(n):i;if(m.className=u,n&&s){var y=Fm(r,n,a);t.unshift(zm(n,y))}return p&d&&(m.style=vn(vn({},m.style),{},{display:"flex"})),{type:"element",tagName:"span",properties:m,children:t}}function Um(e){for(var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],r=0;r<e.length;r++){var a=e[r];if(a.type==="text")n.push(Dl({children:[a],className:e8(new Set(t))}));else if(a.children){var s=t.concat(a.properties.className);Um(a.children,s).forEach(function(l){return n.push(l)})}}return n}function h8(e,t,n,r,a,s,l,i,c){var u,d=Um(e.value),p=[],m=-1,y=0;function b(S,g){var w=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return Dl({children:S,lineNumber:g,lineNumberStyle:i,largestLineNumber:l,showInlineLineNumbers:a,lineProps:n,className:w,showLineNumbers:r,wrapLongLines:c})}function j(S,g){if(r&&g&&a){var w=Fm(i,g,l);S.unshift(zm(g,w))}return S}function _(S,g){var w=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return t||w.length>0?b(S,g,w):j(S,g)}for(var x=function(){var g=d[y],w=g.children[0].value,T=u8(w);if(T){var E=w.split(`
`);E.forEach(function(D,P){var G=r&&p.length+s,Q={type:"text",value:"".concat(D,`
`)};if(P===0){var Y=d.slice(m+1,y).concat(Dl({children:[Q],className:g.properties.className})),ne=_(Y,G);p.push(ne)}else if(P===E.length-1){var oe=d[y+1]&&d[y+1].children&&d[y+1].children[0],H={type:"text",value:"".concat(D)};if(oe){var O=Dl({children:[H],className:g.properties.className});d.splice(y+1,0,O)}else{var B=[H],I=_(B,G,g.properties.className);p.push(I)}}else{var U=[Q],V=_(U,G,g.properties.className);p.push(V)}}),m=y}y++};y<d.length;)x();if(m!==d.length-1){var f=d.slice(m+1,d.length);if(f&&f.length){var h=r&&p.length+s,C=_(f,h);p.push(C)}}return t?p:(u=[]).concat.apply(u,p)}function m8(e){var t=e.rows,n=e.stylesheet,r=e.useInlineStyles;return t.map(function(a,s){return Im({node:a,stylesheet:n,useInlineStyles:r,key:"code-segement".concat(s)})})}function Hm(e){return e&&typeof e.highlightAuto<"u"}function g8(e){var t=e.astGenerator,n=e.language,r=e.code,a=e.defaultCodeValue;if(Hm(t)){var s=l8(t,n);return n==="text"?{value:a,language:"text"}:s?t.highlight(n,r):t.highlightAuto(r)}try{return n&&n!=="text"?{value:t.highlight(r,n)}:{value:a}}catch{return{value:a}}}function x8(e,t){return function(r){var a=r.language,s=r.children,l=r.style,i=l===void 0?t:l,c=r.customStyle,u=c===void 0?{}:c,d=r.codeTagProps,p=d===void 0?{className:a?"language-".concat(a):void 0,style:vn(vn({},i['code[class*="language-"]']),i['code[class*="language-'.concat(a,'"]')])}:d,m=r.useInlineStyles,y=m===void 0?!0:m,b=r.showLineNumbers,j=b===void 0?!1:b,_=r.showInlineLineNumbers,x=_===void 0?!0:_,f=r.startingLineNumber,h=f===void 0?1:f,C=r.lineNumberContainerStyle,S=r.lineNumberStyle,g=S===void 0?{}:S,w=r.wrapLines,T=r.wrapLongLines,E=T===void 0?!1:T,D=r.lineProps,P=D===void 0?{}:D,G=r.renderer,Q=r.PreTag,Y=Q===void 0?"pre":Q,ne=r.CodeTag,oe=ne===void 0?"code":ne,H=r.code,O=H===void 0?(Array.isArray(s)?s[0]:s)||"":H,B=r.astGenerator,I=Y6(r,i8);B=B||e;var U=j?ee.createElement(p8,{containerStyle:C,codeStyle:p.style||{},numberStyle:g,startingLineNumber:h,codeString:O}):null,V=i.hljs||i['pre[class*="language-"]']||{backgroundColor:"#fff"},je=Hm(B)?"hljs":"prismjs",se=y?Object.assign({},I,{style:Object.assign({},V,u)}):Object.assign({},I,{className:I.className?"".concat(je," ").concat(I.className):je,style:Object.assign({},u)});if(E?p.style=vn(vn({},p.style),{},{whiteSpace:"pre-wrap"}):p.style=vn(vn({},p.style),{},{whiteSpace:"pre"}),!B)return ee.createElement(Y,se,U,ee.createElement(oe,p,O));(w===void 0&&G||E)&&(w=!0),G=G||m8;var ve=[{type:"text",value:O}],ae=g8({astGenerator:B,language:a,code:O,defaultCodeValue:ve});ae.language===null&&(ae.value=ve);var Ee=ae.value.length+h,lt=h8(ae,w,P,j,x,h,Ee,g,E);return ee.createElement(Y,se,ee.createElement(oe,p,!x&&U,G({rows:lt,stylesheet:i,useInlineStyles:y})))}}var v8=C8,y8=Object.prototype.hasOwnProperty;function C8(){for(var e={},t=0;t<arguments.length;t++){var n=arguments[t];for(var r in n)y8.call(n,r)&&(e[r]=n[r])}return e}var Vm=Wm,qd=Wm.prototype;qd.space=null;qd.normal={};qd.property={};function Wm(e,t,n){this.property=e,this.normal=t,n&&(this.space=n)}var l1=v8,j8=Vm,b8=S8;function S8(e){for(var t=e.length,n=[],r=[],a=-1,s,l;++a<t;)s=e[a],n.push(s.property),r.push(s.normal),l=s.space;return new j8(l1.apply(null,n),l1.apply(null,r),l)}var Jd=w8;function w8(e){return e.toLowerCase()}var Zm=Km,Kt=Km.prototype;Kt.space=null;Kt.attribute=null;Kt.property=null;Kt.boolean=!1;Kt.booleanish=!1;Kt.overloadedBoolean=!1;Kt.number=!1;Kt.commaSeparated=!1;Kt.spaceSeparated=!1;Kt.commaOrSpaceSeparated=!1;Kt.mustUseProperty=!1;Kt.defined=!1;function Km(e,t){this.property=e,this.attribute=t}var bn={},_8=0;bn.boolean=Qr();bn.booleanish=Qr();bn.overloadedBoolean=Qr();bn.number=Qr();bn.spaceSeparated=Qr();bn.commaSeparated=Qr();bn.commaOrSpaceSeparated=Qr();function Qr(){return Math.pow(2,++_8)}var Gm=Zm,i1=bn,Ym=ep;ep.prototype=new Gm;ep.prototype.defined=!0;var Xm=["boolean","booleanish","overloadedBoolean","number","commaSeparated","spaceSeparated","commaOrSpaceSeparated"],k8=Xm.length;function ep(e,t,n,r){var a=-1,s;for(c1(this,"space",r),Gm.call(this,e,t);++a<k8;)s=Xm[a],c1(this,s,(n&i1[s])===i1[s])}function c1(e,t,n){n&&(e[t]=n)}var u1=Jd,T8=Vm,E8=Ym,vs=L8;function L8(e){var t=e.space,n=e.mustUseProperty||[],r=e.attributes||{},a=e.properties,s=e.transform,l={},i={},c,u;for(c in a)u=new E8(c,s(r,c),a[c],t),n.indexOf(c)!==-1&&(u.mustUseProperty=!0),l[c]=u,i[u1(c)]=c,i[u1(u.attribute)]=c;return new T8(l,i,t)}var N8=vs,R8=N8({space:"xlink",transform:D8,properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}});function D8(e,t){return"xlink:"+t.slice(5).toLowerCase()}var O8=vs,M8=O8({space:"xml",transform:A8,properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function A8(e,t){return"xml:"+t.slice(3).toLowerCase()}var P8=$8;function $8(e,t){return t in e?e[t]:t}var B8=P8,Qm=I8;function I8(e,t){return B8(e,t.toLowerCase())}var z8=vs,F8=Qm,U8=z8({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:F8,properties:{xmlns:null,xmlnsXLink:null}}),tp=bn,H8=vs,St=tp.booleanish,Pt=tp.number,Rr=tp.spaceSeparated,V8=H8({transform:W8,properties:{ariaActiveDescendant:null,ariaAtomic:St,ariaAutoComplete:null,ariaBusy:St,ariaChecked:St,ariaColCount:Pt,ariaColIndex:Pt,ariaColSpan:Pt,ariaControls:Rr,ariaCurrent:null,ariaDescribedBy:Rr,ariaDetails:null,ariaDisabled:St,ariaDropEffect:Rr,ariaErrorMessage:null,ariaExpanded:St,ariaFlowTo:Rr,ariaGrabbed:St,ariaHasPopup:null,ariaHidden:St,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Rr,ariaLevel:Pt,ariaLive:null,ariaModal:St,ariaMultiLine:St,ariaMultiSelectable:St,ariaOrientation:null,ariaOwns:Rr,ariaPlaceholder:null,ariaPosInSet:Pt,ariaPressed:St,ariaReadOnly:St,ariaRelevant:null,ariaRequired:St,ariaRoleDescription:Rr,ariaRowCount:Pt,ariaRowIndex:Pt,ariaRowSpan:Pt,ariaSelected:St,ariaSetSize:Pt,ariaSort:null,ariaValueMax:Pt,ariaValueMin:Pt,ariaValueNow:Pt,ariaValueText:null,role:null}});function W8(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}var Ho=bn,Z8=vs,K8=Qm,ce=Ho.boolean,G8=Ho.overloadedBoolean,ca=Ho.booleanish,_e=Ho.number,ht=Ho.spaceSeparated,cl=Ho.commaSeparated,Y8=Z8({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:K8,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:cl,acceptCharset:ht,accessKey:ht,action:null,allow:null,allowFullScreen:ce,allowPaymentRequest:ce,allowUserMedia:ce,alt:null,as:null,async:ce,autoCapitalize:null,autoComplete:ht,autoFocus:ce,autoPlay:ce,capture:ce,charSet:null,checked:ce,cite:null,className:ht,cols:_e,colSpan:null,content:null,contentEditable:ca,controls:ce,controlsList:ht,coords:_e|cl,crossOrigin:null,data:null,dateTime:null,decoding:null,default:ce,defer:ce,dir:null,dirName:null,disabled:ce,download:G8,draggable:ca,encType:null,enterKeyHint:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:ce,formTarget:null,headers:ht,height:_e,hidden:ce,high:_e,href:null,hrefLang:null,htmlFor:ht,httpEquiv:ht,id:null,imageSizes:null,imageSrcSet:cl,inputMode:null,integrity:null,is:null,isMap:ce,itemId:null,itemProp:ht,itemRef:ht,itemScope:ce,itemType:ht,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:ce,low:_e,manifest:null,max:null,maxLength:_e,media:null,method:null,min:null,minLength:_e,multiple:ce,muted:ce,name:null,nonce:null,noModule:ce,noValidate:ce,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforePrint:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextMenu:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:ce,optimum:_e,pattern:null,ping:ht,placeholder:null,playsInline:ce,poster:null,preload:null,readOnly:ce,referrerPolicy:null,rel:ht,required:ce,reversed:ce,rows:_e,rowSpan:_e,sandbox:ht,scope:null,scoped:ce,seamless:ce,selected:ce,shape:null,size:_e,sizes:null,slot:null,span:_e,spellCheck:ca,src:null,srcDoc:null,srcLang:null,srcSet:cl,start:_e,step:null,style:null,tabIndex:_e,target:null,title:null,translate:null,type:null,typeMustMatch:ce,useMap:null,value:ca,width:_e,wrap:null,align:null,aLink:null,archive:ht,axis:null,background:null,bgColor:null,border:_e,borderColor:null,bottomMargin:_e,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:ce,declare:ce,event:null,face:null,frame:null,frameBorder:null,hSpace:_e,leftMargin:_e,link:null,longDesc:null,lowSrc:null,marginHeight:_e,marginWidth:_e,noResize:ce,noHref:ce,noShade:ce,noWrap:ce,object:null,profile:null,prompt:null,rev:null,rightMargin:_e,rules:null,scheme:null,scrolling:ca,standby:null,summary:null,text:null,topMargin:_e,valueType:null,version:null,vAlign:null,vLink:null,vSpace:_e,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:ce,disableRemotePlayback:ce,prefix:null,property:null,results:_e,security:null,unselectable:null}}),X8=b8,Q8=R8,q8=M8,J8=U8,e7=V8,t7=Y8,n7=X8([q8,Q8,J8,e7,t7]),r7=Jd,o7=Ym,a7=Zm,np="data",s7=c7,l7=/^data[-\w.:]+$/i,qm=/-[a-z]/g,i7=/[A-Z]/g;function c7(e,t){var n=r7(t),r=t,a=a7;return n in e.normal?e.property[e.normal[n]]:(n.length>4&&n.slice(0,4)===np&&l7.test(t)&&(t.charAt(4)==="-"?r=u7(t):t=d7(t),a=o7),new a(r,t))}function u7(e){var t=e.slice(5).replace(qm,f7);return np+t.charAt(0).toUpperCase()+t.slice(1)}function d7(e){var t=e.slice(4);return qm.test(t)?e:(t=t.replace(i7,p7),t.charAt(0)!=="-"&&(t="-"+t),np+t)}function p7(e){return"-"+e.toLowerCase()}function f7(e){return e.charAt(1).toUpperCase()}var h7=m7,d1=/[#.]/g;function m7(e,t){for(var n=e||"",r=t||"div",a={},s=0,l,i,c;s<n.length;)d1.lastIndex=s,c=d1.exec(n),l=n.slice(s,c?c.index:n.length),l&&(i?i==="#"?a.id=l:a.className?a.className.push(l):a.className=[l]:r=l,s+=l.length),c&&(i=c[0],s++);return{type:"element",tagName:r,properties:a,children:[]}}var rp={};rp.parse=v7;rp.stringify=y7;var p1="",g7=" ",x7=/[ \t\n\r\f]+/g;function v7(e){var t=String(e||p1).trim();return t===p1?[]:t.split(x7)}function y7(e){return e.join(g7).trim()}var op={};op.parse=C7;op.stringify=j7;var Fu=",",f1=" ",ja="";function C7(e){for(var t=[],n=String(e||ja),r=n.indexOf(Fu),a=0,s=!1,l;!s;)r===-1&&(r=n.length,s=!0),l=n.slice(a,r).trim(),(l||!s)&&t.push(l),a=r+1,r=n.indexOf(Fu,a);return t}function j7(e,t){var n=t||{},r=n.padLeft===!1?ja:f1,a=n.padRight?f1:ja;return e[e.length-1]===ja&&(e=e.concat(ja)),e.join(a+Fu+r).trim()}var b7=s7,h1=Jd,S7=h7,m1=rp.parse,g1=op.parse,w7=k7,_7={}.hasOwnProperty;function k7(e,t,n){var r=n?R7(n):null;return a;function a(l,i){var c=S7(l,t),u=Array.prototype.slice.call(arguments,2),d=c.tagName.toLowerCase(),p;if(c.tagName=r&&_7.call(r,d)?r[d]:d,i&&T7(i,c)&&(u.unshift(i),i=null),i)for(p in i)s(c.properties,p,i[p]);return Jm(c.children,u),c.tagName==="template"&&(c.content={type:"root",children:c.children},c.children=[]),c}function s(l,i,c){var u,d,p;c==null||c!==c||(u=b7(e,i),d=u.property,p=c,typeof p=="string"&&(u.spaceSeparated?p=m1(p):u.commaSeparated?p=g1(p):u.commaOrSpaceSeparated&&(p=m1(g1(p).join(" ")))),d==="style"&&typeof c!="string"&&(p=N7(p)),d==="className"&&l.className&&(p=l.className.concat(p)),l[d]=L7(u,d,p))}}function T7(e,t){return typeof e=="string"||"length"in e||E7(t.tagName,e)}function E7(e,t){var n=t.type;return e==="input"||!n||typeof n!="string"?!1:typeof t.children=="object"&&"length"in t.children?!0:(n=n.toLowerCase(),e==="button"?n!=="menu"&&n!=="submit"&&n!=="reset"&&n!=="button":"value"in t)}function Jm(e,t){var n,r;if(typeof t=="string"||typeof t=="number"){e.push({type:"text",value:String(t)});return}if(typeof t=="object"&&"length"in t){for(n=-1,r=t.length;++n<r;)Jm(e,t[n]);return}if(typeof t!="object"||!("type"in t))throw new Error("Expected node, nodes, or string, got `"+t+"`");e.push(t)}function L7(e,t,n){var r,a,s;if(typeof n!="object"||!("length"in n))return x1(e,t,n);for(a=n.length,r=-1,s=[];++r<a;)s[r]=x1(e,t,n[r]);return s}function x1(e,t,n){var r=n;return e.number||e.positiveNumber?!isNaN(r)&&r!==""&&(r=Number(r)):(e.boolean||e.overloadedBoolean)&&typeof r=="string"&&(r===""||h1(n)===h1(t))&&(r=!0),r}function N7(e){var t=[],n;for(n in e)t.push([n,e[n]].join(": "));return t.join("; ")}function R7(e){for(var t=e.length,n=-1,r={},a;++n<t;)a=e[n],r[a.toLowerCase()]=a;return r}var D7=n7,O7=w7,e3=O7(D7,"div");e3.displayName="html";var M7=e3,A7=M7;const P7="Æ",$7="&",B7="Á",I7="Â",z7="À",F7="Å",U7="Ã",H7="Ä",V7="©",W7="Ç",Z7="Ð",K7="É",G7="Ê",Y7="È",X7="Ë",Q7=">",q7="Í",J7="Î",ev="Ì",tv="Ï",nv="<",rv="Ñ",ov="Ó",av="Ô",sv="Ò",lv="Ø",iv="Õ",cv="Ö",uv='"',dv="®",pv="Þ",fv="Ú",hv="Û",mv="Ù",gv="Ü",xv="Ý",vv="á",yv="â",Cv="´",jv="æ",bv="à",Sv="&",wv="å",_v="ã",kv="ä",Tv="¦",Ev="ç",Lv="¸",Nv="¢",Rv="©",Dv="¤",Ov="°",Mv="÷",Av="é",Pv="ê",$v="è",Bv="ð",Iv="ë",zv="½",Fv="¼",Uv="¾",Hv=">",Vv="í",Wv="î",Zv="¡",Kv="ì",Gv="¿",Yv="ï",Xv="«",Qv="<",qv="¯",Jv="µ",e9="·",t9=" ",n9="¬",r9="ñ",o9="ó",a9="ô",s9="ò",l9="ª",i9="º",c9="ø",u9="õ",d9="ö",p9="¶",f9="±",h9="£",m9='"',g9="»",x9="®",v9="§",y9="­",C9="¹",j9="²",b9="³",S9="ß",w9="þ",_9="×",k9="ú",T9="û",E9="ù",L9="¨",N9="ü",R9="ý",D9="¥",O9="ÿ",M9={AElig:P7,AMP:$7,Aacute:B7,Acirc:I7,Agrave:z7,Aring:F7,Atilde:U7,Auml:H7,COPY:V7,Ccedil:W7,ETH:Z7,Eacute:K7,Ecirc:G7,Egrave:Y7,Euml:X7,GT:Q7,Iacute:q7,Icirc:J7,Igrave:ev,Iuml:tv,LT:nv,Ntilde:rv,Oacute:ov,Ocirc:av,Ograve:sv,Oslash:lv,Otilde:iv,Ouml:cv,QUOT:uv,REG:dv,THORN:pv,Uacute:fv,Ucirc:hv,Ugrave:mv,Uuml:gv,Yacute:xv,aacute:vv,acirc:yv,acute:Cv,aelig:jv,agrave:bv,amp:Sv,aring:wv,atilde:_v,auml:kv,brvbar:Tv,ccedil:Ev,cedil:Lv,cent:Nv,copy:Rv,curren:Dv,deg:Ov,divide:Mv,eacute:Av,ecirc:Pv,egrave:$v,eth:Bv,euml:Iv,frac12:zv,frac14:Fv,frac34:Uv,gt:Hv,iacute:Vv,icirc:Wv,iexcl:Zv,igrave:Kv,iquest:Gv,iuml:Yv,laquo:Xv,lt:Qv,macr:qv,micro:Jv,middot:e9,nbsp:t9,not:n9,ntilde:r9,oacute:o9,ocirc:a9,ograve:s9,ordf:l9,ordm:i9,oslash:c9,otilde:u9,ouml:d9,para:p9,plusmn:f9,pound:h9,quot:m9,raquo:g9,reg:x9,sect:v9,shy:y9,sup1:C9,sup2:j9,sup3:b9,szlig:S9,thorn:w9,times:_9,uacute:k9,ucirc:T9,ugrave:E9,uml:L9,uuml:N9,yacute:R9,yen:D9,yuml:O9},A9={0:"�",128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"};var t3=P9;function P9(e){var t=typeof e=="string"?e.charCodeAt(0):e;return t>=48&&t<=57}var $9=B9;function B9(e){var t=typeof e=="string"?e.charCodeAt(0):e;return t>=97&&t<=102||t>=65&&t<=70||t>=48&&t<=57}var I9=z9;function z9(e){var t=typeof e=="string"?e.charCodeAt(0):e;return t>=97&&t<=122||t>=65&&t<=90}var F9=I9,U9=t3,H9=V9;function V9(e){return F9(e)||U9(e)}var ul,W9=59,Z9=K9;function K9(e){var t="&"+e+";",n;return ul=ul||document.createElement("i"),ul.innerHTML=t,n=ul.textContent,n.charCodeAt(n.length-1)===W9&&e!=="semi"||n===t?!1:n}var v1=M9,y1=A9,G9=t3,Y9=$9,n3=H9,X9=Z9,Q9=uy,q9={}.hasOwnProperty,lo=String.fromCharCode,J9=Function.prototype,C1={warning:null,reference:null,text:null,warningContext:null,referenceContext:null,textContext:null,position:{},additional:null,attribute:!1,nonTerminated:!0},ey=9,j1=10,ty=12,ny=32,b1=38,ry=59,oy=60,ay=61,sy=35,ly=88,iy=120,cy=65533,io="named",ap="hexadecimal",sp="decimal",lp={};lp[ap]=16;lp[sp]=10;var Oi={};Oi[io]=n3;Oi[sp]=G9;Oi[ap]=Y9;var r3=1,o3=2,a3=3,s3=4,l3=5,Uu=6,i3=7,Cr={};Cr[r3]="Named character references must be terminated by a semicolon";Cr[o3]="Numeric character references must be terminated by a semicolon";Cr[a3]="Named character references cannot be empty";Cr[s3]="Numeric character references cannot be empty";Cr[l3]="Named character references must be known";Cr[Uu]="Numeric character references cannot be disallowed";Cr[i3]="Numeric character references cannot be outside the permissible Unicode range";function uy(e,t){var n={},r,a;t||(t={});for(a in C1)r=t[a],n[a]=r??C1[a];return(n.position.indent||n.position.start)&&(n.indent=n.position.indent||[],n.position=n.position.start),dy(e,n)}function dy(e,t){var n=t.additional,r=t.nonTerminated,a=t.text,s=t.reference,l=t.warning,i=t.textContext,c=t.referenceContext,u=t.warningContext,d=t.position,p=t.indent||[],m=e.length,y=0,b=-1,j=d.column||1,_=d.line||1,x="",f=[],h,C,S,g,w,T,E,D,P,G,Q,Y,ne,oe,H,O,B,I,U;for(typeof n=="string"&&(n=n.charCodeAt(0)),O=V(),D=l?je:J9,y--,m++;++y<m;)if(w===j1&&(j=p[b]||1),w=e.charCodeAt(y),w===b1){if(E=e.charCodeAt(y+1),E===ey||E===j1||E===ty||E===ny||E===b1||E===oy||E!==E||n&&E===n){x+=lo(w),j++;continue}for(ne=y+1,Y=ne,U=ne,E===sy?(U=++Y,E=e.charCodeAt(U),E===ly||E===iy?(oe=ap,U=++Y):oe=sp):oe=io,h="",Q="",g="",H=Oi[oe],U--;++U<m&&(E=e.charCodeAt(U),!!H(E));)g+=lo(E),oe===io&&q9.call(v1,g)&&(h=g,Q=v1[g]);S=e.charCodeAt(U)===ry,S&&(U++,C=oe===io?X9(g):!1,C&&(h=g,Q=C)),I=1+U-ne,!S&&!r||(g?oe===io?(S&&!Q?D(l3,1):(h!==g&&(U=Y+h.length,I=1+U-Y,S=!1),S||(P=h?r3:a3,t.attribute?(E=e.charCodeAt(U),E===ay?(D(P,I),Q=null):n3(E)?Q=null:D(P,I)):D(P,I))),T=Q):(S||D(o3,I),T=parseInt(g,lp[oe]),py(T)?(D(i3,I),T=lo(cy)):T in y1?(D(Uu,I),T=y1[T]):(G="",fy(T)&&D(Uu,I),T>65535&&(T-=65536,G+=lo(T>>>10|55296),T=56320|T&1023),T=G+lo(T))):oe!==io&&D(s3,I)),T?(se(),O=V(),y=U-1,j+=U-ne+1,f.push(T),B=V(),B.offset++,s&&s.call(c,T,{start:O,end:B},e.slice(ne-1,U)),O=B):(g=e.slice(ne-1,U),x+=g,j+=g.length,y=U-1)}else w===10&&(_++,b++,j=0),w===w?(x+=lo(w),j++):se();return f.join("");function V(){return{line:_,column:j,offset:y+(d.offset||0)}}function je(ve,ae){var Ee=V();Ee.column+=ae,Ee.offset+=ae,l.call(u,Cr[ve],Ee,ve)}function se(){x&&(f.push(x),a&&a.call(i,x,{start:O,end:V()}),x="")}}function py(e){return e>=55296&&e<=57343||e>1114111}function fy(e){return e>=1&&e<=8||e===11||e>=13&&e<=31||e>=127&&e<=159||e>=64976&&e<=65007||(e&65535)===65535||(e&65535)===65534}var c3={exports:{}};(function(e){var t=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=function(r){var a=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,s=0,l={},i={manual:r.Prism&&r.Prism.manual,disableWorkerMessageHandler:r.Prism&&r.Prism.disableWorkerMessageHandler,util:{encode:function f(h){return h instanceof c?new c(h.type,f(h.content),h.alias):Array.isArray(h)?h.map(f):h.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(f){return Object.prototype.toString.call(f).slice(8,-1)},objId:function(f){return f.__id||Object.defineProperty(f,"__id",{value:++s}),f.__id},clone:function f(h,C){C=C||{};var S,g;switch(i.util.type(h)){case"Object":if(g=i.util.objId(h),C[g])return C[g];S={},C[g]=S;for(var w in h)h.hasOwnProperty(w)&&(S[w]=f(h[w],C));return S;case"Array":return g=i.util.objId(h),C[g]?C[g]:(S=[],C[g]=S,h.forEach(function(T,E){S[E]=f(T,C)}),S);default:return h}},getLanguage:function(f){for(;f;){var h=a.exec(f.className);if(h)return h[1].toLowerCase();f=f.parentElement}return"none"},setLanguage:function(f,h){f.className=f.className.replace(RegExp(a,"gi"),""),f.classList.add("language-"+h)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(S){var f=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(S.stack)||[])[1];if(f){var h=document.getElementsByTagName("script");for(var C in h)if(h[C].src==f)return h[C]}return null}},isActive:function(f,h,C){for(var S="no-"+h;f;){var g=f.classList;if(g.contains(h))return!0;if(g.contains(S))return!1;f=f.parentElement}return!!C}},languages:{plain:l,plaintext:l,text:l,txt:l,extend:function(f,h){var C=i.util.clone(i.languages[f]);for(var S in h)C[S]=h[S];return C},insertBefore:function(f,h,C,S){S=S||i.languages;var g=S[f],w={};for(var T in g)if(g.hasOwnProperty(T)){if(T==h)for(var E in C)C.hasOwnProperty(E)&&(w[E]=C[E]);C.hasOwnProperty(T)||(w[T]=g[T])}var D=S[f];return S[f]=w,i.languages.DFS(i.languages,function(P,G){G===D&&P!=f&&(this[P]=w)}),w},DFS:function f(h,C,S,g){g=g||{};var w=i.util.objId;for(var T in h)if(h.hasOwnProperty(T)){C.call(h,T,h[T],S||T);var E=h[T],D=i.util.type(E);D==="Object"&&!g[w(E)]?(g[w(E)]=!0,f(E,C,null,g)):D==="Array"&&!g[w(E)]&&(g[w(E)]=!0,f(E,C,T,g))}}},plugins:{},highlightAll:function(f,h){i.highlightAllUnder(document,f,h)},highlightAllUnder:function(f,h,C){var S={callback:C,container:f,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};i.hooks.run("before-highlightall",S),S.elements=Array.prototype.slice.apply(S.container.querySelectorAll(S.selector)),i.hooks.run("before-all-elements-highlight",S);for(var g=0,w;w=S.elements[g++];)i.highlightElement(w,h===!0,S.callback)},highlightElement:function(f,h,C){var S=i.util.getLanguage(f),g=i.languages[S];i.util.setLanguage(f,S);var w=f.parentElement;w&&w.nodeName.toLowerCase()==="pre"&&i.util.setLanguage(w,S);var T=f.textContent,E={element:f,language:S,grammar:g,code:T};function D(G){E.highlightedCode=G,i.hooks.run("before-insert",E),E.element.innerHTML=E.highlightedCode,i.hooks.run("after-highlight",E),i.hooks.run("complete",E),C&&C.call(E.element)}if(i.hooks.run("before-sanity-check",E),w=E.element.parentElement,w&&w.nodeName.toLowerCase()==="pre"&&!w.hasAttribute("tabindex")&&w.setAttribute("tabindex","0"),!E.code){i.hooks.run("complete",E),C&&C.call(E.element);return}if(i.hooks.run("before-highlight",E),!E.grammar){D(i.util.encode(E.code));return}if(h&&r.Worker){var P=new Worker(i.filename);P.onmessage=function(G){D(G.data)},P.postMessage(JSON.stringify({language:E.language,code:E.code,immediateClose:!0}))}else D(i.highlight(E.code,E.grammar,E.language))},highlight:function(f,h,C){var S={code:f,grammar:h,language:C};if(i.hooks.run("before-tokenize",S),!S.grammar)throw new Error('The language "'+S.language+'" has no grammar.');return S.tokens=i.tokenize(S.code,S.grammar),i.hooks.run("after-tokenize",S),c.stringify(i.util.encode(S.tokens),S.language)},tokenize:function(f,h){var C=h.rest;if(C){for(var S in C)h[S]=C[S];delete h.rest}var g=new p;return m(g,g.head,f),d(f,g,h,g.head,0),b(g)},hooks:{all:{},add:function(f,h){var C=i.hooks.all;C[f]=C[f]||[],C[f].push(h)},run:function(f,h){var C=i.hooks.all[f];if(!(!C||!C.length))for(var S=0,g;g=C[S++];)g(h)}},Token:c};r.Prism=i;function c(f,h,C,S){this.type=f,this.content=h,this.alias=C,this.length=(S||"").length|0}c.stringify=function f(h,C){if(typeof h=="string")return h;if(Array.isArray(h)){var S="";return h.forEach(function(D){S+=f(D,C)}),S}var g={type:h.type,content:f(h.content,C),tag:"span",classes:["token",h.type],attributes:{},language:C},w=h.alias;w&&(Array.isArray(w)?Array.prototype.push.apply(g.classes,w):g.classes.push(w)),i.hooks.run("wrap",g);var T="";for(var E in g.attributes)T+=" "+E+'="'+(g.attributes[E]||"").replace(/"/g,"&quot;")+'"';return"<"+g.tag+' class="'+g.classes.join(" ")+'"'+T+">"+g.content+"</"+g.tag+">"};function u(f,h,C,S){f.lastIndex=h;var g=f.exec(C);if(g&&S&&g[1]){var w=g[1].length;g.index+=w,g[0]=g[0].slice(w)}return g}function d(f,h,C,S,g,w){for(var T in C)if(!(!C.hasOwnProperty(T)||!C[T])){var E=C[T];E=Array.isArray(E)?E:[E];for(var D=0;D<E.length;++D){if(w&&w.cause==T+","+D)return;var P=E[D],G=P.inside,Q=!!P.lookbehind,Y=!!P.greedy,ne=P.alias;if(Y&&!P.pattern.global){var oe=P.pattern.toString().match(/[imsuy]*$/)[0];P.pattern=RegExp(P.pattern.source,oe+"g")}for(var H=P.pattern||P,O=S.next,B=g;O!==h.tail&&!(w&&B>=w.reach);B+=O.value.length,O=O.next){var I=O.value;if(h.length>f.length)return;if(!(I instanceof c)){var U=1,V;if(Y){if(V=u(H,B,f,Q),!V||V.index>=f.length)break;var ae=V.index,je=V.index+V[0].length,se=B;for(se+=O.value.length;ae>=se;)O=O.next,se+=O.value.length;if(se-=O.value.length,B=se,O.value instanceof c)continue;for(var ve=O;ve!==h.tail&&(se<je||typeof ve.value=="string");ve=ve.next)U++,se+=ve.value.length;U--,I=f.slice(B,se),V.index-=B}else if(V=u(H,0,I,Q),!V)continue;var ae=V.index,Ee=V[0],lt=I.slice(0,ae),Ct=I.slice(ae+Ee.length),pe=B+I.length;w&&pe>w.reach&&(w.reach=pe);var Le=O.prev;lt&&(Le=m(h,Le,lt),B+=lt.length),y(h,Le,U);var Qe=new c(T,G?i.tokenize(Ee,G):Ee,ne,Ee);if(O=m(h,Le,Qe),Ct&&m(h,O,Ct),U>1){var Lt={cause:T+","+D,reach:pe};d(f,h,C,O.prev,B,Lt),w&&Lt.reach>w.reach&&(w.reach=Lt.reach)}}}}}}function p(){var f={value:null,prev:null,next:null},h={value:null,prev:f,next:null};f.next=h,this.head=f,this.tail=h,this.length=0}function m(f,h,C){var S=h.next,g={value:C,prev:h,next:S};return h.next=g,S.prev=g,f.length++,g}function y(f,h,C){for(var S=h.next,g=0;g<C&&S!==f.tail;g++)S=S.next;h.next=S,S.prev=h,f.length-=g}function b(f){for(var h=[],C=f.head.next;C!==f.tail;)h.push(C.value),C=C.next;return h}if(!r.document)return r.addEventListener&&(i.disableWorkerMessageHandler||r.addEventListener("message",function(f){var h=JSON.parse(f.data),C=h.language,S=h.code,g=h.immediateClose;r.postMessage(i.highlight(S,i.languages[C],C)),g&&r.close()},!1)),i;var j=i.util.currentScript();j&&(i.filename=j.src,j.hasAttribute("data-manual")&&(i.manual=!0));function _(){i.manual||i.highlightAll()}if(!i.manual){var x=document.readyState;x==="loading"||x==="interactive"&&j&&j.defer?document.addEventListener("DOMContentLoaded",_):window.requestAnimationFrame?window.requestAnimationFrame(_):window.setTimeout(_,16)}return i}(t);e.exports&&(e.exports=n),typeof Al<"u"&&(Al.Prism=n)})(c3);var hy=c3.exports,my=ip;ip.displayName="markup";ip.aliases=["html","mathml","svg","xml","ssml","atom","rss"];function ip(e){e.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},e.languages.markup.tag.inside["attr-value"].inside.entity=e.languages.markup.entity,e.languages.markup.doctype.inside["internal-subset"].inside=e.languages.markup,e.hooks.add("wrap",function(t){t.type==="entity"&&(t.attributes.title=t.content.value.replace(/&amp;/,"&"))}),Object.defineProperty(e.languages.markup.tag,"addInlined",{value:function(n,r){var a={};a["language-"+r]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:e.languages[r]},a.cdata=/^<!\[CDATA\[|\]\]>$/i;var s={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};s["language-"+r]={pattern:/[\s\S]+/,inside:e.languages[r]};var l={};l[n]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return n}),"i"),lookbehind:!0,greedy:!0,inside:s},e.languages.insertBefore("markup","cdata",l)}}),Object.defineProperty(e.languages.markup.tag,"addAttribute",{value:function(t,n){e.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+t+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[n,"language-"+n],inside:e.languages[n]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),e.languages.html=e.languages.markup,e.languages.mathml=e.languages.markup,e.languages.svg=e.languages.markup,e.languages.xml=e.languages.extend("markup",{}),e.languages.ssml=e.languages.xml,e.languages.atom=e.languages.xml,e.languages.rss=e.languages.xml}var u3=cp;cp.displayName="css";cp.aliases=[];function cp(e){(function(t){var n=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;t.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+n.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+n.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+n.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:n,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},t.languages.css.atrule.inside.rest=t.languages.css;var r=t.languages.markup;r&&(r.tag.addInlined("style","css"),r.tag.addAttribute("style","css"))})(e)}const gy=Bn(u3);var xy=up;up.displayName="clike";up.aliases=[];function up(e){e.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/}}var vy=dp;dp.displayName="javascript";dp.aliases=["js"];function dp(e){e.languages.javascript=e.languages.extend("clike",{"class-name":[e.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),e.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,e.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:e.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:e.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:e.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:e.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:e.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),e.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:e.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),e.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),e.languages.markup&&(e.languages.markup.tag.addInlined("script","javascript"),e.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),e.languages.js=e.languages.javascript}var ba=typeof globalThis=="object"?globalThis:typeof self=="object"?self:typeof window=="object"?window:typeof Al=="object"?Al:{},yy=Ay();ba.Prism={manual:!0,disableWorkerMessageHandler:!0};var Cy=A7,jy=Q9,d3=hy,by=my,Sy=u3,wy=xy,_y=vy;yy();var pp={}.hasOwnProperty;function p3(){}p3.prototype=d3;var Ze=new p3,ky=Ze;Ze.highlight=Ey;Ze.register=ys;Ze.alias=Ty;Ze.registered=Ly;Ze.listLanguages=Ny;ys(by);ys(Sy);ys(wy);ys(_y);Ze.util.encode=Oy;Ze.Token.stringify=Ry;function ys(e){if(typeof e!="function"||!e.displayName)throw new Error("Expected `function` for `grammar`, got `"+e+"`");Ze.languages[e.displayName]===void 0&&e(Ze)}function Ty(e,t){var n=Ze.languages,r=e,a,s,l,i;t&&(r={},r[e]=t);for(a in r)for(s=r[a],s=typeof s=="string"?[s]:s,l=s.length,i=-1;++i<l;)n[s[i]]=n[a]}function Ey(e,t){var n=d3.highlight,r;if(typeof e!="string")throw new Error("Expected `string` for `value`, got `"+e+"`");if(Ze.util.type(t)==="Object")r=t,t=null;else{if(typeof t!="string")throw new Error("Expected `string` for `name`, got `"+t+"`");if(pp.call(Ze.languages,t))r=Ze.languages[t];else throw new Error("Unknown language: `"+t+"` is not registered")}return n.call(this,e,r,t)}function Ly(e){if(typeof e!="string")throw new Error("Expected `string` for `language`, got `"+e+"`");return pp.call(Ze.languages,e)}function Ny(){var e=Ze.languages,t=[],n;for(n in e)pp.call(e,n)&&typeof e[n]=="object"&&t.push(n);return t}function Ry(e,t,n){var r;return typeof e=="string"?{type:"text",value:e}:Ze.util.type(e)==="Array"?Dy(e,t):(r={type:e.type,content:Ze.Token.stringify(e.content,t,n),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:n},e.alias&&(r.classes=r.classes.concat(e.alias)),Ze.hooks.run("wrap",r),Cy(r.tag+"."+r.classes.join("."),My(r.attributes),r.content))}function Dy(e,t){for(var n=[],r=e.length,a=-1,s;++a<r;)s=e[a],s!==""&&s!==null&&s!==void 0&&n.push(s);for(a=-1,r=n.length;++a<r;)s=n[a],n[a]=Ze.Token.stringify(s,t,n);return n}function Oy(e){return e}function My(e){var t;for(t in e)e[t]=jy(e[t]);return e}function Ay(){var e="Prism"in ba,t=e?ba.Prism:void 0;return n;function n(){e?ba.Prism=t:delete ba.Prism,e=void 0,t=void 0}}const fp=Bn(ky);var hp=x8(fp,{});hp.registerLanguage=function(e,t){return fp.register(t)};hp.alias=function(e,t){return fp.alias(e,t)};const qr=hp;var Py=mp;mp.displayName="bash";mp.aliases=["shell"];function mp(e){(function(t){var n="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",r={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},a={bash:r,environment:{pattern:RegExp("\\$"+n),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+n),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};t.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+n),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:a},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:r}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:a},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:a.entity}}],environment:{pattern:RegExp("\\$?"+n),alias:"constant"},variable:a.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},r.inside=t.languages.bash;for(var s=["comment","function-name","for-or-select","assign-left","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],l=a.variable[1].inside,i=0;i<s.length;i++)l[s[i]]=t.languages.bash[s[i]];t.languages.shell=t.languages.bash})(e)}const $y=Bn(Py);var By=gp;gp.displayName="json";gp.aliases=["webmanifest"];function gp(e){e.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},e.languages.webmanifest=e.languages.json}const Iy=Bn(By);var zy=xp;xp.displayName="jsx";xp.aliases=[];function xp(e){(function(t){var n=t.util.clone(t.languages.javascript),r=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,a=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,s=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function l(u,d){return u=u.replace(/<S>/g,function(){return r}).replace(/<BRACES>/g,function(){return a}).replace(/<SPREAD>/g,function(){return s}),RegExp(u,d)}s=l(s).source,t.languages.jsx=t.languages.extend("markup",n),t.languages.jsx.tag.pattern=l(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),t.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,t.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,t.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,t.languages.jsx.tag.inside.comment=n.comment,t.languages.insertBefore("inside","attr-name",{spread:{pattern:l(/<SPREAD>/.source),inside:t.languages.jsx}},t.languages.jsx.tag),t.languages.insertBefore("inside","special-attr",{script:{pattern:l(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:t.languages.jsx}}},t.languages.jsx.tag);var i=function(u){return u?typeof u=="string"?u:typeof u.content=="string"?u.content:u.content.map(i).join(""):""},c=function(u){for(var d=[],p=0;p<u.length;p++){var m=u[p],y=!1;if(typeof m!="string"&&(m.type==="tag"&&m.content[0]&&m.content[0].type==="tag"?m.content[0].content[0].content==="</"?d.length>0&&d[d.length-1].tagName===i(m.content[0].content[1])&&d.pop():m.content[m.content.length-1].content==="/>"||d.push({tagName:i(m.content[0].content[1]),openedBraces:0}):d.length>0&&m.type==="punctuation"&&m.content==="{"?d[d.length-1].openedBraces++:d.length>0&&d[d.length-1].openedBraces>0&&m.type==="punctuation"&&m.content==="}"?d[d.length-1].openedBraces--:y=!0),(y||typeof m=="string")&&d.length>0&&d[d.length-1].openedBraces===0){var b=i(m);p<u.length-1&&(typeof u[p+1]=="string"||u[p+1].type==="plain-text")&&(b+=i(u[p+1]),u.splice(p+1,1)),p>0&&(typeof u[p-1]=="string"||u[p-1].type==="plain-text")&&(b=i(u[p-1])+b,u.splice(p-1,1),p--),u[p]=new t.Token("plain-text",b,null,b)}m.content&&typeof m.content!="string"&&c(m.content)}};t.hooks.add("after-tokenize",function(u){u.language!=="jsx"&&u.language!=="tsx"||c(u.tokens)})})(e)}const Fy=Bn(zy);var Uy=vp;vp.displayName="scss";vp.aliases=[];function vp(e){e.languages.scss=e.languages.extend("css",{comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0},atrule:{pattern:/@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,inside:{rule:/@[\w-]+/}},url:/(?:[-a-z]+-)?url(?=\()/i,selector:{pattern:/(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,inside:{parent:{pattern:/&/,alias:"important"},placeholder:/%[-\w]+/,variable:/\$[-\w]+|#\{\$[-\w]+\}/}},property:{pattern:/(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,inside:{variable:/\$[-\w]+|#\{\$[-\w]+\}/}}}),e.languages.insertBefore("scss","atrule",{keyword:[/@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i,{pattern:/( )(?:from|through)(?= )/,lookbehind:!0}]}),e.languages.insertBefore("scss","important",{variable:/\$[-\w]+|#\{\$[-\w]+\}/}),e.languages.insertBefore("scss","function",{"module-modifier":{pattern:/\b(?:as|hide|show|with)\b/i,alias:"keyword"},placeholder:{pattern:/%[-\w]+/,alias:"selector"},statement:{pattern:/\B!(?:default|optional)\b/i,alias:"keyword"},boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"},operator:{pattern:/(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,lookbehind:!0}}),e.languages.scss.atrule.inside.rest=e.languages.scss}const Hy=Bn(Uy);var Vy=yp;yp.displayName="yaml";yp.aliases=["yml"];function yp(e){(function(t){var n=/[*&][^\s[\]{},]+/,r=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,a="(?:"+r.source+"(?:[ 	]+"+n.source+")?|"+n.source+"(?:[ 	]+"+r.source+")?)",s=/(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g,function(){return/[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source}),l=/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;function i(c,u){u=(u||"").replace(/m/g,"")+"m";var d=/([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g,function(){return a}).replace(/<<value>>/g,function(){return c});return RegExp(d,u)}t.languages.yaml={scalar:{pattern:RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g,function(){return a})),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g,function(){return a}).replace(/<<key>>/g,function(){return"(?:"+s+"|"+l+")"})),lookbehind:!0,greedy:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:i(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),lookbehind:!0,alias:"number"},boolean:{pattern:i(/false|true/.source,"i"),lookbehind:!0,alias:"important"},null:{pattern:i(/null|~/.source,"i"),lookbehind:!0,alias:"important"},string:{pattern:i(l),lookbehind:!0,greedy:!0},number:{pattern:i(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source,"i"),lookbehind:!0},tag:r,important:n,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},t.languages.yml=t.languages.yaml})(e)}const Wy=Bn(Vy);function Jr(e){return typeof e=="string"}function Cp(e){return typeof e=="number"}function f3(e){return Number.isInteger(e)}function Vo(e){return Array.isArray(e)}function Mi(e){return typeof e=="function"}function Zy(e){return e instanceof RegExp}function Cs(e){return typeof e=="object"&&!Vo(e)&&!h3(e)}function Ky(e){return e===void 0}function h3(e){return e===null}function Be(e){return!(Ky(e)||h3(e))}function Ai(e){return!Be(e)}function m3(...e){throw new Error(e.join(""))}function Ae(){}function Gy(){return Intl.DateTimeFormat().resolvedOptions().locale}let Yy={locale:Gy(),currency:"GBP",currencySign:"£",thousands:","};const Xy=(e,t,n=1)=>{const r=t<e?-Math.abs(n):n;return Array(1+Math.floor(Math.abs((t-e)/n))).fill(e).map((a,s)=>a+s*r)};function dl(e,t=Yy.thousands){if(Ai(e))return"";for(var n=e.toString().split("."),r=/(\d+)(\d{3})/;r.test(n[0]);)n[0]=n[0].replace(r,`$1${t}$2`);return n.join(".")}function Qy(e){return Ai(e)?[]:Jr(e)?e.length?e.split(/,\s*|\s+/):[]:Vo(e)?e:[e]}function ls(e,t=!0,n={}){return Cs(e)?e:Qy(e).reduce((r,a)=>(r[a]=Mi(t)?t(a):t,r),n)}function qy(e){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()}function Jy(e){if(Mi(e))return e;if(Zy(e))return t=>e.test(t);if(Cs(e))return t=>!!e[t];if(Vo(e)||Jr(e)){const t=ls(e);return n=>!!t[n]}m3("Invalid selector() specification: "+e)}const jp=(e,t,n={})=>{let r={},a={delete:!1,...n};const s=Jy(t);return Object.keys(e).map(l=>{if(s(l)){let i=e[l];a.delete&&delete e[l],a.key&&(l=a.key(l)),a.value&&(i=a.value(i)),r[l]=i}}),r},S1=(e,t)=>parseInt(e[t]||0),w1=(e,t)=>parseFloat(e[t]||0),_1=(e,t)=>(e[t]||"").toString(),k1=e=>(t,n)=>S1(t,e)-S1(n,e),Nc=e=>(t,n)=>w1(t,e)-w1(n,e),T1=e=>(t,n)=>{let r=_1(t,e).toLowerCase(),a=_1(n,e).toLowerCase();return r>a?1:a>r?-1:0},eC=e=>(t,n)=>e(n,t);function tC(e,t=300){let n;return(...r)=>{clearTimeout(n),n=setTimeout(()=>e.apply(this,r),t)}}function Pi(e){return new Promise(t=>setTimeout(t,e))}qr.registerLanguage("jsx",Fy);qr.registerLanguage("json",Iy);qr.registerLanguage("css",gy);qr.registerLanguage("scss",Hy);qr.registerLanguage("bash",$y);qr.registerLanguage("yaml",Wy);const tr=({code:e,language:t="jsx",caption:n,expand:r=!1,fixed:a=r,className:s="",highlightLines:l,lineProps:i,undent:c=!1})=>{const[u,d]=v.useState(!1),[p,m]=v.useState(r),y=()=>{navigator.clipboard.writeText(e),d(!0),Pi(2e3).then(()=>d(!1))};return o.jsxs("div",{className:`codeblock ${s} ${p?"expanded":""} ${a?"fixed-open":"expandable"}`,children:[!!n&&o.jsx("h4",{className:"caption",children:n}),o.jsxs("div",{className:"controls",children:[o.jsx("div",{className:"expand",onClick:()=>m(!p),children:p?"Compress":"Expand"}),o.jsx("div",{className:`clipboard ${u?"copied":""}`,onClick:y,children:u?"Copied":"Copy"})]}),o.jsx(qr,{language:t,showLineNumbers:!0,useInlineStyles:!1,wrapLines:!0,customStyle:{},children:nC(e,{undent:c})})]})},nC=(e,t={})=>{if(e=e.replace(/^[^]*?{?\/\*\s*START\s*\*\/}?\n/,"").replace(/[\n\s]*{?\/\*\s*END\s*\*\/}?[^]*/,"").replaceAll(/\/\/\s*PRETEND:\s/g,"").replaceAll(/{?\/\*\s*PRETEND:\s(.*?)\s+\*\/}?/g,"$1").replace(/\n+$/,""),t.undent){const n=new RegExp("^"+" ".repeat(t.undent),"gm");e=e.replaceAll(n,"")}return e},Ce=({Component:e,code:t,html:n,children:r,className:a="",language:s,...l})=>o.jsxs("div",{className:`example grid-2 gap-8 stack-desktop ${a}`,children:[o.jsx("div",{className:"source",children:o.jsx(tr,{code:t||n,language:n?"html":s,...l})}),!!r&&o.jsx("div",{className:"interim",children:r}),e?o.jsxs("div",{className:"output",children:[o.jsx("h4",{className:"caption",children:"Output"}),o.jsx(e,{})]}):null,n?o.jsxs("div",{className:"output",children:[o.jsx("h4",{className:"caption",children:"Output"}),o.jsx("div",{dangerouslySetInnerHTML:{__html:n}})]}):null]}),pl=v.createContext();function E1(e){return typeof e=="function"}function L1(e){return typeof e=="object"&&!g3(e)&&!rC(e)}function g3(e){return Array.isArray(e)}function rC(e){return e===null}function oC({context:e={},Implementation:t,spec:n=!1,props:r={},ref:a}){if(!n)return o.jsx(t,{...r,ref:a});let s={},l=E1(n)?n(e):e[n];if(g3(l)&&(t=l[0],l=l[1]),E1(l)){const i=l(r,a,e);if(ee.isValidElement(i))return i;L1(i)&&Object.assign(s,r,i)}else L1(l)?Object.assign(s,l,r):Object.assign(s,r);return o.jsx(t,{...s,ref:a})}const aC=e=>({Context:pl,Provider:({children:t,...n})=>o.jsx(pl.Provider,{value:{...e,...n},children:t}),Consumer:t=>n=>o.jsx(pl.Consumer,{children:r=>o.jsx(t,{...r,...n,context:r})}),Component:(t,n=t.displayName||t.name)=>ee.forwardRef((r,a)=>o.jsx(pl.Consumer,{children:s=>o.jsx(oC,{Implementation:t,context:s,spec:n,props:r,ref:a})}))}),sC=aC(),me=sC.Component,lC="svg",Hu="-",N1="none",x3="fill",iC="path",cC="line",uC="rect",dC="array",pC="circle",fC="ellipse",hC="polygon",mC="polyline",bp=/-(?!\d)/,R1="currentColor",Sp=512,wp=512,js={defaults:{width:512,height:512,type:"line"},icons:{alpha:"M102,448L256,64L410,448 M152,333L360,333",angle:"M448,336L256,144L64,336",angles:"M448,448L256,256L64,448M448,256L256,64L64,256",arrow:"M96,224L256,64L416,224M256,86L256,448",arrows:"M144,144L256,32L368,144M368,368L256,480L144,368M256,56L256,456",asterisk:"M76,152L436,360M76,360L436,152M256,48L256,464",at:"M256,160C309,160 352,203 352,256C352,309 309,352 256,352C203,352 160,309 160,256C160,203 203,160 256,160M256,480C132,480 32,380 32,256C32,132 132,32 256,32C380,32 480,132 480,256L480,288C480,323 451,352 416,352C381,352 352,323 352,288L352,176",ban:"M100,412L412,100 M256,32C380,32 480,132 480,255C480,379 380,480 256,480C132,480 32,379 32,255C32,132 132,32 256,32Z",bars:"M64,96L448,96M64,256L448,256M64,416L448,416",caret:"M448,336L256,144L64,336L448,336Z",check:"M48,248L192,392L464,120",circle:"circle:256 256 224",clipboard:"M192,80L80,80L80,496L432,496L432,80L320,80L320,112L192,112L192,80ZM256,16C282,16 304,38 304,64C304,90 282,112 256,112C230,112 208,90 208,64C208,38 230,16 256,16Z",cloud:"M480,293C480,234 437,177 362,196C346,161 319,116 240,120C180,124 139,165 125,224C121,223 116,223 111,223C68,223 32,260 32,307C32,354 68,392 111,392C120,392 366,392 380,392C462,392 480,335 480,293Z",cog:"M306,21L206,21L187,91L147,114L78,95L28,182L78,233L78,279L28,330L78,417L147,398L187,421L206,491L306,491L325,421L365,398L434,417L484,330L434,279L434,233L484,182L434,95L365,114L325,91L306,21Z M256,176C300,176 336,212 336,256C336,300 300,336 256,336C212,336 176,300 176,256C176,212 212,176 256,176Z",cross:"M112,112L400,400M400,112L112,400",drag:"M64,96L256,32L448,96M64,416L256,480L448,416M128,256L384,256",envelope:"M32,104L480,104L480,408L32,408L32,104M48,120L256,288L464,120M48,392L200,252M464,392L312,252",equals:"M96,320L416,320 M96,192L416,192",exclamation:"M256,96L256,310M254,416L258,416",eye:["M48,256C146,48 367,49 466,256M48,256C145,464 368,464 466,256","circle:256 256 64"],filter:"M64,32L448,32L448,128L305,271L304,432L208,496L208,272L64,128L64,32Z",heart:"M256,128C298,48 382,48 424,88C466,128 466,208 424,288C394,348 319,408 256,448C193,408 118,348 88,288C46,208 46,128 88,88C130,48 214,48 256,128Z",hourglass:"M80,32L432,32M80,480L432,480M128,32C128,256 384,256 384,480M384,32C384,256 128,256 128,480",info:"M212,202L256,202L256,416M182,416L330,416M252,96L256,96",key:["M189,246C183,229 180,212 180,194C180,118 242,56 318,56C394,56 456,118 456,194C456,270 394,332 318,332C300,332 283,329 266,323L232,360L184,360L184,408L136,408L136,456L56,456L56,379L189,246Z","circle:344 168 8"],list:"M176,96L448,96M176,256L448,256M176,416L448,416M64,96L80,96M64,256L80,256M64,416L80,416",locked:["M144,224L144,166C144,105 195,54 256,54C317,54 368,105 368,166L368,224M256,320L256,368","rect:80 224 352 240 32 32"],login:"M192,128L320,256L192,384M304,256L64,256M320,64L448,64L448,448L320,448",logout:"M320,128L448,256L320,384M432,256L192,256M192,448L64,448L64,64L192,64",minus:"M96,256L416,256",mobile:["rect:128 48 256 416 32 32","M128,120L384,120M128,392L384,392"],number:"M256,448L256,64L176,128 M160,448L336,449",pen:"M482,143C491,134 491,120 482,112L401,30C392,21 378,21 369,30L72,326L22,489L186,439L482,143M305,93L418,206",phone:"M51,59C40,62 32,72 32,84C41,321 192,472 428,480C440,480 451,471 453,459C459,435 469,395 475,371C478,360 472,348 462,343C438,331 395,309 370,297C360,292 347,295 339,304C325,323 303,352 304,352C255,352 160,257 160,208C160,207 188,186 207,172C217,165 220,152 215,141C202,117 181,74 169,50C164,39 152,34 141,37C116,43 75,53 51,59Z",plus:"M256,96L256,416M96,256L416,256",point:"M464,192L256,16L48,192L128,192L128,480L384,480L384,192L464,192Z",prime:"M256,128L256,256",question:"M160,160C160,126 197,80 255,80C314,80 336,128 336,160C336,236 255,235 255,320 M255,416L256,416",rotate:"M392,120C356,84 307,64 256,64C150,64 64,150 64,256C64,362 150,448 256,448C303,448 349,430 384,399C349,430 303,448 256,448C150,448 64,362 64,256C64,150 150,64 256,64C307,64 356,84 392,120Z M352,208L480,208L480,80",search:"M204,32C300,32 384,111 384,208C384,305 305,384 208,384C111,384 32,305 32,208C32,111 107,32 204,32M480,480L332,332",slash:"M64,448L448,64",square:"rect:32 32 448 448",square10:"rect:32 32 448 448 45 45",square20:"rect:32 32 448 448 90 90",square30:"rect:32 32 448 448 135 135",square40:"rect:32 32 448 448 180 180",star:"M256,32L324,183L489,202L367,313L400,476L256,394L112,476L145,313L23,202L188,183L256,32Z",thumb:"M149,174L32,174L32,448L149,448L149,184 M149,217C277,160 246,36 282,38C372,44 324,192 324,192L440,192C462,192 480,210 480,232C480,254 462,272 440,272L368,272M424,272C446,272 464,290 464,312C464,334 446,352 424,352L352,352M392,352C414,352 432,370 432,392C432,414 414,432 392,432L256,432C220,432 149,409 149,409",time:"M256,128L256,256L336,336",trash:"M32,80L480,80 M80,80C80,80 100,344 109,452C111,477 131,496 156,496C211,496 301,496 356,496C381,496 401,477 403,452C412,344 432,80 432,80 M160,80L208,16L304,16L352,74",triangle:"M256,64L32,448L480,448L256,64Z",unlocked:["M144,224L144,166C144,105 195,54 256,54C304,54 346,85 361,128M256,320L256,368","rect:80 224 352 240 32 32"],user:"M256,32C302,32 340,70 340,116C340,162 302,208 256,208C210,208 172,162 172,116C172,70 210,32 256,32ZM448,412C448,361 410,320 363,320L148,320C102,320 64,361 64,412L64,480L448,480L448,412Z",vertical:"line:256,48 256,464",wrench:"M486,108C493,124 496,142 496,160C496,239 431,304 352,304C330,304 309,299 290,290L98,482C79,501 49,501 30,482C11,463 11,433 30,414L222,222C213,203 208,182 208,160C208,81 273,16 352,16C370,16 388,19 404,26L326,103L409,186L486,108Z"}};function gC(e,t,n=js){n.icons[e]=t}function xC(e,t=js){Object.entries(e).forEach(([n,r])=>gC(n,r,t))}const fl=v.createContext();function D1(e){return typeof e=="function"}function O1(e){return typeof e=="object"&&!v3(e)&&!vC(e)}function v3(e){return Array.isArray(e)}function vC(e){return e===null}function yC({context:e={},Implementation:t,spec:n=!1,props:r={},ref:a}){if(!n)return o.jsx(t,{...r,ref:a});let s={},l=D1(n)?n(e):e[n];if(v3(l)&&(t=l[0],l=l[1]),D1(l)){const i=l(r,a,e);if(ee.isValidElement(i))return i;O1(i)&&Object.assign(s,r,i)}else O1(l)?Object.assign(s,l,r):Object.assign(s,r);return o.jsx(t,{...s,ref:a})}const CC=e=>({Context:fl,Provider:({children:t,...n})=>o.jsx(fl.Provider,{value:{...e,...n},children:t}),Consumer:t=>n=>o.jsx(fl.Consumer,{children:r=>o.jsx(t,{...r,...n,context:r})}),Component:(t,n=t.displayName||t.name)=>ee.forwardRef((r,a)=>o.jsx(fl.Consumer,{children:s=>o.jsx(yC,{Implementation:t,context:s,spec:n,props:r,ref:a})}))}),jC=CC(),bC=jC.Component;function zn(e){return typeof e=="string"}function bs(e){return Array.isArray(e)}function $i(e){return typeof e=="object"&&!bs(e)&&!C3(e)}function y3(e){return e===void 0}function C3(e){return e===null}function Bi(e){return!(y3(e)||C3(e))}function j3(e){return!Bi(e)}function Pn(...e){throw new Error(e.join(""))}function SC(){return Intl.DateTimeFormat().resolvedOptions().locale}SC();function Vu(e){return j3(e)?[]:zn(e)?e.length?e.split(/,\s*|\s+/):[]:bs(e)?e:[e]}const wC=(e,t)=>{const n=e[t];return delete e[t],n};function Ss(e){return e.split(/\s*[;&]\s*/).filter(t=>t.length>0).reduce((t,n)=>{const[r,a]=n.split(/\s*[:=]\s*/);return t[r]=y3(a)?!0:a,t},{})}const _p=e=>e.filter(Bi).join(" "),_C=e=>Object.entries(e).filter(([,t])=>t).map(([t])=>t),kC=(...e)=>_p(e.flatMap(t=>$i(t)?_C(t):t)),b3={x:0,y:0,size:16,flipX:!1,flipY:!1,rotate:0},hr={flip:(e,t)=>{zn(t)&&t.match(/^y$/i)?e.flipY=!e.flipY:e.flipX=!e.flipX},flipx:e=>e.flipX=!e.flipX,flipy:e=>e.flipY=!e.flipY,grow:(e,t)=>e.size+=parseFloat(t),shrink:(e,t)=>e.size-=parseFloat(t),left:(e,t)=>t===!0?e.rotate-=90:e.x-=parseFloat(t),right:(e,t)=>t===!0?e.rotate+=90:e.x+=parseFloat(t),up:(e,t)=>t===!0?e.rotate+=0:e.y-=parseFloat(t),down:(e,t)=>t===!0?e.rotate+=180:e.y+=parseFloat(t),rotate:(e,t)=>e.rotate+=parseInt(t)};hr.flop=hr.flipy;hr["flip-x"]=hr.flipx;hr["flip-y"]=hr.flipy;function S3(e,t={...b3}){const n=zn(e)?Ss(e):e||{};return Object.entries(n).reduce((r,[a,s])=>{const l=a.toLowerCase();return(hr[l]||Pn(`Invalid transform: ${l}`))(r,s),r},t)}const TC=4.42,wn=e=>`${TC*e}%`,EC={},Wu={outline:{fill:"none",stroke:"currentColor",strokeWidth:wn(2),strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"1.5"},solid:{fill:"currentColor",stroke:"none"},round:{strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"1.5"},square:{strokeLinecap:"square",strokeLinejoin:"miter",strokeMiterlimit:"1.5"},butt:{strokeLinecap:"butt"},bevel:{strokeLinejoin:"bevel"},thinnest:{strokeWidth:wn(.5)},thinner:{strokeWidth:wn(1)},thin:{strokeWidth:wn(1.5)},medium:{strokeWidth:wn(2)},thick:{strokeWidth:wn(2.5)},thicker:{strokeWidth:wn(3)},thickest:{strokeWidth:wn(3.5)}};Wu.line=Wu.outline;const LC={...Object.entries(Wu).reduce((e,[t,n])=>(e[t]=r=>Object.assign(r,n),e),{}),fill:(e,t)=>e.fill=t===!0?R1:t,stroke:(e,t)=>e.stroke=t===!0?R1:t,nofill:e=>e.fill=N1,nostroke:e=>e.stroke=N1,strokewidth:(e,t)=>e.strokeWidth=t.match(/^[\d.]+$/)?wn(parseFloat(t)):t,opacity:(e,t)=>e.opacity=t,fillopacity:(e,t)=>e.fillOpacity=t,strokeopacity:(e,t)=>e.strokeOpacity=t,dasharray:(e,t)=>e.strokeDasharray=t,drawlength:(e,t)=>e["--draw-length"]=t,drawtime:(e,t)=>e["--draw-time"]=t,filltime:(e,t)=>e["--fill-time"]=t};function si(e,t){return(zn(t)?t.split(bp):t).forEach(n=>{const[r,a=!0]=n.split(/[:=]/),s=r.toLowerCase(),l=LC[s];if(l){l(e.style||(e.style={...EC}),a);return}(hr[s]||Pn(`Invalid style or transform: ${s}`))(e.transform||(e.transform={...b3}),a)})}const NC={width:Sp,height:wp,type:x3},w3={svg:e=>({element:lC,svg:e}),array:e=>({element:dC,items:e}),path:e=>({element:iC,d:e}),polygon:e=>({element:hC,points:e}),polyline:e=>({element:mC,points:e}),circle:e=>({element:pC,...hl(e,"cx cy r")}),ellipse:e=>({element:fC,...hl(e,"cx cy rx ry")}),line:e=>({element:cC,...hl(e,"x1 y1 x2 y2")}),rect:e=>({element:uC,...hl(e,"x y width height rx ry")})};function hl(e,t){const n=bs(t)?[...t]:Vu(t);return Vu(e).reduce((r,a)=>{if(n.length){const s=n.shift();r[s]=a}return r},{})}const _3=e=>{const[t,n=""]=e.split("?"),[r,...a]=t.split(/\.(?!\d)/),s=r.split(bp).filter(i=>i.length),l=Ss(n);return{dashes:s,classes:a,style:l}},RC=(e,t)=>{const n=_3(e),{dashes:r}=n;for(let a=r.length;a>0;a--){const s=r.slice(0,a).join(Hu);if(t[s]){n.name=r.splice(0,a).join(Hu);break}}return n},M1=(e,t,n={})=>{const{icons:r}=t,a=RC(e,r),{name:s,classes:l,style:i,dashes:c}=a;j3(s)&&Pn(`No icon found matching any leading subset of ${a.dashes.join(Hu)}`);const u=t.icons[s]||Pn(`Icon not found in data: ${s}`),d=k3(u,t,{...n,name:s});if((l.length||n.className)&&(d.className=_p([...l||[],n.className])),d.transform&&(d.transform=S3(d.transform)),d.style&&(d.style=zn(d.style)?Ss(d.style):{...d.style}),d.type){const p=d.style&&{...d.style};si(d,d.type),delete d.type,p&&Object.assign(d.style,p)}return c.length&&si(d,c),Object.keys(i).length&&(d.style=Object.assign(d.style||{},i)),d};function DC(e){const t=e.match(/^(.*?):(.*)/);return t?{path:t[2],type:t[1]}:{path:e}}const k3=(e,t,n={})=>{const{defaults:r={}}=t,a={...NC,...r,...n};return T3(a,e,t)},T3=(e,t,n)=>{if(zn(t))return OC(e,t);if($i(t))return MC(e,t,n);if(bs(t))return AC(e,t,n);Pn(`Cannot parse icon data: ${t}`)};function OC(e,t){if(t.match(/^\w*</))return e.body={element:"svg",svg:t},e;const n=t.match(/^(.*?):(.*)/);if(n){const[,r,a]=n,{dashes:s,classes:l}=_3(r),i=s.shift(),c=w3[i]||Pn(`Invalid icon data element: ${i}`);return e.body=c(a),l.length&&(e.body.className=_p(l)),s.length&&si(e.body,s),e}return e.body={element:"path",d:t},e}function MC(e,t,n){const r={...t};if(r.element)return e.body=r,e;if(r.data){const a=wC(r,"data");return T3(e,a,n),Object.assign(e,r),e}for(let a of Object.entries(w3)){const[s,l]=a,i=r[s];if(Bi(i))return e.body=l(i),delete r[s],Object.assign(e,r),e}Pn(`Cannot parse icon data: ${JSON.stringify(t)}`)}function AC(e,t,n){return e.body={element:"array",items:t.map(r=>k3(r,n).body)},e}const PC=({size:e,...t})=>{t.width??(t.width=e||Sp),t.height??(t.height=e||wp),t.path&&Object.assign(t,DC(t.path));let n;return t.style&&(zn(t.style)?(n=Ss(t.style),t.style={}):n={...t.style}),si(t,t.type?t.type.split(bp).filter(r=>r.length):x3),delete t.type,t.style&&n&&Object.assign(t.style,n),t.transform&&(t.transform=S3(t.transform)),t},kp=e=>$i(e)?Object.entries(e).reduce((t,[n,r])=>(t[n.replace(/(?!-)-./g,a=>a[1].toUpperCase())]=r,t),{}):e,$C=e=>Bi(e)?kp(Ss(e)):null,Fn=({style:e,class:t,...n})=>({style:zn(e)?$C(e):kp(e),className:t,...n}),BC=e=>o.jsx("circle",{...Fn(e)}),IC=e=>o.jsx("ellipse",{...Fn(e)}),zC=e=>o.jsx("line",{...Fn(e)}),E3=e=>o.jsx("path",{...Fn(e)}),FC=e=>o.jsx("polygon",{...Fn(e)}),UC=e=>o.jsx("polyline",{...Fn(e)}),HC=e=>o.jsx("rect",{...Fn(e)}),VC=({svg:e,...t})=>o.jsx("g",{dangerouslySetInnerHTML:{__html:e},...Fn(t)}),WC=({items:e,...t})=>o.jsx("g",{...Fn(t),children:e.map((n,r)=>o.jsx(li,{body:n},r))}),ZC={array:WC,circle:BC,ellipse:IC,line:zC,path:E3,polygon:FC,polyline:UC,rect:HC,svg:VC},li=({path:e,body:t,...n})=>{if(e)return o.jsx(E3,{d:e,...n});if(zn(t))return o.jsx("g",{dangerouslySetInnerHTML:{__html:t}});if($i(t)){const{element:r,...a}=t,s=ZC[r]||Pn(`Invalid element type: ${r} => `,JSON.stringify(t));return o.jsx(s,{...a})}if(bs(t))return t.map((r,a)=>o.jsx(li,{body:r},a));Pn(`Don't know how to handle body: ${t}`)};function KC({width:e,height:t,transform:n,children:r}){const a=e/2,s=t/2,l=n.x*e/16,i=n.y*t/16,c=n.size/16*(n.flipX?-1:1),u=n.size/16*(n.flipY?-1:1),d=n.rotate;return o.jsx("g",{transform:`translate(${a} ${s})`,children:o.jsx("g",{transform:`translate(${l}, ${i}) scale(${c}, ${u}) rotate(${d} 0 0)`,children:o.jsx("g",{transform:`translate(-${a} -${s})`,children:r})})})}const Rc=({onClick:e,minx:t=0,miny:n=0,width:r=Sp,height:a=wp,style:s,transform:l,className:i="",debug:c,...u})=>o.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",role:"img","aria-hidden":"true",focusable:"false",viewBox:`${t} ${n} ${r} ${a}`,className:`${i} icon`,style:kp(s),onClick:e,children:[!!c&&console.log("style: ",s),l?o.jsx(KC,{width:r,height:a,transform:l,children:o.jsx(li,{...u})}):o.jsx(li,{...u})]}),GC=({name:e,iconsClass:t="icons",library:n=js,...r})=>{if(!e)return o.jsx(Rc,{...PC(r)});const a=Vu(e);return a.length===1?o.jsx(Rc,{...r,...M1(e,n,r)}):o.jsx("div",{className:kC(t,r.className),children:a.map(s=>o.jsx(Rc,{...r,...M1(s,n,r)},s))})},Ol=bC(GC,"Icon"),L3=(e,...t)=>Mi(e)?e(...t):e,YC=e=>e.filter(Be).join(" "),XC=e=>Object.entries(e).filter(([,t])=>t).map(([t])=>t),we=(...e)=>YC(e.flatMap(t=>Cs(t)?XC(t):t)),QC=e=>{if(!e)return null;const[t,n,r,a,s]=e.split("-");return we(t,JC(n),ej(r),tj(a),nj(s))},qC=({className:e,size:t,color:n,...r})=>({...r,className:we(e,t,QC(n))}),Ii=e=>N3(e,"border",t=>`border bdw-${t}`),Tp=e=>N3(e,"shadow-1",t=>`shadow-${t}`),Ep=e=>ws(e,t=>`bdr-${t}`),JC=e=>ws(e,t=>`fgc-${t}`),ej=e=>ws(e,t=>`bgc-${t}`),tj=e=>ws(e,t=>`fgd-${t}`),nj=e=>ws(e,t=>`bgd-${t}`),ws=(e,t)=>f3(parseInt(e))?L3(t,e):null,N3=(e,t,n)=>e===!0?t:parseInt(e)?L3(n,e):null,J=e=>o.jsx(Ol,{...qC(e)});function A1(e,t,n={}){return Be(t)&&(n[e]=f3(t)?`${t}deg`:t),Object.keys(n).length?n:null}const rj=({icon:e,iconClass:t,iconLeft:n,iconLeftClass:r="on-left",iconLeftRotate:a,iconRight:s,iconRightClass:l="on-right",iconRightRotate:i,text:c,children:u})=>o.jsxs(o.Fragment,{children:[!!e&&o.jsx(Ol,{name:e,className:t,fixedWidth:!0}),!!n&&o.jsx(Ol,{name:n,className:r,style:A1("--icon-rotate",a),fixedWidth:!0}),c||u,!!s&&o.jsx(Ol,{name:s,className:l,style:A1("--icon-rotate",i),fixedWidth:!0})]}),_s=me(rj,"WithIcons");xC({github:"path-fill-nostroke:M256,0C115,0 0,115 0,256C0,369 73,465 175,499C188,501 193,493 193,487C193,481 192,460 192,439C128,451 111,423 106,409C103,402 91,379 80,373C71,368 58,356 80,356C100,356 114,374 119,382C142,421 179,410 194,403C196,387 203,375 210,369C153,363 93,340 93,243C93,215 103,192 120,174C117,167 108,141 122,106C122,106 144,99 193,132C213,126 235,124 257,124C278,124 300,126 321,132C370,99 391,106 391,106C405,141 396,167 394,174C410,192 420,214 420,243C420,341 360,363 303,369C312,377 320,392 320,416C320,451 320,478 320,487C320,493 325,501 338,499C439,465 512,369 512,256C512,115 397,0 256,0Z"});const oj=({dismissable:e,dismiss:t,revealable:n,isRevealed:r,openIcon:a="angle-down",closedIcon:s="angle-left",dismissIcon:l="cross"})=>o.jsxs("div",{className:"on-right",children:[!!e&&o.jsx(J,{name:l,fixedWidth:!0,className:"dismiss",onClick:()=>t(!0)}),!!n&&o.jsx(J,{name:r?a:s,fixedWidth:!0,className:"reveal"})]}),R3=me(oj,"AlertControls"),aj=({headline:e,headIcon:t,toggle:n,revealable:r=!1,controlProps:a,Controls:s=R3})=>o.jsxs("div",{className:"headline flex space",onClick:r?n:null,children:[o.jsxs("div",{children:[!!t&&o.jsx(J,{name:t,fixedWidth:!0,className:"on-left"}),e]}),o.jsx(s,{...a})]}),sj=me(aj,"AlertHeadline"),lj=({title:e,text:t,children:n})=>o.jsxs(o.Fragment,{children:[e&&o.jsx("h3",{children:e}),t?o.jsx("p",{children:t}):n]}),D3=me(lj,"AlertContent"),ij=({icon:e,Content:t=D3,...n})=>o.jsxs("div",{className:"side-icon",children:[o.jsx(J,{name:e}),o.jsx("div",{className:"wide",children:o.jsx(t,{...n})})]}),cj=me(ij,"AlertIcon"),zi=e=>Jr(e)||Cp(e)||!e.separator&&!e.heading&&!e.disabled;function uj(e,t=zi){const n=e.findIndex(t);return n<0?null:n}function dj(e,t=zi){for(let n=e.length-1;n>=0;n--)if(t(e[n]))return n;return null}function pj(e,t,n=zi){for(let r=1;r<e.length;r++){const a=(t+r)%e.length;if(n(e[a]))return a}return null}function fj(e,t,n=zi){for(let r=1;r<e.length;r++){const a=(t+e.length-r)%e.length;if(n(e[a]))return a}return null}const O3="",M3="ArrowDown",A3="ArrowUp",Lp="Enter",P3=" ",Np="Escape",ii=e=>{const t=`HINT: define ${e}() to render this value`;return n=>Jr(n)||Cp(n)?n:Cs(n)?n.text??n.label??n.name??t:t},hj=e=>Jr(e)||Cp(e)?e:o.jsx(_s,{...e}),$3=(e,t)=>{if(!e||!t)return;const n=t.offsetTop,r=n+t.offsetHeight,a=e.scrollTop,s=a+e.offsetHeight;n<a?e.scrollTo({top:n}):r>s&&e.scrollTo({top:a+(r-s)})},Un=({title:e,headline:t,headIcon:n,type:r,size:a,color:s,stripe:l,border:i,radius:c,shadow:u,className:d,text:p,children:m,onDismiss:y,icon:b,dismissable:j=!1,revealable:_=!1,revealed:x=!1,openIcon:f,closedIcon:h,dismissIcon:C,Headline:S=sj,Controls:g=R3,Content:w=D3,Icon:T=cj})=>{const[E,D]=v.useState(_?x:!0),[P,G]=v.useState(!1),Q=we("alert",r,a,s,d,{revealable:_,dismissable:j,stripe:l},E?"revealed":null,Tp(u),Ii(i),Ep(c)),Y=()=>D(I=>!I),oe={dismissable:j,revealable:_,isRevealed:E,dismiss:()=>{G(!0),y&&y()},openIcon:f,closedIcon:h,dismissIcon:C},H={title:e,text:p,children:m},O={...H,icon:b,Content:w},B={headline:t,headIcon:n,toggle:Y,revealable:_,controlProps:oe,Controls:g};return P?null:o.jsxs("div",{className:Q,children:[!!t&&o.jsx(S,{...B}),E&&(b?o.jsx(T,{...O}):o.jsx(w,{...H}))]})},Sa=me(e=>o.jsx(Un,{...e,type:"info"}),"Info"),wa=me(e=>o.jsx(Un,{...e,type:"success"}),"Success"),_a=me(e=>o.jsx(Un,{...e,type:"warning"}),"Warning"),ka=me(e=>o.jsx(Un,{...e,type:"error"}),"Error");Un.Info=Sa;Un.Success=wa;Un.Warning=_a;Un.Error=ka;const q=me(Un,"Alert"),mj=({type:e="button",size:t,color:n,className:r,disabled:a,bright:s,dark:l,outline:i,bare:c,shaded:u,shadow:d,border:p,radius:m,label:y,tooltip:b,tabIndex:j=0,icon:_,iconClass:x,iconLeft:f,iconLeftClass:h,iconRight:C,iconRightClass:S,text:g,children:w,Content:T=_s,...E})=>{const D=we(t,n,r,{bright:s,dark:l,outline:i,bare:c,shaded:u,icon:_},Tp(d),Ii(p),Ep(m)),P={icon:_,iconClass:x,iconLeft:f,iconLeftClass:h,iconRight:C,iconRightClass:S,text:g,children:w};return o.jsx("button",{className:D,"aria-label":y,tabIndex:j,type:e,disabled:a,"aria-disabled":a,"data-tooltip":b,...E,children:o.jsx(T,{...P})})},M=me(mj,"Button"),gj=({buttons:e,children:t,className:n="buttons",buttonClass:r,Button:a=M,...s})=>o.jsx("div",{className:n,children:e?e.map((l,i)=>o.jsx(a,{className:r,...s,...l},i)):t}),eo=me(gj,"Buttons"),xj=({className:e,disabled:t,children:n,ref:r})=>o.jsx("label",{className:we(e,{disabled:t}),ref:r,children:n}),vj=me(xj,"CheckboxLabel"),yj=({disabled:e=!1,tabIndex:t=0,onChange:n=Ae,ref:r,...a})=>o.jsx("input",{type:"checkbox",ref:r,"aria-disabled":e,tabIndex:e?-1:t,onChange:s=>n(s.target.checked),...a}),Cj=me(yj,"CheckboxInput"),jj=({size:e,color:t,border:n,inline:r,className:a="checkbox",text:s,ref:l,inputRef:i,checked:c,checkedText:u=s,uncheckedText:d=s,inputClass:p,Label:m=vj,Input:y=Cj,...b})=>o.jsxs(m,{className:we(e,t,a,Ii(n),{inline:r}),ref:l,checked:c,...b,children:[o.jsx(y,{className:p,ref:i,checked:c,...b}),c?u:d]}),ln=me(jj,"Checkbox"),bj=({checked:e=!1}={})=>{const[t,n]=v.useState(e);return{isChecked:t,setChecked:n,check:()=>n(!0),uncheck:()=>n(!1)}},Sj=({checked:e=!1,onChange:t,...n})=>{const{isChecked:r,setChecked:a}=bj({checked:e}),s=l=>{a(l),t&&t(l)};return o.jsx(ln,{checked:r,onChange:s,...n})},jr=({visible:e=!1}={})=>{const[t,n]=v.useState(e);return{isVisible:t,setVisible:n,show:()=>n(!0),hide:()=>n(!1)}},wj=({initiallyRevealed:e=!1,open:t=e,confirmIcon:n="check",confirmText:r="Confirm",confirmColor:a="red",confirmClass:s,cancelIcon:l="cross",cancelText:i="Cancel",cancelColor:c="grey",cancelClass:u,confirm:d={iconRight:n,text:r,color:a,className:s},cancel:p={iconLeft:l,text:i,color:c,className:u},buttonsClass:m,className:y=m,buttonClass:b,onClick:j=()=>window.alert("No confirm action defined"),..._})=>{const{isVisible:x,hide:f,show:h}=jr({visible:t}),S={iconRight:n,text:r,color:a,className:s,...d,onClick:w=>{w.preventDefault(),f(),j()}},g={iconLeft:l,text:i,color:c,className:u,outline:!0,...p,onClick:f};return o.jsx(eo,{className:y,buttonClass:b,buttons:x?[g,S]:[{..._,onClick:h}]})},Sn=me(wj,"Confirm");var _j=Object.defineProperty,kj=(e,t,n)=>t in e?_j(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Dc=(e,t,n)=>(kj(e,typeof t!="symbol"?t+"":t,n),n);const br=(e,t={})=>{const n=ee.createContext(t);return{Context:n,Provider:r=>o.jsx(e,{...r,render:a=>o.jsx(n.Provider,{value:a,children:r.children})}),Consumer:r=>a=>o.jsx(n.Consumer,{children:s=>o.jsx(r,{...s,...a})}),Use:()=>ee.useContext(n)}};function Tj(e={},t={},n={}){return Object.entries(t).reduce((r,[a,s])=>{const l=n[s];return l!==null&&typeof l<"u"&&(r[a]=l),r},{...e})}function Ej(e,t=[]){return(typeof t=="string"?t.split(/,\s*|\s+/):t).reduce((n,r)=>{const a=e[r]||Nj(`Cannot expose non-existent action method: ${r}`);return n[r]=a.bind(e),n},{})}function Lj(e,t){const n=e.debug??t.debug,r=P1(e.debugPrefix??t.debugPrefix,e),a=P1(e.debugColor??t.debugColor,e);return n?r?(s,...l)=>console.log(`%c${r}%c${s}`,`color: ${a}`,"color:black",...l):console.log.bind(console):()=>{}}function P1(e,t){return typeof e=="function"?e(t):e}function Nj(...e){throw new Error(e.join(""))}class $a extends ee.Component{constructor(t){super(t);const n=this.constructor;this.debug=Lj(t,n),this.state=Tj(n.initialState,n.initialProps,t),this.actions=Ej(this,n.actions)}getContext(){return{...this.props,...this.state,...this.actions}}getRenderProps(){return this.getContext()}render(){return this.props.render(this.getRenderProps())}}Dc($a,"initialState",{}),Dc($a,"initialProps",{}),Dc($a,"actions",[]);const $1=e=>{Jr(e)&&(e={field:e});const{field:t}=e;return e.type||(e.type="text"),e.label||(e.label=qy(t)),e.id||(e.id=t),e},Rj=e=>{if(Jr(e))return ls(e,$1);if(Vo(e))return e.reduce((t,n)=>{const r=$1(n);return t[r.field]=r,t},{});m3("Invalid columns definition")},Dj=e=>Object.keys(e).filter(t=>!e[t].hidden),Oj=({value:e,search:t})=>Be(e)?e.toString()===t.toString():!1,ua=({value:e,search:t})=>{const n=t.toLowerCase().split(/\s+/);if(Be(e)){const r=e.toString().toLowerCase();return n.every(a=>r.indexOf(a)>-1)}else return!1},Mj=({value:e,search:t})=>Be(e)?parseInt(e)===parseInt(t):!1,Aj=({value:e,search:t})=>Be(e)?parseFloat(e)===parseFloat(t):!1,Pj=({value:e=!1,search:t})=>{const n=parseInt(t)!==0;return e===n},B1={string:ua,text:ua,number:ua,price:ua,pounds:ua,select:Oj,boolean:Pj,integer:Mj,float:Aj},$j=(e,t,n)=>{const r=Object.keys(n);return r.length===0?e:e.filter(a=>r.every(s=>{const l=n[s],i=t[s],c=i.field||s,u=a[c],d=i.filterType||i.type,p=i.filter||B1[d]||B1.text;return Be(l)&&l.length?p({row:a,field:c,value:u,search:l}):!0}))},Bj=(e,t=1,n=e.length)=>{const r=e.length,a=Math.ceil(r/n);t=Math.min(t,a);const s=t-1,l=n*s,i=Math.min(l+n-1,r-1),c=e.slice(l,i+1);return{pageSize:n,pages:a,page:s,pageNo:t,total:r,firstIndex:l,lastIndex:i,firstPage:1,lastPage:a,thisSize:c.length,from:l+1,to:i+1,all:l===i,one:r===1,none:r===0,rows:c}},I1={string:T1,text:T1,number:Nc,price:Nc,pounds:Nc,integer:k1,id:k1},Ij=(e,t,n,r)=>{if(!n)return e;const a=t[n],s=a.sort,l=a.type||"text",i=Mi(s)?s:(I1[l]||I1.text)(n);return e.sort(r?eC(i):i)},zj=({render:e,rows:t=[],...n})=>{const r=v.useMemo(()=>Rj(n.columns),[n.columns]),[a,s]=v.useState(n.pageNo??1),[l,i]=v.useState(n.pageSize??10),[c,u]=v.useState(!1),[d,p]=v.useState({}),[m,y]=v.useState(n.sortColumn),[b,j]=v.useState(n.sortReverse??!1),[_,x]=v.useState(Object.keys(r)),[f,h]=v.useState(Dj(r)),[C,S]=v.useState(!1),g=()=>S(!0),w=()=>S(!1),T=Y=>{m===Y?j(ne=>!ne):(y(Y),j(!1))},E=Y=>{Y.preventDefault(),Y.stopPropagation(),u(ne=>!ne)},D=(Y,ne)=>{p(oe=>{const H={...oe};return Be(ne)&&ne.length?H[Y]=ne:delete H[Y],H}),s(1)},P=Y=>h(ne=>{const oe=ls(ne);return console.log("visible: ",ne),console.log("isVisible: ",oe),oe[Y]?ne.filter(H=>H!==Y):Object.keys(r).filter(H=>H===Y||oe[H])}),G=Y=>{let ne=[],oe=[];const H=ls(f);Y.forEach(O=>{ne.push(O),H[O]&&oe.push(O)}),h(oe),x(ne)},Q=v.useMemo(()=>Bj(Ij($j(t,r,d),r,m,b),a,l),[t,r,d,m,b,a,l]);return e({...n,rows:t,columns:r,page:Q,pageNo:a,setPageNo:s,pageSize:l,setPageSize:i,showFilters:c,toggleFilters:E,filters:d,setFilter:D,sortColumn:m,setSortColumn:y,sortReverse:b,setSortReverse:j,toggleSortColumn:T,visibleColumns:f,setVisibleColumns:h,toggleVisibleColumn:P,columnOrder:_,setColumnOrder:x,changeColumnOrder:G,controlsVisible:C,showControls:g,hideControls:w})},nt=br(zj),Fj=({page:e,summaryClass:t="small"})=>o.jsxs("div",{className:t,children:["Page ",e.pageNo," of ",e.lastPage,". "," ",e.none?"No rows.":e.one?"One row.":e.all?`All ${dl(e.total)} rows.`:`Rows ${dl(e.from)} to ${dl(e.to)} of ${dl(e.total)}.`]}),Uj=nt.Consumer(Fj),z1={isOpen:!1};var ga;let B3=(ga=class extends $a{componentDidMount(){this.mounted=!0,this.props.onLoad(this)}componentWillUnmount(){this.mounted=!1,this.props.onUnload(this)}onMouseEnter(){this.debug("onMouseEnter()"),this.setState({hasHover:!0},this.props.openOnHover?()=>{this.open(),this.focusTrigger()}:null)}onMouseLeave(){this.debug("onMouseLeave()"),this.setState({hasHover:!1},this.props.openOnHover?()=>this.closeSoon():null)}onFocus(){this.debug("onFocus()"),this.setState({hasFocus:!0},this.props.onFocus)}onBlur(){this.debug("onBlur()"),this.setState({hasFocus:!1},this.props.onBlur),this.props.closeOnBlur&&this.closeSoon(!0)}onClick(){this.debug("onClick()"),this.state.isOpen?this.close():this.open()}open(){this.debug("open()"),this.setState({isOpen:!0},this.props.onOpen)}close(){this.debug("close()"),this.setState(z1,this.props.onClose)}closeSoon(t=!1){this.debug("closeSoon()"),Pi(this.props.closeDelay).then(()=>{t||!this.state.hasHover?this.close():console.log(`NOT closing force:${t} hasHover:${this.state.hasHover}`)})}onKeyDown(t){switch(this.debug(`onKeyDown(${t.key})`),t.key){case Lp:case P3:this.state.isOpen?this.selectCursor():this.open(this.cursorFirstIndex());break;case Np:this.close();break;default:console.log(`ignored key ${t.key}`);return}t.preventDefault()}triggerRef(t){this._triggerRef=t}focusTrigger(){this._triggerRef?(this.debug("focussing trigger"),this._triggerRef.focus()):this.debug("no trigger to focus")}},xe(ga,"debug",!1),xe(ga,"defaultProps",{options:[],openOnHover:!1,closeOnBlur:!0,closeDelay:300,onLoad:Ae,onUnload:Ae,onFocus:Ae,onBlur:Ae,onClick:Ae,onOpen:Ae,onClose:Ae}),xe(ga,"initialState",{...z1}),ga);const Hj={isOpen:!1,cursor:void 0,selected:void 0};class Ba extends B3{open(t=this.cursorFirstIndex()){this.debug(`open(${t})`),this.setState({isOpen:!0,cursor:t},this.props.onOpen)}onKeyDown(t){switch(this.debug(`onKeyDown(${t.key})`),t.key){case M3:this.state.isOpen?this.setCursor(this.cursorNextIndex()):this.open(this.cursorFirstIndex());break;case A3:this.state.isOpen?this.setCursor(this.cursorPrevIndex()):this.open(this.cursorLastIndex());break;case Lp:case P3:this.state.isOpen?this.selectCursor():this.open(this.cursorFirstIndex());break;case Np:this.close();break;default:console.log(`ignored key ${t.key}`);return}t.preventDefault()}menuOptions(){return this.props.options}cursorFirstIndex(){return uj(this.menuOptions())}cursorLastIndex(){return dj(this.menuOptions())}cursorNextIndex(){return pj(this.menuOptions(),this.state.cursor)}cursorPrevIndex(){return fj(this.menuOptions(),this.state.cursor)}setCursor(t){this.debug(`setCursor(${t})`),this.setState({cursor:t})}selectCursor(){this.debug("selectCursor()");const{cursor:t}=this.state,{options:n}=this.props;if(n&&n.length&&Be(t)){const r=n[t];this.debug(`selectCursor() ${t} =>`,r),this.selectOption(r)}else this.debug("Not selecting: cursor out of range")}selectOption(t){this.debug("selectOption()",t),this.setState(this.selectState(t),()=>this.props.onSelect(t)),this.props.closeOnSelect?(console.log("closeOnSelect is set, closing"),this.closeSoon(!0)):console.log("closeOnSelect is not set, NOT closing")}selectState(t){return{selected:t}}menuRef(t){this._menuRef=t}activeRef(t){$3(this._menuRef,t)}}xe(Ba,"debug",!0),xe(Ba,"defaultProps",{options:[],openOnHover:!1,closeOnBlur:!0,closeDelay:300,onLoad:Ae,onUnload:Ae,onFocus:Ae,onBlur:Ae,onClick:Ae,onOpen:Ae,onClose:Ae,onSelect:Ae,closeOnSelect:!0}),xe(Ba,"initialState",{...Hj});var xn;let Vj=(xn=class extends Ba{},xe(xn,"debug",!1),xe(xn,"debugPrefix","Dropdown > "),xe(xn,"debugColor","MediumVioletRed"),xe(xn,"defaultProps",{...xn.defaultProps,options:[],displayOption:hj}),xe(xn,"actions",["onMouseEnter","onMouseLeave","onFocus","onBlur","onClick","onKeyDown","open","close","setCursor","selectCursor","selectOption","triggerRef","menuRef","activeRef"]),xn);const ks=br(Vj),Wj=({triggerClass:e="trigger",triggerRef:t,safeAreaClass:n="safe-area",onMouseEnter:r,onMouseLeave:a,onKeyDown:s,onFocus:l,onBlur:i,onClick:c,...u})=>o.jsxs("div",{className:e,onClick:c,onMouseEnter:r,onMouseLeave:a,onKeyDown:s,onFocus:l,onBlur:i,tabIndex:0,ref:t,children:[o.jsx(_s,{...jp(u,/^(icon|text)/)}),o.jsx("div",{className:n})]}),Zj=ks.Consumer(Wj),Kj=({option:e,active:t,activeRef:n,selected:r,onClick:a,onMouseEnter:s,optionClass:l="item no-hover",activeClass:i="active",selectedClass:c="selected",disabledClass:u="disabled",displayOption:d})=>o.jsx("div",{className:we(l,e.className,t?i:null,r?c:null,e.disabled?u:null),onMouseEnter:s,onClick:a,ref:t?n:null,"aria-disabled":e.disabled,children:d(e)}),Gj=ks.Consumer(Kj),Yj=({option:e,separatorClass:t="separator"})=>o.jsx("div",{className:we(t,e.className)}),Xj=({option:e,optionClass:t="item no-hover",headingClass:n="heading"})=>o.jsx("h4",{className:we(n,t,e.className),children:e.heading}),Qj=({options:e=[],menuRef:t,menuClass:n="menu border bdr-1",cursor:r,selected:a,selectOption:s,setCursor:l,onMouseEnter:i,onMouseLeave:c,Option:u=Gj,Separator:d=Yj,Heading:p=Xj})=>o.jsx("div",{className:n,ref:t,onMouseEnter:i,onMouseLeave:c,children:e.map((m,y)=>m.separator?o.jsx(d,{option:m},y):m.heading?o.jsx(p,{option:m},y):o.jsx(u,{option:m,active:Be(r)&&e[r]===m,selected:a===m,onClick:()=>s(m),onMouseEnter:()=>l(y)},m.id??m.value??y))}),qj=ks.Consumer(Qj),Jj=({className:e="dropdown",openClass:t="open",closedClass:n="closed",isOpen:r,right:a,size:s,wide:l,Trigger:i=Zj,Options:c=qj})=>o.jsxs("div",{className:we(e,s,r?t:n,{right:a,wide:l}),children:[o.jsx(i,{}),r&&o.jsx(c,{})]}),eb=ks.Consumer(Jj),tb=({Content:e=eb,...t})=>o.jsx(ks.Provider,{...t,children:o.jsx(e,{})}),Sr=me(tb,"DropdownMenu"),nb=({setPageSize:e,pageSizes:t=[10,25,50,100,250,500,1e3]})=>o.jsx("div",{className:"pagesize",children:o.jsx(Sr,{right:!0,iconRight:"angle-down",text:"Page Size",size:"small",options:t.map(n=>({n,text:`${n} per page`})),onSelect:n=>e(n.n)})}),I3=nt.Consumer(nb);class Ta extends B3{}xe(Ta,"debug",!1),xe(Ta,"debugPrefix","Dropdown > "),xe(Ta,"debugColor","MediumVioletRed"),xe(Ta,"actions",["onMouseEnter","onMouseLeave","onFocus","onBlur","onClick","onKeyDown","open","close","triggerRef"]);const Ts=br(Ta),rb=({triggerClass:e="trigger",triggerRef:t,safeAreaClass:n="safe-area",onMouseEnter:r,onMouseLeave:a,onKeyDown:s,onFocus:l,onBlur:i,onClick:c,...u})=>o.jsxs("div",{className:e,onClick:c,onMouseEnter:r,onMouseLeave:a,onKeyDown:s,onFocus:l,onBlur:i,tabIndex:0,ref:t,children:[o.jsx(_s,{...jp(u,/^(icon|text)/)}),o.jsx("div",{className:n})]}),ob=Ts.Consumer(rb),ab=({bodyClass:e="body border bdr-1",onMouseEnter:t,onMouseLeave:n,content:r})=>o.jsx("div",{className:e,onMouseEnter:t,onMouseLeave:n,children:r||"No content defined"}),sb=Ts.Consumer(ab),lb=({className:e="dropdown",openClass:t="open",closedClass:n="closed",isOpen:r,right:a,size:s,wide:l,Trigger:i=ob,Body:c=sb})=>o.jsxs("div",{className:we(e,s,r?t:n,{right:a,wide:l}),children:[o.jsx(i,{}),r&&o.jsx(c,{})]}),ib=Ts.Consumer(lb),cb=({Content:e=ib,content:t,children:n,...r})=>o.jsx(Ts.Provider,{content:t||n,...r,children:o.jsx(e,{})}),cn=me(cb,"Dropdown"),ub=({item:e,setNodeRef:t,style:n,listeners:r,toggleVisibleColumn:a,isVisible:s,...l})=>o.jsxs("div",{ref:t,style:n,className:`sortable item flex middle border mar-b-2 ${e.moved?"moved":""}`,...l,children:[o.jsx(ln,{className:"fluid flex middle",checked:s[e.id]||!1,onChange:()=>a(e.id),text:e.label},e.id),o.jsx("div",{...r,className:"pad-h-2",children:o.jsx(J,{name:"drag",className:"drag-handle"})})]}),db=({close:e})=>o.jsx(M,{className:"wide",size:"smaller",color:"green",text:"OK",onClick:e}),pb=Ts.Consumer(db);function fb(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return v.useMemo(()=>r=>{t.forEach(a=>a(r))},t)}const Fi=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Wo(e){const t=Object.prototype.toString.call(e);return t==="[object Window]"||t==="[object global]"}function Rp(e){return"nodeType"in e}function yt(e){var t,n;return e?Wo(e)?e:Rp(e)&&(t=(n=e.ownerDocument)==null?void 0:n.defaultView)!=null?t:window:window}function Dp(e){const{Document:t}=yt(e);return e instanceof t}function Es(e){return Wo(e)?!1:e instanceof yt(e).HTMLElement}function z3(e){return e instanceof yt(e).SVGElement}function Zo(e){return e?Wo(e)?e.document:Rp(e)?Dp(e)?e:Es(e)||z3(e)?e.ownerDocument:document:document:document}const Zt=Fi?v.useLayoutEffect:v.useEffect;function Ui(e){const t=v.useRef(e);return Zt(()=>{t.current=e}),v.useCallback(function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return t.current==null?void 0:t.current(...r)},[])}function hb(){const e=v.useRef(null),t=v.useCallback((r,a)=>{e.current=setInterval(r,a)},[]),n=v.useCallback(()=>{e.current!==null&&(clearInterval(e.current),e.current=null)},[]);return[t,n]}function is(e,t){t===void 0&&(t=[e]);const n=v.useRef(e);return Zt(()=>{n.current!==e&&(n.current=e)},t),n}function Ls(e,t){const n=v.useRef();return v.useMemo(()=>{const r=e(n.current);return n.current=r,r},[...t])}function ci(e){const t=Ui(e),n=v.useRef(null),r=v.useCallback(a=>{a!==n.current&&(t==null||t(a,n.current)),n.current=a},[]);return[n,r]}function ui(e){const t=v.useRef();return v.useEffect(()=>{t.current=e},[e]),t.current}let Oc={};function Ns(e,t){return v.useMemo(()=>{if(t)return t;const n=Oc[e]==null?0:Oc[e]+1;return Oc[e]=n,e+"-"+n},[e,t])}function F3(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];return r.reduce((s,l)=>{const i=Object.entries(l);for(const[c,u]of i){const d=s[c];d!=null&&(s[c]=d+e*u)}return s},{...t})}}const Ro=F3(1),cs=F3(-1);function mb(e){return"clientX"in e&&"clientY"in e}function Hi(e){if(!e)return!1;const{KeyboardEvent:t}=yt(e.target);return t&&e instanceof t}function gb(e){if(!e)return!1;const{TouchEvent:t}=yt(e.target);return t&&e instanceof t}function di(e){if(gb(e)){if(e.touches&&e.touches.length){const{clientX:t,clientY:n}=e.touches[0];return{x:t,y:n}}else if(e.changedTouches&&e.changedTouches.length){const{clientX:t,clientY:n}=e.changedTouches[0];return{x:t,y:n}}}return mb(e)?{x:e.clientX,y:e.clientY}:null}const mr=Object.freeze({Translate:{toString(e){if(!e)return;const{x:t,y:n}=e;return"translate3d("+(t?Math.round(t):0)+"px, "+(n?Math.round(n):0)+"px, 0)"}},Scale:{toString(e){if(!e)return;const{scaleX:t,scaleY:n}=e;return"scaleX("+t+") scaleY("+n+")"}},Transform:{toString(e){if(e)return[mr.Translate.toString(e),mr.Scale.toString(e)].join(" ")}},Transition:{toString(e){let{property:t,duration:n,easing:r}=e;return t+" "+n+"ms "+r}}}),F1="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function xb(e){return e.matches(F1)?e:e.querySelector(F1)}const vb={display:"none"};function yb(e){let{id:t,value:n}=e;return ee.createElement("div",{id:t,style:vb},n)}function Cb(e){let{id:t,announcement:n,ariaLiveType:r="assertive"}=e;const a={position:"fixed",width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"};return ee.createElement("div",{id:t,style:a,role:"status","aria-live":r,"aria-atomic":!0},n)}function jb(){const[e,t]=v.useState("");return{announce:v.useCallback(r=>{r!=null&&t(r)},[]),announcement:e}}const U3=v.createContext(null);function bb(e){const t=v.useContext(U3);v.useEffect(()=>{if(!t)throw new Error("useDndMonitor must be used within a children of <DndContext>");return t(e)},[e,t])}function Sb(){const[e]=v.useState(()=>new Set),t=v.useCallback(r=>(e.add(r),()=>e.delete(r)),[e]);return[v.useCallback(r=>{let{type:a,event:s}=r;e.forEach(l=>{var i;return(i=l[a])==null?void 0:i.call(l,s)})},[e]),t]}const wb={draggable:`
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `},_b={onDragStart(e){let{active:t}=e;return"Picked up draggable item "+t.id+"."},onDragOver(e){let{active:t,over:n}=e;return n?"Draggable item "+t.id+" was moved over droppable area "+n.id+".":"Draggable item "+t.id+" is no longer over a droppable area."},onDragEnd(e){let{active:t,over:n}=e;return n?"Draggable item "+t.id+" was dropped over droppable area "+n.id:"Draggable item "+t.id+" was dropped."},onDragCancel(e){let{active:t}=e;return"Dragging was cancelled. Draggable item "+t.id+" was dropped."}};function kb(e){let{announcements:t=_b,container:n,hiddenTextDescribedById:r,screenReaderInstructions:a=wb}=e;const{announce:s,announcement:l}=jb(),i=Ns("DndLiveRegion"),[c,u]=v.useState(!1);if(v.useEffect(()=>{u(!0)},[]),bb(v.useMemo(()=>({onDragStart(p){let{active:m}=p;s(t.onDragStart({active:m}))},onDragMove(p){let{active:m,over:y}=p;t.onDragMove&&s(t.onDragMove({active:m,over:y}))},onDragOver(p){let{active:m,over:y}=p;s(t.onDragOver({active:m,over:y}))},onDragEnd(p){let{active:m,over:y}=p;s(t.onDragEnd({active:m,over:y}))},onDragCancel(p){let{active:m,over:y}=p;s(t.onDragCancel({active:m,over:y}))}}),[s,t])),!c)return null;const d=ee.createElement(ee.Fragment,null,ee.createElement(yb,{id:r,value:a.draggable}),ee.createElement(Cb,{id:i,announcement:l}));return n?Tn.createPortal(d,n):d}var Ge;(function(e){e.DragStart="dragStart",e.DragMove="dragMove",e.DragEnd="dragEnd",e.DragCancel="dragCancel",e.DragOver="dragOver",e.RegisterDroppable="registerDroppable",e.SetDroppableDisabled="setDroppableDisabled",e.UnregisterDroppable="unregisterDroppable"})(Ge||(Ge={}));function pi(){}function U1(e,t){return v.useMemo(()=>({sensor:e,options:t??{}}),[e,t])}function Tb(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return v.useMemo(()=>[...t].filter(r=>r!=null),[...t])}const sn=Object.freeze({x:0,y:0});function H3(e,t){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function Eb(e,t){const n=di(e);if(!n)return"0 0";const r={x:(n.x-t.left)/t.width*100,y:(n.y-t.top)/t.height*100};return r.x+"% "+r.y+"%"}function V3(e,t){let{data:{value:n}}=e,{data:{value:r}}=t;return n-r}function Lb(e,t){let{data:{value:n}}=e,{data:{value:r}}=t;return r-n}function H1(e){let{left:t,top:n,height:r,width:a}=e;return[{x:t,y:n},{x:t+a,y:n},{x:t,y:n+r},{x:t+a,y:n+r}]}function W3(e,t){if(!e||e.length===0)return null;const[n]=e;return t?n[t]:n}function V1(e,t,n){return t===void 0&&(t=e.left),n===void 0&&(n=e.top),{x:t+e.width*.5,y:n+e.height*.5}}const Nb=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:r}=e;const a=V1(t,t.left,t.top),s=[];for(const l of r){const{id:i}=l,c=n.get(i);if(c){const u=H3(V1(c),a);s.push({id:i,data:{droppableContainer:l,value:u}})}}return s.sort(V3)},Rb=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:r}=e;const a=H1(t),s=[];for(const l of r){const{id:i}=l,c=n.get(i);if(c){const u=H1(c),d=a.reduce((m,y,b)=>m+H3(u[b],y),0),p=Number((d/4).toFixed(4));s.push({id:i,data:{droppableContainer:l,value:p}})}}return s.sort(V3)};function Db(e,t){const n=Math.max(t.top,e.top),r=Math.max(t.left,e.left),a=Math.min(t.left+t.width,e.left+e.width),s=Math.min(t.top+t.height,e.top+e.height),l=a-r,i=s-n;if(r<a&&n<s){const c=t.width*t.height,u=e.width*e.height,d=l*i,p=d/(c+u-d);return Number(p.toFixed(4))}return 0}const Ob=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:r}=e;const a=[];for(const s of r){const{id:l}=s,i=n.get(l);if(i){const c=Db(i,t);c>0&&a.push({id:l,data:{droppableContainer:s,value:c}})}}return a.sort(Lb)};function Mb(e,t,n){return{...e,scaleX:t&&n?t.width/n.width:1,scaleY:t&&n?t.height/n.height:1}}function Z3(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:sn}function Ab(e){return function(n){for(var r=arguments.length,a=new Array(r>1?r-1:0),s=1;s<r;s++)a[s-1]=arguments[s];return a.reduce((l,i)=>({...l,top:l.top+e*i.y,bottom:l.bottom+e*i.y,left:l.left+e*i.x,right:l.right+e*i.x}),{...n})}}const Pb=Ab(1);function K3(e){if(e.startsWith("matrix3d(")){const t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}else if(e.startsWith("matrix(")){const t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}function $b(e,t,n){const r=K3(t);if(!r)return e;const{scaleX:a,scaleY:s,x:l,y:i}=r,c=e.left-l-(1-a)*parseFloat(n),u=e.top-i-(1-s)*parseFloat(n.slice(n.indexOf(" ")+1)),d=a?e.width/a:e.width,p=s?e.height/s:e.height;return{width:d,height:p,top:u,right:c+d,bottom:u+p,left:c}}const Bb={ignoreTransform:!1};function Ko(e,t){t===void 0&&(t=Bb);let n=e.getBoundingClientRect();if(t.ignoreTransform){const{transform:u,transformOrigin:d}=yt(e).getComputedStyle(e);u&&(n=$b(n,u,d))}const{top:r,left:a,width:s,height:l,bottom:i,right:c}=n;return{top:r,left:a,width:s,height:l,bottom:i,right:c}}function W1(e){return Ko(e,{ignoreTransform:!0})}function Ib(e){const t=e.innerWidth,n=e.innerHeight;return{top:0,left:0,right:t,bottom:n,width:t,height:n}}function zb(e,t){return t===void 0&&(t=yt(e).getComputedStyle(e)),t.position==="fixed"}function Fb(e,t){t===void 0&&(t=yt(e).getComputedStyle(e));const n=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some(a=>{const s=t[a];return typeof s=="string"?n.test(s):!1})}function Vi(e,t){const n=[];function r(a){if(t!=null&&n.length>=t||!a)return n;if(Dp(a)&&a.scrollingElement!=null&&!n.includes(a.scrollingElement))return n.push(a.scrollingElement),n;if(!Es(a)||z3(a)||n.includes(a))return n;const s=yt(e).getComputedStyle(a);return a!==e&&Fb(a,s)&&n.push(a),zb(a,s)?n:r(a.parentNode)}return e?r(e):n}function G3(e){const[t]=Vi(e,1);return t??null}function Mc(e){return!Fi||!e?null:Wo(e)?e:Rp(e)?Dp(e)||e===Zo(e).scrollingElement?window:Es(e)?e:null:null}function Y3(e){return Wo(e)?e.scrollX:e.scrollLeft}function X3(e){return Wo(e)?e.scrollY:e.scrollTop}function Zu(e){return{x:Y3(e),y:X3(e)}}var et;(function(e){e[e.Forward=1]="Forward",e[e.Backward=-1]="Backward"})(et||(et={}));function Q3(e){return!Fi||!e?!1:e===document.scrollingElement}function q3(e){const t={x:0,y:0},n=Q3(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth},r={x:e.scrollWidth-n.width,y:e.scrollHeight-n.height},a=e.scrollTop<=t.y,s=e.scrollLeft<=t.x,l=e.scrollTop>=r.y,i=e.scrollLeft>=r.x;return{isTop:a,isLeft:s,isBottom:l,isRight:i,maxScroll:r,minScroll:t}}const Ub={x:.2,y:.2};function Hb(e,t,n,r,a){let{top:s,left:l,right:i,bottom:c}=n;r===void 0&&(r=10),a===void 0&&(a=Ub);const{isTop:u,isBottom:d,isLeft:p,isRight:m}=q3(e),y={x:0,y:0},b={x:0,y:0},j={height:t.height*a.y,width:t.width*a.x};return!u&&s<=t.top+j.height?(y.y=et.Backward,b.y=r*Math.abs((t.top+j.height-s)/j.height)):!d&&c>=t.bottom-j.height&&(y.y=et.Forward,b.y=r*Math.abs((t.bottom-j.height-c)/j.height)),!m&&i>=t.right-j.width?(y.x=et.Forward,b.x=r*Math.abs((t.right-j.width-i)/j.width)):!p&&l<=t.left+j.width&&(y.x=et.Backward,b.x=r*Math.abs((t.left+j.width-l)/j.width)),{direction:y,speed:b}}function Vb(e){if(e===document.scrollingElement){const{innerWidth:s,innerHeight:l}=window;return{top:0,left:0,right:s,bottom:l,width:s,height:l}}const{top:t,left:n,right:r,bottom:a}=e.getBoundingClientRect();return{top:t,left:n,right:r,bottom:a,width:e.clientWidth,height:e.clientHeight}}function J3(e){return e.reduce((t,n)=>Ro(t,Zu(n)),sn)}function Wb(e){return e.reduce((t,n)=>t+Y3(n),0)}function Zb(e){return e.reduce((t,n)=>t+X3(n),0)}function eg(e,t){if(t===void 0&&(t=Ko),!e)return;const{top:n,left:r,bottom:a,right:s}=t(e);G3(e)&&(a<=0||s<=0||n>=window.innerHeight||r>=window.innerWidth)&&e.scrollIntoView({block:"center",inline:"center"})}const Kb=[["x",["left","right"],Wb],["y",["top","bottom"],Zb]];class Op{constructor(t,n){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;const r=Vi(n),a=J3(r);this.rect={...t},this.width=t.width,this.height=t.height;for(const[s,l,i]of Kb)for(const c of l)Object.defineProperty(this,c,{get:()=>{const u=i(r),d=a[s]-u;return this.rect[c]+d},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}}class Ia{constructor(t){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach(n=>{var r;return(r=this.target)==null?void 0:r.removeEventListener(...n)})},this.target=t}add(t,n,r){var a;(a=this.target)==null||a.addEventListener(t,n,r),this.listeners.push([t,n,r])}}function Gb(e){const{EventTarget:t}=yt(e);return e instanceof t?e:Zo(e)}function Ac(e,t){const n=Math.abs(e.x),r=Math.abs(e.y);return typeof t=="number"?Math.sqrt(n**2+r**2)>t:"x"in t&&"y"in t?n>t.x&&r>t.y:"x"in t?n>t.x:"y"in t?r>t.y:!1}var Bt;(function(e){e.Click="click",e.DragStart="dragstart",e.Keydown="keydown",e.ContextMenu="contextmenu",e.Resize="resize",e.SelectionChange="selectionchange",e.VisibilityChange="visibilitychange"})(Bt||(Bt={}));function Z1(e){e.preventDefault()}function Yb(e){e.stopPropagation()}var fe;(function(e){e.Space="Space",e.Down="ArrowDown",e.Right="ArrowRight",e.Left="ArrowLeft",e.Up="ArrowUp",e.Esc="Escape",e.Enter="Enter"})(fe||(fe={}));const tg={start:[fe.Space,fe.Enter],cancel:[fe.Esc],end:[fe.Space,fe.Enter]},Xb=(e,t)=>{let{currentCoordinates:n}=t;switch(e.code){case fe.Right:return{...n,x:n.x+25};case fe.Left:return{...n,x:n.x-25};case fe.Down:return{...n,y:n.y+25};case fe.Up:return{...n,y:n.y-25}}};class Mp{constructor(t){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=t;const{event:{target:n}}=t;this.props=t,this.listeners=new Ia(Zo(n)),this.windowListeners=new Ia(yt(n)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(Bt.Resize,this.handleCancel),this.windowListeners.add(Bt.VisibilityChange,this.handleCancel),setTimeout(()=>this.listeners.add(Bt.Keydown,this.handleKeyDown))}handleStart(){const{activeNode:t,onStart:n}=this.props,r=t.node.current;r&&eg(r),n(sn)}handleKeyDown(t){if(Hi(t)){const{active:n,context:r,options:a}=this.props,{keyboardCodes:s=tg,coordinateGetter:l=Xb,scrollBehavior:i="smooth"}=a,{code:c}=t;if(s.end.includes(c)){this.handleEnd(t);return}if(s.cancel.includes(c)){this.handleCancel(t);return}const{collisionRect:u}=r.current,d=u?{x:u.left,y:u.top}:sn;this.referenceCoordinates||(this.referenceCoordinates=d);const p=l(t,{active:n,context:r.current,currentCoordinates:d});if(p){const m=cs(p,d),y={x:0,y:0},{scrollableAncestors:b}=r.current;for(const j of b){const _=t.code,{isTop:x,isRight:f,isLeft:h,isBottom:C,maxScroll:S,minScroll:g}=q3(j),w=Vb(j),T={x:Math.min(_===fe.Right?w.right-w.width/2:w.right,Math.max(_===fe.Right?w.left:w.left+w.width/2,p.x)),y:Math.min(_===fe.Down?w.bottom-w.height/2:w.bottom,Math.max(_===fe.Down?w.top:w.top+w.height/2,p.y))},E=_===fe.Right&&!f||_===fe.Left&&!h,D=_===fe.Down&&!C||_===fe.Up&&!x;if(E&&T.x!==p.x){const P=j.scrollLeft+m.x,G=_===fe.Right&&P<=S.x||_===fe.Left&&P>=g.x;if(G&&!m.y){j.scrollTo({left:P,behavior:i});return}G?y.x=j.scrollLeft-P:y.x=_===fe.Right?j.scrollLeft-S.x:j.scrollLeft-g.x,y.x&&j.scrollBy({left:-y.x,behavior:i});break}else if(D&&T.y!==p.y){const P=j.scrollTop+m.y,G=_===fe.Down&&P<=S.y||_===fe.Up&&P>=g.y;if(G&&!m.x){j.scrollTo({top:P,behavior:i});return}G?y.y=j.scrollTop-P:y.y=_===fe.Down?j.scrollTop-S.y:j.scrollTop-g.y,y.y&&j.scrollBy({top:-y.y,behavior:i});break}}this.handleMove(t,Ro(cs(p,this.referenceCoordinates),y))}}}handleMove(t,n){const{onMove:r}=this.props;t.preventDefault(),r(n)}handleEnd(t){const{onEnd:n}=this.props;t.preventDefault(),this.detach(),n()}handleCancel(t){const{onCancel:n}=this.props;t.preventDefault(),this.detach(),n()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}}Mp.activators=[{eventName:"onKeyDown",handler:(e,t,n)=>{let{keyboardCodes:r=tg,onActivation:a}=t,{active:s}=n;const{code:l}=e.nativeEvent;if(r.start.includes(l)){const i=s.activatorNode.current;return i&&e.target!==i?!1:(e.preventDefault(),a==null||a({event:e.nativeEvent}),!0)}return!1}}];function K1(e){return!!(e&&"distance"in e)}function G1(e){return!!(e&&"delay"in e)}class Ap{constructor(t,n,r){var a;r===void 0&&(r=Gb(t.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=t,this.events=n;const{event:s}=t,{target:l}=s;this.props=t,this.events=n,this.document=Zo(l),this.documentListeners=new Ia(this.document),this.listeners=new Ia(r),this.windowListeners=new Ia(yt(l)),this.initialCoordinates=(a=di(s))!=null?a:sn,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){const{events:t,props:{options:{activationConstraint:n,bypassActivationConstraint:r}}}=this;if(this.listeners.add(t.move.name,this.handleMove,{passive:!1}),this.listeners.add(t.end.name,this.handleEnd),this.windowListeners.add(Bt.Resize,this.handleCancel),this.windowListeners.add(Bt.DragStart,Z1),this.windowListeners.add(Bt.VisibilityChange,this.handleCancel),this.windowListeners.add(Bt.ContextMenu,Z1),this.documentListeners.add(Bt.Keydown,this.handleKeydown),n){if(r!=null&&r({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(G1(n)){this.timeoutId=setTimeout(this.handleStart,n.delay);return}if(K1(n))return}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),this.timeoutId!==null&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handleStart(){const{initialCoordinates:t}=this,{onStart:n}=this.props;t&&(this.activated=!0,this.documentListeners.add(Bt.Click,Yb,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(Bt.SelectionChange,this.removeTextSelection),n(t))}handleMove(t){var n;const{activated:r,initialCoordinates:a,props:s}=this,{onMove:l,options:{activationConstraint:i}}=s;if(!a)return;const c=(n=di(t))!=null?n:sn,u=cs(a,c);if(!r&&i){if(K1(i)){if(i.tolerance!=null&&Ac(u,i.tolerance))return this.handleCancel();if(Ac(u,i.distance))return this.handleStart()}return G1(i)&&Ac(u,i.tolerance)?this.handleCancel():void 0}t.cancelable&&t.preventDefault(),l(c)}handleEnd(){const{onEnd:t}=this.props;this.detach(),t()}handleCancel(){const{onCancel:t}=this.props;this.detach(),t()}handleKeydown(t){t.code===fe.Esc&&this.handleCancel()}removeTextSelection(){var t;(t=this.document.getSelection())==null||t.removeAllRanges()}}const Qb={move:{name:"pointermove"},end:{name:"pointerup"}};class Pp extends Ap{constructor(t){const{event:n}=t,r=Zo(n.target);super(t,Qb,r)}}Pp.activators=[{eventName:"onPointerDown",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;return!n.isPrimary||n.button!==0?!1:(r==null||r({event:n}),!0)}}];const qb={move:{name:"mousemove"},end:{name:"mouseup"}};var Ku;(function(e){e[e.RightClick=2]="RightClick"})(Ku||(Ku={}));class Jb extends Ap{constructor(t){super(t,qb,Zo(t.event.target))}}Jb.activators=[{eventName:"onMouseDown",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;return n.button===Ku.RightClick?!1:(r==null||r({event:n}),!0)}}];const Pc={move:{name:"touchmove"},end:{name:"touchend"}};class eS extends Ap{constructor(t){super(t,Pc)}static setup(){return window.addEventListener(Pc.move.name,t,{capture:!1,passive:!1}),function(){window.removeEventListener(Pc.move.name,t)};function t(){}}}eS.activators=[{eventName:"onTouchStart",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;const{touches:a}=n;return a.length>1?!1:(r==null||r({event:n}),!0)}}];var za;(function(e){e[e.Pointer=0]="Pointer",e[e.DraggableRect=1]="DraggableRect"})(za||(za={}));var fi;(function(e){e[e.TreeOrder=0]="TreeOrder",e[e.ReversedTreeOrder=1]="ReversedTreeOrder"})(fi||(fi={}));function tS(e){let{acceleration:t,activator:n=za.Pointer,canScroll:r,draggingRect:a,enabled:s,interval:l=5,order:i=fi.TreeOrder,pointerCoordinates:c,scrollableAncestors:u,scrollableAncestorRects:d,delta:p,threshold:m}=e;const y=rS({delta:p,disabled:!s}),[b,j]=hb(),_=v.useRef({x:0,y:0}),x=v.useRef({x:0,y:0}),f=v.useMemo(()=>{switch(n){case za.Pointer:return c?{top:c.y,bottom:c.y,left:c.x,right:c.x}:null;case za.DraggableRect:return a}},[n,a,c]),h=v.useRef(null),C=v.useCallback(()=>{const g=h.current;if(!g)return;const w=_.current.x*x.current.x,T=_.current.y*x.current.y;g.scrollBy(w,T)},[]),S=v.useMemo(()=>i===fi.TreeOrder?[...u].reverse():u,[i,u]);v.useEffect(()=>{if(!s||!u.length||!f){j();return}for(const g of S){if((r==null?void 0:r(g))===!1)continue;const w=u.indexOf(g),T=d[w];if(!T)continue;const{direction:E,speed:D}=Hb(g,T,f,t,m);for(const P of["x","y"])y[P][E[P]]||(D[P]=0,E[P]=0);if(D.x>0||D.y>0){j(),h.current=g,b(C,l),_.current=D,x.current=E;return}}_.current={x:0,y:0},x.current={x:0,y:0},j()},[t,C,r,j,s,l,JSON.stringify(f),JSON.stringify(y),b,u,S,d,JSON.stringify(m)])}const nS={x:{[et.Backward]:!1,[et.Forward]:!1},y:{[et.Backward]:!1,[et.Forward]:!1}};function rS(e){let{delta:t,disabled:n}=e;const r=ui(t);return Ls(a=>{if(n||!r||!a)return nS;const s={x:Math.sign(t.x-r.x),y:Math.sign(t.y-r.y)};return{x:{[et.Backward]:a.x[et.Backward]||s.x===-1,[et.Forward]:a.x[et.Forward]||s.x===1},y:{[et.Backward]:a.y[et.Backward]||s.y===-1,[et.Forward]:a.y[et.Forward]||s.y===1}}},[n,t,r])}function oS(e,t){const n=t!==null?e.get(t):void 0,r=n?n.node.current:null;return Ls(a=>{var s;return t===null?null:(s=r??a)!=null?s:null},[r,t])}function aS(e,t){return v.useMemo(()=>e.reduce((n,r)=>{const{sensor:a}=r,s=a.activators.map(l=>({eventName:l.eventName,handler:t(l.handler,r)}));return[...n,...s]},[]),[e,t])}var us;(function(e){e[e.Always=0]="Always",e[e.BeforeDragging=1]="BeforeDragging",e[e.WhileDragging=2]="WhileDragging"})(us||(us={}));var Gu;(function(e){e.Optimized="optimized"})(Gu||(Gu={}));const Y1=new Map;function sS(e,t){let{dragging:n,dependencies:r,config:a}=t;const[s,l]=v.useState(null),{frequency:i,measure:c,strategy:u}=a,d=v.useRef(e),p=_(),m=is(p),y=v.useCallback(function(x){x===void 0&&(x=[]),!m.current&&l(f=>f===null?x:f.concat(x.filter(h=>!f.includes(h))))},[m]),b=v.useRef(null),j=Ls(x=>{if(p&&!n)return Y1;if(!x||x===Y1||d.current!==e||s!=null){const f=new Map;for(let h of e){if(!h)continue;if(s&&s.length>0&&!s.includes(h.id)&&h.rect.current){f.set(h.id,h.rect.current);continue}const C=h.node.current,S=C?new Op(c(C),C):null;h.rect.current=S,S&&f.set(h.id,S)}return f}return x},[e,s,n,p,c]);return v.useEffect(()=>{d.current=e},[e]),v.useEffect(()=>{p||y()},[n,p]),v.useEffect(()=>{s&&s.length>0&&l(null)},[JSON.stringify(s)]),v.useEffect(()=>{p||typeof i!="number"||b.current!==null||(b.current=setTimeout(()=>{y(),b.current=null},i))},[i,p,y,...r]),{droppableRects:j,measureDroppableContainers:y,measuringScheduled:s!=null};function _(){switch(u){case us.Always:return!1;case us.BeforeDragging:return n;default:return!n}}}function $p(e,t){return Ls(n=>e?n||(typeof t=="function"?t(e):e):null,[t,e])}function lS(e,t){return $p(e,t)}function iS(e){let{callback:t,disabled:n}=e;const r=Ui(t),a=v.useMemo(()=>{if(n||typeof window>"u"||typeof window.MutationObserver>"u")return;const{MutationObserver:s}=window;return new s(r)},[r,n]);return v.useEffect(()=>()=>a==null?void 0:a.disconnect(),[a]),a}function Wi(e){let{callback:t,disabled:n}=e;const r=Ui(t),a=v.useMemo(()=>{if(n||typeof window>"u"||typeof window.ResizeObserver>"u")return;const{ResizeObserver:s}=window;return new s(r)},[n]);return v.useEffect(()=>()=>a==null?void 0:a.disconnect(),[a]),a}function cS(e){return new Op(Ko(e),e)}function X1(e,t,n){t===void 0&&(t=cS);const[r,a]=v.useReducer(i,null),s=iS({callback(c){if(e)for(const u of c){const{type:d,target:p}=u;if(d==="childList"&&p instanceof HTMLElement&&p.contains(e)){a();break}}}}),l=Wi({callback:a});return Zt(()=>{a(),e?(l==null||l.observe(e),s==null||s.observe(document.body,{childList:!0,subtree:!0})):(l==null||l.disconnect(),s==null||s.disconnect())},[e]),r;function i(c){if(!e)return null;if(e.isConnected===!1){var u;return(u=c??n)!=null?u:null}const d=t(e);return JSON.stringify(c)===JSON.stringify(d)?c:d}}function uS(e){const t=$p(e);return Z3(e,t)}const Q1=[];function dS(e){const t=v.useRef(e),n=Ls(r=>e?r&&r!==Q1&&e&&t.current&&e.parentNode===t.current.parentNode?r:Vi(e):Q1,[e]);return v.useEffect(()=>{t.current=e},[e]),n}function pS(e){const[t,n]=v.useState(null),r=v.useRef(e),a=v.useCallback(s=>{const l=Mc(s.target);l&&n(i=>i?(i.set(l,Zu(l)),new Map(i)):null)},[]);return v.useEffect(()=>{const s=r.current;if(e!==s){l(s);const i=e.map(c=>{const u=Mc(c);return u?(u.addEventListener("scroll",a,{passive:!0}),[u,Zu(u)]):null}).filter(c=>c!=null);n(i.length?new Map(i):null),r.current=e}return()=>{l(e),l(s)};function l(i){i.forEach(c=>{const u=Mc(c);u==null||u.removeEventListener("scroll",a)})}},[a,e]),v.useMemo(()=>e.length?t?Array.from(t.values()).reduce((s,l)=>Ro(s,l),sn):J3(e):sn,[e,t])}function q1(e,t){t===void 0&&(t=[]);const n=v.useRef(null);return v.useEffect(()=>{n.current=null},t),v.useEffect(()=>{const r=e!==sn;r&&!n.current&&(n.current=e),!r&&n.current&&(n.current=null)},[e]),n.current?cs(e,n.current):sn}function fS(e){v.useEffect(()=>{if(!Fi)return;const t=e.map(n=>{let{sensor:r}=n;return r.setup==null?void 0:r.setup()});return()=>{for(const n of t)n==null||n()}},e.map(t=>{let{sensor:n}=t;return n}))}function hS(e,t){return v.useMemo(()=>e.reduce((n,r)=>{let{eventName:a,handler:s}=r;return n[a]=l=>{s(l,t)},n},{}),[e,t])}function ng(e){return v.useMemo(()=>e?Ib(e):null,[e])}const $c=[];function mS(e,t){t===void 0&&(t=Ko);const[n]=e,r=ng(n?yt(n):null),[a,s]=v.useReducer(i,$c),l=Wi({callback:s});return e.length>0&&a===$c&&s(),Zt(()=>{e.length?e.forEach(c=>l==null?void 0:l.observe(c)):(l==null||l.disconnect(),s())},[e]),a;function i(){return e.length?e.map(c=>Q3(c)?r:new Op(t(c),c)):$c}}function rg(e){if(!e)return null;if(e.children.length>1)return e;const t=e.children[0];return Es(t)?t:e}function gS(e){let{measure:t}=e;const[n,r]=v.useState(null),a=v.useCallback(u=>{for(const{target:d}of u)if(Es(d)){r(p=>{const m=t(d);return p?{...p,width:m.width,height:m.height}:m});break}},[t]),s=Wi({callback:a}),l=v.useCallback(u=>{const d=rg(u);s==null||s.disconnect(),d&&(s==null||s.observe(d)),r(d?t(d):null)},[t,s]),[i,c]=ci(l);return v.useMemo(()=>({nodeRef:i,rect:n,setRef:c}),[n,i,c])}const xS=[{sensor:Pp,options:{}},{sensor:Mp,options:{}}],vS={current:{}},Ml={draggable:{measure:W1},droppable:{measure:W1,strategy:us.WhileDragging,frequency:Gu.Optimized},dragOverlay:{measure:Ko}};class Fa extends Map{get(t){var n;return t!=null&&(n=super.get(t))!=null?n:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter(t=>{let{disabled:n}=t;return!n})}getNodeFor(t){var n,r;return(n=(r=this.get(t))==null?void 0:r.node.current)!=null?n:void 0}}const yS={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new Fa,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:pi},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:Ml,measureDroppableContainers:pi,windowRect:null,measuringScheduled:!1},og={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:pi,draggableNodes:new Map,over:null,measureDroppableContainers:pi},Rs=v.createContext(og),ag=v.createContext(yS);function CS(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new Fa}}}function jS(e,t){switch(t.type){case Ge.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case Ge.DragMove:return e.draggable.active?{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}}:e;case Ge.DragEnd:case Ge.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case Ge.RegisterDroppable:{const{element:n}=t,{id:r}=n,a=new Fa(e.droppable.containers);return a.set(r,n),{...e,droppable:{...e.droppable,containers:a}}}case Ge.SetDroppableDisabled:{const{id:n,key:r,disabled:a}=t,s=e.droppable.containers.get(n);if(!s||r!==s.key)return e;const l=new Fa(e.droppable.containers);return l.set(n,{...s,disabled:a}),{...e,droppable:{...e.droppable,containers:l}}}case Ge.UnregisterDroppable:{const{id:n,key:r}=t,a=e.droppable.containers.get(n);if(!a||r!==a.key)return e;const s=new Fa(e.droppable.containers);return s.delete(n),{...e,droppable:{...e.droppable,containers:s}}}default:return e}}function bS(e){let{disabled:t}=e;const{active:n,activatorEvent:r,draggableNodes:a}=v.useContext(Rs),s=ui(r),l=ui(n==null?void 0:n.id);return v.useEffect(()=>{if(!t&&!r&&s&&l!=null){if(!Hi(s)||document.activeElement===s.target)return;const i=a.get(l);if(!i)return;const{activatorNode:c,node:u}=i;if(!c.current&&!u.current)return;requestAnimationFrame(()=>{for(const d of[c.current,u.current]){if(!d)continue;const p=xb(d);if(p){p.focus();break}}})}},[r,t,a,l,s]),null}function sg(e,t){let{transform:n,...r}=t;return e!=null&&e.length?e.reduce((a,s)=>s({transform:a,...r}),n):n}function SS(e){return v.useMemo(()=>({draggable:{...Ml.draggable,...e==null?void 0:e.draggable},droppable:{...Ml.droppable,...e==null?void 0:e.droppable},dragOverlay:{...Ml.dragOverlay,...e==null?void 0:e.dragOverlay}}),[e==null?void 0:e.draggable,e==null?void 0:e.droppable,e==null?void 0:e.dragOverlay])}function wS(e){let{activeNode:t,measure:n,initialRect:r,config:a=!0}=e;const s=v.useRef(!1),{x:l,y:i}=typeof a=="boolean"?{x:a,y:a}:a;Zt(()=>{if(!l&&!i||!t){s.current=!1;return}if(s.current||!r)return;const u=t==null?void 0:t.node.current;if(!u||u.isConnected===!1)return;const d=n(u),p=Z3(d,r);if(l||(p.x=0),i||(p.y=0),s.current=!0,Math.abs(p.x)>0||Math.abs(p.y)>0){const m=G3(u);m&&m.scrollBy({top:p.y,left:p.x})}},[t,l,i,r,n])}const Zi=v.createContext({...sn,scaleX:1,scaleY:1});var qn;(function(e){e[e.Uninitialized=0]="Uninitialized",e[e.Initializing=1]="Initializing",e[e.Initialized=2]="Initialized"})(qn||(qn={}));const _S=v.memo(function(t){var n,r,a,s;let{id:l,accessibility:i,autoScroll:c=!0,children:u,sensors:d=xS,collisionDetection:p=Ob,measuring:m,modifiers:y,...b}=t;const j=v.useReducer(jS,void 0,CS),[_,x]=j,[f,h]=Sb(),[C,S]=v.useState(qn.Uninitialized),g=C===qn.Initialized,{draggable:{active:w,nodes:T,translate:E},droppable:{containers:D}}=_,P=w?T.get(w):null,G=v.useRef({initial:null,translated:null}),Q=v.useMemo(()=>{var Ve;return w!=null?{id:w,data:(Ve=P==null?void 0:P.data)!=null?Ve:vS,rect:G}:null},[w,P]),Y=v.useRef(null),[ne,oe]=v.useState(null),[H,O]=v.useState(null),B=is(b,Object.values(b)),I=Ns("DndDescribedBy",l),U=v.useMemo(()=>D.getEnabled(),[D]),V=SS(m),{droppableRects:je,measureDroppableContainers:se,measuringScheduled:ve}=sS(U,{dragging:g,dependencies:[E.x,E.y],config:V.droppable}),ae=oS(T,w),Ee=v.useMemo(()=>H?di(H):null,[H]),lt=qi(),Ct=lS(ae,V.draggable.measure);wS({activeNode:w?T.get(w):null,config:lt.layoutShiftCompensation,initialRect:Ct,measure:V.draggable.measure});const pe=X1(ae,V.draggable.measure,Ct),Le=X1(ae?ae.parentElement:null),Qe=v.useRef({activatorEvent:null,active:null,activeNode:ae,collisionRect:null,collisions:null,droppableRects:je,draggableNodes:T,draggingNode:null,draggingNodeRect:null,droppableContainers:D,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),Lt=D.getNodeFor((n=Qe.current.over)==null?void 0:n.id),Gt=gS({measure:V.dragOverlay.measure}),jt=(r=Gt.nodeRef.current)!=null?r:ae,Vn=g?(a=Gt.rect)!=null?a:pe:null,Bs=!!(Gt.nodeRef.current&&Gt.rect),Is=uS(Bs?null:pe),qo=ng(jt?yt(jt):null),dn=dS(g?Lt??ae:null),pn=mS(dn),Tr=sg(y,{transform:{x:E.x-Is.x,y:E.y-Is.y,scaleX:1,scaleY:1},activatorEvent:H,active:Q,activeNodeRect:pe,containerNodeRect:Le,draggingNodeRect:Vn,over:Qe.current.over,overlayNodeRect:Gt.rect,scrollableAncestors:dn,scrollableAncestorRects:pn,windowRect:qo}),to=Ee?Ro(Ee,E):null,Yt=pS(dn),Er=q1(Yt),zs=q1(Yt,[pe]),Xt=Ro(Tr,Er),Wn=Vn?Pb(Vn,Tr):null,bt=Q&&Wn?p({active:Q,collisionRect:Wn,droppableRects:je,droppableContainers:U,pointerCoordinates:to}):null,Jo=W3(bt,"id"),[Qt,ea]=v.useState(null),Xi=Bs?Tr:Ro(Tr,zs),Fs=Mb(Xi,(s=Qt==null?void 0:Qt.rect)!=null?s:null,pe),Lr=v.useCallback((Ve,ft)=>{let{sensor:k,options:L}=ft;if(Y.current==null)return;const N=T.get(Y.current);if(!N)return;const $=Ve.nativeEvent,z=new k({active:Y.current,activeNode:N,event:$,options:L,context:Qe,onStart(K){const X=Y.current;if(X==null)return;const W=T.get(X);if(!W)return;const{onDragStart:le}=B.current,De={active:{id:X,data:W.data,rect:G}};Tn.unstable_batchedUpdates(()=>{le==null||le(De),S(qn.Initializing),x({type:Ge.DragStart,initialCoordinates:K,active:X}),f({type:"onDragStart",event:De})})},onMove(K){x({type:Ge.DragMove,coordinates:K})},onEnd:te(Ge.DragEnd),onCancel:te(Ge.DragCancel)});Tn.unstable_batchedUpdates(()=>{oe(z),O(Ve.nativeEvent)});function te(K){return async function(){const{active:W,collisions:le,over:De,scrollAdjustedTranslate:re}=Qe.current;let ge=null;if(W&&re){const{cancelDrop:Oe}=B.current;ge={activatorEvent:$,active:W,collisions:le,delta:re,over:De},K===Ge.DragEnd&&typeof Oe=="function"&&await Promise.resolve(Oe(ge))&&(K=Ge.DragCancel)}Y.current=null,Tn.unstable_batchedUpdates(()=>{x({type:K}),S(qn.Uninitialized),ea(null),oe(null),O(null);const Oe=K===Ge.DragEnd?"onDragEnd":"onDragCancel";if(ge){const it=B.current[Oe];it==null||it(ge),f({type:Oe,event:ge})}})}}},[T]),Us=v.useCallback((Ve,ft)=>(k,L)=>{const N=k.nativeEvent,$=T.get(L);if(Y.current!==null||!$||N.dndKit||N.defaultPrevented)return;const z={active:$};Ve(k,ft.options,z)===!0&&(N.dndKit={capturedBy:ft.sensor},Y.current=L,Lr(k,ft))},[T,Lr]),no=aS(d,Us);fS(d),Zt(()=>{pe&&C===qn.Initializing&&S(qn.Initialized)},[pe,C]),v.useEffect(()=>{const{onDragMove:Ve}=B.current,{active:ft,activatorEvent:k,collisions:L,over:N}=Qe.current;if(!ft||!k)return;const $={active:ft,activatorEvent:k,collisions:L,delta:{x:Xt.x,y:Xt.y},over:N};Tn.unstable_batchedUpdates(()=>{Ve==null||Ve($),f({type:"onDragMove",event:$})})},[Xt.x,Xt.y]),v.useEffect(()=>{const{active:Ve,activatorEvent:ft,collisions:k,droppableContainers:L,scrollAdjustedTranslate:N}=Qe.current;if(!Ve||Y.current==null||!ft||!N)return;const{onDragOver:$}=B.current,z=L.get(Jo),te=z&&z.rect.current?{id:z.id,rect:z.rect.current,data:z.data,disabled:z.disabled}:null,K={active:Ve,activatorEvent:ft,collisions:k,delta:{x:N.x,y:N.y},over:te};Tn.unstable_batchedUpdates(()=>{ea(te),$==null||$(K),f({type:"onDragOver",event:K})})},[Jo]),Zt(()=>{Qe.current={activatorEvent:H,active:Q,activeNode:ae,collisionRect:Wn,collisions:bt,droppableRects:je,draggableNodes:T,draggingNode:jt,draggingNodeRect:Vn,droppableContainers:D,over:Qt,scrollableAncestors:dn,scrollAdjustedTranslate:Xt},G.current={initial:Vn,translated:Wn}},[Q,ae,bt,Wn,T,jt,Vn,je,D,Qt,dn,Xt]),tS({...lt,delta:E,draggingRect:Wn,pointerCoordinates:to,scrollableAncestors:dn,scrollableAncestorRects:pn});const Qi=v.useMemo(()=>({active:Q,activeNode:ae,activeNodeRect:pe,activatorEvent:H,collisions:bt,containerNodeRect:Le,dragOverlay:Gt,draggableNodes:T,droppableContainers:D,droppableRects:je,over:Qt,measureDroppableContainers:se,scrollableAncestors:dn,scrollableAncestorRects:pn,measuringConfiguration:V,measuringScheduled:ve,windowRect:qo}),[Q,ae,pe,H,bt,Le,Gt,T,D,je,Qt,se,dn,pn,V,ve,qo]),Hs=v.useMemo(()=>({activatorEvent:H,activators:no,active:Q,activeNodeRect:pe,ariaDescribedById:{draggable:I},dispatch:x,draggableNodes:T,over:Qt,measureDroppableContainers:se}),[H,no,Q,pe,x,I,T,Qt,se]);return ee.createElement(U3.Provider,{value:h},ee.createElement(Rs.Provider,{value:Hs},ee.createElement(ag.Provider,{value:Qi},ee.createElement(Zi.Provider,{value:Fs},u)),ee.createElement(bS,{disabled:(i==null?void 0:i.restoreFocus)===!1})),ee.createElement(kb,{...i,hiddenTextDescribedById:I}));function qi(){const Ve=(ne==null?void 0:ne.autoScrollEnabled)===!1,ft=typeof c=="object"?c.enabled===!1:c===!1,k=g&&!Ve&&!ft;return typeof c=="object"?{...c,enabled:k}:{enabled:k}}}),kS=v.createContext(null),J1="button",TS="Droppable";function ES(e){let{id:t,data:n,disabled:r=!1,attributes:a}=e;const s=Ns(TS),{activators:l,activatorEvent:i,active:c,activeNodeRect:u,ariaDescribedById:d,draggableNodes:p,over:m}=v.useContext(Rs),{role:y=J1,roleDescription:b="draggable",tabIndex:j=0}=a??{},_=(c==null?void 0:c.id)===t,x=v.useContext(_?Zi:kS),[f,h]=ci(),[C,S]=ci(),g=hS(l,t),w=is(n);Zt(()=>(p.set(t,{id:t,key:s,node:f,activatorNode:C,data:w}),()=>{const E=p.get(t);E&&E.key===s&&p.delete(t)}),[p,t]);const T=v.useMemo(()=>({role:y,tabIndex:j,"aria-disabled":r,"aria-pressed":_&&y===J1?!0:void 0,"aria-roledescription":b,"aria-describedby":d.draggable}),[r,y,j,_,b,d.draggable]);return{active:c,activatorEvent:i,activeNodeRect:u,attributes:T,isDragging:_,listeners:r?void 0:g,node:f,over:m,setNodeRef:h,setActivatorNodeRef:S,transform:x}}function lg(){return v.useContext(ag)}const LS="Droppable",NS={timeout:25};function RS(e){let{data:t,disabled:n=!1,id:r,resizeObserverConfig:a}=e;const s=Ns(LS),{active:l,dispatch:i,over:c,measureDroppableContainers:u}=v.useContext(Rs),d=v.useRef({disabled:n}),p=v.useRef(!1),m=v.useRef(null),y=v.useRef(null),{disabled:b,updateMeasurementsFor:j,timeout:_}={...NS,...a},x=is(j??r),f=v.useCallback(()=>{if(!p.current){p.current=!0;return}y.current!=null&&clearTimeout(y.current),y.current=setTimeout(()=>{u(Array.isArray(x.current)?x.current:[x.current]),y.current=null},_)},[_]),h=Wi({callback:f,disabled:b||!l}),C=v.useCallback((T,E)=>{h&&(E&&(h.unobserve(E),p.current=!1),T&&h.observe(T))},[h]),[S,g]=ci(C),w=is(t);return v.useEffect(()=>{!h||!S.current||(h.disconnect(),p.current=!1,h.observe(S.current))},[S,h]),Zt(()=>(i({type:Ge.RegisterDroppable,element:{id:r,key:s,disabled:n,node:S,rect:m,data:w}}),()=>i({type:Ge.UnregisterDroppable,key:s,id:r})),[r]),v.useEffect(()=>{n!==d.current.disabled&&(i({type:Ge.SetDroppableDisabled,id:r,key:s,disabled:n}),d.current.disabled=n)},[r,s,n,i]),{active:l,rect:m,isOver:(c==null?void 0:c.id)===r,node:S,over:c,setNodeRef:g}}function DS(e){let{animation:t,children:n}=e;const[r,a]=v.useState(null),[s,l]=v.useState(null),i=ui(n);return!n&&!r&&i&&a(i),Zt(()=>{if(!s)return;const c=r==null?void 0:r.key,u=r==null?void 0:r.props.id;if(c==null||u==null){a(null);return}Promise.resolve(t(u,s)).then(()=>{a(null)})},[t,r,s]),ee.createElement(ee.Fragment,null,n,r?v.cloneElement(r,{ref:l}):null)}const OS={x:0,y:0,scaleX:1,scaleY:1};function MS(e){let{children:t}=e;return ee.createElement(Rs.Provider,{value:og},ee.createElement(Zi.Provider,{value:OS},t))}const AS={position:"fixed",touchAction:"none"},PS=e=>Hi(e)?"transform 250ms ease":void 0,$S=v.forwardRef((e,t)=>{let{as:n,activatorEvent:r,adjustScale:a,children:s,className:l,rect:i,style:c,transform:u,transition:d=PS}=e;if(!i)return null;const p=a?u:{...u,scaleX:1,scaleY:1},m={...AS,width:i.width,height:i.height,top:i.top,left:i.left,transform:mr.Transform.toString(p),transformOrigin:a&&r?Eb(r,i):void 0,transition:typeof d=="function"?d(r):d,...c};return ee.createElement(n,{className:l,style:m,ref:t},s)}),BS=e=>t=>{let{active:n,dragOverlay:r}=t;const a={},{styles:s,className:l}=e;if(s!=null&&s.active)for(const[i,c]of Object.entries(s.active))c!==void 0&&(a[i]=n.node.style.getPropertyValue(i),n.node.style.setProperty(i,c));if(s!=null&&s.dragOverlay)for(const[i,c]of Object.entries(s.dragOverlay))c!==void 0&&r.node.style.setProperty(i,c);return l!=null&&l.active&&n.node.classList.add(l.active),l!=null&&l.dragOverlay&&r.node.classList.add(l.dragOverlay),function(){for(const[c,u]of Object.entries(a))n.node.style.setProperty(c,u);l!=null&&l.active&&n.node.classList.remove(l.active)}},IS=e=>{let{transform:{initial:t,final:n}}=e;return[{transform:mr.Transform.toString(t)},{transform:mr.Transform.toString(n)}]},zS={duration:250,easing:"ease",keyframes:IS,sideEffects:BS({styles:{active:{opacity:"0"}}})};function FS(e){let{config:t,draggableNodes:n,droppableContainers:r,measuringConfiguration:a}=e;return Ui((s,l)=>{if(t===null)return;const i=n.get(s);if(!i)return;const c=i.node.current;if(!c)return;const u=rg(l);if(!u)return;const{transform:d}=yt(l).getComputedStyle(l),p=K3(d);if(!p)return;const m=typeof t=="function"?t:US(t);return eg(c,a.draggable.measure),m({active:{id:s,data:i.data,node:c,rect:a.draggable.measure(c)},draggableNodes:n,dragOverlay:{node:l,rect:a.dragOverlay.measure(u)},droppableContainers:r,measuringConfiguration:a,transform:p})})}function US(e){const{duration:t,easing:n,sideEffects:r,keyframes:a}={...zS,...e};return s=>{let{active:l,dragOverlay:i,transform:c,...u}=s;if(!t)return;const d={x:i.rect.left-l.rect.left,y:i.rect.top-l.rect.top},p={scaleX:c.scaleX!==1?l.rect.width*c.scaleX/i.rect.width:1,scaleY:c.scaleY!==1?l.rect.height*c.scaleY/i.rect.height:1},m={x:c.x-d.x,y:c.y-d.y,...p},y=a({...u,active:l,dragOverlay:i,transform:{initial:c,final:m}}),[b]=y,j=y[y.length-1];if(JSON.stringify(b)===JSON.stringify(j))return;const _=r==null?void 0:r({active:l,dragOverlay:i,...u}),x=i.node.animate(y,{duration:t,easing:n,fill:"forwards"});return new Promise(f=>{x.onfinish=()=>{_==null||_(),f()}})}}let eh=0;function HS(e){return v.useMemo(()=>{if(e!=null)return eh++,eh},[e])}const VS=ee.memo(e=>{let{adjustScale:t=!1,children:n,dropAnimation:r,style:a,transition:s,modifiers:l,wrapperElement:i="div",className:c,zIndex:u=999}=e;const{activatorEvent:d,active:p,activeNodeRect:m,containerNodeRect:y,draggableNodes:b,droppableContainers:j,dragOverlay:_,over:x,measuringConfiguration:f,scrollableAncestors:h,scrollableAncestorRects:C,windowRect:S}=lg(),g=v.useContext(Zi),w=HS(p==null?void 0:p.id),T=sg(l,{activatorEvent:d,active:p,activeNodeRect:m,containerNodeRect:y,draggingNodeRect:_.rect,over:x,overlayNodeRect:_.rect,scrollableAncestors:h,scrollableAncestorRects:C,transform:g,windowRect:S}),E=$p(m),D=FS({config:r,draggableNodes:b,droppableContainers:j,measuringConfiguration:f}),P=E?_.setRef:void 0;return ee.createElement(MS,null,ee.createElement(DS,{animation:D},p&&w?ee.createElement($S,{key:w,id:p.id,ref:P,as:i,activatorEvent:d,adjustScale:t,className:c,transition:s,rect:E,style:{zIndex:u,...a},transform:T},n):null))});function Bp(e,t,n){const r=e.slice();return r.splice(n<0?r.length+n:n,0,r.splice(t,1)[0]),r}function WS(e,t){return e.reduce((n,r,a)=>{const s=t.get(r);return s&&(n[a]=s),n},Array(e.length))}function ml(e){return e!==null&&e>=0}function ZS(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function KS(e){return typeof e=="boolean"?{draggable:e,droppable:e}:e}const gl={scaleX:1,scaleY:1},GS=e=>{var t;let{rects:n,activeNodeRect:r,activeIndex:a,overIndex:s,index:l}=e;const i=(t=n[a])!=null?t:r;if(!i)return null;const c=YS(n,l,a);if(l===a){const u=n[s];return u?{x:a<s?u.left+u.width-(i.left+i.width):u.left-i.left,y:0,...gl}:null}return l>a&&l<=s?{x:-i.width-c,y:0,...gl}:l<a&&l>=s?{x:i.width+c,y:0,...gl}:{x:0,y:0,...gl}};function YS(e,t,n){const r=e[t],a=e[t-1],s=e[t+1];return!r||!a&&!s?0:n<t?a?r.left-(a.left+a.width):s.left-(r.left+r.width):s?s.left-(r.left+r.width):r.left-(a.left+a.width)}const Ip=e=>{let{rects:t,activeIndex:n,overIndex:r,index:a}=e;const s=Bp(t,r,n),l=t[a],i=s[a];return!i||!l?null:{x:i.left-l.left,y:i.top-l.top,scaleX:i.width/l.width,scaleY:i.height/l.height}},xl={scaleX:1,scaleY:1},XS=e=>{var t;let{activeIndex:n,activeNodeRect:r,index:a,rects:s,overIndex:l}=e;const i=(t=s[n])!=null?t:r;if(!i)return null;if(a===n){const u=s[l];return u?{x:0,y:n<l?u.top+u.height-(i.top+i.height):u.top-i.top,...xl}:null}const c=QS(s,a,n);return a>n&&a<=l?{x:0,y:-i.height-c,...xl}:a<n&&a>=l?{x:0,y:i.height+c,...xl}:{x:0,y:0,...xl}};function QS(e,t,n){const r=e[t],a=e[t-1],s=e[t+1];return r?n<t?a?r.top-(a.top+a.height):s?s.top-(r.top+r.height):0:s?s.top-(r.top+r.height):a?r.top-(a.top+a.height):0:0}const ig="Sortable",cg=ee.createContext({activeIndex:-1,containerId:ig,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:Ip,disabled:{draggable:!1,droppable:!1}});function qS(e){let{children:t,id:n,items:r,strategy:a=Ip,disabled:s=!1}=e;const{active:l,dragOverlay:i,droppableRects:c,over:u,measureDroppableContainers:d}=lg(),p=Ns(ig,n),m=i.rect!==null,y=v.useMemo(()=>r.map(g=>typeof g=="object"&&"id"in g?g.id:g),[r]),b=l!=null,j=l?y.indexOf(l.id):-1,_=u?y.indexOf(u.id):-1,x=v.useRef(y),f=!ZS(y,x.current),h=_!==-1&&j===-1||f,C=KS(s);Zt(()=>{f&&b&&d(y)},[f,y,b,d]),v.useEffect(()=>{x.current=y},[y]);const S=v.useMemo(()=>({activeIndex:j,containerId:p,disabled:C,disableTransforms:h,items:y,overIndex:_,useDragOverlay:m,sortedRects:WS(y,c),strategy:a}),[j,p,C.draggable,C.droppable,h,y,_,c,m,a]);return ee.createElement(cg.Provider,{value:S},t)}const JS=e=>{let{id:t,items:n,activeIndex:r,overIndex:a}=e;return Bp(n,r,a).indexOf(t)},ew=e=>{let{containerId:t,isSorting:n,wasDragging:r,index:a,items:s,newIndex:l,previousItems:i,previousContainerId:c,transition:u}=e;return!u||!r||i!==s&&a===l?!1:n?!0:l!==a&&t===c},tw={duration:200,easing:"ease"},ug="transform",nw=mr.Transition.toString({property:ug,duration:0,easing:"linear"}),rw={roleDescription:"sortable"};function ow(e){let{disabled:t,index:n,node:r,rect:a}=e;const[s,l]=v.useState(null),i=v.useRef(n);return Zt(()=>{if(!t&&n!==i.current&&r.current){const c=a.current;if(c){const u=Ko(r.current,{ignoreTransform:!0}),d={x:c.left-u.left,y:c.top-u.top,scaleX:c.width/u.width,scaleY:c.height/u.height};(d.x||d.y)&&l(d)}}n!==i.current&&(i.current=n)},[t,n,r,a]),v.useEffect(()=>{s&&l(null)},[s]),s}function aw(e){let{animateLayoutChanges:t=ew,attributes:n,disabled:r,data:a,getNewIndex:s=JS,id:l,strategy:i,resizeObserverConfig:c,transition:u=tw}=e;const{items:d,containerId:p,activeIndex:m,disabled:y,disableTransforms:b,sortedRects:j,overIndex:_,useDragOverlay:x,strategy:f}=v.useContext(cg),h=sw(r,y),C=d.indexOf(l),S=v.useMemo(()=>({sortable:{containerId:p,index:C,items:d},...a}),[p,a,C,d]),g=v.useMemo(()=>d.slice(d.indexOf(l)),[d,l]),{rect:w,node:T,isOver:E,setNodeRef:D}=RS({id:l,data:S,disabled:h.droppable,resizeObserverConfig:{updateMeasurementsFor:g,...c}}),{active:P,activatorEvent:G,activeNodeRect:Q,attributes:Y,setNodeRef:ne,listeners:oe,isDragging:H,over:O,setActivatorNodeRef:B,transform:I}=ES({id:l,data:S,attributes:{...rw,...n},disabled:h.draggable}),U=fb(D,ne),V=!!P,je=V&&!b&&ml(m)&&ml(_),se=!x&&H,ve=se&&je?I:null,Ee=je?ve??(i??f)({rects:j,activeNodeRect:Q,activeIndex:m,overIndex:_,index:C}):null,lt=ml(m)&&ml(_)?s({id:l,items:d,activeIndex:m,overIndex:_}):C,Ct=P==null?void 0:P.id,pe=v.useRef({activeId:Ct,items:d,newIndex:lt,containerId:p}),Le=d!==pe.current.items,Qe=t({active:P,containerId:p,isDragging:H,isSorting:V,id:l,index:C,items:d,newIndex:pe.current.newIndex,previousItems:pe.current.items,previousContainerId:pe.current.containerId,transition:u,wasDragging:pe.current.activeId!=null}),Lt=ow({disabled:!Qe,index:C,node:T,rect:w});return v.useEffect(()=>{V&&pe.current.newIndex!==lt&&(pe.current.newIndex=lt),p!==pe.current.containerId&&(pe.current.containerId=p),d!==pe.current.items&&(pe.current.items=d)},[V,lt,p,d]),v.useEffect(()=>{if(Ct===pe.current.activeId)return;if(Ct&&!pe.current.activeId){pe.current.activeId=Ct;return}const jt=setTimeout(()=>{pe.current.activeId=Ct},50);return()=>clearTimeout(jt)},[Ct]),{active:P,activeIndex:m,attributes:Y,data:S,rect:w,index:C,newIndex:lt,items:d,isOver:E,isSorting:V,isDragging:H,listeners:oe,node:T,overIndex:_,over:O,setNodeRef:U,setActivatorNodeRef:B,setDroppableNodeRef:D,setDraggableNodeRef:ne,transform:Lt??Ee,transition:Gt()};function Gt(){if(Lt||Le&&pe.current.newIndex===C)return nw;if(!(se&&!Hi(G)||!u)&&(V||Qe))return mr.Transition.toString({...u,property:ug})}}function sw(e,t){var n,r;return typeof e=="boolean"?{draggable:e,droppable:!1}:{draggable:(n=e==null?void 0:e.draggable)!=null?n:t.draggable,droppable:(r=e==null?void 0:e.droppable)!=null?r:t.droppable}}function hi(e){if(!e)return!1;const t=e.data.current;return!!(t&&"sortable"in t&&typeof t.sortable=="object"&&"containerId"in t.sortable&&"items"in t.sortable&&"index"in t.sortable)}const lw=[fe.Down,fe.Right,fe.Up,fe.Left],iw=(e,t)=>{let{context:{active:n,collisionRect:r,droppableRects:a,droppableContainers:s,over:l,scrollableAncestors:i}}=t;if(lw.includes(e.code)){if(e.preventDefault(),!n||!r)return;const c=[];s.getEnabled().forEach(p=>{if(!p||p!=null&&p.disabled)return;const m=a.get(p.id);if(m)switch(e.code){case fe.Down:r.top<m.top&&c.push(p);break;case fe.Up:r.top>m.top&&c.push(p);break;case fe.Left:r.left>m.left&&c.push(p);break;case fe.Right:r.left<m.left&&c.push(p);break}});const u=Rb({active:n,collisionRect:r,droppableRects:a,droppableContainers:c,pointerCoordinates:null});let d=W3(u,"id");if(d===(l==null?void 0:l.id)&&u.length>1&&(d=u[1].id),d!=null){const p=s.get(n.id),m=s.get(d),y=m?a.get(m.id):null,b=m==null?void 0:m.node.current;if(b&&y&&p&&m){const _=Vi(b).some((g,w)=>i[w]!==g),x=dg(p,m),f=cw(p,m),h=_||!x?{x:0,y:0}:{x:f?r.width-y.width:0,y:f?r.height-y.height:0},C={x:y.left,y:y.top};return h.x&&h.y?C:cs(C,h)}}}};function dg(e,t){return!hi(e)||!hi(t)?!1:e.data.current.sortable.containerId===t.data.current.sortable.containerId}function cw(e,t){return!hi(e)||!hi(t)||!dg(e,t)?!1:e.data.current.sortable.index<t.data.current.sortable.index}const uw=e=>{let{transform:t}=e;return{...t,y:0}};function pg(e,t,n){const r={...e};return t.top+e.y<=n.top?r.y=n.top-t.top:t.bottom+e.y>=n.top+n.height&&(r.y=n.top+n.height-t.bottom),t.left+e.x<=n.left?r.x=n.left-t.left:t.right+e.x>=n.left+n.width&&(r.x=n.left+n.width-t.right),r}const zp=e=>{let{containerNodeRect:t,draggingNodeRect:n,transform:r}=e;return!n||!t?r:pg(r,n,t)},dw=e=>{let{transform:t}=e;return{...t,x:0}},fg=e=>{let{transform:t,draggingNodeRect:n,windowRect:r}=e;return!n||!r?t:pg(t,n,r)},Fp=({items:e,setOrder:t,List:n=({children:c})=>c,Item:r,modifiers:a=[zp],strategy:s=Ip,Overlay:l,...i})=>{const[c,u]=v.useState(null),d=Tb(U1(Pp),U1(Mp,{coordinateGetter:iw}));function p(b){const j=e.findIndex(_=>_.id===b.active.id);u(j)}function m(){u(null)}function y(b){const{active:j,over:_}=b;if(j.id!==_.id){const x=e.findIndex(h=>h.id===j.id),f=e.findIndex(h=>h.id===_.id);e[x].moved=!0,t(Bp(e,x,f))}u(null)}return o.jsxs(_S,{sensors:d,collisionDetection:Nb,onDragStart:p,onDragCancel:m,onDragEnd:y,modifiers:a,children:[o.jsx(qS,{items:e,strategy:s,children:o.jsx(n,{...i,children:e.map(b=>o.jsx(pw,{id:b.id,item:b,Item:r,...i},b.id))})}),l&&c&&o.jsx(VS,{children:o.jsx(l,{item:c,...i})})]})},pw=({id:e,item:t,Item:n,...r})=>{const{attributes:a,listeners:s,setNodeRef:l,transform:i,transition:c}=aw({id:e}),u={transform:mr.Translate.toString(i),transition:c};return o.jsx(n,{item:t,setNodeRef:l,style:u,listeners:s,...a,...r})},hg=({...e})=>o.jsx(Fp,{modifiers:[dw,fg,zp],strategy:XS,...e}),fw=({columns:e,visibleColumns:t,toggleVisibleColumn:n,columnOrder:r,changeColumnOrder:a})=>{const s=ls(t),l=r.map(c=>jp(e[c],"id label")),i=c=>{a(c.map(u=>u.id))};return o.jsxs(cn,{right:!0,iconRight:"square vertical-left=2 vertical-right=2",text:"Columns",size:"small",closeOnBlur:!1,children:[o.jsx("div",{className:"sortable list vertical",children:o.jsx(hg,{items:l,Item:ub,setOrder:i,isVisible:s,toggleVisibleColumn:n})}),o.jsxs("div",{className:"smaller mar-b-2",children:["Click checkbox to show/hide.",o.jsx("br",{}),"Drag handle to order."]}),o.jsx(pb,{})]})},hw=nt.Consumer(fw),mw=({headerClass:e,Summary:t=Uj,PageSize:n=I3,Columns:r=hw})=>o.jsx("header",{className:e,children:o.jsxs("div",{className:"flex space middle",children:[o.jsx("div",{children:o.jsx(t,{})}),o.jsxs("div",{className:"flex",children:[o.jsx(r,{}),o.jsx(n,{})]})]})}),gw=nt.Consumer(mw),xw=({column:e,name:t,value:n,cellClass:r,sortColumn:a,sortingClass:s="sorting"})=>{const l=a===t,i=we(r,e.className,l?s:null,e.right?"text-right":null);return o.jsx("td",{className:i,children:n})},vw=nt.Consumer(xw),yw=({row:e,columns:t,visibleColumns:n,Cell:r=vw})=>o.jsx("tr",{children:n.map(a=>{const s=t[a],l=s.field??a,i=e[l];return o.jsx(r,{row:e,name:a,field:l,column:s,value:i},a)})}),Cw=nt.Consumer(yw),jw=({page:e,Row:t=Cw})=>o.jsx("tbody",{children:e.rows.map((n,r)=>o.jsx(t,{row:n},n.id??r))}),bw=nt.Consumer(jw),Sw=({name:e,column:t,sortColumn:n,sortReverse:r,toggleSortColumn:a,sortUpIcon:s="arrow-up",sortDownIcon:l="arrow-down",unsortedIcon:i="arrows",sortIconClass:c="sort-icon",sortingClass:u="sorting",showFilters:d,toggleFilters:p,filters:m,filteringClass:y="filtering",filterIcon:b="filter",filteringIcon:j="filter-solid",filterIconClass:_="filter-icon",headingClass:x="heading",rightClass:f="right"})=>{const h=e===n,C=h&&r,S=Be(m[e]);return o.jsx("th",{className:we(x,t.right?f:null,d?y:null,S?y:null,h?u:null),onClick:()=>a(e),children:o.jsxs("div",{className:"flex space middle",children:[o.jsx("span",{className:"label",children:t.label}),o.jsxs("div",{className:"flex gap-1",children:[o.jsx(J,{className:_,name:S?j:b,onClick:p}),o.jsx(J,{className:c,name:h?C?s:l:i})]})]})})},ww=nt.Consumer(Sw),_w=({columns:e,headingsClass:t="headings",visibleColumns:n,Heading:r=ww})=>o.jsx("thead",{children:o.jsx("tr",{className:t,children:n.map(a=>o.jsx(r,{name:a,column:e[a]},a))})}),kw=nt.Consumer(_w),Tw=({name:e,filters:t,setFilter:n,filterClass:r="filter",filteringClass:a="filtering",clearFilterIcon:s="cross"})=>o.jsx("th",{className:we(r,Be(t[e])?a:null),children:o.jsxs("div",{className:"flex space middle gap-1",children:[o.jsx("input",{type:"text",value:t[e]??"",onChange:l=>n(e,l.target.value)}),o.jsx(J,{name:s,onClick:()=>n(e,null)})]})}),Ew=nt.Consumer(Tw),Lw=({columns:e,filtersClass:t="filters",visibleColumns:n,Filter:r=Ew})=>o.jsx("thead",{children:o.jsx("tr",{className:t,children:n.map(a=>o.jsx(r,{name:a,column:e[a]},a))})}),Nw=nt.Consumer(Lw),Rw=({tableClass:e="celled striped table",selectableClass:t="selectable",scrollX:n,rowClick:r,showFilters:a,Headings:s=kw,Filters:l=Nw,Rows:i=bw})=>o.jsxs("table",{className:we(e,n?"nowrap":"wide",{[t]:r}),children:[o.jsx(s,{}),a&&o.jsx(l,{}),o.jsx(i,{})]}),Dw=nt.Consumer(Rw),Ow=({scrollX:e,Table:t=Dw})=>o.jsx("div",{className:e?"scroll-x":"",children:o.jsx(t,{})}),Mw=nt.Consumer(Ow),Aw=({page:e=0,pages:t,buttonClass:n="outline",pageClass:r=n,currentPageClass:a="solid",render:s,...l})=>{const u=t-1,d=t,p=e+1,m=e>0?e-1:null,y=Be(m)?m+1:null,b=e<u?e+1:null,j=Be(b)?b+1:null;return s({page:e,pageNo:p,firstPage:0,firstPageNo:1,lastPage:u,lastPageNo:d,pages:t,prevPage:m,prevPageNo:y,nextPage:b,nextPageNo:j,buttonClass:n,pageClass:r,currentPageClass:a,...l})},wr=br(Aw),Pw=wr.Use,$w=({prevPage:e,setPage:t,buttonClass:n,prevClass:r=n,prevIcon:a="arrow-left"})=>o.jsx(M,{className:r,icon:a,onClick:()=>t(e),disabled:Ai(e)}),Bw=wr.Consumer($w),Iw=({nextPage:e,setPage:t,buttonClass:n,nextClass:r=n,nextIcon:a="arrow-right"})=>o.jsx(M,{className:r,icon:a,onClick:()=>t(e),disabled:!e}),zw=wr.Consumer(Iw),Fw=({pageNo:e,text:t=e,buttonClass:n,className:r=n,onClick:a})=>o.jsx(M,{text:t,className:r,onClick:a}),Uw=wr.Consumer(Fw),Hw=o.jsx(o.Fragment,{children:"…"}),Vw=({pageSeparatorClass:e="separator",pageSeparator:t=Hw})=>o.jsx("div",{className:e,children:t}),Ww=wr.Consumer(Vw),Zw=({page:e,pageNo:t,firstPage:n,firstPageNo:r,prevPage:a,prevPageNo:s,nextPage:l,nextPageNo:i,lastPage:c,lastPageNo:u,setPage:d,pagesClass:p="pages",buttonClass:m,pageClass:y=m,currentPageClass:b="brand",showFirstLast:j=!0,Separator:_=Ww,Page:x=Uw})=>o.jsxs("div",{className:p,children:[j&&a>n&&o.jsxs(o.Fragment,{children:[o.jsx(x,{page:n,pageNo:r,className:y,onClick:()=>d(n)}),a>n+1&&o.jsx(_,{})]}),Be(a)&&o.jsx(x,{page:a,pageNo:s,className:y,onClick:()=>d(a)}),o.jsx(x,{page:e,pageNo:t,className:b,current:!0,disabled:!0}),Be(l)&&o.jsx(x,{page:l,pageNo:i,className:y,onClick:()=>d(l)}),j&&l&&l<c&&o.jsxs(o.Fragment,{children:[l<c-1&&o.jsx(_,{}),o.jsx(x,{page:c,pageNo:u,className:y,onClick:()=>d(c)})]})]}),Kw=wr.Consumer(Zw),Gw=({className:e="pager",size:t,color:n,Previous:r=Bw,Next:a=zw,Pages:s=Kw})=>o.jsxs("div",{className:we(e,t,n),children:[o.jsx(r,{}),o.jsx(s,{}),o.jsx(a,{})]}),Yw=wr.Consumer(Gw),Xw=({Content:e=Yw,...t})=>o.jsx(wr.Provider,{...t,children:o.jsx(e,{})}),Ht=me(Xw,"Pager"),Qw=({footerClass:e,pager:t={},page:n,setPageNo:r})=>o.jsx("footer",{className:e,children:o.jsx(Ht,{page:n.page,pages:n.pages,setPage:a=>r(a+1),...t})}),qw=nt.Consumer(Qw),Jw=({sortColumn:e,setSortColumn:t,sortReverse:n,setSortReverse:r,columns:a})=>o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Sort By"}),o.jsx(Ds,{wide:!0,value:e,options:Object.entries(a).map(([s,{label:l}])=>({id:s,label:l})),onSelect:s=>t(s.id)})]}),o.jsx("div",{className:"field pad-t-label",children:o.jsx(ln,{text:"Descending",checked:n,onChange:r,disabled:Ai(e)})})]}),e_=nt.Consumer(Jw),t_=({controlsVisible:e,hideControls:t})=>o.jsxs(un,{open:e,close:t,children:[o.jsx("header",{children:o.jsx("h3",{children:"Data Table Controls"})}),o.jsxs("div",{className:"grid-3 gap-4",children:[o.jsx(I3,{}),o.jsx(e_,{})]}),o.jsx("footer",{className:"text-right",children:o.jsx(M,{text:"OK",onClick:t})})]}),n_=nt.Consumer(t_),r_=({color:e,className:t="datatable",Header:n=gw,Body:r=Mw,Footer:a=qw,Controls:s=n_})=>o.jsxs("section",{className:we(t,e),children:[o.jsx(n,{}),o.jsx(r,{}),o.jsx(a,{}),o.jsx(s,{})]}),o_=nt.Consumer(r_),a_=({Content:e=o_,...t})=>o.jsx(nt.Provider,{...t,children:o.jsx(e,{})}),s_=me(a_,"Datatable"),l_=({summary:e,summaryClass:t})=>o.jsx("summary",{className:t,children:e}),i_=({content:e,children:t,contentClass:n})=>o.jsx("div",{className:n,children:e||t}),c_=({className:e,size:t,color:n,lined:r,border:a,radius:s,shaded:l,shadow:i,open:c,Summary:u=l_,Content:d=i_,...p})=>o.jsxs("details",{className:we(e,n,Ii(a),Ep(s),Tp(i),{size:t,color:n,lined:r,shaded:l}),open:c,children:[o.jsx(u,{...p}),o.jsx(d,{...p})]}),Xe=me(c_,"Details"),u_=({close:e,icon:t="cross",className:n="close"})=>o.jsx("div",{className:n,onClick:e,children:o.jsx(J,{name:t})}),d_=me(u_,"ModalClose"),p_=({title:e,header:t})=>e||t?o.jsxs("header",{children:[!!e&&o.jsx("h3",{children:e}),t]}):null,f_=me(p_,"ModalHeader"),h_=({footer:e})=>!!e&&o.jsx("footer",{children:e}),m_=me(h_,"ModalFooter"),g_=({text:e,children:t,Header:n=f_,Footer:r=m_,...a})=>o.jsxs("article",{children:[o.jsx(n,{...a}),e||t,o.jsx(r,{...a})]}),x_=me(g_,"ModalContent"),v_=({ref:e,open:t,close:n,className:r,closeClass:a="close",closeIcon:s="cross",Close:l=d_,Content:i=x_,...c})=>(e||(e=v.useRef(null)),v.useEffect(()=>{const{current:u}=e;t?u.showModal():u.close()},[t]),o.jsxs("dialog",{ref:e,className:r,children:[!!n&&o.jsx(l,{close:n,icon:s,className:a}),o.jsx(i,{...c})]})),un=me(v_,"Modal"),y_=({open:e=!1}={})=>{const{isVisible:t,show:n,hide:r}=jr({visible:e});return{show:n,hide:r,Modal:a=>o.jsx(un,{open:t,...a})}},C_=({color:e,className:t,style:n,fixed:r,light:a,dark:s,children:l})=>o.jsx("div",{className:we("overlay",t,e,{fixed:r,light:a,dark:s}),style:n,children:l}),Go=me(C_,"Overlay"),j_=({open:e=!1}={})=>{const{isVisible:t,show:n,hide:r}=jr({visible:e});return{show:n,hide:r,Overlay:a=>t&&o.jsx(Go,{...a})}},b_=({className:e,disabled:t,children:n})=>o.jsx("label",{className:we(e,{disabled:t}),children:n}),S_=me(b_,"RadioLabel"),w_=({name:e,option:t,tabIndex:n=0,onChange:r=Ae,checked:a})=>o.jsx("input",{type:"radio",name:e,disabled:t.disabled,"aria-disabled":t.disabled,tabIndex:t.disabled?-1:n,onChange:s=>r(s.target.checked),checked:a}),__=me(w_,"RadioInput"),k_=({name:e,option:t,checked:n,inline:r,border:a,labelClass:s="radio",inputClass:l,Label:i=S_,Input:c=__,onChange:u})=>o.jsxs(i,{className:we(s,t.labelClass,{inline:r,border:a}),disabled:t.disabled,option:t,children:[o.jsx(c,{name:e,option:t,checked:n,className:we(l,t.inputClass),onChange:()=>u(t.value)}),t.text??t.label??t.name]}),T_=me(k_,"RadioOption"),E_=({value:e,options:t,className:n="radioset",disabled:r,Option:a=T_,...s})=>o.jsx("div",{className:we(n,{disabled:r}),children:t.map(l=>{const i=Cs(l)?l:{value:l,label:l};return o.jsx(a,{option:i,checked:i.value===e,value:e,...s},i.value)})}),$n=me(E_,"Radio"),Bc={searching:!1,search:void 0,results:void 0,result:void 0,cursor:void 0};class Gn extends $a{constructor(t){super(t);const n=this.inputValue();this.state={...this.state,input:n,searching:!1},this.startSearch=t.debounceTime?tC(this.search.bind(this),t.debounceTime):this.search.bind(this)}componentDidMount(){this.mounted=!0,this.props.onLoad(this)}componentWillUnmount(){this.setState({results:null}),this.mounted=!1,this.props.onUnload(this)}inputValue(t=this.props.initialValue){return Be(t)?this.props.displayValue(t):O3}onFocus(){this.debug("onFocus()"),this.setState({hasFocus:!0},this.props.onFocus)}onBlur(){this.debug("onBlur()"),this.setState({hasFocus:!1},this.props.onBlur),Pi(500).then(()=>this.clearResults())}onChange(t){const n=t.target.value;this.debug(`input: ${n}`),n.length>=this.props.minLength?this.setState({input:n},this.startSearch):this.setState({input:n,...Bc})}onKeyDown(t){this.debug(`onKeyDown(${t.key})`);const n=this.state.cursor;switch(t.key){case M3:this.setCursor(n+1);break;case A3:this.setCursor(n-1);break;case Lp:this.selectCursor();break;case Np:this.reset();break;default:return}t.preventDefault()}reset(){this.debug("reset()");const t=this.props.initialValue,n=this.inputValue(t);this.debug(`reset() [input:${n}] from value: `,t),this.setState({value:t,input:n,...Bc},this.props.onReset)}search(){const{input:t}=this.state,{minLength:n,onSearch:r}=this.props;if(t.length<n){this.debug(`search() cancelled - input is shorter than ${n}`);return}if(!r){this.debug("search() cancelled - no onSearch() handler defined");return}this.debug("onSearch: ",r),this.setState({search:t,searching:!0},async()=>this.searchResults(await r(t,this)))}searchResults(t){this.debug("searchResults()",t),this.setState({results:t,searching:!1,cursor:0})}selectResult(t){this.debug("selectResult()",t);const n=this.inputValue(t);this.setState({value:t,input:n,...Bc},()=>this.props.onSelect(t))}setCursor(t){this.debug(`setCursor(${t})`);const{results:n}=this.state;this.setState({cursor:n&&n.length?(t+n.length)%n.length:void 0})}selectCursor(){const{cursor:t,results:n}=this.state;n&&n.length&&Be(t)&&this.selectResult(n[t])}clearResults(){this.mounted&&this.setState({results:null})}resultsRef(t){this._resultsRef=t}activeRef(t){$3(this._resultsRef,t)}}xe(Gn,"debug",!1),xe(Gn,"debugPrefix","Search > "),xe(Gn,"debugColor","MediumVioletRed"),xe(Gn,"defaultProps",{minLength:2,debounceTime:500,onLoad:Ae,onUnload:Ae,onFocus:Ae,onBlur:Ae,onReset:Ae,onSelect:Ae,displayValue:ii("displayValue"),displayResult:ii("displayResult")}),xe(Gn,"initialState",{value:"",searching:!1}),xe(Gn,"initialProps",{value:"initialValue"}),xe(Gn,"actions",["onFocus","onBlur","onChange","onKeyDown","reset","selectResult","setCursor","selectCursor","resultsRef","activeRef"]);const Yo=br(Gn),L_=({input:e,onFocus:t,onBlur:n,onChange:r,reset:a,placeholder:s="Search",clearIcon:l="cross",searchIcon:i="search",searchingIcon:c="cog.spin",inputsClass:u="inputs round",prefixClass:d="prefix",suffixClass:p="suffix",inputType:m="text",inputClass:y="",disabled:b,searching:j})=>o.jsxs("div",{className:u,children:[o.jsx("div",{className:d,children:o.jsx(J,{name:i})}),o.jsx("input",{type:m,placeholder:s,value:e,onFocus:t,onBlur:n,onChange:r,disabled:b,className:y}),o.jsx("div",{className:p,onClick:a,children:o.jsx(J,{name:j?c:l})})]}),N_=Yo.Consumer(L_),R_=({result:e,active:t,activeRef:n,onClick:r,onMouseEnter:a,displayResult:s,resultClass:l="item",activeClass:i="active"})=>o.jsx("div",{className:we(l,{[i]:t}),onClick:r,onMouseEnter:a,ref:t?n:null,children:s(e)}),D_=Yo.Consumer(R_),O_=({noResultsClass:e="none",noResults:t="No results"})=>o.jsx("div",{className:e,children:t}),M_=Yo.Consumer(O_),A_=({results:e,resultsRef:t,cursor:n,selectResult:r,setCursor:a,resultsClass:s="menu border bdr-1",Result:l=D_,NoResults:i=M_})=>o.jsx("div",{className:s,ref:t,children:Vo(e)&&e.length?e.map((c,u)=>o.jsx(l,{result:c,active:Be(n)&&e[n]===c,onClick:()=>r(c),onMouseEnter:()=>a(u)},c.id??c.value??u)):o.jsx(i,{})}),P_=Yo.Consumer(A_),$_=({results:e,onKeyDown:t,Input:n=N_,Results:r=P_})=>o.jsxs("div",{className:"search",onKeyDown:t,children:[o.jsx(n,{}),!!e&&o.jsx(r,{})]}),B_=Yo.Consumer($_),I_=({Content:e=B_,...t})=>o.jsx(Yo.Provider,{...t,children:o.jsx(e,{})}),Ki=me(I_,"Search"),z_={value:O3,isOpen:!1,cursor:void 0,selected:void 0},gn=class gn extends Ba{constructor(t){super(t);const n=this.inputValue();this.state={...this.state,input:n}}inputValue(t=this.props.initialValue){return Be(t)?this.props.displayValue(t):null}selectState(t){const n=this.inputValue(t);return{value:t,input:n,selected:t}}};xe(gn,"debug",!1),xe(gn,"debugPrefix","Select > "),xe(gn,"debugColor","MediumVioletRed"),xe(gn,"defaultProps",{...gn.defaultProps,options:[],displayValue:ii("displayValue"),displayOption:ii("displayOption")}),xe(gn,"initialState",{...z_}),xe(gn,"initialProps",{value:"initialValue"}),xe(gn,"actions",["onFocus","onBlur","onClick","onKeyDown","open","close","setCursor","selectCursor","selectOption","menuRef","activeRef"]);let Yu=gn;const Xo=br(Yu),F_=({input:e,onFocus:t,onBlur:n,onClick:r,placeholder:a="Select",placeholderClass:s="placeholder",inputsClass:l="inputs",inputClass:i="input",suffixClass:c="suffix",disabled:u})=>o.jsxs("div",{className:l,onClick:r,children:[o.jsx("div",{onFocus:t,onBlur:n,disabled:u,className:i,tabIndex:0,children:Be(e)?o.jsx(o.Fragment,{children:e}):o.jsx("span",{className:s,children:a})}),o.jsx("div",{className:c,children:o.jsx(J,{name:"angle-down"})})]}),U_=Xo.Consumer(F_),H_=({option:e,active:t,activeRef:n,selected:r,onClick:a,onMouseEnter:s,displayOption:l,optionClass:i="item no-hover",activeClass:c="active",selectedClass:u="selected",disabledClass:d="disabled"})=>o.jsx("div",{className:we(i,e.className,t?c:null,r?u:null,e.disabled?d:null),onMouseEnter:s,onClick:a,ref:t?n:null,"aria-disabled":e.disabled,children:l(e)}),V_=Xo.Consumer(H_),W_=({noOptionsClass:e="none",noOptions:t="No options"})=>o.jsx("div",{className:e,children:t}),Z_=Xo.Consumer(W_),K_=({options:e,menuRef:t,menuClass:n="menu border bdr-1",cursor:r,selected:a,selectOption:s,setCursor:l,Option:i=V_,NoOptions:c=Z_})=>o.jsx("div",{className:n,ref:t,children:Vo(e)&&e.length?e.map((u,d)=>o.jsx(i,{option:u,active:Be(r)&&e[r]===u,selected:a===u,onClick:()=>s(u),onMouseEnter:()=>l(d)},u.id??u.value??d)):o.jsx(c,{})}),G_=Xo.Consumer(K_),Y_=({onKeyDown:e,isOpen:t,selectClass:n="select",openClass:r="open",closedClass:a="closed",Input:s=U_,Menu:l=G_})=>o.jsxs("div",{className:we(n,t?r:a),onKeyDown:e,children:[o.jsx(s,{}),!!t&&o.jsx(l,{})]}),X_=Xo.Consumer(Y_),Q_=({Content:e=X_,...t})=>o.jsx(Xo.Provider,{...t,children:o.jsx(e,{})}),Ds=me(Q_,"Select"),q_=({...e})=>o.jsx(Fp,{modifiers:[uw,fg,zp],strategy:GS,...e}),J_=()=>o.jsxs(q,{children:[o.jsx("h3",{children:"Hello World!"}),"This is an alert."]}),ek=`import React from 'react'
import { Alert } from '@/src/index.jsx'

{/* START */}
// PRETEND: import { Alert } from '@abw/badger-react-ui'

const AlertExample = () =>
  <Alert>
    <h3>Hello World!</h3>
    This is an alert.
  </Alert>

export default AlertExample
`,tk=["red","brown","orange","yellow","olive","green","teal","blue","indigo","violet","purple","pink","maroon"],mg=({color:e,setColor:t,disabled:n=!1})=>o.jsxs("select",{name:"color",required:!0,value:e,onChange:r=>t(r.target.value),disabled:n,children:[o.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Select Range"}),o.jsx("option",{value:"",children:"Default"}),tk.map(r=>o.jsx("option",{value:r,children:r},r))]}),nk=["smallest","smaller","small","medium","large","larger","largest","x2","x3","x4","x5","x6","x7","x8","x9","x10"],gg=({size:e,setSize:t})=>o.jsxs("select",{name:"size",required:!0,value:e,onChange:n=>t(n.target.value),children:[o.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Size"}),o.jsx("option",{value:"",children:"Default"}),nk.map(n=>o.jsx("option",{value:n,children:n},n))]}),rk=[0,1,2,3,4,5,6,8,10],ok=({radius:e,setRadius:t})=>o.jsxs("select",{name:"radius",required:!0,value:e,onChange:n=>t(n.target.value),children:[o.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Radius"}),o.jsx("option",{value:"",children:"Default"}),rk.map(n=>o.jsx("option",{value:n,children:n},n))]}),ak=[1,2,3,4,5],sk=({shadow:e,setShadow:t})=>o.jsxs("select",{name:"shadow",required:!0,value:e,onChange:n=>t(n.target.value),children:[o.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Shadow"}),o.jsx("option",{value:"",children:"Default"}),ak.map(n=>o.jsx("option",{value:n,children:n},n))]}),th=({checked:e,toggle:t,label:n,disabled:r=!1})=>o.jsxs("label",{className:"checkbox border no-focus",children:[o.jsx("input",{type:"checkbox",checked:e,onChange:t,disabled:r}),n]}),lk=[0,1,2,3,4,5,6,8,10],ik=({border:e,setBorder:t,disabled:n=!1})=>o.jsxs("select",{name:"border",required:!0,value:e,onChange:r=>t(r.target.value),disabled:n,children:[o.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Border"}),o.jsx("option",{value:"",children:"Default"}),lk.map(r=>o.jsx("option",{value:r,children:r},r))]}),ck=Object.keys(js.icons),Xu=({icon:e,setIcon:t,disabled:n=!1})=>o.jsxs("select",{name:"icon",required:!0,value:e,onChange:r=>t(r.target.value),disabled:n,children:[o.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Icon"}),o.jsx("option",{value:"",children:"None"}),ck.map(r=>o.jsx("option",{value:r,children:r},r))]}),uk=()=>{const[e,t]=v.useState(0),[n,r]=v.useState({headline:"",title:"",text:"Hello World!",revealable:!1,stripe:!1}),a=c=>()=>{r(u=>({...u,[c]:!u[c]})),t(u=>u+1)},s=c=>u=>{r(d=>({...d,[c]:u})),t(d=>d+1)},i=`<Alert
  ${pk(n)}
/>`;return o.jsxs("div",{className:"example grid-2 gap-h-8 stack-desktop",children:[o.jsxs("div",{children:[o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Output"}),o.jsx("div",{className:"output mar-b-8",children:o.jsx(fk,{options:n},e)})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Markup"}),o.jsx(tr,{code:i,language:"html",expand:!0})]})]}),o.jsx(dk,{options:n,setOption:s,toggleOption:a})]})},dk=({options:e,toggleOption:t,setOption:n})=>{const r=n("headline"),a=n("title"),s=n("text"),l=n("type"),i=n("size"),c=n("color"),u=n("border"),d=n("radius"),p=n("shadow"),m=n("icon"),y=n("headicon"),b=t("stripe"),j=t("revealable");return o.jsxs("div",{children:[o.jsx(Ic,{label:"Headline",value:e.headline,setValue:r}),o.jsx(Ic,{label:"Title",value:e.title,setValue:a}),o.jsx(Ic,{label:"Text",value:e.text,setValue:s}),o.jsxs("div",{className:"grid-2 gap-h-4 stack-mobile top",children:[o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Type"}),o.jsx(hk,{type:e.type,setType:l})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Color"}),o.jsx(mg,{color:e.color,setColor:c,disabled:e.type})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Size"}),o.jsx(gg,{size:e.size,setSize:i})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Shadow"}),o.jsx(sk,{shadow:e.shadow,setShadow:p})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Border Width"}),o.jsx(ik,{border:e.border,setBorder:u,disabled:e.stripe})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Border Radius"}),o.jsx(ok,{radius:e.radius,setRadius:d})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Headline Icon"}),o.jsx(Xu,{icon:e.headicon,setIcon:y,disabled:!e.headline})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Body Icon"}),o.jsx(Xu,{icons:e.icon,setIcon:m})]})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Options"}),o.jsxs("div",{className:"grid-2 gap-h-4 stack-mobile top",children:[o.jsx(th,{checked:e.stripe,toggle:b,label:"Stripe"}),o.jsx(th,{checked:e.revealable,toggle:j,label:"Revealable",disabled:!e.headline})]})]})]})},pk=e=>{const t=["headline","title","text","type","color","size","headicon","icon"].filter(a=>e[a]).map(a=>`${a}="${e[a]}"`),n=["shadow","border","radius"].filter(a=>e[a]).map(a=>`${a}={${e[a]}}`),r=["stripe","revealable","dismissable"].filter(a=>e[a]);return[...t,...n,...r].join(`
  `)},fk=({options:e})=>o.jsx(q,{...e}),hk=({type:e,setType:t})=>o.jsxs("select",{name:"type",required:!0,value:e,onChange:n=>t(n.target.value),children:[o.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Type"}),o.jsx("option",{value:"",children:"Default"}),["info","warning","success","error"].map(n=>o.jsx("option",{value:n,children:n},n))]}),Ic=({label:e,value:t,setValue:n})=>o.jsxs("div",{className:"field",children:[o.jsx("label",{children:e}),o.jsxs("div",{className:"inputs",children:[o.jsx("input",{type:"text",name:"headline",value:t,onChange:r=>n(r.target.value)}),o.jsx("div",{className:"suffix",children:o.jsx(J,{name:"cross",className:"hover",onClick:()=>n("")})})]})]}),xg=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["Use the ",o.jsx("code",{children:"Alert"})," component to render an alert. Any child elements will be rendered inside the alert body."]}),o.jsx(Ce,{Component:J_,code:ek,expand:!0}),o.jsx("h2",{children:"Demo"}),o.jsx(uk,{})]}),mk=Object.freeze(Object.defineProperty({__proto__:null,default:xg},Symbol.toStringTag,{value:"Module"})),vg=e=>e.replaceAll(/\W+/g,"-").replace(/^-+/,"").replace(/-+$/,"").toLowerCase(),gk=({render:e})=>{const[t,n]=v.useState({}),r=v.useRef();return e({tocs:t,addToc:(l,i,c,u)=>{const d=t[l]||(t[l]={});d[i]={text:c,ref:u},n({...t})},addTocHeading:(l,i,c,u)=>{const d=t[l]||(t[l]={});d[i]={heading:c,ref:u},n({...t})},contentRef:r})},Os=br(gk),xk=({addToc:e,addTocHeading:t,tocName:n,render:r})=>r({addPageToc:(l,i,c)=>{e(n,l,i,c)},addPageTocHeading:(l,i,c)=>{t(n,l,i,c)}}),Up=br(Os.Consumer(xk)),vk=({id:e,code:t,title:n=t,children:r,addPageToc:a,split:s})=>{const l=vg(e||t||n),i=v.useRef(),c=t?`code:${t}`:n;return v.useEffect(()=>{a&&a(l,c,i)},[e,t,n]),o.jsxs("section",{id:l,ref:i,children:[o.jsx("h3",{className:t?"font-mono page-section":"page-section",children:n}),o.jsx("div",{className:s?"cols-2 stack-desktop":"",children:r})]})},Z=Up.Consumer(vk),R=({Component:e,Source:t,children:n,code:r,title:a,caption:s=r?o.jsx("code",{children:r}):a,expand:l,undent:i,lineProps:c,highlightLines:u,...d})=>o.jsxs(Z,{code:r,title:a,...d,children:[o.jsx("div",{className:"cols-2 stack-desktop mar-b-4",children:n}),o.jsx(Ce,{Component:e,code:t,caption:s,expand:l,undent:i,highlightLines:u,lineProps:c})]}),yk=()=>o.jsxs("div",{children:[o.jsx(ka,{text:"Error alert"}),o.jsx(ka,{text:"Error alert with border",border:!0}),o.jsx(ka,{headline:"Error Alert",text:"Error alert with headline",border:!0,shadow:!0}),o.jsx(ka,{title:"Stonehenge",text:"Crushed by a dwarf",icon:"exclamation-thick",stripe:!0,shadow:3})]}),Ck=`import React from 'react'
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
`,yg=()=>o.jsx(R,{code:"Error",Component:yk,Source:Ck,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"Error"})," component is a short-cut to generate an error alert."]})}),jk=Object.freeze(Object.defineProperty({__proto__:null,default:yg},Symbol.toStringTag,{value:"Module"})),bk=()=>o.jsxs("div",{children:[o.jsx(Sa,{text:"Info alert"}),o.jsx(Sa,{text:"Info alert with border",border:!0}),o.jsx(Sa,{headline:"Info Alert",text:"Info alert with headline",border:!0,shadow:!0}),o.jsx(Sa,{title:"Stonehenge",text:"Where the demons dwell",icon:"info",stripe:!0,shadow:3})]}),Sk=`import React from 'react'
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
`,Cg=()=>o.jsx(R,{code:"Info",Component:bk,Source:Sk,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"Info"})," component is a short-cut to generate an info alert."]})}),wk=Object.freeze(Object.defineProperty({__proto__:null,default:Cg},Symbol.toStringTag,{value:"Module"})),_k=()=>o.jsxs("div",{children:[o.jsx(wa,{text:"Success alert"}),o.jsx(wa,{text:"Success alert with border",border:!0}),o.jsx(wa,{headline:"Success Alert",text:"Success alert with headline",border:!0,shadow:!0}),o.jsx(wa,{title:"Stonehenge",text:"Where the banshees live...",icon:"check-thicker-shrink=4",stripe:!0,shadow:3})]}),kk=`import React from 'react'
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
`,jg=()=>o.jsx(R,{code:"Success",Component:_k,Source:kk,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"Success"})," component is a short-cut to generate a success alert."]})}),Tk=Object.freeze(Object.defineProperty({__proto__:null,default:jg},Symbol.toStringTag,{value:"Module"})),Ek=()=>o.jsxs("div",{children:[o.jsx(_a,{text:"Warning alert"}),o.jsx(_a,{text:"Warning alert with border",border:!0}),o.jsx(_a,{headline:"Warning Alert",text:"Warning alert with headline",border:!0,shadow:!0}),o.jsx(_a,{title:"Stonehenge",text:"...and they do live well",icon:"exclamation-thick",stripe:!0,shadow:3})]}),Lk=`import React from 'react'
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
`,bg=()=>o.jsx(R,{code:"Warning",Component:Ek,Source:Lk,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"Warning"})," component is a short-cut to generate a warning alert."]})}),Nk=Object.freeze(Object.defineProperty({__proto__:null,default:bg},Symbol.toStringTag,{value:"Module"})),Rk=()=>o.jsxs("div",{children:[o.jsx(q,{text:"Border Alert",border:!0}),o.jsx(q,{text:"Border Width 2",border:2})]}),Dk=`import React from 'react'
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
`,Sg=()=>o.jsx(R,{code:"border",Component:Rk,Source:Dk,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"border"})," property can be used to add a border.  This can be a number to indicate the border width."]})}),Ok=Object.freeze(Object.defineProperty({__proto__:null,default:Sg},Symbol.toStringTag,{value:"Module"})),Mk=()=>o.jsx(q,{text:"Hello World!",className:"border shadow-2"}),Ak=`import React from 'react'
import { Alert } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Alert
    text="Hello World!"
    className="border shadow-2"
  />
/* END */

export default Component
`,wg=()=>o.jsx(R,{code:"className",Component:Mk,Source:Ak,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"className"})," property can be used to set a CSS class."]})}),Pk=Object.freeze(Object.defineProperty({__proto__:null,default:wg},Symbol.toStringTag,{value:"Module"})),$k=()=>o.jsxs("div",{children:[o.jsx(q,{text:"Red Alert",color:"red"}),o.jsx(q,{text:"Brown Alert",color:"brown"}),o.jsx(q,{text:"Orange Alert",color:"orange"}),o.jsx(q,{text:"Yellow Alert",color:"yellow"}),o.jsx(q,{text:"Green Alert",color:"green"}),o.jsx(q,{text:"Teal Alert",color:"teal"}),o.jsx(q,{text:"Blue Alert",color:"blue"}),o.jsx(q,{text:"Indigo Alert",color:"indigo"}),o.jsx(q,{text:"Violet Alert",color:"violet"}),o.jsx(q,{text:"Purple Alert",color:"purple"}),o.jsx(q,{text:"Pink Alert",color:"pink"}),o.jsx(q,{text:"Maroon Alert",color:"maroon"})]}),Bk=`import React from 'react'
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
`,_g=()=>o.jsx(R,{code:"color",Component:$k,Source:Bk,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"color"})," property can be used to set the color range used for the alert."]})}),Ik=Object.freeze(Object.defineProperty({__proto__:null,default:_g},Symbol.toStringTag,{value:"Module"})),zk=()=>o.jsx(q,{headline:"Dismissable Alert",text:"A dismissable alert",dismissable:!0}),Fk=`import React from 'react'
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
`,kg=()=>o.jsx(R,{code:"dismissable",Component:zk,Source:Fk,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"dismissable"})," property can be used to make an alert dismissable."]})}),Uk=Object.freeze(Object.defineProperty({__proto__:null,default:kg},Symbol.toStringTag,{value:"Module"})),Hk=()=>o.jsx(q,{headline:"Headline Icon Alert",headIcon:"bars",text:"An alert with a headline icon"}),Vk=`import React from 'react'
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
`,Tg=()=>o.jsx(R,{code:"headicon",Component:Hk,Source:Vk,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"headIcon"})," property can be used to add an icon to the headline."]})}),Wk=Object.freeze(Object.defineProperty({__proto__:null,default:Tg},Symbol.toStringTag,{value:"Module"})),Zk=()=>o.jsx(q,{headline:"Headline Alert",text:"An alert with a headline"}),Kk=`import React from 'react'
import { Alert } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Alert
    headline="Headline Alert"
    text="An alert with a headline"
  />
/* END */

export default Component
`,Eg=()=>o.jsx(R,{code:"headline",Component:Zk,Source:Kk,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"headline"})," property can be used to set a headline."]})}),Gk=Object.freeze(Object.defineProperty({__proto__:null,default:Eg},Symbol.toStringTag,{value:"Module"})),Yk=()=>o.jsxs("div",{children:[o.jsx(q,{icon:"info",type:"info",title:"Eleven",text:"It's one louder"}),o.jsx(q,{icon:"check",type:"success",title:"Eleven",text:"It's one louder"}),o.jsx(q,{icon:"exclamation",type:"error",title:"Eleven",text:"It's one louder"})]}),Xk=`import React from 'react'
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
`,Lg=()=>o.jsx(R,{code:"icon",Component:Yk,Source:Xk,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"icon"})," property can be used to add an icon to the body."]})}),Qk=Object.freeze(Object.defineProperty({__proto__:null,default:Lg},Symbol.toStringTag,{value:"Module"})),qk=()=>o.jsx(q,{headline:"Dismissable Alert",text:"A dismissable alert",onDismiss:()=>window.alert("Bye!"),dismissable:!0}),Jk=`import React from 'react'
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
`,Ng=()=>o.jsx(R,{code:"onDismiss",Component:qk,Source:Jk,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"onDismiss"})," property can be used to register a function which will be called when the alert is dismissed."]})}),eT=Object.freeze(Object.defineProperty({__proto__:null,default:Ng},Symbol.toStringTag,{value:"Module"})),tT=()=>o.jsx(q,{text:"Radius Alert",radius:4}),nT=`import React from 'react'
import { Alert } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Alert
    text="Radius Alert"
    radius={4}
  />
/* END */

export default Component
`,Rg=()=>o.jsx(R,{code:"radius",Component:tT,Source:nT,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"radius"})," property can be used to set the border radius."]})}),rT=Object.freeze(Object.defineProperty({__proto__:null,default:Rg},Symbol.toStringTag,{value:"Module"})),oT=()=>o.jsx(q,{headline:"Revealable Alert",text:"A revealable alert",revealable:!0}),aT=`import React from 'react'
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
`,Dg=()=>o.jsx(R,{code:"revealable",Component:oT,Source:aT,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"revealable"})," property can be used to make the alert revealable."]})}),sT=Object.freeze(Object.defineProperty({__proto__:null,default:Dg},Symbol.toStringTag,{value:"Module"})),lT=()=>o.jsx(q,{headline:"Revealed Alert",text:"A revealed alert",revealable:!0,revealed:!0}),iT=`import React from 'react'
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
`,Og=()=>o.jsx(R,{code:"revealed",Component:lT,Source:iT,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"revealed"})," property can be set to make it a revealable alert initially revealed."]})}),cT=Object.freeze(Object.defineProperty({__proto__:null,default:Og},Symbol.toStringTag,{value:"Module"})),uT=()=>o.jsxs("div",{children:[o.jsx(q,{text:"Alert With Default Shadow (1)",shadow:!0}),o.jsx(q,{text:"Alert With Shadow 2",shadow:2}),o.jsx(q,{text:"Alert With Shadow 3",shadow:3}),o.jsx(q,{text:"Alert With Shadow 4",shadow:4}),o.jsx(q,{text:"Alert With Shadow 5",shadow:5})]}),dT=`import React from 'react'
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
`,Mg=()=>o.jsx(R,{code:"shadow",Component:uT,Source:dT,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"shadow"})," property can be used to add a shadow.  The default value is 1 or you can set it to any number from"," ","1 to 5."]})}),pT=Object.freeze(Object.defineProperty({__proto__:null,default:Mg},Symbol.toStringTag,{value:"Module"})),fT=()=>o.jsxs("div",{children:[o.jsx(q,{text:"Smallest Alert",size:"smallest"}),o.jsx(q,{text:"Smaller Alert",size:"smaller"}),o.jsx(q,{text:"Small Alert",size:"small"}),o.jsx(q,{text:"Medium Alert",size:"medium"}),o.jsx(q,{text:"Large Alert",size:"large"}),o.jsx(q,{text:"Larger Alert",size:"larger"}),o.jsx(q,{text:"Largest Alert",size:"largest"})]}),hT=`import React from 'react'
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
`,Ag=()=>o.jsx(R,{code:"size",Component:fT,Source:hT,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"size"})," property can be used to set the text size."]})}),mT=Object.freeze(Object.defineProperty({__proto__:null,default:Ag},Symbol.toStringTag,{value:"Module"})),gT=()=>o.jsxs("div",{children:[o.jsx(q,{text:"Stripe Alert",stripe:!0,shadow:4}),o.jsx(q,{text:"Info Stripe Alert",type:"info",stripe:!0,shadow:4}),o.jsx(q,{text:"Success Stripe Alert",type:"success",stripe:!0,shadow:4}),o.jsx(q,{text:"Warning Stripe Alert",type:"warning",stripe:!0,shadow:4}),o.jsx(q,{text:"Error Stripe Alert",type:"error",stripe:!0,shadow:4})]}),xT=`import React from 'react'
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
`,Pg=()=>o.jsx(R,{code:"stripe",Component:gT,Source:xT,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"stripe"})," property can be set as a short-cut to add the"," ",o.jsx("code",{children:"stripe"})," CSS class for a more minimal look."]})}),vT=Object.freeze(Object.defineProperty({__proto__:null,default:Pg},Symbol.toStringTag,{value:"Module"})),yT=()=>o.jsx(q,{text:"Hello World!"}),CT=`import React from 'react'
import { Alert } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Alert text="Hello World!"/>
/* END */

export default Component`,$g=()=>o.jsx(R,{code:"text",Component:yT,Source:CT,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"text"})," property can be used to set the body text."]})}),jT=Object.freeze(Object.defineProperty({__proto__:null,default:$g},Symbol.toStringTag,{value:"Module"})),bT=()=>o.jsx(q,{title:"Hello World!",children:"This is an alert"}),ST=`import React from 'react'
import { Alert } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Alert title="Hello World!">
    This is an alert
  </Alert>
/* END */

export default Component`,Bg=()=>o.jsx(R,{code:"title",Component:bT,Source:ST,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"title"})," property can be used to set a title."]})}),wT=Object.freeze(Object.defineProperty({__proto__:null,default:Bg},Symbol.toStringTag,{value:"Module"})),_T=()=>o.jsxs("div",{children:[o.jsx(q,{text:"Info Alert",type:"info"}),o.jsx(q,{text:"Success Alert",type:"success"}),o.jsx(q,{text:"Warning Alert",type:"warning"}),o.jsx(q,{text:"Error Alert",type:"error"})]}),kT=`import React from 'react'
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
`,Ig=()=>o.jsx(R,{code:"type",Component:_T,Source:kT,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"type"})," property can be used to set it to one of the pre-defined types: ",o.jsx("code",{children:"info"}),", ",o.jsx("code",{children:"success"}),","," ",o.jsx("code",{children:"warning"})," or ",o.jsx("code",{children:"error"}),"."]})}),TT=Object.freeze(Object.defineProperty({__proto__:null,default:Ig},Symbol.toStringTag,{value:"Module"})),st=({tocName:e,children:t})=>o.jsx(Up.Provider,{tocName:e,children:t}),ET=({id:e,title:t,addPageTocHeading:n})=>{const r=vg(e||t),a=v.useRef();return v.useEffect(()=>{n&&n(r,t,a)},[e,t]),o.jsx("h2",{id:r,ref:a,className:"section-heading",children:t})},ue=Up.Consumer(ET),LT=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Alert"}),o.jsx(xg,{}),o.jsxs(st,{tocName:"alert",children:[o.jsx(ue,{title:"Properties"}),o.jsx(Bg,{}),o.jsx($g,{}),o.jsx(Eg,{}),o.jsx(Tg,{}),o.jsx(Dg,{}),o.jsx(Og,{}),o.jsx(kg,{}),o.jsx(Ng,{}),o.jsx(wg,{}),o.jsx(Sg,{}),o.jsx(Rg,{}),o.jsx(Mg,{}),o.jsx(Ag,{}),o.jsx(_g,{}),o.jsx(Ig,{}),o.jsx(Pg,{}),o.jsx(Lg,{}),o.jsx(ue,{title:"Components"}),o.jsx(Cg,{}),o.jsx(jg,{}),o.jsx(bg,{}),o.jsx(yg,{})]})]}),NT=Object.freeze(Object.defineProperty({__proto__:null,default:LT},Symbol.toStringTag,{value:"Module"})),RT=()=>o.jsx(M,{children:"This is a button"}),DT=`import React from 'react'
import { Button } from '@/src/index.jsx'

{/* START */}
// PRETEND: import { Button } from '@abw/badger-react-ui'

const ButtonExample = () =>
  <Button>
    This is a button
  </Button>

export default ButtonExample
`,zg=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"Button"})," component can be used to render a button. Any child elements will be included as content."]}),o.jsxs("p",{className:"cols-2 stack-desktop",children:["There are numerous properties listed below that are typically used as shortcuts to set particular CSS styles.  Any other properties not listed here are forwarded to the ",o.jsx("code",{children:"button"})," component."]}),o.jsx(Ce,{Component:RT,code:DT,expand:!0})]}),OT=Object.freeze(Object.defineProperty({__proto__:null,default:zg},Symbol.toStringTag,{value:"Module"})),MT=()=>o.jsx(M,{text:"Custom Button Content",Content:({text:e})=>o.jsxs("span",{className:"pad-4",children:["😀 ",e]})}),AT=`import React from 'react'
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
`,Fg=()=>o.jsxs(R,{code:"Content",Component:MT,Source:AT,undent:2,expand:!0,children:[o.jsxs("p",{children:["The ",o.jsx("code",{children:"Content"})," property (note the capital C) can be used to provide an alternate component to render the button content. By default it uses ",o.jsx("code",{children:"WithIcons"})," to render the button text with optional icons."]}),o.jsxs("p",{children:["If you want to change the way that button content is generated on a global level then you can use the theming engine to define a different ",o.jsx("code",{children:"Content"})," component for all buttons."]})]}),PT=Object.freeze(Object.defineProperty({__proto__:null,default:Fg},Symbol.toStringTag,{value:"Module"})),$T=()=>o.jsxs("div",{className:"flex wrap gap-4",children:[o.jsx(M,{text:"Red Bare",color:"red",bare:!0}),o.jsx(M,{text:"Green Bare",color:"green",bare:!0}),o.jsx(M,{text:"Blue Bare",color:"blue",bare:!0})]}),BT=`import React from 'react'
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
`,Ug=()=>o.jsx(R,{code:"bare",Component:$T,Source:BT,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"bare"})," property can be added for bare naked buttons."]})}),IT=Object.freeze(Object.defineProperty({__proto__:null,default:Ug},Symbol.toStringTag,{value:"Module"})),zT=()=>o.jsxs("div",{className:"flex middle wrap gap-4",children:[o.jsx(M,{text:"Border 2",color:"red",outline:!0,border:2}),o.jsx(M,{text:"Border 3",color:"brown",outline:!0,border:3}),o.jsx(M,{text:"Border 4",color:"orange",outline:!0,border:4}),o.jsx(M,{text:"Border 5",color:"yellow",outline:!0,border:5})]}),FT=`import React from 'react'
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
`,Hg=()=>o.jsx(R,{code:"border",Component:zT,Source:FT,undent:2,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"border"})," property can be used to set the border width. This is only really noticeable on outline buttons.  There is a border around solid buttons (mainly to help in matching the height of other form inputs), although it's the same color as the background."]})}),UT=Object.freeze(Object.defineProperty({__proto__:null,default:Hg},Symbol.toStringTag,{value:"Module"})),HT=()=>o.jsxs("div",{className:"flex wrap gap-4",children:[o.jsx(M,{text:"Yellow Button",color:"yellow"}),o.jsx(M,{text:"Bright Yellow Button",color:"yellow",bright:!0})]}),VT=`import React from 'react'
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
`,Vg=()=>o.jsx(R,{code:"bright",Component:HT,Source:VT,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"bright"})," property can be added to make the buttons brighter than normal."]})}),WT=Object.freeze(Object.defineProperty({__proto__:null,default:Vg},Symbol.toStringTag,{value:"Module"})),ZT=()=>o.jsx(M,{text:"Custom Button",className:"red bdw-2 bdr-4 bgc-80 fgc-20 bgd-20 fgd-80"}),KT=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    text="Custom Button"
    className="red bdw-2 bdr-4 bgc-80 fgc-20 bgd-20 fgd-80"
  />
/* END */

export default Component
`,Wg=()=>o.jsx(R,{code:"className",Component:ZT,Source:KT,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"className"})," property can be added to add a CSS class to the button."]})}),GT=Object.freeze(Object.defineProperty({__proto__:null,default:Wg},Symbol.toStringTag,{value:"Module"})),YT=()=>o.jsxs("div",{className:"grid-2 gap-4 stack-tablet",children:[o.jsx(M,{text:"Red Button",color:"red"}),o.jsx(M,{text:"Brown Button",color:"brown"}),o.jsx(M,{text:"Orange Button",color:"orange"}),o.jsx(M,{text:"Yellow Button",color:"yellow"}),o.jsx(M,{text:"Green Button",color:"green"}),o.jsx(M,{text:"Teal Button",color:"teal"}),o.jsx(M,{text:"Blue Button",color:"blue"}),o.jsx(M,{text:"Indigo Button",color:"indigo"}),o.jsx(M,{text:"Violet Button",color:"violet"}),o.jsx(M,{text:"Purple Button",color:"purple"}),o.jsx(M,{text:"Pink Button",color:"pink"}),o.jsx(M,{text:"Maroon Button",color:"maroon"})]}),XT=`import React from 'react'
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
`,Zg=()=>o.jsx(R,{code:"color",Component:YT,Source:XT,undent:2,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"color"})," property can be used to set the color range used for the button."]})}),QT=Object.freeze(Object.defineProperty({__proto__:null,default:Zg},Symbol.toStringTag,{value:"Module"})),qT=()=>o.jsxs("div",{className:"flex wrap gap-4",children:[o.jsx(M,{text:"Red Button",color:"red"}),o.jsx(M,{text:"Dark Red Button",color:"red",dark:!0})]}),JT=`import React from 'react'
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
`,Kg=()=>o.jsx(R,{code:"dark",Component:qT,Source:JT,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"dark"})," property can be added to make the buttons darker than normal."]})}),eE=Object.freeze(Object.defineProperty({__proto__:null,default:Kg},Symbol.toStringTag,{value:"Module"})),tE=()=>o.jsx(M,{text:"Disabled Button",disabled:!0}),nE=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    text="Disabled Button"
    disabled
  />
/* END */

export default Component
`,Gg=()=>o.jsx(R,{code:"disabled",Component:tE,Source:nE,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"disabled"})," property can be set to disable a button."]})}),rE=Object.freeze(Object.defineProperty({__proto__:null,default:Gg},Symbol.toStringTag,{value:"Module"})),oE=()=>o.jsx(M,{color:"green",icon:"bars"}),aE=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    color="green"
    icon="bars"
  />
/* END */

export default Component
`,Yg=()=>o.jsx(R,{code:"icon",Component:oE,Source:aE,undent:2,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"icon"})," property can be used to add an icon to a button."]})}),sE=Object.freeze(Object.defineProperty({__proto__:null,default:Yg},Symbol.toStringTag,{value:"Module"})),lE=()=>o.jsx(M,{color:"green",text:"Back",iconLeft:"angle-left"}),iE=`import React from 'react'
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
`,Xg=()=>o.jsx(R,{code:"iconLeft",Component:lE,Source:iE,undent:2,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"iconLeft"})," property can be used to add an icon to the left side of a button."]})}),cE=Object.freeze(Object.defineProperty({__proto__:null,default:Xg},Symbol.toStringTag,{value:"Module"})),uE=()=>o.jsx(M,{color:"green",text:"Next",iconRight:"angle-right"}),dE=`import React from 'react'
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
`,Qg=()=>o.jsx(R,{code:"iconRight",Component:uE,Source:dE,undent:2,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"iconRight"})," property can be used to add an icon to the right side of a button."]})}),pE=Object.freeze(Object.defineProperty({__proto__:null,default:Qg},Symbol.toStringTag,{value:"Module"})),fE=()=>o.jsx(M,{text:"I am labelled!",label:"This is a label"}),hE=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    text="I am labelled!"
    label="This is a label"
  />
/* END */

export default Component
`,qg=()=>o.jsx(R,{code:"label",Component:fE,Source:hE,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"label"})," property can be used to set the",o.jsx("code",{children:"aria-label"})," property on the button.  This typically doesn't have any visual effect on the button, but is used by screen readers to provide more detail about the functionality of the button."]})}),mE=Object.freeze(Object.defineProperty({__proto__:null,default:qg},Symbol.toStringTag,{value:"Module"})),gE=()=>o.jsx(M,{text:"Click Me!",onClick:()=>window.alert("Click!")}),xE=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    text="Click Me!"
    onClick={() => window.alert('Click!')}
  />
/* END */

export default Component
`,Jg=()=>o.jsx(R,{code:"onClick",Component:gE,Source:xE,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"onClick"})," property can be used to register a function which will be called when the button is clicked."]})}),vE=Object.freeze(Object.defineProperty({__proto__:null,default:Jg},Symbol.toStringTag,{value:"Module"})),yE=()=>o.jsxs("div",{className:"flex wrap gap-4",children:[o.jsx(M,{text:"Red Outline",color:"red",outline:!0}),o.jsx(M,{text:"Green Outline",color:"green",outline:!0}),o.jsx(M,{text:"Blue Outline",color:"blue",outline:!0})]}),CE=`import React from 'react'
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
`,e0=()=>o.jsx(R,{code:"outline",Component:yE,Source:CE,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"outline"})," property can be added for outline buttons."]})}),jE=Object.freeze(Object.defineProperty({__proto__:null,default:e0},Symbol.toStringTag,{value:"Module"})),bE=()=>o.jsxs("div",{className:"flex middle wrap gap-4",children:[o.jsx(M,{text:"Radius 0",color:"olive",radius:0}),o.jsx(M,{text:"Radius 2",color:"green",radius:2}),o.jsx(M,{text:"Radius 4",color:"teal",radius:3}),o.jsx(M,{text:"Radius 6",color:"blue",radius:4})]}),SE=`import React from 'react'
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
`,t0=()=>o.jsx(R,{code:"radius",Component:bE,Source:SE,undent:2,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"radius"})," property can be used to set the border radius in multiples of the base unit: 0.25rem."]})}),wE=Object.freeze(Object.defineProperty({__proto__:null,default:t0},Symbol.toStringTag,{value:"Module"})),_E=()=>o.jsxs("div",{className:"flex wrap gap-4",children:[o.jsx(M,{text:"Red Shaded",color:"red",shaded:!0}),o.jsx(M,{text:"Green Shaded",color:"green",shaded:!0}),o.jsx(M,{text:"Blue Shaded",color:"blue",shaded:!0})]}),kE=`import React from 'react'
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
`,n0=()=>o.jsx(R,{code:"shaded",Component:_E,Source:kE,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"shaded"})," property can be added for shaded buttons."]})}),TE=Object.freeze(Object.defineProperty({__proto__:null,default:n0},Symbol.toStringTag,{value:"Module"})),EE=()=>o.jsxs("div",{className:"flex middle wrap gap-4",children:[o.jsx(M,{text:"Shadow 1",color:"indigo",outline:!0,shadow:!0}),o.jsx(M,{text:"Shadow 2",color:"violet",outline:!0,shadow:2}),o.jsx(M,{text:"Shadow 3",color:"purple",outline:!0,shadow:3}),o.jsx(M,{text:"Shadow 4",color:"pink",outline:!0,shadow:4}),o.jsx(M,{text:"Shadow 5",color:"maroon",outline:!0,shadow:5})]}),LE=`import React from 'react'
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
`,r0=()=>o.jsx(R,{code:"shadow",Component:EE,Source:LE,undent:2,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"shadow"})," property can be used to add a shadow to the button ranging from 1 to 5."]})}),NE=Object.freeze(Object.defineProperty({__proto__:null,default:r0},Symbol.toStringTag,{value:"Module"})),RE=()=>o.jsxs("div",{className:"flex middle wrap gap-4",children:[o.jsx(M,{text:"Smallest",size:"smallest"}),o.jsx(M,{text:"Smaller",size:"smaller"}),o.jsx(M,{text:"Small",size:"small"}),o.jsx(M,{text:"Medium",size:"medium"}),o.jsx(M,{text:"Large",size:"large"}),o.jsx(M,{text:"Larger",size:"larger"}),o.jsx(M,{text:"Largest",size:"largest"}),o.jsx(M,{text:"x3",size:"x3"}),o.jsx(M,{text:"x5",size:"x5"}),o.jsx(M,{text:"x7",size:"x7"})]}),DE=`import React from 'react'
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
`,o0=()=>o.jsx(R,{code:"size",Component:RE,Source:DE,undent:2,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"size"})," property can be used to set the button size. This can be one of: ",o.jsx("code",{children:"smallest"}),", ",o.jsx("code",{children:"smaller"}),", ",o.jsx("code",{children:"small"})," ",",",o.jsx("code",{children:"medium"})," (default - same as no explicit size), ",o.jsx("code",{children:"large"})," ",",",o.jsx("code",{children:"larger"}),", ",o.jsx("code",{children:"largest"}),"; or any of the size multipliers:"," ",o.jsx("code",{children:"x2"}),", ",o.jsx("code",{children:"x3"}),", etc., up to ",o.jsx("code",{children:"x10"}),"."]})}),OE=Object.freeze(Object.defineProperty({__proto__:null,default:o0},Symbol.toStringTag,{value:"Module"})),ME=()=>o.jsx(M,{text:"Grey Button"}),AE=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button text="Grey Button"/>
/* END */

export default Component
`,a0=()=>o.jsx(R,{code:"text",Component:ME,Source:AE,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"text"})," property can be used to set the text for the button."]})}),PE=Object.freeze(Object.defineProperty({__proto__:null,default:a0},Symbol.toStringTag,{value:"Module"})),$E=()=>o.jsx(M,{text:"Tooltip",label:"This is a tooltip",tooltip:"top left"}),BE=`import React from 'react'
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
`,s0=()=>o.jsx(R,{code:"tooltip",Component:$E,Source:BE,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"tooltip"})," property can be used to set the",o.jsx("code",{children:"data-tooltip"})," property on the button.  This can be used to indicate the direction of the tooltip, e.g. ",o.jsx("code",{children:"top"}),","," ",o.jsx("code",{children:"right"}),", ",o.jsx("code",{children:"top right"}),", etc. The tooltip content should be defined using the ",o.jsx("code",{children:"label"})," property."]})}),IE=Object.freeze(Object.defineProperty({__proto__:null,default:s0},Symbol.toStringTag,{value:"Module"})),zE=()=>o.jsx(M,{text:"Grey Button",type:"submit"}),FE=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    text="Grey Button"
    type="submit"
  />
/* END */

export default Component
`,l0=()=>o.jsxs(R,{code:"type",Component:zE,Source:FE,undent:2,expand:!0,children:[o.jsxs("p",{children:["The default ",o.jsx("code",{children:"type"})," for a button is set to ",o.jsx("code",{children:"button"}),". In most cases this has no effect.  However, inside the scope of a ",o.jsx("code",{children:"form"})," element, the ",o.jsx("code",{children:"type"})," for a button would usually default to being ",o.jsx("code",{children:"submit"}),".  When clicked, the button would submit the form."]}),o.jsxs("p",{children:["This behaviour usually surprises people (it certainly catches me out from time to time).  Having an explicit default button type prevents this from happening.  When you really do want to add a button to submit a form, you should explicitly set the ",o.jsx("code",{children:"type"})," to"," ",o.jsx("code",{children:"submit"}),".  You can also set it to ",o.jsx("code",{children:"reset"})," to make a reset button for a form."]})]}),UE=Object.freeze(Object.defineProperty({__proto__:null,default:l0},Symbol.toStringTag,{value:"Module"})),HE=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Button"}),o.jsx(zg,{}),o.jsxs(st,{tocName:"button",children:[o.jsx(ue,{title:"Properties"}),o.jsx(a0,{}),o.jsx(Jg,{}),o.jsx(Gg,{}),o.jsx(Zg,{}),o.jsx(Vg,{}),o.jsx(Kg,{}),o.jsx(n0,{}),o.jsx(e0,{}),o.jsx(Ug,{}),o.jsx(Wg,{}),o.jsx(Hg,{}),o.jsx(t0,{}),o.jsx(r0,{}),o.jsx(o0,{}),o.jsx(Yg,{}),o.jsx(Xg,{}),o.jsx(Qg,{}),o.jsx(qg,{}),o.jsx(s0,{}),o.jsx(l0,{}),o.jsx(ue,{title:"Components"}),o.jsx(Fg,{})]})]}),VE=Object.freeze(Object.defineProperty({__proto__:null,default:HE},Symbol.toStringTag,{value:"Module"})),WE=({text:e})=>o.jsx("span",{className:"border pad pad-h-4 mar",children:e}),ZE=()=>o.jsx(eo,{buttons:[{text:"One"},{text:"Two"}],Button:WE}),KE=`import { Buttons } from '@/src/index.jsx'

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
`,i0=()=>o.jsx(R,{code:"Button",Component:ZE,Source:KE,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"Button"})," property (note the capital B) can be used to define a different component for rendering each button."]})}),GE=Object.freeze(Object.defineProperty({__proto__:null,default:i0},Symbol.toStringTag,{value:"Module"})),YE=()=>o.jsxs(eo,{children:[o.jsx(M,{text:"One",outline:!0}),o.jsx(M,{text:"Two",outline:!0})]}),XE=`import { Buttons, Button } from '@/src/index.jsx'

{/* START */}
import React from 'react'
// PRETEND: import { Buttons, Button } from '@abw/badger-react-ui'

const ButtonsExample = () =>
  <Buttons>
    <Button text="One" outline/>
    <Button text="Two" outline/>
  </Buttons>

export default ButtonsExample
`,c0=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"Buttons"})," component can be used to render a connected set of buttons."]}),o.jsx(Ce,{Component:YE,code:XE,expand:!0})]}),QE=Object.freeze(Object.defineProperty({__proto__:null,default:c0},Symbol.toStringTag,{value:"Module"})),qE=()=>o.jsx(o.Fragment,{children:o.jsx(eo,{outline:!0,buttonClass:"blue shadow-1",buttons:[{text:"One"},{text:"Two"}]})}),JE=`import React from 'react'
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
`,u0=()=>o.jsx(R,{code:"buttonClass",Component:qE,Source:JE,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"buttonClass"})," property can be used to add a CSS class to each button. Badger CSS targets the ",o.jsx("code",{children:"button"})," element for styling so you don't need to add any special classes to get the default styling."]})}),eL=Object.freeze(Object.defineProperty({__proto__:null,default:u0},Symbol.toStringTag,{value:"Module"})),tL=()=>o.jsx(o.Fragment,{children:o.jsx(eo,{buttons:[{text:"One",outline:!0},{text:"Two",outline:!0}]})}),nL=`import React from 'react'
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
`,d0=()=>o.jsx(R,{code:"buttons",Component:tL,Source:nL,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"buttons"})," property can be used to define properties for a set of buttons."]})}),rL=Object.freeze(Object.defineProperty({__proto__:null,default:d0},Symbol.toStringTag,{value:"Module"})),oL=()=>o.jsx(o.Fragment,{children:o.jsx(eo,{outline:!0,className:"buttons border pad-2 bgc-90 bgd-10 bdr-2",buttons:[{text:"One"},{text:"Two"}]})}),aL=`import React from 'react'
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
`,p0=()=>o.jsx(R,{code:"className",Component:oL,Source:aL,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"className"})," property can be used to set the CSS class for the buttons container element.  The default value is"," ",o.jsx("code",{children:"buttons"}),".  If you want to use the default styles provided by Badger CSS then you should include ",o.jsx("code",{children:"buttons"})," in the value you provide for ",o.jsx("code",{children:"className"})]})}),sL=Object.freeze(Object.defineProperty({__proto__:null,default:p0},Symbol.toStringTag,{value:"Module"})),lL=()=>o.jsx(o.Fragment,{children:o.jsx(eo,{outline:!0,buttons:[{text:"One"},{text:"Two"},{text:"Three",outline:!1,color:"orange"}]})}),iL=`import React from 'react'
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
`,f0=()=>o.jsx(R,{code:"outline",Component:lL,Source:iL,undent:4,expand:!0,children:o.jsxs("p",{children:["Additional properties passed to the ",o.jsx("code",{children:"Buttons"})," component will be forwarded to each ",o.jsx("code",{children:"Button"})," component.  For example, you can set the ",o.jsx("code",{children:"outline"})," property on the parent",o.jsx("code",{children:"Buttons"})," component so that you don't have to repeat it for each button.  However, individual buttons can override any of these properties."]})}),cL=Object.freeze(Object.defineProperty({__proto__:null,default:f0},Symbol.toStringTag,{value:"Module"})),uL=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Buttons"}),o.jsx(c0,{}),o.jsxs(st,{tocName:"buttons",children:[o.jsx(ue,{title:"Properties"}),o.jsx(d0,{}),o.jsx(f0,{}),o.jsx(p0,{}),o.jsx(u0,{}),o.jsx(ue,{title:"Components"}),o.jsx(i0,{})]})]}),dL=Object.freeze(Object.defineProperty({__proto__:null,default:uL},Symbol.toStringTag,{value:"Module"})),pL=()=>o.jsx(Sj,{text:"I like badgers",onChange:e=>console.log(`Checked: ${e}`)}),fL=`import { CheckboxState } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { CheckboxState } from '@abw/badger-react-ui

const CheckboxStateExample = () =>
  <CheckboxState
    text="I like badgers"
    onChange={checked => console.log(\`Checked: \${checked}\`)}
  />

export default CheckboxStateExample`,h0=()=>o.jsx(R,{code:"CheckboxState",Component:pL,Source:fL,expand:!0,children:o.jsx("div",{children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"CheckboxState"})," function can be used to generate a Checkbox with internal state."]})})}),hL=Object.freeze(Object.defineProperty({__proto__:null,default:h0},Symbol.toStringTag,{value:"Module"})),mL=()=>{const[e,t]=v.useState(!1);return o.jsx(ln,{text:"I like badgers",checked:e,onChange:t})},gL=`import { Checkbox } from '@/src/index.jsx'

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

export default CheckboxExample`,m0=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"Checkbox"})," component renders a checkbox with a label."]}),o.jsx(Ce,{Component:mL,code:gL,expand:!0})]}),xL=Object.freeze(Object.defineProperty({__proto__:null,default:m0},Symbol.toStringTag,{value:"Module"})),vL=()=>{const[e,t]=v.useState(!1);return o.jsx(ln,{border:!0,text:"I like badgers",checked:e,onChange:t})},yL=`import { Checkbox } from '@/src/index.jsx'
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

export default ClassName`,g0=()=>o.jsx(R,{code:"border",Component:vL,Source:yL,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"border"})," property can be used as a short-cut to add the ",o.jsx("code",{children:"border"})," class."]})}),CL=Object.freeze(Object.defineProperty({__proto__:null,default:g0},Symbol.toStringTag,{value:"Module"})),jL=()=>{const[e,t]=v.useState(!1);return o.jsx(ln,{text:"I like badgers",checked:e,onChange:t})},bL=`import { Checkbox } from '@/src/index.jsx'
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

export default CheckedExample`,x0=()=>o.jsx(R,{code:"checked",Component:jL,Source:bL,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"checked"})," property should be passed to indicate if the checkbox is checked (",o.jsx("code",{children:"true"}),") or not (",o.jsx("code",{children:"false"}),")."]})}),SL=Object.freeze(Object.defineProperty({__proto__:null,default:x0},Symbol.toStringTag,{value:"Module"})),wL=()=>{const[e,t]=v.useState(!1);return o.jsx(ln,{checkedText:"I like badgers (well done!)",uncheckedText:"I like badgers (you really should!)",checked:e,onChange:t})},_L=`import { Checkbox } from '@/src/index.jsx'
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

export default CheckedTextExample`,v0=()=>o.jsx(R,{code:"checkedText / uncheckedText",Component:wL,Source:_L,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"checkedText"})," and ",o.jsx("code",{children:"uncheckedText"})," properties can be used to provide different text for the checked and unchecked states."]})}),kL=Object.freeze(Object.defineProperty({__proto__:null,default:v0},Symbol.toStringTag,{value:"Module"})),TL=()=>{const[e,t]=v.useState(!1);return o.jsx(ln,{text:"I like badgers",className:"large border",checked:e,onChange:t})},EL=`import { Checkbox } from '@/src/index.jsx'
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

export default ClassName`,y0=()=>o.jsx(R,{code:"className",Component:TL,Source:EL,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"className"})," property can be used to add a CSS class to the checkbox ",o.jsx("code",{children:"label"})," element."]})}),LL=Object.freeze(Object.defineProperty({__proto__:null,default:y0},Symbol.toStringTag,{value:"Module"})),NL=()=>{const[e,t]=v.useState(!1);return o.jsx(ln,{disabled:!0,text:"I like badgers",checked:e,onChange:t})},RL=`import { Checkbox } from '@/src/index.jsx'
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

export default DisabledExample`,C0=()=>o.jsx(R,{code:"disabled",Component:NL,Source:RL,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"disabled"})," property can be set to disable a checkbox."]})}),DL=Object.freeze(Object.defineProperty({__proto__:null,default:C0},Symbol.toStringTag,{value:"Module"})),OL=()=>{const[e,t]=v.useState(!1);return o.jsx(ln,{text:"I like badgers",checked:e,onChange:t})},ML=`import { Checkbox } from '@/src/index.jsx'
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

export default OnChangeExample`,j0=()=>o.jsx(R,{code:"onChange",Component:OL,Source:ML,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"onChange"})," property should be used to define a function to handle changes in the state."]})}),AL=Object.freeze(Object.defineProperty({__proto__:null,default:j0},Symbol.toStringTag,{value:"Module"})),PL=()=>{const[e,t]=v.useState(!1);return o.jsx(ln,{text:"Badger are the best!",checked:e,onChange:t})},$L=`import { Checkbox } from '@/src/index.jsx'
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

export default TextExample`,b0=()=>o.jsx(R,{code:"text",Component:PL,Source:$L,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"text"})," property should be used to set the text for the checkbox."]})}),BL=Object.freeze(Object.defineProperty({__proto__:null,default:b0},Symbol.toStringTag,{value:"Module"})),IL=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Checkbox"}),o.jsx(m0,{}),o.jsxs(st,{tocName:"checkbox",children:[o.jsx(ue,{title:"Properties"}),o.jsx(b0,{}),o.jsx(x0,{}),o.jsx(v0,{}),o.jsx(j0,{}),o.jsx(y0,{}),o.jsx(g0,{}),o.jsx(C0,{}),o.jsx(ue,{title:"Components"}),o.jsx(h0,{})]})]}),zL=Object.freeze(Object.defineProperty({__proto__:null,default:IL},Symbol.toStringTag,{value:"Module"})),FL=()=>o.jsx(o.Fragment,{children:o.jsx(Sn,{text:"Delete",color:"red",iconRight:"trash",onClick:()=>window.alert("Confirmed!")})}),UL=`import { Confirm } from '@/src/index.jsx'

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

export default ConfirmExample`,S0=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"Confirm"})," component provides an extra safety net for potentially dangerous operations.  When the user click on the button it then prompts them to confirm or cancel the action."]}),o.jsxs("p",{className:"cols-2 stack-desktop",children:["Additional properties not listed below are forwarded onto the initial button.  For example, you can set the ",o.jsx("code",{children:"text"}),","," ",o.jsx("code",{children:"color"}),", add icons, and so on, just like you would for any other button."]}),o.jsx(Ce,{Component:FL,code:UL,expand:!0})]}),HL=Object.freeze(Object.defineProperty({__proto__:null,default:S0},Symbol.toStringTag,{value:"Module"})),VL=()=>o.jsx(Sn,{text:"Delete",color:"red",cancel:{text:"Go Back",color:"yellow",outline:!1,iconLeft:"angle-left"}}),WL=`import React from 'react'
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

export default CancelExample`,w0=()=>o.jsx(R,{code:"cancel",Component:VL,Source:WL,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"cancel"})," property can be used to set properties for the cancel button."]})}),ZL=Object.freeze(Object.defineProperty({__proto__:null,default:w0},Symbol.toStringTag,{value:"Module"})),KL=()=>o.jsx(Sn,{text:"Delete",color:"red",cancelText:"Nah",cancelColor:"blue",cancelIcon:"angle-left"}),GL=`import React from 'react'
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

export default CancelExample`,_0=()=>o.jsx(R,{id:"cancelProps",code:"cancelXXX",Component:KL,Source:GL,undent:2,expand:!0,children:o.jsxs("p",{children:["You can also set individual properties for the cancel button",o.jsx("code",{children:"cancelIcon"}),","," ",o.jsx("code",{children:"cancelText"}),","," ",o.jsx("code",{children:"cancelColor"})," and"," ",o.jsx("code",{children:"cancelClass"}),"."]})}),YL=Object.freeze(Object.defineProperty({__proto__:null,default:_0},Symbol.toStringTag,{value:"Module"})),XL=()=>o.jsx(o.Fragment,{children:o.jsx(Sn,{className:"buttons border pad-2 bgc-90 bgd-10 bdr-2",icon:"trash",color:"red"})}),QL=`import React from 'react'
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
`,k0=()=>o.jsx(R,{code:"className",Component:XL,Source:QL,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"className"})," property can be used to set the CSS class for the buttons container element.  The default value is"," ",o.jsx("code",{children:"buttons"}),".  If you want to use the default styles provided by Badger CSS then you should include ",o.jsx("code",{children:"buttons"})," in the value you provide for ",o.jsx("code",{children:"className"})]})}),qL=Object.freeze(Object.defineProperty({__proto__:null,default:k0},Symbol.toStringTag,{value:"Module"})),JL=()=>o.jsx(Sn,{text:"Click to Delete",color:"red"}),eN=`import React from 'react'
import { Confirm } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Confirm
    text="Click to Delete"
    color="red"
  />
/* END */

export default Component
`,T0=()=>o.jsx(R,{code:"color",Component:JL,Source:eN,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"color"})," property can be used to set the color for the initial button."]})}),tN=Object.freeze(Object.defineProperty({__proto__:null,default:T0},Symbol.toStringTag,{value:"Module"})),nN=()=>o.jsx(Sn,{text:"Delete",color:"red",confirm:{text:"Yep, do it!",color:"green",iconRight:"angle-right"}}),rN=`import React from 'react'
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

export default ConfirmExample`,E0=()=>o.jsx(R,{code:"confirm",Component:nN,Source:rN,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"confirm"})," property can be used to set properties for the confirmation button."]})}),oN=Object.freeze(Object.defineProperty({__proto__:null,default:E0},Symbol.toStringTag,{value:"Module"})),aN=()=>o.jsx(Sn,{text:"Delete",color:"red",confirmText:"Yep",confirmColor:"green",confirmIcon:"trash"}),sN=`import React from 'react'
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

export default ConfirmProps`,L0=()=>o.jsx(R,{id:"confirmProps",code:"confirmXXX",Component:aN,Source:sN,undent:2,expand:!0,children:o.jsxs("p",{children:["You can also set individual properties for the confirm button",o.jsx("code",{children:"confirmIcon"}),","," ",o.jsx("code",{children:"confirmText"}),","," ",o.jsx("code",{children:"confirmColor"})," and"," ",o.jsx("code",{children:"confirmClass"}),"."]})}),lN=Object.freeze(Object.defineProperty({__proto__:null,default:L0},Symbol.toStringTag,{value:"Module"})),iN=()=>o.jsx(Sn,{text:"Click to Delete",color:"red",iconRight:"trash"}),cN=`import React from 'react'
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
`,N0=()=>o.jsx(R,{code:"iconRight",Component:iN,Source:cN,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"iconRight"})," property can be used to add an icon to the right.  Or ",o.jsx("code",{children:"iconLeft"})," can be used to add an icon to the left. Or just an ",o.jsx("code",{children:"icon"})," if you want an icon without any text."]})}),uN=Object.freeze(Object.defineProperty({__proto__:null,default:N0},Symbol.toStringTag,{value:"Module"})),dN=()=>o.jsx(Sn,{text:"Delete",color:"red",onClick:()=>window.alert("Deleted!")}),pN=`import React from 'react'
import { Confirm } from '@/src/index.jsx'

const OnClickExample = () =>
  /* START */
  <Confirm
    text="Delete"
    color="red"
    onClick={() => window.alert('Deleted!')}
  />
  /* END */

export default OnClickExample`,R0=()=>o.jsx(R,{code:"onClick",Component:dN,Source:pN,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"onClick"})," property should be used to define the handler which will be called when the user confirms the action."]})}),fN=Object.freeze(Object.defineProperty({__proto__:null,default:R0},Symbol.toStringTag,{value:"Module"})),hN=()=>o.jsx(Sn,{text:"Click to Delete"}),mN=`import React from 'react'
import { Confirm } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Confirm
    text="Click to Delete"
  />
/* END */

export default Component
`,D0=()=>o.jsx(R,{code:"text",Component:hN,Source:mN,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"text"})," property can be used to set the text for the initial button."]})}),gN=Object.freeze(Object.defineProperty({__proto__:null,default:D0},Symbol.toStringTag,{value:"Module"})),xN=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Confirm"}),o.jsx(S0,{}),o.jsxs(st,{tocName:"confirm",children:[o.jsx(ue,{title:"Properties"}),o.jsx(D0,{}),o.jsx(T0,{}),o.jsx(N0,{}),o.jsx(k0,{}),o.jsx(w0,{}),o.jsx(_0,{}),o.jsx(E0,{}),o.jsx(L0,{}),o.jsx(ue,{title:"Event Handlers"}),o.jsx(R0,{})]})]}),vN=Object.freeze(Object.defineProperty({__proto__:null,default:xN},Symbol.toStringTag,{value:"Module"})),yN=[{name:"Alan",animal:"Anteater",id:10,role:"admin"},{name:"Bobby",animal:"Badger",id:20,role:"admin"},{name:"Brenda",animal:"Badger",id:30,role:"admin"},{name:"Christina",animal:"Cat",id:40,role:"user"},{name:"Derek",animal:"Dog",id:50,role:"user"},{name:"Delia",animal:"Donkey",id:60,role:"admin"},{name:"Edwin",animal:"Elephant",id:70,role:"admin"},{name:"Frank",animal:"Ferret",id:80,role:"user"},{name:"Felicity",animal:"Fox",id:90,role:"admin"},{name:"Gertrude",animal:"Goat",id:11,role:"admin"},{name:"Hector",animal:"Hamster",id:12,role:"admin"},{name:"Ian",animal:"Iguana",id:13,role:"user"},{name:"Julie",animal:"Jellyfish",id:14,role:"user"},{name:"Kevin",animal:"Koala",id:21,role:"user"},{name:"Lionel",animal:"Llama",id:22,role:"user"},{name:"Mary",animal:"Magpie",id:23,role:"user"},{name:"Nerys",animal:"Narwhal",id:24,role:"user"},{name:"Oliver",animal:"Octopus",id:31,role:"user"},{name:"Penny",animal:"Panda",id:32,role:"admin"},{name:"Quentin",animal:"Quail",id:33,role:"admin"},{name:"Roger",animal:"Raccoon",id:41,role:"user"},{name:"Simon",animal:"Stoat",id:42,role:"user"},{name:"Terry",animal:"Tiger",id:43,role:"user"},{name:"Ursula",animal:"Unicorn",id:101,role:"user"},{name:"Violet",animal:"Vole",id:102,role:"user"},{name:"Willy",animal:"Wombat",id:103,role:"user"},{name:"Xerces",animal:"Xenus",id:201,role:"user"},{name:"Yvonne",animal:"Yaz",id:202,role:"user"},{name:"Zebedee",animal:"Zebra",id:203,role:"user"}],CN=()=>o.jsx(s_,{color:"brand",rows:yN,columns:"id name animal role",pager:{size:"small"}}),jN=`import { Datatable } from '@/src/index.jsx'

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

export default DatatableExample`,O0=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"Datatable"})," component can be used to display, sort, filter and page sets of data."]}),o.jsx(Ce,{Component:CN,code:jN})]}),bN=Object.freeze(Object.defineProperty({__proto__:null,default:O0},Symbol.toStringTag,{value:"Module"})),SN=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Datatable"}),o.jsx(O0,{}),o.jsx(st,{tocName:"datatable",children:o.jsx(ue,{title:"Properties"})})]}),wN=Object.freeze(Object.defineProperty({__proto__:null,default:SN},Symbol.toStringTag,{value:"Module"})),_N=()=>o.jsx(Xe,{summary:"Click to reveal",children:"This is the content that is revealed."}),kN=`import { Details } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Details } from '@abw/badger-react-ui

const DetailsExample = () =>
  <Details summary="Click to reveal">
    This is the content that is revealed.
  </Details>

export default DetailsExample`,M0=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"Details"})," component displays a summary with revealable content using the native HTML ",o.jsx("code",{children:"details"})," element."]}),o.jsx(Ce,{Component:_N,code:kN})]}),TN=Object.freeze(Object.defineProperty({__proto__:null,default:M0},Symbol.toStringTag,{value:"Module"})),EN=()=>o.jsxs("div",{className:"grid-1 gap-4",children:[o.jsx(Xe,{summary:"Bordered",border:!0,children:"This is the content that is revealed."}),o.jsx(Xe,{summary:"Bordered and Lined",border:!0,lined:!0,children:"This is the content that is revealed."}),o.jsx(Xe,{summary:"Wide Border",border:3,lined:!0,children:"This is the content that is revealed."})]}),LN=`import React from 'react'
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

export default DetailsExample`,A0=()=>o.jsx(R,{code:"border",Component:EN,Source:LN,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"border"})," property can be used to add a CSS class to add a border around the component.  By itself it will add a one pixel border.  You can also set it to an integer (in pixels) for a wider border.  The same border width will also be applied to the line separating the summary and content when the ",o.jsx("code",{children:"lined"})," ","property is used."]})}),NN=Object.freeze(Object.defineProperty({__proto__:null,default:A0},Symbol.toStringTag,{value:"Module"})),RN=()=>o.jsxs("div",{className:"grid-1 gap-4",children:[o.jsx(Xe,{summary:"Blue Border",color:"blue",border:!0,lined:!0,children:"This is the content that is revealed."}),o.jsx(Xe,{summary:"Blue Shaded",color:"blue",shaded:!0,lined:!0,border:!0,children:"This is the content that is revealed."})]}),DN=`import React from 'react'
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

export default DetailsExample`,P0=()=>o.jsx(R,{code:"color",Component:RN,Source:DN,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"color"})," property can be used to set the color range. It is most commonly used in conjunction with the ",o.jsx("code",{children:"border"}),","," ",o.jsx("code",{children:"lined"})," and ",o.jsx("code",{children:"shaded"})," properties."]})}),ON=Object.freeze(Object.defineProperty({__proto__:null,default:P0},Symbol.toStringTag,{value:"Module"})),MN=()=>o.jsx("div",{className:"grid-1 gap-4",children:o.jsx(Xe,{summary:"This is the summary",content:"This is the content that is revealed."})}),AN=`import React from 'react'
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

export default DetailsExample`,$0=()=>o.jsx(R,{code:"content",Component:MN,Source:AN,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"content"})," property can be used as a short-cut to set the body content for simple cases."]})}),PN=Object.freeze(Object.defineProperty({__proto__:null,default:$0},Symbol.toStringTag,{value:"Module"})),$N=()=>o.jsx(Xe,{summary:"Lined Details",lined:!0,children:"This is the content that is revealed."}),BN=`import React from 'react'
import { Details } from '@/src/index.jsx'

const DetailsExample = () =>
  /* START */
  <Details summary="Lined Details" lined>
    This is the content that is revealed.
  </Details>
  /* END */

export default DetailsExample`,B0=()=>o.jsx(R,{code:"lined",Component:$N,Source:BN,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"lined"})," property can be used to add a CSS class to add a line between the summary and content."]})}),IN=Object.freeze(Object.defineProperty({__proto__:null,default:B0},Symbol.toStringTag,{value:"Module"})),zN=()=>o.jsx("div",{className:"grid-1 gap-4",children:o.jsx(Xe,{summary:"This is the summary",open:!0,children:"This is the content that is revealed."})}),FN=`import React from 'react'
import { Details } from '@/src/index.jsx'

const DetailsExample = () =>
  <div className="grid-1 gap-4">
    {/* START */}
    <Details summary="This is the summary" open>
      This is the content that is revealed.
    </Details>
    {/* END */}
  </div>

export default DetailsExample`,I0=()=>o.jsx(R,{code:"open",Component:zN,Source:FN,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"open"})," property can be set to make the details initially open."]})}),UN=Object.freeze(Object.defineProperty({__proto__:null,default:I0},Symbol.toStringTag,{value:"Module"})),HN=()=>o.jsxs("div",{className:"grid-1 gap-4",children:[o.jsx(Xe,{summary:"Border Radius",border:!0,lined:!0,radius:2,children:"This is the content that is revealed."}),o.jsx(Xe,{summary:"Border Radius",border:!0,lined:!0,radius:4,children:"This is the content that is revealed."})]}),VN=`import React from 'react'
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

export default DetailsExample`,z0=()=>o.jsx(R,{code:"radius",Component:HN,Source:VN,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"radius"})," property can be used to set the border radius. It should be an integer in units of 0.25rem."]})}),WN=Object.freeze(Object.defineProperty({__proto__:null,default:z0},Symbol.toStringTag,{value:"Module"})),ZN=()=>o.jsxs("div",{className:"grid-1 gap-4",children:[o.jsx(Xe,{summary:"Shaded",shaded:!0,children:"This is the content that is revealed."}),o.jsx(Xe,{summary:"Shaded and Border",border:!0,shaded:!0,children:"This is the content that is revealed."}),o.jsx(Xe,{summary:"Shaded, Lined and Border",border:!0,shaded:!0,lined:!0,children:"This is the content that is revealed."})]}),KN=`import React from 'react'
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

export default DetailsExample`,F0=()=>o.jsx(R,{code:"shaded",Component:ZN,Source:KN,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"shaded"})," property can be used to add shading."]})}),GN=Object.freeze(Object.defineProperty({__proto__:null,default:F0},Symbol.toStringTag,{value:"Module"})),YN=()=>o.jsxs("div",{className:"grid-1 gap-4",children:[o.jsx(Xe,{summary:"Shadow 1",border:!0,shaded:!0,shadow:1,children:"This is the content that is revealed."}),o.jsx(Xe,{summary:"Shadow 3",border:!0,shaded:!0,shadow:3,children:"This is the content that is revealed."}),o.jsx(Xe,{summary:"Shadow 5",border:!0,shaded:!0,shadow:5,children:"This is the content that is revealed."})]}),XN=`import React from 'react'
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

export default DetailsExample`,U0=()=>o.jsx(R,{code:"shadow",Component:YN,Source:XN,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"shadow"})," property can be used to add a drop shadow. This can be any integer from 1 to 5."]})}),QN=Object.freeze(Object.defineProperty({__proto__:null,default:U0},Symbol.toStringTag,{value:"Module"})),qN=()=>o.jsxs("div",{className:"grid-1 gap-4",children:[o.jsx(Xe,{summary:"This is the summary",children:"This is the content that is revealed."}),o.jsx(Xe,{border:!0,lined:!0,summary:o.jsxs("div",{className:"wide flex space middle pad-r-2",children:[o.jsx("div",{children:"Control Panel"}),o.jsx(J,{name:"cog"})]}),children:"This is the content that is revealed."})]}),JN=`import React from 'react'
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

export default DetailsExample`,H0=()=>o.jsx(R,{code:"summary",Component:qN,Source:JN,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"summary"})," property is used to set the summary text. It can be a text string or any JSX content."]})}),eR=Object.freeze(Object.defineProperty({__proto__:null,default:H0},Symbol.toStringTag,{value:"Module"})),tR=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Details"}),o.jsx(M0,{}),o.jsxs(st,{tocName:"details",children:[o.jsx(ue,{title:"Properties"}),o.jsx(H0,{}),o.jsx($0,{}),o.jsx(I0,{}),o.jsx(B0,{}),o.jsx(A0,{}),o.jsx(z0,{}),o.jsx(F0,{}),o.jsx(U0,{}),o.jsx(P0,{}),o.jsx(ue,{title:"CSS Classes"}),o.jsxs(Z,{code:"className",children:["Set a CSS class for the ",o.jsx("code",{children:"details"})," container element."]}),o.jsxs(Z,{code:"summaryClass",children:["Set a CSS class for the ",o.jsx("code",{children:"summary"})," element."]}),o.jsxs(Z,{code:"contentClass",children:["Set a CSS class for the content ",o.jsx("code",{children:"div"})," element."]}),o.jsx(ue,{title:"Components"}),o.jsx(Z,{code:"Summary",id:"Summary-component",children:"Renders the summary element."}),o.jsx(Z,{code:"Content",id:"Content=component",children:"Renders the content."})]})]}),nR=Object.freeze(Object.defineProperty({__proto__:null,default:tR},Symbol.toStringTag,{value:"Module"})),rR=()=>o.jsx(Sr,{text:"Dropdown Menu",iconRight:"angle-down",options:["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger","Colin Camel","David Donkey","Eddie Elephant","Franky Ferret","Gina Goat","Helen Horse","Ian Iguana","Juliet Jackdaw","Kevin Kangaroo","Linda Llama","Mike Monkey"]}),oR=`import { DropdownMenu } from '@/src/index.jsx'

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

export default DropdownExample`;/**
 * @remix-run/router v1.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fe(){return Fe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Fe.apply(this,arguments)}var Ue;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Ue||(Ue={}));const nh="popstate";function aR(e){e===void 0&&(e={});function t(r,a){let{pathname:s,search:l,hash:i}=r.location;return ds("",{pathname:s,search:l,hash:i},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(r,a){return typeof a=="string"?a:Kr(a)}return lR(t,n,null,e)}function ie(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Zr(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function sR(){return Math.random().toString(36).substr(2,8)}function rh(e,t){return{usr:e.state,key:e.key,idx:t}}function ds(e,t,n,r){return n===void 0&&(n=null),Fe({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Hn(t):t,{state:n,key:t&&t.key||r||sR()})}function Kr(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Hn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function lR(e,t,n,r){r===void 0&&(r={});let{window:a=document.defaultView,v5Compat:s=!1}=r,l=a.history,i=Ue.Pop,c=null,u=d();u==null&&(u=0,l.replaceState(Fe({},l.state,{idx:u}),""));function d(){return(l.state||{idx:null}).idx}function p(){i=Ue.Pop;let _=d(),x=_==null?null:_-u;u=_,c&&c({action:i,location:j.location,delta:x})}function m(_,x){i=Ue.Push;let f=ds(j.location,_,x);n&&n(f,_),u=d()+1;let h=rh(f,u),C=j.createHref(f);try{l.pushState(h,"",C)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;a.location.assign(C)}s&&c&&c({action:i,location:j.location,delta:1})}function y(_,x){i=Ue.Replace;let f=ds(j.location,_,x);n&&n(f,_),u=d();let h=rh(f,u),C=j.createHref(f);l.replaceState(h,"",C),s&&c&&c({action:i,location:j.location,delta:0})}function b(_){let x=a.location.origin!=="null"?a.location.origin:a.location.href,f=typeof _=="string"?_:Kr(_);return ie(x,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,x)}let j={get action(){return i},get location(){return e(a,l)},listen(_){if(c)throw new Error("A history only accepts one active listener");return a.addEventListener(nh,p),c=_,()=>{a.removeEventListener(nh,p),c=null}},createHref(_){return t(a,_)},createURL:b,encodeLocation(_){let x=b(_);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:m,replace:y,go(_){return l.go(_)}};return j}var Ie;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ie||(Ie={}));const iR=new Set(["lazy","caseSensitive","path","id","index","children"]);function cR(e){return e.index===!0}function Qu(e,t,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((a,s)=>{let l=[...n,s],i=typeof a.id=="string"?a.id:l.join("-");if(ie(a.index!==!0||!a.children,"Cannot specify children on an index route"),ie(!r[i],'Found a route id collision on id "'+i+`".  Route id's must be globally unique within Data Router usages`),cR(a)){let c=Fe({},a,t(a),{id:i});return r[i]=c,c}else{let c=Fe({},a,t(a),{id:i,children:void 0});return r[i]=c,a.children&&(c.children=Qu(a.children,t,l,r)),c}})}function So(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Hn(t):t,a=gr(r.pathname||"/",n);if(a==null)return null;let s=V0(e);dR(s);let l=null;for(let i=0;l==null&&i<s.length;++i)l=CR(s[i],bR(a));return l}function uR(e,t){let{route:n,pathname:r,params:a}=e;return{id:n.id,pathname:r,params:a,data:t[n.id],handle:n.handle}}function V0(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let a=(s,l,i)=>{let c={relativePath:i===void 0?s.path||"":i,caseSensitive:s.caseSensitive===!0,childrenIndex:l,route:s};c.relativePath.startsWith("/")&&(ie(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=Rn([r,c.relativePath]),d=n.concat(c);s.children&&s.children.length>0&&(ie(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),V0(s.children,t,d,u)),!(s.path==null&&!s.index)&&t.push({path:u,score:vR(u,s.index),routesMeta:d})};return e.forEach((s,l)=>{var i;if(s.path===""||!((i=s.path)!=null&&i.includes("?")))a(s,l);else for(let c of W0(s.path))a(s,l,c)}),t}function W0(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,a=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return a?[s,""]:[s];let l=W0(r.join("/")),i=[];return i.push(...l.map(c=>c===""?s:[s,c].join("/"))),a&&i.push(...l),i.map(c=>e.startsWith("/")&&c===""?"/":c)}function dR(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:yR(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const pR=/^:\w+$/,fR=3,hR=2,mR=1,gR=10,xR=-2,oh=e=>e==="*";function vR(e,t){let n=e.split("/"),r=n.length;return n.some(oh)&&(r+=xR),t&&(r+=hR),n.filter(a=>!oh(a)).reduce((a,s)=>a+(pR.test(s)?fR:s===""?mR:gR),r)}function yR(e,t){return e.length===t.length&&e.slice(0,-1).every((r,a)=>r===t[a])?e[e.length-1]-t[t.length-1]:0}function CR(e,t){let{routesMeta:n}=e,r={},a="/",s=[];for(let l=0;l<n.length;++l){let i=n[l],c=l===n.length-1,u=a==="/"?t:t.slice(a.length)||"/",d=qu({path:i.relativePath,caseSensitive:i.caseSensitive,end:c},u);if(!d)return null;Object.assign(r,d.params);let p=i.route;s.push({params:r,pathname:Rn([a,d.pathname]),pathnameBase:kR(Rn([a,d.pathnameBase])),route:p}),d.pathnameBase!=="/"&&(a=Rn([a,d.pathnameBase]))}return s}function qu(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=jR(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let s=a[0],l=s.replace(/(.)\/+$/,"$1"),i=a.slice(1);return{params:r.reduce((u,d,p)=>{let{paramName:m,isOptional:y}=d;if(m==="*"){let j=i[p]||"";l=s.slice(0,s.length-j.length).replace(/(.)\/+$/,"$1")}const b=i[p];return y&&!b?u[m]=void 0:u[m]=SR(b||"",m),u},{}),pathname:s,pathnameBase:l,pattern:e}}function jR(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Zr(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(l,i,c)=>(r.push({paramName:i,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),r]}function bR(e){try{return decodeURI(e)}catch(t){return Zr(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function SR(e,t){try{return decodeURIComponent(e)}catch(n){return Zr(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function gr(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function wR(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:a=""}=typeof e=="string"?Hn(e):e;return{pathname:n?n.startsWith("/")?n:_R(n,t):t,search:TR(r),hash:ER(a)}}function _R(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function zc(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Z0(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Hp(e,t){let n=Z0(e);return t?n.map((r,a)=>a===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Vp(e,t,n,r){r===void 0&&(r=!1);let a;typeof e=="string"?a=Hn(e):(a=Fe({},e),ie(!a.pathname||!a.pathname.includes("?"),zc("?","pathname","search",a)),ie(!a.pathname||!a.pathname.includes("#"),zc("#","pathname","hash",a)),ie(!a.search||!a.search.includes("#"),zc("#","search","hash",a)));let s=e===""||a.pathname==="",l=s?"/":a.pathname,i;if(l==null)i=n;else{let p=t.length-1;if(!r&&l.startsWith("..")){let m=l.split("/");for(;m[0]==="..";)m.shift(),p-=1;a.pathname=m.join("/")}i=p>=0?t[p]:"/"}let c=wR(a,i),u=l&&l!=="/"&&l.endsWith("/"),d=(s||l===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const Rn=e=>e.join("/").replace(/\/\/+/g,"/"),kR=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),TR=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,ER=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class Wp{constructor(t,n,r,a){a===void 0&&(a=!1),this.status=t,this.statusText=n||"",this.internal=a,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function K0(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const G0=["post","put","patch","delete"],LR=new Set(G0),NR=["get",...G0],RR=new Set(NR),DR=new Set([301,302,303,307,308]),OR=new Set([307,308]),Fc={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},MR={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},da={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Y0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,AR=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),X0="remix-router-transitions";function PR(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",r=!n;ie(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let a;if(e.mapRouteProperties)a=e.mapRouteProperties;else if(e.detectErrorBoundary){let k=e.detectErrorBoundary;a=L=>({hasErrorBoundary:k(L)})}else a=AR;let s={},l=Qu(e.routes,a,void 0,s),i,c=e.basename||"/",u=Fe({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1},e.future),d=null,p=new Set,m=null,y=null,b=null,j=e.hydrationData!=null,_=So(l,e.history.location,c),x=null;if(_==null){let k=$t(404,{pathname:e.history.location.pathname}),{matches:L,route:N}=ph(l);_=L,x={[N.id]:k}}let f,h=_.some(k=>k.route.lazy),C=_.some(k=>k.route.loader);if(h)f=!1;else if(!C)f=!0;else if(u.v7_partialHydration){let k=e.hydrationData?e.hydrationData.loaderData:null,L=e.hydrationData?e.hydrationData.errors:null;f=_.every(N=>N.route.loader&&N.route.loader.hydrate!==!0&&(k&&k[N.route.id]!==void 0||L&&L[N.route.id]!==void 0))}else f=e.hydrationData!=null;let S,g={historyAction:e.history.action,location:e.history.location,matches:_,initialized:f,navigation:Fc,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||x,fetchers:new Map,blockers:new Map},w=Ue.Pop,T=!1,E,D=!1,P=new Map,G=null,Q=!1,Y=!1,ne=[],oe=[],H=new Map,O=0,B=-1,I=new Map,U=new Set,V=new Map,je=new Map,se=new Set,ve=new Map,ae=new Map,Ee=!1;function lt(){if(d=e.history.listen(k=>{let{action:L,location:N,delta:$}=k;if(Ee){Ee=!1;return}Zr(ae.size===0||$!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let z=Us({currentLocation:g.location,nextLocation:N,historyAction:L});if(z&&$!=null){Ee=!0,e.history.go($*-1),Lr(z,{state:"blocked",location:N,proceed(){Lr(z,{state:"proceeding",proceed:void 0,reset:void 0,location:N}),e.history.go($)},reset(){let te=new Map(g.blockers);te.set(z,da),Le({blockers:te})}});return}return jt(L,N)}),n){KR(t,P);let k=()=>GR(t,P);t.addEventListener("pagehide",k),G=()=>t.removeEventListener("pagehide",k)}return g.initialized||jt(Ue.Pop,g.location,{initialHydration:!0}),S}function Ct(){d&&d(),G&&G(),p.clear(),E&&E.abort(),g.fetchers.forEach((k,L)=>Xt(L)),g.blockers.forEach((k,L)=>Fs(L))}function pe(k){return p.add(k),()=>p.delete(k)}function Le(k,L){L===void 0&&(L={}),g=Fe({},g,k);let N=[],$=[];u.v7_fetcherPersist&&g.fetchers.forEach((z,te)=>{z.state==="idle"&&(se.has(te)?$.push(te):N.push(te))}),[...p].forEach(z=>z(g,{deletedFetchers:$,unstable_viewTransitionOpts:L.viewTransitionOpts,unstable_flushSync:L.flushSync===!0})),u.v7_fetcherPersist&&(N.forEach(z=>g.fetchers.delete(z)),$.forEach(z=>Xt(z)))}function Qe(k,L,N){var $,z;let{flushSync:te}=N===void 0?{}:N,K=g.actionData!=null&&g.navigation.formMethod!=null&&tn(g.navigation.formMethod)&&g.navigation.state==="loading"&&(($=k.state)==null?void 0:$._isRedirect)!==!0,X;L.actionData?Object.keys(L.actionData).length>0?X=L.actionData:X=null:K?X=g.actionData:X=null;let W=L.loaderData?dh(g.loaderData,L.loaderData,L.matches||[],L.errors):g.loaderData,le=g.blockers;le.size>0&&(le=new Map(le),le.forEach((ge,Oe)=>le.set(Oe,da)));let De=T===!0||g.navigation.formMethod!=null&&tn(g.navigation.formMethod)&&((z=k.state)==null?void 0:z._isRedirect)!==!0;i&&(l=i,i=void 0),Q||w===Ue.Pop||(w===Ue.Push?e.history.push(k,k.state):w===Ue.Replace&&e.history.replace(k,k.state));let re;if(w===Ue.Pop){let ge=P.get(g.location.pathname);ge&&ge.has(k.pathname)?re={currentLocation:g.location,nextLocation:k}:P.has(k.pathname)&&(re={currentLocation:k,nextLocation:g.location})}else if(D){let ge=P.get(g.location.pathname);ge?ge.add(k.pathname):(ge=new Set([k.pathname]),P.set(g.location.pathname,ge)),re={currentLocation:g.location,nextLocation:k}}Le(Fe({},L,{actionData:X,loaderData:W,historyAction:w,location:k,initialized:!0,navigation:Fc,revalidation:"idle",restoreScrollPosition:Ve(k,L.matches||g.matches),preventScrollReset:De,blockers:le}),{viewTransitionOpts:re,flushSync:te===!0}),w=Ue.Pop,T=!1,D=!1,Q=!1,Y=!1,ne=[],oe=[]}async function Lt(k,L){if(typeof k=="number"){e.history.go(k);return}let N=Ju(g.location,g.matches,c,u.v7_prependBasename,k,u.v7_relativeSplatPath,L==null?void 0:L.fromRouteId,L==null?void 0:L.relative),{path:$,submission:z,error:te}=ah(u.v7_normalizeFormMethod,!1,N,L),K=g.location,X=ds(g.location,$,L&&L.state);X=Fe({},X,e.history.encodeLocation(X));let W=L&&L.replace!=null?L.replace:void 0,le=Ue.Push;W===!0?le=Ue.Replace:W===!1||z!=null&&tn(z.formMethod)&&z.formAction===g.location.pathname+g.location.search&&(le=Ue.Replace);let De=L&&"preventScrollReset"in L?L.preventScrollReset===!0:void 0,re=(L&&L.unstable_flushSync)===!0,ge=Us({currentLocation:K,nextLocation:X,historyAction:le});if(ge){Lr(ge,{state:"blocked",location:X,proceed(){Lr(ge,{state:"proceeding",proceed:void 0,reset:void 0,location:X}),Lt(k,L)},reset(){let Oe=new Map(g.blockers);Oe.set(ge,da),Le({blockers:Oe})}});return}return await jt(le,X,{submission:z,pendingError:te,preventScrollReset:De,replace:L&&L.replace,enableViewTransition:L&&L.unstable_viewTransition,flushSync:re})}function Gt(){if(to(),Le({revalidation:"loading"}),g.navigation.state!=="submitting"){if(g.navigation.state==="idle"){jt(g.historyAction,g.location,{startUninterruptedRevalidation:!0});return}jt(w||g.historyAction,g.navigation.location,{overrideNavigation:g.navigation})}}async function jt(k,L,N){E&&E.abort(),E=null,w=k,Q=(N&&N.startUninterruptedRevalidation)===!0,qi(g.location,g.matches),T=(N&&N.preventScrollReset)===!0,D=(N&&N.enableViewTransition)===!0;let $=i||l,z=N&&N.overrideNavigation,te=So($,L,c),K=(N&&N.flushSync)===!0;if(!te){let Oe=$t(404,{pathname:L.pathname}),{matches:it,route:qe}=ph($);no(),Qe(L,{matches:it,loaderData:{},errors:{[qe.id]:Oe}},{flushSync:K});return}if(g.initialized&&!Y&&FR(g.location,L)&&!(N&&N.submission&&tn(N.submission.formMethod))){Qe(L,{matches:te},{flushSync:K});return}E=new AbortController;let X=fa(e.history,L,E.signal,N&&N.submission),W,le;if(N&&N.pendingError)le={[Ua(te).route.id]:N.pendingError};else if(N&&N.submission&&tn(N.submission.formMethod)){let Oe=await Vn(X,L,N.submission,te,{replace:N.replace,flushSync:K});if(Oe.shortCircuited)return;W=Oe.pendingActionData,le=Oe.pendingActionError,z=Uc(L,N.submission),K=!1,X=new Request(X.url,{signal:X.signal})}let{shortCircuited:De,loaderData:re,errors:ge}=await Bs(X,L,te,z,N&&N.submission,N&&N.fetcherSubmission,N&&N.replace,N&&N.initialHydration===!0,K,W,le);De||(E=null,Qe(L,Fe({matches:te},W?{actionData:W}:{},{loaderData:re,errors:ge})))}async function Vn(k,L,N,$,z){z===void 0&&(z={}),to();let te=WR(L,N);Le({navigation:te},{flushSync:z.flushSync===!0});let K,X=td($,L);if(!X.route.action&&!X.route.lazy)K={type:Ie.error,error:$t(405,{method:k.method,pathname:L.pathname,routeId:X.route.id})};else if(K=await pa("action",k,X,$,s,a,c,u.v7_relativeSplatPath),k.signal.aborted)return{shortCircuited:!0};if(Br(K)){let W;return z&&z.replace!=null?W=z.replace:W=K.location===g.location.pathname+g.location.search,await pn(g,K,{submission:N,replace:W}),{shortCircuited:!0}}if(wo(K)){let W=Ua($,X.route.id);return(z&&z.replace)!==!0&&(w=Ue.Push),{pendingActionData:{},pendingActionError:{[W.route.id]:K.error}}}if($r(K))throw $t(400,{type:"defer-action"});return{pendingActionData:{[X.route.id]:K.data}}}async function Bs(k,L,N,$,z,te,K,X,W,le,De){let re=$||Uc(L,z),ge=z||te||mh(re),Oe=i||l,[it,qe]=sh(e.history,g,N,ge,L,u.v7_partialHydration&&X===!0,Y,ne,oe,se,V,U,Oe,c,le,De);if(no(be=>!(N&&N.some(Ne=>Ne.route.id===be))||it&&it.some(Ne=>Ne.route.id===be)),B=++O,it.length===0&&qe.length===0){let be=Qt();return Qe(L,Fe({matches:N,loaderData:{},errors:De||null},le?{actionData:le}:{},be?{fetchers:new Map(g.fetchers)}:{}),{flushSync:W}),{shortCircuited:!0}}if(!Q&&(!u.v7_partialHydration||!X)){qe.forEach(Ne=>{let fn=g.fetchers.get(Ne.key),Ws=ha(void 0,fn?fn.data:void 0);g.fetchers.set(Ne.key,Ws)});let be=le||g.actionData;Le(Fe({navigation:re},be?Object.keys(be).length===0?{actionData:null}:{actionData:be}:{},qe.length>0?{fetchers:new Map(g.fetchers)}:{}),{flushSync:W})}qe.forEach(be=>{H.has(be.key)&&bt(be.key),be.controller&&H.set(be.key,be.controller)});let ro=()=>qe.forEach(be=>bt(be.key));E&&E.signal.addEventListener("abort",ro);let{results:Ji,loaderResults:oo,fetcherResults:Zn}=await Tr(g.matches,N,it,qe,k);if(k.signal.aborted)return{shortCircuited:!0};E&&E.signal.removeEventListener("abort",ro),qe.forEach(be=>H.delete(be.key));let Nr=fh(Ji);if(Nr){if(Nr.idx>=it.length){let be=qe[Nr.idx-it.length].key;U.add(be)}return await pn(g,Nr.result,{replace:K}),{shortCircuited:!0}}let{loaderData:ec,errors:tc}=uh(g,N,it,oo,De,qe,Zn,ve);ve.forEach((be,Ne)=>{be.subscribe(fn=>{(fn||be.done)&&ve.delete(Ne)})});let nc=Qt(),ao=ea(B),Vs=nc||ao||qe.length>0;return Fe({loaderData:ec,errors:tc},Vs?{fetchers:new Map(g.fetchers)}:{})}function Is(k,L,N,$){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");H.has(k)&&bt(k);let z=($&&$.unstable_flushSync)===!0,te=i||l,K=Ju(g.location,g.matches,c,u.v7_prependBasename,N,u.v7_relativeSplatPath,L,$==null?void 0:$.relative),X=So(te,K,c);if(!X){Er(k,L,$t(404,{pathname:K}),{flushSync:z});return}let{path:W,submission:le,error:De}=ah(u.v7_normalizeFormMethod,!0,K,$);if(De){Er(k,L,De,{flushSync:z});return}let re=td(X,W);if(T=($&&$.preventScrollReset)===!0,le&&tn(le.formMethod)){qo(k,L,W,re,X,z,le);return}V.set(k,{routeId:L,path:W}),dn(k,L,W,re,X,z,le)}async function qo(k,L,N,$,z,te,K){if(to(),V.delete(k),!$.route.action&&!$.route.lazy){let Ne=$t(405,{method:K.formMethod,pathname:N,routeId:L});Er(k,L,Ne,{flushSync:te});return}let X=g.fetchers.get(k);Yt(k,ZR(K,X),{flushSync:te});let W=new AbortController,le=fa(e.history,N,W.signal,K);H.set(k,W);let De=O,re=await pa("action",le,$,z,s,a,c,u.v7_relativeSplatPath);if(le.signal.aborted){H.get(k)===W&&H.delete(k);return}if(u.v7_fetcherPersist&&se.has(k)){if(Br(re)||wo(re)){Yt(k,Yn(void 0));return}}else{if(Br(re))if(H.delete(k),B>De){Yt(k,Yn(void 0));return}else return U.add(k),Yt(k,ha(K)),pn(g,re,{fetcherSubmission:K});if(wo(re)){Er(k,L,re.error);return}}if($r(re))throw $t(400,{type:"defer-action"});let ge=g.navigation.location||g.location,Oe=fa(e.history,ge,W.signal),it=i||l,qe=g.navigation.state!=="idle"?So(it,g.navigation.location,c):g.matches;ie(qe,"Didn't find any matches after fetcher action");let ro=++O;I.set(k,ro);let Ji=ha(K,re.data);g.fetchers.set(k,Ji);let[oo,Zn]=sh(e.history,g,qe,K,ge,!1,Y,ne,oe,se,V,U,it,c,{[$.route.id]:re.data},void 0);Zn.filter(Ne=>Ne.key!==k).forEach(Ne=>{let fn=Ne.key,Ws=g.fetchers.get(fn),vx=ha(void 0,Ws?Ws.data:void 0);g.fetchers.set(fn,vx),H.has(fn)&&bt(fn),Ne.controller&&H.set(fn,Ne.controller)}),Le({fetchers:new Map(g.fetchers)});let Nr=()=>Zn.forEach(Ne=>bt(Ne.key));W.signal.addEventListener("abort",Nr);let{results:ec,loaderResults:tc,fetcherResults:nc}=await Tr(g.matches,qe,oo,Zn,Oe);if(W.signal.aborted)return;W.signal.removeEventListener("abort",Nr),I.delete(k),H.delete(k),Zn.forEach(Ne=>H.delete(Ne.key));let ao=fh(ec);if(ao){if(ao.idx>=oo.length){let Ne=Zn[ao.idx-oo.length].key;U.add(Ne)}return pn(g,ao.result)}let{loaderData:Vs,errors:be}=uh(g,g.matches,oo,tc,void 0,Zn,nc,ve);if(g.fetchers.has(k)){let Ne=Yn(re.data);g.fetchers.set(k,Ne)}ea(ro),g.navigation.state==="loading"&&ro>B?(ie(w,"Expected pending action"),E&&E.abort(),Qe(g.navigation.location,{matches:qe,loaderData:Vs,errors:be,fetchers:new Map(g.fetchers)})):(Le({errors:be,loaderData:dh(g.loaderData,Vs,qe,be),fetchers:new Map(g.fetchers)}),Y=!1)}async function dn(k,L,N,$,z,te,K){let X=g.fetchers.get(k);Yt(k,ha(K,X?X.data:void 0),{flushSync:te});let W=new AbortController,le=fa(e.history,N,W.signal);H.set(k,W);let De=O,re=await pa("loader",le,$,z,s,a,c,u.v7_relativeSplatPath);if($r(re)&&(re=await J0(re,le.signal,!0)||re),H.get(k)===W&&H.delete(k),!le.signal.aborted){if(se.has(k)){Yt(k,Yn(void 0));return}if(Br(re))if(B>De){Yt(k,Yn(void 0));return}else{U.add(k),await pn(g,re);return}if(wo(re)){Er(k,L,re.error);return}ie(!$r(re),"Unhandled fetcher deferred data"),Yt(k,Yn(re.data))}}async function pn(k,L,N){let{submission:$,fetcherSubmission:z,replace:te}=N===void 0?{}:N;L.revalidate&&(Y=!0);let K=ds(k.location,L.location,{_isRedirect:!0});if(ie(K,"Expected a location on the redirect navigation"),n){let ge=!1;if(L.reloadDocument)ge=!0;else if(Y0.test(L.location)){const Oe=e.history.createURL(L.location);ge=Oe.origin!==t.location.origin||gr(Oe.pathname,c)==null}if(ge){te?t.location.replace(L.location):t.location.assign(L.location);return}}E=null;let X=te===!0?Ue.Replace:Ue.Push,{formMethod:W,formAction:le,formEncType:De}=k.navigation;!$&&!z&&W&&le&&De&&($=mh(k.navigation));let re=$||z;if(OR.has(L.status)&&re&&tn(re.formMethod))await jt(X,K,{submission:Fe({},re,{formAction:L.location}),preventScrollReset:T});else{let ge=Uc(K,$);await jt(X,K,{overrideNavigation:ge,fetcherSubmission:z,preventScrollReset:T})}}async function Tr(k,L,N,$,z){let te=await Promise.all([...N.map(W=>pa("loader",z,W,L,s,a,c,u.v7_relativeSplatPath)),...$.map(W=>W.matches&&W.match&&W.controller?pa("loader",fa(e.history,W.path,W.controller.signal),W.match,W.matches,s,a,c,u.v7_relativeSplatPath):{type:Ie.error,error:$t(404,{pathname:W.path})})]),K=te.slice(0,N.length),X=te.slice(N.length);return await Promise.all([hh(k,N,K,K.map(()=>z.signal),!1,g.loaderData),hh(k,$.map(W=>W.match),X,$.map(W=>W.controller?W.controller.signal:null),!0)]),{results:te,loaderResults:K,fetcherResults:X}}function to(){Y=!0,ne.push(...no()),V.forEach((k,L)=>{H.has(L)&&(oe.push(L),bt(L))})}function Yt(k,L,N){N===void 0&&(N={}),g.fetchers.set(k,L),Le({fetchers:new Map(g.fetchers)},{flushSync:(N&&N.flushSync)===!0})}function Er(k,L,N,$){$===void 0&&($={});let z=Ua(g.matches,L);Xt(k),Le({errors:{[z.route.id]:N},fetchers:new Map(g.fetchers)},{flushSync:($&&$.flushSync)===!0})}function zs(k){return u.v7_fetcherPersist&&(je.set(k,(je.get(k)||0)+1),se.has(k)&&se.delete(k)),g.fetchers.get(k)||MR}function Xt(k){let L=g.fetchers.get(k);H.has(k)&&!(L&&L.state==="loading"&&I.has(k))&&bt(k),V.delete(k),I.delete(k),U.delete(k),se.delete(k),g.fetchers.delete(k)}function Wn(k){if(u.v7_fetcherPersist){let L=(je.get(k)||0)-1;L<=0?(je.delete(k),se.add(k)):je.set(k,L)}else Xt(k);Le({fetchers:new Map(g.fetchers)})}function bt(k){let L=H.get(k);ie(L,"Expected fetch controller: "+k),L.abort(),H.delete(k)}function Jo(k){for(let L of k){let N=zs(L),$=Yn(N.data);g.fetchers.set(L,$)}}function Qt(){let k=[],L=!1;for(let N of U){let $=g.fetchers.get(N);ie($,"Expected fetcher: "+N),$.state==="loading"&&(U.delete(N),k.push(N),L=!0)}return Jo(k),L}function ea(k){let L=[];for(let[N,$]of I)if($<k){let z=g.fetchers.get(N);ie(z,"Expected fetcher: "+N),z.state==="loading"&&(bt(N),I.delete(N),L.push(N))}return Jo(L),L.length>0}function Xi(k,L){let N=g.blockers.get(k)||da;return ae.get(k)!==L&&ae.set(k,L),N}function Fs(k){g.blockers.delete(k),ae.delete(k)}function Lr(k,L){let N=g.blockers.get(k)||da;ie(N.state==="unblocked"&&L.state==="blocked"||N.state==="blocked"&&L.state==="blocked"||N.state==="blocked"&&L.state==="proceeding"||N.state==="blocked"&&L.state==="unblocked"||N.state==="proceeding"&&L.state==="unblocked","Invalid blocker state transition: "+N.state+" -> "+L.state);let $=new Map(g.blockers);$.set(k,L),Le({blockers:$})}function Us(k){let{currentLocation:L,nextLocation:N,historyAction:$}=k;if(ae.size===0)return;ae.size>1&&Zr(!1,"A router only supports one blocker at a time");let z=Array.from(ae.entries()),[te,K]=z[z.length-1],X=g.blockers.get(te);if(!(X&&X.state==="proceeding")&&K({currentLocation:L,nextLocation:N,historyAction:$}))return te}function no(k){let L=[];return ve.forEach((N,$)=>{(!k||k($))&&(N.cancel(),L.push($),ve.delete($))}),L}function Qi(k,L,N){if(m=k,b=L,y=N||null,!j&&g.navigation===Fc){j=!0;let $=Ve(g.location,g.matches);$!=null&&Le({restoreScrollPosition:$})}return()=>{m=null,b=null,y=null}}function Hs(k,L){return y&&y(k,L.map($=>uR($,g.loaderData)))||k.key}function qi(k,L){if(m&&b){let N=Hs(k,L);m[N]=b()}}function Ve(k,L){if(m){let N=Hs(k,L),$=m[N];if(typeof $=="number")return $}return null}function ft(k){s={},i=Qu(k,a,void 0,s)}return S={get basename(){return c},get future(){return u},get state(){return g},get routes(){return l},get window(){return t},initialize:lt,subscribe:pe,enableScrollRestoration:Qi,navigate:Lt,fetch:Is,revalidate:Gt,createHref:k=>e.history.createHref(k),encodeLocation:k=>e.history.encodeLocation(k),getFetcher:zs,deleteFetcher:Wn,dispose:Ct,getBlocker:Xi,deleteBlocker:Fs,_internalFetchControllers:H,_internalActiveDeferreds:ve,_internalSetRoutes:ft},S}function $R(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function Ju(e,t,n,r,a,s,l,i){let c,u;if(l){c=[];for(let p of t)if(c.push(p),p.route.id===l){u=p;break}}else c=t,u=t[t.length-1];let d=Vp(a||".",Hp(c,s),gr(e.pathname,n)||e.pathname,i==="path");return a==null&&(d.search=e.search,d.hash=e.hash),(a==null||a===""||a===".")&&u&&u.route.index&&!Zp(d.search)&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(d.pathname=d.pathname==="/"?n:Rn([n,d.pathname])),Kr(d)}function ah(e,t,n,r){if(!r||!$R(r))return{path:n};if(r.formMethod&&!VR(r.formMethod))return{path:n,error:$t(405,{method:r.formMethod})};let a=()=>({path:n,error:$t(400,{type:"invalid-body"})}),s=r.formMethod||"get",l=e?s.toUpperCase():s.toLowerCase(),i=q0(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!tn(l))return a();let m=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((y,b)=>{let[j,_]=b;return""+y+j+"="+_+`
`},""):String(r.body);return{path:n,submission:{formMethod:l,formAction:i,formEncType:r.formEncType,formData:void 0,json:void 0,text:m}}}else if(r.formEncType==="application/json"){if(!tn(l))return a();try{let m=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:l,formAction:i,formEncType:r.formEncType,formData:void 0,json:m,text:void 0}}}catch{return a()}}}ie(typeof FormData=="function","FormData is not available in this environment");let c,u;if(r.formData)c=ed(r.formData),u=r.formData;else if(r.body instanceof FormData)c=ed(r.body),u=r.body;else if(r.body instanceof URLSearchParams)c=r.body,u=ch(c);else if(r.body==null)c=new URLSearchParams,u=new FormData;else try{c=new URLSearchParams(r.body),u=ch(c)}catch{return a()}let d={formMethod:l,formAction:i,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(tn(d.formMethod))return{path:n,submission:d};let p=Hn(n);return t&&p.search&&Zp(p.search)&&c.append("index",""),p.search="?"+c,{path:Kr(p),submission:d}}function BR(e,t){let n=e;if(t){let r=e.findIndex(a=>a.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function sh(e,t,n,r,a,s,l,i,c,u,d,p,m,y,b,j){let _=j?Object.values(j)[0]:b?Object.values(b)[0]:void 0,x=e.createURL(t.location),f=e.createURL(a),h=j?Object.keys(j)[0]:void 0,S=BR(n,h).filter((w,T)=>{let{route:E}=w;if(E.lazy)return!0;if(E.loader==null)return!1;if(s)return E.loader.hydrate?!0:t.loaderData[E.id]===void 0&&(!t.errors||t.errors[E.id]===void 0);if(IR(t.loaderData,t.matches[T],w)||i.some(G=>G===w.route.id))return!0;let D=t.matches[T],P=w;return lh(w,Fe({currentUrl:x,currentParams:D.params,nextUrl:f,nextParams:P.params},r,{actionResult:_,defaultShouldRevalidate:l||x.pathname+x.search===f.pathname+f.search||x.search!==f.search||Q0(D,P)}))}),g=[];return d.forEach((w,T)=>{if(s||!n.some(Q=>Q.route.id===w.routeId)||u.has(T))return;let E=So(m,w.path,y);if(!E){g.push({key:T,routeId:w.routeId,path:w.path,matches:null,match:null,controller:null});return}let D=t.fetchers.get(T),P=td(E,w.path),G=!1;p.has(T)?G=!1:c.includes(T)?G=!0:D&&D.state!=="idle"&&D.data===void 0?G=l:G=lh(P,Fe({currentUrl:x,currentParams:t.matches[t.matches.length-1].params,nextUrl:f,nextParams:n[n.length-1].params},r,{actionResult:_,defaultShouldRevalidate:l})),G&&g.push({key:T,routeId:w.routeId,path:w.path,matches:E,match:P,controller:new AbortController})}),[S,g]}function IR(e,t,n){let r=!t||n.route.id!==t.route.id,a=e[n.route.id]===void 0;return r||a}function Q0(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function lh(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function ih(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let a=n[e.id];ie(a,"No route found in manifest");let s={};for(let l in r){let c=a[l]!==void 0&&l!=="hasErrorBoundary";Zr(!c,'Route "'+a.id+'" has a static property "'+l+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+l+'" will be ignored.')),!c&&!iR.has(l)&&(s[l]=r[l])}Object.assign(a,s),Object.assign(a,Fe({},t(a),{lazy:void 0}))}async function pa(e,t,n,r,a,s,l,i,c){c===void 0&&(c={});let u,d,p,m=j=>{let _,x=new Promise((f,h)=>_=h);return p=()=>_(),t.signal.addEventListener("abort",p),Promise.race([j({request:t,params:n.params,context:c.requestContext}),x])};try{let j=n.route[e];if(n.route.lazy)if(j){let _,x=await Promise.all([m(j).catch(f=>{_=f}),ih(n.route,s,a)]);if(_)throw _;d=x[0]}else if(await ih(n.route,s,a),j=n.route[e],j)d=await m(j);else if(e==="action"){let _=new URL(t.url),x=_.pathname+_.search;throw $t(405,{method:t.method,pathname:x,routeId:n.route.id})}else return{type:Ie.data,data:void 0};else if(j)d=await m(j);else{let _=new URL(t.url),x=_.pathname+_.search;throw $t(404,{pathname:x})}ie(d!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(j){u=Ie.error,d=j}finally{p&&t.signal.removeEventListener("abort",p)}if(HR(d)){let j=d.status;if(DR.has(j)){let x=d.headers.get("Location");if(ie(x,"Redirects returned/thrown from loaders/actions must have a Location header"),!Y0.test(x))x=Ju(new URL(t.url),r.slice(0,r.indexOf(n)+1),l,!0,x,i);else if(!c.isStaticRequest){let f=new URL(t.url),h=x.startsWith("//")?new URL(f.protocol+x):new URL(x),C=gr(h.pathname,l)!=null;h.origin===f.origin&&C&&(x=h.pathname+h.search+h.hash)}if(c.isStaticRequest)throw d.headers.set("Location",x),d;return{type:Ie.redirect,status:j,location:x,revalidate:d.headers.get("X-Remix-Revalidate")!==null,reloadDocument:d.headers.get("X-Remix-Reload-Document")!==null}}if(c.isRouteRequest)throw{type:u===Ie.error?Ie.error:Ie.data,response:d};let _;try{let x=d.headers.get("Content-Type");x&&/\bapplication\/json\b/.test(x)?_=await d.json():_=await d.text()}catch(x){return{type:Ie.error,error:x}}return u===Ie.error?{type:u,error:new Wp(j,d.statusText,_),headers:d.headers}:{type:Ie.data,data:_,statusCode:d.status,headers:d.headers}}if(u===Ie.error)return{type:u,error:d};if(UR(d)){var y,b;return{type:Ie.deferred,deferredData:d,statusCode:(y=d.init)==null?void 0:y.status,headers:((b=d.init)==null?void 0:b.headers)&&new Headers(d.init.headers)}}return{type:Ie.data,data:d}}function fa(e,t,n,r){let a=e.createURL(q0(t)).toString(),s={signal:n};if(r&&tn(r.formMethod)){let{formMethod:l,formEncType:i}=r;s.method=l.toUpperCase(),i==="application/json"?(s.headers=new Headers({"Content-Type":i}),s.body=JSON.stringify(r.json)):i==="text/plain"?s.body=r.text:i==="application/x-www-form-urlencoded"&&r.formData?s.body=ed(r.formData):s.body=r.formData}return new Request(a,s)}function ed(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,typeof r=="string"?r:r.name);return t}function ch(e){let t=new FormData;for(let[n,r]of e.entries())t.append(n,r);return t}function zR(e,t,n,r,a){let s={},l=null,i,c=!1,u={};return n.forEach((d,p)=>{let m=t[p].route.id;if(ie(!Br(d),"Cannot handle redirect results in processLoaderData"),wo(d)){let y=Ua(e,m),b=d.error;r&&(b=Object.values(r)[0],r=void 0),l=l||{},l[y.route.id]==null&&(l[y.route.id]=b),s[m]=void 0,c||(c=!0,i=K0(d.error)?d.error.status:500),d.headers&&(u[m]=d.headers)}else $r(d)?(a.set(m,d.deferredData),s[m]=d.deferredData.data):s[m]=d.data,d.statusCode!=null&&d.statusCode!==200&&!c&&(i=d.statusCode),d.headers&&(u[m]=d.headers)}),r&&(l=r,s[Object.keys(r)[0]]=void 0),{loaderData:s,errors:l,statusCode:i||200,loaderHeaders:u}}function uh(e,t,n,r,a,s,l,i){let{loaderData:c,errors:u}=zR(t,n,r,a,i);for(let d=0;d<s.length;d++){let{key:p,match:m,controller:y}=s[d];ie(l!==void 0&&l[d]!==void 0,"Did not find corresponding fetcher result");let b=l[d];if(!(y&&y.signal.aborted))if(wo(b)){let j=Ua(e.matches,m==null?void 0:m.route.id);u&&u[j.route.id]||(u=Fe({},u,{[j.route.id]:b.error})),e.fetchers.delete(p)}else if(Br(b))ie(!1,"Unhandled fetcher revalidation redirect");else if($r(b))ie(!1,"Unhandled fetcher deferred data");else{let j=Yn(b.data);e.fetchers.set(p,j)}}return{loaderData:c,errors:u}}function dh(e,t,n,r){let a=Fe({},t);for(let s of n){let l=s.route.id;if(t.hasOwnProperty(l)?t[l]!==void 0&&(a[l]=t[l]):e[l]!==void 0&&s.route.loader&&(a[l]=e[l]),r&&r.hasOwnProperty(l))break}return a}function Ua(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function ph(e){let t=e.length===1?e[0]:e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function $t(e,t){let{pathname:n,routeId:r,method:a,type:s}=t===void 0?{}:t,l="Unknown Server Error",i="Unknown @remix-run/router error";return e===400?(l="Bad Request",a&&n&&r?i="You made a "+a+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"?i="defer() is not supported in actions":s==="invalid-body"&&(i="Unable to encode submission body")):e===403?(l="Forbidden",i='Route "'+r+'" does not match URL "'+n+'"'):e===404?(l="Not Found",i='No route matches URL "'+n+'"'):e===405&&(l="Method Not Allowed",a&&n&&r?i="You made a "+a.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":a&&(i='Invalid request method "'+a.toUpperCase()+'"')),new Wp(e||500,l,new Error(i),!0)}function fh(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(Br(n))return{result:n,idx:t}}}function q0(e){let t=typeof e=="string"?Hn(e):e;return Kr(Fe({},t,{hash:""}))}function FR(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function $r(e){return e.type===Ie.deferred}function wo(e){return e.type===Ie.error}function Br(e){return(e&&e.type)===Ie.redirect}function UR(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function HR(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function VR(e){return RR.has(e.toLowerCase())}function tn(e){return LR.has(e.toLowerCase())}async function hh(e,t,n,r,a,s){for(let l=0;l<n.length;l++){let i=n[l],c=t[l];if(!c)continue;let u=e.find(p=>p.route.id===c.route.id),d=u!=null&&!Q0(u,c)&&(s&&s[c.route.id])!==void 0;if($r(i)&&(a||d)){let p=r[l];ie(p,"Expected an AbortSignal for revalidating fetcher deferred result"),await J0(i,p,a).then(m=>{m&&(n[l]=m||n[l])})}}}async function J0(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:Ie.data,data:e.deferredData.unwrappedData}}catch(a){return{type:Ie.error,error:a}}return{type:Ie.data,data:e.deferredData.data}}}function Zp(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function td(e,t){let n=typeof t=="string"?Hn(t).search:t.search;if(e[e.length-1].route.index&&Zp(n||""))return e[e.length-1];let r=Z0(e);return r[r.length-1]}function mh(e){let{formMethod:t,formAction:n,formEncType:r,text:a,formData:s,json:l}=e;if(!(!t||!n||!r)){if(a!=null)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:void 0,text:a};if(s!=null)return{formMethod:t,formAction:n,formEncType:r,formData:s,json:void 0,text:void 0};if(l!==void 0)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:l,text:void 0}}}function Uc(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function WR(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function ha(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function ZR(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function Yn(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function KR(e,t){try{let n=e.sessionStorage.getItem(X0);if(n){let r=JSON.parse(n);for(let[a,s]of Object.entries(r||{}))s&&Array.isArray(s)&&t.set(a,new Set(s||[]))}}catch{}}function GR(e,t){if(t.size>0){let n={};for(let[r,a]of t)n[r]=[...a];try{e.sessionStorage.setItem(X0,JSON.stringify(n))}catch(r){Zr(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ps(){return ps=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ps.apply(this,arguments)}const Ms=v.createContext(null),Kp=v.createContext(null),_r=v.createContext(null),Gi=v.createContext(null),kr=v.createContext({outlet:null,matches:[],isDataRoute:!1}),e4=v.createContext(null);function YR(e,t){let{relative:n}=t===void 0?{}:t;As()||ie(!1);let{basename:r,navigator:a}=v.useContext(_r),{hash:s,pathname:l,search:i}=Ps(e,{relative:n}),c=l;return r!=="/"&&(c=l==="/"?r:Rn([r,l])),a.createHref({pathname:c,search:i,hash:s})}function As(){return v.useContext(Gi)!=null}function Qo(){return As()||ie(!1),v.useContext(Gi).location}function t4(e){v.useContext(_r).static||v.useLayoutEffect(e)}function XR(){let{isDataRoute:e}=v.useContext(kr);return e?uD():QR()}function QR(){As()||ie(!1);let e=v.useContext(Ms),{basename:t,future:n,navigator:r}=v.useContext(_r),{matches:a}=v.useContext(kr),{pathname:s}=Qo(),l=JSON.stringify(Hp(a,n.v7_relativeSplatPath)),i=v.useRef(!1);return t4(()=>{i.current=!0}),v.useCallback(function(u,d){if(d===void 0&&(d={}),!i.current)return;if(typeof u=="number"){r.go(u);return}let p=Vp(u,JSON.parse(l),s,d.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:Rn([t,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[t,r,l,s,e])}const qR=v.createContext(null);function JR(e){let t=v.useContext(kr).outlet;return t&&v.createElement(qR.Provider,{value:e},t)}function Ps(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=v.useContext(_r),{matches:a}=v.useContext(kr),{pathname:s}=Qo(),l=JSON.stringify(Hp(a,r.v7_relativeSplatPath));return v.useMemo(()=>Vp(e,JSON.parse(l),s,n==="path"),[e,l,s,n])}function eD(e,t,n,r){As()||ie(!1);let{navigator:a}=v.useContext(_r),{matches:s}=v.useContext(kr),l=s[s.length-1],i=l?l.params:{};l&&l.pathname;let c=l?l.pathnameBase:"/";l&&l.route;let u=Qo(),d;if(t){var p;let _=typeof t=="string"?Hn(t):t;c==="/"||(p=_.pathname)!=null&&p.startsWith(c)||ie(!1),d=_}else d=u;let m=d.pathname||"/",y=c==="/"?m:m.slice(c.length)||"/",b=So(e,{pathname:y}),j=aD(b&&b.map(_=>Object.assign({},_,{params:Object.assign({},i,_.params),pathname:Rn([c,a.encodeLocation?a.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?c:Rn([c,a.encodeLocation?a.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),s,n,r);return t&&j?v.createElement(Gi.Provider,{value:{location:ps({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Ue.Pop}},j):j}function tD(){let e=cD(),t=K0(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},t),n?v.createElement("pre",{style:a},n):null,s)}const nD=v.createElement(tD,null);class rD extends v.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?v.createElement(kr.Provider,{value:this.props.routeContext},v.createElement(e4.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function oD(e){let{routeContext:t,match:n,children:r}=e,a=v.useContext(Ms);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),v.createElement(kr.Provider,{value:t},r)}function aD(e,t,n,r){var a;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var s;if((s=n)!=null&&s.errors)e=n.matches;else return null}let l=e,i=(a=n)==null?void 0:a.errors;if(i!=null){let d=l.findIndex(p=>p.route.id&&(i==null?void 0:i[p.route.id]));d>=0||ie(!1),l=l.slice(0,Math.min(l.length,d+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<l.length;d++){let p=l[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=d),p.route.id){let{loaderData:m,errors:y}=n,b=p.route.loader&&m[p.route.id]===void 0&&(!y||y[p.route.id]===void 0);if(p.route.lazy||b){c=!0,u>=0?l=l.slice(0,u+1):l=[l[0]];break}}}return l.reduceRight((d,p,m)=>{let y,b=!1,j=null,_=null;n&&(y=i&&p.route.id?i[p.route.id]:void 0,j=p.route.errorElement||nD,c&&(u<0&&m===0?(dD("route-fallback",!1),b=!0,_=null):u===m&&(b=!0,_=p.route.hydrateFallbackElement||null)));let x=t.concat(l.slice(0,m+1)),f=()=>{let h;return y?h=j:b?h=_:p.route.Component?h=v.createElement(p.route.Component,null):p.route.element?h=p.route.element:h=d,v.createElement(oD,{match:p,routeContext:{outlet:d,matches:x,isDataRoute:n!=null},children:h})};return n&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?v.createElement(rD,{location:n.location,revalidation:n.revalidation,component:j,error:y,children:f(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):f()},null)}var n4=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(n4||{}),mi=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(mi||{});function sD(e){let t=v.useContext(Ms);return t||ie(!1),t}function lD(e){let t=v.useContext(Kp);return t||ie(!1),t}function iD(e){let t=v.useContext(kr);return t||ie(!1),t}function r4(e){let t=iD(),n=t.matches[t.matches.length-1];return n.route.id||ie(!1),n.route.id}function cD(){var e;let t=v.useContext(e4),n=lD(mi.UseRouteError),r=r4(mi.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function uD(){let{router:e}=sD(n4.UseNavigateStable),t=r4(mi.UseNavigateStable),n=v.useRef(!1);return t4(()=>{n.current=!0}),v.useCallback(function(a,s){s===void 0&&(s={}),n.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,ps({fromRouteId:t},s)))},[e,t])}const gh={};function dD(e,t,n){!t&&!gh[e]&&(gh[e]=!0)}function pD(e){return JR(e.context)}function fD(e){let{basename:t="/",children:n=null,location:r,navigationType:a=Ue.Pop,navigator:s,static:l=!1,future:i}=e;As()&&ie(!1);let c=t.replace(/^\/*/,"/"),u=v.useMemo(()=>({basename:c,navigator:s,static:l,future:ps({v7_relativeSplatPath:!1},i)}),[c,i,s,l]);typeof r=="string"&&(r=Hn(r));let{pathname:d="/",search:p="",hash:m="",state:y=null,key:b="default"}=r,j=v.useMemo(()=>{let _=gr(d,c);return _==null?null:{location:{pathname:_,search:p,hash:m,state:y,key:b},navigationType:a}},[c,d,p,m,y,b,a]);return j==null?null:v.createElement(_r.Provider,{value:u},v.createElement(Gi.Provider,{children:n,value:j}))}new Promise(()=>{});function hD(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:v.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(t,{hydrateFallbackElement:v.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:v.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Io(){return Io=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Io.apply(this,arguments)}function o4(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,s;for(s=0;s<r.length;s++)a=r[s],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function mD(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function gD(e,t){return e.button===0&&(!t||t==="_self")&&!mD(e)}const xD=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],vD=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"];function yD(e,t){return PR({basename:t==null?void 0:t.basename,future:Io({},t==null?void 0:t.future,{v7_prependBasename:!0}),history:aR({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||CD(),routes:e,mapRouteProperties:hD,window:t==null?void 0:t.window}).initialize()}function CD(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=Io({},t,{errors:jD(t.errors)})),t}function jD(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,a]of t)if(a&&a.__type==="RouteErrorResponse")n[r]=new Wp(a.status,a.statusText,a.data,a.internal===!0);else if(a&&a.__type==="Error"){if(a.__subType){let s=window[a.__subType];if(typeof s=="function")try{let l=new s(a.message);l.stack="",n[r]=l}catch{}}if(n[r]==null){let s=new Error(a.message);s.stack="",n[r]=s}}else n[r]=a;return n}const a4=v.createContext({isTransitioning:!1}),bD=v.createContext(new Map),SD="startTransition",xh=Px[SD],wD="flushSync",vh=K6[wD];function _D(e){xh?xh(e):e()}function ma(e){vh?vh(e):e()}class kD{constructor(){this.status="pending",this.promise=new Promise((t,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",t(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}}function TD(e){let{fallbackElement:t,router:n,future:r}=e,[a,s]=v.useState(n.state),[l,i]=v.useState(),[c,u]=v.useState({isTransitioning:!1}),[d,p]=v.useState(),[m,y]=v.useState(),[b,j]=v.useState(),_=v.useRef(new Map),{v7_startTransition:x}=r||{},f=v.useCallback(w=>{x?_D(w):w()},[x]),h=v.useCallback((w,T)=>{let{deletedFetchers:E,unstable_flushSync:D,unstable_viewTransitionOpts:P}=T;E.forEach(Q=>_.current.delete(Q)),w.fetchers.forEach((Q,Y)=>{Q.data!==void 0&&_.current.set(Y,Q.data)});let G=n.window==null||typeof n.window.document.startViewTransition!="function";if(!P||G){D?ma(()=>s(w)):f(()=>s(w));return}if(D){ma(()=>{m&&(d&&d.resolve(),m.skipTransition()),u({isTransitioning:!0,flushSync:!0,currentLocation:P.currentLocation,nextLocation:P.nextLocation})});let Q=n.window.document.startViewTransition(()=>{ma(()=>s(w))});Q.finished.finally(()=>{ma(()=>{p(void 0),y(void 0),i(void 0),u({isTransitioning:!1})})}),ma(()=>y(Q));return}m?(d&&d.resolve(),m.skipTransition(),j({state:w,currentLocation:P.currentLocation,nextLocation:P.nextLocation})):(i(w),u({isTransitioning:!0,flushSync:!1,currentLocation:P.currentLocation,nextLocation:P.nextLocation}))},[n.window,m,d,_,f]);v.useLayoutEffect(()=>n.subscribe(h),[n,h]),v.useEffect(()=>{c.isTransitioning&&!c.flushSync&&p(new kD)},[c]),v.useEffect(()=>{if(d&&l&&n.window){let w=l,T=d.promise,E=n.window.document.startViewTransition(async()=>{f(()=>s(w)),await T});E.finished.finally(()=>{p(void 0),y(void 0),i(void 0),u({isTransitioning:!1})}),y(E)}},[f,l,d,n.window]),v.useEffect(()=>{d&&l&&a.location.key===l.location.key&&d.resolve()},[d,m,a.location,l]),v.useEffect(()=>{!c.isTransitioning&&b&&(i(b.state),u({isTransitioning:!0,flushSync:!1,currentLocation:b.currentLocation,nextLocation:b.nextLocation}),j(void 0))},[c.isTransitioning,b]),v.useEffect(()=>{},[]);let C=v.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:w=>n.navigate(w),push:(w,T,E)=>n.navigate(w,{state:T,preventScrollReset:E==null?void 0:E.preventScrollReset}),replace:(w,T,E)=>n.navigate(w,{replace:!0,state:T,preventScrollReset:E==null?void 0:E.preventScrollReset})}),[n]),S=n.basename||"/",g=v.useMemo(()=>({router:n,navigator:C,static:!1,basename:S}),[n,C,S]);return v.createElement(v.Fragment,null,v.createElement(Ms.Provider,{value:g},v.createElement(Kp.Provider,{value:a},v.createElement(bD.Provider,{value:_.current},v.createElement(a4.Provider,{value:c},v.createElement(fD,{basename:S,location:a.location,navigationType:a.historyAction,navigator:C,future:{v7_relativeSplatPath:n.future.v7_relativeSplatPath}},a.initialized||n.future.v7_partialHydration?v.createElement(ED,{routes:n.routes,future:n.future,state:a}):t))))),null)}function ED(e){let{routes:t,future:n,state:r}=e;return eD(t,void 0,r,n)}const LD=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ND=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,RD=v.forwardRef(function(t,n){let{onClick:r,relative:a,reloadDocument:s,replace:l,state:i,target:c,to:u,preventScrollReset:d,unstable_viewTransition:p}=t,m=o4(t,xD),{basename:y}=v.useContext(_r),b,j=!1;if(typeof u=="string"&&ND.test(u)&&(b=u,LD))try{let h=new URL(window.location.href),C=u.startsWith("//")?new URL(h.protocol+u):new URL(u),S=gr(C.pathname,y);C.origin===h.origin&&S!=null?u=S+C.search+C.hash:j=!0}catch{}let _=YR(u,{relative:a}),x=MD(u,{replace:l,state:i,target:c,preventScrollReset:d,relative:a,unstable_viewTransition:p});function f(h){r&&r(h),h.defaultPrevented||x(h)}return v.createElement("a",Io({},m,{href:b||_,onClick:j||s?r:f,ref:n,target:c}))}),DD=v.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:a=!1,className:s="",end:l=!1,style:i,to:c,unstable_viewTransition:u,children:d}=t,p=o4(t,vD),m=Ps(c,{relative:p.relative}),y=Qo(),b=v.useContext(Kp),{navigator:j}=v.useContext(_r),_=b!=null&&AD(m)&&u===!0,x=j.encodeLocation?j.encodeLocation(m).pathname:m.pathname,f=y.pathname,h=b&&b.navigation&&b.navigation.location?b.navigation.location.pathname:null;a||(f=f.toLowerCase(),h=h?h.toLowerCase():null,x=x.toLowerCase());const C=x!=="/"&&x.endsWith("/")?x.length-1:x.length;let S=f===x||!l&&f.startsWith(x)&&f.charAt(C)==="/",g=h!=null&&(h===x||!l&&h.startsWith(x)&&h.charAt(x.length)==="/"),w={isActive:S,isPending:g,isTransitioning:_},T=S?r:void 0,E;typeof s=="function"?E=s(w):E=[s,S?"active":null,g?"pending":null,_?"transitioning":null].filter(Boolean).join(" ");let D=typeof i=="function"?i(w):i;return v.createElement(RD,Io({},p,{"aria-current":T,className:E,ref:n,style:D,to:c,unstable_viewTransition:u}),typeof d=="function"?d(w):d)});var nd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(nd||(nd={}));var yh;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(yh||(yh={}));function OD(e){let t=v.useContext(Ms);return t||ie(!1),t}function MD(e,t){let{target:n,replace:r,state:a,preventScrollReset:s,relative:l,unstable_viewTransition:i}=t===void 0?{}:t,c=XR(),u=Qo(),d=Ps(e,{relative:l});return v.useCallback(p=>{if(gD(p,n)){p.preventDefault();let m=r!==void 0?r:Kr(u)===Kr(d);c(e,{replace:m,state:a,preventScrollReset:s,relative:l,unstable_viewTransition:i})}},[u,c,d,r,a,n,e,s,l,i])}function AD(e,t){t===void 0&&(t={});let n=v.useContext(a4);n==null&&ie(!1);let{basename:r}=OD(nd.useViewTransitionState),a=Ps(e,{relative:t.relative});if(!n.isTransitioning)return!1;let s=gr(n.currentLocation.pathname,r)||n.currentLocation.pathname,l=gr(n.nextLocation.pathname,r)||n.nextLocation.pathname;return qu(a.pathname,l)!=null||qu(a.pathname,s)!=null}const Yi=({to:e,className:t="",exact:n,onClick:r,label:a,style:s,...l})=>o.jsx(DD,{to:e,onClick:r,end:n&&"end",className:({isActive:i})=>`${t} ${i?"active":""}`,"aria-label":a,style:s,children:o.jsx(_s,{...l})}),s4=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"DropdownMenu"})," component generates a dropdown menu.  It extends the behaviour of the"," ",o.jsx(Yi,{to:"/components/dropdown",children:"Dropdown"})," component."]}),o.jsxs("div",{className:"cols-2 stack-desktop",children:[o.jsx("p",{children:"The default behaviour is to open the dropdown menu when the user clicks on the trigger."}),o.jsxs("p",{children:["Keyboard navigation is also supported.  The user can ",o.jsx("code",{children:"TAB"})," ","to the trigger and then press ",o.jsx("code",{children:"SPACE"}),", ",o.jsx("code",{children:"ENTER"}),","," ",o.jsx("code",{children:"DOWN"})," or ",o.jsx("code",{children:"UP"})," to open the menu."]}),o.jsxs("p",{children:["Once the menu is open, the ",o.jsx("code",{children:"DOWN"})," and ",o.jsx("code",{children:"UP"})," keys"," ","can be used to select menu items, ",o.jsx("code",{children:"ENTER"})," or"," ",o.jsx("code",{children:"SPACE"})," will select the current item and ",o.jsx("code",{children:"ESCAPE"})," ","will close the menu."]})]}),o.jsx(Ce,{Component:rR,code:oR})]}),PD=Object.freeze(Object.defineProperty({__proto__:null,default:s4},Symbol.toStringTag,{value:"Module"})),$D=()=>o.jsx(Sr,{text:"Dropdown Menu",iconRight:"angle-down",onSelect:e=>alert(`You selected: ${e.text}`),options:[{text:"Item One"},{text:"Item Two"},{text:"Item Three"}]}),BD=`import React from 'react'
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

export default DropdownMenuExample`,l4=()=>o.jsx(R,{code:"onSelect",Component:$D,Source:BD,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"onSelect"})," property should be used to define a handler which will be called when an item is selected, either by being clicked on or by keyboard selection.  The handler will be passed the data for the item that was selected."]})}),ID=Object.freeze(Object.defineProperty({__proto__:null,default:l4},Symbol.toStringTag,{value:"Module"})),zD=()=>o.jsx(Sr,{text:"Simple Options",iconRight:"angle-down",options:["Hello","World",10,11]}),FD=`import React from 'react'
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

export default DropdownExample`,UD=()=>o.jsx(Sr,{text:"Option Separators",iconRight:"angle-down",options:["One","Two","Three",{separator:!0},"Eleven","Twelve","Thirteen",{separator:!0},"One Hundred","Two Hundred","Three Hundred"]}),HD=`import React from 'react'
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

export default DropdownExample`,VD=()=>o.jsx(Sr,{text:"Object Options",iconRight:"angle-down",options:[{text:"Star",iconLeft:"star"},{text:"Heart",iconRight:"heart",className:"text-right"},{text:"Move",iconLeft:"angle-left",iconRight:"angle-right"},{text:o.jsxs("div",{className:"flex space small",children:[o.jsx("div",{children:"Foo"}),o.jsx("div",{children:"Bar"})]})}]}),WD=`import React from 'react'
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

export default DropdownExample`,ZD=()=>o.jsx(Sr,{text:"Option Headings",iconRight:"angle-down",options:[{heading:"Single Digit Numbers"},"One","Two","Three",{heading:"Double Digit Numbers"},"Eleven","Twelve","Thirteen",{heading:"Triple Digit Numbers"},"One Hundred","Two Hundred","Three Hundred"]}),KD=`import React from 'react'
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

export default DropdownExample`,GD=()=>o.jsx(Sr,{text:"Disabled Options",iconRight:"angle-down",options:[{text:"Disabled #1",disabled:!0},{text:"Enabled #2"},{text:"Disabled #3",disabled:!0},{text:"Enabled #4"},{text:"Disabled #5",disabled:!0}]}),YD=`import React from 'react'
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

export default DropdownExample`,i4=()=>o.jsxs(Z,{code:"options",children:[o.jsxs("div",{className:"cols-2 stack-desktop mar-b-4",children:[o.jsxs("p",{children:["The ",o.jsx("code",{children:"options"})," property should be used to define an array of options to display in the menu."]}),o.jsx("p",{children:"For simple cases, each element in the array can be a text string or numerical value."})]}),o.jsx(Ce,{Component:zD,code:FD,caption:"options",expand:!1,undent:2}),o.jsxs("div",{className:"cols-2 stack-desktop mar-b-4",children:[o.jsxs("p",{children:["An element in the ",o.jsx("code",{children:"options"})," array can also be an object. It should contain a ",o.jsx("code",{children:"text"})," property which can be a string or JSX fragment. A ",o.jsx("code",{children:"className"})," can be included to add a CSS class to the option."]}),o.jsxs("p",{children:["The content for an element is rendered using the ",o.jsx("code",{children:"WithIcon"})," ","component from"," ",o.jsx("a",{href:"https://abw.github.io/badger-icon/",children:"Badger Icon"})," allowing you to include ",o.jsx("code",{children:"iconLeft"})," and ",o.jsx("code",{children:"iconRight"})," properties to add icons to either side, along with ",o.jsx("code",{children:"iconLeftClass"})," and"," ",o.jsx("code",{children:"iconRightClass"})," to set CSS classes for those icons."]})]}),o.jsx(Ce,{Component:VD,code:WD,caption:"options",expand:!1,undent:2}),o.jsx("div",{className:"cols-2 stack-desktop mar-b-4",children:o.jsxs("p",{children:["An object in the ",o.jsx("code",{children:"options"})," array can have a"," ",o.jsx("code",{children:"disabled"})," property set to ",o.jsx("code",{children:"true"})," to disable the option."]})}),o.jsx(Ce,{Component:GD,code:YD,caption:"options",expand:!1,undent:2}),o.jsx("div",{className:"cols-2 stack-desktop mar-b-4",children:o.jsxs("p",{children:["An object in the ",o.jsx("code",{children:"options"})," array can have a"," ",o.jsx("code",{children:"separator"})," property set to ",o.jsx("code",{children:"true"})," to create a separator."]})}),o.jsx(Ce,{Component:UD,code:HD,caption:"options",expand:!1,undent:2}),o.jsx("div",{className:"cols-2 stack-desktop mar-b-4",children:o.jsxs("p",{children:["An object in the ",o.jsx("code",{children:"options"})," array can have a"," ",o.jsx("code",{children:"heading"})," property to create a section heading."]})}),o.jsx(Ce,{Component:ZD,code:KD,caption:"options",expand:!1,undent:2})]}),XD=Object.freeze(Object.defineProperty({__proto__:null,default:i4},Symbol.toStringTag,{value:"Module"})),Gr=({children:e,align:t="top"})=>o.jsx("div",{className:`grid-2 gap-h-8 stack-desktop ${t}`,style:{"--prose-width":"100%"},children:e}),QD=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Dropdown Menu"}),o.jsx(s4,{}),o.jsxs(st,{tocName:"dropdown",children:[o.jsx(ue,{title:"Properties"}),o.jsxs("p",{className:"large",children:["All the properties supported by the"," ",o.jsx(Yi,{to:"/components/dropdown",children:"Dropdown"})," component are supported.  These are the additional properties specific to the ",o.jsx("code",{children:"DropdownMenu"}),"."]}),o.jsx(i4,{}),o.jsx(l4,{}),o.jsxs(Gr,{children:[o.jsxs("div",{className:"flow",children:[o.jsx(ue,{title:"CSS Classes"}),o.jsxs(Z,{code:"optionClass",children:["Used to set the CSS class added to each dropdown menu item. The default value is ",o.jsx("code",{children:"item no-hover"}),".  The"," ",o.jsx("code",{children:"no-hover"})," class suppresses the hover styles that would usually be applied to menu items.  Instead the"," ",o.jsx("code",{children:"active"})," class is added to the active item, selected either by hovering over it or by keyboard navigation."]}),o.jsxs(Z,{code:"separatorClass",children:["Used to set the CSS class added to the dropdown menu separator. The default value is ",o.jsx("code",{children:"separator"}),"."]})]}),o.jsxs("div",{className:"flow",children:[o.jsx(ue,{title:"Components"}),o.jsxs(Z,{code:"Options",id:"Options-component",children:["Renders the dropdown menu options.  Defaults to ",o.jsx("code",{children:"DropdownMenuOptions"}),"."]}),o.jsxs(Z,{code:"Option",id:"Option-component",children:["Renders each dropdown menu option.  Defaults to ",o.jsx("code",{children:"DropdownMenuOption"}),"."]}),o.jsxs(Z,{code:"Separator",id:"Separator-component",children:["Renders a separator between menu items.  Defaults to ",o.jsx("code",{children:"DropdownMenuSeparator"}),"."]})]})]})]})]}),qD=Object.freeze(Object.defineProperty({__proto__:null,default:QD},Symbol.toStringTag,{value:"Module"})),JD=()=>o.jsx(cn,{text:"Dropdown",children:"Hello World!"}),eO=`import { Dropdown } from '@/src/index.jsx'

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

export default DropdownExample`,c4=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"Dropdown"})," component can be used to display content that is visible when the user clicks on the trigger."]}),o.jsx("div",{className:"cols-2 stack-desktop",children:o.jsx("p",{children:"The default behaviour is to open the dropdown when the user clicks on the trigger."})}),o.jsx(Ce,{Component:JD,code:eO})]}),tO=Object.freeze(Object.defineProperty({__proto__:null,default:c4},Symbol.toStringTag,{value:"Module"})),nO=()=>o.jsx(cn,{text:"Dropdown Content",content:"Hello World!"}),rO=`import React from 'react'
import { Dropdown } from '@/src/index.jsx'

const DropdownExample = () =>
  /* START */
  <Dropdown
    text='Dropdown Content'
    content='Hello World!'
  />
  /* END */

export default DropdownExample`,u4=()=>o.jsx(R,{code:"content",Component:nO,Source:rO,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"content"})," property can be used to define the content as a short-cut.  Otherwise any child content of the"," ",o.jsx("code",{children:"Dropdown"})," component will be displayed."]})}),oO=Object.freeze(Object.defineProperty({__proto__:null,default:u4},Symbol.toStringTag,{value:"Module"})),aO=()=>o.jsx(cn,{text:"Dropdown iconLeft",iconLeft:"angle-down",content:"Hello World!"}),sO=`import React from 'react'
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

export default DropdownExample`,d4=()=>o.jsx(R,{code:"iconLeft",Component:aO,Source:sO,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"iconLeft"})," property can used to define an icon for the left side of the trigger.  The ",o.jsx("code",{children:"iconLeftClass"})," can be used to add a CSS class for it."]})}),lO=Object.freeze(Object.defineProperty({__proto__:null,default:d4},Symbol.toStringTag,{value:"Module"})),iO=()=>o.jsx(cn,{text:"Dropdown iconLeftRotate",iconLeft:"angle-right",iconLeftRotate:90,content:"Hello World!"}),cO=`import React from 'react'
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

export default DropdownMenuExample`,p4=()=>o.jsx(R,{code:"iconLeftRotate",Component:iO,Source:cO,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"iconLeftRotate"})," property can used to specify the rotation (in degrees) of the icon when the dropdown is open."]})}),uO=Object.freeze(Object.defineProperty({__proto__:null,default:p4},Symbol.toStringTag,{value:"Module"})),dO=()=>o.jsx(cn,{text:"Dropdown iconRight",iconRight:"angle-down",content:"Hello World!"}),pO=`import React from 'react'
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

export default DropdownExample`,f4=()=>o.jsx(R,{code:"iconRight",Component:dO,Source:pO,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"iconRight"})," property can used to define an icon for the left side of the trigger.  The ",o.jsx("code",{children:"iconRightClass"})," can be used to add a CSS class for it."]})}),fO=Object.freeze(Object.defineProperty({__proto__:null,default:f4},Symbol.toStringTag,{value:"Module"})),hO=()=>o.jsx(cn,{text:"Dropdown iconRightRotate",iconRight:"angle-left",iconRightRotate:-90,content:"Hello World!"}),mO=`import React from 'react'
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

export default DropdownExample`,h4=()=>o.jsx(R,{code:"iconRightRotate",Component:hO,Source:mO,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"iconRightRotate"})," property can used to specify the rotation (in degrees) of the icon when the dropdown is open."]})}),gO=Object.freeze(Object.defineProperty({__proto__:null,default:h4},Symbol.toStringTag,{value:"Module"})),xO=()=>o.jsx(cn,{openOnHover:!0,text:"Dropdown openOnHover",content:"Hello World!"}),vO=`import React from 'react'
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

export default DropdownExample`,m4=()=>o.jsx(R,{code:"openOnHover",Component:xO,Source:vO,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"openOnHover"})," property can added to make the menu open when the mouse hovers over the trigger."]})}),yO=Object.freeze(Object.defineProperty({__proto__:null,default:m4},Symbol.toStringTag,{value:"Module"})),CO=()=>o.jsx(cn,{right:!0,text:"Dropdown Right",content:"Hello World!"}),jO=`import React from 'react'
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

export default DropdownExample`,g4=()=>o.jsx(R,{code:"right",Component:CO,Source:jO,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"right"})," property can added to align the dropdown menu to the right edge of the trigger"]})}),bO=Object.freeze(Object.defineProperty({__proto__:null,default:g4},Symbol.toStringTag,{value:"Module"})),SO=()=>o.jsx(cn,{text:"Dropdown Trigger Text",children:"Hello World!"}),wO=`import React from 'react'
import { Dropdown } from '@/src/index.jsx'

const DropdownExample = () =>
  /* START */
  <Dropdown
    text='Dropdown Trigger Text'
  >
    Hello World!
  </Dropdown>
  /* END */

export default DropdownExample`,x4=()=>o.jsx(R,{code:"text",Component:SO,Source:wO,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"text"})," property should be used to define the text for the trigger."]})}),_O=Object.freeze(Object.defineProperty({__proto__:null,default:x4},Symbol.toStringTag,{value:"Module"})),kO=()=>o.jsx(cn,{wide:!0,text:"Dropdown Wide",content:"Hello World!"}),TO=`import React from 'react'
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

export default DropdownExample`,v4=()=>o.jsx(R,{code:"wide",Component:kO,Source:TO,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"wide"})," property can added to make the menu expand to the full width of the container."]})}),EO=Object.freeze(Object.defineProperty({__proto__:null,default:v4},Symbol.toStringTag,{value:"Module"})),LO=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Dropdown"}),o.jsx(c4,{}),o.jsxs(st,{tocName:"dropdown",children:[o.jsx(ue,{title:"Properties"}),o.jsx(x4,{}),o.jsx(u4,{}),o.jsx(m4,{}),o.jsx(g4,{}),o.jsx(v4,{}),o.jsx(d4,{}),o.jsx(p4,{}),o.jsx(f4,{}),o.jsx(h4,{}),o.jsxs(Gr,{children:[o.jsxs("div",{className:"flow",children:[o.jsx(ue,{title:"CSS Classes"}),o.jsxs(Z,{code:"className",children:["Used to set the CSS class for the dropdown container.  The default value is ",o.jsx("code",{children:"dropdown"}),"."]}),o.jsxs(Z,{code:"openClass",children:["Used to set the CSS class added to the dropdown container when the menu is open.  The default value is ",o.jsx("code",{children:"open"}),"."]}),o.jsxs(Z,{code:"closedClass",children:["Used to set the CSS class added to the dropdown container when the menu is closed.  The default value is ",o.jsx("code",{children:"closed"}),"."]}),o.jsxs(Z,{code:"triggerClass",children:["Used to set the CSS class added to the dropdown trigger. The default value is ",o.jsx("code",{children:"trigger"}),"."]}),o.jsxs(Z,{code:"menuClass",children:[o.jsx("b",{children:"TODO: update this!"}),"Used to set the CSS class added to the dropdown menu container. The default value is ",o.jsx("code",{children:"menu border bdr-1"}),".  The"," ",o.jsx("code",{children:"border"})," utility class adds a border and"," ",o.jsx("code",{children:"bdr-1"})," sets the border radius to 1 unit (0.25rem or 4px)."]})]}),o.jsxs("div",{className:"flow",children:[o.jsx(ue,{title:"Components"}),o.jsxs(Z,{code:"Trigger",id:"Trigger-component",children:["Renders the dropdown menu trigger.  Defaults to ",o.jsx("code",{children:"DropdownTrigger"}),"."]}),o.jsxs(Z,{code:"Body",id:"Body-component",children:["Renders the dropdown body.  Defaults to ",o.jsx("code",{children:"DropdownBody"}),"."]})]})]})]})]}),NO=Object.freeze(Object.defineProperty({__proto__:null,default:LO},Symbol.toStringTag,{value:"Module"})),RO=()=>o.jsx(J,{name:"check"}),DO=`import React from 'react'
import { Icon } from '@/src/index.jsx'

{/* START */}
// PRETEND: import { Icon } from '@abw/badger-react-ui'

const IconExample = () =>
  <Icon name="check"/>

export default IconExample
`,OO=Xy(0,100,5),vl=({name:e,stop:t,setStop:n,disabled:r=!1})=>o.jsxs("select",{name:e,required:!0,value:t,onChange:a=>n(a.target.value),disabled:r,children:[o.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Select Stop"}),o.jsx("option",{value:"",children:"None"}),OO.map(a=>o.jsx("option",{value:a,children:a},a))]}),MO=()=>{const[e,t]=v.useState(0),[n,r]=v.useState({name:"bars"}),a=c=>()=>{r(u=>({...u,[c]:!u[c]})),t(u=>u+1)},s=c=>u=>{r(d=>({...d,[c]:u})),t(d=>d+1)},i=`<Icon
  ${PO(n)}
/>`;return o.jsxs("div",{className:"example grid-2 gap-8 stack-desktop",children:[o.jsxs("div",{children:[o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Output"}),o.jsx("div",{className:"output mar-b-8",children:o.jsx($O,{options:n},e)})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Markup"}),o.jsx(tr,{code:i,language:"html",expand:!0})]})]}),o.jsx(AO,{options:n,setOption:s,toggleOption:a})]})},AO=({options:e,setOption:t})=>{const n=t("name"),r=t("size"),a=t("color"),s=t("foreground"),l=t("background"),i=t("foregroundDark"),c=t("backgroundDark");return o.jsxs("div",{children:[o.jsxs("div",{className:"grid-3 gap-4 stack-mobile top",children:[o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Icon Name"}),o.jsx(Xu,{icon:e.name,setIcon:n})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Size"}),o.jsx(gg,{size:e.size,setSize:r})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Color"}),o.jsx(mg,{color:e.color,setColor:a,disabled:e.type})]})]}),o.jsxs("div",{className:"grid-2 gap-4 gap-v-0 stack-mobile top",children:[o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Foreground Stop"}),o.jsx(vl,{stop:e.foreground,setStop:s})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Background Stop"}),o.jsx(vl,{stop:e.background,setStop:l})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Foreground Dark"}),o.jsx(vl,{stop:e.foregroundDark,setStop:i})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Background Dark"}),o.jsx(vl,{stop:e.backgroundDark,setStop:c})]})]})]})},y4=e=>{const t=["name","size"].filter(r=>e[r]).reduce((r,a)=>(r[a]=e[a],r),{}),n=["color","foreground","background","foregroundDark","backgroundDark"].map(r=>e[r]||"").join("-");return n.length>4&&(t.color=n.replace(/-*$/,"")),t},PO=e=>{const t=y4(e);return Object.entries(t).map(([n,r])=>`${n}="${r}"`).join(`
  `)},$O=({options:e})=>o.jsx(J,{...y4(e)}),C4=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"Icon"})," component can be used to render SVG icons. The functionality is imported from"," ",o.jsx("a",{href:"https://abw.github.io/badger-icon/",children:"Badger Icon"})," with some extra bells and whistles."]}),o.jsx(Ce,{Component:RO,code:DO,expand:!0}),o.jsx("h2",{children:"Demo"}),o.jsx(MO,{})]}),BO=Object.freeze(Object.defineProperty({__proto__:null,default:C4},Symbol.toStringTag,{value:"Module"})),j4=()=>o.jsxs(Z,{code:"IconLibrary",children:[o.jsxs("p",{children:["The default set of icons is defined as ",o.jsx("code",{children:"IconLibrary"}),". The ",o.jsx("code",{children:"addIcon()"})," and ",o.jsx("code",{children:"addIcons()"})," function are provided for adding icons to the library."]}),o.jsx("div",{className:"grid-fill gap-4 mar-t-8",children:Object.keys(js.icons).map(e=>o.jsxs("div",{className:"text-center bgc-100 bgd-0 fgc-10 fgd-90 pad-4 shadow-2",children:[o.jsx(J,{name:e,className:"x3"}),o.jsx("div",{className:"small mar-t-4",children:e})]},e))})]}),IO=Object.freeze(Object.defineProperty({__proto__:null,default:j4},Symbol.toStringTag,{value:"Module"})),zO=()=>o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"flex gap-2 middle",children:[o.jsx(J,{name:"check",className:"smallest"}),o.jsx(J,{name:"check",className:"smaller"}),o.jsx(J,{name:"check",className:"small"}),o.jsx(J,{name:"check"}),o.jsx(J,{name:"check",className:"large"}),o.jsx(J,{name:"check",className:"larger"}),o.jsx(J,{name:"check",className:"largest"})]}),o.jsxs("div",{className:"flex gap-2 mar-t-4",children:[o.jsx(J,{name:"check",className:"larger green fgc-50"}),o.jsx(J,{name:"cross",className:"larger red fgc-50"})]})]}),FO=`import React from 'react'
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

export default Component`,b4=()=>o.jsx(R,{code:"className",Component:zO,Source:FO,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"className"})," property can be used to set a CSS class."]})}),UO=Object.freeze(Object.defineProperty({__proto__:null,default:b4},Symbol.toStringTag,{value:"Module"})),HO=()=>o.jsxs("div",{className:"flex gap-2 x2",children:[o.jsx(J,{name:"check",color:"green-50"}),o.jsx(J,{name:"check",color:"green-70-30"}),o.jsx(J,{name:"check",color:"green-70--30"}),o.jsx(J,{name:"check",color:"green-70-30-30-70"})]}),VO=`import React from 'react'
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

export default Component`,S4=()=>o.jsxs(R,{code:"color",Component:HO,Source:VO,undent:2,expand:!0,children:[o.jsxs("p",{children:["The ",o.jsx("code",{children:"color"})," property is a short-cut to set the color.  This adds the color to the CSS class."]}),o.jsxs("p",{children:["The ",o.jsx("code",{children:"color"})," can be be comprised of up to 5 elements separated by hyphens.  The first is the color range, e.g. ",o.jsx("code",{children:"red"}),","," ",o.jsx("code",{children:"green"}),", ",o.jsx("code",{children:"blue"}),", etc.  The second is the stop number for the foreground.  This is an integer from 0 (darkest) to 100 (lightest) in steps of 5.  The third is the stop number for the background.  The remaining two numbers are stops for the foreground and background colors in dark mode."]})]}),WO=Object.freeze(Object.defineProperty({__proto__:null,default:S4},Symbol.toStringTag,{value:"Module"})),ZO=()=>o.jsxs("div",{className:"flex gap-2 x2",children:[o.jsx(J,{name:"bars"}),o.jsx(J,{name:"check"}),o.jsx(J,{name:"cross"}),o.jsx(J,{name:"arrow"}),o.jsx(J,{name:"arrow-right"}),o.jsx(J,{name:"arrow-down-thicker.red.fgc-50"})]}),KO=`import React from 'react'
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

export default Component`,w4=()=>o.jsxs(R,{code:"name",Component:ZO,Source:KO,undent:2,expand:!0,children:[o.jsxs("p",{children:["The ",o.jsx("code",{children:"name"})," property can be used to select an icon from the default icon library."]}),o.jsx("p",{children:"Additional modifiers and classes can be added to the name to apply styles and transformations.  See the Badger Icon documentation for further details."})]}),GO=Object.freeze(Object.defineProperty({__proto__:null,default:w4},Symbol.toStringTag,{value:"Module"})),YO=()=>o.jsxs("div",{className:"flex gap-2",children:[o.jsx(J,{className:"x3",path:"M448,96L448,416C448,434 434,448 416,448L96,448C78,448 64,434 64,416L64,96C64,78 78,64 96,64L416,64C434,64 448,78 448,96ZM384,128L128,128L128,384L384,384L384,128Z"}),o.jsx(J,{className:"x3",path:"M21,5L21,20C21,20 20,21 20,21L5,21C4,21 3,20 3,20L3,5C3,4 4,3 5,3L20,3C20,3 21,4 21,5ZM18,6L6,6L6,18L18,18L18,6Z",width:24,height:24})]}),XO=`import React from 'react'
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

export default Component`,_4=()=>o.jsx(R,{code:"path",Component:YO,Source:XO,undent:2,expand:!0,children:o.jsxs("p",{children:["You can specify the data for a path.  The default viewbox is assumed to be 512px wide and 512px high.  You can set the ",o.jsx("code",{children:"width"})," and"," ",o.jsx("code",{children:"height"})," properties to change that."]})}),QO=Object.freeze(Object.defineProperty({__proto__:null,default:_4},Symbol.toStringTag,{value:"Module"})),qO=()=>o.jsxs("div",{className:"flex gap-2",children:[o.jsx(J,{name:"check",size:"smallest"}),o.jsx(J,{name:"check",size:"smaller"}),o.jsx(J,{name:"check",size:"small"}),o.jsx(J,{name:"check",size:"medium"}),o.jsx(J,{name:"check",size:"large"}),o.jsx(J,{name:"check",size:"larger"}),o.jsx(J,{name:"check",size:"largest"})]}),JO=`import React from 'react'
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

export default Component`,k4=()=>o.jsx(R,{code:"size",Component:qO,Source:JO,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"size"})," property is a short-cut to set the size.  This adds the size to the CSS class."]})}),eM=Object.freeze(Object.defineProperty({__proto__:null,default:k4},Symbol.toStringTag,{value:"Module"})),tM=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Icon"}),o.jsx(C4,{}),o.jsxs(st,{tocName:"icon",children:[o.jsx(ue,{title:"Properties"}),o.jsx(w4,{}),o.jsx(b4,{}),o.jsx(k4,{}),o.jsx(S4,{}),o.jsx(_4,{}),o.jsx(ue,{title:"Components"}),o.jsx(j4,{})]})]}),nM=Object.freeze(Object.defineProperty({__proto__:null,default:tM},Symbol.toStringTag,{value:"Module"})),rM=()=>{const[e,t]=v.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsxs(un,{open:e,className:"max-width-30rem",children:[o.jsx("header",{children:o.jsx("h3",{children:"A Modal!"})}),o.jsxs("p",{children:["This is a modal.  The content is rendered as an ",o.jsx("code",{children:"article"}),".  You can include"," ",o.jsx("code",{children:"header"})," and ",o.jsx("code",{children:"footer"})," ","sections if you want, although they're entirely optional."]}),o.jsx("footer",{children:o.jsx(M,{color:"red",text:"Close Modal",onClick:()=>t(!1)})})]}),o.jsx(M,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},oM=`import { Modal, Button } from '@/src/index.jsx'

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

export default ModalExample`,T4=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"Modal"})," component can be used to create an overlaid modal dialog."]}),o.jsxs("p",{className:"cols-2 stack-desktop",children:["The ",o.jsx("code",{children:"open"})," property should be used to indicate if the modal is open or not. Any child elements will be rendered inside the modal body."]}),o.jsx(Ce,{Component:rM,code:oM,expand:!0})]}),aM=Object.freeze(Object.defineProperty({__proto__:null,default:T4},Symbol.toStringTag,{value:"Module"})),sM=()=>{const{show:e,hide:t,Modal:n}=y_();return o.jsxs(o.Fragment,{children:[o.jsxs(n,{children:[o.jsx("p",{children:"Modal State"}),o.jsx(M,{color:"red",text:"Close Modal",onClick:t})]}),o.jsx(M,{color:"green",text:"Open Modal",onClick:e})]})},lM=`import { ModalState, Button } from '@/src/index.jsx'
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

export default ModalStateExample`,E4=()=>o.jsx(R,{code:"ModalState",Component:sM,Source:lM,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"ModalState"})," function can be used to generate a Modal with state.  It returns the ",o.jsx("code",{children:"isVisible"})," property,"," ",o.jsx("code",{children:"show"})," and ",o.jsx("code",{children:"hide"})," functions to change the visibility, and a ",o.jsx("code",{children:"Modal"})," component."]})}),iM=Object.freeze(Object.defineProperty({__proto__:null,default:E4},Symbol.toStringTag,{value:"Module"})),cM=()=>{const[e,t]=v.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsxs(un,{open:e,className:"large max-width-25rem pad-8",children:[o.jsx("p",{children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object."}),o.jsx(M,{color:"red",text:"Close Modal",onClick:()=>t(!1)})]}),o.jsx(M,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},uM=`import { Modal, Button } from '@/src/index.jsx'
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

export default ModalExample`,L4=()=>o.jsx(R,{code:"className",Component:cM,Source:uM,undent:6,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"className"})," property can be used to add a CSS class to the Modal ",o.jsx("code",{children:"dialog"})," element."]})}),dM=Object.freeze(Object.defineProperty({__proto__:null,default:L4},Symbol.toStringTag,{value:"Module"})),pM=()=>{const[e,t]=v.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(un,{open:e,close:()=>t(!1),children:o.jsx("p",{children:"This is a modal with a close button."})}),o.jsx(M,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},fM=`import React, { useState } from 'react'
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

export default ModalExample`,N4=()=>o.jsx(R,{code:"close",Component:pM,Source:fM,undent:6,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"close"})," property can be used to automatically add a close icon to the top right corner.  It should be a function which will close the modal when the icon is clicked."]})}),hM=Object.freeze(Object.defineProperty({__proto__:null,default:N4},Symbol.toStringTag,{value:"Module"})),mM=()=>{const[e,t]=v.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(un,{open:e,close:()=>t(!1),closeIcon:"thumb",children:o.jsx("p",{children:"This is a modal with a custom close icon."})}),o.jsx(M,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},gM=`import React, { useState } from 'react'
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

export default ModalExample`,R4=()=>o.jsx(R,{code:"closeIcon",Component:mM,Source:gM,undent:6,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"closeIcon"})," property can be used to change the icon displayed to close the modal."]})}),xM=Object.freeze(Object.defineProperty({__proto__:null,default:R4},Symbol.toStringTag,{value:"Module"})),vM=()=>{const[e,t]=v.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(un,{open:e,close:()=>t(!1),title:"Hello World!",text:"This is a modal with a custom footer",footer:o.jsx("div",{className:"text-right",children:o.jsx(M,{color:"red",text:"Close",size:"small",iconRight:"cross",onClick:()=>t(!1)})})}),o.jsx(M,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},yM=`import { Modal, Button } from '@/src/index.jsx'
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

export default ModalExample`,D4=()=>o.jsx(R,{code:"footer",Component:vM,Source:yM,undent:6,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"footer"})," property can be used to define some custom footer content."]})}),CM=Object.freeze(Object.defineProperty({__proto__:null,default:D4},Symbol.toStringTag,{value:"Module"})),jM=()=>{const[e,t]=v.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(un,{open:e,close:()=>t(!1),text:"This is a modal with a custom header",header:o.jsxs(o.Fragment,{children:[o.jsx("h3",{children:"Custom Header"}),o.jsx("p",{children:"Hello World!"})]})}),o.jsx(M,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},bM=`import { Modal, Button } from '@/src/index.jsx'
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

export default ModalExample`,O4=()=>o.jsx(R,{code:"header",Component:jM,Source:bM,undent:6,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"header"})," property can be used to define some custom header content."]})}),SM=Object.freeze(Object.defineProperty({__proto__:null,default:O4},Symbol.toStringTag,{value:"Module"})),wM=()=>{const[e,t]=v.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(un,{open:e,close:()=>t(!1),text:"This is a modal"}),o.jsx(M,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},_M=`import { Modal, Button } from '@/src/index.jsx'

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

export default ModalExample`,M4=()=>o.jsx(R,{code:"text",Component:wM,Source:_M,undent:6,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"text"})," property can be used to define the body text."]})}),kM=Object.freeze(Object.defineProperty({__proto__:null,default:M4},Symbol.toStringTag,{value:"Module"})),TM=()=>{const[e,t]=v.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(un,{open:e,close:()=>t(!1),text:"This is a modal with a title",title:"My Modal"}),o.jsx(M,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},EM=`import { Modal, Button } from '@/src/index.jsx'
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

export default ModalExample`,A4=()=>o.jsx(R,{code:"title",Component:TM,Source:EM,undent:6,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"title"})," property can be used to add a title."]})}),LM=Object.freeze(Object.defineProperty({__proto__:null,default:A4},Symbol.toStringTag,{value:"Module"})),NM=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Modal"}),o.jsx(T4,{}),o.jsxs(st,{tocName:"modal",children:[o.jsx(ue,{title:"Properties"}),o.jsx(L4,{}),o.jsx(N4,{}),o.jsx(R4,{}),o.jsx(M4,{}),o.jsx(A4,{}),o.jsx(O4,{}),o.jsx(D4,{}),o.jsx(ue,{title:"Components"}),o.jsx(E4,{})]})]}),RM=Object.freeze(Object.defineProperty({__proto__:null,default:NM},Symbol.toStringTag,{value:"Module"})),DM=()=>{const{isVisible:e,show:t,hide:n}=jr();return o.jsxs("div",{className:"relative pad-6 border",children:[e&&o.jsx(Go,{className:"flex middle center pad-8",children:o.jsxs("div",{children:[o.jsx("p",{className:"larger",children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been... that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object."}),o.jsx(M,{onClick:n,className:"red",text:"Hide Overlay"})]})}),o.jsx("p",{className:"mar-t-none",children:"May I make a suggestion? May I make a suggestion? I've got one other suggestion."}),o.jsx("p",{children:"Well let's hear yours. Let's hear your suggestion."}),o.jsx("p",{children:"Stonehenge! It's the best production value we've ever had on stage."}),o.jsx("p",{children:"But we haven't got the equipment. We haven't got the equipment, we haven't got Stonehenge, we haven't..."}),o.jsx("p",{children:"Not yet we don't. Let's start... Musically, musically we all know it. Musically we all know it. Right? No problems musically. We go right on stage. And it's quite simple. This is you know... Ian can take care of this..."}),o.jsx("p",{children:"I know what the Stonehenge monument looks like. We don't have that piece of scenery anymore."}),o.jsx("p",{children:"I know, so we build a new one. And this is it, look!"}),o.jsx(M,{onClick:t,color:"green",text:"Show Overlay"})]})},OM=`import { Overlay, VisibleState, Button } from '@/src/index.jsx'

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

export default OverlayExample`,P4=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"Overlay"})," component can be used to create an overlay. The default positioning is absolute so it will fill to cover the nearest parent that has positioning set to relative."]}),o.jsx(Ce,{Component:DM,code:OM})]}),MM=Object.freeze(Object.defineProperty({__proto__:null,default:P4},Symbol.toStringTag,{value:"Module"})),AM=()=>{const{show:e,hide:t,Overlay:n}=j_();return o.jsxs(o.Fragment,{children:[o.jsx(n,{fixed:!0,className:"flex center middle",children:o.jsxs("div",{children:[o.jsx("h1",{className:"mar-b-4",children:"Overlay State"}),o.jsx(M,{color:"red",text:"Hide Overlay",onClick:t})]})}),o.jsx(M,{color:"green",text:"Show Overlay",onClick:e})]})},PM=`import { OverlayState, Button } from '@/src/index.jsx'
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

export default OverlayStateExample`,$4=()=>o.jsx(R,{code:"OverlayState",Component:AM,Source:PM,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"OverlayState"})," function can be used to generate an Overlay with state.  It returns the ",o.jsx("code",{children:"isVisible"})," property,"," ",o.jsx("code",{children:"show"})," and ",o.jsx("code",{children:"hide"})," functions to change the visibility, and an ",o.jsx("code",{children:"Overlay"})," component."]})}),$M=Object.freeze(Object.defineProperty({__proto__:null,default:$4},Symbol.toStringTag,{value:"Module"})),BM=()=>{const[e,t]=v.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsxs(un,{open:e,className:"large max-width-25rem pad-8",children:[o.jsx("p",{children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object."}),o.jsx(M,{color:"red",text:"Close Modal",onClick:()=>t(!1)})]}),o.jsx(M,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},IM=`import { Modal, Button } from '@/src/index.jsx'
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

export default ModalExample`,zM=()=>o.jsx(R,{code:"className",Component:BM,Source:IM,undent:6,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"className"})," property can be used to add a CSS class to the Modal ",o.jsx("code",{children:"dialog"})," element."]})}),FM=Object.freeze(Object.defineProperty({__proto__:null,default:zM},Symbol.toStringTag,{value:"Module"})),UM=()=>{const{isVisible:e,show:t,hide:n}=jr();return o.jsxs("div",{className:"relative pad-6 border",children:[o.jsx(M,{onClick:t,color:"green",text:"Show Red Overlay"}),e&&o.jsxs(Go,{className:"flex space top pad-6",style:{"--color":"var(--red-70)","--background-color":"var(--red-20)","--background-opacity":"10%"},children:[o.jsx("p",{className:"larger",children:"Custom red overlay"}),o.jsx(M,{onClick:n,className:"red",text:"Hide Overlay"})]})]})},HM=`import React from 'react'
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

export default ColorExample`,B4=()=>o.jsx(R,{title:"Custom Colors",Component:UM,Source:HM,undent:8,children:o.jsxs("p",{children:["You can set the ",o.jsx("code",{children:"--color"})," and ",o.jsx("code",{children:"--background-color"})," ","CSS properties to define your own colors for the overlay.  The"," ",o.jsx("code",{children:"--background-opacity"})," can be set to change the background opacity."]})}),VM=Object.freeze(Object.defineProperty({__proto__:null,default:B4},Symbol.toStringTag,{value:"Module"})),WM=()=>{const{isVisible:e,show:t,hide:n}=jr();return o.jsxs("div",{className:"relative pad-6 border",children:[o.jsx(M,{onClick:t,color:"green",text:"Show Overlay"}),e&&o.jsx(Go,{fixed:!0,className:"flex center middle",children:o.jsxs("div",{className:"max-width-40rem",children:[o.jsx("p",{className:"larger",children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been... that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object."}),o.jsx(M,{onClick:n,className:"red",text:"Hide Overlay"})]})})]})},ZM=`import React from 'react'
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

export default OverlayExample`,I4=()=>o.jsx(R,{code:"fixed",Component:WM,Source:ZM,undent:8,children:o.jsxs("p",{children:["Add the ",o.jsx("code",{children:"fixed"})," to set the overlay position to fixed so that it covers the entire viewport."]})}),KM=Object.freeze(Object.defineProperty({__proto__:null,default:I4},Symbol.toStringTag,{value:"Module"})),GM=()=>{const{isVisible:e,show:t,hide:n}=jr();return o.jsxs("div",{className:"relative pad-6 border",children:[o.jsx(M,{onClick:t,color:"green",text:"Show Light Overlay"}),e&&o.jsxs(Go,{light:!0,className:"flex space top pad-6",children:[o.jsx("p",{className:"larger",children:"Light overlay"}),o.jsx(M,{onClick:n,className:"red",text:"Hide Overlay"})]})]})},YM=`import React from 'react'
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

export default ColorExample`,XM=()=>{const{isVisible:e,show:t,hide:n}=jr();return o.jsxs("div",{className:"relative pad-6 border",children:[o.jsx(M,{onClick:t,color:"green",text:"Show Dark Overlay"}),e&&o.jsxs(Go,{dark:!0,className:"flex space top pad-6",children:[o.jsx("p",{className:"larger",children:"Dark overlay"}),o.jsx(M,{onClick:n,className:"red",text:"Hide Overlay"})]})]})},QM=`import React from 'react'
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

export default ColorExample`,z4=()=>o.jsxs(Z,{code:"light / dark",children:[o.jsxs("p",{className:"cols-2 stack-desktop",children:["The default overlay color is white in light mode and black in dark mode.  You can add the ",o.jsx("code",{children:"light"})," or ",o.jsx("code",{children:"dark"})," ","property to explicitly set it to one or the other."]}),o.jsx(Ce,{Component:GM,code:YM,caption:"light",undent:8}),o.jsx(Ce,{Component:XM,code:QM,caption:"dark",undent:8})]}),qM=Object.freeze(Object.defineProperty({__proto__:null,default:z4},Symbol.toStringTag,{value:"Module"})),JM=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Overlay"}),o.jsx(P4,{}),o.jsxs(st,{tocName:"overlay",children:[o.jsx(ue,{title:"Properties"}),o.jsx(I4,{}),o.jsx(z4,{}),o.jsx(ue,{title:"Styling"}),o.jsx(B4,{}),o.jsx(ue,{title:"Components"}),o.jsx($4,{})]})]}),eA=Object.freeze(Object.defineProperty({__proto__:null,default:JM},Symbol.toStringTag,{value:"Module"})),tA=({page:e,className:t,onClick:n})=>{const{pageRanges:r}=Pw(),a=r[e];return o.jsx(M,{text:a,className:t,onClick:n})},nA=()=>{const e=["A-C","D-F","G-I","J-M","N-P","Q-T","U-W","X-Z"],t=e.length,[n,r]=v.useState(0);return o.jsx(Ht,{pages:t,page:n,setPage:r,pageRanges:e,Page:tA,size:"small"})},rA=`import { Pager, usePager, Button } from '@/src/index.jsx'

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

export default PagerExample`,oA=({items:e})=>o.jsx("table",{className:"wide shaded striped celled",children:o.jsx("tbody",{children:e.map(([t,n])=>o.jsx(aA,{name:t,value:n},t))})}),aA=({name:e,value:t})=>o.jsxs("tr",{children:[o.jsx("td",{className:"font-mono",children:e}),o.jsx("td",{children:t})]}),F4=()=>o.jsxs(o.Fragment,{children:[o.jsx("h2",{children:"Context"}),o.jsxs("div",{className:"cols-2 stack-desktop",children:[o.jsx("p",{children:"A react context is created which provides the items listed below. Any other properties passed in to the component will also be accessible to child components."}),o.jsxs("p",{children:["Values are provided for the 0-based indexes of the first, last, previous, next and current pages. For example, the lowest value for ",o.jsx("code",{children:"page"})," is"," ",o.jsx("code",{children:"0"})," and the highest value is ",o.jsx("code",{children:"pages - 1"}),"."]}),o.jsxs("p",{children:['Their counterparts are also provided in "human readable" 1-based form with a ',o.jsx("code",{children:"No"})," suffix.  For example, the values for ",o.jsx("code",{children:"pageNo"})," range from ",o.jsx("code",{children:"1"})," to ",o.jsx("code",{children:"pages"}),", and will always be one more than ",o.jsx("code",{children:"page"}),"."]})]}),o.jsx(oA,{items:[["pages","The total number of pages, as passed into the component as a property."],["page","The index (0 based) of the current page, as passed into the component as a property."],["setPage","The function for setting a page index, as passed into the component as a property."],["pageNo",o.jsxs(o.Fragment,{children:["The current page number (1 based), effectively one louder than ",o.jsx("code",{children:"page"}),".  e.g. if ",o.jsx("code",{children:"page"})," is ten then this goes up to eleven."]})],["firstPage","The index (0 based) of the first page.  This is always 0 but is included for completeness."],["firstPageNo","The number (1 based) of the first page.  This is always 1 but is included for completeness."],["lastPage","The index (0 based) of the last page."],["lastPageNo","The number (1 based) of the first page."],["prevPage","The index (0 based) of the previous page."],["prevPageNo","The number (1 based) of the previous page."],["nextPage","The index (0 based) of the next page."],["nextPageNo","The number (1 based) of the next page."]]}),o.jsx("h2",{children:"Custom Component"}),o.jsxs("div",{className:"cols-2 stack-desktop",children:[o.jsxs("p",{children:["You can provide your own components to render certain elements of the pager widget. These will be passed relevant parameters as properties and can use the ",o.jsx("code",{children:"usePager()"})," hook to access the full pager context, including any additional properties that you pass to the ",o.jsx("code",{children:"Pager"})," component."]}),o.jsxs("p",{children:["In this example we define a custom ",o.jsx("code",{children:"MyPageButton"})," component to replace the ",o.jsx("code",{children:"Page"})," component that renders the numbered page buttons.  Instead of displaying page numbers it shows alphabetical ranges for each button, defined in a custom ",o.jsx("code",{children:"pageRanges"})," "," ","property."]})]}),o.jsx(Ce,{Component:nA,code:rA})]}),sA=Object.freeze(Object.defineProperty({__proto__:null,default:F4},Symbol.toStringTag,{value:"Module"})),lA=()=>{const[e,t]=v.useState(0);return o.jsx(Ht,{pages:11,page:e,setPage:t})},iA=`import { Pager } from '@/src/index.jsx'

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

export default PagerExample`,U4=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"Pager"})," component generates buttons for navigating through several pages."]}),o.jsx("div",{className:"cols-2 stack-desktop",children:o.jsxs("p",{children:["The three mandatory properties are ",o.jsx("code",{children:"pages"})," indicating the total number of pages, ",o.jsx("code",{children:"page"})," for the current page index (ranging from 0 to ",o.jsx("code",{children:"pages"})," - 1) and a"," ",o.jsx("code",{children:"setPage"})," handler to set the page index."]})}),o.jsx(Ce,{Component:lA,code:iA})]}),cA=Object.freeze(Object.defineProperty({__proto__:null,default:U4},Symbol.toStringTag,{value:"Module"})),uA=()=>{const[e,t]=v.useState(0);return o.jsx("div",{className:"grid-1 gap-4",children:o.jsx(Ht,{pages:11,page:e,setPage:t,className:"pager small brand border pad-2 bdr-2 bgc-90 bgd-10"})})},dA=`import React, { useState } from 'react'
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
`,H4=()=>o.jsx(R,{code:"className",Component:uA,Source:dA,undent:4,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"className"})," property can be used to set a CSS class for the pager container.  The default value is ",o.jsx("code",{children:"pager"}),"."]})}),pA=Object.freeze(Object.defineProperty({__proto__:null,default:H4},Symbol.toStringTag,{value:"Module"})),fA=()=>{const[e,t]=v.useState(0);return o.jsxs("div",{className:"grid-1 gap-4",children:[o.jsx(Ht,{pages:11,page:e,setPage:t,color:"red"}),o.jsx(Ht,{pages:11,page:e,setPage:t,color:"green"}),o.jsx(Ht,{pages:11,page:e,setPage:t,color:"blue"})]})},hA=`import React, { useState } from 'react'
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
`,V4=()=>o.jsx(R,{code:"color",Component:fA,Source:hA,undent:4,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"color"})," property can be used to set the color range used for the buttons.  This is a short-cut which adds the specified color to the CSS class for the pager container."]})}),mA=Object.freeze(Object.defineProperty({__proto__:null,default:V4},Symbol.toStringTag,{value:"Module"})),gA=()=>{const[e,t]=v.useState(0);return o.jsx(Ht,{pages:11,page:e,setPage:t,prevIcon:"angle-left",nextIcon:"angle-right"})},xA=`import React, { useState } from 'react'
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
`,W4=()=>o.jsx(R,{code:"prevIcon / nextIcon",Component:gA,Source:xA,undent:4,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"prevIcon"})," and ",o.jsx("code",{children:"nextIcon"})," properties can be used to set the icons for the previous and next page button."]})}),vA=Object.freeze(Object.defineProperty({__proto__:null,default:W4},Symbol.toStringTag,{value:"Module"})),yA=()=>{const[e,t]=v.useState(0);return o.jsx(Ht,{pages:11,page:e,setPage:t,nextIcon:"angle-right"})},CA=`import React, { useState } from 'react'
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
`,jA=()=>o.jsx(R,{code:"nextIcon",Component:yA,Source:CA,undent:4,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"nextIcon"})," property can be used to set the icon for the next page button."]})}),bA=Object.freeze(Object.defineProperty({__proto__:null,default:jA},Symbol.toStringTag,{value:"Module"})),SA=()=>{const[e,t]=v.useState(0);return o.jsx(Ht,{pages:11,page:e,setPage:t,showFirstLast:!1})},wA=`import React, { useState } from 'react'
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
`,Z4=()=>o.jsxs(R,{code:"showFirstLast",Component:SA,Source:wA,undent:4,children:[o.jsxs("p",{children:["The ",o.jsx("code",{children:"showFirstLast"})," property determines if the first and last pages are shown in the set of numbered page buttons. A button for the first page will be displayed when it is less than previous page.  The last page button will be displayed when it is greater than the next page."]}),o.jsxs("p",{children:["This value defaults to ",o.jsx("code",{children:"true"})," but can be set"," ",o.jsx("code",{children:"false"})," to hide these buttons."]})]}),_A=Object.freeze(Object.defineProperty({__proto__:null,default:Z4},Symbol.toStringTag,{value:"Module"})),kA=()=>{const[e,t]=v.useState(0);return o.jsxs("div",{className:"grid-1 gap-4",children:[o.jsx(Ht,{pages:11,page:e,setPage:t,size:"smaller"}),o.jsx(Ht,{pages:11,page:e,setPage:t,size:"small"})]})},TA=`import React, { useState } from 'react'
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
`,K4=()=>o.jsx(R,{code:"size",Component:kA,Source:TA,undent:4,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"size"})," property can be used to set the size to one of the standard sizes.  This is also a short-cut for adding the size as a CSS class so you can use it to add any of your own size classes."]})}),EA=Object.freeze(Object.defineProperty({__proto__:null,default:K4},Symbol.toStringTag,{value:"Module"})),LA=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Pager"}),o.jsx(U4,{}),o.jsx(F4,{}),o.jsxs(st,{tocName:"pager",children:[o.jsx(ue,{title:"Properties"}),o.jsx(H4,{}),o.jsx(V4,{}),o.jsx(K4,{}),o.jsx(W4,{}),o.jsx(Z4,{}),o.jsxs(Gr,{children:[o.jsxs("div",{className:"flow",children:[o.jsx(ue,{title:"CSS Classes"}),o.jsxs(Z,{code:"className",children:["Used to set the CSS class for the pager container.  The default value is ",o.jsx("code",{children:"pager"}),"."]}),o.jsxs(Z,{code:"buttonClass",children:["Used to set a default CSS class for all buttons.  The default value is ",o.jsx("code",{children:"outline"}),"."]}),o.jsxs(Z,{code:"prevClass",children:["Used to set the CSS class for the previous page button.  It defaults to the value for ",o.jsx("code",{children:"buttonClass"}),"."]}),o.jsxs(Z,{code:"nextClass",children:["Used to set the CSS class for the next page button.  It defaults to the value for ",o.jsx("code",{children:"buttonClass"}),"."]}),o.jsxs(Z,{code:"pagesClass",children:["Used to set the CSS class for the numbered page buttons container. The default value is ",o.jsx("code",{children:"pages"}),"."]}),o.jsxs(Z,{code:"pageClass",children:["Used to set the CSS class for individual numbered page buttons.  It defaults to the value for ",o.jsx("code",{children:"buttonClass"}),"."]}),o.jsxs(Z,{code:"currentPageClass",children:["Used to set the CSS class for the currently selected numbered page button. The default value is ",o.jsx("code",{children:"solid"}),"."]})]}),o.jsxs("div",{className:"flow",children:[o.jsx(ue,{title:"Components"}),o.jsxs(Z,{code:"Previous",id:"Previous-component",children:["Renders the previous page button.  Defaults to ",o.jsx("code",{children:"PagerPrevious"}),"."]}),o.jsxs(Z,{code:"Next",id:"Next-component",children:["Renders the next page button.  Defaults to ",o.jsx("code",{children:"PagerNext"}),"."]}),o.jsxs(Z,{code:"Pages",id:"Pages-component",children:["Renders the collection of numbered page buttons.  Defaults to ",o.jsx("code",{children:"PagerPages"}),"."]}),o.jsxs(Z,{code:"Page",id:"Page-component",children:["Renders an individual page button.  Defaults to ",o.jsx("code",{children:"PagerPage"}),"."]}),o.jsxs(Z,{code:"Separator",id:"Separator-component",children:["Renders the separator between the first and/or last pages and the rest of the numbered page buttons. Defaults to ",o.jsx("code",{children:"PagerSeparator"}),"."]})]})]})]})]}),NA=Object.freeze(Object.defineProperty({__proto__:null,default:LA},Symbol.toStringTag,{value:"Module"})),RA=()=>{const[e,t]=v.useState(!1);return o.jsx($n,{name:"tap",value:e,onChange:t,options:["David","Nigel","Derek"]})},DA=`import { Radio } from '@/src/index.jsx'

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

export default RadioExample`,G4=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"Radio"})," component renders a set of radio buttons."]}),o.jsx(Ce,{Component:RA,code:DA,expand:!0})]}),OA=Object.freeze(Object.defineProperty({__proto__:null,default:G4},Symbol.toStringTag,{value:"Module"})),MA=()=>{const[e,t]=v.useState(!1),[n,r]=v.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx($n,{border:!0,name:"tap1",labelClass:"mar-b-2",value:e,onChange:t,options:["David","Nigel","Derek"]}),o.jsx($n,{border:!0,inline:!0,name:"tap2",labelClass:"mar-r-2",value:n,onChange:r,options:["David","Nigel","Derek"]})]})},AA=`import { Radio } from '@/src/index.jsx'
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

export default BorderExample`,Y4=()=>o.jsxs(R,{code:"border",Component:MA,Source:AA,undent:4,expand:!0,children:[o.jsxs("p",{children:["The ",o.jsx("code",{children:"border"})," property can be set to add a border to each item."]}),o.jsxs("p",{children:["You may need to add margins to either the bottom or right side of each label using the ",o.jsx("code",{children:"labelClass"})," property."]})]}),PA=Object.freeze(Object.defineProperty({__proto__:null,default:Y4},Symbol.toStringTag,{value:"Module"})),$A=()=>{const[e,t]=v.useState(!1);return o.jsx($n,{className:"grid-3 gap-2",name:"tap",value:e,onChange:t,options:["David","Nigel","Derek"]})},BA=`import { Radio } from '@/src/index.jsx'
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

export default ClassName`,X4=()=>o.jsx(R,{code:"className",Component:$A,Source:BA,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"className"})," property can be used to add a CSS class to the container element."]})}),IA=Object.freeze(Object.defineProperty({__proto__:null,default:X4},Symbol.toStringTag,{value:"Module"})),zA=()=>{const[e,t]=v.useState(!1);return o.jsx($n,{name:"tap",value:e,onChange:t,options:[{value:"david",text:"David St. Hubbins"},{value:"nigel",text:"Nigel Tufnel"},{value:"derek",text:"Derek Smalls"},{value:"john",text:'John "Stumpy" Pepys',disabled:!0},{value:"eric",text:'Eric "Stumpy Joe" Childs',disabled:!0},{value:"peter",text:'Peter "James" Bond',disabled:!0},{value:"mick",text:"Mick Shrimpton",disabled:!0}]})},FA=`import { Radio } from '@/src/index.jsx'
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

export default DisabledExample`,Q4=()=>o.jsx(R,{code:"disabled",Component:zA,Source:FA,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"disabled"})," property can be added to an option to disable it."]})}),UA=Object.freeze(Object.defineProperty({__proto__:null,default:Q4},Symbol.toStringTag,{value:"Module"})),HA=()=>{const[e,t]=v.useState(!1);return o.jsx($n,{inline:!0,name:"tap",value:e,onChange:t,options:["David","Nigel","Derek"]})},VA=`import { Radio } from '@/src/index.jsx'
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

export default InlineExample`,q4=()=>o.jsx(R,{code:"inline",Component:HA,Source:VA,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"inline"})," property can be set to create inline radio buttons."]})}),WA=Object.freeze(Object.defineProperty({__proto__:null,default:q4},Symbol.toStringTag,{value:"Module"})),ZA=()=>{const[e,t]=v.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx($n,{name:"tap",value:e,onChange:t,options:["David","Nigel","Derek"]}),!!e&&o.jsxs("div",{children:["Selected value: ",e]})]})},KA=`import { Radio } from '@/src/index.jsx'
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

export default OnChangeExample`,J4=()=>o.jsx(R,{code:"onChange",Component:ZA,Source:KA,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"onChange"})," property should be used to define a function to handle changes in the state.  This will typically be used to update the ",o.jsx("a",{href:"#value",className:"font-mono",children:"value"}),"."]})}),GA=Object.freeze(Object.defineProperty({__proto__:null,default:J4},Symbol.toStringTag,{value:"Module"})),YA=()=>{const[e,t]=v.useState(!1);return o.jsx($n,{value:e,onChange:t,options:[{value:"david",text:"David St. Hubbins"},{value:"nigel",text:"Nigel Tufnel"},{value:"derek",text:"Derek Smalls"}]})},XA=`import { Radio } from '@/src/index.jsx'
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

export default OptionsExample`,ex=()=>o.jsx(R,{code:"options",Component:YA,Source:XA,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"options"})," property should be used to define the values for each radio button.  These can be simple values (e.g. strings or numbers) as shown in the preceding examples.  For more complex cases you should define each element as an object containing a"," ",o.jsx("code",{children:"value"})," and any of ",o.jsx("code",{children:"text"}),", ",o.jsx("code",{children:"label"})," or"," ",o.jsx("code",{children:"name"})," for the displayed text."]})}),QA=Object.freeze(Object.defineProperty({__proto__:null,default:ex},Symbol.toStringTag,{value:"Module"})),qA=()=>{const[e,t]=v.useState(!1);return o.jsx($n,{name:"tap",value:e,onChange:t,options:["David","Nigel","Derek"]})},JA=`import { Radio } from '@/src/index.jsx'
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

export default ValueExample`,tx=()=>o.jsx(R,{code:"value",Component:qA,Source:JA,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"value"})," property should be used to define the current selected value.  This should be used in conjunction with"," ",o.jsx("a",{href:"#onchange",className:"font-mono",children:"onChange"})," to update the value."]})}),eP=Object.freeze(Object.defineProperty({__proto__:null,default:tx},Symbol.toStringTag,{value:"Module"})),tP=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Radio"}),o.jsx(G4,{}),o.jsxs(st,{tocName:"radio",children:[o.jsx(ue,{title:"Properties"}),o.jsx(tx,{}),o.jsx(J4,{}),o.jsx(X4,{}),o.jsx(q4,{}),o.jsx(Y4,{}),o.jsx(ue,{title:"Options"}),o.jsx(ex,{}),o.jsx(Q4,{})]})]}),nP=Object.freeze(Object.defineProperty({__proto__:null,default:tP},Symbol.toStringTag,{value:"Module"})),rP=["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger"],oP=()=>{const e=t=>rP.filter(n=>n.toLowerCase().indexOf(t.toLowerCase())!==-1);return o.jsx(Ki,{onSearch:e})},aP=`import { Search } from '@/src/index.jsx'

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

export default SearchExample`,nx=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"Search"}),' component implements the familiar "autocomplete" functionality.']}),o.jsx("p",{className:"cols-2 stack-desktop",children:"The user starts typing and after a short debounce delay a set of results matching their input is displayed. The user can then click on a result or use the keyboard to navigate through the results."}),o.jsx(Ce,{Component:oP,code:aP})]}),sP=Object.freeze(Object.defineProperty({__proto__:null,default:nx},Symbol.toStringTag,{value:"Module"})),lP=[{name:"Alan Aardvark",tel:"555-1245"},{name:"Amy Aardvark",tel:"555-2233"},{name:"Anne Aardvark",tel:"555-6565"},{name:"Bart Badger",tel:"555-4201"},{name:"Betty Badger",tel:"555-1111"},{name:"Bobby Badger",tel:"555-9876"},{name:"Brenda Badger",tel:"555-3443"},{name:"Brian Badger",tel:"555-1337"}],iP=()=>{const e=n=>o.jsxs("div",{className:"flex space baseline",children:[o.jsx("div",{children:n.name}),o.jsx("div",{className:"smaller",children:n.tel})]}),t=n=>lP.filter(r=>r.name.toLowerCase().indexOf(n.toLowerCase())!==-1);return o.jsx(Ki,{onSearch:t,displayResult:e})},cP=`import { Search } from '@/src/index.jsx'

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

export default DisplayResultExample`,rx=()=>o.jsx(R,{code:"displayResult",Component:iP,Source:cP,expand:!0,children:o.jsxs("p",{children:["If a result is a text string then it will be displayed as the result. If it's an object containing a ",o.jsx("code",{children:"text"}),","," ",o.jsx("code",{children:"label"})," or ",o.jsx("code",{children:"name"})," property then that will be used as the display value.  Otherwise you can provide a"," ",o.jsx("code",{children:"displayResult"})," function to display the result any way you like."]})}),uP=Object.freeze(Object.defineProperty({__proto__:null,default:rx},Symbol.toStringTag,{value:"Module"})),dP=[{id:100,name:"Alan Aardvark",tel:"555-1245"},{id:101,name:"Amy Aardvark",tel:"555-2233"},{id:102,name:"Anne Aardvark",tel:"555-6565"},{id:110,name:"Bart Badger",tel:"555-4201"},{id:111,name:"Betty Badger",tel:"555-1111"},{id:112,name:"Bobby Badger",tel:"555-9876"},{id:113,name:"Brenda Badger",tel:"555-3443"},{id:114,name:"Brian Badger",tel:"555-1337"}],pP=()=>{const e=n=>`#${n.id}: ${n.name} (${n.tel})`,t=n=>dP.filter(r=>r.name.toLowerCase().indexOf(n.toLowerCase())!==-1);return o.jsx(Ki,{onSearch:t,displayValue:e})},fP=`import { Search } from '@/src/index.jsx'

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

export default DisplayValueExample`,ox=()=>o.jsx(R,{code:"displayValue",Component:pP,Source:fP,expand:!0,children:o.jsxs("p",{children:["When a result is selected the same rules will be applied to display the result in the search input.  If it's not a string or an object containing one of the aforementioned properties then you should provide a ",o.jsx("code",{children:"displayValue"})," function to convert the result to a text string that can be displayed."]})}),hP=Object.freeze(Object.defineProperty({__proto__:null,default:ox},Symbol.toStringTag,{value:"Module"})),mP=["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Beatrice Badger","Belinda Badger","Ben Badger","Bert Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger","Brook Badger","Buzz Badger"],gP=()=>{const e=async t=>Pi(500).then(()=>mP.filter(n=>n.toLowerCase().indexOf(t.toLowerCase())!==-1));return o.jsx(Ki,{onSearch:e,debug:!0})},xP=`import { Search } from '@/src/index.jsx'
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

export default OnSearchExample`,ax=()=>o.jsx(R,{code:"onSearch",Component:gP,Source:xP,children:o.jsxs("p",{children:["You should provide an ",o.jsx("code",{children:"onSearch"})," function which will be passed the search input and should return an array of results.  This can be an asynchronous function if necessary.  For example, a function which makes an API request to fetch the matching results."]})}),vP=Object.freeze(Object.defineProperty({__proto__:null,default:ax},Symbol.toStringTag,{value:"Module"})),yP=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Search"}),o.jsx(nx,{}),o.jsxs(st,{tocName:"search",children:[o.jsx(ue,{title:"Properties"}),o.jsx(ax,{}),o.jsx(rx,{}),o.jsx(ox,{})]})]}),CP=Object.freeze(Object.defineProperty({__proto__:null,default:yP},Symbol.toStringTag,{value:"Module"})),jP=["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger","Colin Camel","David Donkey","Eddie Elephant","Franky Ferret","Gina Goat","Helen Horse","Ian Iguana","Juliet Jackdaw","Kevin Kangaroo","Linda Llama"],bP=()=>o.jsx(Ds,{options:jP}),SP=`import { Select } from '@/src/index.jsx'

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

export default SelectExample`,sx=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"Select"})," component implements a custom select input."]}),o.jsx(Ce,{Component:bP,code:SP})]}),wP=Object.freeze(Object.defineProperty({__proto__:null,default:sx},Symbol.toStringTag,{value:"Module"})),_P=[{name:"Alan Aardvark",tel:"555-1245"},{name:"Amy Aardvark",tel:"555-2233"},{name:"Anne Aardvark",tel:"555-6565"},{name:"Bart Badger",tel:"555-4201"},{name:"Betty Badger",tel:"555-1111"},{name:"Bobby Badger",tel:"555-9876"},{name:"Brenda Badger",tel:"555-3443"},{name:"Brian Badger",tel:"555-1337"}],kP=()=>{const e=t=>o.jsxs("div",{className:"flex space baseline",children:[o.jsx("div",{children:t.name}),o.jsx("div",{className:"smaller",children:t.tel})]});return o.jsx(Ds,{options:_P,displayOption:e})},TP=`import { Select } from '@/src/index.jsx'

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

export default DisplayOptionExample`,lx=()=>o.jsx(R,{code:"displayOption",Component:kP,Source:TP,expand:!0,children:o.jsxs("p",{children:["If an option is a text string then it will be displayed as it is. If it's an object containing a ",o.jsx("code",{children:"text"}),","," ",o.jsx("code",{children:"label"})," or ",o.jsx("code",{children:"name"})," property then that will be used as the display value.  Otherwise you can provide a"," ",o.jsx("code",{children:"displayOption"})," function to display the result any way you like."]})}),EP=Object.freeze(Object.defineProperty({__proto__:null,default:lx},Symbol.toStringTag,{value:"Module"})),LP=[{id:100,name:"Alan Aardvark",tel:"555-1245"},{id:101,name:"Amy Aardvark",tel:"555-2233"},{id:102,name:"Anne Aardvark",tel:"555-6565"},{id:110,name:"Bart Badger",tel:"555-4201"},{id:111,name:"Betty Badger",tel:"555-1111"},{id:112,name:"Bobby Badger",tel:"555-9876"},{id:113,name:"Brenda Badger",tel:"555-3443"},{id:114,name:"Brian Badger",tel:"555-1337"}],NP=()=>{const e=t=>o.jsxs("div",{className:"flex baseline",children:[o.jsxs("span",{className:"smaller mar-r-2",children:["#",t.id]})," ",t.name," (",t.tel,")"]});return o.jsx(Ds,{options:LP,displayValue:e})},RP=`import { Select } from '@/src/index.jsx'

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

export default DisplayValueExample`,ix=()=>o.jsx(R,{code:"displayValue",Component:NP,Source:RP,expand:!0,children:o.jsxs("p",{children:["When an option is selected the same rules will be applied to display the option in the search input.  If it's not a string or an object containing one of the aforementioned properties then you should provide a ",o.jsx("code",{children:"displayValue"})," function to convert the result to a text string that can be displayed."]})}),DP=Object.freeze(Object.defineProperty({__proto__:null,default:ix},Symbol.toStringTag,{value:"Module"})),OP=[{id:101,name:"Alan Aardvark"},{id:102,name:"Amy Aardvark"},{id:103,name:"Anne Aardvark"},{id:104,name:"Bart Badger"},{id:105,name:"Betty Badger"},{id:106,name:"Bobby Badger"},{id:107,name:"Brenda Badger"},{id:108,name:"Brian Badger"},{id:109,name:"Colin Camel",disabled:!0},{id:110,name:"Derek Donkey"}],MP=()=>o.jsx(Ds,{options:OP}),AP=`import { Select } from '@/src/index.jsx'

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

export default OptionsExample`,cx=()=>o.jsx(R,{code:"options",Component:MP,Source:AP,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"options"})," property should be used to provide an array of options that the user can select from.  Each element in the array can be a string, numerical value or an object.  The ",o.jsx("code",{children:"disabled"})," ","property can be used to mark an option as disabled."]})}),PP=Object.freeze(Object.defineProperty({__proto__:null,default:cx},Symbol.toStringTag,{value:"Module"})),$P=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Select"}),o.jsx(sx,{}),o.jsxs(st,{tocName:"select",children:[o.jsx(ue,{title:"Properties"}),o.jsx(cx,{}),o.jsx(lx,{}),o.jsx(ix,{}),o.jsx(Z,{code:"disabled",children:"Boolean flag to set the select input to be disabled."}),o.jsxs(Z,{code:"placeholder",children:["Set the placeholder text.  The default is ",o.jsx("code",{children:"Search"}),"."]}),o.jsxs(Z,{code:"noOptions",children:["Set the text displayed when there are no options to select from. The default is ",o.jsx("code",{children:"No options"}),"."]}),o.jsxs(Gr,{children:[o.jsxs("div",{children:[o.jsx(ue,{title:"Event Handlers"}),o.jsxs(Z,{code:"onLoad",children:["Called when the component is first loaded.  The handler is passed a reference to the ",o.jsx("code",{children:"SearchContext"})," object."]}),o.jsxs(Z,{code:"onUnload",children:["Called when the component is unloaded.  The handler is passed a reference to the ",o.jsx("code",{children:"SearchContext"})," object."]}),o.jsx(Z,{code:"onFocus",children:"Called when the component gains focus."}),o.jsx(Z,{code:"onBlur",children:"Called when the component loses focus."}),o.jsx(Z,{code:"onClick",children:"Called when the component is clicked."}),o.jsx(Z,{code:"onOpen",children:"Called when the component is opened and selectable options are displayed."}),o.jsx(Z,{code:"onClose",children:"Called when the component is closed and selectable options are hidden."}),o.jsx(Z,{code:"onSelect",children:"Called when an option is selected.  The selection option is passed as an argument."})]}),o.jsxs("div",{className:"flow",children:[o.jsx(ue,{title:"CSS Classes"}),o.jsxs(Z,{code:"placeholderClass",children:["Set the class for the placeholder text. The default is ",o.jsx("code",{children:"placeholder"}),"."]}),o.jsxs(Z,{code:"inputClass",children:["Set the class for the input element. The default is ",o.jsx("code",{children:"input"}),"."]}),o.jsxs(Z,{code:"selectingClass",children:["Set the class added when a selection is in place. The default is ",o.jsx("code",{children:"selecting"}),"."]}),o.jsxs(Z,{code:"optionsClass",children:["Set the class added for the options container. The default is ",o.jsx("code",{children:"menu border bdr-1"}),"."]}),o.jsxs(Z,{code:"optionClass",children:["Set the class added to each option element. The default is ",o.jsx("code",{children:"item"}),"."]}),o.jsxs(Z,{code:"activeClass",children:["Set the class added to an option that is currently active. The default is ",o.jsx("code",{children:"active"}),"."]}),o.jsxs(Z,{code:"noOptionsClass",children:["Set the class added to the element displayed when there are no options to select from. The default is ",o.jsx("code",{children:"none"}),"."]})]}),o.jsxs("div",{className:"flow",children:[o.jsx(ue,{title:"Components"}),o.jsx(Z,{code:"Content",children:"Renders the content of the select component."}),o.jsx(Z,{code:"Input",children:"Renders the input field."}),o.jsx(Z,{code:"Options",id:"Options-component",children:"Renders the selectable options."}),o.jsx(Z,{code:"Option",children:"Renders an individual option."}),o.jsx(Z,{code:"NoOptions",id:"NoOptions-component",children:"Renders a message indicating that there are no options to select from."})]})]})]})]}),BP=Object.freeze(Object.defineProperty({__proto__:null,default:$P},Symbol.toStringTag,{value:"Module"})),Ch=[{id:100,animal:"Ant"},{id:101,animal:"Bat"},{id:102,animal:"Cat"},{id:103,animal:"Dog"}],IP=()=>{const[e,t]=ee.useState(!1),[n,r]=ee.useState(Ch),a=i=>{r(i),t(!0)},s=()=>{r(Ch.map(i=>({...i,moved:!1}))),t(!1)},l=({item:i,setNodeRef:c,style:u,listeners:d,...p})=>o.jsx("div",{ref:c,style:u,className:`sortable border item mar-r-2 pad pad-h-2 ${i.moved?"moved":""}`,...p,...d,children:i.animal});return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"flex space middle mar-b-4",children:[o.jsx("h3",{children:"Drag Items to Set Order"}),e&&o.jsx("div",{children:o.jsx(M,{color:"brown",size:"smallest",text:"Reset Order",iconLeft:"rotate-flipx",onClick:s})})]}),o.jsx("div",{className:"sortable list Horizontal",children:o.jsx(q_,{items:n,Item:l,setOrder:a})})]})},zP=`import { HorizontalSort, Button } from '@/src/index.jsx'

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
      className={\`sortable border item mar-r-2 pad pad-h-2 \${item.moved ? 'moved' : ''}\`}
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

export default HorizontalSortExample`,ux=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"HorizontalSort"})," component works exactly the same but constricts the items to be sorted horizontally."]}),o.jsx(Ce,{Component:IP,code:zP})]}),FP=Object.freeze(Object.defineProperty({__proto__:null,default:ux},Symbol.toStringTag,{value:"Module"})),gi=[{id:100,animal:"Alan Aardvark"},{id:101,animal:"Brian Badger"},{id:102,animal:"Colin Camel"},{id:103,animal:"David Dog"},{id:104,animal:"Edward Elephant"},{id:105,animal:"Frank Ferret"},{id:106,animal:"Gerald Giraffe"},{id:107,animal:"Hector Hedgehog"}],UP=()=>{const[e,t]=ee.useState(!1),[n,r]=ee.useState(gi),a=i=>{r(i),t(!0)},s=()=>{r(gi.map(i=>({...i,moved:!1}))),t(!1)},l=({item:i,setNodeRef:c,style:u,listeners:d,...p})=>o.jsx("div",{ref:c,style:u,className:`sortable item border mar-r-2 mar-b-2 pad pad-h-2 ${i.moved?"moved":""}`,...p,...d,children:i.animal});return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"flex space middle mar-b-4",children:[o.jsx("h3",{children:"Drag Items to Set Order"}),e&&o.jsx("div",{children:o.jsx(M,{color:"brown",size:"smallest",text:"Reset Order",iconLeft:"rotate-flipx",onClick:s})})]}),o.jsx("div",{className:`sortable ${e?"changed":""}`,children:o.jsx(Fp,{items:n,Item:l,setOrder:a})})]})},HP=`import { Sortable, Button } from '@/src/index.jsx'

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
      className={\`sortable item border mar-r-2 mar-b-2 pad pad-h-2 \${item.moved ? 'moved' : ''}\`}
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

export default SortableExample`,dx=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"Sortable"})," component is a wrapper around"," ",o.jsx("a",{href:"https://dndkit.com/",children:"dnd kit"})," for creating sortable components."]}),o.jsx(Ce,{Component:UP,code:HP})]}),VP=Object.freeze(Object.defineProperty({__proto__:null,default:dx},Symbol.toStringTag,{value:"Module"})),WP=()=>{const[e,t]=ee.useState(!1),[n,r]=ee.useState(gi),a=i=>{r(i),t(!0)},s=()=>{r(gi.map(i=>({...i,moved:!1}))),t(!1)},l=({item:i,setNodeRef:c,style:u,listeners:d,...p})=>o.jsx("div",{ref:c,style:u,className:`sortable item border mar-b-2 pad pad-h-2 ${i.moved?"moved":""}`,...p,...d,children:i.animal});return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"flex space middle mar-b-4",children:[o.jsx("h3",{className:"mar-t-none",children:"Drag Items to Set Order"}),e&&o.jsx("div",{children:o.jsx(M,{color:"brown",size:"smallest",text:"Reset Order",iconLeft:"rotate-flipx",onClick:s})})]}),o.jsx("div",{className:"sortable list vertical",children:o.jsx(hg,{items:n,Item:l,setOrder:a})})]})},ZP=`import { VerticalSort, Button } from '@/src/index.jsx'

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
      className={\`sortable item border mar-b-2 pad pad-h-2 \${item.moved ? 'moved' : ''}\`}
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

export default VerticalSortExample`,px=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"VerticalSort"})," component works exactly the same but constricts the items to be sorted vertically."]}),o.jsx(Ce,{Component:WP,code:ZP})]}),KP=Object.freeze(Object.defineProperty({__proto__:null,default:px},Symbol.toStringTag,{value:"Module"})),GP=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Sortable"}),o.jsx(dx,{}),o.jsx("h1",{children:"Vertical Sort"}),o.jsx(px,{}),o.jsx("h1",{children:"Horizontal Sort"}),o.jsx(ux,{}),o.jsx(st,{tocName:"sortable",children:o.jsx(Gr,{children:o.jsxs("div",{className:"flow",children:[o.jsx(ue,{title:"Properties"}),o.jsxs(Z,{code:"items",children:["An array of items to sort.  Each should be an object which must contain an ",o.jsx("code",{children:"id"})," property to uniquely identify it."]}),o.jsxs(Z,{code:"Item",children:["A component used to render each item.  It will be passed an"," ",o.jsx("code",{children:"item"})," from the list of items, ",o.jsx("code",{children:"setNodeRef"})," ","which must be added to the generate element via the ",o.jsx("code",{children:"ref"})," ","property, a ",o.jsx("code",{children:"style"})," object containing style,",o.jsx("code",{children:"listeners"})," and other ",o.jsx("code",{children:"props"})," which should be added to the element."]}),o.jsxs(Z,{code:"setOrder",children:["A function which will be called when the order of items changes. It will be pass an array containing the ",o.jsx("code",{children:"items"})," in the new order."]})]})})})]}),YP=Object.freeze(Object.defineProperty({__proto__:null,default:GP},Symbol.toStringTag,{value:"Module"})),XP=`## using npm
$ npm add @abw/badger-react-ui

## using yarn
$ yarn add @abw/badger-react-ui

## using pnpm
$ pnpm add @abw/badger-react-ui`,QP="import '@abw/badger-react-ui/styles/badger-css-react-ui.min.css';",qP="@import '@abw/badger-react-ui/styles/badger-css-react-ui.scss';",JP=`// If you're already importing Badger CSS styles
// something like this...
import '@abw/badger-css/styles/badger.min.css';

// ...then you only need to add this line to get
// the additional styles from Badger React UI
import '@abw/badger-react-ui/styles/badger-react-ui.min.css';`,e$=`// If you're already importing Badger CSS styles
// something like this...
import '@abw/badger-css/styles/badger.scss';

// ...then you only need to add this line to get
// the additional styles from Badger React UI
import '@abw/badger-react-ui/styles/badger-react-ui.scss';
`,t$=()=>o.jsxs("div",{className:"prose flow",children:[o.jsx("h1",{children:"Installation"}),o.jsx("h2",{children:"Adding to a Javascript Project"}),o.jsxs("p",{children:["Add ",o.jsx("code",{children:"@abw/badger-react-ui"})," to your Javascript project using your favourite package manager."]}),o.jsx(tr,{code:XP,caption:"Installing",language:"shell",className:"mar-b-8",expand:!0}),o.jsx("h2",{children:"Importing the CSS"}),o.jsxs(Gr,{children:[o.jsx("p",{children:"The precise details on how you import the CSS will vary depending on what framework and bundler you're using.  For a React app using Vite or running under Next.js, for example, you can add the CSS file to your main application script as show below."}),o.jsxs("p",{children:["For other frameworks and/or bundlers you should consult the documentation on how to import a CSS file from a module in your"," ",o.jsx("code",{children:"node_modules"})," directory."]})]}),o.jsx(tr,{code:QP,caption:"Combined CSS for Badger CSS / React UI",language:"js",className:"mar-b-8",expand:!0}),o.jsx("h2",{children:"Importing the SCSS"}),o.jsxs(Gr,{children:[o.jsx("p",{children:"If you're using SASS/SCSS to build your stylesheet then you can import the SCSS components."}),o.jsx("p",{children:"Add the following line to your main SCSS stylesheet source."})]}),o.jsx(tr,{code:qP,caption:"Combined SCSS for Badger CSS / React UI",language:"scss",className:"mar-b-8",expand:!0}),o.jsx("h2",{children:"Includes Badger CSS!"}),o.jsxs("p",{children:["Note that the examples shown above import stylesheets that"," ",o.jsx("b",{children:"include"})," the styles from Badger CSS.  If you're already using Badger CSS and have it imported, or if you've customised your installation of Badger CSS, then you only need to import the additional styles for Badger React UI."]}),o.jsx(tr,{code:JP,caption:"Separate CSS for Badger CSS / React UI",language:"js",className:"mar-b-8",expand:!0}),o.jsx(tr,{code:e$,caption:"Separate SCSS for Badger CSS / React UI",language:"scss",className:"mar-b-8",expand:!0})]}),n$=Object.freeze(Object.defineProperty({__proto__:null,default:t$},Symbol.toStringTag,{value:"Module"})),r$=e=>v.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 900 348",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",xmlSpace:"preserve","xmlns:serif":"http://www.serif.com/",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:2},...e},v.createElement("path",{className:"white",d:"M251.572,212.02C254.513,216.061 254.715,224.14 250.095,227.707C250.444,223.032 248.285,217.636 246.595,215.207C245.351,213.421 240.529,209.129 235.734,208.678C239.528,206.432 248.479,207.771 251.572,212.02ZM384.14,296.071C385.221,300.139 369.105,297.678 368.976,310.316C368.912,316.686 371.784,320.829 368.158,321.337C364.186,321.893 363.702,317.912 363.009,312.67C361.525,301.448 369.403,297.943 376.939,295.687C383.239,293.8 383.721,294.493 384.14,296.071ZM253.718,205.387C253.325,205.165 252.924,204.95 252.515,204.744C240.306,198.572 226.195,201.866 221.023,212.097C216.954,220.147 219.624,230.108 226.897,236.996C223.855,235.725 220.886,234.082 218.121,232C201.872,219.763 198.65,197.554 202.498,192.469C205.797,188.109 229.508,185.044 245.757,197.281C248.897,199.645 251.533,202.419 253.718,205.387ZM237.701,38.979C234.959,40.644 229.11,29.763 219.15,31.701C213.297,32.839 209.964,30.344 213.732,27.34C224.434,18.806 242.755,35.909 237.701,38.979ZM102.358,65.632C92.93,59.118 82.319,55.79 70.261,59.171C61.606,61.598 55.943,67.285 53.203,74.67C51.916,74.775 50.609,74.911 49.293,75.073C41.358,76.053 33.068,77.961 26.855,79.508C45.336,54.696 68.07,46.037 90.212,45.935L91.775,45.928L92.073,44.393C93.513,36.977 89.339,29.817 78.425,24.264C102.932,19.041 133.157,24.498 149.387,33.721L151.514,34.93L152.164,32.571C153.117,29.113 152.884,20.563 147.007,12.944C177.743,18.398 201.051,28.288 219.375,41.206C253.271,69.998 271.19,107.581 286.422,143.401C303.117,182.661 316.606,219.801 344.235,241.041C344.731,241.562 345.232,242.081 345.737,242.598C354.202,251.26 369.687,264.151 388.439,280.71C390.567,282.59 392.536,284.445 394.289,286.258C390.175,286.465 384.884,287.861 378.121,289.401C355.898,294.457 355.058,304.229 357.619,320.184C358.932,328.361 362.585,332.134 367.854,333.381C347.657,338.931 337.347,342.519 312.425,337.814C273.532,330.471 236.683,316.046 225.943,310.994C225.749,310.608 225.423,310.285 224.995,310.101C210.606,303.913 200.922,296.04 196.833,286.988C198.796,285.944 200.367,284.755 201.74,283.804C202.604,283.205 202.819,282.017 202.22,281.154C201.622,280.29 200.434,280.074 199.57,280.673C196.577,282.748 192.528,286.255 184.628,285.578C183.581,285.489 182.657,286.266 182.568,287.313C182.478,288.361 183.256,289.284 184.303,289.373C187.94,289.685 190.882,289.256 193.326,288.475C197.252,297.211 205.873,305.078 218.736,311.412C193.53,320.617 171.273,314.508 151.338,302.875C130.029,290.441 111.338,271.747 94.517,258.202C80.516,246.928 67.672,239.285 55.79,240.915C48.382,241.931 41.226,246.463 34.375,256.107C23.226,231.606 38.024,207.024 52.658,191.434L54.205,189.786L52.319,188.541C38.022,179.099 21.81,184.908 11.009,196.975C10.204,187.276 14.741,173.112 22.182,160.21C29.69,147.192 40.209,135.4 51.636,130.932C122.17,117.473 156.365,176.933 192.036,228.629C212.984,258.988 259.699,294.806 348.432,323.461C343.645,308.274 345.837,301.003 349.276,294.022C327.909,284.035 301.478,267.497 284.086,236.018C236.493,149.873 215.639,88.568 146.875,71.303C134.894,68.295 119.263,65.091 102.358,65.632ZM102.275,79.762C100.823,87.371 78.096,65.294 73.617,77.189C65.317,99.228 57.382,86.649 59.352,80.667C69.456,49.974 103.609,72.771 102.275,79.762Z",style:{fill:"white"}}),v.createElement("path",{className:"black",d:"M52.054,78.596C51.294,78.672 50.529,78.759 49.759,78.854C39.593,80.108 28.834,82.925 22.777,84.472L17.915,85.714L20.728,81.559C40.142,52.889 64.62,42.703 88.525,42.149C88.888,35.685 83.351,30.024 71.924,25.526L66.722,23.478L72.092,21.924C97.213,14.653 130.162,19.649 148.812,29.092C148.924,24.696 147.199,17.339 140.471,11.578L135.382,7.22L142.003,8.25C168.067,12.303 189.097,19.357 206.402,28.658C206.575,28.721 206.748,28.783 206.921,28.846C208.323,24.341 212.385,20.472 219.865,21.145C239.675,22.925 243.917,32.841 244.961,51.125C270.1,72.457 287.235,102.584 300.677,133.136C312.72,160.511 321.799,188.221 331.031,210.219C334.652,218.847 338.295,226.594 342.151,233.093C344.174,235.417 346.275,237.699 348.461,239.935C356.894,248.564 372.28,261.359 390.96,277.855C394.6,281.069 397.773,284.243 400.276,287.281C402.859,288.644 404.62,291.472 405.778,296.536C405.975,297.173 406.119,297.795 406.209,298.403C406.253,298.697 406.287,298.994 406.314,299.294C406.615,301.13 406.861,303.2 407.058,305.527C407.84,314.777 405.022,326.993 390.631,330.7C387.826,331.422 385.121,332.093 382.547,332.63C378.775,333.843 375.504,334.896 375.505,334.895C353.988,343.064 340.05,346.906 311.718,341.557C270.836,333.838 232.195,318.357 223.053,313.826C195.401,325.115 171.094,318.814 149.418,306.165C127.941,293.633 109.081,274.82 92.128,261.169C85.494,255.827 79.163,251.286 73.076,248.283C67.258,245.412 61.69,243.95 56.308,244.689C49.102,245.677 42.338,250.617 35.728,260.909L33.983,263.626L32.45,260.785C18.325,234.619 32.7,207.872 48.29,190.557C35.023,183.325 20.386,190.519 11.384,202.521L9.087,205.583L8.03,201.904C5.111,191.745 9.777,174.095 18.883,158.307C24.331,148.86 31.344,140.108 39.121,133.986C28.037,137.259 16.107,142.234 3.209,149.173C16.216,114.812 33.291,93.85 51.552,81.51C51.677,80.52 51.845,79.548 52.054,78.596ZM251.572,212.02C248.479,207.771 239.528,206.432 235.734,208.678C240.529,209.129 245.351,213.421 246.595,215.207C248.285,217.636 250.444,223.032 250.095,227.707C254.715,224.14 254.513,216.061 251.572,212.02ZM384.14,296.071C383.721,294.493 383.239,293.8 376.939,295.687C369.403,297.943 361.525,301.448 363.009,312.67C363.702,317.912 364.186,321.893 368.158,321.337C371.784,320.829 368.912,316.686 368.976,310.316C369.105,297.678 385.221,300.139 384.14,296.071ZM253.718,205.387C251.533,202.419 248.897,199.645 245.757,197.281C229.508,185.044 205.797,188.109 202.498,192.469C198.65,197.554 201.872,219.763 218.121,232C220.886,234.082 223.855,235.725 226.897,236.996C219.624,230.108 216.954,220.147 221.023,212.097C226.195,201.866 240.306,198.572 252.515,204.744C252.924,204.95 253.325,205.165 253.718,205.387ZM237.701,38.979C242.755,35.909 224.434,18.806 213.732,27.34C209.964,30.344 213.297,32.839 219.15,31.701C229.11,29.763 234.959,40.644 237.701,38.979ZM102.358,65.632C119.263,65.091 134.894,68.295 146.875,71.303C215.639,88.568 236.493,149.873 284.086,236.018C301.478,267.497 327.909,284.035 349.276,294.022C345.837,301.003 343.645,308.274 348.432,323.461C259.699,294.806 212.984,258.988 192.036,228.629C156.365,176.933 122.17,117.473 51.636,130.932C40.209,135.4 29.69,147.192 22.182,160.21C14.741,173.112 10.204,187.276 11.009,196.975C21.81,184.908 38.022,179.099 52.319,188.541L54.205,189.786L52.658,191.434C38.024,207.024 23.226,231.606 34.375,256.107C41.226,246.463 48.382,241.931 55.79,240.915C67.672,239.285 80.516,246.928 94.517,258.202C111.338,271.747 130.029,290.441 151.338,302.875C171.273,314.508 193.53,320.617 218.736,311.412C205.873,305.078 197.252,297.211 193.326,288.475C190.882,289.256 187.94,289.685 184.303,289.373C183.256,289.284 182.478,288.361 182.568,287.313C182.657,286.266 183.581,285.489 184.628,285.578C192.528,286.255 196.577,282.748 199.57,280.673C200.434,280.074 201.622,280.29 202.22,281.154C202.819,282.017 202.604,283.205 201.74,283.804C200.367,284.755 198.796,285.944 196.833,286.988C200.922,296.04 210.606,303.913 224.995,310.101C225.423,310.285 225.749,310.608 225.943,310.994C236.683,316.046 273.532,330.471 312.425,337.814C337.347,342.519 347.657,338.931 367.854,333.381C362.585,332.134 358.932,328.361 357.619,320.184C355.058,304.229 355.898,294.457 378.121,289.401C384.884,287.861 390.175,286.465 394.289,286.258C392.536,284.445 390.567,282.59 388.439,280.71C369.687,264.151 354.202,251.26 345.737,242.598C345.232,242.081 344.731,241.562 344.235,241.041C316.606,219.801 303.117,182.661 286.422,143.401C271.19,107.581 253.271,69.998 219.375,41.206C201.051,28.288 177.743,18.398 147.007,12.944C152.884,20.563 153.117,29.113 152.164,32.571L151.514,34.93L149.387,33.721C133.157,24.498 102.932,19.041 78.425,24.264C89.339,29.817 93.513,36.977 92.073,44.393L91.775,45.928L90.212,45.935C68.07,46.037 45.336,54.696 26.855,79.508C33.068,77.961 41.358,76.053 49.293,75.073C50.609,74.911 51.916,74.775 53.203,74.67C55.943,67.285 61.606,61.598 70.261,59.171C82.319,55.79 92.93,59.118 102.358,65.632ZM102.275,79.762C103.609,72.771 69.456,49.974 59.352,80.667C57.382,86.649 65.317,99.228 73.617,77.189C78.096,65.294 100.823,87.371 102.275,79.762Z"}),v.createElement("path",{className:"badger",d:"M418.81,39.948C419.704,39.68 421.135,39.389 423.103,39.076C425.07,38.763 427.082,38.607 429.139,38.607C431.107,38.607 432.873,38.741 434.438,39.009C436.003,39.277 437.322,39.814 438.396,40.619C439.469,41.424 440.274,42.519 440.81,43.905C441.347,45.292 441.615,47.103 441.615,49.338L441.615,62.485C443.851,61.591 445.975,60.965 447.987,60.607C449.999,60.249 452.213,60.07 454.628,60.07C458.92,60.07 462.989,60.831 466.835,62.351C470.681,63.871 474.079,66.085 477.03,68.991C479.982,71.898 482.307,75.497 484.006,79.79C485.705,84.083 486.555,89.046 486.555,94.681C486.555,100.494 485.683,105.569 483.939,109.907C482.195,114.244 479.758,117.844 476.628,120.706C473.498,123.567 469.675,125.736 465.158,127.212C460.642,128.687 455.656,129.425 450.201,129.425C444.298,129.425 439.29,128.732 435.176,127.346C431.062,125.96 427.574,124.238 424.712,122.181C420.777,119.409 418.81,115.831 418.81,111.449L418.81,39.948ZM450.201,111.449C454.314,111.449 457.512,110.041 459.792,107.224C462.073,104.406 463.213,100.226 463.213,94.681C463.213,89.046 462.05,84.843 459.725,82.071C457.4,79.298 454.27,77.912 450.335,77.912C448.546,77.912 447.003,78.091 445.707,78.449C444.41,78.806 443.001,79.343 441.481,80.059L441.481,109.303C442.465,109.929 443.65,110.443 445.036,110.846C446.422,111.248 448.144,111.449 450.201,111.449ZM524.787,60.07C529.617,60.07 534.021,60.562 538.001,61.546C541.981,62.53 545.379,64.028 548.196,66.04C551.013,68.052 553.182,70.601 554.702,73.686C556.223,76.772 556.983,80.416 556.983,84.62L556.983,114.669C556.983,116.994 556.335,118.895 555.038,120.37C553.741,121.846 552.198,123.12 550.41,124.193C544.597,127.681 536.413,129.425 525.86,129.425C521.121,129.425 516.85,128.978 513.049,128.084C509.248,127.189 505.984,125.848 503.256,124.059C500.529,122.271 498.427,119.99 496.951,117.218C495.476,114.445 494.738,111.226 494.738,107.559C494.738,101.388 496.571,96.648 500.238,93.339C503.905,90.03 509.584,87.973 517.275,87.168L534.848,85.29L534.848,84.351C534.848,81.758 533.708,79.902 531.428,78.784C529.147,77.666 525.86,77.107 521.568,77.107C518.169,77.107 514.86,77.465 511.641,78.18C508.421,78.896 505.515,79.79 502.921,80.863C501.758,80.059 500.775,78.829 499.97,77.174C499.165,75.52 498.762,73.798 498.762,72.01C498.762,69.684 499.321,67.829 500.439,66.442C501.557,65.056 503.279,63.871 505.604,62.887C508.198,61.904 511.261,61.188 514.793,60.741C518.326,60.294 521.657,60.07 524.787,60.07ZM525.86,112.791C527.381,112.791 529.058,112.634 530.891,112.321C532.724,112.008 534.088,111.583 534.983,111.047L534.983,100.315L525.324,101.12C522.82,101.299 520.763,101.835 519.153,102.73C517.543,103.624 516.738,104.965 516.738,106.754C516.738,108.543 517.431,109.996 518.818,111.114C520.204,112.232 522.551,112.791 525.86,112.791ZM568.117,94.681C568.117,88.778 569.012,83.658 570.8,79.321C572.589,74.983 575.071,71.384 578.245,68.522C581.42,65.66 585.132,63.536 589.38,62.15C593.628,60.763 598.211,60.07 603.13,60.07C604.919,60.07 606.663,60.227 608.362,60.54C610.061,60.853 611.447,61.233 612.52,61.68L612.52,39.948C613.415,39.68 614.846,39.389 616.813,39.076C618.781,38.763 620.793,38.607 622.85,38.607C624.817,38.607 626.584,38.741 628.149,39.009C629.714,39.277 631.033,39.814 632.106,40.619C633.179,41.424 633.984,42.519 634.521,43.905C635.057,45.292 635.326,47.103 635.326,49.338L635.326,112.925C635.326,117.128 633.358,120.482 629.423,122.986C626.83,124.685 623.476,126.183 619.362,127.48C615.248,128.777 610.508,129.425 605.142,129.425C599.329,129.425 594.12,128.62 589.514,127.011C584.908,125.401 581.018,123.076 577.843,120.035C574.668,116.994 572.253,113.35 570.599,109.102C568.944,104.854 568.117,100.047 568.117,94.681ZM606.215,77.912C601.386,77.912 597.675,79.298 595.081,82.071C592.488,84.843 591.191,89.046 591.191,94.681C591.191,100.226 592.398,104.406 594.813,107.224C597.227,110.041 600.715,111.449 605.276,111.449C606.886,111.449 608.339,111.203 609.636,110.711C610.933,110.22 611.939,109.661 612.655,109.035L612.655,79.522C610.866,78.449 608.72,77.912 606.215,77.912ZM681.339,60.07C686.436,60.07 691.064,60.719 695.223,62.016C699.382,63.312 702.892,64.989 705.754,67.046C707.542,68.298 708.951,69.684 709.979,71.205C711.008,72.725 711.522,74.693 711.522,77.107L711.522,124.059C711.522,128.799 710.628,132.891 708.839,136.334C707.051,139.777 704.613,142.639 701.528,144.919C698.443,147.2 694.821,148.877 690.662,149.95C686.503,151.023 682.054,151.56 677.314,151.56C669.176,151.56 662.781,150.464 658.131,148.273C653.48,146.082 651.155,142.527 651.155,137.608C651.155,135.551 651.58,133.74 652.43,132.175C653.279,130.61 654.241,129.425 655.314,128.62C657.907,130.051 660.836,131.259 664.101,132.242C667.365,133.226 670.741,133.718 674.229,133.718C679.058,133.718 682.904,132.913 685.766,131.303C688.627,129.694 690.058,127.1 690.058,123.523L690.058,121.376C686.392,122.986 681.92,123.791 676.643,123.791C672.619,123.791 668.796,123.187 665.174,121.98C661.552,120.773 658.377,118.895 655.649,116.346C652.922,113.797 650.73,110.51 649.076,106.486C647.421,102.461 646.594,97.677 646.594,92.132C646.594,86.677 647.466,81.937 649.21,77.912C650.954,73.888 653.369,70.556 656.454,67.918C659.54,65.28 663.206,63.312 667.454,62.016C671.702,60.719 676.33,60.07 681.339,60.07ZM689.656,79.522C689.03,79.164 688.113,78.806 686.906,78.449C685.699,78.091 684.201,77.912 682.412,77.912C678.03,77.912 674.743,79.142 672.552,81.601C670.361,84.061 669.265,87.571 669.265,92.132C669.265,97.319 670.361,101.053 672.552,103.333C674.743,105.614 677.538,106.754 680.936,106.754C684.603,106.754 687.51,105.904 689.656,104.205L689.656,79.522ZM760.084,129.425C754.807,129.425 749.911,128.687 745.395,127.212C740.878,125.736 736.943,123.523 733.59,120.571C730.236,117.62 727.598,113.909 725.675,109.437C723.752,104.965 722.791,99.734 722.791,93.742C722.791,87.839 723.752,82.764 725.675,78.516C727.598,74.268 730.124,70.78 733.254,68.052C736.384,65.325 739.962,63.312 743.986,62.016C748.011,60.719 752.124,60.07 756.328,60.07C761.068,60.07 765.383,60.786 769.273,62.217C773.163,63.648 776.517,65.615 779.334,68.119C782.151,70.623 784.342,73.619 785.908,77.107C787.473,80.595 788.255,84.396 788.255,88.51C788.255,91.551 787.406,93.876 785.706,95.486C784.007,97.095 781.637,98.124 778.596,98.571L745.462,103.535C746.445,106.486 748.458,108.699 751.498,110.175C754.539,111.651 758.027,112.388 761.962,112.388C765.629,112.388 769.094,111.919 772.359,110.98C775.623,110.041 778.283,108.945 780.34,107.693C781.771,108.587 782.979,109.84 783.962,111.449C784.946,113.059 785.438,114.758 785.438,116.547C785.438,120.571 783.56,123.567 779.804,125.535C776.942,127.055 773.722,128.084 770.145,128.62C766.568,129.157 763.214,129.425 760.084,129.425ZM756.328,76.705C754.181,76.705 752.326,77.063 750.761,77.778C749.196,78.493 747.921,79.41 746.937,80.528C745.954,81.646 745.216,82.898 744.724,84.284C744.232,85.67 743.941,87.079 743.852,88.51L766.791,84.754C766.523,82.965 765.539,81.176 763.84,79.388C762.141,77.599 759.637,76.705 756.328,76.705ZM822.061,127.145C821.166,127.413 819.758,127.681 817.835,127.95C815.912,128.218 813.922,128.352 811.865,128.352C809.898,128.352 808.131,128.218 806.566,127.95C805.001,127.681 803.682,127.145 802.609,126.34C801.536,125.535 800.709,124.439 800.127,123.053C799.546,121.667 799.255,119.856 799.255,117.62L799.255,77.376C799.255,75.319 799.635,73.552 800.396,72.077C801.156,70.601 802.251,69.282 803.682,68.119C805.113,66.957 806.879,65.906 808.981,64.967C811.083,64.028 813.341,63.201 815.756,62.485C818.17,61.77 820.674,61.211 823.268,60.808C825.861,60.406 828.455,60.205 831.049,60.205C835.341,60.205 838.74,61.032 841.244,62.686C843.748,64.341 845,67.046 845,70.802C845,72.054 844.821,73.284 844.463,74.491C844.106,75.699 843.659,76.794 843.122,77.778C841.244,77.778 839.321,77.867 837.354,78.046C835.386,78.225 833.463,78.493 831.585,78.851C829.707,79.209 827.941,79.589 826.286,79.991C824.632,80.394 823.223,80.863 822.061,81.4L822.061,127.145Z"}),v.createElement("path",{className:"react-ui",d:"M456.264,259.551C455.489,259.783 454.269,260.016 452.604,260.248C450.939,260.48 449.215,260.596 447.434,260.596C445.73,260.596 444.2,260.48 442.845,260.248C441.49,260.016 440.347,259.551 439.418,258.854C438.488,258.157 437.772,257.208 437.268,256.007C436.765,254.807 436.513,253.239 436.513,251.302L436.513,216.449C436.513,214.667 436.842,213.138 437.501,211.86C438.159,210.582 439.108,209.439 440.347,208.432C441.586,207.426 443.116,206.516 444.936,205.702C446.756,204.889 448.712,204.173 450.803,203.553C452.894,202.933 455.063,202.449 457.309,202.101C459.555,201.752 461.801,201.578 464.047,201.578C467.765,201.578 470.708,202.294 472.877,203.727C475.046,205.16 476.13,207.503 476.13,210.756C476.13,211.84 475.975,212.905 475.665,213.951C475.355,214.997 474.968,215.945 474.504,216.797C472.877,216.797 471.212,216.875 469.508,217.03C467.804,217.185 466.139,217.417 464.512,217.727C462.886,218.037 461.356,218.366 459.923,218.714C458.49,219.063 457.27,219.469 456.264,219.934L456.264,259.551ZM511.913,261.526C507.343,261.526 503.103,260.887 499.191,259.609C495.28,258.331 491.872,256.414 488.968,253.858C486.063,251.302 483.778,248.088 482.113,244.215C480.448,240.343 479.615,235.812 479.615,230.623C479.615,225.511 480.448,221.115 482.113,217.436C483.778,213.757 485.966,210.737 488.677,208.374C491.388,206.012 494.486,204.269 497.971,203.146C501.457,202.023 505.02,201.462 508.66,201.462C512.765,201.462 516.502,202.081 519.871,203.321C523.24,204.56 526.145,206.264 528.584,208.432C531.024,210.601 532.922,213.196 534.277,216.216C535.633,219.237 536.31,222.529 536.31,226.092C536.31,228.725 535.574,230.739 534.103,232.133C532.631,233.527 530.579,234.418 527.945,234.805L499.249,239.104C500.101,241.659 501.844,243.576 504.477,244.854C507.111,246.132 510.131,246.771 513.539,246.771C516.715,246.771 519.716,246.365 522.543,245.551C525.37,244.738 527.674,243.789 529.456,242.705C530.695,243.48 531.741,244.564 532.593,245.958C533.445,247.352 533.871,248.824 533.871,250.373C533.871,253.858 532.244,256.453 528.991,258.157C526.513,259.473 523.724,260.364 520.626,260.829C517.528,261.294 514.624,261.526 511.913,261.526ZM508.66,215.868C506.801,215.868 505.194,216.178 503.838,216.797C502.483,217.417 501.379,218.211 500.527,219.179C499.675,220.147 499.036,221.231 498.61,222.432C498.184,223.632 497.933,224.852 497.855,226.092L517.722,222.839C517.489,221.29 516.637,219.74 515.166,218.191C513.694,216.642 511.526,215.868 508.66,215.868ZM569.073,201.462C573.255,201.462 577.069,201.888 580.516,202.74C583.963,203.592 586.906,204.889 589.346,206.632C591.785,208.374 593.664,210.582 594.98,213.254C596.297,215.926 596.955,219.082 596.955,222.722L596.955,248.746C596.955,250.76 596.394,252.406 595.271,253.684C594.148,254.962 592.812,256.066 591.263,256.995C586.228,260.016 579.141,261.526 570.002,261.526C565.897,261.526 562.199,261.139 558.907,260.364C555.615,259.59 552.788,258.428 550.426,256.879C548.064,255.33 546.244,253.355 544.966,250.954C543.688,248.553 543.049,245.764 543.049,242.589C543.049,237.245 544.636,233.14 547.812,230.274C550.987,227.408 555.906,225.627 562.567,224.93L577.786,223.303L577.786,222.49C577.786,220.244 576.798,218.637 574.823,217.669C572.848,216.7 570.002,216.216 566.284,216.216C563.341,216.216 560.475,216.526 557.687,217.146C554.899,217.765 552.382,218.54 550.135,219.469C549.129,218.772 548.277,217.707 547.58,216.275C546.883,214.842 546.534,213.351 546.534,211.802C546.534,209.788 547.018,208.181 547.986,206.98C548.954,205.78 550.445,204.754 552.459,203.902C554.705,203.05 557.358,202.43 560.417,202.043C563.477,201.655 566.362,201.462 569.073,201.462ZM570.002,247.12C571.319,247.12 572.771,246.984 574.359,246.713C575.946,246.442 577.128,246.074 577.902,245.609L577.902,236.315L569.537,237.012C567.369,237.167 565.587,237.632 564.193,238.406C562.799,239.181 562.102,240.343 562.102,241.892C562.102,243.441 562.702,244.699 563.903,245.668C565.103,246.636 567.136,247.12 570.002,247.12ZM640.871,217.03C638.934,217.03 637.095,217.339 635.352,217.959C633.609,218.579 632.099,219.489 630.821,220.689C629.543,221.89 628.517,223.381 627.743,225.162C626.968,226.944 626.581,229.035 626.581,231.436C626.581,236.238 627.955,239.839 630.705,242.24C633.455,244.641 636.804,245.842 640.754,245.842C643.078,245.842 645.092,245.571 646.796,245.029C648.5,244.486 650.01,243.906 651.327,243.286C652.876,244.37 654.037,245.551 654.812,246.829C655.587,248.107 655.974,249.637 655.974,251.418C655.974,254.594 654.463,257.053 651.443,258.796C648.422,260.538 644.24,261.41 638.896,261.41C634.016,261.41 629.601,260.693 625.651,259.26C621.701,257.828 618.313,255.814 615.486,253.219C612.659,250.625 610.471,247.507 608.922,243.867C607.373,240.227 606.598,236.199 606.598,231.784C606.598,226.672 607.431,222.2 609.096,218.366C610.761,214.532 613.027,211.376 615.892,208.897C618.758,206.419 622.069,204.56 625.826,203.321C629.582,202.081 633.551,201.462 637.734,201.462C643.31,201.462 647.609,202.469 650.63,204.482C653.65,206.496 655.161,209.091 655.161,212.266C655.161,213.738 654.812,215.113 654.115,216.391C653.418,217.669 652.605,218.772 651.675,219.702C650.359,219.082 648.771,218.482 646.912,217.901C645.053,217.32 643.039,217.03 640.871,217.03ZM685.599,240.265C685.599,242.279 686.238,243.712 687.516,244.564C688.794,245.416 690.595,245.842 692.918,245.842C694.08,245.842 695.281,245.745 696.52,245.551C697.759,245.358 698.844,245.106 699.773,244.796C700.47,245.648 701.07,246.597 701.574,247.643C702.077,248.688 702.329,249.947 702.329,251.418C702.329,254.362 701.225,256.763 699.018,258.621C696.81,260.48 692.918,261.41 687.342,261.41C680.526,261.41 675.279,259.861 671.6,256.763C667.921,253.665 666.081,248.63 666.081,241.659L666.081,191.935C666.933,191.703 668.153,191.451 669.741,191.18C671.329,190.909 673.013,190.773 674.795,190.773C678.203,190.773 680.855,191.374 682.753,192.574C684.65,193.775 685.599,196.311 685.599,200.184L685.599,207.619L700.819,207.619C701.283,208.471 701.729,209.536 702.155,210.814C702.581,212.092 702.794,213.506 702.794,215.055C702.794,217.765 702.193,219.721 700.993,220.922C699.792,222.122 698.185,222.722 696.171,222.722L685.599,222.722L685.599,240.265ZM799.454,233.643C799.454,237.826 798.737,241.64 797.305,245.087C795.872,248.533 793.8,251.476 791.089,253.916C788.378,256.356 785.086,258.234 781.214,259.551C777.341,260.868 772.965,261.526 768.086,261.526C763.206,261.526 758.83,260.868 754.958,259.551C751.085,258.234 747.793,256.356 745.082,253.916C742.372,251.476 740.3,248.533 738.867,245.087C737.434,241.64 736.718,237.826 736.718,233.643L736.718,189.263C737.57,189.108 738.925,188.895 740.784,188.624C742.643,188.353 744.424,188.217 746.128,188.217C747.909,188.217 749.478,188.353 750.833,188.624C752.189,188.895 753.331,189.379 754.261,190.076C755.19,190.773 755.887,191.742 756.352,192.981C756.816,194.22 757.049,195.847 757.049,197.86L757.049,233.295C757.049,237.012 758.075,239.917 760.128,242.008C762.18,244.099 764.833,245.145 768.086,245.145C771.416,245.145 774.088,244.099 776.102,242.008C778.116,239.917 779.123,237.012 779.123,233.295L779.123,189.263C779.975,189.108 781.33,188.895 783.189,188.624C785.048,188.353 786.829,188.217 788.533,188.217C790.314,188.217 791.883,188.353 793.238,188.624C794.594,188.895 795.736,189.379 796.666,190.076C797.595,190.773 798.292,191.742 798.757,192.981C799.221,194.22 799.454,195.847 799.454,197.86L799.454,233.643ZM834.54,259.202C833.688,259.435 832.352,259.667 830.531,259.899C828.711,260.132 826.911,260.248 825.129,260.248C823.348,260.248 821.779,260.112 820.424,259.841C819.069,259.57 817.926,259.086 816.997,258.389C816.067,257.692 815.37,256.724 814.906,255.485C814.441,254.245 814.208,252.619 814.208,250.605L814.208,189.263C815.06,189.108 816.416,188.895 818.275,188.624C820.134,188.353 821.915,188.217 823.619,188.217C825.4,188.217 826.969,188.353 828.324,188.624C829.68,188.895 830.822,189.379 831.751,190.076C832.681,190.773 833.378,191.742 833.843,192.981C834.307,194.22 834.54,195.847 834.54,197.86L834.54,259.202Z"})),o$=e=>v.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 440 440",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",xmlSpace:"preserve","xmlns:serif":"http://www.serif.com/",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:1.5},...e},v.createElement("circle",{cx:220,cy:220,r:144,style:{fill:"rgb(136,136,136)",stroke:"black",strokeWidth:"0.33px"}}),v.createElement("path",{d:"M220,12C334.798,12 428,105.202 428,220C428,334.798 334.798,428 220,428C105.202,428 12,334.798 12,220C12,105.202 105.202,12 220,12ZM220,76C140.524,76 76,140.524 76,220C76,299.476 140.524,364 220,364C299.476,364 364,299.476 364,220C364,140.524 299.476,76 220,76Z",style:{fill:"rgb(206,206,206)",stroke:"black",strokeWidth:"6.67px"}}),v.createElement("path",{d:"M41.319,232.772C38.119,232.829 35.878,232.789 34.556,232.652C33.233,232.516 32.025,232.097 30.891,231.317C29.797,230.537 28.939,229.512 28.315,228.163C27.731,226.853 27.383,225.299 27.351,223.499C27.321,221.82 27.574,220.295 28.11,218.925C28.645,217.555 29.466,216.461 30.532,215.641C31.636,214.782 32.828,214.28 34.145,214.097C35.421,213.914 37.7,213.793 40.979,213.735L46.378,213.638C49.538,213.582 51.819,213.621 53.142,213.758C54.464,213.894 55.672,214.313 56.766,215.093C57.9,215.873 58.758,216.898 59.343,218.248C59.966,219.557 60.274,221.112 60.306,222.912C60.336,224.591 60.083,226.116 59.547,227.486C59.052,228.855 58.231,229.95 57.126,230.769C56.021,231.629 54.829,232.131 53.553,232.313C52.236,232.497 49.957,232.618 46.718,232.675L41.319,232.772ZM51.53,224.348C53.01,224.322 53.968,224.225 54.365,224.058C54.762,223.891 54.957,223.567 54.947,223.047C54.94,222.607 54.774,222.29 54.45,222.056C54.126,221.862 53.124,221.759 51.484,221.789L36.727,222.052C34.887,222.085 33.769,222.185 33.331,222.313C32.934,222.48 32.7,222.844 32.71,223.364C32.72,223.924 32.966,224.279 33.489,224.43C33.972,224.581 35.173,224.64 37.012,224.607L51.53,224.348ZM60.115,235.306L61.347,243.494C61.681,245.709 61.739,247.439 61.562,248.68C61.424,249.914 61.047,250.901 60.464,251.596C59.92,252.284 59.189,252.799 58.275,253.179C57.356,253.52 55.95,253.853 53.972,254.151L51.243,254.562C49.265,254.859 47.772,254.882 46.796,254.584C45.827,254.325 45.002,253.681 44.361,252.645C43.719,251.609 43.228,250.226 42.96,248.447L42.632,246.271L30.054,248.165L28.827,240.017L60.115,235.306ZM55.962,244.264L48.012,245.461L48.101,246.054C48.214,246.806 48.45,247.296 48.887,247.514C49.285,247.737 50.06,247.782 51.207,247.609L53.778,247.222C54.846,247.061 55.534,246.796 55.797,246.392C56.066,246.028 56.117,245.293 55.962,244.264ZM65.668,263.888L35.019,271.744L32.973,263.762L63.622,255.906L65.668,263.888ZM73.017,284.844L43.393,295.958L40.864,289.217L52.805,280.165L39.36,285.21L36.944,278.768L66.567,267.654L68.984,274.095L57.267,283.404L70.6,278.402L73.017,284.844ZM78.538,295.659L50.283,309.897L46.575,302.539L74.83,288.301L78.538,295.659ZM74.884,324.988C72.198,326.727 70.274,327.877 69.079,328.459C67.884,329.042 66.637,329.325 65.262,329.262C63.921,329.177 62.651,328.76 61.408,327.945C60.221,327.141 59.105,326.005 58.127,324.494C57.214,323.084 56.623,321.655 56.354,320.209C56.085,318.763 56.204,317.4 56.676,316.142C57.159,314.828 57.906,313.773 58.927,312.922C59.915,312.092 61.786,310.786 64.539,309.004L69.073,306.07C71.725,304.353 73.683,303.181 74.878,302.598C76.073,302.015 77.32,301.733 78.661,301.817C80.036,301.88 81.306,302.297 82.515,303.135C83.736,303.917 84.819,305.074 85.797,306.585C86.71,307.996 87.3,309.424 87.569,310.87C87.872,312.294 87.753,313.657 87.248,314.937C86.764,316.251 86.017,317.306 85.03,318.136C84.008,318.987 82.138,320.293 79.418,322.054L74.884,324.988ZM79.105,312.441C80.347,311.637 81.11,311.048 81.358,310.697C81.607,310.345 81.601,309.968 81.319,309.531C81.08,309.162 80.772,308.98 80.372,308.952C79.995,308.958 79.09,309.401 77.714,310.292L65.322,318.312C63.778,319.312 62.881,319.987 62.577,320.327C62.328,320.679 62.322,321.111 62.605,321.548C62.909,322.018 63.306,322.19 63.829,322.042C64.319,321.915 65.37,321.33 66.915,320.331L79.105,312.441ZM104.097,331.146L80.061,351.721L75.379,346.251L83.505,333.662L72.595,343L68.121,337.773L92.158,317.198L96.632,322.425L88.805,335.179L99.624,325.92L104.097,331.146ZM116.973,342.973L99.303,369.64L93.032,363.991L96.536,359.503L94.337,357.522L90.179,361.421L83.849,355.718L108.146,335.022L116.973,342.973ZM100.106,355.182C102.219,352.239 104.837,348.676 108.073,344.485C103.407,348.41 100.049,351.361 98.026,353.308L100.106,355.182ZM133.778,355.495L130.062,360.657L126.102,357.806L111.332,378.323L104.645,373.509L119.414,352.992L115.486,350.164L119.202,345.002L133.778,355.495ZM135.754,356.629L147.731,363.322L144.628,368.874L139.845,366.2L136.918,371.438L141.387,373.936L138.46,379.173L133.991,376.676L130.596,382.752L135.833,385.678L132.75,391.196L120.32,384.249L135.754,356.629ZM150.451,364.831L156.15,367.169C159.813,368.672 162.217,369.874 163.376,370.738C164.534,371.603 165.306,372.568 165.653,373.618C166,374.669 166.095,375.702 165.849,376.725C165.654,377.726 164.969,379.607 163.83,382.382L159.625,392.633C158.547,395.261 157.708,396.991 157.099,397.736C156.476,398.518 155.781,399.054 154.939,399.314C154.149,399.553 153.22,399.604 152.256,399.424C151.255,399.23 149.84,398.779 148.027,398.035L138.442,394.103L150.451,364.831ZM156.01,372.991L148.115,392.235C149.188,392.675 149.946,392.726 150.387,392.388C150.828,392.051 151.462,390.927 152.267,388.966L156.927,377.605C157.474,376.272 157.749,375.391 157.827,374.99C157.904,374.59 157.826,374.255 157.569,373.933C157.348,373.627 156.824,373.325 156.01,372.991ZM194.889,388.345L187.399,386.838L187.865,384.525C188.078,383.466 188.102,382.736 187.961,382.422C187.828,382.069 187.538,381.888 187.107,381.802C186.636,381.707 186.205,381.824 185.891,382.169C185.537,382.506 185.301,383.07 185.135,383.894C184.93,384.913 184.929,385.729 185.101,386.294C185.265,386.899 185.884,387.676 186.989,388.673C190.171,391.517 192.051,393.731 192.724,395.254C193.389,396.816 193.418,399.106 192.802,402.165C192.361,404.361 191.755,405.953 191.04,406.87C190.317,407.826 189.124,408.484 187.484,408.929C185.891,409.343 184.095,409.349 182.134,408.954C179.977,408.52 178.221,407.718 176.857,406.587C175.486,405.495 174.679,404.231 174.461,402.882C174.243,401.532 174.37,399.681 174.836,397.367L175.246,395.328L182.736,396.835L181.979,400.599C181.742,401.776 181.71,402.545 181.843,402.898C182.007,403.298 182.328,403.526 182.877,403.636C183.387,403.739 183.866,403.59 184.18,403.246C184.541,402.869 184.785,402.266 184.951,401.442C185.322,399.599 185.323,398.375 184.924,397.724C184.532,397.033 183.467,395.839 181.727,394.143C179.995,392.407 178.859,391.159 178.35,390.444C177.802,389.722 177.419,388.788 177.2,387.642C176.982,386.497 177.062,385.085 177.393,383.438C177.875,381.046 178.535,379.384 179.345,378.404C180.193,377.432 181.347,376.767 182.798,376.447C184.297,376.095 185.968,376.105 187.89,376.492C189.968,376.91 191.709,377.586 193.057,378.592C194.374,379.551 195.18,380.611 195.446,381.725C195.711,382.839 195.631,384.659 195.142,387.09L194.889,388.345ZM200.214,379.311L213.892,380.38L213.397,386.721L207.933,386.294L207.466,392.276L212.57,392.675L212.102,398.657L206.998,398.257L206.456,405.196L212.437,405.664L211.945,411.965L197.748,410.855L200.214,379.311ZM225.777,380.267L226.42,405.578L231.418,405.452L231.578,411.77L218.342,412.105L217.54,380.476L225.777,380.267ZM233.537,379.948L247.346,378.191L248.149,384.5L242.514,385.217L243.272,391.169L248.311,390.528L249.069,396.479L244.029,397.121L245.706,410.295L237.532,411.335L233.537,379.948ZM258.549,375.749L265.335,406.653L257.287,408.42L250.501,377.517L258.549,375.749ZM281.962,378.541L274.713,380.955L273.968,378.716C273.626,377.691 273.285,377.046 273.007,376.844C272.716,376.603 272.374,376.591 271.957,376.73C271.501,376.882 271.185,377.198 271.084,377.653C270.945,378.121 271.02,378.728 271.286,379.525C271.615,380.512 272.019,381.22 272.449,381.625C272.892,382.068 273.815,382.435 275.27,382.751C279.444,383.638 282.176,384.625 283.516,385.612C284.869,386.637 286.033,388.61 287.019,391.57C287.727,393.696 287.992,395.378 287.827,396.529C287.675,397.718 286.967,398.882 285.765,400.083C284.588,401.234 283.032,402.132 281.135,402.764C279.047,403.459 277.125,403.636 275.379,403.332C273.646,403.066 272.318,402.37 271.458,401.307C270.598,400.244 269.789,398.574 269.043,396.335L268.386,394.362L275.635,391.947L276.848,395.591C277.227,396.729 277.581,397.412 277.872,397.653C278.214,397.918 278.606,397.956 279.137,397.779C279.63,397.615 279.972,397.248 280.073,396.793C280.2,396.287 280.112,395.642 279.846,394.845C279.252,393.061 278.645,391.999 277.975,391.632C277.292,391.227 275.774,390.721 273.421,390.113C271.056,389.467 269.45,388.948 268.653,388.581C267.818,388.227 267.021,387.607 266.263,386.721C265.504,385.836 264.872,384.571 264.341,382.977C263.57,380.662 263.317,378.891 263.532,377.639C263.786,376.374 264.456,375.223 265.557,374.224C266.683,373.174 268.138,372.352 269.997,371.733C272.009,371.063 273.855,370.785 275.525,370.988C277.144,371.165 278.371,371.684 279.155,372.519C279.939,373.354 280.774,374.973 281.557,377.326L281.962,378.541ZM298.791,359.997L312.694,388.418L305.293,392.039L299.457,380.11L297.265,381.182L303.101,393.111L295.699,396.732L281.795,368.311L289.197,364.69L294.172,374.858L296.363,373.786L291.389,363.618L298.791,359.997ZM328.977,350.672L322.871,355.265L321.453,353.379C320.804,352.515 320.275,352.012 319.947,351.909C319.595,351.773 319.267,351.87 318.915,352.134C318.532,352.423 318.332,352.823 318.381,353.287C318.397,353.775 318.662,354.326 319.167,354.998C319.792,355.829 320.401,356.372 320.937,356.619C321.498,356.898 322.49,356.953 323.97,356.791C328.209,356.305 331.113,356.373 332.698,356.883C334.306,357.425 336.036,358.927 337.912,361.42C339.258,363.21 340.044,364.721 340.254,365.865C340.488,367.04 340.185,368.369 339.428,369.89C338.678,371.355 337.487,372.701 335.889,373.903C334.131,375.225 332.364,376.004 330.612,376.27C328.885,376.568 327.404,376.33 326.251,375.596C325.098,374.862 323.8,373.535 322.382,371.649L321.132,369.987L327.237,365.395L329.546,368.463C330.267,369.422 330.82,369.958 331.172,370.093C331.58,370.237 331.964,370.148 332.411,369.812C332.827,369.499 333.034,369.043 332.986,368.579C332.945,368.059 332.656,367.475 332.151,366.804C331.021,365.301 330.108,364.487 329.356,364.352C328.58,364.185 326.98,364.187 324.556,364.358C322.108,364.498 320.42,364.516 319.548,364.421C318.644,364.35 317.691,364.016 316.691,363.417C315.69,362.818 314.688,361.82 313.679,360.477C312.212,358.527 311.41,356.928 311.216,355.673C311.054,354.393 311.324,353.088 312.051,351.791C312.785,350.438 313.903,349.197 315.47,348.019C317.164,346.744 318.827,345.894 320.474,345.556C322.066,345.21 323.394,345.312 324.403,345.854C325.411,346.397 326.717,347.667 328.208,349.649L328.977,350.672ZM352.018,341.021C354.259,343.305 355.771,344.96 356.581,346.015C357.391,347.069 357.917,348.234 358.13,349.594C358.315,350.925 358.161,352.253 357.61,353.634C357.06,354.958 356.17,356.279 354.885,357.539C353.686,358.715 352.405,359.58 351.041,360.132C349.678,360.685 348.319,360.841 346.992,360.631C345.608,360.419 344.425,359.899 343.386,359.068C342.376,358.266 340.722,356.695 338.425,354.353L334.644,350.498C332.431,348.242 330.892,346.558 330.082,345.504C329.272,344.449 328.746,343.285 328.561,341.953C328.348,340.594 328.502,339.266 329.081,337.914C329.603,336.561 330.521,335.269 331.806,334.008C333.005,332.832 334.286,331.967 335.649,331.415C336.984,330.834 338.343,330.677 339.699,330.917C341.083,331.128 342.266,331.649 343.276,332.45C344.315,333.281 345.968,334.852 348.237,337.166L352.018,341.021ZM338.881,339.394C337.845,338.338 337.116,337.708 336.721,337.535C336.327,337.361 335.959,337.443 335.587,337.807C335.273,338.115 335.157,338.453 335.21,338.85C335.291,339.218 335.905,340.016 337.054,341.187L347.389,351.724C348.678,353.038 349.519,353.782 349.913,354.012C350.307,354.185 350.732,354.104 351.103,353.74C351.503,353.348 351.592,352.925 351.342,352.442C351.12,351.987 350.337,351.074 349.049,349.76L338.881,339.394ZM341.099,325.297L349.778,314.415L354.751,318.38L351.209,322.821L355.9,326.562L359.067,322.591L363.758,326.332L360.59,330.303L370.973,338.584L365.835,345.026L341.099,325.297ZM360.217,298.339L365.582,301.754L362.962,305.871L384.287,319.447L379.862,326.398L358.537,312.822L355.937,316.905L350.572,313.489L360.217,298.339ZM373.724,268.616L401.315,284.523L397.232,293.957C392.425,292.879 387.026,291.458 381.05,289.656C383.345,290.998 388.109,293.888 395.342,298.326L391.291,307.687L360.792,298.497L363.969,291.155L374.435,294.769L384.533,298.224C379.631,295.754 373.288,292.181 365.542,287.521L368.942,279.665C369.87,279.936 373.139,281.046 378.872,283.004L390.287,286.942C383.414,283.488 376.851,279.819 370.562,275.921L373.724,268.616ZM376.781,254.323L408.604,257.594L406.512,265.77L400.91,264.75L400.176,267.617L405.56,269.49L403.448,277.745L373.836,265.832L376.781,254.323ZM395.425,263.594C391.838,263.089 387.466,262.425 382.252,261.503C387.895,263.814 392.068,265.419 394.731,266.307L395.425,263.594ZM378.103,248.493L378.802,242.694C379.266,238.842 379.736,236.28 380.221,234.928C380.661,233.612 381.55,232.591 382.886,231.865C384.218,231.18 386.216,230.977 388.877,231.298C391.339,231.594 392.929,232.108 393.691,232.804C394.454,233.5 394.826,234.754 394.77,236.56C395.359,235.02 396.048,233.975 396.791,233.5C397.533,233.025 398.167,232.779 398.781,232.692C399.352,232.64 400.91,232.747 403.452,233.053L411.712,234.049L410.798,241.634L400.354,240.375C398.686,240.175 397.639,240.169 397.208,240.399C396.778,240.63 396.498,241.281 396.364,242.393L410.502,244.096L409.516,252.277L378.103,248.493ZM384.49,240.962L391.479,241.804C391.589,240.891 391.507,240.236 391.312,239.85C391.116,239.464 390.306,239.165 388.916,238.998L387.209,238.792C386.216,238.672 385.522,238.75 385.161,239.069C384.84,239.393 384.6,240.049 384.49,240.962ZM380.371,226.869L380.35,213.149L386.71,213.139L386.718,218.619L392.718,218.61L392.71,213.49L398.71,213.48L398.718,218.6L405.678,218.589L405.669,212.589L411.989,212.579L412.011,226.819L380.371,226.869Z"}),v.createElement("path",{d:"M65.814,139.849C68.729,141.171 70.736,142.169 71.872,142.859C73.008,143.55 73.919,144.446 74.609,145.637C75.262,146.812 75.598,148.106 75.583,149.592C75.548,151.026 75.195,152.579 74.452,154.218C73.759,155.748 72.876,157.017 71.804,158.024C70.733,159.032 69.522,159.669 68.208,159.951C66.841,160.254 65.55,160.196 64.281,159.796C63.05,159.414 60.94,158.545 57.953,157.191L53.034,154.961C50.156,153.656 48.113,152.642 46.977,151.951C45.841,151.261 44.929,150.364 44.276,149.19C43.586,147.999 43.251,146.705 43.302,145.235C43.301,143.785 43.69,142.248 44.433,140.609C45.127,139.079 46.009,137.81 47.081,136.803C48.116,135.779 49.327,135.142 50.677,134.876C52.044,134.573 53.335,134.631 54.567,135.014C55.836,135.414 57.945,136.282 60.896,137.62L65.814,139.849ZM52.976,143.077C51.628,142.466 50.721,142.142 50.291,142.123C49.86,142.103 49.546,142.312 49.331,142.786C49.15,143.186 49.163,143.544 49.356,143.895C49.564,144.209 50.426,144.731 51.919,145.408L65.362,151.503C67.038,152.262 68.091,152.652 68.542,152.724C68.972,152.744 69.339,152.515 69.554,152.041C69.785,151.531 69.715,151.104 69.308,150.744C68.937,150.4 67.877,149.832 66.201,149.072L52.976,143.077ZM52.319,126.004L56.705,118.981C57.892,117.081 58.972,115.728 59.913,114.901C60.82,114.053 61.749,113.548 62.643,113.399C63.504,113.229 64.394,113.314 65.336,113.619C66.256,113.958 67.541,114.619 69.237,115.678L71.578,117.14C73.275,118.2 74.424,119.153 74.971,120.014C75.54,120.84 75.748,121.866 75.562,123.07C75.376,124.275 74.85,125.644 73.897,127.171L72.732,129.037L83.52,135.775L79.156,142.764L52.319,126.004ZM61.298,121.897L68.117,126.156L68.435,125.647C68.838,125.002 68.978,124.476 68.787,124.027C68.63,123.599 68.07,123.06 67.086,122.446L64.88,121.069C63.964,120.497 63.269,120.251 62.807,120.387C62.366,120.489 61.849,121.015 61.298,121.897ZM65.491,105.806L74.058,95.089L79.026,99.06L75.604,103.341L80.291,107.087L83.488,103.088L88.174,106.834L84.977,110.834L90.414,115.179L94.16,110.493L99.097,114.439L90.205,125.562L65.491,105.806ZM91.595,76.985L113.834,99.49L108.713,104.551L95.575,97.345L105.668,107.559L100.775,112.395L78.535,89.89L83.429,85.054L96.71,91.949L86.701,81.82L91.595,76.985ZM125.69,63.611L119.349,67.872L118.033,65.913C117.43,65.017 116.929,64.486 116.607,64.365C116.262,64.211 115.93,64.29 115.565,64.536C115.166,64.803 114.946,65.192 114.97,65.658C114.961,66.146 115.196,66.711 115.664,67.409C116.244,68.272 116.823,68.846 117.346,69.122C117.89,69.431 118.878,69.538 120.364,69.455C124.624,69.195 127.52,69.417 129.075,70.011C130.653,70.637 132.301,72.229 134.041,74.818C135.29,76.677 135.995,78.228 136.144,79.381C136.314,80.568 135.942,81.878 135.104,83.357C134.277,84.78 133.017,86.06 131.357,87.176C129.531,88.403 127.726,89.086 125.962,89.259C124.221,89.465 122.756,89.149 121.643,88.354C120.531,87.56 119.306,86.166 117.989,84.207L116.829,82.481L123.17,78.22L125.312,81.407C125.981,82.403 126.505,82.967 126.849,83.121C127.249,83.286 127.637,83.218 128.102,82.905C128.534,82.615 128.765,82.171 128.741,81.705C128.728,81.184 128.471,80.585 128.002,79.888C126.954,78.328 126.085,77.466 125.341,77.291C124.575,77.083 122.977,77 120.548,77.042C118.096,77.051 116.409,76.98 115.544,76.839C114.645,76.72 113.711,76.335 112.744,75.684C111.776,75.033 110.829,73.983 109.892,72.589C108.531,70.563 107.815,68.924 107.688,67.66C107.595,66.373 107.934,65.085 108.728,63.829C109.533,62.516 110.716,61.336 112.343,60.243C114.102,59.06 115.808,58.3 117.471,58.05C119.079,57.788 120.4,57.961 121.378,58.557C122.357,59.152 123.593,60.49 124.976,62.548L125.69,63.611ZM151.705,60.191C153.126,63.059 154.048,65.102 154.491,66.356C154.934,67.609 155.072,68.88 154.852,70.239C154.615,71.562 154.056,72.776 153.103,73.917C152.169,75.005 150.913,75.984 149.3,76.783C147.795,77.529 146.308,77.953 144.841,78.055C143.374,78.156 142.033,77.883 140.837,77.27C139.587,76.64 138.624,75.777 137.895,74.666C137.184,73.59 136.1,71.582 134.644,68.643L132.247,63.804C130.844,60.972 129.904,58.894 129.461,57.64C129.019,56.386 128.881,55.115 129.118,53.793C129.338,52.434 129.897,51.219 130.867,50.114C131.783,48.99 133.057,48.047 134.67,47.248C136.175,46.502 137.662,46.079 139.129,45.977C140.579,45.839 141.919,46.112 143.133,46.761C144.383,47.392 145.346,48.254 146.057,49.33C146.787,50.442 147.87,52.449 149.309,55.353L151.705,60.191ZM139.723,54.566C139.066,53.239 138.568,52.415 138.247,52.127C137.927,51.84 137.551,51.803 137.085,52.033C136.691,52.229 136.475,52.514 136.402,52.907C136.365,53.283 136.701,54.232 137.429,55.702L143.981,68.928C144.797,70.577 145.366,71.545 145.669,71.886C145.99,72.173 146.419,72.229 146.885,71.998C147.387,71.749 147.603,71.375 147.516,70.838C147.446,70.336 146.985,69.226 146.168,67.577L139.723,54.566ZM167.692,34.963L174.441,55.018C175.206,57.293 175.666,58.911 175.821,59.871C176.013,60.82 175.878,61.92 175.489,63.149C175.088,64.339 174.357,65.429 173.348,66.317C172.3,67.218 170.987,67.956 169.395,68.491C167.613,69.091 165.919,69.324 164.35,69.176C162.794,69.067 161.502,68.615 160.501,67.897C159.499,67.179 158.751,66.334 158.28,65.311C157.809,64.287 156.98,62.076 155.845,58.702L149.874,40.96L157.683,38.332L165.249,60.813C165.696,62.14 166.052,62.948 166.281,63.251C166.56,63.579 166.927,63.667 167.344,63.526C167.837,63.36 168.076,63.069 168.088,62.601C168.099,62.133 167.856,61.159 167.358,59.681L159.92,37.579L167.692,34.963ZM174.727,33.131L180.462,32.033C184.273,31.303 186.857,30.972 188.292,31.023C189.681,31.042 190.923,31.578 192.021,32.631C193.079,33.691 193.88,35.533 194.383,38.165C194.85,40.601 194.844,42.272 194.412,43.21C193.981,44.147 192.9,44.884 191.162,45.379C192.809,45.471 194.014,45.811 194.692,46.373C195.37,46.936 195.797,47.465 196.067,48.024C196.29,48.552 196.662,50.069 197.143,52.583L198.707,60.755L191.204,62.191L189.226,51.859C188.91,50.209 188.597,49.21 188.246,48.87C187.896,48.53 187.191,48.461 186.091,48.671L188.768,62.658L180.675,64.207L174.727,33.131ZM183.842,36.925L185.166,43.839C186.069,43.666 186.668,43.389 186.976,43.085C187.285,42.782 187.323,41.919 187.06,40.544L186.737,38.855C186.549,37.873 186.264,37.235 185.85,36.988C185.444,36.781 184.746,36.752 183.842,36.925ZM219.815,41.52L211.587,41.97L211.288,36.498C211.198,34.861 211.064,33.867 210.884,33.516C210.663,33.128 210.292,32.947 209.693,32.98C209.014,33.017 208.588,33.281 208.454,33.769C208.281,34.259 208.258,35.302 208.345,36.9L209.148,51.558C209.231,53.076 209.367,54.11 209.591,54.538C209.777,55.009 210.19,55.226 210.829,55.191C211.468,55.156 211.854,54.895 211.987,54.407C212.163,53.957 212.182,52.834 212.088,51.116L211.871,47.162L220.099,46.712L220.165,47.91C220.344,51.185 220.231,53.515 219.866,54.897C219.461,56.281 218.528,57.534 216.987,58.66C215.447,59.786 213.558,60.41 211.241,60.537C208.845,60.668 206.824,60.338 205.218,59.545C203.612,58.751 202.508,57.61 201.904,56.08C201.342,54.589 200.935,52.288 200.765,49.172L200.26,39.946C200.135,37.67 200.123,35.988 200.22,34.821C200.318,33.694 200.736,32.549 201.438,31.469C202.138,30.349 203.173,29.491 204.498,28.818C205.861,28.102 207.403,27.738 209.2,27.639C211.597,27.508 213.62,27.878 215.268,28.709C216.876,29.543 217.98,30.684 218.536,32.056C219.132,33.425 219.489,35.569 219.651,38.524L219.815,41.52ZM226.051,27.944L239.739,28.872L239.309,35.218L233.841,34.847L233.435,40.833L238.544,41.179L238.137,47.166L233.029,46.819L232.558,53.763L238.544,54.169L238.117,60.475L223.909,59.511L226.051,27.944ZM272.132,44.93L264.713,43.105L265.276,40.813C265.534,39.765 265.59,39.037 265.462,38.717C265.344,38.359 265.062,38.166 264.635,38.061C264.169,37.946 263.733,38.045 263.404,38.376C263.037,38.697 262.777,39.251 262.576,40.067C262.328,41.077 262.292,41.892 262.44,42.464C262.578,43.074 263.163,43.877 264.225,44.921C267.282,47.898 269.067,50.19 269.674,51.74C270.272,53.329 270.203,55.618 269.458,58.648C268.923,60.823 268.25,62.388 267.497,63.274C266.734,64.198 265.514,64.804 263.856,65.179C262.247,65.525 260.452,65.454 258.51,64.977C256.373,64.451 254.653,63.575 253.339,62.387C252.015,61.237 251.263,59.94 251.102,58.583C250.942,57.225 251.148,55.381 251.712,53.089L252.209,51.069L259.628,52.894L258.711,56.623C258.424,57.788 258.359,58.555 258.477,58.913C258.624,59.32 258.935,59.562 259.479,59.695C259.984,59.82 260.469,59.692 260.797,59.36C261.174,59 261.444,58.407 261.644,57.592C262.093,55.766 262.147,54.543 261.775,53.875C261.414,53.169 260.4,51.931 258.734,50.162C257.078,48.354 255.996,47.058 255.518,46.322C255.001,45.577 254.658,44.628 254.489,43.474C254.319,42.32 254.459,40.913 254.861,39.282C255.443,36.912 256.174,35.28 257.025,34.335C257.913,33.401 259.095,32.785 260.559,32.527C262.071,32.24 263.74,32.321 265.643,32.789C267.702,33.295 269.412,34.045 270.716,35.108C271.991,36.121 272.752,37.215 272.97,38.339C273.187,39.464 273.029,41.279 272.437,43.687L272.132,44.93ZM292.077,61.866C290.909,64.845 290.018,66.902 289.387,68.072C288.756,69.243 287.909,70.199 286.755,70.95C285.616,71.664 284.341,72.066 282.856,72.129C281.423,72.168 279.854,71.897 278.178,71.24C276.614,70.627 275.301,69.812 274.239,68.794C273.177,67.776 272.478,66.6 272.127,65.303C271.754,63.953 271.745,62.661 272.078,61.374C272.396,60.123 273.153,57.972 274.35,54.918L276.321,49.89C277.474,46.948 278.381,44.854 279.011,43.684C279.642,42.513 280.49,41.557 281.629,40.843C282.782,40.092 284.057,39.69 285.527,39.665C286.975,39.588 288.53,39.896 290.206,40.553C291.77,41.166 293.083,41.982 294.145,42.999C295.221,43.98 295.92,45.156 296.256,46.491C296.63,47.84 296.639,49.132 296.321,50.383C295.988,51.67 295.23,53.822 294.048,56.838L292.077,61.866ZM288.186,49.213C288.726,47.836 289.002,46.913 288.999,46.482C288.996,46.051 288.771,45.748 288.287,45.558C287.877,45.398 287.521,45.43 287.181,45.64C286.878,45.865 286.401,46.752 285.803,48.279L280.416,62.021C279.745,63.734 279.411,64.806 279.362,65.26C279.365,65.691 279.612,66.045 280.097,66.235C280.618,66.44 281.041,66.347 281.379,65.922C281.704,65.533 282.216,64.445 282.887,62.732L288.186,49.213ZM305.248,47.78L317.483,54.419L314.45,60.009L309.458,57.3L306.596,62.574L311.062,64.997L308.2,70.27L303.735,67.848L297.402,79.521L290.16,75.591L305.248,47.78ZM336.214,66.91L332.603,72.146L328.586,69.376L314.235,90.188L307.451,85.51L321.802,64.698L317.818,61.951L321.428,56.715L336.214,66.91ZM364.183,92.203L339.722,112.6L332.279,105.509C334.952,101.37 338.151,96.794 341.907,91.809C339.854,93.499 335.496,96.971 328.833,102.225L321.448,95.189L340.609,69.743L346.401,75.262L339.394,83.834L332.663,92.117C336.674,88.37 342.219,83.653 349.268,77.993L355.466,83.898C354.89,84.676 352.72,87.36 348.901,92.064L341.262,101.415C346.878,96.158 352.588,91.267 358.42,86.712L364.183,92.203ZM375.916,107.812L353.681,130.812L348.545,124.115L352.809,120.341L351.008,117.992L346.209,121.067L341.024,114.307L368.687,98.385L375.916,107.812ZM357.107,116.742C359.72,114.234 362.944,111.208 366.89,107.677C361.586,110.686 357.747,112.975 355.403,114.521L357.107,116.742ZM381.75,116.129L384.673,121.184C386.616,124.543 387.779,126.874 388.203,128.246C388.641,129.564 388.544,130.914 387.911,132.296C387.258,133.644 385.782,135.006 383.462,136.348C381.315,137.589 379.735,138.133 378.708,138.035C377.68,137.936 376.629,137.157 375.589,135.679C376.044,137.264 376.12,138.514 375.812,139.34C375.504,140.165 375.144,140.742 374.705,141.181C374.28,141.565 372.97,142.416 370.754,143.697L363.551,147.862L359.727,141.249L368.834,135.982C370.288,135.141 371.128,134.516 371.334,134.074C371.54,133.631 371.373,132.942 370.812,131.973L358.485,139.102L354.36,131.969L381.75,116.129ZM381.166,125.985L375.071,129.51C375.532,130.306 375.991,130.78 376.379,130.972C376.767,131.163 377.594,130.916 378.806,130.215L380.295,129.354C381.161,128.853 381.669,128.374 381.766,127.902C381.828,127.451 381.626,126.782 381.166,125.985ZM394.047,138.523L399.41,151.152L393.555,153.638L391.414,148.594L385.891,150.939L387.892,155.651L382.369,157.996L380.368,153.284L373.962,156.004L376.307,161.527L370.49,163.997L364.924,150.89L394.047,138.523Z"}),v.createElement("path",{d:"M184.955,228.867C188.721,238.945 188.513,248.571 184.331,257.744C180.149,266.917 173.328,273.271 163.868,276.806C162.694,277.245 161.783,276.599 161.136,274.868C160.466,273.075 160.618,271.785 161.592,270.998C165.55,268.391 167.432,264.376 167.237,258.953C167.118,255.615 165.001,248.444 160.888,237.438C158.162,230.143 155.958,225.188 154.277,222.575C150.745,216.708 146.627,213.702 141.923,213.557C140.501,214.089 139.223,212.84 138.091,209.81C137.167,207.337 137.447,205.823 138.931,205.269C147.834,201.941 156.818,202.6 165.882,207.246C174.969,211.953 181.327,219.16 184.955,228.867ZM154.841,276.691C155.65,278.855 155.467,280.157 154.292,280.596C144.462,284.27 134.975,283.869 125.834,279.394C116.823,275.08 110.469,267.978 106.772,258.085C103.145,248.378 103.217,238.768 106.99,229.254C110.725,219.826 117.074,213.437 126.039,210.086C127.029,209.717 127.959,210.038 128.831,211.051C129.61,211.817 130.208,212.756 130.624,213.869C131.017,214.92 131.112,215.836 130.911,216.616C130.678,217.125 129.963,217.851 128.764,218.792C127.404,219.864 126.471,220.952 125.968,222.057C125.054,223.948 124.673,226.416 124.824,229.46C125.129,232.728 126.46,237.515 128.817,243.822L132.768,254.395C136.096,263.298 139.268,269.053 142.286,271.66C145.11,274.127 148.362,275.097 152.04,274.568C152.395,274.576 152.932,274.692 153.65,274.917C154.144,275.296 154.541,275.888 154.841,276.691ZM242.304,166.531L250.75,188.847L244.327,191.459C243.207,191.102 241.934,189.957 240.507,188.025C238.841,185.829 237.838,184.653 237.498,184.498C232.627,181.457 228.398,180.606 224.812,181.946C223.452,182.455 222.252,181.318 221.212,178.535C220.38,176.31 220.332,174.954 221.066,174.468L222.364,173.983C223.539,173.544 225.332,173.437 227.742,173.664C230.152,173.891 231.851,173.82 232.84,173.45C234.51,172.826 235.717,171.247 236.461,168.714L242.304,166.531ZM263.863,212.907C266.451,219.832 265.806,226.591 261.928,233.184C258.136,239.252 252.716,243.602 245.667,246.237C244.493,246.676 243.374,245.473 242.311,242.629C241.294,239.908 241.254,238.197 242.189,237.495C242.638,237.187 243.283,236.84 244.126,236.455C246.622,235.028 248.416,233.512 249.508,231.907C250.599,230.301 250.832,228.663 250.208,226.994C248.984,223.717 246.104,222.045 241.569,221.978C240.125,221.884 235.883,222.412 228.844,223.563C221.782,224.652 215.452,224.023 209.854,221.676C203.537,219.104 199.281,214.881 197.086,209.008C194.845,203.01 194.983,196.969 197.501,190.885C200.103,184.839 204.403,180.695 210.401,178.454C211.204,178.153 212.042,178.51 212.914,179.523C213.608,180.25 214.129,181.077 214.476,182.004C215.284,184.168 215.171,185.655 214.134,186.465C212.318,187.637 210.964,189.2 210.073,191.154C209.02,193.238 208.864,195.27 209.603,197.248C209.973,198.238 210.694,199.131 211.767,199.928C215.673,202.837 220.643,203.41 226.679,201.648C228.703,201.032 230.917,200.451 233.321,199.906C235.724,199.36 238.366,198.795 241.249,198.211C245.088,198.115 248.954,199.031 252.845,200.959C258.25,203.731 261.922,207.713 263.863,212.907ZM214.54,257.975L205.898,235.415L212.483,232.954C213.603,233.311 214.888,234.486 216.338,236.481C217.857,238.661 218.829,239.848 219.254,240.042C224.063,243.107 228.323,243.946 232.032,242.559C233.393,242.051 234.593,243.188 235.632,245.97C236.464,248.196 236.471,249.533 235.651,249.98C235.489,250.111 235.098,250.292 234.48,250.523C233.244,250.985 231.42,251.103 229.01,250.876C226.6,250.649 224.931,250.709 224.004,251.056C222.335,251.68 221.128,253.258 220.383,255.791L214.54,257.975ZM316.313,138.873L324.758,161.189L318.336,163.801C317.216,163.444 315.942,162.299 314.515,160.366C312.849,158.171 311.846,156.995 311.507,156.84C306.635,153.799 302.407,152.948 298.821,154.288C297.46,154.797 296.26,153.66 295.221,150.877C294.389,148.652 294.34,147.296 295.075,146.81L296.373,146.325C297.548,145.886 299.34,145.779 301.75,146.006C304.16,146.233 305.86,146.161 306.849,145.792C308.518,145.168 309.725,143.589 310.47,141.056L316.313,138.873ZM337.872,185.249C340.46,192.174 339.815,198.933 335.937,205.526C332.145,211.593 326.724,215.944 319.676,218.579C318.501,219.018 317.382,217.815 316.32,214.971C315.303,212.25 315.262,210.539 316.198,209.837C316.646,209.529 317.292,209.182 318.134,208.797C320.631,207.37 322.425,205.854 323.516,204.249C324.607,202.643 324.841,201.005 324.217,199.336C322.992,196.059 320.113,194.387 315.578,194.32C314.133,194.226 309.892,194.754 302.853,195.905C295.791,196.994 289.46,196.365 283.862,194.018C277.546,191.446 273.29,187.223 271.095,181.35C268.854,175.352 268.992,169.311 271.509,163.227C274.112,157.181 278.412,153.037 284.409,150.796C285.213,150.495 286.051,150.852 286.923,151.865C287.617,152.592 288.138,153.419 288.484,154.346C289.293,156.51 289.179,157.997 288.143,158.807C286.326,159.979 284.973,161.542 284.082,163.496C283.029,165.58 282.872,167.612 283.612,169.59C283.981,170.58 284.703,171.473 285.776,172.27C289.681,175.179 294.652,175.752 300.687,173.99C302.712,173.374 304.926,172.793 307.329,172.248C309.732,171.702 312.375,171.137 315.257,170.553C319.097,170.457 322.962,171.373 326.854,173.301C332.258,176.073 335.931,180.055 337.872,185.249ZM288.549,230.317L279.907,207.757L286.491,205.296C287.611,205.653 288.896,206.828 290.346,208.823C291.866,211.003 292.838,212.19 293.262,212.384C298.072,215.449 302.331,216.288 306.041,214.901C307.401,214.393 308.601,215.53 309.641,218.312C310.473,220.538 310.479,221.875 309.66,222.322C309.497,222.453 309.107,222.634 308.489,222.865C307.252,223.327 305.429,223.445 303.019,223.218C300.609,222.991 298.94,223.051 298.013,223.398C296.343,224.022 295.136,225.6 294.392,228.133L288.549,230.317Z"}),v.createElement("path",{d:"M394.606,195.569C388.976,196.699 383.488,193.046 382.359,187.416C381.229,181.786 384.882,176.298 390.512,175.168C396.142,174.038 401.63,177.692 402.76,183.321C403.89,188.951 400.236,194.439 394.606,195.569Z"}),v.createElement("path",{d:"M49.46,175.274C55.091,176.4 58.748,181.886 57.621,187.517C56.495,193.147 51.009,196.804 45.378,195.678C39.748,194.551 36.091,189.066 37.217,183.435C38.344,177.804 43.83,174.148 49.46,175.274Z"})),a$=()=>o.jsx("div",{className:"flow",children:o.jsxs("div",{className:"mobile block-center pad-t-8 flow",children:[o.jsx(r$,{className:"brui-logo"}),o.jsx("h1",{className:"mar-t-8",children:"React UI Components"}),o.jsx("h2",{className:"mar-t-none large",children:"For Badger Fans"}),o.jsxs("p",{className:"larger",children:["This is my personal collection of React UI components built around the styles provided by"," ",o.jsx("a",{href:"https://abw.github.io/badger-css",children:"Badger CSS"})]}),o.jsx("div",{className:"text-center",children:o.jsx(o$,{className:"width-10rem"})}),o.jsx("p",{children:"This is Open Source Software and you're welcome to use it. But be warned that it is also Opiniated and Selfish Software."}),o.jsx("p",{children:"I wrote it for me to help my get my job done.  It provides a solid foundation of React components that allow me to get a new site up and running quickly."}),o.jsx("p",{children:"I don't have the time or inclination to help other people get their jobs done (unless they're my clients, colleagues, family or close friends).  So please be aware that this is effectively unsupported software and you're on your own.  If you're not comfortable with that then you should almost certainly be using one of the many other fine UI toolkits that are available."}),o.jsx("p",{children:"Also note that this collection is supposed to be a starting point, not a final destination. You can use the components and styles provided, but at some point you will probably want or need to dig in and start adding your own code, or modifying the builtin components."}),o.jsx("p",{children:"Everything is modular and themeable, so that's generally quite easy to achieve.  But it requires a reasonable knowledge of React, CSS and SASS.  The documentation is provided as a reference for me (and my colleagues) to use, and it assumes a fairly high level of proficiency in these areas."}),o.jsx("p",{children:"Or to put it another way, if you're expecting someone to hold your hand explaining how to get this up and running, then you've probably come to the wrong place."})]})}),s$=Object.freeze(Object.defineProperty({__proto__:null,default:a$},Symbol.toStringTag,{value:"Module"})),fx=({path:e,onClick:t,width:n=512,height:r=512,style:a,className:s="night-and-day--icon",fill:l="currentColor"})=>o.jsx("svg",{"aria-hidden":"true",focusable:"false",className:s,style:a,role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${n} ${r}`,onClick:t,children:o.jsx("path",{d:e,fill:l})}),l$=e=>o.jsx(fx,{path:"M289,23C160,23 56,127 56,256C56,385 160,489 289,489C352,489 409,464 451,423C456,418 457,411 454,404C451,397 444,394 436,395C426,397 416,397 405,397C304,397 222,316 222,214C222,146 260,86 315,55C322,51 325,44 323,37C322,30 316,25 309,24C302,23 295,23 289,23L289,23Z",...e}),hx=({Icon:e,caption:t,onClick:n,iconClass:r,iconStyle:a,captionStyle:s,className:l="night-and-day--switcher",captionClass:i="night-and-day--caption",style:c={display:"inline-block"}})=>o.jsxs("div",{className:l,onClick:n,style:c,children:[o.jsx(e,{style:a,className:r}),!!t&&o.jsx("div",{className:i,style:s,children:t})]}),i$=e=>{const{setDark:t}=$s();return o.jsx(hx,{Icon:l$,onClick:t,...e})},c$=e=>o.jsx(fx,{path:"M362,1.2C367,3 370,8 371,13L391,121L499,141C504,142 509,145 511,150C512,155 512,161 509,166L447,256L509,346C512,351 512,357 511,362C509,367 504,370 499,371L391,391L371,499C370,504 367,509 362,511C357,512 351,512 346,509L256,447L166,509C161,512 156,512 151,511C146,509 142,504 141,499L121,391L13,371C8,370 3,367 1,362C0,356 0,351 3,346L65,256L3,166C0,161 0,156 1,151C3,146 8,142 13,141L121,121L141,13C142,8 146,3 151,1C156,0 161,0 166,3L256,65L346,3C351,0 357,0 362,1ZM160,256C160,203 203,160 256,160C309,160 352,203 352,256C352,309 309,352 256,352C203,352 160,309 160,256ZM384,256C384,186 326,128 256,128C186,128 128,186 128,256C128,326 186,384 256,384C326,384 384,326 384,256Z",...e}),u$=e=>{const{setLight:t}=$s();return o.jsx(hx,{Icon:c$,onClick:t,...e})},d$=({sunrise:e={},nightfall:t={}})=>{const{isLight:n,setLight:r,setDark:a}=$s();return n?o.jsx(u$,{onClick:a,...e}):o.jsx(i$,{onClick:r,...t})},mx=v.createContext(),$s=()=>v.useContext(mx),yl="dark",Hc="light",p$="(prefers-color-scheme: dark)",Vc=()=>!1,f$=()=>{let e={};return{clear:()=>e={},getItem:t=>e[t],setItem:(t,n)=>e[t]=n,removeItem:t=>delete e[t]}},h$=()=>({matches:Vc,addEventListener:Vc,removeEventListener:Vc}),gx=typeof window<"u",Wc=gx&&window.localStorage?window.localStorage:f$(),m$=gx&&window.matchMedia?e=>window.matchMedia(e):h$,rd=m$(p$),g$=()=>rd.matches,x$=e=>e.split(" "),jh=(e,t="")=>`${e} ${t}`,v$=({storageKey:e,defaultVariant:t,children:n})=>{const r=e?Wc.getItem(e):null,[a,s=""]=r?x$(r):[g$(),null],[l,i]=v.useState(a===yl),[c,u]=v.useState(s||t),d=b=>{i(b),e&&Wc.setItem(e,jh(b?yl:Hc,c))},p=b=>{u(b),e&&Wc.setItem(e,jh(l?yl:Hc,b))},m=b=>d(b.matches);v.useEffect(()=>(rd.addEventListener("change",m),()=>rd.removeEventListener("change",m)),[]);const y={isDark:l,isLight:!l,setDark:()=>d(!0),setLight:()=>d(!1),setIsDark:i,toggleTheme:()=>d(!l),theme:l?yl:Hc,variant:c,setVariant:p};return o.jsx(mx.Provider,{value:y,children:n})},xx="0.0.10",y$="2024-01-20",bh="sidebar",C$="no-sidebar",j$=()=>{const{variant:e,setVariant:t}=$s();return o.jsx("header",{children:o.jsxs("nav",{children:[o.jsxs("div",{children:[o.jsx(J,{name:"bars",className:"toggle-sidebar action",onClick:()=>t(e===bh?C$:bh)}),o.jsx(Yi,{to:"/",className:"home mar-l-2",text:"Badger React UI"}),o.jsxs("span",{className:"small mar-l-2",children:["v",xx]})]}),o.jsxs("div",{className:"flex middle",children:[o.jsx("a",{href:"https://github.com/abw/badger-react-ui",children:o.jsx(J,{name:"github",className:"mar-r-4"})}),o.jsx(d$,{})]})]})})},b$=()=>o.jsx("footer",{children:o.jsxs("div",{className:"flex space middle",children:[o.jsx("div",{className:"large",children:"Badger React UI"}),o.jsxs("div",{className:"text-center small",children:["by ",o.jsx("a",{href:"https://github.com/abw",children:"Andy Wardley"})]}),o.jsxs("div",{className:"text-right",children:["v",xx,o.jsx("br",{}),y$]})]})}),S$=({toc:e,contentRef:t})=>o.jsx("ul",{className:"toc",children:Object.entries(e).map(([n,r])=>o.jsx("li",{onClick:()=>{var a,s;(s=t.current)==null||s.scrollTo({top:((a=r.ref.current)==null?void 0:a.offsetTop)-20})},className:r.heading?"heading":"",children:r.heading?o.jsx("h4",{children:r.heading}):r.text.match(/^code:/)?o.jsx("code",{children:r.text.replace(/^code:/,"")}):r.text},n))}),w$=Os.Consumer(S$),_$=({title:e,path:t,items:n,tocs:r})=>{const a=Ps(),s=t&&a.pathname.slice(0,t.length)===t;return o.jsxs("details",{className:"menu",open:s,children:[o.jsx("summary",{children:e}),o.jsx("ul",{children:n.map(l=>{const i=a.pathname===l.to;return o.jsxs("li",{children:[o.jsx(Yi,{className:"item",...l}),!!l.tocName&&i&&r[l.tocName]&&o.jsx(w$,{toc:r[l.tocName]})]},l.to)})})]})},Sh=Os.Consumer(_$),k$={title:"Getting Started",path:"/getting-started",items:[{to:"/getting-started/installation",text:"Installation"}]},T$={title:"Components",path:"/components",items:[{to:"/components/alert",text:"Alert",tocName:"alert"},{to:"/components/button",text:"Button",tocName:"button"},{to:"/components/buttons",text:"Buttons",tocName:"buttons"},{to:"/components/checkbox",text:"Checkbox",tocName:"checkbox"},{to:"/components/confirm",text:"Confirm",tocName:"confirm"},{to:"/components/datatable",text:"Datatable",tocName:"datatable"},{to:"/components/details",text:"Details",tocName:"details"},{to:"/components/dropdown",text:"Dropdown",tocName:"dropdown"},{to:"/components/dropdown-menu",text:"Dropdown Menu",tocName:"dropdown-menu"},{to:"/components/icon",text:"Icon",tocName:"icon"},{to:"/components/modal",text:"Modal",tocName:"modal"},{to:"/components/overlay",text:"Overlay",tocName:"overlay"},{to:"/components/pager",text:"Pager",tocName:"pager"},{to:"/components/radio",text:"Radio",tocName:"radio"},{to:"/components/search",text:"Search",tocName:"search"},{to:"/components/select",text:"Select",tocName:"select"},{to:"/components/sortable",text:"Sortable",tocName:"sortable"}]},E$=()=>o.jsxs(o.Fragment,{children:[o.jsx(Sh,{...k$}),o.jsx(Sh,{...T$})]});function L$(){const{pathname:e}=Qo();return v.useEffect(()=>N$(document.getElementById("content")),[e]),null}function N$(e,{top:t=0,left:n=0,behavior:r="smooth"}={}){e==null||e.scrollTo({top:t,left:n,behavior:r})}const R$=({contentRef:e})=>{const{theme:t,variant:n}=$s();return o.jsxs("div",{id:"site",className:n,"data-theme":t,children:[o.jsx(j$,{}),o.jsxs("div",{id:"app",children:[o.jsx(L$,{}),o.jsx("aside",{children:o.jsx(E$,{})}),o.jsx("main",{id:"content",ref:e,children:o.jsx(pD,{})})]}),o.jsx(b$,{})]})},D$=Os.Consumer(R$),O$=/\/_layout$/,M$=/\/_examples\//,A$=P$(Object.assign({"../pages/components/alert/_examples/Alert/index.jsx":mk,"../pages/components/alert/_examples/Error/index.jsx":jk,"../pages/components/alert/_examples/Info/index.jsx":wk,"../pages/components/alert/_examples/Success/index.jsx":Tk,"../pages/components/alert/_examples/Warning/index.jsx":Nk,"../pages/components/alert/_examples/border/index.jsx":Ok,"../pages/components/alert/_examples/className/index.jsx":Pk,"../pages/components/alert/_examples/color/index.jsx":Ik,"../pages/components/alert/_examples/dismissable/index.jsx":Uk,"../pages/components/alert/_examples/headIcon/index.jsx":Wk,"../pages/components/alert/_examples/headline/index.jsx":Gk,"../pages/components/alert/_examples/icon/index.jsx":Qk,"../pages/components/alert/_examples/onDismiss/index.jsx":eT,"../pages/components/alert/_examples/radius/index.jsx":rT,"../pages/components/alert/_examples/revealable/index.jsx":sT,"../pages/components/alert/_examples/revealed/index.jsx":cT,"../pages/components/alert/_examples/shadow/index.jsx":pT,"../pages/components/alert/_examples/size/index.jsx":mT,"../pages/components/alert/_examples/stripe/index.jsx":vT,"../pages/components/alert/_examples/text/index.jsx":jT,"../pages/components/alert/_examples/title/index.jsx":wT,"../pages/components/alert/_examples/type/index.jsx":TT,"../pages/components/alert/index.jsx":NT,"../pages/components/button/_examples/Button/index.jsx":OT,"../pages/components/button/_examples/Content/index.jsx":PT,"../pages/components/button/_examples/bare/index.jsx":IT,"../pages/components/button/_examples/border/index.jsx":UT,"../pages/components/button/_examples/bright/index.jsx":WT,"../pages/components/button/_examples/className/index.jsx":GT,"../pages/components/button/_examples/color/index.jsx":QT,"../pages/components/button/_examples/dark/index.jsx":eE,"../pages/components/button/_examples/disabled/index.jsx":rE,"../pages/components/button/_examples/icon/index.jsx":sE,"../pages/components/button/_examples/iconLeft/index.jsx":cE,"../pages/components/button/_examples/iconRight/index.jsx":pE,"../pages/components/button/_examples/label/index.jsx":mE,"../pages/components/button/_examples/onClick/index.jsx":vE,"../pages/components/button/_examples/outline/index.jsx":jE,"../pages/components/button/_examples/radius/index.jsx":wE,"../pages/components/button/_examples/shaded/index.jsx":TE,"../pages/components/button/_examples/shadow/index.jsx":NE,"../pages/components/button/_examples/size/index.jsx":OE,"../pages/components/button/_examples/text/index.jsx":PE,"../pages/components/button/_examples/tooltip/index.jsx":IE,"../pages/components/button/_examples/type/index.jsx":UE,"../pages/components/button/index.jsx":VE,"../pages/components/buttons/_examples/Button/index.jsx":GE,"../pages/components/buttons/_examples/Buttons/index.jsx":QE,"../pages/components/buttons/_examples/buttonClass/index.jsx":eL,"../pages/components/buttons/_examples/buttonsProp/index.jsx":rL,"../pages/components/buttons/_examples/className/index.jsx":sL,"../pages/components/buttons/_examples/outline/index.jsx":cL,"../pages/components/buttons/index.jsx":dL,"../pages/components/checkbox/_examples/CheckboxState/index.jsx":hL,"../pages/components/checkbox/_examples/Overview/index.jsx":xL,"../pages/components/checkbox/_examples/border/index.jsx":CL,"../pages/components/checkbox/_examples/checked/index.jsx":SL,"../pages/components/checkbox/_examples/checkedText/index.jsx":kL,"../pages/components/checkbox/_examples/className/index.jsx":LL,"../pages/components/checkbox/_examples/disabled/index.jsx":DL,"../pages/components/checkbox/_examples/onChange/index.jsx":AL,"../pages/components/checkbox/_examples/text/index.jsx":BL,"../pages/components/checkbox/index.jsx":zL,"../pages/components/confirm/_examples/Overview/index.jsx":HL,"../pages/components/confirm/_examples/cancel/index.jsx":ZL,"../pages/components/confirm/_examples/cancelProps/index.jsx":YL,"../pages/components/confirm/_examples/className/index.jsx":qL,"../pages/components/confirm/_examples/color/index.jsx":tN,"../pages/components/confirm/_examples/confirm/index.jsx":oN,"../pages/components/confirm/_examples/confirmProps/index.jsx":lN,"../pages/components/confirm/_examples/iconRight/index.jsx":uN,"../pages/components/confirm/_examples/onClick/index.jsx":fN,"../pages/components/confirm/_examples/text/index.jsx":gN,"../pages/components/confirm/index.jsx":vN,"../pages/components/datatable/_examples/Datatable/index.jsx":bN,"../pages/components/datatable/index.jsx":wN,"../pages/components/details/_examples/Details/index.jsx":TN,"../pages/components/details/_examples/border/index.jsx":NN,"../pages/components/details/_examples/color/index.jsx":ON,"../pages/components/details/_examples/content/index.jsx":PN,"../pages/components/details/_examples/lined/index.jsx":IN,"../pages/components/details/_examples/open/index.jsx":UN,"../pages/components/details/_examples/radius/index.jsx":WN,"../pages/components/details/_examples/shaded/index.jsx":GN,"../pages/components/details/_examples/shadow/index.jsx":QN,"../pages/components/details/_examples/summary/index.jsx":eR,"../pages/components/details/index.jsx":nR,"../pages/components/dropdown-menu/_examples/DropdownMenu/index.jsx":PD,"../pages/components/dropdown-menu/_examples/onSelect/index.jsx":ID,"../pages/components/dropdown-menu/_examples/options/index.jsx":XD,"../pages/components/dropdown-menu/index.jsx":qD,"../pages/components/dropdown/_examples/Dropdown/index.jsx":tO,"../pages/components/dropdown/_examples/content/index.jsx":oO,"../pages/components/dropdown/_examples/iconLeft/index.jsx":lO,"../pages/components/dropdown/_examples/iconLeftRotate/index.jsx":uO,"../pages/components/dropdown/_examples/iconRight/index.jsx":fO,"../pages/components/dropdown/_examples/iconRightRotate/index.jsx":gO,"../pages/components/dropdown/_examples/openOnHover/index.jsx":yO,"../pages/components/dropdown/_examples/right/index.jsx":bO,"../pages/components/dropdown/_examples/text/index.jsx":_O,"../pages/components/dropdown/_examples/wide/index.jsx":EO,"../pages/components/dropdown/index.jsx":NO,"../pages/components/icon/_examples/Icon/index.jsx":BO,"../pages/components/icon/_examples/IconLibrary/index.jsx":IO,"../pages/components/icon/_examples/className/index.jsx":UO,"../pages/components/icon/_examples/color/index.jsx":WO,"../pages/components/icon/_examples/name/index.jsx":GO,"../pages/components/icon/_examples/path/index.jsx":QO,"../pages/components/icon/_examples/size/index.jsx":eM,"../pages/components/icon/index.jsx":nM,"../pages/components/modal/_examples/Modal/index.jsx":aM,"../pages/components/modal/_examples/ModalState/index.jsx":iM,"../pages/components/modal/_examples/className/index.jsx":dM,"../pages/components/modal/_examples/close/index.jsx":hM,"../pages/components/modal/_examples/closeIcon/index.jsx":xM,"../pages/components/modal/_examples/footer/index.jsx":CM,"../pages/components/modal/_examples/header/index.jsx":SM,"../pages/components/modal/_examples/text/index.jsx":kM,"../pages/components/modal/_examples/title/index.jsx":LM,"../pages/components/modal/index.jsx":RM,"../pages/components/overlay/_examples/Overlay/index.jsx":MM,"../pages/components/overlay/_examples/OverlayState/index.jsx":$M,"../pages/components/overlay/_examples/className/index.jsx":FM,"../pages/components/overlay/_examples/custom/index.jsx":VM,"../pages/components/overlay/_examples/fixed/index.jsx":KM,"../pages/components/overlay/_examples/theme/index.jsx":qM,"../pages/components/overlay/index.jsx":eA,"../pages/components/pager/_examples/Context/index.jsx":sA,"../pages/components/pager/_examples/Pager/index.jsx":cA,"../pages/components/pager/_examples/className/index.jsx":pA,"../pages/components/pager/_examples/color/index.jsx":mA,"../pages/components/pager/_examples/icons/index.jsx":vA,"../pages/components/pager/_examples/nextIcon/index.jsx":bA,"../pages/components/pager/_examples/showFirstLast/index.jsx":_A,"../pages/components/pager/_examples/size/index.jsx":EA,"../pages/components/pager/index.jsx":NA,"../pages/components/radio/_examples/Overview/index.jsx":OA,"../pages/components/radio/_examples/border/index.jsx":PA,"../pages/components/radio/_examples/className/index.jsx":IA,"../pages/components/radio/_examples/disabled/index.jsx":UA,"../pages/components/radio/_examples/inline/index.jsx":WA,"../pages/components/radio/_examples/onChange/index.jsx":GA,"../pages/components/radio/_examples/options/index.jsx":QA,"../pages/components/radio/_examples/value/index.jsx":eP,"../pages/components/radio/index.jsx":nP,"../pages/components/search/_examples/Search/index.jsx":sP,"../pages/components/search/_examples/displayResult/index.jsx":uP,"../pages/components/search/_examples/displayValue/index.jsx":hP,"../pages/components/search/_examples/onSearch/index.jsx":vP,"../pages/components/search/index.jsx":CP,"../pages/components/select/_examples/Select/index.jsx":wP,"../pages/components/select/_examples/displayOption/index.jsx":EP,"../pages/components/select/_examples/displayValue/index.jsx":DP,"../pages/components/select/_examples/options/index.jsx":PP,"../pages/components/select/index.jsx":BP,"../pages/components/sortable/_examples/Horizontal/index.jsx":FP,"../pages/components/sortable/_examples/Sortable/index.jsx":VP,"../pages/components/sortable/_examples/Vertical/index.jsx":KP,"../pages/components/sortable/index.jsx":YP,"../pages/getting-started/installation.jsx":n$,"../pages/index.jsx":s$}));function P$(e){const n=Object.entries(e).map($$).filter(a=>!a.path.match(M$)).reduce((a,s)=>(a[s.path]=s,a),{}),r=Object.keys(n).filter(a=>a.match(O$)).sort((a,s)=>s.length-a.length);for(let a of r){const s=n[a];delete n[a];const l=a.replace(/_layout$/,""),i=l.length;s.path=l,s.children=[];const c=n[l];c&&(delete c.path,c.index=!0,s.children.push(c),delete n[l]);const u=Object.keys(n).filter(d=>d.slice(0,i)===l);for(let d of u){const p=n[d];delete n[d],d=d.slice(i),p.path=d.length?d:"/",s.children.push(p)}n[l]=s}return Object.values(n)}function $$([e,t]){const n=e.replace(/^[./]*pages/,"").replace(/\.jsx$/,"").replace(/index$/,"").replace(/\[(\w+)\]/,":$1"),r=t.default;return{path:n,Component:r}}const B$=yD([{path:"/",element:o.jsx(D$,{}),children:A$}],{basename:"/badger-react-ui"});Zc.createRoot(document.getElementById("root")).render(o.jsx(ee.StrictMode,{children:o.jsx(v$,{storageKey:"theme",children:o.jsx(Os.Provider,{children:o.jsx(TD,{router:B$})})})}));
