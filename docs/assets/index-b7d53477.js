var p6=Object.defineProperty;var h6=(e,t,n)=>t in e?p6(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var be=(e,t,n)=>(h6(e,typeof t!="symbol"?t+"":t,n),n);function I1(e,t){for(var n=0;n<t.length;n++){const o=t[n];if(typeof o!="string"&&!Array.isArray(o)){for(const a in o)if(a!=="default"&&!(a in e)){const s=Object.getOwnPropertyDescriptor(o,a);s&&Object.defineProperty(e,a,s.get?s:{enumerable:!0,get:()=>o[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}})();var ki=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Qn(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var z1={exports:{}},dc={},F1={exports:{}},me={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xs=Symbol.for("react.element"),f6=Symbol.for("react.portal"),m6=Symbol.for("react.fragment"),x6=Symbol.for("react.strict_mode"),g6=Symbol.for("react.profiler"),v6=Symbol.for("react.provider"),b6=Symbol.for("react.context"),y6=Symbol.for("react.forward_ref"),j6=Symbol.for("react.suspense"),S6=Symbol.for("react.memo"),C6=Symbol.for("react.lazy"),Xh=Symbol.iterator;function w6(e){return e===null||typeof e!="object"?null:(e=Xh&&e[Xh]||e["@@iterator"],typeof e=="function"?e:null)}var U1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},V1=Object.assign,H1={};function xa(e,t,n){this.props=e,this.context=t,this.refs=H1,this.updater=n||U1}xa.prototype.isReactComponent={};xa.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};xa.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function W1(){}W1.prototype=xa.prototype;function np(e,t,n){this.props=e,this.context=t,this.refs=H1,this.updater=n||U1}var rp=np.prototype=new W1;rp.constructor=np;V1(rp,xa.prototype);rp.isPureReactComponent=!0;var Qh=Array.isArray,Z1=Object.prototype.hasOwnProperty,op={current:null},K1={key:!0,ref:!0,__self:!0,__source:!0};function Y1(e,t,n){var o,a={},s=null,l=null;if(t!=null)for(o in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(s=""+t.key),t)Z1.call(t,o)&&!K1.hasOwnProperty(o)&&(a[o]=t[o]);var i=arguments.length-2;if(i===1)a.children=n;else if(1<i){for(var c=Array(i),d=0;d<i;d++)c[d]=arguments[d+2];a.children=c}if(e&&e.defaultProps)for(o in i=e.defaultProps,i)a[o]===void 0&&(a[o]=i[o]);return{$$typeof:Xs,type:e,key:s,ref:l,props:a,_owner:op.current}}function _6(e,t){return{$$typeof:Xs,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ap(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xs}function T6(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Jh=/\/+/g;function Xc(e,t){return typeof e=="object"&&e!==null&&e.key!=null?T6(""+e.key):t.toString(36)}function di(e,t,n,o,a){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Xs:case f6:l=!0}}if(l)return l=e,a=a(l),e=o===""?"."+Xc(l,0):o,Qh(a)?(n="",e!=null&&(n=e.replace(Jh,"$&/")+"/"),di(a,t,n,"",function(d){return d})):a!=null&&(ap(a)&&(a=_6(a,n+(!a.key||l&&l.key===a.key?"":(""+a.key).replace(Jh,"$&/")+"/")+e)),t.push(a)),1;if(l=0,o=o===""?".":o+":",Qh(e))for(var i=0;i<e.length;i++){s=e[i];var c=o+Xc(s,i);l+=di(s,t,n,c,a)}else if(c=w6(e),typeof c=="function")for(e=c.call(e),i=0;!(s=e.next()).done;)s=s.value,c=o+Xc(s,i++),l+=di(s,t,n,c,a);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Dl(e,t,n){if(e==null)return e;var o=[],a=0;return di(e,o,"","",function(s){return t.call(n,s,a++)}),o}function k6(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var yt={current:null},ui={transition:null},E6={ReactCurrentDispatcher:yt,ReactCurrentBatchConfig:ui,ReactCurrentOwner:op};me.Children={map:Dl,forEach:function(e,t,n){Dl(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Dl(e,function(){t++}),t},toArray:function(e){return Dl(e,function(t){return t})||[]},only:function(e){if(!ap(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};me.Component=xa;me.Fragment=m6;me.Profiler=g6;me.PureComponent=np;me.StrictMode=x6;me.Suspense=j6;me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=E6;me.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=V1({},e.props),a=e.key,s=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,l=op.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(c in t)Z1.call(t,c)&&!K1.hasOwnProperty(c)&&(o[c]=t[c]===void 0&&i!==void 0?i[c]:t[c])}var c=arguments.length-2;if(c===1)o.children=n;else if(1<c){i=Array(c);for(var d=0;d<c;d++)i[d]=arguments[d+2];o.children=i}return{$$typeof:Xs,type:e.type,key:a,ref:s,props:o,_owner:l}};me.createContext=function(e){return e={$$typeof:b6,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:v6,_context:e},e.Consumer=e};me.createElement=Y1;me.createFactory=function(e){var t=Y1.bind(null,e);return t.type=e,t};me.createRef=function(){return{current:null}};me.forwardRef=function(e){return{$$typeof:y6,render:e}};me.isValidElement=ap;me.lazy=function(e){return{$$typeof:C6,_payload:{_status:-1,_result:e},_init:k6}};me.memo=function(e,t){return{$$typeof:S6,type:e,compare:t===void 0?null:t}};me.startTransition=function(e){var t=ui.transition;ui.transition={};try{e()}finally{ui.transition=t}};me.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};me.useCallback=function(e,t){return yt.current.useCallback(e,t)};me.useContext=function(e){return yt.current.useContext(e)};me.useDebugValue=function(){};me.useDeferredValue=function(e){return yt.current.useDeferredValue(e)};me.useEffect=function(e,t){return yt.current.useEffect(e,t)};me.useId=function(){return yt.current.useId()};me.useImperativeHandle=function(e,t,n){return yt.current.useImperativeHandle(e,t,n)};me.useInsertionEffect=function(e,t){return yt.current.useInsertionEffect(e,t)};me.useLayoutEffect=function(e,t){return yt.current.useLayoutEffect(e,t)};me.useMemo=function(e,t){return yt.current.useMemo(e,t)};me.useReducer=function(e,t,n){return yt.current.useReducer(e,t,n)};me.useRef=function(e){return yt.current.useRef(e)};me.useState=function(e){return yt.current.useState(e)};me.useSyncExternalStore=function(e,t,n){return yt.current.useSyncExternalStore(e,t,n)};me.useTransition=function(){return yt.current.useTransition()};me.version="18.2.0";F1.exports=me;var v=F1.exports;const J=Qn(v),N6=I1({__proto__:null,default:J},[v]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R6=v,O6=Symbol.for("react.element"),L6=Symbol.for("react.fragment"),D6=Object.prototype.hasOwnProperty,B6=R6.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,$6={key:!0,ref:!0,__self:!0,__source:!0};function G1(e,t,n){var o,a={},s=null,l=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(l=t.ref);for(o in t)D6.call(t,o)&&!$6.hasOwnProperty(o)&&(a[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps,t)a[o]===void 0&&(a[o]=t[o]);return{$$typeof:O6,type:e,key:s,ref:l,props:a,_owner:B6.current}}dc.Fragment=L6;dc.jsx=G1;dc.jsxs=G1;z1.exports=dc;var r=z1.exports,Wd={},q1={exports:{}},Ft={},X1={exports:{}},Q1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(D,P){var I=D.length;D.push(P);e:for(;0<I;){var V=I-1>>>1,W=D[V];if(0<a(W,P))D[V]=P,D[I]=W,I=V;else break e}}function n(D){return D.length===0?null:D[0]}function o(D){if(D.length===0)return null;var P=D[0],I=D.pop();if(I!==P){D[0]=I;e:for(var V=0,W=D.length,_e=W>>>1;V<_e;){var ue=2*(V+1)-1,Ce=D[ue],de=ue+1,Oe=D[de];if(0>a(Ce,I))de<W&&0>a(Oe,Ce)?(D[V]=Oe,D[de]=I,V=de):(D[V]=Ce,D[ue]=I,V=ue);else if(de<W&&0>a(Oe,I))D[V]=Oe,D[de]=I,V=de;else break e}}return P}function a(D,P){var I=D.sortIndex-P.sortIndex;return I!==0?I:D.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var l=Date,i=l.now();e.unstable_now=function(){return l.now()-i}}var c=[],d=[],u=1,p=null,m=3,b=!1,S=!1,j=!1,_=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(D){for(var P=n(d);P!==null;){if(P.callback===null)o(d);else if(P.startTime<=D)o(d),P.sortIndex=P.expirationTime,t(c,P);else break;P=n(d)}}function y(D){if(j=!1,f(D),!S)if(n(c)!==null)S=!0,ce(C);else{var P=n(d);P!==null&&H(y,P.startTime-D)}}function C(D,P){S=!1,j&&(j=!1,x(k),k=-1),b=!0;var I=m;try{for(f(P),p=n(c);p!==null&&(!(p.expirationTime>P)||D&&!$());){var V=p.callback;if(typeof V=="function"){p.callback=null,m=p.priorityLevel;var W=V(p.expirationTime<=P);P=e.unstable_now(),typeof W=="function"?p.callback=W:p===n(c)&&o(c),f(P)}else o(c);p=n(c)}if(p!==null)var _e=!0;else{var ue=n(d);ue!==null&&H(y,ue.startTime-P),_e=!1}return _e}finally{p=null,m=I,b=!1}}var g=!1,w=null,k=-1,E=5,L=-1;function $(){return!(e.unstable_now()-L<E)}function K(){if(w!==null){var D=e.unstable_now();L=D;var P=!0;try{P=w(!0,D)}finally{P?q():(g=!1,w=null)}}else g=!1}var q;if(typeof h=="function")q=function(){h(K)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,le=X.port2;X.port1.onmessage=K,q=function(){le.postMessage(null)}}else q=function(){_(K,0)};function ce(D){w=D,g||(g=!0,q())}function H(D,P){k=_(function(){D(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(D){D.callback=null},e.unstable_continueExecution=function(){S||b||(S=!0,ce(C))},e.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<D?Math.floor(1e3/D):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(D){switch(m){case 1:case 2:case 3:var P=3;break;default:P=m}var I=m;m=P;try{return D()}finally{m=I}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(D,P){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var I=m;m=D;try{return P()}finally{m=I}},e.unstable_scheduleCallback=function(D,P,I){var V=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?V+I:V):I=V,D){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=I+W,D={id:u++,callback:P,priorityLevel:D,startTime:I,expirationTime:W,sortIndex:-1},I>V?(D.sortIndex=I,t(d,D),n(c)===null&&D===n(d)&&(j?(x(k),k=-1):j=!0,H(y,I-V))):(D.sortIndex=W,t(c,D),S||b||(S=!0,ce(C))),D},e.unstable_shouldYield=$,e.unstable_wrapCallback=function(D){var P=m;return function(){var I=m;m=P;try{return D.apply(this,arguments)}finally{m=I}}}})(Q1);X1.exports=Q1;var A6=X1.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J1=v,zt=A6;function A(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var e2=new Set,_s={};function fo(e,t){la(e,t),la(e+"Capture",t)}function la(e,t){for(_s[e]=t,e=0;e<t.length;e++)e2.add(t[e])}var Kn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zd=Object.prototype.hasOwnProperty,M6=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ef={},tf={};function P6(e){return Zd.call(tf,e)?!0:Zd.call(ef,e)?!1:M6.test(e)?tf[e]=!0:(ef[e]=!0,!1)}function I6(e,t,n,o){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return o?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function z6(e,t,n,o){if(t===null||typeof t>"u"||I6(e,t,n,o))return!0;if(o)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function jt(e,t,n,o,a,s,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=o,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=l}var it={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){it[e]=new jt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];it[t]=new jt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){it[e]=new jt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){it[e]=new jt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){it[e]=new jt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){it[e]=new jt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){it[e]=new jt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){it[e]=new jt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){it[e]=new jt(e,5,!1,e.toLowerCase(),null,!1,!1)});var sp=/[\-:]([a-z])/g;function lp(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(sp,lp);it[t]=new jt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(sp,lp);it[t]=new jt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(sp,lp);it[t]=new jt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){it[e]=new jt(e,1,!1,e.toLowerCase(),null,!1,!1)});it.xlinkHref=new jt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){it[e]=new jt(e,1,!1,e.toLowerCase(),null,!0,!0)});function ip(e,t,n,o){var a=it.hasOwnProperty(t)?it[t]:null;(a!==null?a.type!==0:o||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(z6(t,n,a,o)&&(n=null),o||a===null?P6(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,o=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,o?e.setAttributeNS(o,t,n):e.setAttribute(t,n))))}var Jn=J1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Bl=Symbol.for("react.element"),Ao=Symbol.for("react.portal"),Mo=Symbol.for("react.fragment"),cp=Symbol.for("react.strict_mode"),Kd=Symbol.for("react.profiler"),t2=Symbol.for("react.provider"),n2=Symbol.for("react.context"),dp=Symbol.for("react.forward_ref"),Yd=Symbol.for("react.suspense"),Gd=Symbol.for("react.suspense_list"),up=Symbol.for("react.memo"),ur=Symbol.for("react.lazy"),r2=Symbol.for("react.offscreen"),nf=Symbol.iterator;function Pa(e){return e===null||typeof e!="object"?null:(e=nf&&e[nf]||e["@@iterator"],typeof e=="function"?e:null)}var ze=Object.assign,Qc;function es(e){if(Qc===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Qc=t&&t[1]||""}return`
`+Qc+e}var Jc=!1;function ed(e,t){if(!e||Jc)return"";Jc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var o=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){o=d}e.call(t.prototype)}else{try{throw Error()}catch(d){o=d}e()}}catch(d){if(d&&o&&typeof d.stack=="string"){for(var a=d.stack.split(`
`),s=o.stack.split(`
`),l=a.length-1,i=s.length-1;1<=l&&0<=i&&a[l]!==s[i];)i--;for(;1<=l&&0<=i;l--,i--)if(a[l]!==s[i]){if(l!==1||i!==1)do if(l--,i--,0>i||a[l]!==s[i]){var c=`
`+a[l].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=l&&0<=i);break}}}finally{Jc=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?es(e):""}function F6(e){switch(e.tag){case 5:return es(e.type);case 16:return es("Lazy");case 13:return es("Suspense");case 19:return es("SuspenseList");case 0:case 2:case 15:return e=ed(e.type,!1),e;case 11:return e=ed(e.type.render,!1),e;case 1:return e=ed(e.type,!0),e;default:return""}}function qd(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Mo:return"Fragment";case Ao:return"Portal";case Kd:return"Profiler";case cp:return"StrictMode";case Yd:return"Suspense";case Gd:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case n2:return(e.displayName||"Context")+".Consumer";case t2:return(e._context.displayName||"Context")+".Provider";case dp:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case up:return t=e.displayName||null,t!==null?t:qd(e.type)||"Memo";case ur:t=e._payload,e=e._init;try{return qd(e(t))}catch{}}return null}function U6(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return qd(t);case 8:return t===cp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Tr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function o2(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function V6(e){var t=o2(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(l){o=""+l,s.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return o},setValue:function(l){o=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function $l(e){e._valueTracker||(e._valueTracker=V6(e))}function a2(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),o="";return e&&(o=o2(e)?e.checked?"true":"false":e.value),e=o,e!==n?(t.setValue(e),!0):!1}function Ei(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Xd(e,t){var n=t.checked;return ze({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function rf(e,t){var n=t.defaultValue==null?"":t.defaultValue,o=t.checked!=null?t.checked:t.defaultChecked;n=Tr(t.value!=null?t.value:n),e._wrapperState={initialChecked:o,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function s2(e,t){t=t.checked,t!=null&&ip(e,"checked",t,!1)}function Qd(e,t){s2(e,t);var n=Tr(t.value),o=t.type;if(n!=null)o==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Jd(e,t.type,n):t.hasOwnProperty("defaultValue")&&Jd(e,t.type,Tr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function of(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!(o!=="submit"&&o!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Jd(e,t,n){(t!=="number"||Ei(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ts=Array.isArray;function Jo(e,t,n,o){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&o&&(e[n].defaultSelected=!0)}else{for(n=""+Tr(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,o&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function eu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(A(91));return ze({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function af(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(A(92));if(ts(n)){if(1<n.length)throw Error(A(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Tr(n)}}function l2(e,t){var n=Tr(t.value),o=Tr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),o!=null&&(e.defaultValue=""+o)}function sf(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function i2(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function tu(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?i2(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Al,c2=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,o,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,o,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Al=Al||document.createElement("div"),Al.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Al.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ts(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var us={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},H6=["Webkit","ms","Moz","O"];Object.keys(us).forEach(function(e){H6.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),us[t]=us[e]})});function d2(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||us.hasOwnProperty(e)&&us[e]?(""+t).trim():t+"px"}function u2(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var o=n.indexOf("--")===0,a=d2(n,t[n],o);n==="float"&&(n="cssFloat"),o?e.setProperty(n,a):e[n]=a}}var W6=ze({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function nu(e,t){if(t){if(W6[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(A(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(A(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(A(61))}if(t.style!=null&&typeof t.style!="object")throw Error(A(62))}}function ru(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ou=null;function pp(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var au=null,ea=null,ta=null;function lf(e){if(e=el(e)){if(typeof au!="function")throw Error(A(280));var t=e.stateNode;t&&(t=mc(t),au(e.stateNode,e.type,t))}}function p2(e){ea?ta?ta.push(e):ta=[e]:ea=e}function h2(){if(ea){var e=ea,t=ta;if(ta=ea=null,lf(e),t)for(e=0;e<t.length;e++)lf(t[e])}}function f2(e,t){return e(t)}function m2(){}var td=!1;function x2(e,t,n){if(td)return e(t,n);td=!0;try{return f2(e,t,n)}finally{td=!1,(ea!==null||ta!==null)&&(m2(),h2())}}function ks(e,t){var n=e.stateNode;if(n===null)return null;var o=mc(n);if(o===null)return null;n=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(A(231,t,typeof n));return n}var su=!1;if(Kn)try{var Ia={};Object.defineProperty(Ia,"passive",{get:function(){su=!0}}),window.addEventListener("test",Ia,Ia),window.removeEventListener("test",Ia,Ia)}catch{su=!1}function Z6(e,t,n,o,a,s,l,i,c){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(u){this.onError(u)}}var ps=!1,Ni=null,Ri=!1,lu=null,K6={onError:function(e){ps=!0,Ni=e}};function Y6(e,t,n,o,a,s,l,i,c){ps=!1,Ni=null,Z6.apply(K6,arguments)}function G6(e,t,n,o,a,s,l,i,c){if(Y6.apply(this,arguments),ps){if(ps){var d=Ni;ps=!1,Ni=null}else throw Error(A(198));Ri||(Ri=!0,lu=d)}}function mo(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function g2(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function cf(e){if(mo(e)!==e)throw Error(A(188))}function q6(e){var t=e.alternate;if(!t){if(t=mo(e),t===null)throw Error(A(188));return t!==e?null:e}for(var n=e,o=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(o=a.return,o!==null){n=o;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return cf(a),e;if(s===o)return cf(a),t;s=s.sibling}throw Error(A(188))}if(n.return!==o.return)n=a,o=s;else{for(var l=!1,i=a.child;i;){if(i===n){l=!0,n=a,o=s;break}if(i===o){l=!0,o=a,n=s;break}i=i.sibling}if(!l){for(i=s.child;i;){if(i===n){l=!0,n=s,o=a;break}if(i===o){l=!0,o=s,n=a;break}i=i.sibling}if(!l)throw Error(A(189))}}if(n.alternate!==o)throw Error(A(190))}if(n.tag!==3)throw Error(A(188));return n.stateNode.current===n?e:t}function v2(e){return e=q6(e),e!==null?b2(e):null}function b2(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=b2(e);if(t!==null)return t;e=e.sibling}return null}var y2=zt.unstable_scheduleCallback,df=zt.unstable_cancelCallback,X6=zt.unstable_shouldYield,Q6=zt.unstable_requestPaint,We=zt.unstable_now,J6=zt.unstable_getCurrentPriorityLevel,hp=zt.unstable_ImmediatePriority,j2=zt.unstable_UserBlockingPriority,Oi=zt.unstable_NormalPriority,e8=zt.unstable_LowPriority,S2=zt.unstable_IdlePriority,uc=null,En=null;function t8(e){if(En&&typeof En.onCommitFiberRoot=="function")try{En.onCommitFiberRoot(uc,e,void 0,(e.current.flags&128)===128)}catch{}}var hn=Math.clz32?Math.clz32:o8,n8=Math.log,r8=Math.LN2;function o8(e){return e>>>=0,e===0?32:31-(n8(e)/r8|0)|0}var Ml=64,Pl=4194304;function ns(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Li(e,t){var n=e.pendingLanes;if(n===0)return 0;var o=0,a=e.suspendedLanes,s=e.pingedLanes,l=n&268435455;if(l!==0){var i=l&~a;i!==0?o=ns(i):(s&=l,s!==0&&(o=ns(s)))}else l=n&~a,l!==0?o=ns(l):s!==0&&(o=ns(s));if(o===0)return 0;if(t!==0&&t!==o&&!(t&a)&&(a=o&-o,s=t&-t,a>=s||a===16&&(s&4194240)!==0))return t;if(o&4&&(o|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=o;0<t;)n=31-hn(t),a=1<<n,o|=e[n],t&=~a;return o}function a8(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function s8(e,t){for(var n=e.suspendedLanes,o=e.pingedLanes,a=e.expirationTimes,s=e.pendingLanes;0<s;){var l=31-hn(s),i=1<<l,c=a[l];c===-1?(!(i&n)||i&o)&&(a[l]=a8(i,t)):c<=t&&(e.expiredLanes|=i),s&=~i}}function iu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function C2(){var e=Ml;return Ml<<=1,!(Ml&4194240)&&(Ml=64),e}function nd(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Qs(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-hn(t),e[t]=n}function l8(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-hn(n),s=1<<a;t[a]=0,o[a]=-1,e[a]=-1,n&=~s}}function fp(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var o=31-hn(n),a=1<<o;a&t|e[o]&t&&(e[o]|=t),n&=~a}}var we=0;function w2(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var _2,mp,T2,k2,E2,cu=!1,Il=[],vr=null,br=null,yr=null,Es=new Map,Ns=new Map,fr=[],i8="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function uf(e,t){switch(e){case"focusin":case"focusout":vr=null;break;case"dragenter":case"dragleave":br=null;break;case"mouseover":case"mouseout":yr=null;break;case"pointerover":case"pointerout":Es.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ns.delete(t.pointerId)}}function za(e,t,n,o,a,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:o,nativeEvent:s,targetContainers:[a]},t!==null&&(t=el(t),t!==null&&mp(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function c8(e,t,n,o,a){switch(t){case"focusin":return vr=za(vr,e,t,n,o,a),!0;case"dragenter":return br=za(br,e,t,n,o,a),!0;case"mouseover":return yr=za(yr,e,t,n,o,a),!0;case"pointerover":var s=a.pointerId;return Es.set(s,za(Es.get(s)||null,e,t,n,o,a)),!0;case"gotpointercapture":return s=a.pointerId,Ns.set(s,za(Ns.get(s)||null,e,t,n,o,a)),!0}return!1}function N2(e){var t=Qr(e.target);if(t!==null){var n=mo(t);if(n!==null){if(t=n.tag,t===13){if(t=g2(n),t!==null){e.blockedOn=t,E2(e.priority,function(){T2(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function pi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=du(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var o=new n.constructor(n.type,n);ou=o,n.target.dispatchEvent(o),ou=null}else return t=el(n),t!==null&&mp(t),e.blockedOn=n,!1;t.shift()}return!0}function pf(e,t,n){pi(e)&&n.delete(t)}function d8(){cu=!1,vr!==null&&pi(vr)&&(vr=null),br!==null&&pi(br)&&(br=null),yr!==null&&pi(yr)&&(yr=null),Es.forEach(pf),Ns.forEach(pf)}function Fa(e,t){e.blockedOn===t&&(e.blockedOn=null,cu||(cu=!0,zt.unstable_scheduleCallback(zt.unstable_NormalPriority,d8)))}function Rs(e){function t(a){return Fa(a,e)}if(0<Il.length){Fa(Il[0],e);for(var n=1;n<Il.length;n++){var o=Il[n];o.blockedOn===e&&(o.blockedOn=null)}}for(vr!==null&&Fa(vr,e),br!==null&&Fa(br,e),yr!==null&&Fa(yr,e),Es.forEach(t),Ns.forEach(t),n=0;n<fr.length;n++)o=fr[n],o.blockedOn===e&&(o.blockedOn=null);for(;0<fr.length&&(n=fr[0],n.blockedOn===null);)N2(n),n.blockedOn===null&&fr.shift()}var na=Jn.ReactCurrentBatchConfig,Di=!0;function u8(e,t,n,o){var a=we,s=na.transition;na.transition=null;try{we=1,xp(e,t,n,o)}finally{we=a,na.transition=s}}function p8(e,t,n,o){var a=we,s=na.transition;na.transition=null;try{we=4,xp(e,t,n,o)}finally{we=a,na.transition=s}}function xp(e,t,n,o){if(Di){var a=du(e,t,n,o);if(a===null)pd(e,t,o,Bi,n),uf(e,o);else if(c8(a,e,t,n,o))o.stopPropagation();else if(uf(e,o),t&4&&-1<i8.indexOf(e)){for(;a!==null;){var s=el(a);if(s!==null&&_2(s),s=du(e,t,n,o),s===null&&pd(e,t,o,Bi,n),s===a)break;a=s}a!==null&&o.stopPropagation()}else pd(e,t,o,null,n)}}var Bi=null;function du(e,t,n,o){if(Bi=null,e=pp(o),e=Qr(e),e!==null)if(t=mo(e),t===null)e=null;else if(n=t.tag,n===13){if(e=g2(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Bi=e,null}function R2(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(J6()){case hp:return 1;case j2:return 4;case Oi:case e8:return 16;case S2:return 536870912;default:return 16}default:return 16}}var xr=null,gp=null,hi=null;function O2(){if(hi)return hi;var e,t=gp,n=t.length,o,a="value"in xr?xr.value:xr.textContent,s=a.length;for(e=0;e<n&&t[e]===a[e];e++);var l=n-e;for(o=1;o<=l&&t[n-o]===a[s-o];o++);return hi=a.slice(e,1<o?1-o:void 0)}function fi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function zl(){return!0}function hf(){return!1}function Ut(e){function t(n,o,a,s,l){this._reactName=n,this._targetInst=a,this.type=o,this.nativeEvent=s,this.target=l,this.currentTarget=null;for(var i in e)e.hasOwnProperty(i)&&(n=e[i],this[i]=n?n(s):s[i]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?zl:hf,this.isPropagationStopped=hf,this}return ze(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=zl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=zl)},persist:function(){},isPersistent:zl}),t}var ga={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vp=Ut(ga),Js=ze({},ga,{view:0,detail:0}),h8=Ut(Js),rd,od,Ua,pc=ze({},Js,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bp,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ua&&(Ua&&e.type==="mousemove"?(rd=e.screenX-Ua.screenX,od=e.screenY-Ua.screenY):od=rd=0,Ua=e),rd)},movementY:function(e){return"movementY"in e?e.movementY:od}}),ff=Ut(pc),f8=ze({},pc,{dataTransfer:0}),m8=Ut(f8),x8=ze({},Js,{relatedTarget:0}),ad=Ut(x8),g8=ze({},ga,{animationName:0,elapsedTime:0,pseudoElement:0}),v8=Ut(g8),b8=ze({},ga,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),y8=Ut(b8),j8=ze({},ga,{data:0}),mf=Ut(j8),S8={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},C8={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},w8={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _8(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=w8[e])?!!t[e]:!1}function bp(){return _8}var T8=ze({},Js,{key:function(e){if(e.key){var t=S8[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=fi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?C8[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bp,charCode:function(e){return e.type==="keypress"?fi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?fi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),k8=Ut(T8),E8=ze({},pc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xf=Ut(E8),N8=ze({},Js,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bp}),R8=Ut(N8),O8=ze({},ga,{propertyName:0,elapsedTime:0,pseudoElement:0}),L8=Ut(O8),D8=ze({},pc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),B8=Ut(D8),$8=[9,13,27,32],yp=Kn&&"CompositionEvent"in window,hs=null;Kn&&"documentMode"in document&&(hs=document.documentMode);var A8=Kn&&"TextEvent"in window&&!hs,L2=Kn&&(!yp||hs&&8<hs&&11>=hs),gf=String.fromCharCode(32),vf=!1;function D2(e,t){switch(e){case"keyup":return $8.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function B2(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Po=!1;function M8(e,t){switch(e){case"compositionend":return B2(t);case"keypress":return t.which!==32?null:(vf=!0,gf);case"textInput":return e=t.data,e===gf&&vf?null:e;default:return null}}function P8(e,t){if(Po)return e==="compositionend"||!yp&&D2(e,t)?(e=O2(),hi=gp=xr=null,Po=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return L2&&t.locale!=="ko"?null:t.data;default:return null}}var I8={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!I8[e.type]:t==="textarea"}function $2(e,t,n,o){p2(o),t=$i(t,"onChange"),0<t.length&&(n=new vp("onChange","change",null,n,o),e.push({event:n,listeners:t}))}var fs=null,Os=null;function z8(e){Z2(e,0)}function hc(e){var t=Fo(e);if(a2(t))return e}function F8(e,t){if(e==="change")return t}var A2=!1;if(Kn){var sd;if(Kn){var ld="oninput"in document;if(!ld){var yf=document.createElement("div");yf.setAttribute("oninput","return;"),ld=typeof yf.oninput=="function"}sd=ld}else sd=!1;A2=sd&&(!document.documentMode||9<document.documentMode)}function jf(){fs&&(fs.detachEvent("onpropertychange",M2),Os=fs=null)}function M2(e){if(e.propertyName==="value"&&hc(Os)){var t=[];$2(t,Os,e,pp(e)),x2(z8,t)}}function U8(e,t,n){e==="focusin"?(jf(),fs=t,Os=n,fs.attachEvent("onpropertychange",M2)):e==="focusout"&&jf()}function V8(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return hc(Os)}function H8(e,t){if(e==="click")return hc(t)}function W8(e,t){if(e==="input"||e==="change")return hc(t)}function Z8(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var mn=typeof Object.is=="function"?Object.is:Z8;function Ls(e,t){if(mn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var a=n[o];if(!Zd.call(t,a)||!mn(e[a],t[a]))return!1}return!0}function Sf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Cf(e,t){var n=Sf(e);e=0;for(var o;n;){if(n.nodeType===3){if(o=e+n.textContent.length,e<=t&&o>=t)return{node:n,offset:t-e};e=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Sf(n)}}function P2(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?P2(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function I2(){for(var e=window,t=Ei();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ei(e.document)}return t}function jp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function K8(e){var t=I2(),n=e.focusedElem,o=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&P2(n.ownerDocument.documentElement,n)){if(o!==null&&jp(n)){if(t=o.start,e=o.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,s=Math.min(o.start,a);o=o.end===void 0?s:Math.min(o.end,a),!e.extend&&s>o&&(a=o,o=s,s=a),a=Cf(n,s);var l=Cf(n,o);a&&l&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),s>o?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Y8=Kn&&"documentMode"in document&&11>=document.documentMode,Io=null,uu=null,ms=null,pu=!1;function wf(e,t,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;pu||Io==null||Io!==Ei(o)||(o=Io,"selectionStart"in o&&jp(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),ms&&Ls(ms,o)||(ms=o,o=$i(uu,"onSelect"),0<o.length&&(t=new vp("onSelect","select",null,t,n),e.push({event:t,listeners:o}),t.target=Io)))}function Fl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var zo={animationend:Fl("Animation","AnimationEnd"),animationiteration:Fl("Animation","AnimationIteration"),animationstart:Fl("Animation","AnimationStart"),transitionend:Fl("Transition","TransitionEnd")},id={},z2={};Kn&&(z2=document.createElement("div").style,"AnimationEvent"in window||(delete zo.animationend.animation,delete zo.animationiteration.animation,delete zo.animationstart.animation),"TransitionEvent"in window||delete zo.transitionend.transition);function fc(e){if(id[e])return id[e];if(!zo[e])return e;var t=zo[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in z2)return id[e]=t[n];return e}var F2=fc("animationend"),U2=fc("animationiteration"),V2=fc("animationstart"),H2=fc("transitionend"),W2=new Map,_f="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Lr(e,t){W2.set(e,t),fo(t,[e])}for(var cd=0;cd<_f.length;cd++){var dd=_f[cd],G8=dd.toLowerCase(),q8=dd[0].toUpperCase()+dd.slice(1);Lr(G8,"on"+q8)}Lr(F2,"onAnimationEnd");Lr(U2,"onAnimationIteration");Lr(V2,"onAnimationStart");Lr("dblclick","onDoubleClick");Lr("focusin","onFocus");Lr("focusout","onBlur");Lr(H2,"onTransitionEnd");la("onMouseEnter",["mouseout","mouseover"]);la("onMouseLeave",["mouseout","mouseover"]);la("onPointerEnter",["pointerout","pointerover"]);la("onPointerLeave",["pointerout","pointerover"]);fo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fo("onBeforeInput",["compositionend","keypress","textInput","paste"]);fo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var rs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),X8=new Set("cancel close invalid load scroll toggle".split(" ").concat(rs));function Tf(e,t,n){var o=e.type||"unknown-event";e.currentTarget=n,G6(o,t,void 0,e),e.currentTarget=null}function Z2(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var o=e[n],a=o.event;o=o.listeners;e:{var s=void 0;if(t)for(var l=o.length-1;0<=l;l--){var i=o[l],c=i.instance,d=i.currentTarget;if(i=i.listener,c!==s&&a.isPropagationStopped())break e;Tf(a,i,d),s=c}else for(l=0;l<o.length;l++){if(i=o[l],c=i.instance,d=i.currentTarget,i=i.listener,c!==s&&a.isPropagationStopped())break e;Tf(a,i,d),s=c}}}if(Ri)throw e=lu,Ri=!1,lu=null,e}function Ne(e,t){var n=t[gu];n===void 0&&(n=t[gu]=new Set);var o=e+"__bubble";n.has(o)||(K2(t,e,2,!1),n.add(o))}function ud(e,t,n){var o=0;t&&(o|=4),K2(n,e,o,t)}var Ul="_reactListening"+Math.random().toString(36).slice(2);function Ds(e){if(!e[Ul]){e[Ul]=!0,e2.forEach(function(n){n!=="selectionchange"&&(X8.has(n)||ud(n,!1,e),ud(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ul]||(t[Ul]=!0,ud("selectionchange",!1,t))}}function K2(e,t,n,o){switch(R2(t)){case 1:var a=u8;break;case 4:a=p8;break;default:a=xp}n=a.bind(null,t,n,e),a=void 0,!su||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),o?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function pd(e,t,n,o,a){var s=o;if(!(t&1)&&!(t&2)&&o!==null)e:for(;;){if(o===null)return;var l=o.tag;if(l===3||l===4){var i=o.stateNode.containerInfo;if(i===a||i.nodeType===8&&i.parentNode===a)break;if(l===4)for(l=o.return;l!==null;){var c=l.tag;if((c===3||c===4)&&(c=l.stateNode.containerInfo,c===a||c.nodeType===8&&c.parentNode===a))return;l=l.return}for(;i!==null;){if(l=Qr(i),l===null)return;if(c=l.tag,c===5||c===6){o=s=l;continue e}i=i.parentNode}}o=o.return}x2(function(){var d=s,u=pp(n),p=[];e:{var m=W2.get(e);if(m!==void 0){var b=vp,S=e;switch(e){case"keypress":if(fi(n)===0)break e;case"keydown":case"keyup":b=k8;break;case"focusin":S="focus",b=ad;break;case"focusout":S="blur",b=ad;break;case"beforeblur":case"afterblur":b=ad;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=ff;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=m8;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=R8;break;case F2:case U2:case V2:b=v8;break;case H2:b=L8;break;case"scroll":b=h8;break;case"wheel":b=B8;break;case"copy":case"cut":case"paste":b=y8;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=xf}var j=(t&4)!==0,_=!j&&e==="scroll",x=j?m!==null?m+"Capture":null:m;j=[];for(var h=d,f;h!==null;){f=h;var y=f.stateNode;if(f.tag===5&&y!==null&&(f=y,x!==null&&(y=ks(h,x),y!=null&&j.push(Bs(h,y,f)))),_)break;h=h.return}0<j.length&&(m=new b(m,S,null,n,u),p.push({event:m,listeners:j}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",m&&n!==ou&&(S=n.relatedTarget||n.fromElement)&&(Qr(S)||S[Yn]))break e;if((b||m)&&(m=u.window===u?u:(m=u.ownerDocument)?m.defaultView||m.parentWindow:window,b?(S=n.relatedTarget||n.toElement,b=d,S=S?Qr(S):null,S!==null&&(_=mo(S),S!==_||S.tag!==5&&S.tag!==6)&&(S=null)):(b=null,S=d),b!==S)){if(j=ff,y="onMouseLeave",x="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(j=xf,y="onPointerLeave",x="onPointerEnter",h="pointer"),_=b==null?m:Fo(b),f=S==null?m:Fo(S),m=new j(y,h+"leave",b,n,u),m.target=_,m.relatedTarget=f,y=null,Qr(u)===d&&(j=new j(x,h+"enter",S,n,u),j.target=f,j.relatedTarget=_,y=j),_=y,b&&S)t:{for(j=b,x=S,h=0,f=j;f;f=No(f))h++;for(f=0,y=x;y;y=No(y))f++;for(;0<h-f;)j=No(j),h--;for(;0<f-h;)x=No(x),f--;for(;h--;){if(j===x||x!==null&&j===x.alternate)break t;j=No(j),x=No(x)}j=null}else j=null;b!==null&&kf(p,m,b,j,!1),S!==null&&_!==null&&kf(p,_,S,j,!0)}}e:{if(m=d?Fo(d):window,b=m.nodeName&&m.nodeName.toLowerCase(),b==="select"||b==="input"&&m.type==="file")var C=F8;else if(bf(m))if(A2)C=W8;else{C=V8;var g=U8}else(b=m.nodeName)&&b.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(C=H8);if(C&&(C=C(e,d))){$2(p,C,n,u);break e}g&&g(e,m,d),e==="focusout"&&(g=m._wrapperState)&&g.controlled&&m.type==="number"&&Jd(m,"number",m.value)}switch(g=d?Fo(d):window,e){case"focusin":(bf(g)||g.contentEditable==="true")&&(Io=g,uu=d,ms=null);break;case"focusout":ms=uu=Io=null;break;case"mousedown":pu=!0;break;case"contextmenu":case"mouseup":case"dragend":pu=!1,wf(p,n,u);break;case"selectionchange":if(Y8)break;case"keydown":case"keyup":wf(p,n,u)}var w;if(yp)e:{switch(e){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else Po?D2(e,n)&&(k="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(L2&&n.locale!=="ko"&&(Po||k!=="onCompositionStart"?k==="onCompositionEnd"&&Po&&(w=O2()):(xr=u,gp="value"in xr?xr.value:xr.textContent,Po=!0)),g=$i(d,k),0<g.length&&(k=new mf(k,e,null,n,u),p.push({event:k,listeners:g}),w?k.data=w:(w=B2(n),w!==null&&(k.data=w)))),(w=A8?M8(e,n):P8(e,n))&&(d=$i(d,"onBeforeInput"),0<d.length&&(u=new mf("onBeforeInput","beforeinput",null,n,u),p.push({event:u,listeners:d}),u.data=w))}Z2(p,t)})}function Bs(e,t,n){return{instance:e,listener:t,currentTarget:n}}function $i(e,t){for(var n=t+"Capture",o=[];e!==null;){var a=e,s=a.stateNode;a.tag===5&&s!==null&&(a=s,s=ks(e,n),s!=null&&o.unshift(Bs(e,s,a)),s=ks(e,t),s!=null&&o.push(Bs(e,s,a))),e=e.return}return o}function No(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function kf(e,t,n,o,a){for(var s=t._reactName,l=[];n!==null&&n!==o;){var i=n,c=i.alternate,d=i.stateNode;if(c!==null&&c===o)break;i.tag===5&&d!==null&&(i=d,a?(c=ks(n,s),c!=null&&l.unshift(Bs(n,c,i))):a||(c=ks(n,s),c!=null&&l.push(Bs(n,c,i)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Q8=/\r\n?/g,J8=/\u0000|\uFFFD/g;function Ef(e){return(typeof e=="string"?e:""+e).replace(Q8,`
`).replace(J8,"")}function Vl(e,t,n){if(t=Ef(t),Ef(e)!==t&&n)throw Error(A(425))}function Ai(){}var hu=null,fu=null;function mu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var xu=typeof setTimeout=="function"?setTimeout:void 0,eb=typeof clearTimeout=="function"?clearTimeout:void 0,Nf=typeof Promise=="function"?Promise:void 0,tb=typeof queueMicrotask=="function"?queueMicrotask:typeof Nf<"u"?function(e){return Nf.resolve(null).then(e).catch(nb)}:xu;function nb(e){setTimeout(function(){throw e})}function hd(e,t){var n=t,o=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(o===0){e.removeChild(a),Rs(t);return}o--}else n!=="$"&&n!=="$?"&&n!=="$!"||o++;n=a}while(n);Rs(t)}function jr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Rf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var va=Math.random().toString(36).slice(2),Tn="__reactFiber$"+va,$s="__reactProps$"+va,Yn="__reactContainer$"+va,gu="__reactEvents$"+va,rb="__reactListeners$"+va,ob="__reactHandles$"+va;function Qr(e){var t=e[Tn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Yn]||n[Tn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Rf(e);e!==null;){if(n=e[Tn])return n;e=Rf(e)}return t}e=n,n=e.parentNode}return null}function el(e){return e=e[Tn]||e[Yn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Fo(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(A(33))}function mc(e){return e[$s]||null}var vu=[],Uo=-1;function Dr(e){return{current:e}}function Re(e){0>Uo||(e.current=vu[Uo],vu[Uo]=null,Uo--)}function ke(e,t){Uo++,vu[Uo]=e.current,e.current=t}var kr={},ft=Dr(kr),Ot=Dr(!1),ao=kr;function ia(e,t){var n=e.type.contextTypes;if(!n)return kr;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var a={},s;for(s in n)a[s]=t[s];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Lt(e){return e=e.childContextTypes,e!=null}function Mi(){Re(Ot),Re(ft)}function Of(e,t,n){if(ft.current!==kr)throw Error(A(168));ke(ft,t),ke(Ot,n)}function Y2(e,t,n){var o=e.stateNode;if(t=t.childContextTypes,typeof o.getChildContext!="function")return n;o=o.getChildContext();for(var a in o)if(!(a in t))throw Error(A(108,U6(e)||"Unknown",a));return ze({},n,o)}function Pi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||kr,ao=ft.current,ke(ft,e),ke(Ot,Ot.current),!0}function Lf(e,t,n){var o=e.stateNode;if(!o)throw Error(A(169));n?(e=Y2(e,t,ao),o.__reactInternalMemoizedMergedChildContext=e,Re(Ot),Re(ft),ke(ft,e)):Re(Ot),ke(Ot,n)}var In=null,xc=!1,fd=!1;function G2(e){In===null?In=[e]:In.push(e)}function ab(e){xc=!0,G2(e)}function Br(){if(!fd&&In!==null){fd=!0;var e=0,t=we;try{var n=In;for(we=1;e<n.length;e++){var o=n[e];do o=o(!0);while(o!==null)}In=null,xc=!1}catch(a){throw In!==null&&(In=In.slice(e+1)),y2(hp,Br),a}finally{we=t,fd=!1}}return null}var Vo=[],Ho=0,Ii=null,zi=0,Kt=[],Yt=0,so=null,Vn=1,Hn="";function Gr(e,t){Vo[Ho++]=zi,Vo[Ho++]=Ii,Ii=e,zi=t}function q2(e,t,n){Kt[Yt++]=Vn,Kt[Yt++]=Hn,Kt[Yt++]=so,so=e;var o=Vn;e=Hn;var a=32-hn(o)-1;o&=~(1<<a),n+=1;var s=32-hn(t)+a;if(30<s){var l=a-a%5;s=(o&(1<<l)-1).toString(32),o>>=l,a-=l,Vn=1<<32-hn(t)+a|n<<a|o,Hn=s+e}else Vn=1<<s|n<<a|o,Hn=e}function Sp(e){e.return!==null&&(Gr(e,1),q2(e,1,0))}function Cp(e){for(;e===Ii;)Ii=Vo[--Ho],Vo[Ho]=null,zi=Vo[--Ho],Vo[Ho]=null;for(;e===so;)so=Kt[--Yt],Kt[Yt]=null,Hn=Kt[--Yt],Kt[Yt]=null,Vn=Kt[--Yt],Kt[Yt]=null}var Pt=null,Mt=null,$e=!1,pn=null;function X2(e,t){var n=Gt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Df(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Pt=e,Mt=jr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Pt=e,Mt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=so!==null?{id:Vn,overflow:Hn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Gt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Pt=e,Mt=null,!0):!1;default:return!1}}function bu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function yu(e){if($e){var t=Mt;if(t){var n=t;if(!Df(e,t)){if(bu(e))throw Error(A(418));t=jr(n.nextSibling);var o=Pt;t&&Df(e,t)?X2(o,n):(e.flags=e.flags&-4097|2,$e=!1,Pt=e)}}else{if(bu(e))throw Error(A(418));e.flags=e.flags&-4097|2,$e=!1,Pt=e}}}function Bf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Pt=e}function Hl(e){if(e!==Pt)return!1;if(!$e)return Bf(e),$e=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!mu(e.type,e.memoizedProps)),t&&(t=Mt)){if(bu(e))throw Q2(),Error(A(418));for(;t;)X2(e,t),t=jr(t.nextSibling)}if(Bf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(A(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Mt=jr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Mt=null}}else Mt=Pt?jr(e.stateNode.nextSibling):null;return!0}function Q2(){for(var e=Mt;e;)e=jr(e.nextSibling)}function ca(){Mt=Pt=null,$e=!1}function wp(e){pn===null?pn=[e]:pn.push(e)}var sb=Jn.ReactCurrentBatchConfig;function cn(e,t){if(e&&e.defaultProps){t=ze({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Fi=Dr(null),Ui=null,Wo=null,_p=null;function Tp(){_p=Wo=Ui=null}function kp(e){var t=Fi.current;Re(Fi),e._currentValue=t}function ju(e,t,n){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===n)break;e=e.return}}function ra(e,t){Ui=e,_p=Wo=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Rt=!0),e.firstContext=null)}function Qt(e){var t=e._currentValue;if(_p!==e)if(e={context:e,memoizedValue:t,next:null},Wo===null){if(Ui===null)throw Error(A(308));Wo=e,Ui.dependencies={lanes:0,firstContext:e}}else Wo=Wo.next=e;return t}var Jr=null;function Ep(e){Jr===null?Jr=[e]:Jr.push(e)}function J2(e,t,n,o){var a=t.interleaved;return a===null?(n.next=n,Ep(t)):(n.next=a.next,a.next=n),t.interleaved=n,Gn(e,o)}function Gn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var pr=!1;function Np(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ex(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Wn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Sr(e,t,n){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,ye&2){var a=o.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),o.pending=t,Gn(e,n)}return a=o.interleaved,a===null?(t.next=t,Ep(o)):(t.next=a.next,a.next=t),o.interleaved=t,Gn(e,n)}function mi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,fp(e,n)}}function $f(e,t){var n=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var a=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?a=s=l:s=s.next=l,n=n.next}while(n!==null);s===null?a=s=t:s=s.next=t}else a=s=t;n={baseState:o.baseState,firstBaseUpdate:a,lastBaseUpdate:s,shared:o.shared,effects:o.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Vi(e,t,n,o){var a=e.updateQueue;pr=!1;var s=a.firstBaseUpdate,l=a.lastBaseUpdate,i=a.shared.pending;if(i!==null){a.shared.pending=null;var c=i,d=c.next;c.next=null,l===null?s=d:l.next=d,l=c;var u=e.alternate;u!==null&&(u=u.updateQueue,i=u.lastBaseUpdate,i!==l&&(i===null?u.firstBaseUpdate=d:i.next=d,u.lastBaseUpdate=c))}if(s!==null){var p=a.baseState;l=0,u=d=c=null,i=s;do{var m=i.lane,b=i.eventTime;if((o&m)===m){u!==null&&(u=u.next={eventTime:b,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null});e:{var S=e,j=i;switch(m=t,b=n,j.tag){case 1:if(S=j.payload,typeof S=="function"){p=S.call(b,p,m);break e}p=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=j.payload,m=typeof S=="function"?S.call(b,p,m):S,m==null)break e;p=ze({},p,m);break e;case 2:pr=!0}}i.callback!==null&&i.lane!==0&&(e.flags|=64,m=a.effects,m===null?a.effects=[i]:m.push(i))}else b={eventTime:b,lane:m,tag:i.tag,payload:i.payload,callback:i.callback,next:null},u===null?(d=u=b,c=p):u=u.next=b,l|=m;if(i=i.next,i===null){if(i=a.shared.pending,i===null)break;m=i,i=m.next,m.next=null,a.lastBaseUpdate=m,a.shared.pending=null}}while(1);if(u===null&&(c=p),a.baseState=c,a.firstBaseUpdate=d,a.lastBaseUpdate=u,t=a.shared.interleaved,t!==null){a=t;do l|=a.lane,a=a.next;while(a!==t)}else s===null&&(a.shared.lanes=0);io|=l,e.lanes=l,e.memoizedState=p}}function Af(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var o=e[t],a=o.callback;if(a!==null){if(o.callback=null,o=n,typeof a!="function")throw Error(A(191,a));a.call(o)}}}var tx=new J1.Component().refs;function Su(e,t,n,o){t=e.memoizedState,n=n(o,t),n=n==null?t:ze({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var gc={isMounted:function(e){return(e=e._reactInternals)?mo(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var o=bt(),a=wr(e),s=Wn(o,a);s.payload=t,n!=null&&(s.callback=n),t=Sr(e,s,a),t!==null&&(fn(t,e,a,o),mi(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var o=bt(),a=wr(e),s=Wn(o,a);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Sr(e,s,a),t!==null&&(fn(t,e,a,o),mi(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=bt(),o=wr(e),a=Wn(n,o);a.tag=2,t!=null&&(a.callback=t),t=Sr(e,a,o),t!==null&&(fn(t,e,o,n),mi(t,e,o))}};function Mf(e,t,n,o,a,s,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,s,l):t.prototype&&t.prototype.isPureReactComponent?!Ls(n,o)||!Ls(a,s):!0}function nx(e,t,n){var o=!1,a=kr,s=t.contextType;return typeof s=="object"&&s!==null?s=Qt(s):(a=Lt(t)?ao:ft.current,o=t.contextTypes,s=(o=o!=null)?ia(e,a):kr),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=gc,e.stateNode=t,t._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=s),t}function Pf(e,t,n,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,o),t.state!==e&&gc.enqueueReplaceState(t,t.state,null)}function Cu(e,t,n,o){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs=tx,Np(e);var s=t.contextType;typeof s=="object"&&s!==null?a.context=Qt(s):(s=Lt(t)?ao:ft.current,a.context=ia(e,s)),a.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Su(e,t,s,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&gc.enqueueReplaceState(a,a.state,null),Vi(e,n,a,o),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function Va(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(A(309));var o=n.stateNode}if(!o)throw Error(A(147,e));var a=o,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(l){var i=a.refs;i===tx&&(i=a.refs={}),l===null?delete i[s]:i[s]=l},t._stringRef=s,t)}if(typeof e!="string")throw Error(A(284));if(!n._owner)throw Error(A(290,e))}return e}function Wl(e,t){throw e=Object.prototype.toString.call(t),Error(A(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function If(e){var t=e._init;return t(e._payload)}function rx(e){function t(x,h){if(e){var f=x.deletions;f===null?(x.deletions=[h],x.flags|=16):f.push(h)}}function n(x,h){if(!e)return null;for(;h!==null;)t(x,h),h=h.sibling;return null}function o(x,h){for(x=new Map;h!==null;)h.key!==null?x.set(h.key,h):x.set(h.index,h),h=h.sibling;return x}function a(x,h){return x=_r(x,h),x.index=0,x.sibling=null,x}function s(x,h,f){return x.index=f,e?(f=x.alternate,f!==null?(f=f.index,f<h?(x.flags|=2,h):f):(x.flags|=2,h)):(x.flags|=1048576,h)}function l(x){return e&&x.alternate===null&&(x.flags|=2),x}function i(x,h,f,y){return h===null||h.tag!==6?(h=jd(f,x.mode,y),h.return=x,h):(h=a(h,f),h.return=x,h)}function c(x,h,f,y){var C=f.type;return C===Mo?u(x,h,f.props.children,y,f.key):h!==null&&(h.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===ur&&If(C)===h.type)?(y=a(h,f.props),y.ref=Va(x,h,f),y.return=x,y):(y=ji(f.type,f.key,f.props,null,x.mode,y),y.ref=Va(x,h,f),y.return=x,y)}function d(x,h,f,y){return h===null||h.tag!==4||h.stateNode.containerInfo!==f.containerInfo||h.stateNode.implementation!==f.implementation?(h=Sd(f,x.mode,y),h.return=x,h):(h=a(h,f.children||[]),h.return=x,h)}function u(x,h,f,y,C){return h===null||h.tag!==7?(h=oo(f,x.mode,y,C),h.return=x,h):(h=a(h,f),h.return=x,h)}function p(x,h,f){if(typeof h=="string"&&h!==""||typeof h=="number")return h=jd(""+h,x.mode,f),h.return=x,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Bl:return f=ji(h.type,h.key,h.props,null,x.mode,f),f.ref=Va(x,null,h),f.return=x,f;case Ao:return h=Sd(h,x.mode,f),h.return=x,h;case ur:var y=h._init;return p(x,y(h._payload),f)}if(ts(h)||Pa(h))return h=oo(h,x.mode,f,null),h.return=x,h;Wl(x,h)}return null}function m(x,h,f,y){var C=h!==null?h.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return C!==null?null:i(x,h,""+f,y);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Bl:return f.key===C?c(x,h,f,y):null;case Ao:return f.key===C?d(x,h,f,y):null;case ur:return C=f._init,m(x,h,C(f._payload),y)}if(ts(f)||Pa(f))return C!==null?null:u(x,h,f,y,null);Wl(x,f)}return null}function b(x,h,f,y,C){if(typeof y=="string"&&y!==""||typeof y=="number")return x=x.get(f)||null,i(h,x,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Bl:return x=x.get(y.key===null?f:y.key)||null,c(h,x,y,C);case Ao:return x=x.get(y.key===null?f:y.key)||null,d(h,x,y,C);case ur:var g=y._init;return b(x,h,f,g(y._payload),C)}if(ts(y)||Pa(y))return x=x.get(f)||null,u(h,x,y,C,null);Wl(h,y)}return null}function S(x,h,f,y){for(var C=null,g=null,w=h,k=h=0,E=null;w!==null&&k<f.length;k++){w.index>k?(E=w,w=null):E=w.sibling;var L=m(x,w,f[k],y);if(L===null){w===null&&(w=E);break}e&&w&&L.alternate===null&&t(x,w),h=s(L,h,k),g===null?C=L:g.sibling=L,g=L,w=E}if(k===f.length)return n(x,w),$e&&Gr(x,k),C;if(w===null){for(;k<f.length;k++)w=p(x,f[k],y),w!==null&&(h=s(w,h,k),g===null?C=w:g.sibling=w,g=w);return $e&&Gr(x,k),C}for(w=o(x,w);k<f.length;k++)E=b(w,x,k,f[k],y),E!==null&&(e&&E.alternate!==null&&w.delete(E.key===null?k:E.key),h=s(E,h,k),g===null?C=E:g.sibling=E,g=E);return e&&w.forEach(function($){return t(x,$)}),$e&&Gr(x,k),C}function j(x,h,f,y){var C=Pa(f);if(typeof C!="function")throw Error(A(150));if(f=C.call(f),f==null)throw Error(A(151));for(var g=C=null,w=h,k=h=0,E=null,L=f.next();w!==null&&!L.done;k++,L=f.next()){w.index>k?(E=w,w=null):E=w.sibling;var $=m(x,w,L.value,y);if($===null){w===null&&(w=E);break}e&&w&&$.alternate===null&&t(x,w),h=s($,h,k),g===null?C=$:g.sibling=$,g=$,w=E}if(L.done)return n(x,w),$e&&Gr(x,k),C;if(w===null){for(;!L.done;k++,L=f.next())L=p(x,L.value,y),L!==null&&(h=s(L,h,k),g===null?C=L:g.sibling=L,g=L);return $e&&Gr(x,k),C}for(w=o(x,w);!L.done;k++,L=f.next())L=b(w,x,k,L.value,y),L!==null&&(e&&L.alternate!==null&&w.delete(L.key===null?k:L.key),h=s(L,h,k),g===null?C=L:g.sibling=L,g=L);return e&&w.forEach(function(K){return t(x,K)}),$e&&Gr(x,k),C}function _(x,h,f,y){if(typeof f=="object"&&f!==null&&f.type===Mo&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case Bl:e:{for(var C=f.key,g=h;g!==null;){if(g.key===C){if(C=f.type,C===Mo){if(g.tag===7){n(x,g.sibling),h=a(g,f.props.children),h.return=x,x=h;break e}}else if(g.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===ur&&If(C)===g.type){n(x,g.sibling),h=a(g,f.props),h.ref=Va(x,g,f),h.return=x,x=h;break e}n(x,g);break}else t(x,g);g=g.sibling}f.type===Mo?(h=oo(f.props.children,x.mode,y,f.key),h.return=x,x=h):(y=ji(f.type,f.key,f.props,null,x.mode,y),y.ref=Va(x,h,f),y.return=x,x=y)}return l(x);case Ao:e:{for(g=f.key;h!==null;){if(h.key===g)if(h.tag===4&&h.stateNode.containerInfo===f.containerInfo&&h.stateNode.implementation===f.implementation){n(x,h.sibling),h=a(h,f.children||[]),h.return=x,x=h;break e}else{n(x,h);break}else t(x,h);h=h.sibling}h=Sd(f,x.mode,y),h.return=x,x=h}return l(x);case ur:return g=f._init,_(x,h,g(f._payload),y)}if(ts(f))return S(x,h,f,y);if(Pa(f))return j(x,h,f,y);Wl(x,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,h!==null&&h.tag===6?(n(x,h.sibling),h=a(h,f),h.return=x,x=h):(n(x,h),h=jd(f,x.mode,y),h.return=x,x=h),l(x)):n(x,h)}return _}var da=rx(!0),ox=rx(!1),tl={},Nn=Dr(tl),As=Dr(tl),Ms=Dr(tl);function eo(e){if(e===tl)throw Error(A(174));return e}function Rp(e,t){switch(ke(Ms,t),ke(As,e),ke(Nn,tl),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:tu(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=tu(t,e)}Re(Nn),ke(Nn,t)}function ua(){Re(Nn),Re(As),Re(Ms)}function ax(e){eo(Ms.current);var t=eo(Nn.current),n=tu(t,e.type);t!==n&&(ke(As,e),ke(Nn,n))}function Op(e){As.current===e&&(Re(Nn),Re(As))}var Pe=Dr(0);function Hi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var md=[];function Lp(){for(var e=0;e<md.length;e++)md[e]._workInProgressVersionPrimary=null;md.length=0}var xi=Jn.ReactCurrentDispatcher,xd=Jn.ReactCurrentBatchConfig,lo=0,Ie=null,qe=null,nt=null,Wi=!1,xs=!1,Ps=0,lb=0;function ut(){throw Error(A(321))}function Dp(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!mn(e[n],t[n]))return!1;return!0}function Bp(e,t,n,o,a,s){if(lo=s,Ie=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,xi.current=e===null||e.memoizedState===null?ub:pb,e=n(o,a),xs){s=0;do{if(xs=!1,Ps=0,25<=s)throw Error(A(301));s+=1,nt=qe=null,t.updateQueue=null,xi.current=hb,e=n(o,a)}while(xs)}if(xi.current=Zi,t=qe!==null&&qe.next!==null,lo=0,nt=qe=Ie=null,Wi=!1,t)throw Error(A(300));return e}function $p(){var e=Ps!==0;return Ps=0,e}function Cn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nt===null?Ie.memoizedState=nt=e:nt=nt.next=e,nt}function Jt(){if(qe===null){var e=Ie.alternate;e=e!==null?e.memoizedState:null}else e=qe.next;var t=nt===null?Ie.memoizedState:nt.next;if(t!==null)nt=t,qe=e;else{if(e===null)throw Error(A(310));qe=e,e={memoizedState:qe.memoizedState,baseState:qe.baseState,baseQueue:qe.baseQueue,queue:qe.queue,next:null},nt===null?Ie.memoizedState=nt=e:nt=nt.next=e}return nt}function Is(e,t){return typeof t=="function"?t(e):t}function gd(e){var t=Jt(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var o=qe,a=o.baseQueue,s=n.pending;if(s!==null){if(a!==null){var l=a.next;a.next=s.next,s.next=l}o.baseQueue=a=s,n.pending=null}if(a!==null){s=a.next,o=o.baseState;var i=l=null,c=null,d=s;do{var u=d.lane;if((lo&u)===u)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),o=d.hasEagerState?d.eagerState:e(o,d.action);else{var p={lane:u,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(i=c=p,l=o):c=c.next=p,Ie.lanes|=u,io|=u}d=d.next}while(d!==null&&d!==s);c===null?l=o:c.next=i,mn(o,t.memoizedState)||(Rt=!0),t.memoizedState=o,t.baseState=l,t.baseQueue=c,n.lastRenderedState=o}if(e=n.interleaved,e!==null){a=e;do s=a.lane,Ie.lanes|=s,io|=s,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function vd(e){var t=Jt(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var o=n.dispatch,a=n.pending,s=t.memoizedState;if(a!==null){n.pending=null;var l=a=a.next;do s=e(s,l.action),l=l.next;while(l!==a);mn(s,t.memoizedState)||(Rt=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,o]}function sx(){}function lx(e,t){var n=Ie,o=Jt(),a=t(),s=!mn(o.memoizedState,a);if(s&&(o.memoizedState=a,Rt=!0),o=o.queue,Ap(dx.bind(null,n,o,e),[e]),o.getSnapshot!==t||s||nt!==null&&nt.memoizedState.tag&1){if(n.flags|=2048,zs(9,cx.bind(null,n,o,a,t),void 0,null),ot===null)throw Error(A(349));lo&30||ix(n,t,a)}return a}function ix(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ie.updateQueue,t===null?(t={lastEffect:null,stores:null},Ie.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function cx(e,t,n,o){t.value=n,t.getSnapshot=o,ux(t)&&px(e)}function dx(e,t,n){return n(function(){ux(t)&&px(e)})}function ux(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!mn(e,n)}catch{return!0}}function px(e){var t=Gn(e,1);t!==null&&fn(t,e,1,-1)}function zf(e){var t=Cn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Is,lastRenderedState:e},t.queue=e,e=e.dispatch=db.bind(null,Ie,e),[t.memoizedState,e]}function zs(e,t,n,o){return e={tag:e,create:t,destroy:n,deps:o,next:null},t=Ie.updateQueue,t===null?(t={lastEffect:null,stores:null},Ie.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(o=n.next,n.next=e,e.next=o,t.lastEffect=e)),e}function hx(){return Jt().memoizedState}function gi(e,t,n,o){var a=Cn();Ie.flags|=e,a.memoizedState=zs(1|t,n,void 0,o===void 0?null:o)}function vc(e,t,n,o){var a=Jt();o=o===void 0?null:o;var s=void 0;if(qe!==null){var l=qe.memoizedState;if(s=l.destroy,o!==null&&Dp(o,l.deps)){a.memoizedState=zs(t,n,s,o);return}}Ie.flags|=e,a.memoizedState=zs(1|t,n,s,o)}function Ff(e,t){return gi(8390656,8,e,t)}function Ap(e,t){return vc(2048,8,e,t)}function fx(e,t){return vc(4,2,e,t)}function mx(e,t){return vc(4,4,e,t)}function xx(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function gx(e,t,n){return n=n!=null?n.concat([e]):null,vc(4,4,xx.bind(null,t,e),n)}function Mp(){}function vx(e,t){var n=Jt();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&Dp(t,o[1])?o[0]:(n.memoizedState=[e,t],e)}function bx(e,t){var n=Jt();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&Dp(t,o[1])?o[0]:(e=e(),n.memoizedState=[e,t],e)}function yx(e,t,n){return lo&21?(mn(n,t)||(n=C2(),Ie.lanes|=n,io|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Rt=!0),e.memoizedState=n)}function ib(e,t){var n=we;we=n!==0&&4>n?n:4,e(!0);var o=xd.transition;xd.transition={};try{e(!1),t()}finally{we=n,xd.transition=o}}function jx(){return Jt().memoizedState}function cb(e,t,n){var o=wr(e);if(n={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null},Sx(e))Cx(t,n);else if(n=J2(e,t,n,o),n!==null){var a=bt();fn(n,e,o,a),wx(n,t,o)}}function db(e,t,n){var o=wr(e),a={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null};if(Sx(e))Cx(t,a);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var l=t.lastRenderedState,i=s(l,n);if(a.hasEagerState=!0,a.eagerState=i,mn(i,l)){var c=t.interleaved;c===null?(a.next=a,Ep(t)):(a.next=c.next,c.next=a),t.interleaved=a;return}}catch{}finally{}n=J2(e,t,a,o),n!==null&&(a=bt(),fn(n,e,o,a),wx(n,t,o))}}function Sx(e){var t=e.alternate;return e===Ie||t!==null&&t===Ie}function Cx(e,t){xs=Wi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function wx(e,t,n){if(n&4194240){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,fp(e,n)}}var Zi={readContext:Qt,useCallback:ut,useContext:ut,useEffect:ut,useImperativeHandle:ut,useInsertionEffect:ut,useLayoutEffect:ut,useMemo:ut,useReducer:ut,useRef:ut,useState:ut,useDebugValue:ut,useDeferredValue:ut,useTransition:ut,useMutableSource:ut,useSyncExternalStore:ut,useId:ut,unstable_isNewReconciler:!1},ub={readContext:Qt,useCallback:function(e,t){return Cn().memoizedState=[e,t===void 0?null:t],e},useContext:Qt,useEffect:Ff,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,gi(4194308,4,xx.bind(null,t,e),n)},useLayoutEffect:function(e,t){return gi(4194308,4,e,t)},useInsertionEffect:function(e,t){return gi(4,2,e,t)},useMemo:function(e,t){var n=Cn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var o=Cn();return t=n!==void 0?n(t):t,o.memoizedState=o.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},o.queue=e,e=e.dispatch=cb.bind(null,Ie,e),[o.memoizedState,e]},useRef:function(e){var t=Cn();return e={current:e},t.memoizedState=e},useState:zf,useDebugValue:Mp,useDeferredValue:function(e){return Cn().memoizedState=e},useTransition:function(){var e=zf(!1),t=e[0];return e=ib.bind(null,e[1]),Cn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var o=Ie,a=Cn();if($e){if(n===void 0)throw Error(A(407));n=n()}else{if(n=t(),ot===null)throw Error(A(349));lo&30||ix(o,t,n)}a.memoizedState=n;var s={value:n,getSnapshot:t};return a.queue=s,Ff(dx.bind(null,o,s,e),[e]),o.flags|=2048,zs(9,cx.bind(null,o,s,n,t),void 0,null),n},useId:function(){var e=Cn(),t=ot.identifierPrefix;if($e){var n=Hn,o=Vn;n=(o&~(1<<32-hn(o)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ps++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=lb++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},pb={readContext:Qt,useCallback:vx,useContext:Qt,useEffect:Ap,useImperativeHandle:gx,useInsertionEffect:fx,useLayoutEffect:mx,useMemo:bx,useReducer:gd,useRef:hx,useState:function(){return gd(Is)},useDebugValue:Mp,useDeferredValue:function(e){var t=Jt();return yx(t,qe.memoizedState,e)},useTransition:function(){var e=gd(Is)[0],t=Jt().memoizedState;return[e,t]},useMutableSource:sx,useSyncExternalStore:lx,useId:jx,unstable_isNewReconciler:!1},hb={readContext:Qt,useCallback:vx,useContext:Qt,useEffect:Ap,useImperativeHandle:gx,useInsertionEffect:fx,useLayoutEffect:mx,useMemo:bx,useReducer:vd,useRef:hx,useState:function(){return vd(Is)},useDebugValue:Mp,useDeferredValue:function(e){var t=Jt();return qe===null?t.memoizedState=e:yx(t,qe.memoizedState,e)},useTransition:function(){var e=vd(Is)[0],t=Jt().memoizedState;return[e,t]},useMutableSource:sx,useSyncExternalStore:lx,useId:jx,unstable_isNewReconciler:!1};function pa(e,t){try{var n="",o=t;do n+=F6(o),o=o.return;while(o);var a=n}catch(s){a=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:a,digest:null}}function bd(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function wu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var fb=typeof WeakMap=="function"?WeakMap:Map;function _x(e,t,n){n=Wn(-1,n),n.tag=3,n.payload={element:null};var o=t.value;return n.callback=function(){Yi||(Yi=!0,Bu=o),wu(e,t)},n}function Tx(e,t,n){n=Wn(-1,n),n.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var a=t.value;n.payload=function(){return o(a)},n.callback=function(){wu(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){wu(e,t),typeof o!="function"&&(Cr===null?Cr=new Set([this]):Cr.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Uf(e,t,n){var o=e.pingCache;if(o===null){o=e.pingCache=new fb;var a=new Set;o.set(t,a)}else a=o.get(t),a===void 0&&(a=new Set,o.set(t,a));a.has(n)||(a.add(n),e=Eb.bind(null,e,t,n),t.then(e,e))}function Vf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Hf(e,t,n,o,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Wn(-1,1),t.tag=2,Sr(n,t,1))),n.lanes|=1),e)}var mb=Jn.ReactCurrentOwner,Rt=!1;function vt(e,t,n,o){t.child=e===null?ox(t,null,n,o):da(t,e.child,n,o)}function Wf(e,t,n,o,a){n=n.render;var s=t.ref;return ra(t,a),o=Bp(e,t,n,o,s,a),n=$p(),e!==null&&!Rt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,qn(e,t,a)):($e&&n&&Sp(t),t.flags|=1,vt(e,t,o,a),t.child)}function Zf(e,t,n,o,a){if(e===null){var s=n.type;return typeof s=="function"&&!Wp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,kx(e,t,s,o,a)):(e=ji(n.type,null,o,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&a)){var l=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ls,n(l,o)&&e.ref===t.ref)return qn(e,t,a)}return t.flags|=1,e=_r(s,o),e.ref=t.ref,e.return=t,t.child=e}function kx(e,t,n,o,a){if(e!==null){var s=e.memoizedProps;if(Ls(s,o)&&e.ref===t.ref)if(Rt=!1,t.pendingProps=o=s,(e.lanes&a)!==0)e.flags&131072&&(Rt=!0);else return t.lanes=e.lanes,qn(e,t,a)}return _u(e,t,n,o,a)}function Ex(e,t,n){var o=t.pendingProps,a=o.children,s=e!==null?e.memoizedState:null;if(o.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ke(Ko,$t),$t|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ke(Ko,$t),$t|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=s!==null?s.baseLanes:n,ke(Ko,$t),$t|=o}else s!==null?(o=s.baseLanes|n,t.memoizedState=null):o=n,ke(Ko,$t),$t|=o;return vt(e,t,a,n),t.child}function Nx(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function _u(e,t,n,o,a){var s=Lt(n)?ao:ft.current;return s=ia(t,s),ra(t,a),n=Bp(e,t,n,o,s,a),o=$p(),e!==null&&!Rt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,qn(e,t,a)):($e&&o&&Sp(t),t.flags|=1,vt(e,t,n,a),t.child)}function Kf(e,t,n,o,a){if(Lt(n)){var s=!0;Pi(t)}else s=!1;if(ra(t,a),t.stateNode===null)vi(e,t),nx(t,n,o),Cu(t,n,o,a),o=!0;else if(e===null){var l=t.stateNode,i=t.memoizedProps;l.props=i;var c=l.context,d=n.contextType;typeof d=="object"&&d!==null?d=Qt(d):(d=Lt(n)?ao:ft.current,d=ia(t,d));var u=n.getDerivedStateFromProps,p=typeof u=="function"||typeof l.getSnapshotBeforeUpdate=="function";p||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(i!==o||c!==d)&&Pf(t,l,o,d),pr=!1;var m=t.memoizedState;l.state=m,Vi(t,o,l,a),c=t.memoizedState,i!==o||m!==c||Ot.current||pr?(typeof u=="function"&&(Su(t,n,u,o),c=t.memoizedState),(i=pr||Mf(t,n,i,o,m,c,d))?(p||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=c),l.props=o,l.state=c,l.context=d,o=i):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{l=t.stateNode,ex(e,t),i=t.memoizedProps,d=t.type===t.elementType?i:cn(t.type,i),l.props=d,p=t.pendingProps,m=l.context,c=n.contextType,typeof c=="object"&&c!==null?c=Qt(c):(c=Lt(n)?ao:ft.current,c=ia(t,c));var b=n.getDerivedStateFromProps;(u=typeof b=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(i!==p||m!==c)&&Pf(t,l,o,c),pr=!1,m=t.memoizedState,l.state=m,Vi(t,o,l,a);var S=t.memoizedState;i!==p||m!==S||Ot.current||pr?(typeof b=="function"&&(Su(t,n,b,o),S=t.memoizedState),(d=pr||Mf(t,n,d,o,m,S,c)||!1)?(u||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(o,S,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(o,S,c)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||i===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=S),l.props=o,l.state=S,l.context=c,o=d):(typeof l.componentDidUpdate!="function"||i===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),o=!1)}return Tu(e,t,n,o,s,a)}function Tu(e,t,n,o,a,s){Nx(e,t);var l=(t.flags&128)!==0;if(!o&&!l)return a&&Lf(t,n,!1),qn(e,t,s);o=t.stateNode,mb.current=t;var i=l&&typeof n.getDerivedStateFromError!="function"?null:o.render();return t.flags|=1,e!==null&&l?(t.child=da(t,e.child,null,s),t.child=da(t,null,i,s)):vt(e,t,i,s),t.memoizedState=o.state,a&&Lf(t,n,!0),t.child}function Rx(e){var t=e.stateNode;t.pendingContext?Of(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Of(e,t.context,!1),Rp(e,t.containerInfo)}function Yf(e,t,n,o,a){return ca(),wp(a),t.flags|=256,vt(e,t,n,o),t.child}var ku={dehydrated:null,treeContext:null,retryLane:0};function Eu(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ox(e,t,n){var o=t.pendingProps,a=Pe.current,s=!1,l=(t.flags&128)!==0,i;if((i=l)||(i=e!==null&&e.memoizedState===null?!1:(a&2)!==0),i?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),ke(Pe,a&1),e===null)return yu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=o.children,e=o.fallback,s?(o=t.mode,s=t.child,l={mode:"hidden",children:l},!(o&1)&&s!==null?(s.childLanes=0,s.pendingProps=l):s=jc(l,o,0,null),e=oo(e,o,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Eu(n),t.memoizedState=ku,e):Pp(t,l));if(a=e.memoizedState,a!==null&&(i=a.dehydrated,i!==null))return xb(e,t,l,o,i,a,n);if(s){s=o.fallback,l=t.mode,a=e.child,i=a.sibling;var c={mode:"hidden",children:o.children};return!(l&1)&&t.child!==a?(o=t.child,o.childLanes=0,o.pendingProps=c,t.deletions=null):(o=_r(a,c),o.subtreeFlags=a.subtreeFlags&14680064),i!==null?s=_r(i,s):(s=oo(s,l,n,null),s.flags|=2),s.return=t,o.return=t,o.sibling=s,t.child=o,o=s,s=t.child,l=e.child.memoizedState,l=l===null?Eu(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=e.childLanes&~n,t.memoizedState=ku,o}return s=e.child,e=s.sibling,o=_r(s,{mode:"visible",children:o.children}),!(t.mode&1)&&(o.lanes=n),o.return=t,o.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=o,t.memoizedState=null,o}function Pp(e,t){return t=jc({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Zl(e,t,n,o){return o!==null&&wp(o),da(t,e.child,null,n),e=Pp(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function xb(e,t,n,o,a,s,l){if(n)return t.flags&256?(t.flags&=-257,o=bd(Error(A(422))),Zl(e,t,l,o)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=o.fallback,a=t.mode,o=jc({mode:"visible",children:o.children},a,0,null),s=oo(s,a,l,null),s.flags|=2,o.return=t,s.return=t,o.sibling=s,t.child=o,t.mode&1&&da(t,e.child,null,l),t.child.memoizedState=Eu(l),t.memoizedState=ku,s);if(!(t.mode&1))return Zl(e,t,l,null);if(a.data==="$!"){if(o=a.nextSibling&&a.nextSibling.dataset,o)var i=o.dgst;return o=i,s=Error(A(419)),o=bd(s,o,void 0),Zl(e,t,l,o)}if(i=(l&e.childLanes)!==0,Rt||i){if(o=ot,o!==null){switch(l&-l){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(o.suspendedLanes|l)?0:a,a!==0&&a!==s.retryLane&&(s.retryLane=a,Gn(e,a),fn(o,e,a,-1))}return Hp(),o=bd(Error(A(421))),Zl(e,t,l,o)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=Nb.bind(null,e),a._reactRetry=t,null):(e=s.treeContext,Mt=jr(a.nextSibling),Pt=t,$e=!0,pn=null,e!==null&&(Kt[Yt++]=Vn,Kt[Yt++]=Hn,Kt[Yt++]=so,Vn=e.id,Hn=e.overflow,so=t),t=Pp(t,o.children),t.flags|=4096,t)}function Gf(e,t,n){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),ju(e.return,t,n)}function yd(e,t,n,o,a){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:a}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=o,s.tail=n,s.tailMode=a)}function Lx(e,t,n){var o=t.pendingProps,a=o.revealOrder,s=o.tail;if(vt(e,t,o.children,n),o=Pe.current,o&2)o=o&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Gf(e,n,t);else if(e.tag===19)Gf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(ke(Pe,o),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&Hi(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),yd(t,!1,a,n,s);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Hi(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}yd(t,!0,n,null,s);break;case"together":yd(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function vi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function qn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),io|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(A(153));if(t.child!==null){for(e=t.child,n=_r(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=_r(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function gb(e,t,n){switch(t.tag){case 3:Rx(t),ca();break;case 5:ax(t);break;case 1:Lt(t.type)&&Pi(t);break;case 4:Rp(t,t.stateNode.containerInfo);break;case 10:var o=t.type._context,a=t.memoizedProps.value;ke(Fi,o._currentValue),o._currentValue=a;break;case 13:if(o=t.memoizedState,o!==null)return o.dehydrated!==null?(ke(Pe,Pe.current&1),t.flags|=128,null):n&t.child.childLanes?Ox(e,t,n):(ke(Pe,Pe.current&1),e=qn(e,t,n),e!==null?e.sibling:null);ke(Pe,Pe.current&1);break;case 19:if(o=(n&t.childLanes)!==0,e.flags&128){if(o)return Lx(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),ke(Pe,Pe.current),o)break;return null;case 22:case 23:return t.lanes=0,Ex(e,t,n)}return qn(e,t,n)}var Dx,Nu,Bx,$x;Dx=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Nu=function(){};Bx=function(e,t,n,o){var a=e.memoizedProps;if(a!==o){e=t.stateNode,eo(Nn.current);var s=null;switch(n){case"input":a=Xd(e,a),o=Xd(e,o),s=[];break;case"select":a=ze({},a,{value:void 0}),o=ze({},o,{value:void 0}),s=[];break;case"textarea":a=eu(e,a),o=eu(e,o),s=[];break;default:typeof a.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=Ai)}nu(n,o);var l;n=null;for(d in a)if(!o.hasOwnProperty(d)&&a.hasOwnProperty(d)&&a[d]!=null)if(d==="style"){var i=a[d];for(l in i)i.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(_s.hasOwnProperty(d)?s||(s=[]):(s=s||[]).push(d,null));for(d in o){var c=o[d];if(i=a!=null?a[d]:void 0,o.hasOwnProperty(d)&&c!==i&&(c!=null||i!=null))if(d==="style")if(i){for(l in i)!i.hasOwnProperty(l)||c&&c.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in c)c.hasOwnProperty(l)&&i[l]!==c[l]&&(n||(n={}),n[l]=c[l])}else n||(s||(s=[]),s.push(d,n)),n=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,i=i?i.__html:void 0,c!=null&&i!==c&&(s=s||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(_s.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&Ne("scroll",e),s||i===c||(s=[])):(s=s||[]).push(d,c))}n&&(s=s||[]).push("style",n);var d=s;(t.updateQueue=d)&&(t.flags|=4)}};$x=function(e,t,n,o){n!==o&&(t.flags|=4)};function Ha(e,t){if(!$e)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function pt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,o=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,o|=a.subtreeFlags&14680064,o|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,o|=a.subtreeFlags,o|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=o,e.childLanes=n,t}function vb(e,t,n){var o=t.pendingProps;switch(Cp(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pt(t),null;case 1:return Lt(t.type)&&Mi(),pt(t),null;case 3:return o=t.stateNode,ua(),Re(Ot),Re(ft),Lp(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(Hl(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,pn!==null&&(Mu(pn),pn=null))),Nu(e,t),pt(t),null;case 5:Op(t);var a=eo(Ms.current);if(n=t.type,e!==null&&t.stateNode!=null)Bx(e,t,n,o,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!o){if(t.stateNode===null)throw Error(A(166));return pt(t),null}if(e=eo(Nn.current),Hl(t)){o=t.stateNode,n=t.type;var s=t.memoizedProps;switch(o[Tn]=t,o[$s]=s,e=(t.mode&1)!==0,n){case"dialog":Ne("cancel",o),Ne("close",o);break;case"iframe":case"object":case"embed":Ne("load",o);break;case"video":case"audio":for(a=0;a<rs.length;a++)Ne(rs[a],o);break;case"source":Ne("error",o);break;case"img":case"image":case"link":Ne("error",o),Ne("load",o);break;case"details":Ne("toggle",o);break;case"input":rf(o,s),Ne("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!s.multiple},Ne("invalid",o);break;case"textarea":af(o,s),Ne("invalid",o)}nu(n,s),a=null;for(var l in s)if(s.hasOwnProperty(l)){var i=s[l];l==="children"?typeof i=="string"?o.textContent!==i&&(s.suppressHydrationWarning!==!0&&Vl(o.textContent,i,e),a=["children",i]):typeof i=="number"&&o.textContent!==""+i&&(s.suppressHydrationWarning!==!0&&Vl(o.textContent,i,e),a=["children",""+i]):_s.hasOwnProperty(l)&&i!=null&&l==="onScroll"&&Ne("scroll",o)}switch(n){case"input":$l(o),of(o,s,!0);break;case"textarea":$l(o),sf(o);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(o.onclick=Ai)}o=a,t.updateQueue=o,o!==null&&(t.flags|=4)}else{l=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=i2(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=l.createElement(n,{is:o.is}):(e=l.createElement(n),n==="select"&&(l=e,o.multiple?l.multiple=!0:o.size&&(l.size=o.size))):e=l.createElementNS(e,n),e[Tn]=t,e[$s]=o,Dx(e,t,!1,!1),t.stateNode=e;e:{switch(l=ru(n,o),n){case"dialog":Ne("cancel",e),Ne("close",e),a=o;break;case"iframe":case"object":case"embed":Ne("load",e),a=o;break;case"video":case"audio":for(a=0;a<rs.length;a++)Ne(rs[a],e);a=o;break;case"source":Ne("error",e),a=o;break;case"img":case"image":case"link":Ne("error",e),Ne("load",e),a=o;break;case"details":Ne("toggle",e),a=o;break;case"input":rf(e,o),a=Xd(e,o),Ne("invalid",e);break;case"option":a=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},a=ze({},o,{value:void 0}),Ne("invalid",e);break;case"textarea":af(e,o),a=eu(e,o),Ne("invalid",e);break;default:a=o}nu(n,a),i=a;for(s in i)if(i.hasOwnProperty(s)){var c=i[s];s==="style"?u2(e,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&c2(e,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Ts(e,c):typeof c=="number"&&Ts(e,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(_s.hasOwnProperty(s)?c!=null&&s==="onScroll"&&Ne("scroll",e):c!=null&&ip(e,s,c,l))}switch(n){case"input":$l(e),of(e,o,!1);break;case"textarea":$l(e),sf(e);break;case"option":o.value!=null&&e.setAttribute("value",""+Tr(o.value));break;case"select":e.multiple=!!o.multiple,s=o.value,s!=null?Jo(e,!!o.multiple,s,!1):o.defaultValue!=null&&Jo(e,!!o.multiple,o.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Ai)}switch(n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return pt(t),null;case 6:if(e&&t.stateNode!=null)$x(e,t,e.memoizedProps,o);else{if(typeof o!="string"&&t.stateNode===null)throw Error(A(166));if(n=eo(Ms.current),eo(Nn.current),Hl(t)){if(o=t.stateNode,n=t.memoizedProps,o[Tn]=t,(s=o.nodeValue!==n)&&(e=Pt,e!==null))switch(e.tag){case 3:Vl(o.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Vl(o.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else o=(n.nodeType===9?n:n.ownerDocument).createTextNode(o),o[Tn]=t,t.stateNode=o}return pt(t),null;case 13:if(Re(Pe),o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if($e&&Mt!==null&&t.mode&1&&!(t.flags&128))Q2(),ca(),t.flags|=98560,s=!1;else if(s=Hl(t),o!==null&&o.dehydrated!==null){if(e===null){if(!s)throw Error(A(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(A(317));s[Tn]=t}else ca(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;pt(t),s=!1}else pn!==null&&(Mu(pn),pn=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(t.child.flags|=8192,t.mode&1&&(e===null||Pe.current&1?Qe===0&&(Qe=3):Hp())),t.updateQueue!==null&&(t.flags|=4),pt(t),null);case 4:return ua(),Nu(e,t),e===null&&Ds(t.stateNode.containerInfo),pt(t),null;case 10:return kp(t.type._context),pt(t),null;case 17:return Lt(t.type)&&Mi(),pt(t),null;case 19:if(Re(Pe),s=t.memoizedState,s===null)return pt(t),null;if(o=(t.flags&128)!==0,l=s.rendering,l===null)if(o)Ha(s,!1);else{if(Qe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Hi(e),l!==null){for(t.flags|=128,Ha(s,!1),o=l.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),t.subtreeFlags=0,o=n,n=t.child;n!==null;)s=n,e=o,s.flags&=14680066,l=s.alternate,l===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=l.childLanes,s.lanes=l.lanes,s.child=l.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=l.memoizedProps,s.memoizedState=l.memoizedState,s.updateQueue=l.updateQueue,s.type=l.type,e=l.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ke(Pe,Pe.current&1|2),t.child}e=e.sibling}s.tail!==null&&We()>ha&&(t.flags|=128,o=!0,Ha(s,!1),t.lanes=4194304)}else{if(!o)if(e=Hi(l),e!==null){if(t.flags|=128,o=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ha(s,!0),s.tail===null&&s.tailMode==="hidden"&&!l.alternate&&!$e)return pt(t),null}else 2*We()-s.renderingStartTime>ha&&n!==1073741824&&(t.flags|=128,o=!0,Ha(s,!1),t.lanes=4194304);s.isBackwards?(l.sibling=t.child,t.child=l):(n=s.last,n!==null?n.sibling=l:t.child=l,s.last=l)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=We(),t.sibling=null,n=Pe.current,ke(Pe,o?n&1|2:n&1),t):(pt(t),null);case 22:case 23:return Vp(),o=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(t.flags|=8192),o&&t.mode&1?$t&1073741824&&(pt(t),t.subtreeFlags&6&&(t.flags|=8192)):pt(t),null;case 24:return null;case 25:return null}throw Error(A(156,t.tag))}function bb(e,t){switch(Cp(t),t.tag){case 1:return Lt(t.type)&&Mi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ua(),Re(Ot),Re(ft),Lp(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Op(t),null;case 13:if(Re(Pe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(A(340));ca()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Re(Pe),null;case 4:return ua(),null;case 10:return kp(t.type._context),null;case 22:case 23:return Vp(),null;case 24:return null;default:return null}}var Kl=!1,ht=!1,yb=typeof WeakSet=="function"?WeakSet:Set,U=null;function Zo(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(o){Ue(e,t,o)}else n.current=null}function Ru(e,t,n){try{n()}catch(o){Ue(e,t,o)}}var qf=!1;function jb(e,t){if(hu=Di,e=I2(),jp(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var a=o.anchorOffset,s=o.focusNode;o=o.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var l=0,i=-1,c=-1,d=0,u=0,p=e,m=null;t:for(;;){for(var b;p!==n||a!==0&&p.nodeType!==3||(i=l+a),p!==s||o!==0&&p.nodeType!==3||(c=l+o),p.nodeType===3&&(l+=p.nodeValue.length),(b=p.firstChild)!==null;)m=p,p=b;for(;;){if(p===e)break t;if(m===n&&++d===a&&(i=l),m===s&&++u===o&&(c=l),(b=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=b}n=i===-1||c===-1?null:{start:i,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(fu={focusedElem:e,selectionRange:n},Di=!1,U=t;U!==null;)if(t=U,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,U=e;else for(;U!==null;){t=U;try{var S=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var j=S.memoizedProps,_=S.memoizedState,x=t.stateNode,h=x.getSnapshotBeforeUpdate(t.elementType===t.type?j:cn(t.type,j),_);x.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(y){Ue(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,U=e;break}U=t.return}return S=qf,qf=!1,S}function gs(e,t,n){var o=t.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var a=o=o.next;do{if((a.tag&e)===e){var s=a.destroy;a.destroy=void 0,s!==void 0&&Ru(t,n,s)}a=a.next}while(a!==o)}}function bc(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var o=n.create;n.destroy=o()}n=n.next}while(n!==t)}}function Ou(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ax(e){var t=e.alternate;t!==null&&(e.alternate=null,Ax(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Tn],delete t[$s],delete t[gu],delete t[rb],delete t[ob])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Mx(e){return e.tag===5||e.tag===3||e.tag===4}function Xf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Mx(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Lu(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ai));else if(o!==4&&(e=e.child,e!==null))for(Lu(e,t,n),e=e.sibling;e!==null;)Lu(e,t,n),e=e.sibling}function Du(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(Du(e,t,n),e=e.sibling;e!==null;)Du(e,t,n),e=e.sibling}var at=null,dn=!1;function ir(e,t,n){for(n=n.child;n!==null;)Px(e,t,n),n=n.sibling}function Px(e,t,n){if(En&&typeof En.onCommitFiberUnmount=="function")try{En.onCommitFiberUnmount(uc,n)}catch{}switch(n.tag){case 5:ht||Zo(n,t);case 6:var o=at,a=dn;at=null,ir(e,t,n),at=o,dn=a,at!==null&&(dn?(e=at,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):at.removeChild(n.stateNode));break;case 18:at!==null&&(dn?(e=at,n=n.stateNode,e.nodeType===8?hd(e.parentNode,n):e.nodeType===1&&hd(e,n),Rs(e)):hd(at,n.stateNode));break;case 4:o=at,a=dn,at=n.stateNode.containerInfo,dn=!0,ir(e,t,n),at=o,dn=a;break;case 0:case 11:case 14:case 15:if(!ht&&(o=n.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){a=o=o.next;do{var s=a,l=s.destroy;s=s.tag,l!==void 0&&(s&2||s&4)&&Ru(n,t,l),a=a.next}while(a!==o)}ir(e,t,n);break;case 1:if(!ht&&(Zo(n,t),o=n.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=n.memoizedProps,o.state=n.memoizedState,o.componentWillUnmount()}catch(i){Ue(n,t,i)}ir(e,t,n);break;case 21:ir(e,t,n);break;case 22:n.mode&1?(ht=(o=ht)||n.memoizedState!==null,ir(e,t,n),ht=o):ir(e,t,n);break;default:ir(e,t,n)}}function Qf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new yb),t.forEach(function(o){var a=Rb.bind(null,e,o);n.has(o)||(n.add(o),o.then(a,a))})}}function ln(e,t){var n=t.deletions;if(n!==null)for(var o=0;o<n.length;o++){var a=n[o];try{var s=e,l=t,i=l;e:for(;i!==null;){switch(i.tag){case 5:at=i.stateNode,dn=!1;break e;case 3:at=i.stateNode.containerInfo,dn=!0;break e;case 4:at=i.stateNode.containerInfo,dn=!0;break e}i=i.return}if(at===null)throw Error(A(160));Px(s,l,a),at=null,dn=!1;var c=a.alternate;c!==null&&(c.return=null),a.return=null}catch(d){Ue(a,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ix(t,e),t=t.sibling}function Ix(e,t){var n=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ln(t,e),Sn(e),o&4){try{gs(3,e,e.return),bc(3,e)}catch(j){Ue(e,e.return,j)}try{gs(5,e,e.return)}catch(j){Ue(e,e.return,j)}}break;case 1:ln(t,e),Sn(e),o&512&&n!==null&&Zo(n,n.return);break;case 5:if(ln(t,e),Sn(e),o&512&&n!==null&&Zo(n,n.return),e.flags&32){var a=e.stateNode;try{Ts(a,"")}catch(j){Ue(e,e.return,j)}}if(o&4&&(a=e.stateNode,a!=null)){var s=e.memoizedProps,l=n!==null?n.memoizedProps:s,i=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{i==="input"&&s.type==="radio"&&s.name!=null&&s2(a,s),ru(i,l);var d=ru(i,s);for(l=0;l<c.length;l+=2){var u=c[l],p=c[l+1];u==="style"?u2(a,p):u==="dangerouslySetInnerHTML"?c2(a,p):u==="children"?Ts(a,p):ip(a,u,p,d)}switch(i){case"input":Qd(a,s);break;case"textarea":l2(a,s);break;case"select":var m=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!s.multiple;var b=s.value;b!=null?Jo(a,!!s.multiple,b,!1):m!==!!s.multiple&&(s.defaultValue!=null?Jo(a,!!s.multiple,s.defaultValue,!0):Jo(a,!!s.multiple,s.multiple?[]:"",!1))}a[$s]=s}catch(j){Ue(e,e.return,j)}}break;case 6:if(ln(t,e),Sn(e),o&4){if(e.stateNode===null)throw Error(A(162));a=e.stateNode,s=e.memoizedProps;try{a.nodeValue=s}catch(j){Ue(e,e.return,j)}}break;case 3:if(ln(t,e),Sn(e),o&4&&n!==null&&n.memoizedState.isDehydrated)try{Rs(t.containerInfo)}catch(j){Ue(e,e.return,j)}break;case 4:ln(t,e),Sn(e);break;case 13:ln(t,e),Sn(e),a=e.child,a.flags&8192&&(s=a.memoizedState!==null,a.stateNode.isHidden=s,!s||a.alternate!==null&&a.alternate.memoizedState!==null||(Fp=We())),o&4&&Qf(e);break;case 22:if(u=n!==null&&n.memoizedState!==null,e.mode&1?(ht=(d=ht)||u,ln(t,e),ht=d):ln(t,e),Sn(e),o&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!u&&e.mode&1)for(U=e,u=e.child;u!==null;){for(p=U=u;U!==null;){switch(m=U,b=m.child,m.tag){case 0:case 11:case 14:case 15:gs(4,m,m.return);break;case 1:Zo(m,m.return);var S=m.stateNode;if(typeof S.componentWillUnmount=="function"){o=m,n=m.return;try{t=o,S.props=t.memoizedProps,S.state=t.memoizedState,S.componentWillUnmount()}catch(j){Ue(o,n,j)}}break;case 5:Zo(m,m.return);break;case 22:if(m.memoizedState!==null){em(p);continue}}b!==null?(b.return=m,U=b):em(p)}u=u.sibling}e:for(u=null,p=e;;){if(p.tag===5){if(u===null){u=p;try{a=p.stateNode,d?(s=a.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(i=p.stateNode,c=p.memoizedProps.style,l=c!=null&&c.hasOwnProperty("display")?c.display:null,i.style.display=d2("display",l))}catch(j){Ue(e,e.return,j)}}}else if(p.tag===6){if(u===null)try{p.stateNode.nodeValue=d?"":p.memoizedProps}catch(j){Ue(e,e.return,j)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;u===p&&(u=null),p=p.return}u===p&&(u=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:ln(t,e),Sn(e),o&4&&Qf(e);break;case 21:break;default:ln(t,e),Sn(e)}}function Sn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Mx(n)){var o=n;break e}n=n.return}throw Error(A(160))}switch(o.tag){case 5:var a=o.stateNode;o.flags&32&&(Ts(a,""),o.flags&=-33);var s=Xf(e);Du(e,s,a);break;case 3:case 4:var l=o.stateNode.containerInfo,i=Xf(e);Lu(e,i,l);break;default:throw Error(A(161))}}catch(c){Ue(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Sb(e,t,n){U=e,zx(e)}function zx(e,t,n){for(var o=(e.mode&1)!==0;U!==null;){var a=U,s=a.child;if(a.tag===22&&o){var l=a.memoizedState!==null||Kl;if(!l){var i=a.alternate,c=i!==null&&i.memoizedState!==null||ht;i=Kl;var d=ht;if(Kl=l,(ht=c)&&!d)for(U=a;U!==null;)l=U,c=l.child,l.tag===22&&l.memoizedState!==null?tm(a):c!==null?(c.return=l,U=c):tm(a);for(;s!==null;)U=s,zx(s),s=s.sibling;U=a,Kl=i,ht=d}Jf(e)}else a.subtreeFlags&8772&&s!==null?(s.return=a,U=s):Jf(e)}}function Jf(e){for(;U!==null;){var t=U;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ht||bc(5,t);break;case 1:var o=t.stateNode;if(t.flags&4&&!ht)if(n===null)o.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:cn(t.type,n.memoizedProps);o.componentDidUpdate(a,n.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Af(t,s,o);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Af(t,l,n)}break;case 5:var i=t.stateNode;if(n===null&&t.flags&4){n=i;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var u=d.memoizedState;if(u!==null){var p=u.dehydrated;p!==null&&Rs(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}ht||t.flags&512&&Ou(t)}catch(m){Ue(t,t.return,m)}}if(t===e){U=null;break}if(n=t.sibling,n!==null){n.return=t.return,U=n;break}U=t.return}}function em(e){for(;U!==null;){var t=U;if(t===e){U=null;break}var n=t.sibling;if(n!==null){n.return=t.return,U=n;break}U=t.return}}function tm(e){for(;U!==null;){var t=U;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{bc(4,t)}catch(c){Ue(t,n,c)}break;case 1:var o=t.stateNode;if(typeof o.componentDidMount=="function"){var a=t.return;try{o.componentDidMount()}catch(c){Ue(t,a,c)}}var s=t.return;try{Ou(t)}catch(c){Ue(t,s,c)}break;case 5:var l=t.return;try{Ou(t)}catch(c){Ue(t,l,c)}}}catch(c){Ue(t,t.return,c)}if(t===e){U=null;break}var i=t.sibling;if(i!==null){i.return=t.return,U=i;break}U=t.return}}var Cb=Math.ceil,Ki=Jn.ReactCurrentDispatcher,Ip=Jn.ReactCurrentOwner,qt=Jn.ReactCurrentBatchConfig,ye=0,ot=null,Ye=null,lt=0,$t=0,Ko=Dr(0),Qe=0,Fs=null,io=0,yc=0,zp=0,vs=null,Nt=null,Fp=0,ha=1/0,Pn=null,Yi=!1,Bu=null,Cr=null,Yl=!1,gr=null,Gi=0,bs=0,$u=null,bi=-1,yi=0;function bt(){return ye&6?We():bi!==-1?bi:bi=We()}function wr(e){return e.mode&1?ye&2&&lt!==0?lt&-lt:sb.transition!==null?(yi===0&&(yi=C2()),yi):(e=we,e!==0||(e=window.event,e=e===void 0?16:R2(e.type)),e):1}function fn(e,t,n,o){if(50<bs)throw bs=0,$u=null,Error(A(185));Qs(e,n,o),(!(ye&2)||e!==ot)&&(e===ot&&(!(ye&2)&&(yc|=n),Qe===4&&mr(e,lt)),Dt(e,o),n===1&&ye===0&&!(t.mode&1)&&(ha=We()+500,xc&&Br()))}function Dt(e,t){var n=e.callbackNode;s8(e,t);var o=Li(e,e===ot?lt:0);if(o===0)n!==null&&df(n),e.callbackNode=null,e.callbackPriority=0;else if(t=o&-o,e.callbackPriority!==t){if(n!=null&&df(n),t===1)e.tag===0?ab(nm.bind(null,e)):G2(nm.bind(null,e)),tb(function(){!(ye&6)&&Br()}),n=null;else{switch(w2(o)){case 1:n=hp;break;case 4:n=j2;break;case 16:n=Oi;break;case 536870912:n=S2;break;default:n=Oi}n=Yx(n,Fx.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Fx(e,t){if(bi=-1,yi=0,ye&6)throw Error(A(327));var n=e.callbackNode;if(oa()&&e.callbackNode!==n)return null;var o=Li(e,e===ot?lt:0);if(o===0)return null;if(o&30||o&e.expiredLanes||t)t=qi(e,o);else{t=o;var a=ye;ye|=2;var s=Vx();(ot!==e||lt!==t)&&(Pn=null,ha=We()+500,ro(e,t));do try{Tb();break}catch(i){Ux(e,i)}while(1);Tp(),Ki.current=s,ye=a,Ye!==null?t=0:(ot=null,lt=0,t=Qe)}if(t!==0){if(t===2&&(a=iu(e),a!==0&&(o=a,t=Au(e,a))),t===1)throw n=Fs,ro(e,0),mr(e,o),Dt(e,We()),n;if(t===6)mr(e,o);else{if(a=e.current.alternate,!(o&30)&&!wb(a)&&(t=qi(e,o),t===2&&(s=iu(e),s!==0&&(o=s,t=Au(e,s))),t===1))throw n=Fs,ro(e,0),mr(e,o),Dt(e,We()),n;switch(e.finishedWork=a,e.finishedLanes=o,t){case 0:case 1:throw Error(A(345));case 2:qr(e,Nt,Pn);break;case 3:if(mr(e,o),(o&130023424)===o&&(t=Fp+500-We(),10<t)){if(Li(e,0)!==0)break;if(a=e.suspendedLanes,(a&o)!==o){bt(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=xu(qr.bind(null,e,Nt,Pn),t);break}qr(e,Nt,Pn);break;case 4:if(mr(e,o),(o&4194240)===o)break;for(t=e.eventTimes,a=-1;0<o;){var l=31-hn(o);s=1<<l,l=t[l],l>a&&(a=l),o&=~s}if(o=a,o=We()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*Cb(o/1960))-o,10<o){e.timeoutHandle=xu(qr.bind(null,e,Nt,Pn),o);break}qr(e,Nt,Pn);break;case 5:qr(e,Nt,Pn);break;default:throw Error(A(329))}}}return Dt(e,We()),e.callbackNode===n?Fx.bind(null,e):null}function Au(e,t){var n=vs;return e.current.memoizedState.isDehydrated&&(ro(e,t).flags|=256),e=qi(e,t),e!==2&&(t=Nt,Nt=n,t!==null&&Mu(t)),e}function Mu(e){Nt===null?Nt=e:Nt.push.apply(Nt,e)}function wb(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var o=0;o<n.length;o++){var a=n[o],s=a.getSnapshot;a=a.value;try{if(!mn(s(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function mr(e,t){for(t&=~zp,t&=~yc,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-hn(t),o=1<<n;e[n]=-1,t&=~o}}function nm(e){if(ye&6)throw Error(A(327));oa();var t=Li(e,0);if(!(t&1))return Dt(e,We()),null;var n=qi(e,t);if(e.tag!==0&&n===2){var o=iu(e);o!==0&&(t=o,n=Au(e,o))}if(n===1)throw n=Fs,ro(e,0),mr(e,t),Dt(e,We()),n;if(n===6)throw Error(A(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,qr(e,Nt,Pn),Dt(e,We()),null}function Up(e,t){var n=ye;ye|=1;try{return e(t)}finally{ye=n,ye===0&&(ha=We()+500,xc&&Br())}}function co(e){gr!==null&&gr.tag===0&&!(ye&6)&&oa();var t=ye;ye|=1;var n=qt.transition,o=we;try{if(qt.transition=null,we=1,e)return e()}finally{we=o,qt.transition=n,ye=t,!(ye&6)&&Br()}}function Vp(){$t=Ko.current,Re(Ko)}function ro(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,eb(n)),Ye!==null)for(n=Ye.return;n!==null;){var o=n;switch(Cp(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&Mi();break;case 3:ua(),Re(Ot),Re(ft),Lp();break;case 5:Op(o);break;case 4:ua();break;case 13:Re(Pe);break;case 19:Re(Pe);break;case 10:kp(o.type._context);break;case 22:case 23:Vp()}n=n.return}if(ot=e,Ye=e=_r(e.current,null),lt=$t=t,Qe=0,Fs=null,zp=yc=io=0,Nt=vs=null,Jr!==null){for(t=0;t<Jr.length;t++)if(n=Jr[t],o=n.interleaved,o!==null){n.interleaved=null;var a=o.next,s=n.pending;if(s!==null){var l=s.next;s.next=a,o.next=l}n.pending=o}Jr=null}return e}function Ux(e,t){do{var n=Ye;try{if(Tp(),xi.current=Zi,Wi){for(var o=Ie.memoizedState;o!==null;){var a=o.queue;a!==null&&(a.pending=null),o=o.next}Wi=!1}if(lo=0,nt=qe=Ie=null,xs=!1,Ps=0,Ip.current=null,n===null||n.return===null){Qe=1,Fs=t,Ye=null;break}e:{var s=e,l=n.return,i=n,c=t;if(t=lt,i.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,u=i,p=u.tag;if(!(u.mode&1)&&(p===0||p===11||p===15)){var m=u.alternate;m?(u.updateQueue=m.updateQueue,u.memoizedState=m.memoizedState,u.lanes=m.lanes):(u.updateQueue=null,u.memoizedState=null)}var b=Vf(l);if(b!==null){b.flags&=-257,Hf(b,l,i,s,t),b.mode&1&&Uf(s,d,t),t=b,c=d;var S=t.updateQueue;if(S===null){var j=new Set;j.add(c),t.updateQueue=j}else S.add(c);break e}else{if(!(t&1)){Uf(s,d,t),Hp();break e}c=Error(A(426))}}else if($e&&i.mode&1){var _=Vf(l);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Hf(_,l,i,s,t),wp(pa(c,i));break e}}s=c=pa(c,i),Qe!==4&&(Qe=2),vs===null?vs=[s]:vs.push(s),s=l;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var x=_x(s,c,t);$f(s,x);break e;case 1:i=c;var h=s.type,f=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Cr===null||!Cr.has(f)))){s.flags|=65536,t&=-t,s.lanes|=t;var y=Tx(s,i,t);$f(s,y);break e}}s=s.return}while(s!==null)}Wx(n)}catch(C){t=C,Ye===n&&n!==null&&(Ye=n=n.return);continue}break}while(1)}function Vx(){var e=Ki.current;return Ki.current=Zi,e===null?Zi:e}function Hp(){(Qe===0||Qe===3||Qe===2)&&(Qe=4),ot===null||!(io&268435455)&&!(yc&268435455)||mr(ot,lt)}function qi(e,t){var n=ye;ye|=2;var o=Vx();(ot!==e||lt!==t)&&(Pn=null,ro(e,t));do try{_b();break}catch(a){Ux(e,a)}while(1);if(Tp(),ye=n,Ki.current=o,Ye!==null)throw Error(A(261));return ot=null,lt=0,Qe}function _b(){for(;Ye!==null;)Hx(Ye)}function Tb(){for(;Ye!==null&&!X6();)Hx(Ye)}function Hx(e){var t=Kx(e.alternate,e,$t);e.memoizedProps=e.pendingProps,t===null?Wx(e):Ye=t,Ip.current=null}function Wx(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=bb(n,t),n!==null){n.flags&=32767,Ye=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Qe=6,Ye=null;return}}else if(n=vb(n,t,$t),n!==null){Ye=n;return}if(t=t.sibling,t!==null){Ye=t;return}Ye=t=e}while(t!==null);Qe===0&&(Qe=5)}function qr(e,t,n){var o=we,a=qt.transition;try{qt.transition=null,we=1,kb(e,t,n,o)}finally{qt.transition=a,we=o}return null}function kb(e,t,n,o){do oa();while(gr!==null);if(ye&6)throw Error(A(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(A(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(l8(e,s),e===ot&&(Ye=ot=null,lt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Yl||(Yl=!0,Yx(Oi,function(){return oa(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=qt.transition,qt.transition=null;var l=we;we=1;var i=ye;ye|=4,Ip.current=null,jb(e,n),Ix(n,e),K8(fu),Di=!!hu,fu=hu=null,e.current=n,Sb(n),Q6(),ye=i,we=l,qt.transition=s}else e.current=n;if(Yl&&(Yl=!1,gr=e,Gi=a),s=e.pendingLanes,s===0&&(Cr=null),t8(n.stateNode),Dt(e,We()),t!==null)for(o=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],o(a.value,{componentStack:a.stack,digest:a.digest});if(Yi)throw Yi=!1,e=Bu,Bu=null,e;return Gi&1&&e.tag!==0&&oa(),s=e.pendingLanes,s&1?e===$u?bs++:(bs=0,$u=e):bs=0,Br(),null}function oa(){if(gr!==null){var e=w2(Gi),t=qt.transition,n=we;try{if(qt.transition=null,we=16>e?16:e,gr===null)var o=!1;else{if(e=gr,gr=null,Gi=0,ye&6)throw Error(A(331));var a=ye;for(ye|=4,U=e.current;U!==null;){var s=U,l=s.child;if(U.flags&16){var i=s.deletions;if(i!==null){for(var c=0;c<i.length;c++){var d=i[c];for(U=d;U!==null;){var u=U;switch(u.tag){case 0:case 11:case 15:gs(8,u,s)}var p=u.child;if(p!==null)p.return=u,U=p;else for(;U!==null;){u=U;var m=u.sibling,b=u.return;if(Ax(u),u===d){U=null;break}if(m!==null){m.return=b,U=m;break}U=b}}}var S=s.alternate;if(S!==null){var j=S.child;if(j!==null){S.child=null;do{var _=j.sibling;j.sibling=null,j=_}while(j!==null)}}U=s}}if(s.subtreeFlags&2064&&l!==null)l.return=s,U=l;else e:for(;U!==null;){if(s=U,s.flags&2048)switch(s.tag){case 0:case 11:case 15:gs(9,s,s.return)}var x=s.sibling;if(x!==null){x.return=s.return,U=x;break e}U=s.return}}var h=e.current;for(U=h;U!==null;){l=U;var f=l.child;if(l.subtreeFlags&2064&&f!==null)f.return=l,U=f;else e:for(l=h;U!==null;){if(i=U,i.flags&2048)try{switch(i.tag){case 0:case 11:case 15:bc(9,i)}}catch(C){Ue(i,i.return,C)}if(i===l){U=null;break e}var y=i.sibling;if(y!==null){y.return=i.return,U=y;break e}U=i.return}}if(ye=a,Br(),En&&typeof En.onPostCommitFiberRoot=="function")try{En.onPostCommitFiberRoot(uc,e)}catch{}o=!0}return o}finally{we=n,qt.transition=t}}return!1}function rm(e,t,n){t=pa(n,t),t=_x(e,t,1),e=Sr(e,t,1),t=bt(),e!==null&&(Qs(e,1,t),Dt(e,t))}function Ue(e,t,n){if(e.tag===3)rm(e,e,n);else for(;t!==null;){if(t.tag===3){rm(t,e,n);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Cr===null||!Cr.has(o))){e=pa(n,e),e=Tx(t,e,1),t=Sr(t,e,1),e=bt(),t!==null&&(Qs(t,1,e),Dt(t,e));break}}t=t.return}}function Eb(e,t,n){var o=e.pingCache;o!==null&&o.delete(t),t=bt(),e.pingedLanes|=e.suspendedLanes&n,ot===e&&(lt&n)===n&&(Qe===4||Qe===3&&(lt&130023424)===lt&&500>We()-Fp?ro(e,0):zp|=n),Dt(e,t)}function Zx(e,t){t===0&&(e.mode&1?(t=Pl,Pl<<=1,!(Pl&130023424)&&(Pl=4194304)):t=1);var n=bt();e=Gn(e,t),e!==null&&(Qs(e,t,n),Dt(e,n))}function Nb(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Zx(e,n)}function Rb(e,t){var n=0;switch(e.tag){case 13:var o=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(A(314))}o!==null&&o.delete(t),Zx(e,n)}var Kx;Kx=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ot.current)Rt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Rt=!1,gb(e,t,n);Rt=!!(e.flags&131072)}else Rt=!1,$e&&t.flags&1048576&&q2(t,zi,t.index);switch(t.lanes=0,t.tag){case 2:var o=t.type;vi(e,t),e=t.pendingProps;var a=ia(t,ft.current);ra(t,n),a=Bp(null,t,o,e,a,n);var s=$p();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Lt(o)?(s=!0,Pi(t)):s=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Np(t),a.updater=gc,t.stateNode=a,a._reactInternals=t,Cu(t,o,e,n),t=Tu(null,t,o,!0,s,n)):(t.tag=0,$e&&s&&Sp(t),vt(null,t,a,n),t=t.child),t;case 16:o=t.elementType;e:{switch(vi(e,t),e=t.pendingProps,a=o._init,o=a(o._payload),t.type=o,a=t.tag=Lb(o),e=cn(o,e),a){case 0:t=_u(null,t,o,e,n);break e;case 1:t=Kf(null,t,o,e,n);break e;case 11:t=Wf(null,t,o,e,n);break e;case 14:t=Zf(null,t,o,cn(o.type,e),n);break e}throw Error(A(306,o,""))}return t;case 0:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:cn(o,a),_u(e,t,o,a,n);case 1:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:cn(o,a),Kf(e,t,o,a,n);case 3:e:{if(Rx(t),e===null)throw Error(A(387));o=t.pendingProps,s=t.memoizedState,a=s.element,ex(e,t),Vi(t,o,null,n);var l=t.memoizedState;if(o=l.element,s.isDehydrated)if(s={element:o,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){a=pa(Error(A(423)),t),t=Yf(e,t,o,n,a);break e}else if(o!==a){a=pa(Error(A(424)),t),t=Yf(e,t,o,n,a);break e}else for(Mt=jr(t.stateNode.containerInfo.firstChild),Pt=t,$e=!0,pn=null,n=ox(t,null,o,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ca(),o===a){t=qn(e,t,n);break e}vt(e,t,o,n)}t=t.child}return t;case 5:return ax(t),e===null&&yu(t),o=t.type,a=t.pendingProps,s=e!==null?e.memoizedProps:null,l=a.children,mu(o,a)?l=null:s!==null&&mu(o,s)&&(t.flags|=32),Nx(e,t),vt(e,t,l,n),t.child;case 6:return e===null&&yu(t),null;case 13:return Ox(e,t,n);case 4:return Rp(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=da(t,null,o,n):vt(e,t,o,n),t.child;case 11:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:cn(o,a),Wf(e,t,o,a,n);case 7:return vt(e,t,t.pendingProps,n),t.child;case 8:return vt(e,t,t.pendingProps.children,n),t.child;case 12:return vt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(o=t.type._context,a=t.pendingProps,s=t.memoizedProps,l=a.value,ke(Fi,o._currentValue),o._currentValue=l,s!==null)if(mn(s.value,l)){if(s.children===a.children&&!Ot.current){t=qn(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var i=s.dependencies;if(i!==null){l=s.child;for(var c=i.firstContext;c!==null;){if(c.context===o){if(s.tag===1){c=Wn(-1,n&-n),c.tag=2;var d=s.updateQueue;if(d!==null){d=d.shared;var u=d.pending;u===null?c.next=c:(c.next=u.next,u.next=c),d.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),ju(s.return,n,t),i.lanes|=n;break}c=c.next}}else if(s.tag===10)l=s.type===t.type?null:s.child;else if(s.tag===18){if(l=s.return,l===null)throw Error(A(341));l.lanes|=n,i=l.alternate,i!==null&&(i.lanes|=n),ju(l,n,t),l=s.sibling}else l=s.child;if(l!==null)l.return=s;else for(l=s;l!==null;){if(l===t){l=null;break}if(s=l.sibling,s!==null){s.return=l.return,l=s;break}l=l.return}s=l}vt(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,o=t.pendingProps.children,ra(t,n),a=Qt(a),o=o(a),t.flags|=1,vt(e,t,o,n),t.child;case 14:return o=t.type,a=cn(o,t.pendingProps),a=cn(o.type,a),Zf(e,t,o,a,n);case 15:return kx(e,t,t.type,t.pendingProps,n);case 17:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:cn(o,a),vi(e,t),t.tag=1,Lt(o)?(e=!0,Pi(t)):e=!1,ra(t,n),nx(t,o,a),Cu(t,o,a,n),Tu(null,t,o,!0,e,n);case 19:return Lx(e,t,n);case 22:return Ex(e,t,n)}throw Error(A(156,t.tag))};function Yx(e,t){return y2(e,t)}function Ob(e,t,n,o){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gt(e,t,n,o){return new Ob(e,t,n,o)}function Wp(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Lb(e){if(typeof e=="function")return Wp(e)?1:0;if(e!=null){if(e=e.$$typeof,e===dp)return 11;if(e===up)return 14}return 2}function _r(e,t){var n=e.alternate;return n===null?(n=Gt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ji(e,t,n,o,a,s){var l=2;if(o=e,typeof e=="function")Wp(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Mo:return oo(n.children,a,s,t);case cp:l=8,a|=8;break;case Kd:return e=Gt(12,n,t,a|2),e.elementType=Kd,e.lanes=s,e;case Yd:return e=Gt(13,n,t,a),e.elementType=Yd,e.lanes=s,e;case Gd:return e=Gt(19,n,t,a),e.elementType=Gd,e.lanes=s,e;case r2:return jc(n,a,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case t2:l=10;break e;case n2:l=9;break e;case dp:l=11;break e;case up:l=14;break e;case ur:l=16,o=null;break e}throw Error(A(130,e==null?e:typeof e,""))}return t=Gt(l,n,t,a),t.elementType=e,t.type=o,t.lanes=s,t}function oo(e,t,n,o){return e=Gt(7,e,o,t),e.lanes=n,e}function jc(e,t,n,o){return e=Gt(22,e,o,t),e.elementType=r2,e.lanes=n,e.stateNode={isHidden:!1},e}function jd(e,t,n){return e=Gt(6,e,null,t),e.lanes=n,e}function Sd(e,t,n){return t=Gt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Db(e,t,n,o,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=nd(0),this.expirationTimes=nd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nd(0),this.identifierPrefix=o,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Zp(e,t,n,o,a,s,l,i,c){return e=new Db(e,t,n,i,c),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Gt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:o,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Np(s),e}function Bb(e,t,n){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ao,key:o==null?null:""+o,children:e,containerInfo:t,implementation:n}}function Gx(e){if(!e)return kr;e=e._reactInternals;e:{if(mo(e)!==e||e.tag!==1)throw Error(A(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Lt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(A(171))}if(e.tag===1){var n=e.type;if(Lt(n))return Y2(e,n,t)}return t}function qx(e,t,n,o,a,s,l,i,c){return e=Zp(n,o,!0,e,a,s,l,i,c),e.context=Gx(null),n=e.current,o=bt(),a=wr(n),s=Wn(o,a),s.callback=t??null,Sr(n,s,a),e.current.lanes=a,Qs(e,a,o),Dt(e,o),e}function Sc(e,t,n,o){var a=t.current,s=bt(),l=wr(a);return n=Gx(n),t.context===null?t.context=n:t.pendingContext=n,t=Wn(s,l),t.payload={element:e},o=o===void 0?null:o,o!==null&&(t.callback=o),e=Sr(a,t,l),e!==null&&(fn(e,a,l,s),mi(e,a,l)),l}function Xi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function om(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Kp(e,t){om(e,t),(e=e.alternate)&&om(e,t)}function $b(){return null}var Xx=typeof reportError=="function"?reportError:function(e){console.error(e)};function Yp(e){this._internalRoot=e}Cc.prototype.render=Yp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(A(409));Sc(e,t,null,null)};Cc.prototype.unmount=Yp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;co(function(){Sc(null,e,null,null)}),t[Yn]=null}};function Cc(e){this._internalRoot=e}Cc.prototype.unstable_scheduleHydration=function(e){if(e){var t=k2();e={blockedOn:null,target:e,priority:t};for(var n=0;n<fr.length&&t!==0&&t<fr[n].priority;n++);fr.splice(n,0,e),n===0&&N2(e)}};function Gp(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function wc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function am(){}function Ab(e,t,n,o,a){if(a){if(typeof o=="function"){var s=o;o=function(){var d=Xi(l);s.call(d)}}var l=qx(t,o,e,0,null,!1,!1,"",am);return e._reactRootContainer=l,e[Yn]=l.current,Ds(e.nodeType===8?e.parentNode:e),co(),l}for(;a=e.lastChild;)e.removeChild(a);if(typeof o=="function"){var i=o;o=function(){var d=Xi(c);i.call(d)}}var c=Zp(e,0,!1,null,null,!1,!1,"",am);return e._reactRootContainer=c,e[Yn]=c.current,Ds(e.nodeType===8?e.parentNode:e),co(function(){Sc(t,c,n,o)}),c}function _c(e,t,n,o,a){var s=n._reactRootContainer;if(s){var l=s;if(typeof a=="function"){var i=a;a=function(){var c=Xi(l);i.call(c)}}Sc(t,l,e,a)}else l=Ab(n,t,e,a,o);return Xi(l)}_2=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ns(t.pendingLanes);n!==0&&(fp(t,n|1),Dt(t,We()),!(ye&6)&&(ha=We()+500,Br()))}break;case 13:co(function(){var o=Gn(e,1);if(o!==null){var a=bt();fn(o,e,1,a)}}),Kp(e,1)}};mp=function(e){if(e.tag===13){var t=Gn(e,134217728);if(t!==null){var n=bt();fn(t,e,134217728,n)}Kp(e,134217728)}};T2=function(e){if(e.tag===13){var t=wr(e),n=Gn(e,t);if(n!==null){var o=bt();fn(n,e,t,o)}Kp(e,t)}};k2=function(){return we};E2=function(e,t){var n=we;try{return we=e,t()}finally{we=n}};au=function(e,t,n){switch(t){case"input":if(Qd(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var o=n[t];if(o!==e&&o.form===e.form){var a=mc(o);if(!a)throw Error(A(90));a2(o),Qd(o,a)}}}break;case"textarea":l2(e,n);break;case"select":t=n.value,t!=null&&Jo(e,!!n.multiple,t,!1)}};f2=Up;m2=co;var Mb={usingClientEntryPoint:!1,Events:[el,Fo,mc,p2,h2,Up]},Wa={findFiberByHostInstance:Qr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Pb={bundleType:Wa.bundleType,version:Wa.version,rendererPackageName:Wa.rendererPackageName,rendererConfig:Wa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Jn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=v2(e),e===null?null:e.stateNode},findFiberByHostInstance:Wa.findFiberByHostInstance||$b,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gl.isDisabled&&Gl.supportsFiber)try{uc=Gl.inject(Pb),En=Gl}catch{}}Ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mb;Ft.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Gp(t))throw Error(A(200));return Bb(e,t,null,n)};Ft.createRoot=function(e,t){if(!Gp(e))throw Error(A(299));var n=!1,o="",a=Xx;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=Zp(e,1,!1,null,null,n,!1,o,a),e[Yn]=t.current,Ds(e.nodeType===8?e.parentNode:e),new Yp(t)};Ft.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(A(188)):(e=Object.keys(e).join(","),Error(A(268,e)));return e=v2(t),e=e===null?null:e.stateNode,e};Ft.flushSync=function(e){return co(e)};Ft.hydrate=function(e,t,n){if(!wc(t))throw Error(A(200));return _c(null,e,t,!0,n)};Ft.hydrateRoot=function(e,t,n){if(!Gp(e))throw Error(A(405));var o=n!=null&&n.hydratedSources||null,a=!1,s="",l=Xx;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=qx(t,null,e,1,n??null,a,!1,s,l),e[Yn]=t.current,Ds(e),o)for(e=0;e<o.length;e++)n=o[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new Cc(t)};Ft.render=function(e,t,n){if(!wc(t))throw Error(A(200));return _c(null,e,t,!1,n)};Ft.unmountComponentAtNode=function(e){if(!wc(e))throw Error(A(40));return e._reactRootContainer?(co(function(){_c(null,null,e,!1,function(){e._reactRootContainer=null,e[Yn]=null})}),!0):!1};Ft.unstable_batchedUpdates=Up;Ft.unstable_renderSubtreeIntoContainer=function(e,t,n,o){if(!wc(n))throw Error(A(200));if(e==null||e._reactInternals===void 0)throw Error(A(38));return _c(e,t,n,!1,o)};Ft.version="18.2.0-next-9e3b772b8-20220608";function Qx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Qx)}catch(e){console.error(e)}}Qx(),q1.exports=Ft;var Fn=q1.exports;const Ib=Qn(Fn),zb=I1({__proto__:null,default:Ib},[Fn]);var sm=Fn;Wd.createRoot=sm.createRoot,Wd.hydrateRoot=sm.hydrateRoot;function Fb(e,t){if(e==null)return{};var n={},o=Object.keys(e),a,s;for(s=0;s<o.length;s++)a=o[s],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Ub(e,t){if(e==null)return{};var n=Fb(e,t),o,a;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)o=s[a],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}function Pu(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function Vb(e){if(Array.isArray(e))return Pu(e)}function Hb(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Wb(e,t){if(e){if(typeof e=="string")return Pu(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Pu(e,t)}}function Zb(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Kb(e){return Vb(e)||Hb(e)||Wb(e)||Zb()}function Us(e){"@babel/helpers - typeof";return Us=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Us(e)}function Yb(e,t){if(Us(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t||"default");if(Us(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Gb(e){var t=Yb(e,"string");return Us(t)=="symbol"?t:String(t)}function Jx(e,t,n){return t=Gb(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Iu(){return Iu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Iu.apply(this,arguments)}function lm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,o)}return n}function Yo(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?lm(Object(n),!0).forEach(function(o){Jx(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):lm(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function qb(e){var t=e.length;if(t===0||t===1)return e;if(t===2)return[e[0],e[1],"".concat(e[0],".").concat(e[1]),"".concat(e[1],".").concat(e[0])];if(t===3)return[e[0],e[1],e[2],"".concat(e[0],".").concat(e[1]),"".concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[0]),"".concat(e[1],".").concat(e[2]),"".concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[1],".").concat(e[0])];if(t>=4)return[e[0],e[1],e[2],e[3],"".concat(e[0],".").concat(e[1]),"".concat(e[0],".").concat(e[2]),"".concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[0]),"".concat(e[1],".").concat(e[2]),"".concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[1]),"".concat(e[2],".").concat(e[3]),"".concat(e[3],".").concat(e[0]),"".concat(e[3],".").concat(e[1]),"".concat(e[3],".").concat(e[2]),"".concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[1],".").concat(e[3]),"".concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[2],".").concat(e[3]),"".concat(e[0],".").concat(e[3],".").concat(e[1]),"".concat(e[0],".").concat(e[3],".").concat(e[2]),"".concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[1],".").concat(e[2],".").concat(e[3]),"".concat(e[1],".").concat(e[3],".").concat(e[0]),"".concat(e[1],".").concat(e[3],".").concat(e[2]),"".concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[0],".").concat(e[3]),"".concat(e[2],".").concat(e[1],".").concat(e[0]),"".concat(e[2],".").concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[3],".").concat(e[0]),"".concat(e[2],".").concat(e[3],".").concat(e[1]),"".concat(e[3],".").concat(e[0],".").concat(e[1]),"".concat(e[3],".").concat(e[0],".").concat(e[2]),"".concat(e[3],".").concat(e[1],".").concat(e[0]),"".concat(e[3],".").concat(e[1],".").concat(e[2]),"".concat(e[3],".").concat(e[2],".").concat(e[0]),"".concat(e[3],".").concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[1],".").concat(e[2],".").concat(e[3]),"".concat(e[0],".").concat(e[1],".").concat(e[3],".").concat(e[2]),"".concat(e[0],".").concat(e[2],".").concat(e[1],".").concat(e[3]),"".concat(e[0],".").concat(e[2],".").concat(e[3],".").concat(e[1]),"".concat(e[0],".").concat(e[3],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[3],".").concat(e[2],".").concat(e[1]),"".concat(e[1],".").concat(e[0],".").concat(e[2],".").concat(e[3]),"".concat(e[1],".").concat(e[0],".").concat(e[3],".").concat(e[2]),"".concat(e[1],".").concat(e[2],".").concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[2],".").concat(e[3],".").concat(e[0]),"".concat(e[1],".").concat(e[3],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[3],".").concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[0],".").concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[0],".").concat(e[3],".").concat(e[1]),"".concat(e[2],".").concat(e[1],".").concat(e[0],".").concat(e[3]),"".concat(e[2],".").concat(e[1],".").concat(e[3],".").concat(e[0]),"".concat(e[2],".").concat(e[3],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[3],".").concat(e[1],".").concat(e[0]),"".concat(e[3],".").concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[3],".").concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[3],".").concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[3],".").concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[3],".").concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[3],".").concat(e[2],".").concat(e[1],".").concat(e[0])]}var Cd={};function Xb(e){if(e.length===0||e.length===1)return e;var t=e.join(".");return Cd[t]||(Cd[t]=qb(e)),Cd[t]}function Qb(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,o=e.filter(function(s){return s!=="token"}),a=Xb(o);return a.reduce(function(s,l){return Yo(Yo({},s),n[l])},t)}function im(e){return e.join(" ")}function Jb(e,t){var n=0;return function(o){return n+=1,o.map(function(a,s){return eg({node:a,stylesheet:e,useInlineStyles:t,key:"code-segment-".concat(n,"-").concat(s)})})}}function eg(e){var t=e.node,n=e.stylesheet,o=e.style,a=o===void 0?{}:o,s=e.useInlineStyles,l=e.key,i=t.properties,c=t.type,d=t.tagName,u=t.value;if(c==="text")return u;if(d){var p=Jb(n,s),m;if(!s)m=Yo(Yo({},i),{},{className:im(i.className)});else{var b=Object.keys(n).reduce(function(x,h){return h.split(".").forEach(function(f){x.includes(f)||x.push(f)}),x},[]),S=i.className&&i.className.includes("token")?["token"]:[],j=i.className&&S.concat(i.className.filter(function(x){return!b.includes(x)}));m=Yo(Yo({},i),{},{className:im(j)||void 0,style:Qb(i.className,Object.assign({},i.style,a),n)})}var _=p(t.children);return J.createElement(d,Iu({key:l},m),_)}}const e7=function(e,t){var n=e.listLanguages();return n.indexOf(t)!==-1};var t7=["language","children","style","customStyle","codeTagProps","useInlineStyles","showLineNumbers","showInlineLineNumbers","startingLineNumber","lineNumberContainerStyle","lineNumberStyle","wrapLines","wrapLongLines","lineProps","renderer","PreTag","CodeTag","code","astGenerator"];function cm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,o)}return n}function _n(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?cm(Object(n),!0).forEach(function(o){Jx(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):cm(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}var n7=/\n/g;function r7(e){return e.match(n7)}function o7(e){var t=e.lines,n=e.startingLineNumber,o=e.style;return t.map(function(a,s){var l=s+n;return J.createElement("span",{key:"line-".concat(s),className:"react-syntax-highlighter-line-number",style:typeof o=="function"?o(l):o},"".concat(l,`
`))})}function a7(e){var t=e.codeString,n=e.codeStyle,o=e.containerStyle,a=o===void 0?{float:"left",paddingRight:"10px"}:o,s=e.numberStyle,l=s===void 0?{}:s,i=e.startingLineNumber;return J.createElement("code",{style:Object.assign({},n,a)},o7({lines:t.replace(/\n$/,"").split(`
`),style:l,startingLineNumber:i}))}function s7(e){return"".concat(e.toString().length,".25em")}function tg(e,t){return{type:"element",tagName:"span",properties:{key:"line-number--".concat(e),className:["comment","linenumber","react-syntax-highlighter-line-number"],style:t},children:[{type:"text",value:e}]}}function ng(e,t,n){var o={display:"inline-block",minWidth:s7(n),paddingRight:"1em",textAlign:"right",userSelect:"none"},a=typeof e=="function"?e(t):e,s=_n(_n({},o),a);return s}function Si(e){var t=e.children,n=e.lineNumber,o=e.lineNumberStyle,a=e.largestLineNumber,s=e.showInlineLineNumbers,l=e.lineProps,i=l===void 0?{}:l,c=e.className,d=c===void 0?[]:c,u=e.showLineNumbers,p=e.wrapLongLines,m=typeof i=="function"?i(n):i;if(m.className=d,n&&s){var b=ng(o,n,a);t.unshift(tg(n,b))}return p&u&&(m.style=_n(_n({},m.style),{},{display:"flex"})),{type:"element",tagName:"span",properties:m,children:t}}function rg(e){for(var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],o=0;o<e.length;o++){var a=e[o];if(a.type==="text")n.push(Si({children:[a],className:Kb(new Set(t))}));else if(a.children){var s=t.concat(a.properties.className);rg(a.children,s).forEach(function(l){return n.push(l)})}}return n}function l7(e,t,n,o,a,s,l,i,c){var d,u=rg(e.value),p=[],m=-1,b=0;function S(C,g){var w=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return Si({children:C,lineNumber:g,lineNumberStyle:i,largestLineNumber:l,showInlineLineNumbers:a,lineProps:n,className:w,showLineNumbers:o,wrapLongLines:c})}function j(C,g){if(o&&g&&a){var w=ng(i,g,l);C.unshift(tg(g,w))}return C}function _(C,g){var w=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return t||w.length>0?S(C,g,w):j(C,g)}for(var x=function(){var g=u[b],w=g.children[0].value,k=r7(w);if(k){var E=w.split(`
`);E.forEach(function(L,$){var K=o&&p.length+s,q={type:"text",value:"".concat(L,`
`)};if($===0){var X=u.slice(m+1,b).concat(Si({children:[q],className:g.properties.className})),le=_(X,K);p.push(le)}else if($===E.length-1){var ce=u[b+1]&&u[b+1].children&&u[b+1].children[0],H={type:"text",value:"".concat(L)};if(ce){var D=Si({children:[H],className:g.properties.className});u.splice(b+1,0,D)}else{var P=[H],I=_(P,K,g.properties.className);p.push(I)}}else{var V=[q],W=_(V,K,g.properties.className);p.push(W)}}),m=b}b++};b<u.length;)x();if(m!==u.length-1){var h=u.slice(m+1,u.length);if(h&&h.length){var f=o&&p.length+s,y=_(h,f);p.push(y)}}return t?p:(d=[]).concat.apply(d,p)}function i7(e){var t=e.rows,n=e.stylesheet,o=e.useInlineStyles;return t.map(function(a,s){return eg({node:a,stylesheet:n,useInlineStyles:o,key:"code-segement".concat(s)})})}function og(e){return e&&typeof e.highlightAuto<"u"}function c7(e){var t=e.astGenerator,n=e.language,o=e.code,a=e.defaultCodeValue;if(og(t)){var s=e7(t,n);return n==="text"?{value:a,language:"text"}:s?t.highlight(n,o):t.highlightAuto(o)}try{return n&&n!=="text"?{value:t.highlight(o,n)}:{value:a}}catch{return{value:a}}}function d7(e,t){return function(o){var a=o.language,s=o.children,l=o.style,i=l===void 0?t:l,c=o.customStyle,d=c===void 0?{}:c,u=o.codeTagProps,p=u===void 0?{className:a?"language-".concat(a):void 0,style:_n(_n({},i['code[class*="language-"]']),i['code[class*="language-'.concat(a,'"]')])}:u,m=o.useInlineStyles,b=m===void 0?!0:m,S=o.showLineNumbers,j=S===void 0?!1:S,_=o.showInlineLineNumbers,x=_===void 0?!0:_,h=o.startingLineNumber,f=h===void 0?1:h,y=o.lineNumberContainerStyle,C=o.lineNumberStyle,g=C===void 0?{}:C,w=o.wrapLines,k=o.wrapLongLines,E=k===void 0?!1:k,L=o.lineProps,$=L===void 0?{}:L,K=o.renderer,q=o.PreTag,X=q===void 0?"pre":q,le=o.CodeTag,ce=le===void 0?"code":le,H=o.code,D=H===void 0?(Array.isArray(s)?s[0]:s)||"":H,P=o.astGenerator,I=Ub(o,t7);P=P||e;var V=j?J.createElement(a7,{containerStyle:y,codeStyle:p.style||{},numberStyle:g,startingLineNumber:f,codeString:D}):null,W=i.hljs||i['pre[class*="language-"]']||{backgroundColor:"#fff"},_e=og(P)?"hljs":"prismjs",ue=b?Object.assign({},I,{style:Object.assign({},W,d)}):Object.assign({},I,{className:I.className?"".concat(_e," ").concat(I.className):_e,style:Object.assign({},d)});if(E?p.style=_n(_n({},p.style),{},{whiteSpace:"pre-wrap"}):p.style=_n(_n({},p.style),{},{whiteSpace:"pre"}),!P)return J.createElement(X,ue,V,J.createElement(ce,p,D));(w===void 0&&K||E)&&(w=!0),K=K||i7;var Ce=[{type:"text",value:D}],de=c7({astGenerator:P,language:a,code:D,defaultCodeValue:Ce});de.language===null&&(de.value=Ce);var Oe=de.value.length+f,ct=l7(de,w,$,j,x,f,Oe,g,E);return J.createElement(X,ue,J.createElement(ce,p,!x&&V,K({rows:ct,stylesheet:i,useInlineStyles:b})))}}var u7=h7,p7=Object.prototype.hasOwnProperty;function h7(){for(var e={},t=0;t<arguments.length;t++){var n=arguments[t];for(var o in n)p7.call(n,o)&&(e[o]=n[o])}return e}var ag=sg,qp=sg.prototype;qp.space=null;qp.normal={};qp.property={};function sg(e,t,n){this.property=e,this.normal=t,n&&(this.space=n)}var dm=u7,f7=ag,m7=x7;function x7(e){for(var t=e.length,n=[],o=[],a=-1,s,l;++a<t;)s=e[a],n.push(s.property),o.push(s.normal),l=s.space;return new f7(dm.apply(null,n),dm.apply(null,o),l)}var Xp=g7;function g7(e){return e.toLowerCase()}var lg=ig,tn=ig.prototype;tn.space=null;tn.attribute=null;tn.property=null;tn.boolean=!1;tn.booleanish=!1;tn.overloadedBoolean=!1;tn.number=!1;tn.commaSeparated=!1;tn.spaceSeparated=!1;tn.commaOrSpaceSeparated=!1;tn.mustUseProperty=!1;tn.defined=!1;function ig(e,t){this.property=e,this.attribute=t}var Dn={},v7=0;Dn.boolean=xo();Dn.booleanish=xo();Dn.overloadedBoolean=xo();Dn.number=xo();Dn.spaceSeparated=xo();Dn.commaSeparated=xo();Dn.commaOrSpaceSeparated=xo();function xo(){return Math.pow(2,++v7)}var cg=lg,um=Dn,dg=Qp;Qp.prototype=new cg;Qp.prototype.defined=!0;var ug=["boolean","booleanish","overloadedBoolean","number","commaSeparated","spaceSeparated","commaOrSpaceSeparated"],b7=ug.length;function Qp(e,t,n,o){var a=-1,s;for(pm(this,"space",o),cg.call(this,e,t);++a<b7;)s=ug[a],pm(this,s,(n&um[s])===um[s])}function pm(e,t,n){n&&(e[t]=n)}var hm=Xp,y7=ag,j7=dg,nl=S7;function S7(e){var t=e.space,n=e.mustUseProperty||[],o=e.attributes||{},a=e.properties,s=e.transform,l={},i={},c,d;for(c in a)d=new j7(c,s(o,c),a[c],t),n.indexOf(c)!==-1&&(d.mustUseProperty=!0),l[c]=d,i[hm(c)]=c,i[hm(d.attribute)]=c;return new y7(l,i,t)}var C7=nl,w7=C7({space:"xlink",transform:_7,properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}});function _7(e,t){return"xlink:"+t.slice(5).toLowerCase()}var T7=nl,k7=T7({space:"xml",transform:E7,properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function E7(e,t){return"xml:"+t.slice(3).toLowerCase()}var N7=R7;function R7(e,t){return t in e?e[t]:t}var O7=N7,pg=L7;function L7(e,t){return O7(e,t.toLowerCase())}var D7=nl,B7=pg,$7=D7({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:B7,properties:{xmlns:null,xmlnsXLink:null}}),Jp=Dn,A7=nl,kt=Jp.booleanish,Ht=Jp.number,Yr=Jp.spaceSeparated,M7=A7({transform:P7,properties:{ariaActiveDescendant:null,ariaAtomic:kt,ariaAutoComplete:null,ariaBusy:kt,ariaChecked:kt,ariaColCount:Ht,ariaColIndex:Ht,ariaColSpan:Ht,ariaControls:Yr,ariaCurrent:null,ariaDescribedBy:Yr,ariaDetails:null,ariaDisabled:kt,ariaDropEffect:Yr,ariaErrorMessage:null,ariaExpanded:kt,ariaFlowTo:Yr,ariaGrabbed:kt,ariaHasPopup:null,ariaHidden:kt,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Yr,ariaLevel:Ht,ariaLive:null,ariaModal:kt,ariaMultiLine:kt,ariaMultiSelectable:kt,ariaOrientation:null,ariaOwns:Yr,ariaPlaceholder:null,ariaPosInSet:Ht,ariaPressed:kt,ariaReadOnly:kt,ariaRelevant:null,ariaRequired:kt,ariaRoleDescription:Yr,ariaRowCount:Ht,ariaRowIndex:Ht,ariaRowSpan:Ht,ariaSelected:kt,ariaSetSize:Ht,ariaSort:null,ariaValueMax:Ht,ariaValueMin:Ht,ariaValueNow:Ht,ariaValueText:null,role:null}});function P7(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}var ba=Dn,I7=nl,z7=pg,fe=ba.boolean,F7=ba.overloadedBoolean,Za=ba.booleanish,Ee=ba.number,gt=ba.spaceSeparated,ql=ba.commaSeparated,U7=I7({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:z7,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:ql,acceptCharset:gt,accessKey:gt,action:null,allow:null,allowFullScreen:fe,allowPaymentRequest:fe,allowUserMedia:fe,alt:null,as:null,async:fe,autoCapitalize:null,autoComplete:gt,autoFocus:fe,autoPlay:fe,capture:fe,charSet:null,checked:fe,cite:null,className:gt,cols:Ee,colSpan:null,content:null,contentEditable:Za,controls:fe,controlsList:gt,coords:Ee|ql,crossOrigin:null,data:null,dateTime:null,decoding:null,default:fe,defer:fe,dir:null,dirName:null,disabled:fe,download:F7,draggable:Za,encType:null,enterKeyHint:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:fe,formTarget:null,headers:gt,height:Ee,hidden:fe,high:Ee,href:null,hrefLang:null,htmlFor:gt,httpEquiv:gt,id:null,imageSizes:null,imageSrcSet:ql,inputMode:null,integrity:null,is:null,isMap:fe,itemId:null,itemProp:gt,itemRef:gt,itemScope:fe,itemType:gt,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:fe,low:Ee,manifest:null,max:null,maxLength:Ee,media:null,method:null,min:null,minLength:Ee,multiple:fe,muted:fe,name:null,nonce:null,noModule:fe,noValidate:fe,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforePrint:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextMenu:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:fe,optimum:Ee,pattern:null,ping:gt,placeholder:null,playsInline:fe,poster:null,preload:null,readOnly:fe,referrerPolicy:null,rel:gt,required:fe,reversed:fe,rows:Ee,rowSpan:Ee,sandbox:gt,scope:null,scoped:fe,seamless:fe,selected:fe,shape:null,size:Ee,sizes:null,slot:null,span:Ee,spellCheck:Za,src:null,srcDoc:null,srcLang:null,srcSet:ql,start:Ee,step:null,style:null,tabIndex:Ee,target:null,title:null,translate:null,type:null,typeMustMatch:fe,useMap:null,value:Za,width:Ee,wrap:null,align:null,aLink:null,archive:gt,axis:null,background:null,bgColor:null,border:Ee,borderColor:null,bottomMargin:Ee,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:fe,declare:fe,event:null,face:null,frame:null,frameBorder:null,hSpace:Ee,leftMargin:Ee,link:null,longDesc:null,lowSrc:null,marginHeight:Ee,marginWidth:Ee,noResize:fe,noHref:fe,noShade:fe,noWrap:fe,object:null,profile:null,prompt:null,rev:null,rightMargin:Ee,rules:null,scheme:null,scrolling:Za,standby:null,summary:null,text:null,topMargin:Ee,valueType:null,version:null,vAlign:null,vLink:null,vSpace:Ee,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:fe,disableRemotePlayback:fe,prefix:null,property:null,results:Ee,security:null,unselectable:null}}),V7=m7,H7=w7,W7=k7,Z7=$7,K7=M7,Y7=U7,G7=V7([W7,H7,Z7,K7,Y7]),q7=Xp,X7=dg,Q7=lg,eh="data",J7=ny,ey=/^data[-\w.:]+$/i,hg=/-[a-z]/g,ty=/[A-Z]/g;function ny(e,t){var n=q7(t),o=t,a=Q7;return n in e.normal?e.property[e.normal[n]]:(n.length>4&&n.slice(0,4)===eh&&ey.test(t)&&(t.charAt(4)==="-"?o=ry(t):t=oy(t),a=X7),new a(o,t))}function ry(e){var t=e.slice(5).replace(hg,sy);return eh+t.charAt(0).toUpperCase()+t.slice(1)}function oy(e){var t=e.slice(4);return hg.test(t)?e:(t=t.replace(ty,ay),t.charAt(0)!=="-"&&(t="-"+t),eh+t)}function ay(e){return"-"+e.toLowerCase()}function sy(e){return e.charAt(1).toUpperCase()}var ly=iy,fm=/[#.]/g;function iy(e,t){for(var n=e||"",o=t||"div",a={},s=0,l,i,c;s<n.length;)fm.lastIndex=s,c=fm.exec(n),l=n.slice(s,c?c.index:n.length),l&&(i?i==="#"?a.id=l:a.className?a.className.push(l):a.className=[l]:o=l,s+=l.length),c&&(i=c[0],s++);return{type:"element",tagName:o,properties:a,children:[]}}var th={};th.parse=uy;th.stringify=py;var mm="",cy=" ",dy=/[ \t\n\r\f]+/g;function uy(e){var t=String(e||mm).trim();return t===mm?[]:t.split(dy)}function py(e){return e.join(cy).trim()}var nh={};nh.parse=hy;nh.stringify=fy;var zu=",",xm=" ",os="";function hy(e){for(var t=[],n=String(e||os),o=n.indexOf(zu),a=0,s=!1,l;!s;)o===-1&&(o=n.length,s=!0),l=n.slice(a,o).trim(),(l||!s)&&t.push(l),a=o+1,o=n.indexOf(zu,a);return t}function fy(e,t){var n=t||{},o=n.padLeft===!1?os:xm,a=n.padRight?xm:os;return e[e.length-1]===os&&(e=e.concat(os)),e.join(a+zu+o).trim()}var my=J7,gm=Xp,xy=ly,vm=th.parse,bm=nh.parse,gy=by,vy={}.hasOwnProperty;function by(e,t,n){var o=n?wy(n):null;return a;function a(l,i){var c=xy(l,t),d=Array.prototype.slice.call(arguments,2),u=c.tagName.toLowerCase(),p;if(c.tagName=o&&vy.call(o,u)?o[u]:u,i&&yy(i,c)&&(d.unshift(i),i=null),i)for(p in i)s(c.properties,p,i[p]);return fg(c.children,d),c.tagName==="template"&&(c.content={type:"root",children:c.children},c.children=[]),c}function s(l,i,c){var d,u,p;c==null||c!==c||(d=my(e,i),u=d.property,p=c,typeof p=="string"&&(d.spaceSeparated?p=vm(p):d.commaSeparated?p=bm(p):d.commaOrSpaceSeparated&&(p=vm(bm(p).join(" ")))),u==="style"&&typeof c!="string"&&(p=Cy(p)),u==="className"&&l.className&&(p=l.className.concat(p)),l[u]=Sy(d,u,p))}}function yy(e,t){return typeof e=="string"||"length"in e||jy(t.tagName,e)}function jy(e,t){var n=t.type;return e==="input"||!n||typeof n!="string"?!1:typeof t.children=="object"&&"length"in t.children?!0:(n=n.toLowerCase(),e==="button"?n!=="menu"&&n!=="submit"&&n!=="reset"&&n!=="button":"value"in t)}function fg(e,t){var n,o;if(typeof t=="string"||typeof t=="number"){e.push({type:"text",value:String(t)});return}if(typeof t=="object"&&"length"in t){for(n=-1,o=t.length;++n<o;)fg(e,t[n]);return}if(typeof t!="object"||!("type"in t))throw new Error("Expected node, nodes, or string, got `"+t+"`");e.push(t)}function Sy(e,t,n){var o,a,s;if(typeof n!="object"||!("length"in n))return ym(e,t,n);for(a=n.length,o=-1,s=[];++o<a;)s[o]=ym(e,t,n[o]);return s}function ym(e,t,n){var o=n;return e.number||e.positiveNumber?!isNaN(o)&&o!==""&&(o=Number(o)):(e.boolean||e.overloadedBoolean)&&typeof o=="string"&&(o===""||gm(n)===gm(t))&&(o=!0),o}function Cy(e){var t=[],n;for(n in e)t.push([n,e[n]].join(": "));return t.join("; ")}function wy(e){for(var t=e.length,n=-1,o={},a;++n<t;)a=e[n],o[a.toLowerCase()]=a;return o}var _y=G7,Ty=gy,mg=Ty(_y,"div");mg.displayName="html";var ky=mg,Ey=ky;const Ny="Æ",Ry="&",Oy="Á",Ly="Â",Dy="À",By="Å",$y="Ã",Ay="Ä",My="©",Py="Ç",Iy="Ð",zy="É",Fy="Ê",Uy="È",Vy="Ë",Hy=">",Wy="Í",Zy="Î",Ky="Ì",Yy="Ï",Gy="<",qy="Ñ",Xy="Ó",Qy="Ô",Jy="Ò",ej="Ø",tj="Õ",nj="Ö",rj='"',oj="®",aj="Þ",sj="Ú",lj="Û",ij="Ù",cj="Ü",dj="Ý",uj="á",pj="â",hj="´",fj="æ",mj="à",xj="&",gj="å",vj="ã",bj="ä",yj="¦",jj="ç",Sj="¸",Cj="¢",wj="©",_j="¤",Tj="°",kj="÷",Ej="é",Nj="ê",Rj="è",Oj="ð",Lj="ë",Dj="½",Bj="¼",$j="¾",Aj=">",Mj="í",Pj="î",Ij="¡",zj="ì",Fj="¿",Uj="ï",Vj="«",Hj="<",Wj="¯",Zj="µ",Kj="·",Yj=" ",Gj="¬",qj="ñ",Xj="ó",Qj="ô",Jj="ò",e9="ª",t9="º",n9="ø",r9="õ",o9="ö",a9="¶",s9="±",l9="£",i9='"',c9="»",d9="®",u9="§",p9="­",h9="¹",f9="²",m9="³",x9="ß",g9="þ",v9="×",b9="ú",y9="û",j9="ù",S9="¨",C9="ü",w9="ý",_9="¥",T9="ÿ",k9={AElig:Ny,AMP:Ry,Aacute:Oy,Acirc:Ly,Agrave:Dy,Aring:By,Atilde:$y,Auml:Ay,COPY:My,Ccedil:Py,ETH:Iy,Eacute:zy,Ecirc:Fy,Egrave:Uy,Euml:Vy,GT:Hy,Iacute:Wy,Icirc:Zy,Igrave:Ky,Iuml:Yy,LT:Gy,Ntilde:qy,Oacute:Xy,Ocirc:Qy,Ograve:Jy,Oslash:ej,Otilde:tj,Ouml:nj,QUOT:rj,REG:oj,THORN:aj,Uacute:sj,Ucirc:lj,Ugrave:ij,Uuml:cj,Yacute:dj,aacute:uj,acirc:pj,acute:hj,aelig:fj,agrave:mj,amp:xj,aring:gj,atilde:vj,auml:bj,brvbar:yj,ccedil:jj,cedil:Sj,cent:Cj,copy:wj,curren:_j,deg:Tj,divide:kj,eacute:Ej,ecirc:Nj,egrave:Rj,eth:Oj,euml:Lj,frac12:Dj,frac14:Bj,frac34:$j,gt:Aj,iacute:Mj,icirc:Pj,iexcl:Ij,igrave:zj,iquest:Fj,iuml:Uj,laquo:Vj,lt:Hj,macr:Wj,micro:Zj,middot:Kj,nbsp:Yj,not:Gj,ntilde:qj,oacute:Xj,ocirc:Qj,ograve:Jj,ordf:e9,ordm:t9,oslash:n9,otilde:r9,ouml:o9,para:a9,plusmn:s9,pound:l9,quot:i9,raquo:c9,reg:d9,sect:u9,shy:p9,sup1:h9,sup2:f9,sup3:m9,szlig:x9,thorn:g9,times:v9,uacute:b9,ucirc:y9,ugrave:j9,uml:S9,uuml:C9,yacute:w9,yen:_9,yuml:T9},E9={0:"�",128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"};var xg=N9;function N9(e){var t=typeof e=="string"?e.charCodeAt(0):e;return t>=48&&t<=57}var R9=O9;function O9(e){var t=typeof e=="string"?e.charCodeAt(0):e;return t>=97&&t<=102||t>=65&&t<=70||t>=48&&t<=57}var L9=D9;function D9(e){var t=typeof e=="string"?e.charCodeAt(0):e;return t>=97&&t<=122||t>=65&&t<=90}var B9=L9,$9=xg,A9=M9;function M9(e){return B9(e)||$9(e)}var Xl,P9=59,I9=z9;function z9(e){var t="&"+e+";",n;return Xl=Xl||document.createElement("i"),Xl.innerHTML=t,n=Xl.textContent,n.charCodeAt(n.length-1)===P9&&e!=="semi"||n===t?!1:n}var jm=k9,Sm=E9,F9=xg,U9=R9,gg=A9,V9=I9,H9=rS,W9={}.hasOwnProperty,Ro=String.fromCharCode,Z9=Function.prototype,Cm={warning:null,reference:null,text:null,warningContext:null,referenceContext:null,textContext:null,position:{},additional:null,attribute:!1,nonTerminated:!0},K9=9,wm=10,Y9=12,G9=32,_m=38,q9=59,X9=60,Q9=61,J9=35,eS=88,tS=120,nS=65533,Do="named",rh="hexadecimal",oh="decimal",ah={};ah[rh]=16;ah[oh]=10;var Tc={};Tc[Do]=gg;Tc[oh]=F9;Tc[rh]=U9;var vg=1,bg=2,yg=3,jg=4,Sg=5,Fu=6,Cg=7,$r={};$r[vg]="Named character references must be terminated by a semicolon";$r[bg]="Numeric character references must be terminated by a semicolon";$r[yg]="Named character references cannot be empty";$r[jg]="Numeric character references cannot be empty";$r[Sg]="Named character references must be known";$r[Fu]="Numeric character references cannot be disallowed";$r[Cg]="Numeric character references cannot be outside the permissible Unicode range";function rS(e,t){var n={},o,a;t||(t={});for(a in Cm)o=t[a],n[a]=o??Cm[a];return(n.position.indent||n.position.start)&&(n.indent=n.position.indent||[],n.position=n.position.start),oS(e,n)}function oS(e,t){var n=t.additional,o=t.nonTerminated,a=t.text,s=t.reference,l=t.warning,i=t.textContext,c=t.referenceContext,d=t.warningContext,u=t.position,p=t.indent||[],m=e.length,b=0,S=-1,j=u.column||1,_=u.line||1,x="",h=[],f,y,C,g,w,k,E,L,$,K,q,X,le,ce,H,D,P,I,V;for(typeof n=="string"&&(n=n.charCodeAt(0)),D=W(),L=l?_e:Z9,b--,m++;++b<m;)if(w===wm&&(j=p[S]||1),w=e.charCodeAt(b),w===_m){if(E=e.charCodeAt(b+1),E===K9||E===wm||E===Y9||E===G9||E===_m||E===X9||E!==E||n&&E===n){x+=Ro(w),j++;continue}for(le=b+1,X=le,V=le,E===J9?(V=++X,E=e.charCodeAt(V),E===eS||E===tS?(ce=rh,V=++X):ce=oh):ce=Do,f="",q="",g="",H=Tc[ce],V--;++V<m&&(E=e.charCodeAt(V),!!H(E));)g+=Ro(E),ce===Do&&W9.call(jm,g)&&(f=g,q=jm[g]);C=e.charCodeAt(V)===q9,C&&(V++,y=ce===Do?V9(g):!1,y&&(f=g,q=y)),I=1+V-le,!C&&!o||(g?ce===Do?(C&&!q?L(Sg,1):(f!==g&&(V=X+f.length,I=1+V-X,C=!1),C||($=f?vg:yg,t.attribute?(E=e.charCodeAt(V),E===Q9?(L($,I),q=null):gg(E)?q=null:L($,I)):L($,I))),k=q):(C||L(bg,I),k=parseInt(g,ah[ce]),aS(k)?(L(Cg,I),k=Ro(nS)):k in Sm?(L(Fu,I),k=Sm[k]):(K="",sS(k)&&L(Fu,I),k>65535&&(k-=65536,K+=Ro(k>>>10|55296),k=56320|k&1023),k=K+Ro(k))):ce!==Do&&L(jg,I)),k?(ue(),D=W(),b=V-1,j+=V-le+1,h.push(k),P=W(),P.offset++,s&&s.call(c,k,{start:D,end:P},e.slice(le-1,V)),D=P):(g=e.slice(le-1,V),x+=g,j+=g.length,b=V-1)}else w===10&&(_++,S++,j=0),w===w?(x+=Ro(w),j++):ue();return h.join("");function W(){return{line:_,column:j,offset:b+(u.offset||0)}}function _e(Ce,de){var Oe=W();Oe.column+=de,Oe.offset+=de,l.call(d,$r[Ce],Oe,Ce)}function ue(){x&&(h.push(x),a&&a.call(i,x,{start:D,end:W()}),x="")}}function aS(e){return e>=55296&&e<=57343||e>1114111}function sS(e){return e>=1&&e<=8||e===11||e>=13&&e<=31||e>=127&&e<=159||e>=64976&&e<=65007||(e&65535)===65535||(e&65535)===65534}var wg={exports:{}};(function(e){var t=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=function(o){var a=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,s=0,l={},i={manual:o.Prism&&o.Prism.manual,disableWorkerMessageHandler:o.Prism&&o.Prism.disableWorkerMessageHandler,util:{encode:function h(f){return f instanceof c?new c(f.type,h(f.content),f.alias):Array.isArray(f)?f.map(h):f.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(h){return Object.prototype.toString.call(h).slice(8,-1)},objId:function(h){return h.__id||Object.defineProperty(h,"__id",{value:++s}),h.__id},clone:function h(f,y){y=y||{};var C,g;switch(i.util.type(f)){case"Object":if(g=i.util.objId(f),y[g])return y[g];C={},y[g]=C;for(var w in f)f.hasOwnProperty(w)&&(C[w]=h(f[w],y));return C;case"Array":return g=i.util.objId(f),y[g]?y[g]:(C=[],y[g]=C,f.forEach(function(k,E){C[E]=h(k,y)}),C);default:return f}},getLanguage:function(h){for(;h;){var f=a.exec(h.className);if(f)return f[1].toLowerCase();h=h.parentElement}return"none"},setLanguage:function(h,f){h.className=h.className.replace(RegExp(a,"gi"),""),h.classList.add("language-"+f)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(C){var h=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(C.stack)||[])[1];if(h){var f=document.getElementsByTagName("script");for(var y in f)if(f[y].src==h)return f[y]}return null}},isActive:function(h,f,y){for(var C="no-"+f;h;){var g=h.classList;if(g.contains(f))return!0;if(g.contains(C))return!1;h=h.parentElement}return!!y}},languages:{plain:l,plaintext:l,text:l,txt:l,extend:function(h,f){var y=i.util.clone(i.languages[h]);for(var C in f)y[C]=f[C];return y},insertBefore:function(h,f,y,C){C=C||i.languages;var g=C[h],w={};for(var k in g)if(g.hasOwnProperty(k)){if(k==f)for(var E in y)y.hasOwnProperty(E)&&(w[E]=y[E]);y.hasOwnProperty(k)||(w[k]=g[k])}var L=C[h];return C[h]=w,i.languages.DFS(i.languages,function($,K){K===L&&$!=h&&(this[$]=w)}),w},DFS:function h(f,y,C,g){g=g||{};var w=i.util.objId;for(var k in f)if(f.hasOwnProperty(k)){y.call(f,k,f[k],C||k);var E=f[k],L=i.util.type(E);L==="Object"&&!g[w(E)]?(g[w(E)]=!0,h(E,y,null,g)):L==="Array"&&!g[w(E)]&&(g[w(E)]=!0,h(E,y,k,g))}}},plugins:{},highlightAll:function(h,f){i.highlightAllUnder(document,h,f)},highlightAllUnder:function(h,f,y){var C={callback:y,container:h,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};i.hooks.run("before-highlightall",C),C.elements=Array.prototype.slice.apply(C.container.querySelectorAll(C.selector)),i.hooks.run("before-all-elements-highlight",C);for(var g=0,w;w=C.elements[g++];)i.highlightElement(w,f===!0,C.callback)},highlightElement:function(h,f,y){var C=i.util.getLanguage(h),g=i.languages[C];i.util.setLanguage(h,C);var w=h.parentElement;w&&w.nodeName.toLowerCase()==="pre"&&i.util.setLanguage(w,C);var k=h.textContent,E={element:h,language:C,grammar:g,code:k};function L(K){E.highlightedCode=K,i.hooks.run("before-insert",E),E.element.innerHTML=E.highlightedCode,i.hooks.run("after-highlight",E),i.hooks.run("complete",E),y&&y.call(E.element)}if(i.hooks.run("before-sanity-check",E),w=E.element.parentElement,w&&w.nodeName.toLowerCase()==="pre"&&!w.hasAttribute("tabindex")&&w.setAttribute("tabindex","0"),!E.code){i.hooks.run("complete",E),y&&y.call(E.element);return}if(i.hooks.run("before-highlight",E),!E.grammar){L(i.util.encode(E.code));return}if(f&&o.Worker){var $=new Worker(i.filename);$.onmessage=function(K){L(K.data)},$.postMessage(JSON.stringify({language:E.language,code:E.code,immediateClose:!0}))}else L(i.highlight(E.code,E.grammar,E.language))},highlight:function(h,f,y){var C={code:h,grammar:f,language:y};if(i.hooks.run("before-tokenize",C),!C.grammar)throw new Error('The language "'+C.language+'" has no grammar.');return C.tokens=i.tokenize(C.code,C.grammar),i.hooks.run("after-tokenize",C),c.stringify(i.util.encode(C.tokens),C.language)},tokenize:function(h,f){var y=f.rest;if(y){for(var C in y)f[C]=y[C];delete f.rest}var g=new p;return m(g,g.head,h),u(h,g,f,g.head,0),S(g)},hooks:{all:{},add:function(h,f){var y=i.hooks.all;y[h]=y[h]||[],y[h].push(f)},run:function(h,f){var y=i.hooks.all[h];if(!(!y||!y.length))for(var C=0,g;g=y[C++];)g(f)}},Token:c};o.Prism=i;function c(h,f,y,C){this.type=h,this.content=f,this.alias=y,this.length=(C||"").length|0}c.stringify=function h(f,y){if(typeof f=="string")return f;if(Array.isArray(f)){var C="";return f.forEach(function(L){C+=h(L,y)}),C}var g={type:f.type,content:h(f.content,y),tag:"span",classes:["token",f.type],attributes:{},language:y},w=f.alias;w&&(Array.isArray(w)?Array.prototype.push.apply(g.classes,w):g.classes.push(w)),i.hooks.run("wrap",g);var k="";for(var E in g.attributes)k+=" "+E+'="'+(g.attributes[E]||"").replace(/"/g,"&quot;")+'"';return"<"+g.tag+' class="'+g.classes.join(" ")+'"'+k+">"+g.content+"</"+g.tag+">"};function d(h,f,y,C){h.lastIndex=f;var g=h.exec(y);if(g&&C&&g[1]){var w=g[1].length;g.index+=w,g[0]=g[0].slice(w)}return g}function u(h,f,y,C,g,w){for(var k in y)if(!(!y.hasOwnProperty(k)||!y[k])){var E=y[k];E=Array.isArray(E)?E:[E];for(var L=0;L<E.length;++L){if(w&&w.cause==k+","+L)return;var $=E[L],K=$.inside,q=!!$.lookbehind,X=!!$.greedy,le=$.alias;if(X&&!$.pattern.global){var ce=$.pattern.toString().match(/[imsuy]*$/)[0];$.pattern=RegExp($.pattern.source,ce+"g")}for(var H=$.pattern||$,D=C.next,P=g;D!==f.tail&&!(w&&P>=w.reach);P+=D.value.length,D=D.next){var I=D.value;if(f.length>h.length)return;if(!(I instanceof c)){var V=1,W;if(X){if(W=d(H,P,h,q),!W||W.index>=h.length)break;var de=W.index,_e=W.index+W[0].length,ue=P;for(ue+=D.value.length;de>=ue;)D=D.next,ue+=D.value.length;if(ue-=D.value.length,P=ue,D.value instanceof c)continue;for(var Ce=D;Ce!==f.tail&&(ue<_e||typeof Ce.value=="string");Ce=Ce.next)V++,ue+=Ce.value.length;V--,I=h.slice(P,ue),W.index-=P}else if(W=d(H,0,I,q),!W)continue;var de=W.index,Oe=W[0],ct=I.slice(0,de),wt=I.slice(de+Oe.length),xe=P+I.length;w&&xe>w.reach&&(w.reach=xe);var Le=D.prev;ct&&(Le=m(f,Le,ct),P+=ct.length),b(f,Le,V);var et=new c(k,K?i.tokenize(Oe,K):Oe,le,Oe);if(D=m(f,Le,et),wt&&m(f,D,wt),V>1){var Bt={cause:k+","+L,reach:xe};u(h,f,y,D.prev,P,Bt),w&&Bt.reach>w.reach&&(w.reach=Bt.reach)}}}}}}function p(){var h={value:null,prev:null,next:null},f={value:null,prev:h,next:null};h.next=f,this.head=h,this.tail=f,this.length=0}function m(h,f,y){var C=f.next,g={value:y,prev:f,next:C};return f.next=g,C.prev=g,h.length++,g}function b(h,f,y){for(var C=f.next,g=0;g<y&&C!==h.tail;g++)C=C.next;f.next=C,C.prev=f,h.length-=g}function S(h){for(var f=[],y=h.head.next;y!==h.tail;)f.push(y.value),y=y.next;return f}if(!o.document)return o.addEventListener&&(i.disableWorkerMessageHandler||o.addEventListener("message",function(h){var f=JSON.parse(h.data),y=f.language,C=f.code,g=f.immediateClose;o.postMessage(i.highlight(C,i.languages[y],y)),g&&o.close()},!1)),i;var j=i.util.currentScript();j&&(i.filename=j.src,j.hasAttribute("data-manual")&&(i.manual=!0));function _(){i.manual||i.highlightAll()}if(!i.manual){var x=document.readyState;x==="loading"||x==="interactive"&&j&&j.defer?document.addEventListener("DOMContentLoaded",_):window.requestAnimationFrame?window.requestAnimationFrame(_):window.setTimeout(_,16)}return i}(t);e.exports&&(e.exports=n),typeof ki<"u"&&(ki.Prism=n)})(wg);var lS=wg.exports,iS=sh;sh.displayName="markup";sh.aliases=["html","mathml","svg","xml","ssml","atom","rss"];function sh(e){e.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},e.languages.markup.tag.inside["attr-value"].inside.entity=e.languages.markup.entity,e.languages.markup.doctype.inside["internal-subset"].inside=e.languages.markup,e.hooks.add("wrap",function(t){t.type==="entity"&&(t.attributes.title=t.content.value.replace(/&amp;/,"&"))}),Object.defineProperty(e.languages.markup.tag,"addInlined",{value:function(n,o){var a={};a["language-"+o]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:e.languages[o]},a.cdata=/^<!\[CDATA\[|\]\]>$/i;var s={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};s["language-"+o]={pattern:/[\s\S]+/,inside:e.languages[o]};var l={};l[n]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return n}),"i"),lookbehind:!0,greedy:!0,inside:s},e.languages.insertBefore("markup","cdata",l)}}),Object.defineProperty(e.languages.markup.tag,"addAttribute",{value:function(t,n){e.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+t+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[n,"language-"+n],inside:e.languages[n]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),e.languages.html=e.languages.markup,e.languages.mathml=e.languages.markup,e.languages.svg=e.languages.markup,e.languages.xml=e.languages.extend("markup",{}),e.languages.ssml=e.languages.xml,e.languages.atom=e.languages.xml,e.languages.rss=e.languages.xml}var _g=lh;lh.displayName="css";lh.aliases=[];function lh(e){(function(t){var n=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;t.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+n.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+n.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+n.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:n,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},t.languages.css.atrule.inside.rest=t.languages.css;var o=t.languages.markup;o&&(o.tag.addInlined("style","css"),o.tag.addAttribute("style","css"))})(e)}const cS=Qn(_g);var dS=ih;ih.displayName="clike";ih.aliases=[];function ih(e){e.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/}}var uS=ch;ch.displayName="javascript";ch.aliases=["js"];function ch(e){e.languages.javascript=e.languages.extend("clike",{"class-name":[e.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),e.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,e.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:e.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:e.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:e.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:e.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:e.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),e.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:e.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),e.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),e.languages.markup&&(e.languages.markup.tag.addInlined("script","javascript"),e.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),e.languages.js=e.languages.javascript}var as=typeof globalThis=="object"?globalThis:typeof self=="object"?self:typeof window=="object"?window:typeof ki=="object"?ki:{},pS=ES();as.Prism={manual:!0,disableWorkerMessageHandler:!0};var hS=Ey,fS=H9,Tg=lS,mS=iS,xS=_g,gS=dS,vS=uS;pS();var dh={}.hasOwnProperty;function kg(){}kg.prototype=Tg;var Ge=new kg,bS=Ge;Ge.highlight=jS;Ge.register=rl;Ge.alias=yS;Ge.registered=SS;Ge.listLanguages=CS;rl(mS);rl(xS);rl(gS);rl(vS);Ge.util.encode=TS;Ge.Token.stringify=wS;function rl(e){if(typeof e!="function"||!e.displayName)throw new Error("Expected `function` for `grammar`, got `"+e+"`");Ge.languages[e.displayName]===void 0&&e(Ge)}function yS(e,t){var n=Ge.languages,o=e,a,s,l,i;t&&(o={},o[e]=t);for(a in o)for(s=o[a],s=typeof s=="string"?[s]:s,l=s.length,i=-1;++i<l;)n[s[i]]=n[a]}function jS(e,t){var n=Tg.highlight,o;if(typeof e!="string")throw new Error("Expected `string` for `value`, got `"+e+"`");if(Ge.util.type(t)==="Object")o=t,t=null;else{if(typeof t!="string")throw new Error("Expected `string` for `name`, got `"+t+"`");if(dh.call(Ge.languages,t))o=Ge.languages[t];else throw new Error("Unknown language: `"+t+"` is not registered")}return n.call(this,e,o,t)}function SS(e){if(typeof e!="string")throw new Error("Expected `string` for `language`, got `"+e+"`");return dh.call(Ge.languages,e)}function CS(){var e=Ge.languages,t=[],n;for(n in e)dh.call(e,n)&&typeof e[n]=="object"&&t.push(n);return t}function wS(e,t,n){var o;return typeof e=="string"?{type:"text",value:e}:Ge.util.type(e)==="Array"?_S(e,t):(o={type:e.type,content:Ge.Token.stringify(e.content,t,n),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:n},e.alias&&(o.classes=o.classes.concat(e.alias)),Ge.hooks.run("wrap",o),hS(o.tag+"."+o.classes.join("."),kS(o.attributes),o.content))}function _S(e,t){for(var n=[],o=e.length,a=-1,s;++a<o;)s=e[a],s!==""&&s!==null&&s!==void 0&&n.push(s);for(a=-1,o=n.length;++a<o;)s=n[a],n[a]=Ge.Token.stringify(s,t,n);return n}function TS(e){return e}function kS(e){var t;for(t in e)e[t]=fS(e[t]);return e}function ES(){var e="Prism"in as,t=e?as.Prism:void 0;return n;function n(){e?as.Prism=t:delete as.Prism,e=void 0,t=void 0}}const uh=Qn(bS);var ph=d7(uh,{});ph.registerLanguage=function(e,t){return uh.register(t)};ph.alias=function(e,t){return uh.alias(e,t)};const go=ph;var NS=hh;hh.displayName="bash";hh.aliases=["shell"];function hh(e){(function(t){var n="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",o={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},a={bash:o,environment:{pattern:RegExp("\\$"+n),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+n),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};t.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+n),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:a},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:o}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:a},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:a.entity}}],environment:{pattern:RegExp("\\$?"+n),alias:"constant"},variable:a.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},o.inside=t.languages.bash;for(var s=["comment","function-name","for-or-select","assign-left","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],l=a.variable[1].inside,i=0;i<s.length;i++)l[s[i]]=t.languages.bash[s[i]];t.languages.shell=t.languages.bash})(e)}const RS=Qn(NS);var OS=fh;fh.displayName="json";fh.aliases=["webmanifest"];function fh(e){e.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},e.languages.webmanifest=e.languages.json}const LS=Qn(OS);var DS=mh;mh.displayName="jsx";mh.aliases=[];function mh(e){(function(t){var n=t.util.clone(t.languages.javascript),o=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,a=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,s=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function l(d,u){return d=d.replace(/<S>/g,function(){return o}).replace(/<BRACES>/g,function(){return a}).replace(/<SPREAD>/g,function(){return s}),RegExp(d,u)}s=l(s).source,t.languages.jsx=t.languages.extend("markup",n),t.languages.jsx.tag.pattern=l(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),t.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,t.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,t.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,t.languages.jsx.tag.inside.comment=n.comment,t.languages.insertBefore("inside","attr-name",{spread:{pattern:l(/<SPREAD>/.source),inside:t.languages.jsx}},t.languages.jsx.tag),t.languages.insertBefore("inside","special-attr",{script:{pattern:l(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:t.languages.jsx}}},t.languages.jsx.tag);var i=function(d){return d?typeof d=="string"?d:typeof d.content=="string"?d.content:d.content.map(i).join(""):""},c=function(d){for(var u=[],p=0;p<d.length;p++){var m=d[p],b=!1;if(typeof m!="string"&&(m.type==="tag"&&m.content[0]&&m.content[0].type==="tag"?m.content[0].content[0].content==="</"?u.length>0&&u[u.length-1].tagName===i(m.content[0].content[1])&&u.pop():m.content[m.content.length-1].content==="/>"||u.push({tagName:i(m.content[0].content[1]),openedBraces:0}):u.length>0&&m.type==="punctuation"&&m.content==="{"?u[u.length-1].openedBraces++:u.length>0&&u[u.length-1].openedBraces>0&&m.type==="punctuation"&&m.content==="}"?u[u.length-1].openedBraces--:b=!0),(b||typeof m=="string")&&u.length>0&&u[u.length-1].openedBraces===0){var S=i(m);p<d.length-1&&(typeof d[p+1]=="string"||d[p+1].type==="plain-text")&&(S+=i(d[p+1]),d.splice(p+1,1)),p>0&&(typeof d[p-1]=="string"||d[p-1].type==="plain-text")&&(S=i(d[p-1])+S,d.splice(p-1,1),p--),d[p]=new t.Token("plain-text",S,null,S)}m.content&&typeof m.content!="string"&&c(m.content)}};t.hooks.add("after-tokenize",function(d){d.language!=="jsx"&&d.language!=="tsx"||c(d.tokens)})})(e)}const BS=Qn(DS);var $S=xh;xh.displayName="scss";xh.aliases=[];function xh(e){e.languages.scss=e.languages.extend("css",{comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0},atrule:{pattern:/@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,inside:{rule:/@[\w-]+/}},url:/(?:[-a-z]+-)?url(?=\()/i,selector:{pattern:/(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,inside:{parent:{pattern:/&/,alias:"important"},placeholder:/%[-\w]+/,variable:/\$[-\w]+|#\{\$[-\w]+\}/}},property:{pattern:/(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,inside:{variable:/\$[-\w]+|#\{\$[-\w]+\}/}}}),e.languages.insertBefore("scss","atrule",{keyword:[/@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i,{pattern:/( )(?:from|through)(?= )/,lookbehind:!0}]}),e.languages.insertBefore("scss","important",{variable:/\$[-\w]+|#\{\$[-\w]+\}/}),e.languages.insertBefore("scss","function",{"module-modifier":{pattern:/\b(?:as|hide|show|with)\b/i,alias:"keyword"},placeholder:{pattern:/%[-\w]+/,alias:"selector"},statement:{pattern:/\B!(?:default|optional)\b/i,alias:"keyword"},boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"},operator:{pattern:/(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,lookbehind:!0}}),e.languages.scss.atrule.inside.rest=e.languages.scss}const AS=Qn($S);var MS=gh;gh.displayName="yaml";gh.aliases=["yml"];function gh(e){(function(t){var n=/[*&][^\s[\]{},]+/,o=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,a="(?:"+o.source+"(?:[ 	]+"+n.source+")?|"+n.source+"(?:[ 	]+"+o.source+")?)",s=/(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g,function(){return/[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source}),l=/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;function i(c,d){d=(d||"").replace(/m/g,"")+"m";var u=/([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g,function(){return a}).replace(/<<value>>/g,function(){return c});return RegExp(u,d)}t.languages.yaml={scalar:{pattern:RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g,function(){return a})),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g,function(){return a}).replace(/<<key>>/g,function(){return"(?:"+s+"|"+l+")"})),lookbehind:!0,greedy:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:i(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),lookbehind:!0,alias:"number"},boolean:{pattern:i(/false|true/.source,"i"),lookbehind:!0,alias:"important"},null:{pattern:i(/null|~/.source,"i"),lookbehind:!0,alias:"important"},string:{pattern:i(l),lookbehind:!0,greedy:!0},number:{pattern:i(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source,"i"),lookbehind:!0},tag:o,important:n,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},t.languages.yml=t.languages.yaml})(e)}const PS=Qn(MS);function Eg(e){return typeof e=="boolean"}function vo(e){return typeof e=="string"}function vh(e){return typeof e=="number"}function Ng(e){return Number.isInteger(e)}function ya(e){return Array.isArray(e)}function kc(e){return typeof e=="function"}function IS(e){return e instanceof RegExp}function bo(e){return typeof e=="object"&&!ya(e)&&!Rg(e)}function zS(e){return e===void 0}function Rg(e){return e===null}function Se(e){return!(zS(e)||Rg(e))}function Ec(e){return!Se(e)}function Og(...e){throw new Error(e.join(""))}const bh=(e,...t)=>kc(e)?e(...t):e;function Be(){}const Lg=e=>e;function FS(){return Intl.DateTimeFormat().resolvedOptions().locale}let yh={locale:FS(),currency:"GBP",currencySign:"£",thousands:","};const US=(e,t,n=1)=>{const o=t<e?-Math.abs(n):n;return Array(1+Math.floor(Math.abs((t-e)/n))).fill(e).map((a,s)=>a+s*o)};function VS(e,t={}){return new Intl.NumberFormat(t.locale||yh.locale,t).format(e)}function HS(e,t={}){return VS(e,{style:"currency",currency:yh.currency,...t})}function ss(e,t=yh.thousands){if(Ec(e))return"";for(var n=e.toString().split("."),o=/(\d+)(\d{3})/;o.test(n[0]);)n[0]=n[0].replace(o,`$1${t}$2`);return n.join(".")}function Dg(e,t=/,\s*|\s+/){return Ec(e)?[]:vo(e)?e.length?e.split(t):[]:ya(e)?e:[e]}function Vs(e,t=!0,n={}){return bo(e)?e:Dg(e).reduce((o,a)=>(o[a]=kc(t)?t(a):t,o),n)}function Bg(e){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()}const WS=Bg;function ZS(e){if(kc(e))return e;if(IS(e))return t=>e.test(t);if(bo(e))return t=>!!e[t];if(ya(e)||vo(e)){const t=Vs(e);return n=>!!t[n]}Og("Invalid selector() specification: "+e)}const jh=(e,t,n={})=>{let o={},a={delete:!1,...n};const s=ZS(t);return Object.keys(e).map(l=>{if(s(l)){let i=e[l];a.delete&&delete e[l],a.key&&(l=a.key(l)),a.value&&(i=a.value(i)),o[l]=i}}),o},Tm=(e,t)=>parseInt(e[t]||0),km=(e,t)=>parseFloat(e[t]||0),Em=(e,t)=>(e[t]||"").toString(),Nm=e=>(t,n)=>Tm(t,e)-Tm(n,e),wd=e=>(t,n)=>km(t,e)-km(n,e),Rm=e=>(t,n)=>{let o=Em(t,e).toLowerCase(),a=Em(n,e).toLowerCase();return o>a?1:a>o?-1:0},KS=e=>(t,n)=>e(n,t);function YS(e,t=300){let n;return(...o)=>{clearTimeout(n),n=setTimeout(()=>e.apply(this,o),t)}}function Ar(e){return new Promise(t=>setTimeout(t,e))}go.registerLanguage("jsx",BS);go.registerLanguage("json",LS);go.registerLanguage("css",cS);go.registerLanguage("scss",AS);go.registerLanguage("bash",RS);go.registerLanguage("yaml",PS);const Un=({code:e,language:t="jsx",caption:n,expand:o=!1,fixed:a=o,className:s="",highlightLines:l,lineProps:i,undent:c=!1})=>{const[d,u]=v.useState(!1),[p,m]=v.useState(o),b=()=>{navigator.clipboard.writeText(e),u(!0),Ar(2e3).then(()=>u(!1))};return r.jsxs("div",{className:`codeblock ${s} ${p?"expanded":""} ${a?"fixed-open":"expandable"}`,children:[!!n&&r.jsx("h4",{className:"caption",children:n}),r.jsxs("div",{className:"controls",children:[r.jsx("div",{className:"expand",onClick:()=>m(!p),children:p?"Compress":"Expand"}),r.jsx("div",{className:`clipboard ${d?"copied":""}`,onClick:b,children:d?"Copied":"Copy"})]}),r.jsx(go,{language:t,showLineNumbers:!0,useInlineStyles:!1,wrapLines:!0,customStyle:{},children:GS(e,{undent:c})})]})},GS=(e,t={})=>{if(e=e.replace(/^[^]*?{?\/\*\s*START\s*\*\/}?\n/,"").replace(/[\n\s]*{?\/\*\s*END\s*\*\/}?[^]*/,"").replaceAll(/\/\/\s*PRETEND:\s/g,"").replaceAll(/{?\/\*\s*PRETEND:\s(.*?)\s+\*\/}?/g,"$1").replace(/\n+$/,""),t.undent){const n=new RegExp("^"+" ".repeat(t.undent),"gm");e=e.replaceAll(n,"")}return e},re=({Component:e,code:t,html:n,children:o,className:a="",language:s,...l})=>r.jsxs("div",{className:`example grid-2 gap-8 stack-desktop ${a}`,children:[r.jsx("div",{className:"source",children:r.jsx(Un,{code:t||n,language:n?"html":s,...l})}),!!o&&r.jsx("div",{className:"interim",children:o}),e?r.jsxs("div",{className:"output",children:[r.jsx("h4",{className:"caption",children:"Output"}),r.jsx(e,{})]}):null,n?r.jsxs("div",{className:"output",children:[r.jsx("h4",{className:"caption",children:"Output"}),r.jsx("div",{dangerouslySetInnerHTML:{__html:n}})]}):null]}),Ql=v.createContext();function Om(e){return typeof e=="function"}function Lm(e){return typeof e=="object"&&!$g(e)&&!qS(e)}function $g(e){return Array.isArray(e)}function qS(e){return e===null}function XS({context:e={},Implementation:t,spec:n=!1,props:o={},ref:a}){if(!n)return r.jsx(t,{...o,ref:a});let s={},l=Om(n)?n(e):e[n];if($g(l)&&(t=l[0],l=l[1]),Om(l)){const i=l(o,a,e);if(J.isValidElement(i))return i;Lm(i)&&Object.assign(s,o,i)}else Lm(l)?Object.assign(s,l,o):Object.assign(s,o);return r.jsx(t,{...s,ref:a})}const QS=e=>({Context:Ql,Provider:({children:t,...n})=>r.jsx(Ql.Provider,{value:{...e,...n},children:t}),Consumer:t=>n=>r.jsx(Ql.Consumer,{children:o=>r.jsx(t,{...o,...n,context:o})}),Component:(t,n=t.displayName||t.name)=>J.forwardRef((o,a)=>r.jsx(Ql.Consumer,{children:s=>r.jsx(XS,{Implementation:t,context:s,spec:n,props:o,ref:a})}))}),Ag=QS(),ee=Ag.Component,JS="svg",Uu="-",Mg="fill",eC="path",tC="line",nC="rect",rC="array",oC="circle",aC="ellipse",sC="polygon",lC="polyline",Sh=/-(?!\d)/,Dm="currentColor",Ch=512,wh=512,ol={defaults:{width:512,height:512,type:"line"},icons:{alpha:"M102,448L256,64L410,448 M152,333L360,333",angle:"M448,336L256,144L64,336",angles:"M448,448L256,256L64,448M448,256L256,64L64,256",arrow:"M96,224L256,64L416,224M256,86L256,448",arrows:"M144,144L256,32L368,144M368,368L256,480L144,368M256,56L256,456",asterisk:"M76,152L436,360M76,360L436,152M256,48L256,464",at:"M256,160C309,160 352,203 352,256C352,309 309,352 256,352C203,352 160,309 160,256C160,203 203,160 256,160M256,480C132,480 32,380 32,256C32,132 132,32 256,32C380,32 480,132 480,256L480,288C480,323 451,352 416,352C381,352 352,323 352,288L352,176",ban:"M100,412L412,100 M256,32C380,32 480,132 480,255C480,379 380,480 256,480C132,480 32,379 32,255C32,132 132,32 256,32Z",bars:"M64,96L448,96M64,256L448,256M64,416L448,416",caret:"M448,336L256,144L64,336L448,336Z",check:"M48,248L192,392L464,120",circle:"circle:256 256 224",clipboard:"M192,80L80,80L80,496L432,496L432,80L320,80L320,112L192,112L192,80ZM256,16C282,16 304,38 304,64C304,90 282,112 256,112C230,112 208,90 208,64C208,38 230,16 256,16Z",cloud:"M480,293C480,234 437,177 362,196C346,161 319,116 240,120C180,124 139,165 125,224C121,223 116,223 111,223C68,223 32,260 32,307C32,354 68,392 111,392C120,392 366,392 380,392C462,392 480,335 480,293Z",cog:"M306,21L206,21L187,91L147,114L78,95L28,182L78,233L78,279L28,330L78,417L147,398L187,421L206,491L306,491L325,421L365,398L434,417L484,330L434,279L434,233L484,182L434,95L365,114L325,91L306,21Z M256,176C300,176 336,212 336,256C336,300 300,336 256,336C212,336 176,300 176,256C176,212 212,176 256,176Z",cross:"M112,112L400,400M400,112L112,400",drag:"M64,96L256,32L448,96M64,416L256,480L448,416M128,256L384,256",envelope:"M32,104L480,104L480,408L32,408L32,104M48,120L256,288L464,120M48,392L200,252M464,392L312,252",equals:"M96,320L416,320 M96,192L416,192",exclamation:"M256,96L256,310M254,416L258,416",eye:["M48,256C146,48 367,49 466,256M48,256C145,464 368,464 466,256","circle:256 256 64"],filter:"M64,32L448,32L448,128L305,271L304,432L208,496L208,272L64,128L64,32Z",folder:"M480,128L480,448L32,448L32,64L176,64L240,128L480,128Z",heart:"M256,128C298,48 382,48 424,88C466,128 466,208 424,288C394,348 319,408 256,448C193,408 118,348 88,288C46,208 46,128 88,88C130,48 214,48 256,128Z",hourglass:"M80,32L432,32M80,480L432,480M128,32C128,256 384,256 384,480M384,32C384,256 128,256 128,480",info:"M212,202L256,202L256,416M182,416L330,416M252,96L256,96",key:["M189,246C183,229 180,212 180,194C180,118 242,56 318,56C394,56 456,118 456,194C456,270 394,332 318,332C300,332 283,329 266,323L232,360L184,360L184,408L136,408L136,456L56,456L56,379L189,246Z","circle:344 168 8"],list:"M176,96L448,96M176,256L448,256M176,416L448,416M64,96L80,96M64,256L80,256M64,416L80,416",locked:["M144,224L144,166C144,105 195,54 256,54C317,54 368,105 368,166L368,224M256,320L256,368","rect:80 224 352 240 32 32"],login:"M192,128L320,256L192,384M304,256L64,256M320,64L448,64L448,448L320,448",logout:"M320,128L448,256L320,384M432,256L192,256M192,448L64,448L64,64L192,64",minus:"M96,256L416,256",mobile:["rect:128 48 256 416 32 32","M128,120L384,120M128,392L384,392"],number:"M256,448L256,64L176,128 M160,448L336,449",page:"M416,170L416,480L96,480L96,32L288,32L416,170M288,32L288,176L416,176",pen:"M482,143C491,134 491,120 482,112L401,30C392,21 378,21 369,30L72,326L22,489L186,439L482,143M305,93L418,206",phone:"M51,59C40,62 32,72 32,84C41,321 192,472 428,480C440,480 451,471 453,459C459,435 469,395 475,371C478,360 472,348 462,343C438,331 395,309 370,297C360,292 347,295 339,304C325,323 303,352 304,352C255,352 160,257 160,208C160,207 188,186 207,172C217,165 220,152 215,141C202,117 181,74 169,50C164,39 152,34 141,37C116,43 75,53 51,59Z",plus:"M256,96L256,416M96,256L416,256",point:"M464,192L256,16L48,192L128,192L128,480L384,480L384,192L464,192Z",prime:"M256,128L256,256",question:"M160,160C160,126 197,80 255,80C314,80 336,128 336,160C336,236 255,235 255,320 M255,416L256,416",rotate:"M392,120C356,84 307,64 256,64C150,64 64,150 64,256C64,362 150,448 256,448C303,448 349,430 384,399C349,430 303,448 256,448C150,448 64,362 64,256C64,150 150,64 256,64C307,64 356,84 392,120Z M352,208L480,208L480,80",search:"M204,32C300,32 384,111 384,208C384,305 305,384 208,384C111,384 32,305 32,208C32,111 107,32 204,32M480,480L332,332",slash:"M64,448L448,64",square:"rect:32 32 448 448",square10:"rect:32 32 448 448 45 45",square20:"rect:32 32 448 448 90 90",square30:"rect:32 32 448 448 135 135",square40:"rect:32 32 448 448 180 180",star:"M256,32L324,183L489,202L367,313L400,476L256,394L112,476L145,313L23,202L188,183L256,32Z",thumb:"M149,174L32,174L32,448L149,448L149,184 M149,217C277,160 246,36 282,38C372,44 324,192 324,192L440,192C462,192 480,210 480,232C480,254 462,272 440,272L368,272M424,272C446,272 464,290 464,312C464,334 446,352 424,352L352,352M392,352C414,352 432,370 432,392C432,414 414,432 392,432L256,432C220,432 149,409 149,409",time:"M256,128L256,256L336,336",trash:"M32,80L480,80 M80,80C80,80 100,344 109,452C111,477 131,496 156,496C211,496 301,496 356,496C381,496 401,477 403,452C412,344 432,80 432,80 M160,80L208,16L304,16L352,74",triangle:"M256,64L32,448L480,448L256,64Z",unlocked:["M144,224L144,166C144,105 195,54 256,54C304,54 346,85 361,128M256,320L256,368","rect:80 224 352 240 32 32"],user:"M256,32C302,32 340,70 340,116C340,162 302,208 256,208C210,208 172,162 172,116C172,70 210,32 256,32ZM448,412C448,361 410,320 363,320L148,320C102,320 64,361 64,412L64,480L448,480L448,412Z",vertical:"line:256,48 256,464",wrench:"M486,108C493,124 496,142 496,160C496,239 431,304 352,304C330,304 309,299 290,290L98,482C79,501 49,501 30,482C11,463 11,433 30,414L222,222C213,203 208,182 208,160C208,81 273,16 352,16C370,16 388,19 404,26L326,103L409,186L486,108Z"}};function iC(e,t,n=ol){n.icons[e]=t}function cC(e,t=ol){Object.entries(e).forEach(([n,o])=>iC(n,o,t))}const Jl=v.createContext();function Bm(e){return typeof e=="function"}function $m(e){return typeof e=="object"&&!Pg(e)&&!dC(e)}function Pg(e){return Array.isArray(e)}function dC(e){return e===null}function uC({context:e={},Implementation:t,spec:n=!1,props:o={},ref:a}){if(!n)return r.jsx(t,{...o,ref:a});let s={},l=Bm(n)?n(e):e[n];if(Pg(l)&&(t=l[0],l=l[1]),Bm(l)){const i=l(o,a,e);if(J.isValidElement(i))return i;$m(i)&&Object.assign(s,o,i)}else $m(l)?Object.assign(s,l,o):Object.assign(s,o);return r.jsx(t,{...s,ref:a})}const pC=e=>({Context:Jl,Provider:({children:t,...n})=>r.jsx(Jl.Provider,{value:{...e,...n},children:t}),Consumer:t=>n=>r.jsx(Jl.Consumer,{children:o=>r.jsx(t,{...o,...n,context:o})}),Component:(t,n=t.displayName||t.name)=>J.forwardRef((o,a)=>r.jsx(Jl.Consumer,{children:s=>r.jsx(uC,{Implementation:t,context:s,spec:n,props:o,ref:a})}))}),hC=pC(),fC=hC.Component;function er(e){return typeof e=="string"}function al(e){return Array.isArray(e)}function Nc(e){return typeof e=="object"&&!al(e)&&!zg(e)}function Ig(e){return e===void 0}function zg(e){return e===null}function Rc(e){return!(Ig(e)||zg(e))}function Fg(e){return!Rc(e)}function Xn(...e){throw new Error(e.join(""))}function mC(){return Intl.DateTimeFormat().resolvedOptions().locale}mC();function Vu(e,t=/,\s*|\s+/){return Fg(e)?[]:er(e)?e.length?e.split(t):[]:al(e)?e:[e]}const xC=(e,t)=>{const n=e[t];return delete e[t],n};function sl(e){return e.split(/\s*[;&]\s*/).filter(t=>t.length>0).reduce((t,n)=>{const[o,a]=n.split(/\s*[:=]\s*/);return t[o]=Ig(a)?!0:a,t},{})}const _h=e=>e.filter(Rc).join(" "),gC=e=>Object.entries(e).filter(([,t])=>t).map(([t])=>t),vC=(...e)=>_h(e.flatMap(t=>Nc(t)?gC(t):t)),bC=e=>Vu(e,/\s+/),Ug={x:0,y:0,size:16,flipX:!1,flipY:!1,rotate:0},Er={flip:(e,t)=>{er(t)&&t.match(/^y$/i)?e.flipY=!e.flipY:e.flipX=!e.flipX},flipx:e=>e.flipX=!e.flipX,flipy:e=>e.flipY=!e.flipY,grow:(e,t)=>e.size+=parseFloat(t),shrink:(e,t)=>e.size-=parseFloat(t),left:(e,t)=>t===!0?e.rotate-=90:e.x-=parseFloat(t),right:(e,t)=>t===!0?e.rotate+=90:e.x+=parseFloat(t),up:(e,t)=>t===!0?e.rotate+=0:e.y-=parseFloat(t),down:(e,t)=>t===!0?e.rotate+=180:e.y+=parseFloat(t),rotate:(e,t)=>e.rotate+=parseInt(t)};Er.flop=Er.flipy;Er["flip-x"]=Er.flipx;Er["flip-y"]=Er.flipy;function Vg(e,t={...Ug}){const n=er(e)?sl(e):e||{};return Object.entries(n).reduce((o,[a,s])=>{const l=a.toLowerCase();return(Er[l]||Xn(`Invalid transform: ${l}`))(o,s),o},t)}const yC=4.42,Mn=e=>`${yC*e}%`,jC={},Hu={outline:{fill:"none",stroke:"currentColor",strokeWidth:Mn(2),strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"1.5"},solid:{fill:"currentColor",stroke:"none"},round:{strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"1.5"},square:{strokeLinecap:"square",strokeLinejoin:"miter",strokeMiterlimit:"1.5"},butt:{strokeLinecap:"butt"},bevel:{strokeLinejoin:"bevel"},thinnest:{strokeWidth:Mn(.5)},thinner:{strokeWidth:Mn(1)},thin:{strokeWidth:Mn(1.5)},medium:{strokeWidth:Mn(2)},thick:{strokeWidth:Mn(2.5)},thicker:{strokeWidth:Mn(3)},thickest:{strokeWidth:Mn(3.5)}};Hu.line=Hu.outline;const SC={...Object.entries(Hu).reduce((e,[t,n])=>(e[t]=o=>Object.assign(o,n),e),{}),fill:(e,t)=>e.fill=t===!0?Dm:t,stroke:(e,t)=>e.stroke=t===!0?Dm:t,nofill:e=>delete e.fill,nostroke:e=>delete e.stroke,strokewidth:(e,t)=>e.strokeWidth=t.match(/^[\d.]+$/)?Mn(parseFloat(t)):t,opacity:(e,t)=>e.opacity=t,fillopacity:(e,t)=>e.fillOpacity=t,strokeopacity:(e,t)=>e.strokeOpacity=t,dasharray:(e,t)=>e.strokeDasharray=t,drawlength:(e,t)=>e["--draw-length"]=t,drawtime:(e,t)=>e["--draw-time"]=t,filltime:(e,t)=>e["--fill-time"]=t};function Qi(e,t){return(er(t)?t.split(Sh):t).forEach(n=>{const[o,a=!0]=n.split(/[:=]/),s=o.toLowerCase(),l=SC[s];if(l){l(e.style||(e.style={...jC}),a);return}(Er[s]||Xn(`Invalid style or transform: ${s}`))(e.transform||(e.transform={...Ug}),a)})}const CC={width:Ch,height:wh,type:Mg},Hg={svg:e=>({element:JS,svg:e}),array:e=>({element:rC,items:e}),path:e=>({element:eC,d:e}),polygon:e=>({element:sC,points:e}),polyline:e=>({element:lC,points:e}),circle:e=>({element:oC,...ei(e,"cx cy r")}),ellipse:e=>({element:aC,...ei(e,"cx cy rx ry")}),line:e=>({element:tC,...ei(e,"x1 y1 x2 y2")}),rect:e=>({element:nC,...ei(e,"x y width height rx ry")})};function ei(e,t){const n=al(t)?[...t]:Vu(t);return Vu(e).reduce((o,a)=>{if(n.length){const s=n.shift();o[s]=a}return o},{})}const Wg=e=>{const[t,n=""]=e.split("?"),[o,...a]=t.split(/\.(?!\d)/),s=o.split(Sh).filter(i=>i.length),l=sl(n);return{dashes:s,classes:a,style:l}},wC=(e,t)=>{const n=Wg(e),{dashes:o}=n;for(let a=o.length;a>0;a--){const s=o.slice(0,a).join(Uu);if(t[s]){n.name=o.splice(0,a).join(Uu);break}}return n},Am=(e,t,n={})=>{const{icons:o}=t,a=wC(e,o),{name:s,classes:l,style:i,dashes:c}=a;Fg(s)&&Xn(`No icon found matching any leading subset of ${a.dashes.join(Uu)}`);const d=t.icons[s]||Xn(`Icon not found in data: ${s}`),u=Zg(d,t,{...n,name:s});if((l.length||n.className)&&(u.className=_h([...l||[],n.className])),u.transform&&(u.transform=Vg(u.transform)),u.style&&(u.style=er(u.style)?sl(u.style):{...u.style}),u.type){const p=u.style&&{...u.style};Qi(u,u.type),delete u.type,p&&Object.assign(u.style,p)}return c.length&&Qi(u,c),Object.keys(i).length&&(u.style=Object.assign(u.style||{},i)),u};function _C(e){const t=e.match(/^(.*?):(.*)/);return t?{path:t[2],type:t[1]}:{path:e}}const Zg=(e,t,n={})=>{const{defaults:o={}}=t,a={...CC,...o,...n};return Kg(a,e,t)},Kg=(e,t,n)=>{if(er(t))return TC(e,t);if(Nc(t))return kC(e,t,n);if(al(t))return EC(e,t,n);Xn(`Cannot parse icon data: ${t}`)};function TC(e,t){if(t.match(/^\w*</))return e.body={element:"svg",svg:t},e;const n=t.match(/^(.*?):(.*)/);if(n){const[,o,a]=n,{dashes:s,classes:l}=Wg(o),i=s.shift(),c=Hg[i]||Xn(`Invalid icon data element: ${i}`);return e.body=c(a),l.length&&(e.body.className=_h(l)),s.length&&Qi(e.body,s),e}return e.body={element:"path",d:t},e}function kC(e,t,n){const o={...t};if(o.element)return e.body=o,e;if(o.data){const a=xC(o,"data");return Kg(e,a,n),Object.assign(e,o),e}for(let a of Object.entries(Hg)){const[s,l]=a,i=o[s];if(Rc(i))return e.body=l(i),delete o[s],Object.assign(e,o),e}Xn(`Cannot parse icon data: ${JSON.stringify(t)}`)}function EC(e,t,n){return e.body={element:"array",items:t.map(o=>Zg(o,n).body)},e}const NC=({size:e,...t})=>{t.width??(t.width=e||Ch),t.height??(t.height=e||wh),t.path&&Object.assign(t,_C(t.path));let n;return t.style&&(er(t.style)?(n=sl(t.style),t.style={}):n={...t.style}),Qi(t,t.type?t.type.split(Sh).filter(o=>o.length):Mg),delete t.type,t.style&&n&&Object.assign(t.style,n),t.transform&&(t.transform=Vg(t.transform)),t},Th=e=>Nc(e)?Object.entries(e).reduce((t,[n,o])=>(t[n.replace(/(?!-)-./g,a=>a[1].toUpperCase())]=o,t),{}):e,RC=e=>Rc(e)?Th(sl(e)):null,tr=({style:e,class:t,...n})=>({style:er(e)?RC(e):Th(e),className:t,...n}),OC=e=>r.jsx("circle",{...tr(e)}),LC=e=>r.jsx("ellipse",{...tr(e)}),DC=e=>r.jsx("line",{...tr(e)}),Yg=e=>r.jsx("path",{...tr(e)}),BC=e=>r.jsx("polygon",{...tr(e)}),$C=e=>r.jsx("polyline",{...tr(e)}),AC=e=>r.jsx("rect",{...tr(e)}),MC=({svg:e,...t})=>r.jsx("g",{dangerouslySetInnerHTML:{__html:e},...tr(t)}),PC=({items:e,...t})=>r.jsx("g",{...tr(t),children:e.map((n,o)=>r.jsx(Ji,{body:n},o))}),IC={array:PC,circle:OC,ellipse:LC,line:DC,path:Yg,polygon:BC,polyline:$C,rect:AC,svg:MC},Ji=({path:e,body:t,...n})=>{if(e)return r.jsx(Yg,{d:e,...n});if(er(t))return r.jsx("g",{dangerouslySetInnerHTML:{__html:t}});if(Nc(t)){const{element:o,...a}=t,s=IC[o]||Xn(`Invalid element type: ${o} => `,JSON.stringify(t));return r.jsx(s,{...a})}if(al(t))return t.map((o,a)=>r.jsx(Ji,{body:o},a));Xn(`Don't know how to handle body: ${t}`)};function zC({width:e,height:t,transform:n,children:o}){const a=e/2,s=t/2,l=n.x*e/16,i=n.y*t/16,c=n.size/16*(n.flipX?-1:1),d=n.size/16*(n.flipY?-1:1),u=n.rotate;return r.jsx("g",{transform:`translate(${a} ${s})`,children:r.jsx("g",{transform:`translate(${l}, ${i}) scale(${c}, ${d}) rotate(${u} 0 0)`,children:r.jsx("g",{transform:`translate(-${a} -${s})`,children:o})})})}const _d=({onClick:e,minx:t=0,miny:n=0,width:o=Ch,height:a=wh,style:s,transform:l,className:i="",debug:c,...d})=>r.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",role:"img","aria-hidden":"true",focusable:"false",viewBox:`${t} ${n} ${o} ${a}`,className:`${i} icon`,style:Th(s),onClick:e,children:[!!c&&console.log("style: ",s),l?r.jsx(zC,{width:o,height:a,transform:l,children:r.jsx(Ji,{...d})}):r.jsx(Ji,{...d})]}),FC=({name:e,iconsClass:t="icons",library:n=ol,...o})=>{if(!e)return r.jsx(_d,{...NC(o)});const a=bC(e);return a.length===1?r.jsx(_d,{...o,...Am(e,n,o)}):r.jsx("div",{className:vC(t,o.className),children:a.map(s=>r.jsx(_d,{...o,...Am(s,n,o)},s))})},Ci=fC(FC,"Icon"),UC=e=>e.filter(Se).join(" "),VC=e=>Object.entries(e).filter(([,t])=>t).map(([t])=>t),ve=(...e)=>UC(e.flatMap(t=>bo(t)?VC(t):t)),kh=e=>{if(!e)return null;const[t,n,o,a,s]=e.split("-");return ve(t,ZC(n),KC(o),YC(a),GC(s))},HC=({className:e,size:t,color:n,...o})=>({...o,className:ve(e,t,kh(n))}),WC=({className:e,size:t,color:n,border:o,radius:a,shadow:s,pad:l,mar:i,padding:c=l,margin:d=i,...u})=>({...u,className:ve(e,t,kh(n),yo(o),Sa(a),ja(s),Gg(c),qg(d))}),yo=e=>Xg(e,"border",t=>`border bdw-${t}`),ja=e=>Xg(e,"shadow-1",t=>`shadow-${t}`),Gg=e=>Qg(e,"pad"),qg=e=>Qg(e,"mar"),Sa=e=>ll(e,t=>`bdr-${t}`),ZC=e=>ll(e,t=>`fgc-${t}`),KC=e=>ll(e,t=>`bgc-${t}`),YC=e=>ll(e,t=>`fgd-${t}`),GC=e=>ll(e,t=>`bgd-${t}`),ll=(e,t)=>Ng(parseInt(e))?bh(t,e):null,qC=(e,t,n)=>e===!0?t:Se(e)?bh(n,e):null,Xg=(e,t,n)=>e===!0?t:parseInt(e)?bh(n,e):null,Qg=(e,t)=>qC(e,t,n=>XC(t,Dg(n))),XC=(e,t)=>t.length===2?Mm(e,["v","h"],t):t.length===4?Mm(e,["t","r","b","l"],t):t.map(n=>`${e}-${n}`).join(" "),Mm=(e,t,n)=>n.map((o,a)=>`${e}-${t[a]}-${o}`).join(" "),ne=e=>r.jsx(Ci,{...HC(e)});function Pm(e,t,n={}){return Se(t)&&(n[e]=Ng(t)?`${t}deg`:t),Object.keys(n).length?n:null}const QC=({icon:e,iconClass:t,iconLeft:n,iconLeftClass:o="on-left",iconLeftRotate:a,iconRight:s,iconRightClass:l="on-right",iconRightRotate:i,text:c,children:d})=>r.jsxs(r.Fragment,{children:[!!e&&r.jsx(Ci,{name:e,className:t,fixedWidth:!0}),!!n&&r.jsx(Ci,{name:n,className:o,style:Pm("--icon-rotate",a),fixedWidth:!0}),c||d,!!s&&r.jsx(Ci,{name:s,className:l,style:Pm("--icon-rotate",i),fixedWidth:!0})]}),Ca=ee(QC,"WithIcons");cC({github:"path-fill-stroke=none:M256,0C115,0 0,115 0,256C0,369 73,465 175,499C188,501 193,493 193,487C193,481 192,460 192,439C128,451 111,423 106,409C103,402 91,379 80,373C71,368 58,356 80,356C100,356 114,374 119,382C142,421 179,410 194,403C196,387 203,375 210,369C153,363 93,340 93,243C93,215 103,192 120,174C117,167 108,141 122,106C122,106 144,99 193,132C213,126 235,124 257,124C278,124 300,126 321,132C370,99 391,106 391,106C405,141 396,167 394,174C410,192 420,214 420,243C420,341 360,363 303,369C312,377 320,392 320,416C320,451 320,478 320,487C320,493 325,501 338,499C439,465 512,369 512,256C512,115 397,0 256,0Z"});const JC=({dismissable:e,dismiss:t,revealable:n,isRevealed:o,openIcon:a="angle-down",closedIcon:s="angle-left",dismissIcon:l="cross"})=>r.jsxs("div",{className:"on-right",children:[!!e&&r.jsx(ne,{name:l,fixedWidth:!0,className:"dismiss",onClick:()=>t(!0)}),!!n&&r.jsx(ne,{name:o?a:s,fixedWidth:!0,className:"reveal"})]}),Jg=ee(JC,"AlertControls"),ew=({headline:e,headIcon:t,toggle:n,revealable:o=!1,controlProps:a,Controls:s=Jg})=>r.jsxs("div",{className:"headline flex space",onClick:o?n:null,children:[r.jsxs("div",{children:[!!t&&r.jsx(ne,{name:t,fixedWidth:!0,className:"on-left"}),e]}),r.jsx(s,{...a})]}),tw=ee(ew,"AlertHeadline"),nw=({title:e,text:t,children:n})=>r.jsxs(r.Fragment,{children:[e&&r.jsx("h3",{children:e}),t?r.jsx("p",{children:t}):n]}),e3=ee(nw,"AlertContent"),rw=({icon:e,Content:t=e3,...n})=>r.jsxs("div",{className:"side-icon",children:[r.jsx(ne,{name:e}),r.jsx("div",{className:"wide",children:r.jsx(t,{...n})})]}),ow=ee(rw,"AlertIcon"),t3=e=>vo(e)||vh(e)||Eg(e),il=e=>t3(e)||!e.separator&&!e.heading&&!e.disabled,aw=e=>t3(e)?e:e.value??e.id,sw=(e,t,n=aw)=>{if(Ec(t))return[];const o=e.findIndex(a=>t===n(a));return o>=0?[e[o],o]:[]},lw=(e,t)=>{const n=e.toLowerCase().split(/\s+/);return t.filter(o=>{const a=bo(o),s=a?o.search??o.text??o.label??o.name??o.value:o;if(a&&o.fixed)return!0;if(Se(s)){const l=s.toString().toLowerCase();return n.every(i=>l.indexOf(i)>=0)}return!1})};function iw(e,t=il){const n=e.findIndex(t);return n<0?null:n}function cw(e,t=il){for(let n=e.length-1;n>=0;n--)if(t(e[n]))return n;return null}function dw(e,t,n=il){for(let o=1;o<=e.length;o++){const a=(t+o)%e.length;if(n(e[a]))return a}return null}function uw(e,t,n=il){for(let o=1;o<=e.length;o++){const a=(t+e.length-o)%e.length;if(n(e[a]))return a}return null}const wi="",Eh="ArrowDown",Nh="ArrowUp",pw="Tab",Oc="Enter",Rh=" ",Lc="Escape",hw="Backspace",ec=e=>{const t=`HINT: define ${e}() to render this value`;return n=>vo(n)||vh(n)?n:bo(n)?n.text??n.label??n.name??t:t},fw=e=>vo(e)||vh(e)?e:r.jsx(Ca,{...e}),n3=(e,t)=>{if(!e||!t)return;const n=t.offsetTop,o=n+t.offsetHeight,a=e.scrollTop,s=a+e.offsetHeight;n<a?e.scrollTo({top:n}):o>s&&e.scrollTo({top:a+(o-s)})};function mw(){let e={};return{clear:()=>e={},getItem:t=>e[t],setItem:(t,n)=>e[t]=n,removeItem:t=>delete e[t]}}const Td=typeof window<"u"&&window.localStorage||mw(),kd=(e,t)=>[e,t].join("-");function xw(e){return{get:t=>JSON.parse(Td.getItem(kd(e,t))),set:(t,n)=>Td.setItem(kd(e,t),JSON.stringify(n)),delete:t=>Td.removeItem(kd(e,t))}}const nr=({title:e,headline:t,headIcon:n,type:o,size:a,color:s,stripe:l,border:i,radius:c,shadow:d,className:u,text:p,children:m,onDismiss:b,icon:S,dismissable:j=!1,revealable:_=!1,revealed:x=!1,openIcon:h,closedIcon:f,dismissIcon:y,Headline:C=tw,Controls:g=Jg,Content:w=e3,Icon:k=ow})=>{const[E,L]=v.useState(_?x:!0),[$,K]=v.useState(!1),q=ve("alert",o,a,s,u,{revealable:_,dismissable:j,stripe:l},E?"revealed":null,ja(d),yo(i),Sa(c)),X=()=>L(I=>!I),ce={dismissable:j,revealable:_,isRevealed:E,dismiss:()=>{K(!0),b&&b()},openIcon:h,closedIcon:f,dismissIcon:y},H={title:e,text:p,children:m},D={...H,icon:S,Content:w},P={headline:t,headIcon:n,toggle:X,revealable:_,controlProps:ce,Controls:g};return $?null:r.jsxs("div",{className:q,children:[!!t&&r.jsx(C,{...P}),E&&(S?r.jsx(k,{...D}):r.jsx(w,{...H}))]})},ls=ee(e=>r.jsx(nr,{...e,type:"info"}),"Info"),Go=ee(e=>r.jsx(nr,{...e,type:"success"}),"Success"),is=ee(e=>r.jsx(nr,{...e,type:"warning"}),"Warning"),cs=ee(e=>r.jsx(nr,{...e,type:"error"}),"Error");nr.Info=ls;nr.Success=Go;nr.Warning=is;nr.Error=cs;const te=ee(nr,"Alert"),gw=({size:e,color:t,className:n,tag:o,shadow:a,border:s,radius:l,tooltip:i,icon:c,iconClass:d,iconLeft:u,iconLeftClass:p,iconRight:m,iconRightClass:b,label:S,text:j,children:_,Content:x=Ca,...h})=>{const f=ve("badge",e,t,n,{tag:o,icon:c},ja(a),yo(s),Sa(l)),y={icon:c,iconClass:d,iconLeft:u,iconLeftClass:p,iconRight:m,iconRightClass:b,text:j,children:_};return r.jsx("div",{className:f,"data-tooltip":i,"aria-label":S,...h,children:r.jsx(x,{...y})})},ae=ee(gw,"Badge"),vw=({type:e="button",size:t,color:n,className:o,disabled:a,bright:s,dark:l,outline:i,bare:c,shaded:d,shadow:u,border:p,radius:m,label:b,tooltip:S,tabIndex:j=0,icon:_,iconClass:x,iconLeft:h,iconLeftClass:f,iconRight:y,iconRightClass:C,text:g,children:w,Content:k=Ca,...E})=>{const L=ve(t,n,o,{bright:s,dark:l,outline:i,bare:c,shaded:d,icon:_},ja(u),yo(p),Sa(m)),$={icon:_,iconClass:x,iconLeft:h,iconLeftClass:f,iconRight:y,iconRightClass:C,text:g,children:w};return r.jsx("button",{className:L,"aria-label":b,tabIndex:j,type:e,disabled:a,"aria-disabled":a,"data-tooltip":S,...E,children:r.jsx(k,{...$})})},B=ee(vw,"Button"),bw=({buttons:e,children:t,className:n="buttons",buttonClass:o,Button:a=B,...s})=>r.jsx("div",{className:n,children:e?e.map((l,i)=>r.jsx(a,{className:o,...s,...l},i)):t}),jo=ee(bw,"Buttons"),yw=({className:e,disabled:t,children:n,ref:o})=>r.jsx("label",{className:ve(e,{disabled:t}),ref:o,children:n}),jw=ee(yw,"CheckboxLabel"),Sw=({disabled:e=!1,tabIndex:t=0,onChange:n=Be,ref:o,...a})=>r.jsx("input",{type:"checkbox",ref:o,"aria-disabled":e,tabIndex:e?-1:t,onChange:s=>n(s.target.checked),...a}),Cw=ee(Sw,"CheckboxInput"),ww=({size:e,color:t,border:n,inline:o,className:a="checkbox",text:s,ref:l,inputRef:i,checked:c,checkedText:d=s,uncheckedText:u=s,inputClass:p,Label:m=jw,Input:b=Cw,...S})=>r.jsxs(m,{className:ve(e,t,a,yo(n),{inline:o}),ref:l,checked:c,...S,children:[r.jsx(b,{className:p,ref:i,checked:c,...S}),c?d:u]}),Bn=ee(ww,"Checkbox"),_w=({checked:e=!1}={})=>{const[t,n]=v.useState(e);return{isChecked:t,setChecked:n,check:()=>n(!0),uncheck:()=>n(!1)}},Tw=({checked:e=!1,onChange:t,...n})=>{const{isChecked:o,setChecked:a}=_w({checked:e}),s=l=>{a(l),t&&t(l)};return r.jsx(Bn,{checked:o,onChange:s,...n})},Mr=({visible:e=!1}={})=>{const[t,n]=v.useState(e);return{isVisible:t,setVisible:n,show:()=>n(!0),hide:()=>n(!1)}},kw=({initiallyRevealed:e=!1,open:t=e,confirmIcon:n="check",confirmText:o="Confirm",confirmColor:a="red",confirmClass:s,cancelIcon:l="cross",cancelText:i="Cancel",cancelColor:c="grey",cancelClass:d,confirm:u={iconRight:n,text:o,color:a,className:s},cancel:p={iconLeft:l,text:i,color:c,className:d},buttonsClass:m,className:b=m,buttonClass:S,onClick:j=()=>window.alert("No confirm action defined"),..._})=>{const{isVisible:x,hide:h,show:f}=Mr({visible:t}),C={iconRight:n,text:o,color:a,className:s,...u,onClick:w=>{w.preventDefault(),h(),j()}},g={iconLeft:l,text:i,color:c,className:d,outline:!0,...p,onClick:h};return r.jsx(jo,{className:b,buttonClass:S,buttons:x?[g,C]:[{..._,onClick:f}]})},$n=ee(kw,"Confirm");var Ew=Object.defineProperty,Nw=(e,t,n)=>t in e?Ew(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ed=(e,t,n)=>(Nw(e,typeof t!="symbol"?t+"":t,n),n);const Pr=(e,t={})=>{const n=J.createContext(t);return{Context:n,Provider:o=>r.jsx(e,{...o,render:a=>r.jsx(n.Provider,{value:a,children:o.children})}),Consumer:o=>a=>r.jsx(n.Consumer,{children:s=>r.jsx(o,{...s,...a})}),Use:()=>J.useContext(n)}};function Rw(e={},t={},n={}){return Object.entries(t).reduce((o,[a,s])=>{const l=n[s];return l!==null&&typeof l<"u"&&(o[a]=l),o},{...e})}function Ow(e,t=[]){return(typeof t=="string"?t.split(/,\s*|\s+/):t).reduce((n,o)=>{const a=e[o]||Dw(`Cannot expose non-existent action method: ${o}`);return n[o]=a.bind(e),n},{})}function Lw(e,t){const n=e.debug??t.debug,o=Im(e.debugPrefix??t.debugPrefix,e),a=Im(e.debugColor??t.debugColor,e);return n?o?(s,...l)=>console.log(`%c${o}%c${s}`,`color: ${a}`,"color:black",...l):console.log.bind(console):()=>{}}function Im(e,t){return typeof e=="function"?e(t):e}function Dw(...e){throw new Error(e.join(""))}class ys extends J.Component{constructor(t){super(t);const n=this.constructor;this.debug=Lw(t,n),this.state=Rw(n.initialState,n.initialProps,t),this.actions=Ow(this,n.actions)}getContext(){return{...this.props,...this.state,...this.actions}}getRenderProps(){return this.getContext()}render(){return this.props.render(this.getRenderProps())}}Ed(ys,"initialState",{}),Ed(ys,"initialProps",{}),Ed(ys,"actions",[]);const Nd=e=>{vo(e)&&(e={field:e});const{field:t}=e;return e.type||(e.type="text"),e.label||(e.label=Bg(t)),e.id||(e.id=t),e},Bw=e=>{if(vo(e))return Vs(e,Nd);if(ya(e))return e.reduce((t,n)=>{const o=Nd(n);return t[o.field]=o,t},{});if(bo(e))return Object.entries(e).reduce((t,[n,o])=>{const a=Nd({...o,field:n});return t[a.field]=a,t},{});Og("Invalid columns definition")},$w=e=>Object.keys(e).filter(t=>!e[t].hidden),Aw=({value:e,search:t})=>Se(e)?e.toString()===t.toString():!1,Ka=({value:e,search:t})=>{const n=t.toLowerCase().split(/\s+/);if(Se(e)){const o=e.toString().toLowerCase();return n.every(a=>o.indexOf(a)>-1)}else return!1},Mw=({value:e,search:t})=>Se(e)?parseInt(e)===parseInt(t):!1,Pw=({value:e,search:t})=>Se(e)?parseFloat(e)===parseFloat(t):!1,Iw=({value:e=!1,search:t})=>{const n=parseInt(t)!==0;return e===n},zm={string:Ka,text:Ka,number:Ka,price:Ka,pounds:Ka,select:Aw,boolean:Iw,integer:Mw,float:Pw},zw=(e,t,n)=>{const o=Object.keys(n);return o.length===0?e:e.filter(a=>o.every(s=>{const l=n[s],i=t[s],c=i.field||s,d=a[c],u=i.filterType||i.type,p=i.filter||zm[u]||zm.text;return Se(l)&&l.length?p({row:a,field:c,value:d,search:l}):!0}))},Fw=(e,t=1,n=e.length)=>{const o=e.length,a=Math.ceil(o/n);t=Math.min(t,a);const s=t-1,l=n*s,i=Math.min(l+n-1,o-1),c=e.slice(l,i+1);return{pageSize:n,pages:a,page:s,pageNo:t,total:o,firstIndex:l,lastIndex:i,firstPage:1,lastPage:a,thisSize:c.length,from:l+1,to:i+1,all:l===i,one:o===1,none:o===0,rows:c}},Fm={string:Rm,text:Rm,number:wd,price:wd,currency:wd,integer:Nm,id:Nm},Uw=(e,t,n,o)=>{if(!n)return e;const a=t[n],s=a.sort,l=a.type||"text",i=kc(s)?s:(Fm[l]||Fm.text)(n);return e.sort(o?KS(i):i)},Vw=({render:e,rows:t=[],...n})=>{const o=v.useMemo(()=>Bw(n.columns),[n.columns]),[a,s]=v.useState(n.pageNo??1),[l,i]=v.useState(n.pageSize??10),[c,d]=v.useState(!1),[u,p]=v.useState({}),[m,b]=v.useState(n.sortColumn),[S,j]=v.useState(n.sortReverse??!1),[_,x]=v.useState(Object.keys(o)),[h,f]=v.useState($w(o)),[y,C]=v.useState(!1),g=()=>C(!0),w=()=>C(!1),k=X=>{m===X?j(le=>!le):(b(X),j(!1))},E=X=>{X.preventDefault(),X.stopPropagation(),d(le=>!le)},L=(X,le)=>{p(ce=>{const H={...ce};return Se(le)&&le.length?H[X]=le:delete H[X],H}),s(1)},$=X=>f(le=>{const ce=Vs(le);return console.log("visible: ",le),console.log("isVisible: ",ce),ce[X]?le.filter(H=>H!==X):Object.keys(o).filter(H=>H===X||ce[H])}),K=X=>{let le=[],ce=[];const H=Vs(h);X.forEach(D=>{le.push(D),H[D]&&ce.push(D)}),f(ce),x(le)},q=v.useMemo(()=>Fw(Uw(zw(t,o,u),o,m,S),a,l),[t,o,u,m,S,a,l]);return e({...n,rows:t,columns:o,page:q,pageNo:a,setPageNo:s,pageSize:l,setPageSize:i,showFilters:c,toggleFilters:E,filters:u,setFilter:L,sortColumn:m,setSortColumn:b,sortReverse:S,setSortReverse:j,toggleSortColumn:k,visibleColumns:h,setVisibleColumns:f,toggleVisibleColumn:$,columnOrder:_,setColumnOrder:x,changeColumnOrder:K,controlsVisible:y,showControls:g,hideControls:w})},mt=Pr(Vw),Hw=({page:e,summaryClass:t="small flex middle gap-2",setPageNo:n})=>r.jsxs("div",{className:t,children:[r.jsx(B,{icon:"arrow-left",size:"smaller",disabled:e.pageNo<=e.firstPage,outline:!0,onClick:()=>n(e.pageNo-1)}),r.jsx(B,{icon:"arrow-right",size:"smaller",disabled:e.pageNo>=e.lastPage,outline:!0,onClick:()=>n(e.pageNo+1)}),r.jsxs("div",{style:{textWrap:"balance"},children:["Page ",e.pageNo,"/",e.lastPage," ",e.none?"no rows":e.one?"one row":e.all?`all ${ss(e.total)} rows`:`rows ${ss(e.from)}-${ss(e.to)} of ${ss(e.total)}`," "]})]}),Ww=mt.Consumer(Hw);var zn;let r3=(zn=class extends ys{componentDidMount(){this.mounted=!0,this.props.onLoad(this)}componentWillUnmount(){this.mounted=!1,this.props.onUnload(this)}onMouseEnter(){this.debug("onMouseEnter()"),this.setState({hasHover:!0},this.props.openOnHover?()=>{this.open(),this.focusTrigger()}:null)}onMouseLeave(){this.debug("onMouseLeave()"),this.setState({hasHover:!1},this.props.openOnHover?()=>this.closeSoon():null)}onFocus(){this.debug("onFocus()"),this.setState({hasFocus:!0},this.props.onFocus)}onBlur(){this.debug("onBlur()"),this.setState({hasFocus:!1},this.props.onBlur),this.props.closeOnBlur&&this.closeSoon()}onClick(){this.debug("onClick()"),this.state.isOpen?this.close():this.open()}open(){this.debug("open()"),this.setState({isOpen:!0},this.props.onOpen)}close(){this.debug("close()"),this.setState(this.closeState(),this.props.onClose)}closeState(){return this.constructor.inactiveState}closeSoon(t=!1){this.debug(`closeSoon()  force:${t}`),Ar(this.props.closeDelay).then(()=>{this.closeable(t)?this.close():console.log(`NOT closing force:${t} hasHover:${this.state.hasHover}`)})}closeable(t){return t||!this.state.hasHover}onKeyDown(t){switch(this.debug(`onKeyDown(${t.key})`),t.key){case Oc:case Rh:this.state.isOpen?this.close():this.open();break;case Lc:this.close();break;default:console.log(`ignored key ${t.key}`);return}t.preventDefault()}triggerRef(t){this._triggerRef=t}focusTrigger(){this._triggerRef?(this.debug("focussing trigger"),this._triggerRef.focus()):this.debug("no trigger to focus")}},be(zn,"debug",!1),be(zn,"defaultProps",{options:[],openOnHover:!1,closeOnBlur:!0,closeDelay:300,onLoad:Be,onUnload:Be,onFocus:Be,onBlur:Be,onClick:Be,onOpen:Be,onClose:Be}),be(zn,"inactiveState",{isOpen:!1}),be(zn,"initialState",{...zn.inactiveState}),zn);const Xr=class Xr extends r3{open(t=this.initialCursor()??this.cursorFirstIndex()){this.debug(`open(${t})`),this.setState({isOpen:!0,cursor:t},this.props.onOpen)}onKeyDown(t){switch(this.debug(`onKeyDown(${t.key})`),this.debug("alt: ",t.altKey),this.debug("ctrl: ",t.ctrlKey),this.debug("meta: ",t.metaKey),t.key){case Eh:this.state.isOpen?this.setCursor(this.cursorNextIndex()):this.open(this.initialCursor()??this.cursorFirstIndex());break;case Nh:this.state.isOpen?this.setCursor(this.cursorPrevIndex()):this.open(this.initialCursor()??this.cursorLastIndex());break;case Oc:case Rh:this.state.isOpen?this.selectCursor():this.open(this.initialCursor()??this.cursorFirstIndex());break;case Lc:this.close();break;default:console.log(`ignored key ${t.key}`);return}t.preventDefault()}menuOptions(){return this.props.options}initialCursor(){return null}cursorFirstIndex(){return iw(this.menuOptions(),this.props.validOption)}cursorLastIndex(){return cw(this.menuOptions(),this.props.validOption)}cursorNextIndex(){return dw(this.menuOptions(),this.state.cursor,this.props.validOption)}cursorPrevIndex(){return uw(this.menuOptions(),this.state.cursor,this.props.validOption)}setCursor(t){this.debug(`setCursor(${t})`),this.setState({cursor:t})}selectCursor(){this.debug("selectCursor()");const{cursor:t}=this.state,n=this.menuOptions();if(n&&n.length&&Se(t)){const o=n[t];this.debug(`selectCursor() ${t} =>`,o),this.selectOption(o)}else this.debug("Not selecting: cursor out of range")}selectOption(t){this.debug("selectOption()",t),this.setState(this.selectState(t),()=>this.props.onSelect(t)),this.props.closeOnSelect?(this.debug("closeOnSelect is set, closing"),this.closeSoon(!0)):this.debug("closeOnSelect is not set, NOT closing")}selectState(t){return{selected:t}}menuRef(t){this._menuRef=t}activeRef(t){n3(this._menuRef,t)}};be(Xr,"debug",!1),be(Xr,"defaultProps",{options:[],openOnHover:!1,closeOnBlur:!0,closeDelay:300,onLoad:Be,onUnload:Be,onFocus:Be,onBlur:Be,onClick:Be,onOpen:Be,onClose:Be,onSelect:Be,closeOnSelect:!0}),be(Xr,"inactiveState",{isOpen:!1,cursor:void 0,selected:void 0}),be(Xr,"initialState",{...Xr.inactiveState});let tc=Xr;var wn;let Zw=(wn=class extends tc{},be(wn,"debug",!1),be(wn,"debugPrefix","Dropdown > "),be(wn,"debugColor","MediumVioletRed"),be(wn,"defaultProps",{...wn.defaultProps,options:[],displayOption:fw}),be(wn,"actions",["onMouseEnter","onMouseLeave","onFocus","onBlur","onClick","onKeyDown","open","close","setCursor","selectCursor","selectOption","triggerRef","menuRef","activeRef"]),wn);const cl=Pr(Zw),Kw=({triggerClass:e="trigger",triggerRef:t,safeAreaClass:n="safe-area",onMouseEnter:o,onMouseLeave:a,onKeyDown:s,onFocus:l,onBlur:i,onClick:c,...d})=>r.jsxs("div",{className:e,onClick:c,onMouseEnter:o,onMouseLeave:a,onKeyDown:s,onFocus:l,onBlur:i,tabIndex:0,ref:t,children:[r.jsx(Ca,{...jh(d,/^(icon|text)/)}),r.jsx("div",{className:n})]}),Yw=cl.Consumer(Kw),Gw=({option:e,active:t,activeRef:n,selected:o,onClick:a,onMouseEnter:s,optionClass:l="item no-hover",activeClass:i="active",selectedClass:c="selected",disabledClass:d="disabled",displayOption:u})=>r.jsx("div",{className:ve(l,e.className,t?i:null,o?c:null,e.disabled?d:null),onMouseEnter:s,onClick:a,ref:t?n:null,"aria-disabled":e.disabled,children:u(e)}),qw=cl.Consumer(Gw),Xw=({option:e,separatorClass:t="separator"})=>r.jsx("div",{className:ve(t,e.className)}),Qw=({option:e,optionClass:t="item no-hover",headingClass:n="heading"})=>r.jsx("h4",{className:ve(n,t,e.className),children:e.heading}),Jw=({options:e=[],menuRef:t,menuClass:n="menu border bdr-1",cursor:o,selected:a,selectOption:s,setCursor:l,onMouseEnter:i,onMouseLeave:c,Option:d=qw,Separator:u=Xw,Heading:p=Qw})=>r.jsx("div",{className:n,ref:t,onMouseEnter:i,onMouseLeave:c,children:e.map((m,b)=>m.separator?r.jsx(u,{option:m},b):m.heading?r.jsx(p,{option:m},b):r.jsx(d,{option:m,active:Se(o)&&e[o]===m,selected:a===m,onClick:()=>s(m),onMouseEnter:()=>l(b)},m.id??m.value??b))}),e_=cl.Consumer(Jw),t_=({className:e="dropdown",openClass:t="open",closedClass:n="closed",isOpen:o,right:a,size:s,wide:l,Trigger:i=Yw,Options:c=e_})=>r.jsxs("div",{className:ve(e,s,o?t:n,{right:a,wide:l}),children:[r.jsx(i,{}),o&&r.jsx(c,{})]}),n_=cl.Consumer(t_),r_=({Content:e=n_,...t})=>r.jsx(cl.Provider,{...t,children:r.jsx(e,{})}),Ir=ee(r_,"DropdownMenu"),o_=({setPageSize:e,pageSizes:t=[10,25,50,100,250,500,1e3]})=>r.jsx("div",{className:"pagesize",children:r.jsx(Ir,{right:!0,iconRight:"page",text:"Page Size",size:"small",options:t.map(n=>({n,text:`${n} per page`})),onSelect:n=>e(n.n)})}),a_=mt.Consumer(o_);class ds extends r3{}be(ds,"debug",!1),be(ds,"debugPrefix","Dropdown > "),be(ds,"debugColor","MediumVioletRed"),be(ds,"actions",["onMouseEnter","onMouseLeave","onFocus","onBlur","onClick","onKeyDown","open","close","triggerRef"]);const dl=Pr(ds),s_=({triggerClass:e="trigger",triggerRef:t,safeAreaClass:n="safe-area",onMouseEnter:o,onMouseLeave:a,onKeyDown:s,onFocus:l,onBlur:i,onClick:c,...d})=>r.jsxs("div",{className:e,onClick:c,onMouseEnter:o,onMouseLeave:a,onKeyDown:s,onFocus:l,onBlur:i,tabIndex:0,ref:t,children:[r.jsx(Ca,{...jh(d,/^(icon|text)/)}),r.jsx("div",{className:n})]}),l_=dl.Consumer(s_),i_=({bodyClass:e="body border bdr-1",onMouseEnter:t,onMouseLeave:n,content:o})=>r.jsx("div",{className:e,onMouseEnter:t,onMouseLeave:n,children:o||"No content defined"}),c_=dl.Consumer(i_),d_=({className:e="dropdown",openClass:t="open",closedClass:n="closed",isOpen:o,right:a,size:s,wide:l,Trigger:i=l_,Body:c=c_})=>r.jsxs("div",{className:ve(e,s,o?t:n,{right:a,wide:l}),children:[r.jsx(i,{}),o&&r.jsx(c,{})]}),u_=dl.Consumer(d_),p_=({Content:e=u_,content:t,children:n,...o})=>r.jsx(dl.Provider,{content:t||n,...o,children:r.jsx(e,{})}),gn=ee(p_,"Dropdown"),h_=({item:e,setNodeRef:t,style:n,listeners:o,toggleVisibleColumn:a,isVisible:s,...l})=>r.jsxs("div",{ref:t,style:n,className:`sortable item flex middle outline pad-v-none pad-h-1 border mar-b-2 ${e.moved?"moved":""}`,...l,children:[r.jsx(Bn,{className:"fluid flex middle no-focus",checked:s[e.id]||!1,onChange:()=>a(e.id),text:e.label},e.id),r.jsx("div",{...o,className:"pad-h-2",children:r.jsx(ne,{name:"drag",className:"drag-handle"})})]}),f_=({close:e})=>r.jsx(B,{className:"wide",size:"smaller",color:"green",text:"OK",onClick:e}),m_=dl.Consumer(f_);function x_(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return v.useMemo(()=>o=>{t.forEach(a=>a(o))},t)}const Dc=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function wa(e){const t=Object.prototype.toString.call(e);return t==="[object Window]"||t==="[object global]"}function Oh(e){return"nodeType"in e}function St(e){var t,n;return e?wa(e)?e:Oh(e)&&(t=(n=e.ownerDocument)==null?void 0:n.defaultView)!=null?t:window:window}function Lh(e){const{Document:t}=St(e);return e instanceof t}function ul(e){return wa(e)?!1:e instanceof St(e).HTMLElement}function o3(e){return e instanceof St(e).SVGElement}function _a(e){return e?wa(e)?e.document:Oh(e)?Lh(e)?e:ul(e)||o3(e)?e.ownerDocument:document:document:document}const en=Dc?v.useLayoutEffect:v.useEffect;function Bc(e){const t=v.useRef(e);return en(()=>{t.current=e}),v.useCallback(function(){for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return t.current==null?void 0:t.current(...o)},[])}function g_(){const e=v.useRef(null),t=v.useCallback((o,a)=>{e.current=setInterval(o,a)},[]),n=v.useCallback(()=>{e.current!==null&&(clearInterval(e.current),e.current=null)},[]);return[t,n]}function Hs(e,t){t===void 0&&(t=[e]);const n=v.useRef(e);return en(()=>{n.current!==e&&(n.current=e)},t),n}function pl(e,t){const n=v.useRef();return v.useMemo(()=>{const o=e(n.current);return n.current=o,o},[...t])}function nc(e){const t=Bc(e),n=v.useRef(null),o=v.useCallback(a=>{a!==n.current&&(t==null||t(a,n.current)),n.current=a},[]);return[n,o]}function rc(e){const t=v.useRef();return v.useEffect(()=>{t.current=e},[e]),t.current}let Rd={};function hl(e,t){return v.useMemo(()=>{if(t)return t;const n=Rd[e]==null?0:Rd[e]+1;return Rd[e]=n,e+"-"+n},[e,t])}function a3(e){return function(t){for(var n=arguments.length,o=new Array(n>1?n-1:0),a=1;a<n;a++)o[a-1]=arguments[a];return o.reduce((s,l)=>{const i=Object.entries(l);for(const[c,d]of i){const u=s[c];u!=null&&(s[c]=u+e*d)}return s},{...t})}}const aa=a3(1),Ws=a3(-1);function v_(e){return"clientX"in e&&"clientY"in e}function $c(e){if(!e)return!1;const{KeyboardEvent:t}=St(e.target);return t&&e instanceof t}function b_(e){if(!e)return!1;const{TouchEvent:t}=St(e.target);return t&&e instanceof t}function oc(e){if(b_(e)){if(e.touches&&e.touches.length){const{clientX:t,clientY:n}=e.touches[0];return{x:t,y:n}}else if(e.changedTouches&&e.changedTouches.length){const{clientX:t,clientY:n}=e.changedTouches[0];return{x:t,y:n}}}return v_(e)?{x:e.clientX,y:e.clientY}:null}const Nr=Object.freeze({Translate:{toString(e){if(!e)return;const{x:t,y:n}=e;return"translate3d("+(t?Math.round(t):0)+"px, "+(n?Math.round(n):0)+"px, 0)"}},Scale:{toString(e){if(!e)return;const{scaleX:t,scaleY:n}=e;return"scaleX("+t+") scaleY("+n+")"}},Transform:{toString(e){if(e)return[Nr.Translate.toString(e),Nr.Scale.toString(e)].join(" ")}},Transition:{toString(e){let{property:t,duration:n,easing:o}=e;return t+" "+n+"ms "+o}}}),Um="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function y_(e){return e.matches(Um)?e:e.querySelector(Um)}const j_={display:"none"};function S_(e){let{id:t,value:n}=e;return J.createElement("div",{id:t,style:j_},n)}function C_(e){let{id:t,announcement:n,ariaLiveType:o="assertive"}=e;const a={position:"fixed",width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"};return J.createElement("div",{id:t,style:a,role:"status","aria-live":o,"aria-atomic":!0},n)}function w_(){const[e,t]=v.useState("");return{announce:v.useCallback(o=>{o!=null&&t(o)},[]),announcement:e}}const s3=v.createContext(null);function __(e){const t=v.useContext(s3);v.useEffect(()=>{if(!t)throw new Error("useDndMonitor must be used within a children of <DndContext>");return t(e)},[e,t])}function T_(){const[e]=v.useState(()=>new Set),t=v.useCallback(o=>(e.add(o),()=>e.delete(o)),[e]);return[v.useCallback(o=>{let{type:a,event:s}=o;e.forEach(l=>{var i;return(i=l[a])==null?void 0:i.call(l,s)})},[e]),t]}const k_={draggable:`
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `},E_={onDragStart(e){let{active:t}=e;return"Picked up draggable item "+t.id+"."},onDragOver(e){let{active:t,over:n}=e;return n?"Draggable item "+t.id+" was moved over droppable area "+n.id+".":"Draggable item "+t.id+" is no longer over a droppable area."},onDragEnd(e){let{active:t,over:n}=e;return n?"Draggable item "+t.id+" was dropped over droppable area "+n.id:"Draggable item "+t.id+" was dropped."},onDragCancel(e){let{active:t}=e;return"Dragging was cancelled. Draggable item "+t.id+" was dropped."}};function N_(e){let{announcements:t=E_,container:n,hiddenTextDescribedById:o,screenReaderInstructions:a=k_}=e;const{announce:s,announcement:l}=w_(),i=hl("DndLiveRegion"),[c,d]=v.useState(!1);if(v.useEffect(()=>{d(!0)},[]),__(v.useMemo(()=>({onDragStart(p){let{active:m}=p;s(t.onDragStart({active:m}))},onDragMove(p){let{active:m,over:b}=p;t.onDragMove&&s(t.onDragMove({active:m,over:b}))},onDragOver(p){let{active:m,over:b}=p;s(t.onDragOver({active:m,over:b}))},onDragEnd(p){let{active:m,over:b}=p;s(t.onDragEnd({active:m,over:b}))},onDragCancel(p){let{active:m,over:b}=p;s(t.onDragCancel({active:m,over:b}))}}),[s,t])),!c)return null;const u=J.createElement(J.Fragment,null,J.createElement(S_,{id:o,value:a.draggable}),J.createElement(C_,{id:i,announcement:l}));return n?Fn.createPortal(u,n):u}var Xe;(function(e){e.DragStart="dragStart",e.DragMove="dragMove",e.DragEnd="dragEnd",e.DragCancel="dragCancel",e.DragOver="dragOver",e.RegisterDroppable="registerDroppable",e.SetDroppableDisabled="setDroppableDisabled",e.UnregisterDroppable="unregisterDroppable"})(Xe||(Xe={}));function ac(){}function Vm(e,t){return v.useMemo(()=>({sensor:e,options:t??{}}),[e,t])}function R_(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return v.useMemo(()=>[...t].filter(o=>o!=null),[...t])}const xn=Object.freeze({x:0,y:0});function l3(e,t){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function O_(e,t){const n=oc(e);if(!n)return"0 0";const o={x:(n.x-t.left)/t.width*100,y:(n.y-t.top)/t.height*100};return o.x+"% "+o.y+"%"}function i3(e,t){let{data:{value:n}}=e,{data:{value:o}}=t;return n-o}function L_(e,t){let{data:{value:n}}=e,{data:{value:o}}=t;return o-n}function Hm(e){let{left:t,top:n,height:o,width:a}=e;return[{x:t,y:n},{x:t+a,y:n},{x:t,y:n+o},{x:t+a,y:n+o}]}function c3(e,t){if(!e||e.length===0)return null;const[n]=e;return t?n[t]:n}function Wm(e,t,n){return t===void 0&&(t=e.left),n===void 0&&(n=e.top),{x:t+e.width*.5,y:n+e.height*.5}}const D_=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:o}=e;const a=Wm(t,t.left,t.top),s=[];for(const l of o){const{id:i}=l,c=n.get(i);if(c){const d=l3(Wm(c),a);s.push({id:i,data:{droppableContainer:l,value:d}})}}return s.sort(i3)},B_=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:o}=e;const a=Hm(t),s=[];for(const l of o){const{id:i}=l,c=n.get(i);if(c){const d=Hm(c),u=a.reduce((m,b,S)=>m+l3(d[S],b),0),p=Number((u/4).toFixed(4));s.push({id:i,data:{droppableContainer:l,value:p}})}}return s.sort(i3)};function $_(e,t){const n=Math.max(t.top,e.top),o=Math.max(t.left,e.left),a=Math.min(t.left+t.width,e.left+e.width),s=Math.min(t.top+t.height,e.top+e.height),l=a-o,i=s-n;if(o<a&&n<s){const c=t.width*t.height,d=e.width*e.height,u=l*i,p=u/(c+d-u);return Number(p.toFixed(4))}return 0}const A_=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:o}=e;const a=[];for(const s of o){const{id:l}=s,i=n.get(l);if(i){const c=$_(i,t);c>0&&a.push({id:l,data:{droppableContainer:s,value:c}})}}return a.sort(L_)};function M_(e,t,n){return{...e,scaleX:t&&n?t.width/n.width:1,scaleY:t&&n?t.height/n.height:1}}function d3(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:xn}function P_(e){return function(n){for(var o=arguments.length,a=new Array(o>1?o-1:0),s=1;s<o;s++)a[s-1]=arguments[s];return a.reduce((l,i)=>({...l,top:l.top+e*i.y,bottom:l.bottom+e*i.y,left:l.left+e*i.x,right:l.right+e*i.x}),{...n})}}const I_=P_(1);function u3(e){if(e.startsWith("matrix3d(")){const t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}else if(e.startsWith("matrix(")){const t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}function z_(e,t,n){const o=u3(t);if(!o)return e;const{scaleX:a,scaleY:s,x:l,y:i}=o,c=e.left-l-(1-a)*parseFloat(n),d=e.top-i-(1-s)*parseFloat(n.slice(n.indexOf(" ")+1)),u=a?e.width/a:e.width,p=s?e.height/s:e.height;return{width:u,height:p,top:d,right:c+u,bottom:d+p,left:c}}const F_={ignoreTransform:!1};function Ta(e,t){t===void 0&&(t=F_);let n=e.getBoundingClientRect();if(t.ignoreTransform){const{transform:d,transformOrigin:u}=St(e).getComputedStyle(e);d&&(n=z_(n,d,u))}const{top:o,left:a,width:s,height:l,bottom:i,right:c}=n;return{top:o,left:a,width:s,height:l,bottom:i,right:c}}function Zm(e){return Ta(e,{ignoreTransform:!0})}function U_(e){const t=e.innerWidth,n=e.innerHeight;return{top:0,left:0,right:t,bottom:n,width:t,height:n}}function V_(e,t){return t===void 0&&(t=St(e).getComputedStyle(e)),t.position==="fixed"}function H_(e,t){t===void 0&&(t=St(e).getComputedStyle(e));const n=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some(a=>{const s=t[a];return typeof s=="string"?n.test(s):!1})}function Ac(e,t){const n=[];function o(a){if(t!=null&&n.length>=t||!a)return n;if(Lh(a)&&a.scrollingElement!=null&&!n.includes(a.scrollingElement))return n.push(a.scrollingElement),n;if(!ul(a)||o3(a)||n.includes(a))return n;const s=St(e).getComputedStyle(a);return a!==e&&H_(a,s)&&n.push(a),V_(a,s)?n:o(a.parentNode)}return e?o(e):n}function p3(e){const[t]=Ac(e,1);return t??null}function Od(e){return!Dc||!e?null:wa(e)?e:Oh(e)?Lh(e)||e===_a(e).scrollingElement?window:ul(e)?e:null:null}function h3(e){return wa(e)?e.scrollX:e.scrollLeft}function f3(e){return wa(e)?e.scrollY:e.scrollTop}function Wu(e){return{x:h3(e),y:f3(e)}}var rt;(function(e){e[e.Forward=1]="Forward",e[e.Backward=-1]="Backward"})(rt||(rt={}));function m3(e){return!Dc||!e?!1:e===document.scrollingElement}function x3(e){const t={x:0,y:0},n=m3(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth},o={x:e.scrollWidth-n.width,y:e.scrollHeight-n.height},a=e.scrollTop<=t.y,s=e.scrollLeft<=t.x,l=e.scrollTop>=o.y,i=e.scrollLeft>=o.x;return{isTop:a,isLeft:s,isBottom:l,isRight:i,maxScroll:o,minScroll:t}}const W_={x:.2,y:.2};function Z_(e,t,n,o,a){let{top:s,left:l,right:i,bottom:c}=n;o===void 0&&(o=10),a===void 0&&(a=W_);const{isTop:d,isBottom:u,isLeft:p,isRight:m}=x3(e),b={x:0,y:0},S={x:0,y:0},j={height:t.height*a.y,width:t.width*a.x};return!d&&s<=t.top+j.height?(b.y=rt.Backward,S.y=o*Math.abs((t.top+j.height-s)/j.height)):!u&&c>=t.bottom-j.height&&(b.y=rt.Forward,S.y=o*Math.abs((t.bottom-j.height-c)/j.height)),!m&&i>=t.right-j.width?(b.x=rt.Forward,S.x=o*Math.abs((t.right-j.width-i)/j.width)):!p&&l<=t.left+j.width&&(b.x=rt.Backward,S.x=o*Math.abs((t.left+j.width-l)/j.width)),{direction:b,speed:S}}function K_(e){if(e===document.scrollingElement){const{innerWidth:s,innerHeight:l}=window;return{top:0,left:0,right:s,bottom:l,width:s,height:l}}const{top:t,left:n,right:o,bottom:a}=e.getBoundingClientRect();return{top:t,left:n,right:o,bottom:a,width:e.clientWidth,height:e.clientHeight}}function g3(e){return e.reduce((t,n)=>aa(t,Wu(n)),xn)}function Y_(e){return e.reduce((t,n)=>t+h3(n),0)}function G_(e){return e.reduce((t,n)=>t+f3(n),0)}function v3(e,t){if(t===void 0&&(t=Ta),!e)return;const{top:n,left:o,bottom:a,right:s}=t(e);p3(e)&&(a<=0||s<=0||n>=window.innerHeight||o>=window.innerWidth)&&e.scrollIntoView({block:"center",inline:"center"})}const q_=[["x",["left","right"],Y_],["y",["top","bottom"],G_]];class Dh{constructor(t,n){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;const o=Ac(n),a=g3(o);this.rect={...t},this.width=t.width,this.height=t.height;for(const[s,l,i]of q_)for(const c of l)Object.defineProperty(this,c,{get:()=>{const d=i(o),u=a[s]-d;return this.rect[c]+u},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}}class js{constructor(t){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach(n=>{var o;return(o=this.target)==null?void 0:o.removeEventListener(...n)})},this.target=t}add(t,n,o){var a;(a=this.target)==null||a.addEventListener(t,n,o),this.listeners.push([t,n,o])}}function X_(e){const{EventTarget:t}=St(e);return e instanceof t?e:_a(e)}function Ld(e,t){const n=Math.abs(e.x),o=Math.abs(e.y);return typeof t=="number"?Math.sqrt(n**2+o**2)>t:"x"in t&&"y"in t?n>t.x&&o>t.y:"x"in t?n>t.x:"y"in t?o>t.y:!1}var Zt;(function(e){e.Click="click",e.DragStart="dragstart",e.Keydown="keydown",e.ContextMenu="contextmenu",e.Resize="resize",e.SelectionChange="selectionchange",e.VisibilityChange="visibilitychange"})(Zt||(Zt={}));function Km(e){e.preventDefault()}function Q_(e){e.stopPropagation()}var ge;(function(e){e.Space="Space",e.Down="ArrowDown",e.Right="ArrowRight",e.Left="ArrowLeft",e.Up="ArrowUp",e.Esc="Escape",e.Enter="Enter"})(ge||(ge={}));const b3={start:[ge.Space,ge.Enter],cancel:[ge.Esc],end:[ge.Space,ge.Enter]},J_=(e,t)=>{let{currentCoordinates:n}=t;switch(e.code){case ge.Right:return{...n,x:n.x+25};case ge.Left:return{...n,x:n.x-25};case ge.Down:return{...n,y:n.y+25};case ge.Up:return{...n,y:n.y-25}}};class Bh{constructor(t){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=t;const{event:{target:n}}=t;this.props=t,this.listeners=new js(_a(n)),this.windowListeners=new js(St(n)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(Zt.Resize,this.handleCancel),this.windowListeners.add(Zt.VisibilityChange,this.handleCancel),setTimeout(()=>this.listeners.add(Zt.Keydown,this.handleKeyDown))}handleStart(){const{activeNode:t,onStart:n}=this.props,o=t.node.current;o&&v3(o),n(xn)}handleKeyDown(t){if($c(t)){const{active:n,context:o,options:a}=this.props,{keyboardCodes:s=b3,coordinateGetter:l=J_,scrollBehavior:i="smooth"}=a,{code:c}=t;if(s.end.includes(c)){this.handleEnd(t);return}if(s.cancel.includes(c)){this.handleCancel(t);return}const{collisionRect:d}=o.current,u=d?{x:d.left,y:d.top}:xn;this.referenceCoordinates||(this.referenceCoordinates=u);const p=l(t,{active:n,context:o.current,currentCoordinates:u});if(p){const m=Ws(p,u),b={x:0,y:0},{scrollableAncestors:S}=o.current;for(const j of S){const _=t.code,{isTop:x,isRight:h,isLeft:f,isBottom:y,maxScroll:C,minScroll:g}=x3(j),w=K_(j),k={x:Math.min(_===ge.Right?w.right-w.width/2:w.right,Math.max(_===ge.Right?w.left:w.left+w.width/2,p.x)),y:Math.min(_===ge.Down?w.bottom-w.height/2:w.bottom,Math.max(_===ge.Down?w.top:w.top+w.height/2,p.y))},E=_===ge.Right&&!h||_===ge.Left&&!f,L=_===ge.Down&&!y||_===ge.Up&&!x;if(E&&k.x!==p.x){const $=j.scrollLeft+m.x,K=_===ge.Right&&$<=C.x||_===ge.Left&&$>=g.x;if(K&&!m.y){j.scrollTo({left:$,behavior:i});return}K?b.x=j.scrollLeft-$:b.x=_===ge.Right?j.scrollLeft-C.x:j.scrollLeft-g.x,b.x&&j.scrollBy({left:-b.x,behavior:i});break}else if(L&&k.y!==p.y){const $=j.scrollTop+m.y,K=_===ge.Down&&$<=C.y||_===ge.Up&&$>=g.y;if(K&&!m.x){j.scrollTo({top:$,behavior:i});return}K?b.y=j.scrollTop-$:b.y=_===ge.Down?j.scrollTop-C.y:j.scrollTop-g.y,b.y&&j.scrollBy({top:-b.y,behavior:i});break}}this.handleMove(t,aa(Ws(p,this.referenceCoordinates),b))}}}handleMove(t,n){const{onMove:o}=this.props;t.preventDefault(),o(n)}handleEnd(t){const{onEnd:n}=this.props;t.preventDefault(),this.detach(),n()}handleCancel(t){const{onCancel:n}=this.props;t.preventDefault(),this.detach(),n()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}}Bh.activators=[{eventName:"onKeyDown",handler:(e,t,n)=>{let{keyboardCodes:o=b3,onActivation:a}=t,{active:s}=n;const{code:l}=e.nativeEvent;if(o.start.includes(l)){const i=s.activatorNode.current;return i&&e.target!==i?!1:(e.preventDefault(),a==null||a({event:e.nativeEvent}),!0)}return!1}}];function Ym(e){return!!(e&&"distance"in e)}function Gm(e){return!!(e&&"delay"in e)}class $h{constructor(t,n,o){var a;o===void 0&&(o=X_(t.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=t,this.events=n;const{event:s}=t,{target:l}=s;this.props=t,this.events=n,this.document=_a(l),this.documentListeners=new js(this.document),this.listeners=new js(o),this.windowListeners=new js(St(l)),this.initialCoordinates=(a=oc(s))!=null?a:xn,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){const{events:t,props:{options:{activationConstraint:n,bypassActivationConstraint:o}}}=this;if(this.listeners.add(t.move.name,this.handleMove,{passive:!1}),this.listeners.add(t.end.name,this.handleEnd),this.windowListeners.add(Zt.Resize,this.handleCancel),this.windowListeners.add(Zt.DragStart,Km),this.windowListeners.add(Zt.VisibilityChange,this.handleCancel),this.windowListeners.add(Zt.ContextMenu,Km),this.documentListeners.add(Zt.Keydown,this.handleKeydown),n){if(o!=null&&o({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(Gm(n)){this.timeoutId=setTimeout(this.handleStart,n.delay);return}if(Ym(n))return}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),this.timeoutId!==null&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handleStart(){const{initialCoordinates:t}=this,{onStart:n}=this.props;t&&(this.activated=!0,this.documentListeners.add(Zt.Click,Q_,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(Zt.SelectionChange,this.removeTextSelection),n(t))}handleMove(t){var n;const{activated:o,initialCoordinates:a,props:s}=this,{onMove:l,options:{activationConstraint:i}}=s;if(!a)return;const c=(n=oc(t))!=null?n:xn,d=Ws(a,c);if(!o&&i){if(Ym(i)){if(i.tolerance!=null&&Ld(d,i.tolerance))return this.handleCancel();if(Ld(d,i.distance))return this.handleStart()}return Gm(i)&&Ld(d,i.tolerance)?this.handleCancel():void 0}t.cancelable&&t.preventDefault(),l(c)}handleEnd(){const{onEnd:t}=this.props;this.detach(),t()}handleCancel(){const{onCancel:t}=this.props;this.detach(),t()}handleKeydown(t){t.code===ge.Esc&&this.handleCancel()}removeTextSelection(){var t;(t=this.document.getSelection())==null||t.removeAllRanges()}}const eT={move:{name:"pointermove"},end:{name:"pointerup"}};class Ah extends $h{constructor(t){const{event:n}=t,o=_a(n.target);super(t,eT,o)}}Ah.activators=[{eventName:"onPointerDown",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:o}=t;return!n.isPrimary||n.button!==0?!1:(o==null||o({event:n}),!0)}}];const tT={move:{name:"mousemove"},end:{name:"mouseup"}};var Zu;(function(e){e[e.RightClick=2]="RightClick"})(Zu||(Zu={}));class nT extends $h{constructor(t){super(t,tT,_a(t.event.target))}}nT.activators=[{eventName:"onMouseDown",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:o}=t;return n.button===Zu.RightClick?!1:(o==null||o({event:n}),!0)}}];const Dd={move:{name:"touchmove"},end:{name:"touchend"}};class rT extends $h{constructor(t){super(t,Dd)}static setup(){return window.addEventListener(Dd.move.name,t,{capture:!1,passive:!1}),function(){window.removeEventListener(Dd.move.name,t)};function t(){}}}rT.activators=[{eventName:"onTouchStart",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:o}=t;const{touches:a}=n;return a.length>1?!1:(o==null||o({event:n}),!0)}}];var Ss;(function(e){e[e.Pointer=0]="Pointer",e[e.DraggableRect=1]="DraggableRect"})(Ss||(Ss={}));var sc;(function(e){e[e.TreeOrder=0]="TreeOrder",e[e.ReversedTreeOrder=1]="ReversedTreeOrder"})(sc||(sc={}));function oT(e){let{acceleration:t,activator:n=Ss.Pointer,canScroll:o,draggingRect:a,enabled:s,interval:l=5,order:i=sc.TreeOrder,pointerCoordinates:c,scrollableAncestors:d,scrollableAncestorRects:u,delta:p,threshold:m}=e;const b=sT({delta:p,disabled:!s}),[S,j]=g_(),_=v.useRef({x:0,y:0}),x=v.useRef({x:0,y:0}),h=v.useMemo(()=>{switch(n){case Ss.Pointer:return c?{top:c.y,bottom:c.y,left:c.x,right:c.x}:null;case Ss.DraggableRect:return a}},[n,a,c]),f=v.useRef(null),y=v.useCallback(()=>{const g=f.current;if(!g)return;const w=_.current.x*x.current.x,k=_.current.y*x.current.y;g.scrollBy(w,k)},[]),C=v.useMemo(()=>i===sc.TreeOrder?[...d].reverse():d,[i,d]);v.useEffect(()=>{if(!s||!d.length||!h){j();return}for(const g of C){if((o==null?void 0:o(g))===!1)continue;const w=d.indexOf(g),k=u[w];if(!k)continue;const{direction:E,speed:L}=Z_(g,k,h,t,m);for(const $ of["x","y"])b[$][E[$]]||(L[$]=0,E[$]=0);if(L.x>0||L.y>0){j(),f.current=g,S(y,l),_.current=L,x.current=E;return}}_.current={x:0,y:0},x.current={x:0,y:0},j()},[t,y,o,j,s,l,JSON.stringify(h),JSON.stringify(b),S,d,C,u,JSON.stringify(m)])}const aT={x:{[rt.Backward]:!1,[rt.Forward]:!1},y:{[rt.Backward]:!1,[rt.Forward]:!1}};function sT(e){let{delta:t,disabled:n}=e;const o=rc(t);return pl(a=>{if(n||!o||!a)return aT;const s={x:Math.sign(t.x-o.x),y:Math.sign(t.y-o.y)};return{x:{[rt.Backward]:a.x[rt.Backward]||s.x===-1,[rt.Forward]:a.x[rt.Forward]||s.x===1},y:{[rt.Backward]:a.y[rt.Backward]||s.y===-1,[rt.Forward]:a.y[rt.Forward]||s.y===1}}},[n,t,o])}function lT(e,t){const n=t!==null?e.get(t):void 0,o=n?n.node.current:null;return pl(a=>{var s;return t===null?null:(s=o??a)!=null?s:null},[o,t])}function iT(e,t){return v.useMemo(()=>e.reduce((n,o)=>{const{sensor:a}=o,s=a.activators.map(l=>({eventName:l.eventName,handler:t(l.handler,o)}));return[...n,...s]},[]),[e,t])}var Zs;(function(e){e[e.Always=0]="Always",e[e.BeforeDragging=1]="BeforeDragging",e[e.WhileDragging=2]="WhileDragging"})(Zs||(Zs={}));var Ku;(function(e){e.Optimized="optimized"})(Ku||(Ku={}));const qm=new Map;function cT(e,t){let{dragging:n,dependencies:o,config:a}=t;const[s,l]=v.useState(null),{frequency:i,measure:c,strategy:d}=a,u=v.useRef(e),p=_(),m=Hs(p),b=v.useCallback(function(x){x===void 0&&(x=[]),!m.current&&l(h=>h===null?x:h.concat(x.filter(f=>!h.includes(f))))},[m]),S=v.useRef(null),j=pl(x=>{if(p&&!n)return qm;if(!x||x===qm||u.current!==e||s!=null){const h=new Map;for(let f of e){if(!f)continue;if(s&&s.length>0&&!s.includes(f.id)&&f.rect.current){h.set(f.id,f.rect.current);continue}const y=f.node.current,C=y?new Dh(c(y),y):null;f.rect.current=C,C&&h.set(f.id,C)}return h}return x},[e,s,n,p,c]);return v.useEffect(()=>{u.current=e},[e]),v.useEffect(()=>{p||b()},[n,p]),v.useEffect(()=>{s&&s.length>0&&l(null)},[JSON.stringify(s)]),v.useEffect(()=>{p||typeof i!="number"||S.current!==null||(S.current=setTimeout(()=>{b(),S.current=null},i))},[i,p,b,...o]),{droppableRects:j,measureDroppableContainers:b,measuringScheduled:s!=null};function _(){switch(d){case Zs.Always:return!1;case Zs.BeforeDragging:return n;default:return!n}}}function Mh(e,t){return pl(n=>e?n||(typeof t=="function"?t(e):e):null,[t,e])}function dT(e,t){return Mh(e,t)}function uT(e){let{callback:t,disabled:n}=e;const o=Bc(t),a=v.useMemo(()=>{if(n||typeof window>"u"||typeof window.MutationObserver>"u")return;const{MutationObserver:s}=window;return new s(o)},[o,n]);return v.useEffect(()=>()=>a==null?void 0:a.disconnect(),[a]),a}function Mc(e){let{callback:t,disabled:n}=e;const o=Bc(t),a=v.useMemo(()=>{if(n||typeof window>"u"||typeof window.ResizeObserver>"u")return;const{ResizeObserver:s}=window;return new s(o)},[n]);return v.useEffect(()=>()=>a==null?void 0:a.disconnect(),[a]),a}function pT(e){return new Dh(Ta(e),e)}function Xm(e,t,n){t===void 0&&(t=pT);const[o,a]=v.useReducer(i,null),s=uT({callback(c){if(e)for(const d of c){const{type:u,target:p}=d;if(u==="childList"&&p instanceof HTMLElement&&p.contains(e)){a();break}}}}),l=Mc({callback:a});return en(()=>{a(),e?(l==null||l.observe(e),s==null||s.observe(document.body,{childList:!0,subtree:!0})):(l==null||l.disconnect(),s==null||s.disconnect())},[e]),o;function i(c){if(!e)return null;if(e.isConnected===!1){var d;return(d=c??n)!=null?d:null}const u=t(e);return JSON.stringify(c)===JSON.stringify(u)?c:u}}function hT(e){const t=Mh(e);return d3(e,t)}const Qm=[];function fT(e){const t=v.useRef(e),n=pl(o=>e?o&&o!==Qm&&e&&t.current&&e.parentNode===t.current.parentNode?o:Ac(e):Qm,[e]);return v.useEffect(()=>{t.current=e},[e]),n}function mT(e){const[t,n]=v.useState(null),o=v.useRef(e),a=v.useCallback(s=>{const l=Od(s.target);l&&n(i=>i?(i.set(l,Wu(l)),new Map(i)):null)},[]);return v.useEffect(()=>{const s=o.current;if(e!==s){l(s);const i=e.map(c=>{const d=Od(c);return d?(d.addEventListener("scroll",a,{passive:!0}),[d,Wu(d)]):null}).filter(c=>c!=null);n(i.length?new Map(i):null),o.current=e}return()=>{l(e),l(s)};function l(i){i.forEach(c=>{const d=Od(c);d==null||d.removeEventListener("scroll",a)})}},[a,e]),v.useMemo(()=>e.length?t?Array.from(t.values()).reduce((s,l)=>aa(s,l),xn):g3(e):xn,[e,t])}function Jm(e,t){t===void 0&&(t=[]);const n=v.useRef(null);return v.useEffect(()=>{n.current=null},t),v.useEffect(()=>{const o=e!==xn;o&&!n.current&&(n.current=e),!o&&n.current&&(n.current=null)},[e]),n.current?Ws(e,n.current):xn}function xT(e){v.useEffect(()=>{if(!Dc)return;const t=e.map(n=>{let{sensor:o}=n;return o.setup==null?void 0:o.setup()});return()=>{for(const n of t)n==null||n()}},e.map(t=>{let{sensor:n}=t;return n}))}function gT(e,t){return v.useMemo(()=>e.reduce((n,o)=>{let{eventName:a,handler:s}=o;return n[a]=l=>{s(l,t)},n},{}),[e,t])}function y3(e){return v.useMemo(()=>e?U_(e):null,[e])}const Bd=[];function vT(e,t){t===void 0&&(t=Ta);const[n]=e,o=y3(n?St(n):null),[a,s]=v.useReducer(i,Bd),l=Mc({callback:s});return e.length>0&&a===Bd&&s(),en(()=>{e.length?e.forEach(c=>l==null?void 0:l.observe(c)):(l==null||l.disconnect(),s())},[e]),a;function i(){return e.length?e.map(c=>m3(c)?o:new Dh(t(c),c)):Bd}}function j3(e){if(!e)return null;if(e.children.length>1)return e;const t=e.children[0];return ul(t)?t:e}function bT(e){let{measure:t}=e;const[n,o]=v.useState(null),a=v.useCallback(d=>{for(const{target:u}of d)if(ul(u)){o(p=>{const m=t(u);return p?{...p,width:m.width,height:m.height}:m});break}},[t]),s=Mc({callback:a}),l=v.useCallback(d=>{const u=j3(d);s==null||s.disconnect(),u&&(s==null||s.observe(u)),o(u?t(u):null)},[t,s]),[i,c]=nc(l);return v.useMemo(()=>({nodeRef:i,rect:n,setRef:c}),[n,i,c])}const yT=[{sensor:Ah,options:{}},{sensor:Bh,options:{}}],jT={current:{}},_i={draggable:{measure:Zm},droppable:{measure:Zm,strategy:Zs.WhileDragging,frequency:Ku.Optimized},dragOverlay:{measure:Ta}};class Cs extends Map{get(t){var n;return t!=null&&(n=super.get(t))!=null?n:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter(t=>{let{disabled:n}=t;return!n})}getNodeFor(t){var n,o;return(n=(o=this.get(t))==null?void 0:o.node.current)!=null?n:void 0}}const ST={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new Cs,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:ac},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:_i,measureDroppableContainers:ac,windowRect:null,measuringScheduled:!1},S3={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:ac,draggableNodes:new Map,over:null,measureDroppableContainers:ac},fl=v.createContext(S3),C3=v.createContext(ST);function CT(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new Cs}}}function wT(e,t){switch(t.type){case Xe.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case Xe.DragMove:return e.draggable.active?{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}}:e;case Xe.DragEnd:case Xe.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case Xe.RegisterDroppable:{const{element:n}=t,{id:o}=n,a=new Cs(e.droppable.containers);return a.set(o,n),{...e,droppable:{...e.droppable,containers:a}}}case Xe.SetDroppableDisabled:{const{id:n,key:o,disabled:a}=t,s=e.droppable.containers.get(n);if(!s||o!==s.key)return e;const l=new Cs(e.droppable.containers);return l.set(n,{...s,disabled:a}),{...e,droppable:{...e.droppable,containers:l}}}case Xe.UnregisterDroppable:{const{id:n,key:o}=t,a=e.droppable.containers.get(n);if(!a||o!==a.key)return e;const s=new Cs(e.droppable.containers);return s.delete(n),{...e,droppable:{...e.droppable,containers:s}}}default:return e}}function _T(e){let{disabled:t}=e;const{active:n,activatorEvent:o,draggableNodes:a}=v.useContext(fl),s=rc(o),l=rc(n==null?void 0:n.id);return v.useEffect(()=>{if(!t&&!o&&s&&l!=null){if(!$c(s)||document.activeElement===s.target)return;const i=a.get(l);if(!i)return;const{activatorNode:c,node:d}=i;if(!c.current&&!d.current)return;requestAnimationFrame(()=>{for(const u of[c.current,d.current]){if(!u)continue;const p=y_(u);if(p){p.focus();break}}})}},[o,t,a,l,s]),null}function w3(e,t){let{transform:n,...o}=t;return e!=null&&e.length?e.reduce((a,s)=>s({transform:a,...o}),n):n}function TT(e){return v.useMemo(()=>({draggable:{..._i.draggable,...e==null?void 0:e.draggable},droppable:{..._i.droppable,...e==null?void 0:e.droppable},dragOverlay:{..._i.dragOverlay,...e==null?void 0:e.dragOverlay}}),[e==null?void 0:e.draggable,e==null?void 0:e.droppable,e==null?void 0:e.dragOverlay])}function kT(e){let{activeNode:t,measure:n,initialRect:o,config:a=!0}=e;const s=v.useRef(!1),{x:l,y:i}=typeof a=="boolean"?{x:a,y:a}:a;en(()=>{if(!l&&!i||!t){s.current=!1;return}if(s.current||!o)return;const d=t==null?void 0:t.node.current;if(!d||d.isConnected===!1)return;const u=n(d),p=d3(u,o);if(l||(p.x=0),i||(p.y=0),s.current=!0,Math.abs(p.x)>0||Math.abs(p.y)>0){const m=p3(d);m&&m.scrollBy({top:p.y,left:p.x})}},[t,l,i,o,n])}const Pc=v.createContext({...xn,scaleX:1,scaleY:1});var hr;(function(e){e[e.Uninitialized=0]="Uninitialized",e[e.Initializing=1]="Initializing",e[e.Initialized=2]="Initialized"})(hr||(hr={}));const ET=v.memo(function(t){var n,o,a,s;let{id:l,accessibility:i,autoScroll:c=!0,children:d,sensors:u=yT,collisionDetection:p=A_,measuring:m,modifiers:b,...S}=t;const j=v.useReducer(wT,void 0,CT),[_,x]=j,[h,f]=T_(),[y,C]=v.useState(hr.Uninitialized),g=y===hr.Initialized,{draggable:{active:w,nodes:k,translate:E},droppable:{containers:L}}=_,$=w?k.get(w):null,K=v.useRef({initial:null,translated:null}),q=v.useMemo(()=>{var Ke;return w!=null?{id:w,data:(Ke=$==null?void 0:$.data)!=null?Ke:jT,rect:K}:null},[w,$]),X=v.useRef(null),[le,ce]=v.useState(null),[H,D]=v.useState(null),P=Hs(S,Object.values(S)),I=hl("DndDescribedBy",l),V=v.useMemo(()=>L.getEnabled(),[L]),W=TT(m),{droppableRects:_e,measureDroppableContainers:ue,measuringScheduled:Ce}=cT(V,{dragging:g,dependencies:[E.x,E.y],config:W.droppable}),de=lT(k,w),Oe=v.useMemo(()=>H?oc(H):null,[H]),ct=Zc(),wt=dT(de,W.draggable.measure);kT({activeNode:w?k.get(w):null,config:ct.layoutShiftCompensation,initialRect:wt,measure:W.draggable.measure});const xe=Xm(de,W.draggable.measure,wt),Le=Xm(de?de.parentElement:null),et=v.useRef({activatorEvent:null,active:null,activeNode:de,collisionRect:null,collisions:null,droppableRects:_e,draggableNodes:k,draggingNode:null,draggingNodeRect:null,droppableContainers:L,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),Bt=L.getNodeFor((n=et.current.over)==null?void 0:n.id),rn=bT({measure:W.dragOverlay.measure}),_t=(o=rn.nodeRef.current)!=null?o:de,ar=g?(a=rn.rect)!=null?a:xe:null,_l=!!(rn.nodeRef.current&&rn.rect),Tl=hT(_l?null:xe),$a=y3(_t?St(_t):null),bn=fT(g?Bt??de:null),yn=vT(bn),Hr=w3(b,{transform:{x:E.x-Tl.x,y:E.y-Tl.y,scaleX:1,scaleY:1},activatorEvent:H,active:q,activeNodeRect:xe,containerNodeRect:Le,draggingNodeRect:ar,over:et.current.over,overlayNodeRect:rn.rect,scrollableAncestors:bn,scrollableAncestorRects:yn,windowRect:$a}),wo=Oe?aa(Oe,E):null,on=mT(bn),Wr=Jm(on),kl=Jm(on,[xe]),an=aa(Hr,Wr),sr=ar?I_(ar,Hr):null,Tt=q&&sr?p({active:q,collisionRect:sr,droppableRects:_e,droppableContainers:V,pointerCoordinates:wo}):null,Aa=c3(Tt,"id"),[sn,Ma]=v.useState(null),Hc=_l?Hr:aa(Hr,kl),El=M_(Hc,(s=sn==null?void 0:sn.rect)!=null?s:null,xe),Zr=v.useCallback((Ke,xt)=>{let{sensor:T,options:R}=xt;if(X.current==null)return;const O=k.get(X.current);if(!O)return;const M=Ke.nativeEvent,z=new T({active:X.current,activeNode:O,event:M,options:R,context:et,onStart(G){const Q=X.current;if(Q==null)return;const Y=k.get(Q);if(!Y)return;const{onDragStart:pe}=P.current,Ae={active:{id:Q,data:Y.data,rect:K}};Fn.unstable_batchedUpdates(()=>{pe==null||pe(Ae),C(hr.Initializing),x({type:Xe.DragStart,initialCoordinates:G,active:Q}),h({type:"onDragStart",event:Ae})})},onMove(G){x({type:Xe.DragMove,coordinates:G})},onEnd:oe(Xe.DragEnd),onCancel:oe(Xe.DragCancel)});Fn.unstable_batchedUpdates(()=>{ce(z),D(Ke.nativeEvent)});function oe(G){return async function(){const{active:Y,collisions:pe,over:Ae,scrollAdjustedTranslate:ie}=et.current;let je=null;if(Y&&ie){const{cancelDrop:Me}=P.current;je={activatorEvent:M,active:Y,collisions:pe,delta:ie,over:Ae},G===Xe.DragEnd&&typeof Me=="function"&&await Promise.resolve(Me(je))&&(G=Xe.DragCancel)}X.current=null,Fn.unstable_batchedUpdates(()=>{x({type:G}),C(hr.Uninitialized),Ma(null),ce(null),D(null);const Me=G===Xe.DragEnd?"onDragEnd":"onDragCancel";if(je){const dt=P.current[Me];dt==null||dt(je),h({type:Me,event:je})}})}}},[k]),Nl=v.useCallback((Ke,xt)=>(T,R)=>{const O=T.nativeEvent,M=k.get(R);if(X.current!==null||!M||O.dndKit||O.defaultPrevented)return;const z={active:M};Ke(T,xt.options,z)===!0&&(O.dndKit={capturedBy:xt.sensor},X.current=R,Zr(T,xt))},[k,Zr]),_o=iT(u,Nl);xT(u),en(()=>{xe&&y===hr.Initializing&&C(hr.Initialized)},[xe,y]),v.useEffect(()=>{const{onDragMove:Ke}=P.current,{active:xt,activatorEvent:T,collisions:R,over:O}=et.current;if(!xt||!T)return;const M={active:xt,activatorEvent:T,collisions:R,delta:{x:an.x,y:an.y},over:O};Fn.unstable_batchedUpdates(()=>{Ke==null||Ke(M),h({type:"onDragMove",event:M})})},[an.x,an.y]),v.useEffect(()=>{const{active:Ke,activatorEvent:xt,collisions:T,droppableContainers:R,scrollAdjustedTranslate:O}=et.current;if(!Ke||X.current==null||!xt||!O)return;const{onDragOver:M}=P.current,z=R.get(Aa),oe=z&&z.rect.current?{id:z.id,rect:z.rect.current,data:z.data,disabled:z.disabled}:null,G={active:Ke,activatorEvent:xt,collisions:T,delta:{x:O.x,y:O.y},over:oe};Fn.unstable_batchedUpdates(()=>{Ma(oe),M==null||M(G),h({type:"onDragOver",event:G})})},[Aa]),en(()=>{et.current={activatorEvent:H,active:q,activeNode:de,collisionRect:sr,collisions:Tt,droppableRects:_e,draggableNodes:k,draggingNode:_t,draggingNodeRect:ar,droppableContainers:L,over:sn,scrollableAncestors:bn,scrollAdjustedTranslate:an},K.current={initial:ar,translated:sr}},[q,de,Tt,sr,k,_t,ar,_e,L,sn,bn,an]),oT({...ct,delta:E,draggingRect:sr,pointerCoordinates:wo,scrollableAncestors:bn,scrollableAncestorRects:yn});const Wc=v.useMemo(()=>({active:q,activeNode:de,activeNodeRect:xe,activatorEvent:H,collisions:Tt,containerNodeRect:Le,dragOverlay:rn,draggableNodes:k,droppableContainers:L,droppableRects:_e,over:sn,measureDroppableContainers:ue,scrollableAncestors:bn,scrollableAncestorRects:yn,measuringConfiguration:W,measuringScheduled:Ce,windowRect:$a}),[q,de,xe,H,Tt,Le,rn,k,L,_e,sn,ue,bn,yn,W,Ce,$a]),Rl=v.useMemo(()=>({activatorEvent:H,activators:_o,active:q,activeNodeRect:xe,ariaDescribedById:{draggable:I},dispatch:x,draggableNodes:k,over:sn,measureDroppableContainers:ue}),[H,_o,q,xe,x,I,k,sn,ue]);return J.createElement(s3.Provider,{value:f},J.createElement(fl.Provider,{value:Rl},J.createElement(C3.Provider,{value:Wc},J.createElement(Pc.Provider,{value:El},d)),J.createElement(_T,{disabled:(i==null?void 0:i.restoreFocus)===!1})),J.createElement(N_,{...i,hiddenTextDescribedById:I}));function Zc(){const Ke=(le==null?void 0:le.autoScrollEnabled)===!1,xt=typeof c=="object"?c.enabled===!1:c===!1,T=g&&!Ke&&!xt;return typeof c=="object"?{...c,enabled:T}:{enabled:T}}}),NT=v.createContext(null),e1="button",RT="Droppable";function OT(e){let{id:t,data:n,disabled:o=!1,attributes:a}=e;const s=hl(RT),{activators:l,activatorEvent:i,active:c,activeNodeRect:d,ariaDescribedById:u,draggableNodes:p,over:m}=v.useContext(fl),{role:b=e1,roleDescription:S="draggable",tabIndex:j=0}=a??{},_=(c==null?void 0:c.id)===t,x=v.useContext(_?Pc:NT),[h,f]=nc(),[y,C]=nc(),g=gT(l,t),w=Hs(n);en(()=>(p.set(t,{id:t,key:s,node:h,activatorNode:y,data:w}),()=>{const E=p.get(t);E&&E.key===s&&p.delete(t)}),[p,t]);const k=v.useMemo(()=>({role:b,tabIndex:j,"aria-disabled":o,"aria-pressed":_&&b===e1?!0:void 0,"aria-roledescription":S,"aria-describedby":u.draggable}),[o,b,j,_,S,u.draggable]);return{active:c,activatorEvent:i,activeNodeRect:d,attributes:k,isDragging:_,listeners:o?void 0:g,node:h,over:m,setNodeRef:f,setActivatorNodeRef:C,transform:x}}function _3(){return v.useContext(C3)}const LT="Droppable",DT={timeout:25};function BT(e){let{data:t,disabled:n=!1,id:o,resizeObserverConfig:a}=e;const s=hl(LT),{active:l,dispatch:i,over:c,measureDroppableContainers:d}=v.useContext(fl),u=v.useRef({disabled:n}),p=v.useRef(!1),m=v.useRef(null),b=v.useRef(null),{disabled:S,updateMeasurementsFor:j,timeout:_}={...DT,...a},x=Hs(j??o),h=v.useCallback(()=>{if(!p.current){p.current=!0;return}b.current!=null&&clearTimeout(b.current),b.current=setTimeout(()=>{d(Array.isArray(x.current)?x.current:[x.current]),b.current=null},_)},[_]),f=Mc({callback:h,disabled:S||!l}),y=v.useCallback((k,E)=>{f&&(E&&(f.unobserve(E),p.current=!1),k&&f.observe(k))},[f]),[C,g]=nc(y),w=Hs(t);return v.useEffect(()=>{!f||!C.current||(f.disconnect(),p.current=!1,f.observe(C.current))},[C,f]),en(()=>(i({type:Xe.RegisterDroppable,element:{id:o,key:s,disabled:n,node:C,rect:m,data:w}}),()=>i({type:Xe.UnregisterDroppable,key:s,id:o})),[o]),v.useEffect(()=>{n!==u.current.disabled&&(i({type:Xe.SetDroppableDisabled,id:o,key:s,disabled:n}),u.current.disabled=n)},[o,s,n,i]),{active:l,rect:m,isOver:(c==null?void 0:c.id)===o,node:C,over:c,setNodeRef:g}}function $T(e){let{animation:t,children:n}=e;const[o,a]=v.useState(null),[s,l]=v.useState(null),i=rc(n);return!n&&!o&&i&&a(i),en(()=>{if(!s)return;const c=o==null?void 0:o.key,d=o==null?void 0:o.props.id;if(c==null||d==null){a(null);return}Promise.resolve(t(d,s)).then(()=>{a(null)})},[t,o,s]),J.createElement(J.Fragment,null,n,o?v.cloneElement(o,{ref:l}):null)}const AT={x:0,y:0,scaleX:1,scaleY:1};function MT(e){let{children:t}=e;return J.createElement(fl.Provider,{value:S3},J.createElement(Pc.Provider,{value:AT},t))}const PT={position:"fixed",touchAction:"none"},IT=e=>$c(e)?"transform 250ms ease":void 0,zT=v.forwardRef((e,t)=>{let{as:n,activatorEvent:o,adjustScale:a,children:s,className:l,rect:i,style:c,transform:d,transition:u=IT}=e;if(!i)return null;const p=a?d:{...d,scaleX:1,scaleY:1},m={...PT,width:i.width,height:i.height,top:i.top,left:i.left,transform:Nr.Transform.toString(p),transformOrigin:a&&o?O_(o,i):void 0,transition:typeof u=="function"?u(o):u,...c};return J.createElement(n,{className:l,style:m,ref:t},s)}),FT=e=>t=>{let{active:n,dragOverlay:o}=t;const a={},{styles:s,className:l}=e;if(s!=null&&s.active)for(const[i,c]of Object.entries(s.active))c!==void 0&&(a[i]=n.node.style.getPropertyValue(i),n.node.style.setProperty(i,c));if(s!=null&&s.dragOverlay)for(const[i,c]of Object.entries(s.dragOverlay))c!==void 0&&o.node.style.setProperty(i,c);return l!=null&&l.active&&n.node.classList.add(l.active),l!=null&&l.dragOverlay&&o.node.classList.add(l.dragOverlay),function(){for(const[c,d]of Object.entries(a))n.node.style.setProperty(c,d);l!=null&&l.active&&n.node.classList.remove(l.active)}},UT=e=>{let{transform:{initial:t,final:n}}=e;return[{transform:Nr.Transform.toString(t)},{transform:Nr.Transform.toString(n)}]},VT={duration:250,easing:"ease",keyframes:UT,sideEffects:FT({styles:{active:{opacity:"0"}}})};function HT(e){let{config:t,draggableNodes:n,droppableContainers:o,measuringConfiguration:a}=e;return Bc((s,l)=>{if(t===null)return;const i=n.get(s);if(!i)return;const c=i.node.current;if(!c)return;const d=j3(l);if(!d)return;const{transform:u}=St(l).getComputedStyle(l),p=u3(u);if(!p)return;const m=typeof t=="function"?t:WT(t);return v3(c,a.draggable.measure),m({active:{id:s,data:i.data,node:c,rect:a.draggable.measure(c)},draggableNodes:n,dragOverlay:{node:l,rect:a.dragOverlay.measure(d)},droppableContainers:o,measuringConfiguration:a,transform:p})})}function WT(e){const{duration:t,easing:n,sideEffects:o,keyframes:a}={...VT,...e};return s=>{let{active:l,dragOverlay:i,transform:c,...d}=s;if(!t)return;const u={x:i.rect.left-l.rect.left,y:i.rect.top-l.rect.top},p={scaleX:c.scaleX!==1?l.rect.width*c.scaleX/i.rect.width:1,scaleY:c.scaleY!==1?l.rect.height*c.scaleY/i.rect.height:1},m={x:c.x-u.x,y:c.y-u.y,...p},b=a({...d,active:l,dragOverlay:i,transform:{initial:c,final:m}}),[S]=b,j=b[b.length-1];if(JSON.stringify(S)===JSON.stringify(j))return;const _=o==null?void 0:o({active:l,dragOverlay:i,...d}),x=i.node.animate(b,{duration:t,easing:n,fill:"forwards"});return new Promise(h=>{x.onfinish=()=>{_==null||_(),h()}})}}let t1=0;function ZT(e){return v.useMemo(()=>{if(e!=null)return t1++,t1},[e])}const KT=J.memo(e=>{let{adjustScale:t=!1,children:n,dropAnimation:o,style:a,transition:s,modifiers:l,wrapperElement:i="div",className:c,zIndex:d=999}=e;const{activatorEvent:u,active:p,activeNodeRect:m,containerNodeRect:b,draggableNodes:S,droppableContainers:j,dragOverlay:_,over:x,measuringConfiguration:h,scrollableAncestors:f,scrollableAncestorRects:y,windowRect:C}=_3(),g=v.useContext(Pc),w=ZT(p==null?void 0:p.id),k=w3(l,{activatorEvent:u,active:p,activeNodeRect:m,containerNodeRect:b,draggingNodeRect:_.rect,over:x,overlayNodeRect:_.rect,scrollableAncestors:f,scrollableAncestorRects:y,transform:g,windowRect:C}),E=Mh(m),L=HT({config:o,draggableNodes:S,droppableContainers:j,measuringConfiguration:h}),$=E?_.setRef:void 0;return J.createElement(MT,null,J.createElement($T,{animation:L},p&&w?J.createElement(zT,{key:w,id:p.id,ref:$,as:i,activatorEvent:u,adjustScale:t,className:c,transition:s,rect:E,style:{zIndex:d,...a},transform:k},n):null))});function Ph(e,t,n){const o=e.slice();return o.splice(n<0?o.length+n:n,0,o.splice(t,1)[0]),o}function YT(e,t){return e.reduce((n,o,a)=>{const s=t.get(o);return s&&(n[a]=s),n},Array(e.length))}function ti(e){return e!==null&&e>=0}function GT(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function qT(e){return typeof e=="boolean"?{draggable:e,droppable:e}:e}const ni={scaleX:1,scaleY:1},XT=e=>{var t;let{rects:n,activeNodeRect:o,activeIndex:a,overIndex:s,index:l}=e;const i=(t=n[a])!=null?t:o;if(!i)return null;const c=QT(n,l,a);if(l===a){const d=n[s];return d?{x:a<s?d.left+d.width-(i.left+i.width):d.left-i.left,y:0,...ni}:null}return l>a&&l<=s?{x:-i.width-c,y:0,...ni}:l<a&&l>=s?{x:i.width+c,y:0,...ni}:{x:0,y:0,...ni}};function QT(e,t,n){const o=e[t],a=e[t-1],s=e[t+1];return!o||!a&&!s?0:n<t?a?o.left-(a.left+a.width):s.left-(o.left+o.width):s?s.left-(o.left+o.width):o.left-(a.left+a.width)}const Ih=e=>{let{rects:t,activeIndex:n,overIndex:o,index:a}=e;const s=Ph(t,o,n),l=t[a],i=s[a];return!i||!l?null:{x:i.left-l.left,y:i.top-l.top,scaleX:i.width/l.width,scaleY:i.height/l.height}},ri={scaleX:1,scaleY:1},JT=e=>{var t;let{activeIndex:n,activeNodeRect:o,index:a,rects:s,overIndex:l}=e;const i=(t=s[n])!=null?t:o;if(!i)return null;if(a===n){const d=s[l];return d?{x:0,y:n<l?d.top+d.height-(i.top+i.height):d.top-i.top,...ri}:null}const c=ek(s,a,n);return a>n&&a<=l?{x:0,y:-i.height-c,...ri}:a<n&&a>=l?{x:0,y:i.height+c,...ri}:{x:0,y:0,...ri}};function ek(e,t,n){const o=e[t],a=e[t-1],s=e[t+1];return o?n<t?a?o.top-(a.top+a.height):s?s.top-(o.top+o.height):0:s?s.top-(o.top+o.height):a?o.top-(a.top+a.height):0:0}const T3="Sortable",k3=J.createContext({activeIndex:-1,containerId:T3,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:Ih,disabled:{draggable:!1,droppable:!1}});function tk(e){let{children:t,id:n,items:o,strategy:a=Ih,disabled:s=!1}=e;const{active:l,dragOverlay:i,droppableRects:c,over:d,measureDroppableContainers:u}=_3(),p=hl(T3,n),m=i.rect!==null,b=v.useMemo(()=>o.map(g=>typeof g=="object"&&"id"in g?g.id:g),[o]),S=l!=null,j=l?b.indexOf(l.id):-1,_=d?b.indexOf(d.id):-1,x=v.useRef(b),h=!GT(b,x.current),f=_!==-1&&j===-1||h,y=qT(s);en(()=>{h&&S&&u(b)},[h,b,S,u]),v.useEffect(()=>{x.current=b},[b]);const C=v.useMemo(()=>({activeIndex:j,containerId:p,disabled:y,disableTransforms:f,items:b,overIndex:_,useDragOverlay:m,sortedRects:YT(b,c),strategy:a}),[j,p,y.draggable,y.droppable,f,b,_,c,m,a]);return J.createElement(k3.Provider,{value:C},t)}const nk=e=>{let{id:t,items:n,activeIndex:o,overIndex:a}=e;return Ph(n,o,a).indexOf(t)},rk=e=>{let{containerId:t,isSorting:n,wasDragging:o,index:a,items:s,newIndex:l,previousItems:i,previousContainerId:c,transition:d}=e;return!d||!o||i!==s&&a===l?!1:n?!0:l!==a&&t===c},ok={duration:200,easing:"ease"},E3="transform",ak=Nr.Transition.toString({property:E3,duration:0,easing:"linear"}),sk={roleDescription:"sortable"};function lk(e){let{disabled:t,index:n,node:o,rect:a}=e;const[s,l]=v.useState(null),i=v.useRef(n);return en(()=>{if(!t&&n!==i.current&&o.current){const c=a.current;if(c){const d=Ta(o.current,{ignoreTransform:!0}),u={x:c.left-d.left,y:c.top-d.top,scaleX:c.width/d.width,scaleY:c.height/d.height};(u.x||u.y)&&l(u)}}n!==i.current&&(i.current=n)},[t,n,o,a]),v.useEffect(()=>{s&&l(null)},[s]),s}function ik(e){let{animateLayoutChanges:t=rk,attributes:n,disabled:o,data:a,getNewIndex:s=nk,id:l,strategy:i,resizeObserverConfig:c,transition:d=ok}=e;const{items:u,containerId:p,activeIndex:m,disabled:b,disableTransforms:S,sortedRects:j,overIndex:_,useDragOverlay:x,strategy:h}=v.useContext(k3),f=ck(o,b),y=u.indexOf(l),C=v.useMemo(()=>({sortable:{containerId:p,index:y,items:u},...a}),[p,a,y,u]),g=v.useMemo(()=>u.slice(u.indexOf(l)),[u,l]),{rect:w,node:k,isOver:E,setNodeRef:L}=BT({id:l,data:C,disabled:f.droppable,resizeObserverConfig:{updateMeasurementsFor:g,...c}}),{active:$,activatorEvent:K,activeNodeRect:q,attributes:X,setNodeRef:le,listeners:ce,isDragging:H,over:D,setActivatorNodeRef:P,transform:I}=OT({id:l,data:C,attributes:{...sk,...n},disabled:f.draggable}),V=x_(L,le),W=!!$,_e=W&&!S&&ti(m)&&ti(_),ue=!x&&H,Ce=ue&&_e?I:null,Oe=_e?Ce??(i??h)({rects:j,activeNodeRect:q,activeIndex:m,overIndex:_,index:y}):null,ct=ti(m)&&ti(_)?s({id:l,items:u,activeIndex:m,overIndex:_}):y,wt=$==null?void 0:$.id,xe=v.useRef({activeId:wt,items:u,newIndex:ct,containerId:p}),Le=u!==xe.current.items,et=t({active:$,containerId:p,isDragging:H,isSorting:W,id:l,index:y,items:u,newIndex:xe.current.newIndex,previousItems:xe.current.items,previousContainerId:xe.current.containerId,transition:d,wasDragging:xe.current.activeId!=null}),Bt=lk({disabled:!et,index:y,node:k,rect:w});return v.useEffect(()=>{W&&xe.current.newIndex!==ct&&(xe.current.newIndex=ct),p!==xe.current.containerId&&(xe.current.containerId=p),u!==xe.current.items&&(xe.current.items=u)},[W,ct,p,u]),v.useEffect(()=>{if(wt===xe.current.activeId)return;if(wt&&!xe.current.activeId){xe.current.activeId=wt;return}const _t=setTimeout(()=>{xe.current.activeId=wt},50);return()=>clearTimeout(_t)},[wt]),{active:$,activeIndex:m,attributes:X,data:C,rect:w,index:y,newIndex:ct,items:u,isOver:E,isSorting:W,isDragging:H,listeners:ce,node:k,overIndex:_,over:D,setNodeRef:V,setActivatorNodeRef:P,setDroppableNodeRef:L,setDraggableNodeRef:le,transform:Bt??Oe,transition:rn()};function rn(){if(Bt||Le&&xe.current.newIndex===y)return ak;if(!(ue&&!$c(K)||!d)&&(W||et))return Nr.Transition.toString({...d,property:E3})}}function ck(e,t){var n,o;return typeof e=="boolean"?{draggable:e,droppable:!1}:{draggable:(n=e==null?void 0:e.draggable)!=null?n:t.draggable,droppable:(o=e==null?void 0:e.droppable)!=null?o:t.droppable}}function lc(e){if(!e)return!1;const t=e.data.current;return!!(t&&"sortable"in t&&typeof t.sortable=="object"&&"containerId"in t.sortable&&"items"in t.sortable&&"index"in t.sortable)}const dk=[ge.Down,ge.Right,ge.Up,ge.Left],uk=(e,t)=>{let{context:{active:n,collisionRect:o,droppableRects:a,droppableContainers:s,over:l,scrollableAncestors:i}}=t;if(dk.includes(e.code)){if(e.preventDefault(),!n||!o)return;const c=[];s.getEnabled().forEach(p=>{if(!p||p!=null&&p.disabled)return;const m=a.get(p.id);if(m)switch(e.code){case ge.Down:o.top<m.top&&c.push(p);break;case ge.Up:o.top>m.top&&c.push(p);break;case ge.Left:o.left>m.left&&c.push(p);break;case ge.Right:o.left<m.left&&c.push(p);break}});const d=B_({active:n,collisionRect:o,droppableRects:a,droppableContainers:c,pointerCoordinates:null});let u=c3(d,"id");if(u===(l==null?void 0:l.id)&&d.length>1&&(u=d[1].id),u!=null){const p=s.get(n.id),m=s.get(u),b=m?a.get(m.id):null,S=m==null?void 0:m.node.current;if(S&&b&&p&&m){const _=Ac(S).some((g,w)=>i[w]!==g),x=N3(p,m),h=pk(p,m),f=_||!x?{x:0,y:0}:{x:h?o.width-b.width:0,y:h?o.height-b.height:0},y={x:b.left,y:b.top};return f.x&&f.y?y:Ws(y,f)}}}};function N3(e,t){return!lc(e)||!lc(t)?!1:e.data.current.sortable.containerId===t.data.current.sortable.containerId}function pk(e,t){return!lc(e)||!lc(t)||!N3(e,t)?!1:e.data.current.sortable.index<t.data.current.sortable.index}const hk=e=>{let{transform:t}=e;return{...t,y:0}};function R3(e,t,n){const o={...e};return t.top+e.y<=n.top?o.y=n.top-t.top:t.bottom+e.y>=n.top+n.height&&(o.y=n.top+n.height-t.bottom),t.left+e.x<=n.left?o.x=n.left-t.left:t.right+e.x>=n.left+n.width&&(o.x=n.left+n.width-t.right),o}const zh=e=>{let{containerNodeRect:t,draggingNodeRect:n,transform:o}=e;return!n||!t?o:R3(o,n,t)},fk=e=>{let{transform:t}=e;return{...t,x:0}},O3=e=>{let{transform:t,draggingNodeRect:n,windowRect:o}=e;return!n||!o?t:R3(t,n,o)},Fh=({items:e,setOrder:t,List:n=({children:c})=>c,Item:o,modifiers:a=[zh],strategy:s=Ih,Overlay:l,...i})=>{const[c,d]=v.useState(null),u=R_(Vm(Ah),Vm(Bh,{coordinateGetter:uk}));function p(S){const j=e.findIndex(_=>_.id===S.active.id);d(j)}function m(){d(null)}function b(S){const{active:j,over:_}=S;if(j.id!==_.id){const x=e.findIndex(f=>f.id===j.id),h=e.findIndex(f=>f.id===_.id);e[x].moved=!0,t(Ph(e,x,h))}d(null)}return r.jsxs(ET,{sensors:u,collisionDetection:D_,onDragStart:p,onDragCancel:m,onDragEnd:b,modifiers:a,children:[r.jsx(tk,{items:e,strategy:s,children:r.jsx(n,{...i,children:e.map(S=>r.jsx(mk,{id:S.id,item:S,Item:o,...i},S.id))})}),l&&c&&r.jsx(KT,{children:r.jsx(l,{item:c,...i})})]})},mk=({id:e,item:t,Item:n,...o})=>{const{attributes:a,listeners:s,setNodeRef:l,transform:i,transition:c}=ik({id:e}),d={transform:Nr.Translate.toString(i),transition:c};return r.jsx(n,{item:t,setNodeRef:l,style:d,listeners:s,...a,...o})},L3=({...e})=>r.jsx(Fh,{modifiers:[fk,O3,zh],strategy:JT,...e}),xk=({columns:e,visibleColumns:t,toggleVisibleColumn:n,columnOrder:o,changeColumnOrder:a})=>{const s=Vs(t),l=o.map(c=>jh(e[c],"id label")),i=c=>{a(c.map(d=>d.id))};return r.jsxs(gn,{right:!0,iconRight:"square vertical-left=2.5 vertical-right=2.5",text:"Columns",size:"small",closeOnBlur:!1,children:[r.jsx("div",{className:"sortable list vertical",children:r.jsx(L3,{items:l,Item:h_,setOrder:i,isVisible:s,toggleVisibleColumn:n})}),r.jsxs("div",{className:"smaller mar-b-2",children:["Click checkbox to show/hide.",r.jsx("br",{}),"Drag handle to order."]}),r.jsx(m_,{})]})},gk=mt.Consumer(xk),vk=({headerClass:e,Summary:t=Ww,PageSize:n=a_,Columns:o=gk})=>r.jsx("header",{className:e,children:r.jsxs("div",{className:"flex space middle",children:[r.jsx("div",{children:r.jsx(t,{})}),r.jsxs("div",{className:"flex gap-2",children:[r.jsx(o,{}),r.jsx(n,{})]})]})}),bk=mt.Consumer(vk),n1=({value:e})=>Se(e)?e:"",yk=({value:e})=>Se(e)?ss(e):"",r1=({value:e})=>Se(e)?HS(e):"",jk=({value:e})=>Se(e)?WS(e):"",Sk=({value:e})=>Se(e)?e?"true":"false":"",Ck={default:n1,text:n1,number:yk,price:r1,currency:r1,boolean:Sk,title:jk},wk=({row:e,column:t,name:n,value:o,cellClass:a,sortColumn:s,sortingClass:l="sorting",displayTypes:i=Ck})=>{const c=t.type||"text",d=t.display||i[c]||i.default,u=s===n,p=ve(a,t.className,u?l:null,t.right?"text-right":null);return r.jsx("td",{className:p,children:r.jsx(d,{row:e,column:t,value:o,name:n,field:n})})},_k=mt.Consumer(wk),Tk=({row:e,columns:t,rowClass:n,onRowClick:o=Be,visibleColumns:a,Cell:s=_k})=>r.jsx("tr",{className:n,onClick:()=>o(e),children:a.map(l=>{const i=t[l],c=i.field??l,d=e[c];return r.jsx(s,{row:e,name:l,field:c,column:i,value:d},l)})}),kk=mt.Consumer(Tk),Ek=({page:e,Row:t=kk})=>r.jsx("tbody",{children:e.rows.map((n,o)=>r.jsx(t,{row:n},n.id??o))}),Nk=mt.Consumer(Ek),Rk=({name:e,column:t,sortColumn:n,sortReverse:o,toggleSortColumn:a,sortUpIcon:s="arrow-up",sortDownIcon:l="arrow-down",unsortedIcon:i="arrows",sortIconClass:c="sort-icon",sortingClass:d="sorting",showFilters:u,toggleFilters:p,filters:m,filteringClass:b="filtering",filterIcon:S="filter",filteringIcon:j="filter-solid",filterIconClass:_="filter-icon",headingClass:x="heading",rightClass:h="right"})=>{const f=e===n,y=f&&o,C=Se(m[e]);return r.jsx("th",{className:ve(x,t.right?h:null,u?b:null,C?b:null,f?d:null),onClick:()=>a(e),children:r.jsxs("div",{className:"flex space middle",children:[r.jsx("span",{className:"label",children:t.label}),r.jsxs("div",{className:"flex gap-1",children:[r.jsx(ne,{className:_,name:C?j:S,onClick:p}),r.jsx(ne,{className:c,name:f?y?s:l:i})]})]})})},Ok=mt.Consumer(Rk),Lk=({columns:e,headingsClass:t="headings",visibleColumns:n,Heading:o=Ok})=>r.jsx("thead",{children:r.jsx("tr",{className:t,children:n.map(a=>r.jsx(o,{name:a,column:e[a]},a))})}),Dk=mt.Consumer(Lk),Bk=({name:e,filters:t,setFilter:n,filterClass:o="filter",filteringClass:a="filtering",clearFilterIcon:s="cross"})=>r.jsx("th",{className:ve(o,Se(t[e])?a:null),children:r.jsxs("div",{className:"flex space middle gap-1",children:[r.jsx("input",{type:"text",value:t[e]??"",onChange:l=>n(e,l.target.value)}),r.jsx(ne,{name:s,onClick:()=>n(e,null)})]})}),$k=mt.Consumer(Bk),Ak=({columns:e,filtersClass:t="filters",visibleColumns:n,Filter:o=$k})=>r.jsx("thead",{children:r.jsx("tr",{className:t,children:n.map(a=>r.jsx(o,{name:a,column:e[a]},a))})}),Mk=mt.Consumer(Ak),Pk=({tableClass:e="celled striped table",selectableClass:t="selectable",scrollX:n,onRowClick:o,showFilters:a,Headings:s=Dk,Filters:l=Mk,Rows:i=Nk})=>r.jsxs("table",{className:ve(e,n?"nowrap":"wide",{[t]:o}),children:[r.jsx(s,{}),a&&r.jsx(l,{}),r.jsx(i,{})]}),Ik=mt.Consumer(Pk),zk=({scrollX:e,Table:t=Ik})=>r.jsx("div",{className:e?"scroll-x":"",children:r.jsx(t,{})}),Fk=mt.Consumer(zk),Uk=({page:e=0,pages:t,buttonClass:n="outline",pageClass:o=n,currentPageClass:a="solid",render:s,...l})=>{const d=t-1,u=t,p=e+1,m=e>0?e-1:null,b=Se(m)?m+1:null,S=e<d?e+1:null,j=Se(S)?S+1:null;return s({page:e,pageNo:p,firstPage:0,firstPageNo:1,lastPage:d,lastPageNo:u,pages:t,prevPage:m,prevPageNo:b,nextPage:S,nextPageNo:j,buttonClass:n,pageClass:o,currentPageClass:a,...l})},zr=Pr(Uk),Vk=zr.Use,Hk=({prevPage:e,setPage:t,buttonClass:n,prevClass:o=n,prevIcon:a="arrow-left"})=>r.jsx(B,{className:o,icon:a,onClick:()=>t(e),disabled:Ec(e)}),Wk=zr.Consumer(Hk),Zk=({nextPage:e,setPage:t,buttonClass:n,nextClass:o=n,nextIcon:a="arrow-right"})=>r.jsx(B,{className:o,icon:a,onClick:()=>t(e),disabled:!e}),Kk=zr.Consumer(Zk),Yk=({pageNo:e,text:t=e,buttonClass:n,className:o=n,onClick:a})=>r.jsx(B,{text:t,className:o,onClick:a}),Gk=zr.Consumer(Yk),qk=r.jsx(r.Fragment,{children:"…"}),Xk=({pageSeparatorClass:e="separator",pageSeparator:t=qk})=>r.jsx("div",{className:e,children:t}),Qk=zr.Consumer(Xk),Jk=({page:e,pageNo:t,firstPage:n,firstPageNo:o,prevPage:a,prevPageNo:s,nextPage:l,nextPageNo:i,lastPage:c,lastPageNo:d,setPage:u,pagesClass:p="pages",buttonClass:m,pageClass:b=m,currentPageClass:S="brand",showFirstLast:j=!0,Separator:_=Qk,Page:x=Gk})=>r.jsxs("div",{className:p,children:[j&&a>n&&r.jsxs(r.Fragment,{children:[r.jsx(x,{page:n,pageNo:o,className:b,onClick:()=>u(n)}),a>n+1&&r.jsx(_,{})]}),Se(a)&&r.jsx(x,{page:a,pageNo:s,className:b,onClick:()=>u(a)}),r.jsx(x,{page:e,pageNo:t,className:S,current:!0,disabled:!0}),Se(l)&&r.jsx(x,{page:l,pageNo:i,className:b,onClick:()=>u(l)}),j&&l&&l<c&&r.jsxs(r.Fragment,{children:[l<c-1&&r.jsx(_,{}),r.jsx(x,{page:c,pageNo:d,className:b,onClick:()=>u(c)})]})]}),eE=zr.Consumer(Jk),tE=({className:e="pager",size:t,color:n,Previous:o=Wk,Next:a=Kk,Pages:s=eE})=>r.jsxs("div",{className:ve(e,t,n),children:[r.jsx(o,{}),r.jsx(s,{}),r.jsx(a,{})]}),nE=zr.Consumer(tE),rE=({Content:e=nE,...t})=>r.jsx(zr.Provider,{...t,children:r.jsx(e,{})}),Xt=ee(rE,"Pager"),oE=({footerClass:e,pager:t={},page:n,setPageNo:o})=>r.jsx("footer",{className:e,children:r.jsx(Xt,{page:n.page,pages:n.pages,setPage:a=>o(a+1),...t})}),aE=mt.Consumer(oE),sE=({color:e,className:t="datatable",Header:n=bk,Body:o=Fk,Footer:a=aE})=>r.jsxs("section",{className:ve(t,e),children:[r.jsx(n,{}),r.jsx(o,{}),r.jsx(a,{})]}),lE=mt.Consumer(sE),iE=({Content:e=lE,...t})=>r.jsx(mt.Provider,{...t,children:r.jsx(e,{})}),Vt=ee(iE,"Datatable"),cE=({summary:e,summaryClass:t})=>r.jsx("summary",{className:t,children:e}),dE=({content:e,children:t,contentClass:n})=>r.jsx("div",{className:n,children:e||t}),uE=({className:e,size:t,color:n,lined:o,border:a,radius:s,shaded:l,shadow:i,open:c,Summary:d=cE,Content:u=dE,...p})=>r.jsxs("details",{className:ve(e,n,yo(a),Sa(s),ja(i),{size:t,color:n,lined:o,shaded:l}),open:c,children:[r.jsx(d,{...p}),r.jsx(u,{...p})]}),Je=ee(uE,"Details");var Et;let pE=(Et=class extends tc{constructor(t){super(t),this.state={...this.state,...this.valueState(),closeOnBlur:!this.props.search},this.debug(`search: ${this.props.search}  closeOnBlur: ${this.state.closeOnBlur}`)}componentDidUpdate(t){this.props.value!==t.value&&(this.debug(`value has changed from ${t.value} to ${this.props.value}`),this.setState(this.valueState()))}initialCursor(){return this.state.cursor}valueState(t=this.props.value){const n=this.props.options,[o,a]=this.props.findOption(n,t),s=this.inputValue(o);return{value:o,cursor:a,input:s,options:n}}inputValue(t=this.props.value){return Se(t)?this.props.displayValue(t):null}selectState(t){const n=this.inputValue(t);return{value:t,input:n,selected:t}}closeState(){return{...this.constructor.inactiveState,options:this.props.options}}onKeyDown(t){switch(this.debug(`onKeyDown(${t.key})`),t.key){case Eh:this.state.isOpen?this.setCursor(this.cursorNextIndex()):this.open(this.initialCursor()??this.cursorFirstIndex());break;case Nh:this.state.isOpen?this.setCursor(this.cursorPrevIndex()):this.open(this.initialCursor()??this.cursorLastIndex());break;case Oc:this.state.isOpen?this.selectCursor():this.open(this.initialCursor()??this.cursorFirstIndex());break;case Lc:this.close();break;case hw:this.debug("backspace"),this.searchBackspace();break;case pw:return;case Rh:if(this.state.isOpen){if(!(this.state.searchInput??wi).length)break}else{this.debug("space to open"),this.open(this.cursorFirstIndex());break}default:if(this.debug("default keypress"),t.altKey||t.ctrlKey||t.metaKey)return;if(t.key.length===1){this.debug(`typed key ${t.key}`),this.searchKey(t.key),this.state.open||this.open(),this._searchRef&&this._searchRef.focus();break}this.debug(`ignored key ${t.key}`);return}t.preventDefault()}searchRef(t){this.debug("searchRef()"),this._searchRef=t}focusSearch(t){this.debug("focusSearch()"),t==null||t.stopPropagation(),this.setState({searchFocus:!0})}blurSearch(){this.debug("blurSearch()"),this.setState({searchFocus:!1}),this.closeSoon()}setSearch(t){this.setState({searchInput:t},()=>this.searchOptions())}searchKey(t){this.setSearch((this.state.searchInput??wi)+t)}searchBackspace(){this.setSearch(Se(this.state.searchInput)&&this.state.searchInput.length>1?this.state.searchInput.slice(0,-1):void 0)}clearSearch(t){t==null||t.preventDefault(),t==null||t.stopPropagation(),this._searchRef&&(this.debug("re-focussing search input"),this._searchRef.focus()),this.setSearch(void 0)}searchOptions(){this.debug("searchOptions()");const{options:t,searchOptions:n}=this.props;this.setState(o=>({options:Se(o.searchInput)?n(o.searchInput,this.props.options.filter(this.props.validOption)):t,cursor:0}))}closeable(t){return this.debug(`closeable()  force:${t}  hasHover:${this.state.hasHover}  searchFocus:${this.state.searchFocus}`),t||!(this.state.hasHover||this.state.searchFocus)}menuOptions(){return this.state.options}},be(Et,"debug",!1),be(Et,"debugPrefix","Select > "),be(Et,"debugColor","MediumVioletRed"),be(Et,"defaultProps",{...Et.defaultProps,options:[],search:!1,findOption:sw,validOption:il,searchOptions:lw,displayValue:ec("displayValue"),displayOption:ec("displayOption")}),be(Et,"inactiveState",{isOpen:!1,selected:void 0,searchInput:void 0}),be(Et,"initialState",{value:wi,cursor:void 0,...Et.inactiveState}),be(Et,"initialProps",{}),be(Et,"actions",["onFocus","onBlur","onClick","onKeyDown","open","close","setCursor","selectCursor","selectOption","menuRef","activeRef","searchRef","focusSearch","blurSearch","setSearch","clearSearch"]),Et);const So=Pr(pE),hE=({input:e,onFocus:t,onBlur:n,onClick:o,placeholder:a="Select",placeholderClass:s="placeholder",inputsClass:l="inputs",inputClass:i="input",suffixClass:c="suffix",disabled:d})=>r.jsxs("div",{className:l,onClick:o,children:[r.jsxs("div",{onFocus:t,onBlur:n,disabled:d,className:i,tabIndex:0,children:[Se(e)&&e.length?r.jsx(r.Fragment,{children:e}):r.jsx("span",{className:s,children:a})," "]}),r.jsx("div",{className:c,children:r.jsx(ne,{name:"angle-down"})})]}),fE=So.Consumer(hE),mE=({option:e,active:t,activeRef:n,selected:o,onClick:a,onMouseEnter:s,validOption:l,displayOption:i,optionClass:c="item no-hover",activeClass:d="active",selectedClass:u="selected",disabledClass:p="disabled"})=>r.jsx("div",{className:ve(c,e.className,t?d:null,o?u:null,l(e)?null:p),onMouseEnter:s,onClick:a,ref:t?n:null,"aria-disabled":e.disabled,children:i(e)}),xE=So.Consumer(mE),gE=({noOptionsClass:e="none",noOptions:t="No options"})=>r.jsx("div",{className:e,children:t}),vE=So.Consumer(gE),bE=({options:e,menuRef:t,menuClass:n="menu border bdr-1",cursor:o,selected:a,selectOption:s,setCursor:l,Option:i=xE,NoOptions:c=vE})=>r.jsx("div",{className:n,ref:t,children:ya(e)&&e.length?e.map((d,u)=>r.jsx(i,{option:d,active:Se(o)&&e[o]===d,selected:a===d,onClick:()=>s(d),onMouseEnter:()=>l(u)},d.id??d.value??u)):r.jsx(c,{})}),yE=So.Consumer(bE),jE=({searchInput:e,focusSearch:t,blurSearch:n,searchRef:o,setSearch:a,clearSearch:s,searchPlaceholder:l="Search",searchFieldClass:i="search field",searchInputsClass:c="inputs",searchPrefixClass:d="shaded lined prefix",searchSuffixClass:u="shaded lined suffix",searchClearClass:p="clear",inputClass:m,searchIcon:b="search",clearSearchIcon:S="cross"})=>r.jsx("div",{className:i,children:r.jsxs("div",{className:c,children:[r.jsx("div",{className:d,children:r.jsx(ne,{name:b})}),r.jsx("input",{ref:o,className:m,type:"text",placeholder:l,value:e??"",onClick:j=>j.stopPropagation(),onChange:j=>a(j.target.value),onFocus:t,onBlur:n,autoComplete:"chrome-is-broken",tabIndex:"0"}),r.jsx("div",{className:ve(u,e?p:null),onClick:s,children:r.jsx(ne,{name:S})})]})}),SE=So.Consumer(jE),CE=({onKeyDown:e,isOpen:t,search:n,selectClass:o="select",openClass:a="open",closedClass:s="closed",Input:l=fE,Search:i=SE,Menu:c=yE})=>r.jsxs("div",{className:ve(o,t?a:s),onKeyDown:e,children:[r.jsx(l,{}),!!t&&!!n&&r.jsx(i,{}),!!t&&r.jsx(c,{})]}),wE=So.Consumer(CE),_E=({Content:e=wE,...t})=>r.jsx(So.Provider,{...t,children:r.jsx(e,{})}),nn=ee(_E,"Select");var TE=Object.defineProperty,kE=(e,t,n)=>t in e?TE(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,kn=(e,t,n)=>(kE(e,typeof t!="symbol"?t+"":t,n),n),EE=Object.defineProperty,NE=(e,t,n)=>t in e?EE(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,$d=(e,t,n)=>(NE(e,typeof t!="symbol"?t+"":t,n),n);function RE(e={},t={},n={}){return Object.entries(t).reduce((o,[a,s])=>{const l=n[s];return l!==null&&typeof l<"u"&&(o[a]=l),o},{...e})}function OE(e,t=[]){return(typeof t=="string"?t.split(/,\s*|\s+/):t).reduce((n,o)=>{const a=e[o]||$E(`Cannot expose non-existent action method: ${o}`);return n[o]=a.bind(e),n},{})}function LE(e,t){const n=e.debug??t.debug,o=o1(e.debugPrefix??t.debugPrefix,e),a=o1(e.debugColor??t.debugColor,e);return n?o?(s,...l)=>console.log(`%c${o}%c${s}`,`color: ${a}`,"color:black",...l):console.log.bind(console):()=>{}}function DE(e){return Array.isArray(e)}function D3(e){return typeof e=="function"}function o1(e,t){return D3(e)?e(t):e}function BE(e){return DE(e)?e:[e]}function $E(...e){throw new Error(e.join(""))}const B3=(e,t={})=>{const n=J.createContext(t);return{Context:n,Provider:o=>r.jsx(e,{...o,render:a=>r.jsx(n.Provider,{value:a,children:o.children})}),Consumer:o=>a=>r.jsx(n.Consumer,{children:s=>r.jsx(o,{...s,...a})}),Children:({children:o})=>BE(o).map((a,s)=>D3(a)?r.jsx(n.Consumer,{children:a},s):a),Use:()=>J.useContext(n)}};let Ti=class extends J.Component{constructor(e){super(e);const t=this.constructor;this.debug=LE(e,t),this.state=RE(t.initialState,t.initialProps,e),this.actions=OE(this,t.actions)}getContext(){return{...this.props,...this.state,...this.actions}}getRenderProps(){return this.getContext()}render(){return this.props.render(this.getRenderProps())}};$d(Ti,"initialState",{}),$d(Ti,"initialProps",{}),$d(Ti,"actions",[]);function $3(e){return typeof e=="boolean"}function ka(e){return typeof e=="string"}function Ks(e){return Array.isArray(e)}function Ic(e){return typeof e=="function"}function AE(e){return e instanceof RegExp}function Ea(e){return typeof e=="object"&&!Ks(e)&&!A3(e)}function ME(e){return e===void 0}function A3(e){return e===null}function At(e){return!(ME(e)||A3(e))}function PE(e){return!At(e)}function IE(...e){throw new Error(e.join(""))}const a1=(e,...t)=>Ic(e)?e(...t):e;function sa(){}function zE(){return Intl.DateTimeFormat().resolvedOptions().locale}zE();function M3(e,t=/,\s*|\s+/){return PE(e)?[]:ka(e)?e.length?e.split(t):[]:Ks(e)?e:[e]}function P3(e,t=!0,n={}){return Ea(e)?e:M3(e).reduce((o,a)=>(o[a]=Ic(t)?t(a):t,o),n)}function FE(e){if(Ic(e))return e;if(AE(e))return t=>e.test(t);if(Ea(e))return t=>!!e[t];if(Ks(e)||ka(e)){const t=P3(e);return n=>!!t[n]}IE("Invalid selector() specification: "+e)}const UE=(e,t,n={})=>{let o={},a={delete:!1,...n};const s=FE(t);return Object.keys(e).map(l=>{if(s(l)){let i=e[l];a.delete&&delete e[l],a.key&&(l=a.key(l)),a.value&&(i=a.value(i)),o[l]=i}}),o},VE="",HE="blur",ml="changed",WE="disabled",zc="focus",ZE="fulfilled",xl="invalid",I3="Optional",KE="radio",z3="Required",YE="A value is required",s1="reset",gl="submitted",Na="submitting",Uh="text",GE="unvalidated",vl="valid",Fr="validating",qE=["id","name","type","value","checked","disabled","placeholder","autoComplete","onFocus","onBlur","size","rows","min","max","step","minLength","maxLength","pattern","list"],XE=["id","name","action","method","encType"];let F3=class extends Ti{constructor(e){super(e),this.newStatus=this.constructor.newStatus(e),this.state={status:this.newStatus(s1)}}setStatus(e,t={},n=sa){this.mounted&&this.setState(o=>({...Ic(t)?t(o):t,status:this.newStatus(e,o.status)}),n)}setResetState(e,t){this.setStatus(s1,e,t)}setChangedState(e,t){this.setStatus(ml,e,t)}setValidatingState(e,t){this.setStatus(Fr,e,t)}setInvalidState(e,t){this.setStatus(xl,e,t)}setValidState(e,t){this.setStatus(vl,e,t)}setUnvalidatedState(e,t){this.setStatus(GE,e,t)}};function U3(e,t){return t.reduce((n,o)=>(At(e[o])&&(n[o]=e[o]),n),{})}const Fc=e=>U3(e,qE),QE=e=>U3(e,XE),V3=e=>e.filter(At).join(" "),JE=e=>Object.entries(e).filter(([,t])=>t).map(([t])=>t),Rn=(...e)=>V3(e.flatMap(t=>Ea(t)?JE(t):t)),Uc=e=>Rn(e.inputClass,e.inline&&"inline"),qo=(e,t,n=t)=>(e==null?void 0:e[t])||n,eN=(e,t={},...n)=>V3(Object.entries(e).reduce((o,[a,s])=>(s&&o.push(t[a]||a),o),[...n])),tN=e=>{const{status:t,className:n,classes:o,required:a,showRequired:s,showOptional:l}=e;return eN(t,o,qo(o,"field"),n,s&&a?"required":null,l&&!a?"optional":null)},H3=(e,...t)=>{const{gap:n,space:o,stack:a,className:s}=e;return s||(o?Rn("flex","space",...t):Rn("flex",n?`gap-v-none gap-h-${n}`:null,a?`stack-${a}`:null,...t))},nN=(e,...t)=>{const{grid:n,gap:o,stack:a,className:s}=e;return s||(n?Rn(`grid-${n}`,o?`gap-v-none gap-h-${o}`:null,a?`stack-${a}`:null,...t):Rn(...t))},rN={boolean:!0,string:!0,number:!0},W3=e=>rN[typeof e]?{value:e,text:e}:e,ic=(...e)=>function(...t){for(let n of e.filter(Boolean))n(...t)};function l1(e){if($3(e))return[1,!1];if(At(e)){const t=(e==null?void 0:e.toString().length)??0;return[t,t===0]}return[0,!0]}const oN=(e,t)=>ka(e)?{[t]:e}:e,aN={submittingClass:Na,validatingClass:Fr,resetOnSuccess:!0,focusInvalidField:!0,enctype:"application/x-www-form-urlencoded",method:"post",errorsTitle:e=>`Form Error${e>1?"s":""}`,errorsPrompt:e=>`Please correct ${e===1?"this problem":"these problems"} and re-submit:`},i1={validateOnChange:!1,validateOnBlur:!1,validateOnInvalid:!0,showRequired:!1,showOptional:!1,validMessage:null,minValidateLength:1,requiredMessage:YE,requiredLabel:z3,optionalLabel:I3},sN=P3(["showRequired","requiredLabel","showOptional","optionalLabel","validateOnChange","validateOnBlur","validateOnInvalid","minValidateLength","validMessage","requiredMessage","classes","wide"]),fa={[vl]:!1,[xl]:!1},lN={...fa,[ml]:!0},iN={...fa,[Fr]:!0},cN={[vl]:!1,[xl]:!0,[Fr]:!1},dN={[vl]:!0,[xl]:!1,[Fr]:!1},uN={[zc]:!1},pN={[zc]:!0},hN={[Na]:!0,[gl]:!1},fN={[Na]:!1,[gl]:!0},Z3={changed:lN,validating:iN,invalid:cN,valid:dN},K3=e=>(t,n={})=>({...n,...e[t]||{[t]:!0}}),mN=()=>{const e={...fa,[ml]:!1,[Fr]:!1,[gl]:!1,[Na]:!1};return K3({...Z3,reset:e,submitting:hN,submitted:fN,unvalidated:fa})},xN=(e={})=>{const t={...fa,[ml]:!1,[Fr]:!1,[zc]:!1,[WE]:e.disabled||!1};return K3({...Z3,reset:t,focus:pN,blur:uN,unvalidated:fa})},gN=({status:e,any:t=!1,...n})=>{const o=[ml,Fr,vl,xl,Na,gl].filter(a=>At(n[a])).map(a=>e[a]);return t?o.some(Boolean):o.every(Boolean)};class Bo extends F3{constructor(t){super(t),this.fields={};const{hidden:n={}}=t,o={...n},a={...aN,...this.props};this.state={...a,...this.state,initialValues:o,values:{...o},errors:[],error:null},this.props.onLoad&&this.props.onLoad(this)}componentDidMount(){this.debug("componentDidMount()"),this.mounted=!0}componentWillUnmount(){this.debug("componentWillUnmount()"),this.mounted=!1}fieldSpec(t,n){var o,a;const s=((o=this.props.fields)==null?void 0:o[t])??{},l=n.value??((a=this.props.values)==null?void 0:a[t]);return{name:t,...UE(this.props,sN),...s,...n,value:l}}attachField(t,n){this.debug(`attaching ${t} field`),this.fields[t]=n,this.setState(o=>({values:{...o.values,[t]:n.state.value}}))}detachField(t){this.debug(`detaching ${t} field`),delete this.fields[t]}setSubmittingState(t,n){this.setStatus(Na,t,n)}setSubmittedState(t,n){this.setStatus(gl,t,n)}setFocus(t,n){var o;n==null||n.preventDefault(),(o=this.fields[t])==null||o.setFocus()}reset(t){this.mounted&&(this.debug("reset()"),t==null||t.preventDefault(),this.resetFields(),this.setResetState({errors:[],error:null},this.props.onReset))}resetFields(){this.debug("resetFields()"),Object.values(this.fields).forEach(t=>t.reset())}setValue(t,n){this.debug(`setValue(${t}, ${n})`),this.setChangedState(o=>({...o,values:{...o.values,[t]:n}}))}setValues(t,n){this.debug("setValues():",t),n==null||n.preventDefault(),Object.entries(t).forEach(([o,a])=>{var s;return(s=this.fields[o])==null?void 0:s.setValue(a)})}setHidden(t){const n={...this.state.hidden,...t};this.setState({hidden:n})}submit(t){this.debug("submit()"),t==null||t.preventDefault(),this.validate().then(n=>this.handleSubmit(n)).catch(n=>this.debug("Form is NOT valid:",n))}validate(){return this.debug("validate()"),this.setValidatingState(),new Promise(this.validator()).then(t=>(this.debug("validate passed: ",t),this.setValidState({submit:t,error:null,errors:[]},this.props.onValid),t)).catch(t=>{throw this.debug("validate failed: ",t),this.handleError({error:t.error,errors:t.errors}),t})}validator(){return(t,n)=>Promise.allSettled(Object.values(this.fields).map(o=>o.validate())).then(o=>o.reduce((a,{status:s,value:l,reason:i})=>(s===ZE?Object.assign(a.values,l.data||{[l.name]:l.value}):a.errors.push(i),a),{values:{...this.state.values},errors:[]})).then(o=>{var a;return this.debug("field validation complete: ",o),(a=o.errors)!=null&&a.length?(this.debug("errors detected, rejecting: ",o),n(o)):this.props.validate?(this.debug("validating form: ",o),this.props.validate(o.values,this.getContext()).then(s=>t({...o,values:s})).catch(s=>n(s))):t(o)})}unvalidate(){Object.values(this.fields).map(t=>t.unvalidate()),this.setUnvalidatedState()}handleSubmit(t){if(this.debug("Form is valid, handling submission:",t),!this.props.onSubmit){window.alert("You haven't defined an onSubmit handler: "+JSON.stringify(t.values));return}this.setSubmittingState({},async()=>{this.debug("calling onSubmit handler: ",t);try{const n=await this.props.onSubmit(t.values,this.getContext());if(this.debug("onSubmit response:",n),this.setSubmittedState(),n!=null&&n.ok||(n==null?void 0:n.status)===200)this.debug(`Success response ok:${n==null?void 0:n.ok} status:${n==null?void 0:n.status}`),this.handleSuccess(n);else if((n==null?void 0:n.status)>=400&&n.status<=500)this.debug(`Error response status:${n==null?void 0:n.status}`),this.handleError(n.data);else throw new Error(`Unknown response: ${n==null?void 0:n.status}`)}catch(n){this.debug("onSubmit error:",n),this.setSubmittedState(),this.handleError(ka(n)?{error:n}:n instanceof Error?{error:n.message}:n)}})}handleSuccess(t){this.debug("handleSuccess()",t);const n=this.props.onSuccess||sa;this.setValidState({},ic(()=>n(t,this),this.props.resetOnSuccess&&(()=>this.reset()),this.props.unvalidateOnSuccess&&(()=>this.unvalidate())))}handleError(t={}){this.debug("handleError()",t),t.errors&&(t.errors=this.sanitiseErrors(t.errors));const n=Ks(t==null?void 0:t.errors)&&this.fieldErrors(t.errors),o=this.props.onError||this.props.onFailure||sa;this.setInvalidState(t,ic(()=>o(t),n?()=>n.setFocus():null))}fieldErrors(t){this.debug("fieldErrors: ",t);const n=t.reduce((o,a)=>{const s=a.name??a.param??a.field,{message:l}=a,i=s&&this.fields[s];return i&&(a.label||(a.label=i.props.label),i.setInvalidState({message:l}),o.push(i)),o},[]);return this.state.focusInvalidField&&n.length?n[0]:null}sanitiseErrors(t){if(Ea(t)&&(t=Object.entries(t).map(([n,o])=>({name:n,...oN(o,"message")}))),!Ks(t))throw new Error("Invalid errors type (not an array or object)");return t.forEach(n=>n.message??(n.message=n.error)),t}getContext(){return{...this.props,...this.state,...this.actions}}}kn(Bo,"newStatus",mN),kn(Bo,"debug",!1),kn(Bo,"debugPrefix","Form > "),kn(Bo,"debugColor","rebeccapurple"),kn(Bo,"actions",["fieldSpec","attachField","detachField","setFocus","reset","validate","unvalidate","submit","setValue","setValues","setHidden","setStatus","setResetState","setChangedState","setValidatingState","setValidState","setInvalidState","setSubmittingState","setSubmittedState","handleError"]);const vN=B3(Bo),{Context:NZ,Provider:bN,Consumer:yN,Children:jN,Use:Ra}=vN,SN=({children:e})=>{const t=Ra(),n=QE(t),{submit:o,className:a}=t;return r.jsx("form",{className:a,...n,onSubmit:o,noValidate:!0,children:r.jsx(jN,{children:e})})},CN=({children:e,Layout:t=SN,...n})=>r.jsx(bN,{...n,children:r.jsx(t,{children:e})}),wN=e=>{const{id:t,value:n}=e;return{...e,id:t||v.useId(),value:n??e.default??VE}};class $o extends F3{constructor(t){super(t),this.name=t.name;const{value:n}=t,o=n;this.form=this.props.form,this.state={...this.state,initialValue:o,value:n,error:null},this.debug("initial state:",this.state),this.inputRef=v.createRef(),this.resetRef=v.createRef(),this.on={load:this.contextFunction(this.props.onLoad),focus:this.contextFunction(this.props.onFocus),blur:this.contextFunction(this.props.onBlur),change:this.contextFunction(this.props.onChange),valid:this.contextFunction(this.props.onValid),invalid:this.contextFunction(this.props.onInvalid),unvalidate:this.contextFunction(this.props.onUnvalidate),reset:this.contextFunction(this.props.onReset)},this.on.load()}contextFunction(t){return t?()=>t(this.getContext()):sa}componentDidMount(){this.debug("componentDidMount"),this.mounted=!0,this.form.attachField(this.props.name,this)}componentWillUnmount(){this.debug("componentWillUnmount"),this.mounted=!1,this.form.detachField(this.props.name)}setFocusState(t,n){return this.setStatus(zc,t,n)}setBlurState(t,n){return this.setStatus(HE,t,n)}onFocus(){this.setFocusState({},this.on.focus)}onBlur(){this.setBlurState({},this.props.validateOnBlur?()=>this.validation(this.on.blur):this.on.blur)}setFocus(t){var n,o;t==null||t.preventDefault(),(o=(n=this.inputRef)==null?void 0:n.current)==null||o.focus()}onChange(t){this.debug(`onChange(${t})`);const n=this.props.prepareValue?this.props.prepareValue(t):t,{invalid:o}=this.state.status,{validateOnChange:a,validateOnInvalid:s=!0,minValidateLength:l=1}=this.props,[i]=l1(n);let c=a||s&&o;i<l&&!o&&(c=!1),this.setChangedState({value:n},()=>{this.form.setValue(this.props.name,n),c?this.validation(this.on.change):this.on.change()})}setValue(t,n){n==null||n.preventDefault(),this.onChange(t)}reset(t){t==null||t.preventDefault();const n=this.props.prepareValue?this.props.prepareValue(this.state.initialValue):this.state.initialValue;return this.debug(`reset initialValue:${this.state.initialValue} => ${n}`),this.form.setValue(this.props.name,n),this.setResetState({value:n,message:this.props.message},()=>{var o,a;return(a=(o=this.resetRef)==null?void 0:o.current)==null?void 0:a.reset()}),n}validation(t){this.validate(t).then(sa).catch(sa)}validate(t){this.debug("validate()");const n={name:this.name,label:this.props.label};return new Promise(this.validator()).then(o=>(this.debug("validate() passed:",o),this.setValidState(o,ic(this.on.valid,t)),{...n,...o})).catch(o=>{throw this.debug("validate() failed:",o),this.setInvalidState(o,ic(this.on.invalid,t)),{...n,...o}})}validator(){return async(t,n)=>{const{value:o=""}=this.state,{validate:a,required:s,requiredMessage:l,validMessage:i}={...i1,...this.props},[,c]=l1(o);if(this.setValidatingState(),a)return await this.validateValidator(t,n,a,i);if(c)return await this.validateEmpty(t,n,s,i,l);this.debug("no validation defined"),t({value:o,message:i})}}async validateValidator(t,n,o,a){this.debug("calling validate function");const s=this.getContext();try{this.debug(`calling validate function with value [${s.value}]`);const l=await o(s.value,s,t,n);this.debug("validate function passed:",l),t(Ea(l)?{message:a,...l}:{value:l,message:a})}catch(l){this.debug("validate threw an error:",l);const i=ka(l)?l:l.message;this.debug("rejecting with message:",i),n({message:i})}}validateEmpty(t,n,o,a,s){o?(this.debug("failing validation - required field is empty"),n({message:s})):(this.debug("passing validation - value is empty but not required"),t({message:a}))}setValid(t,n){n==null||n.preventDefault(),this.setValidState({message:t},this.on.valid)}setInvalid(t,n){n==null||n.preventDefault(),this.setInvalidState({message:t},this.on.invalid)}unvalidate(){this.setUnvalidatedState({message:this.props.message})}getContext(){const t={...i1,...this.props,...this.state,...this.actions,name:this.name,inputRef:this.inputRef,resetRef:this.resetRef,setRef:this.resetRef};return delete t.form,delete t.children,delete t.render,t}}kn($o,"newStatus",xN),kn($o,"debug",!1),kn($o,"debugPrefix",e=>`Field [${e.name}] > `),kn($o,"debugColor","teal"),kn($o,"actions",["onFocus","onBlur","onChange","setFocus","setValue","setValid","setInvalid","reset","setResetState","setChangedState","setValidatingState","setValidState","setInvalidState","setFocusState","setBlurState"]);const _N=B3($o),{Context:RZ,Provider:TN,Consumer:OZ,Children:kN,Use:Ct}=_N,Y3=({field:e=Ct()})=>{const{label:t,id:n,required:o}=e,a=e.showRequired&&o,s=e.showOptional&&!o,l=t||a||s,i=e.labelClass,c={};return a&&e.requiredLabel!==z3&&(c["--required-text"]=`"${e.requiredLabel}"`),s&&e.optionalLabel!==I3&&(c["--optional-text"]=`"${e.optionalLabel}"`),l&&r.jsx("label",{htmlFor:n,className:i,style:c,children:t||r.jsx("span",{children:" "})})},EN=e=>t=>e.onChange(t.target.value),NN=e=>t=>e.onChange(t.target.checked),Rr={default:EN,checkbox:NN},RN=({field:e=Ct()})=>{const{id:t,text:n,inline:o,border:a,labelClass:s,type:l="checkbox",handler:i=Rr[l]||Rr.default}=e,c=Fc(e),d=Rn("checkbox",s,{inline:o,border:a});return r.jsxs("label",{htmlFor:t,className:d,children:[r.jsx("input",{type:l,ref:e.inputRef,"aria-disabled":e.disabled,tabIndex:e.disabled?-1:e.tabIndex,onChange:i(e),className:Uc(e),...c,checked:e.value}),n]})},G3=({field:e=Ct()})=>r.jsx("input",{type:"hidden",name:e.name,value:e.value}),ON=({field:e=Ct()})=>{const{inline:t,border:n,options:o=[],inputClass:a,optionClass:s,optionsClass:l="options",type:i="radio",handler:c=Rr[i]||Rr.default}=e,d=Fc(e);return r.jsx("div",{className:Rn(l),children:o.map((u,p)=>{u=W3(u);const m=`${e.id}-${u.value}`,b=e.value==u.value,S=(e.value?b:p==0)?e.inputRef:null,j=Rn("radio",s,u.className,{inline:t,border:n});return r.jsxs("label",{className:j,disabled:u.disabled,htmlFor:m,children:[r.jsx("input",{type:i,className:a,ref:S,"aria-disabled":e.disabled,tabIndex:e.disabled?-1:e.tabIndex,onChange:c(e),...d,id:m,checked:b,value:u.value}),u.text]},u.value)})})},LN=({field:e=Ct()})=>{const{options:t=[],placeholder:n,type:o="select",optionClass:a="option",handler:s=Rr[o]||Rr.default}=e,l=Fc(e);return r.jsxs("select",{ref:e.inputRef,"aria-disabled":e.disabled,tabIndex:e.disabled?-1:e.tabIndex,className:Uc(e),onChange:s(e),...l,value:e.value,required:e.required||!!n,children:[!!n&&r.jsx("option",{value:"",hidden:!0,disabled:!0,children:n}),t.map(i=>(i=W3(i),r.jsx("option",{className:a,value:i.value,disabled:i.disabled,children:i.text},i.value)))]})},c1=({field:e=Ct()})=>{const{type:t=Uh,handler:n=Rr[t]||Rr.default}=e,o=Fc(e);return r.jsx("input",{type:t,ref:e.inputRef,className:Uc(e),"aria-disabled":e.disabled,tabIndex:e.disabled?-1:e.tabIndex,onFocus:e.onFocus,onBlur:e.onBlur,onChange:n(e),...o})},DN=({field:e=Ct()})=>{const{rows:t=5,cols:n=20}=e;return r.jsx("textarea",{id:e.id,ref:e.inputRef,className:Uc(e),name:e.name,value:e.value,disabled:e.disabled,"aria-disabled":e.disabled,tabIndex:e.disabled?-1:e.tabIndex,placeholder:e.placeholder,autoComplete:e.autocomplete,onChange:o=>e.onChange(o.target.value),onFocus:e.onFocus,onBlur:e.onBlur,rows:t,cols:n})},Ys={default:c1,checkbox:RN,hidden:G3,radio:ON,select:LN,text:c1,textarea:DN},q3=(e,t)=>Ys[e]=t,BN=({field:e=Ct()})=>r.jsx("div",{className:Rn("prefix",e.prefixClass),children:e.prefix}),$N=({field:e=Ct()})=>r.jsx("div",{className:Rn("suffix",e.suffixClass),children:e.suffix}),AN=({field:e=Ct()})=>{const{classes:t,prefix:n,suffix:o,inputsClass:a,inline:s,type:l=Uh,Prefix:i=BN,Suffix:c=$N}=e,d=Ys[l]||Ys.default;let u=[qo(t,"inputs")];At(n)&&u.push(qo(t,"prefixed")),At(o)&&u.push(qo(t,"suffixed")),s&&u.push(qo(t,"inline")),At(a)&&u.push(a);const p=u.join(" ");return r.jsxs("div",{className:p,children:[At(n)&&r.jsx(i,{field:e}),r.jsx(d,{field:e}),At(o)&&r.jsx(c,{field:e})]})},X3=({field:e=Ct()})=>{const{prefix:t,suffix:n,type:o=Uh}=e,a=Ys[o]||Ys.default;return o==KE?r.jsx(a,{field:e}):At(t)||At(n)?r.jsx(AN,{}):r.jsx(a,{field:e})},Q3=({field:e=Ct()})=>{const{help:t,message:n,classes:o}=e,a=n??t,s=qo(o,"help");return a?r.jsx("div",{className:s,children:a}):null},J3=({field:e=Ct(),children:t})=>{const{type:n,Label:o=Y3,Message:a=Q3,Input:s=X3}=e,l=tN(e);return n==="hidden"?r.jsx(G3,{field:e}):r.jsx("div",{className:l,children:t||r.jsxs(r.Fragment,{children:[r.jsx(o,{field:e}),r.jsx(s,{field:e}),r.jsx(a,{field:e})]})})},e0=({name:e,children:t,...n})=>{const o=Ra(),a=wN(o.fieldSpec(e,n)),s=a.Layout||J3;return r.jsx(TN,{form:o,...a,children:t?r.jsx(kN,{children:t}):r.jsx(s,{})})},t0=({names:e,className:t,grid:n=!1,gap:o=4,stack:a,...s})=>{const l=M3(e);return $3(n)&&n&&(n=l.length),r.jsx("div",{className:nN({grid:n,gap:o,stack:a,props:s},t),children:l.map(i=>r.jsx(e0,{name:i,...s},i))})},MN=({className:e="",legend:t,children:n,fields:o,...a})=>r.jsxs("fieldset",{className:e,children:[!!t&&r.jsx("legend",{children:t}),!!o&&r.jsx(t0,{names:o,...a}),n]}),PN=({children:e,...t})=>gN(t)&&e,n0=yN(PN),IN=({values:e=!0,status:t=!1,all:n=!1,className:o="border bdr-2 shadow-2 mar-v-4 pad-4 form-debug",title:a="Form Debugging",valuesTitle:s="Values",statusTitle:l="Status",...i})=>{const c=Ra();return r.jsxs("div",{className:o,children:[a&&r.jsx("h3",{className:"mar-v-none",children:a}),r.jsxs("div",{className:"grid-1 gap-4",children:[e&&r.jsxs("div",{children:[s&&r.jsx("h4",{className:"mar-v-none",children:s}),r.jsx(d1,{rows:Object.entries(c.values),...i})]}),(t||n)&&c.status&&r.jsxs("div",{children:[l&&r.jsx("h4",{children:l}),r.jsx(d1,{title:"Status",rows:Object.entries(c.status),...i})]})]})]})},d1=({rows:e,children:t,color:n="brand",tableClass:o=`${n} shaded celled wide small pad-none mar-b-0`,...a})=>r.jsx("table",{className:o,children:r.jsx("tbody",{children:t||e.map(([s,l])=>r.jsx(zN,{name:s,value:l,...a},s))})}),zN=({name:e,value:t,keyClass:n="text-right split-3",valueClass:o="font-mono bgc-95 bgd-5"})=>r.jsxs("tr",{valign:"top",children:[r.jsx("th",{className:n,children:e}),r.jsx("td",{className:o,children:r.jsx(FN,{value:t})})]}),FN=({value:e})=>Ea(e)?JSON.stringify(e):At(e)?e.toString():"",UN=({error:e})=>{const t=e.label||e.name;return r.jsxs(r.Fragment,{children:[!!t&&r.jsxs("b",{children:[t,": "]}),e.message]})},VN=({error:e})=>ka(e)?e:r.jsx(UN,{error:e}),HN=({form:e=Ra(),title:t=e.errorsTitle,prompt:n=e.errorsPrompt,fieldErrors:o=!1,className:a="error alert border"})=>{const{error:s,errors:l,Error:i=VN}=e,c=!!s,d=(o?l.length:0)+(c?1:0);return d!==0?r.jsxs("div",{className:a,children:[!!t&&r.jsx("div",{className:"headline",children:a1(t,d)}),r.jsxs("div",{children:[c&&r.jsx("h4",{children:r.jsx(i,{error:s})}),o&&l.length!==0&&r.jsxs(r.Fragment,{children:[!!n&&r.jsx("p",{className:"wide",children:a1(n,l.length)}),r.jsx("ul",{children:l.map((u,p)=>r.jsx("li",{children:r.jsx(i,{error:u})},p))})]})]})]}):null},WN=({field:e=Ct(),selectValue:t=e.selectValue||Lg})=>r.jsx(nn,{...e,onSelect:n=>e.onChange(t(n))}),Ad={searching:!1,search:void 0,results:void 0,result:void 0,cursor:void 0};class cr extends ys{constructor(t){super(t),this.state={...this.state,...this.valueState(),searching:!1},this.startSearch=t.debounceTime?YS(this.search.bind(this),t.debounceTime):this.search.bind(this)}componentDidMount(){this.mounted=!0,this.props.onLoad(this)}componentWillUnmount(){this.setState({results:null}),this.mounted=!1,this.props.onUnload(this)}componentDidUpdate(t){this.props.value!==t.value&&(this.debug(`value has changed from ${t.value} to ${this.props.value}`),this.setState(this.valueState()))}valueState(t=this.props.value){const n=this.inputValue(t);return{value:t,input:n}}inputValue(t=this.props.value){return Se(t)?this.props.displayValue(t):wi}onFocus(){this.debug("onFocus()"),this.setState({hasFocus:!0},this.props.onFocus)}onBlur(){this.debug("onBlur()"),this.setState({hasFocus:!1},this.props.onBlur),Ar(500).then(()=>this.clearResults())}onChange(t){const n=t.target.value;this.debug(`input: ${n}`),n.length>=this.props.minLength?this.setState({input:n},this.startSearch):this.setState({input:n,...Ad})}onKeyDown(t){this.debug(`onKeyDown(${t.key})`);const n=this.state.cursor;switch(t.key){case Eh:this.setCursor(n+1);break;case Nh:this.setCursor(n-1);break;case Oc:this.selectCursor();break;case Lc:this.reset();break;default:return}t.preventDefault()}reset(){this.debug("reset()");const t=this.props.initialValue,n=this.inputValue(t);this.debug(`reset() [input:${n}] from value: `,t),this.setState({value:t,input:n,...Ad},this.props.onReset)}search(){const{input:t}=this.state,{minLength:n,onSearch:o}=this.props;if(t.length<n){this.debug(`search() cancelled - input is shorter than ${n}`);return}if(!o){this.debug("search() cancelled - no onSearch() handler defined");return}this.debug("onSearch: ",o),this.setState({search:t,searching:!0},async()=>this.searchResults(await o(t,this)))}searchResults(t){this.debug("searchResults()",t),this.setState({results:t,searching:!1,cursor:0})}selectResult(t){this.debug("selectResult()",t);const n=this.inputValue(t);this.setState({value:t,input:n,...Ad},()=>this.props.onSelect(t))}setCursor(t){this.debug(`setCursor(${t})`);const{results:n}=this.state;this.setState({cursor:n&&n.length?(t+n.length)%n.length:void 0})}selectCursor(){const{cursor:t,results:n}=this.state;n&&n.length&&Se(t)&&this.selectResult(n[t])}clearResults(){this.mounted&&this.setState({results:null})}resultsRef(t){this._resultsRef=t}activeRef(t){n3(this._resultsRef,t)}}be(cr,"debug",!1),be(cr,"debugPrefix","Search > "),be(cr,"debugColor","MediumVioletRed"),be(cr,"defaultProps",{minLength:2,debounceTime:500,onLoad:Be,onUnload:Be,onFocus:Be,onBlur:Be,onReset:Be,onSelect:Be,displayValue:ec("displayValue"),displayResult:ec("displayResult")}),be(cr,"initialState",{value:"",searching:!1}),be(cr,"initialProps",{value:"initialValue"}),be(cr,"actions",["onFocus","onBlur","onChange","onKeyDown","reset","selectResult","setCursor","selectCursor","resultsRef","activeRef"]);const Oa=Pr(cr),ZN=({input:e,onFocus:t,onBlur:n,onChange:o,reset:a,placeholder:s="Search",clearIcon:l="cross",searchIcon:i="search",searchingIcon:c="cog.spin",inputsClass:d="inputs round",prefixClass:u="prefix",suffixClass:p="suffix",inputType:m="text",inputClass:b="",disabled:S,searching:j})=>r.jsxs("div",{className:d,children:[r.jsx("div",{className:u,children:r.jsx(ne,{name:i})}),r.jsx("input",{type:m,placeholder:s,value:e,onFocus:t,onBlur:n,onChange:o,disabled:S,className:b}),r.jsx("div",{className:p,onClick:a,children:r.jsx(ne,{name:j?c:l})})]}),KN=Oa.Consumer(ZN),YN=({result:e,active:t,activeRef:n,onClick:o,onMouseEnter:a,displayResult:s,resultClass:l="item",activeClass:i="active"})=>r.jsx("div",{className:ve(l,{[i]:t}),onClick:o,onMouseEnter:a,ref:t?n:null,children:s(e)}),GN=Oa.Consumer(YN),qN=({noResultsClass:e="none",noResults:t="No results"})=>r.jsx("div",{className:e,children:t}),XN=Oa.Consumer(qN),QN=({results:e,resultsRef:t,cursor:n,selectResult:o,setCursor:a,resultsClass:s="menu border bdr-1",Result:l=GN,NoResults:i=XN})=>r.jsx("div",{className:s,ref:t,children:ya(e)&&e.length?e.map((c,d)=>r.jsx(l,{result:c,active:Se(n)&&e[n]===c,onClick:()=>o(c),onMouseEnter:()=>a(d)},c.id??c.value??d)):r.jsx(i,{})}),JN=Oa.Consumer(QN),eR=({results:e,onKeyDown:t,Input:n=KN,Results:o=JN})=>r.jsxs("div",{className:"search",onKeyDown:t,children:[r.jsx(n,{}),!!e&&r.jsx(o,{})]}),tR=Oa.Consumer(eR),nR=({Content:e=tR,...t})=>r.jsx(Oa.Provider,{...t,children:r.jsx(e,{})}),La=ee(nR,"Search"),rR=({field:e=Ct(),selectValue:t=e.selectValue||Lg})=>r.jsx(La,{...e,onSelect:n=>e.onChange(t(n)),onReset:e.reset}),oR=({color:e,className:t,style:n,fixed:o,light:a,dark:s,children:l})=>r.jsx("div",{className:ve("overlay",t,e,{fixed:o,light:a,dark:s}),style:n,children:l}),Co=ee(oR,"Overlay"),u1=(e,t)=>[e.length?"-"+e.join("-"):"",t.length?"."+t.join("."):""].join(""),p1=(e,t,n,o,a,s)=>{n?(t.push(`stc-${a}`,`std-${s}`),Eg(n)?o&&e.push(`strokeWidth=${o}`):e.push(n)):e.push("stroke=none")},h1=(e,t,n,o,a)=>{n?t.push(`flc-${o}`,`fld-${a}`):e.push("fill=none")},Z=({size:e,className:t,icon:n="cog",color:o="brand",stroke:a=!0,strokeWidth:s,strokeStop:l=40,strokeStopDark:i=50,fill:c=!1,fillStop:d=50,fillStopDark:u=20,bgIcon:p=!1,bgColor:m=o,bgStroke:b=!1,bgStrokeWidth:S,bgStrokeStop:j=60,bgStrokeStopDark:_=70,bgFill:x=!0,bgFillStop:h=70,bgFillStopDark:f=30,shrink:y=p?5:0,reverse:C=!1,animation:g=C?"spin.reverse":"spin"})=>{const w=ve(e,t),k=[],E=[m],L=[],$=[o,g];p1(k,E,b,S,j,_),p1(L,$,a,s,l,i),h1(k,E,x,h,f),h1(L,$,c,d,u),y&&L.push(`shrink=${y}`);const K=p?`${p}${u1(k,E)}`:"",q=`${n}${u1(L,$)}`,X=p?`${K} ${q}`:q;return r.jsx(ne,{name:X,className:w})},aR=({text:e="Submitting...",size:t="largest",className:n="flex middle center pad-8",light:o,dark:a,fixed:s,spinnerSize:l="x4",Spinner:i=Z,...c})=>r.jsx(n0,{submitting:!0,children:r.jsx(Co,{className:ve(n,t),light:o,dark:a,fixed:s,children:r.jsxs("div",{className:"text-center",children:[i&&r.jsx(i,{size:l,...c}),r.jsx("div",{className:"mar-t-4",children:e})]})})}),Vh=ee(aR,"Submitting"),sR=({text:e="Cancel",className:t="cancel",Button:n=B,...o})=>r.jsx(n,{text:e,className:t,...o}),lR=ee(sR,"Cancel"),iR=({type:e="reset",text:t="Reset",className:n="reset",Button:o=B,...a})=>{const{reset:s}=Ra();return r.jsx(o,{type:e,text:t,className:n,onClick:s,...a})},r0=ee(iR,"Reset"),cR=({type:e="submit",text:t="Submit",className:n="submit",Button:o=B,...a})=>{const{submit:s,status:l}=Ra();return r.jsx(o,{type:e,text:t,className:n,onClick:s,disabled:l.submitting,...a})},bl=ee(cR,"Submit"),dR=({className:e,gap:t=4,space:n=!1,reset:o={},submit:a={}})=>r.jsxs("div",{className:H3({className:e,gap:t,space:n},"controls"),children:[r.jsx(r0,{...o}),r.jsx(bl,{...a})]}),uR=ee(dR,"ResetSubmit"),pR=({className:e,gap:t=4,space:n=!1,cancel:o={},submit:a={}})=>r.jsxs("div",{className:H3({className:e,gap:t,space:n},"controls"),children:[r.jsx(lR,{...o}),r.jsx(bl,{...a})]});ee(pR,"CancelSubmit");q3("uiselect",WN);q3("search",rR);const rr=ee(CN,"Form"),st=ee(e0,"Field");ee(t0,"Fields");ee(MN,"Fieldset");ee(HN,"Errors");ee(n0,"Status");const Da=ee(IN,"Debug");ee(J3,"Layout");ee(Y3,"Label");ee(X3,"Input");ee(Q3,"Message");const hR=({close:e,icon:t="cross",className:n="close"})=>r.jsx("div",{className:n,onClick:e,children:r.jsx(ne,{name:t})}),fR=ee(hR,"ModalClose"),mR=({title:e,header:t})=>e||t?r.jsxs("header",{children:[!!e&&r.jsx("h3",{children:e}),t]}):null,xR=ee(mR,"ModalHeader"),gR=({footer:e})=>!!e&&r.jsx("footer",{children:e}),vR=ee(gR,"ModalFooter"),bR=({text:e,children:t,Header:n=xR,Footer:o=vR,...a})=>r.jsxs("article",{children:[r.jsx(n,{...a}),e||t,r.jsx(o,{...a})]}),yR=ee(bR,"ModalContent"),jR=({ref:e,open:t,close:n,className:o,closeClass:a="close",closeIcon:s="cross",Close:l=fR,Content:i=yR,...c})=>(e||(e=v.useRef(null)),v.useEffect(()=>{const{current:d}=e;t?d.showModal():d.close()},[t]),r.jsxs("dialog",{ref:e,className:o,children:[!!n&&r.jsx(l,{close:n,icon:s,className:a}),r.jsx(i,{...c})]})),An=ee(jR,"Modal"),SR=({open:e=!1}={})=>{const{isVisible:t,show:n,hide:o}=Mr({visible:e});return{show:n,hide:o,Modal:a=>r.jsx(An,{open:t,...a})}},CR=({open:e=!1}={})=>{const{isVisible:t,show:n,hide:o}=Mr({visible:e});return{show:n,hide:o,Overlay:a=>t&&r.jsx(Co,{...a})}},wR=({className:e,disabled:t,children:n})=>r.jsx("label",{className:ve(e,{disabled:t}),children:n}),_R=ee(wR,"RadioLabel"),TR=({name:e,option:t,tabIndex:n=0,onChange:o=Be,checked:a})=>r.jsx("input",{type:"radio",name:e,disabled:t.disabled,"aria-disabled":t.disabled,tabIndex:t.disabled?-1:n,onChange:s=>o(s.target.checked),checked:a}),kR=ee(TR,"RadioInput"),ER=({name:e,option:t,checked:n,inline:o,border:a,labelClass:s="radio",inputClass:l,Label:i=_R,Input:c=kR,onChange:d})=>r.jsxs(i,{className:ve(s,t.labelClass,{inline:o,border:a}),disabled:t.disabled,option:t,children:[r.jsx(c,{name:e,option:t,checked:n,className:ve(l,t.inputClass),onChange:()=>d(t.value)}),t.text??t.label??t.name]}),NR=ee(ER,"RadioOption"),RR=({name:e=v.useId(),value:t,options:n,className:o="radioset",disabled:a,Option:s=NR,...l})=>r.jsx("div",{className:ve(o,{disabled:a}),children:n.map(i=>{const c=bo(i)?i:{value:i,label:i};return r.jsx(s,{name:e,option:c,checked:c.value===t,value:t,...l},c.value)})}),On=ee(RR,"Radio"),OR=({...e})=>r.jsx(Fh,{modifiers:[hk,O3,zh],strategy:XT,...e}),LR=()=>r.jsxs(te,{children:[r.jsx("h3",{children:"Hello World!"}),"This is an alert."]}),DR=`import React from 'react'
import { Alert } from '@/src/index.jsx'

{/* START */}
// PRETEND: import { Alert } from '@abw/badger-react-ui'

const AlertExample = () =>
  <Alert>
    <h3>Hello World!</h3>
    This is an alert.
  </Alert>

export default AlertExample
`,BR=["red","brown","orange","yellow","olive","green","teal","blue","indigo","violet","purple","pink","maroon"],o0=({color:e,setColor:t,disabled:n=!1})=>r.jsxs("select",{name:"color",required:!0,value:e,onChange:o=>t(o.target.value),disabled:n,children:[r.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Select Range"}),r.jsx("option",{value:"",children:"Default"}),BR.map(o=>r.jsx("option",{value:o,children:o},o))]}),$R=["smallest","smaller","small","medium","large","larger","largest","x2","x3","x4","x5","x6","x7","x8","x9","x10"],a0=({size:e,setSize:t})=>r.jsxs("select",{name:"size",required:!0,value:e,onChange:n=>t(n.target.value),children:[r.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Size"}),r.jsx("option",{value:"",children:"Default"}),$R.map(n=>r.jsx("option",{value:n,children:n},n))]}),AR=[0,1,2,3,4,5,6,8,10],MR=({radius:e,setRadius:t})=>r.jsxs("select",{name:"radius",required:!0,value:e,onChange:n=>t(n.target.value),children:[r.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Radius"}),r.jsx("option",{value:"",children:"Default"}),AR.map(n=>r.jsx("option",{value:n,children:n},n))]}),PR=[1,2,3,4,5],IR=({shadow:e,setShadow:t})=>r.jsxs("select",{name:"shadow",required:!0,value:e,onChange:n=>t(n.target.value),children:[r.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Shadow"}),r.jsx("option",{value:"",children:"Default"}),PR.map(n=>r.jsx("option",{value:n,children:n},n))]}),f1=({checked:e,toggle:t,label:n,disabled:o=!1})=>r.jsxs("label",{className:"checkbox border no-focus",children:[r.jsx("input",{type:"checkbox",checked:e,onChange:t,disabled:o}),n]}),zR=[0,1,2,3,4,5,6,8,10],FR=({border:e,setBorder:t,disabled:n=!1})=>r.jsxs("select",{name:"border",required:!0,value:e,onChange:o=>t(o.target.value),disabled:n,children:[r.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Border"}),r.jsx("option",{value:"",children:"Default"}),zR.map(o=>r.jsx("option",{value:o,children:o},o))]}),UR=Object.keys(ol.icons),Yu=({icon:e,setIcon:t,disabled:n=!1})=>r.jsxs("select",{name:"icon",required:!0,value:e,onChange:o=>t(o.target.value),disabled:n,children:[r.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Icon"}),r.jsx("option",{value:"",children:"None"}),UR.map(o=>r.jsx("option",{value:o,children:o},o))]}),VR=()=>{const[e,t]=v.useState(0),[n,o]=v.useState({headline:"",title:"",text:"Hello World!",revealable:!1,stripe:!1}),a=c=>()=>{o(d=>({...d,[c]:!d[c]})),t(d=>d+1)},s=c=>d=>{o(u=>({...u,[c]:d})),t(u=>u+1)},i=`<Alert
  ${WR(n)}
/>`;return r.jsxs("div",{className:"example grid-2 gap-h-8 stack-desktop",children:[r.jsxs("div",{children:[r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Output"}),r.jsx("div",{className:"output mar-b-8",children:r.jsx(ZR,{options:n},e)})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Markup"}),r.jsx(Un,{code:i,language:"html",expand:!0})]})]}),r.jsx(HR,{options:n,setOption:s,toggleOption:a})]})},HR=({options:e,toggleOption:t,setOption:n})=>{const o=n("headline"),a=n("title"),s=n("text"),l=n("type"),i=n("size"),c=n("color"),d=n("border"),u=n("radius"),p=n("shadow"),m=n("icon"),b=n("headIcon"),S=t("stripe"),j=t("revealable");return r.jsxs("div",{children:[r.jsx(Md,{label:"Headline",value:e.headline,setValue:o}),r.jsx(Md,{label:"Title",value:e.title,setValue:a}),r.jsx(Md,{label:"Text",value:e.text,setValue:s}),r.jsxs("div",{className:"grid-2 gap-h-4 stack-mobile top",children:[r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Type"}),r.jsx(KR,{type:e.type,setType:l})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Color"}),r.jsx(o0,{color:e.color,setColor:c,disabled:e.type})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Size"}),r.jsx(a0,{size:e.size,setSize:i})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Shadow"}),r.jsx(IR,{shadow:e.shadow,setShadow:p})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Border Width"}),r.jsx(FR,{border:e.border,setBorder:d,disabled:e.stripe})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Border Radius"}),r.jsx(MR,{radius:e.radius,setRadius:u})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Headline Icon"}),r.jsx(Yu,{icon:e.headIcon,setIcon:b,disabled:!e.headline})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Body Icon"}),r.jsx(Yu,{icons:e.icon,setIcon:m})]})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Options"}),r.jsxs("div",{className:"grid-2 gap-h-4 stack-mobile top",children:[r.jsx(f1,{checked:e.stripe,toggle:S,label:"Stripe"}),r.jsx(f1,{checked:e.revealable,toggle:j,label:"Revealable",disabled:!e.headline})]})]})]})},WR=e=>{const t=["headline","title","text","type","color","size","headIcon","icon"].filter(a=>e[a]).map(a=>`${a}="${e[a]}"`),n=["shadow","border","radius"].filter(a=>e[a]).map(a=>`${a}={${e[a]}}`),o=["stripe","revealable","dismissable"].filter(a=>e[a]);return[...t,...n,...o].join(`
  `)},ZR=({options:e})=>r.jsx(te,{...e}),KR=({type:e,setType:t})=>r.jsxs("select",{name:"type",required:!0,value:e,onChange:n=>t(n.target.value),children:[r.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Type"}),r.jsx("option",{value:"",children:"Default"}),["info","warning","success","error"].map(n=>r.jsx("option",{value:n,children:n},n))]}),Md=({label:e,value:t,setValue:n})=>r.jsxs("div",{className:"field",children:[r.jsx("label",{children:e}),r.jsxs("div",{className:"inputs",children:[r.jsx("input",{type:"text",name:"headline",value:t,onChange:o=>n(o.target.value)}),r.jsx("div",{className:"suffix",children:r.jsx(ne,{name:"cross",className:"hover",onClick:()=>n("")})})]})]}),s0=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["Use the ",r.jsx("code",{children:"Alert"})," component to render an alert. Any child elements will be rendered inside the alert body."]}),r.jsx(re,{Component:LR,code:DR,expand:!0}),r.jsx("h2",{children:"Demo"}),r.jsx(VR,{})]}),YR=Object.freeze(Object.defineProperty({__proto__:null,default:s0},Symbol.toStringTag,{value:"Module"})),Hh=e=>e.replaceAll(/\W+/g,"-").replace(/^-+/,"").replace(/-+$/,"").toLowerCase(),GR=({render:e})=>{const[t,n]=v.useState({}),o=v.useRef();return e({tocs:t,addToc:(l,i,c,d)=>{const u=t[l]||(t[l]={});u[i]={text:c,ref:d},n({...t})},addTocHeading:(l,i,c,d)=>{const u=t[l]||(t[l]={});u[i]={heading:c,ref:d},n({...t})},contentRef:o})},yl=Pr(GR),qR=({addToc:e,addTocHeading:t,tocName:n,render:o})=>o({addPageToc:(l,i,c)=>{e(n,l,i,c)},addPageTocHeading:(l,i,c)=>{t(n,l,i,c)}}),Wh=Pr(yl.Consumer(qR)),XR=({id:e,code:t,title:n=t,children:o,addPageToc:a,split:s})=>{const l=Hh(e||t||n),i=v.useRef(),c=t?`code:${t}`:n;return v.useEffect(()=>{a&&a(l,c,i)},[e,t,n]),r.jsxs("section",{id:l,ref:i,children:[r.jsx("h3",{className:t?"font-mono page-section":"page-section",children:n}),r.jsx("div",{className:s?"cols-2 stack-desktop":"",children:o})]})},F=Wh.Consumer(XR),N=({Component:e,Source:t,children:n,code:o,title:a,caption:s=o?r.jsx("code",{children:o}):a,expand:l,undent:i,lineProps:c,highlightLines:d,...u})=>r.jsxs(F,{code:o,title:a,...u,children:[r.jsx("div",{className:"mar-b-4",children:n}),r.jsx(re,{Component:e,code:t,caption:s,expand:l,undent:i,highlightLines:d,lineProps:c})]}),QR=()=>r.jsxs("div",{children:[r.jsx(cs,{text:"Error alert"}),r.jsx(cs,{text:"Error alert with border",border:!0}),r.jsx(cs,{headline:"Error Alert",text:"Error alert with headline",border:!0,shadow:!0}),r.jsx(cs,{title:"Stonehenge",text:"Crushed by a dwarf",icon:"exclamation-thick",stripe:!0,shadow:3})]}),JR=`import React from 'react'
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
`,l0=()=>r.jsx(N,{code:"Error",Component:QR,Source:JR,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"Error"})," component is a short-cut to generate an error alert."]})}),eO=Object.freeze(Object.defineProperty({__proto__:null,default:l0},Symbol.toStringTag,{value:"Module"})),tO=()=>r.jsxs("div",{children:[r.jsx(ls,{text:"Info alert"}),r.jsx(ls,{text:"Info alert with border",border:!0}),r.jsx(ls,{headline:"Info Alert",text:"Info alert with headline",border:!0,shadow:!0}),r.jsx(ls,{title:"Stonehenge",text:"Where the demons dwell",icon:"info",stripe:!0,shadow:3})]}),nO=`import React from 'react'
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
`,i0=()=>r.jsx(N,{code:"Info",Component:tO,Source:nO,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"Info"})," component is a short-cut to generate an info alert."]})}),rO=Object.freeze(Object.defineProperty({__proto__:null,default:i0},Symbol.toStringTag,{value:"Module"})),oO=()=>r.jsxs("div",{children:[r.jsx(Go,{text:"Success alert"}),r.jsx(Go,{text:"Success alert with border",border:!0}),r.jsx(Go,{headline:"Success Alert",text:"Success alert with headline",border:!0,shadow:!0}),r.jsx(Go,{title:"Stonehenge",text:"Where the banshees live...",icon:"check-thicker-shrink=4",stripe:!0,shadow:3})]}),aO=`import React from 'react'
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
`,c0=()=>r.jsx(N,{code:"Success",Component:oO,Source:aO,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"Success"})," component is a short-cut to generate a success alert."]})}),sO=Object.freeze(Object.defineProperty({__proto__:null,default:c0},Symbol.toStringTag,{value:"Module"})),lO=()=>r.jsxs("div",{children:[r.jsx(is,{text:"Warning alert"}),r.jsx(is,{text:"Warning alert with border",border:!0}),r.jsx(is,{headline:"Warning Alert",text:"Warning alert with headline",border:!0,shadow:!0}),r.jsx(is,{title:"Stonehenge",text:"...and they do live well",icon:"exclamation-thick",stripe:!0,shadow:3})]}),iO=`import React from 'react'
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
`,d0=()=>r.jsx(N,{code:"Warning",Component:lO,Source:iO,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"Warning"})," component is a short-cut to generate a warning alert."]})}),cO=Object.freeze(Object.defineProperty({__proto__:null,default:d0},Symbol.toStringTag,{value:"Module"})),dO=()=>r.jsxs("div",{children:[r.jsx(te,{text:"Border Alert",border:!0}),r.jsx(te,{text:"Border Width 2",border:2})]}),uO=`import React from 'react'
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
`,u0=()=>r.jsx(N,{code:"border",Component:dO,Source:uO,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"border"})," property can be used to add a border.  This can be a number to indicate the border width."]})}),pO=Object.freeze(Object.defineProperty({__proto__:null,default:u0},Symbol.toStringTag,{value:"Module"})),hO=()=>r.jsx(te,{text:"Hello World!",className:"border shadow-2"}),fO=`import React from 'react'
import { Alert } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Alert
    text="Hello World!"
    className="border shadow-2"
  />
/* END */

export default Component
`,p0=()=>r.jsx(N,{code:"className",Component:hO,Source:fO,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"className"})," property can be used to set a CSS class."]})}),mO=Object.freeze(Object.defineProperty({__proto__:null,default:p0},Symbol.toStringTag,{value:"Module"})),xO=()=>r.jsxs("div",{children:[r.jsx(te,{text:"Red Alert",color:"red"}),r.jsx(te,{text:"Brown Alert",color:"brown"}),r.jsx(te,{text:"Orange Alert",color:"orange"}),r.jsx(te,{text:"Yellow Alert",color:"yellow"}),r.jsx(te,{text:"Green Alert",color:"green"}),r.jsx(te,{text:"Teal Alert",color:"teal"}),r.jsx(te,{text:"Blue Alert",color:"blue"}),r.jsx(te,{text:"Indigo Alert",color:"indigo"}),r.jsx(te,{text:"Violet Alert",color:"violet"}),r.jsx(te,{text:"Purple Alert",color:"purple"}),r.jsx(te,{text:"Pink Alert",color:"pink"}),r.jsx(te,{text:"Maroon Alert",color:"maroon"})]}),gO=`import React from 'react'
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
`,h0=()=>r.jsx(N,{code:"color",Component:xO,Source:gO,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"color"})," property can be used to set the color range used for the alert."]})}),vO=Object.freeze(Object.defineProperty({__proto__:null,default:h0},Symbol.toStringTag,{value:"Module"})),bO=()=>r.jsx(te,{headline:"Dismissable Alert",text:"A dismissable alert",dismissable:!0}),yO=`import React from 'react'
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
`,f0=()=>r.jsx(N,{code:"dismissable",Component:bO,Source:yO,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"dismissable"})," property can be used to make an alert dismissable."]})}),jO=Object.freeze(Object.defineProperty({__proto__:null,default:f0},Symbol.toStringTag,{value:"Module"})),SO=()=>r.jsx(te,{headline:"Headline Icon Alert",headIcon:"bars",text:"An alert with a headline icon"}),CO=`import React from 'react'
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
`,m0=()=>r.jsx(N,{code:"headicon",Component:SO,Source:CO,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"headIcon"})," property can be used to add an icon to the headline."]})}),wO=Object.freeze(Object.defineProperty({__proto__:null,default:m0},Symbol.toStringTag,{value:"Module"})),_O=()=>r.jsx(te,{headline:"Headline Alert",text:"An alert with a headline"}),TO=`import React from 'react'
import { Alert } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Alert
    headline="Headline Alert"
    text="An alert with a headline"
  />
/* END */

export default Component
`,x0=()=>r.jsx(N,{code:"headline",Component:_O,Source:TO,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"headline"})," property can be used to set a headline."]})}),kO=Object.freeze(Object.defineProperty({__proto__:null,default:x0},Symbol.toStringTag,{value:"Module"})),EO=()=>r.jsxs("div",{children:[r.jsx(te,{icon:"info",type:"info",title:"Eleven",text:"It's one louder"}),r.jsx(te,{icon:"check",type:"success",title:"Eleven",text:"It's one louder"}),r.jsx(te,{icon:"exclamation",type:"error",title:"Eleven",text:"It's one louder"})]}),NO=`import React from 'react'
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
`,g0=()=>r.jsx(N,{code:"icon",Component:EO,Source:NO,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"icon"})," property can be used to add an icon to the body."]})}),RO=Object.freeze(Object.defineProperty({__proto__:null,default:g0},Symbol.toStringTag,{value:"Module"})),OO=()=>r.jsx(te,{headline:"Dismissable Alert",text:"A dismissable alert",onDismiss:()=>window.alert("Bye!"),dismissable:!0}),LO=`import React from 'react'
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
`,v0=()=>r.jsx(N,{code:"onDismiss",Component:OO,Source:LO,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"onDismiss"})," property can be used to register a function which will be called when the alert is dismissed."]})}),DO=Object.freeze(Object.defineProperty({__proto__:null,default:v0},Symbol.toStringTag,{value:"Module"})),BO=()=>r.jsx(te,{text:"Radius Alert",radius:4}),$O=`import React from 'react'
import { Alert } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Alert
    text="Radius Alert"
    radius={4}
  />
/* END */

export default Component
`,b0=()=>r.jsx(N,{code:"radius",Component:BO,Source:$O,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"radius"})," property can be used to set the border radius."]})}),AO=Object.freeze(Object.defineProperty({__proto__:null,default:b0},Symbol.toStringTag,{value:"Module"})),MO=()=>r.jsx(te,{headline:"Revealable Alert",text:"A revealable alert",revealable:!0}),PO=`import React from 'react'
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
`,y0=()=>r.jsx(N,{code:"revealable",Component:MO,Source:PO,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"revealable"})," property can be used to make the alert revealable."]})}),IO=Object.freeze(Object.defineProperty({__proto__:null,default:y0},Symbol.toStringTag,{value:"Module"})),zO=()=>r.jsx(te,{headline:"Revealed Alert",text:"A revealed alert",revealable:!0,revealed:!0}),FO=`import React from 'react'
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
`,j0=()=>r.jsx(N,{code:"revealed",Component:zO,Source:FO,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"revealed"})," property can be set to make it a revealable alert initially revealed."]})}),UO=Object.freeze(Object.defineProperty({__proto__:null,default:j0},Symbol.toStringTag,{value:"Module"})),VO=()=>r.jsxs("div",{children:[r.jsx(te,{text:"Alert With Default Shadow (1)",shadow:!0}),r.jsx(te,{text:"Alert With Shadow 2",shadow:2}),r.jsx(te,{text:"Alert With Shadow 3",shadow:3}),r.jsx(te,{text:"Alert With Shadow 4",shadow:4}),r.jsx(te,{text:"Alert With Shadow 5",shadow:5})]}),HO=`import React from 'react'
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
`,S0=()=>r.jsx(N,{code:"shadow",Component:VO,Source:HO,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"shadow"})," property can be used to add a shadow.  The default value is 1 or you can set it to any number from"," ","1 to 5."]})}),WO=Object.freeze(Object.defineProperty({__proto__:null,default:S0},Symbol.toStringTag,{value:"Module"})),ZO=()=>r.jsxs("div",{children:[r.jsx(te,{text:"Smallest Alert",size:"smallest"}),r.jsx(te,{text:"Smaller Alert",size:"smaller"}),r.jsx(te,{text:"Small Alert",size:"small"}),r.jsx(te,{text:"Medium Alert",size:"medium"}),r.jsx(te,{text:"Large Alert",size:"large"}),r.jsx(te,{text:"Larger Alert",size:"larger"}),r.jsx(te,{text:"Largest Alert",size:"largest"})]}),KO=`import React from 'react'
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
`,C0=()=>r.jsx(N,{code:"size",Component:ZO,Source:KO,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"size"})," property can be used to set the text size."]})}),YO=Object.freeze(Object.defineProperty({__proto__:null,default:C0},Symbol.toStringTag,{value:"Module"})),GO=()=>r.jsxs("div",{children:[r.jsx(te,{text:"Stripe Alert",stripe:!0,shadow:4}),r.jsx(te,{text:"Info Stripe Alert",type:"info",stripe:!0,shadow:4}),r.jsx(te,{text:"Success Stripe Alert",type:"success",stripe:!0,shadow:4}),r.jsx(te,{text:"Warning Stripe Alert",type:"warning",stripe:!0,shadow:4}),r.jsx(te,{text:"Error Stripe Alert",type:"error",stripe:!0,shadow:4})]}),qO=`import React from 'react'
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
`,w0=()=>r.jsx(N,{code:"stripe",Component:GO,Source:qO,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"stripe"})," property can be set as a short-cut to add the"," ",r.jsx("code",{children:"stripe"})," CSS class for a more minimal look."]})}),XO=Object.freeze(Object.defineProperty({__proto__:null,default:w0},Symbol.toStringTag,{value:"Module"})),QO=()=>r.jsx(te,{text:"Hello World!"}),JO=`import React from 'react'
import { Alert } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Alert text="Hello World!"/>
/* END */

export default Component`,_0=()=>r.jsx(N,{code:"text",Component:QO,Source:JO,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"text"})," property can be used to set the body text."]})}),eL=Object.freeze(Object.defineProperty({__proto__:null,default:_0},Symbol.toStringTag,{value:"Module"})),tL=()=>r.jsx(te,{title:"Hello World!",children:"This is an alert"}),nL=`import React from 'react'
import { Alert } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Alert title="Hello World!">
    This is an alert
  </Alert>
/* END */

export default Component`,T0=()=>r.jsx(N,{code:"title",Component:tL,Source:nL,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"title"})," property can be used to set a title."]})}),rL=Object.freeze(Object.defineProperty({__proto__:null,default:T0},Symbol.toStringTag,{value:"Module"})),oL=()=>r.jsxs("div",{children:[r.jsx(te,{text:"Info Alert",type:"info"}),r.jsx(te,{text:"Success Alert",type:"success"}),r.jsx(te,{text:"Warning Alert",type:"warning"}),r.jsx(te,{text:"Error Alert",type:"error"})]}),aL=`import React from 'react'
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
`,k0=()=>r.jsx(N,{code:"type",Component:oL,Source:aL,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"type"})," property can be used to set it to one of the pre-defined types: ",r.jsx("code",{children:"info"}),", ",r.jsx("code",{children:"success"}),","," ",r.jsx("code",{children:"warning"})," or ",r.jsx("code",{children:"error"}),"."]})}),sL=Object.freeze(Object.defineProperty({__proto__:null,default:k0},Symbol.toStringTag,{value:"Module"})),Ze=({tocName:e,children:t})=>r.jsx(Wh.Provider,{tocName:e,children:t}),lL=({id:e,title:t,addPageTocHeading:n})=>{const o=Hh(e||t),a=v.useRef();return v.useEffect(()=>{n&&n(o,t,a)},[e,t]),r.jsx("h2",{id:o,ref:a,className:"section-heading",children:t})},se=Wh.Consumer(lL),iL=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Alert"}),r.jsx(s0,{}),r.jsxs(Ze,{tocName:"alert",children:[r.jsx(se,{title:"Properties"}),r.jsx(T0,{}),r.jsx(_0,{}),r.jsx(x0,{}),r.jsx(m0,{}),r.jsx(y0,{}),r.jsx(j0,{}),r.jsx(f0,{}),r.jsx(v0,{}),r.jsx(p0,{}),r.jsx(u0,{}),r.jsx(b0,{}),r.jsx(S0,{}),r.jsx(C0,{}),r.jsx(h0,{}),r.jsx(k0,{}),r.jsx(w0,{}),r.jsx(g0,{}),r.jsx(se,{title:"Components"}),r.jsx(i0,{}),r.jsx(c0,{}),r.jsx(d0,{}),r.jsx(l0,{})]})]}),cL=Object.freeze(Object.defineProperty({__proto__:null,default:iL},Symbol.toStringTag,{value:"Module"})),dL=()=>r.jsx(ae,{children:"This is a Badge"}),uL=`import { Badge } from '@/src/index.jsx'

{/* START */}
import React from 'react'
// PRETEND: import { Badge } from '@abw/badger-react-ui'

const BadgeExample = () =>
  <Badge>
    This is a Badge
  </Badge>

export default BadgeExample
`,E0=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Badge"})," component can be used to render a badge. Any child elements will be included as content."]}),r.jsx("p",{children:"There are numerous properties listed below that are typically used as shortcuts to set particular CSS styles."}),r.jsx(re,{Component:dL,code:uL,expand:!0})]}),pL=Object.freeze(Object.defineProperty({__proto__:null,default:E0},Symbol.toStringTag,{value:"Module"})),hL=()=>r.jsx(ae,{text:"Custom Badge Content",Content:({text:e})=>r.jsxs("span",{className:"pad-4",children:["😀 ",e]})}),fL=`import React from 'react'
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
`,N0=()=>r.jsxs(N,{code:"Content",Component:hL,Source:fL,undent:2,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"Content"})," property (note the capital C) can be used to provide an alternate component to render the badge content. By default it uses ",r.jsx("code",{children:"WithIcons"})," to render the badge text with optional icons."]}),r.jsxs("p",{children:["If you want to change the way that badge content is generated on a global level then you can use the theming engine to define a different ",r.jsx("code",{children:"Content"})," component for all badges."]})]}),mL=Object.freeze(Object.defineProperty({__proto__:null,default:N0},Symbol.toStringTag,{value:"Module"})),xL=()=>r.jsxs("div",{className:"flex middle wrap gap-4",children:[r.jsx(ae,{text:"Border 2",color:"red",outline:!0,border:2}),r.jsx(ae,{text:"Border 3",color:"brown",outline:!0,border:3}),r.jsx(ae,{text:"Border 4",color:"orange",outline:!0,border:4}),r.jsx(ae,{text:"Border 5",color:"yellow",outline:!0,border:5})]}),gL=`import React from 'react'
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
`,R0=()=>r.jsx(N,{code:"border",Component:xL,Source:gL,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"border"})," property can be used to set the border width."]})}),vL=Object.freeze(Object.defineProperty({__proto__:null,default:R0},Symbol.toStringTag,{value:"Module"})),bL=()=>r.jsx(ae,{text:"Custom Badge",className:"red bdw-2 bdr-4 bgc-80 fgc-20 bgd-20 fgd-80"}),yL=`import React from 'react'
import { Badge } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Badge
    text="Custom Badge"
    className="red bdw-2 bdr-4 bgc-80 fgc-20 bgd-20 fgd-80"
  />
/* END */

export default Component
`,O0=()=>r.jsx(N,{code:"className",Component:bL,Source:yL,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"className"})," property can be added to add a CSS class to the badge."]})}),jL=Object.freeze(Object.defineProperty({__proto__:null,default:O0},Symbol.toStringTag,{value:"Module"})),SL=()=>r.jsxs("div",{className:"flex wrap gap-4",children:[r.jsx(ae,{text:"Red Badge",color:"red"}),r.jsx(ae,{text:"Brown Badge",color:"brown"}),r.jsx(ae,{text:"Orange Badge",color:"orange"}),r.jsx(ae,{text:"Yellow Badge",color:"yellow"}),r.jsx(ae,{text:"Green Badge",color:"green"}),r.jsx(ae,{text:"Teal Badge",color:"teal"}),r.jsx(ae,{text:"Blue Badge",color:"blue"}),r.jsx(ae,{text:"Indigo Badge",color:"indigo"}),r.jsx(ae,{text:"Violet Badge",color:"violet"}),r.jsx(ae,{text:"Purple Badge",color:"purple"}),r.jsx(ae,{text:"Pink Badge",color:"pink"}),r.jsx(ae,{text:"Maroon Badge",color:"maroon"})]}),CL=`import React from 'react'
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
`,L0=()=>r.jsx(N,{code:"color",Component:SL,Source:CL,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"color"})," property can be used to set the color range used for the badge."]})}),wL=Object.freeze(Object.defineProperty({__proto__:null,default:L0},Symbol.toStringTag,{value:"Module"})),_L=()=>r.jsx(ae,{color:"green",icon:"thumb"}),TL=`import React from 'react'
import { Badge } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Badge
    color="green"
    icon="thumb"
  />
/* END */

export default Component
`,D0=()=>r.jsx(N,{code:"icon",Component:_L,Source:TL,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"icon"})," property can be used to add an icon to a badge."]})}),kL=Object.freeze(Object.defineProperty({__proto__:null,default:D0},Symbol.toStringTag,{value:"Module"})),EL=()=>r.jsx(ae,{color:"green",text:"Unlocked",iconLeft:"unlocked"}),NL=`import React from 'react'
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
`,B0=()=>r.jsx(N,{code:"iconLeft",Component:EL,Source:NL,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"iconLeft"})," property can be used to add an icon to the left side of a badge."]})}),RL=Object.freeze(Object.defineProperty({__proto__:null,default:B0},Symbol.toStringTag,{value:"Module"})),OL=()=>r.jsx(ae,{color:"red",text:"Locked",iconRight:"locked"}),LL=`import React from 'react'
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
`,$0=()=>r.jsx(N,{code:"iconRight",Component:OL,Source:LL,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"iconRight"})," property can be used to add an icon to the right side of a badge."]})}),DL=Object.freeze(Object.defineProperty({__proto__:null,default:$0},Symbol.toStringTag,{value:"Module"})),BL=()=>r.jsxs("div",{className:"flex middle wrap gap-4",children:[r.jsx(ae,{text:"Radius 0",color:"olive",radius:0}),r.jsx(ae,{text:"Radius 2",color:"green",radius:2}),r.jsx(ae,{text:"Radius 4",color:"teal",radius:3}),r.jsx(ae,{text:"Radius 6",color:"blue",radius:4})]}),$L=`import React from 'react'
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
`,A0=()=>r.jsx(N,{code:"radius",Component:BL,Source:$L,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"radius"})," property can be used to set the border radius in multiples of the base unit: 0.25rem."]})}),AL=Object.freeze(Object.defineProperty({__proto__:null,default:A0},Symbol.toStringTag,{value:"Module"})),ML=()=>r.jsxs("div",{className:"flex middle wrap gap-4",children:[r.jsx(ae,{text:"Shadow 1",color:"indigo",outline:!0,shadow:!0}),r.jsx(ae,{text:"Shadow 2",color:"violet",outline:!0,shadow:2}),r.jsx(ae,{text:"Shadow 3",color:"purple",outline:!0,shadow:3}),r.jsx(ae,{text:"Shadow 4",color:"pink",outline:!0,shadow:4}),r.jsx(ae,{text:"Shadow 5",color:"maroon",outline:!0,shadow:5})]}),PL=`import React from 'react'
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
`,M0=()=>r.jsx(N,{code:"shadow",Component:ML,Source:PL,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"shadow"})," property can be used to add a shadow to the badge ranging from 1 to 5."]})}),IL=Object.freeze(Object.defineProperty({__proto__:null,default:M0},Symbol.toStringTag,{value:"Module"})),zL=()=>r.jsxs("div",{className:"flex middle wrap gap-4",children:[r.jsx(ae,{text:"Smallest",size:"smallest"}),r.jsx(ae,{text:"Smaller",size:"smaller"}),r.jsx(ae,{text:"Small",size:"small"}),r.jsx(ae,{text:"Medium",size:"medium"}),r.jsx(ae,{text:"Large",size:"large"}),r.jsx(ae,{text:"Larger",size:"larger"}),r.jsx(ae,{text:"Largest",size:"largest"}),r.jsx(ae,{text:"x3",size:"x3"}),r.jsx(ae,{text:"x5",size:"x5"}),r.jsx(ae,{text:"x7",size:"x7"})]}),FL=`import React from 'react'
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
`,P0=()=>r.jsx(N,{code:"size",Component:zL,Source:FL,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"size"})," property can be used to set the badge size. This can be one of: ",r.jsx("code",{children:"smallest"}),", ",r.jsx("code",{children:"smaller"}),", ",r.jsx("code",{children:"small"})," ",",",r.jsx("code",{children:"medium"})," (default - same as no explicit size), ",r.jsx("code",{children:"large"})," ",",",r.jsx("code",{children:"larger"}),", ",r.jsx("code",{children:"largest"}),"; or any of the size multipliers:"," ",r.jsx("code",{children:"x2"}),", ",r.jsx("code",{children:"x3"}),", etc., up to ",r.jsx("code",{children:"x10"}),"."]})}),UL=Object.freeze(Object.defineProperty({__proto__:null,default:P0},Symbol.toStringTag,{value:"Module"})),VL=()=>r.jsx(ae,{text:"Tag Badge",tag:!0}),HL=`import React from 'react'
import { Badge } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Badge text="Tag Badge" tag/>
/* END */

export default Component
`,I0=()=>r.jsx(N,{code:"tag",Component:VL,Source:HL,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"tag"})," property can be used to add the ",r.jsx("code",{children:"tag"})," CSS class to change the appearance of the badge."]})}),WL=Object.freeze(Object.defineProperty({__proto__:null,default:I0},Symbol.toStringTag,{value:"Module"})),ZL=()=>r.jsx(ae,{text:"Grey Badge"}),KL=`import React from 'react'
import { Badge } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Badge text="Grey Badge"/>
/* END */

export default Component
`,z0=()=>r.jsx(N,{code:"text",Component:ZL,Source:KL,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"text"})," property can be used to set the text for the badge."]})}),YL=Object.freeze(Object.defineProperty({__proto__:null,default:z0},Symbol.toStringTag,{value:"Module"})),GL=()=>r.jsx(ae,{text:"Tooltip",label:"This is a tooltip",tooltip:"top left"}),qL=`import React from 'react'
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
`,F0=()=>r.jsx(N,{code:"tooltip",Component:GL,Source:qL,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"tooltip"})," property can be used to set the",r.jsx("code",{children:"data-tooltip"})," property on the badge.  This can be used to indicate the direction of the tooltip, e.g. ",r.jsx("code",{children:"top"}),","," ",r.jsx("code",{children:"right"}),", ",r.jsx("code",{children:"top right"}),", etc. The tooltip content should be defined using the ",r.jsx("code",{children:"label"})," property."]})}),XL=Object.freeze(Object.defineProperty({__proto__:null,default:F0},Symbol.toStringTag,{value:"Module"})),QL=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Badge"}),r.jsx(E0,{}),r.jsxs(Ze,{tocName:"badge",children:[r.jsx(se,{title:"Properties"}),r.jsx(z0,{}),r.jsx(I0,{}),r.jsx(L0,{}),r.jsx(O0,{}),r.jsx(R0,{}),r.jsx(A0,{}),r.jsx(M0,{}),r.jsx(P0,{}),r.jsx(D0,{}),r.jsx(B0,{}),r.jsx($0,{}),r.jsx(F0,{}),r.jsx(se,{title:"Components"}),r.jsx(N0,{})]})]}),JL=Object.freeze(Object.defineProperty({__proto__:null,default:QL},Symbol.toStringTag,{value:"Module"})),eD=()=>r.jsx(B,{children:"This is a button"}),tD=`import React from 'react'
import { Button } from '@/src/index.jsx'

{/* START */}
// PRETEND: import { Button } from '@abw/badger-react-ui'

const ButtonExample = () =>
  <Button>
    This is a button
  </Button>

export default ButtonExample
`,U0=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Button"})," component can be used to render a button. Any child elements will be included as content."]}),r.jsxs("p",{children:["There are numerous properties listed below that are typically used as shortcuts to set particular CSS styles.  Any other properties not listed here are forwarded to the ",r.jsx("code",{children:"button"})," component."]}),r.jsx(re,{Component:eD,code:tD,expand:!0})]}),nD=Object.freeze(Object.defineProperty({__proto__:null,default:U0},Symbol.toStringTag,{value:"Module"})),rD=()=>r.jsx(B,{text:"Custom Button Content",Content:({text:e})=>r.jsxs("span",{className:"pad-4",children:["😀 ",e]})}),oD=`import React from 'react'
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
`,V0=()=>r.jsxs(N,{code:"Content",Component:rD,Source:oD,undent:2,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"Content"})," property (note the capital C) can be used to provide an alternate component to render the button content. By default it uses ",r.jsx("code",{children:"WithIcons"})," to render the button text with optional icons."]}),r.jsxs("p",{children:["If you want to change the way that button content is generated on a global level then you can use the theming engine to define a different ",r.jsx("code",{children:"Content"})," component for all buttons."]})]}),aD=Object.freeze(Object.defineProperty({__proto__:null,default:V0},Symbol.toStringTag,{value:"Module"})),sD=()=>r.jsxs("div",{className:"flex wrap gap-4",children:[r.jsx(B,{text:"Red Bare",color:"red",bare:!0}),r.jsx(B,{text:"Green Bare",color:"green",bare:!0}),r.jsx(B,{text:"Blue Bare",color:"blue",bare:!0})]}),lD=`import React from 'react'
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
`,H0=()=>r.jsx(N,{code:"bare",Component:sD,Source:lD,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"bare"})," property can be added for bare naked buttons."]})}),iD=Object.freeze(Object.defineProperty({__proto__:null,default:H0},Symbol.toStringTag,{value:"Module"})),cD=()=>r.jsxs("div",{className:"flex middle wrap gap-4",children:[r.jsx(B,{text:"Border 2",color:"red",outline:!0,border:2}),r.jsx(B,{text:"Border 3",color:"brown",outline:!0,border:3}),r.jsx(B,{text:"Border 4",color:"orange",outline:!0,border:4}),r.jsx(B,{text:"Border 5",color:"yellow",outline:!0,border:5})]}),dD=`import React from 'react'
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
`,W0=()=>r.jsx(N,{code:"border",Component:cD,Source:dD,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"border"})," property can be used to set the border width. This is only really noticeable on outline buttons.  There is a border around solid buttons (mainly to help in matching the height of other form inputs), although it's the same color as the background."]})}),uD=Object.freeze(Object.defineProperty({__proto__:null,default:W0},Symbol.toStringTag,{value:"Module"})),pD=()=>r.jsxs("div",{className:"flex wrap gap-4",children:[r.jsx(B,{text:"Yellow Button",color:"yellow"}),r.jsx(B,{text:"Bright Yellow Button",color:"yellow",bright:!0})]}),hD=`import React from 'react'
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
`,Z0=()=>r.jsx(N,{code:"bright",Component:pD,Source:hD,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"bright"})," property can be added to make the buttons brighter than normal."]})}),fD=Object.freeze(Object.defineProperty({__proto__:null,default:Z0},Symbol.toStringTag,{value:"Module"})),mD=()=>r.jsx(B,{text:"Custom Button",className:"red bdw-2 bdr-4 bgc-80 fgc-20 bgd-20 fgd-80"}),xD=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    text="Custom Button"
    className="red bdw-2 bdr-4 bgc-80 fgc-20 bgd-20 fgd-80"
  />
/* END */

export default Component
`,K0=()=>r.jsx(N,{code:"className",Component:mD,Source:xD,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"className"})," property can be added to add a CSS class to the button."]})}),gD=Object.freeze(Object.defineProperty({__proto__:null,default:K0},Symbol.toStringTag,{value:"Module"})),vD=()=>r.jsxs("div",{className:"grid-2 gap-4 stack-tablet",children:[r.jsx(B,{text:"Red Button",color:"red"}),r.jsx(B,{text:"Brown Button",color:"brown"}),r.jsx(B,{text:"Orange Button",color:"orange"}),r.jsx(B,{text:"Yellow Button",color:"yellow"}),r.jsx(B,{text:"Green Button",color:"green"}),r.jsx(B,{text:"Teal Button",color:"teal"}),r.jsx(B,{text:"Blue Button",color:"blue"}),r.jsx(B,{text:"Indigo Button",color:"indigo"}),r.jsx(B,{text:"Violet Button",color:"violet"}),r.jsx(B,{text:"Purple Button",color:"purple"}),r.jsx(B,{text:"Pink Button",color:"pink"}),r.jsx(B,{text:"Maroon Button",color:"maroon"})]}),bD=`import React from 'react'
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
`,Y0=()=>r.jsx(N,{code:"color",Component:vD,Source:bD,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"color"})," property can be used to set the color range used for the button."]})}),yD=Object.freeze(Object.defineProperty({__proto__:null,default:Y0},Symbol.toStringTag,{value:"Module"})),jD=()=>r.jsxs("div",{className:"flex wrap gap-4",children:[r.jsx(B,{text:"Red Button",color:"red"}),r.jsx(B,{text:"Dark Red Button",color:"red",dark:!0})]}),SD=`import React from 'react'
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
`,G0=()=>r.jsx(N,{code:"dark",Component:jD,Source:SD,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"dark"})," property can be added to make the buttons darker than normal."]})}),CD=Object.freeze(Object.defineProperty({__proto__:null,default:G0},Symbol.toStringTag,{value:"Module"})),wD=()=>r.jsx(B,{text:"Disabled Button",disabled:!0}),_D=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    text="Disabled Button"
    disabled
  />
/* END */

export default Component
`,q0=()=>r.jsx(N,{code:"disabled",Component:wD,Source:_D,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"disabled"})," property can be set to disable a button."]})}),TD=Object.freeze(Object.defineProperty({__proto__:null,default:q0},Symbol.toStringTag,{value:"Module"})),kD=()=>r.jsx(B,{color:"green",icon:"bars"}),ED=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    color="green"
    icon="bars"
  />
/* END */

export default Component
`,X0=()=>r.jsx(N,{code:"icon",Component:kD,Source:ED,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"icon"})," property can be used to add an icon to a button."]})}),ND=Object.freeze(Object.defineProperty({__proto__:null,default:X0},Symbol.toStringTag,{value:"Module"})),RD=()=>r.jsx(B,{color:"green",text:"Back",iconLeft:"angle-left"}),OD=`import React from 'react'
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
`,Q0=()=>r.jsx(N,{code:"iconLeft",Component:RD,Source:OD,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"iconLeft"})," property can be used to add an icon to the left side of a button."]})}),LD=Object.freeze(Object.defineProperty({__proto__:null,default:Q0},Symbol.toStringTag,{value:"Module"})),DD=()=>r.jsx(B,{color:"green",text:"Next",iconRight:"angle-right"}),BD=`import React from 'react'
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
`,J0=()=>r.jsx(N,{code:"iconRight",Component:DD,Source:BD,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"iconRight"})," property can be used to add an icon to the right side of a button."]})}),$D=Object.freeze(Object.defineProperty({__proto__:null,default:J0},Symbol.toStringTag,{value:"Module"})),AD=()=>r.jsx(B,{text:"I am labelled!",label:"This is a label"}),MD=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    text="I am labelled!"
    label="This is a label"
  />
/* END */

export default Component
`,e4=()=>r.jsx(N,{code:"label",Component:AD,Source:MD,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"label"})," property can be used to set the",r.jsx("code",{children:"aria-label"})," property on the button.  This typically doesn't have any visual effect on the button, but is used by screen readers to provide more detail about the functionality of the button."]})}),PD=Object.freeze(Object.defineProperty({__proto__:null,default:e4},Symbol.toStringTag,{value:"Module"})),ID=()=>r.jsx(B,{text:"Click Me!",onClick:()=>window.alert("Click!")}),zD=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    text="Click Me!"
    onClick={() => window.alert('Click!')}
  />
/* END */

export default Component
`,t4=()=>r.jsx(N,{code:"onClick",Component:ID,Source:zD,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"onClick"})," property can be used to register a function which will be called when the button is clicked."]})}),FD=Object.freeze(Object.defineProperty({__proto__:null,default:t4},Symbol.toStringTag,{value:"Module"})),UD=()=>r.jsxs("div",{className:"flex wrap gap-4",children:[r.jsx(B,{text:"Red Outline",color:"red",outline:!0}),r.jsx(B,{text:"Green Outline",color:"green",outline:!0}),r.jsx(B,{text:"Blue Outline",color:"blue",outline:!0})]}),VD=`import React from 'react'
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
`,n4=()=>r.jsx(N,{code:"outline",Component:UD,Source:VD,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"outline"})," property can be added for outline buttons."]})}),HD=Object.freeze(Object.defineProperty({__proto__:null,default:n4},Symbol.toStringTag,{value:"Module"})),WD=()=>r.jsxs("div",{className:"flex middle wrap gap-4",children:[r.jsx(B,{text:"Radius 0",color:"olive",radius:0}),r.jsx(B,{text:"Radius 2",color:"green",radius:2}),r.jsx(B,{text:"Radius 4",color:"teal",radius:3}),r.jsx(B,{text:"Radius 6",color:"blue",radius:4})]}),ZD=`import React from 'react'
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
`,r4=()=>r.jsx(N,{code:"radius",Component:WD,Source:ZD,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"radius"})," property can be used to set the border radius in multiples of the base unit: 0.25rem."]})}),KD=Object.freeze(Object.defineProperty({__proto__:null,default:r4},Symbol.toStringTag,{value:"Module"})),YD=()=>r.jsxs("div",{className:"flex wrap gap-4",children:[r.jsx(B,{text:"Red Shaded",color:"red",shaded:!0}),r.jsx(B,{text:"Green Shaded",color:"green",shaded:!0}),r.jsx(B,{text:"Blue Shaded",color:"blue",shaded:!0})]}),GD=`import React from 'react'
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
`,o4=()=>r.jsx(N,{code:"shaded",Component:YD,Source:GD,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"shaded"})," property can be added for shaded buttons."]})}),qD=Object.freeze(Object.defineProperty({__proto__:null,default:o4},Symbol.toStringTag,{value:"Module"})),XD=()=>r.jsxs("div",{className:"flex middle wrap gap-4",children:[r.jsx(B,{text:"Shadow 1",color:"indigo",outline:!0,shadow:!0}),r.jsx(B,{text:"Shadow 2",color:"violet",outline:!0,shadow:2}),r.jsx(B,{text:"Shadow 3",color:"purple",outline:!0,shadow:3}),r.jsx(B,{text:"Shadow 4",color:"pink",outline:!0,shadow:4}),r.jsx(B,{text:"Shadow 5",color:"maroon",outline:!0,shadow:5})]}),QD=`import React from 'react'
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
`,a4=()=>r.jsx(N,{code:"shadow",Component:XD,Source:QD,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"shadow"})," property can be used to add a shadow to the button ranging from 1 to 5."]})}),JD=Object.freeze(Object.defineProperty({__proto__:null,default:a4},Symbol.toStringTag,{value:"Module"})),eB=()=>r.jsxs("div",{className:"flex middle wrap gap-4",children:[r.jsx(B,{text:"Smallest",size:"smallest"}),r.jsx(B,{text:"Smaller",size:"smaller"}),r.jsx(B,{text:"Small",size:"small"}),r.jsx(B,{text:"Medium",size:"medium"}),r.jsx(B,{text:"Large",size:"large"}),r.jsx(B,{text:"Larger",size:"larger"}),r.jsx(B,{text:"Largest",size:"largest"}),r.jsx(B,{text:"x3",size:"x3"}),r.jsx(B,{text:"x5",size:"x5"}),r.jsx(B,{text:"x7",size:"x7"})]}),tB=`import React from 'react'
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
`,s4=()=>r.jsx(N,{code:"size",Component:eB,Source:tB,undent:2,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"size"})," property can be used to set the button size. This can be one of: ",r.jsx("code",{children:"smallest"}),", ",r.jsx("code",{children:"smaller"}),", ",r.jsx("code",{children:"small"})," ",",",r.jsx("code",{children:"medium"})," (default - same as no explicit size), ",r.jsx("code",{children:"large"})," ",",",r.jsx("code",{children:"larger"}),", ",r.jsx("code",{children:"largest"}),"; or any of the size multipliers:"," ",r.jsx("code",{children:"x2"}),", ",r.jsx("code",{children:"x3"}),", etc., up to ",r.jsx("code",{children:"x10"}),"."]})}),nB=Object.freeze(Object.defineProperty({__proto__:null,default:s4},Symbol.toStringTag,{value:"Module"})),rB=()=>r.jsx(B,{text:"Grey Button"}),oB=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button text="Grey Button"/>
/* END */

export default Component
`,l4=()=>r.jsx(N,{code:"text",Component:rB,Source:oB,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"text"})," property can be used to set the text for the button."]})}),aB=Object.freeze(Object.defineProperty({__proto__:null,default:l4},Symbol.toStringTag,{value:"Module"})),sB=()=>r.jsx(B,{text:"Tooltip",label:"This is a tooltip",tooltip:"top left"}),lB=`import React from 'react'
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
`,i4=()=>r.jsx(N,{code:"tooltip",Component:sB,Source:lB,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"tooltip"})," property can be used to set the",r.jsx("code",{children:"data-tooltip"})," property on the button.  This can be used to indicate the direction of the tooltip, e.g. ",r.jsx("code",{children:"top"}),","," ",r.jsx("code",{children:"right"}),", ",r.jsx("code",{children:"top right"}),", etc. The tooltip content should be defined using the ",r.jsx("code",{children:"label"})," property."]})}),iB=Object.freeze(Object.defineProperty({__proto__:null,default:i4},Symbol.toStringTag,{value:"Module"})),cB=()=>r.jsx(B,{text:"Grey Button",type:"submit"}),dB=`import React from 'react'
import { Button } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Button
    text="Grey Button"
    type="submit"
  />
/* END */

export default Component
`,c4=()=>r.jsxs(N,{code:"type",Component:cB,Source:dB,undent:2,expand:!0,children:[r.jsxs("p",{children:["The default ",r.jsx("code",{children:"type"})," for a button is set to ",r.jsx("code",{children:"button"}),". In most cases this has no effect.  However, inside the scope of a ",r.jsx("code",{children:"form"})," element, the ",r.jsx("code",{children:"type"})," for a button would usually default to being ",r.jsx("code",{children:"submit"}),".  When clicked, the button would submit the form."]}),r.jsxs("p",{children:["This behaviour usually surprises people (it certainly catches me out from time to time).  Having an explicit default button type prevents this from happening.  When you really do want to add a button to submit a form, you should explicitly set the ",r.jsx("code",{children:"type"})," to"," ",r.jsx("code",{children:"submit"}),".  You can also set it to ",r.jsx("code",{children:"reset"})," to make a reset button for a form."]})]}),uB=Object.freeze(Object.defineProperty({__proto__:null,default:c4},Symbol.toStringTag,{value:"Module"})),pB=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Button"}),r.jsx(U0,{}),r.jsxs(Ze,{tocName:"button",children:[r.jsx(se,{title:"Properties"}),r.jsx(l4,{}),r.jsx(t4,{}),r.jsx(q0,{}),r.jsx(Y0,{}),r.jsx(Z0,{}),r.jsx(G0,{}),r.jsx(o4,{}),r.jsx(n4,{}),r.jsx(H0,{}),r.jsx(K0,{}),r.jsx(W0,{}),r.jsx(r4,{}),r.jsx(a4,{}),r.jsx(s4,{}),r.jsx(X0,{}),r.jsx(Q0,{}),r.jsx(J0,{}),r.jsx(e4,{}),r.jsx(i4,{}),r.jsx(c4,{}),r.jsx(se,{title:"Components"}),r.jsx(V0,{})]})]}),hB=Object.freeze(Object.defineProperty({__proto__:null,default:pB},Symbol.toStringTag,{value:"Module"})),fB=({text:e})=>r.jsx("span",{className:"border pad pad-h-4 mar",children:e}),mB=()=>r.jsx(jo,{buttons:[{text:"One"},{text:"Two"}],Button:fB}),xB=`import { Buttons } from '@/src/index.jsx'

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
`,d4=()=>r.jsx(N,{code:"Button",Component:mB,Source:xB,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"Button"})," property (note the capital B) can be used to define a different component for rendering each button."]})}),gB=Object.freeze(Object.defineProperty({__proto__:null,default:d4},Symbol.toStringTag,{value:"Module"})),vB=()=>r.jsxs(jo,{children:[r.jsx(B,{text:"One",outline:!0}),r.jsx(B,{text:"Two",outline:!0})]}),bB=`import { Buttons, Button } from '@/src/index.jsx'

{/* START */}
import React from 'react'
// PRETEND: import { Buttons, Button } from '@abw/badger-react-ui'

const ButtonsExample = () =>
  <Buttons>
    <Button text="One" outline/>
    <Button text="Two" outline/>
  </Buttons>

export default ButtonsExample
`,u4=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Buttons"})," component can be used to render a connected set of buttons."]}),r.jsx(re,{Component:vB,code:bB,expand:!0})]}),yB=Object.freeze(Object.defineProperty({__proto__:null,default:u4},Symbol.toStringTag,{value:"Module"})),jB=()=>r.jsx(r.Fragment,{children:r.jsx(jo,{outline:!0,buttonClass:"blue shadow-1",buttons:[{text:"One"},{text:"Two"}]})}),SB=`import React from 'react'
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
`,p4=()=>r.jsx(N,{code:"buttonClass",Component:jB,Source:SB,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"buttonClass"})," property can be used to add a CSS class to each button. Badger CSS targets the ",r.jsx("code",{children:"button"})," element for styling so you don't need to add any special classes to get the default styling."]})}),CB=Object.freeze(Object.defineProperty({__proto__:null,default:p4},Symbol.toStringTag,{value:"Module"})),wB=()=>r.jsx(r.Fragment,{children:r.jsx(jo,{buttons:[{text:"One",outline:!0},{text:"Two",outline:!0}]})}),_B=`import React from 'react'
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
`,h4=()=>r.jsx(N,{code:"buttons",Component:wB,Source:_B,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"buttons"})," property can be used to define properties for a set of buttons."]})}),TB=Object.freeze(Object.defineProperty({__proto__:null,default:h4},Symbol.toStringTag,{value:"Module"})),kB=()=>r.jsx(r.Fragment,{children:r.jsx(jo,{outline:!0,className:"buttons border pad-2 bgc-90 bgd-10 bdr-2",buttons:[{text:"One"},{text:"Two"}]})}),EB=`import React from 'react'
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
`,f4=()=>r.jsx(N,{code:"className",Component:kB,Source:EB,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"className"})," property can be used to set the CSS class for the buttons container element.  The default value is"," ",r.jsx("code",{children:"buttons"}),".  If you want to use the default styles provided by Badger CSS then you should include ",r.jsx("code",{children:"buttons"})," in the value you provide for ",r.jsx("code",{children:"className"})]})}),NB=Object.freeze(Object.defineProperty({__proto__:null,default:f4},Symbol.toStringTag,{value:"Module"})),RB=()=>r.jsx(r.Fragment,{children:r.jsx(jo,{outline:!0,buttons:[{text:"One"},{text:"Two"},{text:"Three",outline:!1,color:"orange"}]})}),OB=`import React from 'react'
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
`,m4=()=>r.jsx(N,{code:"outline",Component:RB,Source:OB,undent:4,expand:!0,children:r.jsxs("p",{children:["Additional properties passed to the ",r.jsx("code",{children:"Buttons"})," component will be forwarded to each ",r.jsx("code",{children:"Button"})," component.  For example, you can set the ",r.jsx("code",{children:"outline"})," property on the parent",r.jsx("code",{children:"Buttons"})," component so that you don't have to repeat it for each button.  However, individual buttons can override any of these properties."]})}),LB=Object.freeze(Object.defineProperty({__proto__:null,default:m4},Symbol.toStringTag,{value:"Module"})),DB=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Buttons"}),r.jsx(u4,{}),r.jsxs(Ze,{tocName:"buttons",children:[r.jsx(se,{title:"Properties"}),r.jsx(h4,{}),r.jsx(m4,{}),r.jsx(f4,{}),r.jsx(p4,{}),r.jsx(se,{title:"Components"}),r.jsx(d4,{})]})]}),BB=Object.freeze(Object.defineProperty({__proto__:null,default:DB},Symbol.toStringTag,{value:"Module"})),$B=()=>r.jsx(Tw,{text:"I like badgers",onChange:e=>console.log(`Checked: ${e}`)}),AB=`import { CheckboxState } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { CheckboxState } from '@abw/badger-react-ui

const CheckboxStateExample = () =>
  <CheckboxState
    text="I like badgers"
    onChange={checked => console.log(\`Checked: \${checked}\`)}
  />

export default CheckboxStateExample`,x4=()=>r.jsx(N,{code:"CheckboxState",Component:$B,Source:AB,expand:!0,children:r.jsx("div",{children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"CheckboxState"})," function can be used to generate a Checkbox with internal state."]})})}),MB=Object.freeze(Object.defineProperty({__proto__:null,default:x4},Symbol.toStringTag,{value:"Module"})),PB=()=>{const[e,t]=v.useState(!1);return r.jsx(Bn,{text:"I like badgers",checked:e,onChange:t})},IB=`import { Checkbox } from '@/src/index.jsx'

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

export default CheckboxExample`,g4=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Checkbox"})," component renders a checkbox with a label."]}),r.jsx(re,{Component:PB,code:IB,expand:!0})]}),zB=Object.freeze(Object.defineProperty({__proto__:null,default:g4},Symbol.toStringTag,{value:"Module"})),FB=()=>{const[e,t]=v.useState(!1);return r.jsx(Bn,{border:!0,text:"I like badgers",checked:e,onChange:t})},UB=`import { Checkbox } from '@/src/index.jsx'
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

export default ClassName`,v4=()=>r.jsx(N,{code:"border",Component:FB,Source:UB,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"border"})," property can be used as a short-cut to add the ",r.jsx("code",{children:"border"})," class."]})}),VB=Object.freeze(Object.defineProperty({__proto__:null,default:v4},Symbol.toStringTag,{value:"Module"})),HB=()=>{const[e,t]=v.useState(!1);return r.jsx(Bn,{text:"I like badgers",checked:e,onChange:t})},WB=`import { Checkbox } from '@/src/index.jsx'
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

export default CheckedExample`,b4=()=>r.jsx(N,{code:"checked",Component:HB,Source:WB,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"checked"})," property should be passed to indicate if the checkbox is checked (",r.jsx("code",{children:"true"}),") or not (",r.jsx("code",{children:"false"}),")."]})}),ZB=Object.freeze(Object.defineProperty({__proto__:null,default:b4},Symbol.toStringTag,{value:"Module"})),KB=()=>{const[e,t]=v.useState(!1);return r.jsx(Bn,{checkedText:"I like badgers (well done!)",uncheckedText:"I like badgers (you really should!)",checked:e,onChange:t})},YB=`import { Checkbox } from '@/src/index.jsx'
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

export default CheckedTextExample`,y4=()=>r.jsx(N,{code:"checkedText / uncheckedText",Component:KB,Source:YB,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"checkedText"})," and ",r.jsx("code",{children:"uncheckedText"})," properties can be used to provide different text for the checked and unchecked states."]})}),GB=Object.freeze(Object.defineProperty({__proto__:null,default:y4},Symbol.toStringTag,{value:"Module"})),qB=()=>{const[e,t]=v.useState(!1);return r.jsx(Bn,{text:"I like badgers",className:"large border",checked:e,onChange:t})},XB=`import { Checkbox } from '@/src/index.jsx'
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

export default ClassName`,j4=()=>r.jsx(N,{code:"className",Component:qB,Source:XB,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"className"})," property can be used to add a CSS class to the checkbox ",r.jsx("code",{children:"label"})," element."]})}),QB=Object.freeze(Object.defineProperty({__proto__:null,default:j4},Symbol.toStringTag,{value:"Module"})),JB=()=>{const[e,t]=v.useState(!1);return r.jsx(Bn,{disabled:!0,text:"I like badgers",checked:e,onChange:t})},e$=`import { Checkbox } from '@/src/index.jsx'
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

export default DisabledExample`,S4=()=>r.jsx(N,{code:"disabled",Component:JB,Source:e$,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"disabled"})," property can be set to disable a checkbox."]})}),t$=Object.freeze(Object.defineProperty({__proto__:null,default:S4},Symbol.toStringTag,{value:"Module"})),n$=()=>{const[e,t]=v.useState(!1);return r.jsx(Bn,{text:"I like badgers",checked:e,onChange:t})},r$=`import { Checkbox } from '@/src/index.jsx'
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

export default OnChangeExample`,C4=()=>r.jsx(N,{code:"onChange",Component:n$,Source:r$,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"onChange"})," property should be used to define a function to handle changes in the state."]})}),o$=Object.freeze(Object.defineProperty({__proto__:null,default:C4},Symbol.toStringTag,{value:"Module"})),a$=()=>{const[e,t]=v.useState(!1);return r.jsx(Bn,{text:"Badger are the best!",checked:e,onChange:t})},s$=`import { Checkbox } from '@/src/index.jsx'
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

export default TextExample`,w4=()=>r.jsx(N,{code:"text",Component:a$,Source:s$,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"text"})," property should be used to set the text for the checkbox."]})}),l$=Object.freeze(Object.defineProperty({__proto__:null,default:w4},Symbol.toStringTag,{value:"Module"})),i$=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Checkbox"}),r.jsx(g4,{}),r.jsxs(Ze,{tocName:"checkbox",children:[r.jsx(se,{title:"Properties"}),r.jsx(w4,{}),r.jsx(b4,{}),r.jsx(y4,{}),r.jsx(C4,{}),r.jsx(j4,{}),r.jsx(v4,{}),r.jsx(S4,{}),r.jsx(se,{title:"Components"}),r.jsx(x4,{})]})]}),c$=Object.freeze(Object.defineProperty({__proto__:null,default:i$},Symbol.toStringTag,{value:"Module"})),d$=()=>r.jsx(r.Fragment,{children:r.jsx($n,{text:"Delete",color:"red",iconRight:"trash",onClick:()=>window.alert("Confirmed!")})}),u$=`import { Confirm } from '@/src/index.jsx'

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

export default ConfirmExample`,_4=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Confirm"})," component provides an extra safety net for potentially dangerous operations.  When the user click on the button it then prompts them to confirm or cancel the action."]}),r.jsxs("p",{children:["Additional properties not listed below are forwarded onto the initial button.  For example, you can set the ",r.jsx("code",{children:"text"}),","," ",r.jsx("code",{children:"color"}),", add icons, and so on, just like you would for any other button."]}),r.jsx(re,{Component:d$,code:u$,expand:!0})]}),p$=Object.freeze(Object.defineProperty({__proto__:null,default:_4},Symbol.toStringTag,{value:"Module"})),h$=()=>r.jsx($n,{text:"Delete",color:"red",cancel:{text:"Go Back",color:"yellow",outline:!1,iconLeft:"angle-left"}}),f$=`import React from 'react'
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

export default CancelExample`,T4=()=>r.jsx(N,{code:"cancel",Component:h$,Source:f$,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"cancel"})," property can be used to set properties for the cancel button."]})}),m$=Object.freeze(Object.defineProperty({__proto__:null,default:T4},Symbol.toStringTag,{value:"Module"})),x$=()=>r.jsx($n,{text:"Delete",color:"red",cancelText:"Nah",cancelColor:"blue",cancelIcon:"angle-left"}),g$=`import React from 'react'
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

export default CancelExample`,k4=()=>r.jsx(N,{id:"cancelProps",code:"cancelXXX",Component:x$,Source:g$,undent:2,expand:!0,children:r.jsxs("p",{children:["You can also set individual properties for the cancel button",r.jsx("code",{children:"cancelIcon"}),","," ",r.jsx("code",{children:"cancelText"}),","," ",r.jsx("code",{children:"cancelColor"})," and"," ",r.jsx("code",{children:"cancelClass"}),"."]})}),v$=Object.freeze(Object.defineProperty({__proto__:null,default:k4},Symbol.toStringTag,{value:"Module"})),b$=()=>r.jsx(r.Fragment,{children:r.jsx($n,{className:"buttons border pad-2 bgc-90 bgd-10 bdr-2",icon:"trash",color:"red"})}),y$=`import React from 'react'
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
`,E4=()=>r.jsx(N,{code:"className",Component:b$,Source:y$,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"className"})," property can be used to set the CSS class for the buttons container element.  The default value is"," ",r.jsx("code",{children:"buttons"}),".  If you want to use the default styles provided by Badger CSS then you should include ",r.jsx("code",{children:"buttons"})," in the value you provide for ",r.jsx("code",{children:"className"})]})}),j$=Object.freeze(Object.defineProperty({__proto__:null,default:E4},Symbol.toStringTag,{value:"Module"})),S$=()=>r.jsx($n,{text:"Click to Delete",color:"red"}),C$=`import React from 'react'
import { Confirm } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Confirm
    text="Click to Delete"
    color="red"
  />
/* END */

export default Component
`,N4=()=>r.jsx(N,{code:"color",Component:S$,Source:C$,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"color"})," property can be used to set the color for the initial button."]})}),w$=Object.freeze(Object.defineProperty({__proto__:null,default:N4},Symbol.toStringTag,{value:"Module"})),_$=()=>r.jsx($n,{text:"Delete",color:"red",confirm:{text:"Yep, do it!",color:"green",iconRight:"angle-right"}}),T$=`import React from 'react'
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

export default ConfirmExample`,R4=()=>r.jsx(N,{code:"confirm",Component:_$,Source:T$,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"confirm"})," property can be used to set properties for the confirmation button."]})}),k$=Object.freeze(Object.defineProperty({__proto__:null,default:R4},Symbol.toStringTag,{value:"Module"})),E$=()=>r.jsx($n,{text:"Delete",color:"red",confirmText:"Yep",confirmColor:"green",confirmIcon:"trash"}),N$=`import React from 'react'
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

export default ConfirmProps`,O4=()=>r.jsx(N,{id:"confirmProps",code:"confirmXXX",Component:E$,Source:N$,undent:2,expand:!0,children:r.jsxs("p",{children:["You can also set individual properties for the confirm button",r.jsx("code",{children:"confirmIcon"}),","," ",r.jsx("code",{children:"confirmText"}),","," ",r.jsx("code",{children:"confirmColor"})," and"," ",r.jsx("code",{children:"confirmClass"}),"."]})}),R$=Object.freeze(Object.defineProperty({__proto__:null,default:O4},Symbol.toStringTag,{value:"Module"})),O$=()=>r.jsx($n,{text:"Click to Delete",color:"red",iconRight:"trash"}),L$=`import React from 'react'
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
`,L4=()=>r.jsx(N,{code:"iconRight",Component:O$,Source:L$,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"iconRight"})," property can be used to add an icon to the right.  Or ",r.jsx("code",{children:"iconLeft"})," can be used to add an icon to the left. Or just an ",r.jsx("code",{children:"icon"})," if you want an icon without any text."]})}),D$=Object.freeze(Object.defineProperty({__proto__:null,default:L4},Symbol.toStringTag,{value:"Module"})),B$=()=>r.jsx($n,{text:"Delete",color:"red",onClick:()=>window.alert("Deleted!")}),$$=`import React from 'react'
import { Confirm } from '@/src/index.jsx'

const OnClickExample = () =>
  /* START */
  <Confirm
    text="Delete"
    color="red"
    onClick={() => window.alert('Deleted!')}
  />
  /* END */

export default OnClickExample`,D4=()=>r.jsx(N,{code:"onClick",Component:B$,Source:$$,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"onClick"})," property should be used to define the handler which will be called when the user confirms the action."]})}),A$=Object.freeze(Object.defineProperty({__proto__:null,default:D4},Symbol.toStringTag,{value:"Module"})),M$=()=>r.jsx($n,{text:"Click to Delete"}),P$=`import React from 'react'
import { Confirm } from '@/src/index.jsx'

const Component = () =>
/* START */
  <Confirm
    text="Click to Delete"
  />
/* END */

export default Component
`,B4=()=>r.jsx(N,{code:"text",Component:M$,Source:P$,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"text"})," property can be used to set the text for the initial button."]})}),I$=Object.freeze(Object.defineProperty({__proto__:null,default:B4},Symbol.toStringTag,{value:"Module"})),z$=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Confirm"}),r.jsx(_4,{}),r.jsxs(Ze,{tocName:"confirm",children:[r.jsx(se,{title:"Properties"}),r.jsx(B4,{}),r.jsx(N4,{}),r.jsx(L4,{}),r.jsx(E4,{}),r.jsx(T4,{}),r.jsx(k4,{}),r.jsx(R4,{}),r.jsx(O4,{}),r.jsx(se,{title:"Event Handlers"}),r.jsx(D4,{})]})]}),F$=Object.freeze(Object.defineProperty({__proto__:null,default:z$},Symbol.toStringTag,{value:"Module"})),vn=[{name:"Alan",animal:"Anteater",id:10,role:"admin"},{name:"Bobby",animal:"Badger",id:20,role:"admin"},{name:"Brenda",animal:"Badger",id:30,role:"admin"},{name:"Christina",animal:"Cat",id:40,role:"user"},{name:"Derek",animal:"Dog",id:50,role:"user"},{name:"Delia",animal:"Donkey",id:60,role:"admin"},{name:"Edwin",animal:"Elephant",id:70,role:"admin"},{name:"Frank",animal:"Ferret",id:80,role:"user"},{name:"Felicity",animal:"Fox",id:90,role:"admin"},{name:"Gertrude",animal:"Goat",id:11,role:"admin"},{name:"Hector",animal:"Hamster",id:12,role:"admin"},{name:"Ian",animal:"Iguana",id:13,role:"user"},{name:"Julie",animal:"Jellyfish",id:14,role:"user"},{name:"Kevin",animal:"Koala",id:21,role:"user"},{name:"Lionel",animal:"Llama",id:22,role:"user"},{name:"Mary",animal:"Magpie",id:23,role:"user"},{name:"Nerys",animal:"Narwhal",id:24,role:"user"},{name:"Oliver",animal:"Octopus",id:31,role:"user"},{name:"Penny",animal:"Panda",id:32,role:"admin"},{name:"Quentin",animal:"Quail",id:33,role:"admin"},{name:"Roger",animal:"Raccoon",id:41,role:"user"},{name:"Simon",animal:"Stoat",id:42,role:"user"},{name:"Terry",animal:"Tiger",id:43,role:"user"},{name:"Ursula",animal:"Unicorn",id:101,role:"user"},{name:"Violet",animal:"Vole",id:102,role:"user"},{name:"Willy",animal:"Wombat",id:103,role:"user"},{name:"Xerces",animal:"Xenus",id:201,role:"user"},{name:"Yvonne",animal:"Yaz",id:202,role:"user"},{name:"Zebedee",animal:"Zebra",id:203,role:"user"},{name:"Al",animal:"Zebra",id:301,role:"guest"},{name:"Bob",animal:"Wombat",id:302,role:"guest"},{name:"Chris",animal:"Panda",id:303,role:"guest"},{name:"Kevin",animal:"Gerbil",id:304,role:"guest"},{name:"Roland",animal:"Rat",id:1234,role:"superstar"}],U$=()=>r.jsx(Vt,{rows:vn,columns:"id name animal role"}),V$=`import { Datatable } from '@/src/index.jsx'

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

export default DatatableExample`,$4=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Datatable"})," component can be used to display, sort, filter and page sets of data."]}),r.jsxs("p",{children:["The two mandatory properties are ",r.jsx("code",{children:"rows"})," and ",r.jsx("code",{children:"columns"}),". The ",r.jsx("code",{children:"rows"})," should be an array of objects containing the data that you want to display.  The ",r.jsx("code",{children:"columns"})," defines which properties in those objects you want to display.  In the simple case this can be a string of whitespace delimited identifiers. These should correspond to properties in the objects in the"," ",r.jsx("code",{children:"rows"})," array."]}),r.jsx("p",{children:"Click on the column headings to set the sort order.  Clicking again on the same column heading will toggle the order between ascending and descending.  Click on the small filter icon in each heading to show/hide the filters.  You can then type into the filter value for each column to filter the rows."}),r.jsx("p",{children:'The "Page Size" dropdown menu in the top right corner allows you to specify how many rows appear on each page.  The "Columns" item next to it allows you to specify which columns should be displayed.  You can drag them to change the order of columns.'}),r.jsx(re,{Component:U$,code:V$})]}),H$=Object.freeze(Object.defineProperty({__proto__:null,default:$4},Symbol.toStringTag,{value:"Module"})),W$=()=>r.jsx(Vt,{color:"brand",rows:vn,columns:"id name animal role"}),Z$=`import React from 'react'
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

export default DatatableExample`,A4=()=>r.jsx(N,{code:"color",Component:W$,Source:Z$,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"color"})," property can be used to define the color range used for the data table."]})}),K$=Object.freeze(Object.defineProperty({__proto__:null,default:A4},Symbol.toStringTag,{value:"Module"})),Y$=()=>r.jsx(Vt,{rows:[{id:10101,name:"Alan",salary:123456,admin:!0},{id:1010,name:"Brian",salary:45678,admin:!1},{id:101,name:"Charlie",salary:56789,admin:!1}],columns:{id:{type:"number",className:"text-right"},name:{},salary:{type:"currency",className:"text-right"},admin:{type:"boolean",className:"text-right"}}}),G$=`import React from 'react'
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

export default DatatableExample`,q$=()=>r.jsxs(N,{code:"type",Component:Y$,Source:G$,undent:4,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"type"})," property can be used to specify what kind of data type is used in the corresponding field in each row."]}),r.jsxs("p",{children:["The default value is ",r.jsx("code",{children:"string"})," which will display (and sort) values as strings.  You can also set it to ",r.jsx("code",{children:"number"}),","," ",r.jsx("code",{children:"currency"}),", ",r.jsx("code",{children:"boolean"}),", and others... (TODO)"]})]}),X$=Object.freeze(Object.defineProperty({__proto__:null,default:q$},Symbol.toStringTag,{value:"Module"})),Q$=()=>r.jsx(Vt,{rows:vn,columns:{id:{},name:{display:({row:e})=>`${e.name} ${e.animal}`}}}),J$=`import React from 'react'
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

export default DatatableExample`,M4=()=>r.jsx(N,{code:"display",Component:Q$,Source:J$,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"display"})," property can be used to define a custom function to display the column value."]})}),eA=Object.freeze(Object.defineProperty({__proto__:null,default:M4},Symbol.toStringTag,{value:"Module"})),tA=()=>r.jsx(Vt,{color:"brand",rows:vn,columns:"id name animal role"}),nA=`import React from 'react'
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
`,rA=()=>r.jsx(Vt,{color:"brand",rows:vn,columns:["id","name","animal","role"]}),oA=`import React from 'react'
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
`,aA=()=>r.jsx(Vt,{color:"brand",rows:vn,columns:[{field:"id"},{field:"name"},{field:"animal"},{field:"role"}]}),sA=`import React from 'react'
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
`,lA=()=>r.jsx(Vt,{color:"brand",rows:vn,columns:[{field:"id",label:"Ref.",type:"number"},{field:"name",label:"Username"},{field:"animal"},{field:"role"}]}),iA=`import React from 'react'
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
`,cA=()=>r.jsx(Vt,{color:"brand",rows:vn,columns:{id:{label:"Ref.",type:"number"},name:{label:"Username",type:"string"},animal:{},role:{}}}),dA=`import React from 'react'
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
`,P4=()=>r.jsxs(F,{code:"columns",children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"columns"})," property is used to define which properties in the ",r.jsx("code",{children:"rows"})," you want to display."]}),r.jsx("p",{children:"For simple cases this can be a string containing a whitespace delimited list of properties."}),r.jsx(re,{Component:tA,code:nA,caption:"columns",expand:!1,undent:2}),r.jsx("p",{children:"The string format is short-hand for specifying an array of strings."}),r.jsx(re,{Component:rA,code:oA,caption:"columns",expand:!1,undent:2}),r.jsxs("p",{children:['When a column is defined as a string it is "upgraded" to an object in which the string is the ',r.jsx("code",{children:"field"})," property. This should (usually) correspond to a property in each row that you want to display in the column."]}),r.jsx(re,{Component:aA,code:sA,caption:"columns",expand:!1,undent:2}),r.jsxs("p",{children:["The column object will be augmented with some additional properties:"," ",r.jsx("code",{children:"id"})," (the same value as the field, for sorting purposes),"," ",r.jsx("code",{children:"label"})," used as the label heading and defaulting to a capitalised version of the ",r.jsx("code",{children:"field"}),", and ",r.jsx("code",{children:"type"})," defaulting to ",r.jsx("code",{children:"string"}),"."]}),r.jsxs("p",{children:["You can define different values for ",r.jsx("code",{children:"label"})," and",r.jsx("code",{children:"type"})," (along with other properties"," ",r.jsx("a",{href:"#column-properties",children:"detailed below"}),")."]}),r.jsxs("p",{children:["In this example we set the ",r.jsx("code",{children:"type"})," of the first column to be ",r.jsx("code",{children:"number"}),".  If you click on the"," ",r.jsx("code",{children:"Id"})," column heading in one of the previous example, you can see that it's sorting the rows alphabetically, e.g."," ","10, 101, 102, 103, 11, 12, etc.  Setting the column type to"," ",r.jsx("code",{children:"number"}),", as shown in the next example, fixes this problem and the rows will be sorted numerically, e.g. 10, 11, 12, 13, 14, 20, etc."]}),r.jsx(re,{Component:lA,code:iA,caption:"columns",expand:!1,undent:2}),r.jsxs("p",{children:["The final option is to define the columns as an object in which the keys are the field names and the values contain additional configuration options for the column.  These can be left empty if you're happy with the default values for ",r.jsx("code",{children:"label"})," and ",r.jsx("code",{children:"type"}),"."]}),r.jsx(re,{Component:cA,code:dA,caption:"columns",expand:!1,undent:2}),r.jsxs("p",{children:["See the ",r.jsx("a",{href:"#column-properties",children:"Column Properties"})," section below for further information about the properties that can be added to the ",r.jsx("code",{children:"columns"}),"."]})]}),uA=Object.freeze(Object.defineProperty({__proto__:null,default:P4},Symbol.toStringTag,{value:"Module"})),pA=()=>r.jsx(Vt,{rows:vn,columns:{id:{label:"User ID"},name:{label:"User Name"}}}),hA=`import React from 'react'
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

export default DatatableExample`,I4=()=>r.jsx(N,{code:"label",Component:pA,Source:hA,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"label"})," property can be used to define the label that appears in the column heading."]})}),fA=Object.freeze(Object.defineProperty({__proto__:null,default:I4},Symbol.toStringTag,{value:"Module"})),mA=()=>r.jsx(Vt,{rows:[{id:10101,name:"Alan",salary:123456,admin:!0},{id:1010,name:"Brian",salary:45678,admin:!1},{id:101,name:"Charlie",salary:56789,admin:!1}],columns:{id:{type:"number"},name:{},salary:{type:"currency"},admin:{type:"boolean"}}}),xA=`import React from 'react'
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

export default DatatableExample`,z4=()=>r.jsxs(N,{code:"type",Component:mA,Source:xA,undent:4,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"type"})," property can be used to specify what kind of data type is used in the corresponding field in each row."]}),r.jsxs("p",{children:["The default value is ",r.jsx("code",{children:"string"})," which will display (and sort) values as strings.  You can also set it to ",r.jsx("code",{children:"number"}),","," ",r.jsx("code",{children:"currency"}),", ",r.jsx("code",{children:"boolean"}),", and others... (TODO)"]})]}),gA=Object.freeze(Object.defineProperty({__proto__:null,default:z4},Symbol.toStringTag,{value:"Module"})),vA=()=>r.jsx(Vt,{rows:vn,columns:"id name animal role",onRowClick:e=>window.alert(`Animal #${e.id}: ${e.name}`)}),bA=`import React from 'react'
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

export default DatatableExample`,F4=()=>r.jsx(N,{code:"onRowClick",Component:vA,Source:bA,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"onRowClick"})," property can be used to define a handler which will be called when the user clicks on a row.  When set the table will have the ",r.jsx("code",{children:"selectable"})," CSS class added to highlight the hovered row."]})}),yA=Object.freeze(Object.defineProperty({__proto__:null,default:F4},Symbol.toStringTag,{value:"Module"})),jA=()=>r.jsx(Vt,{rows:vn,columns:"id name animal role",pager:{size:"small",color:"blue"}}),SA=`import React from 'react'
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
 */function Ve(){return Ve=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Ve.apply(this,arguments)}var He;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(He||(He={}));const m1="popstate";function CA(e){e===void 0&&(e={});function t(o,a){let{pathname:s,search:l,hash:i}=o.location;return Gs("",{pathname:s,search:l,hash:i},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(o,a){return typeof a=="string"?a:po(a)}return _A(t,n,null,e)}function he(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function uo(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function wA(){return Math.random().toString(36).substr(2,8)}function x1(e,t){return{usr:e.state,key:e.key,idx:t}}function Gs(e,t,n,o){return n===void 0&&(n=null),Ve({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?or(t):t,{state:n,key:t&&t.key||o||wA()})}function po(e){let{pathname:t="/",search:n="",hash:o=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),o&&o!=="#"&&(t+=o.charAt(0)==="#"?o:"#"+o),t}function or(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let o=e.indexOf("?");o>=0&&(t.search=e.substr(o),e=e.substr(0,o)),e&&(t.pathname=e)}return t}function _A(e,t,n,o){o===void 0&&(o={});let{window:a=document.defaultView,v5Compat:s=!1}=o,l=a.history,i=He.Pop,c=null,d=u();d==null&&(d=0,l.replaceState(Ve({},l.state,{idx:d}),""));function u(){return(l.state||{idx:null}).idx}function p(){i=He.Pop;let _=u(),x=_==null?null:_-d;d=_,c&&c({action:i,location:j.location,delta:x})}function m(_,x){i=He.Push;let h=Gs(j.location,_,x);n&&n(h,_),d=u()+1;let f=x1(h,d),y=j.createHref(h);try{l.pushState(f,"",y)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;a.location.assign(y)}s&&c&&c({action:i,location:j.location,delta:1})}function b(_,x){i=He.Replace;let h=Gs(j.location,_,x);n&&n(h,_),d=u();let f=x1(h,d),y=j.createHref(h);l.replaceState(f,"",y),s&&c&&c({action:i,location:j.location,delta:0})}function S(_){let x=a.location.origin!=="null"?a.location.origin:a.location.href,h=typeof _=="string"?_:po(_);return he(x,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,x)}let j={get action(){return i},get location(){return e(a,l)},listen(_){if(c)throw new Error("A history only accepts one active listener");return a.addEventListener(m1,p),c=_,()=>{a.removeEventListener(m1,p),c=null}},createHref(_){return t(a,_)},createURL:S,encodeLocation(_){let x=S(_);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:m,replace:b,go(_){return l.go(_)}};return j}var Fe;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Fe||(Fe={}));const TA=new Set(["lazy","caseSensitive","path","id","index","children"]);function kA(e){return e.index===!0}function Gu(e,t,n,o){return n===void 0&&(n=[]),o===void 0&&(o={}),e.map((a,s)=>{let l=[...n,s],i=typeof a.id=="string"?a.id:l.join("-");if(he(a.index!==!0||!a.children,"Cannot specify children on an index route"),he(!o[i],'Found a route id collision on id "'+i+`".  Route id's must be globally unique within Data Router usages`),kA(a)){let c=Ve({},a,t(a),{id:i});return o[i]=c,c}else{let c=Ve({},a,t(a),{id:i,children:void 0});return o[i]=c,a.children&&(c.children=Gu(a.children,t,l,o)),c}})}function Xo(e,t,n){n===void 0&&(n="/");let o=typeof t=="string"?or(t):t,a=Or(o.pathname||"/",n);if(a==null)return null;let s=U4(e);NA(s);let l=null;for(let i=0;l==null&&i<s.length;++i)l=PA(s[i],zA(a));return l}function EA(e,t){let{route:n,pathname:o,params:a}=e;return{id:n.id,pathname:o,params:a,data:t[n.id],handle:n.handle}}function U4(e,t,n,o){t===void 0&&(t=[]),n===void 0&&(n=[]),o===void 0&&(o="");let a=(s,l,i)=>{let c={relativePath:i===void 0?s.path||"":i,caseSensitive:s.caseSensitive===!0,childrenIndex:l,route:s};c.relativePath.startsWith("/")&&(he(c.relativePath.startsWith(o),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+o+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(o.length));let d=Zn([o,c.relativePath]),u=n.concat(c);s.children&&s.children.length>0&&(he(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),U4(s.children,t,u,d)),!(s.path==null&&!s.index)&&t.push({path:d,score:AA(d,s.index),routesMeta:u})};return e.forEach((s,l)=>{var i;if(s.path===""||!((i=s.path)!=null&&i.includes("?")))a(s,l);else for(let c of V4(s.path))a(s,l,c)}),t}function V4(e){let t=e.split("/");if(t.length===0)return[];let[n,...o]=t,a=n.endsWith("?"),s=n.replace(/\?$/,"");if(o.length===0)return a?[s,""]:[s];let l=V4(o.join("/")),i=[];return i.push(...l.map(c=>c===""?s:[s,c].join("/"))),a&&i.push(...l),i.map(c=>e.startsWith("/")&&c===""?"/":c)}function NA(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:MA(t.routesMeta.map(o=>o.childrenIndex),n.routesMeta.map(o=>o.childrenIndex)))}const RA=/^:\w+$/,OA=3,LA=2,DA=1,BA=10,$A=-2,g1=e=>e==="*";function AA(e,t){let n=e.split("/"),o=n.length;return n.some(g1)&&(o+=$A),t&&(o+=LA),n.filter(a=>!g1(a)).reduce((a,s)=>a+(RA.test(s)?OA:s===""?DA:BA),o)}function MA(e,t){return e.length===t.length&&e.slice(0,-1).every((o,a)=>o===t[a])?e[e.length-1]-t[t.length-1]:0}function PA(e,t){let{routesMeta:n}=e,o={},a="/",s=[];for(let l=0;l<n.length;++l){let i=n[l],c=l===n.length-1,d=a==="/"?t:t.slice(a.length)||"/",u=qu({path:i.relativePath,caseSensitive:i.caseSensitive,end:c},d);if(!u)return null;Object.assign(o,u.params);let p=i.route;s.push({params:o,pathname:Zn([a,u.pathname]),pathnameBase:HA(Zn([a,u.pathnameBase])),route:p}),u.pathnameBase!=="/"&&(a=Zn([a,u.pathnameBase]))}return s}function qu(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,o]=IA(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let s=a[0],l=s.replace(/(.)\/+$/,"$1"),i=a.slice(1);return{params:o.reduce((d,u,p)=>{let{paramName:m,isOptional:b}=u;if(m==="*"){let j=i[p]||"";l=s.slice(0,s.length-j.length).replace(/(.)\/+$/,"$1")}const S=i[p];return b&&!S?d[m]=void 0:d[m]=FA(S||"",m),d},{}),pathname:s,pathnameBase:l,pattern:e}}function IA(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),uo(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let o=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(l,i,c)=>(o.push({paramName:i,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(o.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),o]}function zA(e){try{return decodeURI(e)}catch(t){return uo(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function FA(e,t){try{return decodeURIComponent(e)}catch(n){return uo(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Or(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,o=e.charAt(n);return o&&o!=="/"?null:e.slice(n)||"/"}function UA(e,t){t===void 0&&(t="/");let{pathname:n,search:o="",hash:a=""}=typeof e=="string"?or(e):e;return{pathname:n?n.startsWith("/")?n:VA(n,t):t,search:WA(o),hash:ZA(a)}}function VA(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function Pd(e,t,n,o){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(o)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function H4(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Zh(e,t){let n=H4(e);return t?n.map((o,a)=>a===e.length-1?o.pathname:o.pathnameBase):n.map(o=>o.pathnameBase)}function Kh(e,t,n,o){o===void 0&&(o=!1);let a;typeof e=="string"?a=or(e):(a=Ve({},e),he(!a.pathname||!a.pathname.includes("?"),Pd("?","pathname","search",a)),he(!a.pathname||!a.pathname.includes("#"),Pd("#","pathname","hash",a)),he(!a.search||!a.search.includes("#"),Pd("#","search","hash",a)));let s=e===""||a.pathname==="",l=s?"/":a.pathname,i;if(l==null)i=n;else{let p=t.length-1;if(!o&&l.startsWith("..")){let m=l.split("/");for(;m[0]==="..";)m.shift(),p-=1;a.pathname=m.join("/")}i=p>=0?t[p]:"/"}let c=UA(a,i),d=l&&l!=="/"&&l.endsWith("/"),u=(s||l===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(d||u)&&(c.pathname+="/"),c}const Zn=e=>e.join("/").replace(/\/\/+/g,"/"),HA=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),WA=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,ZA=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class Yh{constructor(t,n,o,a){a===void 0&&(a=!1),this.status=t,this.statusText=n||"",this.internal=a,o instanceof Error?(this.data=o.toString(),this.error=o):this.data=o}}function W4(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Z4=["post","put","patch","delete"],KA=new Set(Z4),YA=["get",...Z4],GA=new Set(YA),qA=new Set([301,302,303,307,308]),XA=new Set([307,308]),Id={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},QA={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Ya={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},K4=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,JA=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),Y4="remix-router-transitions";function eM(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",o=!n;he(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let a;if(e.mapRouteProperties)a=e.mapRouteProperties;else if(e.detectErrorBoundary){let T=e.detectErrorBoundary;a=R=>({hasErrorBoundary:T(R)})}else a=JA;let s={},l=Gu(e.routes,a,void 0,s),i,c=e.basename||"/",d=Ve({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1},e.future),u=null,p=new Set,m=null,b=null,S=null,j=e.hydrationData!=null,_=Xo(l,e.history.location,c),x=null;if(_==null){let T=Wt(404,{pathname:e.history.location.pathname}),{matches:R,route:O}=_1(l);_=R,x={[O.id]:T}}let h,f=_.some(T=>T.route.lazy),y=_.some(T=>T.route.loader);if(f)h=!1;else if(!y)h=!0;else if(d.v7_partialHydration){let T=e.hydrationData?e.hydrationData.loaderData:null,R=e.hydrationData?e.hydrationData.errors:null;h=_.every(O=>O.route.loader&&O.route.loader.hydrate!==!0&&(T&&T[O.route.id]!==void 0||R&&R[O.route.id]!==void 0))}else h=e.hydrationData!=null;let C,g={historyAction:e.history.action,location:e.history.location,matches:_,initialized:h,navigation:Id,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||x,fetchers:new Map,blockers:new Map},w=He.Pop,k=!1,E,L=!1,$=new Map,K=null,q=!1,X=!1,le=[],ce=[],H=new Map,D=0,P=-1,I=new Map,V=new Set,W=new Map,_e=new Map,ue=new Set,Ce=new Map,de=new Map,Oe=!1;function ct(){if(u=e.history.listen(T=>{let{action:R,location:O,delta:M}=T;if(Oe){Oe=!1;return}uo(de.size===0||M!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let z=Nl({currentLocation:g.location,nextLocation:O,historyAction:R});if(z&&M!=null){Oe=!0,e.history.go(M*-1),Zr(z,{state:"blocked",location:O,proceed(){Zr(z,{state:"proceeding",proceed:void 0,reset:void 0,location:O}),e.history.go(M)},reset(){let oe=new Map(g.blockers);oe.set(z,Ya),Le({blockers:oe})}});return}return _t(R,O)}),n){uM(t,$);let T=()=>pM(t,$);t.addEventListener("pagehide",T),K=()=>t.removeEventListener("pagehide",T)}return g.initialized||_t(He.Pop,g.location,{initialHydration:!0}),C}function wt(){u&&u(),K&&K(),p.clear(),E&&E.abort(),g.fetchers.forEach((T,R)=>an(R)),g.blockers.forEach((T,R)=>El(R))}function xe(T){return p.add(T),()=>p.delete(T)}function Le(T,R){R===void 0&&(R={}),g=Ve({},g,T);let O=[],M=[];d.v7_fetcherPersist&&g.fetchers.forEach((z,oe)=>{z.state==="idle"&&(ue.has(oe)?M.push(oe):O.push(oe))}),[...p].forEach(z=>z(g,{deletedFetchers:M,unstable_viewTransitionOpts:R.viewTransitionOpts,unstable_flushSync:R.flushSync===!0})),d.v7_fetcherPersist&&(O.forEach(z=>g.fetchers.delete(z)),M.forEach(z=>an(z)))}function et(T,R,O){var M,z;let{flushSync:oe}=O===void 0?{}:O,G=g.actionData!=null&&g.navigation.formMethod!=null&&un(g.navigation.formMethod)&&g.navigation.state==="loading"&&((M=T.state)==null?void 0:M._isRedirect)!==!0,Q;R.actionData?Object.keys(R.actionData).length>0?Q=R.actionData:Q=null:G?Q=g.actionData:Q=null;let Y=R.loaderData?w1(g.loaderData,R.loaderData,R.matches||[],R.errors):g.loaderData,pe=g.blockers;pe.size>0&&(pe=new Map(pe),pe.forEach((je,Me)=>pe.set(Me,Ya)));let Ae=k===!0||g.navigation.formMethod!=null&&un(g.navigation.formMethod)&&((z=T.state)==null?void 0:z._isRedirect)!==!0;i&&(l=i,i=void 0),q||w===He.Pop||(w===He.Push?e.history.push(T,T.state):w===He.Replace&&e.history.replace(T,T.state));let ie;if(w===He.Pop){let je=$.get(g.location.pathname);je&&je.has(T.pathname)?ie={currentLocation:g.location,nextLocation:T}:$.has(T.pathname)&&(ie={currentLocation:T,nextLocation:g.location})}else if(L){let je=$.get(g.location.pathname);je?je.add(T.pathname):(je=new Set([T.pathname]),$.set(g.location.pathname,je)),ie={currentLocation:g.location,nextLocation:T}}Le(Ve({},R,{actionData:Q,loaderData:Y,historyAction:w,location:T,initialized:!0,navigation:Id,revalidation:"idle",restoreScrollPosition:Ke(T,R.matches||g.matches),preventScrollReset:Ae,blockers:pe}),{viewTransitionOpts:ie,flushSync:oe===!0}),w=He.Pop,k=!1,L=!1,q=!1,X=!1,le=[],ce=[]}async function Bt(T,R){if(typeof T=="number"){e.history.go(T);return}let O=Xu(g.location,g.matches,c,d.v7_prependBasename,T,d.v7_relativeSplatPath,R==null?void 0:R.fromRouteId,R==null?void 0:R.relative),{path:M,submission:z,error:oe}=v1(d.v7_normalizeFormMethod,!1,O,R),G=g.location,Q=Gs(g.location,M,R&&R.state);Q=Ve({},Q,e.history.encodeLocation(Q));let Y=R&&R.replace!=null?R.replace:void 0,pe=He.Push;Y===!0?pe=He.Replace:Y===!1||z!=null&&un(z.formMethod)&&z.formAction===g.location.pathname+g.location.search&&(pe=He.Replace);let Ae=R&&"preventScrollReset"in R?R.preventScrollReset===!0:void 0,ie=(R&&R.unstable_flushSync)===!0,je=Nl({currentLocation:G,nextLocation:Q,historyAction:pe});if(je){Zr(je,{state:"blocked",location:Q,proceed(){Zr(je,{state:"proceeding",proceed:void 0,reset:void 0,location:Q}),Bt(T,R)},reset(){let Me=new Map(g.blockers);Me.set(je,Ya),Le({blockers:Me})}});return}return await _t(pe,Q,{submission:z,pendingError:oe,preventScrollReset:Ae,replace:R&&R.replace,enableViewTransition:R&&R.unstable_viewTransition,flushSync:ie})}function rn(){if(wo(),Le({revalidation:"loading"}),g.navigation.state!=="submitting"){if(g.navigation.state==="idle"){_t(g.historyAction,g.location,{startUninterruptedRevalidation:!0});return}_t(w||g.historyAction,g.navigation.location,{overrideNavigation:g.navigation})}}async function _t(T,R,O){E&&E.abort(),E=null,w=T,q=(O&&O.startUninterruptedRevalidation)===!0,Zc(g.location,g.matches),k=(O&&O.preventScrollReset)===!0,L=(O&&O.enableViewTransition)===!0;let M=i||l,z=O&&O.overrideNavigation,oe=Xo(M,R,c),G=(O&&O.flushSync)===!0;if(!oe){let Me=Wt(404,{pathname:R.pathname}),{matches:dt,route:tt}=_1(M);_o(),et(R,{matches:dt,loaderData:{},errors:{[tt.id]:Me}},{flushSync:G});return}if(g.initialized&&!X&&aM(g.location,R)&&!(O&&O.submission&&un(O.submission.formMethod))){et(R,{matches:oe},{flushSync:G});return}E=new AbortController;let Q=qa(e.history,R,E.signal,O&&O.submission),Y,pe;if(O&&O.pendingError)pe={[ws(oe).route.id]:O.pendingError};else if(O&&O.submission&&un(O.submission.formMethod)){let Me=await ar(Q,R,O.submission,oe,{replace:O.replace,flushSync:G});if(Me.shortCircuited)return;Y=Me.pendingActionData,pe=Me.pendingActionError,z=zd(R,O.submission),G=!1,Q=new Request(Q.url,{signal:Q.signal})}let{shortCircuited:Ae,loaderData:ie,errors:je}=await _l(Q,R,oe,z,O&&O.submission,O&&O.fetcherSubmission,O&&O.replace,O&&O.initialHydration===!0,G,Y,pe);Ae||(E=null,et(R,Ve({matches:oe},Y?{actionData:Y}:{},{loaderData:ie,errors:je})))}async function ar(T,R,O,M,z){z===void 0&&(z={}),wo();let oe=cM(R,O);Le({navigation:oe},{flushSync:z.flushSync===!0});let G,Q=Ju(M,R);if(!Q.route.action&&!Q.route.lazy)G={type:Fe.error,error:Wt(405,{method:T.method,pathname:R.pathname,routeId:Q.route.id})};else if(G=await Ga("action",T,Q,M,s,a,c,d.v7_relativeSplatPath),T.signal.aborted)return{shortCircuited:!0};if(no(G)){let Y;return z&&z.replace!=null?Y=z.replace:Y=G.location===g.location.pathname+g.location.search,await yn(g,G,{submission:O,replace:Y}),{shortCircuited:!0}}if(Qo(G)){let Y=ws(M,Q.route.id);return(z&&z.replace)!==!0&&(w=He.Push),{pendingActionData:{},pendingActionError:{[Y.route.id]:G.error}}}if(to(G))throw Wt(400,{type:"defer-action"});return{pendingActionData:{[Q.route.id]:G.data}}}async function _l(T,R,O,M,z,oe,G,Q,Y,pe,Ae){let ie=M||zd(R,z),je=z||oe||E1(ie),Me=i||l,[dt,tt]=b1(e.history,g,O,je,R,d.v7_partialHydration&&Q===!0,X,le,ce,ue,W,V,Me,c,pe,Ae);if(_o(Te=>!(O&&O.some(De=>De.route.id===Te))||dt&&dt.some(De=>De.route.id===Te)),P=++D,dt.length===0&&tt.length===0){let Te=sn();return et(R,Ve({matches:O,loaderData:{},errors:Ae||null},pe?{actionData:pe}:{},Te?{fetchers:new Map(g.fetchers)}:{}),{flushSync:Y}),{shortCircuited:!0}}if(!q&&(!d.v7_partialHydration||!Q)){tt.forEach(De=>{let jn=g.fetchers.get(De.key),Ll=Xa(void 0,jn?jn.data:void 0);g.fetchers.set(De.key,Ll)});let Te=pe||g.actionData;Le(Ve({navigation:ie},Te?Object.keys(Te).length===0?{actionData:null}:{actionData:Te}:{},tt.length>0?{fetchers:new Map(g.fetchers)}:{}),{flushSync:Y})}tt.forEach(Te=>{H.has(Te.key)&&Tt(Te.key),Te.controller&&H.set(Te.key,Te.controller)});let To=()=>tt.forEach(Te=>Tt(Te.key));E&&E.signal.addEventListener("abort",To);let{results:Kc,loaderResults:ko,fetcherResults:lr}=await Hr(g.matches,O,dt,tt,T);if(T.signal.aborted)return{shortCircuited:!0};E&&E.signal.removeEventListener("abort",To),tt.forEach(Te=>H.delete(Te.key));let Kr=T1(Kc);if(Kr){if(Kr.idx>=dt.length){let Te=tt[Kr.idx-dt.length].key;V.add(Te)}return await yn(g,Kr.result,{replace:G}),{shortCircuited:!0}}let{loaderData:Yc,errors:Gc}=C1(g,O,dt,ko,Ae,tt,lr,Ce);Ce.forEach((Te,De)=>{Te.subscribe(jn=>{(jn||Te.done)&&Ce.delete(De)})});let qc=sn(),Eo=Ma(P),Ol=qc||Eo||tt.length>0;return Ve({loaderData:Yc,errors:Gc},Ol?{fetchers:new Map(g.fetchers)}:{})}function Tl(T,R,O,M){if(o)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");H.has(T)&&Tt(T);let z=(M&&M.unstable_flushSync)===!0,oe=i||l,G=Xu(g.location,g.matches,c,d.v7_prependBasename,O,d.v7_relativeSplatPath,R,M==null?void 0:M.relative),Q=Xo(oe,G,c);if(!Q){Wr(T,R,Wt(404,{pathname:G}),{flushSync:z});return}let{path:Y,submission:pe,error:Ae}=v1(d.v7_normalizeFormMethod,!0,G,M);if(Ae){Wr(T,R,Ae,{flushSync:z});return}let ie=Ju(Q,Y);if(k=(M&&M.preventScrollReset)===!0,pe&&un(pe.formMethod)){$a(T,R,Y,ie,Q,z,pe);return}W.set(T,{routeId:R,path:Y}),bn(T,R,Y,ie,Q,z,pe)}async function $a(T,R,O,M,z,oe,G){if(wo(),W.delete(T),!M.route.action&&!M.route.lazy){let De=Wt(405,{method:G.formMethod,pathname:O,routeId:R});Wr(T,R,De,{flushSync:oe});return}let Q=g.fetchers.get(T);on(T,dM(G,Q),{flushSync:oe});let Y=new AbortController,pe=qa(e.history,O,Y.signal,G);H.set(T,Y);let Ae=D,ie=await Ga("action",pe,M,z,s,a,c,d.v7_relativeSplatPath);if(pe.signal.aborted){H.get(T)===Y&&H.delete(T);return}if(d.v7_fetcherPersist&&ue.has(T)){if(no(ie)||Qo(ie)){on(T,dr(void 0));return}}else{if(no(ie))if(H.delete(T),P>Ae){on(T,dr(void 0));return}else return V.add(T),on(T,Xa(G)),yn(g,ie,{fetcherSubmission:G});if(Qo(ie)){Wr(T,R,ie.error);return}}if(to(ie))throw Wt(400,{type:"defer-action"});let je=g.navigation.location||g.location,Me=qa(e.history,je,Y.signal),dt=i||l,tt=g.navigation.state!=="idle"?Xo(dt,g.navigation.location,c):g.matches;he(tt,"Didn't find any matches after fetcher action");let To=++D;I.set(T,To);let Kc=Xa(G,ie.data);g.fetchers.set(T,Kc);let[ko,lr]=b1(e.history,g,tt,G,je,!1,X,le,ce,ue,W,V,dt,c,{[M.route.id]:ie.data},void 0);lr.filter(De=>De.key!==T).forEach(De=>{let jn=De.key,Ll=g.fetchers.get(jn),u6=Xa(void 0,Ll?Ll.data:void 0);g.fetchers.set(jn,u6),H.has(jn)&&Tt(jn),De.controller&&H.set(jn,De.controller)}),Le({fetchers:new Map(g.fetchers)});let Kr=()=>lr.forEach(De=>Tt(De.key));Y.signal.addEventListener("abort",Kr);let{results:Yc,loaderResults:Gc,fetcherResults:qc}=await Hr(g.matches,tt,ko,lr,Me);if(Y.signal.aborted)return;Y.signal.removeEventListener("abort",Kr),I.delete(T),H.delete(T),lr.forEach(De=>H.delete(De.key));let Eo=T1(Yc);if(Eo){if(Eo.idx>=ko.length){let De=lr[Eo.idx-ko.length].key;V.add(De)}return yn(g,Eo.result)}let{loaderData:Ol,errors:Te}=C1(g,g.matches,ko,Gc,void 0,lr,qc,Ce);if(g.fetchers.has(T)){let De=dr(ie.data);g.fetchers.set(T,De)}Ma(To),g.navigation.state==="loading"&&To>P?(he(w,"Expected pending action"),E&&E.abort(),et(g.navigation.location,{matches:tt,loaderData:Ol,errors:Te,fetchers:new Map(g.fetchers)})):(Le({errors:Te,loaderData:w1(g.loaderData,Ol,tt,Te),fetchers:new Map(g.fetchers)}),X=!1)}async function bn(T,R,O,M,z,oe,G){let Q=g.fetchers.get(T);on(T,Xa(G,Q?Q.data:void 0),{flushSync:oe});let Y=new AbortController,pe=qa(e.history,O,Y.signal);H.set(T,Y);let Ae=D,ie=await Ga("loader",pe,M,z,s,a,c,d.v7_relativeSplatPath);if(to(ie)&&(ie=await X4(ie,pe.signal,!0)||ie),H.get(T)===Y&&H.delete(T),!pe.signal.aborted){if(ue.has(T)){on(T,dr(void 0));return}if(no(ie))if(P>Ae){on(T,dr(void 0));return}else{V.add(T),await yn(g,ie);return}if(Qo(ie)){Wr(T,R,ie.error);return}he(!to(ie),"Unhandled fetcher deferred data"),on(T,dr(ie.data))}}async function yn(T,R,O){let{submission:M,fetcherSubmission:z,replace:oe}=O===void 0?{}:O;R.revalidate&&(X=!0);let G=Gs(T.location,R.location,{_isRedirect:!0});if(he(G,"Expected a location on the redirect navigation"),n){let je=!1;if(R.reloadDocument)je=!0;else if(K4.test(R.location)){const Me=e.history.createURL(R.location);je=Me.origin!==t.location.origin||Or(Me.pathname,c)==null}if(je){oe?t.location.replace(R.location):t.location.assign(R.location);return}}E=null;let Q=oe===!0?He.Replace:He.Push,{formMethod:Y,formAction:pe,formEncType:Ae}=T.navigation;!M&&!z&&Y&&pe&&Ae&&(M=E1(T.navigation));let ie=M||z;if(XA.has(R.status)&&ie&&un(ie.formMethod))await _t(Q,G,{submission:Ve({},ie,{formAction:R.location}),preventScrollReset:k});else{let je=zd(G,M);await _t(Q,G,{overrideNavigation:je,fetcherSubmission:z,preventScrollReset:k})}}async function Hr(T,R,O,M,z){let oe=await Promise.all([...O.map(Y=>Ga("loader",z,Y,R,s,a,c,d.v7_relativeSplatPath)),...M.map(Y=>Y.matches&&Y.match&&Y.controller?Ga("loader",qa(e.history,Y.path,Y.controller.signal),Y.match,Y.matches,s,a,c,d.v7_relativeSplatPath):{type:Fe.error,error:Wt(404,{pathname:Y.path})})]),G=oe.slice(0,O.length),Q=oe.slice(O.length);return await Promise.all([k1(T,O,G,G.map(()=>z.signal),!1,g.loaderData),k1(T,M.map(Y=>Y.match),Q,M.map(Y=>Y.controller?Y.controller.signal:null),!0)]),{results:oe,loaderResults:G,fetcherResults:Q}}function wo(){X=!0,le.push(..._o()),W.forEach((T,R)=>{H.has(R)&&(ce.push(R),Tt(R))})}function on(T,R,O){O===void 0&&(O={}),g.fetchers.set(T,R),Le({fetchers:new Map(g.fetchers)},{flushSync:(O&&O.flushSync)===!0})}function Wr(T,R,O,M){M===void 0&&(M={});let z=ws(g.matches,R);an(T),Le({errors:{[z.route.id]:O},fetchers:new Map(g.fetchers)},{flushSync:(M&&M.flushSync)===!0})}function kl(T){return d.v7_fetcherPersist&&(_e.set(T,(_e.get(T)||0)+1),ue.has(T)&&ue.delete(T)),g.fetchers.get(T)||QA}function an(T){let R=g.fetchers.get(T);H.has(T)&&!(R&&R.state==="loading"&&I.has(T))&&Tt(T),W.delete(T),I.delete(T),V.delete(T),ue.delete(T),g.fetchers.delete(T)}function sr(T){if(d.v7_fetcherPersist){let R=(_e.get(T)||0)-1;R<=0?(_e.delete(T),ue.add(T)):_e.set(T,R)}else an(T);Le({fetchers:new Map(g.fetchers)})}function Tt(T){let R=H.get(T);he(R,"Expected fetch controller: "+T),R.abort(),H.delete(T)}function Aa(T){for(let R of T){let O=kl(R),M=dr(O.data);g.fetchers.set(R,M)}}function sn(){let T=[],R=!1;for(let O of V){let M=g.fetchers.get(O);he(M,"Expected fetcher: "+O),M.state==="loading"&&(V.delete(O),T.push(O),R=!0)}return Aa(T),R}function Ma(T){let R=[];for(let[O,M]of I)if(M<T){let z=g.fetchers.get(O);he(z,"Expected fetcher: "+O),z.state==="loading"&&(Tt(O),I.delete(O),R.push(O))}return Aa(R),R.length>0}function Hc(T,R){let O=g.blockers.get(T)||Ya;return de.get(T)!==R&&de.set(T,R),O}function El(T){g.blockers.delete(T),de.delete(T)}function Zr(T,R){let O=g.blockers.get(T)||Ya;he(O.state==="unblocked"&&R.state==="blocked"||O.state==="blocked"&&R.state==="blocked"||O.state==="blocked"&&R.state==="proceeding"||O.state==="blocked"&&R.state==="unblocked"||O.state==="proceeding"&&R.state==="unblocked","Invalid blocker state transition: "+O.state+" -> "+R.state);let M=new Map(g.blockers);M.set(T,R),Le({blockers:M})}function Nl(T){let{currentLocation:R,nextLocation:O,historyAction:M}=T;if(de.size===0)return;de.size>1&&uo(!1,"A router only supports one blocker at a time");let z=Array.from(de.entries()),[oe,G]=z[z.length-1],Q=g.blockers.get(oe);if(!(Q&&Q.state==="proceeding")&&G({currentLocation:R,nextLocation:O,historyAction:M}))return oe}function _o(T){let R=[];return Ce.forEach((O,M)=>{(!T||T(M))&&(O.cancel(),R.push(M),Ce.delete(M))}),R}function Wc(T,R,O){if(m=T,S=R,b=O||null,!j&&g.navigation===Id){j=!0;let M=Ke(g.location,g.matches);M!=null&&Le({restoreScrollPosition:M})}return()=>{m=null,S=null,b=null}}function Rl(T,R){return b&&b(T,R.map(M=>EA(M,g.loaderData)))||T.key}function Zc(T,R){if(m&&S){let O=Rl(T,R);m[O]=S()}}function Ke(T,R){if(m){let O=Rl(T,R),M=m[O];if(typeof M=="number")return M}return null}function xt(T){s={},i=Gu(T,a,void 0,s)}return C={get basename(){return c},get future(){return d},get state(){return g},get routes(){return l},get window(){return t},initialize:ct,subscribe:xe,enableScrollRestoration:Wc,navigate:Bt,fetch:Tl,revalidate:rn,createHref:T=>e.history.createHref(T),encodeLocation:T=>e.history.encodeLocation(T),getFetcher:kl,deleteFetcher:sr,dispose:wt,getBlocker:Hc,deleteBlocker:El,_internalFetchControllers:H,_internalActiveDeferreds:Ce,_internalSetRoutes:xt},C}function tM(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function Xu(e,t,n,o,a,s,l,i){let c,d;if(l){c=[];for(let p of t)if(c.push(p),p.route.id===l){d=p;break}}else c=t,d=t[t.length-1];let u=Kh(a||".",Zh(c,s),Or(e.pathname,n)||e.pathname,i==="path");return a==null&&(u.search=e.search,u.hash=e.hash),(a==null||a===""||a===".")&&d&&d.route.index&&!Gh(u.search)&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),o&&n!=="/"&&(u.pathname=u.pathname==="/"?n:Zn([n,u.pathname])),po(u)}function v1(e,t,n,o){if(!o||!tM(o))return{path:n};if(o.formMethod&&!iM(o.formMethod))return{path:n,error:Wt(405,{method:o.formMethod})};let a=()=>({path:n,error:Wt(400,{type:"invalid-body"})}),s=o.formMethod||"get",l=e?s.toUpperCase():s.toLowerCase(),i=q4(n);if(o.body!==void 0){if(o.formEncType==="text/plain"){if(!un(l))return a();let m=typeof o.body=="string"?o.body:o.body instanceof FormData||o.body instanceof URLSearchParams?Array.from(o.body.entries()).reduce((b,S)=>{let[j,_]=S;return""+b+j+"="+_+`
`},""):String(o.body);return{path:n,submission:{formMethod:l,formAction:i,formEncType:o.formEncType,formData:void 0,json:void 0,text:m}}}else if(o.formEncType==="application/json"){if(!un(l))return a();try{let m=typeof o.body=="string"?JSON.parse(o.body):o.body;return{path:n,submission:{formMethod:l,formAction:i,formEncType:o.formEncType,formData:void 0,json:m,text:void 0}}}catch{return a()}}}he(typeof FormData=="function","FormData is not available in this environment");let c,d;if(o.formData)c=Qu(o.formData),d=o.formData;else if(o.body instanceof FormData)c=Qu(o.body),d=o.body;else if(o.body instanceof URLSearchParams)c=o.body,d=S1(c);else if(o.body==null)c=new URLSearchParams,d=new FormData;else try{c=new URLSearchParams(o.body),d=S1(c)}catch{return a()}let u={formMethod:l,formAction:i,formEncType:o&&o.formEncType||"application/x-www-form-urlencoded",formData:d,json:void 0,text:void 0};if(un(u.formMethod))return{path:n,submission:u};let p=or(n);return t&&p.search&&Gh(p.search)&&c.append("index",""),p.search="?"+c,{path:po(p),submission:u}}function nM(e,t){let n=e;if(t){let o=e.findIndex(a=>a.route.id===t);o>=0&&(n=e.slice(0,o))}return n}function b1(e,t,n,o,a,s,l,i,c,d,u,p,m,b,S,j){let _=j?Object.values(j)[0]:S?Object.values(S)[0]:void 0,x=e.createURL(t.location),h=e.createURL(a),f=j?Object.keys(j)[0]:void 0,C=nM(n,f).filter((w,k)=>{let{route:E}=w;if(E.lazy)return!0;if(E.loader==null)return!1;if(s)return E.loader.hydrate?!0:t.loaderData[E.id]===void 0&&(!t.errors||t.errors[E.id]===void 0);if(rM(t.loaderData,t.matches[k],w)||i.some(K=>K===w.route.id))return!0;let L=t.matches[k],$=w;return y1(w,Ve({currentUrl:x,currentParams:L.params,nextUrl:h,nextParams:$.params},o,{actionResult:_,defaultShouldRevalidate:l||x.pathname+x.search===h.pathname+h.search||x.search!==h.search||G4(L,$)}))}),g=[];return u.forEach((w,k)=>{if(s||!n.some(q=>q.route.id===w.routeId)||d.has(k))return;let E=Xo(m,w.path,b);if(!E){g.push({key:k,routeId:w.routeId,path:w.path,matches:null,match:null,controller:null});return}let L=t.fetchers.get(k),$=Ju(E,w.path),K=!1;p.has(k)?K=!1:c.includes(k)?K=!0:L&&L.state!=="idle"&&L.data===void 0?K=l:K=y1($,Ve({currentUrl:x,currentParams:t.matches[t.matches.length-1].params,nextUrl:h,nextParams:n[n.length-1].params},o,{actionResult:_,defaultShouldRevalidate:l})),K&&g.push({key:k,routeId:w.routeId,path:w.path,matches:E,match:$,controller:new AbortController})}),[C,g]}function rM(e,t,n){let o=!t||n.route.id!==t.route.id,a=e[n.route.id]===void 0;return o||a}function G4(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function y1(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function j1(e,t,n){if(!e.lazy)return;let o=await e.lazy();if(!e.lazy)return;let a=n[e.id];he(a,"No route found in manifest");let s={};for(let l in o){let c=a[l]!==void 0&&l!=="hasErrorBoundary";uo(!c,'Route "'+a.id+'" has a static property "'+l+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+l+'" will be ignored.')),!c&&!TA.has(l)&&(s[l]=o[l])}Object.assign(a,s),Object.assign(a,Ve({},t(a),{lazy:void 0}))}async function Ga(e,t,n,o,a,s,l,i,c){c===void 0&&(c={});let d,u,p,m=j=>{let _,x=new Promise((h,f)=>_=f);return p=()=>_(),t.signal.addEventListener("abort",p),Promise.race([j({request:t,params:n.params,context:c.requestContext}),x])};try{let j=n.route[e];if(n.route.lazy)if(j){let _,x=await Promise.all([m(j).catch(h=>{_=h}),j1(n.route,s,a)]);if(_)throw _;u=x[0]}else if(await j1(n.route,s,a),j=n.route[e],j)u=await m(j);else if(e==="action"){let _=new URL(t.url),x=_.pathname+_.search;throw Wt(405,{method:t.method,pathname:x,routeId:n.route.id})}else return{type:Fe.data,data:void 0};else if(j)u=await m(j);else{let _=new URL(t.url),x=_.pathname+_.search;throw Wt(404,{pathname:x})}he(u!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(j){d=Fe.error,u=j}finally{p&&t.signal.removeEventListener("abort",p)}if(lM(u)){let j=u.status;if(qA.has(j)){let x=u.headers.get("Location");if(he(x,"Redirects returned/thrown from loaders/actions must have a Location header"),!K4.test(x))x=Xu(new URL(t.url),o.slice(0,o.indexOf(n)+1),l,!0,x,i);else if(!c.isStaticRequest){let h=new URL(t.url),f=x.startsWith("//")?new URL(h.protocol+x):new URL(x),y=Or(f.pathname,l)!=null;f.origin===h.origin&&y&&(x=f.pathname+f.search+f.hash)}if(c.isStaticRequest)throw u.headers.set("Location",x),u;return{type:Fe.redirect,status:j,location:x,revalidate:u.headers.get("X-Remix-Revalidate")!==null,reloadDocument:u.headers.get("X-Remix-Reload-Document")!==null}}if(c.isRouteRequest)throw{type:d===Fe.error?Fe.error:Fe.data,response:u};let _;try{let x=u.headers.get("Content-Type");x&&/\bapplication\/json\b/.test(x)?_=await u.json():_=await u.text()}catch(x){return{type:Fe.error,error:x}}return d===Fe.error?{type:d,error:new Yh(j,u.statusText,_),headers:u.headers}:{type:Fe.data,data:_,statusCode:u.status,headers:u.headers}}if(d===Fe.error)return{type:d,error:u};if(sM(u)){var b,S;return{type:Fe.deferred,deferredData:u,statusCode:(b=u.init)==null?void 0:b.status,headers:((S=u.init)==null?void 0:S.headers)&&new Headers(u.init.headers)}}return{type:Fe.data,data:u}}function qa(e,t,n,o){let a=e.createURL(q4(t)).toString(),s={signal:n};if(o&&un(o.formMethod)){let{formMethod:l,formEncType:i}=o;s.method=l.toUpperCase(),i==="application/json"?(s.headers=new Headers({"Content-Type":i}),s.body=JSON.stringify(o.json)):i==="text/plain"?s.body=o.text:i==="application/x-www-form-urlencoded"&&o.formData?s.body=Qu(o.formData):s.body=o.formData}return new Request(a,s)}function Qu(e){let t=new URLSearchParams;for(let[n,o]of e.entries())t.append(n,typeof o=="string"?o:o.name);return t}function S1(e){let t=new FormData;for(let[n,o]of e.entries())t.append(n,o);return t}function oM(e,t,n,o,a){let s={},l=null,i,c=!1,d={};return n.forEach((u,p)=>{let m=t[p].route.id;if(he(!no(u),"Cannot handle redirect results in processLoaderData"),Qo(u)){let b=ws(e,m),S=u.error;o&&(S=Object.values(o)[0],o=void 0),l=l||{},l[b.route.id]==null&&(l[b.route.id]=S),s[m]=void 0,c||(c=!0,i=W4(u.error)?u.error.status:500),u.headers&&(d[m]=u.headers)}else to(u)?(a.set(m,u.deferredData),s[m]=u.deferredData.data):s[m]=u.data,u.statusCode!=null&&u.statusCode!==200&&!c&&(i=u.statusCode),u.headers&&(d[m]=u.headers)}),o&&(l=o,s[Object.keys(o)[0]]=void 0),{loaderData:s,errors:l,statusCode:i||200,loaderHeaders:d}}function C1(e,t,n,o,a,s,l,i){let{loaderData:c,errors:d}=oM(t,n,o,a,i);for(let u=0;u<s.length;u++){let{key:p,match:m,controller:b}=s[u];he(l!==void 0&&l[u]!==void 0,"Did not find corresponding fetcher result");let S=l[u];if(!(b&&b.signal.aborted))if(Qo(S)){let j=ws(e.matches,m==null?void 0:m.route.id);d&&d[j.route.id]||(d=Ve({},d,{[j.route.id]:S.error})),e.fetchers.delete(p)}else if(no(S))he(!1,"Unhandled fetcher revalidation redirect");else if(to(S))he(!1,"Unhandled fetcher deferred data");else{let j=dr(S.data);e.fetchers.set(p,j)}}return{loaderData:c,errors:d}}function w1(e,t,n,o){let a=Ve({},t);for(let s of n){let l=s.route.id;if(t.hasOwnProperty(l)?t[l]!==void 0&&(a[l]=t[l]):e[l]!==void 0&&s.route.loader&&(a[l]=e[l]),o&&o.hasOwnProperty(l))break}return a}function ws(e,t){return(t?e.slice(0,e.findIndex(o=>o.route.id===t)+1):[...e]).reverse().find(o=>o.route.hasErrorBoundary===!0)||e[0]}function _1(e){let t=e.length===1?e[0]:e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function Wt(e,t){let{pathname:n,routeId:o,method:a,type:s}=t===void 0?{}:t,l="Unknown Server Error",i="Unknown @remix-run/router error";return e===400?(l="Bad Request",a&&n&&o?i="You made a "+a+' request to "'+n+'" but '+('did not provide a `loader` for route "'+o+'", ')+"so there is no way to handle the request.":s==="defer-action"?i="defer() is not supported in actions":s==="invalid-body"&&(i="Unable to encode submission body")):e===403?(l="Forbidden",i='Route "'+o+'" does not match URL "'+n+'"'):e===404?(l="Not Found",i='No route matches URL "'+n+'"'):e===405&&(l="Method Not Allowed",a&&n&&o?i="You made a "+a.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+o+'", ')+"so there is no way to handle the request.":a&&(i='Invalid request method "'+a.toUpperCase()+'"')),new Yh(e||500,l,new Error(i),!0)}function T1(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(no(n))return{result:n,idx:t}}}function q4(e){let t=typeof e=="string"?or(e):e;return po(Ve({},t,{hash:""}))}function aM(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function to(e){return e.type===Fe.deferred}function Qo(e){return e.type===Fe.error}function no(e){return(e&&e.type)===Fe.redirect}function sM(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function lM(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function iM(e){return GA.has(e.toLowerCase())}function un(e){return KA.has(e.toLowerCase())}async function k1(e,t,n,o,a,s){for(let l=0;l<n.length;l++){let i=n[l],c=t[l];if(!c)continue;let d=e.find(p=>p.route.id===c.route.id),u=d!=null&&!G4(d,c)&&(s&&s[c.route.id])!==void 0;if(to(i)&&(a||u)){let p=o[l];he(p,"Expected an AbortSignal for revalidating fetcher deferred result"),await X4(i,p,a).then(m=>{m&&(n[l]=m||n[l])})}}}async function X4(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:Fe.data,data:e.deferredData.unwrappedData}}catch(a){return{type:Fe.error,error:a}}return{type:Fe.data,data:e.deferredData.data}}}function Gh(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function Ju(e,t){let n=typeof t=="string"?or(t).search:t.search;if(e[e.length-1].route.index&&Gh(n||""))return e[e.length-1];let o=H4(e);return o[o.length-1]}function E1(e){let{formMethod:t,formAction:n,formEncType:o,text:a,formData:s,json:l}=e;if(!(!t||!n||!o)){if(a!=null)return{formMethod:t,formAction:n,formEncType:o,formData:void 0,json:void 0,text:a};if(s!=null)return{formMethod:t,formAction:n,formEncType:o,formData:s,json:void 0,text:void 0};if(l!==void 0)return{formMethod:t,formAction:n,formEncType:o,formData:void 0,json:l,text:void 0}}}function zd(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function cM(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function Xa(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function dM(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function dr(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function uM(e,t){try{let n=e.sessionStorage.getItem(Y4);if(n){let o=JSON.parse(n);for(let[a,s]of Object.entries(o||{}))s&&Array.isArray(s)&&t.set(a,new Set(s||[]))}}catch{}}function pM(e,t){if(t.size>0){let n={};for(let[o,a]of t)n[o]=[...a];try{e.sessionStorage.setItem(Y4,JSON.stringify(n))}catch(o){uo(!1,"Failed to save applied view transitions in sessionStorage ("+o+").")}}}/**
 * React Router v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qs(){return qs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},qs.apply(this,arguments)}const jl=v.createContext(null),qh=v.createContext(null),Ur=v.createContext(null),Vc=v.createContext(null),Vr=v.createContext({outlet:null,matches:[],isDataRoute:!1}),Q4=v.createContext(null);function hM(e,t){let{relative:n}=t===void 0?{}:t;Sl()||he(!1);let{basename:o,navigator:a}=v.useContext(Ur),{hash:s,pathname:l,search:i}=Cl(e,{relative:n}),c=l;return o!=="/"&&(c=l==="/"?o:Zn([o,l])),a.createHref({pathname:c,search:i,hash:s})}function Sl(){return v.useContext(Vc)!=null}function Ba(){return Sl()||he(!1),v.useContext(Vc).location}function J4(e){v.useContext(Ur).static||v.useLayoutEffect(e)}function fM(){let{isDataRoute:e}=v.useContext(Vr);return e?EM():mM()}function mM(){Sl()||he(!1);let e=v.useContext(jl),{basename:t,future:n,navigator:o}=v.useContext(Ur),{matches:a}=v.useContext(Vr),{pathname:s}=Ba(),l=JSON.stringify(Zh(a,n.v7_relativeSplatPath)),i=v.useRef(!1);return J4(()=>{i.current=!0}),v.useCallback(function(d,u){if(u===void 0&&(u={}),!i.current)return;if(typeof d=="number"){o.go(d);return}let p=Kh(d,JSON.parse(l),s,u.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:Zn([t,p.pathname])),(u.replace?o.replace:o.push)(p,u.state,u)},[t,o,l,s,e])}const xM=v.createContext(null);function gM(e){let t=v.useContext(Vr).outlet;return t&&v.createElement(xM.Provider,{value:e},t)}function Cl(e,t){let{relative:n}=t===void 0?{}:t,{future:o}=v.useContext(Ur),{matches:a}=v.useContext(Vr),{pathname:s}=Ba(),l=JSON.stringify(Zh(a,o.v7_relativeSplatPath));return v.useMemo(()=>Kh(e,JSON.parse(l),s,n==="path"),[e,l,s,n])}function vM(e,t,n,o){Sl()||he(!1);let{navigator:a}=v.useContext(Ur),{matches:s}=v.useContext(Vr),l=s[s.length-1],i=l?l.params:{};l&&l.pathname;let c=l?l.pathnameBase:"/";l&&l.route;let d=Ba(),u;if(t){var p;let _=typeof t=="string"?or(t):t;c==="/"||(p=_.pathname)!=null&&p.startsWith(c)||he(!1),u=_}else u=d;let m=u.pathname||"/",b=c==="/"?m:m.slice(c.length)||"/",S=Xo(e,{pathname:b}),j=CM(S&&S.map(_=>Object.assign({},_,{params:Object.assign({},i,_.params),pathname:Zn([c,a.encodeLocation?a.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?c:Zn([c,a.encodeLocation?a.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),s,n,o);return t&&j?v.createElement(Vc.Provider,{value:{location:qs({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:He.Pop}},j):j}function bM(){let e=kM(),t=W4(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},t),n?v.createElement("pre",{style:a},n):null,s)}const yM=v.createElement(bM,null);class jM extends v.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?v.createElement(Vr.Provider,{value:this.props.routeContext},v.createElement(Q4.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function SM(e){let{routeContext:t,match:n,children:o}=e,a=v.useContext(jl);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),v.createElement(Vr.Provider,{value:t},o)}function CM(e,t,n,o){var a;if(t===void 0&&(t=[]),n===void 0&&(n=null),o===void 0&&(o=null),e==null){var s;if((s=n)!=null&&s.errors)e=n.matches;else return null}let l=e,i=(a=n)==null?void 0:a.errors;if(i!=null){let u=l.findIndex(p=>p.route.id&&(i==null?void 0:i[p.route.id]));u>=0||he(!1),l=l.slice(0,Math.min(l.length,u+1))}let c=!1,d=-1;if(n&&o&&o.v7_partialHydration)for(let u=0;u<l.length;u++){let p=l[u];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(d=u),p.route.id){let{loaderData:m,errors:b}=n,S=p.route.loader&&m[p.route.id]===void 0&&(!b||b[p.route.id]===void 0);if(p.route.lazy||S){c=!0,d>=0?l=l.slice(0,d+1):l=[l[0]];break}}}return l.reduceRight((u,p,m)=>{let b,S=!1,j=null,_=null;n&&(b=i&&p.route.id?i[p.route.id]:void 0,j=p.route.errorElement||yM,c&&(d<0&&m===0?(NM("route-fallback",!1),S=!0,_=null):d===m&&(S=!0,_=p.route.hydrateFallbackElement||null)));let x=t.concat(l.slice(0,m+1)),h=()=>{let f;return b?f=j:S?f=_:p.route.Component?f=v.createElement(p.route.Component,null):p.route.element?f=p.route.element:f=u,v.createElement(SM,{match:p,routeContext:{outlet:u,matches:x,isDataRoute:n!=null},children:f})};return n&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?v.createElement(jM,{location:n.location,revalidation:n.revalidation,component:j,error:b,children:h(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):h()},null)}var e5=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(e5||{}),cc=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(cc||{});function wM(e){let t=v.useContext(jl);return t||he(!1),t}function _M(e){let t=v.useContext(qh);return t||he(!1),t}function TM(e){let t=v.useContext(Vr);return t||he(!1),t}function t5(e){let t=TM(),n=t.matches[t.matches.length-1];return n.route.id||he(!1),n.route.id}function kM(){var e;let t=v.useContext(Q4),n=_M(cc.UseRouteError),o=t5(cc.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[o]}function EM(){let{router:e}=wM(e5.UseNavigateStable),t=t5(cc.UseNavigateStable),n=v.useRef(!1);return J4(()=>{n.current=!0}),v.useCallback(function(a,s){s===void 0&&(s={}),n.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,qs({fromRouteId:t},s)))},[e,t])}const N1={};function NM(e,t,n){!t&&!N1[e]&&(N1[e]=!0)}function RM(e){return gM(e.context)}function OM(e){let{basename:t="/",children:n=null,location:o,navigationType:a=He.Pop,navigator:s,static:l=!1,future:i}=e;Sl()&&he(!1);let c=t.replace(/^\/*/,"/"),d=v.useMemo(()=>({basename:c,navigator:s,static:l,future:qs({v7_relativeSplatPath:!1},i)}),[c,i,s,l]);typeof o=="string"&&(o=or(o));let{pathname:u="/",search:p="",hash:m="",state:b=null,key:S="default"}=o,j=v.useMemo(()=>{let _=Or(u,c);return _==null?null:{location:{pathname:_,search:p,hash:m,state:b,key:S},navigationType:a}},[c,u,p,m,b,S,a]);return j==null?null:v.createElement(Ur.Provider,{value:d},v.createElement(Vc.Provider,{children:n,value:j}))}new Promise(()=>{});function LM(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:v.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(t,{hydrateFallbackElement:v.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:v.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ma(){return ma=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},ma.apply(this,arguments)}function n5(e,t){if(e==null)return{};var n={},o=Object.keys(e),a,s;for(s=0;s<o.length;s++)a=o[s],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function DM(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function BM(e,t){return e.button===0&&(!t||t==="_self")&&!DM(e)}const $M=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],AM=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"];function MM(e,t){return eM({basename:t==null?void 0:t.basename,future:ma({},t==null?void 0:t.future,{v7_prependBasename:!0}),history:CA({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||PM(),routes:e,mapRouteProperties:LM,window:t==null?void 0:t.window}).initialize()}function PM(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=ma({},t,{errors:IM(t.errors)})),t}function IM(e){if(!e)return null;let t=Object.entries(e),n={};for(let[o,a]of t)if(a&&a.__type==="RouteErrorResponse")n[o]=new Yh(a.status,a.statusText,a.data,a.internal===!0);else if(a&&a.__type==="Error"){if(a.__subType){let s=window[a.__subType];if(typeof s=="function")try{let l=new s(a.message);l.stack="",n[o]=l}catch{}}if(n[o]==null){let s=new Error(a.message);s.stack="",n[o]=s}}else n[o]=a;return n}const r5=v.createContext({isTransitioning:!1}),zM=v.createContext(new Map),FM="startTransition",R1=N6[FM],UM="flushSync",O1=zb[UM];function VM(e){R1?R1(e):e()}function Qa(e){O1?O1(e):e()}class HM{constructor(){this.status="pending",this.promise=new Promise((t,n)=>{this.resolve=o=>{this.status==="pending"&&(this.status="resolved",t(o))},this.reject=o=>{this.status==="pending"&&(this.status="rejected",n(o))}})}}function WM(e){let{fallbackElement:t,router:n,future:o}=e,[a,s]=v.useState(n.state),[l,i]=v.useState(),[c,d]=v.useState({isTransitioning:!1}),[u,p]=v.useState(),[m,b]=v.useState(),[S,j]=v.useState(),_=v.useRef(new Map),{v7_startTransition:x}=o||{},h=v.useCallback(w=>{x?VM(w):w()},[x]),f=v.useCallback((w,k)=>{let{deletedFetchers:E,unstable_flushSync:L,unstable_viewTransitionOpts:$}=k;E.forEach(q=>_.current.delete(q)),w.fetchers.forEach((q,X)=>{q.data!==void 0&&_.current.set(X,q.data)});let K=n.window==null||typeof n.window.document.startViewTransition!="function";if(!$||K){L?Qa(()=>s(w)):h(()=>s(w));return}if(L){Qa(()=>{m&&(u&&u.resolve(),m.skipTransition()),d({isTransitioning:!0,flushSync:!0,currentLocation:$.currentLocation,nextLocation:$.nextLocation})});let q=n.window.document.startViewTransition(()=>{Qa(()=>s(w))});q.finished.finally(()=>{Qa(()=>{p(void 0),b(void 0),i(void 0),d({isTransitioning:!1})})}),Qa(()=>b(q));return}m?(u&&u.resolve(),m.skipTransition(),j({state:w,currentLocation:$.currentLocation,nextLocation:$.nextLocation})):(i(w),d({isTransitioning:!0,flushSync:!1,currentLocation:$.currentLocation,nextLocation:$.nextLocation}))},[n.window,m,u,_,h]);v.useLayoutEffect(()=>n.subscribe(f),[n,f]),v.useEffect(()=>{c.isTransitioning&&!c.flushSync&&p(new HM)},[c]),v.useEffect(()=>{if(u&&l&&n.window){let w=l,k=u.promise,E=n.window.document.startViewTransition(async()=>{h(()=>s(w)),await k});E.finished.finally(()=>{p(void 0),b(void 0),i(void 0),d({isTransitioning:!1})}),b(E)}},[h,l,u,n.window]),v.useEffect(()=>{u&&l&&a.location.key===l.location.key&&u.resolve()},[u,m,a.location,l]),v.useEffect(()=>{!c.isTransitioning&&S&&(i(S.state),d({isTransitioning:!0,flushSync:!1,currentLocation:S.currentLocation,nextLocation:S.nextLocation}),j(void 0))},[c.isTransitioning,S]),v.useEffect(()=>{},[]);let y=v.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:w=>n.navigate(w),push:(w,k,E)=>n.navigate(w,{state:k,preventScrollReset:E==null?void 0:E.preventScrollReset}),replace:(w,k,E)=>n.navigate(w,{replace:!0,state:k,preventScrollReset:E==null?void 0:E.preventScrollReset})}),[n]),C=n.basename||"/",g=v.useMemo(()=>({router:n,navigator:y,static:!1,basename:C}),[n,y,C]);return v.createElement(v.Fragment,null,v.createElement(jl.Provider,{value:g},v.createElement(qh.Provider,{value:a},v.createElement(zM.Provider,{value:_.current},v.createElement(r5.Provider,{value:c},v.createElement(OM,{basename:C,location:a.location,navigationType:a.historyAction,navigator:y,future:{v7_relativeSplatPath:n.future.v7_relativeSplatPath}},a.initialized||n.future.v7_partialHydration?v.createElement(ZM,{routes:n.routes,future:n.future,state:a}):t))))),null)}function ZM(e){let{routes:t,future:n,state:o}=e;return vM(t,void 0,o,n)}const KM=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",YM=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,GM=v.forwardRef(function(t,n){let{onClick:o,relative:a,reloadDocument:s,replace:l,state:i,target:c,to:d,preventScrollReset:u,unstable_viewTransition:p}=t,m=n5(t,$M),{basename:b}=v.useContext(Ur),S,j=!1;if(typeof d=="string"&&YM.test(d)&&(S=d,KM))try{let f=new URL(window.location.href),y=d.startsWith("//")?new URL(f.protocol+d):new URL(d),C=Or(y.pathname,b);y.origin===f.origin&&C!=null?d=C+y.search+y.hash:j=!0}catch{}let _=hM(d,{relative:a}),x=QM(d,{replace:l,state:i,target:c,preventScrollReset:u,relative:a,unstable_viewTransition:p});function h(f){o&&o(f),f.defaultPrevented||x(f)}return v.createElement("a",ma({},m,{href:S||_,onClick:j||s?o:h,ref:n,target:c}))}),qM=v.forwardRef(function(t,n){let{"aria-current":o="page",caseSensitive:a=!1,className:s="",end:l=!1,style:i,to:c,unstable_viewTransition:d,children:u}=t,p=n5(t,AM),m=Cl(c,{relative:p.relative}),b=Ba(),S=v.useContext(qh),{navigator:j}=v.useContext(Ur),_=S!=null&&JM(m)&&d===!0,x=j.encodeLocation?j.encodeLocation(m).pathname:m.pathname,h=b.pathname,f=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;a||(h=h.toLowerCase(),f=f?f.toLowerCase():null,x=x.toLowerCase());const y=x!=="/"&&x.endsWith("/")?x.length-1:x.length;let C=h===x||!l&&h.startsWith(x)&&h.charAt(y)==="/",g=f!=null&&(f===x||!l&&f.startsWith(x)&&f.charAt(x.length)==="/"),w={isActive:C,isPending:g,isTransitioning:_},k=C?o:void 0,E;typeof s=="function"?E=s(w):E=[s,C?"active":null,g?"pending":null,_?"transitioning":null].filter(Boolean).join(" ");let L=typeof i=="function"?i(w):i;return v.createElement(GM,ma({},p,{"aria-current":k,className:E,ref:n,style:L,to:c,unstable_viewTransition:d}),typeof u=="function"?u(w):u)});var ep;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(ep||(ep={}));var L1;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(L1||(L1={}));function XM(e){let t=v.useContext(jl);return t||he(!1),t}function QM(e,t){let{target:n,replace:o,state:a,preventScrollReset:s,relative:l,unstable_viewTransition:i}=t===void 0?{}:t,c=fM(),d=Ba(),u=Cl(e,{relative:l});return v.useCallback(p=>{if(BM(p,n)){p.preventDefault();let m=o!==void 0?o:po(d)===po(u);c(e,{replace:m,state:a,preventScrollReset:s,relative:l,unstable_viewTransition:i})}},[d,c,u,o,a,n,e,s,l,i])}function JM(e,t){t===void 0&&(t={});let n=v.useContext(r5);n==null&&he(!1);let{basename:o}=XM(ep.useViewTransitionState),a=Cl(e,{relative:t.relative});if(!n.isTransitioning)return!1;let s=Or(n.currentLocation.pathname,o)||n.currentLocation.pathname,l=Or(n.nextLocation.pathname,o)||n.nextLocation.pathname;return qu(a.pathname,l)!=null||qu(a.pathname,s)!=null}const Ln=({to:e,className:t="",exact:n,onClick:o,label:a,style:s,...l})=>r.jsx(qM,{to:e,onClick:o,end:n&&"end",className:({isActive:i})=>`${t} ${i?"active":""}`,"aria-label":a,style:s,children:r.jsx(Ca,{...l})}),o5=()=>r.jsx(N,{code:"pager",Component:jA,Source:SA,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"pager"})," property can be used to pass configuration options to the ",r.jsx(Ln,{to:"/components/Pager",text:"Pager"})," component displayed underneath the datatable."]})}),eP=Object.freeze(Object.defineProperty({__proto__:null,default:o5},Symbol.toStringTag,{value:"Module"})),tP=`export const animals = [
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
`,a5=()=>r.jsxs(F,{code:"rows",children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"rows"})," property is used to provide the data that you want to display.  It should be an array of objects.  The object can contain any data."]}),r.jsxs("p",{children:["In these examples we're using this data for the ",r.jsx("code",{children:"rows"}),"."]}),r.jsx("div",{className:"example",children:r.jsx("div",{className:"source",children:r.jsx(Un,{code:tP,language:"js"})})})]}),nP=Object.freeze(Object.defineProperty({__proto__:null,default:a5},Symbol.toStringTag,{value:"Module"})),rP=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Datatable"}),r.jsx($4,{}),r.jsxs(Ze,{tocName:"datatable",children:[r.jsx(se,{title:"Properties"}),r.jsx(a5,{}),r.jsx(P4,{}),r.jsx(F4,{}),r.jsx(A4,{}),r.jsx(o5,{}),r.jsx(se,{title:"Column Properties"}),r.jsx(z4,{}),r.jsx(M4,{}),r.jsx(I4,{})]})]}),oP=Object.freeze(Object.defineProperty({__proto__:null,default:rP},Symbol.toStringTag,{value:"Module"})),aP=()=>r.jsx(Je,{summary:"Click to reveal",children:"This is the content that is revealed."}),sP=`import { Details } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Details } from '@abw/badger-react-ui

const DetailsExample = () =>
  <Details summary="Click to reveal">
    This is the content that is revealed.
  </Details>

export default DetailsExample`,s5=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Details"})," component displays a summary with revealable content using the native HTML ",r.jsx("code",{children:"details"})," element."]}),r.jsx(re,{Component:aP,code:sP})]}),lP=Object.freeze(Object.defineProperty({__proto__:null,default:s5},Symbol.toStringTag,{value:"Module"})),iP=()=>r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(Je,{summary:"Bordered",border:!0,children:"This is the content that is revealed."}),r.jsx(Je,{summary:"Bordered and Lined",border:!0,lined:!0,children:"This is the content that is revealed."}),r.jsx(Je,{summary:"Wide Border",border:3,lined:!0,children:"This is the content that is revealed."})]}),cP=`import React from 'react'
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

export default DetailsExample`,l5=()=>r.jsx(N,{code:"border",Component:iP,Source:cP,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"border"})," property can be used to add a CSS class to add a border around the component.  By itself it will add a one pixel border.  You can also set it to an integer (in pixels) for a wider border.  The same border width will also be applied to the line separating the summary and content when the ",r.jsx("code",{children:"lined"})," ","property is used."]})}),dP=Object.freeze(Object.defineProperty({__proto__:null,default:l5},Symbol.toStringTag,{value:"Module"})),uP=()=>r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(Je,{summary:"Blue Border",color:"blue",border:!0,lined:!0,children:"This is the content that is revealed."}),r.jsx(Je,{summary:"Blue Shaded",color:"blue",shaded:!0,lined:!0,border:!0,children:"This is the content that is revealed."})]}),pP=`import React from 'react'
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

export default DetailsExample`,i5=()=>r.jsx(N,{code:"color",Component:uP,Source:pP,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"color"})," property can be used to set the color range. It is most commonly used in conjunction with the ",r.jsx("code",{children:"border"}),","," ",r.jsx("code",{children:"lined"})," and ",r.jsx("code",{children:"shaded"})," properties."]})}),hP=Object.freeze(Object.defineProperty({__proto__:null,default:i5},Symbol.toStringTag,{value:"Module"})),fP=()=>r.jsx("div",{className:"grid-1 gap-4",children:r.jsx(Je,{summary:"This is the summary",content:"This is the content that is revealed."})}),mP=`import React from 'react'
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

export default DetailsExample`,c5=()=>r.jsx(N,{code:"content",Component:fP,Source:mP,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"content"})," property can be used as a short-cut to set the body content for simple cases."]})}),xP=Object.freeze(Object.defineProperty({__proto__:null,default:c5},Symbol.toStringTag,{value:"Module"})),gP=()=>r.jsx(Je,{summary:"Lined Details",lined:!0,children:"This is the content that is revealed."}),vP=`import React from 'react'
import { Details } from '@/src/index.jsx'

const DetailsExample = () =>
  /* START */
  <Details summary="Lined Details" lined>
    This is the content that is revealed.
  </Details>
  /* END */

export default DetailsExample`,d5=()=>r.jsx(N,{code:"lined",Component:gP,Source:vP,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"lined"})," property can be used to add a CSS class to add a line between the summary and content."]})}),bP=Object.freeze(Object.defineProperty({__proto__:null,default:d5},Symbol.toStringTag,{value:"Module"})),yP=()=>r.jsx("div",{className:"grid-1 gap-4",children:r.jsx(Je,{summary:"This is the summary",open:!0,children:"This is the content that is revealed."})}),jP=`import React from 'react'
import { Details } from '@/src/index.jsx'

const DetailsExample = () =>
  <div className="grid-1 gap-4">
    {/* START */}
    <Details summary="This is the summary" open>
      This is the content that is revealed.
    </Details>
    {/* END */}
  </div>

export default DetailsExample`,u5=()=>r.jsx(N,{code:"open",Component:yP,Source:jP,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"open"})," property can be set to make the details initially open."]})}),SP=Object.freeze(Object.defineProperty({__proto__:null,default:u5},Symbol.toStringTag,{value:"Module"})),CP=()=>r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(Je,{summary:"Border Radius",border:!0,lined:!0,radius:2,children:"This is the content that is revealed."}),r.jsx(Je,{summary:"Border Radius",border:!0,lined:!0,radius:4,children:"This is the content that is revealed."})]}),wP=`import React from 'react'
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

export default DetailsExample`,p5=()=>r.jsx(N,{code:"radius",Component:CP,Source:wP,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"radius"})," property can be used to set the border radius. It should be an integer in units of 0.25rem."]})}),_P=Object.freeze(Object.defineProperty({__proto__:null,default:p5},Symbol.toStringTag,{value:"Module"})),TP=()=>r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(Je,{summary:"Shaded",shaded:!0,children:"This is the content that is revealed."}),r.jsx(Je,{summary:"Shaded and Border",border:!0,shaded:!0,children:"This is the content that is revealed."}),r.jsx(Je,{summary:"Shaded, Lined and Border",border:!0,shaded:!0,lined:!0,children:"This is the content that is revealed."})]}),kP=`import React from 'react'
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

export default DetailsExample`,h5=()=>r.jsx(N,{code:"shaded",Component:TP,Source:kP,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"shaded"})," property can be used to add shading."]})}),EP=Object.freeze(Object.defineProperty({__proto__:null,default:h5},Symbol.toStringTag,{value:"Module"})),NP=()=>r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(Je,{summary:"Shadow 1",border:!0,shaded:!0,shadow:1,children:"This is the content that is revealed."}),r.jsx(Je,{summary:"Shadow 3",border:!0,shaded:!0,shadow:3,children:"This is the content that is revealed."}),r.jsx(Je,{summary:"Shadow 5",border:!0,shaded:!0,shadow:5,children:"This is the content that is revealed."})]}),RP=`import React from 'react'
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

export default DetailsExample`,f5=()=>r.jsx(N,{code:"shadow",Component:NP,Source:RP,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"shadow"})," property can be used to add a drop shadow. This can be any integer from 1 to 5."]})}),OP=Object.freeze(Object.defineProperty({__proto__:null,default:f5},Symbol.toStringTag,{value:"Module"})),LP=()=>r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(Je,{summary:"This is the summary",children:"This is the content that is revealed."}),r.jsx(Je,{border:!0,lined:!0,summary:r.jsxs("div",{className:"wide flex space middle pad-r-2",children:[r.jsx("div",{children:"Control Panel"}),r.jsx(ne,{name:"cog"})]}),children:"This is the content that is revealed."})]}),DP=`import React from 'react'
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

export default DetailsExample`,m5=()=>r.jsx(N,{code:"summary",Component:LP,Source:DP,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"summary"})," property is used to set the summary text. It can be a text string or any JSX content."]})}),BP=Object.freeze(Object.defineProperty({__proto__:null,default:m5},Symbol.toStringTag,{value:"Module"})),$P=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Details"}),r.jsx(s5,{}),r.jsxs(Ze,{tocName:"details",children:[r.jsx(se,{title:"Properties"}),r.jsx(m5,{}),r.jsx(c5,{}),r.jsx(u5,{}),r.jsx(d5,{}),r.jsx(l5,{}),r.jsx(p5,{}),r.jsx(h5,{}),r.jsx(f5,{}),r.jsx(i5,{}),r.jsx(se,{title:"CSS Classes"}),r.jsxs(F,{code:"className",children:["Set a CSS class for the ",r.jsx("code",{children:"details"})," container element."]}),r.jsxs(F,{code:"summaryClass",children:["Set a CSS class for the ",r.jsx("code",{children:"summary"})," element."]}),r.jsxs(F,{code:"contentClass",children:["Set a CSS class for the content ",r.jsx("code",{children:"div"})," element."]}),r.jsx(se,{title:"Components"}),r.jsx(F,{code:"Summary",id:"Summary-component",children:"Renders the summary element."}),r.jsx(F,{code:"Content",id:"Content=component",children:"Renders the content."})]})]}),AP=Object.freeze(Object.defineProperty({__proto__:null,default:$P},Symbol.toStringTag,{value:"Module"})),MP=()=>r.jsx(Ir,{text:"Dropdown Menu",iconRight:"angle-down",options:["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger","Colin Camel","David Donkey","Eddie Elephant","Franky Ferret","Gina Goat","Helen Horse","Ian Iguana","Juliet Jackdaw","Kevin Kangaroo","Linda Llama","Mike Monkey"]}),PP=`import { DropdownMenu } from '@/src/index.jsx'

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

export default DropdownExample`,x5=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"DropdownMenu"})," component generates a dropdown menu.  It extends the behaviour of the"," ",r.jsx(Ln,{to:"/components/dropdown",children:"Dropdown"})," component."]}),r.jsxs("p",{children:["The default behaviour is to open the dropdown menu when the user clicks on the trigger. Keyboard navigation is also supported.  The user can ",r.jsx("code",{children:"TAB"})," ","to the trigger and then press ",r.jsx("code",{children:"SPACE"}),", ",r.jsx("code",{children:"ENTER"}),","," ",r.jsx("code",{children:"DOWN"})," or ",r.jsx("code",{children:"UP"})," to open the menu. Once the menu is open, the ",r.jsx("code",{children:"DOWN"})," and ",r.jsx("code",{children:"UP"})," keys"," ","can be used to select menu items, ",r.jsx("code",{children:"ENTER"})," or"," ",r.jsx("code",{children:"SPACE"})," will select the current item and ",r.jsx("code",{children:"ESCAPE"})," ","will close the menu."]}),r.jsx(re,{Component:MP,code:PP})]}),IP=Object.freeze(Object.defineProperty({__proto__:null,default:x5},Symbol.toStringTag,{value:"Module"})),zP=()=>r.jsx(Ir,{text:"Dropdown Menu",iconRight:"angle-down",onSelect:e=>alert(`You selected: ${e.text}`),options:[{text:"Item One"},{text:"Item Two"},{text:"Item Three"}]}),FP=`import React from 'react'
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

export default DropdownMenuExample`,g5=()=>r.jsx(N,{code:"onSelect",Component:zP,Source:FP,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"onSelect"})," property should be used to define a handler which will be called when an item is selected, either by being clicked on or by keyboard selection.  The handler will be passed the data for the item that was selected."]})}),UP=Object.freeze(Object.defineProperty({__proto__:null,default:g5},Symbol.toStringTag,{value:"Module"})),VP=()=>r.jsx(Ir,{text:"Simple Options",iconRight:"angle-down",options:["Hello","World",10,11]}),HP=`import React from 'react'
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

export default DropdownExample`,WP=()=>r.jsx(Ir,{text:"Option Separators",iconRight:"angle-down",options:["One","Two","Three",{separator:!0},"Eleven","Twelve","Thirteen",{separator:!0},"One Hundred","Two Hundred","Three Hundred"]}),ZP=`import React from 'react'
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

export default DropdownExample`,KP=()=>r.jsx(Ir,{text:"Object Options",iconRight:"angle-down",options:[{text:"Star",iconLeft:"star"},{text:"Heart",iconRight:"heart",className:"text-right"},{text:"Move",iconLeft:"angle-left",iconRight:"angle-right"},{text:r.jsxs("div",{className:"flex space small",children:[r.jsx("div",{children:"Foo"}),r.jsx("div",{children:"Bar"})]})}]}),YP=`import React from 'react'
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

export default DropdownExample`,GP=()=>r.jsx(Ir,{text:"Option Headings",iconRight:"angle-down",options:[{heading:"Single Digit Numbers"},"One","Two","Three",{heading:"Double Digit Numbers"},"Eleven","Twelve","Thirteen",{heading:"Triple Digit Numbers"},"One Hundred","Two Hundred","Three Hundred"]}),qP=`import React from 'react'
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

export default DropdownExample`,XP=()=>r.jsx(Ir,{text:"Disabled Options",iconRight:"angle-down",options:[{text:"Disabled #1",disabled:!0},{text:"Enabled #2"},{text:"Disabled #3",disabled:!0},{text:"Enabled #4"},{text:"Disabled #5",disabled:!0}]}),QP=`import React from 'react'
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

export default DropdownExample`,v5=()=>r.jsxs(F,{code:"options",children:[r.jsxs("div",{className:"cols-2 stack-desktop mar-b-4",children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"options"})," property should be used to define an array of options to display in the menu."]}),r.jsx("p",{children:"For simple cases, each element in the array can be a text string or numerical value."})]}),r.jsx(re,{Component:VP,code:HP,caption:"options",expand:!1,undent:2}),r.jsxs("p",{children:["An element in the ",r.jsx("code",{children:"options"})," array can also be an object. It should contain a ",r.jsx("code",{children:"text"})," property which can be a string or JSX fragment. A ",r.jsx("code",{children:"className"})," can be included to add a CSS class to the option."]}),r.jsxs("p",{children:["The content for an element is rendered using the ",r.jsx("code",{children:"WithIcon"})," ","component from"," ",r.jsx("a",{href:"https://abw.github.io/badger-icon/",children:"Badger Icon"})," allowing you to include ",r.jsx("code",{children:"iconLeft"})," and ",r.jsx("code",{children:"iconRight"})," properties to add icons to either side, along with ",r.jsx("code",{children:"iconLeftClass"})," and"," ",r.jsx("code",{children:"iconRightClass"})," to set CSS classes for those icons."]}),r.jsx(re,{Component:KP,code:YP,caption:"options",expand:!1,undent:2}),r.jsxs("p",{children:["An object in the ",r.jsx("code",{children:"options"})," array can have a"," ",r.jsx("code",{children:"disabled"})," property set to ",r.jsx("code",{children:"true"})," to disable the option."]}),r.jsx(re,{Component:XP,code:QP,caption:"options",expand:!1,undent:2}),r.jsxs("p",{children:["An object in the ",r.jsx("code",{children:"options"})," array can have a"," ",r.jsx("code",{children:"separator"})," property set to ",r.jsx("code",{children:"true"})," to create a separator."]}),r.jsx(re,{Component:WP,code:ZP,caption:"options",expand:!1,undent:2}),r.jsxs("p",{children:["An object in the ",r.jsx("code",{children:"options"})," array can have a"," ",r.jsx("code",{children:"heading"})," property to create a section heading."]}),r.jsx(re,{Component:GP,code:qP,caption:"options",expand:!1,undent:2})]}),JP=Object.freeze(Object.defineProperty({__proto__:null,default:v5},Symbol.toStringTag,{value:"Module"})),ho=({children:e,align:t="top"})=>r.jsx("div",{className:`grid-2 gap-h-8 stack-desktop ${t}`,style:{"--prose-width":"100%"},children:e}),eI=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Dropdown Menu"}),r.jsx(x5,{}),r.jsxs(Ze,{tocName:"dropdown-menu",children:[r.jsx(se,{title:"Properties"}),r.jsxs("p",{className:"large",children:["All the properties supported by the"," ",r.jsx(Ln,{to:"/components/dropdown",children:"Dropdown"})," component are supported.  These are the additional properties specific to the ",r.jsx("code",{children:"DropdownMenu"}),"."]}),r.jsx(v5,{}),r.jsx(g5,{}),r.jsxs(ho,{children:[r.jsxs("div",{className:"flow",children:[r.jsx(se,{title:"CSS Classes"}),r.jsxs(F,{code:"optionClass",children:["Used to set the CSS class added to each dropdown menu item. The default value is ",r.jsx("code",{children:"item no-hover"}),".  The"," ",r.jsx("code",{children:"no-hover"})," class suppresses the hover styles that would usually be applied to menu items.  Instead the"," ",r.jsx("code",{children:"active"})," class is added to the active item, selected either by hovering over it or by keyboard navigation."]}),r.jsxs(F,{code:"separatorClass",children:["Used to set the CSS class added to the dropdown menu separator. The default value is ",r.jsx("code",{children:"separator"}),"."]})]}),r.jsxs("div",{className:"flow",children:[r.jsx(se,{title:"Components"}),r.jsxs(F,{code:"Options",id:"Options-component",children:["Renders the dropdown menu options.  Defaults to ",r.jsx("code",{children:"DropdownMenuOptions"}),"."]}),r.jsxs(F,{code:"Option",id:"Option-component",children:["Renders each dropdown menu option.  Defaults to ",r.jsx("code",{children:"DropdownMenuOption"}),"."]}),r.jsxs(F,{code:"Separator",id:"Separator-component",children:["Renders a separator between menu items.  Defaults to ",r.jsx("code",{children:"DropdownMenuSeparator"}),"."]})]})]})]})]}),tI=Object.freeze(Object.defineProperty({__proto__:null,default:eI},Symbol.toStringTag,{value:"Module"})),nI=()=>r.jsx(gn,{text:"Dropdown",children:"Hello World!"}),rI=`import { Dropdown } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Dropdown } from '@abw/badger-react-ui

const DropdownExample = () =>
  <Dropdown text='Dropdown'>
    Hello World!
  </Dropdown>

export default DropdownExample`,b5=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Dropdown"})," component can be used to display content that is visible when the user clicks on the trigger."]}),r.jsx("p",{children:"The default behaviour is to open the dropdown when the user clicks on the trigger."}),r.jsx(re,{Component:nI,code:rI})]}),oI=Object.freeze(Object.defineProperty({__proto__:null,default:b5},Symbol.toStringTag,{value:"Module"})),aI=()=>r.jsx(gn,{text:"Dropdown Content",content:"Hello World!"}),sI=`import React from 'react'
import { Dropdown } from '@/src/index.jsx'

const DropdownExample = () =>
  /* START */
  <Dropdown
    text='Dropdown Content'
    content='Hello World!'
  />
  /* END */

export default DropdownExample`,y5=()=>r.jsx(N,{code:"content",Component:aI,Source:sI,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"content"})," property can be used to define the content as a short-cut.  Otherwise any child content of the"," ",r.jsx("code",{children:"Dropdown"})," component will be displayed."]})}),lI=Object.freeze(Object.defineProperty({__proto__:null,default:y5},Symbol.toStringTag,{value:"Module"})),iI=()=>r.jsx(gn,{text:"Dropdown iconLeft",iconLeft:"angle-down",content:"Hello World!"}),cI=`import React from 'react'
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

export default DropdownExample`,j5=()=>r.jsx(N,{code:"iconLeft",Component:iI,Source:cI,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"iconLeft"})," property can used to define an icon for the left side of the trigger.  The ",r.jsx("code",{children:"iconLeftClass"})," can be used to add a CSS class for it."]})}),dI=Object.freeze(Object.defineProperty({__proto__:null,default:j5},Symbol.toStringTag,{value:"Module"})),uI=()=>r.jsx(gn,{text:"Dropdown iconLeftRotate",iconLeft:"angle-right",iconLeftRotate:90,content:"Hello World!"}),pI=`import React from 'react'
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

export default DropdownMenuExample`,S5=()=>r.jsx(N,{code:"iconLeftRotate",Component:uI,Source:pI,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"iconLeftRotate"})," property can used to specify the rotation (in degrees) of the icon when the dropdown is open."]})}),hI=Object.freeze(Object.defineProperty({__proto__:null,default:S5},Symbol.toStringTag,{value:"Module"})),fI=()=>r.jsx(gn,{text:"Dropdown iconRight",iconRight:"angle-down",content:"Hello World!"}),mI=`import React from 'react'
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

export default DropdownExample`,C5=()=>r.jsx(N,{code:"iconRight",Component:fI,Source:mI,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"iconRight"})," property can used to define an icon for the left side of the trigger.  The ",r.jsx("code",{children:"iconRightClass"})," can be used to add a CSS class for it."]})}),xI=Object.freeze(Object.defineProperty({__proto__:null,default:C5},Symbol.toStringTag,{value:"Module"})),gI=()=>r.jsx(gn,{text:"Dropdown iconRightRotate",iconRight:"angle-left",iconRightRotate:-90,content:"Hello World!"}),vI=`import React from 'react'
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

export default DropdownExample`,w5=()=>r.jsx(N,{code:"iconRightRotate",Component:gI,Source:vI,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"iconRightRotate"})," property can used to specify the rotation (in degrees) of the icon when the dropdown is open."]})}),bI=Object.freeze(Object.defineProperty({__proto__:null,default:w5},Symbol.toStringTag,{value:"Module"})),yI=()=>r.jsx(gn,{openOnHover:!0,text:"Dropdown openOnHover",content:"Hello World!"}),jI=`import React from 'react'
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

export default DropdownExample`,_5=()=>r.jsx(N,{code:"openOnHover",Component:yI,Source:jI,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"openOnHover"})," property can added to make the menu open when the mouse hovers over the trigger."]})}),SI=Object.freeze(Object.defineProperty({__proto__:null,default:_5},Symbol.toStringTag,{value:"Module"})),CI=()=>r.jsx(gn,{right:!0,text:"Dropdown Right",content:"Hello World!"}),wI=`import React from 'react'
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

export default DropdownExample`,T5=()=>r.jsx(N,{code:"right",Component:CI,Source:wI,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"right"})," property can added to align the dropdown menu to the right edge of the trigger"]})}),_I=Object.freeze(Object.defineProperty({__proto__:null,default:T5},Symbol.toStringTag,{value:"Module"})),TI=()=>r.jsx(gn,{text:"Dropdown Trigger Text",children:"Hello World!"}),kI=`import React from 'react'
import { Dropdown } from '@/src/index.jsx'

const DropdownExample = () =>
  /* START */
  <Dropdown
    text='Dropdown Trigger Text'
  >
    Hello World!
  </Dropdown>
  /* END */

export default DropdownExample`,k5=()=>r.jsx(N,{code:"text",Component:TI,Source:kI,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"text"})," property should be used to define the text for the trigger."]})}),EI=Object.freeze(Object.defineProperty({__proto__:null,default:k5},Symbol.toStringTag,{value:"Module"})),NI=()=>r.jsx(gn,{wide:!0,text:"Dropdown Wide",content:"Hello World!"}),RI=`import React from 'react'
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

export default DropdownExample`,E5=()=>r.jsx(N,{code:"wide",Component:NI,Source:RI,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"wide"})," property can added to make the menu expand to the full width of the container."]})}),OI=Object.freeze(Object.defineProperty({__proto__:null,default:E5},Symbol.toStringTag,{value:"Module"})),LI=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Dropdown"}),r.jsx(b5,{}),r.jsxs(Ze,{tocName:"dropdown",children:[r.jsx(se,{title:"Properties"}),r.jsx(k5,{}),r.jsx(y5,{}),r.jsx(_5,{}),r.jsx(T5,{}),r.jsx(E5,{}),r.jsx(j5,{}),r.jsx(S5,{}),r.jsx(C5,{}),r.jsx(w5,{}),r.jsxs(ho,{children:[r.jsxs("div",{className:"flow",children:[r.jsx(se,{title:"CSS Classes"}),r.jsxs(F,{code:"className",children:["Used to set the CSS class for the dropdown container.  The default value is ",r.jsx("code",{children:"dropdown"}),"."]}),r.jsxs(F,{code:"openClass",children:["Used to set the CSS class added to the dropdown container when the menu is open.  The default value is ",r.jsx("code",{children:"open"}),"."]}),r.jsxs(F,{code:"closedClass",children:["Used to set the CSS class added to the dropdown container when the menu is closed.  The default value is ",r.jsx("code",{children:"closed"}),"."]}),r.jsxs(F,{code:"triggerClass",children:["Used to set the CSS class added to the dropdown trigger. The default value is ",r.jsx("code",{children:"trigger"}),"."]}),r.jsxs(F,{code:"menuClass",children:[r.jsx("b",{children:"TODO: update this!"}),"Used to set the CSS class added to the dropdown menu container. The default value is ",r.jsx("code",{children:"menu border bdr-1"}),".  The"," ",r.jsx("code",{children:"border"})," utility class adds a border and"," ",r.jsx("code",{children:"bdr-1"})," sets the border radius to 1 unit (0.25rem or 4px)."]})]}),r.jsxs("div",{className:"flow",children:[r.jsx(se,{title:"Components"}),r.jsxs(F,{code:"Trigger",id:"Trigger-component",children:["Renders the dropdown menu trigger.  Defaults to ",r.jsx("code",{children:"DropdownTrigger"}),"."]}),r.jsxs(F,{code:"Body",id:"Body-component",children:["Renders the dropdown body.  Defaults to ",r.jsx("code",{children:"DropdownBody"}),"."]})]})]})]})]}),DI=Object.freeze(Object.defineProperty({__proto__:null,default:LI},Symbol.toStringTag,{value:"Module"})),BI=["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Beatrice Badger","Belinda Badger","Ben Badger","Bert Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger","Brook Badger","Buzz Badger"],$I=e=>BI.filter(t=>t.toLowerCase().indexOf(e.toLowerCase())!==-1),AI=()=>r.jsxs(rr,{children:[r.jsx(st,{name:"animal",type:"search",label:"Animal",onSearch:$I}),r.jsx(Da,{})]}),MI=`import { Form, Field, Debug } from '@/src/index.jsx'

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

export default SearchExample`,PI=[{id:1,name:"Alan Aardvark"},{id:2,name:"Amy Aardvark"},{id:3,name:"Anne Aardvark"},{id:4,name:"Bart Badger"},{id:5,name:"Beatrice Badger"},{id:6,name:"Belinda Badger"},{id:7,name:"Ben Badger"},{id:8,name:"Bert Badger"},{id:9,name:"Betty Badger"},{id:10,name:"Bobby Badger"},{id:11,name:"Brenda Badger"},{id:12,name:"Brian Badger"},{id:13,name:"Brook Badger"},{id:14,name:"Buzz Badger"}],D1=e=>PI.filter(t=>t.name.toLowerCase().indexOf(e.toLowerCase())!==-1),II=e=>e.id,zI=()=>r.jsxs(rr,{children:[r.jsx(st,{name:"animal1",type:"search",label:"Animal",onSearch:D1}),r.jsx(st,{name:"animal2",type:"search",label:"Animal",onSearch:D1,selectValue:II}),r.jsx(Da,{})]}),FI=`import { Form, Field, Debug } from '@/src/index.jsx'

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

export default SearchExample`,N5=()=>r.jsxs(F,{code:"search",children:[r.jsxs("p",{children:["The field ",r.jsx("code",{children:"type"})," property can be set to ",r.jsx("code",{children:"search"})," ","to use the ",r.jsx(Ln,{to:"/components/search",text:"Search"})," component. You can define additional properties in the field that will be forwarded to the select component.  For example, see the ",r.jsx("code",{children:"onSearch"})," handler defined below."]}),r.jsx(re,{Component:AI,code:MI}),r.jsxs("p",{children:["When an option is selected the default behaviour is to return the complete option, as shown in the first field in the example below. You can use the ",r.jsx("code",{children:"selectValue"})," property to define a function which will accept the option and return the relevant value from inside it.  This is shown in the second field in the example below which returns the ",r.jsx("code",{children:"value"})," property from the option instead of the selected option object."]}),r.jsx(re,{Component:zI,code:FI})]}),UI=Object.freeze(Object.defineProperty({__proto__:null,default:N5},Symbol.toStringTag,{value:"Module"})),VI=()=>Ar(2e3).then(()=>({ok:"All is good"})),R5=()=>r.jsxs(rr,{className:"relative",onSubmit:VI,children:[r.jsx(st,{name:"name",label:"Your name",required:!0}),r.jsx(st,{name:"comment",label:"Comment",type:"textarea",required:!0}),r.jsx(bl,{text:"Submit",color:"green",iconRight:"arrow-right"}),r.jsx(Vh,{size:"small",spinnerSize:"x3",text:"Posting...",icon:"envelope",color:"green",strokeStop:50,animation:"beat"})]}),HI=Object.freeze(Object.defineProperty({__proto__:null,default:R5},Symbol.toStringTag,{value:"Module"})),WI=()=>Ar(2e3).then(()=>({ok:"All is good"})),O5=()=>r.jsxs(rr,{className:"relative",onSubmit:WI,children:[r.jsx(st,{name:"name",label:"Your name",required:!0}),r.jsx(st,{name:"comment",label:"Comment",type:"textarea",required:!0}),r.jsx(bl,{text:"Submit",color:"green",iconRight:"arrow-right"}),r.jsx(Vh,{})]}),ZI=Object.freeze(Object.defineProperty({__proto__:null,default:O5},Symbol.toStringTag,{value:"Module"})),KI=`/* eslint-disable quotes */
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

export default FormExample`,YI=`/* eslint-disable quotes */
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

export default FormExample`,L5=()=>r.jsxs(F,{code:"Submitting",children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"Submitting"})," component can be used to add an overlay with a ",r.jsx(Ln,{to:"/components/spinner",text:"Spinner"})," and message when the form is submitting."]}),r.jsx(re,{Component:O5,code:KI}),r.jsxs("p",{children:["The ",r.jsx("code",{children:"size"})," property can be used to set the overall size. The ",r.jsx("code",{children:"spinnerSize"})," can be used to set the size of the spinner icon. The ",r.jsx("code",{children:"text"})," property can be used to change the text displayed. All other properties are forwarded to the"," ",r.jsx(Ln,{to:"/components/spinner",text:"Spinner"})," component."]}),r.jsx(re,{Component:R5,code:YI})]}),GI=Object.freeze(Object.defineProperty({__proto__:null,default:L5},Symbol.toStringTag,{value:"Module"})),qI=()=>r.jsxs(rr,{children:[r.jsx(st,{name:"animal",type:"uiselect",label:"Animal",options:["Ant","Badger","Cat","Dog","Elephant"]}),r.jsx(Da,{})]}),XI=`import React from 'react'
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

export default UISelectExample`,QI=()=>r.jsxs(rr,{children:[r.jsx(st,{name:"badger",type:"uiselect",label:"Badger",search:!0,options:[{id:1,name:"Bella Badger"},{id:2,name:"Benjamin Badger"},{id:3,name:"Bethany Badger"},{id:4,name:"Billy Badger"},{id:5,name:"Bobby Badger"},{id:6,name:"Brenda Badger"},{id:7,name:"Brian Badger"},{id:8,name:"Brianna Badger"}]}),r.jsx(Da,{})]}),JI=`import React from 'react'
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

export default UISelectExample`,ez=()=>r.jsxs(rr,{children:[r.jsx(st,{name:"member",type:"uiselect",label:"Musician",value:"david",selectValue:e=>e.value,options:[{value:"nigel",text:"Nigel Tufnel"},{value:"david",text:"David St. Hubbins"},{value:"derek",text:"Derek Smalls"}]}),r.jsx(Da,{})]}),tz=`import React from 'react'
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

export default UISelectExample`,D5=()=>r.jsxs(F,{code:"uiselect",children:[r.jsxs("p",{children:["The field ",r.jsx("code",{children:"type"})," property can be set to ",r.jsx("code",{children:"uiselect"})," ","to use the ",r.jsx(Ln,{to:"/components/select",text:"Select"})," component."]}),r.jsx(re,{Component:qI,code:XI}),r.jsxs("p",{children:["You can define additional properties in the field that will be forwarded to the select component.  For example, the ",r.jsx("code",{children:"search"})," property is set here to enable searching."]}),r.jsx(re,{Component:QI,code:JI}),r.jsx("p",{children:"When an option is selected the default behaviour is to return the complete option.  This can be debugging panel in the previous example."}),r.jsxs("p",{children:["You can use the ",r.jsx("code",{children:"selectValue"})," property to define a function which will accept the option and return the relevant value from inside it.  This is shown in the next example which returns the ",r.jsx("code",{children:"value"})," property from the option instead of the selected option object."]}),r.jsx(re,{Component:ez,code:tz})]}),nz=Object.freeze(Object.defineProperty({__proto__:null,default:D5},Symbol.toStringTag,{value:"Module"})),rz=["Guitar","Bass","Drums","Keyboards","Mandolin"],oz=["Eleven, it's one louder","These go up to eleven","How much more black could this be","The answer is none, none more black","He died in a bizarre gardening accident","You can't really dust for vomit","No, we're all out. Do you wear black?","The sustain, listen to it.","What's wrong with being sexy?"],az=e=>oz.filter(t=>t.toLowerCase().indexOf(e.toLowerCase())>=0),sz=()=>Ar(2e3).then(()=>({ok:"All is good"})),lz=()=>r.jsxs(rr,{className:"relative",onSubmit:sz,resetOnSuccess:!0,children:[r.jsx(st,{name:"email",label:"Email address",required:!0}),r.jsx(st,{name:"password",label:"Password",type:"password",required:!0}),r.jsx(st,{name:"instrument",type:"uiselect",label:"Instrument",options:rz}),r.jsx(st,{name:"quote",type:"search",label:"Favourite Quote",help:"Hint: try 'black' or 'eleven'",onSearch:az}),r.jsx(st,{name:"terms",type:"checkbox",text:"I like badgers",required:!0}),r.jsx(uR,{space:!0,submit:{color:"green",iconRight:"arrow-right",text:"Register"}}),r.jsx(Vh,{}),e=>r.jsx(B,{text:"Set Example Form Values",className:"mar-t-2 wide orange",onClick:()=>e.setValues({email:"nigel@spinal-tap.com",password:"eleven",instrument:"Guitar",quote:"These go up to eleven",terms:!0})}),r.jsx(Da,{})]}),iz=`/* eslint-disable quotes */
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

export default FormExample`,cz=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Form"}),r.jsxs("p",{className:"large wide",children:["The library includes"," ",r.jsx("a",{href:"https://abw.github.io/badger-form/",children:"Badger Form"})," for rendering form components."]}),r.jsx(re,{Component:lz,code:iz,caption:"Form"}),r.jsxs("p",{children:["There are a few enhancements.  First, the buttons are rendered using the ",r.jsx(Ln,{to:"/components/button",text:"Button"})," component, allowing them to include icons and all the styling properties.  Secondly, there are ",r.jsx("code",{children:"type"})," bindings which allow you to use more advanced components for field inputs.  These are described below."]}),r.jsxs(Ze,{tocName:"form",children:[r.jsx(se,{title:"Input Components"}),r.jsx(D5,{}),r.jsx(N5,{}),r.jsx(se,{title:"Additional Component"}),r.jsx(L5,{})]})]}),dz=Object.freeze(Object.defineProperty({__proto__:null,default:cz},Symbol.toStringTag,{value:"Module"})),uz=()=>r.jsx(ne,{name:"check"}),pz=`import React from 'react'
import { Icon } from '@/src/index.jsx'

{/* START */}
// PRETEND: import { Icon } from '@abw/badger-react-ui'

const IconExample = () =>
  <Icon name="check"/>

export default IconExample
`,hz=US(0,100,5),oi=({name:e,stop:t,setStop:n,disabled:o=!1})=>r.jsxs("select",{name:e,required:!0,value:t,onChange:a=>n(a.target.value),disabled:o,children:[r.jsx("option",{value:"",hidden:!0,disabled:!0,selected:!0,children:"Select Stop"}),r.jsx("option",{value:"",children:"None"}),hz.map(a=>r.jsx("option",{value:a,children:a},a))]}),fz=()=>{const[e,t]=v.useState(0),[n,o]=v.useState({name:"bars"}),a=c=>()=>{o(d=>({...d,[c]:!d[c]})),t(d=>d+1)},s=c=>d=>{o(u=>({...u,[c]:d})),t(u=>u+1)},i=`<Icon
  ${xz(n)}
/>`;return r.jsxs("div",{className:"example grid-2 gap-8 stack-desktop",children:[r.jsxs("div",{children:[r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Output"}),r.jsx("div",{className:"output mar-b-8",children:r.jsx(gz,{options:n},e)})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Markup"}),r.jsx(Un,{code:i,language:"html",expand:!0})]})]}),r.jsx(mz,{options:n,setOption:s,toggleOption:a})]})},mz=({options:e,setOption:t})=>{const n=t("name"),o=t("size"),a=t("color"),s=t("foreground"),l=t("background"),i=t("foregroundDark"),c=t("backgroundDark");return r.jsxs("div",{children:[r.jsxs("div",{className:"grid-3 gap-4 stack-mobile top",children:[r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Icon Name"}),r.jsx(Yu,{icon:e.name,setIcon:n})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Size"}),r.jsx(a0,{size:e.size,setSize:o})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Color"}),r.jsx(o0,{color:e.color,setColor:a,disabled:e.type})]})]}),r.jsxs("div",{className:"grid-2 gap-4 gap-v-0 stack-mobile top",children:[r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Foreground Stop"}),r.jsx(oi,{stop:e.foreground,setStop:s})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Background Stop"}),r.jsx(oi,{stop:e.background,setStop:l})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Foreground Dark"}),r.jsx(oi,{stop:e.foregroundDark,setStop:i})]}),r.jsxs("div",{className:"field",children:[r.jsx("label",{children:"Background Dark"}),r.jsx(oi,{stop:e.backgroundDark,setStop:c})]})]})]})},B5=e=>{const t=["name","size"].filter(o=>e[o]).reduce((o,a)=>(o[a]=e[a],o),{}),n=["color","foreground","background","foregroundDark","backgroundDark"].map(o=>e[o]||"").join("-");return n.length>4&&(t.color=n.replace(/-*$/,"")),t},xz=e=>{const t=B5(e);return Object.entries(t).map(([n,o])=>`${n}="${o}"`).join(`
  `)},gz=({options:e})=>r.jsx(ne,{...B5(e)}),$5=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Icon"})," component can be used to render SVG icons. The functionality is imported from"," ",r.jsx("a",{href:"https://abw.github.io/badger-icon/",children:"Badger Icon"})," with some extra bells and whistles."]}),r.jsx(re,{Component:uz,code:pz,expand:!0}),r.jsx("h2",{children:"Demo"}),r.jsx(fz,{})]}),vz=Object.freeze(Object.defineProperty({__proto__:null,default:$5},Symbol.toStringTag,{value:"Module"})),A5=()=>r.jsxs(F,{code:"IconLibrary",children:[r.jsxs("p",{children:["The default set of icons is defined as ",r.jsx("code",{children:"IconLibrary"}),". The ",r.jsx("code",{children:"addIcon()"})," and ",r.jsx("code",{children:"addIcons()"})," function are provided for adding icons to the library."]}),r.jsx("div",{className:"grid-fill gap-4 mar-t-8",children:Object.keys(ol.icons).map(e=>r.jsxs("div",{className:"text-center bgc-100 bgd-0 fgc-10 fgd-90 pad-4 shadow-2",children:[r.jsx(ne,{name:e,className:"x3"}),r.jsx("div",{className:"small mar-t-4",children:e})]},e))})]}),bz=Object.freeze(Object.defineProperty({__proto__:null,default:A5},Symbol.toStringTag,{value:"Module"})),yz=()=>r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"flex gap-2 middle",children:[r.jsx(ne,{name:"check",className:"smallest"}),r.jsx(ne,{name:"check",className:"smaller"}),r.jsx(ne,{name:"check",className:"small"}),r.jsx(ne,{name:"check"}),r.jsx(ne,{name:"check",className:"large"}),r.jsx(ne,{name:"check",className:"larger"}),r.jsx(ne,{name:"check",className:"largest"})]}),r.jsxs("div",{className:"flex gap-2 mar-t-4",children:[r.jsx(ne,{name:"check",className:"larger green fgc-50"}),r.jsx(ne,{name:"cross",className:"larger red fgc-50"})]})]}),jz=`import React from 'react'
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

export default Component`,M5=()=>r.jsx(N,{code:"className",Component:yz,Source:jz,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"className"})," property can be used to set a CSS class."]})}),Sz=Object.freeze(Object.defineProperty({__proto__:null,default:M5},Symbol.toStringTag,{value:"Module"})),Cz=()=>r.jsxs("div",{className:"flex gap-2 x2",children:[r.jsx(ne,{name:"check",color:"green-50"}),r.jsx(ne,{name:"check",color:"green-70-30"}),r.jsx(ne,{name:"check",color:"green-70--30"}),r.jsx(ne,{name:"check",color:"green-70-30-30-70"})]}),wz=`import React from 'react'
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

export default Component`,P5=()=>r.jsxs(N,{code:"color",Component:Cz,Source:wz,undent:2,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"color"})," property is a short-cut to set the color.  This adds the color to the CSS class."]}),r.jsxs("p",{children:["The ",r.jsx("code",{children:"color"})," can be be comprised of up to 5 elements separated by hyphens.  The first is the color range, e.g. ",r.jsx("code",{children:"red"}),","," ",r.jsx("code",{children:"green"}),", ",r.jsx("code",{children:"blue"}),", etc.  The second is the stop number for the foreground.  This is an integer from 0 (darkest) to 100 (lightest) in steps of 5.  The third is the stop number for the background.  The remaining two numbers are stops for the foreground and background colors in dark mode."]})]}),_z=Object.freeze(Object.defineProperty({__proto__:null,default:P5},Symbol.toStringTag,{value:"Module"})),Tz=()=>r.jsxs("div",{className:"flex gap-2 x2",children:[r.jsx(ne,{name:"bars"}),r.jsx(ne,{name:"check"}),r.jsx(ne,{name:"cross"}),r.jsx(ne,{name:"arrow"}),r.jsx(ne,{name:"arrow-right"}),r.jsx(ne,{name:"arrow-down-thicker.red.fgc-50"})]}),kz=`import React from 'react'
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

export default Component`,I5=()=>r.jsxs(N,{code:"name",Component:Tz,Source:kz,undent:2,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"name"})," property can be used to select an icon from the default icon library."]}),r.jsx("p",{children:"Additional modifiers and classes can be added to the name to apply styles and transformations.  See the Badger Icon documentation for further details."})]}),Ez=Object.freeze(Object.defineProperty({__proto__:null,default:I5},Symbol.toStringTag,{value:"Module"})),Nz=()=>r.jsxs("div",{className:"flex gap-2",children:[r.jsx(ne,{className:"x3",path:"M448,96L448,416C448,434 434,448 416,448L96,448C78,448 64,434 64,416L64,96C64,78 78,64 96,64L416,64C434,64 448,78 448,96ZM384,128L128,128L128,384L384,384L384,128Z"}),r.jsx(ne,{className:"x3",path:"M21,5L21,20C21,20 20,21 20,21L5,21C4,21 3,20 3,20L3,5C3,4 4,3 5,3L20,3C20,3 21,4 21,5ZM18,6L6,6L6,18L18,18L18,6Z",width:24,height:24})]}),Rz=`import React from 'react'
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

export default Component`,z5=()=>r.jsx(N,{code:"path",Component:Nz,Source:Rz,undent:2,expand:!0,children:r.jsxs("p",{children:["You can specify the data for a path.  The default viewbox is assumed to be 512px wide and 512px high.  You can set the ",r.jsx("code",{children:"width"})," and"," ",r.jsx("code",{children:"height"})," properties to change that."]})}),Oz=Object.freeze(Object.defineProperty({__proto__:null,default:z5},Symbol.toStringTag,{value:"Module"})),Lz=()=>r.jsxs("div",{className:"flex gap-2",children:[r.jsx(ne,{name:"check",size:"smallest"}),r.jsx(ne,{name:"check",size:"smaller"}),r.jsx(ne,{name:"check",size:"small"}),r.jsx(ne,{name:"check",size:"medium"}),r.jsx(ne,{name:"check",size:"large"}),r.jsx(ne,{name:"check",size:"larger"}),r.jsx(ne,{name:"check",size:"largest"})]}),Dz=`import React from 'react'
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

export default Component`,F5=()=>r.jsx(N,{code:"size",Component:Lz,Source:Dz,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"size"})," property is a short-cut to set the size.  This adds the size to the CSS class."]})}),Bz=Object.freeze(Object.defineProperty({__proto__:null,default:F5},Symbol.toStringTag,{value:"Module"})),$z=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Icon"}),r.jsx($5,{}),r.jsxs(Ze,{tocName:"icon",children:[r.jsx(se,{title:"Properties"}),r.jsx(I5,{}),r.jsx(M5,{}),r.jsx(F5,{}),r.jsx(P5,{}),r.jsx(z5,{}),r.jsx(se,{title:"Components"}),r.jsx(A5,{})]})]}),Az=Object.freeze(Object.defineProperty({__proto__:null,default:$z},Symbol.toStringTag,{value:"Module"})),Mz=()=>{const[e,t]=v.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsxs(An,{open:e,className:"max-width-30rem",children:[r.jsx("header",{children:r.jsx("h3",{children:"A Modal!"})}),r.jsxs("p",{children:["This is a modal.  The content is rendered as an ",r.jsx("code",{children:"article"}),".  You can include"," ",r.jsx("code",{children:"header"})," and ",r.jsx("code",{children:"footer"})," ","sections if you want, although they're entirely optional."]}),r.jsx("footer",{children:r.jsx(B,{color:"red",text:"Close Modal",onClick:()=>t(!1)})})]}),r.jsx(B,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},Pz=`import { Modal, Button } from '@/src/index.jsx'

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

export default ModalExample`,U5=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Modal"})," component can be used to create an overlaid modal dialog."]}),r.jsxs("p",{children:["The ",r.jsx("code",{children:"open"})," property should be used to indicate if the modal is open or not. Any child elements will be rendered inside the modal body."]}),r.jsx(re,{Component:Mz,code:Pz,expand:!0})]}),Iz=Object.freeze(Object.defineProperty({__proto__:null,default:U5},Symbol.toStringTag,{value:"Module"})),zz=()=>{const{show:e,hide:t,Modal:n}=SR();return r.jsxs(r.Fragment,{children:[r.jsxs(n,{children:[r.jsx("p",{children:"Modal State"}),r.jsx(B,{color:"red",text:"Close Modal",onClick:t})]}),r.jsx(B,{color:"green",text:"Open Modal",onClick:e})]})},Fz=`import { ModalState, Button } from '@/src/index.jsx'
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

export default ModalStateExample`,V5=()=>r.jsx(N,{code:"ModalState",Component:zz,Source:Fz,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"ModalState"})," function can be used to generate a Modal with state.  It returns the ",r.jsx("code",{children:"isVisible"})," property,"," ",r.jsx("code",{children:"show"})," and ",r.jsx("code",{children:"hide"})," functions to change the visibility, and a ",r.jsx("code",{children:"Modal"})," component."]})}),Uz=Object.freeze(Object.defineProperty({__proto__:null,default:V5},Symbol.toStringTag,{value:"Module"})),Vz=()=>{const[e,t]=v.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsxs(An,{open:e,className:"large max-width-25rem pad-8",children:[r.jsx("p",{children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object."}),r.jsx(B,{color:"red",text:"Close Modal",onClick:()=>t(!1)})]}),r.jsx(B,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},Hz=`import { Modal, Button } from '@/src/index.jsx'
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

export default ModalExample`,H5=()=>r.jsx(N,{code:"className",Component:Vz,Source:Hz,undent:6,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"className"})," property can be used to add a CSS class to the Modal ",r.jsx("code",{children:"dialog"})," element."]})}),Wz=Object.freeze(Object.defineProperty({__proto__:null,default:H5},Symbol.toStringTag,{value:"Module"})),Zz=()=>{const[e,t]=v.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsx(An,{open:e,close:()=>t(!1),children:r.jsx("p",{children:"This is a modal with a close button."})}),r.jsx(B,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},Kz=`import React, { useState } from 'react'
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

export default ModalExample`,W5=()=>r.jsx(N,{code:"close",Component:Zz,Source:Kz,undent:6,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"close"})," property can be used to automatically add a close icon to the top right corner.  It should be a function which will close the modal when the icon is clicked."]})}),Yz=Object.freeze(Object.defineProperty({__proto__:null,default:W5},Symbol.toStringTag,{value:"Module"})),Gz=()=>{const[e,t]=v.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsx(An,{open:e,close:()=>t(!1),closeIcon:"thumb",children:r.jsx("p",{children:"This is a modal with a custom close icon."})}),r.jsx(B,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},qz=`import React, { useState } from 'react'
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

export default ModalExample`,Z5=()=>r.jsx(N,{code:"closeIcon",Component:Gz,Source:qz,undent:6,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"closeIcon"})," property can be used to change the icon displayed to close the modal."]})}),Xz=Object.freeze(Object.defineProperty({__proto__:null,default:Z5},Symbol.toStringTag,{value:"Module"})),Qz=()=>{const[e,t]=v.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsx(An,{open:e,close:()=>t(!1),title:"Hello World!",text:"This is a modal with a custom footer",footer:r.jsx("div",{className:"text-right",children:r.jsx(B,{color:"red",text:"Close",size:"small",iconRight:"cross",onClick:()=>t(!1)})})}),r.jsx(B,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},Jz=`import { Modal, Button } from '@/src/index.jsx'
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

export default ModalExample`,K5=()=>r.jsx(N,{code:"footer",Component:Qz,Source:Jz,undent:6,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"footer"})," property can be used to define some custom footer content."]})}),eF=Object.freeze(Object.defineProperty({__proto__:null,default:K5},Symbol.toStringTag,{value:"Module"})),tF=()=>{const[e,t]=v.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsx(An,{open:e,close:()=>t(!1),text:"This is a modal with a custom header",header:r.jsxs(r.Fragment,{children:[r.jsx("h3",{children:"Custom Header"}),r.jsx("p",{children:"Hello World!"})]})}),r.jsx(B,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},nF=`import { Modal, Button } from '@/src/index.jsx'
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

export default ModalExample`,Y5=()=>r.jsx(N,{code:"header",Component:tF,Source:nF,undent:6,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"header"})," property can be used to define some custom header content."]})}),rF=Object.freeze(Object.defineProperty({__proto__:null,default:Y5},Symbol.toStringTag,{value:"Module"})),oF=()=>{const[e,t]=v.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsx(An,{open:e,close:()=>t(!1),text:"This is a modal"}),r.jsx(B,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},aF=`import { Modal, Button } from '@/src/index.jsx'

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

export default ModalExample`,G5=()=>r.jsx(N,{code:"text",Component:oF,Source:aF,undent:6,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"text"})," property can be used to define the body text."]})}),sF=Object.freeze(Object.defineProperty({__proto__:null,default:G5},Symbol.toStringTag,{value:"Module"})),lF=()=>{const[e,t]=v.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsx(An,{open:e,close:()=>t(!1),text:"This is a modal with a title",title:"My Modal"}),r.jsx(B,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},iF=`import { Modal, Button } from '@/src/index.jsx'
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

export default ModalExample`,q5=()=>r.jsx(N,{code:"title",Component:lF,Source:iF,undent:6,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"title"})," property can be used to add a title."]})}),cF=Object.freeze(Object.defineProperty({__proto__:null,default:q5},Symbol.toStringTag,{value:"Module"})),dF=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Modal"}),r.jsx(U5,{}),r.jsxs(Ze,{tocName:"modal",children:[r.jsx(se,{title:"Properties"}),r.jsx(H5,{}),r.jsx(W5,{}),r.jsx(Z5,{}),r.jsx(G5,{}),r.jsx(q5,{}),r.jsx(Y5,{}),r.jsx(K5,{}),r.jsx(se,{title:"Components"}),r.jsx(V5,{})]})]}),uF=Object.freeze(Object.defineProperty({__proto__:null,default:dF},Symbol.toStringTag,{value:"Module"})),pF=()=>{const{isVisible:e,show:t,hide:n}=Mr();return r.jsxs("div",{className:"relative pad-6 border",children:[e&&r.jsx(Co,{className:"flex middle center pad-8",children:r.jsxs("div",{children:[r.jsx("p",{className:"larger",children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been... that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object."}),r.jsx(B,{onClick:n,className:"red",text:"Hide Overlay"})]})}),r.jsx("p",{className:"mar-t-none",children:"May I make a suggestion? May I make a suggestion? I've got one other suggestion."}),r.jsx("p",{children:"Well let's hear yours. Let's hear your suggestion."}),r.jsx("p",{children:"Stonehenge! It's the best production value we've ever had on stage."}),r.jsx("p",{children:"But we haven't got the equipment. We haven't got the equipment, we haven't got Stonehenge, we haven't..."}),r.jsx("p",{children:"Not yet we don't. Let's start... Musically, musically we all know it. Musically we all know it. Right? No problems musically. We go right on stage. And it's quite simple. This is you know... Ian can take care of this..."}),r.jsx("p",{children:"I know what the Stonehenge monument looks like. We don't have that piece of scenery anymore."}),r.jsx("p",{children:"I know, so we build a new one. And this is it, look!"}),r.jsx(B,{onClick:t,color:"green",text:"Show Overlay"})]})},hF=`import { Overlay, VisibleState, Button } from '@/src/index.jsx'

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

export default OverlayExample`,X5=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Overlay"})," component can be used to create an overlay. The default positioning is absolute so it will fill to cover the nearest parent that has positioning set to relative."]}),r.jsx(re,{Component:pF,code:hF})]}),fF=Object.freeze(Object.defineProperty({__proto__:null,default:X5},Symbol.toStringTag,{value:"Module"})),mF=()=>{const{show:e,hide:t,Overlay:n}=CR();return r.jsxs(r.Fragment,{children:[r.jsx(n,{fixed:!0,className:"flex center middle",children:r.jsxs("div",{children:[r.jsx("h1",{className:"mar-b-4",children:"Overlay State"}),r.jsx(B,{color:"red",text:"Hide Overlay",onClick:t})]})}),r.jsx(B,{color:"green",text:"Show Overlay",onClick:e})]})},xF=`import { OverlayState, Button } from '@/src/index.jsx'
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

export default OverlayStateExample`,Q5=()=>r.jsx(N,{code:"OverlayState",Component:mF,Source:xF,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"OverlayState"})," function can be used to generate an Overlay with state.  It returns the ",r.jsx("code",{children:"isVisible"})," property,"," ",r.jsx("code",{children:"show"})," and ",r.jsx("code",{children:"hide"})," functions to change the visibility, and an ",r.jsx("code",{children:"Overlay"})," component."]})}),gF=Object.freeze(Object.defineProperty({__proto__:null,default:Q5},Symbol.toStringTag,{value:"Module"})),vF=()=>{const[e,t]=v.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsxs(An,{open:e,className:"large max-width-25rem pad-8",children:[r.jsx("p",{children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object."}),r.jsx(B,{color:"red",text:"Close Modal",onClick:()=>t(!1)})]}),r.jsx(B,{color:"green",text:"Open Modal",onClick:()=>t(!0)})]})},bF=`import { Modal, Button } from '@/src/index.jsx'
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

export default ModalExample`,yF=()=>r.jsx(N,{code:"className",Component:vF,Source:bF,undent:6,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"className"})," property can be used to add a CSS class to the Modal ",r.jsx("code",{children:"dialog"})," element."]})}),jF=Object.freeze(Object.defineProperty({__proto__:null,default:yF},Symbol.toStringTag,{value:"Module"})),SF=()=>{const{isVisible:e,show:t,hide:n}=Mr();return r.jsxs("div",{className:"relative pad-6 border",children:[r.jsx(B,{onClick:t,color:"green",text:"Show Red Overlay"}),e&&r.jsxs(Co,{className:"flex space top pad-6",style:{"--color":"var(--red-70)","--background-color":"var(--red-20)","--background-opacity":"10%"},children:[r.jsx("p",{className:"larger",children:"Custom red overlay"}),r.jsx(B,{onClick:n,className:"red",text:"Hide Overlay"})]})]})},CF=`import React from 'react'
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

export default ColorExample`,J5=()=>r.jsx(N,{title:"Custom Colors",Component:SF,Source:CF,undent:8,children:r.jsxs("p",{children:["You can set the ",r.jsx("code",{children:"--color"})," and ",r.jsx("code",{children:"--background-color"})," ","CSS properties to define your own colors for the overlay.  The"," ",r.jsx("code",{children:"--background-opacity"})," can be set to change the background opacity."]})}),wF=Object.freeze(Object.defineProperty({__proto__:null,default:J5},Symbol.toStringTag,{value:"Module"})),_F=()=>{const{isVisible:e,show:t,hide:n}=Mr();return r.jsxs("div",{className:"relative pad-6 border",children:[r.jsx(B,{onClick:t,color:"green",text:"Show Overlay"}),e&&r.jsx(Co,{fixed:!0,className:"flex center middle",children:r.jsxs("div",{className:"max-width-40rem",children:[r.jsx("p",{className:"larger",children:"I do not, for one, think that the problem was that the band was down. I think that the problem may have been... that there was a Stonehenge monument on the stage that was in danger of being crushed by a dwarf. Alright? That tended to understate the hugeness of the object."}),r.jsx(B,{onClick:n,className:"red",text:"Hide Overlay"})]})})]})},TF=`import React from 'react'
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

export default OverlayExample`,ev=()=>r.jsx(N,{code:"fixed",Component:_F,Source:TF,undent:8,children:r.jsxs("p",{children:["Add the ",r.jsx("code",{children:"fixed"})," to set the overlay position to fixed so that it covers the entire viewport."]})}),kF=Object.freeze(Object.defineProperty({__proto__:null,default:ev},Symbol.toStringTag,{value:"Module"})),EF=()=>{const{isVisible:e,show:t,hide:n}=Mr();return r.jsxs("div",{className:"relative pad-6 border",children:[r.jsx(B,{onClick:t,color:"green",text:"Show Light Overlay"}),e&&r.jsxs(Co,{light:!0,className:"flex space top pad-6",children:[r.jsx("p",{className:"larger",children:"Light overlay"}),r.jsx(B,{onClick:n,className:"red",text:"Hide Overlay"})]})]})},NF=`import React from 'react'
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

export default ColorExample`,RF=()=>{const{isVisible:e,show:t,hide:n}=Mr();return r.jsxs("div",{className:"relative pad-6 border",children:[r.jsx(B,{onClick:t,color:"green",text:"Show Dark Overlay"}),e&&r.jsxs(Co,{dark:!0,className:"flex space top pad-6",children:[r.jsx("p",{className:"larger",children:"Dark overlay"}),r.jsx(B,{onClick:n,className:"red",text:"Hide Overlay"})]})]})},OF=`import React from 'react'
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

export default ColorExample`,tv=()=>r.jsxs(F,{code:"light / dark",children:[r.jsxs("p",{children:["The default overlay color is white in light mode and black in dark mode.  You can add the ",r.jsx("code",{children:"light"})," or ",r.jsx("code",{children:"dark"})," ","property to explicitly set it to one or the other."]}),r.jsx(re,{Component:EF,code:NF,caption:"light",undent:8}),r.jsx(re,{Component:RF,code:OF,caption:"dark",undent:8})]}),LF=Object.freeze(Object.defineProperty({__proto__:null,default:tv},Symbol.toStringTag,{value:"Module"})),DF=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Overlay"}),r.jsx(X5,{}),r.jsxs(Ze,{tocName:"overlay",children:[r.jsx(se,{title:"Properties"}),r.jsx(ev,{}),r.jsx(tv,{}),r.jsx(se,{title:"Styling"}),r.jsx(J5,{}),r.jsx(se,{title:"Components"}),r.jsx(Q5,{})]})]}),BF=Object.freeze(Object.defineProperty({__proto__:null,default:DF},Symbol.toStringTag,{value:"Module"})),$F=({page:e,className:t,onClick:n})=>{const{pageRanges:o}=Vk(),a=o[e];return r.jsx(B,{text:a,className:t,onClick:n})},AF=()=>{const e=["A-C","D-F","G-I","J-M","N-P","Q-T","U-W","X-Z"],t=e.length,[n,o]=v.useState(0);return r.jsx(Xt,{pages:t,page:n,setPage:o,pageRanges:e,Page:$F,size:"small"})},MF=`import { Pager, usePager, Button } from '@/src/index.jsx'

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

export default PagerExample`,nv=({items:e})=>r.jsx("table",{className:"wide shaded striped celled",children:r.jsx("tbody",{children:e.map(([t,n])=>r.jsx(PF,{name:t,value:n},t))})}),PF=({name:e,value:t})=>r.jsxs("tr",{children:[r.jsx("td",{className:"font-mono",children:e}),r.jsx("td",{children:t})]}),rv=()=>r.jsxs(r.Fragment,{children:[r.jsx("h2",{children:"Context"}),r.jsx("p",{children:"A react context is created which provides the items listed below. Any other properties passed in to the component will also be accessible to child components."}),r.jsxs("p",{children:["Values are provided for the 0-based indexes of the first, last, previous, next and current pages. For example, the lowest value for ",r.jsx("code",{children:"page"})," is"," ",r.jsx("code",{children:"0"})," and the highest value is ",r.jsx("code",{children:"pages - 1"}),'. Their counterparts are also provided in "human readable" 1-based form with a ',r.jsx("code",{children:"No"})," suffix.  For example, the values for ",r.jsx("code",{children:"pageNo"})," range from ",r.jsx("code",{children:"1"})," to ",r.jsx("code",{children:"pages"}),", and will always be one more than ",r.jsx("code",{children:"page"}),"."]}),r.jsx(nv,{items:[["pages","The total number of pages, as passed into the component as a property."],["page","The index (0 based) of the current page, as passed into the component as a property."],["setPage","The function for setting a page index, as passed into the component as a property."],["pageNo",r.jsxs(r.Fragment,{children:["The current page number (1 based), effectively one louder than ",r.jsx("code",{children:"page"}),".  e.g. if ",r.jsx("code",{children:"page"})," is ten then this goes up to eleven."]})],["firstPage","The index (0 based) of the first page.  This is always 0 but is included for completeness."],["firstPageNo","The number (1 based) of the first page.  This is always 1 but is included for completeness."],["lastPage","The index (0 based) of the last page."],["lastPageNo","The number (1 based) of the first page."],["prevPage","The index (0 based) of the previous page."],["prevPageNo","The number (1 based) of the previous page."],["nextPage","The index (0 based) of the next page."],["nextPageNo","The number (1 based) of the next page."]]}),r.jsx("h2",{children:"Custom Components"}),r.jsxs("p",{children:["You can provide your own components to render certain elements of the pager widget. These will be passed relevant parameters as properties and can use the ",r.jsx("code",{children:"usePager()"})," hook to access the full pager context, including any additional properties that you pass to the ",r.jsx("code",{children:"Pager"})," component."]}),r.jsxs("p",{children:["In this example we define a custom ",r.jsx("code",{children:"MyPageButton"})," component to replace the ",r.jsx("code",{children:"Page"})," component that renders the numbered page buttons.  Instead of displaying page numbers it shows alphabetical ranges for each button, defined in a custom ",r.jsx("code",{children:"pageRanges"})," "," ","property."]}),r.jsx(re,{Component:AF,code:MF})]}),IF=Object.freeze(Object.defineProperty({__proto__:null,default:rv},Symbol.toStringTag,{value:"Module"})),zF=()=>{const[e,t]=v.useState(0);return r.jsx(Xt,{pages:11,page:e,setPage:t})},FF=`import { Pager } from '@/src/index.jsx'

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

export default PagerExample`,ov=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Pager"})," component generates buttons for navigating through several pages."]}),r.jsxs("p",{children:["The three mandatory properties are ",r.jsx("code",{children:"pages"})," indicating the total number of pages, ",r.jsx("code",{children:"page"})," for the current page index (ranging from 0 to ",r.jsx("code",{children:"pages"})," - 1) and a"," ",r.jsx("code",{children:"setPage"})," handler to set the page index."]}),r.jsx(re,{Component:zF,code:FF})]}),UF=Object.freeze(Object.defineProperty({__proto__:null,default:ov},Symbol.toStringTag,{value:"Module"})),VF=()=>{const[e,t]=v.useState(0);return r.jsx("div",{className:"grid-1 gap-4",children:r.jsx(Xt,{pages:11,page:e,setPage:t,className:"pager small brand border pad-2 bdr-2 bgc-90 bgd-10"})})},HF=`import React, { useState } from 'react'
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
`,av=()=>r.jsx(N,{code:"className",Component:VF,Source:HF,undent:4,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"className"})," property can be used to set a CSS class for the pager container.  The default value is ",r.jsx("code",{children:"pager"}),"."]})}),WF=Object.freeze(Object.defineProperty({__proto__:null,default:av},Symbol.toStringTag,{value:"Module"})),ZF=()=>{const[e,t]=v.useState(0);return r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(Xt,{pages:11,page:e,setPage:t,color:"red"}),r.jsx(Xt,{pages:11,page:e,setPage:t,color:"green"}),r.jsx(Xt,{pages:11,page:e,setPage:t,color:"blue"})]})},KF=`import React, { useState } from 'react'
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
`,sv=()=>r.jsx(N,{code:"color",Component:ZF,Source:KF,undent:4,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"color"})," property can be used to set the color range used for the buttons.  This is a short-cut which adds the specified color to the CSS class for the pager container."]})}),YF=Object.freeze(Object.defineProperty({__proto__:null,default:sv},Symbol.toStringTag,{value:"Module"})),GF=()=>{const[e,t]=v.useState(0);return r.jsx(Xt,{pages:11,page:e,setPage:t,prevIcon:"angle-left",nextIcon:"angle-right"})},qF=`import React, { useState } from 'react'
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
`,lv=()=>r.jsx(N,{code:"prevIcon / nextIcon",Component:GF,Source:qF,undent:4,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"prevIcon"})," and ",r.jsx("code",{children:"nextIcon"})," properties can be used to set the icons for the previous and next page button."]})}),XF=Object.freeze(Object.defineProperty({__proto__:null,default:lv},Symbol.toStringTag,{value:"Module"})),QF=()=>{const[e,t]=v.useState(0);return r.jsx(Xt,{pages:11,page:e,setPage:t,nextIcon:"angle-right"})},JF=`import React, { useState } from 'react'
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
`,eU=()=>r.jsx(N,{code:"nextIcon",Component:QF,Source:JF,undent:4,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"nextIcon"})," property can be used to set the icon for the next page button."]})}),tU=Object.freeze(Object.defineProperty({__proto__:null,default:eU},Symbol.toStringTag,{value:"Module"})),nU=()=>{const[e,t]=v.useState(0);return r.jsx(Xt,{pages:11,page:e,setPage:t,showFirstLast:!1})},rU=`import React, { useState } from 'react'
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
`,iv=()=>r.jsxs(N,{code:"showFirstLast",Component:nU,Source:rU,undent:4,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"showFirstLast"})," property determines if the first and last pages are shown in the set of numbered page buttons. A button for the first page will be displayed when it is less than previous page.  The last page button will be displayed when it is greater than the next page."]}),r.jsxs("p",{children:["This value defaults to ",r.jsx("code",{children:"true"})," but can be set"," ",r.jsx("code",{children:"false"})," to hide these buttons."]})]}),oU=Object.freeze(Object.defineProperty({__proto__:null,default:iv},Symbol.toStringTag,{value:"Module"})),aU=()=>{const[e,t]=v.useState(0);return r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(Xt,{pages:11,page:e,setPage:t,size:"smaller"}),r.jsx(Xt,{pages:11,page:e,setPage:t,size:"small"})]})},sU=`import React, { useState } from 'react'
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
`,cv=()=>r.jsx(N,{code:"size",Component:aU,Source:sU,undent:4,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"size"})," property can be used to set the size to one of the standard sizes.  This is also a short-cut for adding the size as a CSS class so you can use it to add any of your own size classes."]})}),lU=Object.freeze(Object.defineProperty({__proto__:null,default:cv},Symbol.toStringTag,{value:"Module"})),iU=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Pager"}),r.jsx(ov,{}),r.jsx(rv,{}),r.jsxs(Ze,{tocName:"pager",children:[r.jsx(se,{title:"Properties"}),r.jsx(av,{}),r.jsx(sv,{}),r.jsx(cv,{}),r.jsx(lv,{}),r.jsx(iv,{}),r.jsxs(ho,{children:[r.jsxs("div",{className:"flow",children:[r.jsx(se,{title:"CSS Classes"}),r.jsxs(F,{code:"className",children:["Used to set the CSS class for the pager container.  The default value is ",r.jsx("code",{children:"pager"}),"."]}),r.jsxs(F,{code:"buttonClass",children:["Used to set a default CSS class for all buttons.  The default value is ",r.jsx("code",{children:"outline"}),"."]}),r.jsxs(F,{code:"prevClass",children:["Used to set the CSS class for the previous page button.  It defaults to the value for ",r.jsx("code",{children:"buttonClass"}),"."]}),r.jsxs(F,{code:"nextClass",children:["Used to set the CSS class for the next page button.  It defaults to the value for ",r.jsx("code",{children:"buttonClass"}),"."]}),r.jsxs(F,{code:"pagesClass",children:["Used to set the CSS class for the numbered page buttons container. The default value is ",r.jsx("code",{children:"pages"}),"."]}),r.jsxs(F,{code:"pageClass",children:["Used to set the CSS class for individual numbered page buttons.  It defaults to the value for ",r.jsx("code",{children:"buttonClass"}),"."]}),r.jsxs(F,{code:"currentPageClass",children:["Used to set the CSS class for the currently selected numbered page button. The default value is ",r.jsx("code",{children:"solid"}),"."]})]}),r.jsxs("div",{className:"flow",children:[r.jsx(se,{title:"Components"}),r.jsxs(F,{code:"Previous",id:"Previous-component",children:["Renders the previous page button.  Defaults to ",r.jsx("code",{children:"PagerPrevious"}),"."]}),r.jsxs(F,{code:"Next",id:"Next-component",children:["Renders the next page button.  Defaults to ",r.jsx("code",{children:"PagerNext"}),"."]}),r.jsxs(F,{code:"Pages",id:"Pages-component",children:["Renders the collection of numbered page buttons.  Defaults to ",r.jsx("code",{children:"PagerPages"}),"."]}),r.jsxs(F,{code:"Page",id:"Page-component",children:["Renders an individual page button.  Defaults to ",r.jsx("code",{children:"PagerPage"}),"."]}),r.jsxs(F,{code:"Separator",id:"Separator-component",children:["Renders the separator between the first and/or last pages and the rest of the numbered page buttons. Defaults to ",r.jsx("code",{children:"PagerSeparator"}),"."]})]})]})]})]}),cU=Object.freeze(Object.defineProperty({__proto__:null,default:iU},Symbol.toStringTag,{value:"Module"})),dU=()=>{const[e,t]=v.useState(!1);return r.jsx(On,{value:e,onChange:t,options:["David","Nigel","Derek"]})},uU=`import { Radio } from '@/src/index.jsx'

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

export default RadioExample`,dv=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Radio"})," component renders a set of radio buttons."]}),r.jsx(re,{Component:dU,code:uU,expand:!0})]}),pU=Object.freeze(Object.defineProperty({__proto__:null,default:dv},Symbol.toStringTag,{value:"Module"})),hU=()=>{const[e,t]=v.useState(!1),[n,o]=v.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsx(On,{border:!0,labelClass:"mar-b-2",value:e,onChange:t,options:["David","Nigel","Derek"]}),r.jsx(On,{border:!0,inline:!0,labelClass:"mar-r-2",value:n,onChange:o,options:["David","Nigel","Derek"]})]})},fU=`import { Radio } from '@/src/index.jsx'
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

export default BorderExample`,uv=()=>r.jsxs(N,{code:"border",Component:hU,Source:fU,undent:4,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"border"})," property can be set to add a border to each item."]}),r.jsxs("p",{children:["You may need to add margins to either the bottom or right side of each label using the ",r.jsx("code",{children:"labelClass"})," property."]})]}),mU=Object.freeze(Object.defineProperty({__proto__:null,default:uv},Symbol.toStringTag,{value:"Module"})),xU=()=>{const[e,t]=v.useState(!1);return r.jsx(On,{className:"grid-3 gap-2",value:e,onChange:t,options:["David","Nigel","Derek"]})},gU=`import { Radio } from '@/src/index.jsx'
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

export default ClassName`,pv=()=>r.jsx(N,{code:"className",Component:xU,Source:gU,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"className"})," property can be used to add a CSS class to the container element."]})}),vU=Object.freeze(Object.defineProperty({__proto__:null,default:pv},Symbol.toStringTag,{value:"Module"})),bU=()=>{const[e,t]=v.useState(!1);return r.jsx(On,{value:e,onChange:t,options:[{value:"david",text:"David St. Hubbins"},{value:"nigel",text:"Nigel Tufnel"},{value:"derek",text:"Derek Smalls"},{value:"john",text:'John "Stumpy" Pepys',disabled:!0},{value:"eric",text:'Eric "Stumpy Joe" Childs',disabled:!0},{value:"peter",text:'Peter "James" Bond',disabled:!0},{value:"mick",text:"Mick Shrimpton",disabled:!0}]})},yU=`import { Radio } from '@/src/index.jsx'
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

export default DisabledExample`,hv=()=>r.jsx(N,{code:"disabled",Component:bU,Source:yU,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"disabled"})," property can be added to an option to disable it."]})}),jU=Object.freeze(Object.defineProperty({__proto__:null,default:hv},Symbol.toStringTag,{value:"Module"})),SU=()=>{const[e,t]=v.useState(!1);return r.jsx(On,{inline:!0,value:e,onChange:t,options:["David","Nigel","Derek"]})},CU=`import { Radio } from '@/src/index.jsx'
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

export default InlineExample`,fv=()=>r.jsx(N,{code:"inline",Component:SU,Source:CU,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"inline"})," property can be set to create inline radio buttons."]})}),wU=Object.freeze(Object.defineProperty({__proto__:null,default:fv},Symbol.toStringTag,{value:"Module"})),_U=()=>{const[e,t]=v.useState(!1);return r.jsx(On,{name:"tap",value:e,onChange:t,options:["David","Nigel","Derek"]})},TU=`import { Radio } from '@/src/index.jsx'
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

export default NameExample`,mv=()=>r.jsx(N,{code:"name",Component:_U,Source:TU,undent:4,expand:!0,children:r.jsxs("p",{children:["Each radio set should have a unique name so that the web browser knows which options belong to a particular group.  You can provider one explicitly using the ",r.jsx("code",{children:"name"})," property, otherwise one will be generated for you."]})}),kU=Object.freeze(Object.defineProperty({__proto__:null,default:mv},Symbol.toStringTag,{value:"Module"})),EU=()=>{const[e,t]=v.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsx(On,{value:e,onChange:t,options:["David","Nigel","Derek"]}),!!e&&r.jsxs("div",{className:"mar-t-2",children:["Selected value: ",e]})]})},NU=`import { Radio } from '@/src/index.jsx'
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

export default OnChangeExample`,It=({id:e,text:t})=>r.jsx("a",{href:`#${Hh(e||t)}`,className:"code",children:t}),xv=()=>r.jsx(N,{code:"onChange",Component:EU,Source:NU,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"onChange"})," property should be used to define a function to handle changes in the state.  This will typically be used to update the ",r.jsx(It,{text:"value"}),"."]})}),RU=Object.freeze(Object.defineProperty({__proto__:null,default:xv},Symbol.toStringTag,{value:"Module"})),OU=()=>{const[e,t]=v.useState(!1);return r.jsx(On,{value:e,onChange:t,options:[{value:"david",text:"David St. Hubbins"},{value:"nigel",text:"Nigel Tufnel"},{value:"derek",text:"Derek Smalls"}]})},LU=`import { Radio } from '@/src/index.jsx'
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

export default OptionsExample`,gv=()=>r.jsx(N,{code:"options",Component:OU,Source:LU,undent:4,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"options"})," property should be used to define the values for each radio button.  These can be simple values (e.g. strings or numbers) as shown in the preceding examples.  For more complex cases you should define each element as an object containing a"," ",r.jsx("code",{children:"value"})," and any of ",r.jsx("code",{children:"text"}),", ",r.jsx("code",{children:"label"})," or"," ",r.jsx("code",{children:"name"})," for the displayed text."]})}),DU=Object.freeze(Object.defineProperty({__proto__:null,default:gv},Symbol.toStringTag,{value:"Module"})),BU=()=>{const[e,t]=v.useState(!1);return r.jsx(On,{value:e,onChange:t,options:["David","Nigel","Derek"]})},$U=`import { Radio } from '@/src/index.jsx'
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

export default ValueExample`,vv=()=>r.jsx(N,{code:"value",Component:BU,Source:$U,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"value"})," property should be used to define the current selected value.  This should be used in conjunction with"," ",r.jsx(It,{text:"onChange"})," to update the value."]})}),AU=Object.freeze(Object.defineProperty({__proto__:null,default:vv},Symbol.toStringTag,{value:"Module"})),MU=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Radio"}),r.jsx(dv,{}),r.jsxs(Ze,{tocName:"radio",children:[r.jsx(se,{title:"Properties"}),r.jsx(vv,{}),r.jsx(xv,{}),r.jsx(mv,{}),r.jsx(pv,{}),r.jsx(fv,{}),r.jsx(uv,{}),r.jsx(se,{title:"Option Properties"}),r.jsx(gv,{}),r.jsx(hv,{})]})]}),PU=Object.freeze(Object.defineProperty({__proto__:null,default:MU},Symbol.toStringTag,{value:"Module"})),IU=["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger"],zU=()=>{const e=t=>IU.filter(n=>n.toLowerCase().indexOf(t.toLowerCase())!==-1);return r.jsx(La,{onSearch:e})},FU=`import { Search } from '@/src/index.jsx'

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

export default SearchExample`,bv=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Search"}),' component implements the familiar "autocomplete" functionality.']}),r.jsx("p",{children:"The user starts typing and after a short debounce delay a set of results matching their input is displayed. The user can then click on a result or use the keyboard to navigate through the results."}),r.jsx(re,{Component:zU,code:FU})]}),UU=Object.freeze(Object.defineProperty({__proto__:null,default:bv},Symbol.toStringTag,{value:"Module"})),VU=[{name:"Alan Aardvark",tel:"555-1245"},{name:"Amy Aardvark",tel:"555-2233"},{name:"Anne Aardvark",tel:"555-6565"},{name:"Bart Badger",tel:"555-4201"},{name:"Betty Badger",tel:"555-1111"},{name:"Bobby Badger",tel:"555-9876"},{name:"Brenda Badger",tel:"555-3443"},{name:"Brian Badger",tel:"555-1337"}],HU=()=>{const e=n=>r.jsxs("div",{className:"flex space baseline",children:[r.jsx("div",{children:n.name}),r.jsx("div",{className:"smaller",children:n.tel})]}),t=n=>VU.filter(o=>o.name.toLowerCase().indexOf(n.toLowerCase())!==-1);return r.jsx(La,{onSearch:t,displayResult:e})},WU=`import { Search } from '@/src/index.jsx'

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

export default DisplayResultExample`,yv=()=>r.jsx(N,{code:"displayResult",Component:HU,Source:WU,children:r.jsxs("p",{children:["If a result is a text string then it will be displayed as the result. If it's an object containing a ",r.jsx("code",{children:"text"}),","," ",r.jsx("code",{children:"label"})," or ",r.jsx("code",{children:"name"})," property then that will be used as the display value.  Otherwise you can provide a"," ",r.jsx("code",{children:"displayResult"})," function to display the result any way you like."]})}),ZU=Object.freeze(Object.defineProperty({__proto__:null,default:yv},Symbol.toStringTag,{value:"Module"})),KU=[{id:100,name:"Alan Aardvark",tel:"555-1245"},{id:101,name:"Amy Aardvark",tel:"555-2233"},{id:102,name:"Anne Aardvark",tel:"555-6565"},{id:110,name:"Bart Badger",tel:"555-4201"},{id:111,name:"Betty Badger",tel:"555-1111"},{id:112,name:"Bobby Badger",tel:"555-9876"},{id:113,name:"Brenda Badger",tel:"555-3443"},{id:114,name:"Brian Badger",tel:"555-1337"}],YU=()=>{const e=n=>`#${n.id}: ${n.name} (${n.tel})`,t=n=>KU.filter(o=>o.name.toLowerCase().indexOf(n.toLowerCase())!==-1);return r.jsx(La,{onSearch:t,displayValue:e})},GU=`import { Search } from '@/src/index.jsx'

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

export default DisplayValueExample`,jv=()=>r.jsx(N,{code:"displayValue",Component:YU,Source:GU,children:r.jsxs("p",{children:["When a result is selected the same rules will be applied to display the result in the search input.  If it's not a string or an object containing one of the aforementioned properties then you should provide a ",r.jsx("code",{children:"displayValue"})," function to convert the result to a text string that can be displayed."]})}),qU=Object.freeze(Object.defineProperty({__proto__:null,default:jv},Symbol.toStringTag,{value:"Module"})),XU=["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Beatrice Badger","Belinda Badger","Ben Badger","Bert Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger","Brook Badger","Buzz Badger"],QU=()=>{const e=async t=>Ar(500).then(()=>XU.filter(n=>n.toLowerCase().indexOf(t.toLowerCase())!==-1));return r.jsx(La,{onSearch:e,debug:!0})},JU=`import { Search } from '@/src/index.jsx'
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

export default OnSearchExample`,Sv=()=>r.jsx(N,{code:"onSearch",Component:QU,Source:JU,children:r.jsxs("p",{children:["You should provide an ",r.jsx("code",{children:"onSearch"})," function which will be passed the search input and should return an array of results.  This can be an asynchronous function if necessary.  For example, a function which makes an API request to fetch the matching results."]})}),eV=Object.freeze(Object.defineProperty({__proto__:null,default:Sv},Symbol.toStringTag,{value:"Module"})),tV=["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Beatrice Badger","Belinda Badger","Ben Badger","Bert Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger","Brook Badger","Buzz Badger"],nV=()=>{const e=n=>tV.filter(o=>o.toLowerCase().indexOf(n.toLowerCase())!==-1),t=n=>alert(`You selected ${n}`);return r.jsx(La,{onSearch:e,onSelect:t})},rV=`import { Search } from '@/src/index.jsx'

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

export default OnSelectExample`,Cv=()=>r.jsx(N,{code:"onSelect",Component:nV,Source:rV,children:r.jsxs("p",{children:["You can define an ",r.jsx("code",{children:"onSelect"})," function which will be called when an option is selected."]})}),oV=Object.freeze(Object.defineProperty({__proto__:null,default:Cv},Symbol.toStringTag,{value:"Module"})),aV=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Search"}),r.jsx(bv,{}),r.jsxs(Ze,{tocName:"search",children:[r.jsx(se,{title:"Properties"}),r.jsx(Sv,{}),r.jsx(Cv,{}),r.jsx(yv,{}),r.jsx(jv,{})]})]}),sV=Object.freeze(Object.defineProperty({__proto__:null,default:aV},Symbol.toStringTag,{value:"Module"})),lV=["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger","Colin Camel","David Donkey","Eddie Elephant","Franky Ferret","Gina Goat","Helen Horse","Ian Iguana","Juliet Jackdaw","Kevin Kangaroo","Linda Llama"],iV=()=>r.jsx(nn,{options:lV}),cV=`import { Select } from '@/src/index.jsx'

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

export default SelectExample`,wv=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Select"})," component implements a custom select input."]}),r.jsx(re,{Component:iV,code:cV}),r.jsx("h2",{children:"Context"}),r.jsx("p",{children:"A react context is created which provides the items listed below. Any other properties passed in to the component will also be accessible to child components."}),r.jsxs("p",{children:["Custom components can be wrapped with the ",r.jsx("code",{children:"SelectConsumer"})," ","higher order component to receive these items as properties.  Or you can use the ",r.jsx("code",{children:"useSelect"})," hook to access them."]}),r.jsx(nv,{items:[["close","Handler to close the menu."],["cursor",r.jsxs(r.Fragment,{children:["The index of the currently selected option in the ",r.jsx("code",{children:"options"})," array"]})],["disabled","Boolean flag indicating if the input is disabled"],["displayOption","Function to display the content for an option"],["input","The current input value displayed in the field."],["isOpen","Boolean flag indicating if the menu of options is displayed."],["menuRef","A React reference for the menu container."],["onBlur","Handler for blur events."],["onClick","Handler for click events."],["onFocus","Handler for focus events."],["onKeyDown","Handler for keyboard events."],["open","Handler to open the menu."],["options","The array of selection options."],["selected",r.jsxs(r.Fragment,{children:["The selected element in the ",r.jsx("code",{children:"options"})," array"]})],["selectCursor","Handler to select the option indexed by the cursor."],["selectOption","Handler to select an option."],["setCursor","Handler to set the cursor"],["validOption","Function to determine if an option is valid (i.e. not disabled)"],["value","The value of the current selected option."]]})]}),dV=Object.freeze(Object.defineProperty({__proto__:null,default:wv},Symbol.toStringTag,{value:"Module"})),uV=[{name:"Alan Aardvark",tel:"555-1245"},{name:"Amy Aardvark",tel:"555-2233"},{name:"Anne Aardvark",tel:"555-6565"},{name:"Bart Badger",tel:"555-4201"},{name:"Betty Badger",tel:"555-1111"},{name:"Bobby Badger",tel:"555-9876"},{name:"Brenda Badger",tel:"555-3443"},{name:"Brian Badger",tel:"555-1337"}],pV=()=>{const e=t=>r.jsxs("div",{className:"flex space baseline",children:[r.jsx("div",{children:t.name}),r.jsx("div",{className:"smaller",children:t.tel})]});return r.jsx(nn,{options:uV,displayOption:e})},hV=`import { Select } from '@/src/index.jsx'

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

export default DisplayOptionExample`,_v=()=>r.jsx(N,{code:"displayOption",Component:pV,Source:hV,expand:!0,children:r.jsxs("p",{children:["If an option is a text string then it will be displayed as it is. If it's an object containing a ",r.jsx("code",{children:"text"}),","," ",r.jsx("code",{children:"label"})," or ",r.jsx("code",{children:"name"})," property then that will be used as the display value.  Otherwise you can provide a"," ",r.jsx("code",{children:"displayOption"})," function to display the result any way you like."]})}),fV=Object.freeze(Object.defineProperty({__proto__:null,default:_v},Symbol.toStringTag,{value:"Module"})),mV=[{id:100,name:"Alan Aardvark",tel:"555-1245"},{id:101,name:"Amy Aardvark",tel:"555-2233"},{id:102,name:"Anne Aardvark",tel:"555-6565"},{id:110,name:"Bart Badger",tel:"555-4201"},{id:111,name:"Betty Badger",tel:"555-1111"},{id:112,name:"Bobby Badger",tel:"555-9876"},{id:113,name:"Brenda Badger",tel:"555-3443"},{id:114,name:"Brian Badger",tel:"555-1337"}],xV=()=>{const e=t=>r.jsxs("div",{className:"flex baseline",children:[r.jsxs("span",{className:"smaller mar-r-2",children:["#",t.id]})," ",t.name," (",t.tel,")"]});return r.jsx(nn,{options:mV,displayValue:e})},gV=`import { Select } from '@/src/index.jsx'

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

export default DisplayValueExample`,Tv=()=>r.jsx(N,{code:"displayValue",Component:xV,Source:gV,expand:!0,children:r.jsxs("p",{children:["When an option is selected the same rules will be applied to display the option in the search input.  If it's not a string or an object containing one of the aforementioned properties then you should provide a ",r.jsx("code",{children:"displayValue"})," function to convert the result to a text string that can be displayed."]})}),vV=Object.freeze(Object.defineProperty({__proto__:null,default:Tv},Symbol.toStringTag,{value:"Module"})),bV=[{id:101,name:"Alan Aardvark"},{id:102,name:"Amy Aardvark"},{id:103,name:"Anne Aardvark",disabled:!0},{id:104,name:"Bart Badger"},{id:105,name:"Betty Badger"},{id:106,name:"Bobby Badger",disabled:!0},{id:107,name:"Brenda Badger"},{id:108,name:"Brian Badger"},{id:109,name:"Colin Camel",disabled:!0},{id:110,name:"Derek Donkey"}],yV=()=>r.jsx(nn,{options:bV}),jV=`import { Select } from '@/src/index.jsx'

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

export default OptionsExample`,kv=()=>r.jsxs(N,{code:"options",Component:yV,Source:jV,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"options"})," property should be used to provide an array of options that the user can select from.  Each element in the array can be a string, numerical value or an object."]}),r.jsxs("p",{children:["When the ",r.jsx("code",{children:"options"})," contains an array of objects, each object element should have an ",r.jsx("code",{children:"id"})," or ",r.jsx("code",{children:"value"})," property to uniquely identify it.  By default, options will be displayed using the ",r.jsx("code",{children:"text"}),", ",r.jsx("code",{children:"label"})," or ",r.jsx("code",{children:"name"})," property. Alternately, you can define your own ",r.jsx(It,{text:"displayOption"})," function to display an option in the selection list and/or a"," ",r.jsx(It,{text:"displayValue"})," function to display the selected value."]}),r.jsxs("p",{children:["The ",r.jsx("code",{children:"disabled"})," "," property can be used to mark an option as disabled, or you can define a ",r.jsx(It,{text:"validOption"})," function to implement a different strategy to identify unselectable options."]})]}),SV=Object.freeze(Object.defineProperty({__proto__:null,default:kv},Symbol.toStringTag,{value:"Module"})),CV=["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger","Ignored Iguana"],wV=()=>r.jsx(nn,{search:!0,options:CV}),_V=`import { Select } from '@/src/index.jsx'

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

export default SearchExample`,TV=[{id:1,name:"Alan Aardvark"},{id:2,name:"Amy Aardvark"},{id:3,name:"Anne Aardvark"},{id:4,name:"Bart Badger"},{id:5,name:"Betty Badger"},{id:6,name:"Bobby Badger"},{id:7,name:"Brenda Badger"},{id:8,name:"Brian Badger"},{id:9,name:"Ignored Iguana",disabled:!0}],kV=()=>r.jsx(nn,{search:!0,options:TV}),EV=`import { Select } from '@/src/index.jsx'

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

export default SearchExample`,Ev=()=>r.jsxs(F,{code:"search",children:[r.jsxs("div",{className:"cols-2 stack-desktop mar-b-4",children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"search"})," property can be set to enable searching of options.  In the simple case this can work where the"," ",r.jsx("code",{children:"options"})," are all strings.  The default search function will case-insensitively match options that contain all of the words entered in the search input."]}),r.jsxs("p",{children:["Try entering ",r.jsx("code",{children:"aa an"})," in the search input in the example below. It will match options that contain both ",r.jsx("code",{children:"aa"})," ","(e.g all the ",r.jsx("b",{children:"Aa"}),"rdvarks) and ",r.jsx("code",{children:"an"})," (Al",r.jsx("b",{children:"an"})," Aardvark,"," ",r.jsx("b",{children:"An"}),"ne Aardvark and Bri",r.jsx("b",{children:"an"})," Badger)."]})]}),r.jsx(re,{Component:wV,code:_V}),r.jsx("div",{className:"cols-2 stack-desktop mar-b-4",children:r.jsxs("p",{children:["If the ",r.jsx("code",{children:"options"})," are an array of objects then it will look for a ",r.jsx("code",{children:"search"}),", ",r.jsx("code",{children:"text"}),", ",r.jsx("code",{children:"label"}),","," ",r.jsx("code",{children:"name"})," or ",r.jsx("code",{children:"value"})," property in each object and use that."]})}),r.jsx(re,{Component:kV,code:EV})]}),NV=Object.freeze(Object.defineProperty({__proto__:null,default:Ev},Symbol.toStringTag,{value:"Module"})),RV=[{id:1,name:"Alan",department:"Accounts"},{id:2,name:"Amelia",department:"Accounts"},{id:3,name:"Anne",department:"Sales"},{id:4,name:"Bart",department:"Sales"},{id:5,name:"Betty",department:"Shipping"},{id:6,name:"Bobby",department:"Sales"},{id:7,name:"Brenda",department:"Management"},{id:8,name:"Bruce",department:"Management"}],OV=(e,t)=>{const n=e.toLowerCase();return t.filter(o=>o.name.toLowerCase().indexOf(n)>=0||o.department.toLowerCase().indexOf(n)>=0)},LV=e=>r.jsxs("div",{className:"flex space baseline",children:[r.jsx("div",{children:e.name}),r.jsx("div",{className:"smaller",children:e.department})]}),DV=()=>r.jsx(nn,{search:!0,options:RV,searchOptions:OV,displayOption:LV}),BV=`import { Select } from '@/src/index.jsx'

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

export default SearchExample`,Nv=()=>r.jsxs(N,{code:"searchOptions",Component:DV,Source:BV,expand:!0,children:[r.jsxs("p",{children:["You can define your own ",r.jsx("code",{children:"searchOptions"})," function to search through the ",r.jsx("code",{children:"options"})," and return matching results. The first argument passed is the search string.  The second argument is the array of options.  The function should filter the options and return those that match the search string according to whatever logic you care to implement."]}),r.jsxs("p",{children:["In this example we implement a search function which will match against the user's ",r.jsx("code",{children:"name"})," or their ",r.jsx("code",{children:"department"}),". Try entering ",r.jsx("code",{children:"an"}),".  It will match Al",r.jsx("b",{children:"an"}),", and ",r.jsx("b",{children:"An"}),"ne by name, and also Brenda and Bruce from M",r.jsx("b",{children:"an"}),"agement."]})]}),$V=Object.freeze(Object.defineProperty({__proto__:null,default:Nv},Symbol.toStringTag,{value:"Module"})),AV=[{id:101,name:"Alan Aardvark"},{id:102,name:"Amy Apple",isFruit:!0},{id:103,name:"Anne Aardvark"},{id:104,name:"Bart Banana",isFruit:!0},{id:105,name:"Betty Badger"},{id:106,name:"Bobby Badger"},{id:107,name:"Brenda Badger"},{id:108,name:"Brian Badger"},{id:109,name:"Colin Cherry",isFruit:!0},{id:110,name:"Derek Donkey"}],MV=()=>r.jsx(nn,{validOption:e=>!e.isFruit,options:AV}),PV=`import { Select } from '@/src/index.jsx'

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

export default OptionsExample`,Rv=()=>r.jsxs(N,{code:"validOption",Component:MV,Source:PV,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"validOption"})," property can be used to provide a function that determines if an option is valid and can be selected.  The default function uses the ",r.jsx("code",{children:"disabled"})," property in an option to identify invalid options."]}),r.jsxs("p",{children:["In this example we define a ",r.jsx("code",{children:"validOption"})," function which rejects any options that have the ",r.jsx("code",{children:"isFruit"})," flag set."]})]}),IV=Object.freeze(Object.defineProperty({__proto__:null,default:Rv},Symbol.toStringTag,{value:"Module"})),zV=["Alan Aardvark","Amy Aardvark","Anne Aardvark","Bart Badger","Betty Badger","Bobby Badger","Brenda Badger","Brian Badger"],FV=()=>r.jsx(nn,{options:zV,value:"Bobby Badger"}),UV=`import { Select } from '@/src/index.jsx'

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

export default ValueExample`,VV=[{id:1,name:"Alan Aardvark"},{id:2,name:"Amy Aardvark"},{id:3,name:"Anne Aardvark"},{id:4,name:"Bart Badger"},{id:5,name:"Betty Badger"},{id:6,name:"Bobby Badger"},{id:7,name:"Brenda Badger"},{id:8,name:"Brian Badger"}],HV=()=>r.jsx(nn,{options:VV,value:5}),WV=`import { Select } from '@/src/index.jsx'

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

export default ValueExample`,Ov=()=>r.jsxs(F,{code:"value",children:[r.jsx("div",{className:"cols-2 stack-desktop mar-b-4",children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"value"})," property can be used to pre-select a value."]})}),r.jsx(re,{Component:FV,code:UV,caption:"value",expand:!1}),r.jsx("div",{className:"cols-2 stack-desktop mar-b-4",children:r.jsxs("p",{children:["When the ",r.jsx("code",{children:"options"})," are defined as an array of objects, the specified ",r.jsx("code",{children:"value"})," should correspond to the"," ",r.jsx("code",{children:"value"})," or ",r.jsx("code",{children:"id"})," property of an element in the ",r.jsx("code",{children:"options"})," array."]})}),r.jsx(re,{Component:HV,code:WV,caption:"value",expand:!1})]}),ZV=Object.freeze(Object.defineProperty({__proto__:null,default:Ov},Symbol.toStringTag,{value:"Module"})),KV=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Select"}),r.jsx(wv,{}),r.jsxs(Ze,{tocName:"select",children:[r.jsx(se,{title:"Properties"}),r.jsx(kv,{}),r.jsx(Ov,{}),r.jsx(_v,{}),r.jsx(Tv,{}),r.jsx(Rv,{}),r.jsx(Ev,{}),r.jsx(Nv,{}),r.jsx(F,{code:"disabled",split:!0,children:"Boolean flag to set the select input to be disabled."}),r.jsxs(F,{code:"placeholder",split:!0,children:["Set the placeholder text.  The default is ",r.jsx("code",{children:"Select"}),"."]}),r.jsxs(F,{code:"noOptions",split:!0,children:["Set the text displayed when there are no options to select from. The default is ",r.jsx("code",{children:"No options"}),"."]}),r.jsxs(F,{code:"openOnHover",split:!0,children:["Flag to indicate that the option menu should open when the cursor hovers over the trigger input.  Defaults to ",r.jsx("code",{children:"false"}),"."]}),r.jsxs(F,{code:"closeOnBlur",split:!0,children:["Flag to indicate that the option menu should close when focus is lost. Defaults to ",r.jsx("code",{children:"true"}),"."]}),r.jsxs(F,{code:"closeDelay",split:!0,children:["Delay (in milliseconds) before the menu is closed.  This is required to ensure that any click events have been registered before the menu is closed. Defaults to ",r.jsx("code",{children:"300"}),"."]}),r.jsxs(ho,{children:[r.jsxs("div",{className:"flow",children:[r.jsx(se,{title:"Event Handlers"}),r.jsxs(F,{code:"onLoad",children:["Called when the component is first loaded.  The handler is passed a reference to the ",r.jsx("code",{children:"SearchContext"})," object."]}),r.jsxs(F,{code:"onUnload",children:["Called when the component is unloaded.  The handler is passed a reference to the ",r.jsx("code",{children:"SearchContext"})," object."]}),r.jsx(F,{code:"onFocus",children:"Called when the component gains focus."}),r.jsx(F,{code:"onBlur",children:"Called when the component loses focus."}),r.jsx(F,{code:"onClick",children:"Called when the component is clicked."}),r.jsx(F,{code:"onOpen",children:"Called when the component is opened and selectable options are displayed."}),r.jsx(F,{code:"onClose",children:"Called when the component is closed and selectable options are hidden."}),r.jsx(F,{code:"onSelect",children:"Called when an option is selected.  The selection option is passed as an argument."})]}),r.jsxs("div",{className:"flow",children:[r.jsx(se,{title:"CSS Classes"}),r.jsxs(F,{code:"placeholderClass",children:["Set the class for the placeholder text. The default is ",r.jsx("code",{children:"placeholder"}),"."]}),r.jsxs(F,{code:"inputClass",children:["Set the class for the input element. The default is ",r.jsx("code",{children:"input"}),"."]}),r.jsxs(F,{code:"selectingClass",children:["Set the class added when a selection is in place. The default is ",r.jsx("code",{children:"selecting"}),"."]}),r.jsxs(F,{code:"optionsClass",children:["Set the class added for the options container. The default is ",r.jsx("code",{children:"menu border bdr-1"}),"."]}),r.jsxs(F,{code:"optionClass",children:["Set the class added to each option element. The default is ",r.jsx("code",{children:"item"}),"."]}),r.jsxs(F,{code:"activeClass",children:["Set the class added to an option that is currently active. The default is ",r.jsx("code",{children:"active"}),"."]}),r.jsxs(F,{code:"noOptionsClass",children:["Set the class added to the element displayed when there are no options to select from. The default is ",r.jsx("code",{children:"none"}),"."]})]}),r.jsxs("div",{className:"flow",children:[r.jsx(se,{title:"Components"}),r.jsx(F,{code:"Content",children:"Renders the content of the select component."}),r.jsx(F,{code:"Input",children:"Renders the input field."}),r.jsx(F,{code:"Options",id:"Options-component",children:"Renders the selectable options."}),r.jsx(F,{code:"Option",children:"Renders an individual option."}),r.jsx(F,{code:"NoOptions",id:"NoOptions-component",children:"Renders a message indicating that there are no options to select from."})]})]})]})]}),YV=Object.freeze(Object.defineProperty({__proto__:null,default:KV},Symbol.toStringTag,{value:"Module"})),B1=[{id:100,animal:"Ant"},{id:101,animal:"Bat"},{id:102,animal:"Cat"},{id:103,animal:"Dog"}],GV=()=>{const[e,t]=J.useState(!1),[n,o]=J.useState(B1),a=i=>{o(i),t(!0)},s=()=>{o(B1.map(i=>({...i,moved:!1}))),t(!1)},l=({item:i,setNodeRef:c,style:d,listeners:u,...p})=>r.jsx("div",{ref:c,style:d,className:`sortable border item mar-r-2 pad pad-h-2 bgc-95 bgd-5 ${i.moved?"moved":""}`,...p,...u,children:i.animal});return r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"flex space middle mar-b-4",children:[r.jsx("h3",{children:"Drag Items to Set Order"}),e&&r.jsx("div",{children:r.jsx(B,{color:"brown",size:"smallest",text:"Reset Order",iconLeft:"rotate-flipx",onClick:s})})]}),r.jsx("div",{className:"sortable list Horizontal",children:r.jsx(OR,{items:n,Item:l,setOrder:a})})]})},qV=`import { HorizontalSort, Button } from '@/src/index.jsx'

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

export default HorizontalSortExample`,Lv=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"HorizontalSort"})," component works exactly the same but constricts the items to be sorted horizontally."]}),r.jsx(re,{Component:GV,code:qV})]}),XV=Object.freeze(Object.defineProperty({__proto__:null,default:Lv},Symbol.toStringTag,{value:"Module"})),$1=[{id:100,animal:"Alan Aardvark"},{id:101,animal:"Brian Badger"},{id:102,animal:"Colin Camel"},{id:103,animal:"David Dog"},{id:104,animal:"Edward Elephant"},{id:105,animal:"Frank Ferret"},{id:106,animal:"Gerald Giraffe"},{id:107,animal:"Hector Hedgehog"}],QV=()=>{const[e,t]=J.useState(!1),[n,o]=J.useState($1),a=i=>{o(i),t(!0)},s=()=>{o($1.map(i=>({...i,moved:!1}))),t(!1)},l=({item:i,setNodeRef:c,style:d,listeners:u,...p})=>r.jsx("div",{ref:c,style:d,className:`sortable item border mar-r-2 mar-b-2 pad pad-h-2 bgc-95 bgd-5 ${i.moved?"moved":""}`,...p,...u,children:i.animal});return r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"flex space middle mar-b-4",children:[r.jsx("h3",{children:"Drag Items to Set Order"}),e&&r.jsx("div",{children:r.jsx(B,{color:"brown",size:"smallest",text:"Reset Order",iconLeft:"rotate-flipx",onClick:s})})]}),r.jsx("div",{className:`sortable ${e?"changed":""}`,children:r.jsx(Fh,{items:n,Item:l,setOrder:a})})]})},JV=`import { Sortable, Button } from '@/src/index.jsx'

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

export default SortableExample`,Dv=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Sortable"})," component is a wrapper around"," ",r.jsx("a",{href:"https://dndkit.com/",children:"dnd kit"})," for creating sortable components."]}),r.jsx(re,{Component:QV,code:JV})]}),eH=Object.freeze(Object.defineProperty({__proto__:null,default:Dv},Symbol.toStringTag,{value:"Module"})),A1=[{id:100,animal:"Alan Aardvark"},{id:101,animal:"Brian Badger"},{id:102,animal:"Colin Camel"},{id:103,animal:"David Dog"},{id:104,animal:"Edward Elephant"},{id:105,animal:"Frank Ferret"},{id:106,animal:"Gerald Giraffe"},{id:107,animal:"Hector Hedgehog"}],tH=()=>{const[e,t]=J.useState(!1),[n,o]=J.useState(A1),a=i=>{o(i),t(!0)},s=()=>{o(A1.map(i=>({...i,moved:!1}))),t(!1)},l=({item:i,setNodeRef:c,style:d,listeners:u,...p})=>r.jsx("div",{ref:c,style:d,className:`sortable item border mar-b-2 pad pad-h-2 bgc-95 bgd-5 ${i.moved?"moved":""}`,...p,...u,children:i.animal});return r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"flex space middle mar-b-4",children:[r.jsx("h3",{className:"mar-t-none",children:"Drag Items to Set Order"}),e&&r.jsx("div",{children:r.jsx(B,{color:"brown",size:"smallest",text:"Reset Order",iconLeft:"rotate-flipx",onClick:s})})]}),r.jsx("div",{className:"sortable list vertical",children:r.jsx(L3,{items:n,Item:l,setOrder:a})})]})},nH=`import { VerticalSort, Button } from '@/src/index.jsx'

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

export default VerticalSortExample`,Bv=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"VerticalSort"})," component works exactly the same but constricts the items to be sorted vertically."]}),r.jsx(re,{Component:tH,code:nH})]}),rH=Object.freeze(Object.defineProperty({__proto__:null,default:Bv},Symbol.toStringTag,{value:"Module"})),oH=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Sortable"}),r.jsx(Dv,{}),r.jsx("h1",{children:"Vertical Sort"}),r.jsx(Bv,{}),r.jsx("h1",{children:"Horizontal Sort"}),r.jsx(Lv,{}),r.jsx(Ze,{tocName:"sortable",children:r.jsx(ho,{children:r.jsxs("div",{className:"flow",children:[r.jsx(se,{title:"Properties"}),r.jsxs(F,{code:"items",children:["An array of items to sort.  Each should be an object which must contain an ",r.jsx("code",{children:"id"})," property to uniquely identify it."]}),r.jsxs(F,{code:"Item",children:["A component used to render each item.  It will be passed an"," ",r.jsx("code",{children:"item"})," from the list of items, ",r.jsx("code",{children:"setNodeRef"})," ","which must be added to the generate element via the ",r.jsx("code",{children:"ref"})," ","property, a ",r.jsx("code",{children:"style"})," object containing style,",r.jsx("code",{children:"listeners"})," and other ",r.jsx("code",{children:"props"})," which should be added to the element."]}),r.jsxs(F,{code:"setOrder",children:["A function which will be called when the order of items changes. It will be pass an array containing the ",r.jsx("code",{children:"items"})," in the new order."]})]})})})]}),aH=Object.freeze(Object.defineProperty({__proto__:null,default:oH},Symbol.toStringTag,{value:"Module"})),sH=()=>r.jsxs("div",{className:"x3 flex gap-3 middle wrap",children:[r.jsx(Z,{}),r.jsx(Z,{color:"red"}),r.jsx(Z,{color:"orange",fill:!0}),r.jsx(Z,{color:"yellow",fill:!0,stroke:"thin"}),r.jsx(Z,{color:"green",fill:!0,stroke:"thinner",bgIcon:"circle",bgStroke:!0,bgFill:!1}),r.jsx(Z,{color:"teal",fill:!0,stroke:"thinner",bgIcon:"circle",bgStroke:"thin"}),r.jsx(Z,{color:"blue",fill:!0,stroke:"thinner",bgIcon:"circle",bgStroke:"thinner",fillStop:90,strokeStop:60})]}),lH=`import { Spinner } from '@/src/index.jsx'

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

export default SpinnerExample`,$v=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Spinner"})," component renders a spinning icon indicating that something is happening."]}),r.jsx(re,{Component:sH,code:lH,expand:!0})]}),iH=Object.freeze(Object.defineProperty({__proto__:null,default:$v},Symbol.toStringTag,{value:"Module"})),cH=()=>r.jsx("div",{className:"x3",children:r.jsx(Z,{bgIcon:"circle",color:"blue",bgColor:"yellow"})}),dH=`import { Spinner } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Spinner } from '@abw/badger-react-ui

const SpinnerExample = () =>
  <div className="x3">
    <Spinner bgIcon="circle" color="blue" bgColor="yellow"/>
  </div>

export default SpinnerExample`,Av=()=>r.jsx(N,{code:"bgColor",Component:cH,Source:dH,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"bgColor"})," property can be used to set the color of the background icon.  It only has any effect when"," ",r.jsx(It,{text:"bgIcon"})," is set."]})}),uH=Object.freeze(Object.defineProperty({__proto__:null,default:Av},Symbol.toStringTag,{value:"Module"})),pH=()=>r.jsx("div",{className:"x3",children:r.jsx(Z,{bgIcon:"circle",bgStroke:"thin",bgFill:!1})}),hH=`import { Spinner } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Spinner } from '@abw/badger-react-ui

const SpinnerExample = () =>
  <div className="x3">
    <Spinner bgIcon="circle" bgStroke="thin" bgFill={false}/>
  </div>

export default SpinnerExample`,Mv=()=>r.jsx(N,{code:"bgFill",Component:pH,Source:hH,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"bgFill"})," property is used to fill the background icon. It is set true by default but can be explicitly set to false to disable the fill. It only has any effect when ",r.jsx(It,{text:"bgIcon"})," is set."]})}),fH=Object.freeze(Object.defineProperty({__proto__:null,default:Mv},Symbol.toStringTag,{value:"Module"})),mH=()=>r.jsxs("div",{className:"x3 flex gap-3 wrap",children:[r.jsx(Z,{bgIcon:"circle",bgFillStop:70,bgFillStopDark:30}),r.jsx(Z,{bgIcon:"circle",bgFillStop:80,bgFillStopDark:20}),r.jsx(Z,{bgIcon:"circle",bgFillStop:90,bgFillStopDark:10})]}),xH=`import { Spinner } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Spinner } from '@abw/badger-react-ui

const SpinnerExample = () =>
  <div className="x3 flex gap-3 wrap">
    <Spinner bgIcon="circle" bgFillStop={70} bgFillStopDark={30}/>
    <Spinner bgIcon="circle" bgFillStop={80} bgFillStopDark={20}/>
    <Spinner bgIcon="circle" bgFillStop={90} bgFillStopDark={10}/>
  </div>

export default SpinnerExample`,Pv=()=>r.jsx(N,{code:"bgFillStop",Component:mH,Source:xH,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"bgFillStop"})," property can be used to set color stop for the background icon fill.  The ",r.jsx("code",{children:"bgFillStopDark"})," property can be used to set it for dark mode. It only has any effect when ",r.jsx(It,{text:"bgIcon"})," is set."]})}),gH=Object.freeze(Object.defineProperty({__proto__:null,default:Pv},Symbol.toStringTag,{value:"Module"})),vH=()=>r.jsxs("div",{className:"x3 flex gap-3 wrap",children:[r.jsx(Z,{bgIcon:!1}),r.jsx(Z,{bgIcon:"circle"}),r.jsx(Z,{bgIcon:"square40"}),r.jsx(Z,{bgIcon:"square30"}),r.jsx(Z,{bgIcon:"square20"}),r.jsx(Z,{bgIcon:"square10"}),r.jsx(Z,{bgIcon:"square"})]}),bH=`import { Spinner } from '@/src/index.jsx'

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

export default SpinnerExample`,Iv=()=>r.jsx(N,{code:"bgIcon",Component:vH,Source:bH,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"bgIcon"})," property can be used to set a background icon. The default value is ",r.jsx("code",{children:"false"}),".  When the"," ",r.jsx("code",{children:"bgIcon"})," is set the main icon is shrunk to fit inside it. You can control the level of shrinkage using the"," ",r.jsx(It,{text:"shrink"})," property."]})}),yH=Object.freeze(Object.defineProperty({__proto__:null,default:Iv},Symbol.toStringTag,{value:"Module"})),jH=()=>r.jsxs("div",{className:"x3 flex gap-3 wrap",children:[r.jsx(Z,{bgIcon:"circle",bgStroke:!0}),r.jsx(Z,{bgIcon:"circle",bgStroke:"thin"}),r.jsx(Z,{bgIcon:"circle",bgStroke:"thinner"}),r.jsx(Z,{bgIcon:"circle",bgStroke:"thinnest"})]}),SH=`import { Spinner } from '@/src/index.jsx'

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

export default SpinnerExample`,zv=()=>r.jsxs(N,{code:"bgStroke",Component:jH,Source:SH,undent:2,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"bgStroke"})," property can be used to set the stroke width of a background icon. It only has any effect when ",r.jsx(It,{text:"bgIcon"})," is set."]}),r.jsxs("p",{children:["It can be set to ",r.jsx("code",{children:"true"})," to get the default stroke width, or one of the semantic names: ",r.jsx("code",{children:"thinnest"}),","," ",r.jsx("code",{children:"thinner"}),", ",r.jsx("code",{children:"thin"}),", ",r.jsx("code",{children:"thick"}),","," ",r.jsx("code",{children:"thicker"})," or ",r.jsx("code",{children:"thickest"}),"."]})]}),CH=Object.freeze(Object.defineProperty({__proto__:null,default:zv},Symbol.toStringTag,{value:"Module"})),wH=()=>r.jsxs("div",{className:"x3 flex gap-3 wrap",children:[r.jsx(Z,{bgIcon:"circle",bgStroke:!0,bgStrokeStop:20,bgStrokeStopDark:60}),r.jsx(Z,{bgIcon:"circle",bgStroke:!0,bgStrokeStop:40,bgStrokeStopDark:50}),r.jsx(Z,{bgIcon:"circle",bgStroke:!0,bgStrokeStop:60,bgStrokeStopDark:40})]}),_H=`import { Spinner } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Spinner } from '@abw/badger-react-ui

const SpinnerExample = () =>
  <div className="x3 flex gap-3 wrap">
    <Spinner bgIcon="circle" bgStroke bgStrokeStop={20} bgStrokeStopDark={60}/>
    <Spinner bgIcon="circle" bgStroke bgStrokeStop={40} bgStrokeStopDark={50}/>
    <Spinner bgIcon="circle" bgStroke bgStrokeStop={60} bgStrokeStopDark={40}/>
  </div>

export default SpinnerExample`,Fv=()=>r.jsx(N,{code:"bgStrokeStop",Component:wH,Source:_H,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"bgStrokeStop"})," property can be used to set the color stop for the stroke on the background icons.  The"," ",r.jsx("code",{children:"bgStrokeStopDark"})," property can be used to set it in dark mode. It only has any effect when ",r.jsx(It,{text:"bgIcon"})," is set."]})}),TH=Object.freeze(Object.defineProperty({__proto__:null,default:Fv},Symbol.toStringTag,{value:"Module"})),kH=()=>r.jsxs("div",{className:"x3 flex gap-3",children:[r.jsx(Z,{color:"red"}),r.jsx(Z,{color:"orange"}),r.jsx(Z,{color:"yellow"}),r.jsx(Z,{color:"green"})]}),EH=`import { Spinner } from '@/src/index.jsx'

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

export default SpinnerExample`,Uv=()=>r.jsxs(N,{code:"color",Component:kH,Source:EH,undent:2,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"color"})," property can be used to set the base color. The default value is ",r.jsx("code",{children:"brand"})," which can be set as the brand color for your site."]}),r.jsxs("p",{children:["This is simply a shortcut to add the specified ",r.jsx("code",{children:"color"})," as a CSS class to the icon."]})]}),NH=Object.freeze(Object.defineProperty({__proto__:null,default:Uv},Symbol.toStringTag,{value:"Module"})),RH=()=>r.jsxs("div",{className:"x3 flex gap-3 wrap",children:[r.jsx(Z,{fill:!0,color:"red"}),r.jsx(Z,{fill:!0,color:"orange"}),r.jsx(Z,{fill:!0,color:"yellow"}),r.jsx(Z,{fill:!0,color:"green"})]}),OH=`import { Spinner } from '@/src/index.jsx'

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

export default SpinnerExample`,Vv=()=>r.jsx(N,{code:"fill",Component:RH,Source:OH,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"fill"})," property can be used to fill the icon."]})}),LH=Object.freeze(Object.defineProperty({__proto__:null,default:Vv},Symbol.toStringTag,{value:"Module"})),DH=()=>r.jsxs("div",{className:"x3 flex gap-3 wrap",children:[r.jsx(Z,{fill:!0,fillStop:50,fillStopDark:40}),r.jsx(Z,{fill:!0,fillStop:60,fillStopDark:30}),r.jsx(Z,{fill:!0,fillStop:70,fillStopDark:20}),r.jsx(Z,{fill:!0,fillStop:80,fillStopDark:10})]}),BH=`import { Spinner } from '@/src/index.jsx'

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

export default SpinnerExample`,Hv=()=>r.jsx(N,{code:"fillStop",Component:DH,Source:BH,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"fillStop"})," property can be used to set the color stop for the fill, ranging from 0 (near black) to 100 (near white) in steps of 5.  The ",r.jsx("code",{children:"fillStopDark"})," property can be used to set a different color stop for dark mode."]})}),$H=Object.freeze(Object.defineProperty({__proto__:null,default:Hv},Symbol.toStringTag,{value:"Module"})),AH=()=>r.jsxs("div",{className:"x3 flex gap-3",children:[r.jsx(Z,{icon:"rotate"}),r.jsx(Z,{icon:"asterisk"}),r.jsx(Z,{icon:"arrow"})]}),MH=`import { Spinner } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Spinner } from '@abw/badger-react-ui

const SpinnerExample = () =>
  <div className="x3 flex gap-3">
    <Spinner icon="rotate"/>
    <Spinner icon="asterisk"/>
    <Spinner icon="arrow"/>
  </div>

export default SpinnerExample`,Wv=()=>r.jsx(N,{code:"icon",Component:AH,Source:MH,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"icon"})," property can be used to change the foreground icon. The default value is ",r.jsx("code",{children:"cog"}),"."]})}),PH=Object.freeze(Object.defineProperty({__proto__:null,default:Wv},Symbol.toStringTag,{value:"Module"})),IH=()=>r.jsxs("div",{className:"x3 flex gap-1",children:[r.jsx(Z,{}),r.jsx(Z,{reverse:!0})]}),zH=`import { Spinner } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Spinner } from '@abw/badger-react-ui

const SpinnerExample = () =>
  <div className="x3 flex gap-1">
    <Spinner/>
    <Spinner reverse/>
  </div>

export default SpinnerExample`,Zv=()=>r.jsx(N,{code:"reverse",Component:IH,Source:zH,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"reverse"})," property can be used to reverse the direction of spin."]})}),FH=Object.freeze(Object.defineProperty({__proto__:null,default:Zv},Symbol.toStringTag,{value:"Module"})),UH=()=>r.jsxs("div",{className:"x3 flex gap-3 wrap",children:[r.jsx(Z,{bgIcon:"circle"}),r.jsx(Z,{bgIcon:"circle",shrink:6}),r.jsx(Z,{bgIcon:"circle",shrink:7}),r.jsx(Z,{bgIcon:"circle",shrink:8})]}),VH=`import { Spinner } from '@/src/index.jsx'

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

export default SpinnerExample`,Kv=()=>r.jsx(N,{code:"shrink",Component:UH,Source:VH,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"shrink"})," property can be used to shrink the icon. The default value is 5 when a ",r.jsx(It,{text:"bgIcon"})," is set, otherwise it is 0."]})}),HH=Object.freeze(Object.defineProperty({__proto__:null,default:Kv},Symbol.toStringTag,{value:"Module"})),WH=()=>r.jsxs("div",{className:"flex middle gap-3",children:[r.jsx(Z,{size:"x3"}),r.jsx(Z,{size:"x5"}),r.jsx(Z,{size:"x8"})]}),ZH=`import { Spinner } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Spinner } from '@abw/badger-react-ui

const SpinnerExample = () =>
  <div className="flex middle gap-3">
    <Spinner size="x3"/>
    <Spinner size="x5"/>
    <Spinner size="x8"/>
  </div>

export default SpinnerExample`,Yv=()=>r.jsxs(N,{code:"size",Component:WH,Source:ZH,undent:2,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"size"})," property can be set to change the size.  This can be one of the semantic sizes: ",r.jsx("code",{children:"smallest"}),","," ",r.jsx("code",{children:"smaller"}),", ",r.jsx("code",{children:"small"}),", ",r.jsx("code",{children:"medium"})," (default)"," ",r.jsx("code",{children:"large"}),", ",r.jsx("code",{children:"larger"})," or ",r.jsx("code",{children:"largest"}),", or one of the size multipliers from ",r.jsx("code",{children:"x2"})," up to ",r.jsx("code",{children:"x10"}),"."]}),r.jsxs("p",{children:["This is simply a shortcut to add the specified ",r.jsx("code",{children:"size"})," as a CSS class to the icon."]})]}),KH=Object.freeze(Object.defineProperty({__proto__:null,default:Yv},Symbol.toStringTag,{value:"Module"})),YH=()=>r.jsxs("div",{className:"x3 flex gap-3 wrap",children:[r.jsx(Z,{stroke:"thinnest"}),r.jsx(Z,{stroke:"thinner"}),r.jsx(Z,{stroke:"thin"}),r.jsx(Z,{}),r.jsx(Z,{stroke:"thick"}),r.jsx(Z,{stroke:"thicker"}),r.jsx(Z,{stroke:"thickest"}),r.jsx(Z,{stroke:!1,fill:!0})]}),GH=`import { Spinner } from '@/src/index.jsx'

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

export default SpinnerExample`,Gv=()=>r.jsxs(N,{code:"stroke",Component:YH,Source:GH,undent:2,expand:!0,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"stroke"})," property can be used to set a stroke thickness, using one of the semantic names: ",r.jsx("code",{children:"thinnest"}),","," ",r.jsx("code",{children:"thinner"}),", ",r.jsx("code",{children:"thin"}),", ",r.jsx("code",{children:"thick"}),","," ",r.jsx("code",{children:"thicker"})," or ",r.jsx("code",{children:"thickest"}),"."]}),r.jsxs("p",{children:["The ",r.jsx("code",{children:"stroke"})," can be set to ",r.jsx("code",{children:"false"})," to disable the outline stroke (although you won't see anything unless you also enable ",r.jsx(It,{text:"fill"}),")"]})]}),qH=Object.freeze(Object.defineProperty({__proto__:null,default:Gv},Symbol.toStringTag,{value:"Module"})),XH=()=>r.jsxs("div",{className:"x3 flex gap-3 wrap",children:[r.jsx(Z,{strokeStop:20,strokeStopDark:80}),r.jsx(Z,{strokeStop:50,strokeStopDark:50}),r.jsx(Z,{strokeStop:80,strokeStopDark:20})]}),QH=`import { Spinner } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Spinner } from '@abw/badger-react-ui

const SpinnerExample = () =>
  <div className="x3 flex gap-3 wrap">
    <Spinner strokeStop={20} strokeStopDark={80}/>
    <Spinner strokeStop={50} strokeStopDark={50}/>
    <Spinner strokeStop={80} strokeStopDark={20}/>
  </div>

export default SpinnerExample`,qv=()=>r.jsx(N,{code:"strokeStop",Component:XH,Source:QH,undent:2,expand:!0,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"strokeStop"})," property can be used to set the color stop for the stroke, ranging from 0 (near black) to 100 (near white) in steps of 5.  The ",r.jsx("code",{children:"strokeStopDark"})," property can be used to set the color stop for dark mode."]})}),JH=Object.freeze(Object.defineProperty({__proto__:null,default:qv},Symbol.toStringTag,{value:"Module"})),eW=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Spinner"}),r.jsx($v,{}),r.jsxs(Ze,{tocName:"spinner",children:[r.jsx(se,{title:"Properties"}),r.jsx(Yv,{}),r.jsx(Zv,{}),r.jsx(Kv,{}),r.jsx(Wv,{}),r.jsx(Uv,{}),r.jsx(Gv,{}),r.jsx(qv,{}),r.jsx(Vv,{}),r.jsx(Hv,{}),r.jsx(Iv,{}),r.jsx(Av,{}),r.jsx(zv,{}),r.jsx(Fv,{}),r.jsx(Mv,{}),r.jsx(Pv,{})]})]}),tW=Object.freeze(Object.defineProperty({__proto__:null,default:eW},Symbol.toStringTag,{value:"Module"})),nW=`## using npm
$ npm add @abw/badger-react-ui

## using yarn
$ yarn add @abw/badger-react-ui

## using pnpm
$ pnpm add @abw/badger-react-ui`,rW="import '@abw/badger-react-ui/styles/badger-css-react-ui.min.css';",oW="@import '@abw/badger-react-ui/styles/badger-css-react-ui.scss';",aW=`// If you're already importing Badger CSS styles
// something like this...
import '@abw/badger-css/styles/badger.min.css';

// ...then you only need to add this line to get
// the additional styles from Badger React UI
import '@abw/badger-react-ui/styles/badger-react-ui.min.css';`,sW=`// If you're already importing Badger CSS styles
// something like this...
import '@abw/badger-css/styles/badger.scss';

// ...then you only need to add this line to get
// the additional styles from Badger React UI
import '@abw/badger-react-ui/styles/badger-react-ui.scss';
`,lW=()=>r.jsxs("div",{className:"prose flow",children:[r.jsx("h1",{children:"Installation"}),r.jsx("h2",{children:"Adding to a Javascript Project"}),r.jsxs("p",{children:["Add ",r.jsx("code",{children:"@abw/badger-react-ui"})," to your Javascript project using your favourite package manager."]}),r.jsx(Un,{code:nW,caption:"Installing",language:"shell",className:"mar-b-8",expand:!0}),r.jsx("h2",{children:"Importing the CSS"}),r.jsxs(ho,{children:[r.jsx("p",{children:"The precise details on how you import the CSS will vary depending on what framework and bundler you're using.  For a React app using Vite or running under Next.js, for example, you can add the CSS file to your main application script as show below."}),r.jsxs("p",{children:["For other frameworks and/or bundlers you should consult the documentation on how to import a CSS file from a module in your"," ",r.jsx("code",{children:"node_modules"})," directory."]})]}),r.jsx(Un,{code:rW,caption:"Combined CSS for Badger CSS / React UI",language:"js",className:"mar-b-8",expand:!0}),r.jsx("h2",{children:"Importing the SCSS"}),r.jsxs(ho,{children:[r.jsx("p",{children:"If you're using SASS/SCSS to build your stylesheet then you can import the SCSS components."}),r.jsx("p",{children:"Add the following line to your main SCSS stylesheet source."})]}),r.jsx(Un,{code:oW,caption:"Combined SCSS for Badger CSS / React UI",language:"scss",className:"mar-b-8",expand:!0}),r.jsx("h2",{children:"Includes Badger CSS!"}),r.jsxs("p",{children:["Note that the examples shown above import stylesheets that"," ",r.jsx("b",{children:"include"})," the styles from Badger CSS.  If you're already using Badger CSS and have it imported, or if you've customised your installation of Badger CSS, then you only need to import the additional styles for Badger React UI."]}),r.jsx(Un,{code:aW,caption:"Separate CSS for Badger CSS / React UI",language:"js",className:"mar-b-8",expand:!0}),r.jsx(Un,{code:sW,caption:"Separate SCSS for Badger CSS / React UI",language:"scss",className:"mar-b-8",expand:!0})]}),iW=Object.freeze(Object.defineProperty({__proto__:null,default:lW},Symbol.toStringTag,{value:"Module"})),cW=e=>v.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 900 348",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",xmlSpace:"preserve","xmlns:serif":"http://www.serif.com/",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:2},...e},v.createElement("path",{className:"white",d:"M251.572,212.02C254.513,216.061 254.715,224.14 250.095,227.707C250.444,223.032 248.285,217.636 246.595,215.207C245.351,213.421 240.529,209.129 235.734,208.678C239.528,206.432 248.479,207.771 251.572,212.02ZM384.14,296.071C385.221,300.139 369.105,297.678 368.976,310.316C368.912,316.686 371.784,320.829 368.158,321.337C364.186,321.893 363.702,317.912 363.009,312.67C361.525,301.448 369.403,297.943 376.939,295.687C383.239,293.8 383.721,294.493 384.14,296.071ZM253.718,205.387C253.325,205.165 252.924,204.95 252.515,204.744C240.306,198.572 226.195,201.866 221.023,212.097C216.954,220.147 219.624,230.108 226.897,236.996C223.855,235.725 220.886,234.082 218.121,232C201.872,219.763 198.65,197.554 202.498,192.469C205.797,188.109 229.508,185.044 245.757,197.281C248.897,199.645 251.533,202.419 253.718,205.387ZM237.701,38.979C234.959,40.644 229.11,29.763 219.15,31.701C213.297,32.839 209.964,30.344 213.732,27.34C224.434,18.806 242.755,35.909 237.701,38.979ZM102.358,65.632C92.93,59.118 82.319,55.79 70.261,59.171C61.606,61.598 55.943,67.285 53.203,74.67C51.916,74.775 50.609,74.911 49.293,75.073C41.358,76.053 33.068,77.961 26.855,79.508C45.336,54.696 68.07,46.037 90.212,45.935L91.775,45.928L92.073,44.393C93.513,36.977 89.339,29.817 78.425,24.264C102.932,19.041 133.157,24.498 149.387,33.721L151.514,34.93L152.164,32.571C153.117,29.113 152.884,20.563 147.007,12.944C177.743,18.398 201.051,28.288 219.375,41.206C253.271,69.998 271.19,107.581 286.422,143.401C303.117,182.661 316.606,219.801 344.235,241.041C344.731,241.562 345.232,242.081 345.737,242.598C354.202,251.26 369.687,264.151 388.439,280.71C390.567,282.59 392.536,284.445 394.289,286.258C390.175,286.465 384.884,287.861 378.121,289.401C355.898,294.457 355.058,304.229 357.619,320.184C358.932,328.361 362.585,332.134 367.854,333.381C347.657,338.931 337.347,342.519 312.425,337.814C273.532,330.471 236.683,316.046 225.943,310.994C225.749,310.608 225.423,310.285 224.995,310.101C210.606,303.913 200.922,296.04 196.833,286.988C198.796,285.944 200.367,284.755 201.74,283.804C202.604,283.205 202.819,282.017 202.22,281.154C201.622,280.29 200.434,280.074 199.57,280.673C196.577,282.748 192.528,286.255 184.628,285.578C183.581,285.489 182.657,286.266 182.568,287.313C182.478,288.361 183.256,289.284 184.303,289.373C187.94,289.685 190.882,289.256 193.326,288.475C197.252,297.211 205.873,305.078 218.736,311.412C193.53,320.617 171.273,314.508 151.338,302.875C130.029,290.441 111.338,271.747 94.517,258.202C80.516,246.928 67.672,239.285 55.79,240.915C48.382,241.931 41.226,246.463 34.375,256.107C23.226,231.606 38.024,207.024 52.658,191.434L54.205,189.786L52.319,188.541C38.022,179.099 21.81,184.908 11.009,196.975C10.204,187.276 14.741,173.112 22.182,160.21C29.69,147.192 40.209,135.4 51.636,130.932C122.17,117.473 156.365,176.933 192.036,228.629C212.984,258.988 259.699,294.806 348.432,323.461C343.645,308.274 345.837,301.003 349.276,294.022C327.909,284.035 301.478,267.497 284.086,236.018C236.493,149.873 215.639,88.568 146.875,71.303C134.894,68.295 119.263,65.091 102.358,65.632ZM102.275,79.762C100.823,87.371 78.096,65.294 73.617,77.189C65.317,99.228 57.382,86.649 59.352,80.667C69.456,49.974 103.609,72.771 102.275,79.762Z",style:{fill:"white"}}),v.createElement("path",{className:"black",d:"M52.054,78.596C51.294,78.672 50.529,78.759 49.759,78.854C39.593,80.108 28.834,82.925 22.777,84.472L17.915,85.714L20.728,81.559C40.142,52.889 64.62,42.703 88.525,42.149C88.888,35.685 83.351,30.024 71.924,25.526L66.722,23.478L72.092,21.924C97.213,14.653 130.162,19.649 148.812,29.092C148.924,24.696 147.199,17.339 140.471,11.578L135.382,7.22L142.003,8.25C168.067,12.303 189.097,19.357 206.402,28.658C206.575,28.721 206.748,28.783 206.921,28.846C208.323,24.341 212.385,20.472 219.865,21.145C239.675,22.925 243.917,32.841 244.961,51.125C270.1,72.457 287.235,102.584 300.677,133.136C312.72,160.511 321.799,188.221 331.031,210.219C334.652,218.847 338.295,226.594 342.151,233.093C344.174,235.417 346.275,237.699 348.461,239.935C356.894,248.564 372.28,261.359 390.96,277.855C394.6,281.069 397.773,284.243 400.276,287.281C402.859,288.644 404.62,291.472 405.778,296.536C405.975,297.173 406.119,297.795 406.209,298.403C406.253,298.697 406.287,298.994 406.314,299.294C406.615,301.13 406.861,303.2 407.058,305.527C407.84,314.777 405.022,326.993 390.631,330.7C387.826,331.422 385.121,332.093 382.547,332.63C378.775,333.843 375.504,334.896 375.505,334.895C353.988,343.064 340.05,346.906 311.718,341.557C270.836,333.838 232.195,318.357 223.053,313.826C195.401,325.115 171.094,318.814 149.418,306.165C127.941,293.633 109.081,274.82 92.128,261.169C85.494,255.827 79.163,251.286 73.076,248.283C67.258,245.412 61.69,243.95 56.308,244.689C49.102,245.677 42.338,250.617 35.728,260.909L33.983,263.626L32.45,260.785C18.325,234.619 32.7,207.872 48.29,190.557C35.023,183.325 20.386,190.519 11.384,202.521L9.087,205.583L8.03,201.904C5.111,191.745 9.777,174.095 18.883,158.307C24.331,148.86 31.344,140.108 39.121,133.986C28.037,137.259 16.107,142.234 3.209,149.173C16.216,114.812 33.291,93.85 51.552,81.51C51.677,80.52 51.845,79.548 52.054,78.596ZM251.572,212.02C248.479,207.771 239.528,206.432 235.734,208.678C240.529,209.129 245.351,213.421 246.595,215.207C248.285,217.636 250.444,223.032 250.095,227.707C254.715,224.14 254.513,216.061 251.572,212.02ZM384.14,296.071C383.721,294.493 383.239,293.8 376.939,295.687C369.403,297.943 361.525,301.448 363.009,312.67C363.702,317.912 364.186,321.893 368.158,321.337C371.784,320.829 368.912,316.686 368.976,310.316C369.105,297.678 385.221,300.139 384.14,296.071ZM253.718,205.387C251.533,202.419 248.897,199.645 245.757,197.281C229.508,185.044 205.797,188.109 202.498,192.469C198.65,197.554 201.872,219.763 218.121,232C220.886,234.082 223.855,235.725 226.897,236.996C219.624,230.108 216.954,220.147 221.023,212.097C226.195,201.866 240.306,198.572 252.515,204.744C252.924,204.95 253.325,205.165 253.718,205.387ZM237.701,38.979C242.755,35.909 224.434,18.806 213.732,27.34C209.964,30.344 213.297,32.839 219.15,31.701C229.11,29.763 234.959,40.644 237.701,38.979ZM102.358,65.632C119.263,65.091 134.894,68.295 146.875,71.303C215.639,88.568 236.493,149.873 284.086,236.018C301.478,267.497 327.909,284.035 349.276,294.022C345.837,301.003 343.645,308.274 348.432,323.461C259.699,294.806 212.984,258.988 192.036,228.629C156.365,176.933 122.17,117.473 51.636,130.932C40.209,135.4 29.69,147.192 22.182,160.21C14.741,173.112 10.204,187.276 11.009,196.975C21.81,184.908 38.022,179.099 52.319,188.541L54.205,189.786L52.658,191.434C38.024,207.024 23.226,231.606 34.375,256.107C41.226,246.463 48.382,241.931 55.79,240.915C67.672,239.285 80.516,246.928 94.517,258.202C111.338,271.747 130.029,290.441 151.338,302.875C171.273,314.508 193.53,320.617 218.736,311.412C205.873,305.078 197.252,297.211 193.326,288.475C190.882,289.256 187.94,289.685 184.303,289.373C183.256,289.284 182.478,288.361 182.568,287.313C182.657,286.266 183.581,285.489 184.628,285.578C192.528,286.255 196.577,282.748 199.57,280.673C200.434,280.074 201.622,280.29 202.22,281.154C202.819,282.017 202.604,283.205 201.74,283.804C200.367,284.755 198.796,285.944 196.833,286.988C200.922,296.04 210.606,303.913 224.995,310.101C225.423,310.285 225.749,310.608 225.943,310.994C236.683,316.046 273.532,330.471 312.425,337.814C337.347,342.519 347.657,338.931 367.854,333.381C362.585,332.134 358.932,328.361 357.619,320.184C355.058,304.229 355.898,294.457 378.121,289.401C384.884,287.861 390.175,286.465 394.289,286.258C392.536,284.445 390.567,282.59 388.439,280.71C369.687,264.151 354.202,251.26 345.737,242.598C345.232,242.081 344.731,241.562 344.235,241.041C316.606,219.801 303.117,182.661 286.422,143.401C271.19,107.581 253.271,69.998 219.375,41.206C201.051,28.288 177.743,18.398 147.007,12.944C152.884,20.563 153.117,29.113 152.164,32.571L151.514,34.93L149.387,33.721C133.157,24.498 102.932,19.041 78.425,24.264C89.339,29.817 93.513,36.977 92.073,44.393L91.775,45.928L90.212,45.935C68.07,46.037 45.336,54.696 26.855,79.508C33.068,77.961 41.358,76.053 49.293,75.073C50.609,74.911 51.916,74.775 53.203,74.67C55.943,67.285 61.606,61.598 70.261,59.171C82.319,55.79 92.93,59.118 102.358,65.632ZM102.275,79.762C103.609,72.771 69.456,49.974 59.352,80.667C57.382,86.649 65.317,99.228 73.617,77.189C78.096,65.294 100.823,87.371 102.275,79.762Z"}),v.createElement("path",{className:"badger",d:"M418.81,39.948C419.704,39.68 421.135,39.389 423.103,39.076C425.07,38.763 427.082,38.607 429.139,38.607C431.107,38.607 432.873,38.741 434.438,39.009C436.003,39.277 437.322,39.814 438.396,40.619C439.469,41.424 440.274,42.519 440.81,43.905C441.347,45.292 441.615,47.103 441.615,49.338L441.615,62.485C443.851,61.591 445.975,60.965 447.987,60.607C449.999,60.249 452.213,60.07 454.628,60.07C458.92,60.07 462.989,60.831 466.835,62.351C470.681,63.871 474.079,66.085 477.03,68.991C479.982,71.898 482.307,75.497 484.006,79.79C485.705,84.083 486.555,89.046 486.555,94.681C486.555,100.494 485.683,105.569 483.939,109.907C482.195,114.244 479.758,117.844 476.628,120.706C473.498,123.567 469.675,125.736 465.158,127.212C460.642,128.687 455.656,129.425 450.201,129.425C444.298,129.425 439.29,128.732 435.176,127.346C431.062,125.96 427.574,124.238 424.712,122.181C420.777,119.409 418.81,115.831 418.81,111.449L418.81,39.948ZM450.201,111.449C454.314,111.449 457.512,110.041 459.792,107.224C462.073,104.406 463.213,100.226 463.213,94.681C463.213,89.046 462.05,84.843 459.725,82.071C457.4,79.298 454.27,77.912 450.335,77.912C448.546,77.912 447.003,78.091 445.707,78.449C444.41,78.806 443.001,79.343 441.481,80.059L441.481,109.303C442.465,109.929 443.65,110.443 445.036,110.846C446.422,111.248 448.144,111.449 450.201,111.449ZM524.787,60.07C529.617,60.07 534.021,60.562 538.001,61.546C541.981,62.53 545.379,64.028 548.196,66.04C551.013,68.052 553.182,70.601 554.702,73.686C556.223,76.772 556.983,80.416 556.983,84.62L556.983,114.669C556.983,116.994 556.335,118.895 555.038,120.37C553.741,121.846 552.198,123.12 550.41,124.193C544.597,127.681 536.413,129.425 525.86,129.425C521.121,129.425 516.85,128.978 513.049,128.084C509.248,127.189 505.984,125.848 503.256,124.059C500.529,122.271 498.427,119.99 496.951,117.218C495.476,114.445 494.738,111.226 494.738,107.559C494.738,101.388 496.571,96.648 500.238,93.339C503.905,90.03 509.584,87.973 517.275,87.168L534.848,85.29L534.848,84.351C534.848,81.758 533.708,79.902 531.428,78.784C529.147,77.666 525.86,77.107 521.568,77.107C518.169,77.107 514.86,77.465 511.641,78.18C508.421,78.896 505.515,79.79 502.921,80.863C501.758,80.059 500.775,78.829 499.97,77.174C499.165,75.52 498.762,73.798 498.762,72.01C498.762,69.684 499.321,67.829 500.439,66.442C501.557,65.056 503.279,63.871 505.604,62.887C508.198,61.904 511.261,61.188 514.793,60.741C518.326,60.294 521.657,60.07 524.787,60.07ZM525.86,112.791C527.381,112.791 529.058,112.634 530.891,112.321C532.724,112.008 534.088,111.583 534.983,111.047L534.983,100.315L525.324,101.12C522.82,101.299 520.763,101.835 519.153,102.73C517.543,103.624 516.738,104.965 516.738,106.754C516.738,108.543 517.431,109.996 518.818,111.114C520.204,112.232 522.551,112.791 525.86,112.791ZM568.117,94.681C568.117,88.778 569.012,83.658 570.8,79.321C572.589,74.983 575.071,71.384 578.245,68.522C581.42,65.66 585.132,63.536 589.38,62.15C593.628,60.763 598.211,60.07 603.13,60.07C604.919,60.07 606.663,60.227 608.362,60.54C610.061,60.853 611.447,61.233 612.52,61.68L612.52,39.948C613.415,39.68 614.846,39.389 616.813,39.076C618.781,38.763 620.793,38.607 622.85,38.607C624.817,38.607 626.584,38.741 628.149,39.009C629.714,39.277 631.033,39.814 632.106,40.619C633.179,41.424 633.984,42.519 634.521,43.905C635.057,45.292 635.326,47.103 635.326,49.338L635.326,112.925C635.326,117.128 633.358,120.482 629.423,122.986C626.83,124.685 623.476,126.183 619.362,127.48C615.248,128.777 610.508,129.425 605.142,129.425C599.329,129.425 594.12,128.62 589.514,127.011C584.908,125.401 581.018,123.076 577.843,120.035C574.668,116.994 572.253,113.35 570.599,109.102C568.944,104.854 568.117,100.047 568.117,94.681ZM606.215,77.912C601.386,77.912 597.675,79.298 595.081,82.071C592.488,84.843 591.191,89.046 591.191,94.681C591.191,100.226 592.398,104.406 594.813,107.224C597.227,110.041 600.715,111.449 605.276,111.449C606.886,111.449 608.339,111.203 609.636,110.711C610.933,110.22 611.939,109.661 612.655,109.035L612.655,79.522C610.866,78.449 608.72,77.912 606.215,77.912ZM681.339,60.07C686.436,60.07 691.064,60.719 695.223,62.016C699.382,63.312 702.892,64.989 705.754,67.046C707.542,68.298 708.951,69.684 709.979,71.205C711.008,72.725 711.522,74.693 711.522,77.107L711.522,124.059C711.522,128.799 710.628,132.891 708.839,136.334C707.051,139.777 704.613,142.639 701.528,144.919C698.443,147.2 694.821,148.877 690.662,149.95C686.503,151.023 682.054,151.56 677.314,151.56C669.176,151.56 662.781,150.464 658.131,148.273C653.48,146.082 651.155,142.527 651.155,137.608C651.155,135.551 651.58,133.74 652.43,132.175C653.279,130.61 654.241,129.425 655.314,128.62C657.907,130.051 660.836,131.259 664.101,132.242C667.365,133.226 670.741,133.718 674.229,133.718C679.058,133.718 682.904,132.913 685.766,131.303C688.627,129.694 690.058,127.1 690.058,123.523L690.058,121.376C686.392,122.986 681.92,123.791 676.643,123.791C672.619,123.791 668.796,123.187 665.174,121.98C661.552,120.773 658.377,118.895 655.649,116.346C652.922,113.797 650.73,110.51 649.076,106.486C647.421,102.461 646.594,97.677 646.594,92.132C646.594,86.677 647.466,81.937 649.21,77.912C650.954,73.888 653.369,70.556 656.454,67.918C659.54,65.28 663.206,63.312 667.454,62.016C671.702,60.719 676.33,60.07 681.339,60.07ZM689.656,79.522C689.03,79.164 688.113,78.806 686.906,78.449C685.699,78.091 684.201,77.912 682.412,77.912C678.03,77.912 674.743,79.142 672.552,81.601C670.361,84.061 669.265,87.571 669.265,92.132C669.265,97.319 670.361,101.053 672.552,103.333C674.743,105.614 677.538,106.754 680.936,106.754C684.603,106.754 687.51,105.904 689.656,104.205L689.656,79.522ZM760.084,129.425C754.807,129.425 749.911,128.687 745.395,127.212C740.878,125.736 736.943,123.523 733.59,120.571C730.236,117.62 727.598,113.909 725.675,109.437C723.752,104.965 722.791,99.734 722.791,93.742C722.791,87.839 723.752,82.764 725.675,78.516C727.598,74.268 730.124,70.78 733.254,68.052C736.384,65.325 739.962,63.312 743.986,62.016C748.011,60.719 752.124,60.07 756.328,60.07C761.068,60.07 765.383,60.786 769.273,62.217C773.163,63.648 776.517,65.615 779.334,68.119C782.151,70.623 784.342,73.619 785.908,77.107C787.473,80.595 788.255,84.396 788.255,88.51C788.255,91.551 787.406,93.876 785.706,95.486C784.007,97.095 781.637,98.124 778.596,98.571L745.462,103.535C746.445,106.486 748.458,108.699 751.498,110.175C754.539,111.651 758.027,112.388 761.962,112.388C765.629,112.388 769.094,111.919 772.359,110.98C775.623,110.041 778.283,108.945 780.34,107.693C781.771,108.587 782.979,109.84 783.962,111.449C784.946,113.059 785.438,114.758 785.438,116.547C785.438,120.571 783.56,123.567 779.804,125.535C776.942,127.055 773.722,128.084 770.145,128.62C766.568,129.157 763.214,129.425 760.084,129.425ZM756.328,76.705C754.181,76.705 752.326,77.063 750.761,77.778C749.196,78.493 747.921,79.41 746.937,80.528C745.954,81.646 745.216,82.898 744.724,84.284C744.232,85.67 743.941,87.079 743.852,88.51L766.791,84.754C766.523,82.965 765.539,81.176 763.84,79.388C762.141,77.599 759.637,76.705 756.328,76.705ZM822.061,127.145C821.166,127.413 819.758,127.681 817.835,127.95C815.912,128.218 813.922,128.352 811.865,128.352C809.898,128.352 808.131,128.218 806.566,127.95C805.001,127.681 803.682,127.145 802.609,126.34C801.536,125.535 800.709,124.439 800.127,123.053C799.546,121.667 799.255,119.856 799.255,117.62L799.255,77.376C799.255,75.319 799.635,73.552 800.396,72.077C801.156,70.601 802.251,69.282 803.682,68.119C805.113,66.957 806.879,65.906 808.981,64.967C811.083,64.028 813.341,63.201 815.756,62.485C818.17,61.77 820.674,61.211 823.268,60.808C825.861,60.406 828.455,60.205 831.049,60.205C835.341,60.205 838.74,61.032 841.244,62.686C843.748,64.341 845,67.046 845,70.802C845,72.054 844.821,73.284 844.463,74.491C844.106,75.699 843.659,76.794 843.122,77.778C841.244,77.778 839.321,77.867 837.354,78.046C835.386,78.225 833.463,78.493 831.585,78.851C829.707,79.209 827.941,79.589 826.286,79.991C824.632,80.394 823.223,80.863 822.061,81.4L822.061,127.145Z"}),v.createElement("path",{className:"react-ui",d:"M456.264,259.551C455.489,259.783 454.269,260.016 452.604,260.248C450.939,260.48 449.215,260.596 447.434,260.596C445.73,260.596 444.2,260.48 442.845,260.248C441.49,260.016 440.347,259.551 439.418,258.854C438.488,258.157 437.772,257.208 437.268,256.007C436.765,254.807 436.513,253.239 436.513,251.302L436.513,216.449C436.513,214.667 436.842,213.138 437.501,211.86C438.159,210.582 439.108,209.439 440.347,208.432C441.586,207.426 443.116,206.516 444.936,205.702C446.756,204.889 448.712,204.173 450.803,203.553C452.894,202.933 455.063,202.449 457.309,202.101C459.555,201.752 461.801,201.578 464.047,201.578C467.765,201.578 470.708,202.294 472.877,203.727C475.046,205.16 476.13,207.503 476.13,210.756C476.13,211.84 475.975,212.905 475.665,213.951C475.355,214.997 474.968,215.945 474.504,216.797C472.877,216.797 471.212,216.875 469.508,217.03C467.804,217.185 466.139,217.417 464.512,217.727C462.886,218.037 461.356,218.366 459.923,218.714C458.49,219.063 457.27,219.469 456.264,219.934L456.264,259.551ZM511.913,261.526C507.343,261.526 503.103,260.887 499.191,259.609C495.28,258.331 491.872,256.414 488.968,253.858C486.063,251.302 483.778,248.088 482.113,244.215C480.448,240.343 479.615,235.812 479.615,230.623C479.615,225.511 480.448,221.115 482.113,217.436C483.778,213.757 485.966,210.737 488.677,208.374C491.388,206.012 494.486,204.269 497.971,203.146C501.457,202.023 505.02,201.462 508.66,201.462C512.765,201.462 516.502,202.081 519.871,203.321C523.24,204.56 526.145,206.264 528.584,208.432C531.024,210.601 532.922,213.196 534.277,216.216C535.633,219.237 536.31,222.529 536.31,226.092C536.31,228.725 535.574,230.739 534.103,232.133C532.631,233.527 530.579,234.418 527.945,234.805L499.249,239.104C500.101,241.659 501.844,243.576 504.477,244.854C507.111,246.132 510.131,246.771 513.539,246.771C516.715,246.771 519.716,246.365 522.543,245.551C525.37,244.738 527.674,243.789 529.456,242.705C530.695,243.48 531.741,244.564 532.593,245.958C533.445,247.352 533.871,248.824 533.871,250.373C533.871,253.858 532.244,256.453 528.991,258.157C526.513,259.473 523.724,260.364 520.626,260.829C517.528,261.294 514.624,261.526 511.913,261.526ZM508.66,215.868C506.801,215.868 505.194,216.178 503.838,216.797C502.483,217.417 501.379,218.211 500.527,219.179C499.675,220.147 499.036,221.231 498.61,222.432C498.184,223.632 497.933,224.852 497.855,226.092L517.722,222.839C517.489,221.29 516.637,219.74 515.166,218.191C513.694,216.642 511.526,215.868 508.66,215.868ZM569.073,201.462C573.255,201.462 577.069,201.888 580.516,202.74C583.963,203.592 586.906,204.889 589.346,206.632C591.785,208.374 593.664,210.582 594.98,213.254C596.297,215.926 596.955,219.082 596.955,222.722L596.955,248.746C596.955,250.76 596.394,252.406 595.271,253.684C594.148,254.962 592.812,256.066 591.263,256.995C586.228,260.016 579.141,261.526 570.002,261.526C565.897,261.526 562.199,261.139 558.907,260.364C555.615,259.59 552.788,258.428 550.426,256.879C548.064,255.33 546.244,253.355 544.966,250.954C543.688,248.553 543.049,245.764 543.049,242.589C543.049,237.245 544.636,233.14 547.812,230.274C550.987,227.408 555.906,225.627 562.567,224.93L577.786,223.303L577.786,222.49C577.786,220.244 576.798,218.637 574.823,217.669C572.848,216.7 570.002,216.216 566.284,216.216C563.341,216.216 560.475,216.526 557.687,217.146C554.899,217.765 552.382,218.54 550.135,219.469C549.129,218.772 548.277,217.707 547.58,216.275C546.883,214.842 546.534,213.351 546.534,211.802C546.534,209.788 547.018,208.181 547.986,206.98C548.954,205.78 550.445,204.754 552.459,203.902C554.705,203.05 557.358,202.43 560.417,202.043C563.477,201.655 566.362,201.462 569.073,201.462ZM570.002,247.12C571.319,247.12 572.771,246.984 574.359,246.713C575.946,246.442 577.128,246.074 577.902,245.609L577.902,236.315L569.537,237.012C567.369,237.167 565.587,237.632 564.193,238.406C562.799,239.181 562.102,240.343 562.102,241.892C562.102,243.441 562.702,244.699 563.903,245.668C565.103,246.636 567.136,247.12 570.002,247.12ZM640.871,217.03C638.934,217.03 637.095,217.339 635.352,217.959C633.609,218.579 632.099,219.489 630.821,220.689C629.543,221.89 628.517,223.381 627.743,225.162C626.968,226.944 626.581,229.035 626.581,231.436C626.581,236.238 627.955,239.839 630.705,242.24C633.455,244.641 636.804,245.842 640.754,245.842C643.078,245.842 645.092,245.571 646.796,245.029C648.5,244.486 650.01,243.906 651.327,243.286C652.876,244.37 654.037,245.551 654.812,246.829C655.587,248.107 655.974,249.637 655.974,251.418C655.974,254.594 654.463,257.053 651.443,258.796C648.422,260.538 644.24,261.41 638.896,261.41C634.016,261.41 629.601,260.693 625.651,259.26C621.701,257.828 618.313,255.814 615.486,253.219C612.659,250.625 610.471,247.507 608.922,243.867C607.373,240.227 606.598,236.199 606.598,231.784C606.598,226.672 607.431,222.2 609.096,218.366C610.761,214.532 613.027,211.376 615.892,208.897C618.758,206.419 622.069,204.56 625.826,203.321C629.582,202.081 633.551,201.462 637.734,201.462C643.31,201.462 647.609,202.469 650.63,204.482C653.65,206.496 655.161,209.091 655.161,212.266C655.161,213.738 654.812,215.113 654.115,216.391C653.418,217.669 652.605,218.772 651.675,219.702C650.359,219.082 648.771,218.482 646.912,217.901C645.053,217.32 643.039,217.03 640.871,217.03ZM685.599,240.265C685.599,242.279 686.238,243.712 687.516,244.564C688.794,245.416 690.595,245.842 692.918,245.842C694.08,245.842 695.281,245.745 696.52,245.551C697.759,245.358 698.844,245.106 699.773,244.796C700.47,245.648 701.07,246.597 701.574,247.643C702.077,248.688 702.329,249.947 702.329,251.418C702.329,254.362 701.225,256.763 699.018,258.621C696.81,260.48 692.918,261.41 687.342,261.41C680.526,261.41 675.279,259.861 671.6,256.763C667.921,253.665 666.081,248.63 666.081,241.659L666.081,191.935C666.933,191.703 668.153,191.451 669.741,191.18C671.329,190.909 673.013,190.773 674.795,190.773C678.203,190.773 680.855,191.374 682.753,192.574C684.65,193.775 685.599,196.311 685.599,200.184L685.599,207.619L700.819,207.619C701.283,208.471 701.729,209.536 702.155,210.814C702.581,212.092 702.794,213.506 702.794,215.055C702.794,217.765 702.193,219.721 700.993,220.922C699.792,222.122 698.185,222.722 696.171,222.722L685.599,222.722L685.599,240.265ZM799.454,233.643C799.454,237.826 798.737,241.64 797.305,245.087C795.872,248.533 793.8,251.476 791.089,253.916C788.378,256.356 785.086,258.234 781.214,259.551C777.341,260.868 772.965,261.526 768.086,261.526C763.206,261.526 758.83,260.868 754.958,259.551C751.085,258.234 747.793,256.356 745.082,253.916C742.372,251.476 740.3,248.533 738.867,245.087C737.434,241.64 736.718,237.826 736.718,233.643L736.718,189.263C737.57,189.108 738.925,188.895 740.784,188.624C742.643,188.353 744.424,188.217 746.128,188.217C747.909,188.217 749.478,188.353 750.833,188.624C752.189,188.895 753.331,189.379 754.261,190.076C755.19,190.773 755.887,191.742 756.352,192.981C756.816,194.22 757.049,195.847 757.049,197.86L757.049,233.295C757.049,237.012 758.075,239.917 760.128,242.008C762.18,244.099 764.833,245.145 768.086,245.145C771.416,245.145 774.088,244.099 776.102,242.008C778.116,239.917 779.123,237.012 779.123,233.295L779.123,189.263C779.975,189.108 781.33,188.895 783.189,188.624C785.048,188.353 786.829,188.217 788.533,188.217C790.314,188.217 791.883,188.353 793.238,188.624C794.594,188.895 795.736,189.379 796.666,190.076C797.595,190.773 798.292,191.742 798.757,192.981C799.221,194.22 799.454,195.847 799.454,197.86L799.454,233.643ZM834.54,259.202C833.688,259.435 832.352,259.667 830.531,259.899C828.711,260.132 826.911,260.248 825.129,260.248C823.348,260.248 821.779,260.112 820.424,259.841C819.069,259.57 817.926,259.086 816.997,258.389C816.067,257.692 815.37,256.724 814.906,255.485C814.441,254.245 814.208,252.619 814.208,250.605L814.208,189.263C815.06,189.108 816.416,188.895 818.275,188.624C820.134,188.353 821.915,188.217 823.619,188.217C825.4,188.217 826.969,188.353 828.324,188.624C829.68,188.895 830.822,189.379 831.751,190.076C832.681,190.773 833.378,191.742 833.843,192.981C834.307,194.22 834.54,195.847 834.54,197.86L834.54,259.202Z"})),dW=e=>v.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 440 440",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",xmlSpace:"preserve","xmlns:serif":"http://www.serif.com/",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:1.5},...e},v.createElement("circle",{cx:220,cy:220,r:144,style:{fill:"rgb(136,136,136)",stroke:"black",strokeWidth:"0.33px"}}),v.createElement("path",{d:"M220,12C334.798,12 428,105.202 428,220C428,334.798 334.798,428 220,428C105.202,428 12,334.798 12,220C12,105.202 105.202,12 220,12ZM220,76C140.524,76 76,140.524 76,220C76,299.476 140.524,364 220,364C299.476,364 364,299.476 364,220C364,140.524 299.476,76 220,76Z",style:{fill:"rgb(206,206,206)",stroke:"black",strokeWidth:"6.67px"}}),v.createElement("path",{d:"M41.319,232.772C38.119,232.829 35.878,232.789 34.556,232.652C33.233,232.516 32.025,232.097 30.891,231.317C29.797,230.537 28.939,229.512 28.315,228.163C27.731,226.853 27.383,225.299 27.351,223.499C27.321,221.82 27.574,220.295 28.11,218.925C28.645,217.555 29.466,216.461 30.532,215.641C31.636,214.782 32.828,214.28 34.145,214.097C35.421,213.914 37.7,213.793 40.979,213.735L46.378,213.638C49.538,213.582 51.819,213.621 53.142,213.758C54.464,213.894 55.672,214.313 56.766,215.093C57.9,215.873 58.758,216.898 59.343,218.248C59.966,219.557 60.274,221.112 60.306,222.912C60.336,224.591 60.083,226.116 59.547,227.486C59.052,228.855 58.231,229.95 57.126,230.769C56.021,231.629 54.829,232.131 53.553,232.313C52.236,232.497 49.957,232.618 46.718,232.675L41.319,232.772ZM51.53,224.348C53.01,224.322 53.968,224.225 54.365,224.058C54.762,223.891 54.957,223.567 54.947,223.047C54.94,222.607 54.774,222.29 54.45,222.056C54.126,221.862 53.124,221.759 51.484,221.789L36.727,222.052C34.887,222.085 33.769,222.185 33.331,222.313C32.934,222.48 32.7,222.844 32.71,223.364C32.72,223.924 32.966,224.279 33.489,224.43C33.972,224.581 35.173,224.64 37.012,224.607L51.53,224.348ZM60.115,235.306L61.347,243.494C61.681,245.709 61.739,247.439 61.562,248.68C61.424,249.914 61.047,250.901 60.464,251.596C59.92,252.284 59.189,252.799 58.275,253.179C57.356,253.52 55.95,253.853 53.972,254.151L51.243,254.562C49.265,254.859 47.772,254.882 46.796,254.584C45.827,254.325 45.002,253.681 44.361,252.645C43.719,251.609 43.228,250.226 42.96,248.447L42.632,246.271L30.054,248.165L28.827,240.017L60.115,235.306ZM55.962,244.264L48.012,245.461L48.101,246.054C48.214,246.806 48.45,247.296 48.887,247.514C49.285,247.737 50.06,247.782 51.207,247.609L53.778,247.222C54.846,247.061 55.534,246.796 55.797,246.392C56.066,246.028 56.117,245.293 55.962,244.264ZM65.668,263.888L35.019,271.744L32.973,263.762L63.622,255.906L65.668,263.888ZM73.017,284.844L43.393,295.958L40.864,289.217L52.805,280.165L39.36,285.21L36.944,278.768L66.567,267.654L68.984,274.095L57.267,283.404L70.6,278.402L73.017,284.844ZM78.538,295.659L50.283,309.897L46.575,302.539L74.83,288.301L78.538,295.659ZM74.884,324.988C72.198,326.727 70.274,327.877 69.079,328.459C67.884,329.042 66.637,329.325 65.262,329.262C63.921,329.177 62.651,328.76 61.408,327.945C60.221,327.141 59.105,326.005 58.127,324.494C57.214,323.084 56.623,321.655 56.354,320.209C56.085,318.763 56.204,317.4 56.676,316.142C57.159,314.828 57.906,313.773 58.927,312.922C59.915,312.092 61.786,310.786 64.539,309.004L69.073,306.07C71.725,304.353 73.683,303.181 74.878,302.598C76.073,302.015 77.32,301.733 78.661,301.817C80.036,301.88 81.306,302.297 82.515,303.135C83.736,303.917 84.819,305.074 85.797,306.585C86.71,307.996 87.3,309.424 87.569,310.87C87.872,312.294 87.753,313.657 87.248,314.937C86.764,316.251 86.017,317.306 85.03,318.136C84.008,318.987 82.138,320.293 79.418,322.054L74.884,324.988ZM79.105,312.441C80.347,311.637 81.11,311.048 81.358,310.697C81.607,310.345 81.601,309.968 81.319,309.531C81.08,309.162 80.772,308.98 80.372,308.952C79.995,308.958 79.09,309.401 77.714,310.292L65.322,318.312C63.778,319.312 62.881,319.987 62.577,320.327C62.328,320.679 62.322,321.111 62.605,321.548C62.909,322.018 63.306,322.19 63.829,322.042C64.319,321.915 65.37,321.33 66.915,320.331L79.105,312.441ZM104.097,331.146L80.061,351.721L75.379,346.251L83.505,333.662L72.595,343L68.121,337.773L92.158,317.198L96.632,322.425L88.805,335.179L99.624,325.92L104.097,331.146ZM116.973,342.973L99.303,369.64L93.032,363.991L96.536,359.503L94.337,357.522L90.179,361.421L83.849,355.718L108.146,335.022L116.973,342.973ZM100.106,355.182C102.219,352.239 104.837,348.676 108.073,344.485C103.407,348.41 100.049,351.361 98.026,353.308L100.106,355.182ZM133.778,355.495L130.062,360.657L126.102,357.806L111.332,378.323L104.645,373.509L119.414,352.992L115.486,350.164L119.202,345.002L133.778,355.495ZM135.754,356.629L147.731,363.322L144.628,368.874L139.845,366.2L136.918,371.438L141.387,373.936L138.46,379.173L133.991,376.676L130.596,382.752L135.833,385.678L132.75,391.196L120.32,384.249L135.754,356.629ZM150.451,364.831L156.15,367.169C159.813,368.672 162.217,369.874 163.376,370.738C164.534,371.603 165.306,372.568 165.653,373.618C166,374.669 166.095,375.702 165.849,376.725C165.654,377.726 164.969,379.607 163.83,382.382L159.625,392.633C158.547,395.261 157.708,396.991 157.099,397.736C156.476,398.518 155.781,399.054 154.939,399.314C154.149,399.553 153.22,399.604 152.256,399.424C151.255,399.23 149.84,398.779 148.027,398.035L138.442,394.103L150.451,364.831ZM156.01,372.991L148.115,392.235C149.188,392.675 149.946,392.726 150.387,392.388C150.828,392.051 151.462,390.927 152.267,388.966L156.927,377.605C157.474,376.272 157.749,375.391 157.827,374.99C157.904,374.59 157.826,374.255 157.569,373.933C157.348,373.627 156.824,373.325 156.01,372.991ZM194.889,388.345L187.399,386.838L187.865,384.525C188.078,383.466 188.102,382.736 187.961,382.422C187.828,382.069 187.538,381.888 187.107,381.802C186.636,381.707 186.205,381.824 185.891,382.169C185.537,382.506 185.301,383.07 185.135,383.894C184.93,384.913 184.929,385.729 185.101,386.294C185.265,386.899 185.884,387.676 186.989,388.673C190.171,391.517 192.051,393.731 192.724,395.254C193.389,396.816 193.418,399.106 192.802,402.165C192.361,404.361 191.755,405.953 191.04,406.87C190.317,407.826 189.124,408.484 187.484,408.929C185.891,409.343 184.095,409.349 182.134,408.954C179.977,408.52 178.221,407.718 176.857,406.587C175.486,405.495 174.679,404.231 174.461,402.882C174.243,401.532 174.37,399.681 174.836,397.367L175.246,395.328L182.736,396.835L181.979,400.599C181.742,401.776 181.71,402.545 181.843,402.898C182.007,403.298 182.328,403.526 182.877,403.636C183.387,403.739 183.866,403.59 184.18,403.246C184.541,402.869 184.785,402.266 184.951,401.442C185.322,399.599 185.323,398.375 184.924,397.724C184.532,397.033 183.467,395.839 181.727,394.143C179.995,392.407 178.859,391.159 178.35,390.444C177.802,389.722 177.419,388.788 177.2,387.642C176.982,386.497 177.062,385.085 177.393,383.438C177.875,381.046 178.535,379.384 179.345,378.404C180.193,377.432 181.347,376.767 182.798,376.447C184.297,376.095 185.968,376.105 187.89,376.492C189.968,376.91 191.709,377.586 193.057,378.592C194.374,379.551 195.18,380.611 195.446,381.725C195.711,382.839 195.631,384.659 195.142,387.09L194.889,388.345ZM200.214,379.311L213.892,380.38L213.397,386.721L207.933,386.294L207.466,392.276L212.57,392.675L212.102,398.657L206.998,398.257L206.456,405.196L212.437,405.664L211.945,411.965L197.748,410.855L200.214,379.311ZM225.777,380.267L226.42,405.578L231.418,405.452L231.578,411.77L218.342,412.105L217.54,380.476L225.777,380.267ZM233.537,379.948L247.346,378.191L248.149,384.5L242.514,385.217L243.272,391.169L248.311,390.528L249.069,396.479L244.029,397.121L245.706,410.295L237.532,411.335L233.537,379.948ZM258.549,375.749L265.335,406.653L257.287,408.42L250.501,377.517L258.549,375.749ZM281.962,378.541L274.713,380.955L273.968,378.716C273.626,377.691 273.285,377.046 273.007,376.844C272.716,376.603 272.374,376.591 271.957,376.73C271.501,376.882 271.185,377.198 271.084,377.653C270.945,378.121 271.02,378.728 271.286,379.525C271.615,380.512 272.019,381.22 272.449,381.625C272.892,382.068 273.815,382.435 275.27,382.751C279.444,383.638 282.176,384.625 283.516,385.612C284.869,386.637 286.033,388.61 287.019,391.57C287.727,393.696 287.992,395.378 287.827,396.529C287.675,397.718 286.967,398.882 285.765,400.083C284.588,401.234 283.032,402.132 281.135,402.764C279.047,403.459 277.125,403.636 275.379,403.332C273.646,403.066 272.318,402.37 271.458,401.307C270.598,400.244 269.789,398.574 269.043,396.335L268.386,394.362L275.635,391.947L276.848,395.591C277.227,396.729 277.581,397.412 277.872,397.653C278.214,397.918 278.606,397.956 279.137,397.779C279.63,397.615 279.972,397.248 280.073,396.793C280.2,396.287 280.112,395.642 279.846,394.845C279.252,393.061 278.645,391.999 277.975,391.632C277.292,391.227 275.774,390.721 273.421,390.113C271.056,389.467 269.45,388.948 268.653,388.581C267.818,388.227 267.021,387.607 266.263,386.721C265.504,385.836 264.872,384.571 264.341,382.977C263.57,380.662 263.317,378.891 263.532,377.639C263.786,376.374 264.456,375.223 265.557,374.224C266.683,373.174 268.138,372.352 269.997,371.733C272.009,371.063 273.855,370.785 275.525,370.988C277.144,371.165 278.371,371.684 279.155,372.519C279.939,373.354 280.774,374.973 281.557,377.326L281.962,378.541ZM298.791,359.997L312.694,388.418L305.293,392.039L299.457,380.11L297.265,381.182L303.101,393.111L295.699,396.732L281.795,368.311L289.197,364.69L294.172,374.858L296.363,373.786L291.389,363.618L298.791,359.997ZM328.977,350.672L322.871,355.265L321.453,353.379C320.804,352.515 320.275,352.012 319.947,351.909C319.595,351.773 319.267,351.87 318.915,352.134C318.532,352.423 318.332,352.823 318.381,353.287C318.397,353.775 318.662,354.326 319.167,354.998C319.792,355.829 320.401,356.372 320.937,356.619C321.498,356.898 322.49,356.953 323.97,356.791C328.209,356.305 331.113,356.373 332.698,356.883C334.306,357.425 336.036,358.927 337.912,361.42C339.258,363.21 340.044,364.721 340.254,365.865C340.488,367.04 340.185,368.369 339.428,369.89C338.678,371.355 337.487,372.701 335.889,373.903C334.131,375.225 332.364,376.004 330.612,376.27C328.885,376.568 327.404,376.33 326.251,375.596C325.098,374.862 323.8,373.535 322.382,371.649L321.132,369.987L327.237,365.395L329.546,368.463C330.267,369.422 330.82,369.958 331.172,370.093C331.58,370.237 331.964,370.148 332.411,369.812C332.827,369.499 333.034,369.043 332.986,368.579C332.945,368.059 332.656,367.475 332.151,366.804C331.021,365.301 330.108,364.487 329.356,364.352C328.58,364.185 326.98,364.187 324.556,364.358C322.108,364.498 320.42,364.516 319.548,364.421C318.644,364.35 317.691,364.016 316.691,363.417C315.69,362.818 314.688,361.82 313.679,360.477C312.212,358.527 311.41,356.928 311.216,355.673C311.054,354.393 311.324,353.088 312.051,351.791C312.785,350.438 313.903,349.197 315.47,348.019C317.164,346.744 318.827,345.894 320.474,345.556C322.066,345.21 323.394,345.312 324.403,345.854C325.411,346.397 326.717,347.667 328.208,349.649L328.977,350.672ZM352.018,341.021C354.259,343.305 355.771,344.96 356.581,346.015C357.391,347.069 357.917,348.234 358.13,349.594C358.315,350.925 358.161,352.253 357.61,353.634C357.06,354.958 356.17,356.279 354.885,357.539C353.686,358.715 352.405,359.58 351.041,360.132C349.678,360.685 348.319,360.841 346.992,360.631C345.608,360.419 344.425,359.899 343.386,359.068C342.376,358.266 340.722,356.695 338.425,354.353L334.644,350.498C332.431,348.242 330.892,346.558 330.082,345.504C329.272,344.449 328.746,343.285 328.561,341.953C328.348,340.594 328.502,339.266 329.081,337.914C329.603,336.561 330.521,335.269 331.806,334.008C333.005,332.832 334.286,331.967 335.649,331.415C336.984,330.834 338.343,330.677 339.699,330.917C341.083,331.128 342.266,331.649 343.276,332.45C344.315,333.281 345.968,334.852 348.237,337.166L352.018,341.021ZM338.881,339.394C337.845,338.338 337.116,337.708 336.721,337.535C336.327,337.361 335.959,337.443 335.587,337.807C335.273,338.115 335.157,338.453 335.21,338.85C335.291,339.218 335.905,340.016 337.054,341.187L347.389,351.724C348.678,353.038 349.519,353.782 349.913,354.012C350.307,354.185 350.732,354.104 351.103,353.74C351.503,353.348 351.592,352.925 351.342,352.442C351.12,351.987 350.337,351.074 349.049,349.76L338.881,339.394ZM341.099,325.297L349.778,314.415L354.751,318.38L351.209,322.821L355.9,326.562L359.067,322.591L363.758,326.332L360.59,330.303L370.973,338.584L365.835,345.026L341.099,325.297ZM360.217,298.339L365.582,301.754L362.962,305.871L384.287,319.447L379.862,326.398L358.537,312.822L355.937,316.905L350.572,313.489L360.217,298.339ZM373.724,268.616L401.315,284.523L397.232,293.957C392.425,292.879 387.026,291.458 381.05,289.656C383.345,290.998 388.109,293.888 395.342,298.326L391.291,307.687L360.792,298.497L363.969,291.155L374.435,294.769L384.533,298.224C379.631,295.754 373.288,292.181 365.542,287.521L368.942,279.665C369.87,279.936 373.139,281.046 378.872,283.004L390.287,286.942C383.414,283.488 376.851,279.819 370.562,275.921L373.724,268.616ZM376.781,254.323L408.604,257.594L406.512,265.77L400.91,264.75L400.176,267.617L405.56,269.49L403.448,277.745L373.836,265.832L376.781,254.323ZM395.425,263.594C391.838,263.089 387.466,262.425 382.252,261.503C387.895,263.814 392.068,265.419 394.731,266.307L395.425,263.594ZM378.103,248.493L378.802,242.694C379.266,238.842 379.736,236.28 380.221,234.928C380.661,233.612 381.55,232.591 382.886,231.865C384.218,231.18 386.216,230.977 388.877,231.298C391.339,231.594 392.929,232.108 393.691,232.804C394.454,233.5 394.826,234.754 394.77,236.56C395.359,235.02 396.048,233.975 396.791,233.5C397.533,233.025 398.167,232.779 398.781,232.692C399.352,232.64 400.91,232.747 403.452,233.053L411.712,234.049L410.798,241.634L400.354,240.375C398.686,240.175 397.639,240.169 397.208,240.399C396.778,240.63 396.498,241.281 396.364,242.393L410.502,244.096L409.516,252.277L378.103,248.493ZM384.49,240.962L391.479,241.804C391.589,240.891 391.507,240.236 391.312,239.85C391.116,239.464 390.306,239.165 388.916,238.998L387.209,238.792C386.216,238.672 385.522,238.75 385.161,239.069C384.84,239.393 384.6,240.049 384.49,240.962ZM380.371,226.869L380.35,213.149L386.71,213.139L386.718,218.619L392.718,218.61L392.71,213.49L398.71,213.48L398.718,218.6L405.678,218.589L405.669,212.589L411.989,212.579L412.011,226.819L380.371,226.869Z"}),v.createElement("path",{d:"M65.814,139.849C68.729,141.171 70.736,142.169 71.872,142.859C73.008,143.55 73.919,144.446 74.609,145.637C75.262,146.812 75.598,148.106 75.583,149.592C75.548,151.026 75.195,152.579 74.452,154.218C73.759,155.748 72.876,157.017 71.804,158.024C70.733,159.032 69.522,159.669 68.208,159.951C66.841,160.254 65.55,160.196 64.281,159.796C63.05,159.414 60.94,158.545 57.953,157.191L53.034,154.961C50.156,153.656 48.113,152.642 46.977,151.951C45.841,151.261 44.929,150.364 44.276,149.19C43.586,147.999 43.251,146.705 43.302,145.235C43.301,143.785 43.69,142.248 44.433,140.609C45.127,139.079 46.009,137.81 47.081,136.803C48.116,135.779 49.327,135.142 50.677,134.876C52.044,134.573 53.335,134.631 54.567,135.014C55.836,135.414 57.945,136.282 60.896,137.62L65.814,139.849ZM52.976,143.077C51.628,142.466 50.721,142.142 50.291,142.123C49.86,142.103 49.546,142.312 49.331,142.786C49.15,143.186 49.163,143.544 49.356,143.895C49.564,144.209 50.426,144.731 51.919,145.408L65.362,151.503C67.038,152.262 68.091,152.652 68.542,152.724C68.972,152.744 69.339,152.515 69.554,152.041C69.785,151.531 69.715,151.104 69.308,150.744C68.937,150.4 67.877,149.832 66.201,149.072L52.976,143.077ZM52.319,126.004L56.705,118.981C57.892,117.081 58.972,115.728 59.913,114.901C60.82,114.053 61.749,113.548 62.643,113.399C63.504,113.229 64.394,113.314 65.336,113.619C66.256,113.958 67.541,114.619 69.237,115.678L71.578,117.14C73.275,118.2 74.424,119.153 74.971,120.014C75.54,120.84 75.748,121.866 75.562,123.07C75.376,124.275 74.85,125.644 73.897,127.171L72.732,129.037L83.52,135.775L79.156,142.764L52.319,126.004ZM61.298,121.897L68.117,126.156L68.435,125.647C68.838,125.002 68.978,124.476 68.787,124.027C68.63,123.599 68.07,123.06 67.086,122.446L64.88,121.069C63.964,120.497 63.269,120.251 62.807,120.387C62.366,120.489 61.849,121.015 61.298,121.897ZM65.491,105.806L74.058,95.089L79.026,99.06L75.604,103.341L80.291,107.087L83.488,103.088L88.174,106.834L84.977,110.834L90.414,115.179L94.16,110.493L99.097,114.439L90.205,125.562L65.491,105.806ZM91.595,76.985L113.834,99.49L108.713,104.551L95.575,97.345L105.668,107.559L100.775,112.395L78.535,89.89L83.429,85.054L96.71,91.949L86.701,81.82L91.595,76.985ZM125.69,63.611L119.349,67.872L118.033,65.913C117.43,65.017 116.929,64.486 116.607,64.365C116.262,64.211 115.93,64.29 115.565,64.536C115.166,64.803 114.946,65.192 114.97,65.658C114.961,66.146 115.196,66.711 115.664,67.409C116.244,68.272 116.823,68.846 117.346,69.122C117.89,69.431 118.878,69.538 120.364,69.455C124.624,69.195 127.52,69.417 129.075,70.011C130.653,70.637 132.301,72.229 134.041,74.818C135.29,76.677 135.995,78.228 136.144,79.381C136.314,80.568 135.942,81.878 135.104,83.357C134.277,84.78 133.017,86.06 131.357,87.176C129.531,88.403 127.726,89.086 125.962,89.259C124.221,89.465 122.756,89.149 121.643,88.354C120.531,87.56 119.306,86.166 117.989,84.207L116.829,82.481L123.17,78.22L125.312,81.407C125.981,82.403 126.505,82.967 126.849,83.121C127.249,83.286 127.637,83.218 128.102,82.905C128.534,82.615 128.765,82.171 128.741,81.705C128.728,81.184 128.471,80.585 128.002,79.888C126.954,78.328 126.085,77.466 125.341,77.291C124.575,77.083 122.977,77 120.548,77.042C118.096,77.051 116.409,76.98 115.544,76.839C114.645,76.72 113.711,76.335 112.744,75.684C111.776,75.033 110.829,73.983 109.892,72.589C108.531,70.563 107.815,68.924 107.688,67.66C107.595,66.373 107.934,65.085 108.728,63.829C109.533,62.516 110.716,61.336 112.343,60.243C114.102,59.06 115.808,58.3 117.471,58.05C119.079,57.788 120.4,57.961 121.378,58.557C122.357,59.152 123.593,60.49 124.976,62.548L125.69,63.611ZM151.705,60.191C153.126,63.059 154.048,65.102 154.491,66.356C154.934,67.609 155.072,68.88 154.852,70.239C154.615,71.562 154.056,72.776 153.103,73.917C152.169,75.005 150.913,75.984 149.3,76.783C147.795,77.529 146.308,77.953 144.841,78.055C143.374,78.156 142.033,77.883 140.837,77.27C139.587,76.64 138.624,75.777 137.895,74.666C137.184,73.59 136.1,71.582 134.644,68.643L132.247,63.804C130.844,60.972 129.904,58.894 129.461,57.64C129.019,56.386 128.881,55.115 129.118,53.793C129.338,52.434 129.897,51.219 130.867,50.114C131.783,48.99 133.057,48.047 134.67,47.248C136.175,46.502 137.662,46.079 139.129,45.977C140.579,45.839 141.919,46.112 143.133,46.761C144.383,47.392 145.346,48.254 146.057,49.33C146.787,50.442 147.87,52.449 149.309,55.353L151.705,60.191ZM139.723,54.566C139.066,53.239 138.568,52.415 138.247,52.127C137.927,51.84 137.551,51.803 137.085,52.033C136.691,52.229 136.475,52.514 136.402,52.907C136.365,53.283 136.701,54.232 137.429,55.702L143.981,68.928C144.797,70.577 145.366,71.545 145.669,71.886C145.99,72.173 146.419,72.229 146.885,71.998C147.387,71.749 147.603,71.375 147.516,70.838C147.446,70.336 146.985,69.226 146.168,67.577L139.723,54.566ZM167.692,34.963L174.441,55.018C175.206,57.293 175.666,58.911 175.821,59.871C176.013,60.82 175.878,61.92 175.489,63.149C175.088,64.339 174.357,65.429 173.348,66.317C172.3,67.218 170.987,67.956 169.395,68.491C167.613,69.091 165.919,69.324 164.35,69.176C162.794,69.067 161.502,68.615 160.501,67.897C159.499,67.179 158.751,66.334 158.28,65.311C157.809,64.287 156.98,62.076 155.845,58.702L149.874,40.96L157.683,38.332L165.249,60.813C165.696,62.14 166.052,62.948 166.281,63.251C166.56,63.579 166.927,63.667 167.344,63.526C167.837,63.36 168.076,63.069 168.088,62.601C168.099,62.133 167.856,61.159 167.358,59.681L159.92,37.579L167.692,34.963ZM174.727,33.131L180.462,32.033C184.273,31.303 186.857,30.972 188.292,31.023C189.681,31.042 190.923,31.578 192.021,32.631C193.079,33.691 193.88,35.533 194.383,38.165C194.85,40.601 194.844,42.272 194.412,43.21C193.981,44.147 192.9,44.884 191.162,45.379C192.809,45.471 194.014,45.811 194.692,46.373C195.37,46.936 195.797,47.465 196.067,48.024C196.29,48.552 196.662,50.069 197.143,52.583L198.707,60.755L191.204,62.191L189.226,51.859C188.91,50.209 188.597,49.21 188.246,48.87C187.896,48.53 187.191,48.461 186.091,48.671L188.768,62.658L180.675,64.207L174.727,33.131ZM183.842,36.925L185.166,43.839C186.069,43.666 186.668,43.389 186.976,43.085C187.285,42.782 187.323,41.919 187.06,40.544L186.737,38.855C186.549,37.873 186.264,37.235 185.85,36.988C185.444,36.781 184.746,36.752 183.842,36.925ZM219.815,41.52L211.587,41.97L211.288,36.498C211.198,34.861 211.064,33.867 210.884,33.516C210.663,33.128 210.292,32.947 209.693,32.98C209.014,33.017 208.588,33.281 208.454,33.769C208.281,34.259 208.258,35.302 208.345,36.9L209.148,51.558C209.231,53.076 209.367,54.11 209.591,54.538C209.777,55.009 210.19,55.226 210.829,55.191C211.468,55.156 211.854,54.895 211.987,54.407C212.163,53.957 212.182,52.834 212.088,51.116L211.871,47.162L220.099,46.712L220.165,47.91C220.344,51.185 220.231,53.515 219.866,54.897C219.461,56.281 218.528,57.534 216.987,58.66C215.447,59.786 213.558,60.41 211.241,60.537C208.845,60.668 206.824,60.338 205.218,59.545C203.612,58.751 202.508,57.61 201.904,56.08C201.342,54.589 200.935,52.288 200.765,49.172L200.26,39.946C200.135,37.67 200.123,35.988 200.22,34.821C200.318,33.694 200.736,32.549 201.438,31.469C202.138,30.349 203.173,29.491 204.498,28.818C205.861,28.102 207.403,27.738 209.2,27.639C211.597,27.508 213.62,27.878 215.268,28.709C216.876,29.543 217.98,30.684 218.536,32.056C219.132,33.425 219.489,35.569 219.651,38.524L219.815,41.52ZM226.051,27.944L239.739,28.872L239.309,35.218L233.841,34.847L233.435,40.833L238.544,41.179L238.137,47.166L233.029,46.819L232.558,53.763L238.544,54.169L238.117,60.475L223.909,59.511L226.051,27.944ZM272.132,44.93L264.713,43.105L265.276,40.813C265.534,39.765 265.59,39.037 265.462,38.717C265.344,38.359 265.062,38.166 264.635,38.061C264.169,37.946 263.733,38.045 263.404,38.376C263.037,38.697 262.777,39.251 262.576,40.067C262.328,41.077 262.292,41.892 262.44,42.464C262.578,43.074 263.163,43.877 264.225,44.921C267.282,47.898 269.067,50.19 269.674,51.74C270.272,53.329 270.203,55.618 269.458,58.648C268.923,60.823 268.25,62.388 267.497,63.274C266.734,64.198 265.514,64.804 263.856,65.179C262.247,65.525 260.452,65.454 258.51,64.977C256.373,64.451 254.653,63.575 253.339,62.387C252.015,61.237 251.263,59.94 251.102,58.583C250.942,57.225 251.148,55.381 251.712,53.089L252.209,51.069L259.628,52.894L258.711,56.623C258.424,57.788 258.359,58.555 258.477,58.913C258.624,59.32 258.935,59.562 259.479,59.695C259.984,59.82 260.469,59.692 260.797,59.36C261.174,59 261.444,58.407 261.644,57.592C262.093,55.766 262.147,54.543 261.775,53.875C261.414,53.169 260.4,51.931 258.734,50.162C257.078,48.354 255.996,47.058 255.518,46.322C255.001,45.577 254.658,44.628 254.489,43.474C254.319,42.32 254.459,40.913 254.861,39.282C255.443,36.912 256.174,35.28 257.025,34.335C257.913,33.401 259.095,32.785 260.559,32.527C262.071,32.24 263.74,32.321 265.643,32.789C267.702,33.295 269.412,34.045 270.716,35.108C271.991,36.121 272.752,37.215 272.97,38.339C273.187,39.464 273.029,41.279 272.437,43.687L272.132,44.93ZM292.077,61.866C290.909,64.845 290.018,66.902 289.387,68.072C288.756,69.243 287.909,70.199 286.755,70.95C285.616,71.664 284.341,72.066 282.856,72.129C281.423,72.168 279.854,71.897 278.178,71.24C276.614,70.627 275.301,69.812 274.239,68.794C273.177,67.776 272.478,66.6 272.127,65.303C271.754,63.953 271.745,62.661 272.078,61.374C272.396,60.123 273.153,57.972 274.35,54.918L276.321,49.89C277.474,46.948 278.381,44.854 279.011,43.684C279.642,42.513 280.49,41.557 281.629,40.843C282.782,40.092 284.057,39.69 285.527,39.665C286.975,39.588 288.53,39.896 290.206,40.553C291.77,41.166 293.083,41.982 294.145,42.999C295.221,43.98 295.92,45.156 296.256,46.491C296.63,47.84 296.639,49.132 296.321,50.383C295.988,51.67 295.23,53.822 294.048,56.838L292.077,61.866ZM288.186,49.213C288.726,47.836 289.002,46.913 288.999,46.482C288.996,46.051 288.771,45.748 288.287,45.558C287.877,45.398 287.521,45.43 287.181,45.64C286.878,45.865 286.401,46.752 285.803,48.279L280.416,62.021C279.745,63.734 279.411,64.806 279.362,65.26C279.365,65.691 279.612,66.045 280.097,66.235C280.618,66.44 281.041,66.347 281.379,65.922C281.704,65.533 282.216,64.445 282.887,62.732L288.186,49.213ZM305.248,47.78L317.483,54.419L314.45,60.009L309.458,57.3L306.596,62.574L311.062,64.997L308.2,70.27L303.735,67.848L297.402,79.521L290.16,75.591L305.248,47.78ZM336.214,66.91L332.603,72.146L328.586,69.376L314.235,90.188L307.451,85.51L321.802,64.698L317.818,61.951L321.428,56.715L336.214,66.91ZM364.183,92.203L339.722,112.6L332.279,105.509C334.952,101.37 338.151,96.794 341.907,91.809C339.854,93.499 335.496,96.971 328.833,102.225L321.448,95.189L340.609,69.743L346.401,75.262L339.394,83.834L332.663,92.117C336.674,88.37 342.219,83.653 349.268,77.993L355.466,83.898C354.89,84.676 352.72,87.36 348.901,92.064L341.262,101.415C346.878,96.158 352.588,91.267 358.42,86.712L364.183,92.203ZM375.916,107.812L353.681,130.812L348.545,124.115L352.809,120.341L351.008,117.992L346.209,121.067L341.024,114.307L368.687,98.385L375.916,107.812ZM357.107,116.742C359.72,114.234 362.944,111.208 366.89,107.677C361.586,110.686 357.747,112.975 355.403,114.521L357.107,116.742ZM381.75,116.129L384.673,121.184C386.616,124.543 387.779,126.874 388.203,128.246C388.641,129.564 388.544,130.914 387.911,132.296C387.258,133.644 385.782,135.006 383.462,136.348C381.315,137.589 379.735,138.133 378.708,138.035C377.68,137.936 376.629,137.157 375.589,135.679C376.044,137.264 376.12,138.514 375.812,139.34C375.504,140.165 375.144,140.742 374.705,141.181C374.28,141.565 372.97,142.416 370.754,143.697L363.551,147.862L359.727,141.249L368.834,135.982C370.288,135.141 371.128,134.516 371.334,134.074C371.54,133.631 371.373,132.942 370.812,131.973L358.485,139.102L354.36,131.969L381.75,116.129ZM381.166,125.985L375.071,129.51C375.532,130.306 375.991,130.78 376.379,130.972C376.767,131.163 377.594,130.916 378.806,130.215L380.295,129.354C381.161,128.853 381.669,128.374 381.766,127.902C381.828,127.451 381.626,126.782 381.166,125.985ZM394.047,138.523L399.41,151.152L393.555,153.638L391.414,148.594L385.891,150.939L387.892,155.651L382.369,157.996L380.368,153.284L373.962,156.004L376.307,161.527L370.49,163.997L364.924,150.89L394.047,138.523Z"}),v.createElement("path",{d:"M184.955,228.867C188.721,238.945 188.513,248.571 184.331,257.744C180.149,266.917 173.328,273.271 163.868,276.806C162.694,277.245 161.783,276.599 161.136,274.868C160.466,273.075 160.618,271.785 161.592,270.998C165.55,268.391 167.432,264.376 167.237,258.953C167.118,255.615 165.001,248.444 160.888,237.438C158.162,230.143 155.958,225.188 154.277,222.575C150.745,216.708 146.627,213.702 141.923,213.557C140.501,214.089 139.223,212.84 138.091,209.81C137.167,207.337 137.447,205.823 138.931,205.269C147.834,201.941 156.818,202.6 165.882,207.246C174.969,211.953 181.327,219.16 184.955,228.867ZM154.841,276.691C155.65,278.855 155.467,280.157 154.292,280.596C144.462,284.27 134.975,283.869 125.834,279.394C116.823,275.08 110.469,267.978 106.772,258.085C103.145,248.378 103.217,238.768 106.99,229.254C110.725,219.826 117.074,213.437 126.039,210.086C127.029,209.717 127.959,210.038 128.831,211.051C129.61,211.817 130.208,212.756 130.624,213.869C131.017,214.92 131.112,215.836 130.911,216.616C130.678,217.125 129.963,217.851 128.764,218.792C127.404,219.864 126.471,220.952 125.968,222.057C125.054,223.948 124.673,226.416 124.824,229.46C125.129,232.728 126.46,237.515 128.817,243.822L132.768,254.395C136.096,263.298 139.268,269.053 142.286,271.66C145.11,274.127 148.362,275.097 152.04,274.568C152.395,274.576 152.932,274.692 153.65,274.917C154.144,275.296 154.541,275.888 154.841,276.691ZM242.304,166.531L250.75,188.847L244.327,191.459C243.207,191.102 241.934,189.957 240.507,188.025C238.841,185.829 237.838,184.653 237.498,184.498C232.627,181.457 228.398,180.606 224.812,181.946C223.452,182.455 222.252,181.318 221.212,178.535C220.38,176.31 220.332,174.954 221.066,174.468L222.364,173.983C223.539,173.544 225.332,173.437 227.742,173.664C230.152,173.891 231.851,173.82 232.84,173.45C234.51,172.826 235.717,171.247 236.461,168.714L242.304,166.531ZM263.863,212.907C266.451,219.832 265.806,226.591 261.928,233.184C258.136,239.252 252.716,243.602 245.667,246.237C244.493,246.676 243.374,245.473 242.311,242.629C241.294,239.908 241.254,238.197 242.189,237.495C242.638,237.187 243.283,236.84 244.126,236.455C246.622,235.028 248.416,233.512 249.508,231.907C250.599,230.301 250.832,228.663 250.208,226.994C248.984,223.717 246.104,222.045 241.569,221.978C240.125,221.884 235.883,222.412 228.844,223.563C221.782,224.652 215.452,224.023 209.854,221.676C203.537,219.104 199.281,214.881 197.086,209.008C194.845,203.01 194.983,196.969 197.501,190.885C200.103,184.839 204.403,180.695 210.401,178.454C211.204,178.153 212.042,178.51 212.914,179.523C213.608,180.25 214.129,181.077 214.476,182.004C215.284,184.168 215.171,185.655 214.134,186.465C212.318,187.637 210.964,189.2 210.073,191.154C209.02,193.238 208.864,195.27 209.603,197.248C209.973,198.238 210.694,199.131 211.767,199.928C215.673,202.837 220.643,203.41 226.679,201.648C228.703,201.032 230.917,200.451 233.321,199.906C235.724,199.36 238.366,198.795 241.249,198.211C245.088,198.115 248.954,199.031 252.845,200.959C258.25,203.731 261.922,207.713 263.863,212.907ZM214.54,257.975L205.898,235.415L212.483,232.954C213.603,233.311 214.888,234.486 216.338,236.481C217.857,238.661 218.829,239.848 219.254,240.042C224.063,243.107 228.323,243.946 232.032,242.559C233.393,242.051 234.593,243.188 235.632,245.97C236.464,248.196 236.471,249.533 235.651,249.98C235.489,250.111 235.098,250.292 234.48,250.523C233.244,250.985 231.42,251.103 229.01,250.876C226.6,250.649 224.931,250.709 224.004,251.056C222.335,251.68 221.128,253.258 220.383,255.791L214.54,257.975ZM316.313,138.873L324.758,161.189L318.336,163.801C317.216,163.444 315.942,162.299 314.515,160.366C312.849,158.171 311.846,156.995 311.507,156.84C306.635,153.799 302.407,152.948 298.821,154.288C297.46,154.797 296.26,153.66 295.221,150.877C294.389,148.652 294.34,147.296 295.075,146.81L296.373,146.325C297.548,145.886 299.34,145.779 301.75,146.006C304.16,146.233 305.86,146.161 306.849,145.792C308.518,145.168 309.725,143.589 310.47,141.056L316.313,138.873ZM337.872,185.249C340.46,192.174 339.815,198.933 335.937,205.526C332.145,211.593 326.724,215.944 319.676,218.579C318.501,219.018 317.382,217.815 316.32,214.971C315.303,212.25 315.262,210.539 316.198,209.837C316.646,209.529 317.292,209.182 318.134,208.797C320.631,207.37 322.425,205.854 323.516,204.249C324.607,202.643 324.841,201.005 324.217,199.336C322.992,196.059 320.113,194.387 315.578,194.32C314.133,194.226 309.892,194.754 302.853,195.905C295.791,196.994 289.46,196.365 283.862,194.018C277.546,191.446 273.29,187.223 271.095,181.35C268.854,175.352 268.992,169.311 271.509,163.227C274.112,157.181 278.412,153.037 284.409,150.796C285.213,150.495 286.051,150.852 286.923,151.865C287.617,152.592 288.138,153.419 288.484,154.346C289.293,156.51 289.179,157.997 288.143,158.807C286.326,159.979 284.973,161.542 284.082,163.496C283.029,165.58 282.872,167.612 283.612,169.59C283.981,170.58 284.703,171.473 285.776,172.27C289.681,175.179 294.652,175.752 300.687,173.99C302.712,173.374 304.926,172.793 307.329,172.248C309.732,171.702 312.375,171.137 315.257,170.553C319.097,170.457 322.962,171.373 326.854,173.301C332.258,176.073 335.931,180.055 337.872,185.249ZM288.549,230.317L279.907,207.757L286.491,205.296C287.611,205.653 288.896,206.828 290.346,208.823C291.866,211.003 292.838,212.19 293.262,212.384C298.072,215.449 302.331,216.288 306.041,214.901C307.401,214.393 308.601,215.53 309.641,218.312C310.473,220.538 310.479,221.875 309.66,222.322C309.497,222.453 309.107,222.634 308.489,222.865C307.252,223.327 305.429,223.445 303.019,223.218C300.609,222.991 298.94,223.051 298.013,223.398C296.343,224.022 295.136,225.6 294.392,228.133L288.549,230.317Z"}),v.createElement("path",{d:"M394.606,195.569C388.976,196.699 383.488,193.046 382.359,187.416C381.229,181.786 384.882,176.298 390.512,175.168C396.142,174.038 401.63,177.692 402.76,183.321C403.89,188.951 400.236,194.439 394.606,195.569Z"}),v.createElement("path",{d:"M49.46,175.274C55.091,176.4 58.748,181.886 57.621,187.517C56.495,193.147 51.009,196.804 45.378,195.678C39.748,194.551 36.091,189.066 37.217,183.435C38.344,177.804 43.83,174.148 49.46,175.274Z"})),uW=()=>r.jsx("div",{className:"flow",children:r.jsxs("div",{className:"mobile block-center pad-t-8 flow",children:[r.jsx(cW,{className:"brui-logo"}),r.jsx("h1",{className:"mar-t-8",children:"React UI Components"}),r.jsx("h2",{className:"mar-t-none large",children:"For Badger Fans"}),r.jsxs("p",{className:"larger",children:["This is my personal collection of React UI components built around the styles provided by"," ",r.jsx("a",{href:"https://abw.github.io/badger-css",children:"Badger CSS"})]}),r.jsx("div",{className:"text-center",children:r.jsx(dW,{className:"width-10rem"})}),r.jsx("p",{children:"This is Open Source Software and you're welcome to use it. But be warned that it is also Opiniated and Selfish Software."}),r.jsx("p",{children:"I wrote it for me to help my get my job done.  It provides a solid foundation of React components that allow me to get a new site up and running quickly."}),r.jsx("p",{children:"I don't have the time or inclination to help other people get their jobs done (unless they're my clients, colleagues, family or close friends).  So please be aware that this is effectively unsupported software and you're on your own.  If you're not comfortable with that then you should almost certainly be using one of the many other fine UI toolkits that are available."}),r.jsx("p",{children:"Also note that this collection is supposed to be a starting point, not a final destination. You can use the components and styles provided, but at some point you will probably want or need to dig in and start adding your own code, or modifying the builtin components."}),r.jsx("p",{children:"Everything is modular and themeable, so that's generally quite easy to achieve.  But it requires a reasonable knowledge of React, CSS and SASS.  The documentation is provided as a reference for me (and my colleagues) to use, and it assumes a fairly high level of proficiency in these areas."}),r.jsx("p",{children:"Or to put it another way, if you're expecting someone to hold your hand explaining how to get this up and running, then you've probably come to the wrong place."})]})}),pW=Object.freeze(Object.defineProperty({__proto__:null,default:uW},Symbol.toStringTag,{value:"Module"})),hW=()=>{const e={Select:{placeholder:"Pick one"},Button:{color:"green",iconRight:"check"}};return r.jsxs(Ag.Provider,{...e,children:[r.jsx(nn,{options:[{value:10,text:"ten"},{value:11,text:"eleven"}]}),r.jsxs("div",{className:"flex space mar-t-2",children:[r.jsx(B,{text:"OK"}),r.jsx(B,{text:"Not OK",color:"red",iconRight:"thumb-down"})]})]})},fW=`import { Theme, Select, Button } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Theme, Select, Button } from '@abw/badger-react-ui

const BorderClassExamples = () => {
  const myTheme = {
    Select: {
      placeholder: 'Pick one'
    },
    Button: {
      color: 'green',
      iconRight: 'check'
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
      <div className="flex space mar-t-2">
        <Button text="OK"/>
        <Button text="Not OK" color="red" iconRight="thumb-down"/>
      </div>
    </Theme.Provider>
  )
}

export default BorderClassExamples`,mW=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Theming"}),r.jsxs("p",{className:"large",children:["The components can be themed using"," ",r.jsx("a",{href:"https://abw.github.io/react-one-louder/",children:"react-one-louder"}),"."]}),r.jsxs("p",{children:["This allows you to define a theme that provides default properties for the various components in the library. Import the ",r.jsx("code",{children:"Theme"})," component and define a"," ",r.jsx("code",{children:"Theme.Provider"})," around your app or a section of it. Pass it your theme configuration as its properties."]}),r.jsxs("p",{children:["Any components rendered inside the provider context will use the default properties that you have defined.  In the example below we set the default ",r.jsx("code",{children:"placeholder"})," for the ",r.jsx("code",{children:"Select"})," ","component, and default ",r.jsx("code",{children:"color"})," and ",r.jsx("code",{children:"iconRight"})," properties for the ",r.jsx("code",{children:"Button"})," component. These are only default values and can be overridden by providing a component with specific values, as shown for the second button in the example."]}),r.jsx(re,{Component:hW,code:fW,expand:!0})]}),xW=Object.freeze(Object.defineProperty({__proto__:null,default:mW},Symbol.toStringTag,{value:"Module"})),Fd=({border:e})=>{const t=yo(e);return r.jsx("div",{className:t,children:t})},gW=()=>r.jsxs("div",{className:"grid-1 gap-2",children:[r.jsx(Fd,{}),r.jsx(Fd,{border:!0}),r.jsx(Fd,{border:2})]}),vW=`import { borderClass } from '@/src/index.jsx'

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

export default BorderClassExamples`,Xv=()=>r.jsx(N,{code:"borderClass",Component:gW,Source:vW,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"borderClass"})," utility function can be used to construct a CSS class for adding a border.  If the argument is a true value then it will return the ",r.jsx("code",{children:"border"})," CSS class.  If the value is a number then it will add the corresponding ",r.jsx("code",{children:"bdw-N"})," class to set the border width."]})}),bW=Object.freeze(Object.defineProperty({__proto__:null,default:Xv},Symbol.toStringTag,{value:"Module"})),yW=()=>r.jsxs("div",{children:[r.jsx("div",{children:ve("foo","bar","baz")}),r.jsx("div",{children:ve("foo",null,"bar",void 0,"baz")}),r.jsx("div",{children:ve("foo",{active:!1,example:!0})})]}),jW=`import { classes } from '@/src/index.jsx'

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

export default ClassesExamples`,Qv=()=>r.jsxs(N,{code:"classes",Component:yW,Source:jW,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"classes"})," utility function can be used to construct a single CSS class string from various input values."]}),r.jsx("p",{children:"Any null or undefined values will be ignored. If any argument is an object then the keys in the object will be included if the corresponding value is truthy."})]}),SW=Object.freeze(Object.defineProperty({__proto__:null,default:Qv},Symbol.toStringTag,{value:"Module"})),Ja=({color:e})=>{const t=kh(e);return r.jsxs("div",{className:`pad-4 border bdc-50 ${t}`,children:["colorClass: ",t]})},CW=()=>r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(Ja,{}),r.jsx(Ja,{color:"red"}),r.jsx(Ja,{color:"red-50"}),r.jsx(Ja,{color:"red-20-80"}),r.jsx(Ja,{color:"red-20-80-80-20"})]}),wW=`import { colorClass } from '@/src/index.jsx'

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

export default ColorClassExamples`,Jv=()=>r.jsx(N,{code:"colorClass",Component:CW,Source:wW,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"colorClass"})," utility function can be used to construct a CSS class for defining colors.  The format for the argument is a color range name optionally followed by one to four color stop numbers, separated by hyphens.  The first number is the foreground color stop, used to add an ",r.jsx("code",{children:"fgc-N"})," CSS class. The second in the background color stop, adding a ",r.jsx("code",{children:"bgc-N"})," class.  The third and fourth numbers are the foreground and background color stops in dark mode, adding "," ",r.jsx("code",{children:"fgd-N"})," and ",r.jsx("code",{children:"bgd-N"})," classes respectively."]})}),_W=Object.freeze(Object.defineProperty({__proto__:null,default:Jv},Symbol.toStringTag,{value:"Module"})),Oo=({margin:e})=>{const t=qg(e);return r.jsx("div",{className:"bgc-50",children:r.jsxs("div",{className:`border bgc-90 ${t}`,children:["marginClass: ",t]})})},TW=()=>r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(Oo,{}),r.jsx(Oo,{margin:!0}),r.jsx(Oo,{margin:2}),r.jsx(Oo,{margin:"h-4"}),r.jsx(Oo,{margin:"2 4"}),r.jsx(Oo,{margin:"1 2 3 4"})]}),kW=`import { marginClass } from '@/src/index.jsx'

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

export default MarginClassExamples`,e6=()=>r.jsx(N,{code:"marginClass",Component:TW,Source:kW,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"marginClass"})," utility function can be used to construct a CSS class for adding padding.  It works in the same way as ",r.jsx("code",{children:"paddingClass"}),"."]})}),EW=Object.freeze(Object.defineProperty({__proto__:null,default:e6},Symbol.toStringTag,{value:"Module"})),Lo=({padding:e})=>{const t=Gg(e);return r.jsxs("div",{className:`border ${t}`,children:["paddingClass: ",t]})},NW=()=>r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(Lo,{}),r.jsx(Lo,{padding:!0}),r.jsx(Lo,{padding:2}),r.jsx(Lo,{padding:"h-4"}),r.jsx(Lo,{padding:"2 4"}),r.jsx(Lo,{padding:"1 2 3 4"})]}),RW=`import { paddingClass } from '@/src/index.jsx'

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

export default PaddingClassExamples`,t6=()=>r.jsxs(N,{code:"paddingClass",Component:NW,Source:RW,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"paddingClass"})," utility function can be used to construct a CSS class for adding padding.  If the value is true then the"," ",r.jsx("code",{children:"pad"})," CSS class will be returned, adding a single unit (0.25rem) of padding to all sides of the element."]}),r.jsxs("p",{children:["If the value contains two whitespace delimited values then they are assumed to be vertical and horizontal padding values and a class of the form ",r.jsx("code",{children:"pad-v-N pad-h-N"})," will be returned."]}),r.jsxs("p",{children:["If the value contains four whitespace delimited values then they are assumed to be padding values for the top, right, bottom and left edges. A CSS class of the form ",r.jsx("code",{children:"pad-t-N pad-r-N pad-b-N pad-l-N"})," will be returned."]}),r.jsxs("p",{children:["In any other case the value will be prepended by ",r.jsx("code",{children:"pad-"}),". A null or undefine value will return nothing."]})]}),OW=Object.freeze(Object.defineProperty({__proto__:null,default:t6},Symbol.toStringTag,{value:"Module"})),ai=({radius:e})=>{const t=Sa(e);return r.jsxs("div",{className:`border pad-4 ${t}`,children:["radiusClass: ",t]})},LW=()=>r.jsxs("div",{className:"grid-1 gap-2",children:[r.jsx(ai,{}),r.jsx(ai,{radius:1}),r.jsx(ai,{radius:2}),r.jsx(ai,{radius:4})]}),DW=`import { radiusClass } from '@/src/index.jsx'

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

export default RadiusClassExamples`,n6=()=>r.jsx(N,{code:"radiusClass",Component:LW,Source:DW,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"radiusClass"})," utility function can be used to construct a CSS class for adding a border radius.  If the value is a number then it will return the corresponding ",r.jsx("code",{children:"bdr-N"})," class to set the border radius."]})}),BW=Object.freeze(Object.defineProperty({__proto__:null,default:n6},Symbol.toStringTag,{value:"Module"})),si=({shadow:e})=>{const t=ja(e);return r.jsxs("div",{className:`border pad-4 ${t}`,children:["shadowClass: ",t]})},$W=()=>r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(si,{}),r.jsx(si,{shadow:1}),r.jsx(si,{shadow:2}),r.jsx(si,{shadow:4})]}),AW=`import { shadowClass } from '@/src/index.jsx'

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

export default ShadowClassExamples`,r6=()=>r.jsx(N,{code:"shadowClass",Component:$W,Source:AW,children:r.jsxs("p",{children:["The ",r.jsx("code",{children:"shadowClass"})," utility function can be used to construct a CSS class for adding a box shadow.  If the value is a number then it will return the corresponding ",r.jsx("code",{children:"shadow-N"})," class to set the box shadow."]})}),MW=Object.freeze(Object.defineProperty({__proto__:null,default:r6},Symbol.toStringTag,{value:"Module"})),li=e=>{const t=WC(e);return r.jsxs("div",{...t,children:["styleProps: ",JSON.stringify(t)]})},PW=()=>r.jsxs("div",{className:"grid-1 gap-4",children:[r.jsx(li,{}),r.jsx(li,{size:"large"}),r.jsx(li,{color:"red-50"}),r.jsx(li,{className:"my-special-class",color:"red",border:!0,radius:2,shadow:2,padding:"2 4"})]}),IW=`import { styleProps } from '@/src/index.jsx'

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

export default StylePropsExamples`,o6=()=>r.jsxs(N,{code:"styleProps",Component:PW,Source:IW,children:[r.jsxs("p",{children:["The ",r.jsx("code",{children:"styleProps"})," utility function can be used to extract any of the above style properties and generate the corresponding CSS class as the ",r.jsx("code",{children:"className"})," property.  Any other properties will be passed through."]}),r.jsxs("p",{children:["The ",r.jsx("code",{children:"padding"})," and ",r.jsx("code",{children:"margin"})," properties may be abbreviated to ",r.jsx("code",{children:"pad"})," and ",r.jsx("code",{children:"mar"})," respectively."]})]}),zW=Object.freeze(Object.defineProperty({__proto__:null,default:o6},Symbol.toStringTag,{value:"Module"})),FW=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"CSS Classes"}),r.jsxs(Ze,{tocName:"classes",children:[r.jsx(Qv,{}),r.jsx(Xv,{}),r.jsx(n6,{}),r.jsx(r6,{}),r.jsx(Jv,{}),r.jsx(t6,{}),r.jsx(e6,{}),r.jsx(o6,{})]})]}),UW=Object.freeze(Object.defineProperty({__proto__:null,default:FW},Symbol.toStringTag,{value:"Module"})),VW=()=>{const e=xw("unique-key"),[t,n]=J.useState(e.get("form-values")),[o,a]=J.useState(),s=c=>{a(c),Ar(3e3).then(()=>a(null))},l=c=>(e.set("form-values",c),s("Form values have been stored in local storage"),{ok:!0}),i=()=>{e.delete("form-values"),n(null),s("Form values have been removed from local storage")};return r.jsxs("div",{children:[r.jsxs(rr,{values:t,onSubmit:l,onReset:i,children:[r.jsx(st,{name:"name",label:"Your name"}),r.jsx(st,{name:"email",label:"Your email address"}),r.jsxs("div",{className:"flex space",children:[r.jsx(r0,{color:"grey outline",text:"Clear",iconRight:"cross"}),r.jsx(bl,{color:"green",text:"Save",iconRight:"check"})]})]}),o&&r.jsx(Go,{text:o,className:"mar-t-4"})]})},HW=`import { Storage, Form, Field, Reset, Submit, Success } from '@/src/index.jsx'

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

export default StorageExample`,a6=()=>r.jsxs(r.Fragment,{children:[r.jsxs("p",{className:"large",children:["The ",r.jsx("code",{children:"Storage"})," utility can be used to manage local storage to persist UI options or other data."]}),r.jsxs("p",{children:["Call the ",r.jsx("code",{children:"Storage"})," function with a unique key to create a local store.  Then call the ",r.jsx("code",{children:"get"})," method on that object to fetch an item from the store, ",r.jsx("code",{children:"set"})," to set the value for an item or ",r.jsx("code",{children:"delete"})," to delete an item from the store."]}),r.jsx("p",{children:"Store values can be complex data which will be automatically converted to and from JSON."}),r.jsx("p",{children:"Enter some details in the form below and click on the save button. The form values will then be stored in local storage.  Reload the browser page and you should see the values persist."}),r.jsx(re,{Component:VW,code:HW,expand:!0})]}),WW=Object.freeze(Object.defineProperty({__proto__:null,default:a6},Symbol.toStringTag,{value:"Module"})),ZW=()=>r.jsxs("div",{className:"flow",children:[r.jsx("h1",{children:"Storage"}),r.jsx(a6,{})]}),KW=Object.freeze(Object.defineProperty({__proto__:null,default:ZW},Symbol.toStringTag,{value:"Module"})),s6=({path:e,onClick:t,width:n=512,height:o=512,style:a,className:s="night-and-day--icon",fill:l="currentColor"})=>r.jsx("svg",{"aria-hidden":"true",focusable:"false",className:s,style:a,role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${n} ${o}`,onClick:t,children:r.jsx("path",{d:e,fill:l})}),YW=e=>r.jsx(s6,{path:"M289,23C160,23 56,127 56,256C56,385 160,489 289,489C352,489 409,464 451,423C456,418 457,411 454,404C451,397 444,394 436,395C426,397 416,397 405,397C304,397 222,316 222,214C222,146 260,86 315,55C322,51 325,44 323,37C322,30 316,25 309,24C302,23 295,23 289,23L289,23Z",...e}),l6=({Icon:e,caption:t,onClick:n,iconClass:o,iconStyle:a,captionStyle:s,className:l="night-and-day--switcher",captionClass:i="night-and-day--caption",style:c={display:"inline-block"}})=>r.jsxs("div",{className:l,onClick:n,style:c,children:[r.jsx(e,{style:a,className:o}),!!t&&r.jsx("div",{className:i,style:s,children:t})]}),GW=e=>{const{setDark:t}=wl();return r.jsx(l6,{Icon:YW,onClick:t,...e})},qW=e=>r.jsx(s6,{path:"M362,1.2C367,3 370,8 371,13L391,121L499,141C504,142 509,145 511,150C512,155 512,161 509,166L447,256L509,346C512,351 512,357 511,362C509,367 504,370 499,371L391,391L371,499C370,504 367,509 362,511C357,512 351,512 346,509L256,447L166,509C161,512 156,512 151,511C146,509 142,504 141,499L121,391L13,371C8,370 3,367 1,362C0,356 0,351 3,346L65,256L3,166C0,161 0,156 1,151C3,146 8,142 13,141L121,121L141,13C142,8 146,3 151,1C156,0 161,0 166,3L256,65L346,3C351,0 357,0 362,1ZM160,256C160,203 203,160 256,160C309,160 352,203 352,256C352,309 309,352 256,352C203,352 160,309 160,256ZM384,256C384,186 326,128 256,128C186,128 128,186 128,256C128,326 186,384 256,384C326,384 384,326 384,256Z",...e}),XW=e=>{const{setLight:t}=wl();return r.jsx(l6,{Icon:qW,onClick:t,...e})},QW=({sunrise:e={},nightfall:t={}})=>{const{isLight:n,setLight:o,setDark:a}=wl();return n?r.jsx(XW,{onClick:a,...e}):r.jsx(GW,{onClick:o,...t})},i6=v.createContext(),wl=()=>v.useContext(i6),ii="dark",Ud="light",JW="(prefers-color-scheme: dark)",Vd=()=>!1,eZ=()=>{let e={};return{clear:()=>e={},getItem:t=>e[t],setItem:(t,n)=>e[t]=n,removeItem:t=>delete e[t]}},tZ=()=>({matches:Vd,addEventListener:Vd,removeEventListener:Vd}),c6=typeof window<"u",Hd=c6&&window.localStorage?window.localStorage:eZ(),nZ=c6&&window.matchMedia?e=>window.matchMedia(e):tZ,tp=nZ(JW),rZ=()=>tp.matches,oZ=e=>e.split(" "),M1=(e,t="")=>`${e} ${t}`,aZ=({storageKey:e,defaultVariant:t,children:n})=>{const o=e?Hd.getItem(e):null,[a,s=""]=o?oZ(o):[rZ(),null],[l,i]=v.useState(a===ii),[c,d]=v.useState(s||t),u=S=>{i(S),e&&Hd.setItem(e,M1(S?ii:Ud,c))},p=S=>{d(S),e&&Hd.setItem(e,M1(l?ii:Ud,S))},m=S=>u(S.matches);v.useEffect(()=>(tp.addEventListener("change",m),()=>tp.removeEventListener("change",m)),[]);const b={isDark:l,isLight:!l,setDark:()=>u(!0),setLight:()=>u(!1),setIsDark:i,toggleTheme:()=>u(!l),theme:l?ii:Ud,variant:c,setVariant:p};return r.jsx(i6.Provider,{value:b,children:n})},d6="0.2.0",sZ="2024-04-05",P1="sidebar",lZ="no-sidebar",iZ=()=>{const{variant:e,setVariant:t}=wl();return r.jsx("header",{children:r.jsxs("nav",{children:[r.jsxs("div",{children:[r.jsx(ne,{name:"bars",className:"toggle-sidebar action",onClick:()=>t(e===P1?lZ:P1)}),r.jsx(Ln,{to:"/",className:"home mar-l-2",text:"Badger React UI"}),r.jsxs("span",{className:"small mar-l-2",children:["v",d6]})]}),r.jsxs("div",{className:"flex middle",children:[r.jsx("a",{href:"https://github.com/abw/badger-react-ui",children:r.jsx(ne,{name:"github",className:"mar-r-4"})}),r.jsx(QW,{})]})]})})},cZ=()=>r.jsx("footer",{children:r.jsxs("div",{className:"flex space middle",children:[r.jsx("div",{className:"large",children:"Badger React UI"}),r.jsxs("div",{className:"text-center small",children:["by ",r.jsx("a",{href:"https://github.com/abw",children:"Andy Wardley"})]}),r.jsxs("div",{className:"text-right",children:["v",d6,r.jsx("br",{}),sZ]})]})}),dZ=({toc:e,contentRef:t})=>r.jsx("ul",{className:"toc",children:Object.entries(e).map(([n,o])=>r.jsx("li",{onClick:()=>{var a,s;(s=t.current)==null||s.scrollTo({top:((a=o.ref.current)==null?void 0:a.offsetTop)-20})},className:o.heading?"heading":"",children:o.heading?r.jsx("h4",{children:o.heading}):o.text.match(/^code:/)?r.jsx("code",{children:o.text.replace(/^code:/,"")}):o.text},n))}),uZ=yl.Consumer(dZ),pZ=({title:e,path:t,items:n,tocs:o})=>{const a=Cl(),s=t&&a.pathname.slice(0,t.length)===t;return r.jsxs("details",{className:"menu",open:s,children:[r.jsx("summary",{children:e}),r.jsx("ul",{children:n.map(l=>{const i=a.pathname===l.to;return r.jsxs("li",{children:[r.jsx(Ln,{className:"item",...l}),!!l.tocName&&i&&o[l.tocName]&&r.jsx(uZ,{toc:o[l.tocName]})]},l.to)})})]})},ci=yl.Consumer(pZ),hZ={title:"Getting Started",path:"/getting-started",items:[{to:"/getting-started/installation",text:"Installation"}]},fZ={title:"Components",path:"/components",items:[{to:"/components/alert",text:"Alert",tocName:"alert"},{to:"/components/badge",text:"Badge",tocName:"badge"},{to:"/components/button",text:"Button",tocName:"button"},{to:"/components/buttons",text:"Buttons",tocName:"buttons"},{to:"/components/checkbox",text:"Checkbox",tocName:"checkbox"},{to:"/components/confirm",text:"Confirm",tocName:"confirm"},{to:"/components/datatable",text:"Datatable",tocName:"datatable"},{to:"/components/details",text:"Details",tocName:"details"},{to:"/components/dropdown",text:"Dropdown",tocName:"dropdown"},{to:"/components/dropdown-menu",text:"Dropdown Menu",tocName:"dropdown-menu"},{to:"/components/form",text:"Form",tocName:"form"},{to:"/components/icon",text:"Icon",tocName:"icon"},{to:"/components/modal",text:"Modal",tocName:"modal"},{to:"/components/overlay",text:"Overlay",tocName:"overlay"},{to:"/components/pager",text:"Pager",tocName:"pager"},{to:"/components/radio",text:"Radio",tocName:"radio"},{to:"/components/search",text:"Search",tocName:"search"},{to:"/components/select",text:"Select",tocName:"select"},{to:"/components/sortable",text:"Sortable",tocName:"sortable"},{to:"/components/spinner",text:"Spinner",tocName:"spinner"}]},mZ={title:"Utilities",path:"/utilities",items:[{to:"/utilities/classes",text:"CSS Classes",tocName:"classes"},{to:"/utilities/storage",text:"Storage",tocName:"storage"}]},xZ={title:"Theming",path:"/theming",items:[{to:"/theming",text:"It's One Louder",tocName:"theming"}]},gZ=()=>r.jsxs(r.Fragment,{children:[r.jsx(ci,{...hZ}),r.jsx(ci,{...fZ}),r.jsx(ci,{...mZ}),r.jsx(ci,{...xZ})]});function vZ(){const{pathname:e}=Ba();return v.useEffect(()=>bZ(document.getElementById("content")),[e]),null}function bZ(e,{top:t=0,left:n=0,behavior:o="smooth"}={}){e==null||e.scrollTo({top:t,left:n,behavior:o})}const yZ=({contentRef:e})=>{const{theme:t,variant:n}=wl();return r.jsxs("div",{id:"site",className:n,"data-theme":t,children:[r.jsx(iZ,{}),r.jsxs("div",{id:"app",children:[r.jsx(vZ,{}),r.jsx("aside",{children:r.jsx(gZ,{})}),r.jsx("main",{id:"content",ref:e,children:r.jsx(RM,{})})]}),r.jsx(cZ,{})]})},jZ=yl.Consumer(yZ),SZ=/\/_layout$/,CZ=/\/_examples\//,wZ=_Z(Object.assign({"../pages/components/alert/_examples/Alert/index.jsx":YR,"../pages/components/alert/_examples/Error/index.jsx":eO,"../pages/components/alert/_examples/Info/index.jsx":rO,"../pages/components/alert/_examples/Success/index.jsx":sO,"../pages/components/alert/_examples/Warning/index.jsx":cO,"../pages/components/alert/_examples/border/index.jsx":pO,"../pages/components/alert/_examples/className/index.jsx":mO,"../pages/components/alert/_examples/color/index.jsx":vO,"../pages/components/alert/_examples/dismissable/index.jsx":jO,"../pages/components/alert/_examples/headIcon/index.jsx":wO,"../pages/components/alert/_examples/headline/index.jsx":kO,"../pages/components/alert/_examples/icon/index.jsx":RO,"../pages/components/alert/_examples/onDismiss/index.jsx":DO,"../pages/components/alert/_examples/radius/index.jsx":AO,"../pages/components/alert/_examples/revealable/index.jsx":IO,"../pages/components/alert/_examples/revealed/index.jsx":UO,"../pages/components/alert/_examples/shadow/index.jsx":WO,"../pages/components/alert/_examples/size/index.jsx":YO,"../pages/components/alert/_examples/stripe/index.jsx":XO,"../pages/components/alert/_examples/text/index.jsx":eL,"../pages/components/alert/_examples/title/index.jsx":rL,"../pages/components/alert/_examples/type/index.jsx":sL,"../pages/components/alert/index.jsx":cL,"../pages/components/badge/_examples/Badge/index.jsx":pL,"../pages/components/badge/_examples/Content/index.jsx":mL,"../pages/components/badge/_examples/border/index.jsx":vL,"../pages/components/badge/_examples/className/index.jsx":jL,"../pages/components/badge/_examples/color/index.jsx":wL,"../pages/components/badge/_examples/icon/index.jsx":kL,"../pages/components/badge/_examples/iconLeft/index.jsx":RL,"../pages/components/badge/_examples/iconRight/index.jsx":DL,"../pages/components/badge/_examples/radius/index.jsx":AL,"../pages/components/badge/_examples/shadow/index.jsx":IL,"../pages/components/badge/_examples/size/index.jsx":UL,"../pages/components/badge/_examples/tag/index.jsx":WL,"../pages/components/badge/_examples/text/index.jsx":YL,"../pages/components/badge/_examples/tooltip/index.jsx":XL,"../pages/components/badge/index.jsx":JL,"../pages/components/button/_examples/Button/index.jsx":nD,"../pages/components/button/_examples/Content/index.jsx":aD,"../pages/components/button/_examples/bare/index.jsx":iD,"../pages/components/button/_examples/border/index.jsx":uD,"../pages/components/button/_examples/bright/index.jsx":fD,"../pages/components/button/_examples/className/index.jsx":gD,"../pages/components/button/_examples/color/index.jsx":yD,"../pages/components/button/_examples/dark/index.jsx":CD,"../pages/components/button/_examples/disabled/index.jsx":TD,"../pages/components/button/_examples/icon/index.jsx":ND,"../pages/components/button/_examples/iconLeft/index.jsx":LD,"../pages/components/button/_examples/iconRight/index.jsx":$D,"../pages/components/button/_examples/label/index.jsx":PD,"../pages/components/button/_examples/onClick/index.jsx":FD,"../pages/components/button/_examples/outline/index.jsx":HD,"../pages/components/button/_examples/radius/index.jsx":KD,"../pages/components/button/_examples/shaded/index.jsx":qD,"../pages/components/button/_examples/shadow/index.jsx":JD,"../pages/components/button/_examples/size/index.jsx":nB,"../pages/components/button/_examples/text/index.jsx":aB,"../pages/components/button/_examples/tooltip/index.jsx":iB,"../pages/components/button/_examples/type/index.jsx":uB,"../pages/components/button/index.jsx":hB,"../pages/components/buttons/_examples/Button/index.jsx":gB,"../pages/components/buttons/_examples/Buttons/index.jsx":yB,"../pages/components/buttons/_examples/buttonClass/index.jsx":CB,"../pages/components/buttons/_examples/buttonsProp/index.jsx":TB,"../pages/components/buttons/_examples/className/index.jsx":NB,"../pages/components/buttons/_examples/outline/index.jsx":LB,"../pages/components/buttons/index.jsx":BB,"../pages/components/checkbox/_examples/CheckboxState/index.jsx":MB,"../pages/components/checkbox/_examples/Overview/index.jsx":zB,"../pages/components/checkbox/_examples/border/index.jsx":VB,"../pages/components/checkbox/_examples/checked/index.jsx":ZB,"../pages/components/checkbox/_examples/checkedText/index.jsx":GB,"../pages/components/checkbox/_examples/className/index.jsx":QB,"../pages/components/checkbox/_examples/disabled/index.jsx":t$,"../pages/components/checkbox/_examples/onChange/index.jsx":o$,"../pages/components/checkbox/_examples/text/index.jsx":l$,"../pages/components/checkbox/index.jsx":c$,"../pages/components/confirm/_examples/Overview/index.jsx":p$,"../pages/components/confirm/_examples/cancel/index.jsx":m$,"../pages/components/confirm/_examples/cancelProps/index.jsx":v$,"../pages/components/confirm/_examples/className/index.jsx":j$,"../pages/components/confirm/_examples/color/index.jsx":w$,"../pages/components/confirm/_examples/confirm/index.jsx":k$,"../pages/components/confirm/_examples/confirmProps/index.jsx":R$,"../pages/components/confirm/_examples/iconRight/index.jsx":D$,"../pages/components/confirm/_examples/onClick/index.jsx":A$,"../pages/components/confirm/_examples/text/index.jsx":I$,"../pages/components/confirm/index.jsx":F$,"../pages/components/datatable/_examples/Datatable/index.jsx":H$,"../pages/components/datatable/_examples/color/index.jsx":K$,"../pages/components/datatable/_examples/columns/className/index.jsx":X$,"../pages/components/datatable/_examples/columns/display/index.jsx":eA,"../pages/components/datatable/_examples/columns/index.jsx":uA,"../pages/components/datatable/_examples/columns/label/index.jsx":fA,"../pages/components/datatable/_examples/columns/type/index.jsx":gA,"../pages/components/datatable/_examples/onRowClick/index.jsx":yA,"../pages/components/datatable/_examples/pager/index.jsx":eP,"../pages/components/datatable/_examples/rows/index.jsx":nP,"../pages/components/datatable/index.jsx":oP,"../pages/components/details/_examples/Details/index.jsx":lP,"../pages/components/details/_examples/border/index.jsx":dP,"../pages/components/details/_examples/color/index.jsx":hP,"../pages/components/details/_examples/content/index.jsx":xP,"../pages/components/details/_examples/lined/index.jsx":bP,"../pages/components/details/_examples/open/index.jsx":SP,"../pages/components/details/_examples/radius/index.jsx":_P,"../pages/components/details/_examples/shaded/index.jsx":EP,"../pages/components/details/_examples/shadow/index.jsx":OP,"../pages/components/details/_examples/summary/index.jsx":BP,"../pages/components/details/index.jsx":AP,"../pages/components/dropdown-menu/_examples/DropdownMenu/index.jsx":IP,"../pages/components/dropdown-menu/_examples/onSelect/index.jsx":UP,"../pages/components/dropdown-menu/_examples/options/index.jsx":JP,"../pages/components/dropdown-menu/index.jsx":tI,"../pages/components/dropdown/_examples/Dropdown/index.jsx":oI,"../pages/components/dropdown/_examples/content/index.jsx":lI,"../pages/components/dropdown/_examples/iconLeft/index.jsx":dI,"../pages/components/dropdown/_examples/iconLeftRotate/index.jsx":hI,"../pages/components/dropdown/_examples/iconRight/index.jsx":xI,"../pages/components/dropdown/_examples/iconRightRotate/index.jsx":bI,"../pages/components/dropdown/_examples/openOnHover/index.jsx":SI,"../pages/components/dropdown/_examples/right/index.jsx":_I,"../pages/components/dropdown/_examples/text/index.jsx":EI,"../pages/components/dropdown/_examples/wide/index.jsx":OI,"../pages/components/dropdown/index.jsx":DI,"../pages/components/form/_examples/search/index.jsx":UI,"../pages/components/form/_examples/submitting/custom.jsx":HI,"../pages/components/form/_examples/submitting/defaults.jsx":ZI,"../pages/components/form/_examples/submitting/index.jsx":GI,"../pages/components/form/_examples/uiselect/index.jsx":nz,"../pages/components/form/index.jsx":dz,"../pages/components/icon/_examples/Icon/index.jsx":vz,"../pages/components/icon/_examples/IconLibrary/index.jsx":bz,"../pages/components/icon/_examples/className/index.jsx":Sz,"../pages/components/icon/_examples/color/index.jsx":_z,"../pages/components/icon/_examples/name/index.jsx":Ez,"../pages/components/icon/_examples/path/index.jsx":Oz,"../pages/components/icon/_examples/size/index.jsx":Bz,"../pages/components/icon/index.jsx":Az,"../pages/components/modal/_examples/Modal/index.jsx":Iz,"../pages/components/modal/_examples/ModalState/index.jsx":Uz,"../pages/components/modal/_examples/className/index.jsx":Wz,"../pages/components/modal/_examples/close/index.jsx":Yz,"../pages/components/modal/_examples/closeIcon/index.jsx":Xz,"../pages/components/modal/_examples/footer/index.jsx":eF,"../pages/components/modal/_examples/header/index.jsx":rF,"../pages/components/modal/_examples/text/index.jsx":sF,"../pages/components/modal/_examples/title/index.jsx":cF,"../pages/components/modal/index.jsx":uF,"../pages/components/overlay/_examples/Overlay/index.jsx":fF,"../pages/components/overlay/_examples/OverlayState/index.jsx":gF,"../pages/components/overlay/_examples/className/index.jsx":jF,"../pages/components/overlay/_examples/custom/index.jsx":wF,"../pages/components/overlay/_examples/fixed/index.jsx":kF,"../pages/components/overlay/_examples/theme/index.jsx":LF,"../pages/components/overlay/index.jsx":BF,"../pages/components/pager/_examples/Context/index.jsx":IF,"../pages/components/pager/_examples/Pager/index.jsx":UF,"../pages/components/pager/_examples/className/index.jsx":WF,"../pages/components/pager/_examples/color/index.jsx":YF,"../pages/components/pager/_examples/icons/index.jsx":XF,"../pages/components/pager/_examples/nextIcon/index.jsx":tU,"../pages/components/pager/_examples/showFirstLast/index.jsx":oU,"../pages/components/pager/_examples/size/index.jsx":lU,"../pages/components/pager/index.jsx":cU,"../pages/components/radio/_examples/Overview/index.jsx":pU,"../pages/components/radio/_examples/border/index.jsx":mU,"../pages/components/radio/_examples/className/index.jsx":vU,"../pages/components/radio/_examples/disabled/index.jsx":jU,"../pages/components/radio/_examples/inline/index.jsx":wU,"../pages/components/radio/_examples/name/index.jsx":kU,"../pages/components/radio/_examples/onChange/index.jsx":RU,"../pages/components/radio/_examples/options/index.jsx":DU,"../pages/components/radio/_examples/value/index.jsx":AU,"../pages/components/radio/index.jsx":PU,"../pages/components/search/_examples/Search/index.jsx":UU,"../pages/components/search/_examples/displayResult/index.jsx":ZU,"../pages/components/search/_examples/displayValue/index.jsx":qU,"../pages/components/search/_examples/onSearch/index.jsx":eV,"../pages/components/search/_examples/onSelect/index.jsx":oV,"../pages/components/search/index.jsx":sV,"../pages/components/select/_examples/Select/index.jsx":dV,"../pages/components/select/_examples/displayOption/index.jsx":fV,"../pages/components/select/_examples/displayValue/index.jsx":vV,"../pages/components/select/_examples/options/index.jsx":SV,"../pages/components/select/_examples/search/index.jsx":NV,"../pages/components/select/_examples/searchOptions/index.jsx":$V,"../pages/components/select/_examples/validOption/index.jsx":IV,"../pages/components/select/_examples/value/index.jsx":ZV,"../pages/components/select/index.jsx":YV,"../pages/components/sortable/_examples/Horizontal/index.jsx":XV,"../pages/components/sortable/_examples/Sortable/index.jsx":eH,"../pages/components/sortable/_examples/Vertical/index.jsx":rH,"../pages/components/sortable/index.jsx":aH,"../pages/components/spinner/_examples/Spinner/index.jsx":iH,"../pages/components/spinner/_examples/bgColor/index.jsx":uH,"../pages/components/spinner/_examples/bgFill/index.jsx":fH,"../pages/components/spinner/_examples/bgFillStop/index.jsx":gH,"../pages/components/spinner/_examples/bgIcon/index.jsx":yH,"../pages/components/spinner/_examples/bgStroke/index.jsx":CH,"../pages/components/spinner/_examples/bgStrokeStop/index.jsx":TH,"../pages/components/spinner/_examples/color/index.jsx":NH,"../pages/components/spinner/_examples/fill/index.jsx":LH,"../pages/components/spinner/_examples/fillStop/index.jsx":$H,"../pages/components/spinner/_examples/icon/index.jsx":PH,"../pages/components/spinner/_examples/reverse/index.jsx":FH,"../pages/components/spinner/_examples/shrink/index.jsx":HH,"../pages/components/spinner/_examples/size/index.jsx":KH,"../pages/components/spinner/_examples/stroke/index.jsx":qH,"../pages/components/spinner/_examples/strokeStop/index.jsx":JH,"../pages/components/spinner/index.jsx":tW,"../pages/getting-started/installation.jsx":iW,"../pages/index.jsx":pW,"../pages/theming/index.jsx":xW,"../pages/utilities/classes/_examples/borderClass/index.jsx":bW,"../pages/utilities/classes/_examples/classes/index.jsx":SW,"../pages/utilities/classes/_examples/colorClass/index.jsx":_W,"../pages/utilities/classes/_examples/marginClass/index.jsx":EW,"../pages/utilities/classes/_examples/paddingClass/index.jsx":OW,"../pages/utilities/classes/_examples/radiusClass/index.jsx":BW,"../pages/utilities/classes/_examples/shadowClass/index.jsx":MW,"../pages/utilities/classes/_examples/styleProps/index.jsx":zW,"../pages/utilities/classes/index.jsx":UW,"../pages/utilities/storage/_examples/Storage/index.jsx":WW,"../pages/utilities/storage/index.jsx":KW}));function _Z(e){const n=Object.entries(e).map(TZ).filter(a=>!a.path.match(CZ)).reduce((a,s)=>(a[s.path]=s,a),{}),o=Object.keys(n).filter(a=>a.match(SZ)).sort((a,s)=>s.length-a.length);for(let a of o){const s=n[a];delete n[a];const l=a.replace(/_layout$/,""),i=l.length;s.path=l,s.children=[];const c=n[l];c&&(delete c.path,c.index=!0,s.children.push(c),delete n[l]);const d=Object.keys(n).filter(u=>u.slice(0,i)===l);for(let u of d){const p=n[u];delete n[u],u=u.slice(i),p.path=u.length?u:"/",s.children.push(p)}n[l]=s}return Object.values(n)}function TZ([e,t]){const n=e.replace(/^[./]*pages/,"").replace(/\.jsx$/,"").replace(/index$/,"").replace(/\[(\w+)\]/,":$1"),o=t.default;return{path:n,Component:o}}const kZ=MM([{path:"/",element:r.jsx(jZ,{}),children:wZ}],{basename:"/badger-react-ui"});Wd.createRoot(document.getElementById("root")).render(r.jsx(J.StrictMode,{children:r.jsx(aZ,{storageKey:"theme",children:r.jsx(yl.Provider,{children:r.jsx(WM,{router:kZ})})})}));
