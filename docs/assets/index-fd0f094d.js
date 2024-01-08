var Qx=Object.defineProperty;var qx=(e,t,n)=>t in e?Qx(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Re=(e,t,n)=>(qx(e,typeof t!="symbol"?t+"":t,n),n);function Jx(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in e)){const s=Object.getOwnPropertyDescriptor(r,a);s&&Object.defineProperty(e,a,s.get?s:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}})();var Sl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function xr(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var lh={exports:{}},si={},ih={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rs=Symbol.for("react.element"),e4=Symbol.for("react.portal"),t4=Symbol.for("react.fragment"),n4=Symbol.for("react.strict_mode"),r4=Symbol.for("react.profiler"),o4=Symbol.for("react.provider"),a4=Symbol.for("react.context"),s4=Symbol.for("react.forward_ref"),l4=Symbol.for("react.suspense"),i4=Symbol.for("react.memo"),c4=Symbol.for("react.lazy"),Mp=Symbol.iterator;function u4(e){return e===null||typeof e!="object"?null:(e=Mp&&e[Mp]||e["@@iterator"],typeof e=="function"?e:null)}var ch={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},uh=Object.assign,dh={};function Mo(e,t,n){this.props=e,this.context=t,this.refs=dh,this.updater=n||ch}Mo.prototype.isReactComponent={};Mo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Mo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ph(){}ph.prototype=Mo.prototype;function Wu(e,t,n){this.props=e,this.context=t,this.refs=dh,this.updater=n||ch}var Zu=Wu.prototype=new ph;Zu.constructor=Wu;uh(Zu,Mo.prototype);Zu.isPureReactComponent=!0;var Ap=Array.isArray,fh=Object.prototype.hasOwnProperty,Ku={current:null},hh={key:!0,ref:!0,__self:!0,__source:!0};function mh(e,t,n){var r,a={},s=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(s=""+t.key),t)fh.call(t,r)&&!hh.hasOwnProperty(r)&&(a[r]=t[r]);var i=arguments.length-2;if(i===1)a.children=n;else if(1<i){for(var c=Array(i),u=0;u<i;u++)c[u]=arguments[u+2];a.children=c}if(e&&e.defaultProps)for(r in i=e.defaultProps,i)a[r]===void 0&&(a[r]=i[r]);return{$$typeof:rs,type:e,key:s,ref:l,props:a,_owner:Ku.current}}function d4(e,t){return{$$typeof:rs,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Gu(e){return typeof e=="object"&&e!==null&&e.$$typeof===rs}function p4(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Pp=/\/+/g;function Hi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?p4(""+e.key):t.toString(36)}function il(e,t,n,r,a){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case rs:case e4:l=!0}}if(l)return l=e,a=a(l),e=r===""?"."+Hi(l,0):r,Ap(a)?(n="",e!=null&&(n=e.replace(Pp,"$&/")+"/"),il(a,t,n,"",function(u){return u})):a!=null&&(Gu(a)&&(a=d4(a,n+(!a.key||l&&l.key===a.key?"":(""+a.key).replace(Pp,"$&/")+"/")+e)),t.push(a)),1;if(l=0,r=r===""?".":r+":",Ap(e))for(var i=0;i<e.length;i++){s=e[i];var c=r+Hi(s,i);l+=il(s,t,n,c,a)}else if(c=u4(e),typeof c=="function")for(e=c.call(e),i=0;!(s=e.next()).done;)s=s.value,c=r+Hi(s,i++),l+=il(s,t,n,c,a);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function As(e,t,n){if(e==null)return e;var r=[],a=0;return il(e,r,"","",function(s){return t.call(n,s,a++)}),r}function f4(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ht={current:null},cl={transition:null},h4={ReactCurrentDispatcher:ht,ReactCurrentBatchConfig:cl,ReactCurrentOwner:Ku};ie.Children={map:As,forEach:function(e,t,n){As(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return As(e,function(){t++}),t},toArray:function(e){return As(e,function(t){return t})||[]},only:function(e){if(!Gu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ie.Component=Mo;ie.Fragment=t4;ie.Profiler=r4;ie.PureComponent=Wu;ie.StrictMode=n4;ie.Suspense=l4;ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=h4;ie.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=uh({},e.props),a=e.key,s=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,l=Ku.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(c in t)fh.call(t,c)&&!hh.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&i!==void 0?i[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){i=Array(c);for(var u=0;u<c;u++)i[u]=arguments[u+2];r.children=i}return{$$typeof:rs,type:e.type,key:a,ref:s,props:r,_owner:l}};ie.createContext=function(e){return e={$$typeof:a4,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:o4,_context:e},e.Consumer=e};ie.createElement=mh;ie.createFactory=function(e){var t=mh.bind(null,e);return t.type=e,t};ie.createRef=function(){return{current:null}};ie.forwardRef=function(e){return{$$typeof:s4,render:e}};ie.isValidElement=Gu;ie.lazy=function(e){return{$$typeof:c4,_payload:{_status:-1,_result:e},_init:f4}};ie.memo=function(e,t){return{$$typeof:i4,type:e,compare:t===void 0?null:t}};ie.startTransition=function(e){var t=cl.transition;cl.transition={};try{e()}finally{cl.transition=t}};ie.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ie.useCallback=function(e,t){return ht.current.useCallback(e,t)};ie.useContext=function(e){return ht.current.useContext(e)};ie.useDebugValue=function(){};ie.useDeferredValue=function(e){return ht.current.useDeferredValue(e)};ie.useEffect=function(e,t){return ht.current.useEffect(e,t)};ie.useId=function(){return ht.current.useId()};ie.useImperativeHandle=function(e,t,n){return ht.current.useImperativeHandle(e,t,n)};ie.useInsertionEffect=function(e,t){return ht.current.useInsertionEffect(e,t)};ie.useLayoutEffect=function(e,t){return ht.current.useLayoutEffect(e,t)};ie.useMemo=function(e,t){return ht.current.useMemo(e,t)};ie.useReducer=function(e,t,n){return ht.current.useReducer(e,t,n)};ie.useRef=function(e){return ht.current.useRef(e)};ie.useState=function(e){return ht.current.useState(e)};ie.useSyncExternalStore=function(e,t,n){return ht.current.useSyncExternalStore(e,t,n)};ie.useTransition=function(){return ht.current.useTransition()};ie.version="18.2.0";ih.exports=ie;var x=ih.exports;const q=xr(x),m4=Jx({__proto__:null,default:q},[x]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g4=x,x4=Symbol.for("react.element"),v4=Symbol.for("react.fragment"),y4=Object.prototype.hasOwnProperty,C4=g4.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,j4={key:!0,ref:!0,__self:!0,__source:!0};function gh(e,t,n){var r,a={},s=null,l=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)y4.call(t,r)&&!j4.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)a[r]===void 0&&(a[r]=t[r]);return{$$typeof:x4,type:e,key:s,ref:l,props:a,_owner:C4.current}}si.Fragment=v4;si.jsx=gh;si.jsxs=gh;lh.exports=si;var o=lh.exports,Oc={},xh={exports:{}},Rt={},vh={exports:{}},yh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(D,$){var B=D.length;D.push($);e:for(;0<B;){var H=B-1>>>1,F=D[H];if(0<a(F,$))D[H]=$,D[B]=F,B=H;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var $=D[0],B=D.pop();if(B!==$){D[0]=B;e:for(var H=0,F=D.length,ve=F>>>1;H<ve;){var ae=2*(H+1)-1,we=D[ae],ce=ae+1,Ae=D[ce];if(0>a(we,B))ce<F&&0>a(Ae,we)?(D[H]=Ae,D[ce]=B,H=ce):(D[H]=we,D[ae]=B,H=ae);else if(ce<F&&0>a(Ae,B))D[H]=Ae,D[ce]=B,H=ce;else break e}}return $}function a(D,$){var B=D.sortIndex-$.sortIndex;return B!==0?B:D.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var l=Date,i=l.now();e.unstable_now=function(){return l.now()-i}}var c=[],u=[],d=1,f=null,g=3,y=!1,b=!1,j=!1,_=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(D){for(var $=n(u);$!==null;){if($.callback===null)r(u);else if($.startTime<=D)r(u),$.sortIndex=$.expirationTime,t(c,$);else break;$=n(u)}}function h(D){if(j=!1,m(D),!b)if(n(c)!==null)b=!0,me(C);else{var $=n(u);$!==null&&oe(h,$.startTime-D)}}function C(D,$){b=!1,j&&(j=!1,v(T),T=-1),y=!0;var B=g;try{for(m($),f=n(c);f!==null&&(!(f.expirationTime>$)||D&&!P());){var H=f.callback;if(typeof H=="function"){f.callback=null,g=f.priorityLevel;var F=H(f.expirationTime<=$);$=e.unstable_now(),typeof F=="function"?f.callback=F:f===n(c)&&r(c),m($)}else r(c);f=n(c)}if(f!==null)var ve=!0;else{var ae=n(u);ae!==null&&oe(h,ae.startTime-$),ve=!1}return ve}finally{f=null,g=B,y=!1}}var S=!1,w=null,T=-1,L=5,N=-1;function P(){return!(e.unstable_now()-N<L)}function Y(){if(w!==null){var D=e.unstable_now();N=D;var $=!0;try{$=w(!0,D)}finally{$?J():(S=!1,w=null)}}else S=!1}var J;if(typeof p=="function")J=function(){p(Y)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,ee=de.port2;de.port1.onmessage=Y,J=function(){ee.postMessage(null)}}else J=function(){_(Y,0)};function me(D){w=D,S||(S=!0,J())}function oe(D,$){T=_(function(){D(e.unstable_now())},$)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(D){D.callback=null},e.unstable_continueExecution=function(){b||y||(b=!0,me(C))},e.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<D?Math.floor(1e3/D):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(D){switch(g){case 1:case 2:case 3:var $=3;break;default:$=g}var B=g;g=$;try{return D()}finally{g=B}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(D,$){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var B=g;g=D;try{return $()}finally{g=B}},e.unstable_scheduleCallback=function(D,$,B){var H=e.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?H+B:H):B=H,D){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=B+F,D={id:d++,callback:$,priorityLevel:D,startTime:B,expirationTime:F,sortIndex:-1},B>H?(D.sortIndex=B,t(u,D),n(c)===null&&D===n(u)&&(j?(v(T),T=-1):j=!0,oe(h,B-H))):(D.sortIndex=F,t(c,D),b||y||(b=!0,me(C))),D},e.unstable_shouldYield=P,e.unstable_wrapCallback=function(D){var $=g;return function(){var B=g;g=$;try{return D.apply(this,arguments)}finally{g=B}}}})(yh);vh.exports=yh;var b4=vh.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ch=x,Nt=b4;function A(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var jh=new Set,Ma={};function Zr(e,t){To(e,t),To(e+"Capture",t)}function To(e,t){for(Ma[e]=t,e=0;e<t.length;e++)jh.add(t[e])}var En=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Dc=Object.prototype.hasOwnProperty,S4=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,$p={},Ip={};function w4(e){return Dc.call(Ip,e)?!0:Dc.call($p,e)?!1:S4.test(e)?Ip[e]=!0:($p[e]=!0,!1)}function _4(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function T4(e,t,n,r){if(t===null||typeof t>"u"||_4(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function mt(e,t,n,r,a,s,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=l}var tt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){tt[e]=new mt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];tt[t]=new mt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){tt[e]=new mt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){tt[e]=new mt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){tt[e]=new mt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){tt[e]=new mt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){tt[e]=new mt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){tt[e]=new mt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){tt[e]=new mt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Yu=/[\-:]([a-z])/g;function Xu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Yu,Xu);tt[t]=new mt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Yu,Xu);tt[t]=new mt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Yu,Xu);tt[t]=new mt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){tt[e]=new mt(e,1,!1,e.toLowerCase(),null,!1,!1)});tt.xlinkHref=new mt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){tt[e]=new mt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Qu(e,t,n,r){var a=tt.hasOwnProperty(t)?tt[t]:null;(a!==null?a.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(T4(t,n,a,r)&&(n=null),r||a===null?w4(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,r=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Mn=Ch.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ps=Symbol.for("react.element"),ro=Symbol.for("react.portal"),oo=Symbol.for("react.fragment"),qu=Symbol.for("react.strict_mode"),Mc=Symbol.for("react.profiler"),bh=Symbol.for("react.provider"),Sh=Symbol.for("react.context"),Ju=Symbol.for("react.forward_ref"),Ac=Symbol.for("react.suspense"),Pc=Symbol.for("react.suspense_list"),ed=Symbol.for("react.memo"),Yn=Symbol.for("react.lazy"),wh=Symbol.for("react.offscreen"),Bp=Symbol.iterator;function Yo(e){return e===null||typeof e!="object"?null:(e=Bp&&e[Bp]||e["@@iterator"],typeof e=="function"?e:null)}var Me=Object.assign,Vi;function ia(e){if(Vi===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Vi=t&&t[1]||""}return`
`+Vi+e}var Wi=!1;function Zi(e,t){if(!e||Wi)return"";Wi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var a=u.stack.split(`
`),s=r.stack.split(`
`),l=a.length-1,i=s.length-1;1<=l&&0<=i&&a[l]!==s[i];)i--;for(;1<=l&&0<=i;l--,i--)if(a[l]!==s[i]){if(l!==1||i!==1)do if(l--,i--,0>i||a[l]!==s[i]){var c=`
`+a[l].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=l&&0<=i);break}}}finally{Wi=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ia(e):""}function k4(e){switch(e.tag){case 5:return ia(e.type);case 16:return ia("Lazy");case 13:return ia("Suspense");case 19:return ia("SuspenseList");case 0:case 2:case 15:return e=Zi(e.type,!1),e;case 11:return e=Zi(e.type.render,!1),e;case 1:return e=Zi(e.type,!0),e;default:return""}}function $c(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case oo:return"Fragment";case ro:return"Portal";case Mc:return"Profiler";case qu:return"StrictMode";case Ac:return"Suspense";case Pc:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Sh:return(e.displayName||"Context")+".Consumer";case bh:return(e._context.displayName||"Context")+".Provider";case Ju:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ed:return t=e.displayName||null,t!==null?t:$c(e.type)||"Memo";case Yn:t=e._payload,e=e._init;try{return $c(e(t))}catch{}}return null}function E4(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $c(t);case 8:return t===qu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function pr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function _h(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function L4(e){var t=_h(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(l){r=""+l,s.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function $s(e){e._valueTracker||(e._valueTracker=L4(e))}function Th(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=_h(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function wl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ic(e,t){var n=t.checked;return Me({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function zp(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=pr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function kh(e,t){t=t.checked,t!=null&&Qu(e,"checked",t,!1)}function Bc(e,t){kh(e,t);var n=pr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?zc(e,t.type,n):t.hasOwnProperty("defaultValue")&&zc(e,t.type,pr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Fp(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function zc(e,t,n){(t!=="number"||wl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ca=Array.isArray;function vo(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+pr(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Fc(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(A(91));return Me({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Up(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(A(92));if(ca(n)){if(1<n.length)throw Error(A(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:pr(n)}}function Eh(e,t){var n=pr(t.value),r=pr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Hp(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Lh(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Uc(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Lh(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Is,Nh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Is=Is||document.createElement("div"),Is.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Is.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Aa(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var va={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},N4=["Webkit","ms","Moz","O"];Object.keys(va).forEach(function(e){N4.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),va[t]=va[e]})});function Rh(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||va.hasOwnProperty(e)&&va[e]?(""+t).trim():t+"px"}function Oh(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,a=Rh(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}var R4=Me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Hc(e,t){if(t){if(R4[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(A(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(A(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(A(61))}if(t.style!=null&&typeof t.style!="object")throw Error(A(62))}}function Vc(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wc=null;function td(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Zc=null,yo=null,Co=null;function Vp(e){if(e=ss(e)){if(typeof Zc!="function")throw Error(A(280));var t=e.stateNode;t&&(t=di(t),Zc(e.stateNode,e.type,t))}}function Dh(e){yo?Co?Co.push(e):Co=[e]:yo=e}function Mh(){if(yo){var e=yo,t=Co;if(Co=yo=null,Vp(e),t)for(e=0;e<t.length;e++)Vp(t[e])}}function Ah(e,t){return e(t)}function Ph(){}var Ki=!1;function $h(e,t,n){if(Ki)return e(t,n);Ki=!0;try{return Ah(e,t,n)}finally{Ki=!1,(yo!==null||Co!==null)&&(Ph(),Mh())}}function Pa(e,t){var n=e.stateNode;if(n===null)return null;var r=di(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(A(231,t,typeof n));return n}var Kc=!1;if(En)try{var Xo={};Object.defineProperty(Xo,"passive",{get:function(){Kc=!0}}),window.addEventListener("test",Xo,Xo),window.removeEventListener("test",Xo,Xo)}catch{Kc=!1}function O4(e,t,n,r,a,s,l,i,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var ya=!1,_l=null,Tl=!1,Gc=null,D4={onError:function(e){ya=!0,_l=e}};function M4(e,t,n,r,a,s,l,i,c){ya=!1,_l=null,O4.apply(D4,arguments)}function A4(e,t,n,r,a,s,l,i,c){if(M4.apply(this,arguments),ya){if(ya){var u=_l;ya=!1,_l=null}else throw Error(A(198));Tl||(Tl=!0,Gc=u)}}function Kr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ih(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Wp(e){if(Kr(e)!==e)throw Error(A(188))}function P4(e){var t=e.alternate;if(!t){if(t=Kr(e),t===null)throw Error(A(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return Wp(a),e;if(s===r)return Wp(a),t;s=s.sibling}throw Error(A(188))}if(n.return!==r.return)n=a,r=s;else{for(var l=!1,i=a.child;i;){if(i===n){l=!0,n=a,r=s;break}if(i===r){l=!0,r=a,n=s;break}i=i.sibling}if(!l){for(i=s.child;i;){if(i===n){l=!0,n=s,r=a;break}if(i===r){l=!0,r=s,n=a;break}i=i.sibling}if(!l)throw Error(A(189))}}if(n.alternate!==r)throw Error(A(190))}if(n.tag!==3)throw Error(A(188));return n.stateNode.current===n?e:t}function Bh(e){return e=P4(e),e!==null?zh(e):null}function zh(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=zh(e);if(t!==null)return t;e=e.sibling}return null}var Fh=Nt.unstable_scheduleCallback,Zp=Nt.unstable_cancelCallback,$4=Nt.unstable_shouldYield,I4=Nt.unstable_requestPaint,Fe=Nt.unstable_now,B4=Nt.unstable_getCurrentPriorityLevel,nd=Nt.unstable_ImmediatePriority,Uh=Nt.unstable_UserBlockingPriority,kl=Nt.unstable_NormalPriority,z4=Nt.unstable_LowPriority,Hh=Nt.unstable_IdlePriority,li=null,fn=null;function F4(e){if(fn&&typeof fn.onCommitFiberRoot=="function")try{fn.onCommitFiberRoot(li,e,void 0,(e.current.flags&128)===128)}catch{}}var en=Math.clz32?Math.clz32:V4,U4=Math.log,H4=Math.LN2;function V4(e){return e>>>=0,e===0?32:31-(U4(e)/H4|0)|0}var Bs=64,zs=4194304;function ua(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function El(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,a=e.suspendedLanes,s=e.pingedLanes,l=n&268435455;if(l!==0){var i=l&~a;i!==0?r=ua(i):(s&=l,s!==0&&(r=ua(s)))}else l=n&~a,l!==0?r=ua(l):s!==0&&(r=ua(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&a)&&(a=r&-r,s=t&-t,a>=s||a===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-en(t),a=1<<n,r|=e[n],t&=~a;return r}function W4(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Z4(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,s=e.pendingLanes;0<s;){var l=31-en(s),i=1<<l,c=a[l];c===-1?(!(i&n)||i&r)&&(a[l]=W4(i,t)):c<=t&&(e.expiredLanes|=i),s&=~i}}function Yc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Vh(){var e=Bs;return Bs<<=1,!(Bs&4194240)&&(Bs=64),e}function Gi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function os(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-en(t),e[t]=n}function K4(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-en(n),s=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~s}}function rd(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-en(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var Ce=0;function Wh(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Zh,od,Kh,Gh,Yh,Xc=!1,Fs=[],or=null,ar=null,sr=null,$a=new Map,Ia=new Map,Jn=[],G4="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Kp(e,t){switch(e){case"focusin":case"focusout":or=null;break;case"dragenter":case"dragleave":ar=null;break;case"mouseover":case"mouseout":sr=null;break;case"pointerover":case"pointerout":$a.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ia.delete(t.pointerId)}}function Qo(e,t,n,r,a,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[a]},t!==null&&(t=ss(t),t!==null&&od(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function Y4(e,t,n,r,a){switch(t){case"focusin":return or=Qo(or,e,t,n,r,a),!0;case"dragenter":return ar=Qo(ar,e,t,n,r,a),!0;case"mouseover":return sr=Qo(sr,e,t,n,r,a),!0;case"pointerover":var s=a.pointerId;return $a.set(s,Qo($a.get(s)||null,e,t,n,r,a)),!0;case"gotpointercapture":return s=a.pointerId,Ia.set(s,Qo(Ia.get(s)||null,e,t,n,r,a)),!0}return!1}function Xh(e){var t=Dr(e.target);if(t!==null){var n=Kr(t);if(n!==null){if(t=n.tag,t===13){if(t=Ih(n),t!==null){e.blockedOn=t,Yh(e.priority,function(){Kh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ul(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Qc(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Wc=r,n.target.dispatchEvent(r),Wc=null}else return t=ss(n),t!==null&&od(t),e.blockedOn=n,!1;t.shift()}return!0}function Gp(e,t,n){ul(e)&&n.delete(t)}function X4(){Xc=!1,or!==null&&ul(or)&&(or=null),ar!==null&&ul(ar)&&(ar=null),sr!==null&&ul(sr)&&(sr=null),$a.forEach(Gp),Ia.forEach(Gp)}function qo(e,t){e.blockedOn===t&&(e.blockedOn=null,Xc||(Xc=!0,Nt.unstable_scheduleCallback(Nt.unstable_NormalPriority,X4)))}function Ba(e){function t(a){return qo(a,e)}if(0<Fs.length){qo(Fs[0],e);for(var n=1;n<Fs.length;n++){var r=Fs[n];r.blockedOn===e&&(r.blockedOn=null)}}for(or!==null&&qo(or,e),ar!==null&&qo(ar,e),sr!==null&&qo(sr,e),$a.forEach(t),Ia.forEach(t),n=0;n<Jn.length;n++)r=Jn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Jn.length&&(n=Jn[0],n.blockedOn===null);)Xh(n),n.blockedOn===null&&Jn.shift()}var jo=Mn.ReactCurrentBatchConfig,Ll=!0;function Q4(e,t,n,r){var a=Ce,s=jo.transition;jo.transition=null;try{Ce=1,ad(e,t,n,r)}finally{Ce=a,jo.transition=s}}function q4(e,t,n,r){var a=Ce,s=jo.transition;jo.transition=null;try{Ce=4,ad(e,t,n,r)}finally{Ce=a,jo.transition=s}}function ad(e,t,n,r){if(Ll){var a=Qc(e,t,n,r);if(a===null)oc(e,t,r,Nl,n),Kp(e,r);else if(Y4(a,e,t,n,r))r.stopPropagation();else if(Kp(e,r),t&4&&-1<G4.indexOf(e)){for(;a!==null;){var s=ss(a);if(s!==null&&Zh(s),s=Qc(e,t,n,r),s===null&&oc(e,t,r,Nl,n),s===a)break;a=s}a!==null&&r.stopPropagation()}else oc(e,t,r,null,n)}}var Nl=null;function Qc(e,t,n,r){if(Nl=null,e=td(r),e=Dr(e),e!==null)if(t=Kr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ih(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Nl=e,null}function Qh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(B4()){case nd:return 1;case Uh:return 4;case kl:case z4:return 16;case Hh:return 536870912;default:return 16}default:return 16}}var nr=null,sd=null,dl=null;function qh(){if(dl)return dl;var e,t=sd,n=t.length,r,a="value"in nr?nr.value:nr.textContent,s=a.length;for(e=0;e<n&&t[e]===a[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===a[s-r];r++);return dl=a.slice(e,1<r?1-r:void 0)}function pl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Us(){return!0}function Yp(){return!1}function Ot(e){function t(n,r,a,s,l){this._reactName=n,this._targetInst=a,this.type=r,this.nativeEvent=s,this.target=l,this.currentTarget=null;for(var i in e)e.hasOwnProperty(i)&&(n=e[i],this[i]=n?n(s):s[i]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Us:Yp,this.isPropagationStopped=Yp,this}return Me(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Us)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Us)},persist:function(){},isPersistent:Us}),t}var Ao={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ld=Ot(Ao),as=Me({},Ao,{view:0,detail:0}),J4=Ot(as),Yi,Xi,Jo,ii=Me({},as,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:id,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Jo&&(Jo&&e.type==="mousemove"?(Yi=e.screenX-Jo.screenX,Xi=e.screenY-Jo.screenY):Xi=Yi=0,Jo=e),Yi)},movementY:function(e){return"movementY"in e?e.movementY:Xi}}),Xp=Ot(ii),e5=Me({},ii,{dataTransfer:0}),t5=Ot(e5),n5=Me({},as,{relatedTarget:0}),Qi=Ot(n5),r5=Me({},Ao,{animationName:0,elapsedTime:0,pseudoElement:0}),o5=Ot(r5),a5=Me({},Ao,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),s5=Ot(a5),l5=Me({},Ao,{data:0}),Qp=Ot(l5),i5={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},c5={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},u5={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function d5(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=u5[e])?!!t[e]:!1}function id(){return d5}var p5=Me({},as,{key:function(e){if(e.key){var t=i5[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=pl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?c5[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:id,charCode:function(e){return e.type==="keypress"?pl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?pl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),f5=Ot(p5),h5=Me({},ii,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qp=Ot(h5),m5=Me({},as,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:id}),g5=Ot(m5),x5=Me({},Ao,{propertyName:0,elapsedTime:0,pseudoElement:0}),v5=Ot(x5),y5=Me({},ii,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),C5=Ot(y5),j5=[9,13,27,32],cd=En&&"CompositionEvent"in window,Ca=null;En&&"documentMode"in document&&(Ca=document.documentMode);var b5=En&&"TextEvent"in window&&!Ca,Jh=En&&(!cd||Ca&&8<Ca&&11>=Ca),Jp=String.fromCharCode(32),e1=!1;function e2(e,t){switch(e){case"keyup":return j5.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function t2(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ao=!1;function S5(e,t){switch(e){case"compositionend":return t2(t);case"keypress":return t.which!==32?null:(e1=!0,Jp);case"textInput":return e=t.data,e===Jp&&e1?null:e;default:return null}}function w5(e,t){if(ao)return e==="compositionend"||!cd&&e2(e,t)?(e=qh(),dl=sd=nr=null,ao=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Jh&&t.locale!=="ko"?null:t.data;default:return null}}var _5={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function t1(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!_5[e.type]:t==="textarea"}function n2(e,t,n,r){Dh(r),t=Rl(t,"onChange"),0<t.length&&(n=new ld("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ja=null,za=null;function T5(e){f2(e,0)}function ci(e){var t=io(e);if(Th(t))return e}function k5(e,t){if(e==="change")return t}var r2=!1;if(En){var qi;if(En){var Ji="oninput"in document;if(!Ji){var n1=document.createElement("div");n1.setAttribute("oninput","return;"),Ji=typeof n1.oninput=="function"}qi=Ji}else qi=!1;r2=qi&&(!document.documentMode||9<document.documentMode)}function r1(){ja&&(ja.detachEvent("onpropertychange",o2),za=ja=null)}function o2(e){if(e.propertyName==="value"&&ci(za)){var t=[];n2(t,za,e,td(e)),$h(T5,t)}}function E5(e,t,n){e==="focusin"?(r1(),ja=t,za=n,ja.attachEvent("onpropertychange",o2)):e==="focusout"&&r1()}function L5(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ci(za)}function N5(e,t){if(e==="click")return ci(t)}function R5(e,t){if(e==="input"||e==="change")return ci(t)}function O5(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var nn=typeof Object.is=="function"?Object.is:O5;function Fa(e,t){if(nn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!Dc.call(t,a)||!nn(e[a],t[a]))return!1}return!0}function o1(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function a1(e,t){var n=o1(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=o1(n)}}function a2(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?a2(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function s2(){for(var e=window,t=wl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=wl(e.document)}return t}function ud(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function D5(e){var t=s2(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&a2(n.ownerDocument.documentElement,n)){if(r!==null&&ud(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,s=Math.min(r.start,a);r=r.end===void 0?s:Math.min(r.end,a),!e.extend&&s>r&&(a=r,r=s,s=a),a=a1(n,s);var l=a1(n,r);a&&l&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var M5=En&&"documentMode"in document&&11>=document.documentMode,so=null,qc=null,ba=null,Jc=!1;function s1(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Jc||so==null||so!==wl(r)||(r=so,"selectionStart"in r&&ud(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ba&&Fa(ba,r)||(ba=r,r=Rl(qc,"onSelect"),0<r.length&&(t=new ld("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=so)))}function Hs(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var lo={animationend:Hs("Animation","AnimationEnd"),animationiteration:Hs("Animation","AnimationIteration"),animationstart:Hs("Animation","AnimationStart"),transitionend:Hs("Transition","TransitionEnd")},ec={},l2={};En&&(l2=document.createElement("div").style,"AnimationEvent"in window||(delete lo.animationend.animation,delete lo.animationiteration.animation,delete lo.animationstart.animation),"TransitionEvent"in window||delete lo.transitionend.transition);function ui(e){if(ec[e])return ec[e];if(!lo[e])return e;var t=lo[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in l2)return ec[e]=t[n];return e}var i2=ui("animationend"),c2=ui("animationiteration"),u2=ui("animationstart"),d2=ui("transitionend"),p2=new Map,l1="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vr(e,t){p2.set(e,t),Zr(t,[e])}for(var tc=0;tc<l1.length;tc++){var nc=l1[tc],A5=nc.toLowerCase(),P5=nc[0].toUpperCase()+nc.slice(1);vr(A5,"on"+P5)}vr(i2,"onAnimationEnd");vr(c2,"onAnimationIteration");vr(u2,"onAnimationStart");vr("dblclick","onDoubleClick");vr("focusin","onFocus");vr("focusout","onBlur");vr(d2,"onTransitionEnd");To("onMouseEnter",["mouseout","mouseover"]);To("onMouseLeave",["mouseout","mouseover"]);To("onPointerEnter",["pointerout","pointerover"]);To("onPointerLeave",["pointerout","pointerover"]);Zr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Zr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Zr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Zr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Zr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Zr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var da="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$5=new Set("cancel close invalid load scroll toggle".split(" ").concat(da));function i1(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,A4(r,t,void 0,e),e.currentTarget=null}function f2(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var l=r.length-1;0<=l;l--){var i=r[l],c=i.instance,u=i.currentTarget;if(i=i.listener,c!==s&&a.isPropagationStopped())break e;i1(a,i,u),s=c}else for(l=0;l<r.length;l++){if(i=r[l],c=i.instance,u=i.currentTarget,i=i.listener,c!==s&&a.isPropagationStopped())break e;i1(a,i,u),s=c}}}if(Tl)throw e=Gc,Tl=!1,Gc=null,e}function Te(e,t){var n=t[ou];n===void 0&&(n=t[ou]=new Set);var r=e+"__bubble";n.has(r)||(h2(t,e,2,!1),n.add(r))}function rc(e,t,n){var r=0;t&&(r|=4),h2(n,e,r,t)}var Vs="_reactListening"+Math.random().toString(36).slice(2);function Ua(e){if(!e[Vs]){e[Vs]=!0,jh.forEach(function(n){n!=="selectionchange"&&($5.has(n)||rc(n,!1,e),rc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Vs]||(t[Vs]=!0,rc("selectionchange",!1,t))}}function h2(e,t,n,r){switch(Qh(t)){case 1:var a=Q4;break;case 4:a=q4;break;default:a=ad}n=a.bind(null,t,n,e),a=void 0,!Kc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function oc(e,t,n,r,a){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var i=r.stateNode.containerInfo;if(i===a||i.nodeType===8&&i.parentNode===a)break;if(l===4)for(l=r.return;l!==null;){var c=l.tag;if((c===3||c===4)&&(c=l.stateNode.containerInfo,c===a||c.nodeType===8&&c.parentNode===a))return;l=l.return}for(;i!==null;){if(l=Dr(i),l===null)return;if(c=l.tag,c===5||c===6){r=s=l;continue e}i=i.parentNode}}r=r.return}$h(function(){var u=s,d=td(n),f=[];e:{var g=p2.get(e);if(g!==void 0){var y=ld,b=e;switch(e){case"keypress":if(pl(n)===0)break e;case"keydown":case"keyup":y=f5;break;case"focusin":b="focus",y=Qi;break;case"focusout":b="blur",y=Qi;break;case"beforeblur":case"afterblur":y=Qi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Xp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=t5;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=g5;break;case i2:case c2:case u2:y=o5;break;case d2:y=v5;break;case"scroll":y=J4;break;case"wheel":y=C5;break;case"copy":case"cut":case"paste":y=s5;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=qp}var j=(t&4)!==0,_=!j&&e==="scroll",v=j?g!==null?g+"Capture":null:g;j=[];for(var p=u,m;p!==null;){m=p;var h=m.stateNode;if(m.tag===5&&h!==null&&(m=h,v!==null&&(h=Pa(p,v),h!=null&&j.push(Ha(p,h,m)))),_)break;p=p.return}0<j.length&&(g=new y(g,b,null,n,d),f.push({event:g,listeners:j}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",g&&n!==Wc&&(b=n.relatedTarget||n.fromElement)&&(Dr(b)||b[Ln]))break e;if((y||g)&&(g=d.window===d?d:(g=d.ownerDocument)?g.defaultView||g.parentWindow:window,y?(b=n.relatedTarget||n.toElement,y=u,b=b?Dr(b):null,b!==null&&(_=Kr(b),b!==_||b.tag!==5&&b.tag!==6)&&(b=null)):(y=null,b=u),y!==b)){if(j=Xp,h="onMouseLeave",v="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(j=qp,h="onPointerLeave",v="onPointerEnter",p="pointer"),_=y==null?g:io(y),m=b==null?g:io(b),g=new j(h,p+"leave",y,n,d),g.target=_,g.relatedTarget=m,h=null,Dr(d)===u&&(j=new j(v,p+"enter",b,n,d),j.target=m,j.relatedTarget=_,h=j),_=h,y&&b)t:{for(j=y,v=b,p=0,m=j;m;m=eo(m))p++;for(m=0,h=v;h;h=eo(h))m++;for(;0<p-m;)j=eo(j),p--;for(;0<m-p;)v=eo(v),m--;for(;p--;){if(j===v||v!==null&&j===v.alternate)break t;j=eo(j),v=eo(v)}j=null}else j=null;y!==null&&c1(f,g,y,j,!1),b!==null&&_!==null&&c1(f,_,b,j,!0)}}e:{if(g=u?io(u):window,y=g.nodeName&&g.nodeName.toLowerCase(),y==="select"||y==="input"&&g.type==="file")var C=k5;else if(t1(g))if(r2)C=R5;else{C=L5;var S=E5}else(y=g.nodeName)&&y.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(C=N5);if(C&&(C=C(e,u))){n2(f,C,n,d);break e}S&&S(e,g,u),e==="focusout"&&(S=g._wrapperState)&&S.controlled&&g.type==="number"&&zc(g,"number",g.value)}switch(S=u?io(u):window,e){case"focusin":(t1(S)||S.contentEditable==="true")&&(so=S,qc=u,ba=null);break;case"focusout":ba=qc=so=null;break;case"mousedown":Jc=!0;break;case"contextmenu":case"mouseup":case"dragend":Jc=!1,s1(f,n,d);break;case"selectionchange":if(M5)break;case"keydown":case"keyup":s1(f,n,d)}var w;if(cd)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else ao?e2(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(Jh&&n.locale!=="ko"&&(ao||T!=="onCompositionStart"?T==="onCompositionEnd"&&ao&&(w=qh()):(nr=d,sd="value"in nr?nr.value:nr.textContent,ao=!0)),S=Rl(u,T),0<S.length&&(T=new Qp(T,e,null,n,d),f.push({event:T,listeners:S}),w?T.data=w:(w=t2(n),w!==null&&(T.data=w)))),(w=b5?S5(e,n):w5(e,n))&&(u=Rl(u,"onBeforeInput"),0<u.length&&(d=new Qp("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=w))}f2(f,t)})}function Ha(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Rl(e,t){for(var n=t+"Capture",r=[];e!==null;){var a=e,s=a.stateNode;a.tag===5&&s!==null&&(a=s,s=Pa(e,n),s!=null&&r.unshift(Ha(e,s,a)),s=Pa(e,t),s!=null&&r.push(Ha(e,s,a))),e=e.return}return r}function eo(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function c1(e,t,n,r,a){for(var s=t._reactName,l=[];n!==null&&n!==r;){var i=n,c=i.alternate,u=i.stateNode;if(c!==null&&c===r)break;i.tag===5&&u!==null&&(i=u,a?(c=Pa(n,s),c!=null&&l.unshift(Ha(n,c,i))):a||(c=Pa(n,s),c!=null&&l.push(Ha(n,c,i)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var I5=/\r\n?/g,B5=/\u0000|\uFFFD/g;function u1(e){return(typeof e=="string"?e:""+e).replace(I5,`
`).replace(B5,"")}function Ws(e,t,n){if(t=u1(t),u1(e)!==t&&n)throw Error(A(425))}function Ol(){}var eu=null,tu=null;function nu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ru=typeof setTimeout=="function"?setTimeout:void 0,z5=typeof clearTimeout=="function"?clearTimeout:void 0,d1=typeof Promise=="function"?Promise:void 0,F5=typeof queueMicrotask=="function"?queueMicrotask:typeof d1<"u"?function(e){return d1.resolve(null).then(e).catch(U5)}:ru;function U5(e){setTimeout(function(){throw e})}function ac(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(r===0){e.removeChild(a),Ba(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=a}while(n);Ba(t)}function lr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function p1(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Po=Math.random().toString(36).slice(2),pn="__reactFiber$"+Po,Va="__reactProps$"+Po,Ln="__reactContainer$"+Po,ou="__reactEvents$"+Po,H5="__reactListeners$"+Po,V5="__reactHandles$"+Po;function Dr(e){var t=e[pn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ln]||n[pn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=p1(e);e!==null;){if(n=e[pn])return n;e=p1(e)}return t}e=n,n=e.parentNode}return null}function ss(e){return e=e[pn]||e[Ln],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function io(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(A(33))}function di(e){return e[Va]||null}var au=[],co=-1;function yr(e){return{current:e}}function ke(e){0>co||(e.current=au[co],au[co]=null,co--)}function Se(e,t){co++,au[co]=e.current,e.current=t}var fr={},lt=yr(fr),bt=yr(!1),Br=fr;function ko(e,t){var n=e.type.contextTypes;if(!n)return fr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a={},s;for(s in n)a[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function St(e){return e=e.childContextTypes,e!=null}function Dl(){ke(bt),ke(lt)}function f1(e,t,n){if(lt.current!==fr)throw Error(A(168));Se(lt,t),Se(bt,n)}function m2(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var a in r)if(!(a in t))throw Error(A(108,E4(e)||"Unknown",a));return Me({},n,r)}function Ml(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||fr,Br=lt.current,Se(lt,e),Se(bt,bt.current),!0}function h1(e,t,n){var r=e.stateNode;if(!r)throw Error(A(169));n?(e=m2(e,t,Br),r.__reactInternalMemoizedMergedChildContext=e,ke(bt),ke(lt),Se(lt,e)):ke(bt),Se(bt,n)}var Sn=null,pi=!1,sc=!1;function g2(e){Sn===null?Sn=[e]:Sn.push(e)}function W5(e){pi=!0,g2(e)}function Cr(){if(!sc&&Sn!==null){sc=!0;var e=0,t=Ce;try{var n=Sn;for(Ce=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Sn=null,pi=!1}catch(a){throw Sn!==null&&(Sn=Sn.slice(e+1)),Fh(nd,Cr),a}finally{Ce=t,sc=!1}}return null}var uo=[],po=0,Al=null,Pl=0,Pt=[],$t=0,zr=null,wn=1,_n="";function Nr(e,t){uo[po++]=Pl,uo[po++]=Al,Al=e,Pl=t}function x2(e,t,n){Pt[$t++]=wn,Pt[$t++]=_n,Pt[$t++]=zr,zr=e;var r=wn;e=_n;var a=32-en(r)-1;r&=~(1<<a),n+=1;var s=32-en(t)+a;if(30<s){var l=a-a%5;s=(r&(1<<l)-1).toString(32),r>>=l,a-=l,wn=1<<32-en(t)+a|n<<a|r,_n=s+e}else wn=1<<s|n<<a|r,_n=e}function dd(e){e.return!==null&&(Nr(e,1),x2(e,1,0))}function pd(e){for(;e===Al;)Al=uo[--po],uo[po]=null,Pl=uo[--po],uo[po]=null;for(;e===zr;)zr=Pt[--$t],Pt[$t]=null,_n=Pt[--$t],Pt[$t]=null,wn=Pt[--$t],Pt[$t]=null}var Lt=null,Et=null,Le=!1,Jt=null;function v2(e,t){var n=It(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function m1(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Lt=e,Et=lr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Lt=e,Et=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=zr!==null?{id:wn,overflow:_n}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=It(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Lt=e,Et=null,!0):!1;default:return!1}}function su(e){return(e.mode&1)!==0&&(e.flags&128)===0}function lu(e){if(Le){var t=Et;if(t){var n=t;if(!m1(e,t)){if(su(e))throw Error(A(418));t=lr(n.nextSibling);var r=Lt;t&&m1(e,t)?v2(r,n):(e.flags=e.flags&-4097|2,Le=!1,Lt=e)}}else{if(su(e))throw Error(A(418));e.flags=e.flags&-4097|2,Le=!1,Lt=e}}}function g1(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Lt=e}function Zs(e){if(e!==Lt)return!1;if(!Le)return g1(e),Le=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!nu(e.type,e.memoizedProps)),t&&(t=Et)){if(su(e))throw y2(),Error(A(418));for(;t;)v2(e,t),t=lr(t.nextSibling)}if(g1(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(A(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Et=lr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Et=null}}else Et=Lt?lr(e.stateNode.nextSibling):null;return!0}function y2(){for(var e=Et;e;)e=lr(e.nextSibling)}function Eo(){Et=Lt=null,Le=!1}function fd(e){Jt===null?Jt=[e]:Jt.push(e)}var Z5=Mn.ReactCurrentBatchConfig;function Xt(e,t){if(e&&e.defaultProps){t=Me({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var $l=yr(null),Il=null,fo=null,hd=null;function md(){hd=fo=Il=null}function gd(e){var t=$l.current;ke($l),e._currentValue=t}function iu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function bo(e,t){Il=e,hd=fo=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(jt=!0),e.firstContext=null)}function Ft(e){var t=e._currentValue;if(hd!==e)if(e={context:e,memoizedValue:t,next:null},fo===null){if(Il===null)throw Error(A(308));fo=e,Il.dependencies={lanes:0,firstContext:e}}else fo=fo.next=e;return t}var Mr=null;function xd(e){Mr===null?Mr=[e]:Mr.push(e)}function C2(e,t,n,r){var a=t.interleaved;return a===null?(n.next=n,xd(t)):(n.next=a.next,a.next=n),t.interleaved=n,Nn(e,r)}function Nn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Xn=!1;function vd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function j2(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Tn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ir(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,he&2){var a=r.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),r.pending=t,Nn(e,n)}return a=r.interleaved,a===null?(t.next=t,xd(r)):(t.next=a.next,a.next=t),r.interleaved=t,Nn(e,n)}function fl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,rd(e,n)}}function x1(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var a=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?a=s=l:s=s.next=l,n=n.next}while(n!==null);s===null?a=s=t:s=s.next=t}else a=s=t;n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Bl(e,t,n,r){var a=e.updateQueue;Xn=!1;var s=a.firstBaseUpdate,l=a.lastBaseUpdate,i=a.shared.pending;if(i!==null){a.shared.pending=null;var c=i,u=c.next;c.next=null,l===null?s=u:l.next=u,l=c;var d=e.alternate;d!==null&&(d=d.updateQueue,i=d.lastBaseUpdate,i!==l&&(i===null?d.firstBaseUpdate=u:i.next=u,d.lastBaseUpdate=c))}if(s!==null){var f=a.baseState;l=0,d=u=c=null,i=s;do{var g=i.lane,y=i.eventTime;if((r&g)===g){d!==null&&(d=d.next={eventTime:y,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null});e:{var b=e,j=i;switch(g=t,y=n,j.tag){case 1:if(b=j.payload,typeof b=="function"){f=b.call(y,f,g);break e}f=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=j.payload,g=typeof b=="function"?b.call(y,f,g):b,g==null)break e;f=Me({},f,g);break e;case 2:Xn=!0}}i.callback!==null&&i.lane!==0&&(e.flags|=64,g=a.effects,g===null?a.effects=[i]:g.push(i))}else y={eventTime:y,lane:g,tag:i.tag,payload:i.payload,callback:i.callback,next:null},d===null?(u=d=y,c=f):d=d.next=y,l|=g;if(i=i.next,i===null){if(i=a.shared.pending,i===null)break;g=i,i=g.next,g.next=null,a.lastBaseUpdate=g,a.shared.pending=null}}while(1);if(d===null&&(c=f),a.baseState=c,a.firstBaseUpdate=u,a.lastBaseUpdate=d,t=a.shared.interleaved,t!==null){a=t;do l|=a.lane,a=a.next;while(a!==t)}else s===null&&(a.shared.lanes=0);Ur|=l,e.lanes=l,e.memoizedState=f}}function v1(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(a!==null){if(r.callback=null,r=n,typeof a!="function")throw Error(A(191,a));a.call(r)}}}var b2=new Ch.Component().refs;function cu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Me({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var fi={isMounted:function(e){return(e=e._reactInternals)?Kr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ft(),a=ur(e),s=Tn(r,a);s.payload=t,n!=null&&(s.callback=n),t=ir(e,s,a),t!==null&&(tn(t,e,a,r),fl(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ft(),a=ur(e),s=Tn(r,a);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=ir(e,s,a),t!==null&&(tn(t,e,a,r),fl(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ft(),r=ur(e),a=Tn(n,r);a.tag=2,t!=null&&(a.callback=t),t=ir(e,a,r),t!==null&&(tn(t,e,r,n),fl(t,e,r))}};function y1(e,t,n,r,a,s,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,l):t.prototype&&t.prototype.isPureReactComponent?!Fa(n,r)||!Fa(a,s):!0}function S2(e,t,n){var r=!1,a=fr,s=t.contextType;return typeof s=="object"&&s!==null?s=Ft(s):(a=St(t)?Br:lt.current,r=t.contextTypes,s=(r=r!=null)?ko(e,a):fr),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=fi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=s),t}function C1(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&fi.enqueueReplaceState(t,t.state,null)}function uu(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs=b2,vd(e);var s=t.contextType;typeof s=="object"&&s!==null?a.context=Ft(s):(s=St(t)?Br:lt.current,a.context=ko(e,s)),a.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(cu(e,t,s,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&fi.enqueueReplaceState(a,a.state,null),Bl(e,n,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function ea(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(A(309));var r=n.stateNode}if(!r)throw Error(A(147,e));var a=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(l){var i=a.refs;i===b2&&(i=a.refs={}),l===null?delete i[s]:i[s]=l},t._stringRef=s,t)}if(typeof e!="string")throw Error(A(284));if(!n._owner)throw Error(A(290,e))}return e}function Ks(e,t){throw e=Object.prototype.toString.call(t),Error(A(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function j1(e){var t=e._init;return t(e._payload)}function w2(e){function t(v,p){if(e){var m=v.deletions;m===null?(v.deletions=[p],v.flags|=16):m.push(p)}}function n(v,p){if(!e)return null;for(;p!==null;)t(v,p),p=p.sibling;return null}function r(v,p){for(v=new Map;p!==null;)p.key!==null?v.set(p.key,p):v.set(p.index,p),p=p.sibling;return v}function a(v,p){return v=dr(v,p),v.index=0,v.sibling=null,v}function s(v,p,m){return v.index=m,e?(m=v.alternate,m!==null?(m=m.index,m<p?(v.flags|=2,p):m):(v.flags|=2,p)):(v.flags|=1048576,p)}function l(v){return e&&v.alternate===null&&(v.flags|=2),v}function i(v,p,m,h){return p===null||p.tag!==6?(p=fc(m,v.mode,h),p.return=v,p):(p=a(p,m),p.return=v,p)}function c(v,p,m,h){var C=m.type;return C===oo?d(v,p,m.props.children,h,m.key):p!==null&&(p.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Yn&&j1(C)===p.type)?(h=a(p,m.props),h.ref=ea(v,p,m),h.return=v,h):(h=yl(m.type,m.key,m.props,null,v.mode,h),h.ref=ea(v,p,m),h.return=v,h)}function u(v,p,m,h){return p===null||p.tag!==4||p.stateNode.containerInfo!==m.containerInfo||p.stateNode.implementation!==m.implementation?(p=hc(m,v.mode,h),p.return=v,p):(p=a(p,m.children||[]),p.return=v,p)}function d(v,p,m,h,C){return p===null||p.tag!==7?(p=Ir(m,v.mode,h,C),p.return=v,p):(p=a(p,m),p.return=v,p)}function f(v,p,m){if(typeof p=="string"&&p!==""||typeof p=="number")return p=fc(""+p,v.mode,m),p.return=v,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Ps:return m=yl(p.type,p.key,p.props,null,v.mode,m),m.ref=ea(v,null,p),m.return=v,m;case ro:return p=hc(p,v.mode,m),p.return=v,p;case Yn:var h=p._init;return f(v,h(p._payload),m)}if(ca(p)||Yo(p))return p=Ir(p,v.mode,m,null),p.return=v,p;Ks(v,p)}return null}function g(v,p,m,h){var C=p!==null?p.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return C!==null?null:i(v,p,""+m,h);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ps:return m.key===C?c(v,p,m,h):null;case ro:return m.key===C?u(v,p,m,h):null;case Yn:return C=m._init,g(v,p,C(m._payload),h)}if(ca(m)||Yo(m))return C!==null?null:d(v,p,m,h,null);Ks(v,m)}return null}function y(v,p,m,h,C){if(typeof h=="string"&&h!==""||typeof h=="number")return v=v.get(m)||null,i(p,v,""+h,C);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Ps:return v=v.get(h.key===null?m:h.key)||null,c(p,v,h,C);case ro:return v=v.get(h.key===null?m:h.key)||null,u(p,v,h,C);case Yn:var S=h._init;return y(v,p,m,S(h._payload),C)}if(ca(h)||Yo(h))return v=v.get(m)||null,d(p,v,h,C,null);Ks(p,h)}return null}function b(v,p,m,h){for(var C=null,S=null,w=p,T=p=0,L=null;w!==null&&T<m.length;T++){w.index>T?(L=w,w=null):L=w.sibling;var N=g(v,w,m[T],h);if(N===null){w===null&&(w=L);break}e&&w&&N.alternate===null&&t(v,w),p=s(N,p,T),S===null?C=N:S.sibling=N,S=N,w=L}if(T===m.length)return n(v,w),Le&&Nr(v,T),C;if(w===null){for(;T<m.length;T++)w=f(v,m[T],h),w!==null&&(p=s(w,p,T),S===null?C=w:S.sibling=w,S=w);return Le&&Nr(v,T),C}for(w=r(v,w);T<m.length;T++)L=y(w,v,T,m[T],h),L!==null&&(e&&L.alternate!==null&&w.delete(L.key===null?T:L.key),p=s(L,p,T),S===null?C=L:S.sibling=L,S=L);return e&&w.forEach(function(P){return t(v,P)}),Le&&Nr(v,T),C}function j(v,p,m,h){var C=Yo(m);if(typeof C!="function")throw Error(A(150));if(m=C.call(m),m==null)throw Error(A(151));for(var S=C=null,w=p,T=p=0,L=null,N=m.next();w!==null&&!N.done;T++,N=m.next()){w.index>T?(L=w,w=null):L=w.sibling;var P=g(v,w,N.value,h);if(P===null){w===null&&(w=L);break}e&&w&&P.alternate===null&&t(v,w),p=s(P,p,T),S===null?C=P:S.sibling=P,S=P,w=L}if(N.done)return n(v,w),Le&&Nr(v,T),C;if(w===null){for(;!N.done;T++,N=m.next())N=f(v,N.value,h),N!==null&&(p=s(N,p,T),S===null?C=N:S.sibling=N,S=N);return Le&&Nr(v,T),C}for(w=r(v,w);!N.done;T++,N=m.next())N=y(w,v,T,N.value,h),N!==null&&(e&&N.alternate!==null&&w.delete(N.key===null?T:N.key),p=s(N,p,T),S===null?C=N:S.sibling=N,S=N);return e&&w.forEach(function(Y){return t(v,Y)}),Le&&Nr(v,T),C}function _(v,p,m,h){if(typeof m=="object"&&m!==null&&m.type===oo&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Ps:e:{for(var C=m.key,S=p;S!==null;){if(S.key===C){if(C=m.type,C===oo){if(S.tag===7){n(v,S.sibling),p=a(S,m.props.children),p.return=v,v=p;break e}}else if(S.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Yn&&j1(C)===S.type){n(v,S.sibling),p=a(S,m.props),p.ref=ea(v,S,m),p.return=v,v=p;break e}n(v,S);break}else t(v,S);S=S.sibling}m.type===oo?(p=Ir(m.props.children,v.mode,h,m.key),p.return=v,v=p):(h=yl(m.type,m.key,m.props,null,v.mode,h),h.ref=ea(v,p,m),h.return=v,v=h)}return l(v);case ro:e:{for(S=m.key;p!==null;){if(p.key===S)if(p.tag===4&&p.stateNode.containerInfo===m.containerInfo&&p.stateNode.implementation===m.implementation){n(v,p.sibling),p=a(p,m.children||[]),p.return=v,v=p;break e}else{n(v,p);break}else t(v,p);p=p.sibling}p=hc(m,v.mode,h),p.return=v,v=p}return l(v);case Yn:return S=m._init,_(v,p,S(m._payload),h)}if(ca(m))return b(v,p,m,h);if(Yo(m))return j(v,p,m,h);Ks(v,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,p!==null&&p.tag===6?(n(v,p.sibling),p=a(p,m),p.return=v,v=p):(n(v,p),p=fc(m,v.mode,h),p.return=v,v=p),l(v)):n(v,p)}return _}var Lo=w2(!0),_2=w2(!1),ls={},hn=yr(ls),Wa=yr(ls),Za=yr(ls);function Ar(e){if(e===ls)throw Error(A(174));return e}function yd(e,t){switch(Se(Za,t),Se(Wa,e),Se(hn,ls),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Uc(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Uc(t,e)}ke(hn),Se(hn,t)}function No(){ke(hn),ke(Wa),ke(Za)}function T2(e){Ar(Za.current);var t=Ar(hn.current),n=Uc(t,e.type);t!==n&&(Se(Wa,e),Se(hn,n))}function Cd(e){Wa.current===e&&(ke(hn),ke(Wa))}var Oe=yr(0);function zl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var lc=[];function jd(){for(var e=0;e<lc.length;e++)lc[e]._workInProgressVersionPrimary=null;lc.length=0}var hl=Mn.ReactCurrentDispatcher,ic=Mn.ReactCurrentBatchConfig,Fr=0,De=null,Ve=null,Ye=null,Fl=!1,Sa=!1,Ka=0,K5=0;function rt(){throw Error(A(321))}function bd(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!nn(e[n],t[n]))return!1;return!0}function Sd(e,t,n,r,a,s){if(Fr=s,De=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,hl.current=e===null||e.memoizedState===null?Q5:q5,e=n(r,a),Sa){s=0;do{if(Sa=!1,Ka=0,25<=s)throw Error(A(301));s+=1,Ye=Ve=null,t.updateQueue=null,hl.current=J5,e=n(r,a)}while(Sa)}if(hl.current=Ul,t=Ve!==null&&Ve.next!==null,Fr=0,Ye=Ve=De=null,Fl=!1,t)throw Error(A(300));return e}function wd(){var e=Ka!==0;return Ka=0,e}function cn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ye===null?De.memoizedState=Ye=e:Ye=Ye.next=e,Ye}function Ut(){if(Ve===null){var e=De.alternate;e=e!==null?e.memoizedState:null}else e=Ve.next;var t=Ye===null?De.memoizedState:Ye.next;if(t!==null)Ye=t,Ve=e;else{if(e===null)throw Error(A(310));Ve=e,e={memoizedState:Ve.memoizedState,baseState:Ve.baseState,baseQueue:Ve.baseQueue,queue:Ve.queue,next:null},Ye===null?De.memoizedState=Ye=e:Ye=Ye.next=e}return Ye}function Ga(e,t){return typeof t=="function"?t(e):t}function cc(e){var t=Ut(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var r=Ve,a=r.baseQueue,s=n.pending;if(s!==null){if(a!==null){var l=a.next;a.next=s.next,s.next=l}r.baseQueue=a=s,n.pending=null}if(a!==null){s=a.next,r=r.baseState;var i=l=null,c=null,u=s;do{var d=u.lane;if((Fr&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(i=c=f,l=r):c=c.next=f,De.lanes|=d,Ur|=d}u=u.next}while(u!==null&&u!==s);c===null?l=r:c.next=i,nn(r,t.memoizedState)||(jt=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){a=e;do s=a.lane,De.lanes|=s,Ur|=s,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function uc(e){var t=Ut(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,s=t.memoizedState;if(a!==null){n.pending=null;var l=a=a.next;do s=e(s,l.action),l=l.next;while(l!==a);nn(s,t.memoizedState)||(jt=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function k2(){}function E2(e,t){var n=De,r=Ut(),a=t(),s=!nn(r.memoizedState,a);if(s&&(r.memoizedState=a,jt=!0),r=r.queue,_d(R2.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||Ye!==null&&Ye.memoizedState.tag&1){if(n.flags|=2048,Ya(9,N2.bind(null,n,r,a,t),void 0,null),Qe===null)throw Error(A(349));Fr&30||L2(n,t,a)}return a}function L2(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=De.updateQueue,t===null?(t={lastEffect:null,stores:null},De.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function N2(e,t,n,r){t.value=n,t.getSnapshot=r,O2(t)&&D2(e)}function R2(e,t,n){return n(function(){O2(t)&&D2(e)})}function O2(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!nn(e,n)}catch{return!0}}function D2(e){var t=Nn(e,1);t!==null&&tn(t,e,1,-1)}function b1(e){var t=cn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ga,lastRenderedState:e},t.queue=e,e=e.dispatch=X5.bind(null,De,e),[t.memoizedState,e]}function Ya(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=De.updateQueue,t===null?(t={lastEffect:null,stores:null},De.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function M2(){return Ut().memoizedState}function ml(e,t,n,r){var a=cn();De.flags|=e,a.memoizedState=Ya(1|t,n,void 0,r===void 0?null:r)}function hi(e,t,n,r){var a=Ut();r=r===void 0?null:r;var s=void 0;if(Ve!==null){var l=Ve.memoizedState;if(s=l.destroy,r!==null&&bd(r,l.deps)){a.memoizedState=Ya(t,n,s,r);return}}De.flags|=e,a.memoizedState=Ya(1|t,n,s,r)}function S1(e,t){return ml(8390656,8,e,t)}function _d(e,t){return hi(2048,8,e,t)}function A2(e,t){return hi(4,2,e,t)}function P2(e,t){return hi(4,4,e,t)}function $2(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function I2(e,t,n){return n=n!=null?n.concat([e]):null,hi(4,4,$2.bind(null,t,e),n)}function Td(){}function B2(e,t){var n=Ut();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&bd(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function z2(e,t){var n=Ut();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&bd(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function F2(e,t,n){return Fr&21?(nn(n,t)||(n=Vh(),De.lanes|=n,Ur|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,jt=!0),e.memoizedState=n)}function G5(e,t){var n=Ce;Ce=n!==0&&4>n?n:4,e(!0);var r=ic.transition;ic.transition={};try{e(!1),t()}finally{Ce=n,ic.transition=r}}function U2(){return Ut().memoizedState}function Y5(e,t,n){var r=ur(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},H2(e))V2(t,n);else if(n=C2(e,t,n,r),n!==null){var a=ft();tn(n,e,r,a),W2(n,t,r)}}function X5(e,t,n){var r=ur(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(H2(e))V2(t,a);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var l=t.lastRenderedState,i=s(l,n);if(a.hasEagerState=!0,a.eagerState=i,nn(i,l)){var c=t.interleaved;c===null?(a.next=a,xd(t)):(a.next=c.next,c.next=a),t.interleaved=a;return}}catch{}finally{}n=C2(e,t,a,r),n!==null&&(a=ft(),tn(n,e,r,a),W2(n,t,r))}}function H2(e){var t=e.alternate;return e===De||t!==null&&t===De}function V2(e,t){Sa=Fl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function W2(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,rd(e,n)}}var Ul={readContext:Ft,useCallback:rt,useContext:rt,useEffect:rt,useImperativeHandle:rt,useInsertionEffect:rt,useLayoutEffect:rt,useMemo:rt,useReducer:rt,useRef:rt,useState:rt,useDebugValue:rt,useDeferredValue:rt,useTransition:rt,useMutableSource:rt,useSyncExternalStore:rt,useId:rt,unstable_isNewReconciler:!1},Q5={readContext:Ft,useCallback:function(e,t){return cn().memoizedState=[e,t===void 0?null:t],e},useContext:Ft,useEffect:S1,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ml(4194308,4,$2.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ml(4194308,4,e,t)},useInsertionEffect:function(e,t){return ml(4,2,e,t)},useMemo:function(e,t){var n=cn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=cn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Y5.bind(null,De,e),[r.memoizedState,e]},useRef:function(e){var t=cn();return e={current:e},t.memoizedState=e},useState:b1,useDebugValue:Td,useDeferredValue:function(e){return cn().memoizedState=e},useTransition:function(){var e=b1(!1),t=e[0];return e=G5.bind(null,e[1]),cn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=De,a=cn();if(Le){if(n===void 0)throw Error(A(407));n=n()}else{if(n=t(),Qe===null)throw Error(A(349));Fr&30||L2(r,t,n)}a.memoizedState=n;var s={value:n,getSnapshot:t};return a.queue=s,S1(R2.bind(null,r,s,e),[e]),r.flags|=2048,Ya(9,N2.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=cn(),t=Qe.identifierPrefix;if(Le){var n=_n,r=wn;n=(r&~(1<<32-en(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ka++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=K5++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},q5={readContext:Ft,useCallback:B2,useContext:Ft,useEffect:_d,useImperativeHandle:I2,useInsertionEffect:A2,useLayoutEffect:P2,useMemo:z2,useReducer:cc,useRef:M2,useState:function(){return cc(Ga)},useDebugValue:Td,useDeferredValue:function(e){var t=Ut();return F2(t,Ve.memoizedState,e)},useTransition:function(){var e=cc(Ga)[0],t=Ut().memoizedState;return[e,t]},useMutableSource:k2,useSyncExternalStore:E2,useId:U2,unstable_isNewReconciler:!1},J5={readContext:Ft,useCallback:B2,useContext:Ft,useEffect:_d,useImperativeHandle:I2,useInsertionEffect:A2,useLayoutEffect:P2,useMemo:z2,useReducer:uc,useRef:M2,useState:function(){return uc(Ga)},useDebugValue:Td,useDeferredValue:function(e){var t=Ut();return Ve===null?t.memoizedState=e:F2(t,Ve.memoizedState,e)},useTransition:function(){var e=uc(Ga)[0],t=Ut().memoizedState;return[e,t]},useMutableSource:k2,useSyncExternalStore:E2,useId:U2,unstable_isNewReconciler:!1};function Ro(e,t){try{var n="",r=t;do n+=k4(r),r=r.return;while(r);var a=n}catch(s){a=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:a,digest:null}}function dc(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function du(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var e6=typeof WeakMap=="function"?WeakMap:Map;function Z2(e,t,n){n=Tn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Vl||(Vl=!0,ju=r),du(e,t)},n}function K2(e,t,n){n=Tn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){du(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){du(e,t),typeof r!="function"&&(cr===null?cr=new Set([this]):cr.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function w1(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new e6;var a=new Set;r.set(t,a)}else a=r.get(t),a===void 0&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=h6.bind(null,e,t,n),t.then(e,e))}function _1(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function T1(e,t,n,r,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Tn(-1,1),t.tag=2,ir(n,t,1))),n.lanes|=1),e)}var t6=Mn.ReactCurrentOwner,jt=!1;function pt(e,t,n,r){t.child=e===null?_2(t,null,n,r):Lo(t,e.child,n,r)}function k1(e,t,n,r,a){n=n.render;var s=t.ref;return bo(t,a),r=Sd(e,t,n,r,s,a),n=wd(),e!==null&&!jt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Rn(e,t,a)):(Le&&n&&dd(t),t.flags|=1,pt(e,t,r,a),t.child)}function E1(e,t,n,r,a){if(e===null){var s=n.type;return typeof s=="function"&&!Md(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,G2(e,t,s,r,a)):(e=yl(n.type,null,r,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&a)){var l=s.memoizedProps;if(n=n.compare,n=n!==null?n:Fa,n(l,r)&&e.ref===t.ref)return Rn(e,t,a)}return t.flags|=1,e=dr(s,r),e.ref=t.ref,e.return=t,t.child=e}function G2(e,t,n,r,a){if(e!==null){var s=e.memoizedProps;if(Fa(s,r)&&e.ref===t.ref)if(jt=!1,t.pendingProps=r=s,(e.lanes&a)!==0)e.flags&131072&&(jt=!0);else return t.lanes=e.lanes,Rn(e,t,a)}return pu(e,t,n,r,a)}function Y2(e,t,n){var r=t.pendingProps,a=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Se(mo,kt),kt|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Se(mo,kt),kt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Se(mo,kt),kt|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,Se(mo,kt),kt|=r;return pt(e,t,a,n),t.child}function X2(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function pu(e,t,n,r,a){var s=St(n)?Br:lt.current;return s=ko(t,s),bo(t,a),n=Sd(e,t,n,r,s,a),r=wd(),e!==null&&!jt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Rn(e,t,a)):(Le&&r&&dd(t),t.flags|=1,pt(e,t,n,a),t.child)}function L1(e,t,n,r,a){if(St(n)){var s=!0;Ml(t)}else s=!1;if(bo(t,a),t.stateNode===null)gl(e,t),S2(t,n,r),uu(t,n,r,a),r=!0;else if(e===null){var l=t.stateNode,i=t.memoizedProps;l.props=i;var c=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ft(u):(u=St(n)?Br:lt.current,u=ko(t,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof l.getSnapshotBeforeUpdate=="function";f||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(i!==r||c!==u)&&C1(t,l,r,u),Xn=!1;var g=t.memoizedState;l.state=g,Bl(t,r,l,a),c=t.memoizedState,i!==r||g!==c||bt.current||Xn?(typeof d=="function"&&(cu(t,n,d,r),c=t.memoizedState),(i=Xn||y1(t,n,i,r,g,c,u))?(f||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),l.props=r,l.state=c,l.context=u,r=i):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,j2(e,t),i=t.memoizedProps,u=t.type===t.elementType?i:Xt(t.type,i),l.props=u,f=t.pendingProps,g=l.context,c=n.contextType,typeof c=="object"&&c!==null?c=Ft(c):(c=St(n)?Br:lt.current,c=ko(t,c));var y=n.getDerivedStateFromProps;(d=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(i!==f||g!==c)&&C1(t,l,r,c),Xn=!1,g=t.memoizedState,l.state=g,Bl(t,r,l,a);var b=t.memoizedState;i!==f||g!==b||bt.current||Xn?(typeof y=="function"&&(cu(t,n,y,r),b=t.memoizedState),(u=Xn||y1(t,n,u,r,g,b,c)||!1)?(d||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,b,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,b,c)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||i===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=b),l.props=r,l.state=b,l.context=c,r=u):(typeof l.componentDidUpdate!="function"||i===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return fu(e,t,n,r,s,a)}function fu(e,t,n,r,a,s){X2(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return a&&h1(t,n,!1),Rn(e,t,s);r=t.stateNode,t6.current=t;var i=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Lo(t,e.child,null,s),t.child=Lo(t,null,i,s)):pt(e,t,i,s),t.memoizedState=r.state,a&&h1(t,n,!0),t.child}function Q2(e){var t=e.stateNode;t.pendingContext?f1(e,t.pendingContext,t.pendingContext!==t.context):t.context&&f1(e,t.context,!1),yd(e,t.containerInfo)}function N1(e,t,n,r,a){return Eo(),fd(a),t.flags|=256,pt(e,t,n,r),t.child}var hu={dehydrated:null,treeContext:null,retryLane:0};function mu(e){return{baseLanes:e,cachePool:null,transitions:null}}function q2(e,t,n){var r=t.pendingProps,a=Oe.current,s=!1,l=(t.flags&128)!==0,i;if((i=l)||(i=e!==null&&e.memoizedState===null?!1:(a&2)!==0),i?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),Se(Oe,a&1),e===null)return lu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,s?(r=t.mode,s=t.child,l={mode:"hidden",children:l},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=l):s=xi(l,r,0,null),e=Ir(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=mu(n),t.memoizedState=hu,e):kd(t,l));if(a=e.memoizedState,a!==null&&(i=a.dehydrated,i!==null))return n6(e,t,l,r,i,a,n);if(s){s=r.fallback,l=t.mode,a=e.child,i=a.sibling;var c={mode:"hidden",children:r.children};return!(l&1)&&t.child!==a?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=dr(a,c),r.subtreeFlags=a.subtreeFlags&14680064),i!==null?s=dr(i,s):(s=Ir(s,l,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,l=e.child.memoizedState,l=l===null?mu(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=e.childLanes&~n,t.memoizedState=hu,r}return s=e.child,e=s.sibling,r=dr(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function kd(e,t){return t=xi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Gs(e,t,n,r){return r!==null&&fd(r),Lo(t,e.child,null,n),e=kd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function n6(e,t,n,r,a,s,l){if(n)return t.flags&256?(t.flags&=-257,r=dc(Error(A(422))),Gs(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,a=t.mode,r=xi({mode:"visible",children:r.children},a,0,null),s=Ir(s,a,l,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&Lo(t,e.child,null,l),t.child.memoizedState=mu(l),t.memoizedState=hu,s);if(!(t.mode&1))return Gs(e,t,l,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var i=r.dgst;return r=i,s=Error(A(419)),r=dc(s,r,void 0),Gs(e,t,l,r)}if(i=(l&e.childLanes)!==0,jt||i){if(r=Qe,r!==null){switch(l&-l){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(r.suspendedLanes|l)?0:a,a!==0&&a!==s.retryLane&&(s.retryLane=a,Nn(e,a),tn(r,e,a,-1))}return Dd(),r=dc(Error(A(421))),Gs(e,t,l,r)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=m6.bind(null,e),a._reactRetry=t,null):(e=s.treeContext,Et=lr(a.nextSibling),Lt=t,Le=!0,Jt=null,e!==null&&(Pt[$t++]=wn,Pt[$t++]=_n,Pt[$t++]=zr,wn=e.id,_n=e.overflow,zr=t),t=kd(t,r.children),t.flags|=4096,t)}function R1(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),iu(e.return,t,n)}function pc(e,t,n,r,a){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=a)}function J2(e,t,n){var r=t.pendingProps,a=r.revealOrder,s=r.tail;if(pt(e,t,r.children,n),r=Oe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&R1(e,n,t);else if(e.tag===19)R1(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Se(Oe,r),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&zl(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),pc(t,!1,a,n,s);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&zl(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}pc(t,!0,n,null,s);break;case"together":pc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function gl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Rn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ur|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(A(153));if(t.child!==null){for(e=t.child,n=dr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=dr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function r6(e,t,n){switch(t.tag){case 3:Q2(t),Eo();break;case 5:T2(t);break;case 1:St(t.type)&&Ml(t);break;case 4:yd(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;Se($l,r._currentValue),r._currentValue=a;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Se(Oe,Oe.current&1),t.flags|=128,null):n&t.child.childLanes?q2(e,t,n):(Se(Oe,Oe.current&1),e=Rn(e,t,n),e!==null?e.sibling:null);Se(Oe,Oe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return J2(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Se(Oe,Oe.current),r)break;return null;case 22:case 23:return t.lanes=0,Y2(e,t,n)}return Rn(e,t,n)}var em,gu,tm,nm;em=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};gu=function(){};tm=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,Ar(hn.current);var s=null;switch(n){case"input":a=Ic(e,a),r=Ic(e,r),s=[];break;case"select":a=Me({},a,{value:void 0}),r=Me({},r,{value:void 0}),s=[];break;case"textarea":a=Fc(e,a),r=Fc(e,r),s=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ol)}Hc(n,r);var l;n=null;for(u in a)if(!r.hasOwnProperty(u)&&a.hasOwnProperty(u)&&a[u]!=null)if(u==="style"){var i=a[u];for(l in i)i.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ma.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var c=r[u];if(i=a!=null?a[u]:void 0,r.hasOwnProperty(u)&&c!==i&&(c!=null||i!=null))if(u==="style")if(i){for(l in i)!i.hasOwnProperty(l)||c&&c.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in c)c.hasOwnProperty(l)&&i[l]!==c[l]&&(n||(n={}),n[l]=c[l])}else n||(s||(s=[]),s.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,i=i?i.__html:void 0,c!=null&&i!==c&&(s=s||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ma.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&Te("scroll",e),s||i===c||(s=[])):(s=s||[]).push(u,c))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};nm=function(e,t,n,r){n!==r&&(t.flags|=4)};function ta(e,t){if(!Le)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ot(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function o6(e,t,n){var r=t.pendingProps;switch(pd(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ot(t),null;case 1:return St(t.type)&&Dl(),ot(t),null;case 3:return r=t.stateNode,No(),ke(bt),ke(lt),jd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Zs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Jt!==null&&(wu(Jt),Jt=null))),gu(e,t),ot(t),null;case 5:Cd(t);var a=Ar(Za.current);if(n=t.type,e!==null&&t.stateNode!=null)tm(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(A(166));return ot(t),null}if(e=Ar(hn.current),Zs(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[pn]=t,r[Va]=s,e=(t.mode&1)!==0,n){case"dialog":Te("cancel",r),Te("close",r);break;case"iframe":case"object":case"embed":Te("load",r);break;case"video":case"audio":for(a=0;a<da.length;a++)Te(da[a],r);break;case"source":Te("error",r);break;case"img":case"image":case"link":Te("error",r),Te("load",r);break;case"details":Te("toggle",r);break;case"input":zp(r,s),Te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Te("invalid",r);break;case"textarea":Up(r,s),Te("invalid",r)}Hc(n,s),a=null;for(var l in s)if(s.hasOwnProperty(l)){var i=s[l];l==="children"?typeof i=="string"?r.textContent!==i&&(s.suppressHydrationWarning!==!0&&Ws(r.textContent,i,e),a=["children",i]):typeof i=="number"&&r.textContent!==""+i&&(s.suppressHydrationWarning!==!0&&Ws(r.textContent,i,e),a=["children",""+i]):Ma.hasOwnProperty(l)&&i!=null&&l==="onScroll"&&Te("scroll",r)}switch(n){case"input":$s(r),Fp(r,s,!0);break;case"textarea":$s(r),Hp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ol)}r=a,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Lh(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[pn]=t,e[Va]=r,em(e,t,!1,!1),t.stateNode=e;e:{switch(l=Vc(n,r),n){case"dialog":Te("cancel",e),Te("close",e),a=r;break;case"iframe":case"object":case"embed":Te("load",e),a=r;break;case"video":case"audio":for(a=0;a<da.length;a++)Te(da[a],e);a=r;break;case"source":Te("error",e),a=r;break;case"img":case"image":case"link":Te("error",e),Te("load",e),a=r;break;case"details":Te("toggle",e),a=r;break;case"input":zp(e,r),a=Ic(e,r),Te("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=Me({},r,{value:void 0}),Te("invalid",e);break;case"textarea":Up(e,r),a=Fc(e,r),Te("invalid",e);break;default:a=r}Hc(n,a),i=a;for(s in i)if(i.hasOwnProperty(s)){var c=i[s];s==="style"?Oh(e,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Nh(e,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Aa(e,c):typeof c=="number"&&Aa(e,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ma.hasOwnProperty(s)?c!=null&&s==="onScroll"&&Te("scroll",e):c!=null&&Qu(e,s,c,l))}switch(n){case"input":$s(e),Fp(e,r,!1);break;case"textarea":$s(e),Hp(e);break;case"option":r.value!=null&&e.setAttribute("value",""+pr(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?vo(e,!!r.multiple,s,!1):r.defaultValue!=null&&vo(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Ol)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ot(t),null;case 6:if(e&&t.stateNode!=null)nm(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(A(166));if(n=Ar(Za.current),Ar(hn.current),Zs(t)){if(r=t.stateNode,n=t.memoizedProps,r[pn]=t,(s=r.nodeValue!==n)&&(e=Lt,e!==null))switch(e.tag){case 3:Ws(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ws(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[pn]=t,t.stateNode=r}return ot(t),null;case 13:if(ke(Oe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Le&&Et!==null&&t.mode&1&&!(t.flags&128))y2(),Eo(),t.flags|=98560,s=!1;else if(s=Zs(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(A(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(A(317));s[pn]=t}else Eo(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ot(t),s=!1}else Jt!==null&&(wu(Jt),Jt=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Oe.current&1?Ze===0&&(Ze=3):Dd())),t.updateQueue!==null&&(t.flags|=4),ot(t),null);case 4:return No(),gu(e,t),e===null&&Ua(t.stateNode.containerInfo),ot(t),null;case 10:return gd(t.type._context),ot(t),null;case 17:return St(t.type)&&Dl(),ot(t),null;case 19:if(ke(Oe),s=t.memoizedState,s===null)return ot(t),null;if(r=(t.flags&128)!==0,l=s.rendering,l===null)if(r)ta(s,!1);else{if(Ze!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=zl(e),l!==null){for(t.flags|=128,ta(s,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,l=s.alternate,l===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=l.childLanes,s.lanes=l.lanes,s.child=l.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=l.memoizedProps,s.memoizedState=l.memoizedState,s.updateQueue=l.updateQueue,s.type=l.type,e=l.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Se(Oe,Oe.current&1|2),t.child}e=e.sibling}s.tail!==null&&Fe()>Oo&&(t.flags|=128,r=!0,ta(s,!1),t.lanes=4194304)}else{if(!r)if(e=zl(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ta(s,!0),s.tail===null&&s.tailMode==="hidden"&&!l.alternate&&!Le)return ot(t),null}else 2*Fe()-s.renderingStartTime>Oo&&n!==1073741824&&(t.flags|=128,r=!0,ta(s,!1),t.lanes=4194304);s.isBackwards?(l.sibling=t.child,t.child=l):(n=s.last,n!==null?n.sibling=l:t.child=l,s.last=l)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Fe(),t.sibling=null,n=Oe.current,Se(Oe,r?n&1|2:n&1),t):(ot(t),null);case 22:case 23:return Od(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?kt&1073741824&&(ot(t),t.subtreeFlags&6&&(t.flags|=8192)):ot(t),null;case 24:return null;case 25:return null}throw Error(A(156,t.tag))}function a6(e,t){switch(pd(t),t.tag){case 1:return St(t.type)&&Dl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return No(),ke(bt),ke(lt),jd(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Cd(t),null;case 13:if(ke(Oe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(A(340));Eo()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ke(Oe),null;case 4:return No(),null;case 10:return gd(t.type._context),null;case 22:case 23:return Od(),null;case 24:return null;default:return null}}var Ys=!1,st=!1,s6=typeof WeakSet=="function"?WeakSet:Set,z=null;function ho(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Pe(e,t,r)}else n.current=null}function xu(e,t,n){try{n()}catch(r){Pe(e,t,r)}}var O1=!1;function l6(e,t){if(eu=Ll,e=s2(),ud(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var l=0,i=-1,c=-1,u=0,d=0,f=e,g=null;t:for(;;){for(var y;f!==n||a!==0&&f.nodeType!==3||(i=l+a),f!==s||r!==0&&f.nodeType!==3||(c=l+r),f.nodeType===3&&(l+=f.nodeValue.length),(y=f.firstChild)!==null;)g=f,f=y;for(;;){if(f===e)break t;if(g===n&&++u===a&&(i=l),g===s&&++d===r&&(c=l),(y=f.nextSibling)!==null)break;f=g,g=f.parentNode}f=y}n=i===-1||c===-1?null:{start:i,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(tu={focusedElem:e,selectionRange:n},Ll=!1,z=t;z!==null;)if(t=z,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,z=e;else for(;z!==null;){t=z;try{var b=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var j=b.memoizedProps,_=b.memoizedState,v=t.stateNode,p=v.getSnapshotBeforeUpdate(t.elementType===t.type?j:Xt(t.type,j),_);v.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(h){Pe(t,t.return,h)}if(e=t.sibling,e!==null){e.return=t.return,z=e;break}z=t.return}return b=O1,O1=!1,b}function wa(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var s=a.destroy;a.destroy=void 0,s!==void 0&&xu(t,n,s)}a=a.next}while(a!==r)}}function mi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function vu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function rm(e){var t=e.alternate;t!==null&&(e.alternate=null,rm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[pn],delete t[Va],delete t[ou],delete t[H5],delete t[V5])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function om(e){return e.tag===5||e.tag===3||e.tag===4}function D1(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||om(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function yu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ol));else if(r!==4&&(e=e.child,e!==null))for(yu(e,t,n),e=e.sibling;e!==null;)yu(e,t,n),e=e.sibling}function Cu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Cu(e,t,n),e=e.sibling;e!==null;)Cu(e,t,n),e=e.sibling}var Je=null,Qt=!1;function Zn(e,t,n){for(n=n.child;n!==null;)am(e,t,n),n=n.sibling}function am(e,t,n){if(fn&&typeof fn.onCommitFiberUnmount=="function")try{fn.onCommitFiberUnmount(li,n)}catch{}switch(n.tag){case 5:st||ho(n,t);case 6:var r=Je,a=Qt;Je=null,Zn(e,t,n),Je=r,Qt=a,Je!==null&&(Qt?(e=Je,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Je.removeChild(n.stateNode));break;case 18:Je!==null&&(Qt?(e=Je,n=n.stateNode,e.nodeType===8?ac(e.parentNode,n):e.nodeType===1&&ac(e,n),Ba(e)):ac(Je,n.stateNode));break;case 4:r=Je,a=Qt,Je=n.stateNode.containerInfo,Qt=!0,Zn(e,t,n),Je=r,Qt=a;break;case 0:case 11:case 14:case 15:if(!st&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var s=a,l=s.destroy;s=s.tag,l!==void 0&&(s&2||s&4)&&xu(n,t,l),a=a.next}while(a!==r)}Zn(e,t,n);break;case 1:if(!st&&(ho(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(i){Pe(n,t,i)}Zn(e,t,n);break;case 21:Zn(e,t,n);break;case 22:n.mode&1?(st=(r=st)||n.memoizedState!==null,Zn(e,t,n),st=r):Zn(e,t,n);break;default:Zn(e,t,n)}}function M1(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new s6),t.forEach(function(r){var a=g6.bind(null,e,r);n.has(r)||(n.add(r),r.then(a,a))})}}function Yt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r];try{var s=e,l=t,i=l;e:for(;i!==null;){switch(i.tag){case 5:Je=i.stateNode,Qt=!1;break e;case 3:Je=i.stateNode.containerInfo,Qt=!0;break e;case 4:Je=i.stateNode.containerInfo,Qt=!0;break e}i=i.return}if(Je===null)throw Error(A(160));am(s,l,a),Je=null,Qt=!1;var c=a.alternate;c!==null&&(c.return=null),a.return=null}catch(u){Pe(a,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)sm(t,e),t=t.sibling}function sm(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Yt(t,e),ln(e),r&4){try{wa(3,e,e.return),mi(3,e)}catch(j){Pe(e,e.return,j)}try{wa(5,e,e.return)}catch(j){Pe(e,e.return,j)}}break;case 1:Yt(t,e),ln(e),r&512&&n!==null&&ho(n,n.return);break;case 5:if(Yt(t,e),ln(e),r&512&&n!==null&&ho(n,n.return),e.flags&32){var a=e.stateNode;try{Aa(a,"")}catch(j){Pe(e,e.return,j)}}if(r&4&&(a=e.stateNode,a!=null)){var s=e.memoizedProps,l=n!==null?n.memoizedProps:s,i=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{i==="input"&&s.type==="radio"&&s.name!=null&&kh(a,s),Vc(i,l);var u=Vc(i,s);for(l=0;l<c.length;l+=2){var d=c[l],f=c[l+1];d==="style"?Oh(a,f):d==="dangerouslySetInnerHTML"?Nh(a,f):d==="children"?Aa(a,f):Qu(a,d,f,u)}switch(i){case"input":Bc(a,s);break;case"textarea":Eh(a,s);break;case"select":var g=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?vo(a,!!s.multiple,y,!1):g!==!!s.multiple&&(s.defaultValue!=null?vo(a,!!s.multiple,s.defaultValue,!0):vo(a,!!s.multiple,s.multiple?[]:"",!1))}a[Va]=s}catch(j){Pe(e,e.return,j)}}break;case 6:if(Yt(t,e),ln(e),r&4){if(e.stateNode===null)throw Error(A(162));a=e.stateNode,s=e.memoizedProps;try{a.nodeValue=s}catch(j){Pe(e,e.return,j)}}break;case 3:if(Yt(t,e),ln(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ba(t.containerInfo)}catch(j){Pe(e,e.return,j)}break;case 4:Yt(t,e),ln(e);break;case 13:Yt(t,e),ln(e),a=e.child,a.flags&8192&&(s=a.memoizedState!==null,a.stateNode.isHidden=s,!s||a.alternate!==null&&a.alternate.memoizedState!==null||(Nd=Fe())),r&4&&M1(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(st=(u=st)||d,Yt(t,e),st=u):Yt(t,e),ln(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(z=e,d=e.child;d!==null;){for(f=z=d;z!==null;){switch(g=z,y=g.child,g.tag){case 0:case 11:case 14:case 15:wa(4,g,g.return);break;case 1:ho(g,g.return);var b=g.stateNode;if(typeof b.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,b.props=t.memoizedProps,b.state=t.memoizedState,b.componentWillUnmount()}catch(j){Pe(r,n,j)}}break;case 5:ho(g,g.return);break;case 22:if(g.memoizedState!==null){P1(f);continue}}y!==null?(y.return=g,z=y):P1(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{a=f.stateNode,u?(s=a.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(i=f.stateNode,c=f.memoizedProps.style,l=c!=null&&c.hasOwnProperty("display")?c.display:null,i.style.display=Rh("display",l))}catch(j){Pe(e,e.return,j)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(j){Pe(e,e.return,j)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Yt(t,e),ln(e),r&4&&M1(e);break;case 21:break;default:Yt(t,e),ln(e)}}function ln(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(om(n)){var r=n;break e}n=n.return}throw Error(A(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(Aa(a,""),r.flags&=-33);var s=D1(e);Cu(e,s,a);break;case 3:case 4:var l=r.stateNode.containerInfo,i=D1(e);yu(e,i,l);break;default:throw Error(A(161))}}catch(c){Pe(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function i6(e,t,n){z=e,lm(e)}function lm(e,t,n){for(var r=(e.mode&1)!==0;z!==null;){var a=z,s=a.child;if(a.tag===22&&r){var l=a.memoizedState!==null||Ys;if(!l){var i=a.alternate,c=i!==null&&i.memoizedState!==null||st;i=Ys;var u=st;if(Ys=l,(st=c)&&!u)for(z=a;z!==null;)l=z,c=l.child,l.tag===22&&l.memoizedState!==null?$1(a):c!==null?(c.return=l,z=c):$1(a);for(;s!==null;)z=s,lm(s),s=s.sibling;z=a,Ys=i,st=u}A1(e)}else a.subtreeFlags&8772&&s!==null?(s.return=a,z=s):A1(e)}}function A1(e){for(;z!==null;){var t=z;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:st||mi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!st)if(n===null)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:Xt(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&v1(t,s,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}v1(t,l,n)}break;case 5:var i=t.stateNode;if(n===null&&t.flags&4){n=i;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Ba(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}st||t.flags&512&&vu(t)}catch(g){Pe(t,t.return,g)}}if(t===e){z=null;break}if(n=t.sibling,n!==null){n.return=t.return,z=n;break}z=t.return}}function P1(e){for(;z!==null;){var t=z;if(t===e){z=null;break}var n=t.sibling;if(n!==null){n.return=t.return,z=n;break}z=t.return}}function $1(e){for(;z!==null;){var t=z;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{mi(4,t)}catch(c){Pe(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var a=t.return;try{r.componentDidMount()}catch(c){Pe(t,a,c)}}var s=t.return;try{vu(t)}catch(c){Pe(t,s,c)}break;case 5:var l=t.return;try{vu(t)}catch(c){Pe(t,l,c)}}}catch(c){Pe(t,t.return,c)}if(t===e){z=null;break}var i=t.sibling;if(i!==null){i.return=t.return,z=i;break}z=t.return}}var c6=Math.ceil,Hl=Mn.ReactCurrentDispatcher,Ed=Mn.ReactCurrentOwner,Bt=Mn.ReactCurrentBatchConfig,he=0,Qe=null,Ue=null,et=0,kt=0,mo=yr(0),Ze=0,Xa=null,Ur=0,gi=0,Ld=0,_a=null,Ct=null,Nd=0,Oo=1/0,bn=null,Vl=!1,ju=null,cr=null,Xs=!1,rr=null,Wl=0,Ta=0,bu=null,xl=-1,vl=0;function ft(){return he&6?Fe():xl!==-1?xl:xl=Fe()}function ur(e){return e.mode&1?he&2&&et!==0?et&-et:Z5.transition!==null?(vl===0&&(vl=Vh()),vl):(e=Ce,e!==0||(e=window.event,e=e===void 0?16:Qh(e.type)),e):1}function tn(e,t,n,r){if(50<Ta)throw Ta=0,bu=null,Error(A(185));os(e,n,r),(!(he&2)||e!==Qe)&&(e===Qe&&(!(he&2)&&(gi|=n),Ze===4&&er(e,et)),wt(e,r),n===1&&he===0&&!(t.mode&1)&&(Oo=Fe()+500,pi&&Cr()))}function wt(e,t){var n=e.callbackNode;Z4(e,t);var r=El(e,e===Qe?et:0);if(r===0)n!==null&&Zp(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Zp(n),t===1)e.tag===0?W5(I1.bind(null,e)):g2(I1.bind(null,e)),F5(function(){!(he&6)&&Cr()}),n=null;else{switch(Wh(r)){case 1:n=nd;break;case 4:n=Uh;break;case 16:n=kl;break;case 536870912:n=Hh;break;default:n=kl}n=mm(n,im.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function im(e,t){if(xl=-1,vl=0,he&6)throw Error(A(327));var n=e.callbackNode;if(So()&&e.callbackNode!==n)return null;var r=El(e,e===Qe?et:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Zl(e,r);else{t=r;var a=he;he|=2;var s=um();(Qe!==e||et!==t)&&(bn=null,Oo=Fe()+500,$r(e,t));do try{p6();break}catch(i){cm(e,i)}while(1);md(),Hl.current=s,he=a,Ue!==null?t=0:(Qe=null,et=0,t=Ze)}if(t!==0){if(t===2&&(a=Yc(e),a!==0&&(r=a,t=Su(e,a))),t===1)throw n=Xa,$r(e,0),er(e,r),wt(e,Fe()),n;if(t===6)er(e,r);else{if(a=e.current.alternate,!(r&30)&&!u6(a)&&(t=Zl(e,r),t===2&&(s=Yc(e),s!==0&&(r=s,t=Su(e,s))),t===1))throw n=Xa,$r(e,0),er(e,r),wt(e,Fe()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(A(345));case 2:Rr(e,Ct,bn);break;case 3:if(er(e,r),(r&130023424)===r&&(t=Nd+500-Fe(),10<t)){if(El(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){ft(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=ru(Rr.bind(null,e,Ct,bn),t);break}Rr(e,Ct,bn);break;case 4:if(er(e,r),(r&4194240)===r)break;for(t=e.eventTimes,a=-1;0<r;){var l=31-en(r);s=1<<l,l=t[l],l>a&&(a=l),r&=~s}if(r=a,r=Fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*c6(r/1960))-r,10<r){e.timeoutHandle=ru(Rr.bind(null,e,Ct,bn),r);break}Rr(e,Ct,bn);break;case 5:Rr(e,Ct,bn);break;default:throw Error(A(329))}}}return wt(e,Fe()),e.callbackNode===n?im.bind(null,e):null}function Su(e,t){var n=_a;return e.current.memoizedState.isDehydrated&&($r(e,t).flags|=256),e=Zl(e,t),e!==2&&(t=Ct,Ct=n,t!==null&&wu(t)),e}function wu(e){Ct===null?Ct=e:Ct.push.apply(Ct,e)}function u6(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var a=n[r],s=a.getSnapshot;a=a.value;try{if(!nn(s(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function er(e,t){for(t&=~Ld,t&=~gi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-en(t),r=1<<n;e[n]=-1,t&=~r}}function I1(e){if(he&6)throw Error(A(327));So();var t=El(e,0);if(!(t&1))return wt(e,Fe()),null;var n=Zl(e,t);if(e.tag!==0&&n===2){var r=Yc(e);r!==0&&(t=r,n=Su(e,r))}if(n===1)throw n=Xa,$r(e,0),er(e,t),wt(e,Fe()),n;if(n===6)throw Error(A(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Rr(e,Ct,bn),wt(e,Fe()),null}function Rd(e,t){var n=he;he|=1;try{return e(t)}finally{he=n,he===0&&(Oo=Fe()+500,pi&&Cr())}}function Hr(e){rr!==null&&rr.tag===0&&!(he&6)&&So();var t=he;he|=1;var n=Bt.transition,r=Ce;try{if(Bt.transition=null,Ce=1,e)return e()}finally{Ce=r,Bt.transition=n,he=t,!(he&6)&&Cr()}}function Od(){kt=mo.current,ke(mo)}function $r(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,z5(n)),Ue!==null)for(n=Ue.return;n!==null;){var r=n;switch(pd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Dl();break;case 3:No(),ke(bt),ke(lt),jd();break;case 5:Cd(r);break;case 4:No();break;case 13:ke(Oe);break;case 19:ke(Oe);break;case 10:gd(r.type._context);break;case 22:case 23:Od()}n=n.return}if(Qe=e,Ue=e=dr(e.current,null),et=kt=t,Ze=0,Xa=null,Ld=gi=Ur=0,Ct=_a=null,Mr!==null){for(t=0;t<Mr.length;t++)if(n=Mr[t],r=n.interleaved,r!==null){n.interleaved=null;var a=r.next,s=n.pending;if(s!==null){var l=s.next;s.next=a,r.next=l}n.pending=r}Mr=null}return e}function cm(e,t){do{var n=Ue;try{if(md(),hl.current=Ul,Fl){for(var r=De.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}Fl=!1}if(Fr=0,Ye=Ve=De=null,Sa=!1,Ka=0,Ed.current=null,n===null||n.return===null){Ze=1,Xa=t,Ue=null;break}e:{var s=e,l=n.return,i=n,c=t;if(t=et,i.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=i,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var g=d.alternate;g?(d.updateQueue=g.updateQueue,d.memoizedState=g.memoizedState,d.lanes=g.lanes):(d.updateQueue=null,d.memoizedState=null)}var y=_1(l);if(y!==null){y.flags&=-257,T1(y,l,i,s,t),y.mode&1&&w1(s,u,t),t=y,c=u;var b=t.updateQueue;if(b===null){var j=new Set;j.add(c),t.updateQueue=j}else b.add(c);break e}else{if(!(t&1)){w1(s,u,t),Dd();break e}c=Error(A(426))}}else if(Le&&i.mode&1){var _=_1(l);if(_!==null){!(_.flags&65536)&&(_.flags|=256),T1(_,l,i,s,t),fd(Ro(c,i));break e}}s=c=Ro(c,i),Ze!==4&&(Ze=2),_a===null?_a=[s]:_a.push(s),s=l;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var v=Z2(s,c,t);x1(s,v);break e;case 1:i=c;var p=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(cr===null||!cr.has(m)))){s.flags|=65536,t&=-t,s.lanes|=t;var h=K2(s,i,t);x1(s,h);break e}}s=s.return}while(s!==null)}pm(n)}catch(C){t=C,Ue===n&&n!==null&&(Ue=n=n.return);continue}break}while(1)}function um(){var e=Hl.current;return Hl.current=Ul,e===null?Ul:e}function Dd(){(Ze===0||Ze===3||Ze===2)&&(Ze=4),Qe===null||!(Ur&268435455)&&!(gi&268435455)||er(Qe,et)}function Zl(e,t){var n=he;he|=2;var r=um();(Qe!==e||et!==t)&&(bn=null,$r(e,t));do try{d6();break}catch(a){cm(e,a)}while(1);if(md(),he=n,Hl.current=r,Ue!==null)throw Error(A(261));return Qe=null,et=0,Ze}function d6(){for(;Ue!==null;)dm(Ue)}function p6(){for(;Ue!==null&&!$4();)dm(Ue)}function dm(e){var t=hm(e.alternate,e,kt);e.memoizedProps=e.pendingProps,t===null?pm(e):Ue=t,Ed.current=null}function pm(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=a6(n,t),n!==null){n.flags&=32767,Ue=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ze=6,Ue=null;return}}else if(n=o6(n,t,kt),n!==null){Ue=n;return}if(t=t.sibling,t!==null){Ue=t;return}Ue=t=e}while(t!==null);Ze===0&&(Ze=5)}function Rr(e,t,n){var r=Ce,a=Bt.transition;try{Bt.transition=null,Ce=1,f6(e,t,n,r)}finally{Bt.transition=a,Ce=r}return null}function f6(e,t,n,r){do So();while(rr!==null);if(he&6)throw Error(A(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(A(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(K4(e,s),e===Qe&&(Ue=Qe=null,et=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Xs||(Xs=!0,mm(kl,function(){return So(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Bt.transition,Bt.transition=null;var l=Ce;Ce=1;var i=he;he|=4,Ed.current=null,l6(e,n),sm(n,e),D5(tu),Ll=!!eu,tu=eu=null,e.current=n,i6(n),I4(),he=i,Ce=l,Bt.transition=s}else e.current=n;if(Xs&&(Xs=!1,rr=e,Wl=a),s=e.pendingLanes,s===0&&(cr=null),F4(n.stateNode),wt(e,Fe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(Vl)throw Vl=!1,e=ju,ju=null,e;return Wl&1&&e.tag!==0&&So(),s=e.pendingLanes,s&1?e===bu?Ta++:(Ta=0,bu=e):Ta=0,Cr(),null}function So(){if(rr!==null){var e=Wh(Wl),t=Bt.transition,n=Ce;try{if(Bt.transition=null,Ce=16>e?16:e,rr===null)var r=!1;else{if(e=rr,rr=null,Wl=0,he&6)throw Error(A(331));var a=he;for(he|=4,z=e.current;z!==null;){var s=z,l=s.child;if(z.flags&16){var i=s.deletions;if(i!==null){for(var c=0;c<i.length;c++){var u=i[c];for(z=u;z!==null;){var d=z;switch(d.tag){case 0:case 11:case 15:wa(8,d,s)}var f=d.child;if(f!==null)f.return=d,z=f;else for(;z!==null;){d=z;var g=d.sibling,y=d.return;if(rm(d),d===u){z=null;break}if(g!==null){g.return=y,z=g;break}z=y}}}var b=s.alternate;if(b!==null){var j=b.child;if(j!==null){b.child=null;do{var _=j.sibling;j.sibling=null,j=_}while(j!==null)}}z=s}}if(s.subtreeFlags&2064&&l!==null)l.return=s,z=l;else e:for(;z!==null;){if(s=z,s.flags&2048)switch(s.tag){case 0:case 11:case 15:wa(9,s,s.return)}var v=s.sibling;if(v!==null){v.return=s.return,z=v;break e}z=s.return}}var p=e.current;for(z=p;z!==null;){l=z;var m=l.child;if(l.subtreeFlags&2064&&m!==null)m.return=l,z=m;else e:for(l=p;z!==null;){if(i=z,i.flags&2048)try{switch(i.tag){case 0:case 11:case 15:mi(9,i)}}catch(C){Pe(i,i.return,C)}if(i===l){z=null;break e}var h=i.sibling;if(h!==null){h.return=i.return,z=h;break e}z=i.return}}if(he=a,Cr(),fn&&typeof fn.onPostCommitFiberRoot=="function")try{fn.onPostCommitFiberRoot(li,e)}catch{}r=!0}return r}finally{Ce=n,Bt.transition=t}}return!1}function B1(e,t,n){t=Ro(n,t),t=Z2(e,t,1),e=ir(e,t,1),t=ft(),e!==null&&(os(e,1,t),wt(e,t))}function Pe(e,t,n){if(e.tag===3)B1(e,e,n);else for(;t!==null;){if(t.tag===3){B1(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(cr===null||!cr.has(r))){e=Ro(n,e),e=K2(t,e,1),t=ir(t,e,1),e=ft(),t!==null&&(os(t,1,e),wt(t,e));break}}t=t.return}}function h6(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ft(),e.pingedLanes|=e.suspendedLanes&n,Qe===e&&(et&n)===n&&(Ze===4||Ze===3&&(et&130023424)===et&&500>Fe()-Nd?$r(e,0):Ld|=n),wt(e,t)}function fm(e,t){t===0&&(e.mode&1?(t=zs,zs<<=1,!(zs&130023424)&&(zs=4194304)):t=1);var n=ft();e=Nn(e,t),e!==null&&(os(e,t,n),wt(e,n))}function m6(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),fm(e,n)}function g6(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(A(314))}r!==null&&r.delete(t),fm(e,n)}var hm;hm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||bt.current)jt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return jt=!1,r6(e,t,n);jt=!!(e.flags&131072)}else jt=!1,Le&&t.flags&1048576&&x2(t,Pl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;gl(e,t),e=t.pendingProps;var a=ko(t,lt.current);bo(t,n),a=Sd(null,t,r,e,a,n);var s=wd();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,St(r)?(s=!0,Ml(t)):s=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,vd(t),a.updater=fi,t.stateNode=a,a._reactInternals=t,uu(t,r,e,n),t=fu(null,t,r,!0,s,n)):(t.tag=0,Le&&s&&dd(t),pt(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(gl(e,t),e=t.pendingProps,a=r._init,r=a(r._payload),t.type=r,a=t.tag=v6(r),e=Xt(r,e),a){case 0:t=pu(null,t,r,e,n);break e;case 1:t=L1(null,t,r,e,n);break e;case 11:t=k1(null,t,r,e,n);break e;case 14:t=E1(null,t,r,Xt(r.type,e),n);break e}throw Error(A(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Xt(r,a),pu(e,t,r,a,n);case 1:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Xt(r,a),L1(e,t,r,a,n);case 3:e:{if(Q2(t),e===null)throw Error(A(387));r=t.pendingProps,s=t.memoizedState,a=s.element,j2(e,t),Bl(t,r,null,n);var l=t.memoizedState;if(r=l.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){a=Ro(Error(A(423)),t),t=N1(e,t,r,n,a);break e}else if(r!==a){a=Ro(Error(A(424)),t),t=N1(e,t,r,n,a);break e}else for(Et=lr(t.stateNode.containerInfo.firstChild),Lt=t,Le=!0,Jt=null,n=_2(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Eo(),r===a){t=Rn(e,t,n);break e}pt(e,t,r,n)}t=t.child}return t;case 5:return T2(t),e===null&&lu(t),r=t.type,a=t.pendingProps,s=e!==null?e.memoizedProps:null,l=a.children,nu(r,a)?l=null:s!==null&&nu(r,s)&&(t.flags|=32),X2(e,t),pt(e,t,l,n),t.child;case 6:return e===null&&lu(t),null;case 13:return q2(e,t,n);case 4:return yd(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Lo(t,null,r,n):pt(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Xt(r,a),k1(e,t,r,a,n);case 7:return pt(e,t,t.pendingProps,n),t.child;case 8:return pt(e,t,t.pendingProps.children,n),t.child;case 12:return pt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,s=t.memoizedProps,l=a.value,Se($l,r._currentValue),r._currentValue=l,s!==null)if(nn(s.value,l)){if(s.children===a.children&&!bt.current){t=Rn(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var i=s.dependencies;if(i!==null){l=s.child;for(var c=i.firstContext;c!==null;){if(c.context===r){if(s.tag===1){c=Tn(-1,n&-n),c.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),iu(s.return,n,t),i.lanes|=n;break}c=c.next}}else if(s.tag===10)l=s.type===t.type?null:s.child;else if(s.tag===18){if(l=s.return,l===null)throw Error(A(341));l.lanes|=n,i=l.alternate,i!==null&&(i.lanes|=n),iu(l,n,t),l=s.sibling}else l=s.child;if(l!==null)l.return=s;else for(l=s;l!==null;){if(l===t){l=null;break}if(s=l.sibling,s!==null){s.return=l.return,l=s;break}l=l.return}s=l}pt(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,bo(t,n),a=Ft(a),r=r(a),t.flags|=1,pt(e,t,r,n),t.child;case 14:return r=t.type,a=Xt(r,t.pendingProps),a=Xt(r.type,a),E1(e,t,r,a,n);case 15:return G2(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Xt(r,a),gl(e,t),t.tag=1,St(r)?(e=!0,Ml(t)):e=!1,bo(t,n),S2(t,r,a),uu(t,r,a,n),fu(null,t,r,!0,e,n);case 19:return J2(e,t,n);case 22:return Y2(e,t,n)}throw Error(A(156,t.tag))};function mm(e,t){return Fh(e,t)}function x6(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function It(e,t,n,r){return new x6(e,t,n,r)}function Md(e){return e=e.prototype,!(!e||!e.isReactComponent)}function v6(e){if(typeof e=="function")return Md(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ju)return 11;if(e===ed)return 14}return 2}function dr(e,t){var n=e.alternate;return n===null?(n=It(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function yl(e,t,n,r,a,s){var l=2;if(r=e,typeof e=="function")Md(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case oo:return Ir(n.children,a,s,t);case qu:l=8,a|=8;break;case Mc:return e=It(12,n,t,a|2),e.elementType=Mc,e.lanes=s,e;case Ac:return e=It(13,n,t,a),e.elementType=Ac,e.lanes=s,e;case Pc:return e=It(19,n,t,a),e.elementType=Pc,e.lanes=s,e;case wh:return xi(n,a,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case bh:l=10;break e;case Sh:l=9;break e;case Ju:l=11;break e;case ed:l=14;break e;case Yn:l=16,r=null;break e}throw Error(A(130,e==null?e:typeof e,""))}return t=It(l,n,t,a),t.elementType=e,t.type=r,t.lanes=s,t}function Ir(e,t,n,r){return e=It(7,e,r,t),e.lanes=n,e}function xi(e,t,n,r){return e=It(22,e,r,t),e.elementType=wh,e.lanes=n,e.stateNode={isHidden:!1},e}function fc(e,t,n){return e=It(6,e,null,t),e.lanes=n,e}function hc(e,t,n){return t=It(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function y6(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Gi(0),this.expirationTimes=Gi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gi(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Ad(e,t,n,r,a,s,l,i,c){return e=new y6(e,t,n,i,c),t===1?(t=1,s===!0&&(t|=8)):t=0,s=It(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},vd(s),e}function C6(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ro,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function gm(e){if(!e)return fr;e=e._reactInternals;e:{if(Kr(e)!==e||e.tag!==1)throw Error(A(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(St(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(A(171))}if(e.tag===1){var n=e.type;if(St(n))return m2(e,n,t)}return t}function xm(e,t,n,r,a,s,l,i,c){return e=Ad(n,r,!0,e,a,s,l,i,c),e.context=gm(null),n=e.current,r=ft(),a=ur(n),s=Tn(r,a),s.callback=t??null,ir(n,s,a),e.current.lanes=a,os(e,a,r),wt(e,r),e}function vi(e,t,n,r){var a=t.current,s=ft(),l=ur(a);return n=gm(n),t.context===null?t.context=n:t.pendingContext=n,t=Tn(s,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ir(a,t,l),e!==null&&(tn(e,a,l,s),fl(e,a,l)),l}function Kl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function z1(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Pd(e,t){z1(e,t),(e=e.alternate)&&z1(e,t)}function j6(){return null}var vm=typeof reportError=="function"?reportError:function(e){console.error(e)};function $d(e){this._internalRoot=e}yi.prototype.render=$d.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(A(409));vi(e,t,null,null)};yi.prototype.unmount=$d.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Hr(function(){vi(null,e,null,null)}),t[Ln]=null}};function yi(e){this._internalRoot=e}yi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Gh();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Jn.length&&t!==0&&t<Jn[n].priority;n++);Jn.splice(n,0,e),n===0&&Xh(e)}};function Id(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ci(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function F1(){}function b6(e,t,n,r,a){if(a){if(typeof r=="function"){var s=r;r=function(){var u=Kl(l);s.call(u)}}var l=xm(t,r,e,0,null,!1,!1,"",F1);return e._reactRootContainer=l,e[Ln]=l.current,Ua(e.nodeType===8?e.parentNode:e),Hr(),l}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var i=r;r=function(){var u=Kl(c);i.call(u)}}var c=Ad(e,0,!1,null,null,!1,!1,"",F1);return e._reactRootContainer=c,e[Ln]=c.current,Ua(e.nodeType===8?e.parentNode:e),Hr(function(){vi(t,c,n,r)}),c}function ji(e,t,n,r,a){var s=n._reactRootContainer;if(s){var l=s;if(typeof a=="function"){var i=a;a=function(){var c=Kl(l);i.call(c)}}vi(t,l,e,a)}else l=b6(n,t,e,a,r);return Kl(l)}Zh=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ua(t.pendingLanes);n!==0&&(rd(t,n|1),wt(t,Fe()),!(he&6)&&(Oo=Fe()+500,Cr()))}break;case 13:Hr(function(){var r=Nn(e,1);if(r!==null){var a=ft();tn(r,e,1,a)}}),Pd(e,1)}};od=function(e){if(e.tag===13){var t=Nn(e,134217728);if(t!==null){var n=ft();tn(t,e,134217728,n)}Pd(e,134217728)}};Kh=function(e){if(e.tag===13){var t=ur(e),n=Nn(e,t);if(n!==null){var r=ft();tn(n,e,t,r)}Pd(e,t)}};Gh=function(){return Ce};Yh=function(e,t){var n=Ce;try{return Ce=e,t()}finally{Ce=n}};Zc=function(e,t,n){switch(t){case"input":if(Bc(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=di(r);if(!a)throw Error(A(90));Th(r),Bc(r,a)}}}break;case"textarea":Eh(e,n);break;case"select":t=n.value,t!=null&&vo(e,!!n.multiple,t,!1)}};Ah=Rd;Ph=Hr;var S6={usingClientEntryPoint:!1,Events:[ss,io,di,Dh,Mh,Rd]},na={findFiberByHostInstance:Dr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},w6={bundleType:na.bundleType,version:na.version,rendererPackageName:na.rendererPackageName,rendererConfig:na.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Mn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Bh(e),e===null?null:e.stateNode},findFiberByHostInstance:na.findFiberByHostInstance||j6,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qs.isDisabled&&Qs.supportsFiber)try{li=Qs.inject(w6),fn=Qs}catch{}}Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=S6;Rt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Id(t))throw Error(A(200));return C6(e,t,null,n)};Rt.createRoot=function(e,t){if(!Id(e))throw Error(A(299));var n=!1,r="",a=vm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=Ad(e,1,!1,null,null,n,!1,r,a),e[Ln]=t.current,Ua(e.nodeType===8?e.parentNode:e),new $d(t)};Rt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(A(188)):(e=Object.keys(e).join(","),Error(A(268,e)));return e=Bh(t),e=e===null?null:e.stateNode,e};Rt.flushSync=function(e){return Hr(e)};Rt.hydrate=function(e,t,n){if(!Ci(t))throw Error(A(200));return ji(null,e,t,!0,n)};Rt.hydrateRoot=function(e,t,n){if(!Id(e))throw Error(A(405));var r=n!=null&&n.hydratedSources||null,a=!1,s="",l=vm;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=xm(t,null,e,1,n??null,a,!1,s,l),e[Ln]=t.current,Ua(e),r)for(e=0;e<r.length;e++)n=r[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new yi(t)};Rt.render=function(e,t,n){if(!Ci(t))throw Error(A(200));return ji(null,e,t,!1,n)};Rt.unmountComponentAtNode=function(e){if(!Ci(e))throw Error(A(40));return e._reactRootContainer?(Hr(function(){ji(null,null,e,!1,function(){e._reactRootContainer=null,e[Ln]=null})}),!0):!1};Rt.unstable_batchedUpdates=Rd;Rt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ci(n))throw Error(A(200));if(e==null||e._reactInternals===void 0)throw Error(A(38));return ji(e,t,n,!1,r)};Rt.version="18.2.0-next-9e3b772b8-20220608";function ym(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ym)}catch(e){console.error(e)}}ym(),xh.exports=Rt;var Or=xh.exports,U1=Or;Oc.createRoot=U1.createRoot,Oc.hydrateRoot=U1.hydrateRoot;function _6(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,s;for(s=0;s<r.length;s++)a=r[s],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function T6(e,t){if(e==null)return{};var n=_6(e,t),r,a;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function _u(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function k6(e){if(Array.isArray(e))return _u(e)}function E6(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function L6(e,t){if(e){if(typeof e=="string")return _u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _u(e,t)}}function N6(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function R6(e){return k6(e)||E6(e)||L6(e)||N6()}function Qa(e){"@babel/helpers - typeof";return Qa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Qa(e)}function O6(e,t){if(Qa(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(Qa(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function D6(e){var t=O6(e,"string");return Qa(t)==="symbol"?t:String(t)}function Cm(e,t,n){return t=D6(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Tu(){return Tu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Tu.apply(this,arguments)}function H1(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function go(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?H1(Object(n),!0).forEach(function(r){Cm(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):H1(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function M6(e){var t=e.length;if(t===0||t===1)return e;if(t===2)return[e[0],e[1],"".concat(e[0],".").concat(e[1]),"".concat(e[1],".").concat(e[0])];if(t===3)return[e[0],e[1],e[2],"".concat(e[0],".").concat(e[1]),"".concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[0]),"".concat(e[1],".").concat(e[2]),"".concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[1],".").concat(e[0])];if(t>=4)return[e[0],e[1],e[2],e[3],"".concat(e[0],".").concat(e[1]),"".concat(e[0],".").concat(e[2]),"".concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[0]),"".concat(e[1],".").concat(e[2]),"".concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[1]),"".concat(e[2],".").concat(e[3]),"".concat(e[3],".").concat(e[0]),"".concat(e[3],".").concat(e[1]),"".concat(e[3],".").concat(e[2]),"".concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[1],".").concat(e[3]),"".concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[2],".").concat(e[3]),"".concat(e[0],".").concat(e[3],".").concat(e[1]),"".concat(e[0],".").concat(e[3],".").concat(e[2]),"".concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[1],".").concat(e[2],".").concat(e[3]),"".concat(e[1],".").concat(e[3],".").concat(e[0]),"".concat(e[1],".").concat(e[3],".").concat(e[2]),"".concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[0],".").concat(e[3]),"".concat(e[2],".").concat(e[1],".").concat(e[0]),"".concat(e[2],".").concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[3],".").concat(e[0]),"".concat(e[2],".").concat(e[3],".").concat(e[1]),"".concat(e[3],".").concat(e[0],".").concat(e[1]),"".concat(e[3],".").concat(e[0],".").concat(e[2]),"".concat(e[3],".").concat(e[1],".").concat(e[0]),"".concat(e[3],".").concat(e[1],".").concat(e[2]),"".concat(e[3],".").concat(e[2],".").concat(e[0]),"".concat(e[3],".").concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[1],".").concat(e[2],".").concat(e[3]),"".concat(e[0],".").concat(e[1],".").concat(e[3],".").concat(e[2]),"".concat(e[0],".").concat(e[2],".").concat(e[1],".").concat(e[3]),"".concat(e[0],".").concat(e[2],".").concat(e[3],".").concat(e[1]),"".concat(e[0],".").concat(e[3],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[3],".").concat(e[2],".").concat(e[1]),"".concat(e[1],".").concat(e[0],".").concat(e[2],".").concat(e[3]),"".concat(e[1],".").concat(e[0],".").concat(e[3],".").concat(e[2]),"".concat(e[1],".").concat(e[2],".").concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[2],".").concat(e[3],".").concat(e[0]),"".concat(e[1],".").concat(e[3],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[3],".").concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[0],".").concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[0],".").concat(e[3],".").concat(e[1]),"".concat(e[2],".").concat(e[1],".").concat(e[0],".").concat(e[3]),"".concat(e[2],".").concat(e[1],".").concat(e[3],".").concat(e[0]),"".concat(e[2],".").concat(e[3],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[3],".").concat(e[1],".").concat(e[0]),"".concat(e[3],".").concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[3],".").concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[3],".").concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[3],".").concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[3],".").concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[3],".").concat(e[2],".").concat(e[1],".").concat(e[0])]}var mc={};function A6(e){if(e.length===0||e.length===1)return e;var t=e.join(".");return mc[t]||(mc[t]=M6(e)),mc[t]}function P6(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,r=e.filter(function(s){return s!=="token"}),a=A6(r);return a.reduce(function(s,l){return go(go({},s),n[l])},t)}function V1(e){return e.join(" ")}function $6(e,t){var n=0;return function(r){return n+=1,r.map(function(a,s){return jm({node:a,stylesheet:e,useInlineStyles:t,key:"code-segment-".concat(n,"-").concat(s)})})}}function jm(e){var t=e.node,n=e.stylesheet,r=e.style,a=r===void 0?{}:r,s=e.useInlineStyles,l=e.key,i=t.properties,c=t.type,u=t.tagName,d=t.value;if(c==="text")return d;if(u){var f=$6(n,s),g;if(!s)g=go(go({},i),{},{className:V1(i.className)});else{var y=Object.keys(n).reduce(function(v,p){return p.split(".").forEach(function(m){v.includes(m)||v.push(m)}),v},[]),b=i.className&&i.className.includes("token")?["token"]:[],j=i.className&&b.concat(i.className.filter(function(v){return!y.includes(v)}));g=go(go({},i),{},{className:V1(j)||void 0,style:P6(i.className,Object.assign({},i.style,a),n)})}var _=f(t.children);return q.createElement(u,Tu({key:l},g),_)}}const I6=function(e,t){var n=e.listLanguages();return n.indexOf(t)!==-1};var B6=["language","children","style","customStyle","codeTagProps","useInlineStyles","showLineNumbers","showInlineLineNumbers","startingLineNumber","lineNumberContainerStyle","lineNumberStyle","wrapLines","wrapLongLines","lineProps","renderer","PreTag","CodeTag","code","astGenerator"];function W1(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function dn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?W1(Object(n),!0).forEach(function(r){Cm(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):W1(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var z6=/\n/g;function F6(e){return e.match(z6)}function U6(e){var t=e.lines,n=e.startingLineNumber,r=e.style;return t.map(function(a,s){var l=s+n;return q.createElement("span",{key:"line-".concat(s),className:"react-syntax-highlighter-line-number",style:typeof r=="function"?r(l):r},"".concat(l,`
`))})}function H6(e){var t=e.codeString,n=e.codeStyle,r=e.containerStyle,a=r===void 0?{float:"left",paddingRight:"10px"}:r,s=e.numberStyle,l=s===void 0?{}:s,i=e.startingLineNumber;return q.createElement("code",{style:Object.assign({},n,a)},U6({lines:t.replace(/\n$/,"").split(`
`),style:l,startingLineNumber:i}))}function V6(e){return"".concat(e.toString().length,".25em")}function bm(e,t){return{type:"element",tagName:"span",properties:{key:"line-number--".concat(e),className:["comment","linenumber","react-syntax-highlighter-line-number"],style:t},children:[{type:"text",value:e}]}}function Sm(e,t,n){var r={display:"inline-block",minWidth:V6(n),paddingRight:"1em",textAlign:"right",userSelect:"none"},a=typeof e=="function"?e(t):e,s=dn(dn({},r),a);return s}function Cl(e){var t=e.children,n=e.lineNumber,r=e.lineNumberStyle,a=e.largestLineNumber,s=e.showInlineLineNumbers,l=e.lineProps,i=l===void 0?{}:l,c=e.className,u=c===void 0?[]:c,d=e.showLineNumbers,f=e.wrapLongLines,g=typeof i=="function"?i(n):i;if(g.className=u,n&&s){var y=Sm(r,n,a);t.unshift(bm(n,y))}return f&d&&(g.style=dn(dn({},g.style),{},{display:"flex"})),{type:"element",tagName:"span",properties:g,children:t}}function wm(e){for(var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],r=0;r<e.length;r++){var a=e[r];if(a.type==="text")n.push(Cl({children:[a],className:R6(new Set(t))}));else if(a.children){var s=t.concat(a.properties.className);wm(a.children,s).forEach(function(l){return n.push(l)})}}return n}function W6(e,t,n,r,a,s,l,i,c){var u,d=wm(e.value),f=[],g=-1,y=0;function b(C,S){var w=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return Cl({children:C,lineNumber:S,lineNumberStyle:i,largestLineNumber:l,showInlineLineNumbers:a,lineProps:n,className:w,showLineNumbers:r,wrapLongLines:c})}function j(C,S){if(r&&S&&a){var w=Sm(i,S,l);C.unshift(bm(S,w))}return C}function _(C,S){var w=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return t||w.length>0?b(C,S,w):j(C,S)}for(var v=function(){var S=d[y],w=S.children[0].value,T=F6(w);if(T){var L=w.split(`
`);L.forEach(function(N,P){var Y=r&&f.length+s,J={type:"text",value:"".concat(N,`
`)};if(P===0){var de=d.slice(g+1,y).concat(Cl({children:[J],className:S.properties.className})),ee=_(de,Y);f.push(ee)}else if(P===L.length-1){var me=d[y+1]&&d[y+1].children&&d[y+1].children[0],oe={type:"text",value:"".concat(N)};if(me){var D=Cl({children:[oe],className:S.properties.className});d.splice(y+1,0,D)}else{var $=[oe],B=_($,Y,S.properties.className);f.push(B)}}else{var H=[J],F=_(H,Y,S.properties.className);f.push(F)}}),g=y}y++};y<d.length;)v();if(g!==d.length-1){var p=d.slice(g+1,d.length);if(p&&p.length){var m=r&&f.length+s,h=_(p,m);f.push(h)}}return t?f:(u=[]).concat.apply(u,f)}function Z6(e){var t=e.rows,n=e.stylesheet,r=e.useInlineStyles;return t.map(function(a,s){return jm({node:a,stylesheet:n,useInlineStyles:r,key:"code-segement".concat(s)})})}function _m(e){return e&&typeof e.highlightAuto<"u"}function K6(e){var t=e.astGenerator,n=e.language,r=e.code,a=e.defaultCodeValue;if(_m(t)){var s=I6(t,n);return n==="text"?{value:a,language:"text"}:s?t.highlight(n,r):t.highlightAuto(r)}try{return n&&n!=="text"?{value:t.highlight(r,n)}:{value:a}}catch{return{value:a}}}function G6(e,t){return function(r){var a=r.language,s=r.children,l=r.style,i=l===void 0?t:l,c=r.customStyle,u=c===void 0?{}:c,d=r.codeTagProps,f=d===void 0?{className:a?"language-".concat(a):void 0,style:dn(dn({},i['code[class*="language-"]']),i['code[class*="language-'.concat(a,'"]')])}:d,g=r.useInlineStyles,y=g===void 0?!0:g,b=r.showLineNumbers,j=b===void 0?!1:b,_=r.showInlineLineNumbers,v=_===void 0?!0:_,p=r.startingLineNumber,m=p===void 0?1:p,h=r.lineNumberContainerStyle,C=r.lineNumberStyle,S=C===void 0?{}:C,w=r.wrapLines,T=r.wrapLongLines,L=T===void 0?!1:T,N=r.lineProps,P=N===void 0?{}:N,Y=r.renderer,J=r.PreTag,de=J===void 0?"pre":J,ee=r.CodeTag,me=ee===void 0?"code":ee,oe=r.code,D=oe===void 0?(Array.isArray(s)?s[0]:s)||"":oe,$=r.astGenerator,B=T6(r,B6);$=$||e;var H=j?q.createElement(H6,{containerStyle:h,codeStyle:f.style||{},numberStyle:S,startingLineNumber:m,codeString:D}):null,F=i.hljs||i['pre[class*="language-"]']||{backgroundColor:"#fff"},ve=_m($)?"hljs":"prismjs",ae=y?Object.assign({},B,{style:Object.assign({},F,u)}):Object.assign({},B,{className:B.className?"".concat(ve," ").concat(B.className):ve,style:Object.assign({},u)});if(L?f.style=dn(dn({},f.style),{},{whiteSpace:"pre-wrap"}):f.style=dn(dn({},f.style),{},{whiteSpace:"pre"}),!$)return q.createElement(de,ae,H,q.createElement(me,f,D));(w===void 0&&Y||L)&&(w=!0),Y=Y||Z6;var we=[{type:"text",value:D}],ce=K6({astGenerator:$,language:a,code:D,defaultCodeValue:we});ce.language===null&&(ce.value=we);var Ae=ce.value.length+m,nt=W6(ce,w,P,j,v,m,Ae,S,L);return q.createElement(de,ae,q.createElement(me,f,!v&&H,Y({rows:nt,stylesheet:i,useInlineStyles:y})))}}var Y6=Q6,X6=Object.prototype.hasOwnProperty;function Q6(){for(var e={},t=0;t<arguments.length;t++){var n=arguments[t];for(var r in n)X6.call(n,r)&&(e[r]=n[r])}return e}var Tm=km,Bd=km.prototype;Bd.space=null;Bd.normal={};Bd.property={};function km(e,t,n){this.property=e,this.normal=t,n&&(this.space=n)}var Z1=Y6,q6=Tm,J6=e8;function e8(e){for(var t=e.length,n=[],r=[],a=-1,s,l;++a<t;)s=e[a],n.push(s.property),r.push(s.normal),l=s.space;return new q6(Z1.apply(null,n),Z1.apply(null,r),l)}var zd=t8;function t8(e){return e.toLowerCase()}var Em=Lm,Vt=Lm.prototype;Vt.space=null;Vt.attribute=null;Vt.property=null;Vt.boolean=!1;Vt.booleanish=!1;Vt.overloadedBoolean=!1;Vt.number=!1;Vt.commaSeparated=!1;Vt.spaceSeparated=!1;Vt.commaOrSpaceSeparated=!1;Vt.mustUseProperty=!1;Vt.defined=!1;function Lm(e,t){this.property=e,this.attribute=t}var mn={},n8=0;mn.boolean=Gr();mn.booleanish=Gr();mn.overloadedBoolean=Gr();mn.number=Gr();mn.spaceSeparated=Gr();mn.commaSeparated=Gr();mn.commaOrSpaceSeparated=Gr();function Gr(){return Math.pow(2,++n8)}var Nm=Em,K1=mn,Rm=Fd;Fd.prototype=new Nm;Fd.prototype.defined=!0;var Om=["boolean","booleanish","overloadedBoolean","number","commaSeparated","spaceSeparated","commaOrSpaceSeparated"],r8=Om.length;function Fd(e,t,n,r){var a=-1,s;for(G1(this,"space",r),Nm.call(this,e,t);++a<r8;)s=Om[a],G1(this,s,(n&K1[s])===K1[s])}function G1(e,t,n){n&&(e[t]=n)}var Y1=zd,o8=Tm,a8=Rm,is=s8;function s8(e){var t=e.space,n=e.mustUseProperty||[],r=e.attributes||{},a=e.properties,s=e.transform,l={},i={},c,u;for(c in a)u=new a8(c,s(r,c),a[c],t),n.indexOf(c)!==-1&&(u.mustUseProperty=!0),l[c]=u,i[Y1(c)]=c,i[Y1(u.attribute)]=c;return new o8(l,i,t)}var l8=is,i8=l8({space:"xlink",transform:c8,properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}});function c8(e,t){return"xlink:"+t.slice(5).toLowerCase()}var u8=is,d8=u8({space:"xml",transform:p8,properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function p8(e,t){return"xml:"+t.slice(3).toLowerCase()}var f8=h8;function h8(e,t){return t in e?e[t]:t}var m8=f8,Dm=g8;function g8(e,t){return m8(e,t.toLowerCase())}var x8=is,v8=Dm,y8=x8({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:v8,properties:{xmlns:null,xmlnsXLink:null}}),Ud=mn,C8=is,yt=Ud.booleanish,Dt=Ud.number,Lr=Ud.spaceSeparated,j8=C8({transform:b8,properties:{ariaActiveDescendant:null,ariaAtomic:yt,ariaAutoComplete:null,ariaBusy:yt,ariaChecked:yt,ariaColCount:Dt,ariaColIndex:Dt,ariaColSpan:Dt,ariaControls:Lr,ariaCurrent:null,ariaDescribedBy:Lr,ariaDetails:null,ariaDisabled:yt,ariaDropEffect:Lr,ariaErrorMessage:null,ariaExpanded:yt,ariaFlowTo:Lr,ariaGrabbed:yt,ariaHasPopup:null,ariaHidden:yt,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Lr,ariaLevel:Dt,ariaLive:null,ariaModal:yt,ariaMultiLine:yt,ariaMultiSelectable:yt,ariaOrientation:null,ariaOwns:Lr,ariaPlaceholder:null,ariaPosInSet:Dt,ariaPressed:yt,ariaReadOnly:yt,ariaRelevant:null,ariaRequired:yt,ariaRoleDescription:Lr,ariaRowCount:Dt,ariaRowIndex:Dt,ariaRowSpan:Dt,ariaSelected:yt,ariaSetSize:Dt,ariaSort:null,ariaValueMax:Dt,ariaValueMin:Dt,ariaValueNow:Dt,ariaValueText:null,role:null}});function b8(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}var $o=mn,S8=is,w8=Dm,le=$o.boolean,_8=$o.overloadedBoolean,ra=$o.booleanish,_e=$o.number,dt=$o.spaceSeparated,qs=$o.commaSeparated,T8=S8({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:w8,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:qs,acceptCharset:dt,accessKey:dt,action:null,allow:null,allowFullScreen:le,allowPaymentRequest:le,allowUserMedia:le,alt:null,as:null,async:le,autoCapitalize:null,autoComplete:dt,autoFocus:le,autoPlay:le,capture:le,charSet:null,checked:le,cite:null,className:dt,cols:_e,colSpan:null,content:null,contentEditable:ra,controls:le,controlsList:dt,coords:_e|qs,crossOrigin:null,data:null,dateTime:null,decoding:null,default:le,defer:le,dir:null,dirName:null,disabled:le,download:_8,draggable:ra,encType:null,enterKeyHint:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:le,formTarget:null,headers:dt,height:_e,hidden:le,high:_e,href:null,hrefLang:null,htmlFor:dt,httpEquiv:dt,id:null,imageSizes:null,imageSrcSet:qs,inputMode:null,integrity:null,is:null,isMap:le,itemId:null,itemProp:dt,itemRef:dt,itemScope:le,itemType:dt,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:le,low:_e,manifest:null,max:null,maxLength:_e,media:null,method:null,min:null,minLength:_e,multiple:le,muted:le,name:null,nonce:null,noModule:le,noValidate:le,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforePrint:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextMenu:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:le,optimum:_e,pattern:null,ping:dt,placeholder:null,playsInline:le,poster:null,preload:null,readOnly:le,referrerPolicy:null,rel:dt,required:le,reversed:le,rows:_e,rowSpan:_e,sandbox:dt,scope:null,scoped:le,seamless:le,selected:le,shape:null,size:_e,sizes:null,slot:null,span:_e,spellCheck:ra,src:null,srcDoc:null,srcLang:null,srcSet:qs,start:_e,step:null,style:null,tabIndex:_e,target:null,title:null,translate:null,type:null,typeMustMatch:le,useMap:null,value:ra,width:_e,wrap:null,align:null,aLink:null,archive:dt,axis:null,background:null,bgColor:null,border:_e,borderColor:null,bottomMargin:_e,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:le,declare:le,event:null,face:null,frame:null,frameBorder:null,hSpace:_e,leftMargin:_e,link:null,longDesc:null,lowSrc:null,marginHeight:_e,marginWidth:_e,noResize:le,noHref:le,noShade:le,noWrap:le,object:null,profile:null,prompt:null,rev:null,rightMargin:_e,rules:null,scheme:null,scrolling:ra,standby:null,summary:null,text:null,topMargin:_e,valueType:null,version:null,vAlign:null,vLink:null,vSpace:_e,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:le,disableRemotePlayback:le,prefix:null,property:null,results:_e,security:null,unselectable:null}}),k8=J6,E8=i8,L8=d8,N8=y8,R8=j8,O8=T8,D8=k8([L8,E8,N8,R8,O8]),M8=zd,A8=Rm,P8=Em,Hd="data",$8=z8,I8=/^data[-\w.:]+$/i,Mm=/-[a-z]/g,B8=/[A-Z]/g;function z8(e,t){var n=M8(t),r=t,a=P8;return n in e.normal?e.property[e.normal[n]]:(n.length>4&&n.slice(0,4)===Hd&&I8.test(t)&&(t.charAt(4)==="-"?r=F8(t):t=U8(t),a=A8),new a(r,t))}function F8(e){var t=e.slice(5).replace(Mm,V8);return Hd+t.charAt(0).toUpperCase()+t.slice(1)}function U8(e){var t=e.slice(4);return Mm.test(t)?e:(t=t.replace(B8,H8),t.charAt(0)!=="-"&&(t="-"+t),Hd+t)}function H8(e){return"-"+e.toLowerCase()}function V8(e){return e.charAt(1).toUpperCase()}var W8=Z8,X1=/[#.]/g;function Z8(e,t){for(var n=e||"",r=t||"div",a={},s=0,l,i,c;s<n.length;)X1.lastIndex=s,c=X1.exec(n),l=n.slice(s,c?c.index:n.length),l&&(i?i==="#"?a.id=l:a.className?a.className.push(l):a.className=[l]:r=l,s+=l.length),c&&(i=c[0],s++);return{type:"element",tagName:r,properties:a,children:[]}}var Vd={};Vd.parse=Y8;Vd.stringify=X8;var Q1="",K8=" ",G8=/[ \t\n\r\f]+/g;function Y8(e){var t=String(e||Q1).trim();return t===Q1?[]:t.split(G8)}function X8(e){return e.join(K8).trim()}var Wd={};Wd.parse=Q8;Wd.stringify=q8;var ku=",",q1=" ",pa="";function Q8(e){for(var t=[],n=String(e||pa),r=n.indexOf(ku),a=0,s=!1,l;!s;)r===-1&&(r=n.length,s=!0),l=n.slice(a,r).trim(),(l||!s)&&t.push(l),a=r+1,r=n.indexOf(ku,a);return t}function q8(e,t){var n=t||{},r=n.padLeft===!1?pa:q1,a=n.padRight?q1:pa;return e[e.length-1]===pa&&(e=e.concat(pa)),e.join(a+ku+r).trim()}var J8=$8,J1=zd,e7=W8,ef=Vd.parse,tf=Wd.parse,t7=r7,n7={}.hasOwnProperty;function r7(e,t,n){var r=n?i7(n):null;return a;function a(l,i){var c=e7(l,t),u=Array.prototype.slice.call(arguments,2),d=c.tagName.toLowerCase(),f;if(c.tagName=r&&n7.call(r,d)?r[d]:d,i&&o7(i,c)&&(u.unshift(i),i=null),i)for(f in i)s(c.properties,f,i[f]);return Am(c.children,u),c.tagName==="template"&&(c.content={type:"root",children:c.children},c.children=[]),c}function s(l,i,c){var u,d,f;c==null||c!==c||(u=J8(e,i),d=u.property,f=c,typeof f=="string"&&(u.spaceSeparated?f=ef(f):u.commaSeparated?f=tf(f):u.commaOrSpaceSeparated&&(f=ef(tf(f).join(" ")))),d==="style"&&typeof c!="string"&&(f=l7(f)),d==="className"&&l.className&&(f=l.className.concat(f)),l[d]=s7(u,d,f))}}function o7(e,t){return typeof e=="string"||"length"in e||a7(t.tagName,e)}function a7(e,t){var n=t.type;return e==="input"||!n||typeof n!="string"?!1:typeof t.children=="object"&&"length"in t.children?!0:(n=n.toLowerCase(),e==="button"?n!=="menu"&&n!=="submit"&&n!=="reset"&&n!=="button":"value"in t)}function Am(e,t){var n,r;if(typeof t=="string"||typeof t=="number"){e.push({type:"text",value:String(t)});return}if(typeof t=="object"&&"length"in t){for(n=-1,r=t.length;++n<r;)Am(e,t[n]);return}if(typeof t!="object"||!("type"in t))throw new Error("Expected node, nodes, or string, got `"+t+"`");e.push(t)}function s7(e,t,n){var r,a,s;if(typeof n!="object"||!("length"in n))return nf(e,t,n);for(a=n.length,r=-1,s=[];++r<a;)s[r]=nf(e,t,n[r]);return s}function nf(e,t,n){var r=n;return e.number||e.positiveNumber?!isNaN(r)&&r!==""&&(r=Number(r)):(e.boolean||e.overloadedBoolean)&&typeof r=="string"&&(r===""||J1(n)===J1(t))&&(r=!0),r}function l7(e){var t=[],n;for(n in e)t.push([n,e[n]].join(": "));return t.join("; ")}function i7(e){for(var t=e.length,n=-1,r={},a;++n<t;)a=e[n],r[a.toLowerCase()]=a;return r}var c7=D8,u7=t7,Pm=u7(c7,"div");Pm.displayName="html";var d7=Pm,p7=d7;const f7="Æ",h7="&",m7="Á",g7="Â",x7="À",v7="Å",y7="Ã",C7="Ä",j7="©",b7="Ç",S7="Ð",w7="É",_7="Ê",T7="È",k7="Ë",E7=">",L7="Í",N7="Î",R7="Ì",O7="Ï",D7="<",M7="Ñ",A7="Ó",P7="Ô",$7="Ò",I7="Ø",B7="Õ",z7="Ö",F7='"',U7="®",H7="Þ",V7="Ú",W7="Û",Z7="Ù",K7="Ü",G7="Ý",Y7="á",X7="â",Q7="´",q7="æ",J7="à",ev="&",tv="å",nv="ã",rv="ä",ov="¦",av="ç",sv="¸",lv="¢",iv="©",cv="¤",uv="°",dv="÷",pv="é",fv="ê",hv="è",mv="ð",gv="ë",xv="½",vv="¼",yv="¾",Cv=">",jv="í",bv="î",Sv="¡",wv="ì",_v="¿",Tv="ï",kv="«",Ev="<",Lv="¯",Nv="µ",Rv="·",Ov=" ",Dv="¬",Mv="ñ",Av="ó",Pv="ô",$v="ò",Iv="ª",Bv="º",zv="ø",Fv="õ",Uv="ö",Hv="¶",Vv="±",Wv="£",Zv='"',Kv="»",Gv="®",Yv="§",Xv="­",Qv="¹",qv="²",Jv="³",e9="ß",t9="þ",n9="×",r9="ú",o9="û",a9="ù",s9="¨",l9="ü",i9="ý",c9="¥",u9="ÿ",d9={AElig:f7,AMP:h7,Aacute:m7,Acirc:g7,Agrave:x7,Aring:v7,Atilde:y7,Auml:C7,COPY:j7,Ccedil:b7,ETH:S7,Eacute:w7,Ecirc:_7,Egrave:T7,Euml:k7,GT:E7,Iacute:L7,Icirc:N7,Igrave:R7,Iuml:O7,LT:D7,Ntilde:M7,Oacute:A7,Ocirc:P7,Ograve:$7,Oslash:I7,Otilde:B7,Ouml:z7,QUOT:F7,REG:U7,THORN:H7,Uacute:V7,Ucirc:W7,Ugrave:Z7,Uuml:K7,Yacute:G7,aacute:Y7,acirc:X7,acute:Q7,aelig:q7,agrave:J7,amp:ev,aring:tv,atilde:nv,auml:rv,brvbar:ov,ccedil:av,cedil:sv,cent:lv,copy:iv,curren:cv,deg:uv,divide:dv,eacute:pv,ecirc:fv,egrave:hv,eth:mv,euml:gv,frac12:xv,frac14:vv,frac34:yv,gt:Cv,iacute:jv,icirc:bv,iexcl:Sv,igrave:wv,iquest:_v,iuml:Tv,laquo:kv,lt:Ev,macr:Lv,micro:Nv,middot:Rv,nbsp:Ov,not:Dv,ntilde:Mv,oacute:Av,ocirc:Pv,ograve:$v,ordf:Iv,ordm:Bv,oslash:zv,otilde:Fv,ouml:Uv,para:Hv,plusmn:Vv,pound:Wv,quot:Zv,raquo:Kv,reg:Gv,sect:Yv,shy:Xv,sup1:Qv,sup2:qv,sup3:Jv,szlig:e9,thorn:t9,times:n9,uacute:r9,ucirc:o9,ugrave:a9,uml:s9,uuml:l9,yacute:i9,yen:c9,yuml:u9},p9={0:"�",128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"};var $m=f9;function f9(e){var t=typeof e=="string"?e.charCodeAt(0):e;return t>=48&&t<=57}var h9=m9;function m9(e){var t=typeof e=="string"?e.charCodeAt(0):e;return t>=97&&t<=102||t>=65&&t<=70||t>=48&&t<=57}var g9=x9;function x9(e){var t=typeof e=="string"?e.charCodeAt(0):e;return t>=97&&t<=122||t>=65&&t<=90}var v9=g9,y9=$m,C9=j9;function j9(e){return v9(e)||y9(e)}var Js,b9=59,S9=w9;function w9(e){var t="&"+e+";",n;return Js=Js||document.createElement("i"),Js.innerHTML=t,n=Js.textContent,n.charCodeAt(n.length-1)===b9&&e!=="semi"||n===t?!1:n}var rf=d9,of=p9,_9=$m,T9=h9,Im=C9,k9=S9,E9=F9,L9={}.hasOwnProperty,to=String.fromCharCode,N9=Function.prototype,af={warning:null,reference:null,text:null,warningContext:null,referenceContext:null,textContext:null,position:{},additional:null,attribute:!1,nonTerminated:!0},R9=9,sf=10,O9=12,D9=32,lf=38,M9=59,A9=60,P9=61,$9=35,I9=88,B9=120,z9=65533,no="named",Zd="hexadecimal",Kd="decimal",Gd={};Gd[Zd]=16;Gd[Kd]=10;var bi={};bi[no]=Im;bi[Kd]=_9;bi[Zd]=T9;var Bm=1,zm=2,Fm=3,Um=4,Hm=5,Eu=6,Vm=7,jr={};jr[Bm]="Named character references must be terminated by a semicolon";jr[zm]="Numeric character references must be terminated by a semicolon";jr[Fm]="Named character references cannot be empty";jr[Um]="Numeric character references cannot be empty";jr[Hm]="Named character references must be known";jr[Eu]="Numeric character references cannot be disallowed";jr[Vm]="Numeric character references cannot be outside the permissible Unicode range";function F9(e,t){var n={},r,a;t||(t={});for(a in af)r=t[a],n[a]=r??af[a];return(n.position.indent||n.position.start)&&(n.indent=n.position.indent||[],n.position=n.position.start),U9(e,n)}function U9(e,t){var n=t.additional,r=t.nonTerminated,a=t.text,s=t.reference,l=t.warning,i=t.textContext,c=t.referenceContext,u=t.warningContext,d=t.position,f=t.indent||[],g=e.length,y=0,b=-1,j=d.column||1,_=d.line||1,v="",p=[],m,h,C,S,w,T,L,N,P,Y,J,de,ee,me,oe,D,$,B,H;for(typeof n=="string"&&(n=n.charCodeAt(0)),D=F(),N=l?ve:N9,y--,g++;++y<g;)if(w===sf&&(j=f[b]||1),w=e.charCodeAt(y),w===lf){if(L=e.charCodeAt(y+1),L===R9||L===sf||L===O9||L===D9||L===lf||L===A9||L!==L||n&&L===n){v+=to(w),j++;continue}for(ee=y+1,de=ee,H=ee,L===$9?(H=++de,L=e.charCodeAt(H),L===I9||L===B9?(me=Zd,H=++de):me=Kd):me=no,m="",J="",S="",oe=bi[me],H--;++H<g&&(L=e.charCodeAt(H),!!oe(L));)S+=to(L),me===no&&L9.call(rf,S)&&(m=S,J=rf[S]);C=e.charCodeAt(H)===M9,C&&(H++,h=me===no?k9(S):!1,h&&(m=S,J=h)),B=1+H-ee,!C&&!r||(S?me===no?(C&&!J?N(Hm,1):(m!==S&&(H=de+m.length,B=1+H-de,C=!1),C||(P=m?Bm:Fm,t.attribute?(L=e.charCodeAt(H),L===P9?(N(P,B),J=null):Im(L)?J=null:N(P,B)):N(P,B))),T=J):(C||N(zm,B),T=parseInt(S,Gd[me]),H9(T)?(N(Vm,B),T=to(z9)):T in of?(N(Eu,B),T=of[T]):(Y="",V9(T)&&N(Eu,B),T>65535&&(T-=65536,Y+=to(T>>>10|55296),T=56320|T&1023),T=Y+to(T))):me!==no&&N(Um,B)),T?(ae(),D=F(),y=H-1,j+=H-ee+1,p.push(T),$=F(),$.offset++,s&&s.call(c,T,{start:D,end:$},e.slice(ee-1,H)),D=$):(S=e.slice(ee-1,H),v+=S,j+=S.length,y=H-1)}else w===10&&(_++,b++,j=0),w===w?(v+=to(w),j++):ae();return p.join("");function F(){return{line:_,column:j,offset:y+(d.offset||0)}}function ve(we,ce){var Ae=F();Ae.column+=ce,Ae.offset+=ce,l.call(u,jr[we],Ae,we)}function ae(){v&&(p.push(v),a&&a.call(i,v,{start:D,end:F()}),v="")}}function H9(e){return e>=55296&&e<=57343||e>1114111}function V9(e){return e>=1&&e<=8||e===11||e>=13&&e<=31||e>=127&&e<=159||e>=64976&&e<=65007||(e&65535)===65535||(e&65535)===65534}var Wm={exports:{}};(function(e){var t=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=function(r){var a=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,s=0,l={},i={manual:r.Prism&&r.Prism.manual,disableWorkerMessageHandler:r.Prism&&r.Prism.disableWorkerMessageHandler,util:{encode:function p(m){return m instanceof c?new c(m.type,p(m.content),m.alias):Array.isArray(m)?m.map(p):m.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(p){return Object.prototype.toString.call(p).slice(8,-1)},objId:function(p){return p.__id||Object.defineProperty(p,"__id",{value:++s}),p.__id},clone:function p(m,h){h=h||{};var C,S;switch(i.util.type(m)){case"Object":if(S=i.util.objId(m),h[S])return h[S];C={},h[S]=C;for(var w in m)m.hasOwnProperty(w)&&(C[w]=p(m[w],h));return C;case"Array":return S=i.util.objId(m),h[S]?h[S]:(C=[],h[S]=C,m.forEach(function(T,L){C[L]=p(T,h)}),C);default:return m}},getLanguage:function(p){for(;p;){var m=a.exec(p.className);if(m)return m[1].toLowerCase();p=p.parentElement}return"none"},setLanguage:function(p,m){p.className=p.className.replace(RegExp(a,"gi"),""),p.classList.add("language-"+m)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(C){var p=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(C.stack)||[])[1];if(p){var m=document.getElementsByTagName("script");for(var h in m)if(m[h].src==p)return m[h]}return null}},isActive:function(p,m,h){for(var C="no-"+m;p;){var S=p.classList;if(S.contains(m))return!0;if(S.contains(C))return!1;p=p.parentElement}return!!h}},languages:{plain:l,plaintext:l,text:l,txt:l,extend:function(p,m){var h=i.util.clone(i.languages[p]);for(var C in m)h[C]=m[C];return h},insertBefore:function(p,m,h,C){C=C||i.languages;var S=C[p],w={};for(var T in S)if(S.hasOwnProperty(T)){if(T==m)for(var L in h)h.hasOwnProperty(L)&&(w[L]=h[L]);h.hasOwnProperty(T)||(w[T]=S[T])}var N=C[p];return C[p]=w,i.languages.DFS(i.languages,function(P,Y){Y===N&&P!=p&&(this[P]=w)}),w},DFS:function p(m,h,C,S){S=S||{};var w=i.util.objId;for(var T in m)if(m.hasOwnProperty(T)){h.call(m,T,m[T],C||T);var L=m[T],N=i.util.type(L);N==="Object"&&!S[w(L)]?(S[w(L)]=!0,p(L,h,null,S)):N==="Array"&&!S[w(L)]&&(S[w(L)]=!0,p(L,h,T,S))}}},plugins:{},highlightAll:function(p,m){i.highlightAllUnder(document,p,m)},highlightAllUnder:function(p,m,h){var C={callback:h,container:p,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};i.hooks.run("before-highlightall",C),C.elements=Array.prototype.slice.apply(C.container.querySelectorAll(C.selector)),i.hooks.run("before-all-elements-highlight",C);for(var S=0,w;w=C.elements[S++];)i.highlightElement(w,m===!0,C.callback)},highlightElement:function(p,m,h){var C=i.util.getLanguage(p),S=i.languages[C];i.util.setLanguage(p,C);var w=p.parentElement;w&&w.nodeName.toLowerCase()==="pre"&&i.util.setLanguage(w,C);var T=p.textContent,L={element:p,language:C,grammar:S,code:T};function N(Y){L.highlightedCode=Y,i.hooks.run("before-insert",L),L.element.innerHTML=L.highlightedCode,i.hooks.run("after-highlight",L),i.hooks.run("complete",L),h&&h.call(L.element)}if(i.hooks.run("before-sanity-check",L),w=L.element.parentElement,w&&w.nodeName.toLowerCase()==="pre"&&!w.hasAttribute("tabindex")&&w.setAttribute("tabindex","0"),!L.code){i.hooks.run("complete",L),h&&h.call(L.element);return}if(i.hooks.run("before-highlight",L),!L.grammar){N(i.util.encode(L.code));return}if(m&&r.Worker){var P=new Worker(i.filename);P.onmessage=function(Y){N(Y.data)},P.postMessage(JSON.stringify({language:L.language,code:L.code,immediateClose:!0}))}else N(i.highlight(L.code,L.grammar,L.language))},highlight:function(p,m,h){var C={code:p,grammar:m,language:h};if(i.hooks.run("before-tokenize",C),!C.grammar)throw new Error('The language "'+C.language+'" has no grammar.');return C.tokens=i.tokenize(C.code,C.grammar),i.hooks.run("after-tokenize",C),c.stringify(i.util.encode(C.tokens),C.language)},tokenize:function(p,m){var h=m.rest;if(h){for(var C in h)m[C]=h[C];delete m.rest}var S=new f;return g(S,S.head,p),d(p,S,m,S.head,0),b(S)},hooks:{all:{},add:function(p,m){var h=i.hooks.all;h[p]=h[p]||[],h[p].push(m)},run:function(p,m){var h=i.hooks.all[p];if(!(!h||!h.length))for(var C=0,S;S=h[C++];)S(m)}},Token:c};r.Prism=i;function c(p,m,h,C){this.type=p,this.content=m,this.alias=h,this.length=(C||"").length|0}c.stringify=function p(m,h){if(typeof m=="string")return m;if(Array.isArray(m)){var C="";return m.forEach(function(N){C+=p(N,h)}),C}var S={type:m.type,content:p(m.content,h),tag:"span",classes:["token",m.type],attributes:{},language:h},w=m.alias;w&&(Array.isArray(w)?Array.prototype.push.apply(S.classes,w):S.classes.push(w)),i.hooks.run("wrap",S);var T="";for(var L in S.attributes)T+=" "+L+'="'+(S.attributes[L]||"").replace(/"/g,"&quot;")+'"';return"<"+S.tag+' class="'+S.classes.join(" ")+'"'+T+">"+S.content+"</"+S.tag+">"};function u(p,m,h,C){p.lastIndex=m;var S=p.exec(h);if(S&&C&&S[1]){var w=S[1].length;S.index+=w,S[0]=S[0].slice(w)}return S}function d(p,m,h,C,S,w){for(var T in h)if(!(!h.hasOwnProperty(T)||!h[T])){var L=h[T];L=Array.isArray(L)?L:[L];for(var N=0;N<L.length;++N){if(w&&w.cause==T+","+N)return;var P=L[N],Y=P.inside,J=!!P.lookbehind,de=!!P.greedy,ee=P.alias;if(de&&!P.pattern.global){var me=P.pattern.toString().match(/[imsuy]*$/)[0];P.pattern=RegExp(P.pattern.source,me+"g")}for(var oe=P.pattern||P,D=C.next,$=S;D!==m.tail&&!(w&&$>=w.reach);$+=D.value.length,D=D.next){var B=D.value;if(m.length>p.length)return;if(!(B instanceof c)){var H=1,F;if(de){if(F=u(oe,$,p,J),!F||F.index>=p.length)break;var ce=F.index,ve=F.index+F[0].length,ae=$;for(ae+=D.value.length;ce>=ae;)D=D.next,ae+=D.value.length;if(ae-=D.value.length,$=ae,D.value instanceof c)continue;for(var we=D;we!==m.tail&&(ae<ve||typeof we.value=="string");we=we.next)H++,ae+=we.value.length;H--,B=p.slice($,ae),F.index-=$}else if(F=u(oe,0,B,J),!F)continue;var ce=F.index,Ae=F[0],nt=B.slice(0,ce),fe=B.slice(ce+Ae.length),se=$+B.length;w&&se>w.reach&&(w.reach=se);var _t=D.prev;nt&&(_t=g(m,_t,nt),$+=nt.length),y(m,_t,H);var xt=new c(T,Y?i.tokenize(Ae,Y):Ae,ee,Ae);if(D=g(m,_t,xt),fe&&g(m,D,fe),H>1){var Ge={cause:T+","+N,reach:se};d(p,m,h,D.prev,$,Ge),w&&Ge.reach>w.reach&&(w.reach=Ge.reach)}}}}}}function f(){var p={value:null,prev:null,next:null},m={value:null,prev:p,next:null};p.next=m,this.head=p,this.tail=m,this.length=0}function g(p,m,h){var C=m.next,S={value:h,prev:m,next:C};return m.next=S,C.prev=S,p.length++,S}function y(p,m,h){for(var C=m.next,S=0;S<h&&C!==p.tail;S++)C=C.next;m.next=C,C.prev=m,p.length-=S}function b(p){for(var m=[],h=p.head.next;h!==p.tail;)m.push(h.value),h=h.next;return m}if(!r.document)return r.addEventListener&&(i.disableWorkerMessageHandler||r.addEventListener("message",function(p){var m=JSON.parse(p.data),h=m.language,C=m.code,S=m.immediateClose;r.postMessage(i.highlight(C,i.languages[h],h)),S&&r.close()},!1)),i;var j=i.util.currentScript();j&&(i.filename=j.src,j.hasAttribute("data-manual")&&(i.manual=!0));function _(){i.manual||i.highlightAll()}if(!i.manual){var v=document.readyState;v==="loading"||v==="interactive"&&j&&j.defer?document.addEventListener("DOMContentLoaded",_):window.requestAnimationFrame?window.requestAnimationFrame(_):window.setTimeout(_,16)}return i}(t);e.exports&&(e.exports=n),typeof Sl<"u"&&(Sl.Prism=n)})(Wm);var W9=Wm.exports,Z9=Yd;Yd.displayName="markup";Yd.aliases=["html","mathml","svg","xml","ssml","atom","rss"];function Yd(e){e.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},e.languages.markup.tag.inside["attr-value"].inside.entity=e.languages.markup.entity,e.languages.markup.doctype.inside["internal-subset"].inside=e.languages.markup,e.hooks.add("wrap",function(t){t.type==="entity"&&(t.attributes.title=t.content.value.replace(/&amp;/,"&"))}),Object.defineProperty(e.languages.markup.tag,"addInlined",{value:function(n,r){var a={};a["language-"+r]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:e.languages[r]},a.cdata=/^<!\[CDATA\[|\]\]>$/i;var s={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};s["language-"+r]={pattern:/[\s\S]+/,inside:e.languages[r]};var l={};l[n]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return n}),"i"),lookbehind:!0,greedy:!0,inside:s},e.languages.insertBefore("markup","cdata",l)}}),Object.defineProperty(e.languages.markup.tag,"addAttribute",{value:function(t,n){e.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+t+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[n,"language-"+n],inside:e.languages[n]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),e.languages.html=e.languages.markup,e.languages.mathml=e.languages.markup,e.languages.svg=e.languages.markup,e.languages.xml=e.languages.extend("markup",{}),e.languages.ssml=e.languages.xml,e.languages.atom=e.languages.xml,e.languages.rss=e.languages.xml}var Zm=Xd;Xd.displayName="css";Xd.aliases=[];function Xd(e){(function(t){var n=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;t.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+n.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+n.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+n.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:n,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},t.languages.css.atrule.inside.rest=t.languages.css;var r=t.languages.markup;r&&(r.tag.addInlined("style","css"),r.tag.addAttribute("style","css"))})(e)}const K9=xr(Zm);var G9=Qd;Qd.displayName="clike";Qd.aliases=[];function Qd(e){e.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/}}var Y9=qd;qd.displayName="javascript";qd.aliases=["js"];function qd(e){e.languages.javascript=e.languages.extend("clike",{"class-name":[e.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),e.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,e.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:e.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:e.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:e.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:e.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:e.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),e.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:e.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),e.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),e.languages.markup&&(e.languages.markup.tag.addInlined("script","javascript"),e.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),e.languages.js=e.languages.javascript}var fa=typeof globalThis=="object"?globalThis:typeof self=="object"?self:typeof window=="object"?window:typeof Sl=="object"?Sl:{},X9=py();fa.Prism={manual:!0,disableWorkerMessageHandler:!0};var Q9=p7,q9=E9,Km=W9,J9=Z9,ey=Zm,ty=G9,ny=Y9;X9();var Jd={}.hasOwnProperty;function Gm(){}Gm.prototype=Km;var He=new Gm,ry=He;He.highlight=ay;He.register=cs;He.alias=oy;He.registered=sy;He.listLanguages=ly;cs(J9);cs(ey);cs(ty);cs(ny);He.util.encode=uy;He.Token.stringify=iy;function cs(e){if(typeof e!="function"||!e.displayName)throw new Error("Expected `function` for `grammar`, got `"+e+"`");He.languages[e.displayName]===void 0&&e(He)}function oy(e,t){var n=He.languages,r=e,a,s,l,i;t&&(r={},r[e]=t);for(a in r)for(s=r[a],s=typeof s=="string"?[s]:s,l=s.length,i=-1;++i<l;)n[s[i]]=n[a]}function ay(e,t){var n=Km.highlight,r;if(typeof e!="string")throw new Error("Expected `string` for `value`, got `"+e+"`");if(He.util.type(t)==="Object")r=t,t=null;else{if(typeof t!="string")throw new Error("Expected `string` for `name`, got `"+t+"`");if(Jd.call(He.languages,t))r=He.languages[t];else throw new Error("Unknown language: `"+t+"` is not registered")}return n.call(this,e,r,t)}function sy(e){if(typeof e!="string")throw new Error("Expected `string` for `language`, got `"+e+"`");return Jd.call(He.languages,e)}function ly(){var e=He.languages,t=[],n;for(n in e)Jd.call(e,n)&&typeof e[n]=="object"&&t.push(n);return t}function iy(e,t,n){var r;return typeof e=="string"?{type:"text",value:e}:He.util.type(e)==="Array"?cy(e,t):(r={type:e.type,content:He.Token.stringify(e.content,t,n),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:n},e.alias&&(r.classes=r.classes.concat(e.alias)),He.hooks.run("wrap",r),Q9(r.tag+"."+r.classes.join("."),dy(r.attributes),r.content))}function cy(e,t){for(var n=[],r=e.length,a=-1,s;++a<r;)s=e[a],s!==""&&s!==null&&s!==void 0&&n.push(s);for(a=-1,r=n.length;++a<r;)s=n[a],n[a]=He.Token.stringify(s,t,n);return n}function uy(e){return e}function dy(e){var t;for(t in e)e[t]=q9(e[t]);return e}function py(){var e="Prism"in fa,t=e?fa.Prism:void 0;return n;function n(){e?fa.Prism=t:delete fa.Prism,e=void 0,t=void 0}}const ep=xr(ry);var tp=G6(ep,{});tp.registerLanguage=function(e,t){return ep.register(t)};tp.alias=function(e,t){return ep.alias(e,t)};const Yr=tp;var fy=np;np.displayName="bash";np.aliases=["shell"];function np(e){(function(t){var n="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",r={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},a={bash:r,environment:{pattern:RegExp("\\$"+n),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+n),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};t.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+n),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:a},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:r}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:a},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:a.entity}}],environment:{pattern:RegExp("\\$?"+n),alias:"constant"},variable:a.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},r.inside=t.languages.bash;for(var s=["comment","function-name","for-or-select","assign-left","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],l=a.variable[1].inside,i=0;i<s.length;i++)l[s[i]]=t.languages.bash[s[i]];t.languages.shell=t.languages.bash})(e)}const hy=xr(fy);var my=rp;rp.displayName="json";rp.aliases=["webmanifest"];function rp(e){e.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},e.languages.webmanifest=e.languages.json}const gy=xr(my);var xy=op;op.displayName="jsx";op.aliases=[];function op(e){(function(t){var n=t.util.clone(t.languages.javascript),r=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,a=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,s=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function l(u,d){return u=u.replace(/<S>/g,function(){return r}).replace(/<BRACES>/g,function(){return a}).replace(/<SPREAD>/g,function(){return s}),RegExp(u,d)}s=l(s).source,t.languages.jsx=t.languages.extend("markup",n),t.languages.jsx.tag.pattern=l(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),t.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,t.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,t.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,t.languages.jsx.tag.inside.comment=n.comment,t.languages.insertBefore("inside","attr-name",{spread:{pattern:l(/<SPREAD>/.source),inside:t.languages.jsx}},t.languages.jsx.tag),t.languages.insertBefore("inside","special-attr",{script:{pattern:l(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:t.languages.jsx}}},t.languages.jsx.tag);var i=function(u){return u?typeof u=="string"?u:typeof u.content=="string"?u.content:u.content.map(i).join(""):""},c=function(u){for(var d=[],f=0;f<u.length;f++){var g=u[f],y=!1;if(typeof g!="string"&&(g.type==="tag"&&g.content[0]&&g.content[0].type==="tag"?g.content[0].content[0].content==="</"?d.length>0&&d[d.length-1].tagName===i(g.content[0].content[1])&&d.pop():g.content[g.content.length-1].content==="/>"||d.push({tagName:i(g.content[0].content[1]),openedBraces:0}):d.length>0&&g.type==="punctuation"&&g.content==="{"?d[d.length-1].openedBraces++:d.length>0&&d[d.length-1].openedBraces>0&&g.type==="punctuation"&&g.content==="}"?d[d.length-1].openedBraces--:y=!0),(y||typeof g=="string")&&d.length>0&&d[d.length-1].openedBraces===0){var b=i(g);f<u.length-1&&(typeof u[f+1]=="string"||u[f+1].type==="plain-text")&&(b+=i(u[f+1]),u.splice(f+1,1)),f>0&&(typeof u[f-1]=="string"||u[f-1].type==="plain-text")&&(b=i(u[f-1])+b,u.splice(f-1,1),f--),u[f]=new t.Token("plain-text",b,null,b)}g.content&&typeof g.content!="string"&&c(g.content)}};t.hooks.add("after-tokenize",function(u){u.language!=="jsx"&&u.language!=="tsx"||c(u.tokens)})})(e)}const vy=xr(xy);var yy=ap;ap.displayName="scss";ap.aliases=[];function ap(e){e.languages.scss=e.languages.extend("css",{comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0},atrule:{pattern:/@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,inside:{rule:/@[\w-]+/}},url:/(?:[-a-z]+-)?url(?=\()/i,selector:{pattern:/(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,inside:{parent:{pattern:/&/,alias:"important"},placeholder:/%[-\w]+/,variable:/\$[-\w]+|#\{\$[-\w]+\}/}},property:{pattern:/(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,inside:{variable:/\$[-\w]+|#\{\$[-\w]+\}/}}}),e.languages.insertBefore("scss","atrule",{keyword:[/@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i,{pattern:/( )(?:from|through)(?= )/,lookbehind:!0}]}),e.languages.insertBefore("scss","important",{variable:/\$[-\w]+|#\{\$[-\w]+\}/}),e.languages.insertBefore("scss","function",{"module-modifier":{pattern:/\b(?:as|hide|show|with)\b/i,alias:"keyword"},placeholder:{pattern:/%[-\w]+/,alias:"selector"},statement:{pattern:/\B!(?:default|optional)\b/i,alias:"keyword"},boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"},operator:{pattern:/(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,lookbehind:!0}}),e.languages.scss.atrule.inside.rest=e.languages.scss}const Cy=xr(yy);var jy=sp;sp.displayName="yaml";sp.aliases=["yml"];function sp(e){(function(t){var n=/[*&][^\s[\]{},]+/,r=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,a="(?:"+r.source+"(?:[ 	]+"+n.source+")?|"+n.source+"(?:[ 	]+"+r.source+")?)",s=/(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g,function(){return/[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source}),l=/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;function i(c,u){u=(u||"").replace(/m/g,"")+"m";var d=/([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g,function(){return a}).replace(/<<value>>/g,function(){return c});return RegExp(d,u)}t.languages.yaml={scalar:{pattern:RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g,function(){return a})),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g,function(){return a}).replace(/<<key>>/g,function(){return"(?:"+s+"|"+l+")"})),lookbehind:!0,greedy:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:i(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),lookbehind:!0,alias:"number"},boolean:{pattern:i(/false|true/.source,"i"),lookbehind:!0,alias:"important"},null:{pattern:i(/null|~/.source,"i"),lookbehind:!0,alias:"important"},string:{pattern:i(l),lookbehind:!0,greedy:!0},number:{pattern:i(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source,"i"),lookbehind:!0},tag:r,important:n,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},t.languages.yml=t.languages.yaml})(e)}const by=xr(jy);function Xr(e){return typeof e=="string"}function lp(e){return typeof e=="number"}function Ym(e){return Number.isInteger(e)}function Io(e){return Array.isArray(e)}function Si(e){return typeof e=="function"}function Sy(e){return e instanceof RegExp}function us(e){return typeof e=="object"&&!Io(e)&&!Xm(e)}function wy(e){return e===void 0}function Xm(e){return e===null}function qe(e){return!(wy(e)||Xm(e))}function ip(e){return!qe(e)}function Qm(...e){throw new Error(e.join(""))}function at(){}function _y(){return Intl.DateTimeFormat().resolvedOptions().locale}_y();const Ty=(e,t,n=1)=>{const r=t<e?-Math.abs(n):n;return Array(1+Math.floor(Math.abs((t-e)/n))).fill(e).map((a,s)=>a+s*r)};function ky(e){return ip(e)?[]:Xr(e)?e.length?e.split(/,\s*|\s+/):[]:Io(e)?e:[e]}function qm(e,t=!0,n={}){return us(e)?e:ky(e).reduce((r,a)=>(r[a]=Si(t)?t(a):t,r),n)}function Ey(e){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()}function Ly(e){if(Si(e))return e;if(Sy(e))return t=>e.test(t);if(us(e))return t=>!!e[t];if(Io(e)||Xr(e)){const t=qm(e);return n=>!!t[n]}Qm("Invalid selector() specification: "+e)}const Ny=(e,t,n={})=>{let r={},a={delete:!1,...n};const s=Ly(t);return Object.keys(e).map(l=>{if(s(l)){let i=e[l];a.delete&&delete e[l],a.key&&(l=a.key(l)),a.value&&(i=a.value(i)),r[l]=i}}),r},cf=(e,t)=>parseInt(e[t]||0),uf=(e,t)=>parseFloat(e[t]||0),df=(e,t)=>(e[t]||"").toString(),pf=e=>(t,n)=>cf(t,e)-cf(n,e),gc=e=>(t,n)=>uf(t,e)-uf(n,e),ff=e=>(t,n)=>{let r=df(t,e).toLowerCase(),a=df(n,e).toLowerCase();return r>a?1:a>r?-1:0},Ry=e=>(t,n)=>e(n,t);function Oy(e,t=300){let n;return(...r)=>{clearTimeout(n),n=setTimeout(()=>e.apply(this,r),t)}}function wi(e){return new Promise(t=>setTimeout(t,e))}Yr.registerLanguage("jsx",vy);Yr.registerLanguage("json",gy);Yr.registerLanguage("css",K9);Yr.registerLanguage("scss",Cy);Yr.registerLanguage("bash",hy);Yr.registerLanguage("yaml",by);const tr=({code:e,language:t="jsx",caption:n,expand:r=!1,fixed:a=r,className:s="",highlightLines:l,lineProps:i,undent:c=!1})=>{const[u,d]=x.useState(!1),[f,g]=x.useState(r),y=()=>{navigator.clipboard.writeText(e),d(!0),wi(2e3).then(()=>d(!1))};return o.jsxs("div",{className:`codeblock ${s} ${f?"expanded":""} ${a?"fixed-open":"expandable"}`,children:[!!n&&o.jsx("h4",{className:"caption",children:n}),o.jsxs("div",{className:"controls",children:[o.jsx("div",{className:"expand",onClick:()=>g(!f),children:f?"Compress":"Expand"}),o.jsx("div",{className:`clipboard ${u?"copied":""}`,onClick:y,children:u?"Copied":"Copy"})]}),o.jsx(Yr,{language:t,showLineNumbers:!0,useInlineStyles:!1,wrapLines:!0,customStyle:{},children:Dy(e,{undent:c})})]})},Dy=(e,t={})=>{if(e=e.replace(/^[^]*?{?\/\*\s*START\s*\*\/}?\n/,"").replace(/[\n\s]*{?\/\*\s*END\s*\*\/}?[^]*/,"").replaceAll(/\/\/\s*PRETEND:\s/g,"").replaceAll(/{?\/\*\s*PRETEND:\s(.*?)\s+\*\/}?/g,"$1").replace(/\n+$/,""),t.undent){const n=new RegExp("^"+" ".repeat(t.undent),"gm");e=e.replaceAll(n,"")}return e},be=({Component:e,code:t,html:n,children:r,className:a="",language:s,...l})=>o.jsxs("div",{className:`example grid-2 gap-8 stack-desktop ${a}`,children:[o.jsx("div",{className:"source",children:o.jsx(tr,{code:t||n,language:n?"html":s,...l})}),!!r&&o.jsx("div",{className:"interim",children:r}),e?o.jsxs("div",{className:"output",children:[o.jsx("h4",{className:"caption",children:"Output"}),o.jsx(e,{})]}):null,n?o.jsxs("div",{className:"output",children:[o.jsx("h4",{className:"caption",children:"Output"}),o.jsx("div",{dangerouslySetInnerHTML:{__html:n}})]}):null]}),el=x.createContext();function hf(e){return typeof e=="function"}function mf(e){return typeof e=="object"&&!Jm(e)&&!My(e)}function Jm(e){return Array.isArray(e)}function My(e){return e===null}function Ay({context:e={},Implementation:t,spec:n=!1,props:r={},ref:a}){if(!n)return o.jsx(t,{...r,ref:a});let s={},l=hf(n)?n(e):e[n];if(Jm(l)&&(t=l[0],l=l[1]),hf(l)){const i=l(r,a,e);if(q.isValidElement(i))return i;mf(i)&&Object.assign(s,r,i)}else mf(l)?Object.assign(s,l,r):Object.assign(s,r);return o.jsx(t,{...s,ref:a})}const Py=e=>({Context:el,Provider:({children:t,...n})=>o.jsx(el.Provider,{value:{...e,...n},children:t}),Consumer:t=>n=>o.jsx(el.Consumer,{children:r=>o.jsx(t,{...r,...n,context:r})}),Component:(t,n=t.displayName||t.name)=>q.forwardRef((r,a)=>o.jsx(el.Consumer,{children:s=>o.jsx(Ay,{Implementation:t,context:s,spec:n,props:r,ref:a})}))}),$y=Py(),xe=$y.Component,Iy="svg",Lu="-",gf="none",e3="fill",By="path",zy="line",Fy="rect",Uy="array",Hy="circle",Vy="ellipse",Wy="polygon",Zy="polyline",cp=/-(?!\d)/,xf="currentColor",up=512,dp=512,ds={defaults:{width:512,height:512,type:"line"},icons:{alpha:"M102,448L256,64L410,448 M152,333L360,333",angle:"M448,336L256,144L64,336",angles:"M448,448L256,256L64,448M448,256L256,64L64,256",arrow:"M96,224L256,64L416,224M256,86L256,448",arrows:"M144,144L256,32L368,144M368,368L256,480L144,368M256,56L256,456",asterisk:"M76,152L436,360M76,360L436,152M256,48L256,464",at:"M256,160C309,160 352,203 352,256C352,309 309,352 256,352C203,352 160,309 160,256C160,203 203,160 256,160M256,480C132,480 32,380 32,256C32,132 132,32 256,32C380,32 480,132 480,256L480,288C480,323 451,352 416,352C381,352 352,323 352,288L352,176",ban:"M100,412L412,100 M256,32C380,32 480,132 480,255C480,379 380,480 256,480C132,480 32,379 32,255C32,132 132,32 256,32Z",bars:"M64,96L448,96M64,256L448,256M64,416L448,416",caret:"M448,336L256,144L64,336L448,336Z",check:"M48,248L192,392L464,120",circle:"circle:256 256 224",clipboard:"M192,80L80,80L80,496L432,496L432,80L320,80L320,112L192,112L192,80ZM256,16C282,16 304,38 304,64C304,90 282,112 256,112C230,112 208,90 208,64C208,38 230,16 256,16Z",cloud:"M480,293C480,234 437,177 362,196C346,161 319,116 240,120C180,124 139,165 125,224C121,223 116,223 111,223C68,223 32,260 32,307C32,354 68,392 111,392C120,392 366,392 380,392C462,392 480,335 480,293Z",cog:"M306,21L206,21L187,91L147,114L78,95L28,182L78,233L78,279L28,330L78,417L147,398L187,421L206,491L306,491L325,421L365,398L434,417L484,330L434,279L434,233L484,182L434,95L365,114L325,91L306,21Z M256,176C300,176 336,212 336,256C336,300 300,336 256,336C212,336 176,300 176,256C176,212 212,176 256,176Z",cross:"M112,112L400,400M400,112L112,400",drag:"M64,96L256,32L448,96M64,416L256,480L448,416M128,256L384,256",envelope:"M32,104L480,104L480,408L32,408L32,104M48,120L256,288L464,120M48,392L200,252M464,392L312,252",equals:"M96,320L416,320 M96,192L416,192",exclamation:"M256,96L256,310M254,416L258,416",filter:"M64,32L448,32L448,128L305,271L304,432L208,496L208,272L64,128L64,32Z",heart:"M256,128C298,48 382,48 424,88C466,128 466,208 424,288C394,348 319,408 256,448C193,408 118,348 88,288C46,208 46,128 88,88C130,48 214,48 256,128Z",hourglass:"M80,32L432,32M80,480L432,480M128,32C128,256 384,256 384,480M384,32C384,256 128,256 128,480",info:"M212,202L256,202L256,416M182,416L330,416M252,96L256,96",list:"M176,96L448,96M176,256L448,256M176,416L448,416M64,96L80,96M64,256L80,256M64,416L80,416",minus:"M96,256L416,256",number:"M256,448L256,64L176,128 M160,448L336,449",pen:"M482,143C491,134 491,120 482,112L401,30C392,21 378,21 369,30L72,326L22,489L186,439L482,143M305,93L418,206",plus:"M256,96L256,416M96,256L416,256",point:"M464,192L256,16L48,192L128,192L128,480L384,480L384,192L464,192Z",prime:"M256,128L256,256",question:"M160,160C160,126 197,80 255,80C314,80 336,128 336,160C336,236 255,235 255,320 M255,416L256,416",rotate:"M392,120C356,84 307,64 256,64C150,64 64,150 64,256C64,362 150,448 256,448C303,448 349,430 384,399C349,430 303,448 256,448C150,448 64,362 64,256C64,150 150,64 256,64C307,64 356,84 392,120Z M352,208L480,208L480,80",search:"M204,32C300,32 384,111 384,208C384,305 305,384 208,384C111,384 32,305 32,208C32,111 107,32 204,32M480,480L332,332",square:"rect:32 32 448 448",square10:"rect:32 32 448 448 45 45",square20:"rect:32 32 448 448 90 90",square30:"rect:32 32 448 448 135 135",square40:"rect:32 32 448 448 180 180",star:"M256,32L324,183L489,202L367,313L400,476L256,394L112,476L145,313L23,202L188,183L256,32Z",thumb:"M149,174L32,174L32,448L149,448L149,184 M149,217C277,160 246,36 282,38C372,44 324,192 324,192L440,192C462,192 480,210 480,232C480,254 462,272 440,272L368,272M424,272C446,272 464,290 464,312C464,334 446,352 424,352L352,352M392,352C414,352 432,370 432,392C432,414 414,432 392,432L256,432C220,432 149,409 149,409",time:"M256,128L256,256L336,336",trash:"M32,80L480,80 M80,80C80,80 100,344 109,452C111,477 131,496 156,496C211,496 301,496 356,496C381,496 401,477 403,452C412,344 432,80 432,80 M160,80L208,16L304,16L352,74",triangle:"M256,64L32,448L480,448L256,64Z",user:"M256,32C302,32 340,70 340,116C340,162 302,208 256,208C210,208 172,162 172,116C172,70 210,32 256,32ZM448,412C448,361 410,320 363,320L148,320C102,320 64,361 64,412L64,480L448,480L448,412Z",vertical:"line:256,48 256,464",wrench:"M486,108C493,124 496,142 496,160C496,239 431,304 352,304C330,304 309,299 290,290L98,482C79,501 49,501 30,482C11,463 11,433 30,414L222,222C213,203 208,182 208,160C208,81 273,16 352,16C370,16 388,19 404,26L326,103L409,186L486,108Z"}};function Ky(e,t,n=ds){n.icons[e]=t}function Gy(e,t=ds){Object.entries(e).forEach(([n,r])=>Ky(n,r,t))}const tl=x.createContext();function vf(e){return typeof e=="function"}function yf(e){return typeof e=="object"&&!t3(e)&&!Yy(e)}function t3(e){return Array.isArray(e)}function Yy(e){return e===null}function Xy({context:e={},Implementation:t,spec:n=!1,props:r={},ref:a}){if(!n)return o.jsx(t,{...r,ref:a});let s={},l=vf(n)?n(e):e[n];if(t3(l)&&(t=l[0],l=l[1]),vf(l)){const i=l(r,a,e);if(q.isValidElement(i))return i;yf(i)&&Object.assign(s,r,i)}else yf(l)?Object.assign(s,l,r):Object.assign(s,r);return o.jsx(t,{...s,ref:a})}const Qy=e=>({Context:tl,Provider:({children:t,...n})=>o.jsx(tl.Provider,{value:{...e,...n},children:t}),Consumer:t=>n=>o.jsx(tl.Consumer,{children:r=>o.jsx(t,{...r,...n,context:r})}),Component:(t,n=t.displayName||t.name)=>q.forwardRef((r,a)=>o.jsx(tl.Consumer,{children:s=>o.jsx(Xy,{Implementation:t,context:s,spec:n,props:r,ref:a})}))}),qy=Qy(),Jy=qy.Component;function An(e){return typeof e=="string"}function ps(e){return Array.isArray(e)}function _i(e){return typeof e=="object"&&!ps(e)&&!r3(e)}function n3(e){return e===void 0}function r3(e){return e===null}function Ti(e){return!(n3(e)||r3(e))}function o3(e){return!Ti(e)}function On(...e){throw new Error(e.join(""))}function eC(){return Intl.DateTimeFormat().resolvedOptions().locale}eC();function Nu(e){return o3(e)?[]:An(e)?e.length?e.split(/,\s*|\s+/):[]:ps(e)?e:[e]}function fs(e){return e.split(/\s*[;&]\s*/).filter(t=>t.length>0).reduce((t,n)=>{const[r,a]=n.split(/\s*[:=]\s*/);return t[r]=n3(a)?!0:a,t},{})}const pp=e=>e.filter(Ti).join(" "),tC=e=>Object.entries(e).filter(([,t])=>t).map(([t])=>t),nC=(...e)=>pp(e.flatMap(t=>_i(t)?tC(t):t)),a3={x:0,y:0,size:16,flipX:!1,flipY:!1,rotate:0},hr={flip:(e,t)=>{An(t)&&t.match(/^y$/i)?e.flipY=!e.flipY:e.flipX=!e.flipX},flipx:e=>e.flipX=!e.flipX,flipy:e=>e.flipY=!e.flipY,grow:(e,t)=>e.size+=parseFloat(t),shrink:(e,t)=>e.size-=parseFloat(t),left:(e,t)=>t===!0?e.rotate-=90:e.x-=parseFloat(t),right:(e,t)=>t===!0?e.rotate+=90:e.x+=parseFloat(t),up:(e,t)=>t===!0?e.rotate+=0:e.y-=parseFloat(t),down:(e,t)=>t===!0?e.rotate+=180:e.y+=parseFloat(t),rotate:(e,t)=>e.rotate+=parseInt(t)};hr.flop=hr.flipy;hr["flip-x"]=hr.flipx;hr["flip-y"]=hr.flipy;function s3(e,t={...a3}){const n=An(e)?fs(e):e||{};return Object.entries(n).reduce((r,[a,s])=>{const l=a.toLowerCase();return(hr[l]||On(`Invalid transform: ${l}`))(r,s),r},t)}const rC=4.42,jn=e=>`${rC*e}%`,oC={},Ru={outline:{fill:"none",stroke:"currentColor",strokeWidth:jn(2),strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"1.5"},solid:{fill:"currentColor",stroke:"none"},round:{strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"1.5"},square:{strokeLinecap:"square",strokeLinejoin:"miter",strokeMiterlimit:"1.5"},butt:{strokeLinecap:"butt"},bevel:{strokeLinejoin:"bevel"},thinnest:{strokeWidth:jn(.5)},thinner:{strokeWidth:jn(1)},thin:{strokeWidth:jn(1.5)},medium:{strokeWidth:jn(2)},thick:{strokeWidth:jn(2.5)},thicker:{strokeWidth:jn(3)},thickest:{strokeWidth:jn(3.5)}};Ru.line=Ru.outline;const aC={...Object.entries(Ru).reduce((e,[t,n])=>(e[t]=r=>Object.assign(r,n),e),{}),fill:(e,t)=>e.fill=t===!0?xf:t,stroke:(e,t)=>e.stroke=t===!0?xf:t,nofill:e=>e.fill=gf,nostroke:e=>e.stroke=gf,strokewidth:(e,t)=>e.strokeWidth=t.match(/^[\d.]+$/)?jn(parseFloat(t)):t,opacity:(e,t)=>e.opacity=t,fillopacity:(e,t)=>e.fillOpacity=t,strokeopacity:(e,t)=>e.strokeOpacity=t,dasharray:(e,t)=>e.strokeDasharray=t,drawlength:(e,t)=>e["--draw-length"]=t,drawtime:(e,t)=>e["--draw-time"]=t,filltime:(e,t)=>e["--fill-time"]=t};function Gl(e,t){return(An(t)?t.split(cp):t).forEach(n=>{const[r,a=!0]=n.split(/[:=]/),s=r.toLowerCase(),l=aC[s];if(l){l(e.style||(e.style={...oC}),a);return}(hr[s]||On(`Invalid style or transform: ${s}`))(e.transform||(e.transform={...a3}),a)})}const sC={width:up,height:dp,type:e3},l3={svg:e=>({element:Iy,svg:e}),array:e=>({element:Uy,items:e}),path:e=>({element:By,d:e}),polygon:e=>({element:Wy,points:e}),polyline:e=>({element:Zy,points:e}),circle:e=>({element:Hy,...nl(e,"cx cy r")}),ellipse:e=>({element:Vy,...nl(e,"cx cy rx ry")}),line:e=>({element:zy,...nl(e,"x1 y1 x2 y2")}),rect:e=>({element:Fy,...nl(e,"x y width height rx ry")})};function nl(e,t){const n=ps(t)?[...t]:Nu(t);return Nu(e).reduce((r,a)=>{if(n.length){const s=n.shift();r[s]=a}return r},{})}const i3=e=>{const[t,n=""]=e.split("?"),[r,...a]=t.split(/\.(?!\d)/),s=r.split(cp).filter(i=>i.length),l=fs(n);return{dashes:s,classes:a,style:l}},lC=(e,t)=>{const n=i3(e),{dashes:r}=n;for(let a=r.length;a>0;a--){const s=r.slice(0,a).join(Lu);if(t[s]){n.name=r.splice(0,a).join(Lu);break}}return n},Cf=(e,t,n={})=>{const{icons:r}=t,a=lC(e,r),{name:s,classes:l,style:i,dashes:c}=a;o3(s)&&On(`No icon found matching any leading subset of ${a.dashes.join(Lu)}`);const u=t.icons[s]||On(`Icon not found in data: ${s}`),d=c3(u,t,{...n,name:s});if((l.length||n.className)&&(d.className=pp([...l||[],n.className])),d.transform&&(d.transform=s3(d.transform)),d.style&&(d.style=An(d.style)?fs(d.style):{...d.style}),d.type){const f=d.style&&{...d.style};Gl(d,d.type),delete d.type,f&&Object.assign(d.style,f)}return c.length&&Gl(d,c),Object.keys(i).length&&(d.style=Object.assign(d.style||{},i)),d};function iC(e){const t=e.match(/^(.*?):(.*)/);return t?{path:t[2],type:t[1]}:{path:e}}const c3=(e,t,n={})=>{const{defaults:r={}}=t,a={...sC,...r,...n};if(An(e))return cC(a,e);if(_i(e))return uC(a,e);if(ps(e))return dC(a,e,t);On(`Cannot parse icon data: ${e}`)};function cC(e,t){if(t.match(/^\w*</))return e.body={element:"svg",svg:t},e;const n=t.match(/^(.*?):(.*)/);if(n){const[,r,a]=n,{dashes:s,classes:l}=i3(r),i=s.shift(),c=l3[i]||On(`Invalid icon data element: ${i}`);return e.body=c(a),l.length&&(e.body.className=pp(l)),s.length&&Gl(e.body,s),e}return e.body={element:"path",d:t},e}function uC(e,t){const n={...t};if(n.element)return e.body=n,e;for(let r of Object.entries(l3)){const[a,s]=r,l=n[a];if(Ti(l))return e.body=s(l),delete n[a],Object.assign(e,n),e}On(`Cannot parse icon data: ${JSON.stringify(t)}`)}function dC(e,t,n){return e.body={element:"array",items:t.map(r=>c3(r,n).body)},e}const pC=({size:e,...t})=>{t.width??(t.width=e||up),t.height??(t.height=e||dp),t.path&&Object.assign(t,iC(t.path));let n;return t.style&&(An(t.style)?(n=fs(t.style),t.style={}):n={...t.style}),Gl(t,t.type?t.type.split(cp).filter(r=>r.length):e3),delete t.type,t.style&&n&&Object.assign(t.style,n),t.transform&&(t.transform=s3(t.transform)),t},fp=e=>_i(e)?Object.entries(e).reduce((t,[n,r])=>(t[n.replace(/(?!-)-./g,a=>a[1].toUpperCase())]=r,t),{}):e,fC=e=>Ti(e)?fp(fs(e)):null,Pn=({style:e,class:t,...n})=>({style:An(e)?fC(e):fp(e),className:t,...n}),hC=e=>o.jsx("circle",{...Pn(e)}),mC=e=>o.jsx("ellipse",{...Pn(e)}),gC=e=>o.jsx("line",{...Pn(e)}),u3=e=>o.jsx("path",{...Pn(e)}),xC=e=>o.jsx("polygon",{...Pn(e)}),vC=e=>o.jsx("polyline",{...Pn(e)}),yC=e=>o.jsx("rect",{...Pn(e)}),CC=({svg:e,...t})=>o.jsx("g",{dangerouslySetInnerHTML:{__html:e},...Pn(t)}),jC=({items:e,...t})=>o.jsx("g",{...Pn(t),children:e.map((n,r)=>o.jsx(Yl,{body:n},r))}),bC={array:jC,circle:hC,ellipse:mC,line:gC,path:u3,polygon:xC,polyline:vC,rect:yC,svg:CC},Yl=({path:e,body:t,...n})=>{if(e)return o.jsx(u3,{d:e,...n});if(An(t))return o.jsx("g",{dangerouslySetInnerHTML:{__html:t}});if(_i(t)){const{element:r,...a}=t,s=bC[r]||On(`Invalid element type: ${r} => `,JSON.stringify(t));return o.jsx(s,{...a})}if(ps(t))return t.map((r,a)=>o.jsx(Yl,{body:r},a));On(`Don't know how to handle body: ${t}`)};function SC({width:e,height:t,transform:n,children:r}){const a=e/2,s=t/2,l=n.x*e/16,i=n.y*t/16,c=n.size/16*(n.flipX?-1:1),u=n.size/16*(n.flipY?-1:1),d=n.rotate;return o.jsx("g",{transform:`translate(${a} ${s})`,children:o.jsx("g",{transform:`translate(${l}, ${i}) scale(${c}, ${u}) rotate(${d} 0 0)`,children:o.jsx("g",{transform:`translate(-${a} -${s})`,children:r})})})}const xc=({onClick:e,minx:t=0,miny:n=0,width:r=up,height:a=dp,style:s,transform:l,className:i="",debug:c,...u})=>o.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",role:"img","aria-hidden":"true",focusable:"false",viewBox:`${t} ${n} ${r} ${a}`,className:`${i} icon`,style:fp(s),onClick:e,children:[!!c&&console.log("style: ",s),l?o.jsx(SC,{width:r,height:a,transform:l,children:o.jsx(Yl,{...u})}):o.jsx(Yl,{...u})]}),wC=({name:e,iconsClass:t="icons",library:n=ds,...r})=>{if(!e)return o.jsx(xc,{...pC(r)});const a=Nu(e);return a.length===1?o.jsx(xc,{...r,...Cf(e,n,r)}):o.jsx("div",{className:nC(t,r.className),children:a.map(s=>o.jsx(xc,{...r,...Cf(s,n,r)},s))})},jl=Jy(wC,"Icon"),d3=(e,...t)=>Si(e)?e(...t):e,_C=e=>e.filter(qe).join(" "),TC=e=>Object.entries(e).filter(([,t])=>t).map(([t])=>t),Ne=(...e)=>_C(e.flatMap(t=>us(t)?TC(t):t)),kC=e=>{if(!e)return null;const[t,n,r,a,s]=e.split("-");return Ne(t,LC(n),NC(r),RC(a),OC(s))},EC=({className:e,size:t,color:n,...r})=>({...r,className:Ne(e,t,kC(n))}),hp=e=>p3(e,"border",t=>`border bdw-${t}`),mp=e=>p3(e,"shadow-1",t=>`shadow-${t}`),gp=e=>hs(e,t=>`bdr-${t}`),LC=e=>hs(e,t=>`fgc-${t}`),NC=e=>hs(e,t=>`bgc-${t}`),RC=e=>hs(e,t=>`fgd-${t}`),OC=e=>hs(e,t=>`bgd-${t}`),hs=(e,t)=>Ym(parseInt(e))?d3(t,e):null,p3=(e,t,n)=>e===!0?t:parseInt(e)?d3(n,e):null,Q=e=>o.jsx(jl,{...EC(e)});function jf(e,t,n={}){return qe(t)&&(n[e]=Ym(t)?`${t}deg`:t),Object.keys(n).length?n:null}const DC=({icon:e,iconClass:t,iconLeft:n,iconLeftClass:r="on-left",iconLeftRotate:a,iconRight:s,iconRightClass:l="on-right",iconRightRotate:i,text:c,children:u})=>o.jsxs(o.Fragment,{children:[!!e&&o.jsx(jl,{name:e,className:t,fixedWidth:!0}),!!n&&o.jsx(jl,{name:n,className:r,style:jf("--icon-rotate",a),fixedWidth:!0}),c||u,!!s&&o.jsx(jl,{name:s,className:l,style:jf("--icon-rotate",i),fixedWidth:!0})]}),ki=xe(DC,"WithIcons");Gy({github:"path-fill-nostroke:M256,0C115,0 0,115 0,256C0,369 73,465 175,499C188,501 193,493 193,487C193,481 192,460 192,439C128,451 111,423 106,409C103,402 91,379 80,373C71,368 58,356 80,356C100,356 114,374 119,382C142,421 179,410 194,403C196,387 203,375 210,369C153,363 93,340 93,243C93,215 103,192 120,174C117,167 108,141 122,106C122,106 144,99 193,132C213,126 235,124 257,124C278,124 300,126 321,132C370,99 391,106 391,106C405,141 396,167 394,174C410,192 420,214 420,243C420,341 360,363 303,369C312,377 320,392 320,416C320,451 320,478 320,487C320,493 325,501 338,499C439,465 512,369 512,256C512,115 397,0 256,0Z"});const MC=({dismissable:e,dismiss:t,revealable:n,isRevealed:r,openIcon:a="angle-down",closedIcon:s="angle-left",dismissIcon:l="cross"})=>o.jsxs("div",{className:"on-right",children:[!!e&&o.jsx(Q,{name:l,fixedWidth:!0,className:"dismiss",onClick:()=>t(!0)}),!!n&&o.jsx(Q,{name:r?a:s,fixedWidth:!0,className:"reveal"})]}),f3=xe(MC,"AlertControls"),AC=({headline:e,headIcon:t,toggle:n,revealable:r=!1,controlProps:a,Controls:s=f3})=>o.jsxs("div",{className:"headline flex space",onClick:r?n:null,children:[o.jsxs("div",{children:[!!t&&o.jsx(Q,{name:t,fixedWidth:!0,className:"on-left"}),e]}),o.jsx(s,{...a})]}),PC=xe(AC,"AlertHeadline"),$C=({title:e,text:t,children:n})=>o.jsxs(o.Fragment,{children:[e&&o.jsx("h3",{children:e}),t?o.jsx("p",{children:t}):n]}),h3=xe($C,"AlertContent"),IC=({icon:e,Content:t=h3,...n})=>o.jsxs("div",{className:"side-icon",children:[o.jsx(Q,{name:e}),o.jsx("div",{className:"wide",children:o.jsx(t,{...n})})]}),BC=xe(IC,"AlertIcon"),Ei=e=>Xr(e)||lp(e)||!e.separator&&!e.heading&&!e.disabled;function zC(e,t=Ei){const n=e.findIndex(t);return n<0?null:n}function FC(e,t=Ei){for(let n=e.length-1;n>=0;n--)if(t(e[n]))return n;return null}function UC(e,t,n=Ei){for(let r=1;r<e.length;r++){const a=(t+r)%e.length;if(n(e[a]))return a}return null}function HC(e,t,n=Ei){for(let r=1;r<e.length;r++){const a=(t+e.length-r)%e.length;if(n(e[a]))return a}return null}const m3="",g3="ArrowDown",x3="ArrowUp",v3="Enter",VC=" ",y3="Escape",Xl=e=>{const t=`HINT: define ${e}() to render this value`;return n=>Xr(n)||lp(n)?n:us(n)?n.text??n.label??n.name??t:t},WC=e=>Xr(e)||lp(e)?e:o.jsx(ki,{...e}),C3=(e,t)=>{if(!e||!t)return;const n=t.offsetTop,r=n+t.offsetHeight,a=e.scrollTop,s=a+e.offsetHeight;n<a?e.scrollTo({top:n}):r>s&&e.scrollTo({top:a+(r-s)})},$n=({title:e,headline:t,headIcon:n,type:r,size:a,color:s,stripe:l,border:i,radius:c,shadow:u,className:d,text:f,children:g,onDismiss:y,icon:b,dismissable:j=!1,revealable:_=!1,revealed:v=!1,openIcon:p,closedIcon:m,dismissIcon:h,Headline:C=PC,Controls:S=f3,Content:w=h3,Icon:T=BC})=>{const[L,N]=x.useState(_?v:!0),[P,Y]=x.useState(!1),J=Ne("alert",r,a,s,d,{revealable:_,dismissable:j,stripe:l},L?"revealed":null,mp(u),hp(i),gp(c)),de=()=>N(B=>!B),me={dismissable:j,revealable:_,isRevealed:L,dismiss:()=>{Y(!0),y&&y()},openIcon:p,closedIcon:m,dismissIcon:h},oe={title:e,text:f,children:g},D={...oe,icon:b,Content:w},$={headline:t,headIcon:n,toggle:de,revealable:_,controlProps:me,Controls:S};return P?null:o.jsxs("div",{className:J,children:[!!t&&o.jsx(C,{...$}),L&&(b?o.jsx(T,{...D}):o.jsx(w,{...oe}))]})},ha=xe(e=>o.jsx($n,{...e,type:"info"}),"Info"),ma=xe(e=>o.jsx($n,{...e,type:"success"}),"Success"),ga=xe(e=>o.jsx($n,{...e,type:"warning"}),"Warning"),xa=xe(e=>o.jsx($n,{...e,type:"error"}),"Error");$n.Info=ha;$n.Success=ma;$n.Warning=ga;$n.Error=xa;const X=xe($n,"Alert"),ZC=({type:e="button",size:t,color:n,className:r,disabled:a,bright:s,dark:l,outline:i,bare:c,shaded:u,shadow:d,border:f,radius:g,label:y,tooltip:b,tabIndex:j=0,icon:_,iconClass:v,iconLeft:p,iconLeftClass:m,iconRight:h,iconRightClass:C,text:S,children:w,Content:T=ki,...L})=>{const N=Ne(t,n,r,{bright:s,dark:l,outline:i,bare:c,shaded:u,icon:_},mp(d),hp(f),gp(g)),P={icon:_,iconClass:v,iconLeft:p,iconLeftClass:m,iconRight:h,iconRightClass:C,text:S,children:w};return o.jsx("button",{className:N,"aria-label":y,tabIndex:j,type:e,disabled:a,"aria-disabled":a,"data-tooltip":b,...L,children:o.jsx(T,{...P})})},M=xe(ZC,"Button"),KC=({buttons:e,children:t,className:n="buttons",buttonClass:r,Button:a=M,...s})=>o.jsx("div",{className:n,children:e?e.map((l,i)=>o.jsx(a,{className:r,...s,...l},i)):t}),Qr=xe(KC,"Buttons"),GC=({className:e,disabled:t,children:n,ref:r})=>o.jsx("label",{className:Ne(e,{disabled:t}),ref:r,children:n}),YC=xe(GC,"CheckboxLabel"),XC=({disabled:e=!1,tabIndex:t=0,onChange:n=at,ref:r,...a})=>o.jsx("input",{type:"checkbox",ref:r,"aria-disabled":e,tabIndex:e?-1:t,onChange:s=>n(s.target.checked),...a}),QC=xe(XC,"CheckboxInput"),qC=({text:e,className:t="checkbox",ref:n,inputRef:r,checked:a,checkedText:s=e,uncheckedText:l=e,inputClass:i,Label:c=YC,Input:u=QC,...d})=>o.jsxs(c,{className:t,ref:n,checked:a,...d,children:[o.jsx(u,{className:i,ref:r,checked:a,...d}),a?s:l]}),In=xe(qC,"Checkbox"),JC=({checked:e=!1}={})=>{const[t,n]=x.useState(e);return{isChecked:t,setChecked:n,check:()=>n(!0),uncheck:()=>n(!1)}},ej=({checked:e=!1,onChange:t,...n})=>{const{isChecked:r,setChecked:a}=JC({checked:e}),s=l=>{a(l),t&&t(l)};return o.jsx(In,{checked:r,onChange:s,...n})},br=({visible:e=!1}={})=>{const[t,n]=x.useState(e);return{isVisible:t,setVisible:n,show:()=>n(!0),hide:()=>n(!1)}},tj=({initiallyRevealed:e=!1,open:t=e,confirmIcon:n="check",confirmText:r="Confirm",confirmColor:a="red",confirmClass:s,cancelIcon:l="cross",cancelText:i="Cancel",cancelColor:c="grey",cancelClass:u,confirm:d={iconRight:n,text:r,color:a,className:s},cancel:f={iconLeft:l,text:i,color:c,className:u},buttonsClass:g,className:y=g,buttonClass:b,onClick:j=()=>window.alert("No confirm action defined"),..._})=>{const{isVisible:v,hide:p,show:m}=br({visible:t}),C={iconRight:n,text:r,color:a,className:s,...d,onClick:w=>{w.preventDefault(),p(),j()}},S={iconLeft:l,text:i,color:c,className:u,outline:!0,...f,onClick:p};return o.jsx(Qr,{className:y,buttonClass:b,buttons:v?[S,C]:[{..._,onClick:m}]})},gn=xe(tj,"Confirm");var nj=Object.defineProperty,rj=(e,t,n)=>t in e?nj(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,vc=(e,t,n)=>(rj(e,typeof t!="symbol"?t+"":t,n),n);const qr=(e,t={})=>{const n=q.createContext(t);return{Context:n,Provider:r=>o.jsx(e,{...r,render:a=>o.jsx(n.Provider,{value:a,children:r.children})}),Consumer:r=>a=>o.jsx(n.Consumer,{children:s=>o.jsx(r,{...s,...a})}),Use:()=>q.useContext(n)}};function oj(e={},t={},n={}){return Object.entries(t).reduce((r,[a,s])=>{const l=n[s];return l!==null&&typeof l<"u"&&(r[a]=l),r},{...e})}function aj(e,t=[]){return(typeof t=="string"?t.split(/,\s*|\s+/):t).reduce((n,r)=>{const a=e[r]||lj(`Cannot expose non-existent action method: ${r}`);return n[r]=a.bind(e),n},{})}function sj(e,t){const n=e.debug??t.debug,r=bf(e.debugPrefix??t.debugPrefix,e),a=bf(e.debugColor??t.debugColor,e);return n?r?(s,...l)=>console.log(`%c${r}%c${s}`,`color: ${a}`,"color:black",...l):console.log.bind(console):()=>{}}function bf(e,t){return typeof e=="function"?e(t):e}function lj(...e){throw new Error(e.join(""))}class ka extends q.Component{constructor(t){super(t);const n=this.constructor;this.debug=sj(t,n),this.state=oj(n.initialState,n.initialProps,t),this.actions=aj(this,n.actions)}getContext(){return{...this.props,...this.state,...this.actions}}getRenderProps(){return this.getContext()}render(){return this.props.render(this.getRenderProps())}}vc(ka,"initialState",{}),vc(ka,"initialProps",{}),vc(ka,"actions",[]);const Sf=e=>{Xr(e)&&(e={field:e});const{field:t}=e;return e.type||(e.type="text"),e.label||(e.label=Ey(t)),e},ij=e=>{if(Xr(e))return qm(e,Sf);if(Io(e))return e.reduce((t,n)=>{const r=Sf(n);return t[r.field]=r,t},{});Qm("Invalid columns definition")},cj=e=>Object.keys(e).filter(t=>!e[t].hidden),wf={string:ff,text:ff,number:gc,price:gc,pounds:gc,integer:pf,id:pf},uj=(e,t,n,r)=>{if(!n)return e;const a=t[n],s=a.sort,l=a.type||"text",i=Si(s)?s:(wf[l]||wf.text)(n);return e.sort(r?Ry(i):i)},dj=(e,t=1,n=e.length)=>{const r=e.length,a=Math.ceil(r/n);t=Math.min(t,a);const s=t-1,l=n*s,i=Math.min(l+n,r-1),c=e.slice(l,i+1);return{pageSize:n,pages:a,page:s,pageNo:t,firstIndex:l,lastIndex:i,rows:c}},pj=({render:e,rows:t=[],...n})=>{const r=x.useMemo(()=>ij(n.columns),[n.columns]),[a,s]=x.useState(n.pageNo??1),[l,i]=x.useState(n.pageSize??10),[c,u]=x.useState(!1),[d,f]=x.useState({}),[g,y]=x.useState(n.sortColumn),[b,j]=x.useState(n.sortReverse??!1),[_,v]=x.useState(cj(r)),[p,m]=x.useState(!1),h=()=>m(!0),C=()=>m(!1),S=N=>{g===N?j(P=>!P):(y(N),j(!1))},w=N=>{N.preventDefault(),N.stopPropagation(),u(P=>!P)},T=(N,P)=>{f(Y=>{const J={...Y};return qe(P)&&P.length?J[N]=P:delete J[N],J}),s(1)},L=x.useMemo(()=>dj(uj(t,r,g,b),a,l),[t,a,l,g,b]);return e({...n,rows:t,columns:r,page:L,pageNo:a,setPageNo:s,pageSize:l,setPageSize:i,showFilters:c,toggleFilters:w,filters:d,setFilter:T,sortColumn:g,setSortColumn:y,sortReverse:b,setSortReverse:j,toggleSortColumn:S,visibleColumns:_,setVisibleColumns:v,controlsVisible:p,showControls:h,hideControls:C})},it=qr(pj),_f={isOpen:!1,cursor:void 0,selected:void 0};class Ea extends ka{componentDidMount(){this.mounted=!0,this.props.onLoad(this)}componentWillUnmount(){this.mounted=!1,this.props.onUnload(this)}onMouseEnter(){this.debug("onMouseEnter()"),this.setState({hasHover:!0},this.props.openOnHover?()=>{this.open(),this.focusTrigger()}:null)}onMouseLeave(){this.debug("onMouseLeave()"),this.setState({hasHover:!1},this.props.openOnHover?()=>this.closeSoon():null)}onFocus(){this.debug("onFocus()"),this.setState({hasFocus:!0},this.props.onFocus)}onBlur(){this.debug("onBlur()"),this.setState({hasFocus:!1},this.props.onBlur),this.closeSoon(!0)}onClick(){this.debug("onClick()"),this.state.isOpen?this.close():this.open()}open(t=this.cursorFirstIndex()){this.debug(`open(${t})`),this.setState({isOpen:!0,cursor:t},this.props.onOpen)}close(){this.debug("close()"),this.setState(_f,this.props.onClose)}closeSoon(t=!1){this.debug("closeSoon()"),wi(this.props.closeDelay).then(()=>{t||!this.state.hasHover?(console.log("closing"),this.close()):console.log(`NOT closing force:${t} hasHover:${this.state.hasHover}`)})}onKeyDown(t){switch(this.debug(`onKeyDown(${t.key})`),t.key){case g3:this.state.isOpen?this.setCursor(this.cursorNextIndex()):this.open(this.cursorFirstIndex());break;case x3:this.state.isOpen?this.setCursor(this.cursorPrevIndex()):this.open(this.cursorLastIndex());break;case v3:case VC:this.state.isOpen?this.selectCursor():this.open(this.cursorFirstIndex());break;case y3:this.close();break;default:console.log(`ignored key ${t.key}`);return}t.preventDefault()}menuOptions(){return this.props.options}cursorFirstIndex(){return zC(this.menuOptions())}cursorLastIndex(){return FC(this.menuOptions())}cursorNextIndex(){return UC(this.menuOptions(),this.state.cursor)}cursorPrevIndex(){return HC(this.menuOptions(),this.state.cursor)}setCursor(t){this.debug(`setCursor(${t})`),this.setState({cursor:t})}selectCursor(){this.debug("selectCursor()");const{cursor:t}=this.state,{options:n}=this.props;if(n&&n.length&&qe(t)){const r=n[t];this.debug(`selectCursor() ${t} =>`,r),this.selectOption(r)}else this.debug("Not selecting: cursor out of range")}selectOption(t){this.debug("selectOption()",t),this.setState(this.selectState(t),()=>this.props.onSelect(t)),this.closeSoon(!0)}selectState(t){return{selected:t}}triggerRef(t){this._triggerRef=t}focusTrigger(){this._triggerRef?(this.debug("focussing trigger"),this._triggerRef.focus()):this.debug("no trigger to focus")}menuRef(t){this._menuRef=t}activeRef(t){C3(this._menuRef,t)}}Re(Ea,"debug",!0),Re(Ea,"defaultProps",{options:[],openOnHover:!1,closeDelay:300,onLoad:at,onUnload:at,onFocus:at,onBlur:at,onClick:at,onOpen:at,onClose:at,onSelect:at}),Re(Ea,"initialState",{..._f});const qn=class qn extends Ea{};Re(qn,"debug",!1),Re(qn,"debugPrefix","Dropdown > "),Re(qn,"debugColor","MediumVioletRed"),Re(qn,"defaultProps",{...qn.defaultProps,options:[],displayOption:WC}),Re(qn,"actions",["onMouseEnter","onMouseLeave","onFocus","onBlur","onClick","onKeyDown","open","close","setCursor","selectCursor","selectOption","triggerRef","menuRef","activeRef"]);let Ou=qn;const ms=qr(Ou),fj=({triggerClass:e="trigger",triggerRef:t,onMouseEnter:n,onMouseLeave:r,onKeyDown:a,onFocus:s,onBlur:l,onClick:i,...c})=>o.jsx("div",{className:e,onClick:i,onMouseEnter:n,onMouseLeave:r,onKeyDown:a,onFocus:s,onBlur:l,tabIndex:0,ref:t,children:o.jsx(ki,{...Ny(c,/^(icon|text)/)})}),hj=ms.Consumer(fj),mj=({option:e,active:t,activeRef:n,selected:r,onClick:a,onMouseEnter:s,optionClass:l="item no-hover",activeClass:i="active",selectedClass:c="selected",disabledClass:u="disabled",displayOption:d})=>o.jsx("div",{className:Ne(l,e.className,t?i:null,r?c:null,e.disabled?u:null),onMouseEnter:s,onClick:a,ref:t?n:null,"aria-disabled":e.disabled,children:d(e)}),gj=ms.Consumer(mj),xj=({option:e,separatorClass:t="separator"})=>o.jsx("div",{className:Ne(t,e.className)}),vj=({option:e,optionClass:t="item no-hover",headingClass:n="heading"})=>o.jsx("h4",{className:Ne(n,t,e.className),children:e.heading}),yj=({options:e=[],menuRef:t,menuClass:n="menu border bdr-1",cursor:r,selected:a,selectOption:s,setCursor:l,onMouseEnter:i,onMouseLeave:c,Option:u=gj,Separator:d=xj,Heading:f=vj})=>o.jsx("div",{className:n,ref:t,onMouseEnter:i,onMouseLeave:c,children:e.map((g,y)=>g.separator?o.jsx(d,{option:g},y):g.heading?o.jsx(f,{option:g},y):o.jsx(u,{option:g,active:qe(r)&&e[r]===g,selected:a===g,onClick:()=>s(g),onMouseEnter:()=>l(y)},g.id??g.value??y))}),Cj=ms.Consumer(yj),jj=({className:e="dropdown",openClass:t="open",closedClass:n="closed",isOpen:r,right:a,size:s,wide:l,Trigger:i=hj,Menu:c=Cj})=>o.jsxs("div",{className:Ne(e,s,r?t:n,{right:a,wide:l}),children:[o.jsx(i,{}),r&&o.jsx(c,{})]}),bj=ms.Consumer(jj),Sj=({Content:e=bj,...t})=>o.jsx(ms.Provider,{...t,children:o.jsx(e,{})}),ct=xe(Sj,"Dropdown"),wj=({setPageSize:e,pageSizes:t=[10,25,50,100,250,500,1e3]})=>o.jsx(ct,{right:!0,iconRight:"angle-down",text:"Page Size",size:"small",options:t.map(n=>({n,text:`${n} per page`})),onSelect:n=>e(n.n)}),j3=it.Consumer(wj),_j=({headerClass:e})=>o.jsx("header",{className:e,children:o.jsxs("div",{className:"flex space middle",children:[o.jsx("div",{children:" "}),o.jsx("div",{children:o.jsx(j3,{})})]})}),Tj=it.Consumer(_j),kj=({column:e,name:t,value:n,cellClass:r,sortColumn:a,sortingClass:s="sorting"})=>{const l=a===t,i=Ne(r,e.className,l?s:null,e.right?"text-right":null);return o.jsx("td",{className:i,children:n})},Ej=it.Consumer(kj),Lj=({row:e,columns:t,visibleColumns:n,Cell:r=Ej})=>o.jsx("tr",{children:n.map(a=>{const s=t[a],l=s.field??a,i=e[l];return o.jsx(r,{row:e,name:a,field:l,column:s,value:i},a)})}),Nj=it.Consumer(Lj),Rj=({page:e,Row:t=Nj})=>o.jsx("tbody",{children:e.rows.map((n,r)=>o.jsx(t,{row:n},n.id??r))}),Oj=it.Consumer(Rj),Dj=({name:e,column:t,sortColumn:n,sortReverse:r,toggleSortColumn:a,sortUpIcon:s="arrow-up",sortDownIcon:l="arrow-down",unsortedIcon:i="arrows",sortIconClass:c="sort-icon",sortingClass:u="sorting",showFilters:d,toggleFilters:f,filters:g,filteringClass:y="filtering",filterIcon:b="filter",filteringIcon:j="filter-solid",filterIconClass:_="filter-icon",headingClass:v="heading",rightClass:p="right"})=>{const m=e===n,h=m&&r,C=qe(g[e]);return o.jsx("th",{className:Ne(v,t.right?p:null,d?y:null,C?y:null,m?u:null),onClick:()=>a(e),children:o.jsxs("div",{className:"flex space middle",children:[o.jsx("span",{className:"label",children:t.label}),o.jsxs("div",{className:"flex gap-1",children:[o.jsx(Q,{className:_,name:C?j:b,onClick:f}),o.jsx(Q,{className:c,name:m?h?s:l:i})]})]})})},Mj=it.Consumer(Dj),Aj=({columns:e,headingsClass:t="headings",visibleColumns:n,Heading:r=Mj})=>o.jsx("thead",{children:o.jsx("tr",{className:t,children:n.map(a=>o.jsx(r,{name:a,column:e[a]},a))})}),Pj=it.Consumer(Aj),$j=({name:e,filters:t,setFilter:n,filterClass:r="filter",filteringClass:a="filtering",clearFilterIcon:s="cross"})=>o.jsx("th",{className:Ne(r,qe(t[e])?a:null),children:o.jsxs("div",{className:"flex space middle gap-1",children:[o.jsx("input",{type:"text",value:t[e]??"",onChange:l=>n(e,l.target.value)}),o.jsx(Q,{name:s,onClick:()=>n(e,null)})]})}),Ij=it.Consumer($j),Bj=({columns:e,filtersClass:t="filters",visibleColumns:n,Filter:r=Ij})=>o.jsx("thead",{children:o.jsx("tr",{className:t,children:n.map(a=>o.jsx(r,{name:a,column:e[a]},a))})}),zj=it.Consumer(Bj),Fj=({tableClass:e="celled striped table",selectableClass:t="selectable",scrollX:n,rowClick:r,showFilters:a,Headings:s=Pj,Filters:l=zj,Rows:i=Oj})=>o.jsxs("table",{className:Ne(e,n?"nowrap":"wide",{[t]:r}),children:[o.jsx(s,{}),a&&o.jsx(l,{}),o.jsx(i,{})]}),Uj=it.Consumer(Fj),Hj=({scrollX:e,Table:t=Uj})=>o.jsx("div",{className:e?"scroll-x":"",children:o.jsx(t,{})}),Vj=it.Consumer(Hj),Wj=({page:e=0,pages:t,buttonClass:n="outline",pageClass:r=n,currentPageClass:a="solid",render:s,...l})=>{const u=t-1,d=t,f=e+1,g=e>0?e-1:null,y=qe(g)?g+1:null,b=e<u?e+1:null,j=qe(b)?b+1:null;return s({page:e,pageNo:f,firstPage:0,firstPageNo:1,lastPage:u,lastPageNo:d,pages:t,prevPage:g,prevPageNo:y,nextPage:b,nextPageNo:j,buttonClass:n,pageClass:r,currentPageClass:a,...l})},Sr=qr(Wj),Zj=Sr.Use,Kj=({prevPage:e,setPage:t,buttonClass:n,prevClass:r=n,prevIcon:a="arrow-left"})=>o.jsx(M,{className:r,icon:a,onClick:()=>t(e),disabled:ip(e)}),Gj=Sr.Consumer(Kj),Yj=({nextPage:e,setPage:t,buttonClass:n,nextClass:r=n,nextIcon:a="arrow-right"})=>o.jsx(M,{className:r,icon:a,onClick:()=>t(e),disabled:!e}),Xj=Sr.Consumer(Yj),Qj=({pageNo:e,text:t=e,buttonClass:n,className:r=n,onClick:a})=>o.jsx(M,{text:t,className:r,onClick:a}),qj=Sr.Consumer(Qj),Jj=o.jsx(o.Fragment,{children:"…"}),eb=({pageSeparatorClass:e="separator",pageSeparator:t=Jj})=>o.jsx("div",{className:e,children:t}),tb=Sr.Consumer(eb),nb=({page:e,pageNo:t,firstPage:n,firstPageNo:r,prevPage:a,prevPageNo:s,nextPage:l,nextPageNo:i,lastPage:c,lastPageNo:u,setPage:d,pagesClass:f="pages",buttonClass:g,pageClass:y=g,currentPageClass:b="brand",showFirstLast:j=!0,Separator:_=tb,Page:v=qj})=>o.jsxs("div",{className:f,children:[j&&a>n&&o.jsxs(o.Fragment,{children:[o.jsx(v,{page:n,pageNo:r,className:y,onClick:()=>d(n)}),a>n+1&&o.jsx(_,{})]}),qe(a)&&o.jsx(v,{page:a,pageNo:s,className:y,onClick:()=>d(a)}),o.jsx(v,{page:e,pageNo:t,className:b,current:!0,disabled:!0}),qe(l)&&o.jsx(v,{page:l,pageNo:i,className:y,onClick:()=>d(l)}),j&&l&&l<c&&o.jsxs(o.Fragment,{children:[l<c-1&&o.jsx(_,{}),o.jsx(v,{page:c,pageNo:u,className:y,onClick:()=>d(c)})]})]}),rb=Sr.Consumer(nb),ob=({className:e="pager",size:t,color:n,Previous:r=Gj,Next:a=Xj,Pages:s=rb})=>o.jsxs("div",{className:Ne(e,t,n),children:[o.jsx(r,{}),o.jsx(s,{}),o.jsx(a,{})]}),ab=Sr.Consumer(ob),sb=({Content:e=ab,...t})=>o.jsx(Sr.Provider,{...t,children:o.jsx(e,{})}),zt=xe(sb,"Pager"),lb=({footerClass:e,pager:t={},page:n,setPageNo:r,sortColumn:a})=>o.jsxs("footer",{className:e,children:[o.jsx(zt,{page:n.page,pages:n.pages,setPage:s=>r(s+1),...t}),"sortColumn: ",a]}),ib=it.Consumer(lb),cb=({sortColumn:e,setSortColumn:t,sortReverse:n,setSortReverse:r,columns:a})=>o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Sort By"}),o.jsx(gs,{wide:!0,value:e,options:Object.entries(a).map(([s,{label:l}])=>({id:s,label:l})),onSelect:s=>t(s.id)})]}),o.jsx("div",{className:"field pad-t-label",children:o.jsx(In,{text:"Descending",checked:n,onChange:r,disabled:ip(e)})})]}),ub=it.Consumer(cb),db=({controlsVisible:e,hideControls:t})=>o.jsxs(on,{open:e,close:t,children:[o.jsx("header",{children:o.jsx("h3",{children:"Data Table Controls"})}),o.jsxs("div",{className:"grid-3 gap-4",children:[o.jsx(j3,{}),o.jsx(ub,{})]}),o.jsx("footer",{className:"text-right",children:o.jsx(M,{text:"OK",onClick:t})})]}),pb=it.Consumer(db),fb=({color:e,className:t="datatable",Header:n=Tj,Body:r=Vj,Footer:a=ib,Controls:s=pb})=>o.jsxs("section",{className:Ne(t,e),children:[o.jsx(n,{}),o.jsx(r,{}),o.jsx(a,{}),o.jsx(s,{})]}),hb=it.Consumer(fb),mb=({Content:e=hb,...t})=>o.jsx(it.Provider,{...t,children:o.jsx(e,{})}),gb=xe(mb,"Datatable"),xb=({summary:e,summaryClass:t})=>o.jsx("summary",{className:t,children:e}),vb=({content:e,children:t,contentClass:n})=>o.jsx("div",{className:n,children:e||t}),yb=({className:e,size:t,color:n,lined:r,border:a,radius:s,shaded:l,shadow:i,open:c,Summary:u=xb,Content:d=vb,...f})=>o.jsxs("details",{className:Ne(e,n,hp(a),gp(s),mp(i),{size:t,color:n,lined:r,shaded:l}),open:c,children:[o.jsx(u,{...f}),o.jsx(d,{...f})]}),Ke=xe(yb,"Details"),Cb=({close:e,icon:t="cross",className:n="close"})=>o.jsx("div",{className:n,onClick:e,children:o.jsx(Q,{name:t})}),jb=xe(Cb,"ModalClose"),bb=({title:e,header:t})=>e||t?o.jsxs("header",{children:[!!e&&o.jsx("h3",{children:e}),t]}):null,Sb=xe(bb,"ModalHeader"),wb=({footer:e})=>!!e&&o.jsx("footer",{children:e}),_b=xe(wb,"ModalFooter"),Tb=({text:e,children:t,Header:n=Sb,Footer:r=_b,...a})=>o.jsxs("article",{children:[o.jsx(n,{...a}),e||t,o.jsx(r,{...a})]}),kb=xe(Tb,"ModalContent"),Eb=({ref:e,open:t,close:n,className:r,closeClass:a="close",closeIcon:s="cross",Close:l=jb,Content:i=kb,...c})=>(e||(e=x.useRef(null)),x.useEffect(()=>{const{current:u}=e;t?u.showModal():u.close()},[t]),o.jsxs("dialog",{ref:e,className:r,children:[!!n&&o.jsx(l,{close:n,icon:s,className:a}),o.jsx(i,{...c})]})),on=xe(Eb,"Modal"),Lb=({open:e=!1}={})=>{const{isVisible:t,show:n,hide:r}=br({visible:e});return{show:n,hide:r,Modal:a=>o.jsx(on,{open:t,...a})}},Nb=({color:e,className:t,style:n,fixed:r,light:a,dark:s,children:l})=>o.jsx("div",{className:Ne("overlay",t,e,{fixed:r,light:a,dark:s}),style:n,children:l}),Bo=xe(Nb,"Overlay"),Rb=({open:e=!1}={})=>{const{isVisible:t,show:n,hide:r}=br({visible:e});return{show:n,hide:r,Overlay:a=>t&&o.jsx(Bo,{...a})}},Ob=({className:e,disabled:t,children:n})=>o.jsx("label",{className:Ne(e,{disabled:t}),children:n}),Db=xe(Ob,"RadioLabel"),Mb=({name:e,option:t,tabIndex:n=0,onChange:r=at,checked:a})=>o.jsx("input",{type:"radio",name:e,disabled:t.disabled,"aria-disabled":t.disabled,tabIndex:t.disabled?-1:n,onChange:s=>r(s.target.checked),checked:a}),Ab=xe(Mb,"RadioInput"),Pb=({name:e,option:t,checked:n,inline:r,border:a,labelClass:s="radio",inputClass:l,Label:i=Db,Input:c=Ab,onChange:u})=>o.jsxs(i,{className:Ne(s,t.labelClass,{inline:r,border:a}),disabled:t.disabled,option:t,children:[o.jsx(c,{name:e,option:t,checked:n,className:Ne(l,t.inputClass),onChange:()=>u(t.value)}),t.text??t.label??t.name]}),$b=xe(Pb,"RadioOption"),Ib=({value:e,options:t,className:n="radioset",disabled:r,Option:a=$b,...s})=>o.jsx("div",{className:Ne(n,{disabled:r}),children:t.map(l=>{const i=us(l)?l:{value:l,label:l};return o.jsx(a,{option:i,checked:i.value===e,value:e,...s},i.value)})}),Dn=xe(Ib,"Radio"),yc={searching:!1,search:void 0,results:void 0,result:void 0,cursor:void 0};class Kn extends ka{constructor(t){super(t);const n=this.inputValue();this.state={...this.state,input:n,searching:!1},this.startSearch=t.debounceTime?Oy(this.search.bind(this),t.debounceTime):this.search.bind(this)}componentDidMount(){this.mounted=!0,this.props.onLoad(this)}componentWillUnmount(){this.setState({results:null}),this.mounted=!1,this.props.onUnload(this)}inputValue(t=this.props.initialValue){return qe(t)?this.props.displayValue(t):m3}onFocus(){this.debug("onFocus()"),this.setState({hasFocus:!0},this.props.onFocus)}onBlur(){this.debug("onBlur()"),this.setState({hasFocus:!1},this.props.onBlur),wi(500).then(()=>this.clearResults())}onChange(t){const n=t.target.value;this.debug(`input: ${n}`),n.length>=this.props.minLength?this.setState({input:n},this.startSearch):this.setState({input:n,...yc})}onKeyDown(t){this.debug(`onKeyDown(${t.key})`);const n=this.state.cursor;switch(t.key){case g3:this.setCursor(n+1);break;case x3:this.setCursor(n-1);break;case v3:this.selectCursor();break;case y3:this.reset();break;default:return}t.preventDefault()}reset(){this.debug("reset()");const t=this.props.initialValue,n=this.inputValue(t);this.debug(`reset() [input:${n}] from value: `,t),this.setState({value:t,input:n,...yc},this.props.onReset)}search(){const{input:t}=this.state,{minLength:n,onSearch:r}=this.props;if(t.length<n){this.debug(`search() cancelled - input is shorter than ${n}`);return}if(!r){this.debug("search() cancelled - no onSearch() handler defined");return}this.debug("onSearch: ",r),this.setState({search:t,searching:!0},async()=>this.searchResults(await r(t,this)))}searchResults(t){this.debug("searchResults()",t),this.setState({results:t,searching:!1,cursor:0})}selectResult(t){this.debug("selectResult()",t);const n=this.inputValue(t);this.setState({value:t,input:n,...yc},()=>this.props.onSelect(t))}setCursor(t){this.debug(`setCursor(${t})`);const{results:n}=this.state;this.setState({cursor:n&&n.length?(t+n.length)%n.length:void 0})}selectCursor(){const{cursor:t,results:n}=this.state;n&&n.length&&qe(t)&&this.selectResult(n[t])}clearResults(){this.mounted&&this.setState({results:null})}resultsRef(t){this._resultsRef=t}activeRef(t){C3(this._resultsRef,t)}}Re(Kn,"debug",!1),Re(Kn,"debugPrefix","Search > "),Re(Kn,"debugColor","MediumVioletRed"),Re(Kn,"defaultProps",{minLength:2,debounceTime:500,onLoad:at,onUnload:at,onFocus:at,onBlur:at,onReset:at,onSelect:at,displayValue:Xl("displayValue"),displayResult:Xl("displayResult")}),Re(Kn,"initialState",{value:"",searching:!1}),Re(Kn,"initialProps",{value:"initialValue"}),Re(Kn,"actions",["onFocus","onBlur","onChange","onKeyDown","reset","selectResult","setCursor","selectCursor","resultsRef","activeRef"]);const zo=qr(Kn),Bb=({input:e,onFocus:t,onBlur:n,onChange:r,reset:a,placeholder:s="Search",clearIcon:l="cross",searchIcon:i="search",searchingIcon:c="cog.spin",inputsClass:u="inputs round",prefixClass:d="prefix",suffixClass:f="suffix",inputType:g="text",inputClass:y="",disabled:b,searching:j})=>o.jsxs("div",{className:u,children:[o.jsx("div",{className:d,children:o.jsx(Q,{name:i})}),o.jsx("input",{type:g,placeholder:s,value:e,onFocus:t,onBlur:n,onChange:r,disabled:b,className:y}),o.jsx("div",{className:f,onClick:a,children:o.jsx(Q,{name:j?c:l})})]}),zb=zo.Consumer(Bb),Fb=({result:e,active:t,activeRef:n,onClick:r,onMouseEnter:a,displayResult:s,resultClass:l="item",activeClass:i="active"})=>o.jsx("div",{className:Ne(l,{[i]:t}),onClick:r,onMouseEnter:a,ref:t?n:null,children:s(e)}),Ub=zo.Consumer(Fb),Hb=({noResultsClass:e="none",noResults:t="No results"})=>o.jsx("div",{className:e,children:t}),Vb=zo.Consumer(Hb),Wb=({results:e,resultsRef:t,cursor:n,selectResult:r,setCursor:a,resultsClass:s="menu border bdr-1",Result:l=Ub,NoResults:i=Vb})=>o.jsx("div",{className:s,ref:t,children:Io(e)&&e.length?e.map((c,u)=>o.jsx(l,{result:c,active:qe(n)&&e[n]===c,onClick:()=>r(c),onMouseEnter:()=>a(u)},c.id??c.value??u)):o.jsx(i,{})}),Zb=zo.Consumer(Wb),Kb=({results:e,onKeyDown:t,Input:n=zb,Results:r=Zb})=>o.jsxs("div",{className:"search",onKeyDown:t,children:[o.jsx(n,{}),!!e&&o.jsx(r,{})]}),Gb=zo.Consumer(Kb),Yb=({Content:e=Gb,...t})=>o.jsx(zo.Provider,{...t,children:o.jsx(e,{})}),Li=xe(Yb,"Search"),Xb={value:m3,isOpen:!1,cursor:void 0,selected:void 0},un=class un extends Ea{constructor(t){super(t);const n=this.inputValue();this.state={...this.state,input:n}}inputValue(t=this.props.initialValue){return qe(t)?this.props.displayValue(t):null}selectState(t){const n=this.inputValue(t);return{value:t,input:n,selected:t}}};Re(un,"debug",!1),Re(un,"debugPrefix","Select > "),Re(un,"debugColor","MediumVioletRed"),Re(un,"defaultProps",{...un.defaultProps,options:[],displayValue:Xl("displayValue"),displayOption:Xl("displayOption")}),Re(un,"initialState",{...Xb}),Re(un,"initialProps",{value:"initialValue"}),Re(un,"actions",["onFocus","onBlur","onClick","onKeyDown","open","close","setCursor","selectCursor","selectOption","menuRef","activeRef"]);let Du=un;const Fo=qr(Du),Qb=({input:e,onFocus:t,onBlur:n,onClick:r,placeholder:a="Select",placeholderClass:s="placeholder",inputsClass:l="inputs",inputClass:i="input",suffixClass:c="suffix",disabled:u})=>o.jsxs("div",{className:l,onClick:r,children:[o.jsx("div",{onFocus:t,onBlur:n,disabled:u,className:i,tabIndex:0,children:qe(e)?o.jsx(o.Fragment,{children:e}):o.jsx("span",{className:s,children:a})}),o.jsx("div",{className:c,children:o.jsx(Q,{name:"angle-down"})})]}),qb=Fo.Consumer(Qb),Jb=({option:e,active:t,activeRef:n,selected:r,onClick:a,onMouseEnter:s,displayOption:l,optionClass:i="item no-hover",activeClass:c="active",selectedClass:u="selected",disabledClass:d="disabled"})=>o.jsx("div",{className:Ne(i,e.className,t?c:null,r?u:null,e.disabled?d:null),onMouseEnter:s,onClick:a,ref:t?n:null,"aria-disabled":e.disabled,children:l(e)}),eS=Fo.Consumer(Jb),tS=({noOptionsClass:e="none",noOptions:t="No options"})=>o.jsx("div",{className:e,children:t}),nS=Fo.Consumer(tS),rS=({options:e,menuRef:t,menuClass:n="menu border bdr-1",cursor:r,selected:a,selectOption:s,setCursor:l,Option:i=eS,NoOptions:c=nS})=>o.jsx("div",{className:n,ref:t,children:Io(e)&&e.length?e.map((u,d)=>o.jsx(i,{option:u,active:qe(r)&&e[r]===u,selected:a===u,onClick:()=>s(u),onMouseEnter:()=>l(d)},u.id??u.value??d)):o.jsx(c,{})}),oS=Fo.Consumer(rS),aS=({onKeyDown:e,isOpen:t,selectClass:n="select",openClass:r="open",closedClass:a="closed",Input:s=qb,Menu:l=oS})=>o.jsxs("div",{className:Ne(n,t?r:a),onKeyDown:e,children:[o.jsx(s,{}),!!t&&o.jsx(l,{})]}),sS=Fo.Consumer(aS),lS=({Content:e=sS,...t})=>o.jsx(Fo.Provider,{...t,children:o.jsx(e,{})}),gs=xe(lS,"Select");function iS(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return x.useMemo(()=>r=>{t.forEach(a=>a(r))},t)}const Ni=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Uo(e){const t=Object.prototype.toString.call(e);return t==="[object Window]"||t==="[object global]"}function xp(e){return"nodeType"in e}function gt(e){var t,n;return e?Uo(e)?e:xp(e)&&(t=(n=e.ownerDocument)==null?void 0:n.defaultView)!=null?t:window:window}function vp(e){const{Document:t}=gt(e);return e instanceof t}function xs(e){return Uo(e)?!1:e instanceof gt(e).HTMLElement}function b3(e){return e instanceof gt(e).SVGElement}function Ho(e){return e?Uo(e)?e.document:xp(e)?vp(e)?e:xs(e)||b3(e)?e.ownerDocument:document:document:document}const Ht=Ni?x.useLayoutEffect:x.useEffect;function Ri(e){const t=x.useRef(e);return Ht(()=>{t.current=e}),x.useCallback(function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return t.current==null?void 0:t.current(...r)},[])}function cS(){const e=x.useRef(null),t=x.useCallback((r,a)=>{e.current=setInterval(r,a)},[]),n=x.useCallback(()=>{e.current!==null&&(clearInterval(e.current),e.current=null)},[]);return[t,n]}function qa(e,t){t===void 0&&(t=[e]);const n=x.useRef(e);return Ht(()=>{n.current!==e&&(n.current=e)},t),n}function vs(e,t){const n=x.useRef();return x.useMemo(()=>{const r=e(n.current);return n.current=r,r},[...t])}function Ql(e){const t=Ri(e),n=x.useRef(null),r=x.useCallback(a=>{a!==n.current&&(t==null||t(a,n.current)),n.current=a},[]);return[n,r]}function ql(e){const t=x.useRef();return x.useEffect(()=>{t.current=e},[e]),t.current}let Cc={};function ys(e,t){return x.useMemo(()=>{if(t)return t;const n=Cc[e]==null?0:Cc[e]+1;return Cc[e]=n,e+"-"+n},[e,t])}function S3(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];return r.reduce((s,l)=>{const i=Object.entries(l);for(const[c,u]of i){const d=s[c];d!=null&&(s[c]=d+e*u)}return s},{...t})}}const wo=S3(1),Ja=S3(-1);function uS(e){return"clientX"in e&&"clientY"in e}function Oi(e){if(!e)return!1;const{KeyboardEvent:t}=gt(e.target);return t&&e instanceof t}function dS(e){if(!e)return!1;const{TouchEvent:t}=gt(e.target);return t&&e instanceof t}function Jl(e){if(dS(e)){if(e.touches&&e.touches.length){const{clientX:t,clientY:n}=e.touches[0];return{x:t,y:n}}else if(e.changedTouches&&e.changedTouches.length){const{clientX:t,clientY:n}=e.changedTouches[0];return{x:t,y:n}}}return uS(e)?{x:e.clientX,y:e.clientY}:null}const mr=Object.freeze({Translate:{toString(e){if(!e)return;const{x:t,y:n}=e;return"translate3d("+(t?Math.round(t):0)+"px, "+(n?Math.round(n):0)+"px, 0)"}},Scale:{toString(e){if(!e)return;const{scaleX:t,scaleY:n}=e;return"scaleX("+t+") scaleY("+n+")"}},Transform:{toString(e){if(e)return[mr.Translate.toString(e),mr.Scale.toString(e)].join(" ")}},Transition:{toString(e){let{property:t,duration:n,easing:r}=e;return t+" "+n+"ms "+r}}}),Tf="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function pS(e){return e.matches(Tf)?e:e.querySelector(Tf)}const fS={display:"none"};function hS(e){let{id:t,value:n}=e;return q.createElement("div",{id:t,style:fS},n)}function mS(e){let{id:t,announcement:n,ariaLiveType:r="assertive"}=e;const a={position:"fixed",width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"};return q.createElement("div",{id:t,style:a,role:"status","aria-live":r,"aria-atomic":!0},n)}function gS(){const[e,t]=x.useState("");return{announce:x.useCallback(r=>{r!=null&&t(r)},[]),announcement:e}}const w3=x.createContext(null);function xS(e){const t=x.useContext(w3);x.useEffect(()=>{if(!t)throw new Error("useDndMonitor must be used within a children of <DndContext>");return t(e)},[e,t])}function vS(){const[e]=x.useState(()=>new Set),t=x.useCallback(r=>(e.add(r),()=>e.delete(r)),[e]);return[x.useCallback(r=>{let{type:a,event:s}=r;e.forEach(l=>{var i;return(i=l[a])==null?void 0:i.call(l,s)})},[e]),t]}const yS={draggable:`
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `},CS={onDragStart(e){let{active:t}=e;return"Picked up draggable item "+t.id+"."},onDragOver(e){let{active:t,over:n}=e;return n?"Draggable item "+t.id+" was moved over droppable area "+n.id+".":"Draggable item "+t.id+" is no longer over a droppable area."},onDragEnd(e){let{active:t,over:n}=e;return n?"Draggable item "+t.id+" was dropped over droppable area "+n.id:"Draggable item "+t.id+" was dropped."},onDragCancel(e){let{active:t}=e;return"Dragging was cancelled. Draggable item "+t.id+" was dropped."}};function jS(e){let{announcements:t=CS,container:n,hiddenTextDescribedById:r,screenReaderInstructions:a=yS}=e;const{announce:s,announcement:l}=gS(),i=ys("DndLiveRegion"),[c,u]=x.useState(!1);if(x.useEffect(()=>{u(!0)},[]),xS(x.useMemo(()=>({onDragStart(f){let{active:g}=f;s(t.onDragStart({active:g}))},onDragMove(f){let{active:g,over:y}=f;t.onDragMove&&s(t.onDragMove({active:g,over:y}))},onDragOver(f){let{active:g,over:y}=f;s(t.onDragOver({active:g,over:y}))},onDragEnd(f){let{active:g,over:y}=f;s(t.onDragEnd({active:g,over:y}))},onDragCancel(f){let{active:g,over:y}=f;s(t.onDragCancel({active:g,over:y}))}}),[s,t])),!c)return null;const d=q.createElement(q.Fragment,null,q.createElement(hS,{id:r,value:a.draggable}),q.createElement(mS,{id:i,announcement:l}));return n?Or.createPortal(d,n):d}var We;(function(e){e.DragStart="dragStart",e.DragMove="dragMove",e.DragEnd="dragEnd",e.DragCancel="dragCancel",e.DragOver="dragOver",e.RegisterDroppable="registerDroppable",e.SetDroppableDisabled="setDroppableDisabled",e.UnregisterDroppable="unregisterDroppable"})(We||(We={}));function ei(){}function kf(e,t){return x.useMemo(()=>({sensor:e,options:t??{}}),[e,t])}function bS(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return x.useMemo(()=>[...t].filter(r=>r!=null),[...t])}const rn=Object.freeze({x:0,y:0});function _3(e,t){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function SS(e,t){const n=Jl(e);if(!n)return"0 0";const r={x:(n.x-t.left)/t.width*100,y:(n.y-t.top)/t.height*100};return r.x+"% "+r.y+"%"}function T3(e,t){let{data:{value:n}}=e,{data:{value:r}}=t;return n-r}function wS(e,t){let{data:{value:n}}=e,{data:{value:r}}=t;return r-n}function Ef(e){let{left:t,top:n,height:r,width:a}=e;return[{x:t,y:n},{x:t+a,y:n},{x:t,y:n+r},{x:t+a,y:n+r}]}function k3(e,t){if(!e||e.length===0)return null;const[n]=e;return t?n[t]:n}function Lf(e,t,n){return t===void 0&&(t=e.left),n===void 0&&(n=e.top),{x:t+e.width*.5,y:n+e.height*.5}}const _S=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:r}=e;const a=Lf(t,t.left,t.top),s=[];for(const l of r){const{id:i}=l,c=n.get(i);if(c){const u=_3(Lf(c),a);s.push({id:i,data:{droppableContainer:l,value:u}})}}return s.sort(T3)},TS=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:r}=e;const a=Ef(t),s=[];for(const l of r){const{id:i}=l,c=n.get(i);if(c){const u=Ef(c),d=a.reduce((g,y,b)=>g+_3(u[b],y),0),f=Number((d/4).toFixed(4));s.push({id:i,data:{droppableContainer:l,value:f}})}}return s.sort(T3)};function kS(e,t){const n=Math.max(t.top,e.top),r=Math.max(t.left,e.left),a=Math.min(t.left+t.width,e.left+e.width),s=Math.min(t.top+t.height,e.top+e.height),l=a-r,i=s-n;if(r<a&&n<s){const c=t.width*t.height,u=e.width*e.height,d=l*i,f=d/(c+u-d);return Number(f.toFixed(4))}return 0}const ES=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:r}=e;const a=[];for(const s of r){const{id:l}=s,i=n.get(l);if(i){const c=kS(i,t);c>0&&a.push({id:l,data:{droppableContainer:s,value:c}})}}return a.sort(wS)};function LS(e,t,n){return{...e,scaleX:t&&n?t.width/n.width:1,scaleY:t&&n?t.height/n.height:1}}function E3(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:rn}function NS(e){return function(n){for(var r=arguments.length,a=new Array(r>1?r-1:0),s=1;s<r;s++)a[s-1]=arguments[s];return a.reduce((l,i)=>({...l,top:l.top+e*i.y,bottom:l.bottom+e*i.y,left:l.left+e*i.x,right:l.right+e*i.x}),{...n})}}const RS=NS(1);function L3(e){if(e.startsWith("matrix3d(")){const t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}else if(e.startsWith("matrix(")){const t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}function OS(e,t,n){const r=L3(t);if(!r)return e;const{scaleX:a,scaleY:s,x:l,y:i}=r,c=e.left-l-(1-a)*parseFloat(n),u=e.top-i-(1-s)*parseFloat(n.slice(n.indexOf(" ")+1)),d=a?e.width/a:e.width,f=s?e.height/s:e.height;return{width:d,height:f,top:u,right:c+d,bottom:u+f,left:c}}const DS={ignoreTransform:!1};function Vo(e,t){t===void 0&&(t=DS);let n=e.getBoundingClientRect();if(t.ignoreTransform){const{transform:u,transformOrigin:d}=gt(e).getComputedStyle(e);u&&(n=OS(n,u,d))}const{top:r,left:a,width:s,height:l,bottom:i,right:c}=n;return{top:r,left:a,width:s,height:l,bottom:i,right:c}}function Nf(e){return Vo(e,{ignoreTransform:!0})}function MS(e){const t=e.innerWidth,n=e.innerHeight;return{top:0,left:0,right:t,bottom:n,width:t,height:n}}function AS(e,t){return t===void 0&&(t=gt(e).getComputedStyle(e)),t.position==="fixed"}function PS(e,t){t===void 0&&(t=gt(e).getComputedStyle(e));const n=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some(a=>{const s=t[a];return typeof s=="string"?n.test(s):!1})}function Di(e,t){const n=[];function r(a){if(t!=null&&n.length>=t||!a)return n;if(vp(a)&&a.scrollingElement!=null&&!n.includes(a.scrollingElement))return n.push(a.scrollingElement),n;if(!xs(a)||b3(a)||n.includes(a))return n;const s=gt(e).getComputedStyle(a);return a!==e&&PS(a,s)&&n.push(a),AS(a,s)?n:r(a.parentNode)}return e?r(e):n}function N3(e){const[t]=Di(e,1);return t??null}function jc(e){return!Ni||!e?null:Uo(e)?e:xp(e)?vp(e)||e===Ho(e).scrollingElement?window:xs(e)?e:null:null}function R3(e){return Uo(e)?e.scrollX:e.scrollLeft}function O3(e){return Uo(e)?e.scrollY:e.scrollTop}function Mu(e){return{x:R3(e),y:O3(e)}}var Xe;(function(e){e[e.Forward=1]="Forward",e[e.Backward=-1]="Backward"})(Xe||(Xe={}));function D3(e){return!Ni||!e?!1:e===document.scrollingElement}function M3(e){const t={x:0,y:0},n=D3(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth},r={x:e.scrollWidth-n.width,y:e.scrollHeight-n.height},a=e.scrollTop<=t.y,s=e.scrollLeft<=t.x,l=e.scrollTop>=r.y,i=e.scrollLeft>=r.x;return{isTop:a,isLeft:s,isBottom:l,isRight:i,maxScroll:r,minScroll:t}}const $S={x:.2,y:.2};function IS(e,t,n,r,a){let{top:s,left:l,right:i,bottom:c}=n;r===void 0&&(r=10),a===void 0&&(a=$S);const{isTop:u,isBottom:d,isLeft:f,isRight:g}=M3(e),y={x:0,y:0},b={x:0,y:0},j={height:t.height*a.y,width:t.width*a.x};return!u&&s<=t.top+j.height?(y.y=Xe.Backward,b.y=r*Math.abs((t.top+j.height-s)/j.height)):!d&&c>=t.bottom-j.height&&(y.y=Xe.Forward,b.y=r*Math.abs((t.bottom-j.height-c)/j.height)),!g&&i>=t.right-j.width?(y.x=Xe.Forward,b.x=r*Math.abs((t.right-j.width-i)/j.width)):!f&&l<=t.left+j.width&&(y.x=Xe.Backward,b.x=r*Math.abs((t.left+j.width-l)/j.width)),{direction:y,speed:b}}function BS(e){if(e===document.scrollingElement){const{innerWidth:s,innerHeight:l}=window;return{top:0,left:0,right:s,bottom:l,width:s,height:l}}const{top:t,left:n,right:r,bottom:a}=e.getBoundingClientRect();return{top:t,left:n,right:r,bottom:a,width:e.clientWidth,height:e.clientHeight}}function A3(e){return e.reduce((t,n)=>wo(t,Mu(n)),rn)}function zS(e){return e.reduce((t,n)=>t+R3(n),0)}function FS(e){return e.reduce((t,n)=>t+O3(n),0)}function P3(e,t){if(t===void 0&&(t=Vo),!e)return;const{top:n,left:r,bottom:a,right:s}=t(e);N3(e)&&(a<=0||s<=0||n>=window.innerHeight||r>=window.innerWidth)&&e.scrollIntoView({block:"center",inline:"center"})}const US=[["x",["left","right"],zS],["y",["top","bottom"],FS]];class yp{constructor(t,n){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;const r=Di(n),a=A3(r);this.rect={...t},this.width=t.width,this.height=t.height;for(const[s,l,i]of US)for(const c of l)Object.defineProperty(this,c,{get:()=>{const u=i(r),d=a[s]-u;return this.rect[c]+d},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}}class La{constructor(t){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach(n=>{var r;return(r=this.target)==null?void 0:r.removeEventListener(...n)})},this.target=t}add(t,n,r){var a;(a=this.target)==null||a.addEventListener(t,n,r),this.listeners.push([t,n,r])}}function HS(e){const{EventTarget:t}=gt(e);return e instanceof t?e:Ho(e)}function bc(e,t){const n=Math.abs(e.x),r=Math.abs(e.y);return typeof t=="number"?Math.sqrt(n**2+r**2)>t:"x"in t&&"y"in t?n>t.x&&r>t.y:"x"in t?n>t.x:"y"in t?r>t.y:!1}var At;(function(e){e.Click="click",e.DragStart="dragstart",e.Keydown="keydown",e.ContextMenu="contextmenu",e.Resize="resize",e.SelectionChange="selectionchange",e.VisibilityChange="visibilitychange"})(At||(At={}));function Rf(e){e.preventDefault()}function VS(e){e.stopPropagation()}var pe;(function(e){e.Space="Space",e.Down="ArrowDown",e.Right="ArrowRight",e.Left="ArrowLeft",e.Up="ArrowUp",e.Esc="Escape",e.Enter="Enter"})(pe||(pe={}));const $3={start:[pe.Space,pe.Enter],cancel:[pe.Esc],end:[pe.Space,pe.Enter]},WS=(e,t)=>{let{currentCoordinates:n}=t;switch(e.code){case pe.Right:return{...n,x:n.x+25};case pe.Left:return{...n,x:n.x-25};case pe.Down:return{...n,y:n.y+25};case pe.Up:return{...n,y:n.y-25}}};class Cp{constructor(t){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=t;const{event:{target:n}}=t;this.props=t,this.listeners=new La(Ho(n)),this.windowListeners=new La(gt(n)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(At.Resize,this.handleCancel),this.windowListeners.add(At.VisibilityChange,this.handleCancel),setTimeout(()=>this.listeners.add(At.Keydown,this.handleKeyDown))}handleStart(){const{activeNode:t,onStart:n}=this.props,r=t.node.current;r&&P3(r),n(rn)}handleKeyDown(t){if(Oi(t)){const{active:n,context:r,options:a}=this.props,{keyboardCodes:s=$3,coordinateGetter:l=WS,scrollBehavior:i="smooth"}=a,{code:c}=t;if(s.end.includes(c)){this.handleEnd(t);return}if(s.cancel.includes(c)){this.handleCancel(t);return}const{collisionRect:u}=r.current,d=u?{x:u.left,y:u.top}:rn;this.referenceCoordinates||(this.referenceCoordinates=d);const f=l(t,{active:n,context:r.current,currentCoordinates:d});if(f){const g=Ja(f,d),y={x:0,y:0},{scrollableAncestors:b}=r.current;for(const j of b){const _=t.code,{isTop:v,isRight:p,isLeft:m,isBottom:h,maxScroll:C,minScroll:S}=M3(j),w=BS(j),T={x:Math.min(_===pe.Right?w.right-w.width/2:w.right,Math.max(_===pe.Right?w.left:w.left+w.width/2,f.x)),y:Math.min(_===pe.Down?w.bottom-w.height/2:w.bottom,Math.max(_===pe.Down?w.top:w.top+w.height/2,f.y))},L=_===pe.Right&&!p||_===pe.Left&&!m,N=_===pe.Down&&!h||_===pe.Up&&!v;if(L&&T.x!==f.x){const P=j.scrollLeft+g.x,Y=_===pe.Right&&P<=C.x||_===pe.Left&&P>=S.x;if(Y&&!g.y){j.scrollTo({left:P,behavior:i});return}Y?y.x=j.scrollLeft-P:y.x=_===pe.Right?j.scrollLeft-C.x:j.scrollLeft-S.x,y.x&&j.scrollBy({left:-y.x,behavior:i});break}else if(N&&T.y!==f.y){const P=j.scrollTop+g.y,Y=_===pe.Down&&P<=C.y||_===pe.Up&&P>=S.y;if(Y&&!g.x){j.scrollTo({top:P,behavior:i});return}Y?y.y=j.scrollTop-P:y.y=_===pe.Down?j.scrollTop-C.y:j.scrollTop-S.y,y.y&&j.scrollBy({top:-y.y,behavior:i});break}}this.handleMove(t,wo(Ja(f,this.referenceCoordinates),y))}}}handleMove(t,n){const{onMove:r}=this.props;t.preventDefault(),r(n)}handleEnd(t){const{onEnd:n}=this.props;t.preventDefault(),this.detach(),n()}handleCancel(t){const{onCancel:n}=this.props;t.preventDefault(),this.detach(),n()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}}Cp.activators=[{eventName:"onKeyDown",handler:(e,t,n)=>{let{keyboardCodes:r=$3,onActivation:a}=t,{active:s}=n;const{code:l}=e.nativeEvent;if(r.start.includes(l)){const i=s.activatorNode.current;return i&&e.target!==i?!1:(e.preventDefault(),a==null||a({event:e.nativeEvent}),!0)}return!1}}];function Of(e){return!!(e&&"distance"in e)}function Df(e){return!!(e&&"delay"in e)}class jp{constructor(t,n,r){var a;r===void 0&&(r=HS(t.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=t,this.events=n;const{event:s}=t,{target:l}=s;this.props=t,this.events=n,this.document=Ho(l),this.documentListeners=new La(this.document),this.listeners=new La(r),this.windowListeners=new La(gt(l)),this.initialCoordinates=(a=Jl(s))!=null?a:rn,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){const{events:t,props:{options:{activationConstraint:n,bypassActivationConstraint:r}}}=this;if(this.listeners.add(t.move.name,this.handleMove,{passive:!1}),this.listeners.add(t.end.name,this.handleEnd),this.windowListeners.add(At.Resize,this.handleCancel),this.windowListeners.add(At.DragStart,Rf),this.windowListeners.add(At.VisibilityChange,this.handleCancel),this.windowListeners.add(At.ContextMenu,Rf),this.documentListeners.add(At.Keydown,this.handleKeydown),n){if(r!=null&&r({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(Df(n)){this.timeoutId=setTimeout(this.handleStart,n.delay);return}if(Of(n))return}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),this.timeoutId!==null&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handleStart(){const{initialCoordinates:t}=this,{onStart:n}=this.props;t&&(this.activated=!0,this.documentListeners.add(At.Click,VS,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(At.SelectionChange,this.removeTextSelection),n(t))}handleMove(t){var n;const{activated:r,initialCoordinates:a,props:s}=this,{onMove:l,options:{activationConstraint:i}}=s;if(!a)return;const c=(n=Jl(t))!=null?n:rn,u=Ja(a,c);if(!r&&i){if(Of(i)){if(i.tolerance!=null&&bc(u,i.tolerance))return this.handleCancel();if(bc(u,i.distance))return this.handleStart()}return Df(i)&&bc(u,i.tolerance)?this.handleCancel():void 0}t.cancelable&&t.preventDefault(),l(c)}handleEnd(){const{onEnd:t}=this.props;this.detach(),t()}handleCancel(){const{onCancel:t}=this.props;this.detach(),t()}handleKeydown(t){t.code===pe.Esc&&this.handleCancel()}removeTextSelection(){var t;(t=this.document.getSelection())==null||t.removeAllRanges()}}const ZS={move:{name:"pointermove"},end:{name:"pointerup"}};class bp extends jp{constructor(t){const{event:n}=t,r=Ho(n.target);super(t,ZS,r)}}bp.activators=[{eventName:"onPointerDown",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;return!n.isPrimary||n.button!==0?!1:(r==null||r({event:n}),!0)}}];const KS={move:{name:"mousemove"},end:{name:"mouseup"}};var Au;(function(e){e[e.RightClick=2]="RightClick"})(Au||(Au={}));class GS extends jp{constructor(t){super(t,KS,Ho(t.event.target))}}GS.activators=[{eventName:"onMouseDown",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;return n.button===Au.RightClick?!1:(r==null||r({event:n}),!0)}}];const Sc={move:{name:"touchmove"},end:{name:"touchend"}};class YS extends jp{constructor(t){super(t,Sc)}static setup(){return window.addEventListener(Sc.move.name,t,{capture:!1,passive:!1}),function(){window.removeEventListener(Sc.move.name,t)};function t(){}}}YS.activators=[{eventName:"onTouchStart",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;const{touches:a}=n;return a.length>1?!1:(r==null||r({event:n}),!0)}}];var Na;(function(e){e[e.Pointer=0]="Pointer",e[e.DraggableRect=1]="DraggableRect"})(Na||(Na={}));var ti;(function(e){e[e.TreeOrder=0]="TreeOrder",e[e.ReversedTreeOrder=1]="ReversedTreeOrder"})(ti||(ti={}));function XS(e){let{acceleration:t,activator:n=Na.Pointer,canScroll:r,draggingRect:a,enabled:s,interval:l=5,order:i=ti.TreeOrder,pointerCoordinates:c,scrollableAncestors:u,scrollableAncestorRects:d,delta:f,threshold:g}=e;const y=qS({delta:f,disabled:!s}),[b,j]=cS(),_=x.useRef({x:0,y:0}),v=x.useRef({x:0,y:0}),p=x.useMemo(()=>{switch(n){case Na.Pointer:return c?{top:c.y,bottom:c.y,left:c.x,right:c.x}:null;case Na.DraggableRect:return a}},[n,a,c]),m=x.useRef(null),h=x.useCallback(()=>{const S=m.current;if(!S)return;const w=_.current.x*v.current.x,T=_.current.y*v.current.y;S.scrollBy(w,T)},[]),C=x.useMemo(()=>i===ti.TreeOrder?[...u].reverse():u,[i,u]);x.useEffect(()=>{if(!s||!u.length||!p){j();return}for(const S of C){if((r==null?void 0:r(S))===!1)continue;const w=u.indexOf(S),T=d[w];if(!T)continue;const{direction:L,speed:N}=IS(S,T,p,t,g);for(const P of["x","y"])y[P][L[P]]||(N[P]=0,L[P]=0);if(N.x>0||N.y>0){j(),m.current=S,b(h,l),_.current=N,v.current=L;return}}_.current={x:0,y:0},v.current={x:0,y:0},j()},[t,h,r,j,s,l,JSON.stringify(p),JSON.stringify(y),b,u,C,d,JSON.stringify(g)])}const QS={x:{[Xe.Backward]:!1,[Xe.Forward]:!1},y:{[Xe.Backward]:!1,[Xe.Forward]:!1}};function qS(e){let{delta:t,disabled:n}=e;const r=ql(t);return vs(a=>{if(n||!r||!a)return QS;const s={x:Math.sign(t.x-r.x),y:Math.sign(t.y-r.y)};return{x:{[Xe.Backward]:a.x[Xe.Backward]||s.x===-1,[Xe.Forward]:a.x[Xe.Forward]||s.x===1},y:{[Xe.Backward]:a.y[Xe.Backward]||s.y===-1,[Xe.Forward]:a.y[Xe.Forward]||s.y===1}}},[n,t,r])}function JS(e,t){const n=t!==null?e.get(t):void 0,r=n?n.node.current:null;return vs(a=>{var s;return t===null?null:(s=r??a)!=null?s:null},[r,t])}function ew(e,t){return x.useMemo(()=>e.reduce((n,r)=>{const{sensor:a}=r,s=a.activators.map(l=>({eventName:l.eventName,handler:t(l.handler,r)}));return[...n,...s]},[]),[e,t])}var es;(function(e){e[e.Always=0]="Always",e[e.BeforeDragging=1]="BeforeDragging",e[e.WhileDragging=2]="WhileDragging"})(es||(es={}));var Pu;(function(e){e.Optimized="optimized"})(Pu||(Pu={}));const Mf=new Map;function tw(e,t){let{dragging:n,dependencies:r,config:a}=t;const[s,l]=x.useState(null),{frequency:i,measure:c,strategy:u}=a,d=x.useRef(e),f=_(),g=qa(f),y=x.useCallback(function(v){v===void 0&&(v=[]),!g.current&&l(p=>p===null?v:p.concat(v.filter(m=>!p.includes(m))))},[g]),b=x.useRef(null),j=vs(v=>{if(f&&!n)return Mf;if(!v||v===Mf||d.current!==e||s!=null){const p=new Map;for(let m of e){if(!m)continue;if(s&&s.length>0&&!s.includes(m.id)&&m.rect.current){p.set(m.id,m.rect.current);continue}const h=m.node.current,C=h?new yp(c(h),h):null;m.rect.current=C,C&&p.set(m.id,C)}return p}return v},[e,s,n,f,c]);return x.useEffect(()=>{d.current=e},[e]),x.useEffect(()=>{f||y()},[n,f]),x.useEffect(()=>{s&&s.length>0&&l(null)},[JSON.stringify(s)]),x.useEffect(()=>{f||typeof i!="number"||b.current!==null||(b.current=setTimeout(()=>{y(),b.current=null},i))},[i,f,y,...r]),{droppableRects:j,measureDroppableContainers:y,measuringScheduled:s!=null};function _(){switch(u){case es.Always:return!1;case es.BeforeDragging:return n;default:return!n}}}function Sp(e,t){return vs(n=>e?n||(typeof t=="function"?t(e):e):null,[t,e])}function nw(e,t){return Sp(e,t)}function rw(e){let{callback:t,disabled:n}=e;const r=Ri(t),a=x.useMemo(()=>{if(n||typeof window>"u"||typeof window.MutationObserver>"u")return;const{MutationObserver:s}=window;return new s(r)},[r,n]);return x.useEffect(()=>()=>a==null?void 0:a.disconnect(),[a]),a}function Mi(e){let{callback:t,disabled:n}=e;const r=Ri(t),a=x.useMemo(()=>{if(n||typeof window>"u"||typeof window.ResizeObserver>"u")return;const{ResizeObserver:s}=window;return new s(r)},[n]);return x.useEffect(()=>()=>a==null?void 0:a.disconnect(),[a]),a}function ow(e){return new yp(Vo(e),e)}function Af(e,t,n){t===void 0&&(t=ow);const[r,a]=x.useReducer(i,null),s=rw({callback(c){if(e)for(const u of c){const{type:d,target:f}=u;if(d==="childList"&&f instanceof HTMLElement&&f.contains(e)){a();break}}}}),l=Mi({callback:a});return Ht(()=>{a(),e?(l==null||l.observe(e),s==null||s.observe(document.body,{childList:!0,subtree:!0})):(l==null||l.disconnect(),s==null||s.disconnect())},[e]),r;function i(c){if(!e)return null;if(e.isConnected===!1){var u;return(u=c??n)!=null?u:null}const d=t(e);return JSON.stringify(c)===JSON.stringify(d)?c:d}}function aw(e){const t=Sp(e);return E3(e,t)}const Pf=[];function sw(e){const t=x.useRef(e),n=vs(r=>e?r&&r!==Pf&&e&&t.current&&e.parentNode===t.current.parentNode?r:Di(e):Pf,[e]);return x.useEffect(()=>{t.current=e},[e]),n}function lw(e){const[t,n]=x.useState(null),r=x.useRef(e),a=x.useCallback(s=>{const l=jc(s.target);l&&n(i=>i?(i.set(l,Mu(l)),new Map(i)):null)},[]);return x.useEffect(()=>{const s=r.current;if(e!==s){l(s);const i=e.map(c=>{const u=jc(c);return u?(u.addEventListener("scroll",a,{passive:!0}),[u,Mu(u)]):null}).filter(c=>c!=null);n(i.length?new Map(i):null),r.current=e}return()=>{l(e),l(s)};function l(i){i.forEach(c=>{const u=jc(c);u==null||u.removeEventListener("scroll",a)})}},[a,e]),x.useMemo(()=>e.length?t?Array.from(t.values()).reduce((s,l)=>wo(s,l),rn):A3(e):rn,[e,t])}function $f(e,t){t===void 0&&(t=[]);const n=x.useRef(null);return x.useEffect(()=>{n.current=null},t),x.useEffect(()=>{const r=e!==rn;r&&!n.current&&(n.current=e),!r&&n.current&&(n.current=null)},[e]),n.current?Ja(e,n.current):rn}function iw(e){x.useEffect(()=>{if(!Ni)return;const t=e.map(n=>{let{sensor:r}=n;return r.setup==null?void 0:r.setup()});return()=>{for(const n of t)n==null||n()}},e.map(t=>{let{sensor:n}=t;return n}))}function cw(e,t){return x.useMemo(()=>e.reduce((n,r)=>{let{eventName:a,handler:s}=r;return n[a]=l=>{s(l,t)},n},{}),[e,t])}function I3(e){return x.useMemo(()=>e?MS(e):null,[e])}const wc=[];function uw(e,t){t===void 0&&(t=Vo);const[n]=e,r=I3(n?gt(n):null),[a,s]=x.useReducer(i,wc),l=Mi({callback:s});return e.length>0&&a===wc&&s(),Ht(()=>{e.length?e.forEach(c=>l==null?void 0:l.observe(c)):(l==null||l.disconnect(),s())},[e]),a;function i(){return e.length?e.map(c=>D3(c)?r:new yp(t(c),c)):wc}}function B3(e){if(!e)return null;if(e.children.length>1)return e;const t=e.children[0];return xs(t)?t:e}function dw(e){let{measure:t}=e;const[n,r]=x.useState(null),a=x.useCallback(u=>{for(const{target:d}of u)if(xs(d)){r(f=>{const g=t(d);return f?{...f,width:g.width,height:g.height}:g});break}},[t]),s=Mi({callback:a}),l=x.useCallback(u=>{const d=B3(u);s==null||s.disconnect(),d&&(s==null||s.observe(d)),r(d?t(d):null)},[t,s]),[i,c]=Ql(l);return x.useMemo(()=>({nodeRef:i,rect:n,setRef:c}),[n,i,c])}const pw=[{sensor:bp,options:{}},{sensor:Cp,options:{}}],fw={current:{}},bl={draggable:{measure:Nf},droppable:{measure:Nf,strategy:es.WhileDragging,frequency:Pu.Optimized},dragOverlay:{measure:Vo}};class Ra extends Map{get(t){var n;return t!=null&&(n=super.get(t))!=null?n:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter(t=>{let{disabled:n}=t;return!n})}getNodeFor(t){var n,r;return(n=(r=this.get(t))==null?void 0:r.node.current)!=null?n:void 0}}const hw={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new Ra,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:ei},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:bl,measureDroppableContainers:ei,windowRect:null,measuringScheduled:!1},z3={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:ei,draggableNodes:new Map,over:null,measureDroppableContainers:ei},Cs=x.createContext(z3),F3=x.createContext(hw);function mw(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new Ra}}}function gw(e,t){switch(t.type){case We.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case We.DragMove:return e.draggable.active?{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}}:e;case We.DragEnd:case We.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case We.RegisterDroppable:{const{element:n}=t,{id:r}=n,a=new Ra(e.droppable.containers);return a.set(r,n),{...e,droppable:{...e.droppable,containers:a}}}case We.SetDroppableDisabled:{const{id:n,key:r,disabled:a}=t,s=e.droppable.containers.get(n);if(!s||r!==s.key)return e;const l=new Ra(e.droppable.containers);return l.set(n,{...s,disabled:a}),{...e,droppable:{...e.droppable,containers:l}}}case We.UnregisterDroppable:{const{id:n,key:r}=t,a=e.droppable.containers.get(n);if(!a||r!==a.key)return e;const s=new Ra(e.droppable.containers);return s.delete(n),{...e,droppable:{...e.droppable,containers:s}}}default:return e}}function xw(e){let{disabled:t}=e;const{active:n,activatorEvent:r,draggableNodes:a}=x.useContext(Cs),s=ql(r),l=ql(n==null?void 0:n.id);return x.useEffect(()=>{if(!t&&!r&&s&&l!=null){if(!Oi(s)||document.activeElement===s.target)return;const i=a.get(l);if(!i)return;const{activatorNode:c,node:u}=i;if(!c.current&&!u.current)return;requestAnimationFrame(()=>{for(const d of[c.current,u.current]){if(!d)continue;const f=pS(d);if(f){f.focus();break}}})}},[r,t,a,l,s]),null}function U3(e,t){let{transform:n,...r}=t;return e!=null&&e.length?e.reduce((a,s)=>s({transform:a,...r}),n):n}function vw(e){return x.useMemo(()=>({draggable:{...bl.draggable,...e==null?void 0:e.draggable},droppable:{...bl.droppable,...e==null?void 0:e.droppable},dragOverlay:{...bl.dragOverlay,...e==null?void 0:e.dragOverlay}}),[e==null?void 0:e.draggable,e==null?void 0:e.droppable,e==null?void 0:e.dragOverlay])}function yw(e){let{activeNode:t,measure:n,initialRect:r,config:a=!0}=e;const s=x.useRef(!1),{x:l,y:i}=typeof a=="boolean"?{x:a,y:a}:a;Ht(()=>{if(!l&&!i||!t){s.current=!1;return}if(s.current||!r)return;const u=t==null?void 0:t.node.current;if(!u||u.isConnected===!1)return;const d=n(u),f=E3(d,r);if(l||(f.x=0),i||(f.y=0),s.current=!0,Math.abs(f.x)>0||Math.abs(f.y)>0){const g=N3(u);g&&g.scrollBy({top:f.y,left:f.x})}},[t,l,i,r,n])}const Ai=x.createContext({...rn,scaleX:1,scaleY:1});var Qn;(function(e){e[e.Uninitialized=0]="Uninitialized",e[e.Initializing=1]="Initializing",e[e.Initialized=2]="Initialized"})(Qn||(Qn={}));const Cw=x.memo(function(t){var n,r,a,s;let{id:l,accessibility:i,autoScroll:c=!0,children:u,sensors:d=pw,collisionDetection:f=ES,measuring:g,modifiers:y,...b}=t;const j=x.useReducer(gw,void 0,mw),[_,v]=j,[p,m]=vS(),[h,C]=x.useState(Qn.Uninitialized),S=h===Qn.Initialized,{draggable:{active:w,nodes:T,translate:L},droppable:{containers:N}}=_,P=w?T.get(w):null,Y=x.useRef({initial:null,translated:null}),J=x.useMemo(()=>{var E;return w!=null?{id:w,data:(E=P==null?void 0:P.data)!=null?E:fw,rect:Y}:null},[w,P]),de=x.useRef(null),[ee,me]=x.useState(null),[oe,D]=x.useState(null),$=qa(b,Object.values(b)),B=ys("DndDescribedBy",l),H=x.useMemo(()=>N.getEnabled(),[N]),F=vw(g),{droppableRects:ve,measureDroppableContainers:ae,measuringScheduled:we}=tw(H,{dragging:S,dependencies:[L.x,L.y],config:F.droppable}),ce=JS(T,w),Ae=x.useMemo(()=>oe?Jl(oe):null,[oe]),nt=k(),fe=nw(ce,F.draggable.measure);yw({activeNode:w?T.get(w):null,config:nt.layoutShiftCompensation,initialRect:fe,measure:F.draggable.measure});const se=Af(ce,F.draggable.measure,fe),_t=Af(ce?ce.parentElement:null),xt=x.useRef({activatorEvent:null,active:null,activeNode:ce,collisionRect:null,collisions:null,droppableRects:ve,draggableNodes:T,draggingNode:null,draggingNodeRect:null,droppableContainers:N,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),Ge=N.getNodeFor((n=xt.current.over)==null?void 0:n.id),Wt=dw({measure:F.dragOverlay.measure}),zn=(r=Wt.nodeRef.current)!=null?r:ce,xn=S?(a=Wt.rect)!=null?a:se:null,Ts=!!(Wt.nodeRef.current&&Wt.rect),ks=aw(Ts?null:se),Zo=I3(zn?gt(zn):null),vt=sw(S?Ge??ce:null),_r=uw(vt),Fn=U3(y,{transform:{x:L.x-ks.x,y:L.y-ks.y,scaleX:1,scaleY:1},activatorEvent:oe,active:J,activeNodeRect:se,containerNodeRect:_t,draggingNodeRect:xn,over:xt.current.over,overlayNodeRect:Wt.rect,scrollableAncestors:vt,scrollableAncestorRects:_r,windowRect:Zo}),Un=Ae?wo(Ae,L):null,Tr=lw(vt),Ii=$f(Tr),an=$f(Tr,[se]),vn=wo(Fn,Ii),yn=xn?RS(xn,Fn):null,Hn=J&&yn?f({active:J,collisionRect:yn,droppableRects:ve,droppableContainers:H,pointerCoordinates:Un}):null,Es=k3(Hn,"id"),[Zt,kr]=x.useState(null),Ls=Ts?Fn:wo(Fn,an),Ko=LS(Ls,(s=Zt==null?void 0:Zt.rect)!=null?s:null,se),Ns=x.useCallback((E,R)=>{let{sensor:I,options:V}=R;if(de.current==null)return;const U=T.get(de.current);if(!U)return;const G=E.nativeEvent,W=new I({active:de.current,activeNode:U,event:G,options:V,context:xt,onStart(ne){const ye=de.current;if(ye==null)return;const te=T.get(ye);if(!te)return;const{onDragStart:ge}=$.current,Ee={active:{id:ye,data:te.data,rect:Y}};Or.unstable_batchedUpdates(()=>{ge==null||ge(Ee),C(Qn.Initializing),v({type:We.DragStart,initialCoordinates:ne,active:ye}),p({type:"onDragStart",event:Ee})})},onMove(ne){v({type:We.DragMove,coordinates:ne})},onEnd:Z(We.DragEnd),onCancel:Z(We.DragCancel)});Or.unstable_batchedUpdates(()=>{me(W),D(E.nativeEvent)});function Z(ne){return async function(){const{active:te,collisions:ge,over:Ee,scrollAdjustedTranslate:sn}=xt.current;let Tt=null;if(te&&sn){const{cancelDrop:Kt}=$.current;Tt={activatorEvent:G,active:te,collisions:ge,delta:sn,over:Ee},ne===We.DragEnd&&typeof Kt=="function"&&await Promise.resolve(Kt(Tt))&&(ne=We.DragCancel)}de.current=null,Or.unstable_batchedUpdates(()=>{v({type:ne}),C(Qn.Uninitialized),kr(null),me(null),D(null);const Kt=ne===We.DragEnd?"onDragEnd":"onDragCancel";if(Tt){const Er=$.current[Kt];Er==null||Er(Tt),p({type:Kt,event:Tt})}})}}},[T]),Rs=x.useCallback((E,R)=>(I,V)=>{const U=I.nativeEvent,G=T.get(V);if(de.current!==null||!G||U.dndKit||U.defaultPrevented)return;const W={active:G};E(I,R.options,W)===!0&&(U.dndKit={capturedBy:R.sensor},de.current=V,Ns(I,R))},[T,Ns]),Os=ew(d,Rs);iw(d),Ht(()=>{se&&h===Qn.Initializing&&C(Qn.Initialized)},[se,h]),x.useEffect(()=>{const{onDragMove:E}=$.current,{active:R,activatorEvent:I,collisions:V,over:U}=xt.current;if(!R||!I)return;const G={active:R,activatorEvent:I,collisions:V,delta:{x:vn.x,y:vn.y},over:U};Or.unstable_batchedUpdates(()=>{E==null||E(G),p({type:"onDragMove",event:G})})},[vn.x,vn.y]),x.useEffect(()=>{const{active:E,activatorEvent:R,collisions:I,droppableContainers:V,scrollAdjustedTranslate:U}=xt.current;if(!E||de.current==null||!R||!U)return;const{onDragOver:G}=$.current,W=V.get(Es),Z=W&&W.rect.current?{id:W.id,rect:W.rect.current,data:W.data,disabled:W.disabled}:null,ne={active:E,activatorEvent:R,collisions:I,delta:{x:U.x,y:U.y},over:Z};Or.unstable_batchedUpdates(()=>{kr(Z),G==null||G(ne),p({type:"onDragOver",event:ne})})},[Es]),Ht(()=>{xt.current={activatorEvent:oe,active:J,activeNode:ce,collisionRect:yn,collisions:Hn,droppableRects:ve,draggableNodes:T,draggingNode:zn,draggingNodeRect:xn,droppableContainers:N,over:Zt,scrollableAncestors:vt,scrollAdjustedTranslate:vn},Y.current={initial:xn,translated:yn}},[J,ce,Hn,yn,T,zn,xn,ve,N,Zt,vt,vn]),XS({...nt,delta:L,draggingRect:yn,pointerCoordinates:Un,scrollableAncestors:vt,scrollableAncestorRects:_r});const Ds=x.useMemo(()=>({active:J,activeNode:ce,activeNodeRect:se,activatorEvent:oe,collisions:Hn,containerNodeRect:_t,dragOverlay:Wt,draggableNodes:T,droppableContainers:N,droppableRects:ve,over:Zt,measureDroppableContainers:ae,scrollableAncestors:vt,scrollableAncestorRects:_r,measuringConfiguration:F,measuringScheduled:we,windowRect:Zo}),[J,ce,se,oe,Hn,_t,Wt,T,N,ve,Zt,ae,vt,_r,F,we,Zo]),Bi=x.useMemo(()=>({activatorEvent:oe,activators:Os,active:J,activeNodeRect:se,ariaDescribedById:{draggable:B},dispatch:v,draggableNodes:T,over:Zt,measureDroppableContainers:ae}),[oe,Os,J,se,v,B,T,Zt,ae]);return q.createElement(w3.Provider,{value:m},q.createElement(Cs.Provider,{value:Bi},q.createElement(F3.Provider,{value:Ds},q.createElement(Ai.Provider,{value:Ko},u)),q.createElement(xw,{disabled:(i==null?void 0:i.restoreFocus)===!1})),q.createElement(jS,{...i,hiddenTextDescribedById:B}));function k(){const E=(ee==null?void 0:ee.autoScrollEnabled)===!1,R=typeof c=="object"?c.enabled===!1:c===!1,I=S&&!E&&!R;return typeof c=="object"?{...c,enabled:I}:{enabled:I}}}),jw=x.createContext(null),If="button",bw="Droppable";function Sw(e){let{id:t,data:n,disabled:r=!1,attributes:a}=e;const s=ys(bw),{activators:l,activatorEvent:i,active:c,activeNodeRect:u,ariaDescribedById:d,draggableNodes:f,over:g}=x.useContext(Cs),{role:y=If,roleDescription:b="draggable",tabIndex:j=0}=a??{},_=(c==null?void 0:c.id)===t,v=x.useContext(_?Ai:jw),[p,m]=Ql(),[h,C]=Ql(),S=cw(l,t),w=qa(n);Ht(()=>(f.set(t,{id:t,key:s,node:p,activatorNode:h,data:w}),()=>{const L=f.get(t);L&&L.key===s&&f.delete(t)}),[f,t]);const T=x.useMemo(()=>({role:y,tabIndex:j,"aria-disabled":r,"aria-pressed":_&&y===If?!0:void 0,"aria-roledescription":b,"aria-describedby":d.draggable}),[r,y,j,_,b,d.draggable]);return{active:c,activatorEvent:i,activeNodeRect:u,attributes:T,isDragging:_,listeners:r?void 0:S,node:p,over:g,setNodeRef:m,setActivatorNodeRef:C,transform:v}}function H3(){return x.useContext(F3)}const ww="Droppable",_w={timeout:25};function Tw(e){let{data:t,disabled:n=!1,id:r,resizeObserverConfig:a}=e;const s=ys(ww),{active:l,dispatch:i,over:c,measureDroppableContainers:u}=x.useContext(Cs),d=x.useRef({disabled:n}),f=x.useRef(!1),g=x.useRef(null),y=x.useRef(null),{disabled:b,updateMeasurementsFor:j,timeout:_}={..._w,...a},v=qa(j??r),p=x.useCallback(()=>{if(!f.current){f.current=!0;return}y.current!=null&&clearTimeout(y.current),y.current=setTimeout(()=>{u(Array.isArray(v.current)?v.current:[v.current]),y.current=null},_)},[_]),m=Mi({callback:p,disabled:b||!l}),h=x.useCallback((T,L)=>{m&&(L&&(m.unobserve(L),f.current=!1),T&&m.observe(T))},[m]),[C,S]=Ql(h),w=qa(t);return x.useEffect(()=>{!m||!C.current||(m.disconnect(),f.current=!1,m.observe(C.current))},[C,m]),Ht(()=>(i({type:We.RegisterDroppable,element:{id:r,key:s,disabled:n,node:C,rect:g,data:w}}),()=>i({type:We.UnregisterDroppable,key:s,id:r})),[r]),x.useEffect(()=>{n!==d.current.disabled&&(i({type:We.SetDroppableDisabled,id:r,key:s,disabled:n}),d.current.disabled=n)},[r,s,n,i]),{active:l,rect:g,isOver:(c==null?void 0:c.id)===r,node:C,over:c,setNodeRef:S}}function kw(e){let{animation:t,children:n}=e;const[r,a]=x.useState(null),[s,l]=x.useState(null),i=ql(n);return!n&&!r&&i&&a(i),Ht(()=>{if(!s)return;const c=r==null?void 0:r.key,u=r==null?void 0:r.props.id;if(c==null||u==null){a(null);return}Promise.resolve(t(u,s)).then(()=>{a(null)})},[t,r,s]),q.createElement(q.Fragment,null,n,r?x.cloneElement(r,{ref:l}):null)}const Ew={x:0,y:0,scaleX:1,scaleY:1};function Lw(e){let{children:t}=e;return q.createElement(Cs.Provider,{value:z3},q.createElement(Ai.Provider,{value:Ew},t))}const Nw={position:"fixed",touchAction:"none"},Rw=e=>Oi(e)?"transform 250ms ease":void 0,Ow=x.forwardRef((e,t)=>{let{as:n,activatorEvent:r,adjustScale:a,children:s,className:l,rect:i,style:c,transform:u,transition:d=Rw}=e;if(!i)return null;const f=a?u:{...u,scaleX:1,scaleY:1},g={...Nw,width:i.width,height:i.height,top:i.top,left:i.left,transform:mr.Transform.toString(f),transformOrigin:a&&r?SS(r,i):void 0,transition:typeof d=="function"?d(r):d,...c};return q.createElement(n,{className:l,style:g,ref:t},s)}),Dw=e=>t=>{let{active:n,dragOverlay:r}=t;const a={},{styles:s,className:l}=e;if(s!=null&&s.active)for(const[i,c]of Object.entries(s.active))c!==void 0&&(a[i]=n.node.style.getPropertyValue(i),n.node.style.setProperty(i,c));if(s!=null&&s.dragOverlay)for(const[i,c]of Object.entries(s.dragOverlay))c!==void 0&&r.node.style.setProperty(i,c);return l!=null&&l.active&&n.node.classList.add(l.active),l!=null&&l.dragOverlay&&r.node.classList.add(l.dragOverlay),function(){for(const[c,u]of Object.entries(a))n.node.style.setProperty(c,u);l!=null&&l.active&&n.node.classList.remove(l.active)}},Mw=e=>{let{transform:{initial:t,final:n}}=e;return[{transform:mr.Transform.toString(t)},{transform:mr.Transform.toString(n)}]},Aw={duration:250,easing:"ease",keyframes:Mw,sideEffects:Dw({styles:{active:{opacity:"0"}}})};function Pw(e){let{config:t,draggableNodes:n,droppableContainers:r,measuringConfiguration:a}=e;return Ri((s,l)=>{if(t===null)return;const i=n.get(s);if(!i)return;const c=i.node.current;if(!c)return;const u=B3(l);if(!u)return;const{transform:d}=gt(l).getComputedStyle(l),f=L3(d);if(!f)return;const g=typeof t=="function"?t:$w(t);return P3(c,a.draggable.measure),g({active:{id:s,data:i.data,node:c,rect:a.draggable.measure(c)},draggableNodes:n,dragOverlay:{node:l,rect:a.dragOverlay.measure(u)},droppableContainers:r,measuringConfiguration:a,transform:f})})}function $w(e){const{duration:t,easing:n,sideEffects:r,keyframes:a}={...Aw,...e};return s=>{let{active:l,dragOverlay:i,transform:c,...u}=s;if(!t)return;const d={x:i.rect.left-l.rect.left,y:i.rect.top-l.rect.top},f={scaleX:c.scaleX!==1?l.rect.width*c.scaleX/i.rect.width:1,scaleY:c.scaleY!==1?l.rect.height*c.scaleY/i.rect.height:1},g={x:c.x-d.x,y:c.y-d.y,...f},y=a({...u,active:l,dragOverlay:i,transform:{initial:c,final:g}}),[b]=y,j=y[y.length-1];if(JSON.stringify(b)===JSON.stringify(j))return;const _=r==null?void 0:r({active:l,dragOverlay:i,...u}),v=i.node.animate(y,{duration:t,easing:n,fill:"forwards"});return new Promise(p=>{v.onfinish=()=>{_==null||_(),p()}})}}let Bf=0;function Iw(e){return x.useMemo(()=>{if(e!=null)return Bf++,Bf},[e])}const Bw=q.memo(e=>{let{adjustScale:t=!1,children:n,dropAnimation:r,style:a,transition:s,modifiers:l,wrapperElement:i="div",className:c,zIndex:u=999}=e;const{activatorEvent:d,active:f,activeNodeRect:g,containerNodeRect:y,draggableNodes:b,droppableContainers:j,dragOverlay:_,over:v,measuringConfiguration:p,scrollableAncestors:m,scrollableAncestorRects:h,windowRect:C}=H3(),S=x.useContext(Ai),w=Iw(f==null?void 0:f.id),T=U3(l,{activatorEvent:d,active:f,activeNodeRect:g,containerNodeRect:y,draggingNodeRect:_.rect,over:v,overlayNodeRect:_.rect,scrollableAncestors:m,scrollableAncestorRects:h,transform:S,windowRect:C}),L=Sp(g),N=Pw({config:r,draggableNodes:b,droppableContainers:j,measuringConfiguration:p}),P=L?_.setRef:void 0;return q.createElement(Lw,null,q.createElement(kw,{animation:N},f&&w?q.createElement(Ow,{key:w,id:f.id,ref:P,as:i,activatorEvent:d,adjustScale:t,className:c,transition:s,rect:L,style:{zIndex:u,...a},transform:T},n):null))});function wp(e,t,n){const r=e.slice();return r.splice(n<0?r.length+n:n,0,r.splice(t,1)[0]),r}function zw(e,t){return e.reduce((n,r,a)=>{const s=t.get(r);return s&&(n[a]=s),n},Array(e.length))}function rl(e){return e!==null&&e>=0}function Fw(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function Uw(e){return typeof e=="boolean"?{draggable:e,droppable:e}:e}const ol={scaleX:1,scaleY:1},Hw=e=>{var t;let{rects:n,activeNodeRect:r,activeIndex:a,overIndex:s,index:l}=e;const i=(t=n[a])!=null?t:r;if(!i)return null;const c=Vw(n,l,a);if(l===a){const u=n[s];return u?{x:a<s?u.left+u.width-(i.left+i.width):u.left-i.left,y:0,...ol}:null}return l>a&&l<=s?{x:-i.width-c,y:0,...ol}:l<a&&l>=s?{x:i.width+c,y:0,...ol}:{x:0,y:0,...ol}};function Vw(e,t,n){const r=e[t],a=e[t-1],s=e[t+1];return!r||!a&&!s?0:n<t?a?r.left-(a.left+a.width):s.left-(r.left+r.width):s?s.left-(r.left+r.width):r.left-(a.left+a.width)}const _p=e=>{let{rects:t,activeIndex:n,overIndex:r,index:a}=e;const s=wp(t,r,n),l=t[a],i=s[a];return!i||!l?null:{x:i.left-l.left,y:i.top-l.top,scaleX:i.width/l.width,scaleY:i.height/l.height}},al={scaleX:1,scaleY:1},Ww=e=>{var t;let{activeIndex:n,activeNodeRect:r,index:a,rects:s,overIndex:l}=e;const i=(t=s[n])!=null?t:r;if(!i)return null;if(a===n){const u=s[l];return u?{x:0,y:n<l?u.top+u.height-(i.top+i.height):u.top-i.top,...al}:null}const c=Zw(s,a,n);return a>n&&a<=l?{x:0,y:-i.height-c,...al}:a<n&&a>=l?{x:0,y:i.height+c,...al}:{x:0,y:0,...al}};function Zw(e,t,n){const r=e[t],a=e[t-1],s=e[t+1];return r?n<t?a?r.top-(a.top+a.height):s?s.top-(r.top+r.height):0:s?s.top-(r.top+r.height):a?r.top-(a.top+a.height):0:0}const V3="Sortable",W3=q.createContext({activeIndex:-1,containerId:V3,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:_p,disabled:{draggable:!1,droppable:!1}});function Kw(e){let{children:t,id:n,items:r,strategy:a=_p,disabled:s=!1}=e;const{active:l,dragOverlay:i,droppableRects:c,over:u,measureDroppableContainers:d}=H3(),f=ys(V3,n),g=i.rect!==null,y=x.useMemo(()=>r.map(S=>typeof S=="object"&&"id"in S?S.id:S),[r]),b=l!=null,j=l?y.indexOf(l.id):-1,_=u?y.indexOf(u.id):-1,v=x.useRef(y),p=!Fw(y,v.current),m=_!==-1&&j===-1||p,h=Uw(s);Ht(()=>{p&&b&&d(y)},[p,y,b,d]),x.useEffect(()=>{v.current=y},[y]);const C=x.useMemo(()=>({activeIndex:j,containerId:f,disabled:h,disableTransforms:m,items:y,overIndex:_,useDragOverlay:g,sortedRects:zw(y,c),strategy:a}),[j,f,h.draggable,h.droppable,m,y,_,c,g,a]);return q.createElement(W3.Provider,{value:C},t)}const Gw=e=>{let{id:t,items:n,activeIndex:r,overIndex:a}=e;return wp(n,r,a).indexOf(t)},Yw=e=>{let{containerId:t,isSorting:n,wasDragging:r,index:a,items:s,newIndex:l,previousItems:i,previousContainerId:c,transition:u}=e;return!u||!r||i!==s&&a===l?!1:n?!0:l!==a&&t===c},Xw={duration:200,easing:"ease"},Z3="transform",Qw=mr.Transition.toString({property:Z3,duration:0,easing:"linear"}),qw={roleDescription:"sortable"};function Jw(e){let{disabled:t,index:n,node:r,rect:a}=e;const[s,l]=x.useState(null),i=x.useRef(n);return Ht(()=>{if(!t&&n!==i.current&&r.current){const c=a.current;if(c){const u=Vo(r.current,{ignoreTransform:!0}),d={x:c.left-u.left,y:c.top-u.top,scaleX:c.width/u.width,scaleY:c.height/u.height};(d.x||d.y)&&l(d)}}n!==i.current&&(i.current=n)},[t,n,r,a]),x.useEffect(()=>{s&&l(null)},[s]),s}function e_(e){let{animateLayoutChanges:t=Yw,attributes:n,disabled:r,data:a,getNewIndex:s=Gw,id:l,strategy:i,resizeObserverConfig:c,transition:u=Xw}=e;const{items:d,containerId:f,activeIndex:g,disabled:y,disableTransforms:b,sortedRects:j,overIndex:_,useDragOverlay:v,strategy:p}=x.useContext(W3),m=t_(r,y),h=d.indexOf(l),C=x.useMemo(()=>({sortable:{containerId:f,index:h,items:d},...a}),[f,a,h,d]),S=x.useMemo(()=>d.slice(d.indexOf(l)),[d,l]),{rect:w,node:T,isOver:L,setNodeRef:N}=Tw({id:l,data:C,disabled:m.droppable,resizeObserverConfig:{updateMeasurementsFor:S,...c}}),{active:P,activatorEvent:Y,activeNodeRect:J,attributes:de,setNodeRef:ee,listeners:me,isDragging:oe,over:D,setActivatorNodeRef:$,transform:B}=Sw({id:l,data:C,attributes:{...qw,...n},disabled:m.draggable}),H=iS(N,ee),F=!!P,ve=F&&!b&&rl(g)&&rl(_),ae=!v&&oe,we=ae&&ve?B:null,Ae=ve?we??(i??p)({rects:j,activeNodeRect:J,activeIndex:g,overIndex:_,index:h}):null,nt=rl(g)&&rl(_)?s({id:l,items:d,activeIndex:g,overIndex:_}):h,fe=P==null?void 0:P.id,se=x.useRef({activeId:fe,items:d,newIndex:nt,containerId:f}),_t=d!==se.current.items,xt=t({active:P,containerId:f,isDragging:oe,isSorting:F,id:l,index:h,items:d,newIndex:se.current.newIndex,previousItems:se.current.items,previousContainerId:se.current.containerId,transition:u,wasDragging:se.current.activeId!=null}),Ge=Jw({disabled:!xt,index:h,node:T,rect:w});return x.useEffect(()=>{F&&se.current.newIndex!==nt&&(se.current.newIndex=nt),f!==se.current.containerId&&(se.current.containerId=f),d!==se.current.items&&(se.current.items=d)},[F,nt,f,d]),x.useEffect(()=>{if(fe===se.current.activeId)return;if(fe&&!se.current.activeId){se.current.activeId=fe;return}const zn=setTimeout(()=>{se.current.activeId=fe},50);return()=>clearTimeout(zn)},[fe]),{active:P,activeIndex:g,attributes:de,data:C,rect:w,index:h,newIndex:nt,items:d,isOver:L,isSorting:F,isDragging:oe,listeners:me,node:T,overIndex:_,over:D,setNodeRef:H,setActivatorNodeRef:$,setDroppableNodeRef:N,setDraggableNodeRef:ee,transform:Ge??Ae,transition:Wt()};function Wt(){if(Ge||_t&&se.current.newIndex===h)return Qw;if(!(ae&&!Oi(Y)||!u)&&(F||xt))return mr.Transition.toString({...u,property:Z3})}}function t_(e,t){var n,r;return typeof e=="boolean"?{draggable:e,droppable:!1}:{draggable:(n=e==null?void 0:e.draggable)!=null?n:t.draggable,droppable:(r=e==null?void 0:e.droppable)!=null?r:t.droppable}}function ni(e){if(!e)return!1;const t=e.data.current;return!!(t&&"sortable"in t&&typeof t.sortable=="object"&&"containerId"in t.sortable&&"items"in t.sortable&&"index"in t.sortable)}const n_=[pe.Down,pe.Right,pe.Up,pe.Left],r_=(e,t)=>{let{context:{active:n,collisionRect:r,droppableRects:a,droppableContainers:s,over:l,scrollableAncestors:i}}=t;if(n_.includes(e.code)){if(e.preventDefault(),!n||!r)return;const c=[];s.getEnabled().forEach(f=>{if(!f||f!=null&&f.disabled)return;const g=a.get(f.id);if(g)switch(e.code){case pe.Down:r.top<g.top&&c.push(f);break;case pe.Up:r.top>g.top&&c.push(f);break;case pe.Left:r.left>g.left&&c.push(f);break;case pe.Right:r.left<g.left&&c.push(f);break}});const u=TS({active:n,collisionRect:r,droppableRects:a,droppableContainers:c,pointerCoordinates:null});let d=k3(u,"id");if(d===(l==null?void 0:l.id)&&u.length>1&&(d=u[1].id),d!=null){const f=s.get(n.id),g=s.get(d),y=g?a.get(g.id):null,b=g==null?void 0:g.node.current;if(b&&y&&f&&g){const _=Di(b).some((S,w)=>i[w]!==S),v=K3(f,g),p=o_(f,g),m=_||!v?{x:0,y:0}:{x:p?r.width-y.width:0,y:p?r.height-y.height:0},h={x:y.left,y:y.top};return m.x&&m.y?h:Ja(h,m)}}}};function K3(e,t){return!ni(e)||!ni(t)?!1:e.data.current.sortable.containerId===t.data.current.sortable.containerId}function o_(e,t){return!ni(e)||!ni(t)||!K3(e,t)?!1:e.data.current.sortable.index<t.data.current.sortable.index}const a_=e=>{let{transform:t}=e;return{...t,y:0}};function G3(e,t,n){const r={...e};return t.top+e.y<=n.top?r.y=n.top-t.top:t.bottom+e.y>=n.top+n.height&&(r.y=n.top+n.height-t.bottom),t.left+e.x<=n.left?r.x=n.left-t.left:t.right+e.x>=n.left+n.width&&(r.x=n.left+n.width-t.right),r}const Tp=e=>{let{containerNodeRect:t,draggingNodeRect:n,transform:r}=e;return!n||!t?r:G3(r,n,t)},s_=e=>{let{transform:t}=e;return{...t,x:0}},Y3=e=>{let{transform:t,draggingNodeRect:n,windowRect:r}=e;return!n||!r?t:G3(t,n,r)},kp=({items:e,setOrder:t,List:n=({children:c})=>c,Item:r,modifiers:a=[Tp],strategy:s=_p,Overlay:l,...i})=>{const[c,u]=x.useState(null),d=bS(kf(bp),kf(Cp,{coordinateGetter:r_}));function f(b){const j=e.findIndex(_=>_.id===b.active.id);u(j)}function g(){u(null)}function y(b){const{active:j,over:_}=b;if(j.id!==_.id){const v=e.findIndex(m=>m.id===j.id),p=e.findIndex(m=>m.id===_.id);e[v].moved=!0,t(wp(e,v,p))}u(null)}return o.jsxs(Cw,{sensors:d,collisionDetection:_S,onDragStart:f,onDragCancel:g,onDragEnd:y,modifiers:a,children:[o.jsx(Kw,{items:e,strategy:s,children:o.jsx(n,{...i,children:e.map(b=>o.jsx(l_,{id:b.id,item:b,Item:r,...i},b.id))})}),l&&c&&o.jsx(Bw,{children:o.jsx(l,{item:c,...i})})]})},l_=({id:e,item:t,Item:n,...r})=>{const{attributes:a,listeners:s,setNodeRef:l,transform:i,transition:c}=e_({id:e}),u={transform:mr.Translate.toString(i),transition:c};return o.jsx(n,{item:t,setNodeRef:l,style:u,listeners:s,...a,...r})},i_=({...e})=>o.jsx(kp,{modifiers:[a_,Y3,Tp],strategy:Hw,...e}),c_=({...e})=>o.jsx(kp,{modifiers:[s_,Y3,Tp],strategy:Ww,...e}),u_=()=>o.jsxs(X,{children:[o.jsx("h3",{children:"Hello World!"}),"This is an alert."]}),d_=`import React from 'react'
import { Alert } from '@/src/index.jsx'

{/* START */}
// PRETEND: import { Alert } from '@abw/badger-react-ui'

const AlertExample = () =>
  <Alert>
    <h3>Hello World!</h3>
    This is an alert.
  </Alert>

export default AlertExample
`,p_=["red","brown","orange","yellow","olive","green","teal","blue","indigo","violet","purple","pink","maroon"],X3=({color:e,setColor:t,disabled:n=!1})=>o.jsxs("select",{name:"color",required:!0,value:e,onChange:r=>t(r.target.value),disabled:n,children:[o.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Select Range"}),o.jsx("option",{value:"",children:"Default"}),p_.map(r=>o.jsx("option",{value:r,children:r},r))]}),f_=["smallest","smaller","small","medium","large","larger","largest","x2","x3","x4","x5","x6","x7","x8","x9","x10"],Q3=({size:e,setSize:t})=>o.jsxs("select",{name:"size",required:!0,value:e,onChange:n=>t(n.target.value),children:[o.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Size"}),o.jsx("option",{value:"",children:"Default"}),f_.map(n=>o.jsx("option",{value:n,children:n},n))]}),h_=[0,1,2,3,4,5,6,8,10],m_=({radius:e,setRadius:t})=>o.jsxs("select",{name:"radius",required:!0,value:e,onChange:n=>t(n.target.value),children:[o.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Radius"}),o.jsx("option",{value:"",children:"Default"}),h_.map(n=>o.jsx("option",{value:n,children:n},n))]}),g_=[1,2,3,4,5],x_=({shadow:e,setShadow:t})=>o.jsxs("select",{name:"shadow",required:!0,value:e,onChange:n=>t(n.target.value),children:[o.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Shadow"}),o.jsx("option",{value:"",children:"Default"}),g_.map(n=>o.jsx("option",{value:n,children:n},n))]}),zf=({checked:e,toggle:t,label:n,disabled:r=!1})=>o.jsxs("label",{className:"checkbox border no-focus",children:[o.jsx("input",{type:"checkbox",checked:e,onChange:t,disabled:r}),n]}),v_=[0,1,2,3,4,5,6,8,10],y_=({border:e,setBorder:t,disabled:n=!1})=>o.jsxs("select",{name:"border",required:!0,value:e,onChange:r=>t(r.target.value),disabled:n,children:[o.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Border"}),o.jsx("option",{value:"",children:"Default"}),v_.map(r=>o.jsx("option",{value:r,children:r},r))]}),C_=Object.keys(ds.icons),$u=({icon:e,setIcon:t,disabled:n=!1})=>o.jsxs("select",{name:"icon",required:!0,value:e,onChange:r=>t(r.target.value),disabled:n,children:[o.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Icon"}),o.jsx("option",{value:"",children:"None"}),C_.map(r=>o.jsx("option",{value:r,children:r},r))]}),j_=()=>{const[e,t]=x.useState(0),[n,r]=x.useState({headline:"",title:"",text:"Hello World!",revealable:!1,stripe:!1}),a=c=>()=>{r(u=>({...u,[c]:!u[c]})),t(u=>u+1)},s=c=>u=>{r(d=>({...d,[c]:u})),t(d=>d+1)},i=`<Alert
  ${S_(n)}
/>`;return o.jsxs("div",{className:"example grid-2 gap-h-8 stack-desktop",children:[o.jsxs("div",{children:[o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Output"}),o.jsx("div",{className:"output mar-b-8",children:o.jsx(w_,{options:n},e)})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Markup"}),o.jsx(tr,{code:i,language:"html",expand:!0})]})]}),o.jsx(b_,{options:n,setOption:s,toggleOption:a})]})},b_=({options:e,toggleOption:t,setOption:n})=>{const r=n("headline"),a=n("title"),s=n("text"),l=n("type"),i=n("size"),c=n("color"),u=n("border"),d=n("radius"),f=n("shadow"),g=n("icon"),y=n("headicon"),b=t("stripe"),j=t("revealable");return o.jsxs("div",{children:[o.jsx(_c,{label:"Headline",value:e.headline,setValue:r}),o.jsx(_c,{label:"Title",value:e.title,setValue:a}),o.jsx(_c,{label:"Text",value:e.text,setValue:s}),o.jsxs("div",{className:"grid-2 gap-h-4 stack-mobile top",children:[o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Type"}),o.jsx(__,{type:e.type,setType:l})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Color"}),o.jsx(X3,{color:e.color,setColor:c,disabled:e.type})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Size"}),o.jsx(Q3,{size:e.size,setSize:i})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Shadow"}),o.jsx(x_,{shadow:e.shadow,setShadow:f})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Border Width"}),o.jsx(y_,{border:e.border,setBorder:u,disabled:e.stripe})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Border Radius"}),o.jsx(m_,{radius:e.radius,setRadius:d})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Headline Icon"}),o.jsx($u,{icon:e.headicon,setIcon:y,disabled:!e.headline})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Body Icon"}),o.jsx($u,{icons:e.icon,setIcon:g})]})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Options"}),o.jsxs("div",{className:"grid-2 gap-h-4 stack-mobile top",children:[o.jsx(zf,{checked:e.stripe,toggle:b,label:"Stripe"}),o.jsx(zf,{checked:e.revealable,toggle:j,label:"Revealable",disabled:!e.headline})]})]})]})},S_=e=>{const t=["headline","title","text","type","color","size","headicon","icon"].filter(a=>e[a]).map(a=>`${a}="${e[a]}"`),n=["shadow","border","radius"].filter(a=>e[a]).map(a=>`${a}={${e[a]}}`),r=["stripe","revealable","dismissable"].filter(a=>e[a]);return[...t,...n,...r].join(`
  `)},w_=({options:e})=>o.jsx(X,{...e}),__=({type:e,setType:t})=>o.jsxs("select",{name:"type",required:!0,value:e,onChange:n=>t(n.target.value),children:[o.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Type"}),o.jsx("option",{value:"",children:"Default"}),["info","warning","success","error"].map(n=>o.jsx("option",{value:n,children:n},n))]}),_c=({label:e,value:t,setValue:n})=>o.jsxs("div",{className:"field",children:[o.jsx("label",{children:e}),o.jsxs("div",{className:"inputs",children:[o.jsx("input",{type:"text",name:"headline",value:t,onChange:r=>n(r.target.value)}),o.jsx("div",{className:"suffix",children:o.jsx(Q,{name:"cross",className:"hover",onClick:()=>n("")})})]})]}),q3=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["Use the ",o.jsx("code",{children:"Alert"})," component to render an alert. Any child elements will be rendered inside the alert body."]}),o.jsx(be,{Component:u_,code:d_,expand:!0}),o.jsx("h2",{children:"Demo"}),o.jsx(j_,{})]}),T_=Object.freeze(Object.defineProperty({__proto__:null,default:q3},Symbol.toStringTag,{value:"Module"})),J3=e=>e.replaceAll(/\W+/g,"-").replace(/^-+/,"").replace(/-+$/,"").toLowerCase(),k_=({render:e})=>{const[t,n]=x.useState({}),r=x.useRef();return e({tocs:t,addToc:(l,i,c,u)=>{const d=t[l]||(t[l]={});d[i]={text:c,ref:u},n({...t})},addTocHeading:(l,i,c,u)=>{const d=t[l]||(t[l]={});d[i]={heading:c,ref:u},n({...t})},contentRef:r})},js=qr(k_),E_=({addToc:e,addTocHeading:t,tocName:n,render:r})=>r({addPageToc:(l,i,c)=>{e(n,l,i,c)},addPageTocHeading:(l,i,c)=>{t(n,l,i,c)}}),Ep=qr(js.Consumer(E_)),L_=({id:e,code:t,title:n=t,children:r,addPageToc:a,split:s})=>{const l=J3(e||t||n),i=x.useRef(),c=t?`code:${t}`:n;return x.useEffect(()=>{a&&a(l,c,i)},[e,t,n]),o.jsxs("section",{id:l,ref:i,children:[o.jsx("h3",{className:t?"font-mono page-section":"page-section",children:n}),o.jsx("div",{className:s?"cols-2 stack-desktop":"",children:r})]})},K=Ep.Consumer(L_),O=({Component:e,Source:t,children:n,code:r,title:a,caption:s=r?o.jsx("code",{children:r}):a,expand:l,undent:i,lineProps:c,highlightLines:u,...d})=>o.jsxs(K,{code:r,title:a,...d,children:[o.jsx("div",{className:"cols-2 stack-desktop mar-b-4",children:n}),o.jsx(be,{Component:e,code:t,caption:s,expand:l,undent:i,highlightLines:u,lineProps:c})]}),N_=()=>o.jsxs("div",{children:[o.jsx(xa,{text:"Error alert"}),o.jsx(xa,{text:"Error alert with border",border:!0}),o.jsx(xa,{headline:"Error Alert",text:"Error alert with headline",border:!0,shadow:!0}),o.jsx(xa,{title:"Stonehenge",text:"Crushed by a dwarf",icon:"exclamation-thick",stripe:!0,shadow:3})]}),R_=`import React from 'react'
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
`,eg=()=>o.jsx(O,{code:"Error",Component:N_,Source:R_,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"Error"})," component is a short-cut to generate an error alert."]})}),O_=Object.freeze(Object.defineProperty({__proto__:null,default:eg},Symbol.toStringTag,{value:"Module"})),D_=()=>o.jsxs("div",{children:[o.jsx(ha,{text:"Info alert"}),o.jsx(ha,{text:"Info alert with border",border:!0}),o.jsx(ha,{headline:"Info Alert",text:"Info alert with headline",border:!0,shadow:!0}),o.jsx(ha,{title:"Stonehenge",text:"Where the demons dwell",icon:"info",stripe:!0,shadow:3})]}),M_=`import React from 'react'
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
`,tg=()=>o.jsx(O,{code:"Info",Component:D_,Source:M_,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"Info"})," component is a short-cut to generate an info alert."]})}),A_=Object.freeze(Object.defineProperty({__proto__:null,default:tg},Symbol.toStringTag,{value:"Module"})),P_=()=>o.jsxs("div",{children:[o.jsx(ma,{text:"Success alert"}),o.jsx(ma,{text:"Success alert with border",border:!0}),o.jsx(ma,{headline:"Success Alert",text:"Success alert with headline",border:!0,shadow:!0}),o.jsx(ma,{title:"Stonehenge",text:"Where the banshees live...",icon:"check-thicker-shrink=4",stripe:!0,shadow:3})]}),$_=`import React from 'react'
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
`,ng=()=>o.jsx(O,{code:"Success",Component:P_,Source:$_,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"Success"})," component is a short-cut to generate a success alert."]})}),I_=Object.freeze(Object.defineProperty({__proto__:null,default:ng},Symbol.toStringTag,{value:"Module"})),B_=()=>o.jsxs("div",{children:[o.jsx(ga,{text:"Warning alert"}),o.jsx(ga,{text:"Warning alert with border",border:!0}),o.jsx(ga,{headline:"Warning Alert",text:"Warning alert with headline",border:!0,shadow:!0}),o.jsx(ga,{title:"Stonehenge",text:"...and they do live well",icon:"exclamation-thick",stripe:!0,shadow:3})]}),z_=`import React from 'react'
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
`,rg=()=>o.jsx(O,{code:"Warning",Component:B_,Source:z_,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"Warning"})," component is a short-cut to generate a warning alert."]})}),F_=Object.freeze(Object.defineProperty({__proto__:null,default:rg},Symbol.toStringTag,{value:"Module"})),U_=()=>o.jsxs("div",{children:[o.jsx(X,{text:"Border Alert",border:!0}),o.jsx(X,{text:"Border Width 2",border:2})]}),H_=`import React from 'react'
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
`,og=()=>o.jsx(O,{code:"border",Component:U_,Source:H_,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"border"})," property can be used to add a border.  This can be a number to indicate the border width."]})}),V_=Object.freeze(Object.defineProperty({__proto__:null,default:og},Symbol.toStringTag,{value:"Module"})),W_=()=>o.jsx(X,{text:"Hello World!",className:"border shadow-2"}),Z_=`import React from 'react'
import { Alert } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Alert
    text="Hello World!"
    className="border shadow-2"
  />
/* END */

export default Component
`,ag=()=>o.jsx(O,{code:"className",Component:W_,Source:Z_,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"className"})," property can be used to set a CSS class."]})}),K_=Object.freeze(Object.defineProperty({__proto__:null,default:ag},Symbol.toStringTag,{value:"Module"})),G_=()=>o.jsxs("div",{children:[o.jsx(X,{text:"Red Alert",color:"red"}),o.jsx(X,{text:"Brown Alert",color:"brown"}),o.jsx(X,{text:"Orange Alert",color:"orange"}),o.jsx(X,{text:"Yellow Alert",color:"yellow"}),o.jsx(X,{text:"Green Alert",color:"green"}),o.jsx(X,{text:"Teal Alert",color:"teal"}),o.jsx(X,{text:"Blue Alert",color:"blue"}),o.jsx(X,{text:"Indigo Alert",color:"indigo"}),o.jsx(X,{text:"Violet Alert",color:"violet"}),o.jsx(X,{text:"Purple Alert",color:"purple"}),o.jsx(X,{text:"Pink Alert",color:"pink"}),o.jsx(X,{text:"Maroon Alert",color:"maroon"})]}),Y_=`import React from 'react'
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
`,sg=()=>o.jsx(O,{code:"color",Component:G_,Source:Y_,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"color"})," property can be used to set the color range used for the alert."]})}),X_=Object.freeze(Object.defineProperty({__proto__:null,default:sg},Symbol.toStringTag,{value:"Module"})),Q_=()=>o.jsx(X,{headline:"Dismissable Alert",text:"A dismissable alert",dismissable:!0}),q_=`import React from 'react'
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
`,lg=()=>o.jsx(O,{code:"dismissable",Component:Q_,Source:q_,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"dismissable"})," property can be used to make an alert dismissable."]})}),J_=Object.freeze(Object.defineProperty({__proto__:null,default:lg},Symbol.toStringTag,{value:"Module"})),eT=()=>o.jsx(X,{headline:"Headline Icon Alert",headIcon:"bars",text:"An alert with a headline icon"}),tT=`import React from 'react'
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
`,ig=()=>o.jsx(O,{code:"headicon",Component:eT,Source:tT,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"headIcon"})," property can be used to add an icon to the headline."]})}),nT=Object.freeze(Object.defineProperty({__proto__:null,default:ig},Symbol.toStringTag,{value:"Module"})),rT=()=>o.jsx(X,{headline:"Headline Alert",text:"An alert with a headline"}),oT=`import React from 'react'
import { Alert } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Alert
    headline="Headline Alert"
    text="An alert with a headline"
  />
/* END */

export default Component
`,cg=()=>o.jsx(O,{code:"headline",Component:rT,Source:oT,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"headline"})," property can be used to set a headline."]})}),aT=Object.freeze(Object.defineProperty({__proto__:null,default:cg},Symbol.toStringTag,{value:"Module"})),sT=()=>o.jsxs("div",{children:[o.jsx(X,{icon:"info",type:"info",title:"Eleven",text:"It's one louder"}),o.jsx(X,{icon:"check",type:"success",title:"Eleven",text:"It's one louder"}),o.jsx(X,{icon:"exclamation",type:"error",title:"Eleven",text:"It's one louder"})]}),lT=`import React from 'react'
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
`,ug=()=>o.jsx(O,{code:"icon",Component:sT,Source:lT,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"icon"})," property can be used to add an icon to the body."]})}),iT=Object.freeze(Object.defineProperty({__proto__:null,default:ug},Symbol.toStringTag,{value:"Module"})),cT=()=>o.jsx(X,{headline:"Dismissable Alert",text:"A dismissable alert",onDismiss:()=>window.alert("Bye!"),dismissable:!0}),uT=`import React from 'react'
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
`,dg=()=>o.jsx(O,{code:"onDismiss",Component:cT,Source:uT,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"onDismiss"})," property can be used to register a function which will be called when the alert is dismissed."]})}),dT=Object.freeze(Object.defineProperty({__proto__:null,default:dg},Symbol.toStringTag,{value:"Module"})),pT=()=>o.jsx(X,{text:"Radius Alert",radius:4}),fT=`import React from 'react'
import { Alert } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Alert
    text="Radius Alert"
    radius={4}
  />
/* END */

export default Component
`,pg=()=>o.jsx(O,{code:"radius",Component:pT,Source:fT,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"radius"})," property can be used to set the border radius."]})}),hT=Object.freeze(Object.defineProperty({__proto__:null,default:pg},Symbol.toStringTag,{value:"Module"})),mT=()=>o.jsx(X,{headline:"Revealable Alert",text:"A revealable alert",revealable:!0}),gT=`import React from 'react'
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
`,fg=()=>o.jsx(O,{code:"revealable",Component:mT,Source:gT,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"revealable"})," property can be used to make the alert revealable."]})}),xT=Object.freeze(Object.defineProperty({__proto__:null,default:fg},Symbol.toStringTag,{value:"Module"})),vT=()=>o.jsx(X,{headline:"Revealed Alert",text:"A revealed alert",revealable:!0,revealed:!0}),yT=`import React from 'react'
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
`,hg=()=>o.jsx(O,{code:"revealed",Component:vT,Source:yT,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"revealed"})," property can be set to make it a revealable alert initially revealed."]})}),CT=Object.freeze(Object.defineProperty({__proto__:null,default:hg},Symbol.toStringTag,{value:"Module"})),jT=()=>o.jsxs("div",{children:[o.jsx(X,{text:"Alert With Default Shadow (1)",shadow:!0}),o.jsx(X,{text:"Alert With Shadow 2",shadow:2}),o.jsx(X,{text:"Alert With Shadow 3",shadow:3}),o.jsx(X,{text:"Alert With Shadow 4",shadow:4}),o.jsx(X,{text:"Alert With Shadow 5",shadow:5})]}),bT=`import React from 'react'
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
`,mg=()=>o.jsx(O,{code:"shadow",Component:jT,Source:bT,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"shadow"})," property can be used to add a shadow.  The default value is 1 or you can set it to any number from"," ","1 to 5."]})}),ST=Object.freeze(Object.defineProperty({__proto__:null,default:mg},Symbol.toStringTag,{value:"Module"})),wT=()=>o.jsxs("div",{children:[o.jsx(X,{text:"Smallest Alert",size:"smallest"}),o.jsx(X,{text:"Smaller Alert",size:"smaller"}),o.jsx(X,{text:"Small Alert",size:"small"}),o.jsx(X,{text:"Medium Alert",size:"medium"}),o.jsx(X,{text:"Large Alert",size:"large"}),o.jsx(X,{text:"Larger Alert",size:"larger"}),o.jsx(X,{text:"Largest Alert",size:"largest"})]}),_T=`import React from 'react'
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
`,gg=()=>o.jsx(O,{code:"size",Component:wT,Source:_T,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"size"})," property can be used to set the text size."]})}),TT=Object.freeze(Object.defineProperty({__proto__:null,default:gg},Symbol.toStringTag,{value:"Module"})),kT=()=>o.jsxs("div",{children:[o.jsx(X,{text:"Stripe Alert",stripe:!0,shadow:4}),o.jsx(X,{text:"Info Stripe Alert",type:"info",stripe:!0,shadow:4}),o.jsx(X,{text:"Success Stripe Alert",type:"success",stripe:!0,shadow:4}),o.jsx(X,{text:"Warning Stripe Alert",type:"warning",stripe:!0,shadow:4}),o.jsx(X,{text:"Error Stripe Alert",type:"error",stripe:!0,shadow:4})]}),ET=`import React from 'react'
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
`,xg=()=>o.jsx(O,{code:"stripe",Component:kT,Source:ET,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"stripe"})," property can be set as a short-cut to add the"," ",o.jsx("code",{children:"stripe"})," CSS class for a more minimal look."]})}),LT=Object.freeze(Object.defineProperty({__proto__:null,default:xg},Symbol.toStringTag,{value:"Module"})),NT=()=>o.jsx(X,{text:"Hello World!"}),RT=`import React from 'react'
import { Alert } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Alert text="Hello World!"/>
/* END */

export default Component`,vg=()=>o.jsx(O,{code:"text",Component:NT,Source:RT,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"text"})," property can be used to set the body text."]})}),OT=Object.freeze(Object.defineProperty({__proto__:null,default:vg},Symbol.toStringTag,{value:"Module"})),DT=()=>o.jsx(X,{title:"Hello World!",children:"This is an alert"}),MT=`import React from 'react'
import { Alert } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Alert title="Hello World!">
    This is an alert
  </Alert>
/* END */

export default Component`,yg=()=>o.jsx(O,{code:"title",Component:DT,Source:MT,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"title"})," property can be used to set a title."]})}),AT=Object.freeze(Object.defineProperty({__proto__:null,default:yg},Symbol.toStringTag,{value:"Module"})),PT=()=>o.jsxs("div",{children:[o.jsx(X,{text:"Info Alert",type:"info"}),o.jsx(X,{text:"Success Alert",type:"success"}),o.jsx(X,{text:"Warning Alert",type:"warning"}),o.jsx(X,{text:"Error Alert",type:"error"})]}),$T=`import React from 'react'
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
`,Cg=()=>o.jsx(O,{code:"type",Component:PT,Source:$T,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"type"})," property can be used to set it to one of the pre-defined types: ",o.jsx("code",{children:"info"}),", ",o.jsx("code",{children:"success"}),","," ",o.jsx("code",{children:"warning"})," or ",o.jsx("code",{children:"error"}),"."]})}),IT=Object.freeze(Object.defineProperty({__proto__:null,default:Cg},Symbol.toStringTag,{value:"Module"})),ut=({tocName:e,children:t})=>o.jsx(Ep.Provider,{tocName:e,children:t}),BT=({id:e,title:t,addPageTocHeading:n})=>{const r=J3(e||t),a=x.useRef();return x.useEffect(()=>{n&&n(r,t,a)},[e,t]),o.jsx("h2",{id:r,ref:a,className:"section-heading",children:t})},ue=Ep.Consumer(BT),zT=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Alert"}),o.jsx(q3,{}),o.jsxs(ut,{tocName:"alert",children:[o.jsx(ue,{title:"Properties"}),o.jsx(yg,{}),o.jsx(vg,{}),o.jsx(cg,{}),o.jsx(ig,{}),o.jsx(fg,{}),o.jsx(hg,{}),o.jsx(lg,{}),o.jsx(dg,{}),o.jsx(ag,{}),o.jsx(og,{}),o.jsx(pg,{}),o.jsx(mg,{}),o.jsx(gg,{}),o.jsx(sg,{}),o.jsx(Cg,{}),o.jsx(xg,{}),o.jsx(ug,{}),o.jsx(ue,{title:"Components"}),o.jsx(tg,{}),o.jsx(ng,{}),o.jsx(rg,{}),o.jsx(eg,{})]})]}),FT=Object.freeze(Object.defineProperty({__proto__:null,default:zT},Symbol.toStringTag,{value:"Module"})),UT=()=>o.jsx(M,{children:"This is a button"}),HT=`import React from 'react'
import { Button } from '@/src/index.jsx'

{/* START */}
// PRETEND: import { Button } from '@abw/badger-react-ui'

const ButtonExample = () =>
  <Button>
    This is a button
  </Button>

export default ButtonExample
`,jg=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"Button"})," component can be used to render a button. Any child elements will be included as content."]}),o.jsxs("p",{className:"cols-2 stack-desktop",children:["There are numerous properties listed below that are typically used as shortcuts to set particular CSS styles.  Any other properties not listed here are forwarded to the ",o.jsx("code",{children:"button"})," component."]}),o.jsx(be,{Component:UT,code:HT,expand:!0})]}),VT=Object.freeze(Object.defineProperty({__proto__:null,default:jg},Symbol.toStringTag,{value:"Module"})),WT=()=>o.jsx(M,{text:"Custom Button Content",Content:({text:e})=>o.jsxs("span",{className:"pad-4",children:["😀 ",e]})}),ZT=`import React from 'react'
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
`,bg=()=>o.jsxs(O,{code:"Content",Component:WT,Source:ZT,undent:2,expand:!0,children:[o.jsxs("p",{children:["The ",o.jsx("code",{children:"Content"})," property (note the capital C) can be used to provide an alternate component to render the button content. By default it uses ",o.jsx("code",{children:"WithIcons"})," to render the button text with optional icons."]}),o.jsxs("p",{children:["If you want to change the way that button content is generated on a global level then you can use the theming engine to define a different ",o.jsx("code",{children:"Content"})," component for all buttons."]})]}),KT=Object.freeze(Object.defineProperty({__proto__:null,default:bg},Symbol.toStringTag,{value:"Module"})),GT=()=>o.jsxs("div",{className:"flex wrap gap-4",children:[o.jsx(M,{text:"Red Bare",color:"red",bare:!0}),o.jsx(M,{text:"Green Bare",color:"green",bare:!0}),o.jsx(M,{text:"Blue Bare",color:"blue",bare:!0})]}),YT=`import React from 'react'
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
`,Sg=()=>o.jsx(O,{code:"bare",Component:GT,Source:YT,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"bare"})," property can be added for bare naked buttons."]})}),XT=Object.freeze(Object.defineProperty({__proto__:null,default:Sg},Symbol.toStringTag,{value:"Module"})),QT=()=>o.jsxs("div",{className:"flex middle wrap gap-4",children:[o.jsx(M,{text:"Border 2",color:"red",outline:!0,border:2}),o.jsx(M,{text:"Border 3",color:"brown",outline:!0,border:3}),o.jsx(M,{text:"Border 4",color:"orange",outline:!0,border:4}),o.jsx(M,{text:"Border 5",color:"yellow",outline:!0,border:5})]}),qT=`import React from 'react'
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
`,wg=()=>o.jsx(O,{code:"border",Component:QT,Source:qT,undent:2,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"border"})," property can be used to set the border width. This is only really noticeable on outline buttons.  There is a border around solid buttons (mainly to help in matching the height of other form inputs), although it's the same color as the background."]})}),JT=Object.freeze(Object.defineProperty({__proto__:null,default:wg},Symbol.toStringTag,{value:"Module"})),ek=()=>o.jsxs("div",{className:"flex wrap gap-4",children:[o.jsx(M,{text:"Yellow Button",color:"yellow"}),o.jsx(M,{text:"Bright Yellow Button",color:"yellow",bright:!0})]}),tk=`import React from 'react'
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
`,_g=()=>o.jsx(O,{code:"bright",Component:ek,Source:tk,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"bright"})," property can be added to make the buttons brighter than normal."]})}),nk=Object.freeze(Object.defineProperty({__proto__:null,default:_g},Symbol.toStringTag,{value:"Module"})),rk=()=>o.jsx(M,{text:"Custom Button",className:"red bdw-2 bdr-4 bgc-80 fgc-20 bgd-20 fgd-80"}),ok=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    text="Custom Button"
    className="red bdw-2 bdr-4 bgc-80 fgc-20 bgd-20 fgd-80"
  />
/* END */

export default Component
`,Tg=()=>o.jsx(O,{code:"className",Component:rk,Source:ok,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"className"})," property can be added to add a CSS class to the button."]})}),ak=Object.freeze(Object.defineProperty({__proto__:null,default:Tg},Symbol.toStringTag,{value:"Module"})),sk=()=>o.jsxs("div",{className:"grid-2 gap-4 stack-tablet",children:[o.jsx(M,{text:"Red Button",color:"red"}),o.jsx(M,{text:"Brown Button",color:"brown"}),o.jsx(M,{text:"Orange Button",color:"orange"}),o.jsx(M,{text:"Yellow Button",color:"yellow"}),o.jsx(M,{text:"Green Button",color:"green"}),o.jsx(M,{text:"Teal Button",color:"teal"}),o.jsx(M,{text:"Blue Button",color:"blue"}),o.jsx(M,{text:"Indigo Button",color:"indigo"}),o.jsx(M,{text:"Violet Button",color:"violet"}),o.jsx(M,{text:"Purple Button",color:"purple"}),o.jsx(M,{text:"Pink Button",color:"pink"}),o.jsx(M,{text:"Maroon Button",color:"maroon"})]}),lk=`import React from 'react'
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
`,kg=()=>o.jsx(O,{code:"color",Component:sk,Source:lk,undent:2,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"color"})," property can be used to set the color range used for the button."]})}),ik=Object.freeze(Object.defineProperty({__proto__:null,default:kg},Symbol.toStringTag,{value:"Module"})),ck=()=>o.jsxs("div",{className:"flex wrap gap-4",children:[o.jsx(M,{text:"Red Button",color:"red"}),o.jsx(M,{text:"Dark Red Button",color:"red",dark:!0})]}),uk=`import React from 'react'
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
`,Eg=()=>o.jsx(O,{code:"dark",Component:ck,Source:uk,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"dark"})," property can be added to make the buttons darker than normal."]})}),dk=Object.freeze(Object.defineProperty({__proto__:null,default:Eg},Symbol.toStringTag,{value:"Module"})),pk=()=>o.jsx(M,{text:"Disabled Button",disabled:!0}),fk=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    text="Disabled Button"
    disabled
  />
/* END */

export default Component
`,Lg=()=>o.jsx(O,{code:"disabled",Component:pk,Source:fk,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"disabled"})," property can be set to disable a button."]})}),hk=Object.freeze(Object.defineProperty({__proto__:null,default:Lg},Symbol.toStringTag,{value:"Module"})),mk=()=>o.jsx(M,{color:"green",icon:"bars"}),gk=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    color="green"
    icon="bars"
  />
/* END */

export default Component
`,Ng=()=>o.jsx(O,{code:"icon",Component:mk,Source:gk,undent:2,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"icon"})," property can be used to add an icon to a button."]})}),xk=Object.freeze(Object.defineProperty({__proto__:null,default:Ng},Symbol.toStringTag,{value:"Module"})),vk=()=>o.jsx(M,{color:"green",text:"Back",iconLeft:"angle-left"}),yk=`import React from 'react'
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
`,Rg=()=>o.jsx(O,{code:"iconLeft",Component:vk,Source:yk,undent:2,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"iconLeft"})," property can be used to add an icon to the left side of a button."]})}),Ck=Object.freeze(Object.defineProperty({__proto__:null,default:Rg},Symbol.toStringTag,{value:"Module"})),jk=()=>o.jsx(M,{color:"green",text:"Next",iconRight:"angle-right"}),bk=`import React from 'react'
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
`,Og=()=>o.jsx(O,{code:"iconRight",Component:jk,Source:bk,undent:2,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"iconRight"})," property can be used to add an icon to the right side of a button."]})}),Sk=Object.freeze(Object.defineProperty({__proto__:null,default:Og},Symbol.toStringTag,{value:"Module"})),wk=()=>o.jsx(M,{text:"I am labelled!",label:"This is a label"}),_k=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    text="I am labelled!"
    label="This is a label"
  />
/* END */

export default Component
`,Dg=()=>o.jsx(O,{code:"label",Component:wk,Source:_k,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"label"})," property can be used to set the",o.jsx("code",{children:"aria-label"})," property on the button.  This typically doesn't have any visual effect on the button, but is used by screen readers to provide more detail about the functionality of the button."]})}),Tk=Object.freeze(Object.defineProperty({__proto__:null,default:Dg},Symbol.toStringTag,{value:"Module"})),kk=()=>o.jsx(M,{text:"Click Me!",onClick:()=>window.alert("Click!")}),Ek=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    text="Click Me!"
    onClick={() => window.alert('Click!')}
  />
/* END */

export default Component
`,Mg=()=>o.jsx(O,{code:"onClick",Component:kk,Source:Ek,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"onClick"})," property can be used to register a function which will be called when the button is clicked."]})}),Lk=Object.freeze(Object.defineProperty({__proto__:null,default:Mg},Symbol.toStringTag,{value:"Module"})),Nk=()=>o.jsxs("div",{className:"flex wrap gap-4",children:[o.jsx(M,{text:"Red Outline",color:"red",outline:!0}),o.jsx(M,{text:"Green Outline",color:"green",outline:!0}),o.jsx(M,{text:"Blue Outline",color:"blue",outline:!0})]}),Rk=`import React from 'react'
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
`,Ag=()=>o.jsx(O,{code:"outline",Component:Nk,Source:Rk,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"outline"})," property can be added for outline buttons."]})}),Ok=Object.freeze(Object.defineProperty({__proto__:null,default:Ag},Symbol.toStringTag,{value:"Module"})),Dk=()=>o.jsxs("div",{className:"flex middle wrap gap-4",children:[o.jsx(M,{text:"Radius 0",color:"olive",radius:0}),o.jsx(M,{text:"Radius 2",color:"green",radius:2}),o.jsx(M,{text:"Radius 4",color:"teal",radius:3}),o.jsx(M,{text:"Radius 6",color:"blue",radius:4})]}),Mk=`import React from 'react'
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
`,Pg=()=>o.jsx(O,{code:"radius",Component:Dk,Source:Mk,undent:2,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"radius"})," property can be used to set the border radius in multiples of the base unit: 0.25rem."]})}),Ak=Object.freeze(Object.defineProperty({__proto__:null,default:Pg},Symbol.toStringTag,{value:"Module"})),Pk=()=>o.jsxs("div",{className:"flex wrap gap-4",children:[o.jsx(M,{text:"Red Shaded",color:"red",shaded:!0}),o.jsx(M,{text:"Green Shaded",color:"green",shaded:!0}),o.jsx(M,{text:"Blue Shaded",color:"blue",shaded:!0})]}),$k=`import React from 'react'
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
`,$g=()=>o.jsx(O,{code:"shaded",Component:Pk,Source:$k,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"shaded"})," property can be added for shaded buttons."]})}),Ik=Object.freeze(Object.defineProperty({__proto__:null,default:$g},Symbol.toStringTag,{value:"Module"})),Bk=()=>o.jsxs("div",{className:"flex middle wrap gap-4",children:[o.jsx(M,{text:"Shadow 1",color:"indigo",outline:!0,shadow:!0}),o.jsx(M,{text:"Shadow 2",color:"violet",outline:!0,shadow:2}),o.jsx(M,{text:"Shadow 3",color:"purple",outline:!0,shadow:3}),o.jsx(M,{text:"Shadow 4",color:"pink",outline:!0,shadow:4}),o.jsx(M,{text:"Shadow 5",color:"maroon",outline:!0,shadow:5})]}),zk=`import React from 'react'
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
`,Ig=()=>o.jsx(O,{code:"shadow",Component:Bk,Source:zk,undent:2,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"shadow"})," property can be used to add a shadow to the button ranging from 1 to 5."]})}),Fk=Object.freeze(Object.defineProperty({__proto__:null,default:Ig},Symbol.toStringTag,{value:"Module"})),Uk=()=>o.jsxs("div",{className:"flex middle wrap gap-4",children:[o.jsx(M,{text:"Smallest",size:"smallest"}),o.jsx(M,{text:"Smaller",size:"smaller"}),o.jsx(M,{text:"Small",size:"small"}),o.jsx(M,{text:"Medium",size:"medium"}),o.jsx(M,{text:"Large",size:"large"}),o.jsx(M,{text:"Larger",size:"larger"}),o.jsx(M,{text:"Largest",size:"largest"}),o.jsx(M,{text:"x3",size:"x3"}),o.jsx(M,{text:"x5",size:"x5"}),o.jsx(M,{text:"x7",size:"x7"})]}),Hk=`import React from 'react'
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
`,Bg=()=>o.jsx(O,{code:"size",Component:Uk,Source:Hk,undent:2,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"size"})," property can be used to set the button size. This can be one of: ",o.jsx("code",{children:"smallest"}),", ",o.jsx("code",{children:"smaller"}),", ",o.jsx("code",{children:"small"})," ",",",o.jsx("code",{children:"medium"})," (default - same as no explicit size), ",o.jsx("code",{children:"large"})," ",",",o.jsx("code",{children:"larger"}),", ",o.jsx("code",{children:"largest"}),"; or any of the size multipliers:"," ",o.jsx("code",{children:"x2"}),", ",o.jsx("code",{children:"x3"}),", etc., up to ",o.jsx("code",{children:"x10"}),"."]})}),Vk=Object.freeze(Object.defineProperty({__proto__:null,default:Bg},Symbol.toStringTag,{value:"Module"})),Wk=()=>o.jsx(M,{text:"Grey Button"}),Zk=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button text="Grey Button"/>
/* END */

export default Component
`,zg=()=>o.jsx(O,{code:"text",Component:Wk,Source:Zk,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"text"})," property can be used to set the text for the button."]})}),Kk=Object.freeze(Object.defineProperty({__proto__:null,default:zg},Symbol.toStringTag,{value:"Module"})),Gk=()=>o.jsx(M,{text:"Tooltip",label:"This is a tooltip",tooltip:"top left"}),Yk=`import React from 'react'
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
`,Fg=()=>o.jsx(O,{code:"tooltip",Component:Gk,Source:Yk,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"tooltip"})," property can be used to set the",o.jsx("code",{children:"data-tooltip"})," property on the button.  This can be used to indicate the direction of the tooltip, e.g. ",o.jsx("code",{children:"top"}),","," ",o.jsx("code",{children:"right"}),", ",o.jsx("code",{children:"top right"}),", etc. The tooltip content should be defined using the ",o.jsx("code",{children:"label"})," property."]})}),Xk=Object.freeze(Object.defineProperty({__proto__:null,default:Fg},Symbol.toStringTag,{value:"Module"})),Qk=()=>o.jsx(M,{text:"Grey Button",type:"submit"}),qk=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    text="Grey Button"
    type="submit"
  />
/* END */

export default Component
`,Ug=()=>o.jsxs(O,{code:"type",Component:Qk,Source:qk,undent:2,expand:!0,children:[o.jsxs("p",{children:["The default ",o.jsx("code",{children:"type"})," for a button is set to ",o.jsx("code",{children:"button"}),". In most cases this has no effect.  However, inside the scope of a ",o.jsx("code",{children:"form"})," element, the ",o.jsx("code",{children:"type"})," for a button would usually default to being ",o.jsx("code",{children:"submit"}),".  When clicked, the button would submit the form."]}),o.jsxs("p",{children:["This behaviour usually surprises people (it certainly catches me out from time to time).  Having an explicit default button type prevents this from happening.  When you really do want to add a button to submit a form, you should explicitly set the ",o.jsx("code",{children:"type"})," to"," ",o.jsx("code",{children:"submit"}),".  You can also set it to ",o.jsx("code",{children:"reset"})," to make a reset button for a form."]})]}),Jk=Object.freeze(Object.defineProperty({__proto__:null,default:Ug},Symbol.toStringTag,{value:"Module"})),eE=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Button"}),o.jsx(jg,{}),o.jsxs(ut,{tocName:"button",children:[o.jsx(ue,{title:"Properties"}),o.jsx(zg,{}),o.jsx(Mg,{}),o.jsx(Lg,{}),o.jsx(kg,{}),o.jsx(_g,{}),o.jsx(Eg,{}),o.jsx($g,{}),o.jsx(Ag,{}),o.jsx(Sg,{}),o.jsx(Tg,{}),o.jsx(wg,{}),o.jsx(Pg,{}),o.jsx(Ig,{}),o.jsx(Bg,{}),o.jsx(Ng,{}),o.jsx(Rg,{}),o.jsx(Og,{}),o.jsx(Dg,{}),o.jsx(Fg,{}),o.jsx(Ug,{}),o.jsx(ue,{title:"Components"}),o.jsx(bg,{})]})]}),tE=Object.freeze(Object.defineProperty({__proto__:null,default:eE},Symbol.toStringTag,{value:"Module"})),nE=({text:e})=>o.jsx("span",{className:"border pad pad-h-4 mar",children:e}),rE=()=>o.jsx(Qr,{buttons:[{text:"One"},{text:"Two"}],Button:nE}),oE=`import { Buttons } from '@/src/index.jsx'

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
`,Hg=()=>o.jsx(O,{code:"Button",Component:rE,Source:oE,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"Button"})," property (note the capital B) can be used to define a different component for rendering each button."]})}),aE=Object.freeze(Object.defineProperty({__proto__:null,default:Hg},Symbol.toStringTag,{value:"Module"})),sE=()=>o.jsxs(Qr,{children:[o.jsx(M,{text:"One",outline:!0}),o.jsx(M,{text:"Two",outline:!0})]}),lE=`import { Buttons, Button } from '@/src/index.jsx'

{/* START */}
import React from 'react'
// PRETEND: import { Buttons, Button } from '@abw/badger-react-ui'

const ButtonsExample = () =>
  <Buttons>
    <Button text="One" outline/>
    <Button text="Two" outline/>
  </Buttons>

export default ButtonsExample
`,Vg=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"Buttons"})," component can be used to render a connected set of buttons."]}),o.jsx(be,{Component:sE,code:lE,expand:!0})]}),iE=Object.freeze(Object.defineProperty({__proto__:null,default:Vg},Symbol.toStringTag,{value:"Module"})),cE=()=>o.jsx(o.Fragment,{children:o.jsx(Qr,{outline:!0,buttonClass:"blue shadow-1",buttons:[{text:"One"},{text:"Two"}]})}),uE=`import React from 'react'
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
`,Wg=()=>o.jsx(O,{code:"buttonClass",Component:cE,Source:uE,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"buttonClass"})," property can be used to add a CSS class to each button. Badger CSS targets the ",o.jsx("code",{children:"button"})," element for styling so you don't need to add any special classes to get the default styling."]})}),dE=Object.freeze(Object.defineProperty({__proto__:null,default:Wg},Symbol.toStringTag,{value:"Module"})),pE=()=>o.jsx(o.Fragment,{children:o.jsx(Qr,{buttons:[{text:"One",outline:!0},{text:"Two",outline:!0}]})}),fE=`import React from 'react'
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
`,Zg=()=>o.jsx(O,{code:"buttons",Component:pE,Source:fE,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"buttons"})," property can be used to define properties for a set of buttons."]})}),hE=Object.freeze(Object.defineProperty({__proto__:null,default:Zg},Symbol.toStringTag,{value:"Module"})),mE=()=>o.jsx(o.Fragment,{children:o.jsx(Qr,{outline:!0,className:"buttons border pad-2 bgc-90 bgd-10 bdr-2",buttons:[{text:"One"},{text:"Two"}]})}),gE=`import React from 'react'
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
`,Kg=()=>o.jsx(O,{code:"className",Component:mE,Source:gE,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"className"})," property can be used to set the CSS class for the buttons container element.  The default value is"," ",o.jsx("code",{children:"buttons"}),".  If you want to use the default styles provided by Badger CSS then you should include ",o.jsx("code",{children:"buttons"})," in the value you provide for ",o.jsx("code",{children:"className"})]})}),xE=Object.freeze(Object.defineProperty({__proto__:null,default:Kg},Symbol.toStringTag,{value:"Module"})),vE=()=>o.jsx(o.Fragment,{children:o.jsx(Qr,{outline:!0,buttons:[{text:"One"},{text:"Two"},{text:"Three",outline:!1,color:"orange"}]})}),yE=`import React from 'react'
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
`,Gg=()=>o.jsx(O,{code:"outline",Component:vE,Source:yE,undent:4,expand:!0,children:o.jsxs("p",{children:["Additional properties passed to the ",o.jsx("code",{children:"Buttons"})," component will be forwarded to each ",o.jsx("code",{children:"Button"})," component.  For example, you can set the ",o.jsx("code",{children:"outline"})," property on the parent",o.jsx("code",{children:"Buttons"})," component so that you don't have to repeat it for each button.  However, individual buttons can override any of these properties."]})}),CE=Object.freeze(Object.defineProperty({__proto__:null,default:Gg},Symbol.toStringTag,{value:"Module"})),jE=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Buttons"}),o.jsx(Vg,{}),o.jsxs(ut,{tocName:"buttons",children:[o.jsx(ue,{title:"Properties"}),o.jsx(Zg,{}),o.jsx(Gg,{}),o.jsx(Kg,{}),o.jsx(Wg,{}),o.jsx(ue,{title:"Components"}),o.jsx(Hg,{})]})]}),bE=Object.freeze(Object.defineProperty({__proto__:null,default:jE},Symbol.toStringTag,{value:"Module"})),SE=()=>o.jsx(ej,{text:"I like badgers",onChange:e=>console.log(`Checked: ${e}`)}),wE=`import { CheckboxState } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { CheckboxState } from '@abw/badger-react-ui

const CheckboxStateExample = () =>
  <CheckboxState
    text="I like badgers"
    onChange={checked => console.log(\`Checked: \${checked}\`)}
  />

export default CheckboxStateExample`,Yg=()=>o.jsx(O,{code:"CheckboxState",Component:SE,Source:wE,expand:!0,children:o.jsx("div",{children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"CheckboxState"})," function can be used to generate a Checkbox with internal state."]})})}),_E=Object.freeze(Object.defineProperty({__proto__:null,default:Yg},Symbol.toStringTag,{value:"Module"})),TE=()=>{const[e,t]=x.useState(!1);return o.jsx(In,{text:"I like badgers",checked:e,onChange:t})},kE=`import { Checkbox } from '@/src/index.jsx'

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

export default CheckboxExample`,Xg=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"Checkbox"})," component renders a checkbox with a label."]}),o.jsx(be,{Component:TE,code:kE,expand:!0})]}),EE=Object.freeze(Object.defineProperty({__proto__:null,default:Xg},Symbol.toStringTag,{value:"Module"})),LE=()=>{const[e,t]=x.useState(!1);return o.jsx(In,{text:"I like badgers",checked:e,onChange:t})},NE=`import { Checkbox } from '@/src/index.jsx'
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

export default CheckedExample`,Qg=()=>o.jsx(O,{code:"checked",Component:LE,Source:NE,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"checked"})," property should be passed to indicate if the checkbox is checked (",o.jsx("code",{children:"true"}),") or not (",o.jsx("code",{children:"false"}),")."]})}),RE=Object.freeze(Object.defineProperty({__proto__:null,default:Qg},Symbol.toStringTag,{value:"Module"})),OE=()=>{const[e,t]=x.useState(!1);return o.jsx(In,{checkedText:"I like badgers (well done!)",uncheckedText:"I like badgers (you really should!)",checked:e,onChange:t})},DE=`import { Checkbox } from '@/src/index.jsx'
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

export default CheckedTextExample`,qg=()=>o.jsx(O,{code:"checkedText / uncheckedText",Component:OE,Source:DE,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"checkedText"})," and ",o.jsx("code",{children:"uncheckedText"})," properties can be used to provide different text for the checked and unchecked states."]})}),ME=Object.freeze(Object.defineProperty({__proto__:null,default:qg},Symbol.toStringTag,{value:"Module"})),AE=()=>{const[e,t]=x.useState(!1);return o.jsx(In,{text:"I like badgers",className:"large border",checked:e,onChange:t})},PE=`import { Checkbox } from '@/src/index.jsx'
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

export default ClassName`,Jg=()=>o.jsx(O,{code:"className",Component:AE,Source:PE,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"className"})," property can be used to add a CSS class to the checkbox ",o.jsx("code",{children:"label"})," element."]})}),$E=Object.freeze(Object.defineProperty({__proto__:null,default:Jg},Symbol.toStringTag,{value:"Module"})),IE=()=>{const[e,t]=x.useState(!1);return o.jsx(In,{disabled:!0,text:"I like badgers",checked:e,onChange:t})},BE=`import { Checkbox } from '@/src/index.jsx'
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

export default DisabledExample`,e0=()=>o.jsx(O,{code:"disabled",Component:IE,Source:BE,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"disabled"})," property can be set to disable a checkbox."]})}),zE=Object.freeze(Object.defineProperty({__proto__:null,default:e0},Symbol.toStringTag,{value:"Module"})),FE=()=>{const[e,t]=x.useState(!1);return o.jsx(In,{text:"I like badgers",checked:e,onChange:t})},UE=`import { Checkbox } from '@/src/index.jsx'
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

export default OnChangeExample`,t0=()=>o.jsx(O,{code:"onChange",Component:FE,Source:UE,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"onChange"})," property should be used to define a function to handle changes in the state."]})}),HE=Object.freeze(Object.defineProperty({__proto__:null,default:t0},Symbol.toStringTag,{value:"Module"})),VE=()=>{const[e,t]=x.useState(!1);return o.jsx(In,{text:"Badger are the best!",checked:e,onChange:t})},WE=`import { Checkbox } from '@/src/index.jsx'
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

export default TextExample`,n0=()=>o.jsx(O,{code:"text",Component:VE,Source:WE,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"text"})," property should be used to set the text for the checkbox."]})}),ZE=Object.freeze(Object.defineProperty({__proto__:null,default:n0},Symbol.toStringTag,{value:"Module"})),KE=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Checkbox"}),o.jsx(Xg,{}),o.jsxs(ut,{tocName:"checkbox",children:[o.jsx(ue,{title:"Properties"}),o.jsx(n0,{}),o.jsx(Qg,{}),o.jsx(qg,{}),o.jsx(t0,{}),o.jsx(Jg,{}),o.jsx(e0,{}),o.jsx(ue,{title:"Components"}),o.jsx(Yg,{})]})]}),GE=Object.freeze(Object.defineProperty({__proto__:null,default:KE},Symbol.toStringTag,{value:"Module"})),YE=()=>o.jsx(o.Fragment,{children:o.jsx(gn,{text:"Delete",color:"red",iconRight:"trash",onClick:()=>window.alert("Confirmed!")})}),XE=`import { Confirm } from '@/src/index.jsx'

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

export default ConfirmExample`,r0=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"Confirm"})," component provides an extra safety net for potentially dangerous operations.  When the user click on the button it then prompts them to confirm or cancel the action."]}),o.jsxs("p",{className:"cols-2 stack-desktop",children:["Additional properties not listed below are forwarded onto the initial button.  For example, you can set the ",o.jsx("code",{children:"text"}),","," ",o.jsx("code",{children:"color"}),", add icons, and so on, just like you would for any other button."]}),o.jsx(be,{Component:YE,code:XE,expand:!0})]}),QE=Object.freeze(Object.defineProperty({__proto__:null,default:r0},Symbol.toStringTag,{value:"Module"})),qE=()=>o.jsx(gn,{text:"Delete",color:"red",cancel:{text:"Go Back",color:"yellow",outline:!1,iconLeft:"angle-left"}}),JE=`import React from 'react'
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

export default CancelExample`,o0=()=>o.jsx(O,{code:"cancel",Component:qE,Source:JE,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"cancel"})," property can be used to set properties for the cancel button."]})}),eL=Object.freeze(Object.defineProperty({__proto__:null,default:o0},Symbol.toStringTag,{value:"Module"})),tL=()=>o.jsx(gn,{text:"Delete",color:"red",cancelText:"Nah",cancelColor:"blue",cancelIcon:"angle-left"}),nL=`import React from 'react'
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

export default CancelExample`,a0=()=>o.jsx(O,{id:"cancelProps",code:"cancelXXX",Component:tL,Source:nL,undent:2,expand:!0,children:o.jsxs("p",{children:["You can also set individual properties for the cancel button",o.jsx("code",{children:"cancelIcon"}),","," ",o.jsx("code",{children:"cancelText"}),","," ",o.jsx("code",{children:"cancelColor"})," and"," ",o.jsx("code",{children:"cancelClass"}),"."]})}),rL=Object.freeze(Object.defineProperty({__proto__:null,default:a0},Symbol.toStringTag,{value:"Module"})),oL=()=>o.jsx(o.Fragment,{children:o.jsx(gn,{className:"buttons border pad-2 bgc-90 bgd-10 bdr-2",icon:"trash",color:"red"})}),aL=`import React from 'react'
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
`,s0=()=>o.jsx(O,{code:"className",Component:oL,Source:aL,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"className"})," property can be used to set the CSS class for the buttons container element.  The default value is"," ",o.jsx("code",{children:"buttons"}),".  If you want to use the default styles provided by Badger CSS then you should include ",o.jsx("code",{children:"buttons"})," in the value you provide for ",o.jsx("code",{children:"className"})]})}),sL=Object.freeze(Object.defineProperty({__proto__:null,default:s0},Symbol.toStringTag,{value:"Module"})),lL=()=>o.jsx(gn,{text:"Click to Delete",color:"red"}),iL=`import React from 'react'
import { Confirm } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Confirm
    text="Click to Delete"
    color="red"
  />
/* END */

export default Component
`,l0=()=>o.jsx(O,{code:"color",Component:lL,Source:iL,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"color"})," property can be used to set the color for the initial button."]})}),cL=Object.freeze(Object.defineProperty({__proto__:null,default:l0},Symbol.toStringTag,{value:"Module"})),uL=()=>o.jsx(gn,{text:"Delete",color:"red",confirm:{text:"Yep, do it!",color:"green",iconRight:"angle-right"}}),dL=`import React from 'react'
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

export default ConfirmExample`,i0=()=>o.jsx(O,{code:"confirm",Component:uL,Source:dL,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"confirm"})," property can be used to set properties for the confirmation button."]})}),pL=Object.freeze(Object.defineProperty({__proto__:null,default:i0},Symbol.toStringTag,{value:"Module"})),fL=()=>o.jsx(gn,{text:"Delete",color:"red",confirmText:"Yep",confirmColor:"green",confirmIcon:"trash"}),hL=`import React from 'react'
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

export default ConfirmProps`,c0=()=>o.jsx(O,{id:"confirmProps",code:"confirmXXX",Component:fL,Source:hL,undent:2,expand:!0,children:o.jsxs("p",{children:["You can also set individual properties for the confirm button",o.jsx("code",{children:"confirmIcon"}),","," ",o.jsx("code",{children:"confirmText"}),","," ",o.jsx("code",{children:"confirmColor"})," and"," ",o.jsx("code",{children:"confirmClass"}),"."]})}),mL=Object.freeze(Object.defineProperty({__proto__:null,default:c0},Symbol.toStringTag,{value:"Module"})),gL=()=>o.jsx(gn,{text:"Click to Delete",color:"red",iconRight:"trash"}),xL=`import React from 'react'
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
`,u0=()=>o.jsx(O,{code:"iconRight",Component:gL,Source:xL,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"iconRight"})," property can be used to add an icon to the right.  Or ",o.jsx("code",{children:"iconLeft"})," can be used to add an icon to the left. Or just an ",o.jsx("code",{children:"icon"})," if you want an icon without any text."]})}),vL=Object.freeze(Object.defineProperty({__proto__:null,default:u0},Symbol.toStringTag,{value:"Module"})),yL=()=>o.jsx(gn,{text:"Delete",color:"red",onClick:()=>window.alert("Deleted!")}),CL=`import React from 'react'
import { Confirm } from '@/src/index.jsx'

const OnClickExample = () =>
  /* START */
  <Confirm
    text="Delete"
    color="red"
    onClick={() => window.alert('Deleted!')}
  />
  /* END */

export default OnClickExample`,d0=()=>o.jsx(O,{code:"onClick",Component:yL,Source:CL,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"onClick"})," property should be used to define the handler which will be called when the user confirms the action."]})}),jL=Object.freeze(Object.defineProperty({__proto__:null,default:d0},Symbol.toStringTag,{value:"Module"})),bL=()=>o.jsx(gn,{text:"Click to Delete"}),SL=`import React from 'react'
import { Confirm } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Confirm
    text="Click to Delete"
  />
/* END */

export default Component
`,p0=()=>o.jsx(O,{code:"text",Component:bL,Source:SL,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"text"})," property can be used to set the text for the initial button."]})}),wL=Object.freeze(Object.defineProperty({__proto__:null,default:p0},Symbol.toStringTag,{value:"Module"})),_L=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Confirm"}),o.jsx(r0,{}),o.jsxs(ut,{tocName:"confirm",children:[o.jsx(ue,{title:"Properties"}),o.jsx(p0,{}),o.jsx(l0,{}),o.jsx(u0,{}),o.jsx(s0,{}),o.jsx(o0,{}),o.jsx(a0,{}),o.jsx(i0,{}),o.jsx(c0,{}),o.jsx(ue,{title:"Event Handlers"}),o.jsx(d0,{})]})]}),TL=Object.freeze(Object.defineProperty({__proto__:null,default:_L},Symbol.toStringTag,{value:"Module"})),kL=[{name:"Alan",animal:"Anteater",id:10,role:"admin"},{name:"Bobby",animal:"Badger",id:20,role:"admin"},{name:"Brenda",animal:"Badger",id:30,role:"admin"},{name:"Christina",animal:"Cat",id:40,role:"user"},{name:"Derek",animal:"Dog",id:50,role:"user"},{name:"Delia",animal:"Donkey",id:60,role:"admin"},{name:"Edwin",animal:"Elephant",id:70,role:"admin"},{name:"Frank",animal:"Ferret",id:80,role:"user"},{name:"Felicity",animal:"Fox",id:90,role:"admin"},{name:"Gertrude",animal:"Goat",id:11,role:"admin"},{name:"Hector",animal:"Hamster",id:12,role:"admin"},{name:"Ian",animal:"Iguana",id:13,role:"user"},{name:"Julie",animal:"Jellyfish",id:14,role:"user"},{name:"Kevin",animal:"Koala",id:21,role:"user"},{name:"Lionel",animal:"Llama",id:22,role:"user"},{name:"Mary",animal:"Magpie",id:23,role:"user"},{name:"Nerys",animal:"Narwhal",id:24,role:"user"},{name:"Oliver",animal:"Octopus",id:31,role:"user"},{name:"Penny",animal:"Panda",id:32,role:"admin"},{name:"Quentin",animal:"Quail",id:33,role:"admin"},{name:"Roger",animal:"Raccoon",id:41,role:"user"},{name:"Simon",animal:"Stoat",id:42,role:"user"},{name:"Terry",animal:"Tiger",id:43,role:"user"},{name:"Ursula",animal:"Unicorn",id:101,role:"user"},{name:"Violet",animal:"Vole",id:102,role:"user"},{name:"Willy",animal:"Wombat",id:103,role:"user"},{name:"Xerces",animal:"Xenus",id:201,role:"user"},{name:"Yvonne",animal:"Yaz",id:202,role:"user"},{name:"Zebedee",animal:"Zebra",id:203,role:"user"}],EL=()=>o.jsx(gb,{color:"brand",rows:kL,columns:"id name animal role",pager:{size:"small"}}),LL=`import { Datatable } from '@/src/index.jsx'

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

export default DatatableExample`,f0=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"Datatable"})," component can be used to display, sort, filter and page sets of data."]}),o.jsx(be,{Component:EL,code:LL})]}),NL=Object.freeze(Object.defineProperty({__proto__:null,default:f0},Symbol.toStringTag,{value:"Module"})),RL=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Datatable"}),o.jsx(f0,{}),o.jsx(ut,{tocName:"datatable",children:o.jsx(ue,{title:"Properties"})})]}),OL=Object.freeze(Object.defineProperty({__proto__:null,default:RL},Symbol.toStringTag,{value:"Module"})),DL=()=>o.jsx(Ke,{summary:"Click to reveal",children:"This is the content that is revealed."}),ML=`import { Details } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Details } from '@abw/badger-react-ui

const DetailsExample = () =>
  <Details summary="Click to reveal">
    This is the content that is revealed.
  </Details>

export default DetailsExample`,h0=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"Details"})," component displays a summary with revealable content using the native HTML ",o.jsx("code",{children:"details"})," element."]}),o.jsx(be,{Component:DL,code:ML})]}),AL=Object.freeze(Object.defineProperty({__proto__:null,default:h0},Symbol.toStringTag,{value:"Module"})),PL=()=>o.jsxs("div",{className:"grid-1 gap-4",children:[o.jsx(Ke,{summary:"Bordered",border:!0,children:"This is the content that is revealed."}),o.jsx(Ke,{summary:"Bordered and Lined",border:!0,lined:!0,children:"This is the content that is revealed."}),o.jsx(Ke,{summary:"Wide Border",border:3,lined:!0,children:"This is the content that is revealed."})]}),$L=`import React from 'react'
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

export default DetailsExample`,m0=()=>o.jsx(O,{code:"border",Component:PL,Source:$L,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"border"})," property can be used to add a CSS class to add a border around the component.  By itself it will add a one pixel border.  You can also set it to an integer (in pixels) for a wider border.  The same border width will also be applied to the line separating the summary and content when the ",o.jsx("code",{children:"lined"})," ","property is used."]})}),IL=Object.freeze(Object.defineProperty({__proto__:null,default:m0},Symbol.toStringTag,{value:"Module"})),BL=()=>o.jsxs("div",{className:"grid-1 gap-4",children:[o.jsx(Ke,{summary:"Blue Border",color:"blue",border:!0,lined:!0,children:"This is the content that is revealed."}),o.jsx(Ke,{summary:"Blue Shaded",color:"blue",shaded:!0,lined:!0,border:!0,children:"This is the content that is revealed."})]}),zL=`import React from 'react'
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

export default DetailsExample`,g0=()=>o.jsx(O,{code:"color",Component:BL,Source:zL,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"color"})," property can be used to set the color range. It is most commonly used in conjunction with the ",o.jsx("code",{children:"border"}),","," ",o.jsx("code",{children:"lined"})," and ",o.jsx("code",{children:"shaded"})," properties."]})}),FL=Object.freeze(Object.defineProperty({__proto__:null,default:g0},Symbol.toStringTag,{value:"Module"})),UL=()=>o.jsx("div",{className:"grid-1 gap-4",children:o.jsx(Ke,{summary:"This is the summary",content:"This is the content that is revealed."})}),HL=`import React from 'react'
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

export default DetailsExample`,x0=()=>o.jsx(O,{code:"content",Component:UL,Source:HL,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"content"})," property can be used as a short-cut to set the body content for simple cases."]})}),VL=Object.freeze(Object.defineProperty({__proto__:null,default:x0},Symbol.toStringTag,{value:"Module"})),WL=()=>o.jsx(Ke,{summary:"Lined Details",lined:!0,children:"This is the content that is revealed."}),ZL=`import React from 'react'
import { Details } from '@/src/index.jsx'

const DetailsExample = () =>
  /* START */
  <Details summary="Lined Details" lined>
    This is the content that is revealed.
  </Details>
  /* END */

export default DetailsExample`,v0=()=>o.jsx(O,{code:"lined",Component:WL,Source:ZL,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"lined"})," property can be used to add a CSS class to add a line between the summary and content."]})}),KL=Object.freeze(Object.defineProperty({__proto__:null,default:v0},Symbol.toStringTag,{value:"Module"})),GL=()=>o.jsx("div",{className:"grid-1 gap-4",children:o.jsx(Ke,{summary:"This is the summary",open:!0,children:"This is the content that is revealed."})}),YL=`import React from 'react'
import { Details } from '@/src/index.jsx'

const DetailsExample = () =>
  <div className="grid-1 gap-4">
    {/* START */}
    <Details summary="This is the summary" open>
      This is the content that is revealed.
    </Details>
    {/* END */}
  </div>

export default DetailsExample`,y0=()=>o.jsx(O,{code:"open",Component:GL,Source:YL,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"open"})," property can be set to make the details initially open."]})}),XL=Object.freeze(Object.defineProperty({__proto__:null,default:y0},Symbol.toStringTag,{value:"Module"})),QL=()=>o.jsxs("div",{className:"grid-1 gap-4",children:[o.jsx(Ke,{summary:"Border Radius",border:!0,lined:!0,radius:2,children:"This is the content that is revealed."}),o.jsx(Ke,{summary:"Border Radius",border:!0,lined:!0,radius:4,children:"This is the content that is revealed."})]}),qL=`import React from 'react'
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

export default DetailsExample`,C0=()=>o.jsx(O,{code:"radius",Component:QL,Source:qL,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"radius"})," property can be used to set the border radius. It should be an integer in units of 0.25rem."]})}),JL=Object.freeze(Object.defineProperty({__proto__:null,default:C0},Symbol.toStringTag,{value:"Module"})),eN=()=>o.jsxs("div",{className:"grid-1 gap-4",children:[o.jsx(Ke,{summary:"Shaded",shaded:!0,children:"This is the content that is revealed."}),o.jsx(Ke,{summary:"Shaded and Border",border:!0,shaded:!0,children:"This is the content that is revealed."}),o.jsx(Ke,{summary:"Shaded, Lined and Border",border:!0,shaded:!0,lined:!0,children:"This is the content that is revealed."})]}),tN=`import React from 'react'
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

export default DetailsExample`,j0=()=>o.jsx(O,{code:"shaded",Component:eN,Source:tN,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"shaded"})," property can be used to add shading."]})}),nN=Object.freeze(Object.defineProperty({__proto__:null,default:j0},Symbol.toStringTag,{value:"Module"})),rN=()=>o.jsxs("div",{className:"grid-1 gap-4",children:[o.jsx(Ke,{summary:"Shadow 1",border:!0,shaded:!0,shadow:1,children:"This is the content that is revealed."}),o.jsx(Ke,{summary:"Shadow 3",border:!0,shaded:!0,shadow:3,children:"This is the content that is revealed."}),o.jsx(Ke,{summary:"Shadow 5",border:!0,shaded:!0,shadow:5,children:"This is the content that is revealed."})]}),oN=`import React from 'react'
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

export default DetailsExample`,b0=()=>o.jsx(O,{code:"shadow",Component:rN,Source:oN,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"shadow"})," property can be used to add a drop shadow. This can be any integer from 1 to 5."]})}),aN=Object.freeze(Object.defineProperty({__proto__:null,default:b0},Symbol.toStringTag,{value:"Module"})),sN=()=>o.jsxs("div",{className:"grid-1 gap-4",children:[o.jsx(Ke,{summary:"This is the summary",children:"This is the content that is revealed."}),o.jsx(Ke,{border:!0,lined:!0,summary:o.jsxs("div",{className:"wide flex space middle pad-r-2",children:[o.jsx("div",{children:"Control Panel"}),o.jsx(Q,{name:"cog"})]}),children:"This is the content that is revealed."})]}),lN=`import React from 'react'
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

export default DetailsExample`,S0=()=>o.jsx(O,{code:"summary",Component:sN,Source:lN,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"summary"})," property is used to set the summary text. It can be a text string or any JSX content."]})}),iN=Object.freeze(Object.defineProperty({__proto__:null,default:S0},Symbol.toStringTag,{value:"Module"})),cN=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Details"}),o.jsx(h0,{}),o.jsxs(ut,{tocName:"details",children:[o.jsx(ue,{title:"Properties"}),o.jsx(S0,{}),o.jsx(x0,{}),o.jsx(y0,{}),o.jsx(v0,{}),o.jsx(m0,{}),o.jsx(C0,{}),o.jsx(j0,{}),o.jsx(b0,{}),o.jsx(g0,{}),o.jsx(ue,{title:"CSS Classes"}),o.jsxs(K,{code:"className",children:["Set a CSS class for the ",o.jsx("code",{children:"details"})," container element."]}),o.jsxs(K,{code:"summaryClass",children:["Set a CSS class for the ",o.jsx("code",{children:"summary"})," element."]}),o.jsxs(K,{code:"contentClass",children:["Set a CSS class for the content ",o.jsx("code",{children:"div"})," element."]}),o.jsx(ue,{title:"Components"}),o.jsx(K,{code:"Summary",id:"Summary-component",children:"Renders the summary element."}),o.jsx(K,{code:"Content",id:"Content=component",children:"Renders the content."})]})]}),uN=Object.freeze(Object.defineProperty({__proto__:null,default:cN},Symbol.toStringTag,{value:"Module"})),dN=()=>o.jsx(ct,{text:"Dropdown Menu",options:["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger","Colin Camel","David Donkey","Eddie Elephant","Franky Ferret","Gina Goat","Helen Horse","Ian Iguana","Juliet Jackdaw","Kevin Kangaroo","Linda Llama","Mike Monkey"]}),pN=`import { Dropdown } from '@/src/index.jsx'

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

export default DropdownExample`,w0=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"Dropdown"})," component generates a dropdown menu"]}),o.jsxs("div",{className:"cols-2 stack-desktop",children:[o.jsx("p",{children:"The default behaviour is to open the dropdown menu when the user clicks on the trigger."}),o.jsxs("p",{children:["Keyboard navigation is also supported.  The user can ",o.jsx("code",{children:"TAB"})," ","to the trigger and then press ",o.jsx("code",{children:"SPACE"}),", ",o.jsx("code",{children:"ENTER"}),","," ",o.jsx("code",{children:"DOWN"})," or ",o.jsx("code",{children:"UP"})," to open the menu."]}),o.jsxs("p",{children:["Once the menu is open, the ",o.jsx("code",{children:"DOWN"})," and ",o.jsx("code",{children:"UP"})," keys"," ","can be used to select menu items, ",o.jsx("code",{children:"ENTER"})," or"," ",o.jsx("code",{children:"SPACE"})," will select the current item and ",o.jsx("code",{children:"ESCAPE"})," ","will close the menu."]})]}),o.jsx(be,{Component:dN,code:pN})]}),fN=Object.freeze(Object.defineProperty({__proto__:null,default:w0},Symbol.toStringTag,{value:"Module"})),hN=()=>o.jsx(ct,{text:"Dropdown Menu",iconLeft:"angle-down",options:[{text:"Item One"},{text:"Item Two"},{text:"Item Three"}]}),mN=`import React from 'react'
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

export default DropdownExample`,_0=()=>o.jsx(O,{code:"iconLeft",Component:hN,Source:mN,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"iconLeft"})," property can used to define an icon for the left side of the trigger.  The ",o.jsx("code",{children:"iconLeftClass"})," can be used to add a CSS class for it."]})}),gN=Object.freeze(Object.defineProperty({__proto__:null,default:_0},Symbol.toStringTag,{value:"Module"})),xN=()=>o.jsx(ct,{text:"Dropdown Menu",iconLeft:"angle-right",iconLeftRotate:90,options:[{text:"Item One"},{text:"Item Two"},{text:"Item Three"}]}),vN=`import React from 'react'
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

export default DropdownExample`,T0=()=>o.jsx(O,{code:"iconLeftRotate",Component:xN,Source:vN,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"iconLeftRotate"})," property can used to specify the rotation (in degrees) of the icon when the dropdown is open."]})}),yN=Object.freeze(Object.defineProperty({__proto__:null,default:T0},Symbol.toStringTag,{value:"Module"})),CN=()=>o.jsx(ct,{right:!0,text:"Dropdown Menu",iconRight:"angle-down",options:[{text:"Item One"},{text:"Item Two"},{text:"Item Three"}]}),jN=`import React from 'react'
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

export default DropdownExample`,k0=()=>o.jsx(O,{code:"iconRight",Component:CN,Source:jN,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"iconRight"})," property can used to define an icon for the left side of the trigger.  The ",o.jsx("code",{children:"iconRightClass"})," can be used to add a CSS class for it."]})}),bN=Object.freeze(Object.defineProperty({__proto__:null,default:k0},Symbol.toStringTag,{value:"Module"})),SN=()=>o.jsx(ct,{text:"Dropdown Menu",iconRight:"angle-left",iconRightRotate:-90,options:[{text:"Item One"},{text:"Item Two"},{text:"Item Three"}]}),wN=`import React from 'react'
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

export default DropdownExample`,E0=()=>o.jsx(O,{code:"iconRightRotate",Component:SN,Source:wN,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"iconRightRotate"})," property can used to specify the rotation (in degrees) of the icon when the dropdown is open."]})}),_N=Object.freeze(Object.defineProperty({__proto__:null,default:E0},Symbol.toStringTag,{value:"Module"})),TN=()=>o.jsx(ct,{text:"Dropdown Menu",onSelect:e=>alert(`You selected: ${e.text}`),options:[{text:"Item One"},{text:"Item Two"},{text:"Item Three"}]}),kN=`import React from 'react'
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

export default DropdownExample`,L0=()=>o.jsx(O,{code:"onSelect",Component:TN,Source:kN,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"onSelect"})," property should be used to define a handler which will be called when an item is selected, either by being clicked on or by keyboard selection.  The handler will be passed the data for the item that was selected."]})}),EN=Object.freeze(Object.defineProperty({__proto__:null,default:L0},Symbol.toStringTag,{value:"Module"})),LN=()=>o.jsx(ct,{openOnHover:!0,text:"Dropdown Menu",options:[{text:"Item One"},{text:"Item Two"},{text:"Item Three"}]}),NN=`import React from 'react'
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

export default DropdownExample`,N0=()=>o.jsx(O,{code:"openOnHover",Component:LN,Source:NN,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"openOnHover"})," property can added to make the menu open when the mouse hovers over the trigger."]})}),RN=Object.freeze(Object.defineProperty({__proto__:null,default:N0},Symbol.toStringTag,{value:"Module"})),ON=()=>o.jsx(ct,{text:"Simple Options",options:["Hello","World",10,11]}),DN=`import React from 'react'
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

export default DropdownExample`,MN=()=>o.jsx(ct,{text:"Option Separators",options:["One","Two","Three",{separator:!0},"Eleven","Twelve","Thirteen",{separator:!0},"One Hundred","Two Hundred","Three Hundred"]}),AN=`import React from 'react'
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

export default DropdownExample`,PN=()=>o.jsx(ct,{text:"Object Options",options:[{text:"Star",iconLeft:"star"},{text:"Heart",iconRight:"heart",className:"text-right"},{text:"Move",iconLeft:"angle-left",iconRight:"angle-right"},{text:o.jsxs("div",{className:"flex space small",children:[o.jsx("div",{children:"Foo"}),o.jsx("div",{children:"Bar"})]})}]}),$N=`import React from 'react'
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

export default DropdownExample`,IN=()=>o.jsx(ct,{text:"Option Headings",options:[{heading:"Single Digit Numbers"},"One","Two","Three",{heading:"Double Digit Numbers"},"Eleven","Twelve","Thirteen",{heading:"Triple Digit Numbers"},"One Hundred","Two Hundred","Three Hundred"]}),BN=`import React from 'react'
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

export default DropdownExample`,zN=()=>o.jsx(ct,{text:"Disabled Options",options:[{text:"Disabled #1",disabled:!0},{text:"Enabled #2"},{text:"Disabled #3",disabled:!0},{text:"Enabled #4"},{text:"Disabled #5",disabled:!0}]}),FN=`import React from 'react'
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

export default DropdownExample`,R0=()=>o.jsxs(K,{code:"options",children:[o.jsxs("div",{className:"cols-2 stack-desktop mar-b-4",children:[o.jsxs("p",{children:["The ",o.jsx("code",{children:"options"})," property should be used to define an array of options to display in the menu."]}),o.jsx("p",{children:"For simple cases, each element in the array can be a text string or numerical value."})]}),o.jsx(be,{Component:ON,code:DN,caption:"options",expand:!1,undent:2}),o.jsxs("div",{className:"cols-2 stack-desktop mar-b-4",children:[o.jsxs("p",{children:["An element in the ",o.jsx("code",{children:"options"})," array can also be an object. It should contain a ",o.jsx("code",{children:"text"})," property which can be a string or JSX fragment. A ",o.jsx("code",{children:"className"})," can be included to add a CSS class to the option."]}),o.jsxs("p",{children:["The content for an element is rendered using the ",o.jsx("code",{children:"WithIcon"})," ","component from"," ",o.jsx("a",{href:"https://abw.github.io/badger-icon/",children:"Badger Icon"})," allowing you to include ",o.jsx("code",{children:"iconLeft"})," and ",o.jsx("code",{children:"iconRight"})," properties to add icons to either side, along with ",o.jsx("code",{children:"iconLeftClass"})," and"," ",o.jsx("code",{children:"iconRightClass"})," to set CSS classes for those icons."]})]}),o.jsx(be,{Component:PN,code:$N,caption:"options",expand:!1,undent:2}),o.jsx("div",{className:"cols-2 stack-desktop mar-b-4",children:o.jsxs("p",{children:["An object in the ",o.jsx("code",{children:"options"})," array can have a"," ",o.jsx("code",{children:"disabled"})," property set to ",o.jsx("code",{children:"true"})," to disable the option."]})}),o.jsx(be,{Component:zN,code:FN,caption:"options",expand:!1,undent:2}),o.jsx("div",{className:"cols-2 stack-desktop mar-b-4",children:o.jsxs("p",{children:["An object in the ",o.jsx("code",{children:"options"})," array can have a"," ",o.jsx("code",{children:"separator"})," property set to ",o.jsx("code",{children:"true"})," to create a separator."]})}),o.jsx(be,{Component:MN,code:AN,caption:"options",expand:!1,undent:2}),o.jsx("div",{className:"cols-2 stack-desktop mar-b-4",children:o.jsxs("p",{children:["An object in the ",o.jsx("code",{children:"options"})," array can have a"," ",o.jsx("code",{children:"heading"})," property to create a section heading."]})}),o.jsx(be,{Component:IN,code:BN,caption:"options",expand:!1,undent:2})]}),UN=Object.freeze(Object.defineProperty({__proto__:null,default:R0},Symbol.toStringTag,{value:"Module"})),HN=()=>o.jsx(ct,{right:!0,text:"Dropdown Menu",options:[{text:"Item One"},{text:"Item Two"},{text:"Item Three"}]}),VN=`import React from 'react'
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

export default DropdownExample`,O0=()=>o.jsx(O,{code:"right",Component:HN,Source:VN,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"right"})," property can added to align the dropdown menu to the right edge of the trigger"]})}),WN=Object.freeze(Object.defineProperty({__proto__:null,default:O0},Symbol.toStringTag,{value:"Module"})),ZN=()=>o.jsx(ct,{text:"The Trigger Text",options:["Item One","Item Two","Item Three"]}),KN=`import React from 'react'
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

export default DropdownExample`,D0=()=>o.jsx(O,{code:"text",Component:ZN,Source:KN,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"text"})," property should be used to define the text for the trigger."]})}),GN=Object.freeze(Object.defineProperty({__proto__:null,default:D0},Symbol.toStringTag,{value:"Module"})),YN=()=>o.jsx(ct,{wide:!0,text:"Dropdown Menu",options:[{text:"Item One"},{text:"Item Two"},{text:"Item Three"}]}),XN=`import React from 'react'
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

export default DropdownExample`,M0=()=>o.jsx(O,{code:"wide",Component:YN,Source:XN,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"wide"})," property can added to make the menu expand to the full width of the container."]})}),QN=Object.freeze(Object.defineProperty({__proto__:null,default:M0},Symbol.toStringTag,{value:"Module"})),ts=({children:e,align:t="top"})=>o.jsx("div",{className:`grid-2 gap-h-8 stack-desktop ${t}`,style:{"--prose-width":"100%"},children:e}),qN=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Dropdown"}),o.jsx(w0,{}),o.jsxs(ut,{tocName:"dropdown",children:[o.jsx(ue,{title:"Properties"}),o.jsx(D0,{}),o.jsx(R0,{}),o.jsx(L0,{}),o.jsx(N0,{}),o.jsx(O0,{}),o.jsx(M0,{}),o.jsx(_0,{}),o.jsx(T0,{}),o.jsx(k0,{}),o.jsx(E0,{}),o.jsxs(ts,{children:[o.jsxs("div",{className:"flow",children:[o.jsx(ue,{title:"CSS Classes"}),o.jsxs(K,{code:"className",children:["Used to set the CSS class for the dropdown container.  The default value is ",o.jsx("code",{children:"dropdown"}),"."]}),o.jsxs(K,{code:"openClass",children:["Used to set the CSS class added to the dropdown container when the menu is open.  The default value is ",o.jsx("code",{children:"open"}),"."]}),o.jsxs(K,{code:"closedClass",children:["Used to set the CSS class added to the dropdown container when the menu is closed.  The default value is ",o.jsx("code",{children:"closed"}),"."]}),o.jsxs(K,{code:"triggerClass",children:["Used to set the CSS class added to the dropdown trigger. The default value is ",o.jsx("code",{children:"trigger"}),"."]}),o.jsxs(K,{code:"menuClass",children:["Used to set the CSS class added to the dropdown menu container. The default value is ",o.jsx("code",{children:"menu border bdr-1"}),".  The"," ",o.jsx("code",{children:"border"})," utility class adds a border and"," ",o.jsx("code",{children:"bdr-1"})," sets the border radius to 1 unit (0.25rem or 4px)."]}),o.jsxs(K,{code:"optionClass",children:["Used to set the CSS class added to each dropdown menu item. The default value is ",o.jsx("code",{children:"item no-hover"}),".  The"," ",o.jsx("code",{children:"no-hover"})," class suppresses the hover styles that would usually be applied to menu items.  Instead the"," ",o.jsx("code",{children:"active"})," class is added to the active item, selected either by hovering over it or by keyboard navigation."]}),o.jsxs(K,{code:"separatorClass",children:["Used to set the CSS class added to the dropdown menu separator. The default value is ",o.jsx("code",{children:"separator"}),"."]})]}),o.jsxs("div",{className:"flow",children:[o.jsx(ue,{title:"Components"}),o.jsxs(K,{code:"Trigger",id:"Trigger-component",children:["Renders the dropdown menu trigger.  Defaults to ",o.jsx("code",{children:"DropdownTrigger"}),"."]}),o.jsxs(K,{code:"Menu",id:"Menu-component",children:["Renders the dropdown menu.  Defaults to ",o.jsx("code",{children:"DropdownMenu"}),"."]}),o.jsxs(K,{code:"Option",id:"Option-component",children:["Renders each dropdown menu option.  Defaults to ",o.jsx("code",{children:"DropdownOption"}),"."]}),o.jsxs(K,{code:"Separator",id:"Separator-component",children:["Renders a separator between menu items.  Defaults to ",o.jsx("code",{children:"DropdownSeparator"}),"."]})]})]})]})]}),JN=Object.freeze(Object.defineProperty({__proto__:null,default:qN},Symbol.toStringTag,{value:"Module"})),eR=()=>o.jsx(Q,{name:"check"}),tR=`import React from 'react'
import { Icon } from '@/src/index.jsx'

{/* START */}
// PRETEND: import { Icon } from '@abw/badger-react-ui'

const IconExample = () =>
  <Icon name="check"/>

export default IconExample
`,nR=Ty(0,100,5),sl=({name:e,stop:t,setStop:n,disabled:r=!1})=>o.jsxs("select",{name:e,required:!0,value:t,onChange:a=>n(a.target.value),disabled:r,children:[o.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Select Stop"}),o.jsx("option",{value:"",children:"None"}),nR.map(a=>o.jsx("option",{value:a,children:a},a))]}),rR=()=>{const[e,t]=x.useState(0),[n,r]=x.useState({name:"bars"}),a=c=>()=>{r(u=>({...u,[c]:!u[c]})),t(u=>u+1)},s=c=>u=>{r(d=>({...d,[c]:u})),t(d=>d+1)},i=`<Icon
  ${aR(n)}
/>`;return o.jsxs("div",{className:"example grid-2 gap-8 stack-desktop",children:[o.jsxs("div",{children:[o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Output"}),o.jsx("div",{className:"output mar-b-8",children:o.jsx(sR,{options:n},e)})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Markup"}),o.jsx(tr,{code:i,language:"html",expand:!0})]})]}),o.jsx(oR,{options:n,setOption:s,toggleOption:a})]})},oR=({options:e,setOption:t})=>{const n=t("name"),r=t("size"),a=t("color"),s=t("foreground"),l=t("background"),i=t("foregroundDark"),c=t("backgroundDark");return o.jsxs("div",{children:[o.jsxs("div",{className:"grid-3 gap-4 stack-mobile top",children:[o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Icon Name"}),o.jsx($u,{icon:e.name,setIcon:n})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Size"}),o.jsx(Q3,{size:e.size,setSize:r})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Color"}),o.jsx(X3,{color:e.color,setColor:a,disabled:e.type})]})]}),o.jsxs("div",{className:"grid-2 gap-4 gap-v-0 stack-mobile top",children:[o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Foreground Stop"}),o.jsx(sl,{stop:e.foreground,setStop:s})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Background Stop"}),o.jsx(sl,{stop:e.background,setStop:l})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Foreground Dark"}),o.jsx(sl,{stop:e.foregroundDark,setStop:i})]}),o.jsxs("div",{className:"field",children:[o.jsx("label",{children:"Background Dark"}),o.jsx(sl,{stop:e.backgroundDark,setStop:c})]})]})]})},A0=e=>{const t=["name","size"].filter(r=>e[r]).reduce((r,a)=>(r[a]=e[a],r),{}),n=["color","foreground","background","foregroundDark","backgroundDark"].map(r=>e[r]||"").join("-");return n.length>4&&(t.color=n.replace(/-*$/,"")),t},aR=e=>{const t=A0(e);return Object.entries(t).map(([n,r])=>`${n}="${r}"`).join(`
  `)},sR=({options:e})=>o.jsx(Q,{...A0(e)}),P0=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"Icon"})," component can be used to render SVG icons. The functionality is imported from"," ",o.jsx("a",{href:"https://abw.github.io/badger-icon/",children:"Badger Icon"})," with some extra bells and whistles."]}),o.jsx(be,{Component:eR,code:tR,expand:!0}),o.jsx("h2",{children:"Demo"}),o.jsx(rR,{})]}),lR=Object.freeze(Object.defineProperty({__proto__:null,default:P0},Symbol.toStringTag,{value:"Module"})),$0=()=>o.jsxs(K,{code:"IconLibrary",children:[o.jsxs("p",{children:["The default set of icons is defined as ",o.jsx("code",{children:"IconLibrary"}),". The ",o.jsx("code",{children:"addIcon()"})," and ",o.jsx("code",{children:"addIcons()"})," function are provided for adding icons to the library."]}),o.jsx("div",{className:"grid-fill gap-4 mar-t-8",children:Object.keys(ds.icons).map(e=>o.jsxs("div",{className:"text-center bgc-100 bgd-0 fgc-10 fgd-90 pad-4 shadow-2",children:[o.jsx(Q,{name:e,className:"x3"}),o.jsx("div",{className:"small mar-t-4",children:e})]},e))})]}),iR=Object.freeze(Object.defineProperty({__proto__:null,default:$0},Symbol.toStringTag,{value:"Module"})),cR=()=>o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"flex gap-2 middle",children:[o.jsx(Q,{name:"check",className:"smallest"}),o.jsx(Q,{name:"check",className:"smaller"}),o.jsx(Q,{name:"check",className:"small"}),o.jsx(Q,{name:"check"}),o.jsx(Q,{name:"check",className:"large"}),o.jsx(Q,{name:"check",className:"larger"}),o.jsx(Q,{name:"check",className:"largest"})]}),o.jsxs("div",{className:"flex gap-2 mar-t-4",children:[o.jsx(Q,{name:"check",className:"larger green fgc-50"}),o.jsx(Q,{name:"cross",className:"larger red fgc-50"})]})]}),uR=`import React from 'react'
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

export default Component`,I0=()=>o.jsx(O,{code:"className",Component:cR,Source:uR,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"className"})," property can be used to set a CSS class."]})}),dR=Object.freeze(Object.defineProperty({__proto__:null,default:I0},Symbol.toStringTag,{value:"Module"})),pR=()=>o.jsxs("div",{className:"flex gap-2 x2",children:[o.jsx(Q,{name:"check",color:"green-50"}),o.jsx(Q,{name:"check",color:"green-70-30"}),o.jsx(Q,{name:"check",color:"green-70--30"}),o.jsx(Q,{name:"check",color:"green-70-30-30-70"})]}),fR=`import React from 'react'
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

export default Component`,B0=()=>o.jsxs(O,{code:"color",Component:pR,Source:fR,undent:2,expand:!0,children:[o.jsxs("p",{children:["The ",o.jsx("code",{children:"color"})," property is a short-cut to set the color.  This adds the color to the CSS class."]}),o.jsxs("p",{children:["The ",o.jsx("code",{children:"color"})," can be be comprised of up to 5 elements separated by hyphens.  The first is the color range, e.g. ",o.jsx("code",{children:"red"}),","," ",o.jsx("code",{children:"green"}),", ",o.jsx("code",{children:"blue"}),", etc.  The second is the stop number for the foreground.  This is an integer from 0 (darkest) to 100 (lightest) in steps of 5.  The third is the stop number for the background.  The remaining two numbers are stops for the foreground and background colors in dark mode."]})]}),hR=Object.freeze(Object.defineProperty({__proto__:null,default:B0},Symbol.toStringTag,{value:"Module"})),mR=()=>o.jsxs("div",{className:"flex gap-2 x2",children:[o.jsx(Q,{name:"bars"}),o.jsx(Q,{name:"check"}),o.jsx(Q,{name:"cross"}),o.jsx(Q,{name:"arrow"}),o.jsx(Q,{name:"arrow-right"}),o.jsx(Q,{name:"arrow-down-thicker.red.fgc-50"})]}),gR=`import React from 'react'
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

export default Component`,z0=()=>o.jsxs(O,{code:"name",Component:mR,Source:gR,undent:2,expand:!0,children:[o.jsxs("p",{children:["The ",o.jsx("code",{children:"name"})," property can be used to select an icon from the default icon library."]}),o.jsx("p",{children:"Additional modifiers and classes can be added to the name to apply styles and transformations.  See the Badger Icon documentation for further details."})]}),xR=Object.freeze(Object.defineProperty({__proto__:null,default:z0},Symbol.toStringTag,{value:"Module"})),vR=()=>o.jsxs("div",{className:"flex gap-2",children:[o.jsx(Q,{className:"x3",path:"M448,96L448,416C448,434 434,448 416,448L96,448C78,448 64,434 64,416L64,96C64,78 78,64 96,64L416,64C434,64 448,78 448,96ZM384,128L128,128L128,384L384,384L384,128Z"}),o.jsx(Q,{className:"x3",path:"M21,5L21,20C21,20 20,21 20,21L5,21C4,21 3,20 3,20L3,5C3,4 4,3 5,3L20,3C20,3 21,4 21,5ZM18,6L6,6L6,18L18,18L18,6Z",width:24,height:24})]}),yR=`import React from 'react'
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

export default Component`,F0=()=>o.jsx(O,{code:"path",Component:vR,Source:yR,undent:2,expand:!0,children:o.jsxs("p",{children:["You can specify the data for a path.  The default viewbox is assumed to be 512px wide and 512px high.  You can set the ",o.jsx("code",{children:"width"})," and"," ",o.jsx("code",{children:"height"})," properties to change that."]})}),CR=Object.freeze(Object.defineProperty({__proto__:null,default:F0},Symbol.toStringTag,{value:"Module"})),jR=()=>o.jsxs("div",{className:"flex gap-2",children:[o.jsx(Q,{name:"check",size:"smallest"}),o.jsx(Q,{name:"check",size:"smaller"}),o.jsx(Q,{name:"check",size:"small"}),o.jsx(Q,{name:"check",size:"medium"}),o.jsx(Q,{name:"check",size:"large"}),o.jsx(Q,{name:"check",size:"larger"}),o.jsx(Q,{name:"check",size:"largest"})]}),bR=`import React from 'react'
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

export default Component`,U0=()=>o.jsx(O,{code:"size",Component:jR,Source:bR,undent:2,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"size"})," property is a short-cut to set the size.  This adds the size to the CSS class."]})}),SR=Object.freeze(Object.defineProperty({__proto__:null,default:U0},Symbol.toStringTag,{value:"Module"})),wR=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Icon"}),o.jsx(P0,{}),o.jsxs(ut,{tocName:"icon",children:[o.jsx(ue,{title:"Properties"}),o.jsx(z0,{}),o.jsx(I0,{}),o.jsx(U0,{}),o.jsx(B0,{}),o.jsx(F0,{}),o.jsx(ue,{title:"Components"}),o.jsx($0,{})]})]}),_R=Object.freeze(Object.defineProperty({__proto__:null,default:wR},Symbol.toStringTag,{value:"Module"})),TR=()=>{const[e,t]=x.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsxs(on,{open:e,className:"max-width-30rem",children:[o.jsx("header",{children:o.jsx("h3",{children:"A Modal!"})}),o.jsxs("p",{children:["This is a modal.  The content is rendered as an ",o.jsx("code",{children:"article"}),".  You can include"," ",o.jsx("code",{children:"header"})," and ",o.jsx("code",{children:"footer"})," ","sections if you want, although they're entirely optional."]}),o.jsx("footer",{children:o.jsx(M,{color:"red",text:"Close Modal",onClick:()=>t(!1)})})]}),o.jsx(M,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},kR=`import { Modal, Button } from '@/src/index.jsx'

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

export default ModalExample`,H0=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"Modal"})," component can be used to create an overlaid modal dialog."]}),o.jsxs("p",{className:"cols-2 stack-desktop",children:["The ",o.jsx("code",{children:"open"})," property should be used to indicate if the modal is open or not. Any child elements will be rendered inside the modal body."]}),o.jsx(be,{Component:TR,code:kR,expand:!0})]}),ER=Object.freeze(Object.defineProperty({__proto__:null,default:H0},Symbol.toStringTag,{value:"Module"})),LR=()=>{const{show:e,hide:t,Modal:n}=Lb();return o.jsxs(o.Fragment,{children:[o.jsxs(n,{children:[o.jsx("p",{children:"Modal State"}),o.jsx(M,{color:"red",text:"Close Modal",onClick:t})]}),o.jsx(M,{color:"green",text:"Open Modal",onClick:e})]})},NR=`import { ModalState, Button } from '@/src/index.jsx'
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

export default ModalStateExample`,V0=()=>o.jsx(O,{code:"ModalState",Component:LR,Source:NR,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"ModalState"})," function can be used to generate a Modal with state.  It returns the ",o.jsx("code",{children:"isVisible"})," property,"," ",o.jsx("code",{children:"show"})," and ",o.jsx("code",{children:"hide"})," functions to change the visibility, and a ",o.jsx("code",{children:"Modal"})," component."]})}),RR=Object.freeze(Object.defineProperty({__proto__:null,default:V0},Symbol.toStringTag,{value:"Module"})),OR=()=>{const[e,t]=x.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsxs(on,{open:e,className:"large max-width-25rem pad-8",children:[o.jsx("p",{children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object."}),o.jsx(M,{color:"red",text:"Close Modal",onClick:()=>t(!1)})]}),o.jsx(M,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},DR=`import { Modal, Button } from '@/src/index.jsx'
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

export default ModalExample`,W0=()=>o.jsx(O,{code:"className",Component:OR,Source:DR,undent:6,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"className"})," property can be used to add a CSS class to the Modal ",o.jsx("code",{children:"dialog"})," element."]})}),MR=Object.freeze(Object.defineProperty({__proto__:null,default:W0},Symbol.toStringTag,{value:"Module"})),AR=()=>{const[e,t]=x.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(on,{open:e,close:()=>t(!1),children:o.jsx("p",{children:"This is a modal with a close button."})}),o.jsx(M,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},PR=`import React, { useState } from 'react'
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

export default ModalExample`,Z0=()=>o.jsx(O,{code:"close",Component:AR,Source:PR,undent:6,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"close"})," property can be used to automatically add a close icon to the top right corner.  It should be a function which will close the modal when the icon is clicked."]})}),$R=Object.freeze(Object.defineProperty({__proto__:null,default:Z0},Symbol.toStringTag,{value:"Module"})),IR=()=>{const[e,t]=x.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(on,{open:e,close:()=>t(!1),closeIcon:"thumb",children:o.jsx("p",{children:"This is a modal with a custom close icon."})}),o.jsx(M,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},BR=`import React, { useState } from 'react'
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

export default ModalExample`,K0=()=>o.jsx(O,{code:"closeIcon",Component:IR,Source:BR,undent:6,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"closeIcon"})," property can be used to change the icon displayed to close the modal."]})}),zR=Object.freeze(Object.defineProperty({__proto__:null,default:K0},Symbol.toStringTag,{value:"Module"})),FR=()=>{const[e,t]=x.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(on,{open:e,close:()=>t(!1),title:"Hello World!",text:"This is a modal with a custom footer",footer:o.jsx("div",{className:"text-right",children:o.jsx(M,{color:"red",text:"Close",size:"small",iconRight:"cross",onClick:()=>t(!1)})})}),o.jsx(M,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},UR=`import { Modal, Button } from '@/src/index.jsx'
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

export default ModalExample`,G0=()=>o.jsx(O,{code:"footer",Component:FR,Source:UR,undent:6,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"footer"})," property can be used to define some custom footer content."]})}),HR=Object.freeze(Object.defineProperty({__proto__:null,default:G0},Symbol.toStringTag,{value:"Module"})),VR=()=>{const[e,t]=x.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(on,{open:e,close:()=>t(!1),text:"This is a modal with a custom header",header:o.jsxs(o.Fragment,{children:[o.jsx("h3",{children:"Custom Header"}),o.jsx("p",{children:"Hello World!"})]})}),o.jsx(M,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},WR=`import { Modal, Button } from '@/src/index.jsx'
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

export default ModalExample`,Y0=()=>o.jsx(O,{code:"header",Component:VR,Source:WR,undent:6,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"header"})," property can be used to define some custom header content."]})}),ZR=Object.freeze(Object.defineProperty({__proto__:null,default:Y0},Symbol.toStringTag,{value:"Module"})),KR=()=>{const[e,t]=x.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(on,{open:e,close:()=>t(!1),text:"This is a modal"}),o.jsx(M,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},GR=`import { Modal, Button } from '@/src/index.jsx'

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

export default ModalExample`,X0=()=>o.jsx(O,{code:"text",Component:KR,Source:GR,undent:6,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"text"})," property can be used to define the body text."]})}),YR=Object.freeze(Object.defineProperty({__proto__:null,default:X0},Symbol.toStringTag,{value:"Module"})),XR=()=>{const[e,t]=x.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(on,{open:e,close:()=>t(!1),text:"This is a modal with a title",title:"My Modal"}),o.jsx(M,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},QR=`import { Modal, Button } from '@/src/index.jsx'
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

export default ModalExample`,Q0=()=>o.jsx(O,{code:"title",Component:XR,Source:QR,undent:6,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"title"})," property can be used to add a title."]})}),qR=Object.freeze(Object.defineProperty({__proto__:null,default:Q0},Symbol.toStringTag,{value:"Module"})),JR=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Modal"}),o.jsx(H0,{}),o.jsxs(ut,{tocName:"modal",children:[o.jsx(ue,{title:"Properties"}),o.jsx(W0,{}),o.jsx(Z0,{}),o.jsx(K0,{}),o.jsx(X0,{}),o.jsx(Q0,{}),o.jsx(Y0,{}),o.jsx(G0,{}),o.jsx(ue,{title:"Components"}),o.jsx(V0,{})]})]}),eO=Object.freeze(Object.defineProperty({__proto__:null,default:JR},Symbol.toStringTag,{value:"Module"})),tO=()=>{const{isVisible:e,show:t,hide:n}=br();return o.jsxs("div",{className:"relative pad-6 border",children:[e&&o.jsx(Bo,{className:"flex middle center pad-8",children:o.jsxs("div",{children:[o.jsx("p",{className:"larger",children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been... that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object."}),o.jsx(M,{onClick:n,className:"red",text:"Hide Overlay"})]})}),o.jsx("p",{className:"mar-t-none",children:"May I make a suggestion? May I make a suggestion? I've got one other suggestion."}),o.jsx("p",{children:"Well let's hear yours. Let's hear your suggestion."}),o.jsx("p",{children:"Stonehenge! It's the best production value we've ever had on stage."}),o.jsx("p",{children:"But we haven't got the equipment. We haven't got the equipment, we haven't got Stonehenge, we haven't..."}),o.jsx("p",{children:"Not yet we don't. Let's start... Musically, musically we all know it. Musically we all know it. Right? No problems musically. We go right on stage. And it's quite simple. This is you know... Ian can take care of this..."}),o.jsx("p",{children:"I know what the Stonehenge monument looks like. We don't have that piece of scenery anymore."}),o.jsx("p",{children:"I know, so we build a new one. And this is it, look!"}),o.jsx(M,{onClick:t,color:"green",text:"Show Overlay"})]})},nO=`import { Overlay, VisibleState, Button } from '@/src/index.jsx'

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

export default OverlayExample`,q0=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"Overlay"})," component can be used to create an overlay. The default positioning is absolute so it will fill to cover the nearest parent that has positioning set to relative."]}),o.jsx(be,{Component:tO,code:nO})]}),rO=Object.freeze(Object.defineProperty({__proto__:null,default:q0},Symbol.toStringTag,{value:"Module"})),oO=()=>{const{show:e,hide:t,Overlay:n}=Rb();return o.jsxs(o.Fragment,{children:[o.jsx(n,{fixed:!0,className:"flex center middle",children:o.jsxs("div",{children:[o.jsx("h1",{className:"mar-b-4",children:"Overlay State"}),o.jsx(M,{color:"red",text:"Hide Overlay",onClick:t})]})}),o.jsx(M,{color:"green",text:"Show Overlay",onClick:e})]})},aO=`import { OverlayState, Button } from '@/src/index.jsx'
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

export default OverlayStateExample`,J0=()=>o.jsx(O,{code:"OverlayState",Component:oO,Source:aO,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"OverlayState"})," function can be used to generate an Overlay with state.  It returns the ",o.jsx("code",{children:"isVisible"})," property,"," ",o.jsx("code",{children:"show"})," and ",o.jsx("code",{children:"hide"})," functions to change the visibility, and an ",o.jsx("code",{children:"Overlay"})," component."]})}),sO=Object.freeze(Object.defineProperty({__proto__:null,default:J0},Symbol.toStringTag,{value:"Module"})),lO=()=>{const[e,t]=x.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsxs(on,{open:e,className:"large max-width-25rem pad-8",children:[o.jsx("p",{children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object."}),o.jsx(M,{color:"red",text:"Close Modal",onClick:()=>t(!1)})]}),o.jsx(M,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},iO=`import { Modal, Button } from '@/src/index.jsx'
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

export default ModalExample`,cO=()=>o.jsx(O,{code:"className",Component:lO,Source:iO,undent:6,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"className"})," property can be used to add a CSS class to the Modal ",o.jsx("code",{children:"dialog"})," element."]})}),uO=Object.freeze(Object.defineProperty({__proto__:null,default:cO},Symbol.toStringTag,{value:"Module"})),dO=()=>{const{isVisible:e,show:t,hide:n}=br();return o.jsxs("div",{className:"relative pad-6 border",children:[o.jsx(M,{onClick:t,color:"green",text:"Show Red Overlay"}),e&&o.jsxs(Bo,{className:"flex space top pad-6",style:{"--color":"var(--red-70)","--background-color":"var(--red-20)","--background-opacity":"10%"},children:[o.jsx("p",{className:"larger",children:"Custom red overlay"}),o.jsx(M,{onClick:n,className:"red",text:"Hide Overlay"})]})]})},pO=`import React from 'react'
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

export default ColorExample`,ex=()=>o.jsx(O,{title:"Custom Colors",Component:dO,Source:pO,undent:8,children:o.jsxs("p",{children:["You can set the ",o.jsx("code",{children:"--color"})," and ",o.jsx("code",{children:"--background-color"})," ","CSS properties to define your own colors for the overlay.  The"," ",o.jsx("code",{children:"--background-opacity"})," can be set to change the background opacity."]})}),fO=Object.freeze(Object.defineProperty({__proto__:null,default:ex},Symbol.toStringTag,{value:"Module"})),hO=()=>{const{isVisible:e,show:t,hide:n}=br();return o.jsxs("div",{className:"relative pad-6 border",children:[o.jsx(M,{onClick:t,color:"green",text:"Show Overlay"}),e&&o.jsx(Bo,{fixed:!0,className:"flex center middle",children:o.jsxs("div",{className:"max-width-40rem",children:[o.jsx("p",{className:"larger",children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been... that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object."}),o.jsx(M,{onClick:n,className:"red",text:"Hide Overlay"})]})})]})},mO=`import React from 'react'
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

export default OverlayExample`,tx=()=>o.jsx(O,{code:"fixed",Component:hO,Source:mO,undent:8,children:o.jsxs("p",{children:["Add the ",o.jsx("code",{children:"fixed"})," to set the overlay position to fixed so that it covers the entire viewport."]})}),gO=Object.freeze(Object.defineProperty({__proto__:null,default:tx},Symbol.toStringTag,{value:"Module"})),xO=()=>{const{isVisible:e,show:t,hide:n}=br();return o.jsxs("div",{className:"relative pad-6 border",children:[o.jsx(M,{onClick:t,color:"green",text:"Show Light Overlay"}),e&&o.jsxs(Bo,{light:!0,className:"flex space top pad-6",children:[o.jsx("p",{className:"larger",children:"Light overlay"}),o.jsx(M,{onClick:n,className:"red",text:"Hide Overlay"})]})]})},vO=`import React from 'react'
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

export default ColorExample`,yO=()=>{const{isVisible:e,show:t,hide:n}=br();return o.jsxs("div",{className:"relative pad-6 border",children:[o.jsx(M,{onClick:t,color:"green",text:"Show Dark Overlay"}),e&&o.jsxs(Bo,{dark:!0,className:"flex space top pad-6",children:[o.jsx("p",{className:"larger",children:"Dark overlay"}),o.jsx(M,{onClick:n,className:"red",text:"Hide Overlay"})]})]})},CO=`import React from 'react'
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

export default ColorExample`,nx=()=>o.jsxs(K,{code:"light / dark",children:[o.jsxs("p",{className:"cols-2 stack-desktop",children:["The default overlay color is white in light mode and black in dark mode.  You can add the ",o.jsx("code",{children:"light"})," or ",o.jsx("code",{children:"dark"})," ","property to explicitly set it to one or the other."]}),o.jsx(be,{Component:xO,code:vO,caption:"light",undent:8}),o.jsx(be,{Component:yO,code:CO,caption:"dark",undent:8})]}),jO=Object.freeze(Object.defineProperty({__proto__:null,default:nx},Symbol.toStringTag,{value:"Module"})),bO=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Overlay"}),o.jsx(q0,{}),o.jsxs(ut,{tocName:"overlay",children:[o.jsx(ue,{title:"Properties"}),o.jsx(tx,{}),o.jsx(nx,{}),o.jsx(ue,{title:"Styling"}),o.jsx(ex,{}),o.jsx(ue,{title:"Components"}),o.jsx(J0,{})]})]}),SO=Object.freeze(Object.defineProperty({__proto__:null,default:bO},Symbol.toStringTag,{value:"Module"})),wO=({page:e,className:t,onClick:n})=>{const{pageRanges:r}=Zj(),a=r[e];return o.jsx(M,{text:a,className:t,onClick:n})},_O=()=>{const e=["A-C","D-F","G-I","J-M","N-P","Q-T","U-W","X-Z"],t=e.length,[n,r]=x.useState(0);return o.jsx(zt,{pages:t,page:n,setPage:r,pageRanges:e,Page:wO,size:"small"})},TO=`import { Pager, usePager, Button } from '@/src/index.jsx'

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

export default PagerExample`,kO=({items:e})=>o.jsx("table",{className:"wide shaded striped celled",children:o.jsx("tbody",{children:e.map(([t,n])=>o.jsx(EO,{name:t,value:n},t))})}),EO=({name:e,value:t})=>o.jsxs("tr",{children:[o.jsx("td",{className:"font-mono",children:e}),o.jsx("td",{children:t})]}),rx=()=>o.jsxs(o.Fragment,{children:[o.jsx("h2",{children:"Context"}),o.jsxs("div",{className:"cols-2 stack-desktop",children:[o.jsx("p",{children:"A react context is created which provides the items listed below. Any other properties passed in to the component will also be accessible to child components."}),o.jsxs("p",{children:["Values are provided for the 0-based indexes of the first, last, previous, next and current pages. For example, the lowest value for ",o.jsx("code",{children:"page"})," is"," ",o.jsx("code",{children:"0"})," and the highest value is ",o.jsx("code",{children:"pages - 1"}),"."]}),o.jsxs("p",{children:['Their counterparts are also provided in "human readable" 1-based form with a ',o.jsx("code",{children:"No"})," suffix.  For example, the values for ",o.jsx("code",{children:"pageNo"})," range from ",o.jsx("code",{children:"1"})," to ",o.jsx("code",{children:"pages"}),", and will always be one more than ",o.jsx("code",{children:"page"}),"."]})]}),o.jsx(kO,{items:[["pages","The total number of pages, as passed into the component as a property."],["page","The index (0 based) of the current page, as passed into the component as a property."],["setPage","The function for setting a page index, as passed into the component as a property."],["pageNo",o.jsxs(o.Fragment,{children:["The current page number (1 based), effectively one louder than ",o.jsx("code",{children:"page"}),".  e.g. if ",o.jsx("code",{children:"page"})," is ten then this goes up to eleven."]})],["firstPage","The index (0 based) of the first page.  This is always 0 but is included for completeness."],["firstPageNo","The number (1 based) of the first page.  This is always 1 but is included for completeness."],["lastPage","The index (0 based) of the last page."],["lastPageNo","The number (1 based) of the first page."],["prevPage","The index (0 based) of the previous page."],["prevPageNo","The number (1 based) of the previous page."],["nextPage","The index (0 based) of the next page."],["nextPageNo","The number (1 based) of the next page."]]}),o.jsx("h2",{children:"Custom Component"}),o.jsxs("div",{className:"cols-2 stack-desktop",children:[o.jsxs("p",{children:["You can provide your own components to render certain elements of the pager widget. These will be passed relevant parameters as properties and can use the ",o.jsx("code",{children:"usePager()"})," hook to access the full pager context, including any additional properties that you pass to the ",o.jsx("code",{children:"Pager"})," component."]}),o.jsxs("p",{children:["In this example we define a custom ",o.jsx("code",{children:"MyPageButton"})," component to replace the ",o.jsx("code",{children:"Page"})," component that renders the numbered page buttons.  Instead of displaying page numbers it shows alphabetical ranges for each button, defined in a custom ",o.jsx("code",{children:"pageRanges"})," "," ","property."]})]}),o.jsx(be,{Component:_O,code:TO})]}),LO=Object.freeze(Object.defineProperty({__proto__:null,default:rx},Symbol.toStringTag,{value:"Module"})),NO=()=>{const[e,t]=x.useState(0);return o.jsx(zt,{pages:11,page:e,setPage:t})},RO=`import { Pager } from '@/src/index.jsx'

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

export default PagerExample`,ox=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"Pager"})," component generates buttons for navigating through several pages."]}),o.jsx("div",{className:"cols-2 stack-desktop",children:o.jsxs("p",{children:["The three mandatory properties are ",o.jsx("code",{children:"pages"})," indicating the total number of pages, ",o.jsx("code",{children:"page"})," for the current page index (ranging from 0 to ",o.jsx("code",{children:"pages"})," - 1) and a"," ",o.jsx("code",{children:"setPage"})," handler to set the page index."]})}),o.jsx(be,{Component:NO,code:RO})]}),OO=Object.freeze(Object.defineProperty({__proto__:null,default:ox},Symbol.toStringTag,{value:"Module"})),DO=()=>{const[e,t]=x.useState(0);return o.jsx("div",{className:"grid-1 gap-4",children:o.jsx(zt,{pages:11,page:e,setPage:t,className:"pager small brand border pad-2 bdr-2 bgc-90 bgd-10"})})},MO=`import React, { useState } from 'react'
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
`,ax=()=>o.jsx(O,{code:"className",Component:DO,Source:MO,undent:4,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"className"})," property can be used to set a CSS class for the pager container.  The default value is ",o.jsx("code",{children:"pager"}),"."]})}),AO=Object.freeze(Object.defineProperty({__proto__:null,default:ax},Symbol.toStringTag,{value:"Module"})),PO=()=>{const[e,t]=x.useState(0);return o.jsxs("div",{className:"grid-1 gap-4",children:[o.jsx(zt,{pages:11,page:e,setPage:t,color:"red"}),o.jsx(zt,{pages:11,page:e,setPage:t,color:"green"}),o.jsx(zt,{pages:11,page:e,setPage:t,color:"blue"})]})},$O=`import React, { useState } from 'react'
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
`,sx=()=>o.jsx(O,{code:"color",Component:PO,Source:$O,undent:4,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"color"})," property can be used to set the color range used for the buttons.  This is a short-cut which adds the specified color to the CSS class for the pager container."]})}),IO=Object.freeze(Object.defineProperty({__proto__:null,default:sx},Symbol.toStringTag,{value:"Module"})),BO=()=>{const[e,t]=x.useState(0);return o.jsx(zt,{pages:11,page:e,setPage:t,prevIcon:"angle-left",nextIcon:"angle-right"})},zO=`import React, { useState } from 'react'
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
`,lx=()=>o.jsx(O,{code:"prevIcon / nextIcon",Component:BO,Source:zO,undent:4,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"prevIcon"})," and ",o.jsx("code",{children:"nextIcon"})," properties can be used to set the icons for the previous and next page button."]})}),FO=Object.freeze(Object.defineProperty({__proto__:null,default:lx},Symbol.toStringTag,{value:"Module"})),UO=()=>{const[e,t]=x.useState(0);return o.jsx(zt,{pages:11,page:e,setPage:t,nextIcon:"angle-right"})},HO=`import React, { useState } from 'react'
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
`,VO=()=>o.jsx(O,{code:"nextIcon",Component:UO,Source:HO,undent:4,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"nextIcon"})," property can be used to set the icon for the next page button."]})}),WO=Object.freeze(Object.defineProperty({__proto__:null,default:VO},Symbol.toStringTag,{value:"Module"})),ZO=()=>{const[e,t]=x.useState(0);return o.jsx(zt,{pages:11,page:e,setPage:t,showFirstLast:!1})},KO=`import React, { useState } from 'react'
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
`,ix=()=>o.jsxs(O,{code:"showFirstLast",Component:ZO,Source:KO,undent:4,children:[o.jsxs("p",{children:["The ",o.jsx("code",{children:"showFirstLast"})," property determines if the first and last pages are shown in the set of numbered page buttons. A button for the first page will be displayed when it is less than previous page.  The last page button will be displayed when it is greater than the next page."]}),o.jsxs("p",{children:["This value defaults to ",o.jsx("code",{children:"true"})," but can be set"," ",o.jsx("code",{children:"false"})," to hide these buttons."]})]}),GO=Object.freeze(Object.defineProperty({__proto__:null,default:ix},Symbol.toStringTag,{value:"Module"})),YO=()=>{const[e,t]=x.useState(0);return o.jsxs("div",{className:"grid-1 gap-4",children:[o.jsx(zt,{pages:11,page:e,setPage:t,size:"smaller"}),o.jsx(zt,{pages:11,page:e,setPage:t,size:"small"})]})},XO=`import React, { useState } from 'react'
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
`,cx=()=>o.jsx(O,{code:"size",Component:YO,Source:XO,undent:4,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"size"})," property can be used to set the size to one of the standard sizes.  This is also a short-cut for adding the size as a CSS class so you can use it to add any of your own size classes."]})}),QO=Object.freeze(Object.defineProperty({__proto__:null,default:cx},Symbol.toStringTag,{value:"Module"})),qO=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Pager"}),o.jsx(ox,{}),o.jsx(rx,{}),o.jsxs(ut,{tocName:"pager",children:[o.jsx(ue,{title:"Properties"}),o.jsx(ax,{}),o.jsx(sx,{}),o.jsx(cx,{}),o.jsx(lx,{}),o.jsx(ix,{}),o.jsxs(ts,{children:[o.jsxs("div",{className:"flow",children:[o.jsx(ue,{title:"CSS Classes"}),o.jsxs(K,{code:"className",children:["Used to set the CSS class for the pager container.  The default value is ",o.jsx("code",{children:"pager"}),"."]}),o.jsxs(K,{code:"buttonClass",children:["Used to set a default CSS class for all buttons.  The default value is ",o.jsx("code",{children:"outline"}),"."]}),o.jsxs(K,{code:"prevClass",children:["Used to set the CSS class for the previous page button.  It defaults to the value for ",o.jsx("code",{children:"buttonClass"}),"."]}),o.jsxs(K,{code:"nextClass",children:["Used to set the CSS class for the next page button.  It defaults to the value for ",o.jsx("code",{children:"buttonClass"}),"."]}),o.jsxs(K,{code:"pagesClass",children:["Used to set the CSS class for the numbered page buttons container. The default value is ",o.jsx("code",{children:"pages"}),"."]}),o.jsxs(K,{code:"pageClass",children:["Used to set the CSS class for individual numbered page buttons.  It defaults to the value for ",o.jsx("code",{children:"buttonClass"}),"."]}),o.jsxs(K,{code:"currentPageClass",children:["Used to set the CSS class for the currently selected numbered page button. The default value is ",o.jsx("code",{children:"solid"}),"."]})]}),o.jsxs("div",{className:"flow",children:[o.jsx(ue,{title:"Components"}),o.jsxs(K,{code:"Previous",id:"Previous-component",children:["Renders the previous page button.  Defaults to ",o.jsx("code",{children:"PagerPrevious"}),"."]}),o.jsxs(K,{code:"Next",id:"Next-component",children:["Renders the next page button.  Defaults to ",o.jsx("code",{children:"PagerNext"}),"."]}),o.jsxs(K,{code:"Pages",id:"Pages-component",children:["Renders the collection of numbered page buttons.  Defaults to ",o.jsx("code",{children:"PagerPages"}),"."]}),o.jsxs(K,{code:"Page",id:"Page-component",children:["Renders an individual page button.  Defaults to ",o.jsx("code",{children:"PagerPage"}),"."]}),o.jsxs(K,{code:"Separator",id:"Separator-component",children:["Renders the separator between the first and/or last pages and the rest of the numbered page buttons. Defaults to ",o.jsx("code",{children:"PagerSeparator"}),"."]})]})]})]})]}),JO=Object.freeze(Object.defineProperty({__proto__:null,default:qO},Symbol.toStringTag,{value:"Module"})),eD=()=>{const[e,t]=x.useState(!1);return o.jsx(Dn,{name:"tap",value:e,onChange:t,options:["David","Nigel","Derek"]})},tD=`import { Radio } from '@/src/index.jsx'

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

export default RadioExample`,ux=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"Radio"})," component renders a set of radio buttons."]}),o.jsx(be,{Component:eD,code:tD,expand:!0})]}),nD=Object.freeze(Object.defineProperty({__proto__:null,default:ux},Symbol.toStringTag,{value:"Module"})),rD=()=>{const[e,t]=x.useState(!1),[n,r]=x.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(Dn,{border:!0,name:"tap1",labelClass:"mar-b-2",value:e,onChange:t,options:["David","Nigel","Derek"]}),o.jsx(Dn,{border:!0,inline:!0,name:"tap2",labelClass:"mar-r-2",value:n,onChange:r,options:["David","Nigel","Derek"]})]})},oD=`import { Radio } from '@/src/index.jsx'
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

export default BorderExample`,dx=()=>o.jsxs(O,{code:"border",Component:rD,Source:oD,undent:4,expand:!0,children:[o.jsxs("p",{children:["The ",o.jsx("code",{children:"border"})," property can be set to add a border to each item."]}),o.jsxs("p",{children:["You may need to add margins to either the bottom or right side of each label using the ",o.jsx("code",{children:"labelClass"})," property."]})]}),aD=Object.freeze(Object.defineProperty({__proto__:null,default:dx},Symbol.toStringTag,{value:"Module"})),sD=()=>{const[e,t]=x.useState(!1);return o.jsx(Dn,{className:"grid-3 gap-2",name:"tap",value:e,onChange:t,options:["David","Nigel","Derek"]})},lD=`import { Radio } from '@/src/index.jsx'
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

export default ClassName`,px=()=>o.jsx(O,{code:"className",Component:sD,Source:lD,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"className"})," property can be used to add a CSS class to the container element."]})}),iD=Object.freeze(Object.defineProperty({__proto__:null,default:px},Symbol.toStringTag,{value:"Module"})),cD=()=>{const[e,t]=x.useState(!1);return o.jsx(Dn,{name:"tap",value:e,onChange:t,options:[{value:"david",text:"David St. Hubbins"},{value:"nigel",text:"Nigel Tufnel"},{value:"derek",text:"Derek Smalls"},{value:"john",text:'John "Stumpy" Pepys',disabled:!0},{value:"eric",text:'Eric "Stumpy Joe" Childs',disabled:!0},{value:"peter",text:'Peter "James" Bond',disabled:!0},{value:"mick",text:"Mick Shrimpton",disabled:!0}]})},uD=`import { Radio } from '@/src/index.jsx'
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

export default DisabledExample`,fx=()=>o.jsx(O,{code:"disabled",Component:cD,Source:uD,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"disabled"})," property can be added to an option to disable it."]})}),dD=Object.freeze(Object.defineProperty({__proto__:null,default:fx},Symbol.toStringTag,{value:"Module"})),pD=()=>{const[e,t]=x.useState(!1);return o.jsx(Dn,{inline:!0,name:"tap",value:e,onChange:t,options:["David","Nigel","Derek"]})},fD=`import { Radio } from '@/src/index.jsx'
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

export default InlineExample`,hx=()=>o.jsx(O,{code:"inline",Component:pD,Source:fD,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"inline"})," property can be set to create inline radio buttons."]})}),hD=Object.freeze(Object.defineProperty({__proto__:null,default:hx},Symbol.toStringTag,{value:"Module"})),mD=()=>{const[e,t]=x.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(Dn,{name:"tap",value:e,onChange:t,options:["David","Nigel","Derek"]}),!!e&&o.jsxs("div",{children:["Selected value: ",e]})]})},gD=`import { Radio } from '@/src/index.jsx'
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

export default OnChangeExample`,mx=()=>o.jsx(O,{code:"onChange",Component:mD,Source:gD,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"onChange"})," property should be used to define a function to handle changes in the state.  This will typically be used to update the ",o.jsx("a",{href:"#value",className:"font-mono",children:"value"}),"."]})}),xD=Object.freeze(Object.defineProperty({__proto__:null,default:mx},Symbol.toStringTag,{value:"Module"})),vD=()=>{const[e,t]=x.useState(!1);return o.jsx(Dn,{value:e,onChange:t,options:[{value:"david",text:"David St. Hubbins"},{value:"nigel",text:"Nigel Tufnel"},{value:"derek",text:"Derek Smalls"}]})},yD=`import { Radio } from '@/src/index.jsx'
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

export default OptionsExample`,gx=()=>o.jsx(O,{code:"options",Component:vD,Source:yD,undent:4,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"options"})," property should be used to define the values for each radio button.  These can be simple values (e.g. strings or numbers) as shown in the preceding examples.  For more complex cases you should define each element as an object containing a"," ",o.jsx("code",{children:"value"})," and any of ",o.jsx("code",{children:"text"}),", ",o.jsx("code",{children:"label"})," or"," ",o.jsx("code",{children:"name"})," for the displayed text."]})}),CD=Object.freeze(Object.defineProperty({__proto__:null,default:gx},Symbol.toStringTag,{value:"Module"})),jD=()=>{const[e,t]=x.useState(!1);return o.jsx(Dn,{name:"tap",value:e,onChange:t,options:["David","Nigel","Derek"]})},bD=`import { Radio } from '@/src/index.jsx'
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

export default ValueExample`,xx=()=>o.jsx(O,{code:"value",Component:jD,Source:bD,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"value"})," property should be used to define the current selected value.  This should be used in conjunction with"," ",o.jsx("a",{href:"#onchange",className:"font-mono",children:"onChange"})," to update the value."]})}),SD=Object.freeze(Object.defineProperty({__proto__:null,default:xx},Symbol.toStringTag,{value:"Module"})),wD=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Radio"}),o.jsx(ux,{}),o.jsxs(ut,{tocName:"radio",children:[o.jsx(ue,{title:"Properties"}),o.jsx(xx,{}),o.jsx(mx,{}),o.jsx(px,{}),o.jsx(hx,{}),o.jsx(dx,{}),o.jsx(ue,{title:"Options"}),o.jsx(gx,{}),o.jsx(fx,{})]})]}),_D=Object.freeze(Object.defineProperty({__proto__:null,default:wD},Symbol.toStringTag,{value:"Module"})),TD=["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger"],kD=()=>{const e=t=>TD.filter(n=>n.toLowerCase().indexOf(t.toLowerCase())!==-1);return o.jsx(Li,{onSearch:e})},ED=`import { Search } from '@/src/index.jsx'

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

export default SearchExample`,vx=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"Search"}),' component implements the familiar "autocomplete" functionality.']}),o.jsx("p",{className:"cols-2 stack-desktop",children:"The user starts typing and after a short debounce delay a set of results matching their input is displayed. The user can then click on a result or use the keyboard to navigate through the results."}),o.jsx(be,{Component:kD,code:ED})]}),LD=Object.freeze(Object.defineProperty({__proto__:null,default:vx},Symbol.toStringTag,{value:"Module"})),ND=[{name:"Alan Aardvark",tel:"555-1245"},{name:"Amy Aardvark",tel:"555-2233"},{name:"Anne Aardvark",tel:"555-6565"},{name:"Bart Badger",tel:"555-4201"},{name:"Betty Badger",tel:"555-1111"},{name:"Bobby Badger",tel:"555-9876"},{name:"Brenda Badger",tel:"555-3443"},{name:"Brian Badger",tel:"555-1337"}],RD=()=>{const e=n=>o.jsxs("div",{className:"flex space baseline",children:[o.jsx("div",{children:n.name}),o.jsx("div",{className:"smaller",children:n.tel})]}),t=n=>ND.filter(r=>r.name.toLowerCase().indexOf(n.toLowerCase())!==-1);return o.jsx(Li,{onSearch:t,displayResult:e})},OD=`import { Search } from '@/src/index.jsx'

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

export default DisplayResultExample`,yx=()=>o.jsx(O,{code:"displayResult",Component:RD,Source:OD,expand:!0,children:o.jsxs("p",{children:["If a result is a text string then it will be displayed as the result. If it's an object containing a ",o.jsx("code",{children:"text"}),","," ",o.jsx("code",{children:"label"})," or ",o.jsx("code",{children:"name"})," property then that will be used as the display value.  Otherwise you can provide a"," ",o.jsx("code",{children:"displayResult"})," function to display the result any way you like."]})}),DD=Object.freeze(Object.defineProperty({__proto__:null,default:yx},Symbol.toStringTag,{value:"Module"})),MD=[{id:100,name:"Alan Aardvark",tel:"555-1245"},{id:101,name:"Amy Aardvark",tel:"555-2233"},{id:102,name:"Anne Aardvark",tel:"555-6565"},{id:110,name:"Bart Badger",tel:"555-4201"},{id:111,name:"Betty Badger",tel:"555-1111"},{id:112,name:"Bobby Badger",tel:"555-9876"},{id:113,name:"Brenda Badger",tel:"555-3443"},{id:114,name:"Brian Badger",tel:"555-1337"}],AD=()=>{const e=n=>`#${n.id}: ${n.name} (${n.tel})`,t=n=>MD.filter(r=>r.name.toLowerCase().indexOf(n.toLowerCase())!==-1);return o.jsx(Li,{onSearch:t,displayValue:e})},PD=`import { Search } from '@/src/index.jsx'

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

export default DisplayValueExample`,Cx=()=>o.jsx(O,{code:"displayValue",Component:AD,Source:PD,expand:!0,children:o.jsxs("p",{children:["When a result is selected the same rules will be applied to display the result in the search input.  If it's not a string or an object containing one of the aforementioned properties then you should provide a ",o.jsx("code",{children:"displayValue"})," function to convert the result to a text string that can be displayed."]})}),$D=Object.freeze(Object.defineProperty({__proto__:null,default:Cx},Symbol.toStringTag,{value:"Module"})),ID=["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Beatrice Badger","Belinda Badger","Ben Badger","Bert Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger","Brook Badger","Buzz Badger"],BD=()=>{const e=async t=>wi(500).then(()=>ID.filter(n=>n.toLowerCase().indexOf(t.toLowerCase())!==-1));return o.jsx(Li,{onSearch:e,debug:!0})},zD=`import { Search } from '@/src/index.jsx'
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

export default OnSearchExample`,jx=()=>o.jsx(O,{code:"onSearch",Component:BD,Source:zD,children:o.jsxs("p",{children:["You should provide an ",o.jsx("code",{children:"onSearch"})," function which will be passed the search input and should return an array of results.  This can be an asynchronous function if necessary.  For example, a function which makes an API request to fetch the matching results."]})}),FD=Object.freeze(Object.defineProperty({__proto__:null,default:jx},Symbol.toStringTag,{value:"Module"})),UD=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Search"}),o.jsx(vx,{}),o.jsxs(ut,{tocName:"search",children:[o.jsx(ue,{title:"Properties"}),o.jsx(jx,{}),o.jsx(yx,{}),o.jsx(Cx,{})]})]}),HD=Object.freeze(Object.defineProperty({__proto__:null,default:UD},Symbol.toStringTag,{value:"Module"})),VD=["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger","Colin Camel","David Donkey","Eddie Elephant","Franky Ferret","Gina Goat","Helen Horse","Ian Iguana","Juliet Jackdaw","Kevin Kangaroo","Linda Llama"],WD=()=>o.jsx(gs,{options:VD}),ZD=`import { Select } from '@/src/index.jsx'

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

export default SelectExample`,bx=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"Select"})," component implements a custom select input."]}),o.jsx(be,{Component:WD,code:ZD})]}),KD=Object.freeze(Object.defineProperty({__proto__:null,default:bx},Symbol.toStringTag,{value:"Module"})),GD=[{name:"Alan Aardvark",tel:"555-1245"},{name:"Amy Aardvark",tel:"555-2233"},{name:"Anne Aardvark",tel:"555-6565"},{name:"Bart Badger",tel:"555-4201"},{name:"Betty Badger",tel:"555-1111"},{name:"Bobby Badger",tel:"555-9876"},{name:"Brenda Badger",tel:"555-3443"},{name:"Brian Badger",tel:"555-1337"}],YD=()=>{const e=t=>o.jsxs("div",{className:"flex space baseline",children:[o.jsx("div",{children:t.name}),o.jsx("div",{className:"smaller",children:t.tel})]});return o.jsx(gs,{options:GD,displayOption:e})},XD=`import { Select } from '@/src/index.jsx'

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

export default DisplayOptionExample`,Sx=()=>o.jsx(O,{code:"displayOption",Component:YD,Source:XD,expand:!0,children:o.jsxs("p",{children:["If an option is a text string then it will be displayed as it is. If it's an object containing a ",o.jsx("code",{children:"text"}),","," ",o.jsx("code",{children:"label"})," or ",o.jsx("code",{children:"name"})," property then that will be used as the display value.  Otherwise you can provide a"," ",o.jsx("code",{children:"displayOption"})," function to display the result any way you like."]})}),QD=Object.freeze(Object.defineProperty({__proto__:null,default:Sx},Symbol.toStringTag,{value:"Module"})),qD=[{id:100,name:"Alan Aardvark",tel:"555-1245"},{id:101,name:"Amy Aardvark",tel:"555-2233"},{id:102,name:"Anne Aardvark",tel:"555-6565"},{id:110,name:"Bart Badger",tel:"555-4201"},{id:111,name:"Betty Badger",tel:"555-1111"},{id:112,name:"Bobby Badger",tel:"555-9876"},{id:113,name:"Brenda Badger",tel:"555-3443"},{id:114,name:"Brian Badger",tel:"555-1337"}],JD=()=>{const e=t=>o.jsxs("div",{className:"flex baseline",children:[o.jsxs("span",{className:"smaller mar-r-2",children:["#",t.id]})," ",t.name," (",t.tel,")"]});return o.jsx(gs,{options:qD,displayValue:e})},eM=`import { Select } from '@/src/index.jsx'

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

export default DisplayValueExample`,wx=()=>o.jsx(O,{code:"displayValue",Component:JD,Source:eM,expand:!0,children:o.jsxs("p",{children:["When an option is selected the same rules will be applied to display the option in the search input.  If it's not a string or an object containing one of the aforementioned properties then you should provide a ",o.jsx("code",{children:"displayValue"})," function to convert the result to a text string that can be displayed."]})}),tM=Object.freeze(Object.defineProperty({__proto__:null,default:wx},Symbol.toStringTag,{value:"Module"})),nM=[{id:101,name:"Alan Aardvark"},{id:102,name:"Amy Aardvark"},{id:103,name:"Anne Aardvark"},{id:104,name:"Bart Badger"},{id:105,name:"Betty Badger"},{id:106,name:"Bobby Badger"},{id:107,name:"Brenda Badger"},{id:108,name:"Brian Badger"},{id:109,name:"Colin Camel",disabled:!0},{id:110,name:"Derek Donkey"}],rM=()=>o.jsx(gs,{options:nM}),oM=`import { Select } from '@/src/index.jsx'

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

export default OptionsExample`,_x=()=>o.jsx(O,{code:"options",Component:rM,Source:oM,expand:!0,children:o.jsxs("p",{children:["The ",o.jsx("code",{children:"options"})," property should be used to provide an array of options that the user can select from.  Each element in the array can be a string, numerical value or an object.  The ",o.jsx("code",{children:"disabled"})," ","property can be used to mark an option as disabled."]})}),aM=Object.freeze(Object.defineProperty({__proto__:null,default:_x},Symbol.toStringTag,{value:"Module"})),sM=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Select"}),o.jsx(bx,{}),o.jsxs(ut,{tocName:"select",children:[o.jsx(ue,{title:"Properties"}),o.jsx(_x,{}),o.jsx(Sx,{}),o.jsx(wx,{}),o.jsx(K,{code:"disabled",children:"Boolean flag to set the select input to be disabled."}),o.jsxs(K,{code:"placeholder",children:["Set the placeholder text.  The default is ",o.jsx("code",{children:"Search"}),"."]}),o.jsxs(K,{code:"noOptions",children:["Set the text displayed when there are no options to select from. The default is ",o.jsx("code",{children:"No options"}),"."]}),o.jsxs(ts,{children:[o.jsxs("div",{children:[o.jsx(ue,{title:"Event Handlers"}),o.jsxs(K,{code:"onLoad",children:["Called when the component is first loaded.  The handler is passed a reference to the ",o.jsx("code",{children:"SearchContext"})," object."]}),o.jsxs(K,{code:"onUnload",children:["Called when the component is unloaded.  The handler is passed a reference to the ",o.jsx("code",{children:"SearchContext"})," object."]}),o.jsx(K,{code:"onFocus",children:"Called when the component gains focus."}),o.jsx(K,{code:"onBlur",children:"Called when the component loses focus."}),o.jsx(K,{code:"onClick",children:"Called when the component is clicked."}),o.jsx(K,{code:"onOpen",children:"Called when the component is opened and selectable options are displayed."}),o.jsx(K,{code:"onClose",children:"Called when the component is closed and selectable options are hidden."}),o.jsx(K,{code:"onSelect",children:"Called when an option is selected.  The selection option is passed as an argument."})]}),o.jsxs("div",{className:"flow",children:[o.jsx(ue,{title:"CSS Classes"}),o.jsxs(K,{code:"placeholderClass",children:["Set the class for the placeholder text. The default is ",o.jsx("code",{children:"placeholder"}),"."]}),o.jsxs(K,{code:"inputClass",children:["Set the class for the input element. The default is ",o.jsx("code",{children:"input"}),"."]}),o.jsxs(K,{code:"selectingClass",children:["Set the class added when a selection is in place. The default is ",o.jsx("code",{children:"selecting"}),"."]}),o.jsxs(K,{code:"optionsClass",children:["Set the class added for the options container. The default is ",o.jsx("code",{children:"menu border bdr-1"}),"."]}),o.jsxs(K,{code:"optionClass",children:["Set the class added to each option element. The default is ",o.jsx("code",{children:"item"}),"."]}),o.jsxs(K,{code:"activeClass",children:["Set the class added to an option that is currently active. The default is ",o.jsx("code",{children:"active"}),"."]}),o.jsxs(K,{code:"noOptionsClass",children:["Set the class added to the element displayed when there are no options to select from. The default is ",o.jsx("code",{children:"none"}),"."]})]}),o.jsxs("div",{className:"flow",children:[o.jsx(ue,{title:"Components"}),o.jsx(K,{code:"Content",children:"Renders the content of the select component."}),o.jsx(K,{code:"Input",children:"Renders the input field."}),o.jsx(K,{code:"Options",id:"Options-component",children:"Renders the selectable options."}),o.jsx(K,{code:"Option",children:"Renders an individual option."}),o.jsx(K,{code:"NoOptions",id:"NoOptions-component",children:"Renders a message indicating that there are no options to select from."})]})]})]})]}),lM=Object.freeze(Object.defineProperty({__proto__:null,default:sM},Symbol.toStringTag,{value:"Module"})),Ff=[{id:100,animal:"Ant"},{id:101,animal:"Bat"},{id:102,animal:"Cat"},{id:103,animal:"Dog"}],iM=()=>{const[e,t]=q.useState(!1),[n,r]=q.useState(Ff),a=i=>{r(i),t(!0)},s=()=>{r(Ff.map(i=>({...i,moved:!1}))),t(!1)},l=({item:i,setNodeRef:c,style:u,listeners:d,...f})=>o.jsx("div",{ref:c,style:u,className:`sortable border item mar-r-2 pad pad-h-2 ${i.moved?"moved":""}`,...f,...d,children:i.animal});return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"flex space middle mar-b-4",children:[o.jsx("h3",{children:"Drag Items to Set Order"}),e&&o.jsx("div",{children:o.jsx(M,{color:"brown",size:"smallest",text:"Reset Order",iconLeft:"rotate-flipx",onClick:s})})]}),o.jsx("div",{className:"sortable list Horizontal",children:o.jsx(i_,{items:n,Item:l,setOrder:a})})]})},cM=`import { HorizontalSort, Button } from '@/src/index.jsx'

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

export default HorizontalSortExample`,Tx=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"HorizontalSort"})," component works exactly the same but constricts the items to be sorted horizontally."]}),o.jsx(be,{Component:iM,code:cM})]}),uM=Object.freeze(Object.defineProperty({__proto__:null,default:Tx},Symbol.toStringTag,{value:"Module"})),ri=[{id:100,animal:"Alan Aardvark"},{id:101,animal:"Brian Badger"},{id:102,animal:"Colin Camel"},{id:103,animal:"David Dog"},{id:104,animal:"Edward Elephant"},{id:105,animal:"Frank Ferret"},{id:106,animal:"Gerald Giraffe"},{id:107,animal:"Hector Hedgehog"}],dM=()=>{const[e,t]=q.useState(!1),[n,r]=q.useState(ri),a=i=>{r(i),t(!0)},s=()=>{r(ri.map(i=>({...i,moved:!1}))),t(!1)},l=({item:i,setNodeRef:c,style:u,listeners:d,...f})=>o.jsx("div",{ref:c,style:u,className:`sortable item border mar-r-2 mar-b-2 pad pad-h-2 ${i.moved?"moved":""}`,...f,...d,children:i.animal});return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"flex space middle mar-b-4",children:[o.jsx("h3",{children:"Drag Items to Set Order"}),e&&o.jsx("div",{children:o.jsx(M,{color:"brown",size:"smallest",text:"Reset Order",iconLeft:"rotate-flipx",onClick:s})})]}),o.jsx("div",{className:`sortable ${e?"changed":""}`,children:o.jsx(kp,{items:n,Item:l,setOrder:a})})]})},pM=`import { Sortable, Button } from '@/src/index.jsx'

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

export default SortableExample`,kx=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"Sortable"})," component is a wrapper around"," ",o.jsx("a",{href:"https://dndkit.com/",children:"dnd kit"})," for creating sortable components."]}),o.jsx(be,{Component:dM,code:pM})]}),fM=Object.freeze(Object.defineProperty({__proto__:null,default:kx},Symbol.toStringTag,{value:"Module"})),hM=()=>{const[e,t]=q.useState(!1),[n,r]=q.useState(ri),a=i=>{r(i),t(!0)},s=()=>{r(ri.map(i=>({...i,moved:!1}))),t(!1)},l=({item:i,setNodeRef:c,style:u,listeners:d,...f})=>o.jsx("div",{ref:c,style:u,className:`sortable item border mar-b-2 pad pad-h-2 ${i.moved?"moved":""}`,...f,...d,children:i.animal});return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"flex space middle mar-b-4",children:[o.jsx("h3",{className:"mar-t-none",children:"Drag Items to Set Order"}),e&&o.jsx("div",{children:o.jsx(M,{color:"brown",size:"smallest",text:"Reset Order",iconLeft:"rotate-flipx",onClick:s})})]}),o.jsx("div",{className:"sortable list vertical",children:o.jsx(c_,{items:n,Item:l,setOrder:a})})]})},mM=`import { VerticalSort, Button } from '@/src/index.jsx'

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

export default VerticalSortExample`,Ex=()=>o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"large",children:["The ",o.jsx("code",{children:"VerticalSort"})," component works exactly the same but constricts the items to be sorted vertically."]}),o.jsx(be,{Component:hM,code:mM})]}),gM=Object.freeze(Object.defineProperty({__proto__:null,default:Ex},Symbol.toStringTag,{value:"Module"})),xM=()=>o.jsxs("div",{className:"flow",children:[o.jsx("h1",{children:"Sortable"}),o.jsx(kx,{}),o.jsx("h1",{children:"Vertical Sort"}),o.jsx(Ex,{}),o.jsx("h1",{children:"Horizontal Sort"}),o.jsx(Tx,{}),o.jsxs(ut,{tocName:"sortable",children:[o.jsx(ue,{title:"Properties"}),o.jsxs(K,{code:"items",children:["An array of items to sort.  Each should be an object which must contain an ",o.jsx("code",{children:"id"})," property to uniquely identify it."]}),o.jsxs(K,{code:"Item",children:["A component used to render each item.  It will be passed an"," ",o.jsx("code",{children:"item"})," from the list of items, ",o.jsx("code",{children:"setNodeRef"})," ","which must be added to the generate element via the ",o.jsx("code",{children:"ref"})," ","property, a ",o.jsx("code",{children:"style"})," object containing style,",o.jsx("code",{children:"listeners"})," and other ",o.jsx("code",{children:"props"})," which should be added to the element."]}),o.jsxs(K,{code:"setOrder",children:["A function which will be called when the order of items changes. It will be pass an array containing the ",o.jsx("code",{children:"items"})," in the new order."]})]})]}),vM=Object.freeze(Object.defineProperty({__proto__:null,default:xM},Symbol.toStringTag,{value:"Module"})),yM=`## using npm
$ npm add @abw/badger-react-ui

## using yarn
$ yarn add @abw/badger-react-ui

## using pnpm
$ pnpm add @abw/badger-react-ui`,CM="import '@abw/badger-react-ui/styles/badger-css-react-ui.min.css';",jM="@import '@abw/badger-react-ui/styles/badger-css-react-ui.scss';",bM=`// If you're already importing Badger CSS styles
// something like this...
import '@abw/badger-css/styles/badger.min.css';

// ...then you only need to add this line to get
// the additional styles from Badger React UI
import '@abw/badger-react-ui/styles/badger-react-ui.min.css';`,SM=`// If you're already importing Badger CSS styles
// something like this...
import '@abw/badger-css/styles/badger.scss';

// ...then you only need to add this line to get
// the additional styles from Badger React UI
import '@abw/badger-react-ui/styles/badger-react-ui.scss';
`,wM=()=>o.jsxs("div",{className:"prose flow",children:[o.jsx("h1",{children:"Installation"}),o.jsx("h2",{children:"Adding to a Javascript Project"}),o.jsxs("p",{children:["Add ",o.jsx("code",{children:"@abw/badger-react-ui"})," to your Javascript project using your favourite package manager."]}),o.jsx(tr,{code:yM,caption:"Installing",language:"shell",className:"mar-b-8",expand:!0}),o.jsx("h2",{children:"Importing the CSS"}),o.jsxs(ts,{children:[o.jsx("p",{children:"The precise details on how you import the CSS will vary depending on what framework and bundler you're using.  For a React app using Vite or running under Next.js, for example, you can add the CSS file to your main application script as show below."}),o.jsxs("p",{children:["For other frameworks and/or bundlers you should consult the documentation on how to import a CSS file from a module in your"," ",o.jsx("code",{children:"node_modules"})," directory."]})]}),o.jsx(tr,{code:CM,caption:"Combined CSS for Badger CSS / React UI",language:"js",className:"mar-b-8",expand:!0}),o.jsx("h2",{children:"Importing the SCSS"}),o.jsxs(ts,{children:[o.jsx("p",{children:"If you're using SASS/SCSS to build your stylesheet then you can import the SCSS components."}),o.jsx("p",{children:"Add the following line to your main SCSS stylesheet source."})]}),o.jsx(tr,{code:jM,caption:"Combined SCSS for Badger CSS / React UI",language:"scss",className:"mar-b-8",expand:!0}),o.jsx("h2",{children:"Includes Badger CSS!"}),o.jsxs("p",{children:["Note that the examples shown above import stylesheets that"," ",o.jsx("b",{children:"include"})," the styles from Badger CSS.  If you're already using Badger CSS and have it imported, or if you've customised your installation of Badger CSS, then you only need to import the additional styles for Badger React UI."]}),o.jsx(tr,{code:bM,caption:"Separate CSS for Badger CSS / React UI",language:"js",className:"mar-b-8",expand:!0}),o.jsx(tr,{code:SM,caption:"Separate SCSS for Badger CSS / React UI",language:"scss",className:"mar-b-8",expand:!0})]}),_M=Object.freeze(Object.defineProperty({__proto__:null,default:wM},Symbol.toStringTag,{value:"Module"})),TM=e=>x.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 900 348",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",xmlSpace:"preserve","xmlns:serif":"http://www.serif.com/",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:2},...e},x.createElement("path",{className:"white",d:"M251.572,212.02C254.513,216.061 254.715,224.14 250.095,227.707C250.444,223.032 248.285,217.636 246.595,215.207C245.351,213.421 240.529,209.129 235.734,208.678C239.528,206.432 248.479,207.771 251.572,212.02ZM384.14,296.071C385.221,300.139 369.105,297.678 368.976,310.316C368.912,316.686 371.784,320.829 368.158,321.337C364.186,321.893 363.702,317.912 363.009,312.67C361.525,301.448 369.403,297.943 376.939,295.687C383.239,293.8 383.721,294.493 384.14,296.071ZM253.718,205.387C253.325,205.165 252.924,204.95 252.515,204.744C240.306,198.572 226.195,201.866 221.023,212.097C216.954,220.147 219.624,230.108 226.897,236.996C223.855,235.725 220.886,234.082 218.121,232C201.872,219.763 198.65,197.554 202.498,192.469C205.797,188.109 229.508,185.044 245.757,197.281C248.897,199.645 251.533,202.419 253.718,205.387ZM237.701,38.979C234.959,40.644 229.11,29.763 219.15,31.701C213.297,32.839 209.964,30.344 213.732,27.34C224.434,18.806 242.755,35.909 237.701,38.979ZM102.358,65.632C92.93,59.118 82.319,55.79 70.261,59.171C61.606,61.598 55.943,67.285 53.203,74.67C51.916,74.775 50.609,74.911 49.293,75.073C41.358,76.053 33.068,77.961 26.855,79.508C45.336,54.696 68.07,46.037 90.212,45.935L91.775,45.928L92.073,44.393C93.513,36.977 89.339,29.817 78.425,24.264C102.932,19.041 133.157,24.498 149.387,33.721L151.514,34.93L152.164,32.571C153.117,29.113 152.884,20.563 147.007,12.944C177.743,18.398 201.051,28.288 219.375,41.206C253.271,69.998 271.19,107.581 286.422,143.401C303.117,182.661 316.606,219.801 344.235,241.041C344.731,241.562 345.232,242.081 345.737,242.598C354.202,251.26 369.687,264.151 388.439,280.71C390.567,282.59 392.536,284.445 394.289,286.258C390.175,286.465 384.884,287.861 378.121,289.401C355.898,294.457 355.058,304.229 357.619,320.184C358.932,328.361 362.585,332.134 367.854,333.381C347.657,338.931 337.347,342.519 312.425,337.814C273.532,330.471 236.683,316.046 225.943,310.994C225.749,310.608 225.423,310.285 224.995,310.101C210.606,303.913 200.922,296.04 196.833,286.988C198.796,285.944 200.367,284.755 201.74,283.804C202.604,283.205 202.819,282.017 202.22,281.154C201.622,280.29 200.434,280.074 199.57,280.673C196.577,282.748 192.528,286.255 184.628,285.578C183.581,285.489 182.657,286.266 182.568,287.313C182.478,288.361 183.256,289.284 184.303,289.373C187.94,289.685 190.882,289.256 193.326,288.475C197.252,297.211 205.873,305.078 218.736,311.412C193.53,320.617 171.273,314.508 151.338,302.875C130.029,290.441 111.338,271.747 94.517,258.202C80.516,246.928 67.672,239.285 55.79,240.915C48.382,241.931 41.226,246.463 34.375,256.107C23.226,231.606 38.024,207.024 52.658,191.434L54.205,189.786L52.319,188.541C38.022,179.099 21.81,184.908 11.009,196.975C10.204,187.276 14.741,173.112 22.182,160.21C29.69,147.192 40.209,135.4 51.636,130.932C122.17,117.473 156.365,176.933 192.036,228.629C212.984,258.988 259.699,294.806 348.432,323.461C343.645,308.274 345.837,301.003 349.276,294.022C327.909,284.035 301.478,267.497 284.086,236.018C236.493,149.873 215.639,88.568 146.875,71.303C134.894,68.295 119.263,65.091 102.358,65.632ZM102.275,79.762C100.823,87.371 78.096,65.294 73.617,77.189C65.317,99.228 57.382,86.649 59.352,80.667C69.456,49.974 103.609,72.771 102.275,79.762Z",style:{fill:"white"}}),x.createElement("path",{className:"black",d:"M52.054,78.596C51.294,78.672 50.529,78.759 49.759,78.854C39.593,80.108 28.834,82.925 22.777,84.472L17.915,85.714L20.728,81.559C40.142,52.889 64.62,42.703 88.525,42.149C88.888,35.685 83.351,30.024 71.924,25.526L66.722,23.478L72.092,21.924C97.213,14.653 130.162,19.649 148.812,29.092C148.924,24.696 147.199,17.339 140.471,11.578L135.382,7.22L142.003,8.25C168.067,12.303 189.097,19.357 206.402,28.658C206.575,28.721 206.748,28.783 206.921,28.846C208.323,24.341 212.385,20.472 219.865,21.145C239.675,22.925 243.917,32.841 244.961,51.125C270.1,72.457 287.235,102.584 300.677,133.136C312.72,160.511 321.799,188.221 331.031,210.219C334.652,218.847 338.295,226.594 342.151,233.093C344.174,235.417 346.275,237.699 348.461,239.935C356.894,248.564 372.28,261.359 390.96,277.855C394.6,281.069 397.773,284.243 400.276,287.281C402.859,288.644 404.62,291.472 405.778,296.536C405.975,297.173 406.119,297.795 406.209,298.403C406.253,298.697 406.287,298.994 406.314,299.294C406.615,301.13 406.861,303.2 407.058,305.527C407.84,314.777 405.022,326.993 390.631,330.7C387.826,331.422 385.121,332.093 382.547,332.63C378.775,333.843 375.504,334.896 375.505,334.895C353.988,343.064 340.05,346.906 311.718,341.557C270.836,333.838 232.195,318.357 223.053,313.826C195.401,325.115 171.094,318.814 149.418,306.165C127.941,293.633 109.081,274.82 92.128,261.169C85.494,255.827 79.163,251.286 73.076,248.283C67.258,245.412 61.69,243.95 56.308,244.689C49.102,245.677 42.338,250.617 35.728,260.909L33.983,263.626L32.45,260.785C18.325,234.619 32.7,207.872 48.29,190.557C35.023,183.325 20.386,190.519 11.384,202.521L9.087,205.583L8.03,201.904C5.111,191.745 9.777,174.095 18.883,158.307C24.331,148.86 31.344,140.108 39.121,133.986C28.037,137.259 16.107,142.234 3.209,149.173C16.216,114.812 33.291,93.85 51.552,81.51C51.677,80.52 51.845,79.548 52.054,78.596ZM251.572,212.02C248.479,207.771 239.528,206.432 235.734,208.678C240.529,209.129 245.351,213.421 246.595,215.207C248.285,217.636 250.444,223.032 250.095,227.707C254.715,224.14 254.513,216.061 251.572,212.02ZM384.14,296.071C383.721,294.493 383.239,293.8 376.939,295.687C369.403,297.943 361.525,301.448 363.009,312.67C363.702,317.912 364.186,321.893 368.158,321.337C371.784,320.829 368.912,316.686 368.976,310.316C369.105,297.678 385.221,300.139 384.14,296.071ZM253.718,205.387C251.533,202.419 248.897,199.645 245.757,197.281C229.508,185.044 205.797,188.109 202.498,192.469C198.65,197.554 201.872,219.763 218.121,232C220.886,234.082 223.855,235.725 226.897,236.996C219.624,230.108 216.954,220.147 221.023,212.097C226.195,201.866 240.306,198.572 252.515,204.744C252.924,204.95 253.325,205.165 253.718,205.387ZM237.701,38.979C242.755,35.909 224.434,18.806 213.732,27.34C209.964,30.344 213.297,32.839 219.15,31.701C229.11,29.763 234.959,40.644 237.701,38.979ZM102.358,65.632C119.263,65.091 134.894,68.295 146.875,71.303C215.639,88.568 236.493,149.873 284.086,236.018C301.478,267.497 327.909,284.035 349.276,294.022C345.837,301.003 343.645,308.274 348.432,323.461C259.699,294.806 212.984,258.988 192.036,228.629C156.365,176.933 122.17,117.473 51.636,130.932C40.209,135.4 29.69,147.192 22.182,160.21C14.741,173.112 10.204,187.276 11.009,196.975C21.81,184.908 38.022,179.099 52.319,188.541L54.205,189.786L52.658,191.434C38.024,207.024 23.226,231.606 34.375,256.107C41.226,246.463 48.382,241.931 55.79,240.915C67.672,239.285 80.516,246.928 94.517,258.202C111.338,271.747 130.029,290.441 151.338,302.875C171.273,314.508 193.53,320.617 218.736,311.412C205.873,305.078 197.252,297.211 193.326,288.475C190.882,289.256 187.94,289.685 184.303,289.373C183.256,289.284 182.478,288.361 182.568,287.313C182.657,286.266 183.581,285.489 184.628,285.578C192.528,286.255 196.577,282.748 199.57,280.673C200.434,280.074 201.622,280.29 202.22,281.154C202.819,282.017 202.604,283.205 201.74,283.804C200.367,284.755 198.796,285.944 196.833,286.988C200.922,296.04 210.606,303.913 224.995,310.101C225.423,310.285 225.749,310.608 225.943,310.994C236.683,316.046 273.532,330.471 312.425,337.814C337.347,342.519 347.657,338.931 367.854,333.381C362.585,332.134 358.932,328.361 357.619,320.184C355.058,304.229 355.898,294.457 378.121,289.401C384.884,287.861 390.175,286.465 394.289,286.258C392.536,284.445 390.567,282.59 388.439,280.71C369.687,264.151 354.202,251.26 345.737,242.598C345.232,242.081 344.731,241.562 344.235,241.041C316.606,219.801 303.117,182.661 286.422,143.401C271.19,107.581 253.271,69.998 219.375,41.206C201.051,28.288 177.743,18.398 147.007,12.944C152.884,20.563 153.117,29.113 152.164,32.571L151.514,34.93L149.387,33.721C133.157,24.498 102.932,19.041 78.425,24.264C89.339,29.817 93.513,36.977 92.073,44.393L91.775,45.928L90.212,45.935C68.07,46.037 45.336,54.696 26.855,79.508C33.068,77.961 41.358,76.053 49.293,75.073C50.609,74.911 51.916,74.775 53.203,74.67C55.943,67.285 61.606,61.598 70.261,59.171C82.319,55.79 92.93,59.118 102.358,65.632ZM102.275,79.762C103.609,72.771 69.456,49.974 59.352,80.667C57.382,86.649 65.317,99.228 73.617,77.189C78.096,65.294 100.823,87.371 102.275,79.762Z"}),x.createElement("path",{className:"badger",d:"M418.81,39.948C419.704,39.68 421.135,39.389 423.103,39.076C425.07,38.763 427.082,38.607 429.139,38.607C431.107,38.607 432.873,38.741 434.438,39.009C436.003,39.277 437.322,39.814 438.396,40.619C439.469,41.424 440.274,42.519 440.81,43.905C441.347,45.292 441.615,47.103 441.615,49.338L441.615,62.485C443.851,61.591 445.975,60.965 447.987,60.607C449.999,60.249 452.213,60.07 454.628,60.07C458.92,60.07 462.989,60.831 466.835,62.351C470.681,63.871 474.079,66.085 477.03,68.991C479.982,71.898 482.307,75.497 484.006,79.79C485.705,84.083 486.555,89.046 486.555,94.681C486.555,100.494 485.683,105.569 483.939,109.907C482.195,114.244 479.758,117.844 476.628,120.706C473.498,123.567 469.675,125.736 465.158,127.212C460.642,128.687 455.656,129.425 450.201,129.425C444.298,129.425 439.29,128.732 435.176,127.346C431.062,125.96 427.574,124.238 424.712,122.181C420.777,119.409 418.81,115.831 418.81,111.449L418.81,39.948ZM450.201,111.449C454.314,111.449 457.512,110.041 459.792,107.224C462.073,104.406 463.213,100.226 463.213,94.681C463.213,89.046 462.05,84.843 459.725,82.071C457.4,79.298 454.27,77.912 450.335,77.912C448.546,77.912 447.003,78.091 445.707,78.449C444.41,78.806 443.001,79.343 441.481,80.059L441.481,109.303C442.465,109.929 443.65,110.443 445.036,110.846C446.422,111.248 448.144,111.449 450.201,111.449ZM524.787,60.07C529.617,60.07 534.021,60.562 538.001,61.546C541.981,62.53 545.379,64.028 548.196,66.04C551.013,68.052 553.182,70.601 554.702,73.686C556.223,76.772 556.983,80.416 556.983,84.62L556.983,114.669C556.983,116.994 556.335,118.895 555.038,120.37C553.741,121.846 552.198,123.12 550.41,124.193C544.597,127.681 536.413,129.425 525.86,129.425C521.121,129.425 516.85,128.978 513.049,128.084C509.248,127.189 505.984,125.848 503.256,124.059C500.529,122.271 498.427,119.99 496.951,117.218C495.476,114.445 494.738,111.226 494.738,107.559C494.738,101.388 496.571,96.648 500.238,93.339C503.905,90.03 509.584,87.973 517.275,87.168L534.848,85.29L534.848,84.351C534.848,81.758 533.708,79.902 531.428,78.784C529.147,77.666 525.86,77.107 521.568,77.107C518.169,77.107 514.86,77.465 511.641,78.18C508.421,78.896 505.515,79.79 502.921,80.863C501.758,80.059 500.775,78.829 499.97,77.174C499.165,75.52 498.762,73.798 498.762,72.01C498.762,69.684 499.321,67.829 500.439,66.442C501.557,65.056 503.279,63.871 505.604,62.887C508.198,61.904 511.261,61.188 514.793,60.741C518.326,60.294 521.657,60.07 524.787,60.07ZM525.86,112.791C527.381,112.791 529.058,112.634 530.891,112.321C532.724,112.008 534.088,111.583 534.983,111.047L534.983,100.315L525.324,101.12C522.82,101.299 520.763,101.835 519.153,102.73C517.543,103.624 516.738,104.965 516.738,106.754C516.738,108.543 517.431,109.996 518.818,111.114C520.204,112.232 522.551,112.791 525.86,112.791ZM568.117,94.681C568.117,88.778 569.012,83.658 570.8,79.321C572.589,74.983 575.071,71.384 578.245,68.522C581.42,65.66 585.132,63.536 589.38,62.15C593.628,60.763 598.211,60.07 603.13,60.07C604.919,60.07 606.663,60.227 608.362,60.54C610.061,60.853 611.447,61.233 612.52,61.68L612.52,39.948C613.415,39.68 614.846,39.389 616.813,39.076C618.781,38.763 620.793,38.607 622.85,38.607C624.817,38.607 626.584,38.741 628.149,39.009C629.714,39.277 631.033,39.814 632.106,40.619C633.179,41.424 633.984,42.519 634.521,43.905C635.057,45.292 635.326,47.103 635.326,49.338L635.326,112.925C635.326,117.128 633.358,120.482 629.423,122.986C626.83,124.685 623.476,126.183 619.362,127.48C615.248,128.777 610.508,129.425 605.142,129.425C599.329,129.425 594.12,128.62 589.514,127.011C584.908,125.401 581.018,123.076 577.843,120.035C574.668,116.994 572.253,113.35 570.599,109.102C568.944,104.854 568.117,100.047 568.117,94.681ZM606.215,77.912C601.386,77.912 597.675,79.298 595.081,82.071C592.488,84.843 591.191,89.046 591.191,94.681C591.191,100.226 592.398,104.406 594.813,107.224C597.227,110.041 600.715,111.449 605.276,111.449C606.886,111.449 608.339,111.203 609.636,110.711C610.933,110.22 611.939,109.661 612.655,109.035L612.655,79.522C610.866,78.449 608.72,77.912 606.215,77.912ZM681.339,60.07C686.436,60.07 691.064,60.719 695.223,62.016C699.382,63.312 702.892,64.989 705.754,67.046C707.542,68.298 708.951,69.684 709.979,71.205C711.008,72.725 711.522,74.693 711.522,77.107L711.522,124.059C711.522,128.799 710.628,132.891 708.839,136.334C707.051,139.777 704.613,142.639 701.528,144.919C698.443,147.2 694.821,148.877 690.662,149.95C686.503,151.023 682.054,151.56 677.314,151.56C669.176,151.56 662.781,150.464 658.131,148.273C653.48,146.082 651.155,142.527 651.155,137.608C651.155,135.551 651.58,133.74 652.43,132.175C653.279,130.61 654.241,129.425 655.314,128.62C657.907,130.051 660.836,131.259 664.101,132.242C667.365,133.226 670.741,133.718 674.229,133.718C679.058,133.718 682.904,132.913 685.766,131.303C688.627,129.694 690.058,127.1 690.058,123.523L690.058,121.376C686.392,122.986 681.92,123.791 676.643,123.791C672.619,123.791 668.796,123.187 665.174,121.98C661.552,120.773 658.377,118.895 655.649,116.346C652.922,113.797 650.73,110.51 649.076,106.486C647.421,102.461 646.594,97.677 646.594,92.132C646.594,86.677 647.466,81.937 649.21,77.912C650.954,73.888 653.369,70.556 656.454,67.918C659.54,65.28 663.206,63.312 667.454,62.016C671.702,60.719 676.33,60.07 681.339,60.07ZM689.656,79.522C689.03,79.164 688.113,78.806 686.906,78.449C685.699,78.091 684.201,77.912 682.412,77.912C678.03,77.912 674.743,79.142 672.552,81.601C670.361,84.061 669.265,87.571 669.265,92.132C669.265,97.319 670.361,101.053 672.552,103.333C674.743,105.614 677.538,106.754 680.936,106.754C684.603,106.754 687.51,105.904 689.656,104.205L689.656,79.522ZM760.084,129.425C754.807,129.425 749.911,128.687 745.395,127.212C740.878,125.736 736.943,123.523 733.59,120.571C730.236,117.62 727.598,113.909 725.675,109.437C723.752,104.965 722.791,99.734 722.791,93.742C722.791,87.839 723.752,82.764 725.675,78.516C727.598,74.268 730.124,70.78 733.254,68.052C736.384,65.325 739.962,63.312 743.986,62.016C748.011,60.719 752.124,60.07 756.328,60.07C761.068,60.07 765.383,60.786 769.273,62.217C773.163,63.648 776.517,65.615 779.334,68.119C782.151,70.623 784.342,73.619 785.908,77.107C787.473,80.595 788.255,84.396 788.255,88.51C788.255,91.551 787.406,93.876 785.706,95.486C784.007,97.095 781.637,98.124 778.596,98.571L745.462,103.535C746.445,106.486 748.458,108.699 751.498,110.175C754.539,111.651 758.027,112.388 761.962,112.388C765.629,112.388 769.094,111.919 772.359,110.98C775.623,110.041 778.283,108.945 780.34,107.693C781.771,108.587 782.979,109.84 783.962,111.449C784.946,113.059 785.438,114.758 785.438,116.547C785.438,120.571 783.56,123.567 779.804,125.535C776.942,127.055 773.722,128.084 770.145,128.62C766.568,129.157 763.214,129.425 760.084,129.425ZM756.328,76.705C754.181,76.705 752.326,77.063 750.761,77.778C749.196,78.493 747.921,79.41 746.937,80.528C745.954,81.646 745.216,82.898 744.724,84.284C744.232,85.67 743.941,87.079 743.852,88.51L766.791,84.754C766.523,82.965 765.539,81.176 763.84,79.388C762.141,77.599 759.637,76.705 756.328,76.705ZM822.061,127.145C821.166,127.413 819.758,127.681 817.835,127.95C815.912,128.218 813.922,128.352 811.865,128.352C809.898,128.352 808.131,128.218 806.566,127.95C805.001,127.681 803.682,127.145 802.609,126.34C801.536,125.535 800.709,124.439 800.127,123.053C799.546,121.667 799.255,119.856 799.255,117.62L799.255,77.376C799.255,75.319 799.635,73.552 800.396,72.077C801.156,70.601 802.251,69.282 803.682,68.119C805.113,66.957 806.879,65.906 808.981,64.967C811.083,64.028 813.341,63.201 815.756,62.485C818.17,61.77 820.674,61.211 823.268,60.808C825.861,60.406 828.455,60.205 831.049,60.205C835.341,60.205 838.74,61.032 841.244,62.686C843.748,64.341 845,67.046 845,70.802C845,72.054 844.821,73.284 844.463,74.491C844.106,75.699 843.659,76.794 843.122,77.778C841.244,77.778 839.321,77.867 837.354,78.046C835.386,78.225 833.463,78.493 831.585,78.851C829.707,79.209 827.941,79.589 826.286,79.991C824.632,80.394 823.223,80.863 822.061,81.4L822.061,127.145Z"}),x.createElement("path",{className:"react-ui",d:"M456.264,259.551C455.489,259.783 454.269,260.016 452.604,260.248C450.939,260.48 449.215,260.596 447.434,260.596C445.73,260.596 444.2,260.48 442.845,260.248C441.49,260.016 440.347,259.551 439.418,258.854C438.488,258.157 437.772,257.208 437.268,256.007C436.765,254.807 436.513,253.239 436.513,251.302L436.513,216.449C436.513,214.667 436.842,213.138 437.501,211.86C438.159,210.582 439.108,209.439 440.347,208.432C441.586,207.426 443.116,206.516 444.936,205.702C446.756,204.889 448.712,204.173 450.803,203.553C452.894,202.933 455.063,202.449 457.309,202.101C459.555,201.752 461.801,201.578 464.047,201.578C467.765,201.578 470.708,202.294 472.877,203.727C475.046,205.16 476.13,207.503 476.13,210.756C476.13,211.84 475.975,212.905 475.665,213.951C475.355,214.997 474.968,215.945 474.504,216.797C472.877,216.797 471.212,216.875 469.508,217.03C467.804,217.185 466.139,217.417 464.512,217.727C462.886,218.037 461.356,218.366 459.923,218.714C458.49,219.063 457.27,219.469 456.264,219.934L456.264,259.551ZM511.913,261.526C507.343,261.526 503.103,260.887 499.191,259.609C495.28,258.331 491.872,256.414 488.968,253.858C486.063,251.302 483.778,248.088 482.113,244.215C480.448,240.343 479.615,235.812 479.615,230.623C479.615,225.511 480.448,221.115 482.113,217.436C483.778,213.757 485.966,210.737 488.677,208.374C491.388,206.012 494.486,204.269 497.971,203.146C501.457,202.023 505.02,201.462 508.66,201.462C512.765,201.462 516.502,202.081 519.871,203.321C523.24,204.56 526.145,206.264 528.584,208.432C531.024,210.601 532.922,213.196 534.277,216.216C535.633,219.237 536.31,222.529 536.31,226.092C536.31,228.725 535.574,230.739 534.103,232.133C532.631,233.527 530.579,234.418 527.945,234.805L499.249,239.104C500.101,241.659 501.844,243.576 504.477,244.854C507.111,246.132 510.131,246.771 513.539,246.771C516.715,246.771 519.716,246.365 522.543,245.551C525.37,244.738 527.674,243.789 529.456,242.705C530.695,243.48 531.741,244.564 532.593,245.958C533.445,247.352 533.871,248.824 533.871,250.373C533.871,253.858 532.244,256.453 528.991,258.157C526.513,259.473 523.724,260.364 520.626,260.829C517.528,261.294 514.624,261.526 511.913,261.526ZM508.66,215.868C506.801,215.868 505.194,216.178 503.838,216.797C502.483,217.417 501.379,218.211 500.527,219.179C499.675,220.147 499.036,221.231 498.61,222.432C498.184,223.632 497.933,224.852 497.855,226.092L517.722,222.839C517.489,221.29 516.637,219.74 515.166,218.191C513.694,216.642 511.526,215.868 508.66,215.868ZM569.073,201.462C573.255,201.462 577.069,201.888 580.516,202.74C583.963,203.592 586.906,204.889 589.346,206.632C591.785,208.374 593.664,210.582 594.98,213.254C596.297,215.926 596.955,219.082 596.955,222.722L596.955,248.746C596.955,250.76 596.394,252.406 595.271,253.684C594.148,254.962 592.812,256.066 591.263,256.995C586.228,260.016 579.141,261.526 570.002,261.526C565.897,261.526 562.199,261.139 558.907,260.364C555.615,259.59 552.788,258.428 550.426,256.879C548.064,255.33 546.244,253.355 544.966,250.954C543.688,248.553 543.049,245.764 543.049,242.589C543.049,237.245 544.636,233.14 547.812,230.274C550.987,227.408 555.906,225.627 562.567,224.93L577.786,223.303L577.786,222.49C577.786,220.244 576.798,218.637 574.823,217.669C572.848,216.7 570.002,216.216 566.284,216.216C563.341,216.216 560.475,216.526 557.687,217.146C554.899,217.765 552.382,218.54 550.135,219.469C549.129,218.772 548.277,217.707 547.58,216.275C546.883,214.842 546.534,213.351 546.534,211.802C546.534,209.788 547.018,208.181 547.986,206.98C548.954,205.78 550.445,204.754 552.459,203.902C554.705,203.05 557.358,202.43 560.417,202.043C563.477,201.655 566.362,201.462 569.073,201.462ZM570.002,247.12C571.319,247.12 572.771,246.984 574.359,246.713C575.946,246.442 577.128,246.074 577.902,245.609L577.902,236.315L569.537,237.012C567.369,237.167 565.587,237.632 564.193,238.406C562.799,239.181 562.102,240.343 562.102,241.892C562.102,243.441 562.702,244.699 563.903,245.668C565.103,246.636 567.136,247.12 570.002,247.12ZM640.871,217.03C638.934,217.03 637.095,217.339 635.352,217.959C633.609,218.579 632.099,219.489 630.821,220.689C629.543,221.89 628.517,223.381 627.743,225.162C626.968,226.944 626.581,229.035 626.581,231.436C626.581,236.238 627.955,239.839 630.705,242.24C633.455,244.641 636.804,245.842 640.754,245.842C643.078,245.842 645.092,245.571 646.796,245.029C648.5,244.486 650.01,243.906 651.327,243.286C652.876,244.37 654.037,245.551 654.812,246.829C655.587,248.107 655.974,249.637 655.974,251.418C655.974,254.594 654.463,257.053 651.443,258.796C648.422,260.538 644.24,261.41 638.896,261.41C634.016,261.41 629.601,260.693 625.651,259.26C621.701,257.828 618.313,255.814 615.486,253.219C612.659,250.625 610.471,247.507 608.922,243.867C607.373,240.227 606.598,236.199 606.598,231.784C606.598,226.672 607.431,222.2 609.096,218.366C610.761,214.532 613.027,211.376 615.892,208.897C618.758,206.419 622.069,204.56 625.826,203.321C629.582,202.081 633.551,201.462 637.734,201.462C643.31,201.462 647.609,202.469 650.63,204.482C653.65,206.496 655.161,209.091 655.161,212.266C655.161,213.738 654.812,215.113 654.115,216.391C653.418,217.669 652.605,218.772 651.675,219.702C650.359,219.082 648.771,218.482 646.912,217.901C645.053,217.32 643.039,217.03 640.871,217.03ZM685.599,240.265C685.599,242.279 686.238,243.712 687.516,244.564C688.794,245.416 690.595,245.842 692.918,245.842C694.08,245.842 695.281,245.745 696.52,245.551C697.759,245.358 698.844,245.106 699.773,244.796C700.47,245.648 701.07,246.597 701.574,247.643C702.077,248.688 702.329,249.947 702.329,251.418C702.329,254.362 701.225,256.763 699.018,258.621C696.81,260.48 692.918,261.41 687.342,261.41C680.526,261.41 675.279,259.861 671.6,256.763C667.921,253.665 666.081,248.63 666.081,241.659L666.081,191.935C666.933,191.703 668.153,191.451 669.741,191.18C671.329,190.909 673.013,190.773 674.795,190.773C678.203,190.773 680.855,191.374 682.753,192.574C684.65,193.775 685.599,196.311 685.599,200.184L685.599,207.619L700.819,207.619C701.283,208.471 701.729,209.536 702.155,210.814C702.581,212.092 702.794,213.506 702.794,215.055C702.794,217.765 702.193,219.721 700.993,220.922C699.792,222.122 698.185,222.722 696.171,222.722L685.599,222.722L685.599,240.265ZM799.454,233.643C799.454,237.826 798.737,241.64 797.305,245.087C795.872,248.533 793.8,251.476 791.089,253.916C788.378,256.356 785.086,258.234 781.214,259.551C777.341,260.868 772.965,261.526 768.086,261.526C763.206,261.526 758.83,260.868 754.958,259.551C751.085,258.234 747.793,256.356 745.082,253.916C742.372,251.476 740.3,248.533 738.867,245.087C737.434,241.64 736.718,237.826 736.718,233.643L736.718,189.263C737.57,189.108 738.925,188.895 740.784,188.624C742.643,188.353 744.424,188.217 746.128,188.217C747.909,188.217 749.478,188.353 750.833,188.624C752.189,188.895 753.331,189.379 754.261,190.076C755.19,190.773 755.887,191.742 756.352,192.981C756.816,194.22 757.049,195.847 757.049,197.86L757.049,233.295C757.049,237.012 758.075,239.917 760.128,242.008C762.18,244.099 764.833,245.145 768.086,245.145C771.416,245.145 774.088,244.099 776.102,242.008C778.116,239.917 779.123,237.012 779.123,233.295L779.123,189.263C779.975,189.108 781.33,188.895 783.189,188.624C785.048,188.353 786.829,188.217 788.533,188.217C790.314,188.217 791.883,188.353 793.238,188.624C794.594,188.895 795.736,189.379 796.666,190.076C797.595,190.773 798.292,191.742 798.757,192.981C799.221,194.22 799.454,195.847 799.454,197.86L799.454,233.643ZM834.54,259.202C833.688,259.435 832.352,259.667 830.531,259.899C828.711,260.132 826.911,260.248 825.129,260.248C823.348,260.248 821.779,260.112 820.424,259.841C819.069,259.57 817.926,259.086 816.997,258.389C816.067,257.692 815.37,256.724 814.906,255.485C814.441,254.245 814.208,252.619 814.208,250.605L814.208,189.263C815.06,189.108 816.416,188.895 818.275,188.624C820.134,188.353 821.915,188.217 823.619,188.217C825.4,188.217 826.969,188.353 828.324,188.624C829.68,188.895 830.822,189.379 831.751,190.076C832.681,190.773 833.378,191.742 833.843,192.981C834.307,194.22 834.54,195.847 834.54,197.86L834.54,259.202Z"})),kM=e=>x.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 440 440",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",xmlSpace:"preserve","xmlns:serif":"http://www.serif.com/",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:1.5},...e},x.createElement("circle",{cx:220,cy:220,r:144,style:{fill:"rgb(136,136,136)",stroke:"black",strokeWidth:"0.33px"}}),x.createElement("path",{d:"M220,12C334.798,12 428,105.202 428,220C428,334.798 334.798,428 220,428C105.202,428 12,334.798 12,220C12,105.202 105.202,12 220,12ZM220,76C140.524,76 76,140.524 76,220C76,299.476 140.524,364 220,364C299.476,364 364,299.476 364,220C364,140.524 299.476,76 220,76Z",style:{fill:"rgb(206,206,206)",stroke:"black",strokeWidth:"6.67px"}}),x.createElement("path",{d:"M41.319,232.772C38.119,232.829 35.878,232.789 34.556,232.652C33.233,232.516 32.025,232.097 30.891,231.317C29.797,230.537 28.939,229.512 28.315,228.163C27.731,226.853 27.383,225.299 27.351,223.499C27.321,221.82 27.574,220.295 28.11,218.925C28.645,217.555 29.466,216.461 30.532,215.641C31.636,214.782 32.828,214.28 34.145,214.097C35.421,213.914 37.7,213.793 40.979,213.735L46.378,213.638C49.538,213.582 51.819,213.621 53.142,213.758C54.464,213.894 55.672,214.313 56.766,215.093C57.9,215.873 58.758,216.898 59.343,218.248C59.966,219.557 60.274,221.112 60.306,222.912C60.336,224.591 60.083,226.116 59.547,227.486C59.052,228.855 58.231,229.95 57.126,230.769C56.021,231.629 54.829,232.131 53.553,232.313C52.236,232.497 49.957,232.618 46.718,232.675L41.319,232.772ZM51.53,224.348C53.01,224.322 53.968,224.225 54.365,224.058C54.762,223.891 54.957,223.567 54.947,223.047C54.94,222.607 54.774,222.29 54.45,222.056C54.126,221.862 53.124,221.759 51.484,221.789L36.727,222.052C34.887,222.085 33.769,222.185 33.331,222.313C32.934,222.48 32.7,222.844 32.71,223.364C32.72,223.924 32.966,224.279 33.489,224.43C33.972,224.581 35.173,224.64 37.012,224.607L51.53,224.348ZM60.115,235.306L61.347,243.494C61.681,245.709 61.739,247.439 61.562,248.68C61.424,249.914 61.047,250.901 60.464,251.596C59.92,252.284 59.189,252.799 58.275,253.179C57.356,253.52 55.95,253.853 53.972,254.151L51.243,254.562C49.265,254.859 47.772,254.882 46.796,254.584C45.827,254.325 45.002,253.681 44.361,252.645C43.719,251.609 43.228,250.226 42.96,248.447L42.632,246.271L30.054,248.165L28.827,240.017L60.115,235.306ZM55.962,244.264L48.012,245.461L48.101,246.054C48.214,246.806 48.45,247.296 48.887,247.514C49.285,247.737 50.06,247.782 51.207,247.609L53.778,247.222C54.846,247.061 55.534,246.796 55.797,246.392C56.066,246.028 56.117,245.293 55.962,244.264ZM65.668,263.888L35.019,271.744L32.973,263.762L63.622,255.906L65.668,263.888ZM73.017,284.844L43.393,295.958L40.864,289.217L52.805,280.165L39.36,285.21L36.944,278.768L66.567,267.654L68.984,274.095L57.267,283.404L70.6,278.402L73.017,284.844ZM78.538,295.659L50.283,309.897L46.575,302.539L74.83,288.301L78.538,295.659ZM74.884,324.988C72.198,326.727 70.274,327.877 69.079,328.459C67.884,329.042 66.637,329.325 65.262,329.262C63.921,329.177 62.651,328.76 61.408,327.945C60.221,327.141 59.105,326.005 58.127,324.494C57.214,323.084 56.623,321.655 56.354,320.209C56.085,318.763 56.204,317.4 56.676,316.142C57.159,314.828 57.906,313.773 58.927,312.922C59.915,312.092 61.786,310.786 64.539,309.004L69.073,306.07C71.725,304.353 73.683,303.181 74.878,302.598C76.073,302.015 77.32,301.733 78.661,301.817C80.036,301.88 81.306,302.297 82.515,303.135C83.736,303.917 84.819,305.074 85.797,306.585C86.71,307.996 87.3,309.424 87.569,310.87C87.872,312.294 87.753,313.657 87.248,314.937C86.764,316.251 86.017,317.306 85.03,318.136C84.008,318.987 82.138,320.293 79.418,322.054L74.884,324.988ZM79.105,312.441C80.347,311.637 81.11,311.048 81.358,310.697C81.607,310.345 81.601,309.968 81.319,309.531C81.08,309.162 80.772,308.98 80.372,308.952C79.995,308.958 79.09,309.401 77.714,310.292L65.322,318.312C63.778,319.312 62.881,319.987 62.577,320.327C62.328,320.679 62.322,321.111 62.605,321.548C62.909,322.018 63.306,322.19 63.829,322.042C64.319,321.915 65.37,321.33 66.915,320.331L79.105,312.441ZM104.097,331.146L80.061,351.721L75.379,346.251L83.505,333.662L72.595,343L68.121,337.773L92.158,317.198L96.632,322.425L88.805,335.179L99.624,325.92L104.097,331.146ZM116.973,342.973L99.303,369.64L93.032,363.991L96.536,359.503L94.337,357.522L90.179,361.421L83.849,355.718L108.146,335.022L116.973,342.973ZM100.106,355.182C102.219,352.239 104.837,348.676 108.073,344.485C103.407,348.41 100.049,351.361 98.026,353.308L100.106,355.182ZM133.778,355.495L130.062,360.657L126.102,357.806L111.332,378.323L104.645,373.509L119.414,352.992L115.486,350.164L119.202,345.002L133.778,355.495ZM135.754,356.629L147.731,363.322L144.628,368.874L139.845,366.2L136.918,371.438L141.387,373.936L138.46,379.173L133.991,376.676L130.596,382.752L135.833,385.678L132.75,391.196L120.32,384.249L135.754,356.629ZM150.451,364.831L156.15,367.169C159.813,368.672 162.217,369.874 163.376,370.738C164.534,371.603 165.306,372.568 165.653,373.618C166,374.669 166.095,375.702 165.849,376.725C165.654,377.726 164.969,379.607 163.83,382.382L159.625,392.633C158.547,395.261 157.708,396.991 157.099,397.736C156.476,398.518 155.781,399.054 154.939,399.314C154.149,399.553 153.22,399.604 152.256,399.424C151.255,399.23 149.84,398.779 148.027,398.035L138.442,394.103L150.451,364.831ZM156.01,372.991L148.115,392.235C149.188,392.675 149.946,392.726 150.387,392.388C150.828,392.051 151.462,390.927 152.267,388.966L156.927,377.605C157.474,376.272 157.749,375.391 157.827,374.99C157.904,374.59 157.826,374.255 157.569,373.933C157.348,373.627 156.824,373.325 156.01,372.991ZM194.889,388.345L187.399,386.838L187.865,384.525C188.078,383.466 188.102,382.736 187.961,382.422C187.828,382.069 187.538,381.888 187.107,381.802C186.636,381.707 186.205,381.824 185.891,382.169C185.537,382.506 185.301,383.07 185.135,383.894C184.93,384.913 184.929,385.729 185.101,386.294C185.265,386.899 185.884,387.676 186.989,388.673C190.171,391.517 192.051,393.731 192.724,395.254C193.389,396.816 193.418,399.106 192.802,402.165C192.361,404.361 191.755,405.953 191.04,406.87C190.317,407.826 189.124,408.484 187.484,408.929C185.891,409.343 184.095,409.349 182.134,408.954C179.977,408.52 178.221,407.718 176.857,406.587C175.486,405.495 174.679,404.231 174.461,402.882C174.243,401.532 174.37,399.681 174.836,397.367L175.246,395.328L182.736,396.835L181.979,400.599C181.742,401.776 181.71,402.545 181.843,402.898C182.007,403.298 182.328,403.526 182.877,403.636C183.387,403.739 183.866,403.59 184.18,403.246C184.541,402.869 184.785,402.266 184.951,401.442C185.322,399.599 185.323,398.375 184.924,397.724C184.532,397.033 183.467,395.839 181.727,394.143C179.995,392.407 178.859,391.159 178.35,390.444C177.802,389.722 177.419,388.788 177.2,387.642C176.982,386.497 177.062,385.085 177.393,383.438C177.875,381.046 178.535,379.384 179.345,378.404C180.193,377.432 181.347,376.767 182.798,376.447C184.297,376.095 185.968,376.105 187.89,376.492C189.968,376.91 191.709,377.586 193.057,378.592C194.374,379.551 195.18,380.611 195.446,381.725C195.711,382.839 195.631,384.659 195.142,387.09L194.889,388.345ZM200.214,379.311L213.892,380.38L213.397,386.721L207.933,386.294L207.466,392.276L212.57,392.675L212.102,398.657L206.998,398.257L206.456,405.196L212.437,405.664L211.945,411.965L197.748,410.855L200.214,379.311ZM225.777,380.267L226.42,405.578L231.418,405.452L231.578,411.77L218.342,412.105L217.54,380.476L225.777,380.267ZM233.537,379.948L247.346,378.191L248.149,384.5L242.514,385.217L243.272,391.169L248.311,390.528L249.069,396.479L244.029,397.121L245.706,410.295L237.532,411.335L233.537,379.948ZM258.549,375.749L265.335,406.653L257.287,408.42L250.501,377.517L258.549,375.749ZM281.962,378.541L274.713,380.955L273.968,378.716C273.626,377.691 273.285,377.046 273.007,376.844C272.716,376.603 272.374,376.591 271.957,376.73C271.501,376.882 271.185,377.198 271.084,377.653C270.945,378.121 271.02,378.728 271.286,379.525C271.615,380.512 272.019,381.22 272.449,381.625C272.892,382.068 273.815,382.435 275.27,382.751C279.444,383.638 282.176,384.625 283.516,385.612C284.869,386.637 286.033,388.61 287.019,391.57C287.727,393.696 287.992,395.378 287.827,396.529C287.675,397.718 286.967,398.882 285.765,400.083C284.588,401.234 283.032,402.132 281.135,402.764C279.047,403.459 277.125,403.636 275.379,403.332C273.646,403.066 272.318,402.37 271.458,401.307C270.598,400.244 269.789,398.574 269.043,396.335L268.386,394.362L275.635,391.947L276.848,395.591C277.227,396.729 277.581,397.412 277.872,397.653C278.214,397.918 278.606,397.956 279.137,397.779C279.63,397.615 279.972,397.248 280.073,396.793C280.2,396.287 280.112,395.642 279.846,394.845C279.252,393.061 278.645,391.999 277.975,391.632C277.292,391.227 275.774,390.721 273.421,390.113C271.056,389.467 269.45,388.948 268.653,388.581C267.818,388.227 267.021,387.607 266.263,386.721C265.504,385.836 264.872,384.571 264.341,382.977C263.57,380.662 263.317,378.891 263.532,377.639C263.786,376.374 264.456,375.223 265.557,374.224C266.683,373.174 268.138,372.352 269.997,371.733C272.009,371.063 273.855,370.785 275.525,370.988C277.144,371.165 278.371,371.684 279.155,372.519C279.939,373.354 280.774,374.973 281.557,377.326L281.962,378.541ZM298.791,359.997L312.694,388.418L305.293,392.039L299.457,380.11L297.265,381.182L303.101,393.111L295.699,396.732L281.795,368.311L289.197,364.69L294.172,374.858L296.363,373.786L291.389,363.618L298.791,359.997ZM328.977,350.672L322.871,355.265L321.453,353.379C320.804,352.515 320.275,352.012 319.947,351.909C319.595,351.773 319.267,351.87 318.915,352.134C318.532,352.423 318.332,352.823 318.381,353.287C318.397,353.775 318.662,354.326 319.167,354.998C319.792,355.829 320.401,356.372 320.937,356.619C321.498,356.898 322.49,356.953 323.97,356.791C328.209,356.305 331.113,356.373 332.698,356.883C334.306,357.425 336.036,358.927 337.912,361.42C339.258,363.21 340.044,364.721 340.254,365.865C340.488,367.04 340.185,368.369 339.428,369.89C338.678,371.355 337.487,372.701 335.889,373.903C334.131,375.225 332.364,376.004 330.612,376.27C328.885,376.568 327.404,376.33 326.251,375.596C325.098,374.862 323.8,373.535 322.382,371.649L321.132,369.987L327.237,365.395L329.546,368.463C330.267,369.422 330.82,369.958 331.172,370.093C331.58,370.237 331.964,370.148 332.411,369.812C332.827,369.499 333.034,369.043 332.986,368.579C332.945,368.059 332.656,367.475 332.151,366.804C331.021,365.301 330.108,364.487 329.356,364.352C328.58,364.185 326.98,364.187 324.556,364.358C322.108,364.498 320.42,364.516 319.548,364.421C318.644,364.35 317.691,364.016 316.691,363.417C315.69,362.818 314.688,361.82 313.679,360.477C312.212,358.527 311.41,356.928 311.216,355.673C311.054,354.393 311.324,353.088 312.051,351.791C312.785,350.438 313.903,349.197 315.47,348.019C317.164,346.744 318.827,345.894 320.474,345.556C322.066,345.21 323.394,345.312 324.403,345.854C325.411,346.397 326.717,347.667 328.208,349.649L328.977,350.672ZM352.018,341.021C354.259,343.305 355.771,344.96 356.581,346.015C357.391,347.069 357.917,348.234 358.13,349.594C358.315,350.925 358.161,352.253 357.61,353.634C357.06,354.958 356.17,356.279 354.885,357.539C353.686,358.715 352.405,359.58 351.041,360.132C349.678,360.685 348.319,360.841 346.992,360.631C345.608,360.419 344.425,359.899 343.386,359.068C342.376,358.266 340.722,356.695 338.425,354.353L334.644,350.498C332.431,348.242 330.892,346.558 330.082,345.504C329.272,344.449 328.746,343.285 328.561,341.953C328.348,340.594 328.502,339.266 329.081,337.914C329.603,336.561 330.521,335.269 331.806,334.008C333.005,332.832 334.286,331.967 335.649,331.415C336.984,330.834 338.343,330.677 339.699,330.917C341.083,331.128 342.266,331.649 343.276,332.45C344.315,333.281 345.968,334.852 348.237,337.166L352.018,341.021ZM338.881,339.394C337.845,338.338 337.116,337.708 336.721,337.535C336.327,337.361 335.959,337.443 335.587,337.807C335.273,338.115 335.157,338.453 335.21,338.85C335.291,339.218 335.905,340.016 337.054,341.187L347.389,351.724C348.678,353.038 349.519,353.782 349.913,354.012C350.307,354.185 350.732,354.104 351.103,353.74C351.503,353.348 351.592,352.925 351.342,352.442C351.12,351.987 350.337,351.074 349.049,349.76L338.881,339.394ZM341.099,325.297L349.778,314.415L354.751,318.38L351.209,322.821L355.9,326.562L359.067,322.591L363.758,326.332L360.59,330.303L370.973,338.584L365.835,345.026L341.099,325.297ZM360.217,298.339L365.582,301.754L362.962,305.871L384.287,319.447L379.862,326.398L358.537,312.822L355.937,316.905L350.572,313.489L360.217,298.339ZM373.724,268.616L401.315,284.523L397.232,293.957C392.425,292.879 387.026,291.458 381.05,289.656C383.345,290.998 388.109,293.888 395.342,298.326L391.291,307.687L360.792,298.497L363.969,291.155L374.435,294.769L384.533,298.224C379.631,295.754 373.288,292.181 365.542,287.521L368.942,279.665C369.87,279.936 373.139,281.046 378.872,283.004L390.287,286.942C383.414,283.488 376.851,279.819 370.562,275.921L373.724,268.616ZM376.781,254.323L408.604,257.594L406.512,265.77L400.91,264.75L400.176,267.617L405.56,269.49L403.448,277.745L373.836,265.832L376.781,254.323ZM395.425,263.594C391.838,263.089 387.466,262.425 382.252,261.503C387.895,263.814 392.068,265.419 394.731,266.307L395.425,263.594ZM378.103,248.493L378.802,242.694C379.266,238.842 379.736,236.28 380.221,234.928C380.661,233.612 381.55,232.591 382.886,231.865C384.218,231.18 386.216,230.977 388.877,231.298C391.339,231.594 392.929,232.108 393.691,232.804C394.454,233.5 394.826,234.754 394.77,236.56C395.359,235.02 396.048,233.975 396.791,233.5C397.533,233.025 398.167,232.779 398.781,232.692C399.352,232.64 400.91,232.747 403.452,233.053L411.712,234.049L410.798,241.634L400.354,240.375C398.686,240.175 397.639,240.169 397.208,240.399C396.778,240.63 396.498,241.281 396.364,242.393L410.502,244.096L409.516,252.277L378.103,248.493ZM384.49,240.962L391.479,241.804C391.589,240.891 391.507,240.236 391.312,239.85C391.116,239.464 390.306,239.165 388.916,238.998L387.209,238.792C386.216,238.672 385.522,238.75 385.161,239.069C384.84,239.393 384.6,240.049 384.49,240.962ZM380.371,226.869L380.35,213.149L386.71,213.139L386.718,218.619L392.718,218.61L392.71,213.49L398.71,213.48L398.718,218.6L405.678,218.589L405.669,212.589L411.989,212.579L412.011,226.819L380.371,226.869Z"}),x.createElement("path",{d:"M65.814,139.849C68.729,141.171 70.736,142.169 71.872,142.859C73.008,143.55 73.919,144.446 74.609,145.637C75.262,146.812 75.598,148.106 75.583,149.592C75.548,151.026 75.195,152.579 74.452,154.218C73.759,155.748 72.876,157.017 71.804,158.024C70.733,159.032 69.522,159.669 68.208,159.951C66.841,160.254 65.55,160.196 64.281,159.796C63.05,159.414 60.94,158.545 57.953,157.191L53.034,154.961C50.156,153.656 48.113,152.642 46.977,151.951C45.841,151.261 44.929,150.364 44.276,149.19C43.586,147.999 43.251,146.705 43.302,145.235C43.301,143.785 43.69,142.248 44.433,140.609C45.127,139.079 46.009,137.81 47.081,136.803C48.116,135.779 49.327,135.142 50.677,134.876C52.044,134.573 53.335,134.631 54.567,135.014C55.836,135.414 57.945,136.282 60.896,137.62L65.814,139.849ZM52.976,143.077C51.628,142.466 50.721,142.142 50.291,142.123C49.86,142.103 49.546,142.312 49.331,142.786C49.15,143.186 49.163,143.544 49.356,143.895C49.564,144.209 50.426,144.731 51.919,145.408L65.362,151.503C67.038,152.262 68.091,152.652 68.542,152.724C68.972,152.744 69.339,152.515 69.554,152.041C69.785,151.531 69.715,151.104 69.308,150.744C68.937,150.4 67.877,149.832 66.201,149.072L52.976,143.077ZM52.319,126.004L56.705,118.981C57.892,117.081 58.972,115.728 59.913,114.901C60.82,114.053 61.749,113.548 62.643,113.399C63.504,113.229 64.394,113.314 65.336,113.619C66.256,113.958 67.541,114.619 69.237,115.678L71.578,117.14C73.275,118.2 74.424,119.153 74.971,120.014C75.54,120.84 75.748,121.866 75.562,123.07C75.376,124.275 74.85,125.644 73.897,127.171L72.732,129.037L83.52,135.775L79.156,142.764L52.319,126.004ZM61.298,121.897L68.117,126.156L68.435,125.647C68.838,125.002 68.978,124.476 68.787,124.027C68.63,123.599 68.07,123.06 67.086,122.446L64.88,121.069C63.964,120.497 63.269,120.251 62.807,120.387C62.366,120.489 61.849,121.015 61.298,121.897ZM65.491,105.806L74.058,95.089L79.026,99.06L75.604,103.341L80.291,107.087L83.488,103.088L88.174,106.834L84.977,110.834L90.414,115.179L94.16,110.493L99.097,114.439L90.205,125.562L65.491,105.806ZM91.595,76.985L113.834,99.49L108.713,104.551L95.575,97.345L105.668,107.559L100.775,112.395L78.535,89.89L83.429,85.054L96.71,91.949L86.701,81.82L91.595,76.985ZM125.69,63.611L119.349,67.872L118.033,65.913C117.43,65.017 116.929,64.486 116.607,64.365C116.262,64.211 115.93,64.29 115.565,64.536C115.166,64.803 114.946,65.192 114.97,65.658C114.961,66.146 115.196,66.711 115.664,67.409C116.244,68.272 116.823,68.846 117.346,69.122C117.89,69.431 118.878,69.538 120.364,69.455C124.624,69.195 127.52,69.417 129.075,70.011C130.653,70.637 132.301,72.229 134.041,74.818C135.29,76.677 135.995,78.228 136.144,79.381C136.314,80.568 135.942,81.878 135.104,83.357C134.277,84.78 133.017,86.06 131.357,87.176C129.531,88.403 127.726,89.086 125.962,89.259C124.221,89.465 122.756,89.149 121.643,88.354C120.531,87.56 119.306,86.166 117.989,84.207L116.829,82.481L123.17,78.22L125.312,81.407C125.981,82.403 126.505,82.967 126.849,83.121C127.249,83.286 127.637,83.218 128.102,82.905C128.534,82.615 128.765,82.171 128.741,81.705C128.728,81.184 128.471,80.585 128.002,79.888C126.954,78.328 126.085,77.466 125.341,77.291C124.575,77.083 122.977,77 120.548,77.042C118.096,77.051 116.409,76.98 115.544,76.839C114.645,76.72 113.711,76.335 112.744,75.684C111.776,75.033 110.829,73.983 109.892,72.589C108.531,70.563 107.815,68.924 107.688,67.66C107.595,66.373 107.934,65.085 108.728,63.829C109.533,62.516 110.716,61.336 112.343,60.243C114.102,59.06 115.808,58.3 117.471,58.05C119.079,57.788 120.4,57.961 121.378,58.557C122.357,59.152 123.593,60.49 124.976,62.548L125.69,63.611ZM151.705,60.191C153.126,63.059 154.048,65.102 154.491,66.356C154.934,67.609 155.072,68.88 154.852,70.239C154.615,71.562 154.056,72.776 153.103,73.917C152.169,75.005 150.913,75.984 149.3,76.783C147.795,77.529 146.308,77.953 144.841,78.055C143.374,78.156 142.033,77.883 140.837,77.27C139.587,76.64 138.624,75.777 137.895,74.666C137.184,73.59 136.1,71.582 134.644,68.643L132.247,63.804C130.844,60.972 129.904,58.894 129.461,57.64C129.019,56.386 128.881,55.115 129.118,53.793C129.338,52.434 129.897,51.219 130.867,50.114C131.783,48.99 133.057,48.047 134.67,47.248C136.175,46.502 137.662,46.079 139.129,45.977C140.579,45.839 141.919,46.112 143.133,46.761C144.383,47.392 145.346,48.254 146.057,49.33C146.787,50.442 147.87,52.449 149.309,55.353L151.705,60.191ZM139.723,54.566C139.066,53.239 138.568,52.415 138.247,52.127C137.927,51.84 137.551,51.803 137.085,52.033C136.691,52.229 136.475,52.514 136.402,52.907C136.365,53.283 136.701,54.232 137.429,55.702L143.981,68.928C144.797,70.577 145.366,71.545 145.669,71.886C145.99,72.173 146.419,72.229 146.885,71.998C147.387,71.749 147.603,71.375 147.516,70.838C147.446,70.336 146.985,69.226 146.168,67.577L139.723,54.566ZM167.692,34.963L174.441,55.018C175.206,57.293 175.666,58.911 175.821,59.871C176.013,60.82 175.878,61.92 175.489,63.149C175.088,64.339 174.357,65.429 173.348,66.317C172.3,67.218 170.987,67.956 169.395,68.491C167.613,69.091 165.919,69.324 164.35,69.176C162.794,69.067 161.502,68.615 160.501,67.897C159.499,67.179 158.751,66.334 158.28,65.311C157.809,64.287 156.98,62.076 155.845,58.702L149.874,40.96L157.683,38.332L165.249,60.813C165.696,62.14 166.052,62.948 166.281,63.251C166.56,63.579 166.927,63.667 167.344,63.526C167.837,63.36 168.076,63.069 168.088,62.601C168.099,62.133 167.856,61.159 167.358,59.681L159.92,37.579L167.692,34.963ZM174.727,33.131L180.462,32.033C184.273,31.303 186.857,30.972 188.292,31.023C189.681,31.042 190.923,31.578 192.021,32.631C193.079,33.691 193.88,35.533 194.383,38.165C194.85,40.601 194.844,42.272 194.412,43.21C193.981,44.147 192.9,44.884 191.162,45.379C192.809,45.471 194.014,45.811 194.692,46.373C195.37,46.936 195.797,47.465 196.067,48.024C196.29,48.552 196.662,50.069 197.143,52.583L198.707,60.755L191.204,62.191L189.226,51.859C188.91,50.209 188.597,49.21 188.246,48.87C187.896,48.53 187.191,48.461 186.091,48.671L188.768,62.658L180.675,64.207L174.727,33.131ZM183.842,36.925L185.166,43.839C186.069,43.666 186.668,43.389 186.976,43.085C187.285,42.782 187.323,41.919 187.06,40.544L186.737,38.855C186.549,37.873 186.264,37.235 185.85,36.988C185.444,36.781 184.746,36.752 183.842,36.925ZM219.815,41.52L211.587,41.97L211.288,36.498C211.198,34.861 211.064,33.867 210.884,33.516C210.663,33.128 210.292,32.947 209.693,32.98C209.014,33.017 208.588,33.281 208.454,33.769C208.281,34.259 208.258,35.302 208.345,36.9L209.148,51.558C209.231,53.076 209.367,54.11 209.591,54.538C209.777,55.009 210.19,55.226 210.829,55.191C211.468,55.156 211.854,54.895 211.987,54.407C212.163,53.957 212.182,52.834 212.088,51.116L211.871,47.162L220.099,46.712L220.165,47.91C220.344,51.185 220.231,53.515 219.866,54.897C219.461,56.281 218.528,57.534 216.987,58.66C215.447,59.786 213.558,60.41 211.241,60.537C208.845,60.668 206.824,60.338 205.218,59.545C203.612,58.751 202.508,57.61 201.904,56.08C201.342,54.589 200.935,52.288 200.765,49.172L200.26,39.946C200.135,37.67 200.123,35.988 200.22,34.821C200.318,33.694 200.736,32.549 201.438,31.469C202.138,30.349 203.173,29.491 204.498,28.818C205.861,28.102 207.403,27.738 209.2,27.639C211.597,27.508 213.62,27.878 215.268,28.709C216.876,29.543 217.98,30.684 218.536,32.056C219.132,33.425 219.489,35.569 219.651,38.524L219.815,41.52ZM226.051,27.944L239.739,28.872L239.309,35.218L233.841,34.847L233.435,40.833L238.544,41.179L238.137,47.166L233.029,46.819L232.558,53.763L238.544,54.169L238.117,60.475L223.909,59.511L226.051,27.944ZM272.132,44.93L264.713,43.105L265.276,40.813C265.534,39.765 265.59,39.037 265.462,38.717C265.344,38.359 265.062,38.166 264.635,38.061C264.169,37.946 263.733,38.045 263.404,38.376C263.037,38.697 262.777,39.251 262.576,40.067C262.328,41.077 262.292,41.892 262.44,42.464C262.578,43.074 263.163,43.877 264.225,44.921C267.282,47.898 269.067,50.19 269.674,51.74C270.272,53.329 270.203,55.618 269.458,58.648C268.923,60.823 268.25,62.388 267.497,63.274C266.734,64.198 265.514,64.804 263.856,65.179C262.247,65.525 260.452,65.454 258.51,64.977C256.373,64.451 254.653,63.575 253.339,62.387C252.015,61.237 251.263,59.94 251.102,58.583C250.942,57.225 251.148,55.381 251.712,53.089L252.209,51.069L259.628,52.894L258.711,56.623C258.424,57.788 258.359,58.555 258.477,58.913C258.624,59.32 258.935,59.562 259.479,59.695C259.984,59.82 260.469,59.692 260.797,59.36C261.174,59 261.444,58.407 261.644,57.592C262.093,55.766 262.147,54.543 261.775,53.875C261.414,53.169 260.4,51.931 258.734,50.162C257.078,48.354 255.996,47.058 255.518,46.322C255.001,45.577 254.658,44.628 254.489,43.474C254.319,42.32 254.459,40.913 254.861,39.282C255.443,36.912 256.174,35.28 257.025,34.335C257.913,33.401 259.095,32.785 260.559,32.527C262.071,32.24 263.74,32.321 265.643,32.789C267.702,33.295 269.412,34.045 270.716,35.108C271.991,36.121 272.752,37.215 272.97,38.339C273.187,39.464 273.029,41.279 272.437,43.687L272.132,44.93ZM292.077,61.866C290.909,64.845 290.018,66.902 289.387,68.072C288.756,69.243 287.909,70.199 286.755,70.95C285.616,71.664 284.341,72.066 282.856,72.129C281.423,72.168 279.854,71.897 278.178,71.24C276.614,70.627 275.301,69.812 274.239,68.794C273.177,67.776 272.478,66.6 272.127,65.303C271.754,63.953 271.745,62.661 272.078,61.374C272.396,60.123 273.153,57.972 274.35,54.918L276.321,49.89C277.474,46.948 278.381,44.854 279.011,43.684C279.642,42.513 280.49,41.557 281.629,40.843C282.782,40.092 284.057,39.69 285.527,39.665C286.975,39.588 288.53,39.896 290.206,40.553C291.77,41.166 293.083,41.982 294.145,42.999C295.221,43.98 295.92,45.156 296.256,46.491C296.63,47.84 296.639,49.132 296.321,50.383C295.988,51.67 295.23,53.822 294.048,56.838L292.077,61.866ZM288.186,49.213C288.726,47.836 289.002,46.913 288.999,46.482C288.996,46.051 288.771,45.748 288.287,45.558C287.877,45.398 287.521,45.43 287.181,45.64C286.878,45.865 286.401,46.752 285.803,48.279L280.416,62.021C279.745,63.734 279.411,64.806 279.362,65.26C279.365,65.691 279.612,66.045 280.097,66.235C280.618,66.44 281.041,66.347 281.379,65.922C281.704,65.533 282.216,64.445 282.887,62.732L288.186,49.213ZM305.248,47.78L317.483,54.419L314.45,60.009L309.458,57.3L306.596,62.574L311.062,64.997L308.2,70.27L303.735,67.848L297.402,79.521L290.16,75.591L305.248,47.78ZM336.214,66.91L332.603,72.146L328.586,69.376L314.235,90.188L307.451,85.51L321.802,64.698L317.818,61.951L321.428,56.715L336.214,66.91ZM364.183,92.203L339.722,112.6L332.279,105.509C334.952,101.37 338.151,96.794 341.907,91.809C339.854,93.499 335.496,96.971 328.833,102.225L321.448,95.189L340.609,69.743L346.401,75.262L339.394,83.834L332.663,92.117C336.674,88.37 342.219,83.653 349.268,77.993L355.466,83.898C354.89,84.676 352.72,87.36 348.901,92.064L341.262,101.415C346.878,96.158 352.588,91.267 358.42,86.712L364.183,92.203ZM375.916,107.812L353.681,130.812L348.545,124.115L352.809,120.341L351.008,117.992L346.209,121.067L341.024,114.307L368.687,98.385L375.916,107.812ZM357.107,116.742C359.72,114.234 362.944,111.208 366.89,107.677C361.586,110.686 357.747,112.975 355.403,114.521L357.107,116.742ZM381.75,116.129L384.673,121.184C386.616,124.543 387.779,126.874 388.203,128.246C388.641,129.564 388.544,130.914 387.911,132.296C387.258,133.644 385.782,135.006 383.462,136.348C381.315,137.589 379.735,138.133 378.708,138.035C377.68,137.936 376.629,137.157 375.589,135.679C376.044,137.264 376.12,138.514 375.812,139.34C375.504,140.165 375.144,140.742 374.705,141.181C374.28,141.565 372.97,142.416 370.754,143.697L363.551,147.862L359.727,141.249L368.834,135.982C370.288,135.141 371.128,134.516 371.334,134.074C371.54,133.631 371.373,132.942 370.812,131.973L358.485,139.102L354.36,131.969L381.75,116.129ZM381.166,125.985L375.071,129.51C375.532,130.306 375.991,130.78 376.379,130.972C376.767,131.163 377.594,130.916 378.806,130.215L380.295,129.354C381.161,128.853 381.669,128.374 381.766,127.902C381.828,127.451 381.626,126.782 381.166,125.985ZM394.047,138.523L399.41,151.152L393.555,153.638L391.414,148.594L385.891,150.939L387.892,155.651L382.369,157.996L380.368,153.284L373.962,156.004L376.307,161.527L370.49,163.997L364.924,150.89L394.047,138.523Z"}),x.createElement("path",{d:"M184.955,228.867C188.721,238.945 188.513,248.571 184.331,257.744C180.149,266.917 173.328,273.271 163.868,276.806C162.694,277.245 161.783,276.599 161.136,274.868C160.466,273.075 160.618,271.785 161.592,270.998C165.55,268.391 167.432,264.376 167.237,258.953C167.118,255.615 165.001,248.444 160.888,237.438C158.162,230.143 155.958,225.188 154.277,222.575C150.745,216.708 146.627,213.702 141.923,213.557C140.501,214.089 139.223,212.84 138.091,209.81C137.167,207.337 137.447,205.823 138.931,205.269C147.834,201.941 156.818,202.6 165.882,207.246C174.969,211.953 181.327,219.16 184.955,228.867ZM154.841,276.691C155.65,278.855 155.467,280.157 154.292,280.596C144.462,284.27 134.975,283.869 125.834,279.394C116.823,275.08 110.469,267.978 106.772,258.085C103.145,248.378 103.217,238.768 106.99,229.254C110.725,219.826 117.074,213.437 126.039,210.086C127.029,209.717 127.959,210.038 128.831,211.051C129.61,211.817 130.208,212.756 130.624,213.869C131.017,214.92 131.112,215.836 130.911,216.616C130.678,217.125 129.963,217.851 128.764,218.792C127.404,219.864 126.471,220.952 125.968,222.057C125.054,223.948 124.673,226.416 124.824,229.46C125.129,232.728 126.46,237.515 128.817,243.822L132.768,254.395C136.096,263.298 139.268,269.053 142.286,271.66C145.11,274.127 148.362,275.097 152.04,274.568C152.395,274.576 152.932,274.692 153.65,274.917C154.144,275.296 154.541,275.888 154.841,276.691ZM242.304,166.531L250.75,188.847L244.327,191.459C243.207,191.102 241.934,189.957 240.507,188.025C238.841,185.829 237.838,184.653 237.498,184.498C232.627,181.457 228.398,180.606 224.812,181.946C223.452,182.455 222.252,181.318 221.212,178.535C220.38,176.31 220.332,174.954 221.066,174.468L222.364,173.983C223.539,173.544 225.332,173.437 227.742,173.664C230.152,173.891 231.851,173.82 232.84,173.45C234.51,172.826 235.717,171.247 236.461,168.714L242.304,166.531ZM263.863,212.907C266.451,219.832 265.806,226.591 261.928,233.184C258.136,239.252 252.716,243.602 245.667,246.237C244.493,246.676 243.374,245.473 242.311,242.629C241.294,239.908 241.254,238.197 242.189,237.495C242.638,237.187 243.283,236.84 244.126,236.455C246.622,235.028 248.416,233.512 249.508,231.907C250.599,230.301 250.832,228.663 250.208,226.994C248.984,223.717 246.104,222.045 241.569,221.978C240.125,221.884 235.883,222.412 228.844,223.563C221.782,224.652 215.452,224.023 209.854,221.676C203.537,219.104 199.281,214.881 197.086,209.008C194.845,203.01 194.983,196.969 197.501,190.885C200.103,184.839 204.403,180.695 210.401,178.454C211.204,178.153 212.042,178.51 212.914,179.523C213.608,180.25 214.129,181.077 214.476,182.004C215.284,184.168 215.171,185.655 214.134,186.465C212.318,187.637 210.964,189.2 210.073,191.154C209.02,193.238 208.864,195.27 209.603,197.248C209.973,198.238 210.694,199.131 211.767,199.928C215.673,202.837 220.643,203.41 226.679,201.648C228.703,201.032 230.917,200.451 233.321,199.906C235.724,199.36 238.366,198.795 241.249,198.211C245.088,198.115 248.954,199.031 252.845,200.959C258.25,203.731 261.922,207.713 263.863,212.907ZM214.54,257.975L205.898,235.415L212.483,232.954C213.603,233.311 214.888,234.486 216.338,236.481C217.857,238.661 218.829,239.848 219.254,240.042C224.063,243.107 228.323,243.946 232.032,242.559C233.393,242.051 234.593,243.188 235.632,245.97C236.464,248.196 236.471,249.533 235.651,249.98C235.489,250.111 235.098,250.292 234.48,250.523C233.244,250.985 231.42,251.103 229.01,250.876C226.6,250.649 224.931,250.709 224.004,251.056C222.335,251.68 221.128,253.258 220.383,255.791L214.54,257.975ZM316.313,138.873L324.758,161.189L318.336,163.801C317.216,163.444 315.942,162.299 314.515,160.366C312.849,158.171 311.846,156.995 311.507,156.84C306.635,153.799 302.407,152.948 298.821,154.288C297.46,154.797 296.26,153.66 295.221,150.877C294.389,148.652 294.34,147.296 295.075,146.81L296.373,146.325C297.548,145.886 299.34,145.779 301.75,146.006C304.16,146.233 305.86,146.161 306.849,145.792C308.518,145.168 309.725,143.589 310.47,141.056L316.313,138.873ZM337.872,185.249C340.46,192.174 339.815,198.933 335.937,205.526C332.145,211.593 326.724,215.944 319.676,218.579C318.501,219.018 317.382,217.815 316.32,214.971C315.303,212.25 315.262,210.539 316.198,209.837C316.646,209.529 317.292,209.182 318.134,208.797C320.631,207.37 322.425,205.854 323.516,204.249C324.607,202.643 324.841,201.005 324.217,199.336C322.992,196.059 320.113,194.387 315.578,194.32C314.133,194.226 309.892,194.754 302.853,195.905C295.791,196.994 289.46,196.365 283.862,194.018C277.546,191.446 273.29,187.223 271.095,181.35C268.854,175.352 268.992,169.311 271.509,163.227C274.112,157.181 278.412,153.037 284.409,150.796C285.213,150.495 286.051,150.852 286.923,151.865C287.617,152.592 288.138,153.419 288.484,154.346C289.293,156.51 289.179,157.997 288.143,158.807C286.326,159.979 284.973,161.542 284.082,163.496C283.029,165.58 282.872,167.612 283.612,169.59C283.981,170.58 284.703,171.473 285.776,172.27C289.681,175.179 294.652,175.752 300.687,173.99C302.712,173.374 304.926,172.793 307.329,172.248C309.732,171.702 312.375,171.137 315.257,170.553C319.097,170.457 322.962,171.373 326.854,173.301C332.258,176.073 335.931,180.055 337.872,185.249ZM288.549,230.317L279.907,207.757L286.491,205.296C287.611,205.653 288.896,206.828 290.346,208.823C291.866,211.003 292.838,212.19 293.262,212.384C298.072,215.449 302.331,216.288 306.041,214.901C307.401,214.393 308.601,215.53 309.641,218.312C310.473,220.538 310.479,221.875 309.66,222.322C309.497,222.453 309.107,222.634 308.489,222.865C307.252,223.327 305.429,223.445 303.019,223.218C300.609,222.991 298.94,223.051 298.013,223.398C296.343,224.022 295.136,225.6 294.392,228.133L288.549,230.317Z"}),x.createElement("path",{d:"M394.606,195.569C388.976,196.699 383.488,193.046 382.359,187.416C381.229,181.786 384.882,176.298 390.512,175.168C396.142,174.038 401.63,177.692 402.76,183.321C403.89,188.951 400.236,194.439 394.606,195.569Z"}),x.createElement("path",{d:"M49.46,175.274C55.091,176.4 58.748,181.886 57.621,187.517C56.495,193.147 51.009,196.804 45.378,195.678C39.748,194.551 36.091,189.066 37.217,183.435C38.344,177.804 43.83,174.148 49.46,175.274Z"})),EM=()=>o.jsx("div",{className:"flow",children:o.jsxs("div",{className:"mobile block-center pad-t-8 flow",children:[o.jsx(TM,{className:"brui-logo"}),o.jsx("h1",{className:"mar-t-8",children:"React UI Components"}),o.jsx("h2",{className:"mar-t-none large",children:"For Badger Fans"}),o.jsxs("p",{className:"larger",children:["This is my personal collection of React UI components built around the styles provided by"," ",o.jsx("a",{href:"https://abw.github.io/badger-css",children:"Badger CSS"})]}),o.jsx("div",{className:"text-center",children:o.jsx(kM,{className:"width-10rem"})}),o.jsx("p",{children:"This is Open Source Software and you're welcome to use it. But be warned that it is also Opiniated and Selfish Software."}),o.jsx("p",{children:"I wrote it for me to help my get my job done.  It provides a solid foundation of React components that allow me to get a new site up and running quickly."}),o.jsx("p",{children:"I don't have the time or inclination to help other people get their jobs done (unless they're my clients, colleagues, family or close friends).  So please be aware that this is effectively unsupported software and you're on your own.  If you're not comfortable with that then you should almost certainly be using one of the many other fine UI toolkits that are available."}),o.jsx("p",{children:"Also note that this collection is supposed to be a starting point, not a final destination. You can use the components and styles provided, but at some point you will probably want or need to dig in and start adding your own code, or modifying the builtin components."}),o.jsx("p",{children:"Everything is modular and themeable, so that's generally quite easy to achieve.  But it requires a reasonable knowledge of React, CSS and SASS.  The documentation is provided as a reference for me (and my colleagues) to use, and it assumes a fairly high level of proficiency in these areas."}),o.jsx("p",{children:"Or to put it another way, if you're expecting someone to hold your hand explaining how to get this up and running, then you've probably come to the wrong place."})]})}),LM=Object.freeze(Object.defineProperty({__proto__:null,default:EM},Symbol.toStringTag,{value:"Module"}));/**
 * @remix-run/router v1.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $e(){return $e=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$e.apply(this,arguments)}var Be;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Be||(Be={}));const Uf="popstate";function NM(e){e===void 0&&(e={});function t(r,a){let{pathname:s,search:l,hash:i}=r.location;return ns("",{pathname:s,search:l,hash:i},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(r,a){return typeof a=="string"?a:Wr(a)}return OM(t,n,null,e)}function re(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Vr(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function RM(){return Math.random().toString(36).substr(2,8)}function Hf(e,t){return{usr:e.state,key:e.key,idx:t}}function ns(e,t,n,r){return n===void 0&&(n=null),$e({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Bn(t):t,{state:n,key:t&&t.key||r||RM()})}function Wr(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Bn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function OM(e,t,n,r){r===void 0&&(r={});let{window:a=document.defaultView,v5Compat:s=!1}=r,l=a.history,i=Be.Pop,c=null,u=d();u==null&&(u=0,l.replaceState($e({},l.state,{idx:u}),""));function d(){return(l.state||{idx:null}).idx}function f(){i=Be.Pop;let _=d(),v=_==null?null:_-u;u=_,c&&c({action:i,location:j.location,delta:v})}function g(_,v){i=Be.Push;let p=ns(j.location,_,v);n&&n(p,_),u=d()+1;let m=Hf(p,u),h=j.createHref(p);try{l.pushState(m,"",h)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;a.location.assign(h)}s&&c&&c({action:i,location:j.location,delta:1})}function y(_,v){i=Be.Replace;let p=ns(j.location,_,v);n&&n(p,_),u=d();let m=Hf(p,u),h=j.createHref(p);l.replaceState(m,"",h),s&&c&&c({action:i,location:j.location,delta:0})}function b(_){let v=a.location.origin!=="null"?a.location.origin:a.location.href,p=typeof _=="string"?_:Wr(_);return re(v,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,v)}let j={get action(){return i},get location(){return e(a,l)},listen(_){if(c)throw new Error("A history only accepts one active listener");return a.addEventListener(Uf,f),c=_,()=>{a.removeEventListener(Uf,f),c=null}},createHref(_){return t(a,_)},createURL:b,encodeLocation(_){let v=b(_);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:g,replace:y,go(_){return l.go(_)}};return j}var ze;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ze||(ze={}));const DM=new Set(["lazy","caseSensitive","path","id","index","children"]);function MM(e){return e.index===!0}function Iu(e,t,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((a,s)=>{let l=[...n,s],i=typeof a.id=="string"?a.id:l.join("-");if(re(a.index!==!0||!a.children,"Cannot specify children on an index route"),re(!r[i],'Found a route id collision on id "'+i+`".  Route id's must be globally unique within Data Router usages`),MM(a)){let c=$e({},a,t(a),{id:i});return r[i]=c,c}else{let c=$e({},a,t(a),{id:i,children:void 0});return r[i]=c,a.children&&(c.children=Iu(a.children,t,l,r)),c}})}function xo(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Bn(t):t,a=gr(r.pathname||"/",n);if(a==null)return null;let s=Lx(e);PM(s);let l=null;for(let i=0;l==null&&i<s.length;++i)l=WM(s[i],KM(a));return l}function AM(e,t){let{route:n,pathname:r,params:a}=e;return{id:n.id,pathname:r,params:a,data:t[n.id],handle:n.handle}}function Lx(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let a=(s,l,i)=>{let c={relativePath:i===void 0?s.path||"":i,caseSensitive:s.caseSensitive===!0,childrenIndex:l,route:s};c.relativePath.startsWith("/")&&(re(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=kn([r,c.relativePath]),d=n.concat(c);s.children&&s.children.length>0&&(re(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Lx(s.children,t,d,u)),!(s.path==null&&!s.index)&&t.push({path:u,score:HM(u,s.index),routesMeta:d})};return e.forEach((s,l)=>{var i;if(s.path===""||!((i=s.path)!=null&&i.includes("?")))a(s,l);else for(let c of Nx(s.path))a(s,l,c)}),t}function Nx(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,a=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return a?[s,""]:[s];let l=Nx(r.join("/")),i=[];return i.push(...l.map(c=>c===""?s:[s,c].join("/"))),a&&i.push(...l),i.map(c=>e.startsWith("/")&&c===""?"/":c)}function PM(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:VM(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const $M=/^:\w+$/,IM=3,BM=2,zM=1,FM=10,UM=-2,Vf=e=>e==="*";function HM(e,t){let n=e.split("/"),r=n.length;return n.some(Vf)&&(r+=UM),t&&(r+=BM),n.filter(a=>!Vf(a)).reduce((a,s)=>a+($M.test(s)?IM:s===""?zM:FM),r)}function VM(e,t){return e.length===t.length&&e.slice(0,-1).every((r,a)=>r===t[a])?e[e.length-1]-t[t.length-1]:0}function WM(e,t){let{routesMeta:n}=e,r={},a="/",s=[];for(let l=0;l<n.length;++l){let i=n[l],c=l===n.length-1,u=a==="/"?t:t.slice(a.length)||"/",d=Bu({path:i.relativePath,caseSensitive:i.caseSensitive,end:c},u);if(!d)return null;Object.assign(r,d.params);let f=i.route;s.push({params:r,pathname:kn([a,d.pathname]),pathnameBase:QM(kn([a,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(a=kn([a,d.pathnameBase]))}return s}function Bu(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=ZM(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let s=a[0],l=s.replace(/(.)\/+$/,"$1"),i=a.slice(1);return{params:r.reduce((u,d,f)=>{let{paramName:g,isOptional:y}=d;if(g==="*"){let j=i[f]||"";l=s.slice(0,s.length-j.length).replace(/(.)\/+$/,"$1")}const b=i[f];return y&&!b?u[g]=void 0:u[g]=GM(b||"",g),u},{}),pathname:s,pathnameBase:l,pattern:e}}function ZM(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Vr(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(l,i,c)=>(r.push({paramName:i,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),r]}function KM(e){try{return decodeURI(e)}catch(t){return Vr(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function GM(e,t){try{return decodeURIComponent(e)}catch(n){return Vr(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function gr(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function YM(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:a=""}=typeof e=="string"?Bn(e):e;return{pathname:n?n.startsWith("/")?n:XM(n,t):t,search:qM(r),hash:JM(a)}}function XM(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function Tc(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Pi(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Lp(e,t,n,r){r===void 0&&(r=!1);let a;typeof e=="string"?a=Bn(e):(a=$e({},e),re(!a.pathname||!a.pathname.includes("?"),Tc("?","pathname","search",a)),re(!a.pathname||!a.pathname.includes("#"),Tc("#","pathname","hash",a)),re(!a.search||!a.search.includes("#"),Tc("#","search","hash",a)));let s=e===""||a.pathname==="",l=s?"/":a.pathname,i;if(r||l==null)i=n;else{let f=t.length-1;if(l.startsWith("..")){let g=l.split("/");for(;g[0]==="..";)g.shift(),f-=1;a.pathname=g.join("/")}i=f>=0?t[f]:"/"}let c=YM(a,i),u=l&&l!=="/"&&l.endsWith("/"),d=(s||l===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const kn=e=>e.join("/").replace(/\/\/+/g,"/"),QM=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),qM=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,JM=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class Np{constructor(t,n,r,a){a===void 0&&(a=!1),this.status=t,this.statusText=n||"",this.internal=a,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function Rx(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Ox=["post","put","patch","delete"],eA=new Set(Ox),tA=["get",...Ox],nA=new Set(tA),rA=new Set([301,302,303,307,308]),oA=new Set([307,308]),kc={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},aA={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},oa={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Dx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,sA=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),Mx="remix-router-transitions";function lA(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",r=!n;re(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let a;if(e.mapRouteProperties)a=e.mapRouteProperties;else if(e.detectErrorBoundary){let k=e.detectErrorBoundary;a=E=>({hasErrorBoundary:k(E)})}else a=sA;let s={},l=Iu(e.routes,a,void 0,s),i,c=e.basename||"/",u=$e({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_prependBasename:!1},e.future),d=null,f=new Set,g=null,y=null,b=null,j=e.hydrationData!=null,_=xo(l,e.history.location,c),v=null;if(_==null){let k=Mt(404,{pathname:e.history.location.pathname}),{matches:E,route:R}=qf(l);_=E,v={[R.id]:k}}let p=!_.some(k=>k.route.lazy)&&(!_.some(k=>k.route.loader)||e.hydrationData!=null),m,h={historyAction:e.history.action,location:e.history.location,matches:_,initialized:p,navigation:kc,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||v,fetchers:new Map,blockers:new Map},C=Be.Pop,S=!1,w,T=!1,L=new Map,N=null,P=!1,Y=!1,J=[],de=[],ee=new Map,me=0,oe=-1,D=new Map,$=new Set,B=new Map,H=new Map,F=new Set,ve=new Map,ae=new Map,we=!1;function ce(){if(d=e.history.listen(k=>{let{action:E,location:R,delta:I}=k;if(we){we=!1;return}Vr(ae.size===0||I!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let V=Ls({currentLocation:h.location,nextLocation:R,historyAction:E});if(V&&I!=null){we=!0,e.history.go(I*-1),kr(V,{state:"blocked",location:R,proceed(){kr(V,{state:"proceeding",proceed:void 0,reset:void 0,location:R}),e.history.go(I)},reset(){let U=new Map(h.blockers);U.set(V,oa),fe({blockers:U})}});return}return Ge(E,R)}),n){vA(t,L);let k=()=>yA(t,L);t.addEventListener("pagehide",k),N=()=>t.removeEventListener("pagehide",k)}return h.initialized||Ge(Be.Pop,h.location),m}function Ae(){d&&d(),N&&N(),f.clear(),w&&w.abort(),h.fetchers.forEach((k,E)=>Tr(E)),h.blockers.forEach((k,E)=>Zt(E))}function nt(k){return f.add(k),()=>f.delete(k)}function fe(k,E){h=$e({},h,k);let R=[],I=[];u.v7_fetcherPersist&&h.fetchers.forEach((V,U)=>{V.state==="idle"&&(F.has(U)?I.push(U):R.push(U))}),f.forEach(V=>V(h,{deletedFetchers:I,unstable_viewTransitionOpts:E})),u.v7_fetcherPersist&&(R.forEach(V=>h.fetchers.delete(V)),I.forEach(V=>Tr(V)))}function se(k,E){var R,I;let V=h.actionData!=null&&h.navigation.formMethod!=null&&qt(h.navigation.formMethod)&&h.navigation.state==="loading"&&((R=k.state)==null?void 0:R._isRedirect)!==!0,U;E.actionData?Object.keys(E.actionData).length>0?U=E.actionData:U=null:V?U=h.actionData:U=null;let G=E.loaderData?Qf(h.loaderData,E.loaderData,E.matches||[],E.errors):h.loaderData,W=h.blockers;W.size>0&&(W=new Map(W),W.forEach((ye,te)=>W.set(te,oa)));let Z=S===!0||h.navigation.formMethod!=null&&qt(h.navigation.formMethod)&&((I=k.state)==null?void 0:I._isRedirect)!==!0;i&&(l=i,i=void 0),P||C===Be.Pop||(C===Be.Push?e.history.push(k,k.state):C===Be.Replace&&e.history.replace(k,k.state));let ne;if(C===Be.Pop){let ye=L.get(h.location.pathname);ye&&ye.has(k.pathname)?ne={currentLocation:h.location,nextLocation:k}:L.has(k.pathname)&&(ne={currentLocation:k,nextLocation:h.location})}else if(T){let ye=L.get(h.location.pathname);ye?ye.add(k.pathname):(ye=new Set([k.pathname]),L.set(h.location.pathname,ye)),ne={currentLocation:h.location,nextLocation:k}}fe($e({},E,{actionData:U,loaderData:G,historyAction:C,location:k,initialized:!0,navigation:kc,revalidation:"idle",restoreScrollPosition:Ds(k,E.matches||h.matches),preventScrollReset:Z,blockers:W}),ne),C=Be.Pop,S=!1,T=!1,P=!1,Y=!1,J=[],de=[]}async function _t(k,E){if(typeof k=="number"){e.history.go(k);return}let R=zu(h.location,h.matches,c,u.v7_prependBasename,k,E==null?void 0:E.fromRouteId,E==null?void 0:E.relative),{path:I,submission:V,error:U}=Wf(u.v7_normalizeFormMethod,!1,R,E),G=h.location,W=ns(h.location,I,E&&E.state);W=$e({},W,e.history.encodeLocation(W));let Z=E&&E.replace!=null?E.replace:void 0,ne=Be.Push;Z===!0?ne=Be.Replace:Z===!1||V!=null&&qt(V.formMethod)&&V.formAction===h.location.pathname+h.location.search&&(ne=Be.Replace);let ye=E&&"preventScrollReset"in E?E.preventScrollReset===!0:void 0,te=Ls({currentLocation:G,nextLocation:W,historyAction:ne});if(te){kr(te,{state:"blocked",location:W,proceed(){kr(te,{state:"proceeding",proceed:void 0,reset:void 0,location:W}),_t(k,E)},reset(){let ge=new Map(h.blockers);ge.set(te,oa),fe({blockers:ge})}});return}return await Ge(ne,W,{submission:V,pendingError:U,preventScrollReset:ye,replace:E&&E.replace,enableViewTransition:E&&E.unstable_viewTransition})}function xt(){if(Fn(),fe({revalidation:"loading"}),h.navigation.state!=="submitting"){if(h.navigation.state==="idle"){Ge(h.historyAction,h.location,{startUninterruptedRevalidation:!0});return}Ge(C||h.historyAction,h.navigation.location,{overrideNavigation:h.navigation})}}async function Ge(k,E,R){w&&w.abort(),w=null,C=k,P=(R&&R.startUninterruptedRevalidation)===!0,Os(h.location,h.matches),S=(R&&R.preventScrollReset)===!0,T=(R&&R.enableViewTransition)===!0;let I=i||l,V=R&&R.overrideNavigation,U=xo(I,E,c);if(!U){let ge=Mt(404,{pathname:E.pathname}),{matches:Ee,route:sn}=qf(I);Ko(),se(E,{matches:Ee,loaderData:{},errors:{[sn.id]:ge}});return}if(h.initialized&&!Y&&pA(h.location,E)&&!(R&&R.submission&&qt(R.submission.formMethod))){se(E,{matches:U});return}w=new AbortController;let G=sa(e.history,E,w.signal,R&&R.submission),W,Z;if(R&&R.pendingError)Z={[Oa(U).route.id]:R.pendingError};else if(R&&R.submission&&qt(R.submission.formMethod)){let ge=await Wt(G,E,R.submission,U,{replace:R.replace});if(ge.shortCircuited)return;W=ge.pendingActionData,Z=ge.pendingActionError,V=Ec(E,R.submission),G=new Request(G.url,{signal:G.signal})}let{shortCircuited:ne,loaderData:ye,errors:te}=await zn(G,E,U,V,R&&R.submission,R&&R.fetcherSubmission,R&&R.replace,W,Z);ne||(w=null,se(E,$e({matches:U},W?{actionData:W}:{},{loaderData:ye,errors:te})))}async function Wt(k,E,R,I,V){V===void 0&&(V={}),Fn();let U=gA(E,R);fe({navigation:U});let G,W=Uu(I,E);if(!W.route.action&&!W.route.lazy)G={type:ze.error,error:Mt(405,{method:k.method,pathname:E.pathname,routeId:W.route.id})};else if(G=await aa("action",k,W,I,s,a,c),k.signal.aborted)return{shortCircuited:!0};if(_o(G)){let Z;return V&&V.replace!=null?Z=V.replace:Z=G.location===h.location.pathname+h.location.search,await vt(h,G,{submission:R,replace:Z}),{shortCircuited:!0}}if(Da(G)){let Z=Oa(I,W.route.id);return(V&&V.replace)!==!0&&(C=Be.Push),{pendingActionData:{},pendingActionError:{[Z.route.id]:G.error}}}if(Pr(G))throw Mt(400,{type:"defer-action"});return{pendingActionData:{[W.route.id]:G.data}}}async function zn(k,E,R,I,V,U,G,W,Z){let ne=I||Ec(E,V),ye=V||U||th(ne),te=i||l,[ge,Ee]=Zf(e.history,h,R,ye,E,Y,J,de,B,$,te,c,W,Z);if(Ko(je=>!(R&&R.some(Gt=>Gt.route.id===je))||ge&&ge.some(Gt=>Gt.route.id===je)),oe=++me,ge.length===0&&Ee.length===0){let je=yn();return se(E,$e({matches:R,loaderData:{},errors:Z||null},W?{actionData:W}:{},je?{fetchers:new Map(h.fetchers)}:{})),{shortCircuited:!0}}if(!P){Ee.forEach(Gt=>{let Wn=h.fetchers.get(Gt.key),Ie=la(void 0,Wn?Wn.data:void 0);h.fetchers.set(Gt.key,Ie)});let je=W||h.actionData;fe($e({navigation:ne},je?Object.keys(je).length===0?{actionData:null}:{actionData:je}:{},Ee.length>0?{fetchers:new Map(h.fetchers)}:{}))}Ee.forEach(je=>{ee.has(je.key)&&an(je.key),je.controller&&ee.set(je.key,je.controller)});let sn=()=>Ee.forEach(je=>an(je.key));w&&w.signal.addEventListener("abort",sn);let{results:Tt,loaderResults:Kt,fetcherResults:Er}=await _r(h.matches,R,ge,Ee,k);if(k.signal.aborted)return{shortCircuited:!0};w&&w.signal.removeEventListener("abort",sn),Ee.forEach(je=>ee.delete(je.key));let Cn=Jf(Tt);if(Cn){if(Cn.idx>=ge.length){let je=Ee[Cn.idx-ge.length].key;$.add(je)}return await vt(h,Cn.result,{replace:G}),{shortCircuited:!0}}let{loaderData:Vn,errors:Ms}=Xf(h,R,ge,Kt,Z,Ee,Er,ve);ve.forEach((je,Gt)=>{je.subscribe(Wn=>{(Wn||je.done)&&ve.delete(Gt)})});let zi=yn(),Fi=Hn(oe),Ui=zi||Fi||Ee.length>0;return $e({loaderData:Vn,errors:Ms},Ui?{fetchers:new Map(h.fetchers)}:{})}function xn(k){return u.v7_fetcherPersist&&(H.set(k,(H.get(k)||0)+1),F.has(k)&&F.delete(k)),h.fetchers.get(k)||aA}function Ts(k,E,R,I){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");ee.has(k)&&an(k);let V=i||l,U=zu(h.location,h.matches,c,u.v7_prependBasename,R,E,I==null?void 0:I.relative),G=xo(V,U,c);if(!G){Un(k,E,Mt(404,{pathname:U}));return}let{path:W,submission:Z,error:ne}=Wf(u.v7_normalizeFormMethod,!0,U,I);if(ne){Un(k,E,ne);return}let ye=Uu(G,W);if(S=(I&&I.preventScrollReset)===!0,Z&&qt(Z.formMethod)){ks(k,E,W,ye,G,Z);return}B.set(k,{routeId:E,path:W}),Zo(k,E,W,ye,G,Z)}async function ks(k,E,R,I,V,U){if(Fn(),B.delete(k),!I.route.action&&!I.route.lazy){let Ie=Mt(405,{method:U.formMethod,pathname:R,routeId:E});Un(k,E,Ie);return}let G=h.fetchers.get(k),W=xA(U,G);h.fetchers.set(k,W),fe({fetchers:new Map(h.fetchers)});let Z=new AbortController,ne=sa(e.history,R,Z.signal,U);ee.set(k,Z);let ye=me,te=await aa("action",ne,I,V,s,a,c);if(ne.signal.aborted){ee.get(k)===Z&&ee.delete(k);return}if(F.has(k)){h.fetchers.set(k,Gn(void 0)),fe({fetchers:new Map(h.fetchers)});return}if(_o(te))if(ee.delete(k),oe>ye){let Ie=Gn(void 0);h.fetchers.set(k,Ie),fe({fetchers:new Map(h.fetchers)});return}else{$.add(k);let Ie=la(U);return h.fetchers.set(k,Ie),fe({fetchers:new Map(h.fetchers)}),vt(h,te,{fetcherSubmission:U})}if(Da(te)){Un(k,E,te.error);return}if(Pr(te))throw Mt(400,{type:"defer-action"});let ge=h.navigation.location||h.location,Ee=sa(e.history,ge,Z.signal),sn=i||l,Tt=h.navigation.state!=="idle"?xo(sn,h.navigation.location,c):h.matches;re(Tt,"Didn't find any matches after fetcher action");let Kt=++me;D.set(k,Kt);let Er=la(U,te.data);h.fetchers.set(k,Er);let[Cn,Vn]=Zf(e.history,h,Tt,U,ge,Y,J,de,B,$,sn,c,{[I.route.id]:te.data},void 0);Vn.filter(Ie=>Ie.key!==k).forEach(Ie=>{let Go=Ie.key,Dp=h.fetchers.get(Go),Xx=la(void 0,Dp?Dp.data:void 0);h.fetchers.set(Go,Xx),ee.has(Go)&&an(Go),Ie.controller&&ee.set(Go,Ie.controller)}),fe({fetchers:new Map(h.fetchers)});let Ms=()=>Vn.forEach(Ie=>an(Ie.key));Z.signal.addEventListener("abort",Ms);let{results:zi,loaderResults:Fi,fetcherResults:Ui}=await _r(h.matches,Tt,Cn,Vn,Ee);if(Z.signal.aborted)return;Z.signal.removeEventListener("abort",Ms),D.delete(k),ee.delete(k),Vn.forEach(Ie=>ee.delete(Ie.key));let je=Jf(zi);if(je){if(je.idx>=Cn.length){let Ie=Vn[je.idx-Cn.length].key;$.add(Ie)}return vt(h,je.result)}let{loaderData:Gt,errors:Wn}=Xf(h,h.matches,Cn,Fi,void 0,Vn,Ui,ve);if(h.fetchers.has(k)){let Ie=Gn(te.data);h.fetchers.set(k,Ie)}Hn(Kt),h.navigation.state==="loading"&&Kt>oe?(re(C,"Expected pending action"),w&&w.abort(),se(h.navigation.location,{matches:Tt,loaderData:Gt,errors:Wn,fetchers:new Map(h.fetchers)})):(fe({errors:Wn,loaderData:Qf(h.loaderData,Gt,Tt,Wn),fetchers:new Map(h.fetchers)}),Y=!1)}async function Zo(k,E,R,I,V,U){let G=h.fetchers.get(k),W=la(U,G?G.data:void 0);h.fetchers.set(k,W),fe({fetchers:new Map(h.fetchers)});let Z=new AbortController,ne=sa(e.history,R,Z.signal);ee.set(k,Z);let ye=me,te=await aa("loader",ne,I,V,s,a,c);if(Pr(te)&&(te=await $x(te,ne.signal,!0)||te),ee.get(k)===Z&&ee.delete(k),ne.signal.aborted)return;if(F.has(k)){h.fetchers.set(k,Gn(void 0)),fe({fetchers:new Map(h.fetchers)});return}if(_o(te))if(oe>ye){let Ee=Gn(void 0);h.fetchers.set(k,Ee),fe({fetchers:new Map(h.fetchers)});return}else{$.add(k),await vt(h,te);return}if(Da(te)){Un(k,E,te.error);return}re(!Pr(te),"Unhandled fetcher deferred data");let ge=Gn(te.data);h.fetchers.set(k,ge),fe({fetchers:new Map(h.fetchers)})}async function vt(k,E,R){let{submission:I,fetcherSubmission:V,replace:U}=R===void 0?{}:R;E.revalidate&&(Y=!0);let G=ns(k.location,E.location,{_isRedirect:!0});if(re(G,"Expected a location on the redirect navigation"),n){let ge=!1;if(E.reloadDocument)ge=!0;else if(Dx.test(E.location)){const Ee=e.history.createURL(E.location);ge=Ee.origin!==t.location.origin||gr(Ee.pathname,c)==null}if(ge){U?t.location.replace(E.location):t.location.assign(E.location);return}}w=null;let W=U===!0?Be.Replace:Be.Push,{formMethod:Z,formAction:ne,formEncType:ye}=k.navigation;!I&&!V&&Z&&ne&&ye&&(I=th(k.navigation));let te=I||V;if(oA.has(E.status)&&te&&qt(te.formMethod))await Ge(W,G,{submission:$e({},te,{formAction:E.location}),preventScrollReset:S});else{let ge=Ec(G,I);await Ge(W,G,{overrideNavigation:ge,fetcherSubmission:V,preventScrollReset:S})}}async function _r(k,E,R,I,V){let U=await Promise.all([...R.map(Z=>aa("loader",V,Z,E,s,a,c)),...I.map(Z=>Z.matches&&Z.match&&Z.controller?aa("loader",sa(e.history,Z.path,Z.controller.signal),Z.match,Z.matches,s,a,c):{type:ze.error,error:Mt(404,{pathname:Z.path})})]),G=U.slice(0,R.length),W=U.slice(R.length);return await Promise.all([eh(k,R,G,G.map(()=>V.signal),!1,h.loaderData),eh(k,I.map(Z=>Z.match),W,I.map(Z=>Z.controller?Z.controller.signal:null),!0)]),{results:U,loaderResults:G,fetcherResults:W}}function Fn(){Y=!0,J.push(...Ko()),B.forEach((k,E)=>{ee.has(E)&&(de.push(E),an(E))})}function Un(k,E,R){let I=Oa(h.matches,E);Tr(k),fe({errors:{[I.route.id]:R},fetchers:new Map(h.fetchers)})}function Tr(k){let E=h.fetchers.get(k);ee.has(k)&&!(E&&E.state==="loading"&&D.has(k))&&an(k),B.delete(k),D.delete(k),$.delete(k),F.delete(k),h.fetchers.delete(k)}function Ii(k){if(u.v7_fetcherPersist){let E=(H.get(k)||0)-1;E<=0?(H.delete(k),F.add(k)):H.set(k,E)}else Tr(k);fe({fetchers:new Map(h.fetchers)})}function an(k){let E=ee.get(k);re(E,"Expected fetch controller: "+k),E.abort(),ee.delete(k)}function vn(k){for(let E of k){let R=xn(E),I=Gn(R.data);h.fetchers.set(E,I)}}function yn(){let k=[],E=!1;for(let R of $){let I=h.fetchers.get(R);re(I,"Expected fetcher: "+R),I.state==="loading"&&($.delete(R),k.push(R),E=!0)}return vn(k),E}function Hn(k){let E=[];for(let[R,I]of D)if(I<k){let V=h.fetchers.get(R);re(V,"Expected fetcher: "+R),V.state==="loading"&&(an(R),D.delete(R),E.push(R))}return vn(E),E.length>0}function Es(k,E){let R=h.blockers.get(k)||oa;return ae.get(k)!==E&&ae.set(k,E),R}function Zt(k){h.blockers.delete(k),ae.delete(k)}function kr(k,E){let R=h.blockers.get(k)||oa;re(R.state==="unblocked"&&E.state==="blocked"||R.state==="blocked"&&E.state==="blocked"||R.state==="blocked"&&E.state==="proceeding"||R.state==="blocked"&&E.state==="unblocked"||R.state==="proceeding"&&E.state==="unblocked","Invalid blocker state transition: "+R.state+" -> "+E.state);let I=new Map(h.blockers);I.set(k,E),fe({blockers:I})}function Ls(k){let{currentLocation:E,nextLocation:R,historyAction:I}=k;if(ae.size===0)return;ae.size>1&&Vr(!1,"A router only supports one blocker at a time");let V=Array.from(ae.entries()),[U,G]=V[V.length-1],W=h.blockers.get(U);if(!(W&&W.state==="proceeding")&&G({currentLocation:E,nextLocation:R,historyAction:I}))return U}function Ko(k){let E=[];return ve.forEach((R,I)=>{(!k||k(I))&&(R.cancel(),E.push(I),ve.delete(I))}),E}function Ns(k,E,R){if(g=k,b=E,y=R||null,!j&&h.navigation===kc){j=!0;let I=Ds(h.location,h.matches);I!=null&&fe({restoreScrollPosition:I})}return()=>{g=null,b=null,y=null}}function Rs(k,E){return y&&y(k,E.map(I=>AM(I,h.loaderData)))||k.key}function Os(k,E){if(g&&b){let R=Rs(k,E);g[R]=b()}}function Ds(k,E){if(g){let R=Rs(k,E),I=g[R];if(typeof I=="number")return I}return null}function Bi(k){s={},i=Iu(k,a,void 0,s)}return m={get basename(){return c},get state(){return h},get routes(){return l},get window(){return t},initialize:ce,subscribe:nt,enableScrollRestoration:Ns,navigate:_t,fetch:Ts,revalidate:xt,createHref:k=>e.history.createHref(k),encodeLocation:k=>e.history.encodeLocation(k),getFetcher:xn,deleteFetcher:Ii,dispose:Ae,getBlocker:Es,deleteBlocker:Zt,_internalFetchControllers:ee,_internalActiveDeferreds:ve,_internalSetRoutes:Bi},m}function iA(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function zu(e,t,n,r,a,s,l){let i,c;if(s!=null&&l!=="path"){i=[];for(let d of t)if(i.push(d),d.route.id===s){c=d;break}}else i=t,c=t[t.length-1];let u=Lp(a||".",Pi(i).map(d=>d.pathnameBase),gr(e.pathname,n)||e.pathname,l==="path");return a==null&&(u.search=e.search,u.hash=e.hash),(a==null||a===""||a===".")&&c&&c.route.index&&!Rp(u.search)&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(u.pathname=u.pathname==="/"?n:kn([n,u.pathname])),Wr(u)}function Wf(e,t,n,r){if(!r||!iA(r))return{path:n};if(r.formMethod&&!mA(r.formMethod))return{path:n,error:Mt(405,{method:r.formMethod})};let a=()=>({path:n,error:Mt(400,{type:"invalid-body"})}),s=r.formMethod||"get",l=e?s.toUpperCase():s.toLowerCase(),i=Px(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!qt(l))return a();let g=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((y,b)=>{let[j,_]=b;return""+y+j+"="+_+`
`},""):String(r.body);return{path:n,submission:{formMethod:l,formAction:i,formEncType:r.formEncType,formData:void 0,json:void 0,text:g}}}else if(r.formEncType==="application/json"){if(!qt(l))return a();try{let g=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:l,formAction:i,formEncType:r.formEncType,formData:void 0,json:g,text:void 0}}}catch{return a()}}}re(typeof FormData=="function","FormData is not available in this environment");let c,u;if(r.formData)c=Fu(r.formData),u=r.formData;else if(r.body instanceof FormData)c=Fu(r.body),u=r.body;else if(r.body instanceof URLSearchParams)c=r.body,u=Yf(c);else if(r.body==null)c=new URLSearchParams,u=new FormData;else try{c=new URLSearchParams(r.body),u=Yf(c)}catch{return a()}let d={formMethod:l,formAction:i,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(qt(d.formMethod))return{path:n,submission:d};let f=Bn(n);return t&&f.search&&Rp(f.search)&&c.append("index",""),f.search="?"+c,{path:Wr(f),submission:d}}function cA(e,t){let n=e;if(t){let r=e.findIndex(a=>a.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function Zf(e,t,n,r,a,s,l,i,c,u,d,f,g,y){let b=y?Object.values(y)[0]:g?Object.values(g)[0]:void 0,j=e.createURL(t.location),_=e.createURL(a),v=y?Object.keys(y)[0]:void 0,m=cA(n,v).filter((C,S)=>{if(C.route.lazy)return!0;if(C.route.loader==null)return!1;if(uA(t.loaderData,t.matches[S],C)||l.some(L=>L===C.route.id))return!0;let w=t.matches[S],T=C;return Kf(C,$e({currentUrl:j,currentParams:w.params,nextUrl:_,nextParams:T.params},r,{actionResult:b,defaultShouldRevalidate:s||j.pathname+j.search===_.pathname+_.search||j.search!==_.search||Ax(w,T)}))}),h=[];return c.forEach((C,S)=>{if(!n.some(P=>P.route.id===C.routeId))return;let w=xo(d,C.path,f);if(!w){h.push({key:S,routeId:C.routeId,path:C.path,matches:null,match:null,controller:null});return}let T=t.fetchers.get(S),L=Uu(w,C.path),N=!1;u.has(S)?N=!1:i.includes(S)?N=!0:T&&T.state!=="idle"&&T.data===void 0?N=s:N=Kf(L,$e({currentUrl:j,currentParams:t.matches[t.matches.length-1].params,nextUrl:_,nextParams:n[n.length-1].params},r,{actionResult:b,defaultShouldRevalidate:s})),N&&h.push({key:S,routeId:C.routeId,path:C.path,matches:w,match:L,controller:new AbortController})}),[m,h]}function uA(e,t,n){let r=!t||n.route.id!==t.route.id,a=e[n.route.id]===void 0;return r||a}function Ax(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function Kf(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function Gf(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let a=n[e.id];re(a,"No route found in manifest");let s={};for(let l in r){let c=a[l]!==void 0&&l!=="hasErrorBoundary";Vr(!c,'Route "'+a.id+'" has a static property "'+l+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+l+'" will be ignored.')),!c&&!DM.has(l)&&(s[l]=r[l])}Object.assign(a,s),Object.assign(a,$e({},t(a),{lazy:void 0}))}async function aa(e,t,n,r,a,s,l,i){i===void 0&&(i={});let c,u,d,f=b=>{let j,_=new Promise((v,p)=>j=p);return d=()=>j(),t.signal.addEventListener("abort",d),Promise.race([b({request:t,params:n.params,context:i.requestContext}),_])};try{let b=n.route[e];if(n.route.lazy)if(b){let j,_=await Promise.all([f(b).catch(v=>{j=v}),Gf(n.route,s,a)]);if(j)throw j;u=_[0]}else if(await Gf(n.route,s,a),b=n.route[e],b)u=await f(b);else if(e==="action"){let j=new URL(t.url),_=j.pathname+j.search;throw Mt(405,{method:t.method,pathname:_,routeId:n.route.id})}else return{type:ze.data,data:void 0};else if(b)u=await f(b);else{let j=new URL(t.url),_=j.pathname+j.search;throw Mt(404,{pathname:_})}re(u!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(b){c=ze.error,u=b}finally{d&&t.signal.removeEventListener("abort",d)}if(hA(u)){let b=u.status;if(rA.has(b)){let v=u.headers.get("Location");if(re(v,"Redirects returned/thrown from loaders/actions must have a Location header"),!Dx.test(v))v=zu(new URL(t.url),r.slice(0,r.indexOf(n)+1),l,!0,v);else if(!i.isStaticRequest){let p=new URL(t.url),m=v.startsWith("//")?new URL(p.protocol+v):new URL(v),h=gr(m.pathname,l)!=null;m.origin===p.origin&&h&&(v=m.pathname+m.search+m.hash)}if(i.isStaticRequest)throw u.headers.set("Location",v),u;return{type:ze.redirect,status:b,location:v,revalidate:u.headers.get("X-Remix-Revalidate")!==null,reloadDocument:u.headers.get("X-Remix-Reload-Document")!==null}}if(i.isRouteRequest)throw{type:c===ze.error?ze.error:ze.data,response:u};let j,_=u.headers.get("Content-Type");return _&&/\bapplication\/json\b/.test(_)?j=await u.json():j=await u.text(),c===ze.error?{type:c,error:new Np(b,u.statusText,j),headers:u.headers}:{type:ze.data,data:j,statusCode:u.status,headers:u.headers}}if(c===ze.error)return{type:c,error:u};if(fA(u)){var g,y;return{type:ze.deferred,deferredData:u,statusCode:(g=u.init)==null?void 0:g.status,headers:((y=u.init)==null?void 0:y.headers)&&new Headers(u.init.headers)}}return{type:ze.data,data:u}}function sa(e,t,n,r){let a=e.createURL(Px(t)).toString(),s={signal:n};if(r&&qt(r.formMethod)){let{formMethod:l,formEncType:i}=r;s.method=l.toUpperCase(),i==="application/json"?(s.headers=new Headers({"Content-Type":i}),s.body=JSON.stringify(r.json)):i==="text/plain"?s.body=r.text:i==="application/x-www-form-urlencoded"&&r.formData?s.body=Fu(r.formData):s.body=r.formData}return new Request(a,s)}function Fu(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,typeof r=="string"?r:r.name);return t}function Yf(e){let t=new FormData;for(let[n,r]of e.entries())t.append(n,r);return t}function dA(e,t,n,r,a){let s={},l=null,i,c=!1,u={};return n.forEach((d,f)=>{let g=t[f].route.id;if(re(!_o(d),"Cannot handle redirect results in processLoaderData"),Da(d)){let y=Oa(e,g),b=d.error;r&&(b=Object.values(r)[0],r=void 0),l=l||{},l[y.route.id]==null&&(l[y.route.id]=b),s[g]=void 0,c||(c=!0,i=Rx(d.error)?d.error.status:500),d.headers&&(u[g]=d.headers)}else Pr(d)?(a.set(g,d.deferredData),s[g]=d.deferredData.data):s[g]=d.data,d.statusCode!=null&&d.statusCode!==200&&!c&&(i=d.statusCode),d.headers&&(u[g]=d.headers)}),r&&(l=r,s[Object.keys(r)[0]]=void 0),{loaderData:s,errors:l,statusCode:i||200,loaderHeaders:u}}function Xf(e,t,n,r,a,s,l,i){let{loaderData:c,errors:u}=dA(t,n,r,a,i);for(let d=0;d<s.length;d++){let{key:f,match:g,controller:y}=s[d];re(l!==void 0&&l[d]!==void 0,"Did not find corresponding fetcher result");let b=l[d];if(!(y&&y.signal.aborted))if(Da(b)){let j=Oa(e.matches,g==null?void 0:g.route.id);u&&u[j.route.id]||(u=$e({},u,{[j.route.id]:b.error})),e.fetchers.delete(f)}else if(_o(b))re(!1,"Unhandled fetcher revalidation redirect");else if(Pr(b))re(!1,"Unhandled fetcher deferred data");else{let j=Gn(b.data);e.fetchers.set(f,j)}}return{loaderData:c,errors:u}}function Qf(e,t,n,r){let a=$e({},t);for(let s of n){let l=s.route.id;if(t.hasOwnProperty(l)?t[l]!==void 0&&(a[l]=t[l]):e[l]!==void 0&&s.route.loader&&(a[l]=e[l]),r&&r.hasOwnProperty(l))break}return a}function Oa(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function qf(e){let t=e.length===1?e[0]:e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function Mt(e,t){let{pathname:n,routeId:r,method:a,type:s}=t===void 0?{}:t,l="Unknown Server Error",i="Unknown @remix-run/router error";return e===400?(l="Bad Request",a&&n&&r?i="You made a "+a+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"?i="defer() is not supported in actions":s==="invalid-body"&&(i="Unable to encode submission body")):e===403?(l="Forbidden",i='Route "'+r+'" does not match URL "'+n+'"'):e===404?(l="Not Found",i='No route matches URL "'+n+'"'):e===405&&(l="Method Not Allowed",a&&n&&r?i="You made a "+a.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":a&&(i='Invalid request method "'+a.toUpperCase()+'"')),new Np(e||500,l,new Error(i),!0)}function Jf(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(_o(n))return{result:n,idx:t}}}function Px(e){let t=typeof e=="string"?Bn(e):e;return Wr($e({},t,{hash:""}))}function pA(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function Pr(e){return e.type===ze.deferred}function Da(e){return e.type===ze.error}function _o(e){return(e&&e.type)===ze.redirect}function fA(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function hA(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function mA(e){return nA.has(e.toLowerCase())}function qt(e){return eA.has(e.toLowerCase())}async function eh(e,t,n,r,a,s){for(let l=0;l<n.length;l++){let i=n[l],c=t[l];if(!c)continue;let u=e.find(f=>f.route.id===c.route.id),d=u!=null&&!Ax(u,c)&&(s&&s[c.route.id])!==void 0;if(Pr(i)&&(a||d)){let f=r[l];re(f,"Expected an AbortSignal for revalidating fetcher deferred result"),await $x(i,f,a).then(g=>{g&&(n[l]=g||n[l])})}}}async function $x(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:ze.data,data:e.deferredData.unwrappedData}}catch(a){return{type:ze.error,error:a}}return{type:ze.data,data:e.deferredData.data}}}function Rp(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function Uu(e,t){let n=typeof t=="string"?Bn(t).search:t.search;if(e[e.length-1].route.index&&Rp(n||""))return e[e.length-1];let r=Pi(e);return r[r.length-1]}function th(e){let{formMethod:t,formAction:n,formEncType:r,text:a,formData:s,json:l}=e;if(!(!t||!n||!r)){if(a!=null)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:void 0,text:a};if(s!=null)return{formMethod:t,formAction:n,formEncType:r,formData:s,json:void 0,text:void 0};if(l!==void 0)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:l,text:void 0}}}function Ec(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function gA(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function la(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function xA(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function Gn(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function vA(e,t){try{let n=e.sessionStorage.getItem(Mx);if(n){let r=JSON.parse(n);for(let[a,s]of Object.entries(r||{}))s&&Array.isArray(s)&&t.set(a,new Set(s||[]))}}catch{}}function yA(e,t){if(t.size>0){let n={};for(let[r,a]of t)n[r]=[...a];try{e.sessionStorage.setItem(Mx,JSON.stringify(n))}catch(r){Vr(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function oi(){return oi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},oi.apply(this,arguments)}const bs=x.createContext(null),Op=x.createContext(null),Jr=x.createContext(null),$i=x.createContext(null),wr=x.createContext({outlet:null,matches:[],isDataRoute:!1}),Ix=x.createContext(null);function CA(e,t){let{relative:n}=t===void 0?{}:t;Ss()||re(!1);let{basename:r,navigator:a}=x.useContext(Jr),{hash:s,pathname:l,search:i}=ws(e,{relative:n}),c=l;return r!=="/"&&(c=l==="/"?r:kn([r,l])),a.createHref({pathname:c,search:i,hash:s})}function Ss(){return x.useContext($i)!=null}function Wo(){return Ss()||re(!1),x.useContext($i).location}function Bx(e){x.useContext(Jr).static||x.useLayoutEffect(e)}function jA(){let{isDataRoute:e}=x.useContext(wr);return e?AA():bA()}function bA(){Ss()||re(!1);let e=x.useContext(bs),{basename:t,navigator:n}=x.useContext(Jr),{matches:r}=x.useContext(wr),{pathname:a}=Wo(),s=JSON.stringify(Pi(r).map(c=>c.pathnameBase)),l=x.useRef(!1);return Bx(()=>{l.current=!0}),x.useCallback(function(c,u){if(u===void 0&&(u={}),!l.current)return;if(typeof c=="number"){n.go(c);return}let d=Lp(c,JSON.parse(s),a,u.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:kn([t,d.pathname])),(u.replace?n.replace:n.push)(d,u.state,u)},[t,n,s,a,e])}const SA=x.createContext(null);function wA(e){let t=x.useContext(wr).outlet;return t&&x.createElement(SA.Provider,{value:e},t)}function ws(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=x.useContext(wr),{pathname:a}=Wo(),s=JSON.stringify(Pi(r).map(l=>l.pathnameBase));return x.useMemo(()=>Lp(e,JSON.parse(s),a,n==="path"),[e,s,a,n])}function _A(e,t,n){Ss()||re(!1);let{navigator:r}=x.useContext(Jr),{matches:a}=x.useContext(wr),s=a[a.length-1],l=s?s.params:{};s&&s.pathname;let i=s?s.pathnameBase:"/";s&&s.route;let c=Wo(),u;if(t){var d;let j=typeof t=="string"?Bn(t):t;i==="/"||(d=j.pathname)!=null&&d.startsWith(i)||re(!1),u=j}else u=c;let f=u.pathname||"/",g=i==="/"?f:f.slice(i.length)||"/",y=xo(e,{pathname:g}),b=NA(y&&y.map(j=>Object.assign({},j,{params:Object.assign({},l,j.params),pathname:kn([i,r.encodeLocation?r.encodeLocation(j.pathname).pathname:j.pathname]),pathnameBase:j.pathnameBase==="/"?i:kn([i,r.encodeLocation?r.encodeLocation(j.pathnameBase).pathname:j.pathnameBase])})),a,n);return t&&b?x.createElement($i.Provider,{value:{location:oi({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Be.Pop}},b):b}function TA(){let e=MA(),t=Rx(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},t),n?x.createElement("pre",{style:a},n):null,s)}const kA=x.createElement(TA,null);class EA extends x.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?x.createElement(wr.Provider,{value:this.props.routeContext},x.createElement(Ix.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function LA(e){let{routeContext:t,match:n,children:r}=e,a=x.useContext(bs);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),x.createElement(wr.Provider,{value:t},r)}function NA(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var a;if((a=n)!=null&&a.errors)e=n.matches;else return null}let s=e,l=(r=n)==null?void 0:r.errors;if(l!=null){let i=s.findIndex(c=>c.route.id&&(l==null?void 0:l[c.route.id]));i>=0||re(!1),s=s.slice(0,Math.min(s.length,i+1))}return s.reduceRight((i,c,u)=>{let d=c.route.id?l==null?void 0:l[c.route.id]:null,f=null;n&&(f=c.route.errorElement||kA);let g=t.concat(s.slice(0,u+1)),y=()=>{let b;return d?b=f:c.route.Component?b=x.createElement(c.route.Component,null):c.route.element?b=c.route.element:b=i,x.createElement(LA,{match:c,routeContext:{outlet:i,matches:g,isDataRoute:n!=null},children:b})};return n&&(c.route.ErrorBoundary||c.route.errorElement||u===0)?x.createElement(EA,{location:n.location,revalidation:n.revalidation,component:f,error:d,children:y(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):y()},null)}var zx=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(zx||{}),ai=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ai||{});function RA(e){let t=x.useContext(bs);return t||re(!1),t}function OA(e){let t=x.useContext(Op);return t||re(!1),t}function DA(e){let t=x.useContext(wr);return t||re(!1),t}function Fx(e){let t=DA(),n=t.matches[t.matches.length-1];return n.route.id||re(!1),n.route.id}function MA(){var e;let t=x.useContext(Ix),n=OA(ai.UseRouteError),r=Fx(ai.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function AA(){let{router:e}=RA(zx.UseNavigateStable),t=Fx(ai.UseNavigateStable),n=x.useRef(!1);return Bx(()=>{n.current=!0}),x.useCallback(function(a,s){s===void 0&&(s={}),n.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,oi({fromRouteId:t},s)))},[e,t])}function PA(e){return wA(e.context)}function $A(e){let{basename:t="/",children:n=null,location:r,navigationType:a=Be.Pop,navigator:s,static:l=!1}=e;Ss()&&re(!1);let i=t.replace(/^\/*/,"/"),c=x.useMemo(()=>({basename:i,navigator:s,static:l}),[i,s,l]);typeof r=="string"&&(r=Bn(r));let{pathname:u="/",search:d="",hash:f="",state:g=null,key:y="default"}=r,b=x.useMemo(()=>{let j=gr(u,i);return j==null?null:{location:{pathname:j,search:d,hash:f,state:g,key:y},navigationType:a}},[i,u,d,f,g,y,a]);return b==null?null:x.createElement(Jr.Provider,{value:c},x.createElement($i.Provider,{children:n,value:b}))}new Promise(()=>{});function IA(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:x.createElement(e.Component),Component:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:x.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Do(){return Do=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Do.apply(this,arguments)}function Ux(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,s;for(s=0;s<r.length;s++)a=r[s],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function BA(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function zA(e,t){return e.button===0&&(!t||t==="_self")&&!BA(e)}const FA=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],UA=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"];function HA(e,t){return lA({basename:t==null?void 0:t.basename,future:Do({},t==null?void 0:t.future,{v7_prependBasename:!0}),history:NM({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||VA(),routes:e,mapRouteProperties:IA,window:t==null?void 0:t.window}).initialize()}function VA(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=Do({},t,{errors:WA(t.errors)})),t}function WA(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,a]of t)if(a&&a.__type==="RouteErrorResponse")n[r]=new Np(a.status,a.statusText,a.data,a.internal===!0);else if(a&&a.__type==="Error"){if(a.__subType){let s=window[a.__subType];if(typeof s=="function")try{let l=new s(a.message);l.stack="",n[r]=l}catch{}}if(n[r]==null){let s=new Error(a.message);s.stack="",n[r]=s}}else n[r]=a;return n}const Hx=x.createContext({isTransitioning:!1}),ZA=x.createContext(new Map),KA="startTransition",nh=m4[KA];function GA(e){nh?nh(e):e()}class YA{constructor(){this.status="pending",this.promise=new Promise((t,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",t(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}}function XA(e){let{fallbackElement:t,router:n,future:r}=e,[a,s]=x.useState(n.state),[l,i]=x.useState(),[c,u]=x.useState({isTransitioning:!1}),[d,f]=x.useState(),[g,y]=x.useState(),[b,j]=x.useState(),_=x.useRef(new Map),{v7_startTransition:v}=r||{},p=x.useCallback(w=>{v?GA(w):w()},[v]),m=x.useCallback((w,T)=>{let{deletedFetchers:L,unstable_viewTransitionOpts:N}=T;L.forEach(P=>_.current.delete(P)),w.fetchers.forEach((P,Y)=>{P.data!==void 0&&_.current.set(Y,P.data)}),!N||n.window==null||typeof n.window.document.startViewTransition!="function"?p(()=>s(w)):g&&d?(d.resolve(),g.skipTransition(),j({state:w,currentLocation:N.currentLocation,nextLocation:N.nextLocation})):(i(w),u({isTransitioning:!0,currentLocation:N.currentLocation,nextLocation:N.nextLocation}))},[n.window,g,d,_,p]);x.useLayoutEffect(()=>n.subscribe(m),[n,m]),x.useEffect(()=>{c.isTransitioning&&f(new YA)},[c.isTransitioning]),x.useEffect(()=>{if(d&&l&&n.window){let w=l,T=d.promise,L=n.window.document.startViewTransition(async()=>{p(()=>s(w)),await T});L.finished.finally(()=>{f(void 0),y(void 0),i(void 0),u({isTransitioning:!1})}),y(L)}},[p,l,d,n.window]),x.useEffect(()=>{d&&l&&a.location.key===l.location.key&&d.resolve()},[d,g,a.location,l]),x.useEffect(()=>{!c.isTransitioning&&b&&(i(b.state),u({isTransitioning:!0,currentLocation:b.currentLocation,nextLocation:b.nextLocation}),j(void 0))},[c.isTransitioning,b]);let h=x.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:w=>n.navigate(w),push:(w,T,L)=>n.navigate(w,{state:T,preventScrollReset:L==null?void 0:L.preventScrollReset}),replace:(w,T,L)=>n.navigate(w,{replace:!0,state:T,preventScrollReset:L==null?void 0:L.preventScrollReset})}),[n]),C=n.basename||"/",S=x.useMemo(()=>({router:n,navigator:h,static:!1,basename:C}),[n,h,C]);return x.createElement(x.Fragment,null,x.createElement(bs.Provider,{value:S},x.createElement(Op.Provider,{value:a},x.createElement(ZA.Provider,{value:_.current},x.createElement(Hx.Provider,{value:c},x.createElement($A,{basename:C,location:a.location,navigationType:a.historyAction,navigator:h},a.initialized?x.createElement(QA,{routes:n.routes,state:a}):t))))),null)}function QA(e){let{routes:t,state:n}=e;return _A(t,void 0,n)}const qA=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",JA=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,eP=x.forwardRef(function(t,n){let{onClick:r,relative:a,reloadDocument:s,replace:l,state:i,target:c,to:u,preventScrollReset:d,unstable_viewTransition:f}=t,g=Ux(t,FA),{basename:y}=x.useContext(Jr),b,j=!1;if(typeof u=="string"&&JA.test(u)&&(b=u,qA))try{let m=new URL(window.location.href),h=u.startsWith("//")?new URL(m.protocol+u):new URL(u),C=gr(h.pathname,y);h.origin===m.origin&&C!=null?u=C+h.search+h.hash:j=!0}catch{}let _=CA(u,{relative:a}),v=rP(u,{replace:l,state:i,target:c,preventScrollReset:d,relative:a,unstable_viewTransition:f});function p(m){r&&r(m),m.defaultPrevented||v(m)}return x.createElement("a",Do({},g,{href:b||_,onClick:j||s?r:p,ref:n,target:c}))}),tP=x.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:a=!1,className:s="",end:l=!1,style:i,to:c,unstable_viewTransition:u,children:d}=t,f=Ux(t,UA),g=ws(c,{relative:f.relative}),y=Wo(),b=x.useContext(Op),{navigator:j}=x.useContext(Jr),_=b!=null&&oP(g)&&u===!0,v=j.encodeLocation?j.encodeLocation(g).pathname:g.pathname,p=y.pathname,m=b&&b.navigation&&b.navigation.location?b.navigation.location.pathname:null;a||(p=p.toLowerCase(),m=m?m.toLowerCase():null,v=v.toLowerCase());let h=p===v||!l&&p.startsWith(v)&&p.charAt(v.length)==="/",C=m!=null&&(m===v||!l&&m.startsWith(v)&&m.charAt(v.length)==="/"),S={isActive:h,isPending:C,isTransitioning:_},w=h?r:void 0,T;typeof s=="function"?T=s(S):T=[s,h?"active":null,C?"pending":null,_?"transitioning":null].filter(Boolean).join(" ");let L=typeof i=="function"?i(S):i;return x.createElement(eP,Do({},f,{"aria-current":w,className:T,ref:n,style:L,to:c,unstable_viewTransition:u}),typeof d=="function"?d(S):d)});var Hu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Hu||(Hu={}));var rh;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(rh||(rh={}));function nP(e){let t=x.useContext(bs);return t||re(!1),t}function rP(e,t){let{target:n,replace:r,state:a,preventScrollReset:s,relative:l,unstable_viewTransition:i}=t===void 0?{}:t,c=jA(),u=Wo(),d=ws(e,{relative:l});return x.useCallback(f=>{if(zA(f,n)){f.preventDefault();let g=r!==void 0?r:Wr(u)===Wr(d);c(e,{replace:g,state:a,preventScrollReset:s,relative:l,unstable_viewTransition:i})}},[u,c,d,r,a,n,e,s,l,i])}function oP(e,t){t===void 0&&(t={});let n=x.useContext(Hx);n==null&&re(!1);let{basename:r}=nP(Hu.useViewTransitionState),a=ws(e,{relative:t.relative});if(!n.isTransitioning)return!1;let s=gr(n.currentLocation.pathname,r)||n.currentLocation.pathname,l=gr(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Bu(a.pathname,l)!=null||Bu(a.pathname,s)!=null}const Vx=({to:e,className:t="",exact:n,onClick:r,label:a,style:s,...l})=>o.jsx(tP,{to:e,onClick:r,end:n&&"end",className:({isActive:i})=>`${t} ${i?"active":""}`,"aria-label":a,style:s,children:o.jsx(ki,{...l})}),Wx=({path:e,onClick:t,width:n=512,height:r=512,style:a,className:s="night-and-day--icon",fill:l="currentColor"})=>o.jsx("svg",{"aria-hidden":"true",focusable:"false",className:s,style:a,role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${n} ${r}`,onClick:t,children:o.jsx("path",{d:e,fill:l})}),aP=e=>o.jsx(Wx,{path:"M289,23C160,23 56,127 56,256C56,385 160,489 289,489C352,489 409,464 451,423C456,418 457,411 454,404C451,397 444,394 436,395C426,397 416,397 405,397C304,397 222,316 222,214C222,146 260,86 315,55C322,51 325,44 323,37C322,30 316,25 309,24C302,23 295,23 289,23L289,23Z",...e}),Zx=({Icon:e,caption:t,onClick:n,iconClass:r,iconStyle:a,captionStyle:s,className:l="night-and-day--switcher",captionClass:i="night-and-day--caption",style:c={display:"inline-block"}})=>o.jsxs("div",{className:l,onClick:n,style:c,children:[o.jsx(e,{style:a,className:r}),!!t&&o.jsx("div",{className:i,style:s,children:t})]}),sP=e=>{const{setDark:t}=_s();return o.jsx(Zx,{Icon:aP,onClick:t,...e})},lP=e=>o.jsx(Wx,{path:"M362,1.2C367,3 370,8 371,13L391,121L499,141C504,142 509,145 511,150C512,155 512,161 509,166L447,256L509,346C512,351 512,357 511,362C509,367 504,370 499,371L391,391L371,499C370,504 367,509 362,511C357,512 351,512 346,509L256,447L166,509C161,512 156,512 151,511C146,509 142,504 141,499L121,391L13,371C8,370 3,367 1,362C0,356 0,351 3,346L65,256L3,166C0,161 0,156 1,151C3,146 8,142 13,141L121,121L141,13C142,8 146,3 151,1C156,0 161,0 166,3L256,65L346,3C351,0 357,0 362,1ZM160,256C160,203 203,160 256,160C309,160 352,203 352,256C352,309 309,352 256,352C203,352 160,309 160,256ZM384,256C384,186 326,128 256,128C186,128 128,186 128,256C128,326 186,384 256,384C326,384 384,326 384,256Z",...e}),iP=e=>{const{setLight:t}=_s();return o.jsx(Zx,{Icon:lP,onClick:t,...e})},cP=({sunrise:e={},nightfall:t={}})=>{const{isLight:n,setLight:r,setDark:a}=_s();return n?o.jsx(iP,{onClick:a,...e}):o.jsx(sP,{onClick:r,...t})},Kx=x.createContext(),_s=()=>x.useContext(Kx),ll="dark",Lc="light",uP="(prefers-color-scheme: dark)",Nc=()=>!1,dP=()=>{let e={};return{clear:()=>e={},getItem:t=>e[t],setItem:(t,n)=>e[t]=n,removeItem:t=>delete e[t]}},pP=()=>({matches:Nc,addEventListener:Nc,removeEventListener:Nc}),Gx=typeof window<"u",Rc=Gx&&window.localStorage?window.localStorage:dP(),fP=Gx&&window.matchMedia?e=>window.matchMedia(e):pP,Vu=fP(uP),hP=()=>Vu.matches,mP=e=>e.split(" "),oh=(e,t="")=>`${e} ${t}`,gP=({storageKey:e,defaultVariant:t,children:n})=>{const r=e?Rc.getItem(e):null,[a,s=""]=r?mP(r):[hP(),null],[l,i]=x.useState(a===ll),[c,u]=x.useState(s||t),d=b=>{i(b),e&&Rc.setItem(e,oh(b?ll:Lc,c))},f=b=>{u(b),e&&Rc.setItem(e,oh(l?ll:Lc,b))},g=b=>d(b.matches);x.useEffect(()=>(Vu.addEventListener("change",g),()=>Vu.removeEventListener("change",g)),[]);const y={isDark:l,isLight:!l,setDark:()=>d(!0),setLight:()=>d(!1),setIsDark:i,toggleTheme:()=>d(!l),theme:l?ll:Lc,variant:c,setVariant:f};return o.jsx(Kx.Provider,{value:y,children:n})},Yx="0.0.7",xP="2024-01-08",ah="sidebar",vP="no-sidebar",yP=()=>{const{variant:e,setVariant:t}=_s();return o.jsx("header",{children:o.jsxs("nav",{children:[o.jsxs("div",{children:[o.jsx(Q,{name:"bars",className:"toggle-sidebar action",onClick:()=>t(e===ah?vP:ah)}),o.jsx(Vx,{to:"/",className:"home mar-l-2",text:"Badger React UI"}),o.jsxs("span",{className:"small mar-l-2",children:["v",Yx]})]}),o.jsxs("div",{className:"flex middle",children:[o.jsx("a",{href:"https://github.com/abw/badger-react-ui",children:o.jsx(Q,{name:"github",className:"mar-r-4"})}),o.jsx(cP,{})]})]})})},CP=()=>o.jsx("footer",{children:o.jsxs("div",{className:"flex space middle",children:[o.jsx("div",{className:"large",children:"Badger React UI"}),o.jsxs("div",{className:"text-center small",children:["by ",o.jsx("a",{href:"https://github.com/abw",children:"Andy Wardley"})]}),o.jsxs("div",{className:"text-right",children:["v",Yx,o.jsx("br",{}),xP]})]})}),jP=({toc:e,contentRef:t})=>o.jsx("ul",{className:"toc",children:Object.entries(e).map(([n,r])=>o.jsx("li",{onClick:()=>{var a,s;(s=t.current)==null||s.scrollTo({top:((a=r.ref.current)==null?void 0:a.offsetTop)-20})},className:r.heading?"heading":"",children:r.heading?o.jsx("h4",{children:r.heading}):r.text.match(/^code:/)?o.jsx("code",{children:r.text.replace(/^code:/,"")}):r.text},n))}),bP=js.Consumer(jP),SP=({title:e,path:t,items:n,tocs:r})=>{const a=ws(),s=t&&a.pathname.slice(0,t.length)===t;return o.jsxs("details",{className:"menu",open:s,children:[o.jsx("summary",{children:e}),o.jsx("ul",{children:n.map(l=>{const i=a.pathname===l.to;return o.jsxs("li",{children:[o.jsx(Vx,{className:"item",...l}),!!l.tocName&&i&&r[l.tocName]&&o.jsx(bP,{toc:r[l.tocName]})]},l.to)})})]})},sh=js.Consumer(SP),wP={title:"Getting Started",path:"/getting-started",items:[{to:"/getting-started/installation",text:"Installation"}]},_P={title:"Components",path:"/components",items:[{to:"/components/alert",text:"Alert",tocName:"alert"},{to:"/components/button",text:"Button",tocName:"button"},{to:"/components/buttons",text:"Buttons",tocName:"buttons"},{to:"/components/checkbox",text:"Checkbox",tocName:"checkbox"},{to:"/components/confirm",text:"Confirm",tocName:"confirm"},{to:"/components/datatable",text:"Datatable",tocName:"datatable"},{to:"/components/details",text:"Details",tocName:"details"},{to:"/components/dropdown",text:"Dropdown",tocName:"dropdown"},{to:"/components/icon",text:"Icon",tocName:"icon"},{to:"/components/modal",text:"Modal",tocName:"modal"},{to:"/components/overlay",text:"Overlay",tocName:"overlay"},{to:"/components/pager",text:"Pager",tocName:"pager"},{to:"/components/radio",text:"Radio",tocName:"radio"},{to:"/components/search",text:"Search",tocName:"search"},{to:"/components/select",text:"Select",tocName:"select"},{to:"/components/sortable",text:"Sortable",tocName:"sortable"}]},TP=()=>o.jsxs(o.Fragment,{children:[o.jsx(sh,{...wP}),o.jsx(sh,{..._P})]});function kP(){const{pathname:e}=Wo();return x.useEffect(()=>EP(document.getElementById("content")),[e]),null}function EP(e,{top:t=0,left:n=0,behavior:r="smooth"}={}){e==null||e.scrollTo({top:t,left:n,behavior:r})}const LP=({contentRef:e})=>{const{theme:t,variant:n}=_s();return o.jsxs("div",{id:"site",className:n,"data-theme":t,children:[o.jsx(yP,{}),o.jsxs("div",{id:"app",children:[o.jsx(kP,{}),o.jsx("aside",{children:o.jsx(TP,{})}),o.jsx("main",{id:"content",ref:e,children:o.jsx(PA,{})})]}),o.jsx(CP,{})]})},NP=js.Consumer(LP),RP=/\/_layout$/,OP=/\/_examples\//,DP=MP(Object.assign({"../pages/components/alert/_examples/Alert/index.jsx":T_,"../pages/components/alert/_examples/Error/index.jsx":O_,"../pages/components/alert/_examples/Info/index.jsx":A_,"../pages/components/alert/_examples/Success/index.jsx":I_,"../pages/components/alert/_examples/Warning/index.jsx":F_,"../pages/components/alert/_examples/border/index.jsx":V_,"../pages/components/alert/_examples/className/index.jsx":K_,"../pages/components/alert/_examples/color/index.jsx":X_,"../pages/components/alert/_examples/dismissable/index.jsx":J_,"../pages/components/alert/_examples/headIcon/index.jsx":nT,"../pages/components/alert/_examples/headline/index.jsx":aT,"../pages/components/alert/_examples/icon/index.jsx":iT,"../pages/components/alert/_examples/onDismiss/index.jsx":dT,"../pages/components/alert/_examples/radius/index.jsx":hT,"../pages/components/alert/_examples/revealable/index.jsx":xT,"../pages/components/alert/_examples/revealed/index.jsx":CT,"../pages/components/alert/_examples/shadow/index.jsx":ST,"../pages/components/alert/_examples/size/index.jsx":TT,"../pages/components/alert/_examples/stripe/index.jsx":LT,"../pages/components/alert/_examples/text/index.jsx":OT,"../pages/components/alert/_examples/title/index.jsx":AT,"../pages/components/alert/_examples/type/index.jsx":IT,"../pages/components/alert/index.jsx":FT,"../pages/components/button/_examples/Button/index.jsx":VT,"../pages/components/button/_examples/Content/index.jsx":KT,"../pages/components/button/_examples/bare/index.jsx":XT,"../pages/components/button/_examples/border/index.jsx":JT,"../pages/components/button/_examples/bright/index.jsx":nk,"../pages/components/button/_examples/className/index.jsx":ak,"../pages/components/button/_examples/color/index.jsx":ik,"../pages/components/button/_examples/dark/index.jsx":dk,"../pages/components/button/_examples/disabled/index.jsx":hk,"../pages/components/button/_examples/icon/index.jsx":xk,"../pages/components/button/_examples/iconLeft/index.jsx":Ck,"../pages/components/button/_examples/iconRight/index.jsx":Sk,"../pages/components/button/_examples/label/index.jsx":Tk,"../pages/components/button/_examples/onClick/index.jsx":Lk,"../pages/components/button/_examples/outline/index.jsx":Ok,"../pages/components/button/_examples/radius/index.jsx":Ak,"../pages/components/button/_examples/shaded/index.jsx":Ik,"../pages/components/button/_examples/shadow/index.jsx":Fk,"../pages/components/button/_examples/size/index.jsx":Vk,"../pages/components/button/_examples/text/index.jsx":Kk,"../pages/components/button/_examples/tooltip/index.jsx":Xk,"../pages/components/button/_examples/type/index.jsx":Jk,"../pages/components/button/index.jsx":tE,"../pages/components/buttons/_examples/Button/index.jsx":aE,"../pages/components/buttons/_examples/Buttons/index.jsx":iE,"../pages/components/buttons/_examples/buttonClass/index.jsx":dE,"../pages/components/buttons/_examples/buttonsProp/index.jsx":hE,"../pages/components/buttons/_examples/className/index.jsx":xE,"../pages/components/buttons/_examples/outline/index.jsx":CE,"../pages/components/buttons/index.jsx":bE,"../pages/components/checkbox/_examples/CheckboxState/index.jsx":_E,"../pages/components/checkbox/_examples/Overview/index.jsx":EE,"../pages/components/checkbox/_examples/checked/index.jsx":RE,"../pages/components/checkbox/_examples/checkedText/index.jsx":ME,"../pages/components/checkbox/_examples/className/index.jsx":$E,"../pages/components/checkbox/_examples/disabled/index.jsx":zE,"../pages/components/checkbox/_examples/onChange/index.jsx":HE,"../pages/components/checkbox/_examples/text/index.jsx":ZE,"../pages/components/checkbox/index.jsx":GE,"../pages/components/confirm/_examples/Overview/index.jsx":QE,"../pages/components/confirm/_examples/cancel/index.jsx":eL,"../pages/components/confirm/_examples/cancelProps/index.jsx":rL,"../pages/components/confirm/_examples/className/index.jsx":sL,"../pages/components/confirm/_examples/color/index.jsx":cL,"../pages/components/confirm/_examples/confirm/index.jsx":pL,"../pages/components/confirm/_examples/confirmProps/index.jsx":mL,"../pages/components/confirm/_examples/iconRight/index.jsx":vL,"../pages/components/confirm/_examples/onClick/index.jsx":jL,"../pages/components/confirm/_examples/text/index.jsx":wL,"../pages/components/confirm/index.jsx":TL,"../pages/components/datatable/_examples/Datatable/index.jsx":NL,"../pages/components/datatable/index.jsx":OL,"../pages/components/details/_examples/Details/index.jsx":AL,"../pages/components/details/_examples/border/index.jsx":IL,"../pages/components/details/_examples/color/index.jsx":FL,"../pages/components/details/_examples/content/index.jsx":VL,"../pages/components/details/_examples/lined/index.jsx":KL,"../pages/components/details/_examples/open/index.jsx":XL,"../pages/components/details/_examples/radius/index.jsx":JL,"../pages/components/details/_examples/shaded/index.jsx":nN,"../pages/components/details/_examples/shadow/index.jsx":aN,"../pages/components/details/_examples/summary/index.jsx":iN,"../pages/components/details/index.jsx":uN,"../pages/components/dropdown/_examples/Dropdown/index.jsx":fN,"../pages/components/dropdown/_examples/iconLeft/index.jsx":gN,"../pages/components/dropdown/_examples/iconLeftRotate/index.jsx":yN,"../pages/components/dropdown/_examples/iconRight/index.jsx":bN,"../pages/components/dropdown/_examples/iconRightRotate/index.jsx":_N,"../pages/components/dropdown/_examples/onSelect/index.jsx":EN,"../pages/components/dropdown/_examples/openOnHover/index.jsx":RN,"../pages/components/dropdown/_examples/options/index.jsx":UN,"../pages/components/dropdown/_examples/right/index.jsx":WN,"../pages/components/dropdown/_examples/text/index.jsx":GN,"../pages/components/dropdown/_examples/wide/index.jsx":QN,"../pages/components/dropdown/index.jsx":JN,"../pages/components/icon/_examples/Icon/index.jsx":lR,"../pages/components/icon/_examples/IconLibrary/index.jsx":iR,"../pages/components/icon/_examples/className/index.jsx":dR,"../pages/components/icon/_examples/color/index.jsx":hR,"../pages/components/icon/_examples/name/index.jsx":xR,"../pages/components/icon/_examples/path/index.jsx":CR,"../pages/components/icon/_examples/size/index.jsx":SR,"../pages/components/icon/index.jsx":_R,"../pages/components/modal/_examples/Modal/index.jsx":ER,"../pages/components/modal/_examples/ModalState/index.jsx":RR,"../pages/components/modal/_examples/className/index.jsx":MR,"../pages/components/modal/_examples/close/index.jsx":$R,"../pages/components/modal/_examples/closeIcon/index.jsx":zR,"../pages/components/modal/_examples/footer/index.jsx":HR,"../pages/components/modal/_examples/header/index.jsx":ZR,"../pages/components/modal/_examples/text/index.jsx":YR,"../pages/components/modal/_examples/title/index.jsx":qR,"../pages/components/modal/index.jsx":eO,"../pages/components/overlay/_examples/Overlay/index.jsx":rO,"../pages/components/overlay/_examples/OverlayState/index.jsx":sO,"../pages/components/overlay/_examples/className/index.jsx":uO,"../pages/components/overlay/_examples/custom/index.jsx":fO,"../pages/components/overlay/_examples/fixed/index.jsx":gO,"../pages/components/overlay/_examples/theme/index.jsx":jO,"../pages/components/overlay/index.jsx":SO,"../pages/components/pager/_examples/Context/index.jsx":LO,"../pages/components/pager/_examples/Pager/index.jsx":OO,"../pages/components/pager/_examples/className/index.jsx":AO,"../pages/components/pager/_examples/color/index.jsx":IO,"../pages/components/pager/_examples/icons/index.jsx":FO,"../pages/components/pager/_examples/nextIcon/index.jsx":WO,"../pages/components/pager/_examples/showFirstLast/index.jsx":GO,"../pages/components/pager/_examples/size/index.jsx":QO,"../pages/components/pager/index.jsx":JO,"../pages/components/radio/_examples/Overview/index.jsx":nD,"../pages/components/radio/_examples/border/index.jsx":aD,"../pages/components/radio/_examples/className/index.jsx":iD,"../pages/components/radio/_examples/disabled/index.jsx":dD,"../pages/components/radio/_examples/inline/index.jsx":hD,"../pages/components/radio/_examples/onChange/index.jsx":xD,"../pages/components/radio/_examples/options/index.jsx":CD,"../pages/components/radio/_examples/value/index.jsx":SD,"../pages/components/radio/index.jsx":_D,"../pages/components/search/_examples/Search/index.jsx":LD,"../pages/components/search/_examples/displayResult/index.jsx":DD,"../pages/components/search/_examples/displayValue/index.jsx":$D,"../pages/components/search/_examples/onSearch/index.jsx":FD,"../pages/components/search/index.jsx":HD,"../pages/components/select/_examples/Select/index.jsx":KD,"../pages/components/select/_examples/displayOption/index.jsx":QD,"../pages/components/select/_examples/displayValue/index.jsx":tM,"../pages/components/select/_examples/options/index.jsx":aM,"../pages/components/select/index.jsx":lM,"../pages/components/sortable/_examples/Horizontal/index.jsx":uM,"../pages/components/sortable/_examples/Sortable/index.jsx":fM,"../pages/components/sortable/_examples/Vertical/index.jsx":gM,"../pages/components/sortable/index.jsx":vM,"../pages/getting-started/installation.jsx":_M,"../pages/index.jsx":LM}));function MP(e){const n=Object.entries(e).map(AP).filter(a=>!a.path.match(OP)).reduce((a,s)=>(a[s.path]=s,a),{}),r=Object.keys(n).filter(a=>a.match(RP)).sort((a,s)=>s.length-a.length);for(let a of r){const s=n[a];delete n[a];const l=a.replace(/_layout$/,""),i=l.length;s.path=l,s.children=[];const c=n[l];c&&(delete c.path,c.index=!0,s.children.push(c),delete n[l]);const u=Object.keys(n).filter(d=>d.slice(0,i)===l);for(let d of u){const f=n[d];delete n[d],d=d.slice(i),f.path=d.length?d:"/",s.children.push(f)}n[l]=s}return Object.values(n)}function AP([e,t]){const n=e.replace(/^[./]*pages/,"").replace(/\.jsx$/,"").replace(/index$/,"").replace(/\[(\w+)\]/,":$1"),r=t.default;return{path:n,Component:r}}const PP=HA([{path:"/",element:o.jsx(NP,{}),children:DP}],{basename:"/badger-react-ui"});Oc.createRoot(document.getElementById("root")).render(o.jsx(q.StrictMode,{children:o.jsx(gP,{storageKey:"theme",children:o.jsx(js.Provider,{children:o.jsx(XA,{router:PP})})})}));
