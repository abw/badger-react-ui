var i4=Object.defineProperty;var c4=(e,t,n)=>t in e?i4(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var De=(e,t,n)=>(c4(e,typeof t!="symbol"?t+"":t,n),n);function xh(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in e)){const s=Object.getOwnPropertyDescriptor(r,a);s&&Object.defineProperty(e,a,s.get?s:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}})();var Ll=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Pn(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var vh={exports:{}},di={},yh={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cs=Symbol.for("react.element"),u4=Symbol.for("react.portal"),d4=Symbol.for("react.fragment"),p4=Symbol.for("react.strict_mode"),f4=Symbol.for("react.profiler"),h4=Symbol.for("react.provider"),m4=Symbol.for("react.context"),g4=Symbol.for("react.forward_ref"),x4=Symbol.for("react.suspense"),v4=Symbol.for("react.memo"),y4=Symbol.for("react.lazy"),Fp=Symbol.iterator;function C4(e){return e===null||typeof e!="object"?null:(e=Fp&&e[Fp]||e["@@iterator"],typeof e=="function"?e:null)}var Ch={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},jh=Object.assign,bh={};function Bo(e,t,n){this.props=e,this.context=t,this.refs=bh,this.updater=n||Ch}Bo.prototype.isReactComponent={};Bo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Bo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Sh(){}Sh.prototype=Bo.prototype;function Ju(e,t,n){this.props=e,this.context=t,this.refs=bh,this.updater=n||Ch}var ed=Ju.prototype=new Sh;ed.constructor=Ju;jh(ed,Bo.prototype);ed.isPureReactComponent=!0;var Up=Array.isArray,wh=Object.prototype.hasOwnProperty,td={current:null},_h={key:!0,ref:!0,__self:!0,__source:!0};function Th(e,t,n){var r,a={},s=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(s=""+t.key),t)wh.call(t,r)&&!_h.hasOwnProperty(r)&&(a[r]=t[r]);var i=arguments.length-2;if(i===1)a.children=n;else if(1<i){for(var c=Array(i),u=0;u<i;u++)c[u]=arguments[u+2];a.children=c}if(e&&e.defaultProps)for(r in i=e.defaultProps,i)a[r]===void 0&&(a[r]=i[r]);return{$$typeof:cs,type:e,key:s,ref:l,props:a,_owner:td.current}}function j4(e,t){return{$$typeof:cs,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function nd(e){return typeof e=="object"&&e!==null&&e.$$typeof===cs}function b4(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Hp=/\/+/g;function Qi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?b4(""+e.key):t.toString(36)}function hl(e,t,n,r,a){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case cs:case u4:l=!0}}if(l)return l=e,a=a(l),e=r===""?"."+Qi(l,0):r,Up(a)?(n="",e!=null&&(n=e.replace(Hp,"$&/")+"/"),hl(a,t,n,"",function(u){return u})):a!=null&&(nd(a)&&(a=j4(a,n+(!a.key||l&&l.key===a.key?"":(""+a.key).replace(Hp,"$&/")+"/")+e)),t.push(a)),1;if(l=0,r=r===""?".":r+":",Up(e))for(var i=0;i<e.length;i++){s=e[i];var c=r+Qi(s,i);l+=hl(s,t,n,c,a)}else if(c=C4(e),typeof c=="function")for(e=c.call(e),i=0;!(s=e.next()).done;)s=s.value,c=r+Qi(s,i++),l+=hl(s,t,n,c,a);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function zs(e,t,n){if(e==null)return e;var r=[],a=0;return hl(e,r,"","",function(s){return t.call(n,s,a++)}),r}function S4(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var vt={current:null},ml={transition:null},w4={ReactCurrentDispatcher:vt,ReactCurrentBatchConfig:ml,ReactCurrentOwner:td};ie.Children={map:zs,forEach:function(e,t,n){zs(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return zs(e,function(){t++}),t},toArray:function(e){return zs(e,function(t){return t})||[]},only:function(e){if(!nd(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ie.Component=Bo;ie.Fragment=d4;ie.Profiler=f4;ie.PureComponent=Ju;ie.StrictMode=p4;ie.Suspense=x4;ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=w4;ie.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=jh({},e.props),a=e.key,s=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,l=td.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(c in t)wh.call(t,c)&&!_h.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&i!==void 0?i[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){i=Array(c);for(var u=0;u<c;u++)i[u]=arguments[u+2];r.children=i}return{$$typeof:cs,type:e.type,key:a,ref:s,props:r,_owner:l}};ie.createContext=function(e){return e={$$typeof:m4,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:h4,_context:e},e.Consumer=e};ie.createElement=Th;ie.createFactory=function(e){var t=Th.bind(null,e);return t.type=e,t};ie.createRef=function(){return{current:null}};ie.forwardRef=function(e){return{$$typeof:g4,render:e}};ie.isValidElement=nd;ie.lazy=function(e){return{$$typeof:y4,_payload:{_status:-1,_result:e},_init:S4}};ie.memo=function(e,t){return{$$typeof:v4,type:e,compare:t===void 0?null:t}};ie.startTransition=function(e){var t=ml.transition;ml.transition={};try{e()}finally{ml.transition=t}};ie.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ie.useCallback=function(e,t){return vt.current.useCallback(e,t)};ie.useContext=function(e){return vt.current.useContext(e)};ie.useDebugValue=function(){};ie.useDeferredValue=function(e){return vt.current.useDeferredValue(e)};ie.useEffect=function(e,t){return vt.current.useEffect(e,t)};ie.useId=function(){return vt.current.useId()};ie.useImperativeHandle=function(e,t,n){return vt.current.useImperativeHandle(e,t,n)};ie.useInsertionEffect=function(e,t){return vt.current.useInsertionEffect(e,t)};ie.useLayoutEffect=function(e,t){return vt.current.useLayoutEffect(e,t)};ie.useMemo=function(e,t){return vt.current.useMemo(e,t)};ie.useReducer=function(e,t,n){return vt.current.useReducer(e,t,n)};ie.useRef=function(e){return vt.current.useRef(e)};ie.useState=function(e){return vt.current.useState(e)};ie.useSyncExternalStore=function(e,t,n){return vt.current.useSyncExternalStore(e,t,n)};ie.useTransition=function(){return vt.current.useTransition()};ie.version="18.2.0";yh.exports=ie;var v=yh.exports;const ee=Pn(v),_4=xh({__proto__:null,default:ee},[v]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T4=v,k4=Symbol.for("react.element"),E4=Symbol.for("react.fragment"),L4=Object.prototype.hasOwnProperty,N4=T4.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,R4={key:!0,ref:!0,__self:!0,__source:!0};function kh(e,t,n){var r,a={},s=null,l=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)L4.call(t,r)&&!R4.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)a[r]===void 0&&(a[r]=t[r]);return{$$typeof:k4,type:e,key:s,ref:l,props:a,_owner:N4.current}}di.Fragment=E4;di.jsx=kh;di.jsxs=kh;vh.exports=di;var o=vh.exports,zc={},Eh={exports:{}},At={},Lh={exports:{}},Nh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(D,I){var B=D.length;D.push(I);e:for(;0<B;){var H=B-1>>>1,V=D[H];if(0<a(V,I))D[H]=I,D[B]=V,B=H;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var I=D[0],B=D.pop();if(B!==I){D[0]=B;e:for(var H=0,V=D.length,ye=V>>>1;H<ye;){var oe=2*(H+1)-1,ge=D[oe],re=oe+1,Te=D[re];if(0>a(ge,B))re<V&&0>a(Te,ge)?(D[H]=Te,D[re]=B,H=re):(D[H]=ge,D[oe]=B,H=oe);else if(re<V&&0>a(Te,B))D[H]=Te,D[re]=B,H=re;else break e}}return I}function a(D,I){var B=D.sortIndex-I.sortIndex;return B!==0?B:D.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var l=Date,i=l.now();e.unstable_now=function(){return l.now()-i}}var c=[],u=[],d=1,p=null,m=3,y=!1,b=!1,j=!1,_=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(D){for(var I=n(u);I!==null;){if(I.callback===null)r(u);else if(I.startTime<=D)r(u),I.sortIndex=I.expirationTime,t(c,I);else break;I=n(u)}}function C(D){if(j=!1,h(D),!b)if(n(c)!==null)b=!0,fe(S);else{var I=n(u);I!==null&&X(C,I.startTime-D)}}function S(D,I){b=!1,j&&(j=!1,x(k),k=-1),y=!0;var B=m;try{for(h(I),p=n(c);p!==null&&(!(p.expirationTime>I)||D&&!M());){var H=p.callback;if(typeof H=="function"){p.callback=null,m=p.priorityLevel;var V=H(p.expirationTime<=I);I=e.unstable_now(),typeof V=="function"?p.callback=V:p===n(c)&&r(c),h(I)}else r(c);p=n(c)}if(p!==null)var ye=!0;else{var oe=n(u);oe!==null&&X(C,oe.startTime-I),ye=!1}return ye}finally{p=null,m=B,y=!1}}var g=!1,w=null,k=-1,E=5,O=-1;function M(){return!(e.unstable_now()-O<E)}function F(){if(w!==null){var D=e.unstable_now();O=D;var I=!0;try{I=w(!0,D)}finally{I?G():(g=!1,w=null)}}else g=!1}var G;if(typeof f=="function")G=function(){f(F)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,ve=q.port2;q.port1.onmessage=F,G=function(){ve.postMessage(null)}}else G=function(){_(F,0)};function fe(D){w=D,g||(g=!0,G())}function X(D,I){k=_(function(){D(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(D){D.callback=null},e.unstable_continueExecution=function(){b||y||(b=!0,fe(S))},e.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<D?Math.floor(1e3/D):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(D){switch(m){case 1:case 2:case 3:var I=3;break;default:I=m}var B=m;m=I;try{return D()}finally{m=B}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(D,I){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var B=m;m=D;try{return I()}finally{m=B}},e.unstable_scheduleCallback=function(D,I,B){var H=e.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?H+B:H):B=H,D){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=B+V,D={id:d++,callback:I,priorityLevel:D,startTime:B,expirationTime:V,sortIndex:-1},B>H?(D.sortIndex=B,t(u,D),n(c)===null&&D===n(u)&&(j?(x(k),k=-1):j=!0,X(C,B-H))):(D.sortIndex=V,t(c,D),b||y||(b=!0,fe(S))),D},e.unstable_shouldYield=M,e.unstable_wrapCallback=function(D){var I=m;return function(){var B=m;m=I;try{return D.apply(this,arguments)}finally{m=B}}}})(Nh);Lh.exports=Nh;var O4=Lh.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rh=v,Mt=O4;function P(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Oh=new Set,za={};function Zr(e,t){No(e,t),No(e+"Capture",t)}function No(e,t){for(za[e]=t,e=0;e<t.length;e++)Oh.add(t[e])}var Nn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fc=Object.prototype.hasOwnProperty,D4=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Vp={},Wp={};function M4(e){return Fc.call(Wp,e)?!0:Fc.call(Vp,e)?!1:D4.test(e)?Wp[e]=!0:(Vp[e]=!0,!1)}function A4(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function P4(e,t,n,r){if(t===null||typeof t>"u"||A4(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function yt(e,t,n,r,a,s,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=l}var ot={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ot[e]=new yt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ot[t]=new yt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ot[e]=new yt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ot[e]=new yt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ot[e]=new yt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ot[e]=new yt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ot[e]=new yt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ot[e]=new yt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ot[e]=new yt(e,5,!1,e.toLowerCase(),null,!1,!1)});var rd=/[\-:]([a-z])/g;function od(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(rd,od);ot[t]=new yt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(rd,od);ot[t]=new yt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(rd,od);ot[t]=new yt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ot[e]=new yt(e,1,!1,e.toLowerCase(),null,!1,!1)});ot.xlinkHref=new yt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ot[e]=new yt(e,1,!1,e.toLowerCase(),null,!0,!0)});function ad(e,t,n,r){var a=ot.hasOwnProperty(t)?ot[t]:null;(a!==null?a.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(P4(t,n,a,r)&&(n=null),r||a===null?M4(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,r=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var $n=Rh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Fs=Symbol.for("react.element"),lo=Symbol.for("react.portal"),io=Symbol.for("react.fragment"),sd=Symbol.for("react.strict_mode"),Uc=Symbol.for("react.profiler"),Dh=Symbol.for("react.provider"),Mh=Symbol.for("react.context"),ld=Symbol.for("react.forward_ref"),Hc=Symbol.for("react.suspense"),Vc=Symbol.for("react.suspense_list"),id=Symbol.for("react.memo"),Yn=Symbol.for("react.lazy"),Ah=Symbol.for("react.offscreen"),Zp=Symbol.iterator;function ea(e){return e===null||typeof e!="object"?null:(e=Zp&&e[Zp]||e["@@iterator"],typeof e=="function"?e:null)}var Pe=Object.assign,qi;function ma(e){if(qi===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);qi=t&&t[1]||""}return`
`+qi+e}var Ji=!1;function ec(e,t){if(!e||Ji)return"";Ji=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var a=u.stack.split(`
`),s=r.stack.split(`
`),l=a.length-1,i=s.length-1;1<=l&&0<=i&&a[l]!==s[i];)i--;for(;1<=l&&0<=i;l--,i--)if(a[l]!==s[i]){if(l!==1||i!==1)do if(l--,i--,0>i||a[l]!==s[i]){var c=`
`+a[l].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=l&&0<=i);break}}}finally{Ji=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ma(e):""}function $4(e){switch(e.tag){case 5:return ma(e.type);case 16:return ma("Lazy");case 13:return ma("Suspense");case 19:return ma("SuspenseList");case 0:case 2:case 15:return e=ec(e.type,!1),e;case 11:return e=ec(e.type.render,!1),e;case 1:return e=ec(e.type,!0),e;default:return""}}function Wc(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case io:return"Fragment";case lo:return"Portal";case Uc:return"Profiler";case sd:return"StrictMode";case Hc:return"Suspense";case Vc:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Mh:return(e.displayName||"Context")+".Consumer";case Dh:return(e._context.displayName||"Context")+".Provider";case ld:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case id:return t=e.displayName||null,t!==null?t:Wc(e.type)||"Memo";case Yn:t=e._payload,e=e._init;try{return Wc(e(t))}catch{}}return null}function I4(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Wc(t);case 8:return t===sd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function pr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ph(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function B4(e){var t=Ph(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(l){r=""+l,s.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Us(e){e._valueTracker||(e._valueTracker=B4(e))}function $h(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ph(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Nl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Zc(e,t){var n=t.checked;return Pe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Kp(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=pr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ih(e,t){t=t.checked,t!=null&&ad(e,"checked",t,!1)}function Kc(e,t){Ih(e,t);var n=pr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Gc(e,t.type,n):t.hasOwnProperty("defaultValue")&&Gc(e,t.type,pr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Gp(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Gc(e,t,n){(t!=="number"||Nl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ga=Array.isArray;function So(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+pr(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Yc(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(P(91));return Pe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Yp(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(P(92));if(ga(n)){if(1<n.length)throw Error(P(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:pr(n)}}function Bh(e,t){var n=pr(t.value),r=pr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Xp(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function zh(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xc(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?zh(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Hs,Fh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Hs=Hs||document.createElement("div"),Hs.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Hs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Fa(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var _a={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},z4=["Webkit","ms","Moz","O"];Object.keys(_a).forEach(function(e){z4.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),_a[t]=_a[e]})});function Uh(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||_a.hasOwnProperty(e)&&_a[e]?(""+t).trim():t+"px"}function Hh(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,a=Uh(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}var F4=Pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qc(e,t){if(t){if(F4[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(P(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(P(61))}if(t.style!=null&&typeof t.style!="object")throw Error(P(62))}}function qc(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Jc=null;function cd(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var eu=null,wo=null,_o=null;function Qp(e){if(e=ps(e)){if(typeof eu!="function")throw Error(P(280));var t=e.stateNode;t&&(t=gi(t),eu(e.stateNode,e.type,t))}}function Vh(e){wo?_o?_o.push(e):_o=[e]:wo=e}function Wh(){if(wo){var e=wo,t=_o;if(_o=wo=null,Qp(e),t)for(e=0;e<t.length;e++)Qp(t[e])}}function Zh(e,t){return e(t)}function Kh(){}var tc=!1;function Gh(e,t,n){if(tc)return e(t,n);tc=!0;try{return Zh(e,t,n)}finally{tc=!1,(wo!==null||_o!==null)&&(Kh(),Wh())}}function Ua(e,t){var n=e.stateNode;if(n===null)return null;var r=gi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(P(231,t,typeof n));return n}var tu=!1;if(Nn)try{var ta={};Object.defineProperty(ta,"passive",{get:function(){tu=!0}}),window.addEventListener("test",ta,ta),window.removeEventListener("test",ta,ta)}catch{tu=!1}function U4(e,t,n,r,a,s,l,i,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Ta=!1,Rl=null,Ol=!1,nu=null,H4={onError:function(e){Ta=!0,Rl=e}};function V4(e,t,n,r,a,s,l,i,c){Ta=!1,Rl=null,U4.apply(H4,arguments)}function W4(e,t,n,r,a,s,l,i,c){if(V4.apply(this,arguments),Ta){if(Ta){var u=Rl;Ta=!1,Rl=null}else throw Error(P(198));Ol||(Ol=!0,nu=u)}}function Kr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Yh(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function qp(e){if(Kr(e)!==e)throw Error(P(188))}function Z4(e){var t=e.alternate;if(!t){if(t=Kr(e),t===null)throw Error(P(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return qp(a),e;if(s===r)return qp(a),t;s=s.sibling}throw Error(P(188))}if(n.return!==r.return)n=a,r=s;else{for(var l=!1,i=a.child;i;){if(i===n){l=!0,n=a,r=s;break}if(i===r){l=!0,r=a,n=s;break}i=i.sibling}if(!l){for(i=s.child;i;){if(i===n){l=!0,n=s,r=a;break}if(i===r){l=!0,r=s,n=a;break}i=i.sibling}if(!l)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?e:t}function Xh(e){return e=Z4(e),e!==null?Qh(e):null}function Qh(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Qh(e);if(t!==null)return t;e=e.sibling}return null}var qh=Mt.unstable_scheduleCallback,Jp=Mt.unstable_cancelCallback,K4=Mt.unstable_shouldYield,G4=Mt.unstable_requestPaint,Ue=Mt.unstable_now,Y4=Mt.unstable_getCurrentPriorityLevel,ud=Mt.unstable_ImmediatePriority,Jh=Mt.unstable_UserBlockingPriority,Dl=Mt.unstable_NormalPriority,X4=Mt.unstable_LowPriority,e2=Mt.unstable_IdlePriority,pi=null,vn=null;function Q4(e){if(vn&&typeof vn.onCommitFiberRoot=="function")try{vn.onCommitFiberRoot(pi,e,void 0,(e.current.flags&128)===128)}catch{}}var on=Math.clz32?Math.clz32:e5,q4=Math.log,J4=Math.LN2;function e5(e){return e>>>=0,e===0?32:31-(q4(e)/J4|0)|0}var Vs=64,Ws=4194304;function xa(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ml(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,a=e.suspendedLanes,s=e.pingedLanes,l=n&268435455;if(l!==0){var i=l&~a;i!==0?r=xa(i):(s&=l,s!==0&&(r=xa(s)))}else l=n&~a,l!==0?r=xa(l):s!==0&&(r=xa(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&a)&&(a=r&-r,s=t&-t,a>=s||a===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-on(t),a=1<<n,r|=e[n],t&=~a;return r}function t5(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function n5(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,s=e.pendingLanes;0<s;){var l=31-on(s),i=1<<l,c=a[l];c===-1?(!(i&n)||i&r)&&(a[l]=t5(i,t)):c<=t&&(e.expiredLanes|=i),s&=~i}}function ru(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function t2(){var e=Vs;return Vs<<=1,!(Vs&4194240)&&(Vs=64),e}function nc(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function us(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-on(t),e[t]=n}function r5(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-on(n),s=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~s}}function dd(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-on(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var xe=0;function n2(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var r2,pd,o2,a2,s2,ou=!1,Zs=[],or=null,ar=null,sr=null,Ha=new Map,Va=new Map,Jn=[],o5="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ef(e,t){switch(e){case"focusin":case"focusout":or=null;break;case"dragenter":case"dragleave":ar=null;break;case"mouseover":case"mouseout":sr=null;break;case"pointerover":case"pointerout":Ha.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Va.delete(t.pointerId)}}function na(e,t,n,r,a,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[a]},t!==null&&(t=ps(t),t!==null&&pd(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function a5(e,t,n,r,a){switch(t){case"focusin":return or=na(or,e,t,n,r,a),!0;case"dragenter":return ar=na(ar,e,t,n,r,a),!0;case"mouseover":return sr=na(sr,e,t,n,r,a),!0;case"pointerover":var s=a.pointerId;return Ha.set(s,na(Ha.get(s)||null,e,t,n,r,a)),!0;case"gotpointercapture":return s=a.pointerId,Va.set(s,na(Va.get(s)||null,e,t,n,r,a)),!0}return!1}function l2(e){var t=Or(e.target);if(t!==null){var n=Kr(t);if(n!==null){if(t=n.tag,t===13){if(t=Yh(n),t!==null){e.blockedOn=t,s2(e.priority,function(){o2(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function gl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=au(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Jc=r,n.target.dispatchEvent(r),Jc=null}else return t=ps(n),t!==null&&pd(t),e.blockedOn=n,!1;t.shift()}return!0}function tf(e,t,n){gl(e)&&n.delete(t)}function s5(){ou=!1,or!==null&&gl(or)&&(or=null),ar!==null&&gl(ar)&&(ar=null),sr!==null&&gl(sr)&&(sr=null),Ha.forEach(tf),Va.forEach(tf)}function ra(e,t){e.blockedOn===t&&(e.blockedOn=null,ou||(ou=!0,Mt.unstable_scheduleCallback(Mt.unstable_NormalPriority,s5)))}function Wa(e){function t(a){return ra(a,e)}if(0<Zs.length){ra(Zs[0],e);for(var n=1;n<Zs.length;n++){var r=Zs[n];r.blockedOn===e&&(r.blockedOn=null)}}for(or!==null&&ra(or,e),ar!==null&&ra(ar,e),sr!==null&&ra(sr,e),Ha.forEach(t),Va.forEach(t),n=0;n<Jn.length;n++)r=Jn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Jn.length&&(n=Jn[0],n.blockedOn===null);)l2(n),n.blockedOn===null&&Jn.shift()}var To=$n.ReactCurrentBatchConfig,Al=!0;function l5(e,t,n,r){var a=xe,s=To.transition;To.transition=null;try{xe=1,fd(e,t,n,r)}finally{xe=a,To.transition=s}}function i5(e,t,n,r){var a=xe,s=To.transition;To.transition=null;try{xe=4,fd(e,t,n,r)}finally{xe=a,To.transition=s}}function fd(e,t,n,r){if(Al){var a=au(e,t,n,r);if(a===null)pc(e,t,r,Pl,n),ef(e,r);else if(a5(a,e,t,n,r))r.stopPropagation();else if(ef(e,r),t&4&&-1<o5.indexOf(e)){for(;a!==null;){var s=ps(a);if(s!==null&&r2(s),s=au(e,t,n,r),s===null&&pc(e,t,r,Pl,n),s===a)break;a=s}a!==null&&r.stopPropagation()}else pc(e,t,r,null,n)}}var Pl=null;function au(e,t,n,r){if(Pl=null,e=cd(r),e=Or(e),e!==null)if(t=Kr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Yh(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Pl=e,null}function i2(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Y4()){case ud:return 1;case Jh:return 4;case Dl:case X4:return 16;case e2:return 536870912;default:return 16}default:return 16}}var nr=null,hd=null,xl=null;function c2(){if(xl)return xl;var e,t=hd,n=t.length,r,a="value"in nr?nr.value:nr.textContent,s=a.length;for(e=0;e<n&&t[e]===a[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===a[s-r];r++);return xl=a.slice(e,1<r?1-r:void 0)}function vl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ks(){return!0}function nf(){return!1}function Pt(e){function t(n,r,a,s,l){this._reactName=n,this._targetInst=a,this.type=r,this.nativeEvent=s,this.target=l,this.currentTarget=null;for(var i in e)e.hasOwnProperty(i)&&(n=e[i],this[i]=n?n(s):s[i]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ks:nf,this.isPropagationStopped=nf,this}return Pe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ks)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ks)},persist:function(){},isPersistent:Ks}),t}var zo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},md=Pt(zo),ds=Pe({},zo,{view:0,detail:0}),c5=Pt(ds),rc,oc,oa,fi=Pe({},ds,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gd,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==oa&&(oa&&e.type==="mousemove"?(rc=e.screenX-oa.screenX,oc=e.screenY-oa.screenY):oc=rc=0,oa=e),rc)},movementY:function(e){return"movementY"in e?e.movementY:oc}}),rf=Pt(fi),u5=Pe({},fi,{dataTransfer:0}),d5=Pt(u5),p5=Pe({},ds,{relatedTarget:0}),ac=Pt(p5),f5=Pe({},zo,{animationName:0,elapsedTime:0,pseudoElement:0}),h5=Pt(f5),m5=Pe({},zo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),g5=Pt(m5),x5=Pe({},zo,{data:0}),of=Pt(x5),v5={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},y5={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},C5={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function j5(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=C5[e])?!!t[e]:!1}function gd(){return j5}var b5=Pe({},ds,{key:function(e){if(e.key){var t=v5[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=vl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?y5[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gd,charCode:function(e){return e.type==="keypress"?vl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?vl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),S5=Pt(b5),w5=Pe({},fi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),af=Pt(w5),_5=Pe({},ds,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gd}),T5=Pt(_5),k5=Pe({},zo,{propertyName:0,elapsedTime:0,pseudoElement:0}),E5=Pt(k5),L5=Pe({},fi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),N5=Pt(L5),R5=[9,13,27,32],xd=Nn&&"CompositionEvent"in window,ka=null;Nn&&"documentMode"in document&&(ka=document.documentMode);var O5=Nn&&"TextEvent"in window&&!ka,u2=Nn&&(!xd||ka&&8<ka&&11>=ka),sf=String.fromCharCode(32),lf=!1;function d2(e,t){switch(e){case"keyup":return R5.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function p2(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var co=!1;function D5(e,t){switch(e){case"compositionend":return p2(t);case"keypress":return t.which!==32?null:(lf=!0,sf);case"textInput":return e=t.data,e===sf&&lf?null:e;default:return null}}function M5(e,t){if(co)return e==="compositionend"||!xd&&d2(e,t)?(e=c2(),xl=hd=nr=null,co=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return u2&&t.locale!=="ko"?null:t.data;default:return null}}var A5={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!A5[e.type]:t==="textarea"}function f2(e,t,n,r){Vh(r),t=$l(t,"onChange"),0<t.length&&(n=new md("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ea=null,Za=null;function P5(e){w2(e,0)}function hi(e){var t=fo(e);if($h(t))return e}function $5(e,t){if(e==="change")return t}var h2=!1;if(Nn){var sc;if(Nn){var lc="oninput"in document;if(!lc){var uf=document.createElement("div");uf.setAttribute("oninput","return;"),lc=typeof uf.oninput=="function"}sc=lc}else sc=!1;h2=sc&&(!document.documentMode||9<document.documentMode)}function df(){Ea&&(Ea.detachEvent("onpropertychange",m2),Za=Ea=null)}function m2(e){if(e.propertyName==="value"&&hi(Za)){var t=[];f2(t,Za,e,cd(e)),Gh(P5,t)}}function I5(e,t,n){e==="focusin"?(df(),Ea=t,Za=n,Ea.attachEvent("onpropertychange",m2)):e==="focusout"&&df()}function B5(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return hi(Za)}function z5(e,t){if(e==="click")return hi(t)}function F5(e,t){if(e==="input"||e==="change")return hi(t)}function U5(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var sn=typeof Object.is=="function"?Object.is:U5;function Ka(e,t){if(sn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!Fc.call(t,a)||!sn(e[a],t[a]))return!1}return!0}function pf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ff(e,t){var n=pf(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=pf(n)}}function g2(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?g2(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function x2(){for(var e=window,t=Nl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Nl(e.document)}return t}function vd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function H5(e){var t=x2(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&g2(n.ownerDocument.documentElement,n)){if(r!==null&&vd(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,s=Math.min(r.start,a);r=r.end===void 0?s:Math.min(r.end,a),!e.extend&&s>r&&(a=r,r=s,s=a),a=ff(n,s);var l=ff(n,r);a&&l&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var V5=Nn&&"documentMode"in document&&11>=document.documentMode,uo=null,su=null,La=null,lu=!1;function hf(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;lu||uo==null||uo!==Nl(r)||(r=uo,"selectionStart"in r&&vd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),La&&Ka(La,r)||(La=r,r=$l(su,"onSelect"),0<r.length&&(t=new md("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=uo)))}function Gs(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var po={animationend:Gs("Animation","AnimationEnd"),animationiteration:Gs("Animation","AnimationIteration"),animationstart:Gs("Animation","AnimationStart"),transitionend:Gs("Transition","TransitionEnd")},ic={},v2={};Nn&&(v2=document.createElement("div").style,"AnimationEvent"in window||(delete po.animationend.animation,delete po.animationiteration.animation,delete po.animationstart.animation),"TransitionEvent"in window||delete po.transitionend.transition);function mi(e){if(ic[e])return ic[e];if(!po[e])return e;var t=po[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in v2)return ic[e]=t[n];return e}var y2=mi("animationend"),C2=mi("animationiteration"),j2=mi("animationstart"),b2=mi("transitionend"),S2=new Map,mf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xr(e,t){S2.set(e,t),Zr(t,[e])}for(var cc=0;cc<mf.length;cc++){var uc=mf[cc],W5=uc.toLowerCase(),Z5=uc[0].toUpperCase()+uc.slice(1);xr(W5,"on"+Z5)}xr(y2,"onAnimationEnd");xr(C2,"onAnimationIteration");xr(j2,"onAnimationStart");xr("dblclick","onDoubleClick");xr("focusin","onFocus");xr("focusout","onBlur");xr(b2,"onTransitionEnd");No("onMouseEnter",["mouseout","mouseover"]);No("onMouseLeave",["mouseout","mouseover"]);No("onPointerEnter",["pointerout","pointerover"]);No("onPointerLeave",["pointerout","pointerover"]);Zr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Zr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Zr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Zr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Zr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Zr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var va="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),K5=new Set("cancel close invalid load scroll toggle".split(" ").concat(va));function gf(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,W4(r,t,void 0,e),e.currentTarget=null}function w2(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var l=r.length-1;0<=l;l--){var i=r[l],c=i.instance,u=i.currentTarget;if(i=i.listener,c!==s&&a.isPropagationStopped())break e;gf(a,i,u),s=c}else for(l=0;l<r.length;l++){if(i=r[l],c=i.instance,u=i.currentTarget,i=i.listener,c!==s&&a.isPropagationStopped())break e;gf(a,i,u),s=c}}}if(Ol)throw e=nu,Ol=!1,nu=null,e}function we(e,t){var n=t[pu];n===void 0&&(n=t[pu]=new Set);var r=e+"__bubble";n.has(r)||(_2(t,e,2,!1),n.add(r))}function dc(e,t,n){var r=0;t&&(r|=4),_2(n,e,r,t)}var Ys="_reactListening"+Math.random().toString(36).slice(2);function Ga(e){if(!e[Ys]){e[Ys]=!0,Oh.forEach(function(n){n!=="selectionchange"&&(K5.has(n)||dc(n,!1,e),dc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ys]||(t[Ys]=!0,dc("selectionchange",!1,t))}}function _2(e,t,n,r){switch(i2(t)){case 1:var a=l5;break;case 4:a=i5;break;default:a=fd}n=a.bind(null,t,n,e),a=void 0,!tu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function pc(e,t,n,r,a){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var i=r.stateNode.containerInfo;if(i===a||i.nodeType===8&&i.parentNode===a)break;if(l===4)for(l=r.return;l!==null;){var c=l.tag;if((c===3||c===4)&&(c=l.stateNode.containerInfo,c===a||c.nodeType===8&&c.parentNode===a))return;l=l.return}for(;i!==null;){if(l=Or(i),l===null)return;if(c=l.tag,c===5||c===6){r=s=l;continue e}i=i.parentNode}}r=r.return}Gh(function(){var u=s,d=cd(n),p=[];e:{var m=S2.get(e);if(m!==void 0){var y=md,b=e;switch(e){case"keypress":if(vl(n)===0)break e;case"keydown":case"keyup":y=S5;break;case"focusin":b="focus",y=ac;break;case"focusout":b="blur",y=ac;break;case"beforeblur":case"afterblur":y=ac;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=rf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=d5;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=T5;break;case y2:case C2:case j2:y=h5;break;case b2:y=E5;break;case"scroll":y=c5;break;case"wheel":y=N5;break;case"copy":case"cut":case"paste":y=g5;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=af}var j=(t&4)!==0,_=!j&&e==="scroll",x=j?m!==null?m+"Capture":null:m;j=[];for(var f=u,h;f!==null;){h=f;var C=h.stateNode;if(h.tag===5&&C!==null&&(h=C,x!==null&&(C=Ua(f,x),C!=null&&j.push(Ya(f,C,h)))),_)break;f=f.return}0<j.length&&(m=new y(m,b,null,n,d),p.push({event:m,listeners:j}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",m&&n!==Jc&&(b=n.relatedTarget||n.fromElement)&&(Or(b)||b[Rn]))break e;if((y||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,y?(b=n.relatedTarget||n.toElement,y=u,b=b?Or(b):null,b!==null&&(_=Kr(b),b!==_||b.tag!==5&&b.tag!==6)&&(b=null)):(y=null,b=u),y!==b)){if(j=rf,C="onMouseLeave",x="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(j=af,C="onPointerLeave",x="onPointerEnter",f="pointer"),_=y==null?m:fo(y),h=b==null?m:fo(b),m=new j(C,f+"leave",y,n,d),m.target=_,m.relatedTarget=h,C=null,Or(d)===u&&(j=new j(x,f+"enter",b,n,d),j.target=h,j.relatedTarget=_,C=j),_=C,y&&b)t:{for(j=y,x=b,f=0,h=j;h;h=oo(h))f++;for(h=0,C=x;C;C=oo(C))h++;for(;0<f-h;)j=oo(j),f--;for(;0<h-f;)x=oo(x),h--;for(;f--;){if(j===x||x!==null&&j===x.alternate)break t;j=oo(j),x=oo(x)}j=null}else j=null;y!==null&&xf(p,m,y,j,!1),b!==null&&_!==null&&xf(p,_,b,j,!0)}}e:{if(m=u?fo(u):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var S=$5;else if(cf(m))if(h2)S=F5;else{S=B5;var g=I5}else(y=m.nodeName)&&y.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(S=z5);if(S&&(S=S(e,u))){f2(p,S,n,d);break e}g&&g(e,m,u),e==="focusout"&&(g=m._wrapperState)&&g.controlled&&m.type==="number"&&Gc(m,"number",m.value)}switch(g=u?fo(u):window,e){case"focusin":(cf(g)||g.contentEditable==="true")&&(uo=g,su=u,La=null);break;case"focusout":La=su=uo=null;break;case"mousedown":lu=!0;break;case"contextmenu":case"mouseup":case"dragend":lu=!1,hf(p,n,d);break;case"selectionchange":if(V5)break;case"keydown":case"keyup":hf(p,n,d)}var w;if(xd)e:{switch(e){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else co?d2(e,n)&&(k="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(u2&&n.locale!=="ko"&&(co||k!=="onCompositionStart"?k==="onCompositionEnd"&&co&&(w=c2()):(nr=d,hd="value"in nr?nr.value:nr.textContent,co=!0)),g=$l(u,k),0<g.length&&(k=new of(k,e,null,n,d),p.push({event:k,listeners:g}),w?k.data=w:(w=p2(n),w!==null&&(k.data=w)))),(w=O5?D5(e,n):M5(e,n))&&(u=$l(u,"onBeforeInput"),0<u.length&&(d=new of("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:u}),d.data=w))}w2(p,t)})}function Ya(e,t,n){return{instance:e,listener:t,currentTarget:n}}function $l(e,t){for(var n=t+"Capture",r=[];e!==null;){var a=e,s=a.stateNode;a.tag===5&&s!==null&&(a=s,s=Ua(e,n),s!=null&&r.unshift(Ya(e,s,a)),s=Ua(e,t),s!=null&&r.push(Ya(e,s,a))),e=e.return}return r}function oo(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function xf(e,t,n,r,a){for(var s=t._reactName,l=[];n!==null&&n!==r;){var i=n,c=i.alternate,u=i.stateNode;if(c!==null&&c===r)break;i.tag===5&&u!==null&&(i=u,a?(c=Ua(n,s),c!=null&&l.unshift(Ya(n,c,i))):a||(c=Ua(n,s),c!=null&&l.push(Ya(n,c,i)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var G5=/\r\n?/g,Y5=/\u0000|\uFFFD/g;function vf(e){return(typeof e=="string"?e:""+e).replace(G5,`
`).replace(Y5,"")}function Xs(e,t,n){if(t=vf(t),vf(e)!==t&&n)throw Error(P(425))}function Il(){}var iu=null,cu=null;function uu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var du=typeof setTimeout=="function"?setTimeout:void 0,X5=typeof clearTimeout=="function"?clearTimeout:void 0,yf=typeof Promise=="function"?Promise:void 0,Q5=typeof queueMicrotask=="function"?queueMicrotask:typeof yf<"u"?function(e){return yf.resolve(null).then(e).catch(q5)}:du;function q5(e){setTimeout(function(){throw e})}function fc(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(r===0){e.removeChild(a),Wa(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=a}while(n);Wa(t)}function lr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Cf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Fo=Math.random().toString(36).slice(2),xn="__reactFiber$"+Fo,Xa="__reactProps$"+Fo,Rn="__reactContainer$"+Fo,pu="__reactEvents$"+Fo,J5="__reactListeners$"+Fo,e6="__reactHandles$"+Fo;function Or(e){var t=e[xn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Rn]||n[xn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Cf(e);e!==null;){if(n=e[xn])return n;e=Cf(e)}return t}e=n,n=e.parentNode}return null}function ps(e){return e=e[xn]||e[Rn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function fo(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function gi(e){return e[Xa]||null}var fu=[],ho=-1;function vr(e){return{current:e}}function _e(e){0>ho||(e.current=fu[ho],fu[ho]=null,ho--)}function be(e,t){ho++,fu[ho]=e.current,e.current=t}var fr={},pt=vr(fr),kt=vr(!1),Br=fr;function Ro(e,t){var n=e.type.contextTypes;if(!n)return fr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a={},s;for(s in n)a[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Et(e){return e=e.childContextTypes,e!=null}function Bl(){_e(kt),_e(pt)}function jf(e,t,n){if(pt.current!==fr)throw Error(P(168));be(pt,t),be(kt,n)}function T2(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var a in r)if(!(a in t))throw Error(P(108,I4(e)||"Unknown",a));return Pe({},n,r)}function zl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||fr,Br=pt.current,be(pt,e),be(kt,kt.current),!0}function bf(e,t,n){var r=e.stateNode;if(!r)throw Error(P(169));n?(e=T2(e,t,Br),r.__reactInternalMemoizedMergedChildContext=e,_e(kt),_e(pt),be(pt,e)):_e(kt),be(kt,n)}var wn=null,xi=!1,hc=!1;function k2(e){wn===null?wn=[e]:wn.push(e)}function t6(e){xi=!0,k2(e)}function yr(){if(!hc&&wn!==null){hc=!0;var e=0,t=xe;try{var n=wn;for(xe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}wn=null,xi=!1}catch(a){throw wn!==null&&(wn=wn.slice(e+1)),qh(ud,yr),a}finally{xe=t,hc=!1}}return null}var mo=[],go=0,Fl=null,Ul=0,zt=[],Ft=0,zr=null,Tn=1,kn="";function Nr(e,t){mo[go++]=Ul,mo[go++]=Fl,Fl=e,Ul=t}function E2(e,t,n){zt[Ft++]=Tn,zt[Ft++]=kn,zt[Ft++]=zr,zr=e;var r=Tn;e=kn;var a=32-on(r)-1;r&=~(1<<a),n+=1;var s=32-on(t)+a;if(30<s){var l=a-a%5;s=(r&(1<<l)-1).toString(32),r>>=l,a-=l,Tn=1<<32-on(t)+a|n<<a|r,kn=s+e}else Tn=1<<s|n<<a|r,kn=e}function yd(e){e.return!==null&&(Nr(e,1),E2(e,1,0))}function Cd(e){for(;e===Fl;)Fl=mo[--go],mo[go]=null,Ul=mo[--go],mo[go]=null;for(;e===zr;)zr=zt[--Ft],zt[Ft]=null,kn=zt[--Ft],zt[Ft]=null,Tn=zt[--Ft],zt[Ft]=null}var Dt=null,Ot=null,Le=!1,rn=null;function L2(e,t){var n=Ut(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Sf(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Dt=e,Ot=lr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Dt=e,Ot=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=zr!==null?{id:Tn,overflow:kn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ut(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Dt=e,Ot=null,!0):!1;default:return!1}}function hu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function mu(e){if(Le){var t=Ot;if(t){var n=t;if(!Sf(e,t)){if(hu(e))throw Error(P(418));t=lr(n.nextSibling);var r=Dt;t&&Sf(e,t)?L2(r,n):(e.flags=e.flags&-4097|2,Le=!1,Dt=e)}}else{if(hu(e))throw Error(P(418));e.flags=e.flags&-4097|2,Le=!1,Dt=e}}}function wf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Dt=e}function Qs(e){if(e!==Dt)return!1;if(!Le)return wf(e),Le=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!uu(e.type,e.memoizedProps)),t&&(t=Ot)){if(hu(e))throw N2(),Error(P(418));for(;t;)L2(e,t),t=lr(t.nextSibling)}if(wf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ot=lr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ot=null}}else Ot=Dt?lr(e.stateNode.nextSibling):null;return!0}function N2(){for(var e=Ot;e;)e=lr(e.nextSibling)}function Oo(){Ot=Dt=null,Le=!1}function jd(e){rn===null?rn=[e]:rn.push(e)}var n6=$n.ReactCurrentBatchConfig;function en(e,t){if(e&&e.defaultProps){t=Pe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Hl=vr(null),Vl=null,xo=null,bd=null;function Sd(){bd=xo=Vl=null}function wd(e){var t=Hl.current;_e(Hl),e._currentValue=t}function gu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ko(e,t){Vl=e,bd=xo=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Tt=!0),e.firstContext=null)}function Wt(e){var t=e._currentValue;if(bd!==e)if(e={context:e,memoizedValue:t,next:null},xo===null){if(Vl===null)throw Error(P(308));xo=e,Vl.dependencies={lanes:0,firstContext:e}}else xo=xo.next=e;return t}var Dr=null;function _d(e){Dr===null?Dr=[e]:Dr.push(e)}function R2(e,t,n,r){var a=t.interleaved;return a===null?(n.next=n,_d(t)):(n.next=a.next,a.next=n),t.interleaved=n,On(e,r)}function On(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Xn=!1;function Td(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function O2(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function En(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ir(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,pe&2){var a=r.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),r.pending=t,On(e,n)}return a=r.interleaved,a===null?(t.next=t,_d(r)):(t.next=a.next,a.next=t),r.interleaved=t,On(e,n)}function yl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,dd(e,n)}}function _f(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var a=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?a=s=l:s=s.next=l,n=n.next}while(n!==null);s===null?a=s=t:s=s.next=t}else a=s=t;n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Wl(e,t,n,r){var a=e.updateQueue;Xn=!1;var s=a.firstBaseUpdate,l=a.lastBaseUpdate,i=a.shared.pending;if(i!==null){a.shared.pending=null;var c=i,u=c.next;c.next=null,l===null?s=u:l.next=u,l=c;var d=e.alternate;d!==null&&(d=d.updateQueue,i=d.lastBaseUpdate,i!==l&&(i===null?d.firstBaseUpdate=u:i.next=u,d.lastBaseUpdate=c))}if(s!==null){var p=a.baseState;l=0,d=u=c=null,i=s;do{var m=i.lane,y=i.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:y,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null});e:{var b=e,j=i;switch(m=t,y=n,j.tag){case 1:if(b=j.payload,typeof b=="function"){p=b.call(y,p,m);break e}p=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=j.payload,m=typeof b=="function"?b.call(y,p,m):b,m==null)break e;p=Pe({},p,m);break e;case 2:Xn=!0}}i.callback!==null&&i.lane!==0&&(e.flags|=64,m=a.effects,m===null?a.effects=[i]:m.push(i))}else y={eventTime:y,lane:m,tag:i.tag,payload:i.payload,callback:i.callback,next:null},d===null?(u=d=y,c=p):d=d.next=y,l|=m;if(i=i.next,i===null){if(i=a.shared.pending,i===null)break;m=i,i=m.next,m.next=null,a.lastBaseUpdate=m,a.shared.pending=null}}while(1);if(d===null&&(c=p),a.baseState=c,a.firstBaseUpdate=u,a.lastBaseUpdate=d,t=a.shared.interleaved,t!==null){a=t;do l|=a.lane,a=a.next;while(a!==t)}else s===null&&(a.shared.lanes=0);Ur|=l,e.lanes=l,e.memoizedState=p}}function Tf(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(a!==null){if(r.callback=null,r=n,typeof a!="function")throw Error(P(191,a));a.call(r)}}}var D2=new Rh.Component().refs;function xu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Pe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var vi={isMounted:function(e){return(e=e._reactInternals)?Kr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=xt(),a=ur(e),s=En(r,a);s.payload=t,n!=null&&(s.callback=n),t=ir(e,s,a),t!==null&&(an(t,e,a,r),yl(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=xt(),a=ur(e),s=En(r,a);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=ir(e,s,a),t!==null&&(an(t,e,a,r),yl(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=xt(),r=ur(e),a=En(n,r);a.tag=2,t!=null&&(a.callback=t),t=ir(e,a,r),t!==null&&(an(t,e,r,n),yl(t,e,r))}};function kf(e,t,n,r,a,s,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,l):t.prototype&&t.prototype.isPureReactComponent?!Ka(n,r)||!Ka(a,s):!0}function M2(e,t,n){var r=!1,a=fr,s=t.contextType;return typeof s=="object"&&s!==null?s=Wt(s):(a=Et(t)?Br:pt.current,r=t.contextTypes,s=(r=r!=null)?Ro(e,a):fr),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=vi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=s),t}function Ef(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&vi.enqueueReplaceState(t,t.state,null)}function vu(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs=D2,Td(e);var s=t.contextType;typeof s=="object"&&s!==null?a.context=Wt(s):(s=Et(t)?Br:pt.current,a.context=Ro(e,s)),a.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(xu(e,t,s,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&vi.enqueueReplaceState(a,a.state,null),Wl(e,n,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function aa(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,e));var a=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(l){var i=a.refs;i===D2&&(i=a.refs={}),l===null?delete i[s]:i[s]=l},t._stringRef=s,t)}if(typeof e!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,e))}return e}function qs(e,t){throw e=Object.prototype.toString.call(t),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Lf(e){var t=e._init;return t(e._payload)}function A2(e){function t(x,f){if(e){var h=x.deletions;h===null?(x.deletions=[f],x.flags|=16):h.push(f)}}function n(x,f){if(!e)return null;for(;f!==null;)t(x,f),f=f.sibling;return null}function r(x,f){for(x=new Map;f!==null;)f.key!==null?x.set(f.key,f):x.set(f.index,f),f=f.sibling;return x}function a(x,f){return x=dr(x,f),x.index=0,x.sibling=null,x}function s(x,f,h){return x.index=h,e?(h=x.alternate,h!==null?(h=h.index,h<f?(x.flags|=2,f):h):(x.flags|=2,f)):(x.flags|=1048576,f)}function l(x){return e&&x.alternate===null&&(x.flags|=2),x}function i(x,f,h,C){return f===null||f.tag!==6?(f=jc(h,x.mode,C),f.return=x,f):(f=a(f,h),f.return=x,f)}function c(x,f,h,C){var S=h.type;return S===io?d(x,f,h.props.children,C,h.key):f!==null&&(f.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Yn&&Lf(S)===f.type)?(C=a(f,h.props),C.ref=aa(x,f,h),C.return=x,C):(C=_l(h.type,h.key,h.props,null,x.mode,C),C.ref=aa(x,f,h),C.return=x,C)}function u(x,f,h,C){return f===null||f.tag!==4||f.stateNode.containerInfo!==h.containerInfo||f.stateNode.implementation!==h.implementation?(f=bc(h,x.mode,C),f.return=x,f):(f=a(f,h.children||[]),f.return=x,f)}function d(x,f,h,C,S){return f===null||f.tag!==7?(f=Ir(h,x.mode,C,S),f.return=x,f):(f=a(f,h),f.return=x,f)}function p(x,f,h){if(typeof f=="string"&&f!==""||typeof f=="number")return f=jc(""+f,x.mode,h),f.return=x,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Fs:return h=_l(f.type,f.key,f.props,null,x.mode,h),h.ref=aa(x,null,f),h.return=x,h;case lo:return f=bc(f,x.mode,h),f.return=x,f;case Yn:var C=f._init;return p(x,C(f._payload),h)}if(ga(f)||ea(f))return f=Ir(f,x.mode,h,null),f.return=x,f;qs(x,f)}return null}function m(x,f,h,C){var S=f!==null?f.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return S!==null?null:i(x,f,""+h,C);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Fs:return h.key===S?c(x,f,h,C):null;case lo:return h.key===S?u(x,f,h,C):null;case Yn:return S=h._init,m(x,f,S(h._payload),C)}if(ga(h)||ea(h))return S!==null?null:d(x,f,h,C,null);qs(x,h)}return null}function y(x,f,h,C,S){if(typeof C=="string"&&C!==""||typeof C=="number")return x=x.get(h)||null,i(f,x,""+C,S);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case Fs:return x=x.get(C.key===null?h:C.key)||null,c(f,x,C,S);case lo:return x=x.get(C.key===null?h:C.key)||null,u(f,x,C,S);case Yn:var g=C._init;return y(x,f,h,g(C._payload),S)}if(ga(C)||ea(C))return x=x.get(h)||null,d(f,x,C,S,null);qs(f,C)}return null}function b(x,f,h,C){for(var S=null,g=null,w=f,k=f=0,E=null;w!==null&&k<h.length;k++){w.index>k?(E=w,w=null):E=w.sibling;var O=m(x,w,h[k],C);if(O===null){w===null&&(w=E);break}e&&w&&O.alternate===null&&t(x,w),f=s(O,f,k),g===null?S=O:g.sibling=O,g=O,w=E}if(k===h.length)return n(x,w),Le&&Nr(x,k),S;if(w===null){for(;k<h.length;k++)w=p(x,h[k],C),w!==null&&(f=s(w,f,k),g===null?S=w:g.sibling=w,g=w);return Le&&Nr(x,k),S}for(w=r(x,w);k<h.length;k++)E=y(w,x,k,h[k],C),E!==null&&(e&&E.alternate!==null&&w.delete(E.key===null?k:E.key),f=s(E,f,k),g===null?S=E:g.sibling=E,g=E);return e&&w.forEach(function(M){return t(x,M)}),Le&&Nr(x,k),S}function j(x,f,h,C){var S=ea(h);if(typeof S!="function")throw Error(P(150));if(h=S.call(h),h==null)throw Error(P(151));for(var g=S=null,w=f,k=f=0,E=null,O=h.next();w!==null&&!O.done;k++,O=h.next()){w.index>k?(E=w,w=null):E=w.sibling;var M=m(x,w,O.value,C);if(M===null){w===null&&(w=E);break}e&&w&&M.alternate===null&&t(x,w),f=s(M,f,k),g===null?S=M:g.sibling=M,g=M,w=E}if(O.done)return n(x,w),Le&&Nr(x,k),S;if(w===null){for(;!O.done;k++,O=h.next())O=p(x,O.value,C),O!==null&&(f=s(O,f,k),g===null?S=O:g.sibling=O,g=O);return Le&&Nr(x,k),S}for(w=r(x,w);!O.done;k++,O=h.next())O=y(w,x,k,O.value,C),O!==null&&(e&&O.alternate!==null&&w.delete(O.key===null?k:O.key),f=s(O,f,k),g===null?S=O:g.sibling=O,g=O);return e&&w.forEach(function(F){return t(x,F)}),Le&&Nr(x,k),S}function _(x,f,h,C){if(typeof h=="object"&&h!==null&&h.type===io&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Fs:e:{for(var S=h.key,g=f;g!==null;){if(g.key===S){if(S=h.type,S===io){if(g.tag===7){n(x,g.sibling),f=a(g,h.props.children),f.return=x,x=f;break e}}else if(g.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Yn&&Lf(S)===g.type){n(x,g.sibling),f=a(g,h.props),f.ref=aa(x,g,h),f.return=x,x=f;break e}n(x,g);break}else t(x,g);g=g.sibling}h.type===io?(f=Ir(h.props.children,x.mode,C,h.key),f.return=x,x=f):(C=_l(h.type,h.key,h.props,null,x.mode,C),C.ref=aa(x,f,h),C.return=x,x=C)}return l(x);case lo:e:{for(g=h.key;f!==null;){if(f.key===g)if(f.tag===4&&f.stateNode.containerInfo===h.containerInfo&&f.stateNode.implementation===h.implementation){n(x,f.sibling),f=a(f,h.children||[]),f.return=x,x=f;break e}else{n(x,f);break}else t(x,f);f=f.sibling}f=bc(h,x.mode,C),f.return=x,x=f}return l(x);case Yn:return g=h._init,_(x,f,g(h._payload),C)}if(ga(h))return b(x,f,h,C);if(ea(h))return j(x,f,h,C);qs(x,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,f!==null&&f.tag===6?(n(x,f.sibling),f=a(f,h),f.return=x,x=f):(n(x,f),f=jc(h,x.mode,C),f.return=x,x=f),l(x)):n(x,f)}return _}var Do=A2(!0),P2=A2(!1),fs={},yn=vr(fs),Qa=vr(fs),qa=vr(fs);function Mr(e){if(e===fs)throw Error(P(174));return e}function kd(e,t){switch(be(qa,t),be(Qa,e),be(yn,fs),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Xc(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Xc(t,e)}_e(yn),be(yn,t)}function Mo(){_e(yn),_e(Qa),_e(qa)}function $2(e){Mr(qa.current);var t=Mr(yn.current),n=Xc(t,e.type);t!==n&&(be(Qa,e),be(yn,n))}function Ed(e){Qa.current===e&&(_e(yn),_e(Qa))}var Me=vr(0);function Zl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var mc=[];function Ld(){for(var e=0;e<mc.length;e++)mc[e]._workInProgressVersionPrimary=null;mc.length=0}var Cl=$n.ReactCurrentDispatcher,gc=$n.ReactCurrentBatchConfig,Fr=0,Ae=null,Ze=null,Je=null,Kl=!1,Na=!1,Ja=0,r6=0;function it(){throw Error(P(321))}function Nd(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!sn(e[n],t[n]))return!1;return!0}function Rd(e,t,n,r,a,s){if(Fr=s,Ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Cl.current=e===null||e.memoizedState===null?l6:i6,e=n(r,a),Na){s=0;do{if(Na=!1,Ja=0,25<=s)throw Error(P(301));s+=1,Je=Ze=null,t.updateQueue=null,Cl.current=c6,e=n(r,a)}while(Na)}if(Cl.current=Gl,t=Ze!==null&&Ze.next!==null,Fr=0,Je=Ze=Ae=null,Kl=!1,t)throw Error(P(300));return e}function Od(){var e=Ja!==0;return Ja=0,e}function hn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Je===null?Ae.memoizedState=Je=e:Je=Je.next=e,Je}function Zt(){if(Ze===null){var e=Ae.alternate;e=e!==null?e.memoizedState:null}else e=Ze.next;var t=Je===null?Ae.memoizedState:Je.next;if(t!==null)Je=t,Ze=e;else{if(e===null)throw Error(P(310));Ze=e,e={memoizedState:Ze.memoizedState,baseState:Ze.baseState,baseQueue:Ze.baseQueue,queue:Ze.queue,next:null},Je===null?Ae.memoizedState=Je=e:Je=Je.next=e}return Je}function es(e,t){return typeof t=="function"?t(e):t}function xc(e){var t=Zt(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=Ze,a=r.baseQueue,s=n.pending;if(s!==null){if(a!==null){var l=a.next;a.next=s.next,s.next=l}r.baseQueue=a=s,n.pending=null}if(a!==null){s=a.next,r=r.baseState;var i=l=null,c=null,u=s;do{var d=u.lane;if((Fr&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(i=c=p,l=r):c=c.next=p,Ae.lanes|=d,Ur|=d}u=u.next}while(u!==null&&u!==s);c===null?l=r:c.next=i,sn(r,t.memoizedState)||(Tt=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){a=e;do s=a.lane,Ae.lanes|=s,Ur|=s,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function vc(e){var t=Zt(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,s=t.memoizedState;if(a!==null){n.pending=null;var l=a=a.next;do s=e(s,l.action),l=l.next;while(l!==a);sn(s,t.memoizedState)||(Tt=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function I2(){}function B2(e,t){var n=Ae,r=Zt(),a=t(),s=!sn(r.memoizedState,a);if(s&&(r.memoizedState=a,Tt=!0),r=r.queue,Dd(U2.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||Je!==null&&Je.memoizedState.tag&1){if(n.flags|=2048,ts(9,F2.bind(null,n,r,a,t),void 0,null),tt===null)throw Error(P(349));Fr&30||z2(n,t,a)}return a}function z2(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ae.updateQueue,t===null?(t={lastEffect:null,stores:null},Ae.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function F2(e,t,n,r){t.value=n,t.getSnapshot=r,H2(t)&&V2(e)}function U2(e,t,n){return n(function(){H2(t)&&V2(e)})}function H2(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!sn(e,n)}catch{return!0}}function V2(e){var t=On(e,1);t!==null&&an(t,e,1,-1)}function Nf(e){var t=hn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:es,lastRenderedState:e},t.queue=e,e=e.dispatch=s6.bind(null,Ae,e),[t.memoizedState,e]}function ts(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ae.updateQueue,t===null?(t={lastEffect:null,stores:null},Ae.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function W2(){return Zt().memoizedState}function jl(e,t,n,r){var a=hn();Ae.flags|=e,a.memoizedState=ts(1|t,n,void 0,r===void 0?null:r)}function yi(e,t,n,r){var a=Zt();r=r===void 0?null:r;var s=void 0;if(Ze!==null){var l=Ze.memoizedState;if(s=l.destroy,r!==null&&Nd(r,l.deps)){a.memoizedState=ts(t,n,s,r);return}}Ae.flags|=e,a.memoizedState=ts(1|t,n,s,r)}function Rf(e,t){return jl(8390656,8,e,t)}function Dd(e,t){return yi(2048,8,e,t)}function Z2(e,t){return yi(4,2,e,t)}function K2(e,t){return yi(4,4,e,t)}function G2(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Y2(e,t,n){return n=n!=null?n.concat([e]):null,yi(4,4,G2.bind(null,t,e),n)}function Md(){}function X2(e,t){var n=Zt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Nd(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Q2(e,t){var n=Zt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Nd(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function q2(e,t,n){return Fr&21?(sn(n,t)||(n=t2(),Ae.lanes|=n,Ur|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Tt=!0),e.memoizedState=n)}function o6(e,t){var n=xe;xe=n!==0&&4>n?n:4,e(!0);var r=gc.transition;gc.transition={};try{e(!1),t()}finally{xe=n,gc.transition=r}}function J2(){return Zt().memoizedState}function a6(e,t,n){var r=ur(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},em(e))tm(t,n);else if(n=R2(e,t,n,r),n!==null){var a=xt();an(n,e,r,a),nm(n,t,r)}}function s6(e,t,n){var r=ur(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(em(e))tm(t,a);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var l=t.lastRenderedState,i=s(l,n);if(a.hasEagerState=!0,a.eagerState=i,sn(i,l)){var c=t.interleaved;c===null?(a.next=a,_d(t)):(a.next=c.next,c.next=a),t.interleaved=a;return}}catch{}finally{}n=R2(e,t,a,r),n!==null&&(a=xt(),an(n,e,r,a),nm(n,t,r))}}function em(e){var t=e.alternate;return e===Ae||t!==null&&t===Ae}function tm(e,t){Na=Kl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function nm(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,dd(e,n)}}var Gl={readContext:Wt,useCallback:it,useContext:it,useEffect:it,useImperativeHandle:it,useInsertionEffect:it,useLayoutEffect:it,useMemo:it,useReducer:it,useRef:it,useState:it,useDebugValue:it,useDeferredValue:it,useTransition:it,useMutableSource:it,useSyncExternalStore:it,useId:it,unstable_isNewReconciler:!1},l6={readContext:Wt,useCallback:function(e,t){return hn().memoizedState=[e,t===void 0?null:t],e},useContext:Wt,useEffect:Rf,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,jl(4194308,4,G2.bind(null,t,e),n)},useLayoutEffect:function(e,t){return jl(4194308,4,e,t)},useInsertionEffect:function(e,t){return jl(4,2,e,t)},useMemo:function(e,t){var n=hn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=hn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=a6.bind(null,Ae,e),[r.memoizedState,e]},useRef:function(e){var t=hn();return e={current:e},t.memoizedState=e},useState:Nf,useDebugValue:Md,useDeferredValue:function(e){return hn().memoizedState=e},useTransition:function(){var e=Nf(!1),t=e[0];return e=o6.bind(null,e[1]),hn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ae,a=hn();if(Le){if(n===void 0)throw Error(P(407));n=n()}else{if(n=t(),tt===null)throw Error(P(349));Fr&30||z2(r,t,n)}a.memoizedState=n;var s={value:n,getSnapshot:t};return a.queue=s,Rf(U2.bind(null,r,s,e),[e]),r.flags|=2048,ts(9,F2.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=hn(),t=tt.identifierPrefix;if(Le){var n=kn,r=Tn;n=(r&~(1<<32-on(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ja++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=r6++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},i6={readContext:Wt,useCallback:X2,useContext:Wt,useEffect:Dd,useImperativeHandle:Y2,useInsertionEffect:Z2,useLayoutEffect:K2,useMemo:Q2,useReducer:xc,useRef:W2,useState:function(){return xc(es)},useDebugValue:Md,useDeferredValue:function(e){var t=Zt();return q2(t,Ze.memoizedState,e)},useTransition:function(){var e=xc(es)[0],t=Zt().memoizedState;return[e,t]},useMutableSource:I2,useSyncExternalStore:B2,useId:J2,unstable_isNewReconciler:!1},c6={readContext:Wt,useCallback:X2,useContext:Wt,useEffect:Dd,useImperativeHandle:Y2,useInsertionEffect:Z2,useLayoutEffect:K2,useMemo:Q2,useReducer:vc,useRef:W2,useState:function(){return vc(es)},useDebugValue:Md,useDeferredValue:function(e){var t=Zt();return Ze===null?t.memoizedState=e:q2(t,Ze.memoizedState,e)},useTransition:function(){var e=vc(es)[0],t=Zt().memoizedState;return[e,t]},useMutableSource:I2,useSyncExternalStore:B2,useId:J2,unstable_isNewReconciler:!1};function Ao(e,t){try{var n="",r=t;do n+=$4(r),r=r.return;while(r);var a=n}catch(s){a=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:a,digest:null}}function yc(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function yu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var u6=typeof WeakMap=="function"?WeakMap:Map;function rm(e,t,n){n=En(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Xl||(Xl=!0,Lu=r),yu(e,t)},n}function om(e,t,n){n=En(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){yu(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){yu(e,t),typeof r!="function"&&(cr===null?cr=new Set([this]):cr.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Of(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new u6;var a=new Set;r.set(t,a)}else a=r.get(t),a===void 0&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=w6.bind(null,e,t,n),t.then(e,e))}function Df(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Mf(e,t,n,r,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=En(-1,1),t.tag=2,ir(n,t,1))),n.lanes|=1),e)}var d6=$n.ReactCurrentOwner,Tt=!1;function gt(e,t,n,r){t.child=e===null?P2(t,null,n,r):Do(t,e.child,n,r)}function Af(e,t,n,r,a){n=n.render;var s=t.ref;return ko(t,a),r=Rd(e,t,n,r,s,a),n=Od(),e!==null&&!Tt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Dn(e,t,a)):(Le&&n&&yd(t),t.flags|=1,gt(e,t,r,a),t.child)}function Pf(e,t,n,r,a){if(e===null){var s=n.type;return typeof s=="function"&&!Ud(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,am(e,t,s,r,a)):(e=_l(n.type,null,r,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&a)){var l=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ka,n(l,r)&&e.ref===t.ref)return Dn(e,t,a)}return t.flags|=1,e=dr(s,r),e.ref=t.ref,e.return=t,t.child=e}function am(e,t,n,r,a){if(e!==null){var s=e.memoizedProps;if(Ka(s,r)&&e.ref===t.ref)if(Tt=!1,t.pendingProps=r=s,(e.lanes&a)!==0)e.flags&131072&&(Tt=!0);else return t.lanes=e.lanes,Dn(e,t,a)}return Cu(e,t,n,r,a)}function sm(e,t,n){var r=t.pendingProps,a=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},be(yo,Rt),Rt|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,be(yo,Rt),Rt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,be(yo,Rt),Rt|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,be(yo,Rt),Rt|=r;return gt(e,t,a,n),t.child}function lm(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Cu(e,t,n,r,a){var s=Et(n)?Br:pt.current;return s=Ro(t,s),ko(t,a),n=Rd(e,t,n,r,s,a),r=Od(),e!==null&&!Tt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Dn(e,t,a)):(Le&&r&&yd(t),t.flags|=1,gt(e,t,n,a),t.child)}function $f(e,t,n,r,a){if(Et(n)){var s=!0;zl(t)}else s=!1;if(ko(t,a),t.stateNode===null)bl(e,t),M2(t,n,r),vu(t,n,r,a),r=!0;else if(e===null){var l=t.stateNode,i=t.memoizedProps;l.props=i;var c=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=Wt(u):(u=Et(n)?Br:pt.current,u=Ro(t,u));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof l.getSnapshotBeforeUpdate=="function";p||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(i!==r||c!==u)&&Ef(t,l,r,u),Xn=!1;var m=t.memoizedState;l.state=m,Wl(t,r,l,a),c=t.memoizedState,i!==r||m!==c||kt.current||Xn?(typeof d=="function"&&(xu(t,n,d,r),c=t.memoizedState),(i=Xn||kf(t,n,i,r,m,c,u))?(p||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),l.props=r,l.state=c,l.context=u,r=i):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,O2(e,t),i=t.memoizedProps,u=t.type===t.elementType?i:en(t.type,i),l.props=u,p=t.pendingProps,m=l.context,c=n.contextType,typeof c=="object"&&c!==null?c=Wt(c):(c=Et(n)?Br:pt.current,c=Ro(t,c));var y=n.getDerivedStateFromProps;(d=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(i!==p||m!==c)&&Ef(t,l,r,c),Xn=!1,m=t.memoizedState,l.state=m,Wl(t,r,l,a);var b=t.memoizedState;i!==p||m!==b||kt.current||Xn?(typeof y=="function"&&(xu(t,n,y,r),b=t.memoizedState),(u=Xn||kf(t,n,u,r,m,b,c)||!1)?(d||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,b,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,b,c)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||i===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=b),l.props=r,l.state=b,l.context=c,r=u):(typeof l.componentDidUpdate!="function"||i===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return ju(e,t,n,r,s,a)}function ju(e,t,n,r,a,s){lm(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return a&&bf(t,n,!1),Dn(e,t,s);r=t.stateNode,d6.current=t;var i=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Do(t,e.child,null,s),t.child=Do(t,null,i,s)):gt(e,t,i,s),t.memoizedState=r.state,a&&bf(t,n,!0),t.child}function im(e){var t=e.stateNode;t.pendingContext?jf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&jf(e,t.context,!1),kd(e,t.containerInfo)}function If(e,t,n,r,a){return Oo(),jd(a),t.flags|=256,gt(e,t,n,r),t.child}var bu={dehydrated:null,treeContext:null,retryLane:0};function Su(e){return{baseLanes:e,cachePool:null,transitions:null}}function cm(e,t,n){var r=t.pendingProps,a=Me.current,s=!1,l=(t.flags&128)!==0,i;if((i=l)||(i=e!==null&&e.memoizedState===null?!1:(a&2)!==0),i?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),be(Me,a&1),e===null)return mu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,s?(r=t.mode,s=t.child,l={mode:"hidden",children:l},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=l):s=bi(l,r,0,null),e=Ir(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Su(n),t.memoizedState=bu,e):Ad(t,l));if(a=e.memoizedState,a!==null&&(i=a.dehydrated,i!==null))return p6(e,t,l,r,i,a,n);if(s){s=r.fallback,l=t.mode,a=e.child,i=a.sibling;var c={mode:"hidden",children:r.children};return!(l&1)&&t.child!==a?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=dr(a,c),r.subtreeFlags=a.subtreeFlags&14680064),i!==null?s=dr(i,s):(s=Ir(s,l,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,l=e.child.memoizedState,l=l===null?Su(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=e.childLanes&~n,t.memoizedState=bu,r}return s=e.child,e=s.sibling,r=dr(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ad(e,t){return t=bi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Js(e,t,n,r){return r!==null&&jd(r),Do(t,e.child,null,n),e=Ad(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function p6(e,t,n,r,a,s,l){if(n)return t.flags&256?(t.flags&=-257,r=yc(Error(P(422))),Js(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,a=t.mode,r=bi({mode:"visible",children:r.children},a,0,null),s=Ir(s,a,l,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&Do(t,e.child,null,l),t.child.memoizedState=Su(l),t.memoizedState=bu,s);if(!(t.mode&1))return Js(e,t,l,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var i=r.dgst;return r=i,s=Error(P(419)),r=yc(s,r,void 0),Js(e,t,l,r)}if(i=(l&e.childLanes)!==0,Tt||i){if(r=tt,r!==null){switch(l&-l){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(r.suspendedLanes|l)?0:a,a!==0&&a!==s.retryLane&&(s.retryLane=a,On(e,a),an(r,e,a,-1))}return Fd(),r=yc(Error(P(421))),Js(e,t,l,r)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=_6.bind(null,e),a._reactRetry=t,null):(e=s.treeContext,Ot=lr(a.nextSibling),Dt=t,Le=!0,rn=null,e!==null&&(zt[Ft++]=Tn,zt[Ft++]=kn,zt[Ft++]=zr,Tn=e.id,kn=e.overflow,zr=t),t=Ad(t,r.children),t.flags|=4096,t)}function Bf(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),gu(e.return,t,n)}function Cc(e,t,n,r,a){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=a)}function um(e,t,n){var r=t.pendingProps,a=r.revealOrder,s=r.tail;if(gt(e,t,r.children,n),r=Me.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Bf(e,n,t);else if(e.tag===19)Bf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(be(Me,r),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&Zl(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Cc(t,!1,a,n,s);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Zl(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Cc(t,!0,n,null,s);break;case"together":Cc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function bl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Dn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ur|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(P(153));if(t.child!==null){for(e=t.child,n=dr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=dr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function f6(e,t,n){switch(t.tag){case 3:im(t),Oo();break;case 5:$2(t);break;case 1:Et(t.type)&&zl(t);break;case 4:kd(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;be(Hl,r._currentValue),r._currentValue=a;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(be(Me,Me.current&1),t.flags|=128,null):n&t.child.childLanes?cm(e,t,n):(be(Me,Me.current&1),e=Dn(e,t,n),e!==null?e.sibling:null);be(Me,Me.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return um(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),be(Me,Me.current),r)break;return null;case 22:case 23:return t.lanes=0,sm(e,t,n)}return Dn(e,t,n)}var dm,wu,pm,fm;dm=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};wu=function(){};pm=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,Mr(yn.current);var s=null;switch(n){case"input":a=Zc(e,a),r=Zc(e,r),s=[];break;case"select":a=Pe({},a,{value:void 0}),r=Pe({},r,{value:void 0}),s=[];break;case"textarea":a=Yc(e,a),r=Yc(e,r),s=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Il)}Qc(n,r);var l;n=null;for(u in a)if(!r.hasOwnProperty(u)&&a.hasOwnProperty(u)&&a[u]!=null)if(u==="style"){var i=a[u];for(l in i)i.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(za.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var c=r[u];if(i=a!=null?a[u]:void 0,r.hasOwnProperty(u)&&c!==i&&(c!=null||i!=null))if(u==="style")if(i){for(l in i)!i.hasOwnProperty(l)||c&&c.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in c)c.hasOwnProperty(l)&&i[l]!==c[l]&&(n||(n={}),n[l]=c[l])}else n||(s||(s=[]),s.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,i=i?i.__html:void 0,c!=null&&i!==c&&(s=s||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(za.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&we("scroll",e),s||i===c||(s=[])):(s=s||[]).push(u,c))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};fm=function(e,t,n,r){n!==r&&(t.flags|=4)};function sa(e,t){if(!Le)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ct(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function h6(e,t,n){var r=t.pendingProps;switch(Cd(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ct(t),null;case 1:return Et(t.type)&&Bl(),ct(t),null;case 3:return r=t.stateNode,Mo(),_e(kt),_e(pt),Ld(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Qs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,rn!==null&&(Ou(rn),rn=null))),wu(e,t),ct(t),null;case 5:Ed(t);var a=Mr(qa.current);if(n=t.type,e!==null&&t.stateNode!=null)pm(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(P(166));return ct(t),null}if(e=Mr(yn.current),Qs(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[xn]=t,r[Xa]=s,e=(t.mode&1)!==0,n){case"dialog":we("cancel",r),we("close",r);break;case"iframe":case"object":case"embed":we("load",r);break;case"video":case"audio":for(a=0;a<va.length;a++)we(va[a],r);break;case"source":we("error",r);break;case"img":case"image":case"link":we("error",r),we("load",r);break;case"details":we("toggle",r);break;case"input":Kp(r,s),we("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},we("invalid",r);break;case"textarea":Yp(r,s),we("invalid",r)}Qc(n,s),a=null;for(var l in s)if(s.hasOwnProperty(l)){var i=s[l];l==="children"?typeof i=="string"?r.textContent!==i&&(s.suppressHydrationWarning!==!0&&Xs(r.textContent,i,e),a=["children",i]):typeof i=="number"&&r.textContent!==""+i&&(s.suppressHydrationWarning!==!0&&Xs(r.textContent,i,e),a=["children",""+i]):za.hasOwnProperty(l)&&i!=null&&l==="onScroll"&&we("scroll",r)}switch(n){case"input":Us(r),Gp(r,s,!0);break;case"textarea":Us(r),Xp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Il)}r=a,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=zh(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[xn]=t,e[Xa]=r,dm(e,t,!1,!1),t.stateNode=e;e:{switch(l=qc(n,r),n){case"dialog":we("cancel",e),we("close",e),a=r;break;case"iframe":case"object":case"embed":we("load",e),a=r;break;case"video":case"audio":for(a=0;a<va.length;a++)we(va[a],e);a=r;break;case"source":we("error",e),a=r;break;case"img":case"image":case"link":we("error",e),we("load",e),a=r;break;case"details":we("toggle",e),a=r;break;case"input":Kp(e,r),a=Zc(e,r),we("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=Pe({},r,{value:void 0}),we("invalid",e);break;case"textarea":Yp(e,r),a=Yc(e,r),we("invalid",e);break;default:a=r}Qc(n,a),i=a;for(s in i)if(i.hasOwnProperty(s)){var c=i[s];s==="style"?Hh(e,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Fh(e,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Fa(e,c):typeof c=="number"&&Fa(e,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(za.hasOwnProperty(s)?c!=null&&s==="onScroll"&&we("scroll",e):c!=null&&ad(e,s,c,l))}switch(n){case"input":Us(e),Gp(e,r,!1);break;case"textarea":Us(e),Xp(e);break;case"option":r.value!=null&&e.setAttribute("value",""+pr(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?So(e,!!r.multiple,s,!1):r.defaultValue!=null&&So(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Il)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ct(t),null;case 6:if(e&&t.stateNode!=null)fm(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(P(166));if(n=Mr(qa.current),Mr(yn.current),Qs(t)){if(r=t.stateNode,n=t.memoizedProps,r[xn]=t,(s=r.nodeValue!==n)&&(e=Dt,e!==null))switch(e.tag){case 3:Xs(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Xs(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[xn]=t,t.stateNode=r}return ct(t),null;case 13:if(_e(Me),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Le&&Ot!==null&&t.mode&1&&!(t.flags&128))N2(),Oo(),t.flags|=98560,s=!1;else if(s=Qs(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(P(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(P(317));s[xn]=t}else Oo(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ct(t),s=!1}else rn!==null&&(Ou(rn),rn=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Me.current&1?Ge===0&&(Ge=3):Fd())),t.updateQueue!==null&&(t.flags|=4),ct(t),null);case 4:return Mo(),wu(e,t),e===null&&Ga(t.stateNode.containerInfo),ct(t),null;case 10:return wd(t.type._context),ct(t),null;case 17:return Et(t.type)&&Bl(),ct(t),null;case 19:if(_e(Me),s=t.memoizedState,s===null)return ct(t),null;if(r=(t.flags&128)!==0,l=s.rendering,l===null)if(r)sa(s,!1);else{if(Ge!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Zl(e),l!==null){for(t.flags|=128,sa(s,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,l=s.alternate,l===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=l.childLanes,s.lanes=l.lanes,s.child=l.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=l.memoizedProps,s.memoizedState=l.memoizedState,s.updateQueue=l.updateQueue,s.type=l.type,e=l.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return be(Me,Me.current&1|2),t.child}e=e.sibling}s.tail!==null&&Ue()>Po&&(t.flags|=128,r=!0,sa(s,!1),t.lanes=4194304)}else{if(!r)if(e=Zl(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),sa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!l.alternate&&!Le)return ct(t),null}else 2*Ue()-s.renderingStartTime>Po&&n!==1073741824&&(t.flags|=128,r=!0,sa(s,!1),t.lanes=4194304);s.isBackwards?(l.sibling=t.child,t.child=l):(n=s.last,n!==null?n.sibling=l:t.child=l,s.last=l)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Ue(),t.sibling=null,n=Me.current,be(Me,r?n&1|2:n&1),t):(ct(t),null);case 22:case 23:return zd(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Rt&1073741824&&(ct(t),t.subtreeFlags&6&&(t.flags|=8192)):ct(t),null;case 24:return null;case 25:return null}throw Error(P(156,t.tag))}function m6(e,t){switch(Cd(t),t.tag){case 1:return Et(t.type)&&Bl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Mo(),_e(kt),_e(pt),Ld(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ed(t),null;case 13:if(_e(Me),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(P(340));Oo()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return _e(Me),null;case 4:return Mo(),null;case 10:return wd(t.type._context),null;case 22:case 23:return zd(),null;case 24:return null;default:return null}}var el=!1,dt=!1,g6=typeof WeakSet=="function"?WeakSet:Set,U=null;function vo(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Be(e,t,r)}else n.current=null}function _u(e,t,n){try{n()}catch(r){Be(e,t,r)}}var zf=!1;function x6(e,t){if(iu=Al,e=x2(),vd(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var l=0,i=-1,c=-1,u=0,d=0,p=e,m=null;t:for(;;){for(var y;p!==n||a!==0&&p.nodeType!==3||(i=l+a),p!==s||r!==0&&p.nodeType!==3||(c=l+r),p.nodeType===3&&(l+=p.nodeValue.length),(y=p.firstChild)!==null;)m=p,p=y;for(;;){if(p===e)break t;if(m===n&&++u===a&&(i=l),m===s&&++d===r&&(c=l),(y=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=y}n=i===-1||c===-1?null:{start:i,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(cu={focusedElem:e,selectionRange:n},Al=!1,U=t;U!==null;)if(t=U,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,U=e;else for(;U!==null;){t=U;try{var b=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var j=b.memoizedProps,_=b.memoizedState,x=t.stateNode,f=x.getSnapshotBeforeUpdate(t.elementType===t.type?j:en(t.type,j),_);x.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(C){Be(t,t.return,C)}if(e=t.sibling,e!==null){e.return=t.return,U=e;break}U=t.return}return b=zf,zf=!1,b}function Ra(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var s=a.destroy;a.destroy=void 0,s!==void 0&&_u(t,n,s)}a=a.next}while(a!==r)}}function Ci(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Tu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function hm(e){var t=e.alternate;t!==null&&(e.alternate=null,hm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[xn],delete t[Xa],delete t[pu],delete t[J5],delete t[e6])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function mm(e){return e.tag===5||e.tag===3||e.tag===4}function Ff(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||mm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ku(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Il));else if(r!==4&&(e=e.child,e!==null))for(ku(e,t,n),e=e.sibling;e!==null;)ku(e,t,n),e=e.sibling}function Eu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Eu(e,t,n),e=e.sibling;e!==null;)Eu(e,t,n),e=e.sibling}var nt=null,tn=!1;function Zn(e,t,n){for(n=n.child;n!==null;)gm(e,t,n),n=n.sibling}function gm(e,t,n){if(vn&&typeof vn.onCommitFiberUnmount=="function")try{vn.onCommitFiberUnmount(pi,n)}catch{}switch(n.tag){case 5:dt||vo(n,t);case 6:var r=nt,a=tn;nt=null,Zn(e,t,n),nt=r,tn=a,nt!==null&&(tn?(e=nt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):nt.removeChild(n.stateNode));break;case 18:nt!==null&&(tn?(e=nt,n=n.stateNode,e.nodeType===8?fc(e.parentNode,n):e.nodeType===1&&fc(e,n),Wa(e)):fc(nt,n.stateNode));break;case 4:r=nt,a=tn,nt=n.stateNode.containerInfo,tn=!0,Zn(e,t,n),nt=r,tn=a;break;case 0:case 11:case 14:case 15:if(!dt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var s=a,l=s.destroy;s=s.tag,l!==void 0&&(s&2||s&4)&&_u(n,t,l),a=a.next}while(a!==r)}Zn(e,t,n);break;case 1:if(!dt&&(vo(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(i){Be(n,t,i)}Zn(e,t,n);break;case 21:Zn(e,t,n);break;case 22:n.mode&1?(dt=(r=dt)||n.memoizedState!==null,Zn(e,t,n),dt=r):Zn(e,t,n);break;default:Zn(e,t,n)}}function Uf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new g6),t.forEach(function(r){var a=T6.bind(null,e,r);n.has(r)||(n.add(r),r.then(a,a))})}}function Jt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r];try{var s=e,l=t,i=l;e:for(;i!==null;){switch(i.tag){case 5:nt=i.stateNode,tn=!1;break e;case 3:nt=i.stateNode.containerInfo,tn=!0;break e;case 4:nt=i.stateNode.containerInfo,tn=!0;break e}i=i.return}if(nt===null)throw Error(P(160));gm(s,l,a),nt=null,tn=!1;var c=a.alternate;c!==null&&(c.return=null),a.return=null}catch(u){Be(a,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)xm(t,e),t=t.sibling}function xm(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Jt(t,e),fn(e),r&4){try{Ra(3,e,e.return),Ci(3,e)}catch(j){Be(e,e.return,j)}try{Ra(5,e,e.return)}catch(j){Be(e,e.return,j)}}break;case 1:Jt(t,e),fn(e),r&512&&n!==null&&vo(n,n.return);break;case 5:if(Jt(t,e),fn(e),r&512&&n!==null&&vo(n,n.return),e.flags&32){var a=e.stateNode;try{Fa(a,"")}catch(j){Be(e,e.return,j)}}if(r&4&&(a=e.stateNode,a!=null)){var s=e.memoizedProps,l=n!==null?n.memoizedProps:s,i=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{i==="input"&&s.type==="radio"&&s.name!=null&&Ih(a,s),qc(i,l);var u=qc(i,s);for(l=0;l<c.length;l+=2){var d=c[l],p=c[l+1];d==="style"?Hh(a,p):d==="dangerouslySetInnerHTML"?Fh(a,p):d==="children"?Fa(a,p):ad(a,d,p,u)}switch(i){case"input":Kc(a,s);break;case"textarea":Bh(a,s);break;case"select":var m=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?So(a,!!s.multiple,y,!1):m!==!!s.multiple&&(s.defaultValue!=null?So(a,!!s.multiple,s.defaultValue,!0):So(a,!!s.multiple,s.multiple?[]:"",!1))}a[Xa]=s}catch(j){Be(e,e.return,j)}}break;case 6:if(Jt(t,e),fn(e),r&4){if(e.stateNode===null)throw Error(P(162));a=e.stateNode,s=e.memoizedProps;try{a.nodeValue=s}catch(j){Be(e,e.return,j)}}break;case 3:if(Jt(t,e),fn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Wa(t.containerInfo)}catch(j){Be(e,e.return,j)}break;case 4:Jt(t,e),fn(e);break;case 13:Jt(t,e),fn(e),a=e.child,a.flags&8192&&(s=a.memoizedState!==null,a.stateNode.isHidden=s,!s||a.alternate!==null&&a.alternate.memoizedState!==null||(Id=Ue())),r&4&&Uf(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(dt=(u=dt)||d,Jt(t,e),dt=u):Jt(t,e),fn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(U=e,d=e.child;d!==null;){for(p=U=d;U!==null;){switch(m=U,y=m.child,m.tag){case 0:case 11:case 14:case 15:Ra(4,m,m.return);break;case 1:vo(m,m.return);var b=m.stateNode;if(typeof b.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,b.props=t.memoizedProps,b.state=t.memoizedState,b.componentWillUnmount()}catch(j){Be(r,n,j)}}break;case 5:vo(m,m.return);break;case 22:if(m.memoizedState!==null){Vf(p);continue}}y!==null?(y.return=m,U=y):Vf(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{a=p.stateNode,u?(s=a.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(i=p.stateNode,c=p.memoizedProps.style,l=c!=null&&c.hasOwnProperty("display")?c.display:null,i.style.display=Uh("display",l))}catch(j){Be(e,e.return,j)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(j){Be(e,e.return,j)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Jt(t,e),fn(e),r&4&&Uf(e);break;case 21:break;default:Jt(t,e),fn(e)}}function fn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(mm(n)){var r=n;break e}n=n.return}throw Error(P(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(Fa(a,""),r.flags&=-33);var s=Ff(e);Eu(e,s,a);break;case 3:case 4:var l=r.stateNode.containerInfo,i=Ff(e);ku(e,i,l);break;default:throw Error(P(161))}}catch(c){Be(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function v6(e,t,n){U=e,vm(e)}function vm(e,t,n){for(var r=(e.mode&1)!==0;U!==null;){var a=U,s=a.child;if(a.tag===22&&r){var l=a.memoizedState!==null||el;if(!l){var i=a.alternate,c=i!==null&&i.memoizedState!==null||dt;i=el;var u=dt;if(el=l,(dt=c)&&!u)for(U=a;U!==null;)l=U,c=l.child,l.tag===22&&l.memoizedState!==null?Wf(a):c!==null?(c.return=l,U=c):Wf(a);for(;s!==null;)U=s,vm(s),s=s.sibling;U=a,el=i,dt=u}Hf(e)}else a.subtreeFlags&8772&&s!==null?(s.return=a,U=s):Hf(e)}}function Hf(e){for(;U!==null;){var t=U;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:dt||Ci(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!dt)if(n===null)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:en(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Tf(t,s,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Tf(t,l,n)}break;case 5:var i=t.stateNode;if(n===null&&t.flags&4){n=i;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Wa(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}dt||t.flags&512&&Tu(t)}catch(m){Be(t,t.return,m)}}if(t===e){U=null;break}if(n=t.sibling,n!==null){n.return=t.return,U=n;break}U=t.return}}function Vf(e){for(;U!==null;){var t=U;if(t===e){U=null;break}var n=t.sibling;if(n!==null){n.return=t.return,U=n;break}U=t.return}}function Wf(e){for(;U!==null;){var t=U;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ci(4,t)}catch(c){Be(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var a=t.return;try{r.componentDidMount()}catch(c){Be(t,a,c)}}var s=t.return;try{Tu(t)}catch(c){Be(t,s,c)}break;case 5:var l=t.return;try{Tu(t)}catch(c){Be(t,l,c)}}}catch(c){Be(t,t.return,c)}if(t===e){U=null;break}var i=t.sibling;if(i!==null){i.return=t.return,U=i;break}U=t.return}}var y6=Math.ceil,Yl=$n.ReactCurrentDispatcher,Pd=$n.ReactCurrentOwner,Ht=$n.ReactCurrentBatchConfig,pe=0,tt=null,Ve=null,rt=0,Rt=0,yo=vr(0),Ge=0,ns=null,Ur=0,ji=0,$d=0,Oa=null,_t=null,Id=0,Po=1/0,Sn=null,Xl=!1,Lu=null,cr=null,tl=!1,rr=null,Ql=0,Da=0,Nu=null,Sl=-1,wl=0;function xt(){return pe&6?Ue():Sl!==-1?Sl:Sl=Ue()}function ur(e){return e.mode&1?pe&2&&rt!==0?rt&-rt:n6.transition!==null?(wl===0&&(wl=t2()),wl):(e=xe,e!==0||(e=window.event,e=e===void 0?16:i2(e.type)),e):1}function an(e,t,n,r){if(50<Da)throw Da=0,Nu=null,Error(P(185));us(e,n,r),(!(pe&2)||e!==tt)&&(e===tt&&(!(pe&2)&&(ji|=n),Ge===4&&er(e,rt)),Lt(e,r),n===1&&pe===0&&!(t.mode&1)&&(Po=Ue()+500,xi&&yr()))}function Lt(e,t){var n=e.callbackNode;n5(e,t);var r=Ml(e,e===tt?rt:0);if(r===0)n!==null&&Jp(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Jp(n),t===1)e.tag===0?t6(Zf.bind(null,e)):k2(Zf.bind(null,e)),Q5(function(){!(pe&6)&&yr()}),n=null;else{switch(n2(r)){case 1:n=ud;break;case 4:n=Jh;break;case 16:n=Dl;break;case 536870912:n=e2;break;default:n=Dl}n=Tm(n,ym.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ym(e,t){if(Sl=-1,wl=0,pe&6)throw Error(P(327));var n=e.callbackNode;if(Eo()&&e.callbackNode!==n)return null;var r=Ml(e,e===tt?rt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ql(e,r);else{t=r;var a=pe;pe|=2;var s=jm();(tt!==e||rt!==t)&&(Sn=null,Po=Ue()+500,$r(e,t));do try{b6();break}catch(i){Cm(e,i)}while(1);Sd(),Yl.current=s,pe=a,Ve!==null?t=0:(tt=null,rt=0,t=Ge)}if(t!==0){if(t===2&&(a=ru(e),a!==0&&(r=a,t=Ru(e,a))),t===1)throw n=ns,$r(e,0),er(e,r),Lt(e,Ue()),n;if(t===6)er(e,r);else{if(a=e.current.alternate,!(r&30)&&!C6(a)&&(t=ql(e,r),t===2&&(s=ru(e),s!==0&&(r=s,t=Ru(e,s))),t===1))throw n=ns,$r(e,0),er(e,r),Lt(e,Ue()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(P(345));case 2:Rr(e,_t,Sn);break;case 3:if(er(e,r),(r&130023424)===r&&(t=Id+500-Ue(),10<t)){if(Ml(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){xt(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=du(Rr.bind(null,e,_t,Sn),t);break}Rr(e,_t,Sn);break;case 4:if(er(e,r),(r&4194240)===r)break;for(t=e.eventTimes,a=-1;0<r;){var l=31-on(r);s=1<<l,l=t[l],l>a&&(a=l),r&=~s}if(r=a,r=Ue()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*y6(r/1960))-r,10<r){e.timeoutHandle=du(Rr.bind(null,e,_t,Sn),r);break}Rr(e,_t,Sn);break;case 5:Rr(e,_t,Sn);break;default:throw Error(P(329))}}}return Lt(e,Ue()),e.callbackNode===n?ym.bind(null,e):null}function Ru(e,t){var n=Oa;return e.current.memoizedState.isDehydrated&&($r(e,t).flags|=256),e=ql(e,t),e!==2&&(t=_t,_t=n,t!==null&&Ou(t)),e}function Ou(e){_t===null?_t=e:_t.push.apply(_t,e)}function C6(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var a=n[r],s=a.getSnapshot;a=a.value;try{if(!sn(s(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function er(e,t){for(t&=~$d,t&=~ji,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-on(t),r=1<<n;e[n]=-1,t&=~r}}function Zf(e){if(pe&6)throw Error(P(327));Eo();var t=Ml(e,0);if(!(t&1))return Lt(e,Ue()),null;var n=ql(e,t);if(e.tag!==0&&n===2){var r=ru(e);r!==0&&(t=r,n=Ru(e,r))}if(n===1)throw n=ns,$r(e,0),er(e,t),Lt(e,Ue()),n;if(n===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Rr(e,_t,Sn),Lt(e,Ue()),null}function Bd(e,t){var n=pe;pe|=1;try{return e(t)}finally{pe=n,pe===0&&(Po=Ue()+500,xi&&yr())}}function Hr(e){rr!==null&&rr.tag===0&&!(pe&6)&&Eo();var t=pe;pe|=1;var n=Ht.transition,r=xe;try{if(Ht.transition=null,xe=1,e)return e()}finally{xe=r,Ht.transition=n,pe=t,!(pe&6)&&yr()}}function zd(){Rt=yo.current,_e(yo)}function $r(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,X5(n)),Ve!==null)for(n=Ve.return;n!==null;){var r=n;switch(Cd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Bl();break;case 3:Mo(),_e(kt),_e(pt),Ld();break;case 5:Ed(r);break;case 4:Mo();break;case 13:_e(Me);break;case 19:_e(Me);break;case 10:wd(r.type._context);break;case 22:case 23:zd()}n=n.return}if(tt=e,Ve=e=dr(e.current,null),rt=Rt=t,Ge=0,ns=null,$d=ji=Ur=0,_t=Oa=null,Dr!==null){for(t=0;t<Dr.length;t++)if(n=Dr[t],r=n.interleaved,r!==null){n.interleaved=null;var a=r.next,s=n.pending;if(s!==null){var l=s.next;s.next=a,r.next=l}n.pending=r}Dr=null}return e}function Cm(e,t){do{var n=Ve;try{if(Sd(),Cl.current=Gl,Kl){for(var r=Ae.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}Kl=!1}if(Fr=0,Je=Ze=Ae=null,Na=!1,Ja=0,Pd.current=null,n===null||n.return===null){Ge=1,ns=t,Ve=null;break}e:{var s=e,l=n.return,i=n,c=t;if(t=rt,i.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=i,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var y=Df(l);if(y!==null){y.flags&=-257,Mf(y,l,i,s,t),y.mode&1&&Of(s,u,t),t=y,c=u;var b=t.updateQueue;if(b===null){var j=new Set;j.add(c),t.updateQueue=j}else b.add(c);break e}else{if(!(t&1)){Of(s,u,t),Fd();break e}c=Error(P(426))}}else if(Le&&i.mode&1){var _=Df(l);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Mf(_,l,i,s,t),jd(Ao(c,i));break e}}s=c=Ao(c,i),Ge!==4&&(Ge=2),Oa===null?Oa=[s]:Oa.push(s),s=l;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var x=rm(s,c,t);_f(s,x);break e;case 1:i=c;var f=s.type,h=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(cr===null||!cr.has(h)))){s.flags|=65536,t&=-t,s.lanes|=t;var C=om(s,i,t);_f(s,C);break e}}s=s.return}while(s!==null)}Sm(n)}catch(S){t=S,Ve===n&&n!==null&&(Ve=n=n.return);continue}break}while(1)}function jm(){var e=Yl.current;return Yl.current=Gl,e===null?Gl:e}function Fd(){(Ge===0||Ge===3||Ge===2)&&(Ge=4),tt===null||!(Ur&268435455)&&!(ji&268435455)||er(tt,rt)}function ql(e,t){var n=pe;pe|=2;var r=jm();(tt!==e||rt!==t)&&(Sn=null,$r(e,t));do try{j6();break}catch(a){Cm(e,a)}while(1);if(Sd(),pe=n,Yl.current=r,Ve!==null)throw Error(P(261));return tt=null,rt=0,Ge}function j6(){for(;Ve!==null;)bm(Ve)}function b6(){for(;Ve!==null&&!K4();)bm(Ve)}function bm(e){var t=_m(e.alternate,e,Rt);e.memoizedProps=e.pendingProps,t===null?Sm(e):Ve=t,Pd.current=null}function Sm(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=m6(n,t),n!==null){n.flags&=32767,Ve=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ge=6,Ve=null;return}}else if(n=h6(n,t,Rt),n!==null){Ve=n;return}if(t=t.sibling,t!==null){Ve=t;return}Ve=t=e}while(t!==null);Ge===0&&(Ge=5)}function Rr(e,t,n){var r=xe,a=Ht.transition;try{Ht.transition=null,xe=1,S6(e,t,n,r)}finally{Ht.transition=a,xe=r}return null}function S6(e,t,n,r){do Eo();while(rr!==null);if(pe&6)throw Error(P(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(r5(e,s),e===tt&&(Ve=tt=null,rt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||tl||(tl=!0,Tm(Dl,function(){return Eo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ht.transition,Ht.transition=null;var l=xe;xe=1;var i=pe;pe|=4,Pd.current=null,x6(e,n),xm(n,e),H5(cu),Al=!!iu,cu=iu=null,e.current=n,v6(n),G4(),pe=i,xe=l,Ht.transition=s}else e.current=n;if(tl&&(tl=!1,rr=e,Ql=a),s=e.pendingLanes,s===0&&(cr=null),Q4(n.stateNode),Lt(e,Ue()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(Xl)throw Xl=!1,e=Lu,Lu=null,e;return Ql&1&&e.tag!==0&&Eo(),s=e.pendingLanes,s&1?e===Nu?Da++:(Da=0,Nu=e):Da=0,yr(),null}function Eo(){if(rr!==null){var e=n2(Ql),t=Ht.transition,n=xe;try{if(Ht.transition=null,xe=16>e?16:e,rr===null)var r=!1;else{if(e=rr,rr=null,Ql=0,pe&6)throw Error(P(331));var a=pe;for(pe|=4,U=e.current;U!==null;){var s=U,l=s.child;if(U.flags&16){var i=s.deletions;if(i!==null){for(var c=0;c<i.length;c++){var u=i[c];for(U=u;U!==null;){var d=U;switch(d.tag){case 0:case 11:case 15:Ra(8,d,s)}var p=d.child;if(p!==null)p.return=d,U=p;else for(;U!==null;){d=U;var m=d.sibling,y=d.return;if(hm(d),d===u){U=null;break}if(m!==null){m.return=y,U=m;break}U=y}}}var b=s.alternate;if(b!==null){var j=b.child;if(j!==null){b.child=null;do{var _=j.sibling;j.sibling=null,j=_}while(j!==null)}}U=s}}if(s.subtreeFlags&2064&&l!==null)l.return=s,U=l;else e:for(;U!==null;){if(s=U,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ra(9,s,s.return)}var x=s.sibling;if(x!==null){x.return=s.return,U=x;break e}U=s.return}}var f=e.current;for(U=f;U!==null;){l=U;var h=l.child;if(l.subtreeFlags&2064&&h!==null)h.return=l,U=h;else e:for(l=f;U!==null;){if(i=U,i.flags&2048)try{switch(i.tag){case 0:case 11:case 15:Ci(9,i)}}catch(S){Be(i,i.return,S)}if(i===l){U=null;break e}var C=i.sibling;if(C!==null){C.return=i.return,U=C;break e}U=i.return}}if(pe=a,yr(),vn&&typeof vn.onPostCommitFiberRoot=="function")try{vn.onPostCommitFiberRoot(pi,e)}catch{}r=!0}return r}finally{xe=n,Ht.transition=t}}return!1}function Kf(e,t,n){t=Ao(n,t),t=rm(e,t,1),e=ir(e,t,1),t=xt(),e!==null&&(us(e,1,t),Lt(e,t))}function Be(e,t,n){if(e.tag===3)Kf(e,e,n);else for(;t!==null;){if(t.tag===3){Kf(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(cr===null||!cr.has(r))){e=Ao(n,e),e=om(t,e,1),t=ir(t,e,1),e=xt(),t!==null&&(us(t,1,e),Lt(t,e));break}}t=t.return}}function w6(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=xt(),e.pingedLanes|=e.suspendedLanes&n,tt===e&&(rt&n)===n&&(Ge===4||Ge===3&&(rt&130023424)===rt&&500>Ue()-Id?$r(e,0):$d|=n),Lt(e,t)}function wm(e,t){t===0&&(e.mode&1?(t=Ws,Ws<<=1,!(Ws&130023424)&&(Ws=4194304)):t=1);var n=xt();e=On(e,t),e!==null&&(us(e,t,n),Lt(e,n))}function _6(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),wm(e,n)}function T6(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(t),wm(e,n)}var _m;_m=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||kt.current)Tt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Tt=!1,f6(e,t,n);Tt=!!(e.flags&131072)}else Tt=!1,Le&&t.flags&1048576&&E2(t,Ul,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;bl(e,t),e=t.pendingProps;var a=Ro(t,pt.current);ko(t,n),a=Rd(null,t,r,e,a,n);var s=Od();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Et(r)?(s=!0,zl(t)):s=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Td(t),a.updater=vi,t.stateNode=a,a._reactInternals=t,vu(t,r,e,n),t=ju(null,t,r,!0,s,n)):(t.tag=0,Le&&s&&yd(t),gt(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(bl(e,t),e=t.pendingProps,a=r._init,r=a(r._payload),t.type=r,a=t.tag=E6(r),e=en(r,e),a){case 0:t=Cu(null,t,r,e,n);break e;case 1:t=$f(null,t,r,e,n);break e;case 11:t=Af(null,t,r,e,n);break e;case 14:t=Pf(null,t,r,en(r.type,e),n);break e}throw Error(P(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:en(r,a),Cu(e,t,r,a,n);case 1:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:en(r,a),$f(e,t,r,a,n);case 3:e:{if(im(t),e===null)throw Error(P(387));r=t.pendingProps,s=t.memoizedState,a=s.element,O2(e,t),Wl(t,r,null,n);var l=t.memoizedState;if(r=l.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){a=Ao(Error(P(423)),t),t=If(e,t,r,n,a);break e}else if(r!==a){a=Ao(Error(P(424)),t),t=If(e,t,r,n,a);break e}else for(Ot=lr(t.stateNode.containerInfo.firstChild),Dt=t,Le=!0,rn=null,n=P2(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Oo(),r===a){t=Dn(e,t,n);break e}gt(e,t,r,n)}t=t.child}return t;case 5:return $2(t),e===null&&mu(t),r=t.type,a=t.pendingProps,s=e!==null?e.memoizedProps:null,l=a.children,uu(r,a)?l=null:s!==null&&uu(r,s)&&(t.flags|=32),lm(e,t),gt(e,t,l,n),t.child;case 6:return e===null&&mu(t),null;case 13:return cm(e,t,n);case 4:return kd(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Do(t,null,r,n):gt(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:en(r,a),Af(e,t,r,a,n);case 7:return gt(e,t,t.pendingProps,n),t.child;case 8:return gt(e,t,t.pendingProps.children,n),t.child;case 12:return gt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,s=t.memoizedProps,l=a.value,be(Hl,r._currentValue),r._currentValue=l,s!==null)if(sn(s.value,l)){if(s.children===a.children&&!kt.current){t=Dn(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var i=s.dependencies;if(i!==null){l=s.child;for(var c=i.firstContext;c!==null;){if(c.context===r){if(s.tag===1){c=En(-1,n&-n),c.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),gu(s.return,n,t),i.lanes|=n;break}c=c.next}}else if(s.tag===10)l=s.type===t.type?null:s.child;else if(s.tag===18){if(l=s.return,l===null)throw Error(P(341));l.lanes|=n,i=l.alternate,i!==null&&(i.lanes|=n),gu(l,n,t),l=s.sibling}else l=s.child;if(l!==null)l.return=s;else for(l=s;l!==null;){if(l===t){l=null;break}if(s=l.sibling,s!==null){s.return=l.return,l=s;break}l=l.return}s=l}gt(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,ko(t,n),a=Wt(a),r=r(a),t.flags|=1,gt(e,t,r,n),t.child;case 14:return r=t.type,a=en(r,t.pendingProps),a=en(r.type,a),Pf(e,t,r,a,n);case 15:return am(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:en(r,a),bl(e,t),t.tag=1,Et(r)?(e=!0,zl(t)):e=!1,ko(t,n),M2(t,r,a),vu(t,r,a,n),ju(null,t,r,!0,e,n);case 19:return um(e,t,n);case 22:return sm(e,t,n)}throw Error(P(156,t.tag))};function Tm(e,t){return qh(e,t)}function k6(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ut(e,t,n,r){return new k6(e,t,n,r)}function Ud(e){return e=e.prototype,!(!e||!e.isReactComponent)}function E6(e){if(typeof e=="function")return Ud(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ld)return 11;if(e===id)return 14}return 2}function dr(e,t){var n=e.alternate;return n===null?(n=Ut(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function _l(e,t,n,r,a,s){var l=2;if(r=e,typeof e=="function")Ud(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case io:return Ir(n.children,a,s,t);case sd:l=8,a|=8;break;case Uc:return e=Ut(12,n,t,a|2),e.elementType=Uc,e.lanes=s,e;case Hc:return e=Ut(13,n,t,a),e.elementType=Hc,e.lanes=s,e;case Vc:return e=Ut(19,n,t,a),e.elementType=Vc,e.lanes=s,e;case Ah:return bi(n,a,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Dh:l=10;break e;case Mh:l=9;break e;case ld:l=11;break e;case id:l=14;break e;case Yn:l=16,r=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return t=Ut(l,n,t,a),t.elementType=e,t.type=r,t.lanes=s,t}function Ir(e,t,n,r){return e=Ut(7,e,r,t),e.lanes=n,e}function bi(e,t,n,r){return e=Ut(22,e,r,t),e.elementType=Ah,e.lanes=n,e.stateNode={isHidden:!1},e}function jc(e,t,n){return e=Ut(6,e,null,t),e.lanes=n,e}function bc(e,t,n){return t=Ut(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function L6(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=nc(0),this.expirationTimes=nc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nc(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Hd(e,t,n,r,a,s,l,i,c){return e=new L6(e,t,n,i,c),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Ut(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Td(s),e}function N6(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:lo,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function km(e){if(!e)return fr;e=e._reactInternals;e:{if(Kr(e)!==e||e.tag!==1)throw Error(P(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Et(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(P(171))}if(e.tag===1){var n=e.type;if(Et(n))return T2(e,n,t)}return t}function Em(e,t,n,r,a,s,l,i,c){return e=Hd(n,r,!0,e,a,s,l,i,c),e.context=km(null),n=e.current,r=xt(),a=ur(n),s=En(r,a),s.callback=t??null,ir(n,s,a),e.current.lanes=a,us(e,a,r),Lt(e,r),e}function Si(e,t,n,r){var a=t.current,s=xt(),l=ur(a);return n=km(n),t.context===null?t.context=n:t.pendingContext=n,t=En(s,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ir(a,t,l),e!==null&&(an(e,a,l,s),yl(e,a,l)),l}function Jl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Gf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Vd(e,t){Gf(e,t),(e=e.alternate)&&Gf(e,t)}function R6(){return null}var Lm=typeof reportError=="function"?reportError:function(e){console.error(e)};function Wd(e){this._internalRoot=e}wi.prototype.render=Wd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(P(409));Si(e,t,null,null)};wi.prototype.unmount=Wd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Hr(function(){Si(null,e,null,null)}),t[Rn]=null}};function wi(e){this._internalRoot=e}wi.prototype.unstable_scheduleHydration=function(e){if(e){var t=a2();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Jn.length&&t!==0&&t<Jn[n].priority;n++);Jn.splice(n,0,e),n===0&&l2(e)}};function Zd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function _i(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Yf(){}function O6(e,t,n,r,a){if(a){if(typeof r=="function"){var s=r;r=function(){var u=Jl(l);s.call(u)}}var l=Em(t,r,e,0,null,!1,!1,"",Yf);return e._reactRootContainer=l,e[Rn]=l.current,Ga(e.nodeType===8?e.parentNode:e),Hr(),l}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var i=r;r=function(){var u=Jl(c);i.call(u)}}var c=Hd(e,0,!1,null,null,!1,!1,"",Yf);return e._reactRootContainer=c,e[Rn]=c.current,Ga(e.nodeType===8?e.parentNode:e),Hr(function(){Si(t,c,n,r)}),c}function Ti(e,t,n,r,a){var s=n._reactRootContainer;if(s){var l=s;if(typeof a=="function"){var i=a;a=function(){var c=Jl(l);i.call(c)}}Si(t,l,e,a)}else l=O6(n,t,e,a,r);return Jl(l)}r2=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=xa(t.pendingLanes);n!==0&&(dd(t,n|1),Lt(t,Ue()),!(pe&6)&&(Po=Ue()+500,yr()))}break;case 13:Hr(function(){var r=On(e,1);if(r!==null){var a=xt();an(r,e,1,a)}}),Vd(e,1)}};pd=function(e){if(e.tag===13){var t=On(e,134217728);if(t!==null){var n=xt();an(t,e,134217728,n)}Vd(e,134217728)}};o2=function(e){if(e.tag===13){var t=ur(e),n=On(e,t);if(n!==null){var r=xt();an(n,e,t,r)}Vd(e,t)}};a2=function(){return xe};s2=function(e,t){var n=xe;try{return xe=e,t()}finally{xe=n}};eu=function(e,t,n){switch(t){case"input":if(Kc(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=gi(r);if(!a)throw Error(P(90));$h(r),Kc(r,a)}}}break;case"textarea":Bh(e,n);break;case"select":t=n.value,t!=null&&So(e,!!n.multiple,t,!1)}};Zh=Bd;Kh=Hr;var D6={usingClientEntryPoint:!1,Events:[ps,fo,gi,Vh,Wh,Bd]},la={findFiberByHostInstance:Or,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},M6={bundleType:la.bundleType,version:la.version,rendererPackageName:la.rendererPackageName,rendererConfig:la.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$n.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Xh(e),e===null?null:e.stateNode},findFiberByHostInstance:la.findFiberByHostInstance||R6,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nl.isDisabled&&nl.supportsFiber)try{pi=nl.inject(M6),vn=nl}catch{}}At.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D6;At.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zd(t))throw Error(P(200));return N6(e,t,null,n)};At.createRoot=function(e,t){if(!Zd(e))throw Error(P(299));var n=!1,r="",a=Lm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=Hd(e,1,!1,null,null,n,!1,r,a),e[Rn]=t.current,Ga(e.nodeType===8?e.parentNode:e),new Wd(t)};At.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=Xh(t),e=e===null?null:e.stateNode,e};At.flushSync=function(e){return Hr(e)};At.hydrate=function(e,t,n){if(!_i(t))throw Error(P(200));return Ti(null,e,t,!0,n)};At.hydrateRoot=function(e,t,n){if(!Zd(e))throw Error(P(405));var r=n!=null&&n.hydratedSources||null,a=!1,s="",l=Lm;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Em(t,null,e,1,n??null,a,!1,s,l),e[Rn]=t.current,Ga(e),r)for(e=0;e<r.length;e++)n=r[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new wi(t)};At.render=function(e,t,n){if(!_i(t))throw Error(P(200));return Ti(null,e,t,!1,n)};At.unmountComponentAtNode=function(e){if(!_i(e))throw Error(P(40));return e._reactRootContainer?(Hr(function(){Ti(null,null,e,!1,function(){e._reactRootContainer=null,e[Rn]=null})}),!0):!1};At.unstable_batchedUpdates=Bd;At.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!_i(n))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return Ti(e,t,n,!1,r)};At.version="18.2.0-next-9e3b772b8-20220608";function Nm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Nm)}catch(e){console.error(e)}}Nm(),Eh.exports=At;var _n=Eh.exports;const A6=Pn(_n),P6=xh({__proto__:null,default:A6},[_n]);var Xf=_n;zc.createRoot=Xf.createRoot,zc.hydrateRoot=Xf.hydrateRoot;function $6(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,s;for(s=0;s<r.length;s++)a=r[s],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function I6(e,t){if(e==null)return{};var n=$6(e,t),r,a;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Du(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function B6(e){if(Array.isArray(e))return Du(e)}function z6(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function F6(e,t){if(e){if(typeof e=="string")return Du(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Du(e,t)}}function U6(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function H6(e){return B6(e)||z6(e)||F6(e)||U6()}function rs(e){"@babel/helpers - typeof";return rs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},rs(e)}function V6(e,t){if(rs(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(rs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function W6(e){var t=V6(e,"string");return rs(t)=="symbol"?t:String(t)}function Rm(e,t,n){return t=W6(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Mu(){return Mu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Mu.apply(this,arguments)}function Qf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Co(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Qf(Object(n),!0).forEach(function(r){Rm(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Qf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Z6(e){var t=e.length;if(t===0||t===1)return e;if(t===2)return[e[0],e[1],"".concat(e[0],".").concat(e[1]),"".concat(e[1],".").concat(e[0])];if(t===3)return[e[0],e[1],e[2],"".concat(e[0],".").concat(e[1]),"".concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[0]),"".concat(e[1],".").concat(e[2]),"".concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[1],".").concat(e[0])];if(t>=4)return[e[0],e[1],e[2],e[3],"".concat(e[0],".").concat(e[1]),"".concat(e[0],".").concat(e[2]),"".concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[0]),"".concat(e[1],".").concat(e[2]),"".concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[1]),"".concat(e[2],".").concat(e[3]),"".concat(e[3],".").concat(e[0]),"".concat(e[3],".").concat(e[1]),"".concat(e[3],".").concat(e[2]),"".concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[1],".").concat(e[3]),"".concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[2],".").concat(e[3]),"".concat(e[0],".").concat(e[3],".").concat(e[1]),"".concat(e[0],".").concat(e[3],".").concat(e[2]),"".concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[1],".").concat(e[2],".").concat(e[3]),"".concat(e[1],".").concat(e[3],".").concat(e[0]),"".concat(e[1],".").concat(e[3],".").concat(e[2]),"".concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[0],".").concat(e[3]),"".concat(e[2],".").concat(e[1],".").concat(e[0]),"".concat(e[2],".").concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[3],".").concat(e[0]),"".concat(e[2],".").concat(e[3],".").concat(e[1]),"".concat(e[3],".").concat(e[0],".").concat(e[1]),"".concat(e[3],".").concat(e[0],".").concat(e[2]),"".concat(e[3],".").concat(e[1],".").concat(e[0]),"".concat(e[3],".").concat(e[1],".").concat(e[2]),"".concat(e[3],".").concat(e[2],".").concat(e[0]),"".concat(e[3],".").concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[1],".").concat(e[2],".").concat(e[3]),"".concat(e[0],".").concat(e[1],".").concat(e[3],".").concat(e[2]),"".concat(e[0],".").concat(e[2],".").concat(e[1],".").concat(e[3]),"".concat(e[0],".").concat(e[2],".").concat(e[3],".").concat(e[1]),"".concat(e[0],".").concat(e[3],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[3],".").concat(e[2],".").concat(e[1]),"".concat(e[1],".").concat(e[0],".").concat(e[2],".").concat(e[3]),"".concat(e[1],".").concat(e[0],".").concat(e[3],".").concat(e[2]),"".concat(e[1],".").concat(e[2],".").concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[2],".").concat(e[3],".").concat(e[0]),"".concat(e[1],".").concat(e[3],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[3],".").concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[0],".").concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[0],".").concat(e[3],".").concat(e[1]),"".concat(e[2],".").concat(e[1],".").concat(e[0],".").concat(e[3]),"".concat(e[2],".").concat(e[1],".").concat(e[3],".").concat(e[0]),"".concat(e[2],".").concat(e[3],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[3],".").concat(e[1],".").concat(e[0]),"".concat(e[3],".").concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[3],".").concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[3],".").concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[3],".").concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[3],".").concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[3],".").concat(e[2],".").concat(e[1],".").concat(e[0])]}var Sc={};function K6(e){if(e.length===0||e.length===1)return e;var t=e.join(".");return Sc[t]||(Sc[t]=Z6(e)),Sc[t]}function G6(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,r=e.filter(function(s){return s!=="token"}),a=K6(r);return a.reduce(function(s,l){return Co(Co({},s),n[l])},t)}function qf(e){return e.join(" ")}function Y6(e,t){var n=0;return function(r){return n+=1,r.map(function(a,s){return Om({node:a,stylesheet:e,useInlineStyles:t,key:"code-segment-".concat(n,"-").concat(s)})})}}function Om(e){var t=e.node,n=e.stylesheet,r=e.style,a=r===void 0?{}:r,s=e.useInlineStyles,l=e.key,i=t.properties,c=t.type,u=t.tagName,d=t.value;if(c==="text")return d;if(u){var p=Y6(n,s),m;if(!s)m=Co(Co({},i),{},{className:qf(i.className)});else{var y=Object.keys(n).reduce(function(x,f){return f.split(".").forEach(function(h){x.includes(h)||x.push(h)}),x},[]),b=i.className&&i.className.includes("token")?["token"]:[],j=i.className&&b.concat(i.className.filter(function(x){return!y.includes(x)}));m=Co(Co({},i),{},{className:qf(j)||void 0,style:G6(i.className,Object.assign({},i.style,a),n)})}var _=p(t.children);return ee.createElement(u,Mu({key:l},m),_)}}const X6=function(e,t){var n=e.listLanguages();return n.indexOf(t)!==-1};var Q6=["language","children","style","customStyle","codeTagProps","useInlineStyles","showLineNumbers","showInlineLineNumbers","startingLineNumber","lineNumberContainerStyle","lineNumberStyle","wrapLines","wrapLongLines","lineProps","renderer","PreTag","CodeTag","code","astGenerator"];function Jf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function gn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Jf(Object(n),!0).forEach(function(r){Rm(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Jf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var q6=/\n/g;function J6(e){return e.match(q6)}function e8(e){var t=e.lines,n=e.startingLineNumber,r=e.style;return t.map(function(a,s){var l=s+n;return ee.createElement("span",{key:"line-".concat(s),className:"react-syntax-highlighter-line-number",style:typeof r=="function"?r(l):r},"".concat(l,`
`))})}function t8(e){var t=e.codeString,n=e.codeStyle,r=e.containerStyle,a=r===void 0?{float:"left",paddingRight:"10px"}:r,s=e.numberStyle,l=s===void 0?{}:s,i=e.startingLineNumber;return ee.createElement("code",{style:Object.assign({},n,a)},e8({lines:t.replace(/\n$/,"").split(`
`),style:l,startingLineNumber:i}))}function n8(e){return"".concat(e.toString().length,".25em")}function Dm(e,t){return{type:"element",tagName:"span",properties:{key:"line-number--".concat(e),className:["comment","linenumber","react-syntax-highlighter-line-number"],style:t},children:[{type:"text",value:e}]}}function Mm(e,t,n){var r={display:"inline-block",minWidth:n8(n),paddingRight:"1em",textAlign:"right",userSelect:"none"},a=typeof e=="function"?e(t):e,s=gn(gn({},r),a);return s}function Tl(e){var t=e.children,n=e.lineNumber,r=e.lineNumberStyle,a=e.largestLineNumber,s=e.showInlineLineNumbers,l=e.lineProps,i=l===void 0?{}:l,c=e.className,u=c===void 0?[]:c,d=e.showLineNumbers,p=e.wrapLongLines,m=typeof i=="function"?i(n):i;if(m.className=u,n&&s){var y=Mm(r,n,a);t.unshift(Dm(n,y))}return p&d&&(m.style=gn(gn({},m.style),{},{display:"flex"})),{type:"element",tagName:"span",properties:m,children:t}}function Am(e){for(var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],r=0;r<e.length;r++){var a=e[r];if(a.type==="text")n.push(Tl({children:[a],className:H6(new Set(t))}));else if(a.children){var s=t.concat(a.properties.className);Am(a.children,s).forEach(function(l){return n.push(l)})}}return n}function r8(e,t,n,r,a,s,l,i,c){var u,d=Am(e.value),p=[],m=-1,y=0;function b(S,g){var w=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return Tl({children:S,lineNumber:g,lineNumberStyle:i,largestLineNumber:l,showInlineLineNumbers:a,lineProps:n,className:w,showLineNumbers:r,wrapLongLines:c})}function j(S,g){if(r&&g&&a){var w=Mm(i,g,l);S.unshift(Dm(g,w))}return S}function _(S,g){var w=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return t||w.length>0?b(S,g,w):j(S,g)}for(var x=function(){var g=d[y],w=g.children[0].value,k=J6(w);if(k){var E=w.split(`
`);E.forEach(function(O,M){var F=r&&p.length+s,G={type:"text",value:"".concat(O,`
`)};if(M===0){var q=d.slice(m+1,y).concat(Tl({children:[G],className:g.properties.className})),ve=_(q,F);p.push(ve)}else if(M===E.length-1){var fe=d[y+1]&&d[y+1].children&&d[y+1].children[0],X={type:"text",value:"".concat(O)};if(fe){var D=Tl({children:[X],className:g.properties.className});d.splice(y+1,0,D)}else{var I=[X],B=_(I,F,g.properties.className);p.push(B)}}else{var H=[G],V=_(H,F,g.properties.className);p.push(V)}}),m=y}y++};y<d.length;)x();if(m!==d.length-1){var f=d.slice(m+1,d.length);if(f&&f.length){var h=r&&p.length+s,C=_(f,h);p.push(C)}}return t?p:(u=[]).concat.apply(u,p)}function o8(e){var t=e.rows,n=e.stylesheet,r=e.useInlineStyles;return t.map(function(a,s){return Om({node:a,stylesheet:n,useInlineStyles:r,key:"code-segement".concat(s)})})}function Pm(e){return e&&typeof e.highlightAuto<"u"}function a8(e){var t=e.astGenerator,n=e.language,r=e.code,a=e.defaultCodeValue;if(Pm(t)){var s=X6(t,n);return n==="text"?{value:a,language:"text"}:s?t.highlight(n,r):t.highlightAuto(r)}try{return n&&n!=="text"?{value:t.highlight(r,n)}:{value:a}}catch{return{value:a}}}function s8(e,t){return function(r){var a=r.language,s=r.children,l=r.style,i=l===void 0?t:l,c=r.customStyle,u=c===void 0?{}:c,d=r.codeTagProps,p=d===void 0?{className:a?"language-".concat(a):void 0,style:gn(gn({},i['code[class*="language-"]']),i['code[class*="language-'.concat(a,'"]')])}:d,m=r.useInlineStyles,y=m===void 0?!0:m,b=r.showLineNumbers,j=b===void 0?!1:b,_=r.showInlineLineNumbers,x=_===void 0?!0:_,f=r.startingLineNumber,h=f===void 0?1:f,C=r.lineNumberContainerStyle,S=r.lineNumberStyle,g=S===void 0?{}:S,w=r.wrapLines,k=r.wrapLongLines,E=k===void 0?!1:k,O=r.lineProps,M=O===void 0?{}:O,F=r.renderer,G=r.PreTag,q=G===void 0?"pre":G,ve=r.CodeTag,fe=ve===void 0?"code":ve,X=r.code,D=X===void 0?(Array.isArray(s)?s[0]:s)||"":X,I=r.astGenerator,B=I6(r,Q6);I=I||e;var H=j?ee.createElement(t8,{containerStyle:C,codeStyle:p.style||{},numberStyle:g,startingLineNumber:h,codeString:D}):null,V=i.hljs||i['pre[class*="language-"]']||{backgroundColor:"#fff"},ye=Pm(I)?"hljs":"prismjs",oe=y?Object.assign({},B,{style:Object.assign({},V,u)}):Object.assign({},B,{className:B.className?"".concat(ye," ").concat(B.className):ye,style:Object.assign({},u)});if(E?p.style=gn(gn({},p.style),{},{whiteSpace:"pre-wrap"}):p.style=gn(gn({},p.style),{},{whiteSpace:"pre"}),!I)return ee.createElement(q,oe,H,ee.createElement(fe,p,D));(w===void 0&&F||E)&&(w=!0),F=F||o8;var ge=[{type:"text",value:D}],re=a8({astGenerator:I,language:a,code:D,defaultCodeValue:ge});re.language===null&&(re.value=ge);var Te=re.value.length+h,st=r8(re,w,M,j,x,h,Te,g,E);return ee.createElement(q,oe,ee.createElement(fe,p,!x&&H,F({rows:st,stylesheet:i,useInlineStyles:y})))}}var l8=c8,i8=Object.prototype.hasOwnProperty;function c8(){for(var e={},t=0;t<arguments.length;t++){var n=arguments[t];for(var r in n)i8.call(n,r)&&(e[r]=n[r])}return e}var $m=Im,Kd=Im.prototype;Kd.space=null;Kd.normal={};Kd.property={};function Im(e,t,n){this.property=e,this.normal=t,n&&(this.space=n)}var e1=l8,u8=$m,d8=p8;function p8(e){for(var t=e.length,n=[],r=[],a=-1,s,l;++a<t;)s=e[a],n.push(s.property),r.push(s.normal),l=s.space;return new u8(e1.apply(null,n),e1.apply(null,r),l)}var Gd=f8;function f8(e){return e.toLowerCase()}var Bm=zm,Gt=zm.prototype;Gt.space=null;Gt.attribute=null;Gt.property=null;Gt.boolean=!1;Gt.booleanish=!1;Gt.overloadedBoolean=!1;Gt.number=!1;Gt.commaSeparated=!1;Gt.spaceSeparated=!1;Gt.commaOrSpaceSeparated=!1;Gt.mustUseProperty=!1;Gt.defined=!1;function zm(e,t){this.property=e,this.attribute=t}var Cn={},h8=0;Cn.boolean=Gr();Cn.booleanish=Gr();Cn.overloadedBoolean=Gr();Cn.number=Gr();Cn.spaceSeparated=Gr();Cn.commaSeparated=Gr();Cn.commaOrSpaceSeparated=Gr();function Gr(){return Math.pow(2,++h8)}var Fm=Bm,t1=Cn,Um=Yd;Yd.prototype=new Fm;Yd.prototype.defined=!0;var Hm=["boolean","booleanish","overloadedBoolean","number","commaSeparated","spaceSeparated","commaOrSpaceSeparated"],m8=Hm.length;function Yd(e,t,n,r){var a=-1,s;for(n1(this,"space",r),Fm.call(this,e,t);++a<m8;)s=Hm[a],n1(this,s,(n&t1[s])===t1[s])}function n1(e,t,n){n&&(e[t]=n)}var r1=Gd,g8=$m,x8=Um,hs=v8;function v8(e){var t=e.space,n=e.mustUseProperty||[],r=e.attributes||{},a=e.properties,s=e.transform,l={},i={},c,u;for(c in a)u=new x8(c,s(r,c),a[c],t),n.indexOf(c)!==-1&&(u.mustUseProperty=!0),l[c]=u,i[r1(c)]=c,i[r1(u.attribute)]=c;return new g8(l,i,t)}var y8=hs,C8=y8({space:"xlink",transform:j8,properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}});function j8(e,t){return"xlink:"+t.slice(5).toLowerCase()}var b8=hs,S8=b8({space:"xml",transform:w8,properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function w8(e,t){return"xml:"+t.slice(3).toLowerCase()}var _8=T8;function T8(e,t){return t in e?e[t]:t}var k8=_8,Vm=E8;function E8(e,t){return k8(e,t.toLowerCase())}var L8=hs,N8=Vm,R8=L8({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:N8,properties:{xmlns:null,xmlnsXLink:null}}),Xd=Cn,O8=hs,wt=Xd.booleanish,$t=Xd.number,Lr=Xd.spaceSeparated,D8=O8({transform:M8,properties:{ariaActiveDescendant:null,ariaAtomic:wt,ariaAutoComplete:null,ariaBusy:wt,ariaChecked:wt,ariaColCount:$t,ariaColIndex:$t,ariaColSpan:$t,ariaControls:Lr,ariaCurrent:null,ariaDescribedBy:Lr,ariaDetails:null,ariaDisabled:wt,ariaDropEffect:Lr,ariaErrorMessage:null,ariaExpanded:wt,ariaFlowTo:Lr,ariaGrabbed:wt,ariaHasPopup:null,ariaHidden:wt,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Lr,ariaLevel:$t,ariaLive:null,ariaModal:wt,ariaMultiLine:wt,ariaMultiSelectable:wt,ariaOrientation:null,ariaOwns:Lr,ariaPlaceholder:null,ariaPosInSet:$t,ariaPressed:wt,ariaReadOnly:wt,ariaRelevant:null,ariaRequired:wt,ariaRoleDescription:Lr,ariaRowCount:$t,ariaRowIndex:$t,ariaRowSpan:$t,ariaSelected:wt,ariaSetSize:$t,ariaSort:null,ariaValueMax:$t,ariaValueMin:$t,ariaValueNow:$t,ariaValueText:null,role:null}});function M8(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}var Uo=Cn,A8=hs,P8=Vm,le=Uo.boolean,$8=Uo.overloadedBoolean,ia=Uo.booleanish,Se=Uo.number,mt=Uo.spaceSeparated,rl=Uo.commaSeparated,I8=A8({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:P8,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:rl,acceptCharset:mt,accessKey:mt,action:null,allow:null,allowFullScreen:le,allowPaymentRequest:le,allowUserMedia:le,alt:null,as:null,async:le,autoCapitalize:null,autoComplete:mt,autoFocus:le,autoPlay:le,capture:le,charSet:null,checked:le,cite:null,className:mt,cols:Se,colSpan:null,content:null,contentEditable:ia,controls:le,controlsList:mt,coords:Se|rl,crossOrigin:null,data:null,dateTime:null,decoding:null,default:le,defer:le,dir:null,dirName:null,disabled:le,download:$8,draggable:ia,encType:null,enterKeyHint:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:le,formTarget:null,headers:mt,height:Se,hidden:le,high:Se,href:null,hrefLang:null,htmlFor:mt,httpEquiv:mt,id:null,imageSizes:null,imageSrcSet:rl,inputMode:null,integrity:null,is:null,isMap:le,itemId:null,itemProp:mt,itemRef:mt,itemScope:le,itemType:mt,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:le,low:Se,manifest:null,max:null,maxLength:Se,media:null,method:null,min:null,minLength:Se,multiple:le,muted:le,name:null,nonce:null,noModule:le,noValidate:le,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforePrint:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextMenu:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:le,optimum:Se,pattern:null,ping:mt,placeholder:null,playsInline:le,poster:null,preload:null,readOnly:le,referrerPolicy:null,rel:mt,required:le,reversed:le,rows:Se,rowSpan:Se,sandbox:mt,scope:null,scoped:le,seamless:le,selected:le,shape:null,size:Se,sizes:null,slot:null,span:Se,spellCheck:ia,src:null,srcDoc:null,srcLang:null,srcSet:rl,start:Se,step:null,style:null,tabIndex:Se,target:null,title:null,translate:null,type:null,typeMustMatch:le,useMap:null,value:ia,width:Se,wrap:null,align:null,aLink:null,archive:mt,axis:null,background:null,bgColor:null,border:Se,borderColor:null,bottomMargin:Se,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:le,declare:le,event:null,face:null,frame:null,frameBorder:null,hSpace:Se,leftMargin:Se,link:null,longDesc:null,lowSrc:null,marginHeight:Se,marginWidth:Se,noResize:le,noHref:le,noShade:le,noWrap:le,object:null,profile:null,prompt:null,rev:null,rightMargin:Se,rules:null,scheme:null,scrolling:ia,standby:null,summary:null,text:null,topMargin:Se,valueType:null,version:null,vAlign:null,vLink:null,vSpace:Se,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:le,disableRemotePlayback:le,prefix:null,property:null,results:Se,security:null,unselectable:null}}),B8=d8,z8=C8,F8=S8,U8=R8,H8=D8,V8=I8,W8=B8([F8,z8,U8,H8,V8]),Z8=Gd,K8=Um,G8=Bm,Qd="data",Y8=q8,X8=/^data[-\w.:]+$/i,Wm=/-[a-z]/g,Q8=/[A-Z]/g;function q8(e,t){var n=Z8(t),r=t,a=G8;return n in e.normal?e.property[e.normal[n]]:(n.length>4&&n.slice(0,4)===Qd&&X8.test(t)&&(t.charAt(4)==="-"?r=J8(t):t=e7(t),a=K8),new a(r,t))}function J8(e){var t=e.slice(5).replace(Wm,n7);return Qd+t.charAt(0).toUpperCase()+t.slice(1)}function e7(e){var t=e.slice(4);return Wm.test(t)?e:(t=t.replace(Q8,t7),t.charAt(0)!=="-"&&(t="-"+t),Qd+t)}function t7(e){return"-"+e.toLowerCase()}function n7(e){return e.charAt(1).toUpperCase()}var r7=o7,o1=/[#.]/g;function o7(e,t){for(var n=e||"",r=t||"div",a={},s=0,l,i,c;s<n.length;)o1.lastIndex=s,c=o1.exec(n),l=n.slice(s,c?c.index:n.length),l&&(i?i==="#"?a.id=l:a.className?a.className.push(l):a.className=[l]:r=l,s+=l.length),c&&(i=c[0],s++);return{type:"element",tagName:r,properties:a,children:[]}}var qd={};qd.parse=l7;qd.stringify=i7;var a1="",a7=" ",s7=/[ \t\n\r\f]+/g;function l7(e){var t=String(e||a1).trim();return t===a1?[]:t.split(s7)}function i7(e){return e.join(a7).trim()}var Jd={};Jd.parse=c7;Jd.stringify=u7;var Au=",",s1=" ",ya="";function c7(e){for(var t=[],n=String(e||ya),r=n.indexOf(Au),a=0,s=!1,l;!s;)r===-1&&(r=n.length,s=!0),l=n.slice(a,r).trim(),(l||!s)&&t.push(l),a=r+1,r=n.indexOf(Au,a);return t}function u7(e,t){var n=t||{},r=n.padLeft===!1?ya:s1,a=n.padRight?s1:ya;return e[e.length-1]===ya&&(e=e.concat(ya)),e.join(a+Au+r).trim()}var d7=Y8,l1=Gd,p7=r7,i1=qd.parse,c1=Jd.parse,f7=m7,h7={}.hasOwnProperty;function m7(e,t,n){var r=n?C7(n):null;return a;function a(l,i){var c=p7(l,t),u=Array.prototype.slice.call(arguments,2),d=c.tagName.toLowerCase(),p;if(c.tagName=r&&h7.call(r,d)?r[d]:d,i&&g7(i,c)&&(u.unshift(i),i=null),i)for(p in i)s(c.properties,p,i[p]);return Zm(c.children,u),c.tagName==="template"&&(c.content={type:"root",children:c.children},c.children=[]),c}function s(l,i,c){var u,d,p;c==null||c!==c||(u=d7(e,i),d=u.property,p=c,typeof p=="string"&&(u.spaceSeparated?p=i1(p):u.commaSeparated?p=c1(p):u.commaOrSpaceSeparated&&(p=i1(c1(p).join(" ")))),d==="style"&&typeof c!="string"&&(p=y7(p)),d==="className"&&l.className&&(p=l.className.concat(p)),l[d]=v7(u,d,p))}}function g7(e,t){return typeof e=="string"||"length"in e||x7(t.tagName,e)}function x7(e,t){var n=t.type;return e==="input"||!n||typeof n!="string"?!1:typeof t.children=="object"&&"length"in t.children?!0:(n=n.toLowerCase(),e==="button"?n!=="menu"&&n!=="submit"&&n!=="reset"&&n!=="button":"value"in t)}function Zm(e,t){var n,r;if(typeof t=="string"||typeof t=="number"){e.push({type:"text",value:String(t)});return}if(typeof t=="object"&&"length"in t){for(n=-1,r=t.length;++n<r;)Zm(e,t[n]);return}if(typeof t!="object"||!("type"in t))throw new Error("Expected node, nodes, or string, got `"+t+"`");e.push(t)}function v7(e,t,n){var r,a,s;if(typeof n!="object"||!("length"in n))return u1(e,t,n);for(a=n.length,r=-1,s=[];++r<a;)s[r]=u1(e,t,n[r]);return s}function u1(e,t,n){var r=n;return e.number||e.positiveNumber?!isNaN(r)&&r!==""&&(r=Number(r)):(e.boolean||e.overloadedBoolean)&&typeof r=="string"&&(r===""||l1(n)===l1(t))&&(r=!0),r}function y7(e){var t=[],n;for(n in e)t.push([n,e[n]].join(": "));return t.join("; ")}function C7(e){for(var t=e.length,n=-1,r={},a;++n<t;)a=e[n],r[a.toLowerCase()]=a;return r}var j7=W8,b7=f7,Km=b7(j7,"div");Km.displayName="html";var S7=Km,w7=S7;const _7="Æ",T7="&",k7="Á",E7="Â",L7="À",N7="Å",R7="Ã",O7="Ä",D7="©",M7="Ç",A7="Ð",P7="É",$7="Ê",I7="È",B7="Ë",z7=">",F7="Í",U7="Î",H7="Ì",V7="Ï",W7="<",Z7="Ñ",K7="Ó",G7="Ô",Y7="Ò",X7="Ø",Q7="Õ",q7="Ö",J7='"',ev="®",tv="Þ",nv="Ú",rv="Û",ov="Ù",av="Ü",sv="Ý",lv="á",iv="â",cv="´",uv="æ",dv="à",pv="&",fv="å",hv="ã",mv="ä",gv="¦",xv="ç",vv="¸",yv="¢",Cv="©",jv="¤",bv="°",Sv="÷",wv="é",_v="ê",Tv="è",kv="ð",Ev="ë",Lv="½",Nv="¼",Rv="¾",Ov=">",Dv="í",Mv="î",Av="¡",Pv="ì",$v="¿",Iv="ï",Bv="«",zv="<",Fv="¯",Uv="µ",Hv="·",Vv=" ",Wv="¬",Zv="ñ",Kv="ó",Gv="ô",Yv="ò",Xv="ª",Qv="º",qv="ø",Jv="õ",e9="ö",t9="¶",n9="±",r9="£",o9='"',a9="»",s9="®",l9="§",i9="­",c9="¹",u9="²",d9="³",p9="ß",f9="þ",h9="×",m9="ú",g9="û",x9="ù",v9="¨",y9="ü",C9="ý",j9="¥",b9="ÿ",S9={AElig:_7,AMP:T7,Aacute:k7,Acirc:E7,Agrave:L7,Aring:N7,Atilde:R7,Auml:O7,COPY:D7,Ccedil:M7,ETH:A7,Eacute:P7,Ecirc:$7,Egrave:I7,Euml:B7,GT:z7,Iacute:F7,Icirc:U7,Igrave:H7,Iuml:V7,LT:W7,Ntilde:Z7,Oacute:K7,Ocirc:G7,Ograve:Y7,Oslash:X7,Otilde:Q7,Ouml:q7,QUOT:J7,REG:ev,THORN:tv,Uacute:nv,Ucirc:rv,Ugrave:ov,Uuml:av,Yacute:sv,aacute:lv,acirc:iv,acute:cv,aelig:uv,agrave:dv,amp:pv,aring:fv,atilde:hv,auml:mv,brvbar:gv,ccedil:xv,cedil:vv,cent:yv,copy:Cv,curren:jv,deg:bv,divide:Sv,eacute:wv,ecirc:_v,egrave:Tv,eth:kv,euml:Ev,frac12:Lv,frac14:Nv,frac34:Rv,gt:Ov,iacute:Dv,icirc:Mv,iexcl:Av,igrave:Pv,iquest:$v,iuml:Iv,laquo:Bv,lt:zv,macr:Fv,micro:Uv,middot:Hv,nbsp:Vv,not:Wv,ntilde:Zv,oacute:Kv,ocirc:Gv,ograve:Yv,ordf:Xv,ordm:Qv,oslash:qv,otilde:Jv,ouml:e9,para:t9,plusmn:n9,pound:r9,quot:o9,raquo:a9,reg:s9,sect:l9,shy:i9,sup1:c9,sup2:u9,sup3:d9,szlig:p9,thorn:f9,times:h9,uacute:m9,ucirc:g9,ugrave:x9,uml:v9,uuml:y9,yacute:C9,yen:j9,yuml:b9},w9={0:"�",128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"};var Gm=_9;function _9(e){var t=typeof e=="string"?e.charCodeAt(0):e;return t>=48&&t<=57}var T9=k9;function k9(e){var t=typeof e=="string"?e.charCodeAt(0):e;return t>=97&&t<=102||t>=65&&t<=70||t>=48&&t<=57}var E9=L9;function L9(e){var t=typeof e=="string"?e.charCodeAt(0):e;return t>=97&&t<=122||t>=65&&t<=90}var N9=E9,R9=Gm,O9=D9;function D9(e){return N9(e)||R9(e)}var ol,M9=59,A9=P9;function P9(e){var t="&"+e+";",n;return ol=ol||document.createElement("i"),ol.innerHTML=t,n=ol.textContent,n.charCodeAt(n.length-1)===M9&&e!=="semi"||n===t?!1:n}var d1=S9,p1=w9,$9=Gm,I9=T9,Ym=O9,B9=A9,z9=J9,F9={}.hasOwnProperty,ao=String.fromCharCode,U9=Function.prototype,f1={warning:null,reference:null,text:null,warningContext:null,referenceContext:null,textContext:null,position:{},additional:null,attribute:!1,nonTerminated:!0},H9=9,h1=10,V9=12,W9=32,m1=38,Z9=59,K9=60,G9=61,Y9=35,X9=88,Q9=120,q9=65533,so="named",ep="hexadecimal",tp="decimal",np={};np[ep]=16;np[tp]=10;var ki={};ki[so]=Ym;ki[tp]=$9;ki[ep]=I9;var Xm=1,Qm=2,qm=3,Jm=4,e3=5,Pu=6,t3=7,Cr={};Cr[Xm]="Named character references must be terminated by a semicolon";Cr[Qm]="Numeric character references must be terminated by a semicolon";Cr[qm]="Named character references cannot be empty";Cr[Jm]="Numeric character references cannot be empty";Cr[e3]="Named character references must be known";Cr[Pu]="Numeric character references cannot be disallowed";Cr[t3]="Numeric character references cannot be outside the permissible Unicode range";function J9(e,t){var n={},r,a;t||(t={});for(a in f1)r=t[a],n[a]=r??f1[a];return(n.position.indent||n.position.start)&&(n.indent=n.position.indent||[],n.position=n.position.start),ey(e,n)}function ey(e,t){var n=t.additional,r=t.nonTerminated,a=t.text,s=t.reference,l=t.warning,i=t.textContext,c=t.referenceContext,u=t.warningContext,d=t.position,p=t.indent||[],m=e.length,y=0,b=-1,j=d.column||1,_=d.line||1,x="",f=[],h,C,S,g,w,k,E,O,M,F,G,q,ve,fe,X,D,I,B,H;for(typeof n=="string"&&(n=n.charCodeAt(0)),D=V(),O=l?ye:U9,y--,m++;++y<m;)if(w===h1&&(j=p[b]||1),w=e.charCodeAt(y),w===m1){if(E=e.charCodeAt(y+1),E===H9||E===h1||E===V9||E===W9||E===m1||E===K9||E!==E||n&&E===n){x+=ao(w),j++;continue}for(ve=y+1,q=ve,H=ve,E===Y9?(H=++q,E=e.charCodeAt(H),E===X9||E===Q9?(fe=ep,H=++q):fe=tp):fe=so,h="",G="",g="",X=ki[fe],H--;++H<m&&(E=e.charCodeAt(H),!!X(E));)g+=ao(E),fe===so&&F9.call(d1,g)&&(h=g,G=d1[g]);S=e.charCodeAt(H)===Z9,S&&(H++,C=fe===so?B9(g):!1,C&&(h=g,G=C)),B=1+H-ve,!S&&!r||(g?fe===so?(S&&!G?O(e3,1):(h!==g&&(H=q+h.length,B=1+H-q,S=!1),S||(M=h?Xm:qm,t.attribute?(E=e.charCodeAt(H),E===G9?(O(M,B),G=null):Ym(E)?G=null:O(M,B)):O(M,B))),k=G):(S||O(Qm,B),k=parseInt(g,np[fe]),ty(k)?(O(t3,B),k=ao(q9)):k in p1?(O(Pu,B),k=p1[k]):(F="",ny(k)&&O(Pu,B),k>65535&&(k-=65536,F+=ao(k>>>10|55296),k=56320|k&1023),k=F+ao(k))):fe!==so&&O(Jm,B)),k?(oe(),D=V(),y=H-1,j+=H-ve+1,f.push(k),I=V(),I.offset++,s&&s.call(c,k,{start:D,end:I},e.slice(ve-1,H)),D=I):(g=e.slice(ve-1,H),x+=g,j+=g.length,y=H-1)}else w===10&&(_++,b++,j=0),w===w?(x+=ao(w),j++):oe();return f.join("");function V(){return{line:_,column:j,offset:y+(d.offset||0)}}function ye(ge,re){var Te=V();Te.column+=re,Te.offset+=re,l.call(u,Cr[ge],Te,ge)}function oe(){x&&(f.push(x),a&&a.call(i,x,{start:D,end:V()}),x="")}}function ty(e){return e>=55296&&e<=57343||e>1114111}function ny(e){return e>=1&&e<=8||e===11||e>=13&&e<=31||e>=127&&e<=159||e>=64976&&e<=65007||(e&65535)===65535||(e&65535)===65534}var n3={exports:{}};(function(e){var t=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=function(r){var a=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,s=0,l={},i={manual:r.Prism&&r.Prism.manual,disableWorkerMessageHandler:r.Prism&&r.Prism.disableWorkerMessageHandler,util:{encode:function f(h){return h instanceof c?new c(h.type,f(h.content),h.alias):Array.isArray(h)?h.map(f):h.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(f){return Object.prototype.toString.call(f).slice(8,-1)},objId:function(f){return f.__id||Object.defineProperty(f,"__id",{value:++s}),f.__id},clone:function f(h,C){C=C||{};var S,g;switch(i.util.type(h)){case"Object":if(g=i.util.objId(h),C[g])return C[g];S={},C[g]=S;for(var w in h)h.hasOwnProperty(w)&&(S[w]=f(h[w],C));return S;case"Array":return g=i.util.objId(h),C[g]?C[g]:(S=[],C[g]=S,h.forEach(function(k,E){S[E]=f(k,C)}),S);default:return h}},getLanguage:function(f){for(;f;){var h=a.exec(f.className);if(h)return h[1].toLowerCase();f=f.parentElement}return"none"},setLanguage:function(f,h){f.className=f.className.replace(RegExp(a,"gi"),""),f.classList.add("language-"+h)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(S){var f=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(S.stack)||[])[1];if(f){var h=document.getElementsByTagName("script");for(var C in h)if(h[C].src==f)return h[C]}return null}},isActive:function(f,h,C){for(var S="no-"+h;f;){var g=f.classList;if(g.contains(h))return!0;if(g.contains(S))return!1;f=f.parentElement}return!!C}},languages:{plain:l,plaintext:l,text:l,txt:l,extend:function(f,h){var C=i.util.clone(i.languages[f]);for(var S in h)C[S]=h[S];return C},insertBefore:function(f,h,C,S){S=S||i.languages;var g=S[f],w={};for(var k in g)if(g.hasOwnProperty(k)){if(k==h)for(var E in C)C.hasOwnProperty(E)&&(w[E]=C[E]);C.hasOwnProperty(k)||(w[k]=g[k])}var O=S[f];return S[f]=w,i.languages.DFS(i.languages,function(M,F){F===O&&M!=f&&(this[M]=w)}),w},DFS:function f(h,C,S,g){g=g||{};var w=i.util.objId;for(var k in h)if(h.hasOwnProperty(k)){C.call(h,k,h[k],S||k);var E=h[k],O=i.util.type(E);O==="Object"&&!g[w(E)]?(g[w(E)]=!0,f(E,C,null,g)):O==="Array"&&!g[w(E)]&&(g[w(E)]=!0,f(E,C,k,g))}}},plugins:{},highlightAll:function(f,h){i.highlightAllUnder(document,f,h)},highlightAllUnder:function(f,h,C){var S={callback:C,container:f,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};i.hooks.run("before-highlightall",S),S.elements=Array.prototype.slice.apply(S.container.querySelectorAll(S.selector)),i.hooks.run("before-all-elements-highlight",S);for(var g=0,w;w=S.elements[g++];)i.highlightElement(w,h===!0,S.callback)},highlightElement:function(f,h,C){var S=i.util.getLanguage(f),g=i.languages[S];i.util.setLanguage(f,S);var w=f.parentElement;w&&w.nodeName.toLowerCase()==="pre"&&i.util.setLanguage(w,S);var k=f.textContent,E={element:f,language:S,grammar:g,code:k};function O(F){E.highlightedCode=F,i.hooks.run("before-insert",E),E.element.innerHTML=E.highlightedCode,i.hooks.run("after-highlight",E),i.hooks.run("complete",E),C&&C.call(E.element)}if(i.hooks.run("before-sanity-check",E),w=E.element.parentElement,w&&w.nodeName.toLowerCase()==="pre"&&!w.hasAttribute("tabindex")&&w.setAttribute("tabindex","0"),!E.code){i.hooks.run("complete",E),C&&C.call(E.element);return}if(i.hooks.run("before-highlight",E),!E.grammar){O(i.util.encode(E.code));return}if(h&&r.Worker){var M=new Worker(i.filename);M.onmessage=function(F){O(F.data)},M.postMessage(JSON.stringify({language:E.language,code:E.code,immediateClose:!0}))}else O(i.highlight(E.code,E.grammar,E.language))},highlight:function(f,h,C){var S={code:f,grammar:h,language:C};if(i.hooks.run("before-tokenize",S),!S.grammar)throw new Error('The language "'+S.language+'" has no grammar.');return S.tokens=i.tokenize(S.code,S.grammar),i.hooks.run("after-tokenize",S),c.stringify(i.util.encode(S.tokens),S.language)},tokenize:function(f,h){var C=h.rest;if(C){for(var S in C)h[S]=C[S];delete h.rest}var g=new p;return m(g,g.head,f),d(f,g,h,g.head,0),b(g)},hooks:{all:{},add:function(f,h){var C=i.hooks.all;C[f]=C[f]||[],C[f].push(h)},run:function(f,h){var C=i.hooks.all[f];if(!(!C||!C.length))for(var S=0,g;g=C[S++];)g(h)}},Token:c};r.Prism=i;function c(f,h,C,S){this.type=f,this.content=h,this.alias=C,this.length=(S||"").length|0}c.stringify=function f(h,C){if(typeof h=="string")return h;if(Array.isArray(h)){var S="";return h.forEach(function(O){S+=f(O,C)}),S}var g={type:h.type,content:f(h.content,C),tag:"span",classes:["token",h.type],attributes:{},language:C},w=h.alias;w&&(Array.isArray(w)?Array.prototype.push.apply(g.classes,w):g.classes.push(w)),i.hooks.run("wrap",g);var k="";for(var E in g.attributes)k+=" "+E+'="'+(g.attributes[E]||"").replace(/"/g,"&quot;")+'"';return"<"+g.tag+' class="'+g.classes.join(" ")+'"'+k+">"+g.content+"</"+g.tag+">"};function u(f,h,C,S){f.lastIndex=h;var g=f.exec(C);if(g&&S&&g[1]){var w=g[1].length;g.index+=w,g[0]=g[0].slice(w)}return g}function d(f,h,C,S,g,w){for(var k in C)if(!(!C.hasOwnProperty(k)||!C[k])){var E=C[k];E=Array.isArray(E)?E:[E];for(var O=0;O<E.length;++O){if(w&&w.cause==k+","+O)return;var M=E[O],F=M.inside,G=!!M.lookbehind,q=!!M.greedy,ve=M.alias;if(q&&!M.pattern.global){var fe=M.pattern.toString().match(/[imsuy]*$/)[0];M.pattern=RegExp(M.pattern.source,fe+"g")}for(var X=M.pattern||M,D=S.next,I=g;D!==h.tail&&!(w&&I>=w.reach);I+=D.value.length,D=D.next){var B=D.value;if(h.length>f.length)return;if(!(B instanceof c)){var H=1,V;if(q){if(V=u(X,I,f,G),!V||V.index>=f.length)break;var re=V.index,ye=V.index+V[0].length,oe=I;for(oe+=D.value.length;re>=oe;)D=D.next,oe+=D.value.length;if(oe-=D.value.length,I=oe,D.value instanceof c)continue;for(var ge=D;ge!==h.tail&&(oe<ye||typeof ge.value=="string");ge=ge.next)H++,oe+=ge.value.length;H--,B=f.slice(I,oe),V.index-=I}else if(V=u(X,0,B,G),!V)continue;var re=V.index,Te=V[0],st=B.slice(0,re),jt=B.slice(re+Te.length),ue=I+B.length;w&&ue>w.reach&&(w.reach=ue);var ke=D.prev;st&&(ke=m(h,ke,st),I+=st.length),y(h,ke,H);var Qe=new c(k,F?i.tokenize(Te,F):Te,ve,Te);if(D=m(h,ke,Qe),jt&&m(h,D,jt),H>1){var Nt={cause:k+","+O,reach:ue};d(f,h,C,D.prev,I,Nt),w&&Nt.reach>w.reach&&(w.reach=Nt.reach)}}}}}}function p(){var f={value:null,prev:null,next:null},h={value:null,prev:f,next:null};f.next=h,this.head=f,this.tail=h,this.length=0}function m(f,h,C){var S=h.next,g={value:C,prev:h,next:S};return h.next=g,S.prev=g,f.length++,g}function y(f,h,C){for(var S=h.next,g=0;g<C&&S!==f.tail;g++)S=S.next;h.next=S,S.prev=h,f.length-=g}function b(f){for(var h=[],C=f.head.next;C!==f.tail;)h.push(C.value),C=C.next;return h}if(!r.document)return r.addEventListener&&(i.disableWorkerMessageHandler||r.addEventListener("message",function(f){var h=JSON.parse(f.data),C=h.language,S=h.code,g=h.immediateClose;r.postMessage(i.highlight(S,i.languages[C],C)),g&&r.close()},!1)),i;var j=i.util.currentScript();j&&(i.filename=j.src,j.hasAttribute("data-manual")&&(i.manual=!0));function _(){i.manual||i.highlightAll()}if(!i.manual){var x=document.readyState;x==="loading"||x==="interactive"&&j&&j.defer?document.addEventListener("DOMContentLoaded",_):window.requestAnimationFrame?window.requestAnimationFrame(_):window.setTimeout(_,16)}return i}(t);e.exports&&(e.exports=n),typeof Ll<"u"&&(Ll.Prism=n)})(n3);var ry=n3.exports,oy=rp;rp.displayName="markup";rp.aliases=["html","mathml","svg","xml","ssml","atom","rss"];function rp(e){e.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},e.languages.markup.tag.inside["attr-value"].inside.entity=e.languages.markup.entity,e.languages.markup.doctype.inside["internal-subset"].inside=e.languages.markup,e.hooks.add("wrap",function(t){t.type==="entity"&&(t.attributes.title=t.content.value.replace(/&amp;/,"&"))}),Object.defineProperty(e.languages.markup.tag,"addInlined",{value:function(n,r){var a={};a["language-"+r]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:e.languages[r]},a.cdata=/^<!\[CDATA\[|\]\]>$/i;var s={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};s["language-"+r]={pattern:/[\s\S]+/,inside:e.languages[r]};var l={};l[n]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return n}),"i"),lookbehind:!0,greedy:!0,inside:s},e.languages.insertBefore("markup","cdata",l)}}),Object.defineProperty(e.languages.markup.tag,"addAttribute",{value:function(t,n){e.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+t+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[n,"language-"+n],inside:e.languages[n]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),e.languages.html=e.languages.markup,e.languages.mathml=e.languages.markup,e.languages.svg=e.languages.markup,e.languages.xml=e.languages.extend("markup",{}),e.languages.ssml=e.languages.xml,e.languages.atom=e.languages.xml,e.languages.rss=e.languages.xml}var r3=op;op.displayName="css";op.aliases=[];function op(e){(function(t){var n=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;t.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+n.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+n.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+n.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:n,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},t.languages.css.atrule.inside.rest=t.languages.css;var r=t.languages.markup;r&&(r.tag.addInlined("style","css"),r.tag.addAttribute("style","css"))})(e)}const ay=Pn(r3);var sy=ap;ap.displayName="clike";ap.aliases=[];function ap(e){e.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/}}var ly=sp;sp.displayName="javascript";sp.aliases=["js"];function sp(e){e.languages.javascript=e.languages.extend("clike",{"class-name":[e.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),e.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,e.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:e.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:e.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:e.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:e.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:e.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),e.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:e.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),e.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),e.languages.markup&&(e.languages.markup.tag.addInlined("script","javascript"),e.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),e.languages.js=e.languages.javascript}var Ca=typeof globalThis=="object"?globalThis:typeof self=="object"?self:typeof window=="object"?window:typeof Ll=="object"?Ll:{},iy=wy();Ca.Prism={manual:!0,disableWorkerMessageHandler:!0};var cy=w7,uy=z9,o3=ry,dy=oy,py=r3,fy=sy,hy=ly;iy();var lp={}.hasOwnProperty;function a3(){}a3.prototype=o3;var We=new a3,my=We;We.highlight=xy;We.register=ms;We.alias=gy;We.registered=vy;We.listLanguages=yy;ms(dy);ms(py);ms(fy);ms(hy);We.util.encode=by;We.Token.stringify=Cy;function ms(e){if(typeof e!="function"||!e.displayName)throw new Error("Expected `function` for `grammar`, got `"+e+"`");We.languages[e.displayName]===void 0&&e(We)}function gy(e,t){var n=We.languages,r=e,a,s,l,i;t&&(r={},r[e]=t);for(a in r)for(s=r[a],s=typeof s=="string"?[s]:s,l=s.length,i=-1;++i<l;)n[s[i]]=n[a]}function xy(e,t){var n=o3.highlight,r;if(typeof e!="string")throw new Error("Expected `string` for `value`, got `"+e+"`");if(We.util.type(t)==="Object")r=t,t=null;else{if(typeof t!="string")throw new Error("Expected `string` for `name`, got `"+t+"`");if(lp.call(We.languages,t))r=We.languages[t];else throw new Error("Unknown language: `"+t+"` is not registered")}return n.call(this,e,r,t)}function vy(e){if(typeof e!="string")throw new Error("Expected `string` for `language`, got `"+e+"`");return lp.call(We.languages,e)}function yy(){var e=We.languages,t=[],n;for(n in e)lp.call(e,n)&&typeof e[n]=="object"&&t.push(n);return t}function Cy(e,t,n){var r;return typeof e=="string"?{type:"text",value:e}:We.util.type(e)==="Array"?jy(e,t):(r={type:e.type,content:We.Token.stringify(e.content,t,n),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:n},e.alias&&(r.classes=r.classes.concat(e.alias)),We.hooks.run("wrap",r),cy(r.tag+"."+r.classes.join("."),Sy(r.attributes),r.content))}function jy(e,t){for(var n=[],r=e.length,a=-1,s;++a<r;)s=e[a],s!==""&&s!==null&&s!==void 0&&n.push(s);for(a=-1,r=n.length;++a<r;)s=n[a],n[a]=We.Token.stringify(s,t,n);return n}function by(e){return e}function Sy(e){var t;for(t in e)e[t]=uy(e[t]);return e}function wy(){var e="Prism"in Ca,t=e?Ca.Prism:void 0;return n;function n(){e?Ca.Prism=t:delete Ca.Prism,e=void 0,t=void 0}}const ip=Pn(my);var cp=s8(ip,{});cp.registerLanguage=function(e,t){return ip.register(t)};cp.alias=function(e,t){return ip.alias(e,t)};const Yr=cp;var _y=up;up.displayName="bash";up.aliases=["shell"];function up(e){(function(t){var n="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",r={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},a={bash:r,environment:{pattern:RegExp("\\$"+n),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+n),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};t.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+n),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:a},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:r}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:a},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:a.entity}}],environment:{pattern:RegExp("\\$?"+n),alias:"constant"},variable:a.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},r.inside=t.languages.bash;for(var s=["comment","function-name","for-or-select","assign-left","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],l=a.variable[1].inside,i=0;i<s.length;i++)l[s[i]]=t.languages.bash[s[i]];t.languages.shell=t.languages.bash})(e)}const Ty=Pn(_y);var ky=dp;dp.displayName="json";dp.aliases=["webmanifest"];function dp(e){e.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},e.languages.webmanifest=e.languages.json}const Ey=Pn(ky);var Ly=pp;pp.displayName="jsx";pp.aliases=[];function pp(e){(function(t){var n=t.util.clone(t.languages.javascript),r=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,a=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,s=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function l(u,d){return u=u.replace(/<S>/g,function(){return r}).replace(/<BRACES>/g,function(){return a}).replace(/<SPREAD>/g,function(){return s}),RegExp(u,d)}s=l(s).source,t.languages.jsx=t.languages.extend("markup",n),t.languages.jsx.tag.pattern=l(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),t.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,t.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,t.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,t.languages.jsx.tag.inside.comment=n.comment,t.languages.insertBefore("inside","attr-name",{spread:{pattern:l(/<SPREAD>/.source),inside:t.languages.jsx}},t.languages.jsx.tag),t.languages.insertBefore("inside","special-attr",{script:{pattern:l(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:t.languages.jsx}}},t.languages.jsx.tag);var i=function(u){return u?typeof u=="string"?u:typeof u.content=="string"?u.content:u.content.map(i).join(""):""},c=function(u){for(var d=[],p=0;p<u.length;p++){var m=u[p],y=!1;if(typeof m!="string"&&(m.type==="tag"&&m.content[0]&&m.content[0].type==="tag"?m.content[0].content[0].content==="</"?d.length>0&&d[d.length-1].tagName===i(m.content[0].content[1])&&d.pop():m.content[m.content.length-1].content==="/>"||d.push({tagName:i(m.content[0].content[1]),openedBraces:0}):d.length>0&&m.type==="punctuation"&&m.content==="{"?d[d.length-1].openedBraces++:d.length>0&&d[d.length-1].openedBraces>0&&m.type==="punctuation"&&m.content==="}"?d[d.length-1].openedBraces--:y=!0),(y||typeof m=="string")&&d.length>0&&d[d.length-1].openedBraces===0){var b=i(m);p<u.length-1&&(typeof u[p+1]=="string"||u[p+1].type==="plain-text")&&(b+=i(u[p+1]),u.splice(p+1,1)),p>0&&(typeof u[p-1]=="string"||u[p-1].type==="plain-text")&&(b=i(u[p-1])+b,u.splice(p-1,1),p--),u[p]=new t.Token("plain-text",b,null,b)}m.content&&typeof m.content!="string"&&c(m.content)}};t.hooks.add("after-tokenize",function(u){u.language!=="jsx"&&u.language!=="tsx"||c(u.tokens)})})(e)}const Ny=Pn(Ly);var Ry=fp;fp.displayName="scss";fp.aliases=[];function fp(e){e.languages.scss=e.languages.extend("css",{comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0},atrule:{pattern:/@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,inside:{rule:/@[\w-]+/}},url:/(?:[-a-z]+-)?url(?=\()/i,selector:{pattern:/(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,inside:{parent:{pattern:/&/,alias:"important"},placeholder:/%[-\w]+/,variable:/\$[-\w]+|#\{\$[-\w]+\}/}},property:{pattern:/(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,inside:{variable:/\$[-\w]+|#\{\$[-\w]+\}/}}}),e.languages.insertBefore("scss","atrule",{keyword:[/@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i,{pattern:/( )(?:from|through)(?= )/,lookbehind:!0}]}),e.languages.insertBefore("scss","important",{variable:/\$[-\w]+|#\{\$[-\w]+\}/}),e.languages.insertBefore("scss","function",{"module-modifier":{pattern:/\b(?:as|hide|show|with)\b/i,alias:"keyword"},placeholder:{pattern:/%[-\w]+/,alias:"selector"},statement:{pattern:/\B!(?:default|optional)\b/i,alias:"keyword"},boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"},operator:{pattern:/(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,lookbehind:!0}}),e.languages.scss.atrule.inside.rest=e.languages.scss}const Oy=Pn(Ry);var Dy=hp;hp.displayName="yaml";hp.aliases=["yml"];function hp(e){(function(t){var n=/[*&][^\s[\]{},]+/,r=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,a="(?:"+r.source+"(?:[ 	]+"+n.source+")?|"+n.source+"(?:[ 	]+"+r.source+")?)",s=/(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g,function(){return/[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source}),l=/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;function i(c,u){u=(u||"").replace(/m/g,"")+"m";var d=/([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g,function(){return a}).replace(/<<value>>/g,function(){return c});return RegExp(d,u)}t.languages.yaml={scalar:{pattern:RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g,function(){return a})),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g,function(){return a}).replace(/<<key>>/g,function(){return"(?:"+s+"|"+l+")"})),lookbehind:!0,greedy:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:i(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),lookbehind:!0,alias:"number"},boolean:{pattern:i(/false|true/.source,"i"),lookbehind:!0,alias:"important"},null:{pattern:i(/null|~/.source,"i"),lookbehind:!0,alias:"important"},string:{pattern:i(l),lookbehind:!0,greedy:!0},number:{pattern:i(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source,"i"),lookbehind:!0},tag:r,important:n,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},t.languages.yml=t.languages.yaml})(e)}const My=Pn(Dy);function Xr(e){return typeof e=="string"}function mp(e){return typeof e=="number"}function s3(e){return Number.isInteger(e)}function Ho(e){return Array.isArray(e)}function Ei(e){return typeof e=="function"}function Ay(e){return e instanceof RegExp}function gs(e){return typeof e=="object"&&!Ho(e)&&!l3(e)}function Py(e){return e===void 0}function l3(e){return e===null}function $e(e){return!(Py(e)||l3(e))}function Li(e){return!$e(e)}function i3(...e){throw new Error(e.join(""))}function ut(){}function $y(){return Intl.DateTimeFormat().resolvedOptions().locale}let Iy={locale:$y(),currency:"GBP",currencySign:"£",thousands:","};const By=(e,t,n=1)=>{const r=t<e?-Math.abs(n):n;return Array(1+Math.floor(Math.abs((t-e)/n))).fill(e).map((a,s)=>a+s*r)};function al(e,t=Iy.thousands){if(Li(e))return"";for(var n=e.toString().split("."),r=/(\d+)(\d{3})/;r.test(n[0]);)n[0]=n[0].replace(r,`$1${t}$2`);return n.join(".")}function zy(e){return Li(e)?[]:Xr(e)?e.length?e.split(/,\s*|\s+/):[]:Ho(e)?e:[e]}function Ni(e,t=!0,n={}){return gs(e)?e:zy(e).reduce((r,a)=>(r[a]=Ei(t)?t(a):t,r),n)}function Fy(e){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()}function Uy(e){if(Ei(e))return e;if(Ay(e))return t=>e.test(t);if(gs(e))return t=>!!e[t];if(Ho(e)||Xr(e)){const t=Ni(e);return n=>!!t[n]}i3("Invalid selector() specification: "+e)}const Hy=(e,t,n={})=>{let r={},a={delete:!1,...n};const s=Uy(t);return Object.keys(e).map(l=>{if(s(l)){let i=e[l];a.delete&&delete e[l],a.key&&(l=a.key(l)),a.value&&(i=a.value(i)),r[l]=i}}),r},g1=(e,t)=>parseInt(e[t]||0),x1=(e,t)=>parseFloat(e[t]||0),v1=(e,t)=>(e[t]||"").toString(),y1=e=>(t,n)=>g1(t,e)-g1(n,e),wc=e=>(t,n)=>x1(t,e)-x1(n,e),C1=e=>(t,n)=>{let r=v1(t,e).toLowerCase(),a=v1(n,e).toLowerCase();return r>a?1:a>r?-1:0},Vy=e=>(t,n)=>e(n,t);function Wy(e,t=300){let n;return(...r)=>{clearTimeout(n),n=setTimeout(()=>e.apply(this,r),t)}}function Ri(e){return new Promise(t=>setTimeout(t,e))}Yr.registerLanguage("jsx",Ny);Yr.registerLanguage("json",Ey);Yr.registerLanguage("css",ay);Yr.registerLanguage("scss",Oy);Yr.registerLanguage("bash",Ty);Yr.registerLanguage("yaml",My);const tr=({code:e,language:t="jsx",caption:n,expand:r=!1,fixed:a=r,className:s="",highlightLines:l,lineProps:i,undent:c=!1})=>{const[u,d]=v.useState(!1),[p,m]=v.useState(r),y=()=>{navigator.clipboard.writeText(e),d(!0),Ri(2e3).then(()=>d(!1))};return o.jsxs("div",{className:`codeblock ${s} ${p?"expanded":""} ${a?"fixed-open":"expandable"}`,children:[!!n&&o.jsx("h4",{className:"caption",children:n}),o.jsxs("div",{className:"controls",children:[o.jsx("div",{className:"expand",onClick:()=>m(!p),children:p?"Compress":"Expand"}),o.jsx("div",{className:`clipboard ${u?"copied":""}`,onClick:y,children:u?"Copied":"Copy"})]}),o.jsx(Yr,{language:t,showLineNumbers:!0,useInlineStyles:!1,wrapLines:!0,customStyle:{},children:Zy(e,{undent:c})})]})},Zy=(e,t={})=>{if(e=e.replace(/^[^]*?{?\/\*\s*START\s*\*\/}?\n/,"").replace(/[\n\s]*{?\/\*\s*END\s*\*\/}?[^]*/,"").replaceAll(/\/\/\s*PRETEND:\s/g,"").replaceAll(/{?\/\*\s*PRETEND:\s(.*?)\s+\*\/}?/g,"$1").replace(/\n+$/,""),t.undent){const n=new RegExp("^"+" ".repeat(t.undent),"gm");e=e.replaceAll(n,"")}return e},je=({Component:e,code:t,html:n,children:r,className:a="",language:s,...l})=>o.jsxs("div",{className:`example grid-2 gap-8 stack-desktop ${a}`,children:[o.jsx("div",{className:"source",children:o.jsx(tr,{code:t||n,language:n?"html":s,...l})}),!!r&&o.jsx("div",{className:"interim",children:r}),e?o.jsxs("div",{className:"output",children:[o.jsx("h4",{className:"caption",children:"Output"}),o.jsx(e,{})]}):null,n?o.jsxs("div",{className:"output",children:[o.jsx("h4",{className:"caption",children:"Output"}),o.jsx("div",{dangerouslySetInnerHTML:{__html:n}})]}):null]}),sl=v.createContext();function j1(e){return typeof e=="function"}function b1(e){return typeof e=="object"&&!c3(e)&&!Ky(e)}function c3(e){return Array.isArray(e)}function Ky(e){return e===null}function Gy({context:e={},Implementation:t,spec:n=!1,props:r={},ref:a}){if(!n)return o.jsx(t,{...r,ref:a});let s={},l=j1(n)?n(e):e[n];if(c3(l)&&(t=l[0],l=l[1]),j1(l)){const i=l(r,a,e);if(ee.isValidElement(i))return i;b1(i)&&Object.assign(s,r,i)}else b1(l)?Object.assign(s,l,r):Object.assign(s,r);return o.jsx(t,{...s,ref:a})}const Yy=e=>({Context:sl,Provider:({children:t,...n})=>o.jsx(sl.Provider,{value:{...e,...n},children:t}),Consumer:t=>n=>o.jsx(sl.Consumer,{children:r=>o.jsx(t,{...r,...n,context:r})}),Component:(t,n=t.displayName||t.name)=>ee.forwardRef((r,a)=>o.jsx(sl.Consumer,{children:s=>o.jsx(Gy,{Implementation:t,context:s,spec:n,props:r,ref:a})}))}),Xy=Yy(),me=Xy.Component,Qy="svg",$u="-",S1="none",u3="fill",qy="path",Jy="line",eC="rect",tC="array",nC="circle",rC="ellipse",oC="polygon",aC="polyline",gp=/-(?!\d)/,w1="currentColor",xp=512,vp=512,xs={defaults:{width:512,height:512,type:"line"},icons:{alpha:"M102,448L256,64L410,448 M152,333L360,333",angle:"M448,336L256,144L64,336",angles:"M448,448L256,256L64,448M448,256L256,64L64,256",arrow:"M96,224L256,64L416,224M256,86L256,448",arrows:"M144,144L256,32L368,144M368,368L256,480L144,368M256,56L256,456",asterisk:"M76,152L436,360M76,360L436,152M256,48L256,464",at:"M256,160C309,160 352,203 352,256C352,309 309,352 256,352C203,352 160,309 160,256C160,203 203,160 256,160M256,480C132,480 32,380 32,256C32,132 132,32 256,32C380,32 480,132 480,256L480,288C480,323 451,352 416,352C381,352 352,323 352,288L352,176",ban:"M100,412L412,100 M256,32C380,32 480,132 480,255C480,379 380,480 256,480C132,480 32,379 32,255C32,132 132,32 256,32Z",bars:"M64,96L448,96M64,256L448,256M64,416L448,416",caret:"M448,336L256,144L64,336L448,336Z",check:"M48,248L192,392L464,120",circle:"circle:256 256 224",clipboard:"M192,80L80,80L80,496L432,496L432,80L320,80L320,112L192,112L192,80ZM256,16C282,16 304,38 304,64C304,90 282,112 256,112C230,112 208,90 208,64C208,38 230,16 256,16Z",cloud:"M480,293C480,234 437,177 362,196C346,161 319,116 240,120C180,124 139,165 125,224C121,223 116,223 111,223C68,223 32,260 32,307C32,354 68,392 111,392C120,392 366,392 380,392C462,392 480,335 480,293Z",cog:"M306,21L206,21L187,91L147,114L78,95L28,182L78,233L78,279L28,330L78,417L147,398L187,421L206,491L306,491L325,421L365,398L434,417L484,330L434,279L434,233L484,182L434,95L365,114L325,91L306,21Z M256,176C300,176 336,212 336,256C336,300 300,336 256,336C212,336 176,300 176,256C176,212 212,176 256,176Z",cross:"M112,112L400,400M400,112L112,400",drag:"M64,96L256,32L448,96M64,416L256,480L448,416M128,256L384,256",envelope:"M32,104L480,104L480,408L32,408L32,104M48,120L256,288L464,120M48,392L200,252M464,392L312,252",equals:"M96,320L416,320 M96,192L416,192",exclamation:"M256,96L256,310M254,416L258,416",filter:"M64,32L448,32L448,128L305,271L304,432L208,496L208,272L64,128L64,32Z",heart:"M256,128C298,48 382,48 424,88C466,128 466,208 424,288C394,348 319,408 256,448C193,408 118,348 88,288C46,208 46,128 88,88C130,48 214,48 256,128Z",hourglass:"M80,32L432,32M80,480L432,480M128,32C128,256 384,256 384,480M384,32C384,256 128,256 128,480",info:"M212,202L256,202L256,416M182,416L330,416M252,96L256,96",list:"M176,96L448,96M176,256L448,256M176,416L448,416M64,96L80,96M64,256L80,256M64,416L80,416",minus:"M96,256L416,256",number:"M256,448L256,64L176,128 M160,448L336,449",pen:"M482,143C491,134 491,120 482,112L401,30C392,21 378,21 369,30L72,326L22,489L186,439L482,143M305,93L418,206",plus:"M256,96L256,416M96,256L416,256",point:"M464,192L256,16L48,192L128,192L128,480L384,480L384,192L464,192Z",prime:"M256,128L256,256",question:"M160,160C160,126 197,80 255,80C314,80 336,128 336,160C336,236 255,235 255,320 M255,416L256,416",rotate:"M392,120C356,84 307,64 256,64C150,64 64,150 64,256C64,362 150,448 256,448C303,448 349,430 384,399C349,430 303,448 256,448C150,448 64,362 64,256C64,150 150,64 256,64C307,64 356,84 392,120Z M352,208L480,208L480,80",search:"M204,32C300,32 384,111 384,208C384,305 305,384 208,384C111,384 32,305 32,208C32,111 107,32 204,32M480,480L332,332",square:"rect:32 32 448 448",square10:"rect:32 32 448 448 45 45",square20:"rect:32 32 448 448 90 90",square30:"rect:32 32 448 448 135 135",square40:"rect:32 32 448 448 180 180",star:"M256,32L324,183L489,202L367,313L400,476L256,394L112,476L145,313L23,202L188,183L256,32Z",thumb:"M149,174L32,174L32,448L149,448L149,184 M149,217C277,160 246,36 282,38C372,44 324,192 324,192L440,192C462,192 480,210 480,232C480,254 462,272 440,272L368,272M424,272C446,272 464,290 464,312C464,334 446,352 424,352L352,352M392,352C414,352 432,370 432,392C432,414 414,432 392,432L256,432C220,432 149,409 149,409",time:"M256,128L256,256L336,336",trash:"M32,80L480,80 M80,80C80,80 100,344 109,452C111,477 131,496 156,496C211,496 301,496 356,496C381,496 401,477 403,452C412,344 432,80 432,80 M160,80L208,16L304,16L352,74",triangle:"M256,64L32,448L480,448L256,64Z",user:"M256,32C302,32 340,70 340,116C340,162 302,208 256,208C210,208 172,162 172,116C172,70 210,32 256,32ZM448,412C448,361 410,320 363,320L148,320C102,320 64,361 64,412L64,480L448,480L448,412Z",vertical:"line:256,48 256,464",wrench:"M486,108C493,124 496,142 496,160C496,239 431,304 352,304C330,304 309,299 290,290L98,482C79,501 49,501 30,482C11,463 11,433 30,414L222,222C213,203 208,182 208,160C208,81 273,16 352,16C370,16 388,19 404,26L326,103L409,186L486,108Z"}};function sC(e,t,n=xs){n.icons[e]=t}function lC(e,t=xs){Object.entries(e).forEach(([n,r])=>sC(n,r,t))}const ll=v.createContext();function _1(e){return typeof e=="function"}function T1(e){return typeof e=="object"&&!d3(e)&&!iC(e)}function d3(e){return Array.isArray(e)}function iC(e){return e===null}function cC({context:e={},Implementation:t,spec:n=!1,props:r={},ref:a}){if(!n)return o.jsx(t,{...r,ref:a});let s={},l=_1(n)?n(e):e[n];if(d3(l)&&(t=l[0],l=l[1]),_1(l)){const i=l(r,a,e);if(ee.isValidElement(i))return i;T1(i)&&Object.assign(s,r,i)}else T1(l)?Object.assign(s,l,r):Object.assign(s,r);return o.jsx(t,{...s,ref:a})}const uC=e=>({Context:ll,Provider:({children:t,...n})=>o.jsx(ll.Provider,{value:{...e,...n},children:t}),Consumer:t=>n=>o.jsx(ll.Consumer,{children:r=>o.jsx(t,{...r,...n,context:r})}),Component:(t,n=t.displayName||t.name)=>ee.forwardRef((r,a)=>o.jsx(ll.Consumer,{children:s=>o.jsx(cC,{Implementation:t,context:s,spec:n,props:r,ref:a})}))}),dC=uC(),pC=dC.Component;function In(e){return typeof e=="string"}function vs(e){return Array.isArray(e)}function Oi(e){return typeof e=="object"&&!vs(e)&&!f3(e)}function p3(e){return e===void 0}function f3(e){return e===null}function Di(e){return!(p3(e)||f3(e))}function h3(e){return!Di(e)}function Mn(...e){throw new Error(e.join(""))}function fC(){return Intl.DateTimeFormat().resolvedOptions().locale}fC();function Iu(e){return h3(e)?[]:In(e)?e.length?e.split(/,\s*|\s+/):[]:vs(e)?e:[e]}function ys(e){return e.split(/\s*[;&]\s*/).filter(t=>t.length>0).reduce((t,n)=>{const[r,a]=n.split(/\s*[:=]\s*/);return t[r]=p3(a)?!0:a,t},{})}const yp=e=>e.filter(Di).join(" "),hC=e=>Object.entries(e).filter(([,t])=>t).map(([t])=>t),mC=(...e)=>yp(e.flatMap(t=>Oi(t)?hC(t):t)),m3={x:0,y:0,size:16,flipX:!1,flipY:!1,rotate:0},hr={flip:(e,t)=>{In(t)&&t.match(/^y$/i)?e.flipY=!e.flipY:e.flipX=!e.flipX},flipx:e=>e.flipX=!e.flipX,flipy:e=>e.flipY=!e.flipY,grow:(e,t)=>e.size+=parseFloat(t),shrink:(e,t)=>e.size-=parseFloat(t),left:(e,t)=>t===!0?e.rotate-=90:e.x-=parseFloat(t),right:(e,t)=>t===!0?e.rotate+=90:e.x+=parseFloat(t),up:(e,t)=>t===!0?e.rotate+=0:e.y-=parseFloat(t),down:(e,t)=>t===!0?e.rotate+=180:e.y+=parseFloat(t),rotate:(e,t)=>e.rotate+=parseInt(t)};hr.flop=hr.flipy;hr["flip-x"]=hr.flipx;hr["flip-y"]=hr.flipy;function g3(e,t={...m3}){const n=In(e)?ys(e):e||{};return Object.entries(n).reduce((r,[a,s])=>{const l=a.toLowerCase();return(hr[l]||Mn(`Invalid transform: ${l}`))(r,s),r},t)}const gC=4.42,bn=e=>`${gC*e}%`,xC={},Bu={outline:{fill:"none",stroke:"currentColor",strokeWidth:bn(2),strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"1.5"},solid:{fill:"currentColor",stroke:"none"},round:{strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"1.5"},square:{strokeLinecap:"square",strokeLinejoin:"miter",strokeMiterlimit:"1.5"},butt:{strokeLinecap:"butt"},bevel:{strokeLinejoin:"bevel"},thinnest:{strokeWidth:bn(.5)},thinner:{strokeWidth:bn(1)},thin:{strokeWidth:bn(1.5)},medium:{strokeWidth:bn(2)},thick:{strokeWidth:bn(2.5)},thicker:{strokeWidth:bn(3)},thickest:{strokeWidth:bn(3.5)}};Bu.line=Bu.outline;const vC={...Object.entries(Bu).reduce((e,[t,n])=>(e[t]=r=>Object.assign(r,n),e),{}),fill:(e,t)=>e.fill=t===!0?w1:t,stroke:(e,t)=>e.stroke=t===!0?w1:t,nofill:e=>e.fill=S1,nostroke:e=>e.stroke=S1,strokewidth:(e,t)=>e.strokeWidth=t.match(/^[\d.]+$/)?bn(parseFloat(t)):t,opacity:(e,t)=>e.opacity=t,fillopacity:(e,t)=>e.fillOpacity=t,strokeopacity:(e,t)=>e.strokeOpacity=t,dasharray:(e,t)=>e.strokeDasharray=t,drawlength:(e,t)=>e["--draw-length"]=t,drawtime:(e,t)=>e["--draw-time"]=t,filltime:(e,t)=>e["--fill-time"]=t};function ei(e,t){return(In(t)?t.split(gp):t).forEach(n=>{const[r,a=!0]=n.split(/[:=]/),s=r.toLowerCase(),l=vC[s];if(l){l(e.style||(e.style={...xC}),a);return}(hr[s]||Mn(`Invalid style or transform: ${s}`))(e.transform||(e.transform={...m3}),a)})}const yC={width:xp,height:vp,type:u3},x3={svg:e=>({element:Qy,svg:e}),array:e=>({element:tC,items:e}),path:e=>({element:qy,d:e}),polygon:e=>({element:oC,points:e}),polyline:e=>({element:aC,points:e}),circle:e=>({element:nC,...il(e,"cx cy r")}),ellipse:e=>({element:rC,...il(e,"cx cy rx ry")}),line:e=>({element:Jy,...il(e,"x1 y1 x2 y2")}),rect:e=>({element:eC,...il(e,"x y width height rx ry")})};function il(e,t){const n=vs(t)?[...t]:Iu(t);return Iu(e).reduce((r,a)=>{if(n.length){const s=n.shift();r[s]=a}return r},{})}const v3=e=>{const[t,n=""]=e.split("?"),[r,...a]=t.split(/\.(?!\d)/),s=r.split(gp).filter(i=>i.length),l=ys(n);return{dashes:s,classes:a,style:l}},CC=(e,t)=>{const n=v3(e),{dashes:r}=n;for(let a=r.length;a>0;a--){const s=r.slice(0,a).join($u);if(t[s]){n.name=r.splice(0,a).join($u);break}}return n},k1=(e,t,n={})=>{const{icons:r}=t,a=CC(e,r),{name:s,classes:l,style:i,dashes:c}=a;h3(s)&&Mn(`No icon found matching any leading subset of ${a.dashes.join($u)}`);const u=t.icons[s]||Mn(`Icon not found in data: ${s}`),d=y3(u,t,{...n,name:s});if((l.length||n.className)&&(d.className=yp([...l||[],n.className])),d.transform&&(d.transform=g3(d.transform)),d.style&&(d.style=In(d.style)?ys(d.style):{...d.style}),d.type){const p=d.style&&{...d.style};ei(d,d.type),delete d.type,p&&Object.assign(d.style,p)}return c.length&&ei(d,c),Object.keys(i).length&&(d.style=Object.assign(d.style||{},i)),d};function jC(e){const t=e.match(/^(.*?):(.*)/);return t?{path:t[2],type:t[1]}:{path:e}}const y3=(e,t,n={})=>{const{defaults:r={}}=t,a={...yC,...r,...n};if(In(e))return bC(a,e);if(Oi(e))return SC(a,e);if(vs(e))return wC(a,e,t);Mn(`Cannot parse icon data: ${e}`)};function bC(e,t){if(t.match(/^\w*</))return e.body={element:"svg",svg:t},e;const n=t.match(/^(.*?):(.*)/);if(n){const[,r,a]=n,{dashes:s,classes:l}=v3(r),i=s.shift(),c=x3[i]||Mn(`Invalid icon data element: ${i}`);return e.body=c(a),l.length&&(e.body.className=yp(l)),s.length&&ei(e.body,s),e}return e.body={element:"path",d:t},e}function SC(e,t){const n={...t};if(n.element)return e.body=n,e;for(let r of Object.entries(x3)){const[a,s]=r,l=n[a];if(Di(l))return e.body=s(l),delete n[a],Object.assign(e,n),e}Mn(`Cannot parse icon data: ${JSON.stringify(t)}`)}function wC(e,t,n){return e.body={element:"array",items:t.map(r=>y3(r,n).body)},e}const _C=({size:e,...t})=>{t.width??(t.width=e||xp),t.height??(t.height=e||vp),t.path&&Object.assign(t,jC(t.path));let n;return t.style&&(In(t.style)?(n=ys(t.style),t.style={}):n={...t.style}),ei(t,t.type?t.type.split(gp).filter(r=>r.length):u3),delete t.type,t.style&&n&&Object.assign(t.style,n),t.transform&&(t.transform=g3(t.transform)),t},Cp=e=>Oi(e)?Object.entries(e).reduce((t,[n,r])=>(t[n.replace(/(?!-)-./g,a=>a[1].toUpperCase())]=r,t),{}):e,TC=e=>Di(e)?Cp(ys(e)):null,Bn=({style:e,class:t,...n})=>({style:In(e)?TC(e):Cp(e),className:t,...n}),kC=e=>o.jsx("circle",{...Bn(e)}),EC=e=>o.jsx("ellipse",{...Bn(e)}),LC=e=>o.jsx("line",{...Bn(e)}),C3=e=>o.jsx("path",{...Bn(e)}),NC=e=>o.jsx("polygon",{...Bn(e)}),RC=e=>o.jsx("polyline",{...Bn(e)}),OC=e=>o.jsx("rect",{...Bn(e)}),DC=({svg:e,...t})=>o.jsx("g",{dangerouslySetInnerHTML:{__html:e},...Bn(t)}),MC=({items:e,...t})=>o.jsx("g",{...Bn(t),children:e.map((n,r)=>o.jsx(ti,{body:n},r))}),AC={array:MC,circle:kC,ellipse:EC,line:LC,path:C3,polygon:NC,polyline:RC,rect:OC,svg:DC},ti=({path:e,body:t,...n})=>{if(e)return o.jsx(C3,{d:e,...n});if(In(t))return o.jsx("g",{dangerouslySetInnerHTML:{__html:t}});if(Oi(t)){const{element:r,...a}=t,s=AC[r]||Mn(`Invalid element type: ${r} => `,JSON.stringify(t));return o.jsx(s,{...a})}if(vs(t))return t.map((r,a)=>o.jsx(ti,{body:r},a));Mn(`Don't know how to handle body: ${t}`)};function PC({width:e,height:t,transform:n,children:r}){const a=e/2,s=t/2,l=n.x*e/16,i=n.y*t/16,c=n.size/16*(n.flipX?-1:1),u=n.size/16*(n.flipY?-1:1),d=n.rotate;return o.jsx("g",{transform:`translate(${a} ${s})`,children:o.jsx("g",{transform:`translate(${l}, ${i}) scale(${c}, ${u}) rotate(${d} 0 0)`,children:o.jsx("g",{transform:`translate(-${a} -${s})`,children:r})})})}const _c=({onClick:e,minx:t=0,miny:n=0,width:r=xp,height:a=vp,style:s,transform:l,className:i="",debug:c,...u})=>o.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",role:"img","aria-hidden":"true",focusable:"false",viewBox:`${t} ${n} ${r} ${a}`,className:`${i} icon`,style:Cp(s),onClick:e,children:[!!c&&console.log("style: ",s),l?o.jsx(PC,{width:r,height:a,transform:l,children:o.jsx(ti,{...u})}):o.jsx(ti,{...u})]}),$C=({name:e,iconsClass:t="icons",library:n=xs,...r})=>{if(!e)return o.jsx(_c,{..._C(r)});const a=Iu(e);return a.length===1?o.jsx(_c,{...r,...k1(e,n,r)}):o.jsx("div",{className:mC(t,r.className),children:a.map(s=>o.jsx(_c,{...r,...k1(s,n,r)},s))})},kl=pC($C,"Icon"),j3=(e,...t)=>Ei(e)?e(...t):e,IC=e=>e.filter($e).join(" "),BC=e=>Object.entries(e).filter(([,t])=>t).map(([t])=>t),Ne=(...e)=>IC(e.flatMap(t=>gs(t)?BC(t):t)),zC=e=>{if(!e)return null;const[t,n,r,a,s]=e.split("-");return Ne(t,UC(n),HC(r),VC(a),WC(s))},FC=({className:e,size:t,color:n,...r})=>({...r,className:Ne(e,t,zC(n))}),jp=e=>b3(e,"border",t=>`border bdw-${t}`),bp=e=>b3(e,"shadow-1",t=>`shadow-${t}`),Sp=e=>Cs(e,t=>`bdr-${t}`),UC=e=>Cs(e,t=>`fgc-${t}`),HC=e=>Cs(e,t=>`bgc-${t}`),VC=e=>Cs(e,t=>`fgd-${t}`),WC=e=>Cs(e,t=>`bgd-${t}`),Cs=(e,t)=>s3(parseInt(e))?j3(t,e):null,b3=(e,t,n)=>e===!0?t:parseInt(e)?j3(n,e):null,J=e=>o.jsx(kl,{...FC(e)});function E1(e,t,n={}){return $e(t)&&(n[e]=s3(t)?`${t}deg`:t),Object.keys(n).length?n:null}const ZC=({icon:e,iconClass:t,iconLeft:n,iconLeftClass:r="on-left",iconLeftRotate:a,iconRight:s,iconRightClass:l="on-right",iconRightRotate:i,text:c,children:u})=>o.jsxs(o.Fragment,{children:[!!e&&o.jsx(kl,{name:e,className:t,fixedWidth:!0}),!!n&&o.jsx(kl,{name:n,className:r,style:E1("--icon-rotate",a),fixedWidth:!0}),c||u,!!s&&o.jsx(kl,{name:s,className:l,style:E1("--icon-rotate",i),fixedWidth:!0})]}),Mi=me(ZC,"WithIcons");lC({github:"path-fill-nostroke:M256,0C115,0 0,115 0,256C0,369 73,465 175,499C188,501 193,493 193,487C193,481 192,460 192,439C128,451 111,423 106,409C103,402 91,379 80,373C71,368 58,356 80,356C100,356 114,374 119,382C142,421 179,410 194,403C196,387 203,375 210,369C153,363 93,340 93,243C93,215 103,192 120,174C117,167 108,141 122,106C122,106 144,99 193,132C213,126 235,124 257,124C278,124 300,126 321,132C370,99 391,106 391,106C405,141 396,167 394,174C410,192 420,214 420,243C420,341 360,363 303,369C312,377 320,392 320,416C320,451 320,478 320,487C320,493 325,501 338,499C439,465 512,369 512,256C512,115 397,0 256,0Z"});const KC=({dismissable:e,dismiss:t,revealable:n,isRevealed:r,openIcon:a="angle-down",closedIcon:s="angle-left",dismissIcon:l="cross"})=>o.jsxs("div",{className:"on-right",children:[!!e&&o.jsx(J,{name:l,fixedWidth:!0,className:"dismiss",onClick:()=>t(!0)}),!!n&&o.jsx(J,{name:r?a:s,fixedWidth:!0,className:"reveal"})]}),S3=me(KC,"AlertControls"),GC=({headline:e,headIcon:t,toggle:n,revealable:r=!1,controlProps:a,Controls:s=S3})=>o.jsxs("div",{className:"headline flex space",onClick:r?n:null,children:[o.jsxs("div",{children:[!!t&&o.jsx(J,{name:t,fixedWidth:!0,className:"on-left"}),e]}),o.jsx(s,{...a})]}),YC=me(GC,"AlertHeadline"),XC=({title:e,text:t,children:n})=>o.jsxs(o.Fragment,{children:[e&&o.jsx("h3",{children:e}),t?o.jsx("p",{children:t}):n]}),w3=me(XC,"AlertContent"),QC=({icon:e,Content:t=w3,...n})=>o.jsxs("div",{className:"side-icon",children:[o.jsx(J,{name:e}),o.jsx("div",{className:"wide",children:o.jsx(t,{...n})})]}),qC=me(QC,"AlertIcon"),Ai=e=>Xr(e)||mp(e)||!e.separator&&!e.heading&&!e.disabled;function JC(e,t=Ai){const n=e.findIndex(t);return n<0?null:n}function ej(e,t=Ai){for(let n=e.length-1;n>=0;n--)if(t(e[n]))return n;return null}function tj(e,t,n=Ai){for(let r=1;r<e.length;r++){const a=(t+r)%e.length;if(n(e[a]))return a}return null}function nj(e,t,n=Ai){for(let r=1;r<e.length;r++){const a=(t+e.length-r)%e.length;if(n(e[a]))return a}return null}const _3="",T3="ArrowDown",k3="ArrowUp",E3="Enter",rj=" ",L3="Escape",ni=e=>{const t=`HINT: define ${e}() to render this value`;return n=>Xr(n)||mp(n)?n:gs(n)?n.text??n.label??n.name??t:t},oj=e=>Xr(e)||mp(e)?e:o.jsx(Mi,{...e}),N3=(e,t)=>{if(!e||!t)return;const n=t.offsetTop,r=n+t.offsetHeight,a=e.scrollTop,s=a+e.offsetHeight;n<a?e.scrollTo({top:n}):r>s&&e.scrollTo({top:a+(r-s)})},zn=({title:e,headline:t,headIcon:n,type:r,size:a,color:s,stripe:l,border:i,radius:c,shadow:u,className:d,text:p,children:m,onDismiss:y,icon:b,dismissable:j=!1,revealable:_=!1,revealed:x=!1,openIcon:f,closedIcon:h,dismissIcon:C,Headline:S=YC,Controls:g=S3,Content:w=w3,Icon:k=qC})=>{const[E,O]=v.useState(_?x:!0),[M,F]=v.useState(!1),G=Ne("alert",r,a,s,d,{revealable:_,dismissable:j,stripe:l},E?"revealed":null,bp(u),jp(i),Sp(c)),q=()=>O(B=>!B),fe={dismissable:j,revealable:_,isRevealed:E,dismiss:()=>{F(!0),y&&y()},openIcon:f,closedIcon:h,dismissIcon:C},X={title:e,text:p,children:m},D={...X,icon:b,Content:w},I={headline:t,headIcon:n,toggle:q,revealable:_,controlProps:fe,Controls:g};return M?null:o.jsxs("div",{className:G,children:[!!t&&o.jsx(S,{...I}),E&&(b?o.jsx(k,{...D}):o.jsx(w,{...X}))]})},ja=me(e=>o.jsx(zn,{...e,type:"info"}),"Info"),ba=me(e=>o.jsx(zn,{...e,type:"success"}),"Success"),Sa=me(e=>o.jsx(zn,{...e,type:"warning"}),"Warning"),wa=me(e=>o.jsx(zn,{...e,type:"error"}),"Error");zn.Info=ja;zn.Success=ba;zn.Warning=Sa;zn.Error=wa;const Q=me(zn,"Alert"),aj=({type:e="button",size:t,color:n,className:r,disabled:a,bright:s,dark:l,outline:i,bare:c,shaded:u,shadow:d,border:p,radius:m,label:y,tooltip:b,tabIndex:j=0,icon:_,iconClass:x,iconLeft:f,iconLeftClass:h,iconRight:C,iconRightClass:S,text:g,children:w,Content:k=Mi,...E})=>{const O=Ne(t,n,r,{bright:s,dark:l,outline:i,bare:c,shaded:u,icon:_},bp(d),jp(p),Sp(m)),M={icon:_,iconClass:x,iconLeft:f,iconLeftClass:h,iconRight:C,iconRightClass:S,text:g,children:w};return o.jsx("button",{className:O,"aria-label":y,tabIndex:j,type:e,disabled:a,"aria-disabled":a,"data-tooltip":b,...E,children:o.jsx(k,{...M})})},A=me(aj,"Button"),sj=({buttons:e,children:t,className:n="buttons",buttonClass:r,Button:a=A,...s})=>o.jsx("div",{className:n,children:e?e.map((l,i)=>o.jsx(a,{className:r,...s,...l},i)):t}),Qr=me(sj,"Buttons"),lj=({className:e,disabled:t,children:n,ref:r})=>o.jsx("label",{className:Ne(e,{disabled:t}),ref:r,children:n}),ij=me(lj,"CheckboxLabel"),cj=({disabled:e=!1,tabIndex:t=0,onChange:n=ut,ref:r,...a})=>o.jsx("input",{type:"checkbox",ref:r,"aria-disabled":e,tabIndex:e?-1:t,onChange:s=>n(s.target.checked),...a}),uj=me(cj,"CheckboxInput"),dj=({text:e,className:t="checkbox",ref:n,inputRef:r,checked:a,checkedText:s=e,uncheckedText:l=e,inputClass:i,Label:c=ij,Input:u=uj,...d})=>o.jsxs(c,{className:t,ref:n,checked:a,...d,children:[o.jsx(u,{className:i,ref:r,checked:a,...d}),a?s:l]}),Fn=me(dj,"Checkbox"),pj=({checked:e=!1}={})=>{const[t,n]=v.useState(e);return{isChecked:t,setChecked:n,check:()=>n(!0),uncheck:()=>n(!1)}},fj=({checked:e=!1,onChange:t,...n})=>{const{isChecked:r,setChecked:a}=pj({checked:e}),s=l=>{a(l),t&&t(l)};return o.jsx(Fn,{checked:r,onChange:s,...n})},jr=({visible:e=!1}={})=>{const[t,n]=v.useState(e);return{isVisible:t,setVisible:n,show:()=>n(!0),hide:()=>n(!1)}},hj=({initiallyRevealed:e=!1,open:t=e,confirmIcon:n="check",confirmText:r="Confirm",confirmColor:a="red",confirmClass:s,cancelIcon:l="cross",cancelText:i="Cancel",cancelColor:c="grey",cancelClass:u,confirm:d={iconRight:n,text:r,color:a,className:s},cancel:p={iconLeft:l,text:i,color:c,className:u},buttonsClass:m,className:y=m,buttonClass:b,onClick:j=()=>window.alert("No confirm action defined"),..._})=>{const{isVisible:x,hide:f,show:h}=jr({visible:t}),S={iconRight:n,text:r,color:a,className:s,...d,onClick:w=>{w.preventDefault(),f(),j()}},g={iconLeft:l,text:i,color:c,className:u,outline:!0,...p,onClick:f};return o.jsx(Qr,{className:y,buttonClass:b,buttons:x?[g,S]:[{..._,onClick:h}]})},jn=me(hj,"Confirm");var mj=Object.defineProperty,gj=(e,t,n)=>t in e?mj(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Tc=(e,t,n)=>(gj(e,typeof t!="symbol"?t+"":t,n),n);const qr=(e,t={})=>{const n=ee.createContext(t);return{Context:n,Provider:r=>o.jsx(e,{...r,render:a=>o.jsx(n.Provider,{value:a,children:r.children})}),Consumer:r=>a=>o.jsx(n.Consumer,{children:s=>o.jsx(r,{...s,...a})}),Use:()=>ee.useContext(n)}};function xj(e={},t={},n={}){return Object.entries(t).reduce((r,[a,s])=>{const l=n[s];return l!==null&&typeof l<"u"&&(r[a]=l),r},{...e})}function vj(e,t=[]){return(typeof t=="string"?t.split(/,\s*|\s+/):t).reduce((n,r)=>{const a=e[r]||Cj(`Cannot expose non-existent action method: ${r}`);return n[r]=a.bind(e),n},{})}function yj(e,t){const n=e.debug??t.debug,r=L1(e.debugPrefix??t.debugPrefix,e),a=L1(e.debugColor??t.debugColor,e);return n?r?(s,...l)=>console.log(`%c${r}%c${s}`,`color: ${a}`,"color:black",...l):console.log.bind(console):()=>{}}function L1(e,t){return typeof e=="function"?e(t):e}function Cj(...e){throw new Error(e.join(""))}class Ma extends ee.Component{constructor(t){super(t);const n=this.constructor;this.debug=yj(t,n),this.state=xj(n.initialState,n.initialProps,t),this.actions=vj(this,n.actions)}getContext(){return{...this.props,...this.state,...this.actions}}getRenderProps(){return this.getContext()}render(){return this.props.render(this.getRenderProps())}}Tc(Ma,"initialState",{}),Tc(Ma,"initialProps",{}),Tc(Ma,"actions",[]);const N1=e=>{Xr(e)&&(e={field:e});const{field:t}=e;return e.type||(e.type="text"),e.label||(e.label=Fy(t)),e},jj=e=>{if(Xr(e))return Ni(e,N1);if(Ho(e))return e.reduce((t,n)=>{const r=N1(n);return t[r.field]=r,t},{});i3("Invalid columns definition")},bj=e=>Object.keys(e).filter(t=>!e[t].hidden),Sj=({value:e,search:t})=>$e(e)?e.toString()===t.toString():!1,ca=({value:e,search:t})=>{const n=t.toLowerCase().split(/\s+/);if($e(e)){const r=e.toString().toLowerCase();return n.every(a=>r.indexOf(a)>-1)}else return!1},wj=({value:e,search:t})=>$e(e)?parseInt(e)===parseInt(t):!1,_j=({value:e,search:t})=>$e(e)?parseFloat(e)===parseFloat(t):!1,Tj=({value:e=!1,search:t})=>{const n=parseInt(t)!==0;return e===n},R1={string:ca,text:ca,number:ca,price:ca,pounds:ca,select:Sj,boolean:Tj,integer:wj,float:_j},kj=(e,t,n)=>{const r=Object.keys(n);return r.length===0?e:e.filter(a=>r.every(s=>{const l=n[s],i=t[s],c=i.field||s,u=a[c],d=i.filterType||i.type,p=i.filter||R1[d]||R1.text;return $e(l)&&l.length?p({row:a,field:c,value:u,search:l}):!0}))},Ej=(e,t=1,n=e.length)=>{const r=e.length,a=Math.ceil(r/n);t=Math.min(t,a);const s=t-1,l=n*s,i=Math.min(l+n-1,r-1),c=e.slice(l,i+1);return{pageSize:n,pages:a,page:s,pageNo:t,total:r,firstIndex:l,lastIndex:i,firstPage:1,lastPage:a,thisSize:c.length,from:l+1,to:i+1,all:l===i,one:r===1,none:r===0,rows:c}},O1={string:C1,text:C1,number:wc,price:wc,pounds:wc,integer:y1,id:y1},Lj=(e,t,n,r)=>{if(!n)return e;const a=t[n],s=a.sort,l=a.type||"text",i=Ei(s)?s:(O1[l]||O1.text)(n);return e.sort(r?Vy(i):i)},Nj=({render:e,rows:t=[],...n})=>{const r=v.useMemo(()=>jj(n.columns),[n.columns]),[a,s]=v.useState(n.pageNo??1),[l,i]=v.useState(n.pageSize??10),[c,u]=v.useState(!1),[d,p]=v.useState({}),[m,y]=v.useState(n.sortColumn),[b,j]=v.useState(n.sortReverse??!1),[_,x]=v.useState(bj(r)),[f,h]=v.useState(!1),C=()=>h(!0),S=()=>h(!1),g=M=>{m===M?j(F=>!F):(y(M),j(!1))},w=M=>{M.preventDefault(),M.stopPropagation(),u(F=>!F)},k=(M,F)=>{p(G=>{const q={...G};return $e(F)&&F.length?q[M]=F:delete q[M],q}),s(1)},E=M=>x(F=>{const G=Ni(F);return console.log("visible: ",F),console.log("isVisible: ",G),G[M]?F.filter(q=>q!==M):Object.keys(r).filter(q=>q===M||G[q])}),O=v.useMemo(()=>Ej(Lj(kj(t,r,d),r,m,b),a,l),[t,r,d,m,b,a,l]);return e({...n,rows:t,columns:r,page:O,pageNo:a,setPageNo:s,pageSize:l,setPageSize:i,showFilters:c,toggleFilters:w,filters:d,setFilter:k,sortColumn:m,setSortColumn:y,sortReverse:b,setSortReverse:j,toggleSortColumn:g,visibleColumns:_,setVisibleColumns:x,toggleVisibleColumn:E,controlsVisible:f,showControls:C,hideControls:S})},Xe=qr(Nj),Rj=({page:e,summaryClass:t="small"})=>o.jsxs("div",{className:t,children:["Page ",e.pageNo," of ",e.lastPage,". "," ",e.none?"No rows.":e.one?"One row.":e.all?`All ${al(e.total)} rows.`:`Rows ${al(e.from)} to ${al(e.to)} of ${al(e.total)}.`]}),Oj=Xe.Consumer(Rj),D1={isOpen:!1,cursor:void 0,selected:void 0};class Aa extends Ma{componentDidMount(){this.mounted=!0,this.props.onLoad(this)}componentWillUnmount(){this.mounted=!1,this.props.onUnload(this)}onMouseEnter(){this.debug("onMouseEnter()"),this.setState({hasHover:!0},this.props.openOnHover?()=>{this.open(),this.focusTrigger()}:null)}onMouseLeave(){this.debug("onMouseLeave()"),this.setState({hasHover:!1},this.props.openOnHover?()=>this.closeSoon():null)}onFocus(){this.debug("onFocus()"),this.setState({hasFocus:!0},this.props.onFocus)}onBlur(){this.debug("onBlur()"),this.setState({hasFocus:!1},this.props.onBlur),this.closeSoon(!0)}onClick(){this.debug("onClick()"),this.state.isOpen?this.close():this.open()}open(t=this.cursorFirstIndex()){this.debug(`open(${t})`),this.setState({isOpen:!0,cursor:t},this.props.onOpen)}close(){this.debug("close()"),this.setState(D1,this.props.onClose)}closeSoon(t=!1){this.debug("closeSoon()"),Ri(this.props.closeDelay).then(()=>{t||!this.state.hasHover?(console.log("closing"),this.close()):console.log(`NOT closing force:${t} hasHover:${this.state.hasHover}`)})}onKeyDown(t){switch(this.debug(`onKeyDown(${t.key})`),t.key){case T3:this.state.isOpen?this.setCursor(this.cursorNextIndex()):this.open(this.cursorFirstIndex());break;case k3:this.state.isOpen?this.setCursor(this.cursorPrevIndex()):this.open(this.cursorLastIndex());break;case E3:case rj:this.state.isOpen?this.selectCursor():this.open(this.cursorFirstIndex());break;case L3:this.close();break;default:console.log(`ignored key ${t.key}`);return}t.preventDefault()}menuOptions(){return this.props.options}cursorFirstIndex(){return JC(this.menuOptions())}cursorLastIndex(){return ej(this.menuOptions())}cursorNextIndex(){return tj(this.menuOptions(),this.state.cursor)}cursorPrevIndex(){return nj(this.menuOptions(),this.state.cursor)}setCursor(t){this.debug(`setCursor(${t})`),this.setState({cursor:t})}selectCursor(){this.debug("selectCursor()");const{cursor:t}=this.state,{options:n}=this.props;if(n&&n.length&&$e(t)){const r=n[t];this.debug(`selectCursor() ${t} =>`,r),this.selectOption(r)}else this.debug("Not selecting: cursor out of range")}selectOption(t){this.debug("selectOption()",t),this.setState(this.selectState(t),()=>this.props.onSelect(t)),this.props.closeOnSelect?(console.log("closeOnSelect is set, closing"),this.closeSoon(!0)):console.log("closeOnSelect is not set, NOT closing")}selectState(t){return{selected:t}}triggerRef(t){this._triggerRef=t}focusTrigger(){this._triggerRef?(this.debug("focussing trigger"),this._triggerRef.focus()):this.debug("no trigger to focus")}menuRef(t){this._menuRef=t}activeRef(t){N3(this._menuRef,t)}}De(Aa,"debug",!0),De(Aa,"defaultProps",{options:[],openOnHover:!1,closeDelay:300,onLoad:ut,onUnload:ut,onFocus:ut,onBlur:ut,onClick:ut,onOpen:ut,onClose:ut,onSelect:ut,closeOnSelect:!0}),De(Aa,"initialState",{...D1});const qn=class qn extends Aa{};De(qn,"debug",!1),De(qn,"debugPrefix","Dropdown > "),De(qn,"debugColor","MediumVioletRed"),De(qn,"defaultProps",{...qn.defaultProps,options:[],displayOption:oj}),De(qn,"actions",["onMouseEnter","onMouseLeave","onFocus","onBlur","onClick","onKeyDown","open","close","setCursor","selectCursor","selectOption","triggerRef","menuRef","activeRef"]);let zu=qn;const js=qr(zu),Dj=({triggerClass:e="trigger",triggerRef:t,onMouseEnter:n,onMouseLeave:r,onKeyDown:a,onFocus:s,onBlur:l,onClick:i,...c})=>o.jsx("div",{className:e,onClick:i,onMouseEnter:n,onMouseLeave:r,onKeyDown:a,onFocus:s,onBlur:l,tabIndex:0,ref:t,children:o.jsx(Mi,{...Hy(c,/^(icon|text)/)})}),Mj=js.Consumer(Dj),Aj=({option:e,active:t,activeRef:n,selected:r,onClick:a,onMouseEnter:s,optionClass:l="item no-hover",activeClass:i="active",selectedClass:c="selected",disabledClass:u="disabled",displayOption:d})=>o.jsx("div",{className:Ne(l,e.className,t?i:null,r?c:null,e.disabled?u:null),onMouseEnter:s,onClick:a,ref:t?n:null,"aria-disabled":e.disabled,children:d(e)}),Pj=js.Consumer(Aj),$j=({option:e,separatorClass:t="separator"})=>o.jsx("div",{className:Ne(t,e.className)}),Ij=({option:e,optionClass:t="item no-hover",headingClass:n="heading"})=>o.jsx("h4",{className:Ne(n,t,e.className),children:e.heading}),Bj=({options:e=[],menuRef:t,menuClass:n="menu border bdr-1",cursor:r,selected:a,selectOption:s,setCursor:l,onMouseEnter:i,onMouseLeave:c,Option:u=Pj,Separator:d=$j,Heading:p=Ij})=>o.jsx("div",{className:n,ref:t,onMouseEnter:i,onMouseLeave:c,children:e.map((m,y)=>m.separator?o.jsx(d,{option:m},y):m.heading?o.jsx(p,{option:m},y):o.jsx(u,{option:m,active:$e(r)&&e[r]===m,selected:a===m,onClick:()=>s(m),onMouseEnter:()=>l(y)},m.id??m.value??y))}),zj=js.Consumer(Bj),Fj=({className:e="dropdown",openClass:t="open",closedClass:n="closed",isOpen:r,right:a,size:s,wide:l,Trigger:i=Mj,Menu:c=zj})=>o.jsxs("div",{className:Ne(e,s,r?t:n,{right:a,wide:l}),children:[o.jsx(i,{}),r&&o.jsx(c,{})]}),Uj=js.Consumer(Fj),Hj=({Content:e=Uj,...t})=>o.jsx(js.Provider,{...t,children:o.jsx(e,{})}),at=me(Hj,"Dropdown"),Vj=({setPageSize:e,pageSizes:t=[10,25,50,100,250,500,1e3]})=>o.jsx("div",{className:"pagesize",children:o.jsx(at,{right:!0,iconRight:"angle-down",text:"Page Size",size:"small",options:t.map(n=>({n,text:`${n} per page`})),onSelect:n=>e(n.n)})}),R3=Xe.Consumer(Vj),Wj=({columns:e,cursor:t,visibleColumns:n,toggleVisibleColumn:r,menuRef:a,menuClass:s="columns menu content border bdr-1",onMouseEnter:l,onMouseLeave:i})=>{const c=Ni(n);return o.jsx("div",{className:s,ref:a,onMouseEnter:l,onMouseLeave:i,children:Object.values(e).map(u=>o.jsxs("div",{className:"item",onClick:d=>{r(u.field),d.stopPropagation()},children:[o.jsx("input",{type:"checkbox",className:"no-focus",checked:c[u.field]||!1,onClick:d=>{r(u.field),d.stopPropagation()}}),o.jsx("span",{className:"mar-l-2",children:u.label})]},u.field))})},Zj=Xe.Consumer(Wj),Kj=({setColumns:e})=>o.jsx("div",{className:"columns",children:o.jsx(at,{right:!0,iconRight:"angle-down",text:"Columns",size:"small",Menu:Zj,closeOnSelect:!1,debug:!0})}),Gj=Xe.Consumer(Kj),Yj=({headerClass:e,Summary:t=Oj,PageSize:n=R3,Columns:r=Gj})=>o.jsx("header",{className:e,children:o.jsxs("div",{className:"flex space middle",children:[o.jsx("div",{children:o.jsx(t,{})}),o.jsxs("div",{className:"flex",children:[o.jsx(r,{}),o.jsx(n,{})]})]})}),Xj=Xe.Consumer(Yj),Qj=({column:e,name:t,value:n,cellClass:r,sortColumn:a,sortingClass:s="sorting"})=>{const l=a===t,i=Ne(r,e.className,l?s:null,e.right?"text-right":null);return o.jsx("td",{className:i,children:n})},qj=Xe.Consumer(Qj),Jj=({row:e,columns:t,visibleColumns:n,Cell:r=qj})=>o.jsx("tr",{children:n.map(a=>{const s=t[a],l=s.field??a,i=e[l];return o.jsx(r,{row:e,name:a,field:l,column:s,value:i},a)})}),eb=Xe.Consumer(Jj),tb=({page:e,Row:t=eb})=>o.jsx("tbody",{children:e.rows.map((n,r)=>o.jsx(t,{row:n},n.id??r))}),nb=Xe.Consumer(tb),rb=({name:e,column:t,sortColumn:n,sortReverse:r,toggleSortColumn:a,sortUpIcon:s="arrow-up",sortDownIcon:l="arrow-down",unsortedIcon:i="arrows",sortIconClass:c="sort-icon",sortingClass:u="sorting",showFilters:d,toggleFilters:p,filters:m,filteringClass:y="filtering",filterIcon:b="filter",filteringIcon:j="filter-solid",filterIconClass:_="filter-icon",headingClass:x="heading",rightClass:f="right"})=>{const h=e===n,C=h&&r,S=$e(m[e]);return o.jsx("th",{className:Ne(x,t.right?f:null,d?y:null,S?y:null,h?u:null),onClick:()=>a(e),children:o.jsxs("div",{className:"flex space middle",children:[o.jsx("span",{className:"label",children:t.label}),o.jsxs("div",{className:"flex gap-1",children:[o.jsx(J,{className:_,name:S?j:b,onClick:p}),o.jsx(J,{className:c,name:h?C?s:l:i})]})]})})},ob=Xe.Consumer(rb),ab=({columns:e,headingsClass:t="headings",visibleColumns:n,Heading:r=ob})=>o.jsx("thead",{children:o.jsx("tr",{className:t,children:n.map(a=>o.jsx(r,{name:a,column:e[a]},a))})}),sb=Xe.Consumer(ab),lb=({name:e,filters:t,setFilter:n,filterClass:r="filter",filteringClass:a="filtering",clearFilterIcon:s="cross"})=>o.jsx("th",{className:Ne(r,$e(t[e])?a:null),children:o.jsxs("div",{className:"flex space middle gap-1",children:[o.jsx("input",{type:"text",value:t[e]??"",onChange:l=>n(e,l.target.value)}),o.jsx(J,{name:s,onClick:()=>n(e,null)})]})}),ib=Xe.Consumer(lb),cb=({columns:e,filtersClass:t="filters",visibleColumns:n,Filter:r=ib})=>o.jsx("thead",{children:o.jsx("tr",{className:t,children:n.map(a=>o.jsx(r,{name:a,column:e[a]},a))})}),ub=Xe.Consumer(cb),db=({tableClass:e="celled striped table",selectableClass:t="selectable",scrollX:n,rowClick:r,showFilters:a,Headings:s=sb,Filters:l=ub,Rows:i=nb})=>o.jsxs("table",{className:Ne(e,n?"nowrap":"wide",{[t]:r}),children:[o.jsx(s,{}),a&&o.jsx(l,{}),o.jsx(i,{})]}),pb=Xe.Consumer(db),fb=({scrollX:e,Table:t=pb})=>o.jsx("div",{className:e?"scroll-x":"",children:o.jsx(t,{})}),hb=Xe.Consumer(fb),mb=({page:e=0,pages:t,buttonClass:n="outline",pageClass:r=n,currentPageClass:a="solid",render:s,...l})=>{const u=t-1,d=t,p=e+1,m=e>0?e-1:null,y=$e(m)?m+1:null,b=e<u?e+1:null,j=$e(b)?b+1:null;return s({page:e,pageNo:p,firstPage:0,firstPageNo:1,lastPage:u,lastPageNo:d,pages:t,prevPage:m,prevPageNo:y,nextPage:b,nextPageNo:j,buttonClass:n,pageClass:r,currentPageClass:a,...l})},br=qr(mb),gb=br.Use,xb=({prevPage:e,setPage:t,buttonClass:n,prevClass:r=n,prevIcon:a="arrow-left"})=>o.jsx(A,{className:r,icon:a,onClick:()=>t(e),disabled:Li(e)}),vb=br.Consumer(xb),yb=({nextPage:e,setPage:t,buttonClass:n,nextClass:r=n,nextIcon:a="arrow-right"})=>o.jsx(A,{className:r,icon:a,onClick:()=>t(e),disabled:!e}),Cb=br.Consumer(yb),jb=({pageNo:e,text:t=e,buttonClass:n,className:r=n,onClick:a})=>o.jsx(A,{text:t,className:r,onClick:a}),bb=br.Consumer(jb),Sb=o.jsx(o.Fragment,{children:"…"}),wb=({pageSeparatorClass:e="separator",pageSeparator:t=Sb})=>o.jsx("div",{className:e,children:t}),_b=br.Consumer(wb),Tb=({page:e,pageNo:t,firstPage:n,firstPageNo:r,prevPage:a,prevPageNo:s,nextPage:l,nextPageNo:i,lastPage:c,lastPageNo:u,setPage:d,pagesClass:p="pages",buttonClass:m,pageClass:y=m,currentPageClass:b="brand",showFirstLast:j=!0,Separator:_=_b,Page:x=bb})=>o.jsxs("div",{className:p,children:[j&&a>n&&o.jsxs(o.Fragment,{children:[o.jsx(x,{page:n,pageNo:r,className:y,onClick:()=>d(n)}),a>n+1&&o.jsx(_,{})]}),$e(a)&&o.jsx(x,{page:a,pageNo:s,className:y,onClick:()=>d(a)}),o.jsx(x,{page:e,pageNo:t,className:b,current:!0,disabled:!0}),$e(l)&&o.jsx(x,{page:l,pageNo:i,className:y,onClick:()=>d(l)}),j&&l&&l<c&&o.jsxs(o.Fragment,{children:[l<c-1&&o.jsx(_,{}),o.jsx(x,{page:c,pageNo:u,className:y,onClick:()=>d(c)})]})]}),kb=br.Consumer(Tb),Eb=({className:e="pager",size:t,color:n,Previous:r=vb,Next:a=Cb,Pages:s=kb})=>o.jsxs("div",{className:Ne(e,t,n),children:[o.jsx(r,{}),o.jsx(s,{}),o.jsx(a,{})]}),Lb=br.Consumer(Eb),Nb=({Content:e=Lb,...t})=>o.jsx(br.Provider,{...t,children:o.jsx(e,{})}),Vt=me(Nb,"Pager"),Rb=({footerClass:e,pager:t={},page:n,setPageNo:r})=>o.jsx("footer",{className:e,children:o.jsx(Vt,{page:n.page,pages:n.pages,setPage:a=>r(a+1),...t})}),Ob=Xe.Consumer(Rb),Db=({sortColumn:e,setSortColumn:t,sortReverse:n,setSortReverse:r,columns:a})=>o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Sort By"}),o.jsx(bs,{wide:!0,value:e,options:Object.entries(a).map(([s,{label:l}])=>({id:s,label:l})),onSelect:s=>t(s.id)})]}),o.jsx("div",{className:"field pad-t-label",children:o.jsx(Fn,{text:"Descending",checked:n,onChange:r,disabled:Li(e)})})]}),Mb=Xe.Consumer(Db),Ab=({controlsVisible:e,hideControls:t})=>o.jsxs(cn,{open:e,close:t,children:[o.jsx("header",{children:o.jsx("h3",{children:"Data Table Controls"})}),o.jsxs("div",{className:"grid-3 gap-4",children:[o.jsx(R3,{}),o.jsx(Mb,{})]}),o.jsx("footer",{className:"text-right",children:o.jsx(A,{text:"OK",onClick:t})})]}),Pb=Xe.Consumer(Ab),$b=({color:e,className:t="datatable",Header:n=Xj,Body:r=hb,Footer:a=Ob,Controls:s=Pb})=>o.jsxs("section",{className:Ne(t,e),children:[o.jsx(n,{}),o.jsx(r,{}),o.jsx(a,{}),o.jsx(s,{})]}),Ib=Xe.Consumer($b),Bb=({Content:e=Ib,...t})=>o.jsx(Xe.Provider,{...t,children:o.jsx(e,{})}),zb=me(Bb,"Datatable"),Fb=({summary:e,summaryClass:t})=>o.jsx("summary",{className:t,children:e}),Ub=({content:e,children:t,contentClass:n})=>o.jsx("div",{className:n,children:e||t}),Hb=({className:e,size:t,color:n,lined:r,border:a,radius:s,shaded:l,shadow:i,open:c,Summary:u=Fb,Content:d=Ub,...p})=>o.jsxs("details",{className:Ne(e,n,jp(a),Sp(s),bp(i),{size:t,color:n,lined:r,shaded:l}),open:c,children:[o.jsx(u,{...p}),o.jsx(d,{...p})]}),Ye=me(Hb,"Details"),Vb=({close:e,icon:t="cross",className:n="close"})=>o.jsx("div",{className:n,onClick:e,children:o.jsx(J,{name:t})}),Wb=me(Vb,"ModalClose"),Zb=({title:e,header:t})=>e||t?o.jsxs("header",{children:[!!e&&o.jsx("h3",{children:e}),t]}):null,Kb=me(Zb,"ModalHeader"),Gb=({footer:e})=>!!e&&o.jsx("footer",{children:e}),Yb=me(Gb,"ModalFooter"),Xb=({text:e,children:t,Header:n=Kb,Footer:r=Yb,...a})=>o.jsxs("article",{children:[o.jsx(n,{...a}),e||t,o.jsx(r,{...a})]}),Qb=me(Xb,"ModalContent"),qb=({ref:e,open:t,close:n,className:r,closeClass:a="close",closeIcon:s="cross",Close:l=Wb,Content:i=Qb,...c})=>(e||(e=v.useRef(null)),v.useEffect(()=>{const{current:u}=e;t?u.showModal():u.close()},[t]),o.jsxs("dialog",{ref:e,className:r,children:[!!n&&o.jsx(l,{close:n,icon:s,className:a}),o.jsx(i,{...c})]})),cn=me(qb,"Modal"),Jb=({open:e=!1}={})=>{const{isVisible:t,show:n,hide:r}=jr({visible:e});return{show:n,hide:r,Modal:a=>o.jsx(cn,{open:t,...a})}},eS=({color:e,className:t,style:n,fixed:r,light:a,dark:s,children:l})=>o.jsx("div",{className:Ne("overlay",t,e,{fixed:r,light:a,dark:s}),style:n,children:l}),Vo=me(eS,"Overlay"),tS=({open:e=!1}={})=>{const{isVisible:t,show:n,hide:r}=jr({visible:e});return{show:n,hide:r,Overlay:a=>t&&o.jsx(Vo,{...a})}},nS=({className:e,disabled:t,children:n})=>o.jsx("label",{className:Ne(e,{disabled:t}),children:n}),rS=me(nS,"RadioLabel"),oS=({name:e,option:t,tabIndex:n=0,onChange:r=ut,checked:a})=>o.jsx("input",{type:"radio",name:e,disabled:t.disabled,"aria-disabled":t.disabled,tabIndex:t.disabled?-1:n,onChange:s=>r(s.target.checked),checked:a}),aS=me(oS,"RadioInput"),sS=({name:e,option:t,checked:n,inline:r,border:a,labelClass:s="radio",inputClass:l,Label:i=rS,Input:c=aS,onChange:u})=>o.jsxs(i,{className:Ne(s,t.labelClass,{inline:r,border:a}),disabled:t.disabled,option:t,children:[o.jsx(c,{name:e,option:t,checked:n,className:Ne(l,t.inputClass),onChange:()=>u(t.value)}),t.text??t.label??t.name]}),lS=me(sS,"RadioOption"),iS=({value:e,options:t,className:n="radioset",disabled:r,Option:a=lS,...s})=>o.jsx("div",{className:Ne(n,{disabled:r}),children:t.map(l=>{const i=gs(l)?l:{value:l,label:l};return o.jsx(a,{option:i,checked:i.value===e,value:e,...s},i.value)})}),An=me(iS,"Radio"),kc={searching:!1,search:void 0,results:void 0,result:void 0,cursor:void 0};class Kn extends Ma{constructor(t){super(t);const n=this.inputValue();this.state={...this.state,input:n,searching:!1},this.startSearch=t.debounceTime?Wy(this.search.bind(this),t.debounceTime):this.search.bind(this)}componentDidMount(){this.mounted=!0,this.props.onLoad(this)}componentWillUnmount(){this.setState({results:null}),this.mounted=!1,this.props.onUnload(this)}inputValue(t=this.props.initialValue){return $e(t)?this.props.displayValue(t):_3}onFocus(){this.debug("onFocus()"),this.setState({hasFocus:!0},this.props.onFocus)}onBlur(){this.debug("onBlur()"),this.setState({hasFocus:!1},this.props.onBlur),Ri(500).then(()=>this.clearResults())}onChange(t){const n=t.target.value;this.debug(`input: ${n}`),n.length>=this.props.minLength?this.setState({input:n},this.startSearch):this.setState({input:n,...kc})}onKeyDown(t){this.debug(`onKeyDown(${t.key})`);const n=this.state.cursor;switch(t.key){case T3:this.setCursor(n+1);break;case k3:this.setCursor(n-1);break;case E3:this.selectCursor();break;case L3:this.reset();break;default:return}t.preventDefault()}reset(){this.debug("reset()");const t=this.props.initialValue,n=this.inputValue(t);this.debug(`reset() [input:${n}] from value: `,t),this.setState({value:t,input:n,...kc},this.props.onReset)}search(){const{input:t}=this.state,{minLength:n,onSearch:r}=this.props;if(t.length<n){this.debug(`search() cancelled - input is shorter than ${n}`);return}if(!r){this.debug("search() cancelled - no onSearch() handler defined");return}this.debug("onSearch: ",r),this.setState({search:t,searching:!0},async()=>this.searchResults(await r(t,this)))}searchResults(t){this.debug("searchResults()",t),this.setState({results:t,searching:!1,cursor:0})}selectResult(t){this.debug("selectResult()",t);const n=this.inputValue(t);this.setState({value:t,input:n,...kc},()=>this.props.onSelect(t))}setCursor(t){this.debug(`setCursor(${t})`);const{results:n}=this.state;this.setState({cursor:n&&n.length?(t+n.length)%n.length:void 0})}selectCursor(){const{cursor:t,results:n}=this.state;n&&n.length&&$e(t)&&this.selectResult(n[t])}clearResults(){this.mounted&&this.setState({results:null})}resultsRef(t){this._resultsRef=t}activeRef(t){N3(this._resultsRef,t)}}De(Kn,"debug",!1),De(Kn,"debugPrefix","Search > "),De(Kn,"debugColor","MediumVioletRed"),De(Kn,"defaultProps",{minLength:2,debounceTime:500,onLoad:ut,onUnload:ut,onFocus:ut,onBlur:ut,onReset:ut,onSelect:ut,displayValue:ni("displayValue"),displayResult:ni("displayResult")}),De(Kn,"initialState",{value:"",searching:!1}),De(Kn,"initialProps",{value:"initialValue"}),De(Kn,"actions",["onFocus","onBlur","onChange","onKeyDown","reset","selectResult","setCursor","selectCursor","resultsRef","activeRef"]);const Wo=qr(Kn),cS=({input:e,onFocus:t,onBlur:n,onChange:r,reset:a,placeholder:s="Search",clearIcon:l="cross",searchIcon:i="search",searchingIcon:c="cog.spin",inputsClass:u="inputs round",prefixClass:d="prefix",suffixClass:p="suffix",inputType:m="text",inputClass:y="",disabled:b,searching:j})=>o.jsxs("div",{className:u,children:[o.jsx("div",{className:d,children:o.jsx(J,{name:i})}),o.jsx("input",{type:m,placeholder:s,value:e,onFocus:t,onBlur:n,onChange:r,disabled:b,className:y}),o.jsx("div",{className:p,onClick:a,children:o.jsx(J,{name:j?c:l})})]}),uS=Wo.Consumer(cS),dS=({result:e,active:t,activeRef:n,onClick:r,onMouseEnter:a,displayResult:s,resultClass:l="item",activeClass:i="active"})=>o.jsx("div",{className:Ne(l,{[i]:t}),onClick:r,onMouseEnter:a,ref:t?n:null,children:s(e)}),pS=Wo.Consumer(dS),fS=({noResultsClass:e="none",noResults:t="No results"})=>o.jsx("div",{className:e,children:t}),hS=Wo.Consumer(fS),mS=({results:e,resultsRef:t,cursor:n,selectResult:r,setCursor:a,resultsClass:s="menu border bdr-1",Result:l=pS,NoResults:i=hS})=>o.jsx("div",{className:s,ref:t,children:Ho(e)&&e.length?e.map((c,u)=>o.jsx(l,{result:c,active:$e(n)&&e[n]===c,onClick:()=>r(c),onMouseEnter:()=>a(u)},c.id??c.value??u)):o.jsx(i,{})}),gS=Wo.Consumer(mS),xS=({results:e,onKeyDown:t,Input:n=uS,Results:r=gS})=>o.jsxs("div",{className:"search",onKeyDown:t,children:[o.jsx(n,{}),!!e&&o.jsx(r,{})]}),vS=Wo.Consumer(xS),yS=({Content:e=vS,...t})=>o.jsx(Wo.Provider,{...t,children:o.jsx(e,{})}),Pi=me(yS,"Search"),CS={value:_3,isOpen:!1,cursor:void 0,selected:void 0},mn=class mn extends Aa{constructor(t){super(t);const n=this.inputValue();this.state={...this.state,input:n}}inputValue(t=this.props.initialValue){return $e(t)?this.props.displayValue(t):null}selectState(t){const n=this.inputValue(t);return{value:t,input:n,selected:t}}};De(mn,"debug",!1),De(mn,"debugPrefix","Select > "),De(mn,"debugColor","MediumVioletRed"),De(mn,"defaultProps",{...mn.defaultProps,options:[],displayValue:ni("displayValue"),displayOption:ni("displayOption")}),De(mn,"initialState",{...CS}),De(mn,"initialProps",{value:"initialValue"}),De(mn,"actions",["onFocus","onBlur","onClick","onKeyDown","open","close","setCursor","selectCursor","selectOption","menuRef","activeRef"]);let Fu=mn;const Zo=qr(Fu),jS=({input:e,onFocus:t,onBlur:n,onClick:r,placeholder:a="Select",placeholderClass:s="placeholder",inputsClass:l="inputs",inputClass:i="input",suffixClass:c="suffix",disabled:u})=>o.jsxs("div",{className:l,onClick:r,children:[o.jsx("div",{onFocus:t,onBlur:n,disabled:u,className:i,tabIndex:0,children:$e(e)?o.jsx(o.Fragment,{children:e}):o.jsx("span",{className:s,children:a})}),o.jsx("div",{className:c,children:o.jsx(J,{name:"angle-down"})})]}),bS=Zo.Consumer(jS),SS=({option:e,active:t,activeRef:n,selected:r,onClick:a,onMouseEnter:s,displayOption:l,optionClass:i="item no-hover",activeClass:c="active",selectedClass:u="selected",disabledClass:d="disabled"})=>o.jsx("div",{className:Ne(i,e.className,t?c:null,r?u:null,e.disabled?d:null),onMouseEnter:s,onClick:a,ref:t?n:null,"aria-disabled":e.disabled,children:l(e)}),wS=Zo.Consumer(SS),_S=({noOptionsClass:e="none",noOptions:t="No options"})=>o.jsx("div",{className:e,children:t}),TS=Zo.Consumer(_S),kS=({options:e,menuRef:t,menuClass:n="menu border bdr-1",cursor:r,selected:a,selectOption:s,setCursor:l,Option:i=wS,NoOptions:c=TS})=>o.jsx("div",{className:n,ref:t,children:Ho(e)&&e.length?e.map((u,d)=>o.jsx(i,{option:u,active:$e(r)&&e[r]===u,selected:a===u,onClick:()=>s(u),onMouseEnter:()=>l(d)},u.id??u.value??d)):o.jsx(c,{})}),ES=Zo.Consumer(kS),LS=({onKeyDown:e,isOpen:t,selectClass:n="select",openClass:r="open",closedClass:a="closed",Input:s=bS,Menu:l=ES})=>o.jsxs("div",{className:Ne(n,t?r:a),onKeyDown:e,children:[o.jsx(s,{}),!!t&&o.jsx(l,{})]}),NS=Zo.Consumer(LS),RS=({Content:e=NS,...t})=>o.jsx(Zo.Provider,{...t,children:o.jsx(e,{})}),bs=me(RS,"Select");function OS(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return v.useMemo(()=>r=>{t.forEach(a=>a(r))},t)}const $i=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Ko(e){const t=Object.prototype.toString.call(e);return t==="[object Window]"||t==="[object global]"}function wp(e){return"nodeType"in e}function Ct(e){var t,n;return e?Ko(e)?e:wp(e)&&(t=(n=e.ownerDocument)==null?void 0:n.defaultView)!=null?t:window:window}function _p(e){const{Document:t}=Ct(e);return e instanceof t}function Ss(e){return Ko(e)?!1:e instanceof Ct(e).HTMLElement}function O3(e){return e instanceof Ct(e).SVGElement}function Go(e){return e?Ko(e)?e.document:wp(e)?_p(e)?e:Ss(e)||O3(e)?e.ownerDocument:document:document:document}const Kt=$i?v.useLayoutEffect:v.useEffect;function Ii(e){const t=v.useRef(e);return Kt(()=>{t.current=e}),v.useCallback(function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return t.current==null?void 0:t.current(...r)},[])}function DS(){const e=v.useRef(null),t=v.useCallback((r,a)=>{e.current=setInterval(r,a)},[]),n=v.useCallback(()=>{e.current!==null&&(clearInterval(e.current),e.current=null)},[]);return[t,n]}function os(e,t){t===void 0&&(t=[e]);const n=v.useRef(e);return Kt(()=>{n.current!==e&&(n.current=e)},t),n}function ws(e,t){const n=v.useRef();return v.useMemo(()=>{const r=e(n.current);return n.current=r,r},[...t])}function ri(e){const t=Ii(e),n=v.useRef(null),r=v.useCallback(a=>{a!==n.current&&(t==null||t(a,n.current)),n.current=a},[]);return[n,r]}function oi(e){const t=v.useRef();return v.useEffect(()=>{t.current=e},[e]),t.current}let Ec={};function _s(e,t){return v.useMemo(()=>{if(t)return t;const n=Ec[e]==null?0:Ec[e]+1;return Ec[e]=n,e+"-"+n},[e,t])}function D3(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];return r.reduce((s,l)=>{const i=Object.entries(l);for(const[c,u]of i){const d=s[c];d!=null&&(s[c]=d+e*u)}return s},{...t})}}const Lo=D3(1),as=D3(-1);function MS(e){return"clientX"in e&&"clientY"in e}function Bi(e){if(!e)return!1;const{KeyboardEvent:t}=Ct(e.target);return t&&e instanceof t}function AS(e){if(!e)return!1;const{TouchEvent:t}=Ct(e.target);return t&&e instanceof t}function ai(e){if(AS(e)){if(e.touches&&e.touches.length){const{clientX:t,clientY:n}=e.touches[0];return{x:t,y:n}}else if(e.changedTouches&&e.changedTouches.length){const{clientX:t,clientY:n}=e.changedTouches[0];return{x:t,y:n}}}return MS(e)?{x:e.clientX,y:e.clientY}:null}const mr=Object.freeze({Translate:{toString(e){if(!e)return;const{x:t,y:n}=e;return"translate3d("+(t?Math.round(t):0)+"px, "+(n?Math.round(n):0)+"px, 0)"}},Scale:{toString(e){if(!e)return;const{scaleX:t,scaleY:n}=e;return"scaleX("+t+") scaleY("+n+")"}},Transform:{toString(e){if(e)return[mr.Translate.toString(e),mr.Scale.toString(e)].join(" ")}},Transition:{toString(e){let{property:t,duration:n,easing:r}=e;return t+" "+n+"ms "+r}}}),M1="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function PS(e){return e.matches(M1)?e:e.querySelector(M1)}const $S={display:"none"};function IS(e){let{id:t,value:n}=e;return ee.createElement("div",{id:t,style:$S},n)}function BS(e){let{id:t,announcement:n,ariaLiveType:r="assertive"}=e;const a={position:"fixed",width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"};return ee.createElement("div",{id:t,style:a,role:"status","aria-live":r,"aria-atomic":!0},n)}function zS(){const[e,t]=v.useState("");return{announce:v.useCallback(r=>{r!=null&&t(r)},[]),announcement:e}}const M3=v.createContext(null);function FS(e){const t=v.useContext(M3);v.useEffect(()=>{if(!t)throw new Error("useDndMonitor must be used within a children of <DndContext>");return t(e)},[e,t])}function US(){const[e]=v.useState(()=>new Set),t=v.useCallback(r=>(e.add(r),()=>e.delete(r)),[e]);return[v.useCallback(r=>{let{type:a,event:s}=r;e.forEach(l=>{var i;return(i=l[a])==null?void 0:i.call(l,s)})},[e]),t]}const HS={draggable:`
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `},VS={onDragStart(e){let{active:t}=e;return"Picked up draggable item "+t.id+"."},onDragOver(e){let{active:t,over:n}=e;return n?"Draggable item "+t.id+" was moved over droppable area "+n.id+".":"Draggable item "+t.id+" is no longer over a droppable area."},onDragEnd(e){let{active:t,over:n}=e;return n?"Draggable item "+t.id+" was dropped over droppable area "+n.id:"Draggable item "+t.id+" was dropped."},onDragCancel(e){let{active:t}=e;return"Dragging was cancelled. Draggable item "+t.id+" was dropped."}};function WS(e){let{announcements:t=VS,container:n,hiddenTextDescribedById:r,screenReaderInstructions:a=HS}=e;const{announce:s,announcement:l}=zS(),i=_s("DndLiveRegion"),[c,u]=v.useState(!1);if(v.useEffect(()=>{u(!0)},[]),FS(v.useMemo(()=>({onDragStart(p){let{active:m}=p;s(t.onDragStart({active:m}))},onDragMove(p){let{active:m,over:y}=p;t.onDragMove&&s(t.onDragMove({active:m,over:y}))},onDragOver(p){let{active:m,over:y}=p;s(t.onDragOver({active:m,over:y}))},onDragEnd(p){let{active:m,over:y}=p;s(t.onDragEnd({active:m,over:y}))},onDragCancel(p){let{active:m,over:y}=p;s(t.onDragCancel({active:m,over:y}))}}),[s,t])),!c)return null;const d=ee.createElement(ee.Fragment,null,ee.createElement(IS,{id:r,value:a.draggable}),ee.createElement(BS,{id:i,announcement:l}));return n?_n.createPortal(d,n):d}var Ke;(function(e){e.DragStart="dragStart",e.DragMove="dragMove",e.DragEnd="dragEnd",e.DragCancel="dragCancel",e.DragOver="dragOver",e.RegisterDroppable="registerDroppable",e.SetDroppableDisabled="setDroppableDisabled",e.UnregisterDroppable="unregisterDroppable"})(Ke||(Ke={}));function si(){}function A1(e,t){return v.useMemo(()=>({sensor:e,options:t??{}}),[e,t])}function ZS(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return v.useMemo(()=>[...t].filter(r=>r!=null),[...t])}const ln=Object.freeze({x:0,y:0});function A3(e,t){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function KS(e,t){const n=ai(e);if(!n)return"0 0";const r={x:(n.x-t.left)/t.width*100,y:(n.y-t.top)/t.height*100};return r.x+"% "+r.y+"%"}function P3(e,t){let{data:{value:n}}=e,{data:{value:r}}=t;return n-r}function GS(e,t){let{data:{value:n}}=e,{data:{value:r}}=t;return r-n}function P1(e){let{left:t,top:n,height:r,width:a}=e;return[{x:t,y:n},{x:t+a,y:n},{x:t,y:n+r},{x:t+a,y:n+r}]}function $3(e,t){if(!e||e.length===0)return null;const[n]=e;return t?n[t]:n}function $1(e,t,n){return t===void 0&&(t=e.left),n===void 0&&(n=e.top),{x:t+e.width*.5,y:n+e.height*.5}}const YS=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:r}=e;const a=$1(t,t.left,t.top),s=[];for(const l of r){const{id:i}=l,c=n.get(i);if(c){const u=A3($1(c),a);s.push({id:i,data:{droppableContainer:l,value:u}})}}return s.sort(P3)},XS=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:r}=e;const a=P1(t),s=[];for(const l of r){const{id:i}=l,c=n.get(i);if(c){const u=P1(c),d=a.reduce((m,y,b)=>m+A3(u[b],y),0),p=Number((d/4).toFixed(4));s.push({id:i,data:{droppableContainer:l,value:p}})}}return s.sort(P3)};function QS(e,t){const n=Math.max(t.top,e.top),r=Math.max(t.left,e.left),a=Math.min(t.left+t.width,e.left+e.width),s=Math.min(t.top+t.height,e.top+e.height),l=a-r,i=s-n;if(r<a&&n<s){const c=t.width*t.height,u=e.width*e.height,d=l*i,p=d/(c+u-d);return Number(p.toFixed(4))}return 0}const qS=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:r}=e;const a=[];for(const s of r){const{id:l}=s,i=n.get(l);if(i){const c=QS(i,t);c>0&&a.push({id:l,data:{droppableContainer:s,value:c}})}}return a.sort(GS)};function JS(e,t,n){return{...e,scaleX:t&&n?t.width/n.width:1,scaleY:t&&n?t.height/n.height:1}}function I3(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:ln}function ew(e){return function(n){for(var r=arguments.length,a=new Array(r>1?r-1:0),s=1;s<r;s++)a[s-1]=arguments[s];return a.reduce((l,i)=>({...l,top:l.top+e*i.y,bottom:l.bottom+e*i.y,left:l.left+e*i.x,right:l.right+e*i.x}),{...n})}}const tw=ew(1);function B3(e){if(e.startsWith("matrix3d(")){const t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}else if(e.startsWith("matrix(")){const t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}function nw(e,t,n){const r=B3(t);if(!r)return e;const{scaleX:a,scaleY:s,x:l,y:i}=r,c=e.left-l-(1-a)*parseFloat(n),u=e.top-i-(1-s)*parseFloat(n.slice(n.indexOf(" ")+1)),d=a?e.width/a:e.width,p=s?e.height/s:e.height;return{width:d,height:p,top:u,right:c+d,bottom:u+p,left:c}}const rw={ignoreTransform:!1};function Yo(e,t){t===void 0&&(t=rw);let n=e.getBoundingClientRect();if(t.ignoreTransform){const{transform:u,transformOrigin:d}=Ct(e).getComputedStyle(e);u&&(n=nw(n,u,d))}const{top:r,left:a,width:s,height:l,bottom:i,right:c}=n;return{top:r,left:a,width:s,height:l,bottom:i,right:c}}function I1(e){return Yo(e,{ignoreTransform:!0})}function ow(e){const t=e.innerWidth,n=e.innerHeight;return{top:0,left:0,right:t,bottom:n,width:t,height:n}}function aw(e,t){return t===void 0&&(t=Ct(e).getComputedStyle(e)),t.position==="fixed"}function sw(e,t){t===void 0&&(t=Ct(e).getComputedStyle(e));const n=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some(a=>{const s=t[a];return typeof s=="string"?n.test(s):!1})}function zi(e,t){const n=[];function r(a){if(t!=null&&n.length>=t||!a)return n;if(_p(a)&&a.scrollingElement!=null&&!n.includes(a.scrollingElement))return n.push(a.scrollingElement),n;if(!Ss(a)||O3(a)||n.includes(a))return n;const s=Ct(e).getComputedStyle(a);return a!==e&&sw(a,s)&&n.push(a),aw(a,s)?n:r(a.parentNode)}return e?r(e):n}function z3(e){const[t]=zi(e,1);return t??null}function Lc(e){return!$i||!e?null:Ko(e)?e:wp(e)?_p(e)||e===Go(e).scrollingElement?window:Ss(e)?e:null:null}function F3(e){return Ko(e)?e.scrollX:e.scrollLeft}function U3(e){return Ko(e)?e.scrollY:e.scrollTop}function Uu(e){return{x:F3(e),y:U3(e)}}var et;(function(e){e[e.Forward=1]="Forward",e[e.Backward=-1]="Backward"})(et||(et={}));function H3(e){return!$i||!e?!1:e===document.scrollingElement}function V3(e){const t={x:0,y:0},n=H3(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth},r={x:e.scrollWidth-n.width,y:e.scrollHeight-n.height},a=e.scrollTop<=t.y,s=e.scrollLeft<=t.x,l=e.scrollTop>=r.y,i=e.scrollLeft>=r.x;return{isTop:a,isLeft:s,isBottom:l,isRight:i,maxScroll:r,minScroll:t}}const lw={x:.2,y:.2};function iw(e,t,n,r,a){let{top:s,left:l,right:i,bottom:c}=n;r===void 0&&(r=10),a===void 0&&(a=lw);const{isTop:u,isBottom:d,isLeft:p,isRight:m}=V3(e),y={x:0,y:0},b={x:0,y:0},j={height:t.height*a.y,width:t.width*a.x};return!u&&s<=t.top+j.height?(y.y=et.Backward,b.y=r*Math.abs((t.top+j.height-s)/j.height)):!d&&c>=t.bottom-j.height&&(y.y=et.Forward,b.y=r*Math.abs((t.bottom-j.height-c)/j.height)),!m&&i>=t.right-j.width?(y.x=et.Forward,b.x=r*Math.abs((t.right-j.width-i)/j.width)):!p&&l<=t.left+j.width&&(y.x=et.Backward,b.x=r*Math.abs((t.left+j.width-l)/j.width)),{direction:y,speed:b}}function cw(e){if(e===document.scrollingElement){const{innerWidth:s,innerHeight:l}=window;return{top:0,left:0,right:s,bottom:l,width:s,height:l}}const{top:t,left:n,right:r,bottom:a}=e.getBoundingClientRect();return{top:t,left:n,right:r,bottom:a,width:e.clientWidth,height:e.clientHeight}}function W3(e){return e.reduce((t,n)=>Lo(t,Uu(n)),ln)}function uw(e){return e.reduce((t,n)=>t+F3(n),0)}function dw(e){return e.reduce((t,n)=>t+U3(n),0)}function Z3(e,t){if(t===void 0&&(t=Yo),!e)return;const{top:n,left:r,bottom:a,right:s}=t(e);z3(e)&&(a<=0||s<=0||n>=window.innerHeight||r>=window.innerWidth)&&e.scrollIntoView({block:"center",inline:"center"})}const pw=[["x",["left","right"],uw],["y",["top","bottom"],dw]];class Tp{constructor(t,n){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;const r=zi(n),a=W3(r);this.rect={...t},this.width=t.width,this.height=t.height;for(const[s,l,i]of pw)for(const c of l)Object.defineProperty(this,c,{get:()=>{const u=i(r),d=a[s]-u;return this.rect[c]+d},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}}class Pa{constructor(t){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach(n=>{var r;return(r=this.target)==null?void 0:r.removeEventListener(...n)})},this.target=t}add(t,n,r){var a;(a=this.target)==null||a.addEventListener(t,n,r),this.listeners.push([t,n,r])}}function fw(e){const{EventTarget:t}=Ct(e);return e instanceof t?e:Go(e)}function Nc(e,t){const n=Math.abs(e.x),r=Math.abs(e.y);return typeof t=="number"?Math.sqrt(n**2+r**2)>t:"x"in t&&"y"in t?n>t.x&&r>t.y:"x"in t?n>t.x:"y"in t?r>t.y:!1}var Bt;(function(e){e.Click="click",e.DragStart="dragstart",e.Keydown="keydown",e.ContextMenu="contextmenu",e.Resize="resize",e.SelectionChange="selectionchange",e.VisibilityChange="visibilitychange"})(Bt||(Bt={}));function B1(e){e.preventDefault()}function hw(e){e.stopPropagation()}var de;(function(e){e.Space="Space",e.Down="ArrowDown",e.Right="ArrowRight",e.Left="ArrowLeft",e.Up="ArrowUp",e.Esc="Escape",e.Enter="Enter"})(de||(de={}));const K3={start:[de.Space,de.Enter],cancel:[de.Esc],end:[de.Space,de.Enter]},mw=(e,t)=>{let{currentCoordinates:n}=t;switch(e.code){case de.Right:return{...n,x:n.x+25};case de.Left:return{...n,x:n.x-25};case de.Down:return{...n,y:n.y+25};case de.Up:return{...n,y:n.y-25}}};class kp{constructor(t){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=t;const{event:{target:n}}=t;this.props=t,this.listeners=new Pa(Go(n)),this.windowListeners=new Pa(Ct(n)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(Bt.Resize,this.handleCancel),this.windowListeners.add(Bt.VisibilityChange,this.handleCancel),setTimeout(()=>this.listeners.add(Bt.Keydown,this.handleKeyDown))}handleStart(){const{activeNode:t,onStart:n}=this.props,r=t.node.current;r&&Z3(r),n(ln)}handleKeyDown(t){if(Bi(t)){const{active:n,context:r,options:a}=this.props,{keyboardCodes:s=K3,coordinateGetter:l=mw,scrollBehavior:i="smooth"}=a,{code:c}=t;if(s.end.includes(c)){this.handleEnd(t);return}if(s.cancel.includes(c)){this.handleCancel(t);return}const{collisionRect:u}=r.current,d=u?{x:u.left,y:u.top}:ln;this.referenceCoordinates||(this.referenceCoordinates=d);const p=l(t,{active:n,context:r.current,currentCoordinates:d});if(p){const m=as(p,d),y={x:0,y:0},{scrollableAncestors:b}=r.current;for(const j of b){const _=t.code,{isTop:x,isRight:f,isLeft:h,isBottom:C,maxScroll:S,minScroll:g}=V3(j),w=cw(j),k={x:Math.min(_===de.Right?w.right-w.width/2:w.right,Math.max(_===de.Right?w.left:w.left+w.width/2,p.x)),y:Math.min(_===de.Down?w.bottom-w.height/2:w.bottom,Math.max(_===de.Down?w.top:w.top+w.height/2,p.y))},E=_===de.Right&&!f||_===de.Left&&!h,O=_===de.Down&&!C||_===de.Up&&!x;if(E&&k.x!==p.x){const M=j.scrollLeft+m.x,F=_===de.Right&&M<=S.x||_===de.Left&&M>=g.x;if(F&&!m.y){j.scrollTo({left:M,behavior:i});return}F?y.x=j.scrollLeft-M:y.x=_===de.Right?j.scrollLeft-S.x:j.scrollLeft-g.x,y.x&&j.scrollBy({left:-y.x,behavior:i});break}else if(O&&k.y!==p.y){const M=j.scrollTop+m.y,F=_===de.Down&&M<=S.y||_===de.Up&&M>=g.y;if(F&&!m.x){j.scrollTo({top:M,behavior:i});return}F?y.y=j.scrollTop-M:y.y=_===de.Down?j.scrollTop-S.y:j.scrollTop-g.y,y.y&&j.scrollBy({top:-y.y,behavior:i});break}}this.handleMove(t,Lo(as(p,this.referenceCoordinates),y))}}}handleMove(t,n){const{onMove:r}=this.props;t.preventDefault(),r(n)}handleEnd(t){const{onEnd:n}=this.props;t.preventDefault(),this.detach(),n()}handleCancel(t){const{onCancel:n}=this.props;t.preventDefault(),this.detach(),n()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}}kp.activators=[{eventName:"onKeyDown",handler:(e,t,n)=>{let{keyboardCodes:r=K3,onActivation:a}=t,{active:s}=n;const{code:l}=e.nativeEvent;if(r.start.includes(l)){const i=s.activatorNode.current;return i&&e.target!==i?!1:(e.preventDefault(),a==null||a({event:e.nativeEvent}),!0)}return!1}}];function z1(e){return!!(e&&"distance"in e)}function F1(e){return!!(e&&"delay"in e)}class Ep{constructor(t,n,r){var a;r===void 0&&(r=fw(t.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=t,this.events=n;const{event:s}=t,{target:l}=s;this.props=t,this.events=n,this.document=Go(l),this.documentListeners=new Pa(this.document),this.listeners=new Pa(r),this.windowListeners=new Pa(Ct(l)),this.initialCoordinates=(a=ai(s))!=null?a:ln,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){const{events:t,props:{options:{activationConstraint:n,bypassActivationConstraint:r}}}=this;if(this.listeners.add(t.move.name,this.handleMove,{passive:!1}),this.listeners.add(t.end.name,this.handleEnd),this.windowListeners.add(Bt.Resize,this.handleCancel),this.windowListeners.add(Bt.DragStart,B1),this.windowListeners.add(Bt.VisibilityChange,this.handleCancel),this.windowListeners.add(Bt.ContextMenu,B1),this.documentListeners.add(Bt.Keydown,this.handleKeydown),n){if(r!=null&&r({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(F1(n)){this.timeoutId=setTimeout(this.handleStart,n.delay);return}if(z1(n))return}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),this.timeoutId!==null&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handleStart(){const{initialCoordinates:t}=this,{onStart:n}=this.props;t&&(this.activated=!0,this.documentListeners.add(Bt.Click,hw,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(Bt.SelectionChange,this.removeTextSelection),n(t))}handleMove(t){var n;const{activated:r,initialCoordinates:a,props:s}=this,{onMove:l,options:{activationConstraint:i}}=s;if(!a)return;const c=(n=ai(t))!=null?n:ln,u=as(a,c);if(!r&&i){if(z1(i)){if(i.tolerance!=null&&Nc(u,i.tolerance))return this.handleCancel();if(Nc(u,i.distance))return this.handleStart()}return F1(i)&&Nc(u,i.tolerance)?this.handleCancel():void 0}t.cancelable&&t.preventDefault(),l(c)}handleEnd(){const{onEnd:t}=this.props;this.detach(),t()}handleCancel(){const{onCancel:t}=this.props;this.detach(),t()}handleKeydown(t){t.code===de.Esc&&this.handleCancel()}removeTextSelection(){var t;(t=this.document.getSelection())==null||t.removeAllRanges()}}const gw={move:{name:"pointermove"},end:{name:"pointerup"}};class Lp extends Ep{constructor(t){const{event:n}=t,r=Go(n.target);super(t,gw,r)}}Lp.activators=[{eventName:"onPointerDown",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;return!n.isPrimary||n.button!==0?!1:(r==null||r({event:n}),!0)}}];const xw={move:{name:"mousemove"},end:{name:"mouseup"}};var Hu;(function(e){e[e.RightClick=2]="RightClick"})(Hu||(Hu={}));class vw extends Ep{constructor(t){super(t,xw,Go(t.event.target))}}vw.activators=[{eventName:"onMouseDown",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;return n.button===Hu.RightClick?!1:(r==null||r({event:n}),!0)}}];const Rc={move:{name:"touchmove"},end:{name:"touchend"}};class yw extends Ep{constructor(t){super(t,Rc)}static setup(){return window.addEventListener(Rc.move.name,t,{capture:!1,passive:!1}),function(){window.removeEventListener(Rc.move.name,t)};function t(){}}}yw.activators=[{eventName:"onTouchStart",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;const{touches:a}=n;return a.length>1?!1:(r==null||r({event:n}),!0)}}];var $a;(function(e){e[e.Pointer=0]="Pointer",e[e.DraggableRect=1]="DraggableRect"})($a||($a={}));var li;(function(e){e[e.TreeOrder=0]="TreeOrder",e[e.ReversedTreeOrder=1]="ReversedTreeOrder"})(li||(li={}));function Cw(e){let{acceleration:t,activator:n=$a.Pointer,canScroll:r,draggingRect:a,enabled:s,interval:l=5,order:i=li.TreeOrder,pointerCoordinates:c,scrollableAncestors:u,scrollableAncestorRects:d,delta:p,threshold:m}=e;const y=bw({delta:p,disabled:!s}),[b,j]=DS(),_=v.useRef({x:0,y:0}),x=v.useRef({x:0,y:0}),f=v.useMemo(()=>{switch(n){case $a.Pointer:return c?{top:c.y,bottom:c.y,left:c.x,right:c.x}:null;case $a.DraggableRect:return a}},[n,a,c]),h=v.useRef(null),C=v.useCallback(()=>{const g=h.current;if(!g)return;const w=_.current.x*x.current.x,k=_.current.y*x.current.y;g.scrollBy(w,k)},[]),S=v.useMemo(()=>i===li.TreeOrder?[...u].reverse():u,[i,u]);v.useEffect(()=>{if(!s||!u.length||!f){j();return}for(const g of S){if((r==null?void 0:r(g))===!1)continue;const w=u.indexOf(g),k=d[w];if(!k)continue;const{direction:E,speed:O}=iw(g,k,f,t,m);for(const M of["x","y"])y[M][E[M]]||(O[M]=0,E[M]=0);if(O.x>0||O.y>0){j(),h.current=g,b(C,l),_.current=O,x.current=E;return}}_.current={x:0,y:0},x.current={x:0,y:0},j()},[t,C,r,j,s,l,JSON.stringify(f),JSON.stringify(y),b,u,S,d,JSON.stringify(m)])}const jw={x:{[et.Backward]:!1,[et.Forward]:!1},y:{[et.Backward]:!1,[et.Forward]:!1}};function bw(e){let{delta:t,disabled:n}=e;const r=oi(t);return ws(a=>{if(n||!r||!a)return jw;const s={x:Math.sign(t.x-r.x),y:Math.sign(t.y-r.y)};return{x:{[et.Backward]:a.x[et.Backward]||s.x===-1,[et.Forward]:a.x[et.Forward]||s.x===1},y:{[et.Backward]:a.y[et.Backward]||s.y===-1,[et.Forward]:a.y[et.Forward]||s.y===1}}},[n,t,r])}function Sw(e,t){const n=t!==null?e.get(t):void 0,r=n?n.node.current:null;return ws(a=>{var s;return t===null?null:(s=r??a)!=null?s:null},[r,t])}function ww(e,t){return v.useMemo(()=>e.reduce((n,r)=>{const{sensor:a}=r,s=a.activators.map(l=>({eventName:l.eventName,handler:t(l.handler,r)}));return[...n,...s]},[]),[e,t])}var ss;(function(e){e[e.Always=0]="Always",e[e.BeforeDragging=1]="BeforeDragging",e[e.WhileDragging=2]="WhileDragging"})(ss||(ss={}));var Vu;(function(e){e.Optimized="optimized"})(Vu||(Vu={}));const U1=new Map;function _w(e,t){let{dragging:n,dependencies:r,config:a}=t;const[s,l]=v.useState(null),{frequency:i,measure:c,strategy:u}=a,d=v.useRef(e),p=_(),m=os(p),y=v.useCallback(function(x){x===void 0&&(x=[]),!m.current&&l(f=>f===null?x:f.concat(x.filter(h=>!f.includes(h))))},[m]),b=v.useRef(null),j=ws(x=>{if(p&&!n)return U1;if(!x||x===U1||d.current!==e||s!=null){const f=new Map;for(let h of e){if(!h)continue;if(s&&s.length>0&&!s.includes(h.id)&&h.rect.current){f.set(h.id,h.rect.current);continue}const C=h.node.current,S=C?new Tp(c(C),C):null;h.rect.current=S,S&&f.set(h.id,S)}return f}return x},[e,s,n,p,c]);return v.useEffect(()=>{d.current=e},[e]),v.useEffect(()=>{p||y()},[n,p]),v.useEffect(()=>{s&&s.length>0&&l(null)},[JSON.stringify(s)]),v.useEffect(()=>{p||typeof i!="number"||b.current!==null||(b.current=setTimeout(()=>{y(),b.current=null},i))},[i,p,y,...r]),{droppableRects:j,measureDroppableContainers:y,measuringScheduled:s!=null};function _(){switch(u){case ss.Always:return!1;case ss.BeforeDragging:return n;default:return!n}}}function Np(e,t){return ws(n=>e?n||(typeof t=="function"?t(e):e):null,[t,e])}function Tw(e,t){return Np(e,t)}function kw(e){let{callback:t,disabled:n}=e;const r=Ii(t),a=v.useMemo(()=>{if(n||typeof window>"u"||typeof window.MutationObserver>"u")return;const{MutationObserver:s}=window;return new s(r)},[r,n]);return v.useEffect(()=>()=>a==null?void 0:a.disconnect(),[a]),a}function Fi(e){let{callback:t,disabled:n}=e;const r=Ii(t),a=v.useMemo(()=>{if(n||typeof window>"u"||typeof window.ResizeObserver>"u")return;const{ResizeObserver:s}=window;return new s(r)},[n]);return v.useEffect(()=>()=>a==null?void 0:a.disconnect(),[a]),a}function Ew(e){return new Tp(Yo(e),e)}function H1(e,t,n){t===void 0&&(t=Ew);const[r,a]=v.useReducer(i,null),s=kw({callback(c){if(e)for(const u of c){const{type:d,target:p}=u;if(d==="childList"&&p instanceof HTMLElement&&p.contains(e)){a();break}}}}),l=Fi({callback:a});return Kt(()=>{a(),e?(l==null||l.observe(e),s==null||s.observe(document.body,{childList:!0,subtree:!0})):(l==null||l.disconnect(),s==null||s.disconnect())},[e]),r;function i(c){if(!e)return null;if(e.isConnected===!1){var u;return(u=c??n)!=null?u:null}const d=t(e);return JSON.stringify(c)===JSON.stringify(d)?c:d}}function Lw(e){const t=Np(e);return I3(e,t)}const V1=[];function Nw(e){const t=v.useRef(e),n=ws(r=>e?r&&r!==V1&&e&&t.current&&e.parentNode===t.current.parentNode?r:zi(e):V1,[e]);return v.useEffect(()=>{t.current=e},[e]),n}function Rw(e){const[t,n]=v.useState(null),r=v.useRef(e),a=v.useCallback(s=>{const l=Lc(s.target);l&&n(i=>i?(i.set(l,Uu(l)),new Map(i)):null)},[]);return v.useEffect(()=>{const s=r.current;if(e!==s){l(s);const i=e.map(c=>{const u=Lc(c);return u?(u.addEventListener("scroll",a,{passive:!0}),[u,Uu(u)]):null}).filter(c=>c!=null);n(i.length?new Map(i):null),r.current=e}return()=>{l(e),l(s)};function l(i){i.forEach(c=>{const u=Lc(c);u==null||u.removeEventListener("scroll",a)})}},[a,e]),v.useMemo(()=>e.length?t?Array.from(t.values()).reduce((s,l)=>Lo(s,l),ln):W3(e):ln,[e,t])}function W1(e,t){t===void 0&&(t=[]);const n=v.useRef(null);return v.useEffect(()=>{n.current=null},t),v.useEffect(()=>{const r=e!==ln;r&&!n.current&&(n.current=e),!r&&n.current&&(n.current=null)},[e]),n.current?as(e,n.current):ln}function Ow(e){v.useEffect(()=>{if(!$i)return;const t=e.map(n=>{let{sensor:r}=n;return r.setup==null?void 0:r.setup()});return()=>{for(const n of t)n==null||n()}},e.map(t=>{let{sensor:n}=t;return n}))}function Dw(e,t){return v.useMemo(()=>e.reduce((n,r)=>{let{eventName:a,handler:s}=r;return n[a]=l=>{s(l,t)},n},{}),[e,t])}function G3(e){return v.useMemo(()=>e?ow(e):null,[e])}const Oc=[];function Mw(e,t){t===void 0&&(t=Yo);const[n]=e,r=G3(n?Ct(n):null),[a,s]=v.useReducer(i,Oc),l=Fi({callback:s});return e.length>0&&a===Oc&&s(),Kt(()=>{e.length?e.forEach(c=>l==null?void 0:l.observe(c)):(l==null||l.disconnect(),s())},[e]),a;function i(){return e.length?e.map(c=>H3(c)?r:new Tp(t(c),c)):Oc}}function Y3(e){if(!e)return null;if(e.children.length>1)return e;const t=e.children[0];return Ss(t)?t:e}function Aw(e){let{measure:t}=e;const[n,r]=v.useState(null),a=v.useCallback(u=>{for(const{target:d}of u)if(Ss(d)){r(p=>{const m=t(d);return p?{...p,width:m.width,height:m.height}:m});break}},[t]),s=Fi({callback:a}),l=v.useCallback(u=>{const d=Y3(u);s==null||s.disconnect(),d&&(s==null||s.observe(d)),r(d?t(d):null)},[t,s]),[i,c]=ri(l);return v.useMemo(()=>({nodeRef:i,rect:n,setRef:c}),[n,i,c])}const Pw=[{sensor:Lp,options:{}},{sensor:kp,options:{}}],$w={current:{}},El={draggable:{measure:I1},droppable:{measure:I1,strategy:ss.WhileDragging,frequency:Vu.Optimized},dragOverlay:{measure:Yo}};class Ia extends Map{get(t){var n;return t!=null&&(n=super.get(t))!=null?n:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter(t=>{let{disabled:n}=t;return!n})}getNodeFor(t){var n,r;return(n=(r=this.get(t))==null?void 0:r.node.current)!=null?n:void 0}}const Iw={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new Ia,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:si},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:El,measureDroppableContainers:si,windowRect:null,measuringScheduled:!1},X3={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:si,draggableNodes:new Map,over:null,measureDroppableContainers:si},Ts=v.createContext(X3),Q3=v.createContext(Iw);function Bw(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new Ia}}}function zw(e,t){switch(t.type){case Ke.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case Ke.DragMove:return e.draggable.active?{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}}:e;case Ke.DragEnd:case Ke.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case Ke.RegisterDroppable:{const{element:n}=t,{id:r}=n,a=new Ia(e.droppable.containers);return a.set(r,n),{...e,droppable:{...e.droppable,containers:a}}}case Ke.SetDroppableDisabled:{const{id:n,key:r,disabled:a}=t,s=e.droppable.containers.get(n);if(!s||r!==s.key)return e;const l=new Ia(e.droppable.containers);return l.set(n,{...s,disabled:a}),{...e,droppable:{...e.droppable,containers:l}}}case Ke.UnregisterDroppable:{const{id:n,key:r}=t,a=e.droppable.containers.get(n);if(!a||r!==a.key)return e;const s=new Ia(e.droppable.containers);return s.delete(n),{...e,droppable:{...e.droppable,containers:s}}}default:return e}}function Fw(e){let{disabled:t}=e;const{active:n,activatorEvent:r,draggableNodes:a}=v.useContext(Ts),s=oi(r),l=oi(n==null?void 0:n.id);return v.useEffect(()=>{if(!t&&!r&&s&&l!=null){if(!Bi(s)||document.activeElement===s.target)return;const i=a.get(l);if(!i)return;const{activatorNode:c,node:u}=i;if(!c.current&&!u.current)return;requestAnimationFrame(()=>{for(const d of[c.current,u.current]){if(!d)continue;const p=PS(d);if(p){p.focus();break}}})}},[r,t,a,l,s]),null}function q3(e,t){let{transform:n,...r}=t;return e!=null&&e.length?e.reduce((a,s)=>s({transform:a,...r}),n):n}function Uw(e){return v.useMemo(()=>({draggable:{...El.draggable,...e==null?void 0:e.draggable},droppable:{...El.droppable,...e==null?void 0:e.droppable},dragOverlay:{...El.dragOverlay,...e==null?void 0:e.dragOverlay}}),[e==null?void 0:e.draggable,e==null?void 0:e.droppable,e==null?void 0:e.dragOverlay])}function Hw(e){let{activeNode:t,measure:n,initialRect:r,config:a=!0}=e;const s=v.useRef(!1),{x:l,y:i}=typeof a=="boolean"?{x:a,y:a}:a;Kt(()=>{if(!l&&!i||!t){s.current=!1;return}if(s.current||!r)return;const u=t==null?void 0:t.node.current;if(!u||u.isConnected===!1)return;const d=n(u),p=I3(d,r);if(l||(p.x=0),i||(p.y=0),s.current=!0,Math.abs(p.x)>0||Math.abs(p.y)>0){const m=z3(u);m&&m.scrollBy({top:p.y,left:p.x})}},[t,l,i,r,n])}const Ui=v.createContext({...ln,scaleX:1,scaleY:1});var Qn;(function(e){e[e.Uninitialized=0]="Uninitialized",e[e.Initializing=1]="Initializing",e[e.Initialized=2]="Initialized"})(Qn||(Qn={}));const Vw=v.memo(function(t){var n,r,a,s;let{id:l,accessibility:i,autoScroll:c=!0,children:u,sensors:d=Pw,collisionDetection:p=qS,measuring:m,modifiers:y,...b}=t;const j=v.useReducer(zw,void 0,Bw),[_,x]=j,[f,h]=US(),[C,S]=v.useState(Qn.Uninitialized),g=C===Qn.Initialized,{draggable:{active:w,nodes:k,translate:E},droppable:{containers:O}}=_,M=w?k.get(w):null,F=v.useRef({initial:null,translated:null}),G=v.useMemo(()=>{var He;return w!=null?{id:w,data:(He=M==null?void 0:M.data)!=null?He:$w,rect:F}:null},[w,M]),q=v.useRef(null),[ve,fe]=v.useState(null),[X,D]=v.useState(null),I=os(b,Object.values(b)),B=_s("DndDescribedBy",l),H=v.useMemo(()=>O.getEnabled(),[O]),V=Uw(m),{droppableRects:ye,measureDroppableContainers:oe,measuringScheduled:ge}=_w(H,{dragging:g,dependencies:[E.x,E.y],config:V.droppable}),re=Sw(k,w),Te=v.useMemo(()=>X?ai(X):null,[X]),st=Zi(),jt=Tw(re,V.draggable.measure);Hw({activeNode:w?k.get(w):null,config:st.layoutShiftCompensation,initialRect:jt,measure:V.draggable.measure});const ue=H1(re,V.draggable.measure,jt),ke=H1(re?re.parentElement:null),Qe=v.useRef({activatorEvent:null,active:null,activeNode:re,collisionRect:null,collisions:null,droppableRects:ye,draggableNodes:k,draggingNode:null,draggingNodeRect:null,droppableContainers:O,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),Nt=O.getNodeFor((n=Qe.current.over)==null?void 0:n.id),Yt=Aw({measure:V.dragOverlay.measure}),bt=(r=Yt.nodeRef.current)!=null?r:re,Hn=g?(a=Yt.rect)!=null?a:ue:null,Os=!!(Yt.nodeRef.current&&Yt.rect),Ds=Lw(Os?null:ue),Qo=G3(bt?Ct(bt):null),un=Nw(g?Nt??re:null),dn=Mw(un),_r=q3(y,{transform:{x:E.x-Ds.x,y:E.y-Ds.y,scaleX:1,scaleY:1},activatorEvent:X,active:G,activeNodeRect:ue,containerNodeRect:ke,draggingNodeRect:Hn,over:Qe.current.over,overlayNodeRect:Yt.rect,scrollableAncestors:un,scrollableAncestorRects:dn,windowRect:Qo}),Jr=Te?Lo(Te,E):null,Xt=Rw(un),Tr=W1(Xt),Ms=W1(Xt,[ue]),Qt=Lo(_r,Tr),Vn=Hn?tw(Hn,_r):null,St=G&&Vn?p({active:G,collisionRect:Vn,droppableRects:ye,droppableContainers:H,pointerCoordinates:Jr}):null,qo=$3(St,"id"),[qt,Jo]=v.useState(null),Vi=Os?_r:Lo(_r,Ms),As=JS(Vi,(s=qt==null?void 0:qt.rect)!=null?s:null,ue),kr=v.useCallback((He,ht)=>{let{sensor:T,options:L}=ht;if(q.current==null)return;const N=k.get(q.current);if(!N)return;const $=He.nativeEvent,z=new T({active:q.current,activeNode:N,event:$,options:L,context:Qe,onStart(Z){const Y=q.current;if(Y==null)return;const W=k.get(Y);if(!W)return;const{onDragStart:ae}=I.current,Re={active:{id:Y,data:W.data,rect:F}};_n.unstable_batchedUpdates(()=>{ae==null||ae(Re),S(Qn.Initializing),x({type:Ke.DragStart,initialCoordinates:Z,active:Y}),f({type:"onDragStart",event:Re})})},onMove(Z){x({type:Ke.DragMove,coordinates:Z})},onEnd:te(Ke.DragEnd),onCancel:te(Ke.DragCancel)});_n.unstable_batchedUpdates(()=>{fe(z),D(He.nativeEvent)});function te(Z){return async function(){const{active:W,collisions:ae,over:Re,scrollAdjustedTranslate:ne}=Qe.current;let he=null;if(W&&ne){const{cancelDrop:Oe}=I.current;he={activatorEvent:$,active:W,collisions:ae,delta:ne,over:Re},Z===Ke.DragEnd&&typeof Oe=="function"&&await Promise.resolve(Oe(he))&&(Z=Ke.DragCancel)}q.current=null,_n.unstable_batchedUpdates(()=>{x({type:Z}),S(Qn.Uninitialized),Jo(null),fe(null),D(null);const Oe=Z===Ke.DragEnd?"onDragEnd":"onDragCancel";if(he){const lt=I.current[Oe];lt==null||lt(he),f({type:Oe,event:he})}})}}},[k]),Ps=v.useCallback((He,ht)=>(T,L)=>{const N=T.nativeEvent,$=k.get(L);if(q.current!==null||!$||N.dndKit||N.defaultPrevented)return;const z={active:$};He(T,ht.options,z)===!0&&(N.dndKit={capturedBy:ht.sensor},q.current=L,kr(T,ht))},[k,kr]),eo=ww(d,Ps);Ow(d),Kt(()=>{ue&&C===Qn.Initializing&&S(Qn.Initialized)},[ue,C]),v.useEffect(()=>{const{onDragMove:He}=I.current,{active:ht,activatorEvent:T,collisions:L,over:N}=Qe.current;if(!ht||!T)return;const $={active:ht,activatorEvent:T,collisions:L,delta:{x:Qt.x,y:Qt.y},over:N};_n.unstable_batchedUpdates(()=>{He==null||He($),f({type:"onDragMove",event:$})})},[Qt.x,Qt.y]),v.useEffect(()=>{const{active:He,activatorEvent:ht,collisions:T,droppableContainers:L,scrollAdjustedTranslate:N}=Qe.current;if(!He||q.current==null||!ht||!N)return;const{onDragOver:$}=I.current,z=L.get(qo),te=z&&z.rect.current?{id:z.id,rect:z.rect.current,data:z.data,disabled:z.disabled}:null,Z={active:He,activatorEvent:ht,collisions:T,delta:{x:N.x,y:N.y},over:te};_n.unstable_batchedUpdates(()=>{Jo(te),$==null||$(Z),f({type:"onDragOver",event:Z})})},[qo]),Kt(()=>{Qe.current={activatorEvent:X,active:G,activeNode:re,collisionRect:Vn,collisions:St,droppableRects:ye,draggableNodes:k,draggingNode:bt,draggingNodeRect:Hn,droppableContainers:O,over:qt,scrollableAncestors:un,scrollAdjustedTranslate:Qt},F.current={initial:Hn,translated:Vn}},[G,re,St,Vn,k,bt,Hn,ye,O,qt,un,Qt]),Cw({...st,delta:E,draggingRect:Vn,pointerCoordinates:Jr,scrollableAncestors:un,scrollableAncestorRects:dn});const Wi=v.useMemo(()=>({active:G,activeNode:re,activeNodeRect:ue,activatorEvent:X,collisions:St,containerNodeRect:ke,dragOverlay:Yt,draggableNodes:k,droppableContainers:O,droppableRects:ye,over:qt,measureDroppableContainers:oe,scrollableAncestors:un,scrollableAncestorRects:dn,measuringConfiguration:V,measuringScheduled:ge,windowRect:Qo}),[G,re,ue,X,St,ke,Yt,k,O,ye,qt,oe,un,dn,V,ge,Qo]),$s=v.useMemo(()=>({activatorEvent:X,activators:eo,active:G,activeNodeRect:ue,ariaDescribedById:{draggable:B},dispatch:x,draggableNodes:k,over:qt,measureDroppableContainers:oe}),[X,eo,G,ue,x,B,k,qt,oe]);return ee.createElement(M3.Provider,{value:h},ee.createElement(Ts.Provider,{value:$s},ee.createElement(Q3.Provider,{value:Wi},ee.createElement(Ui.Provider,{value:As},u)),ee.createElement(Fw,{disabled:(i==null?void 0:i.restoreFocus)===!1})),ee.createElement(WS,{...i,hiddenTextDescribedById:B}));function Zi(){const He=(ve==null?void 0:ve.autoScrollEnabled)===!1,ht=typeof c=="object"?c.enabled===!1:c===!1,T=g&&!He&&!ht;return typeof c=="object"?{...c,enabled:T}:{enabled:T}}}),Ww=v.createContext(null),Z1="button",Zw="Droppable";function Kw(e){let{id:t,data:n,disabled:r=!1,attributes:a}=e;const s=_s(Zw),{activators:l,activatorEvent:i,active:c,activeNodeRect:u,ariaDescribedById:d,draggableNodes:p,over:m}=v.useContext(Ts),{role:y=Z1,roleDescription:b="draggable",tabIndex:j=0}=a??{},_=(c==null?void 0:c.id)===t,x=v.useContext(_?Ui:Ww),[f,h]=ri(),[C,S]=ri(),g=Dw(l,t),w=os(n);Kt(()=>(p.set(t,{id:t,key:s,node:f,activatorNode:C,data:w}),()=>{const E=p.get(t);E&&E.key===s&&p.delete(t)}),[p,t]);const k=v.useMemo(()=>({role:y,tabIndex:j,"aria-disabled":r,"aria-pressed":_&&y===Z1?!0:void 0,"aria-roledescription":b,"aria-describedby":d.draggable}),[r,y,j,_,b,d.draggable]);return{active:c,activatorEvent:i,activeNodeRect:u,attributes:k,isDragging:_,listeners:r?void 0:g,node:f,over:m,setNodeRef:h,setActivatorNodeRef:S,transform:x}}function J3(){return v.useContext(Q3)}const Gw="Droppable",Yw={timeout:25};function Xw(e){let{data:t,disabled:n=!1,id:r,resizeObserverConfig:a}=e;const s=_s(Gw),{active:l,dispatch:i,over:c,measureDroppableContainers:u}=v.useContext(Ts),d=v.useRef({disabled:n}),p=v.useRef(!1),m=v.useRef(null),y=v.useRef(null),{disabled:b,updateMeasurementsFor:j,timeout:_}={...Yw,...a},x=os(j??r),f=v.useCallback(()=>{if(!p.current){p.current=!0;return}y.current!=null&&clearTimeout(y.current),y.current=setTimeout(()=>{u(Array.isArray(x.current)?x.current:[x.current]),y.current=null},_)},[_]),h=Fi({callback:f,disabled:b||!l}),C=v.useCallback((k,E)=>{h&&(E&&(h.unobserve(E),p.current=!1),k&&h.observe(k))},[h]),[S,g]=ri(C),w=os(t);return v.useEffect(()=>{!h||!S.current||(h.disconnect(),p.current=!1,h.observe(S.current))},[S,h]),Kt(()=>(i({type:Ke.RegisterDroppable,element:{id:r,key:s,disabled:n,node:S,rect:m,data:w}}),()=>i({type:Ke.UnregisterDroppable,key:s,id:r})),[r]),v.useEffect(()=>{n!==d.current.disabled&&(i({type:Ke.SetDroppableDisabled,id:r,key:s,disabled:n}),d.current.disabled=n)},[r,s,n,i]),{active:l,rect:m,isOver:(c==null?void 0:c.id)===r,node:S,over:c,setNodeRef:g}}function Qw(e){let{animation:t,children:n}=e;const[r,a]=v.useState(null),[s,l]=v.useState(null),i=oi(n);return!n&&!r&&i&&a(i),Kt(()=>{if(!s)return;const c=r==null?void 0:r.key,u=r==null?void 0:r.props.id;if(c==null||u==null){a(null);return}Promise.resolve(t(u,s)).then(()=>{a(null)})},[t,r,s]),ee.createElement(ee.Fragment,null,n,r?v.cloneElement(r,{ref:l}):null)}const qw={x:0,y:0,scaleX:1,scaleY:1};function Jw(e){let{children:t}=e;return ee.createElement(Ts.Provider,{value:X3},ee.createElement(Ui.Provider,{value:qw},t))}const e_={position:"fixed",touchAction:"none"},t_=e=>Bi(e)?"transform 250ms ease":void 0,n_=v.forwardRef((e,t)=>{let{as:n,activatorEvent:r,adjustScale:a,children:s,className:l,rect:i,style:c,transform:u,transition:d=t_}=e;if(!i)return null;const p=a?u:{...u,scaleX:1,scaleY:1},m={...e_,width:i.width,height:i.height,top:i.top,left:i.left,transform:mr.Transform.toString(p),transformOrigin:a&&r?KS(r,i):void 0,transition:typeof d=="function"?d(r):d,...c};return ee.createElement(n,{className:l,style:m,ref:t},s)}),r_=e=>t=>{let{active:n,dragOverlay:r}=t;const a={},{styles:s,className:l}=e;if(s!=null&&s.active)for(const[i,c]of Object.entries(s.active))c!==void 0&&(a[i]=n.node.style.getPropertyValue(i),n.node.style.setProperty(i,c));if(s!=null&&s.dragOverlay)for(const[i,c]of Object.entries(s.dragOverlay))c!==void 0&&r.node.style.setProperty(i,c);return l!=null&&l.active&&n.node.classList.add(l.active),l!=null&&l.dragOverlay&&r.node.classList.add(l.dragOverlay),function(){for(const[c,u]of Object.entries(a))n.node.style.setProperty(c,u);l!=null&&l.active&&n.node.classList.remove(l.active)}},o_=e=>{let{transform:{initial:t,final:n}}=e;return[{transform:mr.Transform.toString(t)},{transform:mr.Transform.toString(n)}]},a_={duration:250,easing:"ease",keyframes:o_,sideEffects:r_({styles:{active:{opacity:"0"}}})};function s_(e){let{config:t,draggableNodes:n,droppableContainers:r,measuringConfiguration:a}=e;return Ii((s,l)=>{if(t===null)return;const i=n.get(s);if(!i)return;const c=i.node.current;if(!c)return;const u=Y3(l);if(!u)return;const{transform:d}=Ct(l).getComputedStyle(l),p=B3(d);if(!p)return;const m=typeof t=="function"?t:l_(t);return Z3(c,a.draggable.measure),m({active:{id:s,data:i.data,node:c,rect:a.draggable.measure(c)},draggableNodes:n,dragOverlay:{node:l,rect:a.dragOverlay.measure(u)},droppableContainers:r,measuringConfiguration:a,transform:p})})}function l_(e){const{duration:t,easing:n,sideEffects:r,keyframes:a}={...a_,...e};return s=>{let{active:l,dragOverlay:i,transform:c,...u}=s;if(!t)return;const d={x:i.rect.left-l.rect.left,y:i.rect.top-l.rect.top},p={scaleX:c.scaleX!==1?l.rect.width*c.scaleX/i.rect.width:1,scaleY:c.scaleY!==1?l.rect.height*c.scaleY/i.rect.height:1},m={x:c.x-d.x,y:c.y-d.y,...p},y=a({...u,active:l,dragOverlay:i,transform:{initial:c,final:m}}),[b]=y,j=y[y.length-1];if(JSON.stringify(b)===JSON.stringify(j))return;const _=r==null?void 0:r({active:l,dragOverlay:i,...u}),x=i.node.animate(y,{duration:t,easing:n,fill:"forwards"});return new Promise(f=>{x.onfinish=()=>{_==null||_(),f()}})}}let K1=0;function i_(e){return v.useMemo(()=>{if(e!=null)return K1++,K1},[e])}const c_=ee.memo(e=>{let{adjustScale:t=!1,children:n,dropAnimation:r,style:a,transition:s,modifiers:l,wrapperElement:i="div",className:c,zIndex:u=999}=e;const{activatorEvent:d,active:p,activeNodeRect:m,containerNodeRect:y,draggableNodes:b,droppableContainers:j,dragOverlay:_,over:x,measuringConfiguration:f,scrollableAncestors:h,scrollableAncestorRects:C,windowRect:S}=J3(),g=v.useContext(Ui),w=i_(p==null?void 0:p.id),k=q3(l,{activatorEvent:d,active:p,activeNodeRect:m,containerNodeRect:y,draggingNodeRect:_.rect,over:x,overlayNodeRect:_.rect,scrollableAncestors:h,scrollableAncestorRects:C,transform:g,windowRect:S}),E=Np(m),O=s_({config:r,draggableNodes:b,droppableContainers:j,measuringConfiguration:f}),M=E?_.setRef:void 0;return ee.createElement(Jw,null,ee.createElement(Qw,{animation:O},p&&w?ee.createElement(n_,{key:w,id:p.id,ref:M,as:i,activatorEvent:d,adjustScale:t,className:c,transition:s,rect:E,style:{zIndex:u,...a},transform:k},n):null))});function Rp(e,t,n){const r=e.slice();return r.splice(n<0?r.length+n:n,0,r.splice(t,1)[0]),r}function u_(e,t){return e.reduce((n,r,a)=>{const s=t.get(r);return s&&(n[a]=s),n},Array(e.length))}function cl(e){return e!==null&&e>=0}function d_(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function p_(e){return typeof e=="boolean"?{draggable:e,droppable:e}:e}const ul={scaleX:1,scaleY:1},f_=e=>{var t;let{rects:n,activeNodeRect:r,activeIndex:a,overIndex:s,index:l}=e;const i=(t=n[a])!=null?t:r;if(!i)return null;const c=h_(n,l,a);if(l===a){const u=n[s];return u?{x:a<s?u.left+u.width-(i.left+i.width):u.left-i.left,y:0,...ul}:null}return l>a&&l<=s?{x:-i.width-c,y:0,...ul}:l<a&&l>=s?{x:i.width+c,y:0,...ul}:{x:0,y:0,...ul}};function h_(e,t,n){const r=e[t],a=e[t-1],s=e[t+1];return!r||!a&&!s?0:n<t?a?r.left-(a.left+a.width):s.left-(r.left+r.width):s?s.left-(r.left+r.width):r.left-(a.left+a.width)}const Op=e=>{let{rects:t,activeIndex:n,overIndex:r,index:a}=e;const s=Rp(t,r,n),l=t[a],i=s[a];return!i||!l?null:{x:i.left-l.left,y:i.top-l.top,scaleX:i.width/l.width,scaleY:i.height/l.height}},dl={scaleX:1,scaleY:1},m_=e=>{var t;let{activeIndex:n,activeNodeRect:r,index:a,rects:s,overIndex:l}=e;const i=(t=s[n])!=null?t:r;if(!i)return null;if(a===n){const u=s[l];return u?{x:0,y:n<l?u.top+u.height-(i.top+i.height):u.top-i.top,...dl}:null}const c=g_(s,a,n);return a>n&&a<=l?{x:0,y:-i.height-c,...dl}:a<n&&a>=l?{x:0,y:i.height+c,...dl}:{x:0,y:0,...dl}};function g_(e,t,n){const r=e[t],a=e[t-1],s=e[t+1];return r?n<t?a?r.top-(a.top+a.height):s?s.top-(r.top+r.height):0:s?s.top-(r.top+r.height):a?r.top-(a.top+a.height):0:0}const eg="Sortable",tg=ee.createContext({activeIndex:-1,containerId:eg,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:Op,disabled:{draggable:!1,droppable:!1}});function x_(e){let{children:t,id:n,items:r,strategy:a=Op,disabled:s=!1}=e;const{active:l,dragOverlay:i,droppableRects:c,over:u,measureDroppableContainers:d}=J3(),p=_s(eg,n),m=i.rect!==null,y=v.useMemo(()=>r.map(g=>typeof g=="object"&&"id"in g?g.id:g),[r]),b=l!=null,j=l?y.indexOf(l.id):-1,_=u?y.indexOf(u.id):-1,x=v.useRef(y),f=!d_(y,x.current),h=_!==-1&&j===-1||f,C=p_(s);Kt(()=>{f&&b&&d(y)},[f,y,b,d]),v.useEffect(()=>{x.current=y},[y]);const S=v.useMemo(()=>({activeIndex:j,containerId:p,disabled:C,disableTransforms:h,items:y,overIndex:_,useDragOverlay:m,sortedRects:u_(y,c),strategy:a}),[j,p,C.draggable,C.droppable,h,y,_,c,m,a]);return ee.createElement(tg.Provider,{value:S},t)}const v_=e=>{let{id:t,items:n,activeIndex:r,overIndex:a}=e;return Rp(n,r,a).indexOf(t)},y_=e=>{let{containerId:t,isSorting:n,wasDragging:r,index:a,items:s,newIndex:l,previousItems:i,previousContainerId:c,transition:u}=e;return!u||!r||i!==s&&a===l?!1:n?!0:l!==a&&t===c},C_={duration:200,easing:"ease"},ng="transform",j_=mr.Transition.toString({property:ng,duration:0,easing:"linear"}),b_={roleDescription:"sortable"};function S_(e){let{disabled:t,index:n,node:r,rect:a}=e;const[s,l]=v.useState(null),i=v.useRef(n);return Kt(()=>{if(!t&&n!==i.current&&r.current){const c=a.current;if(c){const u=Yo(r.current,{ignoreTransform:!0}),d={x:c.left-u.left,y:c.top-u.top,scaleX:c.width/u.width,scaleY:c.height/u.height};(d.x||d.y)&&l(d)}}n!==i.current&&(i.current=n)},[t,n,r,a]),v.useEffect(()=>{s&&l(null)},[s]),s}function w_(e){let{animateLayoutChanges:t=y_,attributes:n,disabled:r,data:a,getNewIndex:s=v_,id:l,strategy:i,resizeObserverConfig:c,transition:u=C_}=e;const{items:d,containerId:p,activeIndex:m,disabled:y,disableTransforms:b,sortedRects:j,overIndex:_,useDragOverlay:x,strategy:f}=v.useContext(tg),h=__(r,y),C=d.indexOf(l),S=v.useMemo(()=>({sortable:{containerId:p,index:C,items:d},...a}),[p,a,C,d]),g=v.useMemo(()=>d.slice(d.indexOf(l)),[d,l]),{rect:w,node:k,isOver:E,setNodeRef:O}=Xw({id:l,data:S,disabled:h.droppable,resizeObserverConfig:{updateMeasurementsFor:g,...c}}),{active:M,activatorEvent:F,activeNodeRect:G,attributes:q,setNodeRef:ve,listeners:fe,isDragging:X,over:D,setActivatorNodeRef:I,transform:B}=Kw({id:l,data:S,attributes:{...b_,...n},disabled:h.draggable}),H=OS(O,ve),V=!!M,ye=V&&!b&&cl(m)&&cl(_),oe=!x&&X,ge=oe&&ye?B:null,Te=ye?ge??(i??f)({rects:j,activeNodeRect:G,activeIndex:m,overIndex:_,index:C}):null,st=cl(m)&&cl(_)?s({id:l,items:d,activeIndex:m,overIndex:_}):C,jt=M==null?void 0:M.id,ue=v.useRef({activeId:jt,items:d,newIndex:st,containerId:p}),ke=d!==ue.current.items,Qe=t({active:M,containerId:p,isDragging:X,isSorting:V,id:l,index:C,items:d,newIndex:ue.current.newIndex,previousItems:ue.current.items,previousContainerId:ue.current.containerId,transition:u,wasDragging:ue.current.activeId!=null}),Nt=S_({disabled:!Qe,index:C,node:k,rect:w});return v.useEffect(()=>{V&&ue.current.newIndex!==st&&(ue.current.newIndex=st),p!==ue.current.containerId&&(ue.current.containerId=p),d!==ue.current.items&&(ue.current.items=d)},[V,st,p,d]),v.useEffect(()=>{if(jt===ue.current.activeId)return;if(jt&&!ue.current.activeId){ue.current.activeId=jt;return}const bt=setTimeout(()=>{ue.current.activeId=jt},50);return()=>clearTimeout(bt)},[jt]),{active:M,activeIndex:m,attributes:q,data:S,rect:w,index:C,newIndex:st,items:d,isOver:E,isSorting:V,isDragging:X,listeners:fe,node:k,overIndex:_,over:D,setNodeRef:H,setActivatorNodeRef:I,setDroppableNodeRef:O,setDraggableNodeRef:ve,transform:Nt??Te,transition:Yt()};function Yt(){if(Nt||ke&&ue.current.newIndex===C)return j_;if(!(oe&&!Bi(F)||!u)&&(V||Qe))return mr.Transition.toString({...u,property:ng})}}function __(e,t){var n,r;return typeof e=="boolean"?{draggable:e,droppable:!1}:{draggable:(n=e==null?void 0:e.draggable)!=null?n:t.draggable,droppable:(r=e==null?void 0:e.droppable)!=null?r:t.droppable}}function ii(e){if(!e)return!1;const t=e.data.current;return!!(t&&"sortable"in t&&typeof t.sortable=="object"&&"containerId"in t.sortable&&"items"in t.sortable&&"index"in t.sortable)}const T_=[de.Down,de.Right,de.Up,de.Left],k_=(e,t)=>{let{context:{active:n,collisionRect:r,droppableRects:a,droppableContainers:s,over:l,scrollableAncestors:i}}=t;if(T_.includes(e.code)){if(e.preventDefault(),!n||!r)return;const c=[];s.getEnabled().forEach(p=>{if(!p||p!=null&&p.disabled)return;const m=a.get(p.id);if(m)switch(e.code){case de.Down:r.top<m.top&&c.push(p);break;case de.Up:r.top>m.top&&c.push(p);break;case de.Left:r.left>m.left&&c.push(p);break;case de.Right:r.left<m.left&&c.push(p);break}});const u=XS({active:n,collisionRect:r,droppableRects:a,droppableContainers:c,pointerCoordinates:null});let d=$3(u,"id");if(d===(l==null?void 0:l.id)&&u.length>1&&(d=u[1].id),d!=null){const p=s.get(n.id),m=s.get(d),y=m?a.get(m.id):null,b=m==null?void 0:m.node.current;if(b&&y&&p&&m){const _=zi(b).some((g,w)=>i[w]!==g),x=rg(p,m),f=E_(p,m),h=_||!x?{x:0,y:0}:{x:f?r.width-y.width:0,y:f?r.height-y.height:0},C={x:y.left,y:y.top};return h.x&&h.y?C:as(C,h)}}}};function rg(e,t){return!ii(e)||!ii(t)?!1:e.data.current.sortable.containerId===t.data.current.sortable.containerId}function E_(e,t){return!ii(e)||!ii(t)||!rg(e,t)?!1:e.data.current.sortable.index<t.data.current.sortable.index}const L_=e=>{let{transform:t}=e;return{...t,y:0}};function og(e,t,n){const r={...e};return t.top+e.y<=n.top?r.y=n.top-t.top:t.bottom+e.y>=n.top+n.height&&(r.y=n.top+n.height-t.bottom),t.left+e.x<=n.left?r.x=n.left-t.left:t.right+e.x>=n.left+n.width&&(r.x=n.left+n.width-t.right),r}const Dp=e=>{let{containerNodeRect:t,draggingNodeRect:n,transform:r}=e;return!n||!t?r:og(r,n,t)},N_=e=>{let{transform:t}=e;return{...t,x:0}},ag=e=>{let{transform:t,draggingNodeRect:n,windowRect:r}=e;return!n||!r?t:og(t,n,r)},Mp=({items:e,setOrder:t,List:n=({children:c})=>c,Item:r,modifiers:a=[Dp],strategy:s=Op,Overlay:l,...i})=>{const[c,u]=v.useState(null),d=ZS(A1(Lp),A1(kp,{coordinateGetter:k_}));function p(b){const j=e.findIndex(_=>_.id===b.active.id);u(j)}function m(){u(null)}function y(b){const{active:j,over:_}=b;if(j.id!==_.id){const x=e.findIndex(h=>h.id===j.id),f=e.findIndex(h=>h.id===_.id);e[x].moved=!0,t(Rp(e,x,f))}u(null)}return o.jsxs(Vw,{sensors:d,collisionDetection:YS,onDragStart:p,onDragCancel:m,onDragEnd:y,modifiers:a,children:[o.jsx(x_,{items:e,strategy:s,children:o.jsx(n,{...i,children:e.map(b=>o.jsx(R_,{id:b.id,item:b,Item:r,...i},b.id))})}),l&&c&&o.jsx(c_,{children:o.jsx(l,{item:c,...i})})]})},R_=({id:e,item:t,Item:n,...r})=>{const{attributes:a,listeners:s,setNodeRef:l,transform:i,transition:c}=w_({id:e}),u={transform:mr.Translate.toString(i),transition:c};return o.jsx(n,{item:t,setNodeRef:l,style:u,listeners:s,...a,...r})},O_=({...e})=>o.jsx(Mp,{modifiers:[L_,ag,Dp],strategy:f_,...e}),D_=({...e})=>o.jsx(Mp,{modifiers:[N_,ag,Dp],strategy:m_,...e}),M_=()=>o.jsxs(Q,{children:[o.jsx("h3",{children:"Hello World!"}),"This is an alert."]}),A_=`import React from 'react'
import { Alert } from '@/src/index.jsx'

{/* START */}
// PRETEND: import { Alert } from '@abw/badger-react-ui'

const AlertExample = () =>
  <Alert>
    <h3>Hello World!</h3>
    This is an alert.
  </Alert>

export default AlertExample
`,P_=["red","brown","orange","yellow","olive","green","teal","blue","indigo","violet","purple","pink","maroon"],sg=({color:e,setColor:t,disabled:n=!1})=>o.jsxs("select",{name:"color",required:!0,value:e,onChange:r=>t(r.target.value),disabled:n,children:[o.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Select Range"}),o.jsx("option",{value:"",children:"Default"}),P_.map(r=>o.jsx("option",{value:r,children:r},r))]}),$_=["smallest","smaller","small","medium","large","larger","largest","x2","x3","x4","x5","x6","x7","x8","x9","x10"],lg=({size:e,setSize:t})=>o.jsxs("select",{name:"size",required:!0,value:e,onChange:n=>t(n.target.value),children:[o.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Size"}),o.jsx("option",{value:"",children:"Default"}),$_.map(n=>o.jsx("option",{value:n,children:n},n))]}),I_=[0,1,2,3,4,5,6,8,10],B_=({radius:e,setRadius:t})=>o.jsxs("select",{name:"radius",required:!0,value:e,onChange:n=>t(n.target.value),children:[o.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Radius"}),o.jsx("option",{value:"",children:"Default"}),I_.map(n=>o.jsx("option",{value:n,children:n},n))]}),z_=[1,2,3,4,5],F_=({shadow:e,setShadow:t})=>o.jsxs("select",{name:"shadow",required:!0,value:e,onChange:n=>t(n.target.value),children:[o.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Shadow"}),o.jsx("option",{value:"",children:"Default"}),z_.map(n=>o.jsx("option",{value:n,children:n},n))]}),G1=({checked:e,toggle:t,label:n,disabled:r=!1})=>o.jsxs("label",{className:"checkbox border no-focus",children:[o.jsx("input",{type:"checkbox",checked:e,onChange:t,disabled:r}),n]}),U_=[0,1,2,3,4,5,6,8,10],H_=({border:e,setBorder:t,disabled:n=!1})=>o.jsxs("select",{name:"border",required:!0,value:e,onChange:r=>t(r.target.value),disabled:n,children:[o.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Border"}),o.jsx("option",{value:"",children:"Default"}),U_.map(r=>o.jsx("option",{value:r,children:r},r))]}),V_=Object.keys(xs.icons),Wu=({icon:e,setIcon:t,disabled:n=!1})=>o.jsxs("select",{name:"icon",required:!0,value:e,onChange:r=>t(r.target.value),disabled:n,children:[o.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Icon"}),o.jsx("option",{value:"",children:"None"}),V_.map(r=>o.jsx("option",{value:r,children:r},r))]}),W_=()=>{const[e,t]=v.useState(0),[n,r]=v.useState({headline:"",title:"",text:"Hello World!",revealable:!1,stripe:!1}),a=c=>()=>{r(u=>({...u,[c]:!u[c]})),t(u=>u+1)},s=c=>u=>{r(d=>({...d,[c]:u})),t(d=>d+1)},i=`<Alert
  ${K_(n)}
/>`;return o.jsxs("div",{className:"example grid-2 gap-h-8 stack-desktop",children:[o.jsxs("div",{children:[o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Output"}),o.jsx("div",{className:"output mar-b-8",children:o.jsx(G_,{options:n},e)})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Markup"}),o.jsx(tr,{code:i,language:"html",expand:!0})]})]}),o.jsx(Z_,{options:n,setOption:s,toggleOption:a})]})},Z_=({options:e,toggleOption:t,setOption:n})=>{const r=n("headline"),a=n("title"),s=n("text"),l=n("type"),i=n("size"),c=n("color"),u=n("border"),d=n("radius"),p=n("shadow"),m=n("icon"),y=n("headicon"),b=t("stripe"),j=t("revealable");return o.jsxs("div",{children:[o.jsx(Dc,{label:"Headline",value:e.headline,setValue:r}),o.jsx(Dc,{label:"Title",value:e.title,setValue:a}),o.jsx(Dc,{label:"Text",value:e.text,setValue:s}),o.jsxs("div",{className:"grid-2 gap-h-4 stack-mobile top",children:[o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Type"}),o.jsx(Y_,{type:e.type,setType:l})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Color"}),o.jsx(sg,{color:e.color,setColor:c,disabled:e.type})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Size"}),o.jsx(lg,{size:e.size,setSize:i})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Shadow"}),o.jsx(F_,{shadow:e.shadow,setShadow:p})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Border Width"}),o.jsx(H_,{border:e.border,setBorder:u,disabled:e.stripe})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Border Radius"}),o.jsx(B_,{radius:e.radius,setRadius:d})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Headline Icon"}),o.jsx(Wu,{icon:e.headicon,setIcon:y,disabled:!e.headline})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Body Icon"}),o.jsx(Wu,{icons:e.icon,setIcon:m})]})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Options"}),o.jsxs("div",{className:"grid-2 gap-h-4 stack-mobile top",children:[o.jsx(G1,{checked:e.stripe,toggle:b,label:"Stripe"}),o.jsx(G1,{checked:e.revealable,toggle:j,label:"Revealable",disabled:!e.headline})]})]})]})},K_=e=>{const t=["headline","title","text","type","color","size","headicon","icon"].filter(a=>e[a]).map(a=>`${a}="${e[a]}"`),n=["shadow","border","radius"].filter(a=>e[a]).map(a=>`${a}={${e[a]}}`),r=["stripe","revealable","dismissable"].filter(a=>e[a]);return[...t,...n,...r].join(`
  `)},G_=({options:e})=>o.jsx(Q,{...e}),Y_=({type:e,setType:t})=>o.jsxs("select",{name:"type",required:!0,value:e,onChange:n=>t(n.target.value),children:[o.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Type"}),o.jsx("option",{value:"",children:"Default"}),["info","warning","success","error"].map(n=>o.jsx("option",{value:n,children:n},n))]}),Dc=({label:e,value:t,setValue:n})=>o.jsxs("div",{className:"field",children:[o.jsx("label",{children:e}),o.jsxs("div",{className:"inputs",children:[o.jsx("input",{type:"text",name:"headline",value:t,onChange:r=>n(r.target.value)}),o.jsx("div",{className:"suffix",children:o.jsx(J,{name:"cross",className:"hover",onClick:()=>n("")})})]})]}),ig=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["Use the ",o.jsx("code",{children:"Alert"})," component to render an alert. Any child elements will be rendered inside the alert body."]}),o.jsx(je,{Component:M_,code:A_,expand:!0}),o.jsx("h2",{children:"Demo"}),o.jsx(W_,{})]}),X_=Object.freeze(Object.defineProperty({__proto__:null,default:ig},Symbol.toStringTag,{value:"Module"})),cg=e=>e.replaceAll(/\W+/g,"-").replace(/^-+/,"").replace(/-+$/,"").toLowerCase(),Q_=({render:e})=>{const[t,n]=v.useState({}),r=v.useRef();return e({tocs:t,addToc:(l,i,c,u)=>{const d=t[l]||(t[l]={});d[i]={text:c,ref:u},n({...t})},addTocHeading:(l,i,c,u)=>{const d=t[l]||(t[l]={});d[i]={heading:c,ref:u},n({...t})},contentRef:r})},ks=qr(Q_),q_=({addToc:e,addTocHeading:t,tocName:n,render:r})=>r({addPageToc:(l,i,c)=>{e(n,l,i,c)},addPageTocHeading:(l,i,c)=>{t(n,l,i,c)}}),Ap=qr(ks.Consumer(q_)),J_=({id:e,code:t,title:n=t,children:r,addPageToc:a,split:s})=>{const l=cg(e||t||n),i=v.useRef(),c=t?`code:${t}`:n;return v.useEffect(()=>{a&&a(l,c,i)},[e,t,n]),o.jsxs("section",{id:l,ref:i,children:[o.jsx("h3",{className:t?"font-mono page-section":"page-section",children:n}),o.jsx("div",{className:s?"cols-2 stack-desktop":"",children:r})]})},K=Ap.Consumer(J_),R=({Component:e,Source:t,children:n,code:r,title:a,caption:s=r?o.jsx("code",{children:r}):a,expand:l,undent:i,lineProps:c,highlightLines:u,...d})=>o.jsxs(K,{code:r,title:a,...d,children:[o.jsx("div",{className:"cols-2 stack-desktop mar-b-4",children:n}),o.jsx(je,{Component:e,code:t,caption:s,expand:l,undent:i,highlightLines:u,lineProps:c})]}),eT=()=>o.jsxs("div",{children:[o.jsx(wa,{text:"Error alert"}),o.jsx(wa,{text:"Error alert with border",border:!0}),o.jsx(wa,{headline:"Error Alert",text:"Error alert with headline",border:!0,shadow:!0}),o.jsx(wa,{title:"Stonehenge",text:"Crushed by a dwarf",icon:"exclamation-thick",stripe:!0,shadow:3})]}),tT=`import React from 'react'
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
`,ug=()=>o.jsx(R,{code:"Error",Component:eT,Source:tT,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"Error"})," component is a short-cut to generate an error alert."]})}),nT=Object.freeze(Object.defineProperty({__proto__:null,default:ug},Symbol.toStringTag,{value:"Module"})),rT=()=>o.jsxs("div",{children:[o.jsx(ja,{text:"Info alert"}),o.jsx(ja,{text:"Info alert with border",border:!0}),o.jsx(ja,{headline:"Info Alert",text:"Info alert with headline",border:!0,shadow:!0}),o.jsx(ja,{title:"Stonehenge",text:"Where the demons dwell",icon:"info",stripe:!0,shadow:3})]}),oT=`import React from 'react'
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
`,dg=()=>o.jsx(R,{code:"Info",Component:rT,Source:oT,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"Info"})," component is a short-cut to generate an info alert."]})}),aT=Object.freeze(Object.defineProperty({__proto__:null,default:dg},Symbol.toStringTag,{value:"Module"})),sT=()=>o.jsxs("div",{children:[o.jsx(ba,{text:"Success alert"}),o.jsx(ba,{text:"Success alert with border",border:!0}),o.jsx(ba,{headline:"Success Alert",text:"Success alert with headline",border:!0,shadow:!0}),o.jsx(ba,{title:"Stonehenge",text:"Where the banshees live...",icon:"check-thicker-shrink=4",stripe:!0,shadow:3})]}),lT=`import React from 'react'
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
`,pg=()=>o.jsx(R,{code:"Success",Component:sT,Source:lT,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"Success"})," component is a short-cut to generate a success alert."]})}),iT=Object.freeze(Object.defineProperty({__proto__:null,default:pg},Symbol.toStringTag,{value:"Module"})),cT=()=>o.jsxs("div",{children:[o.jsx(Sa,{text:"Warning alert"}),o.jsx(Sa,{text:"Warning alert with border",border:!0}),o.jsx(Sa,{headline:"Warning Alert",text:"Warning alert with headline",border:!0,shadow:!0}),o.jsx(Sa,{title:"Stonehenge",text:"...and they do live well",icon:"exclamation-thick",stripe:!0,shadow:3})]}),uT=`import React from 'react'
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
`,fg=()=>o.jsx(R,{code:"Warning",Component:cT,Source:uT,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"Warning"})," component is a short-cut to generate a warning alert."]})}),dT=Object.freeze(Object.defineProperty({__proto__:null,default:fg},Symbol.toStringTag,{value:"Module"})),pT=()=>o.jsxs("div",{children:[o.jsx(Q,{text:"Border Alert",border:!0}),o.jsx(Q,{text:"Border Width 2",border:2})]}),fT=`import React from 'react'
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
`,hg=()=>o.jsx(R,{code:"border",Component:pT,Source:fT,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"border"})," property can be used to add a border.  This can be a number to indicate the border width."]})}),hT=Object.freeze(Object.defineProperty({__proto__:null,default:hg},Symbol.toStringTag,{value:"Module"})),mT=()=>o.jsx(Q,{text:"Hello World!",className:"border shadow-2"}),gT=`import React from 'react'
import { Alert } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Alert
    text="Hello World!"
    className="border shadow-2"
  />
/* END */

export default Component
`,mg=()=>o.jsx(R,{code:"className",Component:mT,Source:gT,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"className"})," property can be used to set a CSS class."]})}),xT=Object.freeze(Object.defineProperty({__proto__:null,default:mg},Symbol.toStringTag,{value:"Module"})),vT=()=>o.jsxs("div",{children:[o.jsx(Q,{text:"Red Alert",color:"red"}),o.jsx(Q,{text:"Brown Alert",color:"brown"}),o.jsx(Q,{text:"Orange Alert",color:"orange"}),o.jsx(Q,{text:"Yellow Alert",color:"yellow"}),o.jsx(Q,{text:"Green Alert",color:"green"}),o.jsx(Q,{text:"Teal Alert",color:"teal"}),o.jsx(Q,{text:"Blue Alert",color:"blue"}),o.jsx(Q,{text:"Indigo Alert",color:"indigo"}),o.jsx(Q,{text:"Violet Alert",color:"violet"}),o.jsx(Q,{text:"Purple Alert",color:"purple"}),o.jsx(Q,{text:"Pink Alert",color:"pink"}),o.jsx(Q,{text:"Maroon Alert",color:"maroon"})]}),yT=`import React from 'react'
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
`,gg=()=>o.jsx(R,{code:"color",Component:vT,Source:yT,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"color"})," property can be used to set the color range used for the alert."]})}),CT=Object.freeze(Object.defineProperty({__proto__:null,default:gg},Symbol.toStringTag,{value:"Module"})),jT=()=>o.jsx(Q,{headline:"Dismissable Alert",text:"A dismissable alert",dismissable:!0}),bT=`import React from 'react'
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
`,xg=()=>o.jsx(R,{code:"dismissable",Component:jT,Source:bT,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"dismissable"})," property can be used to make an alert dismissable."]})}),ST=Object.freeze(Object.defineProperty({__proto__:null,default:xg},Symbol.toStringTag,{value:"Module"})),wT=()=>o.jsx(Q,{headline:"Headline Icon Alert",headIcon:"bars",text:"An alert with a headline icon"}),_T=`import React from 'react'
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
`,vg=()=>o.jsx(R,{code:"headicon",Component:wT,Source:_T,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"headIcon"})," property can be used to add an icon to the headline."]})}),TT=Object.freeze(Object.defineProperty({__proto__:null,default:vg},Symbol.toStringTag,{value:"Module"})),kT=()=>o.jsx(Q,{headline:"Headline Alert",text:"An alert with a headline"}),ET=`import React from 'react'
import { Alert } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Alert
    headline="Headline Alert"
    text="An alert with a headline"
  />
/* END */

export default Component
`,yg=()=>o.jsx(R,{code:"headline",Component:kT,Source:ET,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"headline"})," property can be used to set a headline."]})}),LT=Object.freeze(Object.defineProperty({__proto__:null,default:yg},Symbol.toStringTag,{value:"Module"})),NT=()=>o.jsxs("div",{children:[o.jsx(Q,{icon:"info",type:"info",title:"Eleven",text:"It's one louder"}),o.jsx(Q,{icon:"check",type:"success",title:"Eleven",text:"It's one louder"}),o.jsx(Q,{icon:"exclamation",type:"error",title:"Eleven",text:"It's one louder"})]}),RT=`import React from 'react'
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
`,Cg=()=>o.jsx(R,{code:"icon",Component:NT,Source:RT,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"icon"})," property can be used to add an icon to the body."]})}),OT=Object.freeze(Object.defineProperty({__proto__:null,default:Cg},Symbol.toStringTag,{value:"Module"})),DT=()=>o.jsx(Q,{headline:"Dismissable Alert",text:"A dismissable alert",onDismiss:()=>window.alert("Bye!"),dismissable:!0}),MT=`import React from 'react'
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
`,jg=()=>o.jsx(R,{code:"onDismiss",Component:DT,Source:MT,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"onDismiss"})," property can be used to register a function which will be called when the alert is dismissed."]})}),AT=Object.freeze(Object.defineProperty({__proto__:null,default:jg},Symbol.toStringTag,{value:"Module"})),PT=()=>o.jsx(Q,{text:"Radius Alert",radius:4}),$T=`import React from 'react'
import { Alert } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Alert
    text="Radius Alert"
    radius={4}
  />
/* END */

export default Component
`,bg=()=>o.jsx(R,{code:"radius",Component:PT,Source:$T,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"radius"})," property can be used to set the border radius."]})}),IT=Object.freeze(Object.defineProperty({__proto__:null,default:bg},Symbol.toStringTag,{value:"Module"})),BT=()=>o.jsx(Q,{headline:"Revealable Alert",text:"A revealable alert",revealable:!0}),zT=`import React from 'react'
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
`,Sg=()=>o.jsx(R,{code:"revealable",Component:BT,Source:zT,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"revealable"})," property can be used to make the alert revealable."]})}),FT=Object.freeze(Object.defineProperty({__proto__:null,default:Sg},Symbol.toStringTag,{value:"Module"})),UT=()=>o.jsx(Q,{headline:"Revealed Alert",text:"A revealed alert",revealable:!0,revealed:!0}),HT=`import React from 'react'
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
`,wg=()=>o.jsx(R,{code:"revealed",Component:UT,Source:HT,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"revealed"})," property can be set to make it a revealable alert initially revealed."]})}),VT=Object.freeze(Object.defineProperty({__proto__:null,default:wg},Symbol.toStringTag,{value:"Module"})),WT=()=>o.jsxs("div",{children:[o.jsx(Q,{text:"Alert With Default Shadow (1)",shadow:!0}),o.jsx(Q,{text:"Alert With Shadow 2",shadow:2}),o.jsx(Q,{text:"Alert With Shadow 3",shadow:3}),o.jsx(Q,{text:"Alert With Shadow 4",shadow:4}),o.jsx(Q,{text:"Alert With Shadow 5",shadow:5})]}),ZT=`import React from 'react'
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
`,_g=()=>o.jsx(R,{code:"shadow",Component:WT,Source:ZT,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"shadow"})," property can be used to add a shadow.  The default value is 1 or you can set it to any number from"," ","1 to 5."]})}),KT=Object.freeze(Object.defineProperty({__proto__:null,default:_g},Symbol.toStringTag,{value:"Module"})),GT=()=>o.jsxs("div",{children:[o.jsx(Q,{text:"Smallest Alert",size:"smallest"}),o.jsx(Q,{text:"Smaller Alert",size:"smaller"}),o.jsx(Q,{text:"Small Alert",size:"small"}),o.jsx(Q,{text:"Medium Alert",size:"medium"}),o.jsx(Q,{text:"Large Alert",size:"large"}),o.jsx(Q,{text:"Larger Alert",size:"larger"}),o.jsx(Q,{text:"Largest Alert",size:"largest"})]}),YT=`import React from 'react'
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
`,Tg=()=>o.jsx(R,{code:"size",Component:GT,Source:YT,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"size"})," property can be used to set the text size."]})}),XT=Object.freeze(Object.defineProperty({__proto__:null,default:Tg},Symbol.toStringTag,{value:"Module"})),QT=()=>o.jsxs("div",{children:[o.jsx(Q,{text:"Stripe Alert",stripe:!0,shadow:4}),o.jsx(Q,{text:"Info Stripe Alert",type:"info",stripe:!0,shadow:4}),o.jsx(Q,{text:"Success Stripe Alert",type:"success",stripe:!0,shadow:4}),o.jsx(Q,{text:"Warning Stripe Alert",type:"warning",stripe:!0,shadow:4}),o.jsx(Q,{text:"Error Stripe Alert",type:"error",stripe:!0,shadow:4})]}),qT=`import React from 'react'
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
`,kg=()=>o.jsx(R,{code:"stripe",Component:QT,Source:qT,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"stripe"})," property can be set as a short-cut to add the"," ",o.jsx("code",{children:"stripe"})," CSS class for a more minimal look."]})}),JT=Object.freeze(Object.defineProperty({__proto__:null,default:kg},Symbol.toStringTag,{value:"Module"})),ek=()=>o.jsx(Q,{text:"Hello World!"}),tk=`import React from 'react'
import { Alert } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Alert text="Hello World!"/>
/* END */

export default Component`,Eg=()=>o.jsx(R,{code:"text",Component:ek,Source:tk,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"text"})," property can be used to set the body text."]})}),nk=Object.freeze(Object.defineProperty({__proto__:null,default:Eg},Symbol.toStringTag,{value:"Module"})),rk=()=>o.jsx(Q,{title:"Hello World!",children:"This is an alert"}),ok=`import React from 'react'
import { Alert } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Alert title="Hello World!">
    This is an alert
  </Alert>
/* END */

export default Component`,Lg=()=>o.jsx(R,{code:"title",Component:rk,Source:ok,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"title"})," property can be used to set a title."]})}),ak=Object.freeze(Object.defineProperty({__proto__:null,default:Lg},Symbol.toStringTag,{value:"Module"})),sk=()=>o.jsxs("div",{children:[o.jsx(Q,{text:"Info Alert",type:"info"}),o.jsx(Q,{text:"Success Alert",type:"success"}),o.jsx(Q,{text:"Warning Alert",type:"warning"}),o.jsx(Q,{text:"Error Alert",type:"error"})]}),lk=`import React from 'react'
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
`,Ng=()=>o.jsx(R,{code:"type",Component:sk,Source:lk,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"type"})," property can be used to set it to one of the pre-defined types: ",o.jsx("code",{children:"info"}),", ",o.jsx("code",{children:"success"}),","," ",o.jsx("code",{children:"warning"})," or ",o.jsx("code",{children:"error"}),"."]})}),ik=Object.freeze(Object.defineProperty({__proto__:null,default:Ng},Symbol.toStringTag,{value:"Module"})),ft=({tocName:e,children:t})=>o.jsx(Ap.Provider,{tocName:e,children:t}),ck=({id:e,title:t,addPageTocHeading:n})=>{const r=cg(e||t),a=v.useRef();return v.useEffect(()=>{n&&n(r,t,a)},[e,t]),o.jsx("h2",{id:r,ref:a,className:"section-heading",children:t})},ce=Ap.Consumer(ck),uk=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Alert"}),o.jsx(ig,{}),o.jsxs(ft,{tocName:"alert",children:[o.jsx(ce,{title:"Properties"}),o.jsx(Lg,{}),o.jsx(Eg,{}),o.jsx(yg,{}),o.jsx(vg,{}),o.jsx(Sg,{}),o.jsx(wg,{}),o.jsx(xg,{}),o.jsx(jg,{}),o.jsx(mg,{}),o.jsx(hg,{}),o.jsx(bg,{}),o.jsx(_g,{}),o.jsx(Tg,{}),o.jsx(gg,{}),o.jsx(Ng,{}),o.jsx(kg,{}),o.jsx(Cg,{}),o.jsx(ce,{title:"Components"}),o.jsx(dg,{}),o.jsx(pg,{}),o.jsx(fg,{}),o.jsx(ug,{})]})]}),dk=Object.freeze(Object.defineProperty({__proto__:null,default:uk},Symbol.toStringTag,{value:"Module"})),pk=()=>o.jsx(A,{children:"This is a button"}),fk=`import React from 'react'
import { Button } from '@/src/index.jsx'

{/* START */}
// PRETEND: import { Button } from '@abw/badger-react-ui'

const ButtonExample = () =>
  <Button>
    This is a button
  </Button>

export default ButtonExample
`,Rg=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"Button"})," component can be used to render a button. Any child elements will be included as content."]}),o.jsxs("p",{className:"cols-2 stack-desktop",children:["There are numerous properties listed below that are typically used as shortcuts to set particular CSS styles.  Any other properties not listed here are forwarded to the ",o.jsx("code",{children:"button"})," component."]}),o.jsx(je,{Component:pk,code:fk,expand:!0})]}),hk=Object.freeze(Object.defineProperty({__proto__:null,default:Rg},Symbol.toStringTag,{value:"Module"})),mk=()=>o.jsx(A,{text:"Custom Button Content",Content:({text:e})=>o.jsxs("span",{className:"pad-4",children:["😀 ",e]})}),gk=`import React from 'react'
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
`,Og=()=>o.jsxs(R,{code:"Content",Component:mk,Source:gk,undent:2,expand:!0,children:[o.jsxs("p",{children:["The ",o.jsx("code",{children:"Content"})," property (note the capital C) can be used to provide an alternate component to render the button content. By default it uses ",o.jsx("code",{children:"WithIcons"})," to render the button text with optional icons."]}),o.jsxs("p",{children:["If you want to change the way that button content is generated on a global level then you can use the theming engine to define a different ",o.jsx("code",{children:"Content"})," component for all buttons."]})]}),xk=Object.freeze(Object.defineProperty({__proto__:null,default:Og},Symbol.toStringTag,{value:"Module"})),vk=()=>o.jsxs("div",{className:"flex wrap gap-4",children:[o.jsx(A,{text:"Red Bare",color:"red",bare:!0}),o.jsx(A,{text:"Green Bare",color:"green",bare:!0}),o.jsx(A,{text:"Blue Bare",color:"blue",bare:!0})]}),yk=`import React from 'react'
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
`,Dg=()=>o.jsx(R,{code:"bare",Component:vk,Source:yk,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"bare"})," property can be added for bare naked buttons."]})}),Ck=Object.freeze(Object.defineProperty({__proto__:null,default:Dg},Symbol.toStringTag,{value:"Module"})),jk=()=>o.jsxs("div",{className:"flex middle wrap gap-4",children:[o.jsx(A,{text:"Border 2",color:"red",outline:!0,border:2}),o.jsx(A,{text:"Border 3",color:"brown",outline:!0,border:3}),o.jsx(A,{text:"Border 4",color:"orange",outline:!0,border:4}),o.jsx(A,{text:"Border 5",color:"yellow",outline:!0,border:5})]}),bk=`import React from 'react'
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
`,Mg=()=>o.jsx(R,{code:"border",Component:jk,Source:bk,undent:2,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"border"})," property can be used to set the border width. This is only really noticeable on outline buttons.  There is a border around solid buttons (mainly to help in matching the height of other form inputs), although it's the same color as the background."]})}),Sk=Object.freeze(Object.defineProperty({__proto__:null,default:Mg},Symbol.toStringTag,{value:"Module"})),wk=()=>o.jsxs("div",{className:"flex wrap gap-4",children:[o.jsx(A,{text:"Yellow Button",color:"yellow"}),o.jsx(A,{text:"Bright Yellow Button",color:"yellow",bright:!0})]}),_k=`import React from 'react'
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
`,Ag=()=>o.jsx(R,{code:"bright",Component:wk,Source:_k,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"bright"})," property can be added to make the buttons brighter than normal."]})}),Tk=Object.freeze(Object.defineProperty({__proto__:null,default:Ag},Symbol.toStringTag,{value:"Module"})),kk=()=>o.jsx(A,{text:"Custom Button",className:"red bdw-2 bdr-4 bgc-80 fgc-20 bgd-20 fgd-80"}),Ek=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    text="Custom Button"
    className="red bdw-2 bdr-4 bgc-80 fgc-20 bgd-20 fgd-80"
  />
/* END */

export default Component
`,Pg=()=>o.jsx(R,{code:"className",Component:kk,Source:Ek,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"className"})," property can be added to add a CSS class to the button."]})}),Lk=Object.freeze(Object.defineProperty({__proto__:null,default:Pg},Symbol.toStringTag,{value:"Module"})),Nk=()=>o.jsxs("div",{className:"grid-2 gap-4 stack-tablet",children:[o.jsx(A,{text:"Red Button",color:"red"}),o.jsx(A,{text:"Brown Button",color:"brown"}),o.jsx(A,{text:"Orange Button",color:"orange"}),o.jsx(A,{text:"Yellow Button",color:"yellow"}),o.jsx(A,{text:"Green Button",color:"green"}),o.jsx(A,{text:"Teal Button",color:"teal"}),o.jsx(A,{text:"Blue Button",color:"blue"}),o.jsx(A,{text:"Indigo Button",color:"indigo"}),o.jsx(A,{text:"Violet Button",color:"violet"}),o.jsx(A,{text:"Purple Button",color:"purple"}),o.jsx(A,{text:"Pink Button",color:"pink"}),o.jsx(A,{text:"Maroon Button",color:"maroon"})]}),Rk=`import React from 'react'
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
`,$g=()=>o.jsx(R,{code:"color",Component:Nk,Source:Rk,undent:2,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"color"})," property can be used to set the color range used for the button."]})}),Ok=Object.freeze(Object.defineProperty({__proto__:null,default:$g},Symbol.toStringTag,{value:"Module"})),Dk=()=>o.jsxs("div",{className:"flex wrap gap-4",children:[o.jsx(A,{text:"Red Button",color:"red"}),o.jsx(A,{text:"Dark Red Button",color:"red",dark:!0})]}),Mk=`import React from 'react'
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
`,Ig=()=>o.jsx(R,{code:"dark",Component:Dk,Source:Mk,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"dark"})," property can be added to make the buttons darker than normal."]})}),Ak=Object.freeze(Object.defineProperty({__proto__:null,default:Ig},Symbol.toStringTag,{value:"Module"})),Pk=()=>o.jsx(A,{text:"Disabled Button",disabled:!0}),$k=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    text="Disabled Button"
    disabled
  />
/* END */

export default Component
`,Bg=()=>o.jsx(R,{code:"disabled",Component:Pk,Source:$k,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"disabled"})," property can be set to disable a button."]})}),Ik=Object.freeze(Object.defineProperty({__proto__:null,default:Bg},Symbol.toStringTag,{value:"Module"})),Bk=()=>o.jsx(A,{color:"green",icon:"bars"}),zk=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    color="green"
    icon="bars"
  />
/* END */

export default Component
`,zg=()=>o.jsx(R,{code:"icon",Component:Bk,Source:zk,undent:2,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"icon"})," property can be used to add an icon to a button."]})}),Fk=Object.freeze(Object.defineProperty({__proto__:null,default:zg},Symbol.toStringTag,{value:"Module"})),Uk=()=>o.jsx(A,{color:"green",text:"Back",iconLeft:"angle-left"}),Hk=`import React from 'react'
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
`,Fg=()=>o.jsx(R,{code:"iconLeft",Component:Uk,Source:Hk,undent:2,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"iconLeft"})," property can be used to add an icon to the left side of a button."]})}),Vk=Object.freeze(Object.defineProperty({__proto__:null,default:Fg},Symbol.toStringTag,{value:"Module"})),Wk=()=>o.jsx(A,{color:"green",text:"Next",iconRight:"angle-right"}),Zk=`import React from 'react'
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
`,Ug=()=>o.jsx(R,{code:"iconRight",Component:Wk,Source:Zk,undent:2,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"iconRight"})," property can be used to add an icon to the right side of a button."]})}),Kk=Object.freeze(Object.defineProperty({__proto__:null,default:Ug},Symbol.toStringTag,{value:"Module"})),Gk=()=>o.jsx(A,{text:"I am labelled!",label:"This is a label"}),Yk=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    text="I am labelled!"
    label="This is a label"
  />
/* END */

export default Component
`,Hg=()=>o.jsx(R,{code:"label",Component:Gk,Source:Yk,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"label"})," property can be used to set the",o.jsx("code",{children:"aria-label"})," property on the button.  This typically doesn't have any visual effect on the button, but is used by screen readers to provide more detail about the functionality of the button."]})}),Xk=Object.freeze(Object.defineProperty({__proto__:null,default:Hg},Symbol.toStringTag,{value:"Module"})),Qk=()=>o.jsx(A,{text:"Click Me!",onClick:()=>window.alert("Click!")}),qk=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    text="Click Me!"
    onClick={() => window.alert('Click!')}
  />
/* END */

export default Component
`,Vg=()=>o.jsx(R,{code:"onClick",Component:Qk,Source:qk,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"onClick"})," property can be used to register a function which will be called when the button is clicked."]})}),Jk=Object.freeze(Object.defineProperty({__proto__:null,default:Vg},Symbol.toStringTag,{value:"Module"})),eE=()=>o.jsxs("div",{className:"flex wrap gap-4",children:[o.jsx(A,{text:"Red Outline",color:"red",outline:!0}),o.jsx(A,{text:"Green Outline",color:"green",outline:!0}),o.jsx(A,{text:"Blue Outline",color:"blue",outline:!0})]}),tE=`import React from 'react'
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
`,Wg=()=>o.jsx(R,{code:"outline",Component:eE,Source:tE,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"outline"})," property can be added for outline buttons."]})}),nE=Object.freeze(Object.defineProperty({__proto__:null,default:Wg},Symbol.toStringTag,{value:"Module"})),rE=()=>o.jsxs("div",{className:"flex middle wrap gap-4",children:[o.jsx(A,{text:"Radius 0",color:"olive",radius:0}),o.jsx(A,{text:"Radius 2",color:"green",radius:2}),o.jsx(A,{text:"Radius 4",color:"teal",radius:3}),o.jsx(A,{text:"Radius 6",color:"blue",radius:4})]}),oE=`import React from 'react'
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
`,Zg=()=>o.jsx(R,{code:"radius",Component:rE,Source:oE,undent:2,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"radius"})," property can be used to set the border radius in multiples of the base unit: 0.25rem."]})}),aE=Object.freeze(Object.defineProperty({__proto__:null,default:Zg},Symbol.toStringTag,{value:"Module"})),sE=()=>o.jsxs("div",{className:"flex wrap gap-4",children:[o.jsx(A,{text:"Red Shaded",color:"red",shaded:!0}),o.jsx(A,{text:"Green Shaded",color:"green",shaded:!0}),o.jsx(A,{text:"Blue Shaded",color:"blue",shaded:!0})]}),lE=`import React from 'react'
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
`,Kg=()=>o.jsx(R,{code:"shaded",Component:sE,Source:lE,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"shaded"})," property can be added for shaded buttons."]})}),iE=Object.freeze(Object.defineProperty({__proto__:null,default:Kg},Symbol.toStringTag,{value:"Module"})),cE=()=>o.jsxs("div",{className:"flex middle wrap gap-4",children:[o.jsx(A,{text:"Shadow 1",color:"indigo",outline:!0,shadow:!0}),o.jsx(A,{text:"Shadow 2",color:"violet",outline:!0,shadow:2}),o.jsx(A,{text:"Shadow 3",color:"purple",outline:!0,shadow:3}),o.jsx(A,{text:"Shadow 4",color:"pink",outline:!0,shadow:4}),o.jsx(A,{text:"Shadow 5",color:"maroon",outline:!0,shadow:5})]}),uE=`import React from 'react'
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
`,Gg=()=>o.jsx(R,{code:"shadow",Component:cE,Source:uE,undent:2,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"shadow"})," property can be used to add a shadow to the button ranging from 1 to 5."]})}),dE=Object.freeze(Object.defineProperty({__proto__:null,default:Gg},Symbol.toStringTag,{value:"Module"})),pE=()=>o.jsxs("div",{className:"flex middle wrap gap-4",children:[o.jsx(A,{text:"Smallest",size:"smallest"}),o.jsx(A,{text:"Smaller",size:"smaller"}),o.jsx(A,{text:"Small",size:"small"}),o.jsx(A,{text:"Medium",size:"medium"}),o.jsx(A,{text:"Large",size:"large"}),o.jsx(A,{text:"Larger",size:"larger"}),o.jsx(A,{text:"Largest",size:"largest"}),o.jsx(A,{text:"x3",size:"x3"}),o.jsx(A,{text:"x5",size:"x5"}),o.jsx(A,{text:"x7",size:"x7"})]}),fE=`import React from 'react'
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
`,Yg=()=>o.jsx(R,{code:"size",Component:pE,Source:fE,undent:2,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"size"})," property can be used to set the button size. This can be one of: ",o.jsx("code",{children:"smallest"}),", ",o.jsx("code",{children:"smaller"}),", ",o.jsx("code",{children:"small"})," ",",",o.jsx("code",{children:"medium"})," (default - same as no explicit size), ",o.jsx("code",{children:"large"})," ",",",o.jsx("code",{children:"larger"}),", ",o.jsx("code",{children:"largest"}),"; or any of the size multipliers:"," ",o.jsx("code",{children:"x2"}),", ",o.jsx("code",{children:"x3"}),", etc., up to ",o.jsx("code",{children:"x10"}),"."]})}),hE=Object.freeze(Object.defineProperty({__proto__:null,default:Yg},Symbol.toStringTag,{value:"Module"})),mE=()=>o.jsx(A,{text:"Grey Button"}),gE=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button text="Grey Button"/>
/* END */

export default Component
`,Xg=()=>o.jsx(R,{code:"text",Component:mE,Source:gE,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"text"})," property can be used to set the text for the button."]})}),xE=Object.freeze(Object.defineProperty({__proto__:null,default:Xg},Symbol.toStringTag,{value:"Module"})),vE=()=>o.jsx(A,{text:"Tooltip",label:"This is a tooltip",tooltip:"top left"}),yE=`import React from 'react'
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
`,Qg=()=>o.jsx(R,{code:"tooltip",Component:vE,Source:yE,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"tooltip"})," property can be used to set the",o.jsx("code",{children:"data-tooltip"})," property on the button.  This can be used to indicate the direction of the tooltip, e.g. ",o.jsx("code",{children:"top"}),","," ",o.jsx("code",{children:"right"}),", ",o.jsx("code",{children:"top right"}),", etc. The tooltip content should be defined using the ",o.jsx("code",{children:"label"})," property."]})}),CE=Object.freeze(Object.defineProperty({__proto__:null,default:Qg},Symbol.toStringTag,{value:"Module"})),jE=()=>o.jsx(A,{text:"Grey Button",type:"submit"}),bE=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    text="Grey Button"
    type="submit"
  />
/* END */

export default Component
`,qg=()=>o.jsxs(R,{code:"type",Component:jE,Source:bE,undent:2,expand:!0,children:[o.jsxs("p",{children:["The default ",o.jsx("code",{children:"type"})," for a button is set to ",o.jsx("code",{children:"button"}),". In most cases this has no effect.  However, inside the scope of a ",o.jsx("code",{children:"form"})," element, the ",o.jsx("code",{children:"type"})," for a button would usually default to being ",o.jsx("code",{children:"submit"}),".  When clicked, the button would submit the form."]}),o.jsxs("p",{children:["This behaviour usually surprises people (it certainly catches me out from time to time).  Having an explicit default button type prevents this from happening.  When you really do want to add a button to submit a form, you should explicitly set the ",o.jsx("code",{children:"type"})," to"," ",o.jsx("code",{children:"submit"}),".  You can also set it to ",o.jsx("code",{children:"reset"})," to make a reset button for a form."]})]}),SE=Object.freeze(Object.defineProperty({__proto__:null,default:qg},Symbol.toStringTag,{value:"Module"})),wE=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Button"}),o.jsx(Rg,{}),o.jsxs(ft,{tocName:"button",children:[o.jsx(ce,{title:"Properties"}),o.jsx(Xg,{}),o.jsx(Vg,{}),o.jsx(Bg,{}),o.jsx($g,{}),o.jsx(Ag,{}),o.jsx(Ig,{}),o.jsx(Kg,{}),o.jsx(Wg,{}),o.jsx(Dg,{}),o.jsx(Pg,{}),o.jsx(Mg,{}),o.jsx(Zg,{}),o.jsx(Gg,{}),o.jsx(Yg,{}),o.jsx(zg,{}),o.jsx(Fg,{}),o.jsx(Ug,{}),o.jsx(Hg,{}),o.jsx(Qg,{}),o.jsx(qg,{}),o.jsx(ce,{title:"Components"}),o.jsx(Og,{})]})]}),_E=Object.freeze(Object.defineProperty({__proto__:null,default:wE},Symbol.toStringTag,{value:"Module"})),TE=({text:e})=>o.jsx("span",{className:"border pad pad-h-4 mar",children:e}),kE=()=>o.jsx(Qr,{buttons:[{text:"One"},{text:"Two"}],Button:TE}),EE=`import { Buttons } from '@/src/index.jsx'

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
`,Jg=()=>o.jsx(R,{code:"Button",Component:kE,Source:EE,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"Button"})," property (note the capital B) can be used to define a different component for rendering each button."]})}),LE=Object.freeze(Object.defineProperty({__proto__:null,default:Jg},Symbol.toStringTag,{value:"Module"})),NE=()=>o.jsxs(Qr,{children:[o.jsx(A,{text:"One",outline:!0}),o.jsx(A,{text:"Two",outline:!0})]}),RE=`import { Buttons, Button } from '@/src/index.jsx'

{/* START */}
import React from 'react'
// PRETEND: import { Buttons, Button } from '@abw/badger-react-ui'

const ButtonsExample = () =>
  <Buttons>
    <Button text="One" outline/>
    <Button text="Two" outline/>
  </Buttons>

export default ButtonsExample
`,e0=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"Buttons"})," component can be used to render a connected set of buttons."]}),o.jsx(je,{Component:NE,code:RE,expand:!0})]}),OE=Object.freeze(Object.defineProperty({__proto__:null,default:e0},Symbol.toStringTag,{value:"Module"})),DE=()=>o.jsx(o.Fragment,{children:o.jsx(Qr,{outline:!0,buttonClass:"blue shadow-1",buttons:[{text:"One"},{text:"Two"}]})}),ME=`import React from 'react'
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
`,t0=()=>o.jsx(R,{code:"buttonClass",Component:DE,Source:ME,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"buttonClass"})," property can be used to add a CSS class to each button. Badger CSS targets the ",o.jsx("code",{children:"button"})," element for styling so you don't need to add any special classes to get the default styling."]})}),AE=Object.freeze(Object.defineProperty({__proto__:null,default:t0},Symbol.toStringTag,{value:"Module"})),PE=()=>o.jsx(o.Fragment,{children:o.jsx(Qr,{buttons:[{text:"One",outline:!0},{text:"Two",outline:!0}]})}),$E=`import React from 'react'
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
`,n0=()=>o.jsx(R,{code:"buttons",Component:PE,Source:$E,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"buttons"})," property can be used to define properties for a set of buttons."]})}),IE=Object.freeze(Object.defineProperty({__proto__:null,default:n0},Symbol.toStringTag,{value:"Module"})),BE=()=>o.jsx(o.Fragment,{children:o.jsx(Qr,{outline:!0,className:"buttons border pad-2 bgc-90 bgd-10 bdr-2",buttons:[{text:"One"},{text:"Two"}]})}),zE=`import React from 'react'
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
`,r0=()=>o.jsx(R,{code:"className",Component:BE,Source:zE,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"className"})," property can be used to set the CSS class for the buttons container element.  The default value is"," ",o.jsx("code",{children:"buttons"}),".  If you want to use the default styles provided by Badger CSS then you should include ",o.jsx("code",{children:"buttons"})," in the value you provide for ",o.jsx("code",{children:"className"})]})}),FE=Object.freeze(Object.defineProperty({__proto__:null,default:r0},Symbol.toStringTag,{value:"Module"})),UE=()=>o.jsx(o.Fragment,{children:o.jsx(Qr,{outline:!0,buttons:[{text:"One"},{text:"Two"},{text:"Three",outline:!1,color:"orange"}]})}),HE=`import React from 'react'
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
`,o0=()=>o.jsx(R,{code:"outline",Component:UE,Source:HE,undent:4,expand:!0,children:o.jsxs("p",{children:["Additional properties passed to the ",o.jsx("code",{children:"Buttons"})," component will be forwarded to each ",o.jsx("code",{children:"Button"})," component.  For example, you can set the ",o.jsx("code",{children:"outline"})," property on the parent",o.jsx("code",{children:"Buttons"})," component so that you don't have to repeat it for each button.  However, individual buttons can override any of these properties."]})}),VE=Object.freeze(Object.defineProperty({__proto__:null,default:o0},Symbol.toStringTag,{value:"Module"})),WE=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Buttons"}),o.jsx(e0,{}),o.jsxs(ft,{tocName:"buttons",children:[o.jsx(ce,{title:"Properties"}),o.jsx(n0,{}),o.jsx(o0,{}),o.jsx(r0,{}),o.jsx(t0,{}),o.jsx(ce,{title:"Components"}),o.jsx(Jg,{})]})]}),ZE=Object.freeze(Object.defineProperty({__proto__:null,default:WE},Symbol.toStringTag,{value:"Module"})),KE=()=>o.jsx(fj,{text:"I like badgers",onChange:e=>console.log(`Checked: ${e}`)}),GE=`import { CheckboxState } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { CheckboxState } from '@abw/badger-react-ui

const CheckboxStateExample = () =>
  <CheckboxState
    text="I like badgers"
    onChange={checked => console.log(\`Checked: \${checked}\`)}
  />

export default CheckboxStateExample`,a0=()=>o.jsx(R,{code:"CheckboxState",Component:KE,Source:GE,expand:!0,children:o.jsx("div",{children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"CheckboxState"})," function can be used to generate a Checkbox with internal state."]})})}),YE=Object.freeze(Object.defineProperty({__proto__:null,default:a0},Symbol.toStringTag,{value:"Module"})),XE=()=>{const[e,t]=v.useState(!1);return o.jsx(Fn,{text:"I like badgers",checked:e,onChange:t})},QE=`import { Checkbox } from '@/src/index.jsx'

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

export default CheckboxExample`,s0=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"Checkbox"})," component renders a checkbox with a label."]}),o.jsx(je,{Component:XE,code:QE,expand:!0})]}),qE=Object.freeze(Object.defineProperty({__proto__:null,default:s0},Symbol.toStringTag,{value:"Module"})),JE=()=>{const[e,t]=v.useState(!1);return o.jsx(Fn,{text:"I like badgers",checked:e,onChange:t})},eL=`import { Checkbox } from '@/src/index.jsx'
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

export default CheckedExample`,l0=()=>o.jsx(R,{code:"checked",Component:JE,Source:eL,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"checked"})," property should be passed to indicate if the checkbox is checked (",o.jsx("code",{children:"true"}),") or not (",o.jsx("code",{children:"false"}),")."]})}),tL=Object.freeze(Object.defineProperty({__proto__:null,default:l0},Symbol.toStringTag,{value:"Module"})),nL=()=>{const[e,t]=v.useState(!1);return o.jsx(Fn,{checkedText:"I like badgers (well done!)",uncheckedText:"I like badgers (you really should!)",checked:e,onChange:t})},rL=`import { Checkbox } from '@/src/index.jsx'
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

export default CheckedTextExample`,i0=()=>o.jsx(R,{code:"checkedText / uncheckedText",Component:nL,Source:rL,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"checkedText"})," and ",o.jsx("code",{children:"uncheckedText"})," properties can be used to provide different text for the checked and unchecked states."]})}),oL=Object.freeze(Object.defineProperty({__proto__:null,default:i0},Symbol.toStringTag,{value:"Module"})),aL=()=>{const[e,t]=v.useState(!1);return o.jsx(Fn,{text:"I like badgers",className:"large border",checked:e,onChange:t})},sL=`import { Checkbox } from '@/src/index.jsx'
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

export default ClassName`,c0=()=>o.jsx(R,{code:"className",Component:aL,Source:sL,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"className"})," property can be used to add a CSS class to the checkbox ",o.jsx("code",{children:"label"})," element."]})}),lL=Object.freeze(Object.defineProperty({__proto__:null,default:c0},Symbol.toStringTag,{value:"Module"})),iL=()=>{const[e,t]=v.useState(!1);return o.jsx(Fn,{disabled:!0,text:"I like badgers",checked:e,onChange:t})},cL=`import { Checkbox } from '@/src/index.jsx'
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

export default DisabledExample`,u0=()=>o.jsx(R,{code:"disabled",Component:iL,Source:cL,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"disabled"})," property can be set to disable a checkbox."]})}),uL=Object.freeze(Object.defineProperty({__proto__:null,default:u0},Symbol.toStringTag,{value:"Module"})),dL=()=>{const[e,t]=v.useState(!1);return o.jsx(Fn,{text:"I like badgers",checked:e,onChange:t})},pL=`import { Checkbox } from '@/src/index.jsx'
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

export default OnChangeExample`,d0=()=>o.jsx(R,{code:"onChange",Component:dL,Source:pL,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"onChange"})," property should be used to define a function to handle changes in the state."]})}),fL=Object.freeze(Object.defineProperty({__proto__:null,default:d0},Symbol.toStringTag,{value:"Module"})),hL=()=>{const[e,t]=v.useState(!1);return o.jsx(Fn,{text:"Badger are the best!",checked:e,onChange:t})},mL=`import { Checkbox } from '@/src/index.jsx'
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

export default TextExample`,p0=()=>o.jsx(R,{code:"text",Component:hL,Source:mL,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"text"})," property should be used to set the text for the checkbox."]})}),gL=Object.freeze(Object.defineProperty({__proto__:null,default:p0},Symbol.toStringTag,{value:"Module"})),xL=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Checkbox"}),o.jsx(s0,{}),o.jsxs(ft,{tocName:"checkbox",children:[o.jsx(ce,{title:"Properties"}),o.jsx(p0,{}),o.jsx(l0,{}),o.jsx(i0,{}),o.jsx(d0,{}),o.jsx(c0,{}),o.jsx(u0,{}),o.jsx(ce,{title:"Components"}),o.jsx(a0,{})]})]}),vL=Object.freeze(Object.defineProperty({__proto__:null,default:xL},Symbol.toStringTag,{value:"Module"})),yL=()=>o.jsx(o.Fragment,{children:o.jsx(jn,{text:"Delete",color:"red",iconRight:"trash",onClick:()=>window.alert("Confirmed!")})}),CL=`import { Confirm } from '@/src/index.jsx'

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

export default ConfirmExample`,f0=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"Confirm"})," component provides an extra safety net for potentially dangerous operations.  When the user click on the button it then prompts them to confirm or cancel the action."]}),o.jsxs("p",{className:"cols-2 stack-desktop",children:["Additional properties not listed below are forwarded onto the initial button.  For example, you can set the ",o.jsx("code",{children:"text"}),","," ",o.jsx("code",{children:"color"}),", add icons, and so on, just like you would for any other button."]}),o.jsx(je,{Component:yL,code:CL,expand:!0})]}),jL=Object.freeze(Object.defineProperty({__proto__:null,default:f0},Symbol.toStringTag,{value:"Module"})),bL=()=>o.jsx(jn,{text:"Delete",color:"red",cancel:{text:"Go Back",color:"yellow",outline:!1,iconLeft:"angle-left"}}),SL=`import React from 'react'
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

export default CancelExample`,h0=()=>o.jsx(R,{code:"cancel",Component:bL,Source:SL,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"cancel"})," property can be used to set properties for the cancel button."]})}),wL=Object.freeze(Object.defineProperty({__proto__:null,default:h0},Symbol.toStringTag,{value:"Module"})),_L=()=>o.jsx(jn,{text:"Delete",color:"red",cancelText:"Nah",cancelColor:"blue",cancelIcon:"angle-left"}),TL=`import React from 'react'
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

export default CancelExample`,m0=()=>o.jsx(R,{id:"cancelProps",code:"cancelXXX",Component:_L,Source:TL,undent:2,expand:!0,children:o.jsxs("p",{children:["You can also set individual properties for the cancel button",o.jsx("code",{children:"cancelIcon"}),","," ",o.jsx("code",{children:"cancelText"}),","," ",o.jsx("code",{children:"cancelColor"})," and"," ",o.jsx("code",{children:"cancelClass"}),"."]})}),kL=Object.freeze(Object.defineProperty({__proto__:null,default:m0},Symbol.toStringTag,{value:"Module"})),EL=()=>o.jsx(o.Fragment,{children:o.jsx(jn,{className:"buttons border pad-2 bgc-90 bgd-10 bdr-2",icon:"trash",color:"red"})}),LL=`import React from 'react'
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
`,g0=()=>o.jsx(R,{code:"className",Component:EL,Source:LL,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"className"})," property can be used to set the CSS class for the buttons container element.  The default value is"," ",o.jsx("code",{children:"buttons"}),".  If you want to use the default styles provided by Badger CSS then you should include ",o.jsx("code",{children:"buttons"})," in the value you provide for ",o.jsx("code",{children:"className"})]})}),NL=Object.freeze(Object.defineProperty({__proto__:null,default:g0},Symbol.toStringTag,{value:"Module"})),RL=()=>o.jsx(jn,{text:"Click to Delete",color:"red"}),OL=`import React from 'react'
import { Confirm } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Confirm
    text="Click to Delete"
    color="red"
  />
/* END */

export default Component
`,x0=()=>o.jsx(R,{code:"color",Component:RL,Source:OL,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"color"})," property can be used to set the color for the initial button."]})}),DL=Object.freeze(Object.defineProperty({__proto__:null,default:x0},Symbol.toStringTag,{value:"Module"})),ML=()=>o.jsx(jn,{text:"Delete",color:"red",confirm:{text:"Yep, do it!",color:"green",iconRight:"angle-right"}}),AL=`import React from 'react'
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

export default ConfirmExample`,v0=()=>o.jsx(R,{code:"confirm",Component:ML,Source:AL,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"confirm"})," property can be used to set properties for the confirmation button."]})}),PL=Object.freeze(Object.defineProperty({__proto__:null,default:v0},Symbol.toStringTag,{value:"Module"})),$L=()=>o.jsx(jn,{text:"Delete",color:"red",confirmText:"Yep",confirmColor:"green",confirmIcon:"trash"}),IL=`import React from 'react'
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

export default ConfirmProps`,y0=()=>o.jsx(R,{id:"confirmProps",code:"confirmXXX",Component:$L,Source:IL,undent:2,expand:!0,children:o.jsxs("p",{children:["You can also set individual properties for the confirm button",o.jsx("code",{children:"confirmIcon"}),","," ",o.jsx("code",{children:"confirmText"}),","," ",o.jsx("code",{children:"confirmColor"})," and"," ",o.jsx("code",{children:"confirmClass"}),"."]})}),BL=Object.freeze(Object.defineProperty({__proto__:null,default:y0},Symbol.toStringTag,{value:"Module"})),zL=()=>o.jsx(jn,{text:"Click to Delete",color:"red",iconRight:"trash"}),FL=`import React from 'react'
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
`,C0=()=>o.jsx(R,{code:"iconRight",Component:zL,Source:FL,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"iconRight"})," property can be used to add an icon to the right.  Or ",o.jsx("code",{children:"iconLeft"})," can be used to add an icon to the left. Or just an ",o.jsx("code",{children:"icon"})," if you want an icon without any text."]})}),UL=Object.freeze(Object.defineProperty({__proto__:null,default:C0},Symbol.toStringTag,{value:"Module"})),HL=()=>o.jsx(jn,{text:"Delete",color:"red",onClick:()=>window.alert("Deleted!")}),VL=`import React from 'react'
import { Confirm } from '@/src/index.jsx'

const OnClickExample = () =>
  /* START */
  <Confirm
    text="Delete"
    color="red"
    onClick={() => window.alert('Deleted!')}
  />
  /* END */

export default OnClickExample`,j0=()=>o.jsx(R,{code:"onClick",Component:HL,Source:VL,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"onClick"})," property should be used to define the handler which will be called when the user confirms the action."]})}),WL=Object.freeze(Object.defineProperty({__proto__:null,default:j0},Symbol.toStringTag,{value:"Module"})),ZL=()=>o.jsx(jn,{text:"Click to Delete"}),KL=`import React from 'react'
import { Confirm } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Confirm
    text="Click to Delete"
  />
/* END */

export default Component
`,b0=()=>o.jsx(R,{code:"text",Component:ZL,Source:KL,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"text"})," property can be used to set the text for the initial button."]})}),GL=Object.freeze(Object.defineProperty({__proto__:null,default:b0},Symbol.toStringTag,{value:"Module"})),YL=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Confirm"}),o.jsx(f0,{}),o.jsxs(ft,{tocName:"confirm",children:[o.jsx(ce,{title:"Properties"}),o.jsx(b0,{}),o.jsx(x0,{}),o.jsx(C0,{}),o.jsx(g0,{}),o.jsx(h0,{}),o.jsx(m0,{}),o.jsx(v0,{}),o.jsx(y0,{}),o.jsx(ce,{title:"Event Handlers"}),o.jsx(j0,{})]})]}),XL=Object.freeze(Object.defineProperty({__proto__:null,default:YL},Symbol.toStringTag,{value:"Module"})),QL=[{name:"Alan",animal:"Anteater",id:10,role:"admin"},{name:"Bobby",animal:"Badger",id:20,role:"admin"},{name:"Brenda",animal:"Badger",id:30,role:"admin"},{name:"Christina",animal:"Cat",id:40,role:"user"},{name:"Derek",animal:"Dog",id:50,role:"user"},{name:"Delia",animal:"Donkey",id:60,role:"admin"},{name:"Edwin",animal:"Elephant",id:70,role:"admin"},{name:"Frank",animal:"Ferret",id:80,role:"user"},{name:"Felicity",animal:"Fox",id:90,role:"admin"},{name:"Gertrude",animal:"Goat",id:11,role:"admin"},{name:"Hector",animal:"Hamster",id:12,role:"admin"},{name:"Ian",animal:"Iguana",id:13,role:"user"},{name:"Julie",animal:"Jellyfish",id:14,role:"user"},{name:"Kevin",animal:"Koala",id:21,role:"user"},{name:"Lionel",animal:"Llama",id:22,role:"user"},{name:"Mary",animal:"Magpie",id:23,role:"user"},{name:"Nerys",animal:"Narwhal",id:24,role:"user"},{name:"Oliver",animal:"Octopus",id:31,role:"user"},{name:"Penny",animal:"Panda",id:32,role:"admin"},{name:"Quentin",animal:"Quail",id:33,role:"admin"},{name:"Roger",animal:"Raccoon",id:41,role:"user"},{name:"Simon",animal:"Stoat",id:42,role:"user"},{name:"Terry",animal:"Tiger",id:43,role:"user"},{name:"Ursula",animal:"Unicorn",id:101,role:"user"},{name:"Violet",animal:"Vole",id:102,role:"user"},{name:"Willy",animal:"Wombat",id:103,role:"user"},{name:"Xerces",animal:"Xenus",id:201,role:"user"},{name:"Yvonne",animal:"Yaz",id:202,role:"user"},{name:"Zebedee",animal:"Zebra",id:203,role:"user"}],qL=()=>o.jsx(zb,{color:"brand",rows:QL,columns:"id name animal role",pager:{size:"small"}}),JL=`import { Datatable } from '@/src/index.jsx'

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

export default DatatableExample`,S0=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"Datatable"})," component can be used to display, sort, filter and page sets of data."]}),o.jsx(je,{Component:qL,code:JL})]}),eN=Object.freeze(Object.defineProperty({__proto__:null,default:S0},Symbol.toStringTag,{value:"Module"})),tN=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Datatable"}),o.jsx(S0,{}),o.jsx(ft,{tocName:"datatable",children:o.jsx(ce,{title:"Properties"})})]}),nN=Object.freeze(Object.defineProperty({__proto__:null,default:tN},Symbol.toStringTag,{value:"Module"})),rN=()=>o.jsx(Ye,{summary:"Click to reveal",children:"This is the content that is revealed."}),oN=`import { Details } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Details } from '@abw/badger-react-ui

const DetailsExample = () =>
  <Details summary="Click to reveal">
    This is the content that is revealed.
  </Details>

export default DetailsExample`,w0=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"Details"})," component displays a summary with revealable content using the native HTML ",o.jsx("code",{children:"details"})," element."]}),o.jsx(je,{Component:rN,code:oN})]}),aN=Object.freeze(Object.defineProperty({__proto__:null,default:w0},Symbol.toStringTag,{value:"Module"})),sN=()=>o.jsxs("div",{className:"grid-1 gap-4",children:[o.jsx(Ye,{summary:"Bordered",border:!0,children:"This is the content that is revealed."}),o.jsx(Ye,{summary:"Bordered and Lined",border:!0,lined:!0,children:"This is the content that is revealed."}),o.jsx(Ye,{summary:"Wide Border",border:3,lined:!0,children:"This is the content that is revealed."})]}),lN=`import React from 'react'
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

export default DetailsExample`,_0=()=>o.jsx(R,{code:"border",Component:sN,Source:lN,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"border"})," property can be used to add a CSS class to add a border around the component.  By itself it will add a one pixel border.  You can also set it to an integer (in pixels) for a wider border.  The same border width will also be applied to the line separating the summary and content when the ",o.jsx("code",{children:"lined"})," ","property is used."]})}),iN=Object.freeze(Object.defineProperty({__proto__:null,default:_0},Symbol.toStringTag,{value:"Module"})),cN=()=>o.jsxs("div",{className:"grid-1 gap-4",children:[o.jsx(Ye,{summary:"Blue Border",color:"blue",border:!0,lined:!0,children:"This is the content that is revealed."}),o.jsx(Ye,{summary:"Blue Shaded",color:"blue",shaded:!0,lined:!0,border:!0,children:"This is the content that is revealed."})]}),uN=`import React from 'react'
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

export default DetailsExample`,T0=()=>o.jsx(R,{code:"color",Component:cN,Source:uN,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"color"})," property can be used to set the color range. It is most commonly used in conjunction with the ",o.jsx("code",{children:"border"}),","," ",o.jsx("code",{children:"lined"})," and ",o.jsx("code",{children:"shaded"})," properties."]})}),dN=Object.freeze(Object.defineProperty({__proto__:null,default:T0},Symbol.toStringTag,{value:"Module"})),pN=()=>o.jsx("div",{className:"grid-1 gap-4",children:o.jsx(Ye,{summary:"This is the summary",content:"This is the content that is revealed."})}),fN=`import React from 'react'
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

export default DetailsExample`,k0=()=>o.jsx(R,{code:"content",Component:pN,Source:fN,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"content"})," property can be used as a short-cut to set the body content for simple cases."]})}),hN=Object.freeze(Object.defineProperty({__proto__:null,default:k0},Symbol.toStringTag,{value:"Module"})),mN=()=>o.jsx(Ye,{summary:"Lined Details",lined:!0,children:"This is the content that is revealed."}),gN=`import React from 'react'
import { Details } from '@/src/index.jsx'

const DetailsExample = () =>
  /* START */
  <Details summary="Lined Details" lined>
    This is the content that is revealed.
  </Details>
  /* END */

export default DetailsExample`,E0=()=>o.jsx(R,{code:"lined",Component:mN,Source:gN,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"lined"})," property can be used to add a CSS class to add a line between the summary and content."]})}),xN=Object.freeze(Object.defineProperty({__proto__:null,default:E0},Symbol.toStringTag,{value:"Module"})),vN=()=>o.jsx("div",{className:"grid-1 gap-4",children:o.jsx(Ye,{summary:"This is the summary",open:!0,children:"This is the content that is revealed."})}),yN=`import React from 'react'
import { Details } from '@/src/index.jsx'

const DetailsExample = () =>
  <div className="grid-1 gap-4">
    {/* START */}
    <Details summary="This is the summary" open>
      This is the content that is revealed.
    </Details>
    {/* END */}
  </div>

export default DetailsExample`,L0=()=>o.jsx(R,{code:"open",Component:vN,Source:yN,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"open"})," property can be set to make the details initially open."]})}),CN=Object.freeze(Object.defineProperty({__proto__:null,default:L0},Symbol.toStringTag,{value:"Module"})),jN=()=>o.jsxs("div",{className:"grid-1 gap-4",children:[o.jsx(Ye,{summary:"Border Radius",border:!0,lined:!0,radius:2,children:"This is the content that is revealed."}),o.jsx(Ye,{summary:"Border Radius",border:!0,lined:!0,radius:4,children:"This is the content that is revealed."})]}),bN=`import React from 'react'
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

export default DetailsExample`,N0=()=>o.jsx(R,{code:"radius",Component:jN,Source:bN,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"radius"})," property can be used to set the border radius. It should be an integer in units of 0.25rem."]})}),SN=Object.freeze(Object.defineProperty({__proto__:null,default:N0},Symbol.toStringTag,{value:"Module"})),wN=()=>o.jsxs("div",{className:"grid-1 gap-4",children:[o.jsx(Ye,{summary:"Shaded",shaded:!0,children:"This is the content that is revealed."}),o.jsx(Ye,{summary:"Shaded and Border",border:!0,shaded:!0,children:"This is the content that is revealed."}),o.jsx(Ye,{summary:"Shaded, Lined and Border",border:!0,shaded:!0,lined:!0,children:"This is the content that is revealed."})]}),_N=`import React from 'react'
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

export default DetailsExample`,R0=()=>o.jsx(R,{code:"shaded",Component:wN,Source:_N,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"shaded"})," property can be used to add shading."]})}),TN=Object.freeze(Object.defineProperty({__proto__:null,default:R0},Symbol.toStringTag,{value:"Module"})),kN=()=>o.jsxs("div",{className:"grid-1 gap-4",children:[o.jsx(Ye,{summary:"Shadow 1",border:!0,shaded:!0,shadow:1,children:"This is the content that is revealed."}),o.jsx(Ye,{summary:"Shadow 3",border:!0,shaded:!0,shadow:3,children:"This is the content that is revealed."}),o.jsx(Ye,{summary:"Shadow 5",border:!0,shaded:!0,shadow:5,children:"This is the content that is revealed."})]}),EN=`import React from 'react'
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

export default DetailsExample`,O0=()=>o.jsx(R,{code:"shadow",Component:kN,Source:EN,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"shadow"})," property can be used to add a drop shadow. This can be any integer from 1 to 5."]})}),LN=Object.freeze(Object.defineProperty({__proto__:null,default:O0},Symbol.toStringTag,{value:"Module"})),NN=()=>o.jsxs("div",{className:"grid-1 gap-4",children:[o.jsx(Ye,{summary:"This is the summary",children:"This is the content that is revealed."}),o.jsx(Ye,{border:!0,lined:!0,summary:o.jsxs("div",{className:"wide flex space middle pad-r-2",children:[o.jsx("div",{children:"Control Panel"}),o.jsx(J,{name:"cog"})]}),children:"This is the content that is revealed."})]}),RN=`import React from 'react'
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

export default DetailsExample`,D0=()=>o.jsx(R,{code:"summary",Component:NN,Source:RN,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"summary"})," property is used to set the summary text. It can be a text string or any JSX content."]})}),ON=Object.freeze(Object.defineProperty({__proto__:null,default:D0},Symbol.toStringTag,{value:"Module"})),DN=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Details"}),o.jsx(w0,{}),o.jsxs(ft,{tocName:"details",children:[o.jsx(ce,{title:"Properties"}),o.jsx(D0,{}),o.jsx(k0,{}),o.jsx(L0,{}),o.jsx(E0,{}),o.jsx(_0,{}),o.jsx(N0,{}),o.jsx(R0,{}),o.jsx(O0,{}),o.jsx(T0,{}),o.jsx(ce,{title:"CSS Classes"}),o.jsxs(K,{code:"className",children:["Set a CSS class for the ",o.jsx("code",{children:"details"})," container element."]}),o.jsxs(K,{code:"summaryClass",children:["Set a CSS class for the ",o.jsx("code",{children:"summary"})," element."]}),o.jsxs(K,{code:"contentClass",children:["Set a CSS class for the content ",o.jsx("code",{children:"div"})," element."]}),o.jsx(ce,{title:"Components"}),o.jsx(K,{code:"Summary",id:"Summary-component",children:"Renders the summary element."}),o.jsx(K,{code:"Content",id:"Content=component",children:"Renders the content."})]})]}),MN=Object.freeze(Object.defineProperty({__proto__:null,default:DN},Symbol.toStringTag,{value:"Module"})),AN=()=>o.jsx(at,{text:"Dropdown Menu",options:["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger","Colin Camel","David Donkey","Eddie Elephant","Franky Ferret","Gina Goat","Helen Horse","Ian Iguana","Juliet Jackdaw","Kevin Kangaroo","Linda Llama","Mike Monkey"]}),PN=`import { Dropdown } from '@/src/index.jsx'

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

export default DropdownExample`,M0=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"Dropdown"})," component generates a dropdown menu"]}),o.jsxs("div",{className:"cols-2 stack-desktop",children:[o.jsx("p",{children:"The default behaviour is to open the dropdown menu when the user clicks on the trigger."}),o.jsxs("p",{children:["Keyboard navigation is also supported.  The user can ",o.jsx("code",{children:"TAB"})," ","to the trigger and then press ",o.jsx("code",{children:"SPACE"}),", ",o.jsx("code",{children:"ENTER"}),","," ",o.jsx("code",{children:"DOWN"})," or ",o.jsx("code",{children:"UP"})," to open the menu."]}),o.jsxs("p",{children:["Once the menu is open, the ",o.jsx("code",{children:"DOWN"})," and ",o.jsx("code",{children:"UP"})," keys"," ","can be used to select menu items, ",o.jsx("code",{children:"ENTER"})," or"," ",o.jsx("code",{children:"SPACE"})," will select the current item and ",o.jsx("code",{children:"ESCAPE"})," ","will close the menu."]})]}),o.jsx(je,{Component:AN,code:PN})]}),$N=Object.freeze(Object.defineProperty({__proto__:null,default:M0},Symbol.toStringTag,{value:"Module"})),IN=()=>o.jsx(at,{text:"Dropdown Menu",iconLeft:"angle-down",options:[{text:"Item One"},{text:"Item Two"},{text:"Item Three"}]}),BN=`import React from 'react'
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

export default DropdownExample`,A0=()=>o.jsx(R,{code:"iconLeft",Component:IN,Source:BN,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"iconLeft"})," property can used to define an icon for the left side of the trigger.  The ",o.jsx("code",{children:"iconLeftClass"})," can be used to add a CSS class for it."]})}),zN=Object.freeze(Object.defineProperty({__proto__:null,default:A0},Symbol.toStringTag,{value:"Module"})),FN=()=>o.jsx(at,{text:"Dropdown Menu",iconLeft:"angle-right",iconLeftRotate:90,options:[{text:"Item One"},{text:"Item Two"},{text:"Item Three"}]}),UN=`import React from 'react'
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

export default DropdownExample`,P0=()=>o.jsx(R,{code:"iconLeftRotate",Component:FN,Source:UN,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"iconLeftRotate"})," property can used to specify the rotation (in degrees) of the icon when the dropdown is open."]})}),HN=Object.freeze(Object.defineProperty({__proto__:null,default:P0},Symbol.toStringTag,{value:"Module"})),VN=()=>o.jsx(at,{right:!0,text:"Dropdown Menu",iconRight:"angle-down",options:[{text:"Item One"},{text:"Item Two"},{text:"Item Three"}]}),WN=`import React from 'react'
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

export default DropdownExample`,$0=()=>o.jsx(R,{code:"iconRight",Component:VN,Source:WN,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"iconRight"})," property can used to define an icon for the left side of the trigger.  The ",o.jsx("code",{children:"iconRightClass"})," can be used to add a CSS class for it."]})}),ZN=Object.freeze(Object.defineProperty({__proto__:null,default:$0},Symbol.toStringTag,{value:"Module"})),KN=()=>o.jsx(at,{text:"Dropdown Menu",iconRight:"angle-left",iconRightRotate:-90,options:[{text:"Item One"},{text:"Item Two"},{text:"Item Three"}]}),GN=`import React from 'react'
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

export default DropdownExample`,I0=()=>o.jsx(R,{code:"iconRightRotate",Component:KN,Source:GN,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"iconRightRotate"})," property can used to specify the rotation (in degrees) of the icon when the dropdown is open."]})}),YN=Object.freeze(Object.defineProperty({__proto__:null,default:I0},Symbol.toStringTag,{value:"Module"})),XN=()=>o.jsx(at,{text:"Dropdown Menu",onSelect:e=>alert(`You selected: ${e.text}`),options:[{text:"Item One"},{text:"Item Two"},{text:"Item Three"}]}),QN=`import React from 'react'
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

export default DropdownExample`,B0=()=>o.jsx(R,{code:"onSelect",Component:XN,Source:QN,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"onSelect"})," property should be used to define a handler which will be called when an item is selected, either by being clicked on or by keyboard selection.  The handler will be passed the data for the item that was selected."]})}),qN=Object.freeze(Object.defineProperty({__proto__:null,default:B0},Symbol.toStringTag,{value:"Module"})),JN=()=>o.jsx(at,{openOnHover:!0,text:"Dropdown Menu",options:[{text:"Item One"},{text:"Item Two"},{text:"Item Three"}]}),eR=`import React from 'react'
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

export default DropdownExample`,z0=()=>o.jsx(R,{code:"openOnHover",Component:JN,Source:eR,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"openOnHover"})," property can added to make the menu open when the mouse hovers over the trigger."]})}),tR=Object.freeze(Object.defineProperty({__proto__:null,default:z0},Symbol.toStringTag,{value:"Module"})),nR=()=>o.jsx(at,{text:"Simple Options",options:["Hello","World",10,11]}),rR=`import React from 'react'
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

export default DropdownExample`,oR=()=>o.jsx(at,{text:"Option Separators",options:["One","Two","Three",{separator:!0},"Eleven","Twelve","Thirteen",{separator:!0},"One Hundred","Two Hundred","Three Hundred"]}),aR=`import React from 'react'
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

export default DropdownExample`,sR=()=>o.jsx(at,{text:"Object Options",options:[{text:"Star",iconLeft:"star"},{text:"Heart",iconRight:"heart",className:"text-right"},{text:"Move",iconLeft:"angle-left",iconRight:"angle-right"},{text:o.jsxs("div",{className:"flex space small",children:[o.jsx("div",{children:"Foo"}),o.jsx("div",{children:"Bar"})]})}]}),lR=`import React from 'react'
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

export default DropdownExample`,iR=()=>o.jsx(at,{text:"Option Headings",options:[{heading:"Single Digit Numbers"},"One","Two","Three",{heading:"Double Digit Numbers"},"Eleven","Twelve","Thirteen",{heading:"Triple Digit Numbers"},"One Hundred","Two Hundred","Three Hundred"]}),cR=`import React from 'react'
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

export default DropdownExample`,uR=()=>o.jsx(at,{text:"Disabled Options",options:[{text:"Disabled #1",disabled:!0},{text:"Enabled #2"},{text:"Disabled #3",disabled:!0},{text:"Enabled #4"},{text:"Disabled #5",disabled:!0}]}),dR=`import React from 'react'
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

export default DropdownExample`,F0=()=>o.jsxs(K,{code:"options",children:[o.jsxs("div",{className:"cols-2 stack-desktop mar-b-4",children:[o.jsxs("p",{children:["The ",o.jsx("code",{children:"options"})," property should be used to define an array of options to display in the menu."]}),o.jsx("p",{children:"For simple cases, each element in the array can be a text string or numerical value."})]}),o.jsx(je,{Component:nR,code:rR,caption:"options",expand:!1,undent:2}),o.jsxs("div",{className:"cols-2 stack-desktop mar-b-4",children:[o.jsxs("p",{children:["An element in the ",o.jsx("code",{children:"options"})," array can also be an object. It should contain a ",o.jsx("code",{children:"text"})," property which can be a string or JSX fragment. A ",o.jsx("code",{children:"className"})," can be included to add a CSS class to the option."]}),o.jsxs("p",{children:["The content for an element is rendered using the ",o.jsx("code",{children:"WithIcon"})," ","component from"," ",o.jsx("a",{href:"https://abw.github.io/badger-icon/",children:"Badger Icon"})," allowing you to include ",o.jsx("code",{children:"iconLeft"})," and ",o.jsx("code",{children:"iconRight"})," properties to add icons to either side, along with ",o.jsx("code",{children:"iconLeftClass"})," and"," ",o.jsx("code",{children:"iconRightClass"})," to set CSS classes for those icons."]})]}),o.jsx(je,{Component:sR,code:lR,caption:"options",expand:!1,undent:2}),o.jsx("div",{className:"cols-2 stack-desktop mar-b-4",children:o.jsxs("p",{children:["An object in the ",o.jsx("code",{children:"options"})," array can have a"," ",o.jsx("code",{children:"disabled"})," property set to ",o.jsx("code",{children:"true"})," to disable the option."]})}),o.jsx(je,{Component:uR,code:dR,caption:"options",expand:!1,undent:2}),o.jsx("div",{className:"cols-2 stack-desktop mar-b-4",children:o.jsxs("p",{children:["An object in the ",o.jsx("code",{children:"options"})," array can have a"," ",o.jsx("code",{children:"separator"})," property set to ",o.jsx("code",{children:"true"})," to create a separator."]})}),o.jsx(je,{Component:oR,code:aR,caption:"options",expand:!1,undent:2}),o.jsx("div",{className:"cols-2 stack-desktop mar-b-4",children:o.jsxs("p",{children:["An object in the ",o.jsx("code",{children:"options"})," array can have a"," ",o.jsx("code",{children:"heading"})," property to create a section heading."]})}),o.jsx(je,{Component:iR,code:cR,caption:"options",expand:!1,undent:2})]}),pR=Object.freeze(Object.defineProperty({__proto__:null,default:F0},Symbol.toStringTag,{value:"Module"})),fR=()=>o.jsx(at,{right:!0,text:"Dropdown Menu",options:[{text:"Item One"},{text:"Item Two"},{text:"Item Three"}]}),hR=`import React from 'react'
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

export default DropdownExample`,U0=()=>o.jsx(R,{code:"right",Component:fR,Source:hR,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"right"})," property can added to align the dropdown menu to the right edge of the trigger"]})}),mR=Object.freeze(Object.defineProperty({__proto__:null,default:U0},Symbol.toStringTag,{value:"Module"})),gR=()=>o.jsx(at,{text:"The Trigger Text",options:["Item One","Item Two","Item Three"]}),xR=`import React from 'react'
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

export default DropdownExample`,H0=()=>o.jsx(R,{code:"text",Component:gR,Source:xR,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"text"})," property should be used to define the text for the trigger."]})}),vR=Object.freeze(Object.defineProperty({__proto__:null,default:H0},Symbol.toStringTag,{value:"Module"})),yR=()=>o.jsx(at,{wide:!0,text:"Dropdown Menu",options:[{text:"Item One"},{text:"Item Two"},{text:"Item Three"}]}),CR=`import React from 'react'
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

export default DropdownExample`,V0=()=>o.jsx(R,{code:"wide",Component:yR,Source:CR,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"wide"})," property can added to make the menu expand to the full width of the container."]})}),jR=Object.freeze(Object.defineProperty({__proto__:null,default:V0},Symbol.toStringTag,{value:"Module"})),$o=({children:e,align:t="top"})=>o.jsx("div",{className:`grid-2 gap-h-8 stack-desktop ${t}`,style:{"--prose-width":"100%"},children:e}),bR=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Dropdown"}),o.jsx(M0,{}),o.jsxs(ft,{tocName:"dropdown",children:[o.jsx(ce,{title:"Properties"}),o.jsx(H0,{}),o.jsx(F0,{}),o.jsx(B0,{}),o.jsx(z0,{}),o.jsx(U0,{}),o.jsx(V0,{}),o.jsx(A0,{}),o.jsx(P0,{}),o.jsx($0,{}),o.jsx(I0,{}),o.jsxs($o,{children:[o.jsxs("div",{className:"flow",children:[o.jsx(ce,{title:"CSS Classes"}),o.jsxs(K,{code:"className",children:["Used to set the CSS class for the dropdown container.  The default value is ",o.jsx("code",{children:"dropdown"}),"."]}),o.jsxs(K,{code:"openClass",children:["Used to set the CSS class added to the dropdown container when the menu is open.  The default value is ",o.jsx("code",{children:"open"}),"."]}),o.jsxs(K,{code:"closedClass",children:["Used to set the CSS class added to the dropdown container when the menu is closed.  The default value is ",o.jsx("code",{children:"closed"}),"."]}),o.jsxs(K,{code:"triggerClass",children:["Used to set the CSS class added to the dropdown trigger. The default value is ",o.jsx("code",{children:"trigger"}),"."]}),o.jsxs(K,{code:"menuClass",children:["Used to set the CSS class added to the dropdown menu container. The default value is ",o.jsx("code",{children:"menu border bdr-1"}),".  The"," ",o.jsx("code",{children:"border"})," utility class adds a border and"," ",o.jsx("code",{children:"bdr-1"})," sets the border radius to 1 unit (0.25rem or 4px)."]}),o.jsxs(K,{code:"optionClass",children:["Used to set the CSS class added to each dropdown menu item. The default value is ",o.jsx("code",{children:"item no-hover"}),".  The"," ",o.jsx("code",{children:"no-hover"})," class suppresses the hover styles that would usually be applied to menu items.  Instead the"," ",o.jsx("code",{children:"active"})," class is added to the active item, selected either by hovering over it or by keyboard navigation."]}),o.jsxs(K,{code:"separatorClass",children:["Used to set the CSS class added to the dropdown menu separator. The default value is ",o.jsx("code",{children:"separator"}),"."]})]}),o.jsxs("div",{className:"flow",children:[o.jsx(ce,{title:"Components"}),o.jsxs(K,{code:"Trigger",id:"Trigger-component",children:["Renders the dropdown menu trigger.  Defaults to ",o.jsx("code",{children:"DropdownTrigger"}),"."]}),o.jsxs(K,{code:"Menu",id:"Menu-component",children:["Renders the dropdown menu.  Defaults to ",o.jsx("code",{children:"DropdownMenu"}),"."]}),o.jsxs(K,{code:"Option",id:"Option-component",children:["Renders each dropdown menu option.  Defaults to ",o.jsx("code",{children:"DropdownOption"}),"."]}),o.jsxs(K,{code:"Separator",id:"Separator-component",children:["Renders a separator between menu items.  Defaults to ",o.jsx("code",{children:"DropdownSeparator"}),"."]})]})]})]})]}),SR=Object.freeze(Object.defineProperty({__proto__:null,default:bR},Symbol.toStringTag,{value:"Module"})),wR=()=>o.jsx(J,{name:"check"}),_R=`import React from 'react'
import { Icon } from '@/src/index.jsx'

{/* START */}
// PRETEND: import { Icon } from '@abw/badger-react-ui'

const IconExample = () =>
  <Icon name="check"/>

export default IconExample
`,TR=By(0,100,5),pl=({name:e,stop:t,setStop:n,disabled:r=!1})=>o.jsxs("select",{name:e,required:!0,value:t,onChange:a=>n(a.target.value),disabled:r,children:[o.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Select Stop"}),o.jsx("option",{value:"",children:"None"}),TR.map(a=>o.jsx("option",{value:a,children:a},a))]}),kR=()=>{const[e,t]=v.useState(0),[n,r]=v.useState({name:"bars"}),a=c=>()=>{r(u=>({...u,[c]:!u[c]})),t(u=>u+1)},s=c=>u=>{r(d=>({...d,[c]:u})),t(d=>d+1)},i=`<Icon
  ${LR(n)}
/>`;return o.jsxs("div",{className:"example grid-2 gap-8 stack-desktop",children:[o.jsxs("div",{children:[o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Output"}),o.jsx("div",{className:"output mar-b-8",children:o.jsx(NR,{options:n},e)})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Markup"}),o.jsx(tr,{code:i,language:"html",expand:!0})]})]}),o.jsx(ER,{options:n,setOption:s,toggleOption:a})]})},ER=({options:e,setOption:t})=>{const n=t("name"),r=t("size"),a=t("color"),s=t("foreground"),l=t("background"),i=t("foregroundDark"),c=t("backgroundDark");return o.jsxs("div",{children:[o.jsxs("div",{className:"grid-3 gap-4 stack-mobile top",children:[o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Icon Name"}),o.jsx(Wu,{icon:e.name,setIcon:n})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Size"}),o.jsx(lg,{size:e.size,setSize:r})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Color"}),o.jsx(sg,{color:e.color,setColor:a,disabled:e.type})]})]}),o.jsxs("div",{className:"grid-2 gap-4 gap-v-0 stack-mobile top",children:[o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Foreground Stop"}),o.jsx(pl,{stop:e.foreground,setStop:s})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Background Stop"}),o.jsx(pl,{stop:e.background,setStop:l})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Foreground Dark"}),o.jsx(pl,{stop:e.foregroundDark,setStop:i})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Background Dark"}),o.jsx(pl,{stop:e.backgroundDark,setStop:c})]})]})]})},W0=e=>{const t=["name","size"].filter(r=>e[r]).reduce((r,a)=>(r[a]=e[a],r),{}),n=["color","foreground","background","foregroundDark","backgroundDark"].map(r=>e[r]||"").join("-");return n.length>4&&(t.color=n.replace(/-*$/,"")),t},LR=e=>{const t=W0(e);return Object.entries(t).map(([n,r])=>`${n}="${r}"`).join(`
  `)},NR=({options:e})=>o.jsx(J,{...W0(e)}),Z0=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"Icon"})," component can be used to render SVG icons. The functionality is imported from"," ",o.jsx("a",{href:"https://abw.github.io/badger-icon/",children:"Badger Icon"})," with some extra bells and whistles."]}),o.jsx(je,{Component:wR,code:_R,expand:!0}),o.jsx("h2",{children:"Demo"}),o.jsx(kR,{})]}),RR=Object.freeze(Object.defineProperty({__proto__:null,default:Z0},Symbol.toStringTag,{value:"Module"})),K0=()=>o.jsxs(K,{code:"IconLibrary",children:[o.jsxs("p",{children:["The default set of icons is defined as ",o.jsx("code",{children:"IconLibrary"}),". The ",o.jsx("code",{children:"addIcon()"})," and ",o.jsx("code",{children:"addIcons()"})," function are provided for adding icons to the library."]}),o.jsx("div",{className:"grid-fill gap-4 mar-t-8",children:Object.keys(xs.icons).map(e=>o.jsxs("div",{className:"text-center bgc-100 bgd-0 fgc-10 fgd-90 pad-4 shadow-2",children:[o.jsx(J,{name:e,className:"x3"}),o.jsx("div",{className:"small mar-t-4",children:e})]},e))})]}),OR=Object.freeze(Object.defineProperty({__proto__:null,default:K0},Symbol.toStringTag,{value:"Module"})),DR=()=>o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"flex gap-2 middle",children:[o.jsx(J,{name:"check",className:"smallest"}),o.jsx(J,{name:"check",className:"smaller"}),o.jsx(J,{name:"check",className:"small"}),o.jsx(J,{name:"check"}),o.jsx(J,{name:"check",className:"large"}),o.jsx(J,{name:"check",className:"larger"}),o.jsx(J,{name:"check",className:"largest"})]}),o.jsxs("div",{className:"flex gap-2 mar-t-4",children:[o.jsx(J,{name:"check",className:"larger green fgc-50"}),o.jsx(J,{name:"cross",className:"larger red fgc-50"})]})]}),MR=`import React from 'react'
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

export default Component`,G0=()=>o.jsx(R,{code:"className",Component:DR,Source:MR,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"className"})," property can be used to set a CSS class."]})}),AR=Object.freeze(Object.defineProperty({__proto__:null,default:G0},Symbol.toStringTag,{value:"Module"})),PR=()=>o.jsxs("div",{className:"flex gap-2 x2",children:[o.jsx(J,{name:"check",color:"green-50"}),o.jsx(J,{name:"check",color:"green-70-30"}),o.jsx(J,{name:"check",color:"green-70--30"}),o.jsx(J,{name:"check",color:"green-70-30-30-70"})]}),$R=`import React from 'react'
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

export default Component`,Y0=()=>o.jsxs(R,{code:"color",Component:PR,Source:$R,undent:2,expand:!0,children:[o.jsxs("p",{children:["The ",o.jsx("code",{children:"color"})," property is a short-cut to set the color.  This adds the color to the CSS class."]}),o.jsxs("p",{children:["The ",o.jsx("code",{children:"color"})," can be be comprised of up to 5 elements separated by hyphens.  The first is the color range, e.g. ",o.jsx("code",{children:"red"}),","," ",o.jsx("code",{children:"green"}),", ",o.jsx("code",{children:"blue"}),", etc.  The second is the stop number for the foreground.  This is an integer from 0 (darkest) to 100 (lightest) in steps of 5.  The third is the stop number for the background.  The remaining two numbers are stops for the foreground and background colors in dark mode."]})]}),IR=Object.freeze(Object.defineProperty({__proto__:null,default:Y0},Symbol.toStringTag,{value:"Module"})),BR=()=>o.jsxs("div",{className:"flex gap-2 x2",children:[o.jsx(J,{name:"bars"}),o.jsx(J,{name:"check"}),o.jsx(J,{name:"cross"}),o.jsx(J,{name:"arrow"}),o.jsx(J,{name:"arrow-right"}),o.jsx(J,{name:"arrow-down-thicker.red.fgc-50"})]}),zR=`import React from 'react'
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

export default Component`,X0=()=>o.jsxs(R,{code:"name",Component:BR,Source:zR,undent:2,expand:!0,children:[o.jsxs("p",{children:["The ",o.jsx("code",{children:"name"})," property can be used to select an icon from the default icon library."]}),o.jsx("p",{children:"Additional modifiers and classes can be added to the name to apply styles and transformations.  See the Badger Icon documentation for further details."})]}),FR=Object.freeze(Object.defineProperty({__proto__:null,default:X0},Symbol.toStringTag,{value:"Module"})),UR=()=>o.jsxs("div",{className:"flex gap-2",children:[o.jsx(J,{className:"x3",path:"M448,96L448,416C448,434 434,448 416,448L96,448C78,448 64,434 64,416L64,96C64,78 78,64 96,64L416,64C434,64 448,78 448,96ZM384,128L128,128L128,384L384,384L384,128Z"}),o.jsx(J,{className:"x3",path:"M21,5L21,20C21,20 20,21 20,21L5,21C4,21 3,20 3,20L3,5C3,4 4,3 5,3L20,3C20,3 21,4 21,5ZM18,6L6,6L6,18L18,18L18,6Z",width:24,height:24})]}),HR=`import React from 'react'
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

export default Component`,Q0=()=>o.jsx(R,{code:"path",Component:UR,Source:HR,undent:2,expand:!0,children:o.jsxs("p",{children:["You can specify the data for a path.  The default viewbox is assumed to be 512px wide and 512px high.  You can set the ",o.jsx("code",{children:"width"})," and"," ",o.jsx("code",{children:"height"})," properties to change that."]})}),VR=Object.freeze(Object.defineProperty({__proto__:null,default:Q0},Symbol.toStringTag,{value:"Module"})),WR=()=>o.jsxs("div",{className:"flex gap-2",children:[o.jsx(J,{name:"check",size:"smallest"}),o.jsx(J,{name:"check",size:"smaller"}),o.jsx(J,{name:"check",size:"small"}),o.jsx(J,{name:"check",size:"medium"}),o.jsx(J,{name:"check",size:"large"}),o.jsx(J,{name:"check",size:"larger"}),o.jsx(J,{name:"check",size:"largest"})]}),ZR=`import React from 'react'
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

export default Component`,q0=()=>o.jsx(R,{code:"size",Component:WR,Source:ZR,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"size"})," property is a short-cut to set the size.  This adds the size to the CSS class."]})}),KR=Object.freeze(Object.defineProperty({__proto__:null,default:q0},Symbol.toStringTag,{value:"Module"})),GR=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Icon"}),o.jsx(Z0,{}),o.jsxs(ft,{tocName:"icon",children:[o.jsx(ce,{title:"Properties"}),o.jsx(X0,{}),o.jsx(G0,{}),o.jsx(q0,{}),o.jsx(Y0,{}),o.jsx(Q0,{}),o.jsx(ce,{title:"Components"}),o.jsx(K0,{})]})]}),YR=Object.freeze(Object.defineProperty({__proto__:null,default:GR},Symbol.toStringTag,{value:"Module"})),XR=()=>{const[e,t]=v.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsxs(cn,{open:e,className:"max-width-30rem",children:[o.jsx("header",{children:o.jsx("h3",{children:"A Modal!"})}),o.jsxs("p",{children:["This is a modal.  The content is rendered as an ",o.jsx("code",{children:"article"}),".  You can include"," ",o.jsx("code",{children:"header"})," and ",o.jsx("code",{children:"footer"})," ","sections if you want, although they're entirely optional."]}),o.jsx("footer",{children:o.jsx(A,{color:"red",text:"Close Modal",onClick:()=>t(!1)})})]}),o.jsx(A,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},QR=`import { Modal, Button } from '@/src/index.jsx'

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

export default ModalExample`,J0=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"Modal"})," component can be used to create an overlaid modal dialog."]}),o.jsxs("p",{className:"cols-2 stack-desktop",children:["The ",o.jsx("code",{children:"open"})," property should be used to indicate if the modal is open or not. Any child elements will be rendered inside the modal body."]}),o.jsx(je,{Component:XR,code:QR,expand:!0})]}),qR=Object.freeze(Object.defineProperty({__proto__:null,default:J0},Symbol.toStringTag,{value:"Module"})),JR=()=>{const{show:e,hide:t,Modal:n}=Jb();return o.jsxs(o.Fragment,{children:[o.jsxs(n,{children:[o.jsx("p",{children:"Modal State"}),o.jsx(A,{color:"red",text:"Close Modal",onClick:t})]}),o.jsx(A,{color:"green",text:"Open Modal",onClick:e})]})},eO=`import { ModalState, Button } from '@/src/index.jsx'
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

export default ModalStateExample`,ex=()=>o.jsx(R,{code:"ModalState",Component:JR,Source:eO,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"ModalState"})," function can be used to generate a Modal with state.  It returns the ",o.jsx("code",{children:"isVisible"})," property,"," ",o.jsx("code",{children:"show"})," and ",o.jsx("code",{children:"hide"})," functions to change the visibility, and a ",o.jsx("code",{children:"Modal"})," component."]})}),tO=Object.freeze(Object.defineProperty({__proto__:null,default:ex},Symbol.toStringTag,{value:"Module"})),nO=()=>{const[e,t]=v.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsxs(cn,{open:e,className:"large max-width-25rem pad-8",children:[o.jsx("p",{children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object."}),o.jsx(A,{color:"red",text:"Close Modal",onClick:()=>t(!1)})]}),o.jsx(A,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},rO=`import { Modal, Button } from '@/src/index.jsx'
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

export default ModalExample`,tx=()=>o.jsx(R,{code:"className",Component:nO,Source:rO,undent:6,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"className"})," property can be used to add a CSS class to the Modal ",o.jsx("code",{children:"dialog"})," element."]})}),oO=Object.freeze(Object.defineProperty({__proto__:null,default:tx},Symbol.toStringTag,{value:"Module"})),aO=()=>{const[e,t]=v.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(cn,{open:e,close:()=>t(!1),children:o.jsx("p",{children:"This is a modal with a close button."})}),o.jsx(A,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},sO=`import React, { useState } from 'react'
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

export default ModalExample`,nx=()=>o.jsx(R,{code:"close",Component:aO,Source:sO,undent:6,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"close"})," property can be used to automatically add a close icon to the top right corner.  It should be a function which will close the modal when the icon is clicked."]})}),lO=Object.freeze(Object.defineProperty({__proto__:null,default:nx},Symbol.toStringTag,{value:"Module"})),iO=()=>{const[e,t]=v.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(cn,{open:e,close:()=>t(!1),closeIcon:"thumb",children:o.jsx("p",{children:"This is a modal with a custom close icon."})}),o.jsx(A,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},cO=`import React, { useState } from 'react'
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

export default ModalExample`,rx=()=>o.jsx(R,{code:"closeIcon",Component:iO,Source:cO,undent:6,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"closeIcon"})," property can be used to change the icon displayed to close the modal."]})}),uO=Object.freeze(Object.defineProperty({__proto__:null,default:rx},Symbol.toStringTag,{value:"Module"})),dO=()=>{const[e,t]=v.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(cn,{open:e,close:()=>t(!1),title:"Hello World!",text:"This is a modal with a custom footer",footer:o.jsx("div",{className:"text-right",children:o.jsx(A,{color:"red",text:"Close",size:"small",iconRight:"cross",onClick:()=>t(!1)})})}),o.jsx(A,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},pO=`import { Modal, Button } from '@/src/index.jsx'
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

export default ModalExample`,ox=()=>o.jsx(R,{code:"footer",Component:dO,Source:pO,undent:6,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"footer"})," property can be used to define some custom footer content."]})}),fO=Object.freeze(Object.defineProperty({__proto__:null,default:ox},Symbol.toStringTag,{value:"Module"})),hO=()=>{const[e,t]=v.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(cn,{open:e,close:()=>t(!1),text:"This is a modal with a custom header",header:o.jsxs(o.Fragment,{children:[o.jsx("h3",{children:"Custom Header"}),o.jsx("p",{children:"Hello World!"})]})}),o.jsx(A,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},mO=`import { Modal, Button } from '@/src/index.jsx'
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

export default ModalExample`,ax=()=>o.jsx(R,{code:"header",Component:hO,Source:mO,undent:6,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"header"})," property can be used to define some custom header content."]})}),gO=Object.freeze(Object.defineProperty({__proto__:null,default:ax},Symbol.toStringTag,{value:"Module"})),xO=()=>{const[e,t]=v.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(cn,{open:e,close:()=>t(!1),text:"This is a modal"}),o.jsx(A,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},vO=`import { Modal, Button } from '@/src/index.jsx'

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

export default ModalExample`,sx=()=>o.jsx(R,{code:"text",Component:xO,Source:vO,undent:6,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"text"})," property can be used to define the body text."]})}),yO=Object.freeze(Object.defineProperty({__proto__:null,default:sx},Symbol.toStringTag,{value:"Module"})),CO=()=>{const[e,t]=v.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(cn,{open:e,close:()=>t(!1),text:"This is a modal with a title",title:"My Modal"}),o.jsx(A,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},jO=`import { Modal, Button } from '@/src/index.jsx'
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

export default ModalExample`,lx=()=>o.jsx(R,{code:"title",Component:CO,Source:jO,undent:6,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"title"})," property can be used to add a title."]})}),bO=Object.freeze(Object.defineProperty({__proto__:null,default:lx},Symbol.toStringTag,{value:"Module"})),SO=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Modal"}),o.jsx(J0,{}),o.jsxs(ft,{tocName:"modal",children:[o.jsx(ce,{title:"Properties"}),o.jsx(tx,{}),o.jsx(nx,{}),o.jsx(rx,{}),o.jsx(sx,{}),o.jsx(lx,{}),o.jsx(ax,{}),o.jsx(ox,{}),o.jsx(ce,{title:"Components"}),o.jsx(ex,{})]})]}),wO=Object.freeze(Object.defineProperty({__proto__:null,default:SO},Symbol.toStringTag,{value:"Module"})),_O=()=>{const{isVisible:e,show:t,hide:n}=jr();return o.jsxs("div",{className:"relative pad-6 border",children:[e&&o.jsx(Vo,{className:"flex middle center pad-8",children:o.jsxs("div",{children:[o.jsx("p",{className:"larger",children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been... that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object."}),o.jsx(A,{onClick:n,className:"red",text:"Hide Overlay"})]})}),o.jsx("p",{className:"mar-t-none",children:"May I make a suggestion? May I make a suggestion? I've got one other suggestion."}),o.jsx("p",{children:"Well let's hear yours. Let's hear your suggestion."}),o.jsx("p",{children:"Stonehenge! It's the best production value we've ever had on stage."}),o.jsx("p",{children:"But we haven't got the equipment. We haven't got the equipment, we haven't got Stonehenge, we haven't..."}),o.jsx("p",{children:"Not yet we don't. Let's start... Musically, musically we all know it. Musically we all know it. Right? No problems musically. We go right on stage. And it's quite simple. This is you know... Ian can take care of this..."}),o.jsx("p",{children:"I know what the Stonehenge monument looks like. We don't have that piece of scenery anymore."}),o.jsx("p",{children:"I know, so we build a new one. And this is it, look!"}),o.jsx(A,{onClick:t,color:"green",text:"Show Overlay"})]})},TO=`import { Overlay, VisibleState, Button } from '@/src/index.jsx'

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

export default OverlayExample`,ix=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"Overlay"})," component can be used to create an overlay. The default positioning is absolute so it will fill to cover the nearest parent that has positioning set to relative."]}),o.jsx(je,{Component:_O,code:TO})]}),kO=Object.freeze(Object.defineProperty({__proto__:null,default:ix},Symbol.toStringTag,{value:"Module"})),EO=()=>{const{show:e,hide:t,Overlay:n}=tS();return o.jsxs(o.Fragment,{children:[o.jsx(n,{fixed:!0,className:"flex center middle",children:o.jsxs("div",{children:[o.jsx("h1",{className:"mar-b-4",children:"Overlay State"}),o.jsx(A,{color:"red",text:"Hide Overlay",onClick:t})]})}),o.jsx(A,{color:"green",text:"Show Overlay",onClick:e})]})},LO=`import { OverlayState, Button } from '@/src/index.jsx'
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

export default OverlayStateExample`,cx=()=>o.jsx(R,{code:"OverlayState",Component:EO,Source:LO,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"OverlayState"})," function can be used to generate an Overlay with state.  It returns the ",o.jsx("code",{children:"isVisible"})," property,"," ",o.jsx("code",{children:"show"})," and ",o.jsx("code",{children:"hide"})," functions to change the visibility, and an ",o.jsx("code",{children:"Overlay"})," component."]})}),NO=Object.freeze(Object.defineProperty({__proto__:null,default:cx},Symbol.toStringTag,{value:"Module"})),RO=()=>{const[e,t]=v.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsxs(cn,{open:e,className:"large max-width-25rem pad-8",children:[o.jsx("p",{children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object."}),o.jsx(A,{color:"red",text:"Close Modal",onClick:()=>t(!1)})]}),o.jsx(A,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},OO=`import { Modal, Button } from '@/src/index.jsx'
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

export default ModalExample`,DO=()=>o.jsx(R,{code:"className",Component:RO,Source:OO,undent:6,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"className"})," property can be used to add a CSS class to the Modal ",o.jsx("code",{children:"dialog"})," element."]})}),MO=Object.freeze(Object.defineProperty({__proto__:null,default:DO},Symbol.toStringTag,{value:"Module"})),AO=()=>{const{isVisible:e,show:t,hide:n}=jr();return o.jsxs("div",{className:"relative pad-6 border",children:[o.jsx(A,{onClick:t,color:"green",text:"Show Red Overlay"}),e&&o.jsxs(Vo,{className:"flex space top pad-6",style:{"--color":"var(--red-70)","--background-color":"var(--red-20)","--background-opacity":"10%"},children:[o.jsx("p",{className:"larger",children:"Custom red overlay"}),o.jsx(A,{onClick:n,className:"red",text:"Hide Overlay"})]})]})},PO=`import React from 'react'
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

export default ColorExample`,ux=()=>o.jsx(R,{title:"Custom Colors",Component:AO,Source:PO,undent:8,children:o.jsxs("p",{children:["You can set the ",o.jsx("code",{children:"--color"})," and ",o.jsx("code",{children:"--background-color"})," ","CSS properties to define your own colors for the overlay.  The"," ",o.jsx("code",{children:"--background-opacity"})," can be set to change the background opacity."]})}),$O=Object.freeze(Object.defineProperty({__proto__:null,default:ux},Symbol.toStringTag,{value:"Module"})),IO=()=>{const{isVisible:e,show:t,hide:n}=jr();return o.jsxs("div",{className:"relative pad-6 border",children:[o.jsx(A,{onClick:t,color:"green",text:"Show Overlay"}),e&&o.jsx(Vo,{fixed:!0,className:"flex center middle",children:o.jsxs("div",{className:"max-width-40rem",children:[o.jsx("p",{className:"larger",children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been... that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object."}),o.jsx(A,{onClick:n,className:"red",text:"Hide Overlay"})]})})]})},BO=`import React from 'react'
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

export default OverlayExample`,dx=()=>o.jsx(R,{code:"fixed",Component:IO,Source:BO,undent:8,children:o.jsxs("p",{children:["Add the ",o.jsx("code",{children:"fixed"})," to set the overlay position to fixed so that it covers the entire viewport."]})}),zO=Object.freeze(Object.defineProperty({__proto__:null,default:dx},Symbol.toStringTag,{value:"Module"})),FO=()=>{const{isVisible:e,show:t,hide:n}=jr();return o.jsxs("div",{className:"relative pad-6 border",children:[o.jsx(A,{onClick:t,color:"green",text:"Show Light Overlay"}),e&&o.jsxs(Vo,{light:!0,className:"flex space top pad-6",children:[o.jsx("p",{className:"larger",children:"Light overlay"}),o.jsx(A,{onClick:n,className:"red",text:"Hide Overlay"})]})]})},UO=`import React from 'react'
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

export default ColorExample`,HO=()=>{const{isVisible:e,show:t,hide:n}=jr();return o.jsxs("div",{className:"relative pad-6 border",children:[o.jsx(A,{onClick:t,color:"green",text:"Show Dark Overlay"}),e&&o.jsxs(Vo,{dark:!0,className:"flex space top pad-6",children:[o.jsx("p",{className:"larger",children:"Dark overlay"}),o.jsx(A,{onClick:n,className:"red",text:"Hide Overlay"})]})]})},VO=`import React from 'react'
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

export default ColorExample`,px=()=>o.jsxs(K,{code:"light / dark",children:[o.jsxs("p",{className:"cols-2 stack-desktop",children:["The default overlay color is white in light mode and black in dark mode.  You can add the ",o.jsx("code",{children:"light"})," or ",o.jsx("code",{children:"dark"})," ","property to explicitly set it to one or the other."]}),o.jsx(je,{Component:FO,code:UO,caption:"light",undent:8}),o.jsx(je,{Component:HO,code:VO,caption:"dark",undent:8})]}),WO=Object.freeze(Object.defineProperty({__proto__:null,default:px},Symbol.toStringTag,{value:"Module"})),ZO=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Overlay"}),o.jsx(ix,{}),o.jsxs(ft,{tocName:"overlay",children:[o.jsx(ce,{title:"Properties"}),o.jsx(dx,{}),o.jsx(px,{}),o.jsx(ce,{title:"Styling"}),o.jsx(ux,{}),o.jsx(ce,{title:"Components"}),o.jsx(cx,{})]})]}),KO=Object.freeze(Object.defineProperty({__proto__:null,default:ZO},Symbol.toStringTag,{value:"Module"})),GO=({page:e,className:t,onClick:n})=>{const{pageRanges:r}=gb(),a=r[e];return o.jsx(A,{text:a,className:t,onClick:n})},YO=()=>{const e=["A-C","D-F","G-I","J-M","N-P","Q-T","U-W","X-Z"],t=e.length,[n,r]=v.useState(0);return o.jsx(Vt,{pages:t,page:n,setPage:r,pageRanges:e,Page:GO,size:"small"})},XO=`import { Pager, usePager, Button } from '@/src/index.jsx'

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

export default PagerExample`,QO=({items:e})=>o.jsx("table",{className:"wide shaded striped celled",children:o.jsx("tbody",{children:e.map(([t,n])=>o.jsx(qO,{name:t,value:n},t))})}),qO=({name:e,value:t})=>o.jsxs("tr",{children:[o.jsx("td",{className:"font-mono",children:e}),o.jsx("td",{children:t})]}),fx=()=>o.jsxs(o.Fragment,{children:[o.jsx("h2",{children:"Context"}),o.jsxs("div",{className:"cols-2 stack-desktop",children:[o.jsx("p",{children:"A react context is created which provides the items listed below. Any other properties passed in to the component will also be accessible to child components."}),o.jsxs("p",{children:["Values are provided for the 0-based indexes of the first, last, previous, next and current pages. For example, the lowest value for ",o.jsx("code",{children:"page"})," is"," ",o.jsx("code",{children:"0"})," and the highest value is ",o.jsx("code",{children:"pages - 1"}),"."]}),o.jsxs("p",{children:['Their counterparts are also provided in "human readable" 1-based form with a ',o.jsx("code",{children:"No"})," suffix.  For example, the values for ",o.jsx("code",{children:"pageNo"})," range from ",o.jsx("code",{children:"1"})," to ",o.jsx("code",{children:"pages"}),", and will always be one more than ",o.jsx("code",{children:"page"}),"."]})]}),o.jsx(QO,{items:[["pages","The total number of pages, as passed into the component as a property."],["page","The index (0 based) of the current page, as passed into the component as a property."],["setPage","The function for setting a page index, as passed into the component as a property."],["pageNo",o.jsxs(o.Fragment,{children:["The current page number (1 based), effectively one louder than ",o.jsx("code",{children:"page"}),".  e.g. if ",o.jsx("code",{children:"page"})," is ten then this goes up to eleven."]})],["firstPage","The index (0 based) of the first page.  This is always 0 but is included for completeness."],["firstPageNo","The number (1 based) of the first page.  This is always 1 but is included for completeness."],["lastPage","The index (0 based) of the last page."],["lastPageNo","The number (1 based) of the first page."],["prevPage","The index (0 based) of the previous page."],["prevPageNo","The number (1 based) of the previous page."],["nextPage","The index (0 based) of the next page."],["nextPageNo","The number (1 based) of the next page."]]}),o.jsx("h2",{children:"Custom Component"}),o.jsxs("div",{className:"cols-2 stack-desktop",children:[o.jsxs("p",{children:["You can provide your own components to render certain elements of the pager widget. These will be passed relevant parameters as properties and can use the ",o.jsx("code",{children:"usePager()"})," hook to access the full pager context, including any additional properties that you pass to the ",o.jsx("code",{children:"Pager"})," component."]}),o.jsxs("p",{children:["In this example we define a custom ",o.jsx("code",{children:"MyPageButton"})," component to replace the ",o.jsx("code",{children:"Page"})," component that renders the numbered page buttons.  Instead of displaying page numbers it shows alphabetical ranges for each button, defined in a custom ",o.jsx("code",{children:"pageRanges"})," "," ","property."]})]}),o.jsx(je,{Component:YO,code:XO})]}),JO=Object.freeze(Object.defineProperty({__proto__:null,default:fx},Symbol.toStringTag,{value:"Module"})),eD=()=>{const[e,t]=v.useState(0);return o.jsx(Vt,{pages:11,page:e,setPage:t})},tD=`import { Pager } from '@/src/index.jsx'

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

export default PagerExample`,hx=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"Pager"})," component generates buttons for navigating through several pages."]}),o.jsx("div",{className:"cols-2 stack-desktop",children:o.jsxs("p",{children:["The three mandatory properties are ",o.jsx("code",{children:"pages"})," indicating the total number of pages, ",o.jsx("code",{children:"page"})," for the current page index (ranging from 0 to ",o.jsx("code",{children:"pages"})," - 1) and a"," ",o.jsx("code",{children:"setPage"})," handler to set the page index."]})}),o.jsx(je,{Component:eD,code:tD})]}),nD=Object.freeze(Object.defineProperty({__proto__:null,default:hx},Symbol.toStringTag,{value:"Module"})),rD=()=>{const[e,t]=v.useState(0);return o.jsx("div",{className:"grid-1 gap-4",children:o.jsx(Vt,{pages:11,page:e,setPage:t,className:"pager small brand border pad-2 bdr-2 bgc-90 bgd-10"})})},oD=`import React, { useState } from 'react'
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
`,mx=()=>o.jsx(R,{code:"className",Component:rD,Source:oD,undent:4,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"className"})," property can be used to set a CSS class for the pager container.  The default value is ",o.jsx("code",{children:"pager"}),"."]})}),aD=Object.freeze(Object.defineProperty({__proto__:null,default:mx},Symbol.toStringTag,{value:"Module"})),sD=()=>{const[e,t]=v.useState(0);return o.jsxs("div",{className:"grid-1 gap-4",children:[o.jsx(Vt,{pages:11,page:e,setPage:t,color:"red"}),o.jsx(Vt,{pages:11,page:e,setPage:t,color:"green"}),o.jsx(Vt,{pages:11,page:e,setPage:t,color:"blue"})]})},lD=`import React, { useState } from 'react'
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
`,gx=()=>o.jsx(R,{code:"color",Component:sD,Source:lD,undent:4,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"color"})," property can be used to set the color range used for the buttons.  This is a short-cut which adds the specified color to the CSS class for the pager container."]})}),iD=Object.freeze(Object.defineProperty({__proto__:null,default:gx},Symbol.toStringTag,{value:"Module"})),cD=()=>{const[e,t]=v.useState(0);return o.jsx(Vt,{pages:11,page:e,setPage:t,prevIcon:"angle-left",nextIcon:"angle-right"})},uD=`import React, { useState } from 'react'
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
`,xx=()=>o.jsx(R,{code:"prevIcon / nextIcon",Component:cD,Source:uD,undent:4,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"prevIcon"})," and ",o.jsx("code",{children:"nextIcon"})," properties can be used to set the icons for the previous and next page button."]})}),dD=Object.freeze(Object.defineProperty({__proto__:null,default:xx},Symbol.toStringTag,{value:"Module"})),pD=()=>{const[e,t]=v.useState(0);return o.jsx(Vt,{pages:11,page:e,setPage:t,nextIcon:"angle-right"})},fD=`import React, { useState } from 'react'
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
`,hD=()=>o.jsx(R,{code:"nextIcon",Component:pD,Source:fD,undent:4,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"nextIcon"})," property can be used to set the icon for the next page button."]})}),mD=Object.freeze(Object.defineProperty({__proto__:null,default:hD},Symbol.toStringTag,{value:"Module"})),gD=()=>{const[e,t]=v.useState(0);return o.jsx(Vt,{pages:11,page:e,setPage:t,showFirstLast:!1})},xD=`import React, { useState } from 'react'
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
`,vx=()=>o.jsxs(R,{code:"showFirstLast",Component:gD,Source:xD,undent:4,children:[o.jsxs("p",{children:["The ",o.jsx("code",{children:"showFirstLast"})," property determines if the first and last pages are shown in the set of numbered page buttons. A button for the first page will be displayed when it is less than previous page.  The last page button will be displayed when it is greater than the next page."]}),o.jsxs("p",{children:["This value defaults to ",o.jsx("code",{children:"true"})," but can be set"," ",o.jsx("code",{children:"false"})," to hide these buttons."]})]}),vD=Object.freeze(Object.defineProperty({__proto__:null,default:vx},Symbol.toStringTag,{value:"Module"})),yD=()=>{const[e,t]=v.useState(0);return o.jsxs("div",{className:"grid-1 gap-4",children:[o.jsx(Vt,{pages:11,page:e,setPage:t,size:"smaller"}),o.jsx(Vt,{pages:11,page:e,setPage:t,size:"small"})]})},CD=`import React, { useState } from 'react'
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
`,yx=()=>o.jsx(R,{code:"size",Component:yD,Source:CD,undent:4,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"size"})," property can be used to set the size to one of the standard sizes.  This is also a short-cut for adding the size as a CSS class so you can use it to add any of your own size classes."]})}),jD=Object.freeze(Object.defineProperty({__proto__:null,default:yx},Symbol.toStringTag,{value:"Module"})),bD=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Pager"}),o.jsx(hx,{}),o.jsx(fx,{}),o.jsxs(ft,{tocName:"pager",children:[o.jsx(ce,{title:"Properties"}),o.jsx(mx,{}),o.jsx(gx,{}),o.jsx(yx,{}),o.jsx(xx,{}),o.jsx(vx,{}),o.jsxs($o,{children:[o.jsxs("div",{className:"flow",children:[o.jsx(ce,{title:"CSS Classes"}),o.jsxs(K,{code:"className",children:["Used to set the CSS class for the pager container.  The default value is ",o.jsx("code",{children:"pager"}),"."]}),o.jsxs(K,{code:"buttonClass",children:["Used to set a default CSS class for all buttons.  The default value is ",o.jsx("code",{children:"outline"}),"."]}),o.jsxs(K,{code:"prevClass",children:["Used to set the CSS class for the previous page button.  It defaults to the value for ",o.jsx("code",{children:"buttonClass"}),"."]}),o.jsxs(K,{code:"nextClass",children:["Used to set the CSS class for the next page button.  It defaults to the value for ",o.jsx("code",{children:"buttonClass"}),"."]}),o.jsxs(K,{code:"pagesClass",children:["Used to set the CSS class for the numbered page buttons container. The default value is ",o.jsx("code",{children:"pages"}),"."]}),o.jsxs(K,{code:"pageClass",children:["Used to set the CSS class for individual numbered page buttons.  It defaults to the value for ",o.jsx("code",{children:"buttonClass"}),"."]}),o.jsxs(K,{code:"currentPageClass",children:["Used to set the CSS class for the currently selected numbered page button. The default value is ",o.jsx("code",{children:"solid"}),"."]})]}),o.jsxs("div",{className:"flow",children:[o.jsx(ce,{title:"Components"}),o.jsxs(K,{code:"Previous",id:"Previous-component",children:["Renders the previous page button.  Defaults to ",o.jsx("code",{children:"PagerPrevious"}),"."]}),o.jsxs(K,{code:"Next",id:"Next-component",children:["Renders the next page button.  Defaults to ",o.jsx("code",{children:"PagerNext"}),"."]}),o.jsxs(K,{code:"Pages",id:"Pages-component",children:["Renders the collection of numbered page buttons.  Defaults to ",o.jsx("code",{children:"PagerPages"}),"."]}),o.jsxs(K,{code:"Page",id:"Page-component",children:["Renders an individual page button.  Defaults to ",o.jsx("code",{children:"PagerPage"}),"."]}),o.jsxs(K,{code:"Separator",id:"Separator-component",children:["Renders the separator between the first and/or last pages and the rest of the numbered page buttons. Defaults to ",o.jsx("code",{children:"PagerSeparator"}),"."]})]})]})]})]}),SD=Object.freeze(Object.defineProperty({__proto__:null,default:bD},Symbol.toStringTag,{value:"Module"})),wD=()=>{const[e,t]=v.useState(!1);return o.jsx(An,{name:"tap",value:e,onChange:t,options:["David","Nigel","Derek"]})},_D=`import { Radio } from '@/src/index.jsx'

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

export default RadioExample`,Cx=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"Radio"})," component renders a set of radio buttons."]}),o.jsx(je,{Component:wD,code:_D,expand:!0})]}),TD=Object.freeze(Object.defineProperty({__proto__:null,default:Cx},Symbol.toStringTag,{value:"Module"})),kD=()=>{const[e,t]=v.useState(!1),[n,r]=v.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(An,{border:!0,name:"tap1",labelClass:"mar-b-2",value:e,onChange:t,options:["David","Nigel","Derek"]}),o.jsx(An,{border:!0,inline:!0,name:"tap2",labelClass:"mar-r-2",value:n,onChange:r,options:["David","Nigel","Derek"]})]})},ED=`import { Radio } from '@/src/index.jsx'
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

export default BorderExample`,jx=()=>o.jsxs(R,{code:"border",Component:kD,Source:ED,undent:4,expand:!0,children:[o.jsxs("p",{children:["The ",o.jsx("code",{children:"border"})," property can be set to add a border to each item."]}),o.jsxs("p",{children:["You may need to add margins to either the bottom or right side of each label using the ",o.jsx("code",{children:"labelClass"})," property."]})]}),LD=Object.freeze(Object.defineProperty({__proto__:null,default:jx},Symbol.toStringTag,{value:"Module"})),ND=()=>{const[e,t]=v.useState(!1);return o.jsx(An,{className:"grid-3 gap-2",name:"tap",value:e,onChange:t,options:["David","Nigel","Derek"]})},RD=`import { Radio } from '@/src/index.jsx'
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

export default ClassName`,bx=()=>o.jsx(R,{code:"className",Component:ND,Source:RD,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"className"})," property can be used to add a CSS class to the container element."]})}),OD=Object.freeze(Object.defineProperty({__proto__:null,default:bx},Symbol.toStringTag,{value:"Module"})),DD=()=>{const[e,t]=v.useState(!1);return o.jsx(An,{name:"tap",value:e,onChange:t,options:[{value:"david",text:"David St. Hubbins"},{value:"nigel",text:"Nigel Tufnel"},{value:"derek",text:"Derek Smalls"},{value:"john",text:'John "Stumpy" Pepys',disabled:!0},{value:"eric",text:'Eric "Stumpy Joe" Childs',disabled:!0},{value:"peter",text:'Peter "James" Bond',disabled:!0},{value:"mick",text:"Mick Shrimpton",disabled:!0}]})},MD=`import { Radio } from '@/src/index.jsx'
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

export default DisabledExample`,Sx=()=>o.jsx(R,{code:"disabled",Component:DD,Source:MD,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"disabled"})," property can be added to an option to disable it."]})}),AD=Object.freeze(Object.defineProperty({__proto__:null,default:Sx},Symbol.toStringTag,{value:"Module"})),PD=()=>{const[e,t]=v.useState(!1);return o.jsx(An,{inline:!0,name:"tap",value:e,onChange:t,options:["David","Nigel","Derek"]})},$D=`import { Radio } from '@/src/index.jsx'
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

export default InlineExample`,wx=()=>o.jsx(R,{code:"inline",Component:PD,Source:$D,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"inline"})," property can be set to create inline radio buttons."]})}),ID=Object.freeze(Object.defineProperty({__proto__:null,default:wx},Symbol.toStringTag,{value:"Module"})),BD=()=>{const[e,t]=v.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(An,{name:"tap",value:e,onChange:t,options:["David","Nigel","Derek"]}),!!e&&o.jsxs("div",{children:["Selected value: ",e]})]})},zD=`import { Radio } from '@/src/index.jsx'
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

export default OnChangeExample`,_x=()=>o.jsx(R,{code:"onChange",Component:BD,Source:zD,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"onChange"})," property should be used to define a function to handle changes in the state.  This will typically be used to update the ",o.jsx("a",{href:"#value",className:"font-mono",children:"value"}),"."]})}),FD=Object.freeze(Object.defineProperty({__proto__:null,default:_x},Symbol.toStringTag,{value:"Module"})),UD=()=>{const[e,t]=v.useState(!1);return o.jsx(An,{value:e,onChange:t,options:[{value:"david",text:"David St. Hubbins"},{value:"nigel",text:"Nigel Tufnel"},{value:"derek",text:"Derek Smalls"}]})},HD=`import { Radio } from '@/src/index.jsx'
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

export default OptionsExample`,Tx=()=>o.jsx(R,{code:"options",Component:UD,Source:HD,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"options"})," property should be used to define the values for each radio button.  These can be simple values (e.g. strings or numbers) as shown in the preceding examples.  For more complex cases you should define each element as an object containing a"," ",o.jsx("code",{children:"value"})," and any of ",o.jsx("code",{children:"text"}),", ",o.jsx("code",{children:"label"})," or"," ",o.jsx("code",{children:"name"})," for the displayed text."]})}),VD=Object.freeze(Object.defineProperty({__proto__:null,default:Tx},Symbol.toStringTag,{value:"Module"})),WD=()=>{const[e,t]=v.useState(!1);return o.jsx(An,{name:"tap",value:e,onChange:t,options:["David","Nigel","Derek"]})},ZD=`import { Radio } from '@/src/index.jsx'
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

export default ValueExample`,kx=()=>o.jsx(R,{code:"value",Component:WD,Source:ZD,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"value"})," property should be used to define the current selected value.  This should be used in conjunction with"," ",o.jsx("a",{href:"#onchange",className:"font-mono",children:"onChange"})," to update the value."]})}),KD=Object.freeze(Object.defineProperty({__proto__:null,default:kx},Symbol.toStringTag,{value:"Module"})),GD=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Radio"}),o.jsx(Cx,{}),o.jsxs(ft,{tocName:"radio",children:[o.jsx(ce,{title:"Properties"}),o.jsx(kx,{}),o.jsx(_x,{}),o.jsx(bx,{}),o.jsx(wx,{}),o.jsx(jx,{}),o.jsx(ce,{title:"Options"}),o.jsx(Tx,{}),o.jsx(Sx,{})]})]}),YD=Object.freeze(Object.defineProperty({__proto__:null,default:GD},Symbol.toStringTag,{value:"Module"})),XD=["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger"],QD=()=>{const e=t=>XD.filter(n=>n.toLowerCase().indexOf(t.toLowerCase())!==-1);return o.jsx(Pi,{onSearch:e})},qD=`import { Search } from '@/src/index.jsx'

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

export default SearchExample`,Ex=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"Search"}),' component implements the familiar "autocomplete" functionality.']}),o.jsx("p",{className:"cols-2 stack-desktop",children:"The user starts typing and after a short debounce delay a set of results matching their input is displayed. The user can then click on a result or use the keyboard to navigate through the results."}),o.jsx(je,{Component:QD,code:qD})]}),JD=Object.freeze(Object.defineProperty({__proto__:null,default:Ex},Symbol.toStringTag,{value:"Module"})),eM=[{name:"Alan Aardvark",tel:"555-1245"},{name:"Amy Aardvark",tel:"555-2233"},{name:"Anne Aardvark",tel:"555-6565"},{name:"Bart Badger",tel:"555-4201"},{name:"Betty Badger",tel:"555-1111"},{name:"Bobby Badger",tel:"555-9876"},{name:"Brenda Badger",tel:"555-3443"},{name:"Brian Badger",tel:"555-1337"}],tM=()=>{const e=n=>o.jsxs("div",{className:"flex space baseline",children:[o.jsx("div",{children:n.name}),o.jsx("div",{className:"smaller",children:n.tel})]}),t=n=>eM.filter(r=>r.name.toLowerCase().indexOf(n.toLowerCase())!==-1);return o.jsx(Pi,{onSearch:t,displayResult:e})},nM=`import { Search } from '@/src/index.jsx'

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

export default DisplayResultExample`,Lx=()=>o.jsx(R,{code:"displayResult",Component:tM,Source:nM,expand:!0,children:o.jsxs("p",{children:["If a result is a text string then it will be displayed as the result. If it's an object containing a ",o.jsx("code",{children:"text"}),","," ",o.jsx("code",{children:"label"})," or ",o.jsx("code",{children:"name"})," property then that will be used as the display value.  Otherwise you can provide a"," ",o.jsx("code",{children:"displayResult"})," function to display the result any way you like."]})}),rM=Object.freeze(Object.defineProperty({__proto__:null,default:Lx},Symbol.toStringTag,{value:"Module"})),oM=[{id:100,name:"Alan Aardvark",tel:"555-1245"},{id:101,name:"Amy Aardvark",tel:"555-2233"},{id:102,name:"Anne Aardvark",tel:"555-6565"},{id:110,name:"Bart Badger",tel:"555-4201"},{id:111,name:"Betty Badger",tel:"555-1111"},{id:112,name:"Bobby Badger",tel:"555-9876"},{id:113,name:"Brenda Badger",tel:"555-3443"},{id:114,name:"Brian Badger",tel:"555-1337"}],aM=()=>{const e=n=>`#${n.id}: ${n.name} (${n.tel})`,t=n=>oM.filter(r=>r.name.toLowerCase().indexOf(n.toLowerCase())!==-1);return o.jsx(Pi,{onSearch:t,displayValue:e})},sM=`import { Search } from '@/src/index.jsx'

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

export default DisplayValueExample`,Nx=()=>o.jsx(R,{code:"displayValue",Component:aM,Source:sM,expand:!0,children:o.jsxs("p",{children:["When a result is selected the same rules will be applied to display the result in the search input.  If it's not a string or an object containing one of the aforementioned properties then you should provide a ",o.jsx("code",{children:"displayValue"})," function to convert the result to a text string that can be displayed."]})}),lM=Object.freeze(Object.defineProperty({__proto__:null,default:Nx},Symbol.toStringTag,{value:"Module"})),iM=["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Beatrice Badger","Belinda Badger","Ben Badger","Bert Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger","Brook Badger","Buzz Badger"],cM=()=>{const e=async t=>Ri(500).then(()=>iM.filter(n=>n.toLowerCase().indexOf(t.toLowerCase())!==-1));return o.jsx(Pi,{onSearch:e,debug:!0})},uM=`import { Search } from '@/src/index.jsx'
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

export default OnSearchExample`,Rx=()=>o.jsx(R,{code:"onSearch",Component:cM,Source:uM,children:o.jsxs("p",{children:["You should provide an ",o.jsx("code",{children:"onSearch"})," function which will be passed the search input and should return an array of results.  This can be an asynchronous function if necessary.  For example, a function which makes an API request to fetch the matching results."]})}),dM=Object.freeze(Object.defineProperty({__proto__:null,default:Rx},Symbol.toStringTag,{value:"Module"})),pM=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Search"}),o.jsx(Ex,{}),o.jsxs(ft,{tocName:"search",children:[o.jsx(ce,{title:"Properties"}),o.jsx(Rx,{}),o.jsx(Lx,{}),o.jsx(Nx,{})]})]}),fM=Object.freeze(Object.defineProperty({__proto__:null,default:pM},Symbol.toStringTag,{value:"Module"})),hM=["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger","Colin Camel","David Donkey","Eddie Elephant","Franky Ferret","Gina Goat","Helen Horse","Ian Iguana","Juliet Jackdaw","Kevin Kangaroo","Linda Llama"],mM=()=>o.jsx(bs,{options:hM}),gM=`import { Select } from '@/src/index.jsx'

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

export default SelectExample`,Ox=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"Select"})," component implements a custom select input."]}),o.jsx(je,{Component:mM,code:gM})]}),xM=Object.freeze(Object.defineProperty({__proto__:null,default:Ox},Symbol.toStringTag,{value:"Module"})),vM=[{name:"Alan Aardvark",tel:"555-1245"},{name:"Amy Aardvark",tel:"555-2233"},{name:"Anne Aardvark",tel:"555-6565"},{name:"Bart Badger",tel:"555-4201"},{name:"Betty Badger",tel:"555-1111"},{name:"Bobby Badger",tel:"555-9876"},{name:"Brenda Badger",tel:"555-3443"},{name:"Brian Badger",tel:"555-1337"}],yM=()=>{const e=t=>o.jsxs("div",{className:"flex space baseline",children:[o.jsx("div",{children:t.name}),o.jsx("div",{className:"smaller",children:t.tel})]});return o.jsx(bs,{options:vM,displayOption:e})},CM=`import { Select } from '@/src/index.jsx'

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

export default DisplayOptionExample`,Dx=()=>o.jsx(R,{code:"displayOption",Component:yM,Source:CM,expand:!0,children:o.jsxs("p",{children:["If an option is a text string then it will be displayed as it is. If it's an object containing a ",o.jsx("code",{children:"text"}),","," ",o.jsx("code",{children:"label"})," or ",o.jsx("code",{children:"name"})," property then that will be used as the display value.  Otherwise you can provide a"," ",o.jsx("code",{children:"displayOption"})," function to display the result any way you like."]})}),jM=Object.freeze(Object.defineProperty({__proto__:null,default:Dx},Symbol.toStringTag,{value:"Module"})),bM=[{id:100,name:"Alan Aardvark",tel:"555-1245"},{id:101,name:"Amy Aardvark",tel:"555-2233"},{id:102,name:"Anne Aardvark",tel:"555-6565"},{id:110,name:"Bart Badger",tel:"555-4201"},{id:111,name:"Betty Badger",tel:"555-1111"},{id:112,name:"Bobby Badger",tel:"555-9876"},{id:113,name:"Brenda Badger",tel:"555-3443"},{id:114,name:"Brian Badger",tel:"555-1337"}],SM=()=>{const e=t=>o.jsxs("div",{className:"flex baseline",children:[o.jsxs("span",{className:"smaller mar-r-2",children:["#",t.id]})," ",t.name," (",t.tel,")"]});return o.jsx(bs,{options:bM,displayValue:e})},wM=`import { Select } from '@/src/index.jsx'

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

export default DisplayValueExample`,Mx=()=>o.jsx(R,{code:"displayValue",Component:SM,Source:wM,expand:!0,children:o.jsxs("p",{children:["When an option is selected the same rules will be applied to display the option in the search input.  If it's not a string or an object containing one of the aforementioned properties then you should provide a ",o.jsx("code",{children:"displayValue"})," function to convert the result to a text string that can be displayed."]})}),_M=Object.freeze(Object.defineProperty({__proto__:null,default:Mx},Symbol.toStringTag,{value:"Module"})),TM=[{id:101,name:"Alan Aardvark"},{id:102,name:"Amy Aardvark"},{id:103,name:"Anne Aardvark"},{id:104,name:"Bart Badger"},{id:105,name:"Betty Badger"},{id:106,name:"Bobby Badger"},{id:107,name:"Brenda Badger"},{id:108,name:"Brian Badger"},{id:109,name:"Colin Camel",disabled:!0},{id:110,name:"Derek Donkey"}],kM=()=>o.jsx(bs,{options:TM}),EM=`import { Select } from '@/src/index.jsx'

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

export default OptionsExample`,Ax=()=>o.jsx(R,{code:"options",Component:kM,Source:EM,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"options"})," property should be used to provide an array of options that the user can select from.  Each element in the array can be a string, numerical value or an object.  The ",o.jsx("code",{children:"disabled"})," ","property can be used to mark an option as disabled."]})}),LM=Object.freeze(Object.defineProperty({__proto__:null,default:Ax},Symbol.toStringTag,{value:"Module"})),NM=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Select"}),o.jsx(Ox,{}),o.jsxs(ft,{tocName:"select",children:[o.jsx(ce,{title:"Properties"}),o.jsx(Ax,{}),o.jsx(Dx,{}),o.jsx(Mx,{}),o.jsx(K,{code:"disabled",children:"Boolean flag to set the select input to be disabled."}),o.jsxs(K,{code:"placeholder",children:["Set the placeholder text.  The default is ",o.jsx("code",{children:"Search"}),"."]}),o.jsxs(K,{code:"noOptions",children:["Set the text displayed when there are no options to select from. The default is ",o.jsx("code",{children:"No options"}),"."]}),o.jsxs($o,{children:[o.jsxs("div",{children:[o.jsx(ce,{title:"Event Handlers"}),o.jsxs(K,{code:"onLoad",children:["Called when the component is first loaded.  The handler is passed a reference to the ",o.jsx("code",{children:"SearchContext"})," object."]}),o.jsxs(K,{code:"onUnload",children:["Called when the component is unloaded.  The handler is passed a reference to the ",o.jsx("code",{children:"SearchContext"})," object."]}),o.jsx(K,{code:"onFocus",children:"Called when the component gains focus."}),o.jsx(K,{code:"onBlur",children:"Called when the component loses focus."}),o.jsx(K,{code:"onClick",children:"Called when the component is clicked."}),o.jsx(K,{code:"onOpen",children:"Called when the component is opened and selectable options are displayed."}),o.jsx(K,{code:"onClose",children:"Called when the component is closed and selectable options are hidden."}),o.jsx(K,{code:"onSelect",children:"Called when an option is selected.  The selection option is passed as an argument."})]}),o.jsxs("div",{className:"flow",children:[o.jsx(ce,{title:"CSS Classes"}),o.jsxs(K,{code:"placeholderClass",children:["Set the class for the placeholder text. The default is ",o.jsx("code",{children:"placeholder"}),"."]}),o.jsxs(K,{code:"inputClass",children:["Set the class for the input element. The default is ",o.jsx("code",{children:"input"}),"."]}),o.jsxs(K,{code:"selectingClass",children:["Set the class added when a selection is in place. The default is ",o.jsx("code",{children:"selecting"}),"."]}),o.jsxs(K,{code:"optionsClass",children:["Set the class added for the options container. The default is ",o.jsx("code",{children:"menu border bdr-1"}),"."]}),o.jsxs(K,{code:"optionClass",children:["Set the class added to each option element. The default is ",o.jsx("code",{children:"item"}),"."]}),o.jsxs(K,{code:"activeClass",children:["Set the class added to an option that is currently active. The default is ",o.jsx("code",{children:"active"}),"."]}),o.jsxs(K,{code:"noOptionsClass",children:["Set the class added to the element displayed when there are no options to select from. The default is ",o.jsx("code",{children:"none"}),"."]})]}),o.jsxs("div",{className:"flow",children:[o.jsx(ce,{title:"Components"}),o.jsx(K,{code:"Content",children:"Renders the content of the select component."}),o.jsx(K,{code:"Input",children:"Renders the input field."}),o.jsx(K,{code:"Options",id:"Options-component",children:"Renders the selectable options."}),o.jsx(K,{code:"Option",children:"Renders an individual option."}),o.jsx(K,{code:"NoOptions",id:"NoOptions-component",children:"Renders a message indicating that there are no options to select from."})]})]})]})]}),RM=Object.freeze(Object.defineProperty({__proto__:null,default:NM},Symbol.toStringTag,{value:"Module"})),Y1=[{id:100,animal:"Ant"},{id:101,animal:"Bat"},{id:102,animal:"Cat"},{id:103,animal:"Dog"}],OM=()=>{const[e,t]=ee.useState(!1),[n,r]=ee.useState(Y1),a=i=>{r(i),t(!0)},s=()=>{r(Y1.map(i=>({...i,moved:!1}))),t(!1)},l=({item:i,setNodeRef:c,style:u,listeners:d,...p})=>o.jsx("div",{ref:c,style:u,className:`sortable border item mar-r-2 pad pad-h-2 ${i.moved?"moved":""}`,...p,...d,children:i.animal});return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"flex space middle mar-b-4",children:[o.jsx("h3",{children:"Drag Items to Set Order"}),e&&o.jsx("div",{children:o.jsx(A,{color:"brown",size:"smallest",text:"Reset Order",iconLeft:"rotate-flipx",onClick:s})})]}),o.jsx("div",{className:"sortable list Horizontal",children:o.jsx(O_,{items:n,Item:l,setOrder:a})})]})},DM=`import { HorizontalSort, Button } from '@/src/index.jsx'

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

export default HorizontalSortExample`,Px=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"HorizontalSort"})," component works exactly the same but constricts the items to be sorted horizontally."]}),o.jsx(je,{Component:OM,code:DM})]}),MM=Object.freeze(Object.defineProperty({__proto__:null,default:Px},Symbol.toStringTag,{value:"Module"})),ci=[{id:100,animal:"Alan Aardvark"},{id:101,animal:"Brian Badger"},{id:102,animal:"Colin Camel"},{id:103,animal:"David Dog"},{id:104,animal:"Edward Elephant"},{id:105,animal:"Frank Ferret"},{id:106,animal:"Gerald Giraffe"},{id:107,animal:"Hector Hedgehog"}],AM=()=>{const[e,t]=ee.useState(!1),[n,r]=ee.useState(ci),a=i=>{r(i),t(!0)},s=()=>{r(ci.map(i=>({...i,moved:!1}))),t(!1)},l=({item:i,setNodeRef:c,style:u,listeners:d,...p})=>o.jsx("div",{ref:c,style:u,className:`sortable item border mar-r-2 mar-b-2 pad pad-h-2 ${i.moved?"moved":""}`,...p,...d,children:i.animal});return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"flex space middle mar-b-4",children:[o.jsx("h3",{children:"Drag Items to Set Order"}),e&&o.jsx("div",{children:o.jsx(A,{color:"brown",size:"smallest",text:"Reset Order",iconLeft:"rotate-flipx",onClick:s})})]}),o.jsx("div",{className:`sortable ${e?"changed":""}`,children:o.jsx(Mp,{items:n,Item:l,setOrder:a})})]})},PM=`import { Sortable, Button } from '@/src/index.jsx'

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

export default SortableExample`,$x=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"Sortable"})," component is a wrapper around"," ",o.jsx("a",{href:"https://dndkit.com/",children:"dnd kit"})," for creating sortable components."]}),o.jsx(je,{Component:AM,code:PM})]}),$M=Object.freeze(Object.defineProperty({__proto__:null,default:$x},Symbol.toStringTag,{value:"Module"})),IM=()=>{const[e,t]=ee.useState(!1),[n,r]=ee.useState(ci),a=i=>{r(i),t(!0)},s=()=>{r(ci.map(i=>({...i,moved:!1}))),t(!1)},l=({item:i,setNodeRef:c,style:u,listeners:d,...p})=>o.jsx("div",{ref:c,style:u,className:`sortable item border mar-b-2 pad pad-h-2 ${i.moved?"moved":""}`,...p,...d,children:i.animal});return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"flex space middle mar-b-4",children:[o.jsx("h3",{className:"mar-t-none",children:"Drag Items to Set Order"}),e&&o.jsx("div",{children:o.jsx(A,{color:"brown",size:"smallest",text:"Reset Order",iconLeft:"rotate-flipx",onClick:s})})]}),o.jsx("div",{className:"sortable list vertical",children:o.jsx(D_,{items:n,Item:l,setOrder:a})})]})},BM=`import { VerticalSort, Button } from '@/src/index.jsx'

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

export default VerticalSortExample`,Ix=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"VerticalSort"})," component works exactly the same but constricts the items to be sorted vertically."]}),o.jsx(je,{Component:IM,code:BM})]}),zM=Object.freeze(Object.defineProperty({__proto__:null,default:Ix},Symbol.toStringTag,{value:"Module"})),FM=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Sortable"}),o.jsx($x,{}),o.jsx("h1",{children:"Vertical Sort"}),o.jsx(Ix,{}),o.jsx("h1",{children:"Horizontal Sort"}),o.jsx(Px,{}),o.jsx(ft,{tocName:"sortable",children:o.jsx($o,{children:o.jsxs("div",{className:"flow",children:[o.jsx(ce,{title:"Properties"}),o.jsxs(K,{code:"items",children:["An array of items to sort.  Each should be an object which must contain an ",o.jsx("code",{children:"id"})," property to uniquely identify it."]}),o.jsxs(K,{code:"Item",children:["A component used to render each item.  It will be passed an"," ",o.jsx("code",{children:"item"})," from the list of items, ",o.jsx("code",{children:"setNodeRef"})," ","which must be added to the generate element via the ",o.jsx("code",{children:"ref"})," ","property, a ",o.jsx("code",{children:"style"})," object containing style,",o.jsx("code",{children:"listeners"})," and other ",o.jsx("code",{children:"props"})," which should be added to the element."]}),o.jsxs(K,{code:"setOrder",children:["A function which will be called when the order of items changes. It will be pass an array containing the ",o.jsx("code",{children:"items"})," in the new order."]})]})})})]}),UM=Object.freeze(Object.defineProperty({__proto__:null,default:FM},Symbol.toStringTag,{value:"Module"})),HM=`## using npm
$ npm add @abw/badger-react-ui

## using yarn
$ yarn add @abw/badger-react-ui

## using pnpm
$ pnpm add @abw/badger-react-ui`,VM="import '@abw/badger-react-ui/styles/badger-css-react-ui.min.css';",WM="@import '@abw/badger-react-ui/styles/badger-css-react-ui.scss';",ZM=`// If you're already importing Badger CSS styles
// something like this...
import '@abw/badger-css/styles/badger.min.css';

// ...then you only need to add this line to get
// the additional styles from Badger React UI
import '@abw/badger-react-ui/styles/badger-react-ui.min.css';`,KM=`// If you're already importing Badger CSS styles
// something like this...
import '@abw/badger-css/styles/badger.scss';

// ...then you only need to add this line to get
// the additional styles from Badger React UI
import '@abw/badger-react-ui/styles/badger-react-ui.scss';
`,GM=()=>o.jsxs("div",{className:"prose flow",children:[o.jsx("h1",{children:"Installation"}),o.jsx("h2",{children:"Adding to a Javascript Project"}),o.jsxs("p",{children:["Add ",o.jsx("code",{children:"@abw/badger-react-ui"})," to your Javascript project using your favourite package manager."]}),o.jsx(tr,{code:HM,caption:"Installing",language:"shell",className:"mar-b-8",expand:!0}),o.jsx("h2",{children:"Importing the CSS"}),o.jsxs($o,{children:[o.jsx("p",{children:"The precise details on how you import the CSS will vary depending on what framework and bundler you're using.  For a React app using Vite or running under Next.js, for example, you can add the CSS file to your main application script as show below."}),o.jsxs("p",{children:["For other frameworks and/or bundlers you should consult the documentation on how to import a CSS file from a module in your"," ",o.jsx("code",{children:"node_modules"})," directory."]})]}),o.jsx(tr,{code:VM,caption:"Combined CSS for Badger CSS / React UI",language:"js",className:"mar-b-8",expand:!0}),o.jsx("h2",{children:"Importing the SCSS"}),o.jsxs($o,{children:[o.jsx("p",{children:"If you're using SASS/SCSS to build your stylesheet then you can import the SCSS components."}),o.jsx("p",{children:"Add the following line to your main SCSS stylesheet source."})]}),o.jsx(tr,{code:WM,caption:"Combined SCSS for Badger CSS / React UI",language:"scss",className:"mar-b-8",expand:!0}),o.jsx("h2",{children:"Includes Badger CSS!"}),o.jsxs("p",{children:["Note that the examples shown above import stylesheets that"," ",o.jsx("b",{children:"include"})," the styles from Badger CSS.  If you're already using Badger CSS and have it imported, or if you've customised your installation of Badger CSS, then you only need to import the additional styles for Badger React UI."]}),o.jsx(tr,{code:ZM,caption:"Separate CSS for Badger CSS / React UI",language:"js",className:"mar-b-8",expand:!0}),o.jsx(tr,{code:KM,caption:"Separate SCSS for Badger CSS / React UI",language:"scss",className:"mar-b-8",expand:!0})]}),YM=Object.freeze(Object.defineProperty({__proto__:null,default:GM},Symbol.toStringTag,{value:"Module"})),XM=e=>v.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 900 348",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",xmlSpace:"preserve","xmlns:serif":"http://www.serif.com/",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:2},...e},v.createElement("path",{className:"white",d:"M251.572,212.02C254.513,216.061 254.715,224.14 250.095,227.707C250.444,223.032 248.285,217.636 246.595,215.207C245.351,213.421 240.529,209.129 235.734,208.678C239.528,206.432 248.479,207.771 251.572,212.02ZM384.14,296.071C385.221,300.139 369.105,297.678 368.976,310.316C368.912,316.686 371.784,320.829 368.158,321.337C364.186,321.893 363.702,317.912 363.009,312.67C361.525,301.448 369.403,297.943 376.939,295.687C383.239,293.8 383.721,294.493 384.14,296.071ZM253.718,205.387C253.325,205.165 252.924,204.95 252.515,204.744C240.306,198.572 226.195,201.866 221.023,212.097C216.954,220.147 219.624,230.108 226.897,236.996C223.855,235.725 220.886,234.082 218.121,232C201.872,219.763 198.65,197.554 202.498,192.469C205.797,188.109 229.508,185.044 245.757,197.281C248.897,199.645 251.533,202.419 253.718,205.387ZM237.701,38.979C234.959,40.644 229.11,29.763 219.15,31.701C213.297,32.839 209.964,30.344 213.732,27.34C224.434,18.806 242.755,35.909 237.701,38.979ZM102.358,65.632C92.93,59.118 82.319,55.79 70.261,59.171C61.606,61.598 55.943,67.285 53.203,74.67C51.916,74.775 50.609,74.911 49.293,75.073C41.358,76.053 33.068,77.961 26.855,79.508C45.336,54.696 68.07,46.037 90.212,45.935L91.775,45.928L92.073,44.393C93.513,36.977 89.339,29.817 78.425,24.264C102.932,19.041 133.157,24.498 149.387,33.721L151.514,34.93L152.164,32.571C153.117,29.113 152.884,20.563 147.007,12.944C177.743,18.398 201.051,28.288 219.375,41.206C253.271,69.998 271.19,107.581 286.422,143.401C303.117,182.661 316.606,219.801 344.235,241.041C344.731,241.562 345.232,242.081 345.737,242.598C354.202,251.26 369.687,264.151 388.439,280.71C390.567,282.59 392.536,284.445 394.289,286.258C390.175,286.465 384.884,287.861 378.121,289.401C355.898,294.457 355.058,304.229 357.619,320.184C358.932,328.361 362.585,332.134 367.854,333.381C347.657,338.931 337.347,342.519 312.425,337.814C273.532,330.471 236.683,316.046 225.943,310.994C225.749,310.608 225.423,310.285 224.995,310.101C210.606,303.913 200.922,296.04 196.833,286.988C198.796,285.944 200.367,284.755 201.74,283.804C202.604,283.205 202.819,282.017 202.22,281.154C201.622,280.29 200.434,280.074 199.57,280.673C196.577,282.748 192.528,286.255 184.628,285.578C183.581,285.489 182.657,286.266 182.568,287.313C182.478,288.361 183.256,289.284 184.303,289.373C187.94,289.685 190.882,289.256 193.326,288.475C197.252,297.211 205.873,305.078 218.736,311.412C193.53,320.617 171.273,314.508 151.338,302.875C130.029,290.441 111.338,271.747 94.517,258.202C80.516,246.928 67.672,239.285 55.79,240.915C48.382,241.931 41.226,246.463 34.375,256.107C23.226,231.606 38.024,207.024 52.658,191.434L54.205,189.786L52.319,188.541C38.022,179.099 21.81,184.908 11.009,196.975C10.204,187.276 14.741,173.112 22.182,160.21C29.69,147.192 40.209,135.4 51.636,130.932C122.17,117.473 156.365,176.933 192.036,228.629C212.984,258.988 259.699,294.806 348.432,323.461C343.645,308.274 345.837,301.003 349.276,294.022C327.909,284.035 301.478,267.497 284.086,236.018C236.493,149.873 215.639,88.568 146.875,71.303C134.894,68.295 119.263,65.091 102.358,65.632ZM102.275,79.762C100.823,87.371 78.096,65.294 73.617,77.189C65.317,99.228 57.382,86.649 59.352,80.667C69.456,49.974 103.609,72.771 102.275,79.762Z",style:{fill:"white"}}),v.createElement("path",{className:"black",d:"M52.054,78.596C51.294,78.672 50.529,78.759 49.759,78.854C39.593,80.108 28.834,82.925 22.777,84.472L17.915,85.714L20.728,81.559C40.142,52.889 64.62,42.703 88.525,42.149C88.888,35.685 83.351,30.024 71.924,25.526L66.722,23.478L72.092,21.924C97.213,14.653 130.162,19.649 148.812,29.092C148.924,24.696 147.199,17.339 140.471,11.578L135.382,7.22L142.003,8.25C168.067,12.303 189.097,19.357 206.402,28.658C206.575,28.721 206.748,28.783 206.921,28.846C208.323,24.341 212.385,20.472 219.865,21.145C239.675,22.925 243.917,32.841 244.961,51.125C270.1,72.457 287.235,102.584 300.677,133.136C312.72,160.511 321.799,188.221 331.031,210.219C334.652,218.847 338.295,226.594 342.151,233.093C344.174,235.417 346.275,237.699 348.461,239.935C356.894,248.564 372.28,261.359 390.96,277.855C394.6,281.069 397.773,284.243 400.276,287.281C402.859,288.644 404.62,291.472 405.778,296.536C405.975,297.173 406.119,297.795 406.209,298.403C406.253,298.697 406.287,298.994 406.314,299.294C406.615,301.13 406.861,303.2 407.058,305.527C407.84,314.777 405.022,326.993 390.631,330.7C387.826,331.422 385.121,332.093 382.547,332.63C378.775,333.843 375.504,334.896 375.505,334.895C353.988,343.064 340.05,346.906 311.718,341.557C270.836,333.838 232.195,318.357 223.053,313.826C195.401,325.115 171.094,318.814 149.418,306.165C127.941,293.633 109.081,274.82 92.128,261.169C85.494,255.827 79.163,251.286 73.076,248.283C67.258,245.412 61.69,243.95 56.308,244.689C49.102,245.677 42.338,250.617 35.728,260.909L33.983,263.626L32.45,260.785C18.325,234.619 32.7,207.872 48.29,190.557C35.023,183.325 20.386,190.519 11.384,202.521L9.087,205.583L8.03,201.904C5.111,191.745 9.777,174.095 18.883,158.307C24.331,148.86 31.344,140.108 39.121,133.986C28.037,137.259 16.107,142.234 3.209,149.173C16.216,114.812 33.291,93.85 51.552,81.51C51.677,80.52 51.845,79.548 52.054,78.596ZM251.572,212.02C248.479,207.771 239.528,206.432 235.734,208.678C240.529,209.129 245.351,213.421 246.595,215.207C248.285,217.636 250.444,223.032 250.095,227.707C254.715,224.14 254.513,216.061 251.572,212.02ZM384.14,296.071C383.721,294.493 383.239,293.8 376.939,295.687C369.403,297.943 361.525,301.448 363.009,312.67C363.702,317.912 364.186,321.893 368.158,321.337C371.784,320.829 368.912,316.686 368.976,310.316C369.105,297.678 385.221,300.139 384.14,296.071ZM253.718,205.387C251.533,202.419 248.897,199.645 245.757,197.281C229.508,185.044 205.797,188.109 202.498,192.469C198.65,197.554 201.872,219.763 218.121,232C220.886,234.082 223.855,235.725 226.897,236.996C219.624,230.108 216.954,220.147 221.023,212.097C226.195,201.866 240.306,198.572 252.515,204.744C252.924,204.95 253.325,205.165 253.718,205.387ZM237.701,38.979C242.755,35.909 224.434,18.806 213.732,27.34C209.964,30.344 213.297,32.839 219.15,31.701C229.11,29.763 234.959,40.644 237.701,38.979ZM102.358,65.632C119.263,65.091 134.894,68.295 146.875,71.303C215.639,88.568 236.493,149.873 284.086,236.018C301.478,267.497 327.909,284.035 349.276,294.022C345.837,301.003 343.645,308.274 348.432,323.461C259.699,294.806 212.984,258.988 192.036,228.629C156.365,176.933 122.17,117.473 51.636,130.932C40.209,135.4 29.69,147.192 22.182,160.21C14.741,173.112 10.204,187.276 11.009,196.975C21.81,184.908 38.022,179.099 52.319,188.541L54.205,189.786L52.658,191.434C38.024,207.024 23.226,231.606 34.375,256.107C41.226,246.463 48.382,241.931 55.79,240.915C67.672,239.285 80.516,246.928 94.517,258.202C111.338,271.747 130.029,290.441 151.338,302.875C171.273,314.508 193.53,320.617 218.736,311.412C205.873,305.078 197.252,297.211 193.326,288.475C190.882,289.256 187.94,289.685 184.303,289.373C183.256,289.284 182.478,288.361 182.568,287.313C182.657,286.266 183.581,285.489 184.628,285.578C192.528,286.255 196.577,282.748 199.57,280.673C200.434,280.074 201.622,280.29 202.22,281.154C202.819,282.017 202.604,283.205 201.74,283.804C200.367,284.755 198.796,285.944 196.833,286.988C200.922,296.04 210.606,303.913 224.995,310.101C225.423,310.285 225.749,310.608 225.943,310.994C236.683,316.046 273.532,330.471 312.425,337.814C337.347,342.519 347.657,338.931 367.854,333.381C362.585,332.134 358.932,328.361 357.619,320.184C355.058,304.229 355.898,294.457 378.121,289.401C384.884,287.861 390.175,286.465 394.289,286.258C392.536,284.445 390.567,282.59 388.439,280.71C369.687,264.151 354.202,251.26 345.737,242.598C345.232,242.081 344.731,241.562 344.235,241.041C316.606,219.801 303.117,182.661 286.422,143.401C271.19,107.581 253.271,69.998 219.375,41.206C201.051,28.288 177.743,18.398 147.007,12.944C152.884,20.563 153.117,29.113 152.164,32.571L151.514,34.93L149.387,33.721C133.157,24.498 102.932,19.041 78.425,24.264C89.339,29.817 93.513,36.977 92.073,44.393L91.775,45.928L90.212,45.935C68.07,46.037 45.336,54.696 26.855,79.508C33.068,77.961 41.358,76.053 49.293,75.073C50.609,74.911 51.916,74.775 53.203,74.67C55.943,67.285 61.606,61.598 70.261,59.171C82.319,55.79 92.93,59.118 102.358,65.632ZM102.275,79.762C103.609,72.771 69.456,49.974 59.352,80.667C57.382,86.649 65.317,99.228 73.617,77.189C78.096,65.294 100.823,87.371 102.275,79.762Z"}),v.createElement("path",{className:"badger",d:"M418.81,39.948C419.704,39.68 421.135,39.389 423.103,39.076C425.07,38.763 427.082,38.607 429.139,38.607C431.107,38.607 432.873,38.741 434.438,39.009C436.003,39.277 437.322,39.814 438.396,40.619C439.469,41.424 440.274,42.519 440.81,43.905C441.347,45.292 441.615,47.103 441.615,49.338L441.615,62.485C443.851,61.591 445.975,60.965 447.987,60.607C449.999,60.249 452.213,60.07 454.628,60.07C458.92,60.07 462.989,60.831 466.835,62.351C470.681,63.871 474.079,66.085 477.03,68.991C479.982,71.898 482.307,75.497 484.006,79.79C485.705,84.083 486.555,89.046 486.555,94.681C486.555,100.494 485.683,105.569 483.939,109.907C482.195,114.244 479.758,117.844 476.628,120.706C473.498,123.567 469.675,125.736 465.158,127.212C460.642,128.687 455.656,129.425 450.201,129.425C444.298,129.425 439.29,128.732 435.176,127.346C431.062,125.96 427.574,124.238 424.712,122.181C420.777,119.409 418.81,115.831 418.81,111.449L418.81,39.948ZM450.201,111.449C454.314,111.449 457.512,110.041 459.792,107.224C462.073,104.406 463.213,100.226 463.213,94.681C463.213,89.046 462.05,84.843 459.725,82.071C457.4,79.298 454.27,77.912 450.335,77.912C448.546,77.912 447.003,78.091 445.707,78.449C444.41,78.806 443.001,79.343 441.481,80.059L441.481,109.303C442.465,109.929 443.65,110.443 445.036,110.846C446.422,111.248 448.144,111.449 450.201,111.449ZM524.787,60.07C529.617,60.07 534.021,60.562 538.001,61.546C541.981,62.53 545.379,64.028 548.196,66.04C551.013,68.052 553.182,70.601 554.702,73.686C556.223,76.772 556.983,80.416 556.983,84.62L556.983,114.669C556.983,116.994 556.335,118.895 555.038,120.37C553.741,121.846 552.198,123.12 550.41,124.193C544.597,127.681 536.413,129.425 525.86,129.425C521.121,129.425 516.85,128.978 513.049,128.084C509.248,127.189 505.984,125.848 503.256,124.059C500.529,122.271 498.427,119.99 496.951,117.218C495.476,114.445 494.738,111.226 494.738,107.559C494.738,101.388 496.571,96.648 500.238,93.339C503.905,90.03 509.584,87.973 517.275,87.168L534.848,85.29L534.848,84.351C534.848,81.758 533.708,79.902 531.428,78.784C529.147,77.666 525.86,77.107 521.568,77.107C518.169,77.107 514.86,77.465 511.641,78.18C508.421,78.896 505.515,79.79 502.921,80.863C501.758,80.059 500.775,78.829 499.97,77.174C499.165,75.52 498.762,73.798 498.762,72.01C498.762,69.684 499.321,67.829 500.439,66.442C501.557,65.056 503.279,63.871 505.604,62.887C508.198,61.904 511.261,61.188 514.793,60.741C518.326,60.294 521.657,60.07 524.787,60.07ZM525.86,112.791C527.381,112.791 529.058,112.634 530.891,112.321C532.724,112.008 534.088,111.583 534.983,111.047L534.983,100.315L525.324,101.12C522.82,101.299 520.763,101.835 519.153,102.73C517.543,103.624 516.738,104.965 516.738,106.754C516.738,108.543 517.431,109.996 518.818,111.114C520.204,112.232 522.551,112.791 525.86,112.791ZM568.117,94.681C568.117,88.778 569.012,83.658 570.8,79.321C572.589,74.983 575.071,71.384 578.245,68.522C581.42,65.66 585.132,63.536 589.38,62.15C593.628,60.763 598.211,60.07 603.13,60.07C604.919,60.07 606.663,60.227 608.362,60.54C610.061,60.853 611.447,61.233 612.52,61.68L612.52,39.948C613.415,39.68 614.846,39.389 616.813,39.076C618.781,38.763 620.793,38.607 622.85,38.607C624.817,38.607 626.584,38.741 628.149,39.009C629.714,39.277 631.033,39.814 632.106,40.619C633.179,41.424 633.984,42.519 634.521,43.905C635.057,45.292 635.326,47.103 635.326,49.338L635.326,112.925C635.326,117.128 633.358,120.482 629.423,122.986C626.83,124.685 623.476,126.183 619.362,127.48C615.248,128.777 610.508,129.425 605.142,129.425C599.329,129.425 594.12,128.62 589.514,127.011C584.908,125.401 581.018,123.076 577.843,120.035C574.668,116.994 572.253,113.35 570.599,109.102C568.944,104.854 568.117,100.047 568.117,94.681ZM606.215,77.912C601.386,77.912 597.675,79.298 595.081,82.071C592.488,84.843 591.191,89.046 591.191,94.681C591.191,100.226 592.398,104.406 594.813,107.224C597.227,110.041 600.715,111.449 605.276,111.449C606.886,111.449 608.339,111.203 609.636,110.711C610.933,110.22 611.939,109.661 612.655,109.035L612.655,79.522C610.866,78.449 608.72,77.912 606.215,77.912ZM681.339,60.07C686.436,60.07 691.064,60.719 695.223,62.016C699.382,63.312 702.892,64.989 705.754,67.046C707.542,68.298 708.951,69.684 709.979,71.205C711.008,72.725 711.522,74.693 711.522,77.107L711.522,124.059C711.522,128.799 710.628,132.891 708.839,136.334C707.051,139.777 704.613,142.639 701.528,144.919C698.443,147.2 694.821,148.877 690.662,149.95C686.503,151.023 682.054,151.56 677.314,151.56C669.176,151.56 662.781,150.464 658.131,148.273C653.48,146.082 651.155,142.527 651.155,137.608C651.155,135.551 651.58,133.74 652.43,132.175C653.279,130.61 654.241,129.425 655.314,128.62C657.907,130.051 660.836,131.259 664.101,132.242C667.365,133.226 670.741,133.718 674.229,133.718C679.058,133.718 682.904,132.913 685.766,131.303C688.627,129.694 690.058,127.1 690.058,123.523L690.058,121.376C686.392,122.986 681.92,123.791 676.643,123.791C672.619,123.791 668.796,123.187 665.174,121.98C661.552,120.773 658.377,118.895 655.649,116.346C652.922,113.797 650.73,110.51 649.076,106.486C647.421,102.461 646.594,97.677 646.594,92.132C646.594,86.677 647.466,81.937 649.21,77.912C650.954,73.888 653.369,70.556 656.454,67.918C659.54,65.28 663.206,63.312 667.454,62.016C671.702,60.719 676.33,60.07 681.339,60.07ZM689.656,79.522C689.03,79.164 688.113,78.806 686.906,78.449C685.699,78.091 684.201,77.912 682.412,77.912C678.03,77.912 674.743,79.142 672.552,81.601C670.361,84.061 669.265,87.571 669.265,92.132C669.265,97.319 670.361,101.053 672.552,103.333C674.743,105.614 677.538,106.754 680.936,106.754C684.603,106.754 687.51,105.904 689.656,104.205L689.656,79.522ZM760.084,129.425C754.807,129.425 749.911,128.687 745.395,127.212C740.878,125.736 736.943,123.523 733.59,120.571C730.236,117.62 727.598,113.909 725.675,109.437C723.752,104.965 722.791,99.734 722.791,93.742C722.791,87.839 723.752,82.764 725.675,78.516C727.598,74.268 730.124,70.78 733.254,68.052C736.384,65.325 739.962,63.312 743.986,62.016C748.011,60.719 752.124,60.07 756.328,60.07C761.068,60.07 765.383,60.786 769.273,62.217C773.163,63.648 776.517,65.615 779.334,68.119C782.151,70.623 784.342,73.619 785.908,77.107C787.473,80.595 788.255,84.396 788.255,88.51C788.255,91.551 787.406,93.876 785.706,95.486C784.007,97.095 781.637,98.124 778.596,98.571L745.462,103.535C746.445,106.486 748.458,108.699 751.498,110.175C754.539,111.651 758.027,112.388 761.962,112.388C765.629,112.388 769.094,111.919 772.359,110.98C775.623,110.041 778.283,108.945 780.34,107.693C781.771,108.587 782.979,109.84 783.962,111.449C784.946,113.059 785.438,114.758 785.438,116.547C785.438,120.571 783.56,123.567 779.804,125.535C776.942,127.055 773.722,128.084 770.145,128.62C766.568,129.157 763.214,129.425 760.084,129.425ZM756.328,76.705C754.181,76.705 752.326,77.063 750.761,77.778C749.196,78.493 747.921,79.41 746.937,80.528C745.954,81.646 745.216,82.898 744.724,84.284C744.232,85.67 743.941,87.079 743.852,88.51L766.791,84.754C766.523,82.965 765.539,81.176 763.84,79.388C762.141,77.599 759.637,76.705 756.328,76.705ZM822.061,127.145C821.166,127.413 819.758,127.681 817.835,127.95C815.912,128.218 813.922,128.352 811.865,128.352C809.898,128.352 808.131,128.218 806.566,127.95C805.001,127.681 803.682,127.145 802.609,126.34C801.536,125.535 800.709,124.439 800.127,123.053C799.546,121.667 799.255,119.856 799.255,117.62L799.255,77.376C799.255,75.319 799.635,73.552 800.396,72.077C801.156,70.601 802.251,69.282 803.682,68.119C805.113,66.957 806.879,65.906 808.981,64.967C811.083,64.028 813.341,63.201 815.756,62.485C818.17,61.77 820.674,61.211 823.268,60.808C825.861,60.406 828.455,60.205 831.049,60.205C835.341,60.205 838.74,61.032 841.244,62.686C843.748,64.341 845,67.046 845,70.802C845,72.054 844.821,73.284 844.463,74.491C844.106,75.699 843.659,76.794 843.122,77.778C841.244,77.778 839.321,77.867 837.354,78.046C835.386,78.225 833.463,78.493 831.585,78.851C829.707,79.209 827.941,79.589 826.286,79.991C824.632,80.394 823.223,80.863 822.061,81.4L822.061,127.145Z"}),v.createElement("path",{className:"react-ui",d:"M456.264,259.551C455.489,259.783 454.269,260.016 452.604,260.248C450.939,260.48 449.215,260.596 447.434,260.596C445.73,260.596 444.2,260.48 442.845,260.248C441.49,260.016 440.347,259.551 439.418,258.854C438.488,258.157 437.772,257.208 437.268,256.007C436.765,254.807 436.513,253.239 436.513,251.302L436.513,216.449C436.513,214.667 436.842,213.138 437.501,211.86C438.159,210.582 439.108,209.439 440.347,208.432C441.586,207.426 443.116,206.516 444.936,205.702C446.756,204.889 448.712,204.173 450.803,203.553C452.894,202.933 455.063,202.449 457.309,202.101C459.555,201.752 461.801,201.578 464.047,201.578C467.765,201.578 470.708,202.294 472.877,203.727C475.046,205.16 476.13,207.503 476.13,210.756C476.13,211.84 475.975,212.905 475.665,213.951C475.355,214.997 474.968,215.945 474.504,216.797C472.877,216.797 471.212,216.875 469.508,217.03C467.804,217.185 466.139,217.417 464.512,217.727C462.886,218.037 461.356,218.366 459.923,218.714C458.49,219.063 457.27,219.469 456.264,219.934L456.264,259.551ZM511.913,261.526C507.343,261.526 503.103,260.887 499.191,259.609C495.28,258.331 491.872,256.414 488.968,253.858C486.063,251.302 483.778,248.088 482.113,244.215C480.448,240.343 479.615,235.812 479.615,230.623C479.615,225.511 480.448,221.115 482.113,217.436C483.778,213.757 485.966,210.737 488.677,208.374C491.388,206.012 494.486,204.269 497.971,203.146C501.457,202.023 505.02,201.462 508.66,201.462C512.765,201.462 516.502,202.081 519.871,203.321C523.24,204.56 526.145,206.264 528.584,208.432C531.024,210.601 532.922,213.196 534.277,216.216C535.633,219.237 536.31,222.529 536.31,226.092C536.31,228.725 535.574,230.739 534.103,232.133C532.631,233.527 530.579,234.418 527.945,234.805L499.249,239.104C500.101,241.659 501.844,243.576 504.477,244.854C507.111,246.132 510.131,246.771 513.539,246.771C516.715,246.771 519.716,246.365 522.543,245.551C525.37,244.738 527.674,243.789 529.456,242.705C530.695,243.48 531.741,244.564 532.593,245.958C533.445,247.352 533.871,248.824 533.871,250.373C533.871,253.858 532.244,256.453 528.991,258.157C526.513,259.473 523.724,260.364 520.626,260.829C517.528,261.294 514.624,261.526 511.913,261.526ZM508.66,215.868C506.801,215.868 505.194,216.178 503.838,216.797C502.483,217.417 501.379,218.211 500.527,219.179C499.675,220.147 499.036,221.231 498.61,222.432C498.184,223.632 497.933,224.852 497.855,226.092L517.722,222.839C517.489,221.29 516.637,219.74 515.166,218.191C513.694,216.642 511.526,215.868 508.66,215.868ZM569.073,201.462C573.255,201.462 577.069,201.888 580.516,202.74C583.963,203.592 586.906,204.889 589.346,206.632C591.785,208.374 593.664,210.582 594.98,213.254C596.297,215.926 596.955,219.082 596.955,222.722L596.955,248.746C596.955,250.76 596.394,252.406 595.271,253.684C594.148,254.962 592.812,256.066 591.263,256.995C586.228,260.016 579.141,261.526 570.002,261.526C565.897,261.526 562.199,261.139 558.907,260.364C555.615,259.59 552.788,258.428 550.426,256.879C548.064,255.33 546.244,253.355 544.966,250.954C543.688,248.553 543.049,245.764 543.049,242.589C543.049,237.245 544.636,233.14 547.812,230.274C550.987,227.408 555.906,225.627 562.567,224.93L577.786,223.303L577.786,222.49C577.786,220.244 576.798,218.637 574.823,217.669C572.848,216.7 570.002,216.216 566.284,216.216C563.341,216.216 560.475,216.526 557.687,217.146C554.899,217.765 552.382,218.54 550.135,219.469C549.129,218.772 548.277,217.707 547.58,216.275C546.883,214.842 546.534,213.351 546.534,211.802C546.534,209.788 547.018,208.181 547.986,206.98C548.954,205.78 550.445,204.754 552.459,203.902C554.705,203.05 557.358,202.43 560.417,202.043C563.477,201.655 566.362,201.462 569.073,201.462ZM570.002,247.12C571.319,247.12 572.771,246.984 574.359,246.713C575.946,246.442 577.128,246.074 577.902,245.609L577.902,236.315L569.537,237.012C567.369,237.167 565.587,237.632 564.193,238.406C562.799,239.181 562.102,240.343 562.102,241.892C562.102,243.441 562.702,244.699 563.903,245.668C565.103,246.636 567.136,247.12 570.002,247.12ZM640.871,217.03C638.934,217.03 637.095,217.339 635.352,217.959C633.609,218.579 632.099,219.489 630.821,220.689C629.543,221.89 628.517,223.381 627.743,225.162C626.968,226.944 626.581,229.035 626.581,231.436C626.581,236.238 627.955,239.839 630.705,242.24C633.455,244.641 636.804,245.842 640.754,245.842C643.078,245.842 645.092,245.571 646.796,245.029C648.5,244.486 650.01,243.906 651.327,243.286C652.876,244.37 654.037,245.551 654.812,246.829C655.587,248.107 655.974,249.637 655.974,251.418C655.974,254.594 654.463,257.053 651.443,258.796C648.422,260.538 644.24,261.41 638.896,261.41C634.016,261.41 629.601,260.693 625.651,259.26C621.701,257.828 618.313,255.814 615.486,253.219C612.659,250.625 610.471,247.507 608.922,243.867C607.373,240.227 606.598,236.199 606.598,231.784C606.598,226.672 607.431,222.2 609.096,218.366C610.761,214.532 613.027,211.376 615.892,208.897C618.758,206.419 622.069,204.56 625.826,203.321C629.582,202.081 633.551,201.462 637.734,201.462C643.31,201.462 647.609,202.469 650.63,204.482C653.65,206.496 655.161,209.091 655.161,212.266C655.161,213.738 654.812,215.113 654.115,216.391C653.418,217.669 652.605,218.772 651.675,219.702C650.359,219.082 648.771,218.482 646.912,217.901C645.053,217.32 643.039,217.03 640.871,217.03ZM685.599,240.265C685.599,242.279 686.238,243.712 687.516,244.564C688.794,245.416 690.595,245.842 692.918,245.842C694.08,245.842 695.281,245.745 696.52,245.551C697.759,245.358 698.844,245.106 699.773,244.796C700.47,245.648 701.07,246.597 701.574,247.643C702.077,248.688 702.329,249.947 702.329,251.418C702.329,254.362 701.225,256.763 699.018,258.621C696.81,260.48 692.918,261.41 687.342,261.41C680.526,261.41 675.279,259.861 671.6,256.763C667.921,253.665 666.081,248.63 666.081,241.659L666.081,191.935C666.933,191.703 668.153,191.451 669.741,191.18C671.329,190.909 673.013,190.773 674.795,190.773C678.203,190.773 680.855,191.374 682.753,192.574C684.65,193.775 685.599,196.311 685.599,200.184L685.599,207.619L700.819,207.619C701.283,208.471 701.729,209.536 702.155,210.814C702.581,212.092 702.794,213.506 702.794,215.055C702.794,217.765 702.193,219.721 700.993,220.922C699.792,222.122 698.185,222.722 696.171,222.722L685.599,222.722L685.599,240.265ZM799.454,233.643C799.454,237.826 798.737,241.64 797.305,245.087C795.872,248.533 793.8,251.476 791.089,253.916C788.378,256.356 785.086,258.234 781.214,259.551C777.341,260.868 772.965,261.526 768.086,261.526C763.206,261.526 758.83,260.868 754.958,259.551C751.085,258.234 747.793,256.356 745.082,253.916C742.372,251.476 740.3,248.533 738.867,245.087C737.434,241.64 736.718,237.826 736.718,233.643L736.718,189.263C737.57,189.108 738.925,188.895 740.784,188.624C742.643,188.353 744.424,188.217 746.128,188.217C747.909,188.217 749.478,188.353 750.833,188.624C752.189,188.895 753.331,189.379 754.261,190.076C755.19,190.773 755.887,191.742 756.352,192.981C756.816,194.22 757.049,195.847 757.049,197.86L757.049,233.295C757.049,237.012 758.075,239.917 760.128,242.008C762.18,244.099 764.833,245.145 768.086,245.145C771.416,245.145 774.088,244.099 776.102,242.008C778.116,239.917 779.123,237.012 779.123,233.295L779.123,189.263C779.975,189.108 781.33,188.895 783.189,188.624C785.048,188.353 786.829,188.217 788.533,188.217C790.314,188.217 791.883,188.353 793.238,188.624C794.594,188.895 795.736,189.379 796.666,190.076C797.595,190.773 798.292,191.742 798.757,192.981C799.221,194.22 799.454,195.847 799.454,197.86L799.454,233.643ZM834.54,259.202C833.688,259.435 832.352,259.667 830.531,259.899C828.711,260.132 826.911,260.248 825.129,260.248C823.348,260.248 821.779,260.112 820.424,259.841C819.069,259.57 817.926,259.086 816.997,258.389C816.067,257.692 815.37,256.724 814.906,255.485C814.441,254.245 814.208,252.619 814.208,250.605L814.208,189.263C815.06,189.108 816.416,188.895 818.275,188.624C820.134,188.353 821.915,188.217 823.619,188.217C825.4,188.217 826.969,188.353 828.324,188.624C829.68,188.895 830.822,189.379 831.751,190.076C832.681,190.773 833.378,191.742 833.843,192.981C834.307,194.22 834.54,195.847 834.54,197.86L834.54,259.202Z"})),QM=e=>v.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 440 440",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",xmlSpace:"preserve","xmlns:serif":"http://www.serif.com/",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:1.5},...e},v.createElement("circle",{cx:220,cy:220,r:144,style:{fill:"rgb(136,136,136)",stroke:"black",strokeWidth:"0.33px"}}),v.createElement("path",{d:"M220,12C334.798,12 428,105.202 428,220C428,334.798 334.798,428 220,428C105.202,428 12,334.798 12,220C12,105.202 105.202,12 220,12ZM220,76C140.524,76 76,140.524 76,220C76,299.476 140.524,364 220,364C299.476,364 364,299.476 364,220C364,140.524 299.476,76 220,76Z",style:{fill:"rgb(206,206,206)",stroke:"black",strokeWidth:"6.67px"}}),v.createElement("path",{d:"M41.319,232.772C38.119,232.829 35.878,232.789 34.556,232.652C33.233,232.516 32.025,232.097 30.891,231.317C29.797,230.537 28.939,229.512 28.315,228.163C27.731,226.853 27.383,225.299 27.351,223.499C27.321,221.82 27.574,220.295 28.11,218.925C28.645,217.555 29.466,216.461 30.532,215.641C31.636,214.782 32.828,214.28 34.145,214.097C35.421,213.914 37.7,213.793 40.979,213.735L46.378,213.638C49.538,213.582 51.819,213.621 53.142,213.758C54.464,213.894 55.672,214.313 56.766,215.093C57.9,215.873 58.758,216.898 59.343,218.248C59.966,219.557 60.274,221.112 60.306,222.912C60.336,224.591 60.083,226.116 59.547,227.486C59.052,228.855 58.231,229.95 57.126,230.769C56.021,231.629 54.829,232.131 53.553,232.313C52.236,232.497 49.957,232.618 46.718,232.675L41.319,232.772ZM51.53,224.348C53.01,224.322 53.968,224.225 54.365,224.058C54.762,223.891 54.957,223.567 54.947,223.047C54.94,222.607 54.774,222.29 54.45,222.056C54.126,221.862 53.124,221.759 51.484,221.789L36.727,222.052C34.887,222.085 33.769,222.185 33.331,222.313C32.934,222.48 32.7,222.844 32.71,223.364C32.72,223.924 32.966,224.279 33.489,224.43C33.972,224.581 35.173,224.64 37.012,224.607L51.53,224.348ZM60.115,235.306L61.347,243.494C61.681,245.709 61.739,247.439 61.562,248.68C61.424,249.914 61.047,250.901 60.464,251.596C59.92,252.284 59.189,252.799 58.275,253.179C57.356,253.52 55.95,253.853 53.972,254.151L51.243,254.562C49.265,254.859 47.772,254.882 46.796,254.584C45.827,254.325 45.002,253.681 44.361,252.645C43.719,251.609 43.228,250.226 42.96,248.447L42.632,246.271L30.054,248.165L28.827,240.017L60.115,235.306ZM55.962,244.264L48.012,245.461L48.101,246.054C48.214,246.806 48.45,247.296 48.887,247.514C49.285,247.737 50.06,247.782 51.207,247.609L53.778,247.222C54.846,247.061 55.534,246.796 55.797,246.392C56.066,246.028 56.117,245.293 55.962,244.264ZM65.668,263.888L35.019,271.744L32.973,263.762L63.622,255.906L65.668,263.888ZM73.017,284.844L43.393,295.958L40.864,289.217L52.805,280.165L39.36,285.21L36.944,278.768L66.567,267.654L68.984,274.095L57.267,283.404L70.6,278.402L73.017,284.844ZM78.538,295.659L50.283,309.897L46.575,302.539L74.83,288.301L78.538,295.659ZM74.884,324.988C72.198,326.727 70.274,327.877 69.079,328.459C67.884,329.042 66.637,329.325 65.262,329.262C63.921,329.177 62.651,328.76 61.408,327.945C60.221,327.141 59.105,326.005 58.127,324.494C57.214,323.084 56.623,321.655 56.354,320.209C56.085,318.763 56.204,317.4 56.676,316.142C57.159,314.828 57.906,313.773 58.927,312.922C59.915,312.092 61.786,310.786 64.539,309.004L69.073,306.07C71.725,304.353 73.683,303.181 74.878,302.598C76.073,302.015 77.32,301.733 78.661,301.817C80.036,301.88 81.306,302.297 82.515,303.135C83.736,303.917 84.819,305.074 85.797,306.585C86.71,307.996 87.3,309.424 87.569,310.87C87.872,312.294 87.753,313.657 87.248,314.937C86.764,316.251 86.017,317.306 85.03,318.136C84.008,318.987 82.138,320.293 79.418,322.054L74.884,324.988ZM79.105,312.441C80.347,311.637 81.11,311.048 81.358,310.697C81.607,310.345 81.601,309.968 81.319,309.531C81.08,309.162 80.772,308.98 80.372,308.952C79.995,308.958 79.09,309.401 77.714,310.292L65.322,318.312C63.778,319.312 62.881,319.987 62.577,320.327C62.328,320.679 62.322,321.111 62.605,321.548C62.909,322.018 63.306,322.19 63.829,322.042C64.319,321.915 65.37,321.33 66.915,320.331L79.105,312.441ZM104.097,331.146L80.061,351.721L75.379,346.251L83.505,333.662L72.595,343L68.121,337.773L92.158,317.198L96.632,322.425L88.805,335.179L99.624,325.92L104.097,331.146ZM116.973,342.973L99.303,369.64L93.032,363.991L96.536,359.503L94.337,357.522L90.179,361.421L83.849,355.718L108.146,335.022L116.973,342.973ZM100.106,355.182C102.219,352.239 104.837,348.676 108.073,344.485C103.407,348.41 100.049,351.361 98.026,353.308L100.106,355.182ZM133.778,355.495L130.062,360.657L126.102,357.806L111.332,378.323L104.645,373.509L119.414,352.992L115.486,350.164L119.202,345.002L133.778,355.495ZM135.754,356.629L147.731,363.322L144.628,368.874L139.845,366.2L136.918,371.438L141.387,373.936L138.46,379.173L133.991,376.676L130.596,382.752L135.833,385.678L132.75,391.196L120.32,384.249L135.754,356.629ZM150.451,364.831L156.15,367.169C159.813,368.672 162.217,369.874 163.376,370.738C164.534,371.603 165.306,372.568 165.653,373.618C166,374.669 166.095,375.702 165.849,376.725C165.654,377.726 164.969,379.607 163.83,382.382L159.625,392.633C158.547,395.261 157.708,396.991 157.099,397.736C156.476,398.518 155.781,399.054 154.939,399.314C154.149,399.553 153.22,399.604 152.256,399.424C151.255,399.23 149.84,398.779 148.027,398.035L138.442,394.103L150.451,364.831ZM156.01,372.991L148.115,392.235C149.188,392.675 149.946,392.726 150.387,392.388C150.828,392.051 151.462,390.927 152.267,388.966L156.927,377.605C157.474,376.272 157.749,375.391 157.827,374.99C157.904,374.59 157.826,374.255 157.569,373.933C157.348,373.627 156.824,373.325 156.01,372.991ZM194.889,388.345L187.399,386.838L187.865,384.525C188.078,383.466 188.102,382.736 187.961,382.422C187.828,382.069 187.538,381.888 187.107,381.802C186.636,381.707 186.205,381.824 185.891,382.169C185.537,382.506 185.301,383.07 185.135,383.894C184.93,384.913 184.929,385.729 185.101,386.294C185.265,386.899 185.884,387.676 186.989,388.673C190.171,391.517 192.051,393.731 192.724,395.254C193.389,396.816 193.418,399.106 192.802,402.165C192.361,404.361 191.755,405.953 191.04,406.87C190.317,407.826 189.124,408.484 187.484,408.929C185.891,409.343 184.095,409.349 182.134,408.954C179.977,408.52 178.221,407.718 176.857,406.587C175.486,405.495 174.679,404.231 174.461,402.882C174.243,401.532 174.37,399.681 174.836,397.367L175.246,395.328L182.736,396.835L181.979,400.599C181.742,401.776 181.71,402.545 181.843,402.898C182.007,403.298 182.328,403.526 182.877,403.636C183.387,403.739 183.866,403.59 184.18,403.246C184.541,402.869 184.785,402.266 184.951,401.442C185.322,399.599 185.323,398.375 184.924,397.724C184.532,397.033 183.467,395.839 181.727,394.143C179.995,392.407 178.859,391.159 178.35,390.444C177.802,389.722 177.419,388.788 177.2,387.642C176.982,386.497 177.062,385.085 177.393,383.438C177.875,381.046 178.535,379.384 179.345,378.404C180.193,377.432 181.347,376.767 182.798,376.447C184.297,376.095 185.968,376.105 187.89,376.492C189.968,376.91 191.709,377.586 193.057,378.592C194.374,379.551 195.18,380.611 195.446,381.725C195.711,382.839 195.631,384.659 195.142,387.09L194.889,388.345ZM200.214,379.311L213.892,380.38L213.397,386.721L207.933,386.294L207.466,392.276L212.57,392.675L212.102,398.657L206.998,398.257L206.456,405.196L212.437,405.664L211.945,411.965L197.748,410.855L200.214,379.311ZM225.777,380.267L226.42,405.578L231.418,405.452L231.578,411.77L218.342,412.105L217.54,380.476L225.777,380.267ZM233.537,379.948L247.346,378.191L248.149,384.5L242.514,385.217L243.272,391.169L248.311,390.528L249.069,396.479L244.029,397.121L245.706,410.295L237.532,411.335L233.537,379.948ZM258.549,375.749L265.335,406.653L257.287,408.42L250.501,377.517L258.549,375.749ZM281.962,378.541L274.713,380.955L273.968,378.716C273.626,377.691 273.285,377.046 273.007,376.844C272.716,376.603 272.374,376.591 271.957,376.73C271.501,376.882 271.185,377.198 271.084,377.653C270.945,378.121 271.02,378.728 271.286,379.525C271.615,380.512 272.019,381.22 272.449,381.625C272.892,382.068 273.815,382.435 275.27,382.751C279.444,383.638 282.176,384.625 283.516,385.612C284.869,386.637 286.033,388.61 287.019,391.57C287.727,393.696 287.992,395.378 287.827,396.529C287.675,397.718 286.967,398.882 285.765,400.083C284.588,401.234 283.032,402.132 281.135,402.764C279.047,403.459 277.125,403.636 275.379,403.332C273.646,403.066 272.318,402.37 271.458,401.307C270.598,400.244 269.789,398.574 269.043,396.335L268.386,394.362L275.635,391.947L276.848,395.591C277.227,396.729 277.581,397.412 277.872,397.653C278.214,397.918 278.606,397.956 279.137,397.779C279.63,397.615 279.972,397.248 280.073,396.793C280.2,396.287 280.112,395.642 279.846,394.845C279.252,393.061 278.645,391.999 277.975,391.632C277.292,391.227 275.774,390.721 273.421,390.113C271.056,389.467 269.45,388.948 268.653,388.581C267.818,388.227 267.021,387.607 266.263,386.721C265.504,385.836 264.872,384.571 264.341,382.977C263.57,380.662 263.317,378.891 263.532,377.639C263.786,376.374 264.456,375.223 265.557,374.224C266.683,373.174 268.138,372.352 269.997,371.733C272.009,371.063 273.855,370.785 275.525,370.988C277.144,371.165 278.371,371.684 279.155,372.519C279.939,373.354 280.774,374.973 281.557,377.326L281.962,378.541ZM298.791,359.997L312.694,388.418L305.293,392.039L299.457,380.11L297.265,381.182L303.101,393.111L295.699,396.732L281.795,368.311L289.197,364.69L294.172,374.858L296.363,373.786L291.389,363.618L298.791,359.997ZM328.977,350.672L322.871,355.265L321.453,353.379C320.804,352.515 320.275,352.012 319.947,351.909C319.595,351.773 319.267,351.87 318.915,352.134C318.532,352.423 318.332,352.823 318.381,353.287C318.397,353.775 318.662,354.326 319.167,354.998C319.792,355.829 320.401,356.372 320.937,356.619C321.498,356.898 322.49,356.953 323.97,356.791C328.209,356.305 331.113,356.373 332.698,356.883C334.306,357.425 336.036,358.927 337.912,361.42C339.258,363.21 340.044,364.721 340.254,365.865C340.488,367.04 340.185,368.369 339.428,369.89C338.678,371.355 337.487,372.701 335.889,373.903C334.131,375.225 332.364,376.004 330.612,376.27C328.885,376.568 327.404,376.33 326.251,375.596C325.098,374.862 323.8,373.535 322.382,371.649L321.132,369.987L327.237,365.395L329.546,368.463C330.267,369.422 330.82,369.958 331.172,370.093C331.58,370.237 331.964,370.148 332.411,369.812C332.827,369.499 333.034,369.043 332.986,368.579C332.945,368.059 332.656,367.475 332.151,366.804C331.021,365.301 330.108,364.487 329.356,364.352C328.58,364.185 326.98,364.187 324.556,364.358C322.108,364.498 320.42,364.516 319.548,364.421C318.644,364.35 317.691,364.016 316.691,363.417C315.69,362.818 314.688,361.82 313.679,360.477C312.212,358.527 311.41,356.928 311.216,355.673C311.054,354.393 311.324,353.088 312.051,351.791C312.785,350.438 313.903,349.197 315.47,348.019C317.164,346.744 318.827,345.894 320.474,345.556C322.066,345.21 323.394,345.312 324.403,345.854C325.411,346.397 326.717,347.667 328.208,349.649L328.977,350.672ZM352.018,341.021C354.259,343.305 355.771,344.96 356.581,346.015C357.391,347.069 357.917,348.234 358.13,349.594C358.315,350.925 358.161,352.253 357.61,353.634C357.06,354.958 356.17,356.279 354.885,357.539C353.686,358.715 352.405,359.58 351.041,360.132C349.678,360.685 348.319,360.841 346.992,360.631C345.608,360.419 344.425,359.899 343.386,359.068C342.376,358.266 340.722,356.695 338.425,354.353L334.644,350.498C332.431,348.242 330.892,346.558 330.082,345.504C329.272,344.449 328.746,343.285 328.561,341.953C328.348,340.594 328.502,339.266 329.081,337.914C329.603,336.561 330.521,335.269 331.806,334.008C333.005,332.832 334.286,331.967 335.649,331.415C336.984,330.834 338.343,330.677 339.699,330.917C341.083,331.128 342.266,331.649 343.276,332.45C344.315,333.281 345.968,334.852 348.237,337.166L352.018,341.021ZM338.881,339.394C337.845,338.338 337.116,337.708 336.721,337.535C336.327,337.361 335.959,337.443 335.587,337.807C335.273,338.115 335.157,338.453 335.21,338.85C335.291,339.218 335.905,340.016 337.054,341.187L347.389,351.724C348.678,353.038 349.519,353.782 349.913,354.012C350.307,354.185 350.732,354.104 351.103,353.74C351.503,353.348 351.592,352.925 351.342,352.442C351.12,351.987 350.337,351.074 349.049,349.76L338.881,339.394ZM341.099,325.297L349.778,314.415L354.751,318.38L351.209,322.821L355.9,326.562L359.067,322.591L363.758,326.332L360.59,330.303L370.973,338.584L365.835,345.026L341.099,325.297ZM360.217,298.339L365.582,301.754L362.962,305.871L384.287,319.447L379.862,326.398L358.537,312.822L355.937,316.905L350.572,313.489L360.217,298.339ZM373.724,268.616L401.315,284.523L397.232,293.957C392.425,292.879 387.026,291.458 381.05,289.656C383.345,290.998 388.109,293.888 395.342,298.326L391.291,307.687L360.792,298.497L363.969,291.155L374.435,294.769L384.533,298.224C379.631,295.754 373.288,292.181 365.542,287.521L368.942,279.665C369.87,279.936 373.139,281.046 378.872,283.004L390.287,286.942C383.414,283.488 376.851,279.819 370.562,275.921L373.724,268.616ZM376.781,254.323L408.604,257.594L406.512,265.77L400.91,264.75L400.176,267.617L405.56,269.49L403.448,277.745L373.836,265.832L376.781,254.323ZM395.425,263.594C391.838,263.089 387.466,262.425 382.252,261.503C387.895,263.814 392.068,265.419 394.731,266.307L395.425,263.594ZM378.103,248.493L378.802,242.694C379.266,238.842 379.736,236.28 380.221,234.928C380.661,233.612 381.55,232.591 382.886,231.865C384.218,231.18 386.216,230.977 388.877,231.298C391.339,231.594 392.929,232.108 393.691,232.804C394.454,233.5 394.826,234.754 394.77,236.56C395.359,235.02 396.048,233.975 396.791,233.5C397.533,233.025 398.167,232.779 398.781,232.692C399.352,232.64 400.91,232.747 403.452,233.053L411.712,234.049L410.798,241.634L400.354,240.375C398.686,240.175 397.639,240.169 397.208,240.399C396.778,240.63 396.498,241.281 396.364,242.393L410.502,244.096L409.516,252.277L378.103,248.493ZM384.49,240.962L391.479,241.804C391.589,240.891 391.507,240.236 391.312,239.85C391.116,239.464 390.306,239.165 388.916,238.998L387.209,238.792C386.216,238.672 385.522,238.75 385.161,239.069C384.84,239.393 384.6,240.049 384.49,240.962ZM380.371,226.869L380.35,213.149L386.71,213.139L386.718,218.619L392.718,218.61L392.71,213.49L398.71,213.48L398.718,218.6L405.678,218.589L405.669,212.589L411.989,212.579L412.011,226.819L380.371,226.869Z"}),v.createElement("path",{d:"M65.814,139.849C68.729,141.171 70.736,142.169 71.872,142.859C73.008,143.55 73.919,144.446 74.609,145.637C75.262,146.812 75.598,148.106 75.583,149.592C75.548,151.026 75.195,152.579 74.452,154.218C73.759,155.748 72.876,157.017 71.804,158.024C70.733,159.032 69.522,159.669 68.208,159.951C66.841,160.254 65.55,160.196 64.281,159.796C63.05,159.414 60.94,158.545 57.953,157.191L53.034,154.961C50.156,153.656 48.113,152.642 46.977,151.951C45.841,151.261 44.929,150.364 44.276,149.19C43.586,147.999 43.251,146.705 43.302,145.235C43.301,143.785 43.69,142.248 44.433,140.609C45.127,139.079 46.009,137.81 47.081,136.803C48.116,135.779 49.327,135.142 50.677,134.876C52.044,134.573 53.335,134.631 54.567,135.014C55.836,135.414 57.945,136.282 60.896,137.62L65.814,139.849ZM52.976,143.077C51.628,142.466 50.721,142.142 50.291,142.123C49.86,142.103 49.546,142.312 49.331,142.786C49.15,143.186 49.163,143.544 49.356,143.895C49.564,144.209 50.426,144.731 51.919,145.408L65.362,151.503C67.038,152.262 68.091,152.652 68.542,152.724C68.972,152.744 69.339,152.515 69.554,152.041C69.785,151.531 69.715,151.104 69.308,150.744C68.937,150.4 67.877,149.832 66.201,149.072L52.976,143.077ZM52.319,126.004L56.705,118.981C57.892,117.081 58.972,115.728 59.913,114.901C60.82,114.053 61.749,113.548 62.643,113.399C63.504,113.229 64.394,113.314 65.336,113.619C66.256,113.958 67.541,114.619 69.237,115.678L71.578,117.14C73.275,118.2 74.424,119.153 74.971,120.014C75.54,120.84 75.748,121.866 75.562,123.07C75.376,124.275 74.85,125.644 73.897,127.171L72.732,129.037L83.52,135.775L79.156,142.764L52.319,126.004ZM61.298,121.897L68.117,126.156L68.435,125.647C68.838,125.002 68.978,124.476 68.787,124.027C68.63,123.599 68.07,123.06 67.086,122.446L64.88,121.069C63.964,120.497 63.269,120.251 62.807,120.387C62.366,120.489 61.849,121.015 61.298,121.897ZM65.491,105.806L74.058,95.089L79.026,99.06L75.604,103.341L80.291,107.087L83.488,103.088L88.174,106.834L84.977,110.834L90.414,115.179L94.16,110.493L99.097,114.439L90.205,125.562L65.491,105.806ZM91.595,76.985L113.834,99.49L108.713,104.551L95.575,97.345L105.668,107.559L100.775,112.395L78.535,89.89L83.429,85.054L96.71,91.949L86.701,81.82L91.595,76.985ZM125.69,63.611L119.349,67.872L118.033,65.913C117.43,65.017 116.929,64.486 116.607,64.365C116.262,64.211 115.93,64.29 115.565,64.536C115.166,64.803 114.946,65.192 114.97,65.658C114.961,66.146 115.196,66.711 115.664,67.409C116.244,68.272 116.823,68.846 117.346,69.122C117.89,69.431 118.878,69.538 120.364,69.455C124.624,69.195 127.52,69.417 129.075,70.011C130.653,70.637 132.301,72.229 134.041,74.818C135.29,76.677 135.995,78.228 136.144,79.381C136.314,80.568 135.942,81.878 135.104,83.357C134.277,84.78 133.017,86.06 131.357,87.176C129.531,88.403 127.726,89.086 125.962,89.259C124.221,89.465 122.756,89.149 121.643,88.354C120.531,87.56 119.306,86.166 117.989,84.207L116.829,82.481L123.17,78.22L125.312,81.407C125.981,82.403 126.505,82.967 126.849,83.121C127.249,83.286 127.637,83.218 128.102,82.905C128.534,82.615 128.765,82.171 128.741,81.705C128.728,81.184 128.471,80.585 128.002,79.888C126.954,78.328 126.085,77.466 125.341,77.291C124.575,77.083 122.977,77 120.548,77.042C118.096,77.051 116.409,76.98 115.544,76.839C114.645,76.72 113.711,76.335 112.744,75.684C111.776,75.033 110.829,73.983 109.892,72.589C108.531,70.563 107.815,68.924 107.688,67.66C107.595,66.373 107.934,65.085 108.728,63.829C109.533,62.516 110.716,61.336 112.343,60.243C114.102,59.06 115.808,58.3 117.471,58.05C119.079,57.788 120.4,57.961 121.378,58.557C122.357,59.152 123.593,60.49 124.976,62.548L125.69,63.611ZM151.705,60.191C153.126,63.059 154.048,65.102 154.491,66.356C154.934,67.609 155.072,68.88 154.852,70.239C154.615,71.562 154.056,72.776 153.103,73.917C152.169,75.005 150.913,75.984 149.3,76.783C147.795,77.529 146.308,77.953 144.841,78.055C143.374,78.156 142.033,77.883 140.837,77.27C139.587,76.64 138.624,75.777 137.895,74.666C137.184,73.59 136.1,71.582 134.644,68.643L132.247,63.804C130.844,60.972 129.904,58.894 129.461,57.64C129.019,56.386 128.881,55.115 129.118,53.793C129.338,52.434 129.897,51.219 130.867,50.114C131.783,48.99 133.057,48.047 134.67,47.248C136.175,46.502 137.662,46.079 139.129,45.977C140.579,45.839 141.919,46.112 143.133,46.761C144.383,47.392 145.346,48.254 146.057,49.33C146.787,50.442 147.87,52.449 149.309,55.353L151.705,60.191ZM139.723,54.566C139.066,53.239 138.568,52.415 138.247,52.127C137.927,51.84 137.551,51.803 137.085,52.033C136.691,52.229 136.475,52.514 136.402,52.907C136.365,53.283 136.701,54.232 137.429,55.702L143.981,68.928C144.797,70.577 145.366,71.545 145.669,71.886C145.99,72.173 146.419,72.229 146.885,71.998C147.387,71.749 147.603,71.375 147.516,70.838C147.446,70.336 146.985,69.226 146.168,67.577L139.723,54.566ZM167.692,34.963L174.441,55.018C175.206,57.293 175.666,58.911 175.821,59.871C176.013,60.82 175.878,61.92 175.489,63.149C175.088,64.339 174.357,65.429 173.348,66.317C172.3,67.218 170.987,67.956 169.395,68.491C167.613,69.091 165.919,69.324 164.35,69.176C162.794,69.067 161.502,68.615 160.501,67.897C159.499,67.179 158.751,66.334 158.28,65.311C157.809,64.287 156.98,62.076 155.845,58.702L149.874,40.96L157.683,38.332L165.249,60.813C165.696,62.14 166.052,62.948 166.281,63.251C166.56,63.579 166.927,63.667 167.344,63.526C167.837,63.36 168.076,63.069 168.088,62.601C168.099,62.133 167.856,61.159 167.358,59.681L159.92,37.579L167.692,34.963ZM174.727,33.131L180.462,32.033C184.273,31.303 186.857,30.972 188.292,31.023C189.681,31.042 190.923,31.578 192.021,32.631C193.079,33.691 193.88,35.533 194.383,38.165C194.85,40.601 194.844,42.272 194.412,43.21C193.981,44.147 192.9,44.884 191.162,45.379C192.809,45.471 194.014,45.811 194.692,46.373C195.37,46.936 195.797,47.465 196.067,48.024C196.29,48.552 196.662,50.069 197.143,52.583L198.707,60.755L191.204,62.191L189.226,51.859C188.91,50.209 188.597,49.21 188.246,48.87C187.896,48.53 187.191,48.461 186.091,48.671L188.768,62.658L180.675,64.207L174.727,33.131ZM183.842,36.925L185.166,43.839C186.069,43.666 186.668,43.389 186.976,43.085C187.285,42.782 187.323,41.919 187.06,40.544L186.737,38.855C186.549,37.873 186.264,37.235 185.85,36.988C185.444,36.781 184.746,36.752 183.842,36.925ZM219.815,41.52L211.587,41.97L211.288,36.498C211.198,34.861 211.064,33.867 210.884,33.516C210.663,33.128 210.292,32.947 209.693,32.98C209.014,33.017 208.588,33.281 208.454,33.769C208.281,34.259 208.258,35.302 208.345,36.9L209.148,51.558C209.231,53.076 209.367,54.11 209.591,54.538C209.777,55.009 210.19,55.226 210.829,55.191C211.468,55.156 211.854,54.895 211.987,54.407C212.163,53.957 212.182,52.834 212.088,51.116L211.871,47.162L220.099,46.712L220.165,47.91C220.344,51.185 220.231,53.515 219.866,54.897C219.461,56.281 218.528,57.534 216.987,58.66C215.447,59.786 213.558,60.41 211.241,60.537C208.845,60.668 206.824,60.338 205.218,59.545C203.612,58.751 202.508,57.61 201.904,56.08C201.342,54.589 200.935,52.288 200.765,49.172L200.26,39.946C200.135,37.67 200.123,35.988 200.22,34.821C200.318,33.694 200.736,32.549 201.438,31.469C202.138,30.349 203.173,29.491 204.498,28.818C205.861,28.102 207.403,27.738 209.2,27.639C211.597,27.508 213.62,27.878 215.268,28.709C216.876,29.543 217.98,30.684 218.536,32.056C219.132,33.425 219.489,35.569 219.651,38.524L219.815,41.52ZM226.051,27.944L239.739,28.872L239.309,35.218L233.841,34.847L233.435,40.833L238.544,41.179L238.137,47.166L233.029,46.819L232.558,53.763L238.544,54.169L238.117,60.475L223.909,59.511L226.051,27.944ZM272.132,44.93L264.713,43.105L265.276,40.813C265.534,39.765 265.59,39.037 265.462,38.717C265.344,38.359 265.062,38.166 264.635,38.061C264.169,37.946 263.733,38.045 263.404,38.376C263.037,38.697 262.777,39.251 262.576,40.067C262.328,41.077 262.292,41.892 262.44,42.464C262.578,43.074 263.163,43.877 264.225,44.921C267.282,47.898 269.067,50.19 269.674,51.74C270.272,53.329 270.203,55.618 269.458,58.648C268.923,60.823 268.25,62.388 267.497,63.274C266.734,64.198 265.514,64.804 263.856,65.179C262.247,65.525 260.452,65.454 258.51,64.977C256.373,64.451 254.653,63.575 253.339,62.387C252.015,61.237 251.263,59.94 251.102,58.583C250.942,57.225 251.148,55.381 251.712,53.089L252.209,51.069L259.628,52.894L258.711,56.623C258.424,57.788 258.359,58.555 258.477,58.913C258.624,59.32 258.935,59.562 259.479,59.695C259.984,59.82 260.469,59.692 260.797,59.36C261.174,59 261.444,58.407 261.644,57.592C262.093,55.766 262.147,54.543 261.775,53.875C261.414,53.169 260.4,51.931 258.734,50.162C257.078,48.354 255.996,47.058 255.518,46.322C255.001,45.577 254.658,44.628 254.489,43.474C254.319,42.32 254.459,40.913 254.861,39.282C255.443,36.912 256.174,35.28 257.025,34.335C257.913,33.401 259.095,32.785 260.559,32.527C262.071,32.24 263.74,32.321 265.643,32.789C267.702,33.295 269.412,34.045 270.716,35.108C271.991,36.121 272.752,37.215 272.97,38.339C273.187,39.464 273.029,41.279 272.437,43.687L272.132,44.93ZM292.077,61.866C290.909,64.845 290.018,66.902 289.387,68.072C288.756,69.243 287.909,70.199 286.755,70.95C285.616,71.664 284.341,72.066 282.856,72.129C281.423,72.168 279.854,71.897 278.178,71.24C276.614,70.627 275.301,69.812 274.239,68.794C273.177,67.776 272.478,66.6 272.127,65.303C271.754,63.953 271.745,62.661 272.078,61.374C272.396,60.123 273.153,57.972 274.35,54.918L276.321,49.89C277.474,46.948 278.381,44.854 279.011,43.684C279.642,42.513 280.49,41.557 281.629,40.843C282.782,40.092 284.057,39.69 285.527,39.665C286.975,39.588 288.53,39.896 290.206,40.553C291.77,41.166 293.083,41.982 294.145,42.999C295.221,43.98 295.92,45.156 296.256,46.491C296.63,47.84 296.639,49.132 296.321,50.383C295.988,51.67 295.23,53.822 294.048,56.838L292.077,61.866ZM288.186,49.213C288.726,47.836 289.002,46.913 288.999,46.482C288.996,46.051 288.771,45.748 288.287,45.558C287.877,45.398 287.521,45.43 287.181,45.64C286.878,45.865 286.401,46.752 285.803,48.279L280.416,62.021C279.745,63.734 279.411,64.806 279.362,65.26C279.365,65.691 279.612,66.045 280.097,66.235C280.618,66.44 281.041,66.347 281.379,65.922C281.704,65.533 282.216,64.445 282.887,62.732L288.186,49.213ZM305.248,47.78L317.483,54.419L314.45,60.009L309.458,57.3L306.596,62.574L311.062,64.997L308.2,70.27L303.735,67.848L297.402,79.521L290.16,75.591L305.248,47.78ZM336.214,66.91L332.603,72.146L328.586,69.376L314.235,90.188L307.451,85.51L321.802,64.698L317.818,61.951L321.428,56.715L336.214,66.91ZM364.183,92.203L339.722,112.6L332.279,105.509C334.952,101.37 338.151,96.794 341.907,91.809C339.854,93.499 335.496,96.971 328.833,102.225L321.448,95.189L340.609,69.743L346.401,75.262L339.394,83.834L332.663,92.117C336.674,88.37 342.219,83.653 349.268,77.993L355.466,83.898C354.89,84.676 352.72,87.36 348.901,92.064L341.262,101.415C346.878,96.158 352.588,91.267 358.42,86.712L364.183,92.203ZM375.916,107.812L353.681,130.812L348.545,124.115L352.809,120.341L351.008,117.992L346.209,121.067L341.024,114.307L368.687,98.385L375.916,107.812ZM357.107,116.742C359.72,114.234 362.944,111.208 366.89,107.677C361.586,110.686 357.747,112.975 355.403,114.521L357.107,116.742ZM381.75,116.129L384.673,121.184C386.616,124.543 387.779,126.874 388.203,128.246C388.641,129.564 388.544,130.914 387.911,132.296C387.258,133.644 385.782,135.006 383.462,136.348C381.315,137.589 379.735,138.133 378.708,138.035C377.68,137.936 376.629,137.157 375.589,135.679C376.044,137.264 376.12,138.514 375.812,139.34C375.504,140.165 375.144,140.742 374.705,141.181C374.28,141.565 372.97,142.416 370.754,143.697L363.551,147.862L359.727,141.249L368.834,135.982C370.288,135.141 371.128,134.516 371.334,134.074C371.54,133.631 371.373,132.942 370.812,131.973L358.485,139.102L354.36,131.969L381.75,116.129ZM381.166,125.985L375.071,129.51C375.532,130.306 375.991,130.78 376.379,130.972C376.767,131.163 377.594,130.916 378.806,130.215L380.295,129.354C381.161,128.853 381.669,128.374 381.766,127.902C381.828,127.451 381.626,126.782 381.166,125.985ZM394.047,138.523L399.41,151.152L393.555,153.638L391.414,148.594L385.891,150.939L387.892,155.651L382.369,157.996L380.368,153.284L373.962,156.004L376.307,161.527L370.49,163.997L364.924,150.89L394.047,138.523Z"}),v.createElement("path",{d:"M184.955,228.867C188.721,238.945 188.513,248.571 184.331,257.744C180.149,266.917 173.328,273.271 163.868,276.806C162.694,277.245 161.783,276.599 161.136,274.868C160.466,273.075 160.618,271.785 161.592,270.998C165.55,268.391 167.432,264.376 167.237,258.953C167.118,255.615 165.001,248.444 160.888,237.438C158.162,230.143 155.958,225.188 154.277,222.575C150.745,216.708 146.627,213.702 141.923,213.557C140.501,214.089 139.223,212.84 138.091,209.81C137.167,207.337 137.447,205.823 138.931,205.269C147.834,201.941 156.818,202.6 165.882,207.246C174.969,211.953 181.327,219.16 184.955,228.867ZM154.841,276.691C155.65,278.855 155.467,280.157 154.292,280.596C144.462,284.27 134.975,283.869 125.834,279.394C116.823,275.08 110.469,267.978 106.772,258.085C103.145,248.378 103.217,238.768 106.99,229.254C110.725,219.826 117.074,213.437 126.039,210.086C127.029,209.717 127.959,210.038 128.831,211.051C129.61,211.817 130.208,212.756 130.624,213.869C131.017,214.92 131.112,215.836 130.911,216.616C130.678,217.125 129.963,217.851 128.764,218.792C127.404,219.864 126.471,220.952 125.968,222.057C125.054,223.948 124.673,226.416 124.824,229.46C125.129,232.728 126.46,237.515 128.817,243.822L132.768,254.395C136.096,263.298 139.268,269.053 142.286,271.66C145.11,274.127 148.362,275.097 152.04,274.568C152.395,274.576 152.932,274.692 153.65,274.917C154.144,275.296 154.541,275.888 154.841,276.691ZM242.304,166.531L250.75,188.847L244.327,191.459C243.207,191.102 241.934,189.957 240.507,188.025C238.841,185.829 237.838,184.653 237.498,184.498C232.627,181.457 228.398,180.606 224.812,181.946C223.452,182.455 222.252,181.318 221.212,178.535C220.38,176.31 220.332,174.954 221.066,174.468L222.364,173.983C223.539,173.544 225.332,173.437 227.742,173.664C230.152,173.891 231.851,173.82 232.84,173.45C234.51,172.826 235.717,171.247 236.461,168.714L242.304,166.531ZM263.863,212.907C266.451,219.832 265.806,226.591 261.928,233.184C258.136,239.252 252.716,243.602 245.667,246.237C244.493,246.676 243.374,245.473 242.311,242.629C241.294,239.908 241.254,238.197 242.189,237.495C242.638,237.187 243.283,236.84 244.126,236.455C246.622,235.028 248.416,233.512 249.508,231.907C250.599,230.301 250.832,228.663 250.208,226.994C248.984,223.717 246.104,222.045 241.569,221.978C240.125,221.884 235.883,222.412 228.844,223.563C221.782,224.652 215.452,224.023 209.854,221.676C203.537,219.104 199.281,214.881 197.086,209.008C194.845,203.01 194.983,196.969 197.501,190.885C200.103,184.839 204.403,180.695 210.401,178.454C211.204,178.153 212.042,178.51 212.914,179.523C213.608,180.25 214.129,181.077 214.476,182.004C215.284,184.168 215.171,185.655 214.134,186.465C212.318,187.637 210.964,189.2 210.073,191.154C209.02,193.238 208.864,195.27 209.603,197.248C209.973,198.238 210.694,199.131 211.767,199.928C215.673,202.837 220.643,203.41 226.679,201.648C228.703,201.032 230.917,200.451 233.321,199.906C235.724,199.36 238.366,198.795 241.249,198.211C245.088,198.115 248.954,199.031 252.845,200.959C258.25,203.731 261.922,207.713 263.863,212.907ZM214.54,257.975L205.898,235.415L212.483,232.954C213.603,233.311 214.888,234.486 216.338,236.481C217.857,238.661 218.829,239.848 219.254,240.042C224.063,243.107 228.323,243.946 232.032,242.559C233.393,242.051 234.593,243.188 235.632,245.97C236.464,248.196 236.471,249.533 235.651,249.98C235.489,250.111 235.098,250.292 234.48,250.523C233.244,250.985 231.42,251.103 229.01,250.876C226.6,250.649 224.931,250.709 224.004,251.056C222.335,251.68 221.128,253.258 220.383,255.791L214.54,257.975ZM316.313,138.873L324.758,161.189L318.336,163.801C317.216,163.444 315.942,162.299 314.515,160.366C312.849,158.171 311.846,156.995 311.507,156.84C306.635,153.799 302.407,152.948 298.821,154.288C297.46,154.797 296.26,153.66 295.221,150.877C294.389,148.652 294.34,147.296 295.075,146.81L296.373,146.325C297.548,145.886 299.34,145.779 301.75,146.006C304.16,146.233 305.86,146.161 306.849,145.792C308.518,145.168 309.725,143.589 310.47,141.056L316.313,138.873ZM337.872,185.249C340.46,192.174 339.815,198.933 335.937,205.526C332.145,211.593 326.724,215.944 319.676,218.579C318.501,219.018 317.382,217.815 316.32,214.971C315.303,212.25 315.262,210.539 316.198,209.837C316.646,209.529 317.292,209.182 318.134,208.797C320.631,207.37 322.425,205.854 323.516,204.249C324.607,202.643 324.841,201.005 324.217,199.336C322.992,196.059 320.113,194.387 315.578,194.32C314.133,194.226 309.892,194.754 302.853,195.905C295.791,196.994 289.46,196.365 283.862,194.018C277.546,191.446 273.29,187.223 271.095,181.35C268.854,175.352 268.992,169.311 271.509,163.227C274.112,157.181 278.412,153.037 284.409,150.796C285.213,150.495 286.051,150.852 286.923,151.865C287.617,152.592 288.138,153.419 288.484,154.346C289.293,156.51 289.179,157.997 288.143,158.807C286.326,159.979 284.973,161.542 284.082,163.496C283.029,165.58 282.872,167.612 283.612,169.59C283.981,170.58 284.703,171.473 285.776,172.27C289.681,175.179 294.652,175.752 300.687,173.99C302.712,173.374 304.926,172.793 307.329,172.248C309.732,171.702 312.375,171.137 315.257,170.553C319.097,170.457 322.962,171.373 326.854,173.301C332.258,176.073 335.931,180.055 337.872,185.249ZM288.549,230.317L279.907,207.757L286.491,205.296C287.611,205.653 288.896,206.828 290.346,208.823C291.866,211.003 292.838,212.19 293.262,212.384C298.072,215.449 302.331,216.288 306.041,214.901C307.401,214.393 308.601,215.53 309.641,218.312C310.473,220.538 310.479,221.875 309.66,222.322C309.497,222.453 309.107,222.634 308.489,222.865C307.252,223.327 305.429,223.445 303.019,223.218C300.609,222.991 298.94,223.051 298.013,223.398C296.343,224.022 295.136,225.6 294.392,228.133L288.549,230.317Z"}),v.createElement("path",{d:"M394.606,195.569C388.976,196.699 383.488,193.046 382.359,187.416C381.229,181.786 384.882,176.298 390.512,175.168C396.142,174.038 401.63,177.692 402.76,183.321C403.89,188.951 400.236,194.439 394.606,195.569Z"}),v.createElement("path",{d:"M49.46,175.274C55.091,176.4 58.748,181.886 57.621,187.517C56.495,193.147 51.009,196.804 45.378,195.678C39.748,194.551 36.091,189.066 37.217,183.435C38.344,177.804 43.83,174.148 49.46,175.274Z"})),qM=()=>o.jsx("div",{className:"flow",children:o.jsxs("div",{className:"mobile block-center pad-t-8 flow",children:[o.jsx(XM,{className:"brui-logo"}),o.jsx("h1",{className:"mar-t-8",children:"React UI Components"}),o.jsx("h2",{className:"mar-t-none large",children:"For Badger Fans"}),o.jsxs("p",{className:"larger",children:["This is my personal collection of React UI components built around the styles provided by"," ",o.jsx("a",{href:"https://abw.github.io/badger-css",children:"Badger CSS"})]}),o.jsx("div",{className:"text-center",children:o.jsx(QM,{className:"width-10rem"})}),o.jsx("p",{children:"This is Open Source Software and you're welcome to use it. But be warned that it is also Opiniated and Selfish Software."}),o.jsx("p",{children:"I wrote it for me to help my get my job done.  It provides a solid foundation of React components that allow me to get a new site up and running quickly."}),o.jsx("p",{children:"I don't have the time or inclination to help other people get their jobs done (unless they're my clients, colleagues, family or close friends).  So please be aware that this is effectively unsupported software and you're on your own.  If you're not comfortable with that then you should almost certainly be using one of the many other fine UI toolkits that are available."}),o.jsx("p",{children:"Also note that this collection is supposed to be a starting point, not a final destination. You can use the components and styles provided, but at some point you will probably want or need to dig in and start adding your own code, or modifying the builtin components."}),o.jsx("p",{children:"Everything is modular and themeable, so that's generally quite easy to achieve.  But it requires a reasonable knowledge of React, CSS and SASS.  The documentation is provided as a reference for me (and my colleagues) to use, and it assumes a fairly high level of proficiency in these areas."}),o.jsx("p",{children:"Or to put it another way, if you're expecting someone to hold your hand explaining how to get this up and running, then you've probably come to the wrong place."})]})}),JM=Object.freeze(Object.defineProperty({__proto__:null,default:qM},Symbol.toStringTag,{value:"Module"}));/**
 * @remix-run/router v1.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ze(){return ze=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ze.apply(this,arguments)}var Fe;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Fe||(Fe={}));const X1="popstate";function eA(e){e===void 0&&(e={});function t(r,a){let{pathname:s,search:l,hash:i}=r.location;return ls("",{pathname:s,search:l,hash:i},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(r,a){return typeof a=="string"?a:Wr(a)}return nA(t,n,null,e)}function se(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Vr(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function tA(){return Math.random().toString(36).substr(2,8)}function Q1(e,t){return{usr:e.state,key:e.key,idx:t}}function ls(e,t,n,r){return n===void 0&&(n=null),ze({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Un(t):t,{state:n,key:t&&t.key||r||tA()})}function Wr(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Un(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function nA(e,t,n,r){r===void 0&&(r={});let{window:a=document.defaultView,v5Compat:s=!1}=r,l=a.history,i=Fe.Pop,c=null,u=d();u==null&&(u=0,l.replaceState(ze({},l.state,{idx:u}),""));function d(){return(l.state||{idx:null}).idx}function p(){i=Fe.Pop;let _=d(),x=_==null?null:_-u;u=_,c&&c({action:i,location:j.location,delta:x})}function m(_,x){i=Fe.Push;let f=ls(j.location,_,x);n&&n(f,_),u=d()+1;let h=Q1(f,u),C=j.createHref(f);try{l.pushState(h,"",C)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;a.location.assign(C)}s&&c&&c({action:i,location:j.location,delta:1})}function y(_,x){i=Fe.Replace;let f=ls(j.location,_,x);n&&n(f,_),u=d();let h=Q1(f,u),C=j.createHref(f);l.replaceState(h,"",C),s&&c&&c({action:i,location:j.location,delta:0})}function b(_){let x=a.location.origin!=="null"?a.location.origin:a.location.href,f=typeof _=="string"?_:Wr(_);return se(x,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,x)}let j={get action(){return i},get location(){return e(a,l)},listen(_){if(c)throw new Error("A history only accepts one active listener");return a.addEventListener(X1,p),c=_,()=>{a.removeEventListener(X1,p),c=null}},createHref(_){return t(a,_)},createURL:b,encodeLocation(_){let x=b(_);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:m,replace:y,go(_){return l.go(_)}};return j}var Ie;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ie||(Ie={}));const rA=new Set(["lazy","caseSensitive","path","id","index","children"]);function oA(e){return e.index===!0}function Zu(e,t,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((a,s)=>{let l=[...n,s],i=typeof a.id=="string"?a.id:l.join("-");if(se(a.index!==!0||!a.children,"Cannot specify children on an index route"),se(!r[i],'Found a route id collision on id "'+i+`".  Route id's must be globally unique within Data Router usages`),oA(a)){let c=ze({},a,t(a),{id:i});return r[i]=c,c}else{let c=ze({},a,t(a),{id:i,children:void 0});return r[i]=c,a.children&&(c.children=Zu(a.children,t,l,r)),c}})}function jo(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Un(t):t,a=gr(r.pathname||"/",n);if(a==null)return null;let s=Bx(e);sA(s);let l=null;for(let i=0;l==null&&i<s.length;++i)l=mA(s[i],xA(a));return l}function aA(e,t){let{route:n,pathname:r,params:a}=e;return{id:n.id,pathname:r,params:a,data:t[n.id],handle:n.handle}}function Bx(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let a=(s,l,i)=>{let c={relativePath:i===void 0?s.path||"":i,caseSensitive:s.caseSensitive===!0,childrenIndex:l,route:s};c.relativePath.startsWith("/")&&(se(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=Ln([r,c.relativePath]),d=n.concat(c);s.children&&s.children.length>0&&(se(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Bx(s.children,t,d,u)),!(s.path==null&&!s.index)&&t.push({path:u,score:fA(u,s.index),routesMeta:d})};return e.forEach((s,l)=>{var i;if(s.path===""||!((i=s.path)!=null&&i.includes("?")))a(s,l);else for(let c of zx(s.path))a(s,l,c)}),t}function zx(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,a=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return a?[s,""]:[s];let l=zx(r.join("/")),i=[];return i.push(...l.map(c=>c===""?s:[s,c].join("/"))),a&&i.push(...l),i.map(c=>e.startsWith("/")&&c===""?"/":c)}function sA(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:hA(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const lA=/^:\w+$/,iA=3,cA=2,uA=1,dA=10,pA=-2,q1=e=>e==="*";function fA(e,t){let n=e.split("/"),r=n.length;return n.some(q1)&&(r+=pA),t&&(r+=cA),n.filter(a=>!q1(a)).reduce((a,s)=>a+(lA.test(s)?iA:s===""?uA:dA),r)}function hA(e,t){return e.length===t.length&&e.slice(0,-1).every((r,a)=>r===t[a])?e[e.length-1]-t[t.length-1]:0}function mA(e,t){let{routesMeta:n}=e,r={},a="/",s=[];for(let l=0;l<n.length;++l){let i=n[l],c=l===n.length-1,u=a==="/"?t:t.slice(a.length)||"/",d=Ku({path:i.relativePath,caseSensitive:i.caseSensitive,end:c},u);if(!d)return null;Object.assign(r,d.params);let p=i.route;s.push({params:r,pathname:Ln([a,d.pathname]),pathnameBase:jA(Ln([a,d.pathnameBase])),route:p}),d.pathnameBase!=="/"&&(a=Ln([a,d.pathnameBase]))}return s}function Ku(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=gA(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let s=a[0],l=s.replace(/(.)\/+$/,"$1"),i=a.slice(1);return{params:r.reduce((u,d,p)=>{let{paramName:m,isOptional:y}=d;if(m==="*"){let j=i[p]||"";l=s.slice(0,s.length-j.length).replace(/(.)\/+$/,"$1")}const b=i[p];return y&&!b?u[m]=void 0:u[m]=vA(b||"",m),u},{}),pathname:s,pathnameBase:l,pattern:e}}function gA(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Vr(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(l,i,c)=>(r.push({paramName:i,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),r]}function xA(e){try{return decodeURI(e)}catch(t){return Vr(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function vA(e,t){try{return decodeURIComponent(e)}catch(n){return Vr(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function gr(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function yA(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:a=""}=typeof e=="string"?Un(e):e;return{pathname:n?n.startsWith("/")?n:CA(n,t):t,search:bA(r),hash:SA(a)}}function CA(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function Mc(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Fx(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Pp(e,t){let n=Fx(e);return t?n.map((r,a)=>a===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function $p(e,t,n,r){r===void 0&&(r=!1);let a;typeof e=="string"?a=Un(e):(a=ze({},e),se(!a.pathname||!a.pathname.includes("?"),Mc("?","pathname","search",a)),se(!a.pathname||!a.pathname.includes("#"),Mc("#","pathname","hash",a)),se(!a.search||!a.search.includes("#"),Mc("#","search","hash",a)));let s=e===""||a.pathname==="",l=s?"/":a.pathname,i;if(l==null)i=n;else{let p=t.length-1;if(!r&&l.startsWith("..")){let m=l.split("/");for(;m[0]==="..";)m.shift(),p-=1;a.pathname=m.join("/")}i=p>=0?t[p]:"/"}let c=yA(a,i),u=l&&l!=="/"&&l.endsWith("/"),d=(s||l===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const Ln=e=>e.join("/").replace(/\/\/+/g,"/"),jA=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),bA=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,SA=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class Ip{constructor(t,n,r,a){a===void 0&&(a=!1),this.status=t,this.statusText=n||"",this.internal=a,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function Ux(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Hx=["post","put","patch","delete"],wA=new Set(Hx),_A=["get",...Hx],TA=new Set(_A),kA=new Set([301,302,303,307,308]),EA=new Set([307,308]),Ac={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},LA={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},ua={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Vx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,NA=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),Wx="remix-router-transitions";function RA(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",r=!n;se(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let a;if(e.mapRouteProperties)a=e.mapRouteProperties;else if(e.detectErrorBoundary){let T=e.detectErrorBoundary;a=L=>({hasErrorBoundary:T(L)})}else a=NA;let s={},l=Zu(e.routes,a,void 0,s),i,c=e.basename||"/",u=ze({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1},e.future),d=null,p=new Set,m=null,y=null,b=null,j=e.hydrationData!=null,_=jo(l,e.history.location,c),x=null;if(_==null){let T=It(404,{pathname:e.history.location.pathname}),{matches:L,route:N}=sh(l);_=L,x={[N.id]:T}}let f,h=_.some(T=>T.route.lazy),C=_.some(T=>T.route.loader);if(h)f=!1;else if(!C)f=!0;else if(u.v7_partialHydration){let T=e.hydrationData?e.hydrationData.loaderData:null,L=e.hydrationData?e.hydrationData.errors:null;f=_.every(N=>N.route.loader&&N.route.loader.hydrate!==!0&&(T&&T[N.route.id]!==void 0||L&&L[N.route.id]!==void 0))}else f=e.hydrationData!=null;let S,g={historyAction:e.history.action,location:e.history.location,matches:_,initialized:f,navigation:Ac,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||x,fetchers:new Map,blockers:new Map},w=Fe.Pop,k=!1,E,O=!1,M=new Map,F=null,G=!1,q=!1,ve=[],fe=[],X=new Map,D=0,I=-1,B=new Map,H=new Set,V=new Map,ye=new Map,oe=new Set,ge=new Map,re=new Map,Te=!1;function st(){if(d=e.history.listen(T=>{let{action:L,location:N,delta:$}=T;if(Te){Te=!1;return}Vr(re.size===0||$!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let z=Ps({currentLocation:g.location,nextLocation:N,historyAction:L});if(z&&$!=null){Te=!0,e.history.go($*-1),kr(z,{state:"blocked",location:N,proceed(){kr(z,{state:"proceeding",proceed:void 0,reset:void 0,location:N}),e.history.go($)},reset(){let te=new Map(g.blockers);te.set(z,ua),ke({blockers:te})}});return}return bt(L,N)}),n){UA(t,M);let T=()=>HA(t,M);t.addEventListener("pagehide",T),F=()=>t.removeEventListener("pagehide",T)}return g.initialized||bt(Fe.Pop,g.location,{initialHydration:!0}),S}function jt(){d&&d(),F&&F(),p.clear(),E&&E.abort(),g.fetchers.forEach((T,L)=>Qt(L)),g.blockers.forEach((T,L)=>As(L))}function ue(T){return p.add(T),()=>p.delete(T)}function ke(T,L){L===void 0&&(L={}),g=ze({},g,T);let N=[],$=[];u.v7_fetcherPersist&&g.fetchers.forEach((z,te)=>{z.state==="idle"&&(oe.has(te)?$.push(te):N.push(te))}),[...p].forEach(z=>z(g,{deletedFetchers:$,unstable_viewTransitionOpts:L.viewTransitionOpts,unstable_flushSync:L.flushSync===!0})),u.v7_fetcherPersist&&(N.forEach(z=>g.fetchers.delete(z)),$.forEach(z=>Qt(z)))}function Qe(T,L,N){var $,z;let{flushSync:te}=N===void 0?{}:N,Z=g.actionData!=null&&g.navigation.formMethod!=null&&nn(g.navigation.formMethod)&&g.navigation.state==="loading"&&(($=T.state)==null?void 0:$._isRedirect)!==!0,Y;L.actionData?Object.keys(L.actionData).length>0?Y=L.actionData:Y=null:Z?Y=g.actionData:Y=null;let W=L.loaderData?ah(g.loaderData,L.loaderData,L.matches||[],L.errors):g.loaderData,ae=g.blockers;ae.size>0&&(ae=new Map(ae),ae.forEach((he,Oe)=>ae.set(Oe,ua)));let Re=k===!0||g.navigation.formMethod!=null&&nn(g.navigation.formMethod)&&((z=T.state)==null?void 0:z._isRedirect)!==!0;i&&(l=i,i=void 0),G||w===Fe.Pop||(w===Fe.Push?e.history.push(T,T.state):w===Fe.Replace&&e.history.replace(T,T.state));let ne;if(w===Fe.Pop){let he=M.get(g.location.pathname);he&&he.has(T.pathname)?ne={currentLocation:g.location,nextLocation:T}:M.has(T.pathname)&&(ne={currentLocation:T,nextLocation:g.location})}else if(O){let he=M.get(g.location.pathname);he?he.add(T.pathname):(he=new Set([T.pathname]),M.set(g.location.pathname,he)),ne={currentLocation:g.location,nextLocation:T}}ke(ze({},L,{actionData:Y,loaderData:W,historyAction:w,location:T,initialized:!0,navigation:Ac,revalidation:"idle",restoreScrollPosition:He(T,L.matches||g.matches),preventScrollReset:Re,blockers:ae}),{viewTransitionOpts:ne,flushSync:te===!0}),w=Fe.Pop,k=!1,O=!1,G=!1,q=!1,ve=[],fe=[]}async function Nt(T,L){if(typeof T=="number"){e.history.go(T);return}let N=Gu(g.location,g.matches,c,u.v7_prependBasename,T,u.v7_relativeSplatPath,L==null?void 0:L.fromRouteId,L==null?void 0:L.relative),{path:$,submission:z,error:te}=J1(u.v7_normalizeFormMethod,!1,N,L),Z=g.location,Y=ls(g.location,$,L&&L.state);Y=ze({},Y,e.history.encodeLocation(Y));let W=L&&L.replace!=null?L.replace:void 0,ae=Fe.Push;W===!0?ae=Fe.Replace:W===!1||z!=null&&nn(z.formMethod)&&z.formAction===g.location.pathname+g.location.search&&(ae=Fe.Replace);let Re=L&&"preventScrollReset"in L?L.preventScrollReset===!0:void 0,ne=(L&&L.unstable_flushSync)===!0,he=Ps({currentLocation:Z,nextLocation:Y,historyAction:ae});if(he){kr(he,{state:"blocked",location:Y,proceed(){kr(he,{state:"proceeding",proceed:void 0,reset:void 0,location:Y}),Nt(T,L)},reset(){let Oe=new Map(g.blockers);Oe.set(he,ua),ke({blockers:Oe})}});return}return await bt(ae,Y,{submission:z,pendingError:te,preventScrollReset:Re,replace:L&&L.replace,enableViewTransition:L&&L.unstable_viewTransition,flushSync:ne})}function Yt(){if(Jr(),ke({revalidation:"loading"}),g.navigation.state!=="submitting"){if(g.navigation.state==="idle"){bt(g.historyAction,g.location,{startUninterruptedRevalidation:!0});return}bt(w||g.historyAction,g.navigation.location,{overrideNavigation:g.navigation})}}async function bt(T,L,N){E&&E.abort(),E=null,w=T,G=(N&&N.startUninterruptedRevalidation)===!0,Zi(g.location,g.matches),k=(N&&N.preventScrollReset)===!0,O=(N&&N.enableViewTransition)===!0;let $=i||l,z=N&&N.overrideNavigation,te=jo($,L,c),Z=(N&&N.flushSync)===!0;if(!te){let Oe=It(404,{pathname:L.pathname}),{matches:lt,route:qe}=sh($);eo(),Qe(L,{matches:lt,loaderData:{},errors:{[qe.id]:Oe}},{flushSync:Z});return}if(g.initialized&&!q&&PA(g.location,L)&&!(N&&N.submission&&nn(N.submission.formMethod))){Qe(L,{matches:te},{flushSync:Z});return}E=new AbortController;let Y=pa(e.history,L,E.signal,N&&N.submission),W,ae;if(N&&N.pendingError)ae={[Ba(te).route.id]:N.pendingError};else if(N&&N.submission&&nn(N.submission.formMethod)){let Oe=await Hn(Y,L,N.submission,te,{replace:N.replace,flushSync:Z});if(Oe.shortCircuited)return;W=Oe.pendingActionData,ae=Oe.pendingActionError,z=Pc(L,N.submission),Z=!1,Y=new Request(Y.url,{signal:Y.signal})}let{shortCircuited:Re,loaderData:ne,errors:he}=await Os(Y,L,te,z,N&&N.submission,N&&N.fetcherSubmission,N&&N.replace,N&&N.initialHydration===!0,Z,W,ae);Re||(E=null,Qe(L,ze({matches:te},W?{actionData:W}:{},{loaderData:ne,errors:he})))}async function Hn(T,L,N,$,z){z===void 0&&(z={}),Jr();let te=zA(L,N);ke({navigation:te},{flushSync:z.flushSync===!0});let Z,Y=Xu($,L);if(!Y.route.action&&!Y.route.lazy)Z={type:Ie.error,error:It(405,{method:T.method,pathname:L.pathname,routeId:Y.route.id})};else if(Z=await da("action",T,Y,$,s,a,c,u.v7_relativeSplatPath),T.signal.aborted)return{shortCircuited:!0};if(Pr(Z)){let W;return z&&z.replace!=null?W=z.replace:W=Z.location===g.location.pathname+g.location.search,await dn(g,Z,{submission:N,replace:W}),{shortCircuited:!0}}if(bo(Z)){let W=Ba($,Y.route.id);return(z&&z.replace)!==!0&&(w=Fe.Push),{pendingActionData:{},pendingActionError:{[W.route.id]:Z.error}}}if(Ar(Z))throw It(400,{type:"defer-action"});return{pendingActionData:{[Y.route.id]:Z.data}}}async function Os(T,L,N,$,z,te,Z,Y,W,ae,Re){let ne=$||Pc(L,z),he=z||te||ch(ne),Oe=i||l,[lt,qe]=eh(e.history,g,N,he,L,u.v7_partialHydration&&Y===!0,q,ve,fe,oe,V,H,Oe,c,ae,Re);if(eo(Ce=>!(N&&N.some(Ee=>Ee.route.id===Ce))||lt&&lt.some(Ee=>Ee.route.id===Ce)),I=++D,lt.length===0&&qe.length===0){let Ce=qt();return Qe(L,ze({matches:N,loaderData:{},errors:Re||null},ae?{actionData:ae}:{},Ce?{fetchers:new Map(g.fetchers)}:{}),{flushSync:W}),{shortCircuited:!0}}if(!G&&(!u.v7_partialHydration||!Y)){qe.forEach(Ee=>{let pn=g.fetchers.get(Ee.key),Bs=fa(void 0,pn?pn.data:void 0);g.fetchers.set(Ee.key,Bs)});let Ce=ae||g.actionData;ke(ze({navigation:ne},Ce?Object.keys(Ce).length===0?{actionData:null}:{actionData:Ce}:{},qe.length>0?{fetchers:new Map(g.fetchers)}:{}),{flushSync:W})}qe.forEach(Ce=>{X.has(Ce.key)&&St(Ce.key),Ce.controller&&X.set(Ce.key,Ce.controller)});let to=()=>qe.forEach(Ce=>St(Ce.key));E&&E.signal.addEventListener("abort",to);let{results:Ki,loaderResults:no,fetcherResults:Wn}=await _r(g.matches,N,lt,qe,T);if(T.signal.aborted)return{shortCircuited:!0};E&&E.signal.removeEventListener("abort",to),qe.forEach(Ce=>X.delete(Ce.key));let Er=lh(Ki);if(Er){if(Er.idx>=lt.length){let Ce=qe[Er.idx-lt.length].key;H.add(Ce)}return await dn(g,Er.result,{replace:Z}),{shortCircuited:!0}}let{loaderData:Gi,errors:Yi}=oh(g,N,lt,no,Re,qe,Wn,ge);ge.forEach((Ce,Ee)=>{Ce.subscribe(pn=>{(pn||Ce.done)&&ge.delete(Ee)})});let Xi=qt(),ro=Jo(I),Is=Xi||ro||qe.length>0;return ze({loaderData:Gi,errors:Yi},Is?{fetchers:new Map(g.fetchers)}:{})}function Ds(T,L,N,$){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");X.has(T)&&St(T);let z=($&&$.unstable_flushSync)===!0,te=i||l,Z=Gu(g.location,g.matches,c,u.v7_prependBasename,N,u.v7_relativeSplatPath,L,$==null?void 0:$.relative),Y=jo(te,Z,c);if(!Y){Tr(T,L,It(404,{pathname:Z}),{flushSync:z});return}let{path:W,submission:ae,error:Re}=J1(u.v7_normalizeFormMethod,!0,Z,$);if(Re){Tr(T,L,Re,{flushSync:z});return}let ne=Xu(Y,W);if(k=($&&$.preventScrollReset)===!0,ae&&nn(ae.formMethod)){Qo(T,L,W,ne,Y,z,ae);return}V.set(T,{routeId:L,path:W}),un(T,L,W,ne,Y,z,ae)}async function Qo(T,L,N,$,z,te,Z){if(Jr(),V.delete(T),!$.route.action&&!$.route.lazy){let Ee=It(405,{method:Z.formMethod,pathname:N,routeId:L});Tr(T,L,Ee,{flushSync:te});return}let Y=g.fetchers.get(T);Xt(T,FA(Z,Y),{flushSync:te});let W=new AbortController,ae=pa(e.history,N,W.signal,Z);X.set(T,W);let Re=D,ne=await da("action",ae,$,z,s,a,c,u.v7_relativeSplatPath);if(ae.signal.aborted){X.get(T)===W&&X.delete(T);return}if(u.v7_fetcherPersist&&oe.has(T)){if(Pr(ne)||bo(ne)){Xt(T,Gn(void 0));return}}else{if(Pr(ne))if(X.delete(T),I>Re){Xt(T,Gn(void 0));return}else return H.add(T),Xt(T,fa(Z)),dn(g,ne,{fetcherSubmission:Z});if(bo(ne)){Tr(T,L,ne.error);return}}if(Ar(ne))throw It(400,{type:"defer-action"});let he=g.navigation.location||g.location,Oe=pa(e.history,he,W.signal),lt=i||l,qe=g.navigation.state!=="idle"?jo(lt,g.navigation.location,c):g.matches;se(qe,"Didn't find any matches after fetcher action");let to=++D;B.set(T,to);let Ki=fa(Z,ne.data);g.fetchers.set(T,Ki);let[no,Wn]=eh(e.history,g,qe,Z,he,!1,q,ve,fe,oe,V,H,lt,c,{[$.route.id]:ne.data},void 0);Wn.filter(Ee=>Ee.key!==T).forEach(Ee=>{let pn=Ee.key,Bs=g.fetchers.get(pn),l4=fa(void 0,Bs?Bs.data:void 0);g.fetchers.set(pn,l4),X.has(pn)&&St(pn),Ee.controller&&X.set(pn,Ee.controller)}),ke({fetchers:new Map(g.fetchers)});let Er=()=>Wn.forEach(Ee=>St(Ee.key));W.signal.addEventListener("abort",Er);let{results:Gi,loaderResults:Yi,fetcherResults:Xi}=await _r(g.matches,qe,no,Wn,Oe);if(W.signal.aborted)return;W.signal.removeEventListener("abort",Er),B.delete(T),X.delete(T),Wn.forEach(Ee=>X.delete(Ee.key));let ro=lh(Gi);if(ro){if(ro.idx>=no.length){let Ee=Wn[ro.idx-no.length].key;H.add(Ee)}return dn(g,ro.result)}let{loaderData:Is,errors:Ce}=oh(g,g.matches,no,Yi,void 0,Wn,Xi,ge);if(g.fetchers.has(T)){let Ee=Gn(ne.data);g.fetchers.set(T,Ee)}Jo(to),g.navigation.state==="loading"&&to>I?(se(w,"Expected pending action"),E&&E.abort(),Qe(g.navigation.location,{matches:qe,loaderData:Is,errors:Ce,fetchers:new Map(g.fetchers)})):(ke({errors:Ce,loaderData:ah(g.loaderData,Is,qe,Ce),fetchers:new Map(g.fetchers)}),q=!1)}async function un(T,L,N,$,z,te,Z){let Y=g.fetchers.get(T);Xt(T,fa(Z,Y?Y.data:void 0),{flushSync:te});let W=new AbortController,ae=pa(e.history,N,W.signal);X.set(T,W);let Re=D,ne=await da("loader",ae,$,z,s,a,c,u.v7_relativeSplatPath);if(Ar(ne)&&(ne=await Gx(ne,ae.signal,!0)||ne),X.get(T)===W&&X.delete(T),!ae.signal.aborted){if(oe.has(T)){Xt(T,Gn(void 0));return}if(Pr(ne))if(I>Re){Xt(T,Gn(void 0));return}else{H.add(T),await dn(g,ne);return}if(bo(ne)){Tr(T,L,ne.error);return}se(!Ar(ne),"Unhandled fetcher deferred data"),Xt(T,Gn(ne.data))}}async function dn(T,L,N){let{submission:$,fetcherSubmission:z,replace:te}=N===void 0?{}:N;L.revalidate&&(q=!0);let Z=ls(T.location,L.location,{_isRedirect:!0});if(se(Z,"Expected a location on the redirect navigation"),n){let he=!1;if(L.reloadDocument)he=!0;else if(Vx.test(L.location)){const Oe=e.history.createURL(L.location);he=Oe.origin!==t.location.origin||gr(Oe.pathname,c)==null}if(he){te?t.location.replace(L.location):t.location.assign(L.location);return}}E=null;let Y=te===!0?Fe.Replace:Fe.Push,{formMethod:W,formAction:ae,formEncType:Re}=T.navigation;!$&&!z&&W&&ae&&Re&&($=ch(T.navigation));let ne=$||z;if(EA.has(L.status)&&ne&&nn(ne.formMethod))await bt(Y,Z,{submission:ze({},ne,{formAction:L.location}),preventScrollReset:k});else{let he=Pc(Z,$);await bt(Y,Z,{overrideNavigation:he,fetcherSubmission:z,preventScrollReset:k})}}async function _r(T,L,N,$,z){let te=await Promise.all([...N.map(W=>da("loader",z,W,L,s,a,c,u.v7_relativeSplatPath)),...$.map(W=>W.matches&&W.match&&W.controller?da("loader",pa(e.history,W.path,W.controller.signal),W.match,W.matches,s,a,c,u.v7_relativeSplatPath):{type:Ie.error,error:It(404,{pathname:W.path})})]),Z=te.slice(0,N.length),Y=te.slice(N.length);return await Promise.all([ih(T,N,Z,Z.map(()=>z.signal),!1,g.loaderData),ih(T,$.map(W=>W.match),Y,$.map(W=>W.controller?W.controller.signal:null),!0)]),{results:te,loaderResults:Z,fetcherResults:Y}}function Jr(){q=!0,ve.push(...eo()),V.forEach((T,L)=>{X.has(L)&&(fe.push(L),St(L))})}function Xt(T,L,N){N===void 0&&(N={}),g.fetchers.set(T,L),ke({fetchers:new Map(g.fetchers)},{flushSync:(N&&N.flushSync)===!0})}function Tr(T,L,N,$){$===void 0&&($={});let z=Ba(g.matches,L);Qt(T),ke({errors:{[z.route.id]:N},fetchers:new Map(g.fetchers)},{flushSync:($&&$.flushSync)===!0})}function Ms(T){return u.v7_fetcherPersist&&(ye.set(T,(ye.get(T)||0)+1),oe.has(T)&&oe.delete(T)),g.fetchers.get(T)||LA}function Qt(T){let L=g.fetchers.get(T);X.has(T)&&!(L&&L.state==="loading"&&B.has(T))&&St(T),V.delete(T),B.delete(T),H.delete(T),oe.delete(T),g.fetchers.delete(T)}function Vn(T){if(u.v7_fetcherPersist){let L=(ye.get(T)||0)-1;L<=0?(ye.delete(T),oe.add(T)):ye.set(T,L)}else Qt(T);ke({fetchers:new Map(g.fetchers)})}function St(T){let L=X.get(T);se(L,"Expected fetch controller: "+T),L.abort(),X.delete(T)}function qo(T){for(let L of T){let N=Ms(L),$=Gn(N.data);g.fetchers.set(L,$)}}function qt(){let T=[],L=!1;for(let N of H){let $=g.fetchers.get(N);se($,"Expected fetcher: "+N),$.state==="loading"&&(H.delete(N),T.push(N),L=!0)}return qo(T),L}function Jo(T){let L=[];for(let[N,$]of B)if($<T){let z=g.fetchers.get(N);se(z,"Expected fetcher: "+N),z.state==="loading"&&(St(N),B.delete(N),L.push(N))}return qo(L),L.length>0}function Vi(T,L){let N=g.blockers.get(T)||ua;return re.get(T)!==L&&re.set(T,L),N}function As(T){g.blockers.delete(T),re.delete(T)}function kr(T,L){let N=g.blockers.get(T)||ua;se(N.state==="unblocked"&&L.state==="blocked"||N.state==="blocked"&&L.state==="blocked"||N.state==="blocked"&&L.state==="proceeding"||N.state==="blocked"&&L.state==="unblocked"||N.state==="proceeding"&&L.state==="unblocked","Invalid blocker state transition: "+N.state+" -> "+L.state);let $=new Map(g.blockers);$.set(T,L),ke({blockers:$})}function Ps(T){let{currentLocation:L,nextLocation:N,historyAction:$}=T;if(re.size===0)return;re.size>1&&Vr(!1,"A router only supports one blocker at a time");let z=Array.from(re.entries()),[te,Z]=z[z.length-1],Y=g.blockers.get(te);if(!(Y&&Y.state==="proceeding")&&Z({currentLocation:L,nextLocation:N,historyAction:$}))return te}function eo(T){let L=[];return ge.forEach((N,$)=>{(!T||T($))&&(N.cancel(),L.push($),ge.delete($))}),L}function Wi(T,L,N){if(m=T,b=L,y=N||null,!j&&g.navigation===Ac){j=!0;let $=He(g.location,g.matches);$!=null&&ke({restoreScrollPosition:$})}return()=>{m=null,b=null,y=null}}function $s(T,L){return y&&y(T,L.map($=>aA($,g.loaderData)))||T.key}function Zi(T,L){if(m&&b){let N=$s(T,L);m[N]=b()}}function He(T,L){if(m){let N=$s(T,L),$=m[N];if(typeof $=="number")return $}return null}function ht(T){s={},i=Zu(T,a,void 0,s)}return S={get basename(){return c},get future(){return u},get state(){return g},get routes(){return l},get window(){return t},initialize:st,subscribe:ue,enableScrollRestoration:Wi,navigate:Nt,fetch:Ds,revalidate:Yt,createHref:T=>e.history.createHref(T),encodeLocation:T=>e.history.encodeLocation(T),getFetcher:Ms,deleteFetcher:Vn,dispose:jt,getBlocker:Vi,deleteBlocker:As,_internalFetchControllers:X,_internalActiveDeferreds:ge,_internalSetRoutes:ht},S}function OA(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function Gu(e,t,n,r,a,s,l,i){let c,u;if(l){c=[];for(let p of t)if(c.push(p),p.route.id===l){u=p;break}}else c=t,u=t[t.length-1];let d=$p(a||".",Pp(c,s),gr(e.pathname,n)||e.pathname,i==="path");return a==null&&(d.search=e.search,d.hash=e.hash),(a==null||a===""||a===".")&&u&&u.route.index&&!Bp(d.search)&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(d.pathname=d.pathname==="/"?n:Ln([n,d.pathname])),Wr(d)}function J1(e,t,n,r){if(!r||!OA(r))return{path:n};if(r.formMethod&&!BA(r.formMethod))return{path:n,error:It(405,{method:r.formMethod})};let a=()=>({path:n,error:It(400,{type:"invalid-body"})}),s=r.formMethod||"get",l=e?s.toUpperCase():s.toLowerCase(),i=Kx(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!nn(l))return a();let m=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((y,b)=>{let[j,_]=b;return""+y+j+"="+_+`
`},""):String(r.body);return{path:n,submission:{formMethod:l,formAction:i,formEncType:r.formEncType,formData:void 0,json:void 0,text:m}}}else if(r.formEncType==="application/json"){if(!nn(l))return a();try{let m=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:l,formAction:i,formEncType:r.formEncType,formData:void 0,json:m,text:void 0}}}catch{return a()}}}se(typeof FormData=="function","FormData is not available in this environment");let c,u;if(r.formData)c=Yu(r.formData),u=r.formData;else if(r.body instanceof FormData)c=Yu(r.body),u=r.body;else if(r.body instanceof URLSearchParams)c=r.body,u=rh(c);else if(r.body==null)c=new URLSearchParams,u=new FormData;else try{c=new URLSearchParams(r.body),u=rh(c)}catch{return a()}let d={formMethod:l,formAction:i,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(nn(d.formMethod))return{path:n,submission:d};let p=Un(n);return t&&p.search&&Bp(p.search)&&c.append("index",""),p.search="?"+c,{path:Wr(p),submission:d}}function DA(e,t){let n=e;if(t){let r=e.findIndex(a=>a.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function eh(e,t,n,r,a,s,l,i,c,u,d,p,m,y,b,j){let _=j?Object.values(j)[0]:b?Object.values(b)[0]:void 0,x=e.createURL(t.location),f=e.createURL(a),h=j?Object.keys(j)[0]:void 0,S=DA(n,h).filter((w,k)=>{let{route:E}=w;if(E.lazy)return!0;if(E.loader==null)return!1;if(s)return E.loader.hydrate?!0:t.loaderData[E.id]===void 0&&(!t.errors||t.errors[E.id]===void 0);if(MA(t.loaderData,t.matches[k],w)||i.some(F=>F===w.route.id))return!0;let O=t.matches[k],M=w;return th(w,ze({currentUrl:x,currentParams:O.params,nextUrl:f,nextParams:M.params},r,{actionResult:_,defaultShouldRevalidate:l||x.pathname+x.search===f.pathname+f.search||x.search!==f.search||Zx(O,M)}))}),g=[];return d.forEach((w,k)=>{if(s||!n.some(G=>G.route.id===w.routeId)||u.has(k))return;let E=jo(m,w.path,y);if(!E){g.push({key:k,routeId:w.routeId,path:w.path,matches:null,match:null,controller:null});return}let O=t.fetchers.get(k),M=Xu(E,w.path),F=!1;p.has(k)?F=!1:c.includes(k)?F=!0:O&&O.state!=="idle"&&O.data===void 0?F=l:F=th(M,ze({currentUrl:x,currentParams:t.matches[t.matches.length-1].params,nextUrl:f,nextParams:n[n.length-1].params},r,{actionResult:_,defaultShouldRevalidate:l})),F&&g.push({key:k,routeId:w.routeId,path:w.path,matches:E,match:M,controller:new AbortController})}),[S,g]}function MA(e,t,n){let r=!t||n.route.id!==t.route.id,a=e[n.route.id]===void 0;return r||a}function Zx(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function th(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function nh(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let a=n[e.id];se(a,"No route found in manifest");let s={};for(let l in r){let c=a[l]!==void 0&&l!=="hasErrorBoundary";Vr(!c,'Route "'+a.id+'" has a static property "'+l+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+l+'" will be ignored.')),!c&&!rA.has(l)&&(s[l]=r[l])}Object.assign(a,s),Object.assign(a,ze({},t(a),{lazy:void 0}))}async function da(e,t,n,r,a,s,l,i,c){c===void 0&&(c={});let u,d,p,m=j=>{let _,x=new Promise((f,h)=>_=h);return p=()=>_(),t.signal.addEventListener("abort",p),Promise.race([j({request:t,params:n.params,context:c.requestContext}),x])};try{let j=n.route[e];if(n.route.lazy)if(j){let _,x=await Promise.all([m(j).catch(f=>{_=f}),nh(n.route,s,a)]);if(_)throw _;d=x[0]}else if(await nh(n.route,s,a),j=n.route[e],j)d=await m(j);else if(e==="action"){let _=new URL(t.url),x=_.pathname+_.search;throw It(405,{method:t.method,pathname:x,routeId:n.route.id})}else return{type:Ie.data,data:void 0};else if(j)d=await m(j);else{let _=new URL(t.url),x=_.pathname+_.search;throw It(404,{pathname:x})}se(d!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(j){u=Ie.error,d=j}finally{p&&t.signal.removeEventListener("abort",p)}if(IA(d)){let j=d.status;if(kA.has(j)){let x=d.headers.get("Location");if(se(x,"Redirects returned/thrown from loaders/actions must have a Location header"),!Vx.test(x))x=Gu(new URL(t.url),r.slice(0,r.indexOf(n)+1),l,!0,x,i);else if(!c.isStaticRequest){let f=new URL(t.url),h=x.startsWith("//")?new URL(f.protocol+x):new URL(x),C=gr(h.pathname,l)!=null;h.origin===f.origin&&C&&(x=h.pathname+h.search+h.hash)}if(c.isStaticRequest)throw d.headers.set("Location",x),d;return{type:Ie.redirect,status:j,location:x,revalidate:d.headers.get("X-Remix-Revalidate")!==null,reloadDocument:d.headers.get("X-Remix-Reload-Document")!==null}}if(c.isRouteRequest)throw{type:u===Ie.error?Ie.error:Ie.data,response:d};let _;try{let x=d.headers.get("Content-Type");x&&/\bapplication\/json\b/.test(x)?_=await d.json():_=await d.text()}catch(x){return{type:Ie.error,error:x}}return u===Ie.error?{type:u,error:new Ip(j,d.statusText,_),headers:d.headers}:{type:Ie.data,data:_,statusCode:d.status,headers:d.headers}}if(u===Ie.error)return{type:u,error:d};if($A(d)){var y,b;return{type:Ie.deferred,deferredData:d,statusCode:(y=d.init)==null?void 0:y.status,headers:((b=d.init)==null?void 0:b.headers)&&new Headers(d.init.headers)}}return{type:Ie.data,data:d}}function pa(e,t,n,r){let a=e.createURL(Kx(t)).toString(),s={signal:n};if(r&&nn(r.formMethod)){let{formMethod:l,formEncType:i}=r;s.method=l.toUpperCase(),i==="application/json"?(s.headers=new Headers({"Content-Type":i}),s.body=JSON.stringify(r.json)):i==="text/plain"?s.body=r.text:i==="application/x-www-form-urlencoded"&&r.formData?s.body=Yu(r.formData):s.body=r.formData}return new Request(a,s)}function Yu(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,typeof r=="string"?r:r.name);return t}function rh(e){let t=new FormData;for(let[n,r]of e.entries())t.append(n,r);return t}function AA(e,t,n,r,a){let s={},l=null,i,c=!1,u={};return n.forEach((d,p)=>{let m=t[p].route.id;if(se(!Pr(d),"Cannot handle redirect results in processLoaderData"),bo(d)){let y=Ba(e,m),b=d.error;r&&(b=Object.values(r)[0],r=void 0),l=l||{},l[y.route.id]==null&&(l[y.route.id]=b),s[m]=void 0,c||(c=!0,i=Ux(d.error)?d.error.status:500),d.headers&&(u[m]=d.headers)}else Ar(d)?(a.set(m,d.deferredData),s[m]=d.deferredData.data):s[m]=d.data,d.statusCode!=null&&d.statusCode!==200&&!c&&(i=d.statusCode),d.headers&&(u[m]=d.headers)}),r&&(l=r,s[Object.keys(r)[0]]=void 0),{loaderData:s,errors:l,statusCode:i||200,loaderHeaders:u}}function oh(e,t,n,r,a,s,l,i){let{loaderData:c,errors:u}=AA(t,n,r,a,i);for(let d=0;d<s.length;d++){let{key:p,match:m,controller:y}=s[d];se(l!==void 0&&l[d]!==void 0,"Did not find corresponding fetcher result");let b=l[d];if(!(y&&y.signal.aborted))if(bo(b)){let j=Ba(e.matches,m==null?void 0:m.route.id);u&&u[j.route.id]||(u=ze({},u,{[j.route.id]:b.error})),e.fetchers.delete(p)}else if(Pr(b))se(!1,"Unhandled fetcher revalidation redirect");else if(Ar(b))se(!1,"Unhandled fetcher deferred data");else{let j=Gn(b.data);e.fetchers.set(p,j)}}return{loaderData:c,errors:u}}function ah(e,t,n,r){let a=ze({},t);for(let s of n){let l=s.route.id;if(t.hasOwnProperty(l)?t[l]!==void 0&&(a[l]=t[l]):e[l]!==void 0&&s.route.loader&&(a[l]=e[l]),r&&r.hasOwnProperty(l))break}return a}function Ba(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function sh(e){let t=e.length===1?e[0]:e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function It(e,t){let{pathname:n,routeId:r,method:a,type:s}=t===void 0?{}:t,l="Unknown Server Error",i="Unknown @remix-run/router error";return e===400?(l="Bad Request",a&&n&&r?i="You made a "+a+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"?i="defer() is not supported in actions":s==="invalid-body"&&(i="Unable to encode submission body")):e===403?(l="Forbidden",i='Route "'+r+'" does not match URL "'+n+'"'):e===404?(l="Not Found",i='No route matches URL "'+n+'"'):e===405&&(l="Method Not Allowed",a&&n&&r?i="You made a "+a.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":a&&(i='Invalid request method "'+a.toUpperCase()+'"')),new Ip(e||500,l,new Error(i),!0)}function lh(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(Pr(n))return{result:n,idx:t}}}function Kx(e){let t=typeof e=="string"?Un(e):e;return Wr(ze({},t,{hash:""}))}function PA(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function Ar(e){return e.type===Ie.deferred}function bo(e){return e.type===Ie.error}function Pr(e){return(e&&e.type)===Ie.redirect}function $A(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function IA(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function BA(e){return TA.has(e.toLowerCase())}function nn(e){return wA.has(e.toLowerCase())}async function ih(e,t,n,r,a,s){for(let l=0;l<n.length;l++){let i=n[l],c=t[l];if(!c)continue;let u=e.find(p=>p.route.id===c.route.id),d=u!=null&&!Zx(u,c)&&(s&&s[c.route.id])!==void 0;if(Ar(i)&&(a||d)){let p=r[l];se(p,"Expected an AbortSignal for revalidating fetcher deferred result"),await Gx(i,p,a).then(m=>{m&&(n[l]=m||n[l])})}}}async function Gx(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:Ie.data,data:e.deferredData.unwrappedData}}catch(a){return{type:Ie.error,error:a}}return{type:Ie.data,data:e.deferredData.data}}}function Bp(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function Xu(e,t){let n=typeof t=="string"?Un(t).search:t.search;if(e[e.length-1].route.index&&Bp(n||""))return e[e.length-1];let r=Fx(e);return r[r.length-1]}function ch(e){let{formMethod:t,formAction:n,formEncType:r,text:a,formData:s,json:l}=e;if(!(!t||!n||!r)){if(a!=null)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:void 0,text:a};if(s!=null)return{formMethod:t,formAction:n,formEncType:r,formData:s,json:void 0,text:void 0};if(l!==void 0)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:l,text:void 0}}}function Pc(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function zA(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function fa(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function FA(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function Gn(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function UA(e,t){try{let n=e.sessionStorage.getItem(Wx);if(n){let r=JSON.parse(n);for(let[a,s]of Object.entries(r||{}))s&&Array.isArray(s)&&t.set(a,new Set(s||[]))}}catch{}}function HA(e,t){if(t.size>0){let n={};for(let[r,a]of t)n[r]=[...a];try{e.sessionStorage.setItem(Wx,JSON.stringify(n))}catch(r){Vr(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function is(){return is=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},is.apply(this,arguments)}const Es=v.createContext(null),zp=v.createContext(null),Sr=v.createContext(null),Hi=v.createContext(null),wr=v.createContext({outlet:null,matches:[],isDataRoute:!1}),Yx=v.createContext(null);function VA(e,t){let{relative:n}=t===void 0?{}:t;Ls()||se(!1);let{basename:r,navigator:a}=v.useContext(Sr),{hash:s,pathname:l,search:i}=Ns(e,{relative:n}),c=l;return r!=="/"&&(c=l==="/"?r:Ln([r,l])),a.createHref({pathname:c,search:i,hash:s})}function Ls(){return v.useContext(Hi)!=null}function Xo(){return Ls()||se(!1),v.useContext(Hi).location}function Xx(e){v.useContext(Sr).static||v.useLayoutEffect(e)}function WA(){let{isDataRoute:e}=v.useContext(wr);return e?aP():ZA()}function ZA(){Ls()||se(!1);let e=v.useContext(Es),{basename:t,future:n,navigator:r}=v.useContext(Sr),{matches:a}=v.useContext(wr),{pathname:s}=Xo(),l=JSON.stringify(Pp(a,n.v7_relativeSplatPath)),i=v.useRef(!1);return Xx(()=>{i.current=!0}),v.useCallback(function(u,d){if(d===void 0&&(d={}),!i.current)return;if(typeof u=="number"){r.go(u);return}let p=$p(u,JSON.parse(l),s,d.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:Ln([t,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[t,r,l,s,e])}const KA=v.createContext(null);function GA(e){let t=v.useContext(wr).outlet;return t&&v.createElement(KA.Provider,{value:e},t)}function Ns(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=v.useContext(Sr),{matches:a}=v.useContext(wr),{pathname:s}=Xo(),l=JSON.stringify(Pp(a,r.v7_relativeSplatPath));return v.useMemo(()=>$p(e,JSON.parse(l),s,n==="path"),[e,l,s,n])}function YA(e,t,n,r){Ls()||se(!1);let{navigator:a}=v.useContext(Sr),{matches:s}=v.useContext(wr),l=s[s.length-1],i=l?l.params:{};l&&l.pathname;let c=l?l.pathnameBase:"/";l&&l.route;let u=Xo(),d;if(t){var p;let _=typeof t=="string"?Un(t):t;c==="/"||(p=_.pathname)!=null&&p.startsWith(c)||se(!1),d=_}else d=u;let m=d.pathname||"/",y=c==="/"?m:m.slice(c.length)||"/",b=jo(e,{pathname:y}),j=eP(b&&b.map(_=>Object.assign({},_,{params:Object.assign({},i,_.params),pathname:Ln([c,a.encodeLocation?a.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?c:Ln([c,a.encodeLocation?a.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),s,n,r);return t&&j?v.createElement(Hi.Provider,{value:{location:is({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Fe.Pop}},j):j}function XA(){let e=oP(),t=Ux(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},t),n?v.createElement("pre",{style:a},n):null,s)}const QA=v.createElement(XA,null);class qA extends v.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?v.createElement(wr.Provider,{value:this.props.routeContext},v.createElement(Yx.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function JA(e){let{routeContext:t,match:n,children:r}=e,a=v.useContext(Es);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),v.createElement(wr.Provider,{value:t},r)}function eP(e,t,n,r){var a;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var s;if((s=n)!=null&&s.errors)e=n.matches;else return null}let l=e,i=(a=n)==null?void 0:a.errors;if(i!=null){let d=l.findIndex(p=>p.route.id&&(i==null?void 0:i[p.route.id]));d>=0||se(!1),l=l.slice(0,Math.min(l.length,d+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<l.length;d++){let p=l[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=d),p.route.id){let{loaderData:m,errors:y}=n,b=p.route.loader&&m[p.route.id]===void 0&&(!y||y[p.route.id]===void 0);if(p.route.lazy||b){c=!0,u>=0?l=l.slice(0,u+1):l=[l[0]];break}}}return l.reduceRight((d,p,m)=>{let y,b=!1,j=null,_=null;n&&(y=i&&p.route.id?i[p.route.id]:void 0,j=p.route.errorElement||QA,c&&(u<0&&m===0?(sP("route-fallback",!1),b=!0,_=null):u===m&&(b=!0,_=p.route.hydrateFallbackElement||null)));let x=t.concat(l.slice(0,m+1)),f=()=>{let h;return y?h=j:b?h=_:p.route.Component?h=v.createElement(p.route.Component,null):p.route.element?h=p.route.element:h=d,v.createElement(JA,{match:p,routeContext:{outlet:d,matches:x,isDataRoute:n!=null},children:h})};return n&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?v.createElement(qA,{location:n.location,revalidation:n.revalidation,component:j,error:y,children:f(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):f()},null)}var Qx=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Qx||{}),ui=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ui||{});function tP(e){let t=v.useContext(Es);return t||se(!1),t}function nP(e){let t=v.useContext(zp);return t||se(!1),t}function rP(e){let t=v.useContext(wr);return t||se(!1),t}function qx(e){let t=rP(),n=t.matches[t.matches.length-1];return n.route.id||se(!1),n.route.id}function oP(){var e;let t=v.useContext(Yx),n=nP(ui.UseRouteError),r=qx(ui.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function aP(){let{router:e}=tP(Qx.UseNavigateStable),t=qx(ui.UseNavigateStable),n=v.useRef(!1);return Xx(()=>{n.current=!0}),v.useCallback(function(a,s){s===void 0&&(s={}),n.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,is({fromRouteId:t},s)))},[e,t])}const uh={};function sP(e,t,n){!t&&!uh[e]&&(uh[e]=!0)}function lP(e){return GA(e.context)}function iP(e){let{basename:t="/",children:n=null,location:r,navigationType:a=Fe.Pop,navigator:s,static:l=!1,future:i}=e;Ls()&&se(!1);let c=t.replace(/^\/*/,"/"),u=v.useMemo(()=>({basename:c,navigator:s,static:l,future:is({v7_relativeSplatPath:!1},i)}),[c,i,s,l]);typeof r=="string"&&(r=Un(r));let{pathname:d="/",search:p="",hash:m="",state:y=null,key:b="default"}=r,j=v.useMemo(()=>{let _=gr(d,c);return _==null?null:{location:{pathname:_,search:p,hash:m,state:y,key:b},navigationType:a}},[c,d,p,m,y,b,a]);return j==null?null:v.createElement(Sr.Provider,{value:u},v.createElement(Hi.Provider,{children:n,value:j}))}new Promise(()=>{});function cP(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:v.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(t,{hydrateFallbackElement:v.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:v.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Io(){return Io=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Io.apply(this,arguments)}function Jx(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,s;for(s=0;s<r.length;s++)a=r[s],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function uP(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function dP(e,t){return e.button===0&&(!t||t==="_self")&&!uP(e)}const pP=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],fP=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"];function hP(e,t){return RA({basename:t==null?void 0:t.basename,future:Io({},t==null?void 0:t.future,{v7_prependBasename:!0}),history:eA({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||mP(),routes:e,mapRouteProperties:cP,window:t==null?void 0:t.window}).initialize()}function mP(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=Io({},t,{errors:gP(t.errors)})),t}function gP(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,a]of t)if(a&&a.__type==="RouteErrorResponse")n[r]=new Ip(a.status,a.statusText,a.data,a.internal===!0);else if(a&&a.__type==="Error"){if(a.__subType){let s=window[a.__subType];if(typeof s=="function")try{let l=new s(a.message);l.stack="",n[r]=l}catch{}}if(n[r]==null){let s=new Error(a.message);s.stack="",n[r]=s}}else n[r]=a;return n}const e4=v.createContext({isTransitioning:!1}),xP=v.createContext(new Map),vP="startTransition",dh=_4[vP],yP="flushSync",ph=P6[yP];function CP(e){dh?dh(e):e()}function ha(e){ph?ph(e):e()}class jP{constructor(){this.status="pending",this.promise=new Promise((t,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",t(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}}function bP(e){let{fallbackElement:t,router:n,future:r}=e,[a,s]=v.useState(n.state),[l,i]=v.useState(),[c,u]=v.useState({isTransitioning:!1}),[d,p]=v.useState(),[m,y]=v.useState(),[b,j]=v.useState(),_=v.useRef(new Map),{v7_startTransition:x}=r||{},f=v.useCallback(w=>{x?CP(w):w()},[x]),h=v.useCallback((w,k)=>{let{deletedFetchers:E,unstable_flushSync:O,unstable_viewTransitionOpts:M}=k;E.forEach(G=>_.current.delete(G)),w.fetchers.forEach((G,q)=>{G.data!==void 0&&_.current.set(q,G.data)});let F=n.window==null||typeof n.window.document.startViewTransition!="function";if(!M||F){O?ha(()=>s(w)):f(()=>s(w));return}if(O){ha(()=>{m&&(d&&d.resolve(),m.skipTransition()),u({isTransitioning:!0,flushSync:!0,currentLocation:M.currentLocation,nextLocation:M.nextLocation})});let G=n.window.document.startViewTransition(()=>{ha(()=>s(w))});G.finished.finally(()=>{ha(()=>{p(void 0),y(void 0),i(void 0),u({isTransitioning:!1})})}),ha(()=>y(G));return}m?(d&&d.resolve(),m.skipTransition(),j({state:w,currentLocation:M.currentLocation,nextLocation:M.nextLocation})):(i(w),u({isTransitioning:!0,flushSync:!1,currentLocation:M.currentLocation,nextLocation:M.nextLocation}))},[n.window,m,d,_,f]);v.useLayoutEffect(()=>n.subscribe(h),[n,h]),v.useEffect(()=>{c.isTransitioning&&!c.flushSync&&p(new jP)},[c]),v.useEffect(()=>{if(d&&l&&n.window){let w=l,k=d.promise,E=n.window.document.startViewTransition(async()=>{f(()=>s(w)),await k});E.finished.finally(()=>{p(void 0),y(void 0),i(void 0),u({isTransitioning:!1})}),y(E)}},[f,l,d,n.window]),v.useEffect(()=>{d&&l&&a.location.key===l.location.key&&d.resolve()},[d,m,a.location,l]),v.useEffect(()=>{!c.isTransitioning&&b&&(i(b.state),u({isTransitioning:!0,flushSync:!1,currentLocation:b.currentLocation,nextLocation:b.nextLocation}),j(void 0))},[c.isTransitioning,b]),v.useEffect(()=>{},[]);let C=v.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:w=>n.navigate(w),push:(w,k,E)=>n.navigate(w,{state:k,preventScrollReset:E==null?void 0:E.preventScrollReset}),replace:(w,k,E)=>n.navigate(w,{replace:!0,state:k,preventScrollReset:E==null?void 0:E.preventScrollReset})}),[n]),S=n.basename||"/",g=v.useMemo(()=>({router:n,navigator:C,static:!1,basename:S}),[n,C,S]);return v.createElement(v.Fragment,null,v.createElement(Es.Provider,{value:g},v.createElement(zp.Provider,{value:a},v.createElement(xP.Provider,{value:_.current},v.createElement(e4.Provider,{value:c},v.createElement(iP,{basename:S,location:a.location,navigationType:a.historyAction,navigator:C,future:{v7_relativeSplatPath:n.future.v7_relativeSplatPath}},a.initialized||n.future.v7_partialHydration?v.createElement(SP,{routes:n.routes,future:n.future,state:a}):t))))),null)}function SP(e){let{routes:t,future:n,state:r}=e;return YA(t,void 0,r,n)}const wP=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",_P=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,TP=v.forwardRef(function(t,n){let{onClick:r,relative:a,reloadDocument:s,replace:l,state:i,target:c,to:u,preventScrollReset:d,unstable_viewTransition:p}=t,m=Jx(t,pP),{basename:y}=v.useContext(Sr),b,j=!1;if(typeof u=="string"&&_P.test(u)&&(b=u,wP))try{let h=new URL(window.location.href),C=u.startsWith("//")?new URL(h.protocol+u):new URL(u),S=gr(C.pathname,y);C.origin===h.origin&&S!=null?u=S+C.search+C.hash:j=!0}catch{}let _=VA(u,{relative:a}),x=LP(u,{replace:l,state:i,target:c,preventScrollReset:d,relative:a,unstable_viewTransition:p});function f(h){r&&r(h),h.defaultPrevented||x(h)}return v.createElement("a",Io({},m,{href:b||_,onClick:j||s?r:f,ref:n,target:c}))}),kP=v.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:a=!1,className:s="",end:l=!1,style:i,to:c,unstable_viewTransition:u,children:d}=t,p=Jx(t,fP),m=Ns(c,{relative:p.relative}),y=Xo(),b=v.useContext(zp),{navigator:j}=v.useContext(Sr),_=b!=null&&NP(m)&&u===!0,x=j.encodeLocation?j.encodeLocation(m).pathname:m.pathname,f=y.pathname,h=b&&b.navigation&&b.navigation.location?b.navigation.location.pathname:null;a||(f=f.toLowerCase(),h=h?h.toLowerCase():null,x=x.toLowerCase());const C=x!=="/"&&x.endsWith("/")?x.length-1:x.length;let S=f===x||!l&&f.startsWith(x)&&f.charAt(C)==="/",g=h!=null&&(h===x||!l&&h.startsWith(x)&&h.charAt(x.length)==="/"),w={isActive:S,isPending:g,isTransitioning:_},k=S?r:void 0,E;typeof s=="function"?E=s(w):E=[s,S?"active":null,g?"pending":null,_?"transitioning":null].filter(Boolean).join(" ");let O=typeof i=="function"?i(w):i;return v.createElement(TP,Io({},p,{"aria-current":k,className:E,ref:n,style:O,to:c,unstable_viewTransition:u}),typeof d=="function"?d(w):d)});var Qu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Qu||(Qu={}));var fh;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(fh||(fh={}));function EP(e){let t=v.useContext(Es);return t||se(!1),t}function LP(e,t){let{target:n,replace:r,state:a,preventScrollReset:s,relative:l,unstable_viewTransition:i}=t===void 0?{}:t,c=WA(),u=Xo(),d=Ns(e,{relative:l});return v.useCallback(p=>{if(dP(p,n)){p.preventDefault();let m=r!==void 0?r:Wr(u)===Wr(d);c(e,{replace:m,state:a,preventScrollReset:s,relative:l,unstable_viewTransition:i})}},[u,c,d,r,a,n,e,s,l,i])}function NP(e,t){t===void 0&&(t={});let n=v.useContext(e4);n==null&&se(!1);let{basename:r}=EP(Qu.useViewTransitionState),a=Ns(e,{relative:t.relative});if(!n.isTransitioning)return!1;let s=gr(n.currentLocation.pathname,r)||n.currentLocation.pathname,l=gr(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Ku(a.pathname,l)!=null||Ku(a.pathname,s)!=null}const t4=({to:e,className:t="",exact:n,onClick:r,label:a,style:s,...l})=>o.jsx(kP,{to:e,onClick:r,end:n&&"end",className:({isActive:i})=>`${t} ${i?"active":""}`,"aria-label":a,style:s,children:o.jsx(Mi,{...l})}),n4=({path:e,onClick:t,width:n=512,height:r=512,style:a,className:s="night-and-day--icon",fill:l="currentColor"})=>o.jsx("svg",{"aria-hidden":"true",focusable:"false",className:s,style:a,role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${n} ${r}`,onClick:t,children:o.jsx("path",{d:e,fill:l})}),RP=e=>o.jsx(n4,{path:"M289,23C160,23 56,127 56,256C56,385 160,489 289,489C352,489 409,464 451,423C456,418 457,411 454,404C451,397 444,394 436,395C426,397 416,397 405,397C304,397 222,316 222,214C222,146 260,86 315,55C322,51 325,44 323,37C322,30 316,25 309,24C302,23 295,23 289,23L289,23Z",...e}),r4=({Icon:e,caption:t,onClick:n,iconClass:r,iconStyle:a,captionStyle:s,className:l="night-and-day--switcher",captionClass:i="night-and-day--caption",style:c={display:"inline-block"}})=>o.jsxs("div",{className:l,onClick:n,style:c,children:[o.jsx(e,{style:a,className:r}),!!t&&o.jsx("div",{className:i,style:s,children:t})]}),OP=e=>{const{setDark:t}=Rs();return o.jsx(r4,{Icon:RP,onClick:t,...e})},DP=e=>o.jsx(n4,{path:"M362,1.2C367,3 370,8 371,13L391,121L499,141C504,142 509,145 511,150C512,155 512,161 509,166L447,256L509,346C512,351 512,357 511,362C509,367 504,370 499,371L391,391L371,499C370,504 367,509 362,511C357,512 351,512 346,509L256,447L166,509C161,512 156,512 151,511C146,509 142,504 141,499L121,391L13,371C8,370 3,367 1,362C0,356 0,351 3,346L65,256L3,166C0,161 0,156 1,151C3,146 8,142 13,141L121,121L141,13C142,8 146,3 151,1C156,0 161,0 166,3L256,65L346,3C351,0 357,0 362,1ZM160,256C160,203 203,160 256,160C309,160 352,203 352,256C352,309 309,352 256,352C203,352 160,309 160,256ZM384,256C384,186 326,128 256,128C186,128 128,186 128,256C128,326 186,384 256,384C326,384 384,326 384,256Z",...e}),MP=e=>{const{setLight:t}=Rs();return o.jsx(r4,{Icon:DP,onClick:t,...e})},AP=({sunrise:e={},nightfall:t={}})=>{const{isLight:n,setLight:r,setDark:a}=Rs();return n?o.jsx(MP,{onClick:a,...e}):o.jsx(OP,{onClick:r,...t})},o4=v.createContext(),Rs=()=>v.useContext(o4),fl="dark",$c="light",PP="(prefers-color-scheme: dark)",Ic=()=>!1,$P=()=>{let e={};return{clear:()=>e={},getItem:t=>e[t],setItem:(t,n)=>e[t]=n,removeItem:t=>delete e[t]}},IP=()=>({matches:Ic,addEventListener:Ic,removeEventListener:Ic}),a4=typeof window<"u",Bc=a4&&window.localStorage?window.localStorage:$P(),BP=a4&&window.matchMedia?e=>window.matchMedia(e):IP,qu=BP(PP),zP=()=>qu.matches,FP=e=>e.split(" "),hh=(e,t="")=>`${e} ${t}`,UP=({storageKey:e,defaultVariant:t,children:n})=>{const r=e?Bc.getItem(e):null,[a,s=""]=r?FP(r):[zP(),null],[l,i]=v.useState(a===fl),[c,u]=v.useState(s||t),d=b=>{i(b),e&&Bc.setItem(e,hh(b?fl:$c,c))},p=b=>{u(b),e&&Bc.setItem(e,hh(l?fl:$c,b))},m=b=>d(b.matches);v.useEffect(()=>(qu.addEventListener("change",m),()=>qu.removeEventListener("change",m)),[]);const y={isDark:l,isLight:!l,setDark:()=>d(!0),setLight:()=>d(!1),setIsDark:i,toggleTheme:()=>d(!l),theme:l?fl:$c,variant:c,setVariant:p};return o.jsx(o4.Provider,{value:y,children:n})},s4="0.0.8",HP="2024-01-15",mh="sidebar",VP="no-sidebar",WP=()=>{const{variant:e,setVariant:t}=Rs();return o.jsx("header",{children:o.jsxs("nav",{children:[o.jsxs("div",{children:[o.jsx(J,{name:"bars",className:"toggle-sidebar action",onClick:()=>t(e===mh?VP:mh)}),o.jsx(t4,{to:"/",className:"home mar-l-2",text:"Badger React UI"}),o.jsxs("span",{className:"small mar-l-2",children:["v",s4]})]}),o.jsxs("div",{className:"flex middle",children:[o.jsx("a",{href:"https://github.com/abw/badger-react-ui",children:o.jsx(J,{name:"github",className:"mar-r-4"})}),o.jsx(AP,{})]})]})})},ZP=()=>o.jsx("footer",{children:o.jsxs("div",{className:"flex space middle",children:[o.jsx("div",{className:"large",children:"Badger React UI"}),o.jsxs("div",{className:"text-center small",children:["by ",o.jsx("a",{href:"https://github.com/abw",children:"Andy Wardley"})]}),o.jsxs("div",{className:"text-right",children:["v",s4,o.jsx("br",{}),HP]})]})}),KP=({toc:e,contentRef:t})=>o.jsx("ul",{className:"toc",children:Object.entries(e).map(([n,r])=>o.jsx("li",{onClick:()=>{var a,s;(s=t.current)==null||s.scrollTo({top:((a=r.ref.current)==null?void 0:a.offsetTop)-20})},className:r.heading?"heading":"",children:r.heading?o.jsx("h4",{children:r.heading}):r.text.match(/^code:/)?o.jsx("code",{children:r.text.replace(/^code:/,"")}):r.text},n))}),GP=ks.Consumer(KP),YP=({title:e,path:t,items:n,tocs:r})=>{const a=Ns(),s=t&&a.pathname.slice(0,t.length)===t;return o.jsxs("details",{className:"menu",open:s,children:[o.jsx("summary",{children:e}),o.jsx("ul",{children:n.map(l=>{const i=a.pathname===l.to;return o.jsxs("li",{children:[o.jsx(t4,{className:"item",...l}),!!l.tocName&&i&&r[l.tocName]&&o.jsx(GP,{toc:r[l.tocName]})]},l.to)})})]})},gh=ks.Consumer(YP),XP={title:"Getting Started",path:"/getting-started",items:[{to:"/getting-started/installation",text:"Installation"}]},QP={title:"Components",path:"/components",items:[{to:"/components/alert",text:"Alert",tocName:"alert"},{to:"/components/button",text:"Button",tocName:"button"},{to:"/components/buttons",text:"Buttons",tocName:"buttons"},{to:"/components/checkbox",text:"Checkbox",tocName:"checkbox"},{to:"/components/confirm",text:"Confirm",tocName:"confirm"},{to:"/components/datatable",text:"Datatable",tocName:"datatable"},{to:"/components/details",text:"Details",tocName:"details"},{to:"/components/dropdown",text:"Dropdown",tocName:"dropdown"},{to:"/components/icon",text:"Icon",tocName:"icon"},{to:"/components/modal",text:"Modal",tocName:"modal"},{to:"/components/overlay",text:"Overlay",tocName:"overlay"},{to:"/components/pager",text:"Pager",tocName:"pager"},{to:"/components/radio",text:"Radio",tocName:"radio"},{to:"/components/search",text:"Search",tocName:"search"},{to:"/components/select",text:"Select",tocName:"select"},{to:"/components/sortable",text:"Sortable",tocName:"sortable"}]},qP=()=>o.jsxs(o.Fragment,{children:[o.jsx(gh,{...XP}),o.jsx(gh,{...QP})]});function JP(){const{pathname:e}=Xo();return v.useEffect(()=>e$(document.getElementById("content")),[e]),null}function e$(e,{top:t=0,left:n=0,behavior:r="smooth"}={}){e==null||e.scrollTo({top:t,left:n,behavior:r})}const t$=({contentRef:e})=>{const{theme:t,variant:n}=Rs();return o.jsxs("div",{id:"site",className:n,"data-theme":t,children:[o.jsx(WP,{}),o.jsxs("div",{id:"app",children:[o.jsx(JP,{}),o.jsx("aside",{children:o.jsx(qP,{})}),o.jsx("main",{id:"content",ref:e,children:o.jsx(lP,{})})]}),o.jsx(ZP,{})]})},n$=ks.Consumer(t$),r$=/\/_layout$/,o$=/\/_examples\//,a$=s$(Object.assign({"../pages/components/alert/_examples/Alert/index.jsx":X_,"../pages/components/alert/_examples/Error/index.jsx":nT,"../pages/components/alert/_examples/Info/index.jsx":aT,"../pages/components/alert/_examples/Success/index.jsx":iT,"../pages/components/alert/_examples/Warning/index.jsx":dT,"../pages/components/alert/_examples/border/index.jsx":hT,"../pages/components/alert/_examples/className/index.jsx":xT,"../pages/components/alert/_examples/color/index.jsx":CT,"../pages/components/alert/_examples/dismissable/index.jsx":ST,"../pages/components/alert/_examples/headIcon/index.jsx":TT,"../pages/components/alert/_examples/headline/index.jsx":LT,"../pages/components/alert/_examples/icon/index.jsx":OT,"../pages/components/alert/_examples/onDismiss/index.jsx":AT,"../pages/components/alert/_examples/radius/index.jsx":IT,"../pages/components/alert/_examples/revealable/index.jsx":FT,"../pages/components/alert/_examples/revealed/index.jsx":VT,"../pages/components/alert/_examples/shadow/index.jsx":KT,"../pages/components/alert/_examples/size/index.jsx":XT,"../pages/components/alert/_examples/stripe/index.jsx":JT,"../pages/components/alert/_examples/text/index.jsx":nk,"../pages/components/alert/_examples/title/index.jsx":ak,"../pages/components/alert/_examples/type/index.jsx":ik,"../pages/components/alert/index.jsx":dk,"../pages/components/button/_examples/Button/index.jsx":hk,"../pages/components/button/_examples/Content/index.jsx":xk,"../pages/components/button/_examples/bare/index.jsx":Ck,"../pages/components/button/_examples/border/index.jsx":Sk,"../pages/components/button/_examples/bright/index.jsx":Tk,"../pages/components/button/_examples/className/index.jsx":Lk,"../pages/components/button/_examples/color/index.jsx":Ok,"../pages/components/button/_examples/dark/index.jsx":Ak,"../pages/components/button/_examples/disabled/index.jsx":Ik,"../pages/components/button/_examples/icon/index.jsx":Fk,"../pages/components/button/_examples/iconLeft/index.jsx":Vk,"../pages/components/button/_examples/iconRight/index.jsx":Kk,"../pages/components/button/_examples/label/index.jsx":Xk,"../pages/components/button/_examples/onClick/index.jsx":Jk,"../pages/components/button/_examples/outline/index.jsx":nE,"../pages/components/button/_examples/radius/index.jsx":aE,"../pages/components/button/_examples/shaded/index.jsx":iE,"../pages/components/button/_examples/shadow/index.jsx":dE,"../pages/components/button/_examples/size/index.jsx":hE,"../pages/components/button/_examples/text/index.jsx":xE,"../pages/components/button/_examples/tooltip/index.jsx":CE,"../pages/components/button/_examples/type/index.jsx":SE,"../pages/components/button/index.jsx":_E,"../pages/components/buttons/_examples/Button/index.jsx":LE,"../pages/components/buttons/_examples/Buttons/index.jsx":OE,"../pages/components/buttons/_examples/buttonClass/index.jsx":AE,"../pages/components/buttons/_examples/buttonsProp/index.jsx":IE,"../pages/components/buttons/_examples/className/index.jsx":FE,"../pages/components/buttons/_examples/outline/index.jsx":VE,"../pages/components/buttons/index.jsx":ZE,"../pages/components/checkbox/_examples/CheckboxState/index.jsx":YE,"../pages/components/checkbox/_examples/Overview/index.jsx":qE,"../pages/components/checkbox/_examples/checked/index.jsx":tL,"../pages/components/checkbox/_examples/checkedText/index.jsx":oL,"../pages/components/checkbox/_examples/className/index.jsx":lL,"../pages/components/checkbox/_examples/disabled/index.jsx":uL,"../pages/components/checkbox/_examples/onChange/index.jsx":fL,"../pages/components/checkbox/_examples/text/index.jsx":gL,"../pages/components/checkbox/index.jsx":vL,"../pages/components/confirm/_examples/Overview/index.jsx":jL,"../pages/components/confirm/_examples/cancel/index.jsx":wL,"../pages/components/confirm/_examples/cancelProps/index.jsx":kL,"../pages/components/confirm/_examples/className/index.jsx":NL,"../pages/components/confirm/_examples/color/index.jsx":DL,"../pages/components/confirm/_examples/confirm/index.jsx":PL,"../pages/components/confirm/_examples/confirmProps/index.jsx":BL,"../pages/components/confirm/_examples/iconRight/index.jsx":UL,"../pages/components/confirm/_examples/onClick/index.jsx":WL,"../pages/components/confirm/_examples/text/index.jsx":GL,"../pages/components/confirm/index.jsx":XL,"../pages/components/datatable/_examples/Datatable/index.jsx":eN,"../pages/components/datatable/index.jsx":nN,"../pages/components/details/_examples/Details/index.jsx":aN,"../pages/components/details/_examples/border/index.jsx":iN,"../pages/components/details/_examples/color/index.jsx":dN,"../pages/components/details/_examples/content/index.jsx":hN,"../pages/components/details/_examples/lined/index.jsx":xN,"../pages/components/details/_examples/open/index.jsx":CN,"../pages/components/details/_examples/radius/index.jsx":SN,"../pages/components/details/_examples/shaded/index.jsx":TN,"../pages/components/details/_examples/shadow/index.jsx":LN,"../pages/components/details/_examples/summary/index.jsx":ON,"../pages/components/details/index.jsx":MN,"../pages/components/dropdown/_examples/Dropdown/index.jsx":$N,"../pages/components/dropdown/_examples/iconLeft/index.jsx":zN,"../pages/components/dropdown/_examples/iconLeftRotate/index.jsx":HN,"../pages/components/dropdown/_examples/iconRight/index.jsx":ZN,"../pages/components/dropdown/_examples/iconRightRotate/index.jsx":YN,"../pages/components/dropdown/_examples/onSelect/index.jsx":qN,"../pages/components/dropdown/_examples/openOnHover/index.jsx":tR,"../pages/components/dropdown/_examples/options/index.jsx":pR,"../pages/components/dropdown/_examples/right/index.jsx":mR,"../pages/components/dropdown/_examples/text/index.jsx":vR,"../pages/components/dropdown/_examples/wide/index.jsx":jR,"../pages/components/dropdown/index.jsx":SR,"../pages/components/icon/_examples/Icon/index.jsx":RR,"../pages/components/icon/_examples/IconLibrary/index.jsx":OR,"../pages/components/icon/_examples/className/index.jsx":AR,"../pages/components/icon/_examples/color/index.jsx":IR,"../pages/components/icon/_examples/name/index.jsx":FR,"../pages/components/icon/_examples/path/index.jsx":VR,"../pages/components/icon/_examples/size/index.jsx":KR,"../pages/components/icon/index.jsx":YR,"../pages/components/modal/_examples/Modal/index.jsx":qR,"../pages/components/modal/_examples/ModalState/index.jsx":tO,"../pages/components/modal/_examples/className/index.jsx":oO,"../pages/components/modal/_examples/close/index.jsx":lO,"../pages/components/modal/_examples/closeIcon/index.jsx":uO,"../pages/components/modal/_examples/footer/index.jsx":fO,"../pages/components/modal/_examples/header/index.jsx":gO,"../pages/components/modal/_examples/text/index.jsx":yO,"../pages/components/modal/_examples/title/index.jsx":bO,"../pages/components/modal/index.jsx":wO,"../pages/components/overlay/_examples/Overlay/index.jsx":kO,"../pages/components/overlay/_examples/OverlayState/index.jsx":NO,"../pages/components/overlay/_examples/className/index.jsx":MO,"../pages/components/overlay/_examples/custom/index.jsx":$O,"../pages/components/overlay/_examples/fixed/index.jsx":zO,"../pages/components/overlay/_examples/theme/index.jsx":WO,"../pages/components/overlay/index.jsx":KO,"../pages/components/pager/_examples/Context/index.jsx":JO,"../pages/components/pager/_examples/Pager/index.jsx":nD,"../pages/components/pager/_examples/className/index.jsx":aD,"../pages/components/pager/_examples/color/index.jsx":iD,"../pages/components/pager/_examples/icons/index.jsx":dD,"../pages/components/pager/_examples/nextIcon/index.jsx":mD,"../pages/components/pager/_examples/showFirstLast/index.jsx":vD,"../pages/components/pager/_examples/size/index.jsx":jD,"../pages/components/pager/index.jsx":SD,"../pages/components/radio/_examples/Overview/index.jsx":TD,"../pages/components/radio/_examples/border/index.jsx":LD,"../pages/components/radio/_examples/className/index.jsx":OD,"../pages/components/radio/_examples/disabled/index.jsx":AD,"../pages/components/radio/_examples/inline/index.jsx":ID,"../pages/components/radio/_examples/onChange/index.jsx":FD,"../pages/components/radio/_examples/options/index.jsx":VD,"../pages/components/radio/_examples/value/index.jsx":KD,"../pages/components/radio/index.jsx":YD,"../pages/components/search/_examples/Search/index.jsx":JD,"../pages/components/search/_examples/displayResult/index.jsx":rM,"../pages/components/search/_examples/displayValue/index.jsx":lM,"../pages/components/search/_examples/onSearch/index.jsx":dM,"../pages/components/search/index.jsx":fM,"../pages/components/select/_examples/Select/index.jsx":xM,"../pages/components/select/_examples/displayOption/index.jsx":jM,"../pages/components/select/_examples/displayValue/index.jsx":_M,"../pages/components/select/_examples/options/index.jsx":LM,"../pages/components/select/index.jsx":RM,"../pages/components/sortable/_examples/Horizontal/index.jsx":MM,"../pages/components/sortable/_examples/Sortable/index.jsx":$M,"../pages/components/sortable/_examples/Vertical/index.jsx":zM,"../pages/components/sortable/index.jsx":UM,"../pages/getting-started/installation.jsx":YM,"../pages/index.jsx":JM}));function s$(e){const n=Object.entries(e).map(l$).filter(a=>!a.path.match(o$)).reduce((a,s)=>(a[s.path]=s,a),{}),r=Object.keys(n).filter(a=>a.match(r$)).sort((a,s)=>s.length-a.length);for(let a of r){const s=n[a];delete n[a];const l=a.replace(/_layout$/,""),i=l.length;s.path=l,s.children=[];const c=n[l];c&&(delete c.path,c.index=!0,s.children.push(c),delete n[l]);const u=Object.keys(n).filter(d=>d.slice(0,i)===l);for(let d of u){const p=n[d];delete n[d],d=d.slice(i),p.path=d.length?d:"/",s.children.push(p)}n[l]=s}return Object.values(n)}function l$([e,t]){const n=e.replace(/^[./]*pages/,"").replace(/\.jsx$/,"").replace(/index$/,"").replace(/\[(\w+)\]/,":$1"),r=t.default;return{path:n,Component:r}}const i$=hP([{path:"/",element:o.jsx(n$,{}),children:a$}],{basename:"/badger-react-ui"});zc.createRoot(document.getElementById("root")).render(o.jsx(ee.StrictMode,{children:o.jsx(UP,{storageKey:"theme",children:o.jsx(ks.Provider,{children:o.jsx(bP,{router:i$})})})}));
